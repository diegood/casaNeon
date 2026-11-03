var si=globalThis,ri=si.ShadowRoot&&(si.ShadyCSS===void 0||si.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,uo=Symbol(),dr=new WeakMap,An=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==uo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ri&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=dr.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&dr.set(e,t))}return t}toString(){return this.cssText}},ur=r=>new An(typeof r=="string"?r:r+"",void 0,uo),Gt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,i,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[o+1],r[0]);return new An(e,r,uo)},pr=(r,t)=>{if(ri)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),i=si.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=e.cssText,r.appendChild(n)}},po=ri?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ur(e)})(r):r;var{is:Xd,defineProperty:tu,getOwnPropertyDescriptor:eu,getOwnPropertyNames:nu,getOwnPropertySymbols:iu,getPrototypeOf:ou}=Object,ai=globalThis,hr=ai.trustedTypes,su=hr?hr.emptyScript:"",ho=ai.reactiveElementPolyfillSupport,zn=(r,t)=>r,fo={toAttribute(r,t){switch(t){case Boolean:r=r?su:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},mr=(r,t)=>!Xd(r,t),fr={attribute:!0,type:String,converter:fo,reflect:!1,useDefault:!1,hasChanged:mr};Symbol.metadata??=Symbol("metadata"),ai.litPropertyMetadata??=new WeakMap;var me=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=fr){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),i=this.getPropertyDescriptor(t,n,e);i!==void 0&&tu(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){let{get:i,set:o}=eu(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get:i,set(s){let a=i==null?void 0:i.call(this);o==null||o.call(this,s),this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??fr}static _$Ei(){if(this.hasOwnProperty(zn("elementProperties")))return;let t=ou(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(zn("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(zn("properties"))){let e=this.properties,n=[...nu(e),...iu(e)];for(let i of n)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,i]of e)this.elementProperties.set(n,i)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let i=this._$Eu(e,n);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let i of n)e.unshift(po(i))}else t!==void 0&&e.push(po(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return pr(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var o;let n=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,n);if(i!==void 0&&n.reflect===!0){let s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:fo).toAttribute(e,n.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,e){var o,s;let n=this.constructor,i=n._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let a=n.getPropertyOptions(i),l=typeof a.converter=="function"?{fromAttribute:a.converter}:((o=a.converter)==null?void 0:o.fromAttribute)!==void 0?a.converter:fo;this._$Em=i;let d=l.fromAttribute(e,a.type);this[i]=d??((s=this._$Ej)==null?void 0:s.get(i))??d,this._$Em=null}}requestUpdate(t,e,n,i=!1,o){var s;if(t!==void 0){let a=this.constructor;if(i===!1&&(o=this[t]),n??=a.getPropertyOptions(t),!((n.hasChanged??mr)(o,e)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(t))&&!this.hasAttribute(a._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:i,wrapped:o},s){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,s??e??this[t]),o!==!0||s!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[o,s]of i){let{wrapped:a}=s,l=this[o];a!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,s,l)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(e)):this._$EM()}catch(i){throw t=!1,this._$EM(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdated)==null?void 0:i.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};me.elementStyles=[],me.shadowRootOptions={mode:"open"},me[zn("elementProperties")]=new Map,me[zn("finalized")]=new Map,ho==null||ho({ReactiveElement:me}),(ai.reactiveElementVersions??=[]).push("2.1.2");var _o=globalThis,gr=r=>r,li=_o.trustedTypes,_r=li?li.createPolicy("lit-html",{createHTML:r=>r}):void 0,bo="$lit$",ge=`lit$${Math.random().toFixed(9).slice(2)}$`,vo="?"+ge,ru=`<${vo}>`,Ye=document,Fn=()=>Ye.createComment(""),Rn=r=>r===null||typeof r!="object"&&typeof r!="function",yo=Array.isArray,xr=r=>yo(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",mo=`[ 	
\f\r]`,In=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,br=/-->/g,vr=/>/g,Ue=RegExp(`>|${mo}(?:([^\\s"'>=/]+)(${mo}*=${mo}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),yr=/'/g,$r=/"/g,kr=/^(?:script|style|textarea|title)$/i,$o=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),g=$o(1),H=$o(2),ph=$o(3),ee=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),wr=new WeakMap,Ge=Ye.createTreeWalker(Ye,129);function Mr(r,t){if(!yo(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return _r!==void 0?_r.createHTML(t):t}var Sr=(r,t)=>{let e=r.length-1,n=[],i,o=t===2?"<svg>":t===3?"<math>":"",s=In;for(let a=0;a<e;a++){let l=r[a],d,c,u=-1,p=0;for(;p<l.length&&(s.lastIndex=p,c=s.exec(l),c!==null);)p=s.lastIndex,s===In?c[1]==="!--"?s=br:c[1]!==void 0?s=vr:c[2]!==void 0?(kr.test(c[2])&&(i=RegExp("</"+c[2],"g")),s=Ue):c[3]!==void 0&&(s=Ue):s===Ue?c[0]===">"?(s=i??In,u=-1):c[1]===void 0?u=-2:(u=s.lastIndex-c[2].length,d=c[1],s=c[3]===void 0?Ue:c[3]==='"'?$r:yr):s===$r||s===yr?s=Ue:s===br||s===vr?s=In:(s=Ue,i=void 0);let h=s===Ue&&r[a+1].startsWith("/>")?" ":"";o+=s===In?l+ru:u>=0?(n.push(d),l.slice(0,u)+bo+l.slice(u)+ge+h):l+ge+(u===-2?a:h)}return[Mr(r,o+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},Tn=class r{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let o=0,s=0,a=t.length-1,l=this.parts,[d,c]=Sr(t,e);if(this.el=r.createElement(d,n),Ge.currentNode=this.el.content,e===2||e===3){let u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(i=Ge.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let u of i.getAttributeNames())if(u.endsWith(bo)){let p=c[s++],h=i.getAttribute(u).split(ge),f=/([.?@])?(.*)/.exec(p);l.push({type:1,index:o,name:f[2],strings:h,ctor:f[1]==="."?di:f[1]==="?"?ui:f[1]==="@"?pi:Je}),i.removeAttribute(u)}else u.startsWith(ge)&&(l.push({type:6,index:o}),i.removeAttribute(u));if(kr.test(i.tagName)){let u=i.textContent.split(ge),p=u.length-1;if(p>0){i.textContent=li?li.emptyScript:"";for(let h=0;h<p;h++)i.append(u[h],Fn()),Ge.nextNode(),l.push({type:2,index:++o});i.append(u[p],Fn())}}}else if(i.nodeType===8)if(i.data===vo)l.push({type:2,index:o});else{let u=-1;for(;(u=i.data.indexOf(ge,u+1))!==-1;)l.push({type:7,index:o}),u+=ge.length-1}o++}}static createElement(t,e){let n=Ye.createElement("template");return n.innerHTML=t,n}};function Qe(r,t,e=r,n){var s,a;if(t===ee)return t;let i=n!==void 0?(s=e._$Co)==null?void 0:s[n]:e._$Cl,o=Rn(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(r),i._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=i:e._$Cl=i),i!==void 0&&(t=Qe(r,i._$AS(r,t.values),i,n)),t}var ci=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??Ye).importNode(e,!0);Ge.currentNode=i;let o=Ge.nextNode(),s=0,a=0,l=n[0];for(;l!==void 0;){if(s===l.index){let d;l.type===2?d=new hn(o,o.nextSibling,this,t):l.type===1?d=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(d=new hi(o,this,t)),this._$AV.push(d),l=n[++a]}s!==(l==null?void 0:l.index)&&(o=Ge.nextNode(),s++)}return Ge.currentNode=Ye,i}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},hn=class r{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,i){this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Qe(this,t,e),Rn(t)?t===$||t==null||t===""?(this._$AH!==$&&this._$AR(),this._$AH=$):t!==this._$AH&&t!==ee&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):xr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==$&&Rn(this._$AH)?this._$AA.nextSibling.data=t:this.T(Ye.createTextNode(t)),this._$AH=t}$(t){var o;let{values:e,_$litType$:n}=t,i=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Tn.createElement(Mr(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(e);else{let s=new ci(i,this),a=s.u(this.options);s.p(e),this.T(a),this._$AH=s}}_$AC(t){let e=wr.get(t.strings);return e===void 0&&wr.set(t.strings,e=new Tn(t)),e}k(t){yo(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,i=0;for(let o of t)i===e.length?e.push(n=new r(this.O(Fn()),this.O(Fn()),this,this.options)):n=e[i],n._$AI(o),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let i=gr(t).nextSibling;gr(t).remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},Je=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,i,o){this.type=1,this._$AH=$,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=$}_$AI(t,e=this,n,i){let o=this.strings,s=!1;if(o===void 0)t=Qe(this,t,e,0),s=!Rn(t)||t!==this._$AH&&t!==ee,s&&(this._$AH=t);else{let a=t,l,d;for(t=o[0],l=0;l<o.length-1;l++)d=Qe(this,a[n+l],e,l),d===ee&&(d=this._$AH[l]),s||=!Rn(d)||d!==this._$AH[l],d===$?t=$:t!==$&&(t+=(d??"")+o[l+1]),this._$AH[l]=d}s&&!i&&this.j(t)}j(t){t===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},di=class extends Je{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===$?void 0:t}},ui=class extends Je{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==$)}},pi=class extends Je{constructor(t,e,n,i,o){super(t,e,n,i,o),this.type=5}_$AI(t,e=this){if((t=Qe(this,t,e,0)??$)===ee)return;let n=this._$AH,i=t===$&&n!==$||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==$&&(n===$||i);i&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},hi=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){Qe(this,t)}},Er={M:bo,P:ge,A:vo,C:1,L:Sr,R:ci,D:xr,V:Qe,I:hn,H:Je,N:ui,U:pi,B:di,F:hi},go=_o.litHtmlPolyfillSupport;go==null||go(Tn,hn),(_o.litHtmlVersions??=[]).push("3.3.3");var Pr=(r,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,i=n._$litPart$;if(i===void 0){let o=(e==null?void 0:e.renderBefore)??null;n._$litPart$=i=new hn(t.insertBefore(Fn(),o),o,void 0,e??{})}return i._$AI(r),i};var Ln=globalThis,Ht=class extends me{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pr(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ee}},Ar;Ht._$litElement$=!0,Ht.finalized=!0,(Ar=Ln.litElementHydrateSupport)==null||Ar.call(Ln,{LitElement:Ht});var wo=Ln.litElementPolyfillSupport;wo==null||wo({LitElement:Ht});(Ln.litElementVersions??=[]).push("4.2.2");function zr(r,t,e,n,i=!1){let o=s=>{let a=s==null?void 0:s.value.trim();!s||!a||(s.value="",n([...r,a]))};return g`<div class="fp3d-lines ${i?"fp3d-wide":""}" role="group" aria-label=${e.label}>
    ${e.label}
    ${r.map((s,a)=>g`<div class="fp3d-lines-row">
        <span>${s}</span>
        <button type="button" title=${e.remove} aria-label=${`${e.remove}: ${s}`} ?disabled=${t} @click=${()=>n(r.filter((l,d)=>d!==a))}>✕</button>
      </div>`)}
    <div class="fp3d-lines-add">
      <input
        type="text"
        maxlength="160"
        placeholder=${e.placeholder}
        aria-label=${e.placeholder}
        ?disabled=${t}
        @keydown=${s=>{s.key==="Enter"&&(s.preventDefault(),o(s.target))}}
      />
      <button type="button" class="fp3d-btn" ?disabled=${t} @click=${s=>o(s.currentTarget.previousElementSibling)}>
        ${e.add}
      </button>
    </div>
  </div>`}var fn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ze=r=>(...t)=>({_$litDirective$:r,values:t}),ze=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this._$Ct=t,this._$AM=e,this._$Ci=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var On=class extends ze{constructor(t){if(super(t),this.it=$,t.type!==fn.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===$||t==null)return this._t=void 0,this.it=t;if(t===ee)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;let e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}};On.directiveName="unsafeHTML",On.resultType=1;var Ir=Ze(On);var{I:au}=Er,Fr=r=>r;var Tr=r=>r.strings===void 0,Rr=()=>document.createComment(""),mn=(r,t,e)=>{var o;let n=r._$AA.parentNode,i=t===void 0?r._$AB:t._$AA;if(e===void 0){let s=n.insertBefore(Rr(),i),a=n.insertBefore(Rr(),i);e=new au(s,a,r,r.options)}else{let s=e._$AB.nextSibling,a=e._$AM,l=a!==r;if(l){let d;(o=e._$AQ)==null||o.call(e,r),e._$AM=r,e._$AP!==void 0&&(d=r._$AU)!==a._$AU&&e._$AP(d)}if(s!==i||l){let d=e._$AA;for(;d!==s;){let c=Fr(d).nextSibling;Fr(n).insertBefore(d,i),d=c}}}return e},Ie=(r,t,e=r)=>(r._$AI(t,e),r),lu={},Lr=(r,t=lu)=>r._$AH=t,Or=r=>r._$AH,fi=r=>{r._$AR(),r._$AA.remove()};var Cn=(r,t)=>{var n;let e=r._$AN;if(e===void 0)return!1;for(let i of e)(n=i._$AO)==null||n.call(i,t,!1),Cn(i,t);return!0},mi=r=>{let t,e;do{if((t=r._$AM)===void 0)break;e=t._$AN,e.delete(r),r=t}while((e==null?void 0:e.size)===0)},Cr=r=>{for(let t;t=r._$AM;r=t){let e=t._$AN;if(e===void 0)t._$AN=e=new Set;else if(e.has(r))break;e.add(r),uu(t)}};function cu(r){this._$AN!==void 0?(mi(this),this._$AM=r,Cr(this)):this._$AM=r}function du(r,t=!1,e=0){let n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let o=e;o<n.length;o++)Cn(n[o],!1),mi(n[o]);else n!=null&&(Cn(n,!1),mi(n));else Cn(this,r)}var uu=r=>{r.type==fn.CHILD&&(r._$AP??=du,r._$AQ??=cu)},gi=class extends ze{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,e,n){super._$AT(t,e,n),Cr(this),this.isConnected=t._$AU}_$AO(t,e=!0){var n,i;t!==this.isConnected&&(this.isConnected=t,t?(n=this.reconnected)==null||n.call(this):(i=this.disconnected)==null||i.call(this)),e&&(Cn(this,t),mi(this))}setValue(t){if(Tr(this._$Ct))this._$Ct._$AI(t,this);else{let e=[...this._$Ct._$AH];e[this._$Ci]=t,this._$Ct._$AI(e,this,0)}}disconnected(){}reconnected(){}};var xo=new WeakMap,Hr=Ze(class extends gi{render(r){return $}update(r,[t]){var n;let e=t!==this.G;return e&&this.rt(void 0),(e||this.lt!==this.ct)&&(this.G=t,this.ht=(n=r.options)==null?void 0:n.host,this.rt(this.ct=r.element)),$}rt(r){if(this.G!==void 0)if(this.isConnected||(r=void 0),typeof this.G=="function"){let t=this.ht??globalThis,e=xo.get(t);e===void 0&&(e=new WeakMap,xo.set(t,e)),e.get(this.G)!==void 0&&this.G.call(this.ht,void 0),e.set(this.G,r),r!==void 0&&this.G.call(this.ht,r)}else this.G.value=r}get lt(){var r,t;return typeof this.G=="function"?(r=xo.get(this.ht??globalThis))==null?void 0:r.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});async function ko(r,t){return(await r.callWS({type:"neonplan3d/image/get",image_id:t})).data}async function _i(r,t,e){await r.callWS({type:"neonplan3d/image/set",image_id:t,data:e})}async function jr(r){return(await r.callWS({type:"neonplan3d/history/list"})).snapshots}async function Dr(r){await r.callWS({type:"neonplan3d/history/snapshot"})}async function Vr(r,t){return(await r.callWS({type:"neonplan3d/history/restore",snapshot_id:t})).revision}async function Wr(r,t){return r.callWS({type:"neonplan3d/packs/import",pack:t})}async function Nr(r,t){await r.callWS({type:"neonplan3d/packs/remove",pack_id:t})}function Br(r){return r.callWS({type:"neonplan3d/backup/export"})}function qr(r,t,e){return r.callWS({type:"neonplan3d/backup/import",building:t,packs:e})}async function Kr(r){return r.callWS({type:"neonplan3d/voice/settings"})}async function Ur(r,t){return r.callWS({type:"neonplan3d/voice/settings/set",sentences:t})}var Gr=[.16,.16,.035],Yr=[.16,.035,.16],Qr=2.1;function Jr(r){return r.variant==="wall"}function pu(r){let t=new Map;for(let n of Object.values(r.entities??{}))n.device_id&&t.set(n.device_id,[...t.get(n.device_id)??[],n.entity_id]);let e=new Set;for(let[n,i]of t){let o=s=>{var a;return`${s} ${((a=r.states[s])==null?void 0:a.attributes.friendly_name)??""}`.toLowerCase()};i.some(s=>s.startsWith("sensor.")&&Mo(r.states[s]))&&i.some(s=>s.startsWith("sensor.")&&/clients|clientes/.test(o(s)))&&e.add(n)}return e}function hu(r,t){var n,i;let e=t&&t!=="none"?(i=(n=r.entities)==null?void 0:n[t])==null?void 0:i.device_id:null;return e&&r.entities?Object.values(r.entities).filter(o=>o.device_id===e).map(o=>o.entity_id):[]}function Mo(r){let t=r==null?void 0:r.attributes.options;return Array.isArray(t)&&t.includes("connected")&&t.includes("disconnected")}function Zr(r,t){let e=hu(r,t.entity),n=o=>{var s,a,l;return`${o} ${((s=r.states[o])==null?void 0:s.attributes.friendly_name)??""} ${((l=(a=r.entities)==null?void 0:a[o])==null?void 0:l.translation_key)??""}`.toLowerCase()},i=o=>e.find(s=>s.startsWith("sensor.")&&o.test(n(s)))??null;return{state:e.find(o=>o.startsWith("sensor.")&&Mo(r.states[o]))??null,clients:i(/clients|clientes/),led:e.find(o=>o.startsWith("light."))??null,cpu:i(/cpu/),memory:i(/memor/),restart:e.find(o=>{var s;return o.startsWith("button.")&&(((s=r.states[o])==null?void 0:s.attributes.device_class)==="restart"||/restart|reinici/.test(n(o)))})??null}}function Xr(r){let t=[];for(let e of pu(r)){let n=Object.values(r.entities??{}).filter(o=>o.device_id===e).map(o=>o.entity_id),i=n.find(o=>o.startsWith("device_tracker.")&&!o.startsWith("device_tracker.unifi_default_"))??n.find(o=>o.startsWith("sensor.")&&Mo(r.states[o]));i&&t.push({id:i,label:fu(r,i)})}return t.sort((e,n)=>e.label.localeCompare(n.label))}function fu(r,t){var i,o,s,a;let e=(o=(i=r.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e?(s=r.devices)==null?void 0:s[e]:void 0;return(n==null?void 0:n.name_by_user)||(n==null?void 0:n.name)||((a=r.states[t])==null?void 0:a.attributes.friendly_name)||t}var mu=[],Eo=new Map,ta=0;function ea(r){mu=r,Eo=new Map(r.flatMap(t=>t.items.map(e=>[Fe(t.id,e.id),e]))),ta++}function na(){return ta}function Fe(r,t){return`pack:${r}:${t}`}function _e(r){return r.startsWith("pack:")}function Xe(r){return _e(r)?r.endsWith(":curtain_motor")?"curtain":r.endsWith(":screen_roll")?"screen":null:null}function ia(r){var t;return _e(r)?((t=gt(r))==null?void 0:t.family)==="sensor"||/:(\w+_sensor|door_contact|presence_mmwave)$/.test(r):!1}function be(r){return r==="robot_vacuum"||_e(r)&&r.endsWith(":robot_vacuum")}function oa(r){return _e(r)&&/:(heat_pump_indoor|gas_boiler|buffer_tank|water_heater)$/.test(r)}var gu={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function sa(r){var t;return(t=gt(r))==null?void 0:t.parts.find(e=>e.screen)}function ra(r){let t=gt(r);if(!t)return!1;let[e,n,i]=t.size;return t.parts.some(o=>{if(!o.screen)return!1;let[s,a]=[o.w*e,o.d*n,o.h*i].sort((l,d)=>d-l);return s>=.06&&a>=.06})}function gt(r){if(!_e(r))return;let t=Eo.get(r);if(t)return t;let[,e,...n]=r.split(":"),i=gu[e];return i?Eo.get(`pack:${i}:${n.join(":")}`):void 0}function jt(r){var t;return de[r]??((t=gt(r))==null?void 0:t.size)??[.6,.6,.8]}function tn(r){var t,e;return pa.has(r)||!!((t=gt(r))!=null&&t.electric)||!!((e=gt(r))!=null&&e.light)}function ce(r){return r.name.es??r.name.en??Object.values(r.name)[0]??r.id}var _u={architecture:"Arquitectura y acabados",balcony:"Balc\xF3n y espacios peque\xF1os",bath:"Ba\xF1o",cabinet_kit:"Armarios y estanter\xEDas \u2013 kit",deco:"Decoraci\xF3n y plantas",dining_hall:"Comedor y recibidor",fun_halloween:"Pack divertido: Halloween",fun_pets:"Pack divertido: Mascotas",bedroom:"Dormitorio",cinema:"Cine en casa y Hi-Fi",exclusive:"Exclusivo: frigor\xEDfico inteligente",fitness:"Fitness",garage:"Garaje y taller",garden:"Jard\xEDn y terraza",kids:"Cuarto infantil",kitchen:"Cocina",living:"Sal\xF3n",office:"Oficina y gaming",pets:"Mascotas",smarthome:"Smart home y tecnolog\xEDa",stairs:"Escaleras y barandillas",utility:"Lavadero e instalaciones",vehicles:"Veh\xEDculos",starter:"Pack de inicio",pro_auto:"Pro: Auto Pro",pro_timetravel:"Pro: Viaje en el tiempo",pro_pool:"Pro: Piscina Pro",pro_camera:"Pro: Cabina de c\xE1mara",pro_energy:"Pro: Energ\xEDa Pro",pro_screens:"Pro: Pantallas en directo",pro_sound:"Pro: Sonido y Cine",pro_weather:"Pro: Tiempo exterior",pro_heat:"Pro: Calor Pro",pro_household:"Pro: Hogar Pro"};function ve(r){let t=r.id.replace(/^mastershort\./,""),e=t.endsWith("_sample"),n=_u[e?t.slice(0,-7):t];return n?e?`${n} \u2013 muestra`:n:r.name}function Tt(r,t){let e=gt(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return aa;if(t.type==="access_point")return t.variant==="wall"?Qr:Math.max(0,r.height-Math.max(.005,t.h));if(la.has(t.type))return Math.max(0,r.height-ca(t.type,t.h));if(t.type==="led_strip")return Math.max(0,r.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return So(r,t)+ua(r,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,r.height-t.h);default:return e?So(r,t):da(t)||So(r,t)}}function So(r,t){let e=r.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>Y([t.x,t.z],n.points))?0:bi(r,t.x,t.z)}var vi={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},ha=Object.keys(vi),fa=1;function ma(r){return r.variant&&vi[r.variant]?r.variant:"80"}function ga(r,t){var a,l;let e=t.entity&&t.entity!=="none"?t.entity:null,n=e?(l=(a=r.entities)==null?void 0:a[e])==null?void 0:l.device_id:null,i=n&&r.entities?Object.values(r.entities).filter(d=>d.device_id===n).map(d=>d.entity_id):[],o=d=>{var c,u,p;return`${d} ${((c=r.states[d])==null?void 0:c.attributes.friendly_name)??""} ${((p=(u=r.entities)==null?void 0:u[d])==null?void 0:p.translation_key)??""}`.toLowerCase()},s=(d,c,u)=>i.find(p=>p.startsWith(`${d}.`)&&c.test(o(p))&&!(u&&u.test(o(p))))??null;return{heater:e,heating:s("binary_sensor",/heating|calentando|heizt/),showers:s("sensor",/shower|ducha|dusch/),remaining:s("sensor",/remaining|restante|restzeit/),power:s("switch",/power|encendid|_on\b/,/eco|legionella/),eco:s("switch",/\beco/)}}var ba=["auto","none","inside","outside"],va=["always","no_power","never"],ya=["gable","hip","halfhip","pyramid","mansard","pent","flat","parapet"],$a=["gable","hip","halfhip"],$i={field:null,size:1,right:0,up:0},wa=["navigate","more_info","service","fire_dom_event"];var Hn={cat:["orange","tabby","black","white","grey","calico","cream"],dog:["golden","cream","brown","black","white","grey"],rabbit:["white","grey","brown","black","cream"]},xa=["dachshund","pug","terrier","labrador","shepherd"];function Po(r,t,e){return r?t?!!e.lock_plan:!!r.locked:!1}var ka=["rain","snow","fog","clouds","lightning","sky"],Ao=["rain","snow","clouds","lightning","sky"],zo=["lawn","terrace","path","driveway","pool","bed","wild","hedge","fence","pergola","balcony"],Io={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Re(r){return r==="hedge"||r==="fence"||r==="pergola"}function jn(r){return(r.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!Re(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Ma(r){return[...r.rooms,...jn(r)]}var Sa=["x","-x","z","-z"];function bu(r,t,e){let n=r.slope??0;if(!n||r.type==="pool")return 0;let i=r.slope_dir??"x",o=(d,c)=>i==="x"?d:i==="-x"?-d:i==="z"?c:-c,s=1/0,a=-1/0;for(let[d,c]of r.points){let u=o(d,c);s=Math.min(s,u),a=Math.max(a,u)}if(a-s<1e-6)return 0;let l=Math.min(1,Math.max(0,(o(t,e)-s)/(a-s)));return n*l}function Fo(r,t,e,n){return Aa(r,t)+Io[t.type]-vu(r,t,e,n)}var Ro=-.2,yi={set:!1,level:Ro};function Ea(r){let t=(r==null?void 0:r.settings.terrain)??null;yi={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??Ro}}function To(r,t){return yi.level}function Pa(r){return r.elevation>.3?0:yi.set?yi.level-r.elevation:Ro}function Aa(r,t){return Pa(r)+(t.offset??0)}function vu(r,t,e,n){return t.type==="pool"?0:bu(t,e,n)}function bi(r,t,e){let n=(r.outdoor??[]).filter(o=>!Re(o.type)&&o.type!=="pool"&&Y([t,e],o.points)),i=[...n].reverse().find(o=>o.cut)??n[0];return i?Fo(r,i,t,e):Pa(r)}var za=["swing","double","slide"];function Ia(r){var n;if(r.type!=="fence"||!((n=r.gates)!=null&&n.length))return[];let t=r.points.length,e=[];for(let i of r.gates){if(i.edge<0||i.edge>=t||r.open&&i.edge===t-1)continue;let o=r.points[i.edge],s=r.points[(i.edge+1)%t],a=Math.hypot(s[0]-o[0],s[1]-o[1]);if(a<.4)continue;let l=Math.min(Math.max(.3,i.width),a-.1),d=Math.min(Math.max(l/2+.05,i.at),a-l/2-.05);e.push({gate:i,p:o,q:s,s0:d-l/2,s1:d+l/2})}return e}var Fa=["filter","backwash","rinse","waste","recirculate","closed"];function Ra(r,t){return Aa(r,t)+(t.above?wi(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function Lo(r){return r.depth&&r.depth>=.3?Math.min(5,r.depth):r.above?wi(r):1.5}function Oo(r,t){return t.above?!1:(r.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Re(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Y(n,e.points)))}function Ta(r,t){return!t.above&&!Oo(r,t)?Co(r,t)-.05:Ra(r,t)-Lo(t)}function Co(r,t){return Ra(r,t)-.15}function wi(r){return r.height&&r.height>.3?r.height:1.2}function xi(r,t,e,n,i){let o=_=>Math.round(_*1e3)/1e3,s=n-t,a=i-e,l=(t+n)/2,d=(e+i)/2;if(r==="rect")return[[t,e],[n,e],[n,i],[t,i]];let c=40;if(r==="round"){let _=Math.min(s,a)/2;return Array.from({length:c},(b,v)=>[o(l+_*Math.cos(v/c*Math.PI*2)),o(d+_*Math.sin(v/c*Math.PI*2))])}let u=s>=a,p=(u?a:s)/2,h=Math.max(0,(u?s:a)/2-p),f=[],m=c/2;for(let _=0;_<2;_++){let b=_===0?1:-1;for(let v=0;v<=m;v++){let y=-Math.PI/2+v/m*Math.PI+(_===0?0:Math.PI),x=b*h+p*Math.cos(y),P=p*Math.sin(y);f.push(u?[o(l+x),o(d+P)]:[o(l+P),o(d+x)])}}return f}var yu={meter:null,grid:null,grid_invert:!1,solar:null,battery:null,battery_invert:!1,battery_soc:null,consumption:null,tariff:null},La=["wood","oak","tiles","carpet","stone","concrete"],Oa={type:"none",pitch:35,overhang:.4},$u={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Oa}};function Ca(r,t,e){return{id:r,name:t,elevation:e,height:2.5,cut_height:1.15,rooms:[],openings:[],furniture:[],placements:[],background:null,outdoor:[],walls:[],ha_floor:null}}var wu=2.75;function Ha(r,t){if(t!=null&&Number.isFinite(t))return Math.round(t*wu*100)/100;let e=r.reduce((n,i)=>!n||i.elevation>n.elevation?i:n,null);return e?Math.round((e.elevation+e.height+.25)*100)/100:0}function ja(r,t,e){let n=r.rooms.flatMap(a=>a.points.map(l=>l[0])),i=r.rooms.flatMap(a=>a.points.map(l=>l[1])),o=n.length?Math.ceil(Math.max(...n))+1:0,s=i.length?Math.floor(Math.min(...i)):0;return t.map((a,l)=>{let d=o+l%3*4.5,c=s+Math.floor(l/3)*3.5;return{id:e(),name:a.name,area_id:a.area_id,points:[[d,c],[d+4,c],[d+4,c+3],[d,c+3]],floor_material:"wood"}})}function Da(r,t,e,n){let i=r.rotation*Math.PI/180,o=Math.cos(i),s=Math.sin(i),[a,l]=t,d=r.x-a*(r.w/2)*o+l*(r.d/2)*s,c=r.z-a*(r.w/2)*s-l*(r.d/2)*o,u=e[0]-d,p=e[1]-c,h=b=>Math.max(.1,Math.round(b/n)*n),f=h((u*o+p*s)*a),m=h((-u*s+p*o)*l),_=b=>Math.round(b*1e3)/1e3;return{x:_(d+a*(f/2)*o-l*(m/2)*s),z:_(c+a*(f/2)*s+l*(m/2)*o),w:_(f),d:_(m)}}var ki=["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_table","lamp_wall","led_strip","lamp_uplight","lamp_bollard","lamp_garden","radiator","ac_unit","sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug","table","table_round","chair","bench","corner_bench","bar_stool","kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge","bed","bunk_bed","nightstand","wardrobe","dresser","bathtub","shower","wc","washbasin","washer","dryer","desk","office_chair","tall_cabinet","coat_rack","stairs","stairs_u","robot_vacuum","inverter","home_battery","wallbox","meter","grid_point","pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve","parking","fridge_smart","stairwell","awning","waste_bin","mailbox","wall_switch","wall_socket","water_heater","access_point"],Mi={lights:["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"],living:["sofa","sofa_l","sofa_u","armchair","stool","coffee_table","tv_board","tv_wall","sideboard","shelf","plant","rug"],dining:["table","table_round","chair","bench","corner_bench","bar_stool"],kitchen:["kitchen","kitchen_wall","kitchen_tall","island","worktop","sink","stove","dishwasher","fridge"],sleeping:["bed","bunk_bed","nightstand","wardrobe","dresser"],bath:["bathtub","shower","wc","washbasin","washer","dryer","water_heater"],work:["desk","worktop","office_chair","tall_cabinet","coat_rack","radiator","ac_unit","stairs","stairs_u","robot_vacuum"],vehicles:["parking"],outdoor:["awning"],household:["waste_bin","mailbox"],electric:["wall_switch","wall_socket","water_heater","access_point"]},Pt=["pool_pump","pool_filter","pool_heat_pump","pool_dosing","pool_valve"],Va=.3,ye=["meter","inverter","home_battery","wallbox","grid_point"],Si=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),aa=1.75;function ue(r){if(["lamp_ceiling_fan","lamp_pendant","stairwell","parking"].includes(r.type)||Ho.has(r.type))return!1;let t=gt(r.type);return!((t==null?void 0:t.mount)==="ceiling"&&t.light&&t.light!=="panel")}var la=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function ca(r,t){return r==="lamp_spot"?Math.max(.06,t)+.008:r==="lamp_ceiling"||r==="lamp_panel"?Math.max(.02,t)+.005:.02}var Ho=new Set(["stairs","stairs_u"]);function Wa(r,t,e){let n=Math.max(4,Math.round(e/.18)),i=Math.floor(n/2)+1,o=i-1,s=n-i,a=Math.min(.12,r*.06),l=(r-a)/2,d=Math.min(l,t*.45),c=(t-d)/o;return{n,k:i,steps1:o,steps2:s,gap:a,fw:l,landing:d,run:c,rise:e/n}}function Yt(r){var t;return Si.has(r)||!!((t=gt(r))!=null&&t.light)}var xu=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function jo(r,t,e,n=0){let i=zt(r.points),o=i.x1-i.x0-2*n,s=i.z1-i.z0-2*n,a=[];for(let l=0;l<t;l++)for(let d=0;d<e;d++){let c=[Math.round((i.x0+n+o/e*(d+.5))*1e3)/1e3,Math.round((i.z0+n+s/t*(l+.5))*1e3)/1e3];Y(c,r.points)&&a.push(c)}return a}function gn(r,t,e){let n=s=>Math.round(s*1e3)/1e3,[i,o]={right:[1,0],down:[0,1],left:[-1,0],up:[0,-1]}[e];return[n(r[0]+i*t),n(r[1]+o*t)]}var ku=1.05,Mu=.3;function Na(r,t){return t&&t!=="none"?{state_entity:t}:{state_entity:r.state_entity2&&r.state_entity2!=="none"?r.state_entity2:null,state_entity2:null}}function da(r){switch(r.type){case"home_battery":return r.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-r.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return r.variant==="bank"?.75:r.variant==="pole"||r.variant==="pillar"||r.variant==="parcel"?0:1;case"wall_switch":return ku;case"wall_socket":return Mu;case"water_heater":return fa;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var _a=.04,Su=1.2;function ua(r,t,e,n=0){var o;let i=0;for(let s of r.furniture)!(xu.has(s.type)||(o=gt(s.type))!=null&&o.surface)||!Y([t,e],Wt(s))||s.type==="worktop"&&n>0&&s.h-_a>=Su&&n<=s.h-_a-.02||(i=Math.max(i,s.h));return i}function Ei(r){let t=r.split(/[,;\n]/).map(e=>e.trim()).filter(Boolean).slice(0,12);return t.length?t:void 0}var pa=new Set([...Si,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]),de={sofa:[2.2,.9,.82],sofa_l:[2.6,1.8,.82],sofa_u:[3,2.2,.82],armchair:[.85,.85,.8],table:[1.6,.9,.75],chair:[.46,.5,.9],bed:[1.6,2.05,.9],nightstand:[.45,.4,.5],wardrobe:[1.8,.6,2.1],shelf:[.9,.35,1.9],kitchen:[2.4,.62,.92],worktop:[1.2,.62,.91],inverter:[.5,.2,.65],home_battery:[.6,.25,1.1],wallbox:[.3,.15,.42],pool_pump:[.7,.32,.4],pool_filter:[.6,.6,1],pool_heat_pump:[1,.45,.75],pool_dosing:[.4,.2,.5],pool_valve:[.16,.1,.14],meter:[.55,.21,1.1],grid_point:[.4,.22,.6],fridge:[.6,.65,1.8],fridge_smart:[.91,.73,1.78],stairwell:[1,2.6,.02],stove:[.6,.62,.92],sink:[.9,.62,.92],bathtub:[1.7,.75,.58],shower:[.9,.9,2],wc:[.38,.6,.8],washbasin:[.6,.46,.85],desk:[1.4,.7,.75],tv_board:[1.8,.42,.5],plant:[.45,.45,1.1],rug:[2,1.4,.01],stairs:[1,3.2,2.75],stairs_u:[2.1,2.7,2.75],stool:[.55,.55,.42],lamp_ceiling:[.4,.4,.08],lamp_ceiling_fan:[1.2,1.2,.35],lamp_downlight:[.1,.1,.02],lamp_spot:[.1,.1,.14],lamp_panel:[.6,.6,.03],lamp_uplight:[.35,.35,1.8],lamp_bollard:[.16,.16,.8],lamp_garden:[.12,.12,.3],radiator:[1,.1,.6],ac_unit:[.85,.22,.3],awning:[3,2.5,.22],waste_bin:[.58,.73,1.07],mailbox:[.38,.14,.34],wall_switch:[.086,.05,.086],wall_socket:[.086,.05,.086],water_heater:[.506,.275,1.066],access_point:[.16,.16,.035],robot_vacuum:[.36,.5,.1],parking:[2.6,5.2,.02],lamp_pendant:[.4,.4,.8],lamp_floor:[.4,.4,1.7],lamp_table:[.28,.28,.45],lamp_wall:[.22,.12,.2],led_strip:[2,.04,.03],coffee_table:[1.1,.6,.42],tv_wall:[1.3,.08,.75],sideboard:[1.6,.45,.8],table_round:[1.1,1.1,.75],bench:[1.4,.45,.85],corner_bench:[2,1.6,.9],bar_stool:[.42,.42,.75],kitchen_wall:[.8,.35,.7],kitchen_tall:[.6,.62,2.1],island:[1.8,.9,.92],dishwasher:[.6,.62,.92],bunk_bed:[1,2.05,1.65],dresser:[1,.5,.9],washer:[.6,.6,.85],dryer:[.6,.6,.85],office_chair:[.65,.65,1.1],tall_cabinet:[.6,.6,2.1],coat_rack:[1,.35,1.9]};var Do=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],Vo=["standard","bars","glass_wall"];function Pi(r,t){return r.type==="door"?r.style&&Do.includes(r.style)?r.style:t?"front":"interior":r.style&&Vo.includes(r.style)?r.style:"standard"}function Ba(r,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let i=t==="sidelights",o=r-.04,s=Math.min(1.05,Math.max(.6,o-(i?.6:.3))),a=(o-s)/(i?2:1),l=n.sidelight_width??a,d=i?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),d=i?Math.max(.1,d):0;let c=o-.5;if(l+d>c){let p=Math.max(0,c)/(l+d);l*=p,d*=p}return i?{panels:[[.02,.02+l],[r-.02-d,r-.02]],x0:.02+l,x1:r-.02-d}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:r-.02}:{panels:[[r-.02-l,r-.02]],x0:.02,x1:r-.02-l}}function Wo(r){return r==="front"||r==="front_glass"||r==="sidelight"||r==="sidelights"}var Ai={door:{type:"door",leaves:1,width:.9,sill:0,height:2.05,style:"interior"},front:{type:"door",leaves:1,width:1,sill:0,height:2.1,style:"front"},door_double:{type:"door",leaves:2,width:1.6,sill:0,height:2.05},window:{type:"window",leaves:1,width:1.2,sill:.9,height:1.3},window_double:{type:"window",leaves:2,width:1.6,sill:.9,height:1.3},terrace:{type:"window",leaves:1,width:1,sill:0,height:2.1},terrace_double:{type:"window",leaves:2,width:1.8,sill:0,height:2.1},garage:{type:"garage",leaves:1,width:2.5,sill:0,height:2.1},glass_wall:{type:"window",leaves:1,width:2,sill:0,height:2.4,style:"glass_wall"}};function zi(r){if(r.type==="garage")return"garage";if(r.type==="window"&&r.style==="glass_wall")return"glass_wall";let t=r.leaves===2;return r.type==="door"?!t&&r.style&&Wo(r.style)?"front":t?"door_double":"door":r.sill<.1?t?"terrace_double":"terrace":t?"window_double":"window"}function Ii(r){var t;r.energy={...yu,...r.energy??{}},r.presence=r.presence??[],r.settings={...$u,...r.settings,roof:{...Oa,...((t=r.settings)==null?void 0:t.roof)??{}}};for(let e of r.floors){e.outdoor=e.outdoor??[],e.walls=e.walls??[],e.rooms=e.rooms.map(i=>({...i,panel:i.panel??[]})),e.ha_floor=e.ha_floor??null,e.placements=e.placements.map(i=>({...i,mount:i.mount??null,rotation:i.rotation??0})),e.furniture=e.furniture.map(i=>({...i,entity:i.entity??null,power:i.power??null}));let n=e.placements.filter(i=>i.entity_id.startsWith("light.")&&!i.pin);if(n.length){let i={ceiling:"lamp_ceiling",floor:"lamp_floor",table:"lamp_table",wall:"lamp_wall"};for(let o of n){let s=i[o.mount??"ceiling"],[a,l,d]=de[s];e.furniture.push({id:`lamp_${o.entity_id.slice(6).replace(/[^A-Za-z0-9_\-.]/g,"_")}`.slice(0,64),type:s,x:o.x,z:o.z,rotation:0,w:a,d:l,h:d,variant:null,entity:o.entity_id,power:null})}e.placements=e.placements.filter(o=>!o.entity_id.startsWith("light.")||o.pin)}e.openings=e.openings.map(i=>({...i,hinge:i.hinge??"left",leaves:i.leaves??1,swing:i.swing??"in",style:i.style??null,cover:i.cover??null,contact:i.contact??null,contact2:i.contact2??null,tilt:i.tilt??null}))}return r}function tt(r){return`${r}_${Math.random().toString(36).slice(2,10)}`}function St(r){let t=0;for(let e=0;e<r.length;e++){let[n,i]=r[e],[o,s]=r[(e+1)%r.length];t+=n*s-o*i}return t/2}function Rt(r){return Math.abs(St(r))}function ne(r){let t=St(r);if(Math.abs(t)<1e-9){let i=r.length||1;return[r.reduce((o,s)=>o+s[0],0)/i,r.reduce((o,s)=>o+s[1],0)/i]}let e=0,n=0;for(let i=0;i<r.length;i++){let[o,s]=r[i],[a,l]=r[(i+1)%r.length],d=o*l-a*s;e+=(o+a)*d,n+=(s+l)*d}return[e/(6*t),n/(6*t)]}function Fi(r){if(r.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=r[t],[i,o]=r[(t+1)%4];if(Math.abs(e-i)>1e-6&&Math.abs(n-o)>1e-6)return!1}return!0}function zt(r){let t=1/0,e=1/0,n=-1/0,i=-1/0;for(let[o,s]of r)t=Math.min(t,o),e=Math.min(e,s),n=Math.max(n,o),i=Math.max(i,s);return{x0:t,z0:e,x1:n,z1:i}}function Wt(r){let t=r.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),i=r.w/2,o=r.d/2;return[[-i,-o],[i,-o],[i,o],[-i,o]].map(([s,a])=>[r.x+s*e-a*n,r.z+s*n+a*e])}function Y(r,t){let e=!1;for(let n=0,i=t.length-1;n<t.length;i=n++){let[o,s]=t[n],[a,l]=t[i];s>r[1]!=l>r[1]&&r[0]<(a-o)*(r[1]-s)/(l-s)+o&&(e=!e)}return e}var Dn={lamp_ceiling:"ceiling",lamp_ceiling_fan:"ceiling_fan",lamp_downlight:"downlight",lamp_spot:"spot",lamp_panel:"panel",lamp_uplight:"uplight",lamp_bollard:"bollard",lamp_garden:"garden",lamp_pendant:"pendant",lamp_floor:"floor",lamp_table:"table",lamp_wall:"wall",led_strip:"strip"};function qa(r,t){for(let e of r.floors){let n=t.floors.find(i=>i.id===e.id);e.furniture=e.furniture.filter(i=>{if(!i.look_of)return!0;let o=e.placements.find(h=>h.entity_id===i.look_of);if(!o)return!1;let s=n==null?void 0:n.placements.find(h=>h.entity_id===i.look_of),a=n==null?void 0:n.furniture.find(h=>h.id===i.id),l=!s||s.x!==o.x||s.z!==o.z||(s.rotation??0)!==(o.rotation??0);!!a&&(a.x!==i.x||a.z!==i.z||a.rotation!==i.rotation)&&!l?(o.x=i.x,o.z=i.z,o.rotation=i.rotation):(i.x=o.x,i.z=o.z,i.rotation=o.rotation??0);let c=o.mount==="ceiling",u=o.y??(c?Math.max(.5,e.height-.05):2.2),p=Math.round(Math.max(0,c&&o.y==null?e.height-i.h:u-i.h/2)*1e3)/1e3;return i.mount_y!==p&&(i.mount_y=p),!0})}}var Ka="neonplan3d",Eu=new Set("alarm_control_panel assist_satellite automation binary_sensor button calendar camera climate conversation counter cover date datetime device_tracker event fan group humidifier image input_boolean input_button input_datetime input_number input_select input_text lawn_mower light lock media_player notify number person remote scene script select sensor siren stt sun switch text time timer todo tts update vacuum valve wake_word water_heater weather zone".split(" ")),Pu=/^([a-z_]+)\.[a-z0-9_]+$/,No=r=>{var t;return typeof r=="string"&&Eu.has(((t=Pu.exec(r))==null?void 0:t[1])??"")};function Bo(r){if(Array.isArray(r))return r.filter(e=>!No(e)).map(Bo);if(!r||typeof r!="object")return No(r)?null:r;let t=r;for(let e of Object.keys(t))No(e)?delete t[e]:/(^|_)(area|area_id|areas|device|device_id|devices)$/.test(e)&&t[e]!==null&&typeof t[e]!="boolean"&&typeof t[e]!="number"?t[e]=Array.isArray(t[e])?[]:null:t[e]=Bo(t[e]);return t}function Au(r){let t=Bo(structuredClone(r));t.energy={...t.energy,grid:null,solar:null,battery:null,battery_soc:null,tariff:null},t.presence=[];for(let e of t.floors)e.placements=[],e.background=null,e.rooms=e.rooms.map(n=>({...n,area_id:null})),e.furniture=e.furniture.map(n=>({...n,entity:null,power:null})),e.openings=e.openings.map(n=>({...n,cover:null,contact:null,tilt:null}));return t}function Ua(r,t){return{format:Ka,version:1,exported_at:new Date().toISOString(),building:t?Au(r):structuredClone(r)}}function Ga(r){let t;try{t=JSON.parse(r)}catch{throw new Error("not_json")}let e=t,n=(e==null?void 0:e.format)===Ka?e.building:t;if(!n||n.version!==1||!Array.isArray(n.floors)||!n.settings)throw new Error("not_plan");for(let i of n.floors)i.background=null;return Ii(n)}function Ya(r){var e;let t=new Set;for(let n of r.floors){(e=n.background)!=null&&e.image_id&&t.add(n.background.image_id);for(let i of n.furniture)for(let o of i.pictures??[])o.image&&!/^https?:\/\//.test(o.image)&&!o.image.startsWith("camera:")&&t.add(o.image)}return[...t]}function qo(r,t){let e=URL.createObjectURL(new Blob([t],{type:"application/json"})),n=document.createElement("a");n.href=e,n.download=r,n.click(),setTimeout(()=>URL.revokeObjectURL(e),1e3)}var Ja=/^(light|switch|input_boolean|fan|cover)\./;function Ko(r){let t=(r.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var Za=/^(switch|input_boolean|light)\./,Qa=r=>r&&r!=="none"?r:null;function Uo(r){let t=(r.socket_outlets??[]).slice(0,4).map(e=>({entity:Qa(e==null?void 0:e.entity),power:Qa(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function Go(r){return Math.round((.086+.071*(Math.max(1,Math.min(4,r))-1))*1e3)/1e3}function Xa(r){return r.switch_ring&&r.switch_ring!=="none"?r.switch_ring:null}var zu={light:"light",switch:"switch",input_boolean:"switch",fan:"fan",cover:"cover",climate:"climate",media_player:"media",lock:"lock",sensor:"sensor",binary_sensor:"binary",camera:"camera",scene:"scene",script:"script"},Iu=new Set(["temperature","humidity","power","carbon_dioxide","energy","gas","water","volume","volume_storage","volume_flow_rate","illuminance","pressure","atmospheric_pressure","pm1","pm25","pm10","volatile_organic_compounds","volatile_organic_compounds_parts","carbon_monoxide","nitrogen_dioxide","moisture","sound_pressure","ph","conductivity"]),Fu=new Set(["m\xB3","m3","L","l","kWh","Wh","MWh","lx","mV","mg/L","mg/l","ppm","\xB5S/cm","\u03BCS/cm","mS/cm"]),Ru=new Set(["door","window","opening","garage_door","motion","occupancy","presence","smoke","moisture","gas","carbon_monoxide"]),Ri=["light","cover","climate","media","switch","fan","lock","binary","sensor","camera","scene","script"],sl=new Set(["light","switch","fan"]);function rl(r){return r.slice(0,r.indexOf("."))}function rt(r){return zu[rl(r)]??null}function Te(r){return r!==null&&r!=="scene"&&r!=="script"}function Tu(r,t){var i;let e=new Set,n=t;for(;n&&!e.has(n);){e.add(n);let o=(i=r.devices)==null?void 0:i[n];if(!o)return null;if(o.area_id)return o.area_id;n=o.parent_device_id}return null}function Qt(r,t){var n;let e=(n=r.entities)==null?void 0:n[t];return e?e.area_id?e.area_id:Tu(r,e.device_id):null}function _n(r,t){var n;let e=(n=r.entities)==null?void 0:n[t];return!!e&&(!!e.hidden||!!e.hidden_by||!!e.disabled_by)}function tl(r,t){var a;let e=rt(t);if(!e)return!1;let n=(a=r.entities)==null?void 0:a[t];if(_n(r,t)||n!=null&&n.entity_category)return!1;let i=r.states[t];if(!i)return!1;let o=i.attributes.device_class,s=String(i.attributes.unit_of_measurement??"");return e==="sensor"?o?Iu.has(o)||o==="voltage"&&s==="mV":Fu.has(s):e==="binary"?o?Ru.has(o):!!(n!=null&&n.area_id):!0}var Lu=new Set(["battery","signal_strength","timestamp","date","duration","data_rate","data_size","frequency","enum"]);function el(r,t){var i;if(rt(t)!=="sensor")return!1;let e=(i=r.entities)==null?void 0:i[t];if(_n(r,t)||e!=null&&e.entity_category)return!1;let n=r.states[t];return!n||!n.attributes.unit_of_measurement||Lu.has(String(n.attributes.device_class??""))?!1:Number.isFinite(Number(n.state))||ts(n)}var Yo=null;function en(r){var l,d;let t=Yo;if(t&&t.entities===r.entities&&t.devices===r.devices&&(t.states===r.states||(t.states=r.states,Object.keys(r.states).length===t.stateCount)))return t;let e=new Map,n=new Map,i=[],o=new Map,s=new Map;for(let c of Object.keys(r.entities??{})){let u=r.entities[c],p=u.device_id;p&&u.area_id&&(s.get(p)??s.set(p,new Set).get(p)).add(u.area_id),p&&is(r,c)&&(n.get(p)??n.set(p,[]).get(p)).push(c),p&&!_n(r,c)&&!u.entity_category&&(o.get(p)??o.set(p,new Set).get(p)).add(rl(c));let h=tl(r,c),f=Qt(r,c);if(!f){(h||el(r,c))&&Te(rt(c))&&i.push(c);continue}h&&(e.get(f)??e.set(f,[]).get(f)).push(c)}if(r.entities)for(let c of Object.keys(r.states))r.entities[c]||(tl(r,c)||el(r,c))&&Te(rt(c))&&i.push(c);i.sort((c,u)=>Ri.indexOf(rt(c))-Ri.indexOf(rt(u))||_t(r,c).localeCompare(_t(r,u)));for(let[c,u]of e){let p=(d=(l=r.areas)==null?void 0:l[c])==null?void 0:d.name;u.sort((h,f)=>{let m=Ri.indexOf(rt(h)),_=Ri.indexOf(rt(f));return m-_||_t(r,h,p).localeCompare(_t(r,f,p))})}let a=new Set([...s].filter(([,c])=>c.size>1).map(([c])=>c));return Yo={entities:r.entities,devices:r.devices,states:r.states,stateCount:Object.keys(r.states).length,areas:e,power:n,unassigned:i,domains:o,hubs:a},Yo}function $e(r,t){return!t||!r.entities?[]:en(r).areas.get(t)??[]}function al(r,t){return r.entities?[...en(r).areas].filter(([e])=>e!==t).map(([e,n])=>{var i,o;return{areaId:e,name:((o=(i=r.areas)==null?void 0:i[e])==null?void 0:o.name)??e,ids:n.filter(s=>Te(rt(s)))}}).filter(e=>e.ids.length).sort((e,n)=>e.name.localeCompare(n.name)):[]}function ll(r){return r.entities?en(r).unassigned:[]}var Qo={temperature:"temperature",humidity:"humidity",co2:"carbon_dioxide"},Ou=new Set(["climate","water_heater","switch","button","camera","media_player","vacuum","light","fan","lawn_mower"]),Cu=/(vorlauf|r(ü|ue)cklauf|flow|return|d(ü|ue)se|nozzle|hotend|extruder|druckbett|heatbed|(^|[^a-z])bed($|[^a-z])|chamber|cpu|gpu|chip|soc|akku|batter|wasser|water|kessel|boiler|au(ß|ss)en|outdoor|outside|abgas|exhaust|sole|brine|verdampfer|kondensat|verdichter|compressor|motor|k(ü|ue)hl|freezer|fridge|gefrier)/i;function Jo(r,t){var i,o,s;let e=(o=(i=r.entities)==null?void 0:i[t])==null?void 0:o.device_id,n=e&&!en(r).hubs.has(e)?en(r).domains.get(e):void 0;return n&&[...n].some(a=>Ou.has(a))?!1:!Cu.test(`${t} ${((s=r.states[t])==null?void 0:s.attributes.friendly_name)??""}`)}function cl(r,t,e,n){var h;let i=(h=e.climate)==null?void 0:h[n];if(i==="none")return[];if(i)return r.states[i]?[i]:[];let o=Qo[n],s=(f,m)=>Y([f,m],e.points),a=(t==null?void 0:t.placements.filter(f=>f.entity_id.startsWith("sensor.")))??[],l=a.filter(f=>s(f.x,f.z)).map(f=>f.entity_id),d=new Set(a.filter(f=>!s(f.x,f.z)).map(f=>f.entity_id)),c=[...new Set([...$e(r,e.area_id).filter(f=>!d.has(f)),...l])],u=c.filter(f=>{var m;return f.startsWith("sensor.")&&((m=r.states[f])==null?void 0:m.attributes.device_class)===o&&(e.outdoor||Jo(r,f))});if(u.length)return u;let p=Zo[n];return p?c.filter(f=>{var m;return f.startsWith("climate.")&&typeof((m=r.states[f])==null?void 0:m.attributes[p])=="number"}):[]}var Zo={temperature:"current_temperature",humidity:"current_humidity"};function dl(r,t){return!!r.entities&&en(r).hubs.has(t)}function Xo(r,t){return r.entities?en(r).power.get(t)??[]:[]}function _t(r,t,e){var o,s;let n=r.states[t],i=(n==null?void 0:n.attributes.friendly_name)??((s=(o=r.entities)==null?void 0:o[t])==null?void 0:s.name)??t;if(e&&i.length>e.length+1&&i.toLowerCase().startsWith(e.toLowerCase()+" ")){let a=i.slice(e.length+1);return a.charAt(0).toUpperCase()+a.slice(1)}return i}function ts(r){return!r||r.state==="unavailable"||r.state==="unknown"}function ul(r){return!!r&&r.entity_id.startsWith("sensor.")&&r.attributes.device_class==="enum"}function Ti(r,t,e=null){if(r==="camera")return e==="ceiling"?Math.max(.5,t-.05):2.2;if(r==="light"&&e){if(e==="floor")return 1.95;if(e==="table")return 1.25;if(e==="wall")return 1.95}switch(r){case"light":return Math.max(.5,t-.25);case"cover":return Math.min(2,t-.3);case"climate":return .6;case"media":return .9;case"binary":case"sensor":return 1.4;default:return 1.05}}function Hu(r,t){let e=1/0;for(let n=0;n<t.length;n++){let i=t[n],o=t[(n+1)%t.length],s=o[0]-i[0],a=o[1]-i[1],l=s*s+a*a||1,d=Math.min(1,Math.max(0,((r[0]-i[0])*s+(r[1]-i[1])*a)/l));e=Math.min(e,Math.hypot(r[0]-i[0]-s*d,r[1]-i[1]-a*d))}return e}function pl(r,t,e=[]){if(r.points.length<3||!t.length)return[];let n=r.points,i=n.map(v=>v[0]),o=n.map(v=>v[1]),s=Math.min(...i),a=Math.min(...o),l=Math.max(...i),d=Math.max(...o),c=Math.min(l-s,d-a),u=Math.max(.1,Math.min(.25,c/8)),p=Math.min(.35,c/5),h=ne(n),f=[];for(let v=s+u/2;v<l;v+=u)for(let y=a+u/2;y<d;y+=u){let x=[v,y];if(!Y(x,n))continue;let P=Hu(x,n);P<p||f.push({p:x,wall:P})}f.length||f.push({p:h,wall:0});let m=[...e],_=[],b=Math.min(.7,c/4);for(let v of t){let y=rt(v)==="light",x=f[0].p,P=-1/0;for(let{p:F,wall:T}of f){let S=m.length?Math.min(...m.map(k=>Math.hypot(F[0]-k[0],F[1]-k[1]))):3,M=Math.hypot(F[0]-h[0],F[1]-h[1]),w=Math.min(S,3)*2;M<b&&!y&&(w-=10),w-=y?M*.35:T*1.2,w>P+1e-9&&(P=w,x=F)}let A=[Math.round(x[0]*100)/100,Math.round(x[1]*100)/100];m.push(A),_.push({entity_id:v,x:A[0],z:A[1],y:null,mount:null})}return _}var ju=new Set([void 0,"shutter","blind","awning","shade","curtain","window"]),Du=new Set(["garage","gate"]),Vu=new Set(["window","opening"]);function Vn(r,t,e=!1){let n=new Map;return t.length&&r.forEach((i,o)=>{let s=e&&t.length===1?t[0]:t[o];s&&n.set(i.id,s)}),n}function es(r,t){let e=new Map,n=(o,s)=>o==="none"?null:o??s??null,i=(o,s,a)=>{let l=n(o.cover,s);return{cover:l,contact:o.sensor==="handle"&&o.contact==null?null:n(o.contact,a),tilt:o.tilt==="none"?null:o.tilt,contact2:o.leaves===2&&o.contact2&&o.contact2!=="none"?o.contact2:null,lock:(o.type==="door"||o.type==="window"&&o.sill<=.01)&&o.lock&&o.lock!=="none"?o.lock:null,tilt2:o.leaves===2&&o.tilt2&&o.tilt2!=="none"?o.tilt2:null,position:l&&rt(l)==="cover"&&o.position&&o.position!=="none"?o.position:null,positionInverted:!!o.position_inverted,tiltAngle:o.tilt_angle&&o.tilt_angle!=="none"?o.tilt_angle:null,tiltMax:o.tilt_max??null,tiltOffset:o.tilt_offset??null,tiltInvert:!!o.tilt_invert,shut:!!o.shut,...o.contact_invert?{contactInvert:!0}:{},...o.cover_invert?{coverInvert:!0}:{}}};for(let o of t){for(let s of o.rooms){let a=o.openings.filter(y=>y.room_id===s.id).sort((y,x)=>y.edge-x.edge||y.offset-x.offset);if(!a.length)continue;let l=$e(r,s.area_id),d=y=>{var x;return(x=r.states[y])==null?void 0:x.attributes.device_class},c=l.filter(y=>rt(y)==="cover"&&ju.has(d(y))),u=a.filter(y=>y.type==="window"),p=a.filter(y=>y.type==="door"),h=a.filter(y=>y.type==="garage"),f=Vn(u,c,!0),m=Vn(u,l.filter(y=>rt(y)==="binary"&&Vu.has(d(y)))),_=Vn(p,l.filter(y=>rt(y)==="binary"&&d(y)==="door")),b=Vn(h,l.filter(y=>rt(y)==="cover"&&Du.has(d(y)??""))),v=Vn(h,l.filter(y=>rt(y)==="binary"&&d(y)==="garage_door"));for(let y of a){let x=y.type==="window"?f:y.type==="garage"?b:null,P=y.type==="window"?m:y.type==="garage"?v:_;e.set(y.id,i(y,x==null?void 0:x.get(y.id),P.get(y.id)))}}for(let s of o.openings)e.has(s.id)||e.set(s.id,i(s))}return e}var Wu=[[/^(tilted|tilt|gekippt|kipp)/i,"tilted"],[/^(open|opened|offen|geöffnet|on)$/i,"open"],[/^(closed|close|geschlossen|zu|off)$/i,"closed"]];function ns(r){if(!r||ts(r))return null;let t=r.attributes.window_state;for(let e of[typeof t=="string"?t:null,r.state]){if(!e)continue;let n=Wu.find(([i])=>i.test(e.trim()));if(n)return n[1]}return null}function Wn(r){return!!r&&/^(switch|button|input_button)\./.test(r)}function Li(r,t){var s,a;let e=new Map,n=[];for(let l of t){let d=rt(l)==="camera"?`camera:${l}`:((a=(s=r.entities)==null?void 0:s[l])==null?void 0:a.device_id)??`entity:${l}`,c=e.get(d);c||(e.set(d,c=[]),n.push(d)),c.push(l)}let i=n.map(l=>{let d=e.get(l),c=d.find(u=>{var p,h;return!((h=(p=r.entities)==null?void 0:p[u])!=null&&h.name)})??d[0];return{primary:c,others:d.filter(u=>u!==c)}}),o=new Map(t.map((l,d)=>[l,d]));return i.sort((l,d)=>o.get(l.primary)-o.get(d.primary))}function Nu(r,t){return Li(r,t).map(e=>e.primary)}var nl={robot_vacuum:/(saug|vacuum|robo|roomba|roborock|dreame|ecovacs|deebot)/i,tv_board:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,tv_wall:/\b(tv|fernseh|television|fire ?tv|apple ?tv|chromecast|shield)/i,desk:/\b(pc|computer|rechner|desktop|monitor|workstation)/i,fridge:/(kühl|fridge|gefrier|freezer)/i,fridge_smart:/(kühl|fridge|gefrier|freezer)/i,stove:/(herd|kochfeld|cooktop|stove|induktion)/i,kitchen_tall:/(backofen|oven|ofen)/i,dishwasher:/(spülmaschine|geschirrspül|dishwasher)/i,washer:/(waschmaschine|washer|washing)/i,dryer:/(trockner|dryer)/i,kitchen:/(kaffee|coffee|wasserkocher|kettle)/i,island:/(kochfeld|herd|induktion|cooktop)/i,sink:/(spülmaschine|geschirrspül|dishwasher)/i,radiator:/(heiz|radiator|thermostat|climate|hk|trv)/i,ac_unit:/(klima|air ?con|aircon|airco|split|\bac\b|clim)/i,awning:/(markise|awning|sonnensegel|beschattung|store|zonnescherm)/i},hl=new Set(["tv_board","tv_wall"]);function fl(r,t){let e=r.states[t.entity];if(!e)return!1;let n=t.attribute?e.attributes[t.attribute]:e.state;if(n==null)return!1;let i=String(n).toLowerCase(),o=t.state.trim().toLowerCase();return t.state.trim()==="*"||i===o||o.length>=3&&i.includes(o)}function Oi(r){return hl.has(r)||!!sa(r)}function Ci(r){return Oi(r)||r==="desk"||r==="fridge_smart"}var il={lamp_ceiling:/(decke|ceiling|haupt|main)/i,lamp_downlight:/(spot|strahler|downlight|einbau)/i,lamp_spot:/(spot|strahler)/i,lamp_panel:/(panel|decke|ceiling)/i,lamp_uplight:/(fluter|uplight|steh)/i,lamp_bollard:/(weg|garten|garden|path|poller|außen|aussen|outdoor)/i,lamp_garden:/(garten|garden|spot|außen|aussen|outdoor|baum|tree)/i,lamp_pendant:/(pendel|pendant|hänge|esstisch|dining)/i,lamp_floor:/(steh|floor)/i,lamp_table:/(tisch|nacht|table|bedside|lese|reading)/i,lamp_wall:/(wand|wall)/i,led_strip:/(led|strip|streifen|leiste|band)/i};function is(r,t){var e;return t.startsWith("sensor.")&&((e=r.states[t])==null?void 0:e.attributes.device_class)==="power"}function Bu(r,t){var n,i;if(is(r,t))return t;let e=(i=(n=r.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?Xo(r,e).find(o=>o!==t)??null:null}function nn(r,t){let e=new Map;for(let n of t){let i=new Set([...n.furniture.flatMap(o=>[o.entity,o.power]),...n.placements.map(o=>o.entity_id)].filter(o=>!!o&&o!=="none"));for(let o of n.furniture){let s=o.type in il,a=s?il[o.type]:nl[o.type]??(be(o.type)?nl.robot_vacuum:void 0);if(!a&&o.entity==null&&o.power==null)continue;let l=n.rooms.find(h=>h.points.length>=3&&Y([o.x,o.z],h.points))??(o.type==="awning"?jn(n).find(h=>Y([o.x,o.z],h.points)):void 0),d=l?Nu(r,$e(r,l.area_id)):[],c=h=>`${h} ${_t(r,h)}`,u=o.entity==="none"?null:o.entity??null;if(o.entity==null){let h=d.filter(f=>!i.has(f));if(s){let f=h.filter(m=>rt(m)==="light");u=f.find(m=>a.test(c(m)))??f[0]??null}else if(be(o.type)){let f=(l==null?void 0:l.area_id)??null;u=Object.keys(r.entities??{}).find(m=>m.startsWith("vacuum.")&&!i.has(m)&&!_n(r,m)&&Qt(r,m)===f)??null}else if(o.type==="radiator"||o.type==="ac_unit"){let f=h.filter(m=>rt(m)==="climate");u=f.find(m=>a.test(c(m)))??f[0]??null}else if(Oi(o.type)){let f=h.filter(m=>rt(m)==="media");u=f.find(m=>{var _;return((_=r.states[m])==null?void 0:_.attributes.device_class)==="tv"})??f.find(m=>a==null?void 0:a.test(c(m)))??(hl.has(o.type)?f[0]??null:null)}else o.type==="awning"?u=h.find(f=>{var m;return f.startsWith("cover.")&&((a==null?void 0:a.test(c(f)))||((m=r.states[f])==null?void 0:m.attributes.device_class)==="awning")})??null:a&&(u=h.find(f=>["switch","media","fan"].includes(rt(f)??"")&&a.test(c(f)))??null);u&&i.add(u)}let p=o.power==="none"?null:o.power??null;o.power==null&&(p=u?Bu(r,u):null,!p&&a&&l&&!s&&(p=$e(r,l.area_id).find(f=>is(r,f)&&!i.has(f)&&a.test(c(f)))??null),p&&i.add(p)),(u||p)&&e.set(o.id,{entity:u,power:p})}}return e}function ml(r,t,e,n=[]){let i=(u,p)=>Y([u,p],e.points),o=nn(r,[t]),s=es(r,[t]),a=[...t.placements.filter(u=>i(u.x,u.z)).map(u=>u.entity_id),...t.furniture.filter(u=>i(u.x,u.z)).flatMap(u=>{var p,h;return[(p=o.get(u.id))==null?void 0:p.entity,(h=o.get(u.id))==null?void 0:h.power]}),...t.openings.filter(u=>u.room_id===e.id).flatMap(u=>{let p=s.get(u.id);return p?[p.cover,p.contact,p.tilt,p.contact2]:[]}),...n.flatMap(u=>[u.window,u.cover,u.contact,u.tilt]),...e.panel??[]].filter(u=>!!u&&!!r.states[u]),l=new Set(e.hidden??[]),d=[...new Set(a)].filter(u=>!l.has(u)),c=new Set(d);return{shown:d,more:$e(r,e.area_id).filter(u=>!c.has(u)&&!l.has(u))}}var ol=/(^|_)(current_room|current_segment|aktueller_raum|current_area)($|_)/,qu={soc:/(^|_)(soc|state_of_charge|battery_level|battery|ladestand|ladezustand|akku)($|_)/,range:/(^|_)(range|reichweite|remaining_range)($|_)/,charging:/(charging|charge_power|ladeleistung|laden|charger_power|lade)/,plugged:/(plug|cable|connected|stecker|kabel|angeschlossen)/,lock:/(lock|verriegel|schloss)/,climate:/(climat|preheat|precondition|hvac|heiz|klima|standheizung)/,tracker:/./};function gl(r,t){var u,p;let e=t.car??{},n=h=>h&&h!=="none"?h:null,i=n(e.device)??n(t.entity),o=i?(p=(u=r.entities)==null?void 0:u[i])==null?void 0:p.device_id:null,s=o&&r.entities?Object.values(r.entities).filter(h=>h.device_id===o).map(h=>h.entity_id):[],a=h=>{var f,m,_;return`${h} ${((f=r.states[h])==null?void 0:f.attributes.friendly_name)??""} ${((_=(m=r.entities)==null?void 0:m[h])==null?void 0:_.translation_key)??""}`.toLowerCase().replace(/[\s-]+/g,"_")},l=(h,f,m)=>s.find(_=>f.includes(_.split(".")[0])&&qu[h].test(a(_))&&(!m||m(_)))??null,d=h=>{var f;return String(((f=r.states[h])==null?void 0:f.attributes.unit_of_measurement)??"")},c=h=>{var f;return String(((f=r.states[h])==null?void 0:f.attributes.device_class)??"")};return{soc:n(e.soc)??s.find(h=>h.startsWith("sensor.")&&c(h)==="battery")??l("soc",["sensor"],h=>d(h)==="%"),range:n(e.range)??l("range",["sensor"],h=>/km|mi/.test(d(h)))??l("range",["sensor"]),charging:n(e.charging)??l("charging",["sensor"],h=>/^k?W$/.test(d(h)))??l("charging",["binary_sensor","switch"]),plugged:n(e.plugged)??s.find(h=>h.startsWith("binary_sensor.")&&c(h)==="plug")??l("plugged",["binary_sensor"]),lock:n(e.lock)??s.find(h=>h.startsWith("lock."))??l("lock",["binary_sensor"]),climate:n(e.climate)??s.find(h=>h.startsWith("climate."))??l("climate",["switch","binary_sensor"]),tracker:n(e.tracker)??s.find(h=>h.startsWith("device_tracker."))??null}}function _l(r,t,e){var i,o;if(e==="none")return null;if(e)return e;let n=t?(o=(i=r.entities)==null?void 0:i[t])==null?void 0:o.device_id:null;if(!n||!r.entities)return null;for(let s of Object.values(r.entities))if(!(s.device_id!==n||!s.entity_id.startsWith("sensor."))&&(ol.test(s.translation_key??"")||ol.test(s.entity_id.split(".")[1])))return s.entity_id;return null}var dt=(r,t,e,n,i="")=>H`<rect class=${i} x=${Math.min(r,e)} y=${Math.min(t,n)} width=${Math.abs(e-r)} height=${Math.abs(n-t)} />`,ot=(r,t,e,n,i="")=>H`<line class=${i} x1=${r} y1=${t} x2=${e} y2=${n} />`,wt=(r,t,e,n="")=>H`<circle class=${n} cx=${r} cy=${t} r=${e} />`,os=(r,t,e,n,i="")=>H`<ellipse class=${i} cx=${r} cy=${t} rx=${e} ry=${n} />`;function ss(r,t,e){let n=[];for(let i=1;i<e;i++){let o=-r/2+r/e*i;n.push(ot(o,t/2,o,t/2-Math.min(.12,t*.3)))}return n}function bl(r,t,e,n){let i=Math.min(.24,t*.28),o=n?Math.min(.2,r*.12):0,s=[dt(-r/2,-t/2,r/2,-t/2+i,"fp3d-sym-fill")];n&&s.push(dt(-r/2,-t/2,-r/2+o,t/2,"fp3d-sym-fill"),dt(r/2-o,-t/2,r/2,t/2,"fp3d-sym-fill"));let a=r-2*o;for(let l=1;l<e;l++){let d=-r/2+o+a/e*l;s.push(ot(d,-t/2+i,d,t/2-.02))}return s}function vl(r,t,e){let n=-r/2,i=r/2,o=-t/2,s=t/2,a=Math.max(.3,Math.min(.95,t*.5,r*(e?.34:.45))),l=Math.min(.24,a*.28),d=Math.min(.2,a*.24),c=[dt(n,o,i,o+l,"fp3d-sym-fill"),dt(n,o+l,n+l,s,"fp3d-sym-fill"),dt(n+l,s-d,n+a,s,"fp3d-sym-fill")];e?c.push(dt(i-l,o+l,i,s,"fp3d-sym-fill"),dt(i-a,s-d,i-l,s,"fp3d-sym-fill")):c.push(dt(i-d,o+l,i,o+a,"fp3d-sym-fill"));let u=e?i-a:i-d;c.push(ot(n+a,s-d,n+a,o+a),ot(n+a,o+a,u,o+a)),e&&c.push(ot(i-a,o+a,i-a,s-d));let p=n+l,h=e?i-l:i-d,f=Math.max(1,Math.round((h-p)/.62));for(let v=1;v<f;v++)c.push(ot(p+(h-p)/f*v,o+l,p+(h-p)/f*v,o+a));let m=o+a,_=s-d,b=_-m<.2?0:Math.max(1,Math.round((_-m)/.62));for(let v=0;v<b;v++){let y=m+(_-m)/b*v;c.push(ot(n+l,y,n+a,y)),e&&c.push(ot(i-a,y,i-l,y))}return c}function yl(r,t,e){switch(r){case"sofa":return bl(t,e,Math.max(1,Math.round((t-.4)/.62)),!0);case"armchair":return bl(t,e,1,!0);case"sofa_l":return vl(t,e,!1);case"sofa_u":return vl(t,e,!0);case"bench":return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill")];case"corner_bench":{let n=Math.min(.5,e*.4);return[dt(-t/2,-e/2,t/2,-e/2+.08,"fp3d-sym-fill"),dt(-t/2,-e/2,-t/2+.08,e/2,"fp3d-sym-fill"),ot(-t/2+n,-e/2+n,t/2,-e/2+n),ot(-t/2+n,-e/2+n,-t/2+n,e/2)]}case"chair":return[dt(-t/2,-e/2,t/2,-e/2+.06,"fp3d-sym-fill")];case"office_chair":return[wt(0,.03,Math.min(t,e)*.36),dt(-t*.35,-e/2+.02,t*.35,-e/2+.1,"fp3d-sym-fill")];case"bar_stool":case"table_round":return[wt(0,0,Math.min(t,e)*.42)];case"stool":return[dt(-t/2+.04,-e/2+.04,t/2-.04,e/2-.04)];case"table":case"coffee_table":case"desk":{let n=[dt(-t/2+.05,-e/2+.05,t/2-.05,e/2-.05)];return r==="desk"&&n.push(ot(-.3,-e/2+.1,.3,-e/2+.1,"fp3d-sym-strong")),n}case"bed":case"bunk_bed":{let n=t>1.2?2:1,i=(t-.2)/n,o=[dt(-t/2,-e/2,t/2,-e/2+.07,"fp3d-sym-fill"),ot(-t/2,-e/2+(e-.1)*.36,t/2,-e/2+(e-.1)*.36)];for(let s=0;s<n;s++)o.push(dt(-t/2+.13+i*s,-e/2+.12,-t/2+.07+i*(s+1),-e/2+.12+Math.min(.4,e*.18)));return o}case"nightstand":case"wardrobe":case"dresser":case"sideboard":case"tall_cabinet":case"kitchen":case"kitchen_wall":case"kitchen_tall":case"shelf":return ss(t,e,r==="nightstand"||r==="tall_cabinet"||r==="kitchen_tall"?1:Math.max(2,Math.round(t/.5)));case"coat_rack":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),...ss(t,e,Math.max(2,Math.round(t/.5)))];case"island":return[ot(-t/2,e/2-.3,t/2,e/2-.3)];case"fridge":return[ot(-t/2+.06,e/2-.04,t/2-.06,e/2-.04,"fp3d-sym-strong")];case"stove":{let n=Math.min(t,e)*.14;return[wt(-t*.22,-e*.2,n),wt(t*.22,-e*.2,n*.8),wt(-t*.22,e*.2,n*.8),wt(t*.22,e*.2,n)]}case"sink":{let n=Math.min(.5,t-.2);return[dt(-n/2,-e/2+.1,n/2,e/2-.08),wt(0,-e/2+.06,.025,"fp3d-sym-fill")]}case"dishwasher":return[ot(-t/2+.08,e/2-.05,t/2-.08,e/2-.05,"fp3d-sym-strong")];case"washer":case"dryer":return[wt(0,.05,Math.min(t,e)*.3),ot(-t/2,-e/2+.1,t/2,-e/2+.1)];case"bathtub":return[dt(-t/2+.07,-e/2+.07,t/2-.07,e/2-.07),wt(-t/2+.14,0,.03,"fp3d-sym-fill")];case"shower":return[ot(-t/2,-e/2,t/2,e/2),ot(t/2,-e/2,-t/2,e/2),wt(0,0,.04)];case"wc":return[dt(-t/2,-e/2,t/2,-e/2+Math.min(.18,e*.3),"fp3d-sym-fill"),os(0,e*.1,t*.36,e*.3)];case"washbasin":return[os(0,.03,t*.34,e*.3)];case"tv_board":return[ot(-Math.min(t*.4,.72),-e/2+.14,Math.min(t*.4,.72),-e/2+.14,"fp3d-sym-strong"),...ss(t,e,Math.max(2,Math.round(t/.6)))];case"tv_wall":return[ot(-t/2,0,t/2,0,"fp3d-sym-strong")];case"lamp_downlight":case"lamp_spot":return[wt(0,0,Math.min(t,e)*.45,"fp3d-sym-fill"),wt(0,0,Math.min(t,e)*1.4)];case"lamp_bollard":case"lamp_garden":return[wt(0,0,Math.min(t,e)*.5,"fp3d-sym-fill"),wt(0,0,Math.min(t,e)*1.6)];case"parking":return[dt(-t/2+.08,-e/2+.08,t/2-.08,e/2-.08),ot(-t*.15,e/2-.5,0,e/2-.22,"fp3d-sym-strong"),ot(0,e/2-.22,t*.15,e/2-.5,"fp3d-sym-strong")];case"robot_vacuum":return[dt(-t*.45,-e/2,t*.45,-e/2+e*.3,"fp3d-sym-fill"),wt(0,e*.14,Math.min(t,e)*.47)];case"radiator":{let n=[],i=Math.max(3,Math.round(t/.1));for(let o=1;o<i;o++)n.push(ot(-t/2+t/i*o,-e/2,-t/2+t/i*o,e/2));return n}case"lamp_panel":return[dt(-t/2+.03,-e/2+.03,t/2-.03,e/2-.03,"fp3d-sym-fill")];case"lamp_uplight":case"lamp_ceiling":case"lamp_ceiling_fan":case"lamp_pendant":case"lamp_floor":case"lamp_table":{let n=Math.min(t,e)/2,i=[wt(0,0,n*.9,"fp3d-sym-fill"),wt(0,0,n*.3)];if(r==="lamp_ceiling"||r==="lamp_pendant"||r==="lamp_ceiling_fan")for(let o=0;o<8;o++){let s=o/8*Math.PI*2;i.push(ot(Math.cos(s)*n*1.05,Math.sin(s)*n*1.05,Math.cos(s)*n*1.35,Math.sin(s)*n*1.35))}return i}case"lamp_wall":return[dt(-t/2,-e/2,t/2,-e/2+.03,"fp3d-sym-fill"),os(0,.01,t*.4,e*.4)];case"led_strip":return[ot(-t/2,0,t/2,0,"fp3d-sym-strong")];case"plant":return[wt(0,0,Math.min(t,e)*.46),wt(0,0,Math.min(t,e)*.25)];case"rug":return[dt(-t/2+.1,-e/2+.1,t/2-.1,e/2-.1)];case"stairs":{let n=Math.max(3,Math.round(e/.26)),i=[];for(let o=1;o<n;o++)i.push(ot(-t/2,e/2-e/n*o,t/2,e/2-e/n*o));return i.push(ot(0,e/2-.1,0,-e/2+.25,"fp3d-sym-strong"),ot(-.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong"),ot(.15,-e/2+.45,0,-e/2+.25,"fp3d-sym-strong")),i}case"stairs_u":{let{steps1:n,steps2:i,fw:o,landing:s,run:a}=Wa(t,e,2.75),l=-e/2+s,d=-t/2+o,c=t/2-o,u=[ot(-t/2,l,d,l),ot(d,l,d,e/2),ot(c,l,c,e/2)];for(let _=1;_<n;_++)u.push(ot(-t/2,e/2-a*_,d,e/2-a*_));for(let _=1;_<=i;_++)u.push(ot(c,l+a*_,t/2,l+a*_));let p=(-t/2+d)/2,h=(c+t/2)/2,f=-e/2+s/2,m=e/2-.15;return u.push(ot(p,e/2-.1,p,f,"fp3d-sym-strong"),ot(p,f,h,f,"fp3d-sym-strong"),ot(h,f,h,m,"fp3d-sym-strong"),ot(h-.15,m-.2,h,m,"fp3d-sym-strong"),ot(h+.15,m-.2,h,m,"fp3d-sym-strong")),u}default:{let n=gt(r);return n?Ku(n,t,e):$}}}function Ku(r,t,e){var n;return(n=r.symbol)!=null&&n.length?r.symbol.map(i=>i.shape==="rect"?dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e,i.fill?"fp3d-sym-fill":""):i.shape==="circle"?wt(i.x*t,i.z*e,i.r*Math.min(t,e)):ot(i.x1*t,i.z1*e,i.x2*t,i.z2*e)):r.parts.filter(i=>i.w<.98||i.d<.98).map(i=>i.shape==="cyl"&&(i.axis??"y")==="y"?wt(i.x*t,i.z*e,Math.min(i.w*t,i.d*e)/2):dt((i.x-i.w/2)*t,(i.z-i.d/2)*e,(i.x+i.w/2)*t,(i.z+i.d/2)*e))}var Mt=(r,t)=>[r[0]-t[0],r[1]-t[1]],Le=(r,t)=>[r[0]+t[0],r[1]+t[1]],we=(r,t)=>[r[0]*t,r[1]*t],vn=(r,t)=>r[0]*t[0]+r[1]*t[1],bn=(r,t)=>r[0]*t[1]-r[1]*t[0],Nn=r=>Math.hypot(r[0],r[1]),Jt=r=>{let t=Nn(r)||1;return[r[0]/t,r[1]/t]},$l=r=>[-r[1],r[0]],wl=r=>[r[1],-r[0]];function At(r,t,e=[]){let n=t.eps??.005,i=[],o=e.filter(M=>Math.hypot(M.b[0]-M.a[0],M.b[1]-M.a[1])>.05),s=[],a=M=>{for(let w=0;w<s.length;w++)if(Math.abs(s[w][0]-M[0])<=n&&Math.abs(s[w][1]-M[1])<=n)return w;return s.push([M[0],M[1]]),s.length-1},l=[];for(let M of r){let w=M.points;if(w.length<3||Math.abs(St(w))<1e-6)continue;let k=St(w)>0,E=w.map(a);for(let I=0;I<w.length;I++){let C=E[I],O=E[(I+1)%w.length];C!==O&&l.push(k?{u:C,v:O,room:M.id,edge:I,forward:!0}:{u:O,v:C,room:M.id,edge:I,forward:!1})}}let d=o.map(M=>[a(M.a),a(M.b)]),c=new Set;for(let M of r){let w=M.points;w.length<3||(M.wall_splits??[]).forEach((k,E)=>{if(!k||E>=w.length)return;let I=w[E],C=Mt(w[(E+1)%w.length],I),O=Nn(C);for(let D of k)D>n&&D<O-n&&c.add(a(Le(I,we(C,D/O))))})}let u=[];for(let M of l){let w=s[M.u],k=s[M.v],E=Mt(k,w),I=Nn(E),C=we(E,1/I),O=[];for(let j=0;j<s.length;j++){if(j===M.u||j===M.v)continue;let U=Mt(s[j],w),G=vn(U,C);G<=n||G>=I-n||Math.abs(bn(C,U))<=n&&O.push({t:G,id:j})}O.sort((j,U)=>j.t-U.t);let D=[{t:0,id:M.u},...O,{t:I,id:M.v}];for(let j=0;j+1<D.length;j++){let U=D[j],G=D[j+1],Q=M.forward?U.t:I-G.t,J=M.forward?G.t:I-U.t;u.push({u:U.id,v:G.id,room:M.room,edge:M.edge,t0:Q,t1:J})}}let p=new Map;for(let M of u){let w=M.u<M.v?`${M.u}-${M.v}`:`${M.v}-${M.u}`,k=p.get(w);k||p.set(w,k=[]),k.push(M)}let h=M=>({room_id:M.room,edge:M.edge,t0:M.t0,t1:M.t1}),f=new Map;for(let M of u){let w=`${M.room}:${M.edge}`;f.set(w,[...f.get(w)??[],M.t0].sort((k,E)=>k-E))}let m=M=>{var E,I;let w=(I=(E=r.find(C=>C.id===M.room))==null?void 0:E.wall_heights)==null?void 0:I[M.edge];if(!Array.isArray(w))return w;let k=f.get(`${M.room}:${M.edge}`)??[];return w[k.indexOf(M.t0)]??null},_=M=>{let w=M.map(m).filter(E=>typeof E=="number"&&E>0);if(w.length)return Math.min(...w);let k=M.map(E=>{var I;return(I=r.find(C=>C.id===E.room))==null?void 0:I.ceiling_height});return k.every(E=>typeof E=="number"&&E>0)?Math.max(...k):void 0},b=M=>{let w=M.map(k=>{var E,I;return(I=(E=r.find(C=>C.id===k.room))==null?void 0:E.wall_thickness)==null?void 0:I[k.edge]}).filter(k=>typeof k=="number"&&k>0);return w.length?Math.max(...w):void 0},v=M=>{var w;for(let k of M){let E=r.find(D=>D.id===k.room),I=(w=E==null?void 0:E.wall_slopes)==null?void 0:w[k.edge];if(!E||!I)continue;let C=E.points[k.edge],O=E.points[(k.edge+1)%E.points.length];return{p:[C[0],C[1]],q:[O[0],O[1]],h0:Math.max(.05,I[0]),h1:Math.max(.05,I[1])}}},y=M=>M.some(w=>m(w)===0),x=M=>{let w=v(M);return w?{height:Math.max(w.h0,w.h1),slope:w}:{height:_(M)}},P=[],A=[];for(let M of p.values()){let w=M[0],k=M.find(E=>E!==w&&E.u===w.v&&E.v===w.u&&E.room!==w.room);for(let E of M)E!==w&&E!==k&&E.room!==w.room&&i.push(`overlap:${w.room}:${E.room}`);if(y(k?[w,k]:[w])){k&&P.push([w.room,k.room]);continue}if(k){let E=b([w,k])??t.interior;A.push({a:w.u,b:w.v,left:E/2,right:E/2,exterior:!1,roomLeft:w.room,roomRight:k.room,sources:[h(w),h(k)],...x([w,k])})}else A.push({a:w.u,b:w.v,left:0,right:b([w])??t.exterior,exterior:!0,roomLeft:w.room,roomRight:null,sources:[h(w)],...x([w])})}let F=M=>Jt(Mt(s[M.b],s[M.a]));for(let M of A){if(M.exterior||M.free)continue;let w=new Set;for(let E of[M.a,M.b])for(let I of A)!I.exterior||I.free||I.a!==E&&I.b!==E||Math.abs(bn(F(M),F(I)))>1e-6||(I.roomLeft===M.roomLeft?w.add("left"):I.roomLeft===M.roomRight&&w.add("right"));if(w.size!==1)continue;let k=M.left+M.right;w.has("left")?(M.left=0,M.right=k):(M.left=k,M.right=0)}o.forEach((M,w)=>{var G;let[k,E]=d[w];if(k===E)return;let I=[(M.a[0]+M.b[0])/2,(M.a[1]+M.b[1])/2],C=((G=r.find(Q=>Q.points.length>=3&&Y(I,Q.points)))==null?void 0:G.id)??null,O=(M.thickness??t.interior)/2,D=typeof M.height=="number"&&M.height>0?M.height:void 0,j=M.slope,U=j?{p:[M.a[0],M.a[1]],q:[M.b[0],M.b[1]],h0:Math.max(.05,j[0]),h1:Math.max(.05,j[1])}:void 0;A.push({free:M.id,a:k,b:E,left:O,right:O,exterior:!1,roomLeft:C,roomRight:C,sources:[],...U?{height:Math.max(U.h0,U.h1),slope:U}:{height:D}})}),A=Gu(A,s,c);let T=Qu(A,s);return{walls:A.map((M,w)=>{let k=s[M.a],E=s[M.b],I=T.get(`${w}:a`),C=T.get(`${w}:b`),O=Ju([I.right,C.left,E,C.right,I.left,k],1e-6);return{id:Uu(k,E),a:[k[0],k[1]],b:[E[0],E[1]],left:M.left,right:M.right,exterior:M.exterior,roomLeft:M.roomLeft,roomRight:M.roomRight,sources:M.sources,footprint:O,...M.free?{free:M.free}:{},...M.height!==void 0?{height:M.height}:{},...M.slope?{slope:M.slope}:{}}}),warnings:[...new Set(i)],open:P}}function Uu(r,t){let e=o=>Math.round(o*100),[n,i]=r[0]<t[0]||r[0]===t[0]&&r[1]<=t[1]?[r,t]:[t,r];return`w_${e(n[0])}_${e(n[1])}_${e(i[0])}_${e(i[1])}`}function xl(r){return{...r,a:r.b,b:r.a,left:r.right,right:r.left,roomLeft:r.roomRight,roomRight:r.roomLeft}}function Gu(r,t,e=new Set){let n=r.slice(),i=!0;for(;i;){i=!1;let o=new Map;n.forEach((s,a)=>{for(let l of[s.a,s.b]){let d=o.get(l);d||o.set(l,d=[]),d.push(a)}});for(let[s,a]of o){if(a.length!==2||e.has(s))continue;let l=n[a[0]],d=n[a[1]];if(l.b!==s&&(l=xl(l)),d.a!==s&&(d=xl(d)),l.a===d.b)continue;let c=Jt(Mt(t[l.b],t[l.a])),u=Jt(Mt(t[d.b],t[d.a]));if(Math.abs(bn(c,u))>1e-6||vn(c,u)<=0||l.free||d.free||l.height!==d.height||l.slope||d.slope||l.exterior!==d.exterior||l.roomLeft!==d.roomLeft||l.roomRight!==d.roomRight||Math.abs(l.left-d.left)>1e-9||Math.abs(l.right-d.right)>1e-9)continue;let p={...l,b:d.b,sources:Yu(l.sources,d.sources)},h=n.filter((f,m)=>m!==a[0]&&m!==a[1]);h.push(p),n.length=0,n.push(...h),i=!0;break}}return n}function Yu(r,t){let e=r.map(n=>({...n}));for(let n of t){let i=e.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));i?(i.t0=Math.min(i.t0,n.t0),i.t1=Math.max(i.t1,n.t1)):e.push({...n})}return e}function Qu(r,t){let e=new Map;r.forEach((i,o)=>{let s=Jt(Mt(t[i.b],t[i.a])),a=[[i.a,{key:`${o}:a`,d:s,left:i.left,right:i.right,angle:Math.atan2(s[1],s[0])}],[i.b,{key:`${o}:b`,d:we(s,-1),left:i.right,right:i.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[l,d]of a){let c=e.get(l);c||e.set(l,c=[]),c.push(d)}});let n=new Map;for(let[i,o]of e){let s=t[i];o.sort((d,c)=>d.angle-c.angle);let a=d=>({left:Le(s,we($l(d.d),d.left)),right:Le(s,we(wl(d.d),d.right))});for(let d of o)n.set(d.key,a(d));if(o.length<2)continue;let l=4*Math.max(...o.map(d=>Math.max(d.left,d.right)))+1e-9;for(let d=0;d<o.length;d++){let c=o[d],u=o[(d+1)%o.length],p=Le(s,we($l(c.d),c.left)),h=Le(s,we(wl(u.d),u.right)),f=bn(c.d,u.d);if(Math.abs(f)<1e-4)continue;let m=bn(Mt(h,p),u.d)/f,_=Le(p,we(c.d,m));Nn(Mt(_,s))>l||(n.get(c.key).left=_,n.get(u.key).right=_)}}return n}function Ju(r,t){let e=r.filter((i,o)=>Nn(Mt(i,r[(o+1)%r.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let i=0;i<e.length;i++){let o=e[(i+e.length-1)%e.length],s=e[i],a=e[(i+1)%e.length],l=Mt(s,o),d=Mt(a,s);if(Math.abs(bn(Jt(l),Jt(d)))<1e-7&&vn(l,d)>0){e=e.filter((c,u)=>u!==i),n=!0;break}}}return e}function Oe(r,t,e){let n=r.points[t],i=r.points[(t+1)%r.points.length],o=Jt(Mt(i,n));return Le(n,we(o,e))}function Ce(r,t,e){if(r.wall){let i=e.find(a=>a.id===r.wall);if(!i||Math.hypot(i.b[0]-i.a[0],i.b[1]-i.a[1])<.05)return null;let o=Jt(Mt(i.b,i.a));return{room:{id:r.room_id,name:"",area_id:null,points:[i.a,i.b,Le(i.a,[-o[1],o[0]])]},edge:0}}let n=t.find(i=>i.id===r.room_id);return n&&r.edge<n.points.length?{room:n,edge:r.edge}:null}function Bn(r,t,e){if(!t.wall)return Ml(r,e.room,e.edge,t.offset);let n=r.find(o=>o.free===t.wall);if(!n)return null;let i=Oe(e.room,0,t.offset);return{wall:n,s:vn(Mt(i,n.a),Jt(Mt(n.b,n.a)))}}function Zu(r,t,e){if(t.free)return null;let n=e?t.b:t.a,i=Jt(Mt(t.b,t.a)),o=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,s=null;for(let a of r)if(!(a===t||!(o(a.a)||o(a.b)))){if(s||a.exterior!==t.exterior||a.free||!o(e?a.a:a.b)||vn(Jt(Mt(a.b,a.a)),i)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;s=a}return s}function kl(r,t,e){return[0,Math.hypot(t.points[(e+1)%t.points.length][0]-t.points[e][0],t.points[(e+1)%t.points.length][1]-t.points[e][1])].map(i=>{let o=Ml(r,t,e,i);if(!o)return 0;let s=Math.hypot(o.wall.b[0]-o.wall.a[0],o.wall.b[1]-o.wall.a[1]),a=o.s>s/2;if(Math.abs(o.s-(a?s:0))>.001)return 0;let l=Zu(r,o.wall,a);return l?Math.hypot(l.b[0]-l.a[0],l.b[1]-l.a[1]):0})}function Ml(r,t,e,n){for(let i of r){if(!i.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let s=Oe(t,e,n);return{wall:i,s:vn(Mt(s,i.a),Jt(Mt(i.b,i.a)))}}return null}function rs(r,t){let e=St(t)>0?1:-1,n=[...r];for(let i=0;i<t.length&&n.length;i++){let o=t[i],s=t[(i+1)%t.length],a=d=>e*((s[0]-o[0])*(d[1]-o[1])-(s[1]-o[1])*(d[0]-o[0])),l=n;n=[];for(let d=0;d<l.length;d++){let c=l[d],u=l[(d+1)%l.length],p=a(c),h=a(u);if(p>=0&&n.push(c),p>=0!=h>=0){let f=p/(p-h);n.push([c[0]+(u[0]-c[0])*f,c[1]+(u[1]-c[1])*f])}}}return n}var Sl=r=>r.length>=3?Math.abs(Rt(r)):0;function Xu(r,t){return r.exterior?0:r.roomLeft===t?r.left:r.roomRight===t?r.right:0}function El(r,t,e){let n=Sl(r.points);if(r.points.length<3)return n;let{walls:i}=At(t.rooms,e,t.walls??[]),o=n,s=i.filter(a=>!a.free&&(a.roomLeft===r.id||a.roomRight===r.id));for(let a of i){let l=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2];if((a.free?!Y(l,r.points):!s.includes(a))||(o-=Sl(rs(r.points,a.footprint)),!a.free))continue;let d=Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1]);if(d<.2)continue;let c=[(a.b[0]-a.a[0])/d,(a.b[1]-a.a[1])/d],u=null;for(let p of s){let h=Math.hypot(p.b[0]-p.a[0],p.b[1]-p.a[1]);if(h<.2)continue;let f=[(p.b[0]-p.a[0])/h,(p.b[1]-p.a[1])/h];if(Math.abs(c[0]*f[1]-c[1]*f[0])>.05)continue;let m=Math.abs((l[0]-p.a[0])*f[1]-(l[1]-p.a[1])*f[0]),_=(a.a[0]-p.a[0])*f[0]+(a.a[1]-p.a[1])*f[1],b=(a.b[0]-p.a[0])*f[0]+(a.b[1]-p.a[1])*f[1],v=Math.min(h,Math.max(_,b))-Math.max(0,Math.min(_,b)),y=m-(a.left+a.right)/2-Xu(p,r.id);v>.1&&y>0&&m<1&&(!u||y<u.gap)&&(u={gap:y,overlap:v})}u&&(o-=u.gap*u.overlap)}return Math.max(0,o)}function as(r,t){var e,n;return t==="metric"||t==="imperial"?t:((n=(e=r==null?void 0:r.config)==null?void 0:e.unit_system)==null?void 0:n.length)==="mi"?"imperial":"metric"}function Pl(r,t){return String(Number(r.toFixed(t)))}function on(r,t=2){let e=r<0?"-":"",n=Math.round(Math.abs(r)/.0254*(t>=2?10:1))/(t>=2?10:1),i=Math.floor(n/12+1e-9),o=n-i*12,s=Pl(o,t>=2?1:0);return i?o<.05?`${e}${i}'`:`${e}${i}' ${s}"`:`${e}${s}"`}function ls(r,t){let e=r.trim().toLowerCase().replace(/,/g,".").replace(/[′’]/g,"'").replace(/[″”“]/g,'"').replace(/''/g,'"');if(!e)return null;let n=/(-?\d+(?:\.\d+)?|-?\.\d+)\s*(feet|foot|ft|'|inches|inch|in|"|mm|cm|m)?/g,i=0,o=!1,s=!1,a=e;for(let l of e.matchAll(n)){let d=Number(l[1]);if(!Number.isFinite(d))return null;let c=l[2];o=!0,a=a.replace(l[0],""),c==="feet"||c==="foot"||c==="ft"||c==="'"?(i+=d*.3048,s=!0):c==="inches"||c==="inch"||c==="in"||c==='"'?i+=d*.0254:c==="mm"?i+=d/1e3:c==="cm"?i+=d/100:c==="m"?i+=d:i+=t==="imperial"?d*(s?.0254:.3048):d}return!o||/[^\s+]/.test(a)?null:i}function Al(r,t,e){return t==="imperial"?on(r):`${e(r)} m`}function zl(r,t,e){return t==="imperial"?`${Pl(r/(.3048*.3048),1)} ft\xB2`:`${e(r)} m\xB2`}function qn(r,t){return t==="imperial"?r.replace(/\((?:m|cm)([,)])/g,"(ft$1").replace(/\s(?:m|cm)$/," ft"):r}var tp=.05,ep=.2,np=.12;function ip(r){let t=[];return r.forEach((e,n)=>{let i=e.points;if(i.length<3)return;let o=St(i)>=0;for(let s=0;s<i.length;s++){let a=i[s],l=i[(s+1)%i.length],d=l[0]-a[0],c=l[1]-a[1],u=Math.hypot(d,c);if(u<.05)continue;let p=[d/u,c/u],h=o?[p[1],-p[0]]:[-p[1],p[0]];(p[1]<-1e-9||Math.abs(p[1])<=1e-9&&p[0]<0)&&(p=[-p[0],-p[1]]);let f=[-p[1],p[0]],m=a[0]*p[0]+a[1]*p[1],_=l[0]*p[0]+l[1]*p[1];t.push({room:n,index:s,dir:p,normal:f,offset:a[0]*f[0]+a[1]*f[1],outside:h[0]*f[0]+h[1]*f[1]>0?1:-1,t0:Math.min(m,_),t1:Math.max(m,_)})}}),t}function Il(r,t=.6){let e=ip(r),n=e.map((c,u)=>u),i=c=>n[c]===c?c:n[c]=i(n[c]),o=[];for(let c=0;c<e.length;c++)for(let u=c+1;u<e.length;u++){let p=e[c],h=e[u];if(p.room===h.room||Math.abs(p.dir[0]*h.dir[1]-p.dir[1]*h.dir[0])>tp||p.outside===h.outside)continue;let f=(h.offset-p.offset)*p.outside;f>t||f<-np||Math.abs(f)<1e-4||Math.min(p.t1,h.t1)-Math.max(p.t0,h.t0)<ep||(o.push(Math.round(f*1e3)/1e3),n[i(c)]=i(u))}if(!o.length)return{rooms:r.map(c=>({...c,points:c.points.map(u=>[u[0],u[1]])})),gaps:o};let s=new Map;e.forEach((c,u)=>{let p=i(u);if(p===u&&!e.some((f,m)=>m!==u&&i(m)===u))return;let h=s.get(p)??[];h.push(u),s.set(p,h)});let a=r.map(c=>c.points.map(()=>new Map));for(let[c,u]of s){let p=u.reduce((h,f)=>h+e[f].offset,0)/u.length;for(let h of u){let f=e[h],m=p-f.offset,_=[f.normal[0]*m,f.normal[1]*m],b=r[f.room].points.length;a[f.room][f.index].set(c,_),a[f.room][(f.index+1)%b].set(c,_)}}let l=c=>Math.round(c*1e3)/1e3;return{rooms:r.map((c,u)=>({...c,points:c.points.map((p,h)=>{let f=p[0],m=p[1];for(let[_,b]of a[u][h].values())f+=_,m+=b;return[l(f),l(m)]})})),gaps:o}}function Fl(r){let t=r.filter(n=>n>.04).sort((n,i)=>n-i);if(!t.length)return null;let e=t[Math.floor(t.length/2)];return Math.min(.5,Math.max(.08,Math.round(e*100)/100))}function Rl(r,t=.05,e=.5){let n=r.map(o=>({...o,points:o.points.map(s=>[s[0],s[1]])})),i=0;for(let o=0;o<4;o++){let s=(l,d)=>n.reduce((c,u)=>c+u.points.filter(p=>Math.abs(p[l]-d)<1e-6).length,0),a=!1;for(let l of n)for(let d=0;d<l.points.length;d++){let c=l.points[d],u=l.points[(d+1)%l.points.length],p=Math.abs(u[0]-c[0]),h=Math.abs(u[1]-c[1]),f=h>1e-6&&h<=t&&p>=e?1:p>1e-6&&p<=t&&h>=e?0:null;if(f===null)continue;let[m,_]=s(f,c[f])>=s(f,u[f])?[c[f],u[f]]:[u[f],c[f]];for(let b of n)for(let v of b.points)Math.abs(v[f]-_)<1e-6&&(v[f]=m);i++,a=!0}if(!a)break}return{rooms:n,fixed:i}}var op=.25,Hi=r=>Math.round(r*1e3)/1e3;function cs(r,t,e,n,i){let o=r.rooms.find(s=>s.points.length>=3&&Y([t,e],s.points));return!o||Y([n,i],o.points)?[n,i]:Y([n,e],o.points)?[n,e]:Y([t,i],o.points)?[t,i]:[t,e]}function pe(r,t,e,n){let i=Math.hypot(n[0]-e[0],n[1]-e[1]);if(i<.01)return!1;let o=[(n[0]-e[0])/i,(n[1]-e[1])/i],s=l=>Math.abs(-(l[0]-e[0])*o[1]+(l[1]-e[1])*o[0]),a=l=>(l[0]-e[0])*o[0]+(l[1]-e[1])*o[1];return r.rooms.some(l=>l.id!==t&&l.points.some((d,c)=>{let u=l.points[(c+1)%l.points.length];return s(d)>.02||s(u)>.02?!1:Math.min(i,Math.max(a(d),a(u)))-Math.max(0,Math.min(a(d),a(u)))>.05}))}function ds(r,t,e,n,i,o=.05){let s=r.rooms.find(p=>p.points.length>=3&&Y([t.x,t.z],p.points));if(!s)return[e,n];let a=s.points,l=St(a)>=0?1:-1,d=Wt({...t}),c=e,u=n;for(let p=0;p<2;p++){let h=Wt({...t,x:c,z:u});for(let f=0;f<a.length;f++){let m=a[f],_=a[(f+1)%a.length],b=Math.hypot(_[0]-m[0],_[1]-m[1]);if(b<.05)continue;let v=[(_[0]-m[0])/b,(_[1]-m[1])/b],y=[-v[1]*l,v[0]*l],x=pe(r,s.id,m,_)?i/2:0,P=0;h.forEach((A,F)=>{let T=(A[0]-m[0])*v[0]+(A[1]-m[1])*v[1];if(T<-.01||T>b+.01)return;let S=(A[0]-m[0])*y[0]+(A[1]-m[1])*y[1]-x,M=d[F];(M[0]-m[0])*y[0]+(M[1]-m[1])*y[1]-x<-o||S<P&&(P=S)}),P<-1e-4&&(c-=y[0]*P,u-=y[1]*P)}}return[Hi(c),Hi(u)]}function Kn(r,t,e,n=op){let i=r.rooms.find(d=>d.points.length>=3&&Y([t.x,t.z],d.points));if(!i)return null;let o=i.points,s=St(o)>=0?1:-1,a=e/2,l=null;for(let d=0;d<o.length;d++){let c=o[d],u=o[(d+1)%o.length],p=Math.hypot(u[0]-c[0],u[1]-c[1]);if(p<.3)continue;let h=[(u[0]-c[0])/p,(u[1]-c[1])/p],f=[-h[1]*s,h[0]*s],m=(t.x-c[0])*h[0]+(t.z-c[1])*h[1];if(m<0||m>p)continue;let b=r.rooms.some(T=>T.id!==i.id&&T.points.some((S,M)=>{let w=T.points[(M+1)%T.points.length],k=Math.abs((S[0]-c[0])*f[0]+(S[1]-c[1])*f[1]),E=Math.abs((w[0]-c[0])*f[0]+(w[1]-c[1])*f[1]);return k<.02&&E<.02}))?a:0,v=(t.x-c[0])*f[0]+(t.z-c[1])*f[1]-b,y=Math.atan2(-f[0],f[1])*180/Math.PI,x=T=>Math.abs((t.rotation-T+540)%360-180),A=[{rotation:y,extent:t.d/2},{rotation:y+90,extent:t.w/2},{rotation:y-90,extent:t.w/2}].reduce((T,S)=>x(S.rotation)<x(T.rotation)?S:T);if(x(A.rotation)>50)continue;let F=v-A.extent;Math.abs(F)>n||l&&Math.abs(F)>=Math.abs(l.gap)||(l={x:Hi(t.x-f[0]*F),z:Hi(t.z-f[1]*F),rotation:(Math.round(A.rotation)%360+360)%360,gap:F})}return l?{x:l.x,z:l.z,rotation:l.rotation}:null}function He(r,t){let e=r.points,n=e[t],i=e[(t+1)%e.length],o=Math.hypot(i[0]-n[0],i[1]-n[1])||1,s=[(i[0]-n[0])/o,(i[1]-n[1])/o],a=[-s[1],s[0]],l=[(n[0]+i[0])/2,(n[1]+i[1])/2];Y([l[0]+a[0]*.02,l[1]+a[1]*.02],e)||(a=[-a[0],-a[1]]);let d=[a[1],-a[0]];return{a:n,b:i,u:s,n:a,length:o,rightward:s[0]*d[0]+s[1]*d[1]>0}}function bt(r,t){let e=t[0]-r.a[0],n=t[1]-r.a[1];return{s:e*r.u[0]+n*r.u[1],d:e*r.n[0]+n*r.n[1]}}function ie(r,t,e){return[r.a[0]+r.u[0]*t+r.n[0]*e,r.a[1]+r.u[1]*t+r.n[1]*e]}var sp=.45;function yn(r,t){let e=[];for(let n of t.openings){if(n.wall)continue;let i=t.rooms.find(a=>a.id===n.room_id);if(!i||n.edge>=i.points.length)continue;let{s:o,d:s}=bt(r,Oe(i,n.edge,n.offset));Math.abs(s)>.4||o<-.05||o>r.length+.05||e.push(rp(n,o))}return e}function rp(r,t){return{kind:"opening",id:r.id,s0:t-r.width/2,s1:t+r.width/2,y0:r.sill,y1:r.sill+r.height,d:0}}function je(r,t,e,n=sp){let i=[];for(let o of t.furniture){if(o.type==="stairwell"||o.type==="parking")continue;let s=Y([o.x,o.z],e.points),a=Wt(o).map(h=>bt(r,h)),l=Math.min(...a.map(h=>h.d)),d=Math.min(...a.map(h=>h.s)),c=Math.max(...a.map(h=>h.s)),u=bt(r,[o.x,o.z]);if(!s&&u.d<=0||u.d<=0||l>n||l<-.3||c<.02||d>r.length-.02)continue;let p=Tt(t,o);i.push({kind:"furniture",id:o.id,s0:d,s1:c,y0:p,y1:p+o.h,d:l})}return i}function ji(r,t,e){let n=i=>Math.round(i*1e3)/1e3;return{x:n(t.x+r.u[0]*e),z:n(t.z+r.u[1]*e)}}var us=.3;function Zt(r,t){let e=r.from?t(r.from):null,n=r.to?t(r.to):null,i=r.height??us,o=[];if(r.heights)e&&o.push([e.x,e.y,e.z]),r.points.forEach(([s,a],l)=>{var d;return o.push([s,((d=r.heights)==null?void 0:d[l])??i,a])}),n&&o.push([n.x,n.y,n.z]);else{if(!e||!n)return[];o.push([e.x,e.y,e.z],[e.x,i,e.z]);for(let[s,a]of r.points)o.push([s,i,a]);o.push([n.x,i,n.z],[n.x,n.y,n.z])}return o.filter((s,a)=>a===0||Di(s,o[a-1])>.001)}function Di(r,t){return Math.hypot(t[0]-r[0],t[1]-r[1],t[2]-r[2])}function ps(r){let t=0;for(let e=1;e<r.length;e++)t+=Di(r[e-1],r[e]);return t}function Tl(r,t){if(r.length<2)return null;let e=Math.max(0,t);for(let n=1;n<r.length;n++){let[i,o]=[r[n-1],r[n]],s=Di(i,o);if(!(s<1e-6)){if(e<=s||n===r.length-1){let a=Math.min(1,e/s),l=[(o[0]-i[0])/s,(o[1]-i[1])/s,(o[2]-i[2])/s];return{p:[i[0]+(o[0]-i[0])*a,i[1]+(o[1]-i[1])*a,i[2]+(o[2]-i[2])*a],dir:l,seg:n-1}}e-=s}}return null}function $n(r,t){let e=null,n=0;for(let i=1;i<r.length;i++){let[o,s]=[r[i-1],r[i]],a=[s[0]-o[0],s[1]-o[1],s[2]-o[2]],l=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],d=l>0?Math.max(0,Math.min(1,((t[0]-o[0])*a[0]+(t[1]-o[1])*a[1]+(t[2]-o[2])*a[2])/l)):0,c=[o[0]+a[0]*d,o[1]+a[1]*d,o[2]+a[2]*d],u=Di(c,t);(!e||u<e.d)&&(e={at:n+Math.sqrt(l)*d,d:u,seg:i-1,p:c}),n+=Math.sqrt(l)}return e}function oe(r,t,e,n){let[i,o]=ie(r,t,n);return[i,e,o]}function Ll(r,t,e,n){let i=ie(r,0,t),o=ie(e,0,n),s=r.u[0]*-e.u[1]-r.u[1]*-e.u[0];if(Math.abs(s)<1e-6)return null;let a=o[0]-i[0],l=o[1]-i[1],d=(a*-e.u[1]-l*-e.u[0])/s;return[i[0]+r.u[0]*d,i[1]+r.u[1]*d]}var Ol=["top6","side6","four"];function De(r){return r==="pool_pump"?["suction","pressure"]:r==="pool_filter"?["pump","return","waste"]:r==="pool_heat_pump"?["in","out"]:[]}function wn(r){return r==="wall"||r==="floor"?["inside","outside"]:["in","out1","out2"]}function ut(r){let[t="",e="",n]=r.split(":");return{kind:t,id:e,port:n||null}}function se(r){let{kind:t,id:e}=ut(r);return t&&e?`${t}:${e}`:r}function ap(r,t){let{w:e,d:n,h:i}=r;if(r.type==="pool_pump")return t==="suction"?[e*.5,i*.55,0]:t==="pressure"?[e*.05,i*.9,0]:null;if(r.type==="pool_filter"){let o=Math.min(e,n)/2;if(r.variant==="side6"){let l=o+.08;return t==="pump"?[l,i*.6,0]:t==="return"?[l+.06,i*.48,0]:t==="waste"?[l,i*.36,0]:null}let s=i*.89,a=o*.45+.04;return t==="pump"?[-a,s,0]:t==="return"?[a,s,0]:t==="waste"?[0,s,-a]:null}if(r.type==="pool_heat_pump"){let o=r.variant==="left"||r.variant==="back"?r.variant:"right";if(t!=="in"&&t!=="out")return null;let s=t==="in"?i*.25:i*.45;return o==="back"?[t==="in"?-e*.15:e*.15,s,-n/2-.04]:[(o==="left"?-1:1)*(e/2+.04),s,-n*.2]}return null}function Cl(r,t){let e=ap(r,t);if(!e)return null;let n=r.rotation*Math.PI/180,[i,o]=[Math.cos(n),Math.sin(n)];return{x:r.x+e[0]*i-e[2]*o,y:e[1],z:r.z+e[0]*o+e[2]*i}}function Ve(r,t){if(t==="outside"){if(r.kind==="floor")return{x:r.x,y:r.y-.3,z:r.z};if(r.kind==="wall"){let e=(r.depth??.3)+.05;return{x:r.x-(r.nx??0)*e,y:r.y,z:r.z-(r.nz??0)*e}}}return{x:r.x,y:r.y,z:r.z}}function Hl(r){return r==="pressure"||r==="return"||r==="waste"||r==="out"?"source":r==="suction"||r==="pump"||r==="in"?"sink":null}function hs(r){return r==="skimmer"||r==="drain"?"source":"sink"}function Vi(r,t){let e=r[0]??t,n=1/0;for(let i=0;i<r.length;i++){let o=r[i],s=r[(i+1)%r.length],a=s[0]-o[0],l=s[1]-o[1],d=a*a+l*l,c=d>0?Math.max(0,Math.min(1,((t[0]-o[0])*a+(t[1]-o[1])*l)/d)):0,u=[o[0]+a*c,o[1]+l*c],p=Math.hypot(u[0]-t[0],u[1]-t[1]);p<n&&([e,n]=[u,p])}return e}function ft(r,t,e){let n=e.pool??{},i=Co(t,e);return o=>{var d,c;let{kind:s,id:a,port:l}=ut(o);if(s==="port"){let u=(d=n.ports)==null?void 0:d.find(h=>h.id===a);if(!u)return null;let p=u.kind==="skimmer"?i-(u.depth??0):u.kind==="drain"?Ta(t,e)+.03:u.kind==="inlet"?i-(u.depth??.3):.02;return{x:u.x,z:u.z,y:p}}if(s==="joint"){let u=(c=n.joints)==null?void 0:c.find(p=>p.id===a);return u?Ve(u,l):null}if(s!=="dev")return null;for(let u of r.floors){let p=u.furniture.find(_=>_.id===a);if(!p||!Pt.includes(p.type))continue;let h=l?Cl(p,l):null,f=u.elevation-t.elevation;if(h)return{...h,y:h.y+Tt(u,p)+f};let m=p.type==="pool_filter"?p.h*.88:p.type==="pool_dosing"?.95:p.type==="pool_valve"?Va:p.type==="pool_pump"?.2:.3;return{x:p.x,z:p.z,y:m+Tt(u,p)+f}}return null}}function Nt(r,t){if(r.heights)return r;let e=r.height??us,n=t(r.from),i=t(r.to),o=[...n?[[n.x,n.z]]:[],...r.points,...i?[[i.x,i.z]]:[]];return{...r,points:o,heights:o.map(()=>e)}}var yt=r=>Math.round(r*1e3)/1e3;function Wi(r,t,e,n,i){let o=Nt(r,t),s=Zt(o,t),a=$n(s,e);if(!a)return null;let l={id:n,x:yt(a.p[0]),z:yt(a.p[2]),y:yt(a.p[1])},d=Un(o,t),c=Math.max(0,Math.min(o.points.length,a.seg+1-d)),u=o.heights??[],p=o.fittings??[],h={...o,to:`joint:${n}:in`,points:o.points.slice(0,c),heights:u.slice(0,c),fittings:p.filter(m=>m.at<=a.at)},f={...o,id:i,from:`joint:${n}:out1`,points:o.points.slice(c),heights:u.slice(c),fittings:p.filter(m=>m.at>a.at).map(m=>({...m,at:yt(m.at-a.at)}))};return{joint:l,first:h,second:f}}function Un(r,t){return r.from&&t(r.from)?1:0}var lp=1.6;function Dl(r,t,e){var o;let n=[],i=s=>{let a=bt(r,[s[0],s[2]]);return a.d>-.35&&a.d<lp&&a.s>-.3&&a.s<r.length+.3?a:null};for(let s of t){let a=Nt(s,e),l=Zt(a,e);if(l.length<2)continue;let d={id:s.id,pieces:[],points:[],fittings:[],ends:[]};for(let p=1;p<l.length;p++){let h=i(l[p-1]),f=i(l[p]);h&&f&&d.pieces.push({k:p-1,s0:h.s,y0:l[p-1][1],d0:h.d,s1:f.s,y1:l[p][1],d1:f.d})}if(!d.pieces.length)continue;let c=Un(a,e);a.points.forEach((p,h)=>{let f=l[h+c],m=f&&i(f);m&&d.points.push({i:h,s:m.s,y:f[1]})});let u=ps(l);for(let p of s.fittings??[]){let h=Math.min(u,p.at),f=(o=Tl(l,h))==null?void 0:o.p,m=f&&i(f);f&&m&&d.fittings.push({id:p.id,kind:p.kind,open:p.open!==!1,s:m.s,y:f[1]})}for(let[p,h]of[["from",l[0]],["to",l[l.length-1]]]){let f=(p==="from"?!s.from:!s.to)?i(h):null;f&&d.ends.push({end:p,s:f.s,y:h[1]})}n.push(d)}return n}var Vl=-.3;function xn(r,t,e,n,i){var _;let o=[],s=[],a=b=>t(b),l=[],d=r.from,c=[];for(let b of r.vias){if(b.kind!=="hole"){c.push(b.kind);continue}let v=e.find(F=>F.id===b.joint),y=a(d);if(!v||!y)continue;let x=a(`joint:${v.id}:inside`),P=a(`joint:${v.id}:outside`),A=b.dir?b.dir==="out":Math.hypot(y.x-x.x,y.z-x.z)<=Math.hypot(y.x-P.x,y.z-P.z);l.push({a:d,b:`joint:${v.id}:${A?"inside":"outside"}`,fits:c}),c=[],d=`joint:${v.id}:${A?"outside":"inside"}`}let u=r.to;if(u.length>1){let b=a(d),v=u.map(a).filter(y=>!!y);if(b&&v.length===u.length){let y=v.reduce((S,M)=>S+M.x,0)/v.length,x=v.reduce((S,M)=>S+M.z,0)/v.length,P=Math.hypot(b.x-y,b.z-x)||1,A=Math.min(1,P/2)/P,F=b.y<0||v.some(S=>S.y<0),T={id:i("joint"),kind:"tee",x:yt(y+(b.x-y)*A),z:yt(x+(b.z-x)*A),y:F?Vl:yt(b.y)};s.push(T),l.push({a:d,b:`joint:${T.id}:in`,fits:c}),c=[],u.forEach((S,M)=>l.push({a:`joint:${T.id}:out${M+1}`,b:S,fits:[]})),u=[]}}u.length&&l.push({a:d,b:u[0],fits:c});let p=b=>{let{kind:v,id:y,port:x}=ut(b),P=v==="joint"?s.find(A=>A.id===y):void 0;return P?Ve(P,x):a(b)},h=b=>n(b)==="source",f=b=>n(b)==="sink",m=r.to.some(h)&&!h(r.from)||f(r.from)&&!r.to.some(f);for(let b of l){let v=p(b.a),y=p(b.b);if(!v||!y)continue;let x=cp(v,y,jl(b.a,e),jl(b.b,e)),P={id:i("pipe"),from:b.a,to:b.b,floor_id:r.floorId,points:x.map(F=>[F[0],F[2]]),heights:x.map(F=>F[1])},A=ps(Zt(P,p));P.fittings=b.fits.map((F,T)=>({id:i("fit"),kind:F,at:yt(Math.min(A/2,.4+T*.25)),...F==="valve"?{open:!0}:{}})),m&&(P={...P,from:P.to,to:P.from,points:[...P.points].reverse(),heights:[...P.heights??[]].reverse(),fittings:(_=P.fittings)==null?void 0:_.map(F=>({...F,at:yt(Math.max(0,A-F.at))}))}),o.push(P)}return{pipes:o,joints:s}}function jl(r,t){let{kind:e,id:n,port:i}=ut(r),o=e==="joint"&&i==="outside"?t.find(s=>s.id===n):void 0;return(o==null?void 0:o.kind)==="wall"?[-(o.nx??0),-(o.nz??0)]:null}function cp(r,t,e=null,n=null){let i=r.y<0||t.y<0?Vl:yt(Math.max(r.y,t.y)),o=[],[s,a]=[r.x,r.z];e&&([s,a]=[yt(s+e[0]*.5),yt(a+e[1]*.5)],o.push([s,yt(r.y),a]));let[l,d]=[t.x,t.z],c=[];return n&&([l,d]=[yt(l+n[0]*.5),yt(d+n[1]*.5)],c.push([l,yt(t.y),d])),o.push([yt(s),i,yt(a)]),Math.abs(l-s)>.01&&o.push([yt(l),i,yt(a)]),Math.abs(d-a)>.01&&o.push([yt(l),i,yt(d)]),o.push(...c),o.filter((u,p)=>p===0||Math.hypot(u[0]-o[p-1][0],u[1]-o[p-1][1],u[2]-o[p-1][2])>.001)}function Wl(r,t,e){let n=o=>{let{kind:s,id:a,port:l}=ut(o),d=s==="joint"&&(l==="inside"||l==="outside")?t.find(c=>c.id===a):void 0;return d&&(d.kind==="wall"||d.kind==="floor")?{id:a,port:l}:null},i=[];for(let o of r.filter(s=>s.from===e||s.to===e)){let s={start:e,other:"",pipes:[],holes:[],fittings:[]},a=o,l=e,d=new Set;for(;a&&!d.has(a.id);){d.add(a.id),s.pipes.push(a.id),s.fittings.push(...(a.fittings??[]).map(h=>h.kind));let c=a.from===l?a.to:a.from,u=c?n(c):null;if(!u){s.other=c;break}s.holes.push({joint:u.id,dir:u.port==="inside"?"out":"in"}),l=`joint:${u.id}:${u.port==="inside"?"outside":"inside"}`;let p=a;a=r.find(h=>h!==p&&(h.from===l||h.to===l)),a||(s.other=l)}i.push(s)}return i}function dp(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i,s=o?Math.max(0,Math.min(1,((r[0]-t[0])*n+(r[1]-t[1])*i)/o)):0;return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-i*s)}function Nl(r,t,e=.03){return r.every(n=>Y(n,t)||t.some((i,o)=>dp(n,i,t[(o+1)%t.length])<=e))}function Bl(r,t){return t&&r.states[t]?t:Object.keys(r.states).filter(e=>e.startsWith("weather.")).sort()[0]??null}function ql(r,t){let e=r.states[t];if(!e)return!1;let n=String(e.attributes.device_class??"");return t.startsWith("binary_sensor.")?n==="moisture"||/(rain|regen|pluie|lluvia|pioggia)/.test(t):t.startsWith("sensor.")?n==="precipitation_intensity"||/\/h$/.test(String(e.attributes.unit_of_measurement??"")):!1}function Kl(r){if(!r)return!1;let t=r.entity_id.split(".")[0];return t==="binary_sensor"||t==="input_boolean"?!0:t!=="sensor"?!1:r.attributes.unit_of_measurement==="V"?!0:r.attributes.unit_of_measurement===void 0&&r.attributes.device_class!=="timestamp"&&!Number.isFinite(Number(r.state))}var Ni=["camera_cockpit","weather","screens","energy_pro","sound","auto_pro","time_travel","pool","household"],Bi=["fun_pets","fun_halloween"],up=["pool"];function fs(){try{let r=new URLSearchParams(location.search).get("fp3d_lab");return r==="1"?localStorage.setItem("neonplan3d.lab","1"):r==="0"&&localStorage.removeItem("neonplan3d.lab"),localStorage.getItem("neonplan3d.lab")==="1"}catch{return!1}}function xe(r){return!up.includes(r)||fs()}var Gl=["fridge_smart"];function Yl(r){return Ni.includes(r)||Gl.includes(r)||Bi.includes(r)}var Ul="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",pp={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function sn(r){let t=r?pp[r]:void 0;return t?`${Ul}#${t}`:Ul}function Ql(){return new Set([...Ni,...Gl,...Bi].filter(xe))}function vt(r){return xe(r)}var ms;function Jl(){let r=new URL("./neonplan3d-locate.js?v=f415cc64ec9c",new URL(import.meta.url)).href;return ms??=import(r).catch(t=>{throw ms=void 0,t}),ms}function Xl(r){let t=gt(r);if(!t)return!1;if(hp.test([t.id,...t.tags??[],...Object.values(t.name??{})].join(" ")))return!t.light||/plant|pflanz/i.test(t.id);if(t.light)return!1;let e=t.parts.filter(n=>n.color==="plant").length;return e>0&&e+t.parts.filter(n=>n.color==="pot").length>=t.parts.length/2}var hp=/plant|pflanz|palm|monstera|ficus|feige|\bfig\b|fig_|bonsai|kaktus|cactus|yucca|orchid|bambus|bamboo|bogenhanf|snake_|einblatt|lily|gummibaum|rubber|olive|kräuter|\bherb|\bfarn|\bfern\b|\befeu\b|\bivy\b|blumen|flower|tulp|tulip/i,gs=["bin120","bin240","bin1100","multi","bag","caddy","underground"],tc=["rest","bio","paper","plastic","glass","garden","recycling","other"],_s=["wall","pole","pillar","parcel","bank"],ec={bin120:[.48,.55,.93],bin240:[.58,.73,1.07],bin1100:[1.37,1.07,1.45],multi:[.6,.75,1.07],bag:[.42,.32,.62],caddy:[.3,.26,.32],underground:[1,1,1.15]},nc={wall:[.38,.14,.34],pole:[.24,.5,1.15],pillar:[.42,.36,1.3],parcel:[.6,.55,1.1],bank:[.95,.3,.7]};function ic(r){return gs.includes(r.variant??"")?r.variant:"bin240"}function oc(r){return _s.includes(r.variant??"")?r.variant:"wall"}var xt=["#3a3f47","#3a3f47"],rn=["#23262b","#23262b"],re=["#5a3b25","#5a3b25"],mt=["#1f4fa8","#1f4fa8"],We=["#e3b616","#e3b616"],st=["#2f7d3b","#2f7d3b"],Zl={default:{rest:xt,bio:re,paper:mt,plastic:We,glass:st,garden:st,recycling:We,other:xt},DE:{rest:rn,bio:re,paper:mt,plastic:We,glass:st,garden:st,recycling:We},AT:{rest:xt,bio:re,paper:[xt[0],"#c0262d"],plastic:We,glass:st,garden:st},CH:{rest:["#d8d8d8","#d8d8d8"],bio:st,paper:mt,plastic:xt,glass:st,garden:st},NL:{rest:xt,bio:st,paper:mt,plastic:["#3a3f47","#e57a1f"],glass:st,garden:st},BE:{rest:xt,bio:st,paper:mt,plastic:mt,glass:st,garden:st},GB:{rest:rn,bio:["#3a3f47","#5a3b25"],paper:mt,plastic:mt,glass:rn,garden:re,recycling:mt},US:{rest:rn,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},CA:{rest:rn,bio:st,paper:mt,plastic:mt,glass:mt,garden:st,recycling:mt},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:xt,bio:re,paper:[xt[0],"#e3b616"],plastic:[xt[0],"#e3b616"],recycling:[xt[0],"#e3b616"],glass:st,garden:st},IT:{rest:xt,bio:re,paper:mt,plastic:We,glass:st,garden:st},ES:{rest:xt,bio:re,paper:mt,plastic:We,glass:st,garden:st},PT:{rest:xt,bio:re,paper:mt,plastic:We,glass:st,garden:st},DK:{rest:rn,bio:st,paper:mt,plastic:xt,glass:st,garden:st},SE:{rest:rn,bio:re,paper:mt,plastic:xt,glass:st,garden:st},NO:{rest:xt,bio:re,paper:mt,plastic:xt,glass:st,garden:st},FI:{rest:xt,bio:re,paper:mt,plastic:xt,glass:st,garden:st}},sc="DE";function rc(){return sc}function bs(r,t){var e;return((e=Zl[t])==null?void 0:e[r])??Zl.default[r]??xt}function ac(r,t=sc){let e=bs(r.bin_kind??"rest",t),n=r.bin_color||e[0];return[n,r.bin_lid||(r.bin_color?n:e[1])]}var fp={view:"3D",editor:"Editor",all_floors:"Todas las plantas",no_building:"Todav\xEDa no hay plano.",no_building_admin:"Todav\xEDa no hay plano. Dibuja tu primera planta en el editor.",open_editor:"Abrir el editor",phone_hint:"Dibujar funciona mejor en un PC o una tableta; en el m\xF3vil puedes mirar y controlar.",loading:"Cargando \u2026",load_error:"Error al cargar",saving:"Guardando \u2026",saved:"Guardado",save_error:"Error al guardar",save_failed_detail:"Error al guardar: {error}. Tus cambios se conservan en este navegador.",needs_restart:"Hay una versi\xF3n nueva de CasaNeon ({frontend}) instalada, pero Home Assistant a\xFAn ejecuta la {version}. Reinicia Home Assistant; hasta entonces puede fallar el guardado.",needs_reload:"Esta p\xE1gina a\xFAn muestra CasaNeon {frontend}, Home Assistant ya tiene la {backend}. Recarga la p\xE1gina; en la app Companion: Ajustes \u2192 App Companion \u2192 Restablecer cach\xE9 del frontend.",reload_page:"Recargar",needs_restart_old:"Hay una versi\xF3n nueva de CasaNeon instalada, pero Home Assistant a\xFAn ejecuta una anterior. Reinicia Home Assistant; hasta entonces falla el guardado.",draft_found:"Se encontraron cambios sin guardar de {time}.",draft_restore:"Restaurar y guardar",draft_discard:"Descartar",walls_auto:"Paredes altas",walls_cut:"Corte",plain_off:"Con muebles",plain_on:"Solo plano",plain_hint:"Solo plano: paredes, puertas, ventanas y escaleras sin muebles; los dispositivos se quedan.",reset_view:"Vista general",back:"Atr\xE1s",floor:"Planta",floors:"Plantas",add_floor:"A\xF1adir planta",floor_from_ha:"Plantas de Home Assistant:",floor_empty:"Planta vac\xEDa",level:"Nivel {n}",ha_floor:"Planta en Home Assistant",no_ha_floor:"\u2013 ninguna \u2013",area_rooms:"A\xF1adir habitaciones desde las \xE1reas de HA ({n})",area_rooms_hint:"A\xF1ade una habitaci\xF3n (4 \xD7 3 m) por cada \xE1rea de esta planta; despu\xE9s col\xF3cala y ajusta las esquinas",floor_name:"Nombre",elevation:"Altura sobre el suelo (m)",floor_shift:"Desplazar la planta (m)",floor_shift_apply:"Desplazar",floor_shift_hint:"Mueve todas las habitaciones, muebles, dispositivos, zonas exteriores, paredes libres y la imagen de fondo de esta planta en X y Z. Los faldones y los cables se quedan.",height:"Altura del techo (m)",cut_height:"Altura de corte (m)",delete_floor:"Eliminar planta",delete_floor_confirm:"\xBFEliminar la planta \xAB{name}\xBB con todas sus habitaciones?",move_up:"Subir",move_down:"Bajar",floor_order_hint:"Solo cambia el orden de las plantas en la lista y en las miniaturas. D\xF3nde est\xE1 una planta en la casa 3D lo decide su \xABaltura sobre el suelo\xBB.",default_floor:"Planta baja",new_floor:"Planta {n}",tool_select:"Seleccionar",tool_rect:"Rect\xE1ngulo",tool_polygon:"Forma libre",undo:"Deshacer",redo:"Rehacer",fit:"Mostrar todo",room:"Habitaci\xF3n",rooms:"Habitaciones",room_name:"Nombre",room_id:"ID (opci\xF3n de tarjeta room:)",room_openings:"Puertas y ventanas",area:"\xC1rea",no_area:"Sin \xE1rea",material:"Suelo",x:"X (m)",z:"Y (m)",width:"Ancho (m)",depth:"Fondo (m)",points:"Esquinas",delete_point:"Eliminar esquina",duplicate:"Duplicar",delete:"Eliminar",new_room:"Habitaci\xF3n {n}",settings:"Ajustes",pendant_shape:"Forma",pendant_shade:"Pantalla",pendant_globe:"Globo",pendant_cone:"Cono",pendant_drum:"Tambor",pkg_open:"Amueblar \u2026",pkg_hint:"Los muebles se colocan contra las paredes de la habitaci\xF3n; las l\xE1mparas se vinculan a las luces del \xE1rea. Ajusta cada pieza despu\xE9s; Ctrl+Z lo deshace todo.",pkg_done:"{n} piezas colocadas; Ctrl+Z lo deshace.",pkg_kitchen_row:"Cocina en l\xEDnea",pkg_kitchen_row_desc:"L\xEDnea en la pared del fondo con nevera, horno, fregadero, lavavajillas y placa, armario alto, mesa con l\xE1mpara colgante",pkg_kitchen_l:"Cocina en L",pkg_kitchen_l_desc:"L\xEDneas al fondo y a la izquierda, isla con taburetes",pkg_bath:"Ba\xF1o",pkg_bath_desc:"Lavabo, inodoro, ba\xF1era, lavadora, foco empotrado",pkg_bedroom:"Dormitorio",pkg_bedroom_desc:"Cama doble con dos mesillas, armario, c\xF3moda, l\xE1mpara de techo",pkg_living:"Sal\xF3n",pkg_living_desc:"Mueble de TV, sof\xE1, mesa de centro, alfombra, sill\xF3n, estanter\xEDa, l\xE1mpara de pie, planta",pkg_dining:"Comedor",pkg_dining_desc:"Mesa con cuatro sillas, aparador, l\xE1mpara colgante",pkg_office:"Despacho",pkg_office_desc:"Escritorio con silla de oficina, dos estanter\xEDas, l\xE1mpara de techo",pkg_kids:"Habitaci\xF3n infantil",pkg_kids_desc:"Cama individual, escritorio, estanter\xEDa, alfombra",pkg_hall:"Recibidor",pkg_hall_desc:"Perchero, dos focos empotrados",spots_place:"Colocar focos",spots_type:"L\xE1mpara",spots_cols:"Columnas (izquierda\u2013derecha)",spots_rows:"Filas (delante\u2013detr\xE1s)",spots_add:"Colocar {n} l\xE1mparas",spots_placed:"{n} l\xE1mparas colocadas.",spots_hint:"Todas las l\xE1mparas siguen la luz elegida (p. ej. focos en un mismo regulador). Despu\xE9s, cada una puede moverse y vincularse a otra luz como cualquier mueble.",cancel:"Cancelar",backup:"Copia de seguridad",backup_history:"Puntos de restauraci\xF3n",backup_none:"Todav\xEDa ninguno. Mientras editas se guarda un punto de restauraci\xF3n como m\xE1ximo cada 10 minutos.",backup_summary:"{rooms} habitaciones, {furniture} piezas",backup_restore:"Restaurar",backup_restore_confirm:"\xBFRestaurar el estado de {time}? El estado actual se conserva como punto de restauraci\xF3n.",backup_restored:"Restaurado.",backup_file:"Archivo",backup_export:"Exportar",backup_export_share:"Compartir como plantilla",backup_export_share_hint:"Sin \xE1reas, dispositivos, sensores ni im\xE1genes; para pas\xE1rselo a otros.",backup_import:"Importar \u2026",backup_import_confirm:"\xBFSustituir todo el plano por el archivo? El estado actual se conserva como punto de restauraci\xF3n.",backup_import_error:"El archivo no es un plano de CasaNeon ({error}).",backup_imported:"Importado.",backup_hint:"Las im\xE1genes de fondo no forman parte del archivo.",backup_full:"Copia completa",backup_full_export:"Guardar todo (plano, im\xE1genes, packs)",backup_full_import:"Restaurar una copia completa \u2026",backup_full_hint:"Un solo archivo con el plano, todas las im\xE1genes de fondo y de pantalla y los packs instalados. Al restaurar se comprueba de nuevo cada pack; la clave de licencia no se incluye.",backup_full_confirm:"\xBFSustituir el plano, las im\xE1genes y los packs por la copia? El estado actual queda como punto de restauraci\xF3n.",backup_full_not_backup:"Esto no es una copia completa de CasaNeon.",backup_full_restored:"Copia restaurada: {packs} packs, {pictures} im\xE1genes.",backup_full_skipped:"Omitidos (no verificables o vinculados a otra instalaci\xF3n): {packs}.",export_name_full:"completa",device_confirm:"Preguntar antes de accionar",device_confirm_hint:"Un toque en 3D, el men\xFA r\xE1pido y el panel de la habitaci\xF3n preguntan primero. Un doble toque en la habitaci\xF3n omite este dispositivo.",cover_confirm_hint:"Abrir, cerrar y las posiciones preguntan primero en el men\xFA r\xE1pido y en el panel de la habitaci\xF3n, y deslizar sobre el marcador ya no mueve la persiana (gira la vista). Parar nunca pregunta.",confirm_switch:"\xBFAccionar {name} de verdad?",split_handle_hint:"Arrastrar: ancho del plano y de la vista 3D",wall_exterior:"Pared exterior (m)",wall_interior:"Pared interior (m)",grid:"Cuadr\xEDcula (m)",background:"Plantilla (imagen del plano)",background_upload:"Elegir imagen \u2026",background_width:"Ancho en el plano (m)",background_opacity:"Opacidad",background_rotation:"Rotaci\xF3n (\xB0)",background_edit:"Mover, escalar y girar",background_edit_done:"Listo",background_edit_hint:"Mientras el modo est\xE1 activo: arrastrar la imagen la mueve, el asa abajo a la derecha la agranda o reduce. Ajusta primero la imagen a la escala y luego g\xEDrala.",background_remove:"Quitar plantilla",hint_select:"Toca una habitaci\xF3n para seleccionarla \xB7 arrastra las esquinas \xB7 \xAB+\xBB en un borde inserta una esquina \xB7 las flechas mueven \xB7 Supr elimina \xB7 Ctrl+Z",hint_rect:"Arrastra para dibujar un rect\xE1ngulo",hint_polygon:"Coloca las esquinas \xB7 toca la primera o pulsa Intro para cerrar \xB7 Esc cancela",hint_empty:"A\xF1ade primero una planta.",area_m2:"{a} m\xB2",overlap_warning:"Hay habitaciones que se solapan; las paredes ah\xED est\xE1n incompletas.",read_only:"Solo los administradores pueden editar el plano.",mat_wood:"Madera",mat_oak:"Roble",mat_tiles:"Baldosas",mat_carpet:"Moqueta",mat_stone:"Piedra",mat_concrete:"Hormig\xF3n",card_name:"CasaNeon",card_description:"Tu casa en 3D (ne\xF3n).",stats:"{calls} llamadas de dibujo \xB7 {tris} tri\xE1ngulos",stats_fps:"{fps} fps (fotograma m\xE1s lento {ms} ms)",stats_idle:"En reposo (0 fps)",stats_busy_camera:"c\xE1mara",stats_busy_floors:"plantas",stats_busy_openings:"puertas/ventanas",stats_busy_flash:"destello",stats_busy_roof:"tejado",stats_busy_flow:"flujo de energ\xEDa",stats_busy_effect:"efecto de color",stats_busy_robot:"robot",stats_busy_orbit:"giro de c\xE1mara",stats_busy_tint:"tinte de habitaci\xF3n",stats_busy_solar:"m\xF3dulos solares",stats_busy_sound:"m\xFAsica",stats_low:"nivel tableta, ratio de p\xEDxeles {r}",stats_full:"nivel completo, ratio de p\xEDxeles {r}",floors_apart:"Separadas",floors_stacked:"Apiladas",roof_keep:"Tejado fijo",roof_keep_hint:"El tejado se queda sobre la casa al acercar en vez de elevarse y desaparecer",floor_rooms_one:"1 habitaci\xF3n",floor_rooms:"{n} habitaciones",quality:"Calidad",quality_auto:"Auto",quality_low:"Tableta",quality_high:"Alta",state_on:"Encendido",state_off:"Apagado",state_open:"Abierto",state_closed:"Cerrado",state_opening:"Abriendo",state_closing:"Cerrando",state_playing:"Reproduciendo",state_paused:"En pausa",state_idle:"Inactivo",state_locked:"Bloqueado",state_unlocked:"Desbloqueado",state_detected:"Detectado",state_clear:"Despejado",state_unavailable:"No disponible",state_heat:"Calefacci\xF3n",state_cool:"Refrigeraci\xF3n",state_auto:"Auto",state_heat_cool:"Calor/fr\xEDo",state_dry:"Deshumidificar",state_fan_only:"Ventilador",devices:"Dispositivos",devices_none_area:"Vincula la habitaci\xF3n a un \xE1rea y sus dispositivos aparecer\xE1n aqu\xED.",devices_none:"El \xE1rea no tiene dispositivos adecuados.",devices_place_all_n:"Colocar todos ({n}) \u2026",devices_place_all_confirm:"\xBFPoner {n} dispositivos en la habitaci\xF3n de una vez? (Ctrl+Z o \xABDeshacer\xBB los retira todos en un paso.)",devices_src_area:"Esta \xE1rea",devices_src_other:"Otras \xE1reas",devices_src_none:"Sin \xE1rea",panel_hide:"Ocultar en el panel de la habitaci\xF3n",panel_unhide:"Mostrar de nuevo en el panel",panel_state_hide:"Ocultar el estado en el panel de la habitaci\xF3n",panel_state_show:"Volver a mostrar el estado en el panel de la habitaci\xF3n",devices_place:"Colocar",devices_remove:"Quitar",devices_hint:"Los dispositivos colocados aparecen en 3D. Arr\xE1stralos en el plano para moverlos.",panel_lights:"Luces",panel_covers:"Persianas",panel_climate:"Calefacci\xF3n",panel_media:"Multimedia",panel_switches:"Interruptores",panel_sensors:"Sensores",panel_scenes:"Escenas y scripts",panel_cameras:"C\xE1maras",camera_live:"Abrir vista en directo",through_camera:"Mirar a trav\xE9s de la c\xE1mara",through_blend:"Fundido",through_back:"Volver a la vista",camera_mount:"Montaje",camera_mount_wall:"Pared (mira en el sentido de su rotaci\xF3n)",camera_mount_ceiling:"Techo (domo, en todas direcciones)",camera_fov:"Campo de visi\xF3n (\xB0)",camera_reach:"Alcance (m)",camera_fov_short:"\xC1ngulo \xB0",camera_reach_short:"Alcance m",camera_tilt:"Inclinaci\xF3n hacia abajo (\xB0)",camera_tilt_short:"Inclin. \xB0",camera_aim_hint:"En el plano, el cono muestra hacia d\xF3nde mira la c\xE1mara. El tirador en su punta gira la c\xE1mara y ajusta su alcance.",camera_detect_found:"Detecci\xF3n (cabina de c\xE1maras): {n} sensores encontrados en el dispositivo \u2013 {kinds}. Cuando uno informa algo, aparece un pin delante de la c\xE1mara en la vista 3D; el muro de c\xE1maras (bot\xF3n \xABC\xE1maras\xBB abajo en la vista 3D) muestra todas las im\xE1genes en directo.",camera_detect_none:"Detecci\xF3n (cabina de c\xE1maras): el dispositivo de esta c\xE1mara no tiene sensores de movimiento o detecci\xF3n. Los pines aparecen en cuanto la integraci\xF3n los proporcione (Frigate, UniFi Protect, Reolink\u2026).",camera_detect_choose:"Elegir t\xFA mismo los sensores de detecci\xF3n",camera_detect_choose_hint:"Solo cuentan los sensores marcados para los pines, el rastro de movimiento y la direcci\xF3n en vivo \u2013 tambi\xE9n sensores de otro dispositivo, p. ej. el sensor de personas de Frigate para una c\xE1mara Reolink. Sin la marca, CasaNeon usa todos los sensores del dispositivo de la c\xE1mara.",camera_detect_add:"A\xF1adir un sensor",camera_cone:"Mostrar el campo de visi\xF3n en 3D",camera_detect_pins:"Mostrar s\xEDmbolos de detecci\xF3n (persona, coche, animal)",camera_detect_pins_hint:"Desactivado: una detecci\xF3n no muestra s\xEDmbolos sobre la c\xE1mara, solo el campo de visi\xF3n se pone rojo \u2013 m\xE1s discreto en una tablet de pared.",state_recording:"Grabando",state_streaming:"En directo",panel_all_off:"Apagar todo",panel_all_on:"Todas encendidas",view_options:"Vista: calidad, aspecto, s\xEDmbolos, FPS",panel_all_open:"Todas arriba",panel_all_close:"Todas abajo",central:"Central: todas las luces, persianas y favoritos",central_house:"Toda la casa",central_lights:"Luces",central_covers:"Persianas",central_on:"Encender",central_off:"Apagar",central_open:"Subir",central_close:"Bajar",central_sure:"\xBFSeguro?",central_favorites:"Favoritos",central_no_favorites:"A\xFAn no hay favoritos. Def\xEDnelos en el editor en \xABFavoritos\xBB.",view_settings:"Ajustes",view_settings_admin:"Solo los administradores pueden cambiar estos ajustes; se aplican a toda la casa.",view_settings_look:"Aspecto",glass_size:"Tama\xF1o de las tarjetas de cristal",glass_size_hint:"Energ\xEDa, bomba de calor, coche, dispositivos y las dem\xE1s tarjetas de cristal de la vista 3D",view_settings_alerts:"Avisos",view_settings_control:"Manejo",view_settings_more:"El resto de ajustes est\xE1 en el editor, en \u2699 Ajustes.",lines_add:"A\xF1adir",lines_new:"Nueva entrada \u2026",sheet_mic:"Hablar",sheet_listening:"Escuchando\u2026",sheet_mic_failed:"No se entendi\xF3 nada: el micr\xF3fono necesita HTTPS y una canalizaci\xF3n de voz con reconocimiento.",card_central:"Estrella con men\xFA central",card_central_hint:"Todas las luces y persianas de la planta o la casa y los favoritos del editor.",favorites:"Favoritos",favorites_hint:"Escenas, scripts, automatizaciones, botones e interruptores para el men\xFA central (estrella) de la vista 3D.",favorites_add:"A\xF1adir favorito",background_handles_hint:"Mientras esta secci\xF3n est\xE1 abierta, la imagen tiene asas como un mueble: arrastrar la mueve, la esquina la escala, el asa redonda la gira. Cierra la secci\xF3n para dibujar.",background_fixed_hint:"La imagen est\xE1 fija, puedes dibujar encima.",bg_level:"Enderezar",bg_level_cancel:"Cancelar",bg_level_first:"Toca el inicio de una pared de la imagen que deber\xEDa estar recta.",bg_level_second:"Ahora toca el final de esa pared: la imagen gira para encajar.",bg_ruler:"Escala con regla",bg_ruler_cancel:"Cancelar la regla",bg_ruler_first:"Toca en la imagen el inicio de un tramo de longitud conocida.",bg_ruler_second:"Ahora toca el final del tramo.",bg_ruler_length_hint:"Medido en el plano: {m}. Introduce la longitud real.",bg_ruler_length:"Longitud real (m)",bg_ruler_apply:"Aplicar escala",thumbs_fold:"Plegar las im\xE1genes de las plantas en botones",thumbs_show:"Volver a mostrar las im\xE1genes",room_start_view:"Vista de inicio de la habitaci\xF3n",room_start_view_hint:"Al tocar la habitaci\xF3n en 3D, la c\xE1mara vuela exactamente a la vista que muestra ahora el panel 3D de la derecha: \xE1ngulo, zoom y encuadre. Activa primero \xAB3D al lado\xBB, gira y acerca la habitaci\xF3n y toca.",room_start_view_reset:"Quitar la vista de inicio de la habitaci\xF3n (de nuevo desde arriba)",room_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira y acerca la habitaci\xF3n como debe abrirse.",floor_start_view:"Vista como inicio de la planta",floor_start_view_hint:"Esta planta se abre en 3D como est\xE1 ahora la vista 3D de la derecha.",floor_start_view_reset:"Quitar la vista de inicio de la planta",floor_start_view_need_pane:"Activa primero \xAB3D al lado\xBB y gira la planta.",glow_scale:"Brillo en 3D (%)",glow_scale_hint:"Cu\xE1nto brilla la l\xE1mpara en 3D; no cambia nada en Home Assistant.",vehicle_to_spot:"Convertir en plaza de aparcamiento",vehicle_to_spot_hint:"Como plaza aparece solo cuando un sensor detecta el coche; all\xED se configura Auto Pro.",as_furniture:"Mostrar como mueble",as_furniture_hint:"Sustituye el pin por un mueble vinculado en el mismo sitio. Ctrl+Z lo deshace. Una c\xE1mara conserva su marcador con todos sus ajustes; el modelo solo se a\xF1ade.",as_furniture_pick:"Elegir mueble \u2026",camera_look_builtin:"Modelo de c\xE1mara est\xE1ndar",as_device:"Volver a pin",as_device_hint:"Sustituye el mueble por el pin de su dispositivo.",presets:"Emisoras y listas (Sonido y Cine)",presets_hint:"Aparecen en el men\xFA r\xE1pido de cada altavoz en \xABReproducir\xBB. Para un Echo: tipo SPOTIFY, AMAZON_MUSIC o TUNEIN y lo que dir\xEDas. Para otros: music o url con una direcci\xF3n o URI.",preset_type:"Tipo",preset_type_hint:"media_content_type de play_media",preset_content:"Contenido",preset_content_hint:"media_content_id: URL, URI o, en Alexa, una b\xFAsqueda",preset_add:"Emisora o lista",media_play_head:"Reproducir",own_buttons:"Botones propios",own_buttons_hint:"Aparecen en el men\xFA central (estrella): abrir una ruta, ver detalles, llamar a un servicio o abrir un popup de browser_mod.",own_button_label:"Texto",own_button_action:"Acci\xF3n",own_button_new:"Bot\xF3n nuevo",own_button_add:"Bot\xF3n propio",own_action_navigate:"Abrir ruta",own_action_more_info:"Detalles de entidad",own_action_service:"Llamar servicio",own_action_fire_dom_event:"fire-dom-event (browser_mod)",own_target_navigate:"Ruta",own_target_more_info:"Entidad",own_target_service:"Servicio (dominio.servicio)",own_data:"Datos (JSON)",own_data_hint:"Datos del servicio o contenido del evento.",own_data_bad:"No es un objeto JSON v\xE1lido.",panel_no_area:"Esta habitaci\xF3n no est\xE1 vinculada a ning\xFAn \xE1rea. Puedes vincularla en el editor.",panel_empty:"Ning\xFAn dispositivo de esta habitaci\xF3n est\xE1 en el plano. En el editor, coloca dispositivos o el\xEDgelos para el panel de la habitaci\xF3n con \u2606.",close:"Cerrar",wall_view:"Vista de pared",walk_start:"Recorrido por la casa",walk_title:"Recorrido",walk_end:"Terminar",walk_hint:"Arrastrar: mirar \xB7 tocar el suelo: ir all\xED \xB7 W A S D / flechas o el joystick: caminar \xB7 Esc: terminar",card_next:"siguiente paso \u2026",card_step_hole:"Por un agujero",card_step_fit:"Montar",card_step_end:"O hasta el final",card_lay:"Tender",card_hole_out:"hacia fuera",card_hole_in:"hacia dentro",card_to:"Conectar con",card_through:"Por (en orden, si hace falta)",card_group_pool:"En la piscina",card_group_tech:"Equipo",card_group_joints:"Tes y piezas Y",card_group_holes:"Agujeros",card_open:"Conexiones",card_open_other:"Abrir la ficha de esta pieza",card_port:"Conexi\xF3n",card_via:"por",card_reroute:"Volver a tender",card_disconnect:"Desconectar",card_with:"conectar con \u2026",card_connect:"Conectar",card_connect_with:"Conectar con \u2026",card_status:"{a} de {b} conectados",card_show_plan:"Mostrar en el plano",card_show_wall:"Mostrar en la vista de pared",joint_name:"Nombre (p. ej. agujero skimmer)",conn_hole_out:"{name}: de dentro hacia fuera",conn_hole_in:"{name}: de fuera hacia dentro",hint_joint_place:"Te o Y: toca el plano \u2013 sobre un tubo, se inserta en el tubo",port_suction:"lado de aspiraci\xF3n",port_pressure:"lado de impulsi\xF3n",port_pump:"desde la bomba",port_return:"retorno",port_waste:"desag\xFCe",port_in:"entrada",port_out:"salida",port_out1:"salida 1",port_out2:"salida 2",port_inside:"dentro",port_outside:"fuera",port_used:"ocupado",joint_tee:"Te {n}",joint_y:"Y {n}",joint_wall:"Agujero {n} (pared)",joint_floor:"Agujero {n} (suelo)",joint_add_tee:"Te",joint_add_y:"Pieza en Y",wall_kit_hole_wall:"Agujero en la pared",wall_kit_hole_floor:"Agujero en el suelo",wall_kit_tee:"Te",wall_kit_y:"Pieza en Y",wall_run_place:"Toca la pared donde va",valve_top6:"V\xE1lvula de 6 v\xEDas arriba",valve_side6:"V\xE1lvula de 6 v\xEDas lateral",valve_four:"V\xE1lvula de 4 v\xEDas",pool_valve_type:"V\xE1lvula multiv\xEDa",pool_loose_end:"extremo abierto",pool_holes_hint:"Los agujeros en paredes y suelo se ponen en la vista de pared (barra lateral).",conn_add:"A\xF1adir tubo",conn_from:"Desde",conn_via:"Por (en orden)",conn_add_via:"+ agujero, v\xE1lvula, visor \u2026",conn_to:"Hasta",conn_and:"Y hasta (segundo final, con una te antes)",conn_choose:"elegir \u2026",conn_create:"Colocar",conn_hint:"El recorrido se traza solo \u2013 dentro de conexi\xF3n en conexi\xF3n, fuera en \xE1ngulo recto bajo tierra. Aj\xFAstalo en la vista de pared y en el plano.",wall_kit_pool:"Equipo de piscina",wall_kit_energy:"Energ\xEDa",wall_run_add:"+ Tubo",wall_run_start:"Tubo: empieza en un aparato, en un tubo (T) o en la pared",wall_run_next:"Pon m\xE1s puntos \u2013 termina en un aparato o en un tubo; doble clic o Intro para acabar",wall_run_down:"\u2193 Al suelo",wall_run_through:"\u27C2 A trav\xE9s de la pared",wall_run_done:"Listo",wall_run_fit:"Toca el tubo donde va",wall_run_valve:"V\xE1lvula de bola",wall_run_sight:"Visor",wall_run_pipe:"Tubo",wall_run_pt:"Altura del punto (m)",wall_run_more:"Seguir dibujando",wall_run_tip:"Arrastra los puntos \xB7 doble clic quita \xB7 toca una v\xE1lvula: abierta/cerrada",wall_view_turn:"Girar 45\xB0 \u2013 junto a la pared vuelve a la habitaci\xF3n",wall_view_fixed:"Fijado \u2013 su\xE9ltalo para arrastrarlo",wall_view_3d:"3D en la habitaci\xF3n",wall_view_lift:"Arrastra hacia arriba o abajo: altura sobre el suelo",wall_view_hint_3d:"Toca un mueble y arr\xE1stralo por el suelo \xB7 rueda o dos dedos: m\xE1s cerca o m\xE1s lejos \xB7 bot\xF3n central o derecho (dos dedos en tableta): mirar alrededor \xB7 abajo se escriben distancias y altura \xB7 flechas a izquierda y derecha: a la pared siguiente",wall_view_front:"Pared de frente",wall_view_depth:"Distancia a la pared (m)",wall_view_room:"Ver las paredes de esta habitaci\xF3n de frente",hint_wall_pick:"Vista de pared: haz clic en la habitaci\xF3n (o cerca de una pared)",wall_view_open:"Ver la pared de frente: mover los muebles a lo largo de la pared y en altura",wall_view_hint:"Arrastrar mueve a lo largo de la pared y \u2013 si cuelga \u2013 en altura \xB7 flechas 1 cm, con May\xFAs 10 cm \xB7 los bordes se ajustan a los extremos de la pared, puertas, ventanas y otros muebles (Alt: libre) \xB7 doble clic abre el mueble en el plano",wall_view_empty:"Todav\xEDa no hay nada en esta pared: aqu\xED aparecen los muebles apoyados en ella o colgados.",wall_view_left:"Distancia desde la izquierda (m)",wall_view_floor:"est\xE1 en el suelo",wall_view_form:"Editar en el plano",wall_prev:"Pared anterior",wall_next:"Pared siguiente",brightness:"Brillo",color_temp:"Temperatura de color",color:"Color",position:"Posici\xF3n",cover_open:"Abrir",cover_stop:"Parar",cover_tilt:"Lamas",cover_tilt_open:"Lamas abiertas",cover_tilt_close:"Lamas cerradas",cover_close:"Cerrar",target_temp:"Objetivo",current_temp:"Actual",temp_down:"M\xE1s fr\xEDo",temp_up:"M\xE1s calor",volume:"Volumen",play_pause:"Reproducir/pausa",previous:"Anterior",next:"Siguiente",run:"Ejecutar",details:"Detalles",hold_hint:"Toque = accionar \xB7 pulsaci\xF3n larga = detalles",tool_opening:"Puertas y ventanas",tool_furniture:"Muebles",qm_off:"Apagado",find:"Buscar",find_placeholder:"\xBFD\xF3nde est\xE1 \u2026? Dispositivo o habitaci\xF3n",find_none:"Nada encontrado",swipe_off:"Apagado",panel_pin:"Mostrar en el panel de la habitaci\xF3n",panel_unpin:"No mostrar en el panel de la habitaci\xF3n",devices_panel_hint:"El panel de la habitaci\xF3n muestra los dispositivos del plano. \u2606 a\xF1ade un dispositivo al panel sin colocarlo.",card_section_view:"Vista",card_size:"Tama\xF1o",card_size_fixed:"Altura fija",card_size_fill:"Llenar la pantalla",card_fill_hint:"Funciona mejor en una vista del panel de tipo \xABPanel (una sola tarjeta)\xBB: la tarjeta ocupa entonces todo el espacio.",card_controls:"Conmutadores en la tarjeta",card_floor_thumbs:"Plantas en miniatura",card_floor_thumbs_hint:"Peque\xF1as im\xE1genes de las plantas en el lateral; toca una para cambiar",card_floor_thumbs_hint_start:"La planta elegida es entonces donde arranca la tarjeta; las im\xE1genes del lateral cambian a las otras",card_room_names:"Mostrar nombres de habitaciones",card_section_kiosk:"Tableta de pared (quiosco)",card_section_features:"Funciones",card_weather_plan:"como est\xE1 ajustado en el plano",card_pro_hint:"El rastro de movimiento y el tiempo son extensiones Pro: sin la extensi\xF3n correspondiente estos conmutadores no tienen efecto.",card_idle_return:"Volver a la vista inicial tras",card_idle_off:"Nunca",card_idle_min:"{n} min sin tocar",card_idle_hint:"Pasado ese tiempo, la tarjeta cierra la habitaci\xF3n y vuelve a mostrar la vista inicial.",card_night:"Atenuaci\xF3n nocturna",card_night_off:"Desactivada",card_night_sun:"Seg\xFAn el sol",card_night_time:"Franja horaria",card_night_range:"Franja horaria (p. ej. 22:00-06:00)",card_idle_orbit:"Giro de c\xE1mara como salvapantallas",card_idle_orbit_hint:"Tras volver, la vista gira despacio hasta que alguien toca la tableta",card_dashboard:"Bot\xF3n a un panel (ruta)",card_dashboard_label:"Etiqueta del bot\xF3n",card_dashboard_hint:"Un bot\xF3n arriba a la derecha de la tarjeta abre el panel o la vista con esta ruta, p. ej. /lovelace/home o /dashboard-casa/0. Sin etiqueta muestra \u2302.",card_alerts:"Mostrar avisos",card_alerts_hint:"Humo, gas, CO, agua, panel de alarma y ventanas abiertas con lluvia: la habitaci\xF3n pulsa y aparece una nota arriba",card_alert_jump:"Saltar a la habitaci\xF3n de un aviso nuevo",card_alert_jump_hint:"La vista cambia sola a la planta y a la habitaci\xF3n del aviso",card_scenes:"Botones de escenas en la habitaci\xF3n",card_scenes_hint:"Las escenas y scripts del \xE1rea como botones bajo la vista 3D mientras hay una habitaci\xF3n seleccionada",card_motion_trail:"Rastro de movimiento",card_camera_wall:"Bot\xF3n \xABC\xE1maras\xBB (muro de c\xE1maras)",card_camera_wall_hint:"Un bot\xF3n abajo en la tarjeta abre el muro de c\xE1maras con todas las im\xE1genes en directo (Pro: cabina de c\xE1maras).",card_motion_trail_hint:"D\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas (sensores de movimiento, presencia y c\xE1maras)",trail_short:"Rastro",cameras_short:"C\xE1maras",camera_wall_title:"Muro de c\xE1maras",camera_wall_hint:"Muro de c\xE1maras: todas las im\xE1genes en directo a la vez; un toque muestra una imagen en grande, un marco rojo indica movimiento",camera_wall_all:"Todas las c\xE1maras",camera_still:"imagen fija, se actualiza cada {s} s",camera_wall_big:"Mostrar la imagen en grande",detect_person:"Persona",detect_car:"Veh\xEDculo",detect_pet:"Animal",detect_motion:"Movimiento",weather_short:"Tiempo",weather_entity:"Entidad meteorol\xF3gica",weather_effects:"Efectos meteorol\xF3gicos en 3D",weather_effect_rain:"Lluvia",weather_effect_snow:"Nieve",weather_effect_fog:"Niebla (agrisa la escena)",weather_effect_clouds:"Las nubes oscurecen el cielo y el sol",weather_effect_lightning:"Rayos en tormentas",weather_effect_sky:"Sol y luna en el cielo",rain_warning:"Aviso: ventana abierta mientras llueve",rain_entity:"Lluvia de tu propia estaci\xF3n meteorol\xF3gica",rain_entity_hint:"Un sensor de lluvia (on = lluvia) o una intensidad de lluvia (mm/h) de tu estaci\xF3n indica si llueve en casa \u2013 para el aviso de lluvia y la lluvia en 3D. Sin elecci\xF3n decide la entidad del tiempo.",rain_ignore:"Sin aviso de lluvia",rain_ignore_hint:"Esta ventana puede quedar abierta con lluvia (bajo un tejadillo, p. ej.): sin aviso para ella, las dem\xE1s siguen avisando.",outage_entity:"Avisar de un corte de luz con",outage_entity_hint:"Una entidad que avisa de un corte: un sensor de red (binary_sensor de clase power \u2013 \xABoff\xBB = sin corriente), un SAI (\xABen bater\xEDa\xBB), una tensi\xF3n de red por debajo de 100 V o un ayudante propio que est\xE1 \xABon\xBB durante el corte. Entonces aparece un aviso y la conexi\xF3n a la red se tacha.",sun_patches:"Luz del sol por las ventanas",sun_patches_hint:"Con el norte ajustado, la luz del sol (sun.sun) entra por las ventanas como manchas claras en el suelo. Sin marcar: el suelo queda sin manchas de sol.",sun_shadow:"Recorrido del sol y sombra de la casa",tap_in_room:"Accionar dispositivos solo en la habitaci\xF3n abierta",tap_in_room_hint:"En la vista de la casa y de la planta, un toque en un dispositivo abre su habitaci\xF3n en vez de accionarlo, as\xED un toque pensado para la planta no mueve una persiana por error. En la habitaci\xF3n abierta todo sigue igual; una pulsaci\xF3n larga abre el men\xFA en cualquier sitio.",right_click_back:"El clic derecho retrocede un nivel",right_click_back_hint:"Un clic derecho corto en la vista 3D cierra la habitaci\xF3n o vuelve de la planta a la casa. Desactivado: un clic derecho funciona como un clic.",sun_shadow_hint:"Un arco sobre la casa muestra el recorrido del sol hoy con amanecer y atardecer, y la sombra de la casa se dibuja en el suelo y se mueve con el sol. Necesita la orientaci\xF3n norte; en el nivel \xABTableta\xBB solo el arco.",sun_arc:"Arco solar alrededor de",sun_arc_house:"la casa",sun_arc_plot:"toda la parcela",sun_arc_hint:"D\xF3nde est\xE1n el arco solar y el anillo de la br\xFAjula: alrededor de la casa (por defecto) o alrededor de todo lo dibujado \u2013 habitaciones, zonas exteriores, vallas y paredes libres.",window_glow:"Las ventanas iluminan fuera de noche",window_glow_hint:"Cuando est\xE1 oscuro, la luz de las habitaciones encendidas sale por las ventanas como un brillo c\xE1lido sobre el c\xE9sped y la terraza \u2013 en el color de la luz de la habitaci\xF3n, m\xE1s tenue tras persianas bajadas.",gpu_safe_note:"En este navegador, el arco del sol, la sombra de la casa y el brillo de las ventanas de noche est\xE1n desactivados: los gr\xE1ficos se perdieron justo despu\xE9s de arrancar. La pr\xF3xima versi\xF3n de CasaNeon lo intentar\xE1 de nuevo.",weather_entity_hint:"La entidad meteorol\xF3gica aporta lluvia, nieve, niebla y nubes a la vista 3D; autom\xE1tico toma la primera.",weather_hint:"Tiempo exterior: lluvia, nieve, niebla y nubes desde la entidad meteorol\xF3gica, sol y luna desde sun.sun",card_weather:"Tiempo exterior",card_weather_hint:"Lluvia, nieve, niebla y nubes desde la primera entidad meteorol\xF3gica (weather_entity elige otra); solo las nubes en el nivel tableta",trail_hint:"Rastro de movimiento: d\xF3nde se detect\xF3 movimiento en los \xFAltimos 30 minutos, con horas",alerts:"Avisos",alert_smoke:"Humo: {name}",alert_gas:"Gas: {name}",alert_co:"Mon\xF3xido de carbono: {name}",alert_water:"Agua: {name}",alert_alarm:"Alarma activada",alert_alarm_pending:"Alarma pendiente",alert_window_rain:"Ventana abierta con lluvia: {name}",alert_power_outage:"Corte de luz: {name}",alert_contact_unavailable:"Contacto no disponible: {name}",alert_short_contact_unavailable:"Contacto no disponible",alert_unavailable:"Avisar si un contacto de ventana o puerta no est\xE1 disponible",alert_unavailable_hint:"Si un contacto lleva 10 minutos \xABno disponible\xBB (pila agotada, sin cobertura), la ventana parece cerrada en 3D sin saberlo. Entonces aparece un aviso.",pve_title:"Proxmox",pve_hint:"Las m\xE1quinas virtuales y los contenedores de Proxmox VE",pve_online:"en l\xEDnea",pve_offline:"sin conexi\xF3n",pve_cpu:"CPU",pve_ram:"RAM",pve_disk:"Disco",pve_load:"Carga",pve_running_counts:"{vms} VM \xB7 {lxc} LXC encendidos",pve_updates:"{n} actualizaciones",pve_failed:"{n} tareas fallidas",pve_all:"Todas",pve_on:"Encendidas",pve_off:"Apagadas",pve_vm:"VM",pve_lxc:"LXC",pve_stopped:"Apagada",pve_problem:"Con problemas",pve_since:"encendida hace {d}",pve_none:"No hay ninguna en este filtro.",alert_pve_node_down:"Proxmox sin conexi\xF3n: {name}",alert_pve_disk:"Disco con problemas: {name}",alert_pve_stopped:"Se ha parado: {name}",alert_names:"Nombre del dispositivo en los avisos",alert_names_hint:"Activado: \xABCocina \xB7 Humo: Detector cocina\xBB. Desactivado: solo \xABCocina \xB7 Humo\xBB, m\xE1s corto en una tableta de pared. Sin estancia, el nombre del dispositivo se mantiene.",alert_short_smoke:"Humo",alert_short_gas:"Gas",alert_short_co:"Mon\xF3xido de carbono",alert_short_water:"Agua",alert_short_alarm:"Alarma disparada",alert_short_alarm_pending:"La alarma va a dispararse",alert_short_window_rain:"Ventana abierta con lluvia",alert_short_power_outage:"Corte de luz",alert_short_pve_node_down:"Proxmox sin conexi\xF3n",alert_short_pve_disk:"Disco con problemas",alert_short_pve_stopped:"Una VM o un contenedor se ha parado",power_outage:"Corte de luz",room_names_short:"Nombres",floor_stack_short_dim:"Atenuadas",floor_stack_short_stacked:"Apiladas",floor_stack_short_single:"Sola",size_short_w:"An",size_short_d:"F",size_short_h:"Al",import_error_not_json:"El archivo no es JSON.",import_error_not_plan:"El archivo no es un plano de CasaNeon.",export_name_template:"plantilla",export_name_backup:"copia",card_floor_stack:"Plantas inferiores",floor_stack_dim:"Atenuadas",floor_stack_stacked:"Apiladas (la casa hasta aqu\xED)",floor_stack_single:"Ocultas (solo esta planta)",card_control_walls:"Paredes altas/corte",card_control_floors:"Plantas separadas",card_control_temperature:"Temperatura",card_control_humidity:"Humedad",card_control_co2:"CO\u2082",card_controls_hint:"Paredes altas/corte, plantas separadas y temperatura, humedad, CO\u2082 para conmutar",controls_hide:"Ocultar los controles: solo queda la vista 3D",nav_wrap:"Barra en varias l\xEDneas: todas las plantas y habitaciones",nav_row:"Barra en una l\xEDnea (desplazamiento lateral)",controls_show:"Mostrar los controles de nuevo",card_controls_hidden:"Empezar con los controles ocultos",card_controls_hidden_hint:"Solo la vista 3D; un ojo abajo a la izquierda devuelve barras, valores y botones",card_controls_hide_after:"Ocultar los controles tras",card_hide_after_s:"{n} s sin tocar",card_fullscreen_button:"Bot\xF3n de pantalla completa",card_fullscreen_button_hint:"Oculta el panel alrededor de la tarjeta (p. ej. en una tableta de pared)",fullscreen:"Pantalla completa",fullscreen_exit:"Salir de pantalla completa",card_section_show:"Mostrar",card_floor:"Planta",card_floor_house:"Toda la casa (toca una planta para abrirla)",card_height:"Altura (p\xEDxeles)",card_walls:"Paredes",card_quality_hint:"\xABTableta\xBB es el ajuste m\xE1s ligero, ideal para tabletas Fire y otras tabletas de pared.",card_flows_switch:"Conmutador en la tarjeta",card_flows_on:"Siempre activado",card_flows_off:"Siempre desactivado",holos:"Hologramas",holos_hint:"Mostrar u ocultar los hologramas de la instalaci\xF3n y de los aparatos",card_energy:"Mostrar valores de energ\xEDa arriba (Energy Pro)",card_room_panel:"Detalles de la habitaci\xF3n al tocar",card_room_panel_hint:"Las luces, persianas y c\xE1maras de la habitaci\xF3n en un panel lateral",card_explode:"Separar las plantas en la vista de la casa",card_roof_fade:"Atenuar el tejado al acercar",card_roof_fade_hint:"Desactivado: el tejado se queda sobre la casa aunque la c\xE1mara se acerque.",card_plain:"Solo plano (sin muebles)",card_stats:"Indicador de rendimiento (fotogramas por segundo)",card_stats_hint:"Para comprobar la fluidez de la tarjeta en el dispositivo",packs:"Packs de muebles",packs_hint:"Solo se pueden importar packs firmados por el editor.",lib_badge_light:"L\xE1mpara: se vincula a una luz y se acciona en 3D",lib_badge_electric:"El\xE9ctrico: se vincula a una entidad y a un sensor de potencia (accionar, im\xE1genes, consumo)",lib_badge_hint:"Las piezas con s\xEDmbolo se vinculan a entidades: las l\xE1mparas se accionan, las pantallas muestran im\xE1genes, los aparatos muestran su consumo.",pack_error_wrong_instance:"Este pack est\xE1 firmado para otra instalaci\xF3n de Home Assistant. La cuenta de la tienda puede entregarlo para esta.",license_copy:"Copiar",pack_import:"Importar packs de muebles \u2026",pack_imported:"\xAB{name}\xBB de {publisher} importado: {n} piezas",packs_imported_n:"{n} de {total} packs importados",pack_by:"de {publisher} \xB7 {n} piezas",pack_features:"de {publisher} \xB7 desbloquea {n} funciones Pro",pack_needs_update:"Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon \u2013 actualiza CasaNeon (HACS) y recarga la p\xE1gina.",pro_title:"CasaNeon Pro",pro_feature_camera_cockpit:"Cabina de c\xE1mara: mirar a trav\xE9s de la c\xE1mara y rastro de movimiento",pro_name_camera_cockpit:"Cabina de c\xE1mara",pro_name_weather:"Tiempo exterior",pro_name_screens:"Pantallas en directo",pro_name_energy_pro:"Energ\xEDa Pro",ext_tab:"Extensiones",pack_updated:"{name} se ha actualizado a la versi\xF3n {release}.",pack_updated_added:"{name} se ha actualizado a la versi\xF3n {release}: {n} piezas nuevas. \xA1Echa un vistazo a la biblioteca!",ext_title:"Extensiones",ext_intro:"Packs de muebles y extensiones Pro para CasaNeon. Importa aqu\xED tus propios packs (.fp3dpack).",ext_pro:"Extensiones Pro",ext_active:"activa",beta_bar:"Beta: esta funci\xF3n todav\xEDa est\xE1 en pruebas.",ext_open:"Abrir extensiones",manual:"Manual",manual_more:"M\xE1s informaci\xF3n",ext_teaser_title:"M\xE1s muebles y funciones Pro",ext_teaser_text:"Los packs de muebles y las extensiones Pro est\xE1n en \xABExtensiones\xBB, arriba.",pro_feature_weather:"Tiempo exterior: lluvia, nieve, nubes, sol y luna",pro_feature_screens:"Pantallas en directo: color de la app y car\xE1tula del reproductor multimedia, reglas de im\xE1genes, imagen en directo de c\xE1maras en pantallas",pro_feature_energy_pro:"Energ\xEDa Pro: l\xEDneas de flujo de energ\xEDa por la casa, m\xF3dulos solares vivos, hologramas de cristal para la instalaci\xF3n y los aparatos, consumo de gas y agua de hoy; el calor llegar\xE1 como actualizaci\xF3n",pro_name_sound:"Sonido y Cine",pro_feature_sound:"Sonido y Cine: los altavoces muestran car\xE1tula, t\xEDtulo y volumen en una tarjeta de cristal, anillos de sonido alrededor de los altavoces que suenan, grupos multiroom como l\xEDneas, men\xFA r\xE1pido con reproducir, pausa, cambio de pista y volumen",pro_name_auto_pro:"Auto Pro",pro_feature_auto_pro:"Auto Pro: el coche en su plaza muestra carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n \u2013 banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido con cierre, clima y recarga, \xABfuera\xBB con su ubicaci\xF3n",pro_name_time_travel:"Viaje en el tiempo",pro_name_pool:"Pool Pro",pro_feature_pool:"Pool Pro: el agua brilla con el color de la luz de la piscina y se mueve cuando funciona la bomba de filtraci\xF3n; una tarjeta de cristal muestra la temperatura del agua, la bomba de calor con la temperatura objetivo, la bomba, la luz, el pH y el cloro/redox con sem\xE1foro; la cubierta se desliza sobre el agua; avisos de pH, cloro y helada",pool_teaser:"Con Pool Pro tu piscina cobra vida: el agua brilla con el color de la luz y se mueve cuando funciona la bomba de filtraci\xF3n. Una tarjeta de cristal muestra temperatura, bomba de calor, pH y cloro, con botones para la temperatura objetivo, la bomba, la luz y la cubierta.",pool_pro_hint:"Los campos vac\xEDos se buscan por el nombre (una entidad con \xABpool\xBB o \xABpiscina\xBB en su nombre), \xABNinguno\xBB desactiva un rol. La bomba de calor puede ser una entidad climate o de agua caliente (entonces se ajusta la temperatura objetivo) o un interruptor; la bomba un interruptor o un sensor de potencia.",pool_activate:"Activar Pool Pro para esta piscina",pool_temperature:"Temperatura del agua",pool_heater:"Bomba de calor / calefacci\xF3n",pool_pump:"Bomba de filtraci\xF3n",pool_light:"Luz de la piscina",pool_ph:"Valor de pH",pool_chlorine_role:"Cloro / redox",pool_chlorine:"Cloro",pool_orp:"Redox",pool_cover:"Cubierta",pool_cover_open:"abierta",pool_cover_closed:"cerrada",pool_cover_closed_part:"cerrada",pool_cover_open_btn:"Abrir la cubierta",pool_cover_close_btn:"Cerrar la cubierta",pool_cover_stop:"Detener la cubierta",pool_heating:"calentando",pool_pump_on:"bomba en marcha",pool_heater_on:"Bomba de calor encendida",pool_heater_off:"Bomba de calor apagada",pool_colder:"M\xE1s fr\xEDo",pool_warmer:"M\xE1s caliente",pool_shape:"Forma",pool_shape_rect:"Rectangular",pool_shape_round:"Redonda",pool_shape_oval:"Ovalada",pool_diameter:"Di\xE1metro (m)",pool_shape_free:"Libre",tool_pool:"Piscina",hint_pool:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla",hint_pool_tech:"Elige la forma y dibuja la piscina \xB7 toca una piscina para seleccionarla \xB7 conexiones, equipos y tuber\xEDas a la derecha",hint_pipe_start:"Tuber\xEDa: toca el inicio (conexi\xF3n o equipo)",hint_pipe_pool:"Tuber\xEDa: primero toca la piscina a la que pertenecen las tuber\xEDas",hint_pipe_next:"Toca las esquinas y luego el final (conexi\xF3n o equipo) \xB7 Esc cancela",pool_tool_empty:"A\xFAn no hay piscina en esta planta: elige la forma arriba y dibuja la piscina.",pool_choose:"\xBFQu\xE9 piscina?",pool_ports:"Conexiones",pool_ports_hint:"Skimmer e impulsiones en el borde, el sumidero de fondo en el vaso; el desag\xFCe recibe el agua del lavado. Mu\xE9velos en el plano.",pool_port_skimmer:"Skimmer",pool_port_drain:"Sumidero de fondo",pool_port_inlet:"Impulsi\xF3n",pool_port_waste:"Desag\xFCe",pool_devices:"Sala t\xE9cnica",furn_pool_pump:"Bomba de filtraci\xF3n",furn_pool_filter:"Filtro de arena",furn_pool_heat_pump:"Bomba de calor",furn_pool_dosing:"Equipo de dosificaci\xF3n",furn_pool_valve:"V\xE1lvula de bola",pool_valve_position:"Posici\xF3n de la v\xE1lvula selectora",valve_filter:"Filtrar",valve_backwash:"Lavado",valve_rinse:"Enjuague",valve_waste:"Vaciado",valve_recirculate:"Recircular",valve_closed:"Cerrada",pool_valve_open:"abierta",pool_pipes:"Tuber\xEDas",pool_pipe_draw:"Dibujar tuber\xEDa",pool_pipe_draw_hint:"Las tuber\xEDas unen conexiones y equipos en el sentido del agua: del skimmer a la bomba, luego al filtro, por la bomba de calor o el bypass a las impulsiones. En una derivaci\xF3n el agua pasa por la bomba de calor mientras est\xE1 encendida, si no por el bypass; una v\xE1lvula cerrada la corta. Toca una v\xE1lvula en el plano: abrir/cerrar.",pool_pipe_height:"Altura sobre el suelo (m)",pool_pipe_reverse:"Invertir el sentido",pool_pipes_pro:"Con Pool Pro el agua corre visiblemente por las tuber\xEDas: azul, caliente tras la bomba de calor.",pool_above:"Piscina elevada (sobre el suelo)",pool_above_hint:"Una piscina sobre el suelo en lugar de enterrada: una pared alrededor, el agua justo bajo el borde.",pool_height:"Altura del vaso",alert_pool_ph:"Piscina: pH {name}",alert_pool_chlorine:"Piscina: cloro/redox {name}",alert_pool_frost:"Piscina: riesgo de helada ({name})",pro_feature_time_travel:"Viaje en el tiempo: un control reproduce hasta 7 d\xEDas en la casa \u2013 luces, puertas, ventanas, persianas, movimiento, calefacci\xF3n, tiempo y sol, con marcas de eventos. Solo ver, no se conmuta nada.",tt_chip:"Viaje en el tiempo",tt_hint:"Reproducir hasta 7 d\xEDas en la casa (solo para ver, no se conmuta nada)",tt_badge:"VIAJE EN EL TIEMPO",tt_live:"En directo",tt_live_hint:"Volver al presente",tt_play:"Reproducir",tt_pause:"Pausa",tt_prev:"Evento anterior",tt_next:"Evento siguiente",tt_speed:"Velocidad: 1 hora en {s}",tt_now:"ahora",tt_ago:"hace {d}",tt_since:"desde las {time}",tt_loading:"Cargando historial \u2026",tt_error:"Historial no cargado: {error}",tt_retry:"Reintentar",tt_no_recorder:"Sin el registrador (recorder) de Home Assistant no hay historial.",tt_restart:"Reinicia Home Assistant: solo entonces conoce el viaje en el tiempo.",tt_locked:"El viaje en el tiempo es una extensi\xF3n Pro.",tt_readonly:"Viaje en el tiempo: solo para ver \u2013 no se conmuta nada",tt_ev_door:"Abierto: {name}",tt_ev_garage:"Abierto: {name}",tt_ev_lock:"Desbloqueado: {name}",tt_ev_alarm:"Alarma: {name}",tt_ev_smoke:"Humo: {name}",tt_ev_outage:"Corte de luz",tt_ev_gas:"Gas: {name}",tt_ev_co:"Mon\xF3xido de carbono: {name}",tt_ev_water:"Agua: {name}",tt_ev_rain:"Ventana abierta con lluvia: {name}",tt_ev_motion:"Movimiento de noche: {name}",tt_ev_washer:"Terminado: {name}",tt_ev_robot_start:"Arranca: {name}",tt_ev_robot_done:"Terminado: {name}",card_time_travel:"Bot\xF3n \xABViaje en el tiempo\xBB",card_time_travel_hint:"Un bot\xF3n abajo en la tarjeta reproduce las \xFAltimas horas y d\xEDas (Pro: viaje en el tiempo).",card_room:"Habitaci\xF3n inicial",card_room_none:"Ninguna (planta o casa)",card_walk:"Permitir el recorrido",card_walk_hint:"El bot\xF3n para recorrer la casa a la altura de los ojos",card_tt_range:"El viaje en el tiempo empieza",card_tt_range_24h:"hace 24 horas",card_tt_range_7d:"hace una semana",card_tt_speed:"Velocidad de reproducci\xF3n",card_tt_speed_day:"1 d\xEDa en 6 s",auto_pro_teaser:"Con Auto Pro el veh\xEDculo muestra aqu\xED carga, autonom\xEDa, recarga, cierre y clima desde su integraci\xF3n (Tesla, VW, BMW, Hyundai/Kia, Renault, Smart, Polestar\u2026): banda luminosa del color de la carga, pin con porcentaje y kil\xF3metros, men\xFA r\xE1pido, y \xABfuera\xBB con su ubicaci\xF3n cuando no est\xE1.",car_hint:"Basta una entidad del coche: CasaNeon encuentra las dem\xE1s en el mismo dispositivo de Home Assistant. Lo que no encuentre lo eliges aqu\xED; \xABNinguna\xBB desactiva un rol.",car_device:"Coche (una entidad del coche)",car_soc:"Carga (%)",car_range:"Autonom\xEDa",car_charging:"Recarga (potencia, estado o interruptor)",car_plugged:"Cable conectado",car_lock:"Cierre",car_climate:"Clima / precalentamiento",car_tracker:"Ubicaci\xF3n (device_tracker)",car_away:"fuera",car_charging_short:"cargando",car_lock_btn:"Cerrar",car_unlock_btn:"Abrir",car_unlock_confirm:"\xBFAbrir el coche de verdad?",car_climate_on:"Clima on",car_climate_off:"Clima off",car_charge_start:"Iniciar recarga",car_charge_stop:"Detener recarga",car_no_controls:"No se encontraron entidades conmutables en el coche (cierre, clima, interruptor de carga).",holo_media_playing:"sonando",holo_media_paused:"pausa",pro_locked:"Esta funci\xF3n es una extensi\xF3n Pro que todav\xEDa no est\xE1 disponible.",pack_licensed:"Licencia para {name}",pack_remove:"Quitar",pack_remove_confirm:"\xBFQuitar el pack \xAB{name}\xBB? Sus muebles se quedan en el plano como cajas simples.",pack_missing_item:"Mueble de un pack retirado",pack_error_bad_signature:"El pack ha sido modificado o su firma no es v\xE1lida.",pack_error_unknown_publisher:"Este pack no es de un editor conocido.",pack_error_unsigned:"El pack no est\xE1 firmado.",pack_error_not_a_pack:"Esto no es un archivo de pack de muebles.",pack_error_invalid_content:"El pack contiene muebles no v\xE1lidos: {detail}",pack_error_too_large:"El archivo es demasiado grande.",pack_error_needs_update:'Esta extensi\xF3n necesita una versi\xF3n m\xE1s reciente de CasaNeon. Actualiza primero (HACS \u203A CasaNeon \u203A \u22EE \u203A "Actualizar informaci\xF3n" \u203A "Descargar"), reinicia Home Assistant y vuelve a instalar.',pack_error_other:"Error al importar: {detail}",back_to_room:"Volver a {room}",back_to_floor:"Volver a la planta",hint_furniture:"Toca una habitaci\xF3n y elige una pieza a la derecha \xB7 arrastra las piezas, cambia su tama\xF1o por las esquinas",furniture_into:"Las piezas nuevas van al centro de \xAB{room}\xBB.",furniture_pick_room:"Consejo: toca primero una habitaci\xF3n; las piezas nuevas aparecen entonces en su centro.",flows:"Flujo de energ\xEDa",flows_hint:"Mostrar u ocultar las l\xEDneas luminosas del contador a los consumidores",holo_title:"Solar y energ\xEDa",holo_live:"en directo",holo_pv_now:"FV ahora",holo_today:"Hoy",holo_peak:"Pico",holo_battery:"Bater\xEDa",holo_grid:"Red",holo_house:"Casa",holo_wallbox:"Cargador",holo_autarky:"Autosuficiencia ahora",holo_house_now:"Casa ahora",chk_title:"Configuraci\xF3n",chk_hint:"Lo que necesitan Energ\xEDa y Energ\xEDa Pro. Toca una fila para ir all\xED.",chk_solar:"Campo solar colocado",chk_solar_add:"Poner un campo solar en el tejado",chk_meter:"Contador con sensor de red",chk_hub:"Punto de uni\xF3n de cables definido",chk_meter_sensor:"Contador: falta el sensor de red (W)",chk_meter_add:"A\xF1adir el contador",chk_inverter:"Inversor con sensor de potencia",chk_inverter_sensor:"Inversor: falta el sensor de potencia",chk_inverter_add:"A\xF1adir un inversor",chk_battery:"Bater\xEDa dom\xE9stica con potencia y estado de carga",chk_battery_sensor:"Bater\xEDa dom\xE9stica: falta la potencia o el estado de carga",chk_battery_opt:"Bater\xEDa dom\xE9stica (opcional)",chk_grid:"Conexi\xF3n a la red definida",chk_grid_opt:"Conexi\xF3n a la red (opcional; si no, autom\xE1tica)",chk_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_sign_grid:"Ahora mismo se est\xE1 exportando a la red aunque no hay potencia FV: probablemente el sensor de red cuenta al rev\xE9s.",energy_sign_battery:"La bater\xEDa se carga sin sol y sin consumo de la red: probablemente su sensor cuenta al rev\xE9s.",energy_sign_flip:"Invertir el signo",energy_pro_active:"Energ\xEDa Pro est\xE1 activo",energy_pro_active_hint:"Los cables, los m\xF3dulos vivos y el holograma est\xE1n en marcha. Gas, agua y calor llegar\xE1n como actualizaciones de este pack.",help_title:"Ayuda y comentarios",help_hint:"Informa de los problemas y prop\xF3n ideas como issue en GitHub: as\xED nada se pierde y todos ven el estado.",help_issue:"Informar de un problema",help_idea:"Proponer una idea",furn_name:"Nombre (opcional)",furn_mirror:"Reflejar",furn_mirror_hint:"Intercambiar izquierda y derecha: el sof\xE1 en L al rev\xE9s, el armario con la puerta al otro lado, la cocina reflejada.",cables_title:"Cables (Energ\xEDa Pro)",cables_hint:"Discontinuo: el cable busca su propio camino. Ag\xE1rralo en el plano o el\xEDgelo aqu\xED y pulsa \xABTender a mano\xBB: entonces va en l\xEDnea continua por tus puntos a la altura ajustada, p. ej. por fuera de la fachada o bajo el techo, y varios cables pueden ir en paralelo.",cable_laid:"tendido a mano",cable_lay:"Tender a mano",cable_auto:"Autom\xE1tico de nuevo",cable_height:"Altura sobre el suelo (m)",cable_points_hint:"Arrastra los puntos en el plano. Un clic en el cable a\xF1ade un punto, un doble clic en un punto lo quita.",cable_other_floor:"Este cable est\xE1 tendido en la planta {floor}: cambia all\xED para arrastrar sus puntos.",holo_settings:"Holograma (Energ\xEDa Pro)",holo_settings_hint:"El holograma cuelga de un campo solar o flota libre en un punto del plano; mantiene su tama\xF1o en el mundo y se encoge al alejar la vista. Cada instalaci\xF3n adicional recibe su propia tarjeta sobre su campo.",holo_field:"En el campo solar",holo_field_auto:"Autom\xE1tico (el campo m\xE1s grande)",holo_size:"Tama\xF1o (1 = normal)",holo_mirror:"Reflejado desde atr\xE1s (como cristal)",holo_device_min_w:"Ocultar tarjetas de dispositivos por debajo de (W)",holo_device_house:"Tarjetas de dispositivos tambi\xE9n en la vista de casa",holo_device_house_hint:"Desactivado: las tarjetas solo aparecen con su planta abierta.",holo_plant_floor:"Balance de la casa y tarjetas de instalaciones tambi\xE9n en las vistas de planta",room_ceiling:"Altura del techo (m)",units:"Longitudes",units_auto:"Autom\xE1tico ({unit})",units_metric:"Metros",units_imperial:"Pies y pulgadas",units_hint:`C\xF3mo muestra y lee el editor las longitudes. Autom\xE1tico sigue el sistema de unidades de Home Assistant. El plano siempre se guarda en metros \u2013 escribe pies y pulgadas como 8' 2", 98in o 8.2ft.`,room_area_net:"Superficie {a} \xB7 neta {n}",room_area_net_hint:"Neta: sin las paredes que entran en la estancia \u2013 las paredes interiores compartidas est\xE1n a medias en la estancia; las paredes libres y el hueco tras un trasdosado no cuentan.",room_ceiling_hint:"Vac\xEDo = altura de la planta. Con altura propia, las paredes de la estancia terminan ah\xED (salvo que una vecina sea m\xE1s alta) y las l\xE1mparas de techo cuelgan de ese techo \u2013 p. ej. 2,5 m en un sal\xF3n junto a un garaje de 5 m.",holo_plant_floor_hint:"Activado: las tarjetas siguen visibles con una planta abierta \u2013 en la planta de su campo solar (tejado: la m\xE1s alta, jard\xEDn: la m\xE1s baja).",holo_device_room:"Tarjetas de dispositivos en la habitaci\xF3n abierta",holo_device_room_hint:"Activado: al abrir una habitaci\xF3n aparecen las tarjetas de sus dispositivos.",holo_mirror_hint:"Vistas desde detr\xE1s del campo solar, las tarjetas muestran su reverso, reflejado como un cristal. Desactivado: se leen desde cualquier lado.",holo_right:"Desplazamiento lateral (m, + = derecha)",holo_up:"Desplazamiento hacia arriba (m, hacia la cumbrera)",holo_place:"Colgado",holo_place_field:"En un campo solar",holo_place_free:"Libre en el plano (arrastra el asa \u25C8)",holo_free_hint:"En el plano hay un asa \u25C8: arr\xE1strala hasta donde deba flotar el holograma (tambi\xE9n junto a la casa, por ejemplo sobre la terraza). La tarjeta mira hacia fuera de la casa.",holo_no_field:"A\xFAn no hay campo solar en el plano: el holograma flota junto a la casa.",holo_height:"Altura sobre el suelo (m)",furn_plant_card:"Mostrar la tarjeta de la instalaci\xF3n (holograma)",furn_plant_card_hint:"Energ\xEDa Pro: cada instalaci\xF3n (inversor con campos propios) recibe una tarjeta de cristal sobre su campo: potencia, curva del d\xEDa, bater\xEDa. Aqu\xED la desactivas para esta instalaci\xF3n.",furn_cable_to_grid:"El cable termina en la acometida",furn_cable_to_grid_hint:"Energ\xEDa Pro: el cable de este inversor va a la acometida en lugar del contador \u2013 por ejemplo cuando el inversor y la acometida est\xE1n lejos del cuadro el\xE9ctrico.",flow_on:"activado",flow_off:"desactivado",hint_opening:"Toca una pared para a\xF1adir una puerta o ventana; elige despu\xE9s su tipo a la derecha",preset_door:"Puerta",preset_door_double:"Puerta doble",preset_window:"Ventana",preset_window_double:"Ventana doble",preset_terrace:"Puerta de terraza",preset_terrace_double:"Puerta de terraza doble",preset_garage:"Puerta de garaje",preset_front:"Puerta de entrada",opening_style:"Estilo",sidelight_auto:"autom\xE1tico",sidelight_hinge:"Fijo lateral en el lado de las bisagras",sidelight_hinge_hint:"Si no, el fijo lateral queda frente a las bisagras; marcado, queda junto a ellas.",sidelight_width:"Ancho del fijo lateral (m)",sidelight_width_left:"Fijo lateral izquierdo (m)",sidelight_width_right:"Fijo lateral derecho (m)",style_auto:"Autom\xE1tico ({style})",style_interior:"Puerta interior",style_front:"Puerta de entrada",style_front_glass:"Puerta de entrada con cristal",style_sidelight:"Puerta de entrada con un fijo lateral",style_sidelights:"Puerta de entrada con dos fijos laterales",style_glass:"Puerta de cristal",style_sliding:"Puerta corredera",style_passage:"Hueco (sin puerta)",style_standard:"Est\xE1ndar",style_bars:"Con cuarterones",style_glass_wall:"Pared de vidrio (fija)",preset_glass_wall:"Pared de vidrio",flip_hinge:"Cambiar el lado de las bisagras",flip_main_leaf:"Cambiar la hoja principal",flip_hinge_hint:"Bisagras al otro lado",flip_swing:"Invertir el sentido de apertura",flip_swing_hint:"La puerta abre hacia la habitaci\xF3n o hacia el otro lado",main_leaf:"Hoja principal (vista desde la habitaci\xF3n)",contact_main:"Contacto hoja principal",contact_second:"Contacto segunda hoja",tool_outdoor:"Exterior",tool_measure:"Por medidas",hint_measure:"Toca el punto de inicio y escribe a la derecha las longitudes de las paredes con su direcci\xF3n",measure:"Habitaci\xF3n por medidas",measure_start:"Toca el punto de inicio en el plano, p. ej. una esquina de la habitaci\xF3n.",measure_from:"Inicio en {x} / {z} m; un toque mueve el inicio.",measure_length:"Longitud de la siguiente pared (m)",measure_close:"Cerrar habitaci\xF3n",measure_undo:"Quitar la \xFAltima pared",measure_gap:"Hueco hasta el inicio: {gap} m (se une al cerrar)",measure_hint:"Consejo: escribe una longitud y pulsa una flecha. Con medidas interiores, usa despu\xE9s \xABCerrar huecos\xBB.",rect_by_size:"Rect\xE1ngulo por medidas",rect_add:"A\xF1adir rect\xE1ngulo",dir_up:"Arriba",dir_down:"Abajo",dir_left:"Izquierda",dir_right:"Derecha",hint_outdoor:"Arrastra para dibujar una zona exterior (c\xE9sped, terraza, piscina \u2026)",hint_outdoor_free:"Coloca las esquinas de la zona exterior \xB7 toca el primer punto o pulsa Intro para cerrar \xB7 Esc cancela",outdoor_shape_rect:"Rect\xE1ngulo",outdoor_shape_free:"Forma libre",outdoor_draw_type:"Dibujar:",outdoor_draw_type_hint:"Lo que dibujas a continuaci\xF3n: c\xE9sped, terraza, camino, piscina \u2026 El tipo a\xFAn se puede cambiar despu\xE9s en el formulario.",outdoor:"Zona exterior",outdoor_type:"Tipo",outdoor_height:"Altura (m)",outdoor_offset:"Desnivel (m, \u2212 = m\xE1s bajo)",outdoor_outline:"Mostrar el contorno",outdoor_outline_hint:"Sin marcar, el \xE1rea no dibuja una l\xEDnea luminosa en su borde: para parcelas grandes hechas de varios c\xE9spedes.",outdoor_hint:"Las luces exteriores (baliza, foco de jard\xEDn, aplique exterior) iluminan todas las zonas exteriores y la fachada.",out_lawn:"C\xE9sped",out_terrace:"Terraza",out_path:"Camino",out_driveway:"Entrada de coches",out_pool:"Piscina",out_bed:"Parterre",out_hedge:"Seto",out_fence:"Valla",out_wild:"Zona silvestre",out_pergola:"P\xE9rgola / armaz\xF3n",out_balcony:"Balc\xF3n",balcony_rail:"Altura de la barandilla",outdoor_open:"Abierto (sin la \xFAltima arista)",outdoor_open_hint:"La arista del \xFAltimo punto al primero no se dibuja: una valla o p\xE9rgola apoyada en la casa.",outdoor_bracing:"Arriostramiento en X",gate_hint:"Puertas en la valla: un hueco en un lado, como una puerta en una pared. Con una entidad, la puerta tambi\xE9n se abre en 3D y un toque sobre ella la acciona.",gate_n:"Puerta {n}",gate_edge:"Lado",gate_edge_n:"Lado {n} ({len} m)",gate_kind:"Tipo",gate_kind_swing:"Portillo (una hoja)",gate_kind_double:"Puerta de dos hojas",gate_kind_slide:"Puerta corredera",gate_at:"Centro desde el inicio del lado",gate_flip:"Bisagra en el otro lado",gate_flip_slide:"Se abre hacia el otro lado",gate_outward:"Se abre hacia fuera",gate_entity:"Motor o interruptor",gate_contact:"Contacto (abierto/cerrado)",gate_time:"Tiempo de recorrido (s)",gate_remove:"Quitar puerta",gate_add:"+ Puerta en la valla",outdoor_cut:"Recortar de las zonas de abajo",outdoor_cut_hint:"Cada zona dibujada antes que la contenga entera recibe aqu\xED un hueco: un estanque o una zona silvestre en el c\xE9sped.",outdoor_slope:"Pendiente (m)",outdoor_slope_hint:"Desnivel del borde alto al bajo; el borde alto queda en el desnivel. Las luces sobre la zona lo siguen.",outdoor_slope_dir:"Baja hacia",slope_x:"derecha (+X)",slope_nx:"izquierda (\u2212X)",slope_z:"abajo (+Z)",slope_nz:"arriba (\u2212Z)",north:"Norte (\xB0 en sentido horario desde arriba)",north_hint:"El norte hace falta para el sol (luz por las ventanas).",roof:"Tejado",roof_none:"Sin tejado",roof_flat:"Tejado plano",roof_gable:"Tejado a dos aguas",roof_custom:"Secciones de tejado (a medida)",roof_sections:"Secciones de tejado",roof_sections_hint:"Cada secci\xF3n de tejado cubre un rect\xE1ngulo de la casa, p. ej. la casa, el granero o un anexo, cada una con su forma, direcci\xF3n de cumbrera, altura de alero y pendiente. Arrastra en el plano para dibujar una nueva; un toque la selecciona, arrastrar la mueve, las esquinas cambian su tama\xF1o.",roof_sections_start:"Crear secciones de tejado a partir de las habitaciones",roof_sections_regen:"Volver a crear a partir de las habitaciones",roof_sections_off:"Volver a un solo tejado",roof_regen_confirm:"\xBFSustituir todas las secciones de tejado por una propuesta nueva a partir de las habitaciones?",roof_section:"Secci\xF3n de tejado",roof_section_hint:"Las alturas se miden desde el suelo. Un lado con alero m\xE1s bajo baja m\xE1s; los tejados a un agua suben desde el primer lado.",roof_shape_gable:"Dos aguas",roof_shape_hip:"Cuatro aguas",roof_shape_pent:"Un agua",roof_shape_flat:"Plano",roof_shape_halfhip:"Media cadera",roof_shape_pyramid:"Pabell\xF3n",roof_shape_mansard:"Mansarda",roof_shape_parapet:"Pretil",roof_shape:"Forma",roof_axis_x:"Cumbrera \u2194",roof_axis_z:"Cumbrera \u2195",roof_eave:"Alero (m)",roof_pitch_short:"Pendiente (\xB0)",roof_height:"Altura (m)",roof_base:"Parte alta de las paredes (m)",roof_on_floor:"Sobre la planta",roof_on_floor_hint:"Coloca la secci\xF3n sobre los muros de esta planta.",roof_base_hint:"Si queda por debajo de la altura del techo de la planta de abajo, las paredes de esa planta terminan bajo el tejado: murete en el alero, hastiales hasta la cumbrera, paredes interiores cortadas por el fald\xF3n. En el plano, unas l\xEDneas discontinuas muestran d\xF3nde quedan 1,5 m y 2 m de altura libre.",roof_ridge_height:"Altura de cumbrera",roof_side_top:"arriba",roof_side_bottom:"abajo",roof_side_left:"izquierda",roof_side_right:"derecha",roof_swap:"Intercambiar lados",roof_turn:"Giro",roof_turn_hint:"Gira esta parte del tejado en el plano (sentido horario), p. ej. para un ala en \xE1ngulo. Las buhardillas y hastiales encima giran con ella. 0\xB0 = como antes.",roof_open:"Marquesina (postes en vez de paredes, transparente)",roof_open_short:"Marquesina",roof_dormer:"Buhardilla",roof_dormer_hint:"Una buhardilla en este lado del tejado: 2 m de ancho, frente en el muro del alero, alero 1,4 m sobre el del tejado, a dos aguas. Luego mu\xE9vela y cambia anchura y alturas como en cualquier fald\xF3n; el fald\xF3n principal se abre debajo y la pared del \xE1tico sube hasta la buhardilla \u2013 ah\xED cabe una ventana.",roof_outline:"Tomar el contorno de la planta",roof_outline_hint:"Una cubierta plana de forma libre: toma el contorno de las habitaciones de la planta mostrada (tambi\xE9n en L o en Z) como una sola superficie sin aristas. Luego puedes arrastrar las esquinas.",roof_points_hint:"Forma libre: arrastra las esquinas en el plano. Volver al rect\xE1ngulo elimina la forma.",roof_rect:"Volver al rect\xE1ngulo",roof_open_hint:"Para un techo de terraza o una cochera: postes y vigas sostienen el tejado en lugar de paredes, y es transparente. Donde la marquesina toca la pared de la casa, se apoya en ella.",roof_swap_hint:"Da la vuelta al tejado: los dos lados intercambian alero y pendiente; un tejado a un agua sube en el otro sentido.",roof_pitch:"Pendiente del tejado (\xB0)",roof_overhang:"Vuelo del tejado (m)",roof_overhang_sides:"Alero por lado",roof_overhang_sides_hint:"Fijar t\xFA mismo el alero de cada lado. Desactivado: autom\xE1tico \u2013 sin alero donde el fald\xF3n toca una parte m\xE1s alta de la casa.",roof_ridge:"Cumbrera",roof_ridge_long:"A lo largo del lado largo",roof_ridge_short:"A lo largo del lado corto (p. ej. casa adosada)",device:"Dispositivo",lamp_mount:"L\xE1mpara",lamp_ceiling:"L\xE1mpara de techo",lamp_floor:"L\xE1mpara de pie",lamp_table:"L\xE1mpara de mesa",lamp_wall:"Aplique",marker_height:"Altura del marcador (m)",height_auto:"Altura autom\xE1tica",device_centre:"Al centro de la habitaci\xF3n",lights_spread:"Repartir las l\xE1mparas de techo uniformemente",devices_search:"Buscar dispositivos \u2026",devices_more:"+{n} m\xE1s",devices_less:"menos",panel_more:"M\xE1s dispositivos del \xE1rea ({n})",panel_less:"Mostrar menos",gaps_close:"Cerrar huecos",gaps_hint:"Une habitaciones separadas hasta 60 cm en una pared com\xFAn; el hueco pasa a ser el grosor de la pared interior.",gaps_none:"No se encontraron huecos entre habitaciones.",straighten:"Enderezar bordes inclinados",straighten_hint:"Encuentra bordes de estancia desviados solo unos cent\xEDmetros (una esquina 1 cm fuera) y los endereza. Las paredes inclinadas a prop\xF3sito se mantienen.",straighten_done:"{n} bordes casi rectos enderezados.",straighten_none:"No se encontraron bordes inclinados.",gaps_closed:"{n} sitios cerrados.",gaps_closed_wall:"{n} sitios cerrados; pared interior ahora de {t} m.",fps:"FPS",controls_side:"D\xF3nde est\xE1n las im\xE1genes de plantas, la estrella, la b\xFAsqueda y el ojo",controls_left:"Izquierda",controls_right:"Derecha",keep_view:"Mantener vista",keep_view_hint:"Al cambiar de planta la c\xE1mara se queda donde est\xE1; solo la altura la sigue.",fps_title:"Indicador de rendimiento (fotogramas por segundo)",hint_garage:"Toca una pared para a\xF1adir una puerta de garaje",opening_garage:"Puerta de garaje",garage_hint:"La puerta sigue una persiana de garaje (posici\xF3n o abierto/cerrado), un contacto de puerta de garaje del \xE1rea de la habitaci\xF3n o un interruptor (encendido = abierta); tocarla en 3D conmuta el interruptor.",garage_contact:"Contacto o interruptor",door_hint:"Con un contacto de puerta, la hoja se abre; sin sensor, queda entreabierta.",hint_door:"Toca una pared para a\xF1adir una puerta",hint_window:"Toca una pared para a\xF1adir una ventana",opening_door:"Puerta",opening_window:"Ventana",opening_type:"Tipo",opening_position:"Centro desde la esquina (m)",sill:"Altura del antepecho (m)",opening_height:"Altura (m)",hinge:"Bisagras (vistas desde la habitaci\xF3n)",hinge_left:"Izquierda",hinge_right:"Derecha",cover_entity:"Persiana",door_cover:"Motor (puerta o port\xF3n motorizado)",cover_position_entity:"Sensor de posici\xF3n (en directo)",cover_position_invert:"El sensor cuenta al rev\xE9s (0 = abierto)",contact_entity:"Contacto",cover_invert:"Invertir el estado",cover_invert_hint:"Para cortinas o persianas que informan abierta cuando est\xE1n cerradas (o la posici\xF3n al rev\xE9s): solo cambia c\xF3mo se ven en CasaNeon, los botones siguen igual.",sensor_kind:"Tipo de sensor",sensor_kind_contact:"Contacto de ventana (abierta/cerrada)",sensor_kind_handle:"Sensor de manilla (abierta/abatida/cerrada)",sensor_kind_contact_tilt:"Contacto + sensor de abatimiento",handle_entity:"Sensor de manilla",handle_main:"Sensor de manilla hoja principal",leaf_main:"Hoja principal",leaf_second:"Segunda hoja",tilt_entity:"Sensor de abatimiento",tilt_angle_entity:"Sensor de \xE1ngulo de abatimiento (\xB0, opcional)",tilt_angle_max:"\xC1ngulo que cuenta como totalmente abatida (\xB0)",tilt_angle_offset:"Desfase: \xE1ngulo indicado con la ventana cerrada (\xB0)",tilt_angle_invert:"El \xE1ngulo cuenta al rev\xE9s",door_shut:"Mostrar cerrada sin sensor",door_angle:"\xC1ngulo de apertura",door_angle_hint:"Cu\xE1nto queda abierta la puerta en 3D: sin sensor siempre, con sensor en cuanto indica abierta. Por defecto: medio abierta sin sensor, totalmente abierta con \xE9l.",door_angle_default:"Por defecto",door_shut_hint:"Una puerta sin contacto queda entreabierta en 3D para que se reconozca como puerta. Marcada, se dibuja cerrada: puerta de entrada, carport, puerta lateral.",contact_invert:"Invertir contacto",contact_invert_hint:"Para sensores que informan abierto y cerrado al rev\xE9s",entity_auto:"Autom\xE1tico ({name})",entity_auto_none:"Autom\xE1tico (no se encontr\xF3)",entity_none:"Ninguno",entity_search:"Escribe para buscar \u2026",opening_hint:"Tipo de sensor: contacto de ventana (indica abierta/cerrada), sensor de manilla (indica abierta, abatida y cerrada, p. ej. una manilla Homematic) o contacto + sensor de abatimiento (un segundo sensor que solo indica abatida). Autom\xE1tico usa las persianas y contactos del \xE1rea de la habitaci\xF3n. Sensor de posici\xF3n: una entidad que indica la posici\xF3n de la persiana mientras se mueve (p. ej. un \xABlevel\xBB de Homematic, 0\u2013100 % o 0\u20131, abierto = alto); la persiana se mueve entonces en directo en 3D.",furniture:"Mueble",furniture_add:"A\xF1adir mueble",furniture_search:"Buscar muebles \u2026",furniture_search_none:"Nada encontrado. Prueba otra palabra \u2013 los muebles de los packs tienen nombres en ingl\xE9s y alem\xE1n.",furniture_type:"Pieza",rotation:"Rotaci\xF3n (\xB0)",strip_tilt:"Inclinaci\xF3n sobre su longitud (\xB0)",strip_upright:"Vertical",strip_upright_hint:"La tira est\xE1 de pie: su longitud sube desde la altura sobre el suelo \u2013 junto a un marco de puerta, como columna de luz. La inclinaci\xF3n apoya una tira tumbada contra una pendiente (90\xB0 = su cara mira de lado).",rotate_left:"\u21BA 90\xB0",rotate_right:"\u21BB 90\xB0",height_m:"Altura (m)",furn_sofa:"Sof\xE1",furn_sofa_l:"Sof\xE1 rinconera (en L)",furn_sofa_u:"Sof\xE1 en U",furn_armchair:"Sill\xF3n",furn_table:"Mesa",furn_chair:"Silla",furn_bed:"Cama",furn_nightstand:"Mesilla",furn_wardrobe:"Armario",furn_shelf:"Estanter\xEDa",furn_kitchen:"Mueble de cocina",furn_worktop:"Encimera",furn_fridge:"Nevera",furn_fridge_smart:"Nevera inteligente (side by side)",furn_door_left:"Sensor de puerta izquierda (lado congelador)",furn_door_right:"Sensor de puerta derecha (lado nevera)",fridge_hint:"Mientras un sensor de puerta indica abierta, la puerta se abre en 3D. La pantalla de la puerta derecha muestra im\xE1genes por reglas como una TV, mientras esa puerta est\xE1 cerrada.",furn_stove:"Placa de cocina",furn_sink:"Fregadero",furn_bathtub:"Ba\xF1era",furn_shower:"Ducha",furn_wc:"Inodoro",furn_washbasin:"Lavabo",furn_desk:"Escritorio",furn_tv_board:"Mueble de TV",furn_plant:"Planta",furn_rug:"Alfombra",furn_stairs:"Escalera",furn_stairs_u:"Escalera en U con descansillo",furn_stairwell:"Hueco de forjado",stairwell_hint:"Un hueco en este forjado, por ejemplo sobre la escalera o para una galer\xEDa; desde arriba se ve a trav\xE9s. El hueco debe estar dentro de una sola habitaci\xF3n; varios huecos pueden solaparse (para una forma en L, por ejemplo). Las escaleras de la planta inferior que llegan hasta aqu\xED abren el forjado por s\xED solas.",tool_hole:"Hueco de forjado",tool_roof:"Tejado",tool_energy:"Energ\xEDa",tool_wall:"Pared",hint_wall:"Arrastra para dibujar una pared suelta (tabique, media pared) \xB7 May\xFAs la mantiene recta \xB7 Alt sin im\xE1n",free_wall:"Pared",wall_length:"Longitud (m)",wall_thickness:"Grosor de la pared (m)",wall_height:"Altura (m)",wall_height_full:"Altura completa de la habitaci\xF3n",wall_none:"Sin pared",wall_none_hint:"Omitir esta pared por completo: para planos abiertos cuyas habitaciones son un solo espacio pero est\xE1n separadas en Home Assistant.",edge_thickness:"Grosor (m)",wall_thickness_hint:"Grosor de esta pared; una pared entre dos habitaciones toma el valor m\xE1s grueso.",wall_thickness_reset:"Grosor como en la casa",wall_heights:"Alturas de las paredes",wall_n:"Pared {a}\u2013{b}",wall_part:"parte {n}",wall_split_hint:"Dividir la pared aqu\xED: la parte recibe su propia altura, p. ej. 2,5 m junto a 1,7 m en l\xEDnea",wall_split_at:"Punto de divisi\xF3n desde la esquina (m)",wall_join_hint:"Quitar el punto de divisi\xF3n: la parte se une de nuevo a la anterior",wall_exterior_short:"pared exterior",room_wall_hint:"Una altura menor convierte la pared en un antepecho o una barra. Si dos habitaciones comparten la pared, se aplica el ajuste m\xE1s bajo. Las ventanas y puertas que haya terminan a la altura de la pared.",free_wall_hint:"Una pared exenta, p. ej. un tabique. Donde toca una pared de habitaci\xF3n, la esquina se ingleta. Arrastra los tiradores para mover sus extremos; arrastra la l\xEDnea para mover toda la pared.",wall_pos_hint:"X e Y: el centro de la pared en el plano.",stairwell_outside:"Esta abertura no est\xE1 en ninguna estancia y por eso no se recorta. Mu\xE9vela dentro de una estancia.",hint_hole:"Arrastra para dibujar un hueco de forjado (caja de escalera, galer\xEDa)",hint_roof:"Arrastra para dibujar una secci\xF3n de tejado \xB7 toque = seleccionar \xB7 arrastrar = mover \xB7 esquinas = tama\xF1o",hint_energy:"Toca un campo solar para seleccionarlo \xB7 arrastra para moverlo, tambi\xE9n a otra vertiente \xB7 campos nuevos con + Campo solar a la derecha",furn_parking:"Plaza de aparcamiento",furn_group_vehicles:"Aparcamiento",parking_entity:"Sensor \xABcoche presente\xBB",parking_vehicle:"Veh\xEDculo",parking_vehicle_none:"Ninguno",parking_no_pack:"No hay ning\xFAn pack de veh\xEDculos importado; los veh\xEDculos vienen del pack \xABVeh\xEDculos\xBB (Muebles \u2192 Importar pack de muebles).",parking_scale:"Tama\xF1o (%)",parking_type_entity:"Sensor de tipo de veh\xEDculo (opcional)",parking_types:"Estado \u2192 veh\xEDculo",parking_type_state:"Estado (p. ej. furgoneta)",parking_add_type:"+ Correspondencia",parking_hint:"Sin sensor, el veh\xEDculo siempre est\xE1 ah\xED. Con sensor, aparece en cuanto este indica \xABon\xBB, \xABhome\xBB o \xABpresent\xBB. Un sensor de tipo de veh\xEDculo (p. ej. de un an\xE1lisis de c\xE1mara con IA) elige el modelo: cuando su estado coincide con una entrada, tambi\xE9n como palabra dentro del texto, se muestra ese veh\xEDculo; si no, el predeterminado.",parking_too_tall:"El veh\xEDculo ({car} m) es m\xE1s alto que la habitaci\xF3n ({room} m).",furn_lamp_ceiling:"L\xE1mpara de techo",furn_lamp_downlight:"Foco empotrado",furn_lamp_spot:"Foco de superficie",furn_lamp_panel:"Panel LED",furn_lamp_uplight:"Luz de suelo ascendente",furn_lamp_bollard:"Baliza",furn_lamp_garden:"Foco de jard\xEDn",furn_radiator:"Radiador",furn_robot_vacuum:"Robot aspirador",furn_entity_vacuum:"Robot aspirador",furn_robot_room:"Habitaci\xF3n actual (sensor)",robot_hint:"Mientras el robot limpia en Home Assistant, recorre franjas en 3D por la habitaci\xF3n que indica (un sensor de \xABhabitaci\xF3n actual\xBB, reconocido por el nombre de la habitaci\xF3n o del \xE1rea); si no, por la habitaci\xF3n de su base. El recorrido es simulado: Home Assistant normalmente no conoce la posici\xF3n exacta. Vuelve a la base cuando regresa.",furn_lamp_pendant:"L\xE1mpara colgante",furn_lamp_floor:"L\xE1mpara de pie",furn_lamp_table:"L\xE1mpara de mesa",furn_lamp_wall:"Aplique",furn_led_strip:"Tira LED",furn_group_lights:"Luces",furn_entity_light:"Luz o interruptor",furn_color_entity:"Color y brillo desde (opcional)",furn_color_entity_hint:"Para l\xE1mparas que un rel\xE9 (Shelly, actuador) enciende y apaga mientras la bombilla conoce su color y brillo: encendido/apagado viene del interruptor de arriba, color y brillo de esta entidad.",furn_entity_climate:"Calefacci\xF3n (termostato)",lamp_hint:"Toca la l\xE1mpara en 3D para accionarla; pulsaci\xF3n larga para el men\xFA r\xE1pido. Los interruptores tambi\xE9n sirven (p. ej. un rel\xE9 para la l\xE1mpara de techo): la l\xE1mpara brilla mientras est\xE1 activado. Las l\xE1mparas de mesa se apoyan en el mueble de debajo.",lamp_hint_pendant:"Altura = ca\xEDda desde el techo. Toque en 3D para accionar, pulsaci\xF3n larga para detalles.",theme:"Estilo",version_hint:"Versi\xF3n instalada de CasaNeon \u2013 interfaz; la integraci\xF3n en Home Assistant informa {backend}",accent:"Color de acento",accent_hint:"Un color de acento propio: l\xEDneas y bordes luminosos del aspecto ne\xF3n, botones y pines \u2013 \u21BA devuelve el cian ne\xF3n",accent_reset:"Volver al cian",theme_neon:"Ne\xF3n",theme_blueprint:"Plano t\xE9cnico",theme_day:"D\xEDa",furnish:"Amueblar",split_3d:"3D al lado",mount_height:"Altura sobre el suelo (m)",side_open:"Abrir la barra lateral",side_close:"Cerrar",side_details:"Detalles de la selecci\xF3n",side_pin:"Fijar",side_pinned:"Fijada",side_pin_hint:"Fijada, la barra lateral permanece abierta; si no, se pliega junto a la vista 3D mientras no hay nada seleccionado",split_3d_hint:"3D en directo junto al plano: arrastra y gira ah\xED muebles y dispositivos, con deshacer, guardado con el plano",size_w:"Ancho (m)",size_d:"Fondo (m)",size_h:"Altura (m)",furnish_hint:"Arrastra muebles, l\xE1mparas y dispositivos \xB7 los muebles se pegan a las paredes \xB7 toca uno para girarlo, ajustar su altura y su montaje",done:"Listo",heatmap:"Mapa de calor",heat_off:"Normal",heat_short_temperature:"Temp.",heat_short_humidity:"Humedad",heat_short_co2:"CO\u2082",heat_short_values:"Valores",heat_temperature:"Temperatura",heat_humidity:"Humedad",heat_co2:"CO\u2082",heat_values:"Valores junto a los nombres de las habitaciones",heat_none_found:"No hay sensores adecuados en las \xE1reas de las habitaciones.",markers:"Marcadores",markers_none:"Ninguno",markers_important:"Importantes",markers_all:"Todos",furn_stool:"Taburete",furn_coffee_table:"Mesa de centro",furn_tv_wall:"TV (pared)",furn_sideboard:"Aparador",furn_table_round:"Mesa redonda",furn_bench:"Banco",furn_corner_bench:"Banco rinconero",furn_bar_stool:"Taburete de bar",furn_kitchen_wall:"Armario alto de cocina",furn_kitchen_tall:"Columna con horno",furn_island:"Isla de cocina",furn_dishwasher:"Lavavajillas",furn_bunk_bed:"Litera",furn_dresser:"C\xF3moda",furn_washer:"Lavadora",furn_dryer:"Secadora",furn_office_chair:"Silla de oficina",furn_tall_cabinet:"Armario alto",furn_coat_rack:"Perchero",furn_group_living:"Sal\xF3n",furn_group_dining:"Comedor",furn_group_kitchen:"Cocina",furn_group_sleeping:"Dormitorio",furn_group_bath:"Ba\xF1o y lavadero",furn_group_work:"Trabajo y otros",furn_group_energy:"Energ\xEDa y solar",energy_devices:"Dispositivos",solar_pro_title:"Solar y Energ\xEDa Pro",solar_pro_soon:"pr\xF3ximamente",solar_pro_1:"M\xF3dulos que cobran vida con el sol y brillan seg\xFAn su producci\xF3n",solar_pro_2:"Finas l\xEDneas de flujo de energ\xEDa por la casa: de d\xF3nde viene la electricidad y ad\xF3nde va",solar_pro_3:"Un holograma de cristal con potencia, curva del d\xEDa, producci\xF3n de hoy y autosuficiencia",solar_pro_4:"Valores por cadena en el tejado, bater\xEDa, cargador y red de un vistazo",solar_pro_free:"Todo lo que configuras aqu\xED (campos, cadenas, dispositivos, sensores) sigue siendo gratuito y la extensi\xF3n Pro lo usa directamente.",wallbox_charging:"cargando",wallbox_plugged:"enchufado",furn_soc:"Estado de carga (%)",furn_export:"Potencia exportada (W, sensor separado, opcional)",furn_export_hint:"Si tu contador indica el consumo de la red y la exportaci\xF3n en dos sensores (p. ej. Growatt, Tibber Pulse), usa arriba el sensor de consumo como potencia y aqu\xED el de exportaci\xF3n. Un sensor con signo no lo necesita.",furn_charge:"Potencia de carga (W, sensor separado, opcional)",furn_charge_hint:"Si tu bater\xEDa indica la carga y la descarga en dos sensores (p. ej. Anker Solix), usa arriba el sensor de descarga como potencia y aqu\xED el de carga. Un sensor con signo no lo necesita.",furn_wallbox_status:"Estado (cargando, enchufado)",energy_only_note:"\u26A1 Energ\xEDa: aqu\xED solo se mueven los campos solares y los dispositivos de energ\xEDa; habitaciones y muebles est\xE1n bloqueados.",roof_only_note:"\u{1F3E0} Tejado: aqu\xED solo se mueven las secciones de tejado y las ventanas de tejado; habitaciones y muebles est\xE1n bloqueados.",energy_devices_hint:"Contador, inversores, bater\xEDas dom\xE9sticas, cargadores y conexi\xF3n a la red se a\xF1aden aqu\xED: en la planta elegida arriba, movibles en el plano. Con un sensor de potencia muestran sus vatios; el contador toma el sensor de red, una cadena elige su inversor. Tambi\xE9n funcionan varios inversores y bater\xEDas (p. ej. una instalaci\xF3n de balc\xF3n adicional): cada uno recibe su propio sensor.",solar_fields:"Campos solares",solar_hint:"Pon m\xF3dulos en el tejado: siguen la pendiente de la vertiente; en un tejado plano van sobre soportes. Arrastra un campo en el plano para moverlo.",solar_no_roof:"Los campos solares necesitan un tejado: uno a dos aguas o plano en Ajustes, o secciones de tejado aqu\xED en la herramienta Tejado.",solar_face_gone:"falta la vertiente",solar_summary:"{n} m\xF3dulos \xB7 {kwp} kWp",solar_add:"Campo solar",solar_field:"Campo solar",solar_face:"Vertiente",solar_rows:"Filas",solar_cols:"M\xF3dulos por fila",solar_portrait:"Vertical",solar_landscape:"Horizontal",solar_u:"Distancia desde el borde (m)",solar_v:"Distancia desde el alero (m)",solar_tilt:"Inclinaci\xF3n de los soportes (\xB0)",solar_flip:"Inclinar hacia el otro lado",solar_partial:"solo caben {n} de {total} en la vertiente",solar_form_hint:"Los m\xF3dulos que sobresaldr\xEDan de la vertiente se omiten. \xABLlenar la vertiente\xBB pone tantos m\xF3dulos como quepan. kWp calculados con 400 W por m\xF3dulo.",solar_fit:"Llenar la vertiente",roof_windows:"Ventanas de tejado",roof_window:"Ventana de tejado",roof_windows_hint:"Las ventanas de tejado est\xE1n en la vertiente, con persiana y contactos como las ventanas. Arr\xE1stralas en el plano, tambi\xE9n a otra vertiente.",roof_window_tilt:"Contacto de abatimiento",roof_window_name:"Nombre (opcional)",roof_window_motor:"Motor de ventana (cover, opcional)",roof_window_motor_hint:"Un motor de ventana (Velux, Roto, Fakro) informa su posici\xF3n como cover: la hoja se abre en 3D tanto como el motor. Un contacto o contacto de abatimiento sigue funcionando sin motor.",roof_window_hint:"Abierta, la hoja gira hacia fuera con bisagras arriba; abatida, un poco; la persiana baja sobre el cristal desde arriba.",solar_ground:"Sobre el suelo (jard\xEDn, tejado del garaje \u2026)",solar_add_ground:"Sobre el suelo",solar_base:"Altura de la superficie (m, 0 = suelo)",solar_add_wall:"En una pared",solar_wall:"Pared",solar_wall_free:"independiente",solar_v_wall:"Altura sobre el suelo (m)",solar_tilt_wall:"Inclinaci\xF3n respecto a la pared (\xB0, 90 = marquesina)",solar_flip_wall:"Separado abajo en vez de arriba",solar_rotation:"Rotaci\xF3n (\xB0)",solar_name:"Nombre",solar_name_hint:"p. ej. cadena 1 sur",solar_module_w:"Ancho del m\xF3dulo (m)",solar_module_h:"Alto del m\xF3dulo (m)",solar_wp:"Potencia del m\xF3dulo (Wp)",solar_string:"Cadena",solar_strings:"Cadenas",solar_string_none:"Sin cadena",solar_string_new:"Nueva cadena",solar_string_n:"Cadena {n}",solar_string_name:"Nombre de la cadena",solar_string_entity:"Potencia FV de la cadena",solar_string_inverter:"Inversor",solar_string_inverter_none:"Ning\xFAn inversor elegido",inverter_strings:"Strings en este inversor: {names}",inverter_strings_none:"A\xFAn no hay ning\xFAn string en este inversor; as\xEDgnalo en un campo solar en String \u203A Inversor.",solar_string_inverter_missing:"Todav\xEDa no hay inversor en el plano (a\xF1ade uno abajo en Dispositivos)",solar_string_hint:"Los campos de una misma cadena van juntos, tambi\xE9n en tejados distintos (p. ej. 5 m\xF3dulos en la casa y 5 en el garaje). El sensor y el inversor valen para toda la cadena.",solar_string_sum:"{fields} campos \xB7 {n} m\xF3dulos \xB7 {kwp} kWp",solar_face_size:"Vertiente {w} \xD7 {h} m (a lo largo del alero \xD7 hacia la cumbrera)",solar_cols_hint:"Un n\xFAmero para filas de igual longitud, o una lista para filas distintas: \xAB4, 4, 3\xBB (desde el alero).",solar_align_left:"Izquierda",solar_align_center:"Centro",solar_align_right:"Derecha",solar_look_black:"Full black",solar_look_blue:"Azul",solar_pick:"M\xF3dulos uno a uno",solar_pick_all:"Todos de nuevo",solar_pick_hint:"Toca un m\xF3dulo en el plano para quitarlo o ponerlo. Los quitados van discontinuos.",solar_entity:"Potencia FV de este campo (p. ej. su cadena)",solar_main:"Tejado principal",solar_section:"Secci\xF3n {n}",solar_flat:"tejado plano",compass_n:"norte",compass_ne:"noreste",compass_e:"este",compass_se:"sureste",compass_s:"sur",compass_sw:"suroeste",compass_w:"oeste",compass_nw:"noroeste",furn_meter:"Contador el\xE9ctrico",furn_grid_point:"Conexi\xF3n a la red",grid_point_hint:"Aqu\xED termina el cable de red: en el punto de entrega de la compa\xF1\xEDa, p. ej. al final de la entrada. Movible en el plano; sin conexi\xF3n a la red, el cable termina en el borde de las zonas exteriores.",furn_model:"Modelo",inverter_std:"Est\xE1ndar (equipo de pared con pantalla)",inverter_slim:"Estrecho y alto (tira de luz)",inverter_hybrid:"H\xEDbrido (dial redondo, ventiladores)",battery_std:"Torre (m\xF3dulos apilados)",battery_wall:"Bater\xEDa de pared (plana, colgada)",battery_cube:"Compacta (bater\xEDa de balc\xF3n)",furn_inverter:"Inversor solar",furn_home_battery:"Bater\xEDa dom\xE9stica",furn_wallbox:"Cargador (wallbox)",furn_entity:"Dispositivo (interruptor, enchufe \u2026)",furn_state_entity:"Estado desde (opcional)",furn_state_entity2:"Segundo estado (la otra mitad)",furn_state_split:"Mitades",furn_state_left_right:"Izquierda / derecha",furn_state_top_bottom:"Abajo / arriba (litera)",furn_state_hint:"El mueble brilla mientras la entidad indique encendido, ocupado o en casa: una cama con alfombra de presencia, un sill\xF3n, la sauna. Dos entidades iluminan las mitades: izquierda y derecha, abajo y arriba en una litera.",furn_entity_tv:"TV (reproductor multimedia o enchufe inteligente)",fix:"Fijar",unfix:"Soltar",fix_hint:"Fijado: ya no puede moverse por accidente (tecla L, clic derecho o pulsaci\xF3n larga)",fixed_drag_hint:"\u{1F512} Fijado: su\xE9ltalo primero para moverlo (candado en el formulario, clic derecho o tecla L)",fixed_delete_confirm:"Esta pieza est\xE1 fijada. \xBFEliminarla de todos modos?",lock_plan:"\u{1F512} Plano",lock_plan_hint:"Bloquear el plano: habitaciones, paredes, puertas, ventanas y zonas exteriores ya no pueden moverse por accidente. Muebles y dispositivos quedan libres.",start_view:"Vista inicial",start_view_hint:"La vista 3D, la tarjeta y el quiosco abren la casa con esta vista, p. ej. desde el jard\xEDn. Gira y acerca la casa en la vista 3D de la derecha hasta que encaje y memor\xEDzala.",start_view_card:"Si una tarjeta debe abrirse con otra vista, pon esta l\xEDnea en su configuraci\xF3n YAML.",start_view_set:"Memorizar la vista 3D actual como inicio",start_view_reset:"Predeterminada",start_view_saved:"Hay una vista inicial propia guardada.",ctx_rotate:"Girar 90\xB0",devices_placed_in:"en {room}",devices_narrow:"{n} m\xE1s; afina la b\xFAsqueda",climate:"Clima de la habitaci\xF3n",climate_temperature:"Temperatura",climate_humidity:"Humedad",climate_co2:"CO\u2082",climate_hint:"Estos sensores cuentan para el mapa de calor y el panel de la habitaci\xF3n. \xABAutom\xE1tico\xBB toma los sensores del \xE1rea y los colocados en la habitaci\xF3n, pero no temperaturas de aparatos (impresora 3D, bomba de calor, impulsi\xF3n \u2026).",plan_locked:"Plano bloqueado",plan_lock:"Bloquear plano",plan_unlock:"Desbloquear plano",opening_mark:"Resaltar en 3D",opening_mark_open:"Cuando est\xE1 abierta",opening_mark_closed:"Cuando est\xE1 cerrada (p. ej. WC)",opening_mark_hint:"Una ventana o puerta resaltada brilla en tono c\xE1lido. \xABCuando est\xE1 cerrada\xBB necesita un contacto; sin sensor no se resalta nada.",marker_show:"Marcador en 3D",marker_show_hint:"Autom\xE1tico sigue el conmutador Ninguno / Importantes / Todos de la vista 3D. Mostrar siempre y Ocultar se aplican en cualquier caso (salvo con Ninguno).",marker_show_auto:"Autom\xE1tico",marker_show_always:"Mostrar siempre",marker_show_no_power:"Sin vatios",marker_show_never:"Ocultar",marker_icon:"S\xEDmbolo propio (icono Material Design)",device_name:"Nombre propio (opcional)",show_name:"Mostrar el nombre bajo el s\xEDmbolo en 3D",card_marker_names:"Nombres propios en los s\xEDmbolos",card_marker_names_hint:"Cada dispositivo con nombre propio lo muestra peque\xF1o bajo su s\xEDmbolo.",device_name_hint:"Un nombre solo para el plano, p. ej. \xABLuz deco isla\xBB \u2013 la entidad en Home Assistant se queda como est\xE1.",floor_turn:"Girar 90\xB0",floor_shift_all:"Llevar todas las plantas (casa entera)",floor_shift_all_hint:"Desplazar y girar act\xFAan sobre todas las plantas con los faldones, las \xE1reas exteriores, los cables, el contador y el holograma: la casa entera se mueve en bloque.",floor_turn_hint:"Gira toda la planta 90\xB0 en sentido horario alrededor del centro de las habitaciones \u2013 si una planta se dibuj\xF3 torcida. Tres veces = 270\xB0.",marker_icon_hint:"El nombre de un icono Material Design como en Home Assistant, p. ej. mdi:thermometer o mdi:water-alert. Vac\xEDo = el s\xEDmbolo del tipo de dispositivo.",furn_power:"Sensor de potencia (W)",furn_meter_reading:"Lectura del contador (m\xB3 o litros)",furn_holo:"Holograma sobre el aparato (Energy Pro)",furn_holo_hint:"Una tarjeta de cristal sobre el aparato con la potencia actual, el consumo de hoy y la curva del d\xEDa \u2013 en la vista de la casa y de la planta. Necesita un sensor de potencia.",holo_dev_now:"ahora",furn_links_hint:"Con un sensor de potencia, la pieza muestra sus vatios y recibe un cable de energ\xEDa.",screen_pictures:"Im\xE1genes seg\xFAn el estado",screen_pictures_hint:"Se compara el estado o un atributo de la entidad (p. ej. el app_name de una TV). Un valor coincide si es igual o est\xE1 contenido en el texto (\xAByoutube\xBB coincide con \xABcom.google.android.youtube.tv\xBB); \xAB*\xBB = siempre. Gana la primera regla que coincide. Las im\xE1genes se guardan reducidas a 512 px; tambi\xE9n sirve una URL de imagen o una c\xE1mara: la imagen en directo de una c\xE1mara se actualiza cada 5 segundos mientras se muestra. Sin regla coincidente, la pantalla muestra el reproductor multimedia.",picture_state:"es o contiene \u2026 (p. ej. netflix)",picture_state_of:"Estado",picture_attribute:"Comparar el estado o un atributo",picture_pick:"Elegir imagen \u2026",picture_change:"Cambiar imagen \u2026",picture_url:"o URL de imagen",picture_add_value:"+ Valor",picture_reuse:"Usar una imagen guardada",picture_camera:"o una c\xE1mara (imagen en directo) \u2026",picture_camera_none:"Ninguna c\xE1mara",screen_bg:"Pantalla tras la imagen",screen_bg_black:"Oscura",screen_bg_white:"Blanca",picture_add_entity:"+ Otra entidad",picture_current:"ahora: {value}",picture_matches:"\u2713 coincide ahora; se muestra esta imagen",furn_links_hint_tv:"La pantalla brilla mientras la TV est\xE1 encendida, con el color de la app (Netflix, YouTube \u2026); la etiqueta muestra la app o el t\xEDtulo.",stairs_hint:"La escalera sube hacia atr\xE1s (alej\xE1ndose del borde delantero marcado) y abre el techo de la planta superior.",stairs_u_hint:"La escalera en U sube desde el borde delantero marcado hacia atr\xE1s, gira en el descansillo y vuelve a subir hacia delante por el otro lado. \xABReflejar\xBB invierte el sentido. Abre el techo de la planta superior.",floor_lights:"{n} luces encendidas",floor_open:"{n} abiertas",floor_persons:"{n} personas",energy_consumption:"Consumo",energy_grid_import:"De la red",energy_grid_export:"A la red",energy_solar:"Solar",energy_battery:"Bater\xEDa",energy_tariff:"Tarifa",energy:"Energ\xEDa",energy_meter:"Contador",energy_hub:"Punto de uni\xF3n de cables",energy_hub_point:"Los cables se unen en un punto propio",energy_hub_point_hint:"Energ\xEDa Pro: todos los cables van a este punto (p. ej. el cuadro el\xE9ctrico) en lugar del contador \u2013 \xFAtil cuando el contador est\xE1 en la acometida.",energy_hub_set:"Poner el punto en el plano",energy_hub_tap:"Toca el plano donde se unen los cables.",energy_grid:"Red (W, + = de la red)",energy_solar_sensor:"Producci\xF3n solar (W)",energy_battery_sensor:"Potencia de la bater\xEDa (W, + = descarga)",energy_battery_soc:"Carga de la bater\xEDa (%)",energy_tariff_sensor:"Tarifa (p. ej. \u20AC/kWh)",energy_gas_meter:"Contador de gas",energy_water_meter:"Contador de agua",energy_meters_hint:"Energie Pro: la tarjeta de la casa muestra cu\xE1nto gas y agua se ha consumido hoy, seg\xFAn las estad\xEDsticas de los contadores (lectura, p. ej. en m\xB3). \xABTomar del panel de energ\xEDa\xBB tambi\xE9n los rellena.",holo_gas:"Gas",holo_water:"Agua",holo_today_short:"hoy",energy_invert:"Invertir el signo",energy_hint:"Los consumidores son dispositivos colocados con un sensor de potencia (W): el propio sensor o uno del mismo dispositivo.",energy_balance:"Balance energ\xE9tico",energy_balance_hint:"Red, solar y bater\xEDa vienen de los dispositivos del plano: contador, inversor y bater\xEDa dom\xE9stica. Aqu\xED puedes elegir otros sensores, invertir signos y fijar el consumo de la casa.",energy_consumption_sensor:"Consumo de la casa (W; si no, por el balance)",energy_import_prefs:"Tomar del panel de Energ\xEDa",energy_import_done:"{n} sensores tomados; comprueba los signos.",energy_import_none:"No se encontraron sensores de potencia (W) adecuados en el panel de Energ\xEDa; el\xEDgelos a mano.",energy_import_failed:"El panel de Energ\xEDa de Home Assistant no est\xE1 configurado.",tool_meter:"Contador",hint_meter:"Toca el sitio del contador",presence:"Presencia",presence_hint:"Sensor de habitaci\xF3n por persona (p. ej. ESPresense, Bermuda): su estado nombra la habitaci\xF3n o el \xE1rea.",presence_sensor:"Sensor de habitaci\xF3n",no_persons:"No hay personas en Home Assistant.",show_menu:"Mostrar",tool_menu:"Herramienta",floor_label:"Planta:",floor_settings:"Ajustes de la planta",floor_settings_of:"Planta {floor}",floor_none_hint:"A\xF1ade tu primera planta arriba con \xABPlanta\xBB \u2192 \xABA\xF1adir planta\xBB.",tool_group_build:"Construir",tool_group_outside:"Exterior",tool_room:"Habitaci\xF3n",view_menu:"Vista",fit_hint:"Mostrar todo el plano de la planta (con el jard\xEDn al dibujar el exterior)",tech_open:"Dibujar la sala t\xE9cnica",tech_open_hint:"Despu\xE9s toca en el plano la pared donde est\xE1 tu instalaci\xF3n.",tech_step:"Paso {n}",tech_step_feed:"Toca \xAB{name}\xBB a la izquierda y luego el punto de la pared por donde entra la tuber\xEDa (abajo del todo: desde el suelo).",tech_step_devices:"Toca la bomba y el filtro de arena a la izquierda: se colocan junto a la pared. La bomba de calor y la dosificaci\xF3n si las tienes.",tech_step_line:"Traza una l\xEDnea: de \xAB{a}\xBB a \xAB{b}\xBB. Pulsa en uno y arrastra hasta el otro.",tech_step_loose:"Un tubo acaba suelto: prol\xF3ngalo hasta un equipo o una tuber\xEDa, o b\xF3rralo (\u270B Seleccionar).",tech_step_drawing:"Sigue arrastrando o toca punto a punto: la l\xEDnea termina en un equipo, una tuber\xEDa o un tubo.",tech_step_fit:"Toca el tubo donde va la v\xE1lvula (el visor): se ilumina en naranja.",tech_mode:"Sala t\xE9cnica",tech_mode_hint:"Dibuja la sala t\xE9cnica en esta pared: entra las tuber\xEDas de la piscina, coloca los equipos, traza los tubos",tech_draw:"Dibujar",tech_pick:"Seleccionar",pool_delete_confirm:"\xBFEliminar la piscina con sus {n} tubos?",tech_erase:"Borrar",tech_erase_hint:"Toca un tubo, una v\xE1lvula de bola, una mirilla o un agujero y se elimina. \xBFLo dibujaste mal? Deshacer tambi\xE9n ayuda.",tech_feeds:"Tuber\xEDas de la piscina",tech_devices:"Equipos",tech_fittings:"Valvuler\xEDa",tech_hint:"Trazar una l\xEDnea: toca un equipo, una tuber\xEDa o un tubo y arrastra hasta el siguiente (o punto a punto). Sobre un tubo crea una T. CasaNeon sabe solo hacia d\xF3nde va el agua y qu\xE9 conexi\xF3n del equipo usar.",tech_no_ports:"Coloca primero el skimmer, el sumidero y las boquillas con la herramienta Piscina.",tech_ok:"Todo conectado: el agua circula.",tech_issue_loose:"{n} extremos sueltos",tech_issue_port:"{name} sin conectar",tech_issue_feed:"{name} a\xFAn no entrado",tech_feed_place:"Toca donde la tuber\xEDa entra en la sala: abajo del todo, desde el suelo; m\xE1s arriba, por la pared.",tech_start:"Toca un equipo o una tuber\xEDa y traza una l\xEDnea.",feed_skimmer:"Skimmer",feed_drain:"Sumidero",feed_inlet:"Boquillas",feed_waste:"Desag\xFCe (lavado)",hp_ports:"Conexiones",hp_side_right:"derecha",hp_side_left:"izquierda",hp_side_back:"detr\xE1s",pool_depth:"Profundidad del vaso (m)",pool_rim:"Borde sobre el c\xE9sped (m)",pool_depth_hint:"Profundidad: del borde al fondo. Una piscina de 1,50 m que sobresale 20 cm: profundidad 1,50, borde 0,20. El agua queda 15 cm bajo el borde.",pool_depth_ground:"La profundidad se ve en 3D en cuanto la piscina est\xE1 en un c\xE9sped, una terraza u otra zona; sin suelo alrededor, el vaso se ver\xEDa desde fuera.",pool_port_depth:"Prof.",pool_port_depth_hint:"Profundidad bajo la l\xEDnea de agua (m): boquillas normalmente 0,30, el skimmer en la l\xEDnea de agua",pool_valves:"V\xE1lvulas",pool_valve_shut:"cerrada",pool_valve_toggle:"Toca para cambiar: tal como est\xE1 la v\xE1lvula de verdad",pool_joint:"Uni\xF3n",block_some_fixed:"\u{1F512} Una pieza est\xE1 fijada: el bloque solo se mueve cuando todas est\xE9n liberadas.",unfix_all:"Liberar todo",wv_block_all:"Bloque entero",wv_block_one:"Solo esta pieza",wv_gap:"Hueco: {w} \u2013 esto cabe:",wv_gap_hint:"Toca un lugar libre de la pared: aqu\xED aparece lo que cabe.",wv_kit_title:"A la pared",wv_recent:"Usados recientemente",wv_none_fits:"Nada cabe en este hueco.",wv_cat_base:"Muebles bajos y aparadores",wv_cat_hang:"Colgados",wv_cat_tall:"Armarios altos",wv_cat_living:"Sentarse y dormir",wv_cat_light:"Luces",wv_cat_pack:"De tus packs",wv_cat_energy:"Energ\xEDa",block_title:"Bloque de muebles",multi_title:"{n} muebles seleccionados",block_hint:"Un clic selecciona todo el bloque, arrastrar lo mueve. Una sola pieza: t\xF3cala dos veces o elige su nombre abajo.",multi_hint:"May\xFAs + clic a\xF1ade o quita muebles, May\xFAs + arrastrar en una zona vac\xEDa dibuja un marco. Mu\xE9velos, g\xEDralos o c\xF3pialos juntos, o \xFAnelos en un bloque.",block_part_edit:"Editar solo esta pieza",block_break:"Deshacer bloque",block_make:"Unir en un bloque",multi_mode:"Seleccionar varios (tocar a\xF1ade, arrastrar dibuja un marco)",block_part:"Parte de un bloque.",block_select:"Seleccionar todo el bloque",block_delete:"\xBFEliminar {n} muebles?",block_delete_fixed:"\xBFEliminar {n} muebles? Algunos est\xE1n fijados.",wall_zoom_hint:"Zoom: rueda del rat\xF3n o dos dedos",wall_zoom_all:"Pared entera",card_pets:"Mostrar las mascotas",card_ghost:"Mostrar el fantasma de Halloween",card_ghost_hint:"Pack divertido Halloween: el fantasma flota tambi\xE9n por la casa de esta tarjeta (p. ej. desact\xEDvalo en la tableta de pared)",card_pets_hint:"Pack divertido Mascotas: mostrar los animales configurados en esta tarjeta (p. ej. desact\xEDvalos en la tableta de pared)",fun_title:"Packs divertidos",fun_intro:"Extras solo por diversi\xF3n; act\xEDvalos y desact\xEDvalos aqu\xED.",fun_name_pets:"Mascotas",fun_feature_pets:"Un gato, un perro o un conejo vive en tu casa 3D: recorre las habitaciones, se tumba en el sof\xE1, la cama o la alfombra y duerme por la noche.",fun_name_halloween:"Halloween",fun_feature_halloween:"Un fantasma que de vez en cuando flota por la casa.",halloween_ghost:"Dejar flotar al fantasma",pets_show:"Mostrar las mascotas",pet_add:"A\xF1adir una mascota",pet_name:"Nombre",pet_kind:"Animal",pet_kind_cat:"\u{1F431} Gato",pet_kind_dog:"\u{1F436} Perro",pet_kind_rabbit:"\u{1F430} Conejo",pet_fur:"Pelaje",pet_fur_orange:"Pelirrojo",pet_fur_tabby:"Atigrado",pet_fur_black:"Negro",pet_fur_white:"Blanco",pet_fur_grey:"Gris",pet_fur_brown:"Marr\xF3n",pet_fur_calico:"Tricolor",pet_fur_golden:"Dorado",pet_fur_cream:"Crema",pet_breed:"Raza",pet_breed_dachshund:"Teckel",pet_breed_pug:"Carlino",pet_breed_terrier:"Terrier",pet_breed_labrador:"Labrador",pet_breed_shepherd:"Pastor",pet_floor:"Planta",pet_floor_auto:"Planta baja",tt_ev_camera:"La c\xE1mara detecta movimiento: {name}",terrain:"Terreno",terrain_hint:"D\xF3nde est\xE1 el terreno alrededor de la casa. Lo que queda por debajo (un s\xF3tano, la parte baja de un semis\xF3tano) est\xE1 bajo tierra en 3D; c\xE9spedes, caminos y terrazas est\xE1n sobre el terreno.",terrain_level:"Altura del terreno (m, planta baja = 0)",terrain_earth:"Mostrar los s\xF3tanos bajo tierra",terrain_earth_hint:"Las plantas por debajo del terreno est\xE1n bajo tierra; abre una y la ver\xE1s como en una excavaci\xF3n. Desactivado: quedan sueltas como antes.",terrain_cellar_hint:"Semis\xF3tano: baja la altura del terreno tanto como deba asomar el s\xF3tano, p. ej. \u22121,2 m. Las ventanas de s\xF3tano bajo el terreno reciben un patio ingl\xE9s.",terrain_no_cellar_hint:"Un s\xF3tano es una planta con elevaci\xF3n negativa, p. ej. \u22122,6 m.",terrain_reset:"Restablecer el terreno",cellar_window:"Ventana de s\xF3tano",well:"Patio ingl\xE9s",well_hint:"Esta ventana est\xE1 bajo el nivel del terreno: en 3D recibe un patio ingl\xE9s con rejilla. Desm\xE1rcalo para no tener ninguno, p. ej. si por fuera pasa un camino.",well_rim:"Borde sobre el terreno (m)",well_depth:"Profundidad desde la pared (m)",cellar_window_hint:"Peque\xF1a y arriba en la pared: 100 \xD7 50 cm, 25 cm bajo el techo. Bajo el terreno recibe en 3D un patio ingl\xE9s con rejilla.",side_fold_hint:"Estrechar la barra lateral: m\xE1s espacio para el plano",furn_ac_unit:"Aire acondicionado (de pared)",furn_awning:"Toldo",furn_group_outdoor:"Terraza y balc\xF3n",bin_from:"Brillar desde (hora, el d\xEDa antes)",bin_until:"hasta (hora, d\xEDa de recogida)",bin_none:"Sin recogida a la vista",hh_title:"Hoy en casa",hh_left:"quedan {t}",hh_done:"\xA1Listo!",hh_finished:"{name} ha terminado",hh_thirsty:"Sed",hh_plant:"{name} necesita agua",hh_service:"{name}: mantenimiento pendiente",hh_fridge_open:"{name} est\xE1 abierto",alert_fridge_door:"Nevera abierta: {name}",alert_short_fridge_door:"Nevera abierta",hh_moisture:"Planta (plant.*) o sensor de humedad",hh_moisture_min:"Sed por debajo de (%)",hh_remaining:"Tiempo restante (sensor)",hh_door:"Sensor de puerta",hh_fridge_door:"Sensor de puerta",hh_appliance_hint:"Mientras funciona, su marcador muestra el tiempo restante; despu\xE9s \xAB\xA1Listo!\xBB hasta que se abre la puerta o vuelve a funcionar.",hh_door_alarm:"Avisar tras (minutos abierto)",hh_service_entity:"Consumible / mantenimiento (sensor)",hh_service_min:"Pendiente desde (\u2264 % o d\xEDas)",hh_service_hint:"P. ej. filtro, sal o abrillantador: un sensor binario (activo = pendiente), un n\xFAmero (% o d\xEDas restantes) o una fecha. Si toca, el aparato brilla en amarillo y aparece en \xABHoy en casa\xBB.",hh_teaser_plant:"Con Hogar Pro la planta muestra cu\xE1ndo necesita agua.",hh_teaser_appliance:"Con Hogar Pro el aparato muestra su tiempo restante y \xAB\xA1Listo!\xBB hasta que se abre la puerta.",hh_teaser_fridge:"Con Hogar Pro CasaNeon avisa cuando la puerta de la nevera est\xE1 abierta demasiado tiempo.",card_household:"Hoy en casa",card_household_hint:"Hogar Pro: tarjeta con contenedores, correo, aparatos terminados, plantas sedientas y mantenimiento",furn_waste_bin:"Contenedor de basura",furn_mailbox:"Buz\xF3n",furn_wall_switch:"Interruptor de pared",furn_water_heater:"Termo el\xE9ctrico",stair_open:"Abierta por debajo (losa inclinada)",stair_open_hint:"Los pelda\xF1os van sobre una losa que sigue la pendiente: el hueco de debajo queda libre, con techo inclinado, y cabe otro tramo o un mueble debajo.",furn_access_point:"Punto de acceso Wi-Fi",ap_entity:"Punto de acceso",ap_mount:"Montaje",ap_ceiling:"Techo",ap_wall:"Pared",ap_hint:"Elige el punto de acceso por su nombre; su estado, clientes, LED, CPU, memoria y bot\xF3n de reinicio se buscan en el mismo dispositivo (UniFi Network).",ap_gestures:"En 3D: tocar enciende o apaga su LED; mantener pulsado lo reinicia (pregunta antes). El anillo brilla azul conectado con el LED encendido, rojo si est\xE1 desconectado y \xE1mbar mientras se actualiza.",ap_role_state:"estado",ap_role_clients:"clientes",ap_role_led:"LED",ap_role_cpu:"CPU",ap_role_memory:"memoria",ap_role_restart:"reinicio",ap_client:"{n} cliente",ap_clients:"{n} clientes",ap_down:"Desconectado",ap_busy:"Actualizando",ap_up:"Conectado",ap_restart_confirm:"\xBFReiniciar {name}? Sus clientes perder\xE1n el Wi-Fi un par de minutos.",heater_entity:"Calentador (water_heater)",heater_capacity:"Capacidad",heater_found:"Encontrado en el mismo dispositivo:",heater_hint:"Elige su entidad water_heater; lo dem\xE1s (si calienta, duchas, tiempo restante, encendido, eco) se busca solo en el mismo dispositivo.",heater_role_heating:"calentando",heater_role_showers:"duchas",heater_role_remaining:"tiempo restante",heater_role_power:"encendido",heater_role_eco:"eco",heater_gestures:"En 3D: tocar lo enciende o apaga; mantener pulsado abre su ficha para regular la temperatura y el modo.",heater_gestures_no_power:"En 3D: tocar o mantener pulsado abre su ficha para regular la temperatura y el modo (no se encontr\xF3 un interruptor de encendido).",heater_shower:"{n} ducha",heater_showers:"{n} duchas",heater_left:"{min} min para agua caliente",furn_lamp_ceiling_fan:"Ventilador de techo con luz",furn_fan_entity:"Entidad del ventilador",ceiling_fan_hint:"La luz es la entidad del elemento de arriba: el motor y la pantalla la encienden. Las aspas conmutan el ventilador por separado y giran mientras funciona, m\xE1s r\xE1pido cuanto mayor es su velocidad.",furn_wall_socket:"Enchufe de pared",furn_group_electric:"Electricidad",socket_count:"Enchufes",socket_n:"Enchufe {n}",socket_switch:"Encender y apagar con (opcional)",socket_power:"Medidor de consumo (W, opcional)",socket_hint:"Un enchufe con interruptor (enchufe inteligente) se enciende y apaga al tocarlo en 3D y su peque\xF1o LED muestra que est\xE1 encendido. Con medidor de consumo cuenta en el balance de energ\xEDa y su pin muestra los vatios de todos sus enchufes. Para ponerlo sobre una encimera, sube su \xABAltura sobre el suelo\xBB.",switch_keys:"Teclas",switch_key:"Entidad de la tecla",switch_key_n:"Tecla {n}",switch_ring:"Anillo de luz (color de)",switch_ring_hint:"Para interruptores con luz alrededor (p. ej. Sonoff TX Ultimate): elige la luz que da su color y brillo; el anillo brilla en la pared alrededor de la placa mientras esa luz est\xE1 encendida.",switch_hint:"Cada tecla conmuta su entidad al tocarla en 3D (una persiana se abre o se cierra) y su LED se enciende mientras est\xE1 encendida o abierta.",furn_group_household:"Hogar",bin_shape:"Forma",bin_shape_bin120:"Contenedor con ruedas 120 l",bin_shape_bin240:"Contenedor con ruedas 240 l",bin_shape_bin1100:"Contenedor 1100 l",bin_shape_multi:"Contenedor con varios compartimentos",bin_shape_bag:"Bolsa",bin_shape_caddy:"Cubo",bin_shape_underground:"Contenedor soterrado",bin_kind:"Residuo",bin_kind_rest:"Resto",bin_kind_bio:"Org\xE1nico",bin_kind_paper:"Papel",bin_kind_plastic:"Envases",bin_kind_glass:"Vidrio",bin_kind_garden:"Restos de poda",bin_kind_recycling:"Reciclaje",bin_kind_other:"Otro",bin_color:"Color",bin_lid:"Tapa",bin_source:"Calendario de recogida o sensor",bin_match:"Palabra del calendario (vac\xEDo: seg\xFAn el residuo)",bin_hint:"El contenedor brilla desde la hora elegida del d\xEDa anterior hasta la hora del d\xEDa de recogida (para todos); su marcador indica \xABHoy\xBB o \xABMa\xF1ana\xBB, al tocarlo muestra las pr\xF3ximas recogidas. En un calendario (p. ej. Waste Collection Schedule) se buscan las palabras de su residuo; un sensor puede dar los d\xEDas o la fecha.",bin_today:"Hoy",bin_tomorrow:"Ma\xF1ana",bin_in_days:"en {n} d\xEDas",mailbox_shape:"Forma",mailbox_shape_wall:"Buz\xF3n de pared",mailbox_shape_pole:"Buz\xF3n en poste (con bandera)",mailbox_shape_pillar:"Buz\xF3n de pie con portaperi\xF3dicos",mailbox_shape_parcel:"Buz\xF3n de paquetes",mailbox_shape_bank:"Buzones agrupados",mailbox_entity:"Sensor de correo (trampilla o indicador)",mailbox_door:"Sensor de la puerta de recogida (opcional)",mailbox_hint:"Con un indicador (p. ej. un input_boolean \xABcorreo\xBB que activa una automatizaci\xF3n) el buz\xF3n brilla mientras est\xE1 activo. Con trampilla y puerta de recogida brilla cuando ha llegado correo despu\xE9s del \xFAltimo vaciado.",mailbox_post:"Correo",pro_name_household:"Hogar Pro",pro_feature_household:"Hogar Pro: contenedores que brillan la v\xEDspera de la recogida, buz\xF3n con correo, plantas con sed; lavadora, secadora y lavavajillas muestran el tiempo restante y \xAB\xA1Listo!\xBB; filtros y consumibles pendientes en amarillo; aviso de nevera abierta; tarjeta \xABHoy en casa\xBB; adem\xE1s la nevera inteligente (americana, puertas con sensores)",household_teaser_bin:"Con Hogar Pro el contenedor brilla la v\xEDspera de la recogida, seg\xFAn tu calendario.",household_teaser_mail:"Con Hogar Pro el buz\xF3n brilla en cuanto hay correo, hasta que se vac\xEDa.",awning_cover:"Toldo (cover)",motor_cover:"Motor (cover)",curtain_side:"Se abre hacia",curtain_side_both:"ambos lados",curtain_side_left:"izquierda (vista de frente)",curtain_side_right:"derecha (vista de frente)",motor_time:"Tiempo de recorrido (s)",motor_invert_hint:"Para covers que indican 100 % con la cortina cerrada o la pantalla abajo.",awning_pitch:"Inclinaci\xF3n (\xB0)",awning_time:"Tiempo de salida completa (s)",awning_position:"Sensor de posici\xF3n (opcional)",awning_valance:"Fald\xF3n (borde de lona delantero)",awning_invert:"Invertir el sentido",awning_invert_hint:"Para covers que informan 100 % cuando el toldo est\xE1 recogido.",awning_kind:"Tipo",awning_kind_arm:"Toldo de brazos articulados (terraza)",awning_kind_drop:"Toldo de brazo invisible / punto recto (balc\xF3n, ventana)",awning_kind_vertical:"Toldo vertical / ZIP (ventana, balc\xF3n)",awning_kind_pergola:"Toldo de p\xE9rgola / galer\xEDa acristalada",awning_kind_side:"Toldo lateral (privacidad)",awning_kind_arm_hint:"El cl\xE1sico sobre la terraza: los brazos articulados empujan la lona hacia fuera con una ligera pendiente. Fondo = salida.",awning_kind_drop_hint:"Los brazos giran desde la pared hacia delante y hacia abajo, la lona se tensa inclinada delante. Fondo = longitud de los brazos, Inclinaci\xF3n = cu\xE1nto bajan los brazos por debajo de la horizontal.",awning_kind_vertical_hint:"La lona baja en vertical por gu\xEDas laterales hasta el suelo \u2013 delante de una ventana, la barandilla de un balc\xF3n o el frente de una p\xE9rgola. Altura sobre el suelo = borde inferior del cofre.",awning_kind_pergola_hint:"Un marco fijo con postes delante; la lona se extiende por encima de sus gu\xEDas. Fondo = hasta los postes, Inclinaci\xF3n = pendiente del techo.",awning_kind_side_hint:"Un poste con la lona enrollada a la izquierda, la lona se extiende en horizontal hacia la derecha hasta el poste opuesto. Ancho = extensi\xF3n, Altura sobre el suelo = altura de la lona.",awning_hint:"Ancho = el toldo a lo largo de la pared, fondo = su salida totalmente extendido; la parte trasera del marco va contra la fachada, la altura sobre el suelo es la parte inferior del cofre. Si el cover informa su posici\xF3n mientras se mueve, el toldo sale despacio en 3D; si solo dice abriendo/cerrando, se mueve seg\xFAn el tiempo de salida.",furn_only_color:"Brillar solo en un color",furn_only_color_pick:"Color",furn_only_color_hint:"La l\xE1mpara solo brilla mientras la luz muestra aproximadamente este color, p. ej. amarillo para \xABagua\xBB en el lavabo. Los dem\xE1s colores de la misma luz quedan oscuros aqu\xED.",furn_run_w:"En marcha desde (vatios)",furn_run_w_hint:"A partir de cu\xE1ntos vatios en el sensor de potencia el aparato cuenta como en marcha y brilla (vac\xEDo: 10 W). Para aparatos tras un enchufe inteligente que consumen unos vatios en espera, p. ej. 100.",roof_window_float:"Mostrar sobre la habitaci\xF3n sin el tejado",roof_window_float_hint:"Cuando el tejado se desvanece al acercarte a una planta o una habitaci\xF3n, la ventana se queda en su sitio sobre la habitaci\xF3n: abierta, abatida, con su persiana. Funciona sobre las habitaciones de la planta en la que se apoya el tejado; donde la pendiente baja sobre una planta inferior, las ventanas se quedan en el tejado. Desactivado: solo se ve en el tejado.",tech_ask:"Tubo colocado: \xBFsigue hasta la piscina? Entonces aqu\xED va un pasamuros con su salida al exterior:",tech_ask_loose:"Dejarlo abierto",tech_step_tee:"Toca el tubo donde va la derivaci\xF3n: se corta ah\xED y desde la T trazas la siguiente l\xEDnea.",side_resize:"Arrastra para ensanchar o estrechar la barra lateral",furn_extra:"Valor extra junto al s\xEDmbolo (sensor, p. ej. temperatura del agua)",settings_house:"Casa",settings_weather:"Tiempo y avisos",roof_basics:"Forma del tejado",through_full:"Pantalla completa",through_full_hint:"La imagen de la c\xE1mara en toda la pantalla (Esc o Atr\xE1s para salir). Donde el navegador no puede, se abre la vista de c\xE1mara de Home Assistant, tambi\xE9n con sonido.",director:"Director en directo",director_hint:"Una pantalla muestra sola lo que pasa en casa: suena el timbre y la vista vuela a la puerta y mira por su c\xE1mara. Cada evento est\xE1 apagado hasta que lo actives.",director_here:"Activar en este dispositivo",director_here_hint:"Solo para este navegador, p. ej. la tablet de la pared. En una tarjeta del dashboard el director se activa en los ajustes de la tarjeta.",director_doorbell:"Suena el timbre: volar a la puerta y mirar por la c\xE1mara",director_doorbell_entity:"Timbre",director_doorbell_camera:"C\xE1mara de la puerta",director_no_doorbell:"No se encontr\xF3 ning\xFAn timbre. Elige la entidad event o binary_sensor de tu timbre.",director_motion:"Una c\xE1mara ve a alguien",director_appliances:"Lavadora, secadora o lavavajillas terminados",director_alerts:"Aviso nuevo (humo, agua, alarma, ventana abierta con lluvia \u2026)",director_hold:"Volver tras (segundos)",director_back_hint:"Despu\xE9s la vista vuelve a donde estaba, salvo que alguien haya tocado la pantalla mientras tanto. A quien est\xE9 usando la tablet solo le interrumpen el timbre y los avisos. Con el timbre se queda el doble de tiempo.",voice:"Control por voz",voice_hint:"Un bot\xF3n de micr\xF3fono abajo a la izquierda en la vista 3D: t\xF3calo y habla. \xABMuestra el sal\xF3n\xBB, \xABplanta de arriba\xBB o \xABtoda la casa\xBB muestran el sitio; lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist de Home Assistant.",voice_here:"Activar en este dispositivo",aliases:"Otros nombres para la voz",aliases_hint:"Otros nombres separados por comas, para pedir la \xABSmart TV Pro\xBB como \xABtele del sal\xF3n\xBB o \xABtele\xBB. Los usan el control por voz y la b\xFAsqueda.",aliases_placeholder:"p. ej. tele del sal\xF3n, tele",voice_understands:"Qu\xE9 entiende CasaNeon",voice_examples:"\xABMuestra el sal\xF3n\xBB|\xABVe a la planta de arriba\xBB|\xABMuestra toda la casa\xBB|\xABMuestra la lavadora\xBB / \xAB\xBFD\xF3nde est\xE1 la secadora?\xBB|\xABMuestra la c\xE1mara de la entrada\xBB|\xABMuestra las c\xE1maras\xBB|Todo lo dem\xE1s (\xABenciende la luz del pasillo\xBB) va a Assist",voice_needs:"Necesita https, permiso para el micr\xF3fono (en Fully Kiosk: Web Content Settings \u2192 acceso al micr\xF3fono) y una pipeline de Assist con voz a texto. En una tarjeta del dashboard el bot\xF3n se activa en los ajustes de la tarjeta.",voice_showing:"Mostrando {name}.",screen_name:"Nombre de pantalla (para Assist)",screen_name_placeholder:"p. ej. Cocina",screen_name_hint:"Preguntar a Assist (\xABMuestra el sal\xF3n\xBB) o una automatizaci\xF3n que llame al servicio neonplan3d.ask llega a todas las vistas de CasaNeon abiertas. Si el servicio nombra una pantalla, solo reacciona la vista con ese nombre.",voice_room:"Habitaci\xF3n de este dispositivo (para \xABaqu\xED\xBB)",voice_room_none:"Ninguna (como antes)",voice_room_hint:"Si la tableta est\xE1 en una habitaci\xF3n, bastan frases sin nombre de habitaci\xF3n: \xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB o \xABBaja las persianas\xBB se aplican entonces a esa habitaci\xF3n. Si nombras una habitaci\xF3n, cuenta esa. Puedes elegir las habitaciones que tienen un \xE1rea de Home Assistant. Un dispositivo de voz como el Voice PE no lo necesita, ya conoce su \xE1rea.",card_voice_area:"Habitaci\xF3n para \xABaqu\xED\xBB",card_voice_area_none:"Ninguna (ajuste del dispositivo)",card_voice_area_hint:"Si la tableta con este panel est\xE1 en una habitaci\xF3n, las frases sin nombre de habitaci\xF3n (\xABEnciende la luz\xBB, \xABApaga la luz aqu\xED\xBB) se aplican a esta \xE1rea. Sin elegir, cuenta la habitaci\xF3n ajustada en el propio dispositivo.",voice_button:"Hablar",voice_listen:"Escuchando \u2026",voice_none:"No se entendi\xF3 nada",voice_silent:"El micr\xF3fono solo da silencio. Normalmente lo tiene otra app: en Fully Kiosk desactiva la detecci\xF3n ac\xFAstica de movimiento (Motion Detection \u2192 Acoustic Detection) y recarga.",voice_no_pipeline:"No hay voz a texto configurada en Assist (Ajustes \u2192 Asistentes de voz).",voice_denied:"Micr\xF3fono no permitido: solo funciona con https y con el permiso en el navegador o en Fully Kiosk.",voice_error:"Control por voz: {msg}",card_voice:"Control por voz (bot\xF3n de micr\xF3fono)",card_voice_hint:"\xABMuestra el sal\xF3n\xBB muestra la habitaci\xF3n; las dem\xE1s frases van a Assist. Necesita https y el micr\xF3fono permitido",director_mic_test:"\u{1F399}\uFE0F Probar el micr\xF3fono",director_mic_hint:"Comprueba https, el micr\xF3fono y la voz a texto de Assist en este dispositivo y muestra qu\xE9 habitaci\xF3n abrir\xEDa una frase. No se acciona nada.",voice_pipeline:"Pipeline de Assist en este dispositivo",voice_sentences:"Frases para Assist",voice_sentences_hint:"Lo que Assist pasa a CasaNeon. Preguntas como \xAB\xBFQu\xE9 ventanas est\xE1n abiertas?\xBB las contesta si no Home Assistant; \xABPregunta a la casa qu\xE9 ventanas est\xE1n abiertas\xBB siempre llega a CasaNeon.",voice_pipeline_preferred:"La preferida en Home Assistant",voice_pipeline_no_stt:"sin voz a texto",backdrop:"Fondo",backdrop_kind:"Detr\xE1s de la casa",backdrop_color:"Un color",backdrop_top:"Color arriba",backdrop_bottom:"Color abajo",backdrop_image_url:"Direcci\xF3n de la imagen",backdrop_dim:"Oscurecer",backdrop_image_bad:"Esta direcci\xF3n no sirve: https://\u2026 o una ruta como /local/fondo.jpg",backdrop_hint:"Pon la imagen en config/www de Home Assistant; entonces es /local/nombre.jpg. Oscurecer mantiene legibles las l\xEDneas de ne\xF3n. No cuesta rendimiento, tampoco en tablets antiguas.",director_live:"Imagen en directo al mirar por la c\xE1mara",director_live_hint:"En vez de una foto cada pocos segundos corre el v\xEDdeo de la c\xE1mara (con el reproductor de Home Assistant). Necesita m\xE1s potencia: mejor desactivado en tablets muy antiguas.",director_triggers:"Disparadores propios",director_triggers_hint:"Cuando una de estas entidades se enciende o se abre (un segundo timbre, el port\xF3n del garaje, la puerta del jard\xEDn), la vista vuela all\xED y mira por la c\xE1mara elegida (sin c\xE1mara: al dispositivo).",director_trigger_entity:"Disparador",director_trigger_add:"+ A\xF1adir disparador",card_director:"Director en directo (cabina de c\xE1maras)",card_director_hint:"La tarjeta muestra sola lo que pasa. Qu\xE9 eventos, lo eliges en el editor en \xABDirector en directo\xBB.",card_roof:"Mostrar el tejado",card_roof_hint:"Desactivado: la casa se ve sin tejado, como si no lo tuviera, con las habitaciones abiertas (los campos solares del tejado desaparecen con \xE9l)",room_order_up:"Subir la habitaci\xF3n (antes en la barra de habitaciones)",room_order_down:"Bajar la habitaci\xF3n (despu\xE9s en la barra de habitaciones)",outdoor_area_hint:"Con un \xE1rea, la superficie funciona como una habitaci\xF3n: un toque en 3D la abre con los dispositivos del \xE1rea, aparece en la barra de habitaciones y lleva su nombre.",angle_lock:"Bloqueo 3D",angle_lock_hint:"El \xE1ngulo queda fijo: arrastrar desplaza la vista y el zoom sigue funcionando; nadie gira la casa sin querer.",strip_rise:"Inclinaci\xF3n (\xB0)",strip_rise_hint:"La tira sube a lo largo, p. ej. por la escalera o un pasamanos (~35\u201340\xB0). Su altura sobre el suelo es entonces la de su centro.",wall_slope:"Inclinada",wall_slope_hint:"Pared inclinada: una altura propia en cada esquina y el borde superior recto entre ellas (un cobertizo, una pendiente, ventanas altas en el lado alto). Ventanas y puertas quedan por debajo del borde.",wall_slope_start:"Altura en la esquina {n} (m)",wall_slope_end:"Altura en la esquina {n} (m)",theme_auto:"Auto (D\xEDa/Ne\xF3n seg\xFAn el sol)",markers_room:"En la habitaci\xF3n",pin_size:"Tama\xF1o de los s\xEDmbolos",pin_size_small:"Peque\xF1o",pin_size_normal:"Normal",pin_size_large:"Grande",hh_notes:"Tabl\xF3n (ayudante de texto)",hh_notes_hint:"Un ayudante de texto (input_text) o sensor cuyo texto aparece en \xABHoy en casa\xBB; separa varias l\xEDneas con |. Las automatizaciones escriben en \xE9l (\xABel paquete est\xE1 en el garaje\xBB) y la tarjeta lo muestra.",heat_sensor:"Calefacci\xF3n (sensor)",heat_sensor_hint:"Si el termostato no dice si calienta (las v\xE1lvulas Tuya informan un \xABwork state\xBB), elige aqu\xED ese sensor: encendido/abierto/calentando o una apertura mayor de 0 % hace brillar el radiador.",door_lock:"Cerradura inteligente",door_lock_hint:"La cerradura de la puerta (Nuki, Aqara \u2026): un pin en la puerta muestra cerrada o abierta; un toque la cierra o la abre.",clock:"Reloj",clock_off:"Desactivado",clock_tl:"\u2196 reloj",clock_tr:"\u2197 reloj",clock_bl:"\u2199 reloj",clock_br:"\u2198 reloj",editor_floor:"Planta inicial del editor",editor_floor_auto:"La primera de la lista",editor_floor_hint:"La planta con la que se abre el editor.",director_motion_off:"Desactivado",director_motion_person:"Solo personas",director_motion_all:"Cualquier movimiento",voice_sentences_distinct:"Solo las inequ\xEDvocas (\xABMuestra \u2026\xBB, \xABPregunta a la casa \u2026\xBB, \xABCasa, \u2026\xBB)",voice_sentences_all:"Todas las preguntas (tambi\xE9n las que Home Assistant contesta por s\xED mismo)",voice_sentences_off:"Ninguna (predeterminado \u2013 sin archivo de frases)",backdrop_look:"El cielo del aspecto (por defecto)",backdrop_gradient:"Degradado",backdrop_image:"Imagen",voice_sentences_kept:"Has cambiado t\xFA el archivo de frases de {langs} \u2013 CasaNeon no lo toca.",voice_sentences_failed:"No se pudo escribir el archivo de frases.",voice_sentences_file:"CasaNeon solo crea el archivo custom_sentences/<idioma>/neonplan3d.yaml cuando eliges frases aqu\xED. Un archivo que hayas cambiado nunca se sobrescribe; al quitar la integraci\xF3n se borra el archivo de CasaNeon.",roof_end:"Extremo",roof_end_auto:"seg\xFAn la forma",roof_end_gable:"Hastial",roof_end_hint:"C\xF3mo termina la cumbrera en este extremo: hastial (muro vertical), fald\xF3n o media cadera; por ejemplo, un fald\xF3n solo en un lado.",devices_hide_all:"Ocultar los {n} en el panel de la habitaci\xF3n",devices_show_all:"Mostrar de nuevo los {n}",sill_board:"Alf\xE9izar",sill_board_hint:"Autom\xE1tico: a partir de 30 cm de antepecho, alf\xE9izar por dentro y por fuera; ninguno en una ventana que se apoya directamente sobre otra (montante, frente acristalado dividido).",sill_board_auto:"autom\xE1tico",sill_board_none:"ninguno",sill_board_inside:"solo dentro",sill_board_outside:"solo fuera",lib_room_all:"Todas las habitaciones",lib_room_living:"Sal\xF3n",lib_room_dining:"Comedor",lib_room_kitchen:"Cocina",lib_room_bedroom:"Dormitorio",lib_room_kids:"Ni\xF1os",lib_room_bath:"Ba\xF1o",lib_room_office:"Oficina",lib_room_hall:"Pasillo",lib_room_utility:"Lavadero",lib_room_garage:"Garaje",lib_room_garden:"Jard\xEDn",lib_room_hobby:"Hobby y fitness",lib_kind_sofa:"Sof\xE1s",lib_kind_seating:"Asientos",lib_kind_table:"Mesas",lib_kind_storage:"Armarios y estanter\xEDas",lib_kind_bed:"Camas",lib_kind_kitchen:"Cocina",lib_kind_appliance:"Electrodom\xE9sticos",lib_kind_bath:"Ba\xF1o",lib_kind_lamp:"Luces",lib_kind_media:"TV y audio",lib_kind_office:"Oficina",lib_kind_tech:"T\xE9cnica y hogar inteligente",lib_kind_heating:"Calefacci\xF3n y clima",lib_kind_energy:"Energ\xEDa",lib_kind_household:"Hogar",lib_kind_deco:"Decoraci\xF3n",lib_kind_plant:"Plantas",lib_kind_outdoor:"Jard\xEDn y exterior",lib_kind_kids:"Ni\xF1os",lib_kind_sport:"Fitness",lib_kind_pets:"Mascotas",lib_kind_vehicle:"Veh\xEDculos",lib_kind_stairs:"Escaleras y barandillas",lib_kind_architecture:"Arquitectura",lib_recent:"Usados recientemente",lib_favorites:"Favoritos",lib_fav_add:"A\xF1adir a favoritos",lib_fav_remove:"Quitar de favoritos",lib_chip_electric:"Vinculable",lib_chip_light:"Ilumina",lib_chip_outdoor:"Exterior",lib_more:"Mostrar {n} m\xE1s",lib_basic:"B\xE1sico",lib_sizes:"{n} tama\xF1os",lib_hint_room:"Sugerido para la habitaci\xF3n abierta \u2013 cambia arriba.",persons:"Personas",locate:"Localizaci\xF3n",bin_out:"Sacado (ayudante)",bin_out_hint:"Opcional: encendido mientras el cubo est\xE1 fuera (input_boolean, interruptor o sensor binario). Entonces deja de brillar y su etiqueta dice \xABsacado \u2713\xBB; tocar el cubo conmuta un ayudante o interruptor. Una automatizaci\xF3n nocturna lo restablece.",bin_out_done:"sacado \u2713",bin_out_mark:"Marcar como sacado",bin_next_only:"Etiquetar solo la pr\xF3xima recogida",bin_days:"Mostrar etiquetas solo \u2026 d\xEDas antes",bin_days_always:"siempre",bin_tags_hint:"Para todos los cubos. Los cubos sin etiqueta siguen en \xABHoy en casa\xBB y muestran sus recogidas al tocarlos.",hh_service2:"{name}: {what} pendiente",hh_service2_entity:"Segundo mantenimiento (p. ej. base)",hh_service2_min:"Segundo pendiente desde (\u2264 % o d\xEDas)",door_lock_btn:"Bloquear",door_unlock_btn:"Desbloquear",door_lock_confirm:"\xBFSeguro que quieres bloquear {name}?",door_unlock_confirm:"\xBFSeguro que quieres desbloquear {name}?",garage_pulse_hint:"Un interruptor o bot\xF3n como motor: un toque en la puerta da un impulso (el interruptor se enciende, el bot\xF3n se pulsa); si la puerta est\xE1 abierta lo indica el contacto.",pin_standby:"En espera"};function ae(r,t,e={}){let n=fp[t]??t;for(let[i,o]of Object.entries(e))n=n.replace(`{${i}}`,String(o));return n}function Bt(r,t,e=2){return t.toLocaleString("es",{maximumFractionDigits:e})}var mp={light:"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.4 1.1 2.2v.5h5V16c0-.8.4-1.6 1.1-2.2A6 6 0 0 0 12 3z",switch:"M7 4h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM12 8v8",fan:"M12 12c0-4 1-8 4-8s2 5-4 8zm0 0c4 0 8 1 8 4s-5 2-8-4zm0 0c0 4-1 8-4 8s-2-5 4-8zm0 0c-4 0-8-1-8-4s5-2 8 4z",cover:"M4 4h16v3H4zM5 7v13M19 7v13M7 10h10M7 13h10M7 16h10",climate:"M12 14.5V5a2 2 0 1 0-4 0v9.5a4 4 0 1 0 4 0zM10 11v6M16 6h4M16 10h3",media:"M4 6h16v10H4zM9 20h6M12 16v4M10.5 8.8v4.4l3.8-2.2z",lock:"M6 11h12v9H6zM8.5 11V8a3.5 3.5 0 0 1 7 0v3M12 14.5v2",sensor:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 7v5l3 2",binary:"M5 21V4h11v17M16 21H4M8 21V7h5v14M12.5 13.5h.01",camera:"M4 7h11v10H4zM15 10.5l5-3v9l-5-3",scene:"M5 19l9-9M14 4l.8 2.2L17 7l-2.2.8L14 10l-.8-2.2L11 7l2.2-.8zM19 11l.5 1.5L21 13l-1.5.5L19 15l-.5-1.5L17 13l1.5-.5z",script:"M8 4h9a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-2h9M8 4a2 2 0 0 0-2 2v10M9 9h6M9 12h4"};function Gn(r){return mp[r]}function lc(r,t){var n;let e=`${t} ${String(((n=r.states[t])==null?void 0:n.attributes.friendly_name)??"")}`.toLowerCase().replace(/[_.-]/g," ");return/person|people|human|pedestrian/.test(e)?"person":/\bcar\b|vehicle|truck|bus|motorcycle|bicycle|fahrzeug|auto\b/.test(e)?"car":/\bdog\b|\bcat\b|\bpet\b|animal|bird|hund|katze|tier/.test(e)?"pet":"motion"}var cc=new Map;function dc(r){cc=new Map((r==null?void 0:r.floors.flatMap(t=>t.placements.filter(e=>Array.isArray(e.detect_sensors)).map(e=>[e.entity_id,e.detect_sensors])))??[])}function uc(r,t){return cc.get(t)??vs(r,t)}function vs(r,t){var n,i;let e=(i=(n=r.entities)==null?void 0:n[t])==null?void 0:i.device_id;return e?Object.values(r.entities??{}).filter(o=>o.device_id===e&&o.entity_id.startsWith("binary_sensor.")).map(o=>o.entity_id).filter(o=>{var s;return["motion","occupancy","presence"].includes(String((s=r.states[o])==null?void 0:s.attributes.device_class))}):[]}function pc(r){let t=(r??"").trim();return!t||/["'()\\\s]/.test(t)?null:/^(https?:\/\/|\/)/i.test(t)||/^data:image\//i.test(t)?t:null}function hc(){try{return localStorage.getItem("neonplan3d.voice")==="1"}catch{return!1}}function fc(r){try{r?localStorage.setItem("neonplan3d.voice","1"):localStorage.removeItem("neonplan3d.voice")}catch{}}function mc(){try{return localStorage.getItem("neonplan3d.screen")??""}catch{return""}}function gc(r){try{r.trim()?localStorage.setItem("neonplan3d.screen",r.trim()):localStorage.removeItem("neonplan3d.screen")}catch{}}function _c(){try{return localStorage.getItem("neonplan3d.voicePipeline")}catch{return null}}function bc(r){try{r?localStorage.setItem("neonplan3d.voicePipeline",r):localStorage.removeItem("neonplan3d.voicePipeline")}catch{}}function vc(){try{return localStorage.getItem("neonplan3d.voiceArea")}catch{return null}}function yc(r){try{r?localStorage.setItem("neonplan3d.voiceArea",r):localStorage.removeItem("neonplan3d.voiceArea")}catch{}}var $c=30,$s=10,wc=600;var am=3*6e4;var ys="neonplan3d.director";function xc(){try{return localStorage.getItem(ys)==="1"}catch{return!1}}function kc(r){try{r?localStorage.setItem(ys,"1"):localStorage.removeItem(ys)}catch{}}var gp=/(doorbell|klingel|visitor|besucher|\bding\b|deurbel|sonnette|campanello)/;function Mc(r,t){return t?r.states[t]?[t]:[]:Object.keys(r.states).filter(e=>{let n=r.states[e];if(e.startsWith("event."))return n.attributes.device_class==="doorbell";if(!e.startsWith("binary_sensor."))return!1;let i=`${e} ${String(n.attributes.friendly_name??"")}`.toLowerCase().replace(/[_.-]/g," ");return gp.test(i)}).sort()}function Sc(r,t,e,n){var c;if(n)return n;let i=r.entities??{},o=(c=i[t])==null?void 0:c.device_id,s=e.filter(u=>u.startsWith("camera.")),a=o?s.find(u=>{var p;return((p=i[u])==null?void 0:p.device_id)===o}):void 0;if(a)return a;let l=u=>Qt(r,u),d=l(t);return d&&s.find(u=>l(u)===d)||null}var qt=Math.PI/180;function Me(r){let t=r.rotation??0;if(!t||r.points&&r.points.length>=3)return null;let e=t*qt;return{p:r.pivot??[(r.x0+r.x1)/2,(r.z0+r.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function ke(r,t,e=!1){if(!r)return t;let n=t[0]-r.p[0],i=t[1]-r.p[1],o=e?-r.s:r.s;return[r.p[0]+n*r.c-i*o,r.p[1]+n*o+i*r.c]}function Kt(r){let t=Math.min(r.x0,r.x1),e=Math.max(r.x0,r.x1),n=Math.min(r.z0,r.z1),i=Math.max(r.z0,r.z1),o=Me(r),s=r.axis==="x"?(l,d)=>[l,r.flip?i-d:n+d]:(l,d)=>[r.flip?e-d:t+d,l],a=o?(l,d)=>ke(o,s(l,d)):s;return r.axis==="x"?{u0:t,u1:e,w:i-n,at:a}:{u0:n,u1:i,w:e-t,at:a}}function _p(r,t,e,n=1e-6){let[i,o]=Lc(r,t,e),s=Kt({...r,rotation:0});return i>=s.u0-n&&i<=s.u1+n&&o>=-n&&o<=s.w+n}function he(r){let t=Kt(r).w,e=r.eave_a,n=r.eave_b,i=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*qt),o=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*qt);if(r.shape==="flat"||r.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(r.shape==="pent")return{vr:t,rh:e+t*i,y:l=>e+l*i};if(r.shape==="mansard"){let l=Rc(t,e,n,i,o);return{vr:l.vr,rh:l.rh,y:l.y}}let s=i+o>1e-6?Math.min(t,Math.max(0,(n-e+t*o)/(i+o))):t/2,a=e+s*i;return{vr:s,rh:a,y:l=>l<=s?e+l*i:n+(t-l)*o}}function ws(r){let t=r.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Pc=.14;function Ac(r,t){return!r.open&&Math.min(r.base,r.eave_a,r.eave_b)<t-.05}function zc(r,t){return he(r).rh-Pc>t+.01}function Ic(r,t,e){let n=[];for(let i of ws(r)){if(i.open||i.shape==="flat"||i.shape==="parapet"||i.shape==="mansard")continue;let o=Kt(i),s=he(i),a=t+e+Pc,l=[],d=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*qt),c=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*qt);d>1e-6&&l.push((a-i.eave_a)/d),i.shape==="gable"&&c>1e-6&&l.push(o.w-(a-i.eave_b)/c);for(let u of l)u<=.01||u>=o.w-.01||i.shape==="gable"&&Math.abs(s.y(u)-a)>1e-6||n.push([o.at(o.u0,u),o.at(o.u1,u)])}return n}function Fc(r,t){let e=r.length;if(e<3||Math.abs(t)<1e-9)return r.map(o=>[o[0],o[1]]);let n=Rt(r)>=0?1:-1,i=[];for(let o=0;o<e;o++){let s=r[(o+e-1)%e],a=r[o],l=r[(o+1)%e],d=Ec([a[0]-s[0],a[1]-s[1]]),c=Ec([l[0]-a[0],l[1]-a[1]]),u=[d[1]*n,-d[0]*n],p=[c[1]*n,-c[0]*n],h=u[0]+p[0],f=u[1]+p[1],m=Math.hypot(h,f);if(m<1e-6){i.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let _=(h*u[0]+f*u[1])/m,b=Math.min(4,1/Math.max(.25,_));i.push([a[0]+h/m*t*b,a[1]+f/m*t*b])}return i}function Ec(r){let t=Math.hypot(r[0],r[1])||1;return[r[0]/t,r[1]/t]}function qi(r){let t=r.map(n=>n[0]),e=r.map(n=>n[1]);return{x0:Math.min(...t),z0:Math.min(...e),x1:Math.max(...t),z1:Math.max(...e)}}function Ki(r,t,e,n){let i=At(r,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!i.length)return null;let o=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,s=new Map,a=i.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let p of[u.a,u.b])s.set(o(p),[...s.get(o(p))??[],u]);let l=new Set,d=null;for(let u of a){if(l.has(u))continue;l.add(u);let p=[u.a,u.b],h=u.b;for(;;){let f=(s.get(o(h))??[]).find(m=>!l.has(m));if(!f||(l.add(f),h=o(f.a)===o(h)?f.b:f.a,o(h)===o(p[0])))break;p.push(h)}p.length>=3&&o(h)===o(p[0])&&(!d||Math.abs(Rt(p))>Math.abs(Rt(d)))&&(d=p)}if(!d)return null;let c=[];for(let u=0;u<d.length;u++){let p=d[(u+d.length-1)%d.length],h=d[u],f=d[(u+1)%d.length],m=(h[0]-p[0])*(f[1]-h[1])-(h[1]-p[1])*(f[0]-h[0]);Math.abs(m)>1e-6&&c.push(h)}return c.length>=3?Fc(c,e):null}var Yn=Math.tan(30*qt);function Rc(r,t,e,n,i){let o=Math.min(r*.3,n>1e-6?2.4/n:r*.3),s=Math.min(r*.3,i>1e-6?2.4/i:r*.3),a=t+o*n,l=e+s*i,d=Math.min(r-s,Math.max(o,(l-a+Yn*(r-s+o))/(2*Yn))),c=a+(d-o)*Yn;return{vla:o,vlb:s,yla:a,ylb:l,vr:d,rh:c,y:p=>p<=o?t+p*n:p<=d?a+(p-o)*Yn:p<=r-s?l+(r-s-p)*Yn:e+(r-p)*i}}function xs(r,t){let e=Kt(r),n=he(r),i=e.w,o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=(j,U)=>[j,U,n.y(U)],c=d(a,-o),u=d(l,-o),p=d(l,i+s),h=d(a,i+s),f=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*qt),m=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*qt);if(r.shape==="pent"){let j=[c,u,p,h],U=[[0,n.y(0)],[i,n.y(i)]];return{faces:[j],rim:j,ridges:[[p,h]],gable:U,gables:[U,U]}}if(r.shape==="pyramid"){let j=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[c,u,j],[u,p,j],[p,h,j],[h,c,j]],rim:[c,u,p,h],ridges:[[c,j],[h,j],[u,j],[p,j]],gable:null,gables:[null,null]}}if(r.shape==="mansard"){let j=Rc(i,r.eave_a,r.eave_b,f,m),U=[[0,n.y(0)],[j.vla,j.yla],[j.vr,j.rh],[i-j.vlb,j.ylb],[i,n.y(i)]],G=[a,j.vla,j.yla],Q=[l,j.vla,j.yla],J=[a,i-j.vlb,j.ylb],it=[l,i-j.vlb,j.ylb],q=[a,j.vr,j.rh],lt=[l,j.vr,j.rh];return{faces:[[c,u,Q,G],[G,Q,lt,q],[q,lt,it,J],[J,it,p,h]],rim:[c,u,Q,lt,it,p,h,J,q,G],ridges:[[q,lt],[G,Q],[J,it]],gable:U,gables:[U,U]}}let[_,b]=ks(r)??["gable","gable"],v=Ms(r,[_,b]),y=_==="gable"?[a,n.vr,n.rh]:[e.u0+v.d0,n.vr,n.rh],x=b==="gable"?[l,n.vr,n.rh]:[e.u1-v.d1,n.vr,n.rh],P=[a,v.vah,v.yh],A=[a,v.vbh,v.yh],F=[l,v.vah,v.yh],T=[l,v.vbh,v.yh],S=_==="halfhip",M=b==="halfhip",w=[[c,u,...M?[F]:[],x,y,...S?[P]:[]],[y,x,...M?[T]:[],p,h,...S?[A]:[]]];_==="hip"&&w.push([h,c,y]),S&&w.push([A,P,y]),b==="hip"&&w.push([u,p,x]),M&&w.push([F,T,x]);let k=[c,u,...b==="gable"?[x]:M?[F,T]:[],p,h,..._==="gable"?[y]:S?[A,P]:[]],E=[[y,x]];_==="hip"&&E.push([c,y],[h,y]),S&&E.push([P,y],[A,y]),b==="hip"&&E.push([u,x],[p,x]),M&&E.push([F,x],[T,x]);let I=[[0,n.y(0)],[n.vr,n.rh],[i,n.y(i)]],C=[[0,n.y(0)],[v.vah,v.yh],[v.vbh,v.yh],[i,n.y(i)]],O=j=>j==="gable"?I:j==="halfhip"?C:null,D=[O(_),O(b)];return{faces:w,rim:k,ridges:E,gable:D[0]??D[1],gables:D}}function ks(r){if(r.shape!=="gable"&&r.shape!=="hip"&&r.shape!=="halfhip")return null;let t=r.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(r.end_u0),e(r.end_u1)]}function Ms(r,t){let e=Kt(r),n=he(r),i=e.w,o=Math.tan(Math.min(80,Math.max(0,r.pitch_a))*qt),s=Math.tan(Math.min(80,Math.max(0,r.pitch_b))*qt),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,d=Math.min(n.y(0),n.y(i)),c=d+(n.rh-d)*.55,u=o>1e-6?Math.min(n.vr,(c-r.eave_a)/o):n.vr,p=s>1e-6?Math.max(n.vr,i-(c-r.eave_b)/s):n.vr,h=Math.min(l,Math.min(n.vr,i-n.vr)||i/2),f=Math.min(l-.1,(n.rh-c)/Math.max(.2,o)),m=_=>_==="hip"?h:_==="halfhip"?f:0;return{d0:m(t[0]),d1:m(t[1]),yh:c,vah:u,vbh:p}}function bp(r,t,e){let n=null;for(let i of r.faces){if(!Y([t,e],i.map(v=>[v[0],v[1]])))continue;let[o,s]=i,a=i.slice(2).find(v=>Math.abs((s[0]-o[0])*(v[1]-o[1])-(s[1]-o[1])*(v[0]-o[0]))>1e-9);if(!a)continue;let l=s[0]-o[0],d=s[2]-o[2],c=s[1]-o[1],u=a[0]-o[0],p=a[2]-o[2],h=a[1]-o[1],f=d*h-c*p,m=c*u-l*h,_=l*p-d*u;if(Math.abs(m)<1e-9)continue;let b=o[2]-(f*(t-o[0])+_*(e-o[1]))/m;n=n===null?b:Math.min(n,b)}return n}function Tc(r,t,e){let n=t*qt,i={p:e,c:Math.cos(n),s:Math.sin(n)};if(r.points&&r.points.length>=3)return{...r,points:r.points.map(c=>ke(i,c)),...qi(r.points.map(c=>ke(i,c)))};let o=r.pivot??[(r.x0+r.x1)/2,(r.z0+r.z1)/2],s=ke(i,o),a=s[0]-o[0],l=s[1]-o[1],d=(((r.rotation??0)+t)%360+360)%360;return d>180&&(d-=360),{...r,x0:r.x0+a,x1:r.x1+a,z0:r.z0+l,z1:r.z1+l,pivot:s,rotation:Math.abs(d)<1e-9?0:d}}function Lc(r,t,e){let[n,i]=ke(Me(r),[t,e],!0),o=Math.min(r.x0,r.x1),s=Math.max(r.x0,r.x1),a=Math.min(r.z0,r.z1),l=Math.max(r.z0,r.z1);return r.axis==="x"?[n,r.flip?l-i:i-a]:[i,r.flip?s-n:n-o]}function Ss(r,t){let[e,n]=ke(Me(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),i=s=>Math.abs((s.x1-s.x0)*(s.z1-s.z0)),o=null;for(let s of r)s===t||s.dormer||s.open||s.shape==="flat"||s.shape==="parapet"||i(s)<i(t)*1.5||_p(s,e,n)&&(!o||i(s)<i(o))&&(o=s);return o}function Oc(r,t,e,n){let i=Me(r),o=Kt({...r,rotation:0}),s=he(r),a=2,l=Math.max(o.u0+.3,Math.min(o.u1-a-.3,(n??(o.u0+o.u1)/2)-a/2)),d=t==="a"?r.eave_a:r.eave_b,c=t==="a"?r.pitch_a:r.pitch_b,u=d+1.4,p=a/2*Math.tan(35*qt),h=u+p,f=Math.max(.8,Math.min(o.w/2-.2,(h-d)/Math.max(.15,Math.tan(Math.min(80,c)*qt)))),m=t==="a"?0:o.w-f,_=t==="a"?f:o.w,b=o.at(l,m),v=o.at(l+a,_);return{id:e,x0:Math.round(Math.min(b[0],v[0])*100)/100,z0:Math.round(Math.min(b[1],v[1])*100)/100,x1:Math.round(Math.max(b[0],v[0])*100)/100,z1:Math.round(Math.max(b[1],v[1])*100)/100,shape:"gable",axis:r.axis==="x"?"z":"x",eave_a:Math.round(u*100)/100,eave_b:Math.round(u*100)/100,pitch_a:35,pitch_b:35,base:Math.round(s.y(t==="a"?0:o.w)*100)/100,overhang:.15,dormer:!0,...i?{rotation:r.rotation,pivot:i.p}:{}}}function Cc(r,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Kt(t),n=he(t).rh,i=xs(r,{u0:0,u1:0,a:0,b:0}),o=he(r),s=m=>{let[_,b]=e.at(m,e.w/2),[v,y]=Lc(r,_,b);return bp(i,v,y)??o.y(y)},a=s(e.u0)<=s(e.u1),l=a?e.u0:e.u1,d=a?e.u1:e.u0,c=a?1:-1,u=Math.abs(d-l),p=d;for(let m=.5;m<u;m+=.05)if(s(l+c*m)>=n-.02){p=l+c*m;break}if(Math.abs(p-d)<.05)return t;let h=Me(t),f={...t,...h?{pivot:h.p}:{}};return t.axis==="x"?d===e.u1?f.x1=p:f.x0=p:d===e.u1?f.z1=p:f.z0=p,f}function Ui(r,t,e){let n=Kt(t),i=r.floors.flatMap(m=>m.rooms.filter(_=>_.points.length>=3&&m.elevation+m.height>t.base+.05)),o=r.settings.wall_exterior,s=i.map(m=>Fc(m.points,Math.max(o,...(m.wall_thickness??[]).map(_=>_??0))+.01)),a=.35,l=(m,_)=>{if(i.some(v=>Y(m(a),v.points)))return!0;let b=m(-Math.min(.3,_/2));return s.some(v=>!Y(b,v)&&[.05,.2,a].some(y=>Y(m(y),v)))},d=[.15,.5,.85],c=d.map(m=>n.u0+(n.u1-n.u0)*m),u=d.map(m=>n.w*m),p=m=>m==="a"?c.some(_=>l(b=>n.at(_,-b),n.w)):m==="b"?c.some(_=>l(b=>n.at(_,n.w+b),n.w)):m==="u0"?u.some(_=>l(b=>n.at(n.u0-b,_),n.u1-n.u0)):u.some(_=>l(b=>n.at(n.u1+b,_),n.u1-n.u0)),h=t.overhang_sides??null,f=(m,_)=>{let b=h==null?void 0:h[m];return typeof b=="number"?Math.max(0,b):p(_)?0:e};return{a:f(0,"a"),b:f(1,"b"),u0:f(2,"u0"),u1:f(3,"u1")}}function Hc(r,t,e,n,i){let o=[];for(let a of[.2,.5,.8])for(let l of[.2,.5,.8])o.push([t+(n-t)*a,e+(i-e)*l]);let s=r.floors.filter(a=>a.rooms.some(l=>l.points.length>=3&&o.some(d=>Y(d,l.points)))).map(a=>a.elevation+a.height);return s.length?Math.max(...s):null}function jc(r,t){let e=r.floors.filter(n=>n.rooms.length>0).sort((n,i)=>n.elevation-i.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Gi(r){return he(r).rh}function Dc(r,t=e=>`roof_${e+1}`){var l;let e=((l=r.settings.roof)==null?void 0:l.pitch)??35,n=r.settings.wall_exterior,i=r.floors.filter(d=>d.rooms.some(c=>c.points.length>=3)).sort((d,c)=>c.elevation-d.elevation),o=[],s=[],a=d=>Math.round(d*1e3)/1e3;for(let d of i){let c=d.rooms.filter(x=>x.points.length>=3),u=[...new Set(c.flatMap(x=>x.points.map(P=>a(P[0]))))].sort((x,P)=>x-P),p=[...new Set(c.flatMap(x=>x.points.map(P=>a(P[1]))))].sort((x,P)=>x-P),h=u.length-1,f=p.length-1,m=(x,P)=>x.some(A=>Y(P,A.points)),_=[];for(let x=0;x<f;x++){_.push([]);for(let P=0;P<h;P++){let A=[(u[P]+u[P+1])/2,(p[x]+p[x+1])/2];_[x].push(m(c,A)&&!m(s,A))}}let b=_.map(x=>x.map(()=>!1)),v=(x,P)=>_[P][x]&&!b[P][x],y=d.elevation+d.height;for(let x=0;x<f;x++)for(let P=0;P<h;P++){if(!v(P,x))continue;let A=P;for(;A+1<h&&v(A+1,x);)A++;let F=x;for(;F+1<f&&Array.from({length:A-P+1},(k,E)=>v(P+E,F+1)).every(Boolean);)F++;for(let k=x;k<=F;k++)for(let E=P;E<=A;E++)b[k][E]=!0;let T=u[P]-n,S=u[A+1]+n,M=p[x]-n,w=p[F+1]+n;Math.min(S-T,w-M)<.8||o.push({id:t(o.length),x0:a(T),z0:a(M),x1:a(S),z1:a(w),shape:"gable",axis:S-T>=w-M?"x":"z",eave_a:a(y),eave_b:a(y),pitch_a:e,pitch_b:e,base:a(y),overhang:null})}s.push(...c)}return o}var cn=Math.PI/180,Vc=1.13,Es=1.72,Xt=.025,an=.07,Wc=.25;function fe(r,t){var n;let e=[];for(let i of r.floors){if(t&&i.id!==t)continue;let{walls:o}=At(i.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},i.walls??[]);for(let s of o){if(!s.exterior&&!s.free)continue;let a=s.b[0]-s.a[0],l=s.b[1]-s.a[1],d=Math.hypot(a,l);if(d<.5)continue;let c=l/d,u=-a/d,p=Math.min(i.height,s.height??i.height),h=((n=s.sources.find(_=>_.room_id===s.roomLeft))==null?void 0:n.edge)??null,f={floorId:i.id,room:s.roomLeft,edge:h,free:!!s.free},m=(_,b,v,y)=>e.push({key:_,section:null,side:"top",flat:!1,o:b,eu:v,es:[0,1,0],n:y,lu:d,ls:p,pitch:90,span:()=>[0,d],facing:[y[0],y[2]],wall:f});m(`wall:${i.id}:${s.id}`,[s.a[0]+c*s.right,i.elevation,s.a[1]+u*s.right],[a/d,0,l/d],[c,0,u]),s.free&&m(`wall:${i.id}:${s.id}:back`,[s.b[0]-c*s.left,i.elevation,s.b[1]-u*s.left],[-a/d,0,-l/d],[-c,0,-u])}}return e}var Be="ground";function vp(r){let t=[...r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??r.floors[0]??null}function Nc(r,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],i=[-Math.sin(e),0,Math.cos(e)],o=vp(r),s=n[0]*t.u+i[0]*t.v,a=n[2]*t.u+i[2]*t.v,l=o?o.elevation+(t.base!=null?t.base:bi(o,s,a)):t.base??0;return{key:Be,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:i,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[i[0],i[2]],unbounded:!0}}function Dt(r,t,e=$t(r)){return t.face===Be?Nc(r,t):t.face.startsWith("wall:")?fe(r,t.face.split(":")[1]).find(n=>n.key===t.face)??null:e.find(n=>n.key===t.face)??null}function Bc(r,t,e){let n=fe(r,e),i=r.settings.north??0,o=l=>{let d=Math.atan2(l.facing[0],-l.facing[1])*180/Math.PI-i;return l.lu*(1.3+Math.cos((d-180)*Math.PI/180))},s=[...n].sort((l,d)=>o(d)-o(l))[0];if(!s)return null;let a={...Ji(s,t),portrait:!1,rows:1};return a.cols=Math.max(1,Math.floor((s.lu-.8+Xt)/(Es+Xt))),a.u=Math.round((s.lu-(a.cols*Es+(a.cols-1)*Xt))/2*100)/100,a.v=Math.round(Math.max(0,s.ls-Vc-.3)*100)/100,a}function As(r,t){let e=r.floors.flatMap(o=>o.rooms.flatMap(s=>s.points)),n=e.length?Math.max(...e.map(o=>o[0]))+3:0,i=e.length?Math.min(...e.map(o=>o[1])):0;return{id:t,face:Be,u:Math.round(n*100)/100,v:Math.round(i*100)/100,rows:2,cols:4,portrait:!0,tilt:25,flip:!0,rotation:(r.settings.north??0)||0,look:"black",entity:null}}function zs(r){return r.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function $t(r){let t=r.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>yp(v,Ui(r,v,v.overhang??t.overhang)));let e=zs(r);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(y=>y[0])),i=e.rooms.flatMap(v=>v.points.map(y=>y[1])),o=r.settings.wall_exterior+t.overhang,s=Math.min(...n)-o,a=Math.max(...n)+o,l=Math.min(...i)-o,d=Math.max(...i)+o,c=e.elevation+e.height;if(t.type==="flat")return[qc("main",null,s,l,a,d,c+Wc)];let u=a-s>=d-l,p=t.ridge==="short"?!u:u,h=(p?d-l:a-s)/2,f=h*Math.tan(t.pitch*cn),m=(v,y,x)=>p?[v,c+x,(l+d)/2+y]:[(s+a)/2+y,c+x,v],[_,b]=p?[s,a]:[l,d];return[-1,1].map(v=>Yi(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",m(_,v*h,0),m(b,v*h,0),m(_,0,f),t.pitch,()=>[0,b-_]))}function yp(r,t){let e=Kt(r),n=he(r),i=(y,x,P)=>{let[A,F]=e.at(y,x);return[A,P,F]},o=Math.max(0,t.a),s=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),d=l-a;if(r.shape==="flat"||r.shape==="parapet"){let y=e.at(a,-o),x=e.at(l,e.w+s);return[qc(r.id,r.id,Math.min(y[0],x[0]),Math.min(y[1],x[1]),Math.max(y[0],x[0]),Math.max(y[1],x[1]),r.eave_a+Wc)]}if(r.shape==="pent")return[Yi(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,e.w+s,n.y(e.w+s)),r.pitch_a,()=>[0,d])];let c=ks(r),u=c?Ms(r,c):null,p=r.shape==="pyramid"||(c==null?void 0:c[0])==="hip",h=r.shape==="pyramid"||(c==null?void 0:c[1])==="hip",f=r.shape==="pyramid"?(e.u1-e.u0)/2:p?u.d0:0,m=r.shape==="pyramid"?(e.u1-e.u0)/2:h?u.d1:0,_=p?e.u0+f-a:0,b=h?l-(e.u1-m):0,v=[];if(n.vr>.3){let y=Math.hypot(n.vr+o,n.rh-n.y(-o));v.push(Yi(`${r.id}:a`,r.id,"a",i(a,-o,n.y(-o)),i(l,-o,n.y(-o)),i(a,n.vr,n.rh),r.pitch_a,x=>[_*(x/y),d-b*(x/y)]))}if(e.w-n.vr>.3){let y=Math.hypot(e.w+s-n.vr,n.rh-n.y(e.w+s));v.push(Yi(`${r.id}:b`,r.id,"b",i(l,e.w+s,n.y(e.w+s)),i(a,e.w+s,n.y(e.w+s)),i(l,n.vr,n.rh),r.pitch_b,x=>[b*(x/y),d-_*(x/y)]))}if(p||h){let y=n.y(-o),x=n.y(e.w+s),P=[];p&&P.push([`${r.id}:c`,"c",i(a,e.w+s,x),i(a,-o,y),i(e.u0+f,n.vr,n.rh)]),h&&P.push([`${r.id}:d`,"d",i(l,-o,y),i(l,e.w+s,x),i(e.u1-m,n.vr,n.rh)]);for(let[A,F,T,S,M]of P){let w=$p(A,r.id,F,T,S,M);w&&v.push(w)}}return v}function $p(r,t,e,n,i,o){let s=Qn(ln(i,n));if(s<.3)return null;let a=Ne(ln(i,n)),l=ln(o,n),d=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],c=[l[0]-a[0]*d,l[1]-a[1]*d,l[2]-a[2]*d],u=Qn(c);if(u<.3)return null;let p=Ne(c),h=Ne(Uc(a,p));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let f=Ne([-p[0],0,-p[2]]),m=Math.atan2(p[1],Math.hypot(p[0],p[2]))/cn;return{key:r,section:t,side:e,flat:!1,o:n,eu:a,es:p,n:h,lu:s,ls:u,pitch:m,span:b=>{let v=Math.min(1,Math.max(0,b/u));return[d*v,s-(s-d)*v]},facing:[f[0],f[2]]}}function Yi(r,t,e,n,i,o,s,a){let l=Ne(ln(i,n)),d=Ne(ln(o,n)),c=Ne(Uc(l,d));c[1]<0&&(c=[-c[0],-c[1],-c[2]]);let u=Ne([-d[0],0,-d[2]]);return{key:r,section:t,side:e,flat:!1,o:n,eu:l,es:d,n:c,lu:Qn(ln(i,n)),ls:Qn(ln(o,n)),pitch:s,span:a,facing:[u[0],u[2]]}}function qc(r,t,e,n,i,o,s){let a=i-e>=o-n,l=a?i-e:o-n,d=a?o-n:i-e;return{key:`${r}:top`,section:t,side:"top",flat:!0,o:[e,s,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:d,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function kn(r){let t=r.module_w||Vc,e=r.module_h||Es;return r.portrait===!1?[e,t]:[t,e]}function Jn(r){var t;return(t=r.layout)!=null&&t.length?r.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,r.rows)},()=>Math.max(1,r.cols))}function Is(r,t){return r.flat?Math.min(45,Math.max(0,t.tilt??15))*cn:r.wall?Math.min(90,Math.max(0,t.tilt??0))*cn:0}function Mn(r,t){let[e,n]=kn(t),i=Jn(t),o=Math.max(1,...i),a=(i.length-1)*Fs(r,t)+n*Math.cos(Is(r,t));return[o*e+(o-1)*Xt,a]}function Fs(r,t){let[,e]=kn(t),n=Is(r,t);return r.wall?e*Math.cos(n)+Xt:r.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Xt}function Se(r,t,e=!1){let[n,i]=kn(t),o=[],s=Is(r,t),a=i*Math.cos(s),l=Fs(r,t),d=Jn(t),c=Math.max(1,...d),u=new Set(t.skip??[]),p=!!r.wall&&n>r.lu+1e-6,h=(m,_,b)=>[r.o[0]+r.eu[0]*m+r.es[0]*_+r.n[0]*b,r.o[1]+r.eu[1]*m+r.es[1]*_+r.n[1]*b,r.o[2]+r.eu[2]*m+r.es[2]*_+r.n[2]*b],f=(m,_)=>{if(r.unbounded)return!0;if(_<-1e-6||_>r.ls+1e-6)return!1;let[b,v]=r.span(_);return m>=b-1e-6&&m<=v+1e-6};return d.forEach((m,_)=>{let b=t.align==="right"?c-m:t.align==="center"?(c-m)/2:0;for(let v=0;v<m;v++){let y=`${_}:${v}`,x=u.has(y);if(x&&!e)continue;let P=t.u+(v+b)*(n+Xt),A=t.v+_*l,F=P+n,T=A+(r.flat||r.wall?a:i);if(p){if(!(f((P+F)/2,A)&&f((P+F)/2,T)))continue}else if(![[P,A],[F,A],[F,T],[P,T]].every(([I,C])=>f(I,C)))continue;if(r.wall&&s>.001){let I=an+i*Math.sin(s),[C,O]=t.flip?[I,an]:[an,I],D=[h(P,A,C),h(F,A,C),h(F,T,O),h(P,T,O)],j=t.flip?A:T,U=[P+.05,F-.05].map(G=>[h(G,j,0),h(G,j,I)]);o.push({corners:D,posts:U,cell:y,skipped:x});continue}if(!r.flat){o.push({corners:[h(P,A,an),h(F,A,an),h(F,T,an),h(P,T,an)],posts:[],cell:y,skipped:x});continue}let S=.15,M=S+i*Math.sin(s),[w,k]=t.flip?[T,A]:[A,T],E=[h(P,w,S),h(F,w,S),h(F,k,M),h(P,k,M)];o.push({corners:E,posts:[P+.05,F-.05].flatMap(I=>[[h(I,w,0),h(I,w,S)],[h(I,k,0),h(I,k,M)]]),cell:y,skipped:x})}}),o}function Qi(r,t){let e=[r.eu[0],r.eu[2]],n=[r.es[0],r.es[2]],i=[t[0]-r.o[0],t[1]-r.o[2]],o=e[0]*n[1]-e[1]*n[0];if(Math.abs(o)<1e-9)return null;let s=(i[0]*n[1]-i[1]*n[0])/o,a=(e[0]*i[1]-e[1]*i[0])/o;if(a<0||a>r.ls)return null;let[l,d]=r.span(a);return s>=l&&s<=d?{u:s,s:a}:null}function Kc(r,t){let e=null;for(let n of r){if(n.wall){let s=[t[0]-n.o[0],t[1]-n.o[2]],a=s[0]*n.eu[0]+s[1]*n.eu[2],l=s[0]*n.n[0]+s[1]*n.n[2];if(a>=0&&a<=n.lu&&l>=-.05&&l<=.35)return{face:n,u:a,s:Number.NaN};a>=0&&a<=n.lu&&l>.35&&l<=.8&&!e&&(e={face:n,u:a,s:Number.NaN,y:-1/0});continue}let i=Qi(n,t);if(!i)continue;let o=n.o[1]+n.es[1]*i.s;(!e||o>e.y)&&(e={face:n,...i,y:o})}return e?{face:e.face,u:e.u,s:e.s}:null}function Sn(r,t){if(r.unbounded)return{u:t.u,v:t.v};let[e,n]=Mn(r,t),i=s=>Math.floor(s*100+1e-6)/100;return{u:r.wall&&e>r.lu?Math.round((r.lu-e)/2*100)/100:i(Math.min(Math.max(0,t.u),Math.max(0,r.lu-e))),v:i(Math.min(Math.max(0,t.v),Math.max(0,r.ls-n)))}}function Ji(r,t){let e={id:t,face:r.key,u:0,v:0,rows:1,cols:1,portrait:!0,tilt:r.flat?15:null,flip:!1,entity:null,look:"black"},[n]=kn(e),i=.4,o=Fs(r,e),[s,a]=r.span(r.ls/2);for(e.cols=Math.max(1,Math.floor((a-s-2*i+Xt)/(n+Xt))),e.rows=Math.max(1,Math.min(4,Math.floor((r.ls-2*i)/o)));e.cols>1&&Se(r,{...e,u:Ps(r,e),v:i}).length<e.rows*e.cols;)e.cols--;return e.u=Ps(r,e),e.v=i,e}function Rs(r,t){let e={...t,face:r.key,tilt:r.flat?t.tilt??15:null,rotation:null,flip:!1};return r.wall&&Object.assign(e,wp(r,e)),e.u=Ps(r,e),e.v=.4,{...e,...Sn(r,e)}}function wp(r,t){let e=i=>Math.floor((r.lu+Xt+1e-6)/(kn({...t,portrait:i})[0]+Xt)),n=t.portrait===!1&&e(!1)<1?!0:t.portrait;return{portrait:n,cols:Math.max(1,Math.min(Math.max(...Jn(t)),e(n!==!1))),layout:void 0,skip:void 0}}function Ps(r,t){let[e]=kn(t),n=t.cols*e+(t.cols-1)*Xt;return Math.round((r.lu-n)/2*100)/100}function Ts(r,t){let e=(Math.atan2(r.facing[0],-r.facing[1])/cn-t+720)%360;return["n","ne","e","se","s","sw","w","nw"][Math.round(e/45)%8]}function Zi(r,t){let e=n=>{if(n.flat)return n.lu*n.ls*.8;let i=(Math.atan2(n.facing[0],-n.facing[1])/cn-t+720)%360,o=Math.cos((i-180)*cn);return n.lu*n.ls*(1.2+o)};return[...r].sort((n,i)=>e(i)-e(n))[0]??null}function ln(r,t){return[r[0]-t[0],r[1]-t[1],r[2]-t[2]]}function Qn(r){return Math.hypot(r[0],r[1],r[2])}function Ne(r){let t=Qn(r)||1;return[r[0]/t,r[1]/t,r[2]/t]}function Uc(r,t){return[r[1]*t[2]-r[2]*t[1],r[2]*t[0]-r[0]*t[2],r[0]*t[1]-r[1]*t[0]]}var Gc=.78,Yc=1.18;function En(r){return{id:r.id,face:r.face,u:r.u,v:r.v,rows:1,cols:1,portrait:!0,module_w:r.w||Gc,module_h:r.h||Yc}}function Qc(r,t){let e=Se(r,En(t))[0];if(!e)return null;let n=i=>[i[0]-r.n[0]*.05,i[1]-r.n[1]*.05,i[2]-r.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Ls(r,t){let e=Gc,n=Yc,[i,o]=r.span(r.ls/2);return{id:t,face:r.key,u:Math.round((i+o-e)/2*100)/100,v:Math.round(Math.max(0,Math.min(r.ls-n,r.ls*.45-n/2))*100)/100,w:null,h:null,cover:null,contact:null,tilt:null}}function Zn(r,t,e){let n=Nc(r,t),[i,o]=Mn(n,t),s=n.eu[0]*(t.u+i/2)+n.es[0]*(t.v+o/2),a=n.eu[2]*(t.u+i/2)+n.es[2]*(t.v+o/2),l=e*Math.PI/180,d=[Math.cos(l),Math.sin(l)],c=[-Math.sin(l),Math.cos(l)],u=s*d[0]+a*d[1]-i/2,p=s*c[0]+a*c[1]-o/2,h=f=>Math.round(f*100)/100;return{u:h(u),v:h(p),rotation:(Math.round(e)%360+360)%360}}function Xn(r,t){let[e,n]=Mn(r,t);return[r.o[0]+r.eu[0]*(t.u+e/2)+r.es[0]*(t.v+n/2),r.o[2]+r.eu[2]*(t.u+e/2)+r.es[2]*(t.v+n/2)]}function Os(r,t,e){let n=e[0]*r.n[0]+e[1]*r.n[1]+e[2]*r.n[2];if(Math.abs(n)<1e-6)return null;let i=((r.o[0]-t[0])*r.n[0]+(r.o[1]-t[1])*r.n[1]+(r.o[2]-t[2])*r.n[2])/n;if(i<=0)return null;let o=[t[0]+e[0]*i-r.o[0],t[1]+e[1]*i-r.o[1],t[2]+e[2]*i-r.o[2]],s=o[0]*r.eu[0]+o[1]*r.eu[1]+o[2]*r.eu[2],a=o[0]*r.es[0]+o[1]*r.es[1]+o[2]*r.es[2];return{t:i,u:s,s:a}}function Jc(r,t,e){if(r.unbounded)return!0;if(e<0||e>r.ls)return!1;let[n,i]=r.span(e);return t>=n&&t<=i}function Zc(r,t,e,n){for(let i of Se(r,t)){let o=i.corners.map(c=>{let u=[c[0]-r.o[0],c[1]-r.o[1],c[2]-r.o[2]];return[u[0]*r.eu[0]+u[1]*r.eu[1]+u[2]*r.eu[2],u[0]*r.es[0]+u[1]*r.es[1]+u[2]*r.es[2]]}),[s,a]=[Math.min(...o.map(c=>c[0])),Math.max(...o.map(c=>c[0]))],[l,d]=[Math.min(...o.map(c=>c[1])),Math.max(...o.map(c=>c[1]))];if(e>=s-.05&&e<=a+.05&&n>=l-.05&&n<=d+.05)return!0}return!1}var Ut=.03,Xi=r=>r&&r!=="none"?r:null;function Hs(r,t=e=>Xi(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let i of n.furniture){let o=t(i);if(i.type==="meter")e.grid??=o,e.gridExport??=Xi(i.export);else if(i.type==="inverter"&&o&&!e.solar.includes(o))e.solar.push(o);else if(i.type==="home_battery"){o&&!e.battery.includes(o)&&e.battery.push(o);let s=Xi(i.charge);s&&!e.charge.includes(s)&&e.charge.push(s),(o||s)&&e.batteries.push({power:o,charge:s});let a=Xi(i.soc);a&&!e.soc.includes(a)&&e.soc.push(a)}}return e}function js(r){if(io(r))return r.energy.meter;for(let t of r.floors){let e=t.furniture.find(n=>n.type==="meter");if(e)return{floor_id:t.id,x:e.x,z:e.z}}return r.energy.meter}function io(r){let t=r.energy.meter;return!!r.energy.hub_point&&!!t&&r.floors.some(e=>e.id===t.floor_id)}function sd(r){let t=n=>{var i,o;return((o=(i=r.energy_sources)==null?void 0:i.find(s=>s.type===n))==null?void 0:o.stat_energy_from)??null},e=n=>n&&n.startsWith("sensor.")?n:null;return{gas:e(t("gas")),water:e(t("water"))}}function to(r,t,e="power"){var a,l;if(!t)return null;let n=(l=(a=r.entities)==null?void 0:a[t])==null?void 0:l.device_id;if(!n)return null;let i=Object.keys(r.states).filter(d=>{var c,u,p;return d.startsWith("sensor.")&&((u=(c=r.entities)==null?void 0:c[d])==null?void 0:u.device_id)===n&&((p=r.states[d])==null?void 0:p.attributes.device_class)===e});if(i.length<=1)return i[0]??null;let o=i.filter(d=>!/(phase|_l[123]\b|_[abc]$|today|daily|heute)/.test(d)),s=t.replace(/^sensor\./,"").replace(/_?(energy|energie|total|today|daily|kwh|import|export|consumption|production)/g,"");return o.find(d=>s&&d.includes(s))??o[0]??i[0]}function rd(r,t){var n,i,o,s;let e={};for(let a of t.energy_sources??[])if(a.type==="grid"){let l=((i=(n=a.flow_from)==null?void 0:n[0])==null?void 0:i.stat_energy_from)??((s=(o=a.flow_to)==null?void 0:o[0])==null?void 0:s.stat_energy_to),d=to(r,l);d&&!e.grid&&(e.grid=d)}else if(a.type==="solar"){let l=to(r,a.stat_energy_from);l&&!e.solar&&(e.solar=l)}else if(a.type==="battery"){let l=to(r,a.stat_energy_from??a.stat_energy_to);l&&!e.battery&&(e.battery=l);let d=to(r,a.stat_energy_from??a.stat_energy_to,"battery");d&&!e.battery_soc&&(e.battery_soc=d)}return e}var ad=.07;function Ee(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),i=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-i:i}function xp(r,t){var e;return t.startsWith("sensor.")&&((e=r.states[t])==null?void 0:e.attributes.device_class)==="power"}function ld(r,t){var l,d;if(xp(r,t))return t;let e=(d=(l=r.entities)==null?void 0:l[t])==null?void 0:d.device_id;if(!e)return null;let n=dl(r,e),i=Qt(r,t),o=Xo(r,e).filter(c=>c!==t),s=`sensor.${t.slice(t.indexOf(".")+1)}_power`;if(o.includes(s))return s;let a=o.find(c=>i!==null&&Qt(r,c)===i);return a||n?a??null:o.find(c=>i===null||Qt(r,c)===null||Qt(r,c)===i)??null}function cd(r,t,e,n=Hs(t)){let i=t.energy,o=i.grid??n.grid,s=o?Ee(r.states[o],i.grid_invert):null;if(!i.grid&&n.gridExport){let m=Math.max(0,Ee(r.states[n.gridExport])??0);s=Math.max(0,s??0)-m}let a=i.solar?Ee(r.states[i.solar]):null;if(!i.solar&&n.solar.length){let m=n.solar.map(_=>Ee(r.states[_])).filter(_=>_!==null);a=m.length?m.reduce((_,b)=>_+b,0):null}let l=i.battery?Ee(r.states[i.battery],i.battery_invert):null;if(!i.battery&&n.batteries.length){let m=n.batteries.map(_=>{if(_.charge){let b=_.power?Math.max(0,Ee(r.states[_.power])??0):0,v=Math.max(0,Ee(r.states[_.charge])??0);return b-v}return _.power?Ee(r.states[_.power],i.battery_invert):null}).filter(_=>_!==null);l=m.length?m.reduce((_,b)=>_+b,0):null}let c=(i.battery_soc?[i.battery_soc]:n.soc).map(m=>{var _;return Number((_=r.states[m])==null?void 0:_.state)}).filter(m=>Number.isFinite(m)),u=c.length?c.reduce((m,_)=>m+_,0)/c.length:NaN,p=i.tariff?r.states[i.tariff]:void 0,h=Number(p==null?void 0:p.state),f=i.consumption?Ee(r.states[i.consumption]):null;return f!==null?f=Math.max(0,f):s!==null||a!==null||l!==null?f=Math.max(0,(s??0)+Math.max(0,a??0)+(l??0)):e.length&&(f=e.reduce((m,_)=>m+_.power,0)),{grid:s,solar:a===null?null:Math.max(0,a),battery:l,soc:Number.isFinite(u)?u:null,tariff:p&&Number.isFinite(h)?{value:h,unit:String(p.attributes.unit_of_measurement??"")}:null,consumption:f}}function dn(r,t){return r.pos.push(t),r.adj.push([]),r.pos.length-1}function qe(r,t,e){let n=Math.hypot(r.pos[t][0]-r.pos[e][0],r.pos[t][1]-r.pos[e][1]);r.adj[t].push({to:e,w:n}),r.adj[e].push({to:t,w:n})}function kp(r,t){let e=r.length,n=r.map((i,o)=>{let s=r[(o+1)%e],a=s[0]-i[0],l=s[1]-i[1],d=Math.hypot(a,l)||1,c=-l/d,u=a/d;return{p:[i[0]+c*t[o],i[1]+u*t[o]],d:[a/d,l/d],n:[c,u]}});return r.map((i,o)=>{let s=n[(o-1+e)%e],a=n[o],l=s.d[0]*a.d[1]-s.d[1]*a.d[0];if(Math.abs(l)<1e-6)return[i[0]+a.n[0]*t[o],i[1]+a.n[1]*t[o]];let d=((a.p[0]-s.p[0])*a.d[1]-(a.p[1]-s.p[1])*a.d[0])/l;return[s.p[0]+s.d[0]*d,s.p[1]+s.d[1]*d]})}function Mp(r){return St(r.points)>=0?{pts:r.points,flipped:!1}:{pts:[...r.points].reverse(),flipped:!0}}function Ds(r,t,e){let n={pos:[],adj:[],rings:new Map},{walls:i}=At(r.rooms,{exterior:t,interior:e},r.walls??[]);for(let o of r.rooms){if(o.points.length<3)continue;let{pts:s,flipped:a}=Mp(o),l=s.length,d=s.map((p,h)=>{let f=a?(l-2-h+l)%l:h,m=i.some(_=>!_.exterior&&_.sources.some(b=>b.room_id===o.id&&b.edge===f));return ad+(m?e/2:0)}),c=kp(s,d).map(p=>dn(n,p)),u=c.map((p,h)=>[p,c[(h+1)%l]]);for(let[p,h]of u)qe(n,p,h);n.rings.set(o.id,u)}for(let o of i){if(o.exterior||!o.roomLeft||!o.roomRight)continue;let s=[(o.a[0]+o.b[0])/2,(o.a[1]+o.b[1])/2],a=ei(n,o.roomLeft,s),l=ei(n,o.roomRight,s);a!==null&&l!==null&&qe(n,a,l)}return Ep(n),n}var Sp=1;function Ep(r){let t=[...r.rings.entries()];for(;;){let e=new Array(r.pos.length).fill(-1),n=0;for(let s=0;s<r.pos.length;s++){if(e[s]>=0)continue;let a=[s];for(e[s]=n;a.length;)for(let{to:l}of r.adj[a.pop()])e[l]<0&&(a.push(l),e[l]=n);n++}if(n<2)return;let i=null;for(let[,s]of t)for(let a of new Set(s.flat()))for(let[l,d]of t)if(e[d[0][0]]!==e[a])for(let[c,u]of d){let p=r.pos[a],h=r.pos[c],f=r.pos[u],m=f[0]-h[0],_=f[1]-h[1],b=Math.min(1,Math.max(0,((p[0]-h[0])*m+(p[1]-h[1])*_)/(m*m+_*_||1))),v=Math.hypot(p[0]-h[0]-m*b,p[1]-h[1]-_*b);(!i||v<i.d)&&(i={a,room:l,d:v})}if(!i||i.d>Sp+2*ad)return;let o=ei(r,i.room,r.pos[i.a]);if(o===null)return;qe(r,i.a,o)}}function ei(r,t,e){let n=r.rings.get(t);if(!n)return null;let i=null;for(let s of n){let a=r.pos[s[0]],l=r.pos[s[1]],d=l[0]-a[0],c=l[1]-a[1],u=d*d+c*c||1,p=Math.min(1,Math.max(0,((e[0]-a[0])*d+(e[1]-a[1])*c)/u)),h=[a[0]+d*p,a[1]+c*p],f=Math.hypot(e[0]-h[0],e[1]-h[1]);(!i||f<i.d)&&(i={seg:s,q:h,d:f})}if(!i)return null;let o=dn(r,i.q);return qe(r,o,i.seg[0]),qe(r,o,i.seg[1]),o}function eo(r,t,e){let n=r.pos[e],i=ei(r,t.id,n);if(i===null)return!1;let o=r.pos[i],s=r.pos[r.adj[i][0].to],a=r.pos[r.adj[i][1].to],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=[(a[0]-s[0])/l,(a[1]-s[1])/l],c=(n[0]-o[0])*d[0]+(n[1]-o[1])*d[1],u=(n[1]-o[1])*d[0]-(n[0]-o[0])*d[1];if(Math.abs(c)<.01||Math.abs(u)<.01)return qe(r,e,i),!0;let p=[o[0]+d[0]*c,o[1]+d[1]*c],h=[o[0]-d[1]*u,o[1]+d[0]*u],f=dn(r,Y(h,t.points)||!Y(p,t.points)?h:p);return qe(r,i,f),qe(r,f,e),!0}function ni(r,t){let e=r.rooms.filter(o=>o.points.length>=3),n=e.find(o=>Y(t,o.points));if(n)return n;let i=null;for(let o of e)for(let s of o.points){let a=Math.hypot(t[0]-s[0],t[1]-s[1]);(!i||a<i.d)&&(i={room:o,d:a})}return(i==null?void 0:i.room)??null}function dd(r,t){let e=r.pos.map(()=>1/0),n=r.pos.map(()=>-1),i=r.pos.map(()=>!1);for(e[t]=0;;){let o=-1;for(let s=0;s<e.length;s++)!i[s]&&e[s]<1/0&&(o<0||e[s]<e[o])&&(o=s);if(o<0)break;i[o]=!0;for(let{to:s,w:a}of r.adj[o])e[o]+a<e[s]-1e-9&&(e[s]=e[o]+a,n[s]=o)}return{dist:e,prev:n}}function Xc(r,t){return r.every(e=>t[e].kind==="battery")?"battery":r.every(e=>t[e].kind==="wallbox")?"wallbox":"consumer"}var td=new WeakMap;function Pp(r,t){let e=js(r),n=r.floors.find(c=>c.id===e.floor_id),i=[],{wall_exterior:o,wall_interior:s}=r.settings,a=new Map,l=new Map;t.forEach((c,u)=>l.set(c.floorId,[...l.get(c.floorId)??[],u]));let d=r.floors.filter(c=>l.has(c.id));for(let c of d){if(c.id===n.id)continue;let u=c.elevation>n.elevation,p=l.get(c.id),h=Xc(p,t);i.push({floorId:n.id,a:[e.x,Ut,e.z],b:[e.x,u?n.height:-.2,e.z],dist:0,members:p,kind:h});let f=Math.abs(c.elevation-n.elevation);i.push({floorId:c.id,a:[e.x,u?-.2:c.height,e.z],b:[e.x,Ut,e.z],dist:f,members:p,kind:h}),a.set(c.id,f+.25)}for(let c of d){let u=Ds(c,o,s),p=ni(c,[e.x,e.z]);if(!p)continue;let h=dn(u,[e.x,e.z]);if(!eo(u,p,h))continue;let f=[];for(let y of l.get(c.id)){let x=t[y],P=ni(c,[x.x,x.z]);if(!P)continue;let A=dn(u,[x.x,x.z]);eo(u,P,A)&&f.push({node:A,member:y})}let{dist:m,prev:_}=dd(u,h),b=new Map;for(let y of f)if(Number.isFinite(m[y.node]))for(let x=y.node;_[x]>=0;x=_[x]){let P=_[x],A=`${P}>${x}`,F=b.get(A)??{a:P,b:x,members:[]};F.members.push(y.member),b.set(A,F)}let v=a.get(c.id)??0;for(let{a:y,b:x,members:P}of b.values()){let A=u.pos[y],F=u.pos[x],T=Xc(P,t);i.push({floorId:c.id,a:[A[0],Ut,A[1]],b:[F[0],Ut,F[1]],dist:v+m[y],members:P,kind:T})}}return i}function ud({building:r,consumers:t,summary:e,battery:n,fieldPower:i,devicePower:o}){var M;let s=js(r);if(!s)return[];let a=r.floors.find(w=>w.id===s.floor_id);if(!a)return[];let l=w=>o==null?void 0:o.get(w),d=Cs(r,"inverter"),c=Cs(r,"home_battery");!c.length&&n&&c.push({id:"battery",type:"home_battery",floorId:n.floorId,x:n.x,z:n.z,h:1.1,variant:null});let u=w=>{let k=null;for(let E of d)E.floorId===w.floorId&&(!k||Math.hypot(E.x-w.x,E.z-w.z)<Math.hypot(k.x-w.x,k.z-w.z))&&(k=E);return k},p=w=>l(w.id)??(c.length===1?e.battery??0:0),h=new Map;for(let w of c){let k=u(w);k&&h.set(w.id,k)}let f=t.map(w=>({floorId:w.floorId,x:w.x,z:w.z,kind:w.wallbox?"wallbox":"consumer",power:w.power}));for(let w of c)!h.has(w.id)&&e.battery!==null&&f.push({floorId:w.floorId,x:w.x,z:w.z,kind:"battery",power:Math.abs(p(w))});let m=`${s.floor_id}:${s.x},${s.z}|${f.map(w=>`${w.floorId}:${w.x},${w.z}:${w.kind}`).join(";")}`,_=td.get(r);_||td.set(r,_=new Map);let b=_.get(m);b||(b=Pp(r,f),_.clear(),_.set(m,b));let v=b.map(w=>({floorId:w.floorId,a:w.a,b:w.b,dist:w.dist,power:w.members.reduce((k,E)=>k+f[E].power,0),kind:w.kind})),y=e.grid!==null?no(r):null,x=r.settings.roof.cables??[],P=w=>x.find(k=>k.id===w),A=(w,k)=>w.map(E=>({...E,key:k}));if(y){let w=e.grid>=0,k=P("grid"),E=k?ti(r,k,[y.end[0],a.elevation+Math.max(Ut,y.height),y.end[1]],[s.x,a.elevation+.4+1.1,s.z]):[...y.height>.05?[[y.end[0],y.height,y.end[1]]]:[],[y.end[0],Ut,y.end[1]],[y.wall[0],Ut,y.wall[1]],[s.x,Ut,s.z]],I=k?Pn(r,w?E:[...E].reverse(),Math.abs(e.grid),w?"grid":"export",a):hd(a.id,w?E:[...E].reverse(),Math.abs(e.grid),w?"grid":"export",0);v.push(...A(I,"grid"))}if(e.battery!==null&&e.battery>0)for(let w of v)w.kind==="battery"&&([w.a,w.b]=[w.b,w.a]);let F=r.settings.roof.solar??[],T=r.settings.roof.strings??[],S=new Map;if(i&&F.length){let w=[...$t(r),...fe(r)];for(let k of F){let E=i.get(k.id)??0,I=k.string?(M=T.find(J=>J.id===k.string))==null?void 0:M.inverter:null,C=I?c.find(J=>J.id===I)??null:null,O=I&&!C?d.find(J=>J.id===I)??null:null;if(C){let J=h.get(C.id);J&&S.set(J.id,(S.get(J.id)??0)+E);let it=C.variant==="wall"?.5+C.h:.9,q=P(`solar:${k.id}`),lt=q?id(r,k):null,It=r.floors.find(te=>te.id===C.floorId);q&&lt&&It?v.push(...A(Pn(r,ti(r,q,lt,[C.x,It.elevation+it,C.z]),E,"solar",It),`solar:${k.id}`)):v.push(...A(od(r,k,E,C,it),`solar:${k.id}`));continue}if(!O&&d.length){let J=Dt(r,k,w),it=J?Xn(J,k):[k.u,k.v];O=d.reduce((q,lt)=>!q||Math.hypot(lt.x-it[0],lt.z-it[1])<Math.hypot(q.x-it[0],q.z-it[1])?lt:q,null)}O&&S.set(O.id,(S.get(O.id)??0)+E);let D=O??{floorId:s.floor_id,x:s.x,z:s.z},j=O?1.1+O.h:1.5,U=P(`solar:${k.id}`),G=U?id(r,k):null,Q=r.floors.find(J=>J.id===D.floorId);U&&G&&Q?v.push(...A(Pn(r,ti(r,U,G,[D.x,Q.elevation+j,D.z]),E,"solar",Q),`solar:${k.id}`)):v.push(...A(od(r,k,E,D,j),`solar:${k.id}`))}}else e.solar!==null&&!d.length&&v.push({floorId:a.id,a:[s.x+.08,a.height+.6,s.z+.08],b:[s.x+.08,Ut,s.z+.08],dist:0,power:e.solar,kind:"solar"});for(let w of d){let k=1.1+w.h,E=c.filter(O=>h.get(O.id)===w),I=l(w.id);if(I===void 0){I=S.get(w.id)??(d.length===1?e.solar??0:0);for(let O of E)I+=p(O)}let C=r.floors.find(O=>O.id===w.floorId);if(e.solar!==null||e.battery!==null){let O=P(`inv:${w.id}`),D=Vs(r,w.id)?no(r):null,j=D?{floorId:D.floorId,x:D.end[0],z:D.end[1],y:Math.max(Ut,D.height)}:{floorId:s.floor_id,x:s.x,z:s.z,y:1.5},U=D?r.floors.find(Q=>Q.id===D.floorId)??a:a,G=O&&C?Pn(r,ti(r,O,[w.x,C.elevation+k,w.z],[j.x,U.elevation+j.y,j.z]),Math.max(0,I),"inverter",C):nd(r,w,k,j,j.y,Math.max(0,I),"inverter",0);v.push(...A(G,`inv:${w.id}`))}for(let O of E){let D=p(O);if(e.battery===null&&l(O.id)===void 0)continue;let j=O.variant==="wall"?.5+O.h:.9,U=P(`bat:${O.id}`),G=U&&C?Pn(r,ti(r,U,[w.x,C.elevation+k-.1,w.z],[O.x,C.elevation+j,O.z]),Math.abs(D),"battery",C):nd(r,w,k-.1,O,j,Math.abs(D),"battery",0);v.push(...A(D<=0?G:G.map(Q=>({...Q,a:Q.b,b:Q.a})).reverse(),`bat:${O.id}`))}}return v}function no(r){var h;let t=js(r),e=t?r.floors.find(f=>f.id===t.floor_id):void 0;if(!t||!e)return null;let{wall_exterior:n,wall_interior:i}=r.settings,{walls:o}=At(e.rooms,{exterior:n,interior:i},e.walls??[]),s=Cs(r,"grid_point")[0],a=o.filter(f=>f.exterior);if(s){let f=null;for(let b of a){let v=b.b[0]-b.a[0],y=b.b[1]-b.a[1],x=s.x-t.x,P=s.z-t.z,A=x*y-P*v;if(Math.abs(A)<1e-9)continue;let F=((b.a[0]-t.x)*y-(b.a[1]-t.z)*v)/A,T=((b.a[0]-t.x)*P-(b.a[1]-t.z)*x)/A;if(F<=0||F>1||T<0||T>1||f&&F>=f.t)continue;let S=Math.hypot(v,y)||1;f={q:[t.x+x*F,t.z+P*F],out:[y/S,-v/S],t:F}}let m=f?[f.q[0]+f.out[0]*(n/2+.05),f.q[1]+f.out[1]*(n/2+.05)]:[t.x,t.z],_=((h=r.floors.flatMap(b=>b.furniture).find(b=>b.id===s.id))==null?void 0:h.mount_y)??0;return{floorId:e.id,wall:m,end:[s.x,s.z],height:Math.max(0,_)}}let l=null;for(let f of a){let m=f.b[0]-f.a[0],_=f.b[1]-f.a[1],b=m*m+_*_||1,v=Math.min(1,Math.max(0,((t.x-f.a[0])*m+(t.z-f.a[1])*_)/b)),y=[f.a[0]+m*v,f.a[1]+_*v],x=Math.hypot(t.x-y[0],t.z-y[1]),P=Math.sqrt(b);(!l||x<l.d)&&(l={q:y,out:[_/P,-m/P],d:x})}if(!l)return null;let{q:d,out:c}=l,u=0;for(let f of r.floors)for(let m of f.outdoor??[]){let _=m.points.length;for(let b=0;b<_;b++){let v=m.points[b],y=m.points[(b+1)%_],x=y[0]-v[0],P=y[1]-v[1],A=c[0]*P-c[1]*x;if(Math.abs(A)<1e-9)continue;let F=((v[0]-d[0])*P-(v[1]-d[1])*x)/A,T=((v[0]-d[0])*c[1]-(v[1]-d[1])*c[0])/A;F>0&&T>=0&&T<=1&&(u=Math.max(u,Math.min(15,F)))}}let p=u>n+1?u:n+2.5;return{floorId:e.id,wall:[d[0]+c[0]*(n/2+.05),d[1]+c[1]*(n/2+.05)],end:[d[0]+c[0]*p,d[1]+c[1]*p],height:0}}function Vs(r,t){return r.floors.some(e=>e.furniture.some(n=>n.id===t&&n.type==="inverter"&&n.cable_to==="grid"))}function Cs(r,t){let e=[];for(let n of r.floors)for(let i of n.furniture)i.type===t&&e.push({id:i.id,type:i.type,floorId:n.id,x:i.x,z:i.z,h:i.h,variant:i.variant??null});return e}var ed=new WeakMap;function pd(r,t,e,n){let i=`${t.id}:${e.join(",")}>${n.join(",")}`,o=ed.get(r);o||ed.set(r,o=new Map);let s=o.get(i);if(s)return s;let{wall_exterior:a,wall_interior:l}=r.settings,d=Ds(t,a,l),c=[e,n],u=ni(t,e),p=ni(t,n);if(u&&p){let h=dn(d,e),f=dn(d,n);if(eo(d,u,h)&&eo(d,p,f)){let{dist:m,prev:_}=dd(d,h);if(Number.isFinite(m[f])){c.length=0;for(let b=f;b>=0;b=_[b])c.unshift(d.pos[b])}}}return o.set(i,c),c}function nd(r,t,e,n,i,o,s,a){let l=r.floors.find(u=>u.id===t.floorId);if(!l||t.floorId!==n.floorId)return[];let d=pd(r,l,[t.x,t.z],[n.x,n.z]),c=[[t.x,e,t.z],...d.map(u=>[u[0],Ut,u[1]]),[n.x,i,n.z]];return hd(l.id,c,o,s,a)}function hd(r,t,e,n,i){let o=[];for(let s=0;s+1<t.length;s++){let a=t[s],l=t[s+1],d=Math.hypot(l[0]-a[0],l[1]-a[1],l[2]-a[2]);d<1e-4||(o.push({floorId:r,a,b:l,dist:i,power:e,kind:n}),i+=d)}return o}function ti(r,t,e,n){let i=r.floors.find(s=>s.id===t.floor_id),o=((i==null?void 0:i.elevation)??0)+Math.max(Ut,t.height);return[e,...t.points.map(s=>[s[0],o,s[1]]),n]}function id(r,t){let e=Dt(r,t,[...$t(r),...fe(r)]);if(!e)return null;let[n,i]=Mn(e,t),o=t.u+n/2,s=e.unbounded?t.v+i/2:t.v;return[e.o[0]+e.eu[0]*o+e.es[0]*s,e.o[1]+e.eu[1]*o+e.es[1]*s,e.o[2]+e.eu[2]*o+e.es[2]*s]}function Ap(r,t,e){let{wall_exterior:n,wall_interior:i}=r.settings,o=Ds(t,n,i),s=ni(t,e),a=s?ei(o,s.id,e):null;return a===null?e:o.pos[a]}function Pn(r,t,e,n,i){let o=[...r.floors].sort((d,c)=>d.elevation-c.elevation),s=d=>{let c=i;for(let u of o)d>=u.elevation-.01&&(c=u);return c},a=[],l=0;for(let d=0;d+1<t.length;d++){let c=t[d],u=t[d+1];if(Math.hypot(u[0]-c[0],u[1]-c[1],u[2]-c[2])<1e-4)continue;let h=[];if(Math.abs(u[1]-c[1])>.01){let f=Math.min(c[1],u[1]),m=Math.max(c[1],u[1]);for(let _ of o)_.elevation>f+.01&&_.elevation<m-.01&&h.push(_.elevation);u[1]<c[1]&&h.reverse()}for(let f of[...h,u[1]]){let m=(f-c[1])/(u[1]-c[1]||1),_=Math.abs(u[1]-c[1])>.01?[c[0]+(u[0]-c[0])*m,f,c[2]+(u[2]-c[2])*m]:u,b=s((c[1]+_[1])/2),v=Math.hypot(_[0]-c[0],_[1]-c[1],_[2]-c[2]);v>1e-4&&a.push({floorId:b.id,a:[c[0],c[1]-b.elevation,c[2]],b:[_[0],_[1]-b.elevation,_[2]],dist:l,power:e,kind:n}),l+=v,c=_}}return a}function od(r,t,e,n,i){let o=[...$t(r),...fe(r)],s=Dt(r,t,o),a=r.floors.find(_=>_.id===n.floorId);if(!s||!a)return[];let[l,d]=Mn(s,t),c=(_,b)=>[s.o[0]+s.eu[0]*_+s.es[0]*b,s.o[1]+s.eu[1]*_+s.es[1]*b,s.o[2]+s.eu[2]*_+s.es[2]*b],u=t.u+l/2,p=a.elevation+Ut,h=[],f;if(s.unbounded){let _=c(u,t.v+d/2);f=[_[0],p,_[2]],h.push(f)}else if(s.wall){let _=c(u,t.v);f=[_[0],p,_[2]],h.push(_,f)}else{let _=c(u,t.v),b=zs(r)??a,v=Math.max(a.elevation+.5,Math.min(_[1]-.25,b.elevation+b.height-.12));f=[_[0],v,_[2]],h.push(_)}let m=Ap(r,a,[f[0],f[2]]);h.push([m[0],f[1],m[1]]),Math.abs(f[1]-p)>.05&&h.push([m[0],p,m[1]]);for(let _ of pd(r,a,m,[n.x,n.z]).slice(1))h.push([_[0],p,_[1]]);return h.push([n.x,a.elevation+i,n.z]),Pn(r,h,e,"solar",a)}var md=["kitchen_row","kitchen_l","bath","bedroom","living","dining","office","kids","hall"],zp={kitchen_row:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"kitchen",size:[.9,.62,.92]},{type:"sink"},{type:"dishwasher"},{type:"stove"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"back",align:"start",items:[{type:"kitchen_wall",size:[1.2,.35,.7]}]}],free:[{type:"table",at:[.5,.72],rotation:0,size:[1.2,.8,.75]},{type:"lamp_pendant",at:[.5,.72],rotation:0},{type:"lamp_ceiling",at:[.5,.3],rotation:0}]},kitchen_l:{rows:[{wall:"back",align:"start",items:[{type:"fridge"},{type:"kitchen_tall"},{type:"sink"},{type:"dishwasher"},{type:"kitchen",size:[.6,.62,.92]}]},{wall:"left",align:"end",items:[{type:"stove"},{type:"kitchen",size:[1.2,.62,.92]}]}],free:[{type:"island",at:[.62,.62],rotation:0,size:[1.6,.9,.92]},{type:"bar_stool",at:[.52,.86],rotation:180},{type:"bar_stool",at:[.72,.86],rotation:180},{type:"lamp_ceiling",at:[.5,.35],rotation:0}]},bath:{rows:[{wall:"back",align:"center",items:[{type:"washbasin"}]},{wall:"back",align:"end",items:[{type:"wc"}]},{wall:"front",align:"start",items:[{type:"bathtub"}]},{wall:"left",align:"start",items:[{type:"washer"}]}],free:[{type:"lamp_downlight",at:[.5,.5],rotation:0}]},bedroom:{rows:[{wall:"back",align:"center",items:[{type:"nightstand"},{type:"bed"},{type:"nightstand"}]},{wall:"left",align:"center",items:[{type:"wardrobe",size:[2,.6,2.1]}]},{wall:"front",align:"end",items:[{type:"dresser"}]}],free:[{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},living:{rows:[{wall:"back",align:"center",items:[{type:"tv_board"}]},{wall:"right",align:"start",items:[{type:"shelf"}]}],free:[{type:"sofa",at:[.5,.72],rotation:180},{type:"coffee_table",at:[.5,.52],rotation:0},{type:"rug",at:[.5,.55],rotation:0,size:[2.2,1.6,.01]},{type:"armchair",at:[.14,.5],rotation:270},{type:"lamp_floor",at:[.86,.8],rotation:0},{type:"plant",at:[.9,.12],rotation:0},{type:"lamp_ceiling",at:[.5,.45],rotation:0}]},dining:{rows:[{wall:"back",align:"center",items:[{type:"sideboard"}]}],free:[{type:"table",at:[.5,.55],rotation:0},{type:"chair",at:[.4,.35],rotation:0},{type:"chair",at:[.6,.35],rotation:0},{type:"chair",at:[.4,.75],rotation:180},{type:"chair",at:[.6,.75],rotation:180},{type:"lamp_pendant",at:[.5,.55],rotation:0}]},office:{rows:[{wall:"back",align:"center",items:[{type:"desk"}]},{wall:"left",align:"center",items:[{type:"shelf"},{type:"shelf"}]}],free:[{type:"office_chair",at:[.5,.38],rotation:180},{type:"lamp_ceiling",at:[.5,.55],rotation:0}]},kids:{rows:[{wall:"left",align:"start",items:[{type:"bed",size:[.9,2,.8]}]},{wall:"back",align:"end",items:[{type:"desk",size:[1.2,.6,.75]}]},{wall:"right",align:"end",items:[{type:"shelf"}]}],free:[{type:"rug",at:[.55,.6],rotation:0,size:[1.6,1.2,.01]},{type:"lamp_ceiling",at:[.5,.5],rotation:0}]},hall:{rows:[{wall:"left",align:"start",items:[{type:"coat_rack"}]}],free:[{type:"lamp_downlight",at:[.5,.3],rotation:0},{type:"lamp_downlight",at:[.5,.7],rotation:0}]}},Ip={back:0,right:90,front:180,left:270};function gd(r,t,e){let n=zt(r.points),i=n.x1-n.x0,o=n.z1-n.z0,s=zp[t],a=[],l=(c,u,p,h,f)=>{let[m,_,b]=f??de[c];a.push({id:e(),type:c,x:fd(u),z:fd(p),rotation:h,w:m,d:_,h:b,variant:null,entity:null,power:null})},d=.02;for(let c of s.rows){let u=c.items.map(_=>({type:_.type,size:_.size??de[_.type]})),p=c.wall==="back"||c.wall==="front"?i:o,h=[],f=0;for(let _ of u){if(f+_.size[0]>p-.1)break;h.push(_),f+=_.size[0]}let m=c.align==="start"?.05:c.align==="end"?p-f-.05:(p-f)/2;for(let _ of h){let[b,v]=_.size,y=m+b/2,x=v/2+d;c.wall==="back"?l(_.type,n.x0+y,n.z0+x,0,_.size):c.wall==="front"?l(_.type,n.x1-y,n.z1-x,180,_.size):c.wall==="right"?l(_.type,n.x1-x,n.z0+y,90,_.size):l(_.type,n.x0+x,n.z1-y,Ip.left,_.size),m+=b}}for(let c of s.free){let[u,p]=c.size??de[c.type],h=Math.min(n.x1-u/2-.05,Math.max(n.x0+u/2+.05,n.x0+i*c.at[0])),f=Math.min(n.z1-p/2-.05,Math.max(n.z0+p/2+.05,n.z0+o*c.at[1]));l(c.type,h,f,c.rotation,c.size)}return a}var fd=r=>Math.round(r*1e3)/1e3;var un=new Map,Ws=new Map,_d=new Map;async function Fp(r,t){return r.callWS({type:"neonplan3d/modules/code",pack_id:t})}async function Rp(r,t){let e=await Fp(r,t.id);if(e.api!==1)return null;let n=URL.createObjectURL(new Blob([e.code],{type:"text/javascript"}));try{let o=(await import(n)).default;if(!o||o.api!==1||typeof o.id!="string")return null;let s=_d.get(t.id);s&&URL.revokeObjectURL(s),_d.set(t.id,n);let a={id:t.id,release:e.release,module:o};return un.set(t.id,a),a}catch(i){throw URL.revokeObjectURL(n),i}}async function Ns(r,t){let e=new Map(t.filter(n=>n.module&&n.module.api===1&&n.module.approved===!0).map(n=>[n.id,n]));for(let n of[...un.keys()])e.has(n)||un.delete(n);await Promise.all([...e.values()].map(n=>{let i=un.get(n.id);if(i&&i.release===(n.release??1))return Promise.resolve(i);let o=Ws.get(n.id);return o||(o=Rp(r,n).catch(s=>(console.warn(`NeonPlan 3D: module ${n.id} did not load`,s),null)).finally(()=>Ws.delete(n.id)),Ws.set(n.id,o)),o}))}function bd(r){var e,n;let t=[];for(let i of un.values())try{t.push(...((n=(e=i.module).help)==null?void 0:n.call(e,r))??[])}catch{}return t}function vd(r,t){return Bs(e=>{var n;return(n=e.areaFields)==null?void 0:n.call(e,r,t)})}function yd(r,t){return Bs(e=>{var n;return(n=e.furnitureFields)==null?void 0:n.call(e,r,t)})}function $d(r,t,e){return Bs(n=>{var i;return(i=n.roomFields)==null?void 0:i.call(n,r,t,e)})}function wd(){for(let r of un.values())if(r.module.pipes)return r.module.pipes;return null}function Bs(r){let t=[];for(let e of un.values())try{t.push(...r(e.module)??[])}catch(n){console.warn(`NeonPlan 3D: module ${e.id} failed`,n)}return t}function Tp(r){return{a:r.a,b:r.b,u:r.u,n:r.n,length:r.length,rightward:!0}}var qs={walls(r,t,e){let n=r.floors.find(o=>o.id===t),i=n==null?void 0:n.rooms.find(o=>o.id===e);return!n||!i||i.points.length<3?[]:i.points.map((o,s)=>{let a=He(i,s),l=pe(n,i.id,a.a,a.b),d=[...je(a,n,i).map(c=>[c.s0,c.s1]),...yn(a,n).filter(c=>c.y0<.05).map(c=>[c.s0,c.s1])];return{roomId:i.id,edge:s,a:a.a,b:a.b,u:a.u,n:a.n,length:a.length,shared:l,thickness:l?r.settings.wall_interior:r.settings.wall_exterior,taken:d}})},onWall(r,t,e){return ie(Tp(r),t,e)},freeSpot(r,t,e=.1){let n=o=>o>=e&&o+t<=r.length-e&&!r.taken.some(([s,a])=>o<a+.05&&o+t>s-.05),i=r.length/2-t/2;for(let o=0;o<=r.length;o+=.05){if(n(i-o))return Math.round((i-o)*100)/100;if(n(i+o))return Math.round((i+o)*100)/100}return null},nodeAt(r,t,e){let n=r.floors.find(a=>a.id===t),i=n==null?void 0:n.outdoor.find(a=>a.id===e);if(!n||!i)return()=>null;let o=ft(r,n,i),s=i.pool??{};return a=>{let{kind:l,id:d,port:c}=ut(a),u=l==="joint"?(s.joints??[]).find(h=>h.id===d):void 0;if(u)return Ve(u,c);let p=l==="port"?(s.ports??[]).find(h=>h.id===d):void 0;return p?o(a)??{x:p.x,y:.02,z:p.z}:o(a)}},connect(r,t,e,n,i,o){var l;let s=r.floors.find(d=>d.id===t),a=s==null?void 0:s.outdoor.find(d=>d.id===e);return!s||!a?{pipes:[],joints:[]}:xn({...n,floorId:t},qs.nodeAt(r,t,e),((l=a.pool)==null?void 0:l.joints)??[],i,o)}};var Ks=.8,xd=.3;function Lp(r,t){return t.rooms.some(e=>e.points.length>=3)?Ki(t.rooms,t.walls??[],r.settings.wall_exterior,r.settings.wall_interior):null}function Op(r,t){var n;if(((n=r.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=Lp(r,t);return!!e&&e.some(([i,o])=>To(i,o)-t.elevation>-.15)}function Cp(r,t,e){let n=null;for(let i of r.floors)if(!(i.elevation>.3))for(let o of i.outdoor??[]){if(o.points.length<3||o.type==="pool"||o.type==="balcony"||Re(o.type)||!Y(e,o.points))continue;let s=i.elevation+Fo(i,o,e[0],e[1])-t.elevation;n=n===null?s:Math.max(n,s)}return n}function Hp(r,t,e,n,i,o){if(!e||!Op(r,t))return!1;let s=To(i[0],i[1])-t.elevation;return o&&(s=Math.max(s,Cp(r,t,[i[0]+o[0]*xd,i[1]+o[1]*xd])??-1/0)),n<Math.min(t.height,s)-.05}function kd(r,t,e){if(e.type!=="window")return!1;let n=Ce(e,t.rooms,t.walls??[]);if(!n)return!1;let i=At(t.rooms,{exterior:r.settings.wall_exterior,interior:r.settings.wall_interior},t.walls??[]).walls,o=Bn(i,e,n);if(!o)return!1;let{wall:s,s:a}=o,l=Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1]),d=l>1e-9?[(s.b[0]-s.a[0])/l,(s.b[1]-s.a[1])/l]:[1,0],c=Math.min(Math.min(t.height,s.height??t.height)-.02,e.sill+e.height),u=Math.max(0,Math.min(e.sill,c-.1)),p=[d[1],-d[0]],h=[s.a[0]+d[0]*a+p[0]*s.right,s.a[1]+d[1]*a+p[1]*s.right];return Hp(r,t,s.exterior,u,h,p)}var Ke=Gt`
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
`,oo=Gt`
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
`;var Md=40,Us=class extends Ht{static properties={options:{attribute:!1},fixed:{attribute:!1},value:{attribute:!1},disabled:{type:Boolean},placeholder:{attribute:!1},_query:{state:!0},_open:{state:!0},_cursor:{state:!0}};blurTimer;constructor(){super(),this.options=[],this.fixed=[],this.value=null,this.disabled=!1,this.placeholder="",this._query="",this._open=!1,this._cursor=0}get current(){return[...this.fixed,...this.options].find(t=>t.id===this.value)}get hits(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=s=>{let a=`${s.label} ${s.id}`.toLowerCase();return e.every(l=>a.includes(l))},i=this.fixed.filter(s=>!t||n(s)),o=t?this.options.filter(n):this.options;return[...i,...o.slice(0,Md)]}get leftOut(){let t=this._query.trim().toLowerCase(),e=t.split(/\s+/).filter(Boolean),n=t?this.options.filter(i=>e.every(o=>`${i.label} ${i.id}`.toLowerCase().includes(o))).length:this.options.length;return Math.max(0,n-Md)}choose(t){this.value=t,this._query="",this._open=!1,this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}onKey(t){let e=this.hits;t.key==="ArrowDown"?(this._open=!0,this._cursor=Math.min(e.length-1,this._cursor+1),t.preventDefault()):t.key==="ArrowUp"?(this._cursor=Math.max(0,this._cursor-1),t.preventDefault()):t.key==="Enter"?(this._open&&e[this._cursor]&&this.choose(e[this._cursor].id),t.preventDefault()):t.key==="Escape"&&(this._open=!1,this._query="")}render(){let t=this.current,e=this._open?this.hits:[];return g`<div class="wrap">
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
      ${this._open?g`<ul class="list" role="listbox">
            ${e.length?$:g`<li class="empty">–</li>`}
            ${e.map((n,i)=>g`<li
                role="option"
                aria-selected=${n.id===this.value}
                class="${i===this._cursor?"cursor":""} ${n.id===this.value?"chosen":""}"
                @mousedown=${o=>o.preventDefault()}
                @click=${()=>this.choose(n.id)}
              >
                <span>${n.label}</span>${n.id.includes(".")?g`<small>${n.id}</small>`:$}
              </li>`)}
            ${this.leftOut>0?g`<li class="empty">… +${this.leftOut} · ${this.placeholder}</li>`:$}
          </ul>`:$}
    </div>`}static styles=[Ke,Gt`
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
    `]};customElements.get("fp3d-entity-picker")||customElements.define("fp3d-entity-picker",Us);var jp=new URL(import.meta.url),Dp=new URL("./neonplan3d-3d.js?v=629a8fccdf57",jp).href,Sd;function ii(){return Sd??=import(Dp),Sd}var Ed=(r,t,e)=>{let n=new Map;for(let i=t;i<=e;i++)n.set(r[i],i);return n},Pd=Ze(class extends ze{constructor(r){if(super(r),r.type!==fn.CHILD)throw Error("repeat() can only be used in text expressions")}dt(r,t,e){let n;e===void 0?e=t:t!==void 0&&(n=t);let i=[],o=[],s=0;for(let a of r)i[s]=n?n(a,s):s,o[s]=e(a,s),s++;return{values:o,keys:i}}render(r,t,e){return this.dt(r,t,e).values}update(r,[t,e,n]){let i=Or(r),{values:o,keys:s}=this.dt(t,e,n);if(!Array.isArray(i))return this.ut=s,o;let a=this.ut??=[],l=[],d,c,u=0,p=i.length-1,h=0,f=o.length-1;for(;u<=p&&h<=f;)if(i[u]===null)u++;else if(i[p]===null)p--;else if(a[u]===s[h])l[h]=Ie(i[u],o[h]),u++,h++;else if(a[p]===s[f])l[f]=Ie(i[p],o[f]),p--,f--;else if(a[u]===s[f])l[f]=Ie(i[u],o[f]),mn(r,l[f+1],i[u]),u++,f--;else if(a[p]===s[h])l[h]=Ie(i[p],o[h]),mn(r,i[u],i[p]),p--,h++;else if(d===void 0&&(d=Ed(s,h,f),c=Ed(a,u,p)),d.has(a[u]))if(d.has(a[p])){let m=c.get(s[h]),_=m!==void 0?i[m]:null;if(_===null){let b=mn(r,i[u]);Ie(b,o[h]),l[h]=b}else l[h]=Ie(_,o[h]),mn(r,i[u],_),i[m]=null;h++}else fi(i[p]),p--;else fi(i[u]),u++;for(;h<=f;){let m=mn(r,l[f+1]);Ie(m,o[h]),l[h++]=m}for(;u<=p;){let m=i[u++];m!==null&&fi(m)}return this.ut=s,Lr(r,l),ee}});var Gs=["sofa","seating","table","storage","bed","kitchen","appliance","bath","lamp","media","office","tech","heating","energy","household","deco","plant","outdoor","kids","sport","pets","vehicle","stairs","architecture"],Ys=["living","dining","kitchen","bedroom","kids","bath","office","hall","utility","garage","garden","hobby"],Rd={lamp_ceiling:["lamp",[]],lamp_downlight:["lamp",[]],lamp_spot:["lamp",[]],lamp_panel:["lamp",[]],lamp_pendant:["lamp",[]],lamp_ceiling_fan:["lamp",[]],lamp_floor:["lamp",["living","bedroom","office"]],lamp_uplight:["lamp",["living","bedroom","office"]],lamp_table:["lamp",["living","bedroom","office"]],lamp_wall:["lamp",[]],led_strip:["lamp",[]],lamp_bollard:["lamp",["garden"]],lamp_garden:["lamp",["garden"]],radiator:["heating",[]],ac_unit:["heating",[]],sofa:["sofa",["living"]],sofa_l:["sofa",["living"]],sofa_u:["sofa",["living"]],armchair:["seating",["living","bedroom","office"]],stool:["seating",["living","bath","kids"]],coffee_table:["table",["living"]],tv_board:["media",["living","bedroom"]],tv_wall:["media",["living","bedroom"]],sideboard:["storage",["living","dining","hall"]],shelf:["storage",["living","office","kids","utility","garage"]],plant:["plant",[]],rug:["deco",["living","bedroom","kids","hall"]],table:["table",["dining","kitchen","living"]],table_round:["table",["dining","kitchen","living"]],chair:["seating",["dining","kitchen","living"]],bench:["seating",["dining","kitchen","hall","garden"]],corner_bench:["seating",["dining","kitchen"]],bar_stool:["seating",["kitchen","dining"]],kitchen:["kitchen",["kitchen"]],kitchen_wall:["kitchen",["kitchen"]],kitchen_tall:["kitchen",["kitchen"]],island:["kitchen",["kitchen"]],worktop:["kitchen",["kitchen","utility","garage"]],sink:["kitchen",["kitchen","utility"]],stove:["appliance",["kitchen"]],dishwasher:["appliance",["kitchen"]],fridge:["appliance",["kitchen","utility"]],fridge_smart:["appliance",["kitchen"]],bed:["bed",["bedroom","kids"]],bunk_bed:["bed",["kids","bedroom"]],nightstand:["storage",["bedroom","kids"]],wardrobe:["storage",["bedroom","kids","hall"]],dresser:["storage",["bedroom","kids","hall"]],bathtub:["bath",["bath"]],shower:["bath",["bath"]],wc:["bath",["bath"]],washbasin:["bath",["bath"]],washer:["appliance",["bath","utility"]],dryer:["appliance",["bath","utility"]],desk:["office",["office","kids","bedroom"]],office_chair:["office",["office","kids"]],tall_cabinet:["storage",["office","hall","utility","bath"]],coat_rack:["household",["hall"]],stairs:["stairs",["hall","living"]],stairs_u:["stairs",["hall","living"]],stairwell:["stairs",["hall","living"]],robot_vacuum:["appliance",[]],inverter:["energy",["utility","garage"]],home_battery:["energy",["utility","garage"]],wallbox:["energy",["garage"]],meter:["energy",["utility","garage"]],grid_point:["energy",["utility"]],pool_pump:["outdoor",["utility","garage","garden"]],pool_filter:["outdoor",["utility","garage","garden"]],pool_heat_pump:["outdoor",["garden","utility"]],pool_dosing:["outdoor",["utility","garage"]],pool_valve:["outdoor",["utility","garage"]],parking:["vehicle",["garage"]],awning:["outdoor",["garden"]],waste_bin:["household",["garden","garage","utility"]],mailbox:["household",["garden","hall"]],wall_switch:["tech",[]],wall_socket:["tech",[]],access_point:["tech",[]],water_heater:["heating",["utility","bath","garage"]]};function Td(r=[]){let t=new Set(Object.values(Mi).flat());for(let e of r)t.add(e);return[...t].filter(e=>e in Rd)}var Vp={living:["living"],kitchen:["kitchen"],bedroom:["bedroom"],bath:["bath"],kids:["kids"],office:["office"],garage:["garage"],garden:["garden"],utility:["utility"],cinema:["living","hobby"],fitness:["hobby"],stairs:["hall"],vehicles:["garage"],pets:[],smarthome:[],architecture:[],fun_halloween:[],fun_pets:[]},Wp=[[/\b(van|estate|suv|compact car|sedan|coup|cabrio|convertible|city ev|minibus|transporter|panel van|pickup|campervan|motorhome|caravan|trailer|motorcycle|electric car|e-bike|bike stand|bike holder|bike rack)\b/,"vehicle",["garage"]],[/\b(cat|dog|pet|pets|litter|hamster|rabbit|bird cage|aquarium|terrarium|bowls|scratch|animal|cage)\b/,"pets",[]],[/\b(stairs?|stair|winder|landing|railing|spiral|space-saver|outdoor steps)\b/,"stairs",["hall"]],[/\b(treadmill|power rack|rower|rowing|spin bike|dumbbell|punching|yoga|elliptical|cross trainer|gym|wall bars|fitness|smart trainer|kettlebell|massage chair|water cooler|exercise)\b/,"sport",["hobby"]],[/\b(kids|loft bed|teepee|tipi|play kitchen|play mat|play tower|toy|toys|rocking horse|cuddle|cosy corner|ball pit|house bed|baby|crib|cot|changing table|children)\b/,"kids",["kids"]],[/\b(lamp|lamps|lantern|torch|lights|spotlight|downlight|pendant|light cove|led niche|light pillar|ceiling panel|wall light|workshop light|under-cabinet light|night light|star projector|star ceiling|garden spots|up and down|candelabra)\b/,"lamp",null],[/\b(herb garden|tree|shrub|brush|plant|plants|monstera|flower|pots|pampas)\b/,"plant",null],[/\b(tv|television|projector|projection screen|screen|speaker|subwoofer|soundbar|receiver|turntable|record shelf|game console|hi-fi|cinema seat|cinema|acoustic|bass trap|smart display|media wall|arcade|monitor|sim racing|piano)\b/,"media",null],[/\b(fridge|freezer|oven|hob|cooker|dishwasher|microwave|coffee|kettle|toaster|mixer|hood|washer|washing machine|dryer|vacuum|ironing|wine|range|popcorn)\b/,"appliance",null],[/\b(wallbox|home battery|inverter|solar|balcony|fuse box|meter cabinet|grid)\b/,"energy",null],[/\b(heat pump|boiler|buffer tank|manifold|ventilation|radiator|fan|air purifier|humidifier|dehumidifier|thermostat|water softener|water pump|hot water|patio heater|fireplace|wood stove|chimney|stove)\b/,"heating",null],[/\b(server|network|nas|router|access point|wi-fi|printer|filament|siren|smoke detector|camera|baby monitor|phone booth|smart home|sensor|leak|switch|socket|compressor|door opener|alarm clock|clock)\b/,"tech",null],[/\b(hot tub|outdoor|garden|patio|pergola|parasol|grill|greenhouse|raised bed|shed|trampoline|sprinkler|irrigation|rain barrel|rotary|awning|mower|fire bowl|hammock|lounger)\b/,"outdoor",["garden"]],[/\b(base unit|drawer unit|sink unit|wall unit|corner base|corner wall|pantry|kitchen|island|breakfast bar|spice rack|trolley|worktop|sink)\b/,"kitchen",["kitchen"]],[/\b(bathtub|tub|shower|toilet|wc|bidet|bathroom|washbasin|basin|sauna|whirlpool)\b/,"bath",["bath"]],[/\b(bed|beds|boxspring|box-spring|futon|canopy)\b/,"bed",["bedroom"]],[/\b(wardrobe|closet|clothes|dresser|chest of|nightstand|bedside)\b/,"storage",["bedroom"]],[/\b(desk|office|whiteboard|filing|file cabinet)\b/,"office",["office"]],[/\b(sofa|chesterfield|chaise|r[ée]camière|recamiere|lounge set)\b/,"sofa",["living"]],[/\b(table|tables|workbench|vanity)\b/,"table",null],[/\b(armchair|chair|chairs|stool|stools|bench|recliner|bean bag|pouf|seat|rocking)\b/,"seating",null],[/\b(waste|bin|mailbox|drying rack|basket|coat|laundry|hooks)\b/,"household",null],[/\b(shelf|shelves|cabinet|sideboard|lowboard|highboard|vitrine|display cabinet|cube|rack|bookcase|tool wall|shoe|console table)\b/,"storage",null],[/\b(column|beam|beams|partition|sliding wall|divider|podium|platform|gallery|curtain|niche|built-in)\b/,"architecture",[]],[/\b(rug|vase|picture|painting|mirror|pumpkin|cobweb|garland|gravestone|grave|skeleton|cauldron|ghost|broom|candle|deco)\b/,"deco",null]],Np=/\b(mirror|towel|laundry|washer|cabinet|shelf|plant|fan|rain shower)\b/;function Bp(r){return`${r.id.replace(/_/g," ")} ${r.name.en??""}`.toLowerCase()}function qp(r,t){var a;let e=t.group&&Gs.includes(t.group)?t.group:null,n=(a=t.room)==null?void 0:a.filter(l=>Ys.includes(l)),i=r.replace(/^mastershort\./,""),o=Vp[i]??[];if(e)return{kind:e,rooms:n??o};let s=Bp(t);if(i==="bath"&&Np.test(s)&&!/\b(washing machine cabinet|fan)\b/.test(s))return{kind:"bath",rooms:n??["bath"]};for(let[l,d,c]of Wp)if(l.test(s))return{kind:d,rooms:n??(c&&c.length?[...new Set([...c,...o])]:o)};return{kind:"deco",rooms:n??o}}function Ld(r){let t=r.toLowerCase(),e=[[/kinder|kids|child|niñ|bambin|enfant|dziec|děts|barn|lapsi|gyerek|copi|otro|儿童|kinderkamer/,"kids"],[/schlaf|bedroom|dormit|camera da letto|chambre|slaapkamer|sypial|ložnic|sover|makuu|háló|dormitor|spaln|卧室|soveværelse/,"bedroom"],[/wohn|living|lounge|salon|soggiorno|sala de estar|woonkamer|obývací|stue|olohuone|nappali|sufrag|dnevn|客厅/,"living"],[/\bess|dining|comedor|pranzo|salle à manger|eetkamer|jadal|jídel|spise|ruokailu|étkez|jedil|餐厅/,"dining"],[/küche|kueche|kitchen|cocina|cucina|cuisine|keuken|kuchn|kuchyn|kjøkken|køkken|keittiö|konyha|bucăt|kuhinj|厨房/,"kitchen"],[/\bbad\b|bath|baño|bagno|salle de bain|badkamer|łazienk|koupeln|baderom|badevær|kylpy|fürdő|baie|kopaln|wc|toilet|gäste|guest|浴室|dusch|shower/,"bath"],[/büro|buero|office|arbeit|studio|bureau|kantoor|biuro|pracovn|kontor|työhuone|iroda|birou|pisarn|gaming|办公/,"office"],[/flur|diele|hall|corridor|entrance|eingang|ingresso|gang|hal\b|przedpok|chodba|entré|eteinen|előszoba|hol\b|hodnik|treppe|stair|walk/,"hall"],[/hauswirtschaft|hwr|utility|technik|keller|wasch|laundry|lavander|buanderie|berging|bijkeuken|pralni|prádeln|vaskerom|kodinhoito|mosó|tehnic|pralnic|cellar|basement|abstell|storage|vorrat|pantry|heizung|boiler/,"utility"],[/garage|carport|werkstatt|workshop|garaje|garaż|garáž|verkstad|autotalli|garázs|garaj|garaž|车库/,"garage"],[/garten|garden|terrasse|terrace|balkon|balcony|jardin|giardino|tuin|ogród|zahrad|hage|have|puutarha|kert|grădin|vrt|pool|yard|patio|einfahrt|driveway|花园/,"garden"],[/fitness|gym|sport|hobby|kino|cinema|heimkino|home theater|spiel|play|party|bar\b|sauna|wellness/,"hobby"]];for(let[n,i]of e)if(n.test(t))return i;return null}var Kp=/\s*\(?\b\d+(?:[.,]\d+)?\s*(?:[×x]\s*\d+(?:[.,]\d+)?)*\s*(?:cm|m|l|u|″|"|-seater|-sitzer|-door|-türig|-drawer|-teilig|-piece|seats|parts)?\)?/gi;function Up(r){let t=r.replace(Kp," ").replace(/\s+(mit|with|avec|con)\s*$/i,"").replace(/\s{2,}/g," ").replace(/^[\s,–-]+|[\s,–-]+$/g,"").trim();return t?t[0].toUpperCase()+t.slice(1):r}function Ad(r){let t=[...r.matchAll(/\d+(?:[.,]\d+)?(?:\s*[×x]\s*\d+(?:[.,]\d+)?)*/g)].map(n=>n[0].replace(/\s*[×x]\s*/g," \xD7 "));if(t.length)return t.join(" \xB7 ");let e=r.match(/\b(links|rechts|left|right|izquierda|derecha)\b/i);return e?e[1].toLowerCase():null}function Gp(r){return/\b(links|left|izquierda)\b/i.test(r)?"left":/\b(rechts|right|derecha)\b/i.test(r)?"right":null}function Yp(r){return r.replace(/\b(links|rechts|left|right|izquierda|derecha)\b/i,t=>{let n={links:"rechts",rechts:"links",left:"right",right:"left",izquierda:"derecha",derecha:"izquierda"}[t.toLowerCase()]??t;return t[0]===t[0].toUpperCase()?n[0].toUpperCase()+n.slice(1):n})}function Qp(r){if(r.family)return r.family;let t=r.id.match(/^(.*?)_(\d+(?:x\d+)?|left|right|links|rechts)$/);return t?t[1]:null}var zd=new Set(["garden"]),Id={sofa:"sofa couch sof\xE1",seating:"stuhl sessel hocker bank sitz chair stool bench seat silla sill\xF3n taburete banco asiento",table:"tisch table mesa",storage:"schrank regal kommode vitrine cabinet shelf dresser wardrobe armario estanter\xEDa c\xF3moda vitrina",bed:"bett bed cama",kitchen:"k\xFCche kitchen cocina",appliance:"ger\xE4t ger\xE4te appliance electrodom\xE9stico aparato",bath:"bad bath ba\xF1o",lamp:"lampe lampen leuchte licht lamp light l\xE1mpara luz",media:"tv fernseher lautsprecher audio speaker tele televisor altavoz",office:"b\xFCro schreibtisch desk office oficina escritorio",tech:"technik smart home sensor t\xE9cnica dom\xF3tica",heating:"heizung heizk\xF6rper klima heating climate calefacci\xF3n radiador clima",energy:"energie strom solar energy power energ\xEDa",household:"haushalt household hogar",deco:"deko dekoration decoration decoraci\xF3n",plant:"pflanze pflanzen baum plant tree planta \xE1rbol",outdoor:"garten au\xDFen drau\xDFen garden outdoor jard\xEDn exterior",kids:"kinder kids ni\xF1os",sport:"fitness sport deporte",pets:"haustier tier pet mascota animal",vehicle:"auto fahrzeug car vehicle coche veh\xEDculo",stairs:"treppe gel\xE4nder stairs railing escalera barandilla",architecture:"architektur architecture arquitectura"};function Od(r){let t=[];for(let n of r.basics){let i=Rd[n];if(!i)continue;let[o,s]=i,a=r.basicName(n);t.push({type:n,key:n,label:a,search:`${a} ${r.basicNameEn(n)} ${n.replace(/_/g," ")} ${r.kindName(o)} ${Id[o]}`,kind:o,rooms:s,electric:tn(n),light:Si.has(n),outdoor:s.length>0&&s.every(l=>zd.has(l)),size:r.size(n),pack:null,packLabel:null,packRelease:0,family:null,variant:null})}for(let n of r.packs){if(!n.items.length)continue;let i=ve(n);for(let o of n.items){let{kind:s,rooms:a}=qp(n.id,o),l=Fe(n.id,o.id),d=ce(o);t.push({type:l,key:l,label:d,search:`${Object.values(o.name).join(" ")} ${o.id.replace(/_/g," ")} ${i} ${n.name} ${r.kindName(s)} ${Id[s]} ${(o.tags??[]).join(" ")}`,kind:s,rooms:a,electric:!!o.electric||!!o.light,light:!!o.light,outdoor:a.length>0&&a.every(c=>zd.has(c)),size:o.size,pack:n.id,packLabel:i,packRelease:n.release??1,family:Qp(o),variant:o.variant?o.variant[r.language.split("-")[0]]??o.variant.en??Object.values(o.variant)[0]??null:Ad(d)})}}let e=new Map(t.map(n=>[n.type,n]));for(let n of[...t]){if(!Gp(n.label)||n.mirror)continue;let o=n.type.replace(/(_|\b)(left|right|links|rechts)(?=$|[_\s)])/i,(a,l,d)=>l+({left:"right",right:"left",links:"rechts",rechts:"links"}[d.toLowerCase()]??d));if(o!==n.type&&e.has(o))continue;let s=Yp(n.label);t.push({...n,key:`${n.type}#m`,mirror:!0,label:s,search:`${n.search} ${s}`,family:n.family??n.type,variant:Ad(s)}),n.family||(n.family=n.type)}return t}function Fd(r){return r.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/ß/g,"ss")}function Cd(r,t){let e=Fd(t.query).split(/\s+/).filter(Boolean);return r.filter(n=>{if(t.room&&n.rooms.length&&!n.rooms.includes(t.room)||t.electric&&!n.electric||t.light&&!n.light||t.outdoor&&!n.outdoor)return!1;if(!e.length)return!0;let i=Fd(n.search);return e.every(o=>i.includes(o))})}function Hd(r,t){let e=r.filter(s=>s.kind===t),n=new Map;for(let s of e){if(!s.family)continue;let a=`${s.pack??"basic"}:${s.family}`;n.set(a,[...n.get(a)??[],s])}let i=[],o=new Set;for(let s of e){if(o.has(s.key))continue;let a=s.family?`${s.pack??"basic"}:${s.family}`:null,l=a?n.get(a):void 0;if(a&&l&&l.length>1){for(let c of l)o.add(c.key);let d=[...new Set(l.flatMap(c=>c.rooms))];i.push({key:a,label:Up(s.label),kind:t,rooms:d,entries:l})}else o.add(s.key),i.push({key:s.key,label:s.label,kind:t,rooms:s.rooms,entries:[s]})}return i}function Qs(r,t){let[e,n]=r,i=s=>Math.round(s*100),o=t.startsWith("de")||t.startsWith("fr")||t.startsWith("it")||t.startsWith("es")||t.startsWith("nl")?",":".";return e>=10||n>=10?`${(Math.round(e*10)/10).toString().replace(".",o)} \xD7 ${(Math.round(n*10)/10).toString().replace(".",o)} m`:`${i(e)} \xD7 ${i(n)} cm`}var Jp="neonplan3d-thumbs",oi="thumbs",Js=new Map,so=null;function jd(){return so||(so=new Promise(r=>{try{if(typeof indexedDB>"u")return r(null);let t=indexedDB.open(Jp,1);t.onupgradeneeded=()=>t.result.createObjectStore(oi),t.onsuccess=()=>r(t.result),t.onerror=()=>r(null),t.onblocked=()=>r(null)}catch{r(null)}}),so)}async function Zp(r){let t=await jd();return t?new Promise(e=>{try{let n=t.transaction(oi,"readonly").objectStore(oi).get(r);n.onsuccess=()=>e(typeof n.result=="string"?n.result:null),n.onerror=()=>e(null)}catch{e(null)}}):null}async function Xp(r,t){let e=await jd();if(e)try{e.transaction(oi,"readwrite").objectStore(oi).put(t,r)}catch{}}async function Dd(r,t){let e=Js.get(r);if(e)return e;let n=await Zp(r);if(n)return Js.set(r,n),n;let i=await t();return i&&(Js.set(r,i),Xp(r,i)),i}var th=10,Vd=24,eh=96,Wd="neonplan3d.lib.open",Nd="neonplan3d.lib.fav",Bd="neonplan3d.lib.recent";function Zs(r,t){try{let e=localStorage.getItem(r);return e?JSON.parse(e):t}catch{return t}}function Xs(r,t){try{localStorage.setItem(r,JSON.stringify(t))}catch{}}var tr=class extends Ht{static properties={entries:{attribute:!1},language:{attribute:!1},roomHint:{attribute:!1},admin:{type:Boolean},lite:{type:Boolean},t:{attribute:!1},thumb:{attribute:!1},_query:{state:!0},_room:{state:!0},_electric:{state:!0},_light:{state:!0},_outdoor:{state:!0},_open:{state:!0},_fav:{state:!0},_recent:{state:!0},_thumbs:{state:!0},_shown:{state:!0},_limits:{state:!0}};roomTouched=!1;observer=null;observed=new WeakSet;wanted=new Set;drawing=0;queue=[];constructor(){super(),this.entries=[],this.language="en",this.roomHint=null,this.admin=!0,this.lite=(navigator.hardwareConcurrency??4)<=2||(navigator.deviceMemory??4)<=2,this.t=t=>t,this.thumb=null,this._query="",this._room=null,this._electric=!1,this._light=!1,this._outdoor=!1,this._open=new Set(Zs(Wd,["sofa","lamp"])),this._fav=Zs(Nd,[]),this._recent=Zs(Bd,[]),this._thumbs=new Map,this._shown=new Map,this._limits=new Map}willUpdate(t){if(t.has("roomHint")&&!this.roomTouched&&(this._room=this.roomHint),t.has("entries")){let e=new Set(this.entries.map(n=>n.key));this._fav=this._fav.filter(n=>e.has(n)),this._recent=this._recent.filter(n=>e.has(n)),this.queue=[]}}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.observer)==null||t.disconnect(),this.observer=null}updated(){if(this.lite||!this.thumb)return;this.observer??=new IntersectionObserver(n=>{for(let i of n){if(!i.isIntersecting)continue;let o=this.byKey.get(i.target.dataset.key??"");o&&this.want(o)}},{root:null,rootMargin:"200px"});let t=this.byKey,e=window.innerHeight+200;for(let n of this.renderRoot.querySelectorAll(".fp3d-lc-pic[data-key]")){this.observed.has(n)||(this.observed.add(n),this.observer.observe(n));let i=t.get(n.dataset.key??"");if(!i||this._thumbs.has(i.type))continue;let o=n.getBoundingClientRect();o.bottom>=-200&&o.top<=e&&this.want(i)}}get byKey(){return new Map(this.entries.map(t=>[t.key,t]))}showVariant(t,e,n){if(this.lite||!this.thumb){this.preview((e==null?void 0:e.type)??null,n);return}let i=new Map(this._shown);e?i.set(t,e.key):i.delete(t),this._shown=i,e&&this.want(e)}want(t){this._thumbs.has(t.type)||this.wanted.has(t.type)||(this.wanted.add(t.type),this.queue.push(t),this.drain())}drain(){for(;this.drawing<2&&this.queue.length;){let t=this.queue.shift();this.drawing++;let e=`${t.type}|${t.packRelease}|${eh}|1`;Dd(e,()=>this.thumb?this.thumb(t):Promise.resolve(null)).then(n=>{if(n){let i=new Map(this._thumbs);i.set(t.type,n),this._thumbs=i}else this.wanted.delete(t.type)}).catch(()=>this.wanted.delete(t.type)).finally(()=>{this.drawing--,this.drain()})}}pick(t){this.admin&&(this._recent=[t.key,...this._recent.filter(e=>e!==t.key)].slice(0,th),Xs(Bd,this._recent),this.dispatchEvent(new CustomEvent("library-add",{detail:{type:t.type,mirror:!!t.mirror},bubbles:!0,composed:!0})))}preview(t,e){this.lite&&this.dispatchEvent(new CustomEvent("library-preview",{detail:{type:t,element:e},bubbles:!0,composed:!0}))}toggleFav(t){this._fav=this._fav.includes(t)?this._fav.filter(e=>e!==t):[...this._fav,t],Xs(Nd,this._fav)}toggleOpen(t){let e=new Set(this._open);e.has(t)?e.delete(t):e.add(t),this._open=e,Xs(Wd,[...e])}setRoom(t){this.roomTouched=!0,this._room=t}get hits(){return Cd(this.entries,{query:this._query,room:this._room,electric:this._electric,light:this._light,outdoor:this._outdoor})}render(){let t=this.t,e=this.hits,n=this._query.trim().length>0,i=this.byKey,o=new Set(e.map(u=>u.key)),s=u=>({key:u.key,label:u.label,kind:u.kind,rooms:u.rooms,entries:[u]}),a=this._recent.map(u=>i.get(u)).filter(u=>!!u&&o.has(u.key)),l=this._fav.map(u=>i.get(u)).filter(u=>!!u&&o.has(u.key)),d=Gs.map(u=>({kind:u,cards:Hd(e,u)})).filter(u=>u.cards.length),c=d.length&&!d.some(u=>this._open.has(u.kind))?d[0].kind:null;return g`<input
        class="fp3d-search"
        type="search"
        placeholder=${t("furniture_search")}
        .value=${this._query}
        @input=${u=>this._query=u.target.value}
        @keydown=${u=>{u.key==="Escape"&&(this._query="")}}
      />
      <div class="fp3d-lib-rooms" role="group">
        <button class="fp3d-chip ${this._room===null?"on":""}" @click=${()=>this.setRoom(null)}>${t("lib_room_all")}</button>
        ${Ys.map(u=>g`<button class="fp3d-chip ${this._room===u?"on":""}" @click=${()=>this.setRoom(u)}>${t(`lib_room_${u}`)}</button>`)}
      </div>
      <div class="fp3d-lib-chips">
        <button class="fp3d-chip fp3d-chip-f ${this._electric?"on":""}" @click=${()=>this._electric=!this._electric}>⚡ ${t("lib_chip_electric")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._light?"on":""}" @click=${()=>this._light=!this._light}>💡 ${t("lib_chip_light")}</button>
        <button class="fp3d-chip fp3d-chip-f ${this._outdoor?"on":""}" @click=${()=>this._outdoor=!this._outdoor}>🌳 ${t("lib_chip_outdoor")}</button>
      </div>
      ${this.roomHint&&this._room===this.roomHint&&!this.roomTouched?g`<p class="fp3d-lib-hint">${t("lib_hint_room")}</p>`:$}
      ${e.length?$:g`<p class="fp3d-lib-hint">${t("furniture_search_none")}</p>`}
      ${a.length?this.section("recent",`\u{1F558} ${t("lib_recent")}`,a.map(s),n,!0):$}
      ${l.length?this.section("fav",`\u2605 ${t("lib_favorites")}`,l.map(s),n,!0):$}
      ${d.map(u=>this.section(u.kind,t(`lib_kind_${u.kind}`),u.cards,n||u.kind===c,!1))}`}section(t,e,n,i,o){let s=i||o||this._open.has(t),a=this._limits.get(t)??Vd,l=n.slice(0,a),d=n.reduce((c,u)=>c+u.entries.length,0);return g`<button class="fp3d-lib-head fp3d-lib-toggle" aria-expanded=${s} @click=${()=>o?void 0:this.toggleOpen(t)}>
        <span class="fp3d-lib-caret">${o?"":s?"\u25BE":"\u25B8"}</span>${e} <span class="fp3d-lib-count">${d}</span>
      </button>
      ${s?g`<div class="fp3d-lib-grid">${Pd(l,c=>c.key,c=>this.card(c))}</div>
            ${n.length>a?g`<button class="fp3d-lib-more" @click=${()=>{let c=new Map(this._limits);c.set(t,a+Vd*2),this._limits=c}}>${this.t("lib_more",{n:n.length-a})}</button>`:$}`:$}`}card(t){let e=this.t,n=t.entries[0],i=t.entries.length>1,o=this._fav.includes(n.key),s=this._shown.get(n.key),a=s&&t.entries.find(c=>c.key===s)||n,l=this._thumbs.get(a.type)??this._thumbs.get(n.type),d=n.light?"\u{1F4A1}":n.electric?"\u26A1":"";return g`<div class="fp3d-lc ${i?"fp3d-lc-family":""}" title=${a.label} @mouseleave=${()=>i&&this.showVariant(n.key,null,null)}>
      <button
        class="fp3d-lc-main"
        ?disabled=${!this.admin}
        @click=${()=>this.pick(n)}
        @mouseenter=${c=>this.preview(n.type,c.currentTarget)}
        @focus=${c=>this.preview(n.type,c.currentTarget)}
        @mouseleave=${()=>this.preview(null,null)}
        @blur=${()=>this.preview(null,null)}
      >
        ${this.lite?$:g`<span class="fp3d-lc-pic" data-key=${n.key}>${l?g`<img src=${l} alt="" loading="lazy" class=${(this._thumbs.has(a.type)?a:n).mirror?"fp3d-lc-mirrored":""} />`:g`<span class="fp3d-lc-wait"></span>`}</span>`}
        <span class="fp3d-lc-label">${t.label}${d?g` <span class="fp3d-lc-badge">${d}</span>`:$}</span>
        <span class="fp3d-lc-sub">${i?e("lib_sizes",{n:t.entries.length}):Qs(n.size,this.language)}${n.packLabel?g` · ${n.packLabel}`:g` · ${e("lib_basic")}`}</span>
      </button>
      ${i?g`<div class="fp3d-lc-chips">
            ${t.entries.map(c=>g`<button
                title="${c.label} · ${Qs(c.size,this.language)}"
                ?disabled=${!this.admin}
                class="fp3d-lc-chip ${a.key===c.key&&i&&s?"on":""}"
                @click=${()=>this.pick(c)}
                @mouseenter=${u=>this.showVariant(n.key,c,u.currentTarget)}
                @focus=${u=>this.showVariant(n.key,c,u.currentTarget)}
                @mouseleave=${()=>this.preview(null,null)}
                @blur=${()=>this.preview(null,null)}
              >${c.variant??c.label}</button>`)}
          </div>`:$}
      <button class="fp3d-lc-fav ${o?"on":""}" title=${e(o?"lib_fav_remove":"lib_fav_add")} aria-label=${e(o?"lib_fav_remove":"lib_fav_add")} @click=${()=>this.toggleFav(n.key)}>${o?"\u2605":"\u2606"}</button>
    </div>`}static styles=[Ke,Gt`
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
    `]};customElements.get("fp3d-library")||customElements.define("fp3d-library",tr);function Pe(r,t){if(!_e(t))return ae(r,`furn_${t}`);let e=gt(t);return e?ce(e):ae(r,"pack_missing_item")}var er=class extends Ht{static properties={hass:{attribute:!1},packs:{attribute:!1},building:{attribute:!1},_packMsg:{state:!0}};constructor(){super(),this._packMsg=null}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!1}t(t,e){return ae(this.hass,t,e)}render(){let t=Ql();return g`<div class="fp3d-ext">
      <header class="fp3d-ext-head">
        <h2>${this.t("ext_title")}</h2>
        <p class="fp3d-sub">${this.t("ext_intro")}</p>
        <div class="fp3d-ext-actions">
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
          <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
          <a class="fp3d-btn" href=${sn("extensions")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a>
        </div>
      </header>
      <section class="fp3d-ext-card">
        <h3>${this.t("ext_pro")}</h3>
        <div class="fp3d-ext-pro">
          ${Ni.filter(e=>xe(e)).map(e=>g`<div class="fp3d-ext-feature ${t.has(e)?"fp3d-ext-on":""}">
              <b>${t.has(e)?"\u2713":"\u{1F512}"} ${this.t(`pro_name_${e}`)}</b>
              <span class="fp3d-sub">${this.t(`pro_feature_${e}`)}</span>
              <span class="fp3d-ext-links">
                ${t.has(e)?g`<span class="fp3d-ext-state">${this.t("ext_active")}</span>`:$}
                <a class="fp3d-ext-link" href=${sn(e)} target="_blank" rel="noopener">${this.t("manual_more")}</a>
              </span>
            </div>`)}
        </div>
      </section>
      ${this.renderFun(t)} ${this.renderPacks()}
    </div>`}editBuilding(t){if(!this.building)return;let e=structuredClone(this.building);t(e),this.dispatchEvent(new CustomEvent("building-edit",{detail:e,bubbles:!0,composed:!0}))}renderFun(t){var d,c;let e=Bi.filter(u=>t.has(u));if(!e.length)return $;let n=((d=this.building)==null?void 0:d.settings.pets)??null,i=(n==null?void 0:n.list)??[],o=(n==null?void 0:n.on)!==!1,s=(((c=this.building)==null?void 0:c.floors)??[]).filter(u=>u.rooms.length).sort((u,p)=>u.elevation-p.elevation),a=u=>this.editBuilding(p=>{var f,m;let h={on:((f=p.settings.pets)==null?void 0:f.on)!==!1,list:[...((m=p.settings.pets)==null?void 0:m.list)??[]]};u(h),p.settings.pets=h}),l=(u,p)=>a(h=>h.list=h.list.map(f=>f.id===u?{...f,...p}:f));return g`<section class="fp3d-ext-card">
      <h3>🎈 ${this.t("fun_title")}</h3>
      <p class="fp3d-sub">${this.t("fun_intro")}</p>
      ${e.map(u=>u==="fun_halloween"?this.renderHalloween():g`<div class="fp3d-ext-feature fp3d-ext-on">
              <b>✓ ${this.t("fun_name_pets")}</b>
              <span class="fp3d-sub">${this.t("fun_feature_pets")}</span>
              ${this.isAdmin&&this.building?g`<label class="fp3d-check"><input type="checkbox" .checked=${o} @change=${p=>a(h=>h.on=p.target.checked)} /> ${this.t("pets_show")}</label>
                    ${i.map(p=>g`<div class="fp3d-pet-row">
                        <select
                          aria-label=${this.t("pet_kind")}
                          @change=${h=>{let f=h.target.value,m=Hn[f];l(p.id,{kind:f,fur:m.includes(p.fur)?p.fur:m[0],breed:f==="dog"?p.breed??"labrador":null})}}
                        >
                          ${["cat","dog","rabbit"].map(h=>g`<option value=${h} ?selected=${p.kind===h}>${this.t(`pet_kind_${h}`)}</option>`)}
                        </select>
                        ${p.kind==="dog"?g`<select aria-label=${this.t("pet_breed")} @change=${h=>l(p.id,{breed:h.target.value})}>
                              ${xa.map(h=>g`<option value=${h} ?selected=${(p.breed??"labrador")===h}>${this.t(`pet_breed_${h}`)}</option>`)}
                            </select>`:$}
                        <input type="text" maxlength="30" .value=${p.name} placeholder=${this.t("pet_name")} aria-label=${this.t("pet_name")} @change=${h=>l(p.id,{name:h.target.value.trim()})} />
                        <select aria-label=${this.t("pet_fur")} @change=${h=>l(p.id,{fur:h.target.value})}>
                          ${Hn[p.kind].map(h=>g`<option value=${h} ?selected=${p.fur===h}>${this.t(`pet_fur_${h}`)}</option>`)}
                        </select>
                        ${s.length>1?g`<select title=${this.t("pet_floor")} aria-label=${this.t("pet_floor")} @change=${h=>l(p.id,{floor_id:h.target.value||null})}>
                              ${s.map((h,f)=>g`<option value=${f===0?"":h.id} ?selected=${(p.floor_id??s[0].id)===h.id}>🏠 ${h.name}</option>`)}
                            </select>`:$}
                        <button class="fp3d-btn" title=${this.t("delete")} @click=${()=>a(h=>h.list=h.list.filter(f=>f.id!==p.id))}>✕</button>
                      </div>`)}
                    ${i.length<8?g`<button class="fp3d-btn" @click=${()=>a(p=>p.list.push({id:`pet_${Date.now().toString(36)}`,kind:"cat",name:"",fur:Hn.cat[p.list.length%Hn.cat.length]}))}>+ ${this.t("pet_add")}</button>`:$}`:$}
            </div>`)}
    </section>`}renderHalloween(){var e,n;let t=((n=(e=this.building)==null?void 0:e.settings.halloween)==null?void 0:n.ghost)!==!1;return g`<div class="fp3d-ext-feature fp3d-ext-on">
      <b>✓ 🎃 ${this.t("fun_name_halloween")}</b>
      <span class="fp3d-sub">${this.t("fun_feature_halloween")}</span>
      ${this.isAdmin&&this.building?g`<label class="fp3d-check"
            ><input
              type="checkbox"
              .checked=${t}
              @change=${i=>this.editBuilding(o=>o.settings.halloween={...o.settings.halloween??{},ghost:i.target.checked})}
            />
            ${this.t("halloween_ghost")}</label
          >`:$}
    </div>`}renderPacks(){let t=this.packs??[];return g`<section class="fp3d-ext-card">
      <h3>${this.t("packs")}</h3>
      ${t.map(e=>{var n;return g`<div class="fp3d-pack">
          <div>
            <b>${ve(e)}</b>
            <span class="fp3d-sub">${(n=e.features)!=null&&n.length?this.t("pack_features",{publisher:e.publisher,n:e.features.length}):this.t("pack_by",{publisher:e.publisher,n:e.items.length})}</span>
            ${e.licensee?g`<span class="fp3d-sub">${this.t("pack_licensed",{name:e.licensee})}${e.release&&e.release>1?` \xB7 v${e.release}`:""}</span>`:$}
            ${(e.features??[]).some(i=>!Yl(i))?g`<span class="fp3d-sub fp3d-pack-error">${this.t("pack_needs_update")}</span>`:$}
          </div>
          <button class="fp3d-btn fp3d-danger" @click=${()=>this.deletePack(e)}>${this.t("pack_remove")}</button>
        </div>`})}

      <label class="fp3d-btn fp3d-primary fp3d-pack-import">
        ${this.t("pack_import")}
        <input type="file" accept=".fp3dpack,.json,application/json" multiple hidden @change=${e=>this.importPackFile(e)} />
      </label>
      ${this._packMsg?g`<p class="fp3d-sub ${this._packMsg.ok?"fp3d-notice":"fp3d-pack-error"}">${this._packMsg.text}</p>`:$}
      <p class="fp3d-sub">${this.t("packs_hint")}</p>
    </section>`}async importPackFile(t){let e=t.target,n=[...e.files??[]];if(e.value="",!n.length||!this.hass)return;let i=[],o=[];for(let a of n)try{let l=await Wr(this.hass,await a.text());i.push(this.t("pack_imported",{name:l.name,publisher:l.publisher,n:l.items}))}catch(l){let{code:d,message:c}=l??{},u=`pack_error_${d}`,p=this.t(u,{detail:c??String(l)});o.push(`${a.name}: ${p===u?this.t("pack_error_other",{detail:c??String(l)}):p}`)}i.length&&this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let s=n.length>1?[this.t("packs_imported_n",{n:i.length,total:n.length})]:[];this._packMsg={ok:o.length===0,text:[...s,...i,...o].join(" \xB7 ")}}async deletePack(t){!this.hass||!confirm(this.t("pack_remove_confirm",{name:ve(t)}))||(await Nr(this.hass,t.id),this._packMsg=null,this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0})))}static styles=[Ke,oo,Gt`
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
    `]};customElements.get("fp3d-extensions")||customElements.define("fp3d-extensions",er);var ro=10,Kd=new Set(["vertex","room","device","opening","furniture","furnset","rotate","resize","outdoor","roofmove","roofcorner","roofvertex","outvertex","outbox","pipept","poolport","pooldev","pooljoint","solarmove","solarturn","cablept","holopt","bgmove","bgscale","bgrotate"]),Ud=100,Gd=/^(switch|input_boolean)\./,Yd=(r,t)=>{let e=((r+t)%360+360)%360;return e>180?e-360:e},nr={base:["kitchen","sink","stove","dishwasher","sideboard","dresser","tv_board","nightstand","washbasin","washer","dryer","worktop","desk"],hang:["kitchen_wall","tv_wall","shelf","lamp_wall","radiator","ac_unit","led_strip"],tall:["kitchen_tall","fridge","wardrobe","tall_cabinet","shelf","coat_rack"],living:["sofa","armchair","bed","bunk_bed","bench","corner_bench","plant"],light:["lamp_wall","lamp_floor","led_strip","lamp_table","wall_switch"]},ih=new Set(["kitchen_wall","tv_wall","lamp_wall","shelf","led_strip","ac_unit"]),ao=new Set(["kitchen","kitchen_wall","kitchen_tall","sideboard","dresser","tv_board","worktop","wardrobe","tall_cabinet","shelf","desk"]),oh={kitchen:.15,kitchen_wall:.2,kitchen_tall:.3,sideboard:.4,dresser:.4,tv_board:.6,worktop:.1,wardrobe:.4,tall_cabinet:.3,shelf:.25,desk:.6},lo=10,z=r=>Math.round(r*1e3)/1e3,ir=.06;function le(r,t){r&&Object.assign(r,t)}function lr(r,t){if(r.length<3)return r.slice(1);let e=r[0],n=r[r.length-1],i=0,o=-1,s=Math.hypot(n.s-e.s,n.y-e.y)||1;for(let a=1;a<r.length-1;a++){let l=r[a],d=Math.abs((n.s-e.s)*(e.y-l.y)-(e.s-l.s)*(n.y-e.y))/s;d>i&&([i,o]=[d,a])}return i<=t||o<0?[]:[...lr(r.slice(0,o+1),t),r[o],...lr(r.slice(o),t)]}function sh(r){if(r.length<2)return r;let t=s=>Math.round(s*20)/20,e=[{s:r[0].s,y:r[0].y}];for(let s=1;s<r.length;s++){let a=e[e.length-1],l=r[s],c=Math.abs(l.s-a.s)>=Math.abs(l.y-a.y)?{s:t(l.s),y:a.y}:{s:a.s,y:t(l.y)},u=e.length>1?e[e.length-2]:null;u&&(u.y===a.y&&c.y===a.y||u.s===a.s&&c.s===a.s)&&e.pop(),!(Math.hypot(c.s-e[e.length-1].s,c.y-e[e.length-1].y)<.08&&s<r.length-1)&&e.push(c)}let n=r[r.length-1],i=e[e.length-1];e.pop();let o=e[e.length-1];return o&&Math.abs(n.s-o.s)>=.08&&Math.abs(n.y-o.y)>=.08&&e.push(o.y===i.y||e.length<2?{s:t(n.s),y:o.y}:{s:o.s,y:t(n.y)}),e.push({s:n.s,y:n.y}),e}function pn(r,t,e){let[n,,i]=oe(r,t,0,e);return[z(n),z(i)]}function or(r,t){let e=Zt(r,t),n=0;for(let i=1;i<e.length;i++)n+=Math.hypot(e[i][0]-e[i-1][0],e[i][1]-e[i-1][1],e[i][2]-e[i-1][2]);return n}var Qd={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]},rh=new Set(["parking","stairwell","rug","grid_point","waste_bin","mailbox","wall_switch","wall_socket"]);function sr(r){let t=gt(r);return(t==null?void 0:t.family)==="meter"&&(t.tags??[]).some(e=>/^(gas|water|wasser)$/i.test(e))}var cr=class extends Ht{static properties={_shiftX:{state:!0},_shiftAll:{state:!0},_bgEdit:{state:!0},_bgRuler:{state:!0},_bgRulerLen:{state:!0},_bgLevel:{state:!0},_bgOpen:{state:!0},_shiftZ:{state:!0},hass:{attribute:!1},building:{attribute:!1},narrow:{type:Boolean},packs:{attribute:!1},_preview:{state:!0},_doc:{state:!0},_doc3d:{state:!0},_split:{state:!0},_splitRatio:{state:!0},_backupBusy:{state:!0},_wall3d:{state:!0},_sidePinned:{state:!0},_sideMin:{state:!0},_sideOpen:{state:!0},_floorId:{state:!0},_roomId:{state:!0},_vertex:{state:!0},_openingId:{state:!0},_furnitureId:{state:!0},_multi:{state:!0},_single:{state:!0},_multiMode:{state:!0},_deviceId:{state:!0},_deviceQuery:{state:!0},_devSource:{state:!0},_roofId:{state:!0},_solarId:{state:!0},_solarPick:{state:!0},_roofWinId:{state:!0},_energyNote:{state:!0},_placeHub:{state:!0},_cableId:{state:!0},_expanded:{state:!0},_notice:{state:!0},_history:{state:!0},_spots:{state:!0},_outdoorId:{state:!0},_wallId:{state:!0},_edgeHi:{state:!0},_wallView:{state:!0},_wallSel:{state:!0},_wallMulti:{state:!0},_wallSingle:{state:!0},_wallGap:{state:!0},_wallCat:{state:!0},_wallQuery:{state:!0},_wallFrame:{state:!0},_wallPicTick:{state:!0},_wallPick:{state:!0},_runMode:{state:!0},_techMode:{state:!0},_feedKind:{state:!0},_techAsk:{state:!0},_runDraft:{state:!0},_runSel:{state:!0},_conn:{state:!0},_jointPlace:{state:!0},_card:{state:!0},_cardJoin:{state:!0},_wallView3d:{state:!0},_ctx:{state:!0},_fixedHint:{state:!0},_phoneHint:{state:!0},_floorMenu:{state:!0},_openingPreset:{state:!0},_measureLen:{state:!0},_packages:{state:!0},_rectSize:{state:!0},_tool:{state:!0},_toolMenu:{state:!0},_settingsMenu:{state:!0},_sideWidth:{state:!0},_settingsDialog:{state:!0},_toolOpen:{state:!0},_viewMenu:{state:!0},_draft:{state:!0},_outdoorFree:{state:!0},_outdoorType:{state:!0},_poolShape:{state:!0},_pipeMode:{state:!0},_pipeDraft:{state:!0},_pipeId:{state:!0},_cursor:{state:!0},_guides:{state:!0},_view:{state:!0},_size:{state:!0},_images:{state:!0},_canUndo:{state:!0},_canRedo:{state:!0}};doc3dTimer;lastFurnTap=null;shiftHeld=!1;onShift=t=>this.shiftHeld=t.shiftKey;kitPics=new Map;kitPicsAsked=new Set;cableCache=null;techPress=null;techStroke=null;wvZoom=null;wvTouch=new Map;wvPinch=null;wvTap=null;wvScale=1;techPick=!1;runDrag=null;runHover=null;jointDrag=null;fitDrag=null;runCtx3d=null;wall3dEl=null;wall3dKey="";liftRaf=0;lift=null;wallResize=null;wallDrag=null;wallPics=new Map;wallPicsAsked=new Set;fixedPan=!1;reframe3d=!1;pressTimer=0;pressStart=null;sideDrag=null;past=[];future=[];drag=null;pointers=new Map;pinch=null;fitted=!1;fittedView=null;resizeObserver;loadingImages=new Set;constructor(){super(),this.narrow=!1,this._floorId=null,this._roomId=null,this._vertex=null,this._openingId=null,this._furnitureId=null,this._multi=[],this._single=!1,this._multiMode=!1,this._deviceId=null,this._deviceQuery="",this._devSource="area",this._roofId=null,this._solarId=null,this._solarPick=!1,this._roofWinId=null,this._energyNote=null,this._placeHub=!1,this._cableId=null,this._expanded=new Set,this._notice=null,this._history=null,this._spots=null,this._outdoorId=null,this._wallId=null,this._edgeHi=null,this._wallView=null,this._techMode=!1,this._feedKind=null,this._techAsk=null,this._wallSel=null,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallCat=null,this._wallQuery="",this._wallFrame=null,this._wallPicTick=0,this._wallPick=!1,this._runMode=null,this._runDraft=null,this._runSel=null,this._conn={from:"",vias:[],to:"",to2:""},this._jointPlace=null,this._card=null,this._cardJoin=null,this._wallView3d=(()=>{try{return localStorage.getItem("neonplan3d.wall3d")!=="0"}catch{return!0}})(),this._shiftX=0,this._shiftAll=!1,this._bgEdit=!1,this._bgRuler=null,this._bgRulerLen=0,this._bgLevel=null,this._bgOpen=!1,this._shiftZ=0,this._floorMenu=!1,this._openingPreset="door",this._phoneHint=!0;try{this._phoneHint=localStorage.getItem("neonplan3d.phoneHint")!=="0"}catch{}let t=!1;try{t=localStorage.getItem("neonplan3d.editor3d")==="1"}catch{}this._split=t,this._splitRatio=.55;try{let o=Number(localStorage.getItem("neonplan3d.editorSplit"));o>=20&&o<=80&&(this._splitRatio=o/100)}catch{}this._backupBusy=!1,this._wall3d="cut";try{localStorage.getItem("neonplan3d.walls3d")==="auto"&&(this._wall3d="auto")}catch{}this._doc3d=this._doc,this._sideOpen=!1;let e=!0;try{e=localStorage.getItem("neonplan3d.sidePinned")!=="0"}catch{}this._sidePinned=e;let n=!1;try{n=localStorage.getItem("neonplan3d.sideMin")==="1"}catch{}this._sideMin=n,this._preview=null,this._measureLen=3,this._packages=!1,this._rectSize=[4,3],this._tool="select",this._toolMenu=null,this._settingsMenu=!1;let i=320;try{i=Number(localStorage.getItem("neonplan3d.sideWidth"))||320}catch{}this._sideWidth=Math.min(640,Math.max(280,i)),this._settingsDialog=null,this._toolOpen=null,this._viewMenu=!1,this._draft=[],this._outdoorFree=!1,this._outdoorType="lawn",this._poolShape="rect",this._pipeMode=!1,this._pipeDraft=null,this._pipeId=null,this._cursor=null,this._guides={},this._view={scale:50,ox:40,oy:40},this._size={w:800,h:600},this._images={},this._canUndo=!1,this._canRedo=!1}t(t,e){return ae(this.hass,t,e)}connectedCallback(){super.connectedCallback(),window.addEventListener("keydown",this.onKey),window.addEventListener("keyup",this.onShift)}disconnectedCallback(){var t;super.disconnectedCallback(),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keyup",this.onShift),(t=this.resizeObserver)==null||t.disconnect()}willUpdate(t){var e,n,i;if(t.has("packs")&&ea(this.packs??[]),(t.has("packs")||t.has("hass"))&&this.hass&&((e=this.packs)!=null&&e.some(o=>o.module))&&Ns(this.hass,this.packs).then(()=>this.requestUpdate()),t.has("_doc")&&Ea(this._doc),t.has("_doc")&&(this._split||this._wallView)&&this.queue3d(),(t.has("_split")&&this._split||t.has("_wallView")&&this._wallView)&&(this._doc3d=this._doc),t.has("_runDraft")&&this._wallView&&(this._doc3d=this.docWithDraft()),t.has("_tool")&&this.houseTool&&!this._split&&!this.narrow&&(this._split=!0),t.has("_tool")&&(this.houseTool||t.get("_tool")==="roof"||t.get("_tool")==="energy")&&(this.reframe3d=!0),t.has("building")&&this.building!==this._doc){this._doc=this.building,this._doc3d=this.building;let o=this._doc.settings.editor_floor;this._floorId===null&&o&&this._doc.floors.some(s=>s.id===o)&&(this._floorId=o),this._doc.floors.some(s=>s.id===this._floorId)||(this._floorId=((n=this._doc.floors[0])==null?void 0:n.id)??null),(i=this.floor)!=null&&i.rooms.some(s=>s.id===this._roomId)||(this._roomId=null)}}firstUpdated(){let t=this.renderRoot.querySelector(".fp3d-canvas-wrap");this.resizeObserver=new ResizeObserver(()=>{this._size={w:t.clientWidth,h:t.clientHeight},(!this.fitted||this._view===this.fittedView)&&this._size.w>0&&(this.fitted=!0,this.fit())}),this.resizeObserver.observe(t)}queue3d(){clearTimeout(this.doc3dTimer),this.doc3dTimer=setTimeout(()=>this._doc3d=this.docWithDraft(),150)}onSplitDown(t){let e=t.currentTarget.parentElement,n=t.currentTarget;n.setPointerCapture(t.pointerId);let i=e.getBoundingClientRect(),o=a=>{this._splitRatio=Math.min(.8,Math.max(.2,(a.clientX-i.left)/i.width))},s=()=>{n.removeEventListener("pointermove",o),n.removeEventListener("pointerup",s),n.removeEventListener("pointercancel",s);try{localStorage.setItem("neonplan3d.editorSplit",String(Math.round(this._splitRatio*100)))}catch{}};n.addEventListener("pointermove",o),n.addEventListener("pointerup",s),n.addEventListener("pointercancel",s),t.preventDefault()}toggleSplit(){this._split=!this._split;try{localStorage.setItem("neonplan3d.editor3d",this._split?"1":"0")}catch{}}onFurnitureMoved3d(t){var l;let{id:e,x:n,z:i}=t.detail,o=this._doc.settings.wall_interior,s=this._wallView?this.wallSelection():this._furnitureId?this.selection():[],a=s.includes(e)&&s.length>1?s:[];if(a.length){let d=(l=this.floor)==null?void 0:l.furniture.find(h=>h.id===e);if(!d||a.some(h=>this.isFixedItem("furniture",h)))return;let c=z(n-d.x),u=z(i-d.z),p=new Set(a);this.change((h,f)=>{for(let m of f.furniture)p.has(m.id)&&Object.assign(m,{x:z(m.x+c),z:z(m.z+u)})});return}this.change(d=>{for(let c of d.floors){let u=c.furniture.find(y=>y.id===e);if(!u)continue;let[p,h]=cs(c,u.x,u.z,n,i),[f,m]=ds(c,u,p,h,o),_=Kn(c,u,o),b=_?Math.hypot(_.x-u.x,_.z-u.z):1/0;Object.assign(u,{x:f,z:m});let v=Kn(c,u,o);v&&Math.hypot(v.x-f,v.z-m)<=b+.01&&Object.assign(u,v)}})}onDeviceMoved3d(t){let{id:e,x:n,z:i}=t.detail;this.change(o=>{for(let s of o.floors){let a=s.placements.find(c=>c.entity_id===e);if(!a)continue;let[l,d]=cs(s,a.x,a.z,n,i);Object.assign(a,{x:l,z:d})}})}render3dBar(){var n;if(!this.isAdmin)return $;let t=this.furnitureItem,e=this.device;if(t){let i=ue(t),o=(s,a,l=.05)=>g`<label class="fp3d-3d-size" title=${this.t(`size_${s}`)}
        >${a}
        <input
          type=${this.unit==="imperial"?"text":"number"}
          inputmode="decimal"
          step="0.05"
          min=${l}
          .value=${this.unit==="imperial"?on(t[s]):String(Math.round(t[s]*100)/100)}
          @change=${d=>{let c=this.readLen(d.target.value);c!==null&&c>=l&&this.updateFurniture({[s]:Math.round(c*1e3)/1e3})}}
        />
      </label>`;return g`<div class="fp3d-3d-bar">
        <span>${Pe(this.hass,t.type)}</span>
        ${o("w",this.t("size_short_w"))} ${o("d",this.t("size_short_d"))} ${o("h",this.t("size_short_h"))}
        ${i?g`<label class="fp3d-3d-size" title=${this.t("mount_height")}
              >↕
              <input
                type=${this.unit==="imperial"?"text":"number"}
                inputmode="decimal"
                step="0.05"
                min="0"
                .value=${this.unit==="imperial"?on(t.mount_y??Tt(this.floor,t)):String(Math.round((t.mount_y??Tt(this.floor,t))*100)/100)}
                @change=${s=>{let a=this.readLen(s.target.value);a!==null&&a>=0&&this.updateFurniture({mount_y:Math.round(Math.min(ro,a)*1e3)/1e3})}}
              />
            </label>`:$}
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(-45)}>↺ 45°</button>
        <button class="fp3d-chip" @click=${()=>this.rotateFurniture(45)}>↻ 45°</button>
        ${this.fixButton("furniture",t.id)}
        <button class="fp3d-chip fp3d-danger-chip" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>`}if(e){let i=rt(e.entity_id),o=i==="light",s=i?Ti(i,((n=this.floor)==null?void 0:n.height)??2.5,o?e.mount??"ceiling":null):1;return g`<div class="fp3d-3d-bar">
        <span>${_t(this.hass,e.entity_id)}</span>
        ${o?g`<select class="fp3d-3d-select" title=${this.t("lamp_mount")} @change=${a=>this.updateDevice({mount:a.target.value,y:null})}>
              ${["ceiling","floor","table","wall"].map(a=>g`<option value=${a} ?selected=${a===(e.mount??"ceiling")}>${this.t(`lamp_${a}`)}</option>`)}
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
      </div>`}return $}grab3d=null;surfaceGrabber={start:t=>this.grab3dStart(t),move:t=>this.grab3dMove(t),end:()=>{let t=this.grab3d;this.grab3d=null,t!=null&&t.moved&&this.pushHistory(t.base)}};grab3dStart(t){let e=this._doc,n=$t(e),i=null,o=(a,l,d,c,u=!1)=>{if(!d||u)return;let p=Os(d,t.o,t.d);!p||!Zc(d,c,p.u,p.s)||i&&i.t<=p.t||(i={id:a,win:l,t:p.t,du:p.u-c.u,ds:p.s-c.v})};if(this._tool==="energy")for(let a of e.settings.roof.solar??[])o(a.id,!1,Dt(e,a,n),a,!!a.locked);if(this._tool==="roof")for(let a of e.settings.roof.windows??[])o(a.id,!0,n.find(l=>l.key===a.face)??null,En(a),!!a.locked);if(!i)return!1;let s=i;return this.grab3d={id:s.id,win:s.win,du:s.du,ds:s.ds,base:e,moved:!1},s.win?this._roofWinId=s.id:this.selectSolar(s.id),!0}grab3dMove(t){var h,f;let e=this.grab3d;if(!e)return;let n=e.base,i=e.win?(h=n.settings.roof.windows)==null?void 0:h.find(m=>m.id===e.id):void 0,o=e.win?i?En(i):void 0:(f=n.settings.roof.solar)==null?void 0:f.find(m=>m.id===e.id);if(!o)return;let s=Dt(n,o),a=s!=null&&s.unbounded?[s]:e.win?$t(n):[...$t(n),...fe(n)],l=null;for(let m of a){let _=Os(m,t.o,t.d);_&&Jc(m,_.u,_.s)&&(!l||_.t<l.t)&&(l={face:m,..._})}if(!l)return;let d=l.face,c=.05,u=m=>z(Math.round(m/c)*c),p=Sn(d,{...o,face:d.key,u:u(l.u-e.du),v:u(l.s-e.ds),tilt:d.flat?o.tilt??15:o.tilt});e.moved=!0,this.change(m=>{var b,v;if(e.win){let y=(b=m.settings.roof.windows)==null?void 0:b.find(x=>x.id===e.id);y&&Object.assign(y,{face:d.key,...p});return}let _=(v=m.settings.roof.solar)==null?void 0:v.find(y=>y.id===e.id);_&&Object.assign(_,{face:d.key,...p},d.flat&&_.tilt==null?{tilt:15}:{})},e.base,!1)}get houseTool(){return this._tool==="roof"||this._tool==="energy"}render3d(){return g`<div class="fp3d-editor-3d">
      ${this.houseTool?$:g`<div class="fp3d-seg fp3d-3d-walls">
            <button aria-pressed=${this._wall3d==="auto"} @click=${()=>this.setWall3d("auto")}>${this.t("walls_auto")}</button>
            <button aria-pressed=${this._wall3d==="cut"} @click=${()=>this.setWall3d("cut")}>${this.t("walls_cut")}</button>
          </div>`}
      ${this.render3dBar()}
      <fp3d-view3d
              .walkable=${!1}
        .pivotMark=${!0}
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
        .furnishTypes=${this._tool==="energy"?ye:this._tool==="roof"?[]:null}
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
    </div>`}setWall3d(t){this._wall3d=t;try{localStorage.setItem("neonplan3d.walls3d",t)}catch{}}updated(){var n,i;if(this._settingsDialog)for(let o of this.renderRoot.querySelectorAll(".fp3d-dialog details"))o.open=!0;let t=this._preview?this.renderRoot.querySelector(".fp3d-preview"):null;if(t&&this._preview){let o=t.getBoundingClientRect(),s=o.left-this._preview.left,a=o.top-this._preview.top;(Math.abs(s)>1||Math.abs(a)>1)&&(t.style.left=`${parseFloat(t.style.left)-s}px`,t.style.top=`${parseFloat(t.style.top)-a}px`)}for(let o of this.renderRoot.querySelectorAll("select option[selected]"))o.selected||(o.selected=!0);this.reframe3d&&(this.reframe3d=!1,setTimeout(()=>{var o;return(o=this.renderRoot.querySelector("fp3d-view3d"))==null?void 0:o.resetView()},250));let e=(n=this.floor)==null?void 0:n.background;if(e&&!this._images[e.image_id]&&!this.loadingImages.has(e.image_id)&&this.loadImage(e.image_id),(i=this.furnitureItem)!=null&&i.pictures)for(let o of this.storedPictures())!this._images[o]&&!this.loadingImages.has(o)&&this.loadImage(o)}get floor(){var t;return(t=this._doc)==null?void 0:t.floors.find(e=>e.id===this._floorId)}get room(){var t;return(t=this.floor)==null?void 0:t.rooms.find(e=>e.id===this._roomId)}get isAdmin(){var t,e;return((e=(t=this.hass)==null?void 0:t.user)==null?void 0:e.is_admin)??!0}setDoc(t,e=this._doc){e&&(this.past.push(JSON.stringify(e)),this.past.length>Ud&&this.past.shift(),this.future=[]),this._doc=t,dc(t),this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}change(t,e=this._doc,n=!0){let i=structuredClone(e),o=i.floors.find(s=>s.id===this._floorId);!o&&this._floorId||(t(i,o),qa(i,e),this.setDoc(i,n?e:null))}undo(){let t=this.past.pop();t&&(this.future.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}redo(){let t=this.future.pop();t&&(this.past.push(JSON.stringify(this._doc)),this.restore(JSON.parse(t)))}restore(t){var e,n;this._doc=t,t.floors.some(i=>i.id===this._floorId)||(this._floorId=((e=t.floors[0])==null?void 0:e.id)??null),(n=this.floor)!=null&&n.rooms.some(i=>i.id===this._roomId)||(this._roomId=null),this._vertex=null,this._canUndo=this.past.length>0,this._canRedo=this.future.length>0,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}toScreen(t){let{scale:e,ox:n,oy:i}=this._view;return[t[0]*e+n,t[1]*e+i]}toWorld(t,e){let{scale:n,ox:i,oy:o}=this._view;return[(t-i)/n,(e-o)/n]}localPoint(t){let e=this.renderRoot.querySelector("svg").getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}fit(){var a,l;let t=((a=this.floor)==null?void 0:a.rooms.flatMap(d=>d.points))??[];if(this._tool==="outdoor"||this._tool==="pool")for(let d of((l=this.floor)==null?void 0:l.outdoor)??[])t.push(...d.points);if(this._tool==="roof")for(let d of this._doc.settings.roof.sections??[])t.push([d.x0,d.z0],[d.x1,d.z1]);let e=t.length?zt(t):{x0:0,z0:0,x1:10,z1:8},n=1.5,i=e.x1-e.x0+2*n,o=e.z1-e.z0+2*n,s=Math.max(8,Math.min(400,Math.min(this._size.w/i,this._size.h/o)));this._view={scale:s,ox:this._size.w/2-(e.x0+e.x1)/2*s,oy:this._size.h/2-(e.z0+e.z1)/2*s},this.fittedView=this._view}showPoint(t,e){let n=Math.max(this._view.scale,70);this._view={scale:n,ox:this._size.w/2-t*n,oy:this._size.h/2-e*n}}zoomAt(t,e,n){let{scale:i,ox:o,oy:s}=this._view,a=Math.max(8,Math.min(600,i*t)),l=a/i;this._view={scale:a,ox:e-(e-o)*l,oy:n-(n-s)*l}}snap(t,e,n=!1){var f;if(this._guides={},n)return t;let i=lo/this._view.scale,o=((f=this.floor)==null?void 0:f.rooms)??[],s=[];for(let m of o)m.points.forEach((_,b)=>{e&&m.id===e.roomId&&(e.index===void 0||e.index===b)||s.push(_)});let a=null,l=i;for(let m of s){let _=Math.hypot(m[0]-t[0],m[1]-t[1]);_<l&&(l=_,a=m)}if(a)return this._guides={point:a},[a[0],a[1]];for(let m of o)if(!(e&&m.id===e.roomId))for(let _=0;_<m.points.length;_++){let b=m.points[_],v=m.points[(_+1)%m.points.length],y=v[0]-b[0],x=v[1]-b[1],P=y*y+x*x;if(P<1e-9)continue;let A=((t[0]-b[0])*y+(t[1]-b[1])*x)/P;if(A<=0||A>=1)continue;let F=[b[0]+A*y,b[1]+A*x],T=Math.hypot(F[0]-t[0],F[1]-t[1]),S=this._doc.settings.grid;Math.abs(x)<1e-9&&(F[0]=Math.min(Math.max(Math.round(F[0]/S)*S,Math.min(b[0],v[0])),Math.max(b[0],v[0]))),Math.abs(y)<1e-9&&(F[1]=Math.min(Math.max(Math.round(F[1]/S)*S,Math.min(b[1],v[1])),Math.max(b[1],v[1]))),T<l&&(l=T,a=F)}if(a)return this._guides={point:a},[z(a[0]),z(a[1])];let d=this._doc.settings.grid,c=[z(Math.round(t[0]/d)*d),z(Math.round(t[1]/d)*d)],u=i,p=i,h={};for(let m of s)Math.abs(m[0]-t[0])<u&&(u=Math.abs(m[0]-t[0]),c[0]=m[0],h.x=m[0]),Math.abs(m[1]-t[1])<p&&(p=Math.abs(m[1]-t[1]),c[1]=m[1],h.z=m[1]);return this._guides=h,c}onPointerDown(t){if(this._ctx=null,this._fixedHint=!1,this.fixedPan=!1,this.pointerDown(t),this.pointers.size!==1){clearTimeout(this.pressTimer);return}if(this.guardFixed(this.localPoint(t)),clearTimeout(this.pressTimer),this.pressStart=null,t.pointerType==="touch"&&(this._tool==="select"||this._tool==="furniture")){let e=this.localPoint(t),n=t.target;this.pressStart=e,this.pressTimer=window.setTimeout(()=>{let i=this.drag;i&&"moved"in i&&i.moved||(this.drag=null,this.openContext(n,e))},550)}}guardFixed(t){let e=this.drag;if(!e)return;let n=null;e.kind==="vertex"||e.kind==="room"?n=["room",e.roomId]:e.kind==="device"||e.kind==="aim"?n=["device",e.entityId]:e.kind==="opening"?n=["opening",e.id]:e.kind==="furniture"||e.kind==="rotate"||e.kind==="resize"?n=["furniture",e.id]:e.kind==="furnset"?n=["furniture",e.ids.find(i=>this.isFixedItem("furniture",i))??e.ids[0]]:e.kind==="wallmove"?n=["wall",e.id]:e.kind==="outdoor"&&(n=["outdoor",e.id]),!(!n||!this.isFixedItem(...n))&&("moved"in e&&e.moved&&"base"in e&&this.restoreLive(e.base),this.drag={kind:"pan",last:t},this.fixedPan=!0)}pointerDown(t){var P,A,F,T,S,M,w,k,E,I,C,O,D,j,U,G,Q,J,it,q,lt,It,te;t.currentTarget.setPointerCapture(t.pointerId);let n=this.localPoint(t);if(this.pointers.set(t.pointerId,n),this.pointers.size===2){this.drag&&Kd.has(this.drag.kind)&&"moved"in this.drag&&this.drag.moved&&"base"in this.drag&&this.restoreLive(this.drag.base),this.drag=null,this.pinch=this.pinchState();return}if(this.pointers.size>2)return;if(t.button===1||t.button===2||!this.floor){t.button===2&&(this.rightPress={at:n,target:t.target,moved:!1}),this.drag={kind:"pan",last:n};return}let i=this.toWorld(...n),o=t.target;if(this._wallPick){this.pickWall(i);return}if(this._bgLevel&&this.isAdmin&&((P=this.floor)!=null&&P.background)){let B=[...this._bgLevel,i];B.length<2?this._bgLevel=B:this.applyBgLevel(B[0],B[1]);return}if(this.bgHandles()&&this.floor.background&&o.closest("[data-bg-rotate]")){let B=this.floor.background,pt=this._images[B.image_id],Z=B.width*((pt==null?void 0:pt.aspect)??1),Et=[B.x+B.width/2,B.z+Z/2];this.drag={kind:"bgrotate",base:this._doc,moved:!1,start:Math.atan2(i[1]-Et[1],i[0]-Et[0]),rot:B.rotation??0};return}if(this._bgRuler&&this._bgRuler.length<2&&this.isAdmin&&((A=this.floor)!=null&&A.background)){this._bgRuler=[...this._bgRuler,i];return}if(this.bgHandles()&&this.floor.background&&!this._bgEdit&&(o.closest("[data-bg-handle]")||o.closest("[data-bg]"))){let B=this.floor.background;this.drag=o.closest("[data-bg-handle]")?{kind:"bgscale",base:this._doc,moved:!1}:{kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}if(this._bgEdit&&this.isAdmin&&((F=this.floor)!=null&&F.background)){let B=this.floor.background;if(o.closest("[data-bg-handle]")){this.drag={kind:"bgscale",base:this._doc,moved:!1};return}if(o.closest("[data-bg]")){this.drag={kind:"bgmove",start:i,bx:B.x,bz:B.z,base:this._doc,moved:!1};return}this._bgEdit=!1}if(this._tool==="wall"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"freewall",start:B,end:B};return}if(this._tool==="pool"&&this.poolDown(t,o,i,n))return;if(this._tool==="roof"||this._tool==="energy"){if(this._tool==="energy"&&this._placeHub){if(this._placeHub=!1,this.isAdmin&&this._floorId){let V=this._doc.settings.grid,[N,et]=i.map(K=>z(Math.round(K/V)*V));this.setEnergy({meter:{floor_id:this._floorId,x:N,z:et},hub_point:!0})}this.drag={kind:"pan",last:n};return}let B=(T=o.closest("[data-roof-corner]"))==null?void 0:T.getAttribute("data-roof-corner"),pt=(S=o.closest("[data-roof-vertex]"))==null?void 0:S.getAttribute("data-roof-vertex"),Z=(M=o.closest("[data-roof]"))==null?void 0:M.getAttribute("data-roof"),Et=this._tool==="energy"?(w=o.closest("[data-energy-device]"))==null?void 0:w.getAttribute("data-energy-device"):null;if(Et){this._solarId=null,this.selectItem("furniture",Et),this.drag=this.isAdmin?{kind:"furniture",id:Et,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"&&o.closest("[data-holo-pt]")){this.drag=this.isAdmin?{kind:"holopt",base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){let V=(k=o.closest("[data-cable-pt]"))==null?void 0:k.getAttribute("data-cable-pt"),N=X=>{var nt,at;return!!((at=(nt=this._doc.settings.roof.cables)==null?void 0:nt.find(ht=>ht.id===X))!=null&&at.locked)};if(V&&this.isAdmin&&!N(V.slice(0,V.lastIndexOf(":")))){let X=V.lastIndexOf(":"),nt=V.slice(0,X),at=Number(V.slice(X+1));if(this.doubleTap(t,`cable:${V}`)){this.change(ht=>{var Ot;let ct=(Ot=ht.settings.roof.cables)==null?void 0:Ot.find(Ct=>Ct.id===nt);ct&&ct.points.length>1&&ct.points.splice(at,1)}),this.drag={kind:"pan",last:n};return}this.drag={kind:"cablept",id:nt,index:at,base:this._doc,moved:!1};return}let et=(E=o.closest("[data-cable-line]"))==null?void 0:E.getAttribute("data-cable-line");if(et&&this.isAdmin&&!N(et)){let X=Number(((I=o.closest("[data-cable-line]"))==null?void 0:I.getAttribute("data-cable-seg"))??0),nt=this._doc;this.change(at=>{var ct;let ht=(ct=at.settings.roof.cables)==null?void 0:ct.find(Ot=>Ot.id===et);ht&&ht.points.splice(X,0,[z(i[0]),z(i[1])])}),this.drag={kind:"cablept",id:et,index:X,base:nt,moved:!0};return}let K=(C=o.closest("[data-cable]"))==null?void 0:C.getAttribute("data-cable");if(K){if(this._cableId=K,this.isAdmin&&this._floorId&&!((O=this._doc.settings.roof.cables)!=null&&O.some(X=>X.id===K))){let X=this._doc;this.layCable(K);let nt=(D=this._doc.settings.roof.cables)==null?void 0:D.find(ht=>ht.id===K),at=this.cableSegments().filter(ht=>ht.key===K);if(nt&&at.length){let ht=[[at[0].a[0],at[0].a[2]],...nt.points,[at[at.length-1].b[0],at[at.length-1].b[2]]],ct=0,Ot=1/0;for(let Ct=0;Ct+1<ht.length;Ct++){let kt=ah(i,ht[Ct],ht[Ct+1]);kt<Ot&&(Ot=kt,ct=Ct)}this.change(Ct=>{var Vt;let kt=(Vt=Ct.settings.roof.cables)==null?void 0:Vt.find(Ae=>Ae.id===K);kt&&kt.points.splice(ct,0,[z(i[0]),z(i[1])])}),this.drag={kind:"cablept",id:K,index:ct,base:X,moved:!0};return}}this.drag={kind:"pan",last:n};return}}let Ft=this._tool==="energy"?(j=o.closest("[data-solar]"))==null?void 0:j.getAttribute("data-solar"):null,R=this._tool==="energy"?(U=o.closest("[data-solar-turn]"))==null?void 0:U.getAttribute("data-solar-turn"):null;if(R&&this.isAdmin){this.drag={kind:"solarturn",id:R,base:this._doc,moved:!1};return}if(Ft){let V=(G=o.closest("[data-cell]"))==null?void 0:G.getAttribute("data-cell");if(this._solarPick&&Ft===this._solarId&&V&&this.isAdmin){this.toggleSolarCell(V),this.drag={kind:"pan",last:n};return}Ft!==this._solarId&&(this._solarPick=!1),this._solarId=Ft,this._roofId=null;let N=(Q=this._doc.settings.roof.solar)==null?void 0:Q.find(nt=>nt.id===Ft),et=N?Dt(this._doc,N)??void 0:void 0,K=et?this.faceHit(et,i):null,X=N&&K?{du:K.u-N.u,ds:Number.isNaN(K.s)?0:K.s-N.v}:null;this.drag=this.isAdmin&&!(N!=null&&N.locked)?{kind:"solarmove",id:Ft,start:i,startScreen:n,base:this._doc,moved:!1,grab:X}:{kind:"pan",last:n};return}let L=this._tool==="roof"?(J=o.closest("[data-roofwin]"))==null?void 0:J.getAttribute("data-roofwin"):null;if(L){this._roofWinId=L,this._roofId=null;let V=(it=this._doc.settings.roof.windows)==null?void 0:it.find(X=>X.id===L),N=V?$t(this._doc).find(X=>X.key===V.face):void 0,et=N?Qi(N,i):null,K=V&&et?{du:et.u-V.u,ds:et.s-V.v}:null;this.drag=this.isAdmin&&!(V!=null&&V.locked)?{kind:"solarmove",id:L,start:i,startScreen:n,base:this._doc,moved:!1,grab:K,win:!0}:{kind:"pan",last:n};return}this._tool==="roof"&&(this._roofWinId=null);let W=this._tool==="energy"?(q=o.closest(".fp3d-energy-item"))==null?void 0:q.getAttribute("data-furniture"):null;if(W){this._solarId=null,this.selectItem("furniture",W),this.drag=this.isAdmin?{kind:"furniture",id:W,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}if(this._tool==="energy"){this.selectItem("furniture",null),this._solarId=null,this.drag={kind:"pan",last:n};return}if(pt&&this.isAdmin){let[V,N]=pt.split(":");this.drag={kind:"roofvertex",id:V,index:Number(N),base:this._doc,moved:!1}}else if(B&&this.isAdmin){let[V,N,et]=B.split(":");this.drag={kind:"roofcorner",id:V,corner:[N==="1"?1:0,et==="1"?1:0],base:this._doc,moved:!1}}else if(Z){let V=this.roofFixed((lt=this._doc.settings.roof.sections)==null?void 0:lt.find(N=>N.id===Z));V&&this._roofId===Z&&(this._fixedHint=!0),this._roofId=Z,this.drag=this.isAdmin&&!V?{kind:"roofmove",id:Z,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n}}else if(this.isAdmin){this._roofId=null;let V=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:V,end:V,roof:!0}}else this.drag={kind:"pan",last:n};return}let s=this._tool==="pool"&&!this._pipeMode;if(this._tool==="rect"||(this._tool==="outdoor"||s)&&!this._outdoorFree||this._tool==="hole"){let B=this.snap(i,void 0,t.altKey);this.drag={kind:"rect",start:B,end:B,outdoor:this._tool==="outdoor"||s,hole:this._tool==="hole"};return}if(this._tool==="polygon"||this._tool==="measure"||(this._tool==="outdoor"||s)&&this._outdoorFree){this.drag={kind:"tap",startScreen:n,last:n,panning:!1};return}if(this._tool==="opening"){this.placeOpening(this._openingPreset,n)||(this.drag={kind:"pan",last:n});return}if(this.isAdmin&&(this._tool==="select"||this._tool==="furniture")&&(t.shiftKey||this._multiMode)){let B=o.closest("[data-furniture]");B?(this.toggleMulti(B.getAttribute("data-furniture")),this.drag=null):this.drag={kind:"marquee",start:i,end:i,add:!0};return}let a=o.closest("[data-device]");if(a&&this.isAdmin){this.drag={kind:"device",entityId:a.getAttribute("data-device"),start:i,startScreen:n,base:this._doc,moved:!1};return}let l=o.closest("[data-opening]");if(l){let B=l.getAttribute("data-opening");this.selectItem("opening",B),this.drag=this.isAdmin?{kind:"opening",id:B,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let d=o.closest("[data-resize]");if(d&&this.isAdmin){let[B,pt,Z]=d.getAttribute("data-resize").split(":");this.drag={kind:"resize",id:B,corner:[pt==="1"?1:-1,Z==="1"?1:-1],base:this._doc,moved:!1};return}let c=o.closest("[data-rotate]");if(c&&this.isAdmin){this.drag={kind:"rotate",id:c.getAttribute("data-rotate"),base:this._doc,moved:!1};return}let u=o.closest("[data-aim]");if(u&&this.isAdmin){this.drag={kind:"aim",entityId:u.getAttribute("data-aim"),base:this._doc,moved:!1};return}let p=o.closest("[data-furniture]");if(p&&!o.closest("[data-vertex], [data-mid]")){let B=p.getAttribute("data-furniture"),pt=Date.now(),Z=((It=this.lastFurnTap)==null?void 0:It.id)===B&&pt-this.lastFurnTap.t<400;this.lastFurnTap={id:B,t:pt};let Et=this.floor.furniture.find(R=>R.id===B);Z&&(Et!=null&&Et.group)?(this.selectItem("furniture",B),this._single=!0):(!this.selection().includes(B)||this._single)&&this.selectItem("furniture",B);let Ft=this.selection();this.drag=this.isAdmin?Ft.length>1?{kind:"furnset",ids:Ft,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"furniture",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let h=o.closest("[data-vertex]"),f=o.closest("[data-mid]");if(h&&this.room&&this.isAdmin){this._vertex=Number(h.getAttribute("data-vertex")),this.drag={kind:"vertex",roomId:this.room.id,index:this._vertex,base:this._doc,moved:!1};return}if(f&&this.room&&this.isAdmin){let B=Number(f.getAttribute("data-mid")),pt=this.room.points,Z=pt[B],Et=pt[(B+1)%pt.length],Ft=[z((Z[0]+Et[0])/2),z((Z[1]+Et[1])/2)],R=this._doc,L=this.room.id;this.change((W,V)=>{let N=V.rooms.find(K=>K.id===L);N.points.splice(B+1,0,Ft),N.wall_heights&&N.wall_heights.splice(B+1,0,N.wall_heights[B]??null),N.wall_thickness&&N.wall_thickness.splice(B+1,0,N.wall_thickness[B]??null);let et=Math.hypot(Ft[0]-Z[0],Ft[1]-Z[1]);if(N.wall_slopes){let K=N.wall_slopes[B]??null,X=Math.hypot(Et[0]-Z[0],Et[1]-Z[1])||1,nt=K?Math.round((K[0]+(K[1]-K[0])*et/X)*1e3)/1e3:0;K&&(N.wall_slopes[B]=[K[0],nt]),N.wall_slopes.splice(B+1,0,K?[nt,K[1]]:null)}for(let K of V.openings)K.room_id!==L||K.wall||(K.edge>B?K.edge+=1:K.edge===B&&K.offset>et&&(K.edge=B+1,K.offset=z(K.offset-et)))},R,!1),this._vertex=B+1,this.drag={kind:"vertex",roomId:L,index:B+1,base:R,moved:!0};return}let m=o.closest("[data-wall-end]");if(m&&this.isAdmin){let[B,pt]=m.getAttribute("data-wall-end").split(":");this.drag={kind:"wallmove",id:B,end:pt,start:i,startScreen:n,base:this._doc,moved:!1};return}let _=o.closest("[data-free-wall]");if(_){let B=_.getAttribute("data-free-wall");this.selectItem("wall",B),this.drag=this.isAdmin?{kind:"wallmove",id:B,end:null,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let b=o.closest("[data-out-box]");if(b&&this.isAdmin){let[B,pt]=b.getAttribute("data-out-box").split(":");this.drag={kind:"outbox",id:B,corner:Number(pt),base:this._doc,moved:!1};return}let v=o.closest("[data-out-vertex]");if(v&&this.isAdmin){let[B,pt]=v.getAttribute("data-out-vertex").split(":");this.drag={kind:"outvertex",id:B,index:Number(pt),base:this._doc,moved:!1};return}let y=o.closest("[data-outdoor]");if(y&&!o.closest("[data-room]")&&!this.roomAt(i)){let B=this.outdoorAt(i)??y.getAttribute("data-outdoor");this.selectItem("outdoor",B),this.drag=this.isAdmin?{kind:"outdoor",id:B,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}let x=((te=o.closest("[data-room]"))==null?void 0:te.getAttribute("data-room"))??this.roomAt(i);if(x){x!==this._roomId&&(this._vertex=null),this.selectItem("room",x),this.drag=this.isAdmin&&this._tool!=="furniture"?{kind:"room",roomId:x,start:i,startScreen:n,base:this._doc,moved:!1}:{kind:"pan",last:n};return}this.selectItem("room",null),this.drag={kind:"pan",last:n}}onPointerMove(t){var o,s,a,l,d,c,u,p,h,f,m,_,b,v,y,x,P,A,F,T;if(this.rightPress&&!this.rightPress.moved){let S=this.localPoint(t);Math.hypot(S[0]-this.rightPress.at[0],S[1]-this.rightPress.at[1])>5&&(this.rightPress.moved=!0)}if(this.pressStart){let S=this.localPoint(t);Math.hypot(S[0]-this.pressStart[0],S[1]-this.pressStart[1])>8&&(clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan&&(this._fixedHint=!0))}else this.fixedPan&&!this._fixedHint&&((o=this.drag)==null?void 0:o.kind)==="pan"&&(this._fixedHint=!0);let e=this.localPoint(t);if(this.pointers.has(t.pointerId)&&this.pointers.set(t.pointerId,e),this.pinch){let S=this.pinchState();S&&(this.zoomAt(S.dist/Math.max(1,this.pinch.dist),...S.mid),this._view={...this._view,ox:this._view.ox+S.mid[0]-this.pinch.mid[0],oy:this._view.oy+S.mid[1]-this.pinch.mid[1]},this.pinch=S);return}let n=this.toWorld(...e),i=this.drag;if(!i){this._tool!=="select"&&this._tool!=="furniture"&&this.floor&&(this._cursor=this.snap(n,void 0,t.altKey));return}switch(i.kind){case"pan":this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]},i.last=e;break;case"tap":(i.panning||Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])>6)&&(i.panning=!0,this._view={...this._view,ox:this._view.ox+e[0]-i.last[0],oy:this._view.oy+e[1]-i.last[1]}),i.last=e;break;case"rect":i.end=this.snap(n,void 0,t.altKey),this.requestUpdate();break;case"freewall":{let S=this.snap(n,void 0,t.altKey);t.shiftKey&&(S=Math.abs(S[0]-i.start[0])>Math.abs(S[1]-i.start[1])?[S[0],i.start[1]]:[i.start[0],S[1]]),i.end=S,this.requestUpdate();break}case"wallmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=(((s=i.base.floors.find(w=>w.id===this._floorId))==null?void 0:s.walls)??[]).find(w=>w.id===i.id);if(!S)return;let M;if(i.end){let w=this.snap(n,void 0,t.altKey);M=i.end==="a"?{a:w,b:S.b}:{a:S.a,b:w}}else{let w=t.altKey?.01:this._doc.settings.grid,k=Math.round((n[0]-i.start[0])/w)*w,E=Math.round((n[1]-i.start[1])/w)*w;M={a:[z(S.a[0]+k),z(S.a[1]+E)],b:[z(S.b[0]+k),z(S.b[1]+E)]}}this.change((w,k)=>Object.assign((k.walls??[]).find(E=>E.id===i.id),M),i.base,!1);break}case"vertex":{let S=this.snap(n,{roomId:i.roomId,index:i.index},t.altKey);i.moved=!0,this.change((M,w)=>{w.rooms.find(k=>k.id===i.roomId).points[i.index]=S},i.base,!1);break}case"room":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=(a=i.base.floors.find(E=>E.id===this._floorId))==null?void 0:a.rooms.find(E=>E.id===i.roomId);if(!S)return;let M=this.roomDelta(S,[n[0]-i.start[0],n[1]-i.start[1]],t.altKey),w=i.base.floors.find(E=>E.id===this._floorId),k=new Set(w.placements.filter(E=>Y([E.x,E.z],S.points)).map(E=>E.entity_id));this.change((E,I)=>{let C=I.rooms.find(O=>O.id===i.roomId);C.points=S.points.map(([O,D])=>[z(O+M[0]),z(D+M[1])]),I.placements=w.placements.map(O=>k.has(O.entity_id)?{...O,x:z(O.x+M[0]),z:z(O.z+M[1])}:O)},i.base,!1);break}case"roofmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=t.altKey?.01:this._doc.settings.grid,M=z(Math.round((n[0]-i.start[0])/S)*S),w=z(Math.round((n[1]-i.start[1])/S)*S),k=(l=i.base.settings.roof.sections)==null?void 0:l.find(E=>E.id===i.id);if(!k)return;this.change(E=>{var C;let I=(C=E.settings.roof.sections)==null?void 0:C.find(O=>O.id===i.id);I&&(Object.assign(I,{x0:z(k.x0+M),x1:z(k.x1+M),z0:z(k.z0+w),z1:z(k.z1+w)}),k.pivot&&(I.pivot=[z(k.pivot[0]+M),z(k.pivot[1]+w)]),k.points&&(I.points=k.points.map(([O,D])=>[z(O+M),z(D+w)])))},i.base,!1);break}case"solarturn":{i.moved=!0;let S=(d=i.base.settings.roof.solar)==null?void 0:d.find(O=>O.id===i.id),M=S?Dt(i.base,S):null;if(!S||!M)return;let[w,k]=Xn(M,S),E=Math.atan2(n[0]-w,-(n[1]-k))*180/Math.PI,I=t.altKey?1:15;E=Math.round(E/I)*I;let C=Zn(i.base,S,E);this.change(O=>{var j;let D=(j=O.settings.roof.solar)==null?void 0:j.find(U=>U.id===i.id);D&&Object.assign(D,C)},i.base,!1);break}case"solarmove":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=i.win?(c=i.base.settings.roof.windows)==null?void 0:c.find(G=>G.id===i.id):void 0,M=i.win?S?En(S):void 0:(u=i.base.settings.roof.solar)==null?void 0:u.find(G=>G.id===i.id),w=i.win?$t(i.base):[...$t(i.base),...this._floorId?fe(i.base,this._floorId):[]],k=M?Dt(i.base,M,w):null;if(!M||!k)return;let E=t.altKey?.01:.05,I=G=>z(Math.round(G/E)*E),C=k.unbounded?null:Kc(w,n),O=k,D,j;if(C&&i.grab)O=C.face,D=I(C.u-i.grab.du),j=Number.isNaN(C.s)?C.face.key===M.face?M.v:Math.max(0,C.face.ls-1.5):I(C.s-i.grab.ds);else{let G=n[0]-i.start[0],Q=n[1]-i.start[1],J=[k.es[0],k.es[2]],it=J[0]*J[0]+J[1]*J[1]||1;D=I(M.u+G*k.eu[0]+Q*k.eu[2]),j=I(M.v+(G*J[0]+Q*J[1])/it)}let U=Sn(O,{...M,face:O.key,u:D,v:j,tilt:O.flat?M.tilt??15:M.tilt});this.change(G=>{var J,it;if(i.win){let q=(J=G.settings.roof.windows)==null?void 0:J.find(lt=>lt.id===i.id);q&&Object.assign(q,{face:O.key,...U});return}let Q=(it=G.settings.roof.solar)==null?void 0:it.find(q=>q.id===i.id);Q&&Object.assign(Q,{face:O.key,...U},O.flat&&Q.tilt==null?{tilt:15}:{})},i.base,!1);break}case"outbox":{i.moved=!0;let S=this.snap(n,void 0,t.altKey),M=(p=i.base.floors.find(Q=>Q.id===this._floorId))==null?void 0:p.outdoor.find(Q=>Q.id===i.id);if(!(M!=null&&M.pool_shape))return;let w=zt(M.points),E=[[w.x0,w.z0],[w.x1,w.z0],[w.x1,w.z1],[w.x0,w.z1]][(i.corner+2)%4],I=S[0]-E[0],C=S[1]-E[1];if(M.pool_shape==="round"){let Q=Math.max(Math.abs(I),Math.abs(C),.5);I=Math.sign(I||1)*Q,C=Math.sign(C||1)*Q}else I=Math.sign(I||1)*Math.max(Math.abs(I),.5),C=Math.sign(C||1)*Math.max(Math.abs(C),.5);let O=Math.min(E[0],E[0]+I),D=Math.max(E[0],E[0]+I),j=Math.min(E[1],E[1]+C),U=Math.max(E[1],E[1]+C),G=M.pool_shape;this.change((Q,J)=>{let it=J.outdoor.find(q=>q.id===i.id);it&&(it.points=xi(G,z(O),z(j),z(D),z(U)))},i.base,!1);break}case"pipept":{i.moved=!0;let S=this.snap(n,void 0,t.altKey);this.change((M,w)=>{var E,I,C;let k=(C=(I=(E=w.outdoor.find(O=>O.id===i.pool))==null?void 0:E.pool)==null?void 0:I.pipes)==null?void 0:C.find(O=>O.id===i.pipe);k&&(k.points[i.index]=[z(S[0]),z(S[1])])},i.base,!1);break}case"poolport":{i.moved=!0;let S=this.snap(n,void 0,t.altKey);this.change((M,w)=>{var O,D;let k=w.outdoor.find(j=>j.id===i.pool),E=(D=(O=k==null?void 0:k.pool)==null?void 0:O.ports)==null?void 0:D.find(j=>j.id===i.id);if(!k||!E)return;let[I,C]=E.kind==="skimmer"||E.kind==="inlet"?Vi(k.points,S):S;E.x=z(I),E.z=z(C)},i.base,!1);break}case"pooljoint":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let S=(m=(f=(h=i.base.floors.flatMap(w=>w.outdoor).find(w=>w.id===i.pool))==null?void 0:h.pool)==null?void 0:f.joints)==null?void 0:m.find(w=>w.id===i.id);if(!S)break;let M=this.snap([S.x+n[0]-i.start[0],S.z+n[1]-i.start[1]],void 0,t.altKey);if(S.kind==="wall"){let w=[-(S.nz??0),S.nx??0],k=(M[0]-S.x)*w[0]+(M[1]-S.z)*w[1];M=[S.x+w[0]*k,S.z+w[1]*k]}this.change(w=>{var E,I,C;let k=(C=(I=(E=w.floors.flatMap(O=>O.outdoor).find(O=>O.id===i.pool))==null?void 0:E.pool)==null?void 0:I.joints)==null?void 0:C.find(O=>O.id===i.id);k&&([k.x,k.z]=[z(M[0]),z(M[1])])},i.base,!1);break}case"pooldev":{if(!i.moved&&Math.hypot(n[0]-i.start[0],n[1]-i.start[1])<.05)break;i.moved=!0;let S=i.base.floors.flatMap(w=>w.furniture).find(w=>w.id===i.id);if(!S)break;let M=this.snap([S.x+n[0]-i.start[0],S.z+n[1]-i.start[1]],void 0,t.altKey);this.change(w=>{let k=w.floors.flatMap(E=>E.furniture).find(E=>E.id===i.id);k&&([k.x,k.z]=[z(M[0]),z(M[1])])},i.base,!1);break}case"outvertex":{i.moved=!0;let S=this.snap(n,void 0,t.altKey),M=(_=i.base.floors.find(k=>k.id===this._floorId))==null?void 0:_.outdoor.find(k=>k.id===i.id);if(!M)return;let w=Fi(M.points);this.change((k,E)=>{let I=E.outdoor.find(j=>j.id===i.id);if(!I)return;let C=M.points.map(j=>[...j]),O=i.index,D=M.points[O];C[O]=[z(S[0]),z(S[1])],w&&M.points.forEach((j,U)=>{U!==O&&(Math.abs(j[0]-D[0])<1e-6&&(C[U][0]=z(S[0])),Math.abs(j[1]-D[1])<1e-6&&(C[U][1]=z(S[1])))}),I.points=C},i.base,!1);break}case"cablept":{i.moved=!0;let S=this.snap(n,void 0,t.altKey);this.change(M=>{var k;let w=(k=M.settings.roof.cables)==null?void 0:k.find(E=>E.id===i.id);w&&w.points[i.index]&&(w.points[i.index]=[z(S[0]),z(S[1])])},i.base,!1);break}case"holopt":{i.moved=!0;let S=this.snap(n,void 0,t.altKey);this.change(M=>M.settings.roof.hologram={...M.settings.roof.hologram??$i,place:"free",x:z(S[0]),z:z(S[1])},i.base,!1);break}case"bgmove":{i.moved=!0;let S=n[0]-i.start[0],M=n[1]-i.start[1];this.change((w,k)=>{k.background&&(k.background.x=z(i.bx+S),k.background.z=z(i.bz+M))},i.base,!1);break}case"bgrotate":{i.moved=!0;let S=(b=this.floor)==null?void 0:b.background,M=S?this._images[S.image_id]:void 0;if(!S||!M)break;let w=S.width*M.aspect,k=[S.x+S.width/2,S.z+w/2],E=Math.atan2(n[1]-k[1],n[0]-k[0]),I=i.rot+(E-i.start)*180/Math.PI;I=t.shiftKey?Math.round(I/15)*15:Math.round(I*10)/10,I=((I+180)%360+360)%360-180,this.change((C,O)=>{O.background&&(O.background.rotation=I)},i.base,!1);break}case"bgscale":{i.moved=!0;let S=(v=this.floor)==null?void 0:v.background,M=S?this._images[S.image_id]:void 0;if(!S||!M)break;let[w]=this.bgLocal(S,n,M.aspect),k=Math.max(.5,z(w));this.change((E,I)=>{I.background&&(I.background.width=k)},i.base,!1);break}case"roofvertex":{i.moved=!0;let S=this.snap(n,void 0,t.altKey);this.change(M=>{var k;let w=(k=M.settings.roof.sections)==null?void 0:k.find(E=>E.id===i.id);!(w!=null&&w.points)||i.index>=w.points.length||(w.points[i.index]=[z(S[0]),z(S[1])],Object.assign(w,qi(w.points)))},i.base,!1);break}case"roofcorner":{i.moved=!0;let S=this.snap(n,void 0,t.altKey);this.change(M=>{var C;let w=(C=M.settings.roof.sections)==null?void 0:C.find(O=>O.id===i.id);if(!w)return;let k=Me(w);k&&!w.pivot&&(w.pivot=[z(k.p[0]),z(k.p[1])]);let[E,I]=ke(Me(w),S,!0);i.corner[0]===(w.x1>=w.x0?1:0)?w.x1=z(E):w.x0=z(E),i.corner[1]===(w.z1>=w.z0?1:0)?w.z1=z(I):w.z0=z(I)},i.base,!1);break}case"opening":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=i.base.floors.find(E=>E.id===this._floorId),M=S==null?void 0:S.openings.find(E=>E.id===i.id),w=M&&S?Ce(M,S.rooms,S.walls??[]):null;if(!M||!w)return;let k=this.offsetOnEdge(w.room,w.edge,n,M.width,t.altKey);this.change((E,I)=>le(I.openings.find(C=>C.id===i.id),{offset:k}),i.base,!1);break}case"furniture":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=(y=i.base.floors.find(C=>C.id===this._floorId))==null?void 0:y.furniture.find(C=>C.id===i.id);if(!S)return;let M=t.altKey?.01:this._doc.settings.grid,w=z(Math.round((S.x+n[0]-i.start[0])/M)*M),k=z(Math.round((S.z+n[1]-i.start[1])/M)*M),E=S.rotation,I=t.altKey?null:this.snapToWall({...S,x:w,z:k});I&&({x:w,z:k,rotation:E}=I),this.change((C,O)=>le(O.furniture.find(D=>D.id===i.id),{x:w,z:k,rotation:E}),i.base,!1);break}case"furnset":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=t.altKey?.01:this._doc.settings.grid,M=z(Math.round((n[0]-i.start[0])/S)*S),w=z(Math.round((n[1]-i.start[1])/S)*S),k=new Set(i.ids);this.change((E,I)=>{for(let C of I.furniture)k.has(C.id)&&Object.assign(C,{x:z(C.x+M),z:z(C.z+w)})},i.base,!1);break}case"marquee":i.end=n,this.requestUpdate();break;case"outdoor":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=(x=i.base.floors.find(E=>E.id===this._floorId))==null?void 0:x.outdoor.find(E=>E.id===i.id);if(!S)return;let M=t.altKey?.01:this._doc.settings.grid,w=Math.round((n[0]-i.start[0])/M)*M,k=Math.round((n[1]-i.start[1])/M)*M;this.change((E,I)=>{var O,D;let C=I.outdoor.find(j=>j.id===i.id);C.points=S.points.map(([j,U])=>[z(j+w),z(U+k)]),(O=C.pool)!=null&&O.ports&&((D=S.pool)!=null&&D.ports)&&(C.pool.ports=S.pool.ports.map(j=>({...j,x:z(j.x+w),z:z(j.z+k)})))},i.base,!1);break}case"resize":{i.moved=!0;let S=(P=i.base.floors.find(w=>w.id===this._floorId))==null?void 0:P.furniture.find(w=>w.id===i.id);if(!S)return;let M=Da(S,i.corner,n,t.altKey?.01:this._doc.settings.grid);this.change((w,k)=>le(k.furniture.find(E=>E.id===i.id),M),i.base,!1);break}case"rotate":{i.moved=!0;let S=(A=i.base.floors.find(k=>k.id===this._floorId))==null?void 0:A.furniture.find(k=>k.id===i.id);if(!S)return;let M=Math.atan2(-(n[0]-S.x),n[1]-S.z)*180/Math.PI,w=t.altKey?1:15;M=(Math.round(M/w)*w%360+360)%360,this.change((k,E)=>le(E.furniture.find(I=>I.id===i.id),{rotation:M}),i.base,!1);break}case"aim":{i.moved=!0;let S=(F=i.base.floors.find(E=>E.id===this._floorId))==null?void 0:F.placements.find(E=>E.entity_id===i.entityId);if(!S)return;let M=Math.atan2(-(n[0]-S.x),n[1]-S.z)*180/Math.PI,w=t.altKey?1:5;M=(Math.round(M/w)*w%360+360)%360;let k=Math.min(50,Math.max(.5,Math.round(Math.hypot(n[0]-S.x,n[1]-S.z)*10)/10));this.change((E,I)=>le(I.placements.find(C=>C.entity_id===i.entityId),{rotation:M,reach:k}),i.base,!1);break}case"device":{if(!i.moved&&Math.hypot(e[0]-i.startScreen[0],e[1]-i.startScreen[1])<5)return;i.moved=!0;let S=(T=i.base.floors.find(E=>E.id===this._floorId))==null?void 0:T.placements.find(E=>E.entity_id===i.entityId);if(!S)return;let M=t.altKey?.01:this._doc.settings.grid,w=z(Math.round((S.x+n[0]-i.start[0])/M)*M),k=z(Math.round((S.z+n[1]-i.start[1])/M)*M);this.change((E,I)=>le(I.placements.find(C=>C.entity_id===i.entityId),{x:w,z:k}),i.base,!1);break}}}onPointerUp(t){var o,s;let e=this.rightPress;if(this.rightPress=null,e&&t.button===2&&(this.rightUp=performance.now(),!e.moved&&t.type!=="pointercancel"&&(this._tool==="select"||this._tool==="furniture")&&this.openContext(e.target,e.at)),clearTimeout(this.pressTimer),this.pressStart=null,this.fixedPan=!1,this.pointers.delete(t.pointerId),this.pinch){this.pointers.size<2&&(this.pinch=null);return}let n=this.drag;if(this.drag=null,!n||t.type==="pointercancel"){n&&Kd.has(n.kind)&&"moved"in n&&n.moved&&"base"in n&&this.restoreLive(n.base);return}let i=this.localPoint(t);switch(n.kind){case"freewall":{Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1])>=.2&&this.addFreeWall(n.start,n.end),this._guides={};break}case"wallmove":n.moved&&this.pushHistory(n.base),this._guides={};break;case"rect":{let[a,l]=n.start,[d,c]=n.end;if(Math.abs(d-a)>=.2&&Math.abs(c-l)>=.2){let u=[Math.min(a,d),Math.min(l,c)],p=[Math.max(a,d),Math.max(l,c)],h=[u,[p[0],u[1]],p,[u[0],p[1]]];n.outdoor?this.addOutdoor(h):n.hole?this.addHole(u,p):n.roof?this.addRoofSection(u,p):this.addRoom(h)}this._guides={};break}case"tap":if(n.panning)break;this._tool==="measure"?this._draft=[this.snap(this.toWorld(...i),void 0,t.altKey)]:this.addDraftPoint(this.snap(this.toWorld(...i),void 0,t.altKey),i);break;case"marquee":{let[a,l]=[Math.min(n.start[0],n.end[0]),Math.max(n.start[0],n.end[0])],[d,c]=[Math.min(n.start[1],n.end[1]),Math.max(n.start[1],n.end[1])],u=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(p=>p.x>=a&&p.x<=l&&p.z>=d&&p.z<=c).map(p=>p.id);u.length&&this.setMulti([...new Set([...this.selection(),...this.withGroups(u)])]);break}case"opening":case"furniture":case"furnset":case"rotate":case"aim":case"resize":case"outdoor":case"solarmove":case"solarturn":case"roofmove":case"roofcorner":case"roofvertex":case"cablept":case"outvertex":case"outbox":case"pipept":case"poolport":case"pooljoint":n.moved?this.pushHistory(n.base):(n.kind==="poolport"||n.kind==="pooljoint")&&this.openCard(n.pool,`${n.kind==="poolport"?"port":"joint"}:${n.id}`);break;case"holopt":case"bgmove":case"bgscale":case"bgrotate":n.moved&&this.pushHistory(n.base);break;case"pooldev":{n.moved?this.pushHistory(n.base):((s=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===n.id))==null?void 0:s.type)==="pool_valve"?this.togglePoolValve(n.id):this.poolArea&&this.openCard(this.poolArea.id,`dev:${n.id}`);break}case"device":n.moved?this.pushHistory(n.base):this.selectItem("device",n.entityId);break;case"vertex":case"room":n.moved&&this.pushHistory(n.base),this._guides={};break;default:break}}onWheel(t){t.preventDefault();let[e,n]=this.localPoint(t);this.zoomAt(Math.exp(-t.deltaY*(t.deltaMode===1?.05:.0015)),e,n)}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e[0]-n[0],e[1]-n[1]),mid:[(e[0]+n[0])/2,(e[1]+n[1])/2]}}pushHistory(t){this.past.push(JSON.stringify(t)),this.past.length>Ud&&this.past.shift(),this.future=[],this._canUndo=!0,this._canRedo=!1}restoreLive(t){this._doc=t,this.dispatchEvent(new CustomEvent("building-changed",{detail:{building:t},bubbles:!0,composed:!0}))}roomDelta(t,e,n){var l;if(n)return e;let i=this._doc.settings.grid,o=[Math.round(e[0]/i)*i,Math.round(e[1]/i)*i],a=lo/this._view.scale;this._guides={};for(let d of((l=this.floor)==null?void 0:l.rooms)??[])if(d.id!==t.id)for(let c of d.points)for(let u of t.points){let p=Math.hypot(u[0]+e[0]-c[0],u[1]+e[1]-c[1]);p<a&&(a=p,o=[c[0]-u[0],c[1]-u[1]],this._guides={point:c})}return o}roomAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.rooms)??[]).filter(s=>Y(t,s.points)).sort((s,a)=>Rt(s.points)-Rt(a.points))[0])==null?void 0:o.id)??null}outdoorAt(t){var i,o;return((o=(((i=this.floor)==null?void 0:i.outdoor)??[]).filter(s=>s.points.length>=3&&Y(t,s.points)).sort((s,a)=>Rt(s.points)-Rt(a.points))[0])==null?void 0:o.id)??null}get drawingPoints(){return this._tool==="polygon"||(this._tool==="outdoor"||this._tool==="pool"&&!this._pipeMode)&&this._outdoorFree}addDraftPoint(t,e){let n=this._draft;if(n.length>=3){let[o,s]=this.toScreen(n[0]);if(Math.hypot(o-e[0],s-e[1])<14){this.closeDraft();return}}let i=n[n.length-1];i&&Math.hypot(i[0]-t[0],i[1]-t[1])<1e-6||(this._draft=[...n,t])}closeDraft(){this._draft.length>=3&&Math.abs(Rt(this._draft))>.05&&(this._tool==="outdoor"||this._tool==="pool"?this.addOutdoor(this._draft):this.addRoom(this._draft)),this._draft=[],this._cursor=null,this._guides={}}measureStep(t){let e=this._draft[this._draft.length-1];if(!e||!(this._measureLen>0))return;let n=gn(e,this._measureLen,t),i=this._draft[0];if(this._draft.length>=3&&Math.hypot(n[0]-i[0],n[1]-i[1])<.01){this.closeDraft();return}this._draft=[...this._draft,n]}rectBySize(){let t=this._draft[0]??[0,0],[e,n]=this._rectSize;e>.1&&n>.1&&(this.addRoom([t,gn(t,e,"right"),gn(gn(t,e,"right"),n,"down"),gn(t,n,"down")]),this._draft=[])}renderMeasureForm(){let t=this._draft,e=t[0],n=t[t.length-1],i=e&&n&&t.length>1?Math.hypot(n[0]-e[0],n[1]-e[1]):0,o=[["up","\u2191"],["left","\u2190"],["right","\u2192"],["down","\u2193"]],s=a=>Bt(this.hass,a,2);return g`<section>
      <h3>${this.t("measure")}</h3>
      ${e?g`<p class="fp3d-sub">${this.t("measure_from",{x:this.m(e[0]),z:this.m(e[1])})}</p>
            <div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${qn(this.t("measure_length"),this.unit)}
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
                ${o.map(([a,l])=>g`<button class="fp3d-btn fp3d-arrow-${a}" title=${this.t(`dir_${a}`)} @click=${()=>this.measureStep(a)}>${l}</button>`)}
              </div>
            </div>
            ${t.length>1?g`<ol class="fp3d-measure-list">
                  ${t.slice(1).map((a,l)=>g`<li>${this.m(Math.hypot(a[0]-t[l][0],a[1]-t[l][1]))}</li>`)}
                </ol>`:$}
            <div class="fp3d-actions">
              <button class="fp3d-btn fp3d-primary" ?disabled=${t.length<3} @click=${()=>this.closeDraft()}>${this.t("measure_close")}</button>
              <button class="fp3d-btn" ?disabled=${t.length<2} @click=${()=>this._draft=t.slice(0,-1)}>${this.t("measure_undo")}</button>
            </div>
            ${t.length>=3?g`<p class="fp3d-sub">${this.t("measure_gap",{gap:s(i)})}</p>`:$}`:g`<p class="fp3d-sub">${this.t("measure_start")}</p>`}
      <h4 class="fp3d-lib-head">${this.t("rect_by_size")}</h4>
      <div class="fp3d-form">
        ${this.len(this.t("width"),this._rectSize[0],a=>this._rectSize=[Math.max(.1,a),this._rectSize[1]],.01,.1)}
        ${this.len(this.t("depth"),this._rectSize[1],a=>this._rectSize=[this._rectSize[0],Math.max(.1,a)],.01,.1)}
        <button class="fp3d-btn fp3d-wide" @click=${()=>this.rectBySize()}>${this.t("rect_add")}</button>
      </div>
      <p class="fp3d-sub">${this.t("measure_hint")}</p>
    </section>`}addFreeWall(t,e){if(!this.floor)return;let n={id:tt("wall"),a:[z(t[0]),z(t[1])],b:[z(e[0]),z(e[1])],thickness:null};this.change((i,o)=>o.walls=[...o.walls??[],n]),this.selectItem("wall",n.id)}get freeWall(){var t;return this._wallId?(((t=this.floor)==null?void 0:t.walls)??[]).find(e=>e.id===this._wallId):void 0}updateFreeWall(t){let e=this._wallId;e&&this.change((n,i)=>Object.assign((i.walls??[]).find(o=>o.id===e),t))}deleteFreeWall(){let t=this._wallId;!t||!this.isAdmin||!this.confirmFixedDelete("wall",t)||(this.change((e,n)=>{n.walls=(n.walls??[]).filter(i=>i.id!==t),n.openings=n.openings.filter(i=>i.wall!==t)}),this._wallId=null)}renderFreeWalls(t){return H`<g>${(t.walls??[]).map(e=>{let[n,i]=this.toScreen(e.a),[o,s]=this.toScreen(e.b),a=e.id===this._wallId;return H`<g data-free-wall=${e.id} class=${`fp3d-free-wall${a?" fp3d-free-wall-sel":""}`}>
        <line class="fp3d-hit" x1=${n} y1=${i} x2=${o} y2=${s} />
        <line class="fp3d-free-wall-line" x1=${n} y1=${i} x2=${o} y2=${s} />
      </g>
      ${a&&this.isAdmin&&!Po(e,!0,this._doc.settings)?H`<g class="fp3d-vertex" data-wall-end=${`${e.id}:a`}><circle cx=${n} cy=${i} r="16" class="fp3d-hit" /><circle cx=${n} cy=${i} r="6" /></g>
            <g class="fp3d-vertex" data-wall-end=${`${e.id}:b`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`:$}
      ${a&&e.slope?H`<text class="fp3d-vertex-no" x=${n+9} y=${i-9}>1</text><text class="fp3d-vertex-no" x=${o+9} y=${s-9}>2</text>`:$}`})}</g>`}renderFreeWallForm(t){var c;let e=this.isAdmin,n=Math.hypot(t.b[0]-t.a[0],t.b[1]-t.a[1]),i=u=>{let h=Math.max(.1,u)/(n||1);this.updateFreeWall({b:[z(t.a[0]+(t.b[0]-t.a[0])*h),z(t.a[1]+(t.b[1]-t.a[1])*h)]})},o=[(t.a[0]+t.b[0])/2,(t.a[1]+t.b[1])/2],s=(u,p)=>{let h=p-o[u],f=m=>u===0?[z(m[0]+h),m[1]]:[m[0],z(m[1]+h)];this.updateFreeWall({a:f(t.a),b:f(t.b)})},a=((c=this.floor)==null?void 0:c.height)??2.5,l=t.slope??null,d=u=>this.updateFreeWall({slope:u?[Math.round(Math.max(.05,u[0])*1e3)/1e3,Math.round(Math.max(.05,u[1])*1e3)/1e3]:null});return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("free_wall")}</h3>${this.fixButton("wall",t.id)}</div>
      <div class="fp3d-form">
        ${this.len(this.t("x"),o[0],u=>s(0,u))} ${this.len(this.t("z"),o[1],u=>s(1,u))}
        <p class="fp3d-sub fp3d-wide">${this.t("wall_pos_hint")}</p>
        ${this.len(this.t("wall_length"),n,i,.01,.1)}
        ${this.len(this.t("wall_thickness"),t.thickness??this._doc.settings.wall_interior,u=>this.updateFreeWall({thickness:Math.min(1,Math.max(.02,u))}),.01,.02)}
        ${l?g`${this.len(this.t("wall_slope_start",{n:1}),l[0],u=>d([u,l[1]]),.05,.05)}
            ${this.len(this.t("wall_slope_end",{n:2}),l[1],u=>d([l[0],u]),.05,.05)}`:this.len(this.t("wall_height"),t.height??a,u=>this.updateFreeWall({height:u>=a-.005?null:Math.max(.05,u)}),.05,.05)}
        ${e?g`<button class="fp3d-btn" aria-pressed=${!!l} title=${this.t("wall_slope_hint")} @click=${()=>d(l?null:[t.height??a,t.height??a])}>◢ ${this.t("wall_slope")}</button>`:$}
      </div>
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFreeWall()}>${this.t("delete")}</button>
          </div>`:$}
      <p class="fp3d-sub">${this.t("free_wall_hint")}</p>
    </section>`}addHole(t,e){if(!this.floor)return;let n={id:tt("hole"),type:"stairwell",x:z((t[0]+e[0])/2),z:z((t[1]+e[1])/2),w:z(e[0]-t[0]),d:z(e[1]-t[1]),h:.02,rotation:0,variant:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}addOutdoor(t){if(!this.floor)return;let e=this._tool==="pool"?"pool":this._outdoorType??"lawn",n={id:tt("outdoor"),type:e,points:t.map(([o,s])=>[z(o),z(s)])},i=e==="pool"&&!this._outdoorFree?this._poolShape:"rect";if(i==="round"||i==="oval"){let o=zt(n.points);n.points=xi(i,o.x0,o.z0,o.x1,o.z1),n.pool_shape=i}e==="pool"&&this.pipeRules&&(n.pool={}),this.change((o,s)=>s.outdoor.push(n)),this.selectItem("outdoor",n.id)}get outdoorArea(){var t;return this._outdoorId?(t=this.floor)==null?void 0:t.outdoor.find(e=>e.id===this._outdoorId):void 0}updateOutdoor(t){let e=this._outdoorId;this.change((n,i)=>le(i.outdoor.find(o=>o.id===e),t))}deleteOutdoor(){var i,o,s;let t=this._outdoorId;if(!t||!this.isAdmin||!this.confirmFixedDelete("outdoor",t))return;let e=(i=this.floor)==null?void 0:i.outdoor.find(a=>a.id===t),n=((s=(o=e==null?void 0:e.pool)==null?void 0:o.pipes)==null?void 0:s.length)??0;(e==null?void 0:e.type)==="pool"&&n&&!confirm(this.t("pool_delete_confirm",{n}))||(this.change((a,l)=>l.outdoor=l.outdoor.filter(d=>d.id!==t)),this._outdoorId=null)}duplicateOutdoor(){let t=this.outdoorArea;if(!t||!this.isAdmin)return;let e={...t,id:tt("outdoor"),points:t.points.map(([n,i])=>[z(n+.5),z(i+.5)])};this.change((n,i)=>i.outdoor.push(e)),this.selectItem("outdoor",e.id)}addRoom(t){if(!this.floor)return;let e=tt("room"),n=this.floor.rooms.length+1;this.change((i,o)=>o.rooms.push({id:e,name:this.t("new_room",{n}),area_id:null,points:t.map(([s,a])=>[z(s),z(a)]),floor_material:"wood"})),this._roomId=e,this._vertex=null}onKey=t=>{if(this.shiftHeld=t.shiftKey,t.composedPath().some(i=>i instanceof HTMLInputElement||i instanceof HTMLSelectElement||i instanceof HTMLTextAreaElement)||!this.isConnected||!this.offsetParent)return;let n=t.ctrlKey||t.metaKey;if(!(this._wallView&&!(n&&["z","y"].includes(t.key.toLowerCase())))){if(n&&t.key.toLowerCase()==="z")t.preventDefault(),t.shiftKey?this.redo():this.undo();else if(n&&t.key.toLowerCase()==="y")t.preventDefault(),this.redo();else if(n&&t.key.toLowerCase()==="d")t.preventDefault(),this._furnitureId?this.duplicateFurniture():this.duplicateRoom();else if(t.key==="Delete"||t.key==="Backspace"&&(this._tool==="select"||this._tool==="furniture"))this._deviceId?this.deleteItem("device",this._deviceId):this._outdoorId?this.deleteOutdoor():this._wallId?this.deleteFreeWall():this._openingId?this.deleteOpening():this._furnitureId?this.deleteFurniture():this._vertex!==null?this.deleteVertex(this._vertex):this.deleteRoom();else if(t.key.toLowerCase()==="l"&&!n&&this._tool==="roof"&&this.roofSection&&!this._doc.settings.lock_plan)this.updateRoofSection({locked:!this.roofSection.locked});else if(t.key.toLowerCase()==="l"&&!n&&this._furnitureId&&this.selection().length>1)this.lockSelection(!this.selection().every(i=>this.isFixedItem("furniture",i)));else if(t.key.toLowerCase()==="l"&&!n&&(this._furnitureId||this._deviceId)){let i=this.selectedFix;this.toggleFixed(i.kind,i.id)}else if(Object.prototype.hasOwnProperty.call(Qd,t.key)&&!n&&(this._tool==="select"||this._tool==="furniture")){let i=t.altKey?.01:t.shiftKey?.1:this._doc.settings.grid,[o,s]=Qd[t.key];this.nudge(o*i,s*i)&&t.preventDefault()}else if(t.key.toLowerCase()==="r"&&!n&&this._furnitureId)this.rotateFurniture(t.shiftKey?-90:90);else if(t.key==="Backspace"&&this.drawingPoints)this._draft=this._draft.slice(0,-1);else if(t.key==="Enter"&&this.drawingPoints)this.closeDraft();else if(t.key==="Escape"){if(this._ctx){this._ctx=null;return}if(this._pipeDraft){this._pipeDraft=null;return}if(this._pipeMode){this._pipeMode=!1;return}this._draft.length?this._draft=[]:this._tool!=="select"?this._tool="select":this.selectItem("room",null),this._cursor=null}}};nudge(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=this.selectedFix,o=this._furnitureId?this.selection():[];if(i&&this.isFixedItem(i.kind,i.id)||o.some(a=>this.isFixedItem("furniture",a)))return this._fixedHint=!0,!0;let s=a=>[z(a[0]+t),z(a[1]+e)];if(o.length>1){let a=new Set(o);return this.change((l,d)=>{for(let c of d.furniture)a.has(c.id)&&([c.x,c.z]=s([c.x,c.z]))}),!0}if(this._deviceId){let a=this._deviceId;if(!n.placements.some(l=>l.entity_id===a))return!1;this.change((l,d)=>{let c=d.placements.find(u=>u.entity_id===a);[c.x,c.z]=s([c.x,c.z])})}else if(this._furnitureId){let a=this._furnitureId;this.change((l,d)=>{let c=d.furniture.find(u=>u.id===a);c&&([c.x,c.z]=s([c.x,c.z]))})}else if(this._openingId){let a=this.opening,l=a?Ce(a,n.rooms,n.walls??[]):null;if(!a||!l)return!1;let d=l.room.points[l.edge],c=l.room.points[(l.edge+1)%l.room.points.length],u=Math.hypot(c[0]-d[0],c[1]-d[1])||1,p=(t*(c[0]-d[0])+e*(c[1]-d[1]))/u;if(Math.abs(p)<1e-9)return!0;this.updateOpening({offset:this.clampOffset(l.room,l.edge,a.width,a.offset+p)})}else if(this._wallId){let a=this._wallId;this.change((l,d)=>{let c=(d.walls??[]).find(u=>u.id===a);c&&([c.a,c.b]=[s(c.a),s(c.b)])})}else if(this._outdoorId){let a=this._outdoorId;this.change((l,d)=>{let c=d.outdoor.find(u=>u.id===a);c&&(c.points=c.points.map(s))})}else if(this._roomId){let a=this._roomId,l=this._vertex,d=n.rooms.find(u=>u.id===a);if(!d)return!1;let c=new Set(n.placements.filter(u=>Y([u.x,u.z],d.points)).map(u=>u.entity_id));this.change((u,p)=>{let h=p.rooms.find(f=>f.id===a);if(l!==null&&l<h.points.length){h.points[l]=s(h.points[l]);return}h.points=h.points.map(s);for(let f of p.placements)c.has(f.entity_id)&&([f.x,f.z]=s([f.x,f.z]))})}else return!1;return!0}get freeHaFloors(){var e;let t=new Set(this._doc.floors.map(n=>n.ha_floor));return Object.values(((e=this.hass)==null?void 0:e.floors)??{}).filter(n=>!t.has(n.floor_id)).sort((n,i)=>(n.level??99)-(i.level??99)||n.name.localeCompare(i.name))}unplacedAreas(t){var n;if(!t.ha_floor)return[];let e=new Set(this._doc.floors.flatMap(i=>[...i.rooms.map(o=>o.area_id),...(i.outdoor??[]).map(o=>o.area_id??null)]));return Object.values(((n=this.hass)==null?void 0:n.areas)??{}).filter(i=>i.floor_id===t.ha_floor&&!e.has(i.area_id)).sort((i,o)=>i.name.localeCompare(o.name))}addFloor(t=null){let e=this._doc.floors,n=tt("floor"),i=(t==null?void 0:t.name)??(e.length===0?this.t("default_floor"):this.t("new_floor",{n:e.length})),o={...Ca(n,i,Ha(e,t==null?void 0:t.level)),ha_floor:(t==null?void 0:t.floor_id)??null},s=structuredClone(this._doc),a=s.floors.findIndex(l=>l.elevation>o.elevation);s.floors.splice(a<0?s.floors.length:a,0,o),this.setDoc(s),this._floorId=n,this._roomId=null,this._floorMenu=!1,this.fit()}addAreaRooms(t){let e=this.unplacedAreas(t);if(!e.length)return;let n=ja(t,e,()=>tt("room"));this.change((i,o)=>o.rooms.push(...n)),this.fit()}moveFloor(t){let e=this._doc.floors.findIndex(o=>o.id===this._floorId),n=e+t;if(e<0||n<0||n>=this._doc.floors.length)return;let i=structuredClone(this._doc);[i.floors[e],i.floors[n]]=[i.floors[n],i.floors[e]],this.setDoc(i)}deleteFloor(){var n;let t=this.floor;if(!t||!confirm(this.t("delete_floor_confirm",{name:t.name})))return;let e=structuredClone(this._doc);e.floors=e.floors.filter(i=>i.id!==t.id),this.setDoc(e),this._floorId=((n=e.floors[0])==null?void 0:n.id)??null,this._roomId=null}deleteRoom(){let t=this._roomId;!t||!this.isAdmin||!this.confirmFixedDelete("room",t)||(this.change((e,n)=>{let i=n.rooms.find(o=>o.id===t);n.rooms=n.rooms.filter(o=>o.id!==t),n.openings=n.openings.filter(o=>o.room_id!==t||o.wall),i&&(n.placements=n.placements.filter(o=>!Y([o.x,o.z],i.points)))}),this._roomId=null,this._vertex=null)}duplicateRoom(){let t=this.room;if(!t||!this.isAdmin)return;let e=tt("room");this.change((n,i)=>i.rooms.push({...structuredClone(t),id:e,points:t.points.map(([o,s])=>[z(o+.5),z(s+.5)])})),this._roomId=e}roofFixed(t){return!!t&&(!!t.locked||!!this._doc.settings.lock_plan)}renderRoofFloors(){let t=[...this._doc.floors].sort((e,n)=>n.elevation-e.elevation);return t.length<2?$:g`<div class="fp3d-seg fp3d-dev-source">
      ${t.map(e=>g`<button aria-pressed=${e.id===this._floorId} @click=${()=>this._floorId=e.id}>${e.name}</button>`)}
    </div>`}get roofSection(){var t;return this._roofId?(t=this._doc.settings.roof.sections)==null?void 0:t.find(e=>e.id===this._roofId):void 0}useRoofSections(t=!1){if(!this.isAdmin)return;let e=(this._doc.settings.roof.sections??[]).length>0;t&&e&&!confirm(this.t("roof_regen_confirm"))||(this.change(n=>{n.settings.roof.type="custom",(t||!e)&&(n.settings.roof.sections=Dc(n,()=>tt("roof")))}),this._roofId=null)}addRoofSection(t,e){if(!this.isAdmin)return;let n=Hc(this._doc,t[0],t[1],e[0],e[1]),i=Math.min(...this._doc.floors.map(d=>d.elevation)),o=n===null,s=z(n??i+2.4),a=o?6:this._doc.settings.roof.pitch||35,l={id:tt("roof"),x0:z(t[0]),z0:z(t[1]),x1:z(e[0]),z1:z(e[1]),shape:o?"pent":"gable",axis:e[0]-t[0]>=e[1]-t[1]?"x":"z",eave_a:s,eave_b:s,pitch_a:a,pitch_b:a,base:s,overhang:o?.15:null,...o?{open:!0}:{}};this.change(d=>{d.settings.roof.type="custom",d.settings.roof.sections=[...d.settings.roof.sections??[],l]}),this._roofId=l.id}takeRoofOutline(){let t=this.floor,e=this._roofId;if(!t||!e||!this.isAdmin)return;let n=Ki(t.rooms,t.walls??[],this._doc.settings.wall_exterior,this._doc.settings.wall_interior);if(!n)return;let i=n.map(([o,s])=>[z(o),z(s)]);this.updateRoofSection({shape:"flat",points:i,...qi(i)})}addDormer(t){let e=this.roofSection;if(!e||!this.isAdmin)return;let n=Oc(e,t,tt("roof"));this.change(i=>{i.settings.roof.sections=[...i.settings.roof.sections??[],n]}),this._roofId=n.id}updateRoofSection(t){let e=this._roofId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var o;let i=(o=n.settings.roof.sections)==null?void 0:o.find(s=>s.id===e);i&&Object.assign(i,t)}))}turnRoofSection(t){let e=this._roofId;!e||!this.isAdmin||this.change(n=>{let i=n.settings.roof.sections??[],o=i.find(d=>d.id===e);if(!o||o.points&&o.points.length>=3)return;let s=t-(o.rotation??0);if(!s)return;let a=o.pivot??[z((o.x0+o.x1)/2),z((o.z0+o.z1)/2)],l=new Set(i.filter(d=>d!==o&&Ss(i,d)===o).map(d=>d.id));n.settings.roof.sections=i.map(d=>{if(d!==o&&!l.has(d.id))return d;let c=Tc(d,s,a);return{...c,x0:z(c.x0),x1:z(c.x1),z0:z(c.z0),z1:z(c.z1),pivot:c.pivot&&[z(c.pivot[0]),z(c.pivot[1])],rotation:z(c.rotation??0)}})})}deleteRoofSection(){let t=this._roofId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.sections=(e.settings.roof.sections??[]).filter(n=>n.id!==t)),this._roofId=null)}duplicateRoofSection(){let t=this.roofSection;if(!t||!this.isAdmin)return;let e={...structuredClone(t),id:tt("roof"),x0:z(t.x0+1),x1:z(t.x1+1),z0:z(t.z0+1),z1:z(t.z1+1)};t.pivot&&(e.pivot=[z(t.pivot[0]+1),z(t.pivot[1]+1)]),this.change(n=>n.settings.roof.sections=[...n.settings.roof.sections??[],e]),this._roofId=e.id}renderRoofSections(){let t=this._doc.settings.roof,e=t.type==="custom"?t.sections??[]:[];return H`<g class="fp3d-roof-layer">${e.map((n,i)=>{let o=n.id===this._roofId,s=Kt(n),a=n.shape==="flat"&&n.points&&n.points.length>=3?n.points:null,l=Ss(e,n),d=l?Kt(Cc(l,n)):s,c=(a??[d.at(d.u0,0),d.at(d.u1,0),d.at(d.u1,d.w),d.at(d.u0,d.w)]).map(b=>this.toScreen(b)),u=(b,v)=>{let[y,x]=this.toScreen(b),[P,A]=this.toScreen(v);return H`<line x1=${y} y1=${x} x2=${P} y2=${A} />`},p=n.shape==="flat"||n.shape==="parapet"?null:xs(n,{u0:0,u1:0,a:0,b:0}),h=p?H`${p.ridges.map(([b,v])=>u(s.at(b[0],b[1]),s.at(v[0],v[1])))}`:$,[f,m]=this.toScreen(s.at((s.u0+s.u1)/2,s.w/2)),_=`${this.roofFixed(n)?"\u{1F512} ":""}${i+1} \xB7 ${n.dormer?this.t("roof_dormer"):n.open?this.t("roof_open_short"):this.t(`roof_shape_${n.shape}`)} \xB7 ${this.m(Gi(n),1)}`;return H`<g data-roof=${n.id} class=${`fp3d-roof-sec${o?" fp3d-roof-sel":""}`}>
          <polygon points=${c.map(b=>b.join(",")).join(" ")} />
          <g class="fp3d-roof-ridge">${h}</g>
          <text x=${f} y=${m-14}>${_}</text>
        </g>
        ${o&&this.isAdmin&&!this.roofFixed(n)&&a?a.map((b,v)=>{let[y,x]=this.toScreen(b);return H`<g class="fp3d-vertex" data-roof-vertex=${`${n.id}:${v}`}><circle cx=${y} cy=${x} r="16" class="fp3d-hit" /><circle cx=${y} cy=${x} r="6" /></g>`}):$}
        ${o&&this.isAdmin&&!this.roofFixed(n)&&!a?[[0,0],[1,0],[1,1],[0,1]].map(([b,v])=>{let[y,x]=this.toScreen(ke(Me(n),[b?Math.max(n.x0,n.x1):Math.min(n.x0,n.x1),v?Math.max(n.z0,n.z1):Math.min(n.z0,n.z1)]));return H`<g class="fp3d-vertex" data-roof-corner=${`${n.id}:${b}:${v}`}><circle cx=${y} cy=${x} r="16" class="fp3d-hit" /><circle cx=${y} cy=${x} r="6" /></g>`}):$}`})}</g>`}faceHit(t,e){return t.wall?{u:(e[0]-t.o[0])*t.eu[0]+(e[1]-t.o[2])*t.eu[2],s:Number.NaN}:Qi(t,e)}renderSolarFields(){let t=this._doc.settings.roof.solar??[];if(!t.length)return $;let e=$t(this._doc);return H`<g class="fp3d-solar-layer">${t.map(n=>{let i=Dt(this._doc,n,e);if(!i||i.wall&&i.wall.floorId!==this._floorId)return $;let o=n.id===this._solarId,s=$;if(o&&i.unbounded&&this.isAdmin&&!n.locked){let[a,l]=Xn(i,n),d=(n.rotation??0)*Math.PI/180,c=.9+Math.max(...Se(i,n,!0).flatMap(m=>m.corners.map(_=>Math.hypot(_[0]-a,_[2]-l))))*.5,[u,p]=this.toScreen([a,l]),[h,f]=this.toScreen([a+Math.sin(d)*c,l-Math.cos(d)*c]);s=H`<g class="fp3d-rotate" data-solar-turn=${n.id}>
          <line x1=${u} y1=${p} x2=${h} y2=${f} />
          <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
          <circle cx=${h} cy=${f} r="8" />
          <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
        </g>`}return H`<g data-solar=${n.id} class=${`fp3d-solar${o?" fp3d-solar-sel":""}${o&&this._solarPick?" fp3d-solar-pick":""}`}>${Se(i,n,o).map(a=>{let l=i.wall?Math.max(.3,...a.corners.map(c=>(c[0]-i.o[0])*i.n[0]+(c[2]-i.o[2])*i.n[2])):0,d=i.wall?[a.corners[0],a.corners[1]].flatMap((c,u)=>{let p=[c[0],c[2]],h=[c[0]+i.n[0]*l,c[2]+i.n[2]*l];return u===0?[p,h]:[h,p]}):a.corners.map(c=>[c[0],c[2]]);return H`<polygon data-cell=${a.cell} class=${a.skipped?"fp3d-solar-off":""} points=${d.map(c=>this.toScreen(c).join(",")).join(" ")} />`})}</g>${s}`})}</g>`}renderRoofWindows(){let t=this._doc.settings.roof.windows??[];if(!t.length)return $;let e=new Map($t(this._doc).map(n=>[n.key,n]));return H`<g class="fp3d-roofwin-layer">${t.map(n=>{let i=e.get(n.face),o=i?Qc(i,n):null;return o?H`<g data-roofwin=${n.id} class=${`fp3d-roofwin${n.id===this._roofWinId?" fp3d-roofwin-sel":""}`}><polygon points=${o.map(s=>this.toScreen([s[0],s[2]]).join(",")).join(" ")} /></g>`:$})}</g>`}addRoofWindow(){if(!this.isAdmin)return;let t=$t(this._doc).filter(i=>!i.flat),e=Zi(t,this._doc.settings.north??0)??$t(this._doc)[0];if(!e)return;let n=Ls(e,tt("rwin"));this.change(i=>i.settings.roof.windows=[...i.settings.roof.windows??[],n]),this._roofWinId=n.id,this._roofId=null}updateRoofWindow(t){let e=this._roofWinId;!e||!this.isAdmin||this.change(n=>{var s;let i=(s=n.settings.roof.windows)==null?void 0:s.find(a=>a.id===e);if(!i)return;Object.assign(i,t);let o=$t(n).find(a=>a.key===i.face);o&&Object.assign(i,Sn(o,En(i)))})}deleteRoofWindow(){let t=this._roofWinId;!t||!this.isAdmin||(this.change(e=>e.settings.roof.windows=(e.settings.roof.windows??[]).filter(n=>n.id!==t)),this._roofWinId=null)}renderRoofWindowList(){let t=this._doc.settings.roof.windows??[],e=new Map($t(this._doc).map(n=>[n.key,n]));return g`<section>
      <h3>🪟 ${this.t("roof_windows")}</h3>
      <p class="fp3d-sub">${this.t(e.size?"roof_windows_hint":"solar_no_roof")}</p>
      ${t.length?g`<div class="fp3d-room-list">
            ${t.map((n,i)=>{let o=e.get(n.face);return g`<div class="fp3d-row">
                <button class="fp3d-dev-name" @click=${()=>{this._roofWinId=n.id,this._roofId=null}}>
                  <span>${this.t("roof_window")} ${i+1} · ${o?this.faceLabel(o):this.t("solar_face_gone")}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions"><button class="fp3d-btn" ?disabled=${!this.isAdmin||!e.size} @click=${()=>this.addRoofWindow()}>+ ${this.t("roof_window")}</button></div>
    </section>`}renderRoofWindowForm(t){let e=this.isAdmin,n=$t(this._doc),i=l=>this.updateRoofWindow(l),o=(this._doc.settings.roof.windows??[]).findIndex(l=>l.id===t.id)+1,s=this.entityOptions(l=>l.startsWith("cover.")),a=this.entityOptions(l=>ar(l)||Lt(l));return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofWinId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        <div class="fp3d-h3row">
          <h3>🪟 ${this.t("roof_window")} ${o}</h3>
          ${e?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>i({locked:!t.locked})}>
                ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
              </button>`:$}
        </div>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select ?disabled=${!e} @change=${l=>{let d=n.find(c=>c.key===l.target.value);d&&i({...Ls(d,t.id),w:t.w,h:t.h,cover:t.cover,contact:t.contact,tilt:t.tilt,window:t.window,name:t.name,float:t.float})}}>
              ${n.map(l=>g`<option value=${l.key} ?selected=${l.key===t.face}>${this.faceLabel(l)}</option>`)}
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
        ${e?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofWindow()}>${this.t("delete")}</button></div>`:$}
      </section>`}cableSegments(){var o;if(((o=this.cableCache)==null?void 0:o.doc)===this._doc)return this.cableCache.segs;let t=this._doc,e=new Map((t.settings.roof.solar??[]).map(s=>[s.id,0])),n={grid:0,solar:0,battery:0,soc:null,tariff:null,consumption:0},i=[];try{i=ud({building:t,consumers:[],summary:n,fieldPower:e}).filter(s=>s.key)}catch{i=[]}return this.cableCache={doc:t,segs:i},i}cableKeys(){let t=[...new Set(this.cableSegments().map(n=>n.key))],e=n=>n.startsWith("solar:")?0:n.startsWith("inv:")?1:n.startsWith("bat:")?2:3;return t.sort((n,i)=>e(n)-e(i)||n.localeCompare(i))}cableLabel(t){let e=a=>{let l=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===a);return l?l.name||this.t(`furn_${l.type}`):"?"},n=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.type==="meter"),i=io(this._doc)?this.t("energy_hub"):n?n.name||this.t("furn_meter"):this.t("energy_meter");if(t==="grid")return`${i} \u2192 ${this.t("furn_grid_point")}`;let[o,s]=[t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1)];if(o==="solar"){let a=this._doc.settings.roof.solar??[],l=a.findIndex(c=>c.id===s),d=a[l];return`${(d==null?void 0:d.name)||`${this.t("solar_field")} ${l+1}`} \u2192 ${this.t("furn_inverter")}`}return o==="inv"?`${e(s)} \u2192 ${Vs(this._doc,s)?this.t("furn_grid_point"):i}`:`${this.t("furn_inverter")} \u2194 ${e(s)}`}layCable(t){if(!this.isAdmin||!this._floorId)return;let e=[];for(let o of this.cableSegments().filter(s=>s.key===t))for(let s of[o.a,o.b]){let a=[z(s[0]),z(s[2])],l=e[e.length-1];(!l||Math.hypot(l[0]-a[0],l[1]-a[1])>.05)&&e.push(a)}let n=e.length>2?e.slice(1,-1):e,i=this._floorId;this.change(o=>{o.settings.roof.cables=[...(o.settings.roof.cables??[]).filter(s=>s.id!==t),{id:t,floor_id:i,points:n.length?n:[e[0]??[0,0]],height:.03}]}),this._cableId=t}renderCables(){if(!vt("energy_pro"))return $;let t=this.cableSegments();if(!t.length)return $;let e=t.filter(s=>s.floorId===this._floorId),n=this._doc.settings.roof.cables??[],i=this._cableId,o=[...new Set(t.map(s=>s.key))];return H`<g class="fp3d-cable-layer">${o.map(s=>{let a=n.find(_=>_.id===s),l=`fp3d-cable fp3d-cable-${s.split(":")[0]}${a?" fp3d-cable-laid":""}${s===i?" fp3d-cable-sel":""}`,d=t.filter(_=>_.key===s),c=e.filter(_=>_.key===s).map(_=>{let b=this.toScreen([_.a[0],_.a[2]]),v=this.toScreen([_.b[0],_.b[2]]);return H`<line x1=${b[0]} y1=${b[1]} x2=${v[0]} y2=${v[1]} />`});if(!(a&&s===i&&a.floor_id===this._floorId&&!a.locked))return c.length?H`<g class=${l} data-cable=${s}><g class="fp3d-cable-hit">${c}</g>${c}</g>`:$;let u=d[0],p=d[d.length-1],h=[this.toScreen([u.a[0],u.a[2]]),...a.points.map(_=>this.toScreen(_)),this.toScreen([p.b[0],p.b[2]])],f=h.slice(0,-1).map((_,b)=>H`<line class="fp3d-cable-piece" data-cable-line=${s} data-cable-seg=${b} x1=${_[0]} y1=${_[1]} x2=${h[b+1][0]} y2=${h[b+1][1]} />`),m=a.points.map((_,b)=>{let v=this.toScreen(_);return H`<g class="fp3d-vertex" data-cable-pt=${`${s}:${b}`}><circle cx=${v[0]} cy=${v[1]} r="16" class="fp3d-hit" /><circle cx=${v[0]} cy=${v[1]} r="6" /></g>`});return H`<g class=${l} data-cable=${s}>${c}${f}${m}</g>`})}</g>`}renderCableSettings(){var o;let t=this.cableKeys();if(!t.length)return $;let e=this.isAdmin,n=this._doc.settings.roof.cables??[],i=this._cableId?n.find(s=>s.id===this._cableId):void 0;return g`<section>
      <h3>〰 ${this.t("cables_title")}</h3>
      <p class="fp3d-sub">${this.t("cables_hint")}</p>
      <div class="fp3d-room-list">
        ${t.map(s=>g`<div class="fp3d-row">
            <button
              class="fp3d-dev-name ${s===this._cableId?"fp3d-sel":""}"
              @click=${()=>{this._cableId=s===this._cableId?null:s;let a=n.find(l=>l.id===s);this._cableId&&a&&this._doc.floors.some(l=>l.id===a.floor_id)&&(this._floorId=a.floor_id)}}
            >
              <span>${this.cableLabel(s)}${n.some(a=>a.id===s)?g` <em class="fp3d-sub">· ${this.t("cable_laid")}</em>`:$}</span>
            </button>
          </div>`)}
      </div>
      ${this._cableId?g`<div class="fp3d-actions">
              ${i?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!i.locked} title=${this.t("fix_hint")} ?disabled=${!e} @click=${()=>this.change(s=>{var l;let a=(l=s.settings.roof.cables)==null?void 0:l.find(d=>d.id===i.id);a&&(a.locked=!a.locked)})}>
                      ${i.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                    </button>
                    <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(s=>s.settings.roof.cables=(s.settings.roof.cables??[]).filter(a=>a.id!==this._cableId))}>${this.t("cable_auto")}</button>`:g`<button class="fp3d-btn fp3d-primary" ?disabled=${!e||!this._floorId} @click=${()=>this.layCable(this._cableId)}>${this.t("cable_lay")}</button>`}
            </div>
            ${i?g`<div class="fp3d-form">
                    ${this.len(this.t("cable_height"),i.height,s=>this.change(a=>{var d;let l=(d=a.settings.roof.cables)==null?void 0:d.find(c=>c.id===i.id);l&&(l.height=Math.min(30,Math.max(0,z(s))))}),.05,0)}
                  </div>
                  <p class="fp3d-sub">${i.floor_id===this._floorId?this.t("cable_points_hint"):this.t("cable_other_floor",{floor:((o=this._doc.floors.find(s=>s.id===i.floor_id))==null?void 0:o.name)??""})}</p>`:$}`:$}
    </section>`}renderEnergyMarkers(){let t=this.floor;if(!t)return $;let e={inverter:"\u26A1",home_battery:"\u{1F50B}",wallbox:"\u{1F50C}",meter:"\u{1F4DF}",grid_point:"\u{1F3C1}"},n=this._doc.settings.roof.hologram,i=vt("energy_pro")&&(n==null?void 0:n.place)==="free"&&Number.isFinite(n.x)&&Number.isFinite(n.z)?this.toScreen([n.x,n.z]):null;return H`<g class="fp3d-energy-markers">${i?H`<g data-holo-pt="1" class="fp3d-energy-marker fp3d-holo-pt">
          <circle cx=${i[0]} cy=${i[1]} r="17" />
          <text x=${i[0]} y=${i[1]+6} class="fp3d-energy-icon">◈</text>
          <text x=${i[0]} y=${i[1]+32} class="fp3d-energy-name">${this.t("holo_settings")}</text>
          <title>${this.t("holo_place_free")}</title>
        </g>`:$}${t.furniture.filter(o=>ye.includes(o.type)).map(o=>{let[s,a]=this.toScreen([o.x,o.z]),l=o.id===this._furnitureId;return H`<g data-energy-device=${o.id} class=${`fp3d-energy-marker${l?" fp3d-energy-marker-sel":""}`}>
          <circle cx=${s} cy=${a} r="17" />
          <text x=${s} y=${a+6} class="fp3d-energy-icon">${e[o.type]??"\u26A1"}</text>
          ${l?H`<text x=${s} y=${a+32} class="fp3d-energy-name">${this.t(`furn_${o.type}`)}</text>`:$}
          <title>${this.t(`furn_${o.type}`)}</title>
        </g>`})}</g>`}faceLabel(t){if(t.key===Be)return this.t("solar_ground");if(t.wall){let{floorId:o,room:s,edge:a,free:l}=t.wall,d=this._doc.floors.find(p=>p.id===o),c=d==null?void 0:d.rooms.find(p=>p.id===s),u=l?this.t("solar_wall_free"):c?`${c.name}${a!=null?` ${a+1}\u2013${(a+1)%c.points.length+1}`:""}`:"";return`${this.t("solar_wall")} ${(d==null?void 0:d.name)??""} \xB7 ${u?`${u} \xB7 `:""}${this.t(`compass_${Ts(t,this._doc.settings.north??0)}`)} \xB7 ${this.m(t.lu,2)}`}let e=this._doc.settings.roof.sections??[],n=t.section?this.t("solar_section",{n:e.findIndex(o=>o.id===t.section)+1}):this.t("solar_main");if(t.flat)return`${n} \xB7 ${this.t("solar_flat")}`;let i=t.side==="c"||t.side==="d"?` \xB7 ${this.t("roof_shape_hip")}`:"";return`${n} \xB7 ${this.t(`compass_${Ts(t,this._doc.settings.north??0)}`)} \xB7 ${Math.round(t.pitch)}\xB0${i}`}addSolarField(){if(!this.isAdmin)return;let t=$t(this._doc),e=new Set((this._doc.settings.roof.solar??[]).map(s=>s.face)),n=this._doc.settings.north??0,i=Zi(t.filter(s=>!e.has(s.key)),n)??Zi(t,n);if(!i)return;let o=Ji(i,tt("pv"));this.change(s=>s.settings.roof.solar=[...s.settings.roof.solar??[],o]),this._solarId=o.id,this._roofId=null}selectSolar(t){var n;this._solarId=t,this._roofId=null;let e=(n=this._doc.settings.roof.solar)==null?void 0:n.find(i=>i.id===t);e!=null&&e.face.startsWith("wall:")&&(this._floorId=e.face.split(":")[1])}addWallField(){var n;if(!this.isAdmin)return;let t=this._floorId??((n=this._doc.floors[0])==null?void 0:n.id),e=t?Bc(this._doc,tt("pv"),t):null;e&&(this.change(i=>i.settings.roof.solar=[...i.settings.roof.solar??[],e]),this._solarId=e.id)}addGroundField(){if(!this.isAdmin)return;let t=As(this._doc,tt("pv"));this.change(e=>e.settings.roof.solar=[...e.settings.roof.solar??[],t]),this._solarId=t.id}updateSolar(t){let e=this._solarId;!e||!this.isAdmin||(t.locked===!1&&(this._fixedHint=!1),this.change(n=>{var s;let i=(s=n.settings.roof.solar)==null?void 0:s.find(a=>a.id===e);if(!i)return;Object.assign(i,t);let o=Dt(n,i);o&&Object.assign(i,Sn(o,i))}))}setSolarString(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var a;let i=n.settings.roof,o=(a=i.solar)==null?void 0:a.find(l=>l.id===e);if(!o)return;if(t==="new"){let l=i.strings??[],d={id:tt("str"),name:this.t("solar_string_n",{n:l.length+1}),entity:o.entity??null,inverter:null};i.strings=[...l,d],o.string=d.id}else o.string=t;let s=new Set((i.solar??[]).map(l=>l.string).filter(Boolean));i.strings=(i.strings??[]).filter(l=>s.has(l.id))})}updateSolarString(t){var i;let e=(i=this._doc.settings.roof.solar)==null?void 0:i.find(o=>o.id===this._solarId),n=e==null?void 0:e.string;!n||!this.isAdmin||this.change(o=>{var a;let s=(a=o.settings.roof.strings)==null?void 0:a.find(l=>l.id===n);s&&Object.assign(s,t)})}toggleSolarCell(t){this.updateSolarField(e=>{let n=new Set(e.skip??[]);n.has(t)?n.delete(t):n.add(t),e.skip=n.size?[...n].sort():null})}updateSolarField(t){let e=this._solarId;!e||!this.isAdmin||this.change(n=>{var o;let i=(o=n.settings.roof.solar)==null?void 0:o.find(s=>s.id===e);i&&t(i)})}deleteSolar(){let t=this._solarId;!t||!this.isAdmin||(this.change(e=>{let n=e.settings.roof;n.solar=(n.solar??[]).filter(o=>o.id!==t);let i=new Set(n.solar.map(o=>o.string).filter(Boolean));n.strings=(n.strings??[]).filter(o=>i.has(o.id))}),this._solarId=null)}renderSolarList(){let t=this._doc.settings.roof.solar??[],e=$t(this._doc),n=new Map(t.map(o=>[o.id,Dt(this._doc,o,e)])),i=this.isAdmin;return g`<section>
      ${this.renderRoofFloors()}
      <h3>☀ ${this.t("solar_fields")}</h3>
      <p class="fp3d-sub">${this.t(e.length?"solar_hint":"solar_no_roof")}</p>
      ${t.length?g`<div class="fp3d-room-list">
            ${t.map((o,s)=>{let a=n.get(o.id),l=a?Se(a,o).length:0;return g`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>this.selectSolar(o.id)}
                >
                  <span>${o.name||`${this.t("solar_field")} ${s+1}`} · ${a?this.faceLabel(a):this.t("solar_face_gone")} · ${this.t("solar_summary",{n:l,kwp:Bt(this.hass,l*(o.wp??400)/1e3,1)})}</span>
                </button>
              </div>`})}
          </div>`:$}
      <div class="fp3d-actions">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!i||!e.length} @click=${()=>this.addSolarField()}>+ ${this.t("solar_add")}</button>
        <button class="fp3d-btn" ?disabled=${!i} @click=${()=>this.addGroundField()}>+ ${this.t("solar_add_ground")}</button>
        <button class="fp3d-btn" ?disabled=${!i||!this._floorId} @click=${()=>this.addWallField()}>+ ${this.t("solar_add_wall")}</button>
      </div>
      ${(this._doc.settings.roof.strings??[]).length?g`<h4 class="fp3d-lib-head">${this.t("solar_strings")}</h4>
            ${(this._doc.settings.roof.strings??[]).map(o=>{let s=t.filter(c=>c.string===o.id),a=s.map(c=>n.get(c.id)?Se(n.get(c.id),c).length:0),l=a.reduce((c,u)=>c+u,0),d=s.reduce((c,u,p)=>c+a[p]*(u.wp??400)/1e3,0);return g`<p class="fp3d-sub">🔗 <b>${o.name}</b> · ${this.t("solar_string_sum",{fields:s.length,n:l,kwp:Bt(this.hass,d,1)})}</p>`})}`:$}
    </section>`}renderSolarForm(t){var h,f,m,_;let e=this.isAdmin,n=$t(this._doc),i=fe(this._doc),o=Dt(this._doc,t,n),s=t.face===Be,a=o?Se(o,t).length:0,l=Jn(t),d=l.reduce((b,v)=>b+v,0)-(((h=t.skip)==null?void 0:h.length)??0),c=this.entityOptions(b=>this.isPowerSensor(b)),u=b=>this.updateSolar(b),p=(this._doc.settings.roof.solar??[]).findIndex(b=>b.id===t.id)+1;return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._solarId=null}>‹ ${this.t("solar_fields")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>☀ ${t.name||`${this.t("solar_field")} ${p}`}</h3>
          ${e?g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>this.updateSolar({locked:!t.locked})}>
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
              @change=${b=>u({name:b.target.value.trim()||null})}
          /></label>
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_face")}
            <select
              ?disabled=${!e}
              @change=${b=>{let v=b.target.value,y={portrait:t.portrait,look:t.look,name:t.name,string:t.string,entity:t.entity,module_w:t.module_w,module_h:t.module_h,wp:t.wp};v===Be&&u({...As(this._doc,t.id),...y,rows:t.rows,cols:t.cols});let x=n.find(A=>A.key===v);x&&u(Rs(x,{...t,...y}));let P=i.find(A=>A.key===v);P&&u(Rs(P,{...t,...y,rows:1}))}}
            >
              ${o?$:g`<option selected>${this.t("solar_face_gone")}</option>`}
              ${n.map(b=>g`<option value=${b.key} ?selected=${b.key===t.face}>${this.faceLabel(b)}</option>`)}
              <option value=${Be} ?selected=${s}>${this.t("solar_ground")}</option>
              ${i.map(b=>g`<option value=${b.key} ?selected=${b.key===t.face}>${this.faceLabel(b)}</option>`)}
            </select></label
          >
          ${this.num(this.t("solar_rows"),l.length,b=>{var y;let v=Math.max(1,Math.min(40,Math.round(b)));u((y=t.layout)!=null&&y.length?{layout:Array.from({length:v},(x,P)=>t.layout[P]??t.layout[t.layout.length-1]),rows:v}:{rows:v})},1,1)}
          <label class="fp3d-field"
            >${this.t("solar_cols")}
            <input
              type="text"
              inputmode="numeric"
              ?disabled=${!e}
              .value=${(f=t.layout)!=null&&f.length?t.layout.join(", "):String(t.cols)}
              title=${this.t("solar_cols_hint")}
              @change=${b=>{let v=b.target.value.split(/[,;\s]+/).map(y=>parseInt(y,10)).filter(y=>Number.isFinite(y)&&y>=0);v.length&&(v.length===1?u({cols:Math.max(1,Math.min(60,v[0])),layout:null,skip:null}):u({layout:v.slice(0,40).map(y=>Math.min(60,y)),rows:Math.min(40,v.length),cols:Math.max(1,...v),skip:null}))}}
          /></label>
        </div>
        <p class="fp3d-sub">
          ${o&&!o.unbounded?g`${this.t("solar_face_size",{w:Bt(this.hass,o.lu,1),h:Bt(this.hass,o.ls,1)})} · `:$}${this.t("solar_cols_hint")}
        </p>
        ${(m=t.layout)!=null&&m.length&&new Set(t.layout).size>1?g`<div class="fp3d-seg fp3d-dev-source">
              ${["left","center","right"].map(b=>g`<button aria-pressed=${(t.align??"left")===b} ?disabled=${!e} @click=${()=>u({align:b})}>${this.t(`solar_align_${b}`)}</button>`)}
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
          ${this.len(this.t("solar_module_w"),t.module_w??1.13,b=>u({module_w:Math.max(.3,Math.min(3,z(b)))}),.01,.3)}
          ${this.len(this.t("solar_module_h"),t.module_h??1.72,b=>u({module_h:Math.max(.3,Math.min(3,z(b)))}),.01,.3)}
          ${this.num(this.t("solar_wp"),t.wp??400,b=>u({wp:Math.max(50,Math.min(1500,Math.round(b)))}),5,50)}
        </div>
        <div class="fp3d-actions">
          <button class="fp3d-btn" aria-pressed=${this._solarPick} ?disabled=${!e} @click=${()=>this._solarPick=!this._solarPick}>${this._solarPick?"\u2713 ":""}${this.t("solar_pick")}</button>
          ${(_=t.skip)!=null&&_.length?g`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>u({skip:null})}>${this.t("solar_pick_all")}</button>`:$}
        </div>
        ${this._solarPick?g`<p class="fp3d-sub">${this.t("solar_pick_hint")}</p>`:$}
        <div class="fp3d-form">
          ${s?g`${this.len(this.t("solar_base"),t.base??0,b=>u({base:b>.001?Math.min(60,z(b)):null}),.05,0)}
                ${this.num(this.t("solar_rotation"),t.rotation??0,b=>u(Zn(this._doc,t,b)),5)}
                <div class="fp3d-actions">
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Zn(this._doc,t,(t.rotation??0)-15))}>↺ 15°</button>
                  <button class="fp3d-chip" ?disabled=${!e} @click=${()=>u(Zn(this._doc,t,(t.rotation??0)+15))}>↻ 15°</button>
                </div>`:g`${this.len(this.t("solar_u"),t.u,b=>u({u:z(b)}),.05)} ${this.num(this.t(o!=null&&o.wall?"solar_v_wall":"solar_v"),t.v,b=>u({v:z(b)}),.05)}`}
          ${o!=null&&o.wall?g`${this.num(this.t("solar_tilt_wall"),t.tilt??0,b=>u({tilt:Math.max(0,Math.min(90,Math.round(b)))}),5,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${b=>u({flip:b.target.checked})} />
                  ${this.t("solar_flip_wall")}</label
                >`:$}
          ${o!=null&&o.flat?g`${this.num(this.t("solar_tilt"),t.tilt??15,b=>u({tilt:Math.max(0,Math.min(45,Math.round(b)))}),1,0)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" ?disabled=${!e} .checked=${!!t.flip} @change=${b=>u({flip:b.target.checked})} />
                  ${this.t("solar_flip")}</label
                >`:$}
        </div>
        <p class="fp3d-sub">
          ${this.t("solar_summary",{n:a,kwp:Bt(this.hass,a*(t.wp??400)/1e3,1)})}${a<d?g` · <b>${this.t("solar_partial",{n:a,total:d})}</b>`:$}
        </p>
        <h4 class="fp3d-lib-head">🔗 ${this.t("solar_string")}</h4>
        <div class="fp3d-form">
          <label class="fp3d-field fp3d-wide"
            >${this.t("solar_string")}
            <select ?disabled=${!e} @change=${b=>{let v=b.target.value;this.setSolarString(v===""?null:v)}}>
              <option value="" ?selected=${!t.string}>${this.t("solar_string_none")}</option>
              ${(this._doc.settings.roof.strings??[]).map(b=>g`<option value=${b.id} ?selected=${b.id===t.string}>${b.name}</option>`)}
              <option value="new">+ ${this.t("solar_string_new")}</option>
            </select></label
          >
          ${(()=>{var P;let b=(P=this._doc.settings.roof.strings)==null?void 0:P.find(A=>A.id===t.string);if(!b)return this.entitySelect(this.t("solar_entity"),t.entity??null,void 0,c,A=>u({entity:A==="none"?null:A}));let v=this.hass?nn(this.hass,this._doc.floors):null,y=A=>this._doc.floors.flatMap(F=>F.furniture.filter(T=>T.type===A).map(T=>({m:T,fl:F}))).map(({m:F,fl:T},S)=>{var k,E;let M=(k=v==null?void 0:v.get(F.id))==null?void 0:k.entity,w=((E=F.name)==null?void 0:E.trim())||(M&&this.hass?_t(this.hass,M):"");return{id:F.id,label:`${w||`${this.t(`furn_${A}`)} ${S+1}`} \xB7 ${T.name}`}}),x=[...y("inverter"),...y("home_battery")];return g`<label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_name")}
                <input type="text" ?disabled=${!e} .value=${b.name} @change=${A=>this.updateSolarString({name:A.target.value.trim()||b.name})}
              /></label>
              ${this.entitySelect(this.t("solar_string_entity"),b.entity??null,void 0,c,A=>this.updateSolarString({entity:A==="none"?null:A}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("solar_string_inverter")}
                <select ?disabled=${!e} @change=${A=>this.updateSolarString({inverter:A.target.value||null})}>
                  <option value="" ?selected=${!b.inverter}>${this.t(x.length?"solar_string_inverter_none":"solar_string_inverter_missing")}</option>
                  ${x.map(A=>g`<option value=${A.id} ?selected=${A.id===b.inverter}>${A.label}</option>`)}
                </select></label
              >`})()}
        </div>
        <p class="fp3d-sub">${this.t("solar_string_hint")}</p>
        <p class="fp3d-sub">${this.t("solar_form_hint")}</p>
        ${e?g`<div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!o} @click=${()=>o&&u({...Ji(o,t.id),portrait:t.portrait})}>${this.t("solar_fit")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteSolar()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}renderRoofPanel(){var s;let t=this._doc.settings.roof,e=this.isAdmin,n=t.type==="custom"?this.roofSection:void 0,i=this._roofWinId?(s=t.windows)==null?void 0:s.find(a=>a.id===this._roofWinId):void 0;if(i)return this.renderRoofWindowForm(i);if(n)return this.renderRoofSectionForm(n);let o=t.type==="custom"?t.sections??[]:[];return g`${this.renderRoofBasics()}
    <section>
      ${this.renderRoofFloors()}
      <h3>${this.t("roof_sections")}</h3>
      <p class="fp3d-sub">${this.t("roof_sections_hint")}</p>
      ${t.type!=="custom"?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" ?disabled=${!e} @click=${()=>this.useRoofSections()}>${this.t("roof_sections_start")}</button></div>`:g`<div class="fp3d-room-list">
              ${o.map((a,l)=>g`<div class="fp3d-row">
                  <button class="fp3d-dev-name" @click=${()=>this._roofId=a.id}>
                    <span>${l+1} · ${a.dormer?this.t("roof_dormer"):this.t(`roof_shape_${a.shape}`)} · ${this.m(Math.abs(a.x1-a.x0),1)} × ${this.m(Math.abs(a.z1-a.z0),1)} · ${this.t("roof_ridge_height")} ${this.m(Gi(a),1)}</span>
                  </button>
                </div>`)}
            </div>
            <div class="fp3d-actions">
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.useRoofSections(!0)}>${this.t("roof_sections_regen")}</button>
              <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.change(a=>a.settings.roof.type="gable")}>${this.t("roof_sections_off")}</button>
            </div>`}
    </section>
    ${this.renderRoofWindowList()}`}renderEnergyPanel(){var i,o;let t=this._solarId?(i=this._doc.settings.roof.solar)==null?void 0:i.find(s=>s.id===this._solarId):void 0;if(t)return this.renderSolarForm(t);let e=this._furnitureId?(o=this.floor)==null?void 0:o.furniture.find(s=>s.id===this._furnitureId&&ye.includes(s.type)):void 0;if(e)return g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("furniture",null)}>‹ ${this.t("tool_energy")}</button>
        ${this.renderFurnitureForm(e)}`;let n=vt("energy_pro");return g`${this.renderEnergyChecklist()}${this.renderSolarList()}${this.renderEnergyDevices()}${this.renderEnergyBalance()}${n?this.renderCableSettings():$}${n?this.renderHologramSettings():$}${this.renderProCard()}`}renderHologramSettings(){let t=this._doc.settings.roof.solar??[],e=this.isAdmin,n=this._doc.settings.roof.hologram??$i,i=n.place==="free",o=l=>this.change(d=>d.settings.roof.hologram={...d.settings.roof.hologram??$i,...l}),s=(l,d)=>l.name||`${this.t("solar_field")} ${d+1}`,a=()=>{let l=-1/0,d=1/0,c=-1/0;for(let p of this._doc.floors)for(let h of p.rooms)for(let[f,m]of h.points)l=Math.max(l,f),d=Math.min(d,m),c=Math.max(c,m);let u=Number.isFinite(l);o({place:"free",x:n.x??(u?z(l+2):0),z:n.z??(u?z((d+c)/2):0),height:n.height??3})};return g`<section>
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
        ${i?g`<p class="fp3d-sub fp3d-wide">${this.t("holo_free_hint")}</p>
              ${this.len("X (m)",n.x??0,l=>o({x:z(l)}),.25)} ${this.len("Z (m)",n.z??0,l=>o({z:z(l)}),.25)}
              ${this.len(this.t("holo_height"),n.height??3,l=>o({height:Math.min(60,Math.max(0,z(l)))}),.25,0)}`:t.length?g`<label class="fp3d-field fp3d-wide"
                >${this.t("holo_field")}
                <select ?disabled=${!e} @change=${l=>o({field:l.target.value||null})}>
                  <option value="" ?selected=${!n.field}>${this.t("holo_field_auto")}</option>
                  ${t.map((l,d)=>g`<option value=${l.id} ?selected=${l.id===n.field}>${s(l,d)}</option>`)}
                </select>
              </label>
              ${this.len(this.t("holo_right"),n.right,l=>o({right:Math.min(30,Math.max(-30,z(l)))}),.25)}
              ${this.len(this.t("holo_up"),n.up,l=>o({up:Math.min(30,Math.max(-30,z(l)))}),.25)}`:g`<p class="fp3d-sub fp3d-wide">${this.t("holo_no_field")}</p>`}
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
    </section>`}isPowerSensor(t){var n,i;if(!Lt(t))return!1;let e=(i=(n=this.hass)==null?void 0:n.states[t])==null?void 0:i.attributes;return(e==null?void 0:e.device_class)==="power"||(e==null?void 0:e.unit_of_measurement)==="W"||(e==null?void 0:e.unit_of_measurement)==="kW"}devicePower(t,e){var n;return t.power&&t.power!=="none"?t.power:((n=e.get(t.id))==null?void 0:n.power)??null}renderEnergyChecklist(){let t=this._doc,e=this.hass?nn(this.hass,t.floors):new Map,n=t.floors.flatMap(v=>v.furniture.map(y=>({m:y,fl:v}))),i=v=>n.filter(y=>y.m.type===v),o=v=>{this._floorId=v.fl.id,this._solarId=null,this.selectItem("furniture",v.m.id),this.showPoint(v.m.x,v.m.z)},s=t.settings.roof.solar??[],a=i("meter"),l=i("inverter"),d=i("home_battery"),c=i("grid_point"),u=!!t.energy.grid||a.some(v=>this.devicePower(v.m,e)),p=io(t)?t.energy.meter:null,h=!!t.energy.solar||l.length>0&&l.every(v=>this.devicePower(v.m,e)),f=d.every(v=>this.devicePower(v.m,e)&&v.m.soc&&v.m.soc!=="none")||!!t.energy.battery,m=vt("energy_pro"),_=[{state:s.length?"ok":"todo",label:this.t(s.length?"chk_solar":"chk_solar_add"),action:s.length?()=>this._solarId=s[0].id:()=>this.addSolarField()},a.length?{state:u?"ok":"todo",label:this.t(u?"chk_meter":"chk_meter_sensor"),action:()=>o(a[0])}:p?{state:"ok",label:this.t("chk_hub"),action:()=>(this._floorId=p.floor_id,this.showPoint(p.x,p.z))}:{state:"todo",label:this.t("chk_meter_add"),action:()=>this.addEnergyDevice("meter")},l.length?{state:h?"ok":"todo",label:this.t(h?"chk_inverter":"chk_inverter_sensor"),action:()=>o(l.find(v=>!this.devicePower(v.m,e))??l[0])}:{state:"todo",label:this.t("chk_inverter_add"),action:()=>this.addEnergyDevice("inverter")},d.length?{state:f?"ok":"todo",label:this.t(f?"chk_battery":"chk_battery_sensor"),action:()=>o(d[0])}:{state:"opt",label:this.t("chk_battery_opt"),action:()=>this.addEnergyDevice("home_battery")},c.length?{state:"ok",label:this.t("chk_grid"),action:()=>o(c[0])}:{state:"opt",label:this.t("chk_grid_opt"),action:()=>this.addEnergyDevice("grid_point")},...m?[{state:"ok",label:this.t("chk_pro_active")}]:[]],b=_.filter(v=>v.state==="ok").length;return g`<section class="fp3d-checklist">
      <h3>☑ ${this.t("chk_title")} <span class="fp3d-sub">${b}/${_.length}</span></h3>
      <p class="fp3d-sub">${this.t("chk_hint")}</p>
      ${_.map(v=>v.href?g`<a class="fp3d-chk fp3d-chk-${v.state}" href=${v.href} target="_blank" rel="noopener"><span>${v.state==="ok"?"\u2713":v.state==="todo"?"\u25CB":"\xB7"}</span>${v.label}</a>`:g`<button class="fp3d-chk fp3d-chk-${v.state}" ?disabled=${!this.isAdmin&&!!v.action&&v.state!=="ok"} @click=${v.action}><span>${v.state==="ok"?"\u2713":v.state==="todo"?"\u25CB":"\xB7"}</span>${v.label}</button>`)}
    </section>`}renderHelpLinks(){return g`<section class="fp3d-help">
      <h3>${this.t("help_title")}</h3>
      <p class="fp3d-sub">${this.t("help_hint")}</p>
      <div class="fp3d-actions">
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new/choose" target="_blank" rel="noopener">🐞 ${this.t("help_issue")}</a>
        <a class="fp3d-btn" href="https://github.com/diegood/neonplan3d/issues/new?labels=enhancement" target="_blank" rel="noopener">💡 ${this.t("help_idea")}</a>
      </div>
    </section>`}renderProCard(){if(vt("energy_pro"))return g`<section class="fp3d-teaser fp3d-teaser-on">
        <div class="fp3d-teaser-head"><b>✓ ${this.t("energy_pro_active")}</b></div>
        <p class="fp3d-sub">${this.t("energy_pro_active_hint")}</p>
        <div class="fp3d-actions"><a class="fp3d-btn" href=${sn("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
      </section>`;let t=new URL("./images/solar-pro.jpg",import.meta.url).href;return g`<section class="fp3d-teaser">
      <div class="fp3d-teaser-head"><b>⚡ ${this.t("pro_name_energy_pro")}</b></div>
      <img src=${t} alt=${this.t("solar_pro_title")} loading="lazy" />
      <ul>
        <li>${this.t("solar_pro_1")}</li>
        <li>${this.t("solar_pro_2")}</li>
        <li>${this.t("solar_pro_3")}</li>
        <li>${this.t("solar_pro_4")}</li>
      </ul>
      <p class="fp3d-sub">${this.t("solar_pro_free")}</p>
      <div class="fp3d-actions"><a class="fp3d-btn" href=${sn("energy_pro")} target="_blank" rel="noopener">📖 ${this.t("manual")}</a></div>
    </section>`}addEnergyDevice(t){let e=this.floor;if(!e||!this.isAdmin)return;if(t==="grid_point"){let v=no(this._doc),[y,x,P]=jt(t),[A,F]=v?v.end:this.toWorld(this._size.w/2,this._size.h/2),T={id:tt("furniture"),type:t,x:z(A),z:z(F),rotation:0,w:y,d:x,h:P,variant:null};this.change((S,M)=>M.furniture.push(T)),this.selectItem("furniture",T.id),this.showPoint(T.x,T.z);return}let n=v=>{var y,x,P;return`${v.name} ${v.area_id&&((P=(x=(y=this.hass)==null?void 0:y.areas)==null?void 0:x[v.area_id])==null?void 0:P.name)||""} ${v.area_id??""}`.toLowerCase()},i=e.rooms.filter(v=>v.points.length>=3),o=v=>i.find(y=>v.test(n(y))),s=i.find(v=>e.furniture.some(y=>y.type==="parking"&&Y([y.x,y.z],v.points))),a=o(/garage|carport/)??s,l=o(/hwr|hauswirt|technik|keller|abstell|utility|basement|boiler|heiz/),d=o(/flur|diele|eingang|hall|entr|lobby/),c=(t==="wallbox"?a:t==="meter"?l??d??a:l??a)??this.room??i.sort((v,y)=>Math.abs(St(y.points))-Math.abs(St(v.points)))[0],[u,p,h]=jt(t),[f,m]=c?ne(c.points):this.toWorld(this._size.w/2,this._size.h/2);if(c){let[v,y]=ne(c.points),x=null,P=new Set(e.openings.filter(T=>T.room_id===c.id).map(T=>T.edge)),A=c.points.some((T,S)=>!P.has(S));c.points.forEach((T,S)=>{if(A&&P.has(S))return;let M=c.points[(S+1)%c.points.length],w=Math.hypot(M[0]-T[0],M[1]-T[1]);if(x&&w<=x.l)return;let k=(T[0]+M[0])/2,E=(T[1]+M[1])/2,I=-(M[1]-T[1])/w,C=(M[0]-T[0])/w;(v-k)*I+(y-E)*C<0&&([I,C]=[-I,-C]),x={mx:k,mz:E,nx:I,nz:C,l:w}});let F=x;F&&([f,m]=[F.mx+F.nx*(p/2+.25),F.mz+F.nz*(p/2+.25)])}let _={id:tt("furniture"),type:t,x:z(f),z:z(m),rotation:0,w:u,d:p,h,variant:null},b=c?Kn({...e,furniture:[...e.furniture,_]},_,this._doc.settings.wall_interior):null;b&&Object.assign(_,{x:z(b.x),z:z(b.z),rotation:b.rotation}),this.change((v,y)=>y.furniture.push(_)),this.selectItem("furniture",_.id),this.showPoint(_.x,_.z)}renderEnergyDevices(){let t=this.isAdmin,e=this._doc.floors.flatMap(n=>n.furniture.filter(i=>ye.includes(i.type)).map(i=>({fl:n,m:i})));return g`<section>
      <h3>⚡ ${this.t("energy_devices")}</h3>
      <p class="fp3d-sub">${this.t("energy_devices_hint")}</p>
      ${e.length?g`<div class="fp3d-room-list">
            ${e.map(({fl:n,m:i})=>g`<div class="fp3d-row">
                <button
                  class="fp3d-dev-name"
                  @click=${()=>{this._floorId=n.id,this._solarId=null,this.selectItem("furniture",i.id),this.showPoint(i.x,i.z)}}
                >
                  <span>${i.name||this.t(`furn_${i.type}`)} · ${n.name}</span>
                </button>
              </div>`)}
          </div>`:$}
      <div class="fp3d-actions">
        ${ye.map(n=>g`<button
            class="fp3d-btn"
            ?disabled=${!t||!this.floor}
            @click=${()=>{this._solarId=null,this.addEnergyDevice(n)}}
          >
            + ${this.t(`furn_${n}`)}
          </button>`)}
      </div>
      ${vt("energy_pro")?this.renderHubPoint():$}
    </section>`}renderHubPoint(){var s;let t=this.isAdmin,e=this._doc.energy,n=!!e.hub_point,i=n?e.meter:null,o=i?(s=this._doc.floors.find(a=>a.id===i.floor_id))==null?void 0:s.name:null;return g`<label class="fp3d-check fp3d-wide" title=${this.t("energy_hub_point_hint")}
        ><input
          type="checkbox"
          .checked=${n}
          ?disabled=${!t}
          @change=${a=>{let l=a.target.checked;this.setEnergy({hub_point:l||void 0}),this._placeHub=l&&!e.meter}}
        />
        ${this.t("energy_hub_point")}</label
      >
      ${n?g`<div class="fp3d-actions">
              <button class="fp3d-btn ${this._placeHub?"fp3d-primary":""}" ?disabled=${!t||!this.floor} @click=${()=>this._placeHub=!this._placeHub}>${this.t("energy_hub_set")}</button>
              ${i?g`<button class="fp3d-btn" @click=${()=>(this._floorId=i.floor_id,this.showPoint(i.x,i.z))}>${this.t("energy_hub")}: ${o??""}</button>`:$}
            </div>
            <p class="fp3d-sub">${this.t(this._placeHub?"energy_hub_tap":"energy_hub_point_hint")}</p>`:$}`}renderRoofSectionForm(t){let e=this.isAdmin,n=h=>this.updateRoofSection(h),i=t.axis==="x"?[this.t("roof_side_top"),this.t("roof_side_bottom")]:[this.t("roof_side_left"),this.t("roof_side_right")],[o,s]=t.flip?[i[1],i[0]]:i,a=t.shape==="flat"||t.shape==="parapet",l=t.shape==="pent",d=h=>h.findIndex(f=>f.id===t.id)+1,c=(h,f,m,_=.05,b=0)=>this.len(h,f,v=>m(Math.max(b,z(v))),_,b),u=(h,f,m)=>this.num(h,f,_=>m(Math.max(0,z(_))),1,0),p=!!this._doc.settings.lock_plan;return g`<button class="fp3d-btn fp3d-back" @click=${()=>this._roofId=null}>‹ ${this.t("roof_sections")}</button>
      <section>
        ${this.renderRoofFloors()}
        <div class="fp3d-h3row">
          <h3>${t.dormer?this.t("roof_dormer"):this.t("roof_section")} ${d(this._doc.settings.roof.sections??[])}</h3>
          ${e?p?g`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>🔒 ${this.t("plan_locked")}</button>`:g`<button class="fp3d-btn fp3d-fix" aria-pressed=${!!t.locked} title=${this.t("fix_hint")} @click=${()=>n({locked:!t.locked})}>
                  ${t.locked?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
                </button>`:$}
        </div>
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof_shape")}
          <select ?disabled=${!e} @change=${h=>n({shape:h.target.value})}>
            ${ya.map(h=>g`<option value=${h} ?selected=${t.shape===h}>${this.t(`roof_shape_${h}`)}</option>`)}
          </select>
        </label>
        ${a?$:g`<div class="fp3d-seg fp3d-dev-source">
              <button aria-pressed=${t.axis==="x"} ?disabled=${!e} @click=${()=>n({axis:"x"})}>${this.t("roof_axis_x")}</button>
              <button aria-pressed=${t.axis==="z"} ?disabled=${!e} @click=${()=>n({axis:"z"})}>${this.t("roof_axis_z")}</button>
            </div>`}
        ${t.points||t.dormer?$:g`<div class="fp3d-form" title=${this.t("roof_turn_hint")}>
              ${this.num(`${this.t("roof_turn")} (\xB0)`,t.rotation??0,h=>this.turnRoofSection(Math.max(-180,Math.min(180,z(h)))),1)}
              ${e&&!this.roofFixed(t)?g`<div class="fp3d-actions">
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(Yd(t.rotation??0,-15))}>↺ 15°</button>
                    <button class="fp3d-btn" @click=${()=>this.turnRoofSection(Yd(t.rotation??0,15))}>↻ 15°</button>
                  </div>`:$}
            </div>`}
        ${t.shape==="gable"||t.shape==="hip"||t.shape==="halfhip"?g`<div class="fp3d-form" title=${this.t("roof_end_hint")}>
              ${[0,1].map(h=>{let f=this.t(t.axis==="x"?h===0?"roof_side_left":"roof_side_right":h===0?"roof_side_top":"roof_side_bottom"),m=(h===0?t.end_u0:t.end_u1)??"";return g`<label class="fp3d-field"
                  >${this.t("roof_end")} ${f}
                  <select
                    ?disabled=${!e}
                    @change=${_=>{let b=_.target.value||null;n(h===0?{end_u0:b}:{end_u1:b})}}
                  >
                    <option value="" ?selected=${m===""}>${this.t("roof_end_auto")}</option>
                    ${$a.map(_=>g`<option value=${_} ?selected=${m===_}>${this.t(_==="gable"?"roof_end_gable":`roof_shape_${_}`)}</option>`)}
                  </select></label
                >`})}
            </div>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("roof_open_hint")}
          ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${h=>n({open:h.target.checked})} />
          ${this.t("roof_open")}</label
        >
        <div class="fp3d-form">
          ${a?c(this.t("roof_height"),t.eave_a,h=>n({eave_a:h,eave_b:h})):g`${c(`${this.t("roof_eave")} ${l?"":o}`,t.eave_a,h=>n({eave_a:h}))}
              ${l?$:c(`${this.t("roof_eave")} ${s}`,t.eave_b,h=>n({eave_b:h}))}
              ${u(`${this.t("roof_pitch_short")} ${l?"":o}`,t.pitch_a,h=>n({pitch_a:Math.min(75,h)}))}
              ${l?$:u(`${this.t("roof_pitch_short")} ${s}`,t.pitch_b,h=>n({pitch_b:Math.min(75,h)}))}`}
          ${c(this.t("roof_base"),t.base,h=>n({base:h}))}
          <label class="fp3d-field" title=${this.t("roof_on_floor_hint")}
            >${this.t("roof_on_floor")}
            <select
              ?disabled=${!e}
              @change=${h=>{let f=this._doc.floors.find(b=>b.id===h.target.value);if(!f)return;let m=z(f.elevation+f.height),_=m-t.base;n({base:m,eave_a:z(t.eave_a+_),eave_b:z(t.eave_b+_)})}}
            >
              ${[...this._doc.floors].filter(h=>h.rooms.length).sort((h,f)=>f.elevation-h.elevation).map(h=>{var f;return g`<option value=${h.id} ?selected=${((f=jc(this._doc,t))==null?void 0:f.id)===h.id}>${h.name}</option>`})}
            </select></label
          >
          <p class="fp3d-sub fp3d-wide">${this.t("roof_base_hint")}</p>
          ${c(this.t("roof_overhang"),t.overhang??this._doc.settings.roof.overhang,h=>n({overhang:Math.min(2,h)}),.05,0)}
          ${t.points||t.shape==="parapet"?$:this.renderOverhangSides(t,o,s)}
        </div>
        ${a&&e?g`<div class="fp3d-actions">
              <button class="fp3d-btn" title=${this.t("roof_outline_hint")} @click=${()=>this.takeRoofOutline()}>${this.t("roof_outline")}</button>
              ${t.points?g`<button class="fp3d-btn" @click=${()=>n({points:null})}>${this.t("roof_rect")}</button>`:$}
            </div>
            <p class="fp3d-sub">${this.t(t.points?"roof_points_hint":"roof_outline_hint")}</p>`:$}
        <p class="fp3d-sub">${this.t("roof_ridge_height")}: ${this.m(Gi(t),2)} · ${this.t("roof_section_hint")}</p>
        ${e?g`<div class="fp3d-actions">
              ${a?$:g`<button class="fp3d-btn" title=${this.t("roof_swap_hint")} @click=${()=>n({flip:!t.flip})}>⇅ ${this.t("roof_swap")}</button>`}
              ${!a&&!t.dormer&&!t.open?g`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("a")}>+ ${this.t("roof_dormer")} ${o}</button>
                  ${l?$:g`<button class="fp3d-btn" title=${this.t("roof_dormer_hint")} @click=${()=>this.addDormer("b")}>+ ${this.t("roof_dormer")} ${s}</button>`}`:$}
              <button class="fp3d-btn" @click=${()=>this.duplicateRoofSection()}>${this.t("duplicate")}</button>
              <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoofSection()}>${this.t("delete")}</button>
            </div>`:$}
      </section>`}renderOverhangSides(t,e,n){let i=this.isAdmin,o=t.overhang_sides??null,s=Ui(this._doc,t,t.overhang??this._doc.settings.roof.overhang),a=i?g`<button class="fp3d-btn" aria-pressed=${!!o} title=${this.t("roof_overhang_sides_hint")} @click=${()=>this.updateRoofSection({overhang_sides:o?null:[s.a,s.b,s.u0,s.u1]})}>
          ${this.t("roof_overhang_sides")}
        </button>`:$;if(!o)return a;let l=t.axis==="x"?[this.t("roof_side_left"),this.t("roof_side_right")]:[this.t("roof_side_top"),this.t("roof_side_bottom")],d=[s.a,s.b,s.u0,s.u1],c=(u,p)=>{let h=[0,1,2,3].map(f=>o[f]??null);h[u]=Math.min(2,Math.max(0,z(p))),this.updateRoofSection({overhang_sides:h})};return g`${a}
      ${[e,n,...l].map((u,p)=>this.len(`${this.t("roof_overhang")} ${u}`,d[p],h=>c(p,h),.05,0))}`}fixItem(t,e,n){if(t)switch(e){case"room":return t.rooms.find(i=>i.id===n);case"opening":return t.openings.find(i=>i.id===n);case"furniture":return t.furniture.find(i=>i.id===n);case"device":return t.placements.find(i=>i.entity_id===n);case"wall":return(t.walls??[]).find(i=>i.id===n);case"outdoor":return t.outdoor.find(i=>i.id===n)}}isFixedItem(t,e){return Po(this.fixItem(this.floor,t,e),t!=="furniture"&&t!=="device",this._doc.settings)}toggleFixed(t,e){if(!this.isAdmin||t!=="furniture"&&t!=="device")return;let n=!this.isFixedItem(t,e);n||(this._fixedHint=!1),this.change((i,o)=>{let s=this.fixItem(o,t,e);s&&(s.locked=n)})}toggleLockPlan(){this.isAdmin&&(this._doc.settings.lock_plan&&(this._fixedHint=!1),this.change(t=>t.settings.lock_plan=!t.settings.lock_plan))}get selectedFix(){return this._deviceId?{kind:"device",id:this._deviceId}:this._openingId?{kind:"opening",id:this._openingId}:this._furnitureId?{kind:"furniture",id:this._furnitureId}:this._wallId?{kind:"wall",id:this._wallId}:this._outdoorId?{kind:"outdoor",id:this._outdoorId}:this._roomId?{kind:"room",id:this._roomId}:null}confirmFixedDelete(t,e){return!this.isFixedItem(t,e)||confirm(this.t("fixed_delete_confirm"))}onContextMenu(t){t.preventDefault(),!(this.rightPress||performance.now()-this.rightUp<600)&&(this._tool!=="select"&&this._tool!=="furniture"||(this.drag=null,this.openContext(t.target,this.localPoint(t))))}openContext(t,e){if(!this.isAdmin||!this.floor)return;let n=this.toWorld(...e),i=f=>{var m;return((m=t.closest(`[${f}]`))==null?void 0:m.getAttribute(f))??null},o=null,s=i("data-device"),a=i("data-opening"),l=t.closest("[data-vertex], [data-mid]")?null:i("data-furniture"),d=i("data-free-wall"),c=i("data-outdoor")?this.outdoorAt(n)??i("data-outdoor"):null,u=i("data-room")??this.roomAt(n);if(s?o=["device",s]:a?o=["opening",a]:l?o=["furniture",l]:d?o=["wall",d]:c&&!u?o=["outdoor",c]:u&&(o=["room",u]),!o){this._ctx=null;return}let[p,h]=o;this.selectItem(p,h),(p==="opening"||p==="furniture")&&(this._roomId=this._roomId??u),this._ctx={x:e[0],y:e[1],kind:p,id:h}}deleteItem(t,e){if(t==="device"){if(!this.confirmFixedDelete(t,e))return;this.removeDevice(e),this._deviceId=null;return}t==="room"?this.deleteRoom():t==="opening"?this.deleteOpening():t==="furniture"?this.deleteFurniture():t==="wall"?this.deleteFreeWall():this.deleteOutdoor()}renderContext(){let t=this._ctx;if(!t)return $;let e=this.isFixedItem(t.kind,t.id),n=this.renderRoot.querySelector(".fp3d-canvas-wrap"),i=Math.max(4,Math.min(t.x,((n==null?void 0:n.clientWidth)??800)-190)),o=Math.max(4,Math.min(t.y,((n==null?void 0:n.clientHeight)??600)-190)),s=a=>()=>{this._ctx=null,a()};return g`<div class="fp3d-ctx" style=${`left:${i}px;top:${o}px`} @pointerdown=${a=>a.stopPropagation()} @contextmenu=${a=>a.preventDefault()}>
      ${t.kind==="furniture"||t.kind==="device"?g`<button title=${this.t("fix_hint")} @click=${s(()=>this.toggleFixed(t.kind,t.id))}>${e?`\u{1F513} ${this.t("unfix")}`:`\u{1F512} ${this.t("fix")}`}</button>`:g`<button title=${this.t("lock_plan_hint")} @click=${s(()=>this.toggleLockPlan())}>${this._doc.settings.lock_plan?`\u{1F513} ${this.t("plan_unlock")}`:`\u{1F512} ${this.t("plan_lock")}`}</button>`}
      ${t.kind==="room"?g`<button @click=${s(()=>this.duplicateRoom())}>⧉ ${this.t("duplicate")}</button>`:$}
      ${t.kind==="furniture"?g`<button @click=${s(()=>this.duplicateFurniture())}>⧉ ${this.t("duplicate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.rotateFurniture(90))}>↻ ${this.t("ctx_rotate")}</button>
            <button ?disabled=${e} @click=${s(()=>this.mirrorFurniture())}>⇋ ${this.t("furn_mirror")}</button>
            <button @click=${s(()=>{var l;let a=(l=this.floor)==null?void 0:l.furniture.find(d=>d.id===t.id);a&&this.openWallViewFor(a)})}>▦ ${this.t("wall_view")}</button>`:$}
      <button class="fp3d-ctx-danger" @click=${s(()=>this.deleteItem(t.kind,t.id))}>✕ ${this.t("delete")}</button>
    </div>`}fixButton(t,e){if(!this.isAdmin)return $;if(t!=="furniture"&&t!=="device")return this._doc.settings.lock_plan?g`<button class="fp3d-btn fp3d-fix" aria-pressed="true" title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
            🔒 ${this.t("plan_locked")}
          </button>`:$;let n=this.isFixedItem(t,e);return g`<button class="fp3d-btn fp3d-fix" aria-pressed=${n} title=${this.t("fix_hint")} @click=${()=>this.toggleFixed(t,e)}>
      ${n?`\u{1F512} ${this.t("unfix")}`:`\u{1F513} ${this.t("fix")}`}
    </button>`}selectItem(t,e){var i,o,s;this._notice=null,e&&(this._sideOpen=!0);let n=this._openingId?`opening:${this._openingId}`:this._furnitureId?`furniture:${this._furnitureId}`:this._deviceId?`device:${this._deviceId}`:this._outdoorId?`outdoor:${this._outdoorId}`:this._wallId?`wall:${this._wallId}`:`room:${this._roomId}`;if(e&&`${t}:${e}`!==n&&this.updateComplete.then(()=>{var a;return(a=this.renderRoot.querySelector(".fp3d-side"))==null?void 0:a.scrollTo(0,0)}),this._outdoorId=t==="outdoor"?e:null,this._wallId=t==="wall"?e:null,this._edgeHi=null,(t==="outdoor"||t==="wall")&&(this._roomId=null),(t!=="room"||e!==this._roomId)&&(this._vertex=null),this._roomId=t==="room"?e:this._roomId,this._openingId=t==="opening"?e:null,this._furnitureId=t==="furniture"?e:null,this._multi=[],this._single=!1,this._deviceId=t==="device"?e:null,t==="device"&&e){let a=(i=this.floor)==null?void 0:i.placements.find(l=>l.entity_id===e);this._roomId=(a&&this.roomAt([a.x,a.z]))??this._roomId}t==="opening"&&e&&(this._roomId=((s=(o=this.floor)==null?void 0:o.openings.find(a=>a.id===e))==null?void 0:s.room_id)??this._roomId)}get opening(){var t;return this._openingId?(t=this.floor)==null?void 0:t.openings.find(e=>e.id===this._openingId):void 0}get furnitureItem(){var t;return this._furnitureId?(t=this.floor)==null?void 0:t.furniture.find(e=>e.id===this._furnitureId):void 0}offsetOnEdge(t,e,n,i,o){let s=t.points[e],a=t.points[(e+1)%t.points.length],l=Math.hypot(a[0]-s[0],a[1]-s[1])||1,d=((n[0]-s[0])*(a[0]-s[0])+(n[1]-s[1])*(a[1]-s[1]))/l,c=o?.01:this._doc.settings.grid;return this.clampOffset(t,e,i,Math.round(d/c)*c)}clampOffset(t,e,n,i){let o=t.points[e],s=t.points[(e+1)%t.points.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=this.floor,d=this._doc.settings,[c,u]=l?kl(At(l.rooms,{exterior:d.wall_exterior,interior:d.wall_interior},l.walls??[]).walls,t,e):[0,0],p=Math.min(n,a+c+u)/2;return z(Math.min(a,a+u-p,Math.max(0,p-c,i)))}placeOpening(t,e){let n=this.floor;if(!n||!this.isAdmin)return!1;let i=null;for(let m of n.walls??[]){let _=Ce({room_id:"",edge:0,wall:m.id},n.rooms,n.walls??[]);if(!_)continue;let[b,v]=this.toScreen(m.a),[y,x]=this.toScreen(m.b),P=(y-b)**2+(x-v)**2||1,A=Math.min(1,Math.max(0,((e[0]-b)*(y-b)+(e[1]-v)*(x-v))/P)),F=Math.hypot(e[0]-b-(y-b)*A,e[1]-v-(x-v)*A),T=[(m.a[0]+m.b[0])/2,(m.a[1]+m.b[1])/2],S=n.rooms.find(M=>M.points.length>=3&&Y(T,M.points));F<lo*2.2&&(!i||F-1<i.d)&&(i={room:_.room,edge:0,d:F-1,wall:m.id,roomId:(S==null?void 0:S.id)??m.id})}for(let m of n.rooms)for(let _=0;_<m.points.length;_++){let[b,v]=this.toScreen(m.points[_]),[y,x]=this.toScreen(m.points[(_+1)%m.points.length]),P=(y-b)**2+(x-v)**2||1,A=Math.min(1,Math.max(0,((e[0]-b)*(y-b)+(e[1]-v)*(x-v))/P)),F=Math.hypot(e[0]-b-(y-b)*A,e[1]-v-(x-v)*A),T=F-(m.id===this._roomId?.5:0);F<lo*2.2&&(!i||T<i.d)&&(i={room:m,edge:_,d:T})}if(!i)return!1;let{room:o,edge:s,wall:a}=i,l=o.points[s],d=o.points[(s+1)%o.points.length],c=Math.hypot(d[0]-l[0],d[1]-l[1]),u=Ai[t],p=u.type,h=z(Math.min(u.width,Math.max(.3,c-.1))),f={id:tt("opening"),room_id:i.roomId??o.id,edge:s,...a?{wall:a}:{},offset:this.offsetOnEdge(o,s,this.toWorld(...e),h,!1),width:h,type:p,sill:u.sill,height:u.height,hinge:"left",leaves:u.leaves,swing:"in",cover:null,contact:null,contact2:null,tilt:null};return this.change((m,_)=>_.openings.push(f)),this.selectItem("opening",f.id),!0}setOpeningPreset(t,e){let n=Ai[e];this._openingPreset=e;let i=zi(t)===e,o="style"in n?n.style:null;this.updateOpening({type:n.type,leaves:n.leaves,sill:n.sill,height:n.height,style:o,...i?{}:{width:n.width}})}updateOpening(t){let e=this._openingId;this.change((n,i)=>le(i.openings.find(o=>o.id===e),t))}deleteOpening(){let t=this._openingId;!t||!this.isAdmin||!this.confirmFixedDelete("opening",t)||(this.change((e,n)=>n.openings=n.openings.filter(i=>i.id!==t)),this._openingId=null)}glowScaleField(t,e){return g`<label class="fp3d-field" title=${this.t("glow_scale_hint")}
      >${this.t("glow_scale")}
      <input
        type="number"
        min="10"
        max="150"
        step="5"
        .value=${String(Math.round((t??1)*100))}
        ?disabled=${!this.isAdmin}
        @change=${n=>{let i=Math.min(150,Math.max(10,Number(n.target.value)||100))/100;e(Math.abs(i-1)<.001?null:i)}}
    /></label>`}typeChoices(t){let e=new Set(Object.values(Mi).flat());return(vt("fridge_smart")||vt("household"))&&e.add("fridge_smart"),ki.filter(n=>e.has(n)||n===t)}furnitureFor(t){let e=rt(t),n=[...ki.map(s=>({type:s,label:this.t(`furn_${s}`)})),...(this.packs??[]).flatMap(s=>s.items.map(a=>({type:Fe(s.id,a.id),label:`${ce(a)} \xB7 ${ve(s)}`})))],i=/speaker|sound|subwoofer|receiver|smart_|display|tv|media|turntable|projector|console/,o=s=>e==="light"?Yt(s):e==="climate"?s==="radiator"||s==="ac_unit":t.startsWith("vacuum.")?be(s):e==="media"?Ci(s)||tn(s)&&i.test(s):tn(s)&&!Yt(s);return n.filter(s=>o(s.type)).sort((s,a)=>s.label.localeCompare(a.label))}vehicleToSpot(t){if(!this.isAdmin)return;let[e,n,i]=jt("parking"),o={id:tt("furniture"),type:"parking",x:t.x,z:t.z,rotation:t.rotation,w:Math.max(e,z(t.w+.5)),d:Math.max(n,z(t.d+.4)),h:i,variant:null,vehicle:t.type,...t.name?{name:t.name}:{}};this.change((s,a)=>{a.furniture=a.furniture.filter(l=>l.id!==t.id),a.furniture.push(o)}),this.selectItem("furniture",o.id)}deviceToFurniture(t,e){if(!this.isAdmin)return;let[n,i,o]=jt(e),s=t.entity_id.startsWith("camera."),a={id:tt("furniture"),type:e,x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:i,h:o,variant:null,...s?{entity:"none",look_of:t.entity_id}:{entity:t.entity_id},name:t.name??null,...t.locked?{locked:!0}:{}};this.change((l,d)=>{s?d.furniture=d.furniture.filter(c=>c.look_of!==t.entity_id):d.placements=d.placements.filter(c=>c.entity_id!==t.entity_id),d.furniture.push(a)}),!s&&(this._deviceId=null,this.selectItem("furniture",a.id))}furnitureToDevice(t){let e=t.entity;if(!this.isAdmin||!e||e==="none")return;let n={entity_id:e,x:t.x,z:t.z,y:null,rotation:t.rotation,...t.name?{name:t.name}:{},...e.startsWith("light.")?{pin:!0}:{}};this.change((i,o)=>{o.furniture=o.furniture.filter(s=>s.id!==t.id),o.placements.some(s=>s.entity_id===e)||o.placements.push(n)}),this._furnitureId=null,this.selectItem("device",e)}renderAsFurniture(t){var i;if(!this.isAdmin)return $;let e=this.furnitureFor(t.entity_id);if(!e.length)return $;let n=t.entity_id.startsWith("camera.")?(i=this.floor)==null?void 0:i.furniture.find(o=>o.look_of===t.entity_id):void 0;return g`<label class="fp3d-field fp3d-wide" title=${this.t("as_furniture_hint")}
      >${this.t("as_furniture")}
      <select
        @change=${o=>{let s=o.target.value;s==="__builtin"?this.change((a,l)=>l.furniture=l.furniture.filter(d=>d.look_of!==t.entity_id)):s&&this.deviceToFurniture(t,s)}}
      >
        <option value="" selected>${n?Pe(this.hass,n.type):this.t("as_furniture_pick")}</option>
        ${n?g`<option value="__builtin">${this.t("camera_look_builtin")}</option>`:$}
        ${e.map(o=>g`<option value=${o.type}>${o.label}</option>`)}
      </select></label
    >`}addFurniture(t,e=!1){let n=this.floor;if(!n||!this.isAdmin)return;let[i,o,s]=jt(t),a=this._doc.floors.filter(f=>f.elevation>n.elevation).sort((f,m)=>f.elevation-m.elevation)[0],l=Ho.has(t)?z(a?a.elevation-n.elevation:n.height+.25):s,d=this.room,[c,u]=d?ne(d.points):this.toWorld(this._size.w/2,this._size.h/2),p=0;if(t==="parking"&&d){let f=n.openings.find(v=>v.room_id===d.id&&v.type==="garage"),m=f?d.points[f.edge]:null,_=f?d.points[(f.edge+1)%d.points.length]:null,b=zt(d.points);p=(m&&_?Math.abs(_[1]-m[1])>Math.abs(_[0]-m[0]):b.x1-b.x0>b.z1-b.z0)?90:0}let h={id:tt("furniture"),type:t,x:z(c),z:z(u),rotation:p,w:i,d:o,h:l,variant:null,...e?{mirror:!0}:{}};this.change((f,m)=>m.furniture.push(h)),this.selectItem("furniture",h.id),this.showPoint(h.x,h.z)}snapToWall(t){return this.floor?Kn(this.floor,t,this._doc.settings.wall_interior):null}updateFurniture(t){var n;let e=this._furnitureId;!e||!((n=this.floor)!=null&&n.furniture.some(i=>i.id===e))||this.change((i,o)=>{let s=o.furniture.find(a=>a.id===e);s&&Object.assign(s,t)})}mirrorFurniture(){let t=this.furnitureItem;!t||!this.isAdmin||this.updateFurniture({mirror:!t.mirror})}rotateFurniture(t){let e=this.furnitureItem;if(!e||!this.isAdmin)return;if(this.selection().length>1)return this.rotateSelection(t);this.updateFurniture({rotation:((e.rotation+t)%360+360)%360})}deleteFurniture(){let t=this._furnitureId;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let n=e.some(o=>this.isFixedItem("furniture",o));if(!confirm(this.t(n?"block_delete_fixed":"block_delete",{n:e.length})))return;let i=new Set(e);this.change((o,s)=>s.furniture=s.furniture.filter(a=>!i.has(a.id))),this.selectItem("room",this._roomId);return}this.confirmFixedDelete("furniture",t)&&(this.change((n,i)=>i.furniture=i.furniture.filter(o=>o.id!==t)),this._furnitureId=null)}duplicateFurniture(){let t=this.furnitureItem;if(!t||!this.isAdmin)return;let e=this.selection();if(e.length>1){let i=this.floor.furniture.filter(a=>e.includes(a.id)),o=new Map,s=i.map(a=>({...structuredClone(a),id:tt("furniture"),x:z(a.x+.3),z:z(a.z+.3),group:a.group?o.get(a.group)??o.set(a.group,tt("block")).get(a.group):null,locked:null}));this.change((a,l)=>l.furniture.push(...s)),this.setMulti(s.map(a=>a.id));return}let n={...structuredClone(t),id:tt("furniture"),x:z(t.x+.3),z:z(t.z+.3),group:this._single?t.group:null};this.change((i,o)=>o.furniture.push(n)),this.selectItem("furniture",n.id)}selection(){var e;if(this._multi.length)return this._multi;let t=this.furnitureItem;return t?t.group&&!this._single?(((e=this.floor)==null?void 0:e.furniture)??[]).filter(n=>n.group===t.group).map(n=>n.id):[t.id]:[]}withGroups(t){var n,i;let e=new Set((((n=this.floor)==null?void 0:n.furniture)??[]).filter(o=>t.includes(o.id)&&o.group).map(o=>o.group));return[...new Set([...t,...(((i=this.floor)==null?void 0:i.furniture)??[]).filter(o=>o.group&&e.has(o.group)).map(o=>o.id)])]}setMulti(t){if(!t.length)return this.selectItem("room",this._roomId);this.selectItem("furniture",t[0]);let e=this.selection();t.length>1&&!(t.length===e.length&&t.every(n=>e.includes(n)))&&(this._multi=t)}toggleMulti(t){let e=this._furnitureId?this.selection():[],n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.setMulti(i)}selectionCentre(t){var o;let e=(((o=this.floor)==null?void 0:o.furniture)??[]).filter(s=>t.includes(s.id)),n=e.map(s=>s.x),i=e.map(s=>s.z);return[(Math.min(...n)+Math.max(...n))/2,(Math.min(...i)+Math.max(...i))/2]}rotateSelection(t){let e=this.selection();if(e.some(d=>this.isFixedItem("furniture",d))){this._fixedHint=!0;return}let[n,i]=this.selectionCentre(e),o=t*Math.PI/180,s=Math.round(Math.cos(o)*1e6)/1e6,a=Math.round(Math.sin(o)*1e6)/1e6,l=new Set(e);this.change((d,c)=>{for(let u of c.furniture){if(!l.has(u.id))continue;let p=u.x-n,h=u.z-i;Object.assign(u,{x:z(n+p*s-h*a),z:z(i+p*a+h*s),rotation:((u.rotation+t)%360+360)%360})}})}groupSelection(){let t=new Set(this.selection());if(t.size<2)return;let e=tt("block");this.change((n,i)=>{for(let o of i.furniture)t.has(o.id)&&(o.group=e)}),this._multi=[],this._single=!1}ungroupSelection(){let t=this.selection(),e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)}),t.length>1&&(this._multi=t)}lockSelection(t){let e=new Set(this.selection());this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.locked=t||null)})}placeDevices(t,e){let n=e??this.room;if(!n||!t.length||!this.isAdmin)return;let i=new Set(t);this.change((o,s)=>{for(let l of o.floors)l.placements=l.placements.filter(d=>!i.has(d.entity_id)),l.furniture=l.furniture.filter(d=>!(Yt(d.type)&&d.entity&&i.has(d.entity)));let a=[...s.placements.map(l=>[l.x,l.z]),...s.furniture.filter(l=>Yt(l.type)).map(l=>[l.x,l.z])];for(let l of pl(n,t,a)){if(!l.entity_id.startsWith("light.")||n.outdoor){s.placements.push(l);continue}let[d,c,u]=de.lamp_ceiling;s.furniture.push({id:tt("furniture"),type:"lamp_ceiling",x:l.x,z:l.z,rotation:0,w:d,d:c,h:u,variant:null,entity:l.entity_id,power:null})}})}get device(){var t;return this._deviceId?(t=this.floor)==null?void 0:t.placements.find(e=>e.entity_id===this._deviceId):void 0}updateDevice(t){let e=this._deviceId;this.change((n,i)=>le(i.placements.find(o=>o.entity_id===e),t))}centreDevice(){var s;let t=this.device,e=t?this.roomAt([t.x,t.z]):null,n=(s=this.floor)==null?void 0:s.rooms.find(a=>a.id===e);if(!t||!n)return;let[i,o]=ne(n.points);this.updateDevice({x:z(i),z:z(o)})}spreadCeilingLights(t){let e=this.floor;if(!e)return;let n=e.placements.filter(u=>rt(u.entity_id)==="light"&&(u.mount??"ceiling")==="ceiling"&&Y([u.x,u.z],t.points));if(n.length<2)return;let i=zt(t.points),o=i.x1-i.x0,s=i.z1-i.z0,a=Math.max(1,Math.round(Math.sqrt(n.length*o/Math.max(.1,s)))),l=Math.ceil(n.length/a),d=n.map((u,p)=>{let h=Math.floor(p/a),f=h===l-1?n.length-a*(l-1):a,m=p-h*a;return[z(i.x0+o/f*(m+.5)),z(i.z0+s/l*(h+.5))]}),c=n.map(u=>u.entity_id);this.change((u,p)=>{c.forEach((h,f)=>le(p.placements.find(m=>m.entity_id===h),{x:d[f][0],z:d[f][1]}))})}straightenFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,fixed:n}=Rl(t.rooms);if(!n){this._notice=this.t("straighten_none");return}this.change((i,o)=>o.rooms=e),this._notice=this.t("straighten_done",{n})}closeFloorGaps(){let t=this.floor;if(!t||!this.isAdmin)return;let{rooms:e,gaps:n}=Il(t.rooms);if(!n.length){this._notice=this.t("gaps_none");return}let i=Fl(n);this.change((o,s)=>{s.rooms=e,i&&(o.settings.wall_interior=i)}),this._notice=i?this.t("gaps_closed_wall",{n:n.length,t:Bt(this.hass,i,2)}):this.t("gaps_closed",{n:n.length})}removeDevice(t){this.change(e=>{for(let n of e.floors)n.placements=n.placements.filter(i=>i.entity_id!==t),n.furniture=n.furniture.filter(i=>!(Yt(i.type)&&i.entity===t))})}deleteVertex(t){let e=this.room;if(!e||e.points.length<=3)return;let n=e.points.length,i=(t-1+n)%n;this.change((o,s)=>{let a=s.rooms.find(l=>l.id===e.id);a.points.splice(t,1),a.wall_heights&&a.wall_heights.splice(t,1),a.wall_thickness&&a.wall_thickness.splice(t,1),a.wall_slopes&&(a.wall_slopes.splice(t,1),a.wall_slopes[(t-1+a.points.length)%a.points.length]=null,a.wall_slopes.every(l=>!l)&&(a.wall_slopes=void 0)),s.openings=s.openings.filter(l=>l.room_id!==e.id||l.wall||l.edge!==t&&l.edge!==i).map(l=>l.room_id===e.id&&!l.wall&&l.edge>t?{...l,edge:l.edge-1}:l)}),this._vertex=null}shiftFloor(t,e){if(!this.isAdmin||!t&&!e)return;let n=o=>[z(o[0]+t),z(o[1]+e)],i=o=>{for(let s of o.rooms)s.points=s.points.map(n);for(let s of o.furniture)s.x=z(s.x+t),s.z=z(s.z+e);for(let s of o.placements)s.x=z(s.x+t),s.z=z(s.z+e);for(let s of o.outdoor)s.points=s.points.map(n);for(let s of o.walls??[])s.a=n(s.a),s.b=n(s.b);o.background&&(o.background.x=z(o.background.x+t),o.background.z=z(o.background.z+e))};this._shiftAll?this.change(o=>{for(let s of o.floors)i(s);this.moveHouseExtras(o,n)}):this.change((o,s)=>i(s)),this._shiftX=0,this._shiftZ=0}moveHouseExtras(t,e){for(let i of t.settings.roof.sections??[]){let o=[e([i.x0,i.z0]),e([i.x1,i.z0]),e([i.x1,i.z1]),e([i.x0,i.z1])];i.x0=Math.min(...o.map(s=>s[0])),i.x1=Math.max(...o.map(s=>s[0])),i.z0=Math.min(...o.map(s=>s[1])),i.z1=Math.max(...o.map(s=>s[1])),i.points&&(i.points=i.points.map(e)),i.pivot&&(i.pivot=e(i.pivot))}for(let i of t.settings.roof.cables??[])i.points=i.points.map(e);t.energy.meter&&([t.energy.meter.x,t.energy.meter.z]=e([t.energy.meter.x,t.energy.meter.z]));let n=t.settings.roof.hologram;n&&n.place==="free"&&n.x!=null&&n.z!=null&&([n.x,n.z]=e([n.x,n.z]))}turnFloor(){let t=this.floor;if(!t||!this.isAdmin)return;let e=(this._shiftAll?this._doc.floors:[t]).flatMap(d=>d.rooms.flatMap(c=>c.points));if(!e.length)return;let n=e.map(d=>d[0]),i=e.map(d=>d[1]),o=(Math.min(...n)+Math.max(...n))/2,s=(Math.min(...i)+Math.max(...i))/2,a=d=>[z(o-(d[1]-s)),z(s+(d[0]-o))],l=d=>{for(let c of d.rooms)c.points=c.points.map(a);for(let c of d.furniture)[c.x,c.z]=a([c.x,c.z]),c.rotation=(c.rotation+90)%360;for(let c of d.placements)[c.x,c.z]=a([c.x,c.z]),c.rotation=((c.rotation??0)+90)%360;for(let c of d.outdoor)c.points=c.points.map(a);for(let c of d.walls??[])c.a=a(c.a),c.b=a(c.b);d.background&&([d.background.x,d.background.z]=a([d.background.x,d.background.z]),d.background.rotation=((d.background.rotation??0)+90)%360)};this._shiftAll?this.change(d=>{for(let c of d.floors)l(c);this.moveHouseExtras(d,a)}):this.change((d,c)=>l(c))}updateFloor(t){this.change((e,n)=>Object.assign(n,t))}updateRoom(t){let e=this._roomId;this.change((n,i)=>le(i.rooms.find(o=>o.id===e),t))}setArea(t){var o,s,a;let e=this.room;if(!e)return;let n=t?(s=(o=this.hass)==null?void 0:o.areas)==null?void 0:s[t]:void 0,i=!e.name||/^(Raum|Room) \d+$/.test(e.name)||Object.values(((a=this.hass)==null?void 0:a.areas)??{}).some(l=>l.name===e.name);this.updateRoom({area_id:t||null,...n&&i?{name:n.name}:{}})}setRect(t,e){let n=this.room;if(!n||!Number.isFinite(e))return;let i=zt(n.points),{x0:o,z0:s,x1:a,z1:l}=i;t==="x"&&([o,a]=[e,e+(a-o)]),t==="z"&&([s,l]=[e,e+(l-s)]),t==="w"&&e>.05&&(a=o+e),t==="d"&&e>.05&&(l=s+e),this.updateRoom({points:[[z(o),z(s)],[z(a),z(s)],[z(a),z(l)],[z(o),z(l)]]})}setPoint(t,e,n){let i=this.room;if(!i||!Number.isFinite(n))return;let o=i.points.map(s=>[...s]);o[t][e]=z(n),this.updateRoom({points:o})}async loadImage(t){this.loadingImages.add(t);try{let e=await ko(this.hass,t),n=new Image;n.src=e,await n.decode(),this._images={...this._images,[t]:{url:e,aspect:n.naturalHeight/n.naturalWidth}}}catch{}}async uploadBackground(t){var c,u;let e=t.target,n=(c=e.files)==null?void 0:c[0];if(e.value="",!n)return;let i=await createImageBitmap(n),o=Math.min(1,2048/Math.max(i.width,i.height)),s=document.createElement("canvas");s.width=Math.round(i.width*o),s.height=Math.round(i.height*o),s.getContext("2d").drawImage(i,0,0,s.width,s.height);let a=s.toDataURL("image/jpeg",.85),l=tt("img");await _i(this.hass,l,a),this._images={...this._images,[l]:{url:a,aspect:s.height/s.width}};let d=(u=this.floor)!=null&&u.rooms.length?zt(this.floor.rooms.flatMap(p=>p.points)):null;this.updateFloor({background:{image_id:l,x:d?d.x0:0,z:d?d.z0:0,width:d?Math.max(4,z(d.x1-d.x0)):12,opacity:.5}})}selectFloor(t){this._floorId=t,this._roomId=null,this._vertex=null,this._draft=[],this.fit()}renderFloorMenu(){let t=this._doc.floors,e=this.floor,n=this.isAdmin,i=this._toolMenu==="floor",o=()=>(this._toolMenu=null,this._floorMenu=!1);return g`<div class="fp3d-seg fp3d-seg-menu">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${i} @click=${()=>(this._toolMenu=i?null:"floor",this._floorMenu=!1,this._viewMenu=!1)}>
          <span class="fp3d-menu-label">${this.t("floor_label")}</span> ${(e==null?void 0:e.name)??this.t("floors")} <span class="fp3d-caret">▾</span>
        </button>
        ${i?g`<div class="fp3d-menu-veil" @click=${o}></div>
              <div class="fp3d-menu" role="menu">
                ${[...t].reverse().map(s=>g`<button role="menuitem" class="fp3d-menu-item ${s.id===this._floorId?"fp3d-menu-on":""}" @click=${()=>(o(),this.selectFloor(s.id))}>
                    ${s.name}<span class="fp3d-menu-more">${s.id===this._floorId?"\u2713":""}</span>
                  </button>`)}
                ${n?g`<div class="fp3d-menu-sep"></div>
                      <button
                        role="menuitem"
                        class="fp3d-menu-item"
                        aria-expanded=${this.freeHaFloors.length?this._floorMenu:$}
                        @click=${()=>this.freeHaFloors.length?this._floorMenu=!this._floorMenu:(o(),this.addFloor())}
                      >
                        ${this.t("add_floor")}${this.freeHaFloors.length?g`<span class="fp3d-menu-more">${this._floorMenu?"\u25BE":"\u25B8"}</span>`:$}
                      </button>
                      ${this._floorMenu?g`<div class="fp3d-menu-sub">
                            ${this.freeHaFloors.map(s=>g`<button class="fp3d-chip" @click=${()=>(o(),this.addFloor(s))}>${s.name}</button>`)}
                            <button class="fp3d-chip" @click=${()=>(o(),this.addFloor())}>${this.t("floor_empty")}</button>
                          </div>`:$}
                      ${e?g`<button
                            role="menuitem"
                            class="fp3d-menu-item"
                            @click=${()=>{o(),this.setTool("select"),this.selectItem("room",null),this._sideOpen=!0}}
                          >
                            ${this.t("floor_settings")}
                          </button>`:$}`:$}
              </div>`:$}
      </div>
    </div>`}setTool(t){var n;let e=this.floor;if(this._tool=t,this._draft=[],this._cursor=null,this._pipeMode=!1,this._pipeDraft=null,t==="pool"&&((n=this.outdoorArea)==null?void 0:n.type)!=="pool"){let i=e==null?void 0:e.outdoor.find(o=>o.type==="pool");i&&this.selectItem("outdoor",i.id)}this.setSideFolded(!1)}renderToolBar(t){let e=this.isAdmin,n=!t||!e,i=zo.filter(h=>h!=="pool"),o={tool:"rect",label:this.t("tool_room"),choices:()=>[{label:this.t("tool_rect"),on:this._tool==="rect",pick:()=>this.setTool("rect")},{label:this.t("tool_polygon"),on:this._tool==="polygon",pick:()=>this.setTool("polygon")},{label:this.t("tool_measure"),on:this._tool==="measure",pick:()=>this.setTool("measure")}]},s={tool:"outdoor",label:this.t("tool_outdoor"),choices:()=>[...i.map(h=>({label:this.t(`out_${h}`),on:this._tool==="outdoor"&&(this._outdoorType??"lawn")===h,pick:()=>{this.setTool("outdoor"),this._outdoorType=h}})),{label:this.t("outdoor_shape_rect"),on:this._tool==="outdoor"&&!this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!1)},{label:this.t("outdoor_shape_free"),on:this._tool==="outdoor"&&this._outdoorFree,pick:()=>(this.setTool("outdoor"),this._outdoorFree=!0)}]},a={tool:"pool",label:this.t("tool_pool"),choices:()=>[...["rect","round","oval","free"].map(h=>({label:this.t(`pool_shape_${h}`),on:this._tool==="pool"&&!this._pipeMode&&(this._poolShape??"rect")===h,pick:()=>{this.setTool("pool"),this._poolShape=h,this._outdoorFree=h==="free"}})),...this.pipeRules?[{label:this.t("pool_pipe_draw"),on:this._tool==="pool"&&!!this._pipeMode,pick:()=>(this.setTool("pool"),this._pipeMode=!0)}]:[]]},l=[{id:"build",label:this.t("tool_group_build"),entries:[o,{tool:"wall",label:this.t("tool_wall")},{tool:"opening",label:this.t("tool_opening")},{tool:"hole",label:this.t("tool_hole")},{tool:"roof",label:this.t("tool_roof")}]},{id:"outside",label:this.t("tool_group_outside"),entries:[s,a]}],d=h=>h.tool===this._tool||h===o&&(this._tool==="polygon"||this._tool==="measure"),c=h=>h===a?this._pipeMode?this.t("pool_pipe_draw"):this.t(`pool_shape_${this._poolShape??"rect"}`):h===s?this.t(`out_${this._outdoorType??"lawn"}`):h===o?this.t(`tool_${this._tool}`):"",u=()=>(this._toolMenu=null,this._toolOpen=null),p=(h,f)=>g`<button aria-pressed=${this._tool===h} ?disabled=${n} @click=${()=>(u(),this.setTool(h))}>${f}</button>`;return g`<div class="fp3d-seg fp3d-seg-menu" role="group">
        <button aria-pressed=${this._tool==="select"} ?disabled=${!t} @click=${()=>(u(),this.setTool("select"))}>${this.t("tool_select")}</button>
        ${l.map(h=>{let f=h.entries.find(d),m=this._toolMenu===h.id,_=f?`${f.label}${c(f)?`: ${c(f)}`:""}`:h.label;return g`<div class="fp3d-menu-wrap">
            <button aria-pressed=${!!f} aria-haspopup="menu" aria-expanded=${m} ?disabled=${n} @click=${()=>(this._toolMenu=m?null:h.id,this._toolOpen=null,this._viewMenu=!1)}>
              ${_} <span class="fp3d-caret">▾</span>
            </button>
            ${m?g`<div class="fp3d-menu-veil" @click=${u}></div>
                  <div class="fp3d-menu" role="menu">
                    ${h.entries.map(b=>{var x;let v=((x=b.choices)==null?void 0:x.call(b))??[],y=this._toolOpen===b.tool;return g`<button
                          role="menuitem"
                          class="fp3d-menu-item ${d(b)?"fp3d-menu-on":""}"
                          aria-expanded=${v.length?y:$}
                          @click=${()=>{v.length?this._toolOpen=y?null:b.tool:(this.setTool(b.tool),u())}}
                        >
                          ${b.label}${v.length?g`<span class="fp3d-menu-more">${y?"\u25BE":"\u25B8"}</span>`:$}
                        </button>
                        ${y?g`<div class="fp3d-menu-sub">
                              ${v.map(P=>g`<button
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
      </div>
      ${this.renderSettingsMenu(u)}`}renderSettingsMenu(t){let e=this.isAdmin,n=this._settingsMenu,o=[{key:"house",icon:"\u{1F3E0}",label:this.t("settings_house"),admin:!0},{key:"weather",icon:"\u{1F326}",label:this.t("settings_weather"),admin:!0},{key:"director",icon:"\u{1F3AC}",label:this.t("card_director"),admin:!0},{key:"voice",icon:"\u{1F399}",label:this.t("voice"),admin:!1},...xe("locate")?[{key:"locate",icon:"\u{1F4E1}",label:this.t("locate"),admin:!0}]:[],{key:"favorites",icon:"\u2B50",label:this.t("favorites"),admin:!0},{key:"backdrop",icon:"\u{1F5BC}",label:this.t("backdrop"),admin:!0},{key:"terrain",icon:"\u26F0",label:this.t("terrain"),admin:!0},{key:"backup",icon:"\u{1F4BE}",label:this.t("backup"),admin:!0}].filter(a=>e||!a.admin),s=()=>{t(),this._settingsMenu=!n};return g`<div class="fp3d-seg fp3d-seg-menu fp3d-seg-settings">
      <div class="fp3d-menu-wrap">
        <button aria-haspopup="menu" aria-expanded=${n} title=${this.t("settings")} @click=${s}>
          ⚙ <span class="fp3d-settings-word">${this.t("settings")}</span> <span class="fp3d-caret">▾</span>
        </button>
        ${n?g`<div class="fp3d-menu-veil" @click=${()=>this._settingsMenu=!1}></div>
              <div class="fp3d-menu fp3d-menu-right" role="menu">
                ${o.map(a=>g`<button
                    role="menuitem"
                    class="fp3d-menu-item"
                    @click=${()=>{if(this._settingsMenu=!1,a.key==="locate"){this.hass&&Jl().then(l=>l.openLocateSetup(this.hass,this._doc,()=>this.hass,d=>this.setSettings({person_look:d==="figure"?null:d})));return}this._settingsDialog=a.key,a.key==="voice"&&this.hass&&Ns(this.hass,this.packs??[]).then(()=>this.requestUpdate())}}
                  >
                    ${a.icon} ${a.label}
                  </button>`)}
              </div>`:$}
      </div>
    </div>`}renderSettingsDialog(){let t=this._settingsDialog;if(!t)return $;let e=()=>this._settingsDialog=null,n={house:this.t("settings_house"),weather:this.t("settings_weather"),director:this.t("card_director"),voice:this.t("voice"),locate:this.t("locate"),favorites:this.t("favorites"),backdrop:this.t("backdrop"),terrain:this.t("terrain"),backup:this.t("backup")},i=t==="house"?this.renderHouseSettings():t==="weather"?this.renderWeatherSettings():t==="director"?this.renderDirector():t==="voice"?this.renderVoice():t==="favorites"?this.renderFavorites():t==="backdrop"?this.renderBackdrop():t==="terrain"?this.renderTerrain():this.renderBackup();return g`<div class="fp3d-dialog-veil" @click=${o=>o.target===o.currentTarget&&e()}>
      <div class="fp3d-dialog" role="dialog" aria-label=${n[t]} tabindex="-1" @keydown=${o=>o.key==="Escape"&&e()}>
        <div class="fp3d-dialog-head">
          <h3>${n[t]}</h3>
          <button class="fp3d-btn" aria-label=${this.t("close")} @click=${e}>✕</button>
        </div>
        <div class="fp3d-dialog-body">${i}</div>
      </div>
    </div>`}render(){let t=this.floor,e=t?At(t.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},t.walls??[]):null;return g`
      ${this.renderPreview()} ${this.renderWallView()} ${this.renderPartCard()} ${this.renderSettingsDialog()}
      <div class="fp3d-editor ${this.narrow?"fp3d-narrow":""}" style=${`--fp3d-side-w:${this._sideWidth}px`}>
        <div class="fp3d-main">
          <div class="fp3d-toolbar">
            ${this._wallPick?g`<div class="fp3d-pick-tip" style=${`left:${this.wallPickTip[0]}px;top:${this.wallPickTip[1]}px`} @click=${()=>this._wallPick=!1}>${this.t("hint_wall_pick")}</div>`:$}
            ${this.renderFloorMenu()} ${this.renderToolBar(t)}
            ${e!=null&&e.warnings.length?g`<span class="fp3d-warn">${this.t("overlap_warning")}</span>`:$}
          </div>
          <div class="fp3d-stage-pair ${this._split?"fp3d-split":""}" style=${this._split&&!this.narrow?`--fp3d-split:${Math.round(this._splitRatio*100)}%`:""}>
          <div class="fp3d-canvas-wrap">
            ${this._phoneHint?g`<div class="fp3d-phone-hint">
                  <span>${this.t("phone_hint")}</span>
                  <button
                    class="fp3d-btn"
                    aria-label=${this.t("close")}
                    @click=${()=>{this._phoneHint=!1;try{localStorage.setItem("neonplan3d.phoneHint","0")}catch{}}}
                  >
                    ✕
                  </button>
                </div>`:$}
            ${this.houseTool?g`<div class="fp3d-tool-note">${this.t(this._tool==="energy"?"energy_only_note":"roof_only_note")}</div>`:$}
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
              ${this._tool==="roof"?H`${this.renderRoofSections()}${this.renderRoofWindows()}`:this._tool==="energy"?H`${this.renderRoofSections()}${this.renderSolarFields()}${this.renderCables()}${this.renderEnergyMarkers()}`:this._tool==="pool"&&t&&this.pipeRules?this.renderPoolPlan(t):$} ${this.renderDraft()} ${this.renderGuides()}
            </svg>
            ${this.renderContext()}
            <p class="fp3d-hint ${this._fixedHint?"fp3d-hint-fixed":""}">${t?this._wallPick?this.t("hint_wall_pick"):this._fixedHint?this.t("fixed_drag_hint"):this._tool==="outdoor"&&this._outdoorFree?this.t("hint_outdoor_free"):this._tool==="pool"&&this._jointPlace?this.t("hint_joint_place"):this._tool==="pool"&&this._pipeMode?this.t(this.poolArea?this._pipeDraft?"hint_pipe_next":"hint_pipe_start":"hint_pipe_pool"):this._tool==="pool"&&xe("pool")?this.t("hint_pool_tech"):this.t(`hint_${this._tool}`):this.t("hint_empty")}</p>
          </div>
          ${this._split&&!this.narrow?g`<div class="fp3d-split-handle" title=${this.t("split_handle_hint")} @pointerdown=${this.onSplitDown}></div>`:$}
          ${this._split?this.render3d():$}
          </div>
        </div>
        ${this.renderAside(t)}
      </div>
    `}renderBackground(t){let e=t==null?void 0:t.background,n=e?this._images[e.image_id]:void 0;if(!e||!n)return $;let[i,o]=this.toScreen([e.x,e.z]),s=e.width*this._view.scale,a=s*n.aspect,l=e.rotation??0,d=this.bgHandles();return H`<g transform="rotate(${l} ${i+s/2} ${o+a/2})">
      <image href=${n.url} x=${i} y=${o} width=${s} height=${a} opacity=${e.opacity} preserveAspectRatio="none" pointer-events=${d?"auto":"none"} data-bg="1" style=${d?"cursor:move":""} />
      ${d?H`<rect class="fp3d-bg-frame" x=${i} y=${o} width=${s} height=${a} />
          <circle class="fp3d-bg-handle" data-bg-handle="1" cx=${i+s} cy=${o+a} r="9" />
          <g class="fp3d-rotate" data-bg-rotate="1">
            <line x1=${i+s/2} y1=${o} x2=${i+s/2} y2=${o-30} />
            <circle cx=${i+s/2} cy=${o-30} r="16" class="fp3d-hit" />
            <circle cx=${i+s/2} cy=${o-30} r="8" />
            <path d="M${i+s/2-4} ${o-31}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>${this.renderBgRuler()}`}bgHandles(){var t;return!!((t=this.floor)!=null&&t.background)&&this.isAdmin&&this._tool==="select"&&this._bgEdit}renderBgRuler(){var n;let t=(n=this._bgLevel)!=null&&n.length?this._bgLevel:this._bgRuler;if(!(t!=null&&t.length))return $;let e=t.map(i=>this.toScreen(i));return H`<g class="fp3d-bg-ruler">
      ${e.length===2?H`<line x1=${e[0][0]} y1=${e[0][1]} x2=${e[1][0]} y2=${e[1][1]} />`:$}
      ${e.map(([i,o])=>H`<circle cx=${i} cy=${o} r="6" />`)}
    </g>`}applyBgLevel(t,e){var h;let n=(h=this.floor)==null?void 0:h.background,i=n?this._images[n.image_id]:void 0;if(this._bgLevel=null,!n||!i||Math.hypot(e[0]-t[0],e[1]-t[1])<.05)return;let o=Math.atan2(e[1]-t[1],e[0]-t[0]),s=Math.round(o/(Math.PI/2))*(Math.PI/2)-o;if(Math.abs(s)<1e-4)return;let a=n.width*i.aspect,l=[n.x+n.width/2,n.z+a/2],d=l[0]-t[0],c=l[1]-t[1],u=[t[0]+d*Math.cos(s)-c*Math.sin(s),t[1]+d*Math.sin(s)+c*Math.cos(s)],p=(n.rotation??0)+s*180/Math.PI;p=Math.round((((p+180)%360+360)%360-180)*100)/100,this.updateFloor({background:{...n,rotation:p,x:z(u[0]-n.width/2),z:z(u[1]-a/2)}})}applyBgRuler(t){let e=this.floor,n=e==null?void 0:e.background,i=this._bgRuler,o=n?this._images[n.image_id]:void 0;if(!n||!o||!i||i.length<2||!(t>0))return;let s=Math.hypot(i[1][0]-i[0][0],i[1][1]-i[0][1]);if(s<1e-4)return;let a=t/s,l=n.width*o.aspect,d=[n.x+n.width/2,n.z+l/2],c=i[0],u=[c[0]+a*(d[0]-c[0]),c[1]+a*(d[1]-c[1])],p=n.width*a,h=l*a;this.updateFloor({background:{...n,width:z(p),x:z(u[0]-p/2),z:z(u[1]-h/2)}}),this._bgRuler=null,this._bgRulerLen=0}bgLocal(t,e,n){let i=t.width*n,o=t.x+t.width/2,s=t.z+i/2,a=-(t.rotation??0)*Math.PI/180,l=e[0]-o,d=e[1]-s;return[o+l*Math.cos(a)-d*Math.sin(a)-t.x,s+l*Math.sin(a)+d*Math.cos(a)-t.z]}renderGrid(){let{scale:t}=this._view,{w:e,h:n}=this._size,i=t>=90?.1:t>=30?.5:1,o=t>=20?1:5,[s,a]=this.toWorld(0,0),[l,d]=this.toWorld(e,n),c=[],u=(f,m)=>{for(let _=Math.ceil(s/f)*f;_<=l;_+=f){let b=this.toScreen([_,0])[0];c.push(H`<line class=${m} x1=${b} y1="0" x2=${b} y2=${n} />`)}for(let _=Math.ceil(a/f)*f;_<=d;_+=f){let b=this.toScreen([0,_])[1];c.push(H`<line class=${m} x1="0" y1=${b} x2=${e} y2=${b} />`)}};i<o&&u(i,"fp3d-grid-minor"),u(o,"fp3d-grid-major");let[p,h]=this.toScreen([0,0]);return c.push(H`<circle class="fp3d-origin" cx=${p} cy=${h} r="3" />`),H`<g pointer-events="none">${c}</g>`}renderGhost(){var n;let t=((n=this._doc)==null?void 0:n.floors.findIndex(i=>i.id===this._floorId))??-1,e=t>0?this._doc.floors[t-1]:void 0;return e?H`<g pointer-events="none">${e.rooms.map(i=>H`<polygon class="fp3d-ghost" points=${i.points.map(o=>this.toScreen(o).join(",")).join(" ")} />`)}</g>`:$}renderWalls(t){var n;let e=((n=this.floor)==null?void 0:n.height)??2.5;return H`<g pointer-events="none">${t.map(i=>{let o=i.height!==void 0&&i.height<e-.01,s=`fp3d-wall${i.exterior?" fp3d-wall-ext":""}${o?" fp3d-wall-low":""}`;return H`<polygon class=${s} points=${i.footprint.map(a=>this.toScreen(a).join(",")).join(" ")} />`})}</g>`}edgeParts(t,e){let n=this.floor;if(!n)return[0];let o=At(n.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},n.walls??[]).walls.flatMap(s=>s.sources.filter(a=>a.room_id===t.id&&a.edge===e).map(a=>a.t0));return o.length?[...new Set(o)].sort((s,a)=>s-a):[0]}setEdgeSlope(t,e,n){this.isAdmin&&this.change((i,o)=>{let s=o.rooms.find(l=>l.id===t.id);if(!s)return;let a=(s.wall_slopes??[]).slice(0,s.points.length);for(;a.length<s.points.length;)a.push(null);a[e]=n?[Math.round(Math.max(.05,n[0])*1e3)/1e3,Math.round(Math.max(.05,n[1])*1e3)/1e3]:null,s.wall_slopes=a.every(l=>!l)?void 0:a})}setEdgeHeight(t,e,n,i){let o=this.floor;if(!o||!this.isAdmin)return;if(i!==void 0){let l=this.edgeParts(t,e).length;this.change((d,c)=>{let u=c.rooms.find(m=>m.id===t.id);if(!u)return;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);let h=p[e],f=Array.isArray(h)?[...h]:new Array(l).fill(typeof h=="number"?h:null);for(;f.length<l;)f.push(null);f[i]=n,p[e]=f.every(m=>m===f[0])?f[0]:f,u.wall_heights=p.every(m=>m===null)?void 0:p});return}let a=At(o.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},o.walls??[]).walls.filter(l=>l.sources.some(d=>d.room_id===t.id&&d.edge===e)).flatMap(l=>l.sources);a.some(l=>l.room_id===t.id&&l.edge===e)||a.push({room_id:t.id,edge:e,t0:0,t1:0}),this.change((l,d)=>{for(let c of a){let u=d.rooms.find(h=>h.id===c.room_id);if(!u)continue;let p=(u.wall_heights??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[c.edge]=n,u.wall_heights=p.every(h=>h===null)?void 0:p}})}renderCameraDetections(t){var h;if(!this.hass)return $;let e=this.hass,n=(h=this.floor)==null?void 0:h.placements.find(f=>f.entity_id===t),i=Array.isArray(n==null?void 0:n.detect_sensors)?n.detect_sensors:null,o=vs(e,t),s=uc(e,t),a=[...new Set(s.map(f=>lc(e,f)))],l=vt("camera_cockpit"),d=this.isAdmin,c=f=>this.updateDevice({detect_sensors:f}),u=f=>{var m;return f.startsWith("binary_sensor.")&&["motion","occupancy","presence"].includes(String((m=e.states[f])==null?void 0:m.attributes.device_class))},p=[...new Set([...o,...i??[]])];return g`<p class="fp3d-sub fp3d-wide">
        ${s.length?g`${l?"":"\u{1F512} "}${this.t("camera_detect_found",{kinds:a.map(f=>this.t(`detect_${f}`)).join(", "),n:s.length})}`:this.t("camera_detect_none")}
      </p>
      <label class="fp3d-check fp3d-wide" title=${this.t("camera_detect_choose_hint")}
        ><input type="checkbox" .checked=${i!==null} ?disabled=${!d} @change=${f=>c(f.target.checked?[...o]:null)} />
        ${this.t("camera_detect_choose")}</label
      >
      ${i!==null?g`${p.map(f=>g`<label class="fp3d-check fp3d-wide fp3d-indent"
                  ><input type="checkbox" .checked=${i.includes(f)} ?disabled=${!d} @change=${m=>c(m.target.checked?[...i,f]:i.filter(_=>_!==f))} />
                  ${_t(e,f)} <span class="fp3d-sub">${f}</span></label
                >`)}
            ${this.entitySelect(this.t("camera_detect_add"),null,void 0,this.entityOptions(this.detectFilter(u,p)),f=>{f&&f!=="none"&&c([...i,f])})}`:$}`}_detectFilter=null;detectFilter(t,e){var i;let n=e.join(",");return((i=this._detectFilter)==null?void 0:i.key)!==n&&(this._detectFilter={key:n,fn:o=>t(o)&&!e.includes(o)}),this._detectFilter.fn}splitEdge(t,e,n){if(!this.isAdmin)return;let i=t.points,o=Math.hypot(i[(e+1)%i.length][0]-i[e][0],i[(e+1)%i.length][1]-i[e][1]),s=this.edgeParts(t,e),a=n===void 0?0:s[n],l=n===void 0?o:s[n+1]??o;if(l-a<.4)return;let d=Math.round((a+l)/2*100)/100;this.change((c,u)=>{var m;let p=u.rooms.find(_=>_.id===t.id);if(!p)return;let h=(p.wall_splits??[]).slice(0,p.points.length);for(;h.length<p.points.length;)h.push(null);h[e]=[...h[e]??[],d].sort((_,b)=>_-b),p.wall_splits=h;let f=(m=p.wall_heights)==null?void 0:m[e];if(Array.isArray(f)){let _=n??0;f.splice(_+1,0,f[_]??null)}})}moveSplit(t,e,n,i){let o=t.points,s=Math.hypot(o[(e+1)%o.length][0]-o[e][0],o[(e+1)%o.length][1]-o[e][1]),a=this.edgeParts(t,e).filter(d=>Math.abs(d-n)>.001&&d>0),l=Math.max(.1,Math.min(s-.1,Math.round(i*100)/100));a.some(d=>Math.abs(d-l)<.1)&&(l=n),this.change((d,c)=>{var f;let u=c.rooms.find(m=>m.id===t.id),p=(f=u==null?void 0:u.wall_splits)==null?void 0:f[e];if(!p)return;let h=p.findIndex(m=>Math.abs(m-n)<.001);h>=0&&(p[h]=l),p.sort((m,_)=>m-_)})}joinSplit(t,e,n,i){this.change((o,s)=>{var c,u;let a=s.rooms.find(p=>p.id===t.id);if(!((c=a==null?void 0:a.wall_splits)!=null&&c[e]))return;let l=a.wall_splits[e].filter(p=>Math.abs(p-n)>.001);a.wall_splits[e]=l.length?l:null,a.wall_splits.every(p=>!p)&&(a.wall_splits=void 0);let d=(u=a.wall_heights)==null?void 0:u[e];Array.isArray(d)&&(d.splice(i,1),d.every(p=>p===d[0])&&(a.wall_heights[e]=d[0]??null))})}renderSplitMarks(t){let e=t.points;return H`${(t.wall_splits??[]).flatMap((n,i)=>{if(!n||i>=e.length)return[];let o=e[i],s=e[(i+1)%e.length],a=Math.hypot(s[0]-o[0],s[1]-o[1])||1,l=(s[0]-o[0])/a,d=(s[1]-o[1])/a;return n.map(c=>{let[u,p]=this.toScreen([o[0]+l*c,o[1]+d*c]);return H`<line class="fp3d-split-mark" x1=${u-d*7} y1=${p+l*7} x2=${u+d*7} y2=${p-l*7} />`})})}`}renderEdgeHeights(t){let e=this.floor.height,n=t.points.length,i=this._doc.settings,o=new Set;for(let a of At(this.floor.rooms,{exterior:i.wall_exterior,interior:i.wall_interior},this.floor.walls??[]).walls)if(a.exterior)for(let l of a.sources)l.room_id===t.id&&o.add(l.edge);let s=(a,l)=>this.change((d,c)=>{let u=c.rooms.find(h=>h.id===t.id);if(!u)return;let p=(u.wall_thickness??[]).slice(0,u.points.length);for(;p.length<u.points.length;)p.push(null);p[a]=l,u.wall_thickness=p.every(h=>h===null)?void 0:p});return g`<div class="fp3d-edge-box">
      <h4>${this.t("wall_heights")}</h4>
      ${t.points.flatMap((a,l)=>{var b,v;let d=t.points[(l+1)%n],c=Math.hypot(d[0]-a[0],d[1]-a[1]),u=((b=t.wall_heights)==null?void 0:b[l])??null,p=((v=t.wall_slopes)==null?void 0:v[l])??null,h=()=>this._edgeHi=l,f=()=>this._edgeHi=null,m=this.edgeParts(t,l);return(m.length>1?m.map((y,x)=>x):[void 0]).map(y=>{var F,T,S;let x=y===void 0?Array.isArray(u)?u[0]??null:u:Array.isArray(u)?u[y]??null:u,P=y===void 0?c:(m[y+1]??c)-m[y],A=M=>this.setEdgeHeight(t,l,M,y);return g`<div
            class="fp3d-edge-height${l===this._edgeHi?" fp3d-edge-on":""}${x!==null?" fp3d-edge-low":""}"
            @mouseenter=${h}
            @mouseleave=${f}
            @focusin=${h}
            @focusout=${f}
          >
            <span
              ><b>${this.t("wall_n",{a:l+1,b:(l+1)%n+1})}${y===void 0?"":` \xB7 ${this.t("wall_part",{n:y+1})}`}</b><br /><span class="fp3d-muted"
                >${this.m(P,2)}</span
              ></span
            >
            ${x===0?g`<span class="fp3d-muted">${this.t("wall_none")}</span>`:p&&y===void 0?g`${this.len(this.t("wall_slope_start",{n:l+1}),p[0],M=>this.setEdgeSlope(t,l,[M,p[1]]),.05,.05)}
                  ${this.len(this.t("wall_slope_end",{n:(l+1)%n+1}),p[1],M=>this.setEdgeSlope(t,l,[p[0],M]),.05,.05)}`:this.len(this.t("wall_height"),x??e,M=>A(M>=e-.005?null:Math.max(.05,M)),.05,.05)}
            ${this.isAdmin&&y===void 0&&x!==0?g`<button class="fp3d-btn" aria-pressed=${!!p} title=${this.t("wall_slope_hint")} @click=${()=>this.setEdgeSlope(t,l,p?null:[x??e,x??e])}>◢ ${this.t("wall_slope")}</button>`:$}
            ${this.isAdmin&&x!==null?g`<button class="fp3d-btn" title=${this.t("wall_height_full")} @click=${()=>A(null)}>↥</button>`:$}
            ${this.isAdmin&&x!==0?g`<button class="fp3d-btn" title=${this.t("wall_none_hint")} @click=${()=>A(0)}>${this.t("wall_none")}</button>`:$}
            ${this.isAdmin&&P>=.4?g`<button class="fp3d-btn" title=${this.t("wall_split_hint")} @click=${()=>this.splitEdge(t,l,y)}>✂</button>`:$}
            ${(y===void 0||y===0)&&x!==0?g`<button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallView(t.id,l)}>▦</button>`:$}
            ${(y===void 0||y===0)&&x!==0?g`<span class="fp3d-wide fp3d-split-row" title=${this.t("wall_thickness_hint")}
                  >${this.len(this.t("edge_thickness"),((F=t.wall_thickness)==null?void 0:F[l])??(o.has(l)?i.wall_exterior:i.wall_interior),M=>{let w=o.has(l)?i.wall_exterior:i.wall_interior,k=Math.min(1.5,Math.max(.02,Math.round(M*1e3)/1e3));s(l,Math.abs(k-w)<5e-4?null:k)},.01,.02)}
                  ${this.isAdmin&&((T=t.wall_thickness)==null?void 0:T[l])!=null?g`<button class="fp3d-btn" title=${this.t("wall_thickness_reset")} @click=${()=>s(l,null)}>↺</button>`:$}</span
                >`:$}
            ${y!==void 0&&y>0&&(((S=t.wall_splits)==null?void 0:S[l])??[]).some(M=>Math.abs(M-m[y])<.001)?g`<span class="fp3d-wide fp3d-split-row"
                  >${this.len(this.t("wall_split_at"),m[y],M=>this.moveSplit(t,l,m[y],M),.05,.1)}
                  ${this.isAdmin?g`<button class="fp3d-btn" title=${this.t("wall_join_hint")} @click=${()=>this.joinSplit(t,l,m[y],y)}>⨉</button>`:$}</span
                >`:$}
          </div>`})})}
      <p class="fp3d-sub">${this.t("room_wall_hint")}</p>
    </div>`}renderOutdoorHandles(t){let e=this._outdoorId?t.outdoor.find(n=>n.id===this._outdoorId):void 0;if(!e||!this.isAdmin||this._tool!=="select"&&!(this._tool==="pool"&&!this._pipeMode)||this._doc.settings.lock_plan)return $;if(e.pool_shape){let n=zt(e.points),i=[[n.x0,n.z0],[n.x1,n.z0],[n.x1,n.z1],[n.x0,n.z1]];return H`${i.map((o,s)=>{let[a,l]=this.toScreen(o);return H`<g class="fp3d-vertex fp3d-box-corner" data-out-box=${`${e.id}:${s}`}><circle cx=${a} cy=${l} r="16" class="fp3d-hit" /><rect x=${a-5} y=${l-5} width="10" height="10" /></g>`})}`}return H`${e.points.map((n,i)=>{let[o,s]=this.toScreen(n);return H`<g class="fp3d-vertex" data-out-vertex=${`${e.id}:${i}`}><circle cx=${o} cy=${s} r="16" class="fp3d-hit" /><circle cx=${o} cy=${s} r="6" /></g>`})}`}renderOutdoor(t){return H`<g>${t.outdoor.map(e=>{let n=e.points.map(l=>this.toScreen(l).join(",")).join(" "),[i,o]=this.toScreen(ne(e.points)),s=zt(e.points),a=Math.min(s.x1-s.x0,s.z1-s.z0)*this._view.scale>40;return H`<g data-outdoor=${e.id} class=${`fp3d-out fp3d-out-${e.type}${e.id===this._outdoorId?" fp3d-out-sel":""}`}>
        <polygon points=${n} />
        ${a?H`<text x=${i} y=${o+4}>${this.t(`out_${e.type}`)}</text>`:$}
        ${Ia(e).map(l=>{let d=Math.hypot(l.q[0]-l.p[0],l.q[1]-l.p[1])||1,c=m=>this.toScreen([l.p[0]+(l.q[0]-l.p[0])*m/d,l.p[1]+(l.q[1]-l.p[1])*m/d]),[u,p]=c(l.s0),[h,f]=c(l.s1);return H`<line class="fp3d-gate" x1=${u} y1=${p} x2=${h} y2=${f} />`})}
      </g>`})}</g>`}renderFenceGates(t){let e=this.isAdmin,n=t.gates??[],i=t.points.length,o=Array.from({length:t.open?i-1:i},(c,u)=>{let p=t.points[u],h=t.points[(u+1)%i];return{i:u,len:Math.hypot(h[0]-p[0],h[1]-p[1])}}),s=(c,u)=>this.updateOutdoor({gates:n.map(p=>p.id===c?{...p,...u}:p)}),a=()=>{let c=o.reduce((u,p)=>p.len>u.len?p:u,o[0]);!c||c.len<.5||this.updateOutdoor({gates:[...n,{id:tt("gate"),edge:c.i,at:z(c.len/2),width:Math.min(1,z(c.len-.2))}]})},l=this.entityOptions(c=>/^(cover|switch|input_boolean|lock)\./.test(c)),d=this.entityOptions(c=>c.startsWith("binary_sensor."));return g`<div class="fp3d-wide fp3d-gates">
      <p class="fp3d-sub">${this.t("gate_hint")}</p>
      ${n.map((c,u)=>g`<fieldset class="fp3d-gate-box">
          <legend>${this.t("gate_n",{n:u+1})}</legend>
          <div class="fp3d-form">
            <label class="fp3d-field"
              >${this.t("gate_edge")}
              <select ?disabled=${!e} @change=${p=>s(c.id,{edge:Number(p.target.value)})}>
                ${o.map(p=>g`<option value=${p.i} ?selected=${p.i===c.edge}>${this.t("gate_edge_n",{n:p.i+1,len:p.len.toFixed(1)})}</option>`)}
              </select></label
            >
            <label class="fp3d-field"
              >${this.t("gate_kind")}
              <select ?disabled=${!e} @change=${p=>{let h=p.target.value;s(c.id,{kind:h==="swing"?void 0:h,width:h==="swing"?Math.min(c.width,1.2):Math.max(c.width,3)})}}>
                ${za.map(p=>g`<option value=${p} ?selected=${p===(c.kind??"swing")}>${this.t(`gate_kind_${p}`)}</option>`)}
              </select></label
            >
            ${this.len(this.t("gate_at"),c.at,p=>s(c.id,{at:Math.max(0,z(p))}),.05,0)}
            ${this.len(this.t("width"),c.width,p=>s(c.id,{width:Math.min(20,Math.max(.3,z(p)))}),.05,.3)}
            <label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!c.flip} ?disabled=${!e} @change=${p=>s(c.id,{flip:p.target.checked||void 0})} />
              ${this.t(c.kind==="slide"?"gate_flip_slide":"gate_flip")}</label
            >
            ${c.kind==="slide"?$:g`<label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!c.outward} ?disabled=${!e} @change=${p=>s(c.id,{outward:p.target.checked||void 0})} />
                  ${this.t("gate_outward")}</label
                >`}
            ${this.entitySelect(this.t("gate_entity"),c.entity??null,void 0,l,p=>s(c.id,{entity:p==="none"?null:p}))}
            ${this.entitySelect(this.t("gate_contact"),c.contact??null,void 0,d,p=>s(c.id,{contact:p==="none"?null:p}))}
            ${this.num(this.t("gate_time"),c.time??(c.kind==="slide"?15:4),p=>s(c.id,{time:Math.max(1,Math.min(300,Math.round(p)))}),1)}
          </div>
          ${e?g`<button class="fp3d-link" @click=${()=>this.updateOutdoor({gates:n.filter(p=>p.id!==c.id)})}>${this.t("gate_remove")}</button>`:$}
        </fieldset>`)}
      ${e?g`<button class="fp3d-btn" @click=${a}>${this.t("gate_add")}</button>`:$}
    </div>`}renderOutdoorZone(t){var i;let e=this.isAdmin,n=Object.values(((i=this.hass)==null?void 0:i.areas)??{}).sort((o,s)=>o.name.localeCompare(s.name));return g`<label class="fp3d-field fp3d-wide" title=${this.t("outdoor_area_hint")}
        >${this.t("area")}
        <select
          ?disabled=${!e}
          @change=${o=>{var l,d,c;let s=o.target.value||null,a=(t.name??"").trim()||(s?((c=(d=(l=this.hass)==null?void 0:l.areas)==null?void 0:d[s])==null?void 0:c.name)??null:null);this.updateOutdoor({area_id:s,name:s?a:t.name??null})}}
        >
          <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
          ${n.map(o=>g`<option value=${o.area_id} ?selected=${o.area_id===t.area_id}>${o.name}</option>`)}
        </select></label
      >
      ${t.area_id?g`<label class="fp3d-field fp3d-wide"
            >${this.t("room_name")}
            <input .value=${t.name??""} ?disabled=${!e} @change=${o=>this.updateOutdoor({name:o.target.value.trim()||null})}
          /></label>`:$}
      <p class="fp3d-sub fp3d-wide">${this.t("outdoor_area_hint")}</p>
      ${t.area_id?this.renderOutdoorDevices(t):$}`}renderOutdoorDevices(t){var h,f;let e=this.hass,n=this.floor,i=n?jn(n).find(m=>m.id===t.id):void 0;if(!e||!n||!i)return $;let o=i.area_id?(f=(h=e.areas)==null?void 0:h[i.area_id])==null?void 0:f.name:void 0,s=Li(e,$e(e,i.area_id).filter(m=>Te(rt(m)))),a=new Set([...n.placements.filter(m=>Y([m.x,m.z],i.points)).map(m=>m.entity_id),...n.furniture.filter(m=>Yt(m.type)&&m.entity&&Y([m.x,m.z],i.points)).map(m=>m.entity)]),l=s.map(m=>m.primary).filter(m=>!a.has(m)),d=new Set(t.panel??[]),c=new Set(t.hidden??[]),u=new Set(t.no_state??[]),p=(m,_)=>m.has(_)?[...m].filter(b=>b!==_):[...m,_];return s.length?g`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("devices")}</h4>
      ${s.map(m=>g`<div class="fp3d-row fp3d-dev-row ${c.has(m.primary)?"fp3d-dev-hidden":""}">
          <button class="fp3d-dev-name ${a.has(m.primary)?"":"fp3d-muted"}" ?disabled=${!a.has(m.primary)} @click=${()=>this.selectItem("device",m.primary)}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d=${Gn(rt(m.primary))} />
            </svg>
            <span>${_t(e,m.primary,o)}</span>
          </button>
          ${this.isAdmin?g`<button
                  class="fp3d-pin ${c.has(m.primary)?"fp3d-pin-on":""}"
                  aria-pressed=${c.has(m.primary)}
                  title=${this.t(c.has(m.primary)?"panel_unhide":"panel_hide")}
                  @click=${()=>this.updateOutdoor({hidden:p(c,m.primary)})}
                >
                  ${c.has(m.primary)?"\u{1F648}":"\u{1F441}"}
                </button>
                ${c.has(m.primary)?$:g`<button
                      class="fp3d-pin ${u.has(m.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${u.has(m.primary)}
                      title=${this.t(u.has(m.primary)?"panel_state_show":"panel_state_hide")}
                      @click=${()=>this.updateOutdoor({no_state:p(u,m.primary)})}
                    >
                      ${u.has(m.primary)?"\u2205":"Aa"}
                    </button>`}
                ${a.has(m.primary)?$:g`<button
                      class="fp3d-pin ${d.has(m.primary)?"fp3d-pin-on":""}"
                      aria-pressed=${d.has(m.primary)}
                      title=${this.t(d.has(m.primary)?"panel_unpin":"panel_pin")}
                      @click=${()=>this.updateOutdoor({panel:p(d,m.primary)})}
                    >
                      ${d.has(m.primary)?"\u2605":"\u2606"}
                    </button>`}`:$}
          ${this.isAdmin?a.has(m.primary)?g`<button class="fp3d-link" @click=${()=>this.removeDevice(m.primary)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([m.primary],i)}>${this.t("devices_place")}</button>`:$}
        </div>`)}
      ${this.isAdmin&&l.length>1?g`<button class="fp3d-link fp3d-place-all" @click=${()=>this.placeDevices(l,i)}>${this.t("devices_place_all_n",{n:l.length})}</button>`:$}
    </div>`:g`<p class="fp3d-sub fp3d-wide">${this.t("devices_none")}</p>`}renderOutdoorForm(t){let e=this.isAdmin,n=Fi(t.points),i=zt(t.points),o=(s,a)=>{let{x0:l,z0:d,x1:c,z1:u}=i;s==="x"&&([l,c]=[a,a+(c-l)]),s==="z"&&([d,u]=[a,a+(u-d)]),s==="w"&&(c=l+Math.max(.1,a)),s==="d"&&(u=d+Math.max(.1,a)),this.updateOutdoor({points:[[l,d],[c,d],[c,u],[l,u]].map(([p,h])=>[z(p),z(h)])})};return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("outdoor")}</h3>${this.fixButton("outdoor",t.id)}</div>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("outdoor_type")}
          <select ?disabled=${!e} @change=${s=>this.updateOutdoor({type:s.target.value})}>
            ${zo.map(s=>g`<option value=${s} ?selected=${s===t.type}>${this.t(`out_${s}`)}</option>`)}
          </select></label
        >
        ${Re(t.type)?$:this.renderOutdoorZone(t)}
        ${n?g`${this.len(this.t("x"),i.x0,s=>o("x",s))} ${this.len(this.t("z"),i.z0,s=>o("z",s))}
            ${this.len(this.t("width"),i.x1-i.x0,s=>o("w",s),.01,.1)} ${this.len(this.t("depth"),i.z1-i.z0,s=>o("d",s),.01,.1)}`:$}
        ${Re(t.type)?this.len(this.t("outdoor_height"),t.height??Io[t.type],s=>this.updateOutdoor({height:Math.min(6,Math.max(.1,z(s)))}),.05,.1):t.type==="balcony"?this.len(this.t("balcony_rail"),t.height??1,s=>this.updateOutdoor({height:Math.min(2,Math.max(.4,z(s)))}),.05,.4):$}
        ${this.len(this.t("outdoor_offset"),t.offset??0,s=>this.updateOutdoor({offset:Math.min(10,Math.max(-10,z(s)))||null}),.05)}
        ${t.type!=="pool"?g`${this.len(this.t("outdoor_slope"),t.slope??0,s=>this.updateOutdoor({slope:Math.min(20,Math.max(0,z(s)))||null}),.05,0)}
              <label class="fp3d-field"
                >${this.t("outdoor_slope_dir")}
                <select ?disabled=${!e} @change=${s=>this.updateOutdoor({slope_dir:s.target.value})}>
                  ${Sa.map(s=>g`<option value=${s} ?selected=${s===(t.slope_dir??"x")}>${this.t(`slope_${s.replace("-","n")}`)}</option>`)}
                </select></label
              >`:$}
        ${t.type==="pool"?this.renderPoolShape(t):$}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_outline_hint")}
          ><input type="checkbox" .checked=${t.outline!==!1} ?disabled=${!e} @change=${s=>this.updateOutdoor({outline:s.target.checked?void 0:!1})} />
          ${this.t("outdoor_outline")}</label
        >
        ${t.type==="fence"||t.type==="pergola"?g`<label class="fp3d-check fp3d-wide" title=${this.t("outdoor_open_hint")}
              ><input type="checkbox" .checked=${!!t.open} ?disabled=${!e} @change=${s=>this.updateOutdoor({open:s.target.checked||void 0})} />
              ${this.t("outdoor_open")}</label
            >`:$}
        ${t.type==="fence"?this.renderFenceGates(t):$}
        ${t.type==="pergola"?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.bracing} ?disabled=${!e} @change=${s=>this.updateOutdoor({bracing:s.target.checked||void 0})} />
              ${this.t("outdoor_bracing")}</label
            >`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("outdoor_cut_hint")}
          ><input type="checkbox" .checked=${!!t.cut} ?disabled=${!e} @change=${s=>this.updateOutdoor({cut:s.target.checked||void 0})} />
          ${this.t("outdoor_cut")}</label
        >
      </div>
      ${t.slope?g`<p class="fp3d-sub">${this.t("outdoor_slope_hint")}</p>`:$}
      <p class="fp3d-sub">${this.t("outdoor_hint")}</p>
      ${this.renderModuleFields(t)}
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.duplicateOutdoor()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOutdoor()}>${this.t("delete")}</button>
          </div>`:$}
    </section>`}openWallView(t,e,n=null){this._wallView={roomId:t,edge:e},this._wallSel=n,this._wallMulti=[],this._wallSingle=!1,this._wallGap=null,this._wallFrame=null,this.wallDrag=null}wallSelection(){var e,n;if(this._wallMulti.length)return this._wallMulti;let t=this._wallSel?(e=this.floor)==null?void 0:e.furniture.find(i=>i.id===this._wallSel):void 0;return t?t.group&&!this._wallSingle?(((n=this.floor)==null?void 0:n.furniture)??[]).filter(i=>i.group===t.group).map(i=>i.id):[t.id]:[]}wallToggle(t){let e=this.wallSelection(),n=this.withGroups([t]),i=e.includes(t)?e.filter(o=>!n.includes(o)):[...new Set([...e,...n])];this.wallChoose(i,t)}wallChoose(t,e=t[0]??null){this._wallSingle=!1,this._wallSel=t.length?e&&t.includes(e)?e:t[0]:null,this._wallMulti=[];let n=this.wallSelection();t.length>1&&!(t.length===n.length&&t.every(i=>n.includes(i)))&&(this._wallMulti=t),this._wallGap=null}moveSetOnWall(t,e,n,i,o=this._doc,s=!0){let a=new Set(e);this.change((l,d)=>{for(let c of d.furniture)a.has(c.id)&&(Object.assign(c,ji(t,c,n)),i!==null&&ue(c)&&(c.mount_y=Math.round(Math.min(ro,Math.max(0,Tt(d,c)+i))*1e3)/1e3))},o,s)}wallGapAt(t,e,n,i,o){let s=o<1.2,a=t.length,l=[...je(t,e,n).filter(u=>s?u.y0<1:u.y1>1.2).map(u=>[u.s0,u.s1]),...yn(t,e).filter(u=>s?u.y0<.9:u.y1>1.2).map(u=>[u.s0,u.s1])];if(l.some(([u,p])=>i>u&&i<p))return null;let d=Math.max(0,...l.filter(([,u])=>u<=i).map(([,u])=>u)),c=Math.min(a,...l.filter(([u])=>u>=i).map(([u])=>u));return c-d>=.1?{s0:Math.round(d*1e3)/1e3,s1:Math.round(c*1e3)/1e3,low:s}:null}openWallViewFor(t){let e=this.floor;if(!e)return;let n=e.rooms.find(s=>s.points.length>=3&&Y([t.x,t.z],s.points));if(!n)return;let i=-1,o=1/0;n.points.forEach((s,a)=>{let l=n.points[(a+1)%n.points.length],d=Math.hypot(l[0]-s[0],l[1]-s[1])||1,c=Math.max(0,Math.min(1,((t.x-s[0])*(l[0]-s[0])+(t.z-s[1])*(l[1]-s[1]))/(d*d))),u=Math.hypot(t.x-(s[0]+(l[0]-s[0])*c),t.z-(s[1]+(l[1]-s[1])*c));u<o&&(o=u,i=a)}),i>=0&&this.openWallView(n.id,i,t.id)}openRoomWalls(t){let e=this.floor;if(!e)return;let n=0,i=-1;t.points.forEach((o,s)=>{let a=je(He(t,s),e,t).length;a>i&&(i=a,n=s)}),this.openWallView(t.id,n)}setWallView3d(t){this._wallView3d=t,this.wall3dKey="";try{localStorage.setItem("neonplan3d.wall3d",t?"1":"0")}catch{}}setupWall3d(t,e,n){let i=`${e.id}|${n}`;if(this.wall3dKey===i&&this.wall3dEl===t)return;let o=this.wall3dEl!==t;this.wall3dKey=i,this.wall3dEl=t,o&&t.addEventListener("pointerdown",s=>this.runDown3d(s),{capture:!0}),(async()=>{var h;let s;for(let f=0;f<120&&!(s=t.viewer);f++)await new Promise(m=>setTimeout(m,50));o&&await new Promise(f=>setTimeout(f,250));let a=this.floor;if(!s||!a||this.wall3dKey!==i)return;if(!s.__npWall){s.__npWall=!0,s.updateWalls=function(){for(let m of this.floors)m.mask.standing.value=65535,m.mask.glass.value=0},s.labels.style.display="none";let f=new CSSStyleSheet;f.replaceSync(".fp3d-find-btn, .fp3d-find { display: none !important; }"),t.shadowRoot&&(t.shadowRoot.adoptedStyleSheets=[...t.shadowRoot.adoptedStyleSheets,f]),s.camera.fov=58,s.camera.updateProjectionMatrix(),s.controls.minRadius=.6,s.controls.leftDragTurns=!1}let l=He(e,n),d=Math.max(1.5,...e.points.map(f=>bt(l,f).d)),c=ie(l,l.length/2,0),u=a.elevation+(((h=s.floorMap.get(a.id))==null?void 0:h.y)??0)+1.15;s.controls.maxRadius=Math.max(1.4,d-.25);let p=s.getView();p.target.set(c[0],u,c[1]),s.flyTo({...p,radius:Math.max(1.2,Math.min(d*.8,d-.35)),theta:Math.atan2(l.n[0],l.n[1]),phi:1.3},o?0:650),s.invalidate(),this.runLiftHandle()})()}runLiftHandle(){cancelAnimationFrame(this.liftRaf);let t=()=>{var h,f;this.liftRaf=0;let e=this.wall3dEl,n=this.renderRoot.querySelector(".fp3d-wv-lift");if(!(e!=null&&e.isConnected)||!this._wallView||!this._wallView3d||(this.liftRaf=requestAnimationFrame(t),!n))return;let i=this.floor,o=this._wallSel?i==null?void 0:i.furniture.find(m=>m.id===this._wallSel):void 0,s=e.viewer;if(!o||!i||!s||!ue(o)||o.locked){n.hidden=!0;return}let a=Tt(i,o),l=i.elevation+(((h=s.floorMap.get(i.id))==null?void 0:h.y)??0)+a+o.h,d=s.camera.position.clone().set(o.x,l+.12,o.z).project(s.camera);if(d.z>1){n.hidden=!0;return}n.hidden=!1;let c=e.getBoundingClientRect(),u=((f=n.offsetParent)==null?void 0:f.getBoundingClientRect())??c;n.style.transform=`translate(${c.left-u.left+(d.x+1)/2*c.width}px, ${c.top-u.top+(1-d.y)/2*c.height}px)`;let p=n.querySelector("b");p&&(p.textContent=this.m(Math.round(a*100)/100,2))};this.liftRaf=requestAnimationFrame(t)}liftDown(t){let e=this.floor,n=this._wallSel?e==null?void 0:e.furniture.find(c=>c.id===this._wallSel):void 0,i=this.wall3dEl,o=i==null?void 0:i.viewer;if(!e||!n||!o||!this.isAdmin)return;t.preventDefault(),t.stopPropagation(),t.currentTarget.setPointerCapture(t.pointerId);let s=Math.hypot(o.camera.position.x-n.x,o.camera.position.z-n.z)||1,a=this.wall3dEl.clientHeight||1,l=e.rooms.find(c=>c.points.length>=3&&Y([n.x,n.z],c.points)),d=Math.max(e.height,(l==null?void 0:l.ceiling_height)??0);this.lift={id:n.id,y:Tt(e,n),startY:t.clientY,perPx:2*s*Math.tan(o.camera.fov*Math.PI/360)/a,base:this._doc,top:Math.max(0,d-n.h),moved:!1}}liftMove(t){var s;let e=this.lift,n=this._wallView?(s=this.floor)==null?void 0:s.rooms.find(a=>a.id===this._wallView.roomId):void 0;if(!e||!n)return;let i=(e.startY-t.clientY)*e.perPx;if(!e.moved&&Math.abs(t.clientY-e.startY)<3)return;e.moved=!0;let o=Math.min(e.top,Math.max(0,Math.round((e.y+i)*100)/100));this.moveOnWall(He(n,this._wallView.edge),e.id,0,o,e.base,!1)}liftUp(){let t=this.lift;this.lift=null,t!=null&&t.moved&&this.pushHistory(t.base)}wallPickTip=[0,0];toggleWallPick(t){var i;let e=(i=t.closest(".fp3d-toolbar"))==null?void 0:i.getBoundingClientRect(),n=t.getBoundingClientRect();this.wallPickTip=e?[n.left-e.left+n.width/2,n.bottom-e.top+8]:[0,0],this._wallPick=!this._wallPick}pickWall(t){let e=this.floor;if(!e)return;let n=null;for(let i of e.rooms){if(i.points.length<3)continue;let o=Y(t,i.points)?-.25:0;i.points.forEach((s,a)=>{let l=i.points[(a+1)%i.points.length],d=(l[0]-s[0])**2+(l[1]-s[1])**2||1,c=Math.max(0,Math.min(1,((t[0]-s[0])*(l[0]-s[0])+(t[1]-s[1])*(l[1]-s[1]))/d)),u=Math.hypot(t[0]-(s[0]+(l[0]-s[0])*c),t[1]-(s[1]+(l[1]-s[1])*c));u<.6&&(!n||u+o<n.d)&&(n={room:i,edge:a,d:u+o})})}if(!n){let i=e.rooms.find(o=>o.points.length>=3&&Y(t,o.points));if(!i)return;this._wallPick=!1,this.openRoomWalls(i),this.techPick&&this.enterTech();return}this._wallPick=!1,this.openWallView(n.room.id,n.edge),this.techPick&&this.enterTech()}techDoc3d(){var n;let t=this._doc3d;if(((n=this.techDocCache)==null?void 0:n.src)===t)return this.techDocCache.doc;let e={...t,floors:t.floors.map(i=>({...i,furniture:i.furniture.filter(o=>Pt.includes(o.type))}))};return this.techDocCache={src:t,doc:e},e}techDocCache=null;enterTech(){this.techPick=!1,this._techMode=!0,this._wallSel=null,this._wallMulti=[],this._runSel=null,this._runDraft=null,this._feedKind=null,this._runMode="draw"}turnOnWall(t,e){let n=this._doc.settings.wall_interior;this.change((i,o)=>{let s=o.furniture.find(d=>d.id===t);if(!s)return;s.rotation=Math.round((e%360+360)%360);let[a,l]=ds(o,s,s.x,s.z,n,.6);Object.assign(s,{x:a,z:l})})}moveFromWall(t,e,n){this.change((i,o)=>{let s=o.furniture.find(a=>a.id===e);s&&(s.x=Math.round((s.x+t.n[0]*n)*1e3)/1e3,s.z=Math.round((s.z+t.n[1]*n)*1e3)/1e3)})}moveOnWall(t,e,n,i,o=this._doc,s=!0){this.change((a,l)=>{let d=l.furniture.find(c=>c.id===e);d&&(Object.assign(d,ji(t,d,n)),i!==null&&(d.mount_y=Math.round(Math.min(ro,Math.max(0,i))*1e3)/1e3))},o,s)}alongAxis(t,e){let n=this.wallTurn(t,e)*Math.PI/180;return Math.abs(Math.sin(n))<.05?"w":Math.abs(Math.cos(n))<.05?"d":null}resizeOnWall(t,e,n,i,o,s,a=this._doc,l=!0){this.change((d,c)=>{let u=c.furniture.find(h=>h.id===e);if(!u)return;let p=this.alongAxis(t,u);if(n!==null&&i!==null&&p&&i-n>=.05){let h=Wt(u).map(m=>bt(t,m).s),f=(Math.min(...h)+Math.max(...h))/2;u[p]=z(i-n),Object.assign(u,ji(t,u,(n+i)/2-f))}if(o!==null||s!==null){let h=Tt(c,u),f=o??h,m=s??h+u.h;if(m-f<.03)return;u.h=z(m-f),o!==null&&ue(u)&&(u.mount_y=z(Math.max(0,f)))}},a,l)}wallTurn(t,e){let n=Math.atan2(-t.n[0],t.n[1])*180/Math.PI;return((e.rotation-n)%360+360)%360}wallPicKey(t,e){return`${e.type}|${e.w}|${e.d}|${e.h}|${e.variant??""}|${Math.round(this.wallTurn(t,e))}`}async askWallPics(t,e){let n=e.filter(i=>!this.wallPicsAsked.has(this.wallPicKey(t,i)));if(n.length){for(let i of n)this.wallPicsAsked.add(this.wallPicKey(t,i));try{let i=await ii();for(let o of n){let s=i.furnitureFront({type:o.type,w:o.w,d:o.d,h:o.h,variant:o.variant,lamp:Dn[o.type]??null},this.wallTurn(t,o),180,this.packs??[],3.2);this.wallPics.set(this.wallPicKey(t,o),s)}}catch{}this._wallPicTick++}}renderWallView(){var Et,Ft;let t=this._wallView,e=this.floor,n=t?e==null?void 0:e.rooms.find(R=>R.id===t.roomId):void 0;if(!t||!e||!n||t.edge>=n.points.length)return $;let i=n.points.length,o=He(n,t.edge),s=o.length,a=Math.max(e.height,n.ceiling_height??0),l=this._techMode?je(o,e,n,1.6).filter(R=>{var L;return Pt.includes(((L=e.furniture.find(W=>W.id===R.id))==null?void 0:L.type)??"")}):je(o,e,n),d=yn(o,e),c=R=>o.rightward?R:s-R,u=(R,L)=>[Math.min(c(R),c(L)),Math.abs(L-R)],p=R=>a-R,h=this.isAdmin,f=this._wallSel?e.furniture.find(R=>R.id===this._wallSel):void 0,m=f?l.find(R=>R.id===f.id)??(()=>{let R=Wt(f).map(W=>bt(o,W)),L=Tt(e,f);return{kind:"furniture",id:f.id,s0:Math.min(...R.map(W=>W.s)),s1:Math.max(...R.map(W=>W.s)),y0:L,y1:L+f.h,d:Math.min(...R.map(W=>W.d))}})():null,_=!!f&&ue(f),b=this.wallSelection(),v=b.length>1,y=l.filter(R=>b.includes(R.id)),x=y.length?{s0:Math.min(...y.map(R=>R.s0)),s1:Math.max(...y.map(R=>R.s1)),y0:Math.min(...y.map(R=>R.y0)),y1:Math.max(...y.map(R=>R.y1))}:null,P=R=>this.m(R,2),A=R=>{let L=R.currentTarget.closest("svg"),W=L.createSVGPoint();return W.x=R.clientX,W.y=R.clientY,W.matrixTransform(L.getScreenCTM().inverse())},F=R=>[0,s,...l.filter(L=>!R.includes(L.id)).flatMap(L=>[L.s0,L.s1]),...d.flatMap(L=>[L.s0,L.s1])],T=(R,L)=>{if(!h)return;if(Z&&this._runMode){this.techPress=Z.pt(R),this.runDown(R,Z);return}if(R.stopPropagation(),this._runSel=null,R.shiftKey||this._multiMode){this.wallToggle(L);return}(!this.wallSelection().includes(L)||this._wallSingle)&&this.wallChoose([L]);let W=this.wallSelection(),V=A(R);R.currentTarget.closest("svg").setPointerCapture(R.pointerId);let N=l.filter(X=>W.includes(X.id));if(W.length>1&&W.some(X=>this.isFixedItem("furniture",X)))return;if(W.length>1&&N.length){let X=Math.min(...N.map(nt=>nt.s0));this.wallDrag={id:L,ids:W,w:Math.max(...N.map(nt=>nt.s1))-X,x:V.x,y:V.y,base:this._doc,s0:X,y0:0,lift:N.every(nt=>{let at=e.furniture.find(ht=>ht.id===nt.id);return!!at&&ue(at)}),moved:!1};return}let et=l.find(X=>X.id===L),K=e.furniture.find(X=>X.id===L);this.wallDrag={id:L,x:V.x,y:V.y,base:this._doc,s0:et.s0,y0:et.y0,lift:!!K&&ue(K),moved:!1}},S=R=>{if(!h||this._runMode)return;let L=A(R);if(R.shiftKey||this._multiMode){R.currentTarget.closest("svg").setPointerCapture(R.pointerId),this._wallFrame={x0:L.x,y0:L.y,x1:L.x,y1:L.y};return}this._wallSel=null,this._wallMulti=[],this._wallSingle=!1;let W=o.rightward?L.x:s-L.x;this._wallGap=W>=0&&W<=s&&L.y>=0&&L.y<=a?this.wallGapAt(o,e,n,W,a-L.y):null},M=R=>{let L=this.wallResize;if(L){let ct=A(R);L.moved=!0;let Ot=F([L.id]).map(kt=>c(kt)),Ct=kt=>{if(kt=Math.round(kt*100)/100,!R.altKey){for(let Vt of Ot)if(Math.abs(kt-Vt)<.04)return Vt}return kt};if(L.side==="l"||L.side==="r"){let kt=L.side==="l"?Math.min(Ct(ct.x),L.x1-.1):L.x0,Vt=L.side==="r"?Math.max(Ct(ct.x),L.x0+.1):L.x1,[Ae,co]=o.rightward?[kt,Vt]:[s-Vt,s-kt];this.resizeOnWall(o,L.id,Ae,co,null,null,L.base,!1)}else{let kt=Math.round((a-ct.y)*100)/100;L.side==="t"?this.resizeOnWall(o,L.id,null,null,null,Math.max(L.y0+.05,Math.min(a,kt)),L.base,!1):this.resizeOnWall(o,L.id,null,null,Math.max(0,Math.min(L.y1-.05,kt)),null,L.base,!1)}return}let W=this._wallFrame;if(W){let ct=A(R);this._wallFrame={...W,x1:ct.x,y1:ct.y};return}let V=this.wallDrag;if(!V)return;let N=A(R),et=N.x-V.x,K=V.y-N.y;if(!V.moved&&Math.hypot(et,K)<.02)return;V.moved=!0;let X=l.find(ct=>ct.id===V.id),nt=V.ids?V.w??0:X?X.s1-X.s0:0,at=V.s0+(o.rightward?et:-et);if(at=Math.round(at*100)/100,!R.altKey)for(let ct of F(V.ids??[V.id]))Math.abs(at-ct)<.04?at=ct:Math.abs(at+nt-ct)<.04&&(at=ct-nt);if(V.ids){this.moveSetOnWall(o,V.ids,at-V.s0,V.lift?Math.round(K*100)/100:null,V.base,!1);return}let ht=V.lift?Math.round((V.y0+K)*100)/100:null;this.moveOnWall(o,V.id,at-V.s0,ht,V.base,!1)},w=()=>{let R=this.wallResize;if(R){this.wallResize=null,R.moved&&this.pushHistory(R.base);return}let L=this._wallFrame;if(L){this._wallFrame=null;let[V,N]=[Math.min(L.x0,L.x1),Math.max(L.x0,L.x1)],[et,K]=[Math.min(L.y0,L.y1),Math.max(L.y0,L.y1)],X=l.filter(nt=>{let[at,ht]=u(nt.s0,nt.s1),ct=at+ht/2,Ot=p((nt.y0+nt.y1)/2);return ct>=V&&ct<=N&&Ot>=et&&Ot<=K}).map(nt=>nt.id);X.length&&this.wallChoose([...new Set([...this.wallSelection(),...this.withGroups(X)])]);return}let W=this.wallDrag;this.wallDrag=null,W!=null&&W.moved&&this.pushHistory(W.base)},k=R=>{if(this._runMode&&(R.key==="Escape"||R.key==="Enter")){R.preventDefault(),R.key==="Enter"?this.finishRun("",null):this._runDraft?this._runDraft=null:this._runMode=null;return}if(R.key==="Escape"){this._wallView=null;return}if((R.key==="Delete"||R.key==="Backspace")&&h&&Z&&this._runSel&&!b.length&&!R.target.closest("input, select, textarea")){R.preventDefault();let et=this._runSel.pipe;this.changePool(Z.pool.id,K=>K.pipes=(K.pipes??[]).filter(X=>X.id!==et)),this._runSel=null;return}if((R.key==="Delete"||R.key==="Backspace")&&h&&b.length&&!R.target.closest("input, select, textarea")){R.preventDefault(),this.deleteOnWall(b);return}if(!m&&(R.key==="ArrowLeft"||R.key==="ArrowRight")){R.preventDefault(),j(R.key==="ArrowLeft"?O:C);return}if(!m||!h||!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(R.key)||R.target.closest("input, select, textarea"))return;R.preventDefault();let L=R.shiftKey?.1:.01,W=R.key==="ArrowRight"?L:R.key==="ArrowLeft"?-L:0,V=o.rightward?W:-W,N=R.key==="ArrowUp"?L:R.key==="ArrowDown"?-L:0;if(v)return this.moveSetOnWall(o,b,V,N||null);this.moveOnWall(o,m.id,V,_&&N?m.y0+N:null)},E=v&&x?x:m,I=E?(()=>{let R=E,[L,W]=u(R.s0,R.s1),V=p(R.y0),N=Math.min(a+.25,p(0)+.25);return H`<g class="fp3d-wv-dims">
            ${L>.03?H`<line x1="0" y1=${N} x2=${L} y2=${N} /><text x=${L/2} y=${N-.05}>${P(L)}</text>`:$}
            ${s-L-W>.03?H`<line x1=${L+W} y1=${N} x2=${s} y2=${N} /><text x=${L+W+(s-L-W)/2} y=${N-.05}>${P(s-L-W)}</text>`:$}
            ${R.y0>.03?H`<line x1=${L+W/2} y1=${V} x2=${L+W/2} y2=${a} /><text x=${L+W/2+.05} y=${(V+a)/2} class="fp3d-wv-up">${P(R.y0)}</text>`:$}
          </g>`})():$,C=(t.edge+(o.rightward?1:-1)+i)%i,O=(t.edge+(o.rightward?-1:1)+i)%i,D=R=>this.t("wall_n",{a:R+1,b:(R+1)%i+1}),j=R=>this.openWallView(n.id,R);this._wallPicTick,this.askWallPics(o,l.map(R=>e.furniture.find(L=>L.id===R.id)).filter(R=>!!R));let U=`${n.id}:${t.edge}`,G=((Et=this.wvZoom)==null?void 0:Et.key)===U?this.wvZoom:null,Q=s+1,J=a+.9,it=(R,L,W)=>{let V=Math.min(8,Math.max(1,R)),N=Q/V,et=J/V;return{k:V,w:N,h:et,x0:Math.min(-.5+Q-N,Math.max(-.5,L)),y0:Math.min(-.35+J-et,Math.max(-.35,W))}},q=it((G==null?void 0:G.k)??1,(G==null?void 0:G.x0)??-.5,(G==null?void 0:G.y0)??-.35),lt=(R,L,W)=>{let V=it(R,L,W);this.wvZoom=V.k<=1.001?null:{key:U,k:V.k,x0:V.x0,y0:V.y0},this.requestUpdate()},It=(R,L,W)=>{let V=Math.min(8,Math.max(1,W));lt(V,R-(R-q.x0)*q.k/V,L-(L-q.y0)*q.k/V)},te=R=>{let L=this.wvPinch,[W,V]=[...this.wvTouch.values()],N=Math.hypot(W.x-V.x,W.y-V.y),et=(W.x+V.x)/2,K=(W.y+V.y)/2,X=R.getBoundingClientRect(),nt=Q/L.k,at=J/L.k,ht=Math.min(X.width/nt,X.height/at),ct=X.left+(X.width-nt*ht)/2,Ot=X.top+(X.height-at*ht)/2,Ct=L.x0+(L.mx-ct)/ht,kt=L.y0+(L.my-Ot)/ht,Vt=Math.min(8,Math.max(1,L.k*N/Math.max(1,L.d))),Ae=ht*(Vt/L.k),co=X.left+(X.width-Q/Vt*Ae)/2,Zd=X.top+(X.height-J/Vt*Ae)/2;lt(Vt,Ct-(et-co)/Ae,kt-(K-Zd)/Ae)};this.wvScale=1/Math.sqrt(q.k);let B=Math.max(.09,Math.min(.16,s/40))*this.wvScale,pt=this.canLayRuns?this.runPool:void 0,Z=this.runCtx3d=pt?{frame:o,floor:e,room:n,key:`${n.id}|${t.edge}`,L:s,H:a,gap:(pe(e,n.id,o.a,o.b)?this._doc.settings.wall_interior/2:0)+ir,runs:Dl(o,(((Ft=pt.pool)==null?void 0:Ft.pipes)??[]).filter(R=>R.floor_id===e.id),ft(this._doc,e,pt)),pool:pt,pt:R=>{let L=A(R);return{s:o.rightward?L.x:s-L.x,y:a-L.y}}}:null;return g`<div class="fp3d-wv-veil" @click=${R=>R.target===R.currentTarget&&(this._wallView=null)}>
      <div class="fp3d-wv" role="dialog" aria-label=${this.t("wall_view")} tabindex="0" @keydown=${k}>
        <div class="fp3d-wv-head">
          <button class="fp3d-btn" title=${`${this.t("wall_prev")}: ${D(O)}`} @click=${()=>j(O)}>‹</button>
          <b>${this.t("wall_view")} · ${n.name} · ${this.t("wall_n",{a:t.edge+1,b:(t.edge+1)%i+1})} · ${this.m(s,2)}</b>
          <button class="fp3d-btn" title=${`${this.t("wall_next")}: ${D(C)}`} @click=${()=>j(C)}>›</button>
          <span class="fp3d-wv-grow"></span>
          ${h&&this.pipeRules&&this.runPool?g`<button class="fp3d-btn ${this._techMode?"fp3d-primary":""}" title=${this.t("tech_mode_hint")} @click=${()=>{this._techMode?(this._techMode=!1,this._runDraft=null,this._feedKind=null,this._runMode=null):this.enterTech()}}>🛠 ${this.t("tech_mode")}</button>`:$}
          ${Z&&h&&!this._techMode?g`<button class="fp3d-btn ${this._runMode==="draw"?"fp3d-primary":""}" @click=${()=>{this._wallSel=null,this._runSel=null,this._runDraft=null,this._runMode=this._runMode==="draw"?null:"draw"}}>${this.t("wall_run_add")}</button>`:$}
          <div class="fp3d-seg" role="group">
            <button aria-pressed=${this._wallView3d} @click=${()=>this.setWallView3d(!0)}>${this.t("wall_view_3d")}</button>
            <button aria-pressed=${!this._wallView3d} @click=${()=>this.setWallView3d(!1)}>${this.t("wall_view_front")}</button>
          </div>
          <button class="fp3d-btn" title=${this.t("close")} @click=${()=>this._wallView=null}>✕</button>
        </div>
        <div class="fp3d-wv-body">
        ${this.renderWallKit(o,n,Z)}
        <div class="fp3d-wv-stage">
          <button class="fp3d-wv-side fp3d-wv-left" title=${`${this.t("wall_prev")}: ${D(O)}`} @click=${()=>j(O)}>‹<small>${D(O)}</small></button>
          <button class="fp3d-wv-side fp3d-wv-right" title=${`${this.t("wall_next")}: ${D(C)}`} @click=${()=>j(C)}>›<small>${D(C)}</small></button>
          ${this._wallView3d?$:g`<div class="fp3d-wv-zoom" title=${this.t("wall_zoom_hint")}>
                <button class="fp3d-btn" aria-label="+" @click=${()=>It(q.x0+q.w/2,q.y0+q.h/2,q.k*1.6)}>＋</button>
                <button class="fp3d-btn" aria-label="−" ?disabled=${q.k<=1.001} @click=${()=>It(q.x0+q.w/2,q.y0+q.h/2,q.k/1.6)}>−</button>
                <button class="fp3d-btn" title=${this.t("wall_zoom_all")} ?disabled=${q.k<=1.001} @click=${()=>lt(1,-.5,-.35)}>⤢</button>
                ${q.k>1.001?g`<button class="fp3d-btn" aria-label="←" @click=${()=>lt(q.k,q.x0-q.w*.3,q.y0)}>←</button>
                      <button class="fp3d-btn" aria-label="→" @click=${()=>lt(q.k,q.x0+q.w*.3,q.y0)}>→</button>
                      <button class="fp3d-btn" aria-label="↑" @click=${()=>lt(q.k,q.x0,q.y0-q.h*.3)}>↑</button>
                      <button class="fp3d-btn" aria-label="↓" @click=${()=>lt(q.k,q.x0,q.y0+q.h*.3)}>↓</button>`:$}
              </div>`}
        ${this._wallView3d?g`<fp3d-view3d
              .walkable=${!1}
              class="fp3d-wv-3d"
              ${Hr(R=>R&&this.setupWall3d(R,n,t.edge))}
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
              .selectedSet=${b}
              .quality=${"auto"}
              .floorThumbs=${!1}
              .roomLabels=${!1}
              .floorStack=${"single"}
              .panelOpen=${!1}
              .alerts=${!1}
              .scenes=${!1}
              .central=${!1}
              @furniture-select=${R=>{let L=R.detail.id;L&&(this.shiftHeld||this._multiMode)?this.wallToggle(L):L?!this.wallSelection().includes(L)||this._wallSingle?this.wallChoose([L]):this._wallSel=L:this.wallChoose([])}}
              @furniture-move=${this.onFurnitureMoved3d}
            ></fp3d-view3d>
            <div class="fp3d-wv-lift" hidden title=${this.t("wall_view_lift")} @pointerdown=${R=>this.liftDown(R)} @pointermove=${R=>this.liftMove(R)} @pointerup=${()=>this.liftUp()} @pointercancel=${()=>this.liftUp()}>
              <span>↕</span><b></b>
            </div>`:g`<svg
          class="fp3d-wv-svg ${this._runMode?"fp3d-wv-drawing":""} ${this._runMode==="valve"||this._runMode==="sight"?"fp3d-wv-fitmode":""} ${this._runMode==="erase"?"fp3d-wv-fitmode fp3d-wv-erase":""}"
          viewBox="${q.x0} ${q.y0} ${q.w} ${q.h}"
          preserveAspectRatio="xMidYMid meet"
          @wheel=${R=>{R.preventDefault();let L=R.currentTarget,W=L.createSVGPoint();W.x=R.clientX,W.y=R.clientY;let V=W.matrixTransform(L.getScreenCTM().inverse());It(V.x,V.y,q.k*Math.exp(-R.deltaY*.0015))}}
          @pointerdown=${R=>{if(R.pointerType==="touch"){if(this.wvTouch.set(R.pointerId,{x:R.clientX,y:R.clientY}),this.wvTouch.size===2){let[L,W]=[...this.wvTouch.values()];this.wvPinch={d:Math.hypot(L.x-W.x,L.y-W.y),mx:(L.x+W.x)/2,my:(L.y+W.y)/2,k:q.k,x0:q.x0,y0:q.y0},this.wvTap=null,this.techPress=null,w(),this.runPointUp(),this.fitDrag=null,this.jointDrag=null;return}if(this.wvPinch)return;if(Z&&this._runMode&&this.isAdmin){R.stopPropagation();let L=Z.pt(R);this.wvTap=L,this.techPress=L;return}}Z&&this._runMode?(this.techPress=Z.pt(R),this.runDown(R,Z)):this._runSel?this._runSel=null:S(R)}}
          @pointermove=${R=>{if(this.wvTouch.has(R.pointerId)&&this.wvTouch.set(R.pointerId,{x:R.clientX,y:R.clientY}),this.wvPinch){this.wvTouch.size===2&&te(R.currentTarget);return}if(M(R),Z&&this.jointDrag)this.jointMove(R,Z);else if(Z&&this.fitDrag)this.fittingMove(R,Z);else if(Z&&this.runDrag)this.runPointMove(R,Z);else if(Z&&this._runMode==="draw"&&this.techPress&&this.isAdmin&&(R.buttons&1||R.pointerType==="touch")){let L=Z.pt(R),W=this.techPress;if(!this._runDraft&&!this.techStroke&&Math.hypot(L.s-W.s,L.y-W.y)>.02&&(this.wvTap=null,this.runAt(Z,W.s,W.y,!1,1,null)),this._runDraft&&!this.wvTap){let V=this.techStroke??=[this.techPress],N=V[V.length-1];Math.hypot(L.s-N.s,L.y-N.y)>.02&&V.push(L),this.runHover=[L.s,L.y],this.requestUpdate()}}else if(Z&&this._runMode==="draw"&&this._runDraft){let L=Z.pt(R);this.runHover=[L.s,L.y],this.requestUpdate()}}}
          @pointerup=${R=>{if(this.wvTouch.delete(R.pointerId),this.wvPinch){this.wvTouch.size||(this.wvPinch=null);return}let L=this.wvTap;this.wvTap=null;let W=this.techStroke;this.techStroke=null;let V=W?W.reduce((K,X,nt)=>nt?K+Math.hypot(X.s-W[nt-1].s,X.y-W[nt-1].y):0,0):0,N=Z&&this._techMode&&this._runMode==="draw";if(W&&V>.12&&Z&&this._runMode==="draw"&&this._runDraft)this.techPress=null,this.runHover=null,this.endStroke(Z,W,Z.pt(R));else if(N){let K=this.techPress;if(this.techPress=null,this._runDraft=null,this.runHover=null,K){let X=this.runPick(Z,K.s,K.y,!0);this._runSel=X.pipe?{pipe:X.pipe.id,pt:null}:null}}else L&&Z&&this._runMode&&this.runAt(Z,L.s,L.y,!1,1,null),this.techPress=null;w(),this.runPointUp(),this.fittingUp(Z);let et=this.jointDrag;this.jointDrag=null,et!=null&&et.moved?this.pushHistory(et.base):et&&Z&&this.openCard(Z.pool.id,`joint:${et.id}`)}}
          @pointercancel=${R=>{this.wvTouch.delete(R.pointerId),this.wvTouch.size||(this.wvPinch=null),this.wvTap=null,this.techPress=null,this.techStroke=null,w(),this.runPointUp(),this.fitDrag=null}}
          style="--fs:${B}px"
        >
          <rect class="fp3d-wv-wall" x="0" y="0" width=${s} height=${a} />
          ${Array.from({length:Math.floor(a/.5)},(R,L)=>H`<line class="fp3d-wv-grid" x1="0" x2=${s} y1=${p((L+1)*.5)} y2=${p((L+1)*.5)} /><text class="fp3d-wv-scale" x="-0.06" y=${p((L+1)*.5)+.03}>${((L+1)*.5).toFixed(1)}</text>`)}
          ${d.map(R=>{let[L,W]=u(R.s0,R.s1),V=e.openings.find(et=>et.id===R.id),N=(V==null?void 0:V.type)==="window"?this.t("opening_window"):(V==null?void 0:V.type)==="garage"?this.t("opening_garage"):this.t("opening_door");return H`<rect class="fp3d-wv-hole ${(V==null?void 0:V.type)==="window"?"fp3d-wv-window":""}" x=${L} y=${p(R.y1)} width=${W} height=${R.y1-R.y0} />
              ${W>B*3.5?H`<text class="fp3d-wv-hole-label" x=${L+W/2} y=${p(R.y1)+B*1.3} style="font-size:${B*.85}px">${N}</text>`:$}`})}
          ${l.map(R=>{let[L,W]=u(R.s0,R.s1),V=e.furniture.find(nt=>nt.id===R.id),N=V.name||Pe(this.hass,V.type),et=R.y1-R.y0,K=this.wallPics.get(this.wallPicKey(o,V)),X=c(bt(o,[V.x,V.z]).s);return H`<g class="fp3d-wv-item ${K?"fp3d-wv-pic":""} ${R.id===this._wallSel||b.includes(R.id)?"fp3d-wv-sel":""}" @pointerdown=${nt=>T(nt,R.id)} @dblclick=${()=>{let nt=e.furniture.find(at=>at.id===R.id);if(nt!=null&&nt.group&&!this._wallSingle){this.wallChoose([R.id]),this._wallSingle=!0;return}this._wallView=null,this.selectItem("furniture",R.id)}}>
              ${K?H`<image href=${K.url} x=${X+K.x0} y=${p(R.y0+K.y1)} width=${K.x1-K.x0} height=${K.y1-K.y0} preserveAspectRatio="none" />`:$}
              <rect x=${L} y=${p(R.y1)} width=${W} height=${Math.max(.02,et)}><title>${N}</title></rect>
              ${!K&&W>B*3&&et>B*1.4?H`<text x=${L+W/2} y=${p(R.y1)+Math.min(et/2,B*1.6)+B*.35} style="font-size:${B}px">${N}</text>`:$}
            </g>`})}
          ${I}
          ${m&&f&&!v&&h&&!f.locked&&l.some(R=>R.id===m.id)?(()=>{let[R,L]=u(m.s0,m.s1),W=p(m.y1),V=p(m.y0),N=B*.75,et=this.alongAxis(o,f),K=X=>nt=>{nt.stopPropagation(),nt.currentTarget.closest("svg").setPointerCapture(nt.pointerId),this.wallResize={id:m.id,side:X,x0:R,x1:R+L,y0:m.y0,y1:m.y1,base:this._doc,moved:!1}};return H`<g class="fp3d-wv-handles">
                  ${et?H`<rect class="fp3d-wv-handle fp3d-wv-ew" x=${R-N/2} y=${(W+V)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("l")} />
                        <rect class="fp3d-wv-handle fp3d-wv-ew" x=${R+L-N/2} y=${(W+V)/2-N} width=${N} height=${N*2} rx=${N/3} @pointerdown=${K("r")} />`:$}
                  <rect class="fp3d-wv-handle fp3d-wv-ns" x=${R+L/2-N} y=${W-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("t")} />
                  ${m.y0>.05&&ue(f)?H`<rect class="fp3d-wv-handle fp3d-wv-ns" x=${R+L/2-N} y=${V-N/2} width=${N*2} height=${N} rx=${N/3} @pointerdown=${K("b")} />`:$}
                  <text class="fp3d-wv-size" x=${R+L/2} y=${W-N*.9} style="font-size:${B*.85}px">${P(m.s1-m.s0)} × ${P(m.y1-m.y0)}</text>
                </g>`})():$}
          ${v&&x?(()=>{let[R,L]=u(x.s0,x.s1),W=!this._wallMulti.length;return H`<g class=${`fp3d-wv-setframe${W?" fp3d-wv-setblock":""}`}><rect x=${R-.03} y=${p(x.y1)-.03} width=${L+.06} height=${x.y1-x.y0+.06} /><text x=${R} y=${p(x.y1)-.07} style="font-size:${B*.85}px">${W?`\u25A3 ${this.t("block_title")} \xB7 ${b.length}`:this.t("multi_title",{n:b.length})}</text></g>`})():$}
          ${this._wallGap?(()=>{let R=this._wallGap,[L,W]=u(R.s0,R.s1),V=R.low?Math.min(a,.9):Math.min(a,2.2),N=R.low?0:1.3;return H`<g class="fp3d-wv-gap"><rect x=${L} y=${p(V)} width=${W} height=${V-N} /><text x=${L+W/2} y=${p((V+N)/2)} style="font-size:${B}px">${P(W)}</text></g>`})():$}
          ${this._wallFrame?H`<rect class="fp3d-wv-marquee" x=${Math.min(this._wallFrame.x0,this._wallFrame.x1)} y=${Math.min(this._wallFrame.y0,this._wallFrame.y1)} width=${Math.abs(this._wallFrame.x1-this._wallFrame.x0)} height=${Math.abs(this._wallFrame.y1-this._wallFrame.y0)} />`:$}
          <line class="fp3d-wv-floor" x1="-0.3" x2=${s+.3} y1=${a} y2=${a} />
          ${Z?this.renderRuns(Z,c,p):$}
        </svg>`}
        </div>
        </div>
        <div class="fp3d-wv-foot">
          ${Z&&this._techMode&&!this._runDraft&&!this._runSel&&!m&&(this._runMode==="draw"||this._runMode==="feed")?g`<span class="fp3d-muted">${this.t(this._runMode==="feed"?"tech_feed_place":"tech_start")}</span> ${this.renderTechIssues(Z)}`:Z&&(this._runMode||this._runSel&&!m)?this.renderRunFoot(Z):v&&h?this.renderWallSetFoot(o,b,x,u):m&&f?g`<b>${f.name||Pe(this.hass,f.type)}</b>
                ${this.fixButton("furniture",m.id)}
                ${f.group&&h?g`<button class="fp3d-btn" title=${this.t("block_select")} @click=${()=>{this._wallSingle=!1,this.requestUpdate()}}>▣ ${this.t("wv_block_all")}</button>`:$}
                ${Z&&Pt.includes(f.type)?g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.openCard(Z.pool.id,`dev:${f.id}`)}>${this.t("card_open")}</button>`:$}
                ${f.locked&&h?g`<span class="fp3d-muted">${this.t("wall_view_fixed")}</span>`:$}
                ${this.len(this.t("wall_view_left"),Math.round(u(m.s0,m.s1)[0]*1e3)/1e3,R=>{let L=R-u(m.s0,m.s1)[0];this.moveOnWall(o,m.id,o.rightward?L:-L,null)},.01,0)}
                ${this.len(this.t("wall_view_depth"),Math.round(Math.max(0,m.d)*1e3)/1e3,R=>this.moveFromWall(o,m.id,R-m.d),.01,0)}
                ${h&&!f.locked&&this.alongAxis(o,f)?this.len(this.t("width"),Math.round((m.s1-m.s0)*1e3)/1e3,R=>{let L=Math.max(.05,R);o.rightward?this.resizeOnWall(o,m.id,m.s0,m.s0+L,null,null):this.resizeOnWall(o,m.id,m.s1-L,m.s1,null,null)},.01,.05):$}
                ${h&&!f.locked?this.len(this.t("height_m"),Math.round((m.y1-m.y0)*1e3)/1e3,R=>this.resizeOnWall(o,m.id,null,null,null,m.y0+Math.max(.03,R)),.01,.03):$}
                ${_?this.len(this.t("mount_height"),Math.round(m.y0*1e3)/1e3,R=>this.moveOnWall(o,m.id,0,R),.01,0):g`<span class="fp3d-muted">${this.t("wall_view_floor")}</span>`}
                ${h&&!f.locked?g`<span class="fp3d-wv-turn">
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation-45)}>↺ 45°</button>
                      ${this.num(this.t("rotation"),f.rotation,R=>this.turnOnWall(f.id,R),1)}
                      <button class="fp3d-btn" title=${this.t("wall_view_turn")} @click=${()=>this.turnOnWall(f.id,f.rotation+45)}>↻ 45°</button>
                    </span>`:$}
                <button class="fp3d-btn" @click=${()=>{this._wallView=null,this.selectItem("furniture",m.id)}}>${this.t("wall_view_form")}</button>
                ${h?g`<button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall([m.id])}>${this.t("delete")}</button>`:$}`:g`<span class="fp3d-muted">${this._wallView3d?this.t("wall_view_hint_3d"):l.length?this.t("wall_view_hint"):this.t("wall_view_empty")}</span>`}
          ${h&&!this._techMode?this.renderMultiToggle():$}
        </div>
      </div>
    </div>`}renderWallSetFoot(t,e,n,i){let o=!this._wallMulti.length,s=e.every(l=>this.isFixedItem("furniture",l)),a=!s&&e.some(l=>this.isFixedItem("furniture",l));return g`<b>${o?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</b>
      ${a?g`<span class="fp3d-wv-fixnote">${this.t("block_some_fixed")}</span>`:$}
      ${o?g`<div class="fp3d-seg" role="group">
              <button aria-pressed="true">${this.t("wv_block_all")}</button>
              <button aria-pressed="false" @click=${()=>this._wallSingle=!0}>${this.t("wv_block_one")}</button>
            </div>
            <button class="fp3d-btn" @click=${()=>{let l=this._wallSel;this._wallMulti=e,this.ungroupSelectionOf(e),this._wallSel=l}}>${this.t("block_break")}</button>`:g`<button class="fp3d-btn fp3d-primary" @click=${()=>{this.groupIds(e),this._wallMulti=[]}}>▣ ${this.t("block_make")}</button>`}
      ${n?this.len(this.t("wall_view_left"),Math.round(i(n.s0,n.s1)[0]*1e3)/1e3,l=>{let d=l-i(n.s0,n.s1)[0];this.moveSetOnWall(t,e,t.rightward?d:-d,null)},.01,0):$}
      <button class="fp3d-btn ${a?"fp3d-primary":""}" @click=${()=>{let l=new Set(e),d=!s&&!a;this.change((c,u)=>{for(let p of u.furniture)l.has(p.id)&&(p.locked=d||null)})}}>${s?`\u{1F513} ${this.t("unfix")}`:a?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
      <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOnWall(e)}>${this.t("delete")}</button>`}deleteOnWall(t){if(!t.length||!this.isAdmin)return;if(t.length>1){if(!confirm(this.t(t.some(n=>this.isFixedItem("furniture",n))?"block_delete_fixed":"block_delete",{n:t.length})))return}else if(!this.confirmFixedDelete("furniture",t[0]))return;let e=new Set(t);this.change((n,i)=>i.furniture=i.furniture.filter(o=>!e.has(o.id))),this._wallSel=null,this._wallMulti=[],this._wallSingle=!1}groupIds(t){let e=new Set(t),n=tt("block");this.change((i,o)=>{for(let s of o.furniture)e.has(s.id)&&(s.group=n)})}ungroupSelectionOf(t){let e=new Set(t);this.change((n,i)=>{for(let o of i.furniture)e.has(o.id)&&(o.group=null)})}addOnWall(t,e,n){let i=this.floor;if(!i||!this.isAdmin)return;this.rememberWallType(t);let o=this._wallGap;if(o)return this.addIntoGap(t,e,n,o);let[s,a,l]=jt(t),d=[...je(e,i,n).map(_=>[_.s0,_.s1]),...yn(e,i).filter(_=>_.y0<.05).map(_=>[_.s0,_.s1])],c=Math.max(0,e.length/2-s/2);for(let _=.1;_+s<=e.length-.05;_+=.05)if(!d.some(([b,v])=>_<v+.05&&_+s>b-.05)){c=_;break}let u=pe(i,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,[p,h]=ie(e,c+s/2,u+a/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:tt("furniture"),type:t,x:z(p),z:z(h),rotation:f,w:s,d:a,h:l,variant:null};this.change((_,b)=>b.furniture.push(m)),this._runSel=null,this._runMode=null,this._wallSel=m.id}addIntoGap(t,e,n,i){let o=this.floor,s=i.s1-i.s0,[a,l,d]=jt(t);ao.has(t)&&(a>s+.005||s-a<.1)&&(a=Math.round(s*1e3)/1e3);let c=pe(o,n.id,e.a,e.b)?this._doc.settings.wall_interior/2:0,u=i.s0+Math.min(a,s)/2,[p,h]=ie(e,u,c+l/2+.01),f=Math.round((Math.atan2(-e.n[0],e.n[1])*180/Math.PI%360+360)%360),m={id:tt("furniture"),type:t,x:z(p),z:z(h),rotation:f,w:a,d:l,h:d,variant:null};this.change((_,b)=>b.furniture.push(m)),this._wallGap=null,this._wallSel=m.id,this._wallMulti=[]}rememberWallType(t){try{let e=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");localStorage.setItem("neonplan3d.wallRecent",JSON.stringify([t,...e.filter(n=>n!==t)].slice(0,6)))}catch{}}wallRecent(){try{let t=JSON.parse(localStorage.getItem("neonplan3d.wallRecent")??"[]");return Array.isArray(t)?t.filter(e=>typeof e=="string"&&(ki.includes(e)||!!gt(e))):[]}catch{return[]}}renderWallFurniture(t,e){let n=this._wallGap,i=n?n.s1-n.s0:0,o=Jd(this._wallQuery.trim()),s=this._wallCat,a=(this.packs??[]).flatMap(_=>_.items.filter(b=>!b.light&&!b.vehicle&&!b.hole&&b.mount!=="ceiling").map(b=>({type:Fe(_.id,b.id),label:ce(b),search:`${Object.values(b.name).join(" ")} ${_.name}`,wall:b.mount==="wall"}))),l=_=>this.t(`furn_${_}`),d=[];s==="pack"?d=a:s==="energy"?d=["meter","inverter","home_battery","wallbox"].map(_=>({type:_,label:l(_),search:""})):s?d=(nr[s]??[]).map(_=>({type:_,label:l(_),search:ae(rr,`furn_${_}`)})):o||n?d=[...Object.values(nr).flat().filter((_,b,v)=>v.indexOf(_)===b).map(_=>({type:_,label:l(_),search:ae(rr,`furn_${_}`)})),...a]:this.wallRecent().length||(d=nr.base.map(_=>({type:_,label:l(_),search:""})));let c=o.split(/\s+/).filter(Boolean),u=c.length?d.filter(_=>c.every(b=>Jd(`${_.label} ${_.search} ${_.type.replace(/[_:.]/g," ")}`).includes(b))):d;if(n){let _=(b,v)=>v||ih.has(b);u=u.filter(b=>_(b.type,b.wall)===!n.low).filter(b=>jt(b.type)[0]<=i+.01||ao.has(b.type)&&i>=(oh[b.type]??.2)).sort((b,v)=>{let y=x=>ao.has(x)?1:Math.min(1,jt(x)[0]/i);return y(v.type)-y(b.type)||Number(b.type.startsWith("pack:"))-Number(v.type.startsWith("pack:"))})}let p=!s&&!o&&!n?this.wallRecent():[],h=[["base","\u25AD"],["hang","\u2594"],["tall","\u25AF"],["living","\u{1F6CB}"],["light","\u{1F4A1}"],...(this.packs??[]).some(_=>_.items.length)?[["pack","\u{1F9E9}"]]:[],...vt("energy_pro")?[["energy","\u26A1"]]:[]],f=[...p,...u.slice(0,40).map(_=>_.type)];this.askKitPics(f),this._wallPicTick;let m=(_,b)=>{let v=jt(_)[0],y=n&&ao.has(_)&&(v>i+.005||i-v<.1),x=this.kitPics.get(_);return g`<button class="fp3d-wv-tile" title=${b} @click=${()=>this.addOnWall(_,t,e)}>
        <span class="fp3d-wv-tile-pic">${x?g`<img src=${x} alt="" />`:g`<i></i>`}</span>
        <span class="fp3d-wv-tile-name">${b}</span>
        <small class=${y?"fp3d-wv-fit":""}>${y?`\u2194 ${this.m(i,2)}`:this.m(v,2)}</small>
      </button>`};return g`<aside class="fp3d-wv-kit">
      <h4>${this.t("wv_kit_title")}</h4>
      <div class="fp3d-wv-cats">
        ${h.map(([_,b])=>g`<button class="fp3d-wv-cat ${s===_?"fp3d-on":""}" title=${this.t(`wv_cat_${_}`)} @click=${()=>this._wallCat=s===_?null:_}><span>${b}</span>${this.t(`wv_cat_${_}`)}</button>`)}
      </div>
      <input class="fp3d-search" type="search" placeholder=${this.t("furniture_search")} .value=${this._wallQuery} @input=${_=>this._wallQuery=_.target.value} />
      ${n?g`<p class="fp3d-sub fp3d-wv-gapnote">${this.t("wv_gap",{w:this.m(i,2)})} <button class="fp3d-link" @click=${()=>this._wallGap=null}>✕</button></p>`:!s&&!o?g`<p class="fp3d-sub">${this.t("wv_gap_hint")}</p>`:$}
      ${s?g`<h4>${this.t(`wv_cat_${s}`)}</h4>`:$}
      ${p.length?g`<h4>${this.t("wv_recent")}</h4><div class="fp3d-wv-tiles">${p.map(_=>m(_,gt(_)?ce(gt(_)):l(_)))}</div>`:$}
      ${(s||o||n)&&!u.length?g`<p class="fp3d-sub">${this.t(n?"wv_none_fits":"furniture_search_none")}</p>`:$}
      <div class="fp3d-wv-tiles">${u.slice(0,40).map(_=>m(_.type,_.label))}</div>
    </aside>`}async askKitPics(t){let e=t.filter(n=>!this.kitPicsAsked.has(n));if(e.length){for(let n of e)this.kitPicsAsked.add(n);try{let n=await ii();for(let i of e){let[o,s,a]=jt(i);this.kitPics.set(i,n.furniturePreview({type:i,w:o,d:s,h:a,variant:null,lamp:Dn[i]??null},120,this.packs??[]))}}catch{}this._wallPicTick++}}renderWallKit(t,e,n){let i=!!n,o=vt("energy_pro");if(!i)return this.isAdmin?this.renderWallFurniture(t,e):$;if(this._techMode&&n)return this.renderTechKit(t,e,n);if(!this.isAdmin||!i&&!o)return $;let s=l=>g`<button class="fp3d-btn" @click=${()=>this.addOnWall(l,t,e)}>+ ${this.t(`furn_${l}`)}</button>`,a=(l,d)=>g`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>this.kitFitting(n,l)}>+ ${this.t(d)}</button>`;return g`<aside class="fp3d-wv-kit">
      ${i?g`<h4>${this.t("wall_kit_pool")}</h4>
            ${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)} ${a("valve","wall_run_valve")} ${a("sight","wall_run_sight")}
            ${["hole_wall","hole_floor","tee","y"].map(l=>g`<button class="fp3d-btn ${this._runMode===l?"fp3d-primary":""}" title=${this.t("wall_run_place")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===l?null:l}}>+ ${this.t(`wall_kit_${l}`)}</button>`)}`:$}
      ${o?g`<h4>${this.t("wall_kit_energy")}</h4>${["meter","inverter","home_battery","wallbox"].map(s)}`:$}
    </aside>`}get runPool(){var t;return this.poolArea??((t=this.floor)==null?void 0:t.outdoor.find(e=>e.type==="pool"&&e.points.length>=3))}get canLayRuns(){return(fs()||this._techMode)&&!!this.runPool}runFrame(t){var o;let[e,n]=t.split("|"),i=(o=this.floor)==null?void 0:o.rooms.find(s=>s.id===e);return i&&Number(n)<i.points.length?He(i,Number(n)):null}docWithDraft(){let t=this._runDraft;if(!t||!this._wallView)return this._doc;let e=[...t.from||!t.anchor?[]:[t.anchor],...t.pts];if(!e.length)return this._doc;let n=structuredClone(this._doc),i=n.floors.find(a=>a.outdoor.some(l=>l.id===t.pool)),o=i==null?void 0:i.outdoor.find(a=>a.id===t.pool);if(!i||!o)return this._doc;o.pool??={};let s={id:"__draft",from:t.from,to:"",floor_id:i.id,points:e.map(a=>[a[0],a[2]]),heights:e.map(a=>a[1])};return o.pool.pipes=[...o.pool.pipes??[],s],n}runLast(t,e){var o,s;if(t.pts.length)return t.pts[t.pts.length-1];if(t.fromT)return t.fromT;let n=ft(this._doc,e.floor,e.pool);if(t.extend){let a=(s=(o=e.pool.pool)==null?void 0:o.pipes)==null?void 0:s.find(d=>d.id===t.extend.pipe),l=a?Zt(a,n):[];return(t.extend.end==="to"?l[l.length-1]:l[0])??null}let i=n(t.from);return i?[i.x,i.y,i.z]:null}runPick(t,e,n,i=!1){var l;if(!i){for(let d of t.runs)for(let c of d.ends)if(Math.hypot(c.s-e,c.y-n)<.12)return{end:{pipe:d.id,end:c.end}}}let o=ft(this._doc,t.floor,t.pool),s=null,a=[...t.floor.furniture.filter(d=>Pt.includes(d.type)).flatMap(d=>De(d.type).length?De(d.type).map(c=>`dev:${d.id}:${c}`):[`dev:${d.id}`]),...(((l=t.pool.pool)==null?void 0:l.joints)??[]).map(d=>d.kind==="wall"||d.kind==="floor"?`joint:${d.id}:inside`:`joint:${d.id}`)];for(let d of i?[]:a){let c=o(d);if(!c)continue;let u=bt(t.frame,[c.x,c.z]);if(u.d<-.3||u.d>1.6)continue;let p=Math.hypot(u.s-e,c.y-n);p<.12&&(!s||p<s.d)&&(s={node:d,d:p})}if(s)return{node:s.node};if(this._techMode&&!i){let d=t.floor.furniture.find(c=>{if(!Pt.includes(c.type)||c.type==="pool_valve")return!1;let u=Wt(c).map(h=>bt(t.frame,h));if(Math.min(...u.map(h=>h.d))>1.6||Math.max(...u.map(h=>h.d))<-.3)return!1;let p=Tt(t.floor,c);return Math.min(...u.map(h=>h.s))-.03<=e&&e<=Math.max(...u.map(h=>h.s))+.03&&p-.03<=n&&n<=p+c.h+.03});if(d)return{node:`dev:${d.id}`}}for(let d of t.runs)for(let c of d.pieces){let[u,p]=[c.s1-c.s0,c.y1-c.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((e-c.s0)*u+(n-c.y0)*p)/h)):0,[m,_]=[c.s0+u*f,c.y0+p*f];if(Math.hypot(m-e,_-n)<(i?.24:.07))return{pipe:{id:d.id,p:oe(t.frame,m,_,c.d0+(c.d1-c.d0)*f)}}}return{}}eraseAt(t,e,n){var l;let i=(d,c,u)=>Math.hypot(d-e,c-n)<u;for(let d of t.runs)for(let c of d.fittings)if(i(c.s,c.y,.1*Math.max(1,this.wvScale))){this.changePool(t.pool.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===d.id);p&&(p.fittings=(p.fittings??[]).filter(f=>f.id!==c.id))});return}let o=ft(this._doc,t.floor,t.pool),s=(((l=t.pool.pool)==null?void 0:l.joints)??[]).find(d=>{let c=d.kind==="wall"||d.kind==="floor"?`joint:${d.id}:inside`:`joint:${d.id}`,u=o(c);if(!u)return!1;let p=bt(t.frame,[u.x,u.z]);return p.d>-.3&&p.d<1.6&&i(p.s,u.y,.1)});if(s){let d=`joint:${s.id}`;this.changePool(t.pool.id,c=>{c.joints=(c.joints??[]).filter(u=>u.id!==s.id),c.pipes=(c.pipes??[]).filter(u=>se(u.from)!==d&&se(u.to)!==d)}),this._runSel=null;return}let a=this.runPick(t,e,n,!0);if(a.pipe){let d=a.pipe.id;this.changePool(t.pool.id,c=>c.pipes=(c.pipes??[]).filter(u=>u.id!==d)),this._runSel=null}}runDown(t,e){if(!this._runMode||!this.isAdmin||(t.stopPropagation(),this._techAsk=null,this._techMode&&this._runMode==="draw"))return;let{s:n,y:i}=e.pt(t);this.runAt(e,n,i,t.altKey,t.detail,null)}runDown3d(t){var v,y;let e=this.runCtx3d;if(!this._runMode||!e||t.button!==0||!this.isAdmin||!this._wallView3d)return;let n=(v=this.wall3dEl)==null?void 0:v.viewer;if(!n)return;t.stopPropagation(),t.preventDefault();let i=n.renderer.domElement.getBoundingClientRect(),[o,s]=[t.clientX-i.left,t.clientY-i.top],a=n.furnitureIdAt(o,s),l=a?e.floor.furniture.find(x=>x.id===a&&Pt.includes(x.type)):void 0,d=n.pointerRay(o,s),c=ie(e.frame,0,e.gap),u=e.frame.n,p=d.d[0]*u[0]+d.d[2]*u[1];if(Math.abs(p)<1e-6)return;let h=((c[0]-d.o[0])*u[0]+(c[1]-d.o[2])*u[1])/p;if(h<=0&&!l)return;let f=[d.o[0]+d.d[0]*h,d.o[1]+d.d[1]*h,d.o[2]+d.d[2]*h],m=e.floor.elevation+(((y=n.floorMap.get(e.floor.id))==null?void 0:y.y)??0),_=ft(this._doc,e.floor,e.pool),b=()=>{let x=De(l.type);if(!x.length)return`dev:${l.id}`;let P=A=>{let F=_(A),T=[F.x-d.o[0],F.y+m-d.o[1],F.z-d.o[2]],S=T[0]*d.d[0]+T[1]*d.d[1]+T[2]*d.d[2];return Math.hypot(T[0]-d.d[0]*S,T[1]-d.d[1]*S,T[2]-d.d[2]*S)};return x.map(A=>`dev:${l.id}:${A}`).sort((A,F)=>P(A)-P(F))[0]};this.runAt(e,bt(e.frame,[f[0],f[2]]).s,f[1]-m,t.altKey,t.detail,l&&this._runMode==="draw"?b():null)}runAt(t,e,n,i,o,s){let a=this._runMode;if(!a)return;if(a==="tee"&&this._techMode){let c=this.runPick(t,e,n,!0);c.pipe&&this.teeOnPipe(t,c.pipe.id,c.pipe.p);return}if(a==="hole_wall"||a==="hole_floor"||a==="tee"||a==="y")return this.placeJoint(t,a,e,n);if(a==="feed")return this.placeFeed(t,e,n);if(a==="erase")return this.eraseAt(t,e,n);let l=s?{node:s}:this.runPick(t,e,n,a!=="draw");if(a!=="draw"){if(!l.pipe&&this._techMode)return;l.pipe&&this.addFitting(t,l.pipe.id,l.pipe.p,a),this._runMode=this._techMode?"draw":null,this._techMode&&(this._runSel=null);return}let d=this._runDraft;if(d&&this._techMode&&!this.techStroke&&((d.pts.length>=2||(d.extend||d.fromT||d.from)&&d.pts.length)&&this.finishRun("",null),this._runDraft=null,d=null),!d){let c={pool:t.pool.id,from:"",fromT:null,extend:null,pts:[],anchor:null,wall:t.key,d:t.gap},u;l.end?u={...c,extend:l.end}:l.node?u={...c,from:l.node}:l.pipe?u={...c,fromT:l.pipe.p}:u={...c,pts:[oe(t.frame,Math.round(e*20)/20,Math.round(n*20)/20,t.gap)]},this._runDraft={...u,anchor:this.runLast({...u,pts:[]},t)};return}if(o>=2)return void this.finishRun("",null);if(l.node&&l.node!==d.from)return void this.finishRun(l.node,null);if(l.pipe)return void this.finishRun("",l.pipe.p);this._runDraft={...d,pts:[...d.pts,...this.runStep(d,t,e,n,i)],wall:t.key,d:t.gap}}runStep(t,e,n,i,o){let s=Math.round(n*20)/20,a=Math.round(i*20)/20,l=[],d=this.runLast(t,e);if(d&&t.wall!==e.key){let c=this.runFrame(t.wall),u=c&&Ll(c,t.d,e.frame,e.gap);u&&(d=[z(u[0]),d[1],z(u[1])],l.push(d))}if(d&&!o){let c=bt(e.frame,[d[0],d[2]]);c.d>-.35&&c.d<.6&&(Math.abs(s-c.s)<Math.abs(a-d[1])?s=c.s:a=d[1])}return l.push(oe(e.frame,s,a,e.gap)),l.map(c=>[z(c[0]),z(c[1]),z(c[2])])}finishRun(t,e,n=[],i){var p;let o=this._runDraft,s=this.floor,a=this.pipeRules;if(this._runDraft=null,!o||!s||!a)return null;let l=[...o.pts,...n],d=this._techMode?this.runFrame(o.wall):null,c=this._techMode?(p=this.floor)==null?void 0:p.outdoor.find(h=>h.id===o.pool):void 0;if(d&&c&&!n.length&&(t||e)){let h=l.length?l[l.length-1]:(()=>{let m=o.from?ft(this._doc,s,c)(o.from):null;return m?[m.x,m.y,m.z]:o.fromT})(),f=e?{x:e[0],y:e[1],z:e[2]}:ft(this._doc,s,c)(t);if(h&&f){let m=bt(d,[h[0],h[2]]),_=bt(d,[f.x,f.z]);Math.abs(m.s-_.s)>.03&&Math.abs(h[1]-f.y)>.03&&l.push(oe(d,_.s,h[1],o.d))}}if(!l.length&&!e&&(!t||t===o.from)&&!o.fromT)return null;let u=null;return this.changePool(o.pool,(h,f)=>{let m=h.joints??=[],_=h.pipes??=[],b=ft(this._doc,s,f),v=O=>{let D=O.startsWith("joint:")?m.find(j=>`joint:${j.id}`===O):void 0;return D?{x:D.x,z:D.z,y:D.y}:b(O)},y=O=>{let D=null;for(let U of _){let G=$n(Zt(U,v),O);G&&G.d<.12&&(!D||G.d<D.d)&&(D={pipe:U,d:G.d})}let j=D&&Wi(D.pipe,v,O,tt("joint"),tt("pipe"));return!D||!j?"":(m.push(j.joint),_.splice(_.indexOf(D.pipe),1,j.first,j.second),`joint:${j.joint.id}:out2`)},x=(O,D=[])=>{let{kind:j,id:U,port:G}=ut(O),Q=j==="joint"&&!G?m.find(q=>q.id===U):void 0;if(!Q||!Q.kind)return O;if(Q.kind==="wall"||Q.kind==="floor")return`joint:${U}:inside`;let J=new Set([..._.flatMap(q=>[q.from,q.to]),...D]),it=wn(Q.kind).find(q=>!J.has(`joint:${U}:${q}`));return it?`joint:${U}:${it}`:O},P=o.fromT?y(o.fromT):x(o.from),A=e?y(e):x(t,[P]),F=s.furniture.filter(O=>Pt.includes(O.type)).map(O=>({id:O.id,type:O.type})),T=O=>_.flatMap(D=>[D.from,D.to]).filter(D=>se(D)===O).map(D=>ut(D).port).filter(D=>!!D),S=O=>{var U,G,Q,J;let{kind:D,id:j}=ut(O);return D==="port"?((Q=(G=(U=f.pool)==null?void 0:U.ports)==null?void 0:G.find(it=>it.id===j))==null?void 0:Q.kind)==="waste":D==="joint"&&/kanal|waste|abwasser|backwash/i.test(((J=m.find(it=>it.id===j))==null?void 0:J.name)??"")},M=(O,D)=>{var it;let{kind:j,id:U,port:G}=ut(O);if(j!=="dev"||G)return O;let Q=((it=s.furniture.find(q=>q.id===U))==null?void 0:it.type)??"",J=a.autoPort(Q,D?a.nodeFlow(D,f,F):null,S(D),T(`dev:${U}`));return J?`dev:${U}:${J}`:O};P=M(P,A),A=M(A,P);let w=l.map(O=>[z(O[0]),z(O[2])]),k=l.map(O=>z(O[1])),E=o.extend,I=E&&_.find(O=>O.id===E.pipe);if(E&&I){Object.assign(I,Nt(I,v)),E.end==="to"?(I.points=[...I.points,...w],I.heights=[...I.heights??[],...k],I.to=A):(I.points=[...w.reverse(),...I.points],I.heights=[...k.reverse(),...I.heights??[]],I.from=A),i!==void 0&&(I.height=i),u=I.id;return}let C={id:tt("pipe"),from:P,to:A,floor_id:s.id,points:w,heights:k,height:i??k[k.length-1]??null};C=a.orientPipe(C,P?a.nodeFlow(P,f,F):null,A?a.nodeFlow(A,f,F):null),_.push(C),u=C.id}),u&&!this._techMode&&(this._runSel={pipe:u,pt:null}),this._runMode=this._techMode?"draw":null,u}teeOnPipe(t,e,n){let i=ft(this._doc,t.floor,t.pool);this.changePool(t.pool.id,o=>{let s=[...o.pipes??[]],a=s.findIndex(d=>d.id===e);if(a<0)return;let l=Wi(s[a],i,n,tt("joint"),tt("pipe"));l&&(o.joints=[...o.joints??[],l.joint],s.splice(a,1,l.first,l.second),o.pipes=s)}),this._runMode="draw"}placeFeed(t,e,n){let i=this._feedKind;this._feedKind=null,this._runMode="draw",i&&this.feedAt(t,i,e,n)}feedAt(t,e,n,i){let o=this.floor;if(!o)return null;let s=Math.round(n*20)/20,a=i<.25,l=t.gap-ir,d=pe(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,c=this.t(`feed_${e}`),[u,p]=pn(t.frame,s,a?t.gap:l),h=a?{id:tt("joint"),kind:"floor",x:u,z:p,y:0,name:c}:{id:tt("joint"),kind:"wall",x:u,z:p,y:Math.round(i*20)/20,nx:z(t.frame.n[0]),nz:z(t.frame.n[1]),depth:z(d),name:c};return this.changePool(t.pool.id,(f,m)=>{f.joints=[...f.joints??[],h];let _=(f.ports??[]).filter(P=>P.kind===e);if(e==="waste"&&!_.length){let P=Ve(h,"outside"),A={id:tt("port"),kind:"waste",x:z(P.x-t.frame.n[0]*1),z:z(P.z-t.frame.n[1]*1)};f.ports=[...f.ports??[],A],_=[A]}if(!_.length)return;let b=ft(this._doc,o,m),v=P=>{let{kind:A,id:F,port:T}=ut(P),S=A==="joint"?(f.joints??[]).find(w=>w.id===F):void 0;if(S)return Ve(S,T);let M=A==="port"?(f.ports??[]).find(w=>w.id===F):void 0;return M?b(P)??{x:M.x,y:.02,z:M.z}:b(P)},y=P=>{let{kind:A,id:F}=ut(P);if(A==="port"){let T=(f.ports??[]).find(S=>S.id===F);return T?hs(T.kind):null}return null},x=xn({from:`joint:${h.id}:outside`,vias:[],to:_.map(P=>`port:${P.id}`),floorId:o.id},v,f.joints??[],y,P=>tt(P));f.joints=[...f.joints??[],...x.joints],f.pipes=[...f.pipes??[],...x.pipes]}),h}endStroke(t,e,n){let i=this._runDraft;if(!i)return;let o=this.runLast(i,t),s=o?bt(t.frame,[o[0],o[2]]):null,a=s&&s.d>-.35&&s.d<.6?{s:s.s,y:o[1]}:e[0],l=sh([a,...lr(e,.08),n]),d=l.slice(1,-1).map(f=>{let m=oe(t.frame,f.s,f.y,t.gap);return[z(m[0]),z(m[1]),z(m[2])]}),c=this.runPick(t,n.s,n.y);if(this._techAsk=null,c.node&&c.node!==i.from){this.finishRun(c.node,null,d);return}if(c.pipe){this.finishRun("",c.pipe.p,d);return}let u=l[l.length-1],p=oe(t.frame,Math.round(u.s*20)/20,Math.round(u.y*20)/20,t.gap),h=this.finishRun("",null,[...d,[z(p[0]),z(p[1]),z(p[2])]]);h&&(this._techAsk={s:u.s,y:u.y,pipe:h})}answerAsk(t,e){let n=this._techAsk;if(this._techAsk=null,!n)return;if(e==="cancel"){this.changePool(t.pool.id,o=>o.pipes=(o.pipes??[]).filter(s=>s.id!==n.pipe));return}if(!e)return;let i=this.feedAt(t,e,n.s,n.y);i&&this.changePool(t.pool.id,o=>{var a;let s=(a=o.pipes)==null?void 0:a.find(l=>l.id===n.pipe);s&&(s.to?s.from||(s.from=`joint:${i.id}:inside`):s.to=`joint:${i.id}:inside`)})}renderTechKit(t,e,n){var c;let i=n.pool,o=this.pipeRules;if(!o)return $;let s=u=>g`<button class="fp3d-wv-tile" @click=${()=>this.addOnWall(u,t,e)}>
      <span class="fp3d-wv-tile-pic">${this.kitPics.get(u)?g`<img src=${this.kitPics.get(u)} alt="" />`:g`<i></i>`}</span>
      <span class="fp3d-wv-tile-name">${this.t(`furn_${u}`)}</span>
    </button>`;this.askKitPics(["pool_pump","pool_filter","pool_heat_pump","pool_dosing"]);let a=["skimmer","drain","inlet","waste"].filter(u=>{var p;return u==="waste"||(((p=i.pool)==null?void 0:p.ports)??[]).some(h=>h.kind===u)}),l=(u,p)=>g`<button class="fp3d-btn ${this._runMode===u?"fp3d-primary":""}" title=${this.t("wall_run_fit")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode===u?"draw":u}}>+ ${this.t(p)}</button>`,d=this._techAsk;return g`<aside class="fp3d-wv-kit fp3d-tech-kit">
      ${d?g`<div class="fp3d-tech-ask">
            <b>${this.t("tech_ask")}</b>
            ${["skimmer","drain","inlet","waste"].map(u=>g`<button class="fp3d-btn fp3d-tech-feed" @click=${()=>this.answerAsk(n,u)}><i>${u==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${u}`)}</button>`)}
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
      ${a.map(u=>{let p=o.feedDone(i,u);return g`<button class="fp3d-btn fp3d-tech-feed ${this._feedKind===u?"fp3d-primary":""} ${p?"fp3d-on":""}" ?disabled=${p} @click=${()=>{this._runDraft=null,this._feedKind=this._feedKind===u?null:u,this._runMode=this._feedKind?"feed":"draw"}}><i>${u==="waste"?"\u{1F7E4}":"\u3030"}</i>${this.t(`feed_${u}`)}${p?g`<small>✓</small>`:$}</button>`})}
      ${(((c=i.pool)==null?void 0:c.ports)??[]).some(u=>u.kind!=="waste")?$:g`<p class="fp3d-sub">${this.t("tech_no_ports")}</p>`}
      <h4>${this.t("tech_devices")}</h4>
      <div class="fp3d-wv-tiles">${["pool_pump","pool_filter","pool_heat_pump","pool_dosing"].map(s)}</div>
      <h4>${this.t("tech_fittings")}</h4>
      ${l("valve","wall_run_valve")} ${l("sight","wall_run_sight")}
      <button class="fp3d-btn ${this._runMode==="tee"?"fp3d-primary":""}" title=${this.t("tech_step_tee")} @click=${()=>{this._runDraft=null,this._runMode=this._runMode==="tee"?"draw":"tee"}}>+ ${this.t("joint_add_tee")}</button>
      <p class="fp3d-sub">${this.t("tech_hint")}</p>
    </aside>`}renderTechStep(t){var h;let e=t.pool,n=this.pipeRules;if(!n)return $;let i=((h=e.pool)==null?void 0:h.ports)??[],o=t.floor.furniture.filter(f=>Pt.includes(f.type)),s=(f,m)=>g`<div class="fp3d-tech-step ${f===null?"fp3d-done":""}"><b>${f===null?"\u2713":this.t("tech_step",{n:f})}</b>${m}</div>`;if(this._runMode==="feed")return s(1,this.t("tech_feed_place"));if(this._runMode==="erase")return g`<div class="fp3d-tech-step fp3d-tech-erasing"><b>🧽 ${this.t("tech_erase")}</b>${this.t("tech_erase_hint")}</div>`;if(this._runMode==="valve"||this._runMode==="sight")return s(4,this.t("tech_step_fit"));if(this._runMode==="tee")return s(4,this.t("tech_step_tee"));if(this._runDraft)return s(3,this.t("tech_step_drawing"));if(!i.some(f=>f.kind!=="waste"))return s(1,this.t("tech_no_ports"));let a=["skimmer","drain","inlet"].find(f=>i.some(m=>m.kind===f)&&!n.feedDone(e,f));if(a)return s(1,this.t("tech_step_feed",{name:this.t(`feed_${a}`)}));let l=o.find(f=>f.type==="pool_pump"),d=o.find(f=>f.type==="pool_filter");if(!l||!d)return s(2,this.t("tech_step_devices"));let c=n.issues(e,o.map(f=>({id:f.id,type:f.type}))),u=f=>this.poolNodeLabel(e,f),p=c.find(f=>f.kind==="port");if(p){let{port:f}=ut(p.node),m={suction:this.t("feed_skimmer"),pressure:u(`dev:${d.id}:pump`),pump:u(`dev:${l.id}:pressure`),return:o.some(_=>_.type==="pool_heat_pump")?this.t("furn_pool_heat_pump"):this.t("feed_inlet"),waste:this.t("feed_waste"),in:u(`dev:${d.id}:return`),out:this.t("feed_inlet")};return s(3,this.t("tech_step_line",{a:f?m[f]??"\u2026":"\u2026",b:u(p.node)}))}return c.some(f=>f.kind==="loose")?s(3,this.t("tech_step_loose")):s(null,this.t("tech_ok"))}renderTechIssues(t){let e=t.floor.furniture.filter(a=>Pt.includes(a.type)).map(a=>({id:a.id,type:a.type})),n=this.pipeRules;if(!n)return $;let i=n.issues(t.pool,e);if(!i.length)return g`<span class="fp3d-tech-ok">✓ ${this.t("tech_ok")}</span>`;let o=i.filter(a=>a.kind==="loose").length,s=[...o?[this.t("tech_issue_loose",{n:o})]:[],...i.filter(a=>a.kind==="port").map(a=>this.t("tech_issue_port",{name:this.poolNodeLabel(t.pool,a.node)})),...i.filter(a=>a.kind==="feed").map(a=>this.t("tech_issue_feed",{name:this.t(`feed_${a.node}`)}))];return g`<span class="fp3d-tech-issues">⚠ ${s.slice(0,4).join(" \xB7 ")}${s.length>4?" \u2026":""}</span>`}placeJoint(t,e,n,i){let o=t.gap-ir,s=Math.round(n*100)/100,a=Math.round(i*100)/100,l=pe(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,d;if(e==="hole_wall"){let[c,u]=pn(t.frame,s,o);d={id:tt("joint"),kind:"wall",x:c,z:u,y:Math.max(.05,a),nx:z(t.frame.n[0]),nz:z(t.frame.n[1]),depth:z(l)}}else if(e==="hole_floor"){let[c,u]=pn(t.frame,s,t.gap);d={id:tt("joint"),kind:"floor",x:c,z:u,y:0}}else{let[c,u]=pn(t.frame,s,t.gap);d={id:tt("joint"),kind:e,x:c,z:u,y:a}}this.changePool(t.pool.id,c=>c.joints=[...c.joints??[],d]),this._runMode=null}runOut(t,e){let n=this._runDraft,i=n&&this.runLast(n,t);if(!n||!i)return;if(e==="down")return void this.finishRun("",null,[[i[0],-.3,i[2]]],-.3);let o=bt(t.frame,[i[0],i[2]]),s=pe(t.floor,t.room.id,t.frame.a,t.frame.b)?this._doc.settings.wall_interior:this._doc.settings.wall_exterior,a=oe(t.frame,o.s,i[1],-(s+.15));this.finishRun("",null,[[z(a[0]),i[1],z(a[2])]],i[1])}addFitting(t,e,n,i){let o=ft(this._doc,t.floor,t.pool);this.changePool(t.pool.id,s=>{var d;let a=(d=s.pipes)==null?void 0:d.find(c=>c.id===e),l=a&&$n(Zt(a,o),n);!a||!l||(a.fittings=[...a.fittings??[],{id:tt("fit"),kind:i,at:z(l.at),...i==="valve"?{open:!0}:{}}])}),this._runSel={pipe:e,pt:null}}runPieceDown(t,e,n,i){var h,f;if(this._runMode)return;if(t.stopPropagation(),this._wallSel=null,((h=this._runSel)==null?void 0:h.pipe)!==n.id||!this.isAdmin){this._runSel={pipe:n.id,pt:null};return}let{s:o,y:s}=e.pt(t),a=n.pieces.find(m=>m.k===i),l=Math.hypot(a.s1-a.s0,a.y1-a.y0)>0?Math.hypot(o-a.s0,s-a.y0)/Math.hypot(a.s1-a.s0,a.y1-a.y0):0,d=a.d0+(a.d1-a.d0)*Math.min(1,l),c=this._doc,u=ft(c,e.floor,e.pool),p=-1;this.changePool(e.pool.id,m=>{var b;let _=(b=m.pipes)==null?void 0:b.find(v=>v.id===n.id);_&&(Object.assign(_,Nt(_,u)),p=Math.max(0,Math.min(_.points.length,i+1-Un(_,u))),_.points.splice(p,0,pn(e.frame,o,d)),_.heights.splice(p,0,z(s)))}),!(p<0)&&(this._runSel={pipe:n.id,pt:p},this.runDrag={pipe:n.id,i:p,d,base:c,moved:!0},(f=t.currentTarget.closest("svg"))==null||f.setPointerCapture(t.pointerId))}runPointDown(t,e,n,i){var d,c,u;if(this._runMode||!this.isAdmin)return;t.stopPropagation();let o=ft(this._doc,e.floor,e.pool);if(this.doubleTap(t,`runpt:${n}:${i}`)){this.changePool(e.pool.id,p=>{var f;let h=(f=p.pipes)==null?void 0:f.find(m=>m.id===n);h&&(Object.assign(h,Nt(h,o)),h.points.splice(i,1),h.heights.splice(i,1))}),this._runSel={pipe:n,pt:null};return}let s=(c=(d=e.pool.pool)==null?void 0:d.pipes)==null?void 0:c.find(p=>p.id===n),a=s&&Nt(s,o),l=a==null?void 0:a.points[i];l&&(this._runSel={pipe:n,pt:i},this.runDrag={pipe:n,i,d:bt(e.frame,l).d,base:this._doc,moved:!1},(u=t.currentTarget.closest("svg"))==null||u.setPointerCapture(t.pointerId))}runPointMove(t,e){var c,u;let n=this.runDrag;if(!n)return;let{s:i,y:o}=e.pt(t);i=Math.round(i*100)/100,o=Math.round(o*100)/100;let s=ft(n.base,e.floor,e.pool),a=n.base.floors.flatMap(p=>p.outdoor).find(p=>p.id===e.pool.id),l=(u=(c=a==null?void 0:a.pool)==null?void 0:c.pipes)==null?void 0:u.find(p=>p.id===n.pipe);if(!l)return;let d=Nt(l,s);if(!t.altKey){let p=Zt(d,s),h=Un(d,s);for(let f of[p[n.i+h-1],p[n.i+h+1]]){if(!f)continue;let m=bt(e.frame,[f[0],f[2]]);Math.abs(m.s-i)<.04&&(i=z(m.s)),Math.abs(f[1]-o)<.04&&(o=z(f[1]))}}n.moved=!0,this.change((p,h)=>{var m,_,b;let f=(b=(_=(m=h.outdoor.find(v=>v.id===e.pool.id))==null?void 0:m.pool)==null?void 0:_.pipes)==null?void 0:b.find(v=>v.id===n.pipe);f&&(Object.assign(f,Nt(f,s)),f.points[n.i]=pn(e.frame,i,n.d),f.heights[n.i]=o)},n.base,!1)}runPointUp(){let t=this.runDrag;this.runDrag=null,t!=null&&t.moved&&this.pushHistory(t.base)}fittingDown(t,e,n,i){var o;if(!(this._runMode||!this.isAdmin)){if(t.stopPropagation(),this._runSel={pipe:n,pt:null},this.doubleTap(t,`fitting:${i}`)){this.changePool(e.pool.id,s=>{var l;let a=(l=s.pipes)==null?void 0:l.find(d=>d.id===n);a!=null&&a.fittings&&(a.fittings=a.fittings.filter(d=>d.id!==i))});return}this.fitDrag={pipe:n,id:i,base:this._doc,moved:!1,x:t.clientX,y:t.clientY},(o=t.currentTarget.closest("svg"))==null||o.setPointerCapture(t.pointerId)}}jointDown(t,e,n){var i;this._runMode||!this.isAdmin||(t.stopPropagation(),this.jointDrag={id:e,d:n,base:this._doc,moved:!1},(i=t.currentTarget.closest("svg"))==null||i.setPointerCapture(t.pointerId))}jointMove(t,e){let n=this.jointDrag;if(!n)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=t.altKey?i:Math.round(i*100)/100,a=t.altKey?o:Math.round(o*100)/100;this.change((l,d)=>{var u,p,h;let c=(h=(p=(u=d.outdoor.find(f=>f.id===e.pool.id))==null?void 0:u.pool)==null?void 0:p.joints)==null?void 0:h.find(f=>f.id===n.id);c&&([c.x,c.z]=pn(e.frame,s,n.d),c.kind!=="floor"&&(c.y=Math.max(c.kind==="wall"?.05:-1,z(a))))},n.base,!1)}fittingMove(t,e){let n=this.fitDrag;if(!n||!n.moved&&Math.hypot(t.clientX-n.x,t.clientY-n.y)<4)return;n.moved=!0;let{s:i,y:o}=e.pt(t),s=e.runs.find(c=>c.id===n.pipe);if(!s)return;let a=null;for(let c of s.pieces){let[u,p]=[c.s1-c.s0,c.y1-c.y0],h=u*u+p*p,f=h>0?Math.max(0,Math.min(1,((i-c.s0)*u+(o-c.y0)*p)/h)):0,[m,_]=[c.s0+u*f,c.y0+p*f],b=Math.hypot(m-i,_-o);(!a||b<a.d)&&(a={p:oe(e.frame,m,_,c.d0+(c.d1-c.d0)*f),d:b})}if(!a)return;let l=ft(n.base,e.floor,e.pool),d=a.p;this.change((c,u)=>{var m,_,b,v;let p=(b=(_=(m=u.outdoor.find(y=>y.id===e.pool.id))==null?void 0:m.pool)==null?void 0:_.pipes)==null?void 0:b.find(y=>y.id===n.pipe),h=(v=p==null?void 0:p.fittings)==null?void 0:v.find(y=>y.id===n.id),f=p&&$n(Zt(p,l),d);h&&f&&(h.at=z(f.at))},n.base,!1)}fittingUp(t){let e=this.fitDrag;if(this.fitDrag=null,!!e){if(e.moved)return this.pushHistory(e.base);t&&this.changePool(t.pool.id,n=>{var o,s,a;let i=(a=(s=(o=n.pipes)==null?void 0:o.find(l=>l.id===e.pipe))==null?void 0:s.fittings)==null?void 0:a.find(l=>l.id===e.id);(i==null?void 0:i.kind)==="valve"&&(i.open=i.open===!1)})}}kitFitting(t,e){this._runDraft=null;let n=t&&this._runSel?t.runs.find(o=>o.id===this._runSel.pipe):void 0;if(!t||!n||!n.pieces.length){this._runMode=this._runMode===e?null:e;return}let i=[...n.pieces].sort((o,s)=>Math.hypot(s.s1-s.s0,s.y1-s.y0)-Math.hypot(o.s1-o.s0,o.y1-o.y0))[0];this.addFitting(t,n.id,oe(t.frame,(i.s0+i.s1)/2,(i.y0+i.y1)/2,(i.d0+i.d1)/2),e),this._runMode=null}renderRuns(t,e,n){var v,y,x,P;let i=(v=this._runSel)==null?void 0:v.pipe,o=A=>{let F=bt(t.frame,[A[0],A[2]]);return`${e(F.s)},${n(A[1])}`},s=this._runDraft,a=s&&this.runLast(s,t),l=s?[...s.fromT||s.extend||s.from?[this.runLast({...s,pts:[]},t)]:[],...s.pts].filter(A=>!!A):[],d=this.runHover,c=ft(this._doc,t.floor,t.pool),u={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:"K"},p=[],h=(A,F,T="",S)=>{let M=c(A),w=M&&bt(t.frame,[M.x,M.z]);if(!(M&&w&&w.d>-.6&&w.d<1.6&&w.s>-.2&&w.s<t.L+.2))return[];let k=p.filter(I=>Math.hypot(I.s-w.s,I.y-M.y)<.3*this.wvScale).length;p.push({s:w.s,y:M.y});let E=k&&this.wvScale>.5?"":F;return[H`<g class="fp3d-wv-node ${T} ${S?"fp3d-wv-joint":""}" transform="translate(${e(w.s)} ${n(M.y)}) scale(${this.wvScale})" @pointerdown=${I=>S&&this.jointDown(I,S,w.d)}>
            <circle r="0.05" /><text y=${.11+k*.07}>${E}</text><title>${this.poolNodeLabel(t.pool,A)}</title>
          </g>`]},f=[...t.floor.furniture.flatMap(A=>{if(u[A.type]===void 0)return[];let F=De(A.type);return F.length?F.flatMap(T=>h(`dev:${A.id}:${T}`,this.t(`port_${T}`))):h(`dev:${A.id}`,u[A.type])}),...(((y=t.pool.pool)==null?void 0:y.joints)??[]).flatMap(A=>A.kind==="wall"||A.kind==="floor"?h(`joint:${A.id}:inside`,this.jointLabel(t.pool,A.id),"fp3d-wv-hole-mark",A.id):h(`joint:${A.id}`,this.jointLabel(t.pool,A.id),"",A.id))],m=this.pipeRules,_=this._techMode&&m?m.flow({pipes:((x=t.pool.pool)==null?void 0:x.pipes)??[],ports:((P=t.pool.pool)==null?void 0:P.ports)??[],devices:this._doc.floors.flatMap(A=>A.furniture).filter(A=>Pt.includes(A.type)).map(A=>({id:A.id,type:A.type,open:A.valve_open!==!1,valve:A.valve_position??null})),pumpOn:!0,heaterOn:!1,heating:!1}):null,b=A=>{let F=_==null?void 0:_.get(A);if(!(F!=null&&F.active)||!m)return"";let[T,S,M]=m.waterColor(F).map(w=>Math.round(w*255));return`stroke: rgb(${T}, ${S}, ${M}); stroke-opacity: 0.95`};return H`<g class="fp3d-wv-runs">
      ${f}
      ${t.runs.map(A=>{var F;return H`<g class="fp3d-wv-run ${A.id===i?"fp3d-wv-run-sel":""} ${_&&!((F=_.get(A.id))!=null&&F.active)?"fp3d-wv-dry":""}">
          ${A.pieces.map(T=>H`<line class=${T.y0<-.01&&T.y1<-.01?"fp3d-wv-under":""} style=${b(A.id)} x1=${e(T.s0)} y1=${n(T.y0)} x2=${e(T.s1)} y2=${n(T.y1)} @pointerdown=${S=>this.runPieceDown(S,t,A,T.k)} />`)}
          ${A.ends.map(T=>H`<circle class="fp3d-wv-end" cx=${e(T.s)} cy=${n(T.y)} r="0.035" />`)}
          ${A.fittings.map(T=>T.kind==="valve"?H`<g class="fp3d-wv-valve ${T.open?"":"fp3d-wv-shut"}" transform="translate(${e(T.s)} ${n(T.y)}) scale(${this.wvScale})" @pointerdown=${S=>this.fittingDown(S,t,A.id,T.id)}>
                  <circle r="0.05" /><line x1="0" y1="0" x2=${T.open?.11:0} y2=${T.open?0:-.11} />
                </g>`:H`<rect class="fp3d-wv-sight" x=${e(T.s)-.06} y=${n(T.y)-.035} width="0.12" height="0.07" rx="0.02" @pointerdown=${S=>this.fittingDown(S,t,A.id,T.id)} />`)}
          ${A.id===i?A.points.map(T=>{var S;return H`<circle class="fp3d-wv-runpt ${((S=this._runSel)==null?void 0:S.pt)===T.i?"fp3d-on":""}" cx=${e(T.s)} cy=${n(T.y)} r="0.04" @pointerdown=${M=>this.runPointDown(M,t,A.id,T.i)} />`}):$}
        </g>`})}
      ${l.length?H`<polyline class="fp3d-wv-draft" points=${l.map(o).join(" ")} />`:$}
      ${this.techStroke&&this.techStroke.length>1?H`<polyline class="fp3d-wv-draft fp3d-wv-stroke" points=${this.techStroke.map(A=>`${e(A.s)},${n(A.y)}`).join(" ")} />`:$}
      ${a&&d?H`<line class="fp3d-wv-draft fp3d-wv-rubber" x1=${o(a).split(",")[0]} y1=${o(a).split(",")[1]} x2=${e(d[0])} y2=${n(d[1])} />`:$}
    </g>`}renderRunFoot(t){var u,p,h;let e=this._runMode,n=this._runDraft;if(e==="hole_wall"||e==="hole_floor"||e==="tee"||e==="y")return g`<span class="fp3d-muted">${this.t("wall_run_place")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="valve"||e==="sight")return g`<span class="fp3d-muted">${this.t("wall_run_fit")}</span>
        <button class="fp3d-btn" @click=${()=>this._runMode=null}>${this.t("cancel")}</button>`;if(e==="draw")return g`<span class="fp3d-muted">${this.t(n?"wall_run_next":"wall_run_start")}</span>
        ${n?g`<button class="fp3d-btn" @click=${()=>this.runOut(t,"down")}>${this.t("wall_run_down")}</button>
              <button class="fp3d-btn" @click=${()=>this.runOut(t,"through")}>${this.t("wall_run_through")}</button>
              <button class="fp3d-btn fp3d-primary" @click=${()=>this.finishRun("",null)}>${this.t("wall_run_done")}</button>`:$}
        <button class="fp3d-btn" @click=${()=>{this._runDraft=null,this._runMode=null}}>${this.t("cancel")}</button>`;let i=this._runSel,o=i&&((p=(u=t.pool.pool)==null?void 0:u.pipes)==null?void 0:p.find(f=>f.id===i.pipe));if(!i||!o)return $;let s=ft(this._doc,t.floor,t.pool),a=Nt(o,s),l=i.pt,d=this.isAdmin,c=o.to?o.from?null:"from":"to";return g`<b>${this.t("wall_run_pipe")}</b>
      ${l!==null&&((h=a.heights)==null?void 0:h[l])!==void 0?this.len(this.t("wall_run_pt"),a.heights[l]??0,f=>this.changePool(t.pool.id,m=>{var b;let _=(b=m.pipes)==null?void 0:b.find(v=>v.id===o.id);_&&(Object.assign(_,Nt(_,s)),_.heights[l]=Math.min(10,Math.max(-5,z(f))))}),.01):$}
      ${d?g`<button class="fp3d-btn" @click=${()=>this.kitFitting(t,"valve")}>${this.t("wall_run_valve")}</button>
            <button class="fp3d-btn" @click=${()=>this.kitFitting(t,"sight")}>${this.t("wall_run_sight")}</button>
            ${c?g`<button class="fp3d-btn" @click=${()=>{this._runMode="draw";let f={pool:t.pool.id,from:"",fromT:null,extend:{pipe:o.id,end:c},pts:[],anchor:null,wall:t.key,d:t.gap};this._runDraft={...f,anchor:this.runLast(f,t)}}}>${this.t("wall_run_more")}</button>`:$}
            <button class="fp3d-btn" title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.pool.id,f=>{var _,b;let m=(_=f.pipes)==null?void 0:_.find(v=>v.id===o.id);m&&(Object.assign(m,Nt(m,s)),[m.from,m.to,m.points,m.heights]=[m.to,m.from,[...m.points].reverse(),[...m.heights??[]].reverse()],m.fittings=(b=m.fittings)==null?void 0:b.map(v=>({...v,at:z(Math.max(0,or(m,s)-v.at))})))})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>{this.changePool(t.pool.id,f=>f.pipes=(f.pipes??[]).filter(m=>m.id!==o.id)),this._runSel=null}}>${this.t("delete")}</button>`:$}
      <span class="fp3d-muted">${this.t("wall_run_tip")}</span>`}get poolArea(){var n;let t=this.outdoorArea;if((t==null?void 0:t.type)==="pool")return t;let e=((n=this.floor)==null?void 0:n.outdoor.filter(i=>i.type==="pool"))??[];return e.length===1?e[0]:void 0}poolDown(t,e,n,i){var u,p,h,f,m,_,b,v,y,x;let o=this.floor;if(!o)return!1;let s=this.poolArea,a=((u=e.closest("[data-pool-node]"))==null?void 0:u.getAttribute("data-pool-node"))??null;if(this._jointPlace&&s)return this.isAdmin&&this.placeJointPlan(s,this._jointPlace,n,((p=e.closest("[data-pipe]"))==null?void 0:p.getAttribute("data-pipe"))??null),this._jointPlace=null,!0;if(this._pipeMode){if(!this.isAdmin)return!0;if(!s){let A=o.outdoor.find(F=>F.type==="pool"&&F.points.length>=3&&Y(n,F.points));return A&&(this.selectItem("outdoor",A.id),this._tool="pool",this._pipeMode=!0),!0}let P=(h=e.closest("[data-pipe-end]"))==null?void 0:h.getAttribute("data-pipe-end");if(P&&!this._pipeDraft){let[A,F]=P.split("|"),T=(m=(f=s.pool)==null?void 0:f.pipes)==null?void 0:m.find(M=>M.id===A),S=T&&(F==="to"?T.points[T.points.length-1]:T.points[0]);S&&(this._pipeDraft={from:"",points:[],extend:{pipe:A,end:F,at:S}})}else if(a){let A=this._pipeDraft;A?A.extend?(this.extendPipe(s,A.extend,a,A.points),this._pipeDraft=null):a!==A.from&&(this.addPipe(s.id,A.from,a,A.points),this._pipeDraft=null):this._pipeDraft={from:a,points:[]}}else if(this._pipeDraft){let A=this.snap(n,void 0,t.altKey);this._pipeDraft={...this._pipeDraft,points:[...this._pipeDraft.points,[z(A[0]),z(A[1])]]}}return!0}let l=P=>[P.slice(0,P.lastIndexOf(":")),Number(P.slice(P.lastIndexOf(":")+1))];if(s&&this.isAdmin){let P=(_=e.closest("[data-pipe-pt]"))==null?void 0:_.getAttribute("data-pipe-pt");if(P){let[F,T]=l(P);return this.doubleTap(t,`pipept:${P}`)?this.change((S,M)=>{var k,E,I,C;let w=(I=(E=(k=M.outdoor.find(O=>O.id===s.id))==null?void 0:k.pool)==null?void 0:E.pipes)==null?void 0:I.find(O=>O.id===F);w==null||w.points.splice(T,1),(C=w==null?void 0:w.heights)==null||C.splice(T,1)}):this.drag={kind:"pipept",pool:s.id,pipe:F,index:T,base:this._doc,moved:!1},!0}let A=(b=e.closest("[data-pipe-seg]"))==null?void 0:b.getAttribute("data-pipe-seg");if(A){let[F,T]=l(A),S=this.snap(n,void 0,t.altKey);return this.change((M,w)=>{var E,I,C,O;let k=(C=(I=(E=w.outdoor.find(D=>D.id===s.id))==null?void 0:E.pool)==null?void 0:I.pipes)==null?void 0:C.find(D=>D.id===F);k==null||k.points.splice(T,0,[z(S[0]),z(S[1])]),(O=k==null?void 0:k.heights)==null||O.splice(T,0,k.heights[T-1]??k.heights[T]??null)}),this._pipeId=F,this.drag={kind:"pipept",pool:s.id,pipe:F,index:T,base:this._doc,moved:!1},!0}}let d=(v=e.closest("[data-pipe]"))==null?void 0:v.getAttribute("data-pipe");if(d)return this._pipeId=d,!0;if(a&&s&&this.isAdmin)return a.startsWith("port:")?this.drag={kind:"poolport",pool:s.id,id:a.slice(5),base:this._doc,moved:!1}:a.startsWith("joint:")?this.drag={kind:"pooljoint",pool:s.id,id:ut(a).id,start:n,base:this._doc,moved:!1}:this.drag={kind:"pooldev",id:a.slice(4),start:n,base:this._doc,moved:!1},!0;if(this.isAdmin){let P=(y=e.closest("[data-out-box]"))==null?void 0:y.getAttribute("data-out-box");if(P){let[F,T]=l(P);return this.drag={kind:"outbox",id:F,corner:T,base:this._doc,moved:!1},!0}let A=(x=e.closest("[data-out-vertex]"))==null?void 0:x.getAttribute("data-out-vertex");if(A){let[F,T]=l(A);return this.drag={kind:"outvertex",id:F,index:T,base:this._doc,moved:!1},!0}}let c=e.closest("[data-outdoor]")?this.outdoorAt(n)??e.closest("[data-outdoor]").getAttribute("data-outdoor"):null;return c&&o.outdoor.some(P=>P.id===c&&P.type==="pool")?(this.selectItem("outdoor",c),this._pipeId=null,this.isAdmin&&(this.drag={kind:"outdoor",id:c,start:n,startScreen:i,base:this._doc,moved:!1}),!0):(this._pipeId=null,!1)}changePool(t,e){this.change((n,i)=>{let o=i.outdoor.find(s=>s.id===t);o&&(o.pool??={},e(o.pool,o))})}extendPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=ft(this._doc,o,t);n=this.jointEnd(t,n,i[i.length-1]),this.changePool(t.id,a=>{var c,u;let l=(c=a.pipes)==null?void 0:c.find(p=>p.id===e.pipe);if(!l)return;Object.assign(l,Nt(l,s));let d=l.heights??[];if(e.end==="to"){let p=d[d.length-1]??l.height??null;l.points=[...l.points,...i],l.heights=[...d,...i.map(()=>p)],l.to=n}else{let p=or(l,s),h=d[0]??l.height??null;l.points=[...[...i].reverse(),...l.points],l.heights=[...i.map(()=>h),...d],l.from=n;let f=or(l,s)-p;l.fittings=(u=l.fittings)==null?void 0:u.map(m=>({...m,at:z(m.at+f)}))}}),this._pipeId=e.pipe}jointEnd(t,e,n,i=[]){var u,p,h;let{kind:o,id:s,port:a}=ut(e),l=o==="joint"&&!a?(p=(u=t.pool)==null?void 0:u.joints)==null?void 0:p.find(f=>f.id===s):void 0;if(!l)return e;if(l.kind==="wall"||l.kind==="floor"){let f=this._doc.floors.find(v=>v.outdoor.some(y=>y.id===t.id)),m=f&&ft(this._doc,f,t),[_,b]=[m==null?void 0:m(`joint:${s}:inside`),m==null?void 0:m(`joint:${s}:outside`)];return!n||!_||!b?`joint:${s}:inside`:`joint:${s}:${Math.hypot(n[0]-_.x,n[1]-_.z)<=Math.hypot(n[0]-b.x,n[1]-b.z)?"inside":"outside"}`}let d=new Set([...(((h=t.pool)==null?void 0:h.pipes)??[]).flatMap(f=>[f.from,f.to]),...i]),c=wn(l.kind).find(f=>!d.has(`joint:${s}:${f}`));return c?`joint:${s}:${c}`:e}addPipe(t,e,n,i){let o=this.floor;if(!o)return;let s=o.outdoor.find(l=>l.id===t);s&&(e=this.jointEnd(s,e,i[0]),n=this.jointEnd(s,n,i[i.length-1],[e]));let a={id:tt("pipe"),from:e,to:n,floor_id:o.id,points:i};this.changePool(t,l=>l.pipes=[...l.pipes??[],a]),this._pipeId=a.id}addPoolPort(t){var p;let e=this.poolArea;if(!e||!this.isAdmin)return;let n=((p=e.pool)==null?void 0:p.ports)??[],i=e.points.length,o=h=>{let f=e.points[h%i],m=e.points[(h+1)%i];return[(f[0]+m[0])/2,(f[1]+m[1])/2]},[s,a]=ne(e.points),l=this._doc.floors.flatMap(h=>h.furniture).find(h=>h.type==="pool_filter"||h.type==="pool_pump"),d=n.filter(h=>h.kind==="inlet").length,c=t==="skimmer"?Vi(e.points,o(0)):t==="inlet"?Vi(e.points,o(Math.floor(i/2)+d*Math.max(1,Math.floor(i/8)))):t==="drain"?[s,a]:l?[l.x+.8,l.z]:[s,a+3],u={id:tt("port"),kind:t,x:z(c[0]),z:z(c[1])};this.changePool(e.id,h=>h.ports=[...n,u])}addPoolDevice(t){let e=this.poolArea;this.addEnergyDevice(t),e&&this.selectItem("outdoor",e.id),this._tool="pool"}deletePoolDevice(t){this.change(e=>{var n;for(let i of e.floors){i.furniture=i.furniture.filter(o=>o.id!==t);for(let o of i.outdoor)(n=o.pool)!=null&&n.pipes&&(o.pool.pipes=o.pool.pipes.filter(s=>s.from!==`dev:${t}`&&s.to!==`dev:${t}`))}})}deletePoolPort(t,e){this.changePool(t,n=>{n.ports=(n.ports??[]).filter(i=>i.id!==e),n.pipes=(n.pipes??[]).filter(i=>i.from!==`port:${e}`&&i.to!==`port:${e}`)})}togglePoolValve(t){let e=this._doc.floors.flatMap(n=>n.furniture).find(n=>n.id===t);!e||e.type!=="pool_valve"||!this.isAdmin||this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&(i.valve_open=i.valve_open===!1?null:!1)})}setPoolDevice(t,e){this.change(n=>{let i=n.floors.flatMap(o=>o.furniture).find(o=>o.id===t);i&&Object.assign(i,e)})}portText(t){let{kind:e,port:n}=ut(t),i={in:"A",out1:"B",out2:"C"};return e==="joint"&&n&&i[n]?`${this.t("card_port")} ${i[n]}`:n?this.t(`port_${n}`):""}openCard(t,e){this._card={pool:t,part:e},this._cardJoin=null}partPorts(t,e){var o,s;let{kind:n,id:i}=ut(e);if(n==="joint"){let a=(s=(o=t.pool)==null?void 0:o.joints)==null?void 0:s.find(l=>l.id===i);return a?wn(a.kind).map(l=>`${e}:${l}`):[]}if(n==="dev"){let a=this._doc.floors.flatMap(d=>d.furniture).find(d=>d.id===i),l=a?De(a.type):[];return l.length?l.map(d=>`${e}:${d}`):[e]}return[e]}partStatus(t,e){var o;let n=((o=t.pool)==null?void 0:o.pipes)??[],i=this.partPorts(t,e);return[i.filter(s=>n.some(a=>a.from===s||a.to===s)).length,i.length]}cardConnect(t,e,n,i){var u,p;let o=this._doc.floors.find(h=>h.outdoor.some(f=>f.id===t.id));if(!o||!n)return;let s=ft(this._doc,o,t),a=((u=t.pool)==null?void 0:u.ports)??[],l=h=>{var b;let{kind:f,id:m,port:_}=ut(h);return f==="port"?hs(((b=a.find(v=>v.id===m))==null?void 0:b.kind)??"inlet"):f==="dev"?Hl(_):null},d=this.jointEnd(t,n,void 0,[e]),c=xn({from:e,vias:i,to:[d],floorId:o.id},s,((p=t.pool)==null?void 0:p.joints)??[],l,h=>tt(h));this.changePool(t.id,h=>{h.joints=[...h.joints??[],...c.joints],h.pipes=[...h.pipes??[],...c.pipes]}),this._cardJoin=null}cardDisconnect(t,e){this.changePool(t.id,n=>n.pipes=(n.pipes??[]).filter(i=>!e.pipes.includes(i.id)))}cardReroute(t,e){var f,m;let n=((f=t.pool)==null?void 0:f.pipes)??[],i=n.find(_=>_.id===e.pipes[0]);if(!i||!e.other)return;let o=i.from===e.start,s=[...e.holes.map(_=>({kind:"hole",joint:_.joint,dir:_.dir})),...e.fittings.map(_=>({kind:_}))],a=this._doc.floors.find(_=>_.outdoor.some(b=>b.id===t.id));if(!a)return;let l={...t,pool:{...t.pool,pipes:n.filter(_=>!e.pipes.includes(_.id))}},d=ft(this._doc,a,l),c=o?e.start:e.other,u=o?e.other:e.start,p=o?s:[...e.holes].reverse().map(_=>({kind:"hole",joint:_.joint,dir:_.dir==="in"?"out":"in"})).concat(e.fittings.map(_=>({kind:_}))),h=xn({from:c,vias:p,to:[u],floorId:a.id},d,((m=t.pool)==null?void 0:m.joints)??[],()=>null,_=>tt(_));this.changePool(t.id,_=>{_.pipes=[...(_.pipes??[]).filter(b=>!e.pipes.includes(b.id)),...h.pipes]})}renderPartCard(){var F,T,S,M,w,k;let t=this._card,e=t?this._doc.floors.flatMap(E=>E.outdoor).find(E=>E.id===t.pool):void 0;if(!t||!e)return $;let n=this.isAdmin,{kind:i,id:o}=ut(t.part),s=i==="joint"?(T=(F=e.pool)==null?void 0:F.joints)==null?void 0:T.find(E=>E.id===o):void 0,a=i==="dev"?this._doc.floors.flatMap(E=>E.furniture).find(E=>E.id===o):void 0,l=i==="port"?(M=(S=e.pool)==null?void 0:S.ports)==null?void 0:M.find(E=>E.id===o):void 0;if(!s&&!a&&!l)return $;let d=((w=e.pool)==null?void 0:w.pipes)??[],c=((k=e.pool)==null?void 0:k.joints)??[],u=this.partPorts(e,t.part),p=this.poolEnds(e).filter(E=>se(E.node)!==t.part&&!E.used),h=c.filter(E=>E.kind==="wall"||E.kind==="floor"),f=E=>this.poolNodeLabel(e,E),m=E=>ut(E).port?this.portText(E):this.t("card_port"),_=E=>E.kind==="hole"?this.t(E.dir==="in"?"conn_hole_in":"conn_hole_out",{name:this.jointLabel(e,E.joint)}):this.t(E.kind==="valve"?"wall_run_valve":"wall_run_sight"),b=()=>{this._card=null,this._cardJoin=null},v=()=>s?[s.x,s.z]:a?[a.x,a.z]:l?[l.x,l.z]:null,y=u.map(E=>{var O;let I=Wl(d,c,E),C=((O=this._cardJoin)==null?void 0:O.port)===E?this._cardJoin:null;return g`<div class="fp3d-pc-row ${I.length?"fp3d-on":""}">
        <b>${m(E)}</b>
        <div class="fp3d-pc-conns">
          ${I.map(D=>g`<div class="fp3d-pc-conn">
              <div class="fp3d-pc-chain">
                ${[...D.holes.map(j=>_({kind:"hole",joint:j.joint,dir:j.dir})),...D.fittings.map(j=>_({kind:j}))].map(j=>g`<span class="fp3d-pc-arrow">→</span><span class="fp3d-pc-tile">${j}</span>`)}
                <span class="fp3d-pc-arrow">→</span>
                ${D.other?g`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("card_open_other")} @click=${()=>this.openCard(e.id,se(D.other))}>${f(D.other)}</button>`:g`<span class="fp3d-pc-tile fp3d-muted">${this.t("pool_loose_end")}</span>`}
              </div>
              ${n?g`<span class="fp3d-pc-tools">
                    ${D.other?g`<button class="fp3d-btn" @click=${()=>this.cardReroute(e,D)}>${this.t("card_reroute")}</button>`:$}
                    <button class="fp3d-btn fp3d-danger" @click=${()=>this.cardDisconnect(e,D)}>${this.t("card_disconnect")}</button>
                  </span>`:$}
            </div>`)}
          ${n&&(!I.length||u.length===1)?C?this.renderJoinPicker(e,E,C,p,h,_):g`<button class="fp3d-btn ${I.length?"":"fp3d-pc-open"}" @click=${()=>this._cardJoin={port:E,to:"",vias:[]}}>+ ${this.t("card_connect_with")}</button>`:$}
        </div>
      </div>`}),[x,P]=this.partStatus(e,t.part),A=v();return g`<div class="fp3d-wv-veil fp3d-pc-veil" @click=${E=>E.target===E.currentTarget&&b()}>
      <div class="fp3d-pc" role="dialog" tabindex="0" @keydown=${E=>E.key==="Escape"&&b()}>
        <div class="fp3d-wv-head">
          ${s&&n?g`<input
                class="fp3d-pc-name"
                .value=${s.name??""}
                placeholder=${this.jointLabel(e,s.id)}
                title=${this.t("joint_name")}
                @change=${E=>{let I=E.target.value.trim().slice(0,60);this.changePool(e.id,C=>{var D;let O=(D=C.joints)==null?void 0:D.find(j=>j.id===s.id);O&&(O.name=I||null)})}}
              />`:g`<b class="fp3d-pc-title">${f(t.part)}</b>`}
          <span class="fp3d-muted">${this.t("card_status",{a:x,b:P})}</span>
          <span class="fp3d-wv-grow"></span>
          <button class="fp3d-btn" title=${this.t("close")} @click=${b}>✕</button>
        </div>
        <div class="fp3d-pc-body">
          ${this.renderPartDrawing(e,t.part,u)}
          <div class="fp3d-pc-rows">${y}</div>
        </div>
        <div class="fp3d-wv-foot">
          ${A?g`<button class="fp3d-btn" @click=${()=>{b(),this._wallView=null,this._tool="pool",this.showPoint(A[0],A[1])}}>${this.t("card_show_plan")}</button>`:$}
          ${A&&!l?g`<button class="fp3d-btn" @click=${()=>{b(),this.pickWall(A)}}>▦ ${this.t("card_show_wall")}</button>`:$}
          <span class="fp3d-wv-grow"></span>
          ${n?g`<button class="fp3d-btn fp3d-danger" @click=${()=>{b(),a?this.deletePoolDevice(a.id):l?this.deletePoolPort(e.id,l.id):s&&this.changePool(e.id,E=>{E.joints=(E.joints??[]).filter(I=>I.id!==s.id),E.pipes=(E.pipes??[]).filter(I=>se(I.from)!==t.part&&se(I.to)!==t.part)})}}>${this.t("delete")}</button>`:$}
        </div>
      </div>
    </div>`}renderJoinPicker(t,e,n,i,o,s){let a=p=>{var _,b;let{kind:h,id:f}=ut(p);if(h==="port")return"pool";if(h==="dev")return"tech";let m=(b=(_=t.pool)==null?void 0:_.joints)==null?void 0:b.find(v=>v.id===f);return(m==null?void 0:m.kind)==="wall"||(m==null?void 0:m.kind)==="floor"?"holes":"joints"},l=["pool","tech","joints"].map(p=>({g:p,items:i.filter(h=>a(h.node)===p)})).filter(p=>p.items.length),d=p=>this._cardJoin={...n,...p},c=p=>d({vias:[...n.vias,p]}),u=new Set(n.vias.flatMap(p=>p.kind==="hole"?[p.joint]:[]));return g`<div class="fp3d-pc-join">
      <div class="fp3d-pc-chain">
        <span class="fp3d-pc-tile fp3d-pc-start">${this.poolNodeLabel(t,e)}</span>
        ${n.vias.map((p,h)=>g`<span class="fp3d-pc-arrow">→</span
            ><button class="fp3d-pc-tile fp3d-pc-stop" title=${this.t("delete")} @click=${()=>d({vias:n.vias.filter((f,m)=>m!==h)})}>${s(p)} <i>✕</i></button>`)}
        <span class="fp3d-pc-arrow">→</span>
        ${n.to?g`<button class="fp3d-pc-tile fp3d-pc-end" title=${this.t("delete")} @click=${()=>d({to:""})}>${this.poolNodeLabel(t,n.to)} <i>✕</i></button>`:g`<span class="fp3d-pc-tile fp3d-pc-next">${this.t("card_next")}</span>`}
      </div>
      ${n.to?$:g`<div class="fp3d-pc-steps">
            ${o.some(p=>!u.has(p.id))?g`<div class="fp3d-pc-step">${this.t("card_step_hole")}</div>
                  ${o.filter(p=>!u.has(p.id)).map(p=>g`<div class="fp3d-pc-hole">
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
            ${l.map(({g:p,items:h})=>g`<div class="fp3d-pc-group">
                <span class="fp3d-pc-glabel">${this.t(`card_group_${p}`)}</span>
                <div class="fp3d-pc-picks">${h.map(f=>g`<button class="fp3d-pc-pick fp3d-pc-target" @click=${()=>d({to:f.node})}>${f.label}</button>`)}</div>
              </div>`)}
          </div>`}
      <span class="fp3d-pc-tools">
        <button class="fp3d-btn fp3d-primary" ?disabled=${!n.to} @click=${()=>this.cardConnect(t,e,n.to,n.vias)}>✓ ${this.t("card_lay")}</button>
        <button class="fp3d-btn" @click=${()=>this._cardJoin=null}>${this.t("cancel")}</button>
      </span>
    </div>`}renderPartDrawing(t,e,n){var f,m,_;let i=((f=t.pool)==null?void 0:f.pipes)??[],o=b=>i.some(v=>v.from===b||v.to===b),{kind:s,id:a}=ut(e),l=s==="joint"?(_=(m=t.pool)==null?void 0:m.joints)==null?void 0:_.find(b=>b.id===a):void 0,d=s==="dev"?this._doc.floors.flatMap(b=>b.furniture).find(b=>b.id===a):void 0,c={},u=$,p=(l==null?void 0:l.kind)??(d?d.type:"port");p==="tee"?(Object.assign(c,{in:[20,60],out1:[180,60],out2:[100,130]}),u=H`<path class="fp3d-pc-body-shape" d="M 55 48 H 145 V 72 H 112 V 100 H 88 V 72 H 55 Z" />`):p==="y"?(Object.assign(c,{in:[20,70],out1:[180,25],out2:[180,115]}),u=H`<path class="fp3d-pc-body-shape" d="M 55 58 H 95 L 140 30 L 152 50 L 112 70 L 152 90 L 140 110 L 95 82 H 55 Z" />`):p==="wall"||p==="floor"?(Object.assign(c,{outside:[20,70],inside:[180,70]}),u=H`<rect class="fp3d-pc-wall" x="85" y="10" width="30" height="120" /><rect class="fp3d-pc-body-shape" x="70" y="58" width="60" height="24" rx="4" />
        <text class="fp3d-pc-side" x="40" y="22">${this.t("port_outside")}</text><text class="fp3d-pc-side" x="160" y="22">${this.t("port_inside")}</text>`):p==="pool_pump"?(Object.assign(c,{suction:[20,95],pressure:[110,10]}),u=H`<rect class="fp3d-pc-body-shape" x="50" y="70" width="70" height="50" rx="8" /><circle class="fp3d-pc-body-shape" cx="140" cy="85" r="30" /><rect class="fp3d-pc-body-shape" x="98" y="40" width="24" height="32" />`):p==="pool_filter"?(Object.assign(c,{pump:[20,40],return:[180,40],waste:[100,4]}),u=H`<ellipse class="fp3d-pc-body-shape" cx="100" cy="95" rx="45" ry="40" /><rect class="fp3d-pc-body-shape" x="70" y="28" width="60" height="26" rx="10" />`):p==="pool_heat_pump"?(Object.assign(c,{in:[180,95],out:[180,45]}),u=H`<rect class="fp3d-pc-body-shape" x="30" y="20" width="120" height="100" rx="8" /><circle class="fp3d-pc-fan" cx="80" cy="70" r="32" />`):(c[""]=[180,70],u=H`<circle class="fp3d-pc-body-shape" cx="80" cy="70" r="40" />`);let h=p==="pool_filter"?[100,41]:p==="pool_pump"?[100,85]:[100,70];return g`<svg class="fp3d-pc-draw" viewBox="0 0 200 140">
      ${n.map(b=>{let v=ut(b).port??"",y=c[v]??c[""]??[180,70],x=o(b);return H`<g class="fp3d-pc-stub ${x?"fp3d-on":""}" @click=${()=>this.isAdmin&&!x&&(this._cardJoin={port:b,to:"",vias:[]})}>
          <line x1=${h[0]} y1=${h[1]} x2=${y[0]} y2=${y[1]} />
          <circle cx=${y[0]} cy=${y[1]} r="7" />
          <title>${v?this.portText(b):""}</title>
        </g>`})}
      ${u}
      ${n.map(b=>{let v=ut(b).port,y=c[v??""]??[180,70];return v?H`<text class="fp3d-pc-label" x=${Math.min(162,Math.max(38,y[0]))} y=${y[1]<70?y[1]+20:y[1]-12}>${this.portText(b)}</text>`:$})}
    </svg>`}jointLabel(t,e){var a,l;let n=((a=t.pool)==null?void 0:a.joints)??[],i=n.find(d=>d.id===e);if(!i)return this.t("pool_loose_end");let o=d=>d==="wall"||d==="floor"?"hole":d??"tee";if((l=i.name)!=null&&l.trim())return i.name.trim();let s=n.filter(d=>o(d.kind)===o(i.kind));return`${this.t(`joint_${i.kind??"tee"}`,{n:s.indexOf(i)+1})}`}poolEnds(t){var o,s,a;let e=((o=t.pool)==null?void 0:o.pipes)??[],n=l=>e.some(d=>d.from===l||d.to===l),i=[];for(let l of((s=t.pool)==null?void 0:s.ports)??[])i.push({node:`port:${l.id}`,label:this.poolNodeLabel(t,`port:${l.id}`),used:!1});for(let l of this._doc.floors.flatMap(d=>d.furniture).filter(d=>Pt.includes(d.type)&&d.type!=="pool_valve")){let d=De(l.type);for(let c of d.length?d.map(u=>`dev:${l.id}:${u}`):[`dev:${l.id}`])i.push({node:c,label:this.poolNodeLabel(t,c),used:d.length>0&&n(c)})}for(let l of((a=t.pool)==null?void 0:a.joints)??[])for(let d of wn(l.kind)){let c=`joint:${l.id}:${d}`;i.push({node:c,label:this.poolNodeLabel(t,c),used:n(c)})}return i}placeJointPlan(t,e,n,i){var c,u;let o=this.floor;if(!o)return;let s=ft(this._doc,o,t),a=i?(u=(c=t.pool)==null?void 0:c.pipes)==null?void 0:u.find(p=>p.id===i):void 0;if(a){let p=Zt(a,s),h=null;for(let m=1;m<p.length;m++){let[_,b]=[p[m-1],p[m]],[v,y]=[b[0]-_[0],b[2]-_[2]],x=v*v+y*y,P=x>0?Math.max(0,Math.min(1,((n[0]-_[0])*v+(n[1]-_[2])*y)/x)):0,A=[_[0]+v*P,_[1]+(b[1]-_[1])*P,_[2]+y*P],F=Math.hypot(A[0]-n[0],A[2]-n[1]);(!h||F<h.d)&&(h={p:A,d:F})}let f=h&&Wi(a,s,h.p,tt("joint"),tt("pipe"));if(f){this.changePool(t.id,m=>{m.joints=[...m.joints??[],{...f.joint,kind:e}],m.pipes=(m.pipes??[]).flatMap(_=>_.id===a.id?[{...f.first,to:`joint:${f.joint.id}:in`},{...f.second,from:`joint:${f.joint.id}:out1`}]:[_])});return}}let l=o.rooms.some(p=>p.points.length>=3&&Y(n,p.points)),d=this.snap(n);this.changePool(t.id,p=>p.joints=[...p.joints??[],{id:tt("joint"),kind:e,x:z(d[0]),z:z(d[1]),y:l?.5:-.3}])}poolNodePos(t,e){var o,s;if(!e)return null;let n=this._doc.floors.find(a=>a.outdoor.some(l=>l.id===t.id));if(e.startsWith("joint:")||e.split(":").length>2){let a=n&&ft(this._doc,n,t)(e);return a?[a.x,a.z]:null}if(e.startsWith("port:")){let a=(s=(o=t.pool)==null?void 0:o.ports)==null?void 0:s.find(l=>l.id===e.slice(5));return a?[a.x,a.z]:null}let i=this._doc.floors.flatMap(a=>a.furniture).find(a=>a.id===e.slice(4));return i?[i.x,i.z]:null}poolNodeLabel(t,e){var d;let{kind:n,id:i,port:o}=ut(e);if(!e)return this.t("pool_loose_end");if(o||n==="joint"){let c=n==="joint"?this.jointLabel(t,i):this.poolNodeLabel(t,`${n}:${i}`);return o?`${c} \xB7 ${this.portText(e)}`:c}if(e.startsWith("port:")){let c=((d=t.pool)==null?void 0:d.ports)??[],u=c.find(h=>h.id===e.slice(5));if(!u)return"?";let p=c.filter(h=>h.kind===u.kind);return`${this.t(`pool_port_${u.kind}`)}${p.length>1?` ${p.indexOf(u)+1}`:""}`}let s=this._doc.floors.flatMap(c=>c.furniture).filter(c=>Pt.includes(c.type)),a=s.find(c=>c.id===e.slice(4));if(!a)return"?";let l=s.filter(c=>c.type===a.type);return`${a.name||this.t(`furn_${a.type}`)}${l.length>1&&!a.name?` ${l.indexOf(a)+1}`:""}`}renderPoolPlan(t){var h,f,m,_;let e=this.poolArea,n=t.furniture.filter(b=>Pt.includes(b.type)),i={pool_pump:"P",pool_filter:"F",pool_heat_pump:"W",pool_dosing:"D",pool_valve:""},o=e?(((h=e.pool)==null?void 0:h.pipes)??[]).filter(b=>b.floor_id===t.id):[],s=o.map(b=>{let v=this.poolNodePos(e,b.from),y=this.poolNodePos(e,b.to);if((!v||!y)&&!b.heights)return $;let x=v?1:0,P=[...v?[v]:[],...b.points,...y?[y]:[]].map(I=>this.toScreen(I));if(P.length<2)return $;let A=b.id===this._pipeId,F=0;for(let I=1;I<P.length-1;I++)Math.hypot(P[I+1][0]-P[I][0],P[I+1][1]-P[I][1])>Math.hypot(P[F+1][0]-P[F][0],P[F+1][1]-P[F][1])&&(F=I);let[T,S]=P[F],[M,w]=P[F+1],k=Math.atan2(w-S,M-T)*180/Math.PI,E=P.map(I=>I.join(",")).join(" ");return H`<g data-pipe=${b.id}>
        <polyline class="fp3d-pipe-hit" points=${E} />
        <polyline class="fp3d-pipe ${A?"fp3d-pipe-sel":""}" points=${E} />
        <path class="fp3d-pipe-arrow" d="M -6 -5 L 5 0 L -6 5 Z" transform=${`translate(${(T+M)/2} ${(S+w)/2}) rotate(${k})`} />
        ${A&&this.isAdmin?H`${P.slice(0,-1).map((I,C)=>H`<line class="fp3d-pipe-seg" data-pipe-seg=${`${b.id}:${C+1-x}`} x1=${I[0]} y1=${I[1]} x2=${P[C+1][0]} y2=${P[C+1][1]} />`)}
              ${b.points.map((I,C)=>{let[O,D]=this.toScreen(I);return H`<g class="fp3d-vertex" data-pipe-pt=${`${b.id}:${C}`}><circle cx=${O} cy=${D} r="14" class="fp3d-hit" /><circle cx=${O} cy=${D} r="5" /></g>`})}`:$}
      </g>`}),a=(b,v,y,x,P)=>{let[A,F]=this.toScreen(v);return H`<g class="fp3d-pool-node ${x}" data-pool-node=${b}><title>${P}</title><circle cx=${A} cy=${F} r="16" class="fp3d-hit" /><circle cx=${A} cy=${F} r="10" /><text x=${A} y=${F}>${y}</text></g>`},l=e?(((f=e.pool)==null?void 0:f.ports)??[]).map(b=>a(`port:${b.id}`,[b.x,b.z],{skimmer:"S",drain:"B",inlet:"E",waste:"A"}[b.kind],`fp3d-pool-port-${b.kind}`,this.poolNodeLabel(e,`port:${b.id}`))):[],d=n.map(b=>a(`dev:${b.id}`,[b.x,b.z],b.type==="pool_valve"?b.valve_open===!1?"\u2715":"":i[b.type],`fp3d-pool-dev ${b.type==="pool_valve"&&b.valve_open===!1?"fp3d-pool-closed":""}`,e?this.poolNodeLabel(e,`dev:${b.id}`):b.type)),c=$;if(e&&this._pipeDraft){let b=((m=this._pipeDraft.extend)==null?void 0:m.at)??this.poolNodePos(e,this._pipeDraft.from);if(b){let v=[b,...this._pipeDraft.points,...this._cursor?[this._cursor]:[]].map(y=>this.toScreen(y).join(",")).join(" ");c=H`<polyline class="fp3d-pipe fp3d-pipe-draft" points=${v} />`}}let u=e?(((_=e.pool)==null?void 0:_.joints)??[]).map(b=>a(`joint:${b.id}`,[b.x,b.z],b.kind==="wall"||b.kind==="floor"?"\u25CE":b.kind==="y"?"Y":"T","fp3d-pool-jointnode",this.jointLabel(e,b.id))):[],p=o.flatMap(b=>b.heights&&b.points.length?["from","to"].filter(v=>!b[v]).map(v=>{let[y,x]=this.toScreen(v==="to"?b.points[b.points.length-1]:b.points[0]);return H`<g class="fp3d-pipe-end" data-pipe-end=${`${b.id}|${v}`}><circle cx=${y} cy=${x} r="14" class="fp3d-hit" /><circle cx=${y} cy=${x} r="6" /></g>`}):[]);return H`<g class="fp3d-pool-plan">${s}${c}${u}${p}${l}${d}</g>`}renderPoolPanel(t){let e=(t==null?void 0:t.outdoor.filter(i=>i.type==="pool"))??[],n=this.poolArea;return n?g`${e.length>1?g`<section>
            <div class="fp3d-seg">${e.map((i,o)=>g`<button aria-pressed=${i.id===n.id} @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${o+1}</button>`)}</div>
          </section>`:$}
      ${this.renderPoolTech(n)} ${this.renderOutdoorForm(n)}`:g`<section>
        <h3>🏊 ${this.t("tool_pool")}</h3>
        <p class="fp3d-sub">${this.t(e.length?"pool_choose":"pool_tool_empty")}</p>
        ${e.length?g`<div class="fp3d-actions">${e.map((i,o)=>g`<button class="fp3d-btn" @click=${()=>this.selectItem("outdoor",i.id)}>🏊 ${this.t("out_pool")} ${e.length>1?o+1:""}</button>`)}</div>`:$}
      </section>`}renderPoolTech(t){var a,l,d;if(!this.pipeRules)return $;let e=this.isAdmin,n=((a=t.pool)==null?void 0:a.ports)??[],i=((l=t.pool)==null?void 0:l.pipes)??[],o=this._doc.floors.flatMap(c=>c.furniture).filter(c=>Pt.includes(c.type)),s=i.find(c=>c.id===this._pipeId);return g`<section>
        <button class="fp3d-btn fp3d-primary fp3d-wide" ?disabled=${!e} title=${this.t("tech_open_hint")} @click=${()=>{this.techPick=!0,this._wallPick=!0}}>🛠 ${this.t("tech_open")}</button>
        <p class="fp3d-sub">${this.t("tech_open_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_ports")}</h3>
        <div class="fp3d-actions">
          ${["skimmer","drain","inlet","waste"].map(c=>g`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolPort(c)}>+ ${this.t(`pool_port_${c}`)}</button>`)}
        </div>
        ${n.map(c=>g`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`port:${c.id}`)}>${this.poolNodeLabel(t,`port:${c.id}`)}</button>
            <span class="fp3d-muted">${this.partStatus(t,`port:${c.id}`)[0]?"\u2713":"\u25CB"}</span>
            ${c.kind==="inlet"||c.kind==="skimmer"?g`<label class="fp3d-pool-depth" title=${this.t("pool_port_depth_hint")}
                  >${this.t("pool_port_depth")}
                  <input type="number" step="0.05" min="0" max="3" .value=${String(c.depth??(c.kind==="inlet"?.3:0))} ?disabled=${!e} @change=${u=>{let p=Number(u.target.value.replace(",","."));Number.isFinite(p)&&this.change((h,f)=>{var _,b,v;let m=(v=(b=(_=f.outdoor.find(y=>y.id===t.id))==null?void 0:_.pool)==null?void 0:b.ports)==null?void 0:v.find(y=>y.id===c.id);m&&(m.depth=Math.min(3,Math.max(0,z(p))))})}} />m</label
                >`:$}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolPort(t.id,c.id)}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_ports_hint")}</p>
      </section>
      <section>
        <h3>${this.t("pool_devices")}</h3>
        <div class="fp3d-actions">
          ${Pt.filter(c=>c!=="pool_valve").map(c=>g`<button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.addPoolDevice(c)}>+ ${this.t(`furn_${c}`)}</button>`)}
          <button class="fp3d-btn ${this._jointPlace==="tee"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="tee"?null:"tee"}>+ ${this.t("joint_add_tee")}</button>
          <button class="fp3d-btn ${this._jointPlace==="y"?"fp3d-primary":""}" ?disabled=${!e} title=${this.t("hint_joint_place")} @click=${()=>this._jointPlace=this._jointPlace==="y"?null:"y"}>+ ${this.t("joint_add_y")}</button>
        </div>
        ${o.map(c=>g`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`dev:${c.id}`)}>${this.poolNodeLabel(t,`dev:${c.id}`)}</button>
            <span class="fp3d-ports">${De(c.type).map(u=>g`<i class=${i.some(p=>p.from===`dev:${c.id}:${u}`||p.to===`dev:${c.id}:${u}`)?"fp3d-on":""}>${this.t(`port_${u}`)}</i>`)}</span>
            ${c.type==="pool_filter"?g`<select ?disabled=${!e} title=${this.t("pool_valve_type")} @change=${u=>this.setPoolDevice(c.id,{variant:u.target.value==="top6"?null:u.target.value})}>
                    ${Ol.map(u=>g`<option value=${u} ?selected=${(c.variant??"top6")===u}>${this.t(`valve_${u}`)}</option>`)}
                  </select>
                  <select ?disabled=${!e} title=${this.t("pool_valve_position")} @change=${u=>this.setPoolDevice(c.id,{valve_position:u.target.value})}>
                  ${Fa.map(u=>g`<option value=${u} ?selected=${(c.valve_position??"filter")===u}>${this.t(`valve_${u}`)}</option>`)}
                </select>`:c.type==="pool_heat_pump"?g`<select ?disabled=${!e} title=${this.t("hp_ports")} @change=${u=>this.setPoolDevice(c.id,{variant:u.target.value==="right"?null:u.target.value})}>
                    ${["right","left","back"].map(u=>g`<option value=${u} ?selected=${(c.variant??"right")===u}>${this.t("hp_ports")}: ${this.t(`hp_side_${u}`)}</option>`)}
                  </select>`:c.type==="pool_valve"?g`<label class="fp3d-check"
                    ><input type="checkbox" .checked=${c.valve_open!==!1} ?disabled=${!e} @change=${u=>this.setPoolDevice(c.id,{valve_open:u.target.checked?null:!1})} />
                    ${this.t("pool_valve_open")}</label
                  >`:$}
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.deletePoolDevice(c.id)}>✕</button>
          </div>`)}
        ${(((d=t.pool)==null?void 0:d.joints)??[]).map(c=>g`<div class="fp3d-pool-row">
            <button class="fp3d-link" title=${this.t("card_open")} @click=${()=>this.openCard(t.id,`joint:${c.id}`)}>${this.jointLabel(t,c.id)}</button>
            <span class="fp3d-ports">${wn(c.kind).map(u=>{let p=`joint:${c.id}:${u}`,h=i.some(f=>f.from===p||f.to===p||(c.kind??"tee")!=="wall"&&(c.kind??"tee")!=="floor"&&se(f.from)===`joint:${c.id}`&&!ut(f.from).port&&u==="in");return g`<i class=${h?"fp3d-on":""} title=${this.portText(p)}>${this.portText(p)}</i>`})}</span>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>{u.joints=(u.joints??[]).filter(p=>p.id!==c.id),u.pipes=(u.pipes??[]).filter(p=>se(p.from)!==`joint:${c.id}`&&se(p.to)!==`joint:${c.id}`)})}>✕</button>
          </div>`)}
        <p class="fp3d-sub">${this.t("pool_holes_hint")}</p>
      </section>

      <section>
        <h3>${this.t("pool_pipes")}</h3>
        <div class="fp3d-actions">
          <button class="fp3d-btn ${this._pipeMode?"fp3d-primary":""}" ?disabled=${!e} @click=${()=>(this._pipeMode=!this._pipeMode,this._pipeDraft=null)}>〰 ${this.t("pool_pipe_draw")}</button>
        </div>
        <p class="fp3d-sub">${this.t("pool_pipe_draw_hint")}</p>
        ${i.map(c=>g`<div class="fp3d-pool-row ${c.id===this._pipeId?"fp3d-pool-row-sel":""}">
            <button class="fp3d-link" @click=${()=>this._pipeId=c.id}>${this.poolNodeLabel(t,c.from)} → ${this.poolNodeLabel(t,c.to)}</button>
            <button class="fp3d-btn" ?disabled=${!e} title=${this.t("pool_pipe_reverse")} @click=${()=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===c.id);p&&([p.from,p.to,p.points]=[p.to,p.from,[...p.points].reverse()])})}>⇄</button>
            <button class="fp3d-btn fp3d-danger" ?disabled=${!e} title=${this.t("delete")} @click=${()=>this.changePool(t.id,u=>u.pipes=(u.pipes??[]).filter(p=>p.id!==c.id))}>✕</button>
          </div>`)}
        ${s?g`<div class="fp3d-form">
              ${this.len(this.t("pool_pipe_height"),s.height??.3,c=>this.changePool(t.id,u=>{var h;let p=(h=u.pipes)==null?void 0:h.find(f=>f.id===s.id);p&&(p.height=Math.min(10,Math.max(-5,z(c))))}),.05)}
            </div>`:$}
      </section>`}renderPoolShape(t){let e=this.isAdmin,n=zt(t.points),i=t.pool_shape,o=(l,d,c,u)=>i&&this.updateOutdoor({points:xi(i,l,d,c,u)}),s=(n.x0+n.x1)/2,a=(n.z0+n.z1)/2;return g`${i==="round"?g`${this.len(this.t("pool_diameter"),n.x1-n.x0,l=>{let d=Math.max(.5,l)/2;o(s-d,a-d,s+d,a+d)},.01,1)}`:i==="oval"?g`${this.len(this.t("width"),n.x1-n.x0,l=>o(s-Math.max(1,l)/2,n.z0,s+Math.max(1,l)/2,n.z1),.01,1)}
            ${this.len(this.t("depth"),n.z1-n.z0,l=>o(n.x0,a-Math.max(1,l)/2,n.x1,a+Math.max(1,l)/2),.01,1)}`:$}
      <label class="fp3d-check fp3d-wide" title=${this.t("pool_above_hint")}
        ><input type="checkbox" .checked=${!!t.above} ?disabled=${!e} @change=${l=>this.updateOutdoor({above:l.target.checked||void 0})} />
        ${this.t("pool_above")}</label
      >
      ${t.above?this.len(this.t("pool_height"),wi(t),l=>this.updateOutdoor({height:Math.min(2.5,Math.max(.4,z(l)))}),.05,.4):$}
      ${this.len(this.t("pool_depth"),Lo(t),l=>this.updateOutdoor({depth:Math.min(5,Math.max(.3,z(l)))}),.05,.3)}
      ${t.above?$:this.len(this.t("pool_rim"),t.rim??.06,l=>this.updateOutdoor({rim:Math.min(2,Math.max(-.3,z(l)))}),.01,-.3)}
      <p class="fp3d-sub fp3d-wide">${this.t("pool_depth_hint")}</p>
      ${!t.above&&this.floor&&!Oo(this.floor,t)?g`<p class="fp3d-sub fp3d-wide fp3d-warn">${this.t("pool_depth_ground")}</p>`:$}`}get pipeRules(){return wd()}editorHost(){let t=this.hass;return{api:1,hass:()=>t,building:()=>this._doc,language:()=>t.language||"en",devices:()=>[],findDevice:()=>null,openings:()=>[],energy:()=>null,consumers:()=>[],canEdit:()=>this.isAdmin,updateBuilding:e=>this.change(n=>e(n)),callService:(e,n,i)=>t.callService(e,n,i),newId:e=>tt(e),refresh:()=>{this._moduleFieldMemo=null,this.requestUpdate()},plan:qs}}_moduleFieldMemo=null;memoFields(t,e){let n=this._moduleFieldMemo,i=this.hass;if(n&&n.item===t&&n.doc===this._doc&&n.entities===i.entities&&n.lang===i.language)return n.fields;let o=e();return this._moduleFieldMemo={item:t,doc:this._doc,entities:i.entities,lang:i.language,fields:o},o}renderModuleFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>vd(this.editorHost(),t))):$}renderModuleRoomFields(t){let e=this.floor;return!this.hass||!e?$:this.renderFields(this.memoFields(t,()=>$d(this.editorHost(),t,e)),!1)}renderModuleFurnitureFields(t){return this.hass?this.renderFields(this.memoFields(t,()=>yd(this.editorHost(),t))):$}renderFields(t,e=!0){if(!t.length)return $;let n=this.isAdmin,i=o=>{switch(o.kind){case"heading":return g`<h3>${o.text}</h3>`;case"text":return g`<p class="fp3d-sub fp3d-wide">${o.text}</p>`;case"entity":return this.entitySelect(o.label,o.value,o.auto,this.entityOptions(o.filter),s=>o.set(s));case"select":return g`<label class="fp3d-field fp3d-wide"
            >${o.label}
            <select ?disabled=${!n} @change=${s=>o.set(s.target.value)}>
              ${o.options.map(s=>g`<option value=${s.id} ?selected=${s.id===o.value}>${s.label}</option>`)}
            </select></label
          >`;case"check":return g`<label class="fp3d-check fp3d-wide"><input type="checkbox" .checked=${o.value} ?disabled=${!n} @change=${s=>o.set(s.target.checked)} /> ${o.label}</label>`;case"button":return g`<button class="fp3d-btn ${o.primary?"fp3d-primary":""} fp3d-wide" ?disabled=${!n} title=${o.title??""} @click=${()=>o.onTap()}>${o.label}</button>`;case"lines":return zr(o.value,!n,{label:o.label,placeholder:o.placeholder??this.t("lines_new"),add:this.t("lines_add"),remove:this.t("delete")},s=>o.set(s),!0)}};return e?g`<section>
      <div class="fp3d-form fp3d-links">${t.map(i)}</div>
    </section>`:t.map(i)}renderRooms(t){return H`
      <g>${t.rooms.map(e=>{let n=e.points.map(i=>this.toScreen(i).join(",")).join(" ");return H`<polygon data-room=${e.id} class=${e.id===this._roomId?"fp3d-room fp3d-room-sel":"fp3d-room"} points=${n} />`})}</g>
      ${this.renderEdgeHighlight()}
      <g pointer-events="none">${t.rooms.map(e=>{let[n,i]=this.toScreen(ne(e.points));return H`<text class="fp3d-room-name" x=${n} y=${i-2}>${e.name}</text>
          <text class="fp3d-room-area" x=${n} y=${i+14}>${this.area(Rt(e.points))}</text>`})}</g>
    `}renderEdgeHighlight(){let t=this.room,e=this._edgeHi;if(!t||e===null||e>=t.points.length)return $;let[n,i]=this.toScreen(t.points[e]),[o,s]=this.toScreen(t.points[(e+1)%t.points.length]);return H`<line class="fp3d-edge-hi" pointer-events="none" x1=${n} y1=${i} x2=${o} y2=${s} />`}renderMeter(t){var o;let e=(o=this._doc.energy)==null?void 0:o.meter;if(!e||e.floor_id!==t.id)return $;let[n,i]=this.toScreen([e.x,e.z]);return H`<g class="fp3d-meter" transform="translate(${n} ${i})" pointer-events="none">
      <rect x="-11" y="-11" width="22" height="22" rx="5" />
      <path d="M1.5 -7 L-4 1 H0 L-1.5 7 L4 -1 H0 Z" />
    </g>`}renderFurniture(t){let e=this._view.scale,n=this._furnitureId?this.selection():[],i=n.length>1;return H`<g>${this.renderSelectionFrame(t,n)}${t.furniture.map(o=>{var v,y;let s=n.includes(o.id),a=o.id===this._furnitureId&&!i,[l,d]=this.toScreen([o.x,o.z]),c=Math.min(o.w,o.d)*e>44,u=o.rotation*Math.PI/180,p=o.d/2+Math.max(.3,26/e),[h,f]=this.toScreen([o.x-Math.sin(u)*p,o.z+Math.cos(u)*p]),[m,_]=this.toScreen([o.x-Math.sin(u)*(o.d/2),o.z+Math.cos(u)*(o.d/2)]),b=Yt(o.type)&&!!o.entity&&o.entity!=="none"&&((y=(v=this.hass)==null?void 0:v.states[o.entity])==null?void 0:y.state)==="on";return H`<g data-furniture=${o.id} class=${`fp3d-furn${a||s?" fp3d-furn-sel":""}${b?" fp3d-furn-lit":""}${ye.includes(o.type)?" fp3d-energy-item":""}`}>
        <g transform="translate(${l} ${d}) rotate(${o.rotation}) scale(${o.mirror?-e:e} ${e})">
          <rect class="fp3d-furn-body" x=${-o.w/2} y=${-o.d/2} width=${o.w} height=${o.d} />
          <g class="fp3d-furn-sym">${yl(o.type,o.w,o.d)}</g>
          <line class="fp3d-furn-front" x1=${-o.w/2} y1=${o.d/2} x2=${o.w/2} y2=${o.d/2} />
        </g>
        ${c?H`<text x=${l} y=${d+4}>${Pe(this.hass,o.type)}</text>`:$}
      </g>
      ${a&&this.isAdmin&&!o.locked?[[-1,-1],[1,-1],[1,1],[-1,1]].map(([x,P])=>{let[A,F]=this.toScreen([o.x+x*o.w*Math.cos(u)/2-P*o.d*Math.sin(u)/2,o.z+x*o.w*Math.sin(u)/2+P*o.d*Math.cos(u)/2]);return H`<g class="fp3d-resize" data-resize=${`${o.id}:${x}:${P}`}>
              <circle cx=${A} cy=${F} r="14" class="fp3d-hit" />
              <rect x=${A-5} y=${F-5} width="10" height="10" rx="2" />
            </g>`}):$}
      ${a?(()=>{let[x,P]=this.toScreen([o.x+Math.sin(u)*(o.d/2+18/e),o.z-Math.cos(u)*(o.d/2+18/e)]);return H`<text class="fp3d-dim" x=${x} y=${P+4}>${this.m(o.w,2)} × ${this.m(o.d,2)}</text>`})():$}
      ${a&&o.locked?H`<text class="fp3d-lock" x=${h} y=${f+5}>🔒</text>`:$}
      ${a&&this.isAdmin&&!o.locked?H`<g class="fp3d-rotate" data-rotate=${o.id}>
            <line x1=${m} y1=${_} x2=${h} y2=${f} />
            <circle cx=${h} cy=${f} r="16" class="fp3d-hit" />
            <circle cx=${h} cy=${f} r="8" />
            <path d="M${h-4} ${f-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}`})}</g>`}renderSelectionFrame(t,e){let n=this.drag,i=(n==null?void 0:n.kind)==="marquee"?H`<rect class="fp3d-marquee" x=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[0]))} y=${Math.min(...[n.start,n.end].map(u=>this.toScreen(u)[1]))} width=${Math.abs(this.toScreen(n.end)[0]-this.toScreen(n.start)[0])} height=${Math.abs(this.toScreen(n.end)[1]-this.toScreen(n.start)[1])} />`:$;if(e.length<2)return i;let o=t.furniture.filter(u=>e.includes(u.id)).flatMap(u=>Wt(u));if(!o.length)return i;let[s,a]=this.toScreen([Math.min(...o.map(u=>u[0])),Math.min(...o.map(u=>u[1]))]),[l,d]=this.toScreen([Math.max(...o.map(u=>u[0])),Math.max(...o.map(u=>u[1]))]),c=!this._multi.length;return H`${i}<g class=${`fp3d-selframe${c?" fp3d-selframe-block":""}`}>
      <rect x=${s-6} y=${a-6} width=${l-s+12} height=${d-a+12} rx="6" />
      <text x=${s-4} y=${a-12}>${c?`\u25A3 ${this.t("block_title")} \xB7 ${e.length}`:this.t("multi_title",{n:e.length})}</text>
    </g>`}renderBlockForm(){var s,a;let t=this.selection(),e=(((s=this.floor)==null?void 0:s.furniture)??[]).filter(l=>t.includes(l.id)),n=!this._multi.length&&!!((a=e[0])!=null&&a.group),i=e.every(l=>this.isFixedItem("furniture",l.id)),o=!i&&e.some(l=>this.isFixedItem("furniture",l.id));return g`<section>
      <div class="fp3d-h3row"><h3>${n?`\u25A3 ${this.t("block_title")}`:this.t("multi_title",{n:e.length})}</h3></div>
      <p class="fp3d-sub">${this.t(n?"block_hint":"multi_hint")}</p>
      ${o?g`<p class="fp3d-sub fp3d-wv-fixnote">${this.t("block_some_fixed")}</p>`:$}
      <div class="fp3d-block-parts">
        ${e.map(l=>g`<button class="fp3d-chip" title=${this.t("block_part_edit")} @click=${()=>{this.selectItem("furniture",l.id),this._single=!!l.group}}>${l.name||Pe(this.hass,l.type)}</button>`)}
      </div>
      <div class="fp3d-actions">
        ${n?g`<button class="fp3d-btn" @click=${()=>this.ungroupSelection()}>${this.t("block_break")}</button>`:g`<button class="fp3d-btn fp3d-primary" @click=${()=>this.groupSelection()}>▣ ${this.t("block_make")}</button>`}
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(-90)}>${this.t("rotate_left")}</button>
        <button class="fp3d-btn" @click=${()=>this.rotateSelection(90)}>${this.t("rotate_right")}</button>
        <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
        <button class="fp3d-btn ${o?"fp3d-primary":""}" @click=${()=>this.lockSelection(!i&&!o)}>${i?`\u{1F513} ${this.t("unfix")}`:o?`\u{1F513} ${this.t("unfix_all")}`:`\u{1F512} ${this.t("fix")}`}</button>
        <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
      </div>
      ${this.renderMultiToggle()}
    </section>`}renderMultiToggle(){return g`<label class="fp3d-check fp3d-multi-toggle"><input type="checkbox" .checked=${this._multiMode} @change=${t=>this._multiMode=t.target.checked} /> ${this.t("multi_mode")}</label>`}renderOpenings(t,e){return H`<g>${t.openings.map(n=>{let i=Ce(n,t.rooms,t.walls??[]);if(!i)return $;let{room:o,edge:s}=i,a=Bn(e,n,i),l=Oe(o,s,n.offset-n.width/2),d=Oe(o,s,n.offset+n.width/2),c=(d[0]-l[0])/(n.width||1),u=(d[1]-l[1])/(n.width||1),p=St(o.points)>=0?1:-1,h=[-u*p,c*p],f=[.06,.06];a&&(f=a.wall.free||a.wall.roomLeft===o.id?[a.wall.left,a.wall.right]:[a.wall.right,a.wall.left]);let m=(T,S)=>this.toScreen([T[0]+h[0]*S,T[1]+h[1]*S]),_=[m(l,f[0]+.01),m(d,f[0]+.01),m(d,-f[1]-.01),m(l,-f[1]-.01)],b=n.id===this._openingId,v=Pi(n,(a==null?void 0:a.wall.exterior)??!1),y=n.type==="door"&&Wo(v),x=`fp3d-open fp3d-open-${n.type}${y?" fp3d-open-front":""}${b?" fp3d-open-sel":""}`,P;if(n.type==="garage"){let T=m(l,f[0]-.04),S=m(d,f[0]-.04),M=m(l,f[0]+Math.min(2,n.height)),w=m(d,f[0]+Math.min(2,n.height));P=H`<line x1=${T[0]} y1=${T[1]} x2=${S[0]} y2=${S[1]} />
          <path class="fp3d-open-track" d="M${T[0]} ${T[1]}L${M[0]} ${M[1]}M${S[0]} ${S[1]}L${w[0]} ${w[1]}" />`}else if(n.type==="door"){let T=n.swing==="out",S=T?-f[1]:f[0],M=n.hinge==="left"==p>0,w=n.leaves===2,k=l,E=d,I=[],C=Ba(n.width,v,M,n);if(C){let Q=J=>J<=.02?l:J>=n.width-.02?d:Oe(o,s,n.offset-n.width/2+J);k=Q(C.x0),E=Q(C.x1),I=C.panels.map(([J,it])=>[Q(J),Q(it)])}let O=[(k[0]+E[0])/2,(k[1]+E[1])/2],D=(w?.5:1)*Math.hypot(E[0]-k[0],E[1]-k[1]),j=(f[0]-f[1])/2,U=I.map(([Q,J])=>{let it=m(Q,j+.035),q=m(J,j+.035),lt=m(Q,j-.035),It=m(J,j-.035);return H`<line class="fp3d-open-pane" x1=${it[0]} y1=${it[1]} x2=${q[0]} y2=${q[1]} /><line class="fp3d-open-pane" x1=${lt[0]} y1=${lt[1]} x2=${It[0]} y2=${It[1]} />`}),G=(Q,J)=>{let[it,q]=m(Q,S),[lt,It]=m(J,S),te=m(Q,S+(T?-D:D)),B=D*this._view.scale,pt=(te[0]-it)*(It-q)-(te[1]-q)*(lt-it);return H`<path d="M${it} ${q}L${te[0]} ${te[1]}A${B} ${B} 0 0 ${pt>0?1:0} ${lt} ${It}" />`};P=H`${U}${v==="passage"?H`<line class="fp3d-open-passage" x1=${m(l,j)[0]} y1=${m(l,j)[1]} x2=${m(d,j)[0]} y2=${m(d,j)[1]} />`:v==="sliding"?H`<line x1=${m(k,S)[0]} y1=${m(k,S)[1]} x2=${m(E,S)[0]} y2=${m(E,S)[1]} />`:w?H`${G(k,O)}${G(E,O)}`:G(M?k:E,M?E:k)}`}else{let T=(f[0]-f[1])/2,S=m(l,T+.035),M=m(d,T+.035),w=m(l,T-.035),k=m(d,T-.035),E=[(l[0]+d[0])/2,(l[1]+d[1])/2],I=m(E,f[0]),C=m(E,-f[1]);P=H`<line x1=${S[0]} y1=${S[1]} x2=${M[0]} y2=${M[1]} /><line x1=${w[0]} y1=${w[1]} x2=${k[0]} y2=${k[1]} />${n.leaves===2?H`<line x1=${I[0]} y1=${I[1]} x2=${C[0]} y2=${C[1]} />`:$}`}let A=m(l,(f[0]-f[1])/2),F=m(d,(f[0]-f[1])/2);return H`<g data-opening=${n.id} class=${x}>
        <line class="fp3d-open-hit" x1=${A[0]} y1=${A[1]} x2=${F[0]} y2=${F[1]} />
        <polygon class="fp3d-open-gap" points=${_.map(T=>T.join(",")).join(" ")} />
        ${P}
      </g>`})}</g>`}renderDevices(t){return H`<g>${t.placements.map(e=>{var d,c;let n=rt(e.entity_id);if(!n)return $;let[i,o]=this.toScreen([e.x,e.z]),s=((c=(d=this.hass)==null?void 0:d.states[e.entity_id])==null?void 0:c.state)==="on",a=e.entity_id===this._deviceId,l=`fp3d-device${s?" fp3d-device-on":""}${a?" fp3d-device-sel":""}`;return H`${n==="camera"?this.renderCameraWedge(e,a):$}<g data-device=${e.entity_id} class=${l} transform="translate(${i} ${o})">
        <title>${_t(this.hass,e.entity_id)}</title>
        <circle r="18" class="fp3d-hit" /><circle r="12" />
        <path d=${Gn(n)} transform="translate(-7.2 -7.2) scale(0.6)" />
      </g>
      ${a&&e.locked?H`<text class="fp3d-lock" x=${i+16} y=${o-12}>🔒</text>`:$}`})}</g>`}renderCameraWedge(t,e){let n=t.mount==="ceiling",i=t.fov??(n?360:90),o=t.reach??(n?3:4.5),s=(t.rotation??0)*Math.PI/180,a=(y,x)=>this.toScreen([t.x-Math.sin(s+y)*x,t.z+Math.cos(s+y)*x]),[l,d]=this.toScreen([t.x,t.z]),c=Math.min(i,359.9)*Math.PI/180/2,[u,p]=a(-c,o),[h,f]=a(c,o),m=o*this._view.scale,_=i>=360?"":`M${l} ${d}L${u} ${p}A${m} ${m} 0 ${c>Math.PI/2?1:0} 1 ${h} ${f}Z`,[b,v]=a(0,o);return H`<g class="fp3d-wedge ${e?"fp3d-wedge-sel":""}">
      ${i>=360?H`<circle cx=${l} cy=${d} r=${m} />`:H`<path d=${_} />`}
      ${e&&this.isAdmin&&!t.locked?H`<g class="fp3d-rotate" data-aim=${t.entity_id}>
            <line x1=${l} y1=${d} x2=${b} y2=${v} />
            <circle cx=${b} cy=${v} r="16" class="fp3d-hit" />
            <circle cx=${b} cy=${v} r="8" />
            <path d="M${b-4} ${v-1}a4 4 0 1 1 2 3.5" />
          </g>`:$}
    </g>`}renderHandles(t){let e=t.points,n=e.length,i=e.map((s,a)=>{let l=e[(a+1)%n],[d,c]=this.toScreen(s),[u,p]=this.toScreen(l),h=Math.hypot(l[0]-s[0],l[1]-s[1]),f=(d+u)/2,m=(c+p)/2,[_,b]=this.toScreen(ne(e)),v=-(p-c),y=u-d,x=Math.hypot(v,y)||1;v/=x,y/=x,v*(f-_)+y*(m-b)<0&&(v=-v,y=-y);let P=Math.hypot(u-d,p-c);return H`
        ${P>50?Math.abs(v)>Math.abs(y)?H`<text class="fp3d-dim" style="text-anchor:${v>0?"start":"end"}" x=${f+v*13} y=${m+y*13+4}>${this.m(h,2)}</text>`:H`<text class="fp3d-dim" x=${f+v*16} y=${m+y*16+4}>${this.m(h,2)}</text>`:$}
        ${P>36?H`<g data-mid=${a} class="fp3d-mid"><circle cx=${f} cy=${m} r="14" class="fp3d-hit" /><circle cx=${f} cy=${m} r="6" /><path d="M${f-3} ${m}h6M${f} ${m-3}v6" /></g>`:$}
      `}),o=e.map((s,a)=>{let[l,d]=this.toScreen(s);return H`<g data-vertex=${a} class=${a===this._vertex?"fp3d-vertex fp3d-vertex-sel":"fp3d-vertex"}><circle cx=${l} cy=${d} r="16" class="fp3d-hit" /><circle cx=${l} cy=${d} r="6" /></g>
        <text class="fp3d-vertex-no" x=${l+9} y=${d-9}>${a+1}</text>`});return H`<g>${i}${o}</g>`}renderDraft(){let t=this.drag;if((t==null?void 0:t.kind)==="freewall"){let[i,o]=this.toScreen(t.start),[s,a]=this.toScreen(t.end),l=Math.hypot(t.end[0]-t.start[0],t.end[1]-t.start[1]);return H`<g pointer-events="none">
        <line class="fp3d-draft fp3d-draft-wall" x1=${i} y1=${o} x2=${s} y2=${a} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${(o+a)/2-10}>${this.m(l,2)}</text>
      </g>`}if((t==null?void 0:t.kind)==="rect"){let[i,o]=this.toScreen(t.start),[s,a]=this.toScreen(t.end),l=Math.abs(t.end[0]-t.start[0]),d=Math.abs(t.end[1]-t.start[1]);return H`<g pointer-events="none">
        <rect class="fp3d-draft" x=${Math.min(i,s)} y=${Math.min(o,a)} width=${Math.abs(s-i)} height=${Math.abs(a-o)} />
        <text class="fp3d-dim" x=${(i+s)/2} y=${Math.min(o,a)-8}>${this.m(l,2)} × ${this.m(d,2)}</text>
      </g>`}if(this._tool!=="polygon"&&this._tool!=="measure"&&!this.drawingPoints)return $;let e=[...this._draft,...this._cursor&&this._draft.length?[this._cursor]:[]],n=e.map(i=>this.toScreen(i));return H`<g pointer-events="none">
      ${n.length>1?H`<polyline class="fp3d-draft" points=${n.map(i=>i.join(",")).join(" ")} />`:$}
      ${n.slice(1).map((i,o)=>{let s=n[o];return Math.hypot(i[0]-s[0],i[1]-s[1])<30?$:H`<text class="fp3d-dim" x=${(s[0]+i[0])/2} y=${(s[1]+i[1])/2-6}>${this.m(Math.hypot(e[o+1][0]-e[o][0],e[o+1][1]-e[o][1]),2)}</text>`})}
      ${this._draft.map((i,o)=>{let[s,a]=this.toScreen(i);return H`<circle class=${o===0&&this._draft.length>=3?"fp3d-draft-pt fp3d-draft-first":"fp3d-draft-pt"} cx=${s} cy=${a} r=${o===0&&this._draft.length>=3?9:5} />`})}
      ${this._cursor?H`<circle class="fp3d-cursor" cx=${this.toScreen(this._cursor)[0]} cy=${this.toScreen(this._cursor)[1]} r="4" />`:$}
    </g>`}renderGuides(){let t=this._guides,{w:e,h:n}=this._size;return H`<g pointer-events="none">
      ${t.x!==void 0?H`<line class="fp3d-guide" x1=${this.toScreen([t.x,0])[0]} y1="0" x2=${this.toScreen([t.x,0])[0]} y2=${n} />`:$}
      ${t.z!==void 0?H`<line class="fp3d-guide" x1="0" y1=${this.toScreen([0,t.z])[1]} x2=${e} y2=${this.toScreen([0,t.z])[1]} />`:$}
      ${t.point?H`<circle class="fp3d-snap" cx=${this.toScreen(t.point)[0]} cy=${this.toScreen(t.point)[1]} r="9" />`:$}
    </g>`}get unit(){return as(this.hass,this._doc.settings.units)}m(t,e=2){return Al(t,this.unit,n=>Bt(this.hass,n,e))}area(t){return zl(Math.abs(t),this.unit,e=>Bt(this.hass,e,1))}lenValue(t){return this.unit==="imperial"?on(t):String(z(t))}readLen(t){if(this.unit==="imperial")return ls(t,"imperial");let e=parseFloat(t.replace(",","."));return Number.isFinite(e)?e:null}len(t,e,n,i=.01,o){return this.unit!=="imperial"?this.num(t,e,n,i,o):g`<label class="fp3d-field"
      >${qn(t,"imperial")}
      <input
        type="text"
        inputmode="text"
        spellcheck="false"
        .value=${on(e)}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=s.target,l=ls(a.value,"imperial");l!==null?n(o!==void 0?Math.max(o,l):l):a.value=on(e)}}
    /></label>`}num(t,e,n,i=.01,o){return g`<label class="fp3d-field"
      >${t}
      <input
        type="number"
        inputmode="decimal"
        step=${i}
        min=${o??$}
        .value=${String(z(e))}
        ?disabled=${!this.isAdmin}
        @change=${s=>{let a=parseFloat(s.target.value.replace(",","."));Number.isFinite(a)&&n(a)}}
    /></label>`}rightPress=null;rightUp=-1e9;lastTap=null;doubleTap(t,e){var o;let n=performance.now(),i=t.detail>=2||((o=this.lastTap)==null?void 0:o.key)===e&&n-this.lastTap.at<450;return this.lastTap=i?null:{key:e,at:n},i}selectFrom3d(t,e){this.selectItem(t,e),this._sideOpen=!1}setSidePinned(t){this._sidePinned=t,this._sideOpen=!1;try{localStorage.setItem("neonplan3d.sidePinned",t?"1":"0")}catch{}}setSideFolded(t){if(this._split&&!this._sidePinned){this._sideOpen=!t;return}this._sideMin=t;try{localStorage.setItem("neonplan3d.sideMin",t?"1":"0")}catch{}}renderSideGrip(){if(this.narrow)return $;let t=n=>{this.sideDrag&&(this._sideWidth=Math.min(640,Math.max(280,Math.round(this.sideDrag.width+(this.sideDrag.x-n.clientX)))))},e=n=>{if(this.sideDrag){this.sideDrag=null,n.currentTarget.releasePointerCapture(n.pointerId);try{localStorage.setItem("neonplan3d.sideWidth",String(this._sideWidth))}catch{}}};return g`<div
      class="fp3d-side-grip"
      title=${this.t("side_resize")}
      @pointerdown=${n=>{this.sideDrag={x:n.clientX,width:this._sideWidth},n.currentTarget.setPointerCapture(n.pointerId),n.preventDefault()}}
      @pointermove=${t}
      @pointerup=${e}
      @pointercancel=${e}
    ></div>`}renderAside(t){let e=this._split&&!this._sidePinned&&!this.narrow;return!this.narrow&&(e?!this._sideOpen:this._sideMin)?g`<aside class="fp3d-side fp3d-side-strip">
        <button class="fp3d-strip-btn" title=${this.t("side_open")} @click=${()=>this.setSideFolded(!1)}>‹</button>
        ${this._furnitureId||this._deviceId||this._openingId||this._roomId?g`<button class="fp3d-strip-btn fp3d-strip-hot" title=${this.t("side_details")} @click=${()=>this.setSideFolded(!1)}>⚙</button>`:$}
      </aside>`:e?g`<aside class="fp3d-side fp3d-side-strip"></aside>
      <aside class="fp3d-side fp3d-side-overlay">
        ${this.renderSideGrip()}
        ${this.renderPinRow(!0)}
        ${this.renderSide(t)}
      </aside>`:g`<aside class="fp3d-side">${this.renderSideGrip()}${this.renderPinRow()}${this.renderSide(t)}</aside>`}renderPinRow(t=!1){if(this.narrow)return $;let e=g`<button class="fp3d-btn" title=${this.t("side_fold_hint")} @click=${()=>this.setSideFolded(!0)}>${this.t("side_close")} ›</button>`;return this._split?g`<div class="fp3d-pin-row">
      ${e}
      <button class="fp3d-btn" aria-pressed=${this._sidePinned} title=${this.t("side_pin_hint")} @click=${()=>this.setSidePinned(!this._sidePinned)}>
        📌 ${this.t(this._sidePinned?"side_pinned":"side_pin")}
      </button>
    </div>`:g`<div class="fp3d-pin-row">${e}</div>`}renderSide(t){var a,l,d,c;let e=((a=this._doc)==null?void 0:a.floors)??[],n=this.room,i=this.isAdmin,o=Object.values(((l=this.hass)==null?void 0:l.areas)??{}).sort((u,p)=>u.name.localeCompare(p.name));if(this._tool==="roof")return this.renderRoofPanel();if(this._tool==="energy")return this.renderEnergyPanel();if(this._tool==="pool")return this.renderPoolPanel(t);if(this._tool==="furniture"&&t&&i)return g`${this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):$} ${this.renderFurnitureLibrary()}`;let s=this._tool==="measure"?null:this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.opening?this.renderOpeningForm(this.opening):this.device?this.renderDeviceForm(this.device):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.freeWall?this.renderFreeWallForm(this.freeWall):null;return s?g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",this._roomId)}>‹ ${this.t(n?"back_to_room":"back_to_floor",{room:(n==null?void 0:n.name)??""})}</button>
        ${s}`:n&&this._tool!=="measure"?g`<button class="fp3d-btn fp3d-back" @click=${()=>this.selectItem("room",null)}>‹ ${this.t("back_to_floor")}</button>
        ${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:g`
      ${i?$:g`<p class="fp3d-note">${this.t("read_only")}</p>`}
      <section>
        <h3>${t?this.t("floor_settings_of",{floor:t.name}):this.t("floors")}</h3>
        ${e.length?$:g`<p class="fp3d-sub">${this.t("floor_none_hint")}</p>`}
        ${i&&t?g`<button class="fp3d-btn" aria-pressed=${!!this._doc.settings.lock_plan} title=${this.t("lock_plan_hint")} @click=${()=>this.toggleLockPlan()}>
              ${this.t(this._doc.settings.lock_plan?"plan_unlock":"plan_lock")}
            </button>`:$}
        ${t?g`<div class="fp3d-form">
              <label class="fp3d-field fp3d-wide"
                >${this.t("floor_name")}
                <input .value=${t.name} ?disabled=${!i} @change=${u=>this.updateFloor({name:u.target.value})}
              /></label>
              ${this.len(this.t("elevation"),t.elevation,u=>this.updateFloor({elevation:u}))}
              ${i?g`<div class="fp3d-field fp3d-wide fp3d-shift" title=${this.t("floor_shift_hint")}>
                    <span>${this.t("floor_shift")}</span>
                    <input type="number" step="0.05" .value=${String(this._shiftX)} aria-label="X" @change=${u=>this._shiftX=Number(u.target.value)||0} />
                    <input type="number" step="0.05" .value=${String(this._shiftZ)} aria-label="Z" @change=${u=>this._shiftZ=Number(u.target.value)||0} />
                    <button class="fp3d-btn" ?disabled=${!this._shiftX&&!this._shiftZ} @click=${()=>this.shiftFloor(this._shiftX,this._shiftZ)}>${this.t("floor_shift_apply")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_turn_hint")} @click=${()=>this.turnFloor()}>${this.t("floor_turn")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_start_view_hint")} @click=${()=>this.rememberFloorView()}>${this.t("floor_start_view")}</button>
                    ${t.start_view?g`<button class="fp3d-btn" title=${this.t("floor_start_view_reset")} @click=${()=>this.updateFloor({start_view:null})}>↺</button>`:$}
                    <label class="fp3d-check fp3d-wide" title=${this.t("floor_shift_all_hint")}
                      ><input type="checkbox" .checked=${this._shiftAll} @change=${u=>this._shiftAll=u.target.checked} />
                      ${this.t("floor_shift_all")}</label
                    >
                  </div>`:$}
              ${this.len(this.t("height"),t.height,u=>this.updateFloor({height:Math.max(1,u)}),.05,1)}
              ${Object.keys(((d=this.hass)==null?void 0:d.floors)??{}).length?g`<label class="fp3d-field fp3d-wide"
                    >${this.t("ha_floor")}
                    <select ?disabled=${!i} @change=${u=>this.updateFloor({ha_floor:u.target.value||null})}>
                      <option value="" ?selected=${!t.ha_floor}>${this.t("no_ha_floor")}</option>
                      ${Object.values(((c=this.hass)==null?void 0:c.floors)??{}).filter(u=>u.floor_id===t.ha_floor||!e.some(p=>p.ha_floor===u.floor_id)).map(u=>g`<option value=${u.floor_id} ?selected=${u.floor_id===t.ha_floor}>${u.name}</option>`)}
                    </select></label
                  >`:$}
              ${i&&this.unplacedAreas(t).length?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn fp3d-primary" title=${this.t("area_rooms_hint")} @click=${()=>this.addAreaRooms(t)}>
                      ${this.t("area_rooms",{n:this.unplacedAreas(t).length})}
                    </button>
                  </div>`:$}
              ${i?g`<div class="fp3d-actions fp3d-wide">
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${()=>this.moveFloor(1)}>${this.t("move_up")}</button>
                    <button class="fp3d-btn" title=${this.t("floor_order_hint")} @click=${()=>this.moveFloor(-1)}>${this.t("move_down")}</button>
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
                  ${this._notice?g`<p class="fp3d-sub fp3d-wide fp3d-notice">${this._notice}</p>`:$}`:$}
            </div>`:$}
      </section>
      ${this._tool==="measure"&&t?this.renderMeasureForm():this.freeWall?this.renderFreeWallForm(this.freeWall):this.outdoorArea?this.renderOutdoorForm(this.outdoorArea):this.opening?this.renderOpeningForm(this.opening):this.furnitureItem?this.renderFurnitureForm(this.furnitureItem):this.device?this.renderDeviceForm(this.device):n?g`${this.renderRoomForm(n,o)} ${this.renderDeviceList(n)}`:t?this.renderRoomList(t):$}
      ${this.renderHelpLinks()}
      ${i&&!1?this.renderPresenceSettings():$}
      ${t&&i?this.renderBackgroundForm(t):$}
    `}moveRoom(t,e){this.change((n,i)=>{let o=i.rooms.findIndex(l=>l.id===t),s=o+e;if(o<0||s<0||s>=i.rooms.length)return;let[a]=i.rooms.splice(o,1);i.rooms.splice(s,0,a)})}renderRoomList(t){return t.rooms.length?g`<section>
      <h3>${this.t("rooms")}</h3>
      <div class="fp3d-room-list">
        ${t.rooms.map((e,n)=>g`<div class="fp3d-row fp3d-dev-row">
            <button class="fp3d-row fp3d-room-btn" @click=${()=>this.selectItem("room",e.id)}>
              <span>${e.name}</span><span class="fp3d-muted">${this.area(Rt(e.points))}</span>
            </button>
            ${this.isAdmin&&t.rooms.length>1?g`<button class="fp3d-pin" title=${this.t("room_order_up")} ?disabled=${n===0} @click=${()=>this.moveRoom(e.id,-1)}>↑</button>
                  <button class="fp3d-pin" title=${this.t("room_order_down")} ?disabled=${n===t.rooms.length-1} @click=${()=>this.moveRoom(e.id,1)}>↓</button>`:$}
          </div>`)}
      </div>
    </section>`:$}renderRoomOpenings(t){var n;let e=(((n=this.floor)==null?void 0:n.openings)??[]).filter(i=>i.room_id===t.id);return e.length?g`<details class="fp3d-points">
      <summary>${this.t("room_openings")} (${e.length})</summary>
      <div class="fp3d-room-list">
        ${e.map(i=>g`<button class="fp3d-row" @click=${()=>{var o;return this.selectItem("opening",i.id),(o=this.renderRoot.querySelector(".fp3d-side"))==null?void 0:o.scrollTo(0,0)}}>
            <span>${this.t(`preset_${zi(i)}`)}</span><span class="fp3d-muted">${this.m(i.width,2)}</span>
          </button>`)}
      </div>
    </details>`:$}renderRoomForm(t,e){let n=this.isAdmin,i=Fi(t.points),o=zt(t.points);return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("room")}</h3>${this.fixButton("room",t.id)}</div>
      <button class="fp3d-btn fp3d-wv-open" title=${this.t("wall_view_open")} @click=${()=>this.openRoomWalls(t)}>▦ ${this.t("wall_view_room")}</button>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("room_name")}
          <input .value=${t.name} ?disabled=${!n} @change=${s=>this.updateRoom({name:s.target.value})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!n} placeholder=${this.t("aliases_placeholder")} @change=${s=>this.updateRoom({aliases:Ei(s.target.value)})}
        /></label>
        <label class="fp3d-field fp3d-wide"
          >${this.t("area")}
          <select ?disabled=${!n} @change=${s=>this.setArea(s.target.value)}>
            <option value="" ?selected=${!t.area_id}>${this.t("no_area")}</option>
            ${e.map(s=>g`<option value=${s.area_id} ?selected=${s.area_id===t.area_id}>${s.name}</option>`)}
          </select></label
        >
        <label class="fp3d-field fp3d-wide"
          >${this.t("material")}
          <select ?disabled=${!n} @change=${s=>this.updateRoom({floor_material:s.target.value})}>
            ${La.map(s=>g`<option value=${s} ?selected=${s===t.floor_material}>${this.t(`mat_${s}`)}</option>`)}
          </select></label
        >
        ${i?g`${this.len(this.t("x"),o.x0,s=>this.setRect("x",s))} ${this.len(this.t("z"),o.z0,s=>this.setRect("z",s))}
            ${this.len(this.t("width"),o.x1-o.x0,s=>this.setRect("w",s),.01,.05)}
            ${this.len(this.t("depth"),o.z1-o.z0,s=>this.setRect("d",s),.01,.05)}`:$}
      </div>
      <div class="fp3d-form">
        <label class="fp3d-field" title=${this.t("room_ceiling_hint")}
          >${qn(this.t("room_ceiling"),this.unit)}
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
        ${t.start_view?g`<button class="fp3d-btn" title=${this.t("room_start_view_reset")} ?disabled=${!n} @click=${()=>this.updateRoom({start_view:null})}>↺</button>`:$}
      </div>
      <p class="fp3d-sub" title=${this.t("room_area_net_hint")}>${this.t("room_area_net",{a:this.area(Rt(t.points)),n:this.area(El(t,this.floor,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior}))})}</p>
      <p class="fp3d-sub fp3d-room-id">${this.t("room_id")} <code title=${this.t("license_copy")} @click=${()=>{var s;(s=navigator.clipboard)==null?void 0:s.writeText(t.id).catch(()=>{})}}>${t.id}</code></p>
      ${this.renderEdgeHeights(t)} ${this.renderRoomClimate(t)} ${this.renderRoomOpenings(t)}
      <details class="fp3d-points" ?open=${!i}>
        <summary>${this.t("points")} (${t.points.length})</summary>
        ${t.points.map((s,a)=>g`<div class="fp3d-point ${a===this._vertex?"fp3d-point-sel":""}">
            <span class="fp3d-muted">${a+1}</span>
            ${this.len(this.t("x"),s[0],l=>this.setPoint(a,0,l))} ${this.len(this.t("z"),s[1],l=>this.setPoint(a,1,l))}
            ${n?g`<button class="fp3d-btn" title=${this.t("delete_point")} ?disabled=${t.points.length<=3} @click=${()=>this.deleteVertex(a)}>
                  ×
                </button>`:$}
          </div>`)}
      </details>
      ${n?g`<div class="fp3d-actions">
            <button class="fp3d-btn fp3d-primary" @click=${()=>this._packages=!this._packages}>${this.t("pkg_open")}</button>
            <button class="fp3d-btn" @click=${()=>this.openSpotForm(t)}>${this.t("spots_place")}</button>
            <button class="fp3d-btn" @click=${()=>this.duplicateRoom()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteRoom()}>${this.t("delete")}</button>
          </div>`:$}
      ${this.renderModuleRoomFields(t)}
      ${this._spots?this.renderSpotForm(t):$}
      ${this._packages?g`<div class="fp3d-packages">
            ${md.map(s=>g`<button class="fp3d-btn" @click=${()=>this.applyPackage(t,s)}>
                <b>${this.t(`pkg_${s}`)}</b><span>${this.t(`pkg_${s}_desc`)}</span>
              </button>`)}
            <p class="fp3d-sub">${this.t("pkg_hint")}</p>
          </div>`:$}
    </section>`}applyPackage(t,e){if(!this.isAdmin)return;let n=gd(t,e,()=>tt("furniture"));this.change((i,o)=>o.furniture.push(...n)),this._packages=!1,this._notice=this.t("pkg_done",{n:n.length})}openSpotForm(t){let e=zt(t.points),n=this.hass?$e(this.hass,t.area_id).filter(i=>i.startsWith("light.")):[];this._spots={type:"lamp_downlight",rows:Math.max(1,Math.round((e.z1-e.z0)/1.2)),cols:Math.max(1,Math.round((e.x1-e.x0)/1.2)),entity:n[0]??null}}placeSpots(t){let e=this._spots;if(!e||!this.isAdmin)return;let[n,i,o]=de[e.type],s=jo(t,e.rows,e.cols).map(([a,l])=>({id:tt("furniture"),type:e.type,x:a,z:l,rotation:0,w:n,d:i,h:o,variant:null,entity:e.entity??"none",power:null}));this.change((a,l)=>l.furniture.push(...s)),this._spots=null,this._notice=this.t("spots_placed",{n:s.length})}renderSpotForm(t){let e=this._spots,n=jo(t,e.rows,e.cols).length,i=this.entityOptions(s=>/^(light|switch|input_boolean)\./.test(s)),o=s=>this._spots={...e,...s};return g`<div class="fp3d-form fp3d-spot-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("spots_type")}
        <select @change=${s=>o({type:s.target.value})}>
          ${["lamp_downlight","lamp_spot","lamp_panel","lamp_ceiling"].map(s=>g`<option value=${s} ?selected=${s===e.type}>${this.t(`furn_${s}`)}</option>`)}
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
    </div>`}iconInput(t,e){let n=t?t.startsWith("mdi:")?t:`mdi:${t}`:"";return g`<label class="fp3d-field fp3d-wide" title=${this.t("marker_icon_hint")}
      >${this.t("marker_icon")}
      <span class="fp3d-icon-row">
        <input type="text" placeholder="mdi:thermometer" .value=${t??""} ?disabled=${!this.isAdmin} @change=${i=>e(i.target.value.trim().replace(/^mdi:/,"")||null)} />
        ${n?Ir(`<ha-icon icon="${n.replace(/[^a-z0-9:-]/gi,"")}"></ha-icon>`):$}
      </span></label
    >`}markerSelect(t,e){return g`<label class="fp3d-field fp3d-wide" title=${this.t("marker_show_hint")}
      >${this.t("marker_show")}
      <select ?disabled=${!this.isAdmin} @change=${n=>e(n.target.value||null)}>
        <option value="" ?selected=${!t}>${this.t("marker_show_auto")}</option>
        ${va.map(n=>g`<option value=${n} ?selected=${n===t}>${this.t(`marker_show_${n}`)}</option>`)}
      </select></label
    >`}isOutageChoice=t=>{var e;return Kl((e=this.hass)==null?void 0:e.states[t])||t===this._doc.settings.outage_entity};_optionsMemo=new WeakMap;entityOptions(t){var o,s,a;let e=this._optionsMemo.get(t),n=Object.keys(((o=this.hass)==null?void 0:o.states)??{}).length;if(e&&e.entities===((s=this.hass)==null?void 0:s.entities)&&e.count===n)return e.options;let i=this.entityOptionsOf(t);return this._optionsMemo.set(t,{entities:(a=this.hass)==null?void 0:a.entities,count:n,options:i}),i}entityOptionsOf(t){var n;let e=i=>{var s,a,l;let o=this.hass?Qt(this.hass,i):null;return o?(l=(a=(s=this.hass)==null?void 0:s.areas)==null?void 0:a[o])==null?void 0:l.name:void 0};return Object.keys(((n=this.hass)==null?void 0:n.states)??{}).filter(t).map(i=>({id:i,label:`${_t(this.hass,i)}${e(i)?` \xB7 ${e(i)}`:""}`})).sort((i,o)=>i.label.localeCompare(o.label))}entitySelect(t,e,n,i,o){let s=n===void 0?null:n?this.t("entity_auto",{name:_t(this.hass,n)}):this.t("entity_auto_none"),a=[...s!==null?[{id:"__auto",label:s}]:[],{id:"none",label:this.t("entity_none")}];return g`<label class="fp3d-field fp3d-wide"
      >${t}
      <fp3d-entity-picker
        .options=${i}
        .fixed=${a}
        .value=${e===null?s!==null?"__auto":"none":e}
        .placeholder=${this.t("entity_search")}
        ?disabled=${!this.isAdmin}
        @change=${d=>{d.stopPropagation(),o(d.detail.value==="__auto"?null:d.detail.value)}}
      ></fp3d-entity-picker></label
    >`}openingIsExterior(t){var o;let e=this.floor,n=e?Ce(t,e.rooms,e.walls??[]):null;if(!e||!n)return!1;let i=At(e.rooms,{exterior:this._doc.settings.wall_exterior,interior:this._doc.settings.wall_interior},e.walls??[]);return((o=Bn(i.walls,t,n))==null?void 0:o.wall.exterior)??!1}renderSidelightFields(t){if(t.type!=="door")return $;let e=Pi(t,this.openingIsExterior(t));if(e!=="sidelight"&&e!=="sidelights")return $;let n=this.isAdmin,i=(o,s)=>g`<label class="fp3d-field"
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
    </label>`;return e==="sidelight"?g`<label class="fp3d-check" title=${this.t("sidelight_hinge_hint")}
            ><input type="checkbox" .checked=${!!t.sidelight_hinge} ?disabled=${!n} @change=${o=>this.updateOpening({sidelight_hinge:o.target.checked})} />
            ${this.t("sidelight_hinge")}</label
          >
          ${i("sidelight_width","sidelight_width")}`:g`${i("sidelight_width","sidelight_width_left")} ${i("sidelight_width2","sidelight_width_right")}`}renderStyleSelect(t){let e=t.type==="door"?Do:Vo,n=Pi({type:t.type,style:null},this.openingIsExterior(t)),i=t.style&&e.includes(t.style)?t.style:"";return g`<label class="fp3d-field fp3d-wide"
      >${this.t("opening_style")}
      <select ?disabled=${!this.isAdmin} @change=${o=>this.updateOpening({style:o.target.value||null})}>
        <option value="" ?selected=${!i}>${this.t("style_auto",{style:this.t(`style_${n}`)})}</option>
        ${e.map(o=>g`<option value=${o} ?selected=${o===i}>${this.t(`style_${o}`)}</option>`)}
      </select></label
    >`}renderOpeningForm(t){let e=this.isAdmin,n=t.type==="window",i=t.type==="garage",o=y=>{var P;if(!this.hass)return null;let x=structuredClone(this._doc.floors);for(let A of x)for(let F of A.openings)F.id===t.id&&(F[y]=null);return((P=es(this.hass,x).get(t.id))==null?void 0:P[y])??null},s=y=>{var x,P;return(P=(x=this.hass)==null?void 0:x.states[y])==null?void 0:P.attributes.device_class},a=this.entityOptions(y=>y.startsWith("cover.")),l=i?this.entityOptions(y=>y.startsWith("cover.")||Wn(y)):a,d=this.entityOptions(y=>{var x,P;return/^(sensor|number|input_number)\./.test(y)&&Number.isFinite(Number((P=(x=this.hass)==null?void 0:x.states[y])==null?void 0:P.state))}),c=y=>y.startsWith("binary_sensor.")&&["door","window","opening","garage_door",""].includes(s(y)??""),u=this.entityOptions(y=>{var x;return c(y)||Lt(y)&&ns((x=this.hass)==null?void 0:x.states[y])!==null||i&&/^(switch|input_boolean)\./.test(y)}),p=this.entityOptions(y=>{var P;let x=(P=this.hass)==null?void 0:P.states[y];return y.startsWith("binary_sensor.")?typeof(x==null?void 0:x.attributes.window_state)=="string":Lt(y)&&(ns(x)!==null||/griff|handle|fenster|window|drehgriff/i.test(`${y} ${_t(this.hass,y)}`))}),h=this.entityOptions(c),f=i?this.entityOptions(y=>c(y)||Gd.test(y)):u,m=i&&Gd.test(t.contact??"")&&!(t.cover&&t.cover!=="none")&&!o("cover"),_=y=>{let x=y===1,P=x?t.tilt:t.tilt2??null,A=x?t.contact:t.contact2,F=(x?t.sensor:t.sensor2)??(P&&P!=="none"?"contact_tilt":"contact"),T=S=>this.updateOpening(x?{contact:S}:{contact2:S==="none"?null:S});return g`<label class="fp3d-field fp3d-wide"
          >${this.t("sensor_kind")}
          <select
            ?disabled=${!e}
            @change=${S=>{let M=S.target.value,w=M==="contact_tilt"?{}:x?{tilt:null}:{tilt2:null};this.updateOpening({...x?{sensor:M}:{sensor2:M},...w})}}
          >
            ${["contact","handle","contact_tilt"].map(S=>g`<option value=${S} ?selected=${S===F}>${this.t(`sensor_kind_${S}`)}</option>`)}
          </select></label
        >
        ${F==="handle"?this.entitySelect(this.t("handle_entity"),A,void 0,p,S=>T(S==="none"?x?"none":null:S)):this.entitySelect(this.t("contact_entity"),A,x?o("contact"):void 0,h,T)}
        ${F==="contact_tilt"?this.entitySelect(this.t("tilt_entity"),P,void 0,u,S=>this.updateOpening(x?{tilt:S==="none"?null:S}:{tilt2:S==="none"?null:S})):$}
        ${x?g`${this.entitySelect(this.t("tilt_angle_entity"),t.tilt_angle??null,void 0,this.entityOptions(S=>Lt(S)),S=>this.updateOpening({tilt_angle:S==="none"?null:S}))}
            ${t.tilt_angle&&t.tilt_angle!=="none"?g`${this.num(this.t("tilt_angle_max"),t.tilt_max??15,S=>this.updateOpening({tilt_max:Math.min(90,Math.max(1,S))}),1,1)}
                ${this.num(this.t("tilt_angle_offset"),t.tilt_offset??0,S=>this.updateOpening({tilt_offset:S}),.5)}
                <label class="fp3d-check fp3d-wide"
                  ><input type="checkbox" .checked=${!!t.tilt_invert} ?disabled=${!e} @change=${S=>this.updateOpening({tilt_invert:S.target.checked})} />
                  ${this.t("tilt_angle_invert")}</label
                >`:$}`:$}`},b=zi(t),v=t.type==="door";return g`<section>
      <div class="fp3d-h3row"><h3>${this.t(`preset_${b}`)}</h3>${this.fixButton("opening",t.id)}</div>
      ${e?g`<div class="fp3d-presets" role="group" aria-label=${this.t("opening_type")}>
            ${Object.keys(Ai).map(y=>g`<button class="fp3d-chip" aria-pressed=${y===b} @click=${()=>this.setOpeningPreset(t,y)}>${this.t(`preset_${y}`)}</button>`)}
          </div>`:$}
      ${e&&!i?g`<div class="fp3d-actions">
            <button class="fp3d-btn" title=${this.t("flip_hinge_hint")} @click=${()=>this.updateOpening({hinge:t.hinge==="left"?"right":"left"})}>
              ⇆ ${this.t(t.leaves===2?"flip_main_leaf":"flip_hinge")}
            </button>
            ${v||n&&t.sill<.1?g`<button class="fp3d-btn" title=${this.t("flip_swing_hint")} @click=${()=>this.updateOpening({swing:t.swing==="out"?"in":"out"})}>
                  ⇅ ${this.t("flip_swing")}
                </button>`:$}
          </div>`:$}
      <div class="fp3d-form">
        ${this.len(this.t("width"),t.width,y=>this.updateOpening({width:Math.max(.3,y)}),.01,.3)}
        ${this.len(this.t("opening_position"),t.offset,y=>this.updateOpening({offset:Math.max(0,y)}),.01,0)}
        ${n?this.len(this.t("sill"),t.sill,y=>this.updateOpening({sill:Math.max(0,y)}),.01,0):$}
        ${this.len(this.t("opening_height"),t.height,y=>this.updateOpening({height:Math.max(.3,y)}),.01,.3)}
        ${n&&this.isAdmin?g`<div class="fp3d-actions fp3d-wide">
              <button
                class="fp3d-btn"
                title=${this.t("cellar_window_hint")}
                @click=${()=>{var x;let y=((x=this.floor)==null?void 0:x.height)??2.5;this.updateOpening({width:1,height:.5,sill:Math.max(0,Math.round((y-.75)*100)/100)})}}
              >
                ▭ ${this.t("cellar_window")}
              </button>
            </div>`:$}
        ${i?$:this.renderStyleSelect(t)}
        ${n?g`<label class="fp3d-field fp3d-wide" title=${this.t("sill_board_hint")}
              >${this.t("sill_board")}
              <select ?disabled=${!e} @change=${y=>this.updateOpening({sill_board:y.target.value||"auto"})}>
                ${ba.map(y=>g`<option value=${y} ?selected=${(t.sill_board??"auto")===y}>${this.t(`sill_board_${y}`)}</option>`)}
              </select></label
            >`:$}
        ${this.renderSidelightFields(t)}
        <label class="fp3d-field fp3d-wide" title=${this.t("opening_mark_hint")}
          >${this.t("opening_mark")}
          <select ?disabled=${!this.isAdmin} @change=${y=>this.updateOpening({mark:y.target.value==="closed"?"closed":null})}>
            <option value="" ?selected=${t.mark!=="closed"}>${this.t("opening_mark_open")}</option>
            <option value="closed" ?selected=${t.mark==="closed"}>${this.t("opening_mark_closed")}</option>
          </select></label
        >
        ${i?$:g`<label class="fp3d-field fp3d-wide"
          >${this.t(t.leaves===2?"main_leaf":"hinge")}
          <select ?disabled=${!e} @change=${y=>this.updateOpening({hinge:y.target.value})}>
            <option value="left" ?selected=${t.hinge==="left"}>${this.t("hinge_left")}</option>
            <option value="right" ?selected=${t.hinge==="right"}>${this.t("hinge_right")}</option>
          </select></label
        >`}
        ${n||i||v?this.entitySelect(this.t(n?"cover_entity":"door_cover"),t.cover,o("cover"),i?l:a,y=>this.updateOpening({cover:y})):$}
        ${i&&Wn(t.cover)?g`<p class="fp3d-sub fp3d-wide">${this.t("garage_pulse_hint")}</p>`:$}
        ${(n||i||v)&&t.cover!=="none"&&(t.cover||o("cover"))?g`${Wn(t.cover)?$:this.entitySelect(this.t("cover_position_entity"),t.position??null,void 0,d,y=>this.updateOpening({position:y==="none"?null:y}))}
              ${t.position&&!Wn(t.cover)?g`<label class="fp3d-check fp3d-wide"
                    ><input
                      type="checkbox"
                      ?disabled=${!e}
                      .checked=${!!t.position_inverted}
                      @change=${y=>this.updateOpening({position_inverted:y.target.checked})}
                    />
                    ${this.t("cover_position_invert")}</label
                  >`:$}
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_invert_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.cover_invert} @change=${y=>this.updateOpening({cover_invert:y.target.checked||void 0})} />
                ${this.t("cover_invert")}</label
              >
              <label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${y=>this.updateOpening({confirm:y.target.checked})} />
                ${this.t("device_confirm")}</label
              >`:$}
        ${n?g`${t.leaves===2?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_main")}</h4>`:$}
              ${_(1)} ${t.leaves===2?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("leaf_second")}</h4>${_(2)}`:$}
              ${t.sill<=.01?g`${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(y=>y.startsWith("lock.")),y=>this.updateOpening({lock:y==="none"?null:y}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:$}`:g`${this.entitySelect(this.t(i?"garage_contact":t.leaves===2?"contact_main":"contact_entity"),t.contact,o("contact"),f,y=>this.updateOpening({contact:y}))}
              ${m?g`<label class="fp3d-check fp3d-wide" title=${this.t("cover_confirm_hint")}
                    ><input type="checkbox" ?disabled=${!e} .checked=${!!t.confirm} @change=${y=>this.updateOpening({confirm:y.target.checked})} />
                    ${this.t("device_confirm")}</label
                  >`:$}
              ${t.leaves===2&&!i?this.entitySelect(this.t("contact_second"),t.contact2,void 0,u,y=>this.updateOpening({contact2:y==="none"?null:y})):$}
              ${v?g`<label class="fp3d-check fp3d-wide" title=${this.t("door_shut_hint")}
                    ><input type="checkbox" .checked=${!!t.shut} ?disabled=${!e} @change=${y=>this.updateOpening({shut:y.target.checked})} />
                    ${this.t("door_shut")}</label
                  >
                  <label class="fp3d-field" title=${this.t("door_angle_hint")}
                    >${this.t("door_angle")}
                    <select
                      ?disabled=${!e}
                      @change=${y=>{let x=Number(y.target.value);this.updateOpening({open_angle:x>0?x:null})}}
                    >
                      <option value="0" ?selected=${!t.open_angle}>${this.t("door_angle_default")}</option>
                      ${[15,30,45,60,90].map(y=>g`<option value=${y} ?selected=${t.open_angle===y}>${y}°</option>`)}
                      ${t.open_angle&&![15,30,45,60,90].includes(t.open_angle)?g`<option value=${t.open_angle} selected>${t.open_angle}°</option>`:$}
                    </select></label
                  >
                  ${this.entitySelect(this.t("door_lock"),t.lock??null,void 0,this.entityOptions(y=>y.startsWith("lock.")),y=>this.updateOpening({lock:y==="none"?null:y}))}
                  <p class="fp3d-sub fp3d-wide">${this.t("door_lock_hint")}</p>`:$}`}
        ${t.contact!=="none"&&(t.contact||t.contact2||o("contact"))?g`<label class="fp3d-check fp3d-wide" title=${this.t("contact_invert_hint")}
              ><input type="checkbox" .checked=${!!t.contact_invert} ?disabled=${!e} @change=${y=>this.updateOpening({contact_invert:y.target.checked})} />
              ${this.t("contact_invert")}</label
            >`:$}
        ${this.floor&&kd(this._doc,this.floor,t)?g`<label class="fp3d-check fp3d-wide" title=${this.t("well_hint")}
                ><input type="checkbox" .checked=${t.well!==!1} ?disabled=${!e} @change=${y=>this.updateOpening({well:y.target.checked?void 0:!1})} />
                ${this.t("well")}</label
              >
              ${t.well!==!1?this.len(this.t("well_rim"),t.well_rim??0,y=>this.updateOpening({well_rim:Math.max(-.3,Math.min(1,y))||null}),.01,-.3):$}
              ${t.well!==!1?this.len(this.t("well_depth"),t.well_depth??Ks,y=>{let x=Math.round(Math.max(.2,Math.min(1.5,y))*100)/100;this.updateOpening({well_depth:x===Ks?null:x})},.05,.2):$}`:$}
        ${t.type==="window"?g`<label class="fp3d-check fp3d-wide" title=${this.t("rain_ignore_hint")}
              ><input type="checkbox" .checked=${!!t.rain_ignore} ?disabled=${!e} @change=${y=>this.updateOpening({rain_ignore:y.target.checked||void 0})} />
              ${this.t("rain_ignore")}</label
            >`:$}
      </div>
      <p class="fp3d-sub">${this.t(n?"opening_hint":i?"garage_hint":"door_hint")}</p>
      ${e?g`<div class="fp3d-actions"><button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteOpening()}>${this.t("delete")}</button></div>`:$}
    </section>`}renderFurnitureForm(t){if(this.selection().length>1)return this.renderBlockForm();let e=this.isAdmin;return g`<section>
      <div class="fp3d-h3row"><h3>${t.name||this.t("furniture")}</h3>${this.fixButton("furniture",t.id)}</div>
      ${t.group?g`<p class="fp3d-sub fp3d-block-note">▣ ${this.t("block_part")} <button class="fp3d-link" @click=${()=>{this._single=!1,this.requestUpdate()}}>${this.t("block_select")}</button></p>`:$}
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("furn_name")}
          <input type="text" maxlength="60" .value=${t.name??""} ?disabled=${!e} placeholder=${this.t(`furn_${t.type}`)===`furn_${t.type}`?"":this.t(`furn_${t.type}`)} @change=${n=>this.updateFurniture({name:n.target.value.trim()||null})} />
        </label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${n=>this.updateFurniture({aliases:Ei(n.target.value)})}
        /></label>
        ${t.name?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${n=>this.updateFurniture({show_name:n.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:$}
        <label class="fp3d-field fp3d-wide"
          >${this.t("furniture_type")}
          <select ?disabled=${!e} @change=${n=>this.updateFurniture({type:n.target.value})}>
            ${this.typeChoices(t.type).map(n=>g`<option value=${n} ?selected=${n===t.type}>${this.t(`furn_${n}`)}</option>`)}
            ${(this.packs??[]).filter(n=>n.items.length).map(n=>g`<optgroup label=${ve(n)}>
                ${n.items.map(i=>{let o=Fe(n.id,i.id);return g`<option value=${o} ?selected=${o===t.type}>${ce(i)}</option>`})}
              </optgroup>`)}
            ${t.type.startsWith("pack:")&&!(this.packs??[]).some(n=>t.type.startsWith(`pack:${n.id}:`))?g`<option value=${t.type} selected>${Pe(this.hass,t.type)}</option>`:$}
          </select></label
        >
        ${this.len(this.t("x"),t.x,n=>this.updateFurniture({x:n}))} ${this.len(this.t("z"),t.z,n=>this.updateFurniture({z:n}))}
        ${this.len(this.t("width"),t.w,n=>this.updateFurniture({w:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("depth"),t.d,n=>this.updateFurniture({d:Math.max(.01,n)}),.01,.01)}
        ${this.len(this.t("height_m"),t.h,n=>this.updateFurniture({h:Math.max(.005,n)}),.01,0)}
        ${this.num(this.t("rotation"),t.rotation,n=>this.updateFurniture({rotation:(n%360+360)%360}),1)}
        ${Yt(t.type)?$:g`<label class="fp3d-check" title=${this.t("furn_mirror_hint")}
              ><input type="checkbox" .checked=${!!t.mirror} ?disabled=${!e} @change=${n=>this.updateFurniture({mirror:n.target.checked})} />
              ${this.t("furn_mirror")}</label
            >`}
        ${t.type==="led_strip"?g`${this.num(this.t("strip_tilt"),t.tilt??0,n=>this.updateFurniture({tilt:Math.max(-90,Math.min(90,Math.round(n)))}),5)}
              ${t.upright?$:g`<span title=${this.t("strip_rise_hint")}>${this.num(this.t("strip_rise"),t.rise??0,n=>this.updateFurniture({rise:Math.max(-80,Math.min(80,Math.round(n)))||void 0}),5)}</span>`}
              <label class="fp3d-check" title=${this.t("strip_upright_hint")}
                ><input type="checkbox" .checked=${!!t.upright} ?disabled=${!e} @change=${n=>this.updateFurniture({upright:n.target.checked})} />
                ${this.t("strip_upright")}</label
              >`:$}
        ${ue(t)&&this.floor?g`${this.len(this.t("mount_height"),t.mount_y??Tt(this.floor,t),n=>this.updateFurniture({mount_y:Math.min(ro,Math.max(0,n))}),.01,0)}
              ${t.mount_y!=null?g`<button class="fp3d-btn fp3d-field-btn" ?disabled=${!e} @click=${()=>this.updateFurniture({mount_y:null})}>${this.t("height_auto")}</button>`:$}`:$}
      </div>
      ${t.type==="stairs"?g`<label class="fp3d-check" title=${this.t("stair_open_hint")}
              ><input type="checkbox" .checked=${!!t.stair_open} ?disabled=${!this.isAdmin} @change=${n=>this.updateFurniture({stair_open:n.target.checked||void 0})} />
              ${this.t("stair_open")}</label
            >
            <p class="fp3d-sub">${this.t("stairs_hint")}</p>`:$}
      ${t.type==="stairs_u"?g`<p class="fp3d-sub">${this.t("stairs_u_hint")}</p>`:$}
      ${t.type==="stairwell"?g`<p class="fp3d-sub">${this.t("stairwell_hint")}</p>
            ${this.floor&&!this.floor.rooms.some(n=>n.points.length>=3&&(Nl(Wt(t),n.points)||Rt(rs(n.points,Wt(t)))>.01))?g`<p class="fp3d-sub fp3d-pack-error">${this.t("stairwell_outside")}</p>`:$}`:$}
      ${t.type==="inverter"||t.type==="home_battery"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("furn_model")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${(t.type==="inverter"?["","slim","hybrid"]:["","wall","cube"]).map(n=>g`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`${t.type==="inverter"?"inverter":"battery"}_${n||"std"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${t.type==="lamp_pendant"?g`<div class="fp3d-form">
            <label class="fp3d-field fp3d-wide"
              >${this.t("pendant_shape")}
              <select ?disabled=${!e} @change=${n=>this.updateFurniture({variant:n.target.value||null})}>
                ${["","globe","cone","drum"].map(n=>g`<option value=${n} ?selected=${(t.variant??"")===n}>${this.t(`pendant_${n||"shade"}`)}</option>`)}
              </select></label
            >
          </div>`:$}
      ${t.type==="lamp_ceiling_fan"?g`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_fan_entity"),t.fan_entity??null,void 0,this.entityOptions(n=>n.startsWith("fan.")),n=>this.updateFurniture({fan_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("ceiling_fan_hint")}</p>
            </div>`:$}
      ${tn(t.type)?this.renderFurnitureLinks(t):rh.has(t.type)?$:g`<div class="fp3d-form fp3d-links">${this.renderStateLinks(t)}</div>`} ${t.type==="parking"?this.renderParkingForm(t):$} ${t.type==="wall_switch"?this.renderWallSwitchForm(t):t.type==="wall_socket"?this.renderWallSocketForm(t):$} ${t.type==="waste_bin"||t.type==="mailbox"?this.renderHouseholdForm(t):this.renderHouseholdExtras(t)}
      ${this.renderModuleFurnitureFields(t)}
      ${t.type.startsWith("pack:mastershort.vehicles:")&&this.isAdmin?g`<section>
            <p class="fp3d-sub">${this.t("vehicle_to_spot_hint")}</p>
            <div class="fp3d-actions"><button class="fp3d-btn fp3d-primary" @click=${()=>this.vehicleToSpot(t)}>🅿 ${this.t("vehicle_to_spot")}</button></div>
          </section>`:$}
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(-90)}>${this.t("rotate_left")}</button>
            <button class="fp3d-btn" @click=${()=>this.rotateFurniture(90)}>${this.t("rotate_right")}</button>
            <button class="fp3d-btn" title=${this.t("wall_view_open")} @click=${()=>this.openWallViewFor(t)}>▦ ${this.t("wall_view")}</button>
            ${t.entity&&t.entity!=="none"&&t.type!=="parking"?g`<button class="fp3d-btn" title=${this.t("as_device_hint")} @click=${()=>this.furnitureToDevice(t)}>${this.t("as_device")}</button>`:$}
            <button class="fp3d-btn" @click=${()=>this.duplicateFurniture()}>${this.t("duplicate")}</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>this.deleteFurniture()}>${this.t("delete")}</button>
          </div>
          ${this.renderMultiToggle()}`:$}
    </section>`}setEnergy(t){let e=structuredClone(this._doc);e.energy={...e.energy,...t},this.setDoc(e)}async importEnergyPrefs(){if(!this.hass)return;let t;try{t=await this.hass.callWS({type:"energy/get_prefs"})}catch{this._energyNote=this.t("energy_import_failed");return}let e=rd(this.hass,t),n=0,i=a=>this._doc.floors.flatMap(l=>l.furniture).find(l=>l.type===a),o=(a,l,d)=>{if(!d)return;let c=i(a);if(!c&&this.floor&&(this.addEnergyDevice(a),c=i(a)),!c||c[l]&&c[l]!=="none")return;let u=c.id;this.change(p=>{let h=p.floors.flatMap(f=>f.furniture).find(f=>f.id===u);h&&(h[l]=d)}),n++};o("meter","power",e.grid),o("inverter","power",e.solar),o("home_battery","power",e.battery),o("home_battery","soc",e.battery_soc);let s=sd(t);for(let a of["gas","water"])s[a]&&!this._doc.energy[a]&&(this.setEnergy({[a]:s[a]}),n++);this.selectItem("furniture",null),this._energyNote=n?this.t("energy_import_done",{n}):this.t("energy_import_none")}renderEnergyBalance(){let t=this._doc.energy,e=this.isAdmin,n=(m,_)=>{var b,v;return(v=(b=this.hass)==null?void 0:b.states[m])==null?void 0:v.attributes[_]},i=this.entityOptions(m=>this.isPowerSensor(m)),o=this.entityOptions(m=>Lt(m)&&n(m,"device_class")==="battery"),s=this.entityOptions(m=>Lt(m)&&(n(m,"device_class")==="monetary"||/\/(kWh|MWh)$/.test(n(m,"unit_of_measurement")??""))),a=m=>_=>this.setEnergy({[m]:_==="none"?null:_}),l=m=>this.entityOptions(_=>Lt(_)&&(n(_,"device_class")===m||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(n(_,"unit_of_measurement")??""))),d=this.hass?nn(this.hass,this._doc.floors):new Map,c=Hs(this._doc,m=>this.devicePower(m,d)),u=this.hass?cd(this.hass,this._doc,[],c):null,p=!!u&&(u.solar??0)<20,h=p&&u.grid!==null&&u.grid<-50,f=p&&u.battery!==null&&u.battery<-50&&(u.grid??0)<=0;return g`<section>
      <h3>⚖ ${this.t("energy_balance")}</h3>
      <p class="fp3d-sub">${this.t("energy_balance_hint")}</p>
      ${h?g`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_grid")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({grid_invert:!t.grid_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
      ${f?g`<p class="fp3d-sub fp3d-pack-error">${this.t("energy_sign_battery")} <button class="fp3d-btn" ?disabled=${!e} @click=${()=>this.setEnergy({battery_invert:!t.battery_invert})}>${this.t("energy_sign_flip")}</button></p>`:$}
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
      ${this._energyNote?g`<p class="fp3d-sub">${this._energyNote}</p>`:$}
      <p class="fp3d-sub">${this.t("energy_hint")}</p>
    </section>`}renderHeadroom(t){let e=t.elevation+t.height;if(!ws(this._doc).some(o=>Ac(o,e)&&zc(o,t.elevation)))return $;let i={settings:this._doc.settings};return H`${[1.5,2].map(o=>Ic(i,t.elevation,o).map(([s,a])=>{let[l,d]=this.toScreen(s),[c,u]=this.toScreen(a);return H`<line class="fp3d-headroom" x1=${l} y1=${d} x2=${c} y2=${u} />
          <text class="fp3d-headroom-label" x=${(l+c)/2} y=${(d+u)/2-4}>${this.m(o,1)}</text>`}))}`}renderFavorites(){let t=this._doc.settings.favorites??[],e=["scene","script","automation","button","input_button","switch","input_boolean","light","fan","cover","lock"],n=this.entityOptions(s=>e.includes(s.split(".")[0])&&!t.includes(s)),i=s=>this.change(a=>a.settings.favorites=s.length?s:void 0),o=(s,a)=>{let l=[...t],[d]=l.splice(s,1);l.splice(Math.max(0,Math.min(l.length,s+a)),0,d),i(l)};return g`<details class="fp3d-section">
      <summary>${this.t("favorites")}${t.length?g` <span class="fp3d-lib-count">${t.length}</span>`:$}</summary>
      <p class="fp3d-sub">${this.t("favorites_hint")}</p>
      ${t.map((s,a)=>g`<div class="fp3d-row fp3d-dev-row">
          <span class="fp3d-dev-name"><span>${_t(this.hass,s)}</span></span>
          <button class="fp3d-pin" title=${this.t("move_up")} ?disabled=${a===0} @click=${()=>o(a,-1)}>↑</button>
          <button class="fp3d-pin" title=${this.t("move_down")} ?disabled=${a===t.length-1} @click=${()=>o(a,1)}>↓</button>
          <button class="fp3d-pin" title=${this.t("delete")} @click=${()=>i(t.filter(l=>l!==s))}>✕</button>
        </div>`)}
      ${t.length<40?g`<div class="fp3d-form">
            ${this.entitySelect(this.t("favorites_add"),null,void 0,n,s=>{s&&s!=="none"&&!t.includes(s)&&i([...t,s])})}
          </div>`:$}
      ${this.renderOwnButtons()} ${this.renderMediaPresets()}
    </details>`}renderMediaPresets(){let t=this._doc.settings.media_presets??[],e=i=>this.change(o=>o.settings.media_presets=i.length?i:void 0),n=(i,o)=>e(t.map((s,a)=>a===i?{...s,...o}:s));return g`<h4>${this.t("presets")}</h4>
      <p class="fp3d-sub">${this.t("presets_hint")}</p>
      <datalist id="fp3d-preset-types">
        ${["music","url","playlist","SPOTIFY","AMAZON_MUSIC","TUNEIN","APPLE_MUSIC"].map(i=>g`<option value=${i}></option>`)}
      </datalist>
      ${t.map((i,o)=>g`<div class="fp3d-form fp3d-own-button">
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
      ${t.length<30?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:tt("preset"),label:"Radio",type:"music",content:""}])}>+ ${this.t("preset_add")}</button>
          </div>`:$}`}renderOwnButtons(){let t=this._doc.settings.buttons??[],e=o=>this.change(s=>s.settings.buttons=o.length?o:void 0),n=(o,s)=>e(t.map((a,l)=>l===o?{...a,...s}:a)),i={navigate:"/lovelace/rollos",more_info:"cover.wohnzimmer",service:"script.turn_on",fire_dom_event:""};return g`<h4>${this.t("own_buttons")}</h4>
      <p class="fp3d-sub">${this.t("own_buttons_hint")}</p>
      ${t.map((o,s)=>g`<div class="fp3d-form fp3d-own-button">
          <label class="fp3d-field"
            >${this.t("own_button_label")}
            <input type="text" maxlength="60" .value=${o.label} @change=${a=>n(s,{label:a.target.value.trim()||this.t("own_button_new")})}
          /></label>
          <label class="fp3d-field"
            >${this.t("own_button_action")}
            <select @change=${a=>n(s,{action:a.target.value})}>
              ${wa.map(a=>g`<option value=${a} ?selected=${a===o.action}>${this.t(`own_action_${a}`)}</option>`)}
            </select></label
          >
          ${this.iconInput(o.icon??null,a=>n(s,{icon:a}))}
          ${o.action!=="fire_dom_event"?g`<label class="fp3d-field fp3d-wide"
                >${this.t(`own_target_${o.action}`)}
                <input type="text" .value=${o.target??""} placeholder=${i[o.action]} @change=${a=>n(s,{target:a.target.value.trim()||null})}
              /></label>`:$}
          ${o.action==="service"||o.action==="fire_dom_event"?g`<label class="fp3d-field fp3d-wide" title=${this.t("own_data_hint")}
                >${this.t("own_data")}
                <textarea
                  rows="4"
                  spellcheck="false"
                  placeholder=${o.action==="fire_dom_event"?'{"browser_mod": {"service": "browser_mod.popup", "data": {"title": "Rollos", "content": {"type": "custom:my-cover-card"}}}}':'{"entity_id": "script.party"}'}
                  .value=${o.data?JSON.stringify(o.data,null,1):""}
                  @change=${a=>{a.target.setCustomValidity("");let l=a.target.value.trim();if(!l)return n(s,{data:null});try{let d=JSON.parse(l);d&&typeof d=="object"&&!Array.isArray(d)&&n(s,{data:d})}catch{a.target.setCustomValidity(this.t("own_data_bad")),a.target.reportValidity()}}}
                ></textarea></label
              >`:$}
          <div class="fp3d-actions fp3d-wide">
            <button class="fp3d-btn" ?disabled=${s===0} @click=${()=>e([...t.slice(0,s-1),o,t[s-1],...t.slice(s+1)])}>↑</button>
            <button class="fp3d-btn fp3d-danger" @click=${()=>e(t.filter((a,l)=>l!==s))}>${this.t("delete")}</button>
          </div>
        </div>`)}
      ${t.length<20?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>e([...t,{id:tt("btn"),label:this.t("own_button_new"),action:"navigate",target:null}])}>+ ${this.t("own_button_add")}</button>
          </div>`:$}`}paneView(){let t=this.renderRoot.querySelector("fp3d-view3d"),e=t==null?void 0:t.currentView();if(!e)return null;let n=e.target;return{theta:z(e.theta),phi:z(e.phi),radius:z(e.radius),...n?{target:{x:z(n.x),y:z(n.y),z:z(n.z)}}:{}}}rememberFloorView(){let t=this.paneView();if(!t){alert(this.t("floor_start_view_need_pane"));return}this.updateFloor({start_view:t})}rememberRoomView(){let t=this.paneView();if(!t){alert(this.t("room_start_view_need_pane"));return}this.updateRoom({start_view:t})}renderDirectorTriggers(t,e){if(!this.hass)return $;let i=t.triggers??[],o=a=>this.change(l=>l.settings.director={...l.settings.director??{},triggers:a.length?a:null}),s=vt("camera_cockpit");return g`<div class="fp3d-wide">
      <h4 class="fp3d-lib-head">${this.t("director_triggers")}</h4>
      <p class="fp3d-sub">${this.t("director_triggers_hint")}</p>
      ${i.map((a,l)=>g`<div class="fp3d-form">
          ${this.entitySelect(this.t("director_trigger_entity"),a.entity||null,void 0,this.entityOptions(d=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(d)),d=>o(i.map((c,u)=>u===l?{...c,entity:d&&d!=="none"?d:""}:c).filter(c=>c.entity)))}
          ${this.entitySelect(this.t("director_doorbell_camera"),a.camera,void 0,this.entityOptions(d=>d.startsWith("camera.")&&e.includes(d)),d=>o(i.map((c,u)=>u===l?{...c,camera:d&&d!=="none"?d:null}:c)))}
          <button class="fp3d-btn" ?disabled=${!s} @click=${()=>o(i.filter((d,c)=>c!==l))}>✕ ${this.t("delete")}</button>
        </div>`)}
      ${i.length<20&&s?g`<div class="fp3d-form">
            ${this.entitySelect(this.t("director_trigger_add"),null,void 0,this.entityOptions(a=>/^(event|binary_sensor|cover|lock|switch|input_boolean)\./.test(a)),a=>{a&&a!=="none"&&o([...i,{entity:a,camera:null}])})}
          </div>`:$}
    </div>`}renderDirector(){let t=this.hass,e=this._doc.settings.director??{},n=u=>this.change(p=>p.settings.director={...p.settings.director??{},...u}),i=vt("camera_cockpit"),o=xc(),s=[...new Set(this._doc.floors.flatMap(u=>u.placements.map(p=>p.entity_id)))],a=t?Mc(t):[],l=t?e.doorbell_entity??a[0]??null:null,d=t&&l?Sc(t,l,s):null,c=(u,p,h,f=!i)=>g`<label class="fp3d-check fp3d-wide"
        ><input type="checkbox" .checked=${p} ?disabled=${f} @change=${m=>h(m.target.checked)} /> ${this.t(u)}</label
      >`;return g`<details class="fp3d-section">
      <summary>🎬 ${this.t("director")}</summary>
      <p class="fp3d-sub">${this.t("director_hint")}</p>
      ${i?$:g`<p class="fp3d-sub">🔒 ${this.t("pro_feature_camera_cockpit")}</p>`}
      <div class="fp3d-form">
        ${c("director_here",o,u=>{kc(u),this.dispatchEvent(new CustomEvent("director-here",{bubbles:!0,composed:!0})),this.requestUpdate()})}
        <p class="fp3d-sub fp3d-wide">${this.t("director_here_hint")}</p>
        ${c("director_doorbell",!!e.doorbell,u=>n({doorbell:u}))}
        ${e.doorbell&&t?g`${this.entitySelect(this.t("director_doorbell_entity"),e.doorbell_entity??null,a[0]??null,this.entityOptions(u=>u.startsWith("event.")||u.startsWith("binary_sensor.")),u=>n({doorbell_entity:u==="none"?null:u}))}
            ${this.entitySelect(this.t("director_doorbell_camera"),e.doorbell_camera??null,d,this.entityOptions(u=>u.startsWith("camera.")&&s.includes(u)),u=>n({doorbell_camera:u==="none"?null:u}))}
            ${!a.length&&!e.doorbell_entity?g`<p class="fp3d-sub fp3d-wide">${this.t("director_no_doorbell")}</p>`:$}`:$}
        <label class="fp3d-field fp3d-wide"
          >${this.t("director_motion")}
          <select ?disabled=${!i} @change=${u=>n({motion:u.target.value})}>
            ${["off","person","all"].map(u=>g`<option value=${u} ?selected=${(e.motion??"off")===u}>${this.t(`director_motion_${u}`)}</option>`)}
          </select></label
        >
        ${c("director_appliances",!!e.appliances,u=>n({appliances:u}))}
        ${c("director_alerts",!!e.alerts,u=>n({alerts:u}))}
        ${this.renderDirectorTriggers(e,s)}
        ${c("director_live",!!e.live,u=>n({live:u}))}
        <p class="fp3d-sub fp3d-wide">${this.t("director_live_hint")}</p>
        ${this.num(this.t("director_hold"),e.hold??$c,u=>n({hold:Math.min(wc,Math.max($s,Math.round(u)))}),5,$s)}
      </div>
      <p class="fp3d-sub">${this.t("director_back_hint")}</p>
    </details>`}voicePipes=null;voicePipesAsked=!1;voiceSentences=null;voiceSentencesMsg=null;renderVoicePipeline(){let t=this.hass;if(!t)return $;this.voicePipesAsked||(this.voicePipesAsked=!0,Kr(t).then(i=>{this.voiceSentences=i.sentences,this.requestUpdate()}).catch(()=>this.voiceSentences="off"),t.callWS({type:"assist_pipeline/pipeline/list"}).then(i=>{this.voicePipes=i.pipelines.map(o=>({id:o.id,name:o.name,stt:!!o.stt_engine})),this.requestUpdate()}).catch(()=>{}));let e=_c(),n=["distinct","all","off"];return g`<div class="fp3d-form">
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_sentences")}
        <select
          ?disabled=${!this.isAdmin||this.voiceSentences===null}
          @change=${i=>{let o=i.target.value;this.voiceSentences=o,this.voiceSentencesMsg=null,Ur(t,o).then(s=>{var a;(a=s.kept)!=null&&a.length&&(this.voiceSentencesMsg=this.t("voice_sentences_kept",{langs:s.kept.join(", ")})),this.requestUpdate()}).catch(()=>{this.voiceSentencesMsg=this.t("voice_sentences_failed"),this.requestUpdate()})}}
        >
          ${n.map(i=>g`<option value=${i} ?selected=${(this.voiceSentences??"off")===i}>${this.t(`voice_sentences_${i}`)}</option>`)}
        </select></label
      >
      ${this.voiceSentencesMsg?g`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.voiceSentencesMsg}</p>`:$}
      <p class="fp3d-sub fp3d-wide">${this.t("voice_sentences_hint")} ${this.t("voice_sentences_file")}</p>
      <label class="fp3d-field fp3d-wide"
        >${this.t("voice_pipeline")}
        <select
          @change=${i=>{bc(i.target.value||null),this.requestUpdate()}}
        >
          <option value="" ?selected=${!e}>${this.t("voice_pipeline_preferred")}</option>
          ${(this.voicePipes??[]).map(i=>g`<option value=${i.id} ?selected=${e===i.id} ?disabled=${!i.stt}>${i.name}${i.stt?"":` (${this.t("voice_pipeline_no_stt")})`}</option>`)}
        </select></label
      >
    </div>`}renderVoiceRoom(){var i,o,s;let t=vc(),e=this._doc.floors.flatMap(a=>Ma(a).filter(l=>l.area_id).map(l=>({area:l.area_id,name:this._doc.floors.length>1?`${a.name} \xB7 ${l.name}`:l.name}))),n=t&&!e.some(a=>a.area===t)?((s=(o=(i=this.hass)==null?void 0:i.areas)==null?void 0:o[t])==null?void 0:s.name)??t:null;return g`<div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("voice_room")}
          <select
            @change=${a=>{yc(a.target.value||null),this.requestUpdate()}}
          >
            <option value="" ?selected=${!t}>${this.t("voice_room_none")}</option>
            ${e.map(a=>g`<option value=${a.area} ?selected=${t===a.area}>${a.name}</option>`)}
            ${n?g`<option value=${t} selected>${n}</option>`:$}
          </select></label
        >
      </div>
      <p class="fp3d-sub">${this.t("voice_room_hint")}</p>`}renderVoice(){var n;let t=hc(),e=[...this.t("voice_examples").split("|"),...bd(((n=this.hass)==null?void 0:n.language)??"en")];return g`<details class="fp3d-section">
      <summary>🎙️ ${this.t("voice")}</summary>
      <p class="fp3d-sub">${this.t("voice_hint")}</p>
      <p class="fp3d-sub"><b>${this.t("voice_understands")}</b></p>
      <ul class="fp3d-voice-list">
        ${e.map(i=>g`<li>${i}</li>`)}
      </ul>
      <div class="fp3d-form">
        <label class="fp3d-check fp3d-wide"
          ><input
            type="checkbox"
            .checked=${t}
            @change=${i=>{fc(i.target.checked),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0})),this.requestUpdate()}}
          />
          ${this.t("voice_here")}</label
        >
        <label class="fp3d-wide"
          >${this.t("screen_name")}
          <input
            type="text"
            .value=${mc()}
            placeholder=${this.t("screen_name_placeholder")}
            @change=${i=>{gc(i.target.value),this.dispatchEvent(new CustomEvent("voice-here",{bubbles:!0,composed:!0}))}}
          />
        </label>
      </div>
      <p class="fp3d-sub">${this.t("screen_name_hint")}</p>
      ${this.renderVoiceRoom()}
      ${this.renderVoicePipeline()}
      <p class="fp3d-sub">${this.t("voice_needs")}</p>
      <div class="fp3d-actions">
        <button class="fp3d-btn" @click=${()=>this.dispatchEvent(new CustomEvent("mic-probe",{bubbles:!0,composed:!0}))}>${this.t("director_mic_test")}</button>
      </div>
      <p class="fp3d-sub">${this.t("director_mic_hint")}</p>
    </details>`}renderPresenceSettings(){var i;let t=Object.keys(((i=this.hass)==null?void 0:i.states)??{}).filter(o=>o.startsWith("person.")).sort(),e=o=>{let s=o.slice(7),a=this.entityOptions(d=>Lt(d)),l=d=>d.includes(s)&&/(area|room|raum|bermuda|espresense)/.test(d);return[...a.filter(d=>l(d.id)),...a.filter(d=>!l(d.id))]},n=(o,s)=>{let a=structuredClone(this._doc);a.presence=a.presence.filter(l=>l.person!==o),s&&s!=="none"&&a.presence.push({person:o,sensor:s}),this.setDoc(a)};return g`<details class="fp3d-section">
      <summary>${this.t("presence")}</summary>
      <div class="fp3d-form">
        ${t.length?t.map(o=>{var s;return this.entitySelect(`${_t(this.hass,o)} \xB7 ${this.t("presence_sensor")}`,((s=this._doc.presence.find(a=>a.person===o))==null?void 0:s.sensor)??null,void 0,e(o),a=>n(o,a))}):g`<p class="fp3d-sub fp3d-wide">${this.t("no_persons")}</p>`}
      </div>
      <p class="fp3d-sub">${this.t("presence_hint")}</p>
    </details>`}renderStateLinks(t){return g`${this.entitySelect(this.t("furn_state_entity"),t.state_entity??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture(Na(t,e)))}
              ${t.state_entity&&t.state_entity!=="none"?g`${this.entitySelect(this.t("furn_state_entity2"),t.state_entity2??null,void 0,this.entityOptions(e=>/^(binary_sensor|switch|input_boolean|light|fan|person|device_tracker|sensor)\./.test(e)),e=>this.updateFurniture({state_entity2:e==="none"?null:e}))}
                    ${t.state_entity2&&t.state_entity2!=="none"?g`<label class="fp3d-field"
                          >${this.t("furn_state_split")}
                          <select ?disabled=${!this.isAdmin} @change=${e=>this.updateFurniture({state_split:e.target.value==="top_bottom"?"top_bottom":"left_right"})}>
                            <option value="left_right" ?selected=${t.state_split!=="top_bottom"}>${this.t("furn_state_left_right")}</option>
                            <option value="top_bottom" ?selected=${t.state_split==="top_bottom"}>${this.t("furn_state_top_bottom")}</option>
                          </select></label
                        >`:$}`:$}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_state_hint")}</p>`}renderWallSwitchForm(t){let e=this.isAdmin,n=Ko(t),i=this.entityOptions(s=>Ja.test(s)),o=s=>{let a=Array.from({length:s},(l,d)=>n[d]??null);this.updateFurniture({switch_keys:a,w:Go(s)})};return g`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("switch_keys")}
        <select ?disabled=${!e} @change=${s=>o(Number(s.target.value))}>
          ${Array.from({length:4},(s,a)=>a+1).map(s=>g`<option value=${s} ?selected=${n.length===s}>${s}</option>`)}
        </select></label
      >
      ${n.map((s,a)=>this.entitySelect(this.t(n.length>1?"switch_key_n":"switch_key",{n:a+1}),s,void 0,i,l=>this.updateFurniture({switch_keys:n.map((d,c)=>c===a?l==="none"?null:l:d)})))}
      ${this.entitySelect(this.t("switch_ring"),Xa(t),void 0,this.entityOptions(s=>s.startsWith("light.")),s=>this.updateFurniture({switch_ring:s==="none"?null:s}))}
      <p class="fp3d-sub fp3d-wide">${this.t("switch_ring_hint")}</p>
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${s=>this.updateFurniture({confirm:s.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("switch_hint")}</p>
    </div>`}renderWallSocketForm(t){let e=this.isAdmin,n=Uo(t),i=this.entityOptions(l=>Za.test(l)),o=this.entityOptions(l=>this.isPowerSensor(l)),s=(l,d)=>this.updateFurniture({socket_outlets:n.map((c,u)=>u===l?{...c,...d}:c)}),a=l=>this.updateFurniture({socket_outlets:Array.from({length:l},(d,c)=>n[c]??{entity:null,power:null}),w:Go(l)});return g`<div class="fp3d-form fp3d-links">
      <label class="fp3d-field fp3d-wide"
        >${this.t("socket_count")}
        <select ?disabled=${!e} @change=${l=>a(Number(l.target.value))}>
          ${Array.from({length:4},(l,d)=>d+1).map(l=>g`<option value=${l} ?selected=${n.length===l}>${l}</option>`)}
        </select></label
      >
      ${n.map((l,d)=>g`${n.length>1?g`<h4 class="fp3d-lib-head fp3d-wide">${this.t("socket_n",{n:d+1})}</h4>`:$}
          ${this.entitySelect(this.t("socket_switch"),l.entity,void 0,i,c=>s(d,{entity:c==="none"?null:c}))}
          ${this.entitySelect(this.t("socket_power"),l.power,void 0,o,c=>s(d,{power:c==="none"?null:c}))}`)}
      <label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
        ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateFurniture({confirm:l.target.checked})} />
        ${this.t("device_confirm")}</label
      >
      <p class="fp3d-sub fp3d-wide">${this.t("socket_hint")}</p>
    </div>`}renderApFields(t){let e=this.isAdmin,n=Jr(t),i=this.hass?Zr(this.hass,{entity:t.entity}):null,o=i?["state","clients","led","cpu","memory","restart"].filter(s=>i[s]).map(s=>this.t(`ap_role_${s}`)):[];return g`<label class="fp3d-field fp3d-wide"
        >${this.t("ap_mount")}
        <select
          ?disabled=${!e}
          @change=${s=>{let a=s.target.value==="wall",[l,d,c]=a?Yr:Gr;this.updateFurniture({variant:a?"wall":null,w:l,d,h:c,mount_y:null})}}
        >
          <option value="ceiling" ?selected=${!n}>${this.t("ap_ceiling")}</option>
          <option value="wall" ?selected=${n}>${this.t("ap_wall")}</option>
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${o.length?`${this.t("heater_found")} ${o.join(" \xB7 ")}`:this.t("ap_hint")}</p>
      <p class="fp3d-sub fp3d-wide">${this.t("ap_gestures")}</p>`}renderHeaterFields(t){let e=this.isAdmin,n=ma(t),i=this.hass?ga(this.hass,{entity:t.entity}):null,o=i?["heating","showers","remaining","power","eco"].filter(s=>i[s]).map(s=>`${this.t(`heater_role_${s}`)}: ${_t(this.hass,i[s])}`):[];return g`<label class="fp3d-field fp3d-wide"
        >${this.t("heater_capacity")}
        <select
          ?disabled=${!e}
          @change=${s=>{let a=s.target.value,[l,d,c]=vi[a];this.updateFurniture({variant:a,w:l,d,h:c})}}
        >
          ${ha.map(s=>g`<option value=${s} ?selected=${n===s}>${s} l</option>`)}
        </select></label
      >
      <p class="fp3d-sub fp3d-wide">${o.length?`${this.t("heater_found")} ${o.join(" \xB7 ")}`:this.t("heater_hint")}</p>
      <p class="fp3d-sub fp3d-wide">${this.t(i!=null&&i.power?"heater_gestures":"heater_gestures_no_power")}</p>`}setHousehold(t){let e=structuredClone(this._doc);e.settings.household={...e.settings.household??{},...t},this.setDoc(e)}renderHouseholdForm(t){var d,c,u,p;let e=this.isAdmin,n=vt("household"),i=!n&&xe("household")?g`<section class="fp3d-teaser fp3d-wide">
          <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
          <p class="fp3d-sub">${this.t(t.type==="waste_bin"?"household_teaser_bin":"household_teaser_mail")}</p>
        </section>`:$,o=(h,f,m,_,b)=>g`<label class="fp3d-field fp3d-wide"
        >${h}
        <select ?disabled=${!e} @change=${v=>b(v.target.value)}>
          ${m.map(v=>g`<option value=${v} ?selected=${v===f}>${this.t(_(v))}</option>`)}
        </select></label
      >`;if(t.type==="waste_bin"){let h=ic(t),f=t.bin_kind??"rest",[m,_]=ac(t),b=this.entityOptions(v=>v.startsWith("calendar.")||v.startsWith("sensor."));return g`<div class="fp3d-form fp3d-links">
        ${o(this.t("bin_shape"),h,gs,v=>`bin_shape_${v}`,v=>{let[y,x,P]=ec[v];this.updateFurniture({variant:v==="bin240"?null:v,w:y,d:x,h:P})})}
        ${o(this.t("bin_kind"),f,tc,v=>`bin_kind_${v}`,v=>{let[y,x]=bs(v,rc());this.updateFurniture({bin_kind:v,bin_color:y,bin_lid:x===y?null:x})})}
        <label class="fp3d-field"
          >${this.t("bin_color")}
          <input type="color" .value=${m} ?disabled=${!e} @change=${v=>this.updateFurniture({bin_color:v.target.value})}
        /></label>
        <label class="fp3d-field"
          >${this.t("bin_lid")}
          <input type="color" .value=${_} ?disabled=${!e} @change=${v=>this.updateFurniture({bin_lid:v.target.value})}
        /></label>
        ${n?g`${this.entitySelect(this.t("bin_source"),t.bin_source??null,void 0,b,v=>this.updateFurniture({bin_source:v==="none"?null:v}))}
              <label class="fp3d-field fp3d-wide"
                >${this.t("bin_match")}
                <input type="text" .value=${t.bin_match??""} placeholder=${this.t(`bin_kind_${f}`)} ?disabled=${!e}
                  @change=${v=>this.updateFurniture({bin_match:v.target.value.trim()||null})} /></label>
              ${this.num(this.t("bin_from"),((d=this._doc.settings.household)==null?void 0:d.bin_from)??14,v=>this.setHousehold({bin_from:Math.max(0,Math.min(24,v))}),.5)}
              ${this.num(this.t("bin_until"),((c=this._doc.settings.household)==null?void 0:c.bin_until)??12,v=>this.setHousehold({bin_until:Math.max(0,Math.min(24,v))}),.5)}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_hint")}</p>
              ${this.entitySelect(this.t("bin_out"),t.bin_out??null,void 0,this.entityOptions(v=>/^(input_boolean|switch|binary_sensor)\./.test(v)),v=>this.updateFurniture({bin_out:v==="none"?null:v}))}
              <p class="fp3d-sub fp3d-wide">${this.t("bin_out_hint")}</p>
              <label class="fp3d-check fp3d-wide"
                ><input type="checkbox" .checked=${!!((u=this._doc.settings.household)!=null&&u.bin_next_only)} ?disabled=${!e} @change=${v=>this.setHousehold({bin_next_only:v.target.checked||null})} />
                ${this.t("bin_next_only")}</label
              >
              <label class="fp3d-field"
                >${this.t("bin_days")}
                <input type="number" inputmode="numeric" min="0" max="60" step="1" placeholder=${this.t("bin_days_always")} .value=${((p=this._doc.settings.household)==null?void 0:p.bin_days)==null?"":String(this._doc.settings.household.bin_days)} ?disabled=${!e}
                  @change=${v=>{let y=parseInt(v.target.value,10);this.setHousehold({bin_days:Number.isFinite(y)?Math.max(0,Math.min(60,y)):null})}}
              /></label>
              <p class="fp3d-sub fp3d-wide">${this.t("bin_tags_hint")}</p>`:i}
      </div>`}let s=oc(t),a=this.entityOptions(h=>["binary_sensor.","input_boolean.","sensor.","counter.","input_number."].some(f=>h.startsWith(f))),l=this.entityOptions(h=>h.startsWith("binary_sensor."));return g`<div class="fp3d-form fp3d-links">
      ${o(this.t("mailbox_shape"),s,_s,h=>`mailbox_shape_${h}`,h=>{let[f,m,_]=nc[h];this.updateFurniture({variant:h==="wall"?null:h,w:f,d:m,h:_})})}
      ${n?g`${this.entitySelect(this.t("mailbox_entity"),typeof t.entity=="string"&&t.entity!=="none"?t.entity:null,void 0,a,h=>this.updateFurniture({entity:h??"none"}))}
            ${this.entitySelect(this.t("mailbox_door"),t.mailbox_door??null,void 0,l,h=>this.updateFurniture({mailbox_door:h==="none"?null:h}))}
            <p class="fp3d-sub fp3d-wide">${this.t("mailbox_hint")}</p>`:i}
    </div>`}renderHouseholdExtras(t){let e=t.type==="plant"||Xl(t.type),n=t.type==="washer"||t.type==="dryer"||t.type==="dishwasher",i=t.type==="fridge"||t.type==="fridge_smart",o=tn(t.type);if(!e&&!o)return $;if(!vt("household"))return!xe("household")||!(e||n||i)?$:g`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🏠 ${this.t("pro_name_household")}</b></div>
        <p class="fp3d-sub">${this.t(e?"hh_teaser_plant":i?"hh_teaser_fridge":"hh_teaser_appliance")}</p>
      </section>`;let s=this.entityOptions(c=>c.startsWith("sensor.")),a=this.entityOptions(c=>c.startsWith("binary_sensor.")),l=this.entityOptions(c=>["sensor.","binary_sensor.","input_boolean.","input_datetime.","input_number."].some(u=>c.startsWith(u))),d=c=>c==="none"?null:c;return g`<div class="fp3d-form fp3d-links">
      <p class="fp3d-sub fp3d-wide"><b>🏠 ${this.t("pro_name_household")}</b></p>
      ${e?g`${this.entitySelect(this.t("hh_moisture"),t.moisture??null,void 0,this.entityOptions(c=>c.startsWith("plant.")||c.startsWith("sensor.")),c=>this.updateFurniture({moisture:d(c)}))}
            ${this.num(this.t("hh_moisture_min"),t.moisture_min??20,c=>this.updateFurniture({moisture_min:Math.max(0,Math.min(100,Math.round(c)))}),1)}`:$}
      ${n?g`${this.entitySelect(this.t("hh_remaining"),t.remaining??null,void 0,s,c=>this.updateFurniture({remaining:d(c)}))}
            ${this.entitySelect(this.t("hh_door"),t.door_left??null,void 0,a,c=>this.updateFurniture({door_left:d(c)}))}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_appliance_hint")}</p>`:$}
      ${i?g`${t.type==="fridge"?this.entitySelect(this.t("hh_fridge_door"),t.door_left??null,void 0,a,c=>this.updateFurniture({door_left:d(c)})):$}
            ${this.num(this.t("hh_door_alarm"),t.door_alarm??2,c=>this.updateFurniture({door_alarm:Math.max(.5,Math.min(120,c))}),.5)}`:$}
      ${o?g`${this.entitySelect(this.t("hh_service_entity"),t.service??null,void 0,l,c=>this.updateFurniture({service:d(c)}))}
            ${t.service&&t.service!=="none"?this.num(this.t("hh_service_min"),t.service_min??10,c=>this.updateFurniture({service_min:Math.max(0,c)}),1):$}
            ${t.service&&t.service!=="none"||t.service2&&t.service2!=="none"?this.entitySelect(this.t("hh_service2_entity"),t.service2??null,void 0,l,c=>this.updateFurniture({service2:d(c)})):$}
            ${t.service2&&t.service2!=="none"?this.num(this.t("hh_service2_min"),t.service2_min??10,c=>this.updateFurniture({service2_min:Math.max(0,c)}),1):$}
            <p class="fp3d-sub fp3d-wide">${this.t("hh_service_hint")}</p>`:$}
    </div>`}renderAwningFields(t){let e=this.isAdmin,n=this.entityOptions(s=>s.startsWith("sensor.")||s.startsWith("input_number.")||s.startsWith("number.")),i={arm:{w:3,d:2.5,y:2.3,pitch:null},drop:{w:2.4,d:1.2,y:2.3,pitch:20},vertical:{w:2,d:.2,y:2.3,pitch:null},pergola:{w:4,d:3.5,y:2.6,pitch:6},side:{w:3,d:.2,y:1.8,pitch:null}},o=t.variant??"arm";return g`<label class="fp3d-field fp3d-wide"
        >${this.t("awning_kind")}
        <select
          ?disabled=${!e}
          @change=${s=>{let a=s.target.value,l=i[a];this.updateFurniture({variant:a==="arm"?null:a,w:l.w,d:l.d,mount_y:l.y,awning_pitch:l.pitch})}}
        >
          ${Object.keys(i).map(s=>g`<option value=${s} ?selected=${o===s}>${this.t(`awning_kind_${s}`)}</option>`)}
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
      <p class="fp3d-sub fp3d-wide">${this.t("awning_hint")}</p>`}renderMotionFields(t){let e=this.isAdmin,n=this.entityOptions(o=>o.startsWith("sensor.")||o.startsWith("input_number.")||o.startsWith("number.")),i=t.variant==="left"||t.variant==="right"?t.variant:"both";return g`${Xe(t.type)==="curtain"?g`<label class="fp3d-field fp3d-wide"
            >${this.t("curtain_side")}
            <select ?disabled=${!e} @change=${o=>{let s=o.target.value;this.updateFurniture({variant:s==="both"?null:s})}}>
              ${["both","left","right"].map(o=>g`<option value=${o} ?selected=${i===o}>${this.t(`curtain_side_${o}`)}</option>`)}
            </select></label
          >`:$}
      ${this.num(this.t("motor_time"),t.awning_time??20,o=>this.updateFurniture({awning_time:Math.max(2,Math.min(300,Math.round(o)))}),1)}
      ${this.entitySelect(this.t("awning_position"),t.awning_position??null,void 0,n,o=>this.updateFurniture({awning_position:o==="none"?null:o}))}
      <label class="fp3d-check fp3d-wide" title=${this.t("motor_invert_hint")}
        ><input type="checkbox" .checked=${!!t.awning_invert} ?disabled=${!e} @change=${o=>this.updateFurniture({awning_invert:o.target.checked})} />
        ${this.t("awning_invert")}</label
      >`}renderFurnitureLinks(t){var u;let e=new Set(["smoke","gas","carbon_monoxide","heat","moisture","safety","sound","problem"]);if(!this.hass)return $;let n=this.hass,i=p=>{var f;let h=structuredClone(this._doc.floors);for(let m of h)for(let _ of m.furniture)_.id===t.id&&(_[p]=null);return((f=nn(n,h).get(t.id))==null?void 0:f[p])??null},o=Oi(t.type),s=o&&(!_e(t.type)||ra(t.type)),a=Yt(t.type),l=t.type==="access_point"&&this.hass?Xr(this.hass):this.entityOptions(p=>{var h;return a?/^(light|switch|input_boolean)\./.test(p):s?/^(media_player|switch|input_boolean|light)\./.test(p)||Xe(t.type)==="screen"&&p.startsWith("cover."):t.type==="water_heater"?p.startsWith("water_heater."):t.type==="awning"?p.startsWith("cover."):Xe(t.type)==="curtain"?/^(cover|switch|input_boolean)\./.test(p):t.type==="radiator"||t.type==="ac_unit"?p.startsWith("climate."):be(t.type)?p.startsWith("vacuum."):/^(switch|media_player|fan|input_boolean|climate|vacuum|cover)\./.test(p)||oa(t.type)&&p.startsWith("water_heater.")||ia(t.type)&&/^(binary_sensor|sensor)\./.test(p)||ul(n.states[p])||p.startsWith("binary_sensor.")&&(t.type.endsWith("smoke_detector")||e.has(String(((h=n.states[p])==null?void 0:h.attributes.device_class)??"")))}),d=this.entityOptions(p=>this.isPowerSensor(p)),c=t.type==="fridge_smart"?this.entityOptions(p=>p.startsWith("binary_sensor.")):[];return g`<div class="fp3d-form fp3d-links">
        ${t.type==="grid_point"?g`<p class="fp3d-sub fp3d-wide">${this.t("grid_point_hint")}</p>`:this.entitySelect(this.t(a?"furn_entity_light":Xe(t.type)?"motor_cover":s?"furn_entity_tv":t.type==="awning"?"awning_cover":t.type==="water_heater"?"heater_entity":t.type==="access_point"?"ap_entity":t.type==="radiator"||t.type==="ac_unit"?"furn_entity_climate":be(t.type)?"furn_entity_vacuum":"furn_entity"),t.entity??null,i("entity"),l,p=>this.updateFurniture({entity:p}))}
        ${t.type==="radiator"?g`${this.entitySelect(this.t("heat_sensor"),t.heat_sensor??null,void 0,this.entityOptions(p=>/^(binary_sensor|sensor|switch|input_boolean|number)\./.test(p)),p=>this.updateFurniture({heat_sensor:p&&p!=="none"?p:null}))}
              <p class="fp3d-sub fp3d-wide">${this.t("heat_sensor_hint")}</p>`:$}
        ${t.type==="awning"?this.renderAwningFields(t):t.type==="water_heater"?this.renderHeaterFields(t):t.type==="access_point"?this.renderApFields(t):Xe(t.type)?this.renderMotionFields(t):$}
        ${!a&&!ye.includes(t.type)&&!Ci(t.type)?this.renderStateLinks(t):$}
        ${a&&t.entity&&t.entity!=="none"?g`${this.entitySelect(this.t("furn_color_entity"),t.color_entity??null,void 0,this.entityOptions(p=>p.startsWith("light.")&&p!==t.entity),p=>this.updateFurniture({color_entity:p==="none"?null:p}))}
              <p class="fp3d-sub fp3d-wide">${this.t("furn_color_entity_hint")}</p>`:$}
        ${a?this.glowScaleField(t.glow_scale,p=>this.updateFurniture({glow_scale:p})):$}
        ${a&&t.entity&&t.entity!=="none"?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_only_color_hint")}
                ><input type="checkbox" .checked=${!!t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.checked?"#ffd400":null})} />
                ${this.t("furn_only_color")}</label
              >
              ${t.only_color?g`<label class="fp3d-field"
                      >${this.t("furn_only_color_pick")}
                      <input type="color" .value=${t.only_color} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({only_color:p.target.value})} /></label>
                    <p class="fp3d-sub fp3d-wide">${this.t("furn_only_color_hint")}</p>`:$}`:$}
        ${sr(t.type)?g`${this.entitySelect(this.t("furn_meter_reading"),t.extra??null,void 0,this.entityOptions(p=>{var h,f;return p.startsWith("sensor.")&&(["gas","water","volume"].includes(String(((h=n.states[p])==null?void 0:h.attributes.device_class)??""))||/^(m³|m3|L|l|ft³|gal|CCF)$/.test(String(((f=n.states[p])==null?void 0:f.attributes.unit_of_measurement)??"")))}),p=>this.updateFurniture({extra:p==="none"?null:p}))}`:$}
        ${a||t.type==="grid_point"||sr(t.type)?$:this.entitySelect(this.t(t.type==="meter"?"energy_grid":t.type==="inverter"?"energy_solar_sensor":t.type==="home_battery"?"energy_battery_sensor":"furn_power"),t.power??null,i("power"),d,p=>this.updateFurniture({power:p}))}
        ${!a&&t.power&&t.power!=="none"&&!ye.includes(t.type)?g`<label class="fp3d-field" title=${this.t("furn_run_w_hint")}
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
        ${vt("energy_pro")&&!a&&!["grid_point","meter","inverter","home_battery"].includes(t.type)?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({holo:p.target.checked})} />
              ${this.t("furn_holo")}</label
            >`:vt("energy_pro")&&t.type==="inverter"?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_plant_card_hint")}
                ><input type="checkbox" .checked=${t.plant_card!==!1} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({plant_card:p.target.checked?void 0:!1})} />
                ${this.t("furn_plant_card")}</label
              >
              ${t.plant_card!==!1?g`${this.len(this.t("holo_right"),t.plant_right??0,p=>this.updateFurniture({plant_right:Math.min(30,Math.max(-30,z(p)))||void 0}),.25)}
                  ${this.len(this.t("holo_up"),t.plant_up??0,p=>this.updateFurniture({plant_up:Math.min(30,Math.max(-30,z(p)))||void 0}),.25)}`:$}
              <label class="fp3d-check fp3d-wide" title=${this.t("furn_cable_to_grid_hint")}
                ><input type="checkbox" .checked=${t.cable_to==="grid"} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({cable_to:p.target.checked?"grid":void 0})} />
                ${this.t("furn_cable_to_grid")}</label
              >`:$}
      </div>
      ${t.type==="meter"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_export"),t.export??null,void 0,d,p=>this.updateFurniture({export:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_export_hint")}</p>
          </div>`:$}
      ${t.type==="inverter"&&(this._doc.settings.roof.solar??[]).length?(()=>{let p=(this._doc.settings.roof.strings??[]).filter(h=>h.inverter===t.id).map(h=>h.name);return g`<p class="fp3d-sub fp3d-wide">${p.length?this.t("inverter_strings",{names:p.join(", ")}):this.t("inverter_strings_none")}</p>`})():$}
      ${t.type==="home_battery"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_soc"),t.soc??null,void 0,this.entityOptions(p=>{var h,f;return Lt(p)&&(((h=n.states[p])==null?void 0:h.attributes.device_class)==="battery"||((f=n.states[p])==null?void 0:f.attributes.unit_of_measurement)==="%")}),p=>this.updateFurniture({soc:p==="none"?null:p}))}
            ${this.entitySelect(this.t("furn_charge"),t.charge??null,void 0,d,p=>this.updateFurniture({charge:p==="none"?null:p}))}
            <p class="fp3d-sub fp3d-wide">${this.t("furn_charge_hint")}</p>
          </div>`:$}
      ${t.type==="wallbox"?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_wallbox_status"),t.status??null,void 0,this.entityOptions(p=>ar(p)||Lt(p)),p=>this.updateFurniture({status:p==="none"?null:p}))}
          </div>`:$}
      ${!a&&!sr(t.type)?this.entitySelect(this.t("furn_extra"),t.extra??null,void 0,this.entityOptions(p=>p.startsWith("sensor.")),p=>this.updateFurniture({extra:p==="none"?null:p})):$}
      ${!a||t.entity?g`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
            ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!this.isAdmin} @change=${p=>this.updateFurniture({confirm:p.target.checked})} />
            ${this.t("device_confirm")}</label
          >
          <div class="fp3d-form">${this.markerSelect(t.marker??null,p=>this.updateFurniture({marker:p}))}${this.iconInput(t.icon,p=>this.updateFurniture({icon:p}))}</div>`:$}
      ${be(t.type)?g`<div class="fp3d-form fp3d-links">
            ${this.entitySelect(this.t("furn_robot_room"),t.room_sensor??null,_l(n,((u=nn(n,this._doc.floors).get(t.id))==null?void 0:u.entity)??null,null),this.entityOptions(p=>Lt(p)),p=>this.updateFurniture({room_sensor:p}))}
          </div>`:$}
      ${t.type==="fridge_smart"?g`<div class="fp3d-form fp3d-links">
              ${this.entitySelect(this.t("furn_door_left"),t.door_left??null,void 0,c,p=>this.updateFurniture({door_left:p}))}
              ${this.entitySelect(this.t("furn_door_right"),t.door_right??null,void 0,c,p=>this.updateFurniture({door_right:p}))}
            </div>
            <p class="fp3d-sub">${this.t("fridge_hint")}</p>`:$}
      ${Ci(t.type)?this.renderPictureRules(t):$}
      <p class="fp3d-sub">${this.t(a?t.type==="lamp_pendant"?"lamp_hint_pendant":"lamp_hint":o?"furn_links_hint_tv":be(t.type)?"robot_hint":"furn_links_hint")}</p>`}renderParkingForm(t){var b;let e=this.isAdmin,n=(this.packs??[]).flatMap(v=>v.items.filter(y=>y.vehicle).map(y=>({id:Fe(v.id,y.id),label:`${ce(y)} \xB7 ${ve(v)}`}))),i=v=>{var y,x;return v.startsWith("device_tracker.")?((x=(y=this.hass)==null?void 0:y.states[v])==null?void 0:x.attributes.source_type)==="router"?2:0:1},o=this.entityOptions(v=>/^(binary_sensor|device_tracker|input_boolean|switch|sensor)\./.test(v)).sort((v,y)=>i(v.id)-i(y.id)),s=this.entityOptions(v=>/^(sensor|input_select|select|input_text)\./.test(v)),a=t.type_entity?(b=this.hass)==null?void 0:b.states[t.type_entity]:void 0,l=Array.isArray(a==null?void 0:a.attributes.options)?a.attributes.options:[],d=t.types??[],c=v=>this.updateFurniture({types:v}),u=(v,y)=>g`<select ?disabled=${!e} @change=${x=>y(x.target.value||null)}>
        <option value="" ?selected=${!v}>${this.t("parking_vehicle_none")}</option>
        ${n.map(x=>g`<option value=${x.id} ?selected=${x.id===v}>${x.label}</option>`)}
      </select>`,p=this.floor,h=p==null?void 0:p.rooms.find(v=>v.points.length>=3&&Y([t.x,t.z],v.points)),f=t.vehicle?gt(t.vehicle):void 0,m=f?f.size[2]*(t.scale??1):0,_=!!h&&!!p&&m>p.height+1e-6;return g`<div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("parking_entity"),t.entity??null,void 0,o,v=>this.updateFurniture({entity:v==="none"?null:v}))}
        <label class="fp3d-field fp3d-wide">${this.t("parking_vehicle")} ${u(t.vehicle??null,v=>this.updateFurniture({vehicle:v}))}</label>
        ${n.length?$:g`<p class="fp3d-sub fp3d-wide">${this.t("parking_no_pack")}</p>`}
        ${this.num(this.t("parking_scale"),Math.round((t.scale??1)*100),v=>this.updateFurniture({scale:Math.min(150,Math.max(30,v))/100}),5,30)}
        ${this.entitySelect(this.t("parking_type_entity"),t.type_entity??null,void 0,s,v=>this.updateFurniture({type_entity:v==="none"?null:v}))}
        ${t.type_entity?g`<div class="fp3d-wide">
              <div class="fp3d-sub">${this.t("parking_types")}</div>
              ${d.map((v,y)=>g`<div class="fp3d-parking-row">
                  <input
                    type="text"
                    list="fp3d-parking-states"
                    placeholder=${this.t("parking_type_state")}
                    .value=${v.state}
                    ?disabled=${!e}
                    @change=${x=>c(d.map((P,A)=>A===y?{...P,state:x.target.value}:P))}
                  />
                  ${u(v.vehicle,x=>c(d.map((P,A)=>A===y?{...P,vehicle:x??""}:P)))}
                  <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>c(d.filter((x,P)=>P!==y))}>✕</button>
                </div>`)}
              <datalist id="fp3d-parking-states">${l.map(v=>g`<option value=${v}></option>`)}</datalist>
              ${e?g`<button class="fp3d-btn" @click=${()=>{var v;return c([...d,{state:l[d.length]??"",vehicle:((v=n[0])==null?void 0:v.id)??""}])}}>${this.t("parking_add_type")}</button>`:$}
            </div>`:$}
      </div>
      ${_?g`<p class="fp3d-sub fp3d-warn">${this.t("parking_too_tall",{car:Bt(this.hass,m,2),room:Bt(this.hass,p.height,2)})}</p>`:$}
      <p class="fp3d-sub">${this.t("parking_hint")}</p>
      ${this.renderCarForm(t)}`}renderCarForm(t){if(!vt("auto_pro"))return g`<section class="fp3d-teaser">
        <div class="fp3d-teaser-head"><b>🚗 ${this.t("pro_name_auto_pro")}</b></div>
        <p class="fp3d-sub">${this.t("auto_pro_teaser")}</p>
      </section>`;if(!this.hass)return $;let e=this.hass,n=t.car??{},i=gl(e,{entity:t.entity,car:{device:n.device}}),o=l=>this.updateFurniture({car:{...n,...l}}),s=this.entityOptions(l=>/^(sensor|binary_sensor|lock|climate|switch|device_tracker|number|select|input_number|input_boolean)\./.test(l)),a=(l,d,c)=>this.entitySelect(this.t(d),n[l]??null,i[l],c,u=>o({[l]:u==="none"?"none":u}));return g`<section>
      <h3>🚗 ${this.t("pro_name_auto_pro")}</h3>
      <p class="fp3d-sub">${this.t("car_hint")}</p>
      <div class="fp3d-form fp3d-links">
        ${this.entitySelect(this.t("car_device"),n.device??null,void 0,s,l=>o({device:l==="none"?null:l}))}
        ${a("soc","car_soc",this.entityOptions(l=>Lt(l)))}
        ${a("range","car_range",this.entityOptions(l=>Lt(l)))}
        ${a("charging","car_charging",this.entityOptions(l=>/^(sensor|binary_sensor|switch|input_boolean|input_number|number)\./.test(l)))}
        ${a("plugged","car_plugged",this.entityOptions(l=>ar(l)))}
        ${a("lock","car_lock",this.entityOptions(l=>/^(lock|binary_sensor|sensor|input_boolean|switch)\./.test(l)))}
        ${a("climate","car_climate",this.entityOptions(l=>/^(climate|switch|binary_sensor|input_boolean)\./.test(l)))}
        ${a("tracker","car_tracker",this.entityOptions(l=>l.startsWith("device_tracker.")))}
      </div>
    </section>`}storedPictures(){let t=[];for(let e of this._doc.floors)for(let n of e.furniture)for(let i of n.pictures??[])i.image&&!/^https?:\/\//.test(i.image)&&!i.image.startsWith("camera:")&&!t.includes(i.image)&&t.push(i.image);return t}renderPictureRules(t){let e=this.isAdmin,n=t.pictures??[];if(!vt("screens"))return g`<div class="fp3d-wide">
        <div class="fp3d-sub">${this.t("screen_pictures")}</div>
        <p class="fp3d-sub">🔒 ${this.t("pro_feature_screens")} – ${this.t("pro_locked")} <a href=${sn("screens")} target="_blank" rel="noopener">${this.t("manual_more")}</a></p>
      </div>`;let i=b=>this.updateFurniture({pictures:b}),o=this.entityOptions(()=>!0),s=b=>["string","number","boolean"].includes(typeof b),a=b=>{var v,y;return Object.entries(((y=(v=this.hass)==null?void 0:v.states[b])==null?void 0:y.attributes)??{}).filter(([x,P])=>s(P)&&x!=="friendly_name"&&x!=="icon").map(([x])=>x)},l=(b,v)=>{var x;let y=(x=this.hass)==null?void 0:x.states[b];return y?String((v?y.attributes[v]:y.state)??""):""},d=(b,v)=>{var P;let y=(P=this.hass)==null?void 0:P.states[b],x=!v&&Array.isArray(y==null?void 0:y.attributes.options)?y.attributes.options:[];return x.length?x:[l(b,v)]},c=b=>`${b.entity}\0${b.attribute??""}`,u=[];n.forEach((b,v)=>{let y=u.find(x=>c(x)===c(b));y?y.rows.push(v):u.push({entity:b.entity,attribute:b.attribute??null,rows:[v]})});let p=(b,v)=>i(n.map((y,x)=>b.rows.includes(x)?{...y,...v}:y)),h=(b,v)=>i(n.map((y,x)=>x===b?{...y,...v}:y)),f=this.storedPictures(),m=this.entityOptions(b=>b.startsWith("camera.")),_=b=>b.image.startsWith("camera:")?b.image.slice(7):null;return g`<div class="fp3d-wide">
      <div class="fp3d-sub">${this.t("screen_pictures")}</div>
      ${n.length?g`<label class="fp3d-field fp3d-wide"
            >${this.t("screen_bg")}
            <select ?disabled=${!e} @change=${b=>this.updateFurniture({screen_bg:b.target.value})}>
              <option value="black" ?selected=${(t.screen_bg??"black")==="black"}>${this.t("screen_bg_black")}</option>
              <option value="white" ?selected=${t.screen_bg==="white"}>${this.t("screen_bg_white")}</option>
            </select></label
          >`:$}
      ${u.map(b=>g`<div class="fp3d-picture-group">
          <fp3d-entity-picker
            .options=${o}
            .value=${b.entity}
            .placeholder=${this.t("entity_search")}
            ?disabled=${!e}
            @change=${v=>{v.stopPropagation(),p(b,{entity:v.detail.value})}}
          ></fp3d-entity-picker>
          <select
            ?disabled=${!e}
            title=${this.t("picture_attribute")}
            @change=${v=>{let y=v.target.value||null,x=l(b.entity,y);i(n.map((P,A)=>b.rows.includes(A)?{...P,attribute:y,state:b.rows[0]===A?x:P.state}:P))}}
          >
            <option value="" ?selected=${!b.attribute}>${this.t("picture_state_of")}</option>
            ${a(b.entity).map(v=>g`<option value=${v} ?selected=${v===b.attribute}>${v}</option>`)}
          </select>
          <span class="fp3d-sub fp3d-rule-now">${this.t("picture_current",{value:l(b.entity,b.attribute)||"\u2013"})}</span>
          ${b.rows.map(v=>{var P,A;let y=n[v],x=!!this.hass&&fl(this.hass,y);return g`<div class="fp3d-picture-row ${x?"fp3d-rule-hit":""}">
              <input
                type="text"
                list="fp3d-picture-states-${v}"
                placeholder=${this.t("picture_state")}
                .value=${y.state}
                ?disabled=${!e}
                @change=${F=>h(v,{state:F.target.value})}
              />
              <datalist id="fp3d-picture-states-${v}"><option value="*"></option>${d(b.entity,b.attribute).map(F=>g`<option value=${F}></option>`)}</datalist>
              ${this._images[y.image]?g`<img class="fp3d-picture-thumb" src=${this._images[y.image].url} alt="" /> `:$}
              ${_(y)&&((A=(P=this.hass)==null?void 0:P.states[_(y)])!=null&&A.attributes.entity_picture)?g`<img class="fp3d-picture-thumb" src=${String(this.hass.states[_(y)].attributes.entity_picture)} alt="" />`:$}
              <label class="fp3d-btn fp3d-picture-pick">
                ${y.image?this.t("picture_change"):this.t("picture_pick")}
                <input type="file" accept="image/*" hidden ?disabled=${!e} @change=${F=>{this.uploadPicture(F,t,v)}} />
              </label>
              ${f.filter(F=>F!==y.image).length?g`<div class="fp3d-picture-reuse" title=${this.t("picture_reuse")}>
                    ${f.filter(F=>F!==y.image&&this._images[F]).map(F=>g`<button class="fp3d-picture-reuse-btn" ?disabled=${!e} @click=${()=>h(v,{image:F})}><img src=${this._images[F].url} alt="" /></button>`)}
                  </div>`:$}
              <input
                type="url"
                placeholder=${this.t("picture_url")}
                .value=${/^https?:\/\//.test(y.image)?y.image:""}
                ?disabled=${!e}
                @change=${F=>{let T=F.target.value.trim();T&&h(v,{image:T})}}
              />
              ${m.length?g`<fp3d-entity-picker
                    class="fp3d-picture-camera"
                    .options=${m}
                    .fixed=${[{id:"none",label:this.t("picture_camera_none")}]}
                    .value=${_(y)??"none"}
                    .placeholder=${this.t("picture_camera")}
                    ?disabled=${!e}
                    @change=${F=>{F.stopPropagation(),F.detail.value!=="none"?h(v,{image:`camera:${F.detail.value}`}):_(y)&&h(v,{image:""})}}
                  ></fp3d-entity-picker>`:$}
              <span class="fp3d-sub">${x?this.t("picture_matches"):""}</span>
              <button class="fp3d-btn" ?disabled=${!e} title=${this.t("delete")} @click=${()=>i(n.filter((F,T)=>T!==v))}>✕</button>
            </div>`})}
          ${e?g`<button class="fp3d-btn" @click=${()=>i([...n,{entity:b.entity,attribute:b.attribute,state:l(b.entity,b.attribute),image:""}])}>
                ${this.t("picture_add_value")}
              </button>`:$}
        </div>`)}
      ${e?g`<button class="fp3d-btn" @click=${()=>{var b;return i([...n,{entity:((b=o[0])==null?void 0:b.id)??"",attribute:null,state:"on",image:""}])}}>${this.t("picture_add_entity")}</button>`:$}
      <p class="fp3d-sub">${this.t("screen_pictures_hint")}</p>
    </div>`}async uploadPicture(t,e,n){var p,h;let i=t.target,o=(p=i.files)==null?void 0:p[0];if(i.value="",!o)return;let s=await createImageBitmap(o),a=Math.min(1,512/Math.max(s.width,s.height)),l=document.createElement("canvas");l.width=Math.round(s.width*a),l.height=Math.round(s.height*a),l.getContext("2d").drawImage(s,0,0,l.width,l.height);let d=l.toDataURL(o.type==="image/png"?"image/png":"image/jpeg",.85),c=tt("pic");await _i(this.hass,c,d),this._images={...this._images,[c]:{url:d,aspect:l.height/l.width}};let u=((h=this.furnitureItem)==null?void 0:h.id)===e.id?this.furnitureItem.pictures??[]:e.pictures??[];this.updateFurniture({pictures:u.map((f,m)=>m===n?{...f,image:c}:f)})}libIndex=null;libraryEntries(t){var o,s;let e=vt("fridge_smart")||vt("household")?["fridge_smart"]:[],n=`${t}|${na()}|${((o=this.packs)==null?void 0:o.length)??0}|${e.length}`;if(((s=this.libIndex)==null?void 0:s.key)===n)return this.libIndex.entries;let i=Od({packs:this.packs??[],basics:Td(e),language:t,basicName:a=>this.t(`furn_${a}`),basicNameEn:a=>ae(rr,`furn_${a}`),kindName:a=>this.t(`lib_kind_${a}`),size:jt});return this.libIndex={key:n,entries:i},i}libraryThumb=async t=>{let e=await ii(),[n,i,o]=t.size;return e.furniturePreview({type:t.type,w:n,d:i,h:o,variant:null,lamp:Dn[t.type]??null},96,this.packs??[])};renderFurnitureLibrary(){var n;let t=this.room,e=((n=this.hass)==null?void 0:n.language)??"en";return g`<section>
      <h3>${this.t("furniture_add")}</h3>
      <p class="fp3d-sub">${t?this.t("furniture_into",{room:t.name}):this.t("furniture_pick_room")}</p>
      <fp3d-library
        .entries=${this.libraryEntries(e)}
        .language=${e}
        .roomHint=${t?Ld(t.name):null}
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
    </div>`}async showPreview(t,e){var o;let n=e.getBoundingClientRect(),i={left:Math.max(8,n.left-196),top:Math.max(8,Math.min(window.innerHeight-200,n.top+n.height/2-95))};this._preview={type:t,url:null,...i};try{let s=await ii(),[a,l,d]=jt(t),c=s.furniturePreview({type:t,w:a,d:l,h:d,variant:null,lamp:Dn[t]??null},180,this.packs??[]);((o=this._preview)==null?void 0:o.type)===t&&(this._preview={type:t,url:c,...i})}catch{this._preview=null}}renderPreview(){let t=this._preview;return t?g`<div class="fp3d-preview" style="left:${t.left}px;top:${t.top}px" aria-hidden="true">
      ${t.url?g`<img src=${t.url} alt="" />`:g`<span class="fp3d-preview-wait"></span>`}
      <b>${Pe(this.hass,t.type)}</b>
    </div>`:$}renderDeviceForm(t){var a;let e=this.isAdmin,n=rt(t.entity_id),i=n==="light",o=t.mount??"ceiling",s=n?Ti(n,((a=this.floor)==null?void 0:a.height)??2.5,i?o:null):1;return g`<section>
      <div class="fp3d-h3row"><h3>${this.t("device")}</h3>${this.fixButton("device",t.entity_id)}</div>
      <p class="fp3d-dev-title">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d=${n?Gn(n):""} />
        </svg>
        ${_t(this.hass,t.entity_id)}
      </p>
      <div class="fp3d-form">
        ${i?g`<label class="fp3d-field fp3d-wide"
              >${this.t("lamp_mount")}
              <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                ${["ceiling","floor","table","wall"].map(l=>g`<option value=${l} ?selected=${l===o}>${this.t(`lamp_${l}`)}</option>`)}
              </select></label
            >
            ${this.glowScaleField(t.glow_scale,l=>this.updateDevice({glow_scale:l}))}`:n==="camera"?g`<label class="fp3d-field fp3d-wide"
                >${this.t("camera_mount")}
                <select ?disabled=${!e} @change=${l=>this.updateDevice({mount:l.target.value,y:null})}>
                  <option value="wall" ?selected=${(t.mount??"wall")==="wall"}>${this.t("camera_mount_wall")}</option>
                  <option value="ceiling" ?selected=${t.mount==="ceiling"}>${this.t("camera_mount_ceiling")}</option>
                </select></label
              >`:$}
        ${this.len(this.t("x"),t.x,l=>this.updateDevice({x:l}))} ${this.len(this.t("z"),t.z,l=>this.updateDevice({z:l}))}
        ${this.len(this.t("marker_height"),t.y??s,l=>this.updateDevice({y:Math.max(0,l)}),.05,0)}
        ${this.num(this.t("rotation"),t.rotation??0,l=>this.updateDevice({rotation:(l%360+360)%360}),1)}
        ${n==="camera"?g`${this.num(this.t("camera_fov"),t.fov??(t.mount==="ceiling"?360:90),l=>this.updateDevice({fov:Math.min(360,Math.max(10,l))}),5,10)}
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
        ${n&&sl.has(n)?g`<label class="fp3d-check fp3d-wide" title=${this.t("device_confirm_hint")}
              ><input type="checkbox" .checked=${!!t.confirm} ?disabled=${!e} @change=${l=>this.updateDevice({confirm:l.target.checked})} />
              ${this.t("device_confirm")}</label
            >`:$}
        ${vt("energy_pro")&&ld(this.hass,t.entity_id)?g`<label class="fp3d-check fp3d-wide" title=${this.t("furn_holo_hint")}
              ><input type="checkbox" .checked=${!!t.holo} ?disabled=${!e} @change=${l=>this.updateDevice({holo:l.target.checked||void 0})} />
              ${this.t("furn_holo")}</label
            >`:$}
        ${this.markerSelect(t.marker??null,l=>this.updateDevice({marker:l}))}
        <label class="fp3d-field fp3d-wide" title=${this.t("device_name_hint")}
          >${this.t("device_name")}
          <input type="text" .value=${t.name??""} ?disabled=${!e} maxlength="60" placeholder=${_t(this.hass,t.entity_id)} @change=${l=>this.updateDevice({name:l.target.value.trim()||null})}
        /></label>
        <label class="fp3d-field fp3d-wide" title=${this.t("aliases_hint")}
          >${this.t("aliases")}
          <input type="text" maxlength="240" .value=${(t.aliases??[]).join(", ")} ?disabled=${!e} placeholder=${this.t("aliases_placeholder")} @change=${l=>this.updateDevice({aliases:Ei(l.target.value)})}
        /></label>
        ${t.name?g`<label class="fp3d-check fp3d-wide"
              ><input type="checkbox" .checked=${!!t.show_name} ?disabled=${!e} @change=${l=>this.updateDevice({show_name:l.target.checked||void 0})} />
              ${this.t("show_name")}</label
            >`:$}
        ${this.iconInput(t.icon,l=>this.updateDevice({icon:l}))}
      </div>
      ${e?g`<div class="fp3d-actions">
            <button class="fp3d-btn" @click=${()=>this.centreDevice()}>${this.t("device_centre")}</button>
            ${t.y!==null?g`<button class="fp3d-btn" @click=${()=>this.updateDevice({y:null})}>${this.t("height_auto")}</button>`:$}
            ${this.renderAsFurniture(t)}
            <button
              class="fp3d-btn fp3d-danger"
              @click=${()=>{this.removeDevice(t.entity_id),this._deviceId=null}}
            >
              ${this.t("devices_remove")}
            </button>
          </div>`:$}
    </section>`}renderDeviceList(t){var F,T,S,M,w;let e=this.isAdmin,n=this.hass,i=t.area_id?(T=(F=n==null?void 0:n.areas)==null?void 0:F[t.area_id])==null?void 0:T.name:void 0,o=n?$e(n,t.area_id).filter(k=>Te(rt(k))):[],s=new Set([...((S=this.floor)==null?void 0:S.placements.filter(k=>Y([k.x,k.z],t.points)).map(k=>k.entity_id))??[],...((M=this.floor)==null?void 0:M.furniture.filter(k=>Yt(k.type)&&k.entity&&Y([k.x,k.z],t.points)).map(k=>k.entity))??[]]),a=n&&this.floor?ml(n,this.floor,{...t,hidden:[]}).shown:[],l=n?[...new Set([...o,...[...s].filter(k=>_n(n,k)&&Te(rt(k))),...a.filter(k=>Te(rt(k)))])]:o,d=n?Li(n,l):[],c=d.map(k=>k.primary).filter(k=>!s.has(k)&&(o.includes(k)||!a.includes(k))),u=this._deviceQuery.trim().toLowerCase(),p=k=>!u||_t(n,k,i).toLowerCase().includes(u)||k.includes(u),h=(w=this.floor)==null?void 0:w.placements.filter(k=>rt(k.entity_id)==="light"&&(k.mount??"ceiling")==="ceiling"&&Y([k.x,k.z],t.points)).length,f=new Set(t.panel??[]),m=new Set(t.hidden??[]),_=new Set(t.no_state??[]),b=new Map;for(let k of this._doc.floors)for(let E of[...k.placements.map(I=>[I.entity_id,I.x,I.z]),...k.furniture.filter(I=>Yt(I.type)&&I.entity).map(I=>[I.entity,I.x,I.z])]){let I=k.rooms.find(C=>Y([E[1],E[2]],C.points));I&&I.id!==t.id&&b.set(E[0],I.name)}let v=(k,E=!1,I=i,C=!1)=>{let O=s.has(k),D=O?void 0:b.get(k);return g`<div class="fp3d-row fp3d-dev-row ${E||C?"fp3d-dev-extra":""} ${m.has(k)?"fp3d-dev-hidden":""}">
        <button class="fp3d-dev-name ${O?"":"fp3d-muted"}" ?disabled=${!O} @click=${()=>this.selectItem("device",k)}>
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d=${Gn(rt(k))} />
          </svg>
          <span>${_t(n,k,I)}${D?g`<small class="fp3d-muted"> · ${this.t("devices_placed_in",{room:D})}</small>`:$}</span>
        </button>
        ${e&&!E?g`<button
              class="fp3d-pin ${m.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${m.has(k)}
              title=${this.t(m.has(k)?"panel_unhide":"panel_hide")}
              @click=${()=>this.updateRoom({hidden:m.has(k)?[...m].filter(j=>j!==k):[...m,k]})}
            >
              ${m.has(k)?"\u{1F648}":"\u{1F441}"}
            </button>`:$}
        ${e&&!E&&!m.has(k)?g`<button
              class="fp3d-pin ${_.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${_.has(k)}
              title=${this.t(_.has(k)?"panel_state_show":"panel_state_hide")}
              @click=${()=>this.updateRoom({no_state:_.has(k)?[..._].filter(j=>j!==k):[..._,k]})}
            >
              ${_.has(k)?"\u2205":"Aa"}
            </button>`:$}
        ${e&&!O?g`<button
              class="fp3d-pin ${f.has(k)?"fp3d-pin-on":""}"
              aria-pressed=${f.has(k)}
              title=${this.t(f.has(k)?"panel_unpin":"panel_pin")}
              @click=${()=>this.updateRoom({panel:f.has(k)?[...f].filter(j=>j!==k):[...f,k]})}
            >
              ${f.has(k)?"\u2605":"\u2606"}
            </button>`:$}
        ${e?O?g`<button class="fp3d-link" @click=${()=>this.removeDevice(k)}>${this.t("devices_remove")}</button>`:g`<button class="fp3d-link" @click=${()=>this.placeDevices([k])}>${this.t("devices_place")}</button>`:$}
      </div>`},y=e?this._devSource:"area",x=k=>{this._devSource=k,this._deviceQuery=""},P=g`<input
      class="fp3d-search"
      type="search"
      placeholder=${this.t("devices_search")}
      .value=${this._deviceQuery}
      @input=${k=>this._deviceQuery=k.target.value}
    />`,A=()=>{confirm(this.t("devices_place_all_confirm",{n:c.length}))&&this.placeDevices(c)};return g`<section>
      <h3>${this.t("devices")}</h3>
      <p class="fp3d-sub">${this.t("devices_panel_hint")}</p>
      ${e?g`<div class="fp3d-seg fp3d-dev-source">
            <button aria-pressed=${y==="area"} @click=${()=>x("area")}>${this.t("devices_src_area")}${l.length?` (${d.length})`:""}</button>
            <button aria-pressed=${y==="other"} @click=${()=>x("other")}>${this.t("devices_src_other")}</button>
            <button aria-pressed=${y==="none"} @click=${()=>x("none")}>${this.t("devices_src_none")}</button>
          </div>`:$}
      ${y!=="area"?g`${P}${this.renderDeviceExtras(t,v,y)}`:t.area_id?l.length?g`${e&&(h??0)>=2?g`<button class="fp3d-btn fp3d-wide-btn" @click=${()=>this.spreadCeilingLights(t)}>${this.t("lights_spread")}</button>`:$}
              ${l.length>8?P:$}
              <div class="fp3d-room-list">
                ${d.map(k=>{let E=k.others.filter(p),I=this._expanded.has(k.primary)||!!u&&E.length>0;return!p(k.primary)&&!E.length?$:g`${v(k.primary)}
                  ${k.others.length?g`<button
                        class="fp3d-more"
                        @click=${()=>{let C=new Set(this._expanded);C.has(k.primary)?C.delete(k.primary):C.add(k.primary),this._expanded=C}}
                      >
                        ${I?this.t("devices_less"):this.t("devices_more",{n:k.others.length})}
                      </button>`:$}
                  ${I?this.renderDeviceOthers(u?E:k.others,C=>v(C,!1,i,!0),m,e):$}`})}
              </div>
              ${e&&c.length>1?g`<button class="fp3d-link fp3d-place-all" @click=${A}>${this.t("devices_place_all_n",{n:c.length})}</button>`:$}
              <p class="fp3d-sub">${this.t("devices_hint")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`:g`<p class="fp3d-sub">${this.t("devices_none_area")}</p>`}
    </section>`}renderDeviceOthers(t,e,n,i){let s=t.every(l=>n.has(l)),a=()=>{let l=new Set(n);for(let d of t)s?l.delete(d):l.add(d);this.updateRoom({hidden:[...l]})};return g`${i&&t.length>=5?g`<button class="fp3d-link fp3d-dev-all" @click=${a}>
            ${this.t(s?"devices_show_all":"devices_hide_all",{n:t.length})}
          </button>`:$}
      ${t.slice(0,40).map(e)}
      ${t.length>40?g`<p class="fp3d-sub">${this.t("devices_narrow",{n:t.length-40})}</p>`:$}`}renderDeviceExtras(t,e,n){let i=this.hass;if(!i)return $;let o=50,s=this._deviceQuery.trim().toLowerCase(),a=(c,u)=>!s||`${_t(i,c,u)} ${c} ${u??""}`.toLowerCase().includes(s),l=c=>c>0?g`<p class="fp3d-sub">${this.t("devices_narrow",{n:c})}</p>`:$;if(n==="other"){let c=0,u=0,p=al(i,t.area_id).map(h=>{let f=h.ids.filter(_=>a(_,h.name)),m=f.slice(0,Math.max(0,o-c));return c+=m.length,u+=f.length-m.length,m.length?g`<div class="fp3d-dev-area">${h.name}</div>${m.map(_=>e(_,!1,h.name))}`:$});return c?g`<div class="fp3d-room-list">${p}</div>${l(u)}`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`}let d=ll(i).filter(c=>a(c));return d.length?g`<div class="fp3d-room-list">${d.slice(0,o).map(c=>e(c))}</div>${l(d.length-Math.min(d.length,o))}`:g`<p class="fp3d-sub">${this.t("devices_none")}</p>`}renderRoomClimate(t){let e=this.hass;if(!e)return $;let n=(s,a)=>{let l={...t.climate??{},[s]:a},d=Object.values(l).every(c=>c==null);this.updateRoom({climate:d?null:l})},i=!!t.climate&&Object.values(t.climate).some(s=>s!=null),o=(s,a)=>{var p;let l=Qo[s],d=cl(e,this.floor??null,{...t,climate:null},s),c=Zo[s],u=this.entityOptions(h=>{var f,m;return Lt(h)&&((f=e.states[h])==null?void 0:f.attributes.device_class)===l||!!c&&h.startsWith("climate.")&&typeof((m=e.states[h])==null?void 0:m.attributes[c])=="number"}).map(h=>({...h,rank:(Qt(e,h.id)===t.area_id?0:1)+(Jo(e,h.id)?0:2)})).sort((h,f)=>h.rank-f.rank).map(({id:h,label:f})=>({id:h,label:f}));return this.entitySelect(a,((p=t.climate)==null?void 0:p[s])??null,d[0]??null,u,h=>n(s,h))};return g`<details class="fp3d-points" ?open=${i}>
      <summary>${this.t("climate")}</summary>
      <div class="fp3d-form">
        ${o("temperature",this.t("climate_temperature"))} ${o("humidity",this.t("climate_humidity"))} ${o("co2",this.t("climate_co2"))}
      </div>
      <p class="fp3d-sub">${this.t("climate_hint")}</p>
    </details>`}renderBackgroundForm(t){let e=t.background;return g`<details class="fp3d-section" ?open=${this._bgOpen} @toggle=${n=>this._bgOpen=n.target.open}>
      <summary>${this.t("background")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-btn fp3d-wide fp3d-upload"
          >${this.t("background_upload")}<input type="file" accept="image/png,image/jpeg,image/webp" @change=${this.uploadBackground}
        /></label>
        ${e?g`${this.len(this.t("x"),e.x,n=>this.updateFloor({background:{...e,x:n}}))}
              ${this.len(this.t("z"),e.z,n=>this.updateFloor({background:{...e,z:n}}))}
              ${this.len(this.t("background_width"),e.width,n=>this.updateFloor({background:{...e,width:Math.max(.1,n)}}),.01,.1)}
              ${this.num(this.t("background_rotation"),e.rotation??0,n=>this.updateFloor({background:{...e,rotation:Math.round(n*10)/10}}),.5)}
              ${this.isAdmin?g`<button
                      class="fp3d-btn fp3d-wide ${this._bgEdit?"fp3d-primary":""}"
                      aria-pressed=${this._bgEdit}
                      @click=${()=>{this._bgEdit=!this._bgEdit,this._bgEdit&&(this._tool="select")}}
                    >
                      ${this.t(this._bgEdit?"background_edit_done":"background_edit")}
                    </button>
                    <p class="fp3d-sub fp3d-wide">${this.t(this._bgEdit?"background_handles_hint":"background_fixed_hint")}</p>
                  <button class="fp3d-btn fp3d-wide ${this._bgLevel?"fp3d-primary":""}" aria-pressed=${!!this._bgLevel} @click=${()=>{this._bgLevel=this._bgLevel?null:[],this._bgRuler=null,this._bgEdit=!1}}>📐 ${this.t(this._bgLevel?"bg_level_cancel":"bg_level")}</button>
                  ${this._bgLevel?g`<p class="fp3d-sub fp3d-wide">${this.t(this._bgLevel.length?"bg_level_second":"bg_level_first")}</p>`:$}
                  <button class="fp3d-btn fp3d-wide ${this._bgRuler?"fp3d-primary":""}" aria-pressed=${!!this._bgRuler} @click=${()=>{this._bgRuler=this._bgRuler?null:[],this._bgLevel=null,this._bgEdit=!1}}>📏 ${this.t(this._bgRuler?"bg_ruler_cancel":"bg_ruler")}</button>
                  ${this._bgRuler?this._bgRuler.length<2?g`<p class="fp3d-sub fp3d-wide">${this.t(this._bgRuler.length?"bg_ruler_second":"bg_ruler_first")}</p>`:g`<p class="fp3d-sub fp3d-wide">${this.t("bg_ruler_length_hint",{m:this.m(Math.hypot(this._bgRuler[1][0]-this._bgRuler[0][0],this._bgRuler[1][1]-this._bgRuler[0][1]))})}</p>
                          <label class="fp3d-field"
                            >${qn(this.t("bg_ruler_length"),this.unit)}
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
    </details>`}async loadHistory(){if(this.hass)try{this._history=await jr(this.hass)}catch{this._history=[]}}async restoreFromHistory(t){!this.hass||!confirm(this.t("backup_restore_confirm",{time:this.snapshotTime(t)}))||(await Vr(this.hass,t.id),this._notice=this.t("backup_restored"),await this.loadHistory())}async exportBackup(){if(this.hass){this._backupBusy=!0;try{let t=await Br(this.hass),e={};for(let i of Ya(t.building))try{e[i]=await ko(this.hass,i)}catch{}let n=new Date().toISOString().slice(0,10);qo(`neonplan3d-${this.t("export_name_full")}-${n}.json`,JSON.stringify({...t,exported_at:new Date().toISOString(),images:e}))}catch(t){alert(this.t("backup_import_error",{error:String((t==null?void 0:t.message)??t)}))}finally{this._backupBusy=!1}}}async importBackup(t){var o,s,a,l;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=JSON.parse(await n.text())}catch{alert(this.t("import_error_not_json"));return}if((i==null?void 0:i.format)!=="neonplan3d-backup"||!i.building){alert(this.t("backup_full_not_backup"));return}if(confirm(this.t("backup_full_confirm"))){this._backupBusy=!0;try{let d=await qr(this.hass,i.building,i.packs??[]),c=0;for(let[p,h]of Object.entries(i.images??{}))try{await _i(this.hass,p,h),c++}catch{}this.setDoc(Ii(d.building)),this._floorId=((s=d.building.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this.dispatchEvent(new CustomEvent("packs-changed",{bubbles:!0,composed:!0}));let u=d.skipped.length?` ${this.t("backup_full_skipped",{packs:d.skipped.map(p=>p.id).join(", ")})}`:"";this._notice=this.t("backup_full_restored",{packs:d.packs,pictures:c})+u}catch(d){let c=d??{};alert(this.t("backup_import_error",{error:String(c.message??((a=c.error)==null?void 0:a.message)??c.code??((l=c.error)==null?void 0:l.code)??d)}))}finally{this._backupBusy=!1}}}exportPlan(t){let e=new Date().toISOString().slice(0,10);qo(`neonplan3d-${this.t(t?"export_name_template":"export_name_backup")}-${e}.json`,JSON.stringify(Ua(this._doc,t),null,2))}async importPlan(t){var o,s;let e=t.target,n=(o=e.files)==null?void 0:o[0];if(e.value="",!n||!this.hass)return;let i;try{i=Ga(await n.text())}catch(a){let l=a.message;alert(l==="not_json"?this.t("import_error_not_json"):l==="not_plan"?this.t("import_error_not_plan"):this.t("backup_import_error",{error:l}));return}confirm(this.t("backup_import_confirm"))&&(await Dr(this.hass).catch(()=>{}),this.setDoc(i),this._floorId=((s=i.floors[0])==null?void 0:s.id)??null,this.selectItem("room",null),this.fit(),this._notice=this.t("backup_imported"))}snapshotTime(t){var e;return new Date(t.saved_at*1e3).toLocaleString((e=this.hass)==null?void 0:e.language,{dateStyle:"short",timeStyle:"short"})}renderBackup(){return g`<details
      class="fp3d-section"
      @toggle=${t=>{t.target.open&&this.loadHistory()}}
    >
      <summary>${this.t("backup")}</summary>
      <h4 class="fp3d-lib-head">${this.t("backup_history")}</h4>
      ${this._history===null?g`<p class="fp3d-sub">${this.t("loading")}</p>`:this._history.length?g`<div class="fp3d-room-list">
              ${this._history.map(t=>g`<div class="fp3d-row fp3d-dev-row">
                  <span>${this.snapshotTime(t)} <span class="fp3d-muted">· ${this.t("backup_summary",{rooms:t.rooms,furniture:t.furniture})}</span></span>
                  <button class="fp3d-link" @click=${()=>this.restoreFromHistory(t)}>${this.t("backup_restore")}</button>
                </div>`)}
            </div>`:g`<p class="fp3d-sub">${this.t("backup_none")}</p>`}
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
    </details>`}renderBackdrop(){let t=this._doc.settings.backdrop??{},e=o=>this.change(s=>s.settings.backdrop={...s.settings.backdrop??{},...o}),n=t.kind??"",i=(o,s,a,l)=>g`<label class="fp3d-field"
        >${this.t(o)}
        <input type="color" .value=${s??a} @change=${d=>e({[l]:d.target.value})} />
      </label>`;return g`<details class="fp3d-section">
      <summary>🖼 ${this.t("backdrop")}</summary>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("backdrop_kind")}
          <select @change=${o=>e({kind:o.target.value||null})}>
            ${["","color","gradient","image"].map(o=>g`<option value=${o} ?selected=${n===o}>${this.t(`backdrop_${o||"look"}`)}</option>`)}
          </select></label
        >
        ${n==="color"||n==="gradient"?i(n==="gradient"?"backdrop_top":"backdrop_color",t.color,"#0b1426","color"):$}
        ${n==="gradient"?i("backdrop_bottom",t.color2,"#03060c","color2"):$}
        ${n==="image"?g`<label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_image_url")}
                <input type="text" placeholder="/local/hintergrund.jpg" .value=${t.image??""} @change=${o=>e({image:o.target.value.trim()||null})}
              /></label>
              <label class="fp3d-field fp3d-wide"
                >${this.t("backdrop_dim")} (${Math.round((t.dim??.45)*100)} %)
                <input type="range" min="0" max="90" .value=${String(Math.round((t.dim??.45)*100))} @change=${o=>e({dim:Number(o.target.value)/100})}
              /></label>
              ${t.image&&!pc(t.image)?g`<p class="fp3d-sub fp3d-wide fp3d-pack-error">${this.t("backdrop_image_bad")}</p>`:$}`:$}
      </div>
      <p class="fp3d-sub">${this.t("backdrop_hint")}</p>
    </details>`}renderTerrain(){let t=this._doc.settings.terrain??{},e=i=>{let o=structuredClone(this._doc);o.settings.terrain={...o.settings.terrain??{},...i},this.setDoc(o)},n=this._doc.floors.some(i=>i.elevation<-.3);return g`<details class="fp3d-section">
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
      ${t.level!=null?g`<div class="fp3d-actions"><button class="fp3d-btn" @click=${()=>e({level:null})}>${this.t("terrain_reset")}</button></div>`:$}
    </details>`}setSettings(t){let e=structuredClone(this._doc);Object.assign(e.settings,t),this.setDoc(e)}renderHouseSettings(){var n;let t=this._doc.settings,e=i=>this.setSettings(i);return g`<details class="fp3d-section">
      <summary>${this.t("settings_house")}</summary>
      <div class="fp3d-form">
        ${this.len(this.t("wall_exterior"),t.wall_exterior,i=>e({wall_exterior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.len(this.t("wall_interior"),t.wall_interior,i=>e({wall_interior:Math.min(1,Math.max(.02,i))}),.01,.02)}
        ${this.len(this.t("grid"),t.grid,i=>e({grid:Math.min(1,Math.max(.01,i))}),.01,.01)}
        <label class="fp3d-field" title=${this.t("units_hint")}
          >${this.t("units")}
          <select @change=${i=>{let o=i.target.value;e({units:o==="metric"||o==="imperial"?o:null})}}>
            <option value="auto" ?selected=${!t.units}>${this.t("units_auto",{unit:this.t(as(this.hass,null)==="imperial"?"units_imperial":"units_metric")})}</option>
            <option value="metric" ?selected=${t.units==="metric"}>${this.t("units_metric")}</option>
            <option value="imperial" ?selected=${t.units==="imperial"}>${this.t("units_imperial")}</option>
          </select></label
        >
        ${this.num(this.t("north"),t.north,i=>e({north:(Math.round(i)%360+360)%360}),1)}
        <label class="fp3d-field fp3d-wide" title=${this.t("editor_floor_hint")}
          >${this.t("editor_floor")}
          <select @change=${i=>e({editor_floor:i.target.value||null})}>
            <option value="" ?selected=${!t.editor_floor}>${this.t("editor_floor_auto")}</option>
            ${this._doc.floors.map(i=>g`<option value=${i.id} ?selected=${t.editor_floor===i.id}>${i.name}</option>`)}
          </select></label
        >
        ${this.entitySelect(this.t("hh_notes"),((n=t.household)==null?void 0:n.notes)??null,void 0,this.entityOptions(i=>/^(input_text|text|sensor)\./.test(i)),i=>this.setHousehold({notes:i==="none"?null:i}))}
        <p class="fp3d-sub fp3d-wide">${this.t("hh_notes_hint")}</p>
      </div>
      <p class="fp3d-sub">${this.t("north_hint")}</p>
    </details>`}renderRoofBasics(){let t=this._doc.settings,e=n=>this.setSettings(n);return g`<section>
      <h3>${this.t("roof_basics")}</h3>
      <div class="fp3d-form">
        <label class="fp3d-field fp3d-wide"
          >${this.t("roof")}
          <select
            @change=${n=>{let i=n.target.value;i==="custom"?(this.useRoofSections(),this._tool="roof"):e({roof:{...t.roof,type:i}})}}
          >
            ${["none","flat","gable","custom"].map(n=>g`<option value=${n} ?selected=${n===t.roof.type}>${this.t(`roof_${n}`)}</option>`)}
          </select></label
        >
        ${t.roof.type==="gable"?g`<label class="fp3d-field fp3d-wide"
              >${this.t("roof_ridge")}
              <select @change=${n=>e({roof:{...t.roof,ridge:n.target.value==="short"?"short":null}})}>
                <option value="long" ?selected=${t.roof.ridge!=="short"}>${this.t("roof_ridge_long")}</option>
                <option value="short" ?selected=${t.roof.ridge==="short"}>${this.t("roof_ridge_short")}</option>
              </select></label
            >`:$}
        ${t.roof.type==="gable"?this.num(this.t("roof_pitch"),t.roof.pitch,n=>e({roof:{...t.roof,pitch:Math.min(60,Math.max(5,n))}}),1,5):$}
        ${t.roof.type!=="none"?this.len(this.t("roof_overhang"),t.roof.overhang,n=>e({roof:{...t.roof,overhang:Math.min(2,Math.max(0,n))}}),.05,0):$}
      </div>
    </section>`}renderWeatherSettings(){let t=this._doc.settings,e=n=>this.setSettings(n);return g`<details class="fp3d-section">
      <summary>${this.t("settings_weather")}</summary>
      <div class="fp3d-form">
        ${this.hass?this.entitySelect(this.t("weather_entity"),t.weather_entity??null,Bl(this.hass,null),this.entityOptions(n=>n.startsWith("weather.")),n=>e({weather_entity:n})):$}
        <div class="fp3d-sub fp3d-wide">${this.t("weather_effects")}</div>
        ${ka.map(n=>{let i=t.weather_effects??Ao;return g`<label class="fp3d-check"
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
        ${this.hass?g`${this.entitySelect(this.t("rain_entity"),t.rain_entity??null,void 0,this.entityOptions(n=>ql(this.hass,n)),n=>e({rain_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("rain_entity_hint")}</p>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_names_hint")}
          ><input type="checkbox" .checked=${t.alert_names!==!1} @change=${n=>e({alert_names:n.target.checked})} />
          ${this.t("alert_names")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("alert_unavailable_hint")}
          ><input type="checkbox" .checked=${!!t.alert_unavailable} @change=${n=>e({alert_unavailable:n.target.checked})} />
          ${this.t("alert_unavailable")}</label
        >
        ${this.hass?g`${this.entitySelect(this.t("outage_entity"),t.outage_entity??null,void 0,this.entityOptions(this.isOutageChoice),n=>e({outage_entity:n==="none"?null:n}))}
              <p class="fp3d-sub fp3d-wide">${this.t("outage_entity_hint")}</p>`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_patches_hint")}
          ><input type="checkbox" .checked=${t.sun_patches!==!1} @change=${n=>e({sun_patches:n.target.checked})} />
          ${this.t("sun_patches")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("sun_shadow_hint")}
          ><input type="checkbox" .checked=${t.sun_shadow!==!1} @change=${n=>e({sun_shadow:n.target.checked})} />
          ${this.t("sun_shadow")}</label
        >
        ${t.sun_shadow!==!1?g`<label class="fp3d-field fp3d-wide" title=${this.t("sun_arc_hint")}
              >${this.t("sun_arc")}
              <select @change=${n=>e({sun_arc:n.target.value==="plot"?"plot":null})}>
                <option value="house" ?selected=${t.sun_arc!=="plot"}>${this.t("sun_arc_house")}</option>
                <option value="plot" ?selected=${t.sun_arc==="plot"}>${this.t("sun_arc_plot")}</option>
              </select></label
            >`:$}
        <label class="fp3d-check fp3d-wide" title=${this.t("tap_in_room_hint")}
          ><input type="checkbox" .checked=${!!t.tap_in_room} @change=${n=>e({tap_in_room:n.target.checked})} />
          ${this.t("tap_in_room")}</label
        >
        <label class="fp3d-check fp3d-wide" title=${this.t("window_glow_hint")}
          ><input type="checkbox" .checked=${t.window_glow!==!1} @change=${n=>e({window_glow:n.target.checked})} />
          ${this.t("window_glow")}</label
        >
      </div>
      <p class="fp3d-sub">${this.t("weather_entity_hint")}</p>
    </details>`}static styles=[Ke,oo,Gt`
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
      .fp3d-check.fp3d-indent {
        padding-left: 22px;
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
      .fp3d-gate {
        stroke: #ffd166;
        stroke-width: 5;
        stroke-linecap: round;
        pointer-events: none;
      }
      .fp3d-gate-box {
        border: 1px solid var(--fp3d-border, rgba(127, 127, 127, 0.3));
        border-radius: 8px;
        margin: 6px 0;
        padding: 4px 8px 8px;
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
    `]};customElements.get("fp3d-editor")||customElements.define("fp3d-editor",cr);function ah(r,t,e){let n=e[0]-t[0],i=e[1]-t[1],o=n*n+i*i||1,s=Math.min(1,Math.max(0,((r[0]-t[0])*n+(r[1]-t[1])*i)/o));return Math.hypot(r[0]-t[0]-n*s,r[1]-t[1]-i*s)}function Jd(r){return r.toLowerCase().normalize("NFD").replace(new RegExp("\\p{M}","gu"),"")}var rr={language:"en"};function Lt(r){return/^(sensor|input_number|number)\./.test(r)}function ar(r){return/^(binary_sensor|input_boolean)\./.test(r)}export{cr as Fp3dEditor};
