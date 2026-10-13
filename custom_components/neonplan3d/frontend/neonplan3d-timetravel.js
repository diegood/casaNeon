var Cn={type:"none",pitch:35,overhang:.4},Zo={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Cn}};var Nn=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Vn=new Set([...Nn,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function P(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[s,i]=t[n],[l,a]=t[o];i>r[1]!=a>r[1]&&r[0]<(l-s)*(r[1]-i)/(a-i)+s&&(e=!e)}return e}var Dn=Math.PI/180;var sr=Math.tan(30*Dn);var fr=Math.PI/180;var lt=r=>r&&r!=="none"?r:null;function Rt(r,t=e=>lt(e.power)){let e={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let s=t(o);if(o.type==="meter")e.grid??=s,e.gridExport??=lt(o.export);else if(o.type==="inverter"&&s&&!e.solar.includes(s))e.solar.push(s);else if(o.type==="home_battery"){s&&!e.battery.includes(s)&&e.battery.push(s);let i=lt(o.charge);i&&!e.charge.includes(i)&&e.charge.push(i),(s||i)&&e.batteries.push({power:s,charge:i});let l=lt(o.soc);l&&!e.soc.includes(l)&&e.soc.push(l)}}return e}function R(r,t=!1){if(!r)return null;let e=Number(r.state);if(!Number.isFinite(e))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?e*1e3:n==="MW"?e*1e6:e;return t?-o:o}function ge(r,t,e,n=Rt(t)){let o=t.energy,s=o.grid??n.grid,i=s?R(r.states[s],o.grid_invert):null;if(!o.grid&&n.gridExport){let h=Math.max(0,R(r.states[n.gridExport])??0);i=Math.max(0,i??0)-h}let l=o.solar?R(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let h=n.solar.map(_=>R(r.states[_])).filter(_=>_!==null);l=h.length?h.reduce((_,w)=>_+w,0):null}let a=o.battery?R(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let h=n.batteries.map(_=>{if(_.charge){let w=_.power?Math.max(0,R(r.states[_.power])??0):0,y=Math.max(0,R(r.states[_.charge])??0);return w-y}return _.power?R(r.states[_.power],o.battery_invert):null}).filter(_=>_!==null);a=h.length?h.reduce((_,w)=>_+w,0):null}let u=(o.battery_soc?[o.battery_soc]:n.soc).map(h=>{var _;return Number((_=r.states[h])==null?void 0:_.state)}).filter(h=>Number.isFinite(h)),p=u.length?u.reduce((h,_)=>h+_,0)/u.length:NaN,d=o.tariff?r.states[o.tariff]:void 0,m=Number(d==null?void 0:d.state),f=o.consumption?R(r.states[o.consumption]):null;return f!==null?f=Math.max(0,f):i!==null||l!==null||a!==null?f=Math.max(0,(i??0)+Math.max(0,l??0)+(a??0)):e.length&&(f=e.reduce((h,_)=>h+_.power,0)),{grid:i,solar:l===null?null:Math.max(0,l),battery:a,soc:Number.isFinite(p)?p:null,tariff:d&&Number.isFinite(m)?{value:m,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:f}}var ct=globalThis,ut=ct.ShadowRoot&&(ct.ShadyCSS===void 0||ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,At=Symbol(),be=new WeakMap,Q=class{constructor(t,e,n){if(this._$cssResult$=!0,n!==At)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ut&&t===void 0){let n=e!==void 0&&e.length===1;n&&(t=be.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),n&&be.set(e,t))}return t}toString(){return this.cssText}},ye=r=>new Q(typeof r=="string"?r:r+"",void 0,At),Tt=(r,...t)=>{let e=r.length===1?r[0]:t.reduce((n,o,s)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[s+1],r[0]);return new Q(e,r,At)},_e=(r,t)=>{if(ut)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let n=document.createElement("style"),o=ct.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=e.cssText,r.appendChild(n)}},Ft=ut?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(let n of t.cssRules)e+=n.cssText;return ye(e)})(r):r;var{is:Hn,defineProperty:Ln,getOwnPropertyDescriptor:Wn,getOwnPropertyNames:Un,getOwnPropertySymbols:Bn,getPrototypeOf:jn}=Object,dt=globalThis,ve=dt.trustedTypes,qn=ve?ve.emptyScript:"",Ot=dt.reactiveElementPolyfillSupport,Y=(r,t)=>r,zt={toAttribute(r,t){switch(t){case Boolean:r=r?qn:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},we=(r,t)=>!Hn(r,t),xe={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:we};Symbol.metadata??=Symbol("metadata"),dt.litPropertyMetadata??=new WeakMap;var A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=xe){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(t,n,e);o!==void 0&&Ln(this.prototype,t,o)}}static getPropertyDescriptor(t,e,n){let{get:o,set:s}=Wn(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get:o,set(i){let l=o==null?void 0:o.call(this);s==null||s.call(this,i),this.requestUpdate(t,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??xe}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=jn(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,n=[...Un(e),...Bn(e)];for(let o of n)this.createProperty(o,e[o])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[n,o]of e)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[e,n]of this.elementProperties){let o=this._$Eu(e,n);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let n=new Set(t.flat(1/0).reverse());for(let o of n)e.unshift(Ft(o))}else t!==void 0&&e.push(Ft(t));return e}static _$Eu(t,e){let n=e.attribute;return n===!1?void 0:typeof n=="string"?n:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let n of e.keys())this.hasOwnProperty(n)&&(t.set(n,this[n]),delete this[n]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _e(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostConnected)==null?void 0:n.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var n;return(n=e.hostDisconnected)==null?void 0:n.call(e)})}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ET(t,e){var s;let n=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,n);if(o!==void 0&&n.reflect===!0){let i=(((s=n.converter)==null?void 0:s.toAttribute)!==void 0?n.converter:zt).toAttribute(e,n.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,e){var s,i;let n=this.constructor,o=n._$Eh.get(t);if(o!==void 0&&this._$Em!==o){let l=n.getPropertyOptions(o),a=typeof l.converter=="function"?{fromAttribute:l.converter}:((s=l.converter)==null?void 0:s.fromAttribute)!==void 0?l.converter:zt;this._$Em=o;let c=a.fromAttribute(e,l.type);this[o]=c??((i=this._$Ej)==null?void 0:i.get(o))??c,this._$Em=null}}requestUpdate(t,e,n,o=!1,s){var i;if(t!==void 0){let l=this.constructor;if(o===!1&&(s=this[t]),n??=l.getPropertyOptions(t),!((n.hasChanged??we)(s,e)||n.useDefault&&n.reflect&&s===((i=this._$Ej)==null?void 0:i.get(t))&&!this.hasAttribute(l._$Eu(t,n))))return;this.C(t,e,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:n,reflect:o,wrapped:s},i){n&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,i??e??this[t]),s!==!0||i!==void 0)||(this._$AL.has(t)||(this.hasUpdated||n||(e=void 0),this._$AL.set(t,e)),o===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[s,i]of this._$Ep)this[s]=i;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[s,i]of o){let{wrapped:l}=i,a=this[s];l!==!0||this._$AL.has(s)||a===void 0||this.C(s,void 0,i,a)}}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(n=this._$EO)==null||n.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(e)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[Y("elementProperties")]=new Map,A[Y("finalized")]=new Map,Ot==null||Ot({ReactiveElement:A}),(dt.reactiveElementVersions??=[]).push("2.1.2");var Lt=globalThis,Me=r=>r,pt=Lt.trustedTypes,ke=pt?pt.createPolicy("lit-html",{createHTML:r=>r}):void 0,Te="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Fe="?"+F,Kn=`<${Fe}>`,N=document,Z=()=>N.createComment(""),J=r=>r===null||typeof r!="object"&&typeof r!="function",Wt=Array.isArray,Gn=r=>Wt(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",Pt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Se=/-->/g,$e=/>/g,V=RegExp(`>|${Pt}(?:([^\\s"'>=/]+)(${Pt}*=${Pt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,Re=/"/g,Oe=/^(?:script|style|textarea|title)$/i,Ut=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),x=Ut(1),ze=Ut(2),Dr=Ut(3),I=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ae=new WeakMap,C=N.createTreeWalker(N,129);function Pe(r,t){if(!Wt(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ke!==void 0?ke.createHTML(t):t}var Qn=(r,t)=>{let e=r.length-1,n=[],o,s=t===2?"<svg>":t===3?"<math>":"",i=X;for(let l=0;l<e;l++){let a=r[l],c,u,p=-1,d=0;for(;d<a.length&&(i.lastIndex=d,u=i.exec(a),u!==null);)d=i.lastIndex,i===X?u[1]==="!--"?i=Se:u[1]!==void 0?i=$e:u[2]!==void 0?(Oe.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=V):u[3]!==void 0&&(i=V):i===V?u[0]===">"?(i=o??X,p=-1):u[1]===void 0?p=-2:(p=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?V:u[3]==='"'?Re:Ee):i===Re||i===Ee?i=V:i===Se||i===$e?i=X:(i=V,o=void 0);let m=i===V&&r[l+1].startsWith("/>")?" ":"";s+=i===X?a+Kn:p>=0?(n.push(c),a.slice(0,p)+Te+a.slice(p)+F+m):a+F+(p===-2?l:m)}return[Pe(r,s+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]},tt=class r{constructor({strings:t,_$litType$:e},n){let o;this.parts=[];let s=0,i=0,l=t.length-1,a=this.parts,[c,u]=Qn(t,e);if(this.el=r.createElement(c,n),C.currentNode=this.el.content,e===2||e===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=C.nextNode())!==null&&a.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Te)){let d=u[i++],m=o.getAttribute(p).split(F),f=/([.?@])?(.*)/.exec(d);a.push({type:1,index:s,name:f[2],strings:m,ctor:f[1]==="."?Nt:f[1]==="?"?It:f[1]==="@"?Dt:U}),o.removeAttribute(p)}else p.startsWith(F)&&(a.push({type:6,index:s}),o.removeAttribute(p));if(Oe.test(o.tagName)){let p=o.textContent.split(F),d=p.length-1;if(d>0){o.textContent=pt?pt.emptyScript:"";for(let m=0;m<d;m++)o.append(p[m],Z()),C.nextNode(),a.push({type:2,index:++s});o.append(p[d],Z())}}}else if(o.nodeType===8)if(o.data===Fe)a.push({type:2,index:s});else{let p=-1;for(;(p=o.data.indexOf(F,p+1))!==-1;)a.push({type:7,index:s}),p+=F.length-1}s++}}static createElement(t,e){let n=N.createElement("template");return n.innerHTML=t,n}};function W(r,t,e=r,n){var i,l;if(t===I)return t;let o=n!==void 0?(i=e._$Co)==null?void 0:i[n]:e._$Cl,s=J(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==s&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),s===void 0?o=void 0:(o=new s(r),o._$AT(r,e,n)),n!==void 0?(e._$Co??=[])[n]=o:e._$Cl=o),o!==void 0&&(t=W(r,o._$AS(r,t.values),o,n)),t}var Ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:n}=this._$AD,o=((t==null?void 0:t.creationScope)??N).importNode(e,!0);C.currentNode=o;let s=C.nextNode(),i=0,l=0,a=n[0];for(;a!==void 0;){if(i===a.index){let c;a.type===2?c=new et(s,s.nextSibling,this,t):a.type===1?c=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(c=new Ht(s,this,t)),this._$AV.push(c),a=n[++l]}i!==(a==null?void 0:a.index)&&(s=C.nextNode(),i++)}return C.currentNode=N,o}p(t){let e=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}},et=class r{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,n,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),J(t)?t===v||t==null||t===""?(this._$AH!==v&&this._$AR(),this._$AH=v):t!==this._$AH&&t!==I&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Gn(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==v&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(N.createTextNode(t)),this._$AH=t}$(t){var s;let{values:e,_$litType$:n}=t,o=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=tt.createElement(Pe(n.h,n.h[0]),this.options)),n);if(((s=this._$AH)==null?void 0:s._$AD)===o)this._$AH.p(e);else{let i=new Ct(o,this),l=i.u(this.options);i.p(e),this.T(l),this._$AH=i}}_$AC(t){let e=Ae.get(t.strings);return e===void 0&&Ae.set(t.strings,e=new tt(t)),e}k(t){Wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,n,o=0;for(let s of t)o===e.length?e.push(n=new r(this.O(Z()),this.O(Z()),this,this.options)):n=e[o],n._$AI(s),o++;o<e.length&&(this._$AR(n&&n._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,e);t!==this._$AB;){let o=Me(t).nextSibling;Me(t).remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,n,o,s){this.type=1,this._$AH=v,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(t,e=this,n,o){let s=this.strings,i=!1;if(s===void 0)t=W(this,t,e,0),i=!J(t)||t!==this._$AH&&t!==I,i&&(this._$AH=t);else{let l=t,a,c;for(t=s[0],a=0;a<s.length-1;a++)c=W(this,l[n+a],e,a),c===I&&(c=this._$AH[a]),i||=!J(c)||c!==this._$AH[a],c===v?t=v:t!==v&&(t+=(c??"")+s[a+1]),this._$AH[a]=c}i&&!o&&this.j(t)}j(t){t===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},Nt=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===v?void 0:t}},It=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==v)}},Dt=class extends U{constructor(t,e,n,o,s){super(t,e,n,o,s),this.type=5}_$AI(t,e=this){if((t=W(this,t,e,0)??v)===I)return;let n=this._$AH,o=t===v&&n!==v||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==v&&(n===v||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},Ht=class{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}};var Vt=Lt.litHtmlPolyfillSupport;Vt==null||Vt(tt,et),(Lt.litHtmlVersions??=[]).push("3.3.3");var Ve=(r,t,e)=>{let n=(e==null?void 0:e.renderBefore)??t,o=n._$litPart$;if(o===void 0){let s=(e==null?void 0:e.renderBefore)??null;n._$litPart$=o=new et(t.insertBefore(Z(),s),s,void 0,e??{})}return o._$AI(r),o};var nt=globalThis,O=class extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ve(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return I}},Ce;O._$litElement$=!0,O.finalized=!0,(Ce=nt.litElementHydrateSupport)==null||Ce.call(nt,{LitElement:O});var Bt=nt.litElementPolyfillSupport;Bt==null||Bt({LitElement:O});(nt.litElementVersions??=[]).push("4.2.2");var Ne="https://discord.gg/SSdVVFsev7";var Yn=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Xn=new Set(["power","plug","connectivity","running"]);function Ie(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let t=r.entity_id.split(".")[0];if(t==="binary_sensor")return Xn.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(t==="input_boolean"||t==="switch")return r.state==="on";let e=Number(r.state);if(r.state!==""&&Number.isFinite(e))return r.attributes.unit_of_measurement==="V"&&e<100;let n=String(r.state).toLowerCase().trim();return Yn.has(n)||n.startsWith("ob ")}function D(r,t,e=9e5){let n=r.mean.length;if(!n||t<r.start)return NaN;let o=(t-r.start)/r.step-.5,s=Math.floor(o);if(s<0)return r.mean[0];if(s>=n-1){let u=De(r,n-1);return u>=0&&t-(r.start+(u+.5)*r.step)<=e?r.mean[u]:NaN}let i=r.mean[s],l=r.mean[s+1],a=o-s;if(!Number.isNaN(i)&&!Number.isNaN(l))return i+(l-i)*a;let c=De(r,s);return c>=0&&t-(r.start+(c+.5)*r.step)<=e?r.mean[c]:NaN}function De(r,t){for(let e=t;e>=0;e--)if(!Number.isNaN(r.mean[e]))return e;return-1}function He(r,t,e=0){if(typeof t=="number"&&t>=0&&t<=6)return 10**-t;switch(typeof r=="string"?r:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(e)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(e)>=100?1:Math.abs(e)>=10?.1:.01}}function Le(r,t){if(!Number.isFinite(r))return"unknown";let e=t>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(t)))),o=(Math.round(r/t)*t).toFixed(e);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var Zn=r=>typeof r=="string"?{s:r,a:null}:{s:String(r[0]),a:r[1]&&typeof r[1]=="object"?r[1]:null},z=r=>`${r.s}\0${r.a?JSON.stringify(r.a):""}`;function Ue(r){let t=[...r].sort((d,m)=>d.day_start-m.day_start),e=new Map,n=new Map,o=new Set,s=1/0,i=-1/0,l=null,a=!1,c=null;for(let d of t){s=Math.min(s,d.day_start*1e3),i=Math.max(i,d.end*1e3),d.oldest===null?a=!0:l=l===null?d.oldest*1e3:Math.min(l,d.oldest*1e3),c??=d.keep_days;for(let[m,f]of Object.entries(d.entities??{})){let h=e.get(m)??[],_=d.day_start*1e3,w=Math.min(f.t.length,f.v.length);for(let y=0;y<w;y++){let b=f.tab[f.v[y]];if(b===void 0)continue;let g=Zn(b),M=z(g),$=h[h.length-1],G=_+f.t[y]*1e3;$&&(G<$.t||$.k===M)||h.push({t:G,v:g,k:M})}e.set(m,h)}for(let[m,f]of Object.entries(d.stats??{})){let h=n.get(m)??[];h.push({start:f.start*1e3,step:f.step*1e3,mean:f.mean}),n.set(m,h)}for(let m of d.missing??[])o.add(m)}let u=new Map;for(let[d,m]of e){if(!m.length)continue;let f=[],h=new Map,_=new Float64Array(m.length),w=new Uint32Array(m.length),y=new Float64Array(m.length);for(let b=0;b<m.length;b++){let g=h.get(m[b].k);g===void 0&&(g=f.length,f.push(m[b].v),h.set(m[b].k,g)),_[b]=m[b].t,w[b]=g,y[b]=b>0&&m[b-1].v.s===m[b].v.s?y[b-1]:m[b].t}u.set(d,{id:d,times:_,vals:w,values:f,since:y}),o.delete(d)}let p=new Map;for(let[d,m]of n){let f=m[0].step;if(!(f>0))continue;let h=Math.min(...m.map(b=>b.start)),_=Math.max(...m.map(b=>b.start+b.mean.length*b.step)),w=Math.max(0,Math.round((_-h)/f));if(!w)continue;let y=new Float32Array(w).fill(NaN);for(let b of m)b.mean.forEach((g,M)=>{let $=Math.round((b.start+M*b.step-h)/f);typeof g=="number"&&Number.isFinite(g)&&$>=0&&$<w&&(y[$]=g)});y.every(b=>Number.isNaN(b))||(p.set(d,{id:d,start:h,step:f,mean:y}),o.delete(d))}return{start:Number.isFinite(s)?s:0,end:Number.isFinite(i)?i:0,oldest:a?null:l,keepDays:c,tracks:u,series:p,missing:o}}function S(r,t){let e=0,n=r.length-1;if(n<0||r[0]>t)return-1;for(;e<n;){let o=e+n+1>>1;r[o]<=t?e=o:n=o-1}return e}var B=class{tracks;idx;t=-1/0;constructor(t){this.tracks=[...t.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(t){let e=t>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,s=this.idx[n];if(!e)s=S(o,t);else{let i=0;for(;s+1<o.length&&o[s+1]<=t&&i<8;)s++,i++;s+1<o.length&&o[s+1]<=t&&(s=S(o,t))}this.idx[n]=s}return this.t=t,this.idx}value(t){let e=this.idx[t];return e<0?null:this.tracks[t].values[this.tracks[t].vals[e]]}},Jn=new Set(["unavailable","unknown"]);function jt(r,t=5*6e4,e=.6,n=10*6e4,o=-1/0){let s=new B(r);if(!s.tracks.length)return[];let i=Math.max(r.oldest??r.start,o),l=[],a=null;for(let c=i;c<=r.end;c+=t){s.at(c);let u=0;for(let d=0;d<s.tracks.length;d++){let m=s.value(d);(!m||Jn.has(m.s))&&u++}let p=u/s.tracks.length>=e;p&&a===null&&(a=c),!p&&a!==null&&(c-a>=n&&l.push([a,c]),a=null)}return a!==null&&r.end-a>=n&&l.push([a,r.end]),l}function Be(r){for(let t=0;t<r.times.length;t++)r.since[t]=t>0&&r.values[r.vals[t-1]].s===r.values[r.vals[t]].s?r.since[t-1]:r.times[t]}function to(r,t){let e=[...r.values],n=new Map(e.map((c,u)=>[z(c),u])),o=t.values.map(c=>{let u=z(c),p=n.get(u);return p===void 0&&(p=e.length,e.push(c),n.set(u,p)),p}),s=t.times.length?t.times[0]:1/0,i=[],l=[];for(let c=0;c<r.times.length&&r.times[c]<s;c++)i.push(r.times[c]),l.push(r.vals[c]);for(let c=0;c<t.times.length;c++){let u=o[t.vals[c]];l.length&&l[l.length-1]===u||(i.push(t.times[c]),l.push(u))}let a={id:r.id,times:Float64Array.from(i),vals:Uint32Array.from(l),values:e,since:new Float64Array(i.length)};return(r.dropped||t.dropped)&&(a.dropped=Float64Array.from([...r.dropped??[],...t.dropped??[]]).sort()),Be(a),a}function eo(r,t){let e=r.step,n=Math.min(r.start,t.start),o=Math.max(r.start+r.mean.length*r.step,t.start+t.mean.length*t.step),s=Math.max(0,Math.round((o-n)/e)),i=new Float32Array(s).fill(NaN);for(let l of[r,t])for(let a=0;a<l.mean.length;a++){let c=Math.round((l.start+a*l.step-n)/e);!Number.isNaN(l.mean[a])&&c>=0&&c<s&&(i[c]=l.mean[a])}return{id:r.id,start:n,step:e,mean:i}}function je(r,t){let[e,n]=r.start<=t.start?[r,t]:[t,r],o=new Map;for(let a of new Set([...e.tracks.keys(),...n.tracks.keys()])){let c=e.tracks.get(a),u=n.tracks.get(a);o.set(a,c&&u?to(c,u):c??u)}let s=new Map;for(let a of new Set([...e.series.keys(),...n.series.keys()])){let c=e.series.get(a),u=n.series.get(a);s.set(a,c&&u?eo(c,u):c??u)}let i=new Set([...e.missing,...n.missing].filter(a=>!o.has(a)&&!s.has(a))),l=e.oldest===null?null:e.oldest<e.end?e.oldest:n.oldest??n.start;return{start:e.start,end:Math.max(e.end,n.end),oldest:l,keepDays:n.keepDays??e.keepDays,tracks:o,series:s,missing:i}}function qe(r){let t=0;for(let e of r.tracks.values())t+=e.times.length;return t}function Ke(r){let t=0;for(let e of r.tracks.values())t+=e.times.length*20+e.values.length*120;for(let e of r.series.values())t+=e.mean.length*4;return t}var Ge=3e5;function Qe(r,t,e=6e4,n=5*6e4){let o=0;for(let s of t){let i=r.tracks.get(s);if(!i||i.times.length<3)continue;let l=i.times.length,a=f=>i.values[i.vals[f]].s,c=[],u=[],p=null;for(let f=0;f<l;f++){let h=c.length?c[c.length-1]:-1;if(h>=0&&p!==null&&a(h)==="off"&&a(f)==="on"&&f+1<l&&a(f+1)==="off"&&i.times[f+1]-i.times[f]<e&&i.times[f]-p<=n){u.push(i.times[f]),f++,o+=2;continue}if(h>=0&&i.vals[h]===i.vals[f]){o++;continue}h>=0&&a(h)==="on"&&a(f)!=="on"&&(p=i.times[f]),c.push(f)}if(c.length===l)continue;let d=Float64Array.from(c,f=>i.times[f]),m=Uint32Array.from(c,f=>i.vals[f]);i.times=d,i.vals=m,i.since=new Float64Array(c.length),u.length&&(i.dropped=Float64Array.from([...i.dropped??[],...u]).sort()),Be(i)}return o}var We=new WeakMap;function no(r){let t=We.get(r);return(!t||t.size!==r.values.length)&&(t=new Map(r.values.map((e,n)=>[z(e),n])),We.set(r,t)),t}function qt(r,t){let e=no(r),n=r.times.length,o=n?r.times[n-1]:-1/0,s=n?r.vals[n-1]:-1,i=[],l=[];for(let d of t){if(d.t<o)continue;let m=z(d.v),f=e.get(m);f!==s&&(f===void 0&&(f=r.values.length,r.values.push(d.v),e.set(m,f)),i.push(d.t),l.push(f),o=d.t,s=f)}if(!i.length)return 0;let a=n+i.length,c=new Float64Array(a);c.set(r.times),c.set(i,n);let u=new Uint32Array(a);u.set(r.vals),u.set(l,n);let p=new Float64Array(a);p.set(r.since);for(let d=n;d<a;d++)p[d]=d>0&&r.values[u[d-1]].s===r.values[u[d]].s?p[d-1]:c[d];return r.times=c,r.vals=u,r.since=p,i.length}function Ye(r,t){let e=-1;for(let o of t)Number.isFinite(o.value)&&o.t>=r.start&&(e=Math.max(e,Math.floor((o.t-r.start)/r.step)));if(e<0)return 0;if(e>=r.mean.length){let o=new Float32Array(e+1).fill(NaN);o.set(r.mean),r.mean=o}let n=0;for(let o of t){if(!Number.isFinite(o.value)||o.t<r.start)continue;let s=Math.floor((o.t-r.start)/r.step);Number.isNaN(r.mean[s])&&(r.mean[s]=o.value,n++)}return n}function Xe(r,t){let e={id:r,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return qt(e,t)?e:null}function Ze(r,t){if(t<=r.start)return r;let e=new Map;for(let[s,i]of r.tracks){let l=Math.max(0,S(i.times,t));if(l===0){e.set(s,i);continue}let a={id:s,times:i.times.slice(l),vals:i.vals.slice(l),values:i.values,since:i.since.slice(l)};i.dropped&&(a.dropped=i.dropped.filter(c=>c>=t)),e.set(s,a)}let n=new Map;for(let[s,i]of r.series){let l=Math.max(0,Math.floor((t-i.start)/i.step));n.set(s,l?{id:s,start:i.start+l*i.step,step:i.step,mean:i.mean.slice(l)}:i)}let o=r.oldest!==null&&r.oldest>t?r.oldest:null;return{...r,start:t,oldest:o,tracks:e,series:n}}function Je(r,t,e,n){let o={};for(let i of t){let l=r.series.get(i),a=r.tracks.get(i);if(!l&&!a)continue;let c=[];for(let u=Math.floor(e/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(l){let d=Math.floor((u+15e4-l.start)/l.step);p=d>=0&&d<l.mean.length?l.mean[d]:NaN}else if(a){let d=S(a.times,u+15e4);p=d<0?NaN:Number(a.values[a.vals[d]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(o[i]=c)}return o}var H=null;function Kt(r){var n,o;let t=(n=r==null?void 0:r.locale)==null?void 0:n.time_zone,e=(o=r==null?void 0:r.config)==null?void 0:o.time_zone;if(t!=="server"||!e)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:e}),e}catch{return null}}function Gt(r){H=r}var tn=new Map;function oo(r){let t=tn.get(r);return t||(t=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),tn.set(r,t)),t}function ft(r,t){let e=[0,0,0,0,0,0];for(let n of oo(t).formatToParts(r)){let o=Number(n.value);n.type==="year"?e[0]=o:n.type==="month"?e[1]=o-1:n.type==="day"?e[2]=o:n.type==="hour"?e[3]=o%24:n.type==="minute"?e[4]=o:n.type==="second"&&(e[5]=o)}return e}function mt(r,t){let[e,n,o,s,i,l]=ft(r,t),a=r-(r%1e3+1e3)%1e3;return Date.UTC(e,n,o,s,i,l)-a}function j(r,t=H){return t?ft(r,t)[3]:new Date(r).getHours()}function T(r,t=H){if(!t)return new Date(r).setHours(0,0,0,0);let[e,n,o]=ft(r,t),s=Date.UTC(e,n,o)-mt(r,t);return s=Date.UTC(e,n,o)-mt(s,t),s}function ht(r,t=H){return T(T(r,t)+27*36e5,t)}function gt(r,t=H){if(!t)return new Date(r).setMinutes(0,0,0);let[,,,,e,n]=ft(r,t);return r-(r%1e3+1e3)%1e3-(e*60+n)*1e3}function Qt(r,t,e,n=H){if(!n){let i=new Date(r);return i.setHours(t,e,0,0),i.getTime()}let o=T(r,n),s=o+(t*60+e)*6e4;return s-(mt(s,n)-mt(o,n))}function ot(r=H){return r?{timeZone:r}:{}}var bt={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},nn=new Set(["window","battery_full","pv_peak"]),yt=new Set(["alarm","smoke","gas","co","water","outage"]),Yt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},ro=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),L=new Set(["on","open","opening","tilted"]);function so(r){let t=j(r);return t>=23||t<5}function*rt(r){let t=null;for(let e=0;e<r.times.length;e++){let n=r.values[r.vals[e]].s;n!==t&&(yield{t:r.times[e],from:t,to:n}),t=n}}function q(r,t,e){let n=[],o=null;for(let s of rt(r)){let i=t.has(s.to);i&&o===null&&(o=s.t),!i&&o!==null&&(n.push([o,s.t]),o=null)}return o!==null&&n.push([o,e]),n}function io(r,t){let e=r.tracks.get(t);if(e){let s=[];for(let i=0;i<e.times.length;i++){let l=Number(e.values[e.vals[i]].s);Number.isFinite(l)&&s.push({t:e.times[i],w:l})}return s}let n=r.series.get(t);if(!n)return[];let o=[];for(let s=0;s<n.mean.length;s++){let i=n.start+(s+.5)*n.step,l=D(n,i);Number.isFinite(l)&&o.push({t:i,w:l})}return o}function ao(r,t=10,e=5,n=20*6e4){let o=[],s=null;for(let i of r)s===null&&i.w>t?s=i.t:s!==null&&i.w<e&&(i.t-s>=n&&o.push(i.t),s=null);return o}function en(r,t,e,n,o=3e5){let s=Math.max(0,Math.ceil((n-e)/o)),i=new Float64Array(s).fill(NaN),l=r.series.get(t),a=r.tracks.get(t);for(let c=0;c<s;c++){let u=e+(c+.5)*o;if(l)i[c]=D(l,u);else if(a){let p=S(a.times,u);i[c]=p<0?NaN:Number(a.values[a.vals[p]].s)}}return i}function lo(r,t){var s;let e=[],o=Math.floor(r.start/3e5)*3e5;for(let i of t.soc){let l=en(r,i,o,r.end),a=!1;l.forEach((c,u)=>{Number.isNaN(c)||(c<95?a=!0:c>=99&&a&&(a=!1,e.push({t:o+(u+.5)*3e5,kind:"battery_full",entity:i})))})}if(t.solar.length){let i=t.solar.map(p=>en(r,p,o,r.end)),l=i[0].length,a=-1,c={t:0,w:0},u=()=>{c.w>100&&e.push({t:c.t,kind:"pv_peak",entity:t.solar[0]}),c={t:0,w:0}};for(let p=0;p<l;p++){let d=o+(p+.5)*3e5,m=T(d);m!==a&&(a>=0&&u(),a=m);let f=0;for(let h of i)Number.isNaN(h[p])||(f+=Math.max(0,h[p]));f>c.w&&(c={t:d,w:f})}a>=0&&(r.end>=ht(a)||(s=t.sunDown)!=null&&s.call(t,r.end))&&u()}return e}function on({timeline:r,roles:t,weather:e,night:n=so,energy:o=null,outage:s=null}){let i=[],l=(d,m,f)=>{d>=r.start&&d<=r.end&&i.push({t:d,kind:m,entity:f})},a=e?r.tracks.get(e):void 0,c=a?q(a,ro,r.end):[];for(let[d,m]of t){if(m==="washer"){for(let h of ao(io(r,d)))l(h,"washer",d);continue}let f=r.tracks.get(d);if(f){if(m==="window"||m==="window_more"){for(let[h,_]of q(f,L,r.end)){m==="window"&&h>r.start&&h>f.times[0]&&l(h,"window",d);for(let[w,y]of c)h<y&&w<_&&l(Math.max(h,w),"rain",d)}continue}for(let h of rt(f))if(h.from!==null)switch(m){case"door":L.has(h.to)&&!L.has(h.from)&&l(h.t,"door",d);break;case"garage":(h.to==="on"||h.to==="open"||h.to==="opening")&&(h.from==="off"||h.from==="closed"||h.from==="closing")&&l(h.t,"garage",d);break;case"lock":(h.to==="unlocked"||h.to==="open")&&(h.from==="locked"||h.from==="locking")&&l(h.t,"lock",d);break;case"alarm":h.to==="triggered"&&l(h.t,"alarm",d);break;case"smoke":case"gas":case"co":case"water":h.to==="on"&&h.from!=="on"&&l(h.t,m,d);break;case"motion":h.to==="on"&&h.from==="off"&&n(h.t)&&l(h.t,"motion",d);break;case"robot":h.to==="cleaning"&&h.from!=="cleaning"&&h.from!=="paused"?l(h.t,"robot_start",d):h.to==="docked"&&(h.from==="cleaning"||h.from==="returning"||h.from==="paused")&&l(h.t,"robot_done",d);break}}}if(o)for(let d of lo(r,o))l(d.t,d.kind,d.entity);let u=s?r.tracks.get(s.id):void 0;if(s&&u){let d=m=>Ie({entity_id:s.id,state:m,attributes:s.attributes});for(let m of rt(u))m.from!==null&&d(m.to)&&!d(m.from)&&l(m.t,"outage",s.id)}i.sort((d,m)=>d.t-m.t||bt[m.kind]-bt[d.kind]);let p=new Map;return i.filter(d=>{let m=`${d.kind}:${d.entity}`,f=p.get(m),h=d.kind==="motion"?30*6e4:5*6e4;return f!==void 0&&d.t-f<h?!1:(p.set(m,d.t),!0)})}function rn(r,t){let e=[];for(let n=r.length-1;n>=0;n--){let o=r[n];if(!t.has(Yt[o.kind]))continue;let s=gt(o.t),i=e[e.length-1];i&&i.hour===s?i.events.unshift(o):e.push({hour:s,events:[o]})}return e}function sn(r,t,e=14){let n=[];for(let o of r){let s=t(o.t),i=n[n.length-1];i&&s-i.x<e?(i.events.push(o),bt[o.kind]>bt[i.top.kind]&&(i.top=o,i.t=o.t)):n.push({x:s,t:o.t,top:o,events:[o]})}return n}var vt=[60,360,900,3600],Xt=[60,360,900,3600,14400],an=360;function ln(r,t){return r==="low"||t?500:r==="high"?167:250}var _t=class{start;end;t;playing=!1;speed;speeds;constructor(t,e,n,o=an,s=vt){this.start=t,this.end=e,this.speeds=s,this.t=Math.min(e,Math.max(t,n)),this.speed=s.includes(o)?o:an}setRange(t,e,n=this.speeds){this.start=t,this.end=e,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(e,Math.max(t,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(t){this.t=Math.min(this.end,Math.max(this.start,t))}advance(t){if(!this.playing||!(t>0))return!1;let e=Math.min(this.end,this.t+t*this.speed),n=e!==this.t;return this.t=e,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let t=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(t+1)%this.speeds.length],this.speed}};function cn(r,t,e,n=3e4){if(e>0)return r.find(o=>o.t>t+n)??null;for(let o=r.length-1;o>=0;o--)if(r[o].t<t-n)return r[o];return null}function un(r,t,e){let n=0,o=r.length;for(;n<o;){let i=n+o>>1;r[i].t<t?n=i+1:o=i}let s=n;for(;s<r.length&&r[s].t<=e;)s++;return n===0&&s===r.length?r:r.slice(n,s)}function Zt(r,t,e,n){if(!(e>t))return null;let o=0,s=r.length;for(;o<s;){let i=o+s>>1;r[i].t<=t?o=i+1:s=i}for(let i=o;i<r.length&&r[i].t<=e;i++)if(n(r[i]))return r[i];return null}function xt(r,t){let e=(r??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(e);if(n)return t-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(e);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let s=Qt(t,Number(o[1]),Number(o[2]));return s>t?Qt(s-864e5,Number(o[1]),Number(o[2])):s}var st={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},wt=r=>ze`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,dn={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},co={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Jt=class extends O{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=t=>{let e=this.session,n=t.composedPath()[0];if(!(!(e!=null&&e.playback)||t.ctrlKey||t.metaKey||t.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n!=null&&n.isContentEditable))if(t.key===" "){if((n==null?void 0:n.tagName)==="BUTTON")return;t.preventDefault(),e.toggle()}else(t.key==="ArrowLeft"||t.key==="ArrowRight")&&(t.preventDefault(),e.seek(e.playback.t+(t.key==="ArrowLeft"?-1:1)*(t.shiftKey?36e5:3e5)))};onEscape=t=>{t.key!=="Escape"||!this._sheet||(t.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){var t,e;super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),(t=this.unlisten)==null||t.call(this),this.unlisten=null,this.listened=null,(e=this.resize)==null||e.disconnect(),this.resize=null;for(let n of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(n)}updated(){var e;this.session!==this.listened&&((e=this.unlisten)==null||e.call(this),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let t=this.renderRoot.querySelector(".track");t&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(n=>{var s;let o=Math.round(((s=n[0])==null?void 0:s.contentRect.width)??0);o!==this._w&&(this._w=o)}),this.resize.observe(t)),this.onTick()}signature(){let t=this.session,e=t==null?void 0:t.playback,n=this._sheet==="day"&&e?T(e.t):0;return`${t==null?void 0:t.state}|${t==null?void 0:t.error}|${Math.round(((t==null?void 0:t.progress)??0)*20)}|${e==null?void 0:e.playing}|${e==null?void 0:e.speed}|${t==null?void 0:t.events.length}|${t==null?void 0:t.allEvents.length}|${t==null?void 0:t.range}|${t==null?void 0:t.maxDays}|${t==null?void 0:t.loadingDay}|${t==null?void 0:t.full}|${t==null?void 0:t.version}|${t==null?void 0:t.atNow}|${t==null?void 0:t.follow}|${t==null?void 0:t.stopImportant}|${n}`}onTick(){let t=this.signature();t!==this.sig&&(this.sig=t,this.requestUpdate());let e=this.session,n=e==null?void 0:e.playback;if(!e||!n)return;let o=this.renderRoot.querySelector(".clock-time"),s=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),s&&(s.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(t){let e=this.renderRoot.querySelector(".head");e&&(e.style.transform=`translateX(${t.toFixed(1)}px)`)}get language(){var t;return((t=this.session)==null?void 0:t.opts.live.language)??navigator.language}xOf(t){let e=this.session;return!e||!this._w?0:(t-e.start)/(e.end-e.start)*this._w}tOf(t){let e=this.session;return e.start+Math.min(this._w,Math.max(0,t))/Math.max(1,this._w)*(e.end-e.start)}weekday(t){return new Date(t).toLocaleDateString(this.language,{weekday:"short",...ot()}).replace(/\.$/,"")}clockText(t){return`${this.weekday(t)} ${this.time(t)}`}agoText(t){let e=this.session,n=Math.round((e.end-t)/6e4);return n<1?e.t("tt_now"):e.t("tt_ago",{d:this.duration(n*6e4)})}duration(t){let e=this.session,n=Math.round(t/6e4),o=Math.floor(n/1440),s=Math.floor(n%1440/60),i=n%60;return o?`${e.t("tt_days",{n:o})}${s?` ${s} h`:""}`:s?`${s} h${i?` ${i} min`:""}`:`${i} min`}name(t){var n;let e=this.session;return e.names.get(t)??((n=e.opts.live.states[t])==null?void 0:n.attributes.friendly_name)??t}eventText(t){return this.session.t(`tt_ev_${t.kind}`,{name:this.name(t.entity)})}time(t){return new Date(t).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...ot()})}onDown(t){var n,o;let e=this.session;!(e!=null&&e.playback)||t.target.closest(".mark")||((o=(n=t.currentTarget).setPointerCapture)==null||o.call(n,t.pointerId),this.dragging=!0,this._label=null,e.pause(),this.scrub(t,!0))}onMove(t){this.dragging&&this.scrub(t,!1)}onUp(t){this.dragging&&(this.scrub(t,!0),this.dragging=!1)}scrub(t,e){var u;let n=this.session,o=this.renderRoot.querySelector(".track"),s=t.clientX-o.getBoundingClientRect().left,i=Math.max(((u=n.playback)==null?void 0:u.start)??n.start,this.tOf(s));this.placeHead(this.xOf(i));let l=this.renderRoot.querySelector(".clock-time");l&&(l.textContent=this.clockText(i)),clearTimeout(this.scrubTimer);let a=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();e||c-this.scrubAt>=a?(this.scrubAt=c,n.seek(i)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(i)},a)}markDown(t){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(t)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(t){var e;if(this.held){this.held=!1;return}(e=this.session)==null||e.seek(t.t,!0),this.showLabel(t,2500)}showLabel(t,e=4500){this._label={x:t.x,lines:t.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(t.events.length>4?[`+${t.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,e)}renderTrack(){var h,_,w,y;let t=this.session,e=this._w;if(!e)return v;let n=t.range==="7d",o=b=>`${((b-t.start)/(t.end-t.start)*100).toFixed(3)}%`,s=(b,g,M,$)=>g>b?x`<i class=${M} style="left:${o(Math.max(b,t.start))};width:calc(${o(Math.min(g,t.end))} - ${o(Math.max(b,t.start))})">${$?x`<span>${$}</span>`:v}</i>`:v,i=((h=t.timeline)==null?void 0:h.oldest)??null,l=((_=t.playback)==null?void 0:_.start)??t.start,a=t.recorderStart,c=v;l>t.start+6e4&&(t.loadingDay!==null?c=s(t.start,l,"loading",t.t("tt_loading_day",{day:this.weekday(t.loadingDay+12*36e5)})):a!==null&&a>t.start?c=s(t.start,l,"nodata",t.t("tt_recorder_days",{n:((w=t.timeline)==null?void 0:w.keepDays)??0})):c=s(t.start,l,"nodata",t.full?t.t("tt_memory_full"):""));let u=n?e/(t.end-t.start)*36e5*3>=12?3:6:1,p=e>=640?3:6,d=[],m=gt(t.start);for(m<t.start&&(m+=36e5);m<=t.end;m+=36e5){let b=j(m);if(b%u)continue;let g=b===0,M=g?n?`${this.weekday(m)} ${new Date(m).toLocaleDateString(this.language,{day:"numeric",...ot()}).replace(/\.$/,"")}.`:this.weekday(m):!n&&b%p===0?this.time(m):"";d.push(x`<b class="tick ${g?"tick-day":M?"tick-major":""}" style="left:${o(m)}">${M?x`<span>${M}</span>`:v}</b>`)}let f=`${e}|${t.events.length}|${t.start}|${t.end}|${t.version}|${l}`;return f!==this.clusterSig&&(this.clusterSig=f,this.clusters=sn(t.shownEvents(),b=>this.xOf(b),e<500?18:14)),x`${t.nights.map(([b,g])=>s(b,g,"night"))} ${c} ${i!==null&&i>l?s(l,i,"nodata"):v}
      ${t.gaps.map(([b,g])=>s(b,g,"gap"))} ${d}
      ${this.clusters.map(b=>x`<button
          class="mark ${b.events.length>1?"mark-many":""}"
          style="left:${b.x.toFixed(1)}px;--c:${dn[b.top.kind]}"
          title=${b.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(b.t)} ${this.eventText(b.top)}`}
          @pointerdown=${()=>this.markDown(b)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(b)}
        >
          ${b.events.length>1?x`<span>${b.events.length}</span>`:v}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(((y=t.playback)==null?void 0:y.t)??t.end).toFixed(1)}px)"></div>
      ${this._label?x`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(b=>x`<span>${b}</span>`)}</div>`:v}`}toggleSheet(t="events"){this._sheet=this._sheet===t||this._sheet&&t==="events"?null:t}toggleFilter(t){let e=new Set(this._filters);e.has(t)?e.delete(t):e.add(t),this._filters=e}where(t){var e;return((e=this.session.roomOf.get(t))==null?void 0:e.name)??""}renderEvents(){let t=this.session,e=t.t,n=["safety","openings","devices",...t.energy?["energy"]:[]],o=rn(t.shownEvents(!0).filter(i=>t.energy||Yt[i.kind]!=="energy"),this._filters),s=0;return x`<div class="filters">
        ${n.map(i=>x`<button class="fchip" aria-pressed=${this._filters.has(i)} @click=${()=>this.toggleFilter(i)}>${e(`tt_f_${i}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${t.follow} @change=${i=>t.setFollow(i.target.checked)} />${e("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${t.stopImportant} @change=${i=>t.setStopImportant(i.target.checked)} />${e("tt_stop")}</label>
      ${o.length?o.map(i=>s>=300?v:(s+=i.events.length,x`<h4>${this.clockText(i.hour)}</h4>
              ${i.events.map(l=>this.row(dn[l.kind],this.time(l.t),this.eventText(l),this.where(l.entity),()=>t.goTo(l)))}`)):x`<p class="none">${e("tt_no_events")}</p>`}`}row(t,e,n,o,s){return x`<button class="row" @click=${s}>
      <i style="background:${t}"></i><time>${e}</time><span>${n}${o?x`<small>${o}</small>`:v}</span>
    </button>`}awayText(t){let e=this.session.t,n=this.name(t.entity);switch(t.kind){case"alarm":case"appliance":return this.eventText({kind:t.event??"alarm",entity:t.entity});case"door":case"window":return e("tt_away_door",{name:n,n:t.count});case"motion":return e("tt_away_motion",{name:n,n:t.count});case"light_on":return e("tt_away_light",{name:n,d:this.duration(t.ms)});case"window_open":return e("tt_away_open",{name:n,d:this.duration(t.ms)})}}renderAway(){var d,m;let t=this.session,e=t.t,n=t.playback;((d=this.awayOffer)==null?void 0:d.version)!==t.version&&(this.awayOffer={version:t.version,offer:t.awayOffer()});let o=this.awayOffer.offer,[s,i]=this._awayFrom??o??[t.lastClosed!==null&&t.lastClosed>=n.start?t.lastClosed:Math.max(n.start,t.end-3*36e5),t.end],l=`${t.version}|${s}|${i}`;((m=this.awayCache)==null?void 0:m.key)!==l&&(this.awayCache={key:l,rows:t.away(s,i)});let a=this.awayCache.rows,c=f=>this._awayFrom=f,u=(f,h)=>`${this.clockText(f)} \u2013 ${h>=t.end-6e4?e("tt_now"):this.clockText(h)}`,p=f=>{let h=xt(f.target.value,t.end);h!==null&&c([Math.max(n.start,h),t.end])};return x`<p class="since">${e("tt_away_since")}:</p>
      <div class="filters">
        ${t.lastClosed!==null&&t.lastClosed>=n.start?x`<button class="fchip" aria-pressed=${s===t.lastClosed} @click=${()=>c([t.lastClosed,t.end])}>${e("tt_away_last")}</button>`:v}
        ${o?x`<button class="fchip" aria-pressed=${s===o[0]&&i===o[1]} @click=${()=>c(o)}>${e("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:v}
        <input class="when" type="time" aria-label=${e("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(s,i)}</h4>
      ${a.length?a.slice(0,200).map(f=>this.row(co[f.kind],this.time(f.t),this.awayText(f),this.where(f.entity),()=>t.goTo(f))):x`<p class="none">${e("tt_away_none")}</p>`}`}renderDay(){let t=this.session,e=t.t,n=t.playback,o=T(n.t),s=t.daySummary(o),i=T(o-12*36e5),l=this._compare?t.daySummary(i):null;this._compare&&(!l||l.from>i+6e4)&&queueMicrotask(()=>t.ensureLoaded(i));let a=(g,M)=>g&&g.from>M+6e4?e("tt_day_partial",{time:this.time(g.from)}):"",c=(g,M=1)=>g.toLocaleString(this.language,{maximumFractionDigits:M,minimumFractionDigits:M}),u=g=>g>=6e4?`${c(g/36e5)} h`:"\u2013",p=g=>g&&g.tMin!==null&&g.tMax!==null?`${c(g.tMin)}\u2013${c(g.tMax)}\xB0`:"\u2013",d=g=>x`<td>${g?u(g.lightMs):"\u2013"}</td><td>${g?u(g.windowMs):"\u2013"}</td><td>${g?u(g.heatMs):"\u2013"}</td><td>${p(g)}</td>`,m=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...ot()}),f=g=>(g==null?void 0:g.energy)??null,h=f(s),_=f(l),w=g=>g===void 0?"\u2013":`${c(g)} kWh`,y=g=>g==null?"\u2013":`${Math.round(g*100)} %`,b=this._compare?l?a(l,i):t.loadingDay!==null?e("tt_loading"):"":"";return x`<h4>${e("tt_day_title",{day:m})}</h4>
      ${a(s,o)?x`<p class="since">${a(s,o)}</p>`:v}
      ${b?x`<p class="since">${e("tt_day_before")}: ${b}</p>`:v}
      <div class="filters">
        <button class="fchip" @click=${()=>t.yesterday()}>⟲ ${e("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${e("tt_day_compare")}</button>
      </div>
      ${s&&(s.rooms.length||h)?x`${s.rooms.length?x`<table>
                  <thead>
                    <tr><th></th><th>${e("tt_day_light")}</th><th>${e("tt_day_window")}</th><th>${e("tt_day_heat")}</th><th>${e("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${s.rooms.map(g=>x`<tr><th>${g.name}</th>${d(g)}</tr>
                        ${l?x`<tr class="before"><th>${e("tt_day_before")}</th>${d(l.rooms.find(M=>M.roomId===g.roomId))}</tr>`:v}`)}
                  </tbody>
                </table>`:v}
            ${h?x`<div class="energy">
                  ${[["tt_day_pv",w(h.pv),w(_==null?void 0:_.pv)],["tt_day_use",w(h.use),w(_==null?void 0:_.use)],["tt_day_import",w(h.imp),w(_==null?void 0:_.imp)],["tt_day_export",w(h.exp),w(_==null?void 0:_.exp)],["tt_day_self",y(h.self),y(_==null?void 0:_.self)]].map(([g,M,$])=>x`<span>${e(g)}</span><b>${M}</b>${l?x`<em>${$}</em>`:v}`)}
                </div>`:v}`:x`<p class="none">${e("tt_day_none")}</p>`}`}renderSheet(){let e=this.session.t,n=this._sheet,o=["events","away","day"];return x`<aside class="sheet" role="dialog" aria-label=${e("tt_sheet")}>
      <header>
        ${o.map(s=>x`<button class="tab" aria-pressed=${n===s} title=${s==="away"?e("tt_away_title"):v} @click=${()=>this._sheet=s}>${e(s==="events"?"tt_tab_events":s==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${e("tt_close")} aria-label=${e("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let t=this.session;if(!t)return v;let e=t.t,n=t.playback,o=t.state==="ready"&&!!n,s=t.state==="error"?t.error==="not_unlocked"?e("tt_locked"):t.error==="no_recorder"?e("tt_no_recorder"):t.error==="unknown_command"?e("tt_restart"):e("tt_error",{error:t.error??"?"}):null,i=n?3600/n.speed:10,l=Math.round((t.end-t.start)/6e4);return x`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${e("tt_badge")} <a class="beta" href=${Ne} target="_blank" rel="noopener" title=${e("beta_bar")}>🧪 BETA</a></span>
        ${o?x`<b class="clock-time"></b><span class="clock-ago"></span>`:x`<span class="clock-msg">${s??`${e("tt_loading")} ${Math.round(t.progress*100)} %`}</span>`}
      </div>
      ${this._toast?x`<div class="toast" role="alert">${e("tt_readonly")}</div>`:v}
      ${o&&this._sheet?this.renderSheet():v}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${e("tt_prev")} aria-label=${e("tt_prev")} @click=${()=>t.step(-1)}>${wt(st.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${e(n!=null&&n.playing?"tt_pause":"tt_play")} aria-label=${e(n!=null&&n.playing?"tt_pause":"tt_play")} @click=${()=>t.toggle()}>
          ${wt(n!=null&&n.playing?st.pause:st.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${e("tt_next")} aria-label=${e("tt_next")} @click=${()=>t.step(1)}>${wt(st.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${e("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${l}
          aria-valuenow=${n?Math.round((n.t-t.start)/6e4):l}
          @pointerdown=${a=>this.onDown(a)}
          @pointermove=${a=>this.onMove(a)}
          @pointerup=${a=>this.onUp(a)}
          @pointercancel=${a=>this.onUp(a)}
        >
          ${o?this.renderTrack():s?x`<em class="msg">${s}</em>`:x`<i class="progress" style="width:${Math.round(t.progress*100)}%"></i>`}
        </div>
        ${s&&t.error!=="not_unlocked"?x`<button class="chip" @click=${()=>{t.load()}}>${e("tt_retry")}</button>`:v}
        <button class="chip range" ?disabled=${!o} title=${e("tt_range_hint")} aria-label=${e("tt_range_hint")} @click=${()=>t.setRange(t.range==="7d"?"24h":"7d")}>
          ${t.range==="7d"?e("tt_days",{n:t.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${e("tt_sheet")} aria-label=${e("tt_sheet")} @click=${()=>this.toggleSheet()}>${wt(st.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${e("tt_speed",{s:i>=60?"1 min":i>=1?`${Math.round(i)} s`:`${i.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>t.nextSpeed()}>
          ${(n==null?void 0:n.speed)??360}×
        </button>
        <button class="chip live ${t.atNow?"live-now":""}" title=${e("tt_live_hint")} @click=${()=>t.exit()}>
          <i></i>${t.atNow?`${e("tt_now_reached")} \xB7 ${e("tt_live")}`:e("tt_live")}
        </button>
      </div>`}static styles=Tt`
    :host {
      position: absolute;
      inset: 0;
      z-index: 3;
      pointer-events: none;
      container-type: size;
      container-name: fp3dtt;
      font-family: var(--fp3d-font, system-ui, sans-serif);
      color: var(--fp3d-text, #e6eefc);
      --tt: #ffb020;
    }
    .frame {
      position: absolute;
      inset: 0;
      box-shadow: inset 0 0 0 3px var(--tt);
      border-radius: inherit;
    }
    .clock {
      position: absolute;
      top: 10px;
      left: 50%;
      transform: translateX(-50%);
      display: grid;
      justify-items: center;
      gap: 1px;
      padding: 6px 16px 7px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      white-space: nowrap;
      max-width: calc(100% - 260px);
    }
    .badge {
      font-size: 10px;
      font-weight: 800;
      letter-spacing: 0.12em;
      color: var(--tt);
    }
    .beta {
      margin-left: 4px;
      color: inherit;
      opacity: 0.8;
      text-decoration: none;
      pointer-events: auto;
    }
    .clock-time {
      font-family: var(--fp3d-title-font, inherit);
      font-size: 24px;
      line-height: 1.1;
      font-variant-numeric: tabular-nums;
    }
    .clock-ago,
    .clock-msg {
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: normal;
      text-align: center;
    }
    .toast,
    .label {
      position: absolute;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      z-index: 3;
      padding: 7px 12px;
      border-radius: 10px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.55);
      box-shadow: var(--fp3d-shadow, none);
      font-size: 13px;
    }
    .toast {
      left: 50%;
      transform: translateX(-50%);
      color: var(--tt);
      font-weight: 600;
    }
    .label {
      /* above its marker on the track, kept within the track */
      bottom: calc(100% + 12px);
      left: clamp(0px, calc(var(--x) - 120px), calc(100% - 240px));
      width: 240px;
      box-sizing: border-box;
      display: grid;
      gap: 3px;
      pointer-events: none;
    }
    .bar {
      position: absolute;
      left: 8px;
      right: 8px;
      bottom: 8px;
      height: calc(var(--fp3d-tt-h, 64px) - 16px);
      box-sizing: border-box;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 8px;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      touch-action: none;
    }
    button {
      font: inherit;
      color: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.45;
      cursor: default;
    }
    .btn {
      flex: none;
      width: 36px;
      height: 36px;
      display: grid;
      place-items: center;
      border: 0;
      border-radius: 10px;
      background: transparent;
    }
    .btn:hover:not(:disabled),
    .sheet-btn[aria-pressed="true"] {
      background: rgba(255, 255, 255, 0.07);
    }
    .sheet-btn[aria-pressed="true"] {
      color: var(--tt);
    }
    .play {
      background: var(--tt);
      color: #1a1200;
    }
    .play:hover:not(:disabled) {
      background: var(--tt);
      filter: brightness(1.1);
    }
    .chip {
      flex: none;
      height: 32px;
      padding: 0 11px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 13px;
      font-weight: 600;
      font-variant-numeric: tabular-nums;
      white-space: nowrap;
    }
    .live {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-color: var(--fp3d-accent, #37e0ff);
    }
    .live i {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #ff3b4f;
    }
    .live-now {
      background: var(--fp3d-accent, #37e0ff);
      color: #04121c;
    }
    .track {
      position: relative;
      flex: 1;
      min-width: 0;
      height: 34px;
      margin: 0 4px;
      border-radius: 8px;
      background: rgba(255, 255, 255, 0.05);
      cursor: pointer;
      outline-offset: 2px;
    }
    .track-wait {
      cursor: default;
      overflow: hidden;
    }
    .track i {
      position: absolute;
      top: 0;
      bottom: 0;
      overflow: hidden;
    }
    .track i span {
      position: absolute;
      left: 4px;
      bottom: 2px;
      font-size: 10px;
      font-style: normal;
      white-space: nowrap;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .night {
      background: rgba(40, 60, 140, 0.35);
    }
    .nodata {
      background: rgba(140, 150, 170, 0.28);
    }
    .loading {
      background: repeating-linear-gradient(135deg, rgba(255, 176, 32, 0.22) 0 6px, transparent 6px 12px);
    }
    .loading span {
      color: var(--tt) !important;
    }
    .gap {
      background: repeating-linear-gradient(135deg, rgba(160, 170, 190, 0.32) 0 4px, transparent 4px 8px);
    }
    .progress {
      left: 0;
      background: rgba(255, 176, 32, 0.4);
      transition: width 0.2s;
    }
    .msg {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      font-size: 12px;
      font-style: normal;
      color: var(--fp3d-muted, #8a9bb8);
      overflow: hidden;
    }
    .tick {
      position: absolute;
      top: 0;
      width: 1px;
      height: 5px;
      background: rgba(200, 215, 240, 0.28);
      pointer-events: none;
    }
    .tick-major {
      height: 9px;
      background: rgba(200, 215, 240, 0.5);
    }
    .tick-day {
      height: 100%;
      background: rgba(255, 176, 32, 0.45);
    }
    .tick span {
      position: absolute;
      left: 3px;
      top: 22px;
      font-size: 10px;
      line-height: 11px;
      font-weight: 500;
      color: var(--fp3d-muted, #8a9bb8);
      white-space: nowrap;
    }
    .tick-day span {
      color: var(--tt);
      font-weight: 700;
    }
    .mark {
      position: absolute;
      top: 6px;
      width: 14px;
      height: 14px;
      margin-left: -7px;
      padding: 0;
      border-radius: 50%;
      border: 2px solid var(--fp3d-chrome-solid, #0f1729);
      background: var(--c);
      box-shadow: 0 0 0 1px var(--c);
      z-index: 1;
    }
    .mark-many {
      width: 18px;
      height: 18px;
      margin-left: -9px;
      top: 4px;
    }
    .mark span {
      display: block;
      font-size: 9px;
      font-weight: 800;
      line-height: 14px;
      color: #0a0f1c;
    }
    .head {
      position: absolute;
      left: -1px;
      top: -5px;
      bottom: -5px;
      width: 3px;
      border-radius: 2px;
      background: var(--tt);
      box-shadow: 0 0 6px var(--tt);
      pointer-events: none;
      z-index: 2;
      will-change: transform;
    }
    .head::after {
      content: "";
      position: absolute;
      left: -5px;
      bottom: -6px;
      width: 13px;
      height: 13px;
      border-radius: 50%;
      background: var(--tt);
    }
    .sheet {
      position: absolute;
      top: 78px;
      right: 8px;
      bottom: calc(var(--fp3d-tt-h, 64px) + 4px);
      width: min(380px, calc(100% - 16px));
      box-sizing: border-box;
      display: grid;
      grid-template-rows: auto 1fr;
      border-radius: 14px;
      background: var(--fp3d-chrome-solid, #0f1729);
      border: 1px solid rgba(255, 176, 32, 0.45);
      box-shadow: var(--fp3d-shadow, none);
      pointer-events: auto;
      z-index: 2;
      font-size: 13px;
      overflow: hidden;
    }
    .sheet header {
      display: flex;
      gap: 4px;
      padding: 8px 8px 6px;
      border-bottom: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .tab {
      flex: 1 1 auto;
      min-width: 0;
      padding: 6px 8px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 12px;
      font-weight: 600;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .tab[aria-pressed="true"] {
      background: rgba(255, 176, 32, 0.18);
      color: var(--tt);
    }
    .x {
      flex: none;
      width: 30px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      font-size: 18px;
    }
    .body {
      overflow-y: auto;
      padding: 8px 10px 12px;
      overscroll-behavior: contain;
    }
    .filters {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-bottom: 6px;
    }
    .fchip {
      padding: 4px 10px;
      border-radius: 999px;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      background: transparent;
      font-size: 12px;
    }
    .fchip[aria-pressed="true"] {
      border-color: var(--tt);
      background: rgba(255, 176, 32, 0.14);
    }
    .when {
      font: inherit;
      font-size: 12px;
      color: inherit;
      background: transparent;
      border: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      border-radius: 999px;
      padding: 3px 8px;
      color-scheme: dark;
    }
    .opt {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
      margin: 2px 0;
    }
    .since {
      margin: 0 0 4px;
      font-size: 12px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .sheet h4 {
      margin: 10px 0 4px;
      font-size: 12px;
      font-weight: 700;
      color: var(--tt);
    }
    .row {
      display: grid;
      grid-template-columns: 10px 44px 1fr;
      align-items: start;
      gap: 6px;
      width: 100%;
      padding: 5px 4px;
      border: 0;
      border-radius: 8px;
      background: transparent;
      text-align: left;
      font-size: 13px;
    }
    .row:hover {
      background: rgba(255, 255, 255, 0.06);
    }
    .row i {
      width: 8px;
      height: 8px;
      margin-top: 5px;
      border-radius: 50%;
    }
    .row time {
      font-variant-numeric: tabular-nums;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .row small {
      display: block;
      font-size: 11px;
      color: var(--fp3d-muted, #8a9bb8);
    }
    .none {
      color: var(--fp3d-muted, #8a9bb8);
    }
    table {
      width: 100%;
      border-collapse: collapse;
      font-size: 12px;
      font-variant-numeric: tabular-nums;
    }
    th,
    td {
      padding: 4px 3px;
      text-align: right;
      white-space: nowrap;
    }
    th:first-child {
      text-align: left;
      max-width: 110px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    thead th {
      font-weight: 600;
      color: var(--fp3d-muted, #8a9bb8);
    }
    tbody tr:not(.before) {
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
    }
    .before {
      color: var(--fp3d-muted, #8a9bb8);
      font-size: 11px;
    }
    .before th {
      font-weight: 400;
      padding-left: 10px;
    }
    .energy {
      display: grid;
      grid-template-columns: 1fr auto auto;
      gap: 4px 12px;
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid var(--fp3d-line, rgba(120, 170, 255, 0.16));
      font-variant-numeric: tabular-nums;
    }
    .energy b {
      text-align: right;
    }
    .energy em {
      font-style: normal;
      text-align: right;
      color: var(--fp3d-muted, #8a9bb8);
    }
    /* phones and narrow cards: the track on a row of its own above the buttons */
    @container fp3dtt ((max-width: 700px) or ((orientation: portrait) and (max-width: 1000px))) {
      .bar {
        flex-wrap: wrap;
        align-content: center;
        row-gap: 6px;
        padding: 6px 8px;
      }
      .track {
        order: -1;
        flex: 1 0 100%;
        margin: 14px 0 0;
      }
      .live {
        margin-left: auto;
      }
      .chip {
        padding: 0 9px;
      }
      .clock {
        top: 8px;
        padding: 4px 12px 5px;
        max-width: calc(100% - 120px);
      }
      .clock-time {
        font-size: 19px;
      }
      .sheet {
        top: 64px;
      }
    }
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Jt);var uo=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),po=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),mo=600,te=r=>r.slice(0,r.indexOf("."));function fo(r,t){let e=r.states[t];return!t.startsWith("sensor.")||!e||e.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(e.state))||e.state==="unavailable"||e.state==="unknown"}var pn=new Set(["geocoded_location","location"]),ho=/location|address|geocoded|ssid|bssid|standort|adresse/i;function go(r,t){var o,s,i;let e=((o=r.states[t])==null?void 0:o.attributes)??{},n=((i=(s=r.entities)==null?void 0:s[t])==null?void 0:i.translation_key)??"";return pn.has(String(e.device_class??""))||pn.has(n)||"latitude"in e||"longitude"in e?!0:ho.test(`${t} ${String(e.friendly_name??"")} ${n}`)}function hn(r){let t=new Set;for(let e of Object.values(r.states))if(e.entity_id.startsWith("person.")&&Array.isArray(e.attributes.device_trackers))for(let n of e.attributes.device_trackers)typeof n=="string"&&t.add(n);return t}function bo(r,t=hn(r)){var n,o;let e=new Set;for(let s of t){let i=(o=(n=r.entities)==null?void 0:n[s])==null?void 0:o.device_id;i&&e.add(i)}return e}function ee(r,t,e,n=mo){var w;let o=new Set(t.presence.flatMap(y=>[y.person,y.sensor]).filter(y=>!!y)),s=hn(r);for(let y of s)o.add(y);let i=bo(r,s),l=new Set((e.cars??[]).filter(y=>y.startsWith("device_tracker.")&&!o.has(y)&&!!r.states[y])),a=new Set(t.floors.flatMap(y=>y.rooms.map(b=>b.area_id)).filter(y=>!!y)),c=[];for(let[y,b]of Object.entries(r.entities??{})){if(!b.area_id&&b.device_id){let g=(w=r.devices)==null?void 0:w[b.device_id];if(!(g!=null&&g.area_id)||!a.has(g.area_id))continue}else if(!b.area_id||!a.has(b.area_id))continue;b.hidden||b.entity_category||!po.has(te(y))||c.push(y)}let u=Object.keys(r.states).filter(y=>y.startsWith("weather.")),p=[...new Set([...l,...e.entities,"sun.sun",...t.settings.weather_entity?[t.settings.weather_entity]:[],...t.settings.outage_entity?[t.settings.outage_entity]:[],...u.slice(0,1),...c])],d=[],m=p.filter(y=>{var g,M;if(!y.includes(".")||!l.has(y)&&uo.has(te(y))||o.has(y)||!r.states[y])return!1;if(l.has(y))return!0;let b=(M=(g=r.entities)==null?void 0:g[y])==null?void 0:M.device_id;return b&&i.has(b)||go(r,y)?(d.push(y),!1):!0}),f=m.slice(0,n),h=f.filter(y=>fo(r,y)),_=new Set(h);return{entities:f.filter(y=>!_.has(y)),stats:h,overflow:m.slice(n),cars:f.filter(y=>l.has(y)),hidden:d}}var mn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},yo=new Set(["front","front_glass","sidelight","sidelights"]),_o=new Set(["washer","dryer","dishwasher"]);function fn(r,t){let e=!1;for(let n=0,o=t.length-1;n<t.length;o=n++){let[s,i]=t[n],[l,a]=t[o];i>r[1]!=a>r[1]&&r[0]<(l-s)*(r[1]-i)/(a-i)+s&&(e=!e)}return e}function vo(r,t){if(t.type!=="door"||t.wall)return!1;if(t.style&&yo.has(t.style))return!0;if(t.style)return!1;let e=r.rooms.find(p=>p.id===t.room_id);if(!e||e.points.length<3)return!1;let n=e.points[t.edge],o=e.points[(t.edge+1)%e.points.length];if(!n||!o)return!1;let s=Math.hypot(o[0]-n[0],o[1]-n[1]);if(s<1e-6)return!1;let i=(o[0]-n[0])/s,l=(o[1]-n[1])/s,a=[n[0]+i*t.offset,n[1]+l*t.offset],c=p=>[a[0]-l*p,a[1]+i*p],u=fn(c(.3),e.points)?c(-.4):c(.4);return!r.rooms.some(p=>p.id!==e.id&&p.points.length>=3&&fn(u,p.points))}function ne(r,t,e){var s,i;let n=new Map,o=new Map(e.furniture);for(let l of t.floors)for(let a of l.furniture){if(!_o.has(a.type))continue;let c=(s=o.get(a.id))==null?void 0:s.power,u=(i=l.placements.find(d=>{var m;return((m=r.states[d.entity_id])==null?void 0:m.attributes.device_class)==="power"&&Math.hypot(d.x-a.x,d.z-a.z)<=1.2}))==null?void 0:i.entity_id,p=c??u;p&&!n.has(p)&&n.set(p,a)}return n}function gn(r,t,e,n){var l;let o=new Map,s=(a,c)=>{a&&n.has(a)&&!o.has(a)&&o.set(a,c)},i=new Map(e.openings);for(let a of t.floors)for(let c of a.openings){let u=i.get(c.id);if(u)if(c.type==="garage")for(let p of[u.contact,u.cover])s(p,"garage");else if(c.type==="door"){if(vo(a,c))for(let p of[u.contact,u.contact2])s(p,"door")}else[u.contact,u.tilt,u.contact2,u.tilt2].filter(d=>!!d&&n.has(d)).forEach((d,m)=>s(d,m?"window_more":"window"))}for(let a of ne(r,t,e).keys())s(a,"washer");for(let a of n){if(o.has(a))continue;let c=te(a),u=String(((l=r.states[a])==null?void 0:l.attributes.device_class)??"");c==="lock"?s(a,"lock"):c==="alarm_control_panel"?s(a,"alarm"):c==="vacuum"?s(a,"robot"):c==="weather"?s(a,"weather"):c==="cover"&&(u==="garage"||u==="gate")?s(a,"garage"):c==="binary_sensor"&&(mn[u]?s(a,mn[u]):u==="garage_door"?s(a,"garage"):u==="motion"&&s(a,"motion"))}return o}var xo={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function wo(r,t){if(r==="rgb_color")return Array.isArray(t)&&t.every(e=>typeof e=="number")?t.map(e=>Math.round(e)):null;if(typeof t!="number"||!Number.isFinite(t))return t;switch(r){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(t/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(t/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(t);case"volume_level":return Math.round(Math.round(t*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(t*10)/10;default:return t}}function Mo(r){return r==="home"||r==="unavailable"||r==="unknown"?r:"not_home"}function oe(r){let t=r.entity_id.slice(0,r.entity_id.indexOf("."));if(t==="device_tracker")return{s:Mo(r.state),a:null};let e=xo[t];if(!(e!=null&&e.length))return{s:r.state,a:null};let n={};for(let o of e){let s=r.attributes[o];if(s==null)continue;let i=wo(o,s);i!=null&&(n[o]=i)}return{s:r.state,a:Object.keys(n).length?n:null}}var re=3e5,bn=2e4,ko=[6e4,re,15*6e4,36e5],So=(r,t)=>r.startsWith("sensor.")&&t.state!==""&&Number.isFinite(Number(t.state));function $o(r,t){let e=[];for(let n of r){let o=e[e.length-1];o&&Math.floor(o.t/t)===Math.floor(n.t/t)?e[e.length-1]=n:e.push(n);let s=e[e.length-2];s&&s.k===e[e.length-1].k&&e.pop()}return e}var Mt=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(t,e,n=Date.now()){this.ids=t,this.startStates=e,this.startedAt=n;for(let o of t)this.seen.set(o,e[o]),e[o]&&this.lastKey.set(o,z(oe(e[o])))}get pending(){return this.count}record(t,e){for(let n of this.ids){let o=t[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let s=oe(o),i=z(s);if(this.lastKey.get(n)===i)continue;let l=this.rows.get(n),a=l==null?void 0:l[l.length-1],c=Date.parse(o.last_updated??o.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(e,c):e,(a==null?void 0:a.t)??-1/0);if(a&&So(n,o)&&Math.floor(a.t/re)===Math.floor(u/re)){l[l.length-1]={t:u,v:s,k:i},this.lastKey.set(n,i);continue}this.lastKey.set(n,i),l?l.push({t:u,v:s,k:i}):this.rows.set(n,[{t:u,v:s,k:i}]),this.count++}this.count>bn&&this.compact()}compact(){for(let t of ko){let e=0;for(let[n,o]of this.rows){let s=$o(o,t);this.rows.set(n,s),e+=s.length}if(this.count=e,e<=bn/2)return}}flush(t,e){let n=0,o=0;for(let s of this.ids){if(this.seeded.has(s)||t.tracks.has(s)||t.series.has(s))continue;this.seeded.add(s);let i=this.startStates[s],l=[...i?[{t:this.startedAt,v:oe(i)}]:[],...this.rows.get(s)??[]],a=Xe(s,l);this.rows.delete(s),a&&(t.tracks.set(s,a),t.missing.delete(s),o++,n+=a.times.length)}for(let[s,i]of this.rows){let l=t.tracks.get(s);if(l){n+=qt(l,i);continue}let a=t.series.get(s);a&&(n+=Ye(a,i.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,t.end=Math.max(t.end,e),{added:n,created:o}}};function yn(r,t,e){if(!(t.state==="opening"||t.state==="closing")||t.pos===null||!e||e.pos===null)return t.pos;let o=e.t-t.t;return!(o>0)||o>18e4||r<=t.t?t.pos:r>=e.t?e.pos:Math.round(t.pos+(e.pos-t.pos)*(r-t.t)/o)}var k=Math.PI/180;function kt(r,t,e){let n=(e/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,s=357.52911+n*(35999.05029-1537e-7*n),i=.016708634-n*(42037e-9+1267e-10*n),l=Math.sin(s*k)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*s*k)*(.019993-101e-6*n)+Math.sin(3*s*k)*289e-6,a=125.04-1934.136*n,c=o+l-.00569-.00478*Math.sin(a*k),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(a*k),d=Math.asin(Math.sin(p*k)*Math.sin(c*k)),m=Math.tan(p/2*k)**2,f=4/k*(m*Math.sin(2*o*k)-2*i*Math.sin(s*k)+4*i*m*Math.sin(s*k)*Math.cos(2*o*k)-.5*m*m*Math.sin(4*o*k)-1.25*i*i*Math.sin(2*s*k)),_=(((e/6e4%1440+1440)%1440+f+4*t)%1440+1440)%1440,w=(_/4<0?_/4+180:_/4-180)*k,y=r*k,b=Math.min(1,Math.max(-1,Math.sin(y)*Math.sin(d)+Math.cos(y)*Math.cos(d)*Math.cos(w))),g=Math.acos(b),M=90-g/k;M+=Eo(M);let $=Math.cos(y)*Math.sin(g),G=180;if(Math.abs($)>1e-9){let fe=Math.acos(Math.min(1,Math.max(-1,(Math.sin(y)*Math.cos(g)-Math.sin(d))/$)))/k;G=w>0?(fe+180)%360:(540-fe)%360}return{elevation:M,azimuth:G}}function Eo(r){if(r>85)return 0;let t=Math.tan(r*k);return(r>5?58.1/t-.07/t**3+86e-6/t**5:r>-.575?1735+r*(-518.2+r*(103.4+r*(-12.79+r*.711))):-20.772/t)/3600}function se(r,t,e){return kt(r,t,e).elevation<-.833}function _n(r,t,e,n,o=5*6e4){let s=[],i=null;for(let l=e;l<=n;l+=o){let a=se(r,t,l);a&&i===null&&(i=l),!a&&i!==null&&(s.push([i,l]),i=null)}return i!==null&&s.push([i,n]),s}var le=class extends Error{constructor(t){super(`Time travel is read-only: ${t}`),this.name="ReplayReadOnly"}},Ro=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Ao=new Set(["neonplan3d/building/subscribe"]),ie={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},vn=["person.","device_tracker."],ae=r=>r.slice(0,r.indexOf("."));function St(r,t){if(!(t!=null&&t.some(n=>n in r)))return r;let e={...r};for(let n of t)delete e[n];return e}function it(r){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:r}})),new le(r)}function To(r,t){let e=r,n={...r,states:t};n.callService=(o,s)=>it(`${o}.${s}`),n.callWS=o=>Ro.has(String(o.type))?r.callWS(o):it(String(o.type)),n.connection={subscribeMessage:(o,s)=>Ao.has(String(s.type))?r.connection.subscribeMessage(o,s):it(String(s.type))};for(let o of["callApi","callApiRaw"]){let s=e[o];typeof s=="function"&&(n[o]=(i,...l)=>String(i).toUpperCase()==="GET"?s.call(r,i,...l):it(`${i} ${String(l[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in e&&(n[o]=()=>it(o));return n}var Fo=new Set(["light","switch","input_boolean","binary_sensor","fan"]),$t=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(t,e){this.timeline=t,this.cursor=new B(t),this.cursor.tracks.forEach((o,s)=>this.trackAt.set(o.id,s)),this.location=e.location??null,this.frozen=e.states??null;let n=new Set([...e.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...e.requested,...t.tracks.keys(),...t.series.keys()])].filter(o=>n.has(o)||!vn.some(s=>o.startsWith(s)))}refresh(){let t=this.cursor.t;this.cursor=new B(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((e,n)=>this.trackAt.set(e.id,n)),Number.isFinite(t)&&this.cursor.at(t)}hassAt(t,e,n=!0){let o=this.frozen??=t.states,s=!1;if(!this.base){this.base={};for(let[a,c]of Object.entries(o))vn.some(u=>a.startsWith(u))||(this.base[a]=a.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:St(c.attributes,["entity_picture","access_token"])}:c);s=!0}this.sameContext(t)||(this.live=t,s=!0);let i=!n&&e>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(e),this.pulses=i?this.findPulses(i):[];let l=[];for(let a of this.requested){let c=this.slots.get(a),u=this.slot(a,e,o[a],c);u!==c&&(this.slots.set(a,u),l.push(a))}if(!s&&!l.length&&this.hass)return this.hass;if(s){this.states={...this.base};for(let a of this.requested){let c=this.slots.get(a);c&&(this.states[a]=c.obj)}}else{this.states={...this.states};for(let a of l)this.states[a]=this.slots.get(a).obj}return this.hass=To(this.live,this.states),this.hass}findPulses(t){let e=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let s=t[o],i=n[o];if(s<0||i-s<2)continue;let l=this.cursor.tracks[o];if(!Fo.has(ae(l.id)))continue;let a=l.values[l.vals[s]].s;if(l.values[l.vals[i]].s===a){for(let c=s+1;c<i;c++)if(l.values[l.vals[c]].s!==a){e.push(l.id);break}}}return e}sameContext(t){let e=this.live;if(!e)return!1;if(e===t)return!0;let n=t;for(let o in n)if(o!=="states"&&n[o]!==e[o])return!1;for(let o in e)if(!(o in n))return!1;return!0}slot(t,e,n,o){let s=this.trackAt.get(t),i=this.timeline.series.get(t),l,a;if(t==="sun.sun"&&this.location){let c=kt(this.location.lat,this.location.lon,e),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,d=kt(this.location.lat,this.location.lon,e+6e5).elevation>c.elevation;l=`${u}|${p}|${d}`,a=()=>({entity_id:t,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...St((n==null?void 0:n.attributes)??{},ie.sun),elevation:u,azimuth:p,rising:d}})}else if(s!==void 0&&this.cursor.idx[s]>=0){let c=this.cursor.tracks[s],u=this.cursor.idx[s],p=c.values[c.vals[u]],d=t.startsWith("cover.")?this.coverPos(c,u,e):null;l=d===null?`${u}`:`${u}:${d}`,a=()=>{let m={...St((n==null?void 0:n.attributes)??{},ie[ae(t)]),...p.a??{}};d!==null&&(m.current_position=d),t==="sun.sun"&&m.elevation===void 0&&Object.assign(m,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let f=c.since[u];return f>this.timeline.start?{entity_id:t,state:p.s,attributes:m,last_changed:new Date(f).toISOString()}:{entity_id:t,state:p.s,attributes:m}}}else if(i){let c=D(i,e),u=this.stepOf(t,i,n),p=Le(c,u);l=`n${p}`,a=()=>({entity_id:t,state:p,attributes:(n==null?void 0:n.attributes)??{},last_changed:new Date(e).toISOString()})}else l="none",a=()=>({entity_id:t,state:"unknown",attributes:St((n==null?void 0:n.attributes)??{},ie[ae(t)])});return o&&o.key===l&&o.attrs===(n==null?void 0:n.attributes)?o:{key:l,attrs:n==null?void 0:n.attributes,obj:a()}}coverPos(t,e,n){let o=t.values[t.vals[e]];if(o.s!=="opening"&&o.s!=="closing")return null;let s=l=>{var a;return typeof((a=l.a)==null?void 0:a.current_position)=="number"?l.a.current_position:null},i=e+1<t.times.length?{t:t.times[e+1],pos:s(t.values[t.vals[e+1]])}:null;return yn(n,{t:t.times[e],state:o.s,pos:s(o)},i)}stepOf(t,e,n){var s,i,l;let o=this.steps.get(t);if(o===void 0){let a=e.mean.find(c=>!Number.isNaN(c))??0;o=He(n==null?void 0:n.attributes.unit_of_measurement,(l=(i=(s=this.live)==null?void 0:s.entities)==null?void 0:i[t])==null?void 0:l.display_precision,a),this.steps.set(t,o)}return o}rows(t,e,n){let o={};for(let s of t){let i=this.timeline.tracks.get(s);if(!i)continue;let l=[];for(let a=Math.max(0,S(i.times,e));a<i.times.length&&i.times[a]<=n;a++)l.push({s:i.values[i.vals[a]].s,lu:i.times[a]/1e3});l.length&&(o[s]=l)}return o}};var xn=new Set(["cleaning","paused","returning"]),Oo=new Set(["","unknown","unavailable","none","null"]);function wn(r,t,e){var c;if(!r)return[];let n=u=>r.values[r.vals[u]].s,o=S(r.times,e);if(o<0||!xn.has(n(o)))return[];let s=o;for(;s>0&&xn.has(n(s-1));)s--;let i=r.times[s],l=[],a=u=>{let p=typeof u=="string"?u.trim():"";!Oo.has(p.toLowerCase())&&l[l.length-1]!==p&&l.push(p)};if(t){let u=Math.max(0,S(t.times,i));for(t.times[u]<i-6e4&&u++;u<t.times.length&&t.times[u]<=e;u++)a(t.values[t.vals[u]].s)}else for(let u=s;u<=o;u++)a((c=r.values[r.vals[u]].a)==null?void 0:c.current_room);return l}var ce=r=>r.slice(0,r.indexOf("."));function zo(r,t){var n,o,s;let e=(n=r.entities)==null?void 0:n[t];return e?e.area_id??(e.device_id?((s=(o=r.devices)==null?void 0:o[e.device_id])==null?void 0:s.area_id)??null:null):null}function Mn(r,t,e){let n=[],o=new Map;for(let l of Object.keys(r.entities??{})){let a=zo(r,l);a&&o.set(a,[...o.get(a)??[],l])}let s=new Map(e.openings),i=new Map(e.furniture);for(let l of t.floors)for(let a of l.rooms){if(a.points.length<3)continue;let c=new Set(a.area_id?o.get(a.area_id)??[]:[]);for(let m of l.placements)P([m.x,m.z],a.points)&&c.add(m.entity_id);for(let m of l.furniture){let f=i.get(m.id);f!=null&&f.entity&&P([m.x,m.z],a.points)&&c.add(f.entity)}let u=[];for(let m of l.openings){if(m.room_id!==a.id)continue;let f=s.get(m.id),h=f?[f.contact,f.tilt,f.contact2,f.tilt2].filter(_=>!!_):[];for(let _ of h)c.add(_);h.length&&m.type!=="door"&&m.type!=="garage"&&u.push(h)}let p=[...c].filter(m=>!!r.states[m]),d=m=>{var f;return(f=r.states[m])==null?void 0:f.attributes.device_class};n.push({floorId:l.id,roomId:a.id,name:a.name,lights:p.filter(m=>ce(m)==="light"),windows:u,climates:p.filter(m=>ce(m)==="climate"),temps:p.filter(m=>ce(m)==="sensor"&&d(m)==="temperature"),all:p})}return n}function kn(r){let t=new Map;for(let e of r)for(let n of e.all)t.has(n)||t.set(n,e);return t}var ue=36e5;function at(r,t,e){let n=r.map(([s,i])=>[Math.max(s,t),Math.min(i,e)]).filter(([s,i])=>i>s);n.sort((s,i)=>s[0]-i[0]);let o=[];for(let s of n){let i=o[o.length-1];i&&s[0]<=i[1]?i[1]=Math.max(i[1],s[1]):o.push([s[0],s[1]])}return o}var Et=r=>r.reduce((t,[e,n])=>t+(n-e),0);function Po(r,t,e){let n=[],o=null;for(let s=0;s<r.times.length;s++){let i=t(r.values[r.vals[s]]);i&&o===null&&(o=r.times[s]),!i&&o!==null&&(n.push([o,r.times[s]]),o=null)}return o!==null&&e>o&&n.push([o,e]),n}function $n(r,t,e,n,o=2*ue){let s=at(t.flatMap(a=>{let c=r.tracks.get(a);return c?q(c,L,r.end):[]}),e,n);if(!t.some(a=>r.tracks.has(a)))return[];let i=[],l=e;for(let[a,c]of s)a-l>=o&&i.push([l,a]),l=Math.max(l,c);return n-l>=o&&i.push([l,n]),i}function En(r){for(let t=r.length-1;t>=0;t--){let[e,n]=r[t],o=0;for(let s=e;s<n;s+=6e5){let i=j(s);i>=7&&i<22&&(o+=Math.min(6e5,n-s))}if(o>=ue)return[e,n]}return null}var Sn=["alarm","door","window","window_open","light_on","motion","appliance"];function Rn(r){let{timeline:t,roles:e,events:n,from:o,to:s}=r,i=[],l=new Map,a=(u,p,d)=>{let m=`${u}:${p}`,f=l.get(m);if(f)f.count++,f.t=Math.min(f.t,d);else{let h={kind:u,entity:p,t:d,count:1,ms:0};l.set(m,h),i.push(h)}};for(let u of n)u.t<o||u.t>s||(yt.has(u.kind)||u.kind==="rain"?i.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?a("door",u.entity,u.t):u.kind==="window"?a("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&i.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of r.motion){let p=t.tracks.get(u);if(p){for(let d of rt(p))d.from!==null&&d.t>=o&&d.t<=s&&d.to==="on"&&d.from!=="on"&&a("motion",u,d.t);if(p.dropped)for(let d of p.dropped)d>=o&&d<=s&&a("motion",u,d)}}let c=(u,p,d,m)=>{let f=at(d,o,s),h=Et(f);(h>=m||f.length&&f[f.length-1][1]>=s&&h>=6e4)&&i.push({kind:u,entity:p,t:f[0][0],count:f.length,ms:h})};for(let u of r.lights){let p=t.tracks.get(u);p&&c("light_on",u,q(p,Vo,t.end),15*6e4)}for(let[u,p]of e){if(p!=="window"&&p!=="window_more")continue;let d=t.tracks.get(u);d&&c("window_open",u,q(d,L,t.end),30*6e4)}return i.sort((u,p)=>Sn.indexOf(u.kind)-Sn.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var Vo=new Set(["on"]);function Co(r,t,e,n){let o=1/0,s=-1/0,i=r.series.get(t);if(i)for(let l=0;l<i.mean.length;l++){let a=i.start+(l+.5)*i.step,c=i.mean[l];a<e||a>n||Number.isNaN(c)||(o=Math.min(o,c),s=Math.max(s,c))}else{let l=r.tracks.get(t);if(l)for(let a=Math.max(0,S(l.times,e));a<l.times.length&&l.times[a]<=n;a++){let c=Number(l.values[l.vals[a]].s);Number.isFinite(c)&&(o=Math.min(o,c),s=Math.max(s,c))}}return Number.isFinite(o)?[o,s]:null}function An(r,t,e,n,o=null){let s=Math.min(n,r.end),i=[],l=(a,c)=>a.flatMap(u=>{let p=r.tracks.get(u);return p?Po(p,c,r.end):[]});for(let a of t){let c=Et(at(l(a.lights,f=>f.s==="on"),e,s)),u=Et(at(l(a.windows.flat(),f=>L.has(f.s)),e,s)),p=Et(at(l(a.climates,f=>{var h;return((h=f.a)==null?void 0:h.hvac_action)==="heating"}),e,s)),d=null,m=null;for(let f of a.temps){let h=Co(r,f,e,s);h&&(d=d===null?h[0]:Math.min(d,h[0]),m=m===null?h[1]:Math.max(m,h[1]))}(c||u||p||d!==null)&&i.push({roomId:a.roomId,name:a.name,lightMs:c,windowMs:u,heatMs:p,tMin:d,tMax:m})}return{from:e,to:n,rooms:i,energy:o}}function No(r,t,e){let n=r.series.get(t);if(n){let i=D(n,e);return Number.isFinite(i)?String(i):null}let o=r.tracks.get(t);if(!o)return null;let s=S(o.times,e);return s<0?null:o.values[o.vals[s]].s}function Tn(r,t,e,n,o,s){var l;let i={};for(let a of o){let c=No(r,a,s);c!==null&&(i[a]={entity_id:a,state:c,attributes:((l=t[a])==null?void 0:l.attributes)??{}})}return ge({states:i},e,[],n)}function Fn(r,t){let e=r.energy;return[...new Set([e.grid,e.solar,e.battery,e.battery_soc,e.consumption,t.grid,t.gridExport,...t.solar,...t.battery,...t.charge,...t.soc].filter(n=>!!n))]}function On(r,t,e,n=3e5){let o=0,s=0,i=0,l=0,a=!1,c=n/ue/1e3;for(let u=t+n/2;u<e;u+=n){let p=r(u);p.solar===null&&p.grid===null&&p.consumption===null||(a=!0,o+=Math.max(0,p.solar??0)*c,s+=Math.max(0,p.grid??0)*c,i+=Math.max(0,-(p.grid??0))*c,l+=Math.max(0,p.consumption??0)*c)}return a?{pv:o,imp:s,exp:i,use:l,self:l>0?Math.min(1,Math.max(0,1-s/l)):null}:null}var Io={tt_range_hint:"Periodo: 24 horas o varios d\xEDas",tt_days:"{n} d",tt_loading_day:"cargando {day} \u2026",tt_recorder_days:"Registro: {n} d\xEDas",tt_memory_full:"L\xEDmite de memoria alcanzado",tt_now_reached:"Presente alcanzado",tt_sheet:"Eventos, res\xFAmenes",tt_tab_events:"Eventos",tt_tab_away:"Ausencia",tt_tab_day:"D\xEDa",tt_close:"Cerrar",tt_f_safety:"Seguridad",tt_f_openings:"Puertas y ventanas",tt_f_devices:"Aparatos",tt_f_energy:"Energ\xEDa",tt_follow:"La c\xE1mara sigue los eventos",tt_stop:"Parar en eventos importantes",tt_no_events:"Sin eventos",tt_ev_window:"{name} abierta",tt_ev_battery_full:"Bater\xEDa llena: {name}",tt_ev_pv_peak:"M\xE1xima potencia solar del d\xEDa",tt_away_title:"Mientras no estabas",tt_away_since:"Desde",tt_away_last:"desde el \xFAltimo viaje en el tiempo",tt_away_quiet:"tranquilo {from}\u2013{to}",tt_away_none:"No pas\xF3 nada \u2013 todo tranquilo.",tt_away_door:"{name}: abierta {n}\xD7",tt_away_motion:"Movimiento {name}: {n}\xD7",tt_away_light:"{name} encendida durante {d}",tt_away_open:"{name} abierta durante {d}",tt_day_title:"Resumen del d\xEDa {day}",tt_day_light:"Luz",tt_day_window:"Ventana",tt_day_heat:"Calefacci\xF3n",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Compra de red",tt_day_export:"Inyecci\xF3n",tt_day_use:"Consumo",tt_day_self:"Autosuficiencia",tt_day_compare:"Comparar con el d\xEDa anterior",tt_day_before:"D\xEDa anterior",tt_day_none:"A\xFAn no hay valores para este d\xEDa.",tt_day_partial:"incompleto (desde las {time})",tt_yesterday:"Ayer a esta hora"};function zn(r){return(t,e={})=>{let n=r(t,e);if(n!==t)return n;let o=Io[t]??t;for(let[s,i]of Object.entries(e))o=o.replace(`{${s}}`,String(i));return o}}var E=24*36e5,de=150,pe=250,Do=10*1024*1024,Ho=6e4,Lo=6e4,Pn=1e4;function K(r,t){try{return t!==void 0&&localStorage.setItem(`fp3d-tt-${r}`,t),localStorage.getItem(`fp3d-tt-${r}`)}catch{return null}}var me=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=K("follow")==="1";stopImportant=K("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{var t;document.hidden||!((t=this.playback)!=null&&t.playing)||(this.last=performance.now(),this.schedule())};constructor(t){this.opts=t,this.live=t.live,this.startStates=t.live.states,this.quality=t.quality,this.low=t.spec.low,this.t=zn(t.t),Gt(Kt(t.live)),this.end=Date.now(),this.range=t.range==="7d"?"7d":"24h";let e=Number(K("closed"));this.lastClosed=Number.isFinite(e)&&e>0&&e<this.end?e:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,s,i)=>{var l;return((l=n.replayer)==null?void 0:l.rows(o,s,i))??{}},listen:o=>n.listen(o),stats:(o,s,i)=>n.timeline?Je(n.timeline,o,s,i):{},robotRooms:(o,s)=>n.timeline?wn(n.timeline.tracks.get(o),s?n.timeline.tracks.get(s):void 0,n.replay.t):[],setQuality:(o,s)=>n.setQuality(o,s)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(t){return this.listeners.add(t),()=>this.listeners.delete(t)}notify(){for(let t of this.listeners)t()}get playing(){var t;return!!((t=this.playback)!=null&&t.playing)}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*E}get recorderStart(){var e;let t=(e=this.timeline)==null?void 0:e.keepDays;return typeof t=="number"&&t>0?this.end-t*E:null}get atNow(){let t=this.playback;return!!t&&!t.playing&&t.t>=t.end-1e3&&Date.now()-t.end<12e4}get location(){let t=this.live.config;return typeof(t==null?void 0:t.latitude)=="number"&&typeof(t==null?void 0:t.longitude)=="number"?{lat:t.latitude,lon:t.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(t,e,n){let o=ee(this.live,this.opts.building,this.opts.spec),s=Math.max(1,Math.ceil(o.entities.length/de),Math.ceil(o.stats.length/pe)),i=[];for(let l=0;l<s;l++){let a=o.entities.slice(l*de,(l+1)*de),c=o.stats.slice(l*pe,(l+1)*pe),u={type:"neonplan3d/timetravel/history",start_time:t/1e3,end_time:e/1e3,entity_ids:a,statistic_ids:c},p=o.cars.filter(d=>a.includes(d));if(p.length&&(u.car_trackers=p),i.push(await this.live.callWS(u)),this.disposed)return null;n==null||n((l+1)/s)}return Ue(i)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:t,spec:e}=this.opts,n=this.live,o=ee(n,t,e),s;try{s=await this.fetchWindow(this.end-E,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=(u==null?void 0:u.code)??(u==null?void 0:u.message)??String(c),this.notify();return}if(!s)return;let i=t.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...o.entities,...o.stats,...o.overflow,...o.hidden,...i],this.cars=o.cars;let l=new Map(e.furniture);this.devices=e.energy?Rt(t,c=>{var u;return((u=l.get(c.id))==null?void 0:u.power)??null}):null,this.energyIds=this.devices?Fn(t,this.devices):[],this.rooms=Mn(n,t,e),this.roomOf=kn(this.rooms);for(let[c,u]of ne(n,t,e))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(s);let a=typeof this.opts.at=="number"?this.opts.at:xt(this.opts.at??null,this.end);this.playback=new _t(s.start,this.end,a??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Xt:vt),this.liveLog=new Mt([...o.entities,...o.stats,...o.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(t){let{building:e,spec:n}=this.opts,o=this.live,s=new Set([...t.tracks.keys(),...t.series.keys()]);this.roles=gn(o,e,n,s),qe(t)>Ge&&Qe(t,this.motion()),this.timeline=t,this.version++,this.daySummaries.clear(),this.replayer=new $t(t,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[e.settings.weather_entity,...Object.keys(o.states).filter(i=>i.startsWith("weather."))].find(i=>!!i&&s.has(i))??null,this.findEvents(),this.gaps=jt(t),this.gapsTo=t.end,this.updateNights()}findEvents(){let t=this.timeline;if(!t)return;let{building:e,spec:n}=this.opts,o=this.devices,s=o&&n.energy?{solar:e.energy.solar?[e.energy.solar]:o.solar,soc:e.energy.battery_soc?[e.energy.battery_soc]:o.soc,sunDown:a=>this.sunDown(a)}:null,i=e.settings.outage_entity,l=i&&this.live.states[i]?{id:i,attributes:this.live.states[i].attributes}:null;this.allEvents=on({timeline:t,roles:this.roles,weather:this.weather,energy:s,outage:l}),this.events=this.allEvents.filter(a=>!nn.has(a.kind))}sunDown(t){var s;let e=this.location;if(e)return se(e.lat,e.lon,t);let n=(s=this.timeline)==null?void 0:s.tracks.get("sun.sun"),o=n?S(n.times,t):-1;return!!n&&o>=0&&n.values[n.vals[o]].s==="below_horizon"}shownEvents(t=!1){let e=this.playback,n=t?this.allEvents:this.events;return e?un(n,Math.max(e.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,t])=>t==="motion").map(([t])=>t)}updateNights(){let t=this.location;this.nights=t?_n(t.lat,t.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let t=this.timeline.start,e=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(t<=e+6e4)break;let n=this.recorderStart;if(n!==null&&t<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=t-E,this.notify();let o;try{o=await this.fetchWindow(t-E,t)}catch(a){console.warn("NeonPlan 3D: time travel could not load an older day",a);break}if(!o||this.disposed||!this.timeline)return;let s=je(o,this.timeline);this.setTimeline(s),Ke(s)>Do&&(this.full=!0);let i=this.playback;if(!i)continue;i.setRange(Math.max(s.start,this.start),this.end);let l=!1;this.wanted!==null&&this.wanted>=i.start&&(i.seek(this.wanted),this.wanted=null,l=!0),this.apply(!0,l)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(t){let e=this.playback;if(t===this.range||!e||!this.timeline)return;this.range=t;let n=e.t;e.setRange(Math.max(this.timeline.start,this.start),this.end,t==="7d"?Xt:vt),this.updateNights(),e.t!==n?this.apply(!0):this.notify(),t==="7d"&&this.loadOlder()}sunNights(){var o;let t=(o=this.timeline)==null?void 0:o.tracks.get("sun.sun");if(!t)return[];let e=[],n=null;for(let s=0;s<t.times.length;s++){let i=t.values[t.vals[s]].s==="below_horizon";i&&n===null&&(n=t.times[s]),!i&&n!==null&&(e.push([n,t.times[s]]),n=null)}return n!==null&&e.push([n,this.end]),e}apply(t,e=t){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,e&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,t);this.replay.pulses=this.replayer.pulses,(o!==this.hass||t)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(t){var s;this.live=t,Gt(Kt(t));let e=Date.now();(s=this.liveLog)==null||s.record(t.states,e);let n=this.playback,o=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&e-this.flushedAt>=Lo||this.derivePending&&e-this.eventsAt>Pn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(e),i&&n.seek(n.end),this.replay.t=n.t,o=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(t,n.t)),o&&this.notify()}setQuality(t,e){let n=this.maxDays;this.quality=t,this.low=e;let o=this.playback;if(n===this.maxDays||!o||!this.timeline)return;let s=this.end-this.maxDays*E,i=this.timeline.start<s-6e4;if(i)this.setTimeline(Ze(this.timeline,s)),this.full=!1,this.needFrom!==null&&this.needFrom<s&&(this.needFrom=null),this.wanted!==null&&this.wanted<s&&(this.wanted=null);else if(this.range!=="7d")return;let l=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),i||o.t!==l?this.apply(!0,o.t!==l):this.notify(),this.loadOlder()}play(){let t=this.playback;if(!t)return;let e=t.t>=t.end;t.play(),e&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){var t;(t=this.playback)==null||t.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){var t;(t=this.playback)!=null&&t.playing?this.pause():this.play()}seek(t,e=!1){this.playback&&(e&&this.pause(),this.wanted=null,this.playback.seek(t),this.last=performance.now(),this.apply(!0))}step(t){let e=this.playback;if(!e)return;let n=cn(this.shownEvents(),e.t,t);this.seek(n?n.t:t>0?e.end:e.start,!0)}goTo(t){this.seek(t.t,!0),this.focusOn(t.entity)}focusOn(t){this.replay.focus=t,this.replay.focusSeq++,this.notify()}yesterday(){let t=this.playback;if(!t)return;let e=t.t-E;e<t.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(e,t.start),!0),e<t.start&&this.olderRunning&&(this.wanted=e)}setFollow(t){this.follow=t,K("follow",t?"1":"0"),this.notify()}setStopImportant(t){this.stopImportant=t,K("stop",t?"1":"0"),this.notify()}nextSpeed(){var t;(t=this.playback)==null||t.nextSpeed(),this.notify()}awayOffer(){let t=this.timeline;return t?En($n(t,this.motion(),t.start,this.end)):null}away(t,e){let n=this.timeline;return n?Rn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(o=>o.startsWith("light.")),motion:this.motion(),from:t,to:e}):[]}ensureLoaded(t){let e=this.timeline;!e||e.start<=t+6e4||this.needFrom!==null&&this.needFrom<=t||t<this.end-this.maxDays*E-E||(this.needFrom=t,this.loadOlder())}daySummary(t){let e=this.timeline;if(!e||t+E<=e.start||t>e.end)return null;let n=`${t}|${this.version}`,o=this.daySummaries.get(n);if(!o){let s=ht(t),i=Math.max(t,e.start),l=Math.min(s,e.end),a=this.devices,c=this.energy&&a?On(u=>Tn(e,this.live.states,this.opts.building,a,this.energyIds,u),i,l):null;o=An(e,this.rooms,i,l,c),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let t=this.playback;!(t!=null&&t.playing)||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let e=performance.now(),n=Math.min(2e3,e-this.last);this.last=e;let o=t.t;if(t.end-t.t<=Ho+n*t.speed&&this.edge(),t.advance(n)){let s=this.stopImportant&&t.speed>=900?Zt(this.allEvents,o,t.t,i=>yt.has(i.kind)):null;if(s){t.seek(s.t),t.pause(),this.apply(!0),this.focusOn(s.entity);return}if(this.apply(!1),this.follow&&e-this.followAt>2500){let i=Zt(this.events,o,t.t,()=>!0);i&&(this.followAt=e,this.focusOn(i.entity))}}t.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},ln(this.quality,this.low)))}edge(t=Date.now()){var i;let e=this.playback,n=this.timeline;if(!e||!n||!this.liveLog||t-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:o,created:s}=this.liveLog.flush(n,t);this.flushedAt=t,this.end=t,e.setRange(Math.max(n.start,this.start),t),s&&((i=this.replayer)==null||i.refresh()),(o||s)&&(this.derivePending=!0),this.derivePending&&(!e.playing||t-this.eventsAt>Pn)&&this.derive(t)}derive(t){let e=this.timeline;if(!e)return;this.derivePending=!1,this.eventsAt=t,this.findEvents();let n=Math.max(e.start,this.gapsTo-30*6e4),o=this.gaps.filter(([l])=>l<n).map(([l,a])=>[l,Math.min(a,n)]),s=jt(e,void 0,void 0,void 0,n),i=o[o.length-1];i&&s.length&&i[1]>=n&&s[0][0]<=n&&(i[1]=s.shift()[1]),this.gaps=[...o,...s],this.gapsTo=e.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&K("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function Xs(r){return new me(r)}export{Do as MAX_BYTES,me as Session,Xs as startTimeTravel};
