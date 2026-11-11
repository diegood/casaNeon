var St=new Map;function Xn(o){return o.startsWith("pack:")}var Jn={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function he(o){if(!Xn(o))return;let e=St.get(o);if(e)return e;let[,t,...n]=o.split(":"),a=Jn[t];return a?St.get(`pack:${a}:${n.join(":")}`):void 0}var na={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},yo=Object.keys(na);function aa(o){return o==="hedge"||o==="fence"||o==="pergola"}function Et(o){return(o.outdoor??[]).filter(e=>e.area_id&&e.points.length>=3&&!aa(e.type)).map(e=>({id:e.id,name:(e.name??"").trim(),area_id:e.area_id??null,points:e.points,floor_material:"wood",outdoor:!0,panel:e.panel,hidden:e.hidden,no_state:e.no_state}))}function At(o){return[...o.rooms,...Et(o)]}var oa={type:"none",pitch:35,overhang:.4},So={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...oa}};var Rt=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]);function Tt(o){var e;return Rt.has(o)||!!((e=he(o))!=null&&e.light)}var ta=new Set([...Rt,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);function z(o,e){let t=!1;for(let n=0,a=e.length-1;n<e.length;a=n++){let[r,i]=e[n],[l,s]=e[a];i>o[1]!=s>o[1]&&o[0]<(l-r)*(o[1]-i)/(s-i)+r&&(t=!t)}return t}var ra=Math.PI/180;var Co=Math.tan(30*ra);var Io=Math.PI/180;function De(o,e){var a;let t=new Set,n=e;for(;n&&!t.has(n);){t.add(n);let r=(a=o.devices)==null?void 0:a[n];if(!r)return null;if(r.area_id)return r.area_id;n=r.parent_device_id}return null}function Fe(o,e){var n;let t=(n=o.entities)==null?void 0:n[e];return t?t.area_id?t.area_id:De(o,t.device_id):null}var fe=o=>o&&o!=="none"?o:null;function Ne(o,e=t=>fe(t.power)){let t={grid:null,gridExport:null,solar:[],battery:[],charge:[],batteries:[],soc:[]};for(let n of o.floors)for(let a of n.furniture){let r=e(a);if(a.type==="meter")t.grid??=r,t.gridExport??=fe(a.export);else if(a.type==="inverter"&&r&&!t.solar.includes(r))t.solar.push(r);else if(a.type==="home_battery"){r&&!t.battery.includes(r)&&t.battery.push(r);let i=fe(a.charge);i&&!t.charge.includes(i)&&t.charge.push(i),(r||i)&&t.batteries.push({power:r,charge:i});let l=fe(a.soc);l&&!t.soc.includes(l)&&t.soc.push(l)}}return t}function j(o,e=!1){if(!o)return null;let t=Number(o.state);if(!Number.isFinite(t))return null;let n=String(o.attributes.unit_of_measurement??"W"),a=n==="kW"?t*1e3:n==="MW"?t*1e6:t;return e?-a:a}function Ct(o,e,t,n=Ne(e)){let a=e.energy,r=a.grid??n.grid,i=r?j(o.states[r],a.grid_invert):null;if(!a.grid&&n.gridExport){let f=Math.max(0,j(o.states[n.gridExport])??0);i=Math.max(0,i??0)-f}let l=a.solar?j(o.states[a.solar]):null;if(!a.solar&&n.solar.length){let f=n.solar.map(v=>j(o.states[v])).filter(v=>v!==null);l=f.length?f.reduce((v,w)=>v+w,0):null}let s=a.battery?j(o.states[a.battery],a.battery_invert):null;if(!a.battery&&n.batteries.length){let f=n.batteries.map(v=>{if(v.charge){let w=v.power?Math.max(0,j(o.states[v.power])??0):0,b=Math.max(0,j(o.states[v.charge])??0);return w-b}return v.power?j(o.states[v.power],a.battery_invert):null}).filter(v=>v!==null);s=f.length?f.reduce((v,w)=>v+w,0):null}let u=(a.battery_soc?[a.battery_soc]:n.soc).map(f=>{var v;return Number((v=o.states[f])==null?void 0:v.state)}).filter(f=>Number.isFinite(f)),p=u.length?u.reduce((f,v)=>f+v,0)/u.length:NaN,d=a.tariff?o.states[a.tariff]:void 0,m=Number(d==null?void 0:d.state),h=a.consumption?j(o.states[a.consumption]):null;return h!==null?h=Math.max(0,h):i!==null||l!==null||s!==null?h=Math.max(0,(i??0)+Math.max(0,l??0)+(s??0)):t.length&&(h=t.reduce((f,v)=>f+v.power,0)),{grid:i,solar:l===null?null:Math.max(0,l),battery:s,soc:Number.isFinite(p)?p:null,tariff:d&&Number.isFinite(m)?{value:m,unit:String(d.attributes.unit_of_measurement??"")}:null,consumption:h}}var _e=globalThis,ge=_e.ShadowRoot&&(_e.ShadyCSS===void 0||_e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Oe=Symbol(),jt=new WeakMap,te=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==Oe)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(ge&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=jt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&jt.set(t,e))}return e}toString(){return this.cssText}},$t=o=>new te(typeof o=="string"?o:o+"",void 0,Oe),He=(o,...e)=>{let t=o.length===1?o[0]:e.reduce((n,a,r)=>n+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+o[r+1],o[0]);return new te(t,o,Oe)},Dt=(o,e)=>{if(ge)o.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(let t of e){let n=document.createElement("style"),a=_e.litNonce;a!==void 0&&n.setAttribute("nonce",a),n.textContent=t.cssText,o.appendChild(n)}},Le=ge?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let t="";for(let n of e.cssRules)t+=n.cssText;return $t(t)})(o):o;var{is:ia,defineProperty:sa,getOwnPropertyDescriptor:la,getOwnPropertyNames:ca,getOwnPropertySymbols:ua,getPrototypeOf:da}=Object,be=globalThis,Ft=be.trustedTypes,pa=Ft?Ft.emptyScript:"",Ve=be.reactiveElementPolyfillSupport,ne=(o,e)=>o,Ie={toAttribute(o,e){switch(e){case Boolean:o=o?pa:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let t=o;switch(e){case Boolean:t=o!==null;break;case Number:t=o===null?null:Number(o);break;case Object:case Array:try{t=JSON.parse(o)}catch{t=null}}return t}},Ot=(o,e)=>!ia(o,e),Nt={attribute:!0,type:String,converter:Ie,reflect:!1,useDefault:!1,hasChanged:Ot};Symbol.metadata??=Symbol("metadata"),be.litPropertyMetadata??=new WeakMap;var $=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Nt){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),a=this.getPropertyDescriptor(e,n,t);a!==void 0&&sa(this.prototype,e,a)}}static getPropertyDescriptor(e,t,n){let{get:a,set:r}=la(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:a,set(i){let l=a==null?void 0:a.call(this);r==null||r.call(this,i),this.requestUpdate(e,l,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Nt}static _$Ei(){if(this.hasOwnProperty(ne("elementProperties")))return;let e=da(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ne("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ne("properties"))){let t=this.properties,n=[...ca(t),...ua(t)];for(let a of n)this.createProperty(a,t[a])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[n,a]of t)this.elementProperties.set(n,a)}this._$Eh=new Map;for(let[t,n]of this.elementProperties){let a=this._$Eu(t,n);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let a of n)t.unshift(Le(a))}else e!==void 0&&t.push(Le(e));return t}static _$Eu(e,t){let n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Dt(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostConnected)==null?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var n;return(n=t.hostDisconnected)==null?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){var r;let n=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,n);if(a!==void 0&&n.reflect===!0){let i=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Ie).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,t){var r,i;let n=this.constructor,a=n._$Eh.get(e);if(a!==void 0&&this._$Em!==a){let l=n.getPropertyOptions(a),s=typeof l.converter=="function"?{fromAttribute:l.converter}:((r=l.converter)==null?void 0:r.fromAttribute)!==void 0?l.converter:Ie;this._$Em=a;let c=s.fromAttribute(t,l.type);this[a]=c??((i=this._$Ej)==null?void 0:i.get(a))??c,this._$Em=null}}requestUpdate(e,t,n,a=!1,r){var i;if(e!==void 0){let l=this.constructor;if(a===!1&&(r=this[e]),n??=l.getPropertyOptions(e),!((n.hasChanged??Ot)(r,t)||n.useDefault&&n.reflect&&r===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(l._$Eu(e,n))))return;this.C(e,t,n)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:a,wrapped:r},i){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,i??t??this[e]),r!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var n;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[r,i]of this._$Ep)this[r]=i;this._$Ep=void 0}let a=this.constructor.elementProperties;if(a.size>0)for(let[r,i]of a){let{wrapped:l}=i,s=this[r];l!==!0||this._$AL.has(r)||s===void 0||this.C(r,void 0,i,s)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(n=this._$EO)==null||n.forEach(a=>{var r;return(r=a.hostUpdate)==null?void 0:r.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(n=>{var a;return(a=n.hostUpdated)==null?void 0:a.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM()}updated(e){}firstUpdated(e){}};$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[ne("elementProperties")]=new Map,$[ne("finalized")]=new Map,Ve==null||Ve({ReactiveElement:$}),(be.reactiveElementVersions??=[]).push("2.1.2");var Ye=globalThis,Ht=o=>o,ve=Ye.trustedTypes,Lt=ve?ve.createPolicy("lit-html",{createHTML:o=>o}):void 0,Ut="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Gt="?"+F,ma=`<${Gt}>`,I=document,oe=()=>I.createComment(""),re=o=>o===null||typeof o!="object"&&typeof o!="function",Ze=Array.isArray,ha=o=>Ze(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",qe=`[ 	
\f\r]`,ae=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,It=/>/g,L=RegExp(`>|${qe}(?:([^\\s"'>=/]+)(${qe}*=${qe}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qt=/'/g,Wt=/"/g,Kt=/^(?:script|style|textarea|title)$/i,Xe=o=>(e,...t)=>({_$litType$:o,strings:e,values:t}),x=Xe(1),Qt=Xe(2),br=Xe(3),q=Symbol.for("lit-noChange"),y=Symbol.for("lit-nothing"),Bt=new WeakMap,V=I.createTreeWalker(I,129);function Yt(o,e){if(!Ze(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lt!==void 0?Lt.createHTML(e):e}var fa=(o,e)=>{let t=o.length-1,n=[],a,r=e===2?"<svg>":e===3?"<math>":"",i=ae;for(let l=0;l<t;l++){let s=o[l],c,u,p=-1,d=0;for(;d<s.length&&(i.lastIndex=d,u=i.exec(s),u!==null);)d=i.lastIndex,i===ae?u[1]==="!--"?i=Vt:u[1]!==void 0?i=It:u[2]!==void 0?(Kt.test(u[2])&&(a=RegExp("</"+u[2],"g")),i=L):u[3]!==void 0&&(i=L):i===L?u[0]===">"?(i=a??ae,p=-1):u[1]===void 0?p=-2:(p=i.lastIndex-u[2].length,c=u[1],i=u[3]===void 0?L:u[3]==='"'?Wt:qt):i===Wt||i===qt?i=L:i===Vt||i===It?i=ae:(i=L,a=void 0);let m=i===L&&o[l+1].startsWith("/>")?" ":"";r+=i===ae?s+ma:p>=0?(n.push(c),s.slice(0,p)+Ut+s.slice(p)+F+m):s+F+(p===-2?l:m)}return[Yt(o,r+(o[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),n]},ie=class o{constructor({strings:e,_$litType$:t},n){let a;this.parts=[];let r=0,i=0,l=e.length-1,s=this.parts,[c,u]=fa(e,t);if(this.el=o.createElement(c,n),V.currentNode=this.el.content,t===2||t===3){let p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=V.nextNode())!==null&&s.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(let p of a.getAttributeNames())if(p.endsWith(Ut)){let d=u[i++],m=a.getAttribute(p).split(F),h=/([.?@])?(.*)/.exec(d);s.push({type:1,index:r,name:h[2],strings:m,ctor:h[1]==="."?Ue:h[1]==="?"?Ge:h[1]==="@"?Ke:Q}),a.removeAttribute(p)}else p.startsWith(F)&&(s.push({type:6,index:r}),a.removeAttribute(p));if(Kt.test(a.tagName)){let p=a.textContent.split(F),d=p.length-1;if(d>0){a.textContent=ve?ve.emptyScript:"";for(let m=0;m<d;m++)a.append(p[m],oe()),V.nextNode(),s.push({type:2,index:++r});a.append(p[d],oe())}}}else if(a.nodeType===8)if(a.data===Gt)s.push({type:2,index:r});else{let p=-1;for(;(p=a.data.indexOf(F,p+1))!==-1;)s.push({type:7,index:r}),p+=F.length-1}r++}}static createElement(e,t){let n=I.createElement("template");return n.innerHTML=e,n}};function K(o,e,t=o,n){var i,l;if(e===q)return e;let a=n!==void 0?(i=t._$Co)==null?void 0:i[n]:t._$Cl,r=re(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==r&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),r===void 0?a=void 0:(a=new r(o),a._$AT(o,t,n)),n!==void 0?(t._$Co??=[])[n]=a:t._$Cl=a),a!==void 0&&(e=K(o,a._$AS(o,e.values),a,n)),e}var Be=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,a=((e==null?void 0:e.creationScope)??I).importNode(t,!0);V.currentNode=a;let r=V.nextNode(),i=0,l=0,s=n[0];for(;s!==void 0;){if(i===s.index){let c;s.type===2?c=new se(r,r.nextSibling,this,e):s.type===1?c=new s.ctor(r,s.name,s.strings,this,e):s.type===6&&(c=new Qe(r,this,e)),this._$AV.push(c),s=n[++l]}i!==(s==null?void 0:s.index)&&(r=V.nextNode(),i++)}return V.currentNode=I,a}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},se=class o{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,n,a){this.type=2,this._$AH=y,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=K(this,e,t),re(e)?e===y||e==null||e===""?(this._$AH!==y&&this._$AR(),this._$AH=y):e!==this._$AH&&e!==q&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ha(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==y&&re(this._$AH)?this._$AA.nextSibling.data=e:this.T(I.createTextNode(e)),this._$AH=e}$(e){var r;let{values:t,_$litType$:n}=e,a=typeof n=="number"?this._$AC(e):(n.el===void 0&&(n.el=ie.createElement(Yt(n.h,n.h[0]),this.options)),n);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(t);else{let i=new Be(a,this),l=i.u(this.options);i.p(t),this.T(l),this._$AH=i}}_$AC(e){let t=Bt.get(e.strings);return t===void 0&&Bt.set(e.strings,t=new ie(e)),t}k(e){Ze(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,n,a=0;for(let r of e)a===t.length?t.push(n=new o(this.O(oe()),this.O(oe()),this,this.options)):n=t[a],n._$AI(r),a++;a<t.length&&(this._$AR(n&&n._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,t);e!==this._$AB;){let a=Ht(e).nextSibling;Ht(e).remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}},Q=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,a,r){this.type=1,this._$AH=y,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=y}_$AI(e,t=this,n,a){let r=this.strings,i=!1;if(r===void 0)e=K(this,e,t,0),i=!re(e)||e!==this._$AH&&e!==q,i&&(this._$AH=e);else{let l=e,s,c;for(e=r[0],s=0;s<r.length-1;s++)c=K(this,l[n+s],t,s),c===q&&(c=this._$AH[s]),i||=!re(c)||c!==this._$AH[s],c===y?e=y:e!==y&&(e+=(c??"")+r[s+1]),this._$AH[s]=c}i&&!a&&this.j(e)}j(e){e===y?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ue=class extends Q{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===y?void 0:e}},Ge=class extends Q{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==y)}},Ke=class extends Q{constructor(e,t,n,a,r){super(e,t,n,a,r),this.type=5}_$AI(e,t=this){if((e=K(this,e,t,0)??y)===q)return;let n=this._$AH,a=e===y&&n!==y||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,r=e!==y&&(n===y||a);a&&this.element.removeEventListener(this.name,this,n),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}},Qe=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){K(this,e)}};var We=Ye.litHtmlPolyfillSupport;We==null||We(ie,se),(Ye.litHtmlVersions??=[]).push("3.3.3");var Zt=(o,e,t)=>{let n=(t==null?void 0:t.renderBefore)??e,a=n._$litPart$;if(a===void 0){let r=(t==null?void 0:t.renderBefore)??null;n._$litPart$=a=new se(e.insertBefore(oe(),r),r,void 0,t??{})}return a._$AI(o),a};var le=globalThis,N=class extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Zt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return q}},Xt;N._$litElement$=!0,N.finalized=!0,(Xt=le.litElementHydrateSupport)==null||Xt.call(le,{LitElement:N});var Je=le.litElementPolyfillSupport;Je==null||Je({LitElement:N});(le.litElementVersions??=[]).push("4.2.2");var _a=new Set(["ob","on_battery","onbattery","on battery","battery","outage","power_outage","power outage","offline","off_grid","off grid","off-grid","no_grid","no grid"]),ga=new Set(["power","plug","connectivity","running"]);function Jt(o){if(!o||o.state==="unavailable"||o.state==="unknown")return!1;let e=o.entity_id.split(".")[0];if(e==="binary_sensor")return ga.has(String(o.attributes.device_class))?o.state==="off":o.state==="on";if(e==="input_boolean"||e==="switch")return o.state==="on";let t=Number(o.state);if(o.state!==""&&Number.isFinite(t))return o.attributes.unit_of_measurement==="V"&&t<100;let n=String(o.state).toLowerCase().trim();return _a.has(n)||n.startsWith("ob ")}function W(o,e,t=9e5){let n=o.mean.length;if(!n||e<o.start)return NaN;let a=(e-o.start)/o.step-.5,r=Math.floor(a);if(r<0)return o.mean[0];if(r>=n-1){let u=en(o,n-1);return u>=0&&e-(o.start+(u+.5)*o.step)<=t?o.mean[u]:NaN}let i=o.mean[r],l=o.mean[r+1],s=a-r;if(!Number.isNaN(i)&&!Number.isNaN(l))return i+(l-i)*s;let c=en(o,r);return c>=0&&e-(o.start+(c+.5)*o.step)<=t?o.mean[c]:NaN}function en(o,e){for(let t=e;t>=0;t--)if(!Number.isNaN(o.mean[t]))return t;return-1}function tn(o,e,t=0){if(typeof e=="number"&&e>=0&&e<=6)return 10**-e;switch(typeof o=="string"?o:""){case"\xB0C":case"\xB0F":case"K":case"A":case"bar":case"km/h":case"m/s":return .1;case"%":case"V":case"hPa":case"mbar":case"dB":case"dBm":return 1;case"W":case"VA":case"var":case"ppm":case"lx":case"\xB5g/m\xB3":return Math.abs(t)>=1e3?10:1;case"kW":case"kWh":case"kVA":return .01;default:return Math.abs(t)>=100?1:Math.abs(t)>=10?.1:.01}}function nn(o,e){if(!Number.isFinite(o))return"unknown";let t=e>=1?0:Math.min(6,Math.max(0,Math.round(-Math.log10(e)))),a=(Math.round(o/e)*e).toFixed(t);return/^-0(\.0*)?$/.test(a)?a.slice(1):a}var ba=o=>typeof o=="string"?{s:o,a:null}:{s:String(o[0]),a:o[1]&&typeof o[1]=="object"?o[1]:null},O=o=>`${o.s}\0${o.a?JSON.stringify(o.a):""}`;function on(o){let e=[...o].sort((d,m)=>d.day_start-m.day_start),t=new Map,n=new Map,a=new Set,r=1/0,i=-1/0,l=null,s=!1,c=null;for(let d of e){r=Math.min(r,d.day_start*1e3),i=Math.max(i,d.end*1e3),d.oldest===null?s=!0:l=l===null?d.oldest*1e3:Math.min(l,d.oldest*1e3),c??=d.keep_days;for(let[m,h]of Object.entries(d.entities??{})){let f=t.get(m)??[],v=d.day_start*1e3,w=Math.min(h.t.length,h.v.length);for(let b=0;b<w;b++){let _=h.tab[h.v[b]];if(_===void 0)continue;let g=ba(_),M=O(g),T=f[f.length-1],ee=v+h.t[b]*1e3;T&&(ee<T.t||T.k===M)||f.push({t:ee,v:g,k:M})}t.set(m,f)}for(let[m,h]of Object.entries(d.stats??{})){let f=n.get(m)??[];f.push({start:h.start*1e3,step:h.step*1e3,mean:h.mean}),n.set(m,f)}for(let m of d.missing??[])a.add(m)}let u=new Map;for(let[d,m]of t){if(!m.length)continue;let h=[],f=new Map,v=new Float64Array(m.length),w=new Uint32Array(m.length),b=new Float64Array(m.length);for(let _=0;_<m.length;_++){let g=f.get(m[_].k);g===void 0&&(g=h.length,h.push(m[_].v),f.set(m[_].k,g)),v[_]=m[_].t,w[_]=g,b[_]=_>0&&m[_-1].v.s===m[_].v.s?b[_-1]:m[_].t}u.set(d,{id:d,times:v,vals:w,values:h,since:b}),a.delete(d)}let p=new Map;for(let[d,m]of n){let h=m[0].step;if(!(h>0))continue;let f=Math.min(...m.map(_=>_.start)),v=Math.max(...m.map(_=>_.start+_.mean.length*_.step)),w=Math.max(0,Math.round((v-f)/h));if(!w)continue;let b=new Float32Array(w).fill(NaN);for(let _ of m)_.mean.forEach((g,M)=>{let T=Math.round((_.start+M*_.step-f)/h);typeof g=="number"&&Number.isFinite(g)&&T>=0&&T<w&&(b[T]=g)});b.every(_=>Number.isNaN(_))||(p.set(d,{id:d,start:f,step:h,mean:b}),a.delete(d))}return{start:Number.isFinite(r)?r:0,end:Number.isFinite(i)?i:0,oldest:s?null:l,keepDays:c,tracks:u,series:p,missing:a}}function R(o,e){let t=0,n=o.length-1;if(n<0||o[0]>e)return-1;for(;t<n;){let a=t+n+1>>1;o[a]<=e?t=a:n=a-1}return t}var Y=class{tracks;idx;t=-1/0;constructor(e){this.tracks=[...e.tracks.values()],this.idx=new Int32Array(this.tracks.length).fill(-1)}at(e){let t=e>=this.t;for(let n=0;n<this.tracks.length;n++){let a=this.tracks[n].times,r=this.idx[n];if(!t)r=R(a,e);else{let i=0;for(;r+1<a.length&&a[r+1]<=e&&i<8;)r++,i++;r+1<a.length&&a[r+1]<=e&&(r=R(a,e))}this.idx[n]=r}return this.t=e,this.idx}value(e){let t=this.idx[e];return t<0?null:this.tracks[e].values[this.tracks[e].vals[t]]}},va=new Set(["unavailable","unknown"]);function et(o,e=5*6e4,t=.6,n=10*6e4,a=-1/0){let r=new Y(o);if(!r.tracks.length)return[];let i=Math.max(o.oldest??o.start,a),l=[],s=null;for(let c=i;c<=o.end;c+=e){r.at(c);let u=0;for(let d=0;d<r.tracks.length;d++){let m=r.value(d);(!m||va.has(m.s))&&u++}let p=u/r.tracks.length>=t;p&&s===null&&(s=c),!p&&s!==null&&(c-s>=n&&l.push([s,c]),s=null)}return s!==null&&o.end-s>=n&&l.push([s,o.end]),l}function rn(o){for(let e=0;e<o.times.length;e++)o.since[e]=e>0&&o.values[o.vals[e-1]].s===o.values[o.vals[e]].s?o.since[e-1]:o.times[e]}function ya(o,e){let t=[...o.values],n=new Map(t.map((c,u)=>[O(c),u])),a=e.values.map(c=>{let u=O(c),p=n.get(u);return p===void 0&&(p=t.length,t.push(c),n.set(u,p)),p}),r=e.times.length?e.times[0]:1/0,i=[],l=[];for(let c=0;c<o.times.length&&o.times[c]<r;c++)i.push(o.times[c]),l.push(o.vals[c]);for(let c=0;c<e.times.length;c++){let u=a[e.vals[c]];l.length&&l[l.length-1]===u||(i.push(e.times[c]),l.push(u))}let s={id:o.id,times:Float64Array.from(i),vals:Uint32Array.from(l),values:t,since:new Float64Array(i.length)};return(o.dropped||e.dropped)&&(s.dropped=Float64Array.from([...o.dropped??[],...e.dropped??[]]).sort()),rn(s),s}function wa(o,e){let t=o.step,n=Math.min(o.start,e.start),a=Math.max(o.start+o.mean.length*o.step,e.start+e.mean.length*e.step),r=Math.max(0,Math.round((a-n)/t)),i=new Float32Array(r).fill(NaN);for(let l of[o,e])for(let s=0;s<l.mean.length;s++){let c=Math.round((l.start+s*l.step-n)/t);!Number.isNaN(l.mean[s])&&c>=0&&c<r&&(i[c]=l.mean[s])}return{id:o.id,start:n,step:t,mean:i}}function sn(o,e){let[t,n]=o.start<=e.start?[o,e]:[e,o],a=new Map;for(let s of new Set([...t.tracks.keys(),...n.tracks.keys()])){let c=t.tracks.get(s),u=n.tracks.get(s);a.set(s,c&&u?ya(c,u):c??u)}let r=new Map;for(let s of new Set([...t.series.keys(),...n.series.keys()])){let c=t.series.get(s),u=n.series.get(s);r.set(s,c&&u?wa(c,u):c??u)}let i=new Set([...t.missing,...n.missing].filter(s=>!a.has(s)&&!r.has(s))),l=t.oldest===null?null:t.oldest<t.end?t.oldest:n.oldest??n.start;return{start:t.start,end:Math.max(t.end,n.end),oldest:l,keepDays:n.keepDays??t.keepDays,tracks:a,series:r,missing:i}}function ln(o){let e=0;for(let t of o.tracks.values())e+=t.times.length;return e}function cn(o){let e=0;for(let t of o.tracks.values())e+=t.times.length*20+t.values.length*120;for(let t of o.series.values())e+=t.mean.length*4;return e}var un=3e5;function dn(o,e,t=6e4,n=5*6e4){let a=0;for(let r of e){let i=o.tracks.get(r);if(!i||i.times.length<3)continue;let l=i.times.length,s=h=>i.values[i.vals[h]].s,c=[],u=[],p=null;for(let h=0;h<l;h++){let f=c.length?c[c.length-1]:-1;if(f>=0&&p!==null&&s(f)==="off"&&s(h)==="on"&&h+1<l&&s(h+1)==="off"&&i.times[h+1]-i.times[h]<t&&i.times[h]-p<=n){u.push(i.times[h]),h++,a+=2;continue}if(f>=0&&i.vals[f]===i.vals[h]){a++;continue}f>=0&&s(f)==="on"&&s(h)!=="on"&&(p=i.times[h]),c.push(h)}if(c.length===l)continue;let d=Float64Array.from(c,h=>i.times[h]),m=Uint32Array.from(c,h=>i.vals[h]);i.times=d,i.vals=m,i.since=new Float64Array(c.length),u.length&&(i.dropped=Float64Array.from([...i.dropped??[],...u]).sort()),rn(i)}return a}var an=new WeakMap;function xa(o){let e=an.get(o);return(!e||e.size!==o.values.length)&&(e=new Map(o.values.map((t,n)=>[O(t),n])),an.set(o,e)),e}function tt(o,e){let t=xa(o),n=o.times.length,a=n?o.times[n-1]:-1/0,r=n?o.vals[n-1]:-1,i=[],l=[];for(let d of e){if(d.t<a)continue;let m=O(d.v),h=t.get(m);h!==r&&(h===void 0&&(h=o.values.length,o.values.push(d.v),t.set(m,h)),i.push(d.t),l.push(h),a=d.t,r=h)}if(!i.length)return 0;let s=n+i.length,c=new Float64Array(s);c.set(o.times),c.set(i,n);let u=new Uint32Array(s);u.set(o.vals),u.set(l,n);let p=new Float64Array(s);p.set(o.since);for(let d=n;d<s;d++)p[d]=d>0&&o.values[u[d-1]].s===o.values[u[d]].s?p[d-1]:c[d];return o.times=c,o.vals=u,o.since=p,i.length}function pn(o,e){let t=-1;for(let a of e)Number.isFinite(a.value)&&a.t>=o.start&&(t=Math.max(t,Math.floor((a.t-o.start)/o.step)));if(t<0)return 0;if(t>=o.mean.length){let a=new Float32Array(t+1).fill(NaN);a.set(o.mean),o.mean=a}let n=0;for(let a of e){if(!Number.isFinite(a.value)||a.t<o.start)continue;let r=Math.floor((a.t-o.start)/o.step);Number.isNaN(o.mean[r])&&(o.mean[r]=a.value,n++)}return n}function mn(o,e){let t={id:o,times:new Float64Array(0),vals:new Uint32Array(0),values:[],since:new Float64Array(0)};return tt(t,e)?t:null}function hn(o,e){if(e<=o.start)return o;let t=new Map;for(let[r,i]of o.tracks){let l=Math.max(0,R(i.times,e));if(l===0){t.set(r,i);continue}let s={id:r,times:i.times.slice(l),vals:i.vals.slice(l),values:i.values,since:i.since.slice(l)};i.dropped&&(s.dropped=i.dropped.filter(c=>c>=e)),t.set(r,s)}let n=new Map;for(let[r,i]of o.series){let l=Math.max(0,Math.floor((e-i.start)/i.step));n.set(r,l?{id:r,start:i.start+l*i.step,step:i.step,mean:i.mean.slice(l)}:i)}let a=o.oldest!==null&&o.oldest>e?o.oldest:null;return{...o,start:e,oldest:a,tracks:t,series:n}}function fn(o,e,t,n){let a={};for(let i of e){let l=o.series.get(i),s=o.tracks.get(i);if(!l&&!s)continue;let c=[];for(let u=Math.floor(t/3e5)*3e5;u<n;u+=3e5){let p=NaN;if(l){let d=Math.floor((u+15e4-l.start)/l.step);p=d>=0&&d<l.mean.length?l.mean[d]:NaN}else if(s){let d=R(s.times,u+15e4);p=d<0?NaN:Number(s.values[s.vals[d]].s)}Number.isFinite(p)&&c.push({start:u,mean:p})}c.length&&(a[i]=c)}return a}var B=null;function nt(o){var n,a;let e=(n=o==null?void 0:o.locale)==null?void 0:n.time_zone,t=(a=o==null?void 0:o.config)==null?void 0:a.time_zone;if(e!=="server"||!t)return null;try{return new Intl.DateTimeFormat("en-US",{timeZone:t}),t}catch{return null}}function at(o){B=o}var _n=new Map;function ka(o){let e=_n.get(o);return e||(e=new Intl.DateTimeFormat("en-US",{timeZone:o,hourCycle:"h23",year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"}),_n.set(o,e)),e}function we(o,e){let t=[0,0,0,0,0,0];for(let n of ka(e).formatToParts(o)){let a=Number(n.value);n.type==="year"?t[0]=a:n.type==="month"?t[1]=a-1:n.type==="day"?t[2]=a:n.type==="hour"?t[3]=a%24:n.type==="minute"?t[4]=a:n.type==="second"&&(t[5]=a)}return t}function ye(o,e){let[t,n,a,r,i,l]=we(o,e),s=o-(o%1e3+1e3)%1e3;return Date.UTC(t,n,a,r,i,l)-s}function Z(o,e=B){return e?we(o,e)[3]:new Date(o).getHours()}function D(o,e=B){if(!e)return new Date(o).setHours(0,0,0,0);let[t,n,a]=we(o,e),r=Date.UTC(t,n,a)-ye(o,e);return r=Date.UTC(t,n,a)-ye(r,e),r}function xe(o,e=B){return D(D(o,e)+27*36e5,e)}function ke(o,e=B){if(!e)return new Date(o).setMinutes(0,0,0);let[,,,,t,n]=we(o,e);return o-(o%1e3+1e3)%1e3-(t*60+n)*1e3}function ot(o,e,t,n=B){if(!n){let i=new Date(o);return i.setHours(e,t,0,0),i.getTime()}let a=D(o,n),r=a+(e*60+t)*6e4;return r-(ye(r,n)-ye(a,n))}function ce(o=B){return o?{timeZone:o}:{}}var Me={alarm:100,smoke:95,gas:95,co:95,water:90,outage:88,rain:70,door:50,lock:45,garage:40,camera:38,motion:35,washer:25,robot_done:20,robot_start:15,window:12,battery_full:10,pv_peak:8},bn=new Set(["window","battery_full","pv_peak"]),Se=new Set(["alarm","smoke","gas","co","water","outage"]),rt={alarm:"safety",smoke:"safety",gas:"safety",co:"safety",water:"safety",outage:"safety",motion:"safety",camera:"safety",door:"openings",lock:"openings",garage:"openings",rain:"openings",window:"openings",washer:"devices",robot_start:"devices",robot_done:"devices",battery_full:"energy",pv_peak:"energy"},Ma=new Set(["rainy","pouring","lightning-rainy","hail","snowy-rainy"]),U=new Set(["on","open","opening","tilted"]);function Sa(o){let e=Z(o);return e>=23||e<5}function*ue(o){let e=null;for(let t=0;t<o.times.length;t++){let n=o.values[o.vals[t]].s;n!==e&&(yield{t:o.times[t],from:e,to:n}),e=n}}function X(o,e,t){let n=[],a=null;for(let r of ue(o)){let i=e.has(r.to);i&&a===null&&(a=r.t),!i&&a!==null&&(n.push([a,r.t]),a=null)}return a!==null&&n.push([a,t]),n}function Ea(o,e){let t=o.tracks.get(e);if(t){let r=[];for(let i=0;i<t.times.length;i++){let l=Number(t.values[t.vals[i]].s);Number.isFinite(l)&&r.push({t:t.times[i],w:l})}return r}let n=o.series.get(e);if(!n)return[];let a=[];for(let r=0;r<n.mean.length;r++){let i=n.start+(r+.5)*n.step,l=W(n,i);Number.isFinite(l)&&a.push({t:i,w:l})}return a}function Aa(o,e=10,t=5,n=20*6e4){let a=[],r=null;for(let i of o)r===null&&i.w>e?r=i.t:r!==null&&i.w<t&&(i.t-r>=n&&a.push(i.t),r=null);return a}function gn(o,e,t,n,a=3e5){let r=Math.max(0,Math.ceil((n-t)/a)),i=new Float64Array(r).fill(NaN),l=o.series.get(e),s=o.tracks.get(e);for(let c=0;c<r;c++){let u=t+(c+.5)*a;if(l)i[c]=W(l,u);else if(s){let p=R(s.times,u);i[c]=p<0?NaN:Number(s.values[s.vals[p]].s)}}return i}function Ra(o,e){var r;let t=[],a=Math.floor(o.start/3e5)*3e5;for(let i of e.soc){let l=gn(o,i,a,o.end),s=!1;l.forEach((c,u)=>{Number.isNaN(c)||(c<95?s=!0:c>=99&&s&&(s=!1,t.push({t:a+(u+.5)*3e5,kind:"battery_full",entity:i})))})}if(e.solar.length){let i=e.solar.map(p=>gn(o,p,a,o.end)),l=i[0].length,s=-1,c={t:0,w:0},u=()=>{c.w>100&&t.push({t:c.t,kind:"pv_peak",entity:e.solar[0]}),c={t:0,w:0}};for(let p=0;p<l;p++){let d=a+(p+.5)*3e5,m=D(d);m!==s&&(s>=0&&u(),s=m);let h=0;for(let f of i)Number.isNaN(f[p])||(h+=Math.max(0,f[p]));h>c.w&&(c={t:d,w:h})}s>=0&&(o.end>=xe(s)||(r=e.sunDown)!=null&&r.call(e,o.end))&&u()}return t}function vn({timeline:o,roles:e,weather:t,night:n=Sa,energy:a=null,outage:r=null}){let i=[],l=(d,m,h)=>{d>=o.start&&d<=o.end&&i.push({t:d,kind:m,entity:h})},s=t?o.tracks.get(t):void 0,c=s?X(s,Ma,o.end):[];for(let[d,m]of e){if(m==="washer"){for(let f of Aa(Ea(o,d)))l(f,"washer",d);continue}let h=o.tracks.get(d);if(h){if(m==="window"||m==="window_more"){for(let[f,v]of X(h,U,o.end)){m==="window"&&f>o.start&&f>h.times[0]&&l(f,"window",d);for(let[w,b]of c)f<b&&w<v&&l(Math.max(f,w),"rain",d)}continue}for(let f of ue(h))if(f.from!==null)switch(m){case"door":U.has(f.to)&&!U.has(f.from)&&l(f.t,"door",d);break;case"garage":(f.to==="on"||f.to==="open"||f.to==="opening")&&(f.from==="off"||f.from==="closed"||f.from==="closing")&&l(f.t,"garage",d);break;case"lock":(f.to==="unlocked"||f.to==="open")&&(f.from==="locked"||f.from==="locking")&&l(f.t,"lock",d);break;case"alarm":f.to==="triggered"&&l(f.t,"alarm",d);break;case"smoke":case"gas":case"co":case"water":f.to==="on"&&f.from!=="on"&&l(f.t,m,d);break;case"motion":f.to==="on"&&f.from==="off"&&n(f.t)&&l(f.t,"motion",d);break;case"camera":f.to==="on"&&f.from!=="on"&&l(f.t,"camera",d);break;case"robot":f.to==="cleaning"&&f.from!=="cleaning"&&f.from!=="paused"?l(f.t,"robot_start",d):f.to==="docked"&&(f.from==="cleaning"||f.from==="returning"||f.from==="paused")&&l(f.t,"robot_done",d);break}}}if(a)for(let d of Ra(o,a))l(d.t,d.kind,d.entity);let u=r?o.tracks.get(r.id):void 0;if(r&&u){let d=m=>Jt({entity_id:r.id,state:m,attributes:r.attributes});for(let m of ue(u))m.from!==null&&d(m.to)&&!d(m.from)&&l(m.t,"outage",r.id)}i.sort((d,m)=>d.t-m.t||Me[m.kind]-Me[d.kind]);let p=new Map;return i.filter(d=>{let m=`${d.kind}:${d.entity}`,h=p.get(m),f=d.kind==="motion"?30*6e4:5*6e4;return h!==void 0&&d.t-h<f?!1:(p.set(m,d.t),!0)})}function yn(o,e){let t=[];for(let n=o.length-1;n>=0;n--){let a=o[n];if(!e.has(rt[a.kind]))continue;let r=ke(a.t),i=t[t.length-1];i&&i.hour===r?i.events.unshift(a):t.push({hour:r,events:[a]})}return t}function wn(o,e,t=14){let n=[];for(let a of o){let r=e(a.t),i=n[n.length-1];i&&r-i.x<t?(i.events.push(a),Me[a.kind]>Me[i.top.kind]&&(i.top=a,i.t=a.t)):n.push({x:r,t:a.t,top:a,events:[a]})}return n}var Ae=[60,360,900,3600],it=[60,360,900,3600,14400],xn=360;function kn(o,e){return o==="low"||e?500:o==="high"?167:250}var Ee=class{start;end;t;playing=!1;speed;speeds;constructor(e,t,n,a=xn,r=Ae){this.start=e,this.end=t,this.speeds=r,this.t=Math.min(t,Math.max(e,n)),this.speed=r.includes(a)?a:xn}setRange(e,t,n=this.speeds){this.start=e,this.end=t,this.speeds=n,n.includes(this.speed)||(this.speed=n.includes(3600)?3600:n[n.length-1]),this.t=Math.min(t,Math.max(e,this.t))}play(){this.t>=this.end&&(this.t=this.start),this.playing=!0}pause(){this.playing=!1}toggle(){this.playing?this.pause():this.play()}seek(e){this.t=Math.min(this.end,Math.max(this.start,e))}advance(e){if(!this.playing||!(e>0))return!1;let t=Math.min(this.end,this.t+e*this.speed),n=t!==this.t;return this.t=t,this.t>=this.end&&(this.playing=!1),n}nextSpeed(){let e=this.speeds.indexOf(this.speed);return this.speed=this.speeds[(e+1)%this.speeds.length],this.speed}};function Mn(o,e,t,n=3e4){if(t>0)return o.find(a=>a.t>e+n)??null;for(let a=o.length-1;a>=0;a--)if(o[a].t<e-n)return o[a];return null}function Sn(o,e,t){let n=0,a=o.length;for(;n<a;){let i=n+a>>1;o[i].t<e?n=i+1:a=i}let r=n;for(;r<o.length&&o[r].t<=t;)r++;return n===0&&r===o.length?o:o.slice(n,r)}function st(o,e,t,n){if(!(t>e))return null;let a=0,r=o.length;for(;a<r;){let i=a+r>>1;o[i].t<=e?a=i+1:r=i}for(let i=a;i<o.length&&o[i].t<=t;i++)if(n(o[i]))return o[i];return null}function Re(o,e){let t=(o??"").trim(),n=/^-(\d+(?:[.,]\d+)?)\s*(h|m|min)$/i.exec(t);if(n)return e-Number(n[1].replace(",","."))*(n[2].toLowerCase()==="h"?36e5:6e4);let a=/^(\d{1,2}):(\d{2})$/.exec(t);if(!a||Number(a[1])>23||Number(a[2])>59)return null;let r=ot(e,Number(a[1]),Number(a[2]));return r>e?ot(r-864e5,Number(a[1]),Number(a[2])):r}function En(o){var t;let e=(t=o==null?void 0:o.locale)==null?void 0:t.time_format;if(e==="12")return{hourCycle:"h12"};if(e==="24")return{hourCycle:"h23"};if(e==="system")try{let n=new Intl.DateTimeFormat(void 0,{hour:"numeric"}).resolvedOptions().hourCycle;return n?{hourCycle:n==="h11"||n==="h12"?"h12":"h23"}:{}}catch{return{}}return{}}var de={prev:"M6 6h2v12H6zM20 6v12l-10-6z",play:"M8 5v14l11-7z",pause:"M7 5h4v14H7zM13 5h4v14h-4z",next:"M16 6h2v12h-2zM4 6v12l10-6z",list:"M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"},Te=o=>Qt`<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d=${o} /></svg>`,An={alarm:"#ff3b4f",smoke:"#ff3b4f",outage:"#ffc83a",gas:"#ff3b4f",co:"#ff3b4f",water:"#3aa0ff",rain:"#6cc8ff",door:"#ffb020",lock:"#ffb020",garage:"#ffb020",window:"#ffd27a",motion:"#b48cff",camera:"#e07aff",washer:"#4dff9a",robot_start:"#4dff9a",robot_done:"#4dff9a",battery_full:"#ffe27a",pv_peak:"#ffe27a"},Ta={alarm:"#ff3b4f",door:"#ffb020",window:"#ffd27a",window_open:"#6cc8ff",light_on:"#ffe27a",motion:"#b48cff",appliance:"#4dff9a"},lt=class extends N{static properties={session:{attribute:!1},_w:{state:!0},_label:{state:!0},_toast:{state:!0},_sheet:{state:!0},_filters:{state:!0},_awayFrom:{state:!0},_compare:{state:!0}};unlisten=null;listened=null;resize=null;sig="";dragging=!1;scrubAt=0;scrubTimer;holdTimer;held=!1;labelTimer;toastTimer;clusters=[];clusterSig="";awayOffer=null;awayCache=null;constructor(){super(),this.session=null,this._w=0,this._label=null,this._toast=!1,this._sheet=null,this._filters=new Set(["safety","openings","devices","energy"]),this._awayFrom=null,this._compare=!1}onBlocked=()=>{this._toast=!0,clearTimeout(this.toastTimer),this.toastTimer=setTimeout(()=>this._toast=!1,2600)};onKey=e=>{let t=this.session,n=e.composedPath()[0];if(!(!(t!=null&&t.playback)||e.ctrlKey||e.metaKey||e.altKey||n&&/^(INPUT|TEXTAREA|SELECT)$/.test(n.tagName)||n!=null&&n.isContentEditable))if(e.key===" "){if((n==null?void 0:n.tagName)==="BUTTON")return;e.preventDefault(),t.toggle()}else(e.key==="ArrowLeft"||e.key==="ArrowRight")&&(e.preventDefault(),t.seek(t.playback.t+(e.key==="ArrowLeft"?-1:1)*(e.shiftKey?36e5:3e5)))};onEscape=e=>{e.key!=="Escape"||!this._sheet||(e.stopImmediatePropagation(),this._sheet=null)};connectedCallback(){super.connectedCallback(),window.addEventListener("fp3d-replay-blocked",this.onBlocked),window.addEventListener("keydown",this.onKey),window.addEventListener("keydown",this.onEscape,!0)}disconnectedCallback(){var e,t;super.disconnectedCallback(),window.removeEventListener("fp3d-replay-blocked",this.onBlocked),window.removeEventListener("keydown",this.onKey),window.removeEventListener("keydown",this.onEscape,!0),(e=this.unlisten)==null||e.call(this),this.unlisten=null,this.listened=null,(t=this.resize)==null||t.disconnect(),this.resize=null;for(let n of[this.scrubTimer,this.holdTimer,this.labelTimer,this.toastTimer])clearTimeout(n)}updated(){var t;this.session!==this.listened&&((t=this.unlisten)==null||t.call(this),this.listened=this.session,this.unlisten=this.session?this.session.listen(()=>this.onTick()):null);let e=this.renderRoot.querySelector(".track");e&&!this.resize&&typeof ResizeObserver=="function"&&(this.resize=new ResizeObserver(n=>{var r;let a=Math.round(((r=n[0])==null?void 0:r.contentRect.width)??0);a!==this._w&&(this._w=a)}),this.resize.observe(e)),this.onTick()}signature(){let e=this.session,t=e==null?void 0:e.playback,n=this._sheet==="day"&&t?D(t.t):0;return`${e==null?void 0:e.state}|${e==null?void 0:e.error}|${Math.round(((e==null?void 0:e.progress)??0)*20)}|${t==null?void 0:t.playing}|${t==null?void 0:t.speed}|${e==null?void 0:e.events.length}|${e==null?void 0:e.allEvents.length}|${e==null?void 0:e.range}|${e==null?void 0:e.maxDays}|${e==null?void 0:e.loadingDay}|${e==null?void 0:e.full}|${e==null?void 0:e.version}|${e==null?void 0:e.atNow}|${e==null?void 0:e.follow}|${e==null?void 0:e.stopImportant}|${n}`}onTick(){let e=this.signature();e!==this.sig&&(this.sig=e,this.requestUpdate());let t=this.session,n=t==null?void 0:t.playback;if(!t||!n)return;let a=this.renderRoot.querySelector(".clock-time"),r=this.renderRoot.querySelector(".clock-ago");a&&(a.textContent=this.clockText(n.t)),r&&(r.textContent=this.agoText(n.t)),this.dragging||this.placeHead(this.xOf(n.t))}placeHead(e){let t=this.renderRoot.querySelector(".head");t&&(t.style.transform=`translateX(${e.toFixed(1)}px)`)}get language(){var e;return((e=this.session)==null?void 0:e.opts.live.language)??navigator.language}xOf(e){let t=this.session;return!t||!this._w?0:(e-t.start)/(t.end-t.start)*this._w}tOf(e){let t=this.session;return t.start+Math.min(this._w,Math.max(0,e))/Math.max(1,this._w)*(t.end-t.start)}weekday(e){return new Date(e).toLocaleDateString(this.language,{weekday:"short",...ce()}).replace(/\.$/,"")}clockText(e){return`${this.weekday(e)} ${this.time(e)}`}agoText(e){let t=this.session,n=Math.round((t.end-e)/6e4);return n<1?t.t("tt_now"):t.t("tt_ago",{d:this.duration(n*6e4)})}duration(e){let t=this.session,n=Math.round(e/6e4),a=Math.floor(n/1440),r=Math.floor(n%1440/60),i=n%60;return a?`${t.t("tt_days",{n:a})}${r?` ${r} h`:""}`:r?`${r} h${i?` ${i} min`:""}`:`${i} min`}name(e){var n;let t=this.session;return t.names.get(e)??((n=t.opts.live.states[e])==null?void 0:n.attributes.friendly_name)??e}eventText(e){return this.session.t(`tt_ev_${e.kind}`,{name:this.name(e.entity)})}time(e){var t;return new Date(e).toLocaleTimeString(this.language,{hour:"2-digit",minute:"2-digit",...En((t=this.session)==null?void 0:t.opts.live),...ce()})}onDown(e){var n,a;let t=this.session;!(t!=null&&t.playback)||e.target.closest(".mark")||((a=(n=e.currentTarget).setPointerCapture)==null||a.call(n,e.pointerId),this.dragging=!0,this._label=null,t.pause(),this.scrub(e,!0))}onMove(e){this.dragging&&this.scrub(e,!1)}onUp(e){this.dragging&&(this.scrub(e,!0),this.dragging=!1)}scrub(e,t){var u;let n=this.session,a=this.renderRoot.querySelector(".track"),r=e.clientX-a.getBoundingClientRect().left,i=Math.max(((u=n.playback)==null?void 0:u.start)??n.start,this.tOf(r));this.placeHead(this.xOf(i));let l=this.renderRoot.querySelector(".clock-time");l&&(l.textContent=this.clockText(i)),clearTimeout(this.scrubTimer);let s=n.opts.spec.low||n.opts.quality==="low"?160:70,c=performance.now();t||c-this.scrubAt>=s?(this.scrubAt=c,n.seek(i)):this.scrubTimer=setTimeout(()=>{this.scrubAt=performance.now(),n.seek(i)},s)}markDown(e){this.held=!1,clearTimeout(this.holdTimer),this.holdTimer=setTimeout(()=>{this.held=!0,this.showLabel(e)},450)}markUp(){clearTimeout(this.holdTimer)}markClick(e){var t;if(this.held){this.held=!1;return}(t=this.session)==null||t.seek(e.t,!0),this.showLabel(e,2500)}showLabel(e,t=4500){this._label={x:e.x,lines:e.events.slice(0,4).map(n=>`${this.time(n.t)} \xB7 ${this.eventText(n)}`).concat(e.events.length>4?[`+${e.events.length-4}`]:[])},clearTimeout(this.labelTimer),this.labelTimer=setTimeout(()=>this._label=null,t)}renderTrack(){var f,v,w,b;let e=this.session,t=this._w;if(!t)return y;let n=e.range==="7d",a=_=>`${((_-e.start)/(e.end-e.start)*100).toFixed(3)}%`,r=(_,g,M,T)=>g>_?x`<i class=${M} style="left:${a(Math.max(_,e.start))};width:calc(${a(Math.min(g,e.end))} - ${a(Math.max(_,e.start))})">${T?x`<span>${T}</span>`:y}</i>`:y,i=((f=e.timeline)==null?void 0:f.oldest)??null,l=((v=e.playback)==null?void 0:v.start)??e.start,s=e.recorderStart,c=y;l>e.start+6e4&&(e.loadingDay!==null?c=r(e.start,l,"loading",e.t("tt_loading_day",{day:this.weekday(e.loadingDay+12*36e5)})):s!==null&&s>e.start?c=r(e.start,l,"nodata",e.t("tt_recorder_days",{n:((w=e.timeline)==null?void 0:w.keepDays)??0})):c=r(e.start,l,"nodata",e.full?e.t("tt_memory_full"):""));let u=n?t/(e.end-e.start)*36e5*3>=12?3:6:1,p=t>=640?3:6,d=[],m=ke(e.start);for(m<e.start&&(m+=36e5);m<=e.end;m+=36e5){let _=Z(m);if(_%u)continue;let g=_===0,M=g?n?`${this.weekday(m)} ${new Date(m).toLocaleDateString(this.language,{day:"numeric",...ce()}).replace(/\.$/,"")}.`:this.weekday(m):!n&&_%p===0?this.time(m):"";d.push(x`<b class="tick ${g?"tick-day":M?"tick-major":""}" style="left:${a(m)}">${M?x`<span>${M}</span>`:y}</b>`)}let h=`${t}|${e.events.length}|${e.start}|${e.end}|${e.version}|${l}`;return h!==this.clusterSig&&(this.clusterSig=h,this.clusters=wn(e.shownEvents(),_=>this.xOf(_),t<500?18:14)),x`${e.nights.map(([_,g])=>r(_,g,"night"))} ${c} ${i!==null&&i>l?r(l,i,"nodata"):y}
      ${e.gaps.map(([_,g])=>r(_,g,"gap"))} ${d}
      ${this.clusters.map(_=>x`<button
          class="mark ${_.events.length>1?"mark-many":""}"
          style="left:${_.x.toFixed(1)}px;--c:${An[_.top.kind]}"
          title=${_.events.map(g=>`${this.time(g.t)} ${this.eventText(g)}`).join(`
`)}
          aria-label=${`${this.time(_.t)} ${this.eventText(_.top)}`}
          @pointerdown=${()=>this.markDown(_)}
          @pointerup=${()=>this.markUp()}
          @pointerleave=${()=>this.markUp()}
          @contextmenu=${g=>g.preventDefault()}
          @click=${()=>this.markClick(_)}
        >
          ${_.events.length>1?x`<span>${_.events.length}</span>`:y}
        </button>`)}
      <div class="head" style="transform:translateX(${this.xOf(((b=e.playback)==null?void 0:b.t)??e.end).toFixed(1)}px)"></div>
      ${this._label?x`<div class="label" style="--x:${this._label.x.toFixed(1)}px">${this._label.lines.map(_=>x`<span>${_}</span>`)}</div>`:y}`}toggleSheet(e="events"){this._sheet=this._sheet===e||this._sheet&&e==="events"?null:e}toggleFilter(e){let t=new Set(this._filters);t.has(e)?t.delete(e):t.add(e),this._filters=t}where(e){var t;return((t=this.session.roomOf.get(e))==null?void 0:t.name)??""}renderEvents(){let e=this.session,t=e.t,n=["safety","openings","devices",...e.energy?["energy"]:[]],a=yn(e.shownEvents(!0).filter(i=>e.energy||rt[i.kind]!=="energy"),this._filters),r=0;return x`<div class="filters">
        ${n.map(i=>x`<button class="fchip" aria-pressed=${this._filters.has(i)} @click=${()=>this.toggleFilter(i)}>${t(`tt_f_${i}`)}</button>`)}
      </div>
      <label class="opt"><input type="checkbox" .checked=${e.follow} @change=${i=>e.setFollow(i.target.checked)} />${t("tt_follow")}</label>
      <label class="opt"><input type="checkbox" .checked=${e.stopImportant} @change=${i=>e.setStopImportant(i.target.checked)} />${t("tt_stop")}</label>
      ${a.length?a.map(i=>r>=300?y:(r+=i.events.length,x`<h4>${this.clockText(i.hour)}</h4>
              ${i.events.map(l=>this.row(An[l.kind],this.time(l.t),this.eventText(l),this.where(l.entity),()=>e.goTo(l)))}`)):x`<p class="none">${t("tt_no_events")}</p>`}`}row(e,t,n,a,r){return x`<button class="row" @click=${r}>
      <i style="background:${e}"></i><time>${t}</time><span>${n}${a?x`<small>${a}</small>`:y}</span>
    </button>`}awayText(e){let t=this.session.t,n=this.name(e.entity);switch(e.kind){case"alarm":case"appliance":return this.eventText({kind:e.event??"alarm",entity:e.entity});case"door":case"window":return t("tt_away_door",{name:n,n:e.count});case"motion":return t("tt_away_motion",{name:n,n:e.count});case"light_on":return t("tt_away_light",{name:n,d:this.duration(e.ms)});case"window_open":return t("tt_away_open",{name:n,d:this.duration(e.ms)})}}renderAway(){var d,m;let e=this.session,t=e.t,n=e.playback;((d=this.awayOffer)==null?void 0:d.version)!==e.version&&(this.awayOffer={version:e.version,offer:e.awayOffer()});let a=this.awayOffer.offer,[r,i]=this._awayFrom??a??[e.lastClosed!==null&&e.lastClosed>=n.start?e.lastClosed:Math.max(n.start,e.end-3*36e5),e.end],l=`${e.version}|${r}|${i}`;((m=this.awayCache)==null?void 0:m.key)!==l&&(this.awayCache={key:l,rows:e.away(r,i)});let s=this.awayCache.rows,c=h=>this._awayFrom=h,u=(h,f)=>`${this.clockText(h)} \u2013 ${f>=e.end-6e4?t("tt_now"):this.clockText(f)}`,p=h=>{let f=Re(h.target.value,e.end);f!==null&&c([Math.max(n.start,f),e.end])};return x`<p class="since">${t("tt_away_since")}:</p>
      <div class="filters">
        ${e.lastClosed!==null&&e.lastClosed>=n.start?x`<button class="fchip" aria-pressed=${r===e.lastClosed} @click=${()=>c([e.lastClosed,e.end])}>${t("tt_away_last")}</button>`:y}
        ${a?x`<button class="fchip" aria-pressed=${r===a[0]&&i===a[1]} @click=${()=>c(a)}>${t("tt_away_quiet",{from:this.time(a[0]),to:this.time(a[1])})}</button>`:y}
        <input class="when" type="time" aria-label=${t("tt_away_since")} @change=${p} />
      </div>
      <h4>${u(r,i)}</h4>
      ${s.length?s.slice(0,200).map(h=>this.row(Ta[h.kind],this.time(h.t),this.awayText(h),this.where(h.entity),()=>e.goTo(h))):x`<p class="none">${t("tt_away_none")}</p>`}`}renderDay(){let e=this.session,t=e.t,n=e.playback,a=D(n.t),r=e.daySummary(a),i=D(a-12*36e5),l=this._compare?e.daySummary(i):null;this._compare&&(!l||l.from>i+6e4)&&queueMicrotask(()=>e.ensureLoaded(i));let s=(g,M)=>g&&g.from>M+6e4?t("tt_day_partial",{time:this.time(g.from)}):"",c=(g,M=1)=>g.toLocaleString(this.language,{maximumFractionDigits:M,minimumFractionDigits:M}),u=g=>g>=6e4?`${c(g/36e5)} h`:"\u2013",p=g=>g&&g.tMin!==null&&g.tMax!==null?`${c(g.tMin)}\u2013${c(g.tMax)}\xB0`:"\u2013",d=g=>x`<td>${g?u(g.lightMs):"\u2013"}</td><td>${g?u(g.windowMs):"\u2013"}</td><td>${g?u(g.heatMs):"\u2013"}</td><td>${p(g)}</td>`,m=new Date(a).toLocaleDateString(this.language,{weekday:"short",day:"numeric",month:"numeric",...ce()}),h=g=>(g==null?void 0:g.energy)??null,f=h(r),v=h(l),w=g=>g===void 0?"\u2013":`${c(g)} kWh`,b=g=>g==null?"\u2013":`${Math.round(g*100)} %`,_=this._compare?l?s(l,i):e.loadingDay!==null?t("tt_loading"):"":"";return x`<h4>${t("tt_day_title",{day:m})}</h4>
      ${s(r,a)?x`<p class="since">${s(r,a)}</p>`:y}
      ${_?x`<p class="since">${t("tt_day_before")}: ${_}</p>`:y}
      <div class="filters">
        <button class="fchip" @click=${()=>e.yesterday()}>⟲ ${t("tt_yesterday")}</button>
        <button class="fchip" aria-pressed=${this._compare} @click=${()=>this._compare=!this._compare}>${t("tt_day_compare")}</button>
      </div>
      ${r&&(r.rooms.length||f)?x`${r.rooms.length?x`<table>
                  <thead>
                    <tr><th></th><th>${t("tt_day_light")}</th><th>${t("tt_day_window")}</th><th>${t("tt_day_heat")}</th><th>${t("tt_day_temp")}</th></tr>
                  </thead>
                  <tbody>
                    ${r.rooms.map(g=>x`<tr><th>${g.name}</th>${d(g)}</tr>
                        ${l?x`<tr class="before"><th>${t("tt_day_before")}</th>${d(l.rooms.find(M=>M.roomId===g.roomId))}</tr>`:y}`)}
                  </tbody>
                </table>`:y}
            ${f?x`<div class="energy">
                  ${[["tt_day_pv",w(f.pv),w(v==null?void 0:v.pv)],["tt_day_use",w(f.use),w(v==null?void 0:v.use)],["tt_day_import",w(f.imp),w(v==null?void 0:v.imp)],["tt_day_export",w(f.exp),w(v==null?void 0:v.exp)],["tt_day_self",b(f.self),b(v==null?void 0:v.self)]].map(([g,M,T])=>x`<span>${t(g)}</span><b>${M}</b>${l?x`<em>${T}</em>`:y}`)}
                </div>`:y}`:x`<p class="none">${t("tt_day_none")}</p>`}`}renderSheet(){let t=this.session.t,n=this._sheet,a=["events","away","day"];return x`<aside class="sheet" role="dialog" aria-label=${t("tt_sheet")}>
      <header>
        ${a.map(r=>x`<button class="tab" aria-pressed=${n===r} title=${r==="away"?t("tt_away_title"):y} @click=${()=>this._sheet=r}>${t(r==="events"?"tt_tab_events":r==="away"?"tt_tab_away":"tt_tab_day")}</button>`)}
        <button class="x" title=${t("tt_close")} aria-label=${t("tt_close")} @click=${()=>this._sheet=null}>×</button>
      </header>
      <div class="body">${n==="events"?this.renderEvents():n==="away"?this.renderAway():this.renderDay()}</div>
    </aside>`}render(){let e=this.session;if(!e)return y;let t=e.t,n=e.playback,a=e.state==="ready"&&!!n,r=e.state==="error"?e.error==="not_unlocked"?t("tt_locked"):e.error==="no_recorder"?t("tt_no_recorder"):e.error==="unknown_command"?t("tt_restart"):t("tt_error",{error:e.error??"?"}):null,i=n?3600/n.speed:10,l=Math.round((e.end-e.start)/6e4);return x`<div class="frame"></div>
      <div class="clock" role="status" aria-live="off">
        <span class="badge">⏪ ${t("tt_badge")} <span class="beta" title=${t("beta_bar")}>🧪 BETA</span></span>
        ${a?x`<b class="clock-time"></b><span class="clock-ago"></span>`:x`<span class="clock-msg">${r??`${t("tt_loading")} ${Math.round(e.progress*100)} %`}</span>`}
      </div>
      ${this._toast?x`<div class="toast" role="alert">${t("tt_readonly")}</div>`:y}
      ${a&&this._sheet?this.renderSheet():y}
      <div class="bar">
        <button class="btn prev" ?disabled=${!a} title=${t("tt_prev")} aria-label=${t("tt_prev")} @click=${()=>e.step(-1)}>${Te(de.prev)}</button>
        <button class="btn play" ?disabled=${!a} title=${t(n!=null&&n.playing?"tt_pause":"tt_play")} aria-label=${t(n!=null&&n.playing?"tt_pause":"tt_play")} @click=${()=>e.toggle()}>
          ${Te(n!=null&&n.playing?de.pause:de.play)}
        </button>
        <button class="btn next" ?disabled=${!a} title=${t("tt_next")} aria-label=${t("tt_next")} @click=${()=>e.step(1)}>${Te(de.next)}</button>
        <div
          class="track ${a?"":"track-wait"}"
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
          ${a?this.renderTrack():r?x`<em class="msg">${r}</em>`:x`<i class="progress" style="width:${Math.round(e.progress*100)}%"></i>`}
        </div>
        ${r&&e.error!=="not_unlocked"?x`<button class="chip" @click=${()=>{e.load()}}>${t("tt_retry")}</button>`:y}
        <button class="chip range" ?disabled=${!a} title=${t("tt_range_hint")} aria-label=${t("tt_range_hint")} @click=${()=>e.setRange(e.range==="7d"?"24h":"7d")}>
          ${e.range==="7d"?t("tt_days",{n:e.maxDays}):"24 h"}
        </button>
        <button class="btn sheet-btn" ?disabled=${!a} aria-pressed=${!!this._sheet} title=${t("tt_sheet")} aria-label=${t("tt_sheet")} @click=${()=>this.toggleSheet()}>${Te(de.list)}</button>
        <button class="chip speed" ?disabled=${!a} title=${t("tt_speed",{s:i>=60?"1 min":i>=1?`${Math.round(i)} s`:`${i.toFixed(2).replace(/0$/,"")} s`})} @click=${()=>e.nextSpeed()}>
          ${(n==null?void 0:n.speed)??360}×
        </button>
        <button class="chip live ${e.atNow?"live-now":""}" title=${t("tt_live_hint")} @click=${()=>e.exit()}>
          <i></i>${e.atNow?`${t("tt_now_reached")} \xB7 ${t("tt_live")}`:t("tt_live")}
        </button>
      </div>`}static styles=He`
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
  `};customElements.get("fp3d-time-bar")||customElements.define("fp3d-time-bar",lt);var Pa=new Map;function ct(o,e){return Pa.get(e)??za(o,e)}function za(o,e){var n,a;let t=(a=(n=o.entities)==null?void 0:n[e])==null?void 0:a.device_id;return t?Object.values(o.entities??{}).filter(r=>r.device_id===t&&r.entity_id.startsWith("binary_sensor.")).map(r=>r.entity_id).filter(r=>{var i;return["motion","occupancy","presence"].includes(String((i=o.states[r])==null?void 0:i.attributes.device_class))}):[]}var E=["#3a3f47","#3a3f47"],G=["#23262b","#23262b"],P=["#5a3b25","#5a3b25"],S=["#1f4fa8","#1f4fa8"],H=["#e3b616","#e3b616"],k=["#2f7d3b","#2f7d3b"],hi={default:{rest:E,bio:P,paper:S,plastic:H,glass:k,garden:k,recycling:H,other:E},DE:{rest:G,bio:P,paper:S,plastic:H,glass:k,garden:k,recycling:H},AT:{rest:E,bio:P,paper:[E[0],"#c0262d"],plastic:H,glass:k,garden:k},CH:{rest:["#d8d8d8","#d8d8d8"],bio:k,paper:S,plastic:E,glass:k,garden:k},NL:{rest:E,bio:k,paper:S,plastic:["#3a3f47","#e57a1f"],glass:k,garden:k},BE:{rest:E,bio:k,paper:S,plastic:S,glass:k,garden:k},GB:{rest:G,bio:["#3a3f47","#5a3b25"],paper:S,plastic:S,glass:G,garden:P,recycling:S},US:{rest:G,bio:k,paper:S,plastic:S,glass:S,garden:k,recycling:S},CA:{rest:G,bio:k,paper:S,plastic:S,glass:S,garden:k,recycling:S},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:E,bio:P,paper:[E[0],"#e3b616"],plastic:[E[0],"#e3b616"],recycling:[E[0],"#e3b616"],glass:k,garden:k},IT:{rest:E,bio:P,paper:S,plastic:H,glass:k,garden:k},ES:{rest:E,bio:P,paper:S,plastic:H,glass:k,garden:k},PT:{rest:E,bio:P,paper:S,plastic:H,glass:k,garden:k},DK:{rest:G,bio:k,paper:S,plastic:E,glass:k,garden:k},SE:{rest:G,bio:P,paper:S,plastic:E,glass:k,garden:k},NO:{rest:E,bio:P,paper:S,plastic:E,glass:k,garden:k},FI:{rest:E,bio:P,paper:S,plastic:E,glass:k,garden:k}};function Rn(o){var t;if(o==="washer"||o==="dryer"||o==="dishwasher")return o;let e=(t=he(o))==null?void 0:t.id;return e?/dishwasher|geschirr/.test(e)?"dishwasher":/dryer|trockner/.test(e)?"dryer":/washer|washing|waschmaschine/.test(e)?"washer":/oven|cooker|backofen/.test(e)?"oven":null:null}var Ca=new Set(["person","device_tracker","zone","camera","scene","script","button","input_button","update","event","image","tts","stt","notify","conversation","automation","calendar","todo"]),ja=new Set(["light","cover","switch","fan","lock","climate","media_player","binary_sensor","sensor","vacuum","alarm_control_panel","water_heater","input_boolean","humidifier","valve"]),$a=600,ut=o=>o.slice(0,o.indexOf("."));function Da(o,e){let t=o.states[e];return!e.startsWith("sensor.")||!t||t.attributes.state_class!=="measurement"?!1:Number.isFinite(Number(t.state))||t.state==="unavailable"||t.state==="unknown"}var Tn=new Set(["geocoded_location","location"]),Fa=/location|address|geocoded|ssid|bssid|standort|adresse/i;function Na(o,e){var a,r,i;let t=((a=o.states[e])==null?void 0:a.attributes)??{},n=((i=(r=o.entities)==null?void 0:r[e])==null?void 0:i.translation_key)??"";return Tn.has(String(t.device_class??""))||Tn.has(n)||"latitude"in t||"longitude"in t?!0:Fa.test(`${e} ${String(t.friendly_name??"")} ${n}`)}function Cn(o){let e=new Set;for(let t of Object.values(o.states))if(t.entity_id.startsWith("person.")&&Array.isArray(t.attributes.device_trackers))for(let n of t.attributes.device_trackers)typeof n=="string"&&e.add(n);return e}function Oa(o,e=Cn(o)){var n,a;let t=new Set;for(let r of e){let i=(a=(n=o.entities)==null?void 0:n[r])==null?void 0:a.device_id;i&&t.add(i)}return t}function dt(o,e,t,n=$a){let a=new Set(e.presence.flatMap(b=>[b.person,b.sensor]).filter(b=>!!b)),r=Cn(o);for(let b of r)a.add(b);let i=Oa(o,r),l=new Set((t.cars??[]).filter(b=>b.startsWith("device_tracker.")&&!a.has(b)&&!!o.states[b])),s=new Set(e.floors.flatMap(b=>b.rooms.map(_=>_.area_id)).filter(b=>!!b)),c=[];for(let[b,_]of Object.entries(o.entities??{})){if(!_.area_id&&_.device_id){let g=De(o,_.device_id);if(!g||!s.has(g))continue}else if(!_.area_id||!s.has(_.area_id))continue;_.hidden||_.entity_category||!ja.has(ut(b))||c.push(b)}let u=Object.keys(o.states).filter(b=>b.startsWith("weather.")),p=e.floors.flatMap(b=>b.placements.filter(_=>_.entity_id.startsWith("camera.")).flatMap(_=>ct(o,_.entity_id))),d=[...new Set([...l,...t.entities,...p,"sun.sun",...e.settings.weather_entity?[e.settings.weather_entity]:[],...e.settings.outage_entity?[e.settings.outage_entity]:[],...u.slice(0,1),...c])],m=[],h=d.filter(b=>{var g,M;if(!b.includes(".")||!l.has(b)&&Ca.has(ut(b))||a.has(b)||!o.states[b])return!1;if(l.has(b))return!0;let _=(M=(g=o.entities)==null?void 0:g[b])==null?void 0:M.device_id;return _&&i.has(_)||Na(o,b)?(m.push(b),!1):!0}),f=h.slice(0,n),v=f.filter(b=>Da(o,b)),w=new Set(v);return{entities:f.filter(b=>!w.has(b)),stats:v,overflow:h.slice(n),cars:f.filter(b=>l.has(b)),hidden:m}}var Pn={smoke:"smoke",gas:"gas",carbon_monoxide:"co",moisture:"water"},Ha=new Set(["front","front_glass","sidelight","sidelights"]);function zn(o,e){let t=!1;for(let n=0,a=e.length-1;n<e.length;a=n++){let[r,i]=e[n],[l,s]=e[a];i>o[1]!=s>o[1]&&o[0]<(l-r)*(o[1]-i)/(s-i)+r&&(t=!t)}return t}function La(o,e){if(e.type!=="door"||e.wall)return!1;if(e.style&&Ha.has(e.style))return!0;if(e.style)return!1;let t=o.rooms.find(p=>p.id===e.room_id);if(!t||t.points.length<3)return!1;let n=t.points[e.edge],a=t.points[(e.edge+1)%t.points.length];if(!n||!a)return!1;let r=Math.hypot(a[0]-n[0],a[1]-n[1]);if(r<1e-6)return!1;let i=(a[0]-n[0])/r,l=(a[1]-n[1])/r,s=[n[0]+i*e.offset,n[1]+l*e.offset],c=p=>[s[0]-l*p,s[1]+i*p],u=zn(c(.3),t.points)?c(-.4):c(.4);return!o.rooms.some(p=>p.id!==t.id&&p.points.length>=3&&zn(u,p.points))}function pt(o,e,t){var r,i;let n=new Map,a=new Map(t.furniture);for(let l of e.floors)for(let s of l.furniture){if(!Rn(s.type))continue;let c=(r=a.get(s.id))==null?void 0:r.power,u=(i=l.placements.find(d=>{var m;return((m=o.states[d.entity_id])==null?void 0:m.attributes.device_class)==="power"&&Math.hypot(d.x-s.x,d.z-s.z)<=1.2}))==null?void 0:i.entity_id,p=c??u;p&&!n.has(p)&&n.set(p,s)}return n}function jn(o,e,t,n){var l;let a=new Map,r=(s,c)=>{s&&n.has(s)&&!a.has(s)&&a.set(s,c)},i=new Map(t.openings);for(let s of e.floors)for(let c of s.openings){let u=i.get(c.id);if(u)if(c.type==="garage")for(let p of[u.contact,u.cover])r(p,"garage");else if(c.type==="door"){if(La(s,c))for(let p of[u.contact,u.contact2])r(p,"door")}else[u.contact,u.tilt,u.contact2,u.tilt2].filter(d=>!!d&&n.has(d)).forEach((d,m)=>r(d,m?"window_more":"window"))}for(let s of pt(o,e,t).keys())r(s,"washer");for(let s of e.floors)for(let c of s.placements)if(c.entity_id.startsWith("camera."))for(let u of ct(o,c.entity_id))r(u,"camera");for(let s of n){if(a.has(s))continue;let c=ut(s),u=String(((l=o.states[s])==null?void 0:l.attributes.device_class)??"");c==="lock"?r(s,"lock"):c==="alarm_control_panel"?r(s,"alarm"):c==="vacuum"?r(s,"robot"):c==="weather"?r(s,"weather"):c==="cover"&&(u==="garage"||u==="gate")?r(s,"garage"):c==="binary_sensor"&&(Pn[u]?r(s,Pn[u]):u==="garage_door"?r(s,"garage"):u==="motion"&&r(s,"motion"))}return a}var Va={light:["brightness","color_mode","rgb_color","color_temp_kelvin"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature"],media_player:["media_title","media_artist","app_name","source","volume_level"],weather:["cloud_coverage","wind_speed","wind_speed_unit"],vacuum:["current_room"],fan:[],alarm_control_panel:[],lock:[],water_heater:[]};function Ia(o,e){if(o==="rgb_color")return Array.isArray(e)&&e.every(t=>typeof t=="number")?e.map(t=>Math.round(t)):null;if(typeof e!="number"||!Number.isFinite(e))return e;switch(o){case"brightness":return Math.max(0,Math.min(255,Math.round(Math.round(e/255*50)*2*255/100)));case"color_temp_kelvin":return Math.round(e/50)*50;case"current_position":case"current_tilt_position":case"cloud_coverage":return Math.round(e);case"volume_level":return Math.round(Math.round(e*20)*5)/100;case"current_temperature":case"temperature":case"wind_speed":return Math.round(e*10)/10;default:return e}}function qa(o){return o==="home"||o==="unavailable"||o==="unknown"?o:"not_home"}function mt(o){let e=o.entity_id.slice(0,o.entity_id.indexOf("."));if(e==="device_tracker")return{s:qa(o.state),a:null};let t=Va[e];if(!(t!=null&&t.length))return{s:o.state,a:null};let n={};for(let a of t){let r=o.attributes[a];if(r==null)continue;let i=Ia(a,r);i!=null&&(n[a]=i)}return{s:o.state,a:Object.keys(n).length?n:null}}var ht=3e5,$n=2e4,Wa=[6e4,ht,15*6e4,36e5],Ba=(o,e)=>o.startsWith("sensor.")&&e.state!==""&&Number.isFinite(Number(e.state));function Ua(o,e){let t=[];for(let n of o){let a=t[t.length-1];a&&Math.floor(a.t/e)===Math.floor(n.t/e)?t[t.length-1]=n:t.push(n);let r=t[t.length-2];r&&r.k===t[t.length-1].k&&t.pop()}return t}var Pe=class{ids;seen=new Map;lastKey=new Map;startStates;startedAt;seeded=new Set;rows=new Map;count=0;constructor(e,t,n=Date.now()){this.ids=e,this.startStates=t,this.startedAt=n;for(let a of e)this.seen.set(a,t[a]),t[a]&&this.lastKey.set(a,O(mt(t[a])))}get pending(){return this.count}record(e,t){for(let n of this.ids){let a=e[n];if(a===this.seen.get(n)||(this.seen.set(n,a),!a))continue;let r=mt(a),i=O(r);if(this.lastKey.get(n)===i)continue;let l=this.rows.get(n),s=l==null?void 0:l[l.length-1],c=Date.parse(a.last_updated??a.last_changed??""),u=Math.max(Number.isFinite(c)?Math.min(t,c):t,(s==null?void 0:s.t)??-1/0);if(s&&Ba(n,a)&&Math.floor(s.t/ht)===Math.floor(u/ht)){l[l.length-1]={t:u,v:r,k:i},this.lastKey.set(n,i);continue}this.lastKey.set(n,i),l?l.push({t:u,v:r,k:i}):this.rows.set(n,[{t:u,v:r,k:i}]),this.count++}this.count>$n&&this.compact()}compact(){for(let e of Wa){let t=0;for(let[n,a]of this.rows){let r=Ua(a,e);this.rows.set(n,r),t+=r.length}if(this.count=t,t<=$n/2)return}}flush(e,t){let n=0,a=0;for(let r of this.ids){if(this.seeded.has(r)||e.tracks.has(r)||e.series.has(r))continue;this.seeded.add(r);let i=this.startStates[r],l=[...i?[{t:this.startedAt,v:mt(i)}]:[],...this.rows.get(r)??[]],s=mn(r,l);this.rows.delete(r),s&&(e.tracks.set(r,s),e.missing.delete(r),a++,n+=s.times.length)}for(let[r,i]of this.rows){let l=e.tracks.get(r);if(l){n+=tt(l,i);continue}let s=e.series.get(r);s&&(n+=pn(s,i.map(c=>({t:c.t,value:Number(c.v.s)}))))}return this.rows=new Map,this.count=0,e.end=Math.max(e.end,t),{added:n,created:a}}};function Dn(o,e,t){if(!(e.state==="opening"||e.state==="closing")||e.pos===null||!t||t.pos===null)return e.pos;let a=t.t-e.t;return!(a>0)||a>18e4||o<=e.t?e.pos:o>=t.t?t.pos:Math.round(e.pos+(t.pos-e.pos)*(o-e.t)/a)}var A=Math.PI/180;function ze(o,e,t){let n=(t/864e5+24405875e-1-2451545)/36525,a=(280.46646+n*(36000.76983+n*3032e-7))%360,r=357.52911+n*(35999.05029-1537e-7*n),i=.016708634-n*(42037e-9+1267e-10*n),l=Math.sin(r*A)*(1.914602-n*(.004817+14e-6*n))+Math.sin(2*r*A)*(.019993-101e-6*n)+Math.sin(3*r*A)*289e-6,s=125.04-1934.136*n,c=a+l-.00569-.00478*Math.sin(s*A),p=23+(26+(21.448-n*(46.815+n*(59e-5-n*.001813)))/60)/60+.00256*Math.cos(s*A),d=Math.asin(Math.sin(p*A)*Math.sin(c*A)),m=Math.tan(p/2*A)**2,h=4/A*(m*Math.sin(2*a*A)-2*i*Math.sin(r*A)+4*i*m*Math.sin(r*A)*Math.cos(2*a*A)-.5*m*m*Math.sin(4*a*A)-1.25*i*i*Math.sin(2*r*A)),v=(((t/6e4%1440+1440)%1440+h+4*e)%1440+1440)%1440,w=(v/4<0?v/4+180:v/4-180)*A,b=o*A,_=Math.min(1,Math.max(-1,Math.sin(b)*Math.sin(d)+Math.cos(b)*Math.cos(d)*Math.cos(w))),g=Math.acos(_),M=90-g/A;M+=Ga(M);let T=Math.cos(b)*Math.sin(g),ee=180;if(Math.abs(T)>1e-9){let Mt=Math.acos(Math.min(1,Math.max(-1,(Math.sin(b)*Math.cos(g)-Math.sin(d))/T)))/A;ee=w>0?(Mt+180)%360:(540-Mt)%360}return{elevation:M,azimuth:ee}}function Ga(o){if(o>85)return 0;let e=Math.tan(o*A);return(o>5?58.1/e-.07/e**3+86e-6/e**5:o>-.575?1735+o*(-518.2+o*(103.4+o*(-12.79+o*.711))):-20.772/e)/3600}function ft(o,e,t){return ze(o,e,t).elevation<-.833}function Fn(o,e,t,n,a=5*6e4){let r=[],i=null;for(let l=t;l<=n;l+=a){let s=ft(o,e,l);s&&i===null&&(i=l),!s&&i!==null&&(r.push([i,l]),i=null)}return i!==null&&r.push([i,n]),r}var bt=class extends Error{constructor(e){super(`Time travel is read-only: ${e}`),this.name="ReplayReadOnly"}},Ka=new Set(["neonplan3d/building/get","neonplan3d/plans/list","neonplan3d/image/get","neonplan3d/packs/list","neonplan3d/timetravel/history","history/history_during_period","recorder/statistics_during_period"]),Qa=new Set(["neonplan3d/building/subscribe","neonplan3d/plans/subscribe"]),_t={light:["brightness","color_mode","rgb_color","color_temp_kelvin","color_temp","hs_color","xy_color","rgbw_color","rgbww_color","effect"],cover:["current_position","current_tilt_position"],climate:["hvac_action","current_temperature","temperature","target_temp_high","target_temp_low","current_humidity","preset_mode","fan_mode"],media_player:["media_title","media_artist","media_album_name","app_name","app_id","source","volume_level","is_volume_muted","entity_picture","media_content_id","media_duration","media_position","media_position_updated_at","media_series_title","media_season","media_episode","media_channel"],weather:["cloud_coverage","wind_speed","wind_speed_unit","temperature","humidity","pressure","wind_bearing","visibility","dew_point","uv_index","apparent_temperature","precipitation"],fan:["percentage","preset_mode","oscillating","direction"],vacuum:["battery_level","status","fan_speed"],water_heater:["current_temperature","temperature","operation_mode"],humidifier:["humidity","current_humidity","mode"],alarm_control_panel:["changed_by"],lock:["changed_by"],device_tracker:["latitude","longitude","gps_accuracy","altitude","course","speed","vertical_accuracy","battery_level","ip","host_name","mac","zone","in_zones"],sun:["elevation","azimuth","rising","next_rising","next_setting","next_dawn","next_dusk","next_noon","next_midnight"]},Nn=["person.","device_tracker."],gt=o=>o.slice(0,o.indexOf("."));function Ce(o,e){if(!(e!=null&&e.some(n=>n in o)))return o;let t={...o};for(let n of e)delete t[n];return t}function pe(o){throw typeof window<"u"&&window.dispatchEvent(new CustomEvent("fp3d-replay-blocked",{detail:{what:o}})),new bt(o)}function Ya(o,e){let t=o,n={...o,states:e};n.callService=(a,r)=>pe(`${a}.${r}`),n.callWS=a=>Ka.has(String(a.type))?o.callWS(a):pe(String(a.type)),n.connection={subscribeMessage:(a,r)=>Qa.has(String(r.type))?o.connection.subscribeMessage(a,r):pe(String(r.type))};for(let a of["callApi","callApiRaw"]){let r=t[a];typeof r=="function"&&(n[a]=(i,...l)=>String(i).toUpperCase()==="GET"?r.call(o,i,...l):pe(`${i} ${String(l[0])}`))}for(let a of["sendWS","fetchWithAuth"])a in t&&(n[a]=()=>pe(a));return n}var Za=new Set(["light","switch","input_boolean","binary_sensor","fan"]),je=class{timeline;cursor;requested;trackAt=new Map;location;slots=new Map;steps=new Map;live=null;frozen;base=null;states={};hass=null;pulses=[];constructor(e,t){this.timeline=e,this.cursor=new Y(e),this.cursor.tracks.forEach((a,r)=>this.trackAt.set(a.id,r)),this.location=t.location??null,this.frozen=t.states??null;let n=new Set([...t.allowed??[]].filter(a=>a.startsWith("device_tracker.")));this.requested=[...new Set([...t.requested,...e.tracks.keys(),...e.series.keys()])].filter(a=>n.has(a)||!Nn.some(r=>a.startsWith(r)))}refresh(){let e=this.cursor.t;this.cursor=new Y(this.timeline),this.trackAt.clear(),this.cursor.tracks.forEach((t,n)=>this.trackAt.set(t.id,n)),Number.isFinite(e)&&this.cursor.at(e)}hassAt(e,t,n=!0){let a=this.frozen??=e.states,r=!1;if(!this.base){this.base={};for(let[s,c]of Object.entries(a))Nn.some(u=>s.startsWith(u))||(this.base[s]=s.startsWith("camera.")&&c.attributes.entity_picture?{...c,attributes:Ce(c.attributes,["entity_picture","access_token"])}:c);r=!0}this.sameContext(e)||(this.live=e,r=!0);let i=!n&&t>this.cursor.t&&Number.isFinite(this.cursor.t)?this.cursor.idx.slice():null;this.cursor.at(t),this.pulses=i?this.findPulses(i):[];let l=[];for(let s of this.requested){let c=this.slots.get(s),u=this.slot(s,t,a[s],c);u!==c&&(this.slots.set(s,u),l.push(s))}if(!r&&!l.length&&this.hass)return this.hass;if(r){this.states={...this.base};for(let s of this.requested){let c=this.slots.get(s);c&&(this.states[s]=c.obj)}}else{this.states={...this.states};for(let s of l)this.states[s]=this.slots.get(s).obj}return this.hass=Ya(this.live,this.states),this.hass}findPulses(e){let t=[],n=this.cursor.idx;for(let a=0;a<n.length;a++){let r=e[a],i=n[a];if(r<0||i-r<2)continue;let l=this.cursor.tracks[a];if(!Za.has(gt(l.id)))continue;let s=l.values[l.vals[r]].s;if(l.values[l.vals[i]].s===s){for(let c=r+1;c<i;c++)if(l.values[l.vals[c]].s!==s){t.push(l.id);break}}}return t}sameContext(e){let t=this.live;if(!t)return!1;if(t===e)return!0;let n=e;for(let a in n)if(a!=="states"&&n[a]!==t[a])return!1;for(let a in t)if(!(a in n))return!1;return!0}slot(e,t,n,a){let r=this.trackAt.get(e),i=this.timeline.series.get(e),l,s;if(e==="sun.sun"&&this.location){let c=ze(this.location.lat,this.location.lon,t),u=Math.round(c.elevation*2)/2,p=Math.round(c.azimuth*2)/2,d=ze(this.location.lat,this.location.lon,t+6e5).elevation>c.elevation;l=`${u}|${p}|${d}`,s=()=>({entity_id:e,state:c.elevation>-.833?"above_horizon":"below_horizon",attributes:{...Ce((n==null?void 0:n.attributes)??{},_t.sun),elevation:u,azimuth:p,rising:d}})}else if(r!==void 0&&this.cursor.idx[r]>=0){let c=this.cursor.tracks[r],u=this.cursor.idx[r],p=c.values[c.vals[u]],d=e.startsWith("cover.")?this.coverPos(c,u,t):null;l=d===null?`${u}`:`${u}:${d}`,s=()=>{let m={...Ce((n==null?void 0:n.attributes)??{},_t[gt(e)]),...p.a??{}};d!==null&&(m.current_position=d),e==="sun.sun"&&m.elevation===void 0&&Object.assign(m,{elevation:p.s==="above_horizon"?25:-12,azimuth:180});let h=c.since[u];return h>this.timeline.start?{entity_id:e,state:p.s,attributes:m,last_changed:new Date(h).toISOString()}:{entity_id:e,state:p.s,attributes:m}}}else if(i){let c=W(i,t),u=this.stepOf(e,i,n),p=nn(c,u);l=`n${p}`,s=()=>({entity_id:e,state:p,attributes:(n==null?void 0:n.attributes)??{},last_changed:new Date(t).toISOString()})}else l="none",s=()=>({entity_id:e,state:"unknown",attributes:Ce((n==null?void 0:n.attributes)??{},_t[gt(e)])});return a&&a.key===l&&a.attrs===(n==null?void 0:n.attributes)?a:{key:l,attrs:n==null?void 0:n.attributes,obj:s()}}coverPos(e,t,n){let a=e.values[e.vals[t]];if(a.s!=="opening"&&a.s!=="closing")return null;let r=l=>{var s;return typeof((s=l.a)==null?void 0:s.current_position)=="number"?l.a.current_position:null},i=t+1<e.times.length?{t:e.times[t+1],pos:r(e.values[e.vals[t+1]])}:null;return Dn(n,{t:e.times[t],state:a.s,pos:r(a)},i)}stepOf(e,t,n){var r,i,l;let a=this.steps.get(e);if(a===void 0){let s=t.mean.find(c=>!Number.isNaN(c))??0;a=tn(n==null?void 0:n.attributes.unit_of_measurement,(l=(i=(r=this.live)==null?void 0:r.entities)==null?void 0:i[e])==null?void 0:l.display_precision,s),this.steps.set(e,a)}return a}rows(e,t,n){let a={};for(let r of e){let i=this.timeline.tracks.get(r);if(!i)continue;let l=[];for(let s=Math.max(0,R(i.times,t));s<i.times.length&&i.times[s]<=n;s++)l.push({s:i.values[i.vals[s]].s,lu:i.times[s]/1e3});l.length&&(a[r]=l)}return a}};var On=new Set(["cleaning","paused","returning"]),Xa=new Set(["","unknown","unavailable","none","null"]);function Hn(o,e,t){var c;if(!o)return[];let n=u=>o.values[o.vals[u]].s,a=R(o.times,t);if(a<0||!On.has(n(a)))return[];let r=a;for(;r>0&&On.has(n(r-1));)r--;let i=o.times[r],l=[],s=u=>{let p=typeof u=="string"?u.trim():"";!Xa.has(p.toLowerCase())&&l[l.length-1]!==p&&l.push(p)};if(e){let u=Math.max(0,R(e.times,i));for(e.times[u]<i-6e4&&u++;u<e.times.length&&e.times[u]<=t;u++)s(e.values[e.vals[u]].s)}else for(let u=r;u<=a;u++)s((c=o.values[o.vals[u]].a)==null?void 0:c.current_room);return l}var vt=o=>o.slice(0,o.indexOf("."));function Ja(o,e){return Fe(o,e)}function Ln(o,e,t){let n=[],a=new Map;for(let l of Object.keys(o.entities??{})){let s=Ja(o,l);s&&a.set(s,[...a.get(s)??[],l])}let r=new Map(t.openings),i=new Map(t.furniture);for(let l of e.floors)for(let s of At(l)){if(s.points.length<3)continue;let c=new Set(s.area_id?a.get(s.area_id)??[]:[]);for(let m of l.placements)z([m.x,m.z],s.points)&&c.add(m.entity_id);for(let m of l.furniture){let h=i.get(m.id);h!=null&&h.entity&&z([m.x,m.z],s.points)&&c.add(h.entity)}let u=[];for(let m of l.openings){if(m.room_id!==s.id)continue;let h=r.get(m.id),f=h?[h.contact,h.tilt,h.contact2,h.tilt2].filter(v=>!!v):[];for(let v of f)c.add(v);f.length&&m.type!=="door"&&m.type!=="garage"&&u.push(f)}let p=[...c].filter(m=>!!o.states[m]),d=m=>{var h;return(h=o.states[m])==null?void 0:h.attributes.device_class};n.push({floorId:l.id,roomId:s.id,name:s.name,lights:p.filter(m=>vt(m)==="light"),windows:u,climates:p.filter(m=>vt(m)==="climate"),temps:(()=>{var v;let m=(v=s.climate)==null?void 0:v.temperature;if(m&&o.states[m])return[m];let h=/dew|frost|humidex|heat_?index|simmer|wind_?chill|apparent|feels|taupunkt|gef(ü|ue)hlt|perceived|comfort/i,f=w=>{var b;return`${w} ${String(((b=o.states[w])==null?void 0:b.attributes.friendly_name)??"")}`};return p.filter(w=>vt(w)==="sensor"&&d(w)==="temperature"&&!h.test(f(w)))})(),all:p})}return n}function Vn(o){let e=new Map;for(let t of o)for(let n of t.all)e.has(n)||e.set(n,t);return e}var yt=36e5;function me(o,e,t){let n=o.map(([r,i])=>[Math.max(r,e),Math.min(i,t)]).filter(([r,i])=>i>r);n.sort((r,i)=>r[0]-i[0]);let a=[];for(let r of n){let i=a[a.length-1];i&&r[0]<=i[1]?i[1]=Math.max(i[1],r[1]):a.push([r[0],r[1]])}return a}var $e=o=>o.reduce((e,[t,n])=>e+(n-t),0);function eo(o,e,t){let n=[],a=null;for(let r=0;r<o.times.length;r++){let i=e(o.values[o.vals[r]]);i&&a===null&&(a=o.times[r]),!i&&a!==null&&(n.push([a,o.times[r]]),a=null)}return a!==null&&t>a&&n.push([a,t]),n}function qn(o,e,t,n,a=2*yt){let r=me(e.flatMap(s=>{let c=o.tracks.get(s);return c?X(c,U,o.end):[]}),t,n);if(!e.some(s=>o.tracks.has(s)))return[];let i=[],l=t;for(let[s,c]of r)s-l>=a&&i.push([l,s]),l=Math.max(l,c);return n-l>=a&&i.push([l,n]),i}function Wn(o){for(let e=o.length-1;e>=0;e--){let[t,n]=o[e],a=0;for(let r=t;r<n;r+=6e5){let i=Z(r);i>=7&&i<22&&(a+=Math.min(6e5,n-r))}if(a>=yt)return[t,n]}return null}var In=["alarm","door","window","window_open","light_on","motion","appliance"];function Bn(o){let{timeline:e,roles:t,events:n,from:a,to:r}=o,i=[],l=new Map,s=(u,p,d)=>{let m=`${u}:${p}`,h=l.get(m);if(h)h.count++,h.t=Math.min(h.t,d);else{let f={kind:u,entity:p,t:d,count:1,ms:0};l.set(m,f),i.push(f)}};for(let u of n)u.t<a||u.t>r||(Se.has(u.kind)||u.kind==="rain"?i.push({kind:"alarm",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}):u.kind==="door"||u.kind==="garage"||u.kind==="lock"?s("door",u.entity,u.t):u.kind==="window"?s("window",u.entity,u.t):(u.kind==="washer"||u.kind==="robot_done")&&i.push({kind:"appliance",entity:u.entity,t:u.t,count:1,ms:0,event:u.kind}));for(let u of o.motion){let p=e.tracks.get(u);if(p){for(let d of ue(p))d.from!==null&&d.t>=a&&d.t<=r&&d.to==="on"&&d.from!=="on"&&s("motion",u,d.t);if(p.dropped)for(let d of p.dropped)d>=a&&d<=r&&s("motion",u,d)}}let c=(u,p,d,m)=>{let h=me(d,a,r),f=$e(h);(f>=m||h.length&&h[h.length-1][1]>=r&&f>=6e4)&&i.push({kind:u,entity:p,t:h[0][0],count:h.length,ms:f})};for(let u of o.lights){let p=e.tracks.get(u);p&&c("light_on",u,X(p,to,e.end),15*6e4)}for(let[u,p]of t){if(p!=="window"&&p!=="window_more")continue;let d=e.tracks.get(u);d&&c("window_open",u,X(d,U,e.end),30*6e4)}return i.sort((u,p)=>In.indexOf(u.kind)-In.indexOf(p.kind)||(u.kind==="light_on"||u.kind==="window_open"?p.ms-u.ms:u.t-p.t))}var to=new Set(["on"]);function no(o,e,t,n){let a=1/0,r=-1/0,i=o.series.get(e);if(i)for(let l=0;l<i.mean.length;l++){let s=i.start+(l+.5)*i.step,c=i.mean[l];s<t||s>n||Number.isNaN(c)||(a=Math.min(a,c),r=Math.max(r,c))}else{let l=o.tracks.get(e);if(l)for(let s=Math.max(0,R(l.times,t));s<l.times.length&&l.times[s]<=n;s++){let c=Number(l.values[l.vals[s]].s);Number.isFinite(c)&&(a=Math.min(a,c),r=Math.max(r,c))}}return Number.isFinite(a)?[a,r]:null}function Un(o,e,t,n,a=null){let r=Math.min(n,o.end),i=[],l=(s,c)=>s.flatMap(u=>{let p=o.tracks.get(u);return p?eo(p,c,o.end):[]});for(let s of e){let c=$e(me(l(s.lights,h=>h.s==="on"),t,r)),u=$e(me(l(s.windows.flat(),h=>U.has(h.s)),t,r)),p=$e(me(l(s.climates,h=>{var f;return((f=h.a)==null?void 0:f.hvac_action)==="heating"}),t,r)),d=null,m=null;for(let h of s.temps){let f=no(o,h,t,r);f&&(d=d===null?f[0]:Math.min(d,f[0]),m=m===null?f[1]:Math.max(m,f[1]))}(c||u||p||d!==null)&&i.push({roomId:s.roomId,name:s.name,lightMs:c,windowMs:u,heatMs:p,tMin:d,tMax:m})}return{from:t,to:n,rooms:i,energy:a}}function ao(o,e,t){let n=o.series.get(e);if(n){let i=W(n,t);return Number.isFinite(i)?String(i):null}let a=o.tracks.get(e);if(!a)return null;let r=R(a.times,t);return r<0?null:a.values[a.vals[r]].s}function Gn(o,e,t,n,a,r){var l;let i={};for(let s of a){let c=ao(o,s,r);c!==null&&(i[s]={entity_id:s,state:c,attributes:((l=e[s])==null?void 0:l.attributes)??{}})}return Ct({states:i},t,[],n)}function Kn(o,e){let t=o.energy;return[...new Set([t.grid,t.solar,t.battery,t.battery_soc,t.consumption,e.grid,e.gridExport,...e.solar,...e.battery,...e.charge,...e.soc].filter(n=>!!n))]}function Qn(o,e,t,n=3e5){let a=0,r=0,i=0,l=0,s=!1,c=n/yt/1e3;for(let u=e+n/2;u<t;u+=n){let p=o(u);p.solar===null&&p.grid===null&&p.consumption===null||(s=!0,a+=Math.max(0,p.solar??0)*c,r+=Math.max(0,p.grid??0)*c,i+=Math.max(0,-(p.grid??0))*c,l+=Math.max(0,p.consumption??0)*c)}return s?{pv:a,imp:r,exp:i,use:l,self:l>0?Math.min(1,Math.max(0,1-r/l)):null}:null}var oo={tt_range_hint:"Periodo: 24 horas o varios d\xEDas",tt_days:"{n} d",tt_loading_day:"cargando {day} \u2026",tt_recorder_days:"Registro: {n} d\xEDas",tt_memory_full:"L\xEDmite de memoria alcanzado",tt_now_reached:"Presente alcanzado",tt_sheet:"Eventos, res\xFAmenes",tt_tab_events:"Eventos",tt_tab_away:"Ausencia",tt_tab_day:"D\xEDa",tt_close:"Cerrar",tt_f_safety:"Seguridad",tt_f_openings:"Puertas y ventanas",tt_f_devices:"Aparatos",tt_f_energy:"Energ\xEDa",tt_follow:"La c\xE1mara sigue los eventos",tt_stop:"Parar en eventos importantes",tt_no_events:"Sin eventos",tt_ev_window:"{name} abierta",tt_ev_battery_full:"Bater\xEDa llena: {name}",tt_ev_pv_peak:"M\xE1xima potencia solar del d\xEDa",tt_away_title:"Mientras no estabas",tt_away_since:"Desde",tt_away_last:"desde el \xFAltimo viaje en el tiempo",tt_away_quiet:"tranquilo {from}\u2013{to}",tt_away_none:"No pas\xF3 nada \u2013 todo tranquilo.",tt_away_door:"{name}: abierta {n}\xD7",tt_away_motion:"Movimiento {name}: {n}\xD7",tt_away_light:"{name} encendida durante {d}",tt_away_open:"{name} abierta durante {d}",tt_day_title:"Resumen del d\xEDa {day}",tt_day_light:"Luz",tt_day_window:"Ventana",tt_day_heat:"Calefacci\xF3n",tt_day_temp:"Temp.",tt_day_pv:"Solar",tt_day_import:"Compra de red",tt_day_export:"Inyecci\xF3n",tt_day_use:"Consumo",tt_day_self:"Autosuficiencia",tt_day_compare:"Comparar con el d\xEDa anterior",tt_day_before:"D\xEDa anterior",tt_day_none:"A\xFAn no hay valores para este d\xEDa.",tt_day_partial:"incompleto (desde las {time})",tt_yesterday:"Ayer a esta hora"};function Yn(o){return(e,t={})=>{let n=o(e,t);if(n!==e)return n;let a=oo[e]??e;for(let[r,i]of Object.entries(t))a=a.replace(`{${r}}`,String(i));return a}}var C=24*36e5,wt=150,xt=250,ro=10*1024*1024,io=6e4,so=6e4,Zn=1e4;function J(o,e){try{return e!==void 0&&localStorage.setItem(`fp3d-tt-${o}`,e),localStorage.getItem(`fp3d-tt-${o}`)}catch{return null}}var kt=class{hass=null;replay;state="loading";error=null;progress=0;playback=null;timeline=null;events=[];allEvents=[];names=new Map;gaps=[];nights=[];rooms=[];roomOf=new Map;opts;end;range;loadingDay=null;full=!1;version=0;follow=J("follow")==="1";stopImportant=J("stop")!=="0";lastClosed;t;live;startStates;replayer=null;roles=new Map;weather=null;devices=null;energyIds=[];requested=[];cars=[];liveLog=null;quality;low;timer;last=0;followAt=0;eventsAt=0;flushedAt=0;derivePending=!1;gapsTo=0;wanted=null;needFrom=null;olderRunning=!1;disposed=!1;daySummaries=new Map;listeners=new Set;onVisible=()=>{var e;document.hidden||!((e=this.playback)!=null&&e.playing)||(this.last=performance.now(),this.schedule())};constructor(e){this.opts=e,this.live=e.live,this.startStates=e.live.states,this.quality=e.quality,this.low=e.spec.low,this.t=Yn(e.t),at(nt(e.live)),this.end=Date.now(),this.range=e.range==="7d"?"7d":"24h";let t=Number(J("closed"));this.lastClosed=Number.isFinite(t)&&t>0&&t<this.end?t:null;let n=this;this.replay={t:this.end,seek:0,pulses:[],focus:null,focusSeq:0,rows:(a,r,i)=>{var l;return((l=n.replayer)==null?void 0:l.rows(a,r,i))??{}},listen:a=>n.listen(a),stats:(a,r,i)=>n.timeline?fn(n.timeline,a,r,i):{},robotRooms:(a,r)=>n.timeline?Hn(n.timeline.tracks.get(a),r?n.timeline.tracks.get(r):void 0,n.replay.t):[],setQuality:(a,r)=>n.setQuality(a,r)},document.addEventListener("visibilitychange",this.onVisible),this.load()}listen(e){return this.listeners.add(e),()=>this.listeners.delete(e)}notify(){for(let e of this.listeners)e()}get playing(){var e;return!!((e=this.playback)!=null&&e.playing)}get maxDays(){return(this.quality==="low"||this.low)&&this.opts.range!=="7d"?2:7}get start(){return this.end-(this.range==="7d"?this.maxDays:1)*C}get recorderStart(){var t;let e=(t=this.timeline)==null?void 0:t.keepDays;return typeof e=="number"&&e>0?this.end-e*C:null}get atNow(){let e=this.playback;return!!e&&!e.playing&&e.t>=e.end-1e3&&Date.now()-e.end<12e4}get location(){let e=this.live.config;return typeof(e==null?void 0:e.latitude)=="number"&&typeof(e==null?void 0:e.longitude)=="number"?{lat:e.latitude,lon:e.longitude}:null}get energy(){return!!this.opts.spec.energy&&this.energyIds.length>0}async fetchWindow(e,t,n){let a=dt(this.live,this.opts.building,this.opts.spec),r=Math.max(1,Math.ceil(a.entities.length/wt),Math.ceil(a.stats.length/xt)),i=[];for(let l=0;l<r;l++){let s=a.entities.slice(l*wt,(l+1)*wt),c=a.stats.slice(l*xt,(l+1)*xt),u={type:"neonplan3d/timetravel/history",start_time:e/1e3,end_time:t/1e3,entity_ids:s,statistic_ids:c},p=a.cars.filter(d=>s.includes(d));if(p.length&&(u.car_trackers=p),i.push(await this.live.callWS(u)),this.disposed)return null;n==null||n((l+1)/r)}return on(i)}async load(){this.state="loading",this.error=null,this.progress=0,this.notify();let{building:e,spec:t}=this.opts,n=this.live,a=dt(n,e,t),r;try{r=await this.fetchWindow(this.end-C,this.end,c=>{this.progress=c,this.notify()})}catch(c){if(this.disposed)return;let u=c;this.state="error",this.error=(u==null?void 0:u.code)??(u==null?void 0:u.message)??String(c),this.notify();return}if(!r)return;let i=e.presence.flatMap(c=>[c.sensor]).filter(c=>!!c);this.requested=[...a.entities,...a.stats,...a.overflow,...a.hidden,...i],this.cars=a.cars;let l=new Map(t.furniture);this.devices=t.energy?Ne(e,c=>{var u;return((u=l.get(c.id))==null?void 0:u.power)??null}):null,this.energyIds=this.devices?Kn(e,this.devices):[],this.rooms=Ln(n,e,t),this.roomOf=Vn(this.rooms);for(let[c,u]of pt(n,e,t))this.names.set(c,u.name||this.t(`furn_${u.type}`));this.setTimeline(r);let s=typeof this.opts.at=="number"?this.opts.at:Re(this.opts.at??null,this.end);this.playback=new Ee(r.start,this.end,s??this.end-36e5,this.opts.speed??void 0,this.range==="7d"?it:Ae),this.liveLog=new Pe([...a.entities,...a.stats,...a.overflow],this.startStates,this.end),this.liveLog.record(this.live.states,Date.now()),this.flushedAt=Date.now(),this.state="ready",this.apply(!0),this.range==="7d"&&this.loadOlder()}setTimeline(e){let{building:t,spec:n}=this.opts,a=this.live,r=new Set([...e.tracks.keys(),...e.series.keys()]);this.roles=jn(a,t,n,r),ln(e)>un&&dn(e,this.motion()),this.timeline=e,this.version++,this.daySummaries.clear(),this.replayer=new je(e,{requested:this.requested,location:this.location,states:this.startStates,allowed:this.cars}),this.weather??=[t.settings.weather_entity,...Object.keys(a.states).filter(i=>i.startsWith("weather."))].find(i=>!!i&&r.has(i))??null,this.findEvents(),this.gaps=et(e),this.gapsTo=e.end,this.updateNights()}findEvents(){let e=this.timeline;if(!e)return;let{building:t,spec:n}=this.opts,a=this.devices,r=a&&n.energy?{solar:t.energy.solar?[t.energy.solar]:a.solar,soc:t.energy.battery_soc?[t.energy.battery_soc]:a.soc,sunDown:s=>this.sunDown(s)}:null,i=t.settings.outage_entity,l=i&&this.live.states[i]?{id:i,attributes:this.live.states[i].attributes}:null;this.allEvents=vn({timeline:e,roles:this.roles,weather:this.weather,energy:r,outage:l}),this.events=this.allEvents.filter(s=>!bn.has(s.kind))}sunDown(e){var r;let t=this.location;if(t)return ft(t.lat,t.lon,e);let n=(r=this.timeline)==null?void 0:r.tracks.get("sun.sun"),a=n?R(n.times,e):-1;return!!n&&a>=0&&n.values[n.vals[a]].s==="below_horizon"}shownEvents(e=!1){let t=this.playback,n=e?this.allEvents:this.events;return t?Sn(n,Math.max(t.start,this.start),this.end):n}motion(){return[...this.roles].filter(([,e])=>e==="motion"||e==="camera").map(([e])=>e)}updateNights(){let e=this.location;this.nights=e?Fn(e.lat,e.lon,this.start,this.end):this.sunNights()}async loadOlder(){if(!this.olderRunning){this.olderRunning=!0;try{for(;!this.disposed&&this.timeline&&!this.full;){let e=this.timeline.start,t=Math.min(this.range==="7d"?this.start:1/0,this.needFrom??1/0);if(e<=t+6e4)break;let n=this.recorderStart;if(n!==null&&e<=n||this.timeline.oldest!==null&&this.timeline.oldest>this.timeline.start)break;this.loadingDay=e-C,this.notify();let a;try{a=await this.fetchWindow(e-C,e)}catch(s){console.warn("CasaNeon: time travel could not load an older day",s);break}if(!a||this.disposed||!this.timeline)return;let r=sn(a,this.timeline);this.setTimeline(r),cn(r)>ro&&(this.full=!0);let i=this.playback;if(!i)continue;i.setRange(Math.max(r.start,this.start),this.end);let l=!1;this.wanted!==null&&this.wanted>=i.start&&(i.seek(this.wanted),this.wanted=null,l=!0),this.apply(!0,l)}}finally{this.olderRunning=!1,this.disposed||(this.loadingDay=null,this.notify())}}}setRange(e){let t=this.playback;if(e===this.range||!t||!this.timeline)return;this.range=e;let n=t.t;t.setRange(Math.max(this.timeline.start,this.start),this.end,e==="7d"?it:Ae),this.updateNights(),t.t!==n?this.apply(!0):this.notify(),e==="7d"&&this.loadOlder()}sunNights(){var a;let e=(a=this.timeline)==null?void 0:a.tracks.get("sun.sun");if(!e)return[];let t=[],n=null;for(let r=0;r<e.times.length;r++){let i=e.values[e.vals[r]].s==="below_horizon";i&&n===null&&(n=e.times[r]),!i&&n!==null&&(t.push([n,e.times[r]]),n=null)}return n!==null&&t.push([n,this.end]),t}apply(e,t=e){let n=this.playback;if(!n||!this.replayer||this.disposed)return;this.replay.t=n.t,t&&this.replay.seek++;let a=this.replayer.hassAt(this.live,n.t,e);this.replay.pulses=this.replayer.pulses,(a!==this.hass||e)&&(this.hass=a,this.opts.onChange()),this.notify()}setLive(e){var r;this.live=e,at(nt(e));let t=Date.now();(r=this.liveLog)==null||r.record(e.states,t);let n=this.playback,a=!1;if(this.state==="ready"&&n&&this.liveLog&&(this.liveLog.pending&&t-this.flushedAt>=so||this.derivePending&&t-this.eventsAt>Zn)){let i=!n.playing&&n.t>=n.end-1e3;this.edge(t),i&&n.seek(n.end),this.replay.t=n.t,a=!0}this.replayer&&n&&(this.hass=this.replayer.hassAt(e,n.t)),a&&this.notify()}setQuality(e,t){let n=this.maxDays;this.quality=e,this.low=t;let a=this.playback;if(n===this.maxDays||!a||!this.timeline)return;let r=this.end-this.maxDays*C,i=this.timeline.start<r-6e4;if(i)this.setTimeline(hn(this.timeline,r)),this.full=!1,this.needFrom!==null&&this.needFrom<r&&(this.needFrom=null),this.wanted!==null&&this.wanted<r&&(this.wanted=null);else if(this.range!=="7d")return;let l=a.t;a.setRange(Math.max(this.timeline.start,this.start),this.end),this.updateNights(),i||a.t!==l?this.apply(!0,a.t!==l):this.notify(),this.loadOlder()}play(){let e=this.playback;if(!e)return;let t=e.t>=e.end;e.play(),t&&this.apply(!0),this.last=performance.now(),this.schedule(),this.notify()}pause(){var e;(e=this.playback)==null||e.pause(),clearTimeout(this.timer),this.timer=void 0,this.derivePending&&this.derive(Date.now()),this.notify()}toggle(){var e;(e=this.playback)!=null&&e.playing?this.pause():this.play()}seek(e,t=!1){this.playback&&(t&&this.pause(),this.wanted=null,this.playback.seek(e),this.last=performance.now(),this.apply(!0))}step(e){let t=this.playback;if(!t)return;let n=Mn(this.shownEvents(),t.t,e);this.seek(n?n.t:e>0?t.end:t.start,!0)}goTo(e){this.seek(e.t,!0),this.focusOn(e.entity)}focusOn(e){this.replay.focus=e,this.replay.focusSeq++,this.notify()}yesterday(){let e=this.playback;if(!e)return;let t=e.t-C;t<e.start&&this.range==="24h"&&this.setRange("7d"),this.seek(Math.max(t,e.start),!0),t<e.start&&this.olderRunning&&(this.wanted=t)}setFollow(e){this.follow=e,J("follow",e?"1":"0"),this.notify()}setStopImportant(e){this.stopImportant=e,J("stop",e?"1":"0"),this.notify()}nextSpeed(){var e;(e=this.playback)==null||e.nextSpeed(),this.notify()}awayOffer(){let e=this.timeline;return e?Wn(qn(e,this.motion(),e.start,this.end)):null}away(e,t){let n=this.timeline;if(!n)return[];let a=new Map(this.opts.spec.furniture),r=new Set(this.opts.building.floors.flatMap(i=>i.furniture).filter(i=>Tt(i.type)).map(i=>{var l;return(l=a.get(i.id))==null?void 0:l.entity}).filter(i=>!!i&&i.startsWith("switch.")));return Bn({timeline:n,roles:this.roles,events:this.allEvents,lights:[...n.tracks.keys()].filter(i=>i.startsWith("light.")||r.has(i)),motion:this.motion(),from:e,to:t})}ensureLoaded(e){let t=this.timeline;!t||t.start<=e+6e4||this.needFrom!==null&&this.needFrom<=e||e<this.end-this.maxDays*C-C||(this.needFrom=e,this.loadOlder())}daySummary(e){let t=this.timeline;if(!t||e+C<=t.start||e>t.end)return null;let n=`${e}|${this.version}`,a=this.daySummaries.get(n);if(!a){let r=xe(e),i=Math.max(e,t.start),l=Math.min(r,t.end),s=this.devices,c=this.energy&&s?Qn(u=>Gn(t,this.live.states,this.opts.building,s,this.energyIds,u),i,l):null;a=Un(t,this.rooms,i,l,c),this.daySummaries.set(n,a)}return a}schedule(){clearTimeout(this.timer),this.timer=void 0;let e=this.playback;!(e!=null&&e.playing)||this.disposed||document.hidden||(this.timer=setTimeout(()=>{this.timer=void 0;let t=performance.now(),n=Math.min(2e3,t-this.last);this.last=t;let a=e.t;if(e.end-e.t<=io+n*e.speed&&this.edge(),e.advance(n)){let r=this.stopImportant&&e.speed>=900?st(this.allEvents,a,e.t,i=>Se.has(i.kind)):null;if(r){e.seek(r.t),e.pause(),this.apply(!0),this.focusOn(r.entity);return}if(this.apply(!1),this.follow&&t-this.followAt>2500){let i=st(this.events,a,e.t,()=>!0);i&&(this.followAt=t,this.focusOn(i.entity))}}e.playing?this.schedule():(this.derivePending&&this.derive(Date.now()),this.notify())},kn(this.quality,this.low)))}edge(e=Date.now()){var i;let t=this.playback,n=this.timeline;if(!t||!n||!this.liveLog||e-this.end<1e3&&!this.liveLog.pending&&!this.derivePending)return;let{added:a,created:r}=this.liveLog.flush(n,e);this.flushedAt=e,this.end=e,t.setRange(Math.max(n.start,this.start),e),r&&((i=this.replayer)==null||i.refresh()),(a||r)&&(this.derivePending=!0),this.derivePending&&(!t.playing||e-this.eventsAt>Zn)&&this.derive(e)}derive(e){let t=this.timeline;if(!t)return;this.derivePending=!1,this.eventsAt=e,this.findEvents();let n=Math.max(t.start,this.gapsTo-30*6e4),a=this.gaps.filter(([l])=>l<n).map(([l,s])=>[l,Math.min(s,n)]),r=et(t,void 0,void 0,void 0,n),i=a[a.length-1];i&&r.length&&i[1]>=n&&r[0][0]<=n&&(i[1]=r.shift()[1]),this.gaps=[...a,...r],this.gapsTo=t.end,this.updateNights(),this.version++,this.daySummaries.clear()}exit(){this.opts.onExit()}dispose(){!this.disposed&&this.state==="ready"&&J("closed",String(Date.now())),this.disposed=!0,clearTimeout(this.timer),this.timer=void 0,this.listeners.clear(),this.liveLog=null,document.removeEventListener("visibilitychange",this.onVisible)}};function ns(o){return new kt(o)}export{ro as MAX_BYTES,kt as Session,ns as startTimeTravel};
