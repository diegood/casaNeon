var ce=globalThis,ue=ce.ShadowRoot&&(ce.ShadyCSS===void 0||ce.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,fe=Symbol(),Fe=new WeakMap,Q=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==fe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ue&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Fe.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Fe.set(t,e))}return e}toString(){return this.cssText}},ze=o=>new Q(typeof o=="string"?o:o+"",void 0,fe),he=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,r,i)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+o[i+1],o[0]);return new Q(t,o,fe)},Ne=(o,e)=>{if(ue)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=ce.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,o.appendChild(n)}},ge=ue?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return ze(t)})(o):o;var{is:ht,defineProperty:gt,getOwnPropertyDescriptor:bt,getOwnPropertyNames:_t,getOwnPropertySymbols:yt,getPrototypeOf:vt}=Object,de=globalThis,We=de.trustedTypes,wt=We?We.emptyScript:"",be=de.reactiveElementPolyfillSupport,X=(o,e)=>o,_e={toAttribute(o,e){switch(e){case Boolean:o=o?wt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},De=(o,e)=>!ht(o,e),Ie={attribute:!0,type:String,converter:_e,reflect:!1,useDefault:!1,hasChanged:De};Symbol.metadata??=Symbol("metadata"),de.litPropertyMetadata??=new WeakMap;var H=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&gt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=bt(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let u=r==null?void 0:r.call(this);i==null||i.call(this,s),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ie}static _$Ei(){if(this.hasOwnProperty(X("elementProperties")))return;let e=vt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(X("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(X("properties"))){let t=this.properties,n=[..._t(t),...yt(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ge(r))}else e!==void 0&&t.push(ge(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ne(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var i;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let s=(((i=n.converter)==null?void 0:i.toAttribute)!==void 0?n.converter:_e).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var i,s;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let u=n.getPropertyOptions(r),a=typeof u.converter=="function"?{fromAttribute:u.converter}:((i=u.converter)==null?void 0:i.fromAttribute)!==void 0?u.converter:_e;this._$Em=r;let l=a.fromAttribute(t,u.type);this[r]=l??((s=this._$Ej)==null?void 0:s.get(r))??l,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){var s;if(e!==void 0){let u=this.constructor;if(r===!1&&(i=this[e]),n??=u.getPropertyOptions(e),!((n.hasChanged??De)(i,t)||n.useDefault&&n.reflect&&i===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(u._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,s]of r){let{wrapped:u}=s,a=this[i];u!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[X("elementProperties")]=new Map,H[X("finalized")]=new Map,be==null||be({ReactiveElement:H}),(de.reactiveElementVersions??=[]).push("2.1.2");var Ee=globalThis,Ve=o=>o,pe=Ee.trustedTypes,Ue=pe?pe.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ye="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Ze="?"+F,xt=`<${Ze}>`,U=document,te=()=>U.createComment(""),ne=o=>o===null||typeof o!="object"&&typeof o!="function",Ae=Array.isArray,kt=o=>Ae(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",ye=`[ 	
\f\r]`,ee=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,je=/>/g,D=RegExp(`>|${ye}(?:([^\\s"'>=/]+)(${ye}*=${ye}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ke=/'/g,qe=/"/g,Je=/^(?:script|style|textarea|title)$/i,Me=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),g=Me(1),Kt=Me(2),qt=Me(3),B=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),Ge=new WeakMap,V=U.createTreeWalker(U,129);function Qe(o,e){if(!Ae(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ue!==void 0?Ue.createHTML(e):e}var St=(o,e)=>{let t=o.length-1,n=[],r,i=e===2?"<svg>":e===3?"<math>":"",s=ee;for(let u=0;u<t;u++){let a=o[u],l,d,m=-1,h=0;for(;h<a.length&&(s.lastIndex=h,d=s.exec(a),d!==null);)h=s.lastIndex,s===ee?d[1]==="!--"?s=Be:d[1]!==void 0?s=je:d[2]!==void 0?(Je.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=D):d[3]!==void 0&&(s=D):s===D?d[0]===">"?(s=r??ee,m=-1):d[1]===void 0?m=-2:(m=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?D:d[3]==='"'?qe:Ke):s===qe||s===Ke?s=D:s===Be||s===je?s=ee:(s=D,r=void 0);let w=s===D&&o[u+1].startsWith("/>")?" ":"";i+=s===ee?a+xt:m>=0?(n.push(l),a.slice(0,m)+Ye+a.slice(m)+F+w):a+F+(m===-2?u:w)}return[Qe(o,i+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},re=class o{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let i=0,s=0,u=e.length-1,a=this.parts,[l,d]=St(e,t);if(this.el=o.createElement(l,n),V.currentNode=this.el.content,t===2||t===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(r=V.nextNode())!==null&&a.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(let m of r.getAttributeNames())if(m.endsWith(Ye)){let h=d[s++],w=r.getAttribute(m).split(F),_=/([.?@])?(.*)/.exec(h);a.push({type:1,index:i,name:_[2],strings:w,ctor:_[1]==="."?xe:_[1]==="?"?ke:_[1]==="@"?Se:q}),r.removeAttribute(m)}else m.startsWith(F)&&(a.push({type:6,index:i}),r.removeAttribute(m));if(Je.test(r.tagName)){let m=r.textContent.split(F),h=m.length-1;if(h>0){r.textContent=pe?pe.emptyScript:"";for(let w=0;w<h;w++)r.append(m[w],te()),V.nextNode(),a.push({type:2,index:++i});r.append(m[h],te())}}}else if(r.nodeType===8)if(r.data===Ze)a.push({type:2,index:i});else{let m=-1;for(;(m=r.data.indexOf(F,m+1))!==-1;)a.push({type:7,index:i}),m+=F.length-1}i++}}static createElement(e,t){let n=U.createElement("template");return n.innerHTML=e,n}};function K(o,e,t=o,n){var s,u;if(e===B)return e;let r=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl,i=ne(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((u=r==null?void 0:r._$AO)==null||u.call(r,!1),i===void 0?r=void 0:(r=new i(o),r._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=K(o,r._$AS(o,e.values),r,n)),e}var we=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??U).importNode(t,!0);V.currentNode=r;let i=V.nextNode(),s=0,u=0,a=n[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new oe(i,i.nextSibling,this,e):a.type===1?l=new a.ctor(i,a.name,a.strings,this,e):a.type===6&&(l=new $e(i,this,e)),this._$AV.push(l),a=n[++u]}s!==(a==null?void 0:a.index)&&(i=V.nextNode(),s++)}return V.currentNode=U,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},oe=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),ne(e)?e===x||e==null||e===""?(this._$AH!==x&&this._$AR(),this._$AH=x):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):kt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==x&&ne(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){var i;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=re.createElement(Qe(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(t);else{let s=new we(r,this),u=s.u(this.options);s.p(t),this.T(u),this._$AH=s}}_$AC(e){let t=Ge.get(e.strings);return t===void 0&&Ge.set(e.strings,t=new re(e)),t}k(e){Ae(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let i of e)r===t.length?t.push(n=new o(this.O(te()),this.O(te()),this,this.options)):n=t[r],n._$AI(i),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=Ve(e).nextSibling;Ve(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=x}_$AI(e,t=this,n,r){let i=this.strings,s=!1;if(i===void 0)e=K(this,e,t,0),s=!ne(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{let u=e,a,l;for(e=i[0],a=0;a<i.length-1;a++)l=K(this,u[n+a],t,a),l===B&&(l=this._$AH[a]),s||=!ne(l)||l!==this._$AH[a],l===x?e=x:e!==x&&(e+=(l??"")+i[a+1]),this._$AH[a]=l}s&&!r&&this.j(e)}j(e){e===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},xe=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===x?void 0:e}},ke=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==x)}},Se=class extends q{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??x)===B)return;let n=this._$AH,r=e===x&&n!==x||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==x&&(n===x||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},$e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};var ve=Ee.litHtmlPolyfillSupport;ve==null||ve(re,oe),(Ee.litHtmlVersions??=[]).push("3.3.3");var Xe=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let i=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new oe(e.insertBefore(te(),i),i,void 0,t??{})}return r._$AI(o),r};var ie=globalThis,z=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Xe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return B}},et;z._$litElement$=!0,z.finalized=!0,(et=ie.litElementHydrateSupport)==null||et.call(ie,{LitElement:z});var Re=ie.litElementPolyfillSupport;Re==null||Re({LitElement:z});(ie.litElementVersions??=[]).push("4.2.2");var Et={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},yn=Object.keys(Et);function At(o){return o==="hedge"||o==="fence"||o==="pergola"}function tt(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!At(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function me(o){return[...o.rooms,...tt(o)]}var Mt={type:"none",pitch:35,overhang:.4},$n={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...Mt}};var Rt=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var $t=new Set([...Rt,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function Pe(o){let e=0;for(let t=0;t<o.length;t++){let[n,r]=o[t],[i,s]=o[(t+1)%o.length];e+=n*s-i*r}return e/2}function j(o,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[i,s]=e[n],[u,a]=e[r];s>o[1]!=a>o[1]&&o[0]<(u-i)*(o[1]-s)/(a-s)+i&&(t=!t)}return t}function nt(o,e){var r;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let i=(r=o.devices)==null?void 0:r[n];if(!i)return null;if(i.area_id)return i.area_id;n=i.parent_device_id}return null}var rt="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Pt={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function ot(o){let e=o?Pt[o]:void 0;return e?`${rt}#${e}`:rt}var E=(o,e)=>[o[0]-e[0],o[1]-e[1]],N=(o,e)=>[o[0]+e[0],o[1]+e[1]],T=(o,e)=>[o[0]*e,o[1]*e],ae=(o,e)=>o[0]*e[0]+o[1]*e[1],G=(o,e)=>o[0]*e[1]-o[1]*e[0],se=o=>Math.hypot(o[0],o[1]),O=o=>{let e=se(o)||1;return[o[0]/e,o[1]/e]},it=o=>[-o[1],o[0]],st=o=>[o[1],-o[0]];function at(o,e,t=[]){let n=e.eps??.005,r=[],i=t.filter(c=>Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1])>.05),s=[],u=c=>{for(let p=0;p<s.length;p++)if(Math.abs(s[p][0]-c[0])<=n&&Math.abs(s[p][1]-c[1])<=n)return p;return s.push([c[0],c[1]]),s.length-1},a=[];for(let c of o){let p=c.points;if(p.length<3||Math.abs(Pe(p))<1e-6)continue;let b=Pe(p)>0,f=p.map(u);for(let v=0;v<p.length;v++){let S=f[v],$=f[(v+1)%p.length];S!==$&&a.push(b?{u:S,v:$,room:c.id,edge:v,forward:!0}:{u:$,v:S,room:c.id,edge:v,forward:!1})}}let l=i.map(c=>[u(c.a),u(c.b)]),d=new Set;for(let c of o){let p=c.points;p.length<3||(c.wall_splits??[]).forEach((b,f)=>{if(!b||f>=p.length)return;let v=p[f],S=E(p[(f+1)%p.length],v),$=se(S);for(let P of b)P>n&&P<$-n&&d.add(u(N(v,T(S,P/$))))})}let m=[];for(let c of a){let p=s[c.u],b=s[c.v],f=E(b,p),v=se(f),S=T(f,1/v),$=[];for(let A=0;A<s.length;A++){if(A===c.u||A===c.v)continue;let R=E(s[A],p),C=ae(R,S);C<=n||C>=v-n||Math.abs(G(S,R))<=n&&$.push({t:C,id:A})}$.sort((A,R)=>A.t-R.t);let P=[{t:0,id:c.u},...$,{t:v,id:c.v}];for(let A=0;A+1<P.length;A++){let R=P[A],C=P[A+1],le=c.forward?R.t:v-C.t,ft=c.forward?C.t:v-R.t;m.push({u:R.id,v:C.id,room:c.room,edge:c.edge,t0:le,t1:ft})}}let h=new Map;for(let c of m){let p=c.u<c.v?`${c.u}-${c.v}`:`${c.v}-${c.u}`,b=h.get(p);b||h.set(p,b=[]),b.push(c)}let w=c=>({room_id:c.room,edge:c.edge,t0:c.t0,t1:c.t1}),_=new Map;for(let c of m){let p=`${c.room}:${c.edge}`;_.set(p,[..._.get(p)??[],c.t0].sort((b,f)=>b-f))}let k=c=>{var f,v;let p=(v=(f=o.find(S=>S.id===c.room))==null?void 0:f.wall_heights)==null?void 0:v[c.edge];if(!Array.isArray(p))return p;let b=_.get(`${c.room}:${c.edge}`)??[];return p[b.indexOf(c.t0)]??null},y=c=>{let p=c.map(k).filter(f=>typeof f=="number"&&f>0);if(p.length)return Math.min(...p);let b=c.map(f=>{var v;return(v=o.find(S=>S.id===f.room))==null?void 0:v.ceiling_height});return b.every(f=>typeof f=="number"&&f>0)?Math.max(...b):void 0},M=c=>{let p=c.map(b=>{var f,v;return(v=(f=o.find(S=>S.id===b.room))==null?void 0:f.wall_thickness)==null?void 0:v[b.edge]}).filter(b=>typeof b=="number"&&b>0);return p.length?Math.max(...p):void 0},Y=c=>{var p;for(let b of c){let f=o.find(P=>P.id===b.room),v=(p=f==null?void 0:f.wall_slopes)==null?void 0:p[b.edge];if(!f||!v)continue;let S=f.points[b.edge],$=f.points[(b.edge+1)%f.points.length];return{p:[S[0],S[1]],q:[$[0],$[1]],h0:Math.max(.05,v[0]),h1:Math.max(.05,v[1])}}},W=c=>c.some(p=>k(p)===0),I=c=>{let p=Y(c);return p?{height:Math.max(p.h0,p.h1),slope:p}:{height:y(c)}},Z=[],J=[],L=[];for(let c of h.values()){let p=c[0],b=c.find(f=>f!==p&&f.u===p.v&&f.v===p.u&&f.room!==p.room);for(let f of c)f!==p&&f!==b&&f.room!==p.room&&r.push(`overlap:${p.room}:${f.room}`);if(W(b?[p,b]:[p])){b&&Z.push([p.room,b.room]),J.push(b?[w(p),w(b)]:[w(p)]);continue}if(b){let f=M([p,b])??e.interior;L.push({a:p.u,b:p.v,left:f/2,right:f/2,exterior:!1,roomLeft:p.room,roomRight:b.room,sources:[w(p),w(b)],...I([p,b])})}else L.push({a:p.u,b:p.v,left:0,right:M([p])??e.exterior,exterior:!0,roomLeft:p.room,roomRight:null,sources:[w(p)],...I([p])})}let He=c=>O(E(s[c.b],s[c.a]));for(let c of L){if(c.exterior||c.free)continue;let p=new Set;for(let f of[c.a,c.b])for(let v of L)!v.exterior||v.free||v.a!==f&&v.b!==f||Math.abs(G(He(c),He(v)))>1e-6||(v.roomLeft===c.roomLeft?p.add("left"):v.roomLeft===c.roomRight&&p.add("right"));if(p.size!==1)continue;let b=c.left+c.right;p.has("left")?(c.left=0,c.right=b):(c.left=b,c.right=0)}i.forEach((c,p)=>{var C;let[b,f]=l[p];if(b===f)return;let v=[(c.a[0]+c.b[0])/2,(c.a[1]+c.b[1])/2],S=((C=o.find(le=>le.points.length>=3&&j(v,le.points)))==null?void 0:C.id)??null,$=(c.thickness??e.interior)/2,P=typeof c.height=="number"&&c.height>0?c.height:void 0,A=c.slope,R=A?{p:[c.a[0],c.a[1]],q:[c.b[0],c.b[1]],h0:Math.max(.05,A[0]),h1:Math.max(.05,A[1])}:void 0;L.push({free:c.id,a:b,b:f,left:$,right:$,exterior:!1,roomLeft:S,roomRight:S,sources:[],...R?{height:Math.max(R.h0,R.h1),slope:R}:{height:P}})}),L=Ot(L,s,d);let Te=Ht(L,s);return{walls:L.map((c,p)=>{let b=s[c.a],f=s[c.b],v=Te.get(`${p}:a`),S=Te.get(`${p}:b`),$=Tt([v.right,S.left,f,S.right,v.left,b],1e-6);return{id:Ct(b,f),a:[b[0],b[1]],b:[f[0],f[1]],left:c.left,right:c.right,exterior:c.exterior,roomLeft:c.roomLeft,roomRight:c.roomRight,sources:c.sources,footprint:$,...c.free?{free:c.free}:{},...c.height!==void 0?{height:c.height}:{},...c.slope?{slope:c.slope}:{}}}),warnings:[...new Set(r)],open:Z,noWalls:J}}function Ct(o,e){let t=i=>Math.round(i*100),[n,r]=o[0]<e[0]||o[0]===e[0]&&o[1]<=e[1]?[o,e]:[e,o];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Ce(o){return{...o,a:o.b,b:o.a,left:o.right,right:o.left,roomLeft:o.roomRight,roomRight:o.roomLeft}}function Ot(o,e,t=new Set){let n=o.slice(),r=!0;for(;r;){r=!1;let i=new Map;n.forEach((s,u)=>{for(let a of[s.a,s.b]){let l=i.get(a);l||i.set(a,l=[]),l.push(u)}});for(let[s,u]of i){if(u.length!==2||t.has(s))continue;let a=n[u[0]],l=n[u[1]],d=a.b!==s&&l.a!==s;if(a.b!==s&&(a=Ce(a)),l.a!==s&&(l=Ce(l)),a.a===l.b)continue;let m=O(E(e[a.b],e[a.a])),h=O(E(e[l.b],e[l.a]));if(Math.abs(G(m,h))>1e-6||ae(m,h)<=0||a.free||l.free||a.height!==l.height||a.slope||l.slope||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let w={...a,b:l.b,sources:Lt(a.sources,l.sources)},_=d?Ce(w):w,k=n.filter((y,M)=>M!==u[0]&&M!==u[1]);k.push(_),n.length=0,n.push(...k),r=!0;break}}return n}function Lt(o,e){let t=o.map(n=>({...n}));for(let n of e){let r=t.find(i=>i.room_id===n.room_id&&i.edge===n.edge&&(Math.abs(i.t1-n.t0)<1e-6||Math.abs(n.t1-i.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Ht(o,e){let t=new Map;o.forEach((r,i)=>{let s=O(E(e[r.b],e[r.a])),u=[[r.a,{key:`${i}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${i}:b`,d:T(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[a,l]of u){let d=t.get(a);d||t.set(a,d=[]),d.push(l)}});let n=new Map;for(let[r,i]of t){let s=e[r];i.sort((l,d)=>l.angle-d.angle);let u=l=>({left:N(s,T(it(l.d),l.left)),right:N(s,T(st(l.d),l.right))});for(let l of i)n.set(l.key,u(l));if(i.length<2)continue;let a=4*Math.max(...i.map(l=>Math.max(l.left,l.right)))+1e-9;for(let l=0;l<i.length;l++){let d=i[l],m=i[(l+1)%i.length],h=N(s,T(it(d.d),d.left)),w=N(s,T(st(m.d),m.right)),_=G(d.d,m.d);if(Math.abs(_)<1e-4)continue;let k=G(E(w,h),m.d)/_,y=N(h,T(d.d,k));se(E(y,s))>a||(n.get(d.key).left=y,n.get(m.key).right=y)}}return n}function Tt(o,e){let t=o.filter((r,i)=>se(E(r,o[(i+1)%o.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let i=t[(r+t.length-1)%t.length],s=t[r],u=t[(r+1)%t.length],a=E(s,i),l=E(u,s);if(Math.abs(G(O(a),O(l)))<1e-7&&ae(a,l)>0){t=t.filter((d,m)=>m!==r),n=!0;break}}}return t}function lt(o,e,t){let n=o.points[e],r=o.points[(e+1)%o.points.length],i=O(E(r,n));return N(n,T(i,t))}function ct(o,e,t){if(o.wall){let r=t.find(u=>u.id===o.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let i=O(E(r.b,r.a));return{room:{id:o.room_id,name:"",area_id:null,points:[r.a,r.b,N(r.a,[-i[1],i[0]])]},edge:0}}let n=e.find(r=>r.id===o.room_id);return n&&o.edge<n.points.length?{room:n,edge:o.edge}:null}function ut(o,e,t){if(!e.wall)return Ft(o,t.room,t.edge,e.offset);let n=o.find(i=>i.free===e.wall);if(!n)return null;let r=lt(t.room,0,e.offset);return{wall:n,s:ae(E(r,n.a),O(E(n.b,n.a)))}}function Ft(o,e,t,n){for(let r of o){if(!r.sources.find(u=>u.room_id===e.id&&u.edge===t&&n>=u.t0-1e-6&&n<=u.t1+1e-6))continue;let s=lt(e,t,n);return{wall:r,s:ae(E(s,r.a),O(E(r.b,r.a)))}}return null}function dt(o){return o.floors.flatMap(e=>me(e).map(t=>({id:t.id,name:t.name,floor:e.name,area_id:t.area_id??null})))}function pt(o){var n;let e=[],t=new Set;for(let r of o.floors){let i=at(r.rooms,{exterior:o.settings.wall_exterior,interior:o.settings.wall_interior},r.walls??[]).walls;for(let s of r.openings){if(s.type==="window"&&!(s.sill<.1))continue;let u=ct(s,r.rooms,r.walls??[]),a=u&&ut(i,s,u),l=a==null?void 0:a.wall.roomLeft,d=a==null?void 0:a.wall.roomRight;if(a&&(!l||!d)){let h=a.wall,w=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1])||1,_=[(h.b[0]-h.a[0])/w,(h.b[1]-h.a[1])/w],k=l?-1:1,y=(k>0?h.left:h.right)+.5,M=a.s,Y=[h.a[0]+_[0]*M-_[1]*k*y,h.a[1]+_[1]*M+_[0]*k*y],W=(n=me(r).find(I=>I.outdoor&&j(Y,I.points)))==null?void 0:n.id;l?d=W:l=W}if(!l||!d||l===d)continue;let m=[l,d].sort().join("|");t.has(m)||(t.add(m),e.push([l,d]))}}return e}function Oe(o,e,t,n){var i;let r=o.floors.find(s=>s.id===e);return r?((i=me(r).find(s=>j([t,n],s.points)))==null?void 0:i.id)??null:null}var zt="/neonplan3d_static/keys/index.html",Nt={title:"Configurar localizaci\xF3n",lab:"Lab",close:"Cerrar",s_scanners:"1 \xB7 Receptores",s_devices:"2 \xB7 Dispositivos",s_walk:"3 \xB7 Aprendizaje",s_live:"4 \xB7 En vivo",no_bt:"Home Assistant no tiene Bluetooth configurado. Basta con Shelly (Gen2/3: escaneo Bluetooth pasivo), proxies Bluetooth de ESPHome o un adaptador USB.",scanners_intro:"Estos son todos los receptores Bluetooth que conoce Home Assistant. Indica en qu\xE9 habitaci\xF3n est\xE1 cada uno.",not_placed:"\u2013 elige habitaci\xF3n \u2013",hint_room:"La se\xF1al dice: {room} \u2013 usar",coverage:"Habitaciones sin receptor propio \u2013 el aprendizaje las hace reconocibles igualmente:",devices_intro:"\xBFQu\xE9 dispositivos quieres localizar? Mejor lo que siempre llevas encima \u2013 el reloj en la mu\xF1eca es ideal.",known_keys:"iPhone y Apple Watch con clave (de \u201CPrivate BLE Device\u201D en Home Assistant):",add:"A\xF1adir",added:"\u2713 a\xF1adido",remove:"Quitar",person:"Persona",none:"ninguna",irk_help:"\xBFFalta el iPhone o el Apple Watch? Necesitan su clave (IRK) como \u201CPrivate BLE Device\u201D en Home Assistant \u2013 el manual muestra las formas m\xE1s sencillas.",manual:"Manual",voice_hint:"Pregunta tambi\xE9n por voz: \u201C\xBFD\xF3nde est\xE1 mi iPhone?\u201D, \u201C\xBFD\xF3nde est\xE1 Luc\xEDa?\u201D, \u201C\xBFQui\xE9n est\xE1 en casa?\u201D, \u201CHaz sonar mi iPhone\u201D.",look_hint:"En 3D las personas aparecen como figura; en el men\xFA \u2699 de la vista: Personas \u2192 figura, chincheta o desactivado.",ring:"Hacer sonar",ring_hint:"La app de Home Assistant en este m\xF3vil \u2013 as\xED funciona \u201CHaz sonar mi iPhone\u201D.",near_title:"Buscar dispositivo cercano",key_title:"Pegar clave",key_name:"Nombre (p. ej. iPhone de Luc\xEDa)",key_value:"Clave (IRK, 32 caracteres)",key_bad:"No es una clave v\xE1lida (32 caracteres hex o Base64).",helper_title:"\u{1F511} Asistente de clave",helper_none:"\xBFA\xFAn no tienes clave? Con un ESP32 (unos 5 \u20AC) CasaNeon la lee en tres minutos: iPhone, Apple Watch y Android, sin Mac.",helper_build:"Configurar el asistente de clave",helper_found:"Asistente de clave encontrado: {name}",helper_watch:"Para un Apple Watch",helper_phone:"Para un iPhone",helper_watch_steps:"En el reloj: Ajustes \u2192 Bluetooth \u2192 en \xABDispositivos de salud\xBB toca \xABNeonPlan Key\xBB y enl\xE1zalo.",helper_phone_steps:"En el m\xF3vil: Ajustes \u2192 Bluetooth \u2192 enlaza \xABNeonPlan Key\xBB (aparece como teclado).",helper_key:"Clave le\xEDda:",helper_wait:"Esperando el enlace \u2026",helper_after:"Despu\xE9s, elimina el dispositivo \xABNeonPlan Key\xBB de los ajustes de Bluetooth.",helper_next:"\u{1F504} Siguiente dispositivo",helper_next_hint:"Toca antes de cada dispositivo nuevo: el asistente recibe una nueva identidad Bluetooth y un dispositivo ya emparejado deja de conectarse.",helper_name:"Nombre de este dispositivo",helper_irk:"Clave (IRK) le\xEDda del dispositivo que acaba de emparejarse:",helper_belongs:"Pertenece a: {name}",helper_add_as:"A\xF1adir como \xAB{name}\xBB",helper_added:"\u2713 \xAB{name}\xBB ya est\xE1 en la lista de arriba.",pbd_rename:"Consejo: c\xE1mbiale el nombre en Home Assistant (Dispositivos y servicios \u2192 Private BLE Device) y aparecer\xE1 aqu\xED.",carry:"Llevo conmigo:",offline:"no disponible ahora",pbd_summary:"\xBFVienes de Bermuda? Usar claves de Home Assistant",worn:"llevado",worn_hint:"Llevado encima (reloj, pulsera): indica d\xF3nde est\xE1 la persona; un m\xF3vil puede estar en cualquier sitio.",look_title:"Personas en 3D",look_figure:"Figura",look_pin:"Pin",look_off:"No",near_summary:"A\xF1adir un m\xF3vil Android o un llavero",android_label:"M\xF3vil Android (app de HA)",paste_summary:"Pegar una clave que ya tienes",helper_install:"Instalar en un ESP32",helper_pitch:"Para iPhone y Apple Watch: un ESP32 de unos 5 \u20AC se convierte en el asistente de claves en tres minutos, instalado desde el navegador, sin Mac. Luego empareja aqu\xED.",near_intro:"Acerca el dispositivo a un receptor. Android: activa \u201CBLE Transmitter\u201D en la app de Home Assistant. Llaveros: pulsa una vez.",near_empty:"A\xFAn nada fuerte cerca \u2026",walk_intro:"Entra en cada habitaci\xF3n, t\xF3cala y camina despacio durante 90 segundos \u2013 tambi\xE9n por las esquinas. Lleva todos los dispositivos.",learning:"Aprendiendo {room} \u2026 quedan {left} s",stop:"Cancelar",samples:"{n} muestras",quality:"Comprobar precisi\xF3n",quality_result:"Precisi\xF3n: {p}",relearn_all:"Volver a aprender todo",live_intro:"As\xED te ve CasaNeon ahora mismo. Camina un poco y comprueba si acierta.",enabled:"Localizaci\xF3n activada",admins_only:"Mostrar personas solo a administradores",not_heard:"sin se\xF1al",next:"Siguiente",need_device:"Primero a\xF1ade un dispositivo.",app_title:"Android con la app de Home Assistant",app_none:"\xBFM\xF3vil Android? En la app de Home Assistant: Ajustes \u2192 Companion app \u2192 Gestionar sensores \u2192 activa \xABBLE Transmitter\xBB. Luego aparece aqu\xED solo.",app_off:"El transmisor est\xE1 apagado: act\xEDvalo en la app",app_power:"Potencia de emisi\xF3n demasiado baja: ponla en \xABHigh\xBB en la app",app_mode:"Pon el modo de emisi\xF3n en \xABLow latency\xBB en la app",helper_android:"No emparejes aqu\xED m\xF3viles ni tabletas Android: no env\xEDan esta clave en segundo plano. Para Android usa el BLE Transmitter de la app de Home Assistant (abajo).",unheard:"\u26A0 sin se\xF1al",unheard_hint:"Ahora mismo ning\xFAn receptor oye este dispositivo. \xBFEst\xE1 encendido y emitiendo? Android: el BLE Transmitter de la app de Home Assistant.",fly:"Volar a las habitaciones con \xAB\xBFD\xF3nde est\xE1 \u2026?\xBB y \xAB\xBFQui\xE9n est\xE1 en casa?\xBB",fly_hint:"Las vistas abiertas de CasaNeon vuelan a la habitaci\xF3n de la respuesta y, con \xAB\xBFQui\xE9n est\xE1 en casa?\xBB, a todas por turno. Un toque lo detiene. No para personas mientras solo se muestren a administradores."};function mt(o){let e=o.trim().replace(/^irk:/i,""),t=e.replace(/[\s:-]/g,"");if(/^[0-9a-f]{32}$/i.test(t))return t.toLowerCase();try{let n=atob(e.replace(/\s/g,""));if(n.length===16)return[...n].map(r=>r.charCodeAt(0).toString(16).padStart(2,"0")).join("")}catch{}return null}var Wt=/^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})_(\d{1,5})_(\d{1,5})$/i;function It(o){var n,r,i,s;let e=[],t=u=>u.toString(16).padStart(4,"0");for(let[u,a]of Object.entries(o.states)){if(!u.startsWith("sensor."))continue;let l=a.attributes??{};if(!("Transmitting power"in l))continue;let d=Wt.exec(String(l.id??""));if(!d)continue;let m=Number(d[6]),h=Number(d[7]);if(m>65535||h>65535)continue;let w=((r=(n=o.entities)==null?void 0:n[u])==null?void 0:r.device_id)??null,_=w?(i=o.devices)==null?void 0:i[w]:void 0,k=String(l.friendly_name??u).replace(/\s*BLE[\s_-]*Transmitter\s*$/i,""),y=w&&((s=Object.entries(o.states).find(([M,Y])=>{var W;return M.startsWith("person.")&&(((W=Y.attributes)==null?void 0:W.device_trackers)??[]).some(I=>{var Z,J;return((J=(Z=o.entities)==null?void 0:Z[I])==null?void 0:J.device_id)===w})}))==null?void 0:s[0])||null;e.push({entity:u,name:(_==null?void 0:_.name_by_user)||(_==null?void 0:_.name)||k,key:(d.slice(1,6).join("")+t(m)+t(h)).toLowerCase(),state:String(a.state),power:String(l["Transmitting power"]??""),mode:String(l["Advertise mode"]??""),person:y})}return e.sort((u,a)=>u.name.localeCompare(a.name))}var Le=class extends z{static properties={hass:{attribute:!1},building:{attribute:!1},_step:{state:!0},_cfg:{state:!0},_near:{state:!0},_live:{state:!0},_quality:{state:!0},_error:{state:!0}};constructor(){super(),this._step="scanners",this._cfg=null,this._near=[],this._live=null,this._quality=null,this._error=""}timer=0;hassSource=null;setLook=null;unsub=null;get t(){return Nt}tr(e,t){return e.replace(/\{(\w+)\}/g,(n,r)=>String(t[r]??""))}get rooms(){return dt(this.building).map(e=>{var t,n;return e.name||!e.area_id?e:{...e,name:((n=(t=this.hass.areas)==null?void 0:t[e.area_id])==null?void 0:n.name)??e.area_id}})}connectedCallback(){super.connectedCallback(),this.load().catch(e=>this._error=`load: ${(e==null?void 0:e.stack)??String(e)}`),this.timer=window.setInterval(()=>{this.tick()},1e3),this.hass.connection.subscribeMessage(e=>this._live=e,{type:"neonplan3d/locate/subscribe"}).then(e=>this.unsub=e).catch(()=>{})}disconnectedCallback(){var e;super.disconnectedCallback(),window.clearInterval(this.timer),(e=this.unsub)==null||e.call(this)}async call(e){try{return this._error="",await this.hass.callWS(e)}catch(t){return this._error=t.message??String(t),null}}async load(){var r;let e=await this.call({type:"neonplan3d/locate/config"});if(!e)return;let t={...e.scanner_rooms},n=!1;for(let i of e.scanners){if(t[i.source])continue;let s=this.guessRoom(i)??((r=e.scanner_hints)==null?void 0:r[i.source])??null;s&&(t[i.source]=s,n=!0)}this._cfg={...e,scanner_rooms:t},n&&await this.save({scanner_rooms:t})}guessRoom(e){var l;let t=d=>{var m,h;return typeof d=="string"&&!!e.device_id&&((h=(m=this.hass.entities)==null?void 0:m[d])==null?void 0:h.device_id)===e.device_id};if(e.device_id)for(let d of this.building.floors){for(let m of d.placements){let h=t(m.entity_id)?Oe(this.building,d.id,m.x,m.z):null;if(h)return h}for(let m of d.furniture){if(!Object.values(m).some(t))continue;let h=Oe(this.building,d.id,m.x,m.z);if(h)return h}}let n=e.device_id??((l=Object.values(this.hass.devices??{}).find(d=>[d.name_by_user,d.name].some(m=>m&&m.toLowerCase()===e.name.toLowerCase())))==null?void 0:l.id)??null,r=n?Object.values(this.hass.entities??{}).filter(d=>d.device_id===n&&d.area_id).map(d=>d.area_id):[],i=e.area_id??nt(this.hass,n)??r[0]??null;if(i){let d=this.rooms.find(m=>m.area_id===i);if(d)return d.id}let s=d=>d.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," "),u=` ${s(e.name)} `,a=this.rooms.filter(d=>s(d.name).trim().length>=3&&u.includes(s(d.name).trim()));return a.sort((d,m)=>s(m.name).length-s(d.name).length),a.length&&a.filter(d=>s(d.name)===s(a[0].name)).length===1?a[0].id:null}async save(e){let t=[];try{t=pt(this.building)}catch(r){console.warn("NeonPlan locate: no door graph",r)}let n=await this.call({type:"neonplan3d/locate/configure",rooms:this.rooms,doors:t,...e});n&&(this._cfg={...n,scanner_rooms:{...n.scanner_rooms}})}async tick(){var t;let e=(t=this.hassSource)==null?void 0:t.call(this);if(e&&e!==this.hass&&(this.hass=e),this._step==="devices"&&this.nearOpen){let n=await this.call({type:"neonplan3d/locate/nearby"});n&&(this._near=n.devices)}if(this._step==="walk"){let n=await this.call({type:"neonplan3d/locate/calibrate",action:"status"});n&&this._cfg&&(this._cfg={...this._cfg,samples:n.samples},this._live={...this._live??{running:!0,devices:[]},calibration:n.calibration})}}render(){let e=this.t,t=this._cfg,n=[["scanners",e.s_scanners],["devices",e.s_devices],["walk",e.s_walk],["live",e.s_live]];return g`<div class="box" role="dialog" aria-label=${e.title}>
      <header>
        <b>📡 ${e.title}</b>
        <button class="x" @click=${()=>this.remove()} aria-label=${e.close}>✕</button>
      </header>
      <nav>${n.map(([r,i])=>g`<button class=${this._step===r?"on":""} @click=${()=>this._step=r}>${i}</button>`)}</nav>
      ${this._error?g`<pre class="err">${this._error}</pre>`:x}
      ${t?t.bluetooth?this.renderStep(t):g`<p>${e.no_bt}</p>`:g`<p>…</p>`}
    </div>`}manualLink(){return ot()}renderStep(e){switch(this._step){case"scanners":return this.renderScanners(e);case"devices":return this.renderDevices(e);case"walk":return this.renderWalk(e);default:return this.renderLive(e)}}roomSelect(e,t){let n=[...new Set(this.rooms.map(r=>r.floor))];return g`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.not_placed}</option>
      ${n.map(r=>g`<optgroup label=${r}>${this.rooms.filter(i=>i.floor===r).map(i=>g`<option value=${i.id} ?selected=${i.id===e}>${i.name}</option>`)}</optgroup>`)}
    </select>`}renderScanners(e){let t=this.t,n=new Set(Object.values(e.scanner_rooms)),r=this.rooms.filter(i=>!n.has(i.id));return g`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${e.scanners.map(i=>{var s,u;return g`<li>
            <span><b>${i.name}</b><small>${i.offline?`\u26A0 ${t.offline}`:i.kind==="shelly"?"Shelly":i.kind==="esphome"?"ESPHome":"Bluetooth"}</small></span>
            ${this.roomSelect(e.scanner_rooms[i.source]??null,a=>{let l={...e.scanner_rooms};a?l[i.source]=a:delete l[i.source],this.save({scanner_rooms:l})})}
            ${(s=e.scanner_hints)!=null&&s[i.source]&&e.scanner_hints[i.source]!==e.scanner_rooms[i.source]?g`<button class="ghost" @click=${()=>{this.save({scanner_rooms:{...e.scanner_rooms,[i.source]:e.scanner_hints[i.source]}})}}>
                  ${this.tr(t.hint_room,{room:((u=this.rooms.find(a=>a.id===e.scanner_hints[i.source]))==null?void 0:u.name)??""})}
                </button>`:x}
          </li>`})}
      </ul>
      ${r.length?g`<p class="hint">${t.coverage} ${r.map(i=>i.name).join(", ")}</p>`:x}
      <p class="end"><button class="primary" @click=${()=>this._step="devices"}>${t.next} →</button></p>`}personSelect(e,t){let n=Object.keys(this.hass.states).filter(r=>r.startsWith("person."));return g`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.person}: ${this.t.none}</option>
      ${n.map(r=>g`<option value=${r} ?selected=${r===e}>${this.hass.states[r].attributes.friendly_name??r}</option>`)}
    </select>`}keyHelpers(){var t,n,r,i,s,u;let e=[];for(let[a,l]of Object.entries(this.hass.states)){let d=l.attributes.options;if(!a.startsWith("select.")||!Array.isArray(d)||!d.includes("Heart Sensor")||!d.includes("Keyboard"))continue;let m=(n=(t=this.hass.entities)==null?void 0:t[a])==null?void 0:n.device_id,h=(r=Object.values(this.hass.entities??{}).find(M=>M.device_id===m&&/_irk$/.test(M.entity_id)))==null?void 0:r.entity_id,w=h?(i=this.hass.states[h])==null?void 0:i.state:void 0,_=m?(s=this.hass.devices)==null?void 0:s[m]:void 0,k=(_==null?void 0:_.name_by_user)||(_==null?void 0:_.name)||String(l.attributes.friendly_name??a),y=((u=Object.values(this.hass.entities??{}).find(M=>M.device_id===m&&/_refresh_ble_identity$/.test(M.entity_id)))==null?void 0:u.entity_id)??null;e.push({name:k,select:a,option:l.state,irk:w?mt(w):null,ours:(_==null?void 0:_.model)==="neonplan_key"||/neonplan[ _]key/i.test(a),refresh:y})}return e.sort((a,l)=>Number(l.ours)-Number(a.ours))}notCarried=new Set;nearOpen=!1;helperId=null;helperName="";helperPerson=null;helperAdded=null;renderKeyHelper(e){var _,k;let t=this.t,n=this.keyHelpers(),r=n.find(y=>y.select===this.helperId)??n[0],i=g`<div class="helper-head">
        <h4>${t.helper_title}</h4>
        <a class="install" href=${zt} target="_blank" rel="noopener">⚡ ${t.helper_install} ↗</a>
      </div>
      <p class="hint">${t.helper_pitch}</p>
      <p class="hint">${t.helper_android}</p>`;if(!r)return i;let s=r.option==="Heart Sensor",u=y=>{this.hass.callService("select","select_option",{entity_id:r.select,option:y})},a=y=>y.match(/../g).reverse().join(""),l=y=>!!r.irk&&!!y&&(y.toLowerCase()===r.irk||y.toLowerCase()===a(r.irk)),d=((_=e.devices.find(y=>l(y.key)))==null?void 0:_.name)??null,m=((k=e.private_ble.find(y=>l(y.key)))==null?void 0:k.title)??null,h=this.helperName||(s?"Apple Watch":"iPhone"),w=y=>`${y.slice(0,4)}\u2026${y.slice(-4)}`;return g`${i}
      ${n.length>1?g`<p class="hint">
            <select
              @change=${y=>{this.helperId=y.target.value,this.requestUpdate()}}
            >
              ${n.map(y=>g`<option value=${y.select} ?selected=${y.select===r.select}>${y.name}</option>`)}
            </select>
          </p>`:g`<p class="hint">${this.tr(t.helper_found,{name:r.name})}</p>`}
      <div class="row">
        <button class=${s?"on":""} @click=${()=>u("Heart Sensor")}>⌚ ${t.helper_watch}</button>
        <button class=${s?"":"on"} @click=${()=>u("Keyboard")}>📱 ${t.helper_phone}</button>
      </div>
      <div class="row">
        <input
          placeholder=${t.helper_name}
          title=${t.helper_name}
          .value=${this.helperName}
          @input=${y=>this.helperName=y.target.value}
        />
        ${this.personSelect(this.helperPerson,y=>{this.helperPerson=y,this.requestUpdate()})}
      </div>
      <p class="hint">${s?t.helper_watch_steps:t.helper_phone_steps}</p>
      <ul class="list">
        <li>
          <span>
            <b>${t.helper_irk}</b>
            <small>${r.irk?w(r.irk):t.helper_wait}</small>
            ${d||m?g`<small>${this.tr(t.helper_belongs,{name:d??m??""})}</small>`:x}
          </span>
          ${r.irk&&!d?g`<button
                class="primary"
                @click=${()=>{this.addDevice(e,{name:h,kind:"irk",key:r.irk},this.helperPerson),this.helperAdded=h,this.helperName=""}}
              >
                ${this.tr(t.helper_add_as,{name:h})}
              </button>`:x}
        </li>
      </ul>
      ${this.helperAdded?g`<p class="hint">${this.tr(t.helper_added,{name:this.helperAdded})}</p>`:x}
      <p class="hint">${t.helper_after}</p>
      ${r.refresh?g`<p class="end">
            <small>${t.helper_next_hint}</small>
            <button @click=${()=>{this.hass.callService("button","press",{entity_id:r.refresh})}}>${t.helper_next}</button>
          </p>`:x}`}notifySelect(e,t){let n=this.hass.services,r=Object.keys((n==null?void 0:n.notify)??{}).filter(i=>i.startsWith("mobile_app_"));return r.length?g`<select title=${this.t.ring_hint} @change=${i=>t(i.target.value||null)}>
      <option value="" ?selected=${!e}>🔔 ${this.t.ring}: ${this.t.none}</option>
      ${r.map(i=>g`<option value=${`notify.${i}`} ?selected=${e===`notify.${i}`}>🔔 ${i.replace(/^mobile_app_/,"").replace(/_/g," ")}</option>`)}
    </select>`:x}unheardBadge(e){let t=this._live;if(!(t!=null&&t.running))return x;let n=t.devices.find(r=>r.id===e);return!n||n.room||n.last_seen&&Date.now()/1e3-n.last_seen<120?x:g`<small class="warn" title=${this.t.unheard_hint}>${this.t.unheard}</small>`}addDevice(e,t,n=null){let r=`${t.kind}_${t.key.replace(/[^a-z0-9]/gi,"").slice(-10).toLowerCase()}`;e.devices.some(i=>i.id===r)||this.save({devices:[...e.devices,{...t,id:r,person:n,icon:null}]})}renderDevices(e){let t=this.t,n=s=>e.devices.some(u=>u.key.toLowerCase()===s.toLowerCase()),r=(s,u)=>{this.save({devices:e.devices.map(a=>a.id===s?{...a,...u}:a)})},i=It(this.hass);return g`<p>${t.devices_intro}</p>
      ${e.devices.length?g`<ul class="list">
            ${e.devices.map(s=>g`<li>
                <input .value=${s.name} @change=${u=>r(s.id,{name:u.target.value})} />
                ${this.personSelect(s.person,u=>r(s.id,{person:u}))}
                ${this.notifySelect(s.notify??null,u=>r(s.id,{notify:u}))}
                <label class="row" title=${t.worn_hint}
                  ><input type="checkbox" .checked=${!!s.wearable} @change=${u=>r(s.id,{wearable:u.target.checked})} />⌚
                  ${t.worn}</label
                >
                ${this.unheardBadge(s.id)}
                <button @click=${()=>{this.save({devices:e.devices.filter(u=>u.id!==s.id)})}}>${t.remove}</button>
              </li>`)}
          </ul>`:x}
      ${i.length?g`<h4>📱 ${t.app_title}</h4>
            <ul class="list">
              ${i.map(s=>{let u=[s.state!=="Transmitting"?t.app_off:null,s.power==="ultraLow"||s.power==="low"?t.app_power:null,s.mode==="lowPower"?t.app_mode:null].filter(a=>!!a);return g`<li>
                  <span
                    ><b>${s.name}</b>${u.map(a=>g`<small class="warn">⚠ ${a}</small>`)}</span
                  >
                  ${n(s.key)?g`<small>${t.added}</small>`:g`<button @click=${()=>this.addDevice(e,{name:s.name,kind:"ibeacon",key:s.key},s.person)}>${t.add}</button>`}
                </li>`})}
            </ul>`:x}
      ${this.renderKeyHelper(e)}
      <details
        class="pbd"
        @toggle=${s=>{this.nearOpen=s.target.open}}
      >
        <summary>📱 ${t.near_summary}</summary>
        <p class="hint">${t.near_intro}</p>
        ${i.length?x:g`<p class="hint">${t.app_none}</p>`}
        <ul class="list">
          ${(()=>{let s=new Set,u=this._near.filter(a=>a.ibeacon?a.rssi>=-90:!a.random&&a.rssi>=-68).sort((a,l)=>+!!l.ibeacon-+!!a.ibeacon||l.rssi-a.rssi).filter(a=>!a.ibeacon||!s.has(a.ibeacon)&&!!s.add(a.ibeacon)).slice(0,5);return u.length?u.map(a=>g`<li>
                    <span><b>${a.ibeacon?`\u{1F4F1} ${t.android_label}`:a.name??a.address}</b><small>${a.rssi} dBm</small></span>
                    ${n(a.ibeacon??a.address)?g`<small>${t.added}</small>`:g`<button @click=${()=>this.addDevice(e,a.ibeacon?{name:t.android_label,kind:"ibeacon",key:a.ibeacon}:{name:a.name??a.address,kind:"mac",key:a.address})}>${t.add}</button>`}
                  </li>`):g`<li><small>${t.near_empty}</small></li>`})()}
        </ul>
      </details>
      <details class="pbd">
        <summary>🔑 ${t.paste_summary}</summary>
      <div class="row">
        <input id="keyname" placeholder=${t.key_name} />
        <input id="keyvalue" placeholder=${t.key_value} spellcheck="false" autocomplete="off" />
        <button
          @click=${()=>{let s=this.renderRoot.querySelector("#keyname").value.trim(),u=mt(this.renderRoot.querySelector("#keyvalue").value);if(!u){this._error=t.key_bad;return}this._error="",this.addDevice(e,{name:s||"iPhone",kind:"irk",key:u})}}
        >
          ${t.add}
        </button>
      </div>
      </details>
      <p class="hint">${t.irk_help} <a href=${this.manualLink()} target="_blank" rel="noopener">${t.manual} ↗</a></p>
      <p class="end"><button class="primary" ?disabled=${!e.devices.length} @click=${()=>this._step="walk"}>${t.next} →</button></p>`}renderWalk(e){var u,a;let t=this.t,n=((u=this._live)==null?void 0:u.calibration)??null;if(!e.devices.length)return g`<p>${t.need_device}</p>`;let r=l=>Math.max(0,...e.devices.map(d=>{var m;return((m=e.samples[d.id])==null?void 0:m[l])??0})),i=[...new Set(this.rooms.map(l=>l.floor))],s=this._quality;return g`<p>${t.walk_intro}</p>
      ${e.devices.length>1?g`<div class="row">
            <b>${t.carry}</b>
            ${e.devices.map(l=>g`<label class="row"
                ><input
                  type="checkbox"
                  .checked=${!this.notCarried.has(l.id)}
                  @change=${d=>{d.target.checked?this.notCarried.delete(l.id):this.notCarried.add(l.id),this.requestUpdate()}}
                />
                ${l.name} ${this.unheardBadge(l.id)}</label
              >`)}
          </div>`:x}
      ${n?g`<div class="learning">
            ${this.tr(t.learning,{room:((a=this.rooms.find(l=>l.id===n.room))==null?void 0:a.name)??"",left:n.left})}
            <div class="bar"><i style="width:${Math.round((90-n.left)/90*100)}%"></i></div>
            <button @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"stop"})}}>${t.stop}</button>
          </div>`:x}
      ${i.map(l=>g`<h4>${l}</h4>
          <div class="rooms">
            ${this.rooms.filter(d=>d.floor===l).map(d=>{let m=r(d.id),h=s&&m>0?e.devices.map(_=>{var k;return(k=s[_.id])==null?void 0:k.rooms[d.id]}).filter(_=>typeof _=="number"):[],w=h.length?Math.min(...h):null;return g`<button
                  class=${(n==null?void 0:n.room)===d.id?"on":m>=30?"done":""}
                  ?disabled=${!!n}
                  @click=${async()=>{let _=e.devices.filter(y=>!this.notCarried.has(y.id)).map(y=>y.id),k=await this.call({type:"neonplan3d/locate/calibrate",action:"start",room:d.id,seconds:90,devices:_});k&&(this._live={...this._live??{running:!0,devices:[]},calibration:k.calibration}),k&&!e.enabled&&await this.save({enabled:!0})}}
                >
                  ${m>=30?"\u2713 ":""}${d.name}<small>${this.tr(t.samples,{n:m})}${w!==null?` \xB7 ${Math.round(w*100)} %`:""}</small>
                </button>`})}
          </div>`)}
      <p class="end">
        <button @click=${async()=>this._quality=await this.call({type:"neonplan3d/locate/quality"})}>${t.quality}</button>
        ${s?g`<b>${this.tr(t.quality_result,{p:e.devices.map(l=>{var d;return`${l.name} ${((d=s[l.id])==null?void 0:d.overall)!=null?Math.round(s[l.id].overall*100):"\u2013"} %`}).join(" \xB7 ")})}</b>`:x}
        <button class="primary" @click=${()=>this._step="live"}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"clear"}).then(()=>this.load())}}>${t.relearn_all}</button></p>`}renderLive(e){let t=this.t,n=this._live,r=i=>{var s;return(s=this.rooms.find(u=>u.id===i))==null?void 0:s.name};return g`<p>${t.live_intro}</p>
      <p class="hint">${t.voice_hint}</p>
      <label class="row"><input type="checkbox" .checked=${e.enabled} @change=${i=>{this.save({enabled:i.target.checked})}} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${e.admins_only} @change=${i=>{this.save({admins_only:i.target.checked})}} /> ${t.admins_only}</label>
      <label class="row" title=${t.fly_hint}
        ><input type="checkbox" .checked=${e.fly!==!1} @change=${i=>{this.save({fly:i.target.checked})}} /> ${t.fly}</label
      >
      ${this.setLook?g`<div class="row">
            <b>${t.look_title}</b>
            ${["figure","pin","off"].map(i=>g`<button
                class=${(this.building.settings.person_look??"figure")===i?"on":""}
                @click=${()=>{var s;(s=this.setLook)==null||s.call(this,i),this.building={...this.building,settings:{...this.building.settings,person_look:i==="figure"?null:i}}}}
              >
                ${i==="figure"?t.look_figure:i==="pin"?t.look_pin:t.look_off}
              </button>`)}
          </div>`:x}
      <ul class="list big">
        ${((n==null?void 0:n.devices)??[]).map(i=>g`<li>
            <span><b>${i.name}</b></span>
            <span>${i.room?g`<b class="room">${r(i.room)}</b> <small>${Math.round((i.probability??0)*100)} %</small>`:g`<small>${t.not_heard}</small>`}</span>
          </li>`)}
      </ul>`}static styles=he`
    :host {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      background: #02060fcc;
      font: 14px/1.4 system-ui, sans-serif;
      color: #e6f7ff;
    }
    .box {
      width: min(640px, calc(100vw - 16px));
      max-height: calc(100vh - 16px);
      overflow: auto;
      background: #0b1120;
      border: 1px solid #37e0ff66;
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 10px 40px #000a;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header small {
      font-weight: 400;
      color: #ffb86b;
      margin-left: 6px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 10px 0;
    }
    button,
    select,
    input {
      font: inherit;
      color: #e6f7ff;
      background: #16233d;
      border: 1px solid #37e0ff44;
      border-radius: 8px;
      padding: 7px 10px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.on,
    button.primary {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
    }
    button.done {
      border-color: #5dd39e;
    }
    button.ghost {
      background: transparent;
    }
    .x {
      background: transparent;
      border: none;
      font-size: 18px;
    }
    .list {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      display: grid;
      gap: 6px;
    }
    .list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      background: #101a2e;
      border-radius: 10px;
      padding: 8px 10px;
    }
    .list li span {
      display: flex;
      flex-direction: column;
    }
    .list.big li {
      font-size: 16px;
    }
    small {
      opacity: 0.75;
      font-size: 12px;
    }
    .rooms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .rooms button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 120px;
    }
    .learning {
      background: #13233f;
      border: 1px solid #37e0ff;
      border-radius: 10px;
      padding: 10px;
      margin: 8px 0;
      font-weight: 700;
    }
    .bar {
      height: 8px;
      background: #0b1120;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      background: #37e0ff;
    }
    .hint {
      opacity: 0.8;
      font-size: 13px;
    }
    .warn {
      display: block;
      color: #ffb74d;
      font-size: 12px;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 6px 0;
    }
    .room {
      color: #37e0ff;
    }
    a {
      color: #37e0ff;
    }
    .helper-head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 12px;
    }
    .helper-head h4 {
      margin: 0;
    }
    a.install {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
      text-decoration: none;
      border-radius: 10px;
      padding: 8px 14px;
    }
    details.pbd summary {
      cursor: pointer;
      opacity: 0.85;
      margin: 8px 0;
    }
    .err {
      color: #ff8fa3;
      white-space: pre-wrap;
      font-size: 12px;
    }
    h4 {
      margin: 12px 0 4px;
    }
  `};customElements.get("fp3d-locate-setup")||customElements.define("fp3d-locate-setup",Le);function Jn(o,e,t,n){var i;(i=document.querySelector("fp3d-locate-setup"))==null||i.remove();let r=document.createElement("fp3d-locate-setup");r.hass=o,r.hassSource=t??null,r.setLook=n??null,r.building=e,document.body.append(r)}export{Jn as openLocateSetup};
