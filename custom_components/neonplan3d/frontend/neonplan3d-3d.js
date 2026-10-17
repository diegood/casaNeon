var ff=0,Vc=1,df=2;var ks=1,pf=2,Zr=3,Yn=0,je=1,de=2,qn=0,Fi=1,Le=2,Gc=3,zs=4,mf=5;var rr=100,gf=101,xf=102,bf=103,_f=104,vf=200,yf=201,Mf=202,Sf=203,Hc=204,Wc=205,wf=206,Tf=207,Ef=208,Af=209,Rf=210,Cf=211,Pf=212,If=213,Lf=214,ea=0,na=1,ia=2,kr=3,ra=4,sa=5,oa=6,aa=7,Xc=0,Ff=1,Df=2,Ln=0,Yc=1,qc=2,$c=3,Zc=4,Kc=5,Jc=6,jc=7;var Qc=300,Di=301,sr=302,Na=303,Ua=304,Vs=306,Qi=1e3,xn=1001,la=1002,Xe=1003,Nf=1004;var Gs=1005;var Ke=1006,Oa=1007;var Ni=1008;var _n=1009,tu=1010,eu=1011,Kr=1012,Ba=1013,Fn=1014,Dn=1015,Nn=1016,ka=1017,za=1018,Jr=1020,nu=35902,iu=35899,ru=1021,su=1022,Sn=1023,Gn=1026,Ui=1027,ou=1028,Va=1029,Oi=1030,Ga=1031;var Ha=1033,Hs=33776,Ws=33777,Xs=33778,Ys=33779,Wa=35840,Xa=35841,Ya=35842,qa=35843,$a=36196,Za=37492,Ka=37496,Ja=37488,ja=37489,qs=37490,Qa=37491,tl=37808,el=37809,nl=37810,il=37811,rl=37812,sl=37813,ol=37814,al=37815,ll=37816,cl=37817,ul=37818,hl=37819,fl=37820,dl=37821,pl=36492,ml=36494,gl=36495,xl=36283,bl=36284,$s=36285,_l=36286;var _s=2300,ca=2301,jo=2302,Pc=2303,Ic=2400,Lc=2401,Fc=2402;var Uf=3200;var au=0,Of=1,ui="",De="srgb",vs="srgb-linear",ys="linear",ge="srgb";var Qo=7680;var Bf=519,kf=512,zf=513,Vf=514,vl=515,Gf=516,Hf=517,yl=518,Wf=519,Xf=35044,lu=35048;var cu="300 es",In=2e3,Ms=2001;function b0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yf(){let i=zr("canvas");return i.style.display="block",i}var Dh={},Vr=null;function uu(...i){let t="THREE."+i.shift();Vr?Vr("log",t,...i):console.log(t,...i)}function qf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=qf(i);let t="THREE."+i.shift();if(Vr)Vr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=qf(i);let t="THREE."+i.shift();if(Vr)Vr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ji(...i){let t=i.join(" ");t in Dh||(Dh[t]=!0,Wt(...i))}function $f(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Zf={[ea]:na,[ia]:oa,[ra]:aa,[kr]:sa,[na]:ea,[oa]:ia,[aa]:ra,[sa]:kr},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ac=Math.PI/180,ua=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function v0(i,t){return(i%t+t)%t}function lc(i,t,e){return(1-e)*i+e*t}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var mu=class mu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};mu.prototype.isVector2=!0;var ee=mu,Wn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3],h=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(u!==x||l!==h||c!==d||f!==g){let p=l*h+c*d+f*g+u*x;p<0&&(h=-h,d=-d,g=-g,x=-x,p=-p);let m=1-a;if(p<.9995){let _=Math.acos(p),y=Math.sin(_);m=Math.sin(m*_)/y,a=Math.sin(a*_)/y,l=l*m+h*a,c=c*m+d*a,f=f*m+g*a,u=u*m+x*a}else{l=l*m+h*a,c=c*m+d*a,f=f*m+g*a,u=u*m+x*a;let _=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=_,c*=_,f*=_,u*=_}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+f*u+l*d-c*h,t[e+1]=l*g+f*h+c*u-a*d,t[e+2]=c*g+f*d+a*h-l*u,t[e+3]=f*g-a*u-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(r/2),u=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"YZX":this._x=h*f*u+c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u-h*d*g;break;case"XZY":this._x=h*f*u-c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u+h*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=n+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-r*a,this._w=o*f-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},gu=class gu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Nh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Nh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),f=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*f,this.y=n+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return cc.copy(this).projectOnVector(t),this.sub(cc)}reflect(t){return this.sub(cc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};gu.prototype.isVector3=!0;var H=gu,cc=new H,Nh=new Wn,xu=class xu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],x=r[0],p=r[3],m=r[6],_=r[1],y=r[4],v=r[7],M=r[2],w=r[5],C=r[8];return s[0]=o*x+a*_+l*M,s[3]=o*p+a*y+l*w,s[6]=o*m+a*v+l*C,s[1]=c*x+f*_+u*M,s[4]=c*p+f*y+u*w,s[7]=c*m+f*v+u*C,s[2]=h*x+d*_+g*M,s[5]=h*p+d*y+g*w,s[8]=h*m+d*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*s*f+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=f*o-a*c,h=a*l-f*s,d=c*s-o*l,g=e*u+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(r*c-f*n)*x,t[2]=(a*n-r*o)*x,t[3]=h*x,t[4]=(f*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(uc.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(uc.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(uc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};xu.prototype.isMatrix3=!0;var $t=xu,uc=new $t,Uh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y0(){let i={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[vs]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Uh,fromXYZ:Oh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var oe=y0();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wr,ha=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wr===void 0&&(wr=zr("canvas")),wr.width=t.width,wr.height=t.height;let r=wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},M0=0,Gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:M0++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(hc(r[o].image)):s.push(hc(r[o]))}else s=hc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function hc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ha.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var S0=0,fc=new H,sn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xn,r=xn,s=Ke,o=Ni,a=Sn,l=_n,c=i.DEFAULT_ANISOTROPY,f=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Zs(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ee(0,0),this.repeat=new ee(1,1),this.center=new ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fc).x}get height(){return this.source.getSize(fc).y}get depth(){return this.source.getSize(fc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case la:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case la:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Qc;sn.DEFAULT_ANISOTROPY=1;var bu=class bu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(m+1)/2,w=(f+h)/4,C=(u+x)/4,b=(g+p)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=C/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=C/s,r=b/s),this.set(n,r,s,e),this}let _=Math.sqrt((p-g)*(p-g)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(u-x)/_,this.z=(h-f)/_,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};bu.prototype.isVector4=!0;var Pe=bu,fa=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new sn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Gr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends fa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ss=class extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var da=class extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Da=class Da{constructor(t,e,n,r,s,o,a,l,c,f,u,h,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,f,u,h,d,g,x,p)}set(t,e,n,r,s,o,a,l,c,f,u,h,d,g,x,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=u,m[14]=h,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Da().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Tr.setFromMatrixColumn(t,0).length(),s=1/Tr.setFromMatrixColumn(t,1).length(),o=1/Tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let h=o*f,d=o*u,g=a*f,x=a*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*f,d=l*u,g=c*f,x=c*u;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*f,d=l*u,g=c*f,x=c*u;e[0]=h-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*f,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*f,d=o*u,g=a*f,x=a*u;e[0]=l*f,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*u,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*f,e[4]=x-h*u,e[8]=g*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*u+g,e[10]=h-x*u}else if(t.order==="XZY"){let h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+x,e[5]=o*f,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*f,e[10]=x*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(w0,t,T0)}lookAt(t,e,n){let r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),vi.crossVectors(n,mn),vi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),vi.crossVectors(n,mn)),vi.normalize(),Ao.crossVectors(mn,vi),r[0]=vi.x,r[4]=Ao.x,r[8]=mn.x,r[1]=vi.y,r[5]=Ao.y,r[9]=mn.y,r[2]=vi.z,r[6]=Ao.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],x=n[6],p=n[10],m=n[14],_=n[3],y=n[7],v=n[11],M=n[15],w=r[0],C=r[4],b=r[8],S=r[12],E=r[1],R=r[5],T=r[9],I=r[13],A=r[2],P=r[6],D=r[10],L=r[14],O=r[3],B=r[7],k=r[11],z=r[15];return s[0]=o*w+a*E+l*A+c*O,s[4]=o*C+a*R+l*P+c*B,s[8]=o*b+a*T+l*D+c*k,s[12]=o*S+a*I+l*L+c*z,s[1]=f*w+u*E+h*A+d*O,s[5]=f*C+u*R+h*P+d*B,s[9]=f*b+u*T+h*D+d*k,s[13]=f*S+u*I+h*L+d*z,s[2]=g*w+x*E+p*A+m*O,s[6]=g*C+x*R+p*P+m*B,s[10]=g*b+x*T+p*D+m*k,s[14]=g*S+x*I+p*L+m*z,s[3]=_*w+y*E+v*A+M*O,s[7]=_*C+y*R+v*P+M*B,s[11]=_*b+y*T+v*D+M*k,s[15]=_*S+y*I+v*L+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],d=t[14],g=t[3],x=t[7],p=t[11],m=t[15],_=l*d-c*h,y=a*d-c*u,v=a*h-l*u,M=o*d-c*f,w=o*h-l*f,C=o*u-a*f;return e*(x*_-p*y+m*v)-n*(g*_-p*M+m*w)+r*(g*y-x*M+m*C)-s*(g*v-x*w+p*C)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(s*f-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],d=t[11],g=t[12],x=t[13],p=t[14],m=t[15],_=e*a-n*o,y=e*l-r*o,v=e*c-s*o,M=n*l-r*a,w=n*c-s*a,C=r*c-s*l,b=f*x-u*g,S=f*p-h*g,E=f*m-d*g,R=u*p-h*x,T=u*m-d*x,I=h*m-d*p,A=_*I-y*T+v*R+M*E-w*S+C*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=(a*I-l*T+c*R)*P,t[1]=(r*T-n*I-s*R)*P,t[2]=(x*C-p*w+m*M)*P,t[3]=(h*w-u*C-d*M)*P,t[4]=(l*E-o*I-c*S)*P,t[5]=(e*I-r*E+s*S)*P,t[6]=(p*v-g*C-m*y)*P,t[7]=(f*C-h*v+d*y)*P,t[8]=(o*T-a*E+c*b)*P,t[9]=(n*E-e*T-s*b)*P,t[10]=(g*w-x*v+m*_)*P,t[11]=(u*v-f*w-d*_)*P,t[12]=(a*S-o*R-l*b)*P,t[13]=(e*R-n*S+r*b)*P,t[14]=(x*y-g*M-p*_)*P,t[15]=(f*M-u*y+h*_)*P,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+n,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,f=o+o,u=a+a,h=s*c,d=s*f,g=s*u,x=o*f,p=o*u,m=a*u,_=l*c,y=l*f,v=l*u,M=n.x,w=n.y,C=n.z;return r[0]=(1-(x+m))*M,r[1]=(d+v)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+m))*w,r[6]=(p+_)*w,r[7]=0,r[8]=(g+y)*C,r[9]=(p-_)*C,r[10]=(1-(h+x))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Tr.set(r[0],r[1],r[2]).length(),a=Tr.set(r[4],r[5],r[6]).length(),l=Tr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),An.copy(this);let c=1/o,f=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,f=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===In)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ms)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,f=2/(e-t),u=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===In)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ms)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Da.prototype.isMatrix4=!0;var Te=Da,Tr=new H,An=new Te,w0=new H(0,0,0),T0=new H(1,1,1),vi=new H,Ao=new H,mn=new H,Bh=new Te,kh=new Wn,Ei=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kh.setFromEuler(this),this.setFromQuaternion(kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ei.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},E0=0,zh=new H,Er=new Wn,ei=new Te,Ro=new H,ds=new H,A0=new H,R0=new Wn,Vh=new H(1,0,0),Gh=new H(0,1,0),Hh=new H(0,0,1),Wh={type:"added"},C0={type:"removed"},Ar={type:"childadded",child:null},dc={type:"childremoved",child:null},pn=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Ei,n=new Wn,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new $t}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Vh,t)}rotateY(t){return this.rotateOnAxis(Gh,t)}rotateZ(t){return this.rotateOnAxis(Hh,t)}translateOnAxis(t,e){return zh.copy(t).applyQuaternion(this.quaternion),this.position.add(zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vh,t)}translateY(t){return this.translateOnAxis(Gh,t)}translateZ(t){return this.translateOnAxis(Hh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ro.copy(t):Ro.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ds,Ro,this.up):ei.lookAt(Ro,ds,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(ei),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Wh),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(C0),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Wh),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,A0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,R0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),u=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new H(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},P0={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let p=e.getJointPose(x,n),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(P0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Kf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Co={h:0,s:0,l:0};function pc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var K=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=oe.workingColorSpace){if(t=v0(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=pc(o,s,t+1/3),this.g=pc(o,s,t),this.b=pc(o,s,t-1/3)}return oe.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Kf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return oe.workingToColorSpace(nn.copy(this),t),Math.round(le(nn.r*255,0,255))*65536+Math.round(le(nn.g*255,0,255))*256+Math.round(le(nn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(nn.copy(this),e);let n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=De){oe.workingToColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,r=nn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Co);let n=lc(yi.h,Co.h,e),r=lc(yi.s,Co.s,e),s=lc(yi.l,Co.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new K;K.NAMES=Kf;var ws=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ai=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ei,this.environmentIntensity=1,this.environmentRotation=new Ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new H,ni=new H,mc=new H,ii=new H,Rr=new H,Cr=new H,Xh=new H,gc=new H,xc=new H,bc=new H,_c=new Pe,vc=new Pe,yc=new Pe,Ti=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ni.subVectors(n,e),mc.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ni),l=Rn.dot(mc),c=ni.dot(ni),f=ni.dot(mc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,d=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return _c.setScalar(0),vc.setScalar(0),yc.setScalar(0),_c.fromBufferAttribute(t,e),vc.fromBufferAttribute(t,n),yc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(_c,s.x),o.addScaledVector(vc,s.y),o.addScaledVector(yc,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ni.subVectors(t,e),Rn.cross(ni).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Rr.subVectors(r,n),Cr.subVectors(s,n),gc.subVectors(t,n);let l=Rr.dot(gc),c=Cr.dot(gc);if(l<=0&&c<=0)return e.copy(n);xc.subVectors(t,r);let f=Rr.dot(xc),u=Cr.dot(xc);if(f>=0&&u<=f)return e.copy(r);let h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Rr,o);bc.subVectors(t,s);let d=Rr.dot(bc),g=Cr.dot(bc);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Cr,a);let p=f*g-d*u;if(p<=0&&u-f>=0&&d-g>=0)return Xh.subVectors(s,r),a=(u-f)/(u-f+(d-g)),e.copy(r).addScaledVector(Xh,a);let m=1/(p+x+h);return o=x*m,a=h*m,e.copy(n).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Po.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Po.copy(n.boundingBox)),Po.applyMatrix4(t.matrixWorld),this.union(Po)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Io.subVectors(this.max,ps),Pr.subVectors(t.a,ps),Ir.subVectors(t.b,ps),Lr.subVectors(t.c,ps),Mi.subVectors(Ir,Pr),Si.subVectors(Lr,Ir),$i.subVectors(Pr,Lr);let e=[0,-Mi.z,Mi.y,0,-Si.z,Si.y,0,-$i.z,$i.y,Mi.z,0,-Mi.x,Si.z,0,-Si.x,$i.z,0,-$i.x,-Mi.y,Mi.x,0,-Si.y,Si.x,0,-$i.y,$i.x,0];return!Mc(e,Pr,Ir,Lr,Io)||(e=[1,0,0,0,1,0,0,0,1],!Mc(e,Pr,Ir,Lr,Io))?!1:(Lo.crossVectors(Mi,Si),e=[Lo.x,Lo.y,Lo.z],Mc(e,Pr,Ir,Lr,Io))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,Po=new hn,Pr=new H,Ir=new H,Lr=new H,Mi=new H,Si=new H,$i=new H,ps=new H,Io=new H,Lo=new H,Zi=new H;function Mc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);let a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),f=n.dot(Zi);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Be=new H,Fo=new ee,I0=0,Mn=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Xf,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fo.fromBufferAttribute(this,e),Fo.applyMatrix3(t),this.setXY(e,Fo.x,Fo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},L0=new hn,ms=new H,Sc=new H,Ri=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):L0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ms,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(Sc)),this.expandByPoint(ms.copy(t.center).sub(Sc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},F0=0,yn=new Te,wc=new pn,Fr=new H,gn=new hn,gs=new hn,We=new H,Kt=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(b0(t)?tr:Ts)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return wc.lookAt(t),wc.updateMatrix(),this.applyMatrix4(wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,gs.min),gn.expandByPoint(We),We.addVectors(gn.max,gs.max),gn.expandByPoint(We)):(gn.expandByPoint(gs.min),gn.expandByPoint(gs.max))}gn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)We.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(t,c),We.add(Fr)),r=Math.max(r,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new H,l[b]=new H;let c=new H,f=new H,u=new H,h=new ee,d=new ee,g=new ee,x=new H,p=new H;function m(b,S,E){c.fromBufferAttribute(n,b),f.fromBufferAttribute(n,S),u.fromBufferAttribute(n,E),h.fromBufferAttribute(s,b),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,E),f.sub(c),u.sub(c),d.sub(h),g.sub(h);let R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(R),p.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(R),a[b].add(x),a[S].add(x),a[E].add(x),l[b].add(p),l[S].add(p),l[E].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let b=0,S=_.length;b<S;++b){let E=_[b],R=E.start,T=E.count;for(let I=R,A=R+T;I<A;I+=3)m(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new H,v=new H,M=new H,w=new H;function C(b){M.fromBufferAttribute(r,b),w.copy(M);let S=a[b];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),v.crossVectors(w,S);let R=v.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,R)}for(let b=0,S=_.length;b<S;++b){let E=_[b],R=E.start,T=E.count;for(let I=R,A=R+T;I<A;I+=3)C(t.getX(I+0)),C(t.getX(I+1)),C(t.getX(I+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,f=new H,u=new H;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),p=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,p),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f),d=0,g=0;for(let x=0,p=l.length;x<p;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*f;for(let m=0;m<f;m++)h[g++]=c[d++]}return new Mn(h,f,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){let h=c[f],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];f.push(d.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let f=r[c];this.setAttribute(c,f.clone(e))}let s=t.morphAttributes;for(let c in s){let f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Tc=new H,D0=new H,N0=new $t,Pn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Tc.subVectors(n,e).cross(D0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Tc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||N0.getNormalMatrix(t),r=this.coplanarPoint(Tc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},U0=0,ai=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U0++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Fi,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hc,this.blendDst=Wc,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qo,this.stencilZFail=Qo,this.stencilZPass=Qo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new K().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ee().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ee().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var si=new H,Ec=new H,Do=new H,No=new H,er=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Ec.copy(t).add(e).multiplyScalar(.5),Do.copy(e).sub(t).normalize(),No.copy(this.origin).sub(Ec);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Do),a=No.dot(this.direction),l=-No.dot(Do),c=No.lengthSq(),f=Math.abs(1-o*o),u,h,d,g;if(f>0)if(u=o*l-a,h=o*a-l,g=s*f,u>=0)if(h>=-g)if(h<=g){let x=1/f;u*=x,h*=x,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ec).addScaledVector(Do,h),d}intersectSphere(t,e){if(t.radius<0)return null;si.subVectors(t.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,u=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,p=e.z-o.z,m=n.x-o.x,_=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(f),C,b,S,E,R,T,I,A,P,D,L,O;if(v>=M&&v>=w?(S=l,T=u,P=g,O=m,l>=0?(C=c,b=f,E=h,R=d,I=x,A=p,D=_,L=y):(C=f,b=c,E=d,R=h,I=p,A=x,D=y,L=_)):M>=w?(S=c,T=h,P=x,O=_,c>=0?(C=f,b=l,E=d,R=u,I=p,A=g,D=y,L=m):(C=l,b=f,E=u,R=d,I=g,A=p,D=m,L=y)):(S=f,T=d,P=p,O=y,f>=0?(C=l,b=c,E=u,R=h,I=g,A=x,D=m,L=_):(C=c,b=l,E=h,R=u,I=x,A=g,D=_,L=m)),S===0)return null;let B=C/S,k=b/S,z=1/S,et=E-B*T,G=R-k*T,J=I-B*P,it=A-k*P,ht=D-B*O,Y=L-k*O,$=ht*it-Y*J,at=et*Y-G*ht,ct=J*G-it*et;if(r){if($<0||at<0||ct<0)return null}else if(($<0||at<0||ct<0)&&($>0||at>0||ct>0))return null;let ut=$+at+ct;if(ut===0)return null;let pt=z*($*T+at*P+ct*O);return(ut>0?pt<0:pt>0)?null:this.at(pt/ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},se=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ei,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Yh=new Te,Ki=new er,Uo=new Ri,qh=new H,Oo=new H,Bo=new H,ko=new H,Ac=new H,zo=new H,$h=new H,Vo=new H,Vt=class extends pn{constructor(t=new Kt,e=new se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){zo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],u=s[l];f!==0&&(Ac.fromBufferAttribute(u,t),o?zo.addScaledVector(Ac,f):zo.addScaledVector(Ac.sub(e),f))}e.add(zo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Ki.copy(t.ray).recast(t.near),!(Uo.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Uo,qh)===null||Ki.origin.distanceToSquared(qh)>(t.far-t.near)**2))&&(Yh.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(Yh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),y=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,M=y;v<M;v+=3){let w=a.getX(v),C=a.getX(v+1),b=a.getX(v+2);r=Go(this,m,t,n,c,f,u,w,C,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=a.getX(p),y=a.getX(p+1),v=a.getX(p+2);r=Go(this,o,t,n,c,f,u,_,y,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let p=h[g],m=o[p.materialIndex],_=Math.max(p.start,d.start),y=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let v=_,M=y;v<M;v+=3){let w=v,C=v+1,b=v+2;r=Go(this,m,t,n,c,f,u,w,C,b),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){let _=p,y=p+1,v=p+2;r=Go(this,o,t,n,c,f,u,_,y,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}};function O0(i,t,e,n,r,s,o,a){let l;if(t.side===je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Yn,a),l===null)return null;Vo.copy(a),Vo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Vo);return c<e.near||c>e.far?null:{distance:c,point:Vo.clone(),object:i}}function Go(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Oo),i.getVertexPosition(l,Bo),i.getVertexPosition(c,ko);let f=O0(i,t,e,n,Oo,Bo,ko,$h);if(f){let u=new H;Ti.getBarycoord($h,Oo,Bo,ko,u),r&&(f.uv=Ti.getInterpolatedAttribute(r,a,l,c,u,new ee)),s&&(f.uv1=Ti.getInterpolatedAttribute(s,a,l,c,u,new ee)),o&&(f.normal=Ti.getInterpolatedAttribute(o,a,l,c,u,new H),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new H,materialIndex:0};Ti.getNormal(Oo,Bo,ko,h.normal),f.face=h,f.barycoord=u}return f}var pa=class extends sn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Xe,f=Xe,u,h){super(null,o,a,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=new Ri,B0=new ee(.5,.5),Ho=new H,Es=class{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],d=s[7],g=s[8],x=s[9],p=s[10],m=s[11],_=s[12],y=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-f,m-g,M-_).normalize(),r[1].setComponents(c+o,d+f,m+g,M+_).normalize(),r[2].setComponents(c+a,d+u,m+x,M+y).normalize(),r[3].setComponents(c-a,d-u,m-x,M-y).normalize(),n)r[4].setComponents(l,h,p,v).normalize(),r[5].setComponents(c-l,d-h,m-p,M-v).normalize();else if(r[4].setComponents(c-l,d-h,m-p,M-v).normalize(),e===In)r[5].setComponents(c+l,d+h,m+p,M+v).normalize();else if(e===Ms)r[5].setComponents(l,h,p,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);let e=B0.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Ho.x=r.normal.x>0?t.max.x:t.min.x,Ho.y=r.normal.y>0?t.max.y:t.min.y,Ho.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Je=class extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ma=new H,ga=new H,Zh=new Te,xs=new er,Wo=new Ri,Rc=new H,Kh=new H,xa=class extends pn{constructor(t=new Kt,e=new Je){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ma.fromBufferAttribute(e,r-1),ga.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ma.distanceTo(ga);t.setAttribute("lineDistance",new Gt(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),Wo.radius+=s,t.ray.intersectsSphere(Wo)===!1)return;Zh.copy(r).invert(),xs.copy(t.ray).applyMatrix4(Zh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=f.getX(x),_=f.getX(x+1),y=Xo(this,t,xs,l,m,_,x);y&&e.push(y)}if(this.isLineLoop){let x=f.getX(g-1),p=f.getX(d),m=Xo(this,t,xs,l,x,p,g-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,p=g-1;x<p;x+=c){let m=Xo(this,t,xs,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=Xo(this,t,xs,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Xo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(ma.fromBufferAttribute(a,r),ga.fromBufferAttribute(a,s),e.distanceSqToSegment(ma,ga,Rc,Kh)>n)return;Rc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Rc);if(!(c<t.near||c>t.far))return{distance:c,point:Kh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Jh=new H,jh=new H,Ye=class extends xa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)Jh.fromBufferAttribute(e,r),jh.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Jh.distanceTo(jh);t.setAttribute("lineDistance",new Gt(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qh=new Te,Dc=new er,Yo=new Ri,qo=new H,Xr=class extends pn{constructor(t=new Kt,e=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yo.copy(n.boundingSphere),Yo.applyMatrix4(r),Yo.radius+=s,t.ray.intersectsSphere(Yo)===!1)return;Qh.copy(r).invert(),Dc.copy(t.ray).applyMatrix4(Qh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let p=c.getX(g);qo.fromBufferAttribute(u,p),tf(qo,p,l,r,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,x=d;g<x;g++)qo.fromBufferAttribute(u,g),tf(qo,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function tf(i,t,e,n,r,s,o){let a=Dc.distanceSqToPoint(i);if(a<e){let l=new H;Dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var As=class extends sn{constructor(t=[],e=Di,n,r,s,o,a,l,c,f){super(t,e,n,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends sn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ci=class extends sn{constructor(t,e,n=Fn,r,s,o,a=Xe,l=Xe,c,f=Gn,u=1){if(f!==Gn&&f!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,r,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ba=class extends Ci{constructor(t,e=Fn,n=Di,r,s,o=Xe,a=Xe,l,c=Gn){let f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rs=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yr=class i extends Kt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],u=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(u,2));function g(x,p,m,_,y,v,M,w,C,b,S){let E=v/C,R=M/b,T=v/2,I=M/2,A=w/2,P=C+1,D=b+1,L=0,O=0,B=new H;for(let k=0;k<D;k++){let z=k*R-I;for(let et=0;et<P;et++){let G=et*E-T;B[x]=G*_,B[p]=z*y,B[m]=A,c.push(B.x,B.y,B.z),B[x]=0,B[p]=0,B[m]=w>0?1:-1,f.push(B.x,B.y,B.z),u.push(et/C),u.push(1-k/b),L+=1}}for(let k=0;k<b;k++)for(let z=0;z<C;z++){let et=h+z+P*k,G=h+z+P*(k+1),J=h+(z+1)+P*(k+1),it=h+(z+1)+P*k;l.push(et,G,it),l.push(G,J,it),O+=6}a.addGroup(d,O,S),d+=O,h+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cs=class i extends Kt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new H,f=new ee;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/t+1)/2,f.y=(o[h+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function k0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Jf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=W0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let f=a,u=l;for(let h=e;h<r;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>f&&(f=d),g>u&&(u=g)}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return Ps(s,o,e,a,l,c,0),o}function Jf(i,t,e,n,r){let s;if(r===eg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=ef(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=ef(o/n|0,i[o],i[o+1],s);return s&&qr(s,s.next)&&(Ls(s),s=s.next),s}function ir(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qr(e,e.next)||Ce(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Z0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?V0(i,n,r,s):z0(i)){t.push(l.i,i.i,c.i),Ls(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=G0(ir(i),t),Ps(i,t,e,n,r,s,2)):o===2&&H0(i,t,e,n,r,s):Ps(ir(i),t,e,n,r,s,1);break}}}function z0(i){let t=i.prev,e=i,n=i.next;if(Ce(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=d&&bs(r,a,s,l,o,c,g.x,g.y)&&Ce(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ce(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,f=r.y,u=s.y,h=o.y,d=Math.min(a,l,c),g=Math.min(f,u,h),x=Math.max(a,l,c),p=Math.max(f,u,h),m=Nc(d,g,t,e,n),_=Nc(x,p,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=m&&v&&v.z<=_;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&bs(a,f,l,u,c,h,y.x,y.y)&&Ce(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==r&&v!==o&&bs(a,f,l,u,c,h,v.x,v.y)&&Ce(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=m;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=p&&y!==r&&y!==o&&bs(a,f,l,u,c,h,y.x,y.y)&&Ce(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=_;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=p&&v!==r&&v!==o&&bs(a,f,l,u,c,h,v.x,v.y)&&Ce(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function G0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!qr(n,r)&&Qf(n,e,e.next,r)&&Is(n,r)&&Is(r,n)&&(t.push(n.i,e.i,r.i),Ls(e),Ls(e.next),e=i=r),e=e.next}while(e!==i);return ir(e)}function H0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j0(o,a)){let l=td(o,a);o=ir(o,o.next),l=ir(l,l.next),Ps(o,t,e,n,r,s,0),Ps(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function W0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Jf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(J0(c))}r.sort(X0);for(let s=0;s<r.length;s++)e=Y0(r[s],e);return e}function X0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Y0(i,t){let e=q0(i,t);if(!e)return t;let n=td(e,i);return ir(n,n.next),ir(e,e.next)}function q0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(qr(i,e))return e;do{if(qr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&jf(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Is(e,i)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&$0(o,e)))&&(o=e,f=u)}e=e.next}while(e!==a);return o}function $0(i,t){return Ce(i.prev,i,t.prev)<0&&Ce(t.next,i,i.next)<0}function Z0(i,t,e,n){let r=i;do r.z===0&&(r.z=Nc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,K0(r)}function K0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Nc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function J0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function jf(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function bs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&jf(i,t,e,n,r,s,o,a)}function j0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Q0(i,t)&&(Is(i,t)&&Is(t,i)&&tg(i,t)&&(Ce(i.prev,i,t.prev)||Ce(i,t.prev,t))||qr(i,t)&&Ce(i.prev,i,i.next)>0&&Ce(t.prev,t,t.next)>0)}function Ce(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qr(i,t){return i.x===t.x&&i.y===t.y}function Qf(i,t,e,n){let r=Zo(Ce(i,t,e)),s=Zo(Ce(i,t,n)),o=Zo(Ce(e,n,i)),a=Zo(Ce(e,n,t));return!!(r!==s&&o!==a||r===0&&$o(i,e,t)||s===0&&$o(i,n,t)||o===0&&$o(e,i,n)||a===0&&$o(e,t,n))}function $o(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Zo(i){return i>0?1:i<0?-1:0}function Q0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Qf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return Ce(i.prev,i,i.next)<0?Ce(i,t,i.next)>=0&&Ce(i,i.prev,t)>=0:Ce(i,t,i.prev)<0||Ce(i,i.next,t)<0}function tg(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function td(i,t){let e=Uc(i.i,i.x,i.y),n=Uc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ef(i,t,e,n){let r=Uc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Uc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function eg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Oc=class{static triangulate(t,e,n=2){return k0(t,e,n)}},Fs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];nf(t),rf(n,t);let o=t.length;e.forEach(nf);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,rf(n,e[l]);let a=Oc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function nf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function rf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ci=class i extends Kt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,f=l+1,u=t/a,h=e/l,d=[],g=[],x=[],p=[];for(let m=0;m<f;m++){let _=m*h-o;for(let y=0;y<c;y++){let v=y*u-s;g.push(v,-_,0),x.push(0,0,1),p.push(y/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<a;_++){let y=_+c*m,v=_+c*(m+1),M=_+1+c*(m+1),w=_+1+c*m;d.push(y,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ds=class i extends Kt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],f=[],u=t,h=(e-t)/r,d=new H,g=new ee;for(let x=0;x<=r;x++){for(let p=0;p<=n;p++){let m=s+p/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}u+=h}for(let x=0;x<r;x++){let p=x*(n+1);for(let m=0;m<n;m++){let _=m+p,y=_,v=_+n+1,M=_+n+2,w=_+1;a.push(y,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function or(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(sf(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(sf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=or(i[e]);for(let r in n)t[r]=n[r]}return t}function sf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function ng(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var ed={clone:or,merge:ln},ig=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ig,this.fragmentShader=rg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(r.value);break;case"v2":this.uniforms[n].value=new ee().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Pe().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},_a=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var va=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ya=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Dr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Cc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Pi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Ma=class extends Pi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ic,endingEnd:Ic}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lc:s=t,a=2*e-n;break;case Fc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lc:o=t,l=2*n-e;break;case Fc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),x=g*g,p=x*g,m=-h*p+2*h*x-h*g,_=(1+h)*p+(-1.5-2*h)*x+(-.5+h)*g+1,y=(-1-d)*p+(1.5+d)*x+.5*g,v=d*p-d*x;for(let M=0;M!==a;++M)s[M]=m*o[f+M]+_*o[c+M]+y*o[l+M]+v*o[u+M];return s}},Sa=class extends Pi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(r-e),u=1-f;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*f;return s}},wa=class extends Pi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ta=class extends Pi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let g=(n-e)/(r-e),x=1-g;for(let p=0;p!==a;++p)s[p]=o[c+p]*x+o[l+p]*g;return s}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],p=o[l+g],m=d*h+g*2,_=u[m],y=u[m+1],v=t*h+g*2,M=f[v],w=f[v+1],C=og(n,e,_,M,r);s[g]=nd(C,x,y,w,p)}return s}};function nd(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function sg(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function og(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=nd(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=sg(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var bn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Cc(t.settings)&&(n.settings={inTangents:Dr(t.settings.inTangents,Array),outTangents:Dr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ta(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case _s:e=this.InterpolantFactoryMethodDiscrete;break;case ca:e=this.InterpolantFactoryMethodLinear;break;case jo:e=this.InterpolantFactoryMethodSmooth;break;case Pc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return _s;case this.InterpolantFactoryMethodLinear:return ca;case this.InterpolantFactoryMethodSmooth:return jo;case this.InterpolantFactoryMethodBezier:return Pc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Cc(this.settings)&&(of(this.settings.inTangents,t),of(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&_0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===jo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[h+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Cc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function of(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=ca;var Ii=class extends bn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=_s;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ea=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Ea.prototype.ValueTypeName="color";var Aa=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Aa.prototype.ValueTypeName="number";var Ra=class extends Pi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let f=c+a;c!==f;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ns=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ra(this.times,this.values,this.getValueSize(),t)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends bn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=_s;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Ca=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Ca.prototype.ValueTypeName="vector";var ta={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(af(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!af(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function af(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Pa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},id=new Pa,$r=class{constructor(t){this.manager=t!==void 0?t:id,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=new WeakMap,Ia=class extends $r{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ta.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Nr.get(o);u===void 0&&(u=[],Nr.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=zr("img");function l(){f(),e&&e(this);let u=Nr.get(this)||[];for(let h=0;h<u.length;h++){let d=u[h];d.onLoad&&d.onLoad(this)}Nr.delete(this),s.manager.itemEnd(t)}function c(u){f(),r&&r(u),ta.remove(`image:${t}`);let h=Nr.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(u)}Nr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ta.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Us=class extends $r{constructor(t){super(t)}load(t,e,n,r){let s=new sn,o=new Ia(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ko=new H,Jo=new Wn,Vn=new H,Os=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ko,Jo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ko,Jo,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ko,Jo,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},wi=new H,lf=new ee,cf=new ee,rn=class extends Os{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ua*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ac*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ua*2*Math.atan(Math.tan(ac*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(wi.x,wi.y).multiplyScalar(-t/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-t/wi.z)}getViewSize(t,e){return this.getViewBounds(t,lf,cf),e.subVectors(cf,lf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ac*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xn=class extends Os{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ur=-90,Or=1,La=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(Ur,Or,t,e);r.layers=this.layers,this.add(r);let s=new rn(Ur,Or,t,e);s.layers=this.layers,this.add(s);let o=new rn(Ur,Or,t,e);o.layers=this.layers,this.add(o);let a=new rn(Ur,Or,t,e);a.layers=this.layers,this.add(a);let l=new rn(Ur,Or,t,e);l.layers=this.layers,this.add(l);let c=new rn(Ur,Or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fa=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var fu="\\[\\]\\.:\\/",ag=new RegExp("["+fu+"]","g"),du="[^"+fu+"]",lg="[^"+fu.replace("\\.","")+"]",cg=/((?:WC+[\/:])*)/.source.replace("WC",du),ug=/(WCOD+)?/.source.replace("WCOD",lg),hg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",du),fg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",du),dg=new RegExp("^"+cg+ug+hg+fg+"$"),pg=["material","materials","bones","map"],Bc=class{constructor(t,e,n){let r=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(ag,"")}static parseTrackName(t){let e=dg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);pg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Bc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var wS=new Float32Array(1);var uf=new Te,Bs=class{constructor(t,e,n=0,r=1/0){this.ray=new er(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return uf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uf),this}intersectObject(t,e=!0,n=[]){return kc(t,this,n,e),n.sort(hf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)kc(t[r],this,n,e);return n.sort(hf),n}};function hf(i,t){return i.distance-t.distance}function kc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)kc(s[o],t,e,!0)}}var _u=class _u{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};_u.prototype.isMatrix2=!0;var zc=_u;function pu(i,t,e,n){let r=mg(n);switch(e){case ru:return i*t;case ou:return i*t/r.components*r.byteLength;case Va:return i*t/r.components*r.byteLength;case Oi:return i*t*2/r.components*r.byteLength;case Ga:return i*t*2/r.components*r.byteLength;case su:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Ha:return i*t*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:case qa:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case Ya:return Math.max(i,8)*Math.max(t,8)/2;case $a:case Za:case Ja:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ka:case qs:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case pl:case ml:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case _l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mg(i){switch(i){case _n:case tu:return{byteLength:1,components:1};case Kr:case eu:case Nn:return{byteLength:2,components:1};case ka:case za:return{byteLength:2,components:4};case Fn:case Ba:case Dn:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Td(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function xg(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let f=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){let g=u[h],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_g=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,vg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Tg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ag=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ig=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Dg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Bg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Hg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Wg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$g="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Kg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jg=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Qg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ex=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ox=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ax=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,ux=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,px=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,gx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_x=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Mx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ex=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ax=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Rx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ix=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ux=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ox=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Vx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Gx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,$x=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,eb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ib=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,rb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ob=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ab=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ub=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,hb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,db=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,pb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,bb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_b=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Eb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ab=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ib=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Db=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Nb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ub=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ob=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$b=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Kb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,te={alphahash_fragment:bg,alphahash_pars_fragment:_g,alphamap_fragment:vg,alphamap_pars_fragment:yg,alphatest_fragment:Mg,alphatest_pars_fragment:Sg,aomap_fragment:wg,aomap_pars_fragment:Tg,batching_pars_vertex:Eg,batching_vertex:Ag,begin_vertex:Rg,beginnormal_vertex:Cg,bsdfs:Pg,iridescence_fragment:Ig,bumpmap_pars_fragment:Lg,clipping_planes_fragment:Fg,clipping_planes_pars_fragment:Dg,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:Ug,color_fragment:Og,color_pars_fragment:Bg,color_pars_vertex:kg,color_vertex:zg,common:Vg,cube_uv_reflection_fragment:Gg,defaultnormal_vertex:Hg,displacementmap_pars_vertex:Wg,displacementmap_vertex:Xg,emissivemap_fragment:Yg,emissivemap_pars_fragment:qg,colorspace_fragment:$g,colorspace_pars_fragment:Zg,envmap_fragment:Kg,envmap_common_pars_fragment:Jg,envmap_pars_fragment:jg,envmap_pars_vertex:Qg,envmap_physical_pars_fragment:ux,envmap_vertex:tx,fog_vertex:ex,fog_pars_vertex:nx,fog_fragment:ix,fog_pars_fragment:rx,gradientmap_pars_fragment:sx,lightmap_pars_fragment:ox,lights_lambert_fragment:ax,lights_lambert_pars_fragment:lx,lights_pars_begin:cx,lights_toon_fragment:hx,lights_toon_pars_fragment:fx,lights_phong_fragment:dx,lights_phong_pars_fragment:px,lights_physical_fragment:mx,lights_physical_pars_fragment:gx,lights_fragment_begin:xx,lights_fragment_maps:bx,lights_fragment_end:_x,lightprobes_pars_fragment:vx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:Mx,logdepthbuf_pars_vertex:Sx,logdepthbuf_vertex:wx,map_fragment:Tx,map_pars_fragment:Ex,map_particle_fragment:Ax,map_particle_pars_fragment:Rx,metalnessmap_fragment:Cx,metalnessmap_pars_fragment:Px,morphinstance_vertex:Ix,morphcolor_vertex:Lx,morphnormal_vertex:Fx,morphtarget_pars_vertex:Dx,morphtarget_vertex:Nx,normal_fragment_begin:Ux,normal_fragment_maps:Ox,normal_pars_fragment:Bx,normal_pars_vertex:kx,normal_vertex:zx,normalmap_pars_fragment:Vx,clearcoat_normal_fragment_begin:Gx,clearcoat_normal_fragment_maps:Hx,clearcoat_pars_fragment:Wx,iridescence_pars_fragment:Xx,opaque_fragment:Yx,packing:qx,premultiplied_alpha_fragment:$x,project_vertex:Zx,dithering_fragment:Kx,dithering_pars_fragment:Jx,roughnessmap_fragment:jx,roughnessmap_pars_fragment:Qx,shadowmap_pars_fragment:tb,shadowmap_pars_vertex:eb,shadowmap_vertex:nb,shadowmask_pars_fragment:ib,skinbase_vertex:rb,skinning_pars_vertex:sb,skinning_vertex:ob,skinnormal_vertex:ab,specularmap_fragment:lb,specularmap_pars_fragment:cb,tonemapping_fragment:ub,tonemapping_pars_fragment:hb,transmission_fragment:fb,transmission_pars_fragment:db,uv_pars_fragment:pb,uv_pars_vertex:mb,uv_vertex:gb,worldpos_vertex:xb,background_vert:bb,background_frag:_b,backgroundCube_vert:vb,backgroundCube_frag:yb,cube_vert:Mb,cube_frag:Sb,depth_vert:wb,depth_frag:Tb,distance_vert:Eb,distance_frag:Ab,equirect_vert:Rb,equirect_frag:Cb,linedashed_vert:Pb,linedashed_frag:Ib,meshbasic_vert:Lb,meshbasic_frag:Fb,meshlambert_vert:Db,meshlambert_frag:Nb,meshmatcap_vert:Ub,meshmatcap_frag:Ob,meshnormal_vert:Bb,meshnormal_frag:kb,meshphong_vert:zb,meshphong_frag:Vb,meshphysical_vert:Gb,meshphysical_frag:Hb,meshtoon_vert:Wb,meshtoon_frag:Xb,points_vert:Yb,points_frag:qb,shadow_vert:$b,shadow_frag:Zb,sprite_vert:Kb,sprite_frag:Jb},wt={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Zn={basic:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:ln([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:ln([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new K(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:ln([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:ln([wt.points,wt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:ln([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:ln([wt.common,wt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:ln([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:ln([wt.sprite,wt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:ln([wt.common,wt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:ln([wt.lights,wt.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Zn.physical={uniforms:ln([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var Ml={r:0,b:0,g:0},jb=new Te,Ed=new $t;Ed.set(-1,0,0,0,1,0,0,0,1);function Qb(i,t,e,n,r,s){let o=new K(0),a=r===!0?0:1,l,c,f=null,u=0,h=null;function d(_){let y=_.isScene===!0?_.background:null;if(y&&y.isTexture){let v=_.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(_){let y=!1,v=d(_);v===null?p(o,a):v&&v.isColor&&(p(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(_,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===Vs)?(c===void 0&&(c=new Vt(new Yr(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(jb.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ed),c.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,(f!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Vt(new ci(2,2),new an({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(Ml,hu(i)),e.buffers.color.setClear(Ml.r,Ml.g,Ml.b,y,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),a=y,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(_){a=_,p(o,a)},render:g,addToRenderList:x,dispose:m}}function t_(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(R,T,I,A,P){let D=!1,L=u(R,A,I,T);s!==L&&(s=L,c(s.object)),D=d(R,A,I,P),D&&g(R,A,I,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(R,T,I,A),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(R){return i.bindVertexArray(R)}function f(R){return i.deleteVertexArray(R)}function u(R,T,I,A){let P=A.wireframe===!0,D=n[T.id];D===void 0&&(D={},n[T.id]=D);let L=R.isInstancedMesh===!0?R.id:0,O=D[L];O===void 0&&(O={},D[L]=O);let B=O[I.id];B===void 0&&(B={},O[I.id]=B);let k=B[P];return k===void 0&&(k=h(l()),B[P]=k),k}function h(R){let T=[],I=[],A=[];for(let P=0;P<e;P++)T[P]=0,I[P]=0,A[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:A,object:R,attributes:{},index:null}}function d(R,T,I,A){let P=s.attributes,D=T.attributes,L=0,O=I.getAttributes();for(let B in O)if(O[B].location>=0){let z=P[B],et=D[B];if(et===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(et=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(et=R.instanceColor)),z===void 0||z.attribute!==et||et&&z.data!==et.data)return!0;L++}return s.attributesNum!==L||s.index!==A}function g(R,T,I,A){let P={},D=T.attributes,L=0,O=I.getAttributes();for(let B in O)if(O[B].location>=0){let z=D[B];z===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(z=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(z=R.instanceColor));let et={};et.attribute=z,z&&z.data&&(et.data=z.data),P[B]=et,L++}s.attributes=P,s.attributesNum=L,s.index=A}function x(){let R=s.newAttributes;for(let T=0,I=R.length;T<I;T++)R[T]=0}function p(R){m(R,0)}function m(R,T){let I=s.newAttributes,A=s.enabledAttributes,P=s.attributeDivisors;I[R]=1,A[R]===0&&(i.enableVertexAttribArray(R),A[R]=1),P[R]!==T&&(i.vertexAttribDivisor(R,T),P[R]=T)}function _(){let R=s.newAttributes,T=s.enabledAttributes;for(let I=0,A=T.length;I<A;I++)T[I]!==R[I]&&(i.disableVertexAttribArray(I),T[I]=0)}function y(R,T,I,A,P,D,L){L===!0?i.vertexAttribIPointer(R,T,I,P,D):i.vertexAttribPointer(R,T,I,A,P,D)}function v(R,T,I,A){x();let P=A.attributes,D=I.getAttributes(),L=T.defaultAttributeValues;for(let O in D){let B=D[O];if(B.location>=0){let k=P[O];if(k===void 0&&(O==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),O==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){let z=k.normalized,et=k.itemSize,G=t.get(k);if(G===void 0)continue;let J=G.buffer,it=G.type,ht=G.bytesPerElement,Y=it===i.INT||it===i.UNSIGNED_INT||k.gpuType===Ba;if(k.isInterleavedBufferAttribute){let $=k.data,at=$.stride,ct=k.offset;if($.isInstancedInterleavedBuffer){for(let ut=0;ut<B.locationSize;ut++)m(B.location+ut,$.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ut=0;ut<B.locationSize;ut++)p(B.location+ut);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ut=0;ut<B.locationSize;ut++)y(B.location+ut,et/B.locationSize,it,z,at*ht,(ct+et/B.locationSize*ut)*ht,Y)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)m(B.location+$,k.meshPerAttribute);R.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<B.locationSize;$++)p(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,J);for(let $=0;$<B.locationSize;$++)y(B.location+$,et/B.locationSize,it,z,et*ht,et/B.locationSize*$*ht,Y)}}else if(L!==void 0){let z=L[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(B.location,z);break;case 3:i.vertexAttrib3fv(B.location,z);break;case 4:i.vertexAttrib4fv(B.location,z);break;default:i.vertexAttrib1fv(B.location,z)}}}}_()}function M(){S();for(let R in n){let T=n[R];for(let I in T){let A=T[I];for(let P in A){let D=A[P];for(let L in D)f(D[L].object),delete D[L];delete A[P]}}delete n[R]}}function w(R){if(n[R.id]===void 0)return;let T=n[R.id];for(let I in T){let A=T[I];for(let P in A){let D=A[P];for(let L in D)f(D[L].object),delete D[L];delete A[P]}}delete n[R.id]}function C(R){for(let T in n){let I=n[T];for(let A in I){let P=I[A];if(P[R.id]===void 0)continue;let D=P[R.id];for(let L in D)f(D[L].object),delete D[L];delete P[R.id]}}}function b(R){for(let T in n){let I=n[T],A=R.isInstancedMesh===!0?R.id:0,P=I[A];if(P!==void 0){for(let D in P){let L=P[D];for(let O in L)f(L[O].object),delete L[O];delete P[D]}delete I[A],Object.keys(I).length===0&&delete n[T]}}}function S(){E(),o=!0,s!==r&&(s=r,c(s.object))}function E(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:E,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:p,disableUnusedAttributes:_}}function e_(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function n_(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==Sn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let b=C===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==_n&&C!==Dn&&!b&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:w}}function i_(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||r;return r=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){let g=u.clippingPlanes,x=u.clipIntersection,p=u.clipShadows,m=i.get(u);if(!r||g===null||g.length===0||s&&!p)s?f(null):c();else{let _=s?0:n,y=_*4,v=m.clippingState||null;l.value=v,v=f(g,h,y,d);for(let M=0;M!==y;++M)v[M]=e[M];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,d,g){let x=u!==null?u.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=d+x*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,v=d;y!==x;++y,v+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(p,v),p[v+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,p}}var Qr=4,r_=6,s_=20,o_=256,Ks=new Xn,rd=new K,vu=null,yu=0,Mu=0,Su=!1,a_=new H,ar=new H,wl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=a_}=s;vu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ad(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vu,yu,Mu),this._renderer.xr.enabled=Su,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vu=this._renderer.getRenderTarget(),yu=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),Su=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:Nn,format:Sn,colorSpace:vs,depthBuffer:!1},r=sd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=l_(s)),this._blurMaterial=u_(s,t,e),this._ggxMaterial=c_(s,t,e)}return r}_compileMaterial(t){let e=new Vt(new Kt,t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,n,r,s){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(rd),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Yr,new se({name:"PMREM.Background",side:je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,_=t.background;_?_.isColor&&(p.color.copy(_),t.background=null,m=!0):(p.color.copy(rd),m=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));let M=this._cubeSize;jr(r,v*M,y>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=h,t.background=_}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Di||t.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ad()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ks)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=c*1.25,d=u*h,{_lodMax:g}=this,x=this._sizeLods[n],p=3*x*(n>g-Qr?n-g+Qr:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,jr(s,p,m,3*x,2*x),r.setRenderTarget(s),r.render(a,Ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,jr(t,p,m,3*x,2*x),r.setRenderTarget(t),r.render(a,Ks)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],u=3*f*(r>this._lodMax-Qr?r-this._lodMax+Qr:0),h=4*(this._cubeSize-f);jr(e,u,h,3*f,2*f),o.setRenderTarget(e),o.render(l,Ks)}};function l_(i){let t=[],e=[],n=i,r=i-Qr+1+r_;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,d=3,g=new Float32Array(d*h*u),x=new Float32Array(d*h*u);for(let m=0;m<u;m++){let _=m%3*2/3-1,y=m>2?0:-1,v=[_,y,0,_+2/3,y,0,_+2/3,y+1,0,_,y,0,_+2/3,y+1,0,_,y+1,0];g.set(v,d*h*m);for(let M=0;M<h;M++){let w=f[M*2]*2-1,C=f[M*2+1]*2-1;m===0?ar.set(1,C,w):m===1?ar.set(-w,1,-C):m===2?ar.set(-w,C,1):m===3?ar.set(-1,C,-w):m===4?ar.set(-w,-1,C):ar.set(w,C,-1),ar.toArray(x,(m*h+M)*d)}}let p=new Kt;p.setAttribute("position",new Mn(g,d)),p.setAttribute("outputDirection",new Mn(x,d)),e.push(new Vt(p,null)),n>Qr&&n--}return{lodMeshes:e,sizeLods:t}}function sd(i,t,e){let n=new on(i,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function c_(i,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:o_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function u_(i,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:s_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:El(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function od(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function ad(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:El(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function El(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Tl=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new As(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Yr(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:je,blending:qn});s.uniforms.tEquirect.value=e;let o=new Vt(r,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=Ke),new La(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function h_(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Na||d===Ua)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new Tl(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Na||d===Ua,x=d===Di||d===sr;if(g||x){let p=e.get(h),m=p!==void 0?p.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new wl(i)),p=g?n.fromEquirectangular(h,p):n.fromCubemap(h,p),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),p.texture;if(p!==void 0)return p.texture;{let _=h.image;return g&&_&&_.height>0||x&&_&&l(_)?(n===null&&(n=new wl(i)),p=g?n.fromEquirectangular(h):n.fromCubemap(h),p.texture.pmremVersion=h.pmremVersion,e.set(h,p),h.addEventListener("dispose",f),p.texture):null}}}return h}function a(h,d){return d===Na?h.mapping=Di:d===Ua&&(h.mapping=sr),h}function l(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function f_(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ji("WebGLRenderer: "+n+" extension not supported."),r}}}function d_(i,t,e,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(u){let h=[],d=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(d!==null){let _=d.array;x=d.version;for(let y=0,v=_.length;y<v;y+=3){let M=_[y+0],w=_[y+1],C=_[y+2];h.push(M,w,w,C,C,M)}}else{let _=g.array;x=g.version;for(let y=0,v=_.length/3-1;y<v;y+=3){let M=y+0,w=y+1,C=y+2;h.push(M,w,w,C,C,M)}}let p=new(g.count>=65535?tr:Ts)(h,1);p.version=x;let m=s.get(u);m&&t.remove(m),s.set(u,p)}function f(u){let h=s.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function p_(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){i.drawElements(n,h,s,u*o),e.update(h,n,1)}function c(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,u*o,d),e.update(h,n,d))}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,d);let x=0;for(let p=0;p<d;p++)x+=h[p];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function m_(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function g_(i,t,e){let n=new WeakMap,r=new Pe;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(a);if(h===void 0||h.count!==u){let S=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*u),C=new Ss(w,v,M,u);C.type=Dn,C.needsUpdate=!0;let b=y*4;for(let E=0;E<u;E++){let R=p[E],T=m[E],I=_[E],A=v*M*4*E;for(let P=0;P<R.count;P++){let D=P*b;d===!0&&(r.fromBufferAttribute(R,P),w[A+D+0]=r.x,w[A+D+1]=r.y,w[A+D+2]=r.z,w[A+D+3]=0),g===!0&&(r.fromBufferAttribute(T,P),w[A+D+4]=r.x,w[A+D+5]=r.y,w[A+D+6]=r.z,w[A+D+7]=0),x===!0&&(r.fromBufferAttribute(I,P),w[A+D+8]=r.x,w[A+D+9]=r.y,w[A+D+10]=r.z,w[A+D+11]=I.itemSize===4?r.w:1)}}h={count:u,texture:C,size:new ee(v,M)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function x_(i,t,e,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f&&(t.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return h}function a(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var b_={[Yc]:"LINEAR_TONE_MAPPING",[qc]:"REINHARD_TONE_MAPPING",[$c]:"CINEON_TONE_MAPPING",[Zc]:"ACES_FILMIC_TONE_MAPPING",[Jc]:"AGX_TONE_MAPPING",[jc]:"NEUTRAL_TONE_MAPPING",[Kc]:"CUSTOM_TONE_MAPPING"};function __(i,t,e,n,r,s){let o=new on(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Kt;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let f=new _a({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Vt(c,f),h=new Xn(-1,1,1,-1,0,1),d=null,g=null,x=!1,p,m=null,_=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<_.length;w++){let C=_[w];C.setSize&&C.setSize(v,M)}},this.setEffects=function(v){_=v,y=_.length>0&&_[0].isRenderPass===!0;let M=o.width,w=o.height;_.length>0&&a===null&&(a=new on(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new on(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<_.length;C++){let b=_[C];b.setSize&&b.setSize(M,w)}},this.begin=function(v,M){if(x||v.toneMapping===Ln&&_.length===0)return!1;if(m=M,M!==null){let w=M.width,C=M.height;(o.width!==w||o.height!==C)&&this.setSize(w,C)}return y===!1&&v.setRenderTarget(o),p=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=p,x=!0;let w=o,C=a;for(let b=0;b<_.length;b++){let S=_[b];S.enabled!==!1&&(S.render(v,C,w,M),S.needsSwap!==!1&&(w=C,C=C===a?l:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,f.defines={},oe.getTransfer(d)===ge&&(f.defines.SRGB_TRANSFER="");let b=b_[g];b&&(f.defines[b]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(m),v.render(u,h),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Ad=new sn,Eu=new Ci(1,1),Rd=new Ss,Cd=new da,Pd=new As,ld=[],cd=[],ud=new Float32Array(16),hd=new Float32Array(9),fd=new Float32Array(4);function es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=ld[r];if(s===void 0&&(s=new Float32Array(r),ld[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Al(i,t){let e=cd[t];e===void 0&&(e=new Int32Array(t),cd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function v_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function y_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function M_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function S_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function w_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;fd.set(n),i.uniformMatrix2fv(this.addr,!1,fd),Ve(e,n)}}function T_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;hd.set(n),i.uniformMatrix3fv(this.addr,!1,hd),Ve(e,n)}}function E_(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;ud.set(n),i.uniformMatrix4fv(this.addr,!1,ud),Ve(e,n)}}function A_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function R_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function C_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function P_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function I_(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function L_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function F_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function D_(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function N_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Eu.compareFunction=e.isReversedDepthBuffer()?yl:vl,s=Eu):s=Ad,e.setTexture2D(t||s,r)}function U_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Cd,r)}function O_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Pd,r)}function B_(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Rd,r)}function k_(i){switch(i){case 5126:return v_;case 35664:return y_;case 35665:return M_;case 35666:return S_;case 35674:return w_;case 35675:return T_;case 35676:return E_;case 5124:case 35670:return A_;case 35667:case 35671:return R_;case 35668:case 35672:return C_;case 35669:case 35673:return P_;case 5125:return I_;case 36294:return L_;case 36295:return F_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return O_;case 36289:case 36303:case 36311:case 36292:return B_}}function z_(i,t){i.uniform1fv(this.addr,t)}function V_(i,t){let e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function G_(i,t){let e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function H_(i,t){let e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function W_(i,t){let e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function X_(i,t){let e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Y_(i,t){let e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function q_(i,t){i.uniform1iv(this.addr,t)}function $_(i,t){i.uniform2iv(this.addr,t)}function Z_(i,t){i.uniform3iv(this.addr,t)}function K_(i,t){i.uniform4iv(this.addr,t)}function J_(i,t){i.uniform1uiv(this.addr,t)}function j_(i,t){i.uniform2uiv(this.addr,t)}function Q_(i,t){i.uniform3uiv(this.addr,t)}function tv(i,t){i.uniform4uiv(this.addr,t)}function ev(i,t,e){let n=this.cache,r=t.length,s=Al(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Eu:o=Ad;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function nv(i,t,e){let n=this.cache,r=t.length,s=Al(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Cd,s[o])}function iv(i,t,e){let n=this.cache,r=t.length,s=Al(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Pd,s[o])}function rv(i,t,e){let n=this.cache,r=t.length,s=Al(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Rd,s[o])}function sv(i){switch(i){case 5126:return z_;case 35664:return V_;case 35665:return G_;case 35666:return H_;case 35674:return W_;case 35675:return X_;case 35676:return Y_;case 5124:case 35670:return q_;case 35667:case 35671:return $_;case 35668:case 35672:return Z_;case 35669:case 35673:return K_;case 5125:return J_;case 36294:return j_;case 36295:return Q_;case 36296:return tv;case 35678:case 36198:case 36298:case 36306:case 35682:return ev;case 35679:case 36299:case 36307:return nv;case 35680:case 36300:case 36308:case 36293:return iv;case 36289:case 36303:case 36311:case 36292:return rv}}var Au=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=k_(e.type)}},Ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=sv(e.type)}},Cu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},wu=/(\w+)(\])?(\[|\.)?/g;function dd(i,t){i.seq.push(t),i.map[t.id]=t}function ov(i,t,e){let n=i.name,r=n.length;for(wu.lastIndex=0;;){let s=wu.exec(n),o=wu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(e,c===void 0?new Au(a,i,t):new Ru(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Cu(a),dd(e,u)),e=u}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ov(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function pd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var av=37297,lv=0;function cv(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var md=new $t;function uv(i){oe._getMatrix(md,oe.workingColorSpace,i);let t=`mat3( ${md.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function gd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+cv(i.getShaderSource(t),a)}else return s}function hv(i,t){let e=uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var fv={[Yc]:"Linear",[qc]:"Reinhard",[$c]:"Cineon",[Zc]:"ACESFilmic",[Jc]:"AgX",[jc]:"Neutral",[Kc]:"Custom"};function dv(i,t){let e=fv[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Sl=new H;function pv(){oe.getLuminanceCoefficients(Sl);let i=Sl.x.toFixed(4),t=Sl.y.toFixed(4),e=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function gv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function xd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pu(i){return i.replace(bv,vv)}var _v=new Map;function vv(i,t){let e=te[t];if(e===void 0){let n=_v.get(t);if(n!==void 0)e=te[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Pu(e)}var yv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _d(i){return i.replace(yv,Mv)}function Mv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function vd(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Sv={[ks]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function wv(i){return Sv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Tv={[Di]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function Ev(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Tv[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Av={[sr]:"ENVMAP_MODE_REFRACTION"};function Rv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Av[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Cv={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[Ff]:"ENVMAP_BLENDING_MIX",[Df]:"ENVMAP_BLENDING_ADD"};function Pv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Cv[i.combine]||"ENVMAP_BLENDING_NONE"}function Iv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lv(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=wv(e),c=Ev(e),f=Rv(e),u=Pv(e),h=Iv(e),d=mv(e),g=gv(s),x=r.createProgram(),p,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`)):(p=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),m=[vd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?te.tonemapping_pars_fragment:"",e.toneMapping!==Ln?dv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,hv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Pu(o),o=xd(o,e),o=bd(o,e),a=Pu(a),a=xd(a,e),a=bd(a,e),o=_d(o),a=_d(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===cu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=_+p+o,v=_+m+a,M=pd(r,r.VERTEX_SHADER,y),w=pd(r,r.FRAGMENT_SHADER,v);r.attachShader(x,M),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(i.debug.checkShaderErrors){let T=r.getProgramInfoLog(x)||"",I=r.getShaderInfoLog(M)||"",A=r.getShaderInfoLog(w)||"",P=T.trim(),D=I.trim(),L=A.trim(),O=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,w);else{let k=gd(r,M,"vertex"),z=gd(r,w,"fragment");Xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+P+`
`+k+`
`+z)}else P!==""?Wt("WebGLProgram: Program Info Log:",P):(D===""||L==="")&&(B=!1);B&&(R.diagnostics={runnable:O,programLog:P,vertexShader:{log:D,prefix:p},fragmentShader:{log:L,prefix:m}})}r.deleteShader(M),r.deleteShader(w),b=new ts(r,x),S=xv(r,x)}let b;this.getUniforms=function(){return b===void 0&&C(this),b};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,av)),E},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var Fv=0,Iu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Lu(t),e.set(t,n)),n}},Lu=class{constructor(t){this.id=Fv++,this.code=t,this.usedTimes=0}};function Dv(i){return i===Oi||i===qs||i===$s}function Nv(i,t,e,n,r,s){let o=new Hr,a=new Iu,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,E,R,T,I){let A=R.fog,P=T.geometry,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?R.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,O=t.get(b.envMap||D,L),B=O&&O.mapping===Vs?O.image.height:null,k=d[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Wt("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=z!==void 0?z.length:0,G=0;P.morphAttributes.position!==void 0&&(G=1),P.morphAttributes.normal!==void 0&&(G=2),P.morphAttributes.color!==void 0&&(G=3);let J,it,ht,Y;if(k){let ve=Zn[k];J=ve.vertexShader,it=ve.fragmentShader}else{J=b.vertexShader,it=b.fragmentShader;let ve=a.getVertexShaderStage(b),pe=a.getFragmentShaderStage(b);a.update(b,ve,pe),ht=ve.id,Y=pe.id}let $=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ct=T.isInstancedMesh===!0,ut=T.isBatchedMesh===!0,pt=!!b.map,gt=!!b.matcap,Mt=!!O,Ot=!!b.aoMap,ie=!!b.lightMap,zt=!!b.bumpMap&&b.wireframe===!1,fe=!!b.normalMap,He=!!b.displacementMap,fn=!!b.emissiveMap,Re=!!b.metalnessMap,Ue=!!b.roughnessMap,q=b.anisotropy>0,Qe=b.clearcoat>0,xe=b.dispersion>0,V=b.retroreflectivity>0,F=b.iridescence>0,Z=b.sheen>0,tt=b.transmission>0,rt=q&&!!b.anisotropyMap,mt=Qe&&!!b.clearcoatMap,xt=Qe&&!!b.clearcoatNormalMap,st=Qe&&!!b.clearcoatRoughnessMap,lt=F&&!!b.iridescenceMap,bt=F&&!!b.iridescenceThicknessMap,Nt=Z&&!!b.sheenColorMap,St=Z&&!!b.sheenRoughnessMap,_t=!!b.specularMap,Ut=!!b.specularColorMap,Ht=!!b.specularIntensityMap,Jt=tt&&!!b.transmissionMap,X=tt&&!!b.thicknessMap,vt=!!b.gradientMap,ot=!!b.alphaMap,yt=b.alphaTest>0,At=!!b.alphaHash,ft=!!b.extensions,Bt=Ln;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Ft={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:J,fragmentShader:it,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:ut,batchingColor:ut&&T._colorsTexture!==null,instancing:ct,instancingColor:ct&&T.instanceColor!==null,instancingMorph:ct&&T.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:gt,envMap:Mt,envMapMode:Mt&&O.mapping,envMapCubeUVHeight:B,aoMap:Ot,lightMap:ie,bumpMap:zt,normalMap:fe,displacementMap:He,emissiveMap:fn,normalMapObjectSpace:fe&&b.normalMapType===Of,normalMapTangentSpace:fe&&b.normalMapType===au,packedNormalMap:fe&&b.normalMapType===au&&Dv(b.normalMap.format),metalnessMap:Re,roughnessMap:Ue,anisotropy:q,anisotropyMap:rt,clearcoat:Qe,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:st,dispersion:xe,retroreflection:V,iridescence:F,iridescenceMap:lt,iridescenceThicknessMap:bt,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:St,specularMap:_t,specularColorMap:Ut,specularIntensityMap:Ht,transmission:tt,transmissionMap:Jt,thicknessMap:X,gradientMap:vt,opaque:b.transparent===!1&&b.blending===Fi&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:yt,alphaHash:At,combine:b.combine,mapUv:pt&&g(b.map.channel),aoMapUv:Ot&&g(b.aoMap.channel),lightMapUv:ie&&g(b.lightMap.channel),bumpMapUv:zt&&g(b.bumpMap.channel),normalMapUv:fe&&g(b.normalMap.channel),displacementMapUv:He&&g(b.displacementMap.channel),emissiveMapUv:fn&&g(b.emissiveMap.channel),metalnessMapUv:Re&&g(b.metalnessMap.channel),roughnessMapUv:Ue&&g(b.roughnessMap.channel),anisotropyMapUv:rt&&g(b.anisotropyMap.channel),clearcoatMapUv:mt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(b.sheenRoughnessMap.channel),specularMapUv:_t&&g(b.specularMap.channel),specularColorMapUv:Ut&&g(b.specularColorMap.channel),specularIntensityMapUv:Ht&&g(b.specularIntensityMap.channel),transmissionMapUv:Jt&&g(b.transmissionMap.channel),thicknessMapUv:X&&g(b.thicknessMap.channel),alphaMapUv:ot&&g(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(fe||q),vertexNormals:!!P.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!P.attributes.uv&&(pt||ot),fog:!!A,useFog:b.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||P.attributes.normal===void 0&&fe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:G,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===ge,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===de,flipSided:b.side===je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&b.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let E in b.defines)S.push(E),S.push(b.defines[E]);return b.isRawShaderMaterial===!1&&(m(S,b),_(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function m(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function _(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let S=d[b.type],E;if(S){let R=Zn[S];E=ed.clone(R.uniforms)}else E=b.uniforms;return E}function v(b,S){let E=f.get(S);return E!==void 0?++E.usedTimes:(E=new Lv(i,S,b,r),c.push(E),f.set(S,E)),E}function M(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),f.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function C(){a.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:C}}function Uv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Ov(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function yd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Md(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,p,m){let _=i[t];return _===void 0?(_={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:p,group:m},i[t]=_):(_.id=h.id,_.object=h,_.geometry=d,_.material=g,_.materialVariant=o(h),_.groupOrder=x,_.renderOrder=h.renderOrder,_.z=p,_.group=m),t++,_}function l(h,d,g,x,p,m,_){_.reversedDepth===!0&&(p=-p);let y=a(h,d,g,x,p,m);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):e.push(y)}function c(h,d,g,x,p,m){let _=a(h,d,g,x,p,m);g.transmission>0?n.unshift(_):g.transparent===!0?r.unshift(_):e.unshift(_)}function f(h,d){e.length>1&&e.sort(h||Ov),n.length>1&&n.sort(d||yd),r.length>1&&r.sort(d||yd)}function u(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function Bv(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Md,i.set(n,[o])):r>=s.length?(o=new Md,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function kv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new K};break;case"SpotLight":e={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function zv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vv=0;function Gv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Hv(i){let t=new kv,e=zv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new Te,o=new Te;function a(c){let f=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,_=0,y=0,v=0,M=0,w=0,C=0,b=0,S=0,E=0;c.sort(Gv);for(let T=0,I=c.length;T<I;T++){let A=c[T],P=A.color,D=A.intensity,L=A.distance,O=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Oi?O=A.shadow.map.texture:O=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=P.r*D,u+=P.g*D,h+=P.b*D;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],D);E++}else if(A.isSunLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,z=e.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=O;let et=k.getViewportCount();for(let G=0;G<et;G++)n.sunShadowMatrix[x+G]=k.getMatrix(G),n.sunShadowCascade[x+G]=k._cascadeData[G];x+=et,g++}n.sun[d]=B,d++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,z=e.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=O,n.directionalShadowMatrix[p]=A.shadow.matrix,M++}n.directional[p]=B,p++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(P).multiplyScalar(D),B.distance=L,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[_]=B;let k=A.shadow;if(A.map&&(n.spotLightMap[b]=A.map,b++,k.updateMatrices(A),A.castShadow&&S++),n.spotLightMatrix[_]=k.matrix,A.castShadow){let z=e.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=O,C++}_++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(P).multiplyScalar(D),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=B,y++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let k=A.shadow,z=e.get(A);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[m]=z,n.pointShadowMap[m]=O,n.pointShadowMatrix[m]=A.shadow.matrix,w++}n.point[m]=B,m++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(D),B.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[v]=B,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let R=n.hash;(R.sunLength!==d||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==_||R.rectAreaLength!==y||R.hemiLength!==v||R.numSunShadows!==g||R.numDirectionalShadows!==M||R.numPointShadows!==w||R.numSpotShadows!==C||R.numSpotMaps!==b||R.numLightProbes!==E)&&(n.sun.length=d,n.directional.length=p,n.spot.length=_,n.rectArea.length=y,n.point.length=m,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=C,n.spotShadowMap.length=C,n.spotLightMatrix.length=C+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=E,R.sunLength=d,R.directionalLength=p,R.pointLength=m,R.spotLength=_,R.rectAreaLength=y,R.hemiLength=v,R.numSunShadows=g,R.numDirectionalShadows=M,R.numPointShadows=w,R.numSpotShadows=C,R.numSpotMaps=b,R.numLightProbes=E,n.version=Vv++)}function l(c,f){let u=0,h=0,d=0,g=0,x=0,p=0,m=f.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){let v=c[_];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),u++}else if(v.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),g++}else if(v.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){let M=n.hemi[p];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function Sd(i){let t=new Hv(i),e=[],n=[],r=[];function s(h){u.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function f(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Wv(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Sd(i),t.set(r,[a])):s>=o.length?(a=new Sd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,qv=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],$v=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],wd=new Te,Js=new H,Tu=new H;function Zv(i,t,e){let n=new Es,r=new ee,s=new ee,o=new Pe,a=new va,l=new ya,c={},f=e.maxTextureSize,u={[Yn]:je,[je]:Yn,[de]:de},h=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ee},radius:{value:4}},vertexShader:Xv,fragmentShader:Yv}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let m=this.type;this.render=function(w,C,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===pf&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let S=i.getRenderTarget(),E=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),T=i.state;T.setBlending(qn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let I=m!==this.type;I&&C.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(P=>P.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,P=w.length;A<P;A++){let D=w[A],L=D.shadow;if(L===void 0){Wt("WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let O=L.getFrameExtents();r.multiply(O),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/O.x),r.x=s.x*O.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/O.y),r.y=s.y*O.y,L.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=B,L.map===null||I===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Zr){if(D.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new on(r.x,r.y,{format:Oi,type:Nn,minFilter:Ke,magFilter:Ke,generateMipmaps:!1}),L.map.texture.name=D.name+".shadowMap",L.map.depthTexture=new Ci(r.x,r.y,Dn),L.map.depthTexture.name=D.name+".shadowMapDepth",L.map.depthTexture.format=Gn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Xe,L.map.depthTexture.magFilter=Xe}else D.isPointLight?(L.map=new Tl(r.x),L.map.depthTexture=new ba(r.x,Fn)):(L.map=new on(r.x,r.y),L.map.depthTexture=new Ci(r.x,r.y,Fn)),L.map.depthTexture.name=D.name+".shadowMap",L.map.depthTexture.format=Gn,this.type===ks?(L.map.depthTexture.compareFunction=B?yl:vl,L.map.depthTexture.minFilter=Ke,L.map.depthTexture.magFilter=Ke):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Xe,L.map.depthTexture.magFilter=Xe);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);let k=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();D.isPointLight!==!0&&L.updateMatrices(D,b);for(let z=0;z<k;z++){let et=L.getCamera(z);if(D.isPointLight){let G=L.camera,J=L.matrix,it=D.distance||G.far;it!==G.far&&(G.far=it,G.updateProjectionMatrix()),Js.setFromMatrixPosition(D.matrixWorld),G.position.copy(Js),Tu.copy(G.position),Tu.add(qv[z]),G.up.copy($v[z]),G.lookAt(Tu),G.updateMatrixWorld(),J.makeTranslation(-Js.x,-Js.y,-Js.z),wd.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),L._frustum.setFromProjectionMatrix(wd,G.coordinateSystem,G.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,z),i.clear();else{z===0&&(i.setRenderTarget(L.map),i.clear());let G=L.getViewport(z);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),T.viewport(o)}n=L.getFrustum(z),v(C,b,et,D,this.type)}L.isPointLightShadow!==!0&&this.type===Zr&&_(L,b),L.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(S,E,R)};function _(w,C){let b=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new on(r.x,r.y,{format:Oi,type:Nn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(C,null,b,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(C,null,b,d,x,null)}function y(w,C,b,S){let E=null,R=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)E=R;else if(E=b.isPointLight===!0?l:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let T=E.uuid,I=C.uuid,A=c[T];A===void 0&&(A={},c[T]=A);let P=A[I];P===void 0&&(P=E.clone(),A[I]=P,C.addEventListener("dispose",M)),E=P}if(E.visible=C.visible,E.wireframe=C.wireframe,S===Zr?E.side=C.shadowSide!==null?C.shadowSide:C.side:E.side=C.shadowSide!==null?C.shadowSide:u[C.side],E.alphaMap=C.alphaMap,E.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,E.map=C.map,E.clipShadows=C.clipShadows,E.clippingPlanes=C.clippingPlanes,E.clipIntersection=C.clipIntersection,E.displacementMap=C.displacementMap,E.displacementScale=C.displacementScale,E.displacementBias=C.displacementBias,E.wireframeLinewidth=C.wireframeLinewidth,E.linewidth=C.linewidth,b.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let T=i.properties.get(E);T.light=b}return E}function v(w,C,b,S,E){if(w.visible===!1)return;if(w.layers.test(C.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&E===Zr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),A=w.material;if(Array.isArray(A)){let P=I.groups;for(let D=0,L=P.length;D<L;D++){let O=P[D],B=A[O.materialIndex];if(B&&B.visible){let k=y(w,B,S,E);w.onBeforeShadow(i,w,C,b,I,k,O),i.renderBufferDirect(b,null,I,k,w,O),w.onAfterShadow(i,w,C,b,I,k,O)}}}else if(A.visible){let P=y(w,A,S,E);w.onBeforeShadow(i,w,C,b,I,P,null),i.renderBufferDirect(b,null,I,P,w,null),w.onAfterShadow(i,w,C,b,I,P,null)}}let T=w.children;for(let I=0,A=T.length;I<A;I++)v(T[I],C,b,S,E)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let S=c[b],E=w.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function Kv(i,t){function e(){let X=!1,vt=new Pe,ot=null,yt=new Pe(0,0,0,0);return{setMask:function(At){ot!==At&&!X&&(i.colorMask(At,At,At,At),ot=At)},setLocked:function(At){X=At},setClear:function(At,ft,Bt,Ft,ve){ve===!0&&(At*=Ft,ft*=Ft,Bt*=Ft),vt.set(At,ft,Bt,Ft),yt.equals(vt)===!1&&(i.clearColor(At,ft,Bt,Ft),yt.copy(vt))},reset:function(){X=!1,ot=null,yt.set(-1,0,0,0)}}}function n(){let X=!1,vt=!1,ot=null,yt=null,At=null;return{setReversed:function(ft){if(vt!==ft){let Bt=t.get("EXT_clip_control");ft?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),vt=ft;let Ft=At;At=null,this.setClear(Ft)}},getReversed:function(){return vt},setTest:function(ft){ft?$(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ft){ot!==ft&&!X&&(i.depthMask(ft),ot=ft)},setFunc:function(ft){if(vt&&(ft=Zf[ft]),yt!==ft){switch(ft){case ea:i.depthFunc(i.NEVER);break;case na:i.depthFunc(i.ALWAYS);break;case ia:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case ra:i.depthFunc(i.EQUAL);break;case sa:i.depthFunc(i.GEQUAL);break;case oa:i.depthFunc(i.GREATER);break;case aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ft}},setLocked:function(ft){X=ft},setClear:function(ft){At!==ft&&(At=ft,vt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){X=!1,ot=null,yt=null,At=null,vt=!1}}}function r(){let X=!1,vt=null,ot=null,yt=null,At=null,ft=null,Bt=null,Ft=null,ve=null;return{setTest:function(pe){X||(pe?$(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(pe){vt!==pe&&!X&&(i.stencilMask(pe),vt=pe)},setFunc:function(pe,En,kn){(ot!==pe||yt!==En||At!==kn)&&(i.stencilFunc(pe,En,kn),ot=pe,yt=En,At=kn)},setOp:function(pe,En,kn){(ft!==pe||Bt!==En||Ft!==kn)&&(i.stencilOp(pe,En,kn),ft=pe,Bt=En,Ft=kn)},setLocked:function(pe){X=pe},setClear:function(pe){ve!==pe&&(i.clearStencil(pe),ve=pe)},reset:function(){X=!1,vt=null,ot=null,yt=null,At=null,ft=null,Bt=null,Ft=null,ve=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,f={},u={},h={},d=new WeakMap,g=[],x=null,p=!1,m=null,_=null,y=null,v=null,M=null,w=null,C=null,b=new K(0,0,0),S=0,E=!1,R=null,T=null,I=null,A=null,P=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=O>=2);let k=null,z={},et=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),J=new Pe().fromArray(et),it=new Pe().fromArray(G);function ht(X,vt,ot,yt){let At=new Uint8Array(4),ft=i.createTexture();i.bindTexture(X,ft),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<ot;Bt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(vt+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ft}let Y={};Y[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(kr),zt(!1),fe(Vc),$(i.CULL_FACE),Ot(qn);function $(X){f[X]!==!0&&(i.enable(X),f[X]=!0)}function at(X){f[X]!==!1&&(i.disable(X),f[X]=!1)}function ct(X,vt){return h[X]!==vt?(i.bindFramebuffer(X,vt),h[X]=vt,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function ut(X,vt){let ot=g,yt=!1;if(X){ot=d.get(vt),ot===void 0&&(ot=[],d.set(vt,ot));let At=X.textures;if(ot.length!==At.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Bt=At.length;ft<Bt;ft++)ot[ft]=i.COLOR_ATTACHMENT0+ft;ot.length=At.length,yt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ot)}function pt(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let gt={[rr]:i.FUNC_ADD,[gf]:i.FUNC_SUBTRACT,[xf]:i.FUNC_REVERSE_SUBTRACT};gt[bf]=i.MIN,gt[_f]=i.MAX;let Mt={[vf]:i.ZERO,[yf]:i.ONE,[Mf]:i.SRC_COLOR,[Hc]:i.SRC_ALPHA,[Rf]:i.SRC_ALPHA_SATURATE,[Ef]:i.DST_COLOR,[wf]:i.DST_ALPHA,[Sf]:i.ONE_MINUS_SRC_COLOR,[Wc]:i.ONE_MINUS_SRC_ALPHA,[Af]:i.ONE_MINUS_DST_COLOR,[Tf]:i.ONE_MINUS_DST_ALPHA,[Cf]:i.CONSTANT_COLOR,[Pf]:i.ONE_MINUS_CONSTANT_COLOR,[If]:i.CONSTANT_ALPHA,[Lf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(X,vt,ot,yt,At,ft,Bt,Ft,ve,pe){if(X===qn){p===!0&&(at(i.BLEND),p=!1);return}if(p===!1&&($(i.BLEND),p=!0),X!==mf){if(X!==m||pe!==E){if((_!==rr||M!==rr)&&(i.blendEquation(i.FUNC_ADD),_=rr,M=rr),pe)switch(X){case Fi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFunc(i.ONE,i.ONE);break;case Gc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",X);break}else switch(X){case Fi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Gc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zs:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",X);break}y=null,v=null,w=null,C=null,b.set(0,0,0),S=0,m=X,E=pe}return}At=At||vt,ft=ft||ot,Bt=Bt||yt,(vt!==_||At!==M)&&(i.blendEquationSeparate(gt[vt],gt[At]),_=vt,M=At),(ot!==y||yt!==v||ft!==w||Bt!==C)&&(i.blendFuncSeparate(Mt[ot],Mt[yt],Mt[ft],Mt[Bt]),y=ot,v=yt,w=ft,C=Bt),(Ft.equals(b)===!1||ve!==S)&&(i.blendColor(Ft.r,Ft.g,Ft.b,ve),b.copy(Ft),S=ve),m=X,E=!1}function ie(X,vt){X.side===de?at(i.CULL_FACE):$(i.CULL_FACE);let ot=X.side===je;vt&&(ot=!ot),zt(ot),X.blending===Fi&&X.transparent===!1?Ot(qn):Ot(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);let yt=X.stencilWrite;a.setTest(yt),yt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),fn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(X){R!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),R=X)}function fe(X){X!==ff?($(i.CULL_FACE),X!==T&&(X===Vc?i.cullFace(i.BACK):X===df?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),T=X}function He(X){X!==I&&(L&&i.lineWidth(X),I=X)}function fn(X,vt,ot){X?($(i.POLYGON_OFFSET_FILL),(A!==vt||P!==ot)&&(A=vt,P=ot,o.getReversed()&&(vt=-vt),i.polygonOffset(vt,ot))):at(i.POLYGON_OFFSET_FILL)}function Re(X){X?$(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Ue(X){X===void 0&&(X=i.TEXTURE0+D-1),k!==X&&(i.activeTexture(X),k=X)}function q(X,vt,ot){ot===void 0&&(k===null?ot=i.TEXTURE0+D-1:ot=k);let yt=z[ot];yt===void 0&&(yt={type:void 0,texture:void 0},z[ot]=yt),(yt.type!==X||yt.texture!==vt)&&(k!==ot&&(i.activeTexture(ot),k=ot),i.bindTexture(X,vt||Y[X]),yt.type=X,yt.texture=vt)}function Qe(){let X=z[k];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xe(){try{i.compressedTexImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function F(){try{i.texSubImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function Z(){try{i.texSubImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function mt(){try{i.texStorage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function xt(){try{i.texStorage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function st(){try{i.texImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function lt(){try{i.texImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function bt(X){return u[X]!==void 0?u[X]:i.getParameter(X)}function Nt(X,vt){u[X]!==vt&&(i.pixelStorei(X,vt),u[X]=vt)}function St(X){J.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),J.copy(X))}function _t(X){it.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),it.copy(X))}function Ut(X,vt){let ot=c.get(vt);ot===void 0&&(ot=new WeakMap,c.set(vt,ot));let yt=ot.get(X);yt===void 0&&(yt=i.getUniformBlockIndex(vt,X.name),ot.set(X,yt))}function Ht(X,vt){let yt=c.get(vt).get(X);l.get(vt)!==yt&&(i.uniformBlockBinding(vt,yt,X.__bindingPointIndex),l.set(vt,yt))}function Jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},k=null,z={},h={},d=new WeakMap,g=[],x=null,p=!1,m=null,_=null,y=null,v=null,M=null,w=null,C=null,b=new K(0,0,0),S=0,E=!1,R=null,T=null,I=null,A=null,P=null,J.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:at,bindFramebuffer:ct,drawBuffers:ut,useProgram:pt,setBlending:Ot,setMaterial:ie,setFlipSided:zt,setCullFace:fe,setLineWidth:He,setPolygonOffset:fn,setScissorTest:Re,activeTexture:Ue,bindTexture:q,unbindTexture:Qe,compressedTexImage2D:xe,compressedTexImage3D:V,texImage2D:st,texImage3D:lt,pixelStorei:Nt,getParameter:bt,updateUBOMapping:Ut,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:xt,texSubImage2D:F,texSubImage3D:Z,compressedTexSubImage2D:tt,compressedTexSubImage3D:rt,scissor:St,viewport:_t,reset:Jt}}function Jv(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ee,f=new WeakMap,u=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(V,F){return g?new OffscreenCanvas(V,F):zr("canvas")}function p(V,F,Z){let tt=1,rt=xe(V);if((rt.width>Z||rt.height>Z)&&(tt=Z/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let mt=Math.floor(tt*rt.width),xt=Math.floor(tt*rt.height);h===void 0&&(h=x(mt,xt));let st=F?x(mt,xt):h;return st.width=mt,st.height=xt,st.getContext("2d").drawImage(V,0,0,mt,xt),Wt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+mt+"x"+xt+")."),st}else return"data"in V&&Wt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),V;return V}function m(V){return V.generateMipmaps}function _(V){i.generateMipmap(V)}function y(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(V,F,Z,tt,rt,mt=!1){if(V!==null){if(i[V]!==void 0)return i[V];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let xt;tt&&(xt=t.get("EXT_texture_norm16"),xt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=F;if(F===i.RED&&(Z===i.FLOAT&&(st=i.R32F),Z===i.HALF_FLOAT&&(st=i.R16F),Z===i.UNSIGNED_BYTE&&(st=i.R8),Z===i.UNSIGNED_SHORT&&xt&&(st=xt.R16_EXT),Z===i.SHORT&&xt&&(st=xt.R16_SNORM_EXT)),F===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.R8UI),Z===i.UNSIGNED_SHORT&&(st=i.R16UI),Z===i.UNSIGNED_INT&&(st=i.R32UI),Z===i.BYTE&&(st=i.R8I),Z===i.SHORT&&(st=i.R16I),Z===i.INT&&(st=i.R32I)),F===i.RG&&(Z===i.FLOAT&&(st=i.RG32F),Z===i.HALF_FLOAT&&(st=i.RG16F),Z===i.UNSIGNED_BYTE&&(st=i.RG8),Z===i.UNSIGNED_SHORT&&xt&&(st=xt.RG16_EXT),Z===i.SHORT&&xt&&(st=xt.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RG8UI),Z===i.UNSIGNED_SHORT&&(st=i.RG16UI),Z===i.UNSIGNED_INT&&(st=i.RG32UI),Z===i.BYTE&&(st=i.RG8I),Z===i.SHORT&&(st=i.RG16I),Z===i.INT&&(st=i.RG32I)),F===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Z===i.UNSIGNED_INT&&(st=i.RGB32UI),Z===i.BYTE&&(st=i.RGB8I),Z===i.SHORT&&(st=i.RGB16I),Z===i.INT&&(st=i.RGB32I)),F===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Z===i.UNSIGNED_INT&&(st=i.RGBA32UI),Z===i.BYTE&&(st=i.RGBA8I),Z===i.SHORT&&(st=i.RGBA16I),Z===i.INT&&(st=i.RGBA32I)),F===i.RGB&&(Z===i.UNSIGNED_SHORT&&xt&&(st=xt.RGB16_EXT),Z===i.SHORT&&xt&&(st=xt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),F===i.RGBA){let lt=mt?ys:oe.getTransfer(rt);Z===i.FLOAT&&(st=i.RGBA32F),Z===i.HALF_FLOAT&&(st=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(st=lt===ge?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&xt&&(st=xt.RGBA16_EXT),Z===i.SHORT&&xt&&(st=xt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(V,F){let Z;return V?F===null||F===Fn||F===Jr?Z=i.DEPTH24_STENCIL8:F===Dn?Z=i.DEPTH32F_STENCIL8:F===Kr&&(Z=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===Fn||F===Jr?Z=i.DEPTH_COMPONENT24:F===Dn?Z=i.DEPTH_COMPONENT32F:F===Kr&&(Z=i.DEPTH_COMPONENT16),Z}function w(V,F){return m(V)===!0||V.isFramebufferTexture&&V.minFilter!==Xe&&V.minFilter!==Ke?Math.log2(Math.max(F.width,F.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?F.mipmaps.length:1}function C(V){let F=V.target;F.removeEventListener("dispose",C),S(F),F.isVideoTexture&&f.delete(F),F.isHTMLTexture&&u.delete(F)}function b(V){let F=V.target;F.removeEventListener("dispose",b),R(F)}function S(V){let F=n.get(V);if(F.__webglInit===void 0)return;let Z=V.source,tt=d.get(Z);if(tt){let rt=tt[F.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&E(V),Object.keys(tt).length===0&&d.delete(Z)}n.remove(V)}function E(V){let F=n.get(V);i.deleteTexture(F.__webglTexture);let Z=V.source,tt=d.get(Z);delete tt[F.__cacheKey],o.memory.textures--}function R(V){let F=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(F.__webglFramebuffer[tt]))for(let rt=0;rt<F.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(F.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(F.__webglFramebuffer[tt]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[tt])}else{if(Array.isArray(F.__webglFramebuffer))for(let tt=0;tt<F.__webglFramebuffer.length;tt++)i.deleteFramebuffer(F.__webglFramebuffer[tt]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let tt=0;tt<F.__webglColorRenderbuffer.length;tt++)F.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[tt]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let Z=V.textures;for(let tt=0,rt=Z.length;tt<rt;tt++){let mt=n.get(Z[tt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(Z[tt])}n.remove(V)}let T=0;function I(){T=0}function A(){return T}function P(V){T=V}function D(){let V=T;return V>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),T+=1,V}function L(V){let F=[];return F.push(V.wrapS),F.push(V.wrapT),F.push(V.wrapR||0),F.push(V.magFilter),F.push(V.minFilter),F.push(V.anisotropy),F.push(V.internalFormat),F.push(V.format),F.push(V.type),F.push(V.generateMipmaps),F.push(V.premultiplyAlpha),F.push(V.flipY),F.push(V.unpackAlignment),F.push(V.colorSpace),F.join()}function O(V,F){let Z=n.get(V);if(V.isVideoTexture&&q(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&Z.__version!==V.version){let tt=V.image;if(tt===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Z,V,F);return}}else V.isExternalTexture&&(Z.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+F)}function B(V,F){let Z=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Z.__version!==V.version){at(Z,V,F);return}else V.isExternalTexture&&(Z.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+F)}function k(V,F){let Z=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Z.__version!==V.version){at(Z,V,F);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+F)}function z(V,F){let Z=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&Z.__version!==V.version){ct(Z,V,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+F)}let et={[Qi]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[la]:i.MIRRORED_REPEAT},G={[Xe]:i.NEAREST,[Nf]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[Oa]:i.LINEAR_MIPMAP_NEAREST,[Ni]:i.LINEAR_MIPMAP_LINEAR},J={[kf]:i.NEVER,[Wf]:i.ALWAYS,[zf]:i.LESS,[vl]:i.LEQUAL,[Vf]:i.EQUAL,[yl]:i.GEQUAL,[Gf]:i.GREATER,[Hf]:i.NOTEQUAL};function it(V,F){if(F.type===Dn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===Ke||F.magFilter===Oa||F.magFilter===Gs||F.magFilter===Ni||F.minFilter===Ke||F.minFilter===Oa||F.minFilter===Gs||F.minFilter===Ni)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,et[F.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,et[F.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,et[F.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,G[F.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,G[F.minFilter]),F.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,J[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===Xe||F.minFilter!==Gs&&F.minFilter!==Ni||F.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function ht(V,F){let Z=!1;V.__webglInit===void 0&&(V.__webglInit=!0,F.addEventListener("dispose",C));let tt=F.source,rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));let mt=L(F);if(mt!==V.__cacheKey){rt[mt]===void 0&&(rt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),rt[mt].usedTimes++;let xt=rt[V.__cacheKey];xt!==void 0&&(rt[V.__cacheKey].usedTimes--,xt.usedTimes===0&&E(F)),V.__cacheKey=mt,V.__webglTexture=rt[mt].texture}return Z}function Y(V,F,Z){return Math.floor(Math.floor(V/Z)/F)}function $(V,F,Z,tt){let mt=V.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,Z,tt,F.data);else{mt.sort((Nt,St)=>Nt.start-St.start);let xt=0;for(let Nt=1;Nt<mt.length;Nt++){let St=mt[xt],_t=mt[Nt],Ut=St.start+St.count,Ht=Y(_t.start,F.width,4),Jt=Y(St.start,F.width,4);_t.start<=Ut+1&&Ht===Jt&&Y(_t.start+_t.count-1,F.width,4)===Ht?St.count=Math.max(St.count,_t.start+_t.count-St.start):(++xt,mt[xt]=_t)}mt.length=xt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Nt=0,St=mt.length;Nt<St;Nt++){let _t=mt[Nt],Ut=Math.floor(_t.start/4),Ht=Math.ceil(_t.count/4),Jt=Ut%F.width,X=Math.floor(Ut/F.width),vt=Ht,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Jt,X,vt,ot,Z,tt,F.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function at(V,F,Z){let tt=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(tt=i.TEXTURE_3D);let rt=ht(V,F),mt=F.source;e.bindTexture(tt,V.__webglTexture,i.TEXTURE0+Z);let xt=n.get(mt);if(mt.version!==xt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let ot=oe.getPrimaries(oe.workingColorSpace),yt=F.colorSpace===ui?null:oe.getPrimaries(F.colorSpace),At=F.colorSpace===ui||ot===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let lt=p(F.image,!1,r.maxTextureSize);lt=Qe(F,lt);let bt=s.convert(F.format,F.colorSpace),Nt=s.convert(F.type),St=v(F.internalFormat,bt,Nt,F.normalized,F.colorSpace,F.isVideoTexture);it(tt,F);let _t,Ut=F.mipmaps,Ht=F.isVideoTexture!==!0,Jt=xt.__version===void 0||rt===!0,X=mt.dataReady,vt=w(F,lt);if(F.isDepthTexture)St=M(F.format===Ui,F.type),Jt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,St,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,St,lt.width,lt.height,0,bt,Nt,null));else if(F.isDataTexture)if(Ut.length>0){Ht&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,St,Ut[0].width,Ut[0].height);for(let ot=0,yt=Ut.length;ot<yt;ot++)_t=Ut[ot],Ht?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,bt,Nt,_t.data):e.texImage2D(i.TEXTURE_2D,ot,St,_t.width,_t.height,0,bt,Nt,_t.data);F.generateMipmaps=!1}else Ht?(Jt&&e.texStorage2D(i.TEXTURE_2D,vt,St,lt.width,lt.height),X&&$(F,lt,bt,Nt)):e.texImage2D(i.TEXTURE_2D,0,St,lt.width,lt.height,0,bt,Nt,lt.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Ht&&Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,St,Ut[0].width,Ut[0].height,lt.depth);for(let ot=0,yt=Ut.length;ot<yt;ot++)if(_t=Ut[ot],F.format!==Sn)if(bt!==null)if(Ht){if(X)if(F.layerUpdates.size>0){let At=pu(_t.width,_t.height,F.format,F.type);for(let ft of F.layerUpdates){let Bt=_t.data.subarray(ft*At/_t.data.BYTES_PER_ELEMENT,(ft+1)*At/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ft,_t.width,_t.height,1,bt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,lt.depth,bt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,St,_t.width,_t.height,lt.depth,0,_t.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,_t.width,_t.height,lt.depth,bt,Nt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,St,_t.width,_t.height,lt.depth,0,bt,Nt,_t.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{Ht&&Jt&&e.texStorage2D(i.TEXTURE_2D,vt,St,Ut[0].width,Ut[0].height);for(let ot=0,yt=Ut.length;ot<yt;ot++)_t=Ut[ot],F.format!==Sn?bt!==null?Ht?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,bt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,St,_t.width,_t.height,0,_t.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,_t.width,_t.height,bt,Nt,_t.data):e.texImage2D(i.TEXTURE_2D,ot,St,_t.width,_t.height,0,bt,Nt,_t.data)}else if(F.isDataArrayTexture)if(Ht){if(Jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,St,lt.width,lt.height,lt.depth),X)if(F.layerUpdates.size>0){let ot=pu(lt.width,lt.height,F.format,F.type);for(let yt of F.layerUpdates){let At=lt.data.subarray(yt*ot/lt.data.BYTES_PER_ELEMENT,(yt+1)*ot/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,lt.width,lt.height,1,bt,Nt,At)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Nt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,lt.width,lt.height,lt.depth,0,bt,Nt,lt.data);else if(F.isData3DTexture)Ht?(Jt&&e.texStorage3D(i.TEXTURE_3D,vt,St,lt.width,lt.height,lt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Nt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,St,lt.width,lt.height,lt.depth,0,bt,Nt,lt.data);else if(F.isFramebufferTexture){if(Jt)if(Ht)e.texStorage2D(i.TEXTURE_2D,vt,St,lt.width,lt.height);else{let ot=lt.width,yt=lt.height;for(let At=0;At<vt;At++)e.texImage2D(i.TEXTURE_2D,At,St,ot,yt,0,bt,Nt,null),ot>>=1,yt>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),lt.parentNode!==ot){ot.appendChild(lt),u.add(F),ot.onpaint=yt=>{let At=yt.changedElements;for(let ft of u)At.includes(ft.image)&&(ft.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let At=i.RGBA,ft=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ft,Bt,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ut.length>0){if(Ht&&Jt){let ot=xe(Ut[0]);e.texStorage2D(i.TEXTURE_2D,vt,St,ot.width,ot.height)}for(let ot=0,yt=Ut.length;ot<yt;ot++)_t=Ut[ot],Ht?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt,Nt,_t):e.texImage2D(i.TEXTURE_2D,ot,St,bt,Nt,_t);F.generateMipmaps=!1}else if(Ht){if(Jt){let ot=xe(lt);e.texStorage2D(i.TEXTURE_2D,vt,St,ot.width,ot.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Nt,lt)}else e.texImage2D(i.TEXTURE_2D,0,St,bt,Nt,lt);m(F)&&_(tt),xt.__version=mt.version,F.onUpdate&&F.onUpdate(F)}V.__version=F.version}function ct(V,F,Z){if(F.image.length!==6)return;let tt=ht(V,F),rt=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+Z);let mt=n.get(rt);if(rt.version!==mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Z);let xt=oe.getPrimaries(oe.workingColorSpace),st=F.colorSpace===ui?null:oe.getPrimaries(F.colorSpace),lt=F.colorSpace===ui||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let bt=F.isCompressedTexture||F.image[0].isCompressedTexture,Nt=F.image[0]&&F.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!bt&&!Nt?St[ft]=p(F.image[ft],!0,r.maxCubemapSize):St[ft]=Nt?F.image[ft].image:F.image[ft],St[ft]=Qe(F,St[ft]);let _t=St[0],Ut=s.convert(F.format,F.colorSpace),Ht=s.convert(F.type),Jt=v(F.internalFormat,Ut,Ht,F.normalized,F.colorSpace),X=F.isVideoTexture!==!0,vt=mt.__version===void 0||tt===!0,ot=rt.dataReady,yt=w(F,_t);it(i.TEXTURE_CUBE_MAP,F);let At;if(bt){X&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Jt,_t.width,_t.height);for(let ft=0;ft<6;ft++){At=St[ft].mipmaps;for(let Bt=0;Bt<At.length;Bt++){let Ft=At[Bt];F.format!==Sn?Ut!==null?X?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,0,0,Ft.width,Ft.height,Ut,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,Jt,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,0,0,Ft.width,Ft.height,Ut,Ht,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,Jt,Ft.width,Ft.height,0,Ut,Ht,Ft.data)}}}else{if(At=F.mipmaps,X&&vt){At.length>0&&yt++;let ft=xe(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Jt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Nt){X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Ut,Ht,St[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Jt,St[ft].width,St[ft].height,0,Ut,Ht,St[ft].data);for(let Bt=0;Bt<At.length;Bt++){let ve=At[Bt].image[ft].image;X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,0,0,ve.width,ve.height,Ut,Ht,ve.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,Jt,ve.width,ve.height,0,Ut,Ht,ve.data)}}else{X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Ut,Ht,St[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Jt,Ut,Ht,St[ft]);for(let Bt=0;Bt<At.length;Bt++){let Ft=At[Bt];X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,0,0,Ut,Ht,Ft.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,Jt,Ut,Ht,Ft.image[ft])}}}m(F)&&_(i.TEXTURE_CUBE_MAP),mt.__version=rt.version,F.onUpdate&&F.onUpdate(F)}V.__version=F.version}function ut(V,F,Z,tt,rt,mt){let xt=s.convert(Z.format,Z.colorSpace),st=s.convert(Z.type),lt=v(Z.internalFormat,xt,st,Z.normalized,Z.colorSpace),bt=n.get(F),Nt=n.get(Z);if(Nt.__renderTarget=F,!bt.__hasExternalTextures){let St=Math.max(1,F.width>>mt),_t=Math.max(1,F.height>>mt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,mt,lt,St,_t,F.depth,0,xt,st,null):e.texImage2D(rt,mt,lt,St,_t,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),Ue(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,rt,Nt.__webglTexture,0,Re(F)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,rt,Nt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(V,F,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,V),F.depthBuffer){let tt=F.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,mt=M(F.stencilBuffer,rt),xt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(F),mt,F.width,F.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(F),mt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,mt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,V)}else{let tt=F.textures;for(let rt=0;rt<tt.length;rt++){let mt=tt[rt],xt=s.convert(mt.format,mt.colorSpace),st=s.convert(mt.type),lt=v(mt.internalFormat,xt,st,mt.normalized,mt.colorSpace);Ue(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(F),lt,F.width,F.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(F),lt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,lt,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(V,F,Z){let tt=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(F.depthTexture);if(rt.__renderTarget=F,(!rt.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),tt){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,F.depthTexture.addEventListener("dispose",C)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),it(i.TEXTURE_CUBE_MAP,F.depthTexture);let bt=s.convert(F.depthTexture.format),Nt=s.convert(F.depthTexture.type),St;F.depthTexture.format===Gn?St=i.DEPTH_COMPONENT24:F.depthTexture.format===Ui&&(St=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,St,F.width,F.height,0,bt,Nt,null)}}else O(F.depthTexture,0);let mt=rt.__webglTexture,xt=Re(F),st=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,lt=F.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===Gn)Ue(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,mt,0);else if(F.depthTexture.format===Ui)Ue(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(V){let F=n.get(V),Z=V.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==V.depthTexture){let tt=V.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),tt){let rt=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),F.__depthDisposeCallback=rt}F.__boundDepthTexture=tt}if(V.depthTexture&&!F.__autoAllocateDepthBuffer)if(Z)for(let tt=0;tt<6;tt++)gt(F.__webglFramebuffer[tt],V,tt);else{let tt=V.texture.mipmaps;tt&&tt.length>0?gt(F.__webglFramebuffer[0],V,0):gt(F.__webglFramebuffer,V,0)}else if(Z){F.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[tt]),F.__webglDepthbuffer[tt]===void 0)F.__webglDepthbuffer[tt]=i.createRenderbuffer(),pt(F.__webglDepthbuffer[tt],V,!1);else{let rt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=F.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,mt)}}else{let tt=V.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),pt(F.__webglDepthbuffer,V,!1);else{let rt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(V,F,Z){let tt=n.get(V);F!==void 0&&ut(tt.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Mt(V)}function ie(V){let F=V.texture,Z=n.get(V),tt=n.get(F);V.addEventListener("dispose",b);let rt=V.textures,mt=V.isWebGLCubeRenderTarget===!0,xt=rt.length>1;if(xt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=F.version,o.memory.textures++),mt){Z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(F.mipmaps&&F.mipmaps.length>0){Z.__webglFramebuffer[st]=[];for(let lt=0;lt<F.mipmaps.length;lt++)Z.__webglFramebuffer[st][lt]=i.createFramebuffer()}else Z.__webglFramebuffer[st]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){Z.__webglFramebuffer=[];for(let st=0;st<F.mipmaps.length;st++)Z.__webglFramebuffer[st]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,lt=rt.length;st<lt;st++){let bt=n.get(rt[st]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(V.samples>0&&Ue(V)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let st=0;st<rt.length;st++){let lt=rt[st];Z.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[st]);let bt=s.convert(lt.format,lt.colorSpace),Nt=s.convert(lt.type),St=v(lt.internalFormat,bt,Nt,lt.normalized,lt.colorSpace,V.isXRRenderTarget===!0),_t=Re(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,St,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Z.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(Z.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),it(i.TEXTURE_CUBE_MAP,F);for(let st=0;st<6;st++)if(F.mipmaps&&F.mipmaps.length>0)for(let lt=0;lt<F.mipmaps.length;lt++)ut(Z.__webglFramebuffer[st][lt],V,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else ut(Z.__webglFramebuffer[st],V,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);m(F)&&_(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,lt=rt.length;st<lt;st++){let bt=rt[st],Nt=n.get(bt),St=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(St=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Nt.__webglTexture),it(St,bt),ut(Z.__webglFramebuffer,V,bt,i.COLOR_ATTACHMENT0+st,St,0),m(bt)&&_(St)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(st=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,tt.__webglTexture),it(st,F),F.mipmaps&&F.mipmaps.length>0)for(let lt=0;lt<F.mipmaps.length;lt++)ut(Z.__webglFramebuffer[lt],V,F,i.COLOR_ATTACHMENT0,st,lt);else ut(Z.__webglFramebuffer,V,F,i.COLOR_ATTACHMENT0,st,0);m(F)&&_(st),e.unbindTexture()}V.depthBuffer&&Mt(V)}function zt(V){let F=V.textures;for(let Z=0,tt=F.length;Z<tt;Z++){let rt=F[Z];if(m(rt)){let mt=y(V),xt=n.get(rt).__webglTexture;e.bindTexture(mt,xt),_(mt),e.unbindTexture()}}}let fe=[],He=[];function fn(V){if(V.samples>0){if(Ue(V)===!1){let F=V.textures,Z=V.width,tt=V.height,rt=i.COLOR_BUFFER_BIT,mt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(V),st=F.length>1;if(st)for(let bt=0;bt<F.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let lt=V.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<F.length;bt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Nt=n.get(F[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Nt,0)}i.blitFramebuffer(0,0,Z,tt,0,0,Z,tt,rt,i.NEAREST),l===!0&&(fe.length=0,He.length=0,fe.push(i.COLOR_ATTACHMENT0+bt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(fe.push(mt),He.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let bt=0;bt<F.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Nt=n.get(F[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Nt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let F=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function Re(V){return Math.min(r.maxSamples,V.samples)}function Ue(V){let F=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function q(V){let F=o.render.frame;f.get(V)!==F&&(f.set(V,F),V.update())}function Qe(V,F){let Z=V.colorSpace,tt=V.format,rt=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||Z!==vs&&Z!==ui&&(oe.getTransfer(Z)===ge?(tt!==Sn||rt!==_n)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",Z)),F}function xe(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=I,this.getTextureUnits=A,this.setTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=Ot,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function jv(i,t){function e(n,r=ui){let s,o=oe.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===ka)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===tu)return i.BYTE;if(n===eu)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Ba)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===ru)return i.ALPHA;if(n===su)return i.RGB;if(n===Sn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===ou)return i.RED;if(n===Va)return i.RED_INTEGER;if(n===Oi)return i.RG;if(n===Ga)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===Ys)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===Xa||n===Ya||n===qa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Wa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$a||n===Za||n===Ka||n===Ja||n===ja||n===qs||n===Qa)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===$a||n===Za)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ka)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ja)return s.COMPRESSED_R11_EAC;if(n===ja)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===Qa)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ul)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pl||n===ml||n===gl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===pl)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===bl||n===$s||n===_l)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===_l)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Qv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ty=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:Qv,fragmentShader:ty,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Du=class extends Hn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",p=new Fu,m={},_=e.getContextAttributes(),y=null,v=null,M=[],w=[],C=new ee,b=null,S=null,E=new rn;E.viewport=new Pe;let R=new rn;R.viewport=new Pe;let T=[E,R],I=new Fa,A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=M[Y];return $===void 0&&($=new Wr,M[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=M[Y];return $===void 0&&($=new Wr,M[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=M[Y];return $===void 0&&($=new Wr,M[Y]=$),$.getHandSpace()};function D(Y){let $=w.indexOf(Y.inputSource);if($===-1)return;let at=M[$];at!==void 0&&(at.update(Y.inputSource,Y.frame,c||o),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",O);for(let Y=0;Y<M.length;Y++){let $=w[Y];$!==null&&(w[Y]=null,M[Y].disconnect($))}A=null,P=null,p.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(y),d=null,h=null,u=null,r=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(C.width,C.height,!1),S!==null){let Y=S.camera;Y.fov=S.fov,Y.zoom=S.zoom,Y.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",L),r.addEventListener("inputsourceschange",O),_.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,ct=null,ut=null;_.depth&&(ut=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=_.stencil?Ui:Gn,ct=_.stencil?Jr:Fn);let pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(pt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new on(h.textureWidth,h.textureHeight,{format:Sn,type:_n,depthTexture:new Ci(h.textureWidth,h.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let at={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new on(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(Y){for(let $=0;$<Y.removed.length;$++){let at=Y.removed[$],ct=w.indexOf(at);ct>=0&&(w[ct]=null,M[ct].disconnect(at))}for(let $=0;$<Y.added.length;$++){let at=Y.added[$],ct=w.indexOf(at);if(ct===-1){for(let pt=0;pt<M.length;pt++)if(pt>=w.length){w.push(at),ct=pt;break}else if(w[pt]===null){w[pt]=at,ct=pt;break}if(ct===-1)break}let ut=M[ct];ut&&ut.connect(at)}}let B=new H,k=new H;function z(Y,$,at){B.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(at.matrixWorld);let ct=B.distanceTo(k),ut=$.projectionMatrix.elements,pt=at.projectionMatrix.elements,gt=ut[14]/(ut[10]-1),Mt=ut[14]/(ut[10]+1),Ot=(ut[9]+1)/ut[5],ie=(ut[9]-1)/ut[5],zt=(ut[8]-1)/ut[0],fe=(pt[8]+1)/pt[0],He=gt*zt,fn=gt*fe,Re=ct/(-zt+fe),Ue=Re*-zt;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(Re),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ut[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let q=gt+Re,Qe=Mt+Re,xe=He-Ue,V=fn+(ct-Ue),F=Ot*Mt/Qe*q,Z=ie*Mt/Qe*q;Y.projectionMatrix.makePerspective(xe,V,F,Z,q,Qe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let $=Y.near,at=Y.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(at=p.depthFar)),I.near=R.near=E.near=$,I.far=R.far=E.far=at,(A!==I.near||P!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),A=I.near,P=I.far),I.layers.mask=Y.layers.mask|6,E.layers.mask=I.layers.mask&-5,R.layers.mask=I.layers.mask&-3;let ct=Y.parent,ut=I.cameras;et(I,ct);for(let pt=0;pt<ut.length;pt++)et(ut[pt],ct);ut.length===2?z(I,E,R):I.projectionMatrix.copy(E.projectionMatrix),S===null&&Y.isPerspectiveCamera&&(S={camera:Y,fov:Y.fov,zoom:Y.zoom}),G(Y,I,ct)};function G(Y,$,at){at===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ua*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(I)},this.getCameraTexture=function(Y){return m[Y]};let J=null;function it(Y,$){if(f=$.getViewerPose(c||o),g=$,f!==null){let at=f.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let ct=!1;at.length!==I.cameras.length&&(I.cameras.length=0,ct=!0);for(let Mt=0;Mt<at.length;Mt++){let Ot=at[Mt],ie=null;if(d!==null)ie=d.getViewport(Ot);else{let fe=u.getViewSubImage(h,Ot);ie=fe.viewport,Mt===0&&(t.setRenderTargetTextures(v,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(v))}let zt=T[Mt];zt===void 0&&(zt=new rn,zt.layers.enable(Mt),zt.viewport=new Pe,T[Mt]=zt),zt.matrix.fromArray(Ot.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ot.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ie.x,ie.y,ie.width,ie.height),Mt===0&&(I.matrix.copy(zt.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),ct===!0&&I.cameras.push(zt)}let ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Mt=u.getDepthInformation(at[0]);Mt&&Mt.isValid&&Mt.texture&&p.init(Mt,r.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Mt=0;Mt<at.length;Mt++){let Ot=at[Mt].camera;if(Ot){let ie=m[Ot];ie||(ie=new Rs,m[Ot]=ie);let zt=u.getCameraImage(Ot);ie.sourceTexture=zt}}}}for(let at=0;at<M.length;at++){let ct=w[at],ut=M[at];ct!==null&&ut!==void 0&&ut.update(ct,$,c||o)}J&&J(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ht=new Td;ht.setAnimationLoop(it),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}},ey=new Te,Id=new $t;Id.set(-1,0,0,0,1,0,0,0,1);function ny(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,hu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,_,y,v){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),f(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&d(p,m,v)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,_,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _=t.get(m),y=_.envMap,v=_.envMapRotation;y&&(p.envMap.value=y,p.envMapRotation.value.setFromMatrix4(ey.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Id),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function f(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===je&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let _=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function iy(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(p(v),w=f(v),r[v.id]=w,v.addEventListener("dispose",_));let C=M.program;n.updateUBOMapping(v,C);let b=t.render.frame;s[v.id]!==b&&(h(v),s[v.id]=b)}function f(v){let M=u();v.__bindingPointIndex=M;let w=i.createBuffer(),C=v.__size,b=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,C,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=r[v.id],w=v.uniforms,C=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,S=w.length;b<S;b++){let E=w[b];if(Array.isArray(E))for(let R=0,T=E.length;R<T;R++)d(E[R],b,R,C);else d(E,b,0,C)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,C){if(x(v,M,w,C)===!0){let b=v.__offset,S=v.value;if(Array.isArray(S)){let E=0;for(let R=0;R<S.length;R++){let T=S[R],I=m(T);g(T,v.__data,E),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(E+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,v.__data)}}function g(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function x(v,M,w,C){let b=v.value,S=M+"_"+w;if(C[S]===void 0)return typeof b=="number"||typeof b=="boolean"?C[S]=b:ArrayBuffer.isView(b)?C[S]=b.slice():C[S]=b.clone(),!0;{let E=C[S];if(typeof b=="number"||typeof b=="boolean"){if(E!==b)return C[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(E.equals(b)===!1)return E.copy(b),!0}}return!1}function p(v){let M=v.uniforms,w=0,C=16;for(let S=0,E=M.length;S<E;S++){let R=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,I=R.length;T<I;T++){let A=R[T],P=Array.isArray(A.value)?A.value:[A.value];for(let D=0,L=P.length;D<L;D++){let O=P[D],B=m(O),k=w%C,z=k%B.boundary,et=k+z;w+=z,et!==0&&C-et<B.storage&&(w+=C-et),A.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,w+=B.storage}}}let b=w%C;return b>0&&(w+=C-b),v.__size=w,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),M}function _(v){let M=v.target;M.removeEventListener("dispose",_);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var ry=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function sy(){return $n===null&&($n=new pa(ry,16,16,Oi,Nn),$n.name="DFG_LUT",$n.minFilter=Ke,$n.magFilter=Ke,$n.wrapS=xn,$n.wrapT=xn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var lr=class{constructor(t={}){let{canvas:e=Yf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,p=new Set([Ha,Ga,Va]),m=new Set([_n,Fn,Kr,Jr,ka,za]),_=new Uint32Array(4),y=new Int32Array(4),v=new H,M=null,w=null,C=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,R=!1,T=null,I=null,A=null,P=null;this._outputColorSpace=De;let D=0,L=0,O=null,B=-1,k=null,z=new Pe,et=new Pe,G=null,J=new K(0),it=0,ht=e.width,Y=e.height,$=1,at=null,ct=null,ut=new Pe(0,0,ht,Y),pt=new Pe(0,0,ht,Y),gt=!1,Mt=new Es,Ot=!1,ie=!1,zt=new Te,fe=new H,He=new Pe,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Ue(){return O===null?$:1}let q=n;function Qe(U,W){return e.getContext(U,W)}let xe,V,F,Z,tt,rt,mt,xt,st,lt,bt,Nt,St,_t,Ut,Ht,Jt,X,vt,ot,yt,At,ft;try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ve,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",En,!1),q===null){let W="webgl2";if(q=Qe(W,U),q===null)throw Qe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(U){throw e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Xt("WebGLRenderer: "+U.message),U}function Bt(){xe=new f_(q),xe.init(),yt=new jv(q,xe),V=new n_(q,xe,t,yt),F=new Kv(q,xe),V.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),I=q.createFramebuffer(),A=q.createFramebuffer(),P=q.createFramebuffer(),Z=new m_(q),tt=new Uv,rt=new Jv(q,xe,F,tt,V,yt,Z),mt=new h_(E),xt=new xg(q),At=new t_(q,xt),st=new d_(q,xt,Z,At),lt=new x_(q,st,xt,At,Z),X=new g_(q,V,rt),Ut=new i_(tt),bt=new Nv(E,mt,xe,V,At,Ut),Nt=new ny(E,tt),St=new Bv,_t=new Wv(xe),Jt=new Qb(E,mt,F,lt,g,l),Ht=new Zv(E,lt,V),ft=new iy(q,Z,V,F),vt=new e_(q,xe,Z),ot=new p_(q,xe,Z),Z.programs=bt.programs,E.capabilities=V,E.extensions=xe,E.properties=tt,E.renderLists=St,E.shadowMap=Ht,E.state=F,E.info=Z}x!==_n&&(S=new __(x,e.width,e.height,a,r,s));let Ft=new Du(E,q);this.xr=Ft,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let U=xe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=xe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(ht,Y,!1))},this.getSize=function(U){return U.set(ht,Y)},this.setSize=function(U,W,nt=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=U,Y=W,e.width=Math.floor(U*$),e.height=Math.floor(W*$),nt===!0&&(e.style.width=U+"px",e.style.height=W+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,U,W)},this.getDrawingBufferSize=function(U){return U.set(ht*$,Y*$).floor()},this.setDrawingBufferSize=function(U,W,nt){ht=U,Y=W,$=nt,e.width=Math.floor(U*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,U,W)},this.setEffects=function(U){if(x===_n){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let W=0;W<U.length;W++)if(U[W].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(ut)},this.setViewport=function(U,W,nt,j){U.isVector4?ut.set(U.x,U.y,U.z,U.w):ut.set(U,W,nt,j),F.viewport(z.copy(ut).multiplyScalar($).round())},this.getScissor=function(U){return U.copy(pt)},this.setScissor=function(U,W,nt,j){U.isVector4?pt.set(U.x,U.y,U.z,U.w):pt.set(U,W,nt,j),F.scissor(et.copy(pt).multiplyScalar($).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(U){F.setScissorTest(gt=U)},this.setOpaqueSort=function(U){at=U},this.setTransparentSort=function(U){ct=U},this.getClearColor=function(U){return U.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(U=!0,W=!0,nt=!0){let j=0;if(U){let Q=!1;if(O!==null){let Et=O.texture.format;Q=p.has(Et)}if(Q){let Et=O.texture.type,Ct=m.has(Et),Tt=Jt.getClearColor(),It=Jt.getClearAlpha(),Dt=Tt.r,Qt=Tt.g,re=Tt.b;Ct?(_[0]=Dt,_[1]=Qt,_[2]=re,_[3]=It,q.clearBufferuiv(q.COLOR,0,_)):(y[0]=Dt,y[1]=Qt,y[2]=re,y[3]=It,q.clearBufferiv(q.COLOR,0,y))}else j|=q.COLOR_BUFFER_BIT}W&&(j|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&q.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),T=U},this.dispose=function(){e.removeEventListener("webglcontextlost",ve,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Jt.dispose(),St.dispose(),_t.dispose(),tt.dispose(),mt.dispose(),lt.dispose(),At.dispose(),ft.dispose(),bt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Th),Ft.removeEventListener("sessionend",Eh),qi.stop()};function ve(U){U.preventDefault(),uu("WebGLRenderer: Context Lost."),R=!0}function pe(){uu("WebGLRenderer: Context Restored."),R=!1;let U=Z.autoReset,W=Ht.enabled,nt=Ht.autoUpdate,j=Ht.needsUpdate,Q=Ht.type;Bt(),Z.autoReset=U,Ht.enabled=W,Ht.autoUpdate=nt,Ht.needsUpdate=j,Ht.type=Q}function En(U){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function kn(U){let W=U.target;W.removeEventListener("dispose",kn),h0(W)}function h0(U){f0(U),tt.remove(U)}function f0(U){let W=tt.get(U).programs;W!==void 0&&(W.forEach(function(nt){bt.releaseProgram(nt)}),U.isShaderMaterial&&bt.releaseShaderCache(U))}this.renderBufferDirect=function(U,W,nt,j,Q,Et){W===null&&(W=fn);let Ct=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Tt=m0(U,W,nt,j,Q);F.setMaterial(j,Ct);let It=nt.index,Dt=1;if(j.wireframe===!0){if(It=st.getWireframeAttribute(nt),It===void 0)return;Dt=2}let Qt=nt.drawRange,re=nt.attributes.position,Lt=Qt.start*Dt,me=(Qt.start+Qt.count)*Dt;Et!==null&&(Lt=Math.max(Lt,Et.start*Dt),me=Math.min(me,(Et.start+Et.count)*Dt)),It!==null?(Lt=Math.max(Lt,0),me=Math.min(me,It.count)):re!=null&&(Lt=Math.max(Lt,0),me=Math.min(me,re.count));let Oe=me-Lt;if(Oe<0||Oe===1/0)return;At.setup(Q,j,Tt,nt,It);let Me,_e=vt;if(It!==null&&(Me=xt.get(It),_e=ot,_e.setIndex(Me)),Q.isMesh)j.wireframe===!0?(F.setLineWidth(j.wireframeLinewidth*Ue()),_e.setMode(q.LINES)):_e.setMode(q.TRIANGLES);else if(Q.isLine){let tn=j.linewidth;tn===void 0&&(tn=1),F.setLineWidth(tn*Ue()),Q.isLineSegments?_e.setMode(q.LINES):Q.isLineLoop?_e.setMode(q.LINE_LOOP):_e.setMode(q.LINE_STRIP)}else Q.isPoints?_e.setMode(q.POINTS):Q.isSprite&&_e.setMode(q.TRIANGLES);if(Q.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))_e.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let tn=Q._multiDrawStarts,Rt=Q._multiDrawCounts,un=Q._multiDrawCount,ce=It?xt.get(It).bytesPerElement:1,vn=tt.get(j).currentProgram.getUniforms();for(let zn=0;zn<un;zn++)vn.setValue(q,"_gl_DrawID",zn),_e.render(tn[zn]/ce,Rt[zn])}else if(Q.isInstancedMesh)_e.renderInstances(Lt,Oe,Q.count);else if(nt.isInstancedBufferGeometry){let tn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Rt=Math.min(nt.instanceCount,tn);_e.renderInstances(Lt,Oe,Rt)}else _e.render(Lt,Oe)};function wh(U,W,nt,j){T!==null&&U.isNodeMaterial&&T.setObject(j,U),Ot===!0&&Ut.setState(U,nt,!1),U.transparent===!0&&U.side===de&&U.forceSinglePass===!1?(U.side=je,U.needsUpdate=!0,Eo(U,W,j),U.side=Yn,U.needsUpdate=!0,Eo(U,W,j),U.side=de):Eo(U,W,j)}this.compile=function(U,W,nt=null){nt===null&&(nt=U),T!==null&&T.renderStart(U,W,nt),w=_t.get(nt),w.init(W),b.push(w),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),U!==nt&&U.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),ie=this.localClippingEnabled,Ot=Ut.init(this.clippingPlanes,ie),Ot===!0&&Ut.setGlobalState(this.clippingPlanes,W),T!==null&&Ht.render(w.state.shadowsArray,nt,W);let j=new Set;return U.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Et=Q.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let Tt=Et[Ct];wh(Tt,nt,W,Q),j.add(Tt)}else wh(Et,nt,W,Q),j.add(Et)}),w=b.pop(),T!==null&&T.renderEnd(),j},this.compileAsync=function(U,W,nt=null){let j=this.compile(U,W,nt);return new Promise(Q=>{function Et(){if(j.forEach(function(Ct){let It=tt.get(Ct).currentProgram;(It===void 0||It.isReady())&&j.delete(Ct)}),j.size===0){Q(U);return}setTimeout(Et,10)}xe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let sc=null;function d0(U){sc&&sc(U)}function Th(){qi.stop()}function Eh(){qi.start()}let qi=new Td;qi.setAnimationLoop(d0),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(U){sc=U,Ft.setAnimationLoop(U),U===null?qi.stop():qi.start()},Ft.addEventListener("sessionstart",Th),Ft.addEventListener("sessionend",Eh),this.render=function(U,W){if(W!==void 0&&W.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;T!==null&&T.renderStart(U,W);let nt=Ft.enabled===!0&&Ft.isPresenting===!0,j=S!==null&&(O===null||nt)&&S.begin(E,O);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(W),W=Ft.getCamera()),U.isScene===!0&&U.onBeforeRender(E,U,W,O),w=_t.get(U,b.length),w.init(W),w.state.textureUnits=rt.getTextureUnits(),b.push(w),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(zt,In,W.reversedDepth),ie=this.localClippingEnabled,Ot=Ut.init(this.clippingPlanes,ie),M=St.get(U,C.length),M.init(),C.push(M),Ft.enabled===!0&&Ft.isPresenting===!0){let Ct=E.xr.getDepthSensingMesh();Ct!==null&&oc(Ct,W,-1/0,E.sortObjects)}oc(U,W,0,E.sortObjects),M.finish(),T!==null&&T.updateLights(w.state.lightsArray),E.sortObjects===!0&&M.sort(at,ct),Re=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Re&&Jt.addToRenderList(M,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&Ut.beginShadows();let Q=w.state.shadowsArray;if(Ht.render(Q,U,W),Ot===!0&&Ut.endShadows(),(j&&S.hasRenderPass())===!1){let Ct=M.opaque,Tt=M.transmissive;if(w.setupLights(),W.isArrayCamera){let It=W.cameras;if(Tt.length>0)for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let re=It[Dt];Rh(Ct,Tt,U,re)}Re&&Jt.render(U);for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let re=It[Dt];Ah(M,U,re,re.viewport)}}else Tt.length>0&&Rh(Ct,Tt,U,W),Re&&Jt.render(U),Ah(M,U,W)}O!==null&&L===0&&(rt.updateMultisampleRenderTarget(O),rt.updateRenderTargetMipmap(O)),j&&S.end(E),U.isScene===!0&&U.onAfterRender(E,U,W),At.resetDefaultState(),B=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],rt.setTextureUnits(w.state.textureUnits),Ot===!0&&Ut.setGlobalState(E.clippingPlanes,w.state.camera)):w=null,C.pop(),C.length>0?M=C[C.length-1]:M=null,T!==null&&T.renderEnd()};function oc(U,W,nt,j){if(U.visible===!1)return;if(U.layers.test(W.layers)){if(U.isGroup)nt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(W);else if(U.isLightProbeGrid)w.pushLightProbeGrid(U);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(Mt)){j&&He.setFromMatrixPosition(U.matrixWorld).applyMatrix4(zt);let Ct=lt.update(U),Tt=U.material;Tt.visible&&M.push(U,Ct,Tt,nt,He.z,null,W)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(Mt))){let Ct=lt.update(U),Tt=U.material;if(j&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),He.copy(U.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),He.copy(Ct.boundingSphere.center)),He.applyMatrix4(U.matrixWorld).applyMatrix4(zt)),Array.isArray(Tt)){let It=Ct.groups;for(let Dt=0,Qt=It.length;Dt<Qt;Dt++){let re=It[Dt],Lt=Tt[re.materialIndex];Lt&&Lt.visible&&M.push(U,Ct,Lt,nt,He.z,re,W)}}else Tt.visible&&M.push(U,Ct,Tt,nt,He.z,null,W)}}let Et=U.children;for(let Ct=0,Tt=Et.length;Ct<Tt;Ct++)oc(Et[Ct],W,nt,j)}function Ah(U,W,nt,j){let{opaque:Q,transmissive:Et,transparent:Ct}=U;w.setupLightsView(nt),Ot===!0&&Ut.setGlobalState(E.clippingPlanes,nt),j&&F.viewport(z.copy(j)),Q.length>0&&To(Q,W,nt),Et.length>0&&To(Et,W,nt),Ct.length>0&&To(Ct,W,nt),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Rh(U,W,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){let Lt=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new on(1,1,{generateMipmaps:!0,type:Lt?Nn:_n,minFilter:Ni,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Et=w.state.transmissionRenderTarget[j.id],Ct=j.viewport||z;Et.setSize(Ct.z*E.transmissionResolutionScale,Ct.w*E.transmissionResolutionScale);let Tt=E.getRenderTarget(),It=E.getActiveCubeFace(),Dt=E.getActiveMipmapLevel();E.setRenderTarget(Et),E.getClearColor(J),it=E.getClearAlpha(),it<1&&E.setClearColor(16777215,.5),E.clear(),Re&&Jt.render(nt);let Qt=E.toneMapping;E.toneMapping=Ln;let re=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),Ot===!0&&Ut.setGlobalState(E.clippingPlanes,j),To(U,nt,j),rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let me=0,Oe=W.length;me<Oe;me++){let Me=W[me],{object:_e,geometry:tn,material:Rt,group:un}=Me;if(Rt.side===de&&_e.layers.test(j.layers)){let ce=Rt.side;Rt.side=je,Rt.needsUpdate=!0,Ch(_e,nt,j,tn,Rt,un),Rt.side=ce,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et))}E.setRenderTarget(Tt,It,Dt),E.setClearColor(J,it),re!==void 0&&(j.viewport=re),E.toneMapping=Qt}function To(U,W,nt){let j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Et=U.length;Q<Et;Q++){let Ct=U[Q],{object:Tt,geometry:It,group:Dt}=Ct,Qt=Ct.material;Qt.allowOverride===!0&&j!==null&&(Qt=j),Tt.layers.test(nt.layers)&&Ch(Tt,W,nt,It,Qt,Dt)}}function Ch(U,W,nt,j,Q,Et){T!==null&&Q.isNodeMaterial&&T.setObject(U,Q),U.onBeforeRender(E,W,nt,j,Q,Et),U.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Q.onBeforeRender(E,W,nt,j,U,Et),Q.transparent===!0&&Q.side===de&&Q.forceSinglePass===!1?(Q.side=je,Q.needsUpdate=!0,E.renderBufferDirect(nt,W,j,Q,U,Et),Q.side=Yn,Q.needsUpdate=!0,E.renderBufferDirect(nt,W,j,Q,U,Et),Q.side=de):E.renderBufferDirect(nt,W,j,Q,U,Et),U.onAfterRender(E,W,nt,j,Q,Et)}function Eo(U,W,nt){W.isScene!==!0&&(W=fn);let j=tt.get(U),Q=w.state.lights,Et=w.state.shadowsArray,Ct=Q.state.version,Tt=bt.getParameters(U,Q.state,Et,W,nt,w.state.lightProbeGridArray),It=bt.getProgramCacheKey(Tt),Dt=j.programs;j.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let Qt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;j.envMap=mt.get(U.envMap||j.environment,Qt),j.envMapRotation=j.environment!==null&&U.envMap===null?W.environmentRotation:U.envMapRotation,Dt===void 0&&(U.addEventListener("dispose",kn),Dt=new Map,j.programs=Dt);let re=Dt.get(It);if(re!==void 0){if(j.currentProgram===re&&j.lightsStateVersion===Ct)return Ih(U,Tt),re}else Tt.uniforms=bt.getUniforms(U),T!==null&&U.isNodeMaterial&&T.build(U,nt,Tt),U.onBeforeCompile(Tt,E),re=bt.acquireProgram(Tt,It),Dt.set(It,re),j.uniforms=Tt.uniforms;let Lt=j.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Lt.clippingPlanes=Ut.uniform),Ih(U,Tt),j.needsLights=x0(U),j.lightsStateVersion=Ct,j.needsLights&&(Lt.ambientLightColor.value=Q.state.ambient,Lt.lightProbe.value=Q.state.probe,Lt.sunLights.value=Q.state.sun,Lt.sunLightShadows.value=Q.state.sunShadow,Lt.directionalLights.value=Q.state.directional,Lt.directionalLightShadows.value=Q.state.directionalShadow,Lt.spotLights.value=Q.state.spot,Lt.spotLightShadows.value=Q.state.spotShadow,Lt.rectAreaLights.value=Q.state.rectArea,Lt.ltc_1.value=Q.state.rectAreaLTC1,Lt.ltc_2.value=Q.state.rectAreaLTC2,Lt.pointLights.value=Q.state.point,Lt.pointLightShadows.value=Q.state.pointShadow,Lt.hemisphereLights.value=Q.state.hemi,Lt.sunShadowMatrix.value=Q.state.sunShadowMatrix,Lt.sunShadowCascade.value=Q.state.sunShadowCascade,Lt.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Lt.spotLightMatrix.value=Q.state.spotLightMatrix,Lt.spotLightMap.value=Q.state.spotLightMap,Lt.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=w.state.lightProbeGridArray.length>0,j.currentProgram=re,j.uniformsList=null,re}function Ph(U){if(U.uniformsList===null){let W=U.currentProgram.getUniforms();U.uniformsList=ts.seqWithValue(W.seq,U.uniforms)}return U.uniformsList}function Ih(U,W){let nt=tt.get(U);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function p0(U,W){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;v.setFromMatrixPosition(W.matrixWorld);for(let nt=0,j=U.length;nt<j;nt++){let Q=U[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(v))return Q}return null}function m0(U,W,nt,j,Q){W.isScene!==!0&&(W=fn),rt.resetTextureUnits();let Et=W.fog,Ct=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Tt=O===null?E.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:oe.workingColorSpace,It=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Dt=mt.get(j.envMap||Ct,It),Qt=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,re=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Lt=!!nt.morphAttributes.position,me=!!nt.morphAttributes.normal,Oe=!!nt.morphAttributes.color,Me=Ln;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Me=E.toneMapping);let _e=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,tn=_e!==void 0?_e.length:0,Rt=tt.get(j),un=w.state.lights;if(Ot===!0&&(ie===!0||U!==k)){let ye=U===k&&j.id===B;Ut.setState(j,U,ye)}let ce=!1;j.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==un.state.version||Rt.outputColorSpace!==Tt||Q.isBatchedMesh&&Rt.batching===!1||!Q.isBatchedMesh&&Rt.batching===!0||Q.isBatchedMesh&&Rt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Rt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Rt.instancing===!1||!Q.isInstancedMesh&&Rt.instancing===!0||Q.isSkinnedMesh&&Rt.skinning===!1||!Q.isSkinnedMesh&&Rt.skinning===!0||Q.isInstancedMesh&&Rt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Rt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Rt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Rt.instancingMorph===!1&&Q.morphTexture!==null||Rt.envMap!==Dt||j.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Ut.numPlanes||Rt.numIntersection!==Ut.numIntersection)||Rt.vertexAlphas!==Qt||Rt.vertexTangents!==re||Rt.morphTargets!==Lt||Rt.morphNormals!==me||Rt.morphColors!==Oe||Rt.toneMapping!==Me||Rt.morphTargetsCount!==tn||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Rt.__version=j.version);let vn=Rt.currentProgram;ce===!0&&(vn=Eo(j,W,Q),T&&j.isNodeMaterial&&T.onUpdateProgram(j,vn,Rt));let zn=!1,xi=!1,Mr=!1,be=vn.getUniforms(),Fe=Rt.uniforms;if(F.useProgram(vn.program)&&(zn=!0,xi=!0,Mr=!0),j.id!==B&&(B=j.id,xi=!0),Rt.needsLights){let ye=p0(w.state.lightProbeGridArray,Q);Rt.lightProbeGrid!==ye&&(Rt.lightProbeGrid=ye,xi=!0)}if(zn||k!==U){F.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),be.setValue(q,"projectionMatrix",U.projectionMatrix),be.setValue(q,"viewMatrix",U.matrixWorldInverse);let _i=be.map.cameraPosition;_i!==void 0&&_i.setValue(q,fe.setFromMatrixPosition(U.matrixWorld)),V.logarithmicDepthBuffer&&be.setValue(q,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(q,"isOrthographic",U.isOrthographicCamera===!0),k!==U&&(k=U,xi=!0,Mr=!0)}if(Rt.needsLights&&(un.state.sunShadowMap.length>0&&be.setValue(q,"sunShadowMap",un.state.sunShadowMap,rt),un.state.directionalShadowMap.length>0&&be.setValue(q,"directionalShadowMap",un.state.directionalShadowMap,rt),un.state.spotShadowMap.length>0&&be.setValue(q,"spotShadowMap",un.state.spotShadowMap,rt),un.state.pointShadowMap.length>0&&be.setValue(q,"pointShadowMap",un.state.pointShadowMap,rt)),Q.isSkinnedMesh){be.setOptional(q,Q,"bindMatrix"),be.setOptional(q,Q,"bindMatrixInverse");let ye=Q.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),be.setValue(q,"boneTexture",ye.boneTexture,rt))}Q.isBatchedMesh&&(be.setOptional(q,Q,"batchingTexture"),be.setValue(q,"batchingTexture",Q._matricesTexture,rt),be.setOptional(q,Q,"batchingIdTexture"),be.setValue(q,"batchingIdTexture",Q._indirectTexture,rt),be.setOptional(q,Q,"batchingColorTexture"),Q._colorsTexture!==null&&be.setValue(q,"batchingColorTexture",Q._colorsTexture,rt));let bi=nt.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&X.update(Q,nt,vn),(xi||Rt.receiveShadow!==Q.receiveShadow)&&(Rt.receiveShadow=Q.receiveShadow,be.setValue(q,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Fe.envMapIntensity.value=W.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=sy()),xi){if(be.setValue(q,"toneMappingExposure",E.toneMappingExposure),Rt.needsLights&&g0(Fe,Mr),Et&&j.fog===!0&&Nt.refreshFogUniforms(Fe,Et),Nt.refreshMaterialUniforms(Fe,j,$,Y,w.state.transmissionRenderTarget[U.id]),Rt.needsLights&&Rt.lightProbeGrid){let ye=Rt.lightProbeGrid;Fe.probesSH.value=ye.texture,Fe.probesMin.value.copy(ye.boundingBox.min),Fe.probesMax.value.copy(ye.boundingBox.max),Fe.probesResolution.value.copy(ye.resolution)}ts.upload(q,Ph(Rt),Fe,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ts.upload(q,Ph(Rt),Fe,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(q,"center",Q.center),be.setValue(q,"modelViewMatrix",Q.modelViewMatrix),be.setValue(q,"normalMatrix",Q.normalMatrix),be.setValue(q,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let ye=j.uniformsGroups;for(let _i=0,Sr=ye.length;_i<Sr;_i++){let Fh=ye[_i];ft.update(Fh,vn),ft.bind(Fh,vn)}}return vn}function g0(U,W){U.ambientLightColor.needsUpdate=W,U.lightProbe.needsUpdate=W,U.sunLights.needsUpdate=W,U.sunLightShadows.needsUpdate=W,U.directionalLights.needsUpdate=W,U.directionalLightShadows.needsUpdate=W,U.pointLights.needsUpdate=W,U.pointLightShadows.needsUpdate=W,U.spotLights.needsUpdate=W,U.spotLightShadows.needsUpdate=W,U.rectAreaLights.needsUpdate=W,U.hemisphereLights.needsUpdate=W}function x0(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(U,W,nt){let j=tt.get(U);j.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),tt.get(U.texture).__webglTexture=W,tt.get(U.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,W){let nt=tt.get(U);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(U,W=0,nt=0){O=U,D=W,L=nt;let j=null,Q=!1,Et=!1;if(U){let Tt=tt.get(U);if(Tt.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(q.FRAMEBUFFER,Tt.__webglFramebuffer),z.copy(U.viewport),et.copy(U.scissor),G=U.scissorTest,F.viewport(z),F.scissor(et),F.setScissorTest(G),B=-1;return}else if(Tt.__webglFramebuffer===void 0)rt.setupRenderTarget(U);else if(Tt.__hasExternalTextures)rt.rebindTextures(U,tt.get(U.texture).__webglTexture,tt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let Qt=U.depthTexture;if(Tt.__boundDepthTexture!==Qt){if(Qt!==null&&tt.has(Qt)&&(U.width!==Qt.image.width||U.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(U)}}let It=U.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Dt=tt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Dt[W])?j=Dt[W][nt]:j=Dt[W],Q=!0):U.samples>0&&rt.useMultisampledRTT(U)===!1?j=tt.get(U).__webglMultisampledFramebuffer:Array.isArray(Dt)?j=Dt[nt]:j=Dt,z.copy(U.viewport),et.copy(U.scissor),G=U.scissorTest}else z.copy(ut).multiplyScalar($).floor(),et.copy(pt).multiplyScalar($).floor(),G=gt;if(nt!==0&&(j=I),F.bindFramebuffer(q.FRAMEBUFFER,j)&&F.drawBuffers(U,j),F.viewport(z),F.scissor(et),F.setScissorTest(G),Q){let Tt=tt.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,nt)}else if(Et){let Tt=W;for(let It=0;It<U.textures.length;It++){let Dt=tt.get(U.textures[It]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+It,Dt.__webglTexture,nt,Tt)}}else if(U!==null&&nt!==0){let Tt=tt.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Tt.__webglTexture,nt)}B=-1};function Lh(U){let W=tt.get(U);return(W.__readFormat!==U.format||W.__readType!==U.type)&&(W.__readFormat=U.format,W.__readType=U.type,W.__formatReadable=V.textureFormatReadable(U.format),W.__typeReadable=V.textureTypeReadable(U.type)),W}this.readRenderTargetPixels=function(U,W,nt,j,Q,Et,Ct,Tt=0){if(!(U&&U.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=tt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){F.bindFramebuffer(q.FRAMEBUFFER,It);try{let Dt=U.textures[Tt],Qt=Dt.format,re=Dt.type;U.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let Lt=Lh(Dt);if(Lt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=U.width-j&&nt>=0&&nt<=U.height-Q&&q.readPixels(W,nt,j,Q,yt.convert(Qt),yt.convert(re),Et)}finally{let Dt=O!==null?tt.get(O).__webglFramebuffer:null;F.bindFramebuffer(q.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(U,W,nt,j,Q,Et,Ct,Tt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=tt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(W>=0&&W<=U.width-j&&nt>=0&&nt<=U.height-Q){F.bindFramebuffer(q.FRAMEBUFFER,It);let Dt=U.textures[Tt],Qt=Dt.format,re=Dt.type;U.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let Lt=Lh(Dt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,me),q.bufferData(q.PIXEL_PACK_BUFFER,Et.byteLength,q.STREAM_READ),q.readPixels(W,nt,j,Q,yt.convert(Qt),yt.convert(re),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Oe=O!==null?tt.get(O).__webglFramebuffer:null;F.bindFramebuffer(q.FRAMEBUFFER,Oe);let Me=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await $f(q,Me,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,me),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Et),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(me),q.deleteSync(Me),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,W=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(U.image.width*j),Et=Math.floor(U.image.height*j),Ct=W!==null?W.x:0,Tt=W!==null?W.y:0;rt.setTexture2D(U,0),q.copyTexSubImage2D(q.TEXTURE_2D,nt,0,0,Ct,Tt,Q,Et),F.unbindTexture()},this.copyTextureToTexture=function(U,W,nt=null,j=null,Q=0,Et=0){let Ct,Tt,It,Dt,Qt,re,Lt,me,Oe,Me=U.isCompressedTexture?U.mipmaps[Et]:U.image;if(nt!==null)Ct=nt.max.x-nt.min.x,Tt=nt.max.y-nt.min.y,It=nt.isBox3?nt.max.z-nt.min.z:1,Dt=nt.min.x,Qt=nt.min.y,re=nt.isBox3?nt.min.z:0;else{let Fe=Math.pow(2,-Q);Ct=Math.floor(Me.width*Fe),Tt=Math.floor(Me.height*Fe),U.isDataArrayTexture?It=Me.depth:U.isData3DTexture?It=Math.floor(Me.depth*Fe):It=1,Dt=0,Qt=0,re=0}j!==null?(Lt=j.x,me=j.y,Oe=j.z):(Lt=0,me=0,Oe=0);let _e=yt.convert(W.format),tn=yt.convert(W.type),Rt;W.isData3DTexture?(rt.setTexture3D(W,0),Rt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Rt=q.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Rt=q.TEXTURE_2D),F.activeTexture(q.TEXTURE0),F.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),F.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),F.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);let un=F.getParameter(q.UNPACK_ROW_LENGTH),ce=F.getParameter(q.UNPACK_IMAGE_HEIGHT),vn=F.getParameter(q.UNPACK_SKIP_PIXELS),zn=F.getParameter(q.UNPACK_SKIP_ROWS),xi=F.getParameter(q.UNPACK_SKIP_IMAGES);F.pixelStorei(q.UNPACK_ROW_LENGTH,Me.width),F.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me.height),F.pixelStorei(q.UNPACK_SKIP_PIXELS,Dt),F.pixelStorei(q.UNPACK_SKIP_ROWS,Qt),F.pixelStorei(q.UNPACK_SKIP_IMAGES,re);let Mr=U.isDataArrayTexture||U.isData3DTexture,be=W.isDataArrayTexture||W.isData3DTexture;if(U.isDepthTexture){let Fe=tt.get(U),bi=tt.get(W),ye=tt.get(Fe.__renderTarget),_i=tt.get(bi.__renderTarget);F.bindFramebuffer(q.READ_FRAMEBUFFER,ye.__webglFramebuffer),F.bindFramebuffer(q.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let Sr=0;Sr<It;Sr++)Mr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(U).__webglTexture,Q,re+Sr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(W).__webglTexture,Et,Oe+Sr)),q.blitFramebuffer(Dt,Qt,Ct,Tt,Lt,me,Ct,Tt,q.DEPTH_BUFFER_BIT,q.NEAREST);F.bindFramebuffer(q.READ_FRAMEBUFFER,null),F.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Q!==0||U.isRenderTargetTexture||tt.has(U)){let Fe=tt.get(U),bi=tt.get(W);F.bindFramebuffer(q.READ_FRAMEBUFFER,A),F.bindFramebuffer(q.DRAW_FRAMEBUFFER,P);for(let ye=0;ye<It;ye++)Mr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fe.__webglTexture,Q,re+ye):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,Q),be?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,bi.__webglTexture,Et,Oe+ye):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,bi.__webglTexture,Et),Q!==0?q.blitFramebuffer(Dt,Qt,Ct,Tt,Lt,me,Ct,Tt,q.COLOR_BUFFER_BIT,q.NEAREST):be?q.copyTexSubImage3D(Rt,Et,Lt,me,Oe+ye,Dt,Qt,Ct,Tt):q.copyTexSubImage2D(Rt,Et,Lt,me,Dt,Qt,Ct,Tt);F.bindFramebuffer(q.READ_FRAMEBUFFER,null),F.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else be?U.isDataTexture||U.isData3DTexture?q.texSubImage3D(Rt,Et,Lt,me,Oe,Ct,Tt,It,_e,tn,Me.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,Et,Lt,me,Oe,Ct,Tt,It,_e,Me.data):q.texSubImage3D(Rt,Et,Lt,me,Oe,Ct,Tt,It,_e,tn,Me):U.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Et,Lt,me,Ct,Tt,_e,tn,Me.data):U.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Et,Lt,me,Me.width,Me.height,_e,Me.data):q.texSubImage2D(q.TEXTURE_2D,Et,Lt,me,Ct,Tt,_e,tn,Me);F.pixelStorei(q.UNPACK_ROW_LENGTH,un),F.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ce),F.pixelStorei(q.UNPACK_SKIP_PIXELS,vn),F.pixelStorei(q.UNPACK_SKIP_ROWS,zn),F.pixelStorei(q.UNPACK_SKIP_IMAGES,xi),Et===0&&W.generateMipmaps&&q.generateMipmap(Rt),F.unbindTexture()},this.initRenderTarget=function(U){tt.get(U).__webglFramebuffer===void 0&&rt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?rt.setTextureCube(U,0):U.isData3DTexture?rt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?rt.setTexture2DArray(U,0):rt.setTexture2D(U,0),F.unbindTexture()},this.resetState=function(){D=0,L=0,O=null,F.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function Ld(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Fd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var Dd=2.1;function Nu(i){return i.variant==="wall"}function Nd(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var oy=[],Uu=new Map,ay=0;function Qs(i){oy=i,Uu=new Map(i.flatMap(t=>t.items.map(e=>[ly(t.id,e.id),e]))),ay++}function ly(i,t){return`pack:${i}:${t}`}function Ud(i){return i.startsWith("pack:")}function Rl(i){return Ud(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Ou(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}var cy={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Od(i){var t;return(t=we(i))==null?void 0:t.parts.find(e=>e.screen)}function we(i){if(!Ud(i))return;let t=Uu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=cy[e];return r?Uu.get(`pack:${r}:${n.join(":")}`):void 0}function qe(i,t){let e=we(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return Cl;if(t.type==="access_point")return t.variant==="wall"?Dd:Math.max(0,i.height-Math.max(.005,t.h));if(Bd.has(t.type))return Math.max(0,i.height-kd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return zd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:hi(t)}}var hy={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},aE=Object.keys(hy),to=1;var ns={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Kn(i){return i==="hedge"||i==="fence"||i==="pergola"}function fy(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,f)=>r==="x"?c:r==="-x"?-c:r==="z"?f:-f,o=1/0,a=-1/0;for(let[c,f]of i.points){let u=s(c,f);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function dy(i,t,e,n){return cr(i,t)+ns[t.type]-eo(i,t,e,n)}var Bu=-.2,Pl={set:!1,level:Bu};function Vd(i){let t=(i==null?void 0:i.settings.terrain)??null;Pl={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??Bu}}function Il(i,t){return Pl.level}function Gd(i){return i.elevation>.3?0:Pl.set?Pl.level-i.elevation:Bu}function cr(i,t){return Gd(i)+(t.offset??0)}function eo(i,t,e,n){return t.type==="pool"?0:fy(t,e,n)}function Hd(i,t,e){let n=(i.outdoor??[]).filter(s=>!Kn(s.type)&&s.type!=="pool"&&jt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?dy(i,r,t,e):Gd(i)}function Ll(i,t){return cr(i,t)+(t.above?Xd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function py(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Xd(i):1.5}function ku(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Kn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>jt(n,e.points)))}function Wd(i,t){return!t.above&&!ku(i,t)?Fl(i,t)-.05:Ll(i,t)-py(t)}function Fl(i,t){return Ll(i,t)-.15}function Xd(i){return i.height&&i.height>.3?i.height:1.2}var my={type:"none",pitch:35,overhang:.4},hE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...my}};var Yd=.3;var qd=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Cl=1.75;var Bd=new Set(["lamp_downlight","lamp_spot"]);function kd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var $d=new Set(["stairs","stairs_u"]);function Zd(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),f=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:f,rise:e/n}}function Kd(i){var t;return qd.has(i)||!!((t=we(i))!=null&&t.light)}var gy=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var Dl=1.05,Nl=.3;function hi(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return Dl;case"wall_socket":return Nl;case"water_heater":return to;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function zd(i,t,e){var r;let n=0;for(let s of i.furniture)!(gy.has(s.type)||(r=we(s.type))!=null&&r.surface)||!jt([t,e],Bi(s))||(n=Math.max(n,s.h));return n}var uy=new Set([...qd,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var xy=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],by=["standard","bars","glass_wall"];function ur(i,t){return i.type==="door"?i.style&&xy.includes(i.style)?i.style:t?"front":"interior":i.style&&by.includes(i.style)?i.style:"standard"}function Jd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let f=s-.5;if(l+c>f){let h=Math.max(0,f)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function jd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Un(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Jn(i){return Math.abs(Un(i))}function hr(i){let t=Un(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Qd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function tp(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Bi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var $e=(i,t)=>[i[0]-t[0],i[1]-t[1]],ki=(i,t)=>[i[0]+t[0],i[1]+t[1]],fi=(i,t)=>[i[0]*t,i[1]*t],io=(i,t)=>i[0]*t[0]+i[1]*t[1],is=(i,t)=>i[0]*t[1]-i[1]*t[0],no=i=>Math.hypot(i[0],i[1]),jn=i=>{let t=no(i)||1;return[i[0]/t,i[1]/t]},ep=i=>[-i[1],i[0]],np=i=>[i[1],-i[0]];function di(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(Un(S))<1e-6)continue;let E=Un(S)>0,R=S.map(a);for(let T=0;T<S.length;T++){let I=R[T],A=R[(T+1)%S.length];I!==A&&l.push(E?{u:I,v:A,room:b.id,edge:T,forward:!0}:{u:A,v:I,room:b.id,edge:T,forward:!1})}}let c=s.map(b=>[a(b.a),a(b.b)]),f=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((E,R)=>{if(!E||R>=S.length)return;let T=S[R],I=$e(S[(R+1)%S.length],T),A=no(I);for(let P of E)P>n&&P<A-n&&f.add(a(ki(T,fi(I,P/A))))})}let u=[];for(let b of l){let S=o[b.u],E=o[b.v],R=$e(E,S),T=no(R),I=fi(R,1/T),A=[];for(let D=0;D<o.length;D++){if(D===b.u||D===b.v)continue;let L=$e(o[D],S),O=io(L,I);O<=n||O>=T-n||Math.abs(is(I,L))<=n&&A.push({t:O,id:D})}A.sort((D,L)=>D.t-L.t);let P=[{t:0,id:b.u},...A,{t:T,id:b.v}];for(let D=0;D+1<P.length;D++){let L=P[D],O=P[D+1],B=b.forward?L.t:T-O.t,k=b.forward?O.t:T-L.t;u.push({u:L.id,v:O.id,room:b.room,edge:b.edge,t0:B,t1:k})}}let h=new Map;for(let b of u){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,E=h.get(S);E||h.set(S,E=[]),E.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),g=new Map;for(let b of u){let S=`${b.room}:${b.edge}`;g.set(S,[...g.get(S)??[],b.t0].sort((E,R)=>E-R))}let x=b=>{var R,T;let S=(T=(R=i.find(I=>I.id===b.room))==null?void 0:R.wall_heights)==null?void 0:T[b.edge];if(!Array.isArray(S))return S;let E=g.get(`${b.room}:${b.edge}`)??[];return S[E.indexOf(b.t0)]??null},p=b=>{let S=b.map(x).filter(R=>typeof R=="number"&&R>0);if(S.length)return Math.min(...S);let E=b.map(R=>{var T;return(T=i.find(I=>I.id===R.room))==null?void 0:T.ceiling_height});return E.every(R=>typeof R=="number"&&R>0)?Math.max(...E):void 0},m=b=>{let S=b.map(E=>{var R,T;return(T=(R=i.find(I=>I.id===E.room))==null?void 0:R.wall_thickness)==null?void 0:T[E.edge]}).filter(E=>typeof E=="number"&&E>0);return S.length?Math.max(...S):void 0},_=b=>b.some(S=>x(S)===0),y=[],v=[];for(let b of h.values()){let S=b[0],E=b.find(R=>R!==S&&R.u===S.v&&R.v===S.u&&R.room!==S.room);for(let R of b)R!==S&&R!==E&&R.room!==S.room&&r.push(`overlap:${S.room}:${R.room}`);if(_(E?[S,E]:[S])){E&&y.push([S.room,E.room]);continue}if(E){let R=m([S,E])??t.interior;v.push({a:S.u,b:S.v,left:R/2,right:R/2,exterior:!1,roomLeft:S.room,roomRight:E.room,sources:[d(S),d(E)],height:p([S,E])})}else v.push({a:S.u,b:S.v,left:0,right:m([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:p([S])})}let M=b=>jn($e(o[b.b],o[b.a]));for(let b of v){if(b.exterior||b.free)continue;let S=new Set;for(let R of[b.a,b.b])for(let T of v)!T.exterior||T.free||T.a!==R&&T.b!==R||Math.abs(is(M(b),M(T)))>1e-6||(T.roomLeft===b.roomLeft?S.add("left"):T.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let E=b.left+b.right;S.has("left")?(b.left=0,b.right=E):(b.left=E,b.right=0)}s.forEach((b,S)=>{var D;let[E,R]=c[S];if(E===R)return;let T=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],I=((D=i.find(L=>L.points.length>=3&&jt(T,L.points)))==null?void 0:D.id)??null,A=(b.thickness??t.interior)/2,P=typeof b.height=="number"&&b.height>0?b.height:void 0;v.push({free:b.id,a:E,b:R,left:A,right:A,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:P})}),v=vy(v,o,f);let w=My(v,o);return{walls:v.map((b,S)=>{let E=o[b.a],R=o[b.b],T=w.get(`${S}:a`),I=w.get(`${S}:b`),A=Sy([T.right,I.left,R,I.right,T.left,E],1e-6);return{id:_y(E,R),a:[E[0],E[1]],b:[R[0],R[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:A,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:y}}function _y(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function ip(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function vy(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=ip(l)),c.a!==o&&(c=ip(c)),l.a===c.b)continue;let f=jn($e(t[l.b],t[l.a])),u=jn($e(t[c.b],t[c.a]));if(Math.abs(is(f,u))>1e-6||io(f,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:yy(l.sources,c.sources)},d=n.filter((g,x)=>x!==a[0]&&x!==a[1]);d.push(h),n.length=0,n.push(...d),r=!0;break}}return n}function yy(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function My(i,t){let e=new Map;i.forEach((r,s)=>{let o=jn($e(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:fi(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let f=e.get(l);f||e.set(l,f=[]),f.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,f)=>c.angle-f.angle);let a=c=>({left:ki(o,fi(ep(c.d),c.left)),right:ki(o,fi(np(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let f=s[c],u=s[(c+1)%s.length],h=ki(o,fi(ep(f.d),f.left)),d=ki(o,fi(np(u.d),u.right)),g=is(f.d,u.d);if(Math.abs(g)<1e-4)continue;let x=is($e(d,h),u.d)/g,p=ki(h,fi(f.d,x));no($e(p,o))>l||(n.get(f.key).left=p,n.get(u.key).right=p)}}return n}function Sy(i,t){let e=i.filter((r,s)=>no($e(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=$e(o,s),c=$e(a,o);if(Math.abs(is(jn(l),jn(c)))<1e-7&&io(l,c)>0){e=e.filter((f,u)=>u!==r),n=!0;break}}}return e}function zu(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=jn($e(r,n));return ki(n,fi(s,e))}function ro(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=jn($e(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,ki(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function so(i,t,e){if(!t.wall)return wy(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=zu(e.room,0,t.offset);return{wall:n,s:io($e(r,n.a),jn($e(n.b,n.a)))}}function wy(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=zu(t,e,n);return{wall:r,s:io($e(o,r.a),jn($e(r.b,r.a)))}}return null}var ao=Math.PI/180;function Qn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function wn(i){let t=Qn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ao),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ao);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=cp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var Ty=.14;function sp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function op(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!jt([t,e],s.points))continue;let[f,u]=zi(s,t,e),h=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((h?null:lo(ss(s,{u0:d,u1:d,a:d,b:d}),f,u))??wn(s).y(u))-Ty;n=n===null?x:Math.max(n,x)}return n}function Ul(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=rp([a[0]-o[0],a[1]-o[1]]),f=rp([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],h=[f[1]*n,-f[0]*n],d=u[0]+h[0],g=u[1]+h[1],x=Math.hypot(d,g);if(x<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let p=(d*u[0]+g*u[1])/x,m=Math.min(4,1/Math.max(.25,p));r.push([a[0]+d/x*t*m,a[1]+g/x*t*m])}return r}function rp(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function ap(i,t){if(i.points&&i.points.length>=3)return Ul(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function lp(i,t,e,n){let r=di(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])o.set(s(h),[...o.get(s(h))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],d=u.b;for(;;){let g=(o.get(s(d))??[]).find(x=>!l.has(x));if(!g||(l.add(g),d=s(g.a)===s(d)?g.b:g.a,s(d)===s(h[0])))break;h.push(d)}h.length>=3&&s(d)===s(h[0])&&(!c||Math.abs(Jn(h))>Math.abs(Jn(c)))&&(c=h)}if(!c)return null;let f=[];for(let u=0;u<c.length;u++){let h=c[(u+c.length-1)%c.length],d=c[u],g=c[(u+1)%c.length],x=(d[0]-h[0])*(g[1]-d[1])-(d[1]-h[1])*(g[0]-d[0]);Math.abs(x)>1e-6&&f.push(d)}return f.length>=3?Ul(f,e):null}var oo=Math.tan(30*ao);function cp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+oo*(i-o+s))/(2*oo))),f=a+(c-s)*oo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:f,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*oo:h<=i-o?l+(i-o-h)*oo:e+(i-h)*r}}function ss(i,t){let e=Qn(i),n=wn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(_,y)=>[_,y,n.y(y)],f=c(a,-s),u=c(l,-s),h=c(l,r+o),d=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ao),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ao);if(i.shape==="pent"){let _=[f,u,h,d];return{faces:[_],rim:_,ridges:[[h,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let _=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[e.u0+_,n.vr,n.rh],v=[e.u1-_,n.vr,n.rh],M=i.shape==="pyramid"?[[f,u,y],[u,h,y],[h,d,y],[d,f,y]]:[[f,u,v,y],[y,v,h,d],[d,f,y],[u,h,v]],w=i.shape==="pyramid"?[[f,y],[d,y],[u,y],[h,y]]:[[y,v],[f,y],[d,y],[u,v],[h,v]];return{faces:M,rim:[f,u,h,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let _=Math.min(n.y(0),n.y(r)),y=_+(n.rh-_)*.55,v=g>1e-6?Math.min(n.vr,(y-i.eave_a)/g):n.vr,M=x>1e-6?Math.max(n.vr,r-(y-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,g)),C=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],S=[a,v,y],E=[a,M,y],R=[l,v,y],T=[l,M,y];return{faces:[[f,u,R,b,C,S],[C,b,T,h,d,E],[E,S,C],[R,T,b]],rim:[f,u,R,T,h,d,E,S],ridges:[[C,b],[S,C],[E,C],[R,b],[T,b]],gable:[[0,n.y(0)],[v,y],[M,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let _=cp(r,i.eave_a,i.eave_b,g,x),y=[a,_.vla,_.yla],v=[l,_.vla,_.yla],M=[a,r-_.vlb,_.ylb],w=[l,r-_.vlb,_.ylb],C=[a,_.vr,_.rh],b=[l,_.vr,_.rh];return{faces:[[f,u,v,y],[y,v,b,C],[C,b,w,M],[M,w,h,d]],rim:[f,u,v,b,w,h,d,M,C,y],ridges:[[C,b],[y,v],[M,w]],gable:[[0,n.y(0)],[_.vla,_.yla],[_.vr,_.rh],[r-_.vlb,_.ylb],[r,n.y(r)]]}}let p=[a,n.vr,n.rh],m=[l,n.vr,n.rh];return{faces:[[f,u,m,p],[p,m,h,d]],rim:[f,u,m,h,d,p],ridges:[[p,m]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function lo(i,t,e){let n=null;for(let r of i.faces){if(!jt([t,e],r.map(_=>[_[0],_[1]])))continue;let[s,o]=r,a=r.slice(2).find(_=>Math.abs((o[0]-s[0])*(_[1]-s[1])-(o[1]-s[1])*(_[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],f=o[1]-s[1],u=a[0]-s[0],h=a[2]-s[2],d=a[1]-s[1],g=c*d-f*h,x=f*u-l*d,p=l*h-c*u;if(Math.abs(x)<1e-9)continue;let m=s[2]-(g*(t-s[0])+p*(e-s[1]))/x;n=n===null?m:Math.min(n,m)}return n}function zi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function Ey(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Ol(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=Ey(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Vu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Qn(t),n=wn(t).rh,r=ss(i,{u0:0,u1:0,a:0,b:0}),s=wn(i),o=g=>{let[x,p]=e.at(g,e.w/2),[m,_]=zi(i,x,p);return lo(r,m,_)??s.y(_)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,f=a?1:-1,u=Math.abs(c-l),h=c;for(let g=.5;g<u;g+=.05)if(o(l+f*g)>=n-.02){h=l+f*g;break}if(Math.abs(h-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=h:d.x0=h:c===e.u1?d.z1=h:d.z0=h,d}function up(i,t){let e=Vu(i,t),n=Qn(e),r=wn(e),s=ss(i,{u0:0,u1:0,a:0,b:0}),o=wn(i),a=h=>{let[d,g]=n.at(h,n.w/2),[x,p]=zi(i,d,g);return lo(s,x,p)??o.y(p)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,f=[],u=Math.max(1,Math.ceil(c/.15));for(let h=0;h<u;h++){let d=c*h/u,g=c*(h+1)/u,x=l?n.u0+d:n.u1-d,p=l?n.u0+g:n.u1-g,m=a(p),_=1/0,y=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;r.y(S)>m+.02&&(_=Math.min(_,S),y=Math.max(y,S))}if(!(y-_>.05))continue;let v=n.at(x,_),M=n.at(p,y),w=zi(i,v[0],v[1]),C=zi(i,M[0],M[1]);f.push({u0:Math.min(w[0],C[0]),u1:Math.max(w[0],C[0]),v0:Math.min(w[1],C[1]),v1:Math.max(w[1],C[1])})}return f}function rs(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),f=r(l);if(c&&s.push(a),c!==f){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function hp(i,t){let e=rs(i,0,t.u0,!0),n=rs(i,0,t.u1,!1),r=rs(rs(i,0,t.u0,!1),0,t.u1,!0),s=rs(r,1,t.v0,!0),o=rs(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Bl(i,t,e){let n=Qn(t),r=i.floors.flatMap(c=>c.rooms.filter(f=>f.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(f=>r.some(u=>jt(f,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function fp(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function Ay(i){return wn(i).rh}function dp(i,t,e){var l;let n=i.settings.roof.sections??[],r=n.filter(c=>e.includes(c.id)).map(c=>Ol(n,c)??c);if(!r.length)return t.id;let s=Math.max(...r.map(c=>Ay(c))),o=c=>c.rooms.some(f=>f.points.length>=3&&r.some(u=>{let[h,d]=f.points.reduce((g,x)=>[g[0]+x[0]/f.points.length,g[1]+x[1]/f.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&d>=Math.min(u.z0,u.z1)&&d<=Math.max(u.z0,u.z1)}));return((l=i.floors.filter(c=>c.elevation>=t.elevation&&c.elevation<s-.3&&o(c)).sort((c,f)=>f.elevation-c.elevation)[0])==null?void 0:l.id)??t.id}function os(i,t){let e=Un(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let f=l[c],u=l[(c+1)%l.length],h=a(f),d=a(u);if(h>=0&&n.push(f),h>=0!=d>=0){let g=h/(h-d);n.push([f[0]+(u[0]-f[0])*g,f[1]+(u[1]-f[1])*g])}}}return n}function pp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var On=1e-4;function Gu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function mp(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>On&&a<1-On&&l>-On&&l<1+On?a:null}function Hu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=On||o>=1-On?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<On?o:null}function Ry(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(mp(n,r,o,a)!==null||Hu(o,n,r)!==null||Hu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<On)return!0}}return jt(i[0],t)||jt(t[0],i)}function Cy(i){let t=i.map(s=>Gu(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],f=[0,1];t.forEach((u,h)=>{if(h!==o)for(let d=0;d<u.length;d++){let g=u[d],x=u[(d+1)%u.length],p=mp(l,c,g,x)??Hu(g,l,c);p!==null&&f.push(p)}}),f.sort((u,h)=>u-h);for(let u=1;u<f.length;u++){if(f[u]-f[u-1]<On)continue;let h=[l[0]+(c[0]-l[0])*f[u-1],l[1]+(c[1]-l[1])*f[u-1]],d=[l[0]+(c[0]-l[0])*f[u],l[1]+(c[1]-l[1])*f[u]],g=Math.hypot(d[0]-h[0],d[1]-h[1]),x=[(h[0]+d[0])/2+(d[1]-h[1])/g*.001,(h[1]+d[1])/2-(d[0]-h[0])/g*.001];t.some((p,m)=>m!==o&&jt(x,p))||e.some(([p,m])=>Math.hypot(p[0]-h[0],p[1]-h[1])<On&&Math.hypot(m[0]-d[0],m[1]-d[1])<On)||e.push([h,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([f],u)=>!r.has(u)&&Math.hypot(f[0]-a[0],f[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Gu(o)>1e-6&&n.push(o)}return n}function Wu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&Ry(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:Cy(s))}function Py(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function gp(i,t,e=.03){return i.every(n=>jt(n,t)||t.some((r,s)=>Py(n,r,t[(s+1)%t.length])<=e))}function Xu(i,t){let e=Gu(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Yu(i){let t=(i.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var xp=i=>i&&i!=="none"?i:null;function Iy(i){let t=(i.socket_outlets??[]).slice(0,4).map(e=>({entity:xp(e==null?void 0:e.entity),power:xp(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function kl(i){return i.type==="wall_socket"?Iy(i).length:Yu(i).length}function bp(i,t,e){let n=kl(i),r=i.rotation*Math.PI/180,s=((t-i.x)*Math.cos(r)+(e-i.z)*Math.sin(r))*(i.mirror?-1:1),o=Math.max(.05,i.w);return Math.max(0,Math.min(n-1,Math.floor((s+o/2)/o*n)))}var Ly=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Fy=["wall","pole","pillar","parcel","bank"];function vp(i){return Ly.includes(i.variant??"")?i.variant:"bin240"}function yp(i){return Fy.includes(i.variant??"")?i.variant:"wall"}var Ne=["#3a3f47","#3a3f47"],fr=["#23262b","#23262b"],Bn=["#5a3b25","#5a3b25"],Ee=["#1f4fa8","#1f4fa8"],Vi=["#e3b616","#e3b616"],ae=["#2f7d3b","#2f7d3b"],_p={default:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae,recycling:Vi,other:Ne},DE:{rest:fr,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae,recycling:Vi},AT:{rest:Ne,bio:Bn,paper:[Ne[0],"#c0262d"],plastic:Vi,glass:ae,garden:ae},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ae,paper:Ee,plastic:Ne,glass:ae,garden:ae},NL:{rest:Ne,bio:ae,paper:Ee,plastic:["#3a3f47","#e57a1f"],glass:ae,garden:ae},BE:{rest:Ne,bio:ae,paper:Ee,plastic:Ee,glass:ae,garden:ae},GB:{rest:fr,bio:["#3a3f47","#5a3b25"],paper:Ee,plastic:Ee,glass:fr,garden:Bn,recycling:Ee},US:{rest:fr,bio:ae,paper:Ee,plastic:Ee,glass:Ee,garden:ae,recycling:Ee},CA:{rest:fr,bio:ae,paper:Ee,plastic:Ee,glass:Ee,garden:ae,recycling:Ee},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ne,bio:Bn,paper:[Ne[0],"#e3b616"],plastic:[Ne[0],"#e3b616"],recycling:[Ne[0],"#e3b616"],glass:ae,garden:ae},IT:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae},ES:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae},PT:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae},DK:{rest:fr,bio:ae,paper:Ee,plastic:Ne,glass:ae,garden:ae},SE:{rest:fr,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae},NO:{rest:Ne,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae},FI:{rest:Ne,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae}},Mp="DE";function Sp(){return Mp}function Dy(i,t){var e;return((e=_p[t])==null?void 0:e[i])??_p.default[i]??Ne}function wp(i,t=Mp){let e=Dy(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var dr=kt(3662079,.95),qu=kt(3662079,1),Gi=kt(5995775,.34),Tp=kt(5995775,.22),zl=[-.55,.83],Yt=-1,Vl=16,pr=32,Ep=48,$u=64,ne=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Yt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Kt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),this.uv&&t.setAttribute("uv",new Gt(this.uv,2)),this.tile&&t.setAttribute("tile",new Gt(this.tile,2)),t.computeBoundingSphere(),t}},Ie=class{p=[];c=[];f=[];seg(t,e,n=dr,r=Yt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Yt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Yt),this.seg(c,a,n,s)}geometry(){let t=new Kt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),t}};function Ap(i,t,e,n){let s=i.uv?2:0,o=(u,h)=>{let d=u*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,h,d)=>({p:u.p.map((g,x)=>g+(h.p[x]-g)*d),c:u.c.map((g,x)=>g+(h.c[x]-g)*d),uv:u.uv&&h.uv?u.uv.map((g,x)=>g+(h.uv[x]-g)*d):null,tile:u.tile}),l=(u,h,d)=>{for(let g=0;g<3;g++){let x=u*3+g;for(let p=0;p<3;p++)i.p[x*3+p]=h[g].p[p],i.c[x*3+p]=h[g].c[p];if(i.uv&&h[g].uv)for(let p=0;p<s;p++)i.uv[x*2+p]=h[g].uv[p];if(i.tile&&h[g].tile)for(let p=0;p<2;p++)i.tile[x*2+p]=h[g].tile[p];i.f[x]=d}},c=(u,h)=>{let d=i.p.length/9;for(let g of u)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv&&i.uv.push(...g.uv??[.5,.5]),i.tile&&i.tile.push(...g.tile??[0,1]);return d},f=i.p.length/9;for(let u=t;u<f;u++){let h=[o(u,0),o(u,1),o(u,2)],d=h.map(b=>b.p[1]>e+1e-6),g=h.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let b=0;b<3;b++)i.f[u*3+b]=n;continue}let x=i.f[u*3],p=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),m=d.filter(Boolean).length,_=m===1?d.indexOf(!0):d.indexOf(!1),y=h[_],v=h[(_+1)%3],M=h[(_+2)%3],w=p(y,v),C=p(M,y);m===1?(l(u,[y,w,C],n),c([w,v,M],x),c([w,M,C],x)):(l(u,[y,w,C],x),c([w,v,M],n),c([w,M,C],n))}}function Rp(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let f=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*f,e,l[2]+(c[2]-l[2])*f];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let h=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ue=Math.PI/180;function kt(i,t){let e=new K(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function Ny(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function ti(i,t=[]){let e=i.map(([n,r])=>new ee(n,r));return Fs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new ee(r,s))))}function Cp(i,t,e,n,r,s,o){let a=new K(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],x=t[(d+1)%4],p=e[d],m=e[(d+1)%4],_=x[0]-g[0],y=x[1]-g[1],v=Math.hypot(_,y);if(v<1e-6)continue;let w=.8+.28*((y/v*zl[0]-_/v*zl[1]+1)/2),C=(p[0]+m[0]-g[0]-x[0])/2*(-y/v)+(p[1]+m[1]-g[1]-x[1])/2*(_/v),b=Math.max(0,Math.min(1,C/Math.max(1e-6,Math.hypot(C,r-n)))),S=kt(s,l(n)*w).lerp(a,b),E=kt(s,l(r)*w).lerp(a,b);i.tri([g[0],n,g[1]],[p[0],r,p[1]],[m[0],r,m[1]],S,E,E),i.tri([g[0],n,g[1]],[m[0],r,m[1]],[x[0],n,x[1]],S,E,S)}let[c,f,u,h]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[f[0],r,f[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a))}function Pp(i,t,e,n,r,s,o,a,l,c){let f=new K(l),u=[];for(let p=0;p<c;p++){let m=p/c*Math.PI*2;u.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let h=(p,m)=>{let _=t(p,u[m%c].s);return[_[0],u[m%c].y,_[1]]},d=t(e,r),g=t(n,r),x=(p,m,_,y,v)=>{let M=(m[1]-p[1])*(_[2]-p[2])-(m[2]-p[2])*(_[1]-p[1]),w=(m[2]-p[2])*(_[0]-p[0])-(m[0]-p[0])*(_[2]-p[2]),C=(m[0]-p[0])*(_[1]-p[1])-(m[1]-p[1])*(_[0]-p[0]);M*y[0]+w*y[1]+C*y[2]<0?i.tri(p,_,m,v):i.tri(p,m,_,v)};for(let p=0;p<c;p++){let m=(p+.5)/c*Math.PI*2,_=kt(a,.62+.4*Math.max(0,Math.cos(m))),y=t((e+n)/2,r+Math.sin(m)*o),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(m)*o,y[1]-v[1]];x(h(e,p),h(n,p+1),h(n,p),M,_),x(h(e,p),h(e,p+1),h(n,p+1),M,_)}for(let[p,m,_]of[[e,g,d],[n,d,g]]){let y=t(p,r),v=[y[0],s,y[1]],M=[_[0]-m[0],0,_[1]-m[1]];for(let w=0;w<c;w++)x(v,h(p,w),h(p,w+1),M,f)}}function Ae(i,t,e,n,r,s,o={}){var g;let a=typeof n=="number"?()=>n:x=>Math.max(e+.002,n(x[0],x[1])),l=o.aoFrom??e,c=o.fold??Yt,f=x=>.5+.5*Math.min(1,Math.max(0,(x-l)/1.6)),u=(o.holes??[]).map(x=>Ny(x)>0?[...x].reverse():x),h=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:ti(t,u);if(o.topFace!==!1){let x=new K(s);for(let[p,m,_]of d){let y=h[p],v=h[m],M=h[_];i.tri([y[0],a(y),y[1]],[M[0],a(M),M[1]],[v[0],a(v),v[1]],x,x,x,void 0,o.topFold??c)}}if(o.bottom){let x=kt(r,.55);for(let[p,m,_]of d){let y=h[p],v=h[m],M=h[_];i.tri([y[0],e,y[1]],[v[0],e,v[1]],[M[0],e,M[1]],x,x,x,void 0,c)}}for(let x of[t,...u])for(let p=0;p<x.length;p++){let m=x[p],_=x[(p+1)%x.length],y=_[0]-m[0],v=_[1]-m[1],M=Math.hypot(y,v);if(M<1e-6||(g=o.skipSide)!=null&&g.call(o,m,_))continue;let C=.8+.28*((v/M*zl[0]-y/M*zl[1]+1)/2),b=a(m),S=a(_),E=kt(r,f(e)*C),R=kt(r,f(b)*C),T=kt(r,f(S)*C);i.tri([m[0],e,m[1]],[m[0],b,m[1]],[_[0],S,_[1]],E,R,T,void 0,c),i.tri([m[0],e,m[1]],[_[0],S,_[1]],[_[0],e,_[1]],E,T,E,void 0,c)}}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},dt=kt(5995775,.3),Pt=kt(5995775,.17),qt=kt(3662079,.45),mr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Up(n)}rotated(t,e,n){let r=n*ue,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let f=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ae(this.buf,Zu(f),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(f,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Zu(l)&&(l.reverse(),c.reverse()),Cp(this.buf,l,c,n,r,s,o),a)for(let f=0;f<4;f++)this.line(c[f],c[(f+1)%4],r,r,a),this.line(l[f],c[f],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,f=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,f);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,f),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,f=12,u=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let d=(r+s)/2,g=t==="x"?e:n,x=t==="x"?n:e,p=(m,_)=>t==="x"?this.tf(m,_):this.tf(_,m);if(Pp(this.buf,p,g-o/2,g+o/2,x,d,h,l,c,f),u)for(let m of[g-o/2,g+o/2])for(let _=0;_<f;_++){let y=_/f*Math.PI*2,v=(_+1)/f*Math.PI*2;this.line(p(m,x+Math.sin(y)*h),p(m,x+Math.sin(v)*h),d+Math.cos(y)*h,d+Math.cos(v)*h,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let f=[];for(let u=0;u<l;u++){let h=u/l*Math.PI*2;f.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(Ae(this.buf,Zu(f),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(f[u],f[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=dt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Yt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Up(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Zu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function gr(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let f of[-1,1])for(let u of[-1,1]){let h=f*l,d=u*c;a?i.loft([h-r*.3,h+r*.3,d-r*.3,d+r*.3],[h-r/2,h+r/2,d-r/2,d+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,d-r/2,d+r/2,o)}}function co(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let f=1;f<o;f++){let u=t+c*f;i.seg(u,n,s,u,r,s,Pt)}for(let f=0;f<o;f++){let u=t+c*(f+.5),h=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),h,s+.012,u+Math.min(.1,c/4),h,s+.012,qt);else{let d=o>1?u+(f%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,h-.08,s+.012,d,h+.08,s+.012,qt)}}}function Ip(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),f=n*.5,u=Math.min(.24,e*.28);gr(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,f-.08,a+.02,l,N.fabric,N.fabricTop,.04,dt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,N.fabric,N.fabricTop,dt),i.pad(s,s+c,f-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt),i.pad(o-c,o,f-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt);let d=(o-c-(s+c))/r;for(let g=0;g<r;g++){let x=s+c+d*g+.02,p=x+d-.04;i.pad(x,p,f-.08,f+.05,a+u+.02,l-.06,N.cushion,N.cushion,.04),i.loft([x+.01,p-.01,a+u*.55,a+u+.14],[x+.03,p-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,N.cushion)}}function Lp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),f=Math.min(.24,c*.28),u=Math.min(.2,c*.24),h=n*.5,d=n*.72,g=r?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,N.wood);x(s+.06,a+.06),x(o-.06,a+.06),r||x(o-.06,a+c-.06);for(let b of g)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(s,o,.07,h-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,dt);for(let b of g){let[S,E]=b<0?[s+.02,s+c]:[o-c,o-.02];i.pad(S,E,.07,h-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,dt)}i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],h-.08,n,N.fabric,N.fabricTop,dt);for(let b of g)b<0?i.loft([s,s+f,a+f,l],[s,s+f*.5,a+f,l-.01],h-.08,n,N.fabric,N.fabricTop,dt):i.loft([o-f,o,a+f,l],[o-f*.5,o,a+f,l-.01],h-.08,n,N.fabric,N.fabricTop,dt);for(let b of g){let[S,E]=b<0?[s+f,s+c]:[o-c,o-f];i.pad(S,E,h-.08,d,l-u,l,N.fabric,N.fabricTop,.04,dt)}r||i.pad(o-u,o,h-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,dt);let p=s+f,m=r?o-f:o-u,_=Math.max(1,Math.round((m-p)/.62)),y=(m-p)/_;for(let b=0;b<_;b++){let S=p+y*b+.02,E=S+y-.04;i.pad(S,E,h-.08,h+.05,a+f+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([S+.01,E-.01,a+f*.55,a+f+.14],[S+.03,E-.03,a+f*.4,a+f*.4+.06],h+.03,n*.93,N.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),C=(M-v)/w;for(let b of g)for(let S=0;S<w;S++){let E=v+C*S+.02,R=E+C-.04;b<0?(i.pad(s+f+.02,s+c-.04,h-.08,h+.05,E,R,N.cushion,N.cushion,.04),i.loft([s+f*.55,s+f+.14,E+.01,R-.01],[s+f*.4,s+f*.4+.06,E+.03,R-.03],h+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-f-.02,h-.08,h+.05,E,R,N.cushion,N.cushion,.04),i.loft([o-f-.14,o-f*.55,E+.01,R-.01],[o-f*.4-.06,o-f*.4,E+.03,R-.03],h+.03,n*.93,N.cushion))}}function Uy(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);gr(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,dt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,dt),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Pt);let c=l+.2,f=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,f,s-.01,N.cushion,N.fabricTop,.025,Pt),i.lyingCyl("x",0,f+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let u=t>1.2?2:1,h=(t-.2)/u;for(let d=0;d<u;d++){let g=o+.1+h*d,x=r+.12,p=Math.min(.42,e*.2),m=.1;i.loft([g+.03+m,g+h-.03-m,x+m*.5,x+p-m*.5],[g+.03,g+h-.03,x,x+p],c,c+.06,N.whiteTop),i.loft([g+.03,g+h-.03,x,x+p],[g+.03+m,g+h-.03-m,x+m*.5,x+p-m*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Pt)}}function Oy(i,t,e,n){let r=Math.min(.46,n*.52);gr(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,dt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,dt)}function By(i,t,e,n){gr(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function ky(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,dt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Pt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function Hi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),co(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function zy(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Pt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let f=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+f,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=f+.006,c++}}}}function Vy(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Hi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Gy(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,dt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Pt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,qt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,qt)}var Ku=(i,t)=>kt(parseInt(i.slice(1),16),t).getHex();function Hy(i,t,e,n,r,s){let o=Ku(s[0],.55),a=Ku(s[1],.8),l=Ku(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,o,o,Pt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,Pt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,o,o,dt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,Pt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,o,o,16,dt),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,Pt),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Pt);return}if(r==="bin1100"){for(let h of[-1,1])for(let d of[-1,1])i.cyl(h*(t/2-.12),d*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,o,o,dt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,Pt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,Pt);return}let c=Math.min(.2,n*.19),f=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),f+c/2+.01,0,c,.05,c,N.dark,N.metal,12);i.loft([-t*.42,t*.42,f+.07,e/2-.05],[-t/2+.01,t/2-.01,f+.05,e/2-.01],.03,n-.05,o,o,dt),i.box(-t/2,t/2,n-.05,n,f+.03,e/2,a,l,Pt),i.box(-t*.42,t*.42,n-.1,n-.02,f,f+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(f+e/2)/2,t/2,n+.002,(f+e/2)/2,qt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Pt))}function Wy(i,t,e,n,r){let s=N.metal,o=kt(N.metal,1.25).getHex(),a=kt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Pt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,dt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,dt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Pt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Pt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,dt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,dt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Pt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,dt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let f=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(f,f+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Pt),i.box(f+.04,f+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,dt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,dt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function Xy(i,t,e,n){let r=e/2-Op;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,dt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Pt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Pt))}var Op=.06;function Bp(i,t,e,n){let r=t.rotation*ue,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(A,P,D)=>[t.x+A*s-D*o,P,t.z+A*o+D*s],c=(A,P,D,L,O)=>{i.tri(A,P,D,O),i.tri(A,D,L,O),i.tri(A,D,P,O),i.tri(A,L,D,O)},f=(A,P,D,L)=>{let O=l(A[0],A[1],A[2]),B=l(P[0],P[1],P[2]),k=B[0]-O[0],z=B[1]-O[1],et=B[2]-O[2],G=Math.hypot(k,z,et)||1,J=[k/G,z/G,et/G],it=Math.abs(J[1])>.9?[1,0,0]:[0,1,0],ht=[J[1]*it[2]-J[2]*it[1],J[2]*it[0]-J[0]*it[2],J[0]*it[1]-J[1]*it[0]],Y=Math.hypot(ht[0],ht[1],ht[2])||1,$=[ht[0]/Y*D,ht[1]/Y*D,ht[2]/Y*D],at=[J[1]*$[2]-J[2]*$[1],J[2]*$[0]-J[0]*$[2],J[0]*$[1]-J[1]*$[0]],ct=[[1,1],[-1,1],[-1,-1],[1,-1]],ut=(pt,gt)=>[pt[0]+$[0]*ct[gt][0]+at[0]*ct[gt][1],pt[1]+$[1]*ct[gt][0]+at[1]*ct[gt][1],pt[2]+$[2]*ct[gt][0]+at[2]*ct[gt][1]];for(let pt=0;pt<4;pt++){let gt=(pt+1)%4;i.tri(ut(O,pt),ut(B,pt),ut(B,gt),L),i.tri(ut(O,pt),ut(B,gt),ut(O,gt),L)}},u=(A,P,D,L,O,B,k,z)=>{c(l(A,L,O),l(P,L,O),l(P,L,B),l(A,L,B),z),c(l(A,D,B),l(P,D,B),l(P,L,B),l(A,L,B),k),c(l(A,D,O),l(P,D,O),l(P,D,B),l(A,D,B),k),c(l(A,D,O),l(A,D,B),l(A,L,B),l(A,L,O),k),c(l(P,D,O),l(P,D,B),l(P,L,B),l(P,L,O),k)},h=new K(N.body),d=new K(N.bodyTop),g=new K(N.accent),x=new K(1929098),p=new K(995141),m=(A,P,D,L,O)=>{let B=(k,z,et)=>[k[0]+(z[0]-k[0])*et,k[1]+(z[1]-k[1])*et,k[2]+(z[2]-k[2])*et];for(let k=0;k<O;k++){let z=B(A,P,k/O),et=B(A,P,(k+1)/O),G=B(D,L,(k+1)/O),J=B(D,L,k/O);c(l(z[0],z[1],z[2]),l(et[0],et[1],et[2]),l(G[0],G[1],G[2]),l(J[0],J[1],J[2]),k%2?x:p)}},_=t.w/2,y=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,C=(A,P)=>{t.awning_valance!==!1&&m([-_+.04,A,P+.01],[_-.04,A,P+.01],[-_+.04,A-.2,P+.01],[_-.04,A-.2,P+.01],M)},b=t.variant??"arm";if(b==="side"){let A=e,P=.05,D=0,L=-_+.08+a*(t.w-.16);u(-_,-_+.1,0,A+.05,D-.05,D+.05,h,d),u(_-.06,_,0,A+.05,D-.03,D+.03,h,d),a>.01&&m([-_+.1,A,D],[-_+.1,P,D],[L,A,D],[L,P,D],Math.max(4,Math.round((A-P)/.3))),f([L,P,D],[L,A,D],.02,g);return}if(b==="vertical"){let A=y,P=Math.min(t.d/2,y+v);u(-_,_,e,e+v,A,P,h,d);let D=(A+P)/2;for(let O of[-_+.02,_-.02])f([O,.02,D],[O,e,D],.02,g);let L=e-a*Math.max(0,e-.04);a>.01&&m([-_+.04,e,D],[_-.04,e,D],[-_+.04,L,D],[_-.04,L,D],M),f([-_+.03,L,D],[_-.03,L,D],.025,g);return}if(b==="pergola"){let A=t.d/2-.05,P=e+v,D=P-(A-y)*Math.tan(w);u(-_,_,e,P,y,y+v,h,d);for(let B of[-_+.05,_-.05])f([B,P,y+v],[B,D,A],.035,g),f([B,0,A],[B,D,A],.045,h);f([-_+.05,D,A],[_-.05,D,A],.035,g);let L=y+v+a*(A-y-v),O=P-(L-y)*Math.tan(w)+.04;a>.01&&m([-_+.08,P+.04,y+v],[_-.08,P+.04,y+v],[-_+.08,O,L],[_-.08,O,L],M),f([-_+.08,O,L],[_-.08,O,L],.025,g);return}let S=y,E=y+v;u(-_,_,e,e+v,S,E,h,d);let R=[E-.02,e+v*.35];if(b==="drop"){let A=Math.max(.3,t.d-v),P=[E,R[1]-A],D=a*(Math.PI/2+w),L=[P[0]+Math.sin(D)*A,P[1]+Math.cos(D)*A];for(let O of[-_+.08,_-.08])f([O,P[1],P[0]],[O,L[1],L[0]],.018,g);a>.01&&m([-_+.04,R[1],R[0]],[_-.04,R[1],R[0]],[-_+.04,L[1],L[0]],[_-.04,L[1],L[0]],M),f([-_+.02,L[1],L[0]],[_-.02,L[1],L[0]],.03,g),a>.05&&C(L[1],L[0]);return}let T=Math.max(0,t.d-v)*a,I=[R[0]+T,R[1]-T*Math.tan(w)];if(T>.01){m([-_+.04,R[1],R[0]],[_-.04,R[1],R[0]],[-_+.04,I[1],I[0]],[_-.04,I[1],I[0]],M);let A=Math.max(.3,(t.d-v)/2+.05);for(let P of[-1,1]){let D=P*(_-.12),L=[D,e+.02,E-.04],O=[D,I[1]-.02,I[0]],B=Math.hypot(O[2]-L[2],O[1]-L[1]),k=Math.sqrt(Math.max(0,A*A-(B/2)**2)),z=[D-P*Math.min(k,_-.15),(L[1]+O[1])/2,(L[2]+O[2])/2];f(L,z,.018,g),f(z,O,.018,g)}}f([-_+.02,I[1],I[0]],[_-.02,I[1],I[0]],.03,g),T>.05&&C(I[1],I[0])}function kp(i,t,e,n,r){let s=i.p.length;Yy(i,t,e,n,r),t.mirror&&Hp(i,s)}function Yy(i,t,e,n,r){let s=t.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],f=e+.05,u=e+t.h-.02,h=new K(.75,.1,.14),d=new K(N.dark),g=new K(N.accent),x=t.w/2-.006,p=(v,M,w)=>{let C=w/m,b=new K(2043212).lerp(h,C),S=new K(N.body).lerp(h,C*.8),E=Math.cos(w),R=Math.sin(w),T=(P,D)=>c(v+M*(P*E-D*R),t.d/2+P*R+D*E),I=(P,D,L,O)=>{let[B,k,z,et]=P;i.tri([B[0],D,B[1]],[k[0],D,k[1]],[z[0],L,z[1]],O),i.tri([B[0],D,B[1]],[z[0],L,z[1]],[et[0],L,et[1]],O)},A=(P,D,L,O,B,k,z,et=z)=>{let G=[T(P,k),T(D,k),T(D,B),T(P,B)];I([G[0],G[1],G[1],G[0]],L,O,et),I([G[3],G[2],G[2],G[3]],L,O,z),I([G[0],G[3],G[3],G[0]],L,O,z),I([G[1],G[2],G[2],G[1]],L,O,z),I([G[0],G[1],G[2],G[3]],O,O,z),I([G[3],G[2],G[1],G[0]],L,L,z)};return A(0,x,f,u,-Op,0,S,b),A(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),A},m=1.83;p(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),p(t.w/2,-1,r*m)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function qy(i,t,e,n){Hi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,dt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,qt)}}function $y(i,t,e,n){Hi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,qt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function Zy(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,qt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function Ky(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,qt),i.seg(r,n,s,o,n,a,qt),i.seg(o,.05,a,o,n,a,qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,qt)}function Jy(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,dt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,dt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function jy(i,t,e,n){Hi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,qt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,qt)}function Qy(i,t,e,n){Hi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,qt)}function t1(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,dt),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),f=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,f,f+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Pt:null)}}function e1(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,dt)}function n1(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let f=0;f<r;f++){let u=e/2-o*f,h=u-o,d=s*(f+1);i.box(-t/2,t/2,0,d,h,u,N.wood,N.woodTop),i.seg(-t/2,d,u,t/2,d,u,dt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,dt);for(let f of[-t/2,t/2])i.seg(f,s,e/2,f,n,-e/2+o,Pt);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),qt);for(let f=0;f<c;f+=3){let u=e/2-o*(f+.5),h=s*(f+1);i.seg(l,h,u,l,h+a,u,Pt)}}function i1(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:f}=Zd(t,e,n),u=-t/2,h=-t/2+a,d=t/2-a,g=t/2,x=-e/2+l;for(let C=0;C<s;C++){let b=e/2-c*C,S=f*(C+1);i.box(u,h,0,S,b-c,b,N.wood,N.woodTop),i.seg(u,S,b,h,S,b,dt)}i.seg(u,0,e/2,u,f,e/2,dt);let p=f*r,m=.2;i.box(u,h,0,p,-e/2,x,N.wood,N.woodTop),i.box(h,g,Math.max(0,p-m),p,-e/2,x,N.wood,N.woodTop),i.seg(u,p,x,h,p,x,dt);for(let C=0;C<o;C++){let b=x+c*C,S=f*(r+1+C);i.box(d,g,Math.max(0,S-f-m),S,b,b+c,N.wood,N.woodTop),i.seg(d,S,b,g,S,b,dt)}i.seg(u,f,e/2,u,p,x,Pt),i.seg(g,p,x,g,n,x+c*(o-1),Pt);let _=.9,y=h-.03,v=d+.03,M=x-.03,w=Math.max(1,o-4);i.seg(y,f+_,e/2-c/2,y,p+_,M,qt),i.seg(y,p+_,M,v,p+_,M,qt),i.seg(v,p+_,M,v,f*(r+w)+_,x+c*(w-.5),qt);for(let C=0;C<s;C+=3){let b=e/2-c*(C+.5);i.seg(y,f*(C+1),b,y,f*(C+1)+_,b,Pt)}for(let C of[y,v])i.seg(C,p,M,C,p+_,M,Pt);for(let C=2;C<w;C+=3){let b=x+c*(C+.5);i.seg(v,f*(r+1+C),b,v,f*(r+1+C)+_,b,Pt)}}function r1(i,t,e,n){gr(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),co(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function s1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Pt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,qt)}}function o1(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,dt),co(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,dt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,dt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function Fp(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,dt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,dt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Pt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,dt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,dt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Pt))}function a1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Pt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,dt)}function l1(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,dt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,dt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function c1(i,t,e,n){gr(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,dt)}function u1(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,dt),co(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function h1(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,qt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Pt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,qt)}function f1(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,dt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),co(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function d1(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Dp(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,dt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Pt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,qt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let f=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(f)*a,o+Math.sin(f)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,qt),r||i.seg(Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Pt)}}function p1(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Pt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,dt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Pt)}function m1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,dt)}function g1(i,t,e,n){gr(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Pt)}function x1(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,qt)}function b1(i,t,e,n){let r=ju;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,dt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Pt)}}function _1(i,t,e,n){let r=Qu;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,dt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Pt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,qt)}function as(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,qt)}}function v1(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),as(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,qt);for(let a of[-1,1])as(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Pt)}function y1(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,dt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Pt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,dt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,qt)}}function M1(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,dt),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,dt),as(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,dt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,qt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function S1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,dt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;as(i,s,o,r,e/2+.004,24),as(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Pt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Pt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Pt)}function w1(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,dt);for(let s of[-1,1])as(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,qt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Pt)}function T1(i,t,e,n){let r=Yd-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,dt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function E1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,dt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Pt)}function A1(i,t,e,n,r){let s=Dl,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,N.white,N.whiteTop,dt);let l=t/r;for(let c=0;c<r;c++){let f=-t/2+c*l;i.box(f+.008,f+l-.008,s+.012,s+n-.012,a,a+.006,N.whiteTop,N.whiteTop,Pt)}}function R1(i,t,e,n,r){let s=Nl,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,N.white,N.whiteTop,dt);let l=t/r,c=s+n/2,f=Math.min(l,n)*.3;for(let u=0;u<r;u++){let h=-t/2+(u+.5)*l;u>0&&i.seg(h-l/2,s+.006,a+.001,h-l/2,s+n-.006,a+.001,Pt),i.lyingCyl("z",h,a+.004,c-f,c+f,.008,f*2,N.whiteTop,N.whiteTop,16,Pt),i.lyingCyl("z",h,a+.006,c-f*.78,c+f*.78,.008,f*1.56,N.white,N.white,16);for(let d of[-f*.38,f*.38])i.lyingCyl("z",h+d,a+.0065,c-.0025,c+.0025,.008,.005,N.dark,N.dark,6)}}function zp(i){let t=Math.max(.05,i.w),e=Math.max(.05,i.d),n=Math.max(.005,i.h),r=kl(i),s=t/r;return i.type==="wall_socket"?Array.from({length:r},(o,a)=>({x:-t/2+(a+1)*s-.012,y:Nl+n-.012,z:-e/2+.011,r:.0025})):Array.from({length:r},(o,a)=>({x:-t/2+(a+.5)*s,y:Dl+n*.2,z:-e/2+.017,r:.005}))}function Vp(i,t,e){let n=Math.min(.2,e*.19),r=Math.min(.075,n*.55,i*.2),s=to+n*.3;return{band:n,display:{x0:-r*.75,x1:r*.25,y0:s,y1:s+r,z:t/2+.004}}}function C1(i,t,e,n){let r=to,s=r+n,{band:o,display:a}=Vp(t,e,n),l=Math.min(.07,t*.14,o*.8),c=-t/2,f=t/2,u=-e/2,h=e/2,d=3,g=m=>l-Math.sqrt(Math.max(0,l*l-(l-m)*(l-m))),x=N.metal;for(let m=0;m<d;m++){let _=l*m/d,y=l*(m+1)/d,v=g(_),M=g(y);i.loft([c+v,f-v,u,h],[c+M,f-M,u,h],r+_,r+y,x),i.loft([c+M,f-M,u,h],[c+v,f-v,u,h],s-y,s-_,N.white,N.whiteTop)}i.box(c,f,r+l,r+o,u,h,x,x),i.box(c,f,r+o,s-l,u,h,N.white,N.whiteTop,dt),i.seg(c,r+o,h+.001,f,r+o,h+.001,Pt),i.box(a.x0,a.x1,a.y0,a.y1,h,h+.003,N.dark,N.dark,Pt);let p=(a.y1-a.y0)*.3;for(let[m,_]of[[0,0],[1,0],[0,1],[1,1]]){let y=a.x1+.012+m*(p+.008),v=a.y0+.004+_*(p+.012);i.box(y,y+p,v,v+p,h,h+.003,N.body,N.body)}for(let m of[-.05,.05])i.cyl(m,0,.011,r-.12,r+.01,N.metal,N.metal,8)}function P1(i,t,e,n,r){if(r){let o=Math.min(t,n)/2,a=Math.min(.035,e);i.lyingCyl("z",0,-e/2+a*.4,.004,2*o-.004,a*.8,2*o-.008,N.white,N.white,28),i.lyingCyl("z",0,-e/2+a*.85,.012,2*o-.012,a*.3,2*o-.024,N.whiteTop,N.whiteTop,28,Pt);return}let s=Math.min(t,e)/2;i.cyl(0,0,s-.006,0,n*.3,N.whiteTop,N.whiteTop,28,Pt),i.cyl(0,0,s,n*.3,n,N.white,N.white,28)}function Gp(i){let t=Math.max(.05,i.w),e=Math.max(.005,i.d),n=Math.max(.005,i.h);return Nu(i)?{y:Math.min(t,n)/2,z:-e/2+Math.min(.035,e)+.002,r:Math.min(t,n)/2,wall:!0}:{y:-.002,z:0,r:Math.min(t,e)/2,wall:!1}}function I1(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,dt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,f=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(f)*s,o+Math.sin(f)*s,e/2+.003,qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function L1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Pt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Pt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,qt)}function F1(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Pt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,dt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,qt)}}var ju=.12,Qu=2.05;function th(i,t){let e=D1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function D1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Od(i.type);if(s){let l=t?qe(t,i):0,c=(s.x-s.w/2)*e,f=(s.x+s.w/2)*e,u=Math.min(.02,(f-c)*.05);return{x0:c+u,x1:f-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?qe(t,i)-hi(i):0,a=N1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function N1(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?qe(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:ju+.02,y1:ju+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Qu+.015,y1:Qu+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="water_heater"?Vp(t,e,n).display:i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function U1(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new K(1-r,1-r,1-r),a=new K(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],u=d=>[d[0],l,d[1]],h=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(u(c[d]),u(f[d]),u(f[g]),o,a,a),i.tri(u(c[d]),u(f[g]),u(c[g]),o,a,o)}Up(t)&&Hp(i,h)}function Gl(i,t,e,n,r=0){O1(i,t,e,n,r)}function Hp(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function O1(i,t,e,n,r){let s=we(n.type)?0:r-hi(n);if(we(n.type)||Math.abs(s)<.001)return Np(i,t,e,n,r);let o=i.p.length,a=t.p.length;Np(i,t,r<.05?e:new ne,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function Np(i,t,e,n,r){let s=n.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(g,x)=>[n.x+l*g*o-x*a,n.z+l*g*a+x*o],f=new mr(i,t,c),u=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":Ip(f,u,h,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":Ip(f,u,h,d,1);break;case"sofa_l":Lp(f,u,h,d,!1);break;case"sofa_u":Lp(f,u,h,d,!0);break;case"bed":Uy(f,u,h,d);break;case"chair":Oy(f,u,h,d);break;case"table":By(f,u,h,d);break;case"desk":ky(f,u,h,d);break;case"nightstand":Hi(f,u,h,d,1,d*.72,!0),f.seg(-u/2,d*.5,h/2-.02,u/2,d*.5,h/2-.02,Pt);break;case"wardrobe":Hi(f,u,h,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":zy(f,u,h,d);break;case"kitchen":Vy(f,u,h,d);break;case"fridge":Gy(f,u,h,d);break;case"fridge_smart":Xy(f,u,h,d);break;case"waste_bin":Hy(f,u,h,d,vp(n),wp(n,Sp()));break;case"mailbox":{let g=i.p.length,x=t.p.length;Wy(f,u,h,d,yp(n));let p=hi(n);for(let m=g+1;m<i.p.length;m+=3)i.p[m]+=p;for(let m=x+1;m<t.p.length;m+=3)t.p[m]+=p;if(p>0)return;break}case"awning":return;case"stove":qy(f,u,h,d);break;case"sink":$y(f,u,h,d);break;case"bathtub":Zy(f,u,h,d);break;case"shower":Ky(f,u,h,d);break;case"wc":Jy(f,u,h,d);break;case"washbasin":jy(f,u,h,d);break;case"tv_board":Qy(f,u,h,d);break;case"plant":t1(f,u,h,d);break;case"rug":e1(f,u,h);return;case"stairs":n1(f,u,h,d);break;case"stairs_u":i1(f,u,h,d);break;case"stairwell":return;case"sideboard":r1(f,u,h,d);break;case"dresser":s1(f,u,h,d);break;case"tall_cabinet":Hi(f,u,h,d,1,d*.5);break;case"coat_rack":o1(f,u,h,d);break;case"bench":Fp(f,u,h,d,!1);break;case"corner_bench":Fp(f,u,h,d,!0);break;case"bar_stool":a1(f,u,h,d);break;case"office_chair":l1(f,u,h,d);break;case"stool":c1(f,u,h,d);break;case"kitchen_wall":u1(f,u,h,d);return;case"kitchen_tall":h1(f,u,h,d);break;case"island":f1(f,u,h,d);break;case"worktop":f.box(-u/2,u/2,Math.max(0,d-.04),d,-h/2,h/2,N.whiteTop,N.whiteTop,dt);return;case"dishwasher":d1(f,u,h,d);break;case"washer":Dp(f,u,h,d,!1);break;case"dryer":Dp(f,u,h,d,!0);break;case"bunk_bed":p1(f,u,h,d);break;case"table_round":m1(f,u,h,d);break;case"coffee_table":g1(f,u,h,d);break;case"tv_wall":x1(f,u,h,d);return;case"parking":{let x=[[-u/2,-h/2],[u/2,-h/2],[u/2,h/2],[-u/2,h/2]];for(let p=0;p<4;p++)f.seg(x[p][0],.012,x[p][1],x[(p+1)%4][0],.012,x[(p+1)%4][1],Pt);f.seg(-u*.15,.012,h/2-.45,0,.012,h/2-.2,dt),f.seg(0,.012,h/2-.2,u*.15,.012,h/2-.45,dt);return}case"robot_vacuum":f.box(-u*.45,u*.45,0,d,-h/2,-h/2+h*.3,N.white,N.whiteTop,dt),f.box(-u*.2,u*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,N.accent);return;case"radiator":b1(f,u,h,d);return;case"ac_unit":_1(f,u,h,d);return;case"inverter":v1(f,u,h,d,n.variant??null);return;case"grid_point":E1(f,u,h,d);break;case"wallbox":I1(f,u,h,d);return;case"wall_switch":A1(f,u,h,d,Yu(n).length);return;case"wall_socket":R1(f,u,h,d,kl(n));return;case"water_heater":C1(f,u,h,d);return;case"access_point":P1(f,u,Math.max(.005,n.d),d,Nu(n));return;case"pool_pump":y1(f,u,h,d);break;case"pool_filter":M1(f,u,h,d,n.variant??null);break;case"pool_heat_pump":S1(f,u,h,d);break;case"pool_dosing":w1(f,u,h,d);break;case"pool_valve":T1(f,u,h,d);return;case"meter":L1(f,u,h,d);return;case"home_battery":if(F1(f,u,h,d,n.variant??null),n.variant==="wall")return;break;default:{let g=we(n.type);if(g){let x=Rl(n.type);if(Hl(f,g,u,h,d,r,null,null,x?p=>Ou(x,p):null),r>.05)return}else f.box(-u/2,u/2,0,d,-h/2,h/2,N.body,N.bodyTop,dt)}}U1(e,c,u,h,n.type==="plant"?.35:.5)}function Ju(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Hl(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let f of t.parts){if(l!=null&&l(f)||a&&!a(f))continue;let u=c?{...f,glow:!0,w:f.w+.006/e,d:f.d+.006/n,y:Math.max(0,f.y-.002/r),h:f.h+.004/r}:f,h=u.glow&&o!==null,d=h?o:Ju(u.color,!1)??N.body,g=h?o:Ju(u.top,!1)??Ju(u.color,!0)??kt(d,1.25).getHex(),x=s+u.y*r,p=s+Math.min(r,(u.y+u.h)*r),m=u.edges==="glow"?dr:u.edges==="faint"?Pt:u.edges?dt:null,_=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))_.lyingCyl(u.axis,u.x*e,u.z*n,x,p,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,g,14,m);else if(u.shape==="cyl")_.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,x,p,d,g,14,m);else if(u.shape==="loft"){let y=u.tx??u.x,v=u.tz??u.z,M=u.tw??u.w,w=u.td??u.d;_.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-M/2)*e,(y+M/2)*e,(v-w/2)*n,(v+w/2)*n],x,p,d,g,m)}else _.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,x,p,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,g,m)}}function Wp(i,t,e,n,r,s){let o=s*ue,a=Math.cos(o),l=Math.sin(o),c=(g,x)=>[e+g*a-x*l,r+g*l+x*a],f=new mr(i,new Ie,c),u=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){f.cyl(0,0,.07,n-.03,n,u,h,12),f.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),f.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}f.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,h),f.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,h),f.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,h),f.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),f.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function uo(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ue,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,f=(u,h)=>[e.x+c*u*a-h*l,e.z+c*u*l+h*a];Hl(new mr(i,new Ie,f),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Xp(i,t,e,n,r,s){let o=B1(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ue,l=Math.cos(a),c=Math.sin(a),f=n.mirror?-1:1,u=(h,d)=>[n.x+f*h*l-d*c,n.z+f*h*c+d*l];Hl(new mr(i,new Ie,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function B1(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Ou(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function Wl(i,t,e,n,r){let s=e.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(f,u)=>[e.x+l*f*o-u*a,e.z+l*f*a+u*o];Hl(new mr(i,new Ie,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var k1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function z1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let f=a.points[(c+1)%a.points.length],u=f[0]-l[0],h=f[1]-l[1],d=Math.hypot(u,h)||1;if(Math.abs((r*h-s*u)/(o*d))>.05)return!1;let g=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*h)/(d*d)));return Math.hypot(l[0]+u*g-n[0],l[1]+h*g-n[1])<.4}))}function qp(i,t){return t.type==="pool"?Fl(i,t):cr(i,t)+(Kn(t.type)?.01:ns[t.type])}function ho(i){return Un(i)>=0?i:[...i].reverse()}function V1(i,t){let e=i[t];if(Kn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>jt(o,e.points))&&n.push(ho(s.points))}return n}function Yp(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],f=e[1]-t[1],u=Math.hypot(c,f);if(u<1e-6)return;let h=-f/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ae(i,ho([[t[0]+h,t[1]+d],[e[0]+h,e[1]+d],[e[0]-h,e[1]-d],[t[0]-h,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let g=(v,M)=>[t[0]+h*M,v,t[1]+d*M],x=(v,M)=>[e[0]+h*M,v+l,e[1]+d*M],p=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Yt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Yt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Yt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Yt)},m=new K(a),_=new K(kt(o,.9)),y=new K(kt(o,.6));p([g(s,1),x(s,1),x(s,-1),g(s,-1)],m),p([g(r,1),x(r,1),x(r,-1),g(r,-1)],y),p([g(r,1),x(r,1),x(s,1),g(s,1)],_),p([g(r,-1),x(r,-1),x(s,-1),g(s,-1)],_),p([g(r,1),g(r,-1),g(s,-1),g(s,1)],_),p([x(r,1),x(r,-1),x(s,-1),x(s,1)],_)}function $p(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=cr(e,s),l=(_,y)=>a-eo(e,s,_,y),c=a-(s.type==="pool"?0:s.slope??0),f=Kn(s.type)&&s.height?s.height:ns[s.type],u={...k1[s.type],top:f},h=ho(s.points),d=kt(u.edge,u.edgeAlpha),g=s.open&&(s.type==="fence"||s.type==="pergola")?h.length-1:-1,x=_=>{if(s.outline!==!1)for(let y=0;y<h.length;y++){if(y===g)continue;let v=h[y],M=h[(y+1)%h.length];t.seg([v[0],_(v[0],v[1]),v[1]],[M[0],_(M[0],M[1]),M[1]],d,Yt)}},p=n??i,m=new K(n?1734832:u.color);switch(s.type){case"pool":{let _=new K(u.side),y=new K(kt(u.side,.55)),v=new K(932440),M=Fl(e,s),w=Ll(e,s),C=Wd(e,s);for(let[b,S,E]of ti(h)){let R=h[b],T=h[S],I=h[E];(n?p:i).tri([R[0],M,R[1]],[I[0],M,I[1]],[T[0],M,T[1]],m,m,m,void 0,Yt),i.tri([R[0],C,R[1]],[I[0],C,I[1]],[T[0],C,T[1]],v,v,v,void 0,Yt)}for(let b=0;b<h.length;b++){let S=h[b],E=h[(b+1)%h.length];i.tri([E[0],C,E[1]],[E[0],w,E[1]],[S[0],w,S[1]],y,_,_,void 0,Yt),i.tri([E[0],C,E[1]],[S[0],w,S[1]],[S[0],C,S[1]],y,_,y,void 0,Yt)}if(!s.above&&ku(e,s)){let b=new K(660258),S=new K(396054),E=C-.2,R=Math.min(a,w);for(let T=0;T<h.length;T++){let I=h[T],A=h[(T+1)%h.length];i.tri([I[0],E,I[1]],[I[0],R,I[1]],[A[0],R,A[1]],S,b,b,void 0,Yt),i.tri([I[0],E,I[1]],[A[0],R,A[1]],[A[0],E,A[1]],S,b,S,void 0,Yt)}for(let[T,I,A]of ti(h)){let P=h[T],D=h[I],L=h[A];i.tri([P[0],E,P[1]],[D[0],E,D[1]],[L[0],E,L[1]],S,S,S,void 0,Yt)}if(s.outline!==!1)for(let T=0;T<h.length;T++){let I=h[T],A=h[(T+1)%h.length];t.seg([I[0],E,I[1]],[A[0],E,A[1]],kt(u.edge,u.edgeAlpha*.35),Yt),t.seg([I[0],E,I[1]],[I[0],R,I[1]],kt(u.edge,u.edgeAlpha*.25),Yt)}}if(w>a+.02){let b=new K(2044240),S=new K(1187123);for(let E=0;E<h.length;E++){let R=h[E],T=h[(E+1)%h.length];i.tri([R[0],a,R[1]],[R[0],w,R[1]],[T[0],w,T[1]],S,b,b,void 0,Yt),i.tri([R[0],a,R[1]],[T[0],w,T[1]],[T[0],a,T[1]],S,b,S,void 0,Yt)}x(()=>a+.005)}if(x(()=>w),x(()=>M+.005),s.outline!==!1)for(let b=0;b<h.length;b++){let S=h[b],E=h[(b+1)%h.length];t.seg([S[0],C+.005,S[1]],[E[0],C+.005,E[1]],kt(u.edge,u.edgeAlpha*.4),Yt)}break}case"fence":{for(let _=0;_<h.length;_++){if(_===g)continue;let y=h[_],v=h[(_+1)%h.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),w=Math.max(1,Math.round(M/2)),C=g>=0&&_===g-1?w:w-1;for(let b=0;b<=C;b++){let S=b/w,E=y[0]+(v[0]-y[0])*S,R=y[1]+(v[1]-y[1])*S,T=l(E,R);Ae(i,ho([[E-.04,R-.04],[E+.04,R-.04],[E+.04,R+.04],[E-.04,R+.04]]),T,T+u.top,u.side,u.color)}for(let b of[.35,.85])t.seg([y[0],l(y[0],y[1])+b*u.top,y[1]],[v[0],l(v[0],v[1])+b*u.top,v[1]],d,Yt)}break}case"pergola":{let _=u.top;for(let[y,v]of h){let M=l(y,v);Ae(i,ho([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+_,u.side,u.color)}for(let y=0;y<h.length;y++){if(y===g)continue;let v=h[y],M=h[(y+1)%h.length],w=l(v[0],v[1])+_;if(Yp(i,v,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let C=l(v[0],v[1]),b=l(M[0],M[1]);t.seg([v[0],C+.25,v[1]],[M[0],b+_-.25,M[1]],d,Yt),t.seg([M[0],b+.25,M[1]],[v[0],C+_-.25,v[1]],d,Yt)}}if(Qd(h)){let y=tp(h),v=y.x1-y.x0,M=y.z1-y.z0,w=v>=M,C=w?v:M,b=Math.max(1,Math.round(C/.6));for(let S=1;S<b;S++){let E=(w?y.x0:y.z0)+C*S/b,R=w?[E,y.z0+.06]:[y.x0+.06,E],T=w?[E,y.z1-.06]:[y.x1-.06,E],I=l(R[0],R[1])+_;Yp(i,R,T,.06,I-.04,I+.08,u.side,u.color,l(T[0],T[1])-l(R[0],R[1]))}}x((y,v)=>l(y,v)+_+.004);break}case"balcony":{Ae(i,h,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),x(()=>a+u.top+.004);let y=s.height&&s.height>.3?s.height:1,v=kt(9417983,.42),M=kt(3662079,.55);for(let w=0;w<h.length;w++){let C=h[w],b=h[(w+1)%h.length];if(z1(e,C,b))continue;let S=Math.hypot(b[0]-C[0],b[1]-C[1]),E=a+u.top;t.seg([C[0],E+y,C[1]],[b[0],E+y,b[1]],M,Yt),t.seg([C[0],E+.1,C[1]],[b[0],E+.1,b[1]],v,Yt);let R=Math.max(1,Math.round(S/.12));for(let T=0;T<=R;T++){let I=T/R,A=C[0]+(b[0]-C[0])*I,P=C[1]+(b[1]-C[1])*I;t.seg([A,E,P],[A,E+y,P],T===0||T===R?M:v,Yt)}}break}default:{let _=(v,M)=>l(v,M)+u.top,y=V1(r,o);if(Ae(i,h,c,s.slope?_:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),x((v,M)=>_(v,M)+.004),s.type==="hedge"&&x((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let w=v[M],C=v[(M+1)%v.length];t.seg([w[0],_(w[0],w[1])+.004,w[1]],[C[0],_(C[0],C[1])+.004,C[1]],d,Yt)}}}})}var Yl=Math.PI/180,G1=1.13,H1=1.72,eh=.025,xr=.07,Zp=.25;function Kp(i,t){var n;let e=[];for(let r of i.floors){if(t&&r.id!==t)continue;let{walls:s}=di(r.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},r.walls??[]);for(let o of s){if(!o.exterior&&!o.free)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);if(c<.5)continue;let f=l/c,u=-a/c,h=Math.min(r.height,o.height??r.height),d=((n=o.sources.find(p=>p.room_id===o.roomLeft))==null?void 0:n.edge)??null,g={floorId:r.id,room:o.roomLeft,edge:d,free:!!o.free},x=(p,m,_,y)=>e.push({key:p,section:null,side:"top",flat:!1,o:m,eu:_,es:[0,1,0],n:y,lu:c,ls:h,pitch:90,span:()=>[0,c],facing:[y[0],y[2]],wall:g});x(`wall:${r.id}:${o.id}`,[o.a[0]+f*o.right,r.elevation,o.a[1]+u*o.right],[a/c,0,l/c],[f,0,u]),o.free&&x(`wall:${r.id}:${o.id}:back`,[o.b[0]-f*o.left,r.elevation,o.b[1]-u*o.left],[-a/c,0,-l/c],[-f,0,-u])}}return e}var nh="ground";function ih(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Jp(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=ih(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Hd(s,o,a)):t.base??0;return{key:nh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function W1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function _r(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(_=>X1(_,Bl(i,_,_.overhang??t.overhang)));let e=W1(i);if(!e)return[];let n=e.rooms.flatMap(_=>_.points.map(y=>y[0])),r=e.rooms.flatMap(_=>_.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=e.elevation+e.height;if(t.type==="flat")return[jp("main",null,o,l,a,c,f+Zp)];let u=a-o>=c-l,h=t.ridge==="short"?!u:u,d=(h?c-l:a-o)/2,g=d*Math.tan(t.pitch*Yl),x=(_,y,v)=>h?[_,f+v,(l+c)/2+y]:[(o+a)/2+y,f+v,_],[p,m]=h?[o,a]:[l,c];return[-1,1].map(_=>Xl(`main:${_<0?"a":"b"}`,null,_<0?"a":"b",x(p,_*d,0),x(m,_*d,0),x(p,0,g),t.pitch,()=>[0,m-p]))}function X1(i,t){let e=Qn(i),n=wn(i),r=(x,p,m)=>{let[_,y]=e.at(x,p);return[_,m,y]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),p=e.at(l,e.w+o);return[jp(i.id,i.id,Math.min(x[0],p[0]),Math.min(x[1],p[1]),Math.max(x[0],p[0]),Math.max(x[1],p[1]),i.eave_a+Zp)]}if(i.shape==="pent")return[Xl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let f=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(e.u1-e.u0)/2:f?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=f?e.u0+u-a:0,d=f?l-(e.u1-u):0,g=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(Xl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,p=>[h*(p/x),c-d*(p/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Xl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,p=>[d*(p/x),c-h*(p/x)]))}if(f){let x=n.y(-s),p=n.y(e.w+o),m=[[`${i.id}:c`,"c",r(a,e.w+o,p),r(a,-s,x),r(e.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,p),r(e.u1-u,n.vr,n.rh)]];for(let[_,y,v,M,w]of m){let C=Y1(_,i.id,y,v,M,w);C&&g.push(C)}}return g}function Y1(i,t,e,n,r,s){let o=fo(br(r,n));if(o<.3)return null;let a=Wi(br(r,n)),l=br(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],f=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=fo(f);if(u<.3)return null;let h=Wi(f),d=Wi(em(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Wi([-h[0],0,-h[2]]),x=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Yl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:u,pitch:x,span:m=>{let _=Math.min(1,Math.max(0,m/u));return[c*_,o-(o-c)*_]},facing:[g[0],g[2]]}}function Xl(i,t,e,n,r,s,o,a){let l=Wi(br(r,n)),c=Wi(br(s,n)),f=Wi(em(l,c));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let u=Wi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:f,lu:fo(br(r,n)),ls:fo(br(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function jp(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Qp(i){let t=i.module_w||G1,e=i.module_h||H1;return i.portrait===!1?[e,t]:[t,e]}function q1(i){var t;return(t=i.layout)!=null&&t.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function tm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Yl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Yl:0}function $1(i,t){let[,e]=Qp(t),n=tm(i,t);return i.wall?e*Math.cos(n)+eh:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+eh}function po(i,t,e=!1){let[n,r]=Qp(t),s=[],o=tm(i,t),a=r*Math.cos(o),l=$1(i,t),c=q1(t),f=Math.max(1,...c),u=new Set(t.skip??[]),h=!!i.wall&&n>i.lu+1e-6,d=(x,p,m)=>[i.o[0]+i.eu[0]*x+i.es[0]*p+i.n[0]*m,i.o[1]+i.eu[1]*x+i.es[1]*p+i.n[1]*m,i.o[2]+i.eu[2]*x+i.es[2]*p+i.n[2]*m],g=(x,p)=>{if(i.unbounded)return!0;if(p<-1e-6||p>i.ls+1e-6)return!1;let[m,_]=i.span(p);return x>=m-1e-6&&x<=_+1e-6};return c.forEach((x,p)=>{let m=t.align==="right"?f-x:t.align==="center"?(f-x)/2:0;for(let _=0;_<x;_++){let y=`${p}:${_}`,v=u.has(y);if(v&&!e)continue;let M=t.u+(_+m)*(n+eh),w=t.v+p*l,C=M+n,b=w+(i.flat||i.wall?a:r);if(h){if(!(g((M+C)/2,w)&&g((M+C)/2,b)))continue}else if(![[M,w],[C,w],[C,b],[M,b]].every(([A,P])=>g(A,P)))continue;if(i.wall&&o>.001){let A=xr+r*Math.sin(o),[P,D]=t.flip?[A,xr]:[xr,A],L=[d(M,w,P),d(C,w,P),d(C,b,D),d(M,b,D)],O=t.flip?w:b,B=[M+.05,C-.05].map(k=>[d(k,O,0),d(k,O,A)]);s.push({corners:L,posts:B,cell:y,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,w,xr),d(C,w,xr),d(C,b,xr),d(M,b,xr)],posts:[],cell:y,skipped:v});continue}let S=.15,E=S+r*Math.sin(o),[R,T]=t.flip?[b,w]:[w,b],I=[d(M,R,S),d(C,R,S),d(C,T,E),d(M,T,E)];s.push({corners:I,posts:[M+.05,C-.05].flatMap(A=>[[d(A,R,0),d(A,R,S)],[d(A,T,0),d(A,T,E)]]),cell:y,skipped:v})}}),s}function br(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function fo(i){return Math.hypot(i[0],i[1],i[2])}function Wi(i){let t=fo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function em(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var Z1=.78,K1=1.18;function J1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||Z1,module_h:i.h||K1}}function ql(i,t){let e=po(i,J1(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function $l(i,t,e){let n=t?ql(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>jt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var mo=1712952,go=2239816,sm=1318193,vr=kt(3662079,.9),ls=kt(5995775,.45),Ge=.14,j1=9427199,Q1=13226982,tM=14936565,eM={black:{glass:new K(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new K(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},nM=kt(13226982,.5),iM=kt(13226982,.85),rM=kt(16757575,.95),nm=new K(2845583),im=new K(3818072),rm=new K(4871791);function sM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function om(i,t=new Map){let e=i.settings.roof,n=(e==null?void 0:e.type)==="custom"?null:lM(i),r=(e==null?void 0:e.type)==="custom"?cM(i,e.sections??[],e.overhang):n?[n]:[];return aM(i,r),oM(i,r,t),r}function oM(i,t,e){var s;let n=((s=i.settings.roof)==null?void 0:s.windows)??[];if(!n.length||!t.length)return;let r=new Map(_r(i).map(o=>[o.key,o]));for(let o of n){let a=r.get(o.face),l=a?ql(a,o):null;if(!a||!l)continue;let c=a.section?t.find(L=>{var O;return(O=L.sections)==null?void 0:O.includes(a.section)}):t[0];if(!c)continue;let f=o.float?$l(i,a,o):null,u=f&&f.floor.id!==c.floor.id&&f.floor.elevation<c.floor.elevation?f.floor:null,h=u?u.elevation:c.floor.elevation+c.base,d=L=>[L[0],L[1]-h,L[2]],[g,x,p,m]=l.map(d),_=e.get(o.id)??{open:0,tilt:0,cover:0},y=!!f&&(u!==null||f.floor.id===c.floor.id),v=u?(c.winBelow??=new Map).get(u.id)??c.winBelow.set(u.id,{floor:u,solid:new ne,lines:new Ie}).get(u.id):y?c.win??={solid:new ne,lines:new Ie}:c.winRoof??={solid:new ne,lines:new Ie},M=(L,O)=>[L[0]+a.n[0]*O,L[1]+a.n[1]*O,L[2]+a.n[2]*O],w=(L,O,B)=>[L[0]+(O[0]-L[0])*B,L[1]+(O[1]-L[1])*B,L[2]+(O[2]-L[2])*B],C=_.open>.02||_.tilt>.02?rM:iM,b=[g,x,p,m].map(L=>M(L,.06)),S=[g,x,p,m].map(L=>M(L,-.02));for(let L=0;L<4;L++){v.lines.seg(b[L],b[(L+1)%4],C);let O=(L+1)%4;v.solid.tri(S[L],S[O],b[O],rm),v.solid.tri(S[L],b[O],b[L],rm)}let E=(_.open>.02?30*Math.min(1,_.open):_.tilt>.5?12:0)*ue,R=Math.hypot(p[0]-x[0],p[1]-x[1],p[2]-x[2]),T=L=>{let O=a.es;return[L[0]-O[0]*R*Math.cos(E)+a.n[0]*R*Math.sin(E),L[1]-O[1]*R*Math.cos(E)+a.n[1]*R*Math.sin(E),L[2]-O[2]*R*Math.cos(E)+a.n[2]*R*Math.sin(E)]},I=M(m,.065),A=M(p,.065),P=T(I),D=T(A);v.solid.tri(P,D,A,nm),v.solid.tri(P,A,I,nm);for(let[L,O]of[[P,D],[D,A],[A,I],[I,P]])v.lines.seg(L,O,C);if(_.cover>.02){let L=Math.min(1,_.cover),O=M(w(I,P,L),.01),B=M(w(A,D,L),.01),k=M(I,.01),z=M(A,.01);v.solid.tri(O,B,z,im),v.solid.tri(O,z,k,im)}}}function aM(i,t){var r;let e=((r=i.settings.roof)==null?void 0:r.solar)??[];if(!e.length||!t.length)return;let n=new Map(_r(i).map(s=>[s.key,s]));for(let s of e){let o=n.get(s.face);if(!o)continue;let a=o.section?t.find(l=>{var c;return(c=l.sections)==null?void 0:c.includes(o.section)}):t[0];a&&rh(a.solid,a.lines,o,s,a.floor.elevation+a.base)}}function rh(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=eM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of po(e,n)){let[f,u,h,d]=c.corners.map(s);i.tri(f,u,h,o.glass),i.tri(f,h,d,o.glass),i.tri(f,h,u,o.glass),i.tri(f,d,h,o.glass);let g=(m,_=.004)=>[m[0]+e.n[0]*_,m[1]+e.n[1]*_,m[2]+e.n[2]*_],x=(m,_,y)=>[m[0]+(_[0]-m[0])*y,m[1]+(_[1]-m[1])*y,m[2]+(_[2]-m[2])*y],p=[f,u,h,d].map(m=>g(m));for(let m=0;m<4;m++)t.seg(p[m],p[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(g(x(f,u,m/a)),g(x(d,h,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(g(x(f,d,m/l)),g(x(u,h,m/l)),o.cells);for(let[m,_]of c.posts)t.seg(s(m),s(_),nM)}}function lM(i){let t=i.settings.roof,e=sM(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(E=>E.points.map(R=>R[0])),r=e.rooms.flatMap(E=>E.points.map(R=>R[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=new ne,u=new Ie;if(t.type==="flat"){Ae(f,[[o,l],[a,l],[a,c],[o,c]],0,.25,mo,go,{bottom:!0});let E=.252;for(let[R,T]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([R[0],E,R[1]],[T[0],E,T[1]],vr),u.seg([R[0],0,R[1]],[T[0],0,T[1]],ls);return{floor:e,base:e.height,solid:f,lines:u,glass:new ne}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,g=(d?c-l:a-o)/2,x=g*Math.tan(t.pitch*ue),p=(E,R,T)=>d?[E,T,(l+c)/2+R]:[(o+a)/2+R,T,E],[m,_]=d?[o,a]:[l,c],y=new K(go),v=new K(mo),M=(E,R,T,I,A)=>{f.tri(E,R,T,A),f.tri(E,T,I,A)};for(let E of[-1,1]){M(p(m,E*g,0),p(_,E*g,0),p(_,0,x),p(m,0,x),y),M(p(m,E*g,-Ge),p(m,0,x-Ge),p(_,0,x-Ge),p(_,E*g,-Ge),v),M(p(m,E*g,-Ge),p(_,E*g,-Ge),p(_,E*g,0),p(m,E*g,0),v);for(let R of[m,_])M(p(R,E*g,-Ge),p(R,E*g,0),p(R,0,x),p(R,0,x-Ge),v);u.seg(p(m,E*g,0),p(_,E*g,0),ls);for(let R of[m,_])u.seg(p(R,E*g,0),p(R,0,x),ls)}let w=t.overhang,C=new K(sm),b=g-w,S=b*Math.tan(t.pitch*ue);for(let E of[m+w,_-w])f.tri(p(E,-b,-Ge),p(E,b,-Ge),p(E,0,S-Ge),C),f.tri(p(E,b,-Ge),p(E,-b,-Ge),p(E,0,S-Ge),C);return u.seg(p(m,0,x+.004),p(_,0,x+.004),vr),{floor:e,base:e.height,solid:f,lines:u,glass:new ne}}function cM(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(_r(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=fp(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ne,lines:new Ie,glass:new ne,sections:[],lift:!o.open}),c.sections.push(o.id);let f=Ol(t,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!f,h=t.filter(x=>x!==o&&Ol(t,x)===o).flatMap(x=>up(o,x));for(let x of i.settings.roof.windows??[]){let p=s.get(x.face),m=p&&p.section===o.id?ql(p,x):null;if(!m)continue;let _=m.map(y=>zi(o,y[0],y[2]));h.push({u0:Math.min(..._.map(y=>y[0])),u1:Math.max(..._.map(y=>y[0])),v0:Math.min(..._.map(y=>y[1])),v1:Math.max(..._.map(y=>y[1]))})}let d=f?Vu(f,o):o,g=null;if(f){let x=Qn(d),p=ss(f,{u0:0,u1:0,a:0,b:0}),m=_=>{let[y,v]=x.at(_,x.w/2),[M,w]=zi(f,y,v);return lo(p,M,w)??wn(f).y(w)};g=m(x.u0)<=m(x.u1)?0:1}uM(c.solid,c.lines,d,Bl(i,d,d.overhang??e),a.elevation,c.glass,u,h,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function uM(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Qn(e),f=wn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,u.a),d=Math.max(0,u.b),g=c.w,x=c.u0-Math.max(0,u.u0),p=c.u1+Math.max(0,u.u1),m=(I,A,P)=>{let[D,L]=c.at(I,A);return[D,P-r,L]},_=new K(go),y=new K(mo),v=new K(sm),M=(I,A)=>{for(let P=1;P+1<I.length;P++)i.tri(I[0],I[P],I[P+1],A)},w=[],C=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let I=e.eave_a,A=e.shape==="parapet",P=e.points&&e.points.length>=3?ap(e,A?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):A?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(x,-h),c.at(p,-h),c.at(p,g+d),c.at(x,g+d)];Ae(i,P,I-r,I-r+.25,mo,go,{bottom:!0});for(let D=0;D<P.length;D++){let L=P[D],O=P[(D+1)%P.length];t.seg([L[0],I-r+.252,L[1]],[O[0],I-r+.252,O[1]],vr),t.seg([L[0],I-r,L[1]],[O[0],I-r,O[1]],ls)}if(A){let D=k=>Jn(k)>=0?k:[...k].reverse(),L=D(P),O=Ul(L,-.2),B=L.length;for(let k=0;k<B;k++){let z=D([L[k],L[(k+1)%B],O[(k+1)%B],O[k]]);Ae(i,z,I-r+.25,I-r+.65,mo,go),t.seg([L[k][0],I-r+.652,L[k][1]],[L[(k+1)%B][0],I-r+.652,L[(k+1)%B][1]],vr),t.seg([O[k][0],I-r+.652,O[k][1]],[O[(k+1)%B][0],I-r+.652,O[(k+1)%B][1]],vr)}}}else{let I=ss(e,u);w=I.faces;for(let A of a)w=w.flatMap(P=>hp(P,A));C=I.rim,b=I.ridges,S=I.gable}let E=!!e.open,R=new K(j1);for(let I of w){if(E){for(let A=1;A+1<I.length;A++)s.tri(m(I[0][0],I[0][1],I[0][2]),m(I[A][0],I[A][1],I[A][2]),m(I[A+1][0],I[A+1][1],I[A+1][2]),R);continue}M(I.map(([A,P,D])=>m(A,P,D)),_),M(I.map(([A,P,D])=>m(A,P,D-Ge)),y)}for(let I=0;I<C.length;I++){let[A,P,D]=C[I],[L,O,B]=C[(I+1)%C.length];E||M([m(A,P,D),m(L,O,B),m(L,O,B-Ge),m(A,P,D-Ge)],y),t.seg(m(A,P,D),m(L,O,B),E?vr:ls)}if(E){hM(i,t,c,f,u,m,r);return}for(let[[I,A,P],[D,L,O]]of b)t.seg(m(I,A,P+.004),m(D,L,O+.004),vr);let T=e.base;if(!o){if(S){let I=fM(S,T-Ge),A=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(I.length>=3)for(let P of A)M(I.map(([D,L])=>m(P,D,L)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let I of[0,g]){let A=f.y(I)-Ge;A>T+.02&&M([m(c.u0,I,T),m(c.u1,I,T),m(c.u1,I,A),m(c.u0,I,A)],v)}else if(e.eave_a>T+.02)for(let[I,A,P,D]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])M([m(I,A,T),m(P,D,T),m(P,D,e.eave_a),m(I,A,e.eave_a)],v)}}function hM(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,f=r.a>0,u=r.b>0,h=r.u0>0,d=r.u1>0,g=(m,_,y,v,M,w)=>{let C=[e.at(m,y),e.at(_,y),e.at(_,v),e.at(m,v)],b=(C[1][0]-C[0][0])*(C[2][1]-C[0][1])-(C[2][0]-C[0][0])*(C[1][1]-C[0][1]);Ae(i,b<0?[...C].reverse():C,M-o,w-o,Q1,tM,{bottom:!0})},x=o;for(let[m,_]of[[0,f],[a,u]]){if(!_)continue;let y=n.y(m)-.03,v=m===0?0:a-l;g(e.u0,e.u1,v,v+l,y-c,y),t.seg(s(e.u0,m,y-c),s(e.u1,m,y-c),ls)}for(let[m,_]of[[e.u0,h],[e.u1-l,d]])if(_)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(v),n.y(M))-.03;g(m,m+l,v,M,w-c,w)}let p=[];for(let[m,_]of[[0,f],[a-l,u]]){if(!_)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let w=e.u0+y*M/v;M===0&&!h||M===v&&!d||p.push([w,m])}}if(!f&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&h||m!==e.u0&&d)&&p.push([m,a/2-l/2]);for(let[m,_]of p){let y=n.y(_+l/2)-.03-c;g(m,m+l,_,_+l,x,y)}}function fM(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var xo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},am={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ze=.2,dM=.01,bo=8,Zl=.42,sh=.42;function hm(i,t,e,n=[],r=[],s){let{walls:o,open:a}=di(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,I,A)=>{let P=s?s(T,I):null;return P===null?A:Math.max(.05,Math.min(A,P))},c=(T,I,A,P,D)=>{if(!s)return D;let L=D,O=Math.max(2,Math.ceil((P-A)/.25)+1);for(let B=0;B<O;B++){let k=A+(P-A)*B/(O-1);L=Math.min(L,l(T[0]+I[0]*k,T[1]+I[1]*k,D))}return L},f=new ne(!0,!0),u=[],h=new Ie,d=[];for(let T of i.rooms){if(T.points.length<3)continue;let I=oh(T.points),A=am[T.floor_material]??am.wood,P=new K(A.color),D=n.flatMap(z=>{if(gp(z,I))return[Xu(z,.003)];if(!pp(z))return[];let et=os(I,z);return et.length>=3&&Math.abs(Jn(et))>.01?[Xu(oh(et),.003)]:[]});d.push(...D);let L=[...I,...D.flat()],O=f.count;for(let[z,et,G]of ti(I,D)){let J=L[z],it=L[et],ht=L[G];f.tri([J[0],0,J[1]],[ht[0],0,ht[1]],[it[0],0,it[1]],P,P,P,[J[0],J[1],ht[0],ht[1],it[0],it[1]],Yt,A.tile)}u.push({roomId:T.id,start:O,end:f.count,color:A.color});let B=new K(xo.slab),k=z=>{for(let et=0;et<z.length;et++){let G=z[et],J=z[(et+1)%z.length];f.tri([G[0],-Ze,G[1]],[G[0],0,G[1]],[J[0],0,J[1]],B),f.tri([G[0],-Ze,G[1]],[J[0],0,J[1]],[J[0],-Ze,J[1]],B)}};k(I);for(let z of D){k([...oh(z)].reverse());for(let et=0;et<z.length;et++){let G=z[et],J=z[(et+1)%z.length];h.seg([G[0],.006,G[1]],[J[0],.006,J[1]],dr),h.seg([G[0],-Ze,G[1]],[J[0],-Ze,J[1]],Gi)}}}let g=new Map,x=[],p=new Map;for(let T of o){let I="interior",A=null;if(T.exterior){let D=T.b[0]-T.a[0],L=T.b[1]-T.a[1],O=Math.hypot(D,L)||1,B=[L/O,-D/O],k=(Math.round(Math.atan2(B[1],B[0])/(2*Math.PI)*bo)%bo+bo)%bo;I=`s${k}`;let z=k/bo*2*Math.PI;A=[Math.cos(z),Math.sin(z)]}let P=g.get(I);P===void 0&&(P=x.length,g.set(I,P),x.push(A)),p.set(T,P)}let m=new Map,_=[];for(let T of i.openings){let I=ro(T,i.rooms,i.walls??[]);if(!I)continue;let A=so(o,T,I);if(!A)continue;let{wall:P,s:D}=A,L=jl([P.b[0]-P.a[0],P.b[1]-P.a[1]]),O=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),B=Math.min(T.width,O),k=Math.max(0,Math.min(O-B,D-B/2)),z=I.room.points,et=P.free?L[0]*(z[1][0]-z[0][0])+L[1]*(z[1][1]-z[0][1])>0:P.exterior||P.roomLeft===T.room_id,G=[-L[1],L[0]],J=et?G:[-G[0],-G[1]],it=Math.min(c(P.a,L,k,k+B,Kl(P,i.height))-.02,T.sill+T.height),ht=Math.max(0,Math.min(T.sill,it-.1)),Y=[J[1],-J[0]],$=L[0]*Y[0]+L[1]*Y[1]>0,at={opening:T,bucket:p.get(P),start:[P.a[0]+L[0]*k,P.a[1]+L[1]*k],axis:L,width:B,toRoom:J,faceRoom:et?P.left:P.right,faceOut:et?P.right:P.left,sill:ht,top:it,hingeAtStart:T.hinge==="left"===$,exterior:P.exterior};_.push(at);let ct=m.get(P);ct||m.set(P,ct=[]),ct.push({s0:k,s1:k+B,sill:ht,top:it,info:at})}let y=Math.min(i.cut_height,i.height),v=new ne;for(let T of o){let I=p.get(T),A=jl([T.b[0]-T.a[0],T.b[1]-T.a[1]]),P=(m.get(T)??[]).sort((G,J)=>G.s0-J.s0),D=Kl(T,i.height),L=[],O=[-1/0,...new Set(P.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,J)=>G-J);for(let G=0;G+1<O.length;G++){let J=O[G],it=O[G+1];if(it-J<1e-6)continue;let ht=Number.isFinite(J)&&Number.isFinite(it)?(J+it)/2:Number.isFinite(J)?J+1:it-1,Y=P.filter(ct=>ct.s0<ht&&ct.s1>ht).map(ct=>[ct.sill,ct.top]).sort((ct,ut)=>ct[0]-ut[0]),$=[],at=-Ze;for(let[ct,ut]of Y)ct>at+1e-4&&$.push([at,ct<1e-4?-dM:ct]),at=Math.max(at,ut);D>at+1e-4&&$.push([at,D]),L.push({t0:J,t1:it,ranges:$})}let B=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),k=s&&c(T.a,A,0,B,D)<D-.001,z=k?L.flatMap(G=>{let J=Math.max(G.t0,-.5),it=Math.min(G.t1,B+.5),ht=Math.max(1,Math.ceil((it-J)/.3));return Array.from({length:ht},(Y,$)=>({t0:$===0?G.t0:J+(it-J)*$/ht,t1:$===ht-1?G.t1:J+(it-J)*($+1)/ht,ranges:G.ranges,inner0:$>0,inner1:$<ht-1}))}):L.map(G=>({...G,inner0:!1,inner1:!1})),et=G=>(G[0]-T.a[0])*A[0]+(G[1]-T.a[1])*A[1];for(let G of z){let J=mM(T.footprint,T.a,A,G.t0,G.t1);if(J.length<3)continue;let it=($,at)=>Math.abs(et($)-at)<1e-4,ht=($,at)=>G.inner0&&it($,G.t0)&&it(at,G.t0)||G.inner1&&it($,G.t1)&&it(at,G.t1),Y=k?Math.min(...J.map(([$,at])=>l($,at,D))):D;for(let[$,at]of G.ranges){let ct=Math.min(at,k?Math.max(...J.map(([Mt,Ot])=>l(Mt,Ot,D))):at);if(ct-$<1e-4||Y-$<.01)continue;let ut=$>.01,pt=k&&at>Y,gt=(Mt,Ot)=>Math.min(at,l(Mt,Ot,D));if($<y-1e-6){let Mt=ct>y+1e-6?Ep+I:pr+I,Ot=pt&&Y<y?(ie,zt)=>Math.min(y,gt(ie,zt)):Math.min(ct,y);Ae(v,J,$,Ot,xo.wall,xo.wallTop,{aoFrom:0,bottom:ut,fold:pr+I,topFold:Mt,skipSide:ht})}ct>y+1e-6&&Y>y+1e-6&&Ae(v,J,Math.max($,y),pt?gt:ct,xo.wall,xo.wallTop,{aoFrom:0,fold:I,bottom:ut&&$>=y,skipSide:ht})}}}let M=o.flatMap(T=>T.footprint),w=xM(o,M),C=new Ie;C.p.push(...h.p),C.c.push(...h.c),C.f.push(...h.f);let b=(T,I)=>(m.get(T)??[]).filter(I);for(let T of w.edges){let I=p.get(T.wall);for(let[P,D]of Jl(T,b(T.wall,L=>L.sill<=.005)))C.seg([P[0],.004,P[1]],[D[0],.004,D[1]],Tp);for(let[P,D]of Jl(T,b(T.wall,L=>L.sill<y&&L.top>y)))C.seg([P[0],y,P[1]],[D[0],y,D[1]],qu,Vl+I);let A=Kl(T.wall,i.height);for(let[P,D]of Jl(T,b(T.wall,L=>L.top>=A-.021))){if(!s){C.seg([P[0],A,P[1]],[D[0],A,D[1]],dr,A<=y+1e-6?pr+I:I);continue}let L=Math.max(1,Math.ceil(Math.hypot(D[0]-P[0],D[1]-P[1])/.3));for(let O=0;O<L;O++){let B=[P[0]+(D[0]-P[0])*O/L,P[1]+(D[1]-P[1])*O/L],k=[P[0]+(D[0]-P[0])*(O+1)/L,P[1]+(D[1]-P[1])*(O+1)/L],z=l(B[0],B[1],A),et=l(k[0],k[1],A);C.seg([B[0],z,B[1]],[k[0],et,k[1]],dr,Math.max(z,et)<=y+1e-6?pr+I:I)}}}for(let T of w.corners){let I=l(T.p[0],T.p[1],Kl(T.wall,i.height));C.segSplit([T.p[0],.004,T.p[1]],[T.p[0],I,T.p[1]],Gi,Math.min(y,I),p.get(T.wall))}for(let T of m.values())for(let I of T)pM(C,I,y);let S=bM(w.edges,i.rooms,m),E=new ne;$p(v,C,i,E);for(let T of r)rh(v,C,T.face,T.field,i.elevation);let R=[];for(let T of i.furniture){if(Kd(T.type))continue;let I=v.count,A=C.p.length/6,P=qe(i,T);Gl(v,C,S,T,P),P+T.h>y+.05&&(Ap(v,I,y,$u),Rp(C,A,y,$u)),R.push({id:T.id,start:I,end:v.count})}return{floor:f.geometry(),roomTris:u,holes:d,walls:v.geometry(),water:E.geometry(),lines:C.geometry(),shadow:S.geometry(),buckets:x,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(T=>p.get(T)),furnitureTris:R,roofUnder:s}}function pM(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,f)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,f,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Yt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Gi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Gi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Gi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Gi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Gi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),qu,Vl+r)}function mM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=lm(o,a=>s(a)-n)),Number.isFinite(r)&&(o=lm(o,a=>r-s(a))),o}function lm(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var cm=i=>Math.round(i*1e3),_o=i=>`${cm(i[0])},${cm(i[1])}`,um=(i,t)=>{let e=_o(i),n=_o(t);return e<n?`${e}|${n}`:`${n}|${e}`};function gM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let h=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((u,h)=>u-h);let f=r;for(let u of c){let h=[r[0]+o*u,r[1]+a*u];_o(h)!==_o(f)&&e.push([f,h]),f=h}e.push([f,s])}return e}function xM(i,t){let e=i.map(l=>({wall:l,edges:gM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,f]of l){let u=um(c,f);n.set(u,(n.get(u)??0)+1)}let r=[],s=new Map,o=(l,c,f)=>{let u=_o(l),h=s.get(u);h||s.set(u,h={p:l,wall:c,d:[]}),h.d.push(f)};for(let{wall:l,edges:c}of e)for(let[f,u]of c){if(n.get(um(f,u))!==1)continue;let h=Math.hypot(u[0]-f[0],u[1]-f[1]);if(h<1e-4)continue;r.push({a:f,b:u,wall:l});let d=[(u[0]-f[0])/h,(u[1]-f[1])/h];o(f,l,d),o(u,l,d)}let a=[];for(let{p:l,wall:c,d:f}of s.values())f.some(u=>f.some(h=>Math.abs(u[0]*h[1]-u[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Jl(i,t){if(!t.length)return[[i.a,i.b]];let e=jl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=jl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([h,d])=>{if(u.s1<=h||u.s0>=d)return[[h,d]];let g=[];return u.s0>h&&g.push([h,u.s0]),u.s1<d&&g.push([u.s1,d]),g});let f=u=>{let h=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([u,h])=>h-u>1e-4).map(([u,h])=>s<=o?[f(u),f(h)]:[f(h),f(u)])}function bM(i,t,e){let n=new ne,r=new K(sh,sh,sh),s=new K(1,1,1),o=.002;for(let a of i)for(let[l,c]of Jl(a,(e.get(a.wall)??[]).filter(f=>f.sill<=.005))){let f=c[0]-l[0],u=c[1]-l[1],h=Math.hypot(f,u);if(h<.05)continue;let d=[u/h,-f/h],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&jt(g,m.points)))continue;let x=[l[0]+d[0]*Zl,l[1]+d[1]*Zl],p=[c[0]+d[0]*Zl,c[1]+d[1]*Zl];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[p[0],o,p[1]],r,s,s),n.tri([l[0],o,l[1]],[p[0],o,p[1]],[c[0],o,c[1]],r,s,r)}return n}function fm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Bi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Wu(e);let r=n.furniture.filter(s=>{var o;return($d.has(s.type)||((o=we(s.type))==null?void 0:o.hole))&&n.elevation+s.h>=t.elevation-.3}).map(Bi);return Wu([...e,...r])}function Kl(i,t){return Math.min(t,i.height??t)}function jl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function oh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var _M=new K(1516340),vM=new K(527897),ah=new K(1779256),vo=new K(1120808),yM=new K(4163256),dm=new K(5995161),MM=new K(2240842),SM=new K(1318704),wM=.35,cs=.8,TM=.2,pm=.1;function EM(i,t){var n;if(((n=i.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=mm(i,t);return!!e&&e.some(([r,s])=>Il(r,s)-t.elevation>-.15)}function mm(i,t){return t.rooms.some(e=>e.points.length>=3)?lp(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function AM(i,t,e,n){let r=-1/0;for(let s of i.floors)for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||Kn(o.type)||!jt(e,o.points)||(r=Math.max(r,s.elevation+cr(s,o)+ns[o.type]-t.elevation));return r>n?r-n:0}function gm(i,t,e,n=!1){var g;if(((g=i.settings.terrain)==null?void 0:g.earth)===!1||t.elevation>.3)return null;let r=mm(i,t);if(!r)return null;let s=(x,p)=>Il(x,p)-t.elevation,o=n&&r.some(([x,p])=>s(x,p)<-Ze-.03);if(!o&&!EM(i,t))return null;let a=t.height,l=-wM,c=(x,p)=>Math.min(a,Il(x,p)-t.elevation),f=new ne,u=new ne,h=new Ie,d=(x,p,m,_,y,v,M,w)=>{let C=[p[0]-x[0],p[2]-x[2]];-C[1]*y[0]+C[0]*y[1]>0?(w.tri(x,p,m,v,v,M),w.tri(x,m,_,v,M,M)):(w.tri(x,m,p,v,M,v),w.tri(x,_,m,v,M,M))};for(let x=0;x<r.length;x++){let p=r[x],m=r[(x+1)%r.length],_=Math.hypot(m[0]-p[0],m[1]-p[1]);if(_<1e-4)continue;let y=[(m[0]-p[0])/_,(m[1]-p[1])/_],v=[y[1],-y[0]],M=[(p[0]+m[0])/2+v[0]*.05,(p[1]+m[1])/2+v[1]*.05];jt(M,r)&&(v=[-v[0],-v[1]]);let w=(R,T=.012)=>[p[0]+y[0]*R+v[0]*T,p[1]+y[1]*R+v[1]*T],C=[];for(let R of e){if(R.opening.type!=="window"||!R.exterior||R.opening.well===!1)continue;let T=R.start[0]+R.axis[0]*(R.width/2)-R.toRoom[0]*R.faceOut,I=R.start[1]+R.axis[1]*(R.width/2)-R.toRoom[1]*R.faceOut,A=(T-p[0])*y[0]+(I-p[1])*y[1];Math.abs((T-p[0])*v[0]+(I-p[1])*v[1])>.08||A<-.05||A>_+.05||R.sill>=c(T,I)-.05||C.push({s0:Math.max(0,A-R.width/2-pm),s1:Math.min(_,A+R.width/2+pm),bottom:Math.max(l+.05,R.sill-TM),rim:R.opening.well_rim??0})}let b=new Set([0,_]);for(let R of C)b.add(R.s0),b.add(R.s1);let S=[...b].sort((R,T)=>R-T),E=[];for(let R=0;R<S.length-1;R++){let T=Math.max(1,Math.ceil((S[R+1]-S[R])/.5));for(let I=0;I<T;I++)E.push(S[R]+(S[R+1]-S[R])*I/T)}E.push(_);for(let R=0;R<E.length-1;R++){let T=E[R],I=E[R+1],A=C.find(G=>T>=G.s0-1e-6&&I<=G.s1+1e-6),P=w(T),D=w(I),L=c(P[0],P[1]),O=c(D[0],D[1]),B=A?Math.min(L,A.bottom):L,k=A?Math.min(O,A.bottom):O;if(B>l+.01||k>l+.01){let G=Math.min(B,l),J=Math.min(k,l);d([P[0],G,P[1]],[D[0],J,D[1]],[D[0],Math.max(k,l),D[1]],[P[0],Math.max(B,l),P[1]],v,vM,_M,f)}let z=s(P[0],P[1]),et=s(D[0],D[1]);if(o&&(z<-Ze-.01||et<-Ze-.01)&&d([P[0],Math.min(z,-Ze),P[1]],[D[0],Math.min(et,-Ze),D[1]],[D[0],-Ze,D[1]],[P[0],-Ze,P[1]],v,SM,MM,f),L>l||O>l||o&&(z<-Ze||et<-Ze)){let G=o?Math.min(z,Math.max(L,l)):Math.max(L,l),J=o?Math.min(et,Math.max(O,l)):Math.max(O,l);h.seg([P[0],G+.004,P[1]],[D[0],J+.004,D[1]],yM)}}for(let R of C){let T=w(R.s0,0),I=w(R.s1,0),A=[T[0]+v[0]*cs,T[1]+v[1]*cs],P=[I[0]+v[0]*cs,I[1]+v[1]*cs],D=[(T[0]+I[0]+A[0]+P[0])/4,(T[1]+I[1]+A[1]+P[1])/4],L=AM(i,t,D,c(D[0],D[1])),O=Math.max(R.rim,L>0?L+.02:0),B=it=>c(it[0],it[1])+O,k=R.bottom,z=(it,ht)=>[it[0],ht,it[1]];u.tri(z(T,k),z(I,k),z(P,k),vo),u.tri(z(T,k),z(P,k),z(A,k),vo);let et=(it,ht)=>{u.tri(z(it,k),z(ht,k),z(ht,B(ht)),vo,vo,ah),u.tri(z(it,k),z(ht,B(ht)),z(it,B(it)),vo,ah,ah)};et(T,A),et(I,P),et(A,P);let G=it=>[it[0],B(it)+.01,it[1]];for(let[it,ht]of[[T,I],[I,P],[P,A],[A,T]])h.seg(G(it),G(ht),dm);let J=Math.max(3,Math.round((R.s1-R.s0)/.12));for(let it=1;it<J;it++){let ht=it/J,Y=[T[0]+(I[0]-T[0])*ht,T[1]+(I[1]-T[1])*ht];h.seg(G(Y),G([Y[0]+v[0]*cs,Y[1]+v[1]*cs]),dm)}}}return f.count||u.count?{earth:f,wells:u,lines:h}:null}var xm=i=>Math.round(i*1e3)/1e3;function RM(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,f)=>{let u=l.points[(f+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function bm(i,t,e,n,r,s=.05){let o=i.rooms.find(h=>h.points.length>=3&&jt([t.x,t.z],h.points));if(!o)return[e,n];let a=o.points,l=Un(a)>=0?1:-1,c=Bi({...t}),f=e,u=n;for(let h=0;h<2;h++){let d=Bi({...t,x:f,z:u});for(let g=0;g<a.length;g++){let x=a[g],p=a[(g+1)%a.length],m=Math.hypot(p[0]-x[0],p[1]-x[1]);if(m<.05)continue;let _=[(p[0]-x[0])/m,(p[1]-x[1])/m],y=[-_[1]*l,_[0]*l],v=RM(i,o.id,x,p)?r/2:0,M=0;d.forEach((w,C)=>{let b=(w[0]-x[0])*_[0]+(w[1]-x[1])*_[1];if(b<-.01||b>m+.01)return;let S=(w[0]-x[0])*y[0]+(w[1]-x[1])*y[1]-v,E=c[C];(E[0]-x[0])*y[0]+(E[1]-x[1])*y[1]-v<-s||S<M&&(M=S)}),M<-1e-4&&(f-=y[0]*M,u-=y[1]*M)}}return[xm(f),xm(u)]}var CM=500,_m=.12,vm=1.35,PM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Ql=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:f}=this.flight,u=Math.min(1,(t-c)/f),h=PM(u);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=lh(this.view.phi+this.velocity.phi,_m,vm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},CM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){var s,o,a,l,c,f;let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){(o=(s=this.events).swipeMove)==null||o.call(s,t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let u=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&((l=(a=this.events).swipeStart)!=null&&l.call(a,this.down.x-u.left,this.down.y-u.top,t.clientX-this.down.x,t.clientY-this.down.y))){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},(f=(c=this.events).swipeMove)==null||f.call(c,t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let u=e.type==="mouse";if(u&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!u))this.pan(n,r);else{let d=this.el.clientHeight||1,g=-n/d*3.2,x=-r/d*2.4;this.view.theta+=g,this.view.phi=lh(this.view.phi+x,_m,vm),this.velocity={theta:g,phi:x}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let u=this.pinchState();this.pinch&&u&&(this.zoom(this.pinch.dist/Math.max(1,u.dist)),this.pan(u.mid[0]-this.pinch.mid[0],u.mid[1]-this.pinch.mid[1])),this.pinch=u}this.events.change()}onUp(t){var e,n,r,s;if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),(n=(e=this.events).drop)==null||n.call(e);return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,(s=(r=this.events).swipeEnd)==null||s.call(r);return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let o=this.el.getBoundingClientRect(),a=t.clientX-o.left,l=t.clientY-o.top,c=performance.now();c-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(a,l)):(this.lastTap=c,this.events.tap(a,l))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=lh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function lh(i,t,e){return Math.min(e,Math.max(t,i))}function Xi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
attribute float fold;
uniform int uStanding;
uniform int uGlass;`).replace("#include <project_vertex>",`#include <project_vertex>
      {
        bool fp3dShow = ${e==="glass"?"false":"true"};
        if (fold > -0.5) {
          int fp3dFold = int(fold + 0.5);
          int fp3dKind = fp3dFold / 16;
          int fp3dBucket = fp3dFold - fp3dKind * 16;
          bool fp3dStanding = ((uStanding >> fp3dBucket) & 1) == 1;
          bool fp3dGlass = ((uGlass >> fp3dBucket) & 1) == 1;
          // kinds: 0 upper part, 1 cut edge, 2 lower part, 3 cap at the cut height, 4 furniture above the cut
          fp3dShow = fp3dKind == 0 || fp3dKind == 4 ? fp3dStanding : fp3dKind == 1 || fp3dKind == 3 ? !fp3dStanding : true;
          bool fp3dWall = fp3dKind == 0 || fp3dKind == 2;
          ${e==="solid"?"if (fp3dGlass && fp3dWall) fp3dShow = false;":""}
          ${e==="glass"?"fp3dShow = fp3dShow && fp3dGlass && fp3dWall;":""}
        }
        if (!fp3dShow) gl_Position = vec4(2.0, 2.0, 2.0, 1.0);
      }`),e==="glass"&&(n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
        diffuseColor.rgb = diffuseColor.rgb * 1.7 + vec3(0.015, 0.05, 0.075);
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function ym(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Mm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=ym(s,o),c=ym(o,a),f=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],h=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(f<.005||u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*f,o[1]+u[1]*f,o[2]+u[2]*f],g=[o[0]+h[0]*f,o[1]+h[1]*f,o[2]+h[2]*f];for(let x=0;x<=e;x++){let p=x/e,m=(1-p)*(1-p),_=2*(1-p)*p,y=p*p;n.push([m*d[0]+_*o[0]+y*g[0],m*d[1]+_*o[1]+y*g[1],m*d[2]+_*o[2]+y*g[2]])}}return n.push(i[i.length-1]),n}var Sm=new K(7568261),wm=new K(4869974),IM=new K(3116287),Tm=new K(3948872),ch=yr([.35,.85,.4]),Em=10;function yr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function yo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Am(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=yr(yo(i,t));return[e,yr(yo(i,e))]}function pi(i,t){let e=.5+.5*Math.max(0,t[0]*ch[0]+t[1]*ch[1]+t[2]*ch[2]);return i.clone().multiplyScalar(e)}function us(i,t,e,n,r,s=!1){let o=yr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Am(o),c=(f,u)=>{let h=u/Em*Math.PI*2,d=[a[0]*Math.cos(h)+l[0]*Math.sin(h),a[1]*Math.cos(h)+l[1]*Math.sin(h),a[2]*Math.cos(h)+l[2]*Math.sin(h)];return{p:[f[0]+d[0]*n,f[1]+d[1]*n,f[2]+d[2]*n],n:d}};for(let f=0;f<Em;f++){let u=c(t,f),h=c(t,f+1),d=c(e,f),g=c(e,f+1);i.tri(u.p,g.p,d.p,pi(r,u.n),pi(r,g.n),pi(r,d.n)),i.tri(u.p,h.p,g.p,pi(r,u.n),pi(r,h.n),pi(r,g.n)),s&&(i.tri([...t],h.p,u.p,pi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,g.p,pi(r,o)))}}function LM(i,t,e,n,r,s,o,a){let l=yr(yo(e,n)),c=(u,h,d)=>[t[0]+e[0]*u*r+n[0]*h*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*h*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*h*s+l[2]*d*o],f=[];for(let[u,h]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])f.push([u,[c(h,-.5,-.5),c(h,.5,-.5),c(h,.5,.5),c(h,-.5,.5)]]);for(let[u,h]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])f.push([u,[c(-.5,h,-.5),c(.5,h,-.5),c(.5,h,.5),c(-.5,h,.5)]]);for(let[u,h]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])f.push([u,[c(-.5,-.5,h),c(.5,-.5,h),c(.5,.5,h),c(-.5,.5,h)]]);for(let[u,h]of f){let d=pi(a,u);i.tri(h[0],h[1],h[2],d),i.tri(h[0],h[2],h[3],d),i.tri(h[0],h[2],h[1],d),i.tri(h[0],h[3],h[2],d)}}function Rm(i,t){if(t.points.length<2)return;let e=t.radius,n=Mm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?Sm.clone().multiplyScalar(.55):Sm;us(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);us(i,o,a,e*1.22,wm,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);us(i,o,a,e*1.08,t.water?new K(...t.water).multiplyScalar(.9):new K(10475240),!0);for(let l of s(.08)){let[c,f]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];us(i,c,f,e*1.3,wm,!0)}}else{let[o,a]=s(.055);us(i,o,a,e*1.4,Tm,!0);let[l]=Am(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],f=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];us(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],f,e*.35,Tm,!0);let u=r.open===!1?yr(yo(r.dir,c)):r.dir,h=yr(yo(u,c)),d=[f[0]+u[0]*.045,f[1]+u[1]*.045,f[2]+u[2]*.045];LM(i,d,u,h,.1,.028,.012,IM)}}}var uh=1.62,FM=.2,hh=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let r=di(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=r.walls;let s=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=ro(o,e.rooms,e.walls??[]);if(!l)continue;let c=so(this.walls,o,l);if(!c)continue;let f=s.get(c.wall)??[];f.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),s.set(c.wall,f);let u=c.wall,h=u.b[0]-u.a[0],d=u.b[1]-u.a[1],g=Math.hypot(h,d)||1,x=h/g,p=d/g,m=[u.a[0]+x*c.s,u.a[1]+p*c.s],_=u.left+.45,y=u.right+.45;this.doors.push({centre:m,p:[[m[0]-p*_,m[1]+x*_],[m[0]+p*y,m[1]-x*y]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:s.get(o)??[]})}}blocked(t,e=FM){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(u=>u.p).filter(u=>!this.blocked(u))],r=n.length,s=new Array(r).fill(1/0),o=new Array(r).fill(-1),a=new Array(r).fill(!1);s[0]=0;let l=new Map,c=(u,h)=>{let d=u<h?`${u}:${h}`:`${h}:${u}`,g=l.get(d);return g===void 0&&(g=this.clear(n[u],n[h]),l.set(d,g)),g};for(;;){let u=-1;for(let h=0;h<r;h++)!a[h]&&s[h]<1/0&&(u<0||s[h]<s[u])&&(u=h);if(u<0)return null;if(u===1)break;a[u]=!0;for(let h=0;h<r;h++){if(a[h]||h===u)continue;let d=Math.hypot(n[u][0]-n[h][0],n[u][1]-n[h][1]);s[u]+d>=s[h]||c(u,h)&&(s[h]=s[u]+d,o[h]=u)}}let f=[];for(let u=1;u>0;u=o[u])f.unshift(n[u]);return f}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=ro(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=so(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c)||1,u=l/f,h=c/f,d=[a.a[0]+u*o.s,a.a[1]+h*o.s],g=[d[0]-h*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(g))return{p:g,yaw:this.openYaw(g,Math.atan2(u,-h))}}let e=[...this.rooms].sort((r,s)=>Cm(s)-Cm(r))[0],n=e?this.freeNear(hr(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function Cm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var fh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+uh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-uh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(hr(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,f=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,f),n=!0}else if(this.path.length){let[l,c]=this.path[0],f=l-r.x,u=c-r.z,h=Math.hypot(f,u),d=1.4*e;h<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=f/h*d,r.z+=u/h*d,this.turnTo=Math.atan2(u,f)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=(t==null?void 0:t.id)??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,f=this.v.camera.fov*Math.PI/180,u=Math.tan(f/2),h=n.width/n.height,d=Math.cos(a),g=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],p=[g[1]*x[2]-g[2]*x[1],g[2]*x[0]-g[0]*x[2],g[0]*x[1]-g[1]*x[0]],m=[-p[0],-p[1],-p[2]],_=[g[0]+x[0]*r*u*h+m[0]*s*u,g[1]+x[1]*r*u*h+m[1]*s*u,g[2]+x[2]*r*u*h+m[2]*s*u];if(_[1]>=-.02)return null;let y=uh/-_[1];return[l+_[0]*y,c+_[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!(c!=null&&c.capture)])},e=null;t(this.surface,"pointerdown",o=>{var a,l;e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},(l=(a=this.surface).setPointerCapture)==null||l.call(a,o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>{var a,l;return!!((l=(a=o.composedPath()[0])==null?void 0:a.closest)!=null&&l.call(a,"input, textarea, select"))};t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function DM(i,t){let e=we(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function dh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?DM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function ph(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let f=e.length/3,u=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=NM(c.id)%1e3/1e3;for(let x of po(l,c)){let[p,m,_,y]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[p,0,0],[m,1,0],[_,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,C,b]=v[M];e.push(w[0],w[1],w[2]),n.push(C,b),r.push(u,h),s.push(d)}}let g=e.length/3-f;g&&o.push({id:c.id,start:f,count:g})}if(!e.length)return null;let a=new Kt;return a.setAttribute("position",new Gt(e,3)),a.setAttribute("uv",new Gt(n,2)),a.setAttribute("aCells",new Gt(r,2)),a.setAttribute("aPhase",new Gt(s,1)),a.setAttribute("aLevel",new Gt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Mo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function mh(i){let t=new se({transparent:!0,blending:Le,depthWrite:!1,side:de});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aCells;
attribute float aLevel;
attribute float aPhase;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCells = aCells;
vLevel = aLevel;
vPhase = aPhase;
vLiveUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying vec2 vCells;
varying float vLevel;
varying float vPhase;
varying vec2 vLiveUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        // the cell borders of the module
        vec2 fp3dG = abs(fract(vLiveUv * vCells) - 0.5);
        float fp3dLine = smoothstep(0.455, 0.5, max(fp3dG.x, fp3dG.y));
        // a band of light sweeping down the module towards the eave, faster with more power
        float fp3dSweep = exp(-fract(vLiveUv.y * 1.3 + uFlowTime * (0.12 + 0.3 * vLevel) + vPhase) * 4.0);
        // a second, faint band crossing the other way keeps the picture alive
        float fp3dBack = 0.35 * exp(-fract(vLiveUv.x * 0.9 - uFlowTime * 0.07 + vPhase * 2.0) * 6.0);
        // the cells glow softly, their borders light up as the band passes
        float fp3dGlow = vLevel * (0.07 + 0.32 * fp3dSweep + 0.10 * fp3dBack) + fp3dLine * vLevel * (0.35 + 0.9 * fp3dSweep);
        vec3 fp3dAmber = vec3(1.0, 0.76, 0.30);
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function NM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Im=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,UM=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  uniform float uSurface;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    // the surface of a pool with a basin is a faint shimmer, the light's pattern lies on the floor below
    float base = mix(0.32, 0.16, uSurface);
    float lines = mix(0.35 + 0.6 * uFlow, 0.18 + 0.3 * uFlow, uSurface);
    vec3 col = uColor * uLevel * (base + lines * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,OM=Im,BM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Pm(i,t){let e=[];for(let[r,s,o]of ti(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Kt;return n.setAttribute("position",new Gt(e,3)),n}function Lm(i,t){let e=new ke;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Vt(Pm(n.points,o),new an({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Im,fragmentShader:UM,transparent:!0,blending:Le,depthWrite:!1,side:de}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(p=>p[0]),a=n.points.map(p=>p[1]),[l,c,f,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],h=c-l>=u-f,d=Math.min(1,n.cover),g=h?[[l-.1,f-.1],[l+(c-l)*d,f-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,f-.1],[c+.1,f-.1],[c+.1,f+(u-f)*d],[l-.1,f+(u-f)*d]],x=os(n.points,g);if(x.length>=3){let p=new Vt(Pm(x,n.y+.03),new an({uniforms:{uAxis:{value:h?[1,0]:[0,1]}},vertexShader:OM,fragmentShader:BM,transparent:!0,side:de}));p.renderOrder=6,e.add(p);let m=[];for(let y=0;y<x.length;y++){let v=x[y],M=x[(y+1)%x.length];m.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let _=new Kt;_.setAttribute("position",new Gt(m,3)),e.add(new Ye(_,new Je({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Fm(i){var t,e,n;for(let r of i.children)(t=r.geometry)==null||t.dispose(),(n=(e=r.material)==null?void 0:e.dispose)==null||n.call(e);i.clear()}var Dm=["neon","blueprint","day"];function Nm(i){return Dm.indexOf(i)}var tc={value:new H(.22,.88,1)},ec={value:0};function Um(i){let t=/^#?([0-9a-f]{6})$/i.exec((i==null?void 0:i.trim())??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var kM=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
    return c;
  }
  // signal colours keep their colour
  if (!line && mx > 0.45 && sat > 0.45) return c;
  float l = dot(c, vec3(0.299, 0.587, 0.114));
  if (uTheme == 1) {
    // blueprint: white lines on shades of blue
    if (line) return vec3(0.8, 0.9, 1.0) * min(1.0, mx * 1.15);
    return mix(vec3(0.04, 0.13, 0.3), vec3(0.2, 0.42, 0.75), clamp(l * 5.0, 0.0, 1.0));
  }
  // day: light surfaces with a hint of their hue, dark blue lines
  if (line) return vec3(0.08, 0.17, 0.38) * clamp(mx * 1.4, 0.4, 1.0);
  vec3 g = vec3(clamp(0.66 + l * 2.6, 0.0, 0.96));
  return mix(g, g * (c / max(mx, 0.001)), 0.1);
}
`;function cn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=tc,s.uniforms.uAccentOn=ec,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${kM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function So(i){return i==="day"?Fi:Le}var mi=.012,zM=.012;function Bm(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],f=[],u=(m,_,y,v,M,w,C)=>{for(let b of[m,_,y,m,y,v])a.push(b[0],b[1],b[2]),l.push(M[0],M[1],M[2]),c.push(w),f.push(C)};i.rooms.forEach((m,_)=>{if(m.points.length<3)return;let y=m.points.map(R=>R[0]),v=m.points.map(R=>R[1]),M=Math.min(...y),w=Math.min(...v),C=Math.max(...y),b=Math.max(...v),S=Math.max(1,Math.ceil((C-M)/r)),E=Math.max(1,Math.ceil((b-w)/r));for(let R=0;R<S;R++)for(let T=0;T<E;T++){let I=M+R*r,A=w+T*r,P=Math.min(I+r,C),D=Math.min(A+r,b),L=os(m.points,[[I,A],[P,A],[P,D],[I,D]]),O=L.length>=3?Math.abs(YM(L)):0;if(O<1e-4)continue;let B=qM(L);if(!s.some(k=>jt(B,k))){if(O>(P-I)*(D-A)-1e-6){u([I,mi,A],[I,mi,D],[P,mi,D],[P,mi,A],[0,1,0],_,-1);continue}for(let[k,z,et]of ti(L)){let G=L[k],J=L[et],it=L[z];(it[1]-G[1])*(J[0]-G[0])-(it[0]-G[0])*(J[1]-G[1])<0&&([G,J]=[J,G]),u([G[0],mi,G[1]],[it[0],mi,it[1]],[J[0],mi,J[1]],[J[0],mi,J[1]],[0,1,0],_,-1)}}}});let h=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!Kn(m.type));if(d.length){let m=d.flatMap(b=>b.points.map(S=>S[0])),_=d.flatMap(b=>b.points.map(S=>S[1])),y=Math.floor(Math.min(...m)/r)*r,v=Math.floor(Math.min(..._)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-y)/r)),w=Math.max(1,Math.ceil((Math.max(..._)-v)/r)),C=(b,S,E)=>qp(i,b)-eo(i,b,S,E)+mi;for(let b=0;b<M;b++)for(let S=0;S<w;S++){let E=y+b*r,R=v+S*r,T,I=[E+r/2,R+r/2];T=d.find(P=>P.type==="pool"&&jt(I,P.points));for(let P=d.length-1;P>=0&&!T;P--)jt(I,d[P].points)&&(T=d[P]);if(!T)continue;let A=(P,D)=>[P,C(T,P,D),D];u(A(E,R),A(E,R+r),A(E+r,R+r),A(E+r,R),[0,1,0],h,-1)}}let g=Math.min(i.cut_height,i.height),x=[];t.forEach((m,_)=>{let y=Math.min(i.height,m.height??i.height),v=Math.min(g,y-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],C=Math.hypot(M,w);if(C<.05)return;let b=[M/C,w/C],S=[-b[1],b[0]],E=e[_],R=GM(m,b,C,n),T=(D,L)=>D?i.rooms.findIndex(O=>O.id===D):L?h:-1;x.push({a:m.a,b:m.b,h:y,ra:T(m.roomLeft,!1),rb:T(m.roomRight,m.exterior),gaps:R});let I=(D,L,O)=>[L,O,...D.filter(B=>B>L+.005&&B<O-.005)].sort((B,k)=>B-k).filter((B,k,z)=>k===0||B>z[k-1]+.005),A=I([v,(v+y)/2,...R.flatMap(D=>[D.y0+.01,D.y1-.01])],.02,y-.02),P=I(R.flatMap(D=>[D.s0,D.s1]),0,C);for(let D of[1,-1]){let L=D>0?m.roomLeft:m.roomRight,O=L?i.rooms.findIndex(G=>G.id===L):m.exterior?h:-1;if(O<0)continue;let B=(D>0?m.left:m.right)+zM,k=[S[0]*D,S[1]*D],z=(G,J)=>[m.a[0]+b[0]*G+k[0]*B,J,m.a[1]+b[1]*G+k[1]*B],et=G=>{let J=z(G,0),it=o==null?void 0:o(J[0],J[2]);return it==null?1/0:it-.02};for(let G=0;G<P.length-1;G++){let J=P[G+1]-P[G],it=Math.max(1,Math.ceil(J/r));for(let ht=0;ht<it;ht++){let Y=P[G]+J/it*ht,$=P[G]+J/it*(ht+1),at=(Y+$)/2;for(let ct=0;ct<A.length-1;ct++){let ut=A[ct],pt=A[ct+1];if(pt-ut<.01)continue;let gt=(ut+pt)/2;if(R.some(zt=>at>zt.s0&&at<zt.s1&&gt>zt.y0&&gt<zt.y1))continue;let Mt=ut>=g-1e-6?E:pr+E,Ot=Math.min(pt,et(Y)),ie=Math.min(pt,et($));Ot<=ut+.005&&ie<=ut+.005||u(z(Y,ut),z($,ut),z($,Math.max(ut,ie)),z(Y,Math.max(ut,Ot)),[k[0],0,k[1]],O,Mt)}}}}});let p=[];for(let m of n){if(m.opening.type!=="door")continue;let _=t.find(M=>km(M,m)&&VM(M,m));if(!_||!_.roomLeft||!_.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===_.roomLeft),v=i.rooms.findIndex(M=>M.id===_.roomRight);y<0||v<0||p.push({id:m.opening.id,a:y,b:v,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(f),doors:p,blockers:x}}function km(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function VM(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function GM(i,t,e,n){let r=[];for(let s of n){if(!km(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function HM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function WM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Om(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,f=a*a+l*l+c*c,u=Math.sqrt(f)||1e-6,h=WM(i),d=1/(1+f/(h*h)),g=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*g*(.2+.8*x)*HM(i.kind,l/u)}function zm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((f,u)=>{let h=n[u]??.5;if(!(h<=.01))for(let[d,g]of[[f.a,f.b],[f.b,f.a]]){let x=[0,0,0];for(let m of t){if(m.room!==d)continue;let _=m.x-f.x,y=m.y-f.y,v=m.z-f.z,M=Math.hypot(_,y,v)||1,w=Om(m,f.x,f.y,f.z,_/M,y/M,v/M);x[0]+=m.color[0]*w,x[1]+=m.color[1]*w,x[2]+=m.color[2]*w}let p=Math.max(x[0],x[1],x[2]);p<.01||r.push({x:f.x,y:f.y,z:f.z,color:[x[0]/p,x[1]/p,x[2]/p],level:Math.min(1,p*.9*(.35+.65*h)),kind:"wall",room:g})}});let s=new Map;for(let f of r){let u=i.blockers.filter(d=>d.ra===f.room||d.rb===f.room),h={...f,color:f.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(f.room,[...s.get(f.room)??[],h])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let f=0;f<l.length;f++){let u=s.get(l[f]);if(!u)continue;let h=f*3,d=0,g=0,x=0;for(let p of u){if(p.walls.length&&XM(p,p.walls,o[h],o[h+1],o[h+2]))continue;let m=Om(p,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);d+=p.color[0]*m,g+=p.color[1]*m,x+=p.color[2]*m}c[h]=1-Math.exp(-d*e*1.6),c[h+1]=1-Math.exp(-g*e*1.6),c[h+2]=1-Math.exp(-x*e*1.6)}return c}function XM(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=s*c-o*l;if(Math.abs(f)<1e-9)continue;let u=a.a[0]-i.x,h=a.a[1]-i.z,d=(u*c-h*l)/f;if(d<=1e-6||d>=1-1e-6)continue;let g=(u*o-h*s)/f;if(g<0||g>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let p=g*Math.hypot(l,c);if(!a.gaps.some(m=>p>m.s0&&p<m.s1&&x>m.y0&&x<m.y1))return!0}return!1}function Vm(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&jt([t,e],r.points));return n<0?i.rooms.length:n}function nc(i,t){return i&&t>=0&&t<i.length?i[t]:t}function YM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function qM(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var wo={open:0,open2:0,tilt:0,tilt2:0,cover:null},Gm=2043986,Hm=2769520,$M=2242399,gh=1845831,ZM=1450554,gi=16758087,KM=1.2,JM=1.5,jM=1846349,QM=2572395,tS=1120816,eS=1845831,Wm=5995775,Xm=9085695,hs=kt(3662079,.08),nS=.2;function ic(i,t,e,n,r,s,o,a,l,c,f){let u=(d,g,x)=>t(d,g,x),h=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),kt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),kt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),kt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),kt(l.getHex(),.92)]];for(let[d,g,x,p,m]of h)i.tri(d,g,x,m,m,m,void 0,f),i.tri(d,x,p,m,m,m,void 0,f)}function he(i,t,e,n,r,s,o,a,l,c,f,u){if(a<=f+1e-6)return ic(i,t,e,n,r,s,o,a,l,c,Yt);if(o>=f-1e-6)return ic(i,t,e,n,r,s,o,a,l,c,u);ic(i,t,e,n,r,s,o,f,l,c,Yt),ic(i,t,e,n,r,s,f,a,l,c,u)}function Yi(i,t,e,n,r,s,o,a,l,c,f=0){let u=(h,d,g)=>{let x=v=>f?(o-v)/f:.5,p=t(e,r,h),m=t(n,r,h),_=t(n,r,d),y=t(e,r,d);i.tri(p,m,_,a,a,a,[0,x(h),1,x(h),1,x(d)],g),i.tri(p,_,y,a,a,a,[0,x(h),1,x(d),0,x(d)],g)};o<=l+1e-6?u(s,o,Yt):s>=l-1e-6?u(s,o,c):(u(s,l,Yt),u(l,o,c))}function iS(i,t,e,n,r,s,o,a,l,c){let f=t(e,r,o),u=t(n,r,o),h=t(n,s,o),d=t(e,s,o),g=0,x=(s-r)/c;i.tri(f,u,h,a,a,a,[0,g,1,g,1,x],l),i.tri(f,h,d,a,a,a,[0,g,1,x,0,x],l)}function Ym(i,t,e){let n=new ne,r=new ne,s=new ne(!0),o=new K(Gm),a=new K(Hm),l=[],c=[],f=[];for(let u of i){let h=n.count,d=r.count,g=s.count,x=t.get(u.opening.id)??wo,p=u.width,{sill:m,top:_,bucket:y}=u,v=(b,S,E)=>[u.start[0]+u.axis[0]*b+u.toRoom[0]*S,E,u.start[1]+u.axis[1]*b+u.toRoom[1]*S],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",C=u.opening.type==="door"&&ur(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!C||u.opening.type==="garage"){let b=-u.faceOut-.012,S=u.faceRoom+.012,E=u.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),R=E?kt(gi,.8):new K(Gm),T=E?kt(gi,1):new K(Hm);he(n,v,-.045,.02,b,S,0,_+.045,R,T,e,y),he(n,v,p-.02,p+.045,b,S,0,_+.045,R,T,e,y),he(n,v,.02,p-.02,b,S,_-.02,_+.045,R,T,e,y)}if(u.opening.type==="door"){let b=ur(u.opening,u.exterior),S=jd(b),E=u.opening.swing==="out"?-1:1,R=E>0?u.faceRoom:-u.faceOut,T=u.opening.leaves===2,I=.02,A=p-.02,P=Jd(p,b,u.hingeAtStart,u.opening);if(P){let B=-u.faceOut-.012,k=u.faceRoom+.012,z=R-E*(S?.06:.04)/2,et=.06;for(let[G,J]of P.panels)he(n,v,G,G+et,B,k,.02,_-.02,o,a,e,y),he(n,v,J-et,J,B,k,.02,_-.02,o,a,e,y),he(n,v,G+et,J-et,B,k,.02,.12,o,a,e,y),Yi(r,v,G+et,J-et,z,.12,_-.02,hs,e,y);I=P.x0,A=P.x1}let D=T?(A-I)/2-.004:A-I,L=S?.06:.04;S&&(he(n,v,.02,p-.02,-u.faceOut-.02,u.faceRoom,0,.02,new K(gh),a,e,y),u.exterior&&he(n,v,p/2-.08,p/2+.08,-u.faceOut-.1,-u.faceOut,_+.1,_+.17,kt(gi,.55),kt(gi,.85),e,Yt));let O=C?[]:[[u.hingeAtStart,x.open]];T&&!C&&O.push([!u.hingeAtStart,x.open2??0]);for(let[B,k]of O){let z=Math.min(1,Math.max(0,k)),et=b==="sliding"?0:z*JM,G=b==="sliding"?z*D:0,J=(gt,Mt,Ot)=>{let ie=gt*Math.cos(et)-Mt*Math.sin(et)-G,zt=R+E*(Mt*Math.cos(et)+gt*Math.sin(et)+(G?.05:0));return v(B?I+ie:A-ie,zt,Ot)},it=z>.05?Yt:y,ht=w?!!x.sensed&&z<.05:z>.9,Y=ht?kt(gi,.7):new K(S?tS:jM),$=ht?kt(gi,.9):new K(S?eS:QM);b==="glass"?(he(n,J,0,.05,-L,0,.01,_-.01,Y,$,e,it),he(n,J,D-.05,D,-L,0,.01,_-.01,Y,$,e,it),he(n,J,.05,D-.05,-L,0,.01,.12,Y,$,e,it),he(n,J,.05,D-.05,-L,0,_-.08,_-.01,Y,$,e,it),Yi(r,J,.05,D-.05,-L/2,.12,_-.08,hs,e,it)):he(n,J,0,D,-L,0,.01,_-.01,Y,$,e,it),b==="front_glass"?Yi(r,J,.12,D-.12,.001,_*.55,_-.18,hs,e,it):S&&Yi(r,J,.1,.18,.001,.3,_-.3,hs,e,it);let at=Math.min(1.05,_*.5),ct=S?.3:.012,ut=S?D-.11:D-.16,pt=S?D-.08:D-.05;he(n,J,ut,pt,.004,.05,at-ct,at+ct,new K(Wm),new K(Xm),e,it),he(n,J,ut,pt,-L-.05,-L-.004,at-ct,at+ct,new K(Wm),new K(Xm),e,it)}}else if(u.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new K(13951231),E=u.faceRoom-.03,R=_*(1-b);b>.01&&Yi(s,v,.02,p-.02,E,R,_,S,e,y,.5);let T=(1-b)*_;T>.01&&iS(s,v,.02,p-.02,E,E+T,_+.03,S,y,.5)}else if(ur(u.opening,u.exterior)==="glass_wall"){he(n,v,0,.04,M-.025,M+.025,m,_,o,a,e,y),he(n,v,p-.04,p,M-.025,M+.025,m,_,o,a,e,y),he(n,v,.04,p-.04,M-.025,M+.025,m,m+.03,o,a,e,y),he(n,v,.04,p-.04,M-.025,M+.025,_-.04,_,o,a,e,y);let E=Math.max(1,Math.round((p-2*.04)/.9)),R=(p-2*.04)/E;for(let T=1;T<E;T++){let I=.04+T*R;he(n,v,I-.02,I+.02,M-.025,M+.025,m+.03,_-.04,o,a,e,y)}for(let T=0;T<E;T++){let I=.04+T*R+(T?.02:0),A=.04+(T+1)*R-(T<E-1?.02:0);Yi(r,v,I,A,M,m+.03,_-.04,hs,e,y)}}else{he(n,v,0,.06,M-.035,M+.035,m,_,o,a,e,y),he(n,v,p-.06,p,M-.035,M+.035,m,_,o,a,e,y),he(n,v,.06,p-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),o,a,e,y),he(n,v,.06,p-.06,M-.035,M+.035,_-.06,_,o,a,e,y),m>.3&&(he(n,v,-.04,p+.04,M+.035,u.faceRoom+.07,m-.03,m,new K(gh),a,e,y),u.exterior&&he(n,v,-.03,p+.03,-u.faceOut-.06,M-.035,m-.04,m-.02,new K(gh),a,e,y));let E=.055,R=m+(m>.05?.06:.03),T=_-.06,I=M+.035,A=M+.035+.06,D=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:p/2,x1:u.hingeAtStart?p/2:p-.06,open:x.open,tilt:x.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?p/2:.06,x1:u.hingeAtStart?p-.06:p/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:p-.06,open:x.open,tilt:x.tilt}];for(let L of D){let O=L.open>.02||L.tilt>.02,B=w?!!x.sensed&&!O:O,k=B?kt(gi,.75):new K($M),z=B?kt(gi,.95):a,et=L.x0,G=L.x1,J=G-et,it=L.open*KM*(u.opening.swing==="out"?-1:1),ht=L.tilt*nS,Y=(at,ct,ut)=>{let pt=ut-R,gt=ct+pt*Math.sin(ht),Mt=R+pt*Math.cos(ht),Ot=at*Math.cos(it)-(gt-I)*Math.sin(it);gt=I+(gt-I)*Math.cos(it)+at*Math.sin(it);let ie=L.atStart?et+Ot:G-Ot;return v(ie,gt,Mt)},$=Math.abs(it)>.05?Yt:y;if(he(n,Y,0,E,I,A,R,T,k,z,e,$),he(n,Y,J-E,J,I,A,R,T,k,z,e,$),he(n,Y,E,J-E,I,A,R,R+E,k,z,e,$),he(n,Y,E,J-E,I,A,T-E,T,k,z,e,$),Yi(r,Y,E,J-E,(I+A)/2,R+E,T-E,B?kt(gi,.16):hs,e,$),ur(u.opening,u.exterior)==="bars"){let at=(R+T)/2,ct=(I+A)/2;he(n,Y,E,J-E,ct-.012,ct+.012,at-.012,at+.012,k,z,e,$),he(n,Y,J/2-.012,J/2+.012,ct-.012,ct+.012,R+E,T-E,k,z,e,$)}}}if(x.cover!==null){let b=-u.faceOut,S=_+.2;he(n,v,-.05,p+.05,b-.15,b,_,S,new K(ZM),a,e,y);let E=Math.min(1,Math.max(0,x.cover));if(E>.01){let R=_-E*(_-m);Yi(s,v,0,p,b-.07,R,_,new K(16777215),e,y,.045)}}l.push({id:u.opening.id,start:h,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),f.push({id:u.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:f}}var rS=.3,qm=2.6;function $m(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),f=c-l>=a-o,u=e*.7071,h=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],C=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(b=>jt(b,i))&&!n.some(b=>C.some(S=>jt(S,b)))},d=(M,w)=>h(f?[M,w]:[w,M]),g=(M,w)=>{let C=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let b=1;b<C;b++)if(!h([M[0]+(w[0]-M[0])*b/C,M[1]+(w[1]-M[1])*b/C]))return!1;return!0},[x,p,m,_]=f?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=x+e;M<=p-e+1e-6;M+=t){let w=null,C=null,b=.05;for(let T=m;T<=_+1e-6;T+=b)if(d(M,T)&&(C??=T),(!d(M,T)||T+b>_+1e-6)&&C!==null){let I=d(M,T)?T:T-b;(!w||I-C>w[1]-w[0])&&(w=[C,I]),C=null}if(!w||w[1]-w[0]<.2)continue;let S=T=>{let[I,A]=T?w:[w[1],w[0]];return[f?[M,I]:[I,M],f?[M,A]:[A,M]]},E=S(v),R=y[y.length-1];if(R&&n.length&&!g(R,E[0])){let T=S(!v);if(!g(R,T[0]))continue;E=T,v=!v}y.push(E[0],E[1]),v=!v}return y}function bh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var xh=i=>Math.atan2(Math.sin(i),Math.cos(i));function Zm(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=xh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),qm*e),!0)}let a=Math.atan2(r,s),l=xh(a-i.heading);if(i.heading=xh(i.heading+Math.sign(l)*Math.min(Math.abs(l),qm*e)),Math.abs(l)<.35){let c=Math.min(o,rS*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Tn=null,Km=new Map;function jm(i,t=0){let e=new ne,n=new Ie,r=we(i.type);if(r!=null&&r.light)Wl(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)_h(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Gl(e,n,new ne,s)}return{buf:e,lines:n}}function sS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Km.get(r);if(s)return s;e&&Qs(e),Tn??=new lr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Tn.setSize(t,t,!1),Tn.setClearColor(0,0);let{buf:o,lines:a}=jm(i),l=new Ai,c=new Vt(o.geometry(),new se({vertexColors:!0,color:new K(n,n,n)})),f=new Ye(a.geometry(),new Je({vertexColors:!0,color:new K(n*1.8,n*1.8,n*1.8)}));l.add(c,f);let u=new hn().setFromObject(c),h=u.getCenter(new H),d=new Xn(-1,1,1,-1,.01,100);d.position.copy(h).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(h),d.updateMatrixWorld();let g=.05;for(let m of[u.min.x,u.max.x])for(let _ of[u.min.y,u.max.y])for(let y of[u.min.z,u.max.z]){let v=new H(m,_,y).applyMatrix4(d.matrixWorldInverse);g=Math.max(g,Math.abs(v.x),Math.abs(v.y))}let x=g*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),Tn.render(l,d);let p=Tn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose(),Km.set(r,p),p}function oS(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Jm.get(s);if(o)return o;n&&Qs(n);let{buf:a,lines:l}=jm(i,t),c=new Vt(a.geometry(),new se({vertexColors:!0,color:new K(r,r,r)})),f=new Ye(l.geometry(),new Je({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)})),u=new hn().setFromObject(c);if(u.isEmpty())return null;let h=u.min.x,d=u.max.x,g=Math.max(0,u.min.y),x=u.max.y,p=Math.max(1,Math.min(1024,Math.round((d-h)*e))),m=Math.max(1,Math.min(1024,Math.round((x-g)*e)));Tn??=new lr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(1),Tn.setSize(p,m,!1),Tn.setClearColor(0,0);let _=new Ai;_.add(c,f);let y=new Xn(h,d,x,g,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Tn.render(_,y);let v=Tn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose();let M={url:v,x0:h,x1:d,y0:g,y1:x};return Jm.set(s,M),M}var Jm=new Map;var MR={Group:ke,Mesh:Vt,MeshBasicMaterial:se,CanvasTexture:li,Color:K,PlaneGeometry:ci,BufferGeometry:Kt,Float32BufferAttribute:Gt,DoubleSide:de},t0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},aS=2.4,e0=1.4,lS=.22,n0=.94,i0=140,yh=32,cS=500,r0=160,s0=33,o0=.028,uS=.09,Zt=2767456,hS=1911110,fS=1,a0=new Set(["ceiling","ceiling_fan","downlight","spot","panel","pendant","strip"]),rc=450,l0=125,dS=.08,pS=2*Math.PI/1.4,Mh={ceiling:[.4,.4,.08],ceiling_fan:[1.2,1.2,.35],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},mS=new K(1714765);function gS(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Sh=class{host;options;renderer;scene=new Ai;camera=new rn(38,1,.1,400);controls;labels;root=new ke;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;fanFloors=new Set;fanAngle=0;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ye(new Kt,new Je({color:10471679,transparent:!0,opacity:.4,blending:Le,depthWrite:!1}));snow=new Xr(new Kt,new nr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Vt(new Cs(1,28),new se({color:16767370,transparent:!0,opacity:0,blending:Le,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=bS(),this.blindTexture=vS(),this.haloTexture=MS(),this.ground=new Vt(new ci(1,1),new se({transparent:!1,blending:Le,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Qs(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,Vd(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(f=>f.floor.rooms.some(u=>u.id===t)),n=e==null?void 0:e.floor.rooms.find(f=>f.id===t);if(!e||!n)return;let r=n.start_view;if(r){let f=e.floor.elevation+e.ty,[u,h]=hr(n.points),d=r.target??{x:u,y:.3,z:h};this.controls.flyTo({target:new H(d.x,d.y+f,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=hr(n.points),a=n.points.map(f=>f[0]),l=n.points.map(f=>f[1]),c=new H(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new H(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.fanFloors=new Set(t.filter(n=>n.fanBlades&&(n.fanSpeed??0)>0).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){var n;this.solarLevels=t;let e=!1;for(let r of((n=this.roof)==null?void 0:n.lives)??[])Mo(r,t)&&(e=!0);for(let r of this.floors)r.solarLive&&Mo(r.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>{var s;return`${r.id}:${r.floorId}:${r.points.length}:${(s=r.points[0])==null?void 0:s.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`}).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Fm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Lm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){var n,r,s;let e=o=>o.map(a=>`${a.id}:${a.floorId}:${a.x},${a.z}:${a.level.toFixed(2)}:${a.playing?1:0}:${a.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(o=>o.playing);for(let o of this.floors){let a=o.soundGroup??=(()=>{let h=new ke;return h.renderOrder=6,o.group.add(h),h})();for(let h of[...a.children])a.remove(h),(n=h.geometry)==null||n.dispose(),(s=(r=h.material)==null?void 0:r.dispose)==null||s.call(r);let l=t.filter(h=>h.floorId===o.floor.id),c=.03;for(let h of l)if(h.playing)for(let d=0;d<3;d++){let g=new Vt(new Ds(.92,1,48),new se({color:3662079,transparent:!0,opacity:0,blending:Le,depthWrite:!1,side:de}));g.rotation.x=-Math.PI/2,g.position.set(h.x,c+d*.002,h.z),g.userData={sound:!0,phase:d/3,level:h.level},g.frustumCulled=!1,a.add(g)}let f=[],u=new Set;for(let h of l)for(let d of h.members){let g=l.find(p=>p.id===d);if(!g||g===h)continue;let x=[h.id,g.id].sort().join("|");u.has(x)||(u.add(x),f.push(h.x,c+.02,h.z,g.x,c+.02,g.z))}if(f.length){let h=new Kt;h.setAttribute("position",new Gt(f,3));let d=new Ye(h,new Je({color:3662079,transparent:!0,opacity:.45,blending:Le,depthWrite:!1}));d.userData={soundLine:!0},a.add(d)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=vh(r),o=c0(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ne;for(let s of e)Rm(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Um(t),n=e?1:0;n===ec.value&&(!e||tc.value.equals(new H(...e)))||(ec.value=n,e&&tc.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Nm(t);let e=So(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new K(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new ws(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){let r=t.geometry.getAttribute("position");if(((r==null?void 0:r.count)??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let f=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([f,u,h],c*3),n&&o.set([f,u-.45,h],c*3+3)}t.geometry.dispose();let l=new Kt;l.setAttribute("position",new Gt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let f=0;f<l.length;f+=6){let u=l[f+1]-c,h=l[f]+o*n;u<r.y0&&(u+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[f]=h,l[f+1]=u,l[f+3]=h-o*.05,l[f+4]=u-.45,l[f+5]=l[f+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let f=0;f<l.length;f+=3){let u=l[f+1]-(.9+.6*e.snow)*n,h=l[f]+(o+Math.sin(c+f)*.4)*n;u<r.y0&&(u+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[f]=h,l[f+1]=u}a.needsUpdate=!0}return!0}placeSky(){var d;let t=this.sun,e=this.weather,n=(e==null?void 0:e.cloud)??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(((d=this.building)==null?void 0:d.settings.north)??0)*ue,o=(r?t.azimuth+180:t.azimuth)*ue,a=Math.max(10,Math.abs(t.elevation))*ue,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),f=Math.min(300,Math.max(80,this.houseRadius*5)),u=new H(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,f),this.skyDisc.scale.setScalar(f*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){var e,n;this.floorInfo=t;for(let r of this.floors){let s=r.label.querySelector("span"),o=t.get(r.floor.id)??((n=(e=this.options).floorInfo)==null?void 0:n.call(e,r.floor))??"";s&&s.textContent!==o&&(s.textContent=o,r.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??wo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/r0),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){var n,r;let e=new ne;for(let s of t.floor.furniture){if(s.type!=="fridge_smart")continue;let o=this.fridges.get(s.id);kp(e,s,qe(t.floor,s),(o==null?void 0:o.l)??0,(o==null?void 0:o.r)??0)}for(let s of t.floor.furniture)s.type==="awning"&&Bp(e,s,qe(t.floor,s),((n=this.awnings.get(s.id))==null?void 0:n.cur)??0);for(let s of t.floor.furniture){let o=Rl(s.type),a=o?we(s.type):void 0;o&&a&&Xp(e,a,o,s,qe(t.floor,s),((r=this.awnings.get(s.id))==null?void 0:r.cur)??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){var t,e,n,r,s;this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let o of[this.rain,this.snow,this.skyDisc])o.geometry.dispose(),o.material.dispose();this.resizeObserver.disconnect(),(t=this.intersection)==null||t.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),(e=this.groundTexture)==null||e.dispose(),this.haloTexture.dispose();for(let o of this.robots.values())o.led.dispose();this.robots.clear(),(n=this.robotGeo)==null||n.dispose(),(r=this.robotLedGeo)==null||r.dispose(),(s=this.robotMat)==null||s.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&gS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new lr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=De,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Ql(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>{var e,n;return this.swipe&&((n=(e=this.options).onDeviceSwipe)==null?void 0:n.call(e,this.swipe.entity,"move",t,this.swipe.x,this.swipe.y))},swipeEnd:()=>{var t,e;this.swipe&&((e=(t=this.options).onDeviceSwipe)==null||e.call(t,this.swipe.entity,"end",0,this.swipe.x,this.swipe.y)),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{var r,s;let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):(s=(r=this.options).onBack)==null||s.call(r)}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){var t;for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let n of e.screenPics.values())n.mesh.material.dispose(),(t=n.texture)==null||t.dispose();e.group.traverse(n=>{let r=n.geometry;r==null||r.dispose()});for(let n of Object.values(e.materials))n.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",f=>{if(this.furnish){this.pendingDevice=t;return}f.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{var d,g;l=!0;let u=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(g=(d=this.options).onDeviceHold)==null||g.call(d,t,u.left+u.width/2-h.left,u.top+u.height/2-h.top)},cS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",f=>f.preventDefault()),e.addEventListener("click",f=>{var d,g,x,p;if(f.stopPropagation(),this.furnish){this.selectDevice(t),(g=(d=this.options).onDeviceSelect)==null||g.call(d,t);return}if(l)return;let u=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(p=(x=this.options).onDeviceTap)==null||p.call(x,t,u.left+u.width/2-h.left,u.top+u.height/2-h.top)}),e.addEventListener("keydown",f=>{var u,h;if(f.key==="Enter"&&f.shiftKey||f.key==="ContextMenu"){f.preventDefault();let d=e.getBoundingClientRect(),g=this.host.getBoundingClientRect();(h=(u=this.options).onDeviceHold)==null||h.call(u,t,d.left+d.width/2-g.left,d.top+d.height/2-g.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Bm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=u0(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=nc(r,a.ra),a.rb=nc(r,a.rb)}t.lightSurface=n;let s=new Kt;s.setAttribute("position",new Gt(n.pos,3)),s.setAttribute("color",new Gt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Gt(n.fold,1));let o=new tr(new Uint32Array(n.pos.length/3),1);o.setUsage(lu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Vm(t.floor,n.x,n.z),a=nc(t.lightZones,o),[l,,c]=n.size??(n.lamp?Mh[n.lamp]:[.3,.3,.3]),f=n.base??0,u={ceiling:[s-.12,"ceiling"],ceiling_fan:[s-.3,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],floor:[f+c-.15,"omni"],uplight:[f+c,"up"],table:[f+c-.1,"omni"],wall:[f+.1,"wall"],strip:[f+Math.max(.02,c)-.01,f<fS?"up":"ceiling"],bollard:[f+c-.08,"ceiling"],garden:[f+c,"up"]},[h,d]=n.lamp?u[n.lamp]:[n.y,"omni"],g=n.lightY??h,x=r.color;if(n.lamp==="strip"){let p=(n.rotation??0)*ue,m=!!n.upright||Math.abs(n.roll??0)>45;for(let _ of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:f+l*(.5+_),z:n.z,color:x,level:r.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(p)*l*_,y:g,z:n.z+Math.sin(p)*l*_,color:x,level:r.level*.55,kind:m?"omni":d,room:a})}else e.push({x:n.x,y:g,z:n.z,color:x,level:r.level,kind:d,room:a})}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(u=>{let h=t.geo.openings.find(g=>g.opening.id===u.id);if(h&&ur(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=zm(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let h=0;h<e.room.length;h++)if(e.room[h]!==u)for(let d=0;d<3;d++)l[h*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,f=0;for(let u=0;u<l.length/18;u++){let h=!1;for(let d=u*18;d<u*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[f++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,f),t.glowMesh.visible=f>0}makeMaterials(t){return{floor:cn(new se({vertexColors:!0}),this.themeUniform),pattern:_S(this.patternTexture),wall:cn(Xi(new se({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Xi(new se({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new se({vertexColors:!0,blending:zs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:de,polygonOffset:!0,polygonOffsetFactor:-1}),lines:cn(Xi(new Je({vertexColors:!0,transparent:!0,blending:So(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Xi(new se({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:cn(Xi(new se({vertexColors:!0,side:de}),t),this.themeUniform),glass:Xi(new se({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de}),t),blinds:cn(Xi(new se({map:this.blindTexture,vertexColors:!0,side:de}),t),this.themeUniform),water:cn(new se({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:de}),this.themeUniform),flow:yS(this.flowTime),solarLive:mh(this.flowTime),lamps:cn(new se({vertexColors:!0}),this.themeUniform),halos:new nr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1}),cones:new se({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de}),screens:new se({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de}),earth:cn(new se({vertexColors:!0}),this.themeUniform),earthWell:cn(new se({vertexColors:!0,side:de}),this.themeUniform),earthLines:cn(new Je({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){var s,o,a,l;let t=new Map(this.floors.map(c=>[c.floor.id,{y:c.y,o:c.o}])),e=new Map(this.floors.map(c=>[c.floor.id,c.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((c,f)=>c.elevation-f.elevation);for(let c of n.floors){let f=((s=n.settings.roof)==null?void 0:s.solar)??[],u=((o=ih(n))==null?void 0:o.id)===c.id?f.filter(gt=>gt.face===nh).map(gt=>({field:gt,face:Jp(n,gt)})):[],h=f.filter(gt=>gt.face.startsWith(`wall:${c.id}:`));if(h.length){let gt=new Map(Kp(n,c.id).map(Mt=>[Mt.key,Mt]));for(let Mt of h){let Ot=gt.get(Mt.face);Ot&&u.push({field:Mt,face:Ot})}}let g=(n.settings.roof.sections??[]).some(gt=>sp(gt,c.elevation+c.height))?(gt,Mt)=>{let Ot=op(n,gt,Mt);return Ot===null?null:Ot-c.elevation}:void 0,x=hm(dh(c,this.parked),n.settings.wall_exterior,n.settings.wall_interior,fm(n.floors,c),u,g),p={standing:{value:65535},glass:{value:0}},m=this.makeMaterials(p),_=new ke,y=new Vt(x.floor,m.floor),v=new Vt(x.shadow,m.shadow);v.renderOrder=1;let M=new Vt(x.floor,m.pattern);M.renderOrder=2;let w=new Vt(new Kt,m.glow);w.renderOrder=3,w.visible=!1;let C=new Vt(new Kt,m.frames),b=new Vt(new Kt,m.blinds),S=new Vt(new Kt,m.glass);S.renderOrder=4;let E=new Vt(new Kt,m.lamps);E.visible=!1;let R=new Vt(new Kt,m.cones);R.visible=!1,R.renderOrder=3;let T=new Xr(new Kt,m.halos);T.visible=!1,T.renderOrder=7;let I=new Vt(new Kt,m.cones);I.visible=!1,I.renderOrder=7;let A=new Vt(new Kt,m.cones);A.visible=!1,A.renderOrder=7;let P=new Vt(new Kt,m.lamps);P.visible=!1;let D=new Vt(new Kt,m.lamps);D.visible=!1;let L=new Vt(new Kt,m.screens);L.visible=!1,L.renderOrder=5;let O=new Vt(new Kt,m.flow);O.renderOrder=5,O.frustumCulled=!1;let B=ph(u,c.elevation),k=B?new Vt(B.geometry,m.solarLive):null;k&&(k.renderOrder=6,Mo(B,this.solarLevels));for(let gt of[C,b,S])gt.frustumCulled=!1;let z=new Vt(x.walls,m.glassWall),et=new Vt(x.walls,m.wall);z.renderOrder=6;let G=new Vt(x.water,m.water);G.renderOrder=4;let J=Math.min(...n.floors.filter(gt=>gt.rooms.length).map(gt=>gt.elevation)),it=gm(n,c,x.openings,c.elevation===J),ht=it?[new Vt(it.earth.geometry(),m.earth),new Vt(it.wells.geometry(),m.earthWell),new Ye(it.lines.geometry(),m.earthLines)]:[];for(let gt of ht)gt.userData.earth=!0;_.add(y,v,M,w,et,G,new Ye(x.lines,m.lines),C,b,S,O,E,R,T,I,A,P,D,L,z,...k?[k]:[],...ht),this.root.add(_);let Y=document.createElement("button");Y.className="fp3d-pin fp3d-pin-floor",Y.dataset.floor=c.id;let $=document.createElement("b");$.textContent=c.name||"\u2013";let at=document.createElement("span");at.textContent=this.floorInfo.get(c.id)??((l=(a=this.options).floorInfo)==null?void 0:l.call(a,c))??"",Y.append($,at),Y.addEventListener("click",()=>{var gt,Mt;return(Mt=(gt=this.options).onFloorTap)==null?void 0:Mt.call(gt,c.id)}),this.labels.append(Y);let ct=t.get(c.id),ut=[],pt=null;for(let gt of c.rooms){let Mt=document.createElement("button");Mt.className="fp3d-pin",Mt.dataset.room=gt.id,Mt.dataset.floor=c.id,this.fillRoomPin(Mt,gt.name,this.roomInfo.get(gt.id)),Mt.addEventListener("click",()=>{var zt,fe;return(fe=(zt=this.options).onRoomTap)==null?void 0:fe.call(zt,c.id,gt.id)}),this.labels.append(Mt);let[Ot,ie]=hr(gt.points);ut.push({pin:Mt,room:gt,cx:Ot,cz:ie});for(let[zt,fe]of gt.points)pt??={x0:zt,x1:zt,z0:fe,z1:fe},pt.x0=Math.min(pt.x0,zt),pt.x1=Math.max(pt.x1,zt),pt.z0=Math.min(pt.z0,fe),pt.z1=Math.max(pt.z1,fe)}this.floors.push({floor:c,rank:r.indexOf(c),group:_,geo:x,floorMesh:y,shadowMesh:v,patternMesh:M,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:C,glassMesh:S,blindsMesh:b,flowMesh:O,solarMesh:k,solarLive:B,lampMesh:E,sunMesh:R,sunSig:"",haloMesh:T,coneMesh:I,trailMesh:A,fridgeMesh:P,pipeMesh:D,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:et,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:pt,roomPins:ut,labelSize:null,materials:m,mask:p,openings:new Map,y:(ct==null?void 0:ct.y)??0,o:(ct==null?void 0:ct.o)??1,ty:0,to:1,appliedO:-1,label:Y})}this.floorMap=new Map(this.floors.map(c=>[c.floor.id,c]));for(let c of this.floors)this.buildFridges(c),this.buildPipes(c);this.labelsDirty=!0,this.floorId&&!n.floors.some(c=>c.id===this.floorId)&&(this.floorId=null);for(let c of this.floors){this.buildLamps(c),this.buildScreens(c);let f=e.get(c.floor.id);for(let u of c.geo.openings)c.openings.set(u.opening.id,(f==null?void 0:f.get(u.opening.id))??this.openingTargets.get(u.opening.id)??wo);this.buildOpenings(c),this.buildFlows(c),c.poolGroup=void 0,this.buildPoolWater(c),this.buildLightSurface(c),this.buildSun(c)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){var x;this.roof&&(this.roof.group.traverse(p=>{var m;return(m=p.geometry)==null?void 0:m.dispose()}),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(p=>{var m;return(m=p.geometry)==null?void 0:m.dispose()}),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?om(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(_r(this.building).map(p=>[p.key,p])),n=((x=this.building.settings.roof)==null?void 0:x.solar)??[],r=mh(this.flowTime),s=[],o=new ke,a=cn(new se({vertexColors:!0,transparent:!0,side:de}),this.themeUniform),l=cn(new Je({vertexColors:!0,transparent:!0,blending:So(this.theme),depthWrite:!1}),this.themeUniform,!0),c=cn(new se({vertexColors:!0,transparent:!0,side:de,depthWrite:!1}),this.themeUniform),f=new ke,u=cn(new se({vertexColors:!0,side:de}),this.themeUniform),h=cn(new Je({vertexColors:!0,transparent:!0,blending:So(this.theme),depthWrite:!1}),this.themeUniform,!0),d=[],g=t.map(p=>{var M,w;let m=new ke;m.add(new Vt(p.solid.geometry(),a),new Ye(p.lines.geometry(),l)),p.glass.count&&m.add(new Vt(p.glass.geometry(),c));let _=n.flatMap(C=>{var E;let b=e.get(C.face);return b&&(b.section?(E=p.sections)==null?void 0:E.includes(b.section):p===t[0])?[{face:b,field:C}]:[]}),y=ph(_,p.floor.elevation+p.base);if(y){let C=new Vt(y.geometry,r);C.renderOrder=9,m.add(C),s.push(y),Mo(y,this.solarLevels)}(M=p.winRoof)!=null&&M.solid.count&&m.add(new Vt(p.winRoof.solid.geometry(),u),new Ye(p.winRoof.lines.geometry(),h)),m.renderOrder=8,o.add(m);let v=null;(w=p.win)!=null&&w.solid.count&&(v=new ke,v.add(new Vt(p.win.solid.geometry(),u),new Ye(p.win.lines.geometry(),h)),f.add(v));for(let[C,b]of p.winBelow??[]){if(!b.solid.count)continue;let S=new ke;S.add(new Vt(b.solid.geometry(),u),new Ye(b.lines.geometry(),h)),f.add(S),d.push({floorId:C,win:S})}return{group:m,floorId:p.floor.id,rideId:dp(this.building,p.floor,p.sections??[]),base:p.base,lift:p.lift!==!1,win:v}});o.renderOrder=8,this.scene.add(o),this.scene.add(f),this.roof={group:o,parts:g,below:d,solid:a,lines:l,glass:c,live:r,lives:s,wins:f,winSolid:u,winLines:h},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/n0)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?n0*n:0,o=1-Math.exp(-t/i0),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let f=this.floorMap.get(l.rideId)??c,u=f.ty>0?Math.min(1,f.y/f.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+f.y+l.base+this.roofLift()+(l.lift?u*e0:0),l.win&&(l.win.position.y=c.floor.elevation+f.y+l.base+(l.lift?u*e0:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:lS)):r=this.explode?n.rank*aS:0,n.ty=r,n.to=s;let a=e===n?je:Yn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/i0);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/r0);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??wo,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let f={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,g=a[h]??0,x=d-g;Math.abs(x)<.003?f[h]=d:(f[h]=g+x*n,u=!0)}if(l.cover===null||a.cover===null)f.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?f.cover=l.cover:(f.cover=a.cover+h*n,u=!0)}(f.open!==a.open||f.open2!==(a.open2??0)||f.tilt!==a.tilt||f.tilt2!==(a.tilt2??0)||f.cover!==a.cover||!!f.sensed!=!!a.sensed)&&(r.openings.set(o,f),s=!0),e||=u}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new K(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*dS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let d=h-e,g=d>rc?.5+.5*Math.sin(d/140):d/rc;return Math.round(g*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=u=>u.fanBlades&&u.fanSpeed?this.fanAngle*u.fanSpeed:0,o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>{var h;return`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${(h=u.size)==null?void 0:h.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0},${u.fanStatic?1:0},${s(u).toFixed(3)}`}).join(";"),a=r.map(u=>this.glowOf(u)),l=r.map((u,h)=>`${n(u.id)},${a[h]?`${a[h].level.toFixed(3)},${a[h].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let u=new ne,h=[],d=[],g=new Map,x=t.floor.height;for(let p of r){let m=p.lamp==="strip"?(p.base??x)>Math.min(t.floor.cut_height,x):p.lamp?a0.has(p.lamp)&&(p.top??x)>Math.min(t.floor.cut_height,x):p.model==="camera_ceiling";if(!p.lamp&&!p.model||m&&this.wallMode==="cut")continue;let _=u.count,y=p.pack?we(p.pack):void 0,[v,M,w]=p.size??[.3,.3,.3];p.model?Wp(u,p.model,p.x,p.model==="camera_ceiling"?x:p.y,p.z,p.rotation??0):y?Wl(u,y,{x:p.x,z:p.z,rotation:p.rotation??0,w:v,d:M,h:w,mirror:p.mirror},p.base??0,65280):_h(u,{...p,lamp:p.lamp,spinAngle:s(p)},p.top??x,65280),g.set(p.furnitureId??p.id,{start:_,end:u.count}),p.pickable!==!1&&h.push({id:p.id,start:_,end:u.count}),p.furnitureId&&d.push({id:p.furnitureId,start:_,end:u.count})}t.lampTris=h,t.lampFurnTris=d,t.lampRanges=g,t.lampShade=Ld(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(l===t.lampColorSig)return;t.lampColorSig=l;let c=t.lampMesh.geometry.getAttribute("color"),f=c.array;r.forEach((u,h)=>{let d=t.lampRanges.get(u.furnitureId??u.id);if(!d)return;let g=a[h],x=g?.55+.45*g.level:0,p=g?new K(...g.color.map(y=>Math.min(1,y*x))):new K(hS),m=n(u.id);m>0&&p.lerp(new K(1,1,1),.7*m);let _=new K(p.getHex());Fd(f,t.lampShade,d,[_.r,_.g,_.b])}),c.needsUpdate=!0,this.buildHalos(t)}buildSun(t){var l,c,f,u,h;let e=((l=this.building)==null?void 0:l.settings.sun_patches)===!1?null:this.sun,n=(((c=this.building)==null?void 0:c.settings.north)??0)*ue,r=((f=this.weather)==null?void 0:f.cloud)??0,s=u0(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(d=>(d.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(((h=(u=this.building)==null?void 0:u.settings.roof)==null?void 0:h.windows)??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ne;if(e&&e.elevation>2&&r<.97){let d=Math.min(1,e.elevation/12)*(1-.8*r),g=e.elevation*ue,x=e.azimuth*ue,p=[Math.sin(n+x),-Math.cos(n+x)],m=1/Math.tan(g);for(let _ of t.geo.openings){if(_.opening.type!=="window"||!_.exterior)continue;let y=[-_.toRoom[0],-_.toRoom[1]],v=y[0]*p[0]+y[1]*p[1];if(v<.05)continue;let M=t.openings.get(_.opening.id),w=_.top-((M==null?void 0:M.cover)??0)*(_.top-_.sill);if(w-_.sill<.05)continue;let C=(D,L)=>{let O=Math.min(7,L*m);return[_.start[0]+_.axis[0]*D+_.toRoom[0]*_.faceRoom-p[0]*O,.02,_.start[1]+_.axis[1]*D+_.toRoom[1]*_.faceRoom-p[1]*O]},b=.14*d*Math.min(1,v*1.5),S=new K(1*b,.82*b,.55*b),E=S.clone().multiplyScalar(.45),R=t.floor.rooms.findIndex(D=>D.id===_.opening.room_id);if(R<0||t.floor.rooms[R].points.length<3)continue;let T=s[R],I=t.floor.rooms.filter((D,L)=>s[L]===T&&D.points.length>=3).map(D=>D.points),A=Math.max(1,Math.ceil(Math.min(7,w*m)/.25)),P=Math.max(1,Math.ceil(_.width/.3));for(let D=0;D<A;D++){let L=_.sill+(w-_.sill)*D/A,O=_.sill+(w-_.sill)*(D+1)/A,B=D/A,k=(D+1)/A,z=S.clone().lerp(E,B),et=S.clone().lerp(E,k);for(let G=0;G<P;G++){let J=_.width*G/P,it=_.width*(G+1)/P,ht=C((J+it)/2,(L+O)/2);if(!I.some(ut=>jt([ht[0],ht[2]],ut)))continue;let Y=C(J,L),$=C(it,L),at=C(it,O),ct=C(J,O);a.tri(Y,$,at,z,z,et),a.tri(Y,at,ct,z,et,et)}}}this.pushRoofSun(t,a,s,p,g,d)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){var u,h;let a=this.building,l=((u=a==null?void 0:a.settings.roof)==null?void 0:u.windows)??[];if(!a||!l.length)return;let c=new Map(_r(a).map(d=>[d.key,d])),f=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let d of l){let g=c.get(d.face),x=$l(a,g,d);if(!g||!x||x.floor.id!==t.floor.id)continue;let p=g.n[0]*f[0]+g.n[1]*f[1]+g.n[2]*f[2],[m,_,y,v]=x.corners,M=Math.min(1,((h=this.roofWindows.get(d.id))==null?void 0:h.cover)??0);if(M>.95)continue;let w=(D,L,O)=>[D[0]+(L[0]-D[0])*O,D[1]+(L[1]-D[1])*O,D[2]+(L[2]-D[2])*O],C=w(v,m,M),b=w(y,_,M),S=t.floor.rooms.findIndex(D=>D.id===x.roomId);if(S<0)continue;let E=t.floor.rooms.filter((D,L)=>n[L]===n[S]&&D.points.length>=3).map(D=>D.points),R=(D,L)=>{let O=(k,z)=>w(w(D[0],D[1],k),w(D[3],D[2],k),z);for(let k=0;k<6;k++)for(let z=0;z<6;z++){let et=O((k+.5)/6,(z+.5)/6);if(!E.some(Y=>jt([et[0],et[2]],Y)))continue;let G=O(k/6,z/6),J=O((k+1)/6,z/6),it=O((k+1)/6,(z+1)/6),ht=O(k/6,(z+1)/6);e.tri(G,J,it,L,L,L),e.tri(G,it,ht,L,L,L)}},T=D=>[D[0],.019,D[2]],I=.06*o;if(R([T(m),T(_),T(b),T(C)],new K(.75*I,.85*I,1*I)),p<.05)continue;let A=D=>{let L=Math.min(7,(D[1]-t.floor.elevation)/Math.tan(s));return[D[0]-r[0]*L,.02,D[2]-r[1]*L]},P=.16*o*Math.min(1,p*1.5);R([A(m),A(_),A(b),A(C)],new K(1*P,.84*P,.6*P))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ne,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let _=(l.rotation??0)*ue,y=[-Math.sin(_),Math.cos(_)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*ue/2,C=l.motion?new K(.9,.12,.16):new K(.04,.22,.28),b=new K(0,0,0),S=Math.max(4,Math.round(w/.15)),E=.015,R=t.geo.walls2d,T=L=>{let O=L.b[0]-L.a[0],B=L.b[1]-L.a[1],k=O*O+B*B||1,z=Math.max(0,Math.min(1,((l.x-L.a[0])*O+(l.z-L.a[1])*B)/k));return Math.hypot(l.x-(L.a[0]+O*z),l.z-(L.a[1]+B*z))},I=null;for(let L of R)T(L)<.45&&(!I||T(L)<T(I))&&(I=L);let A=L=>{let O=y[0]*Math.cos(L)-y[1]*Math.sin(L),B=y[1]*Math.cos(L)+y[0]*Math.sin(L),k=M;for(let z of R){let et=z.b[0]-z.a[0],G=z.b[1]-z.a[1],J=O*G-B*et;if(Math.abs(J)<1e-9)continue;let it=((z.a[0]-l.x)*G-(z.a[1]-l.z)*et)/J,ht=((z.a[0]-l.x)*B-(z.a[1]-l.z)*O)/J;z===I&&it<=.45||it>.02&&it<k&&ht>=0&&ht<=1&&(k=it)}return k},P=L=>{let O=A(L);return[l.x+(y[0]*Math.cos(L)-y[1]*Math.sin(L))*O,E,l.z+(y[1]*Math.cos(L)+y[0]*Math.sin(L))*O]},D=s.count;for(let L=0;L<S;L++)s.tri([l.x,E,l.z],P(-w+2*w*(L+1)/S),P(-w+2*w*L/S),C,b,b);o.push({id:l.id,start:D,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||a0.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let f=l.top??e,[u,h,d]=l.size??Mh[l.lamp],g=l.base??0,x=(l.rotation??0)*ue,p={ceiling:f-.07,ceiling_fan:f-.2,downlight:f-.03,spot:f-d,panel:f-.03,pendant:Math.max(.4,f-d)+.08,floor:g+d-.15,uplight:g+d,table:g+d-.09,wall:g+d/2,strip:g+Math.max(.02,d)-.01,bollard:g+d-.08,garden:g+d-.03}[l.lamp],m=(_,y,v=1)=>{n.push(_,p,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let _ of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,g+u*(.5+_),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):m(l.x+Math.cos(x)*u*_,l.z+Math.sin(x)*u*_,.6);else l.lamp==="wall"?m(l.x-Math.sin(x)*(h/2+.05),l.z+Math.cos(x)*(h/2+.05)):m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let _=new K(...c.color.map(C=>C*.09*c.level)),y=new K(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let C=0;C<w;C++){let b=C/w*Math.PI*2,S=(C+1)/w*Math.PI*2,E=[l.x+Math.cos(b)*v,p,l.z+Math.sin(b)*v],R=[l.x+Math.cos(S)*v,p,l.z+Math.sin(S)*v],T=[l.x+Math.cos(b)*M,.02,l.z+Math.sin(b)*M],I=[l.x+Math.cos(S)*M,.02,l.z+Math.sin(S)*M];s.tri(E,T,I,_,y,y),s.tri(E,I,R,_,y,_)}}}let a=new Kt;a.setAttribute("position",new Gt(n,3)),a.setAttribute("color",new Gt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=dh(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ne;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*ue,l=Math.cos(a),c=Math.sin(a),f=(v,M,w)=>[s.x+v*l-w*c,M,s.z+v*c+w*l];if(o.apRing){let v=Gp(s),M=qe(t.floor,s)+v.y,w=new K(...o.apRing),C=w.clone().multiplyScalar(.45),b=new K(0,0,0),S=(T,I)=>v.wall?f(Math.cos(T)*I,M+Math.sin(T)*I,v.z):f(Math.cos(T)*I,M,Math.sin(T)*I),E=[v.r*.52,v.r*.7,v.r*1.15],R=28;for(let T=0;T<R;T++){let I=T/R*Math.PI*2,A=(T+1)/R*Math.PI*2;r.tri(S(I,E[0]),S(I,E[1]),S(A,E[1]),w),r.tri(S(I,E[0]),S(A,E[1]),S(A,E[0]),w),r.tri(S(I,E[1]),S(I,E[2]),S(A,E[2]),C,b,b),r.tri(S(I,E[1]),S(A,E[2]),S(A,E[1]),C,b,C)}continue}if(o.keys){let v=qe(t.floor,s)-hi(s),M=s.mirror?-1:1,w=new K(0,0,0),C=o.switchRing;if(C){let b=Math.max(.05,s.w),S=Math.max(.05,s.d),E=Math.max(.005,s.h),R=hi(s)+v,T=-S/2+.002,I=new K(...C.color.map(O=>Math.min(1,O*(.3+.45*C.level)))),A=.02+.02*C.level,P=.004,D=[f(-b/2-P,R-P,T),f(b/2+P,R-P,T),f(b/2+P,R+E+P,T),f(-b/2-P,R+E+P,T)],L=[f(-b/2-A,R-A,T),f(b/2+A,R-A,T),f(b/2+A,R+E+A,T),f(-b/2-A,R+E+A,T)];for(let O=0;O<4;O++){let B=(O+1)%4;r.tri(D[O],L[O],L[B],I,w,w),r.tri(D[O],L[B],D[B],I,w,I)}}zp(s).forEach((b,S)=>{let E=o.keys[S];if(!E)return;let R=new K(...E),T=R.clone().multiplyScalar(.45),I=b.x*M,A=b.y+v,P=b.r,D=P*2.6,L=[f(I-P,A-P,b.z),f(I+P,A-P,b.z),f(I+P,A+P,b.z),f(I-P,A+P,b.z)],O=[f(I-D,A-D,b.z+.001),f(I+D,A-D,b.z+.001),f(I+D,A+D,b.z+.001),f(I-D,A+D,b.z+.001)];r.tri(L[0],L[1],L[2],R),r.tri(L[0],L[2],L[3],R);for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(L[B],O[B],O[k],T,w,w),r.tri(L[B],O[k],L[k],T,w,T)}});continue}if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),w=Math.max(.005,s.h),C=qe(t.floor,s);for(let b of o.faces){if(b.part==="lights"){let B=we(s.type),k=z=>["#e8f4ff","#ff3b4f"].includes(z.color.toLowerCase());if(B&&B.parts.some(k)){let z=new K(...b.color.map(et=>Math.min(1,et*(.4+.6*b.level))));uo(r,B,s,C,z.getHex(),k)}continue}if(b.part==="cabin"){let B=we(s.type),k=z=>z.color.toLowerCase()==="#13283a"||z.color==="glass";if(B&&B.parts.some(k)){let z=new K(...b.color.map(et=>Math.min(1,et*(.3+.5*b.level))));uo(r,B,s,C,z.getHex(),k);continue}}if(b.part==="burners"&&we(s.type)){let B=we(s.type),k=new K(...b.color.map(z=>Math.min(1,z*(.25+.6*b.level))));uo(r,B,s,C,k.getHex(),Nd);continue}if(b.part==="burners"){let B=new K(...b.color.map(z=>Math.min(1,z*(.25+.6*b.level)))),k=C+w+.008;for(let[z,et,G]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let J=z*Math.abs(v)/.6,it=et*M/.62,ht=14;for(let Y=0;Y<ht;Y++){let $=Y/ht*Math.PI*2,at=(Y+1)/ht*Math.PI*2;r.tri(f(J,k,it),f(J+Math.cos($)*G,k,it+Math.sin($)*G),f(J+Math.cos(at)*G,k,it+Math.sin(at)*G),B)}}continue}if(b.part==="band"||b.part==="cabin"){let B=b.part==="cabin",k=C+w*(B?.6:.42),z=B?C+w*.86:k+.07,et=new K(...b.color.map(ht=>Math.min(1,ht*(.3+.45*b.level)))),G=Math.abs(v)/2+(B?.012:.02),J=M/2+(B?.012:.02),it=[[-G,-J],[G,-J],[G,J],[-G,J]];for(let ht=0;ht<4;ht++){let Y=it[ht],$=it[(ht+1)%4],at=f(Y[0]*Math.sign(v),k,Y[1]),ct=f($[0]*Math.sign(v),k,$[1]),ut=f($[0]*Math.sign(v),z,$[1]),pt=f(Y[0]*Math.sign(v),z,Y[1]);r.tri(at,ct,ut,et),r.tri(at,ut,pt,et)}continue}if(b.part==="beacon"){let B=new K(...b.color.map(ct=>Math.min(1,ct*(.25+.45*b.level)))),k=new K(0,0,0),z=C+w+.01,et=.6+.6*b.level,G=Math.min(Math.abs(v),M)*.38;for(let[ct,ut]of[[G,0],[0,G]]){let pt=f(-ct,z,-ut),gt=f(ct,z,ut),Mt=f(ct*.4,z+et,ut*.4),Ot=f(-ct*.4,z+et,-ut*.4);r.tri(pt,gt,Mt,B,B,k),r.tri(pt,Mt,Ot,B,k,k)}let J=qe(t.floor,{...s,mount_y:0})+.012,it=Math.abs(v)/2+.03,ht=M/2+.03,Y=.22+.18*b.level,$=(ct,ut,pt)=>f(ct*(it+pt),J,ut*(ht+pt)),at=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ct=0;ct<4;ct++){let[ut,pt]=at[ct],[gt,Mt]=at[(ct+1)%4];r.tri($(ut,pt,0),$(gt,Mt,0),$(gt,Mt,Y),B,B,k),r.tri($(ut,pt,0),$(gt,Mt,Y),$(ut,pt,Y),B,k,k)}continue}let S=b.part==="right"?.03:-Math.abs(v)/2+.03,E=b.part==="left"?-.03:Math.abs(v)/2-.03,R=C+(b.part==="bottom"?w*.45:w)+.006,T=new K(...b.color.map(B=>Math.min(1,B*(.35+.65*b.level)))),I=new K(0,0,0),A=(B,k,z=R)=>f(B*Math.sign(v),z,k),P=[A(S,-M/2+.03),A(E,-M/2+.03),A(E,M/2-.03),A(S,M/2-.03)];r.tri(P[0],P[2],P[1],T),r.tri(P[0],P[3],P[2],T);let D=b.part==="lid"?.025+.02*b.level:.12+.1*b.level,L=T.clone().multiplyScalar(b.part==="lid"?.7:.5),O=[A(S-D,-M/2-D,R+.004),A(E+D,-M/2-D,R+.004),A(E+D,M/2+D,R+.004),A(S-D,M/2+D,R+.004)];for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(P[B],O[k],O[B],L,I,I),r.tri(P[B],P[k],O[k],L,L,I)}}continue}let u=we(s.type);if(u&&!u.light&&o.ring&&u.parts.some(v=>v.glow)){let v=new K(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));uo(r,u,s,qe(t.floor,s),v.getHex())}let h=th(s,t.floor);if(!h)continue;let d=new K(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),g=new K(0,0,0),x=h.z+.004;if(r.tri(f(h.x0,h.y0,x),f(h.x1,h.y0,x),f(h.x1,h.y1,x),d),r.tri(f(h.x0,h.y0,x),f(h.x1,h.y1,x),f(h.x0,h.y1,x),d),o.dots&&o.dots.n>0){let{n:v,lit:M,color:w}=o.dots,C=new K(...w),b=new K(...w.map(R=>R*.12)),S=Math.min(.013,(h.x1-h.x0)/(v*1.5)),E=h.y1+.01;for(let R=0;R<v;R++){let T=h.x0+(R+.5)*(h.x1-h.x0)/v,I=R<M?C:b;r.tri(f(T-S/2,E,x),f(T+S/2,E,x),f(T+S/2,E+S,x),I),r.tri(f(T-S/2,E,x),f(T+S/2,E+S,x),f(T-S/2,E+S,x),I)}}if(o.plain)continue;let p=.18+.12*o.level,m=d.clone().multiplyScalar(.5),_=[f(h.x0,h.y0,x),f(h.x1,h.y0,x),f(h.x1,h.y1,x),f(h.x0,h.y1,x)],y=[f(h.x0-p,h.y0-p,x+.01),f(h.x1+p,h.y0-p,x+.01),f(h.x1+p,h.y1+p,x+.01),f(h.x0-p,h.y1+p,x+.01)];for(let v=0;v<4;v++){let M=(v+1)%4;r.tri(_[v],y[v],y[M],m,g,g),r.tri(_[v],y[M],_[M],m,g,m)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){var r;let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>{var o;return!!((o=this.screens.get(s))!=null&&o.picture)}));for(let[s,o]of t.screenPics)n.has(s)&&this.screens.get(s).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),(r=o.texture)==null||r.dispose(),t.screenPics.delete(s));for(let[s,o]of n){let a=this.screens.get(s),l=th(o,t.floor);if(!l)continue;let c=t.screenPics.get(s);if(!c){let f=new Vt(new ci(1,1),new se({color:16777215,transparent:!0}));f.visible=!1,f.renderOrder=5,c={url:a.picture,mesh:f,texture:null},t.screenPics.set(s,c),t.group.add(f);let u=c;new Us().load(a.picture,h=>{if(t.screenPics.get(s)!==u){h.dispose();return}h.colorSpace=De,u.texture=h;let d=u.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,l,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}c.mesh.material.color.setScalar(.45+.55*a.level),c.texture&&this.placeScreenPicture(c.mesh,o,l,c.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s!=null&&s.width&&(s!=null&&s.height)?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),f=c/o,u=e.rotation*ue,h=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,f,1),t.rotation.set(0,-u,0),t.position.set(e.x+h*Math.cos(u)-d*Math.sin(u),(n.y0+n.y1)/2,e.z+h*Math.sin(u)+d*Math.cos(u))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){var f;let e=this.flows.filter(u=>u.floorId===t.floor.id).map(vh).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(vh(u))??{speed:c0(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,g=u.color.map(y=>y*d),x=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(x<1e-4)continue;let p=[(u.b[0]-u.a[0])/x,(u.b[1]-u.a[1])/x,(u.b[2]-u.a[2])/x],m=[];if(Math.abs(p[1])<.5){let y=Math.hypot(p[0],p[2])||1;m.push([-p[2]/y,0,p[0]/y])}else m.push([1,0,0],[0,0,1]);let _=this.lowQuality?[[o0*1.4,1]]:[[uS,.25],[o0,1]];for(let[y,v]of _)for(let M of m){let w=y/2,C=(S,E)=>[S[0]+M[0]*w*E,S[1]+M[1]*w*E,S[2]+M[2]*w*E],b=[[C(u.a,-1),u.dist,0],[C(u.b,-1),u.dist+x,0],[C(u.b,1),u.dist+x,1],[C(u.a,1),u.dist,1]];for(let S of[0,1,2,0,2,3]){let[E,R,T]=b[S];n.push(E[0],E[1],E[2]),r.push(g[0]*v,g[1]*v,g[2]*v),s.push(R,T),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&((f=l.getAttribute("position"))==null?void 0:f.count)===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(h),d.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Kt;c.setAttribute("position",new Gt(n,3)),c.setAttribute("color",new Gt(r,3)),c.setAttribute("uv",new Gt(s,2)),c.setAttribute("flowSpeed",new Gt(o,1)),c.setAttribute("flowOffset",new Gt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Ym(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){var t;for(let e of this.floors){let n=e.geo.floor.getAttribute("color");for(let r of e.geo.roomTris){let s=new K(r.color),o=(t=this.roomTint)==null?void 0:t.get(r.roomId);o&&s.lerp(new K(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(mS,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)n.setXYZ(a,s.r,s.g,s.b)}n.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(t){var u;let e=new hn;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let g of h.floor.rooms)for(let[x,p]of g.points)e.expandByPoint(new H(x,d,p)),e.expandByPoint(new H(x,d+h.floor.height,p))}e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),r=e.getSize(new H),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:((u=this.floorMap.get(this.floorId))==null?void 0:u.floor.start_view)??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let f=c?l.target:null;if(f&&n.set(f.x,f.y+(a?this.floorBase(this.floorId):0),f.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new H(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new hn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=SS();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),r=t.getSize(new H),s=yh*Math.ceil((Math.max(r.x,r.z)+16)/yh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Ze-.02,n.z)}distanceFor(t){let e=this.camera.fov*ue,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Bs;return r.setFromCamera(new ee(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){var a,l,c;let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(f=>[f.lampMesh,f.coneMesh,f.framesMesh,f.glassMesh,f.blindsMesh,f.wallMesh,f.floorMesh].filter(u=>u.visible)),o=(f,u)=>{var h;return(h=f.find(d=>u>=d.start&&u<d.end))==null?void 0:h.id};for(let f of n.intersectObjects(s,!1)){if(f.faceIndex==null)continue;let u=f.faceIndex,h=r.find(d=>d.group===f.object.parent);if(f.object===h.lampMesh||f.object===h.coneMesh){let d=o(f.object===h.lampMesh?h.lampTris:h.coneTris,u);if(d)return{entity:d}}else if(f.object===h.framesMesh||f.object===h.blindsMesh||f.object===h.glassMesh){if(this.wallMode==="cut"&&f.face){let x=((a=f.object.geometry.getAttribute("fold"))==null?void 0:a.getX(f.face.a))??Yt;if(x!==Yt&&Math.floor(x/16)===0)continue}let d=o(f.object===h.framesMesh?h.frameTris:f.object===h.glassMesh?h.glassTris:h.blindTris,u),g=d?this.pickOpenings.get(d):void 0;if(g)return{entity:g}}else if(f.object===h.wallMesh){let d=o(h.geo.furnitureTris,u),g=d?this.pickFurniture.get(d):void 0,x=d&&!g?h.floor.furniture.find(p=>p.id===d&&(p.type==="wall_switch"||p.type==="wall_socket")):void 0;if(x&&(g=this.pickFurniture.get(`${x.id}#${bp(x,f.point.x,f.point.z)}`)),g)return{entity:g};if(f.face&&!d){let p=((l=h.wallMesh.geometry.getAttribute("fold"))==null?void 0:l.getX(f.face.a))??32,m=Math.floor(p/16),_=p%16,y=this.wallMode==="cut"&&m===0,v=(h.mask.glass.value&1<<_)!==0;if(!y){let M=n.ray.direction,w=Math.hypot(M.x,M.z)||1,C=[f.point.x-M.x/w*.3,f.point.z-M.z/w*.3],b=((c=h.floor.rooms.find(S=>S.points.length>=3&&jt(C,S.points)))==null?void 0:c.id)??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:h.floor.id,roomId:b}}else if(!v&&b)return{floorId:h.floor.id,roomId:b}}}}else if(f.object===h.floorMesh)return{floorId:h.floor.id,roomId:o(h.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),u)??null}}return null}onTap(t,e){var r,s,o,a,l,c;let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),(s=(r=this.options).onDeviceSelect)==null||s.call(r,n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+rc),this.invalidate(),(a=(o=this.options).onDeviceTap)==null||a.call(o,n.entity,t,e);return}(c=(l=this.options).onRoomTap)==null||c.call(l,(n==null?void 0:n.floorId)??this.floorId??"",(n==null?void 0:n.roomId)??null)}furnitureAt(t,e){var a;let n=this.rayAt(t,e),r=this.activeFloors(),s=l=>[l.screenMesh,l.fridgeMesh,...[...l.screenPics.values()].map(c=>c.mesh)],o=r.flatMap(l=>[l.lampMesh,l.wallMesh,...s(l)].filter(c=>c.visible));for(let l of n.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=r.find(h=>h.group===l.object.parent||s(h).includes(l.object));if(!c)continue;if(l.object!==c.lampMesh&&l.object!==c.wallMesh){let h=this.furnitureNear(c,l.point.x,l.point.z);if(h)return{fv:c,id:h,y:l.point.y};continue}let u=(a=(l.object===c.lampMesh?c.lampFurnTris:c.geo.furnitureTris).find(h=>l.faceIndex>=h.start&&l.faceIndex<h.end))==null?void 0:a.id;if(u)return{fv:c,id:u,y:l.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ue,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,f=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,f);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return(r==null?void 0:r.id)??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){var n;return((n=this.furnitureAt(t,e))==null?void 0:n.id)??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){var o,a,l,c,f,u,h,d;if((o=this.surfaceGrab)!=null&&o.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let g=n?(a=this.devices.find(y=>y.id===n))==null?void 0:a.furnitureId:void 0,x=g?null:this.furnitureAt(t,e),p=g??(x==null?void 0:x.id),m=p?this.floors.find(y=>y.floor.furniture.some(v=>v.id===p)):void 0,_=(l=m==null?void 0:m.floor.furniture.find(y=>y.id===p))==null?void 0:l.type;return!!(m&&p&&_&&r.has(_))&&this.grabItem(m,p,t,e)}if(n){let g=(c=this.devices.find(p=>p.id===n))==null?void 0:c.furnitureId,x=g?this.floors.find(p=>p.floor.furniture.some(m=>m.id===g)):void 0;return!g||!x?this.grabDevice(n,t,e):this.grabItem(x,g,t,e)}let s=this.furnitureAt(t,e);if(!s){let g=this.pick(t,e);return g&&"entity"in g?this.grabDevice(g.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),(u=(f=this.options).onFurnitureSelect)==null||u.call(f,null)),this.selectedDevice&&(this.selectDevice(null),(d=(h=this.options).onDeviceSelect)==null||d.call(h,null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){var u,h,d,g;let o=t.floor.furniture.find(x=>x.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,f=this.rayAt(n,r).ray.direction;if(s!==void 0&&-f.y<.34){let x=this.camera.position,p=this.camera.getWorldDirection(new H),m=Math.hypot(p.x,p.z)||1,_=[p.x/m,p.z/m],y=Math.hypot(l[0]-x.x,l[1]-x.z,(a??0)-x.y),v=this.renderer.domElement.getBoundingClientRect().height||1,M=2*y*Math.tan(this.camera.fov*Math.PI/360)/v;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-_[1],_[0]],fwd:_,perPx:M,gain:Math.min(2,1/Math.max(.5,-f.y))}}return o.locked?(this.selectFurniture(o.id),(h=(u=this.options).onFurnitureSelect)==null||h.call(u,o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),(g=(d=this.options).onFurnitureSelect)==null||g.call(d,o.id),!0)}grabDevice(t,e,n){var a,l,c,f;let r=this.devices.find(u=>u.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),(l=(a=this.options).onDeviceSelect)==null||l.call(a,t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),(f=(c=this.options).onDeviceSelect)==null||f.call(c,t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){var e,n;t&&this.selectedFurniture&&(this.selectFurniture(null),(n=(e=this.options).onFurnitureSelect)==null||n.call(e,null)),this.selectedDevice=t;for(let[r,s]of this.devicePins)s.el.classList.toggle("fp3d-dev-sel",r===t)}dragFurniture(t,e){var h,d,g,x;if(this.surfaceDragging){(h=this.surfaceGrab)==null||h.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let p=this.floorMap.get(n.floorId),m=this.devices.find(v=>v.id===n.id),_=p&&this.floorPoint(p,t,e);if(!p||!m||!_)return;let y=((d=this.building)==null?void 0:d.settings.grid)??.05;n.x=m.x=Math.round((_[0]+n.offset[0])/y)*y,n.z=m.z=Math.round((_[1]+n.offset[1])/y)*y,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let p=(t-o.x0)*o.perPx,m=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*p-o.fwd[0]*m-r.offset[0],o.fz+o.right[1]*p-o.fwd[1]*m-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=((g=this.building)==null?void 0:g.settings.grid)??.05,c=s.floor.furniture.find(p=>p.id===r.id),f=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?bm(s.floor,c,f,u,((x=this.building)==null?void 0:x.settings.wall_interior)??0):[f,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){var n,r,s,o,a;if(this.surfaceDragging){this.surfaceDragging=!1,(n=this.surfaceGrab)==null||n.end();return}let t=this.deviceGrab;this.deviceGrab=null,t!=null&&t.moved&&((s=(r=this.options).onDeviceMove)==null||s.call(r,t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3));let e=this.grab;this.grab=null,e!=null&&e.moved&&((a=(o=this.options).onFurnitureMove)==null||a.call(o,e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3)),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ie,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s==null?void 0:s.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new K(.25,.9,1):new K(1,.71,.28)))}n&&(this.ghost=new Ye(e.geometry(),new Je({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){var p,m;let s=((p=this.grab)==null?void 0:p.id)===n.id?this.grab.x:n.x,o=((m=this.grab)==null?void 0:m.id)===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),f=we(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?qe(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:qe(e.floor,n),u=n.rotation*ue,h=Math.cos(u),d=Math.sin(u),g=(_,y,v)=>[s+_*h-y*d,v,o+_*d+y*h],x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let _=0;_<4;_++){let[y,v]=x[_],[M,w]=x[(_+1)%4];t.seg(g(y,v,f+.01),g(M,w,f+.01),r),t.seg(g(y,v,f+c),g(M,w,f+c),r),t.seg(g(y,v,f+.01),g(y,v,f+c),r)}t.seg(g(-n.w/2,n.d/2+.03,f+.02),g(n.w/2,n.d/2+.03,f+.02),new K(1,1,1))}onHold(t,e){var r,s;let n=this.pick(t,e);n&&"entity"in n&&((s=(r=this.options).onDeviceHold)==null||s.call(r,n.entity,t,e))}swipeStart(t,e,n,r){var o,a;if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||((a=(o=this.options).onDeviceSwipe)==null?void 0:a.call(o,s.entity,"start",0,t,e))!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){var m,_;let n=this.floors.filter(y=>y.floor.rooms.some(v=>v.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new on(s,o);a.texture.colorSpace=De;let l=new Xn(-1,1,1,-1,.1,400),c=this.floors.map(y=>({fv:y,visible:y.group.visible,y:y.y,o:y.o,standing:y.mask.standing.value,glass:y.mask.glass.value})),f=((m=this.roof)==null?void 0:m.group.visible)??!1,u=((_=this.ghost)==null?void 0:_.visible)??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let x=g.getContext("2d"),p=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let y of n){for(let P of this.floors)P.group.visible=P===y;y.y=0,y.o=1,this.applyFloor(y),y.group.visible=!0,y.mask.standing.value=0,y.mask.glass.value=0;let v=y.floor.rooms.flatMap(P=>P.points),M=y.floor.elevation,w=new hn(new H(Math.min(...v.map(P=>P[0]))-.3,M,Math.min(...v.map(P=>P[1]))-.3),new H(Math.max(...v.map(P=>P[0]))+.3,M+Math.min(y.floor.cut_height,y.floor.height),Math.max(...v.map(P=>P[1]))+.3)),C=w.getCenter(new H),b=-.6,S=.8,E=new H(Math.sin(S)*Math.sin(b),Math.cos(S),Math.sin(S)*Math.cos(b));l.position.copy(C).addScaledVector(E,100),l.lookAt(C),l.updateMatrixWorld();let R=.5,T=.5;for(let P of[w.min.x,w.max.x])for(let D of[w.min.y,w.max.y])for(let L of[w.min.z,w.max.z]){let O=new H(P,D,L).applyMatrix4(l.matrixWorldInverse);R=Math.max(R,Math.abs(O.x)),T=Math.max(T,Math.abs(O.y))}let I=s/o;R/T>I?T=R/I:R=T*I,l.left=-R*1.05,l.right=R*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let A=x.createImageData(s,o);for(let P=0;P<o;P++)A.data.set(d.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);x.putImageData(A,0,0),p.push({floorId:y.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let y of c)y.fv.y=y.y,y.fv.o=y.o,y.fv.mask.standing.value=y.standing,y.fv.mask.glass.value=y.glass,this.applyFloor(y.fv),y.fv.group.visible=y.visible;this.roof&&(this.roof.group.visible=f,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return p}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?$m(n.room,void 0,void 0,n.obstacles):bh(n.rest),l=a.length?a:bh(n.rest),c=0;l.forEach((f,u)=>{Math.hypot(f[0]-r.motion.pos[0],f[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(t0[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ne,s=(a,l,c,f,u)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ae(r,h,l,c,f,u,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new se({vertexColors:!0});let o=new ne;Ae(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new ke,n=new se({color:t0[t.mode]});return e.add(new Vt(this.robotGeo,this.robotMat),new Vt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Zm(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new K(.25-.2*a,.95-.83*a,1-.7*a),r=new K(0,0,0),s=new K(.3,1,.6),o=.02;for(let a of this.floors){let l=new ne;for(let f of e)f.floorId===a.floor.id&&f.points.forEach(([u,h],d)=>{let g=f.points[d-1];if(g){let x=Math.hypot(u-g[0],h-g[1])||1,p=-(h-g[1])/x*.1,m=(u-g[0])/x*.1;l.tri([g[0]+p,o,g[1]+m],[u+p,o,h+m],[u-p,o,h-m],s,s,s),l.tri([g[0]+p,o,g[1]+m],[u-p,o,h-m],[g[0]-p,o,g[1]-m],s,s,s)}for(let x=0;x<10;x++){let p=x/10*Math.PI*2,m=(x+1)/10*Math.PI*2;l.tri([u,o,h],[u+Math.cos(m)*.35,o,h+Math.sin(m)*.35],[u+Math.cos(p)*.35,o,h+Math.sin(p)*.35],s,r,r)}});let c=null;for(let f of t){if(f.floorId!==a.floor.id)continue;let u=n(f.age);if(c){let h=Math.hypot(f.x-c.x,f.z-c.z)||1,d=-(f.z-c.z)/h*.06,g=(f.x-c.x)/h*.06,x=n(c.age);l.tri([c.x+d,o,c.z+g],[f.x+d,o,f.z+g],[f.x-d,o,f.z-g],x,u,u),l.tri([c.x+d,o,c.z+g],[f.x-d,o,f.z-g],[c.x-d,o,c.z-g],x,u,x)}for(let h=0;h<12;h++){let d=h/12*Math.PI*2,g=(h+1)/12*Math.PI*2;l.tri([f.x,o,f.z],[f.x+Math.cos(g)*.22,o,f.z+Math.sin(g)*.22],[f.x+Math.cos(d)*.22,o,f.z+Math.sin(d)*.22],u,r,r)}c=f}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ue,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ue)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+rc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new H(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a==null||a.classList.add("fp3d-dev-found"),setTimeout(()=>a==null?void 0:a.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[g,x]of this.flashes){let p=this.deviceFloor.get(g);p&&d.add(p),x<=t&&this.flashes.delete(g)}a=this.flashes.size>0;for(let g of this.floors)d.has(g.floor.id)&&this.buildLamps(g)}let l=this.placeRoof(e),c=this.stepRobots(t),f=this.stepWeather(t),u=r||s||o||a||l,h=[];if((r||this.controls.busy)&&h.push("camera"),s&&h.push("floors"),o&&h.push("openings"),a&&h.push("flash"),l&&h.push("roof"),this.flowActive&&h.push("flow"),this.soundActive&&h.push("sound"),this.poolActive&&h.push("pool"),this.solarActive&&h.push("solar"),this.effectTick&&h.push("effect"),this.fanFloors.size&&h.push("fan"),c&&h.push("robot"),n&&h.push("orbit"),this.tintTick&&h.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=u?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,h),u&&this.invalidate(),(this.effectFloors.size||this.fanFloors.size)&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*l0:l0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.fanAngle+=d/1e3*pS,this.effectTick=!0;for(let g of this.floors)g.o<.02||!(this.effectFloors.has(g.floor.id)||this.fanFloors.has(g.floor.id))||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},d)}!u&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!u&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*s0:s0))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,u)=>{let h=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&h&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,f=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let p of[a.z0,a.z1]){n.set(x,f,p).project(this.camera);let m=(n.x+1)/2*t,_=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:_}),(!c||m>c.x)&&(c={x:m,y:_})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,h=8+this.labelInset,d=l.x-u-14,g=l.y;d<h&&this.labelInset&&(d=c.x+14,g=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-u-8,d)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+((l==null?void 0:l.y)??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),f=this.camera.position.clone().sub(c),u=f.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let h=f.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,f?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){var s;let n=new H,r=this.houseView;for(let o of this.persons){let a=this.personPins.get(o.id),l=this.floorMap.get(o.floorId);if(!a)continue;if(!l||r||l.to<.99||l.o<.9||this.otherFloor(l)){this.place(a,null);continue}n.set(o.x,l.floor.elevation+l.y+.9,o.z).project(this.camera);let c=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(a,c?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let a=(s=this.devicePins.get(o.id))==null?void 0:s.el;if(!a)continue;let l=this.floorMap.get(o.floorId),c=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!l||r&&!c||l.to<.99||l.o<.9||o.pin===!1||this.otherFloor(l)){this.place(a,null);continue}if(n.set(o.x,l.floor.elevation+l.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(a,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(a)!==u&&(this.pinMode.set(a,u),a.classList.toggle("fp3d-dev-full",u==="full"),a.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(a,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=xS(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function xS(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function bS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,f)=>{e.strokeStyle=`rgba(55,224,255,${f})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let f=o+l*.37%1*256;n(f,c,f,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let f=a+l*.53%1*256;n(c,f,c+256/7,f,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let f=l?256/4:0;for(let u of[f,f+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new li(t);return s.flipY=!1,s.wrapS=xn,s.wrapT=xn,s.anisotropy=4,s.colorSpace=De,s}function _S(i){let t=new se({map:i,transparent:!0,blending:Le,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function vS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new li(i);return e.wrapS=Qi,e.wrapT=Qi,e.colorSpace=De,e}function vh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function c0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function yS(i){let t=new se({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute float flowSpeed;
attribute float flowOffset;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFlowSpeed = flowSpeed;
vFlowOffset = flowOffset;
vFlowUv = uv;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uFlowTime;
varying float vFlowSpeed;
varying float vFlowOffset;
varying vec2 vFlowUv;`).replace("#include <color_fragment>",`#include <color_fragment>
        float fp3dAcross = 1.0 - abs(vFlowUv.y * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // light dots every third of a metre, each a comet: a bright head and a tail fading out behind it,
        // so the direction (from a to b) is plain even on a still picture
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 3.0);
        float fp3dDot = exp(-(1.0 - fp3dPhase) * 7.0) * fp3dMoving;
        float fp3dCore = fp3dAcross * fp3dAcross;
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function u0(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(f=>f.id===r),a=i.rooms.findIndex(f=>f.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function MS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new li(t);return r.colorSpace=De,r}function SS(){let t=yh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new li(e);return s.anisotropy=4,s.colorSpace=De,s}function DR(i,t){return new Sh(i,t)}function _h(i,t,e,n){let[r,s,o]=t.size??Mh[t.lamp],a=t.base??0,l=(t.rotation??0)*ue,c=Math.cos(l),f=Math.sin(l),u=(x,p)=>[t.x+x*c-p*f,t.z+x*f+p*c],h=(x,p,m,_,y,v=14)=>{let M=[];for(let w=0;w<v;w++){let C=w/v*Math.PI*2;M.push([t.x+Math.cos(C)*x,t.z+Math.sin(C)*x])}Ae(i,M,p,m,_,y,{aoFrom:0,bottom:!0})},d=(x,p,m,_,y,v,M,w=M)=>Ae(i,[u(x,m),u(p,m),u(p,_),u(x,_)],y,v,M,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(g*.25,e-.04,e,Zt,Zt,8),h(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"ceiling_fan":{let x=Math.max(.09,g*.17),p=.1,m=e-.06,_=m-p;if(t.fanBlades||t.fanStatic){let y=_+p*.32,v=Math.max(x+.15,g),M=Math.max(.05,x*.85);for(let w=0;w<5;w++){let C=l+(t.spinAngle??0)+w/5*Math.PI*2,b=Math.cos(C),S=Math.sin(C),E=t.x+b*x*.9,R=t.z+S*x*.9,T=t.x+b*v,I=t.z+S*v,A=[[E+S*M,R-b*M],[T+S*M*.55,I-b*M*.55],[T-S*M*.55,I+b*M*.55],[E-S*M,R+b*M]];Ae(i,A,y,y+.014,Zt,Zt,{aoFrom:0,bottom:!0})}}if(!t.fanBlades){h(Math.max(.05,x*.7),e-.015,e,Zt,Zt,10),h(.02,m,e-.015,Zt,Zt,6),h(x,_,m,Zt,Zt,16);let y=_-.002,v=Math.max(.12,o-p-.08),M=x*.55,w=Math.max(M+.04,x*1.35);for(let C=0;C<6;C++){let b=w+(M-w)*((C+.5)/6);d(-b,b,-b,b,y-v+v*C/6,y-v+v*(C+1)/6,n,n)}}break}case"pendant":{let x=Math.max(.4,e-o);h(.06,e-.02,e,Zt,Zt,8);let p=t.variant==="globe"?x+2*g:t.variant==="drum"?x+.24:x+.2;if(h(.008,p,e-.02,Zt,Zt,5),t.variant==="globe")for(let _=0;_<7;_++){let y=Math.PI*(_/7),v=Math.PI*((_+1)/7);h(g*Math.max(.2,Math.sin((y+v)/2)),x+g-g*Math.cos(y),x+g-g*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let _=0;_<4;_++)h(g*(.25+.75*(4-_)/4),x+.06*_,x+.06*(_+1),n,n,16);else t.variant==="drum"?h(g,x,x+.24,n,n,18):(h(g*.35,x+.14,x+.2,n,n,12),h(g,x,x+.14,n,n,16));break}case"downlight":h(g,e-.012,e,Zt,Zt,12),h(g*.7,e-.02,e-.012,n,n,12);break;case"spot":h(g*.6,e-.02,e,Zt,Zt,10),h(g,e-Math.max(.06,o),e-.02,Zt,Zt,12),h(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,Zt,Zt),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,Zt,Zt),h(.014,a+.03,a+o-.12,Zt,Zt,6),h(g,a+o-.14,a+o-.02,Zt,Zt),h(g*.92,a+o-.02,a+o,n,n);break;case"bollard":h(g,a,a+o-.14,Zt,Zt,10),h(g*.9,a+o-.14,a+o-.03,n,n,10),h(g*1.1,a+o-.03,a+o,Zt,Zt,10);break;case"garden":h(.012,a,a+o-.08,Zt,Zt,5),h(g,a+o-.08,a+o-.01,Zt,Zt,10),h(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,Zt,Zt),h(.014,a+.03,a+o-.28,Zt,Zt,6),h(g,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,Zt,Zt),h(.012,a+.03,a+o-.16,Zt,Zt,6),h(g,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??Cl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,Zt),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),p=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,p-x,p,n);break}let m=(t.roll??0)*ue,_=Math.cos(m),y=Math.sin(m),v=t.upright?a+r/2:p-x/2,M=(E,R,T)=>{let I=E,A=R*_-T*y,P=R*y+T*_;return t.upright&&([I,A]=[-A,I]),[t.x+I*c-P*f,v+A,t.z+I*f+P*c]},w=[M(-r/2,-x/2,-s/2),M(r/2,-x/2,-s/2),M(r/2,-x/2,s/2),M(-r/2,-x/2,s/2),M(-r/2,x/2,-s/2),M(r/2,x/2,-s/2),M(r/2,x/2,s/2),M(-r/2,x/2,s/2)],C=new K(n),b=[t.x,v,t.z],S=(E,R,T,I)=>{let[A,P,D]=[w[E],w[R],w[T]],L=[(P[1]-A[1])*(D[2]-A[2])-(P[2]-A[2])*(D[1]-A[1]),(P[2]-A[2])*(D[0]-A[0])-(P[0]-A[0])*(D[2]-A[2]),(P[0]-A[0])*(D[1]-A[1])-(P[1]-A[1])*(D[0]-A[0])],O=[A[0]-b[0],A[1]-b[1],A[2]-b[2]],B=L[0]*O[0]+L[1]*O[1]+L[2]*O[2]<0,[k,z,et,G]=B?[w[I],w[T],w[R],w[E]]:[w[E],w[R],w[T],w[I]];i.tri(k,z,et,C,C,C),i.tri(k,et,G,C,C,C)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{hh as FloorMap,Sh as FloorplanViewer,fh as WalkCamera,DR as createViewer,MR as funLib,oS as furnitureFront,sS as furniturePreview,gS as isLowEnd,_h as pushLampModel};
