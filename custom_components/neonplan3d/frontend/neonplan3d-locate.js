var ne=globalThis,re=ne.ShadowRoot&&(ne.ShadyCSS===void 0||ne.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ae=Symbol(),Me=new WeakMap,q=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ae)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(re&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Me.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Me.set(t,e))}return e}toString(){return this.cssText}},Oe=s=>new q(typeof s=="string"?s:s+"",void 0,ae),le=(s,...e)=>{let t=s.length===1?s[0]:e.reduce((n,r,o)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+s[o+1],s[0]);return new q(t,s,ae)},Le=(s,e)=>{if(re)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),r=ne.litNonce;r!==void 0&&n.setAttribute("nonce",r),n.textContent=t.cssText,s.appendChild(n)}},ce=re?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Oe(t)})(s):s;var{is:pt,defineProperty:dt,getOwnPropertyDescriptor:ht,getOwnPropertyNames:mt,getOwnPropertySymbols:gt,getPrototypeOf:ft}=Object,oe=globalThis,Ce=oe.trustedTypes,bt=Ce?Ce.emptyScript:"",ue=oe.reactiveElementPolyfillSupport,Y=(s,e)=>s,pe={toAttribute(s,e){switch(e){case Boolean:s=s?bt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},He=(s,e)=>!pt(s,e),Te={attribute:!0,type:String,converter:pe,reflect:!1,useDefault:!1,hasChanged:He};Symbol.metadata??=Symbol("metadata"),oe.litPropertyMetadata??=new WeakMap;var L=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Te){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&dt(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:o}=ht(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:r,set(i){let u=r==null?void 0:r.call(this);o==null||o.call(this,i),this.requestUpdate(e,u,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Te}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let e=ft(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let t=this.properties,n=[...mt(t),...gt(t)];for(let r of n)this.createProperty(r,t[r])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,r]of t)this.elementProperties.set(n,r)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let r=this._$Eu(t,n);r!==void 0&&this._$Eh.set(r,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let r of n)t.unshift(ce(r))}else e!==void 0&&t.push(ce(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Le(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var o;let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&n.reflect===!0){let i=(((o=n.converter)==null?void 0:o.toAttribute)!==void 0?n.converter:pe).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){var o,i;let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let u=n.getPropertyOptions(r),c=typeof u.converter=="function"?{fromAttribute:u.converter}:((o=u.converter)==null?void 0:o.fromAttribute)!==void 0?u.converter:pe;this._$Em=r;let l=c.fromAttribute(t,u.type);this[r]=l??((i=this._$Ej)==null?void 0:i.get(r))??l,this._$Em=null}}requestUpdate(e,t,n,r=!1,o){var i;if(e!==void 0){let u=this.constructor;if(r===!1&&(o=this[e]),n??=u.getPropertyOptions(e),!((n.hasChanged??He)(o,t)||n.useDefault&&n.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(u._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:o},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),r===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r){let{wrapped:u}=i,c=this[o];u!==!0||this._$AL.has(o)||c===void 0||this.C(o,void 0,i,c)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(t)):this._$EM()}catch(r){throw e=!1,this._$EM(),r}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var r;return(r=n.hostUpdated)==null?void 0:r.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};L.elementStyles=[],L.shadowRootOptions={mode:"open"},L[Y("elementProperties")]=new Map,L[Y("finalized")]=new Map,ue==null||ue({ReactiveElement:L}),(oe.reactiveElementVersions??=[]).push("2.1.2");var ye=globalThis,Fe=s=>s,ie=ye.trustedTypes,ze=ie?ie.createPolicy("lit-html",{createHTML:s=>s}):void 0,Ue="$lit$",H=`lit$${Math.random().toFixed(9).slice(2)}$`,Be="?"+H,_t=`<${Be}>`,V=document,G=()=>V.createComment(""),Z=s=>s===null||typeof s!="object"&&typeof s!="function",ve=Array.isArray,yt=s=>ve(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",de=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Ie=/>/g,I=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),We=/'/g,Ve=/"/g,je=/^(?:script|style|textarea|title)$/i,xe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),b=xe(1),It=xe(2),Wt=xe(3),D=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),De=new WeakMap,W=V.createTreeWalker(V,129);function qe(s,e){if(!ve(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ze!==void 0?ze.createHTML(e):e}var vt=(s,e)=>{let t=s.length-1,n=[],r,o=e===2?"<svg>":e===3?"<math>":"",i=K;for(let u=0;u<t;u++){let c=s[u],l,d,h=-1,g=0;for(;g<c.length&&(i.lastIndex=g,d=i.exec(c),d!==null);)g=i.lastIndex,i===K?d[1]==="!--"?i=Ne:d[1]!==void 0?i=Ie:d[2]!==void 0?(je.test(d[2])&&(r=RegExp("</"+d[2],"g")),i=I):d[3]!==void 0&&(i=I):i===I?d[0]===">"?(i=r??K,h=-1):d[1]===void 0?h=-2:(h=i.lastIndex-d[2].length,l=d[1],i=d[3]===void 0?I:d[3]==='"'?Ve:We):i===Ve||i===We?i=I:i===Ne||i===Ie?i=K:(i=I,r=void 0);let _=i===I&&s[u+1].startsWith("/>")?" ":"";o+=i===K?c+_t:h>=0?(n.push(l),c.slice(0,h)+Ue+c.slice(h)+H+_):c+H+(h===-2?u:_)}return[qe(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},J=class s{constructor({strings:e,_$litType$:t},n){let r;this.parts=[];let o=0,i=0,u=e.length-1,c=this.parts,[l,d]=vt(e,t);if(this.el=s.createElement(l,n),W.currentNode=this.el.content,t===2||t===3){let h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(r=W.nextNode())!==null&&c.length<u;){if(r.nodeType===1){if(r.hasAttributes())for(let h of r.getAttributeNames())if(h.endsWith(Ue)){let g=d[i++],_=r.getAttribute(h).split(H),v=/([.?@])?(.*)/.exec(g);c.push({type:1,index:o,name:v[2],strings:_,ctor:v[1]==="."?ge:v[1]==="?"?fe:v[1]==="@"?be:B}),r.removeAttribute(h)}else h.startsWith(H)&&(c.push({type:6,index:o}),r.removeAttribute(h));if(je.test(r.tagName)){let h=r.textContent.split(H),g=h.length-1;if(g>0){r.textContent=ie?ie.emptyScript:"";for(let _=0;_<g;_++)r.append(h[_],G()),W.nextNode(),c.push({type:2,index:++o});r.append(h[g],G())}}}else if(r.nodeType===8)if(r.data===Be)c.push({type:2,index:o});else{let h=-1;for(;(h=r.data.indexOf(H,h+1))!==-1;)c.push({type:7,index:o}),h+=H.length-1}o++}}static createElement(e,t){let n=V.createElement("template");return n.innerHTML=e,n}};function U(s,e,t=s,n){var i,u;if(e===D)return e;let r=n!==void 0?(i=t._$Co)==null?void 0:i[n]:t._$Cl,o=Z(e)?void 0:e._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((u=r==null?void 0:r._$AO)==null||u.call(r,!1),o===void 0?r=void 0:(r=new o(s),r._$AT(s,t,n)),n!==void 0?(t._$Co??=[])[n]=r:t._$Cl=r),r!==void 0&&(e=U(s,r._$AS(s,e.values),r,n)),e}var me=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=((e==null?void 0:e.creationScope)??V).importNode(t,!0);W.currentNode=r;let o=W.nextNode(),i=0,u=0,c=n[0];for(;c!==void 0;){if(i===c.index){let l;c.type===2?l=new Q(o,o.nextSibling,this,e):c.type===1?l=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(l=new _e(o,this,e)),this._$AV.push(l),c=n[++u]}i!==(c==null?void 0:c.index)&&(o=W.nextNode(),i++)}return W.currentNode=V,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Q=class s{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),Z(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==D&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):yt(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==w&&Z(this._$AH)?this._$AA.nextSibling.data=e:this.T(V.createTextNode(e)),this._$AH=e}$(e){var o;let{values:t,_$litType$:n}=e,r=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=J.createElement(qe(n.h,n.h[0]),this.options)),n);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(t);else{let i=new me(r,this),u=i.u(this.options);i.p(t),this.T(u),this._$AH=i}}_$AC(e){let t=De.get(e.strings);return t===void 0&&De.set(e.strings,t=new J(e)),t}k(e){ve(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,r=0;for(let o of e)r===t.length?t.push(n=new s(this.O(G()),this.O(G()),this,this.options)):n=t[r],n._$AI(o),r++;r<t.length&&(this._$AR(n&&n._$AB.nextSibling,r),t.length=r)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let r=Fe(e).nextSibling;Fe(e).remove(),e=r}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},B=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=o,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=w}_$AI(e,t=this,n,r){let o=this.strings,i=!1;if(o===void 0)e=U(this,e,t,0),i=!Z(e)||e!==this._$AH&&e!==D,i&&(this._$AH=e);else{let u=e,c,l;for(e=o[0],c=0;c<o.length-1;c++)l=U(this,u[n+c],t,c),l===D&&(l=this._$AH[c]),i||=!Z(l)||l!==this._$AH[c],l===w?e=w:e!==w&&(e+=(l??"")+o[c+1]),this._$AH[c]=l}i&&!r&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ge=class extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},fe=class extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},be=class extends B{constructor(e,t,n,r,o){super(e,t,n,r,o),this.type=5}_$AI(e,t=this){if((e=U(this,e,t,0)??w)===D)return;let n=this._$AH,r=e===w&&n!==w||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,o=e!==w&&(n===w||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},_e=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}};var he=ye.litHtmlPolyfillSupport;he==null||he(J,Q),(ye.litHtmlVersions??=[]).push("3.3.3");var Ye=(s,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,r=n._$litPart$;if(r===void 0){let o=(t==null?void 0:t.renderBefore)??null;n._$litPart$=r=new Q(e.insertBefore(G(),o),o,void 0,t??{})}return r._$AI(s),r};var X=globalThis,F=class extends L{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ye(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return D}},Ke;F._$litElement$=!0,F.finalized=!0,(Ke=X.litElementHydrateSupport)==null||Ke.call(X,{LitElement:F});var we=X.litElementPolyfillSupport;we==null||we({LitElement:F});(X.litElementVersions??=[]).push("4.2.2");var Ge="https://github.com/diegood/neonplan3d/blob/main/docs/manual.md",xt={camera_cockpit:"61-camera-cockpit",weather:"62-weather-outside",screens:"63-live-screens",energy_pro:"64-energy-pro",sound:"65-sound--cinema",auto_pro:"66-car-pro",time_travel:"67-time-travel",pool:"6-pro-add-ons",household:"68-household-pro-beta",extensions:"7-extensions-shop-and-furniture-packs"};function Ze(s){let e=s?xt[s]:void 0;return e?`${Ge}#${e}`:Ge}var $t={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},dn=Object.keys($t);var kt={type:"none",pitch:35,overhang:.4},_n={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...kt}};var St=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);var wt=new Set([...St,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function $e(s){let e=0;for(let t=0;t<s.length;t++){let[n,r]=s[t],[o,i]=s[(t+1)%s.length];e+=n*i-o*r}return e/2}function se(s,e){let t=!1;for(let n=0,r=e.length-1;n<e.length;r=n++){let[o,i]=e[n],[u,c]=e[r];i>s[1]!=c>s[1]&&s[0]<(u-o)*(s[1]-i)/(c-i)+o&&(t=!t)}return t}var E=(s,e)=>[s[0]-e[0],s[1]-e[1]],z=(s,e)=>[s[0]+e[0],s[1]+e[1]],C=(s,e)=>[s[0]*e,s[1]*e],te=(s,e)=>s[0]*e[0]+s[1]*e[1],j=(s,e)=>s[0]*e[1]-s[1]*e[0],ee=s=>Math.hypot(s[0],s[1]),M=s=>{let e=ee(s)||1;return[s[0]/e,s[1]/e]},Je=s=>[-s[1],s[0]],Qe=s=>[s[1],-s[0]];function et(s,e,t=[]){let n=e.eps??.005,r=[],o=t.filter(a=>Math.hypot(a.b[0]-a.a[0],a.b[1]-a.a[1])>.05),i=[],u=a=>{for(let p=0;p<i.length;p++)if(Math.abs(i[p][0]-a[0])<=n&&Math.abs(i[p][1]-a[1])<=n)return p;return i.push([a[0],a[1]]),i.length-1},c=[];for(let a of s){let p=a.points;if(p.length<3||Math.abs($e(p))<1e-6)continue;let f=$e(p)>0,m=p.map(u);for(let y=0;y<p.length;y++){let $=m[y],S=m[(y+1)%p.length];$!==S&&c.push(f?{u:$,v:S,room:a.id,edge:y,forward:!0}:{u:S,v:$,room:a.id,edge:y,forward:!1})}}let l=o.map(a=>[u(a.a),u(a.b)]),d=new Set;for(let a of s){let p=a.points;p.length<3||(a.wall_splits??[]).forEach((f,m)=>{if(!f||m>=p.length)return;let y=p[m],$=E(p[(m+1)%p.length],y),S=ee($);for(let P of f)P>n&&P<S-n&&d.add(u(z(y,C($,P/S))))})}let h=[];for(let a of c){let p=i[a.u],f=i[a.v],m=E(f,p),y=ee(m),$=C(m,1/y),S=[];for(let A=0;A<i.length;A++){if(A===a.u||A===a.v)continue;let R=E(i[A],p),N=te(R,$);N<=n||N>=y-n||Math.abs(j($,R))<=n&&S.push({t:N,id:A})}S.sort((A,R)=>A.t-R.t);let P=[{t:0,id:a.u},...S,{t:y,id:a.v}];for(let A=0;A+1<P.length;A++){let R=P[A],N=P[A+1],ct=a.forward?R.t:y-N.t,ut=a.forward?N.t:y-R.t;h.push({u:R.id,v:N.id,room:a.room,edge:a.edge,t0:ct,t1:ut})}}let g=new Map;for(let a of h){let p=a.u<a.v?`${a.u}-${a.v}`:`${a.v}-${a.u}`,f=g.get(p);f||g.set(p,f=[]),f.push(a)}let _=a=>({room_id:a.room,edge:a.edge,t0:a.t0,t1:a.t1}),v=new Map;for(let a of h){let p=`${a.room}:${a.edge}`;v.set(p,[...v.get(p)??[],a.t0].sort((f,m)=>f-m))}let k=a=>{var m,y;let p=(y=(m=s.find($=>$.id===a.room))==null?void 0:m.wall_heights)==null?void 0:y[a.edge];if(!Array.isArray(p))return p;let f=v.get(`${a.room}:${a.edge}`)??[];return p[f.indexOf(a.t0)]??null},x=a=>{let p=a.map(k).filter(m=>typeof m=="number"&&m>0);if(p.length)return Math.min(...p);let f=a.map(m=>{var y;return(y=s.find($=>$.id===m.room))==null?void 0:y.ceiling_height});return f.every(m=>typeof m=="number"&&m>0)?Math.max(...f):void 0},T=a=>{let p=a.map(f=>{var m,y;return(y=(m=s.find($=>$.id===f.room))==null?void 0:m.wall_thickness)==null?void 0:y[f.edge]}).filter(f=>typeof f=="number"&&f>0);return p.length?Math.max(...p):void 0},at=a=>{var p;for(let f of a){let m=s.find(P=>P.id===f.room),y=(p=m==null?void 0:m.wall_slopes)==null?void 0:p[f.edge];if(!m||!y)continue;let $=m.points[f.edge],S=m.points[(f.edge+1)%m.points.length];return{p:[$[0],$[1]],q:[S[0],S[1]],h0:Math.max(.05,y[0]),h1:Math.max(.05,y[1])}}},lt=a=>a.some(p=>k(p)===0),Ee=a=>{let p=at(a);return p?{height:Math.max(p.h0,p.h1),slope:p}:{height:x(a)}},Ae=[],O=[];for(let a of g.values()){let p=a[0],f=a.find(m=>m!==p&&m.u===p.v&&m.v===p.u&&m.room!==p.room);for(let m of a)m!==p&&m!==f&&m.room!==p.room&&r.push(`overlap:${p.room}:${m.room}`);if(lt(f?[p,f]:[p])){f&&Ae.push([p.room,f.room]);continue}if(f){let m=T([p,f])??e.interior;O.push({a:p.u,b:p.v,left:m/2,right:m/2,exterior:!1,roomLeft:p.room,roomRight:f.room,sources:[_(p),_(f)],...Ee([p,f])})}else O.push({a:p.u,b:p.v,left:0,right:T([p])??e.exterior,exterior:!0,roomLeft:p.room,roomRight:null,sources:[_(p)],...Ee([p])})}let Pe=a=>M(E(i[a.b],i[a.a]));for(let a of O){if(a.exterior||a.free)continue;let p=new Set;for(let m of[a.a,a.b])for(let y of O)!y.exterior||y.free||y.a!==m&&y.b!==m||Math.abs(j(Pe(a),Pe(y)))>1e-6||(y.roomLeft===a.roomLeft?p.add("left"):y.roomLeft===a.roomRight&&p.add("right"));if(p.size!==1)continue;let f=a.left+a.right;p.has("left")?(a.left=0,a.right=f):(a.left=f,a.right=0)}o.forEach((a,p)=>{var A;let[f,m]=l[p];if(f===m)return;let y=[(a.a[0]+a.b[0])/2,(a.a[1]+a.b[1])/2],$=((A=s.find(R=>R.points.length>=3&&se(y,R.points)))==null?void 0:A.id)??null,S=(a.thickness??e.interior)/2,P=typeof a.height=="number"&&a.height>0?a.height:void 0;O.push({free:a.id,a:f,b:m,left:S,right:S,exterior:!1,roomLeft:$,roomRight:$,sources:[],height:P})}),O=At(O,i,d);let Re=Rt(O,i);return{walls:O.map((a,p)=>{let f=i[a.a],m=i[a.b],y=Re.get(`${p}:a`),$=Re.get(`${p}:b`),S=Mt([y.right,$.left,m,$.right,y.left,f],1e-6);return{id:Et(f,m),a:[f[0],f[1]],b:[m[0],m[1]],left:a.left,right:a.right,exterior:a.exterior,roomLeft:a.roomLeft,roomRight:a.roomRight,sources:a.sources,footprint:S,...a.free?{free:a.free}:{},...a.height!==void 0?{height:a.height}:{},...a.slope?{slope:a.slope}:{}}}),warnings:[...new Set(r)],open:Ae}}function Et(s,e){let t=o=>Math.round(o*100),[n,r]=s[0]<e[0]||s[0]===e[0]&&s[1]<=e[1]?[s,e]:[e,s];return`w_${t(n[0])}_${t(n[1])}_${t(r[0])}_${t(r[1])}`}function Xe(s){return{...s,a:s.b,b:s.a,left:s.right,right:s.left,roomLeft:s.roomRight,roomRight:s.roomLeft}}function At(s,e,t=new Set){let n=s.slice(),r=!0;for(;r;){r=!1;let o=new Map;n.forEach((i,u)=>{for(let c of[i.a,i.b]){let l=o.get(c);l||o.set(c,l=[]),l.push(u)}});for(let[i,u]of o){if(u.length!==2||t.has(i))continue;let c=n[u[0]],l=n[u[1]];if(c.b!==i&&(c=Xe(c)),l.a!==i&&(l=Xe(l)),c.a===l.b)continue;let d=M(E(e[c.b],e[c.a])),h=M(E(e[l.b],e[l.a]));if(Math.abs(j(d,h))>1e-6||te(d,h)<=0||c.free||l.free||c.height!==l.height||c.slope||l.slope||c.exterior!==l.exterior||c.roomLeft!==l.roomLeft||c.roomRight!==l.roomRight||Math.abs(c.left-l.left)>1e-9||Math.abs(c.right-l.right)>1e-9)continue;let g={...c,b:l.b,sources:Pt(c.sources,l.sources)},_=n.filter((v,k)=>k!==u[0]&&k!==u[1]);_.push(g),n.length=0,n.push(..._),r=!0;break}}return n}function Pt(s,e){let t=s.map(n=>({...n}));for(let n of e){let r=t.find(o=>o.room_id===n.room_id&&o.edge===n.edge&&(Math.abs(o.t1-n.t0)<1e-6||Math.abs(n.t1-o.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):t.push({...n})}return t}function Rt(s,e){let t=new Map;s.forEach((r,o)=>{let i=M(E(e[r.b],e[r.a])),u=[[r.a,{key:`${o}:a`,d:i,left:r.left,right:r.right,angle:Math.atan2(i[1],i[0])}],[r.b,{key:`${o}:b`,d:C(i,-1),left:r.right,right:r.left,angle:Math.atan2(-i[1],-i[0])}]];for(let[c,l]of u){let d=t.get(c);d||t.set(c,d=[]),d.push(l)}});let n=new Map;for(let[r,o]of t){let i=e[r];o.sort((l,d)=>l.angle-d.angle);let u=l=>({left:z(i,C(Je(l.d),l.left)),right:z(i,C(Qe(l.d),l.right))});for(let l of o)n.set(l.key,u(l));if(o.length<2)continue;let c=4*Math.max(...o.map(l=>Math.max(l.left,l.right)))+1e-9;for(let l=0;l<o.length;l++){let d=o[l],h=o[(l+1)%o.length],g=z(i,C(Je(d.d),d.left)),_=z(i,C(Qe(h.d),h.right)),v=j(d.d,h.d);if(Math.abs(v)<1e-4)continue;let k=j(E(_,g),h.d)/v,x=z(g,C(d.d,k));ee(E(x,i))>c||(n.get(d.key).left=x,n.get(h.key).right=x)}}return n}function Mt(s,e){let t=s.filter((r,o)=>ee(E(r,s[(o+1)%s.length]))>e),n=!0;for(;n&&t.length>3;){n=!1;for(let r=0;r<t.length;r++){let o=t[(r+t.length-1)%t.length],i=t[r],u=t[(r+1)%t.length],c=E(i,o),l=E(u,i);if(Math.abs(j(M(c),M(l)))<1e-7&&te(c,l)>0){t=t.filter((d,h)=>h!==r),n=!0;break}}}return t}function tt(s,e,t){let n=s.points[e],r=s.points[(e+1)%s.points.length],o=M(E(r,n));return z(n,C(o,t))}function nt(s,e,t){if(s.wall){let r=t.find(u=>u.id===s.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let o=M(E(r.b,r.a));return{room:{id:s.room_id,name:"",area_id:null,points:[r.a,r.b,z(r.a,[-o[1],o[0]])]},edge:0}}let n=e.find(r=>r.id===s.room_id);return n&&s.edge<n.points.length?{room:n,edge:s.edge}:null}function rt(s,e,t){if(!e.wall)return Ot(s,t.room,t.edge,e.offset);let n=s.find(o=>o.free===e.wall);if(!n)return null;let r=tt(t.room,0,e.offset);return{wall:n,s:te(E(r,n.a),M(E(n.b,n.a)))}}function Ot(s,e,t,n){for(let r of s){if(!r.sources.find(u=>u.room_id===e.id&&u.edge===t&&n>=u.t0-1e-6&&n<=u.t1+1e-6))continue;let i=tt(e,t,n);return{wall:r,s:te(E(i,r.a),M(E(r.b,r.a)))}}return null}function ot(s){return s.floors.flatMap(e=>e.rooms.map(t=>({id:t.id,name:t.name,floor:e.name,area_id:t.area_id??null})))}function it(s){let e=[],t=new Set;for(let n of s.floors){let r=et(n.rooms,{exterior:s.settings.wall_exterior,interior:s.settings.wall_interior},n.walls??[]).walls;for(let o of n.openings){if(o.type==="window"&&!(o.sill<.1))continue;let i=nt(o,n.rooms,n.walls??[]),u=i&&rt(r,o,i),c=u==null?void 0:u.wall.roomLeft,l=u==null?void 0:u.wall.roomRight;if(!c||!l||c===l)continue;let d=[c,l].sort().join("|");t.has(d)||(t.add(d),e.push([c,l]))}}return e}function ke(s,e,t,n){var o;let r=s.floors.find(i=>i.id===e);return((o=r==null?void 0:r.rooms.find(i=>se([t,n],i.points)))==null?void 0:o.id)??null}var Lt="/neonplan3d_static/keys/index.html",Ct={title:"Configurar localizaci\xF3n",lab:"Lab",close:"Cerrar",s_scanners:"1 \xB7 Receptores",s_devices:"2 \xB7 Dispositivos",s_walk:"3 \xB7 Aprendizaje",s_live:"4 \xB7 En vivo",no_bt:"Home Assistant no tiene Bluetooth configurado. Basta con Shelly (Gen2/3: escaneo Bluetooth pasivo), proxies Bluetooth de ESPHome o un adaptador USB.",scanners_intro:"Estos son todos los receptores Bluetooth que conoce Home Assistant. Indica en qu\xE9 habitaci\xF3n est\xE1 cada uno.",not_placed:"\u2013 elige habitaci\xF3n \u2013",hint_room:"La se\xF1al dice: {room} \u2013 usar",coverage:"Habitaciones sin receptor propio \u2013 el aprendizaje las hace reconocibles igualmente:",devices_intro:"\xBFQu\xE9 dispositivos quieres localizar? Mejor lo que siempre llevas encima \u2013 el reloj en la mu\xF1eca es ideal.",known_keys:"iPhone y Apple Watch con clave (de \u201CPrivate BLE Device\u201D en Home Assistant):",add:"A\xF1adir",added:"\u2713 a\xF1adido",remove:"Quitar",person:"Persona",none:"ninguna",irk_help:"\xBFFalta el iPhone o el Apple Watch? Necesitan su clave (IRK) como \u201CPrivate BLE Device\u201D en Home Assistant \u2013 el manual muestra las formas m\xE1s sencillas.",manual:"Manual",voice_hint:"Pregunta tambi\xE9n por voz: \u201C\xBFD\xF3nde est\xE1 mi iPhone?\u201D, \u201C\xBFD\xF3nde est\xE1 Luc\xEDa?\u201D, \u201C\xBFQui\xE9n est\xE1 en casa?\u201D, \u201CHaz sonar mi iPhone\u201D.",look_hint:"En 3D las personas aparecen como figura; en el men\xFA \u2699 de la vista: Personas \u2192 figura, chincheta o desactivado.",ring:"Hacer sonar",ring_hint:"La app de Home Assistant en este m\xF3vil \u2013 as\xED funciona \u201CHaz sonar mi iPhone\u201D.",near_title:"Buscar dispositivo cercano",key_title:"Pegar clave",key_name:"Nombre (p. ej. iPhone de Luc\xEDa)",key_value:"Clave (IRK, 32 caracteres)",key_bad:"No es una clave v\xE1lida (32 caracteres hex o Base64).",helper_title:"\u{1F511} Asistente de clave",helper_none:"\xBFA\xFAn no tienes clave? Con un ESP32 (unos 5 \u20AC) CasaNeon la lee en tres minutos: iPhone, Apple Watch y Android, sin Mac.",helper_build:"Configurar el asistente de clave",helper_found:"Asistente de clave encontrado: {name}",helper_watch:"Para un Apple Watch",helper_phone:"Para un iPhone / Android",helper_watch_steps:"En el reloj: Ajustes \u2192 Bluetooth \u2192 en \xABDispositivos de salud\xBB toca \xABNeonPlan Key\xBB y enl\xE1zalo.",helper_phone_steps:"En el m\xF3vil: Ajustes \u2192 Bluetooth \u2192 enlaza \xABNeonPlan Key\xBB (aparece como teclado).",helper_key:"Clave le\xEDda:",helper_wait:"Esperando el enlace \u2026",helper_after:"Despu\xE9s, elimina el dispositivo \xABNeonPlan Key\xBB de los ajustes de Bluetooth.",helper_next:"\u{1F504} Siguiente dispositivo",helper_next_hint:"Toca antes de cada dispositivo nuevo: el asistente recibe una nueva identidad Bluetooth y un dispositivo ya emparejado deja de conectarse.",helper_name:"Nombre de este dispositivo",helper_irk:"Clave (IRK) le\xEDda del dispositivo que acaba de emparejarse:",helper_belongs:"Pertenece a: {name}",helper_add_as:"A\xF1adir como \xAB{name}\xBB",helper_added:"\u2713 \xAB{name}\xBB ya est\xE1 en la lista de arriba.",pbd_rename:"Consejo: c\xE1mbiale el nombre en Home Assistant (Dispositivos y servicios \u2192 Private BLE Device) y aparecer\xE1 aqu\xED.",carry:"Llevo conmigo:",offline:"no disponible ahora",pbd_summary:"\xBFVienes de Bermuda? Usar claves de Home Assistant",worn:"llevado",worn_hint:"Llevado encima (reloj, pulsera): indica d\xF3nde est\xE1 la persona; un m\xF3vil puede estar en cualquier sitio.",look_title:"Personas en 3D",look_figure:"Figura",look_pin:"Pin",look_off:"No",near_summary:"A\xF1adir un m\xF3vil Android o un llavero",android_label:"M\xF3vil Android (app de HA)",paste_summary:"Pegar una clave que ya tienes",helper_install:"Instalar en un ESP32",helper_pitch:"Para iPhone y Apple Watch: un ESP32 de unos 5 \u20AC se convierte en el asistente de claves en tres minutos, instalado desde el navegador, sin Mac. Luego empareja aqu\xED.",near_intro:"Acerca el dispositivo a un receptor. Android: activa \u201CBLE Transmitter\u201D en la app de Home Assistant. Llaveros: pulsa una vez.",near_empty:"A\xFAn nada fuerte cerca \u2026",walk_intro:"Entra en cada habitaci\xF3n, t\xF3cala y camina despacio durante 90 segundos \u2013 tambi\xE9n por las esquinas. Lleva todos los dispositivos.",learning:"Aprendiendo {room} \u2026 quedan {left} s",stop:"Cancelar",samples:"{n} muestras",quality:"Comprobar precisi\xF3n",quality_result:"Precisi\xF3n: {p}",relearn_all:"Volver a aprender todo",live_intro:"As\xED te ve CasaNeon ahora mismo. Camina un poco y comprueba si acierta.",enabled:"Localizaci\xF3n activada",admins_only:"Mostrar personas solo a administradores",not_heard:"sin se\xF1al",next:"Siguiente",need_device:"Primero a\xF1ade un dispositivo."};function st(s){let e=s.trim().replace(/^irk:/i,""),t=e.replace(/[\s:-]/g,"");if(/^[0-9a-f]{32}$/i.test(t))return t.toLowerCase();try{let n=atob(e.replace(/\s/g,""));if(n.length===16)return[...n].map(r=>r.charCodeAt(0).toString(16).padStart(2,"0")).join("")}catch{}return null}var Se=class extends F{static properties={hass:{attribute:!1},building:{attribute:!1},_step:{state:!0},_cfg:{state:!0},_near:{state:!0},_live:{state:!0},_quality:{state:!0},_error:{state:!0}};constructor(){super(),this._step="scanners",this._cfg=null,this._near=[],this._live=null,this._quality=null,this._error=""}timer=0;hassSource=null;setLook=null;unsub=null;get t(){return Ct}tr(e,t){return e.replace(/\{(\w+)\}/g,(n,r)=>String(t[r]??""))}get rooms(){return ot(this.building)}connectedCallback(){super.connectedCallback(),this.load().catch(e=>this._error=`load: ${(e==null?void 0:e.stack)??String(e)}`),this.timer=window.setInterval(()=>{this.tick()},1e3),this.hass.connection.subscribeMessage(e=>this._live=e,{type:"neonplan3d/locate/subscribe"}).then(e=>this.unsub=e).catch(()=>{})}disconnectedCallback(){var e;super.disconnectedCallback(),window.clearInterval(this.timer),(e=this.unsub)==null||e.call(this)}async call(e){try{return this._error="",await this.hass.callWS(e)}catch(t){return this._error=t.message??String(t),null}}async load(){var r;let e=await this.call({type:"neonplan3d/locate/config"});if(!e)return;let t={...e.scanner_rooms},n=!1;for(let o of e.scanners){if(t[o.source])continue;let i=this.guessRoom(o)??((r=e.scanner_hints)==null?void 0:r[o.source])??null;i&&(t[o.source]=i,n=!0)}this._cfg={...e,scanner_rooms:t},n&&await this.save({scanner_rooms:t})}guessRoom(e){var l,d,h;let t=g=>{var _,v;return typeof g=="string"&&!!e.device_id&&((v=(_=this.hass.entities)==null?void 0:_[g])==null?void 0:v.device_id)===e.device_id};if(e.device_id)for(let g of this.building.floors){for(let _ of g.placements){let v=t(_.entity_id)?ke(this.building,g.id,_.x,_.z):null;if(v)return v}for(let _ of g.furniture){if(!Object.values(_).some(t))continue;let v=ke(this.building,g.id,_.x,_.z);if(v)return v}}let n=e.device_id??((l=Object.values(this.hass.devices??{}).find(g=>[g.name_by_user,g.name].some(_=>_&&_.toLowerCase()===e.name.toLowerCase())))==null?void 0:l.id)??null,r=n?Object.values(this.hass.entities??{}).filter(g=>g.device_id===n&&g.area_id).map(g=>g.area_id):[],o=e.area_id??(n?(h=(d=this.hass.devices)==null?void 0:d[n])==null?void 0:h.area_id:null)??r[0]??null;if(o){let g=this.rooms.find(_=>_.area_id===o);if(g)return g.id}let i=g=>g.toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," "),u=` ${i(e.name)} `,c=this.rooms.filter(g=>i(g.name).trim().length>=3&&u.includes(i(g.name).trim()));return c.sort((g,_)=>i(_.name).length-i(g.name).length),c.length&&c.filter(g=>i(g.name)===i(c[0].name)).length===1?c[0].id:null}async save(e){let t=[];try{t=it(this.building)}catch(r){console.warn("NeonPlan locate: no door graph",r)}let n=await this.call({type:"neonplan3d/locate/configure",rooms:this.rooms,doors:t,...e});n&&(this._cfg={...n,scanner_rooms:{...n.scanner_rooms}})}async tick(){var t;let e=(t=this.hassSource)==null?void 0:t.call(this);if(e&&e!==this.hass&&(this.hass=e),this._step==="devices"&&this.nearOpen){let n=await this.call({type:"neonplan3d/locate/nearby"});n&&(this._near=n.devices)}if(this._step==="walk"){let n=await this.call({type:"neonplan3d/locate/calibrate",action:"status"});n&&this._cfg&&(this._cfg={...this._cfg,samples:n.samples},this._live={...this._live??{running:!0,devices:[]},calibration:n.calibration})}}render(){let e=this.t,t=this._cfg,n=[["scanners",e.s_scanners],["devices",e.s_devices],["walk",e.s_walk],["live",e.s_live]];return b`<div class="box" role="dialog" aria-label=${e.title}>
      <header>
        <b>📡 ${e.title}</b>
        <button class="x" @click=${()=>this.remove()} aria-label=${e.close}>✕</button>
      </header>
      <nav>${n.map(([r,o])=>b`<button class=${this._step===r?"on":""} @click=${()=>this._step=r}>${o}</button>`)}</nav>
      ${this._error?b`<pre class="err">${this._error}</pre>`:w}
      ${t?t.bluetooth?this.renderStep(t):b`<p>${e.no_bt}</p>`:b`<p>…</p>`}
    </div>`}manualLink(){return Ze()}renderStep(e){switch(this._step){case"scanners":return this.renderScanners(e);case"devices":return this.renderDevices(e);case"walk":return this.renderWalk(e);default:return this.renderLive(e)}}roomSelect(e,t){let n=[...new Set(this.rooms.map(r=>r.floor))];return b`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.not_placed}</option>
      ${n.map(r=>b`<optgroup label=${r}>${this.rooms.filter(o=>o.floor===r).map(o=>b`<option value=${o.id} ?selected=${o.id===e}>${o.name}</option>`)}</optgroup>`)}
    </select>`}renderScanners(e){let t=this.t,n=new Set(Object.values(e.scanner_rooms)),r=this.rooms.filter(o=>!n.has(o.id));return b`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${e.scanners.map(o=>{var i,u;return b`<li>
            <span><b>${o.name}</b><small>${o.offline?`\u26A0 ${t.offline}`:o.kind==="shelly"?"Shelly":o.kind==="esphome"?"ESPHome":"Bluetooth"}</small></span>
            ${this.roomSelect(e.scanner_rooms[o.source]??null,c=>{let l={...e.scanner_rooms};c?l[o.source]=c:delete l[o.source],this.save({scanner_rooms:l})})}
            ${(i=e.scanner_hints)!=null&&i[o.source]&&e.scanner_hints[o.source]!==e.scanner_rooms[o.source]?b`<button class="ghost" @click=${()=>{this.save({scanner_rooms:{...e.scanner_rooms,[o.source]:e.scanner_hints[o.source]}})}}>
                  ${this.tr(t.hint_room,{room:((u=this.rooms.find(c=>c.id===e.scanner_hints[o.source]))==null?void 0:u.name)??""})}
                </button>`:w}
          </li>`})}
      </ul>
      ${r.length?b`<p class="hint">${t.coverage} ${r.map(o=>o.name).join(", ")}</p>`:w}
      <p class="end"><button class="primary" @click=${()=>this._step="devices"}>${t.next} →</button></p>`}personSelect(e,t){let n=Object.keys(this.hass.states).filter(r=>r.startsWith("person."));return b`<select @change=${r=>t(r.target.value||null)}>
      <option value="" ?selected=${!e}>${this.t.person}: ${this.t.none}</option>
      ${n.map(r=>b`<option value=${r} ?selected=${r===e}>${this.hass.states[r].attributes.friendly_name??r}</option>`)}
    </select>`}keyHelpers(){var t,n,r,o,i,u;let e=[];for(let[c,l]of Object.entries(this.hass.states)){let d=l.attributes.options;if(!c.startsWith("select.")||!Array.isArray(d)||!d.includes("Heart Sensor")||!d.includes("Keyboard"))continue;let h=(n=(t=this.hass.entities)==null?void 0:t[c])==null?void 0:n.device_id,g=(r=Object.values(this.hass.entities??{}).find(T=>T.device_id===h&&/_irk$/.test(T.entity_id)))==null?void 0:r.entity_id,_=g?(o=this.hass.states[g])==null?void 0:o.state:void 0,v=h?(i=this.hass.devices)==null?void 0:i[h]:void 0,k=(v==null?void 0:v.name_by_user)||(v==null?void 0:v.name)||String(l.attributes.friendly_name??c),x=((u=Object.values(this.hass.entities??{}).find(T=>T.device_id===h&&/_refresh_ble_identity$/.test(T.entity_id)))==null?void 0:u.entity_id)??null;e.push({name:k,select:c,option:l.state,irk:_?st(_):null,ours:(v==null?void 0:v.model)==="neonplan_key"||/neonplan[ _]key/i.test(c),refresh:x})}return e.sort((c,l)=>Number(l.ours)-Number(c.ours))}notCarried=new Set;nearOpen=!1;helperId=null;helperName="";helperPerson=null;helperAdded=null;renderKeyHelper(e){var v,k;let t=this.t,n=this.keyHelpers(),r=n.find(x=>x.select===this.helperId)??n[0],o=b`<div class="helper-head">
        <h4>${t.helper_title}</h4>
        <a class="install" href=${Lt} target="_blank" rel="noopener">⚡ ${t.helper_install} ↗</a>
      </div>
      <p class="hint">${t.helper_pitch}</p>`;if(!r)return o;let i=r.option==="Heart Sensor",u=x=>{this.hass.callService("select","select_option",{entity_id:r.select,option:x})},c=x=>x.match(/../g).reverse().join(""),l=x=>!!r.irk&&!!x&&(x.toLowerCase()===r.irk||x.toLowerCase()===c(r.irk)),d=((v=e.devices.find(x=>l(x.key)))==null?void 0:v.name)??null,h=((k=e.private_ble.find(x=>l(x.key)))==null?void 0:k.title)??null,g=this.helperName||(i?"Apple Watch":"iPhone"),_=x=>`${x.slice(0,4)}\u2026${x.slice(-4)}`;return b`${o}
      ${n.length>1?b`<p class="hint">
            <select
              @change=${x=>{this.helperId=x.target.value,this.requestUpdate()}}
            >
              ${n.map(x=>b`<option value=${x.select} ?selected=${x.select===r.select}>${x.name}</option>`)}
            </select>
          </p>`:b`<p class="hint">${this.tr(t.helper_found,{name:r.name})}</p>`}
      <div class="row">
        <button class=${i?"on":""} @click=${()=>u("Heart Sensor")}>⌚ ${t.helper_watch}</button>
        <button class=${i?"":"on"} @click=${()=>u("Keyboard")}>📱 ${t.helper_phone}</button>
      </div>
      <div class="row">
        <input
          placeholder=${t.helper_name}
          title=${t.helper_name}
          .value=${this.helperName}
          @input=${x=>this.helperName=x.target.value}
        />
        ${this.personSelect(this.helperPerson,x=>{this.helperPerson=x,this.requestUpdate()})}
      </div>
      <p class="hint">${i?t.helper_watch_steps:t.helper_phone_steps}</p>
      <ul class="list">
        <li>
          <span>
            <b>${t.helper_irk}</b>
            <small>${r.irk?_(r.irk):t.helper_wait}</small>
            ${d||h?b`<small>${this.tr(t.helper_belongs,{name:d??h??""})}</small>`:w}
          </span>
          ${r.irk&&!d?b`<button
                class="primary"
                @click=${()=>{this.addDevice(e,{name:g,kind:"irk",key:r.irk},this.helperPerson),this.helperAdded=g,this.helperName=""}}
              >
                ${this.tr(t.helper_add_as,{name:g})}
              </button>`:w}
        </li>
      </ul>
      ${this.helperAdded?b`<p class="hint">${this.tr(t.helper_added,{name:this.helperAdded})}</p>`:w}
      <p class="hint">${t.helper_after}</p>
      ${r.refresh?b`<p class="end">
            <small>${t.helper_next_hint}</small>
            <button @click=${()=>{this.hass.callService("button","press",{entity_id:r.refresh})}}>${t.helper_next}</button>
          </p>`:w}`}notifySelect(e,t){let n=this.hass.services,r=Object.keys((n==null?void 0:n.notify)??{}).filter(o=>o.startsWith("mobile_app_"));return r.length?b`<select title=${this.t.ring_hint} @change=${o=>t(o.target.value||null)}>
      <option value="" ?selected=${!e}>🔔 ${this.t.ring}: ${this.t.none}</option>
      ${r.map(o=>b`<option value=${`notify.${o}`} ?selected=${e===`notify.${o}`}>🔔 ${o.replace(/^mobile_app_/,"").replace(/_/g," ")}</option>`)}
    </select>`:w}addDevice(e,t,n=null){let r=`${t.kind}_${t.key.replace(/[^a-z0-9]/gi,"").slice(-10).toLowerCase()}`;e.devices.some(o=>o.id===r)||this.save({devices:[...e.devices,{...t,id:r,person:n,icon:null}]})}renderDevices(e){let t=this.t,n=o=>e.devices.some(i=>i.key.toLowerCase()===o.toLowerCase()),r=(o,i)=>{this.save({devices:e.devices.map(u=>u.id===o?{...u,...i}:u)})};return b`<p>${t.devices_intro}</p>
      ${e.devices.length?b`<ul class="list">
            ${e.devices.map(o=>b`<li>
                <input .value=${o.name} @change=${i=>r(o.id,{name:i.target.value})} />
                ${this.personSelect(o.person,i=>r(o.id,{person:i}))}
                ${this.notifySelect(o.notify??null,i=>r(o.id,{notify:i}))}
                <label class="row" title=${t.worn_hint}
                  ><input type="checkbox" .checked=${!!o.wearable} @change=${i=>r(o.id,{wearable:i.target.checked})} />⌚
                  ${t.worn}</label
                >
                <button @click=${()=>{this.save({devices:e.devices.filter(i=>i.id!==o.id)})}}>${t.remove}</button>
              </li>`)}
          </ul>`:w}
      ${this.renderKeyHelper(e)}
      <details
        class="pbd"
        @toggle=${o=>{this.nearOpen=o.target.open}}
      >
        <summary>📱 ${t.near_summary}</summary>
        <p class="hint">${t.near_intro}</p>
        <ul class="list">
          ${(()=>{let o=this._near.filter(i=>(i.ibeacon||!i.random)&&i.rssi>=-68).sort((i,u)=>+!!u.ibeacon-+!!i.ibeacon||u.rssi-i.rssi).slice(0,5);return o.length?o.map(i=>b`<li>
                    <span><b>${i.ibeacon?`\u{1F4F1} ${t.android_label}`:i.name??i.address}</b><small>${i.rssi} dBm</small></span>
                    ${n(i.ibeacon??i.address)?b`<small>${t.added}</small>`:b`<button @click=${()=>this.addDevice(e,i.ibeacon?{name:t.android_label,kind:"ibeacon",key:i.ibeacon}:{name:i.name??i.address,kind:"mac",key:i.address})}>${t.add}</button>`}
                  </li>`):b`<li><small>${t.near_empty}</small></li>`})()}
        </ul>
      </details>
      <details class="pbd">
        <summary>🔑 ${t.paste_summary}</summary>
      <div class="row">
        <input id="keyname" placeholder=${t.key_name} />
        <input id="keyvalue" placeholder=${t.key_value} spellcheck="false" autocomplete="off" />
        <button
          @click=${()=>{let o=this.renderRoot.querySelector("#keyname").value.trim(),i=st(this.renderRoot.querySelector("#keyvalue").value);if(!i){this._error=t.key_bad;return}this._error="",this.addDevice(e,{name:o||"iPhone",kind:"irk",key:i})}}
        >
          ${t.add}
        </button>
      </div>
      </details>
      <p class="hint">${t.irk_help} <a href=${this.manualLink()} target="_blank" rel="noopener">${t.manual} ↗</a></p>
      <p class="end"><button class="primary" ?disabled=${!e.devices.length} @click=${()=>this._step="walk"}>${t.next} →</button></p>`}renderWalk(e){var u,c;let t=this.t,n=((u=this._live)==null?void 0:u.calibration)??null;if(!e.devices.length)return b`<p>${t.need_device}</p>`;let r=l=>Math.max(0,...e.devices.map(d=>{var h;return((h=e.samples[d.id])==null?void 0:h[l])??0})),o=[...new Set(this.rooms.map(l=>l.floor))],i=this._quality;return b`<p>${t.walk_intro}</p>
      ${e.devices.length>1?b`<div class="row">
            <b>${t.carry}</b>
            ${e.devices.map(l=>b`<label class="row"
                ><input
                  type="checkbox"
                  .checked=${!this.notCarried.has(l.id)}
                  @change=${d=>{d.target.checked?this.notCarried.delete(l.id):this.notCarried.add(l.id),this.requestUpdate()}}
                />
                ${l.name}</label
              >`)}
          </div>`:w}
      ${n?b`<div class="learning">
            ${this.tr(t.learning,{room:((c=this.rooms.find(l=>l.id===n.room))==null?void 0:c.name)??"",left:n.left})}
            <div class="bar"><i style="width:${Math.round((90-n.left)/90*100)}%"></i></div>
            <button @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"stop"})}}>${t.stop}</button>
          </div>`:w}
      ${o.map(l=>b`<h4>${l}</h4>
          <div class="rooms">
            ${this.rooms.filter(d=>d.floor===l).map(d=>{let h=r(d.id),g=i&&h>0?e.devices.map(v=>{var k;return(k=i[v.id])==null?void 0:k.rooms[d.id]}).filter(v=>typeof v=="number"):[],_=g.length?Math.min(...g):null;return b`<button
                  class=${(n==null?void 0:n.room)===d.id?"on":h>=30?"done":""}
                  ?disabled=${!!n}
                  @click=${async()=>{let v=e.devices.filter(x=>!this.notCarried.has(x.id)).map(x=>x.id),k=await this.call({type:"neonplan3d/locate/calibrate",action:"start",room:d.id,seconds:90,devices:v});k&&(this._live={...this._live??{running:!0,devices:[]},calibration:k.calibration}),k&&!e.enabled&&await this.save({enabled:!0})}}
                >
                  ${h>=30?"\u2713 ":""}${d.name}<small>${this.tr(t.samples,{n:h})}${_!==null?` \xB7 ${Math.round(_*100)} %`:""}</small>
                </button>`})}
          </div>`)}
      <p class="end">
        <button @click=${async()=>this._quality=await this.call({type:"neonplan3d/locate/quality"})}>${t.quality}</button>
        ${i?b`<b>${this.tr(t.quality_result,{p:e.devices.map(l=>{var d;return`${l.name} ${((d=i[l.id])==null?void 0:d.overall)!=null?Math.round(i[l.id].overall*100):"\u2013"} %`}).join(" \xB7 ")})}</b>`:w}
        <button class="primary" @click=${()=>this._step="live"}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${()=>{this.call({type:"neonplan3d/locate/calibrate",action:"clear"}).then(()=>this.load())}}>${t.relearn_all}</button></p>`}renderLive(e){let t=this.t,n=this._live,r=o=>{var i;return(i=this.rooms.find(u=>u.id===o))==null?void 0:i.name};return b`<p>${t.live_intro}</p>
      <p class="hint">${t.voice_hint}</p>
      <label class="row"><input type="checkbox" .checked=${e.enabled} @change=${o=>{this.save({enabled:o.target.checked})}} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${e.admins_only} @change=${o=>{this.save({admins_only:o.target.checked})}} /> ${t.admins_only}</label>
      ${this.setLook?b`<div class="row">
            <b>${t.look_title}</b>
            ${["figure","pin","off"].map(o=>b`<button
                class=${(this.building.settings.person_look??"figure")===o?"on":""}
                @click=${()=>{var i;(i=this.setLook)==null||i.call(this,o),this.building={...this.building,settings:{...this.building.settings,person_look:o==="figure"?null:o}}}}
              >
                ${o==="figure"?t.look_figure:o==="pin"?t.look_pin:t.look_off}
              </button>`)}
          </div>`:w}
      <ul class="list big">
        ${((n==null?void 0:n.devices)??[]).map(o=>b`<li>
            <span><b>${o.name}</b></span>
            <span>${o.room?b`<b class="room">${r(o.room)}</b> <small>${Math.round((o.probability??0)*100)} %</small>`:b`<small>${t.not_heard}</small>`}</span>
          </li>`)}
      </ul>`}static styles=le`
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
  `};customElements.get("fp3d-locate-setup")||customElements.define("fp3d-locate-setup",Se);function On(s,e,t,n){var o;(o=document.querySelector("fp3d-locate-setup"))==null||o.remove();let r=document.createElement("fp3d-locate-setup");r.hass=s,r.hassSource=t??null,r.setLook=n??null,r.building=e,document.body.append(r)}export{On as openLocateSetup};
