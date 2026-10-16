var Dn={type:"none",pitch:35,overhang:.4},Xo={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Dn}};var On=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var Fn=new Set([...On,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function R(a,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[r,s]=e[n],[l,i]=e[o];s>a[1]!=i>a[1]&&a[0]<(l-r)*(a[1]-s)/(i-s)+r&&(t=!t)}return t}var Ln=Math.PI/180;var ra=Math.tan(30*Ln);var ha=Math.PI/180;var le=a=>a&&a!=="none"?a:null;function Re(a,e=t=>le(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of a.floors)for(let o of n.furniture){let r=e(o);if(o.type==="meter")t.grid??=r,t.gridExport??=le(o.export);else if(o.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(o.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let s=le(o.charge);s&&!t.charge.includes(s)&&t.charge.push(s),(r||s)&&t.batteries.push({power:r,charge:s});let l=le(o.soc);l&&!t.soc.includes(l)&&t.soc.push(l)}}return t}function T(a,e=!1){if(!a)return null;let t=Number(a.state);if(!Number.isFinite(t))return null;let n=String(a.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function gt(a,e,t,n=Re(e)){let o=e.energy,r=o.grid??n.grid,s=r?T(a.states[r],o.grid_invert):null;if(!o.grid&&n.gridExport){let f=Math.max(0,T(a.states[n.gridExport])??0);s=Math.max(0,s??0)-f}let l=o.solar?T(a.states[o.solar]):null;if(!o.solar&&n.solar.length){let f=n.solar.map(b=>T(a.states[b])).filter(b=>b!==null);l=f.length?f.reduce((b,w)=>b+w,0):null}let i=o.battery?T(a.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let f=n.batteries.map(b=>{if(b.charge){let w=b.power?Math.max(0,T(a.states[b.power])??0):0,k=Math.max(0,T(a.states[b.charge])??0);return w-k}return b.power?T(a.states[b.power],o.battery_invert):null}).filter(b=>b!==null);i=f.length?f.reduce((b,w)=>b+w,0):null}let u=(o.battery_soc?[o.battery_soc]:n.soc).map(f=>{var b;return Number((b=a.states[f])==null?void 0:b.state)}).filter(f=>Number.isFinite(f)),p=u.length?u.reduce((f,b)=>f+b,0)/u.length:NaN,d=o.tariff?a.states[o.tariff]:void 0,m=Number(d==null?void 0:d.state),h=o.consumption?T(a.states[o.consumption]):null;return h!==null?h=Math.max(0,h):s!==null||l!==null||i!==null?h=Math.max(0,(s??0)+Math.max(0,l??0)+(i??0)):t.length&&(h=t.reduce((f,b)=>f+b.power,0)),{grid:s,solar:l===null?null:Math.max(0,l),battery:i,soc:Number.isFinite(p)?p:null,tariff:d&&Number.isFinite(m)?{value:m,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:h}}var ce=globalThis,ue=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Te=Symbol(),bt=new WeakMap,Y=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ue&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=bt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&bt.set(t,e))}return e}toString(){return this.cssText}},vt=a=>new Y(typeof a=="string"?a:a+"",void 0,Te),$e=(a,...e)=>{let t=a.length===1?a[0]:e.reduce((n,o,r)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+a[r+1],a[0]);return new Y(t,a,Te)},yt=(a,e)=>{if(ue)a.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=ce.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,a.appendChild(n)}},Pe=ue?a=>a:a=>a instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return vt(t)})(a):a;var{is:Nn,defineProperty:Hn,getOwnPropertyDescriptor:In,getOwnPropertyNames:qn,getOwnPropertySymbols:Wn,getPrototypeOf:Un}=Object,de=globalThis,wt=de.trustedTypes,Bn=wt?wt.emptyScript:"",ze=de.reactiveElementPolyfillSupport,Q=(a,e)=>a,Ce={toAttribute(a,e){switch(e){case Boolean:a=a?Bn:null;break;case Object:case Array:a=a==null?a:JSON.stringify(a)}return a},fromAttribute(a,e){let t=a;switch(e){case Boolean:t=a!==null;break;case Number:t=a===null?null:Number(a);break;case Object:case Array:try{t=JSON.parse(a)}catch{t=null}}return t}},kt=(a,e)=>!Nn(a,e),xt={attribute:!0,type:String,converter:Ce,reflect:!1,useDefault:!1,hasChanged:kt};Symbol.metadata??=Symbol("metadata"),de.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=xt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&Hn(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:r}=In(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:o,set(s){let l=o==null?void 0:o.call(this);r==null||r.call(this,s),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??xt}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let e=Un(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let t=this.properties,n=[...qn(t),...Wn(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(Pe(o))}else e!==void 0&&t.push(Pe(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var r;let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let s=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Ce).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(e,t){var r,s;let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let l=n.getPropertyOptions(o),i=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:Ce;this._$Em=o;let c=i.fromAttribute(t,l.type);this[o]=c??((s=this._$Ej)==null?void 0:s.get(o))??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,r){var s;if(e!==void 0){let l=this.constructor;if(o===!1&&(r=this[e]),n??=l.getPropertyOptions(e),!((n.hasChanged??kt)(r,t)||n.useDefault&&n.reflect&&r===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:r},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),r!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,s]of this._$Ep)this[r]=s;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[r,s]of o){let{wrapped:l}=s,i=this[r];l!==!0||this._$AL.has(r)||i===void 0||this.C(r,void 0,s,i)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var r;return(r=o.hostUpdate)==null?void 0:r.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[Q("elementProperties")]=new Map,$[Q("finalized")]=new Map,ze==null||ze({ReactiveElement:$}),(de.reactiveElementVersions??=[]).push("2.1.2");var He=globalThis,Mt=a=>a,pe=He.trustedTypes,St=pe?pe.createPolicy("lit-html",{createHTML:a=>a}):void 0,Pt="$lit$",z=`lit$${Math.random().toFixed(9).slice(2)}$`,zt="?"+z,Kn=`<${zt}>`,O=document,X=()=>O.createComment(""),J=a=>a===null||typeof a!="object"&&typeof a!="function",Ie=Array.isArray,Gn=a=>Ie(a)||typeof(a==null?void 0:a[Symbol.iterator])=="function",je=`[ 	
\f\r]`,Z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,At=/-->/g,Et=/>/g,F=RegExp(`>|${je}(?:([^\\s"'>=/]+)(${je}*=${je}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Rt=/'/g,Tt=/"/g,Ct=/^(?:script|style|textarea|title)$/i,qe=a=>(e,...t)=>({_$litType$:a,strings:e,values:t}),y=qe(1),jt=qe(2),Ha=qe(3),V=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),$t=new WeakMap,D=O.createTreeWalker(O,129);function Ft(a,e){if(!Ie(a)||!a.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(e):e}var Yn=(a,e)=>{let t=a.length-1,n=[],o,r=e===2?"<svg>":e===3?"<math>":"",s=Z;for(let l=0;l<t;l++){let i=a[l],c,u,p=-1,d=0;for(;d<i.length&&(s.lastIndex=d,u=s.exec(i),u!==null);)d=s.lastIndex,s===Z?u[1]==="!--"?s=At:u[1]!==void 0?s=Et:u[2]!==void 0?(Ct.test(u[2])&&(o=RegExp("</"+u[2],"g")),s=F):u[3]!==void 0&&(s=F):s===F?u[0]===">"?(s=o??Z,p=-1):u[1]===void 0?p=-2:(p=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?F:u[3]==='"'?Tt:Rt):s===Tt||s===Rt?s=F:s===At||s===Et?s=Z:(s=F,o=void 0);let m=s===F&&a[l+1].startsWith("/>")?" ":"";r+=s===Z?i+Kn:p>=0?(n.push(c),i.slice(0,p)+Pt+i.slice(p)+z+m):i+z+(p===-2?l:m)}return[Ft(a,r+(a[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ee=class a{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let r=0,s=0,l=e.length-1,i=this.parts,[c,u]=Yn(e,t);if(this.el=a.createElement(c,n),D.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=D.nextNode())!==null&&i.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Pt)){let d=u[s++],m=o.getAttribute(p).split(z),h=/([.?@])?(.*)/.exec(d);i.push({type:1,index:r,name:h[2],strings:m,ctor:h[1]==="."?Oe:h[1]==="?"?Ve:h[1]==="@"?Le:q}),o.removeAttribute(p)}else p.startsWith(z)&&(i.push({type:6,index:r}),o.removeAttribute(p));if(Ct.test(o.tagName)){let p=o.textContent.split(z),d=p.length-1;if(d>0){o.textContent=pe?pe.emptyScript:"";for(let m=0;m<d;m++)o.append(p[m],X()),D.nextNode(),i.push({type:2,index:++r});o.append(p[d],X())}}}else if(o.nodeType===8)if(o.data===zt)i.push({type:2,index:r});else{let p=-1;for(;(p=o.data.indexOf(z,p+1))!==-1;)i.push({type:7,index:r}),p+=z.length-1}r++}}static createElement(e,t){let n=O.createElement("template");return n.innerHTML=e,n}};function I(a,e,t=a,n){var s,l;if(e===V)return e;let o=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl,r=J(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==r&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),r===void 0?o=void 0:(o=new r(a),o._$AT(a,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=I(a,o._$AS(a,e.values),o,n)),e}var De=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??O).importNode(t,!0);D.currentNode=o;let r=D.nextNode(),s=0,l=0,i=n[0];for(;i!==void 0;){if(s===i.index){let c;i.type===2?c=new te(r,r.nextSibling,this,e):i.type===1?c=new i.ctor(r,i.name,i.strings,this,e):i.type===6&&(c=new Ne(r,this,e)),this._$AV.push(c),i=n[++l]}s!==(i==null?void 0:i.index)&&(r=D.nextNode(),s++)}return D.currentNode=O,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},te=class a{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),J(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==V&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Gn(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&J(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var r;let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ee.createElement(Ft(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===o)this._$AH.p(t);else{let s=new De(o,this),l=s.u(this.options);s.p(t),this.T(l),this._$AH=s}}_$AC(e){let t=$t.get(e.strings);return t===void 0&&$t.set(e.strings,t=new ee(e)),t}k(e){Ie(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let r of e)o===t.length?t.push(n=new a(this.O(X()),this.O(X()),this,this.options)):n=t[o],n._$AI(r),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let o=Mt(e).nextSibling;Mt(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,r){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,o){let r=this.strings,s=!1;if(r===void 0)e=I(this,e,t,0),s=!J(e)||e!==this._$AH&&e!==V,s&&(this._$AH=e);else{let l=e,i,c;for(e=r[0],i=0;i<r.length-1;i++)c=I(this,l[n+i],t,i),c===V&&(c=this._$AH[i]),s||=!J(c)||c!==this._$AH[i],c===v?e=v:e!==v&&(e+=(c??"")+r[i+1]),this._$AH[i]=c}s&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Oe=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Ve=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Le=class extends q{constructor(e,t,n,o,r){super(e,t,n,o,r),this.type=5}_$AI(e,t=this){if((e=I(this,e,t,0)??v)===V)return;let n=this._$AH,o=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==v&&(n===v||o);o&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Ne=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}};var Fe=He.litHtmlPolyfillSupport;Fe==null||Fe(ee,te),(He.litHtmlVersions??=[]).push("3.3.3");var Dt=(a,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,o=n._$litPart$;if(o===void 0){let r=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new te(e.insertBefore(X(),r),r,void 0,t??{})}return o._$AI(a),o};var ne=globalThis,C=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Dt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return V}},Ot;C._$litElement$=!0,C.finalized=!0,(Ot=ne.litElementHydrateSupport)==null||Ot.call(ne,{LitElement:C});var We=ne.litElementPolyfillSupport;We==null||We({LitElement:C});(ne.litElementVersions??=[]).push("4.2.2");var Qn=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","no_grid"]),Zn=new Set(["power","plug","connectivity","running"]);function Vt(a){if(!a||a.state==="unavailable"||a.state==="unknown")return!1;let e=a.entity_id.split(".")[0];if(e==="binary_sensor")return Zn.has(String(a.attributes.device_class))?a.state==="off":a.state==="on";if(e==="input_boolean"||e==="switch")return a.state==="on";let t=Number(a.state);if(a.state!==""&&Number.isFinite(t))return a.attributes.unit_of_measurement==="V"&&t<100;let n=String(a.state).toLowerCase().trim();return Qn.has(n)||n.startsWith("ob ")}function L(a,e,t=9e5){let n=a.mean.length;if(!n||e<a.start)return NaN;let o=(e-a.start)/a.step-.5,r=Math.floor(o);if(r<0)return a.mean[0];if(r>=n-1){let u=Lt(a,n-1);return u>=0&&e-(a.start+(u+.5)*a.step)<=t?a.mean[u]:NaN}let s=a.mean[r],l=a.mean[r+1],i=o-r;if(!Number.isNaN(s)&&!Number.isNaN(l))return s+(l-s)*i;let c=Lt(a,r);return c>=0&&e-(a.start+(c+.5)*a.step)<=t?a.mean[c]:NaN}function Lt(a,e){for(let t=e;t>=0;t--)if(!Number.isNaN(a.mean[t]))return t;return-1}function Nt(a,e,t=0){if(typeof e=="number"&&e>=0&&e<=6)return 10**-e;switch(typeof a=="string"?a:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(t)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(t)>=100?1:Math.abs(t)>=10?.1:.01}}function Ht(a,e){if(!Number.isFinite(a))return"unknown";let t=e>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(e)))),o=(Math.round(a/e)*e).toFixed(t);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var Xn=a=>typeof a=="string"?{s:a,a:null}:{s:String(a[0]),a:a[1]&&typeof a[1]=="object"?a[1]:null},j=a=>`${a.s}\0${a.a?JSON.stringify(a.a):""}`;function qt(a){let e=[...a].sort((d,m)=>d.day_start-m.day_start),t=new Map,n=new Map,o=new Set,r=1/0,s=-1/0,l=null,i=!1,c=null;for(let d of e){r=Math.min(r,d.day_start*1e3),s=Math.max(s,d.end*1e3),d.oldest===null?i=!0:l=l===null?d.oldest*1e3:Math.min(l,d.oldest*1e3),c??=d.keep_days;for(let[m,h]of Object.entries(d.entities??{})){let f=t.get(m)??[],b=d.day_start*1e3,w=Math.min(h.t.length,h.v.length);for(let k=0;k<w;k++){let _=h.tab[h.v[k]];if(_===void 0)continue;let g=Xn(_),x=j(g),S=f[f.length-1],G=b+h.t[k]*1e3;S&&(G<S.t||S.k===x)||f.push({t:G,v:g,k:x})}t.set(m,f)}for(let[m,h]of Object.entries(d.stats??{})){let f=n.get(m)??[];f.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(m,f)}for(let m of d.missing??[])o.add(m)}let u=new Map;for(let[d,m]of t){if(!m.length)continue;let h=[],f=new Map,b=new Float64Array(m.length),w=new Uint32Array(m.length),k=new Float64Array(m.length);for(let _=0;_<m.length;_++){let g=f.get(m[_].k);g===void 0&&(g=h.length,h.push(m[_].v),f.set(m[_].k,g)),b[_]=m[_].t,w[_]=g,k[_]=_>0&&m[_-1].v.s===m[_].v.s?k[_-1]:m[_].t}u.set(d,{id:d,times:b,vals:w,values:h,since:k}),o.delete(d)}let p=new Map;for(let[d,m]of n){let h=m[0].step;if(!(h>0))continue;let f=Math.min(...m.map(_=>_.start)),b=Math.max(...m.map(_=>_.start+_.mean.length*_.step)),w=Math.max(0,Math.round((b-f)/h));if(!w)continue;let k=new Float32Array(w).fill(NaN);for(let _ of m)_.mean.forEach((g,x)=>{let S=Math.round((_.start+x*_.step-f)/h);typeof g=="number"&&Number.isFinite(g)&&S>=0&&S<w&&(k[S]=g)});k.every(_=>Number.isNaN(_))||(p.set(d,{id:d,start:f,step:h,mean:k}),o.delete(d))}return{start:Number.isFinite(r)?r:0,end:Number.isFinite(s)?s:0,oldest:i?null:l,keepDays:c,tracks:u,series:p,missing:o}}function A(a,e){let t=0,n=a.length-1;if(n<0||a[0]>e)return-1;for(;t<n;){let o=t+n+1>>1;a[o]<=e?t=o:n=o-1}return t}var W=class{tracks;idx;t=-1/0;constructor(e){this.tracks=[...e.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(e){let t=e>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,r=this.idx[n];if(!t)r=A(o,e);else{let s=0;for(;r+1<o.length&&o[r+1]<=e&&s<8;)r++,s++;r+1<o.length&&o[r+1]<=e&&(r=A(o,e))}this.idx[n]=r}return this.t=e,this.idx}value(e){let t=this.idx[e];return t<0?null:this.tracks[e].values[this.tracks[e].vals[t]]}},Jn=new Set(["unavailable","unknown"]);function Ue(a,e=5*6e4,t=.6,n=10*6e4,o=-1/0){let r=new W(a);if(!r.tracks.length)return[];let s=Math.max(a.oldest??a.start,o),l=[],i=null;for(let c=s;c<=a.end;c+=e){r.at(c);let u=0;for(let d=0;d<r.tracks.length;d++){let m=r.value(d);(!m||Jn.has(m.s))&&u++}let p=u/r.tracks.length>=t;p&&i===null&&(i=c),!p&&i!==null&&(c-i>=n&&l.push([i,c]),i=null)}return i!==null&&a.end-i>=n&&l.push([i,a.end]),l}function Wt(a){for(let e=0;e<a.times.length;e++)a.since[e]=e>0&&a.values[a.vals[e-1]].s===a.values[a.vals[e]].s?a.since[e-1]:a.times[e]}function eo(a,e){let t=[...a.values],n=new Map(t.map((c,u)=>[j(c),u])),o=e.values.map(c=>{let u=j(c),p=n.get(u);return p===void 0&&(p=t.length,t.push(c),n.set(u,p)),p}),r=e.times.length?e.times[0]:1/0,s=[],l=[];for(let c=0;c<a.times.length&&a.times[c]<r;c++)s.push(a.times[c]),l.push(a.vals[c]);for(let c=0;c<e.times.length;c++){let u=o[e.vals[c]];l.length&&l[l.length-1]===u||(s.push(e.times[c]),l.push(u))}let i={id:a.id,times:Float64Array.from(s),vals:Uint32Array.from(l),values:t,since:new Float64Array(s.length)};return(a.dropped||e.dropped)&&(i.dropped=Float64Array.from([...a.dropped??[],...e.dropped??[]]).sort()),Wt(i),i}function to(a,e){let t=a.step,n=Math.min(a.start,e.start),o=Math.max(a.start+a.mean.length*a.step,e.start+e.mean.length*e.step),r=Math.max(0,Math.round((o-n)/t)),s=new Float32Array(r).fill(NaN);for(let l of[a,e])for(let i=0;i<l.mean.length;i++){let c=Math.round((l.start+i*l.step-n)/t);!Number.isNaN(l.mean[i])&&c>=0&&c<r&&(s[c]=l.mean[i])}return{id:a.id,start:n,step:t,mean:s}}function Ut(a,e){let[t,n]=a.start<=e.start?[a,e]:[e,a],o=new Map;for(let i of new Set([...t.tracks.keys(),...n.tracks.keys()])){let c=t.tracks.get(i),u=n.tracks.get(i);o.set(i,c&&u?eo(c,u):c??u)}let r=new Map;for(let i of new Set([...t.series.keys(),...n.series.keys()])){let c=t.series.get(i),u=n.series.get(i);r.set(i,c&&u?to(c,u):c??u)}let s=new Set([...t.missing,...n.missing].filter(i=>!o.has(i)&&!r.has(i))),l=t.oldest===null?null:t.oldest<t.end?t.oldest:n.oldest??n.start;return{start:t.start,end:Math.max(t.end,n.end),oldest:l,keepDays:n.keepDays??t.keepDays,tracks:o,series:r,missing:s}}function Bt(a){let e=0;for(let t of a.tracks.values())e+=t.times.length;return e}function Kt(a){let e=0;for(let t of a.tracks.values())e+=t.times.length*20+t.values.length*120;for(let t of a.series.values())e+=t.mean.length*4;return e}var Gt=3e5;function Yt(a,e,t=6e4,n=5*6e4){let o=0;for(let r of e){let s=a.tracks.get(r);if(!s||s.times.length<3)continue;let l=s.times.length,i=h=>s.values[s.vals[h]].s,c=[],u=[],p=null;for(let h=0;h<l;h++){let f=c.length?c[c.length-1]:-1;if(f>=0&&p!==null&&i(f)==="off"&&i(h)==="on"&&h+1<l&&i(h+1)==="off"&&s.times[h+1]-s.times[h]<t&&s.times[h]-p<=n){u.push(s.times[h]),h++,o+=2;continue}if(f>=0&&s.vals[f]===s.vals[h]){o++;continue}f>=0&&i(f)==="on"&&i(h)!=="on"&&(p=s.times[h]),c.push(h)}if(c.length===l)continue;let d=Float64Array.from(c,h=>s.times[h]),m=Uint32Array.from(c,h=>s.vals[h]);s.times=d,s.vals=m,s.since=new Float64Array(c.length),u.length&&(s.dropped=Float64Array.from([...s.dropped??[],...u]).sort()),Wt(s)}return o}var It=new WeakMap;function no(a){let e=It.get(a);return(!e||e.size!==a.values.length)&&(e=new Map(a.values.map((t,n)=>[j(t),n])),It.set(a,e)),e}function Be(a,e){let t=no(a),n=a.times.length,o=n?a.times[n-1]:-1/0,r=n?a.vals[n-1]:-1,s=[],l=[];for(let d of e){if(d.t<o)continue;let m=j(d.v),h=t.get(m);h!==r&&(h===void 0&&(h=a.values.length,a.values.push(d.v),t.set(m,h)),s.push(d.t),l.push(h),o=d.t,r=h)}if(!s.length)return 0;let i=n+s.length,c=new Float64Array(i);c.set(a.times),c.set(s,n);let u=new Uint32Array(i);u.set(a.vals),u.set(l,n);let p=new Float64Array(i);p.set(a.since);for(let d=n;d<i;d++)p[d]=d>0&&a.values[u[d-1]].s===a.values[u[d]].s?p[d-1]:c[d];return a.times=c,a.vals=u,a.since=p,s.length}function Qt(a,e){let t=-1;for(let o of e)Number.isFinite(o.value)&&o.t>=a.start&&(t=Math.max(t,Math.floor((o.t-a.start)/a.step)));if(t<0)return 0;if(t>=a.mean.length){let o=new Float32Array(t+1).fill(NaN);o.set(a.mean),a.mean=o}let n=0;for(let o of e){if(!Number.isFinite(o.value)||o.t<a.start)continue;let r=Math.floor((o.t-a.start)/a.step);Number.isNaN(a.mean[r])&&(a.mean[r]=o.value,n++)}return n}function Zt(a,e){let t={id:a,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return Be(t,e)?t:null}function Xt(a,e){if(e<=a.start)return a;let t=new Map;for(let[r,s]of a.tracks){let l=Math.max(0,A(s.times,e));if(l===0){t.set(r,s);continue}let i={id:r,times:s.times.slice(l),vals:s.vals.slice(l),values:s.values,since:s.since.slice(l)};s.dropped&&(i.dropped=s.dropped.filter(c=>c>=e)),t.set(r,i)}let n=new Map;for(let[r,s]of a.series){let l=Math.max(0,Math.floor((e-s.start)/s.step));n.set(r,l?{id:r,start:s.start+l*s.step,step:s.step,mean:s.mean.slice(l)}:s)}let o=a.oldest!==null&&a.oldest>e?a.oldest:null;return{...a,start:e,oldest:o,tracks:t,series:n}}function Jt(a,e,t,n){let o={};for(let s of e){let l=a.series.get(s),i=a.tracks.get(s);if(!l&&!i)continue;let c=[];for(let u=Math.floor(t/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(l){let d=Math.floor((u+15e4-l.start)/l.step);p=d>=0&&d<l.mean.length?l.mean[d]:NaN}else if(i){let d=A(i.times,u+15e4);p=d<0?NaN:Number(i.values[i.vals[d]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(o[s]=c)}return o}var N=null;function Ke(a){var n,o;let e=(n=a==null?void 0:a.locale)==null?void 0:n.time_zone,t=(o=a==null?void 0:a.config)==null?void 0:o.time_zone;if(e!=="server"||!t)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{return null}}function Ge(a){N=a}var en=new Map;function oo(a){let e=en.get(a);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:a,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),en.set(a,e)),e}function he(a,e){let t=[0,0,0,0,0,0];for(let n of oo(e).formatToParts(a)){let o=Number(n.value);n.type==="year"?t[0]=o:n.type==="month"?t[1]=o-1:n.type==="day"?t[2]=o:n.type==="hour"?t[3]=o%24:n.type==="minute"?t[4]=o:n.type==="second"&&(t[5]=o)}return t}function me(a,e){let[t,n,o,r,s,l]=he(a,e),i=a-(a%1e3+1e3)%1e3;return Date.UTC(t,n,o,r,s,l)-i}function U(a,e=N){return e?he(a,e)[3]:new Date(a).getHours()}function P(a,e=N){if(!e)return new Date(a).setHours(0,0,0,0);let[t,n,o]=he(a,e),r=Date.UTC(t,n,o)-me(a,e);return r=Date.UTC(t,n,o)-me(r,e),r}function fe(a,e=N){return P(P(a,e)+27*36e5,e)}function _e(a,e=N){if(!e)return new Date(a).setMinutes(0,0,0);let[,,,,t,n]=he(a,e);return a-(a%1e3+1e3)%1e3-(t*60+n)*1e3}function Ye(a,e,t,n=N){if(!n){let s=new Date(a);return s.setHours(e,t,0,0),s.getTime()}let o=P(a,n),r=o+(e*60+t)*6e4;return r-(me(r,n)-me(o,n))}function oe(a=N){return a?{timeZone:a}:{}}var ge={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},nn=new Set(["window","battery_full","pv_peak"]),be=new Set(["alarm","smoke","gas","co","water","outage"]),Qe={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},ao=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),H=new Set(["on","open","opening","tilted"]);function ro(a){let e=U(a);return e>=23||e<5}function*ae(a){let e=null;for(let t=0;t<a.times.length;t++){let n=a.values[a.vals[t]].s;n!==e&&(yield{t:a.times[t],from:e,to:n}),e=n}}function B(a,e,t){let n=[],o=null;for(let r of ae(a)){let s=e.has(r.to);s&&o===null&&(o=r.t),!s&&o!==null&&(n.push([o,r.t]),o=null)}return o!==null&&n.push([o,t]),n}function so(a,e){let t=a.tracks.get(e);if(t){let r=[];for(let s=0;s<t.times.length;s++){let l=Number(t.values[t.vals[s]].s);Number.isFinite(l)&&r.push({t:t.times[s],w:l})}return r}let n=a.series.get(e);if(!n)return[];let o=[];for(let r=0;r<n.mean.length;r++){let s=n.start+(r+.5)*n.step,l=L(n,s);Number.isFinite(l)&&o.push({t:s,w:l})}return o}function io(a,e=10,t=5,n=20*6e4){let o=[],r=null;for(let s of a)r===null&&s.w>e?r=s.t:r!==null&&s.w<t&&(s.t-r>=n&&o.push(s.t),r=null);return o}function tn(a,e,t,n,o=3e5){let r=Math.max(0,Math.ceil((n-t)/o)),s=new Float64Array(r).fill(NaN),l=a.series.get(e),i=a.tracks.get(e);for(let c=0;c<r;c++){let u=t+(c+.5)*o;if(l)s[c]=L(l,u);else if(i){let p=A(i.times,u);s[c]=p<0?NaN:Number(i.values[i.vals[p]].s)}}return s}function lo(a,e){var r;let t=[],o=Math.floor(a.start/3e5)*3e5;for(let s of e.soc){let l=tn(a,s,o,a.end),i=!1;l.forEach((c,u)=>{Number.isNaN(c)||(c<95?i=!0:c>=99&&i&&(i=!1,t.push({t:o+(u+.5)*3e5,kind:"battery_full",entity:s})))})}if(e.solar.length){let s=e.solar.map(p=>tn(a,p,o,a.end)),l=s[0].length,i=-1,c={t:0,w:0},u=()=>{c.w>100&&t.push({t:c.t,kind:"pv_peak",entity:e.solar[0]}),c={t:0,w:0}};for(let p=0;p<l;p++){let d=o+(p+.5)*3e5,m=P(d);m!==i&&(i>=0&&u(),i=m);let h=0;for(let f of s)Number.isNaN(f[p])||(h+=Math.max(0,f[p]));h>c.w&&(c={t:d,w:h})}i>=0&&(a.end>=fe(i)||(r=e.sunDown)!=null&&r.call(e,a.end))&&u()}return t}function on({timeline:a,roles:e,weather:t,night:n=ro,energy:o=null,outage:r=null}){let s=[],l=(d,m,h)=>{d>=a.start&&d<=a.end&&s.push({t:d,kind:m,entity:h})},i=t?a.tracks.get(t):void 0,c=i?B(i,ao,a.end):[];for(let[d,m]of e){if(m==="washer"){for(let f of io(so(a,d)))l(f,"washer",d);continue}let h=a.tracks.get(d);if(h){if(m==="window"||m==="window_more"){for(let[f,b]of B(h,H,a.end)){m==="window"&&f>a.start&&f>h.times[0]&&l(f,"window",d);for(let[w,k]of c)f<k&&w<b&&l(Math.max(f,w),"rain",d)}continue}for(let f of ae(h))if(f.from!==null)switch(m){case"door":H.has(f.to)&&!H.has(f.from)&&l(f.t,"door",d);break;case"garage":(f.to==="on"||f.to==="open"||f.to==="opening")&&(f.from==="off"||f.from==="closed"||f.from==="closing")&&l(f.t,"garage",d);break;case"lock":(f.to==="unlocked"||f.to==="open")&&(f.from==="locked"||f.from==="locking")&&l(f.t,"lock",d);break;case"alarm":f.to==="triggered"&&l(f.t,"alarm",d);break;case"smoke":case"gas":case"co":case"water":f.to==="on"&&f.from!=="on"&&l(f.t,m,d);break;case"motion":f.to==="on"&&f.from==="off"&&n(f.t)&&l(f.t,"motion",d);break;case"camera":f.to==="on"&&f.from!=="on"&&l(f.t,"camera",d);break;case"robot":f.to==="cleaning"&&f.from!=="cleaning"&&f.from!=="paused"?l(f.t,"robot_start",d):f.to==="docked"&&(f.from==="cleaning"||f.from==="returning"||f.from==="paused")&&l(f.t,"robot_done",d);break}}}if(o)for(let d of lo(a,o))l(d.t,d.kind,d.entity);let u=r?a.tracks.get(r.id):void 0;if(r&&u){let d=m=>Vt({entity_id:r.id,state:m,attributes:r.attributes});for(let m of ae(u))m.from!==null&&d(m.to)&&!d(m.from)&&l(m.t,"outage",r.id)}s.sort((d,m)=>d.t-m.t||ge[m.kind]-ge[d.kind]);let p=new Map;return s.filter(d=>{let m=`${d.kind}:${d.entity}`,h=p.get(m),f=d.kind==="motion"?30*6e4:5*6e4;return h!==void 0&&d.t-h<f?!1:(p.set(m,d.t),!0)})}function an(a,e){let t=[];for(let n=a.length-1;n>=0;n--){let o=a[n];if(!e.has(Qe[o.kind]))continue;let r=_e(o.t),s=t[t.length-1];s&&s.hour===r?s.events.unshift(o):t.push({hour:r,events:[o]})}return t}function rn(a,e,t=14){let n=[];for(let o of a){let r=e(o.t),s=n[n.length-1];s&&r-s.x<t?(s.events.push(o),ge[o.kind]>ge[s.top.kind]&&(s.top=o,s.t=o.t)):n.push({x:r,t:o.t,top:o,events:[o]})}return n}var ye=[60,360,900,3600],Ze=[60,360,900,3600,14400],sn=360;function ln(a,e){return a==="low"||e?500:a==="high"?167:250}var ve=class{start;end;t;playing=!1;speed;speeds;constructor(e,t,n,o=sn,r=ye){this.start=e,this.end=t,this.speeds=r,this.t=Math.min(t,Math.max(e,n)),this.speed=r.includes(o)?o:sn}setRange(e,t,n=this.speeds){this.start=e,this.end=t,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(t,Math.max(e,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(e){this.t=Math.min(this.end,Math.max(this.start,e))}advance(e){if(!this.playing||!(e>0))return!1;let t=Math.min(this.end,this.t+e*this.speed),n=t!==this.t;return this.t=t,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let e=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(e+1)%this.speeds.length],this.speed}};function cn(a,e,t,n=3e4){if(t>0)return a.find(o=>o.t>e+n)??null;for(let o=a.length-1;o>=0;o--)if(a[o].t<e-n)return a[o];return null}function un(a,e,t){let n=0,o=a.length;for(;n<o;){let s=n+o>>1;a[s].t<e?n=s+1:o=s}let r=n;for(;r<a.length&&a[r].t<=t;)r++;return n===0&&r===a.length?a:a.slice(n,r)}function Xe(a,e,t,n){if(!(t>e))return null;let o=0,r=a.length;for(;o<r;){let s=o+r>>1;a[s].t<=e?o=s+1:r=s}for(let s=o;s<a.length&&a[s].t<=t;s++)if(n(a[s]))return a[s];return null}function we(a,e){let t=(a??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(t);if(n)return e-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(t);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let r=Ye(e,Number(o[1]),Number(o[2]));return r>e?Ye(r-864e5,Number(o[1]),Number(o[2])):r}var re={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},xe=a=>jt`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${a} /></svg>`,dn={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},co={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},Je=class extends C{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=e=>{let t=this.session,n=e.composedPath()[0];if(!(!(t!=null&&t.playback)||e.ctrlKey||e.metaKey||e.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n!=null&&n.isContentEditable))if(e.key===" "){if((n==null?void 0:n.tagName)==="BUTTON")return;e.preventDefault(),t.toggle()}else(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),t.seek(t.playback.t+(e.key==="ArrowLeft"?-1:1)*(e.shiftKey?36e5:3e5)))};onEscape=e=>{e.key!=="Escape"||!this._sheet||(e.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){var e,t;super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),(e=this.unlisten)==null||e.call(this),this.unlisten=null,this.listened=null,(t=this.resize)==null||t.disconnect(),this.resize=null;for(let n of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(n)}updated(){var t;this.session!==this.listened&&((t=this.unlisten)==null||t.call(this),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let e=this.renderRoot.querySelector(".track");e&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(n=>{var r;let o=Math.round(((r=n[0])==null?void 0:r.contentRect.width)??0);o!==this._w&&(this._w=o)}),this.resize.observe(e)),this.onTick()}signature(){let e=this.session,t=e==null?void 0:e.playback,n=this._sheet==="day"&&t?P(t.t):0;return`${e==null?void 0:e.state}|${e==null?void 0:e.error}|${Math.round(((e==null?void 0:e.progress)??0)*20)}|${t==null?void 0:t.playing}|${t==null?void 0:t.speed}|${e==null?void 0:e.events.length}|${e==null?void 0:e.allEvents.length}|${e==null?void 0:e.range}|${e==null?void 0:e.maxDays}|${e==null?void 0:e.loadingDay}|${e==null?void 0:e.full}|${e==null?void 0:e.version}|${e==null?void 0:e.atNow}|${e==null?void 0:e.follow}|${e==null?void 0:e.stopImportant}|${n}`}onTick(){let e=this.signature();e!==this.sig&&(this.sig=e,this.requestUpdate());let t=this.session,n=t==null?void 0:t.playback;if(!t||!n)return;let o=this.renderRoot.querySelector(".clock-time"),r=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),r&&(r.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(e){let t=this.renderRoot.querySelector(".head");t&&(t.style.transform=`translateX(${e.toFixed(1)}px)`)}get language(){var e;return((e=this.session)==null?void 0:e.opts.live.language)??navigator.language}xOf(e){let t=this.session;return!t||!this._w?0:(e-t.start)/(t.end-t.start)*this._w}tOf(e){let t=this.session;return t.start+Math.min(this._w,Math.max(0,e))/Math.max(1,this._w)*(t.end-t.start)}weekday(e){return new Date(e).toLocaleDateString(this.language,{weekday:"short",...oe()}).replace(/\.$/,"")}clockText(e){return`${this.weekday(e)} ${this.time(e)}`}agoText(e){let t=this.session,n=Math.round((t.end-e)/6e4);return n<1?t.t("tt_now"):t.t("tt_ago",{d:this.duration(n*6e4)})}duration(e){let t=this.session,n=Math.round(e/6e4),o=Math.floor(n/1440),r=Math.floor(n%1440/60),s=n%60;return o?`${t.t("tt_days",{n:o})}${r?` ${r} h`:""}`:r?`${r} h${s?` ${s} min`:""}`:`${s} min`}name(e){var n;let t=this.session;return t.names.get(e)??((n=t.opts.live.states[e])==null?void 0:n.attributes.friendly_name)??e}eventText(e){return this.session.t(`tt_ev_${e.kind}`,{name:this.name(e.entity)})}time(e){return new Date(e).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...oe()})}onDown(e){var n,o;let t=this.session;!(t!=null&&t.playback)||e.target.closest(".mark")||((o=(n=e.currentTarget).setPointerCapture)==null||o.call(n,e.pointerId),this.dragging=!0,this._label=null,t.pause(),this.scrub(e,!0))}onMove(e){this.dragging&&this.scrub(e,!1)}onUp(e){this.dragging&&(this.scrub(e,!0),this.dragging=!1)}scrub(e,t){var u;let n=this.session,o=this.renderRoot.querySelector(".track"),r=e.clientX-o.getBoundingClientRect().left,s=Math.max(((u=n.playback)==null?void 0:u.start)??n.start,this.tOf(r));this.placeHead(this.xOf(s));let l=this.renderRoot.querySelector(".clock-time");l&&(l.textContent=this.clockText(s)),clearTimeout(this.scrubTimer);let i=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();t||c-this.scrubAt>=i?(this.scrubAt=c,n.seek(s)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(s)},i)}markDown(e){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(e)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(e){var t;if(this.held){this.held=!1;return}(t=this.session)==null||t.seek(e.t,!0),this.showLabel(e,2500)}showLabel(e,t=4500){this._label={x:e.x,lines:e.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(e.events.length>4?[`+${e.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,t)}renderTrack(){var f,b,w,k;let e=this.session,t=this._w;if(!t)return v;let n=e.range==="7d",o=_=>`${((_-e.start)/(e.end-e.start)*100).toFixed(3)}%`,r=(_,g,x,S)=>g>_?y`<i class=${x} style="left:${o(Math.max(_,e.start))};width:calc(${o(Math.min(g,e.end))} - ${o(Math.max(_,e.start))})">${S?y`<span>${S}</span>`:v}</i>`:v,s=((f=e.timeline)==null?void 0:f.oldest)??null,l=((b=e.playback)==null?void 0:b.start)??e.start,i=e.recorderStart,c=v;l>e.start+6e4&&(e.loadingDay!==null?c=r(e.start,l,"loading",e.t("tt_loading_day",{day:this.weekday(e.loadingDay+12*36e5)})):i!==null&&i>e.start?c=r(e.start,l,"nodata",e.t("tt_recorder_days",{n:((w=e.timeline)==null?void 0:w.keepDays)??0})):c=r(e.start,l,"nodata",e.full?e.t("tt_memory_full"):""));let u=n?t/(e.end-e.start)*36e5*3>=12?3:6:1,p=t>=640?3:6,d=[],m=_e(e.start);for(m<e.start&&(m+=36e5);m<=e.end;m+=36e5){let _=U(m);if(_%u)continue;let g=_===0,x=g?n?`${this.weekday(m)} ${new Date(m).toLocaleDateString(this.language,{day:"numeric",...oe()}).replace(/\.$/,"")}.`:this.weekday(m):!n&&_%p===0?this.time(m):"";d.push(y`<b class="tick ${g?"tick-day":x?"tick-major":""}" style="left:${o(m)}">${x?y`<span>${x}</span>`:v}</b>`)}let h=`${t}|${e.events.length}|${e.start}|${e.end}|${e.version}|${l}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=rn(e.shownEvents(),_=>this.xOf(_),t<500?18:14)),y`${e.nights.map(([_,g])=>r(_,g,"night"))} ${c} ${s!==null&&s>l?r(l,s,"nodata"):v}
      ${e.gaps.map(([_,g])=>r(_,g,"gap"))} ${d}
      ${this.clusters.map(_=>y`<button
          class="mark ${_.events.length>1?"mark-many":""}"
          style="left:${_.x.toFixed(1)}px;--c:${dn[_.top.kind]}"
          title=${_.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(_.t)} ${this.eventText(_.top)}`}
          @pointerdown=${()=>this.markDown(_)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(_)}
        >
          ${_.events.length>1?y`<span>${_.events.length}</span>`:v}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(((k=e.playback)==null?void 0:k.t)??e.end).toFixed(1)}px)"></div>
      ${this._label?y`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(_=>y`<span>${_}</span>`)}</div>`:v}`}toggleSheet(e="events"){this._sheet=this._sheet===e||this._sheet&&e==="events"?null:e}toggleFilter(e){let t=new Set(this._filters);t.has(e)?t.delete(e):t.add(e),this._filters=t}where(e){var t;return((t=this.session.roomOf.get(e))==null?void 0:t.name)??""}renderEvents(){let e=this.session,t=e.t,n=["safety","openings","devices",...e.energy?["energy"]:[]],o=an(e.shownEvents(!0).filter(s=>e.energy||Qe[s.kind]!=="energy"),this._filters),r=0;return y`<div class="filters">
        ${n.map(s=>y`<button class="fchip" aria-pressed=${this._filters.has(s)} @click=${()=>this.toggleFilter(s)}>${t(`tt_f_${s}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${e.follow} @change=${s=>e.setFollow(s.target.checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${e.stopImportant} @change=${s=>e.setStopImportant(s.target.checked)} />${t("tt_stop")}</label>
      ${o.length?o.map(s=>r>=300?v:(r+=s.events.length,y`<h4>${this.clockText(s.hour)}</h4>
              ${s.events.map(l=>this.row(dn[l.kind],this.time(l.t),this.eventText(l),this.where(l.entity),()=>e.goTo(l)))}`)):y`<p class="none">${t("tt_no_events")}</p>`}`}row(e,t,n,o,r){return y`<button class="row" @click=${r}>
      <i style="background:${e}"></i><time>${t}</time><span>${n}${o?y`<small>${o}</small>`:v}</span>
    </button>`}awayText(e){let t=this.session.t,n=this.name(e.entity);switch(e.kind){case"alarm":case"appliance":return this.eventText({kind:e.event??"alarm",entity:e.entity});case"door":case"window":return t("tt_away_door",{name:n,n:e.count});case"motion":return t("tt_away_motion",{name:n,n:e.count});case"light_on":return t("tt_away_light",{name:n,d:this.duration(e.ms)});case"window_open":return t("tt_away_open",{name:n,d:this.duration(e.ms)})}}renderAway(){var d,m;let e=this.session,t=e.t,n=e.playback;((d=this.awayOffer)==null?void 0:d.version)!==e.version&&(this.awayOffer={version:e.version,offer:e.awayOffer()});let o=this.awayOffer.offer,[r,s]=this._awayFrom??o??[e.lastClosed!==null&&e.lastClosed>=n.start?e.lastClosed:Math.max(n.start,e.end-3*36e5),e.end],l=`${e.version}|${r}|${s}`;((m=this.awayCache)==null?void 0:m.key)!==l&&(this.awayCache={key:l,rows:e.away(r,s)});let i=this.awayCache.rows,c=h=>this._awayFrom=h,u=(h,f)=>`${this.clockText(h)} \u2013 ${f>=e.end-6e4?t("tt_now"):this.clockText(f)}`,p=h=>{let f=we(h.target.value,e.end);f!==null&&c([Math.max(n.start,f),e.end])};return y`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${e.lastClosed!==null&&e.lastClosed>=n.start?y`<button class="fchip" aria-pressed=${r===e.lastClosed} @click=${()=>c([e.lastClosed,e.end])}>${t("tt_away_last")}</button>`:v}
        ${o?y`<button class="fchip" aria-pressed=${r===o[0]&&s===o[1]} @click=${()=>c(o)}>${t("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:v}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(r,s)}</h4>
      ${i.length?i.slice(0,200).map(h=>this.row(co[h.kind],this.time(h.t),this.awayText(h),this.where(h.entity),()=>e.goTo(h))):y`<p class="none">${t("tt_away_none")}</p>`}`}renderDay(){let e=this.session,t=e.t,n=e.playback,o=P(n.t),r=e.daySummary(o),s=P(o-12*36e5),l=this._compare?e.daySummary(s):null;this._compare&&(!l||l.from>s+6e4)&&queueMicrotask(()=>e.ensureLoaded(s));let i=(g,x)=>g&&g.from>x+6e4?t("tt_day_partial",{time:this.time(g.from)}):"",c=(g,x=1)=>g.toLocaleString(this.language,{maximumFractionDigits:x,minimumFractionDigits:x}),u=g=>g>=6e4?`${c(g/36e5)} h`:"\u2013",p=g=>g&&g.tMin!==null&&g.tMax!==null?`${c(g.tMin)}\u2013${c(g.tMax)}\xB0`:"\u2013",d=g=>y`<td>${g?u(g.lightMs):"\u2013"}</td><td>${g?u(g.windowMs):"\u2013"}</td><td>${g?u(g.heatMs):"\u2013"}</td><td>${p(g)}</td>`,m=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...oe()}),h=g=>(g==null?void 0:g.energy)??null,f=h(r),b=h(l),w=g=>g===void 0?"\u2013":`${c(g)} kWh`,k=g=>g==null?"\u2013":`${Math.round(g*100)} %`,_=this._compare?l?i(l,s):e.loadingDay!==null?t("tt_loading"):"":"";return y`<h4>${t("tt_day_title",{day:m})}</h4>
      ${i(r,o)?y`<p class="since">${i(r,o)}</p>`:v}
      ${_?y`<p class="since">${t("tt_day_before")}: ${_}</p>`:v}
      <div class="filters">
        <button class="fchip" @click=${()=>e.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${t("tt_day_compare")}</button>
      </div>
      ${r&&(r.rooms.length||f)?y`${r.rooms.length?y`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${r.rooms.map(g=>y`<tr><th>${g.name}</th>${d(g)}</tr>
                        ${l?y`<tr class="before"><th>${t("tt_day_before")}</th>${d(l.rooms.find(x=>x.roomId===g.roomId))}</tr>`:v}`)}
                  </tbody>
                </table>`:v}
            ${f?y`<div class="energy">
                  ${[["tt_day_pv",w(f.pv),w(b==null?void 0:b.pv)],["tt_day_use",w(f.use),w(b==null?void 0:b.use)],["tt_day_import",w(f.imp),w(b==null?void 0:b.imp)],["tt_day_export",w(f.exp),w(b==null?void 0:b.exp)],["tt_day_self",k(f.self),k(b==null?void 0:b.self)]].map(([g,x,S])=>y`<span>${t(g)}</span><b>${x}</b>${l?y`<em>${S}</em>`:v}`)}
                </div>`:v}`:y`<p class="none">${t("tt_day_none")}</p>`}`}renderSheet(){let t=this.session.t,n=this._sheet,o=["events","away","day"];return y`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${o.map(r=>y`<button class="tab" aria-pressed=${n===r} title=${r==="away"?t("tt_away_title"):v} @click=${()=>this._sheet=r}>${t(r==="events"?"tt_tab_events":r==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let e=this.session;if(!e)return v;let t=e.t,n=e.playback,o=e.state==="ready"&&!!n,r=e.state==="error"?e.error==="not_unlocked"?t("tt_locked"):e.error==="no_recorder"?t("tt_no_recorder"):e.error==="unknown_command"?t("tt_restart"):t("tt_error",{error:e.error??"?"}):null,s=n?3600/n.speed:10,l=Math.round((e.end-e.start)/6e4);return y`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")} <span class="beta" title=${t("beta_bar")}>🧪 BETA</span></span>
        ${o?y`<b class="clock-time"></b><span class="clock-ago"></span>`:y`<span class="clock-msg">${r??`${t("tt_loading")} ${Math.round(e.progress*100)} %`}</span>`}
      </div>
      ${this._toast?y`<div class="toast" role="alert">${t("tt_readonly")}</div>`:v}
      ${o&&this._sheet?this.renderSheet():v}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${()=>e.step(-1)}>${xe(re.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${t(n!=null&&n.playing?"tt_pause":"tt_play")} aria-label=${t(n!=null&&n.playing?"tt_pause":"tt_play")} @click=${()=>e.toggle()}>
          ${xe(n!=null&&n.playing?re.pause:re.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${()=>e.step(1)}>${xe(re.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${l}
          aria-valuenow=${n?Math.round((n.t-e.start)/6e4):l}
          @pointerdown=${i=>this.onDown(i)}
          @pointermove=${i=>this.onMove(i)}
          @pointerup=${i=>this.onUp(i)}
          @pointercancel=${i=>this.onUp(i)}
        >
          ${o?this.renderTrack():r?y`<em class="msg">${r}</em>`:y`<i class="progress" style="width:${Math.round(e.progress*100)}%"></i>`}
        </div>
        ${r&&e.error!=="not_unlocked"?y`<button class="chip" @click=${()=>{e.load()}}>${t("tt_retry")}</button>`:v}
        <button class="chip range" ?disabled=${!o} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${()=>e.setRange(e.range==="7d"?"24h":"7d")}>
          ${e.range==="7d"?t("tt_days",{n:e.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${()=>this.toggleSheet()}>${xe(re.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${t("tt_speed",{s:s>=60?"1 min":s>=1?`${Math.round(s)} s`:`${s.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>e.nextSpeed()}>
          ${(n==null?void 0:n.speed)??360}×
        </button>
        <button class="chip live ${e.atNow?"live-now":""}" title=${t("tt_live_hint")} @click=${()=>e.exit()}>
          <i></i>${e.atNow?`${t("tt_now_reached")} \xB7 ${t("tt_live")}`:t("tt_live")}
        </button>
      </div>`}static styles=$e`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",Je);function et(a,e){var n,o;let t=(o=(n=a.entities)==null?void 0:n[e])==null?void 0:o.device_id;return t?Object.values(a.entities??{}).filter(r=>r.device_id===t&&r.entity_id.startsWith("binary_sensor.")).map(r=>r.entity_id).filter(r=>{var s;return["motion","occupancy","presence"].includes(String((s=a.states[r])==null?void 0:s.attributes.device_class))}):[]}var uo=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),po=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),mo=600,tt=a=>a.slice(0,a.indexOf("."));function ho(a,e){let t=a.states[e];return!e.startsWith("sensor.")||!t||t.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(t.state))||t.state==="unavailable"||t.state==="unknown"}var pn=new Set(["geocoded_location","location"]),fo=/location|address|geocoded|ssid|bssid|standort|adresse/i;function _o(a,e){var o,r,s;let t=((o=a.states[e])==null?void 0:o.attributes)??{},n=((s=(r=a.entities)==null?void 0:r[e])==null?void 0:s.translation_key)??"";return pn.has(String(t.device_class??""))||pn.has(n)||"latitude"in t||"longitude"in t?!0:fo.test(`${e} ${String(t.friendly_name??"")} ${n}`)}function fn(a){let e=new Set;for(let t of Object.values(a.states))if(t.entity_id.startsWith("person.")&&Array.isArray(t.attributes.device_trackers))for(let n of t.attributes.device_trackers)typeof n=="string"&&e.add(n);return e}function go(a,e=fn(a)){var n,o;let t=new Set;for(let r of e){let s=(o=(n=a.entities)==null?void 0:n[r])==null?void 0:o.device_id;s&&t.add(s)}return t}function nt(a,e,t,n=mo){var k;let o=new Set(e.presence.flatMap(_=>[_.person,_.sensor]).filter(_=>!!_)),r=fn(a);for(let _ of r)o.add(_);let s=go(a,r),l=new Set((t.cars??[]).filter(_=>_.startsWith("device_tracker.")&&!o.has(_)&&!!a.states[_])),i=new Set(e.floors.flatMap(_=>_.rooms.map(g=>g.area_id)).filter(_=>!!_)),c=[];for(let[_,g]of Object.entries(a.entities??{})){if(!g.area_id&&g.device_id){let x=(k=a.devices)==null?void 0:k[g.device_id];if(!(x!=null&&x.area_id)||!i.has(x.area_id))continue}else if(!g.area_id||!i.has(g.area_id))continue;g.hidden||g.entity_category||!po.has(tt(_))||c.push(_)}let u=Object.keys(a.states).filter(_=>_.startsWith("weather.")),p=e.floors.flatMap(_=>_.placements.filter(g=>g.entity_id.startsWith("camera.")).flatMap(g=>et(a,g.entity_id))),d=[...new Set([...l,...t.entities,...p,"sun.sun",...e.settings.weather_entity?[e.settings.weather_entity]:[],...e.settings.outage_entity?[e.settings.outage_entity]:[],...u.slice(0,1),...c])],m=[],h=d.filter(_=>{var x,S;if(!_.includes(".")||!l.has(_)&&uo.has(tt(_))||o.has(_)||!a.states[_])return!1;if(l.has(_))return!0;let g=(S=(x=a.entities)==null?void 0:x[_])==null?void 0:S.device_id;return g&&s.has(g)||_o(a,_)?(m.push(_),!1):!0}),f=h.slice(0,n),b=f.filter(_=>ho(a,_)),w=new Set(b);return{entities:f.filter(_=>!w.has(_)),stats:b,overflow:h.slice(n),cars:f.filter(_=>l.has(_)),hidden:m}}var mn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},bo=new Set(["front","front_glass","sidelight","sidelights"]),vo=new Set(["washer","dryer","dishwasher"]);function hn(a,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[r,s]=e[n],[l,i]=e[o];s>a[1]!=i>a[1]&&a[0]<(l-r)*(a[1]-s)/(i-s)+r&&(t=!t)}return t}function yo(a,e){if(e.type!=="door"||e.wall)return!1;if(e.style&&bo.has(e.style))return!0;if(e.style)return!1;let t=a.rooms.find(p=>p.id===e.room_id);if(!t||t.points.length<3)return!1;let n=t.points[e.edge],o=t.points[(e.edge+1)%t.points.length];if(!n||!o)return!1;let r=Math.hypot(o[0]-n[0],o[1]-n[1]);if(r<1e-6)return!1;let s=(o[0]-n[0])/r,l=(o[1]-n[1])/r,i=[n[0]+s*e.offset,n[1]+l*e.offset],c=p=>[i[0]-l*p,i[1]+s*p],u=hn(c(.3),t.points)?c(-.4):c(.4);return!a.rooms.some(p=>p.id!==t.id&&p.points.length>=3&&hn(u,p.points))}function ot(a,e,t){var r,s;let n=new Map,o=new Map(t.furniture);for(let l of e.floors)for(let i of l.furniture){if(!vo.has(i.type))continue;let c=(r=o.get(i.id))==null?void 0:r.power,u=(s=l.placements.find(d=>{var m;return((m=a.states[d.entity_id])==null?void 0:m.attributes.device_class)==="power"&&Math.hypot(d.x-i.x,d.z-i.z)<=1.2}))==null?void 0:s.entity_id,p=c??u;p&&!n.has(p)&&n.set(p,i)}return n}function _n(a,e,t,n){var l;let o=new Map,r=(i,c)=>{i&&n.has(i)&&!o.has(i)&&o.set(i,c)},s=new Map(t.openings);for(let i of e.floors)for(let c of i.openings){let u=s.get(c.id);if(u)if(c.type==="garage")for(let p of[u.contact,u.cover])r(p,"garage");else if(c.type==="door"){if(yo(i,c))for(let p of[u.contact,u.contact2])r(p,"door")}else[u.contact,u.tilt,u.contact2,u.tilt2].filter(d=>!!d&&n.has(d)).forEach((d,m)=>r(d,m?"window_more":"window"))}for(let i of ot(a,e,t).keys())r(i,"washer");for(let i of e.floors)for(let c of i.placements)if(c.entity_id.startsWith("camera."))for(let u of et(a,c.entity_id))r(u,"camera");for(let i of n){if(o.has(i))continue;let c=tt(i),u=String(((l=a.states[i])==null?void 0:l.attributes.device_class)??"");c==="lock"?r(i,"lock"):c==="alarm_control_panel"?r(i,"alarm"):c==="vacuum"?r(i,"robot"):c==="weather"?r(i,"weather"):c==="cover"&&(u==="garage"||u==="gate")?r(i,"garage"):c==="binary_sensor"&&(mn[u]?r(i,mn[u]):u==="garage_door"?r(i,"garage"):u==="motion"&&r(i,"motion"))}return o}var wo={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function xo(a,e){if(a==="rgb_color")return Array.isArray(e)&&e.every(t=>typeof t=="number")?e.map(t=>Math.round(t)):null;if(typeof e!="number"||!Number.isFinite(e))return e;switch(a){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(e/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(e/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(e);case"volume_level":return Math.round(Math.round(e*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(e*10)/10;default:return e}}function ko(a){return a==="home"||a==="unavailable"||a==="unknown"?a:"not_home"}function at(a){let e=a.entity_id.slice(0,a.entity_id.indexOf("."));if(e==="device_tracker")return{s:ko(a.state),a:null};let t=wo[e];if(!(t!=null&&t.length))return{s:a.state,a:null};let n={};for(let o of t){let r=a.attributes[o];if(r==null)continue;let s=xo(o,r);s!=null&&(n[o]=s)}return{s:a.state,a:Object.keys(n).length?n:null}}var rt=3e5,gn=2e4,Mo=[6e4,rt,15*6e4,36e5],So=(a,e)=>a.startsWith("sensor.")&&e.state!==""&&Number.isFinite(Number(e.state));function Ao(a,e){let t=[];for(let n of a){let o=t[t.length-1];o&&Math.floor(o.t/e)===Math.floor(n.t/e)?t[t.length-1]=n:t.push(n);let r=t[t.length-2];r&&r.k===t[t.length-1].k&&t.pop()}return t}var ke=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(e,t,n=Date.now()){this.ids=e,this.startStates=t,this.startedAt=n;for(let o of e)this.seen.set(o,t[o]),t[o]&&this.lastKey.set(o,j(at(t[o])))}get pending(){return this.count}record(e,t){for(let n of this.ids){let o=e[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let r=at(o),s=j(r);if(this.lastKey.get(n)===s)continue;let l=this.rows.get(n),i=l==null?void 0:l[l.length-1],c=Date.parse(o.last_updated??o.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(t,c):t,(i==null?void 0:i.t)??-1/0);if(i&&So(n,o)&&Math.floor(i.t/rt)===Math.floor(u/rt)){l[l.length-1]={t:u,v:r,k:s},this.lastKey.set(n,s);continue}this.lastKey.set(n,s),l?l.push({t:u,v:r,k:s}):this.rows.set(n,[{t:u,v:r,k:s}]),this.count++}this.count>gn&&this.compact()}compact(){for(let e of Mo){let t=0;for(let[n,o]of this.rows){let r=Ao(o,e);this.rows.set(n,r),t+=r.length}if(this.count=t,t<=gn/2)return}}flush(e,t){let n=0,o=0;for(let r of this.ids){if(this.seeded.has(r)||e.tracks.has(r)||e.series.has(r))continue;this.seeded.add(r);let s=this.startStates[r],l=[...s?[{t:this.startedAt,v:at(s)}]:[],...this.rows.get(r)??[]],i=Zt(r,l);this.rows.delete(r),i&&(e.tracks.set(r,i),e.missing.delete(r),o++,n+=i.times.length)}for(let[r,s]of this.rows){let l=e.tracks.get(r);if(l){n+=Be(l,s);continue}let i=e.series.get(r);i&&(n+=Qt(i,s.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,e.end=Math.max(e.end,t),{added:n,created:o}}};function bn(a,e,t){if(!(e.state==="opening"||e.state==="closing")||e.pos===null||!t||t.pos===null)return e.pos;let o=t.t-e.t;return!(o>0)||o>18e4||a<=e.t?e.pos:a>=t.t?t.pos:Math.round(e.pos+(t.pos-e.pos)*(a-e.t)/o)}var M=Math.PI/180;function Me(a,e,t){let n=(t/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,r=357.52911+n*(35999.05029-1537e-7*n),s=.016708634-n*(42037e-9+1267e-10*n),l=Math.sin(r*M)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*r*M)*(.019993-101e-6*n)+Math.sin(3*r*M)*289e-6,i=125.04-1934.136*n,c=o+l-.00569-.00478*Math.sin(i*M),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(i*M),d=Math.asin(Math.sin(p*M)*Math.sin(c*M)),m=Math.tan(p/2*M)**2,h=4/M*(m*Math.sin(2*o*M)-2*s*Math.sin(r*M)+4*s*m*Math.sin(r*M)*Math.cos(2*o*M)-.5*m*m*Math.sin(4*o*M)-1.25*s*s*Math.sin(2*r*M)),b=(((t/6e4%1440+1440)%1440+h+4*e)%1440+1440)%1440,w=(b/4<0?b/4+180:b/4-180)*M,k=a*M,_=Math.min(1,Math.max(-1,Math.sin(k)*Math.sin(d)+Math.cos(k)*Math.cos(d)*Math.cos(w))),g=Math.acos(_),x=90-g/M;x+=Eo(x);let S=Math.cos(k)*Math.sin(g),G=180;if(Math.abs(S)>1e-9){let ft=Math.acos(Math.min(1,Math.max(-1,(Math.sin(k)*Math.cos(g)-Math.sin(d))/S)))/M;G=w>0?(ft+180)%360:(540-ft)%360}return{elevation:x,azimuth:G}}function Eo(a){if(a>85)return 0;let e=Math.tan(a*M);return(a>5?58.1/e-.07/e**3+86e-6/e**5:a>-.575?1735+a*(-518.2+a*(103.4+a*(-12.79+a*.711))):-20.772/e)/3600}function st(a,e,t){return Me(a,e,t).elevation<-.833}function vn(a,e,t,n,o=5*6e4){let r=[],s=null;for(let l=t;l<=n;l+=o){let i=st(a,e,l);i&&s===null&&(s=l),!i&&s!==null&&(r.push([s,l]),s=null)}return s!==null&&r.push([s,n]),r}var ct=class extends Error{constructor(e){super(`Time travel is read-only: ${e}`),this.name="ReplayReadOnly"}},Ro=new Set(["neonplan3d/building/get","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),To=new Set(["neonplan3d/building/subscribe"]),it={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},yn=["person.","device_tracker."],lt=a=>a.slice(0,a.indexOf("."));function Se(a,e){if(!(e!=null&&e.some(n=>n in a)))return a;let t={...a};for(let n of e)delete t[n];return t}function se(a){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:a}})),new ct(a)}function $o(a,e){let t=a,n={...a,states:e};n.callService=(o,r)=>se(`${o}.${r}`),n.callWS=o=>Ro.has(String(o.type))?a.callWS(o):se(String(o.type)),n.connection={subscribeMessage:(o,r)=>To.has(String(r.type))?a.connection.subscribeMessage(o,r):se(String(r.type))};for(let o of["callApi","callApiRaw"]){let r=t[o];typeof r=="function"&&(n[o]=(s,...l)=>String(s).toUpperCase()==="GET"?r.call(a,s,...l):se(`${s} ${String(l[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in t&&(n[o]=()=>se(o));return n}var Po=new Set(["light","switch","input_boolean","binary_sensor","fan"]),Ae=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(e,t){this.timeline=e,this.cursor=new W(e),this.cursor.tracks.forEach((o,r)=>this.trackAt.set(o.id,r)),this.location=t.location??null,this.frozen=t.states??null;let n=new Set([...t.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...t.requested,...e.tracks.keys(),...e.series.keys()])].filter(o=>n.has(o)||!yn.some(r=>o.startsWith(r)))}refresh(){let e=this.cursor.t;this.cursor=new W(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((t,n)=>this.trackAt.set(t.id,n)),Number.isFinite(e)&&this.cursor.at(e)}hassAt(e,t,n=!0){let o=this.frozen??=e.states,r=!1;if(!this.base){this.base={};for(let[i,c]of Object.entries(o))yn.some(u=>i.startsWith(u))||(this.base[i]=i.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:Se(c.attributes,["entity_picture","access_token"])}:c);r=!0}this.sameContext(e)||(this.live=e,r=!0);let s=!n&&t>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(t),this.pulses=s?this.findPulses(s):[];let l=[];for(let i of this.requested){let c=this.slots.get(i),u=this.slot(i,t,o[i],c);u!==c&&(this.slots.set(i,u),l.push(i))}if(!r&&!l.length&&this.hass)return this.hass;if(r){this.states={...this.base};for(let i of this.requested){let c=this.slots.get(i);c&&(this.states[i]=c.obj)}}else{this.states={...this.states};for(let i of l)this.states[i]=this.slots.get(i).obj}return this.hass=$o(this.live,this.states),this.hass}findPulses(e){let t=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let r=e[o],s=n[o];if(r<0||s-r<2)continue;let l=this.cursor.tracks[o];if(!Po.has(lt(l.id)))continue;let i=l.values[l.vals[r]].s;if(l.values[l.vals[s]].s===i){for(let c=r+1;c<s;c++)if(l.values[l.vals[c]].s!==i){t.push(l.id);break}}}return t}sameContext(e){let t=this.live;if(!t)return!1;if(t===e)return!0;let n=e;for(let o in n)if(o!=="states"&&n[o]!==t[o])return!1;for(let o in t)if(!(o in n))return!1;return!0}slot(e,t,n,o){let r=this.trackAt.get(e),s=this.timeline.series.get(e),l,i;if(e==="sun.sun"&&this.location){let c=Me(this.location.lat,this.location.lon,t),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,d=Me(this.location.lat,this.location.lon,t+6e5).elevation>c.elevation;l=`${u}|${p}|${d}`,i=()=>({entity_id:e,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Se((n==null?void 0:n.attributes)??{},it.sun),elevation:u,azimuth:p,rising:d}})}else if(r!==void 0&&this.cursor.idx[r]>=0){let c=this.cursor.tracks[r],u=this.cursor.idx[r],p=c.values[c.vals[u]],d=e.startsWith("cover.")?this.coverPos(c,u,t):null;l=d===null?`${u}`:`${u}:${d}`,i=()=>{let m={...Se((n==null?void 0:n.attributes)??{},it[lt(e)]),...p.a??{}};d!==null&&(m.current_position=d),e==="sun.sun"&&m.elevation===void 0&&Object.assign(m,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let h=c.since[u];return h>this.timeline.start?{entity_id:e,state:p.s,attributes:m,last_changed:new Date(h).toISOString()}:{entity_id:e,state:p.s,attributes:m}}}else if(s){let c=L(s,t),u=this.stepOf(e,s,n),p=Ht(c,u);l=`n${p}`,i=()=>({entity_id:e,state:p,attributes:(n==null?void 0:n.attributes)??{},last_changed:new Date(t).toISOString()})}else l="none",i=()=>({entity_id:e,state:"unknown",attributes:Se((n==null?void 0:n.attributes)??{},it[lt(e)])});return o&&o.key===l&&o.attrs===(n==null?void 0:n.attributes)?o:{key:l,attrs:n==null?void 0:n.attributes,obj:i()}}coverPos(e,t,n){let o=e.values[e.vals[t]];if(o.s!=="opening"&&o.s!=="closing")return null;let r=l=>{var i;return typeof((i=l.a)==null?void 0:i.current_position)=="number"?l.a.current_position:null},s=t+1<e.times.length?{t:e.times[t+1],pos:r(e.values[e.vals[t+1]])}:null;return bn(n,{t:e.times[t],state:o.s,pos:r(o)},s)}stepOf(e,t,n){var r,s,l;let o=this.steps.get(e);if(o===void 0){let i=t.mean.find(c=>!Number.isNaN(c))??0;o=Nt(n==null?void 0:n.attributes.unit_of_measurement,(l=(s=(r=this.live)==null?void 0:r.entities)==null?void 0:s[e])==null?void 0:l.display_precision,i),this.steps.set(e,o)}return o}rows(e,t,n){let o={};for(let r of e){let s=this.timeline.tracks.get(r);if(!s)continue;let l=[];for(let i=Math.max(0,A(s.times,t));i<s.times.length&&s.times[i]<=n;i++)l.push({s:s.values[s.vals[i]].s,lu:s.times[i]/1e3});l.length&&(o[r]=l)}return o}};var wn=new Set(["cleaning","paused","returning"]),zo=new Set(["","unknown","unavailable","none","null"]);function xn(a,e,t){var c;if(!a)return[];let n=u=>a.values[a.vals[u]].s,o=A(a.times,t);if(o<0||!wn.has(n(o)))return[];let r=o;for(;r>0&&wn.has(n(r-1));)r--;let s=a.times[r],l=[],i=u=>{let p=typeof u=="string"?u.trim():"";!zo.has(p.toLowerCase())&&l[l.length-1]!==p&&l.push(p)};if(e){let u=Math.max(0,A(e.times,s));for(e.times[u]<s-6e4&&u++;u<e.times.length&&e.times[u]<=t;u++)i(e.values[e.vals[u]].s)}else for(let u=r;u<=o;u++)i((c=a.values[a.vals[u]].a)==null?void 0:c.current_room);return l}var ut=a=>a.slice(0,a.indexOf("."));function Co(a,e){var n,o,r;let t=(n=a.entities)==null?void 0:n[e];return t?t.area_id??(t.device_id?((r=(o=a.devices)==null?void 0:o[t.device_id])==null?void 0:r.area_id)??null:null):null}function kn(a,e,t){let n=[],o=new Map;for(let l of Object.keys(a.entities??{})){let i=Co(a,l);i&&o.set(i,[...o.get(i)??[],l])}let r=new Map(t.openings),s=new Map(t.furniture);for(let l of e.floors)for(let i of l.rooms){if(i.points.length<3)continue;let c=new Set(i.area_id?o.get(i.area_id)??[]:[]);for(let m of l.placements)R([m.x,m.z],i.points)&&c.add(m.entity_id);for(let m of l.furniture){let h=s.get(m.id);h!=null&&h.entity&&R([m.x,m.z],i.points)&&c.add(h.entity)}let u=[];for(let m of l.openings){if(m.room_id!==i.id)continue;let h=r.get(m.id),f=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(b=>!!b):[];for(let b of f)c.add(b);f.length&&m.type!=="door"&&m.type!=="garage"&&u.push(f)}let p=[...c].filter(m=>!!a.states[m]),d=m=>{var h;return(h=a.states[m])==null?void 0:h.attributes.device_class};n.push({floorId:l.id,roomId:i.id,name:i.name,lights:p.filter(m=>ut(m)==="light"),windows:u,climates:p.filter(m=>ut(m)==="climate"),temps:p.filter(m=>ut(m)==="sensor"&&d(m)==="temperature"),all:p})}return n}function Mn(a){let e=new Map;for(let t of a)for(let n of t.all)e.has(n)||e.set(n,t);return e}var dt=36e5;function ie(a,e,t){let n=a.map(([r,s])=>[Math.max(r,e),Math.min(s,t)]).filter(([r,s])=>s>r);n.sort((r,s)=>r[0]-s[0]);let o=[];for(let r of n){let s=o[o.length-1];s&&r[0]<=s[1]?s[1]=Math.max(s[1],r[1]):o.push([r[0],r[1]])}return o}var Ee=a=>a.reduce((e,[t,n])=>e+(n-t),0);function jo(a,e,t){let n=[],o=null;for(let r=0;r<a.times.length;r++){let s=e(a.values[a.vals[r]]);s&&o===null&&(o=a.times[r]),!s&&o!==null&&(n.push([o,a.times[r]]),o=null)}return o!==null&&t>o&&n.push([o,t]),n}function An(a,e,t,n,o=2*dt){let r=ie(e.flatMap(i=>{let c=a.tracks.get(i);return c?B(c,H,a.end):[]}),t,n);if(!e.some(i=>a.tracks.has(i)))return[];let s=[],l=t;for(let[i,c]of r)i-l>=o&&s.push([l,i]),l=Math.max(l,c);return n-l>=o&&s.push([l,n]),s}function En(a){for(let e=a.length-1;e>=0;e--){let[t,n]=a[e],o=0;for(let r=t;r<n;r+=6e5){let s=U(r);s>=7&&s<22&&(o+=Math.min(6e5,n-r))}if(o>=dt)return[t,n]}return null}var Sn=["alarm","door","window","window_open","light_on","motion","appliance"];function Rn(a){let{timeline:e,roles:t,events:n,from:o,to:r}=a,s=[],l=new Map,i=(u,p,d)=>{let m=`${u}:${p}`,h=l.get(m);if(h)h.count++,h.t=Math.min(h.t,d);else{let f={kind:u,entity:p,t:d,count:1,ms:0};l.set(m,f),s.push(f)}};for(let u of n)u.t<o||u.t>r||(be.has(u.kind)||u.kind==="rain"?s.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?i("door",u.entity,u.t):u.kind==="window"?i("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&s.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of a.motion){let p=e.tracks.get(u);if(p){for(let d of ae(p))d.from!==null&&d.t>=o&&d.t<=r&&d.to==="on"&&d.from!=="on"&&i("motion",u,d.t);if(p.dropped)for(let d of p.dropped)d>=o&&d<=r&&i("motion",u,d)}}let c=(u,p,d,m)=>{let h=ie(d,o,r),f=Ee(h);(f>=m||h.length&&h[h.length-1][1]>=r&&f>=6e4)&&s.push({kind:u,entity:p,t:h[0][0],count:h.length,ms:f})};for(let u of a.lights){let p=e.tracks.get(u);p&&c("light_on",u,B(p,Fo,e.end),15*6e4)}for(let[u,p]of t){if(p!=="window"&&p!=="window_more")continue;let d=e.tracks.get(u);d&&c("window_open",u,B(d,H,e.end),30*6e4)}return s.sort((u,p)=>Sn.indexOf(u.kind)-Sn.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var Fo=new Set(["on"]);function Do(a,e,t,n){let o=1/0,r=-1/0,s=a.series.get(e);if(s)for(let l=0;l<s.mean.length;l++){let i=s.start+(l+.5)*s.step,c=s.mean[l];i<t||i>n||Number.isNaN(c)||(o=Math.min(o,c),r=Math.max(r,c))}else{let l=a.tracks.get(e);if(l)for(let i=Math.max(0,A(l.times,t));i<l.times.length&&l.times[i]<=n;i++){let c=Number(l.values[l.vals[i]].s);Number.isFinite(c)&&(o=Math.min(o,c),r=Math.max(r,c))}}return Number.isFinite(o)?[o,r]:null}function Tn(a,e,t,n,o=null){let r=Math.min(n,a.end),s=[],l=(i,c)=>i.flatMap(u=>{let p=a.tracks.get(u);return p?jo(p,c,a.end):[]});for(let i of e){let c=Ee(ie(l(i.lights,h=>h.s==="on"),t,r)),u=Ee(ie(l(i.windows.flat(),h=>H.has(h.s)),t,r)),p=Ee(ie(l(i.climates,h=>{var f;return((f=h.a)==null?void 0:f.hvac_action)==="heating"}),t,r)),d=null,m=null;for(let h of i.temps){let f=Do(a,h,t,r);f&&(d=d===null?f[0]:Math.min(d,f[0]),m=m===null?f[1]:Math.max(m,f[1]))}(c||u||p||d!==null)&&s.push({roomId:i.roomId,name:i.name,lightMs:c,windowMs:u,heatMs:p,tMin:d,tMax:m})}return{from:t,to:n,rooms:s,energy:o}}function Oo(a,e,t){let n=a.series.get(e);if(n){let s=L(n,t);return Number.isFinite(s)?String(s):null}let o=a.tracks.get(e);if(!o)return null;let r=A(o.times,t);return r<0?null:o.values[o.vals[r]].s}function $n(a,e,t,n,o,r){var l;let s={};for(let i of o){let c=Oo(a,i,r);c!==null&&(s[i]={entity_id:i,state:c,attributes:((l=e[i])==null?void 0:l.attributes)??{}})}return gt({states:s},t,[],n)}function Pn(a,e){let t=a.energy;return[...new Set([t.grid,t.solar,t.battery,t.battery_soc,t.consumption,e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...e.soc].filter(n=>!!n))]}function zn(a,e,t,n=3e5){let o=0,r=0,s=0,l=0,i=!1,c=n/dt/1e3;for(let u=e+n/2;u<t;u+=n){let p=a(u);p.solar===null&&p.grid===null&&p.consumption===null||(i=!0,o+=Math.max(0,p.solar??0)*c,r+=Math.max(0,p.grid??0)*c,s+=Math.max(0,-(p.grid??0))*c,l+=Math.max(0,p.consumption??0)*c)}return i?{pv:o,imp:r,exp:s,use:l,self:l>0?Math.min(1,Math.max(0,1-r/l)):null}:null}var Vo={tt_range_hint:"Periodo: 24 horas o varios d\xEDas",tt_days:"{n} d",tt_loading_day:"cargando {day} \u2026",tt_recorder_days:"Registro: {n} d\xEDas",tt_memory_full:"L\xEDmite de memoria alcanzado",tt_now_reached:"Presente alcanzado",tt_sheet:"Eventos, res\xFAmenes",tt_tab_events:"Eventos",tt_tab_away:"Ausencia",tt_tab_day:"D\xEDa",tt_close:"Cerrar",tt_f_safety:"Seguridad",tt_f_openings:"Puertas y ventanas",tt_f_devices:"Aparatos",tt_f_energy:"Energ\xEDa",tt_follow:"La c\xE1mara sigue los eventos",tt_stop:"Parar en eventos importantes",tt_no_events:"Sin eventos",tt_ev_window:"{name} abierta",tt_ev_battery_full:"Bater\xEDa llena: {name}",tt_ev_pv_peak:"M\xE1xima potencia solar del d\xEDa",tt_away_title:"Mientras no estabas",tt_away_since:"Desde",tt_away_last:"desde el \xFAltimo viaje en el tiempo",tt_away_quiet:"tranquilo {from}\u2013{to}",tt_away_none:"No pas\xF3 nada \u2013 todo tranquilo.",tt_away_door:"{name}: abierta {n}\xD7",tt_away_motion:"Movimiento {name}: {n}\xD7",tt_away_light:"{name} encendida durante {d}",tt_away_open:"{name} abierta durante {d}",tt_day_title:"Resumen del d\xEDa {day}",tt_day_light:"Luz",tt_day_window:"Ventana",tt_day_heat:"Calefacci\xF3n",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Compra de red",tt_day_export:"Inyecci\xF3n",tt_day_use:"Consumo",tt_day_self:"Autosuficiencia",tt_day_compare:"Comparar con el d\xEDa anterior",tt_day_before:"D\xEDa anterior",tt_day_none:"A\xFAn no hay valores para este d\xEDa.",tt_day_partial:"incompleto (desde las {time})",tt_yesterday:"Ayer a esta hora"};function Cn(a){return(e,t={})=>{let n=a(e,t);if(n!==e)return n;let o=Vo[e]??e;for(let[r,s]of Object.entries(t))o=o.replace(`{${r}}`,String(s));return o}}var E=24*36e5,pt=150,mt=250,Lo=10*1024*1024,No=6e4,Ho=6e4,jn=1e4;function K(a,e){try{return e!==void 0&&localStorage.setItem(`fp3d-tt-${a}`,e),localStorage.getItem(`fp3d-tt-${a}`)}catch{return null}}var ht=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=K("follow")==="1";stopImportant=K("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{var e;document.hidden||!((e=this.playback)!=null&&e.playing)||(this.last=performance.now(),this.schedule())};constructor(e){this.opts=e,this.live=e.live,this.startStates=e.live.states,this.quality=e.quality,this.low=e.spec.low,this.t=Cn(e.t),Ge(Ke(e.live)),this.end=Date.now(),this.range=e.range==="7d"?"7d":"24h";let t=Number(K("closed"));this.lastClosed=Number.isFinite(t)&&t>0&&t<this.end?t:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,r,s)=>{var l;return((l=n.replayer)==null?void 0:l.rows(o,r,s))??{}},listen:o=>n.listen(o),stats:(o,r,s)=>n.timeline?Jt(n.timeline,o,r,s):{},robotRooms:(o,r)=>n.timeline?xn(n.timeline.tracks.get(o),r?n.timeline.tracks.get(r):void 0,n.replay.t):[],setQuality:(o,r)=>n.setQuality(o,r)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}get playing(){var e;return!!((e=this.playback)!=null&&e.playing)}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*E}get recorderStart(){var t;let e=(t=this.timeline)==null?void 0:t.keepDays;return typeof e=="number"&&e>0?this.end-e*E:null}get atNow(){let e=this.playback;return!!e&&!e.playing&&e.t>=e.end-1e3&&Date.now()-e.end<12e4}get location(){let e=this.live.config;return typeof(e==null?void 0:e.latitude)=="number"&&typeof(e==null?void 0:e.longitude)=="number"?{lat:e.latitude,lon:e.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(e,t,n){let o=nt(this.live,this.opts.building,this.opts.spec),r=Math.max(1,Math.ceil(o.entities.length/pt),Math.ceil(o.stats.length/mt)),s=[];for(let l=0;l<r;l++){let i=o.entities.slice(l*pt,(l+1)*pt),c=o.stats.slice(l*mt,(l+1)*mt),u={type:"neonplan3d/timetravel/history",start_time:e/1e3,end_time:t/1e3,entity_ids:i,statistic_ids:c},p=o.cars.filter(d=>i.includes(d));if(p.length&&(u.car_trackers=p),s.push(await this.live.callWS(u)),this.disposed)return null;n==null||n((l+1)/r)}return qt(s)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:e,spec:t}=this.opts,n=this.live,o=nt(n,e,t),r;try{r=await this.fetchWindow(this.end-E,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=(u==null?void 0:u.code)??(u==null?void 0:u.message)??String(c),this.notify();return}if(!r)return;let s=e.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...o.entities,...o.stats,...o.overflow,...o.hidden,...s],this.cars=o.cars;let l=new Map(t.furniture);this.devices=t.energy?Re(e,c=>{var u;return((u=l.get(c.id))==null?void 0:u.power)??null}):null,this.energyIds=this.devices?Pn(e,this.devices):[],this.rooms=kn(n,e,t),this.roomOf=Mn(this.rooms);for(let[c,u]of ot(n,e,t))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(r);let i=typeof this.opts.at=="number"?this.opts.at:we(this.opts.at??null,this.end);this.playback=new ve(r.start,this.end,i??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?Ze:ye),this.liveLog=new ke([...o.entities,...o.stats,...o.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(e){let{building:t,spec:n}=this.opts,o=this.live,r=new Set([...e.tracks.keys(),...e.series.keys()]);this.roles=_n(o,t,n,r),Bt(e)>Gt&&Yt(e,this.motion()),this.timeline=e,this.version++,this.daySummaries.clear(),this.replayer=new Ae(e,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[t.settings.weather_entity,...Object.keys(o.states).filter(s=>s.startsWith("weather."))].find(s=>!!s&&r.has(s))??null,this.findEvents(),this.gaps=Ue(e),this.gapsTo=e.end,this.updateNights()}findEvents(){let e=this.timeline;if(!e)return;let{building:t,spec:n}=this.opts,o=this.devices,r=o&&n.energy?{solar:t.energy.solar?[t.energy.solar]:o.solar,soc:t.energy.battery_soc?[t.energy.battery_soc]:o.soc,sunDown:i=>this.sunDown(i)}:null,s=t.settings.outage_entity,l=s&&this.live.states[s]?{id:s,attributes:this.live.states[s].attributes}:null;this.allEvents=on({timeline:e,roles:this.roles,weather:this.weather,energy:r,outage:l}),this.events=this.allEvents.filter(i=>!nn.has(i.kind))}sunDown(e){var r;let t=this.location;if(t)return st(t.lat,t.lon,e);let n=(r=this.timeline)==null?void 0:r.tracks.get("sun.sun"),o=n?A(n.times,e):-1;return!!n&&o>=0&&n.values[n.vals[o]].s==="below_horizon"}shownEvents(e=!1){let t=this.playback,n=e?this.allEvents:this.events;return t?un(n,Math.max(t.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,e])=>e==="motion"||e==="camera").map(([e])=>e)}updateNights(){let e=this.location;this.nights=e?vn(e.lat,e.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let e=this.timeline.start,t=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(e<=t+6e4)break;let n=this.recorderStart;if(n!==null&&e<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=e-E,this.notify();let o;try{o=await this.fetchWindow(e-E,e)}catch(i){console.warn("CasaNeon: time travel could not load an older day",i);break}if(!o||this.disposed||!this.timeline)return;let r=Ut(o,this.timeline);this.setTimeline(r),Kt(r)>Lo&&(this.full=!0);let s=this.playback;if(!s)continue;s.setRange(Math.max(r.start,this.start),this.end);let l=!1;this.wanted!==null&&this.wanted>=s.start&&(s.seek(this.wanted),this.wanted=null,l=!0),this.apply(!0,l)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(e){let t=this.playback;if(e===this.range||!t||!this.timeline)return;this.range=e;let n=t.t;t.setRange(Math.max(this.timeline.start,this.start),this.end,e==="7d"?Ze:ye),this.updateNights(),t.t!==n?this.apply(!0):this.notify(),e==="7d"&&this.loadOlder()}sunNights(){var o;let e=(o=this.timeline)==null?void 0:o.tracks.get("sun.sun");if(!e)return[];let t=[],n=null;for(let r=0;r<e.times.length;r++){let s=e.values[e.vals[r]].s==="below_horizon";s&&n===null&&(n=e.times[r]),!s&&n!==null&&(t.push([n,e.times[r]]),n=null)}return n!==null&&t.push([n,this.end]),t}apply(e,t=e){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,t&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,e);this.replay.pulses=this.replayer.pulses,(o!==this.hass||e)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(e){var r;this.live=e,Ge(Ke(e));let t=Date.now();(r=this.liveLog)==null||r.record(e.states,t);let n=this.playback,o=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&t-this.flushedAt>=Ho||this.derivePending&&t-this.eventsAt>jn)){let s=!n.playing&&n.t>=n.end-1e3;this.edge(t),s&&n.seek(n.end),this.replay.t=n.t,o=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(e,n.t)),o&&this.notify()}setQuality(e,t){let n=this.maxDays;this.quality=e,this.low=t;let o=this.playback;if(n===this.maxDays||!o||!this.timeline)return;let r=this.end-this.maxDays*E,s=this.timeline.start<r-6e4;if(s)this.setTimeline(Xt(this.timeline,r)),this.full=!1,this.needFrom!==null&&this.needFrom<r&&(this.needFrom=null),this.wanted!==null&&this.wanted<r&&(this.wanted=null);else if(this.range!=="7d")return;let l=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),s||o.t!==l?this.apply(!0,o.t!==l):this.notify(),this.loadOlder()}play(){let e=this.playback;if(!e)return;let t=e.t>=e.end;e.play(),t&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){var e;(e=this.playback)==null||e.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){var e;(e=this.playback)!=null&&e.playing?this.pause():this.play()}seek(e,t=!1){this.playback&&(t&&this.pause(),this.wanted=null,this.playback.seek(e),this.last=performance.now(),this.apply(!0))}step(e){let t=this.playback;if(!t)return;let n=cn(this.shownEvents(),t.t,e);this.seek(n?n.t:e>0?t.end:t.start,!0)}goTo(e){this.seek(e.t,!0),this.focusOn(e.entity)}focusOn(e){this.replay.focus=e,this.replay.focusSeq++,this.notify()}yesterday(){let e=this.playback;if(!e)return;let t=e.t-E;t<e.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(t,e.start),!0),t<e.start&&this.olderRunning&&(this.wanted=t)}setFollow(e){this.follow=e,K("follow",e?"1":"0"),this.notify()}setStopImportant(e){this.stopImportant=e,K("stop",e?"1":"0"),this.notify()}nextSpeed(){var e;(e=this.playback)==null||e.nextSpeed(),this.notify()}awayOffer(){let e=this.timeline;return e?En(An(e,this.motion(),e.start,this.end)):null}away(e,t){let n=this.timeline;return n?Rn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(o=>o.startsWith("light.")),motion:this.motion(),from:e,to:t}):[]}ensureLoaded(e){let t=this.timeline;!t||t.start<=e+6e4||this.needFrom!==null&&this.needFrom<=e||e<this.end-this.maxDays*E-E||(this.needFrom=e,this.loadOlder())}daySummary(e){let t=this.timeline;if(!t||e+E<=t.start||e>t.end)return null;let n=`${e}|${this.version}`,o=this.daySummaries.get(n);if(!o){let r=fe(e),s=Math.max(e,t.start),l=Math.min(r,t.end),i=this.devices,c=this.energy&&i?zn(u=>$n(t,this.live.states,this.opts.building,i,this.energyIds,u),s,l):null;o=Tn(t,this.rooms,s,l,c),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let e=this.playback;!(e!=null&&e.playing)||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let t=performance.now(),n=Math.min(2e3,t-this.last);this.last=t;let o=e.t;if(e.end-e.t<=No+n*e.speed&&this.edge(),e.advance(n)){let r=this.stopImportant&&e.speed>=900?Xe(this.allEvents,o,e.t,s=>be.has(s.kind)):null;if(r){e.seek(r.t),e.pause(),this.apply(!0),this.focusOn(r.entity);return}if(this.apply(!1),this.follow&&t-this.followAt>2500){let s=Xe(this.events,o,e.t,()=>!0);s&&(this.followAt=t,this.focusOn(s.entity))}}e.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},ln(this.quality,this.low)))}edge(e=Date.now()){var s;let t=this.playback,n=this.timeline;if(!t||!n||!this.liveLog||e-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:o,created:r}=this.liveLog.flush(n,e);this.flushedAt=e,this.end=e,t.setRange(Math.max(n.start,this.start),e),r&&((s=this.replayer)==null||s.refresh()),(o||r)&&(this.derivePending=!0),this.derivePending&&(!t.playing||e-this.eventsAt>jn)&&this.derive(e)}derive(e){let t=this.timeline;if(!t)return;this.derivePending=!1,this.eventsAt=e,this.findEvents();let n=Math.max(t.start,this.gapsTo-30*6e4),o=this.gaps.filter(([l])=>l<n).map(([l,i])=>[l,Math.min(i,n)]),r=Ue(t,void 0,void 0,void 0,n),s=o[o.length-1];s&&r.length&&s[1]>=n&&r[0][0]<=n&&(s[1]=r.shift()[1]),this.gaps=[...o,...r],this.gapsTo=t.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&K("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function _s(a){return new ht(a)}export{Lo as MAX_BYTES,ht as Session,_s as startTimeTravel};
