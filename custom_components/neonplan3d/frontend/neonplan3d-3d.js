var Gh=0,_c=1,Hh=2;var Rr=1,Wh=2,Bs=3,yi=0,sn=1,xe=2,kn=0,Mi=1,Re=2,yc=3,Cr=4,Xh=5;var Zi=100,qh=101,Yh=102,$h=103,Zh=104,Jh=200,Kh=201,Qh=202,jh=203,Mc=204,Sc=205,tf=206,ef=207,nf=208,sf=209,rf=210,of=211,af=212,lf=213,cf=214,Ho=0,Wo=1,Xo=2,Rs=3,qo=4,Yo=5,$o=6,Zo=7,wc=0,uf=1,hf=2,An=0,Tc=1,Ec=2,Ac=3,Rc=4,Cc=5,Pc=6,Ic=7;var Lc=300,Si=301,Ji=302,Sa=303,wa=304,Pr=306,Wi=1e3,hn=1001,Jo=1002,ke=1003,ff=1004;var Ir=1005;var Ge=1006,Ta=1007;var wi=1008;var dn=1009,Fc=1010,Dc=1011,zs=1012,Ea=1013,Rn=1014,Cn=1015,Pn=1016,Aa=1017,Ra=1018,ks=1020,Nc=35902,Uc=35899,Oc=1021,Bc=1022,bn=1023,Un=1026,Ti=1027,zc=1028,Ca=1029,Ei=1030,Pa=1031;var Ia=1033,Lr=33776,Fr=33777,Dr=33778,Nr=33779,La=35840,Fa=35841,Da=35842,Na=35843,Ua=36196,Oa=37492,Ba=37496,za=37488,ka=37489,Ur=37490,Va=37491,Ga=37808,Ha=37809,Wa=37810,Xa=37811,qa=37812,Ya=37813,$a=37814,Za=37815,Ja=37816,Ka=37817,Qa=37818,ja=37819,tl=37820,el=37821,nl=36492,il=36494,sl=36495,rl=36283,ol=36284,Or=36285,al=36286;var lr=2300,Ko=2301,ko=2302,cc=2303,uc=2400,hc=2401,fc=2402;var df=3200;var kc=0,pf=1,jn="",Pe="srgb",cr="srgb-linear",ur="linear",de="srgb";var Vo=7680;var mf=519,gf=512,xf=513,bf=514,ll=515,vf=516,_f=517,cl=518,yf=519,Mf=35044,Vc=35048;var Gc="300 es",En=2e3,hr=2001;function _m(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ym(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Cs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sf(){let i=Cs("canvas");return i.style.display="block",i}var hh={},Ps=null;function Hc(...i){let t="THREE."+i.shift();Ps?Ps("log",t,...i):console.log(t,...i)}function wf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ot(...i){i=wf(i);let t="THREE."+i.shift();if(Ps)Ps("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=wf(i);let t="THREE."+i.shift();if(Ps)Ps("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Hi(...i){let t=i.join(" ");t in hh||(hh[t]=!0,Ot(...i))}function Tf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Ef={[Ho]:Wo,[Xo]:$o,[qo]:Zo,[Rs]:Yo,[Wo]:Ho,[$o]:Xo,[Zo]:qo,[Yo]:Rs},On=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,Qo=180/Math.PI;function Br(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function re(i,t,e){return Math.max(t,Math.min(e,i))}function Mm(i,t){return(i%t+t)%t}function Vl(i,t,e){return(1-e)*i+e*t}function er(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var $c=class $c{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$c.prototype.isVector2=!0;var jt=$c,Bn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],u=n[s+2],f=n[s+3],h=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(f!==x||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*x;m<0&&(h=-h,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+x*a}else{l=l*p+h*a,c=c*p+d*a,u=u*p+g*a,f=f*p+x*a;let v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],u=n[s+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+l*d-c*h,t[e+1]=l*g+u*h+c*f-a*d,t[e+2]=c*g+u*d+a*h-l*f,t[e+3]=u*g-a*f-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(s/2),f=a(r/2),h=l(n/2),d=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ot("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+c)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-c)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-s*a,this._w=o*u-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zc=class Zc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),u=2*(a*e-r*s),f=2*(r*n-o*e);return this.x=e+l*c+o*f-a*u,this.y=n+l*u+a*c-r*f,this.z=s+l*f+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Gl.copy(this).projectOnVector(t),this.sub(Gl)}reflect(t){return this.sub(Gl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zc.prototype.isVector3=!0;var G=Zc,Gl=new G,fh=new Bn,Jc=class Jc{constructor(t,e,n,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],v=s[1],y=s[4],_=s[7],M=s[2],w=s[5],A=s[8];return r[0]=o*x+a*v+l*M,r[3]=o*m+a*y+l*w,r[6]=o*p+a*_+l*A,r[1]=c*x+u*v+f*M,r[4]=c*m+u*y+f*w,r[7]=c*p+u*_+f*A,r[2]=h*x+d*v+g*M,r[5]=h*m+d*y+g*w,r[8]=h*p+d*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*r*u+n*a*l+s*r*c-s*o*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=u*o-a*c,h=a*l-u*r,d=c*r-o*l,g=e*f+n*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=f*x,t[1]=(s*c-u*n)*x,t[2]=(a*n-s*o)*x,t[3]=h*x,t[4]=(u*e-s*l)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(t,e)),this}rotate(t){return Hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-t)),this}translate(t,e){return Hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jc.prototype.isMatrix3=!0;var Gt=Jc,Hl=new Gt,dh=new Gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new Gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sm(){let i={enabled:!0,workingColorSpace:cr,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===de&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===de&&(s.r=As(s.r),s.g=As(s.g),s.b=As(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===jn?ur:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[cr]:{primaries:t,whitePoint:n,transfer:ur,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:n,transfer:de,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),i}var ie=Sm();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function As(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ds,jo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ds===void 0&&(ds=Cs("canvas")),ds.width=t.width,ds.height=t.height;let s=ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ds}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Cs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Kn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Kn(e[n]/255)*255):e[n]=Kn(e[n]);return{data:e,width:t.width,height:t.height}}else return Ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wm=0,Is=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=Br(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wl(s[o].image)):r.push(Wl(s[o]))}else r=Wl(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?jo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ot("Texture: Unable to serialize Texture."),{})}var Tm=0,Xl=new G,Je=class i extends On{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hn,s=hn,r=Ge,o=wi,a=bn,l=dn,c=i.DEFAULT_ANISOTROPY,u=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Br(),this.name="",this.source=new Is(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xl).x}get height(){return this.source.getSize(Xl).y}get depth(){return this.source.getSize(Xl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ot(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wi:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Jo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wi:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Jo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=Lc;Je.DEFAULT_ANISOTROPY=1;var Kc=class Kc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,M=(p+1)/2,w=(u+h)/4,A=(f+x)/4,b=(g+m)/4;return y>_&&y>M?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=w/s,r=b/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-x)/v,this.z=(h-u)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Kc.prototype.isVector4=!0;var Ee=Kc,ta=class extends On{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ge,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ge,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Is(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ke=class extends ta{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},fr=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ea=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ke,this.minFilter=ke,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ma=class Ma{constructor(t,e,n,s,r,o,a,l,c,u,f,h,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,x,m)}set(t,e,n,s,r,o,a,l,c,u,f,h,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ma().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/ps.setFromMatrixColumn(t,0).length(),r=1/ps.setFromMatrixColumn(t,1).length(),o=1/ps.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=d+g*c,e[5]=h-x*c,e[9]=-a*l,e[2]=x-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=x+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*u,d=l*f,g=c*u,x=c*f;e[0]=h-x*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=x-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*u,d=o*f,g=a*u,x=a*f;e[0]=l*u,e[4]=g*c-d,e[8]=h*c+x,e[1]=l*f,e[5]=x*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=x-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*f+g,e[10]=h-x*f}else if(t.order==="XZY"){let h=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=h*f+x,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=x*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Em,t,Am)}lookAt(t,e,n){let s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),oi.crossVectors(n,cn),oi.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),oi.crossVectors(n,cn)),oi.normalize(),mo.crossVectors(cn,oi),s[0]=oi.x,s[4]=mo.x,s[8]=cn.x,s[1]=oi.y,s[5]=mo.y,s[9]=cn.y,s[2]=oi.z,s[6]=mo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],M=n[15],w=s[0],A=s[4],b=s[8],S=s[12],R=s[1],T=s[5],P=s[9],L=s[13],C=s[2],D=s[6],N=s[10],U=s[14],k=s[3],B=s[7],z=s[11],V=s[15];return r[0]=o*w+a*R+l*C+c*k,r[4]=o*A+a*T+l*D+c*B,r[8]=o*b+a*P+l*N+c*z,r[12]=o*S+a*L+l*U+c*V,r[1]=u*w+f*R+h*C+d*k,r[5]=u*A+f*T+h*D+d*B,r[9]=u*b+f*P+h*N+d*z,r[13]=u*S+f*L+h*U+d*V,r[2]=g*w+x*R+m*C+p*k,r[6]=g*A+x*T+m*D+p*B,r[10]=g*b+x*P+m*N+p*z,r[14]=g*S+x*L+m*U+p*V,r[3]=v*w+y*R+_*C+M*k,r[7]=v*A+y*T+_*D+M*B,r[11]=v*b+y*P+_*N+M*z,r[15]=v*S+y*L+_*U+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*h,y=a*d-c*f,_=a*h-l*f,M=o*d-c*u,w=o*h-l*u,A=o*f-a*u;return e*(x*v-m*y+p*_)-n*(g*v-m*M+p*w)+s*(g*y-x*M+p*A)-r*(g*_-x*w+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],u=t[10];return e*(o*u-a*c)-n*(r*u-a*l)+s*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-n*o,y=e*l-s*o,_=e*c-r*o,M=n*l-s*a,w=n*c-r*a,A=s*c-r*l,b=u*x-f*g,S=u*m-h*g,R=u*p-d*g,T=f*m-h*x,P=f*p-d*x,L=h*p-d*m,C=v*L-y*P+_*T+M*R-w*S+A*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=(a*L-l*P+c*T)*D,t[1]=(s*P-n*L-r*T)*D,t[2]=(x*A-m*w+p*M)*D,t[3]=(h*w-f*A-d*M)*D,t[4]=(l*R-o*L-c*S)*D,t[5]=(e*L-s*R+r*S)*D,t[6]=(m*_-g*A-p*y)*D,t[7]=(u*A-h*_+d*y)*D,t[8]=(o*P-a*R+c*b)*D,t[9]=(n*R-e*P-r*b)*D,t[10]=(g*w-x*_+p*v)*D,t[11]=(f*_-u*w-d*v)*D,t[12]=(a*S-o*T-l*b)*D,t[13]=(e*T-n*S+s*b)*D,t[14]=(x*y-g*M-m*v)*D,t[15]=(u*M-f*y+h*v)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+n,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,f=a+a,h=r*c,d=r*u,g=r*f,x=o*u,m=o*f,p=a*f,v=l*c,y=l*u,_=l*f,M=n.x,w=n.y,A=n.z;return s[0]=(1-(x+p))*M,s[1]=(d+_)*M,s[2]=(g-y)*M,s[3]=0,s[4]=(d-_)*w,s[5]=(1-(h+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*A,s[9]=(m-v)*A,s[10]=(1-(h+x))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=ps.set(s[0],s[1],s[2]).length(),a=ps.set(s[4],s[5],s[6]).length(),l=ps.set(s[8],s[9],s[10]).length();r<0&&(o=-o),Mn.copy(this);let c=1/o,u=1/a,f=1/l;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,e.setFromRotationMatrix(Mn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,o,a=En,l=!1){let c=this.elements,u=2*r/(e-t),f=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s),g,x;if(l)g=r/(o-r),x=o*r/(o-r);else if(a===En)g=-(o+r)/(o-r),x=-2*o*r/(o-r);else if(a===hr)g=-o/(o-r),x=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=En,l=!1){let c=this.elements,u=2/(e-t),f=2/(n-s),h=-(e+t)/(e-t),d=-(n+s)/(n-s),g,x;if(l)g=1/(o-r),x=o/(o-r);else if(a===En)g=-2/(o-r),x=-(o+r)/(o-r);else if(a===hr)g=-1/(o-r),x=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ma.prototype.isMatrix4=!0;var Se=Ma,ps=new G,Mn=new Se,Em=new G(0,0,0),Am=new G(1,1,1),oi=new G,mo=new G,cn=new G,mh=new Se,gh=new Bn,fi=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gh.setFromEuler(this),this.setFromQuaternion(gh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};fi.DEFAULT_ORDER="XYZ";var Ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rm=0,xh=new G,ms=new Bn,qn=new Se,go=new G,nr=new G,Cm=new G,Pm=new Bn,bh=new G(1,0,0),vh=new G(0,1,0),_h=new G(0,0,1),yh={type:"added"},Im={type:"removed"},gs={type:"childadded",child:null},ql={type:"childremoved",child:null},an=class i extends On{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Br(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new G,e=new fi,n=new Bn,s=new G(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Gt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.multiply(ms),this}rotateOnWorldAxis(t,e){return ms.setFromAxisAngle(t,e),this.quaternion.premultiply(ms),this}rotateX(t){return this.rotateOnAxis(bh,t)}rotateY(t){return this.rotateOnAxis(vh,t)}rotateZ(t){return this.rotateOnAxis(_h,t)}translateOnAxis(t,e){return xh.copy(t).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(bh,t)}translateY(t){return this.translateOnAxis(vh,t)}translateZ(t){return this.translateOnAxis(_h,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(nr,go,this.up):qn.lookAt(go,nr,this.up),this.quaternion.setFromRotationMatrix(qn),s&&(qn.extractRotation(s.matrixWorld),ms.setFromRotationMatrix(qn),this.quaternion.premultiply(ms.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yh),gs.child=t,this.dispatchEvent(gs),gs.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Im),ql.child=t,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),qn.multiply(t.parent.matrixWorld)),t.applyMatrix4(qn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yh),gs.child=t,this.dispatchEvent(gs),gs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,t,Cm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Pm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};an.DEFAULT_UP=new G(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ze=class extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}},Lm={type:"move"},Fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ze;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Yl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var et=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=ie.workingColorSpace){if(t=Mm(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Yl(o,r,t+1/3),this.g=Yl(o,r,t),this.b=Yl(o,r,t-1/3)}return ie.colorSpaceToWorking(this,s),this}setStyle(t,e=Pe){function n(r){r!==void 0&&parseFloat(r)<1&&Ot("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ot("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){let n=Af[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=As(t.r),this.g=As(t.g),this.b=As(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return ie.workingToColorSpace(Ye.copy(this),t),Math.round(re(Ye.r*255,0,255))*65536+Math.round(re(Ye.g*255,0,255))*256+Math.round(re(Ye.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ye.copy(this),e);let n=Ye.r,s=Ye.g,r=Ye.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=Pe){ie.workingToColorSpace(Ye.copy(this),t);let e=Ye.r,n=Ye.g,s=Ye.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(xo);let n=Vl(ai.h,xo.h,e),s=Vl(ai.s,xo.s,e),r=Vl(ai.l,xo.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ye=new et;et.NAMES=Af;var dr=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new et(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var di=class extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Sn=new G,Yn=new G,$l=new G,$n=new G,xs=new G,bs=new G,Mh=new G,Zl=new G,Jl=new G,Kl=new G,Ql=new Ee,jl=new Ee,tc=new Ee,hi=class i{constructor(t=new G,e=new G,n=new G){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Sn.subVectors(t,e),s.cross(Sn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Sn.subVectors(s,e),Yn.subVectors(n,e),$l.subVectors(t,e);let o=Sn.dot(Sn),a=Sn.dot(Yn),l=Sn.dot($l),c=Yn.dot(Yn),u=Yn.dot($l),f=o*c-a*a;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-a*u)*h,g=(o*u-a*l)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,$n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,$n.x),l.addScaledVector(o,$n.y),l.addScaledVector(a,$n.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Ql.setScalar(0),jl.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(t,e),jl.fromBufferAttribute(t,n),tc.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Ql,r.x),o.addScaledVector(jl,r.y),o.addScaledVector(tc,r.z),o}static isFrontFacing(t,e,n,s){return Sn.subVectors(n,e),Yn.subVectors(t,e),Sn.cross(Yn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Sn.subVectors(this.c,this.b),Yn.subVectors(this.a,this.b),Sn.cross(Yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;xs.subVectors(s,n),bs.subVectors(r,n),Zl.subVectors(t,n);let l=xs.dot(Zl),c=bs.dot(Zl);if(l<=0&&c<=0)return e.copy(n);Jl.subVectors(t,s);let u=xs.dot(Jl),f=bs.dot(Jl);if(u>=0&&f<=u)return e.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(xs,o);Kl.subVectors(t,r);let d=xs.dot(Kl),g=bs.dot(Kl);if(g>=0&&d<=g)return e.copy(r);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(bs,a);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Mh.subVectors(r,s),a=(f-u)/(f-u+(d-g)),e.copy(s).addScaledVector(Mh,a);let p=1/(m+x+h);return o=x*p,a=h*p,e.copy(n).addScaledVector(xs,o).addScaledVector(bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},en=class{constructor(t=new G(1/0,1/0,1/0),e=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,wn):wn.fromBufferAttribute(r,o),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(t.matrixWorld),this.union(bo)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),vo.subVectors(this.max,ir),vs.subVectors(t.a,ir),_s.subVectors(t.b,ir),ys.subVectors(t.c,ir),li.subVectors(_s,vs),ci.subVectors(ys,_s),zi.subVectors(vs,ys);let e=[0,-li.z,li.y,0,-ci.z,ci.y,0,-zi.z,zi.y,li.z,0,-li.x,ci.z,0,-ci.x,zi.z,0,-zi.x,-li.y,li.x,0,-ci.y,ci.x,0,-zi.y,zi.x,0];return!ec(e,vs,_s,ys,vo)||(e=[1,0,0,0,1,0,0,0,1],!ec(e,vs,_s,ys,vo))?!1:(_o.crossVectors(li,ci),e=[_o.x,_o.y,_o.z],ec(e,vs,_s,ys,vo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new G,new G,new G,new G,new G,new G,new G,new G],wn=new G,bo=new en,vs=new G,_s=new G,ys=new G,li=new G,ci=new G,zi=new G,ir=new G,vo=new G,_o=new G,ki=new G;function ec(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ki.fromArray(i,r);let a=s.x*Math.abs(ki.x)+s.y*Math.abs(ki.y)+s.z*Math.abs(ki.z),l=t.dot(ki),c=e.dot(ki),u=n.dot(ki);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var De=new G,yo=new jt,Fm=0,xn=class extends On{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Fm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mf,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=er(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=er(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=er(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=er(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=er(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),r=on(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var pr=class extends xn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Xi=class extends xn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends xn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dm=new en,sr=new G,nc=new G,pi=class{constructor(t=new G,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(sr,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(nc)),this.expandByPoint(sr.copy(t.center).sub(nc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Nm=0,gn=new Se,ic=new an,Ms=new G,un=new en,rr=new en,ze=new G,qt=class i extends On{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Br(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_m(t)?Xi:pr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Gt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return gn.makeRotationFromQuaternion(t),this.applyMatrix4(gn),this}rotateX(t){return gn.makeRotationX(t),this.applyMatrix4(gn),this}rotateY(t){return gn.makeRotationY(t),this.applyMatrix4(gn),this}rotateZ(t){return gn.makeRotationZ(t),this.applyMatrix4(gn),this}translate(t,e,n){return gn.makeTranslation(t,e,n),this.applyMatrix4(gn),this}scale(t,e,n){return gn.makeScale(t,e,n),this.applyMatrix4(gn),this}lookAt(t){return ic.lookAt(t),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new en);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];un.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){let n=this.boundingSphere.center;if(un.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];rr.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(un.min,rr.min),un.expandByPoint(ze),ze.addVectors(un.max,rr.max),un.expandByPoint(ze)):(un.expandByPoint(rr.min),un.expandByPoint(rr.max))}un.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)ze.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),ze.add(Ms)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new G,l[b]=new G;let c=new G,u=new G,f=new G,h=new jt,d=new jt,g=new jt,x=new G,m=new G;function p(b,S,R){c.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),f.fromBufferAttribute(n,R),h.fromBufferAttribute(r,b),d.fromBufferAttribute(r,S),g.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(T),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(T),a[b].add(x),a[S].add(x),a[R].add(x),l[b].add(m),l[S].add(m),l[R].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,S=v.length;b<S;++b){let R=v[b],T=R.start,P=R.count;for(let L=T,C=T+P;L<C;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let y=new G,_=new G,M=new G,w=new G;function A(b){M.fromBufferAttribute(s,b),w.copy(M);let S=a[b];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(w,S);let T=_.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,T)}for(let b=0,S=v.length;b<S;++b){let R=v[b],T=R.start,P=R.count;for(let L=T,C=T+P;L<C;L+=3)A(t.getX(L+0)),A(t.getX(L+1)),A(t.getX(L+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new xn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let s=new G,r=new G,o=new G,a=new G,l=new G,c=new G,u=new G,f=new G;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),x=t.getX(h+1),m=t.getX(h+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)s.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(s,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new xn(h,u,f)}if(this.index===null)return Ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(e))}let r=t.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sc=new G,Um=new G,Om=new Gt,Tn=class{constructor(t=new G(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=sc.subVectors(n,e).cross(Um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(sc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Om.getNormalMatrix(t),s=this.coplanarPoint(sc).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Bm=0,Qn=class extends On{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bm++}),this.uuid=Br(),this.name="",this.type="Material",this.blending=Mi,this.side=yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mc,this.blendDst=Sc,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vo,this.stencilZFail=Vo,this.stencilZPass=Vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ot(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ot(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new et().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Tn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new jt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new jt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Jn=new G,rc=new G,Mo=new G,So=new G,qi=class{constructor(t=new G,e=new G(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){rc.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),So.copy(this.origin).sub(rc);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Mo),a=So.dot(this.direction),l=-So.dot(Mo),c=So.lengthSq(),u=Math.abs(1-o*o),f,h,d,g;if(u>0)if(f=o*l-a,h=o*a-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let x=1/u;f*=x,h*=x,d=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rc).addScaledVector(Mo,h),d}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let n=Jn.dot(this.direction),s=Jn.dot(Jn)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,s=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,s=(t.min.x-h.x)*c),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-h.z)*f,l=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,l=(t.min.z-h.z)*f),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,n,s,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,u=a.z,f=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,y=n.z-o.z,_=Math.abs(l),M=Math.abs(c),w=Math.abs(u),A,b,S,R,T,P,L,C,D,N,U,k;if(_>=M&&_>=w?(S=l,P=f,D=g,k=p,l>=0?(A=c,b=u,R=h,T=d,L=x,C=m,N=v,U=y):(A=u,b=c,R=d,T=h,L=m,C=x,N=y,U=v)):M>=w?(S=c,P=h,D=x,k=v,c>=0?(A=u,b=l,R=d,T=f,L=m,C=g,N=y,U=p):(A=l,b=u,R=f,T=d,L=g,C=m,N=p,U=y)):(S=u,P=d,D=m,k=y,u>=0?(A=l,b=c,R=f,T=h,L=g,C=x,N=p,U=v):(A=c,b=l,R=h,T=f,L=x,C=g,N=v,U=p)),S===0)return null;let B=A/S,z=b/S,V=1/S,tt=R-B*P,Z=T-z*P,ct=L-B*D,ut=C-z*D,St=N-B*k,q=U-z*k,Y=St*ut-q*ct,nt=tt*q-Z*St,ht=ct*Z-ut*tt;if(s){if(Y<0||nt<0||ht<0)return null}else if((Y<0||nt<0||ht<0)&&(Y>0||nt>0||ht>0))return null;let lt=Y+nt+ht;if(lt===0)return null;let Dt=V*(Y*P+nt*D+ht*k);return(lt>0?Dt<0:Dt>0)?null:this.at(Dt/lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},le=class extends Qn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Sh=new Se,Vi=new qi,wo=new pi,wh=new G,To=new G,Eo=new G,Ao=new G,oc=new G,Ro=new G,Th=new G,Co=new G,Vt=class extends an{constructor(t=new qt,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Ro.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=a[l],f=r[l];u!==0&&(oc.fromBufferAttribute(f,t),o?Ro.addScaledVector(oc,u):Ro.addScaledVector(oc.sub(e),u))}e.add(Ro)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wo.copy(n.boundingSphere),wo.applyMatrix4(r),Vi.copy(t.ray).recast(t.near),!(wo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(wo,wh)===null||Vi.origin.distanceToSquared(wh)>(t.far-t.near)**2))&&(Sh.copy(r).invert(),Vi.copy(t.ray).applyMatrix4(Sh),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,M=y;_<M;_+=3){let w=a.getX(_),A=a.getX(_+1),b=a.getX(_+2);s=Po(this,p,t,n,c,u,f,w,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);s=Po(this,o,t,n,c,u,f,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){let m=h[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,M=y;_<M;_+=3){let w=_,A=_+1,b=_+2;s=Po(this,p,t,n,c,u,f,w,A,b),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;s=Po(this,o,t,n,c,u,f,v,y,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function zm(i,t,e,n,s,r,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===yi,a),l===null)return null;Co.copy(a),Co.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:i}}function Po(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,To),i.getVertexPosition(l,Eo),i.getVertexPosition(c,Ao);let u=zm(i,t,e,n,To,Eo,Ao,Th);if(u){let f=new G;hi.getBarycoord(Th,To,Eo,Ao,f),s&&(u.uv=hi.getInterpolatedAttribute(s,a,l,c,f,new jt)),r&&(u.uv1=hi.getInterpolatedAttribute(r,a,l,c,f,new jt)),o&&(u.normal=hi.getInterpolatedAttribute(o,a,l,c,f,new G),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new G,materialIndex:0};hi.getNormal(To,Eo,Ao,h.normal),u.face=h,u.barycoord=f}return u}var na=class extends Je{constructor(t=null,e=1,n=1,s,r,o,a,l,c=ke,u=ke,f,h){super(null,o,a,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Gi=new pi,km=new jt(.5,.5),Io=new G,mr=class{constructor(t=new Tn,e=new Tn,n=new Tn,s=new Tn,r=new Tn,o=new Tn){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],y=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-o,d-u,p-g,M-v).normalize(),s[1].setComponents(c+o,d+u,p+g,M+v).normalize(),s[2].setComponents(c+a,d+f,p+x,M+y).normalize(),s[3].setComponents(c-a,d-f,p-x,M-y).normalize(),n)s[4].setComponents(l,h,m,_).normalize(),s[5].setComponents(c-l,d-h,p-m,M-_).normalize();else if(s[4].setComponents(c-l,d-h,p-m,M-_).normalize(),e===En)s[5].setComponents(c+l,d+h,p+m,M+_).normalize();else if(e===hr)s[5].setComponents(l,h,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){Gi.center.set(0,0,0);let e=km.distanceTo(t.center);return Gi.radius=.7071067811865476+e,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var nn=class extends Qn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ia=new G,sa=new G,Eh=new Se,or=new qi,Lo=new pi,ac=new G,Ah=new G,ra=class extends an{constructor(t=new qt,e=new nn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ia.fromBufferAttribute(e,s-1),sa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ia.distanceTo(sa);t.setAttribute("lineDistance",new Bt(n,1))}else Ot("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lo.copy(n.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,t.ray.intersectsSphere(Lo)===!1)return;Eh.copy(s).invert(),or.copy(t.ray).applyMatrix4(Eh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){let d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=u.getX(x),v=u.getX(x+1),y=Fo(this,t,or,l,p,v,x);y&&e.push(y)}if(this.isLineLoop){let x=u.getX(g-1),m=u.getX(d),p=Fo(this,t,or,l,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Fo(this,t,or,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Fo(this,t,or,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Fo(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(ia.fromBufferAttribute(a,s),sa.fromBufferAttribute(a,r),e.distanceSqToSegment(ia,sa,ac,Ah)>n)return;ac.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(ac);if(!(c<t.near||c>t.far))return{distance:c,point:Ah.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Rh=new G,Ch=new G,ln=class extends ra{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Rh.fromBufferAttribute(e,s),Ch.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Rh.distanceTo(Ch);t.setAttribute("lineDistance",new Bt(n,1))}else Ot("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Yi=class extends Qn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ph=new Se,dc=new qi,Do=new pi,No=new G,Ds=class extends an{constructor(t=new qt,e=new Yi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;Ph.copy(s).invert(),dc.copy(t.ray).applyMatrix4(Ph);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,f=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,x=d;g<x;g++){let m=c.getX(g);No.fromBufferAttribute(f,m),Ih(No,m,l,s,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let g=h,x=d;g<x;g++)No.fromBufferAttribute(f,g),Ih(No,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Ih(i,t,e,n,s,r,o){let a=dc.distanceSqToPoint(i);if(a<e){let l=new G;dc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var gr=class extends Je{constructor(t=[],e=Si,n,s,r,o,a,l,c,u){super(t,e,n,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},mi=class extends Je{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gi=class extends Je{constructor(t,e,n=Rn,s,r,o,a=ke,l=ke,c,u=Un,f=1){if(u!==Un&&u!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:f};super(h,s,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Is(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},oa=class extends gi{constructor(t,e=Rn,n=Si,s,r,o=ke,a=ke,l,c=Un){let u={width:t,height:t,depth:1},f=[u,u,u,u,u,u];super(t,t,e,n,s,r,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},xr=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ns=class i extends qt{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(u,3)),this.setAttribute("uv",new Bt(f,2));function g(x,m,p,v,y,_,M,w,A,b,S){let R=_/A,T=M/b,P=_/2,L=M/2,C=w/2,D=A+1,N=b+1,U=0,k=0,B=new G;for(let z=0;z<N;z++){let V=z*T-L;for(let tt=0;tt<D;tt++){let Z=tt*R-P;B[x]=Z*v,B[m]=V*y,B[p]=C,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=w>0?1:-1,u.push(B.x,B.y,B.z),f.push(tt/A),f.push(1-z/b),U+=1}}for(let z=0;z<b;z++)for(let V=0;V<A;V++){let tt=h+V+D*z,Z=h+V+D*(z+1),ct=h+(V+1)+D*(z+1),ut=h+(V+1)+D*z;l.push(tt,Z,ut),l.push(Z,ct,ut),k+=6}a.addGroup(d,k,S),d+=k,h+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var br=class i extends qt{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],c=new G,u=new jt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=e;f++,h+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/t+1)/2,u.y=(o[h+1]/t+1)/2,l.push(u.x,u.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Vm(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Rf(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,c;if(n&&(r=qm(i,t,r,e)),i.length>80*e){a=i[0],l=i[1];let u=a,f=l;for(let h=e;h<s;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>u&&(u=d),g>f&&(f=g)}c=Math.max(u-a,f-l),c=c!==0?32767/c:0}return vr(r,o,e,a,l,c,0),o}function Rf(i,t,e,n,s){let r;if(s===i0(i,t,e,n)>0)for(let o=t;o<e;o+=n)r=Lh(o/n|0,i[o],i[o+1],r);else for(let o=e-n;o>=t;o-=n)r=Lh(o/n|0,i[o],i[o+1],r);return r&&Us(r,r.next)&&(yr(r),r=r.next),r}function $i(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Us(e,e.next)||Te(e.prev,e,e.next)===0)){if(yr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function vr(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Km(i,n,s,r);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Hm(i,n,s,r):Gm(i)){t.push(l.i,i.i,c.i),yr(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Wm($i(i),t),vr(i,t,e,n,s,r,2)):o===2&&Xm(i,t,e,n,s,r):vr($i(i),t,e,n,s,r,1);break}}}function Gm(i){let t=i.prev,e=i,n=i.next;if(Te(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,l=e.y,c=n.y,u=Math.min(s,r,o),f=Math.min(a,l,c),h=Math.max(s,r,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=d&&ar(s,a,r,l,o,c,g.x,g.y)&&Te(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Hm(i,t,e,n){let s=i.prev,r=i,o=i.next;if(Te(s,r,o)>=0)return!1;let a=s.x,l=r.x,c=o.x,u=s.y,f=r.y,h=o.y,d=Math.min(a,l,c),g=Math.min(u,f,h),x=Math.max(a,l,c),m=Math.max(u,f,h),p=pc(d,g,t,e,n),v=pc(x,m,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ar(a,u,l,f,c,h,y.x,y.y)&&Te(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ar(a,u,l,f,c,h,_.x,_.y)&&Te(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&ar(a,u,l,f,c,h,y.x,y.y)&&Te(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==s&&_!==o&&ar(a,u,l,f,c,h,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Wm(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Us(n,s)&&Pf(n,e,e.next,s)&&_r(n,s)&&_r(s,n)&&(t.push(n.i,e.i,s.i),yr(e),yr(e.next),e=i=s),e=e.next}while(e!==i);return $i(e)}function Xm(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&t0(o,a)){let l=If(o,a);o=$i(o,o.next),l=$i(l,l.next),vr(o,t,e,n,s,r,0),vr(l,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function qm(i,t,e,n){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*n,l=r<o-1?t[r+1]*n:i.length,c=Rf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),s.push(jm(c))}s.sort(Ym);for(let r=0;r<s.length;r++)e=$m(s[r],e);return e}function Ym(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function $m(i,t){let e=Zm(i,t);if(!e)return t;let n=If(e,i);return $i(n,n.next),$i(e,e.next)}function Zm(i,t){let e=t,n=i.x,s=i.y,r=-1/0,o;if(Us(i,e))return e;do{if(Us(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let f=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=n&&f>r&&(r=f,o=e.x<e.next.x?e:e.next,f===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,u=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Cf(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let f=Math.abs(s-e.y)/(n-e.x);_r(e,i)&&(f<u||f===u&&(e.x>o.x||e.x===o.x&&Jm(o,e)))&&(o=e,u=f)}e=e.next}while(e!==a);return o}function Jm(i,t){return Te(i.prev,i,t.prev)<0&&Te(t.next,i,i.next)<0}function Km(i,t,e,n){let s=i;do s.z===0&&(s.z=pc(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Qm(s)}function Qm(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,e*=2}while(t>1);return i}function pc(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function jm(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Cf(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function ar(i,t,e,n,s,r,o,a){return!(i===o&&t===a)&&Cf(i,t,e,n,s,r,o,a)}function t0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!e0(i,t)&&(_r(i,t)&&_r(t,i)&&n0(i,t)&&(Te(i.prev,i,t.prev)||Te(i,t.prev,t))||Us(i,t)&&Te(i.prev,i,i.next)>0&&Te(t.prev,t,t.next)>0)}function Te(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Us(i,t){return i.x===t.x&&i.y===t.y}function Pf(i,t,e,n){let s=Oo(Te(i,t,e)),r=Oo(Te(i,t,n)),o=Oo(Te(e,n,i)),a=Oo(Te(e,n,t));return!!(s!==r&&o!==a||s===0&&Uo(i,e,t)||r===0&&Uo(i,n,t)||o===0&&Uo(e,i,n)||a===0&&Uo(e,t,n))}function Uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Oo(i){return i>0?1:i<0?-1:0}function e0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Pf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return Te(i.prev,i,i.next)<0?Te(i,t,i.next)>=0&&Te(i,i.prev,t)>=0:Te(i,t,i.prev)<0||Te(i,i.next,t)<0}function n0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function If(i,t){let e=mc(i.i,i.x,i.y),n=mc(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lh(i,t,e,n){let s=mc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function yr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function mc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function i0(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var gc=class{static triangulate(t,e,n=2){return Vm(t,e,n)}},Mr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Fh(t),Dh(n,t);let o=t.length;e.forEach(Fh);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Dh(n,e[l]);let a=gc.triangulate(n,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function Fh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Dh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var xi=class i extends qt{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,u=l+1,f=t/a,h=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<u;p++){let v=p*h-o;for(let y=0;y<c;y++){let _=y*f-r;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,_=v+c*(p+1),M=v+1+c*(p+1),w=v+1+c*p;d.push(y,_,w),d.push(_,M,w)}this.setIndex(d),this.setAttribute("position",new Bt(g,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Sr=class i extends qt{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],l=[],c=[],u=[],f=t,h=(e-t)/s,d=new G,g=new jt;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,u.push(g.x,g.y)}f+=h}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,_=v+n+1,M=v+n+2,w=v+1;a.push(y,_,w),a.push(_,M,w)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function Ki(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Nh(s))s.isRenderTargetTexture?(Ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Nh(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function je(i){let t={};for(let e=0;e<i.length;e++){let n=Ki(i[e]);for(let s in n)t[s]=n[s]}return t}function Nh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function s0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Wc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Lf={clone:Ki,merge:je},r0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,o0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qe=class extends Qn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=r0,this.fragmentShader=o0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ki(t.uniforms),this.uniformsGroups=s0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new et().setHex(s.value);break;case"v2":this.uniforms[n].value=new jt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Ee().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Gt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new Se().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},aa=class extends Qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var la=class extends Qn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=df,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends Qn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Ss(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function lc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var bi=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends bi{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uc,endingEnd:uc}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hc:r=t,a=2*e-n;break;case fc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hc:o=t,l=2*n-e;break;case fc:o=1,l=n+s[1]-s[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-h*m+2*h*x-h*g,v=(1+h)*m+(-1.5-2*h)*x+(-.5+h)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let M=0;M!==a;++M)r[M]=p*o[u+M]+v*o[c+M]+y*o[l+M]+_*o[f+M];return r}},ha=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(s-e),f=1-u;for(let h=0;h!==a;++h)r[h]=o[c+h]*f+o[l+h]*u;return r}},fa=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},da=class extends bi{interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(n-e)/(s-e),x=1-g;for(let m=0;m!==a;++m)r[m]=o[c+m]*x+o[l+m]*g;return r}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*h+g*2,v=f[p],y=f[p+1],_=t*h+g*2,M=u[_],w=u[_+1],A=l0(n,e,v,M,s);r[g]=Ff(A,x,y,w,m)}return r}};function Ff(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function a0(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function l0(i,t,e,n,s){let r=(i-t)/(s-t);for(let o=0;o<8;o++){let a=Ff(r,t,e,n,s)-i;if(Math.abs(a)<1e-10)break;let l=a0(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var fn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Ss(e,this.TimeBufferType),this.values=Ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Ss(t.times,Array),values:Ss(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),lc(t.settings)&&(n.settings={inTangents:Ss(t.settings.inTangents,Array),outTangents:Ss(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new da(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case lr:e=this.InterpolantFactoryMethodDiscrete;break;case Ko:e=this.InterpolantFactoryMethodLinear;break;case ko:e=this.InterpolantFactoryMethodSmooth;break;case cc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ot("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return lr;case this.InterpolantFactoryMethodLinear:return Ko;case this.InterpolantFactoryMethodSmooth:return ko;case this.InterpolantFactoryMethodBezier:return cc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;lc(this.settings)&&(Uh(this.settings.inTangents,t),Uh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&ym(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ko,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(s)l=!0;else{let f=a*n,h=f-n,d=f+n;for(let g=0;g!==n;++g){let x=e[f+g];if(x!==e[h+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let f=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[f+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,lc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Uh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}fn.prototype.ValueTypeName="";fn.prototype.TimeBufferType=Float32Array;fn.prototype.ValueBufferType=Float32Array;fn.prototype.DefaultInterpolation=Ko;var vi=class extends fn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="bool";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=lr;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends bi{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(s-e),c=t*a;for(let u=c+a;c!==u;c+=4)Bn.slerpFlat(r,0,o,c-a,o,c,l);return r}},wr=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};wr.prototype.ValueTypeName="quaternion";wr.prototype.InterpolantFactoryMethodSmooth=void 0;var _i=class extends fn{constructor(t,e,n){super(t,e,n)}};_i.prototype.ValueTypeName="string";_i.prototype.ValueBufferType=Array;_i.prototype.DefaultInterpolation=lr;_i.prototype.InterpolantFactoryMethodLinear=void 0;_i.prototype.InterpolantFactoryMethodSmooth=void 0;var xa=class extends fn{constructor(t,e,n,s){super(t,e,n,s)}};xa.prototype.ValueTypeName="vector";var Go={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(Oh(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!Oh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Oh(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var ba=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Df=new ba,Os=class{constructor(t){this.manager=t!==void 0?t:Df,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Os.DEFAULT_MATERIAL_NAME="__DEFAULT";var ws=new WeakMap,va=class extends Os{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=Go.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let f=ws.get(o);f===void 0&&(f=[],ws.set(o,f)),f.push({onLoad:e,onError:s})}return o}let a=Cs("img");function l(){u(),e&&e(this);let f=ws.get(this)||[];for(let h=0;h<f.length;h++){let d=f[h];d.onLoad&&d.onLoad(this)}ws.delete(this),r.manager.itemEnd(t)}function c(f){u(),s&&s(f),Go.remove(`image:${t}`);let h=ws.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(f)}ws.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Go.add(`image:${t}`,a),r.manager.itemStart(t),a.src=t,a}};var Tr=class extends Os{constructor(t){super(t)}load(t,e,n,s){let r=new Je,o=new va(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}};var Bo=new G,zo=new Bn,Nn=new G,Er=class extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Bo,zo,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Nn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Bo,zo,Nn),Nn.x===1&&Nn.y===1&&Nn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Bo,zo,Nn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ui=new G,Bh=new jt,zh=new jt,$e=class extends Er{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Qo*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ui.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ui.x,ui.y).multiplyScalar(-t/ui.z),ui.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ui.x,ui.y).multiplyScalar(-t/ui.z)}getViewSize(t,e){return this.getViewBounds(t,Bh,zh),e.subVectors(zh,Bh)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(kl*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var zn=class extends Er{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ts=-90,Es=1,_a=class extends an{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new $e(Ts,Es,t,e);s.layers=this.layers,this.add(s);let r=new $e(Ts,Es,t,e);r.layers=this.layers,this.add(r);let o=new $e(Ts,Es,t,e);o.layers=this.layers,this.add(o);let a=new $e(Ts,Es,t,e);a.layers=this.layers,this.add(a);let l=new $e(Ts,Es,t,e);l.layers=this.layers,this.add(l);let c=new $e(Ts,Es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===hr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,u]=this.children,f=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(f,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ya=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Xc="\\[\\]\\.:\\/",c0=new RegExp("["+Xc+"]","g"),qc="[^"+Xc+"]",u0="[^"+Xc.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",qc),f0=/(WCOD+)?/.source.replace("WCOD",u0),d0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",qc),p0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",qc),m0=new RegExp("^"+h0+f0+d0+p0+"$"),g0=["material","materials","bones","map"],xc=class{constructor(t,e,n){let s=n||ye.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ye=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(c0,"")}static parseTrackName(t){let e=m0.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);g0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ot("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[s];if(o===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ye.Composite=xc;ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ye.prototype.GetterByBindingType=[ye.prototype._getValue_direct,ye.prototype._getValue_array,ye.prototype._getValue_arrayElement,ye.prototype._getValue_toArray];ye.prototype.SetterByBindingTypeAndVersioning=[[ye.prototype._setValue_direct,ye.prototype._setValue_direct_setNeedsUpdate,ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_array,ye.prototype._setValue_array_setNeedsUpdate,ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_arrayElement,ye.prototype._setValue_arrayElement_setNeedsUpdate,ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ye.prototype._setValue_fromArray,ye.prototype._setValue_fromArray_setNeedsUpdate,ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var t1=new Float32Array(1);var kh=new Se,Ar=class{constructor(t,e,n=0,s=1/0){this.ray=new qi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return kh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(kh),this}intersectObject(t,e=!0,n=[]){return bc(t,this,n,e),n.sort(Vh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)bc(t[s],this,n,e);return n.sort(Vh),n}};function Vh(i,t){return i.distance-t.distance}function bc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)bc(r[o],t,e,!0)}}var Qc=class Qc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Qc.prototype.isMatrix2=!0;var vc=Qc;function Yc(i,t,e,n){let s=x0(n);switch(e){case Oc:return i*t;case zc:return i*t/s.components*s.byteLength;case Ca:return i*t/s.components*s.byteLength;case Ei:return i*t*2/s.components*s.byteLength;case Pa:return i*t*2/s.components*s.byteLength;case Bc:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Ia:return i*t*4/s.components*s.byteLength;case Lr:case Fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Dr:case Nr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Na:return Math.max(i,16)*Math.max(t,8)/4;case La:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Ua:case Oa:case za:case ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ba:case Ur:case Va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case el:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nl:case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rl:case ol:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Or:case al:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function x0(i){switch(i){case dn:case Fc:return{byteLength:1,components:1};case zs:case Dc:case Pn:return{byteLength:2,components:1};case Aa:case Ra:return{byteLength:2,components:4};case Rn:case Ea:case Cn:return{byteLength:4,components:1};case Nc:case Uc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nd(){let i=null,t=!1,e=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function v0(i){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,l,c){let u=l.array,f=l.updateRanges;if(i.bindBuffer(c,a),f.length===0)i.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,f[h]=x)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var _0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
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
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,T0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E0=`#ifdef USE_AOMAP
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
#endif`,A0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,R0=`#ifdef USE_BATCHING
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
#endif`,C0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,P0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,F0=`#ifdef USE_IRIDESCENCE
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
#endif`,D0=`#ifdef USE_BUMPMAP
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
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,G0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,H0=`#define PI 3.141592653589793
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
} // validated`,W0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,X0=`vec3 transformedNormal = objectNormal;
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
#endif`,q0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J0="gl_FragColor = linearToOutputTexel( gl_FragColor );",K0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Q0=`#ifdef USE_ENVMAP
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
#endif`,j0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,og=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ag=`#ifdef USE_GRADIENTMAP
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
}`,lg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ug=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,fg=`#ifdef USE_ENVMAP
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
#endif`,dg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,bg=`uniform sampler2D dfgLUT;
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
}`,vg=`
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
#endif`,_g=`#if defined( RE_IndirectDiffuse )
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Eg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ug=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hg=`#ifdef USE_NORMALMAP
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
#endif`,Wg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$g=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ex=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ix=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rx=`float getShadowMask() {
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
}`,ox=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ax=`#ifdef USE_SKINNING
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
#endif`,lx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cx=`#ifdef USE_SKINNING
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
#endif`,ux=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,px=`#ifdef USE_TRANSMISSION
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
#endif`,mx=`#ifdef USE_TRANSMISSION
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
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_x=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yx=`uniform sampler2D t2D;
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
}`,Mx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`#include <common>
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
}`,Ax=`#if DEPTH_PACKING == 3200
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
}`,Rx=`#define DISTANCE
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
}`,Cx=`#define DISTANCE
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
}`,Px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ix=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lx=`uniform float scale;
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
}`,Fx=`uniform vec3 diffuse;
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
}`,Dx=`#include <common>
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
}`,Nx=`uniform vec3 diffuse;
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
}`,Ux=`#define LAMBERT
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
}`,Ox=`#define LAMBERT
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
}`,Bx=`#define MATCAP
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
}`,zx=`#define MATCAP
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
}`,kx=`#define NORMAL
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
}`,Vx=`#define NORMAL
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
}`,Gx=`#define PHONG
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
}`,Hx=`#define PHONG
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
}`,Wx=`#define STANDARD
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
}`,Xx=`#define STANDARD
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
}`,qx=`#define TOON
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
}`,Yx=`#define TOON
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
}`,$x=`uniform float size;
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#include <common>
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
}`,Kx=`uniform vec3 color;
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
}`,Qx=`uniform float rotation;
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
}`,jx=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:_0,alphahash_pars_fragment:y0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:w0,alphatest_pars_fragment:T0,aomap_fragment:E0,aomap_pars_fragment:A0,batching_pars_vertex:R0,batching_vertex:C0,begin_vertex:P0,beginnormal_vertex:I0,bsdfs:L0,iridescence_fragment:F0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:B0,color_fragment:z0,color_pars_fragment:k0,color_pars_vertex:V0,color_vertex:G0,common:H0,cube_uv_reflection_fragment:W0,defaultnormal_vertex:X0,displacementmap_pars_vertex:q0,displacementmap_vertex:Y0,emissivemap_fragment:$0,emissivemap_pars_fragment:Z0,colorspace_fragment:J0,colorspace_pars_fragment:K0,envmap_fragment:Q0,envmap_common_pars_fragment:j0,envmap_pars_fragment:tg,envmap_pars_vertex:eg,envmap_physical_pars_fragment:fg,envmap_vertex:ng,fog_vertex:ig,fog_pars_vertex:sg,fog_fragment:rg,fog_pars_fragment:og,gradientmap_pars_fragment:ag,lightmap_pars_fragment:lg,lights_lambert_fragment:cg,lights_lambert_pars_fragment:ug,lights_pars_begin:hg,lights_toon_fragment:dg,lights_toon_pars_fragment:pg,lights_phong_fragment:mg,lights_phong_pars_fragment:gg,lights_physical_fragment:xg,lights_physical_pars_fragment:bg,lights_fragment_begin:vg,lights_fragment_maps:_g,lights_fragment_end:yg,lightprobes_pars_fragment:Mg,logdepthbuf_fragment:Sg,logdepthbuf_pars_fragment:wg,logdepthbuf_pars_vertex:Tg,logdepthbuf_vertex:Eg,map_fragment:Ag,map_pars_fragment:Rg,map_particle_fragment:Cg,map_particle_pars_fragment:Pg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Fg,morphcolor_vertex:Dg,morphnormal_vertex:Ng,morphtarget_pars_vertex:Ug,morphtarget_vertex:Og,normal_fragment_begin:Bg,normal_fragment_maps:zg,normal_pars_fragment:kg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Hg,clearcoat_normal_fragment_begin:Wg,clearcoat_normal_fragment_maps:Xg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:Yg,opaque_fragment:$g,packing:Zg,premultiplied_alpha_fragment:Jg,project_vertex:Kg,dithering_fragment:Qg,dithering_pars_fragment:jg,roughnessmap_fragment:tx,roughnessmap_pars_fragment:ex,shadowmap_pars_fragment:nx,shadowmap_pars_vertex:ix,shadowmap_vertex:sx,shadowmask_pars_fragment:rx,skinbase_vertex:ox,skinning_pars_vertex:ax,skinning_vertex:lx,skinnormal_vertex:cx,specularmap_fragment:ux,specularmap_pars_fragment:hx,tonemapping_fragment:fx,tonemapping_pars_fragment:dx,transmission_fragment:px,transmission_pars_fragment:mx,uv_pars_fragment:gx,uv_pars_vertex:xx,uv_vertex:bx,worldpos_vertex:vx,background_vert:_x,background_frag:yx,backgroundCube_vert:Mx,backgroundCube_frag:Sx,cube_vert:wx,cube_frag:Tx,depth_vert:Ex,depth_frag:Ax,distance_vert:Rx,distance_frag:Cx,equirect_vert:Px,equirect_frag:Ix,linedashed_vert:Lx,linedashed_frag:Fx,meshbasic_vert:Dx,meshbasic_frag:Nx,meshlambert_vert:Ux,meshlambert_frag:Ox,meshmatcap_vert:Bx,meshmatcap_frag:zx,meshnormal_vert:kx,meshnormal_frag:Vx,meshphong_vert:Gx,meshphong_frag:Hx,meshphysical_vert:Wx,meshphysical_frag:Xx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:$x,points_frag:Zx,shadow_vert:Jx,shadow_frag:Kx,sprite_vert:Qx,sprite_frag:jx},_t={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Gt}},envmap:{envMap:{value:null},envMapRotation:{value:new Gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Gt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0},uvTransform:{value:new Gt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Gt},alphaMap:{value:null},alphaMapTransform:{value:new Gt},alphaTest:{value:0}}},Gn={basic:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new et(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:je([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:je([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:je([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new et(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:je([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:je([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:je([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:je([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:je([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Gt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:je([_t.common,_t.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:je([_t.lights,_t.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};Gn.physical={uniforms:je([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Gt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Gt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Gt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Gt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Gt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Gt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var ul={r:0,b:0,g:0},tb=new Se,id=new Gt;id.set(-1,0,0,0,1,0,0,0,1);function eb(i,t,e,n,s,r){let o=new et(0),a=s===!0?0:1,l,c,u=null,f=0,h=null;function d(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let _=v.backgroundBlurriness>0;y=t.get(y,_)}return y}function g(v){let y=!1,_=d(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,y){let _=d(y);_&&(_.isCubeTexture||_.mapping===Pr)?(c===void 0&&(c=new Vt(new Ns(1,1,1),new Qe({name:"BackgroundCubeMaterial",uniforms:Ki(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tb.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(id),c.material.toneMapped=ie.getTransfer(_.colorSpace)!==de,(u!==_||f!==_.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Vt(new xi(2,2),new Qe({name:"BackgroundMaterial",uniforms:Ki(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(_.colorSpace)!==de,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||f!==_.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,u=_,f=_.version,h=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(ul,Wc(i)),e.buffers.color.setClear(ul.r,ul.g,ul.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function nb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null),r=s,o=!1;function a(T,P,L,C,D){let N=!1,U=f(T,C,L,P);r!==U&&(r=U,c(r.object)),N=d(T,C,L,D),N&&g(T,C,L,D),D!==null&&t.update(D,i.ELEMENT_ARRAY_BUFFER),(N||o)&&(o=!1,_(T,P,L,C),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function l(){return i.createVertexArray()}function c(T){return i.bindVertexArray(T)}function u(T){return i.deleteVertexArray(T)}function f(T,P,L,C){let D=C.wireframe===!0,N=n[P.id];N===void 0&&(N={},n[P.id]=N);let U=T.isInstancedMesh===!0?T.id:0,k=N[U];k===void 0&&(k={},N[U]=k);let B=k[L.id];B===void 0&&(B={},k[L.id]=B);let z=B[D];return z===void 0&&(z=h(l()),B[D]=z),z}function h(T){let P=[],L=[],C=[];for(let D=0;D<e;D++)P[D]=0,L[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:C,object:T,attributes:{},index:null}}function d(T,P,L,C){let D=r.attributes,N=P.attributes,U=0,k=L.getAttributes();for(let B in k)if(k[B].location>=0){let V=D[B],tt=N[B];if(tt===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(tt=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(tt=T.instanceColor)),V===void 0||V.attribute!==tt||tt&&V.data!==tt.data)return!0;U++}return r.attributesNum!==U||r.index!==C}function g(T,P,L,C){let D={},N=P.attributes,U=0,k=L.getAttributes();for(let B in k)if(k[B].location>=0){let V=N[B];V===void 0&&(B==="instanceMatrix"&&T.instanceMatrix&&(V=T.instanceMatrix),B==="instanceColor"&&T.instanceColor&&(V=T.instanceColor));let tt={};tt.attribute=V,V&&V.data&&(tt.data=V.data),D[B]=tt,U++}r.attributes=D,r.attributesNum=U,r.index=C}function x(){let T=r.newAttributes;for(let P=0,L=T.length;P<L;P++)T[P]=0}function m(T){p(T,0)}function p(T,P){let L=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;L[T]=1,C[T]===0&&(i.enableVertexAttribArray(T),C[T]=1),D[T]!==P&&(i.vertexAttribDivisor(T,P),D[T]=P)}function v(){let T=r.newAttributes,P=r.enabledAttributes;for(let L=0,C=P.length;L<C;L++)P[L]!==T[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function y(T,P,L,C,D,N,U){U===!0?i.vertexAttribIPointer(T,P,L,D,N):i.vertexAttribPointer(T,P,L,C,D,N)}function _(T,P,L,C){x();let D=C.attributes,N=L.getAttributes(),U=P.defaultAttributeValues;for(let k in N){let B=N[k];if(B.location>=0){let z=D[k];if(z===void 0&&(k==="instanceMatrix"&&T.instanceMatrix&&(z=T.instanceMatrix),k==="instanceColor"&&T.instanceColor&&(z=T.instanceColor)),z!==void 0){let V=z.normalized,tt=z.itemSize,Z=t.get(z);if(Z===void 0)continue;let ct=Z.buffer,ut=Z.type,St=Z.bytesPerElement,q=ut===i.INT||ut===i.UNSIGNED_INT||z.gpuType===Ea;if(z.isInterleavedBufferAttribute){let Y=z.data,nt=Y.stride,ht=z.offset;if(Y.isInstancedInterleavedBuffer){for(let lt=0;lt<B.locationSize;lt++)p(B.location+lt,Y.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let lt=0;lt<B.locationSize;lt++)m(B.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let lt=0;lt<B.locationSize;lt++)y(B.location+lt,tt/B.locationSize,ut,V,nt*St,(ht+tt/B.locationSize*lt)*St,q)}else{if(z.isInstancedBufferAttribute){for(let Y=0;Y<B.locationSize;Y++)p(B.location+Y,z.meshPerAttribute);T.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Y=0;Y<B.locationSize;Y++)m(B.location+Y);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Y=0;Y<B.locationSize;Y++)y(B.location+Y,tt/B.locationSize,ut,V,tt*St,tt/B.locationSize*Y*St,q)}}else if(U!==void 0){let V=U[k];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(B.location,V);break;case 3:i.vertexAttrib3fv(B.location,V);break;case 4:i.vertexAttrib4fv(B.location,V);break;default:i.vertexAttrib1fv(B.location,V)}}}}v()}function M(){S();for(let T in n){let P=n[T];for(let L in P){let C=P[L];for(let D in C){let N=C[D];for(let U in N)u(N[U].object),delete N[U];delete C[D]}}delete n[T]}}function w(T){if(n[T.id]===void 0)return;let P=n[T.id];for(let L in P){let C=P[L];for(let D in C){let N=C[D];for(let U in N)u(N[U].object),delete N[U];delete C[D]}}delete n[T.id]}function A(T){for(let P in n){let L=n[P];for(let C in L){let D=L[C];if(D[T.id]===void 0)continue;let N=D[T.id];for(let U in N)u(N[U].object),delete N[U];delete D[T.id]}}}function b(T){for(let P in n){let L=n[P],C=T.isInstancedMesh===!0?T.id:0,D=L[C];if(D!==void 0){for(let N in D){let U=D[N];for(let k in U)u(U[k].object),delete U[k];delete D[N]}delete L[C],Object.keys(L).length===0&&delete n[P]}}}function S(){R(),o=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:S,resetDefaultState:R,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function ib(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];e.update(h,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function sb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let b=A===Pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==dn&&A!==Cn&&!b&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Ot("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Ot("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:M,samples:w}}function rb(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Tn,a=new Gt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||n!==0||s;return s=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let v=r?0:n,y=v*4,_=p.clippingState||null;l.value=_,_=u(g,h,y,d);for(let M=0;M!==y;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(f[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Gs=4,ob=6,ab=20,lb=256,zr=new zn,Nf=new et,jc=null,tu=0,eu=0,nu=!1,cb=new G,Qi=new G,fl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=cb}=r;jc=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Of(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(jc,tu,eu),this._renderer.xr.enabled=nu,t.scissorTest=!1,Vs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Si||t.mapping===Ji?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),jc=this._renderer.getRenderTarget(),tu=this._renderer.getActiveCubeFace(),eu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ge,minFilter:Ge,generateMipmaps:!1,type:Pn,format:bn,colorSpace:cr,depthBuffer:!1},s=Uf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Uf(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ub(r)),this._blurMaterial=fb(r,t,e),this._ggxMaterial=hb(r,t,e)}return s}_compileMaterial(t){let e=new Vt(new qt,t);this._renderer.compile(e,zr)}_sceneToCubeUV(t,e,n,s,r){let l=new $e(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Nf),f.toneMapping=An,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Ns,new le({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Nf),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[y],r.y,r.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[y]));let M=this._cubeSize;Vs(s,_*M,y>2?M:0,M,M),f.setRenderTarget(s),p&&f.render(x,l),f.render(t,l)}f.toneMapping=d,f.autoClear=h,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Si||t.mapping===Ji;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Of());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Vs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,zr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Gs?n-g+Gs:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Vs(r,m,p,3*x,2*x),s.setRenderTarget(r),s.render(a,zr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,Vs(t,m,p,3*x,2*x),s.setRenderTarget(t),s.render(a,zr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,o),this._blurPass(r,t,n,n,o)}_blurPass(t,e,n,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Gs?s-this._lodMax+Gs:0),h=4*(this._cubeSize-u);Vs(e,f,h,3*u,2*u),o.setRenderTarget(e),o.render(l,zr)}};function ub(i){let t=[],e=[],n=i,s=i-Gs+1+ob;for(let r=0;r<s;r++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),x=new Float32Array(d*h*f);for(let p=0;p<f;p++){let v=p%3*2/3-1,y=p>2?0:-1,_=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];g.set(_,d*h*p);for(let M=0;M<h;M++){let w=u[M*2]*2-1,A=u[M*2+1]*2-1;p===0?Qi.set(1,A,w):p===1?Qi.set(-w,1,-A):p===2?Qi.set(-w,A,1):p===3?Qi.set(-1,A,-w):p===4?Qi.set(-w,-1,A):Qi.set(w,A,-1),Qi.toArray(x,(p*h+M)*d)}}let m=new qt;m.setAttribute("position",new xn(g,d)),m.setAttribute("outputDirection",new xn(x,d)),e.push(new Vt(m,null)),n>Gs&&n--}return{lodMeshes:e,sizeLods:t}}function Uf(i,t,e){let n=new Ke(i,t,e);return n.texture.mapping=Pr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function hb(i,t,e){return new Qe({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function fb(i,t,e){return new Qe({name:"SphericalGaussianBlur",defines:{SAMPLES:ab,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Of(){return new Qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Bf(){return new Qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dl=class extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new gr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ns(5,5,5),r=new Qe({name:"CubemapFromEquirect",uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:kn});r.uniforms.tEquirect.value=e;let o=new Vt(s,r),a=e.minFilter;return e.minFilter===wi&&(e.minFilter=Ge),new _a(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}};function db(i){let t=new WeakMap,e=new WeakMap,n=null;function s(h,d=!1){return h==null?null:d?o(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Sa||d===wa)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let x=new dl(g.height);return x.fromEquirectangularTexture(i,h),t.set(h,x),h.addEventListener("dispose",c),a(x.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Sa||d===wa,x=d===Si||d===Ji;if(g||x){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new fl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let v=h.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new fl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function a(h,d){return d===Sa?h.mapping=Si:d===wa&&(h.mapping=Ji),h}function l(h){let d=0,g=6;for(let x=0;x<g;x++)h[x]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function pb(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hi("WebGLRenderer: "+n+" extension not supported."),s}}}function mb(i,t,e,n){let s={},r=new WeakMap;function o(f){let h=f.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete s[h.id];let d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return s[h.id]===!0||(h.addEventListener("dispose",o),s[h.id]=!0,e.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let M=v[y+0],w=v[y+1],A=v[y+2];h.push(M,w,w,A,A,M)}}else{let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let M=y+0,w=y+1,A=y+2;h.push(M,w,w,A,A,M)}}let m=new(g.count>=65535?Xi:pr)(h,1);m.version=x;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function gb(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,h){i.drawElements(n,h,r,f*o),e.update(h,n,1)}function c(f,h,d){d!==0&&(i.drawElementsInstanced(n,h,r,f*o,d),e.update(h,n,d))}function u(f,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,r,f,0,d);let x=0;for(let m=0;m<d;m++)x+=h[m];e.update(x,n,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function xb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function bb(i,t,e){let n=new WeakMap,s=new Ee;function r(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0,h=n.get(a);if(h===void 0||h.count!==f){let S=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",S)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*M*4*f),A=new fr(w,_,M,f);A.type=Cn,A.needsUpdate=!0;let b=y*4;for(let R=0;R<f;R++){let T=m[R],P=p[R],L=v[R],C=_*M*4*R;for(let D=0;D<T.count;D++){let N=D*b;d===!0&&(s.fromBufferAttribute(T,D),w[C+N+0]=s.x,w[C+N+1]=s.y,w[C+N+2]=s.z,w[C+N+3]=0),g===!0&&(s.fromBufferAttribute(P,D),w[C+N+4]=s.x,w[C+N+5]=s.y,w[C+N+6]=s.z,w[C+N+7]=0),x===!0&&(s.fromBufferAttribute(L,D),w[C+N+8]=s.x,w[C+N+9]=s.y,w[C+N+10]=s.z,w[C+N+11]=L.itemSize===4?s.w:1)}}h={count:f,texture:A,size:new jt(_,M)},n.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function vb(i,t,e,n,s){let r=new WeakMap;function o(c){let u=s.render.frame,f=c.geometry,h=t.get(c,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function a(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:o,dispose:a}}var _b={[Tc]:"LINEAR_TONE_MAPPING",[Ec]:"REINHARD_TONE_MAPPING",[Ac]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[Pc]:"AGX_TONE_MAPPING",[Ic]:"NEUTRAL_TONE_MAPPING",[Cc]:"CUSTOM_TONE_MAPPING"};function yb(i,t,e,n,s,r){let o=new Ke(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new qt;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let u=new aa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Vt(c,u),h=new zn(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],y=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let w=0;w<v.length;w++){let A=v[w];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){v=_,y=v.length>0&&v[0].isRenderPass===!0;let M=o.width,w=o.height;v.length>0&&a===null&&(a=new Ke(M,w,{type:Pn,depthBuffer:!1,stencilBuffer:!1}),l=new Ke(M,w,{type:Pn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let b=v[A];b.setSize&&b.setSize(M,w)}},this.begin=function(_,M){if(x||_.toneMapping===An&&v.length===0)return!1;if(p=M,M!==null){let w=M.width,A=M.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return y===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=An,!0},this.hasRenderPass=function(){return y},this.end=function(_,M){_.toneMapping=m,x=!0;let w=o,A=a;for(let b=0;b<v.length;b++){let S=v[b];S.enabled!==!1&&(S.render(_,A,w,M),S.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,u.defines={},ie.getTransfer(d)===de&&(u.defines.SRGB_TRANSFER="");let b=_b[g];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(f,h),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var sd=new Je,ru=new gi(1,1),rd=new fr,od=new ea,ad=new gr,zf=[],kf=[],Vf=new Float32Array(16),Gf=new Float32Array(9),Hf=new Float32Array(4);function Ws(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zf[s];if(r===void 0&&(r=new Float32Array(s),zf[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ml(i,t){let e=kf[t];e===void 0&&(e=new Int32Array(t),kf[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Mb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Sb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function wb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Tb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Eb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Hf.set(n),i.uniformMatrix2fv(this.addr,!1,Hf),Ue(e,n)}}function Ab(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Gf.set(n),i.uniformMatrix3fv(this.addr,!1,Gf),Ue(e,n)}}function Rb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ne(e,n))return;Vf.set(n),i.uniformMatrix4fv(this.addr,!1,Vf),Ue(e,n)}}function Cb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Pb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Ib(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Lb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function Fb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Db(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Nb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Ub(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function Ob(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ru.compareFunction=e.isReversedDepthBuffer()?cl:ll,r=ru):r=sd,e.setTexture2D(t||r,s)}function Bb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||od,s)}function zb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ad,s)}function kb(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||rd,s)}function Vb(i){switch(i){case 5126:return Mb;case 35664:return Sb;case 35665:return wb;case 35666:return Tb;case 35674:return Eb;case 35675:return Ab;case 35676:return Rb;case 5124:case 35670:return Cb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Lb;case 5125:return Fb;case 36294:return Db;case 36295:return Nb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return kb}}function Gb(i,t){i.uniform1fv(this.addr,t)}function Hb(i,t){let e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function Wb(i,t){let e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function Xb(i,t){let e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function qb(i,t){let e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Yb(i,t){let e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function $b(i,t){let e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Zb(i,t){i.uniform1iv(this.addr,t)}function Jb(i,t){i.uniform2iv(this.addr,t)}function Kb(i,t){i.uniform3iv(this.addr,t)}function Qb(i,t){i.uniform4iv(this.addr,t)}function jb(i,t){i.uniform1uiv(this.addr,t)}function tv(i,t){i.uniform2uiv(this.addr,t)}function ev(i,t){i.uniform3uiv(this.addr,t)}function nv(i,t){i.uniform4uiv(this.addr,t)}function iv(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=ru:o=sd;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function sv(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||od,r[o])}function rv(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||ad,r[o])}function ov(i,t,e){let n=this.cache,s=t.length,r=ml(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||rd,r[o])}function av(i){switch(i){case 5126:return Gb;case 35664:return Hb;case 35665:return Wb;case 35666:return Xb;case 35674:return qb;case 35675:return Yb;case 35676:return $b;case 5124:case 35670:return Zb;case 35667:case 35671:return Jb;case 35668:case 35672:return Kb;case 35669:case 35673:return Qb;case 5125:return jb;case 36294:return tv;case 36295:return ev;case 36296:return nv;case 35678:case 36198:case 36298:case 36306:case 35682:return iv;case 35679:case 36299:case 36307:return sv;case 35680:case 36300:case 36308:case 36293:return rv;case 36289:case 36303:case 36311:case 36292:return ov}}var ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Vb(e.type)}},au=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=av(e.type)}},lu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},iu=/(\w+)(\])?(\[|\.)?/g;function Wf(i,t){i.seq.push(t),i.map[t.id]=t}function lv(i,t,e){let n=i.name,s=n.length;for(iu.lastIndex=0;;){let r=iu.exec(n),o=iu.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Wf(e,c===void 0?new ou(a,i,t):new au(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new lu(a),Wf(e,f)),e=f}}}var Hs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);lv(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Xf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var cv=37297,uv=0;function hv(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var qf=new Gt;function fv(i){ie._getMatrix(qf,ie.workingColorSpace,i);let t=`mat3( ${qf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case ur:return[t,"LinearTransferOETF"];case de:return[t,"sRGBTransferOETF"];default:return Ot("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+hv(i.getShaderSource(t),a)}else return r}function dv(i,t){let e=fv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var pv={[Tc]:"Linear",[Ec]:"Reinhard",[Ac]:"Cineon",[Rc]:"ACESFilmic",[Pc]:"AgX",[Ic]:"Neutral",[Cc]:"Custom"};function mv(i,t){let e=pv[t];return e===void 0?(Ot("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var hl=new G;function gv(){ie.getLuminanceCoefficients(hl);let i=hl.x.toFixed(4),t=hl.y.toFixed(4),e=hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vr).join(`
`)}function bv(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function vv(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Vr(i){return i!==""}function $f(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var _v=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(i){return i.replace(_v,Mv)}var yv=new Map;function Mv(i,t){let e=Kt[t];if(e===void 0){let n=yv.get(t);if(n!==void 0)e=Kt[n],Ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return cu(e)}var Sv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jf(i){return i.replace(Sv,wv)}function wv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kf(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Tv={[Rr]:"SHADOWMAP_TYPE_PCF",[Bs]:"SHADOWMAP_TYPE_VSM"};function Ev(i){return Tv[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Av={[Si]:"ENVMAP_TYPE_CUBE",[Ji]:"ENVMAP_TYPE_CUBE",[Pr]:"ENVMAP_TYPE_CUBE_UV"};function Rv(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Av[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Cv={[Ji]:"ENVMAP_MODE_REFRACTION"};function Pv(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Cv[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Iv={[wc]:"ENVMAP_BLENDING_MULTIPLY",[uf]:"ENVMAP_BLENDING_MIX",[hf]:"ENVMAP_BLENDING_ADD"};function Lv(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Iv[i.combine]||"ENVMAP_BLENDING_NONE"}function Fv(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Dv(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ev(e),c=Rv(e),u=Pv(e),f=Lv(e),h=Fv(e),d=xv(e),g=bv(r),x=s.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vr).join(`
`),p.length>0&&(p+=`
`)):(m=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vr).join(`
`),p=[Kf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Kt.tonemapping_pars_fragment:"",e.toneMapping!==An?mv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),gv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vr).join(`
`)),o=cu(o),o=$f(o,e),o=Zf(o,e),a=cu(a),a=$f(a,e),a=Zf(a,e),o=Jf(o),a=Jf(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Gc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,M=Xf(s,s.VERTEX_SHADER,y),w=Xf(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,w),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(T){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",L=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(w)||"",D=P.trim(),N=L.trim(),U=C.trim(),k=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,w);else{let z=Yf(s,M,"vertex"),V=Yf(s,w,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+D+`
`+z+`
`+V)}else D!==""?Ot("WebGLProgram: Program Info Log:",D):(N===""||U==="")&&(B=!1);B&&(T.diagnostics={runnable:k,programLog:D,vertexShader:{log:N,prefix:m},fragmentShader:{log:U,prefix:p}})}s.deleteShader(M),s.deleteShader(w),b=new Hs(s,x),S=vv(s,x)}let b;this.getUniforms=function(){return b===void 0&&A(this),b};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(x,cv)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=uv++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var Nv=0,uu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hu(t),e.set(t,n)),n}},hu=class{constructor(t){this.id=Nv++,this.code=t,this.usedTimes=0}};function Uv(i){return i===Ei||i===Ur||i===Or}function Ov(i,t,e,n,s,r){let o=new Ls,a=new uu,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,R,T,P,L){let C=T.fog,D=P.geometry,N=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?T.environment:null,U=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,k=t.get(b.envMap||N,U),B=k&&k.mapping===Pr?k.image.height:null,z=d[b.type];b.precision!==null&&(h=n.getMaxPrecision(b.precision),h!==b.precision&&Ot("WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));let V=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,tt=V!==void 0?V.length:0,Z=0;D.morphAttributes.position!==void 0&&(Z=1),D.morphAttributes.normal!==void 0&&(Z=2),D.morphAttributes.color!==void 0&&(Z=3);let ct,ut,St,q;if(z){let be=Gn[z];ct=be.vertexShader,ut=be.fragmentShader}else{ct=b.vertexShader,ut=b.fragmentShader;let be=a.getVertexShaderStage(b),he=a.getFragmentShaderStage(b);a.update(b,be,he),St=be.id,q=he.id}let Y=i.getRenderTarget(),nt=i.state.buffers.depth.getReversed(),ht=P.isInstancedMesh===!0,lt=P.isBatchedMesh===!0,Dt=!!b.map,Ht=!!b.matcap,It=!!k,Yt=!!b.aoMap,ne=!!b.lightMap,Xt=!!b.bumpMap&&b.wireframe===!1,Me=!!b.normalMap,Be=!!b.displacementMap,rn=!!b.emissiveMap,we=!!b.metalnessMap,Le=!!b.roughnessMap,X=b.anisotropy>0,We=b.clearcoat>0,pe=b.dispersion>0,O=b.retroreflectivity>0,E=b.iridescence>0,$=b.sheen>0,Q=b.transmission>0,it=X&&!!b.anisotropyMap,dt=We&&!!b.clearcoatMap,pt=We&&!!b.clearcoatNormalMap,st=We&&!!b.clearcoatRoughnessMap,ot=E&&!!b.iridescenceMap,mt=E&&!!b.iridescenceThicknessMap,Lt=$&&!!b.sheenColorMap,vt=$&&!!b.sheenRoughnessMap,gt=!!b.specularMap,Ft=!!b.specularColorMap,Ut=!!b.specularIntensityMap,$t=Q&&!!b.transmissionMap,W=Q&&!!b.thicknessMap,xt=!!b.gradientMap,rt=!!b.alphaMap,bt=b.alphaTest>0,wt=!!b.alphaHash,at=!!b.extensions,Nt=An;b.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let Ct={shaderID:z,shaderType:b.type,shaderName:b.name,vertexShader:ct,fragmentShader:ut,defines:b.defines,customVertexShaderID:St,customFragmentShaderID:q,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:lt,batchingColor:lt&&P._colorsTexture!==null,instancing:ht,instancingColor:ht&&P.instanceColor!==null,instancingMorph:ht&&P.morphTexture!==null,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:Dt,matcap:Ht,envMap:It,envMapMode:It&&k.mapping,envMapCubeUVHeight:B,aoMap:Yt,lightMap:ne,bumpMap:Xt,normalMap:Me,displacementMap:Be,emissiveMap:rn,normalMapObjectSpace:Me&&b.normalMapType===pf,normalMapTangentSpace:Me&&b.normalMapType===kc,packedNormalMap:Me&&b.normalMapType===kc&&Uv(b.normalMap.format),metalnessMap:we,roughnessMap:Le,anisotropy:X,anisotropyMap:it,clearcoat:We,clearcoatMap:dt,clearcoatNormalMap:pt,clearcoatRoughnessMap:st,dispersion:pe,retroreflection:O,iridescence:E,iridescenceMap:ot,iridescenceThicknessMap:mt,sheen:$,sheenColorMap:Lt,sheenRoughnessMap:vt,specularMap:gt,specularColorMap:Ft,specularIntensityMap:Ut,transmission:Q,transmissionMap:$t,thicknessMap:W,gradientMap:xt,opaque:b.transparent===!1&&b.blending===Mi&&b.alphaToCoverage===!1,alphaMap:rt,alphaTest:bt,alphaHash:wt,combine:b.combine,mapUv:Dt&&g(b.map.channel),aoMapUv:Yt&&g(b.aoMap.channel),lightMapUv:ne&&g(b.lightMap.channel),bumpMapUv:Xt&&g(b.bumpMap.channel),normalMapUv:Me&&g(b.normalMap.channel),displacementMapUv:Be&&g(b.displacementMap.channel),emissiveMapUv:rn&&g(b.emissiveMap.channel),metalnessMapUv:we&&g(b.metalnessMap.channel),roughnessMapUv:Le&&g(b.roughnessMap.channel),anisotropyMapUv:it&&g(b.anisotropyMap.channel),clearcoatMapUv:dt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(b.sheenRoughnessMap.channel),specularMapUv:gt&&g(b.specularMap.channel),specularColorMapUv:Ft&&g(b.specularColorMap.channel),specularIntensityMapUv:Ut&&g(b.specularIntensityMap.channel),transmissionMapUv:$t&&g(b.transmissionMap.channel),thicknessMapUv:W&&g(b.thicknessMap.channel),alphaMapUv:rt&&g(b.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(Me||X),vertexNormals:!!D.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(Dt||rt),fog:!!C,useFog:b.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||D.attributes.normal===void 0&&Me===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:nt,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Z,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Dt&&b.map.isVideoTexture===!0&&ie.getTransfer(b.map.colorSpace)===de,decodeVideoTextureEmissive:rn&&b.emissiveMap.isVideoTexture===!0&&ie.getTransfer(b.emissiveMap.colorSpace)===de,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===xe,flipSided:b.side===sn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:at&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&b.extensions.multiDraw===!0||lt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ct.vertexUv1s=l.has(1),Ct.vertexUv2s=l.has(2),Ct.vertexUv3s=l.has(3),l.clear(),Ct}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let R in b.defines)S.push(R),S.push(b.defines[R]);return b.isRawShaderMaterial===!1&&(p(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function p(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let S=d[b.type],R;if(S){let T=Gn[S];R=Lf.clone(T.uniforms)}else R=b.uniforms;return R}function _(b,S){let R=u.get(S);return R!==void 0?++R.usedTimes:(R=new Dv(i,S,b,s),c.push(R),u.set(S,R)),R}function M(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function A(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:_,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function Bv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function zv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Qf(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function jf(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:x,renderOrder:h.renderOrder,z:m,group:p},i[t]=v):(v.id=h.id,v.object=h,v.geometry=d,v.material=g,v.materialVariant=o(h),v.groupOrder=x,v.renderOrder=h.renderOrder,v.z=m,v.group=p),t++,v}function l(h,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let y=a(h,d,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?s.push(y):e.push(y)}function c(h,d,g,x,m,p){let v=a(h,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):e.unshift(v)}function u(h,d){e.length>1&&e.sort(h||zv),n.length>1&&n.sort(d||Qf),s.length>1&&s.sort(d||Qf)}function f(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function kv(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new jf,i.set(n,[o])):s>=r.length?(o=new jf,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new G,color:new et};break;case"SpotLight":e={position:new G,direction:new G,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new G,color:new et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new G,skyColor:new et,groundColor:new et};break;case"RectAreaLight":e={color:new et,position:new G,halfWidth:new G,halfHeight:new G};break}return i[t.id]=e,e}}}function Gv(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Hv=0;function Wv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Xv(i){let t=new Vv,e=Gv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);let s=new G,r=new Se,o=new Se;function a(c){let u=0,f=0,h=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,M=0,w=0,A=0,b=0,S=0,R=0;c.sort(Wv);for(let P=0,L=c.length;P<L;P++){let C=c[P],D=C.color,N=C.intensity,U=C.distance,k=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ei?k=C.shadow.map.texture:k=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=D.r*N,f+=D.g*N,h+=D.b*N;else if(C.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(C.sh.coefficients[B],N);R++}else if(C.isSunLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,V=e.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=k;let tt=z.getViewportCount();for(let Z=0;Z<tt;Z++)n.sunShadowMatrix[x+Z]=z.getMatrix(Z),n.sunShadowCascade[x+Z]=z._cascadeData[Z];x+=tt,g++}n.sun[d]=B,d++}else if(C.isDirectionalLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,V=e.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=C.shadow.matrix,M++}n.directional[m]=B,m++}else if(C.isSpotLight){let B=t.get(C);B.position.setFromMatrixPosition(C.matrixWorld),B.color.copy(D).multiplyScalar(N),B.distance=U,B.coneCos=Math.cos(C.angle),B.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),B.decay=C.decay,n.spot[v]=B;let z=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,z.updateMatrices(C),C.castShadow&&S++),n.spotLightMatrix[v]=z.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,n.spotShadow[v]=V,n.spotShadowMap[v]=k,A++}v++}else if(C.isRectAreaLight){let B=t.get(C);B.color.copy(D).multiplyScalar(N),B.halfWidth.set(C.width*.5,0,0),B.halfHeight.set(0,C.height*.5,0),n.rectArea[y]=B,y++}else if(C.isPointLight){let B=t.get(C);if(B.color.copy(C.color).multiplyScalar(C.intensity),B.distance=C.distance,B.decay=C.decay,C.castShadow){let z=C.shadow,V=e.get(C);V.shadowIntensity=z.intensity,V.shadowBias=z.bias,V.shadowNormalBias=z.normalBias,V.shadowRadius=z.radius,V.shadowMapSize=z.mapSize,V.shadowCameraNear=z.camera.near,V.shadowCameraFar=z.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=k,n.pointShadowMatrix[p]=C.shadow.matrix,w++}n.point[p]=B,p++}else if(C.isHemisphereLight){let B=t.get(C);B.skyColor.copy(C.color).multiplyScalar(N),B.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[_]=B,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;let T=n.hash;(T.sunLength!==d||T.directionalLength!==m||T.pointLength!==p||T.spotLength!==v||T.rectAreaLength!==y||T.hemiLength!==_||T.numSunShadows!==g||T.numDirectionalShadows!==M||T.numPointShadows!==w||T.numSpotShadows!==A||T.numSpotMaps!==b||T.numLightProbes!==R)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=R,T.sunLength=d,T.directionalLength=m,T.pointLength=p,T.spotLength=v,T.rectAreaLength=y,T.hemiLength=_,T.numSunShadows=g,T.numDirectionalShadows=M,T.numPointShadows=w,T.numSpotShadows=A,T.numSpotMaps=b,T.numLightProbes=R,n.version=Hv++)}function l(c,u){let f=0,h=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let _=c[v];if(_.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),f++}else if(_.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),h++}else if(_.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(_.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function td(i){let t=new Xv(i),e=[],n=[],s=[];function r(h){f.camera=h,e.length=0,n.length=0,s.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){s.push(h)}function c(){t.setup(e)}function u(h){t.setupView(e,h)}let f={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function qv(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new td(i),t.set(s,[a])):r>=o.length?(a=new td(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$v=`uniform sampler2D shadow_pass;
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
}`,Zv=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Jv=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],ed=new Se,kr=new G,su=new G;function Kv(i,t,e){let n=new mr,s=new jt,r=new jt,o=new Ee,a=new la,l=new ca,c={},u=e.maxTextureSize,f={[yi]:sn,[sn]:yi,[xe]:xe},h=new Qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:Yv,fragmentShader:$v}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new qt;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rr;let p=this.type;this.render=function(w,A,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Wh&&(Ot("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Rr);let S=i.getRenderTarget(),R=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),P=i.state;P.setBlending(kn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=p!==this.type;L&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=w.length;C<D;C++){let N=w[C],U=N.shadow;if(U===void 0){Ot("WebGLShadowMap:",N,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;s.copy(U.mapSize);let k=U.getFrameExtents();s.multiply(k),r.copy(U.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,U.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,U.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(U.camera._reversedDepth=B,U.map===null||L===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===Bs){if(N.isPointLight){Ot("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new Ke(s.x,s.y,{format:Ei,type:Pn,minFilter:Ge,magFilter:Ge,generateMipmaps:!1}),U.map.texture.name=N.name+".shadowMap",U.map.depthTexture=new gi(s.x,s.y,Cn),U.map.depthTexture.name=N.name+".shadowMapDepth",U.map.depthTexture.format=Un,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ke,U.map.depthTexture.magFilter=ke}else N.isPointLight?(U.map=new dl(s.x),U.map.depthTexture=new oa(s.x,Rn)):(U.map=new Ke(s.x,s.y),U.map.depthTexture=new gi(s.x,s.y,Rn)),U.map.depthTexture.name=N.name+".shadowMap",U.map.depthTexture.format=Un,this.type===Rr?(U.map.depthTexture.compareFunction=B?cl:ll,U.map.depthTexture.minFilter=Ge,U.map.depthTexture.magFilter=Ge):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=ke,U.map.depthTexture.magFilter=ke);U.camera.updateProjectionMatrix()}U.map.isWebGLCubeRenderTarget!==!0&&(U.map.width!==s.x||U.map.height!==s.y)&&U.map.setSize(s.x,s.y);let z=U.map.isWebGLCubeRenderTarget?6:U.getViewportCount();N.isPointLight!==!0&&U.updateMatrices(N,b);for(let V=0;V<z;V++){let tt=U.getCamera(V);if(N.isPointLight){let Z=U.camera,ct=U.matrix,ut=N.distance||Z.far;ut!==Z.far&&(Z.far=ut,Z.updateProjectionMatrix()),kr.setFromMatrixPosition(N.matrixWorld),Z.position.copy(kr),su.copy(Z.position),su.add(Zv[V]),Z.up.copy(Jv[V]),Z.lookAt(su),Z.updateMatrixWorld(),ct.makeTranslation(-kr.x,-kr.y,-kr.z),ed.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),U._frustum.setFromProjectionMatrix(ed,Z.coordinateSystem,Z.reversedDepth)}if(U.map.isWebGLCubeRenderTarget)i.setRenderTarget(U.map,V),i.clear();else{V===0&&(i.setRenderTarget(U.map),i.clear());let Z=U.getViewport(V);o.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),P.viewport(o)}n=U.getFrustum(V),_(A,b,tt,N,this.type)}U.isPointLightShadow!==!0&&this.type===Bs&&v(U,b),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,R,T)};function v(w,A){let b=t.update(x);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ke(s.x,s.y,{format:Ei,type:Pn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,b,h,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,b,d,x,null)}function y(w,A,b,S){let R=null,T=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)R=T;else if(R=b.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let P=R.uuid,L=A.uuid,C=c[P];C===void 0&&(C={},c[P]=C);let D=C[L];D===void 0&&(D=R.clone(),C[L]=D,A.addEventListener("dispose",M)),R=D}if(R.visible=A.visible,R.wireframe=A.wireframe,S===Bs?R.side=A.shadowSide!==null?A.shadowSide:A.side:R.side=A.shadowSide!==null?A.shadowSide:f[A.side],R.alphaMap=A.alphaMap,R.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,R.map=A.map,R.clipShadows=A.clipShadows,R.clippingPlanes=A.clippingPlanes,R.clipIntersection=A.clipIntersection,R.displacementMap=A.displacementMap,R.displacementScale=A.displacementScale,R.displacementBias=A.displacementBias,R.wireframeLinewidth=A.wireframeLinewidth,R.linewidth=A.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let P=i.properties.get(R);P.light=b}return R}function _(w,A,b,S,R){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&R===Bs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=t.update(w),C=w.material;if(Array.isArray(C)){let D=L.groups;for(let N=0,U=D.length;N<U;N++){let k=D[N],B=C[k.materialIndex];if(B&&B.visible){let z=y(w,B,S,R);w.onBeforeShadow(i,w,A,b,L,z,k),i.renderBufferDirect(b,null,L,z,w,k),w.onAfterShadow(i,w,A,b,L,z,k)}}}else if(C.visible){let D=y(w,C,S,R);w.onBeforeShadow(i,w,A,b,L,D,null),i.renderBufferDirect(b,null,L,D,w,null),w.onAfterShadow(i,w,A,b,L,D,null)}}let P=w.children;for(let L=0,C=P.length;L<C;L++)_(P[L],A,b,S,R)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let S=c[b],R=w.target.uuid;R in S&&(S[R].dispose(),delete S[R])}}}function Qv(i,t){function e(){let W=!1,xt=new Ee,rt=null,bt=new Ee(0,0,0,0);return{setMask:function(wt){rt!==wt&&!W&&(i.colorMask(wt,wt,wt,wt),rt=wt)},setLocked:function(wt){W=wt},setClear:function(wt,at,Nt,Ct,be){be===!0&&(wt*=Ct,at*=Ct,Nt*=Ct),xt.set(wt,at,Nt,Ct),bt.equals(xt)===!1&&(i.clearColor(wt,at,Nt,Ct),bt.copy(xt))},reset:function(){W=!1,rt=null,bt.set(-1,0,0,0)}}}function n(){let W=!1,xt=!1,rt=null,bt=null,wt=null;return{setReversed:function(at){if(xt!==at){let Nt=t.get("EXT_clip_control");at?Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.ZERO_TO_ONE_EXT):Nt.clipControlEXT(Nt.LOWER_LEFT_EXT,Nt.NEGATIVE_ONE_TO_ONE_EXT),xt=at;let Ct=wt;wt=null,this.setClear(Ct)}},getReversed:function(){return xt},setTest:function(at){at?Y(i.DEPTH_TEST):nt(i.DEPTH_TEST)},setMask:function(at){rt!==at&&!W&&(i.depthMask(at),rt=at)},setFunc:function(at){if(xt&&(at=Ef[at]),bt!==at){switch(at){case Ho:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case Rs:i.depthFunc(i.LEQUAL);break;case qo:i.depthFunc(i.EQUAL);break;case Yo:i.depthFunc(i.GEQUAL);break;case $o:i.depthFunc(i.GREATER);break;case Zo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}bt=at}},setLocked:function(at){W=at},setClear:function(at){wt!==at&&(wt=at,xt&&(at=1-at),i.clearDepth(at))},reset:function(){W=!1,rt=null,bt=null,wt=null,xt=!1}}}function s(){let W=!1,xt=null,rt=null,bt=null,wt=null,at=null,Nt=null,Ct=null,be=null;return{setTest:function(he){W||(he?Y(i.STENCIL_TEST):nt(i.STENCIL_TEST))},setMask:function(he){xt!==he&&!W&&(i.stencilMask(he),xt=he)},setFunc:function(he,yn,Fn){(rt!==he||bt!==yn||wt!==Fn)&&(i.stencilFunc(he,yn,Fn),rt=he,bt=yn,wt=Fn)},setOp:function(he,yn,Fn){(at!==he||Nt!==yn||Ct!==Fn)&&(i.stencilOp(he,yn,Fn),at=he,Nt=yn,Ct=Fn)},setLocked:function(he){W=he},setClear:function(he){be!==he&&(i.clearStencil(he),be=he)},reset:function(){W=!1,xt=null,rt=null,bt=null,wt=null,at=null,Nt=null,Ct=null,be=null}}}let r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,y=null,_=null,M=null,w=null,A=null,b=new et(0,0,0),S=0,R=!1,T=null,P=null,L=null,C=null,D=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,k=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(B)[1]),U=k>=1):B.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),U=k>=2);let z=null,V={},tt=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),ct=new Ee().fromArray(tt),ut=new Ee().fromArray(Z);function St(W,xt,rt,bt){let wt=new Uint8Array(4),at=i.createTexture();i.bindTexture(W,at),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Nt=0;Nt<rt;Nt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,bt,0,i.RGBA,i.UNSIGNED_BYTE,wt):i.texImage2D(xt+Nt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,wt);return at}let q={};q[i.TEXTURE_2D]=St(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=St(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=St(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=St(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Y(i.DEPTH_TEST),o.setFunc(Rs),Xt(!1),Me(_c),Y(i.CULL_FACE),Yt(kn);function Y(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function nt(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function ht(W,xt){return h[W]!==xt?(i.bindFramebuffer(W,xt),h[W]=xt,W===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=xt),W===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function lt(W,xt){let rt=g,bt=!1;if(W){rt=d.get(xt),rt===void 0&&(rt=[],d.set(xt,rt));let wt=W.textures;if(rt.length!==wt.length||rt[0]!==i.COLOR_ATTACHMENT0){for(let at=0,Nt=wt.length;at<Nt;at++)rt[at]=i.COLOR_ATTACHMENT0+at;rt.length=wt.length,bt=!0}}else rt[0]!==i.BACK&&(rt[0]=i.BACK,bt=!0);bt&&i.drawBuffers(rt)}function Dt(W){return x!==W?(i.useProgram(W),x=W,!0):!1}let Ht={[Zi]:i.FUNC_ADD,[qh]:i.FUNC_SUBTRACT,[Yh]:i.FUNC_REVERSE_SUBTRACT};Ht[$h]=i.MIN,Ht[Zh]=i.MAX;let It={[Jh]:i.ZERO,[Kh]:i.ONE,[Qh]:i.SRC_COLOR,[Mc]:i.SRC_ALPHA,[rf]:i.SRC_ALPHA_SATURATE,[nf]:i.DST_COLOR,[tf]:i.DST_ALPHA,[jh]:i.ONE_MINUS_SRC_COLOR,[Sc]:i.ONE_MINUS_SRC_ALPHA,[sf]:i.ONE_MINUS_DST_COLOR,[ef]:i.ONE_MINUS_DST_ALPHA,[of]:i.CONSTANT_COLOR,[af]:i.ONE_MINUS_CONSTANT_COLOR,[lf]:i.CONSTANT_ALPHA,[cf]:i.ONE_MINUS_CONSTANT_ALPHA};function Yt(W,xt,rt,bt,wt,at,Nt,Ct,be,he){if(W===kn){m===!0&&(nt(i.BLEND),m=!1);return}if(m===!1&&(Y(i.BLEND),m=!0),W!==Xh){if(W!==p||he!==R){if((v!==Zi||M!==Zi)&&(i.blendEquation(i.FUNC_ADD),v=Zi,M=Zi),he)switch(W){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Re:i.blendFunc(i.ONE,i.ONE);break;case yc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cr:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",W);break}else switch(W){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Re:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case yc:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cr:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",W);break}y=null,_=null,w=null,A=null,b.set(0,0,0),S=0,p=W,R=he}return}wt=wt||xt,at=at||rt,Nt=Nt||bt,(xt!==v||wt!==M)&&(i.blendEquationSeparate(Ht[xt],Ht[wt]),v=xt,M=wt),(rt!==y||bt!==_||at!==w||Nt!==A)&&(i.blendFuncSeparate(It[rt],It[bt],It[at],It[Nt]),y=rt,_=bt,w=at,A=Nt),(Ct.equals(b)===!1||be!==S)&&(i.blendColor(Ct.r,Ct.g,Ct.b,be),b.copy(Ct),S=be),p=W,R=!1}function ne(W,xt){W.side===xe?nt(i.CULL_FACE):Y(i.CULL_FACE);let rt=W.side===sn;xt&&(rt=!rt),Xt(rt),W.blending===Mi&&W.transparent===!1?Yt(kn):Yt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),o.setFunc(W.depthFunc),o.setTest(W.depthTest),o.setMask(W.depthWrite),r.setMask(W.colorWrite);let bt=W.stencilWrite;a.setTest(bt),bt&&(a.setMask(W.stencilWriteMask),a.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),a.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),rn(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):nt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(W){T!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),T=W)}function Me(W){W!==Gh?(Y(i.CULL_FACE),W!==P&&(W===_c?i.cullFace(i.BACK):W===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):nt(i.CULL_FACE),P=W}function Be(W){W!==L&&(U&&i.lineWidth(W),L=W)}function rn(W,xt,rt){W?(Y(i.POLYGON_OFFSET_FILL),(C!==xt||D!==rt)&&(C=xt,D=rt,o.getReversed()&&(xt=-xt),i.polygonOffset(xt,rt))):nt(i.POLYGON_OFFSET_FILL)}function we(W){W?Y(i.SCISSOR_TEST):nt(i.SCISSOR_TEST)}function Le(W){W===void 0&&(W=i.TEXTURE0+N-1),z!==W&&(i.activeTexture(W),z=W)}function X(W,xt,rt){rt===void 0&&(z===null?rt=i.TEXTURE0+N-1:rt=z);let bt=V[rt];bt===void 0&&(bt={type:void 0,texture:void 0},V[rt]=bt),(bt.type!==W||bt.texture!==xt)&&(z!==rt&&(i.activeTexture(rt),z=rt),i.bindTexture(W,xt||q[W]),bt.type=W,bt.texture=xt)}function We(){let W=V[z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{i.compressedTexImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function E(){try{i.texSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function $(){try{i.texSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function Q(){try{i.compressedTexSubImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function it(){try{i.compressedTexSubImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function dt(){try{i.texStorage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function pt(){try{i.texStorage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function st(){try{i.texImage2D(...arguments)}catch(W){zt("WebGLState:",W)}}function ot(){try{i.texImage3D(...arguments)}catch(W){zt("WebGLState:",W)}}function mt(W){return f[W]!==void 0?f[W]:i.getParameter(W)}function Lt(W,xt){f[W]!==xt&&(i.pixelStorei(W,xt),f[W]=xt)}function vt(W){ct.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),ct.copy(W))}function gt(W){ut.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),ut.copy(W))}function Ft(W,xt){let rt=c.get(xt);rt===void 0&&(rt=new WeakMap,c.set(xt,rt));let bt=rt.get(W);bt===void 0&&(bt=i.getUniformBlockIndex(xt,W.name),rt.set(W,bt))}function Ut(W,xt){let bt=c.get(xt).get(W);l.get(xt)!==bt&&(i.uniformBlockBinding(xt,bt,W.__bindingPointIndex),l.set(xt,bt))}function $t(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},f={},z=null,V={},h={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,y=null,_=null,M=null,w=null,A=null,b=new et(0,0,0),S=0,R=!1,T=null,P=null,L=null,C=null,D=null,ct.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:Y,disable:nt,bindFramebuffer:ht,drawBuffers:lt,useProgram:Dt,setBlending:Yt,setMaterial:ne,setFlipSided:Xt,setCullFace:Me,setLineWidth:Be,setPolygonOffset:rn,setScissorTest:we,activeTexture:Le,bindTexture:X,unbindTexture:We,compressedTexImage2D:pe,compressedTexImage3D:O,texImage2D:st,texImage3D:ot,pixelStorei:Lt,getParameter:mt,updateUBOMapping:Ft,uniformBlockBinding:Ut,texStorage2D:dt,texStorage3D:pt,texSubImage2D:E,texSubImage3D:$,compressedTexSubImage2D:Q,compressedTexSubImage3D:it,scissor:vt,viewport:gt,reset:$t}}function jv(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(O,E){return g?new OffscreenCanvas(O,E):Cs("canvas")}function m(O,E,$){let Q=1,it=pe(O);if((it.width>$||it.height>$)&&(Q=$/Math.max(it.width,it.height)),Q<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let dt=Math.floor(Q*it.width),pt=Math.floor(Q*it.height);h===void 0&&(h=x(dt,pt));let st=E?x(dt,pt):h;return st.width=dt,st.height=pt,st.getContext("2d").drawImage(O,0,0,dt,pt),Ot("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+dt+"x"+pt+")."),st}else return"data"in O&&Ot("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),O;return O}function p(O){return O.generateMipmaps}function v(O){i.generateMipmap(O)}function y(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(O,E,$,Q,it,dt=!1){if(O!==null){if(i[O]!==void 0)return i[O];Ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let pt;Q&&(pt=t.get("EXT_texture_norm16"),pt||Ot("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=E;if(E===i.RED&&($===i.FLOAT&&(st=i.R32F),$===i.HALF_FLOAT&&(st=i.R16F),$===i.UNSIGNED_BYTE&&(st=i.R8),$===i.UNSIGNED_SHORT&&pt&&(st=pt.R16_EXT),$===i.SHORT&&pt&&(st=pt.R16_SNORM_EXT)),E===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.R8UI),$===i.UNSIGNED_SHORT&&(st=i.R16UI),$===i.UNSIGNED_INT&&(st=i.R32UI),$===i.BYTE&&(st=i.R8I),$===i.SHORT&&(st=i.R16I),$===i.INT&&(st=i.R32I)),E===i.RG&&($===i.FLOAT&&(st=i.RG32F),$===i.HALF_FLOAT&&(st=i.RG16F),$===i.UNSIGNED_BYTE&&(st=i.RG8),$===i.UNSIGNED_SHORT&&pt&&(st=pt.RG16_EXT),$===i.SHORT&&pt&&(st=pt.RG16_SNORM_EXT)),E===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RG8UI),$===i.UNSIGNED_SHORT&&(st=i.RG16UI),$===i.UNSIGNED_INT&&(st=i.RG32UI),$===i.BYTE&&(st=i.RG8I),$===i.SHORT&&(st=i.RG16I),$===i.INT&&(st=i.RG32I)),E===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RGB8UI),$===i.UNSIGNED_SHORT&&(st=i.RGB16UI),$===i.UNSIGNED_INT&&(st=i.RGB32UI),$===i.BYTE&&(st=i.RGB8I),$===i.SHORT&&(st=i.RGB16I),$===i.INT&&(st=i.RGB32I)),E===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),$===i.UNSIGNED_INT&&(st=i.RGBA32UI),$===i.BYTE&&(st=i.RGBA8I),$===i.SHORT&&(st=i.RGBA16I),$===i.INT&&(st=i.RGBA32I)),E===i.RGB&&($===i.UNSIGNED_SHORT&&pt&&(st=pt.RGB16_EXT),$===i.SHORT&&pt&&(st=pt.RGB16_SNORM_EXT),$===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),$===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),E===i.RGBA){let ot=dt?ur:ie.getTransfer(it);$===i.FLOAT&&(st=i.RGBA32F),$===i.HALF_FLOAT&&(st=i.RGBA16F),$===i.UNSIGNED_BYTE&&(st=ot===de?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT&&pt&&(st=pt.RGBA16_EXT),$===i.SHORT&&pt&&(st=pt.RGBA16_SNORM_EXT),$===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(O,E){let $;return O?E===null||E===Rn||E===ks?$=i.DEPTH24_STENCIL8:E===Cn?$=i.DEPTH32F_STENCIL8:E===zs&&($=i.DEPTH24_STENCIL8,Ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Rn||E===ks?$=i.DEPTH_COMPONENT24:E===Cn?$=i.DEPTH_COMPONENT32F:E===zs&&($=i.DEPTH_COMPONENT16),$}function w(O,E){return p(O)===!0||O.isFramebufferTexture&&O.minFilter!==ke&&O.minFilter!==Ge?Math.log2(Math.max(E.width,E.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?E.mipmaps.length:1}function A(O){let E=O.target;E.removeEventListener("dispose",A),S(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function b(O){let E=O.target;E.removeEventListener("dispose",b),T(E)}function S(O){let E=n.get(O);if(E.__webglInit===void 0)return;let $=O.source,Q=d.get($);if(Q){let it=Q[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&R(O),Object.keys(Q).length===0&&d.delete($)}n.remove(O)}function R(O){let E=n.get(O);i.deleteTexture(E.__webglTexture);let $=O.source,Q=d.get($);delete Q[E.__cacheKey],o.memory.textures--}function T(O){let E=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let it=0;it<E.__webglFramebuffer[Q].length;it++)i.deleteFramebuffer(E.__webglFramebuffer[Q][it]);else i.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)i.deleteFramebuffer(E.__webglFramebuffer[Q]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}let $=O.textures;for(let Q=0,it=$.length;Q<it;Q++){let dt=n.get($[Q]);dt.__webglTexture&&(i.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove($[Q])}n.remove(O)}let P=0;function L(){P=0}function C(){return P}function D(O){P=O}function N(){let O=P;return O>=s.maxTextures&&Ot("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,O}function U(O){let E=[];return E.push(O.wrapS),E.push(O.wrapT),E.push(O.wrapR||0),E.push(O.magFilter),E.push(O.minFilter),E.push(O.anisotropy),E.push(O.internalFormat),E.push(O.format),E.push(O.type),E.push(O.generateMipmaps),E.push(O.premultiplyAlpha),E.push(O.flipY),E.push(O.unpackAlignment),E.push(O.colorSpace),E.join()}function k(O,E){let $=n.get(O);if(O.isVideoTexture&&X(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&$.__version!==O.version){let Q=O.image;if(Q===null)Ot("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ot("WebGLRenderer: Texture marked for update but image is incomplete");else{nt($,O,E);return}}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+E)}function B(O,E){let $=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){nt($,O,E);return}else O.isExternalTexture&&($.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+E)}function z(O,E){let $=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&$.__version!==O.version){nt($,O,E);return}e.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+E)}function V(O,E){let $=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&$.__version!==O.version){ht($,O,E);return}e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+E)}let tt={[Wi]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Jo]:i.MIRRORED_REPEAT},Z={[ke]:i.NEAREST,[ff]:i.NEAREST_MIPMAP_NEAREST,[Ir]:i.NEAREST_MIPMAP_LINEAR,[Ge]:i.LINEAR,[Ta]:i.LINEAR_MIPMAP_NEAREST,[wi]:i.LINEAR_MIPMAP_LINEAR},ct={[gf]:i.NEVER,[yf]:i.ALWAYS,[xf]:i.LESS,[ll]:i.LEQUAL,[bf]:i.EQUAL,[cl]:i.GEQUAL,[vf]:i.GREATER,[_f]:i.NOTEQUAL};function ut(O,E){if(E.type===Cn&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Ge||E.magFilter===Ta||E.magFilter===Ir||E.magFilter===wi||E.minFilter===Ge||E.minFilter===Ta||E.minFilter===Ir||E.minFilter===wi)&&Ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,tt[E.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,tt[E.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,tt[E.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,Z[E.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,Z[E.minFilter]),E.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,ct[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===ke||E.minFilter!==Ir&&E.minFilter!==wi||E.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){let $=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function St(O,E){let $=!1;O.__webglInit===void 0&&(O.__webglInit=!0,E.addEventListener("dispose",A));let Q=E.source,it=d.get(Q);it===void 0&&(it={},d.set(Q,it));let dt=U(E);if(dt!==O.__cacheKey){it[dt]===void 0&&(it[dt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),it[dt].usedTimes++;let pt=it[O.__cacheKey];pt!==void 0&&(it[O.__cacheKey].usedTimes--,pt.usedTimes===0&&R(E)),O.__cacheKey=dt,O.__webglTexture=it[dt].texture}return $}function q(O,E,$){return Math.floor(Math.floor(O/$)/E)}function Y(O,E,$,Q){let dt=O.updateRanges;if(dt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,$,Q,E.data);else{dt.sort((Lt,vt)=>Lt.start-vt.start);let pt=0;for(let Lt=1;Lt<dt.length;Lt++){let vt=dt[pt],gt=dt[Lt],Ft=vt.start+vt.count,Ut=q(gt.start,E.width,4),$t=q(vt.start,E.width,4);gt.start<=Ft+1&&Ut===$t&&q(gt.start+gt.count-1,E.width,4)===Ut?vt.count=Math.max(vt.count,gt.start+gt.count-vt.start):(++pt,dt[pt]=gt)}dt.length=pt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),ot=e.getParameter(i.UNPACK_SKIP_PIXELS),mt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Lt=0,vt=dt.length;Lt<vt;Lt++){let gt=dt[Lt],Ft=Math.floor(gt.start/4),Ut=Math.ceil(gt.count/4),$t=Ft%E.width,W=Math.floor(Ft/E.width),xt=Ut,rt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,$t),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,$t,W,xt,rt,$,Q,E.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ot),e.pixelStorei(i.UNPACK_SKIP_ROWS,mt)}}function nt(O,E,$){let Q=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=i.TEXTURE_3D);let it=St(O,E),dt=E.source;e.bindTexture(Q,O.__webglTexture,i.TEXTURE0+$);let pt=n.get(dt);if(dt.version!==pt.__version||it===!0){if(e.activeTexture(i.TEXTURE0+$),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){let rt=ie.getPrimaries(ie.workingColorSpace),bt=E.colorSpace===jn?null:ie.getPrimaries(E.colorSpace),wt=E.colorSpace===jn||rt===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ot=m(E.image,!1,s.maxTextureSize);ot=We(E,ot);let mt=r.convert(E.format,E.colorSpace),Lt=r.convert(E.type),vt=_(E.internalFormat,mt,Lt,E.normalized,E.colorSpace,E.isVideoTexture);ut(Q,E);let gt,Ft=E.mipmaps,Ut=E.isVideoTexture!==!0,$t=pt.__version===void 0||it===!0,W=dt.dataReady,xt=w(E,ot);if(E.isDepthTexture)vt=M(E.format===Ti,E.type),$t&&(Ut?e.texStorage2D(i.TEXTURE_2D,1,vt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,vt,ot.width,ot.height,0,mt,Lt,null));else if(E.isDataTexture)if(Ft.length>0){Ut&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,vt,Ft[0].width,Ft[0].height);for(let rt=0,bt=Ft.length;rt<bt;rt++)gt=Ft[rt],Ut?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,rt,vt,gt.width,gt.height,0,mt,Lt,gt.data);E.generateMipmaps=!1}else Ut?($t&&e.texStorage2D(i.TEXTURE_2D,xt,vt,ot.width,ot.height),W&&Y(E,ot,mt,Lt)):e.texImage2D(i.TEXTURE_2D,0,vt,ot.width,ot.height,0,mt,Lt,ot.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ut&&$t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,Ft[0].width,Ft[0].height,ot.depth);for(let rt=0,bt=Ft.length;rt<bt;rt++)if(gt=Ft[rt],E.format!==bn)if(mt!==null)if(Ut){if(W)if(E.layerUpdates.size>0){let wt=Yc(gt.width,gt.height,E.format,E.type);for(let at of E.layerUpdates){let Nt=gt.data.subarray(at*wt/gt.data.BYTES_PER_ELEMENT,(at+1)*wt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,at,gt.width,gt.height,1,mt,Nt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,ot.depth,mt,gt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,rt,vt,gt.width,gt.height,ot.depth,0,gt.data,0,0);else Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,rt,0,0,0,gt.width,gt.height,ot.depth,mt,Lt,gt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,rt,vt,gt.width,gt.height,ot.depth,0,mt,Lt,gt.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{Ut&&$t&&e.texStorage2D(i.TEXTURE_2D,xt,vt,Ft[0].width,Ft[0].height);for(let rt=0,bt=Ft.length;rt<bt;rt++)gt=Ft[rt],E.format!==bn?mt!==null?Ut?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,mt,gt.data):e.compressedTexImage2D(i.TEXTURE_2D,rt,vt,gt.width,gt.height,0,gt.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,gt.width,gt.height,mt,Lt,gt.data):e.texImage2D(i.TEXTURE_2D,rt,vt,gt.width,gt.height,0,mt,Lt,gt.data)}else if(E.isDataArrayTexture)if(Ut){if($t&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,ot.width,ot.height,ot.depth),W)if(E.layerUpdates.size>0){let rt=Yc(ot.width,ot.height,E.format,E.type);for(let bt of E.layerUpdates){let wt=ot.data.subarray(bt*rt/ot.data.BYTES_PER_ELEMENT,(bt+1)*rt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,bt,ot.width,ot.height,1,mt,Lt,wt)}E.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,mt,Lt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,ot.width,ot.height,ot.depth,0,mt,Lt,ot.data);else if(E.isData3DTexture)Ut?($t&&e.texStorage3D(i.TEXTURE_3D,xt,vt,ot.width,ot.height,ot.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,mt,Lt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,vt,ot.width,ot.height,ot.depth,0,mt,Lt,ot.data);else if(E.isFramebufferTexture){if($t)if(Ut)e.texStorage2D(i.TEXTURE_2D,xt,vt,ot.width,ot.height);else{let rt=ot.width,bt=ot.height;for(let wt=0;wt<xt;wt++)e.texImage2D(i.TEXTURE_2D,wt,vt,rt,bt,0,mt,Lt,null),rt>>=1,bt>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){let rt=i.canvas;if(rt.hasAttribute("layoutsubtree")||rt.setAttribute("layoutsubtree","true"),ot.parentNode!==rt){rt.appendChild(ot),f.add(E),rt.onpaint=bt=>{let wt=bt.changedElements;for(let at of f)wt.includes(at.image)&&(at.needsUpdate=!0)},rt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ot);else{let wt=i.RGBA,at=i.RGBA,Nt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,wt,at,Nt,ot)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ft.length>0){if(Ut&&$t){let rt=pe(Ft[0]);e.texStorage2D(i.TEXTURE_2D,xt,vt,rt.width,rt.height)}for(let rt=0,bt=Ft.length;rt<bt;rt++)gt=Ft[rt],Ut?W&&e.texSubImage2D(i.TEXTURE_2D,rt,0,0,mt,Lt,gt):e.texImage2D(i.TEXTURE_2D,rt,vt,mt,Lt,gt);E.generateMipmaps=!1}else if(Ut){if($t){let rt=pe(ot);e.texStorage2D(i.TEXTURE_2D,xt,vt,rt.width,rt.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,mt,Lt,ot)}else e.texImage2D(i.TEXTURE_2D,0,vt,mt,Lt,ot);p(E)&&v(Q),pt.__version=dt.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function ht(O,E,$){if(E.image.length!==6)return;let Q=St(O,E),it=E.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+$);let dt=n.get(it);if(it.version!==dt.__version||Q===!0){e.activeTexture(i.TEXTURE0+$);let pt=ie.getPrimaries(ie.workingColorSpace),st=E.colorSpace===jn?null:ie.getPrimaries(E.colorSpace),ot=E.colorSpace===jn||pt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let mt=E.isCompressedTexture||E.image[0].isCompressedTexture,Lt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let at=0;at<6;at++)!mt&&!Lt?vt[at]=m(E.image[at],!0,s.maxCubemapSize):vt[at]=Lt?E.image[at].image:E.image[at],vt[at]=We(E,vt[at]);let gt=vt[0],Ft=r.convert(E.format,E.colorSpace),Ut=r.convert(E.type),$t=_(E.internalFormat,Ft,Ut,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,xt=dt.__version===void 0||Q===!0,rt=it.dataReady,bt=w(E,gt);ut(i.TEXTURE_CUBE_MAP,E);let wt;if(mt){W&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,gt.width,gt.height);for(let at=0;at<6;at++){wt=vt[at].mipmaps;for(let Nt=0;Nt<wt.length;Nt++){let Ct=wt[Nt];E.format!==bn?Ft!==null?W?rt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,0,0,Ct.width,Ct.height,Ft,Ct.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,$t,Ct.width,Ct.height,0,Ct.data):Ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,0,0,Ct.width,Ct.height,Ft,Ut,Ct.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt,$t,Ct.width,Ct.height,0,Ft,Ut,Ct.data)}}}else{if(wt=E.mipmaps,W&&xt){wt.length>0&&bt++;let at=pe(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,$t,at.width,at.height)}for(let at=0;at<6;at++)if(Lt){W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,vt[at].width,vt[at].height,Ft,Ut,vt[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,vt[at].width,vt[at].height,0,Ft,Ut,vt[at].data);for(let Nt=0;Nt<wt.length;Nt++){let be=wt[Nt].image[at].image;W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,0,0,be.width,be.height,Ft,Ut,be.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,$t,be.width,be.height,0,Ft,Ut,be.data)}}else{W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Ft,Ut,vt[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,$t,Ft,Ut,vt[at]);for(let Nt=0;Nt<wt.length;Nt++){let Ct=wt[Nt];W?rt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,0,0,Ft,Ut,Ct.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Nt+1,$t,Ft,Ut,Ct.image[at])}}}p(E)&&v(i.TEXTURE_CUBE_MAP),dt.__version=it.version,E.onUpdate&&E.onUpdate(E)}O.__version=E.version}function lt(O,E,$,Q,it,dt){let pt=r.convert($.format,$.colorSpace),st=r.convert($.type),ot=_($.internalFormat,pt,st,$.normalized,$.colorSpace),mt=n.get(E),Lt=n.get($);if(Lt.__renderTarget=E,!mt.__hasExternalTextures){let vt=Math.max(1,E.width>>dt),gt=Math.max(1,E.height>>dt);it===i.TEXTURE_3D||it===i.TEXTURE_2D_ARRAY?e.texImage3D(it,dt,ot,vt,gt,E.depth,0,pt,st,null):e.texImage2D(it,dt,ot,vt,gt,0,pt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Le(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,it,Lt.__webglTexture,0,we(E)):(it===i.TEXTURE_2D||it>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,it,Lt.__webglTexture,dt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(O,E,$){if(i.bindRenderbuffer(i.RENDERBUFFER,O),E.depthBuffer){let Q=E.depthTexture,it=Q&&Q.isDepthTexture?Q.type:null,dt=M(E.stencilBuffer,it),pt=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(E),dt,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(E),dt,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,dt,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,O)}else{let Q=E.textures;for(let it=0;it<Q.length;it++){let dt=Q[it],pt=r.convert(dt.format,dt.colorSpace),st=r.convert(dt.type),ot=_(dt.internalFormat,pt,st,dt.normalized,dt.colorSpace);Le(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we(E),ot,E.width,E.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,we(E),ot,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ot,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ht(O,E,$){let Q=E.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let it=n.get(E.depthTexture);if(it.__renderTarget=E,(!it.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(it.__webglInit===void 0&&(it.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),it.__webglTexture===void 0){it.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),ut(i.TEXTURE_CUBE_MAP,E.depthTexture);let mt=r.convert(E.depthTexture.format),Lt=r.convert(E.depthTexture.type),vt;E.depthTexture.format===Un?vt=i.DEPTH_COMPONENT24:E.depthTexture.format===Ti&&(vt=i.DEPTH24_STENCIL8);for(let gt=0;gt<6;gt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0,vt,E.width,E.height,0,mt,Lt,null)}}else k(E.depthTexture,0);let dt=it.__webglTexture,pt=we(E),st=Q?i.TEXTURE_CUBE_MAP_POSITIVE_X+$:i.TEXTURE_2D,ot=E.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Un)Le(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,dt,0);else if(E.depthTexture.format===Ti)Le(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ot,st,dt,0,pt):i.framebufferTexture2D(i.FRAMEBUFFER,ot,st,dt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function It(O){let E=n.get(O),$=O.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==O.depthTexture){let Q=O.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){let it=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",it)};Q.addEventListener("dispose",it),E.__depthDisposeCallback=it}E.__boundDepthTexture=Q}if(O.depthTexture&&!E.__autoAllocateDepthBuffer)if($)for(let Q=0;Q<6;Q++)Ht(E.__webglFramebuffer[Q],O,Q);else{let Q=O.texture.mipmaps;Q&&Q.length>0?Ht(E.__webglFramebuffer[0],O,0):Ht(E.__webglFramebuffer,O,0)}else if($){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=i.createRenderbuffer(),Dt(E.__webglDepthbuffer[Q],O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,dt)}}else{let Q=O.texture.mipmaps;if(Q&&Q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Dt(E.__webglDepthbuffer,O,!1);else{let it=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,dt),i.framebufferRenderbuffer(i.FRAMEBUFFER,it,i.RENDERBUFFER,dt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Yt(O,E,$){let Q=n.get(O);E!==void 0&&lt(Q.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&It(O)}function ne(O){let E=O.texture,$=n.get(O),Q=n.get(E);O.addEventListener("dispose",b);let it=O.textures,dt=O.isWebGLCubeRenderTarget===!0,pt=it.length>1;if(pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=E.version,o.memory.textures++),dt){$.__webglFramebuffer=[];for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer[st]=[];for(let ot=0;ot<E.mipmaps.length;ot++)$.__webglFramebuffer[st][ot]=i.createFramebuffer()}else $.__webglFramebuffer[st]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){$.__webglFramebuffer=[];for(let st=0;st<E.mipmaps.length;st++)$.__webglFramebuffer[st]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(pt)for(let st=0,ot=it.length;st<ot;st++){let mt=n.get(it[st]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(O.samples>0&&Le(O)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let st=0;st<it.length;st++){let ot=it[st];$.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[st]);let mt=r.convert(ot.format,ot.colorSpace),Lt=r.convert(ot.type),vt=_(ot.internalFormat,mt,Lt,ot.normalized,ot.colorSpace,O.isXRRenderTarget===!0),gt=we(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,vt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,$.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),Dt($.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(dt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),ut(i.TEXTURE_CUBE_MAP,E);for(let st=0;st<6;st++)if(E.mipmaps&&E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)lt($.__webglFramebuffer[st][ot],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,ot);else lt($.__webglFramebuffer[st],O,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(E)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(pt){for(let st=0,ot=it.length;st<ot;st++){let mt=it[st],Lt=n.get(mt),vt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(vt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Lt.__webglTexture),ut(vt,mt),lt($.__webglFramebuffer,O,mt,i.COLOR_ATTACHMENT0+st,vt,0),p(mt)&&v(vt)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(st=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,Q.__webglTexture),ut(st,E),E.mipmaps&&E.mipmaps.length>0)for(let ot=0;ot<E.mipmaps.length;ot++)lt($.__webglFramebuffer[ot],O,E,i.COLOR_ATTACHMENT0,st,ot);else lt($.__webglFramebuffer,O,E,i.COLOR_ATTACHMENT0,st,0);p(E)&&v(st),e.unbindTexture()}O.depthBuffer&&It(O)}function Xt(O){let E=O.textures;for(let $=0,Q=E.length;$<Q;$++){let it=E[$];if(p(it)){let dt=y(O),pt=n.get(it).__webglTexture;e.bindTexture(dt,pt),v(dt),e.unbindTexture()}}}let Me=[],Be=[];function rn(O){if(O.samples>0){if(Le(O)===!1){let E=O.textures,$=O.width,Q=O.height,it=i.COLOR_BUFFER_BIT,dt=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(O),st=E.length>1;if(st)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);let ot=O.texture.mipmaps;ot&&ot.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(it|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(it|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Lt=n.get(E[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Lt,0)}i.blitFramebuffer(0,0,$,Q,0,0,$,Q,it,i.NEAREST),l===!0&&(Me.length=0,Be.length=0,Me.push(i.COLOR_ATTACHMENT0+mt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(Me.push(dt),Be.push(dt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Be)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,pt.__webglColorRenderbuffer[mt]);let Lt=n.get(E[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&l){let E=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function we(O){return Math.min(s.maxSamples,O.samples)}function Le(O){let E=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(O){let E=o.render.frame;u.get(O)!==E&&(u.set(O,E),O.update())}function We(O,E){let $=O.colorSpace,Q=O.format,it=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||$!==cr&&$!==jn&&(ie.getTransfer($)===de?(Q!==bn||it!==dn)&&Ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",$)),E}function pe(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(c.width=O.naturalWidth||O.width,c.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(c.width=O.displayWidth,c.height=O.displayHeight):(c.width=O.width,c.height=O.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=L,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=k,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=V,this.rebindTextures=Yt,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=Le,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function t_(i,t){function e(n,s=jn){let r,o=ie.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Aa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Nc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Uc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fc)return i.BYTE;if(n===Dc)return i.SHORT;if(n===zs)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Pn)return i.HALF_FLOAT;if(n===Oc)return i.ALPHA;if(n===Bc)return i.RGB;if(n===bn)return i.RGBA;if(n===Un)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===zc)return i.RED;if(n===Ca)return i.RED_INTEGER;if(n===Ei)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===Ia)return i.RGBA_INTEGER;if(n===Lr||n===Fr||n===Dr||n===Nr)if(o===de)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Fa||n===Da||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===Oa||n===Ba||n===za||n===ka||n===Ur||n===Va)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===Oa)return o===de?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===za)return r.COMPRESSED_R11_EAC;if(n===ka)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ur)return r.COMPRESSED_RG11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ga||n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===Qa||n===ja||n===tl||n===el)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ga)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ha)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Xa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ya)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Za)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ka)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tl)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===el)return o===de?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nl)return o===de?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rl||n===ol||n===Or||n===al)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ol)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Or)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ks?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var e_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,n_=`
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

}`,fu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new xr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Qe({vertexShader:e_,fragmentShader:n_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new xi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},du=class extends On{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new fu,p={},v=e.getContextAttributes(),y=null,_=null,M=[],w=[],A=new jt,b=null,S=null,R=new $e;R.viewport=new Ee;let T=new $e;T.viewport=new Ee;let P=[R,T],L=new ya,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=M[q];return Y===void 0&&(Y=new Fs,M[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=M[q];return Y===void 0&&(Y=new Fs,M[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=M[q];return Y===void 0&&(Y=new Fs,M[q]=Y),Y.getHandSpace()};function N(q){let Y=w.indexOf(q.inputSource);if(Y===-1)return;let nt=M[Y];nt!==void 0&&(nt.update(q.inputSource,q.frame,c||o),nt.dispatchEvent({type:q.type,data:q.inputSource}))}function U(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",k);for(let q=0;q<M.length;q++){let Y=w[q];Y!==null&&(w[q]=null,M[q].disconnect(Y))}C=null,D=null,m.reset();for(let q in p)delete p[q];if(t.setRenderTarget(y),d=null,h=null,f=null,s=null,_=null,St.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(A.width,A.height,!1),S!==null){let q=S.camera;q.fov=S.fov,q.zoom=S.zoom,q.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",U),s.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let nt=null,ht=null,lt=null;v.depth&&(lt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=v.stencil?Ti:Un,ht=v.stencil?ks:Rn);let Dt={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Dt),s.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),_=new Ke(h.textureWidth,h.textureHeight,{format:bn,type:dn,depthTexture:new gi(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let nt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new Ke(d.framebufferWidth,d.framebufferHeight,{format:bn,type:dn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),St.setContext(s),St.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function k(q){for(let Y=0;Y<q.removed.length;Y++){let nt=q.removed[Y],ht=w.indexOf(nt);ht>=0&&(w[ht]=null,M[ht].disconnect(nt))}for(let Y=0;Y<q.added.length;Y++){let nt=q.added[Y],ht=w.indexOf(nt);if(ht===-1){for(let Dt=0;Dt<M.length;Dt++)if(Dt>=w.length){w.push(nt),ht=Dt;break}else if(w[Dt]===null){w[Dt]=nt,ht=Dt;break}if(ht===-1)break}let lt=M[ht];lt&&lt.connect(nt)}}let B=new G,z=new G;function V(q,Y,nt){B.setFromMatrixPosition(Y.matrixWorld),z.setFromMatrixPosition(nt.matrixWorld);let ht=B.distanceTo(z),lt=Y.projectionMatrix.elements,Dt=nt.projectionMatrix.elements,Ht=lt[14]/(lt[10]-1),It=lt[14]/(lt[10]+1),Yt=(lt[9]+1)/lt[5],ne=(lt[9]-1)/lt[5],Xt=(lt[8]-1)/lt[0],Me=(Dt[8]+1)/Dt[0],Be=Ht*Xt,rn=Ht*Me,we=ht/(-Xt+Me),Le=we*-Xt;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Le),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),lt[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let X=Ht+we,We=It+we,pe=Be-Le,O=rn+(ht-Le),E=Yt*It/We*X,$=ne*It/We*X;q.projectionMatrix.makePerspective(pe,O,E,$,X,We),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function tt(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Y=q.near,nt=q.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),L.near=T.near=R.near=Y,L.far=T.far=R.far=nt,(C!==L.near||D!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,D=L.far),L.layers.mask=q.layers.mask|6,R.layers.mask=L.layers.mask&-5,T.layers.mask=L.layers.mask&-3;let ht=q.parent,lt=L.cameras;tt(L,ht);for(let Dt=0;Dt<lt.length;Dt++)tt(lt[Dt],ht);lt.length===2?V(L,R,T):L.projectionMatrix.copy(R.projectionMatrix),S===null&&q.isPerspectiveCamera&&(S={camera:q,fov:q.fov,zoom:q.zoom}),Z(q,L,ht)};function Z(q,Y,nt){nt===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(nt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Qo*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(L)},this.getCameraTexture=function(q){return p[q]};let ct=null;function ut(q,Y){if(u=Y.getViewerPose(c||o),g=Y,u!==null){let nt=u.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ht=!1;nt.length!==L.cameras.length&&(L.cameras.length=0,ht=!0);for(let It=0;It<nt.length;It++){let Yt=nt[It],ne=null;if(d!==null)ne=d.getViewport(Yt);else{let Me=f.getViewSubImage(h,Yt);ne=Me.viewport,It===0&&(t.setRenderTargetTextures(_,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(_))}let Xt=P[It];Xt===void 0&&(Xt=new $e,Xt.layers.enable(It),Xt.viewport=new Ee,P[It]=Xt),Xt.matrix.fromArray(Yt.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Yt.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(ne.x,ne.y,ne.width,ne.height),It===0&&(L.matrix.copy(Xt.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),ht===!0&&L.cameras.push(Xt)}let lt=s.enabledFeatures;if(lt&&lt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let It=f.getDepthInformation(nt[0]);It&&It.isValid&&It.texture&&m.init(It,s.renderState)}if(lt&&lt.includes("camera-access")&&x){t.state.unbindTexture(),f=n.getBinding();for(let It=0;It<nt.length;It++){let Yt=nt[It].camera;if(Yt){let ne=p[Yt];ne||(ne=new xr,p[Yt]=ne);let Xt=f.getCameraImage(Yt);ne.sourceTexture=Xt}}}}for(let nt=0;nt<M.length;nt++){let ht=w[nt],lt=M[nt];ht!==null&&lt!==void 0&&lt.update(ht,Y,c||o)}ct&&ct(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let St=new nd;St.setAnimationLoop(ut),this.setAnimationLoop=function(q){ct=q},this.dispose=function(){}}},i_=new Se,ld=new Gt;ld.set(-1,0,0,0,1,0,0,0,1);function s_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Wc(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(i_.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ld),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function r_(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let w=M.program;n.uniformBlockBinding(_,w)}function c(_,M){let w=s[_.id];w===void 0&&(m(_),w=u(_),s[_.id]=w,_.addEventListener("dispose",v));let A=M.program;n.updateUBOMapping(_,A);let b=t.render.frame;r[_.id]!==b&&(h(_),r[_.id]=b)}function u(_){let M=f();_.__bindingPointIndex=M;let w=i.createBuffer(),A=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){let M=s[_.id],w=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,S=w.length;b<S;b++){let R=w[b];if(Array.isArray(R))for(let T=0,P=R.length;T<P;T++)d(R[T],b,T,A);else d(R,b,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,w,A){if(x(_,M,w,A)===!0){let b=_.__offset,S=_.value;if(Array.isArray(S)){let R=0;for(let T=0;T<S.length;T++){let P=S[T],L=p(P);g(P,_.__data,R),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(R+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function g(_,M,w){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,w)}function x(_,M,w,A){let b=_.value,S=M+"_"+w;if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:ArrayBuffer.isView(b)?A[S]=b.slice():A[S]=b.clone(),!0;{let R=A[S];if(typeof b=="number"||typeof b=="boolean"){if(R!==b)return A[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(R.equals(b)===!1)return R.copy(b),!0}}return!1}function m(_){let M=_.uniforms,w=0,A=16;for(let S=0,R=M.length;S<R;S++){let T=Array.isArray(M[S])?M[S]:[M[S]];for(let P=0,L=T.length;P<L;P++){let C=T[P],D=Array.isArray(C.value)?C.value:[C.value];for(let N=0,U=D.length;N<U;N++){let k=D[N],B=p(k),z=w%A,V=z%B.boundary,tt=z+V;w+=V,tt!==0&&A-tt<B.storage&&(w+=A-tt),C.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=B.storage}}}let b=w%A;return b>0&&(w+=A-b),_.__size=w,_.__cache={},this}function p(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Ot("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){let M=_.target;M.removeEventListener("dispose",v);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function y(){for(let _ in s)i.deleteBuffer(s[_]);o=[],s={},r={}}return{bind:l,update:c,dispose:y}}var o_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vn=null;function a_(){return Vn===null&&(Vn=new na(o_,16,16,Ei,Pn),Vn.name="DFG_LUT",Vn.minFilter=Ge,Vn.magFilter=Ge,Vn.wrapS=hn,Vn.wrapT=hn,Vn.generateMipmaps=!1,Vn.needsUpdate=!0),Vn}var ji=class{constructor(t={}){let{canvas:e=Sf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=dn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Ia,Pa,Ca]),p=new Set([dn,Rn,zs,ks,Aa,Ra]),v=new Uint32Array(4),y=new Int32Array(4),_=new G,M=null,w=null,A=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=An,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,T=!1,P=null,L=null,C=null,D=null;this._outputColorSpace=Pe;let N=0,U=0,k=null,B=-1,z=null,V=new Ee,tt=new Ee,Z=null,ct=new et(0),ut=0,St=e.width,q=e.height,Y=1,nt=null,ht=null,lt=new Ee(0,0,St,q),Dt=new Ee(0,0,St,q),Ht=!1,It=new mr,Yt=!1,ne=!1,Xt=new Se,Me=new G,Be=new Ee,rn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},we=!1;function Le(){return k===null?Y:1}let X=n;function We(I,H){return e.getContext(I,H)}let pe,O,E,$,Q,it,dt,pt,st,ot,mt,Lt,vt,gt,Ft,Ut,$t,W,xt,rt,bt,wt,at;try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",be,!1),e.addEventListener("webglcontextrestored",he,!1),e.addEventListener("webglcontextcreationerror",yn,!1),X===null){let H="webgl2";if(X=We(H,I),X===null)throw We(H)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Nt()}catch(I){throw e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),zt("WebGLRenderer: "+I.message),I}function Nt(){pe=new pb(X),pe.init(),bt=new t_(X,pe),O=new sb(X,pe,t,bt),E=new Qv(X,pe),O.reversedDepthBuffer&&h&&E.buffers.depth.setReversed(!0),L=X.createFramebuffer(),C=X.createFramebuffer(),D=X.createFramebuffer(),$=new xb(X),Q=new Bv,it=new jv(X,pe,E,Q,O,bt,$),dt=new db(R),pt=new v0(X),wt=new nb(X,pt),st=new mb(X,pt,$,wt),ot=new vb(X,st,pt,wt,$),W=new bb(X,O,it),Ft=new rb(Q),mt=new Ov(R,dt,pe,O,wt,Ft),Lt=new s_(R,Q),vt=new kv,gt=new qv(pe),$t=new eb(R,dt,E,ot,g,l),Ut=new Kv(R,ot,O),at=new r_(X,$,O,E),xt=new ib(X,pe,$),rt=new gb(X,pe,$),$.programs=mt.programs,R.capabilities=O,R.extensions=pe,R.properties=Q,R.renderLists=vt,R.shadowMap=Ut,R.state=E,R.info=$}x!==dn&&(S=new yb(x,e.width,e.height,a,s,r));let Ct=new du(R,X);this.xr=Ct,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let I=pe.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=pe.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(St,q,!1))},this.getSize=function(I){return I.set(St,q)},this.setSize=function(I,H,j=!0){if(Ct.isPresenting){Ot("WebGLRenderer: Can't change size while VR device is presenting.");return}St=I,q=H,e.width=Math.floor(I*Y),e.height=Math.floor(H*Y),j===!0&&(e.style.width=I+"px",e.style.height=H+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,I,H)},this.getDrawingBufferSize=function(I){return I.set(St*Y,q*Y).floor()},this.setDrawingBufferSize=function(I,H,j){St=I,q=H,Y=j,e.width=Math.floor(I*j),e.height=Math.floor(H*j),this.setViewport(0,0,I,H)},this.setEffects=function(I){if(x===dn){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(I){for(let H=0;H<I.length;H++)if(I[H].isOutputPass===!0){Ot("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(I||[])},this.getCurrentViewport=function(I){return I.copy(V)},this.getViewport=function(I){return I.copy(lt)},this.setViewport=function(I,H,j,J){I.isVector4?lt.set(I.x,I.y,I.z,I.w):lt.set(I,H,j,J),E.viewport(V.copy(lt).multiplyScalar(Y).round())},this.getScissor=function(I){return I.copy(Dt)},this.setScissor=function(I,H,j,J){I.isVector4?Dt.set(I.x,I.y,I.z,I.w):Dt.set(I,H,j,J),E.scissor(tt.copy(Dt).multiplyScalar(Y).round())},this.getScissorTest=function(){return Ht},this.setScissorTest=function(I){E.setScissorTest(Ht=I)},this.setOpaqueSort=function(I){nt=I},this.setTransparentSort=function(I){ht=I},this.getClearColor=function(I){return I.copy($t.getClearColor())},this.setClearColor=function(){$t.setClearColor(...arguments)},this.getClearAlpha=function(){return $t.getClearAlpha()},this.setClearAlpha=function(){$t.setClearAlpha(...arguments)},this.clear=function(I=!0,H=!0,j=!0){let J=0;if(I){let K=!1;if(k!==null){let Mt=k.texture.format;K=m.has(Mt)}if(K){let Mt=k.texture.type,Et=p.has(Mt),yt=$t.getClearColor(),At=$t.getClearAlpha(),Pt=yt.r,Jt=yt.g,te=yt.b;Et?(v[0]=Pt,v[1]=Jt,v[2]=te,v[3]=At,X.clearBufferuiv(X.COLOR,0,v)):(y[0]=Pt,y[1]=Jt,y[2]=te,y[3]=At,X.clearBufferiv(X.COLOR,0,y))}else J|=X.COLOR_BUFFER_BIT}H&&(J|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),j&&(J|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&X.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(I){I.setRenderer(this),P=I},this.dispose=function(){e.removeEventListener("webglcontextlost",be,!1),e.removeEventListener("webglcontextrestored",he,!1),e.removeEventListener("webglcontextcreationerror",yn,!1),$t.dispose(),vt.dispose(),gt.dispose(),Q.dispose(),dt.dispose(),ot.dispose(),wt.dispose(),at.dispose(),mt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",nh),Ct.removeEventListener("sessionend",ih),Bi.stop()};function be(I){I.preventDefault(),Hc("WebGLRenderer: Context Lost."),T=!0}function he(){Hc("WebGLRenderer: Context Restored."),T=!1;let I=$.autoReset,H=Ut.enabled,j=Ut.autoUpdate,J=Ut.needsUpdate,K=Ut.type;Nt(),$.autoReset=I,Ut.enabled=H,Ut.autoUpdate=j,Ut.needsUpdate=J,Ut.type=K}function yn(I){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function Fn(I){let H=I.target;H.removeEventListener("dispose",Fn),dm(H)}function dm(I){pm(I),Q.remove(I)}function pm(I){let H=Q.get(I).programs;H!==void 0&&(H.forEach(function(j){mt.releaseProgram(j)}),I.isShaderMaterial&&mt.releaseShaderCache(I))}this.renderBufferDirect=function(I,H,j,J,K,Mt){H===null&&(H=rn);let Et=K.isMesh&&K.matrixWorld.determinantAffine()<0,yt=xm(I,H,j,J,K);E.setMaterial(J,Et);let At=j.index,Pt=1;if(J.wireframe===!0){if(At=st.getWireframeAttribute(j),At===void 0)return;Pt=2}let Jt=j.drawRange,te=j.attributes.position,Rt=Jt.start*Pt,fe=(Jt.start+Jt.count)*Pt;Mt!==null&&(Rt=Math.max(Rt,Mt.start*Pt),fe=Math.min(fe,(Mt.start+Mt.count)*Pt)),At!==null?(Rt=Math.max(Rt,0),fe=Math.min(fe,At.count)):te!=null&&(Rt=Math.max(Rt,0),fe=Math.min(fe,te.count));let Fe=fe-Rt;if(Fe<0||Fe===1/0)return;wt.setup(K,J,yt,j,At);let _e,ge=xt;if(At!==null&&(_e=pt.get(At),ge=rt,ge.setIndex(_e)),K.isMesh)J.wireframe===!0?(E.setLineWidth(J.wireframeLinewidth*Le()),ge.setMode(X.LINES)):ge.setMode(X.TRIANGLES);else if(K.isLine){let Xe=J.linewidth;Xe===void 0&&(Xe=1),E.setLineWidth(Xe*Le()),K.isLineSegments?ge.setMode(X.LINES):K.isLineLoop?ge.setMode(X.LINE_LOOP):ge.setMode(X.LINE_STRIP)}else K.isPoints?ge.setMode(X.POINTS):K.isSprite&&ge.setMode(X.TRIANGLES);if(K.isBatchedMesh)if(pe.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Xe=K._multiDrawStarts,Tt=K._multiDrawCounts,tn=K._multiDrawCount,oe=At?pt.get(At).bytesPerElement:1,mn=Q.get(J).currentProgram.getUniforms();for(let Dn=0;Dn<tn;Dn++)mn.setValue(X,"_gl_DrawID",Dn),ge.render(Xe[Dn]/oe,Tt[Dn])}else if(K.isInstancedMesh)ge.renderInstances(Rt,Fe,K.count);else if(j.isInstancedBufferGeometry){let Xe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Tt=Math.min(j.instanceCount,Xe);ge.renderInstances(Rt,Fe,Tt)}else ge.render(Rt,Fe)};function eh(I,H,j,J){P!==null&&I.isNodeMaterial&&P.setObject(J,I),Yt===!0&&Ft.setState(I,j,!1),I.transparent===!0&&I.side===xe&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,po(I,H,J),I.side=yi,I.needsUpdate=!0,po(I,H,J),I.side=xe):po(I,H,J)}this.compile=function(I,H,j=null){j===null&&(j=I),P!==null&&P.renderStart(I,H,j),w=gt.get(j),w.init(H),b.push(w),j.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),I!==j&&I.traverseVisible(function(K){K.isLight&&K.layers.test(H.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),ne=this.localClippingEnabled,Yt=Ft.init(this.clippingPlanes,ne),Yt===!0&&Ft.setGlobalState(this.clippingPlanes,H),P!==null&&Ut.render(w.state.shadowsArray,j,H);let J=new Set;return I.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Mt=K.material;if(Mt)if(Array.isArray(Mt))for(let Et=0;Et<Mt.length;Et++){let yt=Mt[Et];eh(yt,j,H,K),J.add(yt)}else eh(Mt,j,H,K),J.add(Mt)}),w=b.pop(),P!==null&&P.renderEnd(),J},this.compileAsync=function(I,H,j=null){let J=this.compile(I,H,j);return new Promise(K=>{function Mt(){if(J.forEach(function(Et){let At=Q.get(Et).currentProgram;(At===void 0||At.isReady())&&J.delete(Et)}),J.size===0){K(I);return}setTimeout(Mt,10)}pe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let Bl=null;function mm(I){Bl&&Bl(I)}function nh(){Bi.stop()}function ih(){Bi.start()}let Bi=new nd;Bi.setAnimationLoop(mm),typeof self<"u"&&Bi.setContext(self),this.setAnimationLoop=function(I){Bl=I,Ct.setAnimationLoop(I),I===null?Bi.stop():Bi.start()},Ct.addEventListener("sessionstart",nh),Ct.addEventListener("sessionend",ih),this.render=function(I,H){if(H!==void 0&&H.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;P!==null&&P.renderStart(I,H);let j=Ct.enabled===!0&&Ct.isPresenting===!0,J=S!==null&&(k===null||j)&&S.begin(R,k);if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(H),H=Ct.getCamera()),I.isScene===!0&&I.onBeforeRender(R,I,H,k),w=gt.get(I,b.length),w.init(H),w.state.textureUnits=it.getTextureUnits(),b.push(w),Xt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),It.setFromProjectionMatrix(Xt,En,H.reversedDepth),ne=this.localClippingEnabled,Yt=Ft.init(this.clippingPlanes,ne),M=vt.get(I,A.length),M.init(),A.push(M),Ct.enabled===!0&&Ct.isPresenting===!0){let Et=R.xr.getDepthSensingMesh();Et!==null&&zl(Et,H,-1/0,R.sortObjects)}zl(I,H,0,R.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),R.sortObjects===!0&&M.sort(nt,ht),we=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,we&&$t.addToRenderList(M,I),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Yt===!0&&Ft.beginShadows();let K=w.state.shadowsArray;if(Ut.render(K,I,H),Yt===!0&&Ft.endShadows(),(J&&S.hasRenderPass())===!1){let Et=M.opaque,yt=M.transmissive;if(w.setupLights(),H.isArrayCamera){let At=H.cameras;if(yt.length>0)for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let te=At[Pt];rh(Et,yt,I,te)}we&&$t.render(I);for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let te=At[Pt];sh(M,I,te,te.viewport)}}else yt.length>0&&rh(Et,yt,I,H),we&&$t.render(I),sh(M,I,H)}k!==null&&U===0&&(it.updateMultisampleRenderTarget(k),it.updateRenderTargetMipmap(k)),J&&S.end(R),I.isScene===!0&&I.onAfterRender(R,I,H),wt.resetDefaultState(),B=-1,z=null,b.pop(),b.length>0?(w=b[b.length-1],it.setTextureUnits(w.state.textureUnits),Yt===!0&&Ft.setGlobalState(R.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,P!==null&&P.renderEnd()};function zl(I,H,j,J){if(I.visible===!1)return;if(I.layers.test(H.layers)){if(I.isGroup)j=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(H);else if(I.isLightProbeGrid)w.pushLightProbeGrid(I);else if(I.isLight)w.pushLight(I),I.castShadow&&w.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||I.intersectsFrustum(It)){J&&Be.setFromMatrixPosition(I.matrixWorld).applyMatrix4(Xt);let Et=ot.update(I),yt=I.material;yt.visible&&M.push(I,Et,yt,j,Be.z,null,H)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||I.intersectsFrustum(It))){let Et=ot.update(I),yt=I.material;if(J&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),Be.copy(I.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Be.copy(Et.boundingSphere.center)),Be.applyMatrix4(I.matrixWorld).applyMatrix4(Xt)),Array.isArray(yt)){let At=Et.groups;for(let Pt=0,Jt=At.length;Pt<Jt;Pt++){let te=At[Pt],Rt=yt[te.materialIndex];Rt&&Rt.visible&&M.push(I,Et,Rt,j,Be.z,te,H)}}else yt.visible&&M.push(I,Et,yt,j,Be.z,null,H)}}let Mt=I.children;for(let Et=0,yt=Mt.length;Et<yt;Et++)zl(Mt[Et],H,j,J)}function sh(I,H,j,J){let{opaque:K,transmissive:Mt,transparent:Et}=I;w.setupLightsView(j),Yt===!0&&Ft.setGlobalState(R.clippingPlanes,j),J&&E.viewport(V.copy(J)),K.length>0&&fo(K,H,j),Mt.length>0&&fo(Mt,H,j),Et.length>0&&fo(Et,H,j),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function rh(I,H,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[J.id]===void 0){let Rt=pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[J.id]=new Ke(1,1,{generateMipmaps:!0,type:Rt?Pn:dn,minFilter:wi,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let Mt=w.state.transmissionRenderTarget[J.id],Et=J.viewport||V;Mt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),At=R.getActiveCubeFace(),Pt=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(ct),ut=R.getClearAlpha(),ut<1&&R.setClearColor(16777215,.5),R.clear(),we&&$t.render(j);let Jt=R.toneMapping;R.toneMapping=An;let te=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),w.setupLightsView(J),Yt===!0&&Ft.setGlobalState(R.clippingPlanes,J),fo(I,j,J),it.updateMultisampleRenderTarget(Mt),it.updateRenderTargetMipmap(Mt),pe.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let fe=0,Fe=H.length;fe<Fe;fe++){let _e=H[fe],{object:ge,geometry:Xe,material:Tt,group:tn}=_e;if(Tt.side===xe&&ge.layers.test(J.layers)){let oe=Tt.side;Tt.side=sn,Tt.needsUpdate=!0,oh(ge,j,J,Xe,Tt,tn),Tt.side=oe,Tt.needsUpdate=!0,Rt=!0}}Rt===!0&&(it.updateMultisampleRenderTarget(Mt),it.updateRenderTargetMipmap(Mt))}R.setRenderTarget(yt,At,Pt),R.setClearColor(ct,ut),te!==void 0&&(J.viewport=te),R.toneMapping=Jt}function fo(I,H,j){let J=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Mt=I.length;K<Mt;K++){let Et=I[K],{object:yt,geometry:At,group:Pt}=Et,Jt=Et.material;Jt.allowOverride===!0&&J!==null&&(Jt=J),yt.layers.test(j.layers)&&oh(yt,H,j,At,Jt,Pt)}}function oh(I,H,j,J,K,Mt){P!==null&&K.isNodeMaterial&&P.setObject(I,K),I.onBeforeRender(R,H,j,J,K,Mt),I.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),K.onBeforeRender(R,H,j,J,I,Mt),K.transparent===!0&&K.side===xe&&K.forceSinglePass===!1?(K.side=sn,K.needsUpdate=!0,R.renderBufferDirect(j,H,J,K,I,Mt),K.side=yi,K.needsUpdate=!0,R.renderBufferDirect(j,H,J,K,I,Mt),K.side=xe):R.renderBufferDirect(j,H,J,K,I,Mt),I.onAfterRender(R,H,j,J,K,Mt)}function po(I,H,j){H.isScene!==!0&&(H=rn);let J=Q.get(I),K=w.state.lights,Mt=w.state.shadowsArray,Et=K.state.version,yt=mt.getParameters(I,K.state,Mt,H,j,w.state.lightProbeGridArray),At=mt.getProgramCacheKey(yt),Pt=J.programs;J.environment=I.isMeshStandardMaterial||I.isMeshLambertMaterial||I.isMeshPhongMaterial?H.environment:null,J.fog=H.fog;let Jt=I.isMeshStandardMaterial||I.isMeshLambertMaterial&&!I.envMap||I.isMeshPhongMaterial&&!I.envMap;J.envMap=dt.get(I.envMap||J.environment,Jt),J.envMapRotation=J.environment!==null&&I.envMap===null?H.environmentRotation:I.envMapRotation,Pt===void 0&&(I.addEventListener("dispose",Fn),Pt=new Map,J.programs=Pt);let te=Pt.get(At);if(te!==void 0){if(J.currentProgram===te&&J.lightsStateVersion===Et)return lh(I,yt),te}else yt.uniforms=mt.getUniforms(I),P!==null&&I.isNodeMaterial&&P.build(I,j,yt),I.onBeforeCompile(yt,R),te=mt.acquireProgram(yt,At),Pt.set(At,te),J.uniforms=yt.uniforms;let Rt=J.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Rt.clippingPlanes=Ft.uniform),lh(I,yt),J.needsLights=vm(I),J.lightsStateVersion=Et,J.needsLights&&(Rt.ambientLightColor.value=K.state.ambient,Rt.lightProbe.value=K.state.probe,Rt.sunLights.value=K.state.sun,Rt.sunLightShadows.value=K.state.sunShadow,Rt.directionalLights.value=K.state.directional,Rt.directionalLightShadows.value=K.state.directionalShadow,Rt.spotLights.value=K.state.spot,Rt.spotLightShadows.value=K.state.spotShadow,Rt.rectAreaLights.value=K.state.rectArea,Rt.ltc_1.value=K.state.rectAreaLTC1,Rt.ltc_2.value=K.state.rectAreaLTC2,Rt.pointLights.value=K.state.point,Rt.pointLightShadows.value=K.state.pointShadow,Rt.hemisphereLights.value=K.state.hemi,Rt.sunShadowMatrix.value=K.state.sunShadowMatrix,Rt.sunShadowCascade.value=K.state.sunShadowCascade,Rt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Rt.spotLightMatrix.value=K.state.spotLightMatrix,Rt.spotLightMap.value=K.state.spotLightMap,Rt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.lightProbeGrid=w.state.lightProbeGridArray.length>0,J.currentProgram=te,J.uniformsList=null,te}function ah(I){if(I.uniformsList===null){let H=I.currentProgram.getUniforms();I.uniformsList=Hs.seqWithValue(H.seq,I.uniforms)}return I.uniformsList}function lh(I,H){let j=Q.get(I);j.outputColorSpace=H.outputColorSpace,j.batching=H.batching,j.batchingColor=H.batchingColor,j.instancing=H.instancing,j.instancingColor=H.instancingColor,j.instancingMorph=H.instancingMorph,j.skinning=H.skinning,j.morphTargets=H.morphTargets,j.morphNormals=H.morphNormals,j.morphColors=H.morphColors,j.morphTargetsCount=H.morphTargetsCount,j.numClippingPlanes=H.numClippingPlanes,j.numIntersection=H.numClipIntersection,j.vertexAlphas=H.vertexAlphas,j.vertexTangents=H.vertexTangents,j.toneMapping=H.toneMapping}function gm(I,H){if(I.length===0)return null;if(I.length===1)return I[0].texture!==null?I[0]:null;_.setFromMatrixPosition(H.matrixWorld);for(let j=0,J=I.length;j<J;j++){let K=I[j];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function xm(I,H,j,J,K){H.isScene!==!0&&(H=rn),it.resetTextureUnits();let Mt=H.fog,Et=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?H.environment:null,yt=k===null?R.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ie.workingColorSpace,At=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Pt=dt.get(J.envMap||Et,At),Jt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,te=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Rt=!!j.morphAttributes.position,fe=!!j.morphAttributes.normal,Fe=!!j.morphAttributes.color,_e=An;J.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(_e=R.toneMapping);let ge=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Xe=ge!==void 0?ge.length:0,Tt=Q.get(J),tn=w.state.lights;if(Yt===!0&&(ne===!0||I!==z)){let ve=I===z&&J.id===B;Ft.setState(J,I,ve)}let oe=!1;J.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==tn.state.version||Tt.outputColorSpace!==yt||K.isBatchedMesh&&Tt.batching===!1||!K.isBatchedMesh&&Tt.batching===!0||K.isBatchedMesh&&Tt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Tt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Tt.instancing===!1||!K.isInstancedMesh&&Tt.instancing===!0||K.isSkinnedMesh&&Tt.skinning===!1||!K.isSkinnedMesh&&Tt.skinning===!0||K.isInstancedMesh&&Tt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Tt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Tt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Tt.instancingMorph===!1&&K.morphTexture!==null||Tt.envMap!==Pt||J.fog===!0&&Tt.fog!==Mt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Ft.numPlanes||Tt.numIntersection!==Ft.numIntersection)||Tt.vertexAlphas!==Jt||Tt.vertexTangents!==te||Tt.morphTargets!==Rt||Tt.morphNormals!==fe||Tt.morphColors!==Fe||Tt.toneMapping!==_e||Tt.morphTargetsCount!==Xe||!!Tt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Tt.__version=J.version);let mn=Tt.currentProgram;oe===!0&&(mn=po(J,H,K),P&&J.isNodeMaterial&&P.onUpdateProgram(J,mn,Tt));let Dn=!1,ii=!1,hs=!1,me=mn.getUniforms(),Ce=Tt.uniforms;if(E.useProgram(mn.program)&&(Dn=!0,ii=!0,hs=!0),J.id!==B&&(B=J.id,ii=!0),Tt.needsLights){let ve=gm(w.state.lightProbeGridArray,K);Tt.lightProbeGrid!==ve&&(Tt.lightProbeGrid=ve,ii=!0)}if(Dn||z!==I){E.buffers.depth.getReversed()&&I.reversedDepth!==!0&&(I._reversedDepth=!0,I.updateProjectionMatrix()),me.setValue(X,"projectionMatrix",I.projectionMatrix),me.setValue(X,"viewMatrix",I.matrixWorldInverse);let ri=me.map.cameraPosition;ri!==void 0&&ri.setValue(X,Me.setFromMatrixPosition(I.matrixWorld)),O.logarithmicDepthBuffer&&me.setValue(X,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&me.setValue(X,"isOrthographic",I.isOrthographicCamera===!0),z!==I&&(z=I,ii=!0,hs=!0)}if(Tt.needsLights&&(tn.state.sunShadowMap.length>0&&me.setValue(X,"sunShadowMap",tn.state.sunShadowMap,it),tn.state.directionalShadowMap.length>0&&me.setValue(X,"directionalShadowMap",tn.state.directionalShadowMap,it),tn.state.spotShadowMap.length>0&&me.setValue(X,"spotShadowMap",tn.state.spotShadowMap,it),tn.state.pointShadowMap.length>0&&me.setValue(X,"pointShadowMap",tn.state.pointShadowMap,it)),K.isSkinnedMesh){me.setOptional(X,K,"bindMatrix"),me.setOptional(X,K,"bindMatrixInverse");let ve=K.skeleton;ve&&(ve.boneTexture===null&&ve.computeBoneTexture(),me.setValue(X,"boneTexture",ve.boneTexture,it))}K.isBatchedMesh&&(me.setOptional(X,K,"batchingTexture"),me.setValue(X,"batchingTexture",K._matricesTexture,it),me.setOptional(X,K,"batchingIdTexture"),me.setValue(X,"batchingIdTexture",K._indirectTexture,it),me.setOptional(X,K,"batchingColorTexture"),K._colorsTexture!==null&&me.setValue(X,"batchingColorTexture",K._colorsTexture,it));let si=j.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&W.update(K,j,mn),(ii||Tt.receiveShadow!==K.receiveShadow)&&(Tt.receiveShadow=K.receiveShadow,me.setValue(X,"receiveShadow",K.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&H.environment!==null&&(Ce.envMapIntensity.value=H.environmentIntensity),Ce.dfgLUT!==void 0&&(Ce.dfgLUT.value=a_()),ii){if(me.setValue(X,"toneMappingExposure",R.toneMappingExposure),Tt.needsLights&&bm(Ce,hs),Mt&&J.fog===!0&&Lt.refreshFogUniforms(Ce,Mt),Lt.refreshMaterialUniforms(Ce,J,Y,q,w.state.transmissionRenderTarget[I.id]),Tt.needsLights&&Tt.lightProbeGrid){let ve=Tt.lightProbeGrid;Ce.probesSH.value=ve.texture,Ce.probesMin.value.copy(ve.boundingBox.min),Ce.probesMax.value.copy(ve.boundingBox.max),Ce.probesResolution.value.copy(ve.resolution)}Hs.upload(X,ah(Tt),Ce,it)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Hs.upload(X,ah(Tt),Ce,it),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&me.setValue(X,"center",K.center),me.setValue(X,"modelViewMatrix",K.modelViewMatrix),me.setValue(X,"normalMatrix",K.normalMatrix),me.setValue(X,"modelMatrix",K.matrixWorld),J.uniformsGroups!==void 0){let ve=J.uniformsGroups;for(let ri=0,fs=ve.length;ri<fs;ri++){let uh=ve[ri];at.update(uh,mn),at.bind(uh,mn)}}return mn}function bm(I,H){I.ambientLightColor.needsUpdate=H,I.lightProbe.needsUpdate=H,I.sunLights.needsUpdate=H,I.sunLightShadows.needsUpdate=H,I.directionalLights.needsUpdate=H,I.directionalLightShadows.needsUpdate=H,I.pointLights.needsUpdate=H,I.pointLightShadows.needsUpdate=H,I.spotLights.needsUpdate=H,I.spotLightShadows.needsUpdate=H,I.rectAreaLights.needsUpdate=H,I.hemisphereLights.needsUpdate=H}function vm(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(I,H,j){let J=Q.get(I);J.__autoAllocateDepthBuffer=I.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Q.get(I.texture).__webglTexture=H,Q.get(I.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(I,H){let j=Q.get(I);j.__webglFramebuffer=H,j.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(I,H=0,j=0){k=I,N=H,U=j;let J=null,K=!1,Mt=!1;if(I){let yt=Q.get(I);if(yt.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,yt.__webglFramebuffer),V.copy(I.viewport),tt.copy(I.scissor),Z=I.scissorTest,E.viewport(V),E.scissor(tt),E.setScissorTest(Z),B=-1;return}else if(yt.__webglFramebuffer===void 0)it.setupRenderTarget(I);else if(yt.__hasExternalTextures)it.rebindTextures(I,Q.get(I.texture).__webglTexture,Q.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Jt=I.depthTexture;if(yt.__boundDepthTexture!==Jt){if(Jt!==null&&Q.has(Jt)&&(I.width!==Jt.image.width||I.height!==Jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");it.setupDepthRenderbuffer(I)}}let At=I.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(Mt=!0);let Pt=Q.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(Pt[H])?J=Pt[H][j]:J=Pt[H],K=!0):I.samples>0&&it.useMultisampledRTT(I)===!1?J=Q.get(I).__webglMultisampledFramebuffer:Array.isArray(Pt)?J=Pt[j]:J=Pt,V.copy(I.viewport),tt.copy(I.scissor),Z=I.scissorTest}else V.copy(lt).multiplyScalar(Y).floor(),tt.copy(Dt).multiplyScalar(Y).floor(),Z=Ht;if(j!==0&&(J=L),E.bindFramebuffer(X.FRAMEBUFFER,J)&&E.drawBuffers(I,J),E.viewport(V),E.scissor(tt),E.setScissorTest(Z),K){let yt=Q.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+H,yt.__webglTexture,j)}else if(Mt){let yt=H;for(let At=0;At<I.textures.length;At++){let Pt=Q.get(I.textures[At]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+At,Pt.__webglTexture,j,yt)}}else if(I!==null&&j!==0){let yt=Q.get(I.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,yt.__webglTexture,j)}B=-1};function ch(I){let H=Q.get(I);return(H.__readFormat!==I.format||H.__readType!==I.type)&&(H.__readFormat=I.format,H.__readType=I.type,H.__formatReadable=O.textureFormatReadable(I.format),H.__typeReadable=O.textureTypeReadable(I.type)),H}this.readRenderTargetPixels=function(I,H,j,J,K,Mt,Et,yt=0){if(!(I&&I.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let At=Q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At){E.bindFramebuffer(X.FRAMEBUFFER,At);try{let Pt=I.textures[yt],Jt=Pt.format,te=Pt.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+yt);let Rt=ch(Pt);if(Rt.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Rt.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=I.width-J&&j>=0&&j<=I.height-K&&X.readPixels(H,j,J,K,bt.convert(Jt),bt.convert(te),Mt)}finally{let Pt=k!==null?Q.get(k).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(I,H,j,J,K,Mt,Et,yt=0){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let At=Q.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Et!==void 0&&(At=At[Et]),At)if(H>=0&&H<=I.width-J&&j>=0&&j<=I.height-K){E.bindFramebuffer(X.FRAMEBUFFER,At);let Pt=I.textures[yt],Jt=Pt.format,te=Pt.type;I.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+yt);let Rt=ch(Pt);if(Rt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Rt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,fe),X.bufferData(X.PIXEL_PACK_BUFFER,Mt.byteLength,X.STREAM_READ),X.readPixels(H,j,J,K,bt.convert(Jt),bt.convert(te),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let Fe=k!==null?Q.get(k).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,Fe);let _e=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Tf(X,_e,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,fe),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Mt),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(fe),X.deleteSync(_e),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(I,H=null,j=0){let J=Math.pow(2,-j),K=Math.floor(I.image.width*J),Mt=Math.floor(I.image.height*J),Et=H!==null?H.x:0,yt=H!==null?H.y:0;it.setTexture2D(I,0),X.copyTexSubImage2D(X.TEXTURE_2D,j,0,0,Et,yt,K,Mt),E.unbindTexture()},this.copyTextureToTexture=function(I,H,j=null,J=null,K=0,Mt=0){let Et,yt,At,Pt,Jt,te,Rt,fe,Fe,_e=I.isCompressedTexture?I.mipmaps[Mt]:I.image;if(j!==null)Et=j.max.x-j.min.x,yt=j.max.y-j.min.y,At=j.isBox3?j.max.z-j.min.z:1,Pt=j.min.x,Jt=j.min.y,te=j.isBox3?j.min.z:0;else{let Ce=Math.pow(2,-K);Et=Math.floor(_e.width*Ce),yt=Math.floor(_e.height*Ce),I.isDataArrayTexture?At=_e.depth:I.isData3DTexture?At=Math.floor(_e.depth*Ce):At=1,Pt=0,Jt=0,te=0}J!==null?(Rt=J.x,fe=J.y,Fe=J.z):(Rt=0,fe=0,Fe=0);let ge=bt.convert(H.format),Xe=bt.convert(H.type),Tt;H.isData3DTexture?(it.setTexture3D(H,0),Tt=X.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(it.setTexture2DArray(H,0),Tt=X.TEXTURE_2D_ARRAY):(it.setTexture2D(H,0),Tt=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,H.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,H.unpackAlignment);let tn=E.getParameter(X.UNPACK_ROW_LENGTH),oe=E.getParameter(X.UNPACK_IMAGE_HEIGHT),mn=E.getParameter(X.UNPACK_SKIP_PIXELS),Dn=E.getParameter(X.UNPACK_SKIP_ROWS),ii=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,_e.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,_e.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Pt),E.pixelStorei(X.UNPACK_SKIP_ROWS,Jt),E.pixelStorei(X.UNPACK_SKIP_IMAGES,te);let hs=I.isDataArrayTexture||I.isData3DTexture,me=H.isDataArrayTexture||H.isData3DTexture;if(I.isDepthTexture){let Ce=Q.get(I),si=Q.get(H),ve=Q.get(Ce.__renderTarget),ri=Q.get(si.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,ve.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let fs=0;fs<At;fs++)hs&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Q.get(I).__webglTexture,K,te+fs),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Q.get(H).__webglTexture,Mt,Fe+fs)),X.blitFramebuffer(Pt,Jt,Et,yt,Rt,fe,Et,yt,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(K!==0||I.isRenderTargetTexture||Q.has(I)){let Ce=Q.get(I),si=Q.get(H);E.bindFramebuffer(X.READ_FRAMEBUFFER,C),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,D);for(let ve=0;ve<At;ve++)hs?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Ce.__webglTexture,K,te+ve):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Ce.__webglTexture,K),me?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,si.__webglTexture,Mt,Fe+ve):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,si.__webglTexture,Mt),K!==0?X.blitFramebuffer(Pt,Jt,Et,yt,Rt,fe,Et,yt,X.COLOR_BUFFER_BIT,X.NEAREST):me?X.copyTexSubImage3D(Tt,Mt,Rt,fe,Fe+ve,Pt,Jt,Et,yt):X.copyTexSubImage2D(Tt,Mt,Rt,fe,Pt,Jt,Et,yt);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else me?I.isDataTexture||I.isData3DTexture?X.texSubImage3D(Tt,Mt,Rt,fe,Fe,Et,yt,At,ge,Xe,_e.data):H.isCompressedArrayTexture?X.compressedTexSubImage3D(Tt,Mt,Rt,fe,Fe,Et,yt,At,ge,_e.data):X.texSubImage3D(Tt,Mt,Rt,fe,Fe,Et,yt,At,ge,Xe,_e):I.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Mt,Rt,fe,Et,yt,ge,Xe,_e.data):I.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Mt,Rt,fe,_e.width,_e.height,ge,_e.data):X.texSubImage2D(X.TEXTURE_2D,Mt,Rt,fe,Et,yt,ge,Xe,_e);E.pixelStorei(X.UNPACK_ROW_LENGTH,tn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,oe),E.pixelStorei(X.UNPACK_SKIP_PIXELS,mn),E.pixelStorei(X.UNPACK_SKIP_ROWS,Dn),E.pixelStorei(X.UNPACK_SKIP_IMAGES,ii),Mt===0&&H.generateMipmaps&&X.generateMipmap(Tt),E.unbindTexture()},this.initRenderTarget=function(I){Q.get(I).__webglFramebuffer===void 0&&it.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?it.setTextureCube(I,0):I.isData3DTexture?it.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?it.setTexture2DArray(I,0):it.setTexture2D(I,0),E.unbindTexture()},this.resetState=function(){N=0,U=0,k=null,E.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};function cd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let s=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&s>0&&(e[n]=s)}return e}function ud(i,t,e,n){for(let s=e.start*3;s<e.end*3;s++){let r=t[s];r<=0||(i[s*3]=Math.min(1,n[0]*r),i[s*3+1]=Math.min(1,n[1]*r),i[s*3+2]=Math.min(1,n[2]*r))}}var l_=[],pu=new Map,c_=0;function Gr(i){l_=i,pu=new Map(i.flatMap(t=>t.items.map(e=>[u_(t.id,e.id),e]))),c_++}function u_(i,t){return`pack:${i}:${t}`}function h_(i){return i.startsWith("pack:")}var f_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function hd(i){var t;return(t=Ie(i))==null?void 0:t.parts.find(e=>e.screen)}function Ie(i){if(!h_(i))return;let t=pu.get(i);if(t)return t;let[,e,...n]=i.split(":"),s=f_[e];return s?pu.get(`pack:${s}:${n.join(":")}`):void 0}function pn(i,t){let e=Ie(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return gl;if(fd.has(t.type))return Math.max(0,i.height-dd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return pd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Hr(t)}}var Wr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function ts(i){return i==="hedge"||i==="fence"||i==="pergola"}function Xr(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let s=i.slope_dir??"x",r=(c,u)=>s==="x"?c:s==="-x"?-c:s==="z"?u:-u,o=1/0,a=-1/0;for(let[c,u]of i.points){let f=r(c,u);o=Math.min(o,f),a=Math.max(a,f)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(r(t,e)-o)/(a-o)));return n*l}function p_(i,t,e,n){return Xs(i)+(t.offset??0)+Wr[t.type]-Xr(t,e,n)}function Xs(i){return i.elevation>.3?0:-.2}function md(i,t,e){let n=(i.outdoor??[]).filter(r=>!ts(r.type)&&r.type!=="pool"&&se([t,e],r.points)),s=[...n].reverse().find(r=>r.cut)??n[0];return s?p_(i,s,t,e):Xs(i)}function mu(i,t){let e=Xs(i)+(t.offset??0);return t.above?e+gu(t)-.15:e+Wr.pool}function gu(i){return i.height&&i.height>.3?i.height:1.2}var m_={type:"none",pitch:35,overhang:.4},U2={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...m_}};var gd=.3;var xd=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),gl=1.75;var fd=new Set(["lamp_downlight","lamp_spot"]);function dd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var bd=new Set(["stairs","stairs_u"]);function vd(i,t,e){let n=Math.max(4,Math.round(e/.18)),s=Math.floor(n/2)+1,r=s-1,o=n-s,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),u=(t-c)/r;return{n,k:s,steps1:r,steps2:o,gap:a,fw:l,landing:c,run:u,rise:e/n}}function _d(i){var t;return xd.has(i)||!!((t=Ie(i))!=null&&t.light)}var g_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);function Hr(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function pd(i,t,e){var s;let n=0;for(let r of i.furniture)!(g_.has(r.type)||(s=Ie(r.type))!=null&&s.surface)||!se([t,e],Ri(r))||(n=Math.max(n,r.h));return n}var d_=new Set([...xd,"radiator","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var x_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],b_=["standard","bars","glass_wall"];function es(i,t){return i.type==="door"?i.style&&x_.includes(i.style)?i.style:t?"front":"interior":i.style&&b_.includes(i.style)?i.style:"standard"}function yd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let s=t==="sidelights",r=i-.04,o=Math.min(1.05,Math.max(.6,r-(s?.6:.3))),a=(r-o)/(s?2:1),l=n.sidelight_width??a,c=s?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=s?Math.max(.1,c):0;let u=r-.5;if(l+c>u){let h=Math.max(0,u)/(l+c);l*=h,c*=h}return s?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Md(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function In(i){let t=0;for(let e=0;e<i.length;e++){let[n,s]=i[e],[r,o]=i[(e+1)%i.length];t+=n*o-r*s}return t/2}function Ai(i){return Math.abs(In(i))}function ns(i){let t=In(i);if(Math.abs(t)<1e-9){let s=i.length||1;return[i.reduce((r,o)=>r+o[0],0)/s,i.reduce((r,o)=>r+o[1],0)/s]}let e=0,n=0;for(let s=0;s<i.length;s++){let[r,o]=i[s],[a,l]=i[(s+1)%i.length],c=r*l-a*o;e+=(r+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Sd(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[s,r]=i[(t+1)%4];if(Math.abs(e-s)>1e-6&&Math.abs(n-r)>1e-6)return!1}return!0}function wd(i){let t=1/0,e=1/0,n=-1/0,s=-1/0;for(let[r,o]of i)t=Math.min(t,r),e=Math.min(e,o),n=Math.max(n,r),s=Math.max(s,o);return{x0:t,z0:e,x1:n,z1:s}}function Ri(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),s=i.w/2,r=i.d/2;return[[-s,-r],[s,-r],[s,r],[-s,r]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function se(i,t){let e=!1;for(let n=0,s=t.length-1;n<t.length;s=n++){let[r,o]=t[n],[a,l]=t[s];o>i[1]!=l>i[1]&&i[0]<(a-r)*(i[1]-o)/(l-o)+r&&(e=!e)}return e}var Td=i=>Math.round(i*1e3)/1e3;function v_(i,t,e,n){let s=Math.hypot(n[0]-e[0],n[1]-e[1]);if(s<.01)return!1;let r=[(n[0]-e[0])/s,(n[1]-e[1])/s],o=l=>Math.abs(-(l[0]-e[0])*r[1]+(l[1]-e[1])*r[0]),a=l=>(l[0]-e[0])*r[0]+(l[1]-e[1])*r[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,u)=>{let f=l.points[(u+1)%l.points.length];return o(c)>.02||o(f)>.02?!1:Math.min(s,Math.max(a(c),a(f)))-Math.max(0,Math.min(a(c),a(f)))>.05}))}function Ed(i,t,e,n,s,r=.05){let o=i.rooms.find(h=>h.points.length>=3&&se([t.x,t.z],h.points));if(!o)return[e,n];let a=o.points,l=In(a)>=0?1:-1,c=Ri({...t}),u=e,f=n;for(let h=0;h<2;h++){let d=Ri({...t,x:u,z:f});for(let g=0;g<a.length;g++){let x=a[g],m=a[(g+1)%a.length],p=Math.hypot(m[0]-x[0],m[1]-x[1]);if(p<.05)continue;let v=[(m[0]-x[0])/p,(m[1]-x[1])/p],y=[-v[1]*l,v[0]*l],_=v_(i,o.id,x,m)?s/2:0,M=0;d.forEach((w,A)=>{let b=(w[0]-x[0])*v[0]+(w[1]-x[1])*v[1];if(b<-.01||b>p+.01)return;let S=(w[0]-x[0])*y[0]+(w[1]-x[1])*y[1]-_,R=c[A];(R[0]-x[0])*y[0]+(R[1]-x[1])*y[1]-_<-r||S<M&&(M=S)}),M<-1e-4&&(u-=y[0]*M,f-=y[1]*M)}}return[Td(u),Td(f)]}var Ve=(i,t)=>[i[0]-t[0],i[1]-t[1]],Ci=(i,t)=>[i[0]+t[0],i[1]+t[1]],ti=(i,t)=>[i[0]*t,i[1]*t],Yr=(i,t)=>i[0]*t[0]+i[1]*t[1],qs=(i,t)=>i[0]*t[1]-i[1]*t[0],qr=i=>Math.hypot(i[0],i[1]),Hn=i=>{let t=qr(i)||1;return[i[0]/t,i[1]/t]},Ad=i=>[-i[1],i[0]],Rd=i=>[i[1],-i[0]];function Pi(i,t,e=[]){let n=t.eps??.005,s=[],r=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(In(S))<1e-6)continue;let R=In(S)>0,T=S.map(a);for(let P=0;P<S.length;P++){let L=T[P],C=T[(P+1)%S.length];L!==C&&l.push(R?{u:L,v:C,room:b.id,edge:P,forward:!0}:{u:C,v:L,room:b.id,edge:P,forward:!1})}}let c=r.map(b=>[a(b.a),a(b.b)]),u=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((R,T)=>{if(!R||T>=S.length)return;let P=S[T],L=Ve(S[(T+1)%S.length],P),C=qr(L);for(let D of R)D>n&&D<C-n&&u.add(a(Ci(P,ti(L,D/C))))})}let f=[];for(let b of l){let S=o[b.u],R=o[b.v],T=Ve(R,S),P=qr(T),L=ti(T,1/P),C=[];for(let N=0;N<o.length;N++){if(N===b.u||N===b.v)continue;let U=Ve(o[N],S),k=Yr(U,L);k<=n||k>=P-n||Math.abs(qs(L,U))<=n&&C.push({t:k,id:N})}C.sort((N,U)=>N.t-U.t);let D=[{t:0,id:b.u},...C,{t:P,id:b.v}];for(let N=0;N+1<D.length;N++){let U=D[N],k=D[N+1],B=b.forward?U.t:P-k.t,z=b.forward?k.t:P-U.t;f.push({u:U.id,v:k.id,room:b.room,edge:b.edge,t0:B,t1:z})}}let h=new Map;for(let b of f){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,R=h.get(S);R||h.set(S,R=[]),R.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),g=new Map;for(let b of f){let S=`${b.room}:${b.edge}`;g.set(S,[...g.get(S)??[],b.t0].sort((R,T)=>R-T))}let x=b=>{var T,P;let S=(P=(T=i.find(L=>L.id===b.room))==null?void 0:T.wall_heights)==null?void 0:P[b.edge];if(!Array.isArray(S))return S;let R=g.get(`${b.room}:${b.edge}`)??[];return S[R.indexOf(b.t0)]??null},m=b=>{let S=b.map(x).filter(T=>typeof T=="number"&&T>0);if(S.length)return Math.min(...S);let R=b.map(T=>{var P;return(P=i.find(L=>L.id===T.room))==null?void 0:P.ceiling_height});return R.every(T=>typeof T=="number"&&T>0)?Math.max(...R):void 0},p=b=>{let S=b.map(R=>{var T,P;return(P=(T=i.find(L=>L.id===R.room))==null?void 0:T.wall_thickness)==null?void 0:P[R.edge]}).filter(R=>typeof R=="number"&&R>0);return S.length?Math.max(...S):void 0},v=b=>b.some(S=>x(S)===0),y=[],_=[];for(let b of h.values()){let S=b[0],R=b.find(T=>T!==S&&T.u===S.v&&T.v===S.u&&T.room!==S.room);for(let T of b)T!==S&&T!==R&&T.room!==S.room&&s.push(`overlap:${S.room}:${T.room}`);if(v(R?[S,R]:[S])){R&&y.push([S.room,R.room]);continue}if(R){let T=p([S,R])??t.interior;_.push({a:S.u,b:S.v,left:T/2,right:T/2,exterior:!1,roomLeft:S.room,roomRight:R.room,sources:[d(S),d(R)],height:m([S,R])})}else _.push({a:S.u,b:S.v,left:0,right:p([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:m([S])})}let M=b=>Hn(Ve(o[b.b],o[b.a]));for(let b of _){if(b.exterior||b.free)continue;let S=new Set;for(let T of[b.a,b.b])for(let P of _)!P.exterior||P.free||P.a!==T&&P.b!==T||Math.abs(qs(M(b),M(P)))>1e-6||(P.roomLeft===b.roomLeft?S.add("left"):P.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let R=b.left+b.right;S.has("left")?(b.left=0,b.right=R):(b.left=R,b.right=0)}r.forEach((b,S)=>{var N;let[R,T]=c[S];if(R===T)return;let P=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],L=((N=i.find(U=>U.points.length>=3&&se(P,U.points)))==null?void 0:N.id)??null,C=(b.thickness??t.interior)/2,D=typeof b.height=="number"&&b.height>0?b.height:void 0;_.push({free:b.id,a:R,b:T,left:C,right:C,exterior:!1,roomLeft:L,roomRight:L,sources:[],height:D})}),_=y_(_,o,u);let w=S_(_,o);return{walls:_.map((b,S)=>{let R=o[b.a],T=o[b.b],P=w.get(`${S}:a`),L=w.get(`${S}:b`),C=w_([P.right,L.left,T,L.right,P.left,R],1e-6);return{id:__(R,T),a:[R[0],R[1]],b:[T[0],T[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:C,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(s)],open:y}}function __(i,t){let e=r=>Math.round(r*100),[n,s]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(s[0])}_${e(s[1])}`}function Cd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function y_(i,t,e=new Set){let n=i.slice(),s=!0;for(;s;){s=!1;let r=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=r.get(l);c||r.set(l,c=[]),c.push(a)}});for(let[o,a]of r){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Cd(l)),c.a!==o&&(c=Cd(c)),l.a===c.b)continue;let u=Hn(Ve(t[l.b],t[l.a])),f=Hn(Ve(t[c.b],t[c.a]));if(Math.abs(qs(u,f))>1e-6||Yr(u,f)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:M_(l.sources,c.sources)},d=n.filter((g,x)=>x!==a[0]&&x!==a[1]);d.push(h),n.length=0,n.push(...d),s=!0;break}}return n}function M_(i,t){let e=i.map(n=>({...n}));for(let n of t){let s=e.find(r=>r.room_id===n.room_id&&r.edge===n.edge&&(Math.abs(r.t1-n.t0)<1e-6||Math.abs(n.t1-r.t0)<1e-6));s?(s.t0=Math.min(s.t0,n.t0),s.t1=Math.max(s.t1,n.t1)):e.push({...n})}return e}function S_(i,t){let e=new Map;i.forEach((s,r)=>{let o=Hn(Ve(t[s.b],t[s.a])),a=[[s.a,{key:`${r}:a`,d:o,left:s.left,right:s.right,angle:Math.atan2(o[1],o[0])}],[s.b,{key:`${r}:b`,d:ti(o,-1),left:s.right,right:s.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let u=e.get(l);u||e.set(l,u=[]),u.push(c)}});let n=new Map;for(let[s,r]of e){let o=t[s];r.sort((c,u)=>c.angle-u.angle);let a=c=>({left:Ci(o,ti(Ad(c.d),c.left)),right:Ci(o,ti(Rd(c.d),c.right))});for(let c of r)n.set(c.key,a(c));if(r.length<2)continue;let l=4*Math.max(...r.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<r.length;c++){let u=r[c],f=r[(c+1)%r.length],h=Ci(o,ti(Ad(u.d),u.left)),d=Ci(o,ti(Rd(f.d),f.right)),g=qs(u.d,f.d);if(Math.abs(g)<1e-4)continue;let x=qs(Ve(d,h),f.d)/g,m=Ci(h,ti(u.d,x));qr(Ve(m,o))>l||(n.get(u.key).left=m,n.get(f.key).right=m)}}return n}function w_(i,t){let e=i.filter((s,r)=>qr(Ve(s,i[(r+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let s=0;s<e.length;s++){let r=e[(s+e.length-1)%e.length],o=e[s],a=e[(s+1)%e.length],l=Ve(o,r),c=Ve(a,o);if(Math.abs(qs(Hn(l),Hn(c)))<1e-7&&Yr(l,c)>0){e=e.filter((u,f)=>f!==s),n=!0;break}}}return e}function xu(i,t,e){let n=i.points[t],s=i.points[(t+1)%i.points.length],r=Hn(Ve(s,n));return Ci(n,ti(r,e))}function $r(i,t,e){if(i.wall){let s=e.find(a=>a.id===i.wall);if(!s||Math.hypot(s.b[0]-s.a[0],s.b[1]-s.a[1])<.05)return null;let r=Hn(Ve(s.b,s.a));return{room:{id:i.room_id,name:"",area_id:null,points:[s.a,s.b,Ci(s.a,[-r[1],r[0]])]},edge:0}}let n=t.find(s=>s.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Zr(i,t,e){if(!t.wall)return T_(i,e.room,e.edge,t.offset);let n=i.find(r=>r.free===t.wall);if(!n)return null;let s=xu(e.room,0,t.offset);return{wall:n,s:Yr(Ve(s,n.a),Hn(Ve(n.b,n.a)))}}function T_(i,t,e,n){for(let s of i){if(!s.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=xu(t,e,n);return{wall:s,s:Yr(Ve(o,s.a),Hn(Ve(s.b,s.a)))}}return null}var Kr=Math.PI/180;function Wn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),s=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:s-n,at:(r,o)=>[r,i.flip?s-o:n+o]}:{u0:n,u1:s,w:e-t,at:(r,o)=>[i.flip?e-o:t+o,r]}}function vn(i){let t=Wn(i).w,e=i.eave_a,n=i.eave_b,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Kr),r=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Kr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*s,y:l=>e+l*s};if(i.shape==="mansard"){let l=Dd(t,e,n,s,r);return{vr:l.vr,rh:l.rh,y:l.y}}let o=s+r>1e-6?Math.min(t,Math.max(0,(n-e+t*r)/(s+r))):t/2,a=e+o*s;return{vr:o,rh:a,y:l=>l<=o?e+l*s:n+(t-l)*r}}var E_=.14;function Id(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Ld(i,t,e){let n=null,s=Math.max(0,i.settings.roof.overhang??0);for(let r of i.settings.roof.sections??[]){if(r.open)continue;let o=Math.min(r.x0,r.x1),a=Math.max(r.x0,r.x1),l=Math.min(r.z0,r.z1),c=Math.max(r.z0,r.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||r.points&&r.points.length>=3&&!se([t,e],r.points))continue;let[u,f]=Ii(r,t,e),h=r.shape==="flat"||r.shape==="parapet",d=Math.max(0,r.overhang??s),x=((h?null:Qr($s(r,{u0:d,u1:d,a:d,b:d}),u,f))??vn(r).y(f))-E_;n=n===null?x:Math.max(n,x)}return n}function bu(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(r=>[r[0],r[1]]);let n=Ai(i)>=0?1:-1,s=[];for(let r=0;r<e;r++){let o=i[(r+e-1)%e],a=i[r],l=i[(r+1)%e],c=Pd([a[0]-o[0],a[1]-o[1]]),u=Pd([l[0]-a[0],l[1]-a[1]]),f=[c[1]*n,-c[0]*n],h=[u[1]*n,-u[0]*n],d=f[0]+h[0],g=f[1]+h[1],x=Math.hypot(d,g);if(x<1e-6){s.push([a[0]+f[0]*t,a[1]+f[1]*t]);continue}let m=(d*f[0]+g*f[1])/x,p=Math.min(4,1/Math.max(.25,m));s.push([a[0]+d/x*t*p,a[1]+g/x*t*p])}return s}function Pd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Fd(i,t){if(i.points&&i.points.length>=3)return bu(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,s=Math.min(i.z0,i.z1)-t,r=Math.max(i.z0,i.z1)+t;return[[e,s],[n,s],[n,r],[e,r]]}var Jr=Math.tan(30*Kr);function Dd(i,t,e,n,s){let r=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,s>1e-6?2.4/s:i*.3),a=t+r*n,l=e+o*s,c=Math.min(i-o,Math.max(r,(l-a+Jr*(i-o+r))/(2*Jr))),u=a+(c-r)*Jr;return{vla:r,vlb:o,yla:a,ylb:l,vr:c,rh:u,y:h=>h<=r?t+h*n:h<=c?a+(h-r)*Jr:h<=i-o?l+(i-o-h)*Jr:e+(i-h)*s}}function $s(i,t){let e=Wn(i),n=vn(i),s=e.w,r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(v,y)=>[v,y,n.y(y)],u=c(a,-r),f=c(l,-r),h=c(l,s+o),d=c(a,s+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Kr),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Kr);if(i.shape==="pent"){let v=[u,f,h,d];return{faces:[v],rim:v,ridges:[[h,d]],gable:[[0,n.y(0)],[s,n.y(s)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let v=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,s-n.vr)||s/2),y=[e.u0+v,n.vr,n.rh],_=[e.u1-v,n.vr,n.rh],M=i.shape==="pyramid"?[[u,f,y],[f,h,y],[h,d,y],[d,u,y]]:[[u,f,_,y],[y,_,h,d],[d,u,y],[f,h,_]],w=i.shape==="pyramid"?[[u,y],[d,y],[f,y],[h,y]]:[[y,_],[u,y],[d,y],[f,_],[h,_]];return{faces:M,rim:[u,f,h,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let v=Math.min(n.y(0),n.y(s)),y=v+(n.rh-v)*.55,_=g>1e-6?Math.min(n.vr,(y-i.eave_a)/g):n.vr,M=x>1e-6?Math.max(n.vr,s-(y-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,g)),A=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],S=[a,_,y],R=[a,M,y],T=[l,_,y],P=[l,M,y];return{faces:[[u,f,T,b,A,S],[A,b,P,h,d,R],[R,S,A],[T,P,b]],rim:[u,f,T,P,h,d,R,S],ridges:[[A,b],[S,A],[R,A],[T,b],[P,b]],gable:[[0,n.y(0)],[_,y],[M,y],[s,n.y(s)]]}}if(i.shape==="mansard"){let v=Dd(s,i.eave_a,i.eave_b,g,x),y=[a,v.vla,v.yla],_=[l,v.vla,v.yla],M=[a,s-v.vlb,v.ylb],w=[l,s-v.vlb,v.ylb],A=[a,v.vr,v.rh],b=[l,v.vr,v.rh];return{faces:[[u,f,_,y],[y,_,b,A],[A,b,w,M],[M,w,h,d]],rim:[u,f,_,b,w,h,d,M,A,y],ridges:[[A,b],[y,_],[M,w]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[s-v.vlb,v.ylb],[s,n.y(s)]]}}let m=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[u,f,p,m],[m,p,h,d]],rim:[u,f,p,h,d,m],ridges:[[m,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[s,n.y(s)]]}}function Qr(i,t,e){let n=null;for(let s of i.faces){if(!se([t,e],s.map(v=>[v[0],v[1]])))continue;let[r,o]=s,a=s.slice(2).find(v=>Math.abs((o[0]-r[0])*(v[1]-r[1])-(o[1]-r[1])*(v[0]-r[0]))>1e-9);if(!a)continue;let l=o[0]-r[0],c=o[2]-r[2],u=o[1]-r[1],f=a[0]-r[0],h=a[2]-r[2],d=a[1]-r[1],g=c*d-u*h,x=u*f-l*d,m=l*h-c*f;if(Math.abs(x)<1e-9)continue;let p=r[2]-(g*(t-r[0])+m*(e-r[1]))/x;n=n===null?p:Math.min(n,p)}return n}function Ii(i,t,e){let n=Math.min(i.x0,i.x1),s=Math.max(i.x0,i.x1),r=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-r]:[e,i.flip?s-t:t-n]}function A_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function xl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,s=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),r=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||s(o)<s(t)*1.5)continue;let a=A_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!r||s(o)<s(r))&&(r=o)}return r}function vu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Wn(t),n=vn(t).rh,s=$s(i,{u0:0,u1:0,a:0,b:0}),r=vn(i),o=g=>{let[x,m]=e.at(g,e.w/2),[p,v]=Ii(i,x,m);return Qr(s,p,v)??r.y(v)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,u=a?1:-1,f=Math.abs(c-l),h=c;for(let g=.5;g<f;g+=.05)if(o(l+u*g)>=n-.02){h=l+u*g;break}if(Math.abs(h-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=h:d.x0=h:c===e.u1?d.z1=h:d.z0=h,d}function Nd(i,t){let e=vu(i,t),n=Wn(e),s=vn(e),r=$s(i,{u0:0,u1:0,a:0,b:0}),o=vn(i),a=h=>{let[d,g]=n.at(h,n.w/2),[x,m]=Ii(i,d,g);return Qr(r,x,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,u=[],f=Math.max(1,Math.ceil(c/.15));for(let h=0;h<f;h++){let d=c*h/f,g=c*(h+1)/f,x=l?n.u0+d:n.u1-d,m=l?n.u0+g:n.u1-g,p=a(m),v=1/0,y=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;s.y(S)>p+.02&&(v=Math.min(v,S),y=Math.max(y,S))}if(!(y-v>.05))continue;let _=n.at(x,v),M=n.at(m,y),w=Ii(i,_[0],_[1]),A=Ii(i,M[0],M[1]);u.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return u}function Ys(i,t,e,n){let s=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,r=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=s(a),u=s(l);if(c&&r.push(a),c!==u){let f=(e-a[t])/(l[t]-a[t]);r.push([a[0]+(l[0]-a[0])*f,a[1]+(l[1]-a[1])*f,a[2]+(l[2]-a[2])*f])}}return r}function Ud(i,t){let e=Ys(i,0,t.u0,!0),n=Ys(i,0,t.u1,!1),s=Ys(Ys(i,0,t.u0,!1),0,t.u1,!0),r=Ys(s,1,t.v0,!0),o=Ys(s,1,t.v1,!1);return[e,n,r,o].filter(a=>a.length>=3&&Math.abs(Ai(a.map(l=>[l[0],l[1]])))>1e-6)}function bl(i,t,e){let n=Wn(t),s=i.floors.flatMap(c=>c.rooms.filter(u=>u.points.length>=3&&c.elevation+c.height>t.base+.05)),r=c=>c.some(u=>s.some(f=>se(u,f.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:r(a.map(c=>n.at(c,-o)))?0:e,b:r(a.map(c=>n.at(c,n.w+o)))?0:e,u0:r(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:r(l.map(c=>n.at(n.u1+o,c)))?0:e}}function Od(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,s)=>n.elevation-s.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function R_(i){return vn(i).rh}function Bd(i,t,e){var l;let n=i.settings.roof.sections??[],s=n.filter(c=>e.includes(c.id)).map(c=>xl(n,c)??c);if(!s.length)return t.id;let r=Math.max(...s.map(c=>R_(c))),o=c=>c.rooms.some(u=>u.points.length>=3&&s.some(f=>{let[h,d]=u.points.reduce((g,x)=>[g[0]+x[0]/u.points.length,g[1]+x[1]/u.points.length],[0,0]);return h>=Math.min(f.x0,f.x1)&&h<=Math.max(f.x0,f.x1)&&d>=Math.min(f.z0,f.z1)&&d<=Math.max(f.z0,f.z1)}));return((l=i.floors.filter(c=>c.elevation>=t.elevation&&c.elevation<r-.3&&o(c)).sort((c,u)=>u.elevation-c.elevation)[0])==null?void 0:l.id)??t.id}function vl(i,t){let e=In(t)>0?1:-1,n=[...i];for(let s=0;s<t.length&&n.length;s++){let r=t[s],o=t[(s+1)%t.length],a=c=>e*((o[0]-r[0])*(c[1]-r[1])-(o[1]-r[1])*(c[0]-r[0])),l=n;n=[];for(let c=0;c<l.length;c++){let u=l[c],f=l[(c+1)%l.length],h=a(u),d=a(f);if(h>=0&&n.push(u),h>=0!=d>=0){let g=h/(h-d);n.push([u[0]+(f[0]-u[0])*g,u[1]+(f[1]-u[1])*g])}}}return n}function zd(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length],r=i[(e+2)%i.length],o=(s[0]-n[0])*(r[1]-s[1])-(s[1]-n[1])*(r[0]-s[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Ln=1e-4;function _u(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t/2}function kd(i,t,e,n){let s=[t[0]-i[0],t[1]-i[1]],r=[n[0]-e[0],n[1]-e[1]],o=s[0]*r[1]-s[1]*r[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o,l=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o;return a>Ln&&a<1-Ln&&l>-Ln&&l<1+Ln?a:null}function yu(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s;if(r<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*s)/r;return o<=Ln||o>=1-Ln?null:Math.abs((i[0]-t[0])*s-(i[1]-t[1])*n)/Math.sqrt(r)<Ln?o:null}function C_(i,t){for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];for(let r=0;r<t.length;r++){let o=t[r],a=t[(r+1)%t.length];if(kd(n,s,o,a)!==null||yu(o,n,s)!==null||yu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Ln)return!0}}return se(i[0],t)||se(t[0],i)}function P_(i){let t=i.map(r=>_u(r)>=0?r:[...r].reverse()),e=[];t.forEach((r,o)=>{for(let a=0;a<r.length;a++){let l=r[a],c=r[(a+1)%r.length],u=[0,1];t.forEach((f,h)=>{if(h!==o)for(let d=0;d<f.length;d++){let g=f[d],x=f[(d+1)%f.length],m=kd(l,c,g,x)??yu(g,l,c);m!==null&&u.push(m)}}),u.sort((f,h)=>f-h);for(let f=1;f<u.length;f++){if(u[f]-u[f-1]<Ln)continue;let h=[l[0]+(c[0]-l[0])*u[f-1],l[1]+(c[1]-l[1])*u[f-1]],d=[l[0]+(c[0]-l[0])*u[f],l[1]+(c[1]-l[1])*u[f]],g=Math.hypot(d[0]-h[0],d[1]-h[1]),x=[(h[0]+d[0])/2+(d[1]-h[1])/g*.001,(h[1]+d[1])/2-(d[0]-h[0])/g*.001];t.some((m,p)=>p!==o&&se(x,m))||e.some(([m,p])=>Math.hypot(m[0]-h[0],m[1]-h[1])<Ln&&Math.hypot(p[0]-d[0],p[1]-d[1])<Ln)||e.push([h,d])}}});let n=[],s=new Set;for(let r=0;r<e.length;r++){if(s.has(r))continue;s.add(r);let o=[e[r][0]],a=e[r][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([u],f)=>!s.has(f)&&Math.hypot(u[0]-a[0],u[1]-a[1])<.001);if(c<0)break;s.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&_u(o)>1e-6&&n.push(o)}return n}function Mu(i){let t=i.filter(r=>r.length>=3),e=t.map((r,o)=>o),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let r=0;r<t.length;r++)for(let o=r+1;o<t.length;o++)n(r)!==n(o)&&C_(t[r],t[o])&&(e[n(o)]=n(r));let s=new Map;return t.forEach((r,o)=>s.set(n(o),[...s.get(n(o))??[],r])),[...s.values()].flatMap(r=>r.length===1?r:P_(r))}function I_(i,t,e){let n=e[0]-t[0],s=e[1]-t[1],r=n*n+s*s,o=r?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*s)/r)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-s*o)}function Vd(i,t,e=.03){return i.every(n=>se(n,t)||t.some((s,r)=>I_(n,s,t[(r+1)%t.length])<=e))}function Su(i,t){let e=_u(i)>=0?i:[...i].reverse(),n=(s,r)=>{let o=Math.hypot(r[0]-s[0],r[1]-s[1])||1;return[-(r[1]-s[1])/o,(r[0]-s[0])/o]};return e.map((s,r)=>{let o=n(e[(r-1+e.length)%e.length],s),a=n(s,e[(r+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?s:[s[0]+(o[0]+a[0])/l*t,s[1]+(o[1]+a[1])/l*t]})}var is=kt(3662079,.95),wu=kt(3662079,1),Li=kt(5995775,.34),Gd=kt(5995775,.22),_l=[-.55,.83],Qt=-1,yl=16,ss=32,Hd=48,Tu=64,ce=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,s,r=s,o=s,a,l=Qt,c=[0,1]){var u,f;this.p.push(...t,...e,...n),this.c.push(s.r,s.g,s.b,r.r,r.g,r.b,o.r,o.g,o.b),this.f.push(l,l,l),(u=this.uv)==null||u.push(...a??[.5,.5,.5,.5,.5,.5]),(f=this.tile)==null||f.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new qt;return t.setAttribute("position",new Bt(this.p,3)),t.setAttribute("color",new Bt(this.c,3)),t.setAttribute("fold",new Bt(this.f,1)),this.uv&&t.setAttribute("uv",new Bt(this.uv,2)),this.tile&&t.setAttribute("tile",new Bt(this.tile,2)),t.computeBoundingSphere(),t}},He=class{p=[];c=[];f=[];seg(t,e,n=is,s=Qt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(s,s)}segSplit(t,e,n,s,r){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=s+1e-6||r<0)return this.seg(o,a,n,Qt);if(o[1]>=s-1e-6)return this.seg(o,a,n,r);let l=(s-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,s,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Qt),this.seg(c,a,n,r)}geometry(){let t=new qt;return t.setAttribute("position",new Bt(this.p,3)),t.setAttribute("color",new Bt(this.c,3)),t.setAttribute("fold",new Bt(this.f,1)),t}};function Wd(i,t,e,n){let r=i.uv?2:0,o=(f,h)=>{let d=f*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(f,h,d)=>({p:f.p.map((g,x)=>g+(h.p[x]-g)*d),c:f.c.map((g,x)=>g+(h.c[x]-g)*d),uv:f.uv&&h.uv?f.uv.map((g,x)=>g+(h.uv[x]-g)*d):null,tile:f.tile}),l=(f,h,d)=>{for(let g=0;g<3;g++){let x=f*3+g;for(let m=0;m<3;m++)i.p[x*3+m]=h[g].p[m],i.c[x*3+m]=h[g].c[m];if(i.uv&&h[g].uv)for(let m=0;m<r;m++)i.uv[x*2+m]=h[g].uv[m];if(i.tile&&h[g].tile)for(let m=0;m<2;m++)i.tile[x*2+m]=h[g].tile[m];i.f[x]=d}},c=(f,h)=>{var g,x;let d=i.p.length/9;for(let m of f)i.p.push(...m.p),i.c.push(...m.c),i.f.push(h),(g=i.uv)==null||g.push(...m.uv??[.5,.5]),(x=i.tile)==null||x.push(...m.tile??[0,1]);return d},u=i.p.length/9;for(let f=t;f<u;f++){let h=[o(f,0),o(f,1),o(f,2)],d=h.map(b=>b.p[1]>e+1e-6),g=h.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let b=0;b<3;b++)i.f[f*3+b]=n;continue}let x=i.f[f*3],m=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),p=d.filter(Boolean).length,v=p===1?d.indexOf(!0):d.indexOf(!1),y=h[v],_=h[(v+1)%3],M=h[(v+2)%3],w=m(y,_),A=m(M,y);p===1?(l(f,[y,w,A],n),c([w,_,M],x),c([w,M,A],x)):(l(f,[y,w,A],x),c([w,_,M],n),c([w,M,A],n))}}function Xd(i,t,e,n){let s=i.p.length/6;for(let r=t;r<s;r++){let o=i.p.slice(r*6,r*6+3),a=i.p.slice(r*6+3,r*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[r*2]=n,i.f[r*2+1]=n;continue}let u=(e-l[1])/(c[1]-l[1]),f=[l[0]+(c[0]-l[0])*u,e,l[2]+(c[2]-l[2])*u];for(let d=0;d<3;d++)i.p[r*6+d]=l[d],i.p[r*6+3+d]=f[d];let h=i.c.slice(r*6,r*6+3);i.p.push(...f,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ue=Math.PI/180;function kt(i,t){let e=new et(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function L_(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t}function rs(i,t=[]){let e=i.map(([n,s])=>new jt(n,s));return Mr.triangulateShape(e,t.map(n=>n.map(([s,r])=>new jt(s,r))))}function qd(i,t,e,n,s,r,o){let a=new et(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],x=t[(d+1)%4],m=e[d],p=e[(d+1)%4],v=x[0]-g[0],y=x[1]-g[1],_=Math.hypot(v,y);if(_<1e-6)continue;let w=.8+.28*((y/_*_l[0]-v/_*_l[1]+1)/2),A=(m[0]+p[0]-g[0]-x[0])/2*(-y/_)+(m[1]+p[1]-g[1]-x[1])/2*(v/_),b=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,s-n)))),S=kt(r,l(n)*w).lerp(a,b),R=kt(r,l(s)*w).lerp(a,b);i.tri([g[0],n,g[1]],[m[0],s,m[1]],[p[0],s,p[1]],S,R,R),i.tri([g[0],n,g[1]],[p[0],s,p[1]],[x[0],n,x[1]],S,R,S)}let[c,u,f,h]=e;Math.hypot(f[0]-c[0],f[1]-c[1])>1e-4&&(i.tri([c[0],s,c[1]],[f[0],s,f[1]],[u[0],s,u[1]],a),i.tri([c[0],s,c[1]],[h[0],s,h[1]],[f[0],s,f[1]],a))}function Yd(i,t,e,n,s,r,o,a,l,c){let u=new et(l),f=[];for(let d=0;d<c;d++){let g=d/c*Math.PI*2;f.push({y:r+Math.cos(g)*o,s:s+Math.sin(g)*o})}let h=(d,g)=>{let x=t(d,f[g%c].s);return[x[0],f[g%c].y,x[1]]};for(let d=0;d<c;d++){let g=(d+.5)/c*Math.PI*2,x=kt(a,.62+.4*Math.max(0,Math.cos(g)));i.tri(h(e,d),h(n,d+1),h(n,d),x),i.tri(h(e,d),h(e,d+1),h(n,d+1),x)}for(let d of[e,n]){let g=t(d,s),x=[g[0],r,g[1]];for(let m=0;m<c;m++)i.tri(x,h(d,m),h(d,m+1),u)}}function Ae(i,t,e,n,s,r,o={}){var g;let a=typeof n=="number"?()=>n:x=>Math.max(e+.002,n(x[0],x[1])),l=o.aoFrom??e,c=o.fold??Qt,u=x=>.5+.5*Math.min(1,Math.max(0,(x-l)/1.6)),f=(o.holes??[]).map(x=>L_(x)>0?[...x].reverse():x),h=f.length?[...t,...f.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:rs(t,f);if(o.topFace!==!1){let x=new et(r);for(let[m,p,v]of d){let y=h[m],_=h[p],M=h[v];i.tri([y[0],a(y),y[1]],[M[0],a(M),M[1]],[_[0],a(_),_[1]],x,x,x,void 0,o.topFold??c)}}if(o.bottom){let x=kt(s,.55);for(let[m,p,v]of d){let y=h[m],_=h[p],M=h[v];i.tri([y[0],e,y[1]],[_[0],e,_[1]],[M[0],e,M[1]],x,x,x,void 0,c)}}for(let x of[t,...f])for(let m=0;m<x.length;m++){let p=x[m],v=x[(m+1)%x.length],y=v[0]-p[0],_=v[1]-p[1],M=Math.hypot(y,_);if(M<1e-6||(g=o.skipSide)!=null&&g.call(o,p,v))continue;let A=.8+.28*((_/M*_l[0]-y/M*_l[1]+1)/2),b=a(p),S=a(v),R=kt(s,u(e)*A),T=kt(s,u(b)*A),P=kt(s,u(S)*A);i.tri([p[0],e,p[1]],[p[0],b,p[1]],[v[0],S,v[1]],R,T,P,void 0,c),i.tri([p[0],e,p[1]],[v[0],S,v[1]],[v[0],e,v[1]],R,P,R,void 0,c)}}var F={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},ft=kt(5995775,.3),Zt=kt(5995775,.17),Wt=kt(3662079,.45),Zs=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=jd(n)}rotated(t,e,n){let s=n*ue,r=Math.cos(s),o=Math.sin(s),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*r-(c-e)*o,e+(l-t)*o+(c-e)*r))}box(t,e,n,s,r,o,a,l=a,c=null){if(e-t<1e-4||o-r<1e-4||s-n<1e-4)return;let u=[this.tf(t,r),this.tf(t,o),this.tf(e,o),this.tf(e,r)];Ae(this.buf,Eu(u),n,s,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(u,n,s,c)}loft(t,e,n,s,r,o=r,a=null){if(s-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Eu(l)&&(l.reverse(),c.reverse()),qd(this.buf,l,c,n,s,r,o),a)for(let u=0;u<4;u++)this.line(c[u],c[(u+1)%4],s,s,a),this.line(l[u],c[u],n,s,a)}pad(t,e,n,s,r,o,a,l=a,c=.03,u=null){if(c=Math.min(c,(e-t)/2-.005,(o-r)/2-.005,(s-n)/2),c<.008)return this.box(t,e,n,s,r,o,a,l,u);this.loft([t+c,e-c,r+c,o-c],[t,e,r,o],n,n+c,a),s-n-2*c>.005&&this.box(t,e,n+c,s-c,r,o,a,a,u),this.loft([t,e,r,o],[t+c,e-c,r+c,o-c],s-c,s,a,l)}lyingCyl(t,e,n,s,r,o,a,l,c=l,u=12,f=null){let h=Math.min(a,r-s)/2;if(h<1e-4||o<1e-4)return;let d=(s+r)/2,g=t==="x"?e:n,x=t==="x"?n:e,m=(v,y)=>t==="x"?this.tf(v,y):this.tf(y,v),p=this.buf.p.length;if(Yd(this.buf,m,g-o/2,g+o/2,x,d,h,l,c,u),this.mirrored&&Pu(this.buf,p),f)for(let v of[g-o/2,g+o/2])for(let y=0;y<u;y++){let _=y/u*Math.PI*2,M=(y+1)/u*Math.PI*2;this.line(m(v,x+Math.sin(_)*h),m(v,x+Math.sin(M)*h),d+Math.cos(_)*h,d+Math.cos(M)*h,f)}}cyl(t,e,n,s,r,o,a=o,l=10,c=null){let u=[];for(let f=0;f<l;f++){let h=f/l*Math.PI*2;u.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(Ae(this.buf,Eu(u),s,r,o,a,{aoFrom:0,bottom:s>.05}),c)for(let f=0;f<l;f++)this.line(u[f],u[(f+1)%l],r,r,c)}seg(t,e,n,s,r,o,a=ft){this.line(this.tf(t,n),this.tf(s,o),e,r,a)}line(t,e,n,s,r){this.lines.seg([t[0],n,t[1]],[e[0],s,e[1]],r,Qt)}outline(t,e,n,s){for(let r=0;r<4;r++){let o=t[r],a=t[(r+1)%4];this.line(o,a,n,n,s),this.line(o,o,e,n,s)}}};function jd(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Eu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}function os(i,t,e,n,s,r,o=F.metal,a=!1){let l=t/2-r-s,c=e/2-r-s;for(let u of[-1,1])for(let f of[-1,1]){let h=u*l,d=f*c;a?i.loft([h-s*.3,h+s*.3,d-s*.3,d+s*.3],[h-s/2,h+s/2,d-s/2,d+s/2],0,n,o):i.box(h-s/2,h+s/2,0,n,d-s/2,d+s/2,o)}}function jr(i,t,e,n,s,r,o,a=null,l=!1){let c=(e-t)/o;for(let u=1;u<o;u++){let f=t+c*u;i.seg(f,n,r,f,s,r,Zt)}for(let u=0;u<o;u++){let f=t+c*(u+.5),h=a??s-.08;if(l)i.seg(f-Math.min(.1,c/4),h,r+.012,f+Math.min(.1,c/4),h,r+.012,Wt);else{let d=o>1?f+(u%2?-c/2+.06:c/2-.06):f+c/2-.06;i.seg(d,h-.08,r+.012,d,h+.08,r+.012,Wt)}}}function $d(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),u=n*.5,f=Math.min(.24,e*.28);os(i,t,e,.07,.05,.05,F.wood,!0),i.pad(r,o,.07,u-.08,a+.02,l,F.fabric,F.fabricTop,.04,ft),i.loft([r,o,a,a+f],[r+.01,o-.01,a,a+f*.5],u-.08,n,F.fabric,F.fabricTop,ft),i.pad(r,r+c,u-.08,n*.72,a+.02,l-.02,F.fabric,F.fabricTop,.04,ft),i.pad(o-c,o,u-.08,n*.72,a+.02,l-.02,F.fabric,F.fabricTop,.04,ft);let d=(o-c-(r+c))/s;for(let g=0;g<s;g++){let x=r+c+d*g+.02,m=x+d-.04;i.pad(x,m,u-.08,u+.05,a+f+.02,l-.06,F.cushion,F.cushion,.04),i.loft([x+.01,m-.01,a+f*.55,a+f+.14],[x+.03,m-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,F.cushion)}}function Zd(i,t,e,n,s){let r=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(s?.34:.45))),u=Math.min(.24,c*.28),f=Math.min(.2,c*.24),h=n*.5,d=n*.72,g=s?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,F.wood);x(r+.06,a+.06),x(o-.06,a+.06),s||x(o-.06,a+c-.06);for(let b of g)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(r,o,.07,h-.08,a+.02,a+c,F.fabric,F.fabricTop,.04,ft);for(let b of g){let[S,R]=b<0?[r+.02,r+c]:[o-c,o-.02];i.pad(S,R,.07,h-.08,a+c-.02,l,F.fabric,F.fabricTop,.04,ft)}i.loft([r,o,a,a+u],[r+.01,o-.01,a,a+u*.5],h-.08,n,F.fabric,F.fabricTop,ft);for(let b of g)b<0?i.loft([r,r+u,a+u,l],[r,r+u*.5,a+u,l-.01],h-.08,n,F.fabric,F.fabricTop,ft):i.loft([o-u,o,a+u,l],[o-u*.5,o,a+u,l-.01],h-.08,n,F.fabric,F.fabricTop,ft);for(let b of g){let[S,R]=b<0?[r+u,r+c]:[o-c,o-u];i.pad(S,R,h-.08,d,l-f,l,F.fabric,F.fabricTop,.04,ft)}s||i.pad(o-f,o,h-.08,d,a+.02,a+c-.02,F.fabric,F.fabricTop,.04,ft);let m=r+u,p=s?o-u:o-f,v=Math.max(1,Math.round((p-m)/.62)),y=(p-m)/v;for(let b=0;b<v;b++){let S=m+y*b+.02,R=S+y-.04;i.pad(S,R,h-.08,h+.05,a+u+.02,a+c-.04,F.cushion,F.cushion,.04),i.loft([S+.01,R-.01,a+u*.55,a+u+.14],[S+.03,R-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,F.cushion)}let _=a+c,M=l-f;if(M-_<.2)return;let w=Math.max(1,Math.round((M-_)/.62)),A=(M-_)/w;for(let b of g)for(let S=0;S<w;S++){let R=_+A*S+.02,T=R+A-.04;b<0?(i.pad(r+u+.02,r+c-.04,h-.08,h+.05,R,T,F.cushion,F.cushion,.04),i.loft([r+u*.55,r+u+.14,R+.01,T-.01],[r+u*.4,r+u*.4+.06,R+.03,T-.03],h+.03,n*.93,F.cushion)):(i.pad(o-c+.04,o-u-.02,h-.08,h+.05,R,T,F.cushion,F.cushion,.04),i.loft([o-u-.14,o-u*.55,R+.01,T-.01],[o-u*.4-.06,o-u*.4,R+.03,T-.03],h+.03,n*.93,F.cushion))}}function F_(i,t,e,n){let s=-e/2,r=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);os(i,t,e,.08,.06,.03,F.wood,!0),i.box(o,a,.08,l,s+.06,r,F.wood,F.woodTop,ft),i.pad(o+.03,a-.03,l,l+.2,s+.08,r-.03,F.white,F.whiteTop,.03),i.box(o,a,.08,n-.05,s,s+.07,F.wood,F.woodTop,ft),i.box(o,a,n-.05,n,s,s+.09,F.wood,F.woodTop,Zt);let c=l+.2,u=s+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,u,r-.01,F.cushion,F.fabricTop,.025,Zt),i.lyingCyl("x",0,u+.05,c-.02,c+.09,t-.02,.1,F.cushion,F.fabricTop,8);let f=t>1.2?2:1,h=(t-.2)/f;for(let d=0;d<f;d++){let g=o+.1+h*d,x=s+.12,m=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+h-.03-p,x+p*.5,x+m-p*.5],[g+.03,g+h-.03,x,x+m],c,c+.06,F.whiteTop),i.loft([g+.03,g+h-.03,x,x+m],[g+.03+p,g+h-.03-p,x+p*.5,x+m-p*.5],c+.06,c+.12,F.whiteTop,F.whiteTop,Zt)}}function D_(i,t,e,n){let s=Math.min(.46,n*.52);os(i,t,e,s-.04,.035,.02,F.wood,!0),i.box(-t/2,t/2,s-.04,s,-e/2,e/2,F.wood,F.woodTop,ft),i.pad(-t/2+.02,t/2-.02,s,s+.04,-e/2+.05,e/2-.03,F.cushion,F.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],s,n,F.wood,F.woodTop,ft)}function N_(i,t,e,n){os(i,t,e,n-.04,.06,.05,F.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.wood,F.woodTop,Wt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,F.body)}function U_(i,t,e,n){let s=-t/2,r=t/2;i.box(s,r,n-.035,n,-e/2,e/2,F.wood,F.woodTop,ft),i.box(s,s+.03,0,n-.035,-e/2+.03,e/2-.03,F.metal);let o=Math.min(.42,t*.32);i.box(r-o,r,0,n-.035,-e/2+.03,e/2-.02,F.body,F.bodyTop,ft);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(r-o,l,a,r,l,a,Zt);for(let l of[n*.2,n*.5,n*.82])i.seg(r-o/2-.07,l,a+.012,r-o/2+.07,l,a+.012,Wt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,F.dark,F.dark,Wt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,F.metal)}function Fi(i,t,e,n,s,r=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,F.body,F.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark),jr(i,-t/2,t/2,.08,n,e/2-.02,s,r,o)}function O_(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,F.wood,F.woodTop,ft),i.box(t/2-.025,t/2,0,n,-e/2,e/2,F.wood,F.woodTop,ft),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,F.body);let r=Math.max(2,Math.round(n/.38));for(let o=0;o<=r;o++){let a=Math.min(n-.025,n/r*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,F.wood,F.woodTop,Zt),o<r){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let u=.03+c*7%5*.008,f=n/r-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+u,a+.025,a+.025+f,-e/2+.04,e/2-.05,c%3?F.fabric:F.cushion,F.fabricTop),l+=u+.006,c++}}}}function B_(i,t,e,n){let s=Math.max(1,Math.round(t/.6));Fi(i,t,e-.02,n-.04,s,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,ft)}function z_(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,F.white,F.whiteTop,ft);let s=n*.62;i.seg(-t/2,s,e/2,t/2,s,e/2,Zt);let r=t/2-.06;i.seg(r,s+.08,e/2+.015,r,s+.4,e/2+.015,Wt),i.seg(r,s-.4,e/2+.015,r,s-.08,e/2+.015,Wt)}function k_(i,t,e,n){let s=e/2-tp;i.box(-t/2,t/2,.02,n,-e/2,s,F.body,F.bodyTop,ft),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,s-.05,F.dark);for(let r of[.35,.7,1.05,1.4])r>n-.15||(i.seg(-t/2+.03,r,s+.001,-.03,r,s+.001,Zt),i.seg(.03,r,s+.001,t/2-.03,r,s+.001,Zt))}var tp=.06;function ep(i,t,e,n,s){let r=i.p.length;V_(i,t,e,n,s),t.mirror&&Pu(i,r)}function V_(i,t,e,n,s){let r=t.rotation*ue,o=Math.cos(r),a=Math.sin(r),l=t.mirror?-1:1,c=(_,M)=>[t.x+l*_*o-M*a,t.z+l*_*a+M*o],u=e+.05,f=e+t.h-.02,h=new et(.75,.1,.14),d=new et(F.dark),g=new et(F.accent),x=t.w/2-.006,m=(_,M,w)=>{let A=w/p,b=new et(2043212).lerp(h,A),S=new et(F.body).lerp(h,A*.8),R=Math.cos(w),T=Math.sin(w),P=(D,N)=>c(_+M*(D*R-N*T),t.d/2+D*T+N*R),L=(D,N,U,k)=>{let[B,z,V,tt]=D;i.tri([B[0],N,B[1]],[z[0],N,z[1]],[V[0],U,V[1]],k),i.tri([B[0],N,B[1]],[V[0],U,V[1]],[tt[0],U,tt[1]],k)},C=(D,N,U,k,B,z,V,tt=V)=>{let Z=[P(D,z),P(N,z),P(N,B),P(D,B)];L([Z[0],Z[1],Z[1],Z[0]],U,k,tt),L([Z[3],Z[2],Z[2],Z[3]],U,k,V),L([Z[0],Z[3],Z[3],Z[0]],U,k,V),L([Z[1],Z[2],Z[2],Z[1]],U,k,V),L([Z[0],Z[1],Z[2],Z[3]],k,k,V),L([Z[3],Z[2],Z[1],Z[0]],U,U,V)};return C(0,x,u,f,-tp,0,S,b),C(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),C},p=1.83;m(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,s*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function G_(i,t,e,n){Fi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.dark,F.dark,ft);for(let[s,r,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=s*t/.6,l=r*e/.62;i.cyl(a,l,o,n,n+.004,F.dark,1451583,12,Wt)}}function H_(i,t,e,n){Fi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let s=Math.min(.5,t-.2);i.box(-t/2,-s/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,ft),i.box(s/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,ft),i.box(-s/2,s/2,n-.04,n,-e/2,-e/2+.1,F.whiteTop,F.whiteTop),i.box(-s/2,s/2,n-.04,n,e/2-.08,e/2,F.whiteTop,F.whiteTop),i.box(-s/2,s/2,n-.2,n-.17,-e/2+.1,e/2-.08,F.metal,F.metal,Wt),i.cyl(0,-e/2+.05,.02,n,n+.28,F.metal,F.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,F.metal)}function W_(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,F.white,F.whiteTop,ft),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,F.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,F.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,F.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,F.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,F.glass,F.glass,Wt),i.cyl(-t/2+.04,0,.02,n,n+.12,F.metal,F.metal,8)}function X_(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,F.whiteTop,F.whiteTop,ft),i.cyl(0,0,.04,.05,.052,F.metal,F.metal,8);for(let[s,r,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(s,.05,r,o,.05,a,Wt),i.seg(s,n,r,o,n,a,Wt),i.seg(o,.05,a,o,n,a,Wt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,F.metal,F.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,F.metal,F.metal,12,Wt)}function q_(i,t,e,n){let s=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+s,F.white,F.whiteTop,ft),i.box(-t*.3,t*.3,0,.36,-e/2+s-.02,e/2-.12,F.white,F.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,F.white,F.whiteTop,12,ft),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+s,-e/2+s+.05,F.whiteTop)}function Y_(i,t,e,n){Fi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,F.white,F.whiteTop,ft),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,F.glass,F.glass,Wt),i.cyl(0,-e/2+.06,.018,n,n+.2,F.metal,F.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,F.glass,F.glass,Wt)}function $_(i,t,e,n){Fi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let s=Math.min(t*.8,1.45),r=s*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,F.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,F.metal),i.box(-s/2,s/2,n+.1,n+.1+r,-e/2+.12,-e/2+.16,F.dark,F.dark,Wt)}function Z_(i,t,e,n){let s=Math.min(t,e)/2,r=Math.min(.4,n*.34);i.cyl(0,0,s*.62,0,r,F.pot,F.pot,10,ft),i.cyl(0,0,s*.08,r,n*.55,F.wood,F.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=s*(.95-.55*l),u=r+(n-r)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,u,u+(n-r)*.16,F.plant,F.plantTop,8,a===o-1?Zt:null)}}function J_(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,F.fabric,F.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[s,r,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(s,.014,r,o,.014,a,ft)}function K_(i,t,e,n){let s=Math.max(3,Math.round(n/.18)),r=n/s,o=e/s;for(let u=0;u<s;u++){let f=e/2-o*u,h=f-o,d=r*(u+1);i.box(-t/2,t/2,0,d,h,f,F.wood,F.woodTop),i.seg(-t/2,d,f,t/2,d,f,ft)}i.seg(-t/2,0,e/2,-t/2,r,e/2,ft);for(let u of[-t/2,t/2])i.seg(u,r,e/2,u,n,-e/2+o,Zt);let a=.9,l=t/2-.03,c=Math.max(1,s-4);i.seg(l,r+a,e/2-o/2,l,r*c+a,e/2-o*(c-.5),Wt);for(let u=0;u<c;u+=3){let f=e/2-o*(u+.5),h=r*(u+1);i.seg(l,h,f,l,h+a,f,Zt)}}function Q_(i,t,e,n){let{k:s,steps1:r,steps2:o,fw:a,landing:l,run:c,rise:u}=vd(t,e,n),f=-t/2,h=-t/2+a,d=t/2-a,g=t/2,x=-e/2+l;for(let A=0;A<r;A++){let b=e/2-c*A,S=u*(A+1);i.box(f,h,0,S,b-c,b,F.wood,F.woodTop),i.seg(f,S,b,h,S,b,ft)}i.seg(f,0,e/2,f,u,e/2,ft);let m=u*s,p=.2;i.box(f,h,0,m,-e/2,x,F.wood,F.woodTop),i.box(h,g,Math.max(0,m-p),m,-e/2,x,F.wood,F.woodTop),i.seg(f,m,x,h,m,x,ft);for(let A=0;A<o;A++){let b=x+c*A,S=u*(s+1+A);i.box(d,g,Math.max(0,S-u-p),S,b,b+c,F.wood,F.woodTop),i.seg(d,S,b,g,S,b,ft)}i.seg(f,u,e/2,f,m,x,Zt),i.seg(g,m,x,g,n,x+c*(o-1),Zt);let v=.9,y=h-.03,_=d+.03,M=x-.03,w=Math.max(1,o-4);i.seg(y,u+v,e/2-c/2,y,m+v,M,Wt),i.seg(y,m+v,M,_,m+v,M,Wt),i.seg(_,m+v,M,_,u*(s+w)+v,x+c*(w-.5),Wt);for(let A=0;A<r;A+=3){let b=e/2-c*(A+.5);i.seg(y,u*(A+1),b,y,u*(A+1)+v,b,Zt)}for(let A of[y,_])i.seg(A,m,M,A,m+v,M,Zt);for(let A=2;A<w;A+=3){let b=x+c*(A+.5);i.seg(_,u*(s+1+A),b,_,u*(s+1+A)+v,b,Zt)}}function j_(i,t,e,n){os(i,t,e,.12,.03,.04,F.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,F.wood,F.woodTop,ft),jr(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function ty(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,F.wood,F.woodTop,ft),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,F.dark);let s=Math.max(3,Math.round((n-.06)/.22)),r=e/2-.02;for(let o=1;o<s;o++){let a=.06+(n-.06)/s*o;i.seg(-t/2,a,r,t/2,a,r,Zt)}for(let o=0;o<s;o++){let a=.06+(n-.06)/s*(o+.5);i.seg(-.08,a,r+.012,.08,a,r+.012,Wt)}}function ey(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,F.wood,F.woodTop,ft),jr(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,F.body,F.bodyTop,ft),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.wood,F.woodTop,ft);let s=Math.max(2,Math.round(t/.25));for(let r=0;r<s;r++){let o=-t/2+t/s*(r+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,F.metal,F.metal)}}function Jd(i,t,e,n,s){let o=Math.min(.5,s?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,F.wood,F.woodTop,ft),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,F.wood,F.woodTop,ft),i.box(-t/2+(s?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,F.cushion,F.cushion,Zt),s&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,F.wood,F.woodTop,ft),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,F.wood,F.woodTop,ft),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,F.cushion,F.cushion,Zt))}function ny(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.8,0,.02,F.metal,F.metal,12),i.cyl(0,0,.025,.02,n-.05,F.metal,F.metal,6),i.cyl(0,0,s*.75,n*.35,n*.35+.015,F.metal,F.metal,12,Zt),i.cyl(0,0,s,n-.05,n,F.cushion,F.fabricTop,14,ft)}function iy(i,t,e,n){let s=Math.min(t,e)/2;i.box(-s,s,.04,.08,-.03,.03,F.metal),i.box(-.03,.03,.04,.08,-s,s,F.metal),i.cyl(0,0,.06,.02,.1,F.dark,F.dark,8),i.cyl(0,0,.025,.1,.44,F.metal,F.metal,6),i.box(-s*.75,s*.75,.44,.52,-s*.7,s*.75,F.fabric,F.cushion,ft),i.box(-s*.7,s*.7,.58,n,-s*.78,-s*.62,F.fabric,F.fabricTop,ft),i.box(-.03,.03,.5,.62,-s*.72,-s*.62,F.metal)}function sy(i,t,e,n){os(i,t,e,.08,.04,.05,F.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,F.fabric,F.cushion,ft)}function ry(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,F.body,F.bodyTop,ft),jr(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function oy(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,F.body,F.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark);let s=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,s,s+.01,F.dark,F.dark,Wt),i.seg(-t/2+.08,1.4,s+.02,t/2-.08,1.4,s+.02,Wt);for(let r of[.85,1.45])i.seg(-t/2,r,s,t/2,r,s,Zt);i.seg(t/2-.06,.5,s+.012,t/2-.06,.7,s+.012,Wt),i.seg(t/2-.06,1.6,s+.012,t/2-.06,1.8,s+.012,Wt)}function ay(i,t,e,n){let s=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+s,F.body,F.bodyTop,ft),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+s-.04,F.dark),jr(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+s,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,ft)}function ly(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,F.body,F.bodyTop,ft),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,F.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Wt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,F.whiteTop,F.whiteTop,ft)}function Kd(i,t,e,n,s){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,F.white,F.whiteTop,ft);let r=e/2-.012;i.seg(-t/2,n-.14,r,t/2,n-.14,r,Zt),i.seg(t/2-.16,n-.07,r,t/2-.08,n-.07,r,Wt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let u=c/l*Math.PI*2,f=(c+1)/l*Math.PI*2;i.seg(Math.cos(u)*a,o+Math.sin(u)*a,r,Math.cos(f)*a,o+Math.sin(f)*a,r,Wt),s||i.seg(Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,r,Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,r,Zt)}}function cy(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),F.wood,F.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,F.wood,F.woodTop,ft),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,F.white,F.whiteTop,Zt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,F.whiteTop,F.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,F.wood,F.woodTop);let r=t/2-.35;for(let o of[r-.18,r+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,ft);for(let o=.3;o<n-.2;o+=.28)i.seg(r-.18,o,e/2+.02,r+.18,o,e/2+.02,Zt)}function uy(i,t,e,n){let s=Math.min(t,e)/2;i.cyl(0,0,s*.4,0,.03,F.metal,F.metal,12),i.cyl(0,0,.05,.03,n-.04,F.wood,F.wood,8),i.cyl(0,0,s,n-.04,n,F.wood,F.woodTop,20,ft)}function hy(i,t,e,n){os(i,t,e,n-.03,.04,.03,F.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,F.wood,F.woodTop,ft),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,F.body,F.bodyTop,Zt)}function fy(i,t,e,n){let s=1.3-n/2;i.box(-.12,.12,s+n*.3,s+n*.7,-e/2,-e/2+.03,F.metal),i.box(-t/2,t/2,s,s+n,-e/2+.03,e/2,F.dark,F.dark,Wt)}function dy(i,t,e,n){let s=Ru;i.box(-t/2+.05,-t/2+.08,0,s,-e/2,-e/2+.03,F.metal),i.box(t/2-.08,t/2-.05,0,s,-e/2,-e/2+.03,F.metal),i.box(-t/2,t/2,s,s+n,-e/2+.02,e/2,F.white,F.whiteTop,ft);let r=Math.max(3,Math.round(t/.1));for(let o=1;o<r;o++){let a=-t/2+t/r*o;i.seg(a,s+.03,e/2+.002,a,s+n-.03,e/2+.002,Zt)}}function Js(i,t,e,n,s,r=20){for(let o=0;o<r;o++){let a=o/r*Math.PI*2,l=(o+1)/r*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,s,t+Math.cos(l)*n,e+Math.sin(l)*n,s,Wt)}}function py(i,t,e,n,s){let o=e/2;if(s==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.dark,F.body,ft),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Wt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,F.dark);return}if(s==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.white,F.whiteTop,ft),Js(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Wt);for(let a of[-1,1])Js(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,F.white,F.whiteTop,ft),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,F.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Wt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Zt)}function my(i,t,e,n){let s=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,F.dark),i.box(-t/2,t*.1,.05,.05+s*2,-s,s,F.metal,F.metal,ft);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+s*2+.003,-s,o,.05+s*2+.003,s,Zt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,F.dark,F.body,14,ft),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,F.glass,F.glass,14);let r=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*r,n*.83,Math.sin(a)*r,t*.28+Math.cos(l)*r,n*.83,Math.sin(l)*r,Wt)}}function gy(i,t,e,n,s){let r=Math.min(t,e)/2;if(i.cyl(0,0,r*.95,0,n*.08,F.dark,F.dark,16),i.cyl(0,0,r,n*.08,n*.78,F.dark,F.body,18,ft),i.cyl(0,0,r*.75,n*.78,n*.84,F.dark,F.body,16),s==="side6"){let a=r*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,F.dark,F.metal,ft),Js(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,F.dark,F.body);return}i.cyl(0,0,r*.45,n*.84,n*.95,F.dark,F.metal,16,ft);let o=r*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Wt)}i.box(-.02,.02,n*.95,n,-r*.35,r*.35,F.dark,F.body)}function xy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,F.white,F.whiteTop,ft);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,F.dark);let s=Math.min(n*.38,t*.3),r=-t*.15,o=n*.53;Js(i,r,o,s,e/2+.004,24),Js(i,r,o,s*.55,e/2+.004,16),i.seg(r-s,o,e/2+.005,r+s,o,e/2+.005,Zt),i.seg(r,o-s,e/2+.005,r,o+s,e/2+.005,Zt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,F.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Wt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Zt)}function by(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,F.white,F.whiteTop,ft);for(let r of[-1,1])Js(i,r*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Wt);for(let r of[-1,1])i.box(r*t*.25-t*.18,r*t*.25+t*.18,0,n*.5,-e/2,e/2,F.white,F.glass,Zt)}function vy(i,t,e,n){let s=gd-n*.4;i.box(-t/2,t/2,s+n*.25,s+n*.6,-e*.25,e*.25,F.metal,F.metal,ft),i.box(-t*.12,t*.12,s+n*.6,s+n*.8,-e*.12,e*.12,F.dark),i.box(-t*.1,t*.45,s+n*.8,s+n,-e*.15,e*.15,F.accent,F.accent)}function _y(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,F.dark,F.body,ft),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,F.dark,F.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Wt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Zt)}function yy(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,F.dark,F.body,ft);let r=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,u=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*r,o+Math.sin(c)*r,e/2+.003,Math.cos(u)*r,o+Math.sin(u)*r,e/2+.003,Wt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,F.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,F.dark,F.body)}function My(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,F.white,F.whiteTop,ft),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Zt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Zt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,F.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,F.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Wt)}function Sy(i,t,e,n,s){if(s==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,F.white,F.whiteTop,ft),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Wt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Zt);return}if(s==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,F.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,F.dark,F.body,ft),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Wt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,F.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,F.dark);let r=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/r;for(let a=0;a<r;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,F.white,F.whiteTop,ft);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Wt)}}var Ru=.12;function Cu(i,t){let e=wy(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function wy(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),s=Math.max(.005,i.h),r=hd(i.type);if(r){let l=t?pn(t,i):0,c=(r.x-r.w/2)*e,u=(r.x+r.w/2)*e,f=Math.min(.02,(u-c)*.05);return{x0:c+f,x1:u-f,y0:l+r.y*s+f,y1:l+(r.y+r.h)*s-f,z:(r.z+r.d/2)*n}}let o=t&&i.type!=="fridge_smart"?pn(t,i)-Hr(i):0,a=Ty(i,e,n,s,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function Ty(i,t,e,n,s){if(i.type==="pool_pump"){let r=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+r*2,z:r+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let r=Math.min(t,e)/2;return{x0:-r*.4,x1:r*.4,y0:n*.85,y1:n*.94,z:r*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let r=Math.min(t*.8,1.45),o=r*.56;return{x0:-r/2+.02,x1:r/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let r=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:r+.02,y1:r+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let r=s?pn(s,i):0;return{x0:.06,x1:t/2-.06,y0:r+n*.52+.01,y1:r+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Ru+.02,y1:Ru+n-.02,z:e/2+.004};if(i.type==="washer"||i.type==="dryer"){let r=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:r-o,y1:r+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function Ey(i,t,e,n,s){let r=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new et(1-s,1-s,1-s),a=new et(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],u=[t(-e/2-r,-n/2-r),t(e/2+r,-n/2-r),t(e/2+r,n/2+r),t(-e/2-r,n/2+r)],f=d=>[d[0],l,d[1]],h=i.p.length;i.tri(f(c[0]),f(c[1]),f(c[2]),o),i.tri(f(c[0]),f(c[2]),f(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(f(c[d]),f(u[d]),f(u[g]),o,a,a),i.tri(f(c[d]),f(u[g]),f(c[g]),o,a,o)}jd(t)&&Pu(i,h)}function Ml(i,t,e,n,s=0){Ay(i,t,e,n,s)}function Pu(i,t){let e=(n,s,r)=>{if(n)for(let o=0;o<r;o++){let a=s+r+o,l=s+2*r+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let s=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,s*3,1),e(i.uv,s*6,2),e(i.tile,s*6,2)}}function Ay(i,t,e,n,s){let r=Ie(n.type)?0:s-Hr(n);if(Ie(n.type)||Math.abs(r)<.001)return Qd(i,t,e,n,s);let o=i.p.length,a=t.p.length;Qd(i,t,s<.05?e:new ce,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=r;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=r}function Qd(i,t,e,n,s){let r=n.rotation*ue,o=Math.cos(r),a=Math.sin(r),l=n.mirror?-1:1,c=(g,x)=>[n.x+l*g*o-x*a,n.z+l*g*a+x*o],u=new Zs(i,t,c),f=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":$d(u,f,h,d,Math.max(1,Math.round((f-.4)/.62)));break;case"armchair":$d(u,f,h,d,1);break;case"sofa_l":Zd(u,f,h,d,!1);break;case"sofa_u":Zd(u,f,h,d,!0);break;case"bed":F_(u,f,h,d);break;case"chair":D_(u,f,h,d);break;case"table":N_(u,f,h,d);break;case"desk":U_(u,f,h,d);break;case"nightstand":Fi(u,f,h,d,1,d*.72,!0),u.seg(-f/2,d*.5,h/2-.02,f/2,d*.5,h/2-.02,Zt);break;case"wardrobe":Fi(u,f,h,d,Math.max(2,Math.round(f/.5)),d*.5);break;case"shelf":O_(u,f,h,d);break;case"kitchen":B_(u,f,h,d);break;case"fridge":z_(u,f,h,d);break;case"fridge_smart":k_(u,f,h,d);break;case"stove":G_(u,f,h,d);break;case"sink":H_(u,f,h,d);break;case"bathtub":W_(u,f,h,d);break;case"shower":X_(u,f,h,d);break;case"wc":q_(u,f,h,d);break;case"washbasin":Y_(u,f,h,d);break;case"tv_board":$_(u,f,h,d);break;case"plant":Z_(u,f,h,d);break;case"rug":J_(u,f,h);return;case"stairs":K_(u,f,h,d);break;case"stairs_u":Q_(u,f,h,d);break;case"stairwell":return;case"sideboard":j_(u,f,h,d);break;case"dresser":ty(u,f,h,d);break;case"tall_cabinet":Fi(u,f,h,d,1,d*.5);break;case"coat_rack":ey(u,f,h,d);break;case"bench":Jd(u,f,h,d,!1);break;case"corner_bench":Jd(u,f,h,d,!0);break;case"bar_stool":ny(u,f,h,d);break;case"office_chair":iy(u,f,h,d);break;case"stool":sy(u,f,h,d);break;case"kitchen_wall":ry(u,f,h,d);return;case"kitchen_tall":oy(u,f,h,d);break;case"island":ay(u,f,h,d);break;case"worktop":u.box(-f/2,f/2,Math.max(0,d-.04),d,-h/2,h/2,F.whiteTop,F.whiteTop,ft);return;case"dishwasher":ly(u,f,h,d);break;case"washer":Kd(u,f,h,d,!1);break;case"dryer":Kd(u,f,h,d,!0);break;case"bunk_bed":cy(u,f,h,d);break;case"table_round":uy(u,f,h,d);break;case"coffee_table":hy(u,f,h,d);break;case"tv_wall":fy(u,f,h,d);return;case"parking":{let x=[[-f/2,-h/2],[f/2,-h/2],[f/2,h/2],[-f/2,h/2]];for(let m=0;m<4;m++)u.seg(x[m][0],.012,x[m][1],x[(m+1)%4][0],.012,x[(m+1)%4][1],Zt);u.seg(-f*.15,.012,h/2-.45,0,.012,h/2-.2,ft),u.seg(0,.012,h/2-.2,f*.15,.012,h/2-.45,ft);return}case"robot_vacuum":u.box(-f*.45,f*.45,0,d,-h/2,-h/2+h*.3,F.white,F.whiteTop,ft),u.box(-f*.2,f*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,F.accent);return;case"radiator":dy(u,f,h,d);return;case"inverter":py(u,f,h,d,n.variant??null);return;case"grid_point":_y(u,f,h,d);break;case"wallbox":yy(u,f,h,d);return;case"pool_pump":my(u,f,h,d);break;case"pool_filter":gy(u,f,h,d,n.variant??null);break;case"pool_heat_pump":xy(u,f,h,d);break;case"pool_dosing":by(u,f,h,d);break;case"pool_valve":vy(u,f,h,d);return;case"meter":My(u,f,h,d);return;case"home_battery":if(Sy(u,f,h,d,n.variant??null),n.variant==="wall")return;break;default:{let g=Ie(n.type);if(g){if(Iu(u,g,f,h,d,s,null),s>.05)return}else u.box(-f/2,f/2,0,d,-h/2,h/2,F.body,F.bodyTop,ft)}}Ey(e,c,f,h,n.type==="plant"?.35:.5)}function Au(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=F;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Iu(i,t,e,n,s,r,o,a=null){let l=!!a;for(let c of t.parts){if(a&&!a(c))continue;let u=l?{...c,glow:!0,w:c.w+.006/e,d:c.d+.006/n,y:Math.max(0,c.y-.002/s),h:c.h+.004/s}:c,f=u.glow&&o!==null,h=f?o:Au(u.color,!1)??F.body,d=f?o:Au(u.top,!1)??Au(u.color,!0)??kt(h,1.25).getHex(),g=r+u.y*s,x=r+Math.min(s,(u.y+u.h)*s),m=u.edges==="glow"?is:u.edges==="faint"?Zt:u.edges?ft:null,p=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))p.lyingCyl(u.axis,u.x*e,u.z*n,g,x,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,h,d,14,m);else if(u.shape==="cyl")p.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,g,x,h,d,14,m);else if(u.shape==="loft"){let v=u.tx??u.x,y=u.tz??u.z,_=u.tw??u.w,M=u.td??u.d;p.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(v-_/2)*e,(v+_/2)*e,(y-M/2)*n,(y+M/2)*n],g,x,h,d,m)}else p.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,g,x,(u.z-u.d/2)*n,(u.z+u.d/2)*n,h,d,m)}}function np(i,t,e,n,s,r){let o=r*ue,a=Math.cos(o),l=Math.sin(o),c=(g,x)=>[e+g*a-x*l,s+g*l+x*a],u=new Zs(i,new He,c),f=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){u.cyl(0,0,.07,n-.03,n,f,h,12),u.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,f),u.cyl(0,0,.012,n-.075,n-.06,F.accent,F.accent,6);return}u.box(-.02,.02,n-.02,n+.02,-.06,-.03,f,h),u.box(-.01,.01,n-.01,n+.06,-.05,-.03,f,h),u.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,f,h),u.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,F.accent,10),u.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Sl(i,t,e,n,s,r=o=>!!o.glow){let o=e.rotation*ue,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,u=(f,h)=>[e.x+c*f*a-h*l,e.z+c*f*l+h*a];Iu(new Zs(i,new He,u),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s,r)}function wl(i,t,e,n,s){let r=e.rotation*ue,o=Math.cos(r),a=Math.sin(r),l=e.mirror?-1:1,c=(u,f)=>[e.x+l*u*o-f*a,e.z+l*u*a+f*o];Iu(new Zs(i,new He,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,s)}var Ry={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function Cy(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],s=e[0]-t[0],r=e[1]-t[1],o=Math.hypot(s,r)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let u=a.points[(c+1)%a.points.length],f=u[0]-l[0],h=u[1]-l[1],d=Math.hypot(f,h)||1;if(Math.abs((s*h-r*f)/(o*d))>.05)return!1;let g=Math.max(0,Math.min(1,((n[0]-l[0])*f+(n[1]-l[1])*h)/(d*d)));return Math.hypot(l[0]+f*g-n[0],l[1]+h*g-n[1])<.4}))}function sp(i,t){return t.type==="pool"?mu(i,t):Xs(i)+(t.offset??0)+(ts(t.type)?.01:Wr[t.type])}function to(i){return In(i)>=0?i:[...i].reverse()}function Py(i,t){let e=i[t];if(ts(e.type)||e.type==="pool")return[];let n=[];for(let s=0;s<i.length;s++){let r=i[s];s===t||!(r.cut&&s>t||r.type==="pool")||r.points.length<3||r.points.every(o=>se(o,e.points))&&n.push(to(r.points))}return n}function ip(i,t,e,n,s,r,o,a,l=0){let c=e[0]-t[0],u=e[1]-t[1],f=Math.hypot(c,u);if(f<1e-6)return;let h=-u/f*n*.5,d=c/f*n*.5;if(Math.abs(l)<1e-4){Ae(i,to([[t[0]+h,t[1]+d],[e[0]+h,e[1]+d],[e[0]-h,e[1]-d],[t[0]-h,t[1]-d]]),s,r,o,a,{aoFrom:s-1});return}let g=(_,M)=>[t[0]+h*M,_,t[1]+d*M],x=(_,M)=>[e[0]+h*M,_+l,e[1]+d*M],m=(_,M)=>{i.tri(_[0],_[1],_[2],M,M,M,void 0,Qt),i.tri(_[0],_[2],_[3],M,M,M,void 0,Qt),i.tri(_[0],_[2],_[1],M,M,M,void 0,Qt),i.tri(_[0],_[3],_[2],M,M,M,void 0,Qt)},p=new et(a),v=new et(kt(o,.9)),y=new et(kt(o,.6));m([g(r,1),x(r,1),x(r,-1),g(r,-1)],p),m([g(s,1),x(s,1),x(s,-1),g(s,-1)],y),m([g(s,1),x(s,1),x(r,1),g(r,1)],v),m([g(s,-1),x(s,-1),x(r,-1),g(r,-1)],v),m([g(s,1),g(s,-1),g(r,-1),g(r,1)],v),m([x(s,1),x(s,-1),x(r,-1),x(r,1)],v)}function rp(i,t,e){let n=Xs(e),s=e.outdoor??[];s.forEach((r,o)=>{if(r.points.length<3)return;let a=n+(r.offset??0),l=(m,p)=>a-Xr(r,m,p),c=a-(r.type==="pool"?0:r.slope??0),u=ts(r.type)&&r.height?r.height:Wr[r.type],f={...Ry[r.type],top:u},h=to(r.points),d=kt(f.edge,f.edgeAlpha),g=r.open&&(r.type==="fence"||r.type==="pergola")?h.length-1:-1,x=m=>{if(r.outline!==!1)for(let p=0;p<h.length;p++){if(p===g)continue;let v=h[p],y=h[(p+1)%h.length];t.seg([v[0],m(v[0],v[1]),v[1]],[y[0],m(y[0],y[1]),y[1]],d,Qt)}};switch(r.type){case"pool":{let m=new et(f.color),p=new et(f.side),v=mu(e,r),y=r.above?a+gu(r):a+.06;for(let[_,M,w]of rs(h)){let A=h[_],b=h[M],S=h[w];i.tri([A[0],v,A[1]],[S[0],v,S[1]],[b[0],v,b[1]],m,m,m,void 0,Qt)}for(let _=0;_<h.length;_++){let M=h[_],w=h[(_+1)%h.length];i.tri([w[0],v,w[1]],[w[0],y,w[1]],[M[0],y,M[1]],p,p,p,void 0,Qt),i.tri([w[0],v,w[1]],[M[0],y,M[1]],[M[0],v,M[1]],p,p,p,void 0,Qt)}if(r.above){let _=new et(2044240),M=new et(1187123);for(let w=0;w<h.length;w++){let A=h[w],b=h[(w+1)%h.length];i.tri([A[0],a,A[1]],[A[0],y,A[1]],[b[0],y,b[1]],M,_,_,void 0,Qt),i.tri([A[0],a,A[1]],[b[0],y,b[1]],[b[0],a,b[1]],M,_,M,void 0,Qt)}x(()=>a+.005)}x(()=>y),x(()=>v+.005);break}case"fence":{for(let m=0;m<h.length;m++){if(m===g)continue;let p=h[m],v=h[(m+1)%h.length],y=Math.hypot(v[0]-p[0],v[1]-p[1]),_=Math.max(1,Math.round(y/2)),M=g>=0&&m===g-1?_:_-1;for(let w=0;w<=M;w++){let A=w/_,b=p[0]+(v[0]-p[0])*A,S=p[1]+(v[1]-p[1])*A,R=l(b,S);Ae(i,to([[b-.04,S-.04],[b+.04,S-.04],[b+.04,S+.04],[b-.04,S+.04]]),R,R+f.top,f.side,f.color)}for(let w of[.35,.85])t.seg([p[0],l(p[0],p[1])+w*f.top,p[1]],[v[0],l(v[0],v[1])+w*f.top,v[1]],d,Qt)}break}case"pergola":{let m=f.top;for(let[p,v]of h){let y=l(p,v);Ae(i,to([[p-.06,v-.06],[p+.06,v-.06],[p+.06,v+.06],[p-.06,v+.06]]),y,y+m,f.side,f.color)}for(let p=0;p<h.length;p++){if(p===g)continue;let v=h[p],y=h[(p+1)%h.length],_=l(v[0],v[1])+m;if(ip(i,v,y,.12,_-.16,_,f.side,f.color,l(y[0],y[1])-l(v[0],v[1])),r.bracing){let M=l(v[0],v[1]),w=l(y[0],y[1]);t.seg([v[0],M+.25,v[1]],[y[0],w+m-.25,y[1]],d,Qt),t.seg([y[0],w+.25,y[1]],[v[0],M+m-.25,v[1]],d,Qt)}}if(Sd(h)){let p=wd(h),v=p.x1-p.x0,y=p.z1-p.z0,_=v>=y,M=_?v:y,w=Math.max(1,Math.round(M/.6));for(let A=1;A<w;A++){let b=(_?p.x0:p.z0)+M*A/w,S=_?[b,p.z0+.06]:[p.x0+.06,b],R=_?[b,p.z1-.06]:[p.x1-.06,b],T=l(S[0],S[1])+m;ip(i,S,R,.06,T-.04,T+.08,f.side,f.color,l(R[0],R[1])-l(S[0],S[1]))}}x((p,v)=>l(p,v)+m+.004);break}case"balcony":{Ae(i,h,a-.18,a+f.top,f.side,f.color,{aoFrom:a-.18}),x(()=>a+f.top+.004);let p=r.height&&r.height>.3?r.height:1,v=kt(9417983,.42),y=kt(3662079,.55);for(let _=0;_<h.length;_++){let M=h[_],w=h[(_+1)%h.length];if(Cy(e,M,w))continue;let A=Math.hypot(w[0]-M[0],w[1]-M[1]),b=a+f.top;t.seg([M[0],b+p,M[1]],[w[0],b+p,w[1]],y,Qt),t.seg([M[0],b+.1,M[1]],[w[0],b+.1,w[1]],v,Qt);let S=Math.max(1,Math.round(A/.12));for(let R=0;R<=S;R++){let T=R/S,P=M[0]+(w[0]-M[0])*T,L=M[1]+(w[1]-M[1])*T;t.seg([P,b,L],[P,b+p,L],R===0||R===S?y:v,Qt)}}break}default:{let m=(v,y)=>l(v,y)+f.top,p=Py(s,o);if(Ae(i,h,c,r.slope?m:a+f.top,f.side,f.color,{aoFrom:c,holes:p}),x((v,y)=>m(v,y)+.004),r.type==="hedge"&&x((v,y)=>l(v,y)+.004),r.outline!==!1)for(let v of p)for(let y=0;y<v.length;y++){let _=v[y],M=v[(y+1)%v.length];t.seg([_[0],m(_[0],_[1])+.004,_[1]],[M[0],m(M[0],M[1])+.004,M[1]],d,Qt)}}}})}var El=Math.PI/180,Iy=1.13,Ly=1.72,Lu=.025,as=.07,op=.25;function ap(i,t){var n;let e=[];for(let s of i.floors){if(t&&s.id!==t)continue;let{walls:r}=Pi(s.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},s.walls??[]);for(let o of r){if(!o.exterior&&!o.free)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);if(c<.5)continue;let u=l/c,f=-a/c,h=Math.min(s.height,o.height??s.height),d=((n=o.sources.find(m=>m.room_id===o.roomLeft))==null?void 0:n.edge)??null,g={floorId:s.id,room:o.roomLeft,edge:d,free:!!o.free},x=(m,p,v,y)=>e.push({key:m,section:null,side:"top",flat:!1,o:p,eu:v,es:[0,1,0],n:y,lu:c,ls:h,pitch:90,span:()=>[0,c],facing:[y[0],y[2]],wall:g});x(`wall:${s.id}:${o.id}`,[o.a[0]+u*o.right,s.elevation,o.a[1]+f*o.right],[a/c,0,l/c],[u,0,f]),o.free&&x(`wall:${s.id}:${o.id}:back`,[o.b[0]-u*o.left,s.elevation,o.b[1]-f*o.left],[-a/c,0,-l/c],[-u,0,-f])}}return e}var Fu="ground";function Du(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function lp(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],s=[-Math.sin(e),0,Math.cos(e)],r=Du(i),o=n[0]*t.u+s[0]*t.v,a=n[2]*t.u+s[2]*t.v,l=r?r.elevation+(t.base!=null?t.base:md(r,o,a)):t.base??0;return{key:Fu,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:s,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[s[0],s[2]],unbounded:!0}}function Fy(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Ks(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>Dy(v,bl(i,v,v.overhang??t.overhang)));let e=Fy(i);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(y=>y[0])),s=e.rooms.flatMap(v=>v.points.map(y=>y[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,u=e.elevation+e.height;if(t.type==="flat")return[cp("main",null,o,l,a,c,u+op)];let f=a-o>=c-l,h=t.ridge==="short"?!f:f,d=(h?c-l:a-o)/2,g=d*Math.tan(t.pitch*El),x=(v,y,_)=>h?[v,u+_,(l+c)/2+y]:[(o+a)/2+y,u+_,v],[m,p]=h?[o,a]:[l,c];return[-1,1].map(v=>Tl(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",x(m,v*d,0),x(p,v*d,0),x(m,0,g),t.pitch,()=>[0,p-m]))}function Dy(i,t){let e=Wn(i),n=vn(i),s=(x,m,p)=>{let[v,y]=e.at(x,m);return[v,p,y]},r=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-r),m=e.at(l,e.w+o);return[cp(i.id,i.id,Math.min(x[0],m[0]),Math.min(x[1],m[1]),Math.max(x[0],m[0]),Math.max(x[1],m[1]),i.eave_a+op)]}if(i.shape==="pent")return[Tl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let u=i.shape==="hip"||i.shape==="pyramid",f=i.shape==="pyramid"?(e.u1-e.u0)/2:u?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=u?e.u0+f-a:0,d=u?l-(e.u1-f):0,g=[];if(n.vr>.3){let x=Math.hypot(n.vr+r,n.rh-n.y(-r));g.push(Tl(`${i.id}:a`,i.id,"a",s(a,-r,n.y(-r)),s(l,-r,n.y(-r)),s(a,n.vr,n.rh),i.pitch_a,m=>[h*(m/x),c-d*(m/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Tl(`${i.id}:b`,i.id,"b",s(l,e.w+o,n.y(e.w+o)),s(a,e.w+o,n.y(e.w+o)),s(l,n.vr,n.rh),i.pitch_b,m=>[d*(m/x),c-h*(m/x)]))}if(u){let x=n.y(-r),m=n.y(e.w+o),p=[[`${i.id}:c`,"c",s(a,e.w+o,m),s(a,-r,x),s(e.u0+f,n.vr,n.rh)],[`${i.id}:d`,"d",s(l,-r,x),s(l,e.w+o,m),s(e.u1-f,n.vr,n.rh)]];for(let[v,y,_,M,w]of p){let A=Ny(v,i.id,y,_,M,w);A&&g.push(A)}}return g}function Ny(i,t,e,n,s,r){let o=eo(ls(s,n));if(o<.3)return null;let a=Di(ls(s,n)),l=ls(r,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],u=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],f=eo(u);if(f<.3)return null;let h=Di(u),d=Di(fp(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Di([-h[0],0,-h[2]]),x=Math.atan2(h[1],Math.hypot(h[0],h[2]))/El;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:f,pitch:x,span:p=>{let v=Math.min(1,Math.max(0,p/f));return[c*v,o-(o-c)*v]},facing:[g[0],g[2]]}}function Tl(i,t,e,n,s,r,o,a){let l=Di(ls(s,n)),c=Di(ls(r,n)),u=Di(fp(l,c));u[1]<0&&(u=[-u[0],-u[1],-u[2]]);let f=Di([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:u,lu:eo(ls(s,n)),ls:eo(ls(r,n)),pitch:o,span:a,facing:[f[0],f[2]]}}function cp(i,t,e,n,s,r,o){let a=s-e>=r-n,l=a?s-e:r-n,c=a?r-n:s-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function up(i){let t=i.module_w||Iy,e=i.module_h||Ly;return i.portrait===!1?[e,t]:[t,e]}function Uy(i){var t;return(t=i.layout)!=null&&t.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function hp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*El:i.wall?Math.min(90,Math.max(0,t.tilt??0))*El:0}function Oy(i,t){let[,e]=up(t),n=hp(i,t);return i.wall?e*Math.cos(n)+Lu:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Lu}function no(i,t,e=!1){let[n,s]=up(t),r=[],o=hp(i,t),a=s*Math.cos(o),l=Oy(i,t),c=Uy(t),u=Math.max(1,...c),f=new Set(t.skip??[]),h=!!i.wall&&n>i.lu+1e-6,d=(x,m,p)=>[i.o[0]+i.eu[0]*x+i.es[0]*m+i.n[0]*p,i.o[1]+i.eu[1]*x+i.es[1]*m+i.n[1]*p,i.o[2]+i.eu[2]*x+i.es[2]*m+i.n[2]*p],g=(x,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[p,v]=i.span(m);return x>=p-1e-6&&x<=v+1e-6};return c.forEach((x,m)=>{let p=t.align==="right"?u-x:t.align==="center"?(u-x)/2:0;for(let v=0;v<x;v++){let y=`${m}:${v}`,_=f.has(y);if(_&&!e)continue;let M=t.u+(v+p)*(n+Lu),w=t.v+m*l,A=M+n,b=w+(i.flat||i.wall?a:s);if(h){if(!(g((M+A)/2,w)&&g((M+A)/2,b)))continue}else if(![[M,w],[A,w],[A,b],[M,b]].every(([C,D])=>g(C,D)))continue;if(i.wall&&o>.001){let C=as+s*Math.sin(o),[D,N]=t.flip?[C,as]:[as,C],U=[d(M,w,D),d(A,w,D),d(A,b,N),d(M,b,N)],k=t.flip?w:b,B=[M+.05,A-.05].map(z=>[d(z,k,0),d(z,k,C)]);r.push({corners:U,posts:B,cell:y,skipped:_});continue}if(!i.flat){r.push({corners:[d(M,w,as),d(A,w,as),d(A,b,as),d(M,b,as)],posts:[],cell:y,skipped:_});continue}let S=.15,R=S+s*Math.sin(o),[T,P]=t.flip?[b,w]:[w,b],L=[d(M,T,S),d(A,T,S),d(A,P,R),d(M,P,R)];r.push({corners:L,posts:[M+.05,A-.05].flatMap(C=>[[d(C,T,0),d(C,T,S)],[d(C,P,0),d(C,P,R)]]),cell:y,skipped:_})}}),r}function ls(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function eo(i){return Math.hypot(i[0],i[1],i[2])}function Di(i){let t=eo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function fp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var By=.78,zy=1.18;function ky(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||By,module_h:i.h||zy}}function Nu(i,t){let e=no(i,ky(t))[0];if(!e)return null;let n=s=>[s[0]-i.n[0]*.05,s[1]-i.n[1]*.05,s[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}var io=1712952,so=2239816,mp=1318193,cs=kt(3662079,.9),Qs=kt(5995775,.45),Oe=.14,Vy=9427199,Gy=13226982,Hy=14936565,Wy={black:{glass:new et(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new et(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},Xy=kt(13226982,.5),qy=kt(13226982,.85),Yy=kt(16757575,.95),dp=new et(2845583),pp=new et(3818072);function $y(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function gp(i,t=new Map){let e=i.settings.roof,n=(e==null?void 0:e.type)==="custom"?null:Ky(i),s=(e==null?void 0:e.type)==="custom"?Qy(i,e.sections??[],e.overhang):n?[n]:[];return Jy(i,s),Zy(i,s,t),s}function Zy(i,t,e){var r;let n=((r=i.settings.roof)==null?void 0:r.windows)??[];if(!n.length||!t.length)return;let s=new Map(Ks(i).map(o=>[o.key,o]));for(let o of n){let a=s.get(o.face),l=a?Nu(a,o):null;if(!a||!l)continue;let c=a.section?t.find(P=>{var L;return(L=P.sections)==null?void 0:L.includes(a.section)}):t[0];if(!c)continue;let u=c.floor.elevation+c.base,f=P=>[P[0],P[1]-u,P[2]],[h,d,g,x]=l.map(f),m=e.get(o.id)??{open:0,tilt:0,cover:0},p=(P,L)=>[P[0]+a.n[0]*L,P[1]+a.n[1]*L,P[2]+a.n[2]*L],v=(P,L,C)=>[P[0]+(L[0]-P[0])*C,P[1]+(L[1]-P[1])*C,P[2]+(L[2]-P[2])*C],y=m.open>.02||m.tilt>.02?Yy:qy,_=[h,d,g,x].map(P=>p(P,.06));for(let P=0;P<4;P++)c.lines.seg(_[P],_[(P+1)%4],y);let M=(m.open>.02?30*Math.min(1,m.open):m.tilt>.5?12:0)*ue,w=Math.hypot(g[0]-d[0],g[1]-d[1],g[2]-d[2]),A=P=>{let L=a.es;return[P[0]-L[0]*w*Math.cos(M)+a.n[0]*w*Math.sin(M),P[1]-L[1]*w*Math.cos(M)+a.n[1]*w*Math.sin(M),P[2]-L[2]*w*Math.cos(M)+a.n[2]*w*Math.sin(M)]},b=p(x,.065),S=p(g,.065),R=A(b),T=A(S);c.solid.tri(R,T,S,dp),c.solid.tri(R,S,b,dp);for(let[P,L]of[[R,T],[T,S],[S,b],[b,R]])c.lines.seg(P,L,y);if(m.cover>.02){let P=Math.min(1,m.cover),L=p(v(b,R,P),.01),C=p(v(S,T,P),.01),D=p(b,.01),N=p(S,.01);c.solid.tri(L,C,N,pp),c.solid.tri(L,N,D,pp)}}}function Jy(i,t){var s;let e=((s=i.settings.roof)==null?void 0:s.solar)??[];if(!e.length||!t.length)return;let n=new Map(Ks(i).map(r=>[r.key,r]));for(let r of e){let o=n.get(r.face);if(!o)continue;let a=o.section?t.find(l=>{var c;return(c=l.sections)==null?void 0:c.includes(o.section)}):t[0];a&&Uu(a.solid,a.lines,o,r,a.floor.elevation+a.base)}}function Uu(i,t,e,n,s){let r=c=>[c[0],c[1]-s,c[2]],o=Wy[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of no(e,n)){let[u,f,h,d]=c.corners.map(r);i.tri(u,f,h,o.glass),i.tri(u,h,d,o.glass),i.tri(u,h,f,o.glass),i.tri(u,d,h,o.glass);let g=(p,v=.004)=>[p[0]+e.n[0]*v,p[1]+e.n[1]*v,p[2]+e.n[2]*v],x=(p,v,y)=>[p[0]+(v[0]-p[0])*y,p[1]+(v[1]-p[1])*y,p[2]+(v[2]-p[2])*y],m=[u,f,h,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(m[p],m[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(x(u,f,p/a)),g(x(d,h,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(g(x(u,d,p/l)),g(x(f,h,p/l)),o.cells);for(let[p,v]of c.posts)t.seg(r(p),r(v),Xy)}}function Ky(i){let t=i.settings.roof,e=$y(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(R=>R.points.map(T=>T[0])),s=e.rooms.flatMap(R=>R.points.map(T=>T[1])),r=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-r,a=Math.max(...n)+r,l=Math.min(...s)-r,c=Math.max(...s)+r,u=new ce,f=new He;if(t.type==="flat"){Ae(u,[[o,l],[a,l],[a,c],[o,c]],0,.25,io,so,{bottom:!0});let R=.252;for(let[T,P]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])f.seg([T[0],R,T[1]],[P[0],R,P[1]],cs),f.seg([T[0],0,T[1]],[P[0],0,P[1]],Qs);return{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,g=(d?c-l:a-o)/2,x=g*Math.tan(t.pitch*ue),m=(R,T,P)=>d?[R,P,(l+c)/2+T]:[(o+a)/2+T,P,R],[p,v]=d?[o,a]:[l,c],y=new et(so),_=new et(io),M=(R,T,P,L,C)=>{u.tri(R,T,P,C),u.tri(R,P,L,C)};for(let R of[-1,1]){M(m(p,R*g,0),m(v,R*g,0),m(v,0,x),m(p,0,x),y),M(m(p,R*g,-Oe),m(p,0,x-Oe),m(v,0,x-Oe),m(v,R*g,-Oe),_),M(m(p,R*g,-Oe),m(v,R*g,-Oe),m(v,R*g,0),m(p,R*g,0),_);for(let T of[p,v])M(m(T,R*g,-Oe),m(T,R*g,0),m(T,0,x),m(T,0,x-Oe),_);f.seg(m(p,R*g,0),m(v,R*g,0),Qs);for(let T of[p,v])f.seg(m(T,R*g,0),m(T,0,x),Qs)}let w=t.overhang,A=new et(mp),b=g-w,S=b*Math.tan(t.pitch*ue);for(let R of[p+w,v-w])u.tri(m(R,-b,-Oe),m(R,b,-Oe),m(R,0,S-Oe),A),u.tri(m(R,b,-Oe),m(R,-b,-Oe),m(R,0,S-Oe),A);return f.seg(m(p,0,x+.004),m(v,0,x+.004),cs),{floor:e,base:e.height,solid:u,lines:f,glass:new ce}}function Qy(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let s=new Map,r=new Map(Ks(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=Od(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=s.get(l);c||s.set(l,c={floor:a,base:0,solid:new ce,lines:new He,glass:new ce,sections:[],lift:!o.open}),c.sections.push(o.id);let u=xl(t,o),f=a.elevation+a.height>o.base+.05&&!o.dormer&&!u,h=t.filter(x=>x!==o&&xl(t,x)===o).flatMap(x=>Nd(o,x));for(let x of i.settings.roof.windows??[]){let m=r.get(x.face),p=m&&m.section===o.id?Nu(m,x):null;if(!p)continue;let v=p.map(y=>Ii(o,y[0],y[2]));h.push({u0:Math.min(...v.map(y=>y[0])),u1:Math.max(...v.map(y=>y[0])),v0:Math.min(...v.map(y=>y[1])),v1:Math.max(...v.map(y=>y[1]))})}let d=u?vu(u,o):o,g=null;if(u){let x=Wn(d),m=$s(u,{u0:0,u1:0,a:0,b:0}),p=v=>{let[y,_]=x.at(v,x.w/2),[M,w]=Ii(u,y,_);return Qr(m,M,w)??vn(u).y(w)};g=p(x.u0)<=p(x.u1)?0:1}jy(c.solid,c.lines,d,bl(i,d,d.overhang??e),a.elevation,c.glass,f,h,g)}return[...s.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function jy(i,t,e,n,s,r=i,o=!1,a=[],l=null){let c=Wn(e),u=vn(e),f=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,f.a),d=Math.max(0,f.b),g=c.w,x=c.u0-Math.max(0,f.u0),m=c.u1+Math.max(0,f.u1),p=(L,C,D)=>{let[N,U]=c.at(L,C);return[N,D-s,U]},v=new et(so),y=new et(io),_=new et(mp),M=(L,C)=>{for(let D=1;D+1<L.length;D++)i.tri(L[0],L[D],L[D+1],C)},w=[],A=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let L=e.eave_a,C=e.shape==="parapet",D=e.points&&e.points.length>=3?Fd(e,C?0:Math.max(0,Math.min(f.a,f.b,f.u0,f.u1))):C?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(x,-h),c.at(m,-h),c.at(m,g+d),c.at(x,g+d)];Ae(i,D,L-s,L-s+.25,io,so,{bottom:!0});for(let N=0;N<D.length;N++){let U=D[N],k=D[(N+1)%D.length];t.seg([U[0],L-s+.252,U[1]],[k[0],L-s+.252,k[1]],cs),t.seg([U[0],L-s,U[1]],[k[0],L-s,k[1]],Qs)}if(C){let N=z=>Ai(z)>=0?z:[...z].reverse(),U=N(D),k=bu(U,-.2),B=U.length;for(let z=0;z<B;z++){let V=N([U[z],U[(z+1)%B],k[(z+1)%B],k[z]]);Ae(i,V,L-s+.25,L-s+.65,io,so),t.seg([U[z][0],L-s+.652,U[z][1]],[U[(z+1)%B][0],L-s+.652,U[(z+1)%B][1]],cs),t.seg([k[z][0],L-s+.652,k[z][1]],[k[(z+1)%B][0],L-s+.652,k[(z+1)%B][1]],cs)}}}else{let L=$s(e,f);w=L.faces;for(let C of a)w=w.flatMap(D=>Ud(D,C));A=L.rim,b=L.ridges,S=L.gable}let R=!!e.open,T=new et(Vy);for(let L of w){if(R){for(let C=1;C+1<L.length;C++)r.tri(p(L[0][0],L[0][1],L[0][2]),p(L[C][0],L[C][1],L[C][2]),p(L[C+1][0],L[C+1][1],L[C+1][2]),T);continue}M(L.map(([C,D,N])=>p(C,D,N)),v),M(L.map(([C,D,N])=>p(C,D,N-Oe)),y)}for(let L=0;L<A.length;L++){let[C,D,N]=A[L],[U,k,B]=A[(L+1)%A.length];R||M([p(C,D,N),p(U,k,B),p(U,k,B-Oe),p(C,D,N-Oe)],y),t.seg(p(C,D,N),p(U,k,B),R?cs:Qs)}if(R){tM(i,t,c,u,f,p,s);return}for(let[[L,C,D],[N,U,k]]of b)t.seg(p(L,C,D+.004),p(N,U,k+.004),cs);let P=e.base;if(!o){if(S){let L=eM(S,P-Oe),C=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(L.length>=3)for(let D of C)M(L.map(([N,U])=>p(D,N,U)),_)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let L of[0,g]){let C=u.y(L)-Oe;C>P+.02&&M([p(c.u0,L,P),p(c.u1,L,P),p(c.u1,L,C),p(c.u0,L,C)],_)}else if(e.eave_a>P+.02)for(let[L,C,D,N]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])M([p(L,C,P),p(D,N,P),p(D,N,e.eave_a),p(L,C,e.eave_a)],_)}}function tM(i,t,e,n,s,r,o){let a=e.w,l=.12,c=.16,u=s.a>0,f=s.b>0,h=s.u0>0,d=s.u1>0,g=(p,v,y,_,M,w)=>{let A=[e.at(p,y),e.at(v,y),e.at(v,_),e.at(p,_)],b=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Ae(i,b<0?[...A].reverse():A,M-o,w-o,Gy,Hy,{bottom:!0})},x=o;for(let[p,v]of[[0,u],[a,f]]){if(!v)continue;let y=n.y(p)-.03,_=p===0?0:a-l;g(e.u0,e.u1,_,_+l,y-c,y),t.seg(r(e.u0,p,y-c),r(e.u1,p,y-c),Qs)}for(let[p,v]of[[e.u0,h],[e.u1-l,d]])if(v)for(let y=0;y<6;y++){let _=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(_),n.y(M))-.03;g(p,p+l,_,M,w-c,w)}let m=[];for(let[p,v]of[[0,u],[a-l,f]]){if(!v)continue;let y=e.u1-e.u0-l,_=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=_;M++){let w=e.u0+y*M/_;M===0&&!h||M===_&&!d||m.push([w,p])}}if(!u&&!f)for(let p of[e.u0,e.u1-l])(p===e.u0&&h||p!==e.u0&&d)&&m.push([p,a/2-l/2]);for(let[p,v]of m){let y=n.y(v+l/2)-.03-c;g(p,p+l,v,v+l,x,y)}}function eM(i,t){let e=[];for(let r=0;r<i.length;r++){let[o,a]=i[r];a>=t&&e.push([o,a]);let l=i[r+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],s=e[e.length-1];return s[1]>t&&e.push([s[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var ro={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},xp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Ni=.2,nM=.01,oo=8,Al=.42,Ou=.42;function yp(i,t,e,n=[],s=[],r){let{walls:o,open:a}=Pi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,P,L)=>{let C=r?r(T,P):null;return C===null?L:Math.max(.05,Math.min(L,C))},c=(T,P,L,C,D)=>{if(!r)return D;let N=D,U=Math.max(2,Math.ceil((C-L)/.25)+1);for(let k=0;k<U;k++){let B=L+(C-L)*k/(U-1);N=Math.min(N,l(T[0]+P[0]*B,T[1]+P[1]*B,D))}return N},u=new ce(!0,!0),f=[],h=new He,d=[];for(let T of i.rooms){if(T.points.length<3)continue;let P=Bu(T.points),L=xp[T.floor_material]??xp.wood,C=new et(L.color),D=n.flatMap(z=>{if(Vd(z,P))return[Su(z,.003)];if(!zd(z))return[];let V=vl(P,z);return V.length>=3&&Math.abs(Ai(V))>.01?[Su(Bu(V),.003)]:[]});d.push(...D);let N=[...P,...D.flat()],U=u.count;for(let[z,V,tt]of rs(P,D)){let Z=N[z],ct=N[V],ut=N[tt];u.tri([Z[0],0,Z[1]],[ut[0],0,ut[1]],[ct[0],0,ct[1]],C,C,C,[Z[0],Z[1],ut[0],ut[1],ct[0],ct[1]],Qt,L.tile)}f.push({roomId:T.id,start:U,end:u.count,color:L.color});let k=new et(ro.slab),B=z=>{for(let V=0;V<z.length;V++){let tt=z[V],Z=z[(V+1)%z.length];u.tri([tt[0],-Ni,tt[1]],[tt[0],0,tt[1]],[Z[0],0,Z[1]],k),u.tri([tt[0],-Ni,tt[1]],[Z[0],0,Z[1]],[Z[0],-Ni,Z[1]],k)}};B(P);for(let z of D){B([...Bu(z)].reverse());for(let V=0;V<z.length;V++){let tt=z[V],Z=z[(V+1)%z.length];h.seg([tt[0],.006,tt[1]],[Z[0],.006,Z[1]],is),h.seg([tt[0],-Ni,tt[1]],[Z[0],-Ni,Z[1]],Li)}}}let g=new Map,x=[],m=new Map;for(let T of o){let P="interior",L=null;if(T.exterior){let D=T.b[0]-T.a[0],N=T.b[1]-T.a[1],U=Math.hypot(D,N)||1,k=[N/U,-D/U],B=(Math.round(Math.atan2(k[1],k[0])/(2*Math.PI)*oo)%oo+oo)%oo;P=`s${B}`;let z=B/oo*2*Math.PI;L=[Math.cos(z),Math.sin(z)]}let C=g.get(P);C===void 0&&(C=x.length,g.set(P,C),x.push(L)),m.set(T,C)}let p=new Map,v=[];for(let T of i.openings){let P=$r(T,i.rooms,i.walls??[]);if(!P)continue;let L=Zr(o,T,P);if(!L)continue;let{wall:C,s:D}=L,N=Pl([C.b[0]-C.a[0],C.b[1]-C.a[1]]),U=Math.hypot(C.b[0]-C.a[0],C.b[1]-C.a[1]),k=Math.min(T.width,U),B=Math.max(0,Math.min(U-k,D-k/2)),z=P.room.points,V=C.free?N[0]*(z[1][0]-z[0][0])+N[1]*(z[1][1]-z[0][1])>0:C.roomLeft===T.room_id,tt=[-N[1],N[0]],Z=V?tt:[-tt[0],-tt[1]],ct=Math.min(c(C.a,N,B,B+k,Rl(C,i.height))-.02,T.sill+T.height),ut=Math.max(0,Math.min(T.sill,ct-.1)),St=[Z[1],-Z[0]],q=N[0]*St[0]+N[1]*St[1]>0,Y={opening:T,bucket:m.get(C),start:[C.a[0]+N[0]*B,C.a[1]+N[1]*B],axis:N,width:k,toRoom:Z,faceRoom:V?C.left:C.right,faceOut:V?C.right:C.left,sill:ut,top:ct,hingeAtStart:T.hinge==="left"===q,exterior:C.exterior};v.push(Y);let nt=p.get(C);nt||p.set(C,nt=[]),nt.push({s0:B,s1:B+k,sill:ut,top:ct,info:Y})}let y=Math.min(i.cut_height,i.height),_=new ce;for(let T of o){let P=m.get(T),L=Pl([T.b[0]-T.a[0],T.b[1]-T.a[1]]),C=(p.get(T)??[]).sort((tt,Z)=>tt.s0-Z.s0),D=Rl(T,i.height),N=[],U=[-1/0,...new Set(C.flatMap(tt=>[tt.s0,tt.s1])).values(),1/0].sort((tt,Z)=>tt-Z);for(let tt=0;tt+1<U.length;tt++){let Z=U[tt],ct=U[tt+1];if(ct-Z<1e-6)continue;let ut=Number.isFinite(Z)&&Number.isFinite(ct)?(Z+ct)/2:Number.isFinite(Z)?Z+1:ct-1,St=C.filter(nt=>nt.s0<ut&&nt.s1>ut).map(nt=>[nt.sill,nt.top]).sort((nt,ht)=>nt[0]-ht[0]),q=[],Y=-Ni;for(let[nt,ht]of St)nt>Y+1e-4&&q.push([Y,nt<1e-4?-nM:nt]),Y=Math.max(Y,ht);D>Y+1e-4&&q.push([Y,D]),N.push({t0:Z,t1:ct,ranges:q})}let k=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),B=r&&c(T.a,L,0,k,D)<D-.001,z=B?N.flatMap(tt=>{let Z=Math.max(tt.t0,-.5),ct=Math.min(tt.t1,k+.5),ut=Math.max(1,Math.ceil((ct-Z)/.3));return Array.from({length:ut},(St,q)=>({t0:q===0?tt.t0:Z+(ct-Z)*q/ut,t1:q===ut-1?tt.t1:Z+(ct-Z)*(q+1)/ut,ranges:tt.ranges,inner0:q>0,inner1:q<ut-1}))}):N.map(tt=>({...tt,inner0:!1,inner1:!1})),V=tt=>(tt[0]-T.a[0])*L[0]+(tt[1]-T.a[1])*L[1];for(let tt of z){let Z=sM(T.footprint,T.a,L,tt.t0,tt.t1);if(Z.length<3)continue;let ct=(q,Y)=>Math.abs(V(q)-Y)<1e-4,ut=(q,Y)=>tt.inner0&&ct(q,tt.t0)&&ct(Y,tt.t0)||tt.inner1&&ct(q,tt.t1)&&ct(Y,tt.t1),St=B?Math.min(...Z.map(([q,Y])=>l(q,Y,D))):D;for(let[q,Y]of tt.ranges){let nt=Math.min(Y,B?Math.max(...Z.map(([Ht,It])=>l(Ht,It,D))):Y);if(nt-q<1e-4||St-q<.01)continue;let ht=q>.01,lt=B&&Y>St,Dt=(Ht,It)=>Math.min(Y,l(Ht,It,D));if(q<y-1e-6){let Ht=nt>y+1e-6?Hd+P:ss+P,It=lt&&St<y?(Yt,ne)=>Math.min(y,Dt(Yt,ne)):Math.min(nt,y);Ae(_,Z,q,It,ro.wall,ro.wallTop,{aoFrom:0,bottom:ht,fold:ss+P,topFold:Ht,skipSide:ut})}nt>y+1e-6&&St>y+1e-6&&Ae(_,Z,Math.max(q,y),lt?Dt:nt,ro.wall,ro.wallTop,{aoFrom:0,fold:P,bottom:ht&&q>=y,skipSide:ut})}}}let M=o.flatMap(T=>T.footprint),w=oM(o,M),A=new He;A.p.push(...h.p),A.c.push(...h.c),A.f.push(...h.f);let b=(T,P)=>(p.get(T)??[]).filter(P);for(let T of w.edges){let P=m.get(T.wall);for(let[C,D]of Cl(T,b(T.wall,N=>N.sill<=.005)))A.seg([C[0],.004,C[1]],[D[0],.004,D[1]],Gd);for(let[C,D]of Cl(T,b(T.wall,N=>N.sill<y&&N.top>y)))A.seg([C[0],y,C[1]],[D[0],y,D[1]],wu,yl+P);let L=Rl(T.wall,i.height);for(let[C,D]of Cl(T,b(T.wall,N=>N.top>=L-.021))){if(!r){A.seg([C[0],L,C[1]],[D[0],L,D[1]],is,L<=y+1e-6?ss+P:P);continue}let N=Math.max(1,Math.ceil(Math.hypot(D[0]-C[0],D[1]-C[1])/.3));for(let U=0;U<N;U++){let k=[C[0]+(D[0]-C[0])*U/N,C[1]+(D[1]-C[1])*U/N],B=[C[0]+(D[0]-C[0])*(U+1)/N,C[1]+(D[1]-C[1])*(U+1)/N],z=l(k[0],k[1],L),V=l(B[0],B[1],L);A.seg([k[0],z,k[1]],[B[0],V,B[1]],is,Math.max(z,V)<=y+1e-6?ss+P:P)}}}for(let T of w.corners){let P=l(T.p[0],T.p[1],Rl(T.wall,i.height));A.segSplit([T.p[0],.004,T.p[1]],[T.p[0],P,T.p[1]],Li,Math.min(y,P),m.get(T.wall))}for(let T of p.values())for(let P of T)iM(A,P,y);let S=aM(w.edges,i.rooms,p);rp(_,A,i);for(let T of s)Uu(_,A,T.face,T.field,i.elevation);let R=[];for(let T of i.furniture){if(_d(T.type))continue;let P=_.count,L=A.p.length/6,C=pn(i,T);Ml(_,A,S,T,C),C+T.h>y+.05&&(Wd(_,P,y,Tu),Xd(A,L,y,Tu)),R.push({id:T.id,start:P,end:_.count})}return{floor:u.geometry(),roomTris:f,holes:d,walls:_.geometry(),lines:A.geometry(),shadow:S.geometry(),buckets:x,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(T=>m.get(T)),furnitureTris:R,roofUnder:r}}function iM(i,t,e){let{info:n}=t,s=n.bucket,r=(l,c,u)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,u,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?s:Qt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(r(c,l,a),r(c,l,t.top),Li,e,s);i.seg(r(t.s0,l,t.top),r(t.s1,l,t.top),Li,o(t.top)),t.sill>.01&&i.seg(r(t.s0,l,t.sill),r(t.s1,l,t.sill),Li,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(r(l,n.faceRoom,t.top),r(l,-n.faceOut,t.top),Li,o(t.top)),t.sill>.01&&i.seg(r(l,n.faceRoom,t.sill),r(l,-n.faceOut,t.sill),Li,o(t.sill)),t.sill<e&&t.top>e&&i.seg(r(l,n.faceRoom,e),r(l,-n.faceOut,e),wu,yl+s)}function sM(i,t,e,n,s){let r=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=bp(o,a=>r(a)-n)),Number.isFinite(s)&&(o=bp(o,a=>s-r(a))),o}function bp(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=t(s),a=t(r);if(o>=0&&e.push(s),o>=0!=a>=0){let l=o/(o-a);e.push([s[0]+(r[0]-s[0])*l,s[1]+(r[1]-s[1])*l])}}return e}var vp=i=>Math.round(i*1e3),ao=i=>`${vp(i[0])},${vp(i[1])}`,_p=(i,t)=>{let e=ao(i),n=ao(t);return e<n?`${e}|${n}`:`${n}|${e}`};function rM(i,t){let e=[];for(let n=0;n<i.length;n++){let s=i[n],r=i[(n+1)%i.length],o=r[0]-s[0],a=r[1]-s[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let f of t){let h=((f[0]-s[0])*o+(f[1]-s[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((f[0]-s[0])*a-(f[1]-s[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((f,h)=>f-h);let u=s;for(let f of c){let h=[s[0]+o*f,s[1]+a*f];ao(h)!==ao(u)&&e.push([u,h]),u=h}e.push([u,r])}return e}function oM(i,t){let e=i.map(l=>({wall:l,edges:rM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,u]of l){let f=_p(c,u);n.set(f,(n.get(f)??0)+1)}let s=[],r=new Map,o=(l,c,u)=>{let f=ao(l),h=r.get(f);h||r.set(f,h={p:l,wall:c,d:[]}),h.d.push(u)};for(let{wall:l,edges:c}of e)for(let[u,f]of c){if(n.get(_p(u,f))!==1)continue;let h=Math.hypot(f[0]-u[0],f[1]-u[1]);if(h<1e-4)continue;s.push({a:u,b:f,wall:l});let d=[(f[0]-u[0])/h,(f[1]-u[1])/h];o(u,l,d),o(f,l,d)}let a=[];for(let{p:l,wall:c,d:u}of r.values())u.some(f=>u.some(h=>Math.abs(f[0]*h[1]-f[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:s,corners:a}}function Cl(i,t){if(!t.length)return[[i.a,i.b]];let e=Pl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Pl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let s=f=>(f[0]-i.wall.a[0])*e[0]+(f[1]-i.wall.a[1])*e[1],r=s(i.a),o=s(i.b),a=Math.min(r,o),l=Math.max(r,o),c=[[a,l]];for(let f of t)c=c.flatMap(([h,d])=>{if(f.s1<=h||f.s0>=d)return[[h,d]];let g=[];return f.s0>h&&g.push([h,f.s0]),f.s1<d&&g.push([f.s1,d]),g});let u=f=>{let h=(f-r)/(o-r||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([f,h])=>h-f>1e-4).map(([f,h])=>r<=o?[u(f),u(h)]:[u(h),u(f)])}function aM(i,t,e){let n=new ce,s=new et(Ou,Ou,Ou),r=new et(1,1,1),o=.002;for(let a of i)for(let[l,c]of Cl(a,(e.get(a.wall)??[]).filter(u=>u.sill<=.005))){let u=c[0]-l[0],f=c[1]-l[1],h=Math.hypot(u,f);if(h<.05)continue;let d=[f/h,-u/h],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&se(g,p.points)))continue;let x=[l[0]+d[0]*Al,l[1]+d[1]*Al],m=[c[0]+d[0]*Al,c[1]+d[1]*Al];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[m[0],o,m[1]],s,r,r),n.tri([l[0],o,l[1]],[m[0],o,m[1]],[c[0],o,c[1]],s,r,s)}return n}function Mp(i,t){let e=t.furniture.filter(r=>r.type==="stairwell").map(Ri),n=i.filter(r=>r.elevation<t.elevation).sort((r,o)=>o.elevation-r.elevation)[0];if(!n)return Mu(e);let s=n.furniture.filter(r=>{var o;return(bd.has(r.type)||((o=Ie(r.type))==null?void 0:o.hole))&&n.elevation+r.h>=t.elevation-.3}).map(Ri);return Mu([...e,...s])}function Rl(i,t){return Math.min(t,i.height??t)}function Pl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Bu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],s=i[(e+1)%i.length];t+=n[0]*s[1]-s[0]*n[1]}return t>=0?i:[...i].reverse()}var lM=500,Sp=.12,wp=1.35,cM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Il=class{view={target:new G,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let s=(r,o,a)=>{t.addEventListener(r,o,a),this.listeners.push([r,o])};s("pointerdown",r=>this.onDown(r)),s("pointermove",r=>this.onMove(r)),s("pointerup",r=>this.onUp(r)),s("pointercancel",r=>this.onUp(r)),s("wheel",r=>this.onWheel(r),{passive:!1}),s("contextmenu",r=>r.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:u}=this.flight,f=Math.min(1,(t-c)/u),h=cM(f);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,f>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=zu(this.view.phi+this.velocity.phi,Sp,wp),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:s,theta:r,phi:o}=this.view;return this.camera.position.set(n.x+s*Math.sin(o)*Math.sin(r),n.y+s*Math.cos(o),n.z+s*Math.sin(o)*Math.cos(r)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},s=t.theta??n.theta;for(;s-n.theta>Math.PI;)s-=2*Math.PI;for(;s-n.theta<-Math.PI;)s+=2*Math.PI;let r={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:s,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=r,this.flight=null):this.flight={from:n,to:r,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){var e,n;if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&((n=(e=this.events).grab)!=null&&n.call(e,...this.local(t)))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let s=this.el.getBoundingClientRect(),r=t.clientX-s.left,o=t.clientY-s.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(r,o))},lM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){var r,o,a,l,c,u,f,h;let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){(o=(r=this.events).drag)==null||o.call(r,...this.local(t));return}let n=t.clientX-e.x,s=t.clientY-e.y;if(this.swiping){(l=(a=this.events).swipeMove)==null||l.call(a,t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let d=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&((u=(c=this.events).swipeStart)!=null&&u.call(c,this.down.x-d.left,this.down.y-d.top,t.clientX-this.down.x,t.clientY-this.down.y))){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},(h=(f=this.events).swipeMove)==null||h.call(f,t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let d=e.type==="mouse";if(d&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!d))this.pan(n,s);else{let x=this.el.clientHeight||1,m=-n/x*3.2,p=-s/x*2.4;this.view.theta+=m,this.view.phi=zu(this.view.phi+p,Sp,wp),this.velocity={theta:m,phi:p}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let d=this.pinchState();this.pinch&&d&&(this.zoom(this.pinch.dist/Math.max(1,d.dist)),this.pan(d.mid[0]-this.pinch.mid[0],d.mid[1]-this.pinch.mid[1])),this.pinch=d}this.events.change()}onUp(t){var e,n,s,r;if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),(n=(e=this.events).drop)==null||n.call(e);return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,(r=(s=this.events).swipeEnd)==null||r.call(s);return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let o=this.el.getBoundingClientRect(),a=t.clientX-o.left,l=t.clientY-o.top,c=performance.now();c-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(a,l)):(this.lastTap=c,this.events.tap(a,l))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=zu(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,s=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,r=new G(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new G(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(r,-t*s),this.view.target.addScaledVector(o,e*s/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function zu(i,t,e){return Math.min(e,Math.max(t,i))}function Ui(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function Tp(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Ep(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let s=1;s<i.length-1;s++){let[r,o,a]=[i[s-1],i[s],i[s+1]],l=Tp(r,o),c=Tp(o,a),u=Math.min(t,l*.45,c*.45),f=[(r[0]-o[0])/l,(r[1]-o[1])/l,(r[2]-o[2])/l],h=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(u<.005||f[0]*h[0]+f[1]*h[1]+f[2]*h[2]<-.999){n.push(o);continue}let d=[o[0]+f[0]*u,o[1]+f[1]*u,o[2]+f[2]*u],g=[o[0]+h[0]*u,o[1]+h[1]*u,o[2]+h[2]*u];for(let x=0;x<=e;x++){let m=x/e,p=(1-m)*(1-m),v=2*(1-m)*m,y=m*m;n.push([p*d[0]+v*o[0]+y*g[0],p*d[1]+v*o[1]+y*g[1],p*d[2]+v*o[2]+y*g[2]])}}return n.push(i[i.length-1]),n}var Ap=new et(7568261),Rp=new et(4869974),uM=new et(3116287),Cp=new et(3948872),ku=us([.35,.85,.4]),Pp=10;function us(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function lo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function Ip(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=us(lo(i,t));return[e,us(lo(i,e))]}function ei(i,t){let e=.5+.5*Math.max(0,t[0]*ku[0]+t[1]*ku[1]+t[2]*ku[2]);return i.clone().multiplyScalar(e)}function js(i,t,e,n,s,r=!1){let o=us([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=Ip(o),c=(u,f)=>{let h=f/Pp*Math.PI*2,d=[a[0]*Math.cos(h)+l[0]*Math.sin(h),a[1]*Math.cos(h)+l[1]*Math.sin(h),a[2]*Math.cos(h)+l[2]*Math.sin(h)];return{p:[u[0]+d[0]*n,u[1]+d[1]*n,u[2]+d[2]*n],n:d}};for(let u=0;u<Pp;u++){let f=c(t,u),h=c(t,u+1),d=c(e,u),g=c(e,u+1);i.tri(f.p,g.p,d.p,ei(s,f.n),ei(s,g.n),ei(s,d.n)),i.tri(f.p,h.p,g.p,ei(s,f.n),ei(s,h.n),ei(s,g.n)),r&&(i.tri([...t],h.p,f.p,ei(s,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,g.p,ei(s,o)))}}function hM(i,t,e,n,s,r,o,a){let l=us(lo(e,n)),c=(f,h,d)=>[t[0]+e[0]*f*s+n[0]*h*r+l[0]*d*o,t[1]+e[1]*f*s+n[1]*h*r+l[1]*d*o,t[2]+e[2]*f*s+n[2]*h*r+l[2]*d*o],u=[];for(let[f,h]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])u.push([f,[c(h,-.5,-.5),c(h,.5,-.5),c(h,.5,.5),c(h,-.5,.5)]]);for(let[f,h]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])u.push([f,[c(-.5,h,-.5),c(.5,h,-.5),c(.5,h,.5),c(-.5,h,.5)]]);for(let[f,h]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])u.push([f,[c(-.5,-.5,h),c(.5,-.5,h),c(.5,.5,h),c(-.5,.5,h)]]);for(let[f,h]of u){let d=ei(a,f);i.tri(h[0],h[1],h[2],d),i.tri(h[0],h[2],h[3],d),i.tri(h[0],h[2],h[1],d),i.tri(h[0],h[3],h[2],d)}}function Lp(i,t){if(t.points.length<2)return;let e=t.radius,n=Ep(t.points,e*2.2,4);for(let s=1;s<n.length;s++){let[r,o]=[n[s-1],n[s]];if(Math.hypot(o[0]-r[0],o[1]-r[1],o[2]-r[2])<1e-4)continue;let a=r[1]<-.02&&o[1]<-.02?Ap.clone().multiplyScalar(.55):Ap;js(i,r,o,e,a,s===1||s===n.length-1)}for(let s of t.fittings){let r=o=>[[s.p[0]-s.dir[0]*o,s.p[1]-s.dir[1]*o,s.p[2]-s.dir[2]*o],[s.p[0]+s.dir[0]*o,s.p[1]+s.dir[1]*o,s.p[2]+s.dir[2]*o]];if(s.kind==="sleeve"){let[o,a]=r(.03);js(i,o,a,e*1.22,Rp,!0)}else if(s.kind==="sight"){let[o,a]=r(.08);js(i,o,a,e*1.08,t.water?new et(...t.water).multiplyScalar(.9):new et(10475240),!0);for(let l of r(.08)){let[c,u]=[[l[0]-s.dir[0]*.02,l[1]-s.dir[1]*.02,l[2]-s.dir[2]*.02],[l[0]+s.dir[0]*.02,l[1]+s.dir[1]*.02,l[2]+s.dir[2]*.02]];js(i,c,u,e*1.3,Rp,!0)}}else{let[o,a]=r(.055);js(i,o,a,e*1.4,Cp,!0);let[l]=Ip(s.dir),c=Math.abs(s.dir[1])>.9?l:[0,1,0],u=[s.p[0]+c[0]*e*2,s.p[1]+c[1]*e*2,s.p[2]+c[2]*e*2];js(i,[s.p[0]+c[0]*e*1.3,s.p[1]+c[1]*e*1.3,s.p[2]+c[2]*e*1.3],u,e*.35,Cp,!0);let f=s.open===!1?us(lo(s.dir,c)):s.dir,h=us(lo(f,c)),d=[u[0]+f[0]*.045,u[1]+f[1]*.045,u[2]+f[2]*.045];hM(i,d,f,h,.1,.028,.012,uM)}}}var Vu=1.62,fM=.2,Gu=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let s=Pi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=s.walls;let r=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=$r(o,e.rooms,e.walls??[]);if(!l)continue;let c=Zr(this.walls,o,l);if(!c)continue;let u=r.get(c.wall)??[];u.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),r.set(c.wall,u);let f=c.wall,h=f.b[0]-f.a[0],d=f.b[1]-f.a[1],g=Math.hypot(h,d)||1,x=h/g,m=d/g,p=[f.a[0]+x*c.s,f.a[1]+m*c.s],v=f.left+.45,y=f.right+.45;this.doors.push({centre:p,p:[[p[0]-m*v,p[1]+x*v],[p[0]+m*y,p[1]-x*y]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:r.get(o)??[]})}}blocked(t,e=fM){for(let n of this.solids){let s=t[0]-n.a[0],r=t[1]-n.a[1],o=s*n.u[0]+r*n.u[1];if(o<-e||o>n.len+e)continue;let a=-s*n.u[1]+r*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),s=Math.max(1,Math.ceil(n/.08));for(let r=1;r<=s;r++){let o=r/s;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>se(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(f=>f.p).filter(f=>!this.blocked(f))],s=n.length,r=new Array(s).fill(1/0),o=new Array(s).fill(-1),a=new Array(s).fill(!1);r[0]=0;let l=new Map,c=(f,h)=>{let d=f<h?`${f}:${h}`:`${h}:${f}`,g=l.get(d);return g===void 0&&(g=this.clear(n[f],n[h]),l.set(d,g)),g};for(;;){let f=-1;for(let h=0;h<s;h++)!a[h]&&r[h]<1/0&&(f<0||r[h]<r[f])&&(f=h);if(f<0)return null;if(f===1)break;a[f]=!0;for(let h=0;h<s;h++){if(a[h]||h===f)continue;let d=Math.hypot(n[f][0]-n[h][0],n[f][1]-n[h][1]);r[f]+d>=r[h]||c(f,h)&&(r[h]=r[f]+d,o[h]=f)}}let u=[];for(let f=1;f>0;f=o[f])u.unshift(n[f]);return u}start(t=!1){for(let s of t?this.floor.openings:[]){if(s.type!=="door")continue;let r=$r(s,this.floor.rooms,this.floor.walls??[]);if(!r)continue;let o=Zr(this.walls,s,r);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=Math.hypot(l,c)||1,f=l/u,h=c/u,d=[a.a[0]+f*o.s,a.a[1]+h*o.s],g=[d[0]-h*(a.left+.9),d[1]+f*(a.left+.9)];if(!this.blocked(g))return{p:g,yaw:this.openYaw(g,Math.atan2(f,-h))}}let e=[...this.rooms].sort((s,r)=>Fp(r)-Fp(s))[0],n=e?this.freeNear(ns(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let s=Math.cos(e),r=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+s*o,t[1]+r*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,s=-1;for(let r=0;r<24;r++){let o=r/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>s&&(s=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let s=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(s))return s}return t}};function Fp(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[s,r]=e[n],[o,a]=e[(n+1)%e.length];t+=s*a-o*r}return Math.abs(t/2)}var Hu=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,s){this.v=t,this.map=e,this.surface=n,this.onRoom=s.onRoom;let r=s.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...r},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,s]of this.listeners)t.removeEventListener(e,n,s);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let s=t.start();return{x:s.p[0],z:s.p[1],yaw:s.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Vu}apply(){let{x:t,z:e,yaw:n,pitch:s}=this.state,r=this.floorY(),o=Math.cos(s);return this.v.camera.position.set(t,r,e),this.v.camera.lookAt(t+Math.cos(n)*o,r+Math.sin(s),e+Math.sin(n)*o),this.v.controls.view.target.set(t,r-Vu,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(ns(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,s=this.state,r=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(r+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(r-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(r+=-this.stick.y,a+=this.stick.x*.9),a&&(s.yaw+=a*1.6*e,n=!0),r||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(s.yaw)*r-Math.sin(s.yaw)*o)*l,u=(Math.sin(s.yaw)*r+Math.cos(s.yaw)*o)*l;this.move(c,u),n=!0}else if(this.path.length){let[l,c]=this.path[0],u=l-s.x,f=c-s.z,h=Math.hypot(u,f),d=1.4*e;h<=d?(s.x=l,s.z=c,this.path.shift()):(s.x+=u/h*d,s.z+=f/h*d,this.turnTo=Math.atan2(f,u)),n=!0}if(this.turnTo!==null){let l=this.turnTo-s.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(s.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,s=[n.x+t,n.z+e];if(!this.map.blocked(s)){n.x=s[0],n.z=s[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=(t==null?void 0:t.id)??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),s=(t-n.left)/n.width*2-1,r=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,u=this.v.camera.fov*Math.PI/180,f=Math.tan(u/2),h=n.width/n.height,d=Math.cos(a),g=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],m=[g[1]*x[2]-g[2]*x[1],g[2]*x[0]-g[0]*x[2],g[0]*x[1]-g[1]*x[0]],p=[-m[0],-m[1],-m[2]],v=[g[0]+x[0]*s*f*h+p[0]*r*f,g[1]+x[1]*s*f*h+p[1]*r*f,g[2]+x[2]*s*f*h+p[2]*r*f];if(v[1]>=-.02)return null;let y=Vu/-v[1];return[l+v[0]*y,c+v[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!(c!=null&&c.capture)])},e=null;t(this.surface,"pointerdown",o=>{var a,l;e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},(l=(a=this.surface).setPointerCapture)==null||l.call(a,o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let s=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),r=o=>{var a,l;return!!((l=(a=o.composedPath()[0])==null?void 0:a.closest)!=null&&l.call(a,"input, textarea, select"))};t(window,"keydown",o=>{!s(o)||r(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{s(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function dM(i,t){let e=Ie(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Wu(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let s=n.type==="parking"?t.get(n.id):void 0,r=s?dM(n,s):null;return r?[n,r]:[n]});return{...i,furniture:e}}function Xu(i,t){let e=[],n=[],s=[],r=[],o=[];for(let{face:l,field:c}of i){let u=e.length/3,f=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=pM(c.id)%1e3/1e3;for(let x of no(l,c)){let[m,p,v,y]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),_=[[m,0,0],[p,1,0],[v,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,A,b]=_[M];e.push(w[0],w[1],w[2]),n.push(A,b),s.push(f,h),r.push(d)}}let g=e.length/3-u;g&&o.push({id:c.id,start:u,count:g})}if(!e.length)return null;let a=new qt;return a.setAttribute("position",new Bt(e,3)),a.setAttribute("uv",new Bt(n,2)),a.setAttribute("aCells",new Bt(s,2)),a.setAttribute("aPhase",new Bt(r,1)),a.setAttribute("aLevel",new Bt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function co(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,s=!1;for(let r of i.ranges){let o=Math.min(1,Math.max(0,t.get(r.id)??0));n.fill(o,r.start,r.start+r.count),o>.02&&(s=!0)}return e.needsUpdate=!0,s}function qu(i){let t=new le({transparent:!0,blending:Re,depthWrite:!1,side:xe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function pM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Np=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,mM=`
  uniform float uTime;
  uniform vec3 uColor;
  uniform float uLevel;
  uniform float uFlow;
  uniform float uHeat;
  varying vec2 vXZ;
  float wave(vec2 p, float t) {
    return sin(p.x * 3.1 + t * 1.3) * sin(p.y * 2.7 - t * 1.1) + 0.5 * sin((p.x + p.y) * 4.3 + t * 1.7);
  }
  void main() {
    float t = uTime * (0.3 + 1.5 * uFlow);
    float c = wave(vXZ, t) + wave(vXZ * 1.7 + 3.0, t * 1.3);
    // bright lines where the waves cross: the caustics of light under moving water
    float caustic = pow(clamp(1.0 - abs(c) * 0.55, 0.0, 1.0), 5.0);
    vec3 col = uColor * uLevel * (0.55 + (0.35 + 0.6 * uFlow) * caustic);
    col += vec3(1.0, 0.42, 0.12) * uHeat * 0.07 * (0.6 + 0.4 * sin(t * 1.7 + vXZ.x * 2.0 + vXZ.y));
    gl_FragColor = vec4(col, 1.0);
  }
`,gM=Np,xM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Dp(i,t){let e=[];for(let[s,r,o]of rs(i))for(let a of[s,o,r])e.push(i[a][0],t,i[a][1]);let n=new qt;return n.setAttribute("position",new Bt(e,3)),n}function Up(i,t){let e=new Ze;for(let n of i){if(n.points.length<3)continue;let s=new Vt(Dp(n.points,n.y+.004),new Qe({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0}},vertexShader:Np,fragmentShader:mM,transparent:!0,blending:Re,depthWrite:!1,side:xe}));if(s.renderOrder=5,s.frustumCulled=!1,e.add(s),n.cover>.02){let r=n.points.map(x=>x[0]),o=n.points.map(x=>x[1]),[a,l,c,u]=[Math.min(...r),Math.max(...r),Math.min(...o),Math.max(...o)],f=l-a>=u-c,h=Math.min(1,n.cover),d=f?[[a-.1,c-.1],[a+(l-a)*h,c-.1],[a+(l-a)*h,u+.1],[a-.1,u+.1]]:[[a-.1,c-.1],[l+.1,c-.1],[l+.1,c+(u-c)*h],[a-.1,c+(u-c)*h]],g=vl(n.points,d);if(g.length>=3){let x=new Vt(Dp(g,n.y+.03),new Qe({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:gM,fragmentShader:xM,transparent:!0,side:xe}));x.renderOrder=6,e.add(x);let m=[];for(let v=0;v<g.length;v++){let y=g[v],_=g[(v+1)%g.length];m.push(y[0],n.y+.032,y[1],_[0],n.y+.032,_[1])}let p=new qt;p.setAttribute("position",new Bt(m,3)),e.add(new ln(p,new nn({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Op(i){var t,e,n;for(let s of i.children)(t=s.geometry)==null||t.dispose(),(n=(e=s.material)==null?void 0:e.dispose)==null||n.call(e);i.clear()}var Bp=["neon","blueprint","day"];function zp(i){return Bp.indexOf(i)}var Ll={value:new G(.22,.88,1)},Fl={value:0};function kp(i){let t=/^#?([0-9a-f]{6})$/i.exec((i==null?void 0:i.trim())??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var bM=`
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
`;function Xn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(r,o)=>{n(r,o),r.uniforms.uTheme=t,r.uniforms.uAccent=Ll,r.uniforms.uAccentOn=Fl,r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
${bM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}`,i}function Dl(i){return i==="day"?Mi:Re}var uo=.012,vM=.012;function Gp(i,t,e,n,s,r=[],o){let a=[],l=[],c=[],u=[],f=(p,v,y,_,M,w,A)=>{for(let b of[p,v,y,p,y,_])a.push(b[0],b[1],b[2]),l.push(M[0],M[1],M[2]),c.push(w),u.push(A)};i.rooms.forEach((p,v)=>{if(p.points.length<3)return;let y=p.points.map(T=>T[0]),_=p.points.map(T=>T[1]),M=Math.min(...y),w=Math.min(..._),A=Math.max(...y),b=Math.max(..._),S=Math.max(1,Math.ceil((A-M)/s)),R=Math.max(1,Math.ceil((b-w)/s));for(let T=0;T<S;T++)for(let P=0;P<R;P++){let L=M+(T+.5)*s,C=w+(P+.5)*s;if(!se([L,C],p.points)||r.some(B=>se([L,C],B)))continue;let D=M+T*s,N=w+P*s,U=Math.min(D+s,A),k=Math.min(N+s,b);f([D,uo,N],[D,uo,k],[U,uo,k],[U,uo,N],[0,1,0],v,-1)}});let h=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!ts(p.type));if(d.length){let p=d.flatMap(b=>b.points.map(S=>S[0])),v=d.flatMap(b=>b.points.map(S=>S[1])),y=Math.floor(Math.min(...p)/s)*s,_=Math.floor(Math.min(...v)/s)*s,M=Math.max(1,Math.ceil((Math.max(...p)-y)/s)),w=Math.max(1,Math.ceil((Math.max(...v)-_)/s)),A=(b,S,R)=>sp(i,b)-(b.type==="pool"?0:Xr(b,S,R))+uo;for(let b=0;b<M;b++)for(let S=0;S<w;S++){let R=y+b*s,T=_+S*s,P,L=[R+s/2,T+s/2];P=d.find(D=>D.type==="pool"&&se(L,D.points));for(let D=d.length-1;D>=0&&!P;D--)se(L,d[D].points)&&(P=d[D]);if(!P)continue;let C=(D,N)=>[D,A(P,D,N),N];f(C(R,T),C(R,T+s),C(R+s,T+s),C(R+s,T),[0,1,0],h,-1)}}let g=Math.min(i.cut_height,i.height),x=[];t.forEach((p,v)=>{let y=Math.min(i.height,p.height??i.height),_=Math.min(g,y-.02),M=p.b[0]-p.a[0],w=p.b[1]-p.a[1],A=Math.hypot(M,w);if(A<.05)return;let b=[M/A,w/A],S=[-b[1],b[0]],R=e[v],T=yM(p,b,A,n),P=(N,U)=>N?i.rooms.findIndex(k=>k.id===N):U?h:-1;x.push({a:p.a,b:p.b,h:y,ra:P(p.roomLeft,!1),rb:P(p.roomRight,p.exterior),gaps:T});let L=(N,U,k)=>[U,k,...N.filter(B=>B>U+.005&&B<k-.005)].sort((B,z)=>B-z).filter((B,z,V)=>z===0||B>V[z-1]+.005),C=L([_,(_+y)/2,...T.flatMap(N=>[N.y0+.01,N.y1-.01])],.02,y-.02),D=L(T.flatMap(N=>[N.s0,N.s1]),0,A);for(let N of[1,-1]){let U=N>0?p.roomLeft:p.roomRight,k=U?i.rooms.findIndex(Z=>Z.id===U):p.exterior?h:-1;if(k<0)continue;let B=(N>0?p.left:p.right)+vM,z=[S[0]*N,S[1]*N],V=(Z,ct)=>[p.a[0]+b[0]*Z+z[0]*B,ct,p.a[1]+b[1]*Z+z[1]*B],tt=Z=>{let ct=V(Z,0),ut=o==null?void 0:o(ct[0],ct[2]);return ut==null?1/0:ut-.02};for(let Z=0;Z<D.length-1;Z++){let ct=D[Z+1]-D[Z],ut=Math.max(1,Math.ceil(ct/s));for(let St=0;St<ut;St++){let q=D[Z]+ct/ut*St,Y=D[Z]+ct/ut*(St+1),nt=(q+Y)/2;for(let ht=0;ht<C.length-1;ht++){let lt=C[ht],Dt=C[ht+1];if(Dt-lt<.01)continue;let Ht=(lt+Dt)/2;if(T.some(Xt=>nt>Xt.s0&&nt<Xt.s1&&Ht>Xt.y0&&Ht<Xt.y1))continue;let It=lt>=g-1e-6?R:ss+R,Yt=Math.min(Dt,tt(q)),ne=Math.min(Dt,tt(Y));Yt<=lt+.005&&ne<=lt+.005||f(V(q,lt),V(Y,lt),V(Y,Math.max(lt,ne)),V(q,Math.max(lt,Yt)),[z[0],0,z[1]],k,It)}}}}});let m=[];for(let p of n){if(p.opening.type!=="door")continue;let v=t.find(M=>Hp(M,p)&&_M(M,p));if(!v||!v.roomLeft||!v.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===v.roomLeft),_=i.rooms.findIndex(M=>M.id===v.roomRight);y<0||_<0||m.push({id:p.opening.id,a:y,b:_,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(u),doors:m,blockers:x}}function Hp(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/s<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/s)>.99}function _M(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],s=Math.hypot(e,n)||1,r=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((r-i.a[0])*e+(o-i.a[1])*n)/s;return a>-.05&&a<s+.05}function yM(i,t,e,n){let s=[];for(let r of n){if(!Hp(i,r))continue;let o=(r.start[0]-i.a[0])*t[0]+(r.start[1]-i.a[1])*t[1],l=r.axis[0]*t[0]+r.axis[1]*t[1]>0?o:o-r.width;l>e||l+r.width<0||s.push({s0:l,s1:l+r.width,y0:r.sill-.01,y1:r.top+.01})}return s}function MM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function SM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Vp(i,t,e,n,s,r,o){let a=t-i.x,l=e-i.y,c=n-i.z,u=a*a+l*l+c*c,f=Math.sqrt(u)||1e-6,h=SM(i),d=1/(1+u/(h*h)),g=d*Math.sqrt(d),x=Math.max(0,-(a*s+l*r+c*o)/f);return i.level*g*(.2+.8*x)*MM(i.kind,l/f)}function Wp(i,t,e=.7,n=[]){let s=[...t];i.doors.forEach((u,f)=>{let h=n[f]??.5;if(!(h<=.01))for(let[d,g]of[[u.a,u.b],[u.b,u.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let v=p.x-u.x,y=p.y-u.y,_=p.z-u.z,M=Math.hypot(v,y,_)||1,w=Vp(p,u.x,u.y,u.z,v/M,y/M,_/M);x[0]+=p.color[0]*w,x[1]+=p.color[1]*w,x[2]+=p.color[2]*w}let m=Math.max(x[0],x[1],x[2]);m<.01||s.push({x:u.x,y:u.y,z:u.z,color:[x[0]/m,x[1]/m,x[2]/m],level:Math.min(1,m*.9*(.35+.65*h)),kind:"wall",room:g})}});let r=new Map;for(let u of s){let f=i.blockers.filter(d=>d.ra===u.room||d.rb===u.room),h={...u,color:u.color.map(d=>Math.pow(d,1.5)),walls:f};r.set(u.room,[...r.get(u.room)??[],h])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let u=0;u<l.length;u++){let f=r.get(l[u]);if(!f)continue;let h=u*3,d=0,g=0,x=0;for(let m of f){if(m.walls.length&&wM(m,m.walls,o[h],o[h+1],o[h+2]))continue;let p=Vp(m,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);d+=m.color[0]*p,g+=m.color[1]*p,x+=m.color[2]*p}c[h]=1-Math.exp(-d*e*1.6),c[h+1]=1-Math.exp(-g*e*1.6),c[h+2]=1-Math.exp(-x*e*1.6)}return c}function wM(i,t,e,n,s){let r=e-i.x,o=s-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],u=r*c-o*l;if(Math.abs(u)<1e-9)continue;let f=a.a[0]-i.x,h=a.a[1]-i.z,d=(f*c-h*l)/u;if(d<=1e-6||d>=1-1e-6)continue;let g=(f*o-h*r)/u;if(g<0||g>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let m=g*Math.hypot(l,c);if(!a.gaps.some(p=>m>p.s0&&m<p.s1&&x>p.y0&&x<p.y1))return!0}return!1}function Xp(i,t,e){let n=i.rooms.findIndex(s=>s.points.length>=3&&se([t,e],s.points));return n<0?i.rooms.length:n}function Nl(i,t){return i&&t>=0&&t<i.length?i[t]:t}var ho={open:0,open2:0,tilt:0,tilt2:0,cover:null},qp=2043986,Yp=2769520,TM=2242399,Yu=1845831,EM=1450554,ni=16758087,AM=1.2,RM=1.5,CM=1846349,PM=2572395,IM=1120816,LM=1845831,$p=5995775,Zp=9085695,tr=kt(3662079,.08),FM=.2;function Ul(i,t,e,n,s,r,o,a,l,c,u){let f=(d,g,x)=>t(d,g,x),h=[[f(e,s,a),f(n,s,a),f(n,r,a),f(e,r,a),c],[f(e,s,o),f(n,s,o),f(n,r,o),f(e,r,o),kt(l.getHex(),.6)],[f(e,r,o),f(n,r,o),f(n,r,a),f(e,r,a),l],[f(e,s,o),f(n,s,o),f(n,s,a),f(e,s,a),kt(l.getHex(),.85)],[f(e,s,o),f(e,r,o),f(e,r,a),f(e,s,a),kt(l.getHex(),.92)],[f(n,s,o),f(n,r,o),f(n,r,a),f(n,s,a),kt(l.getHex(),.92)]];for(let[d,g,x,m,p]of h)i.tri(d,g,x,p,p,p,void 0,u),i.tri(d,x,m,p,p,p,void 0,u)}function ae(i,t,e,n,s,r,o,a,l,c,u,f){if(a<=u+1e-6)return Ul(i,t,e,n,s,r,o,a,l,c,Qt);if(o>=u-1e-6)return Ul(i,t,e,n,s,r,o,a,l,c,f);Ul(i,t,e,n,s,r,o,u,l,c,Qt),Ul(i,t,e,n,s,r,u,a,l,c,f)}function Oi(i,t,e,n,s,r,o,a,l,c,u=0){let f=(h,d,g)=>{let x=_=>u?(o-_)/u:.5,m=t(e,s,h),p=t(n,s,h),v=t(n,s,d),y=t(e,s,d);i.tri(m,p,v,a,a,a,[0,x(h),1,x(h),1,x(d)],g),i.tri(m,v,y,a,a,a,[0,x(h),1,x(d),0,x(d)],g)};o<=l+1e-6?f(r,o,Qt):r>=l-1e-6?f(r,o,c):(f(r,l,Qt),f(l,o,c))}function DM(i,t,e,n,s,r,o,a,l,c){let u=t(e,s,o),f=t(n,s,o),h=t(n,r,o),d=t(e,r,o),g=0,x=(r-s)/c;i.tri(u,f,h,a,a,a,[0,g,1,g,1,x],l),i.tri(u,h,d,a,a,a,[0,g,1,x,0,x],l)}function Jp(i,t,e){let n=new ce,s=new ce,r=new ce(!0),o=new et(qp),a=new et(Yp),l=[],c=[],u=[];for(let f of i){let h=n.count,d=s.count,g=r.count,x=t.get(f.opening.id)??ho,m=f.width,{sill:p,top:v,bucket:y}=f,_=(b,S,R)=>[f.start[0]+f.axis[0]*b+f.toRoom[0]*S,R,f.start[1]+f.axis[1]*b+f.toRoom[1]*S],M=(f.faceRoom-f.faceOut)/2,w=f.opening.mark==="closed",A=f.opening.type==="door"&&es(f.opening,f.exterior)==="passage";if(f.opening.type==="door"&&!A||f.opening.type==="garage"){let b=-f.faceOut-.012,S=f.faceRoom+.012,R=f.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),T=R?kt(ni,.8):new et(qp),P=R?kt(ni,1):new et(Yp);ae(n,_,-.045,.02,b,S,0,v+.045,T,P,e,y),ae(n,_,m-.02,m+.045,b,S,0,v+.045,T,P,e,y),ae(n,_,.02,m-.02,b,S,v-.02,v+.045,T,P,e,y)}if(f.opening.type==="door"){let b=es(f.opening,f.exterior),S=Md(b),R=f.opening.swing==="out"?-1:1,T=R>0?f.faceRoom:-f.faceOut,P=f.opening.leaves===2,L=.02,C=m-.02,D=yd(m,b,f.hingeAtStart,f.opening);if(D){for(let[B,z]of D.panels)ae(n,_,B,B+.04,M-.03,M+.03,.02,v-.02,o,a,e,y),ae(n,_,z-.04,z,M-.03,M+.03,.02,v-.02,o,a,e,y),ae(n,_,B,z,M-.03,M+.03,.02,.1,o,a,e,y),Oi(s,_,B+.04,z-.04,M,.1,v-.02,tr,e,y);L=D.x0,C=D.x1}let N=P?(C-L)/2-.004:C-L,U=S?.06:.04;S&&(ae(n,_,.02,m-.02,-f.faceOut-.02,f.faceRoom,0,.02,new et(Yu),a,e,y),f.exterior&&ae(n,_,m/2-.08,m/2+.08,-f.faceOut-.1,-f.faceOut,v+.1,v+.17,kt(ni,.55),kt(ni,.85),e,Qt));let k=A?[]:[[f.hingeAtStart,x.open]];P&&!A&&k.push([!f.hingeAtStart,x.open2??0]);for(let[B,z]of k){let V=Math.min(1,Math.max(0,z)),tt=b==="sliding"?0:V*RM,Z=b==="sliding"?V*N:0,ct=(Ht,It,Yt)=>{let ne=Ht*Math.cos(tt)-It*Math.sin(tt)-Z,Xt=T+R*(It*Math.cos(tt)+Ht*Math.sin(tt)+(Z?.05:0));return _(B?L+ne:C-ne,Xt,Yt)},ut=V>.05?Qt:y,St=w?!!x.sensed&&V<.05:V>.9,q=St?kt(ni,.7):new et(S?IM:CM),Y=St?kt(ni,.9):new et(S?LM:PM);b==="glass"?(ae(n,ct,0,.05,-U,0,.01,v-.01,q,Y,e,ut),ae(n,ct,N-.05,N,-U,0,.01,v-.01,q,Y,e,ut),ae(n,ct,.05,N-.05,-U,0,.01,.12,q,Y,e,ut),ae(n,ct,.05,N-.05,-U,0,v-.08,v-.01,q,Y,e,ut),Oi(s,ct,.05,N-.05,-U/2,.12,v-.08,tr,e,ut)):ae(n,ct,0,N,-U,0,.01,v-.01,q,Y,e,ut),b==="front_glass"?Oi(s,ct,.12,N-.12,.001,v*.55,v-.18,tr,e,ut):S&&Oi(s,ct,.1,.18,.001,.3,v-.3,tr,e,ut);let nt=Math.min(1.05,v*.5),ht=S?.3:.012,lt=S?N-.11:N-.16,Dt=S?N-.08:N-.05;ae(n,ct,lt,Dt,.004,.05,nt-ht,nt+ht,new et($p),new et(Zp),e,ut),ae(n,ct,lt,Dt,-U-.05,-U-.004,nt-ht,nt+ht,new et($p),new et(Zp),e,ut)}}else if(f.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new et(13951231),R=f.faceRoom-.03,T=v*(1-b);b>.01&&Oi(r,_,.02,m-.02,R,T,v,S,e,y,.5);let P=(1-b)*v;P>.01&&DM(r,_,.02,m-.02,R,R+P,v+.03,S,y,.5)}else if(es(f.opening,f.exterior)==="glass_wall"){ae(n,_,0,.04,M-.025,M+.025,p,v,o,a,e,y),ae(n,_,m-.04,m,M-.025,M+.025,p,v,o,a,e,y),ae(n,_,.04,m-.04,M-.025,M+.025,p,p+.03,o,a,e,y),ae(n,_,.04,m-.04,M-.025,M+.025,v-.04,v,o,a,e,y);let R=Math.max(1,Math.round((m-2*.04)/.9)),T=(m-2*.04)/R;for(let P=1;P<R;P++){let L=.04+P*T;ae(n,_,L-.02,L+.02,M-.025,M+.025,p+.03,v-.04,o,a,e,y)}for(let P=0;P<R;P++){let L=.04+P*T+(P?.02:0),C=.04+(P+1)*T-(P<R-1?.02:0);Oi(s,_,L,C,M,p+.03,v-.04,tr,e,y)}}else{ae(n,_,0,.06,M-.035,M+.035,p,v,o,a,e,y),ae(n,_,m-.06,m,M-.035,M+.035,p,v,o,a,e,y),ae(n,_,.06,m-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,y),ae(n,_,.06,m-.06,M-.035,M+.035,v-.06,v,o,a,e,y),p>.3&&(ae(n,_,-.04,m+.04,M+.035,f.faceRoom+.07,p-.03,p,new et(Yu),a,e,y),f.exterior&&ae(n,_,-.03,m+.03,-f.faceOut-.06,M-.035,p-.04,p-.02,new et(Yu),a,e,y));let R=.055,T=p+(p>.05?.06:.03),P=v-.06,L=M+.035,C=M+.035+.06,N=f.opening.leaves===2?[{atStart:f.hingeAtStart,x0:f.hingeAtStart?.06:m/2,x1:f.hingeAtStart?m/2:m-.06,open:x.open,tilt:x.tilt},{atStart:!f.hingeAtStart,x0:f.hingeAtStart?m/2:.06,x1:f.hingeAtStart?m-.06:m/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:f.hingeAtStart,x0:.06,x1:m-.06,open:x.open,tilt:x.tilt}];for(let U of N){let k=U.open>.02||U.tilt>.02,B=w?!!x.sensed&&!k:k,z=B?kt(ni,.75):new et(TM),V=B?kt(ni,.95):a,tt=U.x0,Z=U.x1,ct=Z-tt,ut=U.open*AM,St=U.tilt*FM,q=(nt,ht,lt)=>{let Dt=lt-T,Ht=ht+Dt*Math.sin(St),It=T+Dt*Math.cos(St),Yt=nt*Math.cos(ut)-(Ht-L)*Math.sin(ut);Ht=L+(Ht-L)*Math.cos(ut)+nt*Math.sin(ut);let ne=U.atStart?tt+Yt:Z-Yt;return _(ne,Ht,It)},Y=ut>.05?Qt:y;if(ae(n,q,0,R,L,C,T,P,z,V,e,Y),ae(n,q,ct-R,ct,L,C,T,P,z,V,e,Y),ae(n,q,R,ct-R,L,C,T,T+R,z,V,e,Y),ae(n,q,R,ct-R,L,C,P-R,P,z,V,e,Y),Oi(s,q,R,ct-R,(L+C)/2,T+R,P-R,B?kt(ni,.16):tr,e,Y),es(f.opening,f.exterior)==="bars"){let nt=(T+P)/2,ht=(L+C)/2;ae(n,q,R,ct-R,ht-.012,ht+.012,nt-.012,nt+.012,z,V,e,Y),ae(n,q,ct/2-.012,ct/2+.012,ht-.012,ht+.012,T+R,P-R,z,V,e,Y)}}}if(x.cover!==null){let b=-f.faceOut,S=v+.2;ae(n,_,-.05,m+.05,b-.15,b,v,S,new et(EM),a,e,y);let R=Math.min(1,Math.max(0,x.cover));if(R>.01){let T=v-R*(v-p);Oi(r,_,0,m,b-.07,T,v,new et(16777215),e,y,.045)}}l.push({id:f.opening.id,start:h,end:n.count}),c.push({id:f.opening.id,start:d,end:s.count}),u.push({id:f.opening.id,start:g,end:r.count})}return{frames:n.geometry(),glass:s.geometry(),blinds:r.geometry(),frameTris:l,glassTris:c,blindTris:u}}var NM=.3,Kp=2.6;function Qp(i,t=.32,e=.22,n=[]){let s=i.map(M=>M[0]),r=i.map(M=>M[1]),o=Math.min(...s),a=Math.max(...s),l=Math.min(...r),c=Math.max(...r),u=c-l>=a-o,f=e*.7071,h=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...w,[M[0]+f,M[1]+f],[M[0]-f,M[1]+f],[M[0]+f,M[1]-f],[M[0]-f,M[1]-f]];return w.every(b=>se(b,i))&&!n.some(b=>A.some(S=>se(S,b)))},d=(M,w)=>h(u?[M,w]:[w,M]),g=(M,w)=>{let A=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let b=1;b<A;b++)if(!h([M[0]+(w[0]-M[0])*b/A,M[1]+(w[1]-M[1])*b/A]))return!1;return!0},[x,m,p,v]=u?[o,a,l,c]:[l,c,o,a],y=[],_=!0;for(let M=x+e;M<=m-e+1e-6;M+=t){let w=null,A=null,b=.05;for(let P=p;P<=v+1e-6;P+=b)if(d(M,P)&&(A??=P),(!d(M,P)||P+b>v+1e-6)&&A!==null){let L=d(M,P)?P:P-b;(!w||L-A>w[1]-w[0])&&(w=[A,L]),A=null}if(!w||w[1]-w[0]<.2)continue;let S=P=>{let[L,C]=P?w:[w[1],w[0]];return[u?[M,L]:[L,M],u?[M,C]:[C,M]]},R=S(_),T=y[y.length-1];if(T&&n.length&&!g(T,R[0])){let P=S(!_);if(!g(T,P[0]))continue;R=P,_=!_}y.push(R[0],R[1]),_=!_}return y}function Zu(i,t=.7,e=12){return Array.from({length:e},(n,s)=>{let r=s/e*Math.PI*2;return[i[0]+Math.cos(r)*t,i[1]+Math.sin(r)*t]})}var $u=i=>Math.atan2(Math.sin(i),Math.cos(i));function jp(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let s=n[0]-i.pos[0],r=n[1]-i.pos[1],o=Math.hypot(s,r);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=$u(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Kp*e),!0)}let a=Math.atan2(s,r),l=$u(a-i.heading);if(i.heading=$u(i.heading+Math.sign(l)*Math.min(Math.abs(l),Kp*e)),Math.abs(l)<.35){let c=Math.min(o,NM*e);i.pos=[i.pos[0]+s/o*c,i.pos[1]+r/o*c]}return!0}var _n=null,tm=new Map;function nm(i,t=0){let e=new ce,n=new He,s=Ie(i.type);if(s!=null&&s.light)wl(e,s,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Ju(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let r={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Ml(e,n,new ce,r)}return{buf:e,lines:n}}function UM(i,t=180,e,n=1.3){let s=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,r=tm.get(s);if(r)return r;e&&Gr(e),_n??=new ji({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),_n.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),_n.setSize(t,t,!1),_n.setClearColor(0,0);let{buf:o,lines:a}=nm(i),l=new di,c=new Vt(o.geometry(),new le({vertexColors:!0,color:new et(n,n,n)})),u=new ln(a.geometry(),new nn({vertexColors:!0,color:new et(n*1.8,n*1.8,n*1.8)}));l.add(c,u);let f=new en().setFromObject(c),h=f.getCenter(new G),d=new zn(-1,1,1,-1,.01,100);d.position.copy(h).add(new G(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(h),d.updateMatrixWorld();let g=.05;for(let p of[f.min.x,f.max.x])for(let v of[f.min.y,f.max.y])for(let y of[f.min.z,f.max.z]){let _=new G(p,v,y).applyMatrix4(d.matrixWorldInverse);g=Math.max(g,Math.abs(_.x),Math.abs(_.y))}let x=g*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),_n.render(l,d);let m=_n.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose(),tm.set(s,m),m}function OM(i,t,e=160,n,s=1.25){let r=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${s}`,o=em.get(r);if(o)return o;n&&Gr(n);let{buf:a,lines:l}=nm(i,t),c=new Vt(a.geometry(),new le({vertexColors:!0,color:new et(s,s,s)})),u=new ln(l.geometry(),new nn({vertexColors:!0,color:new et(s*1.8,s*1.8,s*1.8)})),f=new en().setFromObject(c);if(f.isEmpty())return null;let h=f.min.x,d=f.max.x,g=Math.max(0,f.min.y),x=f.max.y,m=Math.max(1,Math.min(1024,Math.round((d-h)*e))),p=Math.max(1,Math.min(1024,Math.round((x-g)*e)));_n??=new ji({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),_n.setPixelRatio(1),_n.setSize(m,p,!1),_n.setClearColor(0,0);let v=new di;v.add(c,u);let y=new zn(h,d,x,g,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),_n.render(v,y);let _=_n.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),u.geometry.dispose(),u.material.dispose();let M={url:_,x0:h,x1:d,y0:g,y1:x};return em.set(r,M),M}var em=new Map;var sm={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},BM=2.4,zM=1.4,kM=.22,rm=140,Qu=32,VM=500,om=160,am=33,lm=.028,GM=.09,ee=2767456,HM=1911110,WM=1,cm=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),Ol=450,um=125,XM=.08,ju={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},qM=new et(1714765);function YM(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var th=class{host;options;renderer;scene=new di;camera=new $e(38,1,.1,400);controls;labels;root=new Ze;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new ln(new qt,new nn({color:10471679,transparent:!0,opacity:.4,blending:Re,depthWrite:!1}));snow=new Ds(new qt,new Yi({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Vt(new br(1,28),new le({color:16767370,transparent:!0,opacity:0,blending:Re,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=$M(),this.blindTexture=JM(),this.haloTexture=QM(),this.ground=new Vt(new xi(1,1),new le({transparent:!1,blending:Re,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let s=n.some(r=>r.isIntersecting);s!==this.onScreen&&(this.onScreen=s,s&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,s])=>`${n}=${s}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let s=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=s,this.resize()}setPacks(t){Gr(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(u=>u.floor.rooms.some(f=>f.id===t)),n=e==null?void 0:e.floor.rooms.find(u=>u.id===t);if(!e||!n)return;let s=n.start_view;if(s){let u=e.floor.elevation+e.ty,[f,h]=ns(n.points),d=s.target??{x:f,y:.3,z:h};this.controls.flyTo({target:new G(d.x,d.y+u,d.z),radius:s.radius,phi:s.phi,theta:s.theta});return}let[r,o]=ns(n.points),a=n.points.map(u=>u[0]),l=n.points.map(u=>u[1]),c=new G(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new G(r,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let s=this.devicePins.get(n.id);s||(s={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,s),this.labels.append(s.el));let r=s.el;s.icon!==n.icon&&(s.icon=n.icon,r.querySelector(".fp3d-dev-icon").innerHTML=n.icon),s.text!==n.text&&(s.text=n.text,r.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";s.caption!==o&&(s.caption=o,r.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";s.watt!==a&&(s.watt=a,r.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;s.label!==l&&(s.label=l,r.title=n.name,r.setAttribute("aria-label",l)),s.active!==n.active&&(s.active=n.active,r.classList.toggle("fp3d-dev-on",n.active)),s.unavailable!==n.unavailable&&(s.unavailable=n.unavailable,r.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(u=>Math.round(u*255)).join(", ")})`:"";s.glow!==c&&(s.glow=c,c?r.style.setProperty("--fp3d-glow",c):r.style.removeProperty("--fp3d-glow"))}for(let[n,s]of this.devicePins)e.has(n)||(s.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);e!==this.roofWindowsKey&&(this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh(),this.invalidate())}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){var n;this.solarLevels=t;let e=!1;for(let s of((n=this.roof)==null?void 0:n.lives)??[])co(s,t)&&(e=!0);for(let s of this.floors)s.solarLive&&co(s.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(s=>{var r;return`${s.id}:${s.floorId}:${s.points.length}:${(r=s.points[0])==null?void 0:r.join(",")}:${s.y.toFixed(3)}:${s.color.map(o=>o.toFixed(2)).join("/")}:${s.level.toFixed(2)}:${s.flow?1:0}:${s.heat?1:0}:${s.cover.toFixed(2)}`}).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Op(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Up(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){var n,s,r;let e=o=>o.map(a=>`${a.id}:${a.floorId}:${a.x},${a.z}:${a.level.toFixed(2)}:${a.playing?1:0}:${a.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(o=>o.playing);for(let o of this.floors){let a=o.soundGroup??=(()=>{let h=new Ze;return h.renderOrder=6,o.group.add(h),h})();for(let h of[...a.children])a.remove(h),(n=h.geometry)==null||n.dispose(),(r=(s=h.material)==null?void 0:s.dispose)==null||r.call(s);let l=t.filter(h=>h.floorId===o.floor.id),c=o.floor.elevation+.03;for(let h of l)if(h.playing)for(let d=0;d<3;d++){let g=new Vt(new Sr(.92,1,48),new le({color:3662079,transparent:!0,opacity:0,blending:Re,depthWrite:!1,side:xe}));g.rotation.x=-Math.PI/2,g.position.set(h.x,c+d*.002,h.z),g.userData={sound:!0,phase:d/3,level:h.level},g.frustumCulled=!1,a.add(g)}let u=[],f=new Set;for(let h of l)for(let d of h.members){let g=l.find(m=>m.id===d);if(!g||g===h)continue;let x=[h.id,g.id].sort().join("|");f.has(x)||(f.add(x),u.push(h.x,c+.02,h.z,g.x,c+.02,g.z))}if(u.length){let h=new qt;h.setAttribute("position",new Bt(u,3));let d=new ln(h,new nn({color:3662079,transparent:!0,opacity:.45,blending:Re,depthWrite:!1}));d.userData={soundLine:!0},a.add(d)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let s of n.soundGroup.children){if(!s.userData.sound)continue;let r=(e*.45+s.userData.phase)%1,o=s.userData.level,a=.25+r*(.9+1.6*o);s.scale.set(a,a,1),s.material.opacity=(1-r)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let s of t){let r=Ku(s),o=hm(s.power),a=this.flowPhase.get(r);n.set(r,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(s=>s.power>.5);for(let s of this.floors)this.buildFlows(s);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(r=>r.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let s=new ce;for(let r of e)Lp(s,r);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=s.geometry(),t.pipeMesh.visible=s.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let s=this.personPins.get(n.id);if(s||(s=document.createElement("div"),s.className="fp3d-person",s.dataset.entity=n.id,this.personPins.set(n.id,s),this.labels.append(s)),s.title=n.name,s.setAttribute("aria-label",n.name),s.dataset.picture!==(n.picture??"")||s.dataset.initials!==n.initials)if(s.dataset.picture=n.picture??"",s.dataset.initials=n.initials,s.replaceChildren(),n.picture){let r=document.createElement("img");r.src=n.picture,r.alt="",r.addEventListener("error",()=>r.replaceWith(document.createTextNode(n.initials))),s.append(r)}else s.textContent=n.initials}for(let[n,s]of this.personPins)e.has(n)||(s.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=kp(t),n=e?1:0;n===Fl.value&&(!e||Ll.value.equals(new G(...e)))||(Fl.value=n,e&&Ll.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=zp(t);let e=Dl(t),n=[...this.floors.map(s=>s.materials.lines),...this.roof?[this.roof.lines]:[]];for(let s of n)s.blending=e,s.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new et(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new dr(n,.01+.035*t.fog):null;let s=e?Math.round(700*t.rain):0,r=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,s*2,!0),this.seedParticles(this.snow,r,!1),this.rain.visible=s>0,this.snow.visible=r>0}seedParticles(t,e,n){let s=t.geometry.getAttribute("position");if(((s==null?void 0:s.count)??0)===e)return;let r=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let u=r.x0+Math.random()*(r.x1-r.x0),f=r.y0+Math.random()*(r.y1-r.y0),h=r.z0+Math.random()*(r.z1-r.z0);o.set([u,f,h],c*3),n&&o.set([u,f-.45,h],c*3+3)}t.geometry.dispose();let l=new qt;l.setAttribute("position",new Bt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let s=this.weatherBox,r=s.y1-s.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let u=0;u<l.length;u+=6){let f=l[u+1]-c,h=l[u]+o*n;f<s.y0&&(f+=r,h=s.x0+Math.random()*(s.x1-s.x0)),h>s.x1&&(h-=s.x1-s.x0),l[u]=h,l[u+1]=f,l[u+3]=h-o*.05,l[u+4]=f-.45,l[u+5]=l[u+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let u=0;u<l.length;u+=3){let f=l[u+1]-(.9+.6*e.snow)*n,h=l[u]+(o+Math.sin(c+u)*.4)*n;f<s.y0&&(f+=r,h=s.x0+Math.random()*(s.x1-s.x0)),h>s.x1&&(h-=s.x1-s.x0),l[u]=h,l[u+1]=f}a.needsUpdate=!0}return!0}placeSky(){var d;let t=this.sun,e=this.weather,n=(e==null?void 0:e.cloud)??0,s=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!s&&t.elevation<1){this.skyDisc.visible=!1;return}let r=(((d=this.building)==null?void 0:d.settings.north)??0)*ue,o=(s?t.azimuth+180:t.azimuth)*ue,a=Math.max(10,Math.abs(t.elevation))*ue,l=this.weatherBox,c=new G((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),u=Math.min(300,Math.max(80,this.houseRadius*5)),f=new G(Math.sin(r+o)*Math.cos(a),Math.sin(a),-Math.cos(r+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(f,u),this.skyDisc.scale.setScalar(u*(s?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(s?13621486:16767370),h.opacity=(s?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let s=document.createElement("small");s.textContent=n,t.append(s),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,s])=>this.roomInfo.get(n)===s))){this.roomInfo=t;for(let n of this.floors)for(let s of n.roomPins)this.fillRoomPin(s.pin,s.room.name,t.get(s.room.id))}}setFloorInfo(t){var e,n;this.floorInfo=t;for(let s of this.floors){let r=s.label.querySelector("span"),o=t.get(s.floor.id)??((n=(e=this.options).floorInfo)==null?void 0:n.call(e,s.floor))??"";r&&r.textContent!==o&&(r.textContent=o,s.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let s=!1;for(let[r,o]of n.openings){let a=t.get(r)??ho,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(r,l),s=!0)}s&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){for(let[e,n]of t){let s=this.fridges.get(e)??{l:n.left?1:0,r:n.right?1:0,tl:0,tr:0};s.tl=n.left?1:0,s.tr=n.right?1:0,this.fridges.set(e,s)}for(let e of[...this.fridges.keys()])t.has(e)||this.fridges.delete(e);this.invalidate()}stepFridges(t){let e=1-Math.exp(-t/om),n=new Set;for(let[s,r]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=r[a]-r[o];if(Math.abs(l)<.004){l!==0&&(r[o]=r[a],n.add(s));continue}r[o]+=l*e,n.add(s)}if(!n.size)return!1;for(let s of this.floors)s.floor.furniture.some(r=>n.has(r.id))&&this.buildFridges(s);return!0}buildFridges(t){let e=new ce;for(let n of t.floor.furniture){if(n.type!=="fridge_smart")continue;let s=this.fridges.get(n.id);ep(e,n,pn(t.floor,n),(s==null?void 0:s.l)??0,(s==null?void 0:s.r)??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){var t,e,n,s,r;this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let o of[this.rain,this.snow,this.skyDisc])o.geometry.dispose(),o.material.dispose();this.resizeObserver.disconnect(),(t=this.intersection)==null||t.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),(e=this.groundTexture)==null||e.dispose(),this.haloTexture.dispose();for(let o of this.robots.values())o.led.dispose();this.robots.clear(),(n=this.robotGeo)==null||n.dispose(),(s=this.robotLedGeo)==null||s.dispose(),(r=this.robotMat)==null||r.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&YM();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new ji({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Pe,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Il(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,s)=>this.swipeStart(t,e,n,s),swipeMove:t=>{var e,n;return this.swipe&&((n=(e=this.options).onDeviceSwipe)==null?void 0:n.call(e,this.swipe.entity,"move",t,this.swipe.x,this.swipe.y))},swipeEnd:()=>{var t,e;this.swipe&&((e=(t=this.options).onDeviceSwipe)==null||e.call(t,this.swipe.entity,"end",0,this.swipe.x,this.swipe.y)),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{var s,r;let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):(r=(s=this.options).onBack)==null||r.call(s)}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){var t;for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let n of e.screenPics.values())n.mesh.material.dispose(),(t=n.texture)==null||t.dispose();e.group.traverse(n=>{let s=n.geometry;s==null||s.dispose()});for(let n of Object.values(e.materials))n.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let s=document.createElement("span");s.className="fp3d-dev-text";let r=document.createElement("span");r.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,s,r,o);let a,l=!1;e.addEventListener("pointerdown",u=>{if(this.furnish){this.pendingDevice=t;return}u.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{var d,g;l=!0;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(g=(d=this.options).onDeviceHold)==null||g.call(d,t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)},VM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",u=>u.preventDefault()),e.addEventListener("click",u=>{var d,g,x,m;if(u.stopPropagation(),this.furnish){this.selectDevice(t),(g=(d=this.options).onDeviceSelect)==null||g.call(d,t);return}if(l)return;let f=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(m=(x=this.options).onDeviceTap)==null||m.call(x,t,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),e.addEventListener("keydown",u=>{var f,h;if(u.key==="Enter"&&u.shiftKey||u.key==="ContextMenu"){u.preventDefault();let d=e.getBoundingClientRect(),g=this.host.getBoundingClientRect();(h=(f=this.options).onDeviceHold)==null||h.call(f,t,d.left+d.width/2-g.left,d.top+d.height/2-g.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Gp(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),s=fm(t.floor,t.geo.openRooms);if(t.lightZones=s.some((a,l)=>a!==l)?s:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<s.length&&(n.room[a]=s[l])}for(let a of n.doors)a.a>=0&&a.a<s.length&&(a.a=s[a.a]),a.b>=0&&a.b<s.length&&(a.b=s[a.b]);for(let a of n.blockers)a.ra=Nl(s,a.ra),a.rb=Nl(s,a.rb)}t.lightSurface=n;let r=new qt;r.setAttribute("position",new Bt(n.pos,3)),r.setAttribute("color",new Bt(new Float32Array(n.pos.length),3)),r.setAttribute("fold",new Bt(n.fold,1));let o=new Xi(new Uint32Array(n.pos.length/3),1);o.setUsage(Vc),r.setIndex(o),r.setDrawRange(0,0),r.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=r,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let s=this.glowOf(n);if(n.floorId!==t.floor.id||!s)continue;let r=n.top??t.floor.height,o=Xp(t.floor,n.x,n.z),a=Nl(t.lightZones,o),[l,,c]=n.size??(n.lamp?ju[n.lamp]:[.3,.3,.3]),u=n.base??0,f={ceiling:[r-.12,"ceiling"],downlight:[r-.03,"spot"],spot:[r-c,"spot"],panel:[r-.05,"ceiling"],pendant:[Math.max(.5,r-c),"pendant"],floor:[u+c-.15,"omni"],uplight:[u+c,"up"],table:[u+c-.1,"omni"],wall:[u+.1,"wall"],strip:[u+Math.max(.02,c)-.01,u<WM?"up":"ceiling"],bollard:[u+c-.08,"ceiling"],garden:[u+c,"up"]},[h,d]=n.lamp?f[n.lamp]:[n.y,"omni"],g=n.lightY??h,x=s.color;if(n.lamp==="strip"){let m=(n.rotation??0)*ue,p=!!n.upright||Math.abs(n.roll??0)>45;for(let v of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:u+l*(.5+v),z:n.z,color:x,level:s.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(m)*l*v,y:g,z:n.z+Math.sin(m)*l*v,color:x,level:s.level*.55,kind:p?"omni":d,room:a})}else e.push({x:n.x,y:g,z:n.z,color:x,level:s.level,kind:d,room:a})}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),s=e.doors.map(f=>{let h=t.geo.openings.find(g=>g.opening.id===f.id);if(h&&es(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(f.id);return d?Math.max(d.open,d.open2??0):.5}),r=n.map(f=>`${f.x.toFixed(2)},${f.y.toFixed(2)},${f.z.toFixed(2)},${f.kind},${f.level.toFixed(3)},${f.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+s.map(f=>f.toFixed(1)).join(",");if(r===t.glowSig)return;t.glowSig=r;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Wp(e,n,.42,s);if(this.roomTint){let f=t.floor.rooms.length;for(let h=0;h<e.room.length;h++)if(e.room[h]!==f)for(let d=0;d<3;d++)l[h*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,u=0;for(let f=0;f<l.length/18;f++){let h=!1;for(let d=f*18;d<f*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[u++]=f*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,u),t.glowMesh.visible=u>0}makeMaterials(t){return{floor:Xn(new le({vertexColors:!0}),this.themeUniform),pattern:ZM(this.patternTexture),wall:Xn(Ui(new le({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Ui(new le({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new le({vertexColors:!0,blending:Cr,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:xe,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Xn(Ui(new nn({vertexColors:!0,transparent:!0,blending:Dl(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Ui(new le({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:xe,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Xn(Ui(new le({vertexColors:!0,side:xe}),t),this.themeUniform),glass:Ui(new le({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:xe}),t),blinds:Xn(Ui(new le({map:this.blindTexture,vertexColors:!0,side:xe}),t),this.themeUniform),flow:KM(this.flowTime),solarLive:qu(this.flowTime),lamps:Xn(new le({vertexColors:!0}),this.themeUniform),halos:new Yi({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1}),cones:new le({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:xe}),screens:new le({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:xe})}}rebuild(){var r,o,a,l;let t=new Map(this.floors.map(c=>[c.floor.id,{y:c.y,o:c.o}])),e=new Map(this.floors.map(c=>[c.floor.id,c.openings]));this.clear();let n=this.building;if(!n)return;let s=[...n.floors].sort((c,u)=>c.elevation-u.elevation);for(let c of n.floors){let u=((r=n.settings.roof)==null?void 0:r.solar)??[],f=((o=Du(n))==null?void 0:o.id)===c.id?u.filter(nt=>nt.face===Fu).map(nt=>({field:nt,face:lp(n,nt)})):[],h=u.filter(nt=>nt.face.startsWith(`wall:${c.id}:`));if(h.length){let nt=new Map(ap(n,c.id).map(ht=>[ht.key,ht]));for(let ht of h){let lt=nt.get(ht.face);lt&&f.push({field:ht,face:lt})}}let g=(n.settings.roof.sections??[]).some(nt=>Id(nt,c.elevation+c.height))?(nt,ht)=>{let lt=Ld(n,nt,ht);return lt===null?null:lt-c.elevation}:void 0,x=yp(Wu(c,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Mp(n.floors,c),f,g),m={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(m),v=new Ze,y=new Vt(x.floor,p.floor),_=new Vt(x.shadow,p.shadow);_.renderOrder=1;let M=new Vt(x.floor,p.pattern);M.renderOrder=2;let w=new Vt(new qt,p.glow);w.renderOrder=3,w.visible=!1;let A=new Vt(new qt,p.frames),b=new Vt(new qt,p.blinds),S=new Vt(new qt,p.glass);S.renderOrder=4;let R=new Vt(new qt,p.lamps);R.visible=!1;let T=new Vt(new qt,p.cones);T.visible=!1,T.renderOrder=3;let P=new Ds(new qt,p.halos);P.visible=!1,P.renderOrder=7;let L=new Vt(new qt,p.cones);L.visible=!1,L.renderOrder=7;let C=new Vt(new qt,p.cones);C.visible=!1,C.renderOrder=7;let D=new Vt(new qt,p.lamps);D.visible=!1;let N=new Vt(new qt,p.lamps);N.visible=!1;let U=new Vt(new qt,p.screens);U.visible=!1,U.renderOrder=5;let k=new Vt(new qt,p.flow);k.renderOrder=5,k.frustumCulled=!1;let B=Xu(f,c.elevation),z=B?new Vt(B.geometry,p.solarLive):null;z&&(z.renderOrder=6,co(B,this.solarLevels));for(let nt of[A,b,S])nt.frustumCulled=!1;let V=new Vt(x.walls,p.glassWall),tt=new Vt(x.walls,p.wall);V.renderOrder=6,v.add(y,_,M,w,tt,new ln(x.lines,p.lines),A,b,S,k,R,T,P,L,C,D,N,U,V,...z?[z]:[]),this.root.add(v);let Z=document.createElement("button");Z.className="fp3d-pin fp3d-pin-floor",Z.dataset.floor=c.id;let ct=document.createElement("b");ct.textContent=c.name||"\u2013";let ut=document.createElement("span");ut.textContent=this.floorInfo.get(c.id)??((l=(a=this.options).floorInfo)==null?void 0:l.call(a,c))??"",Z.append(ct,ut),Z.addEventListener("click",()=>{var nt,ht;return(ht=(nt=this.options).onFloorTap)==null?void 0:ht.call(nt,c.id)}),this.labels.append(Z);let St=t.get(c.id),q=[],Y=null;for(let nt of c.rooms){let ht=document.createElement("button");ht.className="fp3d-pin",ht.dataset.room=nt.id,ht.dataset.floor=c.id,this.fillRoomPin(ht,nt.name,this.roomInfo.get(nt.id)),ht.addEventListener("click",()=>{var Ht,It;return(It=(Ht=this.options).onRoomTap)==null?void 0:It.call(Ht,c.id,nt.id)}),this.labels.append(ht);let[lt,Dt]=ns(nt.points);q.push({pin:ht,room:nt,cx:lt,cz:Dt});for(let[Ht,It]of nt.points)Y??={x0:Ht,x1:Ht,z0:It,z1:It},Y.x0=Math.min(Y.x0,Ht),Y.x1=Math.max(Y.x1,Ht),Y.z0=Math.min(Y.z0,It),Y.z1=Math.max(Y.z1,It)}this.floors.push({floor:c,rank:s.indexOf(c),group:v,geo:x,floorMesh:y,shadowMesh:_,patternMesh:M,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:A,glassMesh:S,blindsMesh:b,flowMesh:k,solarMesh:z,solarLive:B,lampMesh:R,sunMesh:T,sunSig:"",haloMesh:P,coneMesh:L,trailMesh:C,fridgeMesh:D,pipeMesh:N,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:tt,screenMesh:U,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Y,roomPins:q,labelSize:null,materials:p,mask:m,openings:new Map,y:(St==null?void 0:St.y)??0,o:(St==null?void 0:St.o)??1,ty:0,to:1,appliedO:-1,label:Z})}this.floorMap=new Map(this.floors.map(c=>[c.floor.id,c]));for(let c of this.floors)this.buildFridges(c),this.buildPipes(c);this.labelsDirty=!0,this.floorId&&!n.floors.some(c=>c.id===this.floorId)&&(this.floorId=null);for(let c of this.floors){this.buildLamps(c),this.buildScreens(c);let u=e.get(c.floor.id);for(let f of c.geo.openings)c.openings.set(f.opening.id,(u==null?void 0:u.get(f.opening.id))??this.openingTargets.get(f.opening.id)??ho);this.buildOpenings(c),this.buildFlows(c),c.poolGroup=void 0,this.buildPoolWater(c),this.buildLightSurface(c),this.buildSun(c)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){var f;this.roof&&(this.roof.group.traverse(h=>{var d;return(d=h.geometry)==null?void 0:d.dispose()}),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?gp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Ks(this.building).map(h=>[h.key,h])),n=((f=this.building.settings.roof)==null?void 0:f.solar)??[],s=qu(this.flowTime),r=[],o=new Ze,a=Xn(new le({vertexColors:!0,transparent:!0,side:xe}),this.themeUniform),l=Xn(new nn({vertexColors:!0,transparent:!0,blending:Dl(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Xn(new le({vertexColors:!0,transparent:!0,side:xe,depthWrite:!1}),this.themeUniform),u=t.map(h=>{let d=new Ze;d.add(new Vt(h.solid.geometry(),a),new ln(h.lines.geometry(),l)),h.glass.count&&d.add(new Vt(h.glass.geometry(),c));let g=n.flatMap(m=>{var y;let p=e.get(m.face);return p&&(p.section?(y=h.sections)==null?void 0:y.includes(p.section):h===t[0])?[{face:p,field:m}]:[]}),x=Xu(g,h.floor.elevation+h.base);if(x){let m=new Vt(x.geometry,s);m.renderOrder=9,d.add(m),r.push(x),co(x,this.solarLevels)}return d.renderOrder=8,o.add(d),{group:d,floorId:h.floor.id,rideId:Bd(this.building,h.floor,h.sections??[]),base:h.base,lift:h.lift!==!1}});o.renderOrder=8,this.scene.add(o),this.roof={group:o,parts:u,solid:a,lines:l,glass:c,live:s,lives:r},this.placeRoof()}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),r=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?.94*n:0,o=1-Math.exp(-t/rm),a=this.roofO;this.roofO+=(r-this.roofO)*o,Math.abs(r-this.roofO)<.004&&(this.roofO=r),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let u=this.floorMap.get(l.rideId)??c,f=u.ty>0?Math.min(1,u.y/u.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+u.y+l.base+(1-this.roofO)*2.2+(l.lift?f*zM:0)}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==r}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let s=0,r=1;e?n.rank>e.rank?(s=5+n.rank,r=0):n.rank<e.rank&&(this.floorStack==="stacked"?s=0:(s=-.4,r=this.floorStack==="single"?0:kM)):s=this.explode?n.rank*BM:0,n.ty=s,n.to=r,t&&(n.y=s,n.o=r),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let s of[e.floor,e.wall,e.frames,e.blinds,e.lamps])s.transparent===n&&(s.transparent=!n,s.depthWrite=n,s.needsUpdate=!0),s.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let s of t.screenPics.values()){let r=s.mesh.material;r.transparent=t.o<.999,r.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/rm);for(let s of this.floors){let r=s.ty-s.y,o=s.to-s.o;if(Math.abs(r)<.004&&Math.abs(o)<.004){(r!==0||o!==0)&&(s.y=s.ty,s.o=s.to,this.labelsDirty=!0,this.applyFloor(s));continue}s.y+=r*n,s.o+=o*n,e=!0,this.applyFloor(s)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/om);for(let s of this.floors){let r=!1;for(let[o,a]of s.openings){let l=this.openingTargets.get(o)??ho,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let u={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},f=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,g=a[h]??0,x=d-g;Math.abs(x)<.003?u[h]=d:(u[h]=g+x*n,f=!0)}if(l.cover===null||a.cover===null)u.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?u.cover=l.cover:(u.cover=a.cover+h*n,f=!0)}(u.open!==a.open||u.open2!==(a.open2??0)||u.tilt!==a.tilt||u.tilt2!==(a.tilt2??0)||u.cover!==a.cover||!!u.sensed!=!!a.sensed)&&(s.openings.set(o,u),r=!0),e||=f}r&&(this.buildOpenings(s),this.buildGlow(s),this.buildSun(s))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new et(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let s=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*XM+s)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let f=this.flashes.get(u);if(!f||f<=e)return 0;let h=f-e,d=h>Ol?.5+.5*Math.sin(h/140):h/Ol;return Math.round(d*10)/10},s=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),r=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+s.map(u=>{var f;return`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${(f=u.size)==null?void 0:f.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0}`}).join(";"),o=s.map(u=>this.glowOf(u)),a=s.map((u,f)=>`${n(u.id)},${o[f]?`${o[f].level.toFixed(3)},${o[f].color.map(h=>h.toFixed(3)).join("/")}`:"off"}`).join(";");if(r!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=r,t.lampColorSig="";let u=new ce,f=[],h=[],d=new Map,g=t.floor.height;for(let x of s){let m=x.lamp==="strip"?(x.base??g)>Math.min(t.floor.cut_height,g):x.lamp?cm.has(x.lamp)&&(x.top??g)>Math.min(t.floor.cut_height,g):x.model==="camera_ceiling";if(!x.lamp&&!x.model||m&&this.wallMode==="cut")continue;let p=u.count,v=x.pack?Ie(x.pack):void 0,[y,_,M]=x.size??[.3,.3,.3];x.model?np(u,x.model,x.x,x.model==="camera_ceiling"?g:x.y,x.z,x.rotation??0):v?wl(u,v,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:_,h:M,mirror:x.mirror},x.base??0,65280):Ju(u,{...x,lamp:x.lamp},x.top??g,65280),d.set(x.furnitureId??x.id,{start:p,end:u.count}),x.pickable!==!1&&f.push({id:x.id,start:p,end:u.count}),x.furnitureId&&h.push({id:x.furnitureId,start:p,end:u.count})}t.lampTris=f,t.lampFurnTris=h,t.lampRanges=d,t.lampShade=cd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;s.forEach((u,f)=>{let h=t.lampRanges.get(u.furnitureId??u.id);if(!h)return;let d=o[f],g=d?.55+.45*d.level:0,x=d?new et(...d.color.map(v=>Math.min(1,v*g))):new et(HM),m=n(u.id);m>0&&x.lerp(new et(1,1,1),.7*m);let p=new et(x.getHex());ud(c,t.lampShade,h,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){var l,c,u;let e=((l=this.building)==null?void 0:l.settings.sun_patches)===!1?null:this.sun,n=(((c=this.building)==null?void 0:c.settings.north)??0)*ue,s=((u=this.weather)==null?void 0:u.cloud)??0,r=fm(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${s.toFixed(2)},${[...t.openings.values()].map(f=>(f.cover??0).toFixed(2)).join(",")},${r.join(".")}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ce;if(e&&e.elevation>2&&s<.97){let f=Math.min(1,e.elevation/12)*(1-.8*s),h=e.elevation*ue,d=e.azimuth*ue,g=[Math.sin(n+d),-Math.cos(n+d)],x=1/Math.tan(h);for(let m of t.geo.openings){if(m.opening.type!=="window"||!m.exterior)continue;let p=[-m.toRoom[0],-m.toRoom[1]],v=p[0]*g[0]+p[1]*g[1];if(v<.05)continue;let y=t.openings.get(m.opening.id),_=m.top-((y==null?void 0:y.cover)??0)*(m.top-m.sill);if(_-m.sill<.05)continue;let M=(C,D)=>{let N=Math.min(7,D*x);return[m.start[0]+m.axis[0]*C+m.toRoom[0]*m.faceRoom-g[0]*N,.02,m.start[1]+m.axis[1]*C+m.toRoom[1]*m.faceRoom-g[1]*N]},w=.14*f*Math.min(1,v*1.5),A=new et(1*w,.82*w,.55*w),b=A.clone().multiplyScalar(.45),S=t.floor.rooms.findIndex(C=>C.id===m.opening.room_id);if(S<0||t.floor.rooms[S].points.length<3)continue;let R=r[S],T=t.floor.rooms.filter((C,D)=>r[D]===R&&C.points.length>=3).map(C=>C.points),P=Math.max(1,Math.ceil(Math.min(7,_*x)/.25)),L=Math.max(1,Math.ceil(m.width/.3));for(let C=0;C<P;C++){let D=m.sill+(_-m.sill)*C/P,N=m.sill+(_-m.sill)*(C+1)/P,U=C/P,k=(C+1)/P,B=A.clone().lerp(b,U),z=A.clone().lerp(b,k);for(let V=0;V<L;V++){let tt=m.width*V/L,Z=m.width*(V+1)/L,ct=M((tt+Z)/2,(D+N)/2);if(!T.some(nt=>se([ct[0],ct[2]],nt)))continue;let ut=M(tt,D),St=M(Z,D),q=M(Z,N),Y=M(tt,N);a.tri(ut,St,q,B,B,z),a.tri(ut,q,Y,B,z,z)}}}}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],s=[],r=new ce,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let v=(l.rotation??0)*ue,y=[-Math.sin(v),Math.cos(v)],_=l.model==="camera_ceiling",M=l.reach??(_?3:4.5),w=(l.fov??(_?360:90))*ue/2,A=l.motion?new et(.9,.12,.16):new et(.04,.22,.28),b=new et(0,0,0),S=Math.max(4,Math.round(w/.15)),R=.015,T=t.geo.walls2d,P=U=>{let k=U.b[0]-U.a[0],B=U.b[1]-U.a[1],z=k*k+B*B||1,V=Math.max(0,Math.min(1,((l.x-U.a[0])*k+(l.z-U.a[1])*B)/z));return Math.hypot(l.x-(U.a[0]+k*V),l.z-(U.a[1]+B*V))},L=null;for(let U of T)P(U)<.45&&(!L||P(U)<P(L))&&(L=U);let C=U=>{let k=y[0]*Math.cos(U)-y[1]*Math.sin(U),B=y[1]*Math.cos(U)+y[0]*Math.sin(U),z=M;for(let V of T){let tt=V.b[0]-V.a[0],Z=V.b[1]-V.a[1],ct=k*Z-B*tt;if(Math.abs(ct)<1e-9)continue;let ut=((V.a[0]-l.x)*Z-(V.a[1]-l.z)*tt)/ct,St=((V.a[0]-l.x)*B-(V.a[1]-l.z)*k)/ct;V===L&&ut<=.45||ut>.02&&ut<z&&St>=0&&St<=1&&(z=ut)}return z},D=U=>{let k=C(U);return[l.x+(y[0]*Math.cos(U)-y[1]*Math.sin(U))*k,R,l.z+(y[1]*Math.cos(U)+y[0]*Math.sin(U))*k]},N=r.count;for(let U=0;U<S;U++)r.tri([l.x,R,l.z],D(-w+2*w*(U+1)/S),D(-w+2*w*U/S),A,b,b);o.push({id:l.id,start:N,end:r.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||cm.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let u=l.top??e,[f,h,d]=l.size??ju[l.lamp],g=l.base??0,x=(l.rotation??0)*ue,m={ceiling:u-.07,downlight:u-.03,spot:u-d,panel:u-.03,pendant:Math.max(.4,u-d)+.08,floor:g+d-.15,uplight:g+d,table:g+d-.09,wall:g+d/2,strip:g+Math.max(.02,d)-.01,bollard:g+d-.08,garden:g+d-.03}[l.lamp],p=(v,y,_=1)=>{n.push(v,m,y),s.push(...c.color.map(M=>M*c.level*.7*_))};if(l.lamp==="strip")for(let v of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,g+f*(.5+v),l.z),s.push(...c.color.map(y=>y*c.level*.7*.6))):p(l.x+Math.cos(x)*f*v,l.z+Math.sin(x)*f*v,.6);else l.lamp==="wall"?p(l.x-Math.sin(x)*(h/2+.05),l.z+Math.cos(x)*(h/2+.05)):p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let v=new et(...c.color.map(A=>A*.09*c.level)),y=new et(0,0,0),_=Math.max(.03,f/2),M=.45+.35*c.level,w=16;for(let A=0;A<w;A++){let b=A/w*Math.PI*2,S=(A+1)/w*Math.PI*2,R=[l.x+Math.cos(b)*_,m,l.z+Math.sin(b)*_],T=[l.x+Math.cos(S)*_,m,l.z+Math.sin(S)*_],P=[l.x+Math.cos(b)*M,.02,l.z+Math.sin(b)*M],L=[l.x+Math.cos(S)*M,.02,l.z+Math.sin(S)*M];r.tri(R,P,L,v,y,y),r.tri(R,L,T,v,y,v)}}}let a=new qt;a.setAttribute("position",new Bt(n,3)),a.setAttribute("color",new Bt(s,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=r.geometry(),t.coneMesh.visible=r.count>0,t.coneTris=o}buildScreens(t){let e=Wu(t.floor,this.parked).furniture.filter(r=>this.screens.has(r.id)),n=e.map(r=>`${r.id}:${r.x},${r.z},${r.rotation},${r.w},${r.d},${r.h},${r.mount_y??""},${r.mirror?1:0}:${JSON.stringify(this.screens.get(r.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let s=new ce;for(let r of e){let o=this.screens.get(r.id),a=r.rotation*ue,l=Math.cos(a),c=Math.sin(a),u=(_,M,w)=>[r.x+_*l-w*c,M,r.z+_*c+w*l];if(o.faces){let _=Math.max(.05,r.w)*(r.mirror?-1:1),M=Math.max(.05,r.d),w=Math.max(.005,r.h),A=pn(t.floor,r);for(let b of o.faces){if(b.part==="lights"){let B=Ie(r.type),z=V=>["#e8f4ff","#ff3b4f"].includes(V.color.toLowerCase());if(B&&B.parts.some(z)){let V=new et(...b.color.map(tt=>Math.min(1,tt*(.4+.6*b.level))));Sl(s,B,r,A,V.getHex(),z)}continue}if(b.part==="cabin"){let B=Ie(r.type),z=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(B&&B.parts.some(z)){let V=new et(...b.color.map(tt=>Math.min(1,tt*(.3+.5*b.level))));Sl(s,B,r,A,V.getHex(),z);continue}}if(b.part==="band"||b.part==="cabin"){let B=b.part==="cabin",z=A+w*(B?.6:.42),V=B?A+w*.86:z+.07,tt=new et(...b.color.map(St=>Math.min(1,St*(.3+.45*b.level)))),Z=Math.abs(_)/2+(B?.012:.02),ct=M/2+(B?.012:.02),ut=[[-Z,-ct],[Z,-ct],[Z,ct],[-Z,ct]];for(let St=0;St<4;St++){let q=ut[St],Y=ut[(St+1)%4],nt=u(q[0]*Math.sign(_),z,q[1]),ht=u(Y[0]*Math.sign(_),z,Y[1]),lt=u(Y[0]*Math.sign(_),V,Y[1]),Dt=u(q[0]*Math.sign(_),V,q[1]);s.tri(nt,ht,lt,tt),s.tri(nt,lt,Dt,tt)}continue}let S=b.part==="right"?.03:-Math.abs(_)/2+.03,R=b.part==="left"?-.03:Math.abs(_)/2-.03,T=A+(b.part==="bottom"?w*.45:w)+.006,P=new et(...b.color.map(B=>Math.min(1,B*(.35+.65*b.level)))),L=new et(0,0,0),C=(B,z,V=T)=>u(B*Math.sign(_),V,z),D=[C(S,-M/2+.03),C(R,-M/2+.03),C(R,M/2-.03),C(S,M/2-.03)];s.tri(D[0],D[2],D[1],P),s.tri(D[0],D[3],D[2],P);let N=.12+.1*b.level,U=P.clone().multiplyScalar(.5),k=[C(S-N,-M/2-N,T+.004),C(R+N,-M/2-N,T+.004),C(R+N,M/2+N,T+.004),C(S-N,M/2+N,T+.004)];for(let B=0;B<4;B++){let z=(B+1)%4;s.tri(D[B],k[z],k[B],U,L,L),s.tri(D[B],D[z],k[z],U,U,L)}}continue}let f=Ie(r.type);if(f&&!f.light&&o.ring&&f.parts.some(_=>_.glow)){let _=new et(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));Sl(s,f,r,pn(t.floor,r),_.getHex())}let h=Cu(r,t.floor);if(!h)continue;let d=new et(...o.color.map(_=>Math.min(1,_*(.35+.65*o.level)))),g=new et(0,0,0),x=h.z+.004;if(s.tri(u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),d),s.tri(u(h.x0,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x),d),o.plain)continue;let m=.18+.12*o.level,p=d.clone().multiplyScalar(.5),v=[u(h.x0,h.y0,x),u(h.x1,h.y0,x),u(h.x1,h.y1,x),u(h.x0,h.y1,x)],y=[u(h.x0-m,h.y0-m,x+.01),u(h.x1+m,h.y0-m,x+.01),u(h.x1+m,h.y1+m,x+.01),u(h.x0-m,h.y1+m,x+.01)];for(let _=0;_<4;_++){let M=(_+1)%4;s.tri(v[_],y[_],y[M],p,g,g),s.tri(v[_],y[M],v[M],p,g,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){var s;let n=new Map(e.map(r=>[r.id,r]).filter(([r])=>{var o;return!!((o=this.screens.get(r))!=null&&o.picture)}));for(let[r,o]of t.screenPics)n.has(r)&&this.screens.get(r).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),(s=o.texture)==null||s.dispose(),t.screenPics.delete(r));for(let[r,o]of n){let a=this.screens.get(r),l=Cu(o,t.floor);if(!l)continue;let c=t.screenPics.get(r);if(!c){let u=new Vt(new xi(1,1),new le({color:16777215,transparent:!0}));u.visible=!1,u.renderOrder=5,c={url:a.picture,mesh:u,texture:null},t.screenPics.set(r,c),t.group.add(u);let f=c;new Tr().load(a.picture,h=>{if(t.screenPics.get(r)!==f){h.dispose();return}h.colorSpace=Pe,f.texture=h;let d=f.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(f.mesh,o,l,h),f.mesh.visible=!0,this.invalidate()},void 0,()=>{})}c.mesh.material.color.setScalar(.45+.55*a.level),c.texture&&this.placeScreenPicture(c.mesh,o,l,c.texture)}}placeScreenPicture(t,e,n,s){let r=s.image,o=r!=null&&r.width&&(r!=null&&r.height)?r.width/r.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),u=c/o,f=e.rotation*ue,h=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,u,1),t.rotation.set(0,-f,0),t.position.set(e.x+h*Math.cos(f)-d*Math.sin(f),(n.y0+n.y1)/2,e.z+h*Math.sin(f)+d*Math.cos(f))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){var u;let e=this.flows.filter(f=>f.floorId===t.floor.id).map(Ku).join(";"),n=[],s=[],r=[],o=[],a=[];for(let f of this.flows){if(f.floorId!==t.floor.id)continue;let h=this.flowPhase.get(Ku(f))??{speed:hm(f.power),offset:0},d=f.power>.5?Math.min(1,.5+f.power/2500):.22,g=f.color.map(y=>y*d),x=Math.hypot(f.b[0]-f.a[0],f.b[1]-f.a[1],f.b[2]-f.a[2]);if(x<1e-4)continue;let m=[(f.b[0]-f.a[0])/x,(f.b[1]-f.a[1])/x,(f.b[2]-f.a[2])/x],p=[];if(Math.abs(m[1])<.5){let y=Math.hypot(m[0],m[2])||1;p.push([-m[2]/y,0,m[0]/y])}else p.push([1,0,0],[0,0,1]);let v=this.lowQuality?[[lm*1.4,1]]:[[GM,.25],[lm,1]];for(let[y,_]of v)for(let M of p){let w=y/2,A=(S,R)=>[S[0]+M[0]*w*R,S[1]+M[1]*w*R,S[2]+M[2]*w*R],b=[[A(f.a,-1),f.dist,0],[A(f.b,-1),f.dist+x,0],[A(f.b,1),f.dist+x,1],[A(f.a,1),f.dist,1]];for(let S of[0,1,2,0,2,3]){let[R,T,P]=b[S];n.push(R[0],R[1],R[2]),s.push(g[0]*_,g[1]*_,g[2]*_),r.push(T,P),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&((u=l.getAttribute("position"))==null?void 0:u.count)===n.length/3){for(let[f,h]of[["color",s],["flowSpeed",o],["flowOffset",a]]){let d=l.getAttribute(f);d.array.set(h),d.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new qt;c.setAttribute("position",new Bt(n,3)),c.setAttribute("color",new Bt(s,3)),c.setAttribute("uv",new Bt(r,2)),c.setAttribute("flowSpeed",new Bt(o,1)),c.setAttribute("flowOffset",new Bt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Jp(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,s]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=s,n.visible=s.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){var t;for(let e of this.floors){let n=e.geo.floor.getAttribute("color");for(let s of e.geo.roomTris){let r=new et(s.color),o=(t=this.roomTint)==null?void 0:t.get(s.roomId);o&&r.lerp(new et(...o).multiplyScalar(.6),.9),s.roomId===this.roomId&&r.lerp(qM,o?.3:.75);for(let a=s.start*3;a<s.end*3;a++)n.setXYZ(a,r.r,r.g,r.b)}n.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(t){var f;let e=new en;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let g of h.floor.rooms)for(let[x,m]of g.points)e.expandByPoint(new G(x,d,m)),e.expandByPoint(new G(x,d+h.floor.height,m))}e.isEmpty()&&e.set(new G(-4,0,-4),new G(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new G),s=e.getSize(new G),r=Math.max(8,this.distanceFor(s)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,r*3),n.y=e.min.y+s.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=r);let o=this.floorId===null,a=o?null:((f=this.floorMap.get(this.floorId))==null?void 0:f.floor.start_view)??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let u=c?l.target:null;if(u&&n.set(u.x,u.y+(a?this.floorBase(this.floorId):0),u.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new G(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:r,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new en,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new G(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=jM();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new G),s=t.getSize(new G),r=Qu*Math.ceil((Math.max(s.x,s.z)+16)/Qu);this.ground.scale.set(r,r,1),this.ground.position.set(n.x,e-Ni-.02,n.z)}distanceFor(t){let e=this.camera.fov*ue,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),s=new Ar;return s.setFromCamera(new jt(t/n.width*2-1,-(e/n.height)*2+1),this.camera),s}pick(t,e){var a,l,c;let n=this.rayAt(t,e),s=this.activeFloors(),r=s.flatMap(u=>[u.lampMesh,u.coneMesh,u.framesMesh,u.glassMesh,u.blindsMesh,u.wallMesh,u.floorMesh].filter(f=>f.visible)),o=(u,f)=>{var h;return(h=u.find(d=>f>=d.start&&f<d.end))==null?void 0:h.id};for(let u of n.intersectObjects(r,!1)){if(u.faceIndex==null)continue;let f=u.faceIndex,h=s.find(d=>d.group===u.object.parent);if(u.object===h.lampMesh||u.object===h.coneMesh){let d=o(u.object===h.lampMesh?h.lampTris:h.coneTris,f);if(d)return{entity:d}}else if(u.object===h.framesMesh||u.object===h.blindsMesh||u.object===h.glassMesh){if(this.wallMode==="cut"&&u.face){let x=((a=u.object.geometry.getAttribute("fold"))==null?void 0:a.getX(u.face.a))??Qt;if(x!==Qt&&Math.floor(x/16)===0)continue}let d=o(u.object===h.framesMesh?h.frameTris:u.object===h.glassMesh?h.glassTris:h.blindTris,f),g=d?this.pickOpenings.get(d):void 0;if(g)return{entity:g}}else if(u.object===h.wallMesh){let d=o(h.geo.furnitureTris,f),g=d?this.pickFurniture.get(d):void 0;if(g)return{entity:g};if(u.face&&!d){let x=((l=h.wallMesh.geometry.getAttribute("fold"))==null?void 0:l.getX(u.face.a))??32,m=Math.floor(x/16),p=x%16,v=this.wallMode==="cut"&&m===0,y=(h.mask.glass.value&1<<p)!==0;if(!v){let _=n.ray.direction,M=Math.hypot(_.x,_.z)||1,w=[u.point.x-_.x/M*.3,u.point.z-_.z/M*.3],A=((c=h.floor.rooms.find(b=>b.points.length>=3&&se(w,b.points)))==null?void 0:c.id)??null;if(this.roomId!==null){if(A===this.roomId)return{floorId:h.floor.id,roomId:A}}else if(!y&&A)return{floorId:h.floor.id,roomId:A}}}}else if(u.object===h.floorMesh)return{floorId:h.floor.id,roomId:o(h.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),f)??null}}return null}onTap(t,e){var s,r,o,a,l,c;let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),(r=(s=this.options).onDeviceSelect)==null||r.call(s,n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Ol),this.invalidate(),(a=(o=this.options).onDeviceTap)==null||a.call(o,n.entity,t,e);return}(c=(l=this.options).onRoomTap)==null||c.call(l,(n==null?void 0:n.floorId)??this.floorId??"",(n==null?void 0:n.roomId)??null)}furnitureAt(t,e){var a;let n=this.rayAt(t,e),s=this.activeFloors(),r=l=>[l.screenMesh,l.fridgeMesh,...[...l.screenPics.values()].map(c=>c.mesh)],o=s.flatMap(l=>[l.lampMesh,l.wallMesh,...r(l)].filter(c=>c.visible));for(let l of n.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=s.find(h=>h.group===l.object.parent||r(h).includes(l.object));if(!c)continue;if(l.object!==c.lampMesh&&l.object!==c.wallMesh){let h=this.furnitureNear(c,l.point.x,l.point.z);if(h)return{fv:c,id:h,y:l.point.y};continue}let f=(a=(l.object===c.lampMesh?c.lampFurnTris:c.geo.furnitureTris).find(h=>l.faceIndex>=h.start&&l.faceIndex<h.end))==null?void 0:a.id;if(f)return{fv:c,id:f,y:l.point.y}}return null}furnitureNear(t,e,n){let s=null;for(let r of t.floor.furniture){let o=r.rotation*ue,a=e-r.x,l=n-r.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-r.w/2,u=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-r.d/2,f=Math.max(c,u);f<.25&&(!s||f<s.d)&&(s={id:r.id,d:f})}return(s==null?void 0:s.id)??null}floorPoint(t,e,n,s){let r=this.rayAt(e,n),o=s??t.floor.elevation+t.y,a=r.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-r.ray.origin.y)/a.y;return l<=0?null:[r.ray.origin.x+a.x*l,r.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){var n;return((n=this.furnitureAt(t,e))==null?void 0:n.id)??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){var o,a,l,c,u,f,h,d;if((o=this.surfaceGrab)!=null&&o.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let s=this.furnishTypes;if(s){let g=n?(a=this.devices.find(y=>y.id===n))==null?void 0:a.furnitureId:void 0,x=g?null:this.furnitureAt(t,e),m=g??(x==null?void 0:x.id),p=m?this.floors.find(y=>y.floor.furniture.some(_=>_.id===m)):void 0,v=(l=p==null?void 0:p.floor.furniture.find(y=>y.id===m))==null?void 0:l.type;return!!(p&&m&&v&&s.has(v))&&this.grabItem(p,m,t,e)}if(n){let g=(c=this.devices.find(m=>m.id===n))==null?void 0:c.furnitureId,x=g?this.floors.find(m=>m.floor.furniture.some(p=>p.id===g)):void 0;return!g||!x?this.grabDevice(n,t,e):this.grabItem(x,g,t,e)}let r=this.furnitureAt(t,e);if(!r){let g=this.pick(t,e);return g&&"entity"in g?this.grabDevice(g.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),(f=(u=this.options).onFurnitureSelect)==null||f.call(u,null)),this.selectedDevice&&(this.selectDevice(null),(d=(h=this.options).onDeviceSelect)==null||d.call(h,null)),!1)}return this.grabItem(r.fv,r.id,t,e,r.y)}grabItem(t,e,n,s,r){var f,h,d,g;let o=t.floor.furniture.find(x=>x.id===e),a=r===void 0?void 0:Math.min(r,this.camera.position.y-.3),l=this.floorPoint(t,n,s,a);if(!o||!l)return!1;let c,u=this.rayAt(n,s).ray.direction;if(r!==void 0&&-u.y<.34){let x=this.camera.position,m=this.camera.getWorldDirection(new G),p=Math.hypot(m.x,m.z)||1,v=[m.x/p,m.z/p],y=Math.hypot(l[0]-x.x,l[1]-x.z,(a??0)-x.y),_=this.renderer.domElement.getBoundingClientRect().height||1,M=2*y*Math.tan(this.camera.fov*Math.PI/360)/_;c={x0:n,y0:s,fx:o.x,fz:o.z,right:[-v[1],v[0]],fwd:v,perPx:M,gain:Math.min(2,1/Math.max(.5,-u.y))}}return o.locked?(this.selectFurniture(o.id),(h=(f=this.options).onFurnitureSelect)==null||h.call(f,o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),(g=(d=this.options).onFurnitureSelect)==null||g.call(d,o.id),!0)}grabDevice(t,e,n){var a,l,c,u;let s=this.devices.find(f=>f.id===t),r=s&&this.floorMap.get(s.floorId),o=r&&this.floorPoint(r,e,n);return!s||!r||!o?!1:s.fixed?(this.selectDevice(t),(l=(a=this.options).onDeviceSelect)==null||l.call(a,t),!1):(this.deviceGrab={id:t,floorId:r.floor.id,offset:[s.x-o[0],s.z-o[1]],x:s.x,z:s.z,moved:!1},this.selectDevice(t),(u=(c=this.options).onDeviceSelect)==null||u.call(c,t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){var e,n;t&&this.selectedFurniture&&(this.selectFurniture(null),(n=(e=this.options).onFurnitureSelect)==null||n.call(e,null)),this.selectedDevice=t;for(let[s,r]of this.devicePins)r.el.classList.toggle("fp3d-dev-sel",s===t)}dragFurniture(t,e){var h,d,g,x;if(this.surfaceDragging){(h=this.surfaceGrab)==null||h.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let m=this.floorMap.get(n.floorId),p=this.devices.find(_=>_.id===n.id),v=m&&this.floorPoint(m,t,e);if(!m||!p||!v)return;let y=((d=this.building)==null?void 0:d.settings.grid)??.05;n.x=p.x=Math.round((v[0]+n.offset[0])/y)*y,n.z=p.z=Math.round((v[1]+n.offset[1])/y)*y,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let s=this.grab,r=s&&this.floorMap.get(s.floorId);if(!s||!r)return;let o=s.screen,a;if(o){let m=(t-o.x0)*o.perPx,p=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*m-o.fwd[0]*p-s.offset[0],o.fz+o.right[1]*m-o.fwd[1]*p-s.offset[1]]}else a=this.floorPoint(r,t,e,s.plane);if(!a)return;let l=((g=this.building)==null?void 0:g.settings.grid)??.05,c=r.floor.furniture.find(m=>m.id===s.id),u=Math.round((a[0]+s.offset[0])/l)*l,f=Math.round((a[1]+s.offset[1])/l)*l;[s.x,s.z]=c?Ed(r.floor,c,u,f,((x=this.building)==null?void 0:x.settings.wall_interior)??0):[u,f],s.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){var n,s,r,o,a;if(this.surfaceDragging){this.surfaceDragging=!1,(n=this.surfaceGrab)==null||n.end();return}let t=this.deviceGrab;this.deviceGrab=null,t!=null&&t.moved&&((r=(s=this.options).onDeviceMove)==null||r.call(s,t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3));let e=this.grab;this.grab=null,e!=null&&e.moved&&((a=(o=this.options).onFurnitureMove)==null||a.call(o,e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3)),this.updateGhost()}updateGhost(){var p,v;this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=this.selectedFurniture,e=t?this.floors.find(y=>y.floor.furniture.some(_=>_.id===t)):void 0,n=e==null?void 0:e.floor.furniture.find(y=>y.id===t);if(!e||!n)return;let s=((p=this.grab)==null?void 0:p.id)===n.id?this.grab.x:n.x,r=((v=this.grab)==null?void 0:v.id)===n.id?this.grab.z:n.z,o=e.floor.height,a=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,l=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),c=Ie(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?pn(e.floor,n):a?n.type==="lamp_pendant"?o-n.h-.1:o-l:pn(e.floor,n),u=n.rotation*ue,f=Math.cos(u),h=Math.sin(u),d=(y,_,M)=>[s+y*f-_*h,M,r+y*h+_*f],g=new He,x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]],m=new et(.25,.9,1);for(let y=0;y<4;y++){let[_,M]=x[y],[w,A]=x[(y+1)%4];g.seg(d(_,M,c+.01),d(w,A,c+.01),m),g.seg(d(_,M,c+l),d(w,A,c+l),m),g.seg(d(_,M,c+.01),d(_,M,c+l),m)}g.seg(d(-n.w/2,n.d/2+.03,c+.02),d(n.w/2,n.d/2+.03,c+.02),new et(1,1,1)),this.ghost=new ln(g.geometry(),new nn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=e.floor.elevation+e.y,this.ghost.renderOrder=20,this.scene.add(this.ghost)}onHold(t,e){var s,r;let n=this.pick(t,e);n&&"entity"in n&&((r=(s=this.options).onDeviceHold)==null||r.call(s,n.entity,t,e))}swipeStart(t,e,n,s){var o,a;if(this.furnish||Math.abs(s)<Math.abs(n)*1.2)return!1;let r=this.pick(t,e);return!r||!("entity"in r)||((a=(o=this.options).onDeviceSwipe)==null?void 0:a.call(o,r.entity,"start",0,t,e))!==!0?!1:(this.swipe={entity:r.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){var p,v;let n=this.floors.filter(y=>y.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let s=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),r=Math.round(t*s),o=Math.round(e*s),a=new Ke(r,o);a.texture.colorSpace=Pe;let l=new zn(-1,1,1,-1,.1,400),c=this.floors.map(y=>({fv:y,visible:y.group.visible,y:y.y,o:y.o,standing:y.mask.standing.value,glass:y.mask.glass.value})),u=((p=this.roof)==null?void 0:p.group.visible)??!1,f=((v=this.ghost)==null?void 0:v.visible)??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(r*o*4),g=document.createElement("canvas");g.width=r,g.height=o;let x=g.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let y of n){for(let D of this.floors)D.group.visible=D===y;y.y=0,y.o=1,this.applyFloor(y),y.group.visible=!0,y.mask.standing.value=0,y.mask.glass.value=0;let _=y.floor.rooms.flatMap(D=>D.points),M=y.floor.elevation,w=new en(new G(Math.min(..._.map(D=>D[0]))-.3,M,Math.min(..._.map(D=>D[1]))-.3),new G(Math.max(..._.map(D=>D[0]))+.3,M+Math.min(y.floor.cut_height,y.floor.height),Math.max(..._.map(D=>D[1]))+.3)),A=w.getCenter(new G),b=-.6,S=.8,R=new G(Math.sin(S)*Math.sin(b),Math.cos(S),Math.sin(S)*Math.cos(b));l.position.copy(A).addScaledVector(R,100),l.lookAt(A),l.updateMatrixWorld();let T=.5,P=.5;for(let D of[w.min.x,w.max.x])for(let N of[w.min.y,w.max.y])for(let U of[w.min.z,w.max.z]){let k=new G(D,N,U).applyMatrix4(l.matrixWorldInverse);T=Math.max(T,Math.abs(k.x)),P=Math.max(P,Math.abs(k.y))}let L=r/o;T/P>L?P=T/L:T=P*L,l.left=-T*1.05,l.right=T*1.05,l.top=P*1.05,l.bottom=-P*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,r,o,d);let C=x.createImageData(r,o);for(let D=0;D<o;D++)C.data.set(d.subarray((o-1-D)*r*4,(o-D)*r*4),D*r*4);x.putImageData(C,0,0),m.push({floorId:y.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let y of c)y.fv.y=y.y,y.fv.o=y.o,y.fv.mask.standing.value=y.standing,y.fv.mask.glass.value=y.glass,this.applyFloor(y.fv),y.fv.group.visible=y.visible;this.roof&&(this.roof.group.visible=u),this.ghost&&(this.ghost.visible=f),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let s=this.robots.get(n.id);s||(s=this.makeRobot(n),this.robots.set(n.id,s));let r=s.info.mode,o=n.mode==="cleaning"&&r==="cleaning"&&((s.info.roomId??null)!==(n.roomId??null)||JSON.stringify(s.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(s.info=n,n.mode==="cleaning"&&(r!=="cleaning"||o||!s.motion.path.length)){let a=n.room?Qp(n.room,void 0,void 0,n.obstacles):Zu(n.rest),l=a.length?a:Zu(n.rest),c=0;l.forEach((u,f)=>{Math.hypot(u[0]-s.motion.pos[0],u[1]-s.motion.pos[1])<Math.hypot(l[c][0]-s.motion.pos[0],l[c][1]-s.motion.pos[1])&&(c=f)}),s.motion.path=l,s.motion.next=c,n.room&&!se(s.motion.pos,n.room)&&(s.motion.pos=[l[c][0],l[c][1]])}s.led.color.setHex(sm[n.mode])}for(let[n,s]of this.robots)e.has(n)||(s.group.removeFromParent(),s.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let s=new ce,r=(a,l,c,u,f)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ae(s,h,l,c,u,f,{aoFrom:0,bottom:!1})};r(.17,.012,.08,2371657,3424863),r(.055,.08,.1,3820138,5070726),this.robotGeo=s.geometry(),this.robotMat=new le({vertexColors:!0});let o=new ce;Ae(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new Ze,n=new le({color:sm[t.mode]});return e.add(new Vt(this.robotGeo,this.robotMat),new Vt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let s of this.robots.values()){let r=this.floorMap.get(s.info.floorId);r&&(s.group.parent!==r.group&&r.group.add(s.group),e>0?n=jp(s.motion,s.info,e)||n:n||=s.info.mode==="cleaning"||s.info.mode==="returning",s.group.position.set(s.motion.pos[0],0,s.motion.pos[1]),s.group.rotation.y=s.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new et(.25-.2*a,.95-.83*a,1-.7*a),s=new et(0,0,0),r=new et(.3,1,.6),o=.02;for(let a of this.floors){let l=new ce;for(let u of e)u.floorId===a.floor.id&&u.points.forEach(([f,h],d)=>{let g=u.points[d-1];if(g){let x=Math.hypot(f-g[0],h-g[1])||1,m=-(h-g[1])/x*.1,p=(f-g[0])/x*.1;l.tri([g[0]+m,o,g[1]+p],[f+m,o,h+p],[f-m,o,h-p],r,r,r),l.tri([g[0]+m,o,g[1]+p],[f-m,o,h-p],[g[0]-m,o,g[1]-p],r,r,r)}for(let x=0;x<10;x++){let m=x/10*Math.PI*2,p=(x+1)/10*Math.PI*2;l.tri([f,o,h],[f+Math.cos(p)*.35,o,h+Math.sin(p)*.35],[f+Math.cos(m)*.35,o,h+Math.sin(m)*.35],r,s,s)}});let c=null;for(let u of t){if(u.floorId!==a.floor.id)continue;let f=n(u.age);if(c){let h=Math.hypot(u.x-c.x,u.z-c.z)||1,d=-(u.z-c.z)/h*.06,g=(u.x-c.x)/h*.06,x=n(c.age);l.tri([c.x+d,o,c.z+g],[u.x+d,o,u.z+g],[u.x-d,o,u.z-g],x,f,f),l.tri([c.x+d,o,c.z+g],[u.x-d,o,u.z-g],[c.x-d,o,c.z-g],x,f,x)}for(let h=0;h<12;h++){let d=h/12*Math.PI*2,g=(h+1)/12*Math.PI*2;l.tri([u.x,o,u.z],[u.x+Math.cos(g)*.22,o,u.z+Math.sin(g)*.22],[u.x+Math.cos(d)*.22,o,u.z+Math.sin(d)*.22],f,s,s)}c=u}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let s=(e.rotation??0)*ue,r=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(r?65:20))*ue)),a=n.floor.elevation+n.ty+(r?n.floor.height-.1:e.y),l=new G(-Math.sin(s)*Math.cos(o),-Math.sin(o),Math.cos(s)*Math.cos(o));return this.controls.flyTo({target:new G(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(s),-Math.cos(s))},900),!0}flashDevices(t){let e=performance.now()+Ol;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,s,r){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new G(e,o.floor.elevation+o.ty+s,n),radius:5.5,phi:.78},900),r){this.flashes.set(r,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(r)}"]`);a==null||a.classList.add("fp3d-dev-found"),setTimeout(()=>a==null?void 0:a.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let s=this.controls.update(t),r=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[g,x]of this.flashes){let m=this.deviceFloor.get(g);m&&d.add(m),x<=t&&this.flashes.delete(g)}a=this.flashes.size>0;for(let g of this.floors)d.has(g.floor.id)&&this.buildLamps(g)}let l=this.placeRoof(e),c=this.stepRobots(t),u=this.stepWeather(t),f=s||r||o||a||l,h=[];if((s||this.controls.busy)&&h.push("camera"),r&&h.push("floors"),o&&h.push("openings"),a&&h.push("flash"),l&&h.push("roof"),this.flowActive&&h.push("flow"),this.soundActive&&h.push("sound"),this.poolActive&&h.push("pool"),this.solarActive&&h.push("solar"),this.effectTick&&h.push("effect"),c&&h.push("robot"),n&&h.push("orbit"),this.tintTick&&h.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=f?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||r||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,h),f&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*um:um;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let g of this.floors)g.o<.02||!this.effectFloors.has(g.floor.id)||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},d)}!f&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&u&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!f&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!f&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*am:am))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,s=t.z-e.z,r=Math.hypot(n,s)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(u=>u.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((u,f)=>{let h=u?u[0]*n/r+u[1]*s/r>=.25:a;!l&&h&&(c|=1<<f)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new G,s=this.houseView,r=[];for(let o of this.floors){let a=o.bbox;if(!(s&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,u=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(x,u,m).project(this.camera);let p=(n.x+1)/2*t,v=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:v}),(!c||p>c.x)&&(c={x:p,y:v})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let f=o.labelSize.w,h=8+this.labelInset,d=l.x-f-14,g=l.y;d<h&&this.labelInset&&(d=c.x+14,g=c.y),r.push({fv:o,left:Math.max(h,Math.min(t-f-8,d)),y:g,h:o.labelSize.h})}r.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<r.length;o++){let a=r[o-1];r[o].y=Math.max(r[o].y,a.y+(a.h+r[o].h)/2+8)}for(let o of r)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new G(o.p[0],o.p[1]+((l==null?void 0:l.y)??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?(1-this.roofO)*2.2:0),o.p[2]),u=this.camera.position.clone().sub(c),f=u.length(),h=u.normalize().dot(new G(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,f)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||s||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){var r;let n=new G,s=this.houseView;for(let o of this.persons){let a=this.personPins.get(o.id),l=this.floorMap.get(o.floorId);if(!a)continue;if(!l||s||l.to<.99||l.o<.9||this.otherFloor(l)){this.place(a,null);continue}n.set(o.x,l.floor.elevation+l.y+.9,o.z).project(this.camera);let c=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(a,c?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let a=(r=this.devicePins.get(o.id))==null?void 0:r.el;if(!a)continue;let l=this.floorMap.get(o.floorId),c=o.id.startsWith("detect:");if(!l||s&&!c||l.to<.99||l.o<.9||o.pin===!1||this.otherFloor(l)){this.place(a,null);continue}if(n.set(o.x,l.floor.elevation+l.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(a,null);continue}let f=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(a)!==f&&(this.pinMode.set(a,f),a.classList.toggle("fp3d-dev-full",f==="full"),a.classList.toggle("fp3d-dev-dim",f==="dim")),this.place(a,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let s=t-this.fpsStart;if(s>500||!n){let r=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/s):0,busy:e,worstMs:Math.round(this.worstFrame),calls:r.calls,triangles:r.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio()}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function $M(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,u)=>{e.strokeStyle=`rgba(55,224,255,${u})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let s=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};s(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let u=o+l*.37%1*256;n(u,c,u,c+256/5,.07)}}),s(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let u=a+l*.53%1*256;n(c,u,c+256/7,u,.06)}}),s(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),s(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let u=l?256/4:0;for(let f of[u,u+256/2])n(o+f+.75,c,o+f+.75,c+256/2,.09)}}),s(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let r=new mi(t);return r.flipY=!1,r.wrapS=hn,r.wrapT=hn,r.anisotropy=4,r.colorSpace=Pe,r}function ZM(i){let t=new le({map:i,transparent:!0,blending:Re,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function JM(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new mi(i);return e.wrapS=Wi,e.wrapT=Wi,e.colorSpace=Pe,e}function Ku(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function hm(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function KM(i){let t=new le({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:xe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function fm(i,t){let e=i.rooms.map((s,r)=>r),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let[s,r]of t){let o=i.rooms.findIndex(u=>u.id===s),a=i.rooms.findIndex(u=>u.id===r);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((s,r)=>n(r))}function QM(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let s=new mi(t);return s.colorSpace=Pe,s}function jM(){let t=Qu,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let s=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);s.addColorStop(0,"rgba(0,0,0,1)"),s.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=s,n.fillRect(0,0,1024,1024);let r=new mi(e);return r.anisotropy=4,r.colorSpace=Pe,r}function GE(i,t){return new th(i,t)}function Ju(i,t,e,n){let[s,r,o]=t.size??ju[t.lamp],a=t.base??0,l=(t.rotation??0)*ue,c=Math.cos(l),u=Math.sin(l),f=(x,m)=>[t.x+x*c-m*u,t.z+x*u+m*c],h=(x,m,p,v,y,_=14)=>{let M=[];for(let w=0;w<_;w++){let A=w/_*Math.PI*2;M.push([t.x+Math.cos(A)*x,t.z+Math.sin(A)*x])}Ae(i,M,m,p,v,y,{aoFrom:0,bottom:!0})},d=(x,m,p,v,y,_,M,w=M)=>Ae(i,[f(x,p),f(m,p),f(m,v),f(x,v)],y,_,M,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(s,r)/2);switch(t.lamp){case"ceiling":h(g*.25,e-.04,e,ee,ee,8),h(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);h(.06,e-.02,e,ee,ee,8);let m=t.variant==="globe"?x+2*g:t.variant==="drum"?x+.24:x+.2;if(h(.008,m,e-.02,ee,ee,5),t.variant==="globe")for(let v=0;v<7;v++){let y=Math.PI*(v/7),_=Math.PI*((v+1)/7);h(g*Math.max(.2,Math.sin((y+_)/2)),x+g-g*Math.cos(y),x+g-g*Math.cos(_),n,n,14)}else if(t.variant==="cone")for(let v=0;v<4;v++)h(g*(.25+.75*(4-v)/4),x+.06*v,x+.06*(v+1),n,n,16);else t.variant==="drum"?h(g,x,x+.24,n,n,18):(h(g*.35,x+.14,x+.2,n,n,12),h(g,x,x+.14,n,n,16));break}case"downlight":h(g,e-.012,e,ee,ee,12),h(g*.7,e-.02,e-.012,n,n,12);break;case"spot":h(g*.6,e-.02,e,ee,ee,10),h(g,e-Math.max(.06,o),e-.02,ee,ee,12),h(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-s/2,s/2,-r/2,r/2,e-Math.max(.015,o),e,ee,ee),d(-s/2+.02,s/2-.02,-r/2+.02,r/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,ee,ee),h(.014,a+.03,a+o-.12,ee,ee,6),h(g,a+o-.14,a+o-.02,ee,ee),h(g*.92,a+o-.02,a+o,n,n);break;case"bollard":h(g,a,a+o-.14,ee,ee,10),h(g*.9,a+o-.14,a+o-.03,n,n,10),h(g*1.1,a+o-.03,a+o,ee,ee,10);break;case"garden":h(.012,a,a+o-.08,ee,ee,5),h(g,a+o-.08,a+o-.01,ee,ee,10),h(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,ee,ee),h(.014,a+.03,a+o-.28,ee,ee,6),h(g,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,ee,ee),h(.012,a+.03,a+o-.16,ee,ee,6),h(g,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??gl;d(-s/2+.03,s/2-.03,-r/2,-r/2+.02,x,x+o,ee),d(-s/2,s/2,-r/2+.02,r/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),m=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-s/2,s/2,-r/2,r/2,m-x,m,n);break}let p=(t.roll??0)*ue,v=Math.cos(p),y=Math.sin(p),_=t.upright?a+s/2:m-x/2,M=(R,T,P)=>{let L=R,C=T*v-P*y,D=T*y+P*v;return t.upright&&([L,C]=[-C,L]),[t.x+L*c-D*u,_+C,t.z+L*u+D*c]},w=[M(-s/2,-x/2,-r/2),M(s/2,-x/2,-r/2),M(s/2,-x/2,r/2),M(-s/2,-x/2,r/2),M(-s/2,x/2,-r/2),M(s/2,x/2,-r/2),M(s/2,x/2,r/2),M(-s/2,x/2,r/2)],A=new et(n),b=[t.x,_,t.z],S=(R,T,P,L)=>{let[C,D,N]=[w[R],w[T],w[P]],U=[(D[1]-C[1])*(N[2]-C[2])-(D[2]-C[2])*(N[1]-C[1]),(D[2]-C[2])*(N[0]-C[0])-(D[0]-C[0])*(N[2]-C[2]),(D[0]-C[0])*(N[1]-C[1])-(D[1]-C[1])*(N[0]-C[0])],k=[C[0]-b[0],C[1]-b[1],C[2]-b[2]],B=U[0]*k[0]+U[1]*k[1]+U[2]*k[2]<0,[z,V,tt,Z]=B?[w[L],w[P],w[T],w[R]]:[w[R],w[T],w[P],w[L]];i.tri(z,V,tt,A,A,A),i.tri(z,tt,Z,A,A,A)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{Gu as FloorMap,th as FloorplanViewer,Hu as WalkCamera,GE as createViewer,OM as furnitureFront,UM as furniturePreview,YM as isLowEnd,Ju as pushLampModel};
