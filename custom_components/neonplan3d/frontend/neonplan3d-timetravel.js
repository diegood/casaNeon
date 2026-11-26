var St=new Map;function Jn(r){return r.startsWith("pack:")}var eo={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function me(r){if(!Jn(r))return;let e=St.get(r);if(e)return e;let[,t,...n]=r.split(":"),o=eo[t];return o?St.get(`pack:${o}:${n.join(":")}`):void 0}var oo={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},xr=Object.keys(oo);function ro(r){return r==="hedge"||r==="fence"||r==="pergola"}function Et(r){return(r.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!ro(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function At(r){return[...r.rooms,...Et(r)]}var ao={type:"none",pitch:35,overhang:.4},Ar={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...ao}};var Rt=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function Tt(r){var e;return Rt.has(r)||!!((e=me(r))!=null&&e.light)}var no=new Set([...Rt,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","neon_sign","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function z(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[a,i]=e[n],[l,s]=e[o];i>r[1]!=s>r[1]&&r[0]<(l-a)*(r[1]-i)/(s-i)+a&&(t=!t)}return t}var Fr=Math.PI/180;var Ur=Math.PI/180;function Oe(r,e){var o;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let a=(o=r.devices)==null?void 0:o[n];if(!a)return null;if(a.area_id)return a.area_id;n=a.parent_device_id}return null}function $t(r,e){var n;let t=(n=r.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:Oe(r,t.device_id):null}var fe=r=>r&&r!=="none"?r:null;function Ne(r,e=t=>fe(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of r.floors)for(let o of n.furniture){let a=e(o);if(o.type==="meter")t.grid??=a,t.gridExport??=fe(o.export);else if(o.type==="inverter"&&a&&!t.solar.includes(a))t.solar.push(a);else if(o.type==="home_battery"){a&&!t.battery.includes(a)&&t.battery.push(a);let i=fe(o.charge);i&&!t.charge.includes(i)&&t.charge.push(i),(a||i)&&t.batteries.push({power:a,charge:i});let l=fe(o.soc);l&&!t.soc.includes(l)&&t.soc.push(l)}}return t}function $(r,e=!1){if(!r)return null;let t=Number(r.state);if(!Number.isFinite(t))return null;let n=String(r.attributes.unit_of_measurement??"W"),o=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-o:o}function io(r,e,t){let n=(e.settings.roof.strings??[]).filter(o=>(t===void 0||o.inverter===t)&&o.entity&&o.entity!=="none").map(o=>$(r.states[o.entity])).filter(o=>o!==null);return n.length?n.reduce((o,a)=>o+Math.max(0,a),0):null}function so(r,e){return e===null?r:r===null||Math.max(0,r)<5&&e>50?e:r}function Ct(r,e,t,n=Ne(e)){let o=e.energy,a=o.grid??n.grid,i=a?$(r.states[a],o.grid_invert):null;if(!o.grid&&n.gridExport){let f=Math.max(0,$(r.states[n.gridExport])??0);i=Math.max(0,i??0)-f}let l=o.solar?$(r.states[o.solar]):null;if(!o.solar&&n.solar.length){let f=n.solar.map(y=>$(r.states[y])).filter(y=>y!==null);l=f.length?f.reduce((y,w)=>y+w,0):null}l=so(l,io(r,e));let s=o.battery?$(r.states[o.battery],o.battery_invert):null;if(!o.battery&&n.batteries.length){let f=n.batteries.map(y=>{if(y.charge){let w=y.power?Math.max(0,$(r.states[y.power])??0):0,b=Math.max(0,$(r.states[y.charge])??0);return w-b}return y.power?$(r.states[y.power],o.battery_invert):null}).filter(y=>y!==null);s=f.length?f.reduce((y,w)=>y+w,0):null}let u=(o.battery_soc?[o.battery_soc]:n.soc).map(f=>{var y;return Number((y=r.states[f])==null?void 0:y.state)}).filter(f=>Number.isFinite(f)),p=u.length?u.reduce((f,y)=>f+y,0)/u.length:NaN,d=o.tariff?r.states[o.tariff]:void 0,h=Number(d==null?void 0:d.state),m=o.consumption?$(r.states[o.consumption]):null;return m!==null?m=Math.max(0,m):i!==null||l!==null||s!==null?m=Math.max(0,(i??0)+Math.max(0,l??0)+(s??0)):t.length&&(m=t.reduce((f,y)=>f+y.power,0)),{grid:i,solar:l===null?null:Math.max(0,l),battery:s,soc:Number.isFinite(p)?p:null,tariff:d&&Number.isFinite(h)?{value:h,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:m}}var he=globalThis,ge=he.ShadowRoot&&(he.ShadyCSS===void 0||he.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,He=Symbol(),Ft=new WeakMap,te=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==He)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ge&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=Ft.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&Ft.set(t,e))}return e}toString(){return this.cssText}},Dt=r=>new te(typeof r=="string"?r:r+"",void 0,He),Le=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((n,o,a)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[a+1],r[0]);return new te(t,r,He)},Ot=(r,e)=>{if(ge)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),o=he.litNonce;o!==void 0&&n.setAttribute("nonce",o),n.textContent=t.cssText,r.appendChild(n)}},je=ge?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return Dt(t)})(r):r;var{is:lo,defineProperty:co,getOwnPropertyDescriptor:uo,getOwnPropertyNames:po,getOwnPropertySymbols:mo,getPrototypeOf:fo}=Object,_e=globalThis,Nt=_e.trustedTypes,ho=Nt?Nt.emptyScript:"",Ve=_e.reactiveElementPolyfillSupport,ne=(r,e)=>r,Ie={toAttribute(r,e){switch(e){case Boolean:r=r?ho:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Lt=(r,e)=>!lo(r,e),Ht={attribute:!0,type:String,converter:Ie,reflect:!1,useDefault:!1,hasChanged:Lt};Symbol.metadata??=Symbol("metadata"),_e.litPropertyMetadata??=new WeakMap;var F=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ht){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),o=this.getPropertyDescriptor(e,n,t);o!==void 0&&co(this.prototype,e,o)}}static getPropertyDescriptor(e,t,n){let{get:o,set:a}=uo(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:o,set(i){let l=o==null?void 0:o.call(this);a==null||a.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ht}static _$Ei(){if(this.hasOwnProperty(ne("elementProperties")))return;let e=fo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne("properties"))){let t=this.properties,n=[...po(t),...mo(t)];for(let o of n)this.createProperty(o,t[o])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,o]of t)this.elementProperties.set(n,o)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let o=this._$Eu(t,n);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let o of n)t.unshift(je(o))}else e!==void 0&&t.push(je(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ot(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var a;let n=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,n);if(o!==void 0&&n.reflect===!0){let i=(((a=n.converter)==null?void 0:a.toAttribute)!==void 0?n.converter:Ie).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(e,t){var a,i;let n=this.constructor,o=n._$Eh.get(e);if(o!==void 0&&this._$Em!==o){let l=n.getPropertyOptions(o),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((a=l.converter)==null?void 0:a.fromAttribute)!==void 0?l.converter:Ie;this._$Em=o;let c=s.fromAttribute(t,l.type);this[o]=c??((i=this._$Ej)==null?void 0:i.get(o))??c,this._$Em=null}}requestUpdate(e,t,n,o=!1,a){var i;if(e!==void 0){let l=this.constructor;if(o===!1&&(a=this[e]),n??=l.getPropertyOptions(e),!((n.hasChanged??Lt)(a,t)||n.useDefault&&n.reflect&&a===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:o,wrapped:a},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),a!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[a,i]of this._$Ep)this[a]=i;this._$Ep=void 0}let o=this.constructor.elementProperties;if(o.size>0)for(let[a,i]of o){let{wrapped:l}=i,s=this[a];l!==!0||this._$AL.has(a)||s===void 0||this.C(a,void 0,i,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(t)):this._$EM()}catch(o){throw e=!1,this._$EM(),o}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var o;return(o=n.hostUpdated)==null?void 0:o.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};F.elementStyles=[],F.shadowRootOptions={mode:"open"},F[ne("elementProperties")]=new Map,F[ne("finalized")]=new Map,Ve==null||Ve({ReactiveElement:F}),(_e.reactiveElementVersions??=[]).push("2.1.2");var Ye=globalThis,jt=r=>r,be=Ye.trustedTypes,Vt=be?be.createPolicy("lit-html",{createHTML:r=>r}):void 0,Kt="$lit$",O=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+O,go=`<${Gt}>`,I=document,re=()=>I.createComment(""),ae=r=>r===null||typeof r!="object"&&typeof r!="function",Xe=Array.isArray,_o=r=>Xe(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",We=`[ 	
\f\r]`,oe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,It=/-->/g,Wt=/>/g,j=RegExp(`>|${We}(?:([^\\s"'>=/]+)(${We}*=${We}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Bt=/"/g,Qt=/^(?:script|style|textarea|title)$/i,Ze=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),x=Ze(1),Yt=Ze(2),wa=Ze(3),W=Symbol.for("lit-noChange"),v=Symbol.for("lit-nothing"),Ut=new WeakMap,V=I.createTreeWalker(I,129);function Xt(r,e){if(!Xe(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vt!==void 0?Vt.createHTML(e):e}var bo=(r,e)=>{let t=r.length-1,n=[],o,a=e===2?"<svg>":e===3?"<math>":"",i=oe;for(let l=0;l<t;l++){let s=r[l],c,u,p=-1,d=0;for(;d<s.length&&(i.lastIndex=d,u=i.exec(s),u!==null);)d=i.lastIndex,i===oe?u[1]==="!--"?i=It:u[1]!==void 0?i=Wt:u[2]!==void 0?(Qt.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=j):u[3]!==void 0&&(i=j):i===j?u[0]===">"?(i=o??oe,p=-1):u[1]===void 0?p=-2:(p=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?j:u[3]==='"'?Bt:qt):i===Bt||i===qt?i=j:i===It||i===Wt?i=oe:(i=j,o=void 0);let h=i===j&&r[l+1].startsWith("/>")?" ":"";a+=i===oe?s+go:p>=0?(n.push(c),s.slice(0,p)+Kt+s.slice(p)+O+h):s+O+(p===-2?l:h)}return[Xt(r,a+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ie=class r{constructor({strings:e,_$litType$:t},n){let o;this.parts=[];let a=0,i=0,l=e.length-1,s=this.parts,[c,u]=bo(e,t);if(this.el=r.createElement(c,n),V.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(o=V.nextNode())!==null&&s.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(let p of o.getAttributeNames())if(p.endsWith(Kt)){let d=u[i++],h=o.getAttribute(p).split(O),m=/([.?@])?(.*)/.exec(d);s.push({type:1,index:a,name:m[2],strings:h,ctor:m[1]==="."?Ue:m[1]==="?"?Ke:m[1]==="@"?Ge:Q}),o.removeAttribute(p)}else p.startsWith(O)&&(s.push({type:6,index:a}),o.removeAttribute(p));if(Qt.test(o.tagName)){let p=o.textContent.split(O),d=p.length-1;if(d>0){o.textContent=be?be.emptyScript:"";for(let h=0;h<d;h++)o.append(p[h],re()),V.nextNode(),s.push({type:2,index:++a});o.append(p[d],re())}}}else if(o.nodeType===8)if(o.data===Gt)s.push({type:2,index:a});else{let p=-1;for(;(p=o.data.indexOf(O,p+1))!==-1;)s.push({type:7,index:a}),p+=O.length-1}a++}}static createElement(e,t){let n=I.createElement("template");return n.innerHTML=e,n}};function G(r,e,t=r,n){var i,l;if(e===W)return e;let o=n!==void 0?(i=t._$Co)==null?void 0:i[n]:t._$Cl,a=ae(e)?void 0:e._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((l=o==null?void 0:o._$AO)==null||l.call(o,!1),a===void 0?o=void 0:(o=new a(r),o._$AT(r,t,n)),n!==void 0?(t._$Co??=[])[n]=o:t._$Cl=o),o!==void 0&&(e=G(r,o._$AS(r,e.values),o,n)),e}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,o=((e==null?void 0:e.creationScope)??I).importNode(t,!0);V.currentNode=o;let a=V.nextNode(),i=0,l=0,s=n[0];for(;s!==void 0;){if(i===s.index){let c;s.type===2?c=new se(a,a.nextSibling,this,e):s.type===1?c=new s.ctor(a,s.name,s.strings,this,e):s.type===6&&(c=new Qe(a,this,e)),this._$AV.push(c),s=n[++l]}i!==(s==null?void 0:s.index)&&(a=V.nextNode(),i++)}return V.currentNode=I,o}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},se=class r{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,o){this.type=2,this._$AH=v,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=G(this,e,t),ae(e)?e===v||e==null||e===""?(this._$AH!==v&&this._$AR(),this._$AH=v):e!==this._$AH&&e!==W&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):_o(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==v&&ae(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var a;let{values:t,_$litType$:n}=e,o=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ie.createElement(Xt(n.h,n.h[0]),this.options)),n);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(t);else{let i=new Be(o,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=Ut.get(e.strings);return t===void 0&&Ut.set(e.strings,t=new ie(e)),t}k(e){Xe(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,o=0;for(let a of e)o===t.length?t.push(n=new r(this.O(re()),this.O(re()),this,this.options)):n=t[o],n._$AI(a),o++;o<t.length&&(this._$AR(n&&n._$AB.nextSibling,o),t.length=o)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let o=jt(e).nextSibling;jt(e).remove(),e=o}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,o,a){this.type=1,this._$AH=v,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=a,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=v}_$AI(e,t=this,n,o){let a=this.strings,i=!1;if(a===void 0)e=G(this,e,t,0),i=!ae(e)||e!==this._$AH&&e!==W,i&&(this._$AH=e);else{let l=e,s,c;for(e=a[0],s=0;s<a.length-1;s++)c=G(this,l[n+s],t,s),c===W&&(c=this._$AH[s]),i||=!ae(c)||c!==this._$AH[s],c===v?e=v:e!==v&&(e+=(c??"")+a[s+1]),this._$AH[s]=c}i&&!o&&this.j(e)}j(e){e===v?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ue=class extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===v?void 0:e}},Ke=class extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==v)}},Ge=class extends Q{constructor(e,t,n,o,a){super(e,t,n,o,a),this.type=5}_$AI(e,t=this){if((e=G(this,e,t,0)??v)===W)return;let n=this._$AH,o=e===v&&n!==v||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,a=e!==v&&(n===v||o);o&&this.element.removeEventListener(this.name,this,n),a&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Qe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){G(this,e)}};var qe=Ye.litHtmlPolyfillSupport;qe==null||qe(ie,se),(Ye.litHtmlVersions??=[]).push("3.3.3");var Zt=(r,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,o=n._$litPart$;if(o===void 0){let a=(t==null?void 0:t.renderBefore)??null;n._$litPart$=o=new se(e.insertBefore(re(),a),a,void 0,t??{})}return o._$AI(r),o};var le=globalThis,N=class extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return W}},Jt;N._$litElement$=!0,N.finalized=!0,(Jt=le.litElementHydrateSupport)==null||Jt.call(le,{LitElement:N});var Je=le.litElementPolyfillSupport;Je==null||Je({LitElement:N});(le.litElementVersions??=[]).push("4.2.2");var yo=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),vo=new Set(["power","plug","connectivity","running"]);function en(r){if(!r||r.state==="unavailable"||r.state==="unknown")return!1;let e=r.entity_id.split(".")[0];if(e==="binary_sensor")return vo.has(String(r.attributes.device_class))?r.state==="off":r.state==="on";if(e==="input_boolean"||e==="switch")return r.state==="on";let t=Number(r.state);if(r.state!==""&&Number.isFinite(t))return r.attributes.unit_of_measurement==="V"&&t<100;let n=String(r.state).toLowerCase().trim();return yo.has(n)||n.startsWith("ob ")}function q(r,e,t=9e5){let n=r.mean.length;if(!n||e<r.start)return NaN;let o=(e-r.start)/r.step-.5,a=Math.floor(o);if(a<0)return r.mean[0];if(a>=n-1){let u=tn(r,n-1);return u>=0&&e-(r.start+(u+.5)*r.step)<=t?r.mean[u]:NaN}let i=r.mean[a],l=r.mean[a+1],s=o-a;if(!Number.isNaN(i)&&!Number.isNaN(l))return i+(l-i)*s;let c=tn(r,a);return c>=0&&e-(r.start+(c+.5)*r.step)<=t?r.mean[c]:NaN}function tn(r,e){for(let t=e;t>=0;t--)if(!Number.isNaN(r.mean[t]))return t;return-1}function nn(r,e,t=0){if(typeof e=="number"&&e>=0&&e<=6)return 10**-e;switch(typeof r=="string"?r:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(t)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(t)>=100?1:Math.abs(t)>=10?.1:.01}}function on(r,e){if(!Number.isFinite(r))return"unknown";let t=e>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(e)))),o=(Math.round(r/e)*e).toFixed(t);return/^-0(\.0*)?$/.test(o)?o.slice(1):o}var wo=r=>typeof r=="string"?{s:r,a:null}:{s:String(r[0]),a:r[1]&&typeof r[1]=="object"?r[1]:null},H=r=>`${r.s}\0${r.a?JSON.stringify(r.a):""}`;function an(r){let e=[...r].sort((d,h)=>d.day_start-h.day_start),t=new Map,n=new Map,o=new Set,a=1/0,i=-1/0,l=null,s=!1,c=null;for(let d of e){a=Math.min(a,d.day_start*1e3),i=Math.max(i,d.end*1e3),d.oldest===null?s=!0:l=l===null?d.oldest*1e3:Math.min(l,d.oldest*1e3),c??=d.keep_days;for(let[h,m]of Object.entries(d.entities??{})){let f=t.get(h)??[],y=d.day_start*1e3,w=Math.min(m.t.length,m.v.length);for(let b=0;b<w;b++){let g=m.tab[m.v[b]];if(g===void 0)continue;let _=wo(g),M=H(_),T=f[f.length-1],ee=y+m.t[b]*1e3;T&&(ee<T.t||T.k===M)||f.push({t:ee,v:_,k:M})}t.set(h,f)}for(let[h,m]of Object.entries(d.stats??{})){let f=n.get(h)??[];f.push({start:m.start*1e3,step:m.step*1e3,mean:m.mean}),n.set(h,f)}for(let h of d.missing??[])o.add(h)}let u=new Map;for(let[d,h]of t){if(!h.length)continue;let m=[],f=new Map,y=new Float64Array(h.length),w=new Uint32Array(h.length),b=new Float64Array(h.length);for(let g=0;g<h.length;g++){let _=f.get(h[g].k);_===void 0&&(_=m.length,m.push(h[g].v),f.set(h[g].k,_)),y[g]=h[g].t,w[g]=_,b[g]=g>0&&h[g-1].v.s===h[g].v.s?b[g-1]:h[g].t}u.set(d,{id:d,times:y,vals:w,values:m,since:b}),o.delete(d)}let p=new Map;for(let[d,h]of n){let m=h[0].step;if(!(m>0))continue;let f=Math.min(...h.map(g=>g.start)),y=Math.max(...h.map(g=>g.start+g.mean.length*g.step)),w=Math.max(0,Math.round((y-f)/m));if(!w)continue;let b=new Float32Array(w).fill(NaN);for(let g of h)g.mean.forEach((_,M)=>{let T=Math.round((g.start+M*g.step-f)/m);typeof _=="number"&&Number.isFinite(_)&&T>=0&&T<w&&(b[T]=_)});b.every(g=>Number.isNaN(g))||(p.set(d,{id:d,start:f,step:m,mean:b}),o.delete(d))}return{start:Number.isFinite(a)?a:0,end:Number.isFinite(i)?i:0,oldest:s?null:l,keepDays:c,tracks:u,series:p,missing:o}}function R(r,e){let t=0,n=r.length-1;if(n<0||r[0]>e)return-1;for(;t<n;){let o=t+n+1>>1;r[o]<=e?t=o:n=o-1}return t}var Y=class{tracks;idx;t=-1/0;constructor(e){this.tracks=[...e.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(e){let t=e>=this.t;for(let n=0;n<this.tracks.length;n++){let o=this.tracks[n].times,a=this.idx[n];if(!t)a=R(o,e);else{let i=0;for(;a+1<o.length&&o[a+1]<=e&&i<8;)a++,i++;a+1<o.length&&o[a+1]<=e&&(a=R(o,e))}this.idx[n]=a}return this.t=e,this.idx}value(e){let t=this.idx[e];return t<0?null:this.tracks[e].values[this.tracks[e].vals[t]]}},xo=new Set(["unavailable","unknown"]);function et(r,e=5*6e4,t=.6,n=10*6e4,o=-1/0){let a=new Y(r);if(!a.tracks.length)return[];let i=Math.max(r.oldest??r.start,o),l=[],s=null;for(let c=i;c<=r.end;c+=e){a.at(c);let u=0;for(let d=0;d<a.tracks.length;d++){let h=a.value(d);(!h||xo.has(h.s))&&u++}let p=u/a.tracks.length>=t;p&&s===null&&(s=c),!p&&s!==null&&(c-s>=n&&l.push([s,c]),s=null)}return s!==null&&r.end-s>=n&&l.push([s,r.end]),l}function sn(r){for(let e=0;e<r.times.length;e++)r.since[e]=e>0&&r.values[r.vals[e-1]].s===r.values[r.vals[e]].s?r.since[e-1]:r.times[e]}function ko(r,e){let t=[...r.values],n=new Map(t.map((c,u)=>[H(c),u])),o=e.values.map(c=>{let u=H(c),p=n.get(u);return p===void 0&&(p=t.length,t.push(c),n.set(u,p)),p}),a=e.times.length?e.times[0]:1/0,i=[],l=[];for(let c=0;c<r.times.length&&r.times[c]<a;c++)i.push(r.times[c]),l.push(r.vals[c]);for(let c=0;c<e.times.length;c++){let u=o[e.vals[c]];l.length&&l[l.length-1]===u||(i.push(e.times[c]),l.push(u))}let s={id:r.id,times:Float64Array.from(i),vals:Uint32Array.from(l),values:t,since:new Float64Array(i.length)};return(r.dropped||e.dropped)&&(s.dropped=Float64Array.from([...r.dropped??[],...e.dropped??[]]).sort()),sn(s),s}function Mo(r,e){let t=r.step,n=Math.min(r.start,e.start),o=Math.max(r.start+r.mean.length*r.step,e.start+e.mean.length*e.step),a=Math.max(0,Math.round((o-n)/t)),i=new Float32Array(a).fill(NaN);for(let l of[r,e])for(let s=0;s<l.mean.length;s++){let c=Math.round((l.start+s*l.step-n)/t);!Number.isNaN(l.mean[s])&&c>=0&&c<a&&(i[c]=l.mean[s])}return{id:r.id,start:n,step:t,mean:i}}function ln(r,e){let[t,n]=r.start<=e.start?[r,e]:[e,r],o=new Map;for(let s of new Set([...t.tracks.keys(),...n.tracks.keys()])){let c=t.tracks.get(s),u=n.tracks.get(s);o.set(s,c&&u?ko(c,u):c??u)}let a=new Map;for(let s of new Set([...t.series.keys(),...n.series.keys()])){let c=t.series.get(s),u=n.series.get(s);a.set(s,c&&u?Mo(c,u):c??u)}let i=new Set([...t.missing,...n.missing].filter(s=>!o.has(s)&&!a.has(s))),l=t.oldest===null?null:t.oldest<t.end?t.oldest:n.oldest??n.start;return{start:t.start,end:Math.max(t.end,n.end),oldest:l,keepDays:n.keepDays??t.keepDays,tracks:o,series:a,missing:i}}function cn(r){let e=0;for(let t of r.tracks.values())e+=t.times.length;return e}function un(r){let e=0;for(let t of r.tracks.values())e+=t.times.length*20+t.values.length*120;for(let t of r.series.values())e+=t.mean.length*4;return e}var dn=3e5;function pn(r,e,t=6e4,n=5*6e4){let o=0;for(let a of e){let i=r.tracks.get(a);if(!i||i.times.length<3)continue;let l=i.times.length,s=m=>i.values[i.vals[m]].s,c=[],u=[],p=null;for(let m=0;m<l;m++){let f=c.length?c[c.length-1]:-1;if(f>=0&&p!==null&&s(f)==="off"&&s(m)==="on"&&m+1<l&&s(m+1)==="off"&&i.times[m+1]-i.times[m]<t&&i.times[m]-p<=n){u.push(i.times[m]),m++,o+=2;continue}if(f>=0&&i.vals[f]===i.vals[m]){o++;continue}f>=0&&s(f)==="on"&&s(m)!=="on"&&(p=i.times[m]),c.push(m)}if(c.length===l)continue;let d=Float64Array.from(c,m=>i.times[m]),h=Uint32Array.from(c,m=>i.vals[m]);i.times=d,i.vals=h,i.since=new Float64Array(c.length),u.length&&(i.dropped=Float64Array.from([...i.dropped??[],...u]).sort()),sn(i)}return o}var rn=new WeakMap;function So(r){let e=rn.get(r);return(!e||e.size!==r.values.length)&&(e=new Map(r.values.map((t,n)=>[H(t),n])),rn.set(r,e)),e}function tt(r,e){let t=So(r),n=r.times.length,o=n?r.times[n-1]:-1/0,a=n?r.vals[n-1]:-1,i=[],l=[];for(let d of e){if(d.t<o)continue;let h=H(d.v),m=t.get(h);m!==a&&(m===void 0&&(m=r.values.length,r.values.push(d.v),t.set(h,m)),i.push(d.t),l.push(m),o=d.t,a=m)}if(!i.length)return 0;let s=n+i.length,c=new Float64Array(s);c.set(r.times),c.set(i,n);let u=new Uint32Array(s);u.set(r.vals),u.set(l,n);let p=new Float64Array(s);p.set(r.since);for(let d=n;d<s;d++)p[d]=d>0&&r.values[u[d-1]].s===r.values[u[d]].s?p[d-1]:c[d];return r.times=c,r.vals=u,r.since=p,i.length}function mn(r,e){let t=-1;for(let o of e)Number.isFinite(o.value)&&o.t>=r.start&&(t=Math.max(t,Math.floor((o.t-r.start)/r.step)));if(t<0)return 0;if(t>=r.mean.length){let o=new Float32Array(t+1).fill(NaN);o.set(r.mean),r.mean=o}let n=0;for(let o of e){if(!Number.isFinite(o.value)||o.t<r.start)continue;let a=Math.floor((o.t-r.start)/r.step);Number.isNaN(r.mean[a])&&(r.mean[a]=o.value,n++)}return n}function fn(r,e){let t={id:r,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return tt(t,e)?t:null}function hn(r,e){if(e<=r.start)return r;let t=new Map;for(let[a,i]of r.tracks){let l=Math.max(0,R(i.times,e));if(l===0){t.set(a,i);continue}let s={id:a,times:i.times.slice(l),vals:i.vals.slice(l),values:i.values,since:i.since.slice(l)};i.dropped&&(s.dropped=i.dropped.filter(c=>c>=e)),t.set(a,s)}let n=new Map;for(let[a,i]of r.series){let l=Math.max(0,Math.floor((e-i.start)/i.step));n.set(a,l?{id:a,start:i.start+l*i.step,step:i.step,mean:i.mean.slice(l)}:i)}let o=r.oldest!==null&&r.oldest>e?r.oldest:null;return{...r,start:e,oldest:o,tracks:t,series:n}}function gn(r,e,t,n){let o={};for(let i of e){let l=r.series.get(i),s=r.tracks.get(i);if(!l&&!s)continue;let c=[];for(let u=Math.floor(t/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(l){let d=Math.floor((u+15e4-l.start)/l.step);p=d>=0&&d<l.mean.length?l.mean[d]:NaN}else if(s){let d=R(s.times,u+15e4);p=d<0?NaN:Number(s.values[s.vals[d]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(o[i]=c)}return o}var B=null;function nt(r){var n,o;let e=(n=r==null?void 0:r.locale)==null?void 0:n.time_zone,t=(o=r==null?void 0:r.config)==null?void 0:o.time_zone;if(e!=="server"||!t)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{return null}}function ot(r){B=r}var _n=new Map;function Eo(r){let e=_n.get(r);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:r,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),_n.set(r,e)),e}function ve(r,e){let t=[0,0,0,0,0,0];for(let n of Eo(e).formatToParts(r)){let o=Number(n.value);n.type==="year"?t[0]=o:n.type==="month"?t[1]=o-1:n.type==="day"?t[2]=o:n.type==="hour"?t[3]=o%24:n.type==="minute"?t[4]=o:n.type==="second"&&(t[5]=o)}return t}function ye(r,e){let[t,n,o,a,i,l]=ve(r,e),s=r-(r%1e3+1e3)%1e3;return Date.UTC(t,n,o,a,i,l)-s}function X(r,e=B){return e?ve(r,e)[3]:new Date(r).getHours()}function D(r,e=B){if(!e)return new Date(r).setHours(0,0,0,0);let[t,n,o]=ve(r,e),a=Date.UTC(t,n,o)-ye(r,e);return a=Date.UTC(t,n,o)-ye(a,e),a}function we(r,e=B){return D(D(r,e)+27*36e5,e)}function xe(r,e=B){if(!e)return new Date(r).setMinutes(0,0,0);let[,,,,t,n]=ve(r,e);return r-(r%1e3+1e3)%1e3-(t*60+n)*1e3}function rt(r,e,t,n=B){if(!n){let i=new Date(r);return i.setHours(e,t,0,0),i.getTime()}let o=D(r,n),a=o+(e*60+t)*6e4;return a-(ye(a,n)-ye(o,n))}function ce(r=B){return r?{timeZone:r}:{}}var ke={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},yn=new Set(["window","battery_full","pv_peak"]),Me=new Set(["alarm","smoke","gas","co","water","outage"]),at={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},Ao=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),U=new Set(["on","open","opening","tilted"]);function Ro(r){let e=X(r);return e>=23||e<5}function*ue(r){let e=null;for(let t=0;t<r.times.length;t++){let n=r.values[r.vals[t]].s;n!==e&&(yield{t:r.times[t],from:e,to:n}),e=n}}function Z(r,e,t){let n=[],o=null;for(let a of ue(r)){let i=e.has(a.to);i&&o===null&&(o=a.t),!i&&o!==null&&(n.push([o,a.t]),o=null)}return o!==null&&n.push([o,t]),n}function To(r,e){let t=r.tracks.get(e);if(t){let a=[];for(let i=0;i<t.times.length;i++){let l=Number(t.values[t.vals[i]].s);Number.isFinite(l)&&a.push({t:t.times[i],w:l})}return a}let n=r.series.get(e);if(!n)return[];let o=[];for(let a=0;a<n.mean.length;a++){let i=n.start+(a+.5)*n.step,l=q(n,i);Number.isFinite(l)&&o.push({t:i,w:l})}return o}function Po(r,e=10,t=5,n=20*6e4){let o=[],a=null;for(let i of r)a===null&&i.w>e?a=i.t:a!==null&&i.w<t&&(i.t-a>=n&&o.push(i.t),a=null);return o}function bn(r,e,t,n,o=3e5){let a=Math.max(0,Math.ceil((n-t)/o)),i=new Float64Array(a).fill(NaN),l=r.series.get(e),s=r.tracks.get(e);for(let c=0;c<a;c++){let u=t+(c+.5)*o;if(l)i[c]=q(l,u);else if(s){let p=R(s.times,u);i[c]=p<0?NaN:Number(s.values[s.vals[p]].s)}}return i}function zo(r,e){var a;let t=[],o=Math.floor(r.start/3e5)*3e5;for(let i of e.soc){let l=bn(r,i,o,r.end),s=!1;l.forEach((c,u)=>{Number.isNaN(c)||(c<95?s=!0:c>=99&&s&&(s=!1,t.push({t:o+(u+.5)*3e5,kind:"battery_full",entity:i})))})}if(e.solar.length){let i=e.solar.map(p=>bn(r,p,o,r.end)),l=i[0].length,s=-1,c={t:0,w:0},u=()=>{c.w>100&&t.push({t:c.t,kind:"pv_peak",entity:e.solar[0]}),c={t:0,w:0}};for(let p=0;p<l;p++){let d=o+(p+.5)*3e5,h=D(d);h!==s&&(s>=0&&u(),s=h);let m=0;for(let f of i)Number.isNaN(f[p])||(m+=Math.max(0,f[p]));m>c.w&&(c={t:d,w:m})}s>=0&&(r.end>=we(s)||(a=e.sunDown)!=null&&a.call(e,r.end))&&u()}return t}function vn({timeline:r,roles:e,weather:t,night:n=Ro,energy:o=null,outage:a=null}){let i=[],l=(d,h,m)=>{d>=r.start&&d<=r.end&&i.push({t:d,kind:h,entity:m})},s=t?r.tracks.get(t):void 0,c=s?Z(s,Ao,r.end):[];for(let[d,h]of e){if(h==="washer"){for(let f of Po(To(r,d)))l(f,"washer",d);continue}let m=r.tracks.get(d);if(m){if(h==="window"||h==="window_more"){for(let[f,y]of Z(m,U,r.end)){h==="window"&&f>r.start&&f>m.times[0]&&l(f,"window",d);for(let[w,b]of c)f<b&&w<y&&l(Math.max(f,w),"rain",d)}continue}for(let f of ue(m))if(f.from!==null)switch(h){case"door":U.has(f.to)&&!U.has(f.from)&&l(f.t,"door",d);break;case"garage":(f.to==="on"||f.to==="open"||f.to==="opening")&&(f.from==="off"||f.from==="closed"||f.from==="closing")&&l(f.t,"garage",d);break;case"lock":(f.to==="unlocked"||f.to==="open")&&(f.from==="locked"||f.from==="locking")&&l(f.t,"lock",d);break;case"alarm":f.to==="triggered"&&l(f.t,"alarm",d);break;case"smoke":case"gas":case"co":case"water":f.to==="on"&&f.from!=="on"&&l(f.t,h,d);break;case"motion":f.to==="on"&&f.from==="off"&&n(f.t)&&l(f.t,"motion",d);break;case"camera":f.to==="on"&&f.from!=="on"&&l(f.t,"camera",d);break;case"robot":f.to==="cleaning"&&f.from!=="cleaning"&&f.from!=="paused"?l(f.t,"robot_start",d):f.to==="docked"&&(f.from==="cleaning"||f.from==="returning"||f.from==="paused")&&l(f.t,"robot_done",d);break}}}if(o)for(let d of zo(r,o))l(d.t,d.kind,d.entity);let u=a?r.tracks.get(a.id):void 0;if(a&&u){let d=h=>en({entity_id:a.id,state:h,attributes:a.attributes});for(let h of ue(u))h.from!==null&&d(h.to)&&!d(h.from)&&l(h.t,"outage",a.id)}i.sort((d,h)=>d.t-h.t||ke[h.kind]-ke[d.kind]);let p=new Map;return i.filter(d=>{let h=`${d.kind}:${d.entity}`,m=p.get(h),f=d.kind==="motion"?30*6e4:5*6e4;return m!==void 0&&d.t-m<f?!1:(p.set(h,d.t),!0)})}function wn(r,e){let t=[];for(let n=r.length-1;n>=0;n--){let o=r[n];if(!e.has(at[o.kind]))continue;let a=xe(o.t),i=t[t.length-1];i&&i.hour===a?i.events.unshift(o):t.push({hour:a,events:[o]})}return t}function xn(r,e,t=14){let n=[];for(let o of r){let a=e(o.t),i=n[n.length-1];i&&a-i.x<t?(i.events.push(o),ke[o.kind]>ke[i.top.kind]&&(i.top=o,i.t=o.t)):n.push({x:a,t:o.t,top:o,events:[o]})}return n}var Ee=[60,360,900,3600],it=[60,360,900,3600,14400],kn=360;function Mn(r,e){return r==="low"||e?500:r==="high"?167:250}var Se=class{start;end;t;playing=!1;speed;speeds;constructor(e,t,n,o=kn,a=Ee){this.start=e,this.end=t,this.speeds=a,this.t=Math.min(t,Math.max(e,n)),this.speed=a.includes(o)?o:kn}setRange(e,t,n=this.speeds){this.start=e,this.end=t,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(t,Math.max(e,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(e){this.t=Math.min(this.end,Math.max(this.start,e))}advance(e){if(!this.playing||!(e>0))return!1;let t=Math.min(this.end,this.t+e*this.speed),n=t!==this.t;return this.t=t,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let e=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(e+1)%this.speeds.length],this.speed}};function Sn(r,e,t,n=3e4){if(t>0)return r.find(o=>o.t>e+n)??null;for(let o=r.length-1;o>=0;o--)if(r[o].t<e-n)return r[o];return null}function En(r,e,t){let n=0,o=r.length;for(;n<o;){let i=n+o>>1;r[i].t<e?n=i+1:o=i}let a=n;for(;a<r.length&&r[a].t<=t;)a++;return n===0&&a===r.length?r:r.slice(n,a)}function st(r,e,t,n){if(!(t>e))return null;let o=0,a=r.length;for(;o<a;){let i=o+a>>1;r[i].t<=e?o=i+1:a=i}for(let i=o;i<r.length&&r[i].t<=t;i++)if(n(r[i]))return r[i];return null}function Ae(r,e){let t=(r??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(t);if(n)return e-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let o=/^(\d{1,2}):(\d{2})$/.exec(t);if(!o||Number(o[1])>23||Number(o[2])>59)return null;let a=rt(e,Number(o[1]),Number(o[2]));return a>e?rt(a-864e5,Number(o[1]),Number(o[2])):a}function An(r){var t;let e=(t=r==null?void 0:r.locale)==null?void 0:t.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let n=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return n?{hourCycle:n==="h11"||n==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var de={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},Re=r=>Yt`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${r} /></svg>`,Rn={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},$o={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},lt=class extends N{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=e=>{let t=this.session,n=e.composedPath()[0];if(!(!(t!=null&&t.playback)||e.ctrlKey||e.metaKey||e.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n!=null&&n.isContentEditable))if(e.key===" "){if((n==null?void 0:n.tagName)==="BUTTON")return;e.preventDefault(),t.toggle()}else(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),t.seek(t.playback.t+(e.key==="ArrowLeft"?-1:1)*(e.shiftKey?36e5:3e5)))};onEscape=e=>{e.key!=="Escape"||!this._sheet||(e.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){var e,t;super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),(e=this.unlisten)==null||e.call(this),this.unlisten=null,this.listened=null,(t=this.resize)==null||t.disconnect(),this.resize=null;for(let n of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(n)}updated(){var t;this.session!==this.listened&&((t=this.unlisten)==null||t.call(this),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let e=this.renderRoot.querySelector(".track");e&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(n=>{var a;let o=Math.round(((a=n[0])==null?void 0:a.contentRect.width)??0);o!==this._w&&(this._w=o)}),this.resize.observe(e)),this.onTick()}signature(){let e=this.session,t=e==null?void 0:e.playback,n=this._sheet==="day"&&t?D(t.t):0;return`${e==null?void 0:e.state}|${e==null?void 0:e.error}|${Math.round(((e==null?void 0:e.progress)??0)*20)}|${t==null?void 0:t.playing}|${t==null?void 0:t.speed}|${e==null?void 0:e.events.length}|${e==null?void 0:e.allEvents.length}|${e==null?void 0:e.range}|${e==null?void 0:e.maxDays}|${e==null?void 0:e.loadingDay}|${e==null?void 0:e.full}|${e==null?void 0:e.version}|${e==null?void 0:e.atNow}|${e==null?void 0:e.follow}|${e==null?void 0:e.stopImportant}|${n}`}onTick(){let e=this.signature();e!==this.sig&&(this.sig=e,this.requestUpdate());let t=this.session,n=t==null?void 0:t.playback;if(!t||!n)return;let o=this.renderRoot.querySelector(".clock-time"),a=this.renderRoot.querySelector(".clock-ago");o&&(o.textContent=this.clockText(n.t)),a&&(a.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(e){let t=this.renderRoot.querySelector(".head");t&&(t.style.transform=`translateX(${e.toFixed(1)}px)`)}get language(){var e;return((e=this.session)==null?void 0:e.opts.live.language)??navigator.language}xOf(e){let t=this.session;return!t||!this._w?0:(e-t.start)/(t.end-t.start)*this._w}tOf(e){let t=this.session;return t.start+Math.min(this._w,Math.max(0,e))/Math.max(1,this._w)*(t.end-t.start)}weekday(e){return new Date(e).toLocaleDateString(this.language,{weekday:"short",...ce()}).replace(/\.$/,"")}clockText(e){return`${this.weekday(e)} ${this.time(e)}`}agoText(e){let t=this.session,n=Math.round((t.end-e)/6e4);return n<1?t.t("tt_now"):t.t("tt_ago",{d:this.duration(n*6e4)})}duration(e){let t=this.session,n=Math.round(e/6e4),o=Math.floor(n/1440),a=Math.floor(n%1440/60),i=n%60;return o?`${t.t("tt_days",{n:o})}${a?` ${a} h`:""}`:a?`${a} h${i?` ${i} min`:""}`:`${i} min`}name(e){var n;let t=this.session;return t.names.get(e)??((n=t.opts.live.states[e])==null?void 0:n.attributes.friendly_name)??e}eventText(e){return this.session.t(`tt_ev_${e.kind}`,{name:this.name(e.entity)})}time(e){var t;return new Date(e).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...An((t=this.session)==null?void 0:t.opts.live),...ce()})}onDown(e){var n,o;let t=this.session;!(t!=null&&t.playback)||e.target.closest(".mark")||((o=(n=e.currentTarget).setPointerCapture)==null||o.call(n,e.pointerId),this.dragging=!0,this._label=null,t.pause(),this.scrub(e,!0))}onMove(e){this.dragging&&this.scrub(e,!1)}onUp(e){this.dragging&&(this.scrub(e,!0),this.dragging=!1)}scrub(e,t){var u;let n=this.session,o=this.renderRoot.querySelector(".track"),a=e.clientX-o.getBoundingClientRect().left,i=Math.max(((u=n.playback)==null?void 0:u.start)??n.start,this.tOf(a));this.placeHead(this.xOf(i));let l=this.renderRoot.querySelector(".clock-time");l&&(l.textContent=this.clockText(i)),clearTimeout(this.scrubTimer);let s=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();t||c-this.scrubAt>=s?(this.scrubAt=c,n.seek(i)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(i)},s)}markDown(e){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(e)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(e){var t;if(this.held){this.held=!1;return}(t=this.session)==null||t.seek(e.t,!0),this.showLabel(e,2500)}showLabel(e,t=4500){this._label={x:e.x,lines:e.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(e.events.length>4?[`+${e.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,t)}renderTrack(){var f,y,w,b;let e=this.session,t=this._w;if(!t)return v;let n=e.range==="7d",o=g=>`${((g-e.start)/(e.end-e.start)*100).toFixed(3)}%`,a=(g,_,M,T)=>_>g?x`<i class=${M} style="left:${o(Math.max(g,e.start))};width:calc(${o(Math.min(_,e.end))} - ${o(Math.max(g,e.start))})">${T?x`<span>${T}</span>`:v}</i>`:v,i=((f=e.timeline)==null?void 0:f.oldest)??null,l=((y=e.playback)==null?void 0:y.start)??e.start,s=e.recorderStart,c=v;l>e.start+6e4&&(e.loadingDay!==null?c=a(e.start,l,"loading",e.t("tt_loading_day",{day:this.weekday(e.loadingDay+12*36e5)})):s!==null&&s>e.start?c=a(e.start,l,"nodata",e.t("tt_recorder_days",{n:((w=e.timeline)==null?void 0:w.keepDays)??0})):c=a(e.start,l,"nodata",e.full?e.t("tt_memory_full"):""));let u=n?t/(e.end-e.start)*36e5*3>=12?3:6:1,p=t>=640?3:6,d=[],h=xe(e.start);for(h<e.start&&(h+=36e5);h<=e.end;h+=36e5){let g=X(h);if(g%u)continue;let _=g===0,M=_?n?`${this.weekday(h)} ${new Date(h).toLocaleDateString(this.language,{day:"numeric",...ce()}).replace(/\.$/,"")}.`:this.weekday(h):!n&&g%p===0?this.time(h):"";d.push(x`<b class="tick ${_?"tick-day":M?"tick-major":""}" style="left:${o(h)}">${M?x`<span>${M}</span>`:v}</b>`)}let m=`${t}|${e.events.length}|${e.start}|${e.end}|${e.version}|${l}`;return m!==this.clusterSig&&(this.clusterSig=m,this.clusters=xn(e.shownEvents(),g=>this.xOf(g),t<500?18:14)),x`${e.nights.map(([g,_])=>a(g,_,"night"))} ${c} ${i!==null&&i>l?a(l,i,"nodata"):v}
      ${e.gaps.map(([g,_])=>a(g,_,"gap"))} ${d}
      ${this.clusters.map(g=>x`<button
          class="mark ${g.events.length>1?"mark-many":""}"
          style="left:${g.x.toFixed(1)}px;--c:${Rn[g.top.kind]}"
          title=${g.events.map(_=>`${this.time(_.t)} ${this.eventText(_)}`).join(`
`)}
          aria-label=${`${this.time(g.t)} ${this.eventText(g.top)}`}
          @pointerdown=${()=>this.markDown(g)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${_=>_.preventDefault()}
          @click=${()=>this.markClick(g)}
        >
          ${g.events.length>1?x`<span>${g.events.length}</span>`:v}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(((b=e.playback)==null?void 0:b.t)??e.end).toFixed(1)}px)"></div>
      ${this._label?x`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(g=>x`<span>${g}</span>`)}</div>`:v}`}toggleSheet(e="events"){this._sheet=this._sheet===e||this._sheet&&e==="events"?null:e}toggleFilter(e){let t=new Set(this._filters);t.has(e)?t.delete(e):t.add(e),this._filters=t}where(e){var t;return((t=this.session.roomOf.get(e))==null?void 0:t.name)??""}renderEvents(){let e=this.session,t=e.t,n=["safety","openings","devices",...e.energy?["energy"]:[]],o=wn(e.shownEvents(!0).filter(i=>e.energy||at[i.kind]!=="energy"),this._filters),a=0;return x`<div class="filters">
        ${n.map(i=>x`<button class="fchip" aria-pressed=${this._filters.has(i)} @click=${()=>this.toggleFilter(i)}>${t(`tt_f_${i}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${e.follow} @change=${i=>e.setFollow(i.target.checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${e.stopImportant} @change=${i=>e.setStopImportant(i.target.checked)} />${t("tt_stop")}</label>
      ${o.length?o.map(i=>a>=300?v:(a+=i.events.length,x`<h4>${this.clockText(i.hour)}</h4>
              ${i.events.map(l=>this.row(Rn[l.kind],this.time(l.t),this.eventText(l),this.where(l.entity),()=>e.goTo(l)))}`)):x`<p class="none">${t("tt_no_events")}</p>`}`}row(e,t,n,o,a){return x`<button class="row" @click=${a}>
      <i style="background:${e}"></i><time>${t}</time><span>${n}${o?x`<small>${o}</small>`:v}</span>
    </button>`}awayText(e){let t=this.session.t,n=this.name(e.entity);switch(e.kind){case"alarm":case"appliance":return this.eventText({kind:e.event??"alarm",entity:e.entity});case"door":case"window":return t("tt_away_door",{name:n,n:e.count});case"motion":return t("tt_away_motion",{name:n,n:e.count});case"light_on":return t("tt_away_light",{name:n,d:this.duration(e.ms)});case"window_open":return t("tt_away_open",{name:n,d:this.duration(e.ms)})}}renderAway(){var d,h;let e=this.session,t=e.t,n=e.playback;((d=this.awayOffer)==null?void 0:d.version)!==e.version&&(this.awayOffer={version:e.version,offer:e.awayOffer()});let o=this.awayOffer.offer,[a,i]=this._awayFrom??o??[e.lastClosed!==null&&e.lastClosed>=n.start?e.lastClosed:Math.max(n.start,e.end-3*36e5),e.end],l=`${e.version}|${a}|${i}`;((h=this.awayCache)==null?void 0:h.key)!==l&&(this.awayCache={key:l,rows:e.away(a,i)});let s=this.awayCache.rows,c=m=>this._awayFrom=m,u=(m,f)=>`${this.clockText(m)} \u2013 ${f>=e.end-6e4?t("tt_now"):this.clockText(f)}`,p=m=>{let f=Ae(m.target.value,e.end);f!==null&&c([Math.max(n.start,f),e.end])};return x`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${e.lastClosed!==null&&e.lastClosed>=n.start?x`<button class="fchip" aria-pressed=${a===e.lastClosed} @click=${()=>c([e.lastClosed,e.end])}>${t("tt_away_last")}</button>`:v}
        ${o?x`<button class="fchip" aria-pressed=${a===o[0]&&i===o[1]} @click=${()=>c(o)}>${t("tt_away_quiet",{from:this.time(o[0]),to:this.time(o[1])})}</button>`:v}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(a,i)}</h4>
      ${s.length?s.slice(0,200).map(m=>this.row($o[m.kind],this.time(m.t),this.awayText(m),this.where(m.entity),()=>e.goTo(m))):x`<p class="none">${t("tt_away_none")}</p>`}`}renderDay(){let e=this.session,t=e.t,n=e.playback,o=D(n.t),a=e.daySummary(o),i=D(o-12*36e5),l=this._compare?e.daySummary(i):null;this._compare&&(!l||l.from>i+6e4)&&queueMicrotask(()=>e.ensureLoaded(i));let s=(_,M)=>_&&_.from>M+6e4?t("tt_day_partial",{time:this.time(_.from)}):"",c=(_,M=1)=>_.toLocaleString(this.language,{maximumFractionDigits:M,minimumFractionDigits:M}),u=_=>_>=6e4?`${c(_/36e5)} h`:"\u2013",p=_=>_&&_.tMin!==null&&_.tMax!==null?`${c(_.tMin)}\u2013${c(_.tMax)}\xB0`:"\u2013",d=_=>x`<td>${_?u(_.lightMs):"\u2013"}</td><td>${_?u(_.windowMs):"\u2013"}</td><td>${_?u(_.heatMs):"\u2013"}</td><td>${p(_)}</td>`,h=new Date(o).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...ce()}),m=_=>(_==null?void 0:_.energy)??null,f=m(a),y=m(l),w=_=>_===void 0?"\u2013":`${c(_)} kWh`,b=_=>_==null?"\u2013":`${Math.round(_*100)} %`,g=this._compare?l?s(l,i):e.loadingDay!==null?t("tt_loading"):"":"";return x`<h4>${t("tt_day_title",{day:h})}</h4>
      ${s(a,o)?x`<p class="since">${s(a,o)}</p>`:v}
      ${g?x`<p class="since">${t("tt_day_before")}: ${g}</p>`:v}
      <div class="filters">
        <button class="fchip" @click=${()=>e.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${t("tt_day_compare")}</button>
      </div>
      ${a&&(a.rooms.length||f)?x`${a.rooms.length?x`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${a.rooms.map(_=>x`<tr><th>${_.name}</th>${d(_)}</tr>
                        ${l?x`<tr class="before"><th>${t("tt_day_before")}</th>${d(l.rooms.find(M=>M.roomId===_.roomId))}</tr>`:v}`)}
                  </tbody>
                </table>`:v}
            ${f?x`<div class="energy">
                  ${[["tt_day_pv",w(f.pv),w(y==null?void 0:y.pv)],["tt_day_use",w(f.use),w(y==null?void 0:y.use)],["tt_day_import",w(f.imp),w(y==null?void 0:y.imp)],["tt_day_export",w(f.exp),w(y==null?void 0:y.exp)],["tt_day_self",b(f.self),b(y==null?void 0:y.self)]].map(([_,M,T])=>x`<span>${t(_)}</span><b>${M}</b>${l?x`<em>${T}</em>`:v}`)}
                </div>`:v}`:x`<p class="none">${t("tt_day_none")}</p>`}`}renderSheet(){let t=this.session.t,n=this._sheet,o=["events","away","day"];return x`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${o.map(a=>x`<button class="tab" aria-pressed=${n===a} title=${a==="away"?t("tt_away_title"):v} @click=${()=>this._sheet=a}>${t(a==="events"?"tt_tab_events":a==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let e=this.session;if(!e)return v;let t=e.t,n=e.playback,o=e.state==="ready"&&!!n,a=e.state==="error"?e.error==="not_unlocked"?t("tt_locked"):e.error==="no_recorder"?t("tt_no_recorder"):e.error==="unknown_command"?t("tt_restart"):t("tt_error",{error:e.error??"?"}):null,i=n?3600/n.speed:10,l=Math.round((e.end-e.start)/6e4);return x`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")} <span class="beta" title=${t("beta_bar")}>🧪 BETA</span></span>
        ${o?x`<b class="clock-time"></b><span class="clock-ago"></span>`:x`<span class="clock-msg">${a??`${t("tt_loading")} ${Math.round(e.progress*100)} %`}</span>`}
      </div>
      ${this._toast?x`<div class="toast" role="alert">${t("tt_readonly")}</div>`:v}
      ${o&&this._sheet?this.renderSheet():v}
      <div class="bar">
        <button class="btn prev" ?disabled=${!o} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${()=>e.step(-1)}>${Re(de.prev)}</button>
        <button class="btn play" ?disabled=${!o} title=${t(n!=null&&n.playing?"tt_pause":"tt_play")} aria-label=${t(n!=null&&n.playing?"tt_pause":"tt_play")} @click=${()=>e.toggle()}>
          ${Re(n!=null&&n.playing?de.pause:de.play)}
        </button>
        <button class="btn next" ?disabled=${!o} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${()=>e.step(1)}>${Re(de.next)}</button>
        <div
          class="track ${o?"":"track-wait"}"
          role="slider"
          tabindex="0"
          aria-label=${t("tt_chip")}
          aria-valuemin="0"
          aria-valuemax=${l}
          aria-valuenow=${n?Math.round((n.t-e.start)/6e4):l}
          @pointerdown=${s=>this.onDown(s)}
          @pointermove=${s=>this.onMove(s)}
          @pointerup=${s=>this.onUp(s)}
          @pointercancel=${s=>this.onUp(s)}
        >
          ${o?this.renderTrack():a?x`<em class="msg">${a}</em>`:x`<i class="progress" style="width:${Math.round(e.progress*100)}%"></i>`}
        </div>
        ${a&&e.error!=="not_unlocked"?x`<button class="chip" @click=${()=>{e.load()}}>${t("tt_retry")}</button>`:v}
        <button class="chip range" ?disabled=${!o} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${()=>e.setRange(e.range==="7d"?"24h":"7d")}>
          ${e.range==="7d"?t("tt_days",{n:e.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!o} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${()=>this.toggleSheet()}>${Re(de.list)}</button>
        <button class="chip speed" ?disabled=${!o} title=${t("tt_speed",{s:i>=60?"1 min":i>=1?`${Math.round(i)} s`:`${i.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>e.nextSpeed()}>
          ${(n==null?void 0:n.speed)??360}×
        </button>
        <button class="chip live ${e.atNow?"live-now":""}" title=${t("tt_live_hint")} @click=${()=>e.exit()}>
          <i></i>${e.atNow?`${t("tt_now_reached")} \xB7 ${t("tt_live")}`:t("tt_live")}
        </button>
      </div>`}static styles=Le`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",lt);var Co=new Map;function ct(r,e){return Co.get(e)??Fo(r,e)}function Fo(r,e){var n,o;let t=(o=(n=r.entities)==null?void 0:n[e])==null?void 0:o.device_id;return t?Object.values(r.entities??{}).filter(a=>a.device_id===t&&a.entity_id.startsWith("binary_sensor.")).map(a=>a.entity_id).filter(a=>{var i;return["motion","occupancy","presence"].includes(String((i=r.states[a])==null?void 0:i.attributes.device_class))}):[]}var E=["#3a3f47","#3a3f47"],K=["#23262b","#23262b"],P=["#5a3b25","#5a3b25"],S=["#1f4fa8","#1f4fa8"],L=["#e3b616","#e3b616"],k=["#2f7d3b","#2f7d3b"],_i={default:{rest:E,bio:P,paper:S,plastic:L,glass:k,garden:k,recycling:L,other:E},DE:{rest:K,bio:P,paper:S,plastic:L,glass:k,garden:k,recycling:L},AT:{rest:E,bio:P,paper:[E[0],"#c0262d"],plastic:L,glass:k,garden:k},CH:{rest:["#d8d8d8","#d8d8d8"],bio:k,paper:S,plastic:E,glass:k,garden:k},NL:{rest:E,bio:k,paper:S,plastic:["#3a3f47","#e57a1f"],glass:k,garden:k},BE:{rest:E,bio:k,paper:S,plastic:S,glass:k,garden:k},GB:{rest:K,bio:["#3a3f47","#5a3b25"],paper:S,plastic:S,glass:K,garden:P,recycling:S},US:{rest:K,bio:k,paper:S,plastic:S,glass:S,garden:k,recycling:S},CA:{rest:K,bio:k,paper:S,plastic:S,glass:S,garden:k,recycling:S},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:E,bio:P,paper:[E[0],"#e3b616"],plastic:[E[0],"#e3b616"],recycling:[E[0],"#e3b616"],glass:k,garden:k},IT:{rest:E,bio:P,paper:S,plastic:L,glass:k,garden:k},ES:{rest:E,bio:P,paper:S,plastic:L,glass:k,garden:k},PT:{rest:E,bio:P,paper:S,plastic:L,glass:k,garden:k},DK:{rest:K,bio:k,paper:S,plastic:E,glass:k,garden:k},SE:{rest:K,bio:P,paper:S,plastic:E,glass:k,garden:k},NO:{rest:E,bio:P,paper:S,plastic:E,glass:k,garden:k},FI:{rest:E,bio:P,paper:S,plastic:E,glass:k,garden:k}};function Tn(r){var t;if(r==="washer"||r==="dryer"||r==="dishwasher")return r;let e=(t=me(r))==null?void 0:t.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var Do=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),Oo=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),No=600,ut=r=>r.slice(0,r.indexOf("."));function Ho(r,e){let t=r.states[e];return!e.startsWith("sensor.")||!t||t.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(t.state))||t.state==="unavailable"||t.state==="unknown"}var Pn=new Set(["geocoded_location","location"]),Lo=/location|address|geocoded|ssid|bssid|standort|adresse/i;function jo(r,e){var o,a,i;let t=((o=r.states[e])==null?void 0:o.attributes)??{},n=((i=(a=r.entities)==null?void 0:a[e])==null?void 0:i.translation_key)??"";return Pn.has(String(t.device_class??""))||Pn.has(n)||"latitude"in t||"longitude"in t?!0:Lo.test(`${e} ${String(t.friendly_name??"")} ${n}`)}function Cn(r){let e=new Set;for(let t of Object.values(r.states))if(t.entity_id.startsWith("person.")&&Array.isArray(t.attributes.device_trackers))for(let n of t.attributes.device_trackers)typeof n=="string"&&e.add(n);return e}function Vo(r,e=Cn(r)){var n,o;let t=new Set;for(let a of e){let i=(o=(n=r.entities)==null?void 0:n[a])==null?void 0:o.device_id;i&&t.add(i)}return t}function dt(r,e,t,n=No){let o=new Set(e.presence.flatMap(b=>[b.person,b.sensor]).filter(b=>!!b)),a=Cn(r);for(let b of a)o.add(b);let i=Vo(r,a),l=new Set((t.cars??[]).filter(b=>b.startsWith("device_tracker.")&&!o.has(b)&&!!r.states[b])),s=new Set(e.floors.flatMap(b=>b.rooms.map(g=>g.area_id)).filter(b=>!!b)),c=[];for(let[b,g]of Object.entries(r.entities??{})){if(!g.area_id&&g.device_id){let _=Oe(r,g.device_id);if(!_||!s.has(_))continue}else if(!g.area_id||!s.has(g.area_id))continue;g.hidden||g.entity_category||!Oo.has(ut(b))||c.push(b)}let u=Object.keys(r.states).filter(b=>b.startsWith("weather.")),p=e.floors.flatMap(b=>b.placements.filter(g=>g.entity_id.startsWith("camera.")).flatMap(g=>ct(r,g.entity_id))),d=[...new Set([...l,...t.entities,...p,"sun.sun",...e.settings.weather_entity?[e.settings.weather_entity]:[],...e.settings.outage_entity?[e.settings.outage_entity]:[],...u.slice(0,1),...c])],h=[],m=d.filter(b=>{var _,M;if(!b.includes(".")||!l.has(b)&&Do.has(ut(b))||o.has(b)||!r.states[b])return!1;if(l.has(b))return!0;let g=(M=(_=r.entities)==null?void 0:_[b])==null?void 0:M.device_id;return g&&i.has(g)||jo(r,b)?(h.push(b),!1):!0}),f=m.slice(0,n),y=f.filter(b=>Ho(r,b)),w=new Set(y);return{entities:f.filter(b=>!w.has(b)),stats:y,overflow:m.slice(n),cars:f.filter(b=>l.has(b)),hidden:h}}var zn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Io=new Set(["front","front_glass","sidelight","sidelights"]);function $n(r,e){let t=!1;for(let n=0,o=e.length-1;n<e.length;o=n++){let[a,i]=e[n],[l,s]=e[o];i>r[1]!=s>r[1]&&r[0]<(l-a)*(r[1]-i)/(s-i)+a&&(t=!t)}return t}function Wo(r,e){if(e.type!=="door"||e.wall)return!1;if(e.style&&Io.has(e.style))return!0;if(e.style)return!1;let t=r.rooms.find(p=>p.id===e.room_id);if(!t||t.points.length<3)return!1;let n=t.points[e.edge],o=t.points[(e.edge+1)%t.points.length];if(!n||!o)return!1;let a=Math.hypot(o[0]-n[0],o[1]-n[1]);if(a<1e-6)return!1;let i=(o[0]-n[0])/a,l=(o[1]-n[1])/a,s=[n[0]+i*e.offset,n[1]+l*e.offset],c=p=>[s[0]-l*p,s[1]+i*p],u=$n(c(.3),t.points)?c(-.4):c(.4);return!r.rooms.some(p=>p.id!==t.id&&p.points.length>=3&&$n(u,p.points))}function pt(r,e,t){var a,i;let n=new Map,o=new Map(t.furniture);for(let l of e.floors)for(let s of l.furniture){if(!Tn(s.type))continue;let c=(a=o.get(s.id))==null?void 0:a.power,u=(i=l.placements.find(d=>{var h;return((h=r.states[d.entity_id])==null?void 0:h.attributes.device_class)==="power"&&Math.hypot(d.x-s.x,d.z-s.z)<=1.2}))==null?void 0:i.entity_id,p=c??u;p&&!n.has(p)&&n.set(p,s)}return n}function Fn(r,e,t,n){var l;let o=new Map,a=(s,c)=>{s&&n.has(s)&&!o.has(s)&&o.set(s,c)},i=new Map(t.openings);for(let s of e.floors)for(let c of s.openings){let u=i.get(c.id);if(u)if(c.type==="garage")for(let p of[u.contact,u.cover])a(p,"garage");else if(c.type==="door"){if(Wo(s,c))for(let p of[u.contact,u.contact2])a(p,"door")}else[u.contact,u.tilt,u.contact2,u.tilt2].filter(d=>!!d&&n.has(d)).forEach((d,h)=>a(d,h?"window_more":"window"))}for(let s of pt(r,e,t).keys())a(s,"washer");for(let s of e.floors)for(let c of s.placements)if(c.entity_id.startsWith("camera."))for(let u of ct(r,c.entity_id))a(u,"camera");for(let s of n){if(o.has(s))continue;let c=ut(s),u=String(((l=r.states[s])==null?void 0:l.attributes.device_class)??"");c==="lock"?a(s,"lock"):c==="alarm_control_panel"?a(s,"alarm"):c==="vacuum"?a(s,"robot"):c==="weather"?a(s,"weather"):c==="cover"&&(u==="garage"||u==="gate")?a(s,"garage"):c==="binary_sensor"&&(zn[u]?a(s,zn[u]):u==="garage_door"?a(s,"garage"):u==="motion"&&a(s,"motion"))}return o}var qo={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Bo(r,e){if(r==="rgb_color")return Array.isArray(e)&&e.every(t=>typeof t=="number")?e.map(t=>Math.round(t)):null;if(typeof e!="number"||!Number.isFinite(e))return e;switch(r){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(e/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(e/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(e);case"volume_level":return Math.round(Math.round(e*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(e*10)/10;default:return e}}function Uo(r){return r==="home"||r==="unavailable"||r==="unknown"?r:"not_home"}function mt(r){let e=r.entity_id.slice(0,r.entity_id.indexOf("."));if(e==="device_tracker")return{s:Uo(r.state),a:null};let t=qo[e];if(!(t!=null&&t.length))return{s:r.state,a:null};let n={};for(let o of t){let a=r.attributes[o];if(a==null)continue;let i=Bo(o,a);i!=null&&(n[o]=i)}return{s:r.state,a:Object.keys(n).length?n:null}}var ft=3e5,Dn=2e4,Ko=[6e4,ft,15*6e4,36e5],Go=(r,e)=>r.startsWith("sensor.")&&e.state!==""&&Number.isFinite(Number(e.state));function Qo(r,e){let t=[];for(let n of r){let o=t[t.length-1];o&&Math.floor(o.t/e)===Math.floor(n.t/e)?t[t.length-1]=n:t.push(n);let a=t[t.length-2];a&&a.k===t[t.length-1].k&&t.pop()}return t}var Te=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(e,t,n=Date.now()){this.ids=e,this.startStates=t,this.startedAt=n;for(let o of e)this.seen.set(o,t[o]),t[o]&&this.lastKey.set(o,H(mt(t[o])))}get pending(){return this.count}record(e,t){for(let n of this.ids){let o=e[n];if(o===this.seen.get(n)||(this.seen.set(n,o),!o))continue;let a=mt(o),i=H(a);if(this.lastKey.get(n)===i)continue;let l=this.rows.get(n),s=l==null?void 0:l[l.length-1],c=Date.parse(o.last_updated??o.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(t,c):t,(s==null?void 0:s.t)??-1/0);if(s&&Go(n,o)&&Math.floor(s.t/ft)===Math.floor(u/ft)){l[l.length-1]={t:u,v:a,k:i},this.lastKey.set(n,i);continue}this.lastKey.set(n,i),l?l.push({t:u,v:a,k:i}):this.rows.set(n,[{t:u,v:a,k:i}]),this.count++}this.count>Dn&&this.compact()}compact(){for(let e of Ko){let t=0;for(let[n,o]of this.rows){let a=Qo(o,e);this.rows.set(n,a),t+=a.length}if(this.count=t,t<=Dn/2)return}}flush(e,t){let n=0,o=0;for(let a of this.ids){if(this.seeded.has(a)||e.tracks.has(a)||e.series.has(a))continue;this.seeded.add(a);let i=this.startStates[a],l=[...i?[{t:this.startedAt,v:mt(i)}]:[],...this.rows.get(a)??[]],s=fn(a,l);this.rows.delete(a),s&&(e.tracks.set(a,s),e.missing.delete(a),o++,n+=s.times.length)}for(let[a,i]of this.rows){let l=e.tracks.get(a);if(l){n+=tt(l,i);continue}let s=e.series.get(a);s&&(n+=mn(s,i.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,e.end=Math.max(e.end,t),{added:n,created:o}}};function On(r,e,t){if(!(e.state==="opening"||e.state==="closing")||e.pos===null||!t||t.pos===null)return e.pos;let o=t.t-e.t;return!(o>0)||o>18e4||r<=e.t?e.pos:r>=t.t?t.pos:Math.round(e.pos+(t.pos-e.pos)*(r-e.t)/o)}var A=Math.PI/180;function Pe(r,e,t){let n=(t/864e5+24405875e-1-2451545)/36525,o=(280.46646+n*(36000.76983+n*3032e-7))%360,a=357.52911+n*(35999.05029-1537e-7*n),i=.016708634-n*(42037e-9+1267e-10*n),l=Math.sin(a*A)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*a*A)*(.019993-101e-6*n)+Math.sin(3*a*A)*289e-6,s=125.04-1934.136*n,c=o+l-.00569-.00478*Math.sin(s*A),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(s*A),d=Math.asin(Math.sin(p*A)*Math.sin(c*A)),h=Math.tan(p/2*A)**2,m=4/A*(h*Math.sin(2*o*A)-2*i*Math.sin(a*A)+4*i*h*Math.sin(a*A)*Math.cos(2*o*A)-.5*h*h*Math.sin(4*o*A)-1.25*i*i*Math.sin(2*a*A)),y=(((t/6e4%1440+1440)%1440+m+4*e)%1440+1440)%1440,w=(y/4<0?y/4+180:y/4-180)*A,b=r*A,g=Math.min(1,Math.max(-1,Math.sin(b)*Math.sin(d)+Math.cos(b)*Math.cos(d)*Math.cos(w))),_=Math.acos(g),M=90-_/A;M+=Yo(M);let T=Math.cos(b)*Math.sin(_),ee=180;if(Math.abs(T)>1e-9){let Mt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(b)*Math.cos(_)-Math.sin(d))/T)))/A;ee=w>0?(Mt+180)%360:(540-Mt)%360}return{elevation:M,azimuth:ee}}function Yo(r){if(r>85)return 0;let e=Math.tan(r*A);return(r>5?58.1/e-.07/e**3+86e-6/e**5:r>-.575?1735+r*(-518.2+r*(103.4+r*(-12.79+r*.711))):-20.772/e)/3600}function ht(r,e,t){return Pe(r,e,t).elevation<-.833}function Nn(r,e,t,n,o=5*6e4){let a=[],i=null;for(let l=t;l<=n;l+=o){let s=ht(r,e,l);s&&i===null&&(i=l),!s&&i!==null&&(a.push([i,l]),i=null)}return i!==null&&a.push([i,n]),a}var Ce=class extends Error{constructor(e){super(`Time travel is read-only: ${e}`),this.name="ReplayReadOnly"}},Xo=new Set(["neonplan3d/building/get","neonplan3d/plans/list","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Zo=new Set(["neonplan3d/building/subscribe","neonplan3d/plans/subscribe"]),gt={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},Hn=["person.","device_tracker."],_t=r=>r.slice(0,r.indexOf("."));function ze(r,e){if(!(e!=null&&e.some(n=>n in r)))return r;let t={...r};for(let n of e)delete t[n];return t}function $e(r){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:r}})),new Ce(r)}function Jo(r,e){let t=r,n={...r,states:e};n.callService=(o,a)=>$e(`${o}.${a}`),n.callWS=o=>Xo.has(String(o.type))?r.callWS(o):$e(String(o.type)),n.connection={subscribeMessage:(o,a)=>Zo.has(String(a.type))?r.connection.subscribeMessage(o,a):Promise.reject(new Ce(String(a.type)))};for(let o of["callApi","callApiRaw"]){let a=t[o];typeof a=="function"&&(n[o]=(i,...l)=>String(i).toUpperCase()==="GET"?a.call(r,i,...l):$e(`${i} ${String(l[0])}`))}for(let o of["sendWS","fetchWithAuth"])o in t&&(n[o]=()=>$e(o));return n}var er=new Set(["light","switch","input_boolean","binary_sensor","fan"]),Fe=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(e,t){this.timeline=e,this.cursor=new Y(e),this.cursor.tracks.forEach((o,a)=>this.trackAt.set(o.id,a)),this.location=t.location??null,this.frozen=t.states??null;let n=new Set([...t.allowed??[]].filter(o=>o.startsWith("device_tracker.")));this.requested=[...new Set([...t.requested,...e.tracks.keys(),...e.series.keys()])].filter(o=>n.has(o)||!Hn.some(a=>o.startsWith(a)))}refresh(){let e=this.cursor.t;this.cursor=new Y(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((t,n)=>this.trackAt.set(t.id,n)),Number.isFinite(e)&&this.cursor.at(e)}hassAt(e,t,n=!0){let o=this.frozen??=e.states,a=!1;if(!this.base){this.base={};for(let[s,c]of Object.entries(o))Hn.some(u=>s.startsWith(u))||(this.base[s]=s.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:ze(c.attributes,["entity_picture","access_token"])}:c);a=!0}this.sameContext(e)||(this.live=e,a=!0);let i=!n&&t>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(t),this.pulses=i?this.findPulses(i):[];let l=[];for(let s of this.requested){let c=this.slots.get(s),u=this.slot(s,t,o[s],c);u!==c&&(this.slots.set(s,u),l.push(s))}if(!a&&!l.length&&this.hass)return this.hass;if(a){this.states={...this.base};for(let s of this.requested){let c=this.slots.get(s);c&&(this.states[s]=c.obj)}}else{this.states={...this.states};for(let s of l)this.states[s]=this.slots.get(s).obj}return this.hass=Jo(this.live,this.states),this.hass}findPulses(e){let t=[],n=this.cursor.idx;for(let o=0;o<n.length;o++){let a=e[o],i=n[o];if(a<0||i-a<2)continue;let l=this.cursor.tracks[o];if(!er.has(_t(l.id)))continue;let s=l.values[l.vals[a]].s;if(l.values[l.vals[i]].s===s){for(let c=a+1;c<i;c++)if(l.values[l.vals[c]].s!==s){t.push(l.id);break}}}return t}sameContext(e){let t=this.live;if(!t)return!1;if(t===e)return!0;let n=e;for(let o in n)if(o!=="states"&&n[o]!==t[o])return!1;for(let o in t)if(!(o in n))return!1;return!0}slot(e,t,n,o){let a=this.trackAt.get(e),i=this.timeline.series.get(e),l,s;if(e==="sun.sun"&&this.location){let c=Pe(this.location.lat,this.location.lon,t),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,d=Pe(this.location.lat,this.location.lon,t+6e5).elevation>c.elevation;l=`${u}|${p}|${d}`,s=()=>({entity_id:e,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...ze((n==null?void 0:n.attributes)??{},gt.sun),elevation:u,azimuth:p,rising:d}})}else if(a!==void 0&&this.cursor.idx[a]>=0){let c=this.cursor.tracks[a],u=this.cursor.idx[a],p=c.values[c.vals[u]],d=e.startsWith("cover.")?this.coverPos(c,u,t):null;l=d===null?`${u}`:`${u}:${d}`,s=()=>{let h={...ze((n==null?void 0:n.attributes)??{},gt[_t(e)]),...p.a??{}};d!==null&&(h.current_position=d),e==="sun.sun"&&h.elevation===void 0&&Object.assign(h,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let m=c.since[u];return m>this.timeline.start?{entity_id:e,state:p.s,attributes:h,last_changed:new Date(m).toISOString()}:{entity_id:e,state:p.s,attributes:h}}}else if(i){let c=q(i,t),u=this.stepOf(e,i,n),p=on(c,u);l=`n${p}`,s=()=>({entity_id:e,state:p,attributes:(n==null?void 0:n.attributes)??{},last_changed:new Date(t).toISOString()})}else l="none",s=()=>({entity_id:e,state:"unknown",attributes:ze((n==null?void 0:n.attributes)??{},gt[_t(e)])});return o&&o.key===l&&o.attrs===(n==null?void 0:n.attributes)?o:{key:l,attrs:n==null?void 0:n.attributes,obj:s()}}coverPos(e,t,n){let o=e.values[e.vals[t]];if(o.s!=="opening"&&o.s!=="closing")return null;let a=l=>{var s;return typeof((s=l.a)==null?void 0:s.current_position)=="number"?l.a.current_position:null},i=t+1<e.times.length?{t:e.times[t+1],pos:a(e.values[e.vals[t+1]])}:null;return On(n,{t:e.times[t],state:o.s,pos:a(o)},i)}stepOf(e,t,n){var a,i,l;let o=this.steps.get(e);if(o===void 0){let s=t.mean.find(c=>!Number.isNaN(c))??0;o=nn(n==null?void 0:n.attributes.unit_of_measurement,(l=(i=(a=this.live)==null?void 0:a.entities)==null?void 0:i[e])==null?void 0:l.display_precision,s),this.steps.set(e,o)}return o}rows(e,t,n){let o={};for(let a of e){let i=this.timeline.tracks.get(a);if(!i)continue;let l=[];for(let s=Math.max(0,R(i.times,t));s<i.times.length&&i.times[s]<=n;s++)l.push({s:i.values[i.vals[s]].s,lu:i.times[s]/1e3});l.length&&(o[a]=l)}return o}};var Ln=new Set(["cleaning","paused","returning"]),tr=new Set(["","unknown","unavailable","none","null"]);function jn(r,e,t){var c;if(!r)return[];let n=u=>r.values[r.vals[u]].s,o=R(r.times,t);if(o<0||!Ln.has(n(o)))return[];let a=o;for(;a>0&&Ln.has(n(a-1));)a--;let i=r.times[a],l=[],s=u=>{let p=typeof u=="string"?u.trim():"";!tr.has(p.toLowerCase())&&l[l.length-1]!==p&&l.push(p)};if(e){let u=Math.max(0,R(e.times,i));for(e.times[u]<i-6e4&&u++;u<e.times.length&&e.times[u]<=t;u++)s(e.values[e.vals[u]].s)}else for(let u=a;u<=o;u++)s((c=r.values[r.vals[u]].a)==null?void 0:c.current_room);return l}var bt=r=>r.slice(0,r.indexOf("."));function nr(r,e){return $t(r,e)}function yt(r,e){let t=new Map(e.furniture),n=r.floors.flatMap(o=>o.furniture.filter(a=>Tt(a.type)).map(a=>{var i;return(i=t.get(a.id))==null?void 0:i.entity}));return new Set(n.filter(o=>!!o&&o.startsWith("switch.")))}function Vn(r,e,t){let n=[],o=new Map;for(let s of Object.keys(r.entities??{})){let c=nr(r,s);c&&o.set(c,[...o.get(c)??[],s])}let a=new Map(t.openings),i=new Map(t.furniture),l=yt(e,t);for(let s of e.floors)for(let c of At(s)){if(c.points.length<3)continue;let u=new Set(c.area_id?o.get(c.area_id)??[]:[]);for(let m of s.placements)z([m.x,m.z],c.points)&&u.add(m.entity_id);for(let m of s.furniture){let f=i.get(m.id);f!=null&&f.entity&&z([m.x,m.z],c.points)&&u.add(f.entity)}let p=[];for(let m of s.openings){if(m.room_id!==c.id)continue;let f=a.get(m.id),y=f?[f.contact,f.tilt,f.contact2,f.tilt2].filter(w=>!!w):[];for(let w of y)u.add(w);y.length&&m.type!=="door"&&m.type!=="garage"&&p.push(y)}let d=[...u].filter(m=>!!r.states[m]),h=m=>{var f;return(f=r.states[m])==null?void 0:f.attributes.device_class};n.push({floorId:s.id,roomId:c.id,name:c.name,lights:d.filter(m=>bt(m)==="light"||l.has(m)),windows:p,climates:d.filter(m=>bt(m)==="climate"),temps:(()=>{var w;let m=(w=c.climate)==null?void 0:w.temperature;if(m&&r.states[m])return[m];let f=/dew|frost|humidex|heat_?index|simmer|wind_?chill|apparent|feels|taupunkt|gef(ü|ue)hlt|perceived|comfort/i,y=b=>{var g;return`${b} ${String(((g=r.states[b])==null?void 0:g.attributes.friendly_name)??"")}`};return d.filter(b=>bt(b)==="sensor"&&h(b)==="temperature"&&!f.test(y(b)))})(),all:d})}return n}function In(r){let e=new Map;for(let t of r)for(let n of t.all)e.has(n)||e.set(n,t);return e}var vt=36e5;function pe(r,e,t){let n=r.map(([a,i])=>[Math.max(a,e),Math.min(i,t)]).filter(([a,i])=>i>a);n.sort((a,i)=>a[0]-i[0]);let o=[];for(let a of n){let i=o[o.length-1];i&&a[0]<=i[1]?i[1]=Math.max(i[1],a[1]):o.push([a[0],a[1]])}return o}var De=r=>r.reduce((e,[t,n])=>e+(n-t),0);function or(r,e,t){let n=[],o=null;for(let a=0;a<r.times.length;a++){let i=e(r.values[r.vals[a]]);i&&o===null&&(o=r.times[a]),!i&&o!==null&&(n.push([o,r.times[a]]),o=null)}return o!==null&&t>o&&n.push([o,t]),n}function qn(r,e,t,n,o=2*vt){let a=pe(e.flatMap(s=>{let c=r.tracks.get(s);return c?Z(c,U,r.end):[]}),t,n);if(!e.some(s=>r.tracks.has(s)))return[];let i=[],l=t;for(let[s,c]of a)s-l>=o&&i.push([l,s]),l=Math.max(l,c);return n-l>=o&&i.push([l,n]),i}function Bn(r){for(let e=r.length-1;e>=0;e--){let[t,n]=r[e],o=0;for(let a=t;a<n;a+=6e5){let i=X(a);i>=7&&i<22&&(o+=Math.min(6e5,n-a))}if(o>=vt)return[t,n]}return null}var Wn=["alarm","door","window","window_open","light_on","motion","appliance"];function Un(r){let{timeline:e,roles:t,events:n,from:o,to:a}=r,i=[],l=new Map,s=(u,p,d)=>{let h=`${u}:${p}`,m=l.get(h);if(m)m.count++,m.t=Math.min(m.t,d);else{let f={kind:u,entity:p,t:d,count:1,ms:0};l.set(h,f),i.push(f)}};for(let u of n)u.t<o||u.t>a||(Me.has(u.kind)||u.kind==="rain"?i.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?s("door",u.entity,u.t):u.kind==="window"?s("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&i.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of r.motion){let p=e.tracks.get(u);if(p){for(let d of ue(p))d.from!==null&&d.t>=o&&d.t<=a&&d.to==="on"&&d.from!=="on"&&s("motion",u,d.t);if(p.dropped)for(let d of p.dropped)d>=o&&d<=a&&s("motion",u,d)}}let c=(u,p,d,h)=>{let m=pe(d,o,a),f=De(m);(f>=h||m.length&&m[m.length-1][1]>=a&&f>=6e4)&&i.push({kind:u,entity:p,t:m[0][0],count:m.length,ms:f})};for(let u of r.lights){let p=e.tracks.get(u);p&&c("light_on",u,Z(p,rr,e.end),15*6e4)}for(let[u,p]of t){if(p!=="window"&&p!=="window_more")continue;let d=e.tracks.get(u);d&&c("window_open",u,Z(d,U,e.end),30*6e4)}return i.sort((u,p)=>Wn.indexOf(u.kind)-Wn.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var rr=new Set(["on"]);function ar(r,e,t,n){let o=1/0,a=-1/0,i=r.series.get(e);if(i)for(let l=0;l<i.mean.length;l++){let s=i.start+(l+.5)*i.step,c=i.mean[l];s<t||s>n||Number.isNaN(c)||(o=Math.min(o,c),a=Math.max(a,c))}else{let l=r.tracks.get(e);if(l)for(let s=Math.max(0,R(l.times,t));s<l.times.length&&l.times[s]<=n;s++){let c=Number(l.values[l.vals[s]].s);Number.isFinite(c)&&(o=Math.min(o,c),a=Math.max(a,c))}}return Number.isFinite(o)?[o,a]:null}function Kn(r,e,t,n,o=null){let a=Math.min(n,r.end),i=[],l=(s,c)=>s.flatMap(u=>{let p=r.tracks.get(u);return p?or(p,c,r.end):[]});for(let s of e){let c=De(pe(l(s.lights,m=>m.s==="on"),t,a)),u=De(pe(l(s.windows.flat(),m=>U.has(m.s)),t,a)),p=De(pe(l(s.climates,m=>{var f;return((f=m.a)==null?void 0:f.hvac_action)==="heating"}),t,a)),d=null,h=null;for(let m of s.temps){let f=ar(r,m,t,a);f&&(d=d===null?f[0]:Math.min(d,f[0]),h=h===null?f[1]:Math.max(h,f[1]))}(c||u||p||d!==null)&&i.push({roomId:s.roomId,name:s.name,lightMs:c,windowMs:u,heatMs:p,tMin:d,tMax:h})}return{from:t,to:n,rooms:i,energy:o}}function ir(r,e,t){let n=r.series.get(e);if(n){let i=q(n,t);return Number.isFinite(i)?String(i):null}let o=r.tracks.get(e);if(!o)return null;let a=R(o.times,t);return a<0?null:o.values[o.vals[a]].s}function Gn(r,e,t,n,o,a){var l;let i={};for(let s of o){let c=ir(r,s,a);c!==null&&(i[s]={entity_id:s,state:c,attributes:((l=e[s])==null?void 0:l.attributes)??{}})}return Ct({states:i},t,[],n)}function Qn(r,e){let t=r.energy;return[...new Set([t.grid,t.solar,t.battery,t.battery_soc,t.consumption,e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...e.soc].filter(n=>!!n))]}function Yn(r,e,t,n=3e5){let o=0,a=0,i=0,l=0,s=!1,c=n/vt/1e3;for(let u=e+n/2;u<t;u+=n){let p=r(u);p.solar===null&&p.grid===null&&p.consumption===null||(s=!0,o+=Math.max(0,p.solar??0)*c,a+=Math.max(0,p.grid??0)*c,i+=Math.max(0,-(p.grid??0))*c,l+=Math.max(0,p.consumption??0)*c)}return s?{pv:o,imp:a,exp:i,use:l,self:l>0?Math.min(1,Math.max(0,1-a/l)):null}:null}var sr={tt_range_hint:"Periodo: 24 horas o varios d\xEDas",tt_days:"{n} d",tt_loading_day:"cargando {day} \u2026",tt_recorder_days:"Registro: {n} d\xEDas",tt_memory_full:"L\xEDmite de memoria alcanzado",tt_now_reached:"Presente alcanzado",tt_sheet:"Eventos, res\xFAmenes",tt_tab_events:"Eventos",tt_tab_away:"Ausencia",tt_tab_day:"D\xEDa",tt_close:"Cerrar",tt_f_safety:"Seguridad",tt_f_openings:"Puertas y ventanas",tt_f_devices:"Aparatos",tt_f_energy:"Energ\xEDa",tt_follow:"La c\xE1mara sigue los eventos",tt_stop:"Parar en eventos importantes",tt_no_events:"Sin eventos",tt_ev_window:"{name} abierta",tt_ev_battery_full:"Bater\xEDa llena: {name}",tt_ev_pv_peak:"M\xE1xima potencia solar del d\xEDa",tt_away_title:"Mientras no estabas",tt_away_since:"Desde",tt_away_last:"desde el \xFAltimo viaje en el tiempo",tt_away_quiet:"tranquilo {from}\u2013{to}",tt_away_none:"No pas\xF3 nada \u2013 todo tranquilo.",tt_away_door:"{name}: abierta {n}\xD7",tt_away_motion:"Movimiento {name}: {n}\xD7",tt_away_light:"{name} encendida durante {d}",tt_away_open:"{name} abierta durante {d}",tt_day_title:"Resumen del d\xEDa {day}",tt_day_light:"Luz",tt_day_window:"Ventana",tt_day_heat:"Calefacci\xF3n",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Compra de red",tt_day_export:"Inyecci\xF3n",tt_day_use:"Consumo",tt_day_self:"Autosuficiencia",tt_day_compare:"Comparar con el d\xEDa anterior",tt_day_before:"D\xEDa anterior",tt_day_none:"A\xFAn no hay valores para este d\xEDa.",tt_day_partial:"incompleto (desde las {time})",tt_yesterday:"Ayer a esta hora"};function Xn(r){return(e,t={})=>{let n=r(e,t);if(n!==e)return n;let o=sr[e]??e;for(let[a,i]of Object.entries(t))o=o.replace(`{${a}}`,String(i));return o}}var C=24*36e5,wt=150,xt=250,lr=10*1024*1024,cr=6e4,ur=6e4,Zn=1e4;function J(r,e){try{return e!==void 0&&localStorage.setItem(`fp3d-tt-${r}`,e),localStorage.getItem(`fp3d-tt-${r}`)}catch{return null}}var kt=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=J("follow")==="1";stopImportant=J("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{var e;document.hidden||!((e=this.playback)!=null&&e.playing)||(this.last=performance.now(),this.schedule())};constructor(e){this.opts=e,this.live=e.live,this.startStates=e.live.states,this.quality=e.quality,this.low=e.spec.low,this.t=Xn(e.t),ot(nt(e.live)),this.end=Date.now(),this.range=e.range==="7d"?"7d":"24h";let t=Number(J("closed"));this.lastClosed=Number.isFinite(t)&&t>0&&t<this.end?t:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(o,a,i)=>{var l;return((l=n.replayer)==null?void 0:l.rows(o,a,i))??{}},listen:o=>n.listen(o),stats:(o,a,i)=>n.timeline?gn(n.timeline,o,a,i):{},robotRooms:(o,a)=>n.timeline?jn(n.timeline.tracks.get(o),a?n.timeline.tracks.get(a):void 0,n.replay.t):[],setQuality:(o,a)=>n.setQuality(o,a)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}get playing(){var e;return!!((e=this.playback)!=null&&e.playing)}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*C}get recorderStart(){var t;let e=(t=this.timeline)==null?void 0:t.keepDays;return typeof e=="number"&&e>0?this.end-e*C:null}get atNow(){let e=this.playback;return!!e&&!e.playing&&e.t>=e.end-1e3&&Date.now()-e.end<12e4}get location(){let e=this.live.config;return typeof(e==null?void 0:e.latitude)=="number"&&typeof(e==null?void 0:e.longitude)=="number"?{lat:e.latitude,lon:e.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(e,t,n){let o=dt(this.live,this.opts.building,this.opts.spec),a=Math.max(1,Math.ceil(o.entities.length/wt),Math.ceil(o.stats.length/xt)),i=[];for(let l=0;l<a;l++){let s=o.entities.slice(l*wt,(l+1)*wt),c=o.stats.slice(l*xt,(l+1)*xt),u={type:"neonplan3d/timetravel/history",start_time:e/1e3,end_time:t/1e3,entity_ids:s,statistic_ids:c},p=o.cars.filter(d=>s.includes(d));if(p.length&&(u.car_trackers=p),i.push(await this.live.callWS(u)),this.disposed)return null;n==null||n((l+1)/a)}return an(i)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:e,spec:t}=this.opts,n=this.live,o=dt(n,e,t),a;try{a=await this.fetchWindow(this.end-C,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=(u==null?void 0:u.code)??(u==null?void 0:u.message)??String(c),this.notify();return}if(!a)return;let i=e.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...o.entities,...o.stats,...o.overflow,...o.hidden,...i],this.cars=o.cars;let l=new Map(t.furniture);this.devices=t.energy?Ne(e,c=>{var u;return((u=l.get(c.id))==null?void 0:u.power)??null}):null,this.energyIds=this.devices?Qn(e,this.devices):[],this.rooms=Vn(n,e,t),this.roomOf=In(this.rooms);for(let[c,u]of pt(n,e,t))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(a);let s=typeof this.opts.at=="number"?this.opts.at:Ae(this.opts.at??null,this.end);this.playback=new Se(a.start,this.end,s??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?it:Ee),this.liveLog=new Te([...o.entities,...o.stats,...o.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(e){let{building:t,spec:n}=this.opts,o=this.live,a=new Set([...e.tracks.keys(),...e.series.keys()]);this.roles=Fn(o,t,n,a),cn(e)>dn&&pn(e,this.motion()),this.timeline=e,this.version++,this.daySummaries.clear(),this.replayer=new Fe(e,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[t.settings.weather_entity,...Object.keys(o.states).filter(i=>i.startsWith("weather."))].find(i=>!!i&&a.has(i))??null,this.findEvents(),this.gaps=et(e),this.gapsTo=e.end,this.updateNights()}findEvents(){let e=this.timeline;if(!e)return;let{building:t,spec:n}=this.opts,o=this.devices,a=o&&n.energy?{solar:t.energy.solar?[t.energy.solar]:o.solar,soc:t.energy.battery_soc?[t.energy.battery_soc]:o.soc,sunDown:s=>this.sunDown(s)}:null,i=t.settings.outage_entity,l=i&&this.live.states[i]?{id:i,attributes:this.live.states[i].attributes}:null;this.allEvents=vn({timeline:e,roles:this.roles,weather:this.weather,energy:a,outage:l}),this.events=this.allEvents.filter(s=>!yn.has(s.kind))}sunDown(e){var a;let t=this.location;if(t)return ht(t.lat,t.lon,e);let n=(a=this.timeline)==null?void 0:a.tracks.get("sun.sun"),o=n?R(n.times,e):-1;return!!n&&o>=0&&n.values[n.vals[o]].s==="below_horizon"}shownEvents(e=!1){let t=this.playback,n=e?this.allEvents:this.events;return t?En(n,Math.max(t.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,e])=>e==="motion"||e==="camera").map(([e])=>e)}updateNights(){let e=this.location;this.nights=e?Nn(e.lat,e.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let e=this.timeline.start,t=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(e<=t+6e4)break;let n=this.recorderStart;if(n!==null&&e<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=e-C,this.notify();let o;try{o=await this.fetchWindow(e-C,e)}catch(s){console.warn("CasaNeon: time travel could not load an older day",s);break}if(!o||this.disposed||!this.timeline)return;let a=ln(o,this.timeline);this.setTimeline(a),un(a)>lr&&(this.full=!0);let i=this.playback;if(!i)continue;i.setRange(Math.max(a.start,this.start),this.end);let l=!1;this.wanted!==null&&this.wanted>=i.start&&(i.seek(this.wanted),this.wanted=null,l=!0),this.apply(!0,l)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(e){let t=this.playback;if(e===this.range||!t||!this.timeline)return;this.range=e;let n=t.t;t.setRange(Math.max(this.timeline.start,this.start),this.end,e==="7d"?it:Ee),this.updateNights(),t.t!==n?this.apply(!0):this.notify(),e==="7d"&&this.loadOlder()}sunNights(){var o;let e=(o=this.timeline)==null?void 0:o.tracks.get("sun.sun");if(!e)return[];let t=[],n=null;for(let a=0;a<e.times.length;a++){let i=e.values[e.vals[a]].s==="below_horizon";i&&n===null&&(n=e.times[a]),!i&&n!==null&&(t.push([n,e.times[a]]),n=null)}return n!==null&&t.push([n,this.end]),t}apply(e,t=e){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,t&&this.replay.seek++;let o=this.replayer.hassAt(this.live,n.t,e);this.replay.pulses=this.replayer.pulses,(o!==this.hass||e)&&(this.hass=o,this.opts.onChange()),this.notify()}setLive(e){var a;this.live=e,ot(nt(e));let t=Date.now();(a=this.liveLog)==null||a.record(e.states,t);let n=this.playback,o=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&t-this.flushedAt>=ur||this.derivePending&&t-this.eventsAt>Zn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(t),i&&n.seek(n.end),this.replay.t=n.t,o=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(e,n.t)),o&&this.notify()}setQuality(e,t){let n=this.maxDays;this.quality=e,this.low=t;let o=this.playback;if(n===this.maxDays||!o||!this.timeline)return;let a=this.end-this.maxDays*C,i=this.timeline.start<a-6e4;if(i)this.setTimeline(hn(this.timeline,a)),this.full=!1,this.needFrom!==null&&this.needFrom<a&&(this.needFrom=null),this.wanted!==null&&this.wanted<a&&(this.wanted=null);else if(this.range!=="7d")return;let l=o.t;o.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),i||o.t!==l?this.apply(!0,o.t!==l):this.notify(),this.loadOlder()}play(){let e=this.playback;if(!e)return;let t=e.t>=e.end;e.play(),t&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){var e;(e=this.playback)==null||e.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){var e;(e=this.playback)!=null&&e.playing?this.pause():this.play()}seek(e,t=!1){this.playback&&(t&&this.pause(),this.wanted=null,this.playback.seek(e),this.last=performance.now(),this.apply(!0))}step(e){let t=this.playback;if(!t)return;let n=Sn(this.shownEvents(),t.t,e);this.seek(n?n.t:e>0?t.end:t.start,!0)}goTo(e){this.seek(e.t,!0),this.focusOn(e.entity)}focusOn(e){this.replay.focus=e,this.replay.focusSeq++,this.notify()}yesterday(){let e=this.playback;if(!e)return;let t=e.t-C;t<e.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(t,e.start),!0),t<e.start&&this.olderRunning&&(this.wanted=t)}setFollow(e){this.follow=e,J("follow",e?"1":"0"),this.notify()}setStopImportant(e){this.stopImportant=e,J("stop",e?"1":"0"),this.notify()}nextSpeed(){var e;(e=this.playback)==null||e.nextSpeed(),this.notify()}awayOffer(){let e=this.timeline;return e?Bn(qn(e,this.motion(),e.start,this.end)):null}away(e,t){let n=this.timeline;if(!n)return[];let o=yt(this.opts.building,this.opts.spec);return Un({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(a=>a.startsWith("light.")||o.has(a)),motion:this.motion(),from:e,to:t})}ensureLoaded(e){let t=this.timeline;!t||t.start<=e+6e4||this.needFrom!==null&&this.needFrom<=e||e<this.end-this.maxDays*C-C||(this.needFrom=e,this.loadOlder())}daySummary(e){let t=this.timeline;if(!t||e+C<=t.start||e>t.end)return null;let n=`${e}|${this.version}`,o=this.daySummaries.get(n);if(!o){let a=we(e),i=Math.max(e,t.start),l=Math.min(a,t.end),s=this.devices,c=this.energy&&s?Yn(u=>Gn(t,this.live.states,this.opts.building,s,this.energyIds,u),i,l):null;o=Kn(t,this.rooms,i,l,c),this.daySummaries.set(n,o)}return o}schedule(){clearTimeout(this.timer),this.timer=void 0;let e=this.playback;!(e!=null&&e.playing)||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let t=performance.now(),n=Math.min(2e3,t-this.last);this.last=t;let o=e.t;if(e.end-e.t<=cr+n*e.speed&&this.edge(),e.advance(n)){let a=this.stopImportant&&e.speed>=900?st(this.allEvents,o,e.t,i=>Me.has(i.kind)):null;if(a){e.seek(a.t),e.pause(),this.apply(!0),this.focusOn(a.entity);return}if(this.apply(!1),this.follow&&t-this.followAt>2500){let i=st(this.events,o,e.t,()=>!0);i&&(this.followAt=t,this.focusOn(i.entity))}}e.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},Mn(this.quality,this.low)))}edge(e=Date.now()){var i;let t=this.playback,n=this.timeline;if(!t||!n||!this.liveLog||e-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:o,created:a}=this.liveLog.flush(n,e);this.flushedAt=e,this.end=e,t.setRange(Math.max(n.start,this.start),e),a&&((i=this.replayer)==null||i.refresh()),(o||a)&&(this.derivePending=!0),this.derivePending&&(!t.playing||e-this.eventsAt>Zn)&&this.derive(e)}derive(e){let t=this.timeline;if(!t)return;this.derivePending=!1,this.eventsAt=e,this.findEvents();let n=Math.max(t.start,this.gapsTo-30*6e4),o=this.gaps.filter(([l])=>l<n).map(([l,s])=>[l,Math.min(s,n)]),a=et(t,void 0,void 0,void 0,n),i=o[o.length-1];i&&a.length&&i[1]>=n&&a[0][0]<=n&&(i[1]=a.shift()[1]),this.gaps=[...o,...a],this.gapsTo=t.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&J("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function rs(r){return new kt(r)}export{lr as MAX_BYTES,kt as Session,rs as startTimeTravel};
