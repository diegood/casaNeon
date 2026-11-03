var le=globalThis,ce=le.ShadowRoot&&(le.ShadyCSS===void 0||le.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,me=Symbol(),He=new WeakMap,J=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==me)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ce&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=He.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&He.set(t,e))}return e}toString(){return this.cssText}},Te=i=>new J(typeof i=="string"?i:i+"",void 0,me),he=(i,...e)=>{let t=i.length===1?i[0]:e.reduce((n,r,o)=>n+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+i[o+1],i[0]);return new J(t,i,me)},Fe=(i,e)=>{if(ce)i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=le.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,i.appendChild(n)}},ge=ce?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Te(t)})(i):i;var{is:ht,defineProperty:gt,getOwnPropertyDescriptor:ft,getOwnPropertyNames:bt,getOwnPropertySymbols:_t,getPrototypeOf:yt}=Object,ue=globalThis,Ne=ue.trustedTypes,vt=Ne?Ne.emptyScript:"",fe=ue.reactiveElementPolyfillSupport,Q=(i,e)=>i,be={toAttribute(i,e){switch(e){case Boolean:i=i?vt:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},Ie=(i,e)=>!ht(i,e),ze={attribute:!0,type:String,converter:be,reflect:!1,useDefault:!1,hasChanged:Ie};Symbol.metadata??=Symbol("metadata"),ue.litPropertyMetadata??=new WeakMap;var H=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ze){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&gt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=ft(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:r,set(s){let u=r==null?void 0:r.call(this);o==null||o.call(this,s),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ze}static _$Ei(){if(this.hasOwnProperty(Q("elementProperties")))return;let e=yt(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Q("properties"))){let t=this.properties,n=[...bt(t),..._t(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ge(r))}else e!==void 0&&t.push(ge(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Fe(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var o;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let s=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:be).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$Em=null}}_$AK(e,t){var o,s;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let u=n.getPropertyOptions(r),a=typeof u.converter=="function"?{fromAttribute:u.converter}:((o=u.converter)==null?void 0:o.fromAttribute)!==void 0?u.converter:be;this._$Em=r;let l=a.fromAttribute(t,u.type);this[r]=l??((s=this._$Ej)==null?void 0:s.get(r))??l,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){var s;if(e!==void 0){let u=this.constructor;if(r===!1&&(o=this[e]),n??=u.getPropertyOptions(e),!((n.hasChanged??Ie)(o,t)||n.useDefault&&n.reflect&&o===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(u._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},s){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,s??t??this[e]),o!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,s]of r){let{wrapped:u}=s,a=this[o];u!==!0||this._$AL.has(o)||a===void 0||this.C(o,void 0,s,a)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};H.elementStyles=[],H.shadowRootOptions={mode:"open"},H[Q("elementProperties")]=new Map,H[Q("finalized")]=new Map,fe==null||fe({ReactiveElement:H}),(ue.reactiveElementVersions??=[]).push("2.1.2");var $e=globalThis,We=i=>i,de=$e.trustedTypes,De=de?de.createPolicy("lit-html",{createHTML:i=>i}):void 0,qe="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Ge="?"+F,wt=`<${Ge}>`,U=document,ee=()=>U.createComment(""),te=i=>i===null||typeof i!="object"&&typeof i!="function",Ee=Array.isArray,xt=i=>Ee(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ve=/-->/g,Ue=/>/g,D=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Be=/'/g,je=/"/g,Ye=/^(?:script|style|textarea|title)$/i,Ae=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),g=Ae(1),jt=Ae(2),Kt=Ae(3),B=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Ke=new WeakMap,V=U.createTreeWalker(U,129);function Ze(i,e){if(!Ee(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return De!==void 0?De.createHTML(e):e}var kt=(i,e)=>{let t=i.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",s=X;for(let u=0;u<t;u++){let a=i[u],l,d,m=-1,f=0;for(;f<a.length&&(s.lastIndex=f,d=s.exec(a),d!==null);)f=s.lastIndex,s===X?d[1]==="!--"?s=Ve:d[1]!==void 0?s=Ue:d[2]!==void 0?(Ye.test(d[2])&&(r=RegExp("</"+d[2],"g")),s=D):d[3]!==void 0&&(s=D):s===D?d[0]===">"?(s=r??X,m=-1):d[1]===void 0?m=-2:(m=s.lastIndex-d[2].length,l=d[1],s=d[3]===void 0?D:d[3]==='"'?je:Be):s===je||s===Be?s=D:s===Ve||s===Ue?s=X:(s=D,r=void 0);let x=s===D&&i[u+1].startsWith("/>")?" ":"";o+=s===X?a+wt:m>=0?(n.push(l),a.slice(0,m)+qe+a.slice(m)+F+x):a+F+(m===-2?u:x)}return[Ze(i,o+(i[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ne=class i{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,s=0,u=e.length-1,a=this.parts,[l,d]=kt(e,t);if(this.el=i.createElement(l,n),V.currentNode=this.el.content,t===2||t===3){let m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(r=V.nextNode())!==null&&a.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(let m of r.getAttributeNames())if(m.endsWith(qe)){let f=d[s++],x=r.getAttribute(m).split(F),_=/([.?@])?(.*)/.exec(f);a.push({type:1,index:o,name:_[2],strings:x,ctor:_[1]==="."?we:_[1]==="?"?xe:_[1]==="@"?ke:q}),r.removeAttribute(m)}else m.startsWith(F)&&(a.push({type:6,index:o}),r.removeAttribute(m));if(Ye.test(r.tagName)){let m=r.textContent.split(F),f=m.length-1;if(f>0){r.textContent=de?de.emptyScript:"";for(let x=0;x<f;x++)r.append(m[x],ee()),V.nextNode(),a.push({type:2,index:++o});r.append(m[f],ee())}}}else if(r.nodeType===8)if(r.data===Ge)a.push({type:2,index:o});else{let m=-1;for(;(m=r.data.indexOf(F,m+1))!==-1;)a.push({type:7,index:o}),m+=F.length-1}o++}}static createElement(e,t){let n=U.createElement("template");return n.innerHTML=e,n}};function K(i,e,t=i,n){var s,u;if(e===B)return e;let r=n!==void 0?(s=t._$Co)==null?void 0:s[n]:t._$Cl,o=te(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((u=r==null?void 0:r._$AO)==null||u.call(r,!1),o===void 0?r=void 0:(r=new o(i),r._$AT(i,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=K(i,r._$AS(i,e.values),r,n)),e}var ve=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??U).importNode(t,!0);V.currentNode=r;let o=V.nextNode(),s=0,u=0,a=n[0];for(;a!==void 0;){if(s===a.index){let l;a.type===2?l=new re(o,o.nextSibling,this,e):a.type===1?l=new a.ctor(o,a.name,a.strings,this,e):a.type===6&&(l=new Se(o,this,e)),this._$AV.push(l),a=n[++u]}s!==(a==null?void 0:a.index)&&(o=V.nextNode(),s++)}return V.currentNode=U,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},re=class i{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),te(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&te(this._$AH)?this._$AA.nextSibling.data=e:this.T(U.createTextNode(e)),this._$AH=e}$(e){var o;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ne.createElement(Ze(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{let s=new ve(r,this),u=s.u(this.options);s.p(t),this.T(u),this._$AH=s}}_$AC(e){let t=Ke.get(e.strings);return t===void 0&&Ke.set(e.strings,t=new ne(e)),t}k(e){Ee(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new i(this.O(ee()),this.O(ee()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=We(e).nextSibling;We(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let o=this.strings,s=!1;if(o===void 0)e=K(this,e,t,0),s=!te(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{let u=e,a,l;for(e=o[0],a=0;a<o.length-1;a++)l=K(this,u[n+a],t,a),l===B&&(l=this._$AH[a]),s||=!te(l)||l!==this._$AH[a],l===w?e=w:e!==w&&(e+=(l??"")+o[a+1]),this._$AH[a]=l}s&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},we=class extends q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},xe=class extends q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},ke=class extends q{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??w)===B)return;let n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Se=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};var ye=$e.litHtmlPolyfillSupport;ye==null||ye(ne,re),($e.litHtmlVersions??=[]).push("3.3.3");var Je=(i,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new re(e.insertBefore(ee(),o),o,void 0,t??{})}return r._$AI(i),r};var ie=globalThis,N=class extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Je(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return B}},Qe;N._$litElement$=!0,N.finalized=!0,(Qe=ie.litElementHydrateSupport)==null||Qe.call(ie,{LitElement:N});var Me=ie.litElementPolyfillSupport;Me==null||Me({LitElement:N});(ie.litElementVersions??=[]).push("4.2.2");var $t={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},_n=Object.keys($t);function Et(i){return i==="hedge"||i==="fence"||i==="pergola"}function Xe(i){return(i.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!Et(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function pe(i){return[...i.rooms,...Xe(i)]}var At={type:"none",pitch:35,overhang:.4},Sn={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...At}};var Mt=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var St=new Set([...Mt,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function Re(i){let e=0;for(let t=0;t<i.length;t++){let[n,r]=i[t],[o,s]=i[(t+1)%i.length];e+=n*s-o*r}return e/2}function j(i,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,s]=e[n],[u,a]=e[r];s>i[1]!=a>i[1]&&i[0]<(u-o)*(i[1]-s)/(a-s)+o&&(t=!t)}return t}function et(i,e){var r;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let o=(r=i.devices)==null?void 0:r[n];if(!o)return null;if(o.area_id)return o.area_id;n=o.parent_device_id}return null}var tt="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",Rt={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function nt(i){let e=i?Rt[i]:void 0;return e?`${tt}#${e}`:tt}var E=(i,e)=>[i[0]-e[0],i[1]-e[1]],z=(i,e)=>[i[0]+e[0],i[1]+e[1]],T=(i,e)=>[i[0]*e,i[1]*e],se=(i,e)=>i[0]*e[0]+i[1]*e[1],G=(i,e)=>i[0]*e[1]-i[1]*e[0],oe=i=>Math.hypot(i[0],i[1]),L=i=>{let e=oe(i)||1;return[i[0]/e,i[1]/e]},rt=i=>[-i[1],i[0]],it=i=>[i[1],-i[0]];function st(i,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(c=>Math.hypot(c.b[0]-c.a[0],c.b[1]-c.a[1])>.05),s=[],u=c=>{for(let p=0;p<s.length;p++)if(Math.abs(s[p][0]-c[0])<=n&&Math.abs(s[p][1]-c[1])<=n)return p;return s.push([c[0],c[1]]),s.length-1},a=[];for(let c of i){let p=c.points;if(p.length<3||Math.abs(Re(p))<1e-6)continue;let b=Re(p)>0,h=p.map(u);for(let v=0;v<p.length;v++){let S=h[v],$=h[(v+1)%p.length];S!==$&&a.push(b?{u:S,v:$,room:c.id,edge:v,forward:!0}:{u:$,v:S,room:c.id,edge:v,forward:!1})}}let l=o.map(c=>[u(c.a),u(c.b)]),d=new Set;for(let c of i){let p=c.points;p.length<3||(c.wall_splits??[]).forEach((b,h)=>{if(!b||h>=p.length)return;let v=p[h],S=E(p[(h+1)%p.length],v),$=oe(S);for(let O of b)O>n&&O<$-n&&d.add(u(z(v,T(S,O/$))))})}let m=[];for(let c of a){let p=s[c.u],b=s[c.v],h=E(b,p),v=oe(h),S=T(h,1/v),$=[];for(let A=0;A<s.length;A++){if(A===c.u||A===c.v)continue;let R=E(s[A],p),C=se(R,S);C<=n||C>=v-n||Math.abs(G(S,R))<=n&&$.push({t:C,id:A})}$.sort((A,R)=>A.t-R.t);let O=[{t:0,id:c.u},...$,{t:v,id:c.v}];for(let A=0;A+1<O.length;A++){let R=O[A],C=O[A+1],ae=c.forward?R.t:v-C.t,mt=c.forward?C.t:v-R.t;m.push({u:R.id,v:C.id,room:c.room,edge:c.edge,t0:ae,t1:mt})}}let f=new Map;for(let c of m){let p=c.u<c.v?`${c.u}-${c.v}`:`${c.v}-${c.u}`,b=f.get(p);b||f.set(p,b=[]),b.push(c)}let x=c=>({room_id:c.room,edge:c.edge,t0:c.t0,t1:c.t1}),_=new Map;for(let c of m){let p=`${c.room}:${c.edge}`;_.set(p,[..._.get(p)??[],c.t0].sort((b,h)=>b-h))}let k=c=>{var h,v;let p=(v=(h=i.find(S=>S.id===c.room))==null?void 0:h.wall_heights)==null?void 0:v[c.edge];if(!Array.isArray(p))return p;let b=_.get(`${c.room}:${c.edge}`)??[];return p[b.indexOf(c.t0)]??null},y=c=>{let p=c.map(k).filter(h=>typeof h=="number"&&h>0);if(p.length)return Math.min(...p);let b=c.map(h=>{var v;return(v=i.find(S=>S.id===h.room))==null?void 0:v.ceiling_height});return b.every(h=>typeof h=="number"&&h>0)?Math.max(...b):void 0},M=c=>{let p=c.map(b=>{var h,v;return(v=(h=i.find(S=>S.id===b.room))==null?void 0:h.wall_thickness)==null?void 0:v[b.edge]}).filter(b=>typeof b=="number"&&b>0);return p.length?Math.max(...p):void 0},Y=c=>{var p;for(let b of c){let h=i.find(O=>O.id===b.room),v=(p=h==null?void 0:h.wall_slopes)==null?void 0:p[b.edge];if(!h||!v)continue;let S=h.points[b.edge],$=h.points[(b.edge+1)%h.points.length];return{p:[S[0],S[1]],q:[$[0],$[1]],h0:Math.max(.05,v[0]),h1:Math.max(.05,v[1])}}},I=c=>c.some(p=>k(p)===0),W=c=>{let p=Y(c);return p?{height:Math.max(p.h0,p.h1),slope:p}:{height:y(c)}},Z=[],P=[];for(let c of f.values()){let p=c[0],b=c.find(h=>h!==p&&h.u===p.v&&h.v===p.u&&h.room!==p.room);for(let h of c)h!==p&&h!==b&&h.room!==p.room&&r.push(`overlap:${p.room}:${h.room}`);if(I(b?[p,b]:[p])){b&&Z.push([p.room,b.room]);continue}if(b){let h=M([p,b])??e.interior;P.push({a:p.u,b:p.v,left:h/2,right:h/2,exterior:!1,roomLeft:p.room,roomRight:b.room,sources:[x(p),x(b)],...W([p,b])})}else P.push({a:p.u,b:p.v,left:0,right:M([p])??e.exterior,exterior:!0,roomLeft:p.room,roomRight:null,sources:[x(p)],...W([p])})}let Ce=c=>L(E(s[c.b],s[c.a]));for(let c of P){if(c.exterior||c.free)continue;let p=new Set;for(let h of[c.a,c.b])for(let v of P)!v.exterior||v.free||v.a!==h&&v.b!==h||Math.abs(G(Ce(c),Ce(v)))>1e-6||(v.roomLeft===c.roomLeft?p.add("left"):v.roomLeft===c.roomRight&&p.add("right"));if(p.size!==1)continue;let b=c.left+c.right;p.has("left")?(c.left=0,c.right=b):(c.left=b,c.right=0)}o.forEach((c,p)=>{var C;let[b,h]=l[p];if(b===h)return;let v=[(c.a[0]+c.b[0])/2,(c.a[1]+c.b[1])/2],S=((C=i.find(ae=>ae.points.length>=3&&j(v,ae.points)))==null?void 0:C.id)??null,$=(c.thickness??e.interior)/2,O=typeof c.height=="number"&&c.height>0?c.height:void 0,A=c.slope,R=A?{p:[c.a[0],c.a[1]],q:[c.b[0],c.b[1]],h0:Math.max(.05,A[0]),h1:Math.max(.05,A[1])}:void 0;P.push({free:c.id,a:b,b:h,left:$,right:$,exterior:!1,roomLeft:S,roomRight:S,sources:[],...R?{height:Math.max(R.h0,R.h1),slope:R}:{height:O}})}),P=Ot(P,s,d);let Le=Lt(P,s);return{walls:P.map((c,p)=>{let b=s[c.a],h=s[c.b],v=Le.get(`${p}:a`),S=Le.get(`${p}:b`),$=Ht([v.right,S.left,h,S.right,v.left,b],1e-6);return{id:Pt(b,h),a:[b[0],b[1]],b:[h[0],h[1]],left:c.left,right:c.right,exterior:c.exterior,roomLeft:c.roomLeft,roomRight:c.roomRight,sources:c.sources,footprint:$,...c.free?{free:c.free}:{},...c.height!==void 0?{height:c.height}:{},...c.slope?{slope:c.slope}:{}}}),warnings:[...new Set(r)],open:Z}}function Pt(i,e){let t=o=>Math.round(o*100),[n,r]=i[0]<e[0]||i[0]===e[0]&&i[1]<=e[1]?[i,e]:[e,i];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function ot(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function Ot(i,e,t=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((s,u)=>{for(let a of[s.a,s.b]){let l=o.get(a);l||o.set(a,l=[]),l.push(u)}});for(let[s,u]of o){if(u.length!==2||t.has(s))continue;let a=n[u[0]],l=n[u[1]];if(a.b!==s&&(a=ot(a)),l.a!==s&&(l=ot(l)),a.a===l.b)continue;let d=L(E(e[a.b],e[a.a])),m=L(E(e[l.b],e[l.a]));if(Math.abs(G(d,m))>1e-6||se(d,m)<=0||a.free||l.free||a.height!==l.height||a.slope||l.slope||a.exterior!==l.exterior||a.roomLeft!==l.roomLeft||a.roomRight!==l.roomRight||Math.abs(a.left-l.left)>1e-9||Math.abs(a.right-l.right)>1e-9)continue;let f={...a,b:l.b,sources:Ct(a.sources,l.sources)},x=n.filter((_,k)=>k!==u[0]&&k!==u[1]);x.push(f),n.length=0,n.push(...x),r=!0;break}}return n}function Ct(i,e){let t=i.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Lt(i,e){let t=new Map;i.forEach((r,o)=>{let s=L(E(e[r.b],e[r.a])),u=[[r.a,{key:`${o}:a`,d:s,left:r.left,right:r.right,angle:Math.atan2(s[1],s[0])}],[r.b,{key:`${o}:b`,d:T(s,-1),left:r.right,right:r.left,angle:Math.atan2(-s[1],-s[0])}]];for(let[a,l]of u){let d=t.get(a);d||t.set(a,d=[]),d.push(l)}});let n=new Map;for(let[r,o]of t){let s=e[r];o.sort((l,d)=>l.angle-d.angle);let u=l=>({left:z(s,T(rt(l.d),l.left)),right:z(s,T(it(l.d),l.right))});for(let l of o)n.set(l.key,u(l));if(o.length<2)continue;let a=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;for(let l=0;l<o.length;l++){let d=o[l],m=o[(l+1)%o.length],f=z(s,T(rt(d.d),d.left)),x=z(s,T(it(m.d),m.right)),_=G(d.d,m.d);if(Math.abs(_)<1e-4)continue;let k=G(E(x,f),m.d)/_,y=z(f,T(d.d,k));oe(E(y,s))>a||(n.get(d.key).left=y,n.get(m.key).right=y)}}return n}function Ht(i,e){let t=i.filter((r,o)=>oe(E(r,i[(o+1)%i.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],s=t[r],u=t[(r+1)%t.length],a=E(s,o),l=E(u,s);if(Math.abs(G(L(a),L(l)))<1e-7&&se(a,l)>0){t=t.filter((d,m)=>m!==r),n=!0;break}}}return t}function at(i,e,t){let n=i.points[e],r=i.points[(e+1)%i.points.length],o=L(E(r,n));return z(n,T(o,t))}function lt(i,e,t){if(i.wall){let r=t.find(u=>u.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=L(E(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,z(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function ct(i,e,t){if(!e.wall)return Tt(i,t.room,t.edge,e.offset);let n=i.find(o=>o.free===e.wall);if(!n)return null;let r=at(t.room,0,e.offset);return{wall:n,s:se(E(r,n.a),L(E(n.b,n.a)))}}function Tt(i,e,t,n){for(let r of i){if(!r.sources.find(u=>u.room_id===e.id&&u.edge===t&&n>=u.t0-1e-6&&n<=u.t1+1e-6))continue;let s=at(e,t,n);return{wall:r,s:se(E(s,r.a),L(E(r.b,r.a)))}}return null}function ut(i){return i.floors.flatMap(e=>pe(e).map(t=>({id:t.id,name:t.name,floor:e.name,area_id:t.area_id??null})))}function dt(i){var n;let e=[],t=new Set;for(let r of i.floors){let o=st(r.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},r.walls??[]).walls;for(let s of r.openings){if(s.type==="window"&&!(s.sill<.1))continue;let u=lt(s,r.rooms,r.walls??[]),a=u&&ct(o,s,u),l=a==null?void 0:a.wall.roomLeft,d=a==null?void 0:a.wall.roomRight;if(a&&(!l||!d)){let f=a.wall,x=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1])||1,_=[(f.b[0]-f.a[0])/x,(f.b[1]-f.a[1])/x],k=l?-1:1,y=(k>0?f.left:f.right)+.5,M=a.s,Y=[f.a[0]+_[0]*M-_[1]*k*y,f.a[1]+_[1]*M+_[0]*k*y],I=(n=pe(r).find(W=>W.outdoor&&j(Y,W.points)))==null?void 0:n.id;l?d=I:l=I}if(!l||!d||l===d)continue;let m=[l,d].sort().join("|");t.has(m)||(t.add(m),e.push([l,d]))}}return e}function Pe(i,e,t,n){var o;let r=i.floors.find(s=>s.id===e);return r?((o=pe(r).find(s=>j([t,n],s.points)))==null?void 0:o.id)??null:null}var Ft="/neonplan3d_static/keys/index.html",Nt={title:"Configurar localizaci\xF3n",lab:"Lab",close:"Cerrar",s_scanners:"1 \xB7 Receptores",s_devices:"2 \xB7 Dispositivos",s_walk:"3 \xB7 Aprendizaje",s_live:"4 \xB7 En vivo",no_bt:"Home Assistant no tiene Bluetooth configurado. Basta con Shelly (Gen2/3: escaneo Bluetooth pasivo), proxies Bluetooth de ESPHome o un adaptador USB.",scanners_intro:"Estos son todos los receptores Bluetooth que conoce Home Assistant. Indica en qu\xE9 habitaci\xF3n est\xE1 cada uno.",not_placed:"\u2013 elige habitaci\xF3n \u2013",hint_room:"La se\xF1al dice: {room} \u2013 usar",coverage:"Habitaciones sin receptor propio \u2013 el aprendizaje las hace reconocibles igualmente:",devices_intro:"\xBFQu\xE9 dispositivos quieres localizar? Mejor lo que siempre llevas encima \u2013 el reloj en la mu\xF1eca es ideal.",known_keys:"iPhone y Apple Watch con clave (de \u201CPrivate BLE Device\u201D en Home Assistant):",add:"A\xF1adir",added:"\u2713 a\xF1adido",remove:"Quitar",person:"Persona",none:"ninguna",irk_help:"\xBFFalta el iPhone o el Apple Watch? Necesitan su clave (IRK) como \u201CPrivate BLE Device\u201D en Home Assistant \u2013 el manual muestra las formas m\xE1s sencillas.",manual:"Manual",voice_hint:"Pregunta tambi\xE9n por voz: \u201C\xBFD\xF3nde est\xE1 mi iPhone?\u201D, \u201C\xBFD\xF3nde est\xE1 Luc\xEDa?\u201D, \u201C\xBFQui\xE9n est\xE1 en casa?\u201D, \u201CHaz sonar mi iPhone\u201D.",look_hint:"En 3D las personas aparecen como figura; en el men\xFA \u2699 de la vista: Personas \u2192 figura, chincheta o desactivado.",ring:"Hacer sonar",ring_hint:"La app de Home Assistant en este m\xF3vil \u2013 as\xED funciona \u201CHaz sonar mi iPhone\u201D.",near_title:"Buscar dispositivo cercano",key_title:"Pegar clave",key_name:"Nombre (p. ej. iPhone de Luc\xEDa)",key_value:"Clave (IRK, 32 caracteres)",key_bad:"No es una clave v\xE1lida (32 caracteres hex o Base64).",helper_title:"\u{1F511} Asistente de clave",helper_none:"\xBFA\xFAn no tienes clave? Con un ESP32 (unos 5 \u20AC) CasaNeon la lee en tres minutos: iPhone, Apple Watch y Android, sin Mac.",helper_build:"Configurar el asistente de clave",helper_found:"Asistente de clave encontrado: {name}",helper_watch:"Para un Apple Watch",helper_phone:"Para un iPhone",helper_watch_steps:"En el reloj: Ajustes \u2192 Bluetooth \u2192 en \xABDispositivos de salud\xBB toca \xABNeonPlan Key\xBB y enl\xE1zalo.",helper_phone_steps:"En el m\xF3vil: Ajustes \u2192 Bluetooth \u2192 enlaza \xABNeonPlan Key\xBB (aparece como teclado).",helper_key:"Clave le\xEDda:",helper_wait:"Esperando el enlace \u2026",helper_after:"Despu\xE9s, elimina el dispositivo \xABNeonPlan Key\xBB de los ajustes de Bluetooth.",helper_next:"\u{1F504} Siguiente dispositivo",helper_next_hint:"Toca antes de cada dispositivo nuevo: el asistente recibe una nueva identidad Bluetooth y un dispositivo ya emparejado deja de conectarse.",helper_name:"Nombre de este dispositivo",helper_irk:"Clave (IRK) le\xEDda del dispositivo que acaba de emparejarse:",helper_belongs:"Pertenece a: {name}",helper_add_as:"A\xF1adir como \xAB{name}\xBB",helper_added:"\u2713 \xAB{name}\xBB ya est\xE1 en la lista de arriba.",pbd_rename:"Consejo: c\xE1mbiale el nombre en Home Assistant (Dispositivos y servicios \u2192 Private BLE Device) y aparecer\xE1 aqu\xED.",carry:"Llevo conmigo:",offline:"no disponible ahora",pbd_summary:"\xBFVienes de Bermuda? Usar claves de Home Assistant",worn:"llevado",worn_hint:"Llevado encima (reloj, pulsera): indica d\xF3nde est\xE1 la persona; un m\xF3vil puede estar en cualquier sitio.",look_title:"Personas en 3D",look_figure:"Figura",look_pin:"Pin",look_off:"No",near_summary:"A\xF1adir un m\xF3vil Android o un llavero",android_label:"M\xF3vil Android (app de HA)",paste_summary:"Pegar una clave que ya tienes",helper_install:"Instalar en un ESP32",helper_pitch:"Para iPhone y Apple Watch: un ESP32 de unos 5 \u20AC se convierte en el asistente de claves en tres minutos, instalado desde el navegador, sin Mac. Luego empareja aqu\xED.",near_intro:"Acerca el dispositivo a un receptor. Android: activa \u201CBLE Transmitter\u201D en la app de Home Assistant. Llaveros: pulsa una vez.",near_empty:"A\xFAn nada fuerte cerca \u2026",walk_intro:"Entra en cada habitaci\xF3n, t\xF3cala y camina despacio durante 90 segundos \u2013 tambi\xE9n por las esquinas. Lleva todos los dispositivos.",learning:"Aprendiendo {room} \u2026 quedan {left} s",stop:"Cancelar",samples:"{n} muestras",quality:"Comprobar precisi\xF3n",quality_result:"Precisi\xF3n: {p}",relearn_all:"Volver a aprender todo",live_intro:"As\xED te ve CasaNeon ahora mismo. Camina un poco y comprueba si acierta.",enabled:"Localizaci\xF3n activada",admins_only:"Mostrar personas solo a administradores",not_heard:"sin se\xF1al",next:"Siguiente",need_device:"Primero a\xF1ade un dispositivo.",app_title:"Android con la app de Home Assistant",app_none:"\xBFM\xF3vil Android? En la app de Home Assistant: Ajustes \u2192 Companion app \u2192 Gestionar sensores \u2192 activa \xABBLE Transmitter\xBB. Luego aparece aqu\xED solo.",app_off:"El transmisor est\xE1 apagado: act\xEDvalo en la app",app_power:"Potencia de emisi\xF3n demasiado baja: ponla en \xABHigh\xBB en la app",app_mode:"Pon el modo de emisi\xF3n en \xABLow latency\xBB en la app",helper_android:"No emparejes aqu\xED m\xF3viles ni tabletas Android: no env\xEDan esta clave en segundo plano. Para Android usa el BLE Transmitter de la app de Home Assistant (abajo).",unheard:"\u26A0 sin se\xF1al",unheard_hint:"Ahora mismo ning\xFAn receptor oye este dispositivo. \xBFEst\xE1 encendido y emitiendo? Android: el BLE Transmitter de la app de Home Assistant.",fly:"Volar a las habitaciones con \xAB\xBFD\xF3nde est\xE1 \u2026?\xBB y \xAB\xBFQui\xE9n est\xE1 en casa?\xBB",fly_hint:"Las vistas abiertas de CasaNeon vuelan a la habitaci\xF3n de la respuesta y, con \xAB\xBFQui\xE9n est\xE1 en casa?\xBB, a todas por turno. Un toque lo detiene. No para personas mientras solo se muestren a administradores."};function pt(i){let e=i.trim().replace(/^irk:/i,""),t=e.replace(/[\s:-]/g,"");if(/^[0-9a-f]{32}$/i.test(t))return t.toLowerCase();try{let n=atob(e.replace(/\s/g,""));if(n.length===16)return[...n].map(r=>r.charCodeAt(0).toString(16).padStart(2,"0")).join("")}catch{}return null}var zt=/^([0-9a-f]{8})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{4})-?([0-9a-f]{12})_(\d{1,5})_(\d{1,5})$/i;function It(i){var n,r,o,s;let e=[],t=u=>u.toString(16).padStart(4,"0");for(let[u,a]of Object.entries(i.states)){if(!u.startsWith("sensor."))continue;let l=a.attributes??{};if(!("Transmitting power"in l))continue;let d=zt.exec(String(l.id??""));if(!d)continue;let m=Number(d[6]),f=Number(d[7]);if(m>65535||f>65535)continue;let x=((r=(n=i.entities)==null?void 0:n[u])==null?void 0:r.device_id)??null,_=x?(o=i.devices)==null?void 0:o[x]:void 0,k=String(l.friendly_name??u).replace(/\s*BLE[\s_-]*Transmitter\s*$/i,""),y=x&&((s=Object.entries(i.states).find(([M,Y])=>{var I;return M.startsWith("person.")&&(((I=Y.attributes)==null?void 0:I.device_trackers)??[]).some(W=>{var Z,P;return((P=(Z=i.entities)==null?void 0:Z[W])==null?void 0:P.device_id)===x})}))==null?void 0:s[0])||null;e.push({entity:u,name:(_==null?void 0:_.name_by_user)||(_==null?void 0:_.name)||k,key:(d.slice(1,6).join("")+t(m)+t(f)).toLowerCase(),state:String(a.state),power:String(l["Transmitting power"]??""),mode:String(l["Advertise mode"]??""),person:y})}return e.sort((u,a)=>u.name.localeCompare(a.name))}var Oe=class extends N{static properties={hass:{attribute:!1},building:{attribute:!1},_step:{state:!0},_cfg:{state:!0},_near:{state:!0},_live:{state:!0},_quality:{state:!0},_error:{state:!0}};constructor(){super(),this._step="scanners",this._cfg=null,this._near=[],this._live=null,this._quality=null,this._error=""}timer=0;hassSource=null;setLook=null;unsub=null;get t(){return Nt}tr(e,t){return e.replace(/\{(\w+)\}/g,(n,r)=>String(t[r]??""))}get rooms(){return ut(this.building).map(e=>{var t,n;return e.name||!e.area_id?e:{...e,name:((n=(t=this.hass.areas)==null?void 0:t[e.area_id])==null?void 0:n.name)??e.area_id}})}connectedCallback(){super.connectedCallback(),this.load().catch(e=>this._error=`load: ${(e==null?void 0:e.stack)??String(e)}`),this.timer=window.setInterval(()=>{this.tick()},1e3),this.hass.connection.subscribeMessage(e=>this._live=e,{type:"neonplan3d/locate/subscribe"}).then(e=>this.unsub=e).catch(()=>{})}disconnectedCallback(){var e;super.disconnectedCallback(),window.clearInterval(this.timer),(e=this.unsub)==null||e.call(this)}async call(e){try{return this._error="",await this.hass.callWS(e)}catch(t){return this._error=t.message??String(t),null}}async load(){var r;let e=await this.call({type:"neonplan3d/locate/config"});if(!e)return;let t={...e.scanner_rooms},n=!1;for(let o of e.scanners){if(t[o.source])continue;let s=this.guessRoom(o)??((r=e.scanner_hints)==null?void 0:r[o.source])??null;s&&(t[o.source]=s,n=!0)}this._cfg={...e,scanner_rooms:t},n&&await this.save({scanner_rooms:t})}guessRoom(e){var l;let t=d=>{var m,f;return typeof d=="string"&&!!e.device_id&&((f=(m=this.hass.entities)==null?void 0:m[d])==null?void 0:f.device_id)===e.device_id};if(e.device_id)for(let d of this.building.floors){for(let m of d.placements){let f=t(m.entity_id)?Pe(this.building,d.id,m.x,m.z):null;if(f)return f}for(let m of d.furniture){if(!Object.values(m).some(t))continue;let f=Pe(this.building,d.id,m.x,m.z);if(f)return f}}let n=e.device_id??((l=Object.values(this.hass.devices??{}).find(d=>[d.name_by_user,d.name].some(m=>m&&m.toLowerCase()===e.name.toLowerCase())))==null?void 0:l.id)??null,r=n?Object.values(this.hass.entities??{}).filter(d=>d.device_id===n&&d.area_id).map(d=>d.area_id):[],o=e.area_id??et(this.hass,n)??r[0]??null;if(o){let d=this.rooms.find(m=>m.area_id===o);if(d)return d.id}let s=d=>d.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," "),u=` ${s(e.name)} `,a=this.rooms.filter(d=>s(d.name).trim().length>=3&&u.includes(s(d.name).trim()));return a.sort((d,m)=>s(m.name).length-s(d.name).length),a.length&&a.filter(d=>s(d.name)===s(a[0].name)).length===1?a[0].id:null}async save(e){let t=[];try{t=dt(this.building)}catch(r){console.warn("NeonPlan locate: no door graph",r)}let n=await this.call({type:"neonplan3d/locate/configure",rooms:this.rooms,doors:t,...e});n&&(this._cfg={...n,scanner_rooms:{...n.scanner_rooms}})}async tick(){var t;let e=(t=this.hassSource)==null?void 0:t.call(this);if(e&&e!==this.hass&&(this.hass=e),this._step==="devices"&&this.nearOpen){let n=await this.call({type:"neonplan3d/locate/nearby"});n&&(this._near=n.devices)}if(this._step==="walk"){let n=await this.call({type:"neonplan3d/locate/calibrate",action:"status"});n&&this._cfg&&(this._cfg={...this._cfg,samples:n.samples},this._live={...this._live??{running:!0,devices:[]},calibration:n.calibration})}}render(){let e=this.t,t=this._cfg,n=[["scanners",e.s_scanners],["devices",e.s_devices],["walk",e.s_walk],["live",e.s_live]];return g`<div class="box" role="dialog" aria-label=${e.title}>
      <header>
        <b>📡 ${e.title}</b>
        <button class="x" @click=${()=>this.remove()} aria-label=${e.close}>✕</button>
      </header>
      <nav>${n.map(([r,o])=>g`<button class=${this._step===r?"on":""} @click=${()=>this._step=r}>${o}</button>`)}</nav>
      ${this._error?g`<pre class="err">${this._error}</pre>`:w}
      ${t?t.bluetooth?this.renderStep(t):g`<p>${e.no_bt}</p>`:g`<p>…</p>`}
    </div>`}manualLink(){return nt()}renderStep(e){switch(this._step){case"scanners":return this.renderScanners(e);case"devices":return this.renderDevices(e);case"walk":return this.renderWalk(e);default:return this.renderLive(e)}}roomSelect(e,t){let n=[...new Set(this.rooms.map(r=>r.floor))];return g`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.not_placed}</option>
      ${n.map(r=>g`<optgroup label=${r}>${this.rooms.filter(o=>o.floor===r).map(o=>g`<option value=${o.id} ?selected=${o.id===e}>${o.name}</option>`)}</optgroup>`)}
    </select>`}renderScanners(e){let t=this.t,n=new Set(Object.values(e.scanner_rooms)),r=this.rooms.filter(o=>!n.has(o.id));return g`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${e.scanners.map(o=>{var s,u;return g`<li>
            <span><b>${o.name}</b><small>${o.offline?`\u26A0 ${t.offline}`:o.kind==="shelly"?"Shelly":o.kind==="esphome"?"ESPHome":"Bluetooth"}</small></span>
            ${this.roomSelect(e.scanner_rooms[o.source]??null,a=>{let l={...e.scanner_rooms};a?l[o.source]=a:delete l[o.source],this.save({scanner_rooms:l})})}
            ${(s=e.scanner_hints)!=null&&s[o.source]&&e.scanner_hints[o.source]!==e.scanner_rooms[o.source]?g`<button class="ghost" @click=${()=>{this.save({scanner_rooms:{...e.scanner_rooms,[o.source]:e.scanner_hints[o.source]}})}}>
                  ${this.tr(t.hint_room,{room:((u=this.rooms.find(a=>a.id===e.scanner_hints[o.source]))==null?void 0:u.name)??""})}
                </button>`:w}
          </li>`})}
      </ul>
      ${r.length?g`<p class="hint">${t.coverage} ${r.map(o=>o.name).join(", ")}</p>`:w}
      <p class="end"><button class="primary" @click=${()=>this._step="devices"}>${t.next} →</button></p>`}personSelect(e,t){let n=Object.keys(this.hass.states).filter(r=>r.startsWith("person."));return g`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.person}: ${this.t.none}</option>
      ${n.map(r=>g`<option value=${r} ?selected=${r===e}>${this.hass.states[r].attributes.friendly_name??r}</option>`)}
    </select>`}keyHelpers(){var t,n,r,o,s,u;let e=[];for(let[a,l]of Object.entries(this.hass.states)){let d=l.attributes.options;if(!a.startsWith("select.")||!Array.isArray(d)||!d.includes("Heart Sensor")||!d.includes("Keyboard"))continue;let m=(n=(t=this.hass.entities)==null?void 0:t[a])==null?void 0:n.device_id,f=(r=Object.values(this.hass.entities??{}).find(M=>M.device_id===m&&/_irk$/.test(M.entity_id)))==null?void 0:r.entity_id,x=f?(o=this.hass.states[f])==null?void 0:o.state:void 0,_=m?(s=this.hass.devices)==null?void 0:s[m]:void 0,k=(_==null?void 0:_.name_by_user)||(_==null?void 0:_.name)||String(l.attributes.friendly_name??a),y=((u=Object.values(this.hass.entities??{}).find(M=>M.device_id===m&&/_refresh_ble_identity$/.test(M.entity_id)))==null?void 0:u.entity_id)??null;e.push({name:k,select:a,option:l.state,irk:x?pt(x):null,ours:(_==null?void 0:_.model)==="neonplan_key"||/neonplan[ _]key/i.test(a),refresh:y})}return e.sort((a,l)=>Number(l.ours)-Number(a.ours))}notCarried=new Set;nearOpen=!1;helperId=null;helperName="";helperPerson=null;helperAdded=null;renderKeyHelper(e){var _,k;let t=this.t,n=this.keyHelpers(),r=n.find(y=>y.select===this.helperId)??n[0],o=g`<div class="helper-head">
        <h4>${t.helper_title}</h4>
        <a class="install" href=${Ft} target="_blank" rel="noopener">⚡ ${t.helper_install} ↗</a>
      </div>
      <p class="hint">${t.helper_pitch}</p>
      <p class="hint">${t.helper_android}</p>`;if(!r)return o;let s=r.option==="Heart Sensor",u=y=>{this.hass.callService("select","select_option",{entity_id:r.select,option:y})},a=y=>y.match(/../g).reverse().join(""),l=y=>!!r.irk&&!!y&&(y.toLowerCase()===r.irk||y.toLowerCase()===a(r.irk)),d=((_=e.devices.find(y=>l(y.key)))==null?void 0:_.name)??null,m=((k=e.private_ble.find(y=>l(y.key)))==null?void 0:k.title)??null,f=this.helperName||(s?"Apple Watch":"iPhone"),x=y=>`${y.slice(0,4)}\u2026${y.slice(-4)}`;return g`${o}
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
            <small>${r.irk?x(r.irk):t.helper_wait}</small>
            ${d||m?g`<small>${this.tr(t.helper_belongs,{name:d??m??""})}</small>`:w}
          </span>
          ${r.irk&&!d?g`<button
                class="primary"
                @click=${()=>{this.addDevice(e,{name:f,kind:"irk",key:r.irk},this.helperPerson),this.helperAdded=f,this.helperName=""}}
              >
                ${this.tr(t.helper_add_as,{name:f})}
              </button>`:w}
        </li>
      </ul>
      ${this.helperAdded?g`<p class="hint">${this.tr(t.helper_added,{name:this.helperAdded})}</p>`:w}
      <p class="hint">${t.helper_after}</p>
      ${r.refresh?g`<p class="end">
            <small>${t.helper_next_hint}</small>
            <button @click=${()=>{this.hass.callService("button","press",{entity_id:r.refresh})}}>${t.helper_next}</button>
          </p>`:w}`}notifySelect(e,t){let n=this.hass.services,r=Object.keys((n==null?void 0:n.notify)??{}).filter(o=>o.startsWith("mobile_app_"));return r.length?g`<select title=${this.t.ring_hint} @change=${o=>t(o.target.value||null)}>
      <option value="" ?selected=${!e}>🔔 ${this.t.ring}: ${this.t.none}</option>
      ${r.map(o=>g`<option value=${`notify.${o}`} ?selected=${e===`notify.${o}`}>🔔 ${o.replace(/^mobile_app_/,"").replace(/_/g," ")}</option>`)}
    </select>`:w}unheardBadge(e){let t=this._live;if(!(t!=null&&t.running))return w;let n=t.devices.find(r=>r.id===e);return!n||n.room||n.last_seen&&Date.now()/1e3-n.last_seen<120?w:g`<small class="warn" title=${this.t.unheard_hint}>${this.t.unheard}</small>`}addDevice(e,t,n=null){let r=`${t.kind}_${t.key.replace(/[^a-z0-9]/gi,"").slice(-10).toLowerCase()}`;e.devices.some(o=>o.id===r)||this.save({devices:[...e.devices,{...t,id:r,person:n,icon:null}]})}renderDevices(e){let t=this.t,n=s=>e.devices.some(u=>u.key.toLowerCase()===s.toLowerCase()),r=(s,u)=>{this.save({devices:e.devices.map(a=>a.id===s?{...a,...u}:a)})},o=It(this.hass);return g`<p>${t.devices_intro}</p>
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
          </ul>`:w}
      ${o.length?g`<h4>📱 ${t.app_title}</h4>
            <ul class="list">
              ${o.map(s=>{let u=[s.state!=="Transmitting"?t.app_off:null,s.power==="ultraLow"||s.power==="low"?t.app_power:null,s.mode==="lowPower"?t.app_mode:null].filter(a=>!!a);return g`<li>
                  <span
                    ><b>${s.name}</b>${u.map(a=>g`<small class="warn">⚠ ${a}</small>`)}</span
                  >
                  ${n(s.key)?g`<small>${t.added}</small>`:g`<button @click=${()=>this.addDevice(e,{name:s.name,kind:"ibeacon",key:s.key},s.person)}>${t.add}</button>`}
                </li>`})}
            </ul>`:w}
      ${this.renderKeyHelper(e)}
      <details
        class="pbd"
        @toggle=${s=>{this.nearOpen=s.target.open}}
      >
        <summary>📱 ${t.near_summary}</summary>
        <p class="hint">${t.near_intro}</p>
        ${o.length?w:g`<p class="hint">${t.app_none}</p>`}
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
          @click=${()=>{let s=this.renderRoot.querySelector("#keyname").value.trim(),u=pt(this.renderRoot.querySelector("#keyvalue").value);if(!u){this._error=t.key_bad;return}this._error="",this.addDevice(e,{name:s||"iPhone",kind:"irk",key:u})}}
        >
          ${t.add}
        </button>
      </div>
      </details>
      <p class="hint">${t.irk_help} <a href=${this.manualLink()} target="_blank" rel="noopener">${t.manual} ↗</a></p>
      <p class="end"><button class="primary" ?disabled=${!e.devices.length} @click=${()=>this._step="walk"}>${t.next} →</button></p>`}renderWalk(e){var u,a;let t=this.t,n=((u=this._live)==null?void 0:u.calibration)??null;if(!e.devices.length)return g`<p>${t.need_device}</p>`;let r=l=>Math.max(0,...e.devices.map(d=>{var m;return((m=e.samples[d.id])==null?void 0:m[l])??0})),o=[...new Set(this.rooms.map(l=>l.floor))],s=this._quality;return g`<p>${t.walk_intro}</p>
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
          </div>`:w}
      ${n?g`<div class="learning">
            ${this.tr(t.learning,{room:((a=this.rooms.find(l=>l.id===n.room))==null?void 0:a.name)??"",left:n.left})}
            <div class="bar"><i style="width:${Math.round((90-n.left)/90*100)}%"></i></div>
            <button @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"stop"})}}>${t.stop}</button>
          </div>`:w}
      ${o.map(l=>g`<h4>${l}</h4>
          <div class="rooms">
            ${this.rooms.filter(d=>d.floor===l).map(d=>{let m=r(d.id),f=s&&m>0?e.devices.map(_=>{var k;return(k=s[_.id])==null?void 0:k.rooms[d.id]}).filter(_=>typeof _=="number"):[],x=f.length?Math.min(...f):null;return g`<button
                  class=${(n==null?void 0:n.room)===d.id?"on":m>=30?"done":""}
                  ?disabled=${!!n}
                  @click=${async()=>{let _=e.devices.filter(y=>!this.notCarried.has(y.id)).map(y=>y.id),k=await this.call({type:"neonplan3d/locate/calibrate",action:"start",room:d.id,seconds:90,devices:_});k&&(this._live={...this._live??{running:!0,devices:[]},calibration:k.calibration}),k&&!e.enabled&&await this.save({enabled:!0})}}
                >
                  ${m>=30?"\u2713 ":""}${d.name}<small>${this.tr(t.samples,{n:m})}${x!==null?` \xB7 ${Math.round(x*100)} %`:""}</small>
                </button>`})}
          </div>`)}
      <p class="end">
        <button @click=${async()=>this._quality=await this.call({type:"neonplan3d/locate/quality"})}>${t.quality}</button>
        ${s?g`<b>${this.tr(t.quality_result,{p:e.devices.map(l=>{var d;return`${l.name} ${((d=s[l.id])==null?void 0:d.overall)!=null?Math.round(s[l.id].overall*100):"\u2013"} %`}).join(" \xB7 ")})}</b>`:w}
        <button class="primary" @click=${()=>this._step="live"}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"clear"}).then(()=>this.load())}}>${t.relearn_all}</button></p>`}renderLive(e){let t=this.t,n=this._live,r=o=>{var s;return(s=this.rooms.find(u=>u.id===o))==null?void 0:s.name};return g`<p>${t.live_intro}</p>
      <p class="hint">${t.voice_hint}</p>
      <label class="row"><input type="checkbox" .checked=${e.enabled} @change=${o=>{this.save({enabled:o.target.checked})}} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${e.admins_only} @change=${o=>{this.save({admins_only:o.target.checked})}} /> ${t.admins_only}</label>
      <label class="row" title=${t.fly_hint}
        ><input type="checkbox" .checked=${e.fly!==!1} @change=${o=>{this.save({fly:o.target.checked})}} /> ${t.fly}</label
      >
      ${this.setLook?g`<div class="row">
            <b>${t.look_title}</b>
            ${["figure","pin","off"].map(o=>g`<button
                class=${(this.building.settings.person_look??"figure")===o?"on":""}
                @click=${()=>{var s;(s=this.setLook)==null||s.call(this,o),this.building={...this.building,settings:{...this.building.settings,person_look:o==="figure"?null:o}}}}
              >
                ${o==="figure"?t.look_figure:o==="pin"?t.look_pin:t.look_off}
              </button>`)}
          </div>`:w}
      <ul class="list big">
        ${((n==null?void 0:n.devices)??[]).map(o=>g`<li>
            <span><b>${o.name}</b></span>
            <span>${o.room?g`<b class="room">${r(o.room)}</b> <small>${Math.round((o.probability??0)*100)} %</small>`:g`<small>${t.not_heard}</small>`}</span>
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
  `};customElements.get("fp3d-locate-setup")||customElements.define("fp3d-locate-setup",Oe);function Zn(i,e,t,n){var o;(o=document.querySelector("fp3d-locate-setup"))==null||o.remove();let r=document.createElement("fp3d-locate-setup");r.hass=i,r.hassSource=t??null,r.setLook=n??null,r.building=e,document.body.append(r)}export{Zn as openLocateSetup};
