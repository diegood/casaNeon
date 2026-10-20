var xf=0,Zc=1,vf=2;var ks=1,yf=2,Kr=3,$n=0,en=1,ue=2,Zn=0,Di=1,Fe=2,Kc=3,zs=4,_f=5;var or=100,Mf=101,Sf=102,wf=103,Tf=104,Ef=200,Af=201,Rf=202,Cf=203,Jc=204,jc=205,Pf=206,If=207,Lf=208,Ff=209,Df=210,Nf=211,Of=212,Uf=213,Bf=214,na=0,ia=1,ra=2,zr=3,sa=4,oa=5,aa=6,la=7,Qc=0,kf=1,zf=2,Ln=0,tu=1,eu=2,nu=3,iu=4,ru=5,su=6,ou=7;var au=300,Ni=301,ar=302,Oa=303,Ua=304,Vs=306,tr=1e3,bn=1001,ca=1002,Ye=1003,Vf=1004;var Gs=1005;var Qe=1006,Ba=1007;var Oi=1008;var vn=1009,lu=1010,cu=1011,Jr=1012,ka=1013,Fn=1014,Dn=1015,Nn=1016,za=1017,Va=1018,jr=1020,uu=35902,hu=35899,fu=1021,du=1022,Sn=1023,Hn=1026,Ui=1027,pu=1028,Ga=1029,Bi=1030,Ha=1031;var Wa=1033,Hs=33776,Ws=33777,Xs=33778,Ys=33779,Xa=35840,Ya=35841,qa=35842,$a=35843,Za=36196,Ka=37492,Ja=37496,ja=37488,Qa=37489,qs=37490,tl=37491,el=37808,nl=37809,il=37810,rl=37811,sl=37812,ol=37813,al=37814,ll=37815,cl=37816,ul=37817,hl=37818,fl=37819,dl=37820,pl=37821,ml=36492,gl=36494,bl=36495,xl=36283,vl=36284,$s=36285,yl=36286;var ys=2300,ua=2301,Qo=2302,Bc=2303,kc=2400,zc=2401,Vc=2402;var Gf=3200;var mu=0,Hf=1,fi="",Ce="srgb",_s="srgb-linear",Ms="linear",ge="srgb";var ta=7680;var Wf=519,Xf=512,Yf=513,qf=514,_l=515,$f=516,Zf=517,Ml=518,Kf=519,Jf=35044,gu=35048;var bu="300 es",In=2e3,Ss=2001;function P0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function I0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function jf(){let i=Vr("canvas");return i.style.display="block",i}var zh={},Gr=null;function xu(...i){let t="THREE."+i.shift();Gr?Gr("log",t,...i):console.log(t,...i)}function Qf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=Qf(i);let t="THREE."+i.shift();if(Gr)Gr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Qf(i);let t="THREE."+i.shift();if(Gr)Gr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Qi(...i){let t=i.join(" ");t in zh||(zh[t]=!0,Wt(...i))}function td(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var ed={[na]:ia,[ra]:aa,[sa]:la,[zr]:oa,[ia]:na,[aa]:ra,[la]:sa,[oa]:zr},Wn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var mc=Math.PI/180,ha=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[t&255]+sn[t>>8&255]+"-"+sn[t>>16&15|64]+sn[t>>24&255]+"-"+sn[e&63|128]+sn[e>>8&255]+"-"+sn[e>>16&255]+sn[e>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function ce(i,t,e){return Math.max(t,Math.min(e,i))}function L0(i,t){return(i%t+t)%t}function gc(i,t,e){return(1-e)*i+e*t}function ds(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Su=class Su{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Su.prototype.isVector2=!0;var ie=Su,Xn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3],h=s[o+0],d=s[o+1],g=s[o+2],b=s[o+3];if(u!==b||l!==h||c!==d||f!==g){let m=l*h+c*d+f*g+u*b;m<0&&(h=-h,d=-d,g=-g,b=-b,m=-m);let p=1-a;if(m<.9995){let x=Math.acos(m),y=Math.sin(x);p=Math.sin(p*x)/y,a=Math.sin(a*x)/y,l=l*p+h*a,c=c*p+d*a,f=f*p+g*a,u=u*p+b*a}else{l=l*p+h*a,c=c*p+d*a,f=f*p+g*a,u=u*p+b*a;let x=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=x,c*=x,f*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[o],h=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+f*u+l*d-c*h,t[e+1]=l*g+f*h+c*u-a*d,t[e+2]=c*g+f*d+a*h-l*u,t[e+3]=f*g-a*u-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(r/2),u=a(s/2),h=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"YXZ":this._x=h*f*u+c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"ZXY":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u-h*d*g;break;case"ZYX":this._x=h*f*u-c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u+h*d*g;break;case"YZX":this._x=h*f*u+c*d*g,this._y=c*d*u+h*f*g,this._z=c*f*g-h*d*u,this._w=c*f*u-h*d*g;break;case"XZY":this._x=h*f*u-c*d*g,this._y=c*d*u-h*f*g,this._z=c*f*g+h*d*u,this._w=c*f*u+h*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=n+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-r*a,this._w=o*f-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wu=class wu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),f=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*f,this.y=n+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return bc.copy(this).projectOnVector(t),this.sub(bc)}reflect(t){return this.sub(bc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wu.prototype.isVector3=!0;var W=wu,bc=new W,Vh=new Xn,Tu=class Tu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],g=n[8],b=r[0],m=r[3],p=r[6],x=r[1],y=r[4],v=r[7],M=r[2],w=r[5],I=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*m+a*y+l*w,s[6]=o*p+a*v+l*I,s[1]=c*b+f*x+u*M,s[4]=c*m+f*y+u*w,s[7]=c*p+f*v+u*I,s[2]=h*b+d*x+g*M,s[5]=h*m+d*y+g*w,s[8]=h*p+d*v+g*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*s*f+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=f*o-a*c,h=a*l-f*s,d=c*s-o*l,g=e*u+n*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/g;return t[0]=u*b,t[1]=(r*c-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=h*b,t[4]=(f*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Qi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(xc.makeScale(t,e)),this}rotate(t){return Qi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(xc.makeRotation(-t)),this}translate(t,e){return Qi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(xc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Tu.prototype.isMatrix3=!0;var $t=Tu,xc=new $t,Gh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){let i={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=li(r.r),r.g=li(r.g),r.b=li(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=kr(r.r),r.g=kr(r.g),r.b=kr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fi?Ms:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Qi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Qi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_s]:{primaries:t,whitePoint:n,transfer:Ms,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ce},outputColorSpaceConfig:{drawingBufferColorSpace:Ce}},[Ce]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Gh,fromXYZ:Hh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ce}}}),i}var ae=F0();function li(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function kr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,fa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Tr===void 0&&(Tr=Vr("canvas")),Tr.width=t.width,Tr.height=t.height;let r=Tr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Tr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=li(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(li(e[n]/255)*255):e[n]=li(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},D0=0,Hr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(vc(r[o].image)):s.push(vc(r[o]))}else s=vc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function vc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var N0=0,yc=new W,an=class i extends Wn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=bn,r=bn,s=Qe,o=Oi,a=Sn,l=vn,c=i.DEFAULT_ANISOTROPY,f=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Zs(),this.name="",this.source=new Hr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yc).x}get height(){return this.source.getSize(yc).y}get depth(){return this.source.getSize(yc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==au)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case tr:t.x=t.x-Math.floor(t.x);break;case bn:t.x=t.x<0?0:1;break;case ca:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case tr:t.y=t.y-Math.floor(t.y);break;case bn:t.y=t.y<0?0:1;break;case ca:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=au;an.DEFAULT_ANISOTROPY=1;var Eu=class Eu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],g=l[9],b=l[2],m=l[6],p=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-b)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+b)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,v=(d+1)/2,M=(p+1)/2,w=(f+h)/4,I=(u+b)/4,_=(g+m)/4;return y>v&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=I/n):v>M?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=w/r,s=_/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=I/s,r=_/s),this.set(n,r,s,e),this}let x=Math.sqrt((m-g)*(m-g)+(u-b)*(u-b)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(m-g)/x,this.y=(u-b)/x,this.z=(h-f)/x,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ce(this.x,t.x,e.x),this.y=ce(this.y,t.y,e.y),this.z=ce(this.z,t.z,e.z),this.w=ce(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ce(this.x,t,e),this.y=ce(this.y,t,e),this.z=ce(this.z,t,e),this.w=ce(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ce(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Eu.prototype.isVector4=!0;var Ie=Eu,da=class extends Wn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ie(0,0,t,e),this.scissorTest=!1,this.viewport=new Ie(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new an(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Qe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Hr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qe=class extends da{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},ws=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var pa=class extends an{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Na=class Na{constructor(t,e,n,r,s,o,a,l,c,f,u,h,d,g,b,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,f,u,h,d,g,b,m)}set(t,e,n,r,s,o,a,l,c,f,u,h,d,g,b,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=u,p[14]=h,p[3]=d,p[7]=g,p[11]=b,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Na().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Er.setFromMatrixColumn(t,0).length(),s=1/Er.setFromMatrixColumn(t,1).length(),o=1/Er.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let h=o*f,d=o*u,g=a*f,b=a*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=h-b*c,e[9]=-a*l,e[2]=b-h*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*f,d=l*u,g=c*f,b=c*u;e[0]=h+b*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-g,e[6]=b+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*f,d=l*u,g=c*f,b=c*u;e[0]=h-b*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*f,e[9]=b-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*f,d=o*u,g=a*f,b=a*u;e[0]=l*f,e[4]=g*c-d,e[8]=h*c+b,e[1]=l*u,e[5]=b*c+h,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,g=a*l,b=a*c;e[0]=l*f,e[4]=b-h*u,e[8]=g*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*u+g,e[10]=h-b*u}else if(t.order==="XZY"){let h=o*l,d=o*c,g=a*l,b=a*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+b,e[5]=o*f,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*f,e[10]=b*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(O0,t,U0)}lookAt(t,e,n){let r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Mi.crossVectors(n,mn),Mi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Mi.crossVectors(n,mn)),Mi.normalize(),Ro.crossVectors(mn,Mi),r[0]=Mi.x,r[4]=Ro.x,r[8]=mn.x,r[1]=Mi.y,r[5]=Ro.y,r[9]=mn.y,r[2]=Mi.z,r[6]=Ro.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],g=n[2],b=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],M=n[15],w=r[0],I=r[4],_=r[8],R=r[12],S=r[1],E=r[5],T=r[9],C=r[13],A=r[2],P=r[6],D=r[10],L=r[14],U=r[3],B=r[7],k=r[11],V=r[15];return s[0]=o*w+a*S+l*A+c*U,s[4]=o*I+a*E+l*P+c*B,s[8]=o*_+a*T+l*D+c*k,s[12]=o*R+a*C+l*L+c*V,s[1]=f*w+u*S+h*A+d*U,s[5]=f*I+u*E+h*P+d*B,s[9]=f*_+u*T+h*D+d*k,s[13]=f*R+u*C+h*L+d*V,s[2]=g*w+b*S+m*A+p*U,s[6]=g*I+b*E+m*P+p*B,s[10]=g*_+b*T+m*D+p*k,s[14]=g*R+b*C+m*L+p*V,s[3]=x*w+y*S+v*A+M*U,s[7]=x*I+y*E+v*P+M*B,s[11]=x*_+y*T+v*D+M*k,s[15]=x*R+y*C+v*L+M*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],d=t[14],g=t[3],b=t[7],m=t[11],p=t[15],x=l*d-c*h,y=a*d-c*u,v=a*h-l*u,M=o*d-c*f,w=o*h-l*f,I=o*u-a*f;return e*(b*x-m*y+p*v)-n*(g*x-m*M+p*w)+r*(g*y-b*M+p*I)-s*(g*v-b*w+m*I)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(s*f-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],d=t[11],g=t[12],b=t[13],m=t[14],p=t[15],x=e*a-n*o,y=e*l-r*o,v=e*c-s*o,M=n*l-r*a,w=n*c-s*a,I=r*c-s*l,_=f*b-u*g,R=f*m-h*g,S=f*p-d*g,E=u*m-h*b,T=u*p-d*b,C=h*p-d*m,A=x*C-y*T+v*E+M*S-w*R+I*_;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/A;return t[0]=(a*C-l*T+c*E)*P,t[1]=(r*T-n*C-s*E)*P,t[2]=(b*I-m*w+p*M)*P,t[3]=(h*w-u*I-d*M)*P,t[4]=(l*S-o*C-c*R)*P,t[5]=(e*C-r*S+s*R)*P,t[6]=(m*v-g*I-p*y)*P,t[7]=(f*I-h*v+d*y)*P,t[8]=(o*T-a*S+c*_)*P,t[9]=(n*S-e*T-s*_)*P,t[10]=(g*w-b*v+p*x)*P,t[11]=(u*v-f*w-d*x)*P,t[12]=(a*R-o*E-l*_)*P,t[13]=(e*E-n*R+r*_)*P,t[14]=(b*y-g*M-m*x)*P,t[15]=(f*M-u*y+h*x)*P,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+n,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,f=o+o,u=a+a,h=s*c,d=s*f,g=s*u,b=o*f,m=o*u,p=a*u,x=l*c,y=l*f,v=l*u,M=n.x,w=n.y,I=n.z;return r[0]=(1-(b+p))*M,r[1]=(d+v)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(d-v)*w,r[5]=(1-(h+p))*w,r[6]=(m+x)*w,r[7]=0,r[8]=(g+y)*I,r[9]=(m-x)*I,r[10]=(1-(h+b))*I,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Er.set(r[0],r[1],r[2]).length(),a=Er.set(r[4],r[5],r[6]).length(),l=Er.set(r[8],r[9],r[10]).length();s<0&&(o=-o),An.copy(this);let c=1/o,f=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=f,An.elements[5]*=f,An.elements[6]*=f,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,f=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),g,b;if(l)g=s/(o-s),b=o*s/(o-s);else if(a===In)g=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Ss)g=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,f=2/(e-t),u=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),g,b;if(l)g=1/(o-s),b=o/(o-s);else if(a===In)g=-2/(o-s),b=-(o+s)/(o-s);else if(a===Ss)g=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Na.prototype.isMatrix4=!0;var ye=Na,Er=new W,An=new ye,O0=new W(0,0,0),U0=new W(1,1,1),Mi=new W,Ro=new W,mn=new W,Wh=new ye,Xh=new Xn,Ri=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ce(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xh.setFromEuler(this),this.setFromQuaternion(Xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ri.DEFAULT_ORDER="XYZ";var Wr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},B0=0,Yh=new W,Ar=new Xn,ii=new ye,Co=new W,ps=new W,k0=new W,z0=new Xn,qh=new W(1,0,0),$h=new W(0,1,0),Zh=new W(0,0,1),Kh={type:"added"},V0={type:"removed"},Rr={type:"childadded",child:null},_c={type:"childremoved",child:null},pn=class i extends Wn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new Ri,n=new Xn,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ye},normalMatrix:{value:new $t}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.multiply(Ar),this}rotateOnWorldAxis(t,e){return Ar.setFromAxisAngle(t,e),this.quaternion.premultiply(Ar),this}rotateX(t){return this.rotateOnAxis(qh,t)}rotateY(t){return this.rotateOnAxis($h,t)}rotateZ(t){return this.rotateOnAxis(Zh,t)}translateOnAxis(t,e){return Yh.copy(t).applyQuaternion(this.quaternion),this.position.add(Yh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qh,t)}translateY(t){return this.translateOnAxis($h,t)}translateZ(t){return this.translateOnAxis(Zh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Co.copy(t):Co.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(ps,Co,this.up):ii.lookAt(Co,ps,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Ar.setFromRotationMatrix(ii),this.quaternion.premultiply(Ar.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(V0),_c.child=t,this.dispatchEvent(_c),_c.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),Rr.child=t,this.dispatchEvent(Rr),Rr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,t,k0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,z0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),u=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new W(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},G0={type:"move"},Xr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let m=e.getJointPose(b,n),p=this._getHandJoint(c,b);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(G0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},nd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Si={h:0,s:0,l:0},Po={h:0,s:0,l:0};function Mc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Z=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ce){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ae.workingColorSpace){if(t=L0(t,1),e=ce(e,0,1),n=ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Mc(o,s,t+1/3),this.g=Mc(o,s,t),this.b=Mc(o,s,t-1/3)}return ae.colorSpaceToWorking(this,r),this}setStyle(t,e=Ce){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ce){let n=nd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=li(t.r),this.g=li(t.g),this.b=li(t.b),this}copyLinearToSRGB(t){return this.r=kr(t.r),this.g=kr(t.g),this.b=kr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ce){return ae.workingToColorSpace(on.copy(this),t),Math.round(ce(on.r*255,0,255))*65536+Math.round(ce(on.g*255,0,255))*256+Math.round(ce(on.b*255,0,255))}getHexString(t=Ce){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.workingToColorSpace(on.copy(this),e);let n=on.r,r=on.g,s=on.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ae.workingColorSpace){return ae.workingToColorSpace(on.copy(this),e),t.r=on.r,t.g=on.g,t.b=on.b,t}getStyle(t=Ce){ae.workingToColorSpace(on.copy(this),t);let e=on.r,n=on.g,r=on.b;return t!==Ce?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Si),this.setHSL(Si.h+t,Si.s+e,Si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Si),t.getHSL(Po);let n=gc(Si.h,Po.h,e),r=gc(Si.s,Po.s,e),s=gc(Si.l,Po.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},on=new Z;Z.NAMES=nd;var Ts=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Z(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ci=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ri,this.environmentIntensity=1,this.environmentRotation=new Ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new W,ri=new W,Sc=new W,si=new W,Cr=new W,Pr=new W,Jh=new W,wc=new W,Tc=new W,Ec=new W,Ac=new Ie,Rc=new Ie,Cc=new Ie,Ai=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ri.subVectors(n,e),Sc.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ri),l=Rn.dot(Sc),c=ri.dot(ri),f=ri.dot(Sc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,d=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,si)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,si.x),l.addScaledVector(o,si.y),l.addScaledVector(a,si.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Ac.setScalar(0),Rc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(t,e),Rc.fromBufferAttribute(t,n),Cc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ac,s.x),o.addScaledVector(Rc,s.y),o.addScaledVector(Cc,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ri.subVectors(t,e),Rn.cross(ri).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Rn.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Cr.subVectors(r,n),Pr.subVectors(s,n),wc.subVectors(t,n);let l=Cr.dot(wc),c=Pr.dot(wc);if(l<=0&&c<=0)return e.copy(n);Tc.subVectors(t,r);let f=Cr.dot(Tc),u=Pr.dot(Tc);if(f>=0&&u<=f)return e.copy(r);let h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Cr,o);Ec.subVectors(t,s);let d=Cr.dot(Ec),g=Pr.dot(Ec);if(g>=0&&d<=g)return e.copy(s);let b=d*c-l*g;if(b<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Pr,a);let m=f*g-d*u;if(m<=0&&u-f>=0&&d-g>=0)return Jh.subVectors(s,r),a=(u-f)/(u-f+(d-g)),e.copy(r).addScaledVector(Jh,a);let p=1/(m+b+h);return o=b*p,a=h*p,e.copy(n).addScaledVector(Cr,o).addScaledVector(Pr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Io.copy(n.boundingBox)),Io.applyMatrix4(t.matrixWorld),this.union(Io)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ms),Lo.subVectors(this.max,ms),Ir.subVectors(t.a,ms),Lr.subVectors(t.b,ms),Fr.subVectors(t.c,ms),wi.subVectors(Lr,Ir),Ti.subVectors(Fr,Lr),Zi.subVectors(Ir,Fr);let e=[0,-wi.z,wi.y,0,-Ti.z,Ti.y,0,-Zi.z,Zi.y,wi.z,0,-wi.x,Ti.z,0,-Ti.x,Zi.z,0,-Zi.x,-wi.y,wi.x,0,-Ti.y,Ti.x,0,-Zi.y,Zi.x,0];return!Pc(e,Ir,Lr,Fr,Lo)||(e=[1,0,0,0,1,0,0,0,1],!Pc(e,Ir,Lr,Fr,Lo))?!1:(Fo.crossVectors(wi,Ti),e=[Fo.x,Fo.y,Fo.z],Pc(e,Ir,Lr,Fr,Lo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},oi=[new W,new W,new W,new W,new W,new W,new W,new W],Cn=new W,Io=new hn,Ir=new W,Lr=new W,Fr=new W,wi=new W,Ti=new W,Zi=new W,ms=new W,Lo=new W,Fo=new W,Ki=new W;function Pc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Ki.fromArray(i,s);let a=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),l=t.dot(Ki),c=e.dot(Ki),f=n.dot(Ki);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Be=new W,Do=new ie,H0=0,Mn=class extends Wn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:H0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Jf,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Do.fromBufferAttribute(this,e),Do.applyMatrix3(t),this.setXY(e,Do.x,Do.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ds(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ds(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ds(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ds(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ds(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Es=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var er=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},W0=new hn,gs=new W,Ic=new W,Pi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):W0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gs.subVectors(t,this.center);let e=gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(gs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ic.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gs.copy(t.center).add(Ic)),this.expandByPoint(gs.copy(t.center).sub(Ic))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},X0=0,_n=new ye,Lc=new pn,Dr=new W,gn=new hn,bs=new hn,We=new W,Kt=class i extends Wn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(P0(t)?er:Es)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return _n.makeRotationFromQuaternion(t),this.applyMatrix4(_n),this}rotateX(t){return _n.makeRotationX(t),this.applyMatrix4(_n),this}rotateY(t){return _n.makeRotationY(t),this.applyMatrix4(_n),this}rotateZ(t){return _n.makeRotationZ(t),this.applyMatrix4(_n),this}translate(t,e,n){return _n.makeTranslation(t,e,n),this.applyMatrix4(_n),this}scale(t,e,n){return _n.makeScale(t,e,n),this.applyMatrix4(_n),this}lookAt(t){return Lc.lookAt(t),Lc.updateMatrix(),this.applyMatrix4(Lc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];bs.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,bs.min),gn.expandByPoint(We),We.addVectors(gn.max,bs.max),gn.expandByPoint(We)):(gn.expandByPoint(bs.min),gn.expandByPoint(bs.max))}gn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)We.fromBufferAttribute(a,c),l&&(Dr.fromBufferAttribute(t,c),We.add(Dr)),r=Math.max(r,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new W,l[_]=new W;let c=new W,f=new W,u=new W,h=new ie,d=new ie,g=new ie,b=new W,m=new W;function p(_,R,S){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,R),g.fromBufferAttribute(s,S),f.sub(c),u.sub(c),d.sub(h),g.sub(h);let E=1/(d.x*g.y-g.x*d.y);isFinite(E)&&(b.copy(f).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(E),m.copy(u).multiplyScalar(d.x).addScaledVector(f,-g.x).multiplyScalar(E),a[_].add(b),a[R].add(b),a[S].add(b),l[_].add(m),l[R].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,R=x.length;_<R;++_){let S=x[_],E=S.start,T=S.count;for(let C=E,A=E+T;C<A;C+=3)p(t.getX(C+0),t.getX(C+1),t.getX(C+2))}let y=new W,v=new W,M=new W,w=new W;function I(_){M.fromBufferAttribute(r,_),w.copy(M);let R=a[_];y.copy(R),y.sub(M.multiplyScalar(M.dot(R))).normalize(),v.crossVectors(w,R);let E=v.dot(l[_])<0?-1:1;o.setXYZW(_,y.x,y.y,y.z,E)}for(let _=0,R=x.length;_<R;++_){let S=x[_],E=S.start,T=S.count;for(let C=E,A=E+T;C<A;C+=3)I(t.getX(C+0)),I(t.getX(C+1)),I(t.getX(C+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,f=new W,u=new W;if(t)for(let h=0,d=t.count;h<d;h+=3){let g=t.getX(h+0),b=t.getX(h+1),m=t.getX(h+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,m),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f),d=0,g=0;for(let b=0,m=l.length;b<m;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*f;for(let p=0;p<f;p++)h[g++]=c[d++]}return new Mn(h,f,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){let h=c[f],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];f.push(d.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let f=r[c];this.setAttribute(c,f.clone(e))}let s=t.morphAttributes;for(let c in s){let f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Fc=new W,Y0=new W,q0=new $t,Pn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Fc.subVectors(n,e).cross(Y0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Fc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||q0.getNormalMatrix(t),r=this.coplanarPoint(Fc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},$0=0,ci=class extends Wn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Di,this.side=$n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=jc,this.blendEquation=or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Z(0,0,0),this.blendAlpha=0,this.depthFunc=zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ta,this.stencilZFail=ta,this.stencilZPass=ta,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Z().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ai=new W,Dc=new W,No=new W,Oo=new W,nr=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Dc.copy(t).add(e).multiplyScalar(.5),No.copy(e).sub(t).normalize(),Oo.copy(this.origin).sub(Dc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(No),a=Oo.dot(this.direction),l=-Oo.dot(No),c=Oo.lengthSq(),f=Math.abs(1-o*o),u,h,d,g;if(f>0)if(u=o*l-a,h=o*a-l,g=s*f,u>=0)if(h>=-g)if(h<=g){let b=1/f;u*=b,h*=b,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Dc).addScaledVector(No,h),d}intersectSphere(t,e){if(t.radius<0)return null;ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,u=t.x-o.x,h=t.y-o.y,d=t.z-o.z,g=e.x-o.x,b=e.y-o.y,m=e.z-o.z,p=n.x-o.x,x=n.y-o.y,y=n.z-o.z,v=Math.abs(l),M=Math.abs(c),w=Math.abs(f),I,_,R,S,E,T,C,A,P,D,L,U;if(v>=M&&v>=w?(R=l,T=u,P=g,U=p,l>=0?(I=c,_=f,S=h,E=d,C=b,A=m,D=x,L=y):(I=f,_=c,S=d,E=h,C=m,A=b,D=y,L=x)):M>=w?(R=c,T=h,P=b,U=x,c>=0?(I=f,_=l,S=d,E=u,C=m,A=g,D=y,L=p):(I=l,_=f,S=u,E=d,C=g,A=m,D=p,L=y)):(R=f,T=d,P=m,U=y,f>=0?(I=l,_=c,S=u,E=h,C=g,A=b,D=p,L=x):(I=c,_=l,S=h,E=u,C=b,A=g,D=x,L=p)),R===0)return null;let B=I/R,k=_/R,V=1/R,j=S-B*T,G=E-k*T,J=C-B*P,et=A-k*P,ht=D-B*U,H=L-k*U,X=ht*et-H*J,rt=j*H-G*ht,at=J*G-et*j;if(r){if(X<0||rt<0||at<0)return null}else if((X<0||rt<0||at<0)&&(X>0||rt>0||at>0))return null;let ut=X+rt+at;if(ut===0)return null;let pt=V*(X*T+rt*P+at*U);return(ut>0?pt<0:pt>0)?null:this.at(pt/ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class extends ci{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Z(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ri,this.combine=Qc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},jh=new ye,Ji=new nr,Uo=new Pi,Qh=new W,Bo=new W,ko=new W,zo=new W,Nc=new W,Vo=new W,tf=new W,Go=new W,Ot=class extends pn{constructor(t=new Kt,e=new Qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){Vo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],u=s[l];f!==0&&(Nc.fromBufferAttribute(u,t),o?Vo.addScaledVector(Nc,f):Vo.addScaledVector(Nc.sub(e),f))}e.add(Vo)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Uo.copy(n.boundingSphere),Uo.applyMatrix4(s),Ji.copy(t.ray).recast(t.near),!(Uo.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Uo,Qh)===null||Ji.origin.distanceToSquared(Qh)>(t.far-t.near)**2))&&(jh.copy(s).invert(),Ji.copy(t.ray).applyMatrix4(jh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){let m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let w=a.getX(v),I=a.getX(v+1),_=a.getX(v+2);r=Ho(this,p,t,n,c,f,u,w,I,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){let x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);r=Ho(this,o,t,n,c,f,u,x,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,b=h.length;g<b;g++){let m=h[g],p=o[m.materialIndex],x=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=x,M=y;v<M;v+=3){let w=v,I=v+1,_=v+2;r=Ho(this,p,t,n,c,f,u,w,I,_),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let m=g,p=b;m<p;m+=3){let x=m,y=m+1,v=m+2;r=Ho(this,o,t,n,c,f,u,x,y,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function Z0(i,t,e,n,r,s,o,a){let l;if(t.side===en?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===$n,a),l===null)return null;Go.copy(a),Go.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Go);return c<e.near||c>e.far?null:{distance:c,point:Go.clone(),object:i}}function Ho(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Bo),i.getVertexPosition(l,ko),i.getVertexPosition(c,zo);let f=Z0(i,t,e,n,Bo,ko,zo,tf);if(f){let u=new W;Ai.getBarycoord(tf,Bo,ko,zo,u),r&&(f.uv=Ai.getInterpolatedAttribute(r,a,l,c,u,new ie)),s&&(f.uv1=Ai.getInterpolatedAttribute(s,a,l,c,u,new ie)),o&&(f.normal=Ai.getInterpolatedAttribute(o,a,l,c,u,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new W,materialIndex:0};Ai.getNormal(Bo,ko,zo,h.normal),f.face=h,f.barycoord=u}return f}var ma=class extends an{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Ye,f=Ye,u,h){super(null,o,a,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ji=new Pi,K0=new ie(.5,.5),Wo=new W,As=class{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],d=s[7],g=s[8],b=s[9],m=s[10],p=s[11],x=s[12],y=s[13],v=s[14],M=s[15];if(r[0].setComponents(c-o,d-f,p-g,M-x).normalize(),r[1].setComponents(c+o,d+f,p+g,M+x).normalize(),r[2].setComponents(c+a,d+u,p+b,M+y).normalize(),r[3].setComponents(c-a,d-u,p-b,M-y).normalize(),n)r[4].setComponents(l,h,m,v).normalize(),r[5].setComponents(c-l,d-h,p-m,M-v).normalize();else if(r[4].setComponents(c-l,d-h,p-m,M-v).normalize(),e===In)r[5].setComponents(c+l,d+h,p+m,M+v).normalize();else if(e===Ss)r[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){ji.center.set(0,0,0);let e=K0.distanceTo(t.center);return ji.radius=.7071067811865476+e,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Wo.x=r.normal.x>0?t.max.x:t.min.x,Wo.y=r.normal.y>0?t.max.y:t.min.y,Wo.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Wo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var tn=class extends ci{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Z(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ga=new W,ba=new W,ef=new ye,xs=new nr,Xo=new Pi,Oc=new W,nf=new W,xa=class extends pn{constructor(t=new Kt,e=new tn){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)ga.fromBufferAttribute(e,r-1),ba.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=ga.distanceTo(ba);t.setAttribute("lineDistance",new Gt(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Xo.radius+=s,t.ray.intersectsSphere(Xo)===!1)return;ef.copy(r).invert(),xs.copy(t.ray).applyMatrix4(ef);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let b=d,m=g-1;b<m;b+=c){let p=f.getX(b),x=f.getX(b+1),y=Yo(this,t,xs,l,p,x,b);y&&e.push(y)}if(this.isLineLoop){let b=f.getX(g-1),m=f.getX(d),p=Yo(this,t,xs,l,b,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let b=d,m=g-1;b<m;b+=c){let p=Yo(this,t,xs,l,b,b+1,b);p&&e.push(p)}if(this.isLineLoop){let b=Yo(this,t,xs,l,g-1,d,g-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Yo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(ga.fromBufferAttribute(a,r),ba.fromBufferAttribute(a,s),e.distanceSqToSegment(ga,ba,Oc,nf)>n)return;Oc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oc);if(!(c<t.near||c>t.far))return{distance:c,point:nf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var rf=new W,sf=new W,$e=class extends xa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)rf.fromBufferAttribute(e,r),sf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+rf.distanceTo(sf);t.setAttribute("lineDistance",new Gt(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ir=class extends ci{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Z(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},of=new ye,Gc=new nr,qo=new Pi,$o=new W,Yr=class extends pn{constructor(t=new Kt,e=new ir){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,t.ray.intersectsSphere(qo)===!1)return;of.copy(r).invert(),Gc.copy(t.ray).applyMatrix4(of);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=h,b=d;g<b;g++){let m=c.getX(g);$o.fromBufferAttribute(u,m),af($o,m,l,r,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=h,b=d;g<b;g++)$o.fromBufferAttribute(u,g),af($o,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function af(i,t,e,n,r,s,o){let a=Gc.distanceSqToPoint(i);if(a<e){let l=new W;Gc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Rs=class extends an{constructor(t=[],e=Ni,n,r,s,o,a,l,c,f){super(t,e,n,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ui=class extends an{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class extends an{constructor(t,e,n=Fn,r,s,o,a=Ye,l=Ye,c,f=Hn,u=1){if(f!==Hn&&f!==Ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,r,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Hr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},va=class extends Yn{constructor(t,e=Fn,n=Ni,r,s,o=Ye,a=Ye,l,c=Hn){let f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Cs=class extends an{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},qr=class i extends Kt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],u=[],h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(u,2));function g(b,m,p,x,y,v,M,w,I,_,R){let S=v/I,E=M/_,T=v/2,C=M/2,A=w/2,P=I+1,D=_+1,L=0,U=0,B=new W;for(let k=0;k<D;k++){let V=k*E-C;for(let j=0;j<P;j++){let G=j*S-T;B[b]=G*x,B[m]=V*y,B[p]=A,c.push(B.x,B.y,B.z),B[b]=0,B[m]=0,B[p]=w>0?1:-1,f.push(B.x,B.y,B.z),u.push(j/I),u.push(1-k/_),L+=1}}for(let k=0;k<_;k++)for(let V=0;V<I;V++){let j=h+V+P*k,G=h+V+P*(k+1),J=h+(V+1)+P*(k+1),et=h+(V+1)+P*k;l.push(j,G,et),l.push(G,J,et),U+=6}a.addGroup(d,U,R),d+=U,h+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Ps=class i extends Kt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new W,f=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/t+1)/2,f.y=(o[h+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function J0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=id(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=ng(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let f=a,u=l;for(let h=e;h<r;h+=e){let d=i[h],g=i[h+1];d<a&&(a=d),g<l&&(l=g),d>f&&(f=d),g>u&&(u=g)}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return Is(s,o,e,a,l,c,0),o}function id(i,t,e,n,r){let s;if(r===dg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=lf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=lf(o/n|0,i[o],i[o+1],s);return s&&$r(s,s.next)&&(Fs(s),s=s.next),s}function rr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||Pe(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Is(i,t,e,n,r,s,o){if(!i)return;!o&&s&&ag(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Q0(i,n,r,s):j0(i)){t.push(l.i,i.i,c.i),Fs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=tg(rr(i),t),Is(i,t,e,n,r,s,2)):o===2&&eg(i,t,e,n,r,s):Is(rr(i),t,e,n,r,s,1);break}}}function j0(i){let t=i.prev,e=i,n=i.next;if(Pe(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=f&&g.x<=h&&g.y>=u&&g.y<=d&&vs(r,a,s,l,o,c,g.x,g.y)&&Pe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Q0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Pe(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,f=r.y,u=s.y,h=o.y,d=Math.min(a,l,c),g=Math.min(f,u,h),b=Math.max(a,l,c),m=Math.max(f,u,h),p=Hc(d,g,t,e,n),x=Hc(b,m,t,e,n),y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&vs(a,f,l,u,c,h,y.x,y.y)&&Pe(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=d&&v.x<=b&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&vs(a,f,l,u,c,h,v.x,v.y)&&Pe(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=b&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&vs(a,f,l,u,c,h,y.x,y.y)&&Pe(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=g&&v.y<=m&&v!==r&&v!==o&&vs(a,f,l,u,c,h,v.x,v.y)&&Pe(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function tg(i,t){let e=i;do{let n=e.prev,r=e.next.next;!$r(n,r)&&sd(n,e,e.next,r)&&Ls(n,r)&&Ls(r,n)&&(t.push(n.i,e.i,r.i),Fs(e),Fs(e.next),e=i=r),e=e.next}while(e!==i);return rr(e)}function eg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&ug(o,a)){let l=od(o,a);o=rr(o,o.next),l=rr(l,l.next),Is(o,t,e,n,r,s,0),Is(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function ng(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=id(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(cg(c))}r.sort(ig);for(let s=0;s<r.length;s++)e=rg(r[s],e);return e}function ig(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function rg(i,t){let e=sg(i,t);if(!e)return t;let n=od(e,i);return rr(n,n.next),rr(e,e.next)}function sg(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if($r(i,e))return e;do{if($r(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&rd(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Ls(e,i)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&og(o,e)))&&(o=e,f=u)}e=e.next}while(e!==a);return o}function og(i,t){return Pe(i.prev,i,t.prev)<0&&Pe(t.next,i,i.next)<0}function ag(i,t,e,n){let r=i;do r.z===0&&(r.z=Hc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,lg(r)}function lg(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Hc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function cg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function rd(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function vs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&rd(i,t,e,n,r,s,o,a)}function ug(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!hg(i,t)&&(Ls(i,t)&&Ls(t,i)&&fg(i,t)&&(Pe(i.prev,i,t.prev)||Pe(i,t.prev,t))||$r(i,t)&&Pe(i.prev,i,i.next)>0&&Pe(t.prev,t,t.next)>0)}function Pe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function sd(i,t,e,n){let r=Ko(Pe(i,t,e)),s=Ko(Pe(i,t,n)),o=Ko(Pe(e,n,i)),a=Ko(Pe(e,n,t));return!!(r!==s&&o!==a||r===0&&Zo(i,e,t)||s===0&&Zo(i,n,t)||o===0&&Zo(e,i,n)||a===0&&Zo(e,t,n))}function Zo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Ko(i){return i>0?1:i<0?-1:0}function hg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&sd(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ls(i,t){return Pe(i.prev,i,i.next)<0?Pe(i,t,i.next)>=0&&Pe(i,i.prev,t)>=0:Pe(i,t,i.prev)<0||Pe(i,i.next,t)<0}function fg(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function od(i,t){let e=Wc(i.i,i.x,i.y),n=Wc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function lf(i,t,e,n){let r=Wc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function dg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Xc=class{static triangulate(t,e,n=2){return J0(t,e,n)}},Ds=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];cf(t),uf(n,t);let o=t.length;e.forEach(cf);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,uf(n,e[l]);let a=Xc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function cf(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function uf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var hi=class i extends Kt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,f=l+1,u=t/a,h=e/l,d=[],g=[],b=[],m=[];for(let p=0;p<f;p++){let x=p*h-o;for(let y=0;y<c;y++){let v=y*u-s;g.push(v,-x,0),b.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){let y=x+c*p,v=x+c*(p+1),M=x+1+c*(p+1),w=x+1+c*p;d.push(y,v,w),d.push(v,M,w)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(b,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ns=class i extends Kt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],f=[],u=t,h=(e-t)/r,d=new W,g=new ie;for(let b=0;b<=r;b++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,f.push(g.x,g.y)}u+=h}for(let b=0;b<r;b++){let m=b*(n+1);for(let p=0;p<n;p++){let x=p+m,y=x,v=x+n+1,M=x+n+2,w=x+1;a.push(y,v,w),a.push(v,M,w)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function lr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(hf(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(hf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function cn(i){let t={};for(let e=0;e<i.length;e++){let n=lr(i[e]);for(let r in n)t[r]=n[r]}return t}function hf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pg(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function vu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var ad={clone:lr,merge:cn},mg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends ci{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mg,this.fragmentShader=gg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=lr(t.uniforms),this.uniformsGroups=pg(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new Z().setHex(r.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ie().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new ye().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ya=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var _a=class extends ci{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ma=class extends ci{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Nr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Uc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ii=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Sa=class extends Ii{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case zc:s=t,a=2*e-n;break;case Vc:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zc:o=t,l=2*n-e;break;case Vc:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),b=g*g,m=b*g,p=-h*m+2*h*b-h*g,x=(1+h)*m+(-1.5-2*h)*b+(-.5+h)*g+1,y=(-1-d)*m+(1.5+d)*b+.5*g,v=d*m-d*b;for(let M=0;M!==a;++M)s[M]=p*o[f+M]+x*o[c+M]+y*o[l+M]+v*o[u+M];return s}},wa=class extends Ii{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(r-e),u=1-f;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*f;return s}},Ta=class extends Ii{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},Ea=class extends Ii{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let g=(n-e)/(r-e),b=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*b+o[l+m]*g;return s}let h=a*2,d=t-1;for(let g=0;g!==a;++g){let b=o[c+g],m=o[l+g],p=d*h+g*2,x=u[p],y=u[p+1],v=t*h+g*2,M=f[v],w=f[v+1],I=xg(n,e,x,M,r);s[g]=ld(I,b,y,w,m)}return s}};function ld(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function bg(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function xg(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=ld(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=bg(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var xn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Nr(e,this.TimeBufferType),this.values=Nr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Nr(t.times,Array),values:Nr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Uc(t.settings)&&(n.settings={inTangents:Nr(t.settings.inTangents,Array),outTangents:Nr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ta(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new wa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ea(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case ua:e=this.InterpolantFactoryMethodLinear;break;case Qo:e=this.InterpolantFactoryMethodSmooth;break;case Bc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return ua;case this.InterpolantFactoryMethodSmooth:return Qo;case this.InterpolantFactoryMethodBezier:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Uc(this.settings)&&(ff(this.settings.inTangents,t),ff(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&I0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Qo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,h=u-n,d=u+n;for(let g=0;g!==n;++g){let b=e[u+g];if(b!==e[h+g]||b!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Uc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ff(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}xn.prototype.ValueTypeName="";xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=ua;var Li=class extends xn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="bool";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=ys;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Aa=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}};Aa.prototype.ValueTypeName="color";var Ra=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}};Ra.prototype.ValueTypeName="number";var Ca=class extends Ii{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let f=c+a;c!==f;c+=4)Xn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Os=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ca(this.times,this.values,this.getValueSize(),t)}};Os.prototype.ValueTypeName="quaternion";Os.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends xn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=ys;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Pa=class extends xn{constructor(t,e,n,r){super(t,e,n,r)}};Pa.prototype.ValueTypeName="vector";var ea={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(df(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!df(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function df(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ia=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},cd=new Ia,Zr=class{constructor(t){this.manager=t!==void 0?t:cd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Zr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Or=new WeakMap,La=class extends Zr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=ea.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Or.get(o);u===void 0&&(u=[],Or.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=Vr("img");function l(){f(),e&&e(this);let u=Or.get(this)||[];for(let h=0;h<u.length;h++){let d=u[h];d.onLoad&&d.onLoad(this)}Or.delete(this),s.manager.itemEnd(t)}function c(u){f(),r&&r(u),ea.remove(`image:${t}`);let h=Or.get(this)||[];for(let d=0;d<h.length;d++){let g=h[d];g.onError&&g.onError(u)}Or.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),ea.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var sr=class extends Zr{constructor(t){super(t)}load(t,e,n,r){let s=new an,o=new La(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Jo=new W,jo=new Xn,Gn=new W,Us=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Jo,jo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,jo,Gn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Jo,jo,Gn),Gn.x===1&&Gn.y===1&&Gn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,jo,Gn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ei=new W,pf=new ie,mf=new ie,Xe=class extends Us{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ha*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(mc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ha*2*Math.atan(Math.tan(mc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-t/Ei.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(mc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var qn=class extends Us{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ur=-90,Br=1,Fa=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Xe(Ur,Br,t,e);r.layers=this.layers,this.add(r);let s=new Xe(Ur,Br,t,e);s.layers=this.layers,this.add(s);let o=new Xe(Ur,Br,t,e);o.layers=this.layers,this.add(o);let a=new Xe(Ur,Br,t,e);a.layers=this.layers,this.add(a);let l=new Xe(Ur,Br,t,e);l.layers=this.layers,this.add(l);let c=new Xe(Ur,Br,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ss)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Da=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var yu="\\[\\]\\.:\\/",vg=new RegExp("["+yu+"]","g"),_u="[^"+yu+"]",yg="[^"+yu.replace("\\.","")+"]",_g=/((?:WC+[\/:])*)/.source.replace("WC",_u),Mg=/(WCOD+)?/.source.replace("WCOD",yg),Sg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_u),wg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_u),Tg=new RegExp("^"+_g+Mg+Sg+wg+"$"),Eg=["material","materials","bones","map"],Yc=class{constructor(t,e,n){let r=n||we.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},we=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(vg,"")}static parseTrackName(t){let e=Tg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);Eg.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};we.Composite=Yc;we.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};we.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};we.prototype.GetterByBindingType=[we.prototype._getValue_direct,we.prototype._getValue_array,we.prototype._getValue_arrayElement,we.prototype._getValue_toArray];we.prototype.SetterByBindingTypeAndVersioning=[[we.prototype._setValue_direct,we.prototype._setValue_direct_setNeedsUpdate,we.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[we.prototype._setValue_array,we.prototype._setValue_array_setNeedsUpdate,we.prototype._setValue_array_setMatrixWorldNeedsUpdate],[we.prototype._setValue_arrayElement,we.prototype._setValue_arrayElement_setNeedsUpdate,we.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[we.prototype._setValue_fromArray,we.prototype._setValue_fromArray_setNeedsUpdate,we.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V2=new Float32Array(1);var gf=new ye,Bs=class{constructor(t,e,n=0,r=1/0){this.ray=new nr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Wr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return gf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gf),this}intersectObject(t,e=!0,n=[]){return qc(t,this,n,e),n.sort(bf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)qc(t[r],this,n,e);return n.sort(bf),n}};function bf(i,t){return i.distance-t.distance}function qc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)qc(s[o],t,e,!0)}}var Au=class Au{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Au.prototype.isMatrix2=!0;var $c=Au;function Mu(i,t,e,n){let r=Ag(n);switch(e){case fu:return i*t;case pu:return i*t/r.components*r.byteLength;case Ga:return i*t/r.components*r.byteLength;case Bi:return i*t*2/r.components*r.byteLength;case Ha:return i*t*2/r.components*r.byteLength;case du:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Wa:return i*t*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ya:case $a:return Math.max(i,16)*Math.max(t,8)/4;case Xa:case qa:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ka:case ja:case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ja:case qs:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case rl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ml:case gl:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case xl:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ag(i){switch(i){case vn:case lu:return{byteLength:1,components:1};case Jr:case cu:case Nn:return{byteLength:2,components:1};case za:case Va:return{byteLength:2,components:4};case Fn:case ka:case Dn:return{byteLength:4,components:1};case uu:case hu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Id(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Cg(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let f=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,f);else{u.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<u.length;d++){let g=u[h],b=u[d];b.start<=g.start+g.count+1?g.count=Math.max(g.count,b.start+b.count-g.start):(++h,u[h]=b)}u.length=h+1;for(let d=0,g=u.length;d<g;d++){let b=u[d];i.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Pg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ig=`#ifdef USE_ALPHAHASH
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
#endif`,Lg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ng=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Og=`#ifdef USE_AOMAP
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
#endif`,Ug=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bg=`#ifdef USE_BATCHING
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
#endif`,kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hg=`#ifdef USE_IRIDESCENCE
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
#endif`,Wg=`#ifdef USE_BUMPMAP
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
#endif`,Xg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$g=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qg=`#define PI 3.141592653589793
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
} // validated`,tb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,xb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Sb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
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
#endif`,Rb=`uniform sampler2D dfgLUT;
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
}`,Cb=`
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
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ib=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lb=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`#ifdef USE_MORPHTARGETS
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
#endif`,qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
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
#endif`,tx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ex=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ix=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ox=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ax=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,px=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mx=`float getShadowMask() {
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
}`,gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bx=`#ifdef USE_SKINNING
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
#endif`,xx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vx=`#ifdef USE_SKINNING
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
#endif`,yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_x=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wx=`#ifdef USE_TRANSMISSION
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
#endif`,Tx=`#ifdef USE_TRANSMISSION
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
#endif`,Ex=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Px=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ix=`uniform sampler2D t2D;
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
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ox=`#include <common>
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
}`,Ux=`#if DEPTH_PACKING == 3200
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
}`,Bx=`#define DISTANCE
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
}`,kx=`#define DISTANCE
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
}`,zx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gx=`uniform float scale;
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
}`,Hx=`uniform vec3 diffuse;
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
}`,Wx=`#include <common>
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
}`,Xx=`uniform vec3 diffuse;
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
}`,Yx=`#define LAMBERT
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
}`,qx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,Zx=`#define MATCAP
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
}`,Kx=`#define NORMAL
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
}`,Jx=`#define NORMAL
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
}`,jx=`#define PHONG
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
}`,Qx=`#define PHONG
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
}`,tv=`#define STANDARD
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
}`,ev=`#define STANDARD
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
}`,nv=`#define TOON
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
}`,iv=`#define TOON
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
}`,rv=`uniform float size;
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
}`,sv=`uniform vec3 diffuse;
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
}`,ov=`#include <common>
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
}`,av=`uniform vec3 color;
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
}`,lv=`uniform float rotation;
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
}`,cv=`uniform vec3 diffuse;
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
}`,ne={alphahash_fragment:Pg,alphahash_pars_fragment:Ig,alphamap_fragment:Lg,alphamap_pars_fragment:Fg,alphatest_fragment:Dg,alphatest_pars_fragment:Ng,aomap_fragment:Og,aomap_pars_fragment:Ug,batching_pars_vertex:Bg,batching_vertex:kg,begin_vertex:zg,beginnormal_vertex:Vg,bsdfs:Gg,iridescence_fragment:Hg,bumpmap_pars_fragment:Wg,clipping_planes_fragment:Xg,clipping_planes_pars_fragment:Yg,clipping_planes_pars_vertex:qg,clipping_planes_vertex:$g,color_fragment:Zg,color_pars_fragment:Kg,color_pars_vertex:Jg,color_vertex:jg,common:Qg,cube_uv_reflection_fragment:tb,defaultnormal_vertex:eb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:rb,emissivemap_pars_fragment:sb,colorspace_fragment:ob,colorspace_pars_fragment:ab,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:hb,envmap_physical_pars_fragment:Mb,envmap_vertex:fb,fog_vertex:db,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:xb,lights_lambert_fragment:vb,lights_lambert_pars_fragment:yb,lights_pars_begin:_b,lights_toon_fragment:Sb,lights_toon_pars_fragment:wb,lights_phong_fragment:Tb,lights_phong_pars_fragment:Eb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:Pb,lights_fragment_end:Ib,lightprobes_pars_fragment:Lb,logdepthbuf_fragment:Fb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ob,map_fragment:Ub,map_pars_fragment:Bb,map_particle_fragment:kb,map_particle_pars_fragment:zb,metalnessmap_fragment:Vb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Hb,morphcolor_vertex:Wb,morphnormal_vertex:Xb,morphtarget_pars_vertex:Yb,morphtarget_vertex:qb,normal_fragment_begin:$b,normal_fragment_maps:Zb,normal_pars_fragment:Kb,normal_pars_vertex:Jb,normal_vertex:jb,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:tx,clearcoat_normal_fragment_maps:ex,clearcoat_pars_fragment:nx,iridescence_pars_fragment:ix,opaque_fragment:rx,packing:sx,premultiplied_alpha_fragment:ox,project_vertex:ax,dithering_fragment:lx,dithering_pars_fragment:cx,roughnessmap_fragment:ux,roughnessmap_pars_fragment:hx,shadowmap_pars_fragment:fx,shadowmap_pars_vertex:dx,shadowmap_vertex:px,shadowmask_pars_fragment:mx,skinbase_vertex:gx,skinning_pars_vertex:bx,skinning_vertex:xx,skinnormal_vertex:vx,specularmap_fragment:yx,specularmap_pars_fragment:_x,tonemapping_fragment:Mx,tonemapping_pars_fragment:Sx,transmission_fragment:wx,transmission_pars_fragment:Tx,uv_pars_fragment:Ex,uv_pars_vertex:Ax,uv_vertex:Rx,worldpos_vertex:Cx,background_vert:Px,background_frag:Ix,backgroundCube_vert:Lx,backgroundCube_frag:Fx,cube_vert:Dx,cube_frag:Nx,depth_vert:Ox,depth_frag:Ux,distance_vert:Bx,distance_frag:kx,equirect_vert:zx,equirect_frag:Vx,linedashed_vert:Gx,linedashed_frag:Hx,meshbasic_vert:Wx,meshbasic_frag:Xx,meshlambert_vert:Yx,meshlambert_frag:qx,meshmatcap_vert:$x,meshmatcap_frag:Zx,meshnormal_vert:Kx,meshnormal_frag:Jx,meshphong_vert:jx,meshphong_frag:Qx,meshphysical_vert:tv,meshphysical_frag:ev,meshtoon_vert:nv,meshtoon_frag:iv,points_vert:rv,points_frag:sv,shadow_vert:ov,shadow_frag:av,sprite_vert:lv,sprite_frag:cv},wt={common:{diffuse:{value:new Z(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Z(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new Z(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Z(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Jn={basic:{uniforms:cn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:ne.meshbasic_vert,fragmentShader:ne.meshbasic_frag},lambert:{uniforms:cn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Z(0)},envMapIntensity:{value:1}}]),vertexShader:ne.meshlambert_vert,fragmentShader:ne.meshlambert_frag},phong:{uniforms:cn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Z(0)},specular:{value:new Z(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ne.meshphong_vert,fragmentShader:ne.meshphong_frag},standard:{uniforms:cn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Z(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag},toon:{uniforms:cn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Z(0)}}]),vertexShader:ne.meshtoon_vert,fragmentShader:ne.meshtoon_frag},matcap:{uniforms:cn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:ne.meshmatcap_vert,fragmentShader:ne.meshmatcap_frag},points:{uniforms:cn([wt.points,wt.fog]),vertexShader:ne.points_vert,fragmentShader:ne.points_frag},dashed:{uniforms:cn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ne.linedashed_vert,fragmentShader:ne.linedashed_frag},depth:{uniforms:cn([wt.common,wt.displacementmap]),vertexShader:ne.depth_vert,fragmentShader:ne.depth_frag},normal:{uniforms:cn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:ne.meshnormal_vert,fragmentShader:ne.meshnormal_frag},sprite:{uniforms:cn([wt.sprite,wt.fog]),vertexShader:ne.sprite_vert,fragmentShader:ne.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ne.background_vert,fragmentShader:ne.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:ne.backgroundCube_vert,fragmentShader:ne.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ne.cube_vert,fragmentShader:ne.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ne.equirect_vert,fragmentShader:ne.equirect_frag},distance:{uniforms:cn([wt.common,wt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ne.distance_vert,fragmentShader:ne.distance_frag},shadow:{uniforms:cn([wt.lights,wt.fog,{color:{value:new Z(0)},opacity:{value:1}}]),vertexShader:ne.shadow_vert,fragmentShader:ne.shadow_frag}};Jn.physical={uniforms:cn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Z(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Z(0)},specularColor:{value:new Z(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:ne.meshphysical_vert,fragmentShader:ne.meshphysical_frag};var Sl={r:0,b:0,g:0},uv=new ye,Ld=new $t;Ld.set(-1,0,0,0,1,0,0,0,1);function hv(i,t,e,n,r,s){let o=new Z(0),a=r===!0?0:1,l,c,f=null,u=0,h=null;function d(x){let y=x.isScene===!0?x.background:null;if(y&&y.isTexture){let v=x.backgroundBlurriness>0;y=t.get(y,v)}return y}function g(x){let y=!1,v=d(x);v===null?m(o,a):v&&v.isColor&&(m(v,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,y){let v=d(y);v&&(v.isCubeTexture||v.mapping===Vs)?(c===void 0&&(c=new Ot(new qr(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:lr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(uv.makeRotationFromEuler(y.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Ld),c.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,(f!==v||u!==v.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ot(new hi(2,2),new ln({name:"BackgroundMaterial",uniforms:lr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:$n,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ae.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||u!==v.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=v,u=v.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function m(x,y){x.getRGB(Sl,vu(i)),e.buffers.color.setClear(Sl.r,Sl.g,Sl.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,y=1){o.set(x),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,m(o,a)},render:g,addToRenderList:b,dispose:p}}function fv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(E,T,C,A,P){let D=!1,L=u(E,A,C,T);s!==L&&(s=L,c(s.object)),D=d(E,A,C,P),D&&g(E,A,C,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,v(E,T,C,A),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function u(E,T,C,A){let P=A.wireframe===!0,D=n[T.id];D===void 0&&(D={},n[T.id]=D);let L=E.isInstancedMesh===!0?E.id:0,U=D[L];U===void 0&&(U={},D[L]=U);let B=U[C.id];B===void 0&&(B={},U[C.id]=B);let k=B[P];return k===void 0&&(k=h(l()),B[P]=k),k}function h(E){let T=[],C=[],A=[];for(let P=0;P<e;P++)T[P]=0,C[P]=0,A[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:C,attributeDivisors:A,object:E,attributes:{},index:null}}function d(E,T,C,A){let P=s.attributes,D=T.attributes,L=0,U=C.getAttributes();for(let B in U)if(U[B].location>=0){let V=P[B],j=D[B];if(j===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(j=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(j=E.instanceColor)),V===void 0||V.attribute!==j||j&&V.data!==j.data)return!0;L++}return s.attributesNum!==L||s.index!==A}function g(E,T,C,A){let P={},D=T.attributes,L=0,U=C.getAttributes();for(let B in U)if(U[B].location>=0){let V=D[B];V===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(V=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(V=E.instanceColor));let j={};j.attribute=V,V&&V.data&&(j.data=V.data),P[B]=j,L++}s.attributes=P,s.attributesNum=L,s.index=A}function b(){let E=s.newAttributes;for(let T=0,C=E.length;T<C;T++)E[T]=0}function m(E){p(E,0)}function p(E,T){let C=s.newAttributes,A=s.enabledAttributes,P=s.attributeDivisors;C[E]=1,A[E]===0&&(i.enableVertexAttribArray(E),A[E]=1),P[E]!==T&&(i.vertexAttribDivisor(E,T),P[E]=T)}function x(){let E=s.newAttributes,T=s.enabledAttributes;for(let C=0,A=T.length;C<A;C++)T[C]!==E[C]&&(i.disableVertexAttribArray(C),T[C]=0)}function y(E,T,C,A,P,D,L){L===!0?i.vertexAttribIPointer(E,T,C,P,D):i.vertexAttribPointer(E,T,C,A,P,D)}function v(E,T,C,A){b();let P=A.attributes,D=C.getAttributes(),L=T.defaultAttributeValues;for(let U in D){let B=D[U];if(B.location>=0){let k=P[U];if(k===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(k=E.instanceColor)),k!==void 0){let V=k.normalized,j=k.itemSize,G=t.get(k);if(G===void 0)continue;let J=G.buffer,et=G.type,ht=G.bytesPerElement,H=et===i.INT||et===i.UNSIGNED_INT||k.gpuType===ka;if(k.isInterleavedBufferAttribute){let X=k.data,rt=X.stride,at=k.offset;if(X.isInstancedInterleavedBuffer){for(let ut=0;ut<B.locationSize;ut++)p(B.location+ut,X.meshPerAttribute);E.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ut=0;ut<B.locationSize;ut++)m(B.location+ut);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ut=0;ut<B.locationSize;ut++)y(B.location+ut,j/B.locationSize,et,V,rt*ht,(at+j/B.locationSize*ut)*ht,H)}else{if(k.isInstancedBufferAttribute){for(let X=0;X<B.locationSize;X++)p(B.location+X,k.meshPerAttribute);E.isInstancedMesh!==!0&&A._maxInstanceCount===void 0&&(A._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let X=0;X<B.locationSize;X++)m(B.location+X);i.bindBuffer(i.ARRAY_BUFFER,J);for(let X=0;X<B.locationSize;X++)y(B.location+X,j/B.locationSize,et,V,j*ht,j/B.locationSize*X*ht,H)}}else if(L!==void 0){let V=L[U];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(B.location,V);break;case 3:i.vertexAttrib3fv(B.location,V);break;case 4:i.vertexAttrib4fv(B.location,V);break;default:i.vertexAttrib1fv(B.location,V)}}}}x()}function M(){R();for(let E in n){let T=n[E];for(let C in T){let A=T[C];for(let P in A){let D=A[P];for(let L in D)f(D[L].object),delete D[L];delete A[P]}}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let T=n[E.id];for(let C in T){let A=T[C];for(let P in A){let D=A[P];for(let L in D)f(D[L].object),delete D[L];delete A[P]}}delete n[E.id]}function I(E){for(let T in n){let C=n[T];for(let A in C){let P=C[A];if(P[E.id]===void 0)continue;let D=P[E.id];for(let L in D)f(D[L].object),delete D[L];delete P[E.id]}}}function _(E){for(let T in n){let C=n[T],A=E.isInstancedMesh===!0?E.id:0,P=C[A];if(P!==void 0){for(let D in P){let L=P[D];for(let U in L)f(L[U].object),delete L[U];delete P[D]}delete C[A],Object.keys(C).length===0&&delete n[T]}}}function R(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:m,disableUnusedAttributes:x}}function dv(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function pv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Sn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){let _=I===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==vn&&I!==Dn&&!_&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Wt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:b,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,maxSamples:M,samples:w}}function mv(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||r;return r=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){let g=u.clippingPlanes,b=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{let x=s?0:n,y=x*4,v=p.clippingState||null;l.value=v,v=f(g,h,y,d);for(let M=0;M!==y;++M)v[M]=e[M];p.clippingState=v,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,d,g){let b=u!==null?u.length:0,m=null;if(b!==0){if(m=l.value,g!==!0||m===null){let p=d+b*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=d;y!==b;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,m}}var ts=4,gv=6,bv=20,xv=256,Ks=new qn,ud=new Z,Ru=null,Cu=0,Pu=0,Iu=!1,vv=new W,cr=new W,Tl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=vv}=s;Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ru,Cu,Pu),this._renderer.xr.enabled=Iu,t.scissorTest=!1,Qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ru=this._renderer.getRenderTarget(),Cu=this._renderer.getActiveCubeFace(),Pu=this._renderer.getActiveMipmapLevel(),Iu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:Nn,format:Sn,colorSpace:_s,depthBuffer:!1},r=hd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=yv(s)),this._blurMaterial=Mv(s,t,e),this._ggxMaterial=_v(s,t,e)}return r}_compileMaterial(t){let e=new Ot(new Kt,t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,n,r,s){let l=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ud),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ot(new qr,new Qt({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,m=b.material,p=!1,x=t.background;x?x.isColor&&(m.color.copy(x),t.background=null,p=!0):(m.color.copy(ud),p=!0);for(let y=0;y<6;y++){let v=y%3;v===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[y],s.y,s.z)):v===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[y]));let M=this._cubeSize;Qr(r,v*M,y>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=h,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Ni||t.mapping===ar;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Qr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ks)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=c*1.25,d=u*h,{_lodMax:g}=this,b=this._sizeLods[n],m=3*b*(n>g-ts?n-g+ts:0),p=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,Qr(s,m,p,3*b,2*b),r.setRenderTarget(s),r.render(a,Ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Qr(t,m,p,3*b,2*b),r.setRenderTarget(t),r.render(a,Ks)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],u=3*f*(r>this._lodMax-ts?r-this._lodMax+ts:0),h=4*(this._cubeSize-f);Qr(e,u,h,3*f,2*f),o.setRenderTarget(e),o.render(l,Ks)}};function yv(i){let t=[],e=[],n=i,r=i-ts+1+gv;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,d=3,g=new Float32Array(d*h*u),b=new Float32Array(d*h*u);for(let p=0;p<u;p++){let x=p%3*2/3-1,y=p>2?0:-1,v=[x,y,0,x+2/3,y,0,x+2/3,y+1,0,x,y,0,x+2/3,y+1,0,x,y+1,0];g.set(v,d*h*p);for(let M=0;M<h;M++){let w=f[M*2]*2-1,I=f[M*2+1]*2-1;p===0?cr.set(1,I,w):p===1?cr.set(-w,1,-I):p===2?cr.set(-w,I,1):p===3?cr.set(-1,I,-w):p===4?cr.set(-w,-1,I):cr.set(w,I,-1),cr.toArray(b,(p*h+M)*d)}}let m=new Kt;m.setAttribute("position",new Mn(g,d)),m.setAttribute("outputDirection",new Mn(b,d)),e.push(new Ot(m,null)),n>ts&&n--}return{lodMeshes:e,sizeLods:t}}function hd(i,t,e){let n=new qe(i,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function _v(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:xv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Mv(i,t,e){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:bv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function fd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

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
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function dd(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zn,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var El=class extends qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Rs(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new qr(5,5,5),s=new ln({name:"CubemapFromEquirect",uniforms:lr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:Zn});s.uniforms.tEquirect.value=e;let o=new Ot(r,s),a=e.minFilter;return e.minFilter===Oi&&(e.minFilter=Qe),new Fa(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function Sv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===Oa||d===Ua)if(t.has(h)){let g=t.get(h).texture;return a(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let b=new El(g.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,g=d===Oa||d===Ua,b=d===Ni||d===ar;if(g||b){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Tl(i)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let x=h.image;return g&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new Tl(i)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function a(h,d){return d===Oa?h.mapping=Ni:d===Ua&&(h.mapping=ar),h}function l(h){let d=0,g=6;for(let b=0;b<g;b++)h[b]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function wv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&Qi("WebGLRenderer: "+n+" extension not supported."),r}}}function Tv(i,t,e,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(u){let h=[],d=u.index,g=u.attributes.position,b=0;if(g===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let y=0,v=x.length;y<v;y+=3){let M=x[y+0],w=x[y+1],I=x[y+2];h.push(M,w,w,I,I,M)}}else{let x=g.array;b=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){let M=y+0,w=y+1,I=y+2;h.push(M,w,w,I,I,M)}}let m=new(g.count>=65535?er:Es)(h,1);m.version=b;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function f(u){let h=s.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function Ev(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){i.drawElements(n,h,s,u*o),e.update(h,n,1)}function c(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,u*o,d),e.update(h,n,d))}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,d);let b=0;for(let m=0;m<d;m++)b+=h[m];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function Av(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Rv(i,t,e){let n=new WeakMap,r=new Ie;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(a);if(h===void 0||h.count!==u){let R=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),b===!0&&(y=3);let v=a.attributes.position.count*y,M=1;v>t.maxTextureSize&&(M=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*M*4*u),I=new ws(w,v,M,u);I.type=Dn,I.needsUpdate=!0;let _=y*4;for(let S=0;S<u;S++){let E=m[S],T=p[S],C=x[S],A=v*M*4*S;for(let P=0;P<E.count;P++){let D=P*_;d===!0&&(r.fromBufferAttribute(E,P),w[A+D+0]=r.x,w[A+D+1]=r.y,w[A+D+2]=r.z,w[A+D+3]=0),g===!0&&(r.fromBufferAttribute(T,P),w[A+D+4]=r.x,w[A+D+5]=r.y,w[A+D+6]=r.z,w[A+D+7]=0),b===!0&&(r.fromBufferAttribute(C,P),w[A+D+8]=r.x,w[A+D+9]=r.y,w[A+D+10]=r.z,w[A+D+11]=C.itemSize===4?r.w:1)}}h={count:u,texture:I,size:new ie(v,M)},n.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Cv(i,t,e,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f&&(t.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return h}function a(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var Pv={[tu]:"LINEAR_TONE_MAPPING",[eu]:"REINHARD_TONE_MAPPING",[nu]:"CINEON_TONE_MAPPING",[iu]:"ACES_FILMIC_TONE_MAPPING",[su]:"AGX_TONE_MAPPING",[ou]:"NEUTRAL_TONE_MAPPING",[ru]:"CUSTOM_TONE_MAPPING"};function Iv(i,t,e,n,r,s){let o=new qe(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Kt;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let f=new ya({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ot(c,f),h=new qn(-1,1,1,-1,0,1),d=null,g=null,b=!1,m,p=null,x=[],y=!1;this.setSize=function(v,M){o.setSize(v,M),a!==null&&a.setSize(v,M),l!==null&&l.setSize(v,M);for(let w=0;w<x.length;w++){let I=x[w];I.setSize&&I.setSize(v,M)}},this.setEffects=function(v){x=v,y=x.length>0&&x[0].isRenderPass===!0;let M=o.width,w=o.height;x.length>0&&a===null&&(a=new qe(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new qe(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<x.length;I++){let _=x[I];_.setSize&&_.setSize(M,w)}},this.begin=function(v,M){if(b||v.toneMapping===Ln&&x.length===0)return!1;if(p=M,M!==null){let w=M.width,I=M.height;(o.width!==w||o.height!==I)&&this.setSize(w,I)}return y===!1&&v.setRenderTarget(o),m=v.toneMapping,v.toneMapping=Ln,!0},this.hasRenderPass=function(){return y},this.end=function(v,M){v.toneMapping=m,b=!0;let w=o,I=a;for(let _=0;_<x.length;_++){let R=x[_];R.enabled!==!1&&(R.render(v,I,w,M),R.needsSwap!==!1&&(w=I,I=I===a?l:a))}if(d!==v.outputColorSpace||g!==v.toneMapping){d=v.outputColorSpace,g=v.toneMapping,f.defines={},ae.getTransfer(d)===ge&&(f.defines.SRGB_TRANSFER="");let _=Pv[g];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,v.setRenderTarget(p),v.render(u,h),p=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Fd=new an,Du=new Yn(1,1),Dd=new ws,Nd=new pa,Od=new Rs,pd=[],md=[],gd=new Float32Array(16),bd=new Float32Array(9),xd=new Float32Array(4);function ns(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=pd[r];if(s===void 0&&(s=new Float32Array(r),pd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Rl(i,t){let e=md[t];e===void 0&&(e=new Int32Array(t),md[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Lv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Fv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function Dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function Nv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function Ov(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;xd.set(n),i.uniformMatrix2fv(this.addr,!1,xd),Ve(e,n)}}function Uv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;bd.set(n),i.uniformMatrix3fv(this.addr,!1,bd),Ve(e,n)}}function Bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;gd.set(n),i.uniformMatrix4fv(this.addr,!1,gd),Ve(e,n)}}function kv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function zv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function Vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Gv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Hv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Xv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function qv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Du.compareFunction=e.isReversedDepthBuffer()?Ml:_l,s=Du):s=Fd,e.setTexture2D(t||s,r)}function $v(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Nd,r)}function Zv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Od,r)}function Kv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Dd,r)}function Jv(i){switch(i){case 5126:return Lv;case 35664:return Fv;case 35665:return Dv;case 35666:return Nv;case 35674:return Ov;case 35675:return Uv;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Vv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}}function jv(i,t){i.uniform1fv(this.addr,t)}function Qv(i,t){let e=ns(t,this.size,2);i.uniform2fv(this.addr,e)}function ty(i,t){let e=ns(t,this.size,3);i.uniform3fv(this.addr,e)}function ey(i,t){let e=ns(t,this.size,4);i.uniform4fv(this.addr,e)}function ny(i,t){let e=ns(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function iy(i,t){let e=ns(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function ry(i,t){let e=ns(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function sy(i,t){i.uniform1iv(this.addr,t)}function oy(i,t){i.uniform2iv(this.addr,t)}function ay(i,t){i.uniform3iv(this.addr,t)}function ly(i,t){i.uniform4iv(this.addr,t)}function cy(i,t){i.uniform1uiv(this.addr,t)}function uy(i,t){i.uniform2uiv(this.addr,t)}function hy(i,t){i.uniform3uiv(this.addr,t)}function fy(i,t){i.uniform4uiv(this.addr,t)}function dy(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=Du:o=Fd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function py(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Nd,s[o])}function my(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Od,s[o])}function gy(i,t,e){let n=this.cache,r=t.length,s=Rl(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Dd,s[o])}function by(i){switch(i){case 5126:return jv;case 35664:return Qv;case 35665:return ty;case 35666:return ey;case 35674:return ny;case 35675:return iy;case 35676:return ry;case 5124:case 35670:return sy;case 35667:case 35671:return oy;case 35668:case 35672:return ay;case 35669:case 35673:return ly;case 5125:return cy;case 36294:return uy;case 36295:return hy;case 36296:return fy;case 35678:case 36198:case 36298:case 36306:case 35682:return dy;case 35679:case 36299:case 36307:return py;case 35680:case 36300:case 36308:case 36293:return my;case 36289:case 36303:case 36311:case 36292:return gy}}var Nu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Jv(e.type)}},Ou=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=by(e.type)}},Uu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Lu=/(\w+)(\])?(\[|\.)?/g;function vd(i,t){i.seq.push(t),i.map[t.id]=t}function xy(i,t,e){let n=i.name,r=n.length;for(Lu.lastIndex=0;;){let s=Lu.exec(n),o=Lu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vd(e,c===void 0?new Nu(a,i,t):new Ou(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Uu(a),vd(e,u)),e=u}}}var es=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);xy(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function yd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var vy=37297,yy=0;function _y(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var _d=new $t;function My(i){ae._getMatrix(_d,ae.workingColorSpace,i);let t=`mat3( ${_d.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(i)){case Ms:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Md(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_y(i.getShaderSource(t),a)}else return s}function Sy(i,t){let e=My(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var wy={[tu]:"Linear",[eu]:"Reinhard",[nu]:"Cineon",[iu]:"ACESFilmic",[su]:"AgX",[ou]:"Neutral",[ru]:"Custom"};function Ty(i,t){let e=wy[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var wl=new W;function Ey(){ae.getLuminanceCoefficients(wl);let i=wl.x.toFixed(4),t=wl.y.toFixed(4),e=wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ay(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function Ry(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Cy(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function Sd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Py=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bu(i){return i.replace(Py,Ly)}var Iy=new Map;function Ly(i,t){let e=ne[t];if(e===void 0){let n=Iy.get(t);if(n!==void 0)e=ne[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Bu(e)}var Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Td(i){return i.replace(Fy,Dy)}function Dy(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ed(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Ny={[ks]:"SHADOWMAP_TYPE_PCF",[Kr]:"SHADOWMAP_TYPE_VSM"};function Oy(i){return Ny[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Uy={[Ni]:"ENVMAP_TYPE_CUBE",[ar]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function By(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Uy[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var ky={[ar]:"ENVMAP_MODE_REFRACTION"};function zy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ky[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Vy={[Qc]:"ENVMAP_BLENDING_MULTIPLY",[kf]:"ENVMAP_BLENDING_MIX",[zf]:"ENVMAP_BLENDING_ADD"};function Gy(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Vy[i.combine]||"ENVMAP_BLENDING_NONE"}function Hy(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Wy(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Oy(e),c=By(e),f=zy(e),u=Gy(e),h=Hy(e),d=Ay(e),g=Ry(s),b=r.createProgram(),m,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?ne.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Ty("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ne.colorspace_pars_fragment,Sy("linearToOutputTexel",e.outputColorSpace),Ey(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Bu(o),o=Sd(o,e),o=wd(o,e),a=Bu(a),a=Sd(a,e),a=wd(a,e),o=Td(o),a=Td(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===bu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===bu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=x+m+o,v=x+p+a,M=yd(r,r.VERTEX_SHADER,y),w=yd(r,r.FRAGMENT_SHADER,v);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function I(E){if(i.debug.checkShaderErrors){let T=r.getProgramInfoLog(b)||"",C=r.getShaderInfoLog(M)||"",A=r.getShaderInfoLog(w)||"",P=T.trim(),D=C.trim(),L=A.trim(),U=!0,B=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(U=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let k=Md(r,M,"vertex"),V=Md(r,w,"fragment");Xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+P+`
`+k+`
`+V)}else P!==""?Wt("WebGLProgram: Program Info Log:",P):(D===""||L==="")&&(B=!1);B&&(E.diagnostics={runnable:U,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:L,prefix:p}})}r.deleteShader(M),r.deleteShader(w),_=new es(r,b),R=Cy(r,b)}let _;this.getUniforms=function(){return _===void 0&&I(this),_};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,vy)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=yy++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var Xy=0,ku=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new zu(t),e.set(t,n)),n}},zu=class{constructor(t){this.id=Xy++,this.code=t,this.usedTimes=0}};function Yy(i){return i===Bi||i===qs||i===$s}function qy(i,t,e,n,r,s){let o=new Wr,a=new ku,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,R,S,E,T,C){let A=E.fog,P=T.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,L=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=t.get(_.envMap||D,L),B=U&&U.mapping===Vs?U.image.height:null,k=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Wt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let V=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,j=V!==void 0?V.length:0,G=0;P.morphAttributes.position!==void 0&&(G=1),P.morphAttributes.normal!==void 0&&(G=2),P.morphAttributes.color!==void 0&&(G=3);let J,et,ht,H;if(k){let _e=Jn[k];J=_e.vertexShader,et=_e.fragmentShader}else{J=_.vertexShader,et=_.fragmentShader;let _e=a.getVertexShaderStage(_),pe=a.getFragmentShaderStage(_);a.update(_,_e,pe),ht=_e.id,H=pe.id}let X=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),at=T.isInstancedMesh===!0,ut=T.isBatchedMesh===!0,pt=!!_.map,gt=!!_.matcap,Mt=!!U,kt=!!_.aoMap,re=!!_.lightMap,Vt=!!_.bumpMap&&_.wireframe===!1,de=!!_.normalMap,He=!!_.displacementMap,fn=!!_.emissiveMap,Re=!!_.metalnessMap,Oe=!!_.roughnessMap,$=_.anisotropy>0,nn=_.clearcoat>0,be=_.dispersion>0,z=_.retroreflectivity>0,F=_.iridescence>0,K=_.sheen>0,nt=_.transmission>0,st=$&&!!_.anisotropyMap,mt=nn&&!!_.clearcoatMap,bt=nn&&!!_.clearcoatNormalMap,ot=nn&&!!_.clearcoatRoughnessMap,ct=F&&!!_.iridescenceMap,xt=F&&!!_.iridescenceThicknessMap,Ut=K&&!!_.sheenColorMap,St=K&&!!_.sheenRoughnessMap,vt=!!_.specularMap,Bt=!!_.specularColorMap,Ht=!!_.specularIntensityMap,jt=nt&&!!_.transmissionMap,q=nt&&!!_.thicknessMap,yt=!!_.gradientMap,lt=!!_.alphaMap,_t=_.alphaTest>0,At=!!_.alphaHash,ft=!!_.extensions,zt=Ln;_.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(zt=i.toneMapping);let Ft={shaderID:k,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:et,defines:_.defines,customVertexShaderID:ht,customFragmentShaderID:H,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:ut,batchingColor:ut&&T._colorsTexture!==null,instancing:at,instancingColor:at&&T.instanceColor!==null,instancingMorph:at&&T.morphTexture!==null,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ae.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pt,matcap:gt,envMap:Mt,envMapMode:Mt&&U.mapping,envMapCubeUVHeight:B,aoMap:kt,lightMap:re,bumpMap:Vt,normalMap:de,displacementMap:He,emissiveMap:fn,normalMapObjectSpace:de&&_.normalMapType===Hf,normalMapTangentSpace:de&&_.normalMapType===mu,packedNormalMap:de&&_.normalMapType===mu&&Yy(_.normalMap.format),metalnessMap:Re,roughnessMap:Oe,anisotropy:$,anisotropyMap:st,clearcoat:nn,clearcoatMap:mt,clearcoatNormalMap:bt,clearcoatRoughnessMap:ot,dispersion:be,retroreflection:z,iridescence:F,iridescenceMap:ct,iridescenceThicknessMap:xt,sheen:K,sheenColorMap:Ut,sheenRoughnessMap:St,specularMap:vt,specularColorMap:Bt,specularIntensityMap:Ht,transmission:nt,transmissionMap:jt,thicknessMap:q,gradientMap:yt,opaque:_.transparent===!1&&_.blending===Di&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:_t,alphaHash:At,combine:_.combine,mapUv:pt&&g(_.map.channel),aoMapUv:kt&&g(_.aoMap.channel),lightMapUv:re&&g(_.lightMap.channel),bumpMapUv:Vt&&g(_.bumpMap.channel),normalMapUv:de&&g(_.normalMap.channel),displacementMapUv:He&&g(_.displacementMap.channel),emissiveMapUv:fn&&g(_.emissiveMap.channel),metalnessMapUv:Re&&g(_.metalnessMap.channel),roughnessMapUv:Oe&&g(_.roughnessMap.channel),anisotropyMapUv:st&&g(_.anisotropyMap.channel),clearcoatMapUv:mt&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:bt&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ct&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(_.sheenRoughnessMap.channel),specularMapUv:vt&&g(_.specularMap.channel),specularColorMapUv:Bt&&g(_.specularColorMap.channel),specularIntensityMapUv:Ht&&g(_.specularIntensityMap.channel),transmissionMapUv:jt&&g(_.transmissionMap.channel),thicknessMapUv:q&&g(_.thicknessMap.channel),alphaMapUv:lt&&g(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(de||$),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!P.attributes.uv&&(pt||lt),fog:!!A,useFog:_.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&de===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:rt,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:j,morphTextureStride:G,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:pt&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===ge,decodeVideoTextureEmissive:fn&&_.emissiveMap.isVideoTexture===!0&&ae.getTransfer(_.emissiveMap.colorSpace)===ge,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ue,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ft&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&_.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ft.vertexUv1s=l.has(1),Ft.vertexUv2s=l.has(2),Ft.vertexUv3s=l.has(3),l.clear(),Ft}function m(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)R.push(S),R.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(p(R,_),x(R,_),R.push(i.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function p(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function x(_,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let R=d[_.type],S;if(R){let E=Jn[R];S=ad.clone(E.uniforms)}else S=_.uniforms;return S}function v(_,R){let S=f.get(R);return S!==void 0?++S.usedTimes:(S=new Wy(i,R,_,r),c.push(S),f.set(R,S)),S}function M(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function I(){a.dispose()}return{getParameters:b,getProgramCacheKey:m,getUniforms:y,acquireProgram:v,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:I}}function $y(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Zy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Ad(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Rd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,g,b,m,p){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:g,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:m,group:p},i[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=g,x.materialVariant=o(h),x.groupOrder=b,x.renderOrder=h.renderOrder,x.z=m,x.group=p),t++,x}function l(h,d,g,b,m,p,x){x.reversedDepth===!0&&(m=-m);let y=a(h,d,g,b,m,p);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):e.push(y)}function c(h,d,g,b,m,p){let x=a(h,d,g,b,m,p);g.transmission>0?n.unshift(x):g.transparent===!0?r.unshift(x):e.unshift(x)}function f(h,d){e.length>1&&e.sort(h||Zy),n.length>1&&n.sort(d||Ad),r.length>1&&r.sort(d||Ad)}function u(){for(let h=t,d=i.length;h<d;h++){let g=i[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function Ky(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Rd,i.set(n,[o])):r>=s.length?(o=new Rd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Jy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new Z};break;case"SpotLight":e={position:new W,direction:new W,color:new Z,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new Z,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new Z,groundColor:new Z};break;case"RectAreaLight":e={color:new Z,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function jy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Qy=0;function t_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function e_(i){let t=new Jy,e=jy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let r=new W,s=new ye,o=new ye;function a(c){let f=0,u=0,h=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,b=0,m=0,p=0,x=0,y=0,v=0,M=0,w=0,I=0,_=0,R=0,S=0;c.sort(t_);for(let T=0,C=c.length;T<C;T++){let A=c[T],P=A.color,D=A.intensity,L=A.distance,U=null;if(A.shadow&&A.shadow.map&&(A.shadow.map.texture.format===Bi?U=A.shadow.map.texture:U=A.shadow.map.depthTexture||A.shadow.map.texture),A.isAmbientLight)f+=P.r*D,u+=P.g*D,h+=P.b*D;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],D);S++}else if(A.isSunLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,V=e.get(A);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=V,n.sunShadowMap[g]=U;let j=k.getViewportCount();for(let G=0;G<j;G++)n.sunShadowMatrix[b+G]=k.getMatrix(G),n.sunShadowCascade[b+G]=k._cascadeData[G];b+=j,g++}n.sun[d]=B,d++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let k=A.shadow,V=e.get(A);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.directionalShadow[m]=V,n.directionalShadowMap[m]=U,n.directionalShadowMatrix[m]=A.shadow.matrix,M++}n.directional[m]=B,m++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(P).multiplyScalar(D),B.distance=L,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[x]=B;let k=A.shadow;if(A.map&&(n.spotLightMap[_]=A.map,_++,k.updateMatrices(A),A.castShadow&&R++),n.spotLightMatrix[x]=k.matrix,A.castShadow){let V=e.get(A);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=U,I++}x++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(P).multiplyScalar(D),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[y]=B,y++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let k=A.shadow,V=e.get(A);V.shadowIntensity=k.intensity,V.shadowBias=k.bias,V.shadowNormalBias=k.normalBias,V.shadowRadius=k.radius,V.shadowMapSize=k.mapSize,V.shadowCameraNear=k.camera.near,V.shadowCameraFar=k.camera.far,n.pointShadow[p]=V,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=A.shadow.matrix,w++}n.point[p]=B,p++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(D),B.groundColor.copy(A.groundColor).multiplyScalar(D),n.hemi[v]=B,v++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let E=n.hash;(E.sunLength!==d||E.directionalLength!==m||E.pointLength!==p||E.spotLength!==x||E.rectAreaLength!==y||E.hemiLength!==v||E.numSunShadows!==g||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==I||E.numSpotMaps!==_||E.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=m,n.spot.length=x,n.rectArea.length=y,n.point.length=p,n.hemi.length=v,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=I,n.spotShadowMap.length=I,n.spotLightMatrix.length=I+_-R,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,E.sunLength=d,E.directionalLength=m,E.pointLength=p,E.spotLength=x,E.rectAreaLength=y,E.hemiLength=v,E.numSunShadows=g,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=I,E.numSpotMaps=_,E.numLightProbes=S,n.version=Qy++)}function l(c,f){let u=0,h=0,d=0,g=0,b=0,m=0,p=f.matrixWorldInverse;for(let x=0,y=c.length;x<y;x++){let v=c[x];if(v.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),u++}else if(v.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),h++}else if(v.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(v.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(v.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function Cd(i){let t=new e_(i),e=[],n=[],r=[];function s(h){u.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function f(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function n_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Cd(i),t.set(r,[a])):s>=o.length?(a=new Cd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var i_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r_=`uniform sampler2D shadow_pass;
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
}`,s_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],o_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Pd=new ye,Js=new W,Fu=new W;function a_(i,t,e){let n=new As,r=new ie,s=new ie,o=new Ie,a=new _a,l=new Ma,c={},f=e.maxTextureSize,u={[$n]:en,[en]:$n,[ue]:ue},h=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:i_,fragmentShader:r_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new Kt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ot(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let p=this.type;this.render=function(w,I,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===yf&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let R=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),T=i.state;T.setBlending(Zn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let C=p!==this.type;C&&I.traverse(function(A){A.material&&(Array.isArray(A.material)?A.material.forEach(P=>P.needsUpdate=!0):A.material.needsUpdate=!0)});for(let A=0,P=w.length;A<P;A++){let D=w[A],L=D.shadow;if(L===void 0){Wt("WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let U=L.getFrameExtents();r.multiply(U),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/U.x),r.x=s.x*U.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/U.y),r.y=s.y*U.y,L.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=B,L.map===null||C===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Kr){if(D.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new qe(r.x,r.y,{format:Bi,type:Nn,minFilter:Qe,magFilter:Qe,generateMipmaps:!1}),L.map.texture.name=D.name+".shadowMap",L.map.depthTexture=new Yn(r.x,r.y,Dn),L.map.depthTexture.name=D.name+".shadowMapDepth",L.map.depthTexture.format=Hn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ye,L.map.depthTexture.magFilter=Ye}else D.isPointLight?(L.map=new El(r.x),L.map.depthTexture=new va(r.x,Fn)):(L.map=new qe(r.x,r.y),L.map.depthTexture=new Yn(r.x,r.y,Fn)),L.map.depthTexture.name=D.name+".shadowMap",L.map.depthTexture.format=Hn,this.type===ks?(L.map.depthTexture.compareFunction=B?Ml:_l,L.map.depthTexture.minFilter=Qe,L.map.depthTexture.magFilter=Qe):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Ye,L.map.depthTexture.magFilter=Ye);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);let k=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();D.isPointLight!==!0&&L.updateMatrices(D,_);for(let V=0;V<k;V++){let j=L.getCamera(V);if(D.isPointLight){let G=L.camera,J=L.matrix,et=D.distance||G.far;et!==G.far&&(G.far=et,G.updateProjectionMatrix()),Js.setFromMatrixPosition(D.matrixWorld),G.position.copy(Js),Fu.copy(G.position),Fu.add(s_[V]),G.up.copy(o_[V]),G.lookAt(Fu),G.updateMatrixWorld(),J.makeTranslation(-Js.x,-Js.y,-Js.z),Pd.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),L._frustum.setFromProjectionMatrix(Pd,G.coordinateSystem,G.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,V),i.clear();else{V===0&&(i.setRenderTarget(L.map),i.clear());let G=L.getViewport(V);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),T.viewport(o)}n=L.getFrustum(V),v(I,_,j,D,this.type)}L.isPointLightShadow!==!0&&this.type===Kr&&x(L,_),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(R,S,E)};function x(w,I){let _=t.update(b);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new qe(r.x,r.y,{format:Bi,type:Nn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(I,null,_,h,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(I,null,_,d,b,null)}function y(w,I,_,R){let S=null,E=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=_.isPointLight===!0?l:a,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){let T=S.uuid,C=I.uuid,A=c[T];A===void 0&&(A={},c[T]=A);let P=A[C];P===void 0&&(P=S.clone(),A[C]=P,I.addEventListener("dispose",M)),S=P}if(S.visible=I.visible,S.wireframe=I.wireframe,R===Kr?S.side=I.shadowSide!==null?I.shadowSide:I.side:S.side=I.shadowSide!==null?I.shadowSide:u[I.side],S.alphaMap=I.alphaMap,S.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,S.map=I.map,S.clipShadows=I.clipShadows,S.clippingPlanes=I.clippingPlanes,S.clipIntersection=I.clipIntersection,S.displacementMap=I.displacementMap,S.displacementScale=I.displacementScale,S.displacementBias=I.displacementBias,S.wireframeLinewidth=I.wireframeLinewidth,S.linewidth=I.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let T=i.properties.get(S);T.light=_}return S}function v(w,I,_,R,S){if(w.visible===!1)return;if(w.layers.test(I.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Kr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let C=t.update(w),A=w.material;if(Array.isArray(A)){let P=C.groups;for(let D=0,L=P.length;D<L;D++){let U=P[D],B=A[U.materialIndex];if(B&&B.visible){let k=y(w,B,R,S);w.onBeforeShadow(i,w,I,_,C,k,U),i.renderBufferDirect(_,null,C,k,w,U),w.onAfterShadow(i,w,I,_,C,k,U)}}}else if(A.visible){let P=y(w,A,R,S);w.onBeforeShadow(i,w,I,_,C,P,null),i.renderBufferDirect(_,null,C,P,w,null),w.onAfterShadow(i,w,I,_,C,P,null)}}let T=w.children;for(let C=0,A=T.length;C<A;C++)v(T[C],I,_,R,S)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let R=c[_],S=w.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function l_(i,t){function e(){let q=!1,yt=new Ie,lt=null,_t=new Ie(0,0,0,0);return{setMask:function(At){lt!==At&&!q&&(i.colorMask(At,At,At,At),lt=At)},setLocked:function(At){q=At},setClear:function(At,ft,zt,Ft,_e){_e===!0&&(At*=Ft,ft*=Ft,zt*=Ft),yt.set(At,ft,zt,Ft),_t.equals(yt)===!1&&(i.clearColor(At,ft,zt,Ft),_t.copy(yt))},reset:function(){q=!1,lt=null,_t.set(-1,0,0,0)}}}function n(){let q=!1,yt=!1,lt=null,_t=null,At=null;return{setReversed:function(ft){if(yt!==ft){let zt=t.get("EXT_clip_control");ft?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT),yt=ft;let Ft=At;At=null,this.setClear(Ft)}},getReversed:function(){return yt},setTest:function(ft){ft?X(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(ft){lt!==ft&&!q&&(i.depthMask(ft),lt=ft)},setFunc:function(ft){if(yt&&(ft=ed[ft]),_t!==ft){switch(ft){case na:i.depthFunc(i.NEVER);break;case ia:i.depthFunc(i.ALWAYS);break;case ra:i.depthFunc(i.LESS);break;case zr:i.depthFunc(i.LEQUAL);break;case sa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case aa:i.depthFunc(i.GREATER);break;case la:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_t=ft}},setLocked:function(ft){q=ft},setClear:function(ft){At!==ft&&(At=ft,yt&&(ft=1-ft),i.clearDepth(ft))},reset:function(){q=!1,lt=null,_t=null,At=null,yt=!1}}}function r(){let q=!1,yt=null,lt=null,_t=null,At=null,ft=null,zt=null,Ft=null,_e=null;return{setTest:function(pe){q||(pe?X(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(pe){yt!==pe&&!q&&(i.stencilMask(pe),yt=pe)},setFunc:function(pe,En,zn){(lt!==pe||_t!==En||At!==zn)&&(i.stencilFunc(pe,En,zn),lt=pe,_t=En,At=zn)},setOp:function(pe,En,zn){(ft!==pe||zt!==En||Ft!==zn)&&(i.stencilOp(pe,En,zn),ft=pe,zt=En,Ft=zn)},setLocked:function(pe){q=pe},setClear:function(pe){_e!==pe&&(i.clearStencil(pe),_e=pe)},reset:function(){q=!1,yt=null,lt=null,_t=null,At=null,ft=null,zt=null,Ft=null,_e=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,f={},u={},h={},d=new WeakMap,g=[],b=null,m=!1,p=null,x=null,y=null,v=null,M=null,w=null,I=null,_=new Z(0,0,0),R=0,S=!1,E=null,T=null,C=null,A=null,P=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,U=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=U>=2);let k=null,V={},j=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),J=new Ie().fromArray(j),et=new Ie().fromArray(G);function ht(q,yt,lt,_t){let At=new Uint8Array(4),ft=i.createTexture();i.bindTexture(q,ft),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let zt=0;zt<lt;zt++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,_t,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(yt+zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ft}let H={};H[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),X(i.DEPTH_TEST),o.setFunc(zr),Vt(!1),de(Zc),X(i.CULL_FACE),kt(Zn);function X(q){f[q]!==!0&&(i.enable(q),f[q]=!0)}function rt(q){f[q]!==!1&&(i.disable(q),f[q]=!1)}function at(q,yt){return h[q]!==yt?(i.bindFramebuffer(q,yt),h[q]=yt,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=yt),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function ut(q,yt){let lt=g,_t=!1;if(q){lt=d.get(yt),lt===void 0&&(lt=[],d.set(yt,lt));let At=q.textures;if(lt.length!==At.length||lt[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,zt=At.length;ft<zt;ft++)lt[ft]=i.COLOR_ATTACHMENT0+ft;lt.length=At.length,_t=!0}}else lt[0]!==i.BACK&&(lt[0]=i.BACK,_t=!0);_t&&i.drawBuffers(lt)}function pt(q){return b!==q?(i.useProgram(q),b=q,!0):!1}let gt={[or]:i.FUNC_ADD,[Mf]:i.FUNC_SUBTRACT,[Sf]:i.FUNC_REVERSE_SUBTRACT};gt[wf]=i.MIN,gt[Tf]=i.MAX;let Mt={[Ef]:i.ZERO,[Af]:i.ONE,[Rf]:i.SRC_COLOR,[Jc]:i.SRC_ALPHA,[Df]:i.SRC_ALPHA_SATURATE,[Lf]:i.DST_COLOR,[Pf]:i.DST_ALPHA,[Cf]:i.ONE_MINUS_SRC_COLOR,[jc]:i.ONE_MINUS_SRC_ALPHA,[Ff]:i.ONE_MINUS_DST_COLOR,[If]:i.ONE_MINUS_DST_ALPHA,[Nf]:i.CONSTANT_COLOR,[Of]:i.ONE_MINUS_CONSTANT_COLOR,[Uf]:i.CONSTANT_ALPHA,[Bf]:i.ONE_MINUS_CONSTANT_ALPHA};function kt(q,yt,lt,_t,At,ft,zt,Ft,_e,pe){if(q===Zn){m===!0&&(rt(i.BLEND),m=!1);return}if(m===!1&&(X(i.BLEND),m=!0),q!==_f){if(q!==p||pe!==S){if((x!==or||M!==or)&&(i.blendEquation(i.FUNC_ADD),x=or,M=or),pe)switch(q){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFunc(i.ONE,i.ONE);break;case Kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",q);break}else switch(q){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Fe:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zs:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",q);break}y=null,v=null,w=null,I=null,_.set(0,0,0),R=0,p=q,S=pe}return}At=At||yt,ft=ft||lt,zt=zt||_t,(yt!==x||At!==M)&&(i.blendEquationSeparate(gt[yt],gt[At]),x=yt,M=At),(lt!==y||_t!==v||ft!==w||zt!==I)&&(i.blendFuncSeparate(Mt[lt],Mt[_t],Mt[ft],Mt[zt]),y=lt,v=_t,w=ft,I=zt),(Ft.equals(_)===!1||_e!==R)&&(i.blendColor(Ft.r,Ft.g,Ft.b,_e),_.copy(Ft),R=_e),p=q,S=!1}function re(q,yt){q.side===ue?rt(i.CULL_FACE):X(i.CULL_FACE);let lt=q.side===en;yt&&(lt=!lt),Vt(lt),q.blending===Di&&q.transparent===!1?kt(Zn):kt(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),o.setFunc(q.depthFunc),o.setTest(q.depthTest),o.setMask(q.depthWrite),s.setMask(q.colorWrite);let _t=q.stencilWrite;a.setTest(_t),_t&&(a.setMask(q.stencilWriteMask),a.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),a.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),fn(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Vt(q){E!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),E=q)}function de(q){q!==xf?(X(i.CULL_FACE),q!==T&&(q===Zc?i.cullFace(i.BACK):q===vf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),T=q}function He(q){q!==C&&(L&&i.lineWidth(q),C=q)}function fn(q,yt,lt){q?(X(i.POLYGON_OFFSET_FILL),(A!==yt||P!==lt)&&(A=yt,P=lt,o.getReversed()&&(yt=-yt),i.polygonOffset(yt,lt))):rt(i.POLYGON_OFFSET_FILL)}function Re(q){q?X(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function Oe(q){q===void 0&&(q=i.TEXTURE0+D-1),k!==q&&(i.activeTexture(q),k=q)}function $(q,yt,lt){lt===void 0&&(k===null?lt=i.TEXTURE0+D-1:lt=k);let _t=V[lt];_t===void 0&&(_t={type:void 0,texture:void 0},V[lt]=_t),(_t.type!==q||_t.texture!==yt)&&(k!==lt&&(i.activeTexture(lt),k=lt),i.bindTexture(q,yt||H[q]),_t.type=q,_t.texture=yt)}function nn(){let q=V[k];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function F(){try{i.texSubImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function K(){try{i.texSubImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function nt(){try{i.compressedTexSubImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function st(){try{i.compressedTexSubImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function mt(){try{i.texStorage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function bt(){try{i.texStorage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function ot(){try{i.texImage2D(...arguments)}catch(q){Xt("WebGLState:",q)}}function ct(){try{i.texImage3D(...arguments)}catch(q){Xt("WebGLState:",q)}}function xt(q){return u[q]!==void 0?u[q]:i.getParameter(q)}function Ut(q,yt){u[q]!==yt&&(i.pixelStorei(q,yt),u[q]=yt)}function St(q){J.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),J.copy(q))}function vt(q){et.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),et.copy(q))}function Bt(q,yt){let lt=c.get(yt);lt===void 0&&(lt=new WeakMap,c.set(yt,lt));let _t=lt.get(q);_t===void 0&&(_t=i.getUniformBlockIndex(yt,q.name),lt.set(q,_t))}function Ht(q,yt){let _t=c.get(yt).get(q);l.get(yt)!==_t&&(i.uniformBlockBinding(yt,_t,q.__bindingPointIndex),l.set(yt,_t))}function jt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},k=null,V={},h={},d=new WeakMap,g=[],b=null,m=!1,p=null,x=null,y=null,v=null,M=null,w=null,I=null,_=new Z(0,0,0),R=0,S=!1,E=null,T=null,C=null,A=null,P=null,J.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:X,disable:rt,bindFramebuffer:at,drawBuffers:ut,useProgram:pt,setBlending:kt,setMaterial:re,setFlipSided:Vt,setCullFace:de,setLineWidth:He,setPolygonOffset:fn,setScissorTest:Re,activeTexture:Oe,bindTexture:$,unbindTexture:nn,compressedTexImage2D:be,compressedTexImage3D:z,texImage2D:ot,texImage3D:ct,pixelStorei:Ut,getParameter:xt,updateUBOMapping:Bt,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:bt,texSubImage2D:F,texSubImage3D:K,compressedTexSubImage2D:nt,compressedTexSubImage3D:st,scissor:St,viewport:vt,reset:jt}}function c_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,f=new WeakMap,u=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(z,F){return g?new OffscreenCanvas(z,F):Vr("canvas")}function m(z,F,K){let nt=1,st=be(z);if((st.width>K||st.height>K)&&(nt=K/Math.max(st.width,st.height)),nt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let mt=Math.floor(nt*st.width),bt=Math.floor(nt*st.height);h===void 0&&(h=b(mt,bt));let ot=F?b(mt,bt):h;return ot.width=mt,ot.height=bt,ot.getContext("2d").drawImage(z,0,0,mt,bt),Wt("WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+mt+"x"+bt+")."),ot}else return"data"in z&&Wt("WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),z;return z}function p(z){return z.generateMipmaps}function x(z){i.generateMipmap(z)}function y(z){return z.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?i.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(z,F,K,nt,st,mt=!1){if(z!==null){if(i[z]!==void 0)return i[z];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let bt;nt&&(bt=t.get("EXT_texture_norm16"),bt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ot=F;if(F===i.RED&&(K===i.FLOAT&&(ot=i.R32F),K===i.HALF_FLOAT&&(ot=i.R16F),K===i.UNSIGNED_BYTE&&(ot=i.R8),K===i.UNSIGNED_SHORT&&bt&&(ot=bt.R16_EXT),K===i.SHORT&&bt&&(ot=bt.R16_SNORM_EXT)),F===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.R8UI),K===i.UNSIGNED_SHORT&&(ot=i.R16UI),K===i.UNSIGNED_INT&&(ot=i.R32UI),K===i.BYTE&&(ot=i.R8I),K===i.SHORT&&(ot=i.R16I),K===i.INT&&(ot=i.R32I)),F===i.RG&&(K===i.FLOAT&&(ot=i.RG32F),K===i.HALF_FLOAT&&(ot=i.RG16F),K===i.UNSIGNED_BYTE&&(ot=i.RG8),K===i.UNSIGNED_SHORT&&bt&&(ot=bt.RG16_EXT),K===i.SHORT&&bt&&(ot=bt.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RG8UI),K===i.UNSIGNED_SHORT&&(ot=i.RG16UI),K===i.UNSIGNED_INT&&(ot=i.RG32UI),K===i.BYTE&&(ot=i.RG8I),K===i.SHORT&&(ot=i.RG16I),K===i.INT&&(ot=i.RG32I)),F===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),K===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),K===i.UNSIGNED_INT&&(ot=i.RGB32UI),K===i.BYTE&&(ot=i.RGB8I),K===i.SHORT&&(ot=i.RGB16I),K===i.INT&&(ot=i.RGB32I)),F===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),K===i.UNSIGNED_INT&&(ot=i.RGBA32UI),K===i.BYTE&&(ot=i.RGBA8I),K===i.SHORT&&(ot=i.RGBA16I),K===i.INT&&(ot=i.RGBA32I)),F===i.RGB&&(K===i.UNSIGNED_SHORT&&bt&&(ot=bt.RGB16_EXT),K===i.SHORT&&bt&&(ot=bt.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(ot=i.R11F_G11F_B10F)),F===i.RGBA){let ct=mt?Ms:ae.getTransfer(st);K===i.FLOAT&&(ot=i.RGBA32F),K===i.HALF_FLOAT&&(ot=i.RGBA16F),K===i.UNSIGNED_BYTE&&(ot=ct===ge?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&bt&&(ot=bt.RGBA16_EXT),K===i.SHORT&&bt&&(ot=bt.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function M(z,F){let K;return z?F===null||F===Fn||F===jr?K=i.DEPTH24_STENCIL8:F===Dn?K=i.DEPTH32F_STENCIL8:F===Jr&&(K=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===Fn||F===jr?K=i.DEPTH_COMPONENT24:F===Dn?K=i.DEPTH_COMPONENT32F:F===Jr&&(K=i.DEPTH_COMPONENT16),K}function w(z,F){return p(z)===!0||z.isFramebufferTexture&&z.minFilter!==Ye&&z.minFilter!==Qe?Math.log2(Math.max(F.width,F.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?F.mipmaps.length:1}function I(z){let F=z.target;F.removeEventListener("dispose",I),R(F),F.isVideoTexture&&f.delete(F),F.isHTMLTexture&&u.delete(F)}function _(z){let F=z.target;F.removeEventListener("dispose",_),E(F)}function R(z){let F=n.get(z);if(F.__webglInit===void 0)return;let K=z.source,nt=d.get(K);if(nt){let st=nt[F.__cacheKey];st.usedTimes--,st.usedTimes===0&&S(z),Object.keys(nt).length===0&&d.delete(K)}n.remove(z)}function S(z){let F=n.get(z);i.deleteTexture(F.__webglTexture);let K=z.source,nt=d.get(K);delete nt[F.__cacheKey],o.memory.textures--}function E(z){let F=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(F.__webglFramebuffer[nt]))for(let st=0;st<F.__webglFramebuffer[nt].length;st++)i.deleteFramebuffer(F.__webglFramebuffer[nt][st]);else i.deleteFramebuffer(F.__webglFramebuffer[nt]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[nt])}else{if(Array.isArray(F.__webglFramebuffer))for(let nt=0;nt<F.__webglFramebuffer.length;nt++)i.deleteFramebuffer(F.__webglFramebuffer[nt]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let nt=0;nt<F.__webglColorRenderbuffer.length;nt++)F.__webglColorRenderbuffer[nt]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[nt]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let K=z.textures;for(let nt=0,st=K.length;nt<st;nt++){let mt=n.get(K[nt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(K[nt])}n.remove(z)}let T=0;function C(){T=0}function A(){return T}function P(z){T=z}function D(){let z=T;return z>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+r.maxTextures),T+=1,z}function L(z){let F=[];return F.push(z.wrapS),F.push(z.wrapT),F.push(z.wrapR||0),F.push(z.magFilter),F.push(z.minFilter),F.push(z.anisotropy),F.push(z.internalFormat),F.push(z.format),F.push(z.type),F.push(z.generateMipmaps),F.push(z.premultiplyAlpha),F.push(z.flipY),F.push(z.unpackAlignment),F.push(z.colorSpace),F.join()}function U(z,F){let K=n.get(z);if(z.isVideoTexture&&$(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&K.__version!==z.version){let nt=z.image;if(nt===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,z,F);return}}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+F)}function B(z,F){let K=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){rt(K,z,F);return}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+F)}function k(z,F){let K=n.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){rt(K,z,F);return}e.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+F)}function V(z,F){let K=n.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&K.__version!==z.version){at(K,z,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+F)}let j={[tr]:i.REPEAT,[bn]:i.CLAMP_TO_EDGE,[ca]:i.MIRRORED_REPEAT},G={[Ye]:i.NEAREST,[Vf]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[Ba]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},J={[Xf]:i.NEVER,[Kf]:i.ALWAYS,[Yf]:i.LESS,[_l]:i.LEQUAL,[qf]:i.EQUAL,[Ml]:i.GEQUAL,[$f]:i.GREATER,[Zf]:i.NOTEQUAL};function et(z,F){if(F.type===Dn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===Qe||F.magFilter===Ba||F.magFilter===Gs||F.magFilter===Oi||F.minFilter===Qe||F.minFilter===Ba||F.minFilter===Gs||F.minFilter===Oi)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(z,i.TEXTURE_WRAP_S,j[F.wrapS]),i.texParameteri(z,i.TEXTURE_WRAP_T,j[F.wrapT]),(z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY)&&i.texParameteri(z,i.TEXTURE_WRAP_R,j[F.wrapR]),i.texParameteri(z,i.TEXTURE_MAG_FILTER,G[F.magFilter]),i.texParameteri(z,i.TEXTURE_MIN_FILTER,G[F.minFilter]),F.compareFunction&&(i.texParameteri(z,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(z,i.TEXTURE_COMPARE_FUNC,J[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===Ye||F.minFilter!==Gs&&F.minFilter!==Oi||F.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let K=t.get("EXT_texture_filter_anisotropic");i.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function ht(z,F){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,F.addEventListener("dispose",I));let nt=F.source,st=d.get(nt);st===void 0&&(st={},d.set(nt,st));let mt=L(F);if(mt!==z.__cacheKey){st[mt]===void 0&&(st[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),st[mt].usedTimes++;let bt=st[z.__cacheKey];bt!==void 0&&(st[z.__cacheKey].usedTimes--,bt.usedTimes===0&&S(F)),z.__cacheKey=mt,z.__webglTexture=st[mt].texture}return K}function H(z,F,K){return Math.floor(Math.floor(z/K)/F)}function X(z,F,K,nt){let mt=z.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,K,nt,F.data);else{mt.sort((Ut,St)=>Ut.start-St.start);let bt=0;for(let Ut=1;Ut<mt.length;Ut++){let St=mt[bt],vt=mt[Ut],Bt=St.start+St.count,Ht=H(vt.start,F.width,4),jt=H(St.start,F.width,4);vt.start<=Bt+1&&Ht===jt&&H(vt.start+vt.count-1,F.width,4)===Ht?St.count=Math.max(St.count,vt.start+vt.count-St.start):(++bt,mt[bt]=vt)}mt.length=bt+1;let ot=e.getParameter(i.UNPACK_ROW_LENGTH),ct=e.getParameter(i.UNPACK_SKIP_PIXELS),xt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Ut=0,St=mt.length;Ut<St;Ut++){let vt=mt[Ut],Bt=Math.floor(vt.start/4),Ht=Math.ceil(vt.count/4),jt=Bt%F.width,q=Math.floor(Bt/F.width),yt=Ht,lt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,jt),e.pixelStorei(i.UNPACK_SKIP_ROWS,q),e.texSubImage2D(i.TEXTURE_2D,0,jt,q,yt,lt,K,nt,F.data)}z.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ot),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ct),e.pixelStorei(i.UNPACK_SKIP_ROWS,xt)}}function rt(z,F,K){let nt=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(nt=i.TEXTURE_3D);let st=ht(z,F),mt=F.source;e.bindTexture(nt,z.__webglTexture,i.TEXTURE0+K);let bt=n.get(mt);if(mt.version!==bt.__version||st===!0){if(e.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let lt=ae.getPrimaries(ae.workingColorSpace),_t=F.colorSpace===fi?null:ae.getPrimaries(F.colorSpace),At=F.colorSpace===fi||lt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let ct=m(F.image,!1,r.maxTextureSize);ct=nn(F,ct);let xt=s.convert(F.format,F.colorSpace),Ut=s.convert(F.type),St=v(F.internalFormat,xt,Ut,F.normalized,F.colorSpace,F.isVideoTexture);et(nt,F);let vt,Bt=F.mipmaps,Ht=F.isVideoTexture!==!0,jt=bt.__version===void 0||st===!0,q=mt.dataReady,yt=w(F,ct);if(F.isDepthTexture)St=M(F.format===Ui,F.type),jt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,St,ct.width,ct.height):e.texImage2D(i.TEXTURE_2D,0,St,ct.width,ct.height,0,xt,Ut,null));else if(F.isDataTexture)if(Bt.length>0){Ht&&jt&&e.texStorage2D(i.TEXTURE_2D,yt,St,Bt[0].width,Bt[0].height);for(let lt=0,_t=Bt.length;lt<_t;lt++)vt=Bt[lt],Ht?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,xt,Ut,vt.data):e.texImage2D(i.TEXTURE_2D,lt,St,vt.width,vt.height,0,xt,Ut,vt.data);F.generateMipmaps=!1}else Ht?(jt&&e.texStorage2D(i.TEXTURE_2D,yt,St,ct.width,ct.height),q&&X(F,ct,xt,Ut)):e.texImage2D(i.TEXTURE_2D,0,St,ct.width,ct.height,0,xt,Ut,ct.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Ht&&jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,St,Bt[0].width,Bt[0].height,ct.depth);for(let lt=0,_t=Bt.length;lt<_t;lt++)if(vt=Bt[lt],F.format!==Sn)if(xt!==null)if(Ht){if(q)if(F.layerUpdates.size>0){let At=Mu(vt.width,vt.height,F.format,F.type);for(let ft of F.layerUpdates){let zt=vt.data.subarray(ft*At/vt.data.BYTES_PER_ELEMENT,(ft+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,ft,vt.width,vt.height,1,xt,zt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,ct.depth,xt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,lt,St,vt.width,vt.height,ct.depth,0,vt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?q&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,lt,0,0,0,vt.width,vt.height,ct.depth,xt,Ut,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,lt,St,vt.width,vt.height,ct.depth,0,xt,Ut,vt.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{Ht&&jt&&e.texStorage2D(i.TEXTURE_2D,yt,St,Bt[0].width,Bt[0].height);for(let lt=0,_t=Bt.length;lt<_t;lt++)vt=Bt[lt],F.format!==Sn?xt!==null?Ht?q&&e.compressedTexSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,lt,St,vt.width,vt.height,0,vt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,vt.width,vt.height,xt,Ut,vt.data):e.texImage2D(i.TEXTURE_2D,lt,St,vt.width,vt.height,0,xt,Ut,vt.data)}else if(F.isDataArrayTexture)if(Ht){if(jt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,St,ct.width,ct.height,ct.depth),q)if(F.layerUpdates.size>0){let lt=Mu(ct.width,ct.height,F.format,F.type);for(let _t of F.layerUpdates){let At=ct.data.subarray(_t*lt/ct.data.BYTES_PER_ELEMENT,(_t+1)*lt/ct.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_t,ct.width,ct.height,1,xt,Ut,At)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ct.width,ct.height,ct.depth,xt,Ut,ct.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,ct.width,ct.height,ct.depth,0,xt,Ut,ct.data);else if(F.isData3DTexture)Ht?(jt&&e.texStorage3D(i.TEXTURE_3D,yt,St,ct.width,ct.height,ct.depth),q&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ct.width,ct.height,ct.depth,xt,Ut,ct.data)):e.texImage3D(i.TEXTURE_3D,0,St,ct.width,ct.height,ct.depth,0,xt,Ut,ct.data);else if(F.isFramebufferTexture){if(jt)if(Ht)e.texStorage2D(i.TEXTURE_2D,yt,St,ct.width,ct.height);else{let lt=ct.width,_t=ct.height;for(let At=0;At<yt;At++)e.texImage2D(i.TEXTURE_2D,At,St,lt,_t,0,xt,Ut,null),lt>>=1,_t>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let lt=i.canvas;if(lt.hasAttribute("layoutsubtree")||lt.setAttribute("layoutsubtree","true"),ct.parentNode!==lt){lt.appendChild(ct),u.add(F),lt.onpaint=_t=>{let At=_t.changedElements;for(let ft of u)At.includes(ft.image)&&(ft.needsUpdate=!0)},lt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ct);else{let At=i.RGBA,ft=i.RGBA,zt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ft,zt,ct)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Bt.length>0){if(Ht&&jt){let lt=be(Bt[0]);e.texStorage2D(i.TEXTURE_2D,yt,St,lt.width,lt.height)}for(let lt=0,_t=Bt.length;lt<_t;lt++)vt=Bt[lt],Ht?q&&e.texSubImage2D(i.TEXTURE_2D,lt,0,0,xt,Ut,vt):e.texImage2D(i.TEXTURE_2D,lt,St,xt,Ut,vt);F.generateMipmaps=!1}else if(Ht){if(jt){let lt=be(ct);e.texStorage2D(i.TEXTURE_2D,yt,St,lt.width,lt.height)}q&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,xt,Ut,ct)}else e.texImage2D(i.TEXTURE_2D,0,St,xt,Ut,ct);p(F)&&x(nt),bt.__version=mt.version,F.onUpdate&&F.onUpdate(F)}z.__version=F.version}function at(z,F,K){if(F.image.length!==6)return;let nt=ht(z,F),st=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+K);let mt=n.get(st);if(st.version!==mt.__version||nt===!0){e.activeTexture(i.TEXTURE0+K);let bt=ae.getPrimaries(ae.workingColorSpace),ot=F.colorSpace===fi?null:ae.getPrimaries(F.colorSpace),ct=F.colorSpace===fi||bt===ot?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let xt=F.isCompressedTexture||F.image[0].isCompressedTexture,Ut=F.image[0]&&F.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!xt&&!Ut?St[ft]=m(F.image[ft],!0,r.maxCubemapSize):St[ft]=Ut?F.image[ft].image:F.image[ft],St[ft]=nn(F,St[ft]);let vt=St[0],Bt=s.convert(F.format,F.colorSpace),Ht=s.convert(F.type),jt=v(F.internalFormat,Bt,Ht,F.normalized,F.colorSpace),q=F.isVideoTexture!==!0,yt=mt.__version===void 0||nt===!0,lt=st.dataReady,_t=w(F,vt);et(i.TEXTURE_CUBE_MAP,F);let At;if(xt){q&&yt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,jt,vt.width,vt.height);for(let ft=0;ft<6;ft++){At=St[ft].mipmaps;for(let zt=0;zt<At.length;zt++){let Ft=At[zt];F.format!==Sn?Bt!==null?q?lt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ft.width,Ft.height,Bt,Ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,jt,Ft.width,Ft.height,0,Ft.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,0,0,Ft.width,Ft.height,Bt,Ht,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt,jt,Ft.width,Ft.height,0,Bt,Ht,Ft.data)}}}else{if(At=F.mipmaps,q&&yt){At.length>0&&_t++;let ft=be(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,_t,jt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Ut){q?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Bt,Ht,St[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,jt,St[ft].width,St[ft].height,0,Bt,Ht,St[ft].data);for(let zt=0;zt<At.length;zt++){let _e=At[zt].image[ft].image;q?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,_e.width,_e.height,Bt,Ht,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,jt,_e.width,_e.height,0,Bt,Ht,_e.data)}}else{q?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Bt,Ht,St[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,jt,Bt,Ht,St[ft]);for(let zt=0;zt<At.length;zt++){let Ft=At[zt];q?lt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,0,0,Bt,Ht,Ft.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,zt+1,jt,Bt,Ht,Ft.image[ft])}}}p(F)&&x(i.TEXTURE_CUBE_MAP),mt.__version=st.version,F.onUpdate&&F.onUpdate(F)}z.__version=F.version}function ut(z,F,K,nt,st,mt){let bt=s.convert(K.format,K.colorSpace),ot=s.convert(K.type),ct=v(K.internalFormat,bt,ot,K.normalized,K.colorSpace),xt=n.get(F),Ut=n.get(K);if(Ut.__renderTarget=F,!xt.__hasExternalTextures){let St=Math.max(1,F.width>>mt),vt=Math.max(1,F.height>>mt);st===i.TEXTURE_3D||st===i.TEXTURE_2D_ARRAY?e.texImage3D(st,mt,ct,St,vt,F.depth,0,bt,ot,null):e.texImage2D(st,mt,ct,St,vt,0,bt,ot,null)}e.bindFramebuffer(i.FRAMEBUFFER,z),Oe(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,st,Ut.__webglTexture,0,Re(F)):(st===i.TEXTURE_2D||st>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,st,Ut.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(z,F,K){if(i.bindRenderbuffer(i.RENDERBUFFER,z),F.depthBuffer){let nt=F.depthTexture,st=nt&&nt.isDepthTexture?nt.type:null,mt=M(F.stencilBuffer,st),bt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Oe(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(F),mt,F.width,F.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(F),mt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,mt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,z)}else{let nt=F.textures;for(let st=0;st<nt.length;st++){let mt=nt[st],bt=s.convert(mt.format,mt.colorSpace),ot=s.convert(mt.type),ct=v(mt.internalFormat,bt,ot,mt.normalized,mt.colorSpace);Oe(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re(F),ct,F.width,F.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re(F),ct,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,ct,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(z,F,K){let nt=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,z),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let st=n.get(F.depthTexture);if(st.__renderTarget=F,(!st.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),nt){if(st.__webglInit===void 0&&(st.__webglInit=!0,F.depthTexture.addEventListener("dispose",I)),st.__webglTexture===void 0){st.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,st.__webglTexture),et(i.TEXTURE_CUBE_MAP,F.depthTexture);let xt=s.convert(F.depthTexture.format),Ut=s.convert(F.depthTexture.type),St;F.depthTexture.format===Hn?St=i.DEPTH_COMPONENT24:F.depthTexture.format===Ui&&(St=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,F.width,F.height,0,xt,Ut,null)}}else U(F.depthTexture,0);let mt=st.__webglTexture,bt=Re(F),ot=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,ct=F.depthTexture.format===Ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===Hn)Oe(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,mt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,mt,0);else if(F.depthTexture.format===Ui)Oe(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ct,ot,mt,0,bt):i.framebufferTexture2D(i.FRAMEBUFFER,ct,ot,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(z){let F=n.get(z),K=z.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==z.depthTexture){let nt=z.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),nt){let st=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,nt.removeEventListener("dispose",st)};nt.addEventListener("dispose",st),F.__depthDisposeCallback=st}F.__boundDepthTexture=nt}if(z.depthTexture&&!F.__autoAllocateDepthBuffer)if(K)for(let nt=0;nt<6;nt++)gt(F.__webglFramebuffer[nt],z,nt);else{let nt=z.texture.mipmaps;nt&&nt.length>0?gt(F.__webglFramebuffer[0],z,0):gt(F.__webglFramebuffer,z,0)}else if(K){F.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[nt]),F.__webglDepthbuffer[nt]===void 0)F.__webglDepthbuffer[nt]=i.createRenderbuffer(),pt(F.__webglDepthbuffer[nt],z,!1);else{let st=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=F.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,mt)}}else{let nt=z.texture.mipmaps;if(nt&&nt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),pt(F.__webglDepthbuffer,z,!1);else{let st=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,st,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(z,F,K){let nt=n.get(z);F!==void 0&&ut(nt.__webglFramebuffer,z,z.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Mt(z)}function re(z){let F=z.texture,K=n.get(z),nt=n.get(F);z.addEventListener("dispose",_);let st=z.textures,mt=z.isWebGLCubeRenderTarget===!0,bt=st.length>1;if(bt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=F.version,o.memory.textures++),mt){K.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(F.mipmaps&&F.mipmaps.length>0){K.__webglFramebuffer[ot]=[];for(let ct=0;ct<F.mipmaps.length;ct++)K.__webglFramebuffer[ot][ct]=i.createFramebuffer()}else K.__webglFramebuffer[ot]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){K.__webglFramebuffer=[];for(let ot=0;ot<F.mipmaps.length;ot++)K.__webglFramebuffer[ot]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(bt)for(let ot=0,ct=st.length;ot<ct;ot++){let xt=n.get(st[ot]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(z.samples>0&&Oe(z)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ot=0;ot<st.length;ot++){let ct=st[ot];K.__webglColorRenderbuffer[ot]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[ot]);let xt=s.convert(ct.format,ct.colorSpace),Ut=s.convert(ct.type),St=v(ct.internalFormat,xt,Ut,ct.normalized,ct.colorSpace,z.isXRRenderTarget===!0),vt=Re(z);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,St,z.width,z.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ot,i.RENDERBUFFER,K.__webglColorRenderbuffer[ot])}i.bindRenderbuffer(i.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(K.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),et(i.TEXTURE_CUBE_MAP,F);for(let ot=0;ot<6;ot++)if(F.mipmaps&&F.mipmaps.length>0)for(let ct=0;ct<F.mipmaps.length;ct++)ut(K.__webglFramebuffer[ot][ct],z,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else ut(K.__webglFramebuffer[ot],z,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(F)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,ct=st.length;ot<ct;ot++){let xt=st[ot],Ut=n.get(xt),St=i.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(St=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Ut.__webglTexture),et(St,xt),ut(K.__webglFramebuffer,z,xt,i.COLOR_ATTACHMENT0+ot,St,0),p(xt)&&x(St)}e.unbindTexture()}else{let ot=i.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ot=z.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ot,nt.__webglTexture),et(ot,F),F.mipmaps&&F.mipmaps.length>0)for(let ct=0;ct<F.mipmaps.length;ct++)ut(K.__webglFramebuffer[ct],z,F,i.COLOR_ATTACHMENT0,ot,ct);else ut(K.__webglFramebuffer,z,F,i.COLOR_ATTACHMENT0,ot,0);p(F)&&x(ot),e.unbindTexture()}z.depthBuffer&&Mt(z)}function Vt(z){let F=z.textures;for(let K=0,nt=F.length;K<nt;K++){let st=F[K];if(p(st)){let mt=y(z),bt=n.get(st).__webglTexture;e.bindTexture(mt,bt),x(mt),e.unbindTexture()}}}let de=[],He=[];function fn(z){if(z.samples>0){if(Oe(z)===!1){let F=z.textures,K=z.width,nt=z.height,st=i.COLOR_BUFFER_BIT,mt=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(z),ot=F.length>1;if(ot)for(let xt=0;xt<F.length;xt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let ct=z.texture.mipmaps;ct&&ct.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let xt=0;xt<F.length;xt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(st|=i.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(st|=i.STENCIL_BUFFER_BIT)),ot){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let Ut=n.get(F[xt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,K,nt,0,0,K,nt,st,i.NEAREST),l===!0&&(de.length=0,He.length=0,de.push(i.COLOR_ATTACHMENT0+xt),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(de.push(mt),He.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,de))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ot)for(let xt=0;xt<F.length;xt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[xt]);let Ut=n.get(F[xt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&l){let F=z.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function Re(z){return Math.min(r.maxSamples,z.samples)}function Oe(z){let F=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function $(z){let F=o.render.frame;f.get(z)!==F&&(f.set(z,F),z.update())}function nn(z,F){let K=z.colorSpace,nt=z.format,st=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==_s&&K!==fi&&(ae.getTransfer(K)===ge?(nt!==Sn||st!==vn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",K)),F}function be(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=C,this.getTextureUnits=A,this.setTextureUnits=P,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=V,this.rebindTextures=kt,this.setupRenderTarget=re,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Oe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function u_(i,t){function e(n,r=fi){let s,o=ae.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===za)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===hu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return i.BYTE;if(n===cu)return i.SHORT;if(n===Jr)return i.UNSIGNED_SHORT;if(n===ka)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===fu)return i.ALPHA;if(n===du)return i.RGB;if(n===Sn)return i.RGBA;if(n===Hn)return i.DEPTH_COMPONENT;if(n===Ui)return i.DEPTH_STENCIL;if(n===pu)return i.RED;if(n===Ga)return i.RED_INTEGER;if(n===Bi)return i.RG;if(n===Ha)return i.RG_INTEGER;if(n===Wa)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===Ys)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xa||n===Ya||n===qa||n===$a)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Xa)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$a)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ka||n===Ja||n===ja||n===Qa||n===qs||n===tl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Za||n===Ka)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ja)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ja)return s.COMPRESSED_R11_EAC;if(n===Qa)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===tl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===el||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl||n===dl||n===pl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===el)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===rl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ll)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===cl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ml||n===gl||n===bl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ml)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xl||n===vl||n===$s||n===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===xl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var h_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,f_=`
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

}`,Vu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Cs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:h_,fragmentShader:f_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ot(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gu=class extends Wn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,g=null,b=typeof XRWebGLBinding<"u",m=new Vu,p={},x=e.getContextAttributes(),y=null,v=null,M=[],w=[],I=new ie,_=null,R=null,S=new Xe;S.viewport=new Ie;let E=new Xe;E.viewport=new Ie;let T=[S,E],C=new Da,A=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let X=M[H];return X===void 0&&(X=new Xr,M[H]=X),X.getTargetRaySpace()},this.getControllerGrip=function(H){let X=M[H];return X===void 0&&(X=new Xr,M[H]=X),X.getGripSpace()},this.getHand=function(H){let X=M[H];return X===void 0&&(X=new Xr,M[H]=X),X.getHandSpace()};function D(H){let X=w.indexOf(H.inputSource);if(X===-1)return;let rt=M[X];rt!==void 0&&(rt.update(H.inputSource,H.frame,c||o),rt.dispatchEvent({type:H.type,data:H.inputSource}))}function L(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",U);for(let H=0;H<M.length;H++){let X=w[H];X!==null&&(w[H]=null,M[H].disconnect(X))}A=null,P=null,m.reset();for(let H in p)delete p[H];if(t.setRenderTarget(y),d=null,h=null,u=null,r=null,v=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(I.width,I.height,!1),R!==null){let H=R.camera;H.fov=R.fov,H.zoom=R.zoom,H.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",L),r.addEventListener("inputsourceschange",U),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let rt=null,at=null,ut=null;x.depth&&(ut=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=x.stencil?Ui:Hn,at=x.stencil?jr:Fn);let pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(pt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),v=new qe(h.textureWidth,h.textureHeight,{format:Sn,type:vn,depthTexture:new Yn(h.textureWidth,h.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let rt={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,rt),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new qe(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function U(H){for(let X=0;X<H.removed.length;X++){let rt=H.removed[X],at=w.indexOf(rt);at>=0&&(w[at]=null,M[at].disconnect(rt))}for(let X=0;X<H.added.length;X++){let rt=H.added[X],at=w.indexOf(rt);if(at===-1){for(let pt=0;pt<M.length;pt++)if(pt>=w.length){w.push(rt),at=pt;break}else if(w[pt]===null){w[pt]=rt,at=pt;break}if(at===-1)break}let ut=M[at];ut&&ut.connect(rt)}}let B=new W,k=new W;function V(H,X,rt){B.setFromMatrixPosition(X.matrixWorld),k.setFromMatrixPosition(rt.matrixWorld);let at=B.distanceTo(k),ut=X.projectionMatrix.elements,pt=rt.projectionMatrix.elements,gt=ut[14]/(ut[10]-1),Mt=ut[14]/(ut[10]+1),kt=(ut[9]+1)/ut[5],re=(ut[9]-1)/ut[5],Vt=(ut[8]-1)/ut[0],de=(pt[8]+1)/pt[0],He=gt*Vt,fn=gt*de,Re=at/(-Vt+de),Oe=Re*-Vt;if(X.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(Oe),H.translateZ(Re),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),ut[10]===-1)H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{let $=gt+Re,nn=Mt+Re,be=He-Oe,z=fn+(at-Oe),F=kt*Mt/nn*$,K=re*Mt/nn*$;H.projectionMatrix.makePerspective(be,z,F,K,$,nn),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function j(H,X){X===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(X.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let X=H.near,rt=H.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),C.near=E.near=S.near=X,C.far=E.far=S.far=rt,(A!==C.near||P!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),A=C.near,P=C.far),C.layers.mask=H.layers.mask|6,S.layers.mask=C.layers.mask&-5,E.layers.mask=C.layers.mask&-3;let at=H.parent,ut=C.cameras;j(C,at);for(let pt=0;pt<ut.length;pt++)j(ut[pt],at);ut.length===2?V(C,S,E):C.projectionMatrix.copy(S.projectionMatrix),R===null&&H.isPerspectiveCamera&&(R={camera:H,fov:H.fov,zoom:H.zoom}),G(H,C,at)};function G(H,X,rt){rt===null?H.matrix.copy(X.matrixWorld):(H.matrix.copy(rt.matrixWorld),H.matrix.invert(),H.matrix.multiply(X.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(X.projectionMatrix),H.projectionMatrixInverse.copy(X.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=ha*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(C)},this.getCameraTexture=function(H){return p[H]};let J=null;function et(H,X){if(f=X.getViewerPose(c||o),g=X,f!==null){let rt=f.views;d!==null&&(t.setRenderTargetFramebuffer(v,d.framebuffer),t.setRenderTarget(v));let at=!1;rt.length!==C.cameras.length&&(C.cameras.length=0,at=!0);for(let Mt=0;Mt<rt.length;Mt++){let kt=rt[Mt],re=null;if(d!==null)re=d.getViewport(kt);else{let de=u.getViewSubImage(h,kt);re=de.viewport,Mt===0&&(t.setRenderTargetTextures(v,de.colorTexture,de.depthStencilTexture),t.setRenderTarget(v))}let Vt=T[Mt];Vt===void 0&&(Vt=new Xe,Vt.layers.enable(Mt),Vt.viewport=new Ie,T[Mt]=Vt),Vt.matrix.fromArray(kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(re.x,re.y,re.width,re.height),Mt===0&&(C.matrix.copy(Vt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),at===!0&&C.cameras.push(Vt)}let ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let Mt=u.getDepthInformation(rt[0]);Mt&&Mt.isValid&&Mt.texture&&m.init(Mt,r.renderState)}if(ut&&ut.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let Mt=0;Mt<rt.length;Mt++){let kt=rt[Mt].camera;if(kt){let re=p[kt];re||(re=new Cs,p[kt]=re);let Vt=u.getCameraImage(kt);re.sourceTexture=Vt}}}}for(let rt=0;rt<M.length;rt++){let at=w[rt],ut=M[rt];at!==null&&ut!==void 0&&ut.update(at,X,c||o)}J&&J(H,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}let ht=new Id;ht.setAnimationLoop(et),this.setAnimationLoop=function(H){J=H},this.dispose=function(){}}},d_=new ye,Ud=new $t;Ud.set(-1,0,0,0,1,0,0,0,1);function p_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,vu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,x,y,v){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),b(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(d_.makeRotationFromEuler(v)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ud),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function b(m,p){let x=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function m_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let w=M.program;n.uniformBlockBinding(v,w)}function c(v,M){let w=r[v.id];w===void 0&&(m(v),w=f(v),r[v.id]=w,v.addEventListener("dispose",x));let I=M.program;n.updateUBOMapping(v,I);let _=t.render.frame;s[v.id]!==_&&(h(v),s[v.id]=_)}function f(v){let M=u();v.__bindingPointIndex=M;let w=i.createBuffer(),I=v.__size,_=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,I,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){let M=r[v.id],w=v.uniforms,I=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,R=w.length;_<R;_++){let S=w[_];if(Array.isArray(S))for(let E=0,T=S.length;E<T;E++)d(S[E],_,E,I);else d(S,_,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(v,M,w,I){if(b(v,M,w,I)===!0){let _=v.__offset,R=v.value;if(Array.isArray(R)){let S=0;for(let E=0;E<R.length;E++){let T=R[E],C=p(T);g(T,v.__data,S),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(S+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(R,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,v.__data)}}function g(v,M,w){typeof v=="number"||typeof v=="boolean"?M[0]=v:v.isMatrix3?(M[0]=v.elements[0],M[1]=v.elements[1],M[2]=v.elements[2],M[3]=0,M[4]=v.elements[3],M[5]=v.elements[4],M[6]=v.elements[5],M[7]=0,M[8]=v.elements[6],M[9]=v.elements[7],M[10]=v.elements[8],M[11]=0):ArrayBuffer.isView(v)?M.set(new v.constructor(v.buffer,v.byteOffset,M.length)):v.toArray(M,w)}function b(v,M,w,I){let _=v.value,R=M+"_"+w;if(I[R]===void 0)return typeof _=="number"||typeof _=="boolean"?I[R]=_:ArrayBuffer.isView(_)?I[R]=_.slice():I[R]=_.clone(),!0;{let S=I[R];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return I[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function m(v){let M=v.uniforms,w=0,I=16;for(let R=0,S=M.length;R<S;R++){let E=Array.isArray(M[R])?M[R]:[M[R]];for(let T=0,C=E.length;T<C;T++){let A=E[T],P=Array.isArray(A.value)?A.value:[A.value];for(let D=0,L=P.length;D<L;D++){let U=P[D],B=p(U),k=w%I,V=k%B.boundary,j=k+V;w+=V,j!==0&&I-j<B.storage&&(w+=I-j),A.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=w,w+=B.storage}}}let _=w%I;return _>0&&(w+=I-_),v.__size=w,v.__cache={},this}function p(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(M.boundary=16,M.storage=v.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",v),M}function x(v){let M=v.target;M.removeEventListener("dispose",x);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(let v in r)i.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var g_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Kn=null;function b_(){return Kn===null&&(Kn=new ma(g_,16,16,Bi,Nn),Kn.name="DFG_LUT",Kn.minFilter=Qe,Kn.magFilter=Qe,Kn.wrapS=bn,Kn.wrapT=bn,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}var ur=class{constructor(t={}){let{canvas:e=jf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let b=d,m=new Set([Wa,Ha,Ga]),p=new Set([vn,Fn,Jr,jr,za,Va]),x=new Uint32Array(4),y=new Int32Array(4),v=new W,M=null,w=null,I=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,E=!1,T=null,C=null,A=null,P=null;this._outputColorSpace=Ce;let D=0,L=0,U=null,B=-1,k=null,V=new Ie,j=new Ie,G=null,J=new Z(0),et=0,ht=e.width,H=e.height,X=1,rt=null,at=null,ut=new Ie(0,0,ht,H),pt=new Ie(0,0,ht,H),gt=!1,Mt=new As,kt=!1,re=!1,Vt=new ye,de=new W,He=new Ie,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function Oe(){return U===null?X:1}let $=n;function nn(O,Y){return e.getContext(O,Y)}let be,z,F,K,nt,st,mt,bt,ot,ct,xt,Ut,St,vt,Bt,Ht,jt,q,yt,lt,_t,At,ft;try{let O={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",En,!1),$===null){let Y="webgl2";if($=nn(Y,O),$===null)throw nn(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}zt()}catch(O){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Xt("WebGLRenderer: "+O.message),O}function zt(){be=new wv($),be.init(),_t=new u_($,be),z=new pv($,be,t,_t),F=new l_($,be),z.reversedDepthBuffer&&h&&F.buffers.depth.setReversed(!0),C=$.createFramebuffer(),A=$.createFramebuffer(),P=$.createFramebuffer(),K=new Av($),nt=new $y,st=new c_($,be,F,nt,z,_t,K),mt=new Sv(S),bt=new Cg($),At=new fv($,bt),ot=new Tv($,bt,K,At),ct=new Cv($,ot,bt,At,K),q=new Rv($,z,st),Bt=new mv(nt),xt=new qy(S,mt,be,z,At,Bt),Ut=new p_(S,nt),St=new Ky,vt=new n_(be),jt=new hv(S,mt,F,ct,g,l),Ht=new a_(S,ct,z),ft=new m_($,K,z,F),yt=new dv($,be,K),lt=new Ev($,be,K),K.programs=xt.programs,S.capabilities=z,S.extensions=be,S.properties=nt,S.renderLists=St,S.shadowMap=Ht,S.state=F,S.info=K}b!==vn&&(R=new Iv(b,e.width,e.height,a,r,s));let Ft=new Gu(S,$);this.xr=Ft,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let O=be.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){let O=be.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(O){O!==void 0&&(X=O,this.setSize(ht,H,!1))},this.getSize=function(O){return O.set(ht,H)},this.setSize=function(O,Y,it=!0){if(Ft.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=O,H=Y,e.width=Math.floor(O*X),e.height=Math.floor(Y*X),it===!0&&(e.style.width=O+"px",e.style.height=Y+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,O,Y)},this.getDrawingBufferSize=function(O){return O.set(ht*X,H*X).floor()},this.setDrawingBufferSize=function(O,Y,it){ht=O,H=Y,X=it,e.width=Math.floor(O*it),e.height=Math.floor(Y*it),this.setViewport(0,0,O,Y)},this.setEffects=function(O){if(b===vn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let Y=0;Y<O.length;Y++)if(O[Y].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(V)},this.getViewport=function(O){return O.copy(ut)},this.setViewport=function(O,Y,it,Q){O.isVector4?ut.set(O.x,O.y,O.z,O.w):ut.set(O,Y,it,Q),F.viewport(V.copy(ut).multiplyScalar(X).round())},this.getScissor=function(O){return O.copy(pt)},this.setScissor=function(O,Y,it,Q){O.isVector4?pt.set(O.x,O.y,O.z,O.w):pt.set(O,Y,it,Q),F.scissor(j.copy(pt).multiplyScalar(X).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(O){F.setScissorTest(gt=O)},this.setOpaqueSort=function(O){rt=O},this.setTransparentSort=function(O){at=O},this.getClearColor=function(O){return O.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor(...arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha(...arguments)},this.clear=function(O=!0,Y=!0,it=!0){let Q=0;if(O){let tt=!1;if(U!==null){let Et=U.texture.format;tt=m.has(Et)}if(tt){let Et=U.texture.type,Ct=p.has(Et),Tt=jt.getClearColor(),It=jt.getClearAlpha(),Nt=Tt.r,ee=Tt.g,oe=Tt.b;Ct?(x[0]=Nt,x[1]=ee,x[2]=oe,x[3]=It,$.clearBufferuiv($.COLOR,0,x)):(y[0]=Nt,y[1]=ee,y[2]=oe,y[3]=It,$.clearBufferiv($.COLOR,0,y))}else Q|=$.COLOR_BUFFER_BIT}Y&&(Q|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),it&&(Q|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&$.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(O){O.setRenderer(this),T=O},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",En,!1),jt.dispose(),St.dispose(),vt.dispose(),nt.dispose(),mt.dispose(),ct.dispose(),At.dispose(),ft.dispose(),xt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Ih),Ft.removeEventListener("sessionend",Lh),$i.stop()};function _e(O){O.preventDefault(),xu("WebGLRenderer: Context Lost."),E=!0}function pe(){xu("WebGLRenderer: Context Restored."),E=!1;let O=K.autoReset,Y=Ht.enabled,it=Ht.autoUpdate,Q=Ht.needsUpdate,tt=Ht.type;zt(),K.autoReset=O,Ht.enabled=Y,Ht.autoUpdate=it,Ht.needsUpdate=Q,Ht.type=tt}function En(O){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function zn(O){let Y=O.target;Y.removeEventListener("dispose",zn),S0(Y)}function S0(O){w0(O),nt.remove(O)}function w0(O){let Y=nt.get(O).programs;Y!==void 0&&(Y.forEach(function(it){xt.releaseProgram(it)}),O.isShaderMaterial&&xt.releaseShaderCache(O))}this.renderBufferDirect=function(O,Y,it,Q,tt,Et){Y===null&&(Y=fn);let Ct=tt.isMesh&&tt.matrixWorld.determinantAffine()<0,Tt=A0(O,Y,it,Q,tt);F.setMaterial(Q,Ct);let It=it.index,Nt=1;if(Q.wireframe===!0){if(It=ot.getWireframeAttribute(it),It===void 0)return;Nt=2}let ee=it.drawRange,oe=it.attributes.position,Lt=ee.start*Nt,me=(ee.start+ee.count)*Nt;Et!==null&&(Lt=Math.max(Lt,Et.start*Nt),me=Math.min(me,(Et.start+Et.count)*Nt)),It!==null?(Lt=Math.max(Lt,0),me=Math.min(me,It.count)):oe!=null&&(Lt=Math.max(Lt,0),me=Math.min(me,oe.count));let Ue=me-Lt;if(Ue<0||Ue===1/0)return;At.setup(tt,Q,Tt,it,It);let Se,ve=yt;if(It!==null&&(Se=bt.get(It),ve=lt,ve.setIndex(Se)),tt.isMesh)Q.wireframe===!0?(F.setLineWidth(Q.wireframeLinewidth*Oe()),ve.setMode($.LINES)):ve.setMode($.TRIANGLES);else if(tt.isLine){let rn=Q.linewidth;rn===void 0&&(rn=1),F.setLineWidth(rn*Oe()),tt.isLineSegments?ve.setMode($.LINES):tt.isLineLoop?ve.setMode($.LINE_LOOP):ve.setMode($.LINE_STRIP)}else tt.isPoints?ve.setMode($.POINTS):tt.isSprite&&ve.setMode($.TRIANGLES);if(tt.isBatchedMesh)if(be.get("WEBGL_multi_draw"))ve.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{let rn=tt._multiDrawStarts,Rt=tt._multiDrawCounts,un=tt._multiDrawCount,he=It?bt.get(It).bytesPerElement:1,yn=nt.get(Q).currentProgram.getUniforms();for(let Vn=0;Vn<un;Vn++)yn.setValue($,"_gl_DrawID",Vn),ve.render(rn[Vn]/he,Rt[Vn])}else if(tt.isInstancedMesh)ve.renderInstances(Lt,Ue,tt.count);else if(it.isInstancedBufferGeometry){let rn=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Rt=Math.min(it.instanceCount,rn);ve.renderInstances(Lt,Ue,Rt)}else ve.render(Lt,Ue)};function Ph(O,Y,it,Q){T!==null&&O.isNodeMaterial&&T.setObject(Q,O),kt===!0&&Bt.setState(O,it,!1),O.transparent===!0&&O.side===ue&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,Ao(O,Y,Q),O.side=$n,O.needsUpdate=!0,Ao(O,Y,Q),O.side=ue):Ao(O,Y,Q)}this.compile=function(O,Y,it=null){it===null&&(it=O),T!==null&&T.renderStart(O,Y,it),w=vt.get(it),w.init(Y),_.push(w),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(w.pushLight(tt),tt.castShadow&&w.pushShadow(tt))}),O!==it&&O.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Y.layers)&&(w.pushLight(tt),tt.castShadow&&w.pushShadow(tt))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),re=this.localClippingEnabled,kt=Bt.init(this.clippingPlanes,re),kt===!0&&Bt.setGlobalState(this.clippingPlanes,Y),T!==null&&Ht.render(w.state.shadowsArray,it,Y);let Q=new Set;return O.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;let Et=tt.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let Tt=Et[Ct];Ph(Tt,it,Y,tt),Q.add(Tt)}else Ph(Et,it,Y,tt),Q.add(Et)}),w=_.pop(),T!==null&&T.renderEnd(),Q},this.compileAsync=function(O,Y,it=null){let Q=this.compile(O,Y,it);return new Promise(tt=>{function Et(){if(Q.forEach(function(Ct){let It=nt.get(Ct).currentProgram;(It===void 0||It.isReady())&&Q.delete(Ct)}),Q.size===0){tt(O);return}setTimeout(Et,10)}be.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let dc=null;function T0(O){dc&&dc(O)}function Ih(){$i.stop()}function Lh(){$i.start()}let $i=new Id;$i.setAnimationLoop(T0),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(O){dc=O,Ft.setAnimationLoop(O),O===null?$i.stop():$i.start()},Ft.addEventListener("sessionstart",Ih),Ft.addEventListener("sessionend",Lh),this.render=function(O,Y){if(Y!==void 0&&Y.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T!==null&&T.renderStart(O,Y);let it=Ft.enabled===!0&&Ft.isPresenting===!0,Q=R!==null&&(U===null||it)&&R.begin(S,U);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(Y),Y=Ft.getCamera()),O.isScene===!0&&O.onBeforeRender(S,O,Y,U),w=vt.get(O,_.length),w.init(Y),w.state.textureUnits=st.getTextureUnits(),_.push(w),Vt.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Mt.setFromProjectionMatrix(Vt,In,Y.reversedDepth),re=this.localClippingEnabled,kt=Bt.init(this.clippingPlanes,re),M=St.get(O,I.length),M.init(),I.push(M),Ft.enabled===!0&&Ft.isPresenting===!0){let Ct=S.xr.getDepthSensingMesh();Ct!==null&&pc(Ct,Y,-1/0,S.sortObjects)}pc(O,Y,0,S.sortObjects),M.finish(),T!==null&&T.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(rt,at),Re=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,Re&&jt.addToRenderList(M,O),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),kt===!0&&Bt.beginShadows();let tt=w.state.shadowsArray;if(Ht.render(tt,O,Y),kt===!0&&Bt.endShadows(),(Q&&R.hasRenderPass())===!1){let Ct=M.opaque,Tt=M.transmissive;if(w.setupLights(),Y.isArrayCamera){let It=Y.cameras;if(Tt.length>0)for(let Nt=0,ee=It.length;Nt<ee;Nt++){let oe=It[Nt];Dh(Ct,Tt,O,oe)}Re&&jt.render(O);for(let Nt=0,ee=It.length;Nt<ee;Nt++){let oe=It[Nt];Fh(M,O,oe,oe.viewport)}}else Tt.length>0&&Dh(Ct,Tt,O,Y),Re&&jt.render(O),Fh(M,O,Y)}U!==null&&L===0&&(st.updateMultisampleRenderTarget(U),st.updateRenderTargetMipmap(U)),Q&&R.end(S),O.isScene===!0&&O.onAfterRender(S,O,Y),At.resetDefaultState(),B=-1,k=null,_.pop(),_.length>0?(w=_[_.length-1],st.setTextureUnits(w.state.textureUnits),kt===!0&&Bt.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,I.pop(),I.length>0?M=I[I.length-1]:M=null,T!==null&&T.renderEnd()};function pc(O,Y,it,Q){if(O.visible===!1)return;if(O.layers.test(Y.layers)){if(O.isGroup)it=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(Y);else if(O.isLightProbeGrid)w.pushLightProbeGrid(O);else if(O.isLight)w.pushLight(O),O.castShadow&&w.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||O.intersectsFrustum(Mt)){Q&&He.setFromMatrixPosition(O.matrixWorld).applyMatrix4(Vt);let Ct=ct.update(O),Tt=O.material;Tt.visible&&M.push(O,Ct,Tt,it,He.z,null,Y)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||O.intersectsFrustum(Mt))){let Ct=ct.update(O),Tt=O.material;if(Q&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),He.copy(O.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),He.copy(Ct.boundingSphere.center)),He.applyMatrix4(O.matrixWorld).applyMatrix4(Vt)),Array.isArray(Tt)){let It=Ct.groups;for(let Nt=0,ee=It.length;Nt<ee;Nt++){let oe=It[Nt],Lt=Tt[oe.materialIndex];Lt&&Lt.visible&&M.push(O,Ct,Lt,it,He.z,oe,Y)}}else Tt.visible&&M.push(O,Ct,Tt,it,He.z,null,Y)}}let Et=O.children;for(let Ct=0,Tt=Et.length;Ct<Tt;Ct++)pc(Et[Ct],Y,it,Q)}function Fh(O,Y,it,Q){let{opaque:tt,transmissive:Et,transparent:Ct}=O;w.setupLightsView(it),kt===!0&&Bt.setGlobalState(S.clippingPlanes,it),Q&&F.viewport(V.copy(Q)),tt.length>0&&Eo(tt,Y,it),Et.length>0&&Eo(Et,Y,it),Ct.length>0&&Eo(Ct,Y,it),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Dh(O,Y,it,Q){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){let Lt=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new qe(1,1,{generateMipmaps:!0,type:Lt?Nn:vn,minFilter:Oi,samples:Math.max(4,z.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ae.workingColorSpace})}let Et=w.state.transmissionRenderTarget[Q.id],Ct=Q.viewport||V;Et.setSize(Ct.z*S.transmissionResolutionScale,Ct.w*S.transmissionResolutionScale);let Tt=S.getRenderTarget(),It=S.getActiveCubeFace(),Nt=S.getActiveMipmapLevel();S.setRenderTarget(Et),S.getClearColor(J),et=S.getClearAlpha(),et<1&&S.setClearColor(16777215,.5),S.clear(),Re&&jt.render(it);let ee=S.toneMapping;S.toneMapping=Ln;let oe=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),kt===!0&&Bt.setGlobalState(S.clippingPlanes,Q),Eo(O,it,Q),st.updateMultisampleRenderTarget(Et),st.updateRenderTargetMipmap(Et),be.has("WEBGL_multisampled_render_to_texture")===!1){let Lt=!1;for(let me=0,Ue=Y.length;me<Ue;me++){let Se=Y[me],{object:ve,geometry:rn,material:Rt,group:un}=Se;if(Rt.side===ue&&ve.layers.test(Q.layers)){let he=Rt.side;Rt.side=en,Rt.needsUpdate=!0,Nh(ve,it,Q,rn,Rt,un),Rt.side=he,Rt.needsUpdate=!0,Lt=!0}}Lt===!0&&(st.updateMultisampleRenderTarget(Et),st.updateRenderTargetMipmap(Et))}S.setRenderTarget(Tt,It,Nt),S.setClearColor(J,et),oe!==void 0&&(Q.viewport=oe),S.toneMapping=ee}function Eo(O,Y,it){let Q=Y.isScene===!0?Y.overrideMaterial:null;for(let tt=0,Et=O.length;tt<Et;tt++){let Ct=O[tt],{object:Tt,geometry:It,group:Nt}=Ct,ee=Ct.material;ee.allowOverride===!0&&Q!==null&&(ee=Q),Tt.layers.test(it.layers)&&Nh(Tt,Y,it,It,ee,Nt)}}function Nh(O,Y,it,Q,tt,Et){T!==null&&tt.isNodeMaterial&&T.setObject(O,tt),O.onBeforeRender(S,Y,it,Q,tt,Et),O.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),tt.onBeforeRender(S,Y,it,Q,O,Et),tt.transparent===!0&&tt.side===ue&&tt.forceSinglePass===!1?(tt.side=en,tt.needsUpdate=!0,S.renderBufferDirect(it,Y,Q,tt,O,Et),tt.side=$n,tt.needsUpdate=!0,S.renderBufferDirect(it,Y,Q,tt,O,Et),tt.side=ue):S.renderBufferDirect(it,Y,Q,tt,O,Et),O.onAfterRender(S,Y,it,Q,tt,Et)}function Ao(O,Y,it){Y.isScene!==!0&&(Y=fn);let Q=nt.get(O),tt=w.state.lights,Et=w.state.shadowsArray,Ct=tt.state.version,Tt=xt.getParameters(O,tt.state,Et,Y,it,w.state.lightProbeGridArray),It=xt.getProgramCacheKey(Tt),Nt=Q.programs;Q.environment=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?Y.environment:null,Q.fog=Y.fog;let ee=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap;Q.envMap=mt.get(O.envMap||Q.environment,ee),Q.envMapRotation=Q.environment!==null&&O.envMap===null?Y.environmentRotation:O.envMapRotation,Nt===void 0&&(O.addEventListener("dispose",zn),Nt=new Map,Q.programs=Nt);let oe=Nt.get(It);if(oe!==void 0){if(Q.currentProgram===oe&&Q.lightsStateVersion===Ct)return Uh(O,Tt),oe}else Tt.uniforms=xt.getUniforms(O),T!==null&&O.isNodeMaterial&&T.build(O,it,Tt),O.onBeforeCompile(Tt,S),oe=xt.acquireProgram(Tt,It),Nt.set(It,oe),Q.uniforms=Tt.uniforms;let Lt=Q.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Lt.clippingPlanes=Bt.uniform),Uh(O,Tt),Q.needsLights=C0(O),Q.lightsStateVersion=Ct,Q.needsLights&&(Lt.ambientLightColor.value=tt.state.ambient,Lt.lightProbe.value=tt.state.probe,Lt.sunLights.value=tt.state.sun,Lt.sunLightShadows.value=tt.state.sunShadow,Lt.directionalLights.value=tt.state.directional,Lt.directionalLightShadows.value=tt.state.directionalShadow,Lt.spotLights.value=tt.state.spot,Lt.spotLightShadows.value=tt.state.spotShadow,Lt.rectAreaLights.value=tt.state.rectArea,Lt.ltc_1.value=tt.state.rectAreaLTC1,Lt.ltc_2.value=tt.state.rectAreaLTC2,Lt.pointLights.value=tt.state.point,Lt.pointLightShadows.value=tt.state.pointShadow,Lt.hemisphereLights.value=tt.state.hemi,Lt.sunShadowMatrix.value=tt.state.sunShadowMatrix,Lt.sunShadowCascade.value=tt.state.sunShadowCascade,Lt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Lt.spotLightMatrix.value=tt.state.spotLightMatrix,Lt.spotLightMap.value=tt.state.spotLightMap,Lt.pointShadowMatrix.value=tt.state.pointShadowMatrix),Q.lightProbeGrid=w.state.lightProbeGridArray.length>0,Q.currentProgram=oe,Q.uniformsList=null,oe}function Oh(O){if(O.uniformsList===null){let Y=O.currentProgram.getUniforms();O.uniformsList=es.seqWithValue(Y.seq,O.uniforms)}return O.uniformsList}function Uh(O,Y){let it=nt.get(O);it.outputColorSpace=Y.outputColorSpace,it.batching=Y.batching,it.batchingColor=Y.batchingColor,it.instancing=Y.instancing,it.instancingColor=Y.instancingColor,it.instancingMorph=Y.instancingMorph,it.skinning=Y.skinning,it.morphTargets=Y.morphTargets,it.morphNormals=Y.morphNormals,it.morphColors=Y.morphColors,it.morphTargetsCount=Y.morphTargetsCount,it.numClippingPlanes=Y.numClippingPlanes,it.numIntersection=Y.numClipIntersection,it.vertexAlphas=Y.vertexAlphas,it.vertexTangents=Y.vertexTangents,it.toneMapping=Y.toneMapping}function E0(O,Y){if(O.length===0)return null;if(O.length===1)return O[0].texture!==null?O[0]:null;v.setFromMatrixPosition(Y.matrixWorld);for(let it=0,Q=O.length;it<Q;it++){let tt=O[it];if(tt.texture!==null&&tt.boundingBox.containsPoint(v))return tt}return null}function A0(O,Y,it,Q,tt){Y.isScene!==!0&&(Y=fn),st.resetTextureUnits();let Et=Y.fog,Ct=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?Y.environment:null,Tt=U===null?S.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:ae.workingColorSpace,It=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Nt=mt.get(Q.envMap||Ct,It),ee=Q.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,oe=!!it.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Lt=!!it.morphAttributes.position,me=!!it.morphAttributes.normal,Ue=!!it.morphAttributes.color,Se=Ln;Q.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Se=S.toneMapping);let ve=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,rn=ve!==void 0?ve.length:0,Rt=nt.get(Q),un=w.state.lights;if(kt===!0&&(re===!0||O!==k)){let Me=O===k&&Q.id===B;Bt.setState(Q,O,Me)}let he=!1;Q.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==un.state.version||Rt.outputColorSpace!==Tt||tt.isBatchedMesh&&Rt.batching===!1||!tt.isBatchedMesh&&Rt.batching===!0||tt.isBatchedMesh&&Rt.batchingColor===!0&&tt._colorsTexture===null||tt.isBatchedMesh&&Rt.batchingColor===!1&&tt._colorsTexture!==null||tt.isInstancedMesh&&Rt.instancing===!1||!tt.isInstancedMesh&&Rt.instancing===!0||tt.isSkinnedMesh&&Rt.skinning===!1||!tt.isSkinnedMesh&&Rt.skinning===!0||tt.isInstancedMesh&&Rt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Rt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Rt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Rt.instancingMorph===!1&&tt.morphTexture!==null||Rt.envMap!==Nt||Q.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Bt.numPlanes||Rt.numIntersection!==Bt.numIntersection)||Rt.vertexAlphas!==ee||Rt.vertexTangents!==oe||Rt.morphTargets!==Lt||Rt.morphNormals!==me||Rt.morphColors!==Ue||Rt.toneMapping!==Se||Rt.morphTargetsCount!==rn||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(he=!0):(he=!0,Rt.__version=Q.version);let yn=Rt.currentProgram;he===!0&&(yn=Ao(Q,Y,tt),T&&Q.isNodeMaterial&&T.onUpdateProgram(Q,yn,Rt));let Vn=!1,vi=!1,Sr=!1,xe=yn.getUniforms(),De=Rt.uniforms;if(F.useProgram(yn.program)&&(Vn=!0,vi=!0,Sr=!0),Q.id!==B&&(B=Q.id,vi=!0),Rt.needsLights){let Me=E0(w.state.lightProbeGridArray,tt);Rt.lightProbeGrid!==Me&&(Rt.lightProbeGrid=Me,vi=!0)}if(Vn||k!==O){F.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),xe.setValue($,"projectionMatrix",O.projectionMatrix),xe.setValue($,"viewMatrix",O.matrixWorldInverse);let _i=xe.map.cameraPosition;_i!==void 0&&_i.setValue($,de.setFromMatrixPosition(O.matrixWorld)),z.logarithmicDepthBuffer&&xe.setValue($,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&xe.setValue($,"isOrthographic",O.isOrthographicCamera===!0),k!==O&&(k=O,vi=!0,Sr=!0)}if(Rt.needsLights&&(un.state.sunShadowMap.length>0&&xe.setValue($,"sunShadowMap",un.state.sunShadowMap,st),un.state.directionalShadowMap.length>0&&xe.setValue($,"directionalShadowMap",un.state.directionalShadowMap,st),un.state.spotShadowMap.length>0&&xe.setValue($,"spotShadowMap",un.state.spotShadowMap,st),un.state.pointShadowMap.length>0&&xe.setValue($,"pointShadowMap",un.state.pointShadowMap,st)),tt.isSkinnedMesh){xe.setOptional($,tt,"bindMatrix"),xe.setOptional($,tt,"bindMatrixInverse");let Me=tt.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),xe.setValue($,"boneTexture",Me.boneTexture,st))}tt.isBatchedMesh&&(xe.setOptional($,tt,"batchingTexture"),xe.setValue($,"batchingTexture",tt._matricesTexture,st),xe.setOptional($,tt,"batchingIdTexture"),xe.setValue($,"batchingIdTexture",tt._indirectTexture,st),xe.setOptional($,tt,"batchingColorTexture"),tt._colorsTexture!==null&&xe.setValue($,"batchingColorTexture",tt._colorsTexture,st));let yi=it.morphAttributes;if((yi.position!==void 0||yi.normal!==void 0||yi.color!==void 0)&&q.update(tt,it,yn),(vi||Rt.receiveShadow!==tt.receiveShadow)&&(Rt.receiveShadow=tt.receiveShadow,xe.setValue($,"receiveShadow",tt.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&Y.environment!==null&&(De.envMapIntensity.value=Y.environmentIntensity),De.dfgLUT!==void 0&&(De.dfgLUT.value=b_()),vi){if(xe.setValue($,"toneMappingExposure",S.toneMappingExposure),Rt.needsLights&&R0(De,Sr),Et&&Q.fog===!0&&Ut.refreshFogUniforms(De,Et),Ut.refreshMaterialUniforms(De,Q,X,H,w.state.transmissionRenderTarget[O.id]),Rt.needsLights&&Rt.lightProbeGrid){let Me=Rt.lightProbeGrid;De.probesSH.value=Me.texture,De.probesMin.value.copy(Me.boundingBox.min),De.probesMax.value.copy(Me.boundingBox.max),De.probesResolution.value.copy(Me.resolution)}es.upload($,Oh(Rt),De,st)}if(Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(es.upload($,Oh(Rt),De,st),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&xe.setValue($,"center",tt.center),xe.setValue($,"modelViewMatrix",tt.modelViewMatrix),xe.setValue($,"normalMatrix",tt.normalMatrix),xe.setValue($,"modelMatrix",tt.matrixWorld),Q.uniformsGroups!==void 0){let Me=Q.uniformsGroups;for(let _i=0,wr=Me.length;_i<wr;_i++){let kh=Me[_i];ft.update(kh,yn),ft.bind(kh,yn)}}return yn}function R0(O,Y){O.ambientLightColor.needsUpdate=Y,O.lightProbe.needsUpdate=Y,O.sunLights.needsUpdate=Y,O.sunLightShadows.needsUpdate=Y,O.directionalLights.needsUpdate=Y,O.directionalLightShadows.needsUpdate=Y,O.pointLights.needsUpdate=Y,O.pointLightShadows.needsUpdate=Y,O.spotLights.needsUpdate=Y,O.spotLightShadows.needsUpdate=Y,O.rectAreaLights.needsUpdate=Y,O.hemisphereLights.needsUpdate=Y}function C0(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(O,Y,it){let Q=nt.get(O);Q.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),nt.get(O.texture).__webglTexture=Y,nt.get(O.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:it,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,Y){let it=nt.get(O);it.__webglFramebuffer=Y,it.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(O,Y=0,it=0){U=O,D=Y,L=it;let Q=null,tt=!1,Et=!1;if(O){let Tt=nt.get(O);if(Tt.__useDefaultFramebuffer!==void 0){F.bindFramebuffer($.FRAMEBUFFER,Tt.__webglFramebuffer),V.copy(O.viewport),j.copy(O.scissor),G=O.scissorTest,F.viewport(V),F.scissor(j),F.setScissorTest(G),B=-1;return}else if(Tt.__webglFramebuffer===void 0)st.setupRenderTarget(O);else if(Tt.__hasExternalTextures)st.rebindTextures(O,nt.get(O.texture).__webglTexture,nt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){let ee=O.depthTexture;if(Tt.__boundDepthTexture!==ee){if(ee!==null&&nt.has(ee)&&(O.width!==ee.image.width||O.height!==ee.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(O)}}let It=O.texture;(It.isData3DTexture||It.isDataArrayTexture||It.isCompressedArrayTexture)&&(Et=!0);let Nt=nt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Nt[Y])?Q=Nt[Y][it]:Q=Nt[Y],tt=!0):O.samples>0&&st.useMultisampledRTT(O)===!1?Q=nt.get(O).__webglMultisampledFramebuffer:Array.isArray(Nt)?Q=Nt[it]:Q=Nt,V.copy(O.viewport),j.copy(O.scissor),G=O.scissorTest}else V.copy(ut).multiplyScalar(X).floor(),j.copy(pt).multiplyScalar(X).floor(),G=gt;if(it!==0&&(Q=C),F.bindFramebuffer($.FRAMEBUFFER,Q)&&F.drawBuffers(O,Q),F.viewport(V),F.scissor(j),F.setScissorTest(G),tt){let Tt=nt.get(O.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Tt.__webglTexture,it)}else if(Et){let Tt=Y;for(let It=0;It<O.textures.length;It++){let Nt=nt.get(O.textures[It]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+It,Nt.__webglTexture,it,Tt)}}else if(O!==null&&it!==0){let Tt=nt.get(O.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Tt.__webglTexture,it)}B=-1};function Bh(O){let Y=nt.get(O);return(Y.__readFormat!==O.format||Y.__readType!==O.type)&&(Y.__readFormat=O.format,Y.__readType=O.type,Y.__formatReadable=z.textureFormatReadable(O.format),Y.__typeReadable=z.textureTypeReadable(O.type)),Y}this.readRenderTargetPixels=function(O,Y,it,Q,tt,Et,Ct,Tt=0){if(!(O&&O.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=nt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It){F.bindFramebuffer($.FRAMEBUFFER,It);try{let Nt=O.textures[Tt],ee=Nt.format,oe=Nt.type;O.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Tt);let Lt=Bh(Nt);if(Lt.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Lt.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=O.width-Q&&it>=0&&it<=O.height-tt&&$.readPixels(Y,it,Q,tt,_t.convert(ee),_t.convert(oe),Et)}finally{let Nt=U!==null?nt.get(U).__webglFramebuffer:null;F.bindFramebuffer($.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(O,Y,it,Q,tt,Et,Ct,Tt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let It=nt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&Ct!==void 0&&(It=It[Ct]),It)if(Y>=0&&Y<=O.width-Q&&it>=0&&it<=O.height-tt){F.bindFramebuffer($.FRAMEBUFFER,It);let Nt=O.textures[Tt],ee=Nt.format,oe=Nt.type;O.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Tt);let Lt=Bh(Nt);if(Lt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Lt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,me),$.bufferData($.PIXEL_PACK_BUFFER,Et.byteLength,$.STREAM_READ),$.readPixels(Y,it,Q,tt,_t.convert(ee),_t.convert(oe),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let Ue=U!==null?nt.get(U).__webglFramebuffer:null;F.bindFramebuffer($.FRAMEBUFFER,Ue);let Se=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await td($,Se,4),$.bindBuffer($.PIXEL_PACK_BUFFER,me),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Et),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(me),$.deleteSync(Se),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,Y=null,it=0){let Q=Math.pow(2,-it),tt=Math.floor(O.image.width*Q),Et=Math.floor(O.image.height*Q),Ct=Y!==null?Y.x:0,Tt=Y!==null?Y.y:0;st.setTexture2D(O,0),$.copyTexSubImage2D($.TEXTURE_2D,it,0,0,Ct,Tt,tt,Et),F.unbindTexture()},this.copyTextureToTexture=function(O,Y,it=null,Q=null,tt=0,Et=0){let Ct,Tt,It,Nt,ee,oe,Lt,me,Ue,Se=O.isCompressedTexture?O.mipmaps[Et]:O.image;if(it!==null)Ct=it.max.x-it.min.x,Tt=it.max.y-it.min.y,It=it.isBox3?it.max.z-it.min.z:1,Nt=it.min.x,ee=it.min.y,oe=it.isBox3?it.min.z:0;else{let De=Math.pow(2,-tt);Ct=Math.floor(Se.width*De),Tt=Math.floor(Se.height*De),O.isDataArrayTexture?It=Se.depth:O.isData3DTexture?It=Math.floor(Se.depth*De):It=1,Nt=0,ee=0,oe=0}Q!==null?(Lt=Q.x,me=Q.y,Ue=Q.z):(Lt=0,me=0,Ue=0);let ve=_t.convert(Y.format),rn=_t.convert(Y.type),Rt;Y.isData3DTexture?(st.setTexture3D(Y,0),Rt=$.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(st.setTexture2DArray(Y,0),Rt=$.TEXTURE_2D_ARRAY):(st.setTexture2D(Y,0),Rt=$.TEXTURE_2D),F.activeTexture($.TEXTURE0),F.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Y.flipY),F.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),F.pixelStorei($.UNPACK_ALIGNMENT,Y.unpackAlignment);let un=F.getParameter($.UNPACK_ROW_LENGTH),he=F.getParameter($.UNPACK_IMAGE_HEIGHT),yn=F.getParameter($.UNPACK_SKIP_PIXELS),Vn=F.getParameter($.UNPACK_SKIP_ROWS),vi=F.getParameter($.UNPACK_SKIP_IMAGES);F.pixelStorei($.UNPACK_ROW_LENGTH,Se.width),F.pixelStorei($.UNPACK_IMAGE_HEIGHT,Se.height),F.pixelStorei($.UNPACK_SKIP_PIXELS,Nt),F.pixelStorei($.UNPACK_SKIP_ROWS,ee),F.pixelStorei($.UNPACK_SKIP_IMAGES,oe);let Sr=O.isDataArrayTexture||O.isData3DTexture,xe=Y.isDataArrayTexture||Y.isData3DTexture;if(O.isDepthTexture){let De=nt.get(O),yi=nt.get(Y),Me=nt.get(De.__renderTarget),_i=nt.get(yi.__renderTarget);F.bindFramebuffer($.READ_FRAMEBUFFER,Me.__webglFramebuffer),F.bindFramebuffer($.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let wr=0;wr<It;wr++)Sr&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nt.get(O).__webglTexture,tt,oe+wr),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,nt.get(Y).__webglTexture,Et,Ue+wr)),$.blitFramebuffer(Nt,ee,Ct,Tt,Lt,me,Ct,Tt,$.DEPTH_BUFFER_BIT,$.NEAREST);F.bindFramebuffer($.READ_FRAMEBUFFER,null),F.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(tt!==0||O.isRenderTargetTexture||nt.has(O)){let De=nt.get(O),yi=nt.get(Y);F.bindFramebuffer($.READ_FRAMEBUFFER,A),F.bindFramebuffer($.DRAW_FRAMEBUFFER,P);for(let Me=0;Me<It;Me++)Sr?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,De.__webglTexture,tt,oe+Me):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,De.__webglTexture,tt),xe?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,yi.__webglTexture,Et,Ue+Me):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,yi.__webglTexture,Et),tt!==0?$.blitFramebuffer(Nt,ee,Ct,Tt,Lt,me,Ct,Tt,$.COLOR_BUFFER_BIT,$.NEAREST):xe?$.copyTexSubImage3D(Rt,Et,Lt,me,Ue+Me,Nt,ee,Ct,Tt):$.copyTexSubImage2D(Rt,Et,Lt,me,Nt,ee,Ct,Tt);F.bindFramebuffer($.READ_FRAMEBUFFER,null),F.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else xe?O.isDataTexture||O.isData3DTexture?$.texSubImage3D(Rt,Et,Lt,me,Ue,Ct,Tt,It,ve,rn,Se.data):Y.isCompressedArrayTexture?$.compressedTexSubImage3D(Rt,Et,Lt,me,Ue,Ct,Tt,It,ve,Se.data):$.texSubImage3D(Rt,Et,Lt,me,Ue,Ct,Tt,It,ve,rn,Se):O.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Et,Lt,me,Ct,Tt,ve,rn,Se.data):O.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Et,Lt,me,Se.width,Se.height,ve,Se.data):$.texSubImage2D($.TEXTURE_2D,Et,Lt,me,Ct,Tt,ve,rn,Se);F.pixelStorei($.UNPACK_ROW_LENGTH,un),F.pixelStorei($.UNPACK_IMAGE_HEIGHT,he),F.pixelStorei($.UNPACK_SKIP_PIXELS,yn),F.pixelStorei($.UNPACK_SKIP_ROWS,Vn),F.pixelStorei($.UNPACK_SKIP_IMAGES,vi),Et===0&&Y.generateMipmaps&&$.generateMipmap(Rt),F.unbindTexture()},this.initRenderTarget=function(O){nt.get(O).__webglFramebuffer===void 0&&st.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?st.setTextureCube(O,0):O.isData3DTexture?st.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?st.setTexture2DArray(O,0):st.setTexture2D(O,0),F.unbindTexture()},this.resetState=function(){D=0,L=0,U=null,F.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};function Bd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function kd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var zd=2.1;function Hu(i){return i.variant==="wall"}function Vd(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var x_=[],Wu=new Map,v_=0;function Qs(i){x_=i,Wu=new Map(i.flatMap(t=>t.items.map(e=>[y_(t.id,e.id),e]))),v_++}function y_(i,t){return`pack:${i}:${t}`}function Gd(i){return i.startsWith("pack:")}function Cl(i){return Gd(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Xu(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}var __={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Hd(i){var t;return(t=Te(i))==null?void 0:t.parts.find(e=>e.screen)}function Te(i){if(!Gd(i))return;let t=Wu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=__[e];return r?Wu.get(`pack:${r}:${n.join(":")}`):void 0}function Ze(i,t){let e=Te(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return Pl;if(t.type==="access_point")return t.variant==="wall"?zd:Math.max(0,i.height-Math.max(.005,t.h));if(Wd.has(t.type))return Math.max(0,i.height-Xd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return Yd(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:di(t)}}var S_={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},wE=Object.keys(S_),to=1;var is={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function On(i){return i==="hedge"||i==="fence"||i==="pergola"}function Yu(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!On(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Ll(i){return[...i.rooms,...Yu(i)]}function w_(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,f)=>r==="x"?c:r==="-x"?-c:r==="z"?f:-f,o=1/0,a=-1/0;for(let[c,f]of i.points){let u=s(c,f);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function T_(i,t,e,n){return hr(i,t)+is[t.type]-eo(i,t,e,n)}var qu=-.2,Il={set:!1,level:qu};function $d(i){let t=(i==null?void 0:i.settings.terrain)??null;Il={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??qu}}function Fl(i,t){return Il.level}function Zd(i){return i.elevation>.3?0:Il.set?Il.level-i.elevation:qu}function hr(i,t){return Zd(i)+(t.offset??0)}function eo(i,t,e,n){return t.type==="pool"?0:w_(t,e,n)}function Kd(i,t,e){let n=(i.outdoor??[]).filter(s=>!On(s.type)&&s.type!=="pool"&&Jt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?T_(i,r,t,e):Zd(i)}function Dl(i,t){return hr(i,t)+(t.above?jd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function E_(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?jd(i):1.5}function $u(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!On(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Jt(n,e.points)))}function Jd(i,t){return!t.above&&!$u(i,t)?Nl(i,t)-.05:Dl(i,t)-E_(t)}function Nl(i,t){return Dl(i,t)-.15}function jd(i){return i.height&&i.height>.3?i.height:1.2}var A_={type:"none",pitch:35,overhang:.4},RE={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...A_}};var Qd=.3;var tp=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Pl=1.75;var Wd=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function Xd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var ep=new Set(["stairs","stairs_u"]);function np(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),f=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:f,rise:e/n}}function ip(i){var t;return tp.has(i)||!!((t=Te(i))!=null&&t.light)}var R_=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var Ol=1.05,Ul=.3;function di(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return Ol;case"wall_socket":return Ul;case"water_heater":return to;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var qd=.04,C_=1.2;function Yd(i,t,e,n=0){var s;let r=0;for(let o of i.furniture)!(R_.has(o.type)||(s=Te(o.type))!=null&&s.surface)||!Jt([t,e],zi(o))||o.type==="worktop"&&n>0&&o.h-qd>=C_&&n<=o.h-qd-.02||(r=Math.max(r,o.h));return r}var M_=new Set([...tp,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var P_=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],I_=["standard","bars","glass_wall"];function fr(i,t){return i.type==="door"?i.style&&P_.includes(i.style)?i.style:t?"front":"interior":i.style&&I_.includes(i.style)?i.style:"standard"}function rp(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let f=s-.5;if(l+c>f){let h=Math.max(0,f)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function sp(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Un(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function jn(i){return Math.abs(Un(i))}function ki(i){let t=Un(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function op(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function ap(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function zi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function hp(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var Ke=(i,t)=>[i[0]-t[0],i[1]-t[1]],Vi=(i,t)=>[i[0]+t[0],i[1]+t[1]],pi=(i,t)=>[i[0]*t,i[1]*t],io=(i,t)=>i[0]*t[0]+i[1]*t[1],rs=(i,t)=>i[0]*t[1]-i[1]*t[0],no=i=>Math.hypot(i[0],i[1]),Qn=i=>{let t=no(i)||1;return[i[0]/t,i[1]/t]},lp=i=>[-i[1],i[0]],cp=i=>[i[1],-i[0]];function mi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let E=0;E<o.length;E++)if(Math.abs(o[E][0]-S[0])<=n&&Math.abs(o[E][1]-S[1])<=n)return E;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let E=S.points;if(E.length<3||Math.abs(Un(E))<1e-6)continue;let T=Un(E)>0,C=E.map(a);for(let A=0;A<E.length;A++){let P=C[A],D=C[(A+1)%E.length];P!==D&&l.push(T?{u:P,v:D,room:S.id,edge:A,forward:!0}:{u:D,v:P,room:S.id,edge:A,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),f=new Set;for(let S of i){let E=S.points;E.length<3||(S.wall_splits??[]).forEach((T,C)=>{if(!T||C>=E.length)return;let A=E[C],P=Ke(E[(C+1)%E.length],A),D=no(P);for(let L of T)L>n&&L<D-n&&f.add(a(Vi(A,pi(P,L/D))))})}let u=[];for(let S of l){let E=o[S.u],T=o[S.v],C=Ke(T,E),A=no(C),P=pi(C,1/A),D=[];for(let U=0;U<o.length;U++){if(U===S.u||U===S.v)continue;let B=Ke(o[U],E),k=io(B,P);k<=n||k>=A-n||Math.abs(rs(P,B))<=n&&D.push({t:k,id:U})}D.sort((U,B)=>U.t-B.t);let L=[{t:0,id:S.u},...D,{t:A,id:S.v}];for(let U=0;U+1<L.length;U++){let B=L[U],k=L[U+1],V=S.forward?B.t:A-k.t,j=S.forward?k.t:A-B.t;u.push({u:B.id,v:k.id,room:S.room,edge:S.edge,t0:V,t1:j})}}let h=new Map;for(let S of u){let E=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,T=h.get(E);T||h.set(E,T=[]),T.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),g=new Map;for(let S of u){let E=`${S.room}:${S.edge}`;g.set(E,[...g.get(E)??[],S.t0].sort((T,C)=>T-C))}let b=S=>{var C,A;let E=(A=(C=i.find(P=>P.id===S.room))==null?void 0:C.wall_heights)==null?void 0:A[S.edge];if(!Array.isArray(E))return E;let T=g.get(`${S.room}:${S.edge}`)??[];return E[T.indexOf(S.t0)]??null},m=S=>{let E=S.map(b).filter(C=>typeof C=="number"&&C>0);if(E.length)return Math.min(...E);let T=S.map(C=>{var A;return(A=i.find(P=>P.id===C.room))==null?void 0:A.ceiling_height});return T.every(C=>typeof C=="number"&&C>0)?Math.max(...T):void 0},p=S=>{let E=S.map(T=>{var C,A;return(A=(C=i.find(P=>P.id===T.room))==null?void 0:C.wall_thickness)==null?void 0:A[T.edge]}).filter(T=>typeof T=="number"&&T>0);return E.length?Math.max(...E):void 0},x=S=>{var E;for(let T of S){let C=i.find(L=>L.id===T.room),A=(E=C==null?void 0:C.wall_slopes)==null?void 0:E[T.edge];if(!C||!A)continue;let P=C.points[T.edge],D=C.points[(T.edge+1)%C.points.length];return{p:[P[0],P[1]],q:[D[0],D[1]],h0:Math.max(.05,A[0]),h1:Math.max(.05,A[1])}}},y=S=>S.some(E=>b(E)===0),v=S=>{let E=x(S);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:m(S)}},M=[],w=[];for(let S of h.values()){let E=S[0],T=S.find(C=>C!==E&&C.u===E.v&&C.v===E.u&&C.room!==E.room);for(let C of S)C!==E&&C!==T&&C.room!==E.room&&r.push(`overlap:${E.room}:${C.room}`);if(y(T?[E,T]:[E])){T&&M.push([E.room,T.room]);continue}if(T){let C=p([E,T])??t.interior;w.push({a:E.u,b:E.v,left:C/2,right:C/2,exterior:!1,roomLeft:E.room,roomRight:T.room,sources:[d(E),d(T)],...v([E,T])})}else w.push({a:E.u,b:E.v,left:0,right:p([E])??t.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[d(E)],...v([E])})}let I=S=>Qn(Ke(o[S.b],o[S.a]));for(let S of w){if(S.exterior||S.free)continue;let E=new Set;for(let C of[S.a,S.b])for(let A of w)!A.exterior||A.free||A.a!==C&&A.b!==C||Math.abs(rs(I(S),I(A)))>1e-6||(A.roomLeft===S.roomLeft?E.add("left"):A.roomLeft===S.roomRight&&E.add("right"));if(E.size!==1)continue;let T=S.left+S.right;E.has("left")?(S.left=0,S.right=T):(S.left=T,S.right=0)}s.forEach((S,E)=>{var U;let[T,C]=c[E];if(T===C)return;let A=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],P=((U=i.find(B=>B.points.length>=3&&Jt(A,B.points)))==null?void 0:U.id)??null,D=(S.thickness??t.interior)/2,L=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:T,b:C,left:D,right:D,exterior:!1,roomLeft:P,roomRight:P,sources:[],height:L})}),w=F_(w,o,f);let _=N_(w,o);return{walls:w.map((S,E)=>{let T=o[S.a],C=o[S.b],A=_.get(`${E}:a`),P=_.get(`${E}:b`),D=O_([A.right,P.left,C,P.right,A.left,T],1e-6);return{id:L_(T,C),a:[T[0],T[1]],b:[C[0],C[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:D,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function L_(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function up(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function F_(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=up(l)),c.a!==o&&(c=up(c)),l.a===c.b)continue;let f=Qn(Ke(t[l.b],t[l.a])),u=Qn(Ke(t[c.b],t[c.a]));if(Math.abs(rs(f,u))>1e-6||io(f,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:D_(l.sources,c.sources)},d=n.filter((g,b)=>b!==a[0]&&b!==a[1]);d.push(h),n.length=0,n.push(...d),r=!0;break}}return n}function D_(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function N_(i,t){let e=new Map;i.forEach((r,s)=>{let o=Qn(Ke(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:pi(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let f=e.get(l);f||e.set(l,f=[]),f.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,f)=>c.angle-f.angle);let a=c=>({left:Vi(o,pi(lp(c.d),c.left)),right:Vi(o,pi(cp(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let f=s[c],u=s[(c+1)%s.length],h=Vi(o,pi(lp(f.d),f.left)),d=Vi(o,pi(cp(u.d),u.right)),g=rs(f.d,u.d);if(Math.abs(g)<1e-4)continue;let b=rs(Ke(d,h),u.d)/g,m=Vi(h,pi(f.d,b));no(Ke(m,o))>l||(n.get(f.key).left=m,n.get(u.key).right=m)}}return n}function O_(i,t){let e=i.filter((r,s)=>no(Ke(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=Ke(o,s),c=Ke(a,o);if(Math.abs(rs(Qn(l),Qn(c)))<1e-7&&io(l,c)>0){e=e.filter((f,u)=>u!==r),n=!0;break}}}return e}function Zu(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Qn(Ke(r,n));return Vi(n,pi(s,e))}function ro(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Qn(Ke(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Vi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function so(i,t,e){if(!t.wall)return U_(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Zu(e.room,0,t.offset);return{wall:n,s:io(Ke(r,n.a),Qn(Ke(n.b,n.a)))}}function U_(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Zu(t,e,n);return{wall:r,s:io(Ke(o,r.a),Qn(Ke(r.b,r.a)))}}return null}var ao=Math.PI/180;function ti(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function wn(i){let t=ti(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ao),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ao);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=bp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var B_=.14;function dp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function pp(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!Jt([t,e],s.points))continue;let[f,u]=Gi(s,t,e),h=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),b=((h?null:lo(os(s,{u0:d,u1:d,a:d,b:d}),f,u))??wn(s).y(u))-B_;n=n===null?b:Math.max(n,b)}return n}function Bl(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=fp([a[0]-o[0],a[1]-o[1]]),f=fp([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],h=[f[1]*n,-f[0]*n],d=u[0]+h[0],g=u[1]+h[1],b=Math.hypot(d,g);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+g*u[1])/b,p=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/b*t*p,a[1]+g/b*t*p])}return r}function fp(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function mp(i,t){if(i.points&&i.points.length>=3)return Bl(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function gp(i,t,e,n){let r=mi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])o.set(s(h),[...o.get(s(h))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],d=u.b;for(;;){let g=(o.get(s(d))??[]).find(b=>!l.has(b));if(!g||(l.add(g),d=s(g.a)===s(d)?g.b:g.a,s(d)===s(h[0])))break;h.push(d)}h.length>=3&&s(d)===s(h[0])&&(!c||Math.abs(jn(h))>Math.abs(jn(c)))&&(c=h)}if(!c)return null;let f=[];for(let u=0;u<c.length;u++){let h=c[(u+c.length-1)%c.length],d=c[u],g=c[(u+1)%c.length],b=(d[0]-h[0])*(g[1]-d[1])-(d[1]-h[1])*(g[0]-d[0]);Math.abs(b)>1e-6&&f.push(d)}return f.length>=3?Bl(f,e):null}var oo=Math.tan(30*ao);function bp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+oo*(i-o+s))/(2*oo))),f=a+(c-s)*oo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:f,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*oo:h<=i-o?l+(i-o-h)*oo:e+(i-h)*r}}function os(i,t){let e=ti(i),n=wn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(x,y)=>[x,y,n.y(y)],f=c(a,-s),u=c(l,-s),h=c(l,r+o),d=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*ao),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*ao);if(i.shape==="pent"){let x=[f,u,h,d];return{faces:[x],rim:x,ridges:[[h,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let x=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[e.u0+x,n.vr,n.rh],v=[e.u1-x,n.vr,n.rh],M=i.shape==="pyramid"?[[f,u,y],[u,h,y],[h,d,y],[d,f,y]]:[[f,u,v,y],[y,v,h,d],[d,f,y],[u,h,v]],w=i.shape==="pyramid"?[[f,y],[d,y],[u,y],[h,y]]:[[y,v],[f,y],[d,y],[u,v],[h,v]];return{faces:M,rim:[f,u,h,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let x=Math.min(n.y(0),n.y(r)),y=x+(n.rh-x)*.55,v=g>1e-6?Math.min(n.vr,(y-i.eave_a)/g):n.vr,M=b>1e-6?Math.max(n.vr,r-(y-i.eave_b)/b):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,g)),I=[e.u0+w,n.vr,n.rh],_=[e.u1-w,n.vr,n.rh],R=[a,v,y],S=[a,M,y],E=[l,v,y],T=[l,M,y];return{faces:[[f,u,E,_,I,R],[I,_,T,h,d,S],[S,R,I],[E,T,_]],rim:[f,u,E,T,h,d,S,R],ridges:[[I,_],[R,I],[S,I],[E,_],[T,_]],gable:[[0,n.y(0)],[v,y],[M,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let x=bp(r,i.eave_a,i.eave_b,g,b),y=[a,x.vla,x.yla],v=[l,x.vla,x.yla],M=[a,r-x.vlb,x.ylb],w=[l,r-x.vlb,x.ylb],I=[a,x.vr,x.rh],_=[l,x.vr,x.rh];return{faces:[[f,u,v,y],[y,v,_,I],[I,_,w,M],[M,w,h,d]],rim:[f,u,v,_,w,h,d,M,I,y],ridges:[[I,_],[y,v],[M,w]],gable:[[0,n.y(0)],[x.vla,x.yla],[x.vr,x.rh],[r-x.vlb,x.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[f,u,p,m],[m,p,h,d]],rim:[f,u,p,h,d,m],ridges:[[m,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function lo(i,t,e){let n=null;for(let r of i.faces){if(!Jt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],f=o[1]-s[1],u=a[0]-s[0],h=a[2]-s[2],d=a[1]-s[1],g=c*d-f*h,b=f*u-l*d,m=l*h-c*u;if(Math.abs(b)<1e-9)continue;let p=s[2]-(g*(t-s[0])+m*(e-s[1]))/b;n=n===null?p:Math.min(n,p)}return n}function Gi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function k_(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function kl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=k_(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Ku(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=ti(t),n=wn(t).rh,r=os(i,{u0:0,u1:0,a:0,b:0}),s=wn(i),o=g=>{let[b,m]=e.at(g,e.w/2),[p,x]=Gi(i,b,m);return lo(r,p,x)??s.y(x)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,f=a?1:-1,u=Math.abs(c-l),h=c;for(let g=.5;g<u;g+=.05)if(o(l+f*g)>=n-.02){h=l+f*g;break}if(Math.abs(h-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=h:d.x0=h:c===e.u1?d.z1=h:d.z0=h,d}function xp(i,t){let e=Ku(i,t),n=ti(e),r=wn(e),s=os(i,{u0:0,u1:0,a:0,b:0}),o=wn(i),a=h=>{let[d,g]=n.at(h,n.w/2),[b,m]=Gi(i,d,g);return lo(s,b,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,f=[],u=Math.max(1,Math.ceil(c/.15));for(let h=0;h<u;h++){let d=c*h/u,g=c*(h+1)/u,b=l?n.u0+d:n.u1-d,m=l?n.u0+g:n.u1-g,p=a(m),x=1/0,y=-1/0;for(let _=0;_<=40;_++){let R=n.w*_/40;r.y(R)>p+.02&&(x=Math.min(x,R),y=Math.max(y,R))}if(!(y-x>.05))continue;let v=n.at(b,x),M=n.at(m,y),w=Gi(i,v[0],v[1]),I=Gi(i,M[0],M[1]);f.push({u0:Math.min(w[0],I[0]),u1:Math.max(w[0],I[0]),v0:Math.min(w[1],I[1]),v1:Math.max(w[1],I[1])})}return f}function ss(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),f=r(l);if(c&&s.push(a),c!==f){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function vp(i,t){let e=ss(i,0,t.u0,!0),n=ss(i,0,t.u1,!1),r=ss(ss(i,0,t.u0,!1),0,t.u1,!0),s=ss(r,1,t.v0,!0),o=ss(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(jn(a.map(l=>[l[0],l[1]])))>1e-6)}function zl(i,t,e){let n=ti(t),r=i.floors.flatMap(c=>c.rooms.filter(f=>f.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(f=>r.some(u=>Jt(f,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function yp(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function z_(i){return wn(i).rh}function _p(i,t,e){var l;let n=i.settings.roof.sections??[],r=n.filter(c=>e.includes(c.id)).map(c=>kl(n,c)??c);if(!r.length)return t.id;let s=Math.max(...r.map(c=>z_(c))),o=c=>c.rooms.some(f=>f.points.length>=3&&r.some(u=>{let[h,d]=f.points.reduce((g,b)=>[g[0]+b[0]/f.points.length,g[1]+b[1]/f.points.length],[0,0]);return h>=Math.min(u.x0,u.x1)&&h<=Math.max(u.x0,u.x1)&&d>=Math.min(u.z0,u.z1)&&d<=Math.max(u.z0,u.z1)}));return((l=i.floors.filter(c=>c.elevation>=t.elevation&&c.elevation<s-.3&&o(c)).sort((c,f)=>f.elevation-c.elevation)[0])==null?void 0:l.id)??t.id}function as(i,t){let e=Un(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let f=l[c],u=l[(c+1)%l.length],h=a(f),d=a(u);if(h>=0&&n.push(f),h>=0!=d>=0){let g=h/(h-d);n.push([f[0]+(u[0]-f[0])*g,f[1]+(u[1]-f[1])*g])}}}return n}function Mp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Bn=1e-4;function Ju(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function Sp(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Bn&&a<1-Bn&&l>-Bn&&l<1+Bn?a:null}function ju(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Bn||o>=1-Bn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Bn?o:null}function V_(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(Sp(n,r,o,a)!==null||ju(o,n,r)!==null||ju(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Bn)return!0}}return Jt(i[0],t)||Jt(t[0],i)}function G_(i){let t=i.map(s=>Ju(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],f=[0,1];t.forEach((u,h)=>{if(h!==o)for(let d=0;d<u.length;d++){let g=u[d],b=u[(d+1)%u.length],m=Sp(l,c,g,b)??ju(g,l,c);m!==null&&f.push(m)}}),f.sort((u,h)=>u-h);for(let u=1;u<f.length;u++){if(f[u]-f[u-1]<Bn)continue;let h=[l[0]+(c[0]-l[0])*f[u-1],l[1]+(c[1]-l[1])*f[u-1]],d=[l[0]+(c[0]-l[0])*f[u],l[1]+(c[1]-l[1])*f[u]],g=Math.hypot(d[0]-h[0],d[1]-h[1]),b=[(h[0]+d[0])/2+(d[1]-h[1])/g*.001,(h[1]+d[1])/2-(d[0]-h[0])/g*.001];t.some((m,p)=>p!==o&&Jt(b,m))||e.some(([m,p])=>Math.hypot(m[0]-h[0],m[1]-h[1])<Bn&&Math.hypot(p[0]-d[0],p[1]-d[1])<Bn)||e.push([h,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([f],u)=>!r.has(u)&&Math.hypot(f[0]-a[0],f[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Ju(o)>1e-6&&n.push(o)}return n}function wp(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&V_(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:G_(s))}function H_(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function Tp(i,t,e=.03){return i.every(n=>Jt(n,t)||t.some((r,s)=>H_(n,r,t[(s+1)%t.length])<=e))}function Ep(i,t){let e=Ju(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Qu(i){let t=(i.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var Ap=i=>i&&i!=="none"?i:null;function W_(i){let t=(i.socket_outlets??[]).slice(0,4).map(e=>({entity:Ap(e==null?void 0:e.entity),power:Ap(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function Vl(i){return i.type==="wall_socket"?W_(i).length:Qu(i).length}function Rp(i,t,e){let n=Vl(i),r=i.rotation*Math.PI/180,s=((t-i.x)*Math.cos(r)+(e-i.z)*Math.sin(r))*(i.mirror?-1:1),o=Math.max(.05,i.w);return Math.max(0,Math.min(n-1,Math.floor((s+o/2)/o*n)))}var X_=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Y_=["wall","pole","pillar","parcel","bank"];function Pp(i){return X_.includes(i.variant??"")?i.variant:"bin240"}function Ip(i){return Y_.includes(i.variant??"")?i.variant:"wall"}var Ne=["#3a3f47","#3a3f47"],dr=["#23262b","#23262b"],kn=["#5a3b25","#5a3b25"],Ee=["#1f4fa8","#1f4fa8"],Hi=["#e3b616","#e3b616"],le=["#2f7d3b","#2f7d3b"],Cp={default:{rest:Ne,bio:kn,paper:Ee,plastic:Hi,glass:le,garden:le,recycling:Hi,other:Ne},DE:{rest:dr,bio:kn,paper:Ee,plastic:Hi,glass:le,garden:le,recycling:Hi},AT:{rest:Ne,bio:kn,paper:[Ne[0],"#c0262d"],plastic:Hi,glass:le,garden:le},CH:{rest:["#d8d8d8","#d8d8d8"],bio:le,paper:Ee,plastic:Ne,glass:le,garden:le},NL:{rest:Ne,bio:le,paper:Ee,plastic:["#3a3f47","#e57a1f"],glass:le,garden:le},BE:{rest:Ne,bio:le,paper:Ee,plastic:Ee,glass:le,garden:le},GB:{rest:dr,bio:["#3a3f47","#5a3b25"],paper:Ee,plastic:Ee,glass:dr,garden:kn,recycling:Ee},US:{rest:dr,bio:le,paper:Ee,plastic:Ee,glass:Ee,garden:le,recycling:Ee},CA:{rest:dr,bio:le,paper:Ee,plastic:Ee,glass:Ee,garden:le,recycling:Ee},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ne,bio:kn,paper:[Ne[0],"#e3b616"],plastic:[Ne[0],"#e3b616"],recycling:[Ne[0],"#e3b616"],glass:le,garden:le},IT:{rest:Ne,bio:kn,paper:Ee,plastic:Hi,glass:le,garden:le},ES:{rest:Ne,bio:kn,paper:Ee,plastic:Hi,glass:le,garden:le},PT:{rest:Ne,bio:kn,paper:Ee,plastic:Hi,glass:le,garden:le},DK:{rest:dr,bio:le,paper:Ee,plastic:Ne,glass:le,garden:le},SE:{rest:dr,bio:kn,paper:Ee,plastic:Ne,glass:le,garden:le},NO:{rest:Ne,bio:kn,paper:Ee,plastic:Ne,glass:le,garden:le},FI:{rest:Ne,bio:kn,paper:Ee,plastic:Ne,glass:le,garden:le}},Lp="DE";function Fp(){return Lp}function q_(i,t){var e;return((e=Cp[t])==null?void 0:e[i])??Cp.default[i]??Ne}function Dp(i,t=Lp){let e=q_(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var pr=Dt(3662079,.95),th=Dt(3662079,1),Wi=Dt(5995775,.34),Np=Dt(5995775,.22),Gl=[-.55,.83],Yt=-1,Hl=16,mr=32,Op=48,eh=64,te=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Yt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Kt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),this.uv&&t.setAttribute("uv",new Gt(this.uv,2)),this.tile&&t.setAttribute("tile",new Gt(this.tile,2)),t.computeBoundingSphere(),t}},Le=class{p=[];c=[];f=[];seg(t,e,n=pr,r=Yt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Yt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Yt),this.seg(c,a,n,s)}geometry(){let t=new Kt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),t}};function Up(i,t,e,n){let s=i.uv?2:0,o=(u,h)=>{let d=u*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,h,d)=>({p:u.p.map((g,b)=>g+(h.p[b]-g)*d),c:u.c.map((g,b)=>g+(h.c[b]-g)*d),uv:u.uv&&h.uv?u.uv.map((g,b)=>g+(h.uv[b]-g)*d):null,tile:u.tile}),l=(u,h,d)=>{for(let g=0;g<3;g++){let b=u*3+g;for(let m=0;m<3;m++)i.p[b*3+m]=h[g].p[m],i.c[b*3+m]=h[g].c[m];if(i.uv&&h[g].uv)for(let m=0;m<s;m++)i.uv[b*2+m]=h[g].uv[m];if(i.tile&&h[g].tile)for(let m=0;m<2;m++)i.tile[b*2+m]=h[g].tile[m];i.f[b]=d}},c=(u,h)=>{let d=i.p.length/9;for(let g of u)i.p.push(...g.p),i.c.push(...g.c),i.f.push(h),i.uv&&i.uv.push(...g.uv??[.5,.5]),i.tile&&i.tile.push(...g.tile??[0,1]);return d},f=i.p.length/9;for(let u=t;u<f;u++){let h=[o(u,0),o(u,1),o(u,2)],d=h.map(_=>_.p[1]>e+1e-6),g=h.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],m=(_,R)=>a(_,R,(e-_.p[1])/(R.p[1]-_.p[1])),p=d.filter(Boolean).length,x=p===1?d.indexOf(!0):d.indexOf(!1),y=h[x],v=h[(x+1)%3],M=h[(x+2)%3],w=m(y,v),I=m(M,y);p===1?(l(u,[y,w,I],n),c([w,v,M],b),c([w,M,I],b)):(l(u,[y,w,I],b),c([w,v,M],n),c([w,M,I],n))}}function Bp(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let f=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*f,e,l[2]+(c[2]-l[2])*f];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let h=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...h,...h),i.f.push(n,n)}}var se=Math.PI/180;function Dt(i,t){let e=new Z(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function $_(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function ei(i,t=[]){let e=i.map(([n,r])=>new ie(n,r));return Ds.triangulateShape(e,t.map(n=>n.map(([r,s])=>new ie(r,s))))}function kp(i,t,e,n,r,s,o){let a=new Z(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],b=t[(d+1)%4],m=e[d],p=e[(d+1)%4],x=b[0]-g[0],y=b[1]-g[1],v=Math.hypot(x,y);if(v<1e-6)continue;let w=.8+.28*((y/v*Gl[0]-x/v*Gl[1]+1)/2),I=(m[0]+p[0]-g[0]-b[0])/2*(-y/v)+(m[1]+p[1]-g[1]-b[1])/2*(x/v),_=Math.max(0,Math.min(1,I/Math.max(1e-6,Math.hypot(I,r-n)))),R=Dt(s,l(n)*w).lerp(a,_),S=Dt(s,l(r)*w).lerp(a,_);i.tri([g[0],n,g[1]],[m[0],r,m[1]],[p[0],r,p[1]],R,S,S),i.tri([g[0],n,g[1]],[p[0],r,p[1]],[b[0],n,b[1]],R,S,R)}let[c,f,u,h]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[f[0],r,f[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a))}function zp(i,t,e,n,r,s,o,a,l,c){let f=new Z(l),u=[];for(let m=0;m<c;m++){let p=m/c*Math.PI*2;u.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let h=(m,p)=>{let x=t(m,u[p%c].s);return[x[0],u[p%c].y,x[1]]},d=t(e,r),g=t(n,r),b=(m,p,x,y,v)=>{let M=(p[1]-m[1])*(x[2]-m[2])-(p[2]-m[2])*(x[1]-m[1]),w=(p[2]-m[2])*(x[0]-m[0])-(p[0]-m[0])*(x[2]-m[2]),I=(p[0]-m[0])*(x[1]-m[1])-(p[1]-m[1])*(x[0]-m[0]);M*y[0]+w*y[1]+I*y[2]<0?i.tri(m,x,p,v):i.tri(m,p,x,v)};for(let m=0;m<c;m++){let p=(m+.5)/c*Math.PI*2,x=Dt(a,.62+.4*Math.max(0,Math.cos(p))),y=t((e+n)/2,r+Math.sin(p)*o),v=t((e+n)/2,r),M=[y[0]-v[0],Math.cos(p)*o,y[1]-v[1]];b(h(e,m),h(n,m+1),h(n,m),M,x),b(h(e,m),h(e,m+1),h(n,m+1),M,x)}for(let[m,p,x]of[[e,g,d],[n,d,g]]){let y=t(m,r),v=[y[0],s,y[1]],M=[x[0]-p[0],0,x[1]-p[1]];for(let w=0;w<c;w++)b(v,h(m,w),h(m,w+1),M,f)}}function Ae(i,t,e,n,r,s,o={}){var g;let a=typeof n=="number"?()=>n:b=>Math.max(e+.002,n(b[0],b[1])),l=o.aoFrom??e,c=o.fold??Yt,f=b=>.5+.5*Math.min(1,Math.max(0,(b-l)/1.6)),u=(o.holes??[]).map(b=>$_(b)>0?[...b].reverse():b),h=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:ei(t,u);if(o.topFace!==!1){let b=new Z(s);for(let[m,p,x]of d){let y=h[m],v=h[p],M=h[x];i.tri([y[0],a(y),y[1]],[M[0],a(M),M[1]],[v[0],a(v),v[1]],b,b,b,void 0,o.topFold??c)}}if(o.bottom){let b=Dt(r,.55);for(let[m,p,x]of d){let y=h[m],v=h[p],M=h[x];i.tri([y[0],e,y[1]],[v[0],e,v[1]],[M[0],e,M[1]],b,b,b,void 0,c)}}for(let b of[t,...u])for(let m=0;m<b.length;m++){let p=b[m],x=b[(m+1)%b.length],y=x[0]-p[0],v=x[1]-p[1],M=Math.hypot(y,v);if(M<1e-6||(g=o.skipSide)!=null&&g.call(o,p,x))continue;let I=.8+.28*((v/M*Gl[0]-y/M*Gl[1]+1)/2),_=a(p),R=a(x),S=Dt(r,f(e)*I),E=Dt(r,f(_)*I),T=Dt(r,f(R)*I);i.tri([p[0],e,p[1]],[p[0],_,p[1]],[x[0],R,x[1]],S,E,T,void 0,c),i.tri([p[0],e,p[1]],[x[0],R,x[1]],[x[0],e,x[1]],S,T,S,void 0,c)}}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},dt=Dt(5995775,.3),Pt=Dt(5995775,.17),qt=Dt(3662079,.45),gr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Yp(n)}rotated(t,e,n){let r=n*se,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let f=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ae(this.buf,nh(f),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(f,n,r,c)}wedge(t,e,n,r,s,o,a,l,c=l,f=l){if(e-t<1e-4||r-n<1e-4||a-Math.min(s,o)<1e-4)return;let u=(m,p,x)=>{let y=this.tf(m,p);return[y[0],x,y[1]]},h=m=>m===n?s:o,d=u((t+e)/2,(n+r)/2,(a+(s+o)/2)/2),g=(m,p)=>{let x=[0,1,2].map(S=>m.reduce((E,T)=>E+T[S],0)/m.length),y=[x[0]-d[0],x[1]-d[1],x[2]-d[2]],[v,M,w]=[m[0],m[1],m[2]],I=[(M[1]-v[1])*(w[2]-v[2])-(M[2]-v[2])*(w[1]-v[1]),(M[2]-v[2])*(w[0]-v[0])-(M[0]-v[0])*(w[2]-v[2]),(M[0]-v[0])*(w[1]-v[1])-(M[1]-v[1])*(w[0]-v[0])],R=I[0]*y[0]+I[1]*y[1]+I[2]*y[2]<0?[...m].reverse():m;this.buf.tri(R[0],R[1],R[2],p),this.buf.tri(R[0],R[2],R[3],p)},b=Dt(l,1);g([u(t,n,a),u(e,n,a),u(e,r,a),u(t,r,a)],Dt(c,1)),g([u(t,n,h(n)),u(t,r,h(r)),u(e,r,h(r)),u(e,n,h(n))],Dt(f,.72)),g([u(t,r,h(r)),u(t,r,a),u(e,r,a),u(e,r,h(r))],b),g([u(t,n,h(n)),u(e,n,h(n)),u(e,n,a),u(t,n,a)],b),g([u(t,n,h(n)),u(t,n,a),u(t,r,a),u(t,r,h(r))],Dt(l,.86)),g([u(e,n,h(n)),u(e,r,h(r)),u(e,r,a),u(e,n,a)],Dt(l,.86))}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==nh(l)&&(l.reverse(),c.reverse()),kp(this.buf,l,c,n,r,s,o),a)for(let f=0;f<4;f++)this.line(c[f],c[(f+1)%4],r,r,a),this.line(l[f],c[f],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,f=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,f);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,f),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,f=12,u=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let d=(r+s)/2,g=t==="x"?e:n,b=t==="x"?n:e,m=(p,x)=>t==="x"?this.tf(p,x):this.tf(x,p);if(zp(this.buf,m,g-o/2,g+o/2,b,d,h,l,c,f),u)for(let p of[g-o/2,g+o/2])for(let x=0;x<f;x++){let y=x/f*Math.PI*2,v=(x+1)/f*Math.PI*2;this.line(m(p,b+Math.sin(y)*h),m(p,b+Math.sin(v)*h),d+Math.cos(y)*h,d+Math.cos(v)*h,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let f=[];for(let u=0;u<l;u++){let h=u/l*Math.PI*2;f.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(Ae(this.buf,nh(f),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(f[u],f[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=dt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Yt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Yp(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function nh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function br(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let f of[-1,1])for(let u of[-1,1]){let h=f*l,d=u*c;a?i.loft([h-r*.3,h+r*.3,d-r*.3,d+r*.3],[h-r/2,h+r/2,d-r/2,d+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,d-r/2,d+r/2,o)}}function co(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let f=1;f<o;f++){let u=t+c*f;i.seg(u,n,s,u,r,s,Pt)}for(let f=0;f<o;f++){let u=t+c*(f+.5),h=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),h,s+.012,u+Math.min(.1,c/4),h,s+.012,qt);else{let d=o>1?u+(f%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,h-.08,s+.012,d,h+.08,s+.012,qt)}}}function Vp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),f=n*.5,u=Math.min(.24,e*.28);br(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,f-.08,a+.02,l,N.fabric,N.fabricTop,.04,dt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,N.fabric,N.fabricTop,dt),i.pad(s,s+c,f-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt),i.pad(o-c,o,f-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt);let d=(o-c-(s+c))/r;for(let g=0;g<r;g++){let b=s+c+d*g+.02,m=b+d-.04;i.pad(b,m,f-.08,f+.05,a+u+.02,l-.06,N.cushion,N.cushion,.04),i.loft([b+.01,m-.01,a+u*.55,a+u+.14],[b+.03,m-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,N.cushion)}}function Gp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),f=Math.min(.24,c*.28),u=Math.min(.2,c*.24),h=n*.5,d=n*.72,g=r?[-1,1]:[-1],b=(_,R)=>i.loft([_-.015,_+.015,R-.015,R+.015],[_-.025,_+.025,R-.025,R+.025],0,.07,N.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let _ of g)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(s,o,.07,h-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,dt);for(let _ of g){let[R,S]=_<0?[s+.02,s+c]:[o-c,o-.02];i.pad(R,S,.07,h-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,dt)}i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],h-.08,n,N.fabric,N.fabricTop,dt);for(let _ of g)_<0?i.loft([s,s+f,a+f,l],[s,s+f*.5,a+f,l-.01],h-.08,n,N.fabric,N.fabricTop,dt):i.loft([o-f,o,a+f,l],[o-f*.5,o,a+f,l-.01],h-.08,n,N.fabric,N.fabricTop,dt);for(let _ of g){let[R,S]=_<0?[s+f,s+c]:[o-c,o-f];i.pad(R,S,h-.08,d,l-u,l,N.fabric,N.fabricTop,.04,dt)}r||i.pad(o-u,o,h-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,dt);let m=s+f,p=r?o-f:o-u,x=Math.max(1,Math.round((p-m)/.62)),y=(p-m)/x;for(let _=0;_<x;_++){let R=m+y*_+.02,S=R+y-.04;i.pad(R,S,h-.08,h+.05,a+f+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([R+.01,S-.01,a+f*.55,a+f+.14],[R+.03,S-.03,a+f*.4,a+f*.4+.06],h+.03,n*.93,N.cushion)}let v=a+c,M=l-u;if(M-v<.2)return;let w=Math.max(1,Math.round((M-v)/.62)),I=(M-v)/w;for(let _ of g)for(let R=0;R<w;R++){let S=v+I*R+.02,E=S+I-.04;_<0?(i.pad(s+f+.02,s+c-.04,h-.08,h+.05,S,E,N.cushion,N.cushion,.04),i.loft([s+f*.55,s+f+.14,S+.01,E-.01],[s+f*.4,s+f*.4+.06,S+.03,E-.03],h+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-f-.02,h-.08,h+.05,S,E,N.cushion,N.cushion,.04),i.loft([o-f-.14,o-f*.55,S+.01,E-.01],[o-f*.4-.06,o-f*.4,S+.03,E-.03],h+.03,n*.93,N.cushion))}}function Z_(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);br(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,dt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,dt),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Pt);let c=l+.2,f=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,f,s-.01,N.cushion,N.fabricTop,.025,Pt),i.lyingCyl("x",0,f+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let u=t>1.2?2:1,h=(t-.2)/u;for(let d=0;d<u;d++){let g=o+.1+h*d,b=r+.12,m=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+h-.03-p,b+p*.5,b+m-p*.5],[g+.03,g+h-.03,b,b+m],c,c+.06,N.whiteTop),i.loft([g+.03,g+h-.03,b,b+m],[g+.03+p,g+h-.03-p,b+p*.5,b+m-p*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Pt)}}function K_(i,t,e,n){let r=Math.min(.46,n*.52);br(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,dt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,dt)}function J_(i,t,e,n){br(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function j_(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,dt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Pt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function Xi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),co(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function Q_(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Pt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let f=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+f,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=f+.006,c++}}}}function t1(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Xi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function e1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,dt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Pt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,qt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,qt)}var Wl=(i,t)=>Dt(parseInt(i.slice(1),16),t).getHex(),Xl=!1;function qp(i){Xl=i}function n1(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function i1(i,t,e,n,r,s){let o=h=>{let d=Math.max(...new Z(h).toArray());return Wl(h,d>.05?Math.max(1,.62/d):1)},a=Xl?o(s[0]):Wl(s[0],.55),l=Xl?o(s[1]):Wl(s[1],.8),c=Wl(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Pt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Pt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,dt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Pt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let h=Math.min(t,e)*.32;i.cyl(0,0,h,0,n*.9,a,a,16,dt),i.cyl(0,0,h*1.08,n*.9,n,l,c,16,Pt),i.box(-h*.5,h*.5,n*.62,n*.8,h*.7,h*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Pt);return}if(r==="bin1100"){for(let d of[-1,1])for(let g of[-1,1])i.cyl(d*(t/2-.12),g*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,dt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Pt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Pt);return}let f=Math.min(.2,n*.19),u=-e/2;for(let h of[-1,1])i.lyingCyl("x",h*(t/2-.05),u+f/2+.01,0,f,.05,f,N.dark,N.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,dt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Pt),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,qt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Pt))}function r1(i,t,e,n,r){let s=N.metal,o=Dt(N.metal,1.25).getHex(),a=Dt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Pt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,dt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,dt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Pt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Pt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,dt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,dt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Pt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,dt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let f=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(f,f+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Pt),i.box(f+.04,f+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,dt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,dt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function s1(i,t,e,n){let r=e/2-$p;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,dt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Pt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Pt))}var $p=.06;function Zp(i,t,e,n){let r=t.rotation*se,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(A,P,D)=>[t.x+A*s-D*o,P,t.z+A*o+D*s],c=(A,P,D,L,U)=>{i.tri(A,P,D,U),i.tri(A,D,L,U),i.tri(A,D,P,U),i.tri(A,L,D,U)},f=(A,P,D,L)=>{let U=l(A[0],A[1],A[2]),B=l(P[0],P[1],P[2]),k=B[0]-U[0],V=B[1]-U[1],j=B[2]-U[2],G=Math.hypot(k,V,j)||1,J=[k/G,V/G,j/G],et=Math.abs(J[1])>.9?[1,0,0]:[0,1,0],ht=[J[1]*et[2]-J[2]*et[1],J[2]*et[0]-J[0]*et[2],J[0]*et[1]-J[1]*et[0]],H=Math.hypot(ht[0],ht[1],ht[2])||1,X=[ht[0]/H*D,ht[1]/H*D,ht[2]/H*D],rt=[J[1]*X[2]-J[2]*X[1],J[2]*X[0]-J[0]*X[2],J[0]*X[1]-J[1]*X[0]],at=[[1,1],[-1,1],[-1,-1],[1,-1]],ut=(pt,gt)=>[pt[0]+X[0]*at[gt][0]+rt[0]*at[gt][1],pt[1]+X[1]*at[gt][0]+rt[1]*at[gt][1],pt[2]+X[2]*at[gt][0]+rt[2]*at[gt][1]];for(let pt=0;pt<4;pt++){let gt=(pt+1)%4;i.tri(ut(U,pt),ut(B,pt),ut(B,gt),L),i.tri(ut(U,pt),ut(B,gt),ut(U,gt),L)}},u=(A,P,D,L,U,B,k,V)=>{c(l(A,L,U),l(P,L,U),l(P,L,B),l(A,L,B),V),c(l(A,D,B),l(P,D,B),l(P,L,B),l(A,L,B),k),c(l(A,D,U),l(P,D,U),l(P,D,B),l(A,D,B),k),c(l(A,D,U),l(A,D,B),l(A,L,B),l(A,L,U),k),c(l(P,D,U),l(P,D,B),l(P,L,B),l(P,L,U),k)},h=new Z(N.body),d=new Z(N.bodyTop),g=new Z(N.accent),b=new Z(1929098),m=new Z(995141),p=(A,P,D,L,U)=>{let B=(k,V,j)=>[k[0]+(V[0]-k[0])*j,k[1]+(V[1]-k[1])*j,k[2]+(V[2]-k[2])*j];for(let k=0;k<U;k++){let V=B(A,P,k/U),j=B(A,P,(k+1)/U),G=B(D,L,(k+1)/U),J=B(D,L,k/U);c(l(V[0],V[1],V[2]),l(j[0],j[1],j[2]),l(G[0],G[1],G[2]),l(J[0],J[1],J[2]),k%2?b:m)}},x=t.w/2,y=-t.d/2,v=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,I=(A,P)=>{t.awning_valance!==!1&&p([-x+.04,A,P+.01],[x-.04,A,P+.01],[-x+.04,A-.2,P+.01],[x-.04,A-.2,P+.01],M)},_=t.variant??"arm";if(_==="side"){let A=e,P=.05,D=0,L=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,A+.05,D-.05,D+.05,h,d),u(x-.06,x,0,A+.05,D-.03,D+.03,h,d),a>.01&&p([-x+.1,A,D],[-x+.1,P,D],[L,A,D],[L,P,D],Math.max(4,Math.round((A-P)/.3))),f([L,P,D],[L,A,D],.02,g);return}if(_==="vertical"){let A=y,P=Math.min(t.d/2,y+v);u(-x,x,e,e+v,A,P,h,d);let D=(A+P)/2;for(let U of[-x+.02,x-.02])f([U,.02,D],[U,e,D],.02,g);let L=e-a*Math.max(0,e-.04);a>.01&&p([-x+.04,e,D],[x-.04,e,D],[-x+.04,L,D],[x-.04,L,D],M),f([-x+.03,L,D],[x-.03,L,D],.025,g);return}if(_==="pergola"){let A=t.d/2-.05,P=e+v,D=P-(A-y)*Math.tan(w);u(-x,x,e,P,y,y+v,h,d);for(let B of[-x+.05,x-.05])f([B,P,y+v],[B,D,A],.035,g),f([B,0,A],[B,D,A],.045,h);f([-x+.05,D,A],[x-.05,D,A],.035,g);let L=y+v+a*(A-y-v),U=P-(L-y)*Math.tan(w)+.04;a>.01&&p([-x+.08,P+.04,y+v],[x-.08,P+.04,y+v],[-x+.08,U,L],[x-.08,U,L],M),f([-x+.08,U,L],[x-.08,U,L],.025,g);return}let R=y,S=y+v;u(-x,x,e,e+v,R,S,h,d);let E=[S-.02,e+v*.35];if(_==="drop"){let A=Math.max(.3,t.d-v),P=[S,E[1]-A],D=a*(Math.PI/2+w),L=[P[0]+Math.sin(D)*A,P[1]+Math.cos(D)*A];for(let U of[-x+.08,x-.08])f([U,P[1],P[0]],[U,L[1],L[0]],.018,g);a>.01&&p([-x+.04,E[1],E[0]],[x-.04,E[1],E[0]],[-x+.04,L[1],L[0]],[x-.04,L[1],L[0]],M),f([-x+.02,L[1],L[0]],[x-.02,L[1],L[0]],.03,g),a>.05&&I(L[1],L[0]);return}let T=Math.max(0,t.d-v)*a,C=[E[0]+T,E[1]-T*Math.tan(w)];if(T>.01){p([-x+.04,E[1],E[0]],[x-.04,E[1],E[0]],[-x+.04,C[1],C[0]],[x-.04,C[1],C[0]],M);let A=Math.max(.3,(t.d-v)/2+.05);for(let P of[-1,1]){let D=P*(x-.12),L=[D,e+.02,S-.04],U=[D,C[1]-.02,C[0]],B=Math.hypot(U[2]-L[2],U[1]-L[1]),k=Math.sqrt(Math.max(0,A*A-(B/2)**2)),V=[D-P*Math.min(k,x-.15),(L[1]+U[1])/2,(L[2]+U[2])/2];f(L,V,.018,g),f(V,U,.018,g)}}f([-x+.02,C[1],C[0]],[x-.02,C[1],C[0]],.03,g),T>.05&&I(C[1],C[0])}function Kp(i,t,e,n,r){let s=i.p.length;o1(i,t,e,n,r),t.mirror&&tm(i,s)}function o1(i,t,e,n,r){let s=t.rotation*se,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(v,M)=>[t.x+l*v*o-M*a,t.z+l*v*a+M*o],f=e+.05,u=e+t.h-.02,h=new Z(.75,.1,.14),d=new Z(N.dark),g=new Z(N.accent),b=t.w/2-.006,m=(v,M,w)=>{let I=w/p,_=new Z(2043212).lerp(h,I),R=new Z(N.body).lerp(h,I*.8),S=Math.cos(w),E=Math.sin(w),T=(P,D)=>c(v+M*(P*S-D*E),t.d/2+P*E+D*S),C=(P,D,L,U)=>{let[B,k,V,j]=P;i.tri([B[0],D,B[1]],[k[0],D,k[1]],[V[0],L,V[1]],U),i.tri([B[0],D,B[1]],[V[0],L,V[1]],[j[0],L,j[1]],U)},A=(P,D,L,U,B,k,V,j=V)=>{let G=[T(P,k),T(D,k),T(D,B),T(P,B)];C([G[0],G[1],G[1],G[0]],L,U,j),C([G[3],G[2],G[2],G[3]],L,U,V),C([G[0],G[3],G[3],G[0]],L,U,V),C([G[1],G[2],G[2],G[1]],L,U,V),C([G[0],G[1],G[2],G[3]],U,U,V),C([G[3],G[2],G[1],G[0]],L,L,V)};return A(0,b,f,u,-$p,0,R,_),A(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),A},p=1.83;m(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*p)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function a1(i,t,e,n){Xi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,dt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,qt)}}function l1(i,t,e,n){Xi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,qt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function c1(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,qt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function u1(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,qt),i.seg(r,n,s,o,n,a,qt),i.seg(o,.05,a,o,n,a,qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,qt)}function h1(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,dt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,dt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function f1(i,t,e,n){Xi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,qt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,qt)}function d1(i,t,e,n){Xi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,qt)}function p1(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,dt),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),f=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,f,f+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Pt:null)}}function m1(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,dt)}var g1=.18;function b1(i,t,e,n,r=!1){let s=Math.max(3,Math.round(n/.18)),o=n/s,a=e/s,l=h=>Math.max(0,o*((e/2-h)/a-1)-g1);for(let h=0;h<s;h++){let d=e/2-a*h,g=d-a,b=o*(h+1);r?i.wedge(-t/2,t/2,g,d,l(g),l(d),b,N.wood,N.woodTop,N.body):i.box(-t/2,t/2,0,b,g,d,N.wood,N.woodTop),i.seg(-t/2,b,d,t/2,b,d,dt)}if(r)for(let h of[-t/2,t/2])i.seg(h,l(e/2-a),e/2-a,h,l(-e/2),-e/2,Pt);i.seg(-t/2,0,e/2,-t/2,o,e/2,dt);for(let h of[-t/2,t/2])i.seg(h,o,e/2,h,n,-e/2+a,Pt);let c=.9,f=t/2-.03,u=Math.max(1,s-4);i.seg(f,o+c,e/2-a/2,f,o*u+c,e/2-a*(u-.5),qt);for(let h=0;h<u;h+=3){let d=e/2-a*(h+.5),g=o*(h+1);i.seg(f,g,d,f,g+c,d,Pt)}}function x1(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:f}=np(t,e,n),u=-t/2,h=-t/2+a,d=t/2-a,g=t/2,b=-e/2+l;for(let I=0;I<s;I++){let _=e/2-c*I,R=f*(I+1);i.box(u,h,0,R,_-c,_,N.wood,N.woodTop),i.seg(u,R,_,h,R,_,dt)}i.seg(u,0,e/2,u,f,e/2,dt);let m=f*r,p=.2;i.box(u,h,0,m,-e/2,b,N.wood,N.woodTop),i.box(h,g,Math.max(0,m-p),m,-e/2,b,N.wood,N.woodTop),i.seg(u,m,b,h,m,b,dt);for(let I=0;I<o;I++){let _=b+c*I,R=f*(r+1+I);i.box(d,g,Math.max(0,R-f-p),R,_,_+c,N.wood,N.woodTop),i.seg(d,R,_,g,R,_,dt)}i.seg(u,f,e/2,u,m,b,Pt),i.seg(g,m,b,g,n,b+c*(o-1),Pt);let x=.9,y=h-.03,v=d+.03,M=b-.03,w=Math.max(1,o-4);i.seg(y,f+x,e/2-c/2,y,m+x,M,qt),i.seg(y,m+x,M,v,m+x,M,qt),i.seg(v,m+x,M,v,f*(r+w)+x,b+c*(w-.5),qt);for(let I=0;I<s;I+=3){let _=e/2-c*(I+.5);i.seg(y,f*(I+1),_,y,f*(I+1)+x,_,Pt)}for(let I of[y,v])i.seg(I,m,M,I,m+x,M,Pt);for(let I=2;I<w;I+=3){let _=b+c*(I+.5);i.seg(v,f*(r+1+I),_,v,f*(r+1+I)+x,_,Pt)}}function v1(i,t,e,n){br(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),co(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function y1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Pt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,qt)}}function _1(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,dt),co(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,dt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,dt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function Hp(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,dt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,dt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Pt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,dt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,dt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Pt))}function M1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Pt),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,dt)}function S1(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,dt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,dt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function w1(i,t,e,n){br(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,dt)}function T1(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,dt),co(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function E1(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,qt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Pt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,qt)}function A1(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,dt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),co(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function R1(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Wp(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,dt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Pt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,qt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let f=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(f)*a,o+Math.sin(f)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,qt),r||i.seg(Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Pt)}}function C1(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Pt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,dt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Pt)}function P1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,dt)}function I1(i,t,e,n){br(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Pt)}function L1(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,qt)}function F1(i,t,e,n){let r=rh;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,dt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Pt)}}function D1(i,t,e,n){let r=sh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,dt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Pt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,qt)}function ls(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,qt)}}function N1(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),ls(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,qt);for(let a of[-1,1])ls(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Pt)}function O1(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,dt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Pt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,dt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,qt)}}function U1(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,dt),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,dt),ls(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,dt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,qt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function B1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,dt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;ls(i,s,o,r,e/2+.004,24),ls(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Pt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Pt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Pt)}function k1(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,dt);for(let s of[-1,1])ls(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,qt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Pt)}function z1(i,t,e,n){let r=Qd-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,dt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function V1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,dt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Pt)}function G1(i,t,e,n,r){let s=Ol,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,N.white,N.whiteTop,dt);let l=t/r;for(let c=0;c<r;c++){let f=-t/2+c*l;i.box(f+.008,f+l-.008,s+.012,s+n-.012,a,a+.006,N.whiteTop,N.whiteTop,Pt)}}function H1(i,t,e,n,r){let s=Ul,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,N.white,N.whiteTop,dt);let l=t/r,c=s+n/2,f=Math.min(l,n)*.3;for(let u=0;u<r;u++){let h=-t/2+(u+.5)*l;u>0&&i.seg(h-l/2,s+.006,a+.001,h-l/2,s+n-.006,a+.001,Pt),i.lyingCyl("z",h,a+.004,c-f,c+f,.008,f*2,N.whiteTop,N.whiteTop,16,Pt),i.lyingCyl("z",h,a+.006,c-f*.78,c+f*.78,.008,f*1.56,N.white,N.white,16);for(let d of[-f*.38,f*.38])i.lyingCyl("z",h+d,a+.0065,c-.0025,c+.0025,.008,.005,N.dark,N.dark,6)}}function Jp(i){let t=Math.max(.05,i.w),e=Math.max(.05,i.d),n=Math.max(.005,i.h),r=Vl(i),s=t/r;return i.type==="wall_socket"?Array.from({length:r},(o,a)=>({x:-t/2+(a+1)*s-.012,y:Ul+n-.012,z:-e/2+.011,r:.0025})):Array.from({length:r},(o,a)=>({x:-t/2+(a+.5)*s,y:Ol+n*.2,z:-e/2+.017,r:.005}))}function jp(i,t,e){let n=Math.min(.2,e*.19),r=Math.min(.075,n*.55,i*.2),s=to+n*.3;return{band:n,display:{x0:-r*.75,x1:r*.25,y0:s,y1:s+r,z:t/2+.004}}}function W1(i,t,e,n){let r=to,s=r+n,{band:o,display:a}=jp(t,e,n),l=Math.min(.07,t*.14,o*.8),c=-t/2,f=t/2,u=-e/2,h=e/2,d=3,g=p=>l-Math.sqrt(Math.max(0,l*l-(l-p)*(l-p))),b=N.metal;for(let p=0;p<d;p++){let x=l*p/d,y=l*(p+1)/d,v=g(x),M=g(y);i.loft([c+v,f-v,u,h],[c+M,f-M,u,h],r+x,r+y,b),i.loft([c+M,f-M,u,h],[c+v,f-v,u,h],s-y,s-x,N.white,N.whiteTop)}i.box(c,f,r+l,r+o,u,h,b,b),i.box(c,f,r+o,s-l,u,h,N.white,N.whiteTop,dt),i.seg(c,r+o,h+.001,f,r+o,h+.001,Pt),i.box(a.x0,a.x1,a.y0,a.y1,h,h+.003,N.dark,N.dark,Pt);let m=(a.y1-a.y0)*.3;for(let[p,x]of[[0,0],[1,0],[0,1],[1,1]]){let y=a.x1+.012+p*(m+.008),v=a.y0+.004+x*(m+.012);i.box(y,y+m,v,v+m,h,h+.003,N.body,N.body)}for(let p of[-.05,.05])i.cyl(p,0,.011,r-.12,r+.01,N.metal,N.metal,8)}function X1(i,t,e,n,r){if(r){let o=Math.min(t,n)/2,a=Math.min(.035,e);i.lyingCyl("z",0,-e/2+a*.4,.004,2*o-.004,a*.8,2*o-.008,N.white,N.white,28),i.lyingCyl("z",0,-e/2+a*.85,.012,2*o-.012,a*.3,2*o-.024,N.whiteTop,N.whiteTop,28,Pt);return}let s=Math.min(t,e)/2;i.cyl(0,0,s-.006,0,n*.3,N.whiteTop,N.whiteTop,28,Pt),i.cyl(0,0,s,n*.3,n,N.white,N.white,28)}function Qp(i){let t=Math.max(.05,i.w),e=Math.max(.005,i.d),n=Math.max(.005,i.h);return Hu(i)?{y:Math.min(t,n)/2,z:-e/2+Math.min(.035,e)+.002,r:Math.min(t,n)/2,wall:!0}:{y:-.002,z:0,r:Math.min(t,e)/2,wall:!1}}function Y1(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,dt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,f=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(f)*s,o+Math.sin(f)*s,e/2+.003,qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function q1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Pt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Pt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,qt)}function $1(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Pt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,dt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,qt)}}var rh=.12,sh=2.05;function oh(i,t){let e=Z1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function Z1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Hd(i.type);if(s){let l=t?Ze(t,i):0,c=(s.x-s.w/2)*e,f=(s.x+s.w/2)*e,u=Math.min(.02,(f-c)*.05);return{x0:c+u,x1:f-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?Ze(t,i)-di(i):0,a=K1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function K1(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?Ze(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:rh+.02,y1:rh+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:sh+.015,y1:sh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="water_heater"?jp(t,e,n).display:i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function J1(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new Z(1-r,1-r,1-r),a=new Z(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],u=d=>[d[0],l,d[1]],h=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(u(c[d]),u(f[d]),u(f[g]),o,a,a),i.tri(u(c[d]),u(f[g]),u(c[g]),o,a,o)}Yp(t)&&tm(i,h)}function Yl(i,t,e,n,r=0){j1(i,t,e,n,r)}function tm(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function j1(i,t,e,n,r){let s=Te(n.type)?0:r-di(n);if(Te(n.type)||Math.abs(s)<.001)return Xp(i,t,e,n,r);let o=i.p.length,a=t.p.length;Xp(i,t,r<.05?e:new te,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function Xp(i,t,e,n,r){let s=n.rotation*se,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(g,b)=>[n.x+l*g*o-b*a,n.z+l*g*a+b*o],f=new gr(i,t,c),u=Math.max(.05,n.w),h=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":Vp(f,u,h,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":Vp(f,u,h,d,1);break;case"sofa_l":Gp(f,u,h,d,!1);break;case"sofa_u":Gp(f,u,h,d,!0);break;case"bed":Z_(f,u,h,d);break;case"chair":K_(f,u,h,d);break;case"table":J_(f,u,h,d);break;case"desk":j_(f,u,h,d);break;case"nightstand":Xi(f,u,h,d,1,d*.72,!0),f.seg(-u/2,d*.5,h/2-.02,u/2,d*.5,h/2-.02,Pt);break;case"wardrobe":Xi(f,u,h,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":Q_(f,u,h,d);break;case"kitchen":t1(f,u,h,d);break;case"fridge":e1(f,u,h,d);break;case"fridge_smart":s1(f,u,h,d);break;case"waste_bin":{let g=i.c.length;i1(f,u,h,d,Pp(n),Dp(n,Fp())),Xl&&n1(i.c,g);break}case"mailbox":{let g=i.p.length,b=t.p.length;r1(f,u,h,d,Ip(n));let m=di(n);for(let p=g+1;p<i.p.length;p+=3)i.p[p]+=m;for(let p=b+1;p<t.p.length;p+=3)t.p[p]+=m;if(m>0)return;break}case"awning":return;case"stove":a1(f,u,h,d);break;case"sink":l1(f,u,h,d);break;case"bathtub":c1(f,u,h,d);break;case"shower":u1(f,u,h,d);break;case"wc":h1(f,u,h,d);break;case"washbasin":f1(f,u,h,d);break;case"tv_board":d1(f,u,h,d);break;case"plant":p1(f,u,h,d);break;case"rug":m1(f,u,h);return;case"stairs":b1(f,u,h,d,!!n.stair_open);break;case"stairs_u":x1(f,u,h,d);break;case"stairwell":return;case"sideboard":v1(f,u,h,d);break;case"dresser":y1(f,u,h,d);break;case"tall_cabinet":Xi(f,u,h,d,1,d*.5);break;case"coat_rack":_1(f,u,h,d);break;case"bench":Hp(f,u,h,d,!1);break;case"corner_bench":Hp(f,u,h,d,!0);break;case"bar_stool":M1(f,u,h,d);break;case"office_chair":S1(f,u,h,d);break;case"stool":w1(f,u,h,d);break;case"kitchen_wall":T1(f,u,h,d);return;case"kitchen_tall":E1(f,u,h,d);break;case"island":A1(f,u,h,d);break;case"worktop":f.box(-u/2,u/2,Math.max(0,d-.04),d,-h/2,h/2,N.whiteTop,N.whiteTop,dt);return;case"dishwasher":R1(f,u,h,d);break;case"washer":Wp(f,u,h,d,!1);break;case"dryer":Wp(f,u,h,d,!0);break;case"bunk_bed":C1(f,u,h,d);break;case"table_round":P1(f,u,h,d);break;case"coffee_table":I1(f,u,h,d);break;case"tv_wall":L1(f,u,h,d);return;case"parking":{let b=[[-u/2,-h/2],[u/2,-h/2],[u/2,h/2],[-u/2,h/2]];for(let m=0;m<4;m++)f.seg(b[m][0],.012,b[m][1],b[(m+1)%4][0],.012,b[(m+1)%4][1],Pt);f.seg(-u*.15,.012,h/2-.45,0,.012,h/2-.2,dt),f.seg(0,.012,h/2-.2,u*.15,.012,h/2-.45,dt);return}case"robot_vacuum":f.box(-u*.45,u*.45,0,d,-h/2,-h/2+h*.3,N.white,N.whiteTop,dt),f.box(-u*.2,u*.2,d*.5,d*.62,-h/2+h*.3,-h/2+h*.31,N.accent);return;case"radiator":F1(f,u,h,d);return;case"ac_unit":D1(f,u,h,d);return;case"inverter":N1(f,u,h,d,n.variant??null);return;case"grid_point":V1(f,u,h,d);break;case"wallbox":Y1(f,u,h,d);return;case"wall_switch":G1(f,u,h,d,Qu(n).length);return;case"wall_socket":H1(f,u,h,d,Vl(n));return;case"water_heater":W1(f,u,h,d);return;case"access_point":X1(f,u,Math.max(.005,n.d),d,Hu(n));return;case"pool_pump":O1(f,u,h,d);break;case"pool_filter":U1(f,u,h,d,n.variant??null);break;case"pool_heat_pump":B1(f,u,h,d);break;case"pool_dosing":k1(f,u,h,d);break;case"pool_valve":z1(f,u,h,d);return;case"meter":q1(f,u,h,d);return;case"home_battery":if($1(f,u,h,d,n.variant??null),n.variant==="wall")return;break;default:{let g=Te(n.type);if(g){let b=Cl(n.type);if(ql(f,g,u,h,d,r,null,null,b?m=>Xu(b,m):null),r>.05)return}else f.box(-u/2,u/2,0,d,-h/2,h/2,N.body,N.bodyTop,dt)}}J1(e,c,u,h,n.type==="plant"?.35:.5)}function ih(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function ql(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let f of t.parts){if(l!=null&&l(f)||a&&!a(f))continue;let u=c?{...f,glow:!0,w:f.w+.006/e,d:f.d+.006/n,y:Math.max(0,f.y-.002/r),h:f.h+.004/r}:f,h=u.glow&&o!==null,d=h?o:ih(u.color,!1)??N.body,g=h?o:ih(u.top,!1)??ih(u.color,!0)??Dt(d,1.25).getHex(),b=s+u.y*r,m=s+Math.min(r,(u.y+u.h)*r),p=u.edges==="glow"?pr:u.edges==="faint"?Pt:u.edges?dt:null,x=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))x.lyingCyl(u.axis,u.x*e,u.z*n,b,m,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,g,14,p);else if(u.shape==="cyl")x.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,b,m,d,g,14,p);else if(u.shape==="loft"){let y=u.tx??u.x,v=u.tz??u.z,M=u.tw??u.w,w=u.td??u.d;x.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-M/2)*e,(y+M/2)*e,(v-w/2)*n,(v+w/2)*n],b,m,d,g,p)}else x.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,b,m,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,g,p)}}function em(i,t,e,n,r,s){let o=s*se,a=Math.cos(o),l=Math.sin(o),c=(g,b)=>[e+g*a-b*l,r+g*l+b*a],f=new gr(i,new Le,c),u=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){f.cyl(0,0,.07,n-.03,n,u,h,12),f.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),f.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}f.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,h),f.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,h),f.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,h),f.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),f.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function uo(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*se,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,f=(u,h)=>[e.x+c*u*a-h*l,e.z+c*u*l+h*a];ql(new gr(i,new Le,f),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function nm(i,t,e,n,r,s){let o=Q1(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*se,l=Math.cos(a),c=Math.sin(a),f=n.mirror?-1:1,u=(h,d)=>[n.x+f*h*l-d*c,n.z+f*h*c+d*l];ql(new gr(i,new Le,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function Q1(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Xu(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function $l(i,t,e,n,r){let s=e.rotation*se,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(f,u)=>[e.x+l*f*o-u*a,e.z+l*f*a+u*o];ql(new gr(i,new Le,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var tM={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function eM(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let f=a.points[(c+1)%a.points.length],u=f[0]-l[0],h=f[1]-l[1],d=Math.hypot(u,h)||1;if(Math.abs((r*h-s*u)/(o*d))>.05)return!1;let g=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*h)/(d*d)));return Math.hypot(l[0]+u*g-n[0],l[1]+h*g-n[1])<.4}))}function rm(i,t){return t.type==="pool"?Nl(i,t):hr(i,t)+(On(t.type)?.01:is[t.type])}function ho(i){return Un(i)>=0?i:[...i].reverse()}function nM(i,t){let e=i[t];if(On(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Jt(o,e.points))&&n.push(ho(s.points))}return n}function im(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],f=e[1]-t[1],u=Math.hypot(c,f);if(u<1e-6)return;let h=-f/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ae(i,ho([[t[0]+h,t[1]+d],[e[0]+h,e[1]+d],[e[0]-h,e[1]-d],[t[0]-h,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let g=(v,M)=>[t[0]+h*M,v,t[1]+d*M],b=(v,M)=>[e[0]+h*M,v+l,e[1]+d*M],m=(v,M)=>{i.tri(v[0],v[1],v[2],M,M,M,void 0,Yt),i.tri(v[0],v[2],v[3],M,M,M,void 0,Yt),i.tri(v[0],v[2],v[1],M,M,M,void 0,Yt),i.tri(v[0],v[3],v[2],M,M,M,void 0,Yt)},p=new Z(a),x=new Z(Dt(o,.9)),y=new Z(Dt(o,.6));m([g(s,1),b(s,1),b(s,-1),g(s,-1)],p),m([g(r,1),b(r,1),b(r,-1),g(r,-1)],y),m([g(r,1),b(r,1),b(s,1),g(s,1)],x),m([g(r,-1),b(r,-1),b(s,-1),g(s,-1)],x),m([g(r,1),g(r,-1),g(s,-1),g(s,1)],x),m([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function sm(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=hr(e,s),l=(x,y)=>a-eo(e,s,x,y),c=a-(s.type==="pool"?0:s.slope??0),f=On(s.type)&&s.height?s.height:is[s.type],u={...tM[s.type],top:f},h=ho(s.points),d=Dt(u.edge,u.edgeAlpha),g=s.open&&(s.type==="fence"||s.type==="pergola")?h.length-1:-1,b=x=>{if(s.outline!==!1)for(let y=0;y<h.length;y++){if(y===g)continue;let v=h[y],M=h[(y+1)%h.length];t.seg([v[0],x(v[0],v[1]),v[1]],[M[0],x(M[0],M[1]),M[1]],d,Yt)}},m=n??i,p=new Z(n?1734832:u.color);switch(s.type){case"pool":{let x=new Z(u.side),y=new Z(Dt(u.side,.55)),v=new Z(932440),M=Nl(e,s),w=Dl(e,s),I=Jd(e,s);for(let[_,R,S]of ei(h)){let E=h[_],T=h[R],C=h[S];(n?m:i).tri([E[0],M,E[1]],[C[0],M,C[1]],[T[0],M,T[1]],p,p,p,void 0,Yt),i.tri([E[0],I,E[1]],[C[0],I,C[1]],[T[0],I,T[1]],v,v,v,void 0,Yt)}for(let _=0;_<h.length;_++){let R=h[_],S=h[(_+1)%h.length];i.tri([S[0],I,S[1]],[S[0],w,S[1]],[R[0],w,R[1]],y,x,x,void 0,Yt),i.tri([S[0],I,S[1]],[R[0],w,R[1]],[R[0],I,R[1]],y,x,y,void 0,Yt)}if(!s.above&&$u(e,s)){let _=new Z(660258),R=new Z(396054),S=I-.2,E=Math.min(a,w);for(let T=0;T<h.length;T++){let C=h[T],A=h[(T+1)%h.length];i.tri([C[0],S,C[1]],[C[0],E,C[1]],[A[0],E,A[1]],R,_,_,void 0,Yt),i.tri([C[0],S,C[1]],[A[0],E,A[1]],[A[0],S,A[1]],R,_,R,void 0,Yt)}for(let[T,C,A]of ei(h)){let P=h[T],D=h[C],L=h[A];i.tri([P[0],S,P[1]],[D[0],S,D[1]],[L[0],S,L[1]],R,R,R,void 0,Yt)}if(s.outline!==!1)for(let T=0;T<h.length;T++){let C=h[T],A=h[(T+1)%h.length];t.seg([C[0],S,C[1]],[A[0],S,A[1]],Dt(u.edge,u.edgeAlpha*.35),Yt),t.seg([C[0],S,C[1]],[C[0],E,C[1]],Dt(u.edge,u.edgeAlpha*.25),Yt)}}if(w>a+.02){let _=new Z(2044240),R=new Z(1187123);for(let S=0;S<h.length;S++){let E=h[S],T=h[(S+1)%h.length];i.tri([E[0],a,E[1]],[E[0],w,E[1]],[T[0],w,T[1]],R,_,_,void 0,Yt),i.tri([E[0],a,E[1]],[T[0],w,T[1]],[T[0],a,T[1]],R,_,R,void 0,Yt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),s.outline!==!1)for(let _=0;_<h.length;_++){let R=h[_],S=h[(_+1)%h.length];t.seg([R[0],I+.005,R[1]],[S[0],I+.005,S[1]],Dt(u.edge,u.edgeAlpha*.4),Yt)}break}case"fence":{for(let x=0;x<h.length;x++){if(x===g)continue;let y=h[x],v=h[(x+1)%h.length],M=Math.hypot(v[0]-y[0],v[1]-y[1]),w=Math.max(1,Math.round(M/2)),I=g>=0&&x===g-1?w:w-1;for(let _=0;_<=I;_++){let R=_/w,S=y[0]+(v[0]-y[0])*R,E=y[1]+(v[1]-y[1])*R,T=l(S,E);Ae(i,ho([[S-.04,E-.04],[S+.04,E-.04],[S+.04,E+.04],[S-.04,E+.04]]),T,T+u.top,u.side,u.color)}for(let _ of[.35,.85])t.seg([y[0],l(y[0],y[1])+_*u.top,y[1]],[v[0],l(v[0],v[1])+_*u.top,v[1]],d,Yt)}break}case"pergola":{let x=u.top;for(let[y,v]of h){let M=l(y,v);Ae(i,ho([[y-.06,v-.06],[y+.06,v-.06],[y+.06,v+.06],[y-.06,v+.06]]),M,M+x,u.side,u.color)}for(let y=0;y<h.length;y++){if(y===g)continue;let v=h[y],M=h[(y+1)%h.length],w=l(v[0],v[1])+x;if(im(i,v,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(v[0],v[1])),s.bracing){let I=l(v[0],v[1]),_=l(M[0],M[1]);t.seg([v[0],I+.25,v[1]],[M[0],_+x-.25,M[1]],d,Yt),t.seg([M[0],_+.25,M[1]],[v[0],I+x-.25,v[1]],d,Yt)}}if(op(h)){let y=ap(h),v=y.x1-y.x0,M=y.z1-y.z0,w=v>=M,I=w?v:M,_=Math.max(1,Math.round(I/.6));for(let R=1;R<_;R++){let S=(w?y.x0:y.z0)+I*R/_,E=w?[S,y.z0+.06]:[y.x0+.06,S],T=w?[S,y.z1-.06]:[y.x1-.06,S],C=l(E[0],E[1])+x;im(i,E,T,.06,C-.04,C+.08,u.side,u.color,l(T[0],T[1])-l(E[0],E[1]))}}b((y,v)=>l(y,v)+x+.004);break}case"balcony":{Ae(i,h,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let y=s.height&&s.height>.3?s.height:1,v=Dt(9417983,.42),M=Dt(3662079,.55);for(let w=0;w<h.length;w++){let I=h[w],_=h[(w+1)%h.length];if(eM(e,I,_))continue;let R=Math.hypot(_[0]-I[0],_[1]-I[1]),S=a+u.top;t.seg([I[0],S+y,I[1]],[_[0],S+y,_[1]],M,Yt),t.seg([I[0],S+.1,I[1]],[_[0],S+.1,_[1]],v,Yt);let E=Math.max(1,Math.round(R/.12));for(let T=0;T<=E;T++){let C=T/E,A=I[0]+(_[0]-I[0])*C,P=I[1]+(_[1]-I[1])*C;t.seg([A,S,P],[A,S+y,P],T===0||T===E?M:v,Yt)}}break}default:{let x=(v,M)=>l(v,M)+u.top,y=nM(r,o);if(Ae(i,h,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),b((v,M)=>x(v,M)+.004),s.type==="hedge"&&b((v,M)=>l(v,M)+.004),s.outline!==!1)for(let v of y)for(let M=0;M<v.length;M++){let w=v[M],I=v[(M+1)%v.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[I[0],x(I[0],I[1])+.004,I[1]],d,Yt)}}}})}var Kl=Math.PI/180,iM=1.13,rM=1.72,ah=.025,xr=.07,om=.25;function am(i,t){var n;let e=[];for(let r of i.floors){if(t&&r.id!==t)continue;let{walls:s}=mi(r.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},r.walls??[]);for(let o of s){if(!o.exterior&&!o.free)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);if(c<.5)continue;let f=l/c,u=-a/c,h=Math.min(r.height,o.height??r.height),d=((n=o.sources.find(m=>m.room_id===o.roomLeft))==null?void 0:n.edge)??null,g={floorId:r.id,room:o.roomLeft,edge:d,free:!!o.free},b=(m,p,x,y)=>e.push({key:m,section:null,side:"top",flat:!1,o:p,eu:x,es:[0,1,0],n:y,lu:c,ls:h,pitch:90,span:()=>[0,c],facing:[y[0],y[2]],wall:g});b(`wall:${r.id}:${o.id}`,[o.a[0]+f*o.right,r.elevation,o.a[1]+u*o.right],[a/c,0,l/c],[f,0,u]),o.free&&b(`wall:${r.id}:${o.id}:back`,[o.b[0]-f*o.left,r.elevation,o.b[1]-u*o.left],[-a/c,0,-l/c],[-f,0,-u])}}return e}var lh="ground";function ch(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function lm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=ch(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Kd(s,o,a)):t.base??0;return{key:lh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function sM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function yr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>oM(x,zl(i,x,x.overhang??t.overhang)));let e=sM(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(y=>y[0])),r=e.rooms.flatMap(x=>x.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=e.elevation+e.height;if(t.type==="flat")return[cm("main",null,o,l,a,c,f+om)];let u=a-o>=c-l,h=t.ridge==="short"?!u:u,d=(h?c-l:a-o)/2,g=d*Math.tan(t.pitch*Kl),b=(x,y,v)=>h?[x,f+v,(l+c)/2+y]:[(o+a)/2+y,f+v,x],[m,p]=h?[o,a]:[l,c];return[-1,1].map(x=>Zl(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(m,x*d,0),b(p,x*d,0),b(m,0,g),t.pitch,()=>[0,p-m]))}function oM(i,t){let e=ti(i),n=wn(i),r=(b,m,p)=>{let[x,y]=e.at(b,m);return[x,p,y]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let b=e.at(a,-s),m=e.at(l,e.w+o);return[cm(i.id,i.id,Math.min(b[0],m[0]),Math.min(b[1],m[1]),Math.max(b[0],m[0]),Math.max(b[1],m[1]),i.eave_a+om)]}if(i.shape==="pent")return[Zl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let f=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(e.u1-e.u0)/2:f?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,h=f?e.u0+u-a:0,d=f?l-(e.u1-u):0,g=[];if(n.vr>.3){let b=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(Zl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,m=>[h*(m/b),c-d*(m/b)]))}if(e.w-n.vr>.3){let b=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Zl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,m=>[d*(m/b),c-h*(m/b)]))}if(f){let b=n.y(-s),m=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,m),r(a,-s,b),r(e.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,b),r(l,e.w+o,m),r(e.u1-u,n.vr,n.rh)]];for(let[x,y,v,M,w]of p){let I=aM(x,i.id,y,v,M,w);I&&g.push(I)}}return g}function aM(i,t,e,n,r,s){let o=fo(vr(r,n));if(o<.3)return null;let a=Yi(vr(r,n)),l=vr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],f=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=fo(f);if(u<.3)return null;let h=Yi(f),d=Yi(fm(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Yi([-h[0],0,-h[2]]),b=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Kl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:u,pitch:b,span:p=>{let x=Math.min(1,Math.max(0,p/u));return[c*x,o-(o-c)*x]},facing:[g[0],g[2]]}}function Zl(i,t,e,n,r,s,o,a){let l=Yi(vr(r,n)),c=Yi(vr(s,n)),f=Yi(fm(l,c));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let u=Yi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:f,lu:fo(vr(r,n)),ls:fo(vr(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function cm(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function um(i){let t=i.module_w||iM,e=i.module_h||rM;return i.portrait===!1?[e,t]:[t,e]}function lM(i){var t;return(t=i.layout)!=null&&t.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function hm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Kl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Kl:0}function cM(i,t){let[,e]=um(t),n=hm(i,t);return i.wall?e*Math.cos(n)+ah:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+ah}function po(i,t,e=!1){let[n,r]=um(t),s=[],o=hm(i,t),a=r*Math.cos(o),l=cM(i,t),c=lM(t),f=Math.max(1,...c),u=new Set(t.skip??[]),h=!!i.wall&&n>i.lu+1e-6,d=(b,m,p)=>[i.o[0]+i.eu[0]*b+i.es[0]*m+i.n[0]*p,i.o[1]+i.eu[1]*b+i.es[1]*m+i.n[1]*p,i.o[2]+i.eu[2]*b+i.es[2]*m+i.n[2]*p],g=(b,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[p,x]=i.span(m);return b>=p-1e-6&&b<=x+1e-6};return c.forEach((b,m)=>{let p=t.align==="right"?f-b:t.align==="center"?(f-b)/2:0;for(let x=0;x<b;x++){let y=`${m}:${x}`,v=u.has(y);if(v&&!e)continue;let M=t.u+(x+p)*(n+ah),w=t.v+m*l,I=M+n,_=w+(i.flat||i.wall?a:r);if(h){if(!(g((M+I)/2,w)&&g((M+I)/2,_)))continue}else if(![[M,w],[I,w],[I,_],[M,_]].every(([A,P])=>g(A,P)))continue;if(i.wall&&o>.001){let A=xr+r*Math.sin(o),[P,D]=t.flip?[A,xr]:[xr,A],L=[d(M,w,P),d(I,w,P),d(I,_,D),d(M,_,D)],U=t.flip?w:_,B=[M+.05,I-.05].map(k=>[d(k,U,0),d(k,U,A)]);s.push({corners:L,posts:B,cell:y,skipped:v});continue}if(!i.flat){s.push({corners:[d(M,w,xr),d(I,w,xr),d(I,_,xr),d(M,_,xr)],posts:[],cell:y,skipped:v});continue}let R=.15,S=R+r*Math.sin(o),[E,T]=t.flip?[_,w]:[w,_],C=[d(M,E,R),d(I,E,R),d(I,T,S),d(M,T,S)];s.push({corners:C,posts:[M+.05,I-.05].flatMap(A=>[[d(A,E,0),d(A,E,R)],[d(A,T,0),d(A,T,S)]]),cell:y,skipped:v})}}),s}function vr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function fo(i){return Math.hypot(i[0],i[1],i[2])}function Yi(i){let t=fo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function fm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var uM=.78,hM=1.18;function fM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||uM,module_h:i.h||hM}}function Jl(i,t){let e=po(i,fM(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function jl(i,t,e){let n=t?Jl(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>Jt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var mo=1712952,go=2239816,gm=1318193,_r=Dt(3662079,.9),cs=Dt(5995775,.45),Ge=.14,dM=9427199,pM=13226982,mM=14936565,gM={black:{glass:new Z(329483),edge:Dt(9082544,.32),cells:Dt(2766160,.22)},blue:{glass:new Z(1386842),edge:Dt(10467583,.55),cells:Dt(4025599,.35)}},bM=Dt(13226982,.5),xM=Dt(13226982,.85),vM=Dt(16757575,.95),dm=new Z(2845583),pm=new Z(1713986),yM=new Z(3662079).multiplyScalar(.35),mm=new Z(4871791);function _M(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function bm(i,t=new Map){let e=i.settings.roof,n=(e==null?void 0:e.type)==="custom"?null:wM(i),r=(e==null?void 0:e.type)==="custom"?TM(i,e.sections??[],e.overhang):n?[n]:[];return SM(i,r),MM(i,r,t),r}function MM(i,t,e){var s;let n=((s=i.settings.roof)==null?void 0:s.windows)??[];if(!n.length||!t.length)return;let r=new Map(yr(i).map(o=>[o.key,o]));for(let o of n){let a=r.get(o.face),l=a?Jl(a,o):null;if(!a||!l)continue;let c=a.section?t.find(L=>{var U;return(U=L.sections)==null?void 0:U.includes(a.section)}):t[0];if(!c)continue;let f=o.float?jl(i,a,o):null,u=f&&f.floor.id!==c.floor.id&&f.floor.elevation<c.floor.elevation?f.floor:null,h=u?u.elevation:c.floor.elevation+c.base,d=L=>[L[0],L[1]-h,L[2]],[g,b,m,p]=l.map(d),x=e.get(o.id)??{open:0,tilt:0,cover:0},y=!!f&&(u!==null||f.floor.id===c.floor.id),v=u?(c.winBelow??=new Map).get(u.id)??c.winBelow.set(u.id,{floor:u,solid:new te,lines:new Le,glass:new te}).get(u.id):y?c.win??={solid:new te,lines:new Le,glass:new te}:c.winRoof??={solid:new te,lines:new Le,glass:new te},M=(L,U)=>[L[0]+a.n[0]*U,L[1]+a.n[1]*U,L[2]+a.n[2]*U],w=(L,U,B)=>[L[0]+(U[0]-L[0])*B,L[1]+(U[1]-L[1])*B,L[2]+(U[2]-L[2])*B],I=x.open>.02||x.tilt>.02?vM:xM,_=[g,b,m,p].map(L=>M(L,.06)),R=[g,b,m,p].map(L=>M(L,-.02));for(let L=0;L<4;L++){v.lines.seg(_[L],_[(L+1)%4],I);let U=(L+1)%4;v.solid.tri(R[L],R[U],_[U],mm),v.solid.tri(R[L],_[U],_[L],mm)}let S=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*se,E=Math.hypot(m[0]-b[0],m[1]-b[1],m[2]-b[2]),T=L=>{let U=a.es;return[L[0]-U[0]*E*Math.cos(S)+a.n[0]*E*Math.sin(S),L[1]-U[1]*E*Math.cos(S)+a.n[1]*E*Math.sin(S),L[2]-U[2]*E*Math.cos(S)+a.n[2]*E*Math.sin(S)]},C=M(p,.065),A=M(m,.065),P=T(C),D=T(A);v.glass.tri(P,D,A,dm),v.glass.tri(P,A,C,dm);for(let[L,U]of[[P,D],[D,A],[A,C],[C,P]])v.lines.seg(L,U,I);if(x.cover>.02){let L=Math.min(1,x.cover),U=M(w(C,P,L),.01),B=M(w(A,D,L),.01),k=M(C,.01),V=M(A,.01);v.solid.tri(U,B,V,pm),v.solid.tri(U,V,k,pm);let j=Math.max(1,Math.round(E*L/.05));for(let G=1;G<=j;G++){let J=G/j;v.lines.seg(M(w(k,U,J),.004),M(w(V,B,J),.004),yM)}}}}function SM(i,t){var r;let e=((r=i.settings.roof)==null?void 0:r.solar)??[];if(!e.length||!t.length)return;let n=new Map(yr(i).map(s=>[s.key,s]));for(let s of e){let o=n.get(s.face);if(!o)continue;let a=o.section?t.find(l=>{var c;return(c=l.sections)==null?void 0:c.includes(o.section)}):t[0];a&&uh(a.solid,a.lines,o,s,a.floor.elevation+a.base)}}function uh(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=gM[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of po(e,n)){let[f,u,h,d]=c.corners.map(s);i.tri(f,u,h,o.glass),i.tri(f,h,d,o.glass),i.tri(f,h,u,o.glass),i.tri(f,d,h,o.glass);let g=(p,x=.004)=>[p[0]+e.n[0]*x,p[1]+e.n[1]*x,p[2]+e.n[2]*x],b=(p,x,y)=>[p[0]+(x[0]-p[0])*y,p[1]+(x[1]-p[1])*y,p[2]+(x[2]-p[2])*y],m=[f,u,h,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(m[p],m[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(b(f,u,p/a)),g(b(d,h,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(g(b(f,d,p/l)),g(b(u,h,p/l)),o.cells);for(let[p,x]of c.posts)t.seg(s(p),s(x),bM)}}function wM(i){let t=i.settings.roof,e=_M(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(E=>E[0])),r=e.rooms.flatMap(S=>S.points.map(E=>E[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=new te,u=new Le;if(t.type==="flat"){Ae(f,[[o,l],[a,l],[a,c],[o,c]],0,.25,mo,go,{bottom:!0});let S=.252;for(let[E,T]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([E[0],S,E[1]],[T[0],S,T[1]],_r),u.seg([E[0],0,E[1]],[T[0],0,T[1]],cs);return{floor:e,base:e.height,solid:f,lines:u,glass:new te}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,g=(d?c-l:a-o)/2,b=g*Math.tan(t.pitch*se),m=(S,E,T)=>d?[S,T,(l+c)/2+E]:[(o+a)/2+E,T,S],[p,x]=d?[o,a]:[l,c],y=new Z(go),v=new Z(mo),M=(S,E,T,C,A)=>{f.tri(S,E,T,A),f.tri(S,T,C,A)};for(let S of[-1,1]){M(m(p,S*g,0),m(x,S*g,0),m(x,0,b),m(p,0,b),y),M(m(p,S*g,-Ge),m(p,0,b-Ge),m(x,0,b-Ge),m(x,S*g,-Ge),v),M(m(p,S*g,-Ge),m(x,S*g,-Ge),m(x,S*g,0),m(p,S*g,0),v);for(let E of[p,x])M(m(E,S*g,-Ge),m(E,S*g,0),m(E,0,b),m(E,0,b-Ge),v);u.seg(m(p,S*g,0),m(x,S*g,0),cs);for(let E of[p,x])u.seg(m(E,S*g,0),m(E,0,b),cs)}let w=t.overhang,I=new Z(gm),_=g-w,R=_*Math.tan(t.pitch*se);for(let S of[p+w,x-w])f.tri(m(S,-_,-Ge),m(S,_,-Ge),m(S,0,R-Ge),I),f.tri(m(S,_,-Ge),m(S,-_,-Ge),m(S,0,R-Ge),I);return u.seg(m(p,0,b+.004),m(x,0,b+.004),_r),{floor:e,base:e.height,solid:f,lines:u,glass:new te}}function TM(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(yr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=yp(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new te,lines:new Le,glass:new te,sections:[],lift:!o.open}),c.sections.push(o.id);let f=kl(t,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!f,h=t.filter(b=>b!==o&&kl(t,b)===o).flatMap(b=>xp(o,b));for(let b of i.settings.roof.windows??[]){let m=s.get(b.face),p=m&&m.section===o.id?Jl(m,b):null;if(!p)continue;let x=p.map(y=>Gi(o,y[0],y[2]));h.push({u0:Math.min(...x.map(y=>y[0])),u1:Math.max(...x.map(y=>y[0])),v0:Math.min(...x.map(y=>y[1])),v1:Math.max(...x.map(y=>y[1]))})}let d=f?Ku(f,o):o,g=null;if(f){let b=ti(d),m=os(f,{u0:0,u1:0,a:0,b:0}),p=x=>{let[y,v]=b.at(x,b.w/2),[M,w]=Gi(f,y,v);return lo(m,M,w)??wn(f).y(w)};g=p(b.u0)<=p(b.u1)?0:1}EM(c.solid,c.lines,d,zl(i,d,d.overhang??e),a.elevation,c.glass,u,h,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function EM(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=ti(e),f=wn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,h=Math.max(0,u.a),d=Math.max(0,u.b),g=c.w,b=c.u0-Math.max(0,u.u0),m=c.u1+Math.max(0,u.u1),p=(C,A,P)=>{let[D,L]=c.at(C,A);return[D,P-r,L]},x=new Z(go),y=new Z(mo),v=new Z(gm),M=(C,A)=>{for(let P=1;P+1<C.length;P++)i.tri(C[0],C[P],C[P+1],A)},w=[],I=[],_=[],R=null;if(e.shape==="flat"||e.shape==="parapet"){let C=e.eave_a,A=e.shape==="parapet",P=e.points&&e.points.length>=3?mp(e,A?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):A?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(b,-h),c.at(m,-h),c.at(m,g+d),c.at(b,g+d)];Ae(i,P,C-r,C-r+.25,mo,go,{bottom:!0});for(let D=0;D<P.length;D++){let L=P[D],U=P[(D+1)%P.length];t.seg([L[0],C-r+.252,L[1]],[U[0],C-r+.252,U[1]],_r),t.seg([L[0],C-r,L[1]],[U[0],C-r,U[1]],cs)}if(A){let D=k=>jn(k)>=0?k:[...k].reverse(),L=D(P),U=Bl(L,-.2),B=L.length;for(let k=0;k<B;k++){let V=D([L[k],L[(k+1)%B],U[(k+1)%B],U[k]]);Ae(i,V,C-r+.25,C-r+.65,mo,go),t.seg([L[k][0],C-r+.652,L[k][1]],[L[(k+1)%B][0],C-r+.652,L[(k+1)%B][1]],_r),t.seg([U[k][0],C-r+.652,U[k][1]],[U[(k+1)%B][0],C-r+.652,U[(k+1)%B][1]],_r)}}}else{let C=os(e,u);w=C.faces;for(let A of a)w=w.flatMap(P=>vp(P,A));I=C.rim,_=C.ridges,R=C.gable}let S=!!e.open,E=new Z(dM);for(let C of w){if(S){for(let A=1;A+1<C.length;A++)s.tri(p(C[0][0],C[0][1],C[0][2]),p(C[A][0],C[A][1],C[A][2]),p(C[A+1][0],C[A+1][1],C[A+1][2]),E);continue}M(C.map(([A,P,D])=>p(A,P,D)),x),M(C.map(([A,P,D])=>p(A,P,D-Ge)),y)}for(let C=0;C<I.length;C++){let[A,P,D]=I[C],[L,U,B]=I[(C+1)%I.length];S||M([p(A,P,D),p(L,U,B),p(L,U,B-Ge),p(A,P,D-Ge)],y),t.seg(p(A,P,D),p(L,U,B),S?_r:cs)}if(S){AM(i,t,c,f,u,p,r);return}for(let[[C,A,P],[D,L,U]]of _)t.seg(p(C,A,P+.004),p(D,L,U+.004),_r);let T=e.base;if(!o){if(R){let C=RM(R,T-Ge),A=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(C.length>=3)for(let P of A)M(C.map(([D,L])=>p(P,D,L)),v)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let C of[0,g]){let A=f.y(C)-Ge;A>T+.02&&M([p(c.u0,C,T),p(c.u1,C,T),p(c.u1,C,A),p(c.u0,C,A)],v)}else if(e.eave_a>T+.02)for(let[C,A,P,D]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])M([p(C,A,T),p(P,D,T),p(P,D,e.eave_a),p(C,A,e.eave_a)],v)}}function AM(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,f=r.a>0,u=r.b>0,h=r.u0>0,d=r.u1>0,g=(p,x,y,v,M,w)=>{let I=[e.at(p,y),e.at(x,y),e.at(x,v),e.at(p,v)],_=(I[1][0]-I[0][0])*(I[2][1]-I[0][1])-(I[2][0]-I[0][0])*(I[1][1]-I[0][1]);Ae(i,_<0?[...I].reverse():I,M-o,w-o,pM,mM,{bottom:!0})},b=o;for(let[p,x]of[[0,f],[a,u]]){if(!x)continue;let y=n.y(p)-.03,v=p===0?0:a-l;g(e.u0,e.u1,v,v+l,y-c,y),t.seg(s(e.u0,p,y-c),s(e.u1,p,y-c),cs)}for(let[p,x]of[[e.u0,h],[e.u1-l,d]])if(x)for(let y=0;y<6;y++){let v=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(v),n.y(M))-.03;g(p,p+l,v,M,w-c,w)}let m=[];for(let[p,x]of[[0,f],[a-l,u]]){if(!x)continue;let y=e.u1-e.u0-l,v=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=v;M++){let w=e.u0+y*M/v;M===0&&!h||M===v&&!d||m.push([w,p])}}if(!f&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&h||p!==e.u0&&d)&&m.push([p,a/2-l/2]);for(let[p,x]of m){let y=n.y(x+l/2)-.03-c;g(p,p+l,x,x+l,b,y)}}function RM(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var bo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},xm={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},Je=.2,CM=.01,xo=8,Ql=.42,hh=.42;function Mm(i,t,e,n=[],r=[],s){let{walls:o,open:a}=mi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,C,A,P)=>{let D=P!=null&&P.slope?Math.min(A,hp(P.slope,T,C)):A,L=s?s(T,C):null;return L===null?D:Math.max(.05,Math.min(D,L))},c=(T,C,A,P,D,L)=>{if(!s&&!(L!=null&&L.slope))return D;let U=D,B=Math.max(2,Math.ceil((P-A)/.25)+1);for(let k=0;k<B;k++){let V=A+(P-A)*k/(B-1);U=Math.min(U,l(T[0]+C[0]*V,T[1]+C[1]*V,D,L))}return U},f=new te(!0,!0),u=[],h=new Le,d=[];for(let T of i.rooms){if(T.points.length<3)continue;let C=ec(T.points),A=xm[T.floor_material]??xm.wood,P=new Z(A.color),D=n.flatMap(j=>{if(Tp(j,C))return[j];if(!Mp(j))return[];let G=as(C,j);return G.length>=3&&Math.abs(jn(G))>.01?[ec(G)]:[]}),L=wp(D).map(j=>Ep(ec(j),.003));d.push(...L);let U=[...C,...L.flat()],B=f.count;for(let[j,G,J]of ei(C,L)){let et=U[j],ht=U[G],H=U[J];f.tri([et[0],0,et[1]],[H[0],0,H[1]],[ht[0],0,ht[1]],P,P,P,[et[0],et[1],H[0],H[1],ht[0],ht[1]],Yt,A.tile)}u.push({roomId:T.id,start:B,end:f.count,color:A.color});let k=new Z(bo.slab),V=j=>{for(let G=0;G<j.length;G++){let J=j[G],et=j[(G+1)%j.length];f.tri([J[0],-Je,J[1]],[J[0],0,J[1]],[et[0],0,et[1]],k),f.tri([J[0],-Je,J[1]],[et[0],0,et[1]],[et[0],-Je,et[1]],k)}};V(C);for(let j of L){V([...ec(j)].reverse());for(let G=0;G<j.length;G++){let J=j[G],et=j[(G+1)%j.length];h.seg([J[0],.006,J[1]],[et[0],.006,et[1]],pr),h.seg([J[0],-Je,J[1]],[et[0],-Je,et[1]],Wi)}}}let g=new Map,b=[],m=new Map;for(let T of o){let C="interior",A=null;if(T.exterior){let D=T.b[0]-T.a[0],L=T.b[1]-T.a[1],U=Math.hypot(D,L)||1,B=[L/U,-D/U],k=(Math.round(Math.atan2(B[1],B[0])/(2*Math.PI)*xo)%xo+xo)%xo;C=`s${k}`;let V=k/xo*2*Math.PI;A=[Math.cos(V),Math.sin(V)]}let P=g.get(C);P===void 0&&(P=b.length,g.set(C,P),b.push(A)),m.set(T,P)}let p=new Map,x=[];for(let T of i.openings){let C=ro(T,i.rooms,i.walls??[]);if(!C)continue;let A=so(o,T,C);if(!A)continue;let{wall:P,s:D}=A,L=ic([P.b[0]-P.a[0],P.b[1]-P.a[1]]),U=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),B=Math.min(T.width,U),k=Math.max(0,Math.min(U-B,D-B/2)),V=C.room.points,j=P.free?L[0]*(V[1][0]-V[0][0])+L[1]*(V[1][1]-V[0][1])>0:P.exterior||P.roomLeft===T.room_id,G=[-L[1],L[0]],J=j?G:[-G[0],-G[1]],et=Math.min(c(P.a,L,k,k+B,tc(P,i.height),P)-.02,T.sill+T.height),ht=Math.max(0,Math.min(T.sill,et-.1)),H=[J[1],-J[0]],X=L[0]*H[0]+L[1]*H[1]>0,rt={opening:T,bucket:m.get(P),start:[P.a[0]+L[0]*k,P.a[1]+L[1]*k],axis:L,width:B,toRoom:J,faceRoom:j?P.left:P.right,faceOut:j?P.right:P.left,sill:ht,top:et,hingeAtStart:T.hinge==="left"===X,exterior:P.exterior};x.push(rt);let at=p.get(P);at||p.set(P,at=[]),at.push({s0:k,s1:k+B,sill:ht,top:et,info:rt})}let y=Math.min(i.cut_height,i.height),v=new te;for(let T of o){let C=m.get(T),A=ic([T.b[0]-T.a[0],T.b[1]-T.a[1]]),P=(p.get(T)??[]).sort((G,J)=>G.s0-J.s0),D=tc(T,i.height),L=[],U=[-1/0,...new Set(P.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,J)=>G-J);for(let G=0;G+1<U.length;G++){let J=U[G],et=U[G+1];if(et-J<1e-6)continue;let ht=Number.isFinite(J)&&Number.isFinite(et)?(J+et)/2:Number.isFinite(J)?J+1:et-1,H=P.filter(at=>at.s0<ht&&at.s1>ht).map(at=>[at.sill,at.top]).sort((at,ut)=>at[0]-ut[0]),X=[],rt=-Je;for(let[at,ut]of H)at>rt+1e-4&&X.push([rt,at<1e-4?-CM:at]),rt=Math.max(rt,ut);D>rt+1e-4&&X.push([rt,D]),L.push({t0:J,t1:et,ranges:X})}let B=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),k=(s||T.slope)&&c(T.a,A,0,B,D,T)<D-.001,V=k?L.flatMap(G=>{let J=Math.max(G.t0,-.5),et=Math.min(G.t1,B+.5),ht=Math.max(1,Math.ceil((et-J)/.3));return Array.from({length:ht},(H,X)=>({t0:X===0?G.t0:J+(et-J)*X/ht,t1:X===ht-1?G.t1:J+(et-J)*(X+1)/ht,ranges:G.ranges,inner0:X>0,inner1:X<ht-1}))}):L.map(G=>({...G,inner0:!1,inner1:!1})),j=G=>(G[0]-T.a[0])*A[0]+(G[1]-T.a[1])*A[1];for(let G of V){let J=IM(T.footprint,T.a,A,G.t0,G.t1);if(J.length<3)continue;let et=(X,rt)=>Math.abs(j(X)-rt)<1e-4,ht=(X,rt)=>G.inner0&&et(X,G.t0)&&et(rt,G.t0)||G.inner1&&et(X,G.t1)&&et(rt,G.t1),H=k?Math.min(...J.map(([X,rt])=>l(X,rt,D,T))):D;for(let[X,rt]of G.ranges){let at=Math.min(rt,k?Math.max(...J.map(([Mt,kt])=>l(Mt,kt,D,T))):rt);if(at-X<1e-4||H-X<.01)continue;let ut=X>.01,pt=k&&rt>H,gt=(Mt,kt)=>Math.min(rt,l(Mt,kt,D,T));if(X<y-1e-6){let Mt=at>y+1e-6?Op+C:mr+C,kt=pt&&H<y?(re,Vt)=>Math.min(y,gt(re,Vt)):Math.min(at,y);Ae(v,J,X,kt,bo.wall,bo.wallTop,{aoFrom:0,bottom:ut,fold:mr+C,topFold:Mt,skipSide:ht})}at>y+1e-6&&H>y+1e-6&&Ae(v,J,Math.max(X,y),pt?gt:at,bo.wall,bo.wallTop,{aoFrom:0,fold:C,bottom:ut&&X>=y,skipSide:ht})}}}let M=o.flatMap(T=>T.footprint),w=FM(o,M),I=new Le;I.p.push(...h.p),I.c.push(...h.c),I.f.push(...h.f);let _=(T,C)=>(p.get(T)??[]).filter(C);for(let T of w.edges){let C=m.get(T.wall);for(let[P,D]of nc(T,_(T.wall,L=>L.sill<=.005)))I.seg([P[0],.004,P[1]],[D[0],.004,D[1]],Np);for(let[P,D]of nc(T,_(T.wall,L=>L.sill<y&&L.top>y)))I.seg([P[0],y,P[1]],[D[0],y,D[1]],th,Hl+C);let A=tc(T.wall,i.height);for(let[P,D]of nc(T,_(T.wall,L=>L.top>=A-.021))){if(!s&&!T.wall.slope){I.seg([P[0],A,P[1]],[D[0],A,D[1]],pr,A<=y+1e-6?mr+C:C);continue}let L=Math.max(1,Math.ceil(Math.hypot(D[0]-P[0],D[1]-P[1])/.3));for(let U=0;U<L;U++){let B=[P[0]+(D[0]-P[0])*U/L,P[1]+(D[1]-P[1])*U/L],k=[P[0]+(D[0]-P[0])*(U+1)/L,P[1]+(D[1]-P[1])*(U+1)/L],V=l(B[0],B[1],A,T.wall),j=l(k[0],k[1],A,T.wall);I.seg([B[0],V,B[1]],[k[0],j,k[1]],pr,Math.max(V,j)<=y+1e-6?mr+C:C)}}}for(let T of w.corners){let C=l(T.p[0],T.p[1],tc(T.wall,i.height),T.wall);I.segSplit([T.p[0],.004,T.p[1]],[T.p[0],C,T.p[1]],Wi,Math.min(y,C),m.get(T.wall))}for(let T of p.values())for(let C of T)PM(I,C,y);let R=DM(w.edges,i.rooms,p),S=new te;sm(v,I,i,S);for(let T of r)uh(v,I,T.face,T.field,i.elevation);let E=[];for(let T of i.furniture){if(ip(T.type))continue;let C=v.count,A=I.p.length/6,P=Ze(i,T);Yl(v,I,R,T,P),P+T.h>y+.05&&(Up(v,C,y,eh),Bp(I,A,y,eh)),E.push({id:T.id,start:C,end:v.count})}return{floor:f.geometry(),roomTris:u,holes:d,walls:v.geometry(),water:S.geometry(),lines:I.geometry(),shadow:R.geometry(),buckets:b,openings:x,walls2d:o,openRooms:a,wallBuckets:o.map(T=>m.get(T)),furnitureTris:E,roofUnder:s}}function PM(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,f)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,f,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Yt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Wi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Wi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Wi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Wi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Wi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),th,Hl+r)}function IM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=vm(o,a=>s(a)-n)),Number.isFinite(r)&&(o=vm(o,a=>r-s(a))),o}function vm(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var ym=i=>Math.round(i*1e3),vo=i=>`${ym(i[0])},${ym(i[1])}`,_m=(i,t)=>{let e=vo(i),n=vo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function LM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let h=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((u,h)=>u-h);let f=r;for(let u of c){let h=[r[0]+o*u,r[1]+a*u];vo(h)!==vo(f)&&e.push([f,h]),f=h}e.push([f,s])}return e}function FM(i,t){let e=i.map(l=>({wall:l,edges:LM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,f]of l){let u=_m(c,f);n.set(u,(n.get(u)??0)+1)}let r=[],s=new Map,o=(l,c,f)=>{let u=vo(l),h=s.get(u);h||s.set(u,h={p:l,wall:c,d:[]}),h.d.push(f)};for(let{wall:l,edges:c}of e)for(let[f,u]of c){if(n.get(_m(f,u))!==1)continue;let h=Math.hypot(u[0]-f[0],u[1]-f[1]);if(h<1e-4)continue;r.push({a:f,b:u,wall:l});let d=[(u[0]-f[0])/h,(u[1]-f[1])/h];o(f,l,d),o(u,l,d)}let a=[];for(let{p:l,wall:c,d:f}of s.values())f.some(u=>f.some(h=>Math.abs(u[0]*h[1]-u[1]*h[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function nc(i,t){if(!t.length)return[[i.a,i.b]];let e=ic([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=ic([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([h,d])=>{if(u.s1<=h||u.s0>=d)return[[h,d]];let g=[];return u.s0>h&&g.push([h,u.s0]),u.s1<d&&g.push([u.s1,d]),g});let f=u=>{let h=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([u,h])=>h-u>1e-4).map(([u,h])=>s<=o?[f(u),f(h)]:[f(h),f(u)])}function DM(i,t,e){let n=new te,r=new Z(hh,hh,hh),s=new Z(1,1,1),o=.002;for(let a of i)for(let[l,c]of nc(a,(e.get(a.wall)??[]).filter(f=>f.sill<=.005))){let f=c[0]-l[0],u=c[1]-l[1],h=Math.hypot(f,u);if(h<.05)continue;let d=[u/h,-f/h],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Jt(g,p.points)))continue;let b=[l[0]+d[0]*Ql,l[1]+d[1]*Ql],m=[c[0]+d[0]*Ql,c[1]+d[1]*Ql];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[m[0],o,m[1]],r,s,s),n.tri([l[0],o,l[1]],[m[0],o,m[1]],[c[0],o,c[1]],r,s,r)}return n}function Sm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(zi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>{var o;return(ep.has(s.type)||((o=Te(s.type))==null?void 0:o.hole))&&n.elevation+s.h>=t.elevation-.3}).map(zi);return[...e,...r]}function tc(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function ic(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function ec(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var NM=new Z(1516340),OM=new Z(527897),fh=new Z(1779256),yo=new Z(1120808),UM=new Z(4163256),wm=new Z(5995161),BM=new Z(2240842),kM=new Z(1318704),zM=.35,us=.8,VM=.2,Tm=.1;function GM(i,t){var n;if(((n=i.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=Em(i,t);return!!e&&e.some(([r,s])=>Fl(r,s)-t.elevation>-.15)}function Em(i,t){return t.rooms.some(e=>e.points.length>=3)?gp(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function HM(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||On(o.type)||!Jt(e,o.points)||(r=Math.max(r,s.elevation+hr(s,o)+is[o.type]-t.elevation));return r>n?r-n:0}function Am(i,t,e,n=!1){var g;if(((g=i.settings.terrain)==null?void 0:g.earth)===!1||t.elevation>.3)return null;let r=Em(i,t);if(!r)return null;let s=(b,m)=>Fl(b,m)-t.elevation,o=n&&r.some(([b,m])=>s(b,m)<-Je-.03);if(!o&&!GM(i,t))return null;let a=t.height,l=-zM,c=(b,m)=>Math.min(a,Fl(b,m)-t.elevation),f=new te,u=new te,h=new Le,d=(b,m,p,x,y,v,M,w)=>{let I=[m[0]-b[0],m[2]-b[2]];-I[1]*y[0]+I[0]*y[1]>0?(w.tri(b,m,p,v,v,M),w.tri(b,p,x,v,M,M)):(w.tri(b,p,m,v,M,v),w.tri(b,x,p,v,M,M))};for(let b=0;b<r.length;b++){let m=r[b],p=r[(b+1)%r.length],x=Math.hypot(p[0]-m[0],p[1]-m[1]);if(x<1e-4)continue;let y=[(p[0]-m[0])/x,(p[1]-m[1])/x],v=[y[1],-y[0]],M=[(m[0]+p[0])/2+v[0]*.05,(m[1]+p[1])/2+v[1]*.05];Jt(M,r)&&(v=[-v[0],-v[1]]);let w=(E,T=.012)=>[m[0]+y[0]*E+v[0]*T,m[1]+y[1]*E+v[1]*T],I=[];for(let E of e){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let T=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,C=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,A=(T-m[0])*y[0]+(C-m[1])*y[1];Math.abs((T-m[0])*v[0]+(C-m[1])*v[1])>.08||A<-.05||A>x+.05||E.sill>=c(T,C)-.05||I.push({s0:Math.max(0,A-E.width/2-Tm),s1:Math.min(x,A+E.width/2+Tm),bottom:Math.max(l+.05,E.sill-VM),rim:E.opening.well_rim??0})}let _=new Set([0,x]);for(let E of I)_.add(E.s0),_.add(E.s1);let R=[..._].sort((E,T)=>E-T),S=[];for(let E=0;E<R.length-1;E++){let T=Math.max(1,Math.ceil((R[E+1]-R[E])/.5));for(let C=0;C<T;C++)S.push(R[E]+(R[E+1]-R[E])*C/T)}S.push(x);for(let E=0;E<S.length-1;E++){let T=S[E],C=S[E+1],A=I.find(G=>T>=G.s0-1e-6&&C<=G.s1+1e-6),P=w(T),D=w(C),L=c(P[0],P[1]),U=c(D[0],D[1]),B=A?Math.min(L,A.bottom):L,k=A?Math.min(U,A.bottom):U;if(B>l+.01||k>l+.01){let G=Math.min(B,l),J=Math.min(k,l);d([P[0],G,P[1]],[D[0],J,D[1]],[D[0],Math.max(k,l),D[1]],[P[0],Math.max(B,l),P[1]],v,OM,NM,f)}let V=s(P[0],P[1]),j=s(D[0],D[1]);if(o&&(V<-Je-.01||j<-Je-.01)&&d([P[0],Math.min(V,-Je),P[1]],[D[0],Math.min(j,-Je),D[1]],[D[0],-Je,D[1]],[P[0],-Je,P[1]],v,kM,BM,f),L>l||U>l||o&&(V<-Je||j<-Je)){let G=o?Math.min(V,Math.max(L,l)):Math.max(L,l),J=o?Math.min(j,Math.max(U,l)):Math.max(U,l);h.seg([P[0],G+.004,P[1]],[D[0],J+.004,D[1]],UM)}}for(let E of I){let T=w(E.s0,0),C=w(E.s1,0),A=[T[0]+v[0]*us,T[1]+v[1]*us],P=[C[0]+v[0]*us,C[1]+v[1]*us],D=[(T[0]+C[0]+A[0]+P[0])/4,(T[1]+C[1]+A[1]+P[1])/4],L=HM(i,t,D,c(D[0],D[1])),U=Math.max(E.rim,L>0?L+.02:0),B=et=>c(et[0],et[1])+U,k=E.bottom,V=(et,ht)=>[et[0],ht,et[1]];u.tri(V(T,k),V(C,k),V(P,k),yo),u.tri(V(T,k),V(P,k),V(A,k),yo);let j=(et,ht)=>{u.tri(V(et,k),V(ht,k),V(ht,B(ht)),yo,yo,fh),u.tri(V(et,k),V(ht,B(ht)),V(et,B(et)),yo,fh,fh)};j(T,A),j(C,P),j(A,P);let G=et=>[et[0],B(et)+.01,et[1]];for(let[et,ht]of[[T,C],[C,P],[P,A],[A,T]])h.seg(G(et),G(ht),wm);let J=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let et=1;et<J;et++){let ht=et/J,H=[T[0]+(C[0]-T[0])*ht,T[1]+(C[1]-T[1])*ht];h.seg(G(H),G([H[0]+v[0]*us,H[1]+v[1]*us]),wm)}}}return f.count||u.count?{earth:f,wells:u,lines:h}:null}var Rm=i=>Math.round(i*1e3)/1e3;function WM(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,f)=>{let u=l.points[(f+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function Cm(i,t,e,n,r,s=.05){let o=i.rooms.find(h=>h.points.length>=3&&Jt([t.x,t.z],h.points));if(!o)return[e,n];let a=o.points,l=Un(a)>=0?1:-1,c=zi({...t}),f=e,u=n;for(let h=0;h<2;h++){let d=zi({...t,x:f,z:u});for(let g=0;g<a.length;g++){let b=a[g],m=a[(g+1)%a.length],p=Math.hypot(m[0]-b[0],m[1]-b[1]);if(p<.05)continue;let x=[(m[0]-b[0])/p,(m[1]-b[1])/p],y=[-x[1]*l,x[0]*l],v=WM(i,o.id,b,m)?r/2:0,M=0;d.forEach((w,I)=>{let _=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(_<-.01||_>p+.01)return;let R=(w[0]-b[0])*y[0]+(w[1]-b[1])*y[1]-v,S=c[I];(S[0]-b[0])*y[0]+(S[1]-b[1])*y[1]-v<-s||R<M&&(M=R)}),M<-1e-4&&(f-=y[0]*M,u-=y[1]*M)}}return[Rm(f),Rm(u)]}var XM=500,Pm=.12,Im=1.35,YM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,rc=class{view={target:new W,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:f}=this.flight,u=Math.min(1,(t-c)/f),h=YM(u);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=dh(this.view.phi+this.velocity.phi,Pm,Im),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s=this.angleLock?{target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:n.theta,phi:n.phi}:{target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},XM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){var s,o,a,l,c,f;let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){(o=(s=this.events).swipeMove)==null||o.call(s,t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let u=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&((l=(a=this.events).swipeStart)!=null&&l.call(a,this.down.x-u.left,this.down.y-u.top,t.clientX-this.down.x,t.clientY-this.down.y))){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},(f=(c=this.events).swipeMove)==null||f.call(c,t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let u=e.type==="mouse";if(u&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!u))this.pan(n,r);else{let d=this.el.clientHeight||1,g=-n/d*3.2,b=-r/d*2.4;this.view.theta+=g,this.view.phi=dh(this.view.phi+b,Pm,Im),this.velocity={theta:g,phi:b}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let u=this.pinchState();this.pinch&&u&&(this.zoom(this.pinch.dist/Math.max(1,u.dist)),this.pan(u.mid[0]-this.pinch.mid[0],u.mid[1]-this.pinch.mid[1])),this.pinch=u}this.events.change()}onUp(t){var e,n,r,s;if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),(n=(e=this.events).drop)==null||n.call(e);return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,(s=(r=this.events).swipeEnd)==null||s.call(r);return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let o=this.el.getBoundingClientRect(),a=t.clientX-o.left,l=t.clientY-o.top,c=performance.now();c-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(a,l)):(this.lastTap=c,this.events.tap(a,l))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=dh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new W(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new W(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function dh(i,t,e){return Math.min(e,Math.max(t,i))}function ni(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var ac=5,sc=512,Lm=.7,oc=class{projectors=new Map;loader=new sr;loggedIds="";depthMaterial=new Qt({colorWrite:!1,side:ue});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new qe(sc,sc);a.depthTexture=new Yn(sc,sc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Xe(60,16/9,Lm,40),target:a,matrix:new ye,uniforms:{uProjMat:{value:new ye},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(ac),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{var s;if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ce;let r=n.image;r!=null&&r.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r==null?void 0:r.width,"x",r==null?void 0:r.height),(s=t.texture)==null||s.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){var o,a;for(let l of this.projectors.values()){let c=l.texture?r(l.id):null;if(l.texture&&!c&&!l.noPoseLogged&&(l.noPoseLogged=!0,console.warn(`NeonPlan lab: ${l.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!c){for(let p of l.overlays.values())p.visible=!1;continue}let f=new Set(n.map(p=>p.key));for(let[p,x]of l.overlays)f.has(p)||((o=x.parent)==null||o.remove(x),x.material.dispose(),l.overlays.delete(p));for(let p of n){let x=l.overlays.get(p.key);(!x||x.parent!==p.parent)&&(x&&((a=x.parent)==null||a.remove(x),x.material.dispose()),x=new Ot(p.geometry,this.material(l,p.masks)),x.renderOrder=2.5,x.frustumCulled=!1,p.parent.add(x),l.overlays.set(p.key,x)),x.geometry!==p.geometry&&(x.geometry=p.geometry),x.visible=p.visible}let u=`${c.position.toArray().map(p=>p.toFixed(3))},${c.direction.toArray().map(p=>p.toFixed(3))},${c.fov},${c.reach},${l.aspect.toFixed(3)},${s}`;if(u===l.poseKey)continue;l.poseKey=u;let h=l.camera,d=Math.min(150,Math.max(20,c.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(d/2)/l.aspect)*180/Math.PI,h.aspect=l.aspect,h.far=c.reach,h.near=Lm,h.position.copy(c.position),h.lookAt(c.position.clone().add(c.direction)),h.updateProjectionMatrix(),l.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),l.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let g=[];for(let p of this.projectors.values())for(let x of p.overlays.values())x.visible&&g.push(x);for(let p of g)p.visible=!1;let b=t.getRenderTarget(),m=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(l.target),t.clear(),t.render(e,h),t.setRenderTarget(b),e.overrideMaterial=m;for(let p of g)p.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){var e,n;for(let r of t.overlays.values())(e=r.parent)==null||e.remove(r),r.material.dispose();(n=t.texture)==null||n.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Qt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?ni(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r==null||r(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
uniform mat4 uProjMat;
varying vec4 vProj;`).replace("#include <project_vertex>",`#include <project_vertex>
vProj = uProjMat * modelMatrix * vec4(transformed, 1.0);`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uProjTex;
uniform sampler2D uDepth;
uniform vec2 uNearFar;
varying vec4 vProj;
float fp3dLinear(float d) { float z = d * 2.0 - 1.0; return 2.0 * uNearFar.x * uNearFar.y / (uNearFar.y + uNearFar.x - z * (uNearFar.y - uNearFar.x)); }`).replace("#include <color_fragment>",`#include <color_fragment>
          if (vProj.w <= 0.0) discard;
          vec3 fp3dNdc = vProj.xyz / vProj.w;
          if (abs(fp3dNdc.x) > 1.0 || abs(fp3dNdc.y) > 1.0 || abs(fp3dNdc.z) > 1.0) discard;
          vec2 fp3dUv = fp3dNdc.xy * 0.5 + 0.5;
          // hidden from the camera (something nearer in its depth picture): no picture here; compared in metres
          float fp3dSeen = fp3dLinear(texture2D(uDepth, fp3dUv).x);
          float fp3dHere = fp3dLinear(fp3dNdc.z * 0.5 + 0.5);
          if (fp3dHere > fp3dSeen + 0.06 + 0.01 * fp3dHere) discard;
          vec4 fp3dPic = texture2D(uProjTex, fp3dUv);
          float fp3dEdge = smoothstep(0.0, 0.05, min(min(fp3dUv.x, 1.0 - fp3dUv.x), min(fp3dUv.y, 1.0 - fp3dUv.y)));
          // far away the picture fades out (what lies near the horizon would be smeared across the whole plot)
          float fp3dFar = 1.0 - smoothstep(0.65 * uNearFar.y, uNearFar.y, fp3dHere);
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Fm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function Dm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=Fm(s,o),c=Fm(o,a),f=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],h=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(f<.005||u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*f,o[1]+u[1]*f,o[2]+u[2]*f],g=[o[0]+h[0]*f,o[1]+h[1]*f,o[2]+h[2]*f];for(let b=0;b<=e;b++){let m=b/e,p=(1-m)*(1-m),x=2*(1-m)*m,y=m*m;n.push([p*d[0]+x*o[0]+y*g[0],p*d[1]+x*o[1]+y*g[1],p*d[2]+x*o[2]+y*g[2]])}}return n.push(i[i.length-1]),n}var Nm=new Z(7568261),Om=new Z(4869974),qM=new Z(3116287),Um=new Z(3948872),ph=Mr([.35,.85,.4]),Bm=10;function Mr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function _o(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function km(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Mr(_o(i,t));return[e,Mr(_o(i,e))]}function gi(i,t){let e=.5+.5*Math.max(0,t[0]*ph[0]+t[1]*ph[1]+t[2]*ph[2]);return i.clone().multiplyScalar(e)}function hs(i,t,e,n,r,s=!1){let o=Mr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=km(o),c=(f,u)=>{let h=u/Bm*Math.PI*2,d=[a[0]*Math.cos(h)+l[0]*Math.sin(h),a[1]*Math.cos(h)+l[1]*Math.sin(h),a[2]*Math.cos(h)+l[2]*Math.sin(h)];return{p:[f[0]+d[0]*n,f[1]+d[1]*n,f[2]+d[2]*n],n:d}};for(let f=0;f<Bm;f++){let u=c(t,f),h=c(t,f+1),d=c(e,f),g=c(e,f+1);i.tri(u.p,g.p,d.p,gi(r,u.n),gi(r,g.n),gi(r,d.n)),i.tri(u.p,h.p,g.p,gi(r,u.n),gi(r,h.n),gi(r,g.n)),s&&(i.tri([...t],h.p,u.p,gi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,g.p,gi(r,o)))}}function $M(i,t,e,n,r,s,o,a){let l=Mr(_o(e,n)),c=(u,h,d)=>[t[0]+e[0]*u*r+n[0]*h*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*h*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*h*s+l[2]*d*o],f=[];for(let[u,h]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])f.push([u,[c(h,-.5,-.5),c(h,.5,-.5),c(h,.5,.5),c(h,-.5,.5)]]);for(let[u,h]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])f.push([u,[c(-.5,h,-.5),c(.5,h,-.5),c(.5,h,.5),c(-.5,h,.5)]]);for(let[u,h]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])f.push([u,[c(-.5,-.5,h),c(.5,-.5,h),c(.5,.5,h),c(-.5,.5,h)]]);for(let[u,h]of f){let d=gi(a,u);i.tri(h[0],h[1],h[2],d),i.tri(h[0],h[2],h[3],d),i.tri(h[0],h[2],h[1],d),i.tri(h[0],h[3],h[2],d)}}function zm(i,t){if(t.points.length<2)return;let e=t.radius,n=Dm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?Nm.clone().multiplyScalar(.55):Nm;hs(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);hs(i,o,a,e*1.22,Om,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);hs(i,o,a,e*1.08,t.water?new Z(...t.water).multiplyScalar(.9):new Z(10475240),!0);for(let l of s(.08)){let[c,f]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];hs(i,c,f,e*1.3,Om,!0)}}else{let[o,a]=s(.055);hs(i,o,a,e*1.4,Um,!0);let[l]=km(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],f=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];hs(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],f,e*.35,Um,!0);let u=r.open===!1?Mr(_o(r.dir,c)):r.dir,h=Mr(_o(u,c)),d=[f[0]+u[0]*.045,f[1]+u[1]*.045,f[2]+u[2]*.045];$M(i,d,u,h,.1,.028,.012,qM)}}}var mh=1.62,lc=.2,gh=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=mi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=ro(a,e.rooms,e.walls??[]);if(!c)continue;let f=so(this.walls,a,c);if(!f)continue;let u=o.get(f.wall)??[];u.push([f.s-a.width/2+.05,f.s+a.width/2-.05]),o.set(f.wall,u);let h=f.wall,d=h.b[0]-h.a[0],g=h.b[1]-h.a[1],b=Math.hypot(d,g)||1,m=d/b,p=g/b,x=[h.a[0]+m*f.s,h.a[1]+p*f.s],y=h.left+.45,v=h.right+.45;this.doors.push({centre:x,p:[[x[0]-p*y,x[1]+m*y],[x[0]+p*v,x[1]-m*v]]})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c);f<1e-6||this.solids.push({a:a.a,u:[l/f,c/f],len:f,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=lc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=lc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=lc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let g=this.path(d,e);return g?[d,...g]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let g=this.path(t,d);return g?[...g,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>ZM(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let g=lc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([m,p])=>[d.c[0]+d.u[0]*m*(d.hw+g)+b[0]*p*(d.hd+g),d.c[1]+d.u[1]*m*(d.hw+g)+b[1]*p*(d.hd+g)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let f=new Map,u=(d,g)=>{let b=d<g?`${d}:${g}`:`${g}:${d}`,m=f.get(b);return m===void 0&&(m=this.clear(s[d],s[g]),f.set(b,m)),m};for(;;){let d=-1;for(let g=0;g<o;g++)!c[g]&&a[g]<1/0&&(d<0||a[g]<a[d])&&(d=g);if(d<0)return null;if(d===1)break;c[d]=!0;for(let g=0;g<o;g++){if(c[g]||g===d)continue;let b=Math.hypot(s[d][0]-s[g][0],s[d][1]-s[g][1]);a[d]+b>=a[g]||u(d,g)&&(a[g]=a[d]+b,l[g]=d)}}let h=[];for(let d=1;d>0;d=l[d])h.unshift(s[d]);return h}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=ro(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=so(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c)||1,u=l/f,h=c/f,d=[a.a[0]+u*o.s,a.a[1]+h*o.s],g=[d[0]-h*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(g))return{p:g,yaw:this.openYaw(g,Math.atan2(u,-h))}}let e=[...this.rooms].sort((r,s)=>Vm(s)-Vm(r))[0],n=e?this.freeNear(ki(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function ZM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function Vm(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var bh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+mh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-mh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(ki(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,f=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,f),n=!0}else if(this.path.length){let[l,c]=this.path[0],f=l-r.x,u=c-r.z,h=Math.hypot(f,u),d=1.4*e;h<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=f/h*d,r.z+=u/h*d,this.turnTo=Math.atan2(u,f)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=(t==null?void 0:t.id)??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,f=this.v.camera.fov*Math.PI/180,u=Math.tan(f/2),h=n.width/n.height,d=Math.cos(a),g=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],m=[g[1]*b[2]-g[2]*b[1],g[2]*b[0]-g[0]*b[2],g[0]*b[1]-g[1]*b[0]],p=[-m[0],-m[1],-m[2]],x=[g[0]+b[0]*r*u*h+p[0]*s*u,g[1]+b[1]*r*u*h+p[1]*s*u,g[2]+b[2]*r*u*h+p[2]*s*u];if(x[1]>=-.02)return null;let y=mh/-x[1];return[l+x[0]*y,c+x[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!(c!=null&&c.capture)])},e=null;t(this.surface,"pointerdown",o=>{var a,l;e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},(l=(a=this.surface).setPointerCapture)==null||l.call(a,o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>{var a,l;return!!((l=(a=o.composedPath()[0])==null?void 0:a.closest)!=null&&l.call(a,"input, textarea, select"))};t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function KM(i,t){let e=Te(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function xh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?KM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function vh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let f=e.length/3,u=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=JM(c.id)%1e3/1e3;for(let b of po(l,c)){let[m,p,x,y]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),v=[[m,0,0],[p,1,0],[x,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,I,_]=v[M];e.push(w[0],w[1],w[2]),n.push(I,_),r.push(u,h),s.push(d)}}let g=e.length/3-f;g&&o.push({id:c.id,start:f,count:g})}if(!e.length)return null;let a=new Kt;return a.setAttribute("position",new Gt(e,3)),a.setAttribute("uv",new Gt(n,2)),a.setAttribute("aCells",new Gt(r,2)),a.setAttribute("aPhase",new Gt(s,1)),a.setAttribute("aLevel",new Gt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Mo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function yh(i){let t=new Qt({transparent:!0,blending:Fe,depthWrite:!1,side:ue});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function JM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Hm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,jM=`
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
`,QM=Hm,t2=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Gm(i,t){let e=[];for(let[r,s,o]of ei(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Kt;return n.setAttribute("position",new Gt(e,3)),n}function Wm(i,t){let e=new ke;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Ot(Gm(n.points,o),new ln({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Hm,fragmentShader:jM,transparent:!0,blending:Fe,depthWrite:!1,side:ue}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,f,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],h=c-l>=u-f,d=Math.min(1,n.cover),g=h?[[l-.1,f-.1],[l+(c-l)*d,f-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,f-.1],[c+.1,f-.1],[c+.1,f+(u-f)*d],[l-.1,f+(u-f)*d]],b=as(n.points,g);if(b.length>=3){let m=new Ot(Gm(b,n.y+.03),new ln({uniforms:{uAxis:{value:h?[1,0]:[0,1]}},vertexShader:QM,fragmentShader:t2,transparent:!0,side:ue}));m.renderOrder=6,e.add(m);let p=[];for(let y=0;y<b.length;y++){let v=b[y],M=b[(y+1)%b.length];p.push(v[0],n.y+.032,v[1],M[0],n.y+.032,M[1])}let x=new Kt;x.setAttribute("position",new Gt(p,3)),e.add(new $e(x,new tn({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Xm(i){var t,e,n;for(let r of i.children)(t=r.geometry)==null||t.dispose(),(n=(e=r.material)==null?void 0:e.dispose)==null||n.call(e);i.clear()}var Ym=["neon","blueprint","day"];function qm(i){return Ym.indexOf(i)}var cc={value:new W(.22,.88,1)},uc={value:0};function $m(i){let t=/^#?([0-9a-f]{6})$/i.exec((i==null?void 0:i.trim())??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var e2=`
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
  // day: light surfaces that keep their shading and a little more of their hue (#645: too bright, too flat), dark blue lines
  if (line) return vec3(0.07, 0.15, 0.34) * clamp(mx * 1.4, 0.45, 1.0);
  vec3 g = vec3(clamp(0.5 + l * 2.4, 0.0, 0.94));
  return mix(g, g * (c / max(mx, 0.001)), 0.2);
}
`;function je(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=cc,s.uniforms.uAccentOn=uc,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${e2}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function So(i){return i==="day"?Di:Fe}var bi=.012,n2=.012;function Km(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],f=[],u=(p,x,y,v,M,w,I)=>{for(let _ of[p,x,y,p,y,v])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(w),f.push(I)};i.rooms.forEach((p,x)=>{if(p.points.length<3)return;let y=p.points.map(E=>E[0]),v=p.points.map(E=>E[1]),M=Math.min(...y),w=Math.min(...v),I=Math.max(...y),_=Math.max(...v),R=Math.max(1,Math.ceil((I-M)/r)),S=Math.max(1,Math.ceil((_-w)/r));for(let E=0;E<R;E++)for(let T=0;T<S;T++){let C=M+E*r,A=w+T*r,P=Math.min(C+r,I),D=Math.min(A+r,_),L=as(p.points,[[C,A],[P,A],[P,D],[C,D]]),U=L.length>=3?Math.abs(l2(L)):0;if(U<1e-4)continue;let B=c2(L);if(!s.some(k=>Jt(B,k))){if(U>(P-C)*(D-A)-1e-6){u([C,bi,A],[C,bi,D],[P,bi,D],[P,bi,A],[0,1,0],x,-1);continue}for(let[k,V,j]of ei(L)){let G=L[k],J=L[j],et=L[V];(et[1]-G[1])*(J[0]-G[0])-(et[0]-G[0])*(J[1]-G[1])<0&&([G,J]=[J,G]),u([G[0],bi,G[1]],[et[0],bi,et[1]],[J[0],bi,J[1]],[J[0],bi,J[1]],[0,1,0],x,-1)}}}});let h=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!On(p.type));if(d.length){let p=d.flatMap(_=>_.points.map(R=>R[0])),x=d.flatMap(_=>_.points.map(R=>R[1])),y=Math.floor(Math.min(...p)/r)*r,v=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-y)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-v)/r)),I=(_,R,S)=>rm(i,_)-eo(i,_,R,S)+bi;for(let _=0;_<M;_++)for(let R=0;R<w;R++){let S=y+_*r,E=v+R*r,T,C=[S+r/2,E+r/2];T=d.find(P=>P.type==="pool"&&Jt(C,P.points));for(let P=d.length-1;P>=0&&!T;P--)Jt(C,d[P].points)&&(T=d[P]);if(!T)continue;let A=(P,D)=>[P,I(T,P,D),D];u(A(S,E),A(S,E+r),A(S+r,E+r),A(S+r,E),[0,1,0],h,-1)}}let g=Math.min(i.cut_height,i.height),b=[];t.forEach((p,x)=>{let y=Math.min(i.height,p.height??i.height),v=Math.min(g,y-.02),M=p.b[0]-p.a[0],w=p.b[1]-p.a[1],I=Math.hypot(M,w);if(I<.05)return;let _=[M/I,w/I],R=[-_[1],_[0]],S=e[x],E=r2(p,_,I,n),T=(D,L)=>D?i.rooms.findIndex(U=>U.id===D):L?h:-1;b.push({a:p.a,b:p.b,h:y,ra:T(p.roomLeft,!1),rb:T(p.roomRight,p.exterior),gaps:E});let C=(D,L,U)=>[L,U,...D.filter(B=>B>L+.005&&B<U-.005)].sort((B,k)=>B-k).filter((B,k,V)=>k===0||B>V[k-1]+.005),A=C([v,(v+y)/2,...E.flatMap(D=>[D.y0+.01,D.y1-.01])],.02,y-.02),P=C(E.flatMap(D=>[D.s0,D.s1]),0,I);for(let D of[1,-1]){let L=D>0?p.roomLeft:p.roomRight,U=L?i.rooms.findIndex(G=>G.id===L):p.exterior?h:-1;if(U<0)continue;let B=(D>0?p.left:p.right)+n2,k=[R[0]*D,R[1]*D],V=(G,J)=>[p.a[0]+_[0]*G+k[0]*B,J,p.a[1]+_[1]*G+k[1]*B],j=G=>{let J=V(G,0),et=o==null?void 0:o(J[0],J[2]);return et==null?1/0:et-.02};for(let G=0;G<P.length-1;G++){let J=P[G+1]-P[G],et=Math.max(1,Math.ceil(J/r));for(let ht=0;ht<et;ht++){let H=P[G]+J/et*ht,X=P[G]+J/et*(ht+1),rt=(H+X)/2;for(let at=0;at<A.length-1;at++){let ut=A[at],pt=A[at+1];if(pt-ut<.01)continue;let gt=(ut+pt)/2;if(E.some(Vt=>rt>Vt.s0&&rt<Vt.s1&&gt>Vt.y0&&gt<Vt.y1))continue;let Mt=ut>=g-1e-6?S:mr+S,kt=Math.min(pt,j(H)),re=Math.min(pt,j(X));kt<=ut+.005&&re<=ut+.005||u(V(H,ut),V(X,ut),V(X,Math.max(ut,re)),V(H,Math.max(ut,kt)),[k[0],0,k[1]],U,Mt)}}}}});let m=[];for(let p of n){if(p.opening.type!=="door")continue;let x=t.find(M=>Jm(M,p)&&i2(M,p));if(!x||!x.roomLeft||!x.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===x.roomLeft),v=i.rooms.findIndex(M=>M.id===x.roomRight);y<0||v<0||m.push({id:p.opening.id,a:y,b:v,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(f),doors:m,blockers:b}}function Jm(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function i2(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function r2(i,t,e,n){let r=[];for(let s of n){if(!Jm(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function s2(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function o2(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Zm(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,f=a*a+l*l+c*c,u=Math.sqrt(f)||1e-6,h=o2(i),d=1/(1+f/(h*h)),g=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*g*(.2+.8*b)*s2(i.kind,l/u)}function jm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((f,u)=>{let h=n[u]??.5;if(!(h<=.01))for(let[d,g]of[[f.a,f.b],[f.b,f.a]]){let b=[0,0,0];for(let p of t){if(p.room!==d)continue;let x=p.x-f.x,y=p.y-f.y,v=p.z-f.z,M=Math.hypot(x,y,v)||1,w=Zm(p,f.x,f.y,f.z,x/M,y/M,v/M);b[0]+=p.color[0]*w,b[1]+=p.color[1]*w,b[2]+=p.color[2]*w}let m=Math.max(b[0],b[1],b[2]);m<.01||r.push({x:f.x,y:f.y,z:f.z,color:[b[0]/m,b[1]/m,b[2]/m],level:Math.min(1,m*.9*(.35+.65*h)),kind:"wall",room:g})}});let s=new Map;for(let f of r){let u=i.blockers.filter(d=>d.ra===f.room||d.rb===f.room),h={...f,color:f.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(f.room,[...s.get(f.room)??[],h])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let f=0;f<l.length;f++){let u=s.get(l[f]);if(!u)continue;let h=f*3,d=0,g=0,b=0;for(let m of u){if(m.walls.length&&a2(m,m.walls,o[h],o[h+1],o[h+2]))continue;let p=Zm(m,o[h],o[h+1],o[h+2],a[h],a[h+1],a[h+2]);d+=m.color[0]*p,g+=m.color[1]*p,b+=m.color[2]*p}c[h]=1-Math.exp(-d*e*1.6),c[h+1]=1-Math.exp(-g*e*1.6),c[h+2]=1-Math.exp(-b*e*1.6)}return c}function a2(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=s*c-o*l;if(Math.abs(f)<1e-9)continue;let u=a.a[0]-i.x,h=a.a[1]-i.z,d=(u*c-h*l)/f;if(d<=1e-6||d>=1-1e-6)continue;let g=(u*o-h*s)/f;if(g<0||g>1)continue;let b=i.y+(n-i.y)*d;if(b>=a.h)continue;let m=g*Math.hypot(l,c);if(!a.gaps.some(p=>m>p.s0&&m<p.s1&&b>p.y0&&b<p.y1))return!0}return!1}function _h(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Jt([t,e],r.points));return n<0?i.rooms.length:n}function wo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function l2(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function c2(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var To={open:0,open2:0,tilt:0,tilt2:0,cover:null},Qm=2043986,t0=2769520,u2=2242399,Mh=1845831,h2=1450554,xi=16758087,f2=1.2,d2=1.5,p2=1846349,m2=2572395,g2=1120816,b2=1845831,e0=5995775,n0=9085695,fs=Dt(3662079,.08),x2=.2;function hc(i,t,e,n,r,s,o,a,l,c,f){let u=(d,g,b)=>t(d,g,b),h=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),Dt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),Dt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),Dt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),Dt(l.getHex(),.92)]];for(let[d,g,b,m,p]of h)i.tri(d,g,b,p,p,p,void 0,f),i.tri(d,b,m,p,p,p,void 0,f)}function fe(i,t,e,n,r,s,o,a,l,c,f,u){if(a<=f+1e-6)return hc(i,t,e,n,r,s,o,a,l,c,Yt);if(o>=f-1e-6)return hc(i,t,e,n,r,s,o,a,l,c,u);hc(i,t,e,n,r,s,o,f,l,c,Yt),hc(i,t,e,n,r,s,f,a,l,c,u)}function qi(i,t,e,n,r,s,o,a,l,c,f=0){let u=(h,d,g)=>{let b=v=>f?(o-v)/f:.5,m=t(e,r,h),p=t(n,r,h),x=t(n,r,d),y=t(e,r,d);i.tri(m,p,x,a,a,a,[0,b(h),1,b(h),1,b(d)],g),i.tri(m,x,y,a,a,a,[0,b(h),1,b(d),0,b(d)],g)};o<=l+1e-6?u(s,o,Yt):s>=l-1e-6?u(s,o,c):(u(s,l,Yt),u(l,o,c))}function v2(i,t,e,n,r,s,o,a,l,c){let f=t(e,r,o),u=t(n,r,o),h=t(n,s,o),d=t(e,s,o),g=0,b=(s-r)/c;i.tri(f,u,h,a,a,a,[0,g,1,g,1,b],l),i.tri(f,h,d,a,a,a,[0,g,1,b,0,b],l)}function i0(i,t,e){let n=new te,r=new te,s=new te(!0),o=new Z(Qm),a=new Z(t0),l=[],c=[],f=[];for(let u of i){let h=n.count,d=r.count,g=s.count,b=t.get(u.opening.id)??To,m=u.width,{sill:p,top:x,bucket:y}=u,v=(_,R,S)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*R,S,u.start[1]+u.axis[1]*_+u.toRoom[1]*R],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",I=u.opening.type==="door"&&fr(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!I||u.opening.type==="garage"){let _=-u.faceOut-.012,R=u.faceRoom+.012,S=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),E=S?Dt(xi,.8):new Z(Qm),T=S?Dt(xi,1):new Z(t0);fe(n,v,-.045,.02,_,R,0,x+.045,E,T,e,y),fe(n,v,m-.02,m+.045,_,R,0,x+.045,E,T,e,y),fe(n,v,.02,m-.02,_,R,x-.02,x+.045,E,T,e,y)}if(u.opening.type==="door"){let _=fr(u.opening,u.exterior),R=sp(_),S=u.opening.swing==="out"?-1:1,E=S>0?u.faceRoom:-u.faceOut,T=u.opening.leaves===2,C=.02,A=m-.02,P=rp(m,_,u.hingeAtStart,u.opening);if(P){let B=-u.faceOut-.012,k=u.faceRoom+.012,V=E-S*(R?.06:.04)/2,j=.06;for(let[G,J]of P.panels)fe(n,v,G,G+j,B,k,.02,x-.02,o,a,e,y),fe(n,v,J-j,J,B,k,.02,x-.02,o,a,e,y),fe(n,v,G+j,J-j,B,k,.02,.12,o,a,e,y),qi(r,v,G+j,J-j,V,.12,x-.02,fs,e,y);C=P.x0,A=P.x1}let D=T?(A-C)/2-.004:A-C,L=R?.06:.04;R&&(fe(n,v,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new Z(Mh),a,e,y),u.exterior&&fe(n,v,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Dt(xi,.55),Dt(xi,.85),e,Yt));let U=I?[]:[[u.hingeAtStart,b.open]];T&&!I&&U.push([!u.hingeAtStart,b.open2??0]);for(let[B,k]of U){let V=Math.min(1,Math.max(0,k)),j=_==="sliding"?0:V*d2,G=_==="sliding"?V*D:0,J=(gt,Mt,kt)=>{let re=gt*Math.cos(j)-Mt*Math.sin(j)-G,Vt=E+S*(Mt*Math.cos(j)+gt*Math.sin(j)+(G?.05:0));return v(B?C+re:A-re,Vt,kt)},et=V>.05?Yt:y,ht=w?!!b.sensed&&V<.05:V>.9,H=ht?Dt(xi,.7):new Z(R?g2:p2),X=ht?Dt(xi,.9):new Z(R?b2:m2);_==="glass"?(fe(n,J,0,.05,-L,0,.01,x-.01,H,X,e,et),fe(n,J,D-.05,D,-L,0,.01,x-.01,H,X,e,et),fe(n,J,.05,D-.05,-L,0,.01,.12,H,X,e,et),fe(n,J,.05,D-.05,-L,0,x-.08,x-.01,H,X,e,et),qi(r,J,.05,D-.05,-L/2,.12,x-.08,fs,e,et)):fe(n,J,0,D,-L,0,.01,x-.01,H,X,e,et),_==="front_glass"?qi(r,J,.12,D-.12,.001,x*.55,x-.18,fs,e,et):R&&qi(r,J,.1,.18,.001,.3,x-.3,fs,e,et);let rt=Math.min(1.05,x*.5),at=R?.3:.012,ut=R?D-.11:D-.16,pt=R?D-.08:D-.05;fe(n,J,ut,pt,.004,.05,rt-at,rt+at,new Z(e0),new Z(n0),e,et),fe(n,J,ut,pt,-L-.05,-L-.004,rt-at,rt+at,new Z(e0),new Z(n0),e,et)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),R=new Z(13951231),S=u.faceRoom-.03,E=x*(1-_);_>.01&&qi(s,v,.02,m-.02,S,E,x,R,e,y,.5);let T=(1-_)*x;T>.01&&v2(s,v,.02,m-.02,S,S+T,x+.03,R,y,.5)}else if(fr(u.opening,u.exterior)==="glass_wall"){fe(n,v,0,.04,M-.025,M+.025,p,x,o,a,e,y),fe(n,v,m-.04,m,M-.025,M+.025,p,x,o,a,e,y),fe(n,v,.04,m-.04,M-.025,M+.025,p,p+.03,o,a,e,y),fe(n,v,.04,m-.04,M-.025,M+.025,x-.04,x,o,a,e,y);let S=Math.max(1,Math.round((m-2*.04)/.9)),E=(m-2*.04)/S;for(let T=1;T<S;T++){let C=.04+T*E;fe(n,v,C-.02,C+.02,M-.025,M+.025,p+.03,x-.04,o,a,e,y)}for(let T=0;T<S;T++){let C=.04+T*E+(T?.02:0),A=.04+(T+1)*E-(T<S-1?.02:0);qi(r,v,C,A,M,p+.03,x-.04,fs,e,y)}}else{fe(n,v,0,.06,M-.035,M+.035,p,x,o,a,e,y),fe(n,v,m-.06,m,M-.035,M+.035,p,x,o,a,e,y),fe(n,v,.06,m-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,y),fe(n,v,.06,m-.06,M-.035,M+.035,x-.06,x,o,a,e,y),p>.3&&(fe(n,v,-.04,m+.04,M+.035,u.faceRoom+.07,p-.03,p,new Z(Mh),a,e,y),u.exterior&&fe(n,v,-.03,m+.03,-u.faceOut-.06,M-.035,p-.04,p-.02,new Z(Mh),a,e,y));let S=.055,E=p+(p>.05?.06:.03),T=x-.06,C=M+.035,A=M+.035+.06,D=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:b.open,tilt:b.tilt}];for(let L of D){let U=L.open>.02||L.tilt>.02,B=w?!!b.sensed&&!U:U,k=B?Dt(xi,.75):new Z(u2),V=B?Dt(xi,.95):a,j=L.x0,G=L.x1,J=G-j,et=L.open*f2*(u.opening.swing==="out"?-1:1),ht=L.tilt*x2,H=(rt,at,ut)=>{let pt=ut-E,gt=at+pt*Math.sin(ht),Mt=E+pt*Math.cos(ht),kt=rt*Math.cos(et)-(gt-C)*Math.sin(et);gt=C+(gt-C)*Math.cos(et)+rt*Math.sin(et);let re=L.atStart?j+kt:G-kt;return v(re,gt,Mt)},X=Math.abs(et)>.05?Yt:y;if(fe(n,H,0,S,C,A,E,T,k,V,e,X),fe(n,H,J-S,J,C,A,E,T,k,V,e,X),fe(n,H,S,J-S,C,A,E,E+S,k,V,e,X),fe(n,H,S,J-S,C,A,T-S,T,k,V,e,X),qi(r,H,S,J-S,(C+A)/2,E+S,T-S,B?Dt(xi,.16):fs,e,X),fr(u.opening,u.exterior)==="bars"){let rt=(E+T)/2,at=(C+A)/2;fe(n,H,S,J-S,at-.012,at+.012,rt-.012,rt+.012,k,V,e,X),fe(n,H,J/2-.012,J/2+.012,at-.012,at+.012,E+S,T-S,k,V,e,X)}}}if(b.cover!==null){let _=-u.faceOut,R=x+.2;fe(n,v,-.05,m+.05,_-.15,_,x,R,new Z(h2),a,e,y);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let E=x-S*(x-p);qi(s,v,0,m,_-.07,E,x,new Z(16777215),e,y,.045)}}l.push({id:u.opening.id,start:h,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),f.push({id:u.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:f}}var y2=.3,r0=2.6;function s0(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),f=c-l>=a-o,u=e*.7071,h=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],I=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>Jt(_,i))&&!n.some(_=>I.some(R=>Jt(R,_)))},d=(M,w)=>h(f?[M,w]:[w,M]),g=(M,w)=>{let I=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<I;_++)if(!h([M[0]+(w[0]-M[0])*_/I,M[1]+(w[1]-M[1])*_/I]))return!1;return!0},[b,m,p,x]=f?[o,a,l,c]:[l,c,o,a],y=[],v=!0;for(let M=b+e;M<=m-e+1e-6;M+=t){let w=null,I=null,_=.05;for(let T=p;T<=x+1e-6;T+=_)if(d(M,T)&&(I??=T),(!d(M,T)||T+_>x+1e-6)&&I!==null){let C=d(M,T)?T:T-_;(!w||C-I>w[1]-w[0])&&(w=[I,C]),I=null}if(!w||w[1]-w[0]<.2)continue;let R=T=>{let[C,A]=T?w:[w[1],w[0]];return[f?[M,C]:[C,M],f?[M,A]:[A,M]]},S=R(v),E=y[y.length-1];if(E&&n.length&&!g(E,S[0])){let T=R(!v);if(!g(E,T[0]))continue;S=T,v=!v}y.push(S[0],S[1]),v=!v}return y}function wh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Sh=i=>Math.atan2(Math.sin(i),Math.cos(i));function o0(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Sh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),r0*e),!0)}let a=Math.atan2(r,s),l=Sh(a-i.heading);if(i.heading=Sh(i.heading+Math.sign(l)*Math.min(Math.abs(l),r0*e)),Math.abs(l)<.35){let c=Math.min(o,y2*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Tn=null,a0=new Map;function c0(i,t=0){let e=new te,n=new Le,r=Te(i.type);if(r!=null&&r.light)$l(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Th(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Yl(e,n,new te,s)}return{buf:e,lines:n}}function _2(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=a0.get(r);if(s)return s;e&&Qs(e),Tn??=new ur({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Tn.setSize(t,t,!1),Tn.setClearColor(0,0);let{buf:o,lines:a}=c0(i),l=new Ci,c=new Ot(o.geometry(),new Qt({vertexColors:!0,color:new Z(n,n,n)})),f=new $e(a.geometry(),new tn({vertexColors:!0,color:new Z(n*1.8,n*1.8,n*1.8)}));l.add(c,f);let u=new hn().setFromObject(c),h=u.getCenter(new W),d=new qn(-1,1,1,-1,.01,100);d.position.copy(h).add(new W(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(h),d.updateMatrixWorld();let g=.05;for(let p of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let y of[u.min.z,u.max.z]){let v=new W(p,x,y).applyMatrix4(d.matrixWorldInverse);g=Math.max(g,Math.abs(v.x),Math.abs(v.y))}let b=g*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Tn.render(l,d);let m=Tn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose(),a0.set(r,m),m}function M2(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=l0.get(s);if(o)return o;n&&Qs(n);let{buf:a,lines:l}=c0(i,t),c=new Ot(a.geometry(),new Qt({vertexColors:!0,color:new Z(r,r,r)})),f=new $e(l.geometry(),new tn({vertexColors:!0,color:new Z(r*1.8,r*1.8,r*1.8)})),u=new hn().setFromObject(c);if(u.isEmpty())return null;let h=u.min.x,d=u.max.x,g=Math.max(0,u.min.y),b=u.max.y,m=Math.max(1,Math.min(1024,Math.round((d-h)*e))),p=Math.max(1,Math.min(1024,Math.round((b-g)*e)));Tn??=new ur({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(1),Tn.setSize(m,p,!1),Tn.setClearColor(0,0);let x=new Ci;x.add(c,f);let y=new qn(h,d,b,g,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Tn.render(x,y);let v=Tn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose();let M={url:v,x0:h,x1:d,y0:g,y1:b};return l0.set(s,M),M}var l0=new Map;var W3={Group:ke,Mesh:Ot,MeshBasicMaterial:Qt,CanvasTexture:ui,Color:Z,PlaneGeometry:hi,BufferGeometry:Kt,Float32BufferAttribute:Gt,DoubleSide:ue},h0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},S2=2.4,f0=1.4,w2=.22,d0=.94,p0=140,m0=1.5;function T2(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,f=l-o,u=c*c+f*f||1,h=Math.max(0,Math.min(1,((i-s)*c+(t-o)*f)/u));n=Math.min(n,Math.hypot(i-(s+c*h),t-(o+f*h)))}return n}var Ah=32,E2=500,g0=160,b0=33,x0=.028,A2=.09,Zt=2767456,R2=1911110,C2=1,v0=new Set(["ceiling","ceiling_fan","downlight","spot","panel","pendant","strip"]),fc=450,y0=125,P2=.08,I2=2*Math.PI/1.4,Rh={ceiling:[.4,.4,.08],ceiling_fan:[1.2,1.2,.35],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},L2=new Z(1714765);function F2(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var Ch=class{host;options;renderer;scene=new Ci;camera=new Xe(38,1,.1,400);controls;labels;root=new ke;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;fanFloors=new Set;fanAngle=0;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new $e(new Kt,new tn({color:10471679,transparent:!0,opacity:.4,blending:Fe,depthWrite:!1}));snow=new Yr(new Kt,new ir({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ot(new Ps(1,28),new Qt({color:16767370,transparent:!0,opacity:0,blending:Fe,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=N2(),this.blindTexture=U2(),this.haloTexture=k2(),this.ground=new Ot(new hi(1,1),new Qt({transparent:!1,blending:Fe,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Qs(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,$d(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(f=>Ll(f.floor).some(u=>u.id===t)),n=e?Ll(e.floor).find(f=>f.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let f=e.floor.elevation+e.ty,[u,h]=ki(n.points),d=r.target??{x:u,y:.3,z:h};this.controls.flyTo({target:new W(d.x,d.y+f,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=ki(n.points),a=n.points.map(f=>f[0]),l=n.points.map(f=>f[1]),c=new W(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new W(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.fanFloors=new Set(t.filter(n=>n.fanBlades&&(n.fanSpeed??0)>0).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){var n;this.solarLevels=t;let e=!1;for(let r of((n=this.roof)==null?void 0:n.lives)??[])Mo(r,t)&&(e=!0);for(let r of this.floors)r.solarLive&&Mo(r.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>{var s;return`${r.id}:${r.floorId}:${r.points.length}:${(s=r.points[0])==null?void 0:s.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`}).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Xm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=Wm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){var n,r,s;let e=o=>o.map(a=>`${a.id}:${a.floorId}:${a.x},${a.z}:${a.level.toFixed(2)}:${a.playing?1:0}:${a.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(o=>o.playing);for(let o of this.floors){let a=o.soundGroup??=(()=>{let h=new ke;return h.renderOrder=6,o.group.add(h),h})();for(let h of[...a.children])a.remove(h),(n=h.geometry)==null||n.dispose(),(s=(r=h.material)==null?void 0:r.dispose)==null||s.call(r);let l=t.filter(h=>h.floorId===o.floor.id),c=.03;for(let h of l)if(h.playing)for(let d=0;d<3;d++){let g=new Ot(new Ns(.92,1,48),new Qt({color:3662079,transparent:!0,opacity:0,blending:Fe,depthWrite:!1,side:ue}));g.rotation.x=-Math.PI/2,g.position.set(h.x,c+d*.002,h.z),g.userData={sound:!0,phase:d/3,level:h.level},g.frustumCulled=!1,a.add(g)}let f=[],u=new Set;for(let h of l)for(let d of h.members){let g=l.find(m=>m.id===d);if(!g||g===h)continue;let b=[h.id,g.id].sort().join("|");u.has(b)||(u.add(b),f.push(h.x,c+.02,h.z,g.x,c+.02,g.z))}if(f.length){let h=new Kt;h.setAttribute("position",new Gt(f,3));let d=new $e(h,new tn({color:3662079,transparent:!0,opacity:.45,blending:Fe,depthWrite:!1}));d.userData={soundLine:!0},a.add(d)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Eh(r),o=_0(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new te;for(let s of e)zm(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=$m(t),n=e?1:0;n===uc.value&&(!e||cc.value.equals(new W(...e)))||(uc.value=n,e&&cc.value.set(...e),this.invalidate())}setTheme(t){var s;if(t===this.theme)return;this.theme=t,this.themeUniform.value=qm(t),qp(t!=="neon"),(s=this.building)!=null&&s.floors.some(o=>o.furniture.some(a=>a.type==="waste_bin"))&&this.rebuild();let n=So(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new Z(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Ts(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){let r=t.geometry.getAttribute("position");if(((r==null?void 0:r.count)??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let f=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([f,u,h],c*3),n&&o.set([f,u-.45,h],c*3+3)}t.geometry.dispose();let l=new Kt;l.setAttribute("position",new Gt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let f=0;f<l.length;f+=6){let u=l[f+1]-c,h=l[f]+o*n;u<r.y0&&(u+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[f]=h,l[f+1]=u,l[f+3]=h-o*.05,l[f+4]=u-.45,l[f+5]=l[f+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let f=0;f<l.length;f+=3){let u=l[f+1]-(.9+.6*e.snow)*n,h=l[f]+(o+Math.sin(c+f)*.4)*n;u<r.y0&&(u+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[f]=h,l[f+1]=u}a.needsUpdate=!0}return!0}placeSky(){var d;let t=this.sun,e=this.weather,n=(e==null?void 0:e.cloud)??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(((d=this.building)==null?void 0:d.settings.north)??0)*se,o=(r?t.azimuth+180:t.azimuth)*se,a=Math.max(10,Math.abs(t.elevation))*se,l=this.weatherBox,c=new W((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),f=Math.min(300,Math.max(80,this.houseRadius*5)),u=new W(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,f),this.skyDisc.scale.setScalar(f*(r?.03:.04)),this.skyDisc.lookAt(c);let h=this.skyDisc.material;h.color.set(r?13621486:16767370),h.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){var e,n;this.floorInfo=t;for(let r of this.floors){let s=r.label.querySelector("span"),o=t.get(r.floor.id)??((n=(e=this.options).floorInfo)==null?void 0:n.call(e,r.floor))??"";s&&s.textContent!==o&&(s.textContent=o,r.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??To,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/g0),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){var n,r;let e=new te;for(let s of t.floor.furniture){if(s.type!=="fridge_smart")continue;let o=this.fridges.get(s.id);Kp(e,s,Ze(t.floor,s),(o==null?void 0:o.l)??0,(o==null?void 0:o.r)??0)}for(let s of t.floor.furniture)s.type==="awning"&&Zp(e,s,Ze(t.floor,s),((n=this.awnings.get(s.id))==null?void 0:n.cur)??0);for(let s of t.floor.furniture){let o=Cl(s.type),a=o?Te(s.type):void 0;o&&a&&nm(e,a,o,s,Ze(t.floor,s),((r=this.awnings.get(s.id))==null?void 0:r.cur)??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new oc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*se,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*se)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new W(e.x,a,e.z),direction:new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(ac);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(ac),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){var t,e,n,r,s;this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let o of[this.rain,this.snow,this.skyDisc])o.geometry.dispose(),o.material.dispose();this.resizeObserver.disconnect(),(t=this.intersection)==null||t.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),(e=this.groundTexture)==null||e.dispose(),this.haloTexture.dispose();for(let o of this.robots.values())o.led.dispose();this.robots.clear(),(n=this.robotGeo)==null||n.dispose(),(r=this.robotLedGeo)==null||r.dispose(),(s=this.robotMat)==null||s.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&F2();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new ur({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ce,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new rc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>{var e,n;return this.swipe&&((n=(e=this.options).onDeviceSwipe)==null?void 0:n.call(e,this.swipe.entity,"move",t,this.swipe.x,this.swipe.y))},swipeEnd:()=>{var t,e;this.swipe&&((e=(t=this.options).onDeviceSwipe)==null||e.call(t,this.swipe.entity,"end",0,this.swipe.x,this.swipe.y)),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{var r,s;let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):(s=(r=this.options).onBack)==null||s.call(r)}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){var t;for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let n of e.screenPics.values())n.mesh.material.dispose(),(t=n.texture)==null||t.dispose();e.group.traverse(n=>{let r=n.geometry;r==null||r.dispose()});for(let n of Object.values(e.materials))n.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",f=>{if(this.furnish){this.pendingDevice=t;return}f.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{var d,g;l=!0;let u=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(g=(d=this.options).onDeviceHold)==null||g.call(d,t,u.left+u.width/2-h.left,u.top+u.height/2-h.top)},E2)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",f=>f.preventDefault()),e.addEventListener("click",f=>{var d,g,b,m;if(f.stopPropagation(),this.furnish){this.selectDevice(t),(g=(d=this.options).onDeviceSelect)==null||g.call(d,t);return}if(l)return;let u=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(m=(b=this.options).onDeviceTap)==null||m.call(b,t,u.left+u.width/2-h.left,u.top+u.height/2-h.top)}),e.addEventListener("keydown",f=>{var u,h;if(f.key==="Enter"&&f.shiftKey||f.key==="ContextMenu"){f.preventDefault();let d=e.getBoundingClientRect(),g=this.host.getBoundingClientRect();(h=(u=this.options).onDeviceHold)==null||h.call(u,t,d.left+d.width/2-g.left,d.top+d.height/2-g.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Km(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=M0(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=wo(r,a.ra),a.rb=wo(r,a.rb)}t.lightSurface=n;let s=new Kt;s.setAttribute("position",new Gt(n.pos,3)),s.setAttribute("color",new Gt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Gt(n.fold,1));let o=new er(new Uint32Array(n.pos.length/3),1);o.setUsage(gu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=_h(t.floor,n.x,n.z),a=wo(t.lightZones,o),[l,,c]=n.size??(n.lamp?Rh[n.lamp]:[.3,.3,.3]),f=n.base??0,u={ceiling:[s-.12,"ceiling"],ceiling_fan:[s-.3,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],floor:[f+c-.15,"omni"],uplight:[f+c,"up"],table:[f+c-.1,"omni"],wall:[f+.1,"wall"],strip:[f+Math.max(.02,c)-.01,f<C2?"up":"ceiling"],bollard:[f+c-.08,"ceiling"],garden:[f+c,"up"]},[h,d]=n.lamp?u[n.lamp]:[n.y,"omni"],g=n.lightY??h,b=r.color;if(n.lamp==="strip"){let m=(n.rotation??0)*se,p=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:f+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let y=(n.rise??0)*se;e.push({x:n.x+Math.cos(m)*l*x*Math.cos(y),y:g+Math.sin(y)*l*x,z:n.z+Math.sin(m)*l*x*Math.cos(y),color:b,level:r.level*.55,kind:p||y?"omni":d,room:a})}}else e.push({x:n.x,y:g,z:n.z,color:b,level:r.level,kind:d,room:a})}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let f of this.devices){if(f.floorId!==n.floor.id)continue;let u=this.glowOf(f);if(!u)continue;let h=Jt([f.x,f.z],s)?0:T2(f.x,f.z,s);if(h>m0)continue;let d=u.level*(1-h/m0);for(let g=0;g<3;g++)a[g]+=u.color[g]*d;o+=d}if(o<.02)continue;let[l,c]=ki(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:wo(t.lightZones,_h(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(u=>{let h=t.geo.openings.find(g=>g.opening.id===u.id);if(h&&fr(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=jm(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let h=0;h<e.room.length;h++)if(e.room[h]!==u)for(let d=0;d<3;d++)l[h*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,f=0;for(let u=0;u<l.length/18;u++){let h=!1;for(let d=u*18;d<u*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[f++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,f),t.glowMesh.visible=f>0}makeMaterials(t){return{floor:je(new Qt({vertexColors:!0}),this.themeUniform),pattern:O2(this.patternTexture),wall:je(ni(new Qt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ni(new Qt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Qt({vertexColors:!0,blending:zs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:ue,polygonOffset:!0,polygonOffsetFactor:-1}),lines:je(ni(new tn({vertexColors:!0,transparent:!0,blending:So(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ni(new Qt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:je(ni(new Qt({vertexColors:!0,side:ue}),t),this.themeUniform),glass:ni(new Qt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue}),t),blinds:je(ni(new Qt({map:this.blindTexture,vertexColors:!0,side:ue}),t),this.themeUniform),water:je(new Qt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:ue}),this.themeUniform),flow:B2(this.flowTime),solarLive:yh(this.flowTime),lamps:je(new Qt({vertexColors:!0}),this.themeUniform),halos:new ir({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1}),cones:new Qt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue}),screens:new Qt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue}),earth:je(new Qt({vertexColors:!0}),this.themeUniform),earthWell:je(new Qt({vertexColors:!0,side:ue}),this.themeUniform),earthLines:je(new tn({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){var s,o,a,l;let t=new Map(this.floors.map(c=>[c.floor.id,{y:c.y,o:c.o}])),e=new Map(this.floors.map(c=>[c.floor.id,c.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((c,f)=>c.elevation-f.elevation);for(let c of n.floors){let f=((s=n.settings.roof)==null?void 0:s.solar)??[],u=((o=ch(n))==null?void 0:o.id)===c.id?f.filter(gt=>gt.face===lh).map(gt=>({field:gt,face:lm(n,gt)})):[],h=f.filter(gt=>gt.face.startsWith(`wall:${c.id}:`));if(h.length){let gt=new Map(am(n,c.id).map(Mt=>[Mt.key,Mt]));for(let Mt of h){let kt=gt.get(Mt.face);kt&&u.push({field:Mt,face:kt})}}let g=(n.settings.roof.sections??[]).some(gt=>dp(gt,c.elevation+c.height))?(gt,Mt)=>{let kt=pp(n,gt,Mt);return kt===null?null:kt-c.elevation}:void 0,b=Mm(xh(c,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Sm(n.floors,c),u,g),m={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(m),x=new ke,y=new Ot(b.floor,p.floor),v=new Ot(b.shadow,p.shadow);v.renderOrder=1;let M=new Ot(b.floor,p.pattern);M.renderOrder=2;let w=new Ot(new Kt,p.glow);w.renderOrder=3,w.visible=!1;let I=new Ot(new Kt,p.frames),_=new Ot(new Kt,p.blinds),R=new Ot(new Kt,p.glass);R.renderOrder=4;let S=new Ot(new Kt,p.lamps);S.visible=!1;let E=new Ot(new Kt,p.cones);E.visible=!1,E.renderOrder=3;let T=new Yr(new Kt,p.halos);T.visible=!1,T.renderOrder=7;let C=new Ot(new Kt,p.cones);C.visible=!1,C.renderOrder=7;let A=new Ot(new Kt,p.cones);A.visible=!1,A.renderOrder=7;let P=new Ot(new Kt,p.lamps);P.visible=!1;let D=new Ot(new Kt,p.lamps);D.visible=!1;let L=new Ot(new Kt,p.screens);L.visible=!1,L.renderOrder=5;let U=new Ot(new Kt,p.flow);U.renderOrder=5,U.frustumCulled=!1;let B=vh(u,c.elevation),k=B?new Ot(B.geometry,p.solarLive):null;k&&(k.renderOrder=6,Mo(B,this.solarLevels));for(let gt of[I,_,R])gt.frustumCulled=!1;let V=new Ot(b.walls,p.glassWall),j=new Ot(b.walls,p.wall);V.renderOrder=6;let G=new Ot(b.water,p.water);G.renderOrder=4;let J=Math.min(...n.floors.filter(gt=>gt.rooms.length).map(gt=>gt.elevation)),et=Am(n,c,b.openings,c.elevation===J),ht=et?[new Ot(et.earth.geometry(),p.earth),new Ot(et.wells.geometry(),p.earthWell),new $e(et.lines.geometry(),p.earthLines)]:[];for(let gt of ht)gt.userData.earth=!0;x.add(y,v,M,w,j,G,new $e(b.lines,p.lines),I,_,R,U,S,E,T,C,A,P,D,L,V,...k?[k]:[],...ht),this.root.add(x);let H=document.createElement("button");H.className="fp3d-pin fp3d-pin-floor",H.dataset.floor=c.id;let X=document.createElement("b");X.textContent=c.name||"\u2013";let rt=document.createElement("span");rt.textContent=this.floorInfo.get(c.id)??((l=(a=this.options).floorInfo)==null?void 0:l.call(a,c))??"",H.append(X,rt),H.addEventListener("click",()=>{var gt,Mt;return(Mt=(gt=this.options).onFloorTap)==null?void 0:Mt.call(gt,c.id)}),this.labels.append(H);let at=t.get(c.id),ut=[],pt=null;for(let gt of Ll(c)){let Mt=document.createElement("button");Mt.className="fp3d-pin",Mt.dataset.room=gt.id,Mt.dataset.floor=c.id,this.fillRoomPin(Mt,gt.name,this.roomInfo.get(gt.id)),Mt.addEventListener("click",()=>{var Vt,de;return(de=(Vt=this.options).onRoomTap)==null?void 0:de.call(Vt,c.id,gt.id)}),this.labels.append(Mt);let[kt,re]=ki(gt.points);if(ut.push({pin:Mt,room:gt,cx:kt,cz:re}),!gt.outdoor)for(let[Vt,de]of gt.points)pt??={x0:Vt,x1:Vt,z0:de,z1:de},pt.x0=Math.min(pt.x0,Vt),pt.x1=Math.max(pt.x1,Vt),pt.z0=Math.min(pt.z0,de),pt.z1=Math.max(pt.z1,de)}this.floors.push({floor:c,rank:r.indexOf(c),group:x,geo:b,floorMesh:y,shadowMesh:v,patternMesh:M,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:I,glassMesh:R,blindsMesh:_,flowMesh:U,solarMesh:k,solarLive:B,lampMesh:S,sunMesh:E,sunSig:"",haloMesh:T,coneMesh:C,trailMesh:A,fridgeMesh:P,pipeMesh:D,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:j,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:pt,roomPins:ut,labelSize:null,materials:p,mask:m,openings:new Map,y:(at==null?void 0:at.y)??0,o:(at==null?void 0:at.o)??1,ty:0,to:1,appliedO:-1,label:H})}this.floorMap=new Map(this.floors.map(c=>[c.floor.id,c]));for(let c of this.floors)this.buildFridges(c),this.buildPipes(c);this.labelsDirty=!0,this.floorId&&!n.floors.some(c=>c.id===this.floorId)&&(this.floorId=null);for(let c of this.floors){this.buildLamps(c),this.buildScreens(c);let f=e.get(c.floor.id);for(let u of c.geo.openings)c.openings.set(u.opening.id,(f==null?void 0:f.get(u.opening.id))??this.openingTargets.get(u.opening.id)??To);this.buildOpenings(c),this.buildFlows(c),c.poolGroup=void 0,this.buildPoolWater(c),this.buildLightSurface(c),this.buildSun(c)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){var p;this.roof&&(this.roof.group.traverse(x=>{var y;return(y=x.geometry)==null?void 0:y.dispose()}),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(x=>{var y;return(y=x.geometry)==null?void 0:y.dispose()}),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?bm(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(yr(this.building).map(x=>[x.key,x])),n=((p=this.building.settings.roof)==null?void 0:p.solar)??[],r=yh(this.flowTime),s=[],o=new ke,a=je(new Qt({vertexColors:!0,transparent:!0,side:ue}),this.themeUniform),l=je(new tn({vertexColors:!0,transparent:!0,blending:So(this.theme),depthWrite:!1}),this.themeUniform,!0),c=je(new Qt({vertexColors:!0,transparent:!0,side:ue,depthWrite:!1}),this.themeUniform),f=new ke,u=je(new Qt({vertexColors:!0,side:ue}),this.themeUniform),h=je(new Qt({vertexColors:!0,transparent:!0,opacity:.35,side:ue,depthWrite:!1}),this.themeUniform),d=je(new Qt({vertexColors:!0,transparent:!0,opacity:.35,side:ue,depthWrite:!1}),this.themeUniform),g=je(new tn({vertexColors:!0,transparent:!0,blending:So(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],m=t.map(x=>{var I,_,R,S;let y=new ke;y.add(new Ot(x.solid.geometry(),a),new $e(x.lines.geometry(),l)),x.glass.count&&y.add(new Ot(x.glass.geometry(),c));let v=n.flatMap(E=>{var A;let T=e.get(E.face);return T&&(T.section?(A=x.sections)==null?void 0:A.includes(T.section):x===t[0])?[{face:T,field:E}]:[]}),M=vh(v,x.floor.elevation+x.base);if(M){let E=new Ot(M.geometry,r);E.renderOrder=9,y.add(E),s.push(M),Mo(M,this.solarLevels)}(I=x.winRoof)!=null&&I.solid.count&&y.add(new Ot(x.winRoof.solid.geometry(),u),new $e(x.winRoof.lines.geometry(),g)),(_=x.winRoof)!=null&&_.glass.count&&y.add(new Ot(x.winRoof.glass.geometry(),d)),y.renderOrder=8,o.add(y);let w=null;((R=x.win)!=null&&R.solid.count||(S=x.win)!=null&&S.glass.count)&&(w=new ke,w.add(new Ot(x.win.solid.geometry(),u),new $e(x.win.lines.geometry(),g)),x.win.glass.count&&w.add(new Ot(x.win.glass.geometry(),h)),f.add(w));for(let[E,T]of x.winBelow??[]){if(!T.solid.count&&!T.glass.count)continue;let C=new ke;C.add(new Ot(T.solid.geometry(),u),new $e(T.lines.geometry(),g)),T.glass.count&&C.add(new Ot(T.glass.geometry(),h)),f.add(C),b.push({floorId:E,win:C})}return{group:y,floorId:x.floor.id,rideId:_p(this.building,x.floor,x.sections??[]),base:x.base,lift:x.lift!==!1,win:w}});o.renderOrder=8,this.scene.add(o),this.scene.add(f),this.roof={group:o,parts:m,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:f,winSolid:u,winLines:g,winGlass:h,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/d0)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?d0*n:0,o=1-Math.exp(-t/p0),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let f=this.floorMap.get(l.rideId)??c,u=f.ty>0?Math.min(1,f.y/f.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+f.y+l.base+this.roofLift()+(l.lift?u*f0:0),l.win&&(l.win.position.y=c.floor.elevation+f.y+l.base+(l.lift?u*f0:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:w2)):r=this.explode?n.rank*S2:0,n.ty=r,n.to=s;let a=e===n?en:$n;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/p0);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/g0);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??To,c=(h,d)=>(h??null)===(d??null)||typeof h=="number"&&typeof d=="number"&&Math.abs(h-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let f={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let h of["open","open2","tilt","tilt2"]){let d=l[h]??0,g=a[h]??0,b=d-g;Math.abs(b)<.003?f[h]=d:(f[h]=g+b*n,u=!0)}if(l.cover===null||a.cover===null)f.cover=l.cover;else{let h=l.cover-a.cover;Math.abs(h)<.003?f.cover=l.cover:(f.cover=a.cover+h*n,u=!0)}(f.open!==a.open||f.open2!==(a.open2??0)||f.tilt!==a.tilt||f.tilt2!==(a.tilt2??0)||f.cover!==a.cover||!!f.sensed!=!!a.sensed)&&(r.openings.set(o,f),s=!0),e||=u}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new Z(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*P2+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let d=h-e,g=d>fc?.5+.5*Math.sin(d/140):d/fc;return Math.round(g*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=u=>u.fanBlades&&u.fanSpeed?this.fanAngle*u.fanSpeed:0,o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>{var h;return`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${(h=u.size)==null?void 0:h.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0},${u.fanStatic?1:0},${s(u).toFixed(3)}`}).join(";"),a=r.map(u=>this.glowOf(u)),l=r.map((u,h)=>`${n(u.id)},${a[h]?`${a[h].level.toFixed(3)},${a[h].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let u=new te,h=[],d=[],g=new Map,b=t.floor.height;for(let m of r){let p=m.lamp==="strip"?(m.base??b)>Math.min(t.floor.cut_height,b):m.lamp?v0.has(m.lamp)&&(m.top??b)>Math.min(t.floor.cut_height,b):m.model==="camera_ceiling";if(!m.lamp&&!m.model||p&&this.wallMode==="cut")continue;let x=u.count,y=m.pack?Te(m.pack):void 0,[v,M,w]=m.size??[.3,.3,.3];m.model?em(u,m.model,m.x,m.model==="camera_ceiling"?b:m.y,m.z,m.rotation??0):y?$l(u,y,{x:m.x,z:m.z,rotation:m.rotation??0,w:v,d:M,h:w,mirror:m.mirror},m.base??0,65280):Th(u,{...m,lamp:m.lamp,spinAngle:s(m)},m.top??b,65280),g.set(m.furnitureId??m.id,{start:x,end:u.count}),m.pickable!==!1&&h.push({id:m.id,start:x,end:u.count}),m.furnitureId&&d.push({id:m.furnitureId,start:x,end:u.count})}t.lampTris=h,t.lampFurnTris=d,t.lampRanges=g,t.lampShade=Bd(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(l===t.lampColorSig)return;t.lampColorSig=l;let c=t.lampMesh.geometry.getAttribute("color"),f=c.array;r.forEach((u,h)=>{let d=t.lampRanges.get(u.furnitureId??u.id);if(!d)return;let g=a[h],b=g?.55+.45*g.level:0,m=g?new Z(...g.color.map(y=>Math.min(1,y*b))):new Z(R2),p=n(u.id);p>0&&m.lerp(new Z(1,1,1),.7*p);let x=new Z(m.getHex());kd(f,t.lampShade,d,[x.r,x.g,x.b])}),c.needsUpdate=!0,this.buildHalos(t)}buildSun(t){var l,c,f,u,h;let e=((l=this.building)==null?void 0:l.settings.sun_patches)===!1?null:this.sun,n=(((c=this.building)==null?void 0:c.settings.north)??0)*se,r=((f=this.weather)==null?void 0:f.cloud)??0,s=M0(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(d=>(d.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(((h=(u=this.building)==null?void 0:u.settings.roof)==null?void 0:h.windows)??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new te;if(e&&e.elevation>2&&r<.97){let d=Math.min(1,e.elevation/12)*(1-.8*r),g=e.elevation*se,b=e.azimuth*se,m=[Math.sin(n+b),-Math.cos(n+b)],p=1/Math.tan(g);for(let x of t.geo.openings){if(x.opening.type!=="window"||!x.exterior)continue;let y=[-x.toRoom[0],-x.toRoom[1]],v=y[0]*m[0]+y[1]*m[1];if(v<.05)continue;let M=t.openings.get(x.opening.id),w=x.top-((M==null?void 0:M.cover)??0)*(x.top-x.sill);if(w-x.sill<.05)continue;let I=(D,L)=>{let U=Math.min(7,L*p);return[x.start[0]+x.axis[0]*D+x.toRoom[0]*x.faceRoom-m[0]*U,.02,x.start[1]+x.axis[1]*D+x.toRoom[1]*x.faceRoom-m[1]*U]},_=.14*d*Math.min(1,v*1.5),R=new Z(1*_,.82*_,.55*_),S=R.clone().multiplyScalar(.45),E=t.floor.rooms.findIndex(D=>D.id===x.opening.room_id);if(E<0||t.floor.rooms[E].points.length<3)continue;let T=s[E],C=t.floor.rooms.filter((D,L)=>s[L]===T&&D.points.length>=3).map(D=>D.points),A=Math.max(1,Math.ceil(Math.min(7,w*p)/.25)),P=Math.max(1,Math.ceil(x.width/.3));for(let D=0;D<A;D++){let L=x.sill+(w-x.sill)*D/A,U=x.sill+(w-x.sill)*(D+1)/A,B=D/A,k=(D+1)/A,V=R.clone().lerp(S,B),j=R.clone().lerp(S,k);for(let G=0;G<P;G++){let J=x.width*G/P,et=x.width*(G+1)/P,ht=I((J+et)/2,(L+U)/2);if(!C.some(ut=>Jt([ht[0],ht[2]],ut)))continue;let H=I(J,L),X=I(et,L),rt=I(et,U),at=I(J,U);a.tri(H,X,rt,V,V,j),a.tri(H,rt,at,V,j,j)}}}this.pushRoofSun(t,a,s,m,g,d)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){var u,h;let a=this.building,l=((u=a==null?void 0:a.settings.roof)==null?void 0:u.windows)??[];if(!a||!l.length)return;let c=new Map(yr(a).map(d=>[d.key,d])),f=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let d of l){let g=c.get(d.face),b=jl(a,g,d);if(!g||!b||b.floor.id!==t.floor.id)continue;let m=g.n[0]*f[0]+g.n[1]*f[1]+g.n[2]*f[2],[p,x,y,v]=b.corners,M=Math.min(1,((h=this.roofWindows.get(d.id))==null?void 0:h.cover)??0);if(M>.95)continue;let w=(D,L,U)=>[D[0]+(L[0]-D[0])*U,D[1]+(L[1]-D[1])*U,D[2]+(L[2]-D[2])*U],I=w(v,p,M),_=w(y,x,M),R=t.floor.rooms.findIndex(D=>D.id===b.roomId);if(R<0)continue;let S=t.floor.rooms.filter((D,L)=>n[L]===n[R]&&D.points.length>=3).map(D=>D.points),E=(D,L)=>{let U=(k,V)=>w(w(D[0],D[1],k),w(D[3],D[2],k),V);for(let k=0;k<6;k++)for(let V=0;V<6;V++){let j=U((k+.5)/6,(V+.5)/6);if(!S.some(H=>Jt([j[0],j[2]],H)))continue;let G=U(k/6,V/6),J=U((k+1)/6,V/6),et=U((k+1)/6,(V+1)/6),ht=U(k/6,(V+1)/6);e.tri(G,J,et,L,L,L),e.tri(G,et,ht,L,L,L)}},T=D=>[D[0],.019,D[2]],C=.06*o;if(E([T(p),T(x),T(_),T(I)],new Z(.75*C,.85*C,1*C)),m<.05)continue;let A=D=>{let L=Math.min(7,(D[1]-t.floor.elevation)/Math.tan(s));return[D[0]-r[0]*L,.02,D[2]-r[1]*L]},P=.16*o*Math.min(1,m*1.5);E([A(p),A(x),A(_),A(I)],new Z(1*P,.84*P,.6*P))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new te,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*se,y=[-Math.sin(x),Math.cos(x)],v=l.model==="camera_ceiling",M=l.reach??(v?3:4.5),w=(l.fov??(v?360:90))*se/2,I=l.motion?new Z(.9,.12,.16):new Z(.04,.22,.28),_=new Z(0,0,0),R=Math.max(4,Math.round(w/.15)),S=.015,E=t.geo.walls2d,T=L=>{let U=L.b[0]-L.a[0],B=L.b[1]-L.a[1],k=U*U+B*B||1,V=Math.max(0,Math.min(1,((l.x-L.a[0])*U+(l.z-L.a[1])*B)/k));return Math.hypot(l.x-(L.a[0]+U*V),l.z-(L.a[1]+B*V))},C=null;for(let L of E)T(L)<.45&&(!C||T(L)<T(C))&&(C=L);let A=L=>{let U=y[0]*Math.cos(L)-y[1]*Math.sin(L),B=y[1]*Math.cos(L)+y[0]*Math.sin(L),k=M;for(let V of E){let j=V.b[0]-V.a[0],G=V.b[1]-V.a[1],J=U*G-B*j;if(Math.abs(J)<1e-9)continue;let et=((V.a[0]-l.x)*G-(V.a[1]-l.z)*j)/J,ht=((V.a[0]-l.x)*B-(V.a[1]-l.z)*U)/J;V===C&&et<=.45||et>.02&&et<k&&ht>=0&&ht<=1&&(k=et)}return k},P=L=>{let U=A(L);return[l.x+(y[0]*Math.cos(L)-y[1]*Math.sin(L))*U,S,l.z+(y[1]*Math.cos(L)+y[0]*Math.sin(L))*U]},D=s.count;for(let L=0;L<R;L++)s.tri([l.x,S,l.z],P(-w+2*w*(L+1)/R),P(-w+2*w*L/R),I,_,_);o.push({id:l.id,start:D,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||v0.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let f=l.top??e,[u,h,d]=l.size??Rh[l.lamp],g=l.base??0,b=(l.rotation??0)*se,m={ceiling:f-.07,ceiling_fan:f-.2,downlight:f-.03,spot:f-d,panel:f-.03,pendant:Math.max(.4,f-d)+.08,floor:g+d-.15,uplight:g+d,table:g+d-.09,wall:g+d/2,strip:g+Math.max(.02,d)-.01,bollard:g+d-.08,garden:g+d-.03}[l.lamp],p=(x,y,v=1)=>{n.push(x,m,y),r.push(...c.color.map(M=>M*c.level*.7*v))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,g+u*(.5+x),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6));else if(l.rise){let y=l.rise*se;n.push(l.x+Math.cos(b)*u*x*Math.cos(y),m+Math.sin(y)*u*x,l.z+Math.sin(b)*u*x*Math.cos(y)),r.push(...c.color.map(v=>v*c.level*.7*.6))}else p(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else l.lamp==="wall"?p(l.x-Math.sin(b)*(h/2+.05),l.z+Math.cos(b)*(h/2+.05)):p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new Z(...c.color.map(I=>I*.09*c.level)),y=new Z(0,0,0),v=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let I=0;I<w;I++){let _=I/w*Math.PI*2,R=(I+1)/w*Math.PI*2,S=[l.x+Math.cos(_)*v,m,l.z+Math.sin(_)*v],E=[l.x+Math.cos(R)*v,m,l.z+Math.sin(R)*v],T=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],C=[l.x+Math.cos(R)*M,.02,l.z+Math.sin(R)*M];s.tri(S,T,C,x,y,y),s.tri(S,C,E,x,y,x)}}}let a=new Kt;a.setAttribute("position",new Gt(n,3)),a.setAttribute("color",new Gt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=xh(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new te;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*se,l=Math.cos(a),c=Math.sin(a),f=(v,M,w)=>[s.x+v*l-w*c,M,s.z+v*c+w*l];if(o.apRing){let v=Qp(s),M=Ze(t.floor,s)+v.y,w=new Z(...o.apRing),I=w.clone().multiplyScalar(.45),_=new Z(0,0,0),R=(T,C)=>v.wall?f(Math.cos(T)*C,M+Math.sin(T)*C,v.z):f(Math.cos(T)*C,M,Math.sin(T)*C),S=[v.r*.52,v.r*.7,v.r*1.15],E=28;for(let T=0;T<E;T++){let C=T/E*Math.PI*2,A=(T+1)/E*Math.PI*2;r.tri(R(C,S[0]),R(C,S[1]),R(A,S[1]),w),r.tri(R(C,S[0]),R(A,S[1]),R(A,S[0]),w),r.tri(R(C,S[1]),R(C,S[2]),R(A,S[2]),I,_,_),r.tri(R(C,S[1]),R(A,S[2]),R(A,S[1]),I,_,I)}continue}if(o.keys){let v=Ze(t.floor,s)-di(s),M=s.mirror?-1:1,w=new Z(0,0,0),I=o.switchRing;if(I){let _=Math.max(.05,s.w),R=Math.max(.05,s.d),S=Math.max(.005,s.h),E=di(s)+v,T=-R/2+.002,C=new Z(...I.color.map(U=>Math.min(1,U*(.3+.45*I.level)))),A=.02+.02*I.level,P=.004,D=[f(-_/2-P,E-P,T),f(_/2+P,E-P,T),f(_/2+P,E+S+P,T),f(-_/2-P,E+S+P,T)],L=[f(-_/2-A,E-A,T),f(_/2+A,E-A,T),f(_/2+A,E+S+A,T),f(-_/2-A,E+S+A,T)];for(let U=0;U<4;U++){let B=(U+1)%4;r.tri(D[U],L[U],L[B],C,w,w),r.tri(D[U],L[B],D[B],C,w,C)}}Jp(s).forEach((_,R)=>{let S=o.keys[R];if(!S)return;let E=new Z(...S),T=E.clone().multiplyScalar(.45),C=_.x*M,A=_.y+v,P=_.r,D=P*2.6,L=[f(C-P,A-P,_.z),f(C+P,A-P,_.z),f(C+P,A+P,_.z),f(C-P,A+P,_.z)],U=[f(C-D,A-D,_.z+.001),f(C+D,A-D,_.z+.001),f(C+D,A+D,_.z+.001),f(C-D,A+D,_.z+.001)];r.tri(L[0],L[1],L[2],E),r.tri(L[0],L[2],L[3],E);for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(L[B],U[B],U[k],T,w,w),r.tri(L[B],U[k],L[k],T,w,T)}});continue}if(o.faces){let v=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),w=Math.max(.005,s.h),I=Ze(t.floor,s);for(let _ of o.faces){if(_.part==="lights"){let B=Te(s.type),k=V=>["#e8f4ff","#ff3b4f"].includes(V.color.toLowerCase());if(B&&B.parts.some(k)){let V=new Z(..._.color.map(j=>Math.min(1,j*(.4+.6*_.level))));uo(r,B,s,I,V.getHex(),k)}continue}if(_.part==="cabin"){let B=Te(s.type),k=V=>V.color.toLowerCase()==="#13283a"||V.color==="glass";if(B&&B.parts.some(k)){let V=new Z(..._.color.map(j=>Math.min(1,j*(.3+.5*_.level))));uo(r,B,s,I,V.getHex(),k);continue}}if(_.part==="burners"&&Te(s.type)){let B=Te(s.type),k=new Z(..._.color.map(V=>Math.min(1,V*(.25+.6*_.level))));uo(r,B,s,I,k.getHex(),Vd);continue}if(_.part==="burners"){let B=new Z(..._.color.map(V=>Math.min(1,V*(.25+.6*_.level)))),k=I+w+.008;for(let[V,j,G]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let J=V*Math.abs(v)/.6,et=j*M/.62,ht=14;for(let H=0;H<ht;H++){let X=H/ht*Math.PI*2,rt=(H+1)/ht*Math.PI*2;r.tri(f(J,k,et),f(J+Math.cos(X)*G,k,et+Math.sin(X)*G),f(J+Math.cos(rt)*G,k,et+Math.sin(rt)*G),B)}}continue}if(_.part==="band"||_.part==="cabin"){let B=_.part==="cabin",k=I+w*(B?.6:.42),V=B?I+w*.86:k+.07,j=new Z(..._.color.map(ht=>Math.min(1,ht*(.3+.45*_.level)))),G=Math.abs(v)/2+(B?.012:.02),J=M/2+(B?.012:.02),et=[[-G,-J],[G,-J],[G,J],[-G,J]];for(let ht=0;ht<4;ht++){let H=et[ht],X=et[(ht+1)%4],rt=f(H[0]*Math.sign(v),k,H[1]),at=f(X[0]*Math.sign(v),k,X[1]),ut=f(X[0]*Math.sign(v),V,X[1]),pt=f(H[0]*Math.sign(v),V,H[1]);r.tri(rt,at,ut,j),r.tri(rt,ut,pt,j)}continue}if(_.part==="drum"){let B=Math.abs(v),k=Math.min(B*.36,(w-.2)*.42),V=I+(w-.14)/2+.04,j=M/2-.006,G=new Z(..._.color.map(X=>Math.min(1,X*(.35+.65*_.level)))),J=G.clone().multiplyScalar(.12),et=new Z(0,0,0),ht=28,H=(X,rt)=>f(Math.cos(X)*rt,V+Math.sin(X)*rt,j);for(let X=0;X<ht;X++){let rt=X/ht*Math.PI*2,at=(X+1)/ht*Math.PI*2;r.tri(f(0,V,j),H(rt,k*.78),H(at,k*.78),J),r.tri(H(rt,k*.78),H(rt,k),H(at,k),G),r.tri(H(rt,k*.78),H(at,k),H(at,k*.78),G),r.tri(H(rt,k),H(rt,k*1.18),H(at,k*1.18),G,et,et),r.tri(H(rt,k),H(at,k*1.18),H(at,k),G,et,G)}continue}if(_.part==="beacon"){let B=new Z(..._.color.map(at=>Math.min(1,at*(.25+.45*_.level)))),k=new Z(0,0,0),V=I+w+.01,j=.6+.6*_.level,G=Math.min(Math.abs(v),M)*.38;for(let[at,ut]of[[G,0],[0,G]]){let pt=f(-at,V,-ut),gt=f(at,V,ut),Mt=f(at*.4,V+j,ut*.4),kt=f(-at*.4,V+j,-ut*.4);r.tri(pt,gt,Mt,B,B,k),r.tri(pt,Mt,kt,B,k,k)}let J=Ze(t.floor,{...s,mount_y:0})+.012,et=Math.abs(v)/2+.03,ht=M/2+.03,H=.22+.18*_.level,X=(at,ut,pt)=>f(at*(et+pt),J,ut*(ht+pt)),rt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let at=0;at<4;at++){let[ut,pt]=rt[at],[gt,Mt]=rt[(at+1)%4];r.tri(X(ut,pt,0),X(gt,Mt,0),X(gt,Mt,H),B,B,k),r.tri(X(ut,pt,0),X(gt,Mt,H),X(ut,pt,H),B,k,k)}continue}let R=_.part==="right"?.03:-Math.abs(v)/2+.03,S=_.part==="left"?-.03:Math.abs(v)/2-.03,E=I+(_.part==="bottom"?w*.45:w)+.006,T=new Z(..._.color.map(B=>Math.min(1,B*(.35+.65*_.level)))),C=new Z(0,0,0),A=(B,k,V=E)=>f(B*Math.sign(v),V,k),P=[A(R,-M/2+.03),A(S,-M/2+.03),A(S,M/2-.03),A(R,M/2-.03)];r.tri(P[0],P[2],P[1],T),r.tri(P[0],P[3],P[2],T);let D=_.part==="lid"?.025+.02*_.level:.12+.1*_.level,L=T.clone().multiplyScalar(_.part==="lid"?.7:.5),U=[A(R-D,-M/2-D,E+.004),A(S+D,-M/2-D,E+.004),A(S+D,M/2+D,E+.004),A(R-D,M/2+D,E+.004)];for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(P[B],U[k],U[B],L,C,C),r.tri(P[B],P[k],U[k],L,L,C)}}continue}let u=Te(s.type);if(u&&!u.light&&o.ring&&u.parts.some(v=>v.glow)){let v=new Z(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));uo(r,u,s,Ze(t.floor,s),v.getHex())}let h=oh(s,t.floor);if(!h)continue;let d=new Z(...o.color.map(v=>Math.min(1,v*(.35+.65*o.level)))),g=new Z(0,0,0),b=h.z+.004;if(r.tri(f(h.x0,h.y0,b),f(h.x1,h.y0,b),f(h.x1,h.y1,b),d),r.tri(f(h.x0,h.y0,b),f(h.x1,h.y1,b),f(h.x0,h.y1,b),d),o.dots&&o.dots.n>0){let{n:v,lit:M,color:w}=o.dots,I=new Z(...w),_=new Z(...w.map(E=>E*.12)),R=Math.min(.013,(h.x1-h.x0)/(v*1.5)),S=h.y1+.01;for(let E=0;E<v;E++){let T=h.x0+(E+.5)*(h.x1-h.x0)/v,C=E<M?I:_;r.tri(f(T-R/2,S,b),f(T+R/2,S,b),f(T+R/2,S+R,b),C),r.tri(f(T-R/2,S,b),f(T+R/2,S+R,b),f(T-R/2,S+R,b),C)}}if(o.plain)continue;let m=.18+.12*o.level,p=d.clone().multiplyScalar(.5),x=[f(h.x0,h.y0,b),f(h.x1,h.y0,b),f(h.x1,h.y1,b),f(h.x0,h.y1,b)],y=[f(h.x0-m,h.y0-m,b+.01),f(h.x1+m,h.y0-m,b+.01),f(h.x1+m,h.y1+m,b+.01),f(h.x0-m,h.y1+m,b+.01)];for(let v=0;v<4;v++){let M=(v+1)%4;r.tri(x[v],y[v],y[M],p,g,g),r.tri(x[v],y[M],x[M],p,g,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){var r;let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>{var o;return!!((o=this.screens.get(s))!=null&&o.picture)}));for(let[s,o]of t.screenPics)n.has(s)&&this.screens.get(s).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),(r=o.texture)==null||r.dispose(),t.screenPics.delete(s));for(let[s,o]of n){let a=this.screens.get(s),l=oh(o,t.floor);if(!l)continue;let c=t.screenPics.get(s);if(!c){let f=new Ot(new hi(1,1),new Qt({color:16777215,transparent:!0}));f.visible=!1,f.renderOrder=5,c={url:a.picture,mesh:f,texture:null},t.screenPics.set(s,c),t.group.add(f);let u=c;new sr().load(a.picture,h=>{if(t.screenPics.get(s)!==u){h.dispose();return}h.colorSpace=Ce,u.texture=h;let d=u.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,l,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}c.mesh.material.color.setScalar(.45+.55*a.level),c.texture&&this.placeScreenPicture(c.mesh,o,l,c.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s!=null&&s.width&&(s!=null&&s.height)?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),f=c/o,u=e.rotation*se,h=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,f,1),t.rotation.set(0,-u,0),t.position.set(e.x+h*Math.cos(u)-d*Math.sin(u),(n.y0+n.y1)/2,e.z+h*Math.sin(u)+d*Math.cos(u))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){var f;let e=this.flows.filter(u=>u.floorId===t.floor.id).map(Eh).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let h=this.flowPhase.get(Eh(u))??{speed:_0(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,g=u.color.map(y=>y*d),b=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(b<1e-4)continue;let m=[(u.b[0]-u.a[0])/b,(u.b[1]-u.a[1])/b,(u.b[2]-u.a[2])/b],p=[];if(Math.abs(m[1])<.5){let y=Math.hypot(m[0],m[2])||1;p.push([-m[2]/y,0,m[0]/y])}else p.push([1,0,0],[0,0,1]);let x=this.lowQuality?[[x0*1.4,1]]:[[A2,.25],[x0,1]];for(let[y,v]of x)for(let M of p){let w=y/2,I=(R,S)=>[R[0]+M[0]*w*S,R[1]+M[1]*w*S,R[2]+M[2]*w*S],_=[[I(u.a,-1),u.dist,0],[I(u.b,-1),u.dist+b,0],[I(u.b,1),u.dist+b,1],[I(u.a,1),u.dist,1]];for(let R of[0,1,2,0,2,3]){let[S,E,T]=_[R];n.push(S[0],S[1],S[2]),r.push(g[0]*v,g[1]*v,g[2]*v),s.push(E,T),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&((f=l.getAttribute("position"))==null?void 0:f.count)===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(h),d.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Kt;c.setAttribute("position",new Gt(n,3)),c.setAttribute("color",new Gt(r,3)),c.setAttribute("uv",new Gt(s,2)),c.setAttribute("flowSpeed",new Gt(o,1)),c.setAttribute("flowOffset",new Gt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=i0(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){var t;for(let e of this.floors){let n=e.geo.floor.getAttribute("color");for(let r of e.geo.roomTris){let s=new Z(r.color),o=(t=this.roomTint)==null?void 0:t.get(r.roomId);o&&s.lerp(new Z(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(L2,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)n.setXYZ(a,s.r,s.g,s.b)}n.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(t){var u;let e=new hn;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let g of h.floor.rooms)for(let[b,m]of g.points)e.expandByPoint(new W(b,d,m)),e.expandByPoint(new W(b,d+h.floor.height,m))}e.isEmpty()&&e.set(new W(-4,0,-4),new W(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new W),r=e.getSize(new W),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:((u=this.floorMap.get(this.floorId))==null?void 0:u.floor.start_view)??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let f=c?l.target:null;if(f&&n.set(f.x,f.y+(a?this.floorBase(this.floorId):0),f.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new W(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new hn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=z2();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new W),r=t.getSize(new W),s=Ah*Math.ceil((Math.max(r.x,r.z)+16)/Ah);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-Je-.02,n.z)}distanceFor(t){let e=this.camera.fov*se,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Bs;return r.setFromCamera(new ie(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){var a,l,c;let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(f=>[f.lampMesh,f.coneMesh,f.framesMesh,f.glassMesh,f.blindsMesh,f.wallMesh,f.floorMesh].filter(u=>u.visible)),o=(f,u)=>{var h;return(h=f.find(d=>u>=d.start&&u<d.end))==null?void 0:h.id};for(let f of n.intersectObjects(s,!1)){if(f.faceIndex==null)continue;let u=f.faceIndex,h=r.find(d=>d.group===f.object.parent);if(f.object===h.lampMesh||f.object===h.coneMesh){let d=o(f.object===h.lampMesh?h.lampTris:h.coneTris,u);if(d)return{entity:d}}else if(f.object===h.framesMesh||f.object===h.blindsMesh||f.object===h.glassMesh){if(this.wallMode==="cut"&&f.face){let b=((a=f.object.geometry.getAttribute("fold"))==null?void 0:a.getX(f.face.a))??Yt;if(b!==Yt&&Math.floor(b/16)===0)continue}let d=o(f.object===h.framesMesh?h.frameTris:f.object===h.glassMesh?h.glassTris:h.blindTris,u),g=d?this.pickOpenings.get(d):void 0;if(g)return{entity:g}}else if(f.object===h.wallMesh){let d=o(h.geo.furnitureTris,u),g=d?this.pickFurniture.get(d):void 0,b=d&&!g?h.floor.furniture.find(m=>m.id===d&&(m.type==="wall_switch"||m.type==="wall_socket")):void 0;if(b&&(g=this.pickFurniture.get(`${b.id}#${Rp(b,f.point.x,f.point.z)}`)),g)return{entity:g};if(!d&&f.face&&f.face.normal.y>.7){let m=Yu(h.floor).find(p=>Jt([f.point.x,f.point.z],p.points));if(m)return{floorId:h.floor.id,roomId:m.id}}if(f.face&&!d){let m=((l=h.wallMesh.geometry.getAttribute("fold"))==null?void 0:l.getX(f.face.a))??32,p=Math.floor(m/16),x=m%16,y=this.wallMode==="cut"&&p===0,v=(h.mask.glass.value&1<<x)!==0;if(!y){let M=n.ray.direction,w=Math.hypot(M.x,M.z)||1,I=[f.point.x-M.x/w*.3,f.point.z-M.z/w*.3],_=((c=h.floor.rooms.find(R=>R.points.length>=3&&Jt(I,R.points)))==null?void 0:c.id)??null;if(this.roomId!==null){if(_===this.roomId)return{floorId:h.floor.id,roomId:_}}else if(!v&&_)return{floorId:h.floor.id,roomId:_}}}}else if(f.object===h.floorMesh)return{floorId:h.floor.id,roomId:o(h.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),u)??null}}return null}onTap(t,e){var r,s,o,a,l,c;let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),(s=(r=this.options).onDeviceSelect)==null||s.call(r,n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+fc),this.invalidate(),(a=(o=this.options).onDeviceTap)==null||a.call(o,n.entity,t,e);return}(c=(l=this.options).onRoomTap)==null||c.call(l,(n==null?void 0:n.floorId)??this.floorId??"",(n==null?void 0:n.roomId)??null)}furnitureAt(t,e){var a;let n=this.rayAt(t,e),r=this.activeFloors(),s=l=>[l.screenMesh,l.fridgeMesh,...[...l.screenPics.values()].map(c=>c.mesh)],o=r.flatMap(l=>[l.lampMesh,l.wallMesh,...s(l)].filter(c=>c.visible));for(let l of n.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=r.find(h=>h.group===l.object.parent||s(h).includes(l.object));if(!c)continue;if(l.object!==c.lampMesh&&l.object!==c.wallMesh){let h=this.furnitureNear(c,l.point.x,l.point.z);if(h)return{fv:c,id:h,y:l.point.y};continue}let u=(a=(l.object===c.lampMesh?c.lampFurnTris:c.geo.furnitureTris).find(h=>l.faceIndex>=h.start&&l.faceIndex<h.end))==null?void 0:a.id;if(u)return{fv:c,id:u,y:l.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*se,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,f=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,f);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return(r==null?void 0:r.id)??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){var n;return((n=this.furnitureAt(t,e))==null?void 0:n.id)??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){var o,a,l,c,f,u,h,d;if((o=this.surfaceGrab)!=null&&o.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let g=n?(a=this.devices.find(y=>y.id===n))==null?void 0:a.furnitureId:void 0,b=g?null:this.furnitureAt(t,e),m=g??(b==null?void 0:b.id),p=m?this.floors.find(y=>y.floor.furniture.some(v=>v.id===m)):void 0,x=(l=p==null?void 0:p.floor.furniture.find(y=>y.id===m))==null?void 0:l.type;return!!(p&&m&&x&&r.has(x))&&this.grabItem(p,m,t,e)}if(n){let g=(c=this.devices.find(m=>m.id===n))==null?void 0:c.furnitureId,b=g?this.floors.find(m=>m.floor.furniture.some(p=>p.id===g)):void 0;return!g||!b?this.grabDevice(n,t,e):this.grabItem(b,g,t,e)}let s=this.furnitureAt(t,e);if(!s){let g=this.pick(t,e);return g&&"entity"in g?this.grabDevice(g.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),(u=(f=this.options).onFurnitureSelect)==null||u.call(f,null)),this.selectedDevice&&(this.selectDevice(null),(d=(h=this.options).onDeviceSelect)==null||d.call(h,null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){var u,h,d,g;let o=t.floor.furniture.find(b=>b.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,f=this.rayAt(n,r).ray.direction;if(s!==void 0&&-f.y<.34){let b=this.camera.position,m=this.camera.getWorldDirection(new W),p=Math.hypot(m.x,m.z)||1,x=[m.x/p,m.z/p],y=Math.hypot(l[0]-b.x,l[1]-b.z,(a??0)-b.y),v=this.renderer.domElement.getBoundingClientRect().height||1,M=2*y*Math.tan(this.camera.fov*Math.PI/360)/v;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-x[1],x[0]],fwd:x,perPx:M,gain:Math.min(2,1/Math.max(.5,-f.y))}}return o.locked?(this.selectFurniture(o.id),(h=(u=this.options).onFurnitureSelect)==null||h.call(u,o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),(g=(d=this.options).onFurnitureSelect)==null||g.call(d,o.id),!0)}grabDevice(t,e,n){var a,l,c,f;let r=this.devices.find(u=>u.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),(l=(a=this.options).onDeviceSelect)==null||l.call(a,t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),(f=(c=this.options).onDeviceSelect)==null||f.call(c,t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){var e,n;t&&this.selectedFurniture&&(this.selectFurniture(null),(n=(e=this.options).onFurnitureSelect)==null||n.call(e,null)),this.selectedDevice=t;for(let[r,s]of this.devicePins)s.el.classList.toggle("fp3d-dev-sel",r===t)}dragFurniture(t,e){var h,d,g,b;if(this.surfaceDragging){(h=this.surfaceGrab)==null||h.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let m=this.floorMap.get(n.floorId),p=this.devices.find(v=>v.id===n.id),x=m&&this.floorPoint(m,t,e);if(!m||!p||!x)return;let y=((d=this.building)==null?void 0:d.settings.grid)??.05;n.x=p.x=Math.round((x[0]+n.offset[0])/y)*y,n.z=p.z=Math.round((x[1]+n.offset[1])/y)*y,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let m=(t-o.x0)*o.perPx,p=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*m-o.fwd[0]*p-r.offset[0],o.fz+o.right[1]*m-o.fwd[1]*p-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=((g=this.building)==null?void 0:g.settings.grid)??.05,c=s.floor.furniture.find(m=>m.id===r.id),f=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?Cm(s.floor,c,f,u,((b=this.building)==null?void 0:b.settings.wall_interior)??0):[f,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){var n,r,s,o,a;if(this.surfaceDragging){this.surfaceDragging=!1,(n=this.surfaceGrab)==null||n.end();return}let t=this.deviceGrab;this.deviceGrab=null,t!=null&&t.moved&&((s=(r=this.options).onDeviceMove)==null||s.call(r,t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3));let e=this.grab;this.grab=null,e!=null&&e.moved&&((a=(o=this.options).onFurnitureMove)==null||a.call(o,e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3)),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Le,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s==null?void 0:s.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new Z(.25,.9,1):new Z(1,.71,.28)))}n&&(this.ghost=new $e(e.geometry(),new tn({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){var m,p;let s=((m=this.grab)==null?void 0:m.id)===n.id?this.grab.x:n.x,o=((p=this.grab)==null?void 0:p.id)===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),f=Te(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Ze(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:Ze(e.floor,n),u=n.rotation*se,h=Math.cos(u),d=Math.sin(u),g=(x,y,v)=>[s+x*h-y*d,v,o+x*d+y*h],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let x=0;x<4;x++){let[y,v]=b[x],[M,w]=b[(x+1)%4];t.seg(g(y,v,f+.01),g(M,w,f+.01),r),t.seg(g(y,v,f+c),g(M,w,f+c),r),t.seg(g(y,v,f+.01),g(y,v,f+c),r)}t.seg(g(-n.w/2,n.d/2+.03,f+.02),g(n.w/2,n.d/2+.03,f+.02),new Z(1,1,1))}onHold(t,e){var r,s;let n=this.pick(t,e);n&&"entity"in n&&((s=(r=this.options).onDeviceHold)==null||s.call(r,n.entity,t,e))}swipeStart(t,e,n,r){var o,a;if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||((a=(o=this.options).onDeviceSwipe)==null?void 0:a.call(o,s.entity,"start",0,t,e))!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){var p,x;let n=this.floors.filter(y=>y.floor.rooms.some(v=>v.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new qe(s,o);a.texture.colorSpace=Ce;let l=new qn(-1,1,1,-1,.1,400),c=this.floors.map(y=>({fv:y,visible:y.group.visible,y:y.y,o:y.o,standing:y.mask.standing.value,glass:y.mask.glass.value})),f=((p=this.roof)==null?void 0:p.group.visible)??!1,u=((x=this.ghost)==null?void 0:x.visible)??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let b=g.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let y of n){for(let P of this.floors)P.group.visible=P===y;y.y=0,y.o=1,this.applyFloor(y),y.group.visible=!0,y.mask.standing.value=0,y.mask.glass.value=0;let v=y.floor.rooms.flatMap(P=>P.points),M=y.floor.elevation,w=new hn(new W(Math.min(...v.map(P=>P[0]))-.3,M,Math.min(...v.map(P=>P[1]))-.3),new W(Math.max(...v.map(P=>P[0]))+.3,M+Math.min(y.floor.cut_height,y.floor.height),Math.max(...v.map(P=>P[1]))+.3)),I=w.getCenter(new W),_=-.6,R=.8,S=new W(Math.sin(R)*Math.sin(_),Math.cos(R),Math.sin(R)*Math.cos(_));l.position.copy(I).addScaledVector(S,100),l.lookAt(I),l.updateMatrixWorld();let E=.5,T=.5;for(let P of[w.min.x,w.max.x])for(let D of[w.min.y,w.max.y])for(let L of[w.min.z,w.max.z]){let U=new W(P,D,L).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(U.x)),T=Math.max(T,Math.abs(U.y))}let C=s/o;E/T>C?T=E/C:E=T*C,l.left=-E*1.05,l.right=E*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let A=b.createImageData(s,o);for(let P=0;P<o;P++)A.data.set(d.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);b.putImageData(A,0,0),m.push({floorId:y.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let y of c)y.fv.y=y.y,y.fv.o=y.o,y.fv.mask.standing.value=y.standing,y.fv.mask.glass.value=y.glass,this.applyFloor(y.fv),y.fv.group.visible=y.visible;this.roof&&(this.roof.group.visible=f,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?s0(n.room,void 0,void 0,n.obstacles):wh(n.rest),l=a.length?a:wh(n.rest),c=0;l.forEach((f,u)=>{Math.hypot(f[0]-r.motion.pos[0],f[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(h0[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new te,s=(a,l,c,f,u)=>{let h=[];for(let d=0;d<20;d++)h.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ae(r,h,l,c,f,u,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new Qt({vertexColors:!0});let o=new te;Ae(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new ke,n=new Qt({color:h0[t.mode]});return e.add(new Ot(this.robotGeo,this.robotMat),new Ot(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=o0(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new Z(.25-.2*a,.95-.83*a,1-.7*a),r=new Z(0,0,0),s=new Z(.3,1,.6),o=.02;for(let a of this.floors){let l=new te;for(let f of e)f.floorId===a.floor.id&&f.points.forEach(([u,h],d)=>{let g=f.points[d-1];if(g){let b=Math.hypot(u-g[0],h-g[1])||1,m=-(h-g[1])/b*.1,p=(u-g[0])/b*.1;l.tri([g[0]+m,o,g[1]+p],[u+m,o,h+p],[u-m,o,h-p],s,s,s),l.tri([g[0]+m,o,g[1]+p],[u-m,o,h-p],[g[0]-m,o,g[1]-p],s,s,s)}for(let b=0;b<10;b++){let m=b/10*Math.PI*2,p=(b+1)/10*Math.PI*2;l.tri([u,o,h],[u+Math.cos(p)*.35,o,h+Math.sin(p)*.35],[u+Math.cos(m)*.35,o,h+Math.sin(m)*.35],s,r,r)}});let c=null;for(let f of t){if(f.floorId!==a.floor.id)continue;let u=n(f.age);if(c){let h=Math.hypot(f.x-c.x,f.z-c.z)||1,d=-(f.z-c.z)/h*.06,g=(f.x-c.x)/h*.06,b=n(c.age);l.tri([c.x+d,o,c.z+g],[f.x+d,o,f.z+g],[f.x-d,o,f.z-g],b,u,u),l.tri([c.x+d,o,c.z+g],[f.x-d,o,f.z-g],[c.x-d,o,c.z-g],b,u,b)}for(let h=0;h<12;h++){let d=h/12*Math.PI*2,g=(h+1)/12*Math.PI*2;l.tri([f.x,o,f.z],[f.x+Math.cos(g)*.22,o,f.z+Math.sin(g)*.22],[f.x+Math.cos(d)*.22,o,f.z+Math.sin(d)*.22],u,r,r)}c=f}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*se,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*se)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new W(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+fc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new W(e,a.floor.elevation+a.ty+r,n),radius:(o==null?void 0:o.radius)??5.5,phi:(o==null?void 0:o.phi)??.78,...(o==null?void 0:o.theta)!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l==null||l.classList.add("fp3d-dev-found"),setTimeout(()=>l==null?void 0:l.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[g,b]of this.flashes){let m=this.deviceFloor.get(g);m&&d.add(m),b<=t&&this.flashes.delete(g)}a=this.flashes.size>0;for(let g of this.floors)d.has(g.floor.id)&&this.buildLamps(g)}let l=this.placeRoof(e),c=this.stepRobots(t),f=this.stepWeather(t),u=r||s||o||a||l,h=[];if((r||this.controls.busy)&&h.push("camera"),s&&h.push("floors"),o&&h.push("openings"),a&&h.push("flash"),l&&h.push("roof"),this.flowActive&&h.push("flow"),this.soundActive&&h.push("sound"),this.poolActive&&h.push("pool"),this.solarActive&&h.push("solar"),this.effectTick&&h.push("effect"),this.fanFloors.size&&h.push("fan"),c&&h.push("robot"),n&&h.push("orbit"),this.tintTick&&h.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=u?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,h),u&&this.invalidate(),(this.effectFloors.size||this.fanFloors.size)&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*y0:y0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.fanAngle+=d/1e3*I2,this.effectTick=!0;for(let g of this.floors)g.o<.02||!(this.effectFloors.has(g.floor.id)||this.fanFloors.has(g.floor.id))||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},d)}!u&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!u&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*b0:b0))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,u)=>{let h=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&h&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new W,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,f=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(b,f,m).project(this.camera);let p=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:x}),(!c||p>c.x)&&(c={x:p,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,h=8+this.labelInset,d=l.x-u-14,g=l.y;d<h&&this.labelInset&&(d=c.x+14,g=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-u-8,d)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new W(o.p[0],o.p[1]+((l==null?void 0:l.y)??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),f=this.camera.position.clone().sub(c),u=f.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let h=f.normalize().dot(new W(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,f?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){var s;let n=new W,r=this.houseView;for(let o of this.persons){let a=this.personPins.get(o.id),l=this.floorMap.get(o.floorId);if(!a)continue;if(!l||r||l.to<.99||l.o<.9||this.otherFloor(l)){this.place(a,null);continue}n.set(o.x,l.floor.elevation+l.y+.9,o.z).project(this.camera);let c=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(a,c?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let a=(s=this.devicePins.get(o.id))==null?void 0:s.el;if(!a)continue;let l=this.floorMap.get(o.floorId),c=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!l||r&&!c||l.to<.99||l.o<.9||o.pin===!1||this.otherFloor(l)){this.place(a,null);continue}if(n.set(o.x,l.floor.elevation+l.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(a,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(a)!==u&&(this.pinMode.set(a,u),a.classList.toggle("fp3d-dev-full",u==="full"),a.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(a,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=D2(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function D2(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function N2(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,f)=>{e.strokeStyle=`rgba(55,224,255,${f})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let f=o+l*.37%1*256;n(f,c,f,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let f=a+l*.53%1*256;n(c,f,c+256/7,f,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let f=l?256/4:0;for(let u of[f,f+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new ui(t);return s.flipY=!1,s.wrapS=bn,s.wrapT=bn,s.anisotropy=4,s.colorSpace=Ce,s}function O2(i){let t=new Qt({map:i,transparent:!0,blending:Fe,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function U2(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new ui(i);return e.wrapS=tr,e.wrapT=tr,e.colorSpace=Ce,e}function Eh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function _0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function B2(i){let t=new Qt({vertexColors:!0,transparent:!0,blending:Fe,depthWrite:!1,side:ue});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function M0(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(f=>f.id===r),a=i.rooms.findIndex(f=>f.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function k2(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new ui(t);return r.colorSpace=Ce,r}function z2(){let t=Ah,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new ui(e);return s.anisotropy=4,s.colorSpace=Ce,s}function nR(i,t){return new Ch(i,t)}function Th(i,t,e,n){let[r,s,o]=t.size??Rh[t.lamp],a=t.base??0,l=(t.rotation??0)*se,c=Math.cos(l),f=Math.sin(l),u=(b,m)=>[t.x+b*c-m*f,t.z+b*f+m*c],h=(b,m,p,x,y,v=14)=>{let M=[];for(let w=0;w<v;w++){let I=w/v*Math.PI*2;M.push([t.x+Math.cos(I)*b,t.z+Math.sin(I)*b])}Ae(i,M,m,p,x,y,{aoFrom:0,bottom:!0})},d=(b,m,p,x,y,v,M,w=M)=>Ae(i,[u(b,p),u(m,p),u(m,x),u(b,x)],y,v,M,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(g*.25,e-.04,e,Zt,Zt,8),h(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"ceiling_fan":{let b=Math.max(.09,g*.17),m=.1,p=e-.06,x=p-m;if(t.fanBlades||t.fanStatic){let y=x+m*.32,v=Math.max(b+.15,g),M=Math.max(.05,b*.85);for(let w=0;w<5;w++){let I=l+(t.spinAngle??0)+w/5*Math.PI*2,_=Math.cos(I),R=Math.sin(I),S=t.x+_*b*.9,E=t.z+R*b*.9,T=t.x+_*v,C=t.z+R*v,A=[[S+R*M,E-_*M],[T+R*M*.55,C-_*M*.55],[T-R*M*.55,C+_*M*.55],[S-R*M,E+_*M]];Ae(i,A,y,y+.014,Zt,Zt,{aoFrom:0,bottom:!0})}}if(!t.fanBlades){h(Math.max(.05,b*.7),e-.015,e,Zt,Zt,10),h(.02,p,e-.015,Zt,Zt,6),h(b,x,p,Zt,Zt,16);let y=x-.002,v=Math.max(.12,o-m-.08),M=b*.55,w=Math.max(M+.04,b*1.35);for(let I=0;I<6;I++){let _=w+(M-w)*((I+.5)/6);d(-_,_,-_,_,y-v+v*I/6,y-v+v*(I+1)/6,n,n)}}break}case"pendant":{let b=Math.max(.4,e-o);h(.06,e-.02,e,Zt,Zt,8);let m=t.variant==="globe"?b+2*g:t.variant==="drum"?b+.24:b+.2;if(h(.008,m,e-.02,Zt,Zt,5),t.variant==="globe")for(let x=0;x<7;x++){let y=Math.PI*(x/7),v=Math.PI*((x+1)/7);h(g*Math.max(.2,Math.sin((y+v)/2)),b+g-g*Math.cos(y),b+g-g*Math.cos(v),n,n,14)}else if(t.variant==="cone")for(let x=0;x<4;x++)h(g*(.25+.75*(4-x)/4),b+.06*x,b+.06*(x+1),n,n,16);else t.variant==="drum"?h(g,b,b+.24,n,n,18):(h(g*.35,b+.14,b+.2,n,n,12),h(g,b,b+.14,n,n,16));break}case"downlight":h(g,e-.012,e,Zt,Zt,12),h(g*.7,e-.02,e-.012,n,n,12);break;case"spot":h(g*.6,e-.02,e,Zt,Zt,10),h(g,e-Math.max(.06,o),e-.02,Zt,Zt,12),h(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,Zt,Zt),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,g*.6),a,a+.03,Zt,Zt),h(.014,a+.03,a+o-.12,Zt,Zt,6),h(g,a+o-.14,a+o-.02,Zt,Zt),h(g*.92,a+o-.02,a+o,n,n);break;case"bollard":h(g,a,a+o-.14,Zt,Zt,10),h(g*.9,a+o-.14,a+o-.03,n,n,10),h(g*1.1,a+o-.03,a+o,Zt,Zt,10);break;case"garden":h(.012,a,a+o-.08,Zt,Zt,5),h(g,a+o-.08,a+o-.01,Zt,Zt,10),h(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,g*.7),a,a+.03,Zt,Zt),h(.014,a+.03,a+o-.28,Zt,Zt,6),h(g,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,g*.55),a,a+.03,Zt,Zt),h(.012,a+.03,a+o-.16,Zt,Zt,6),h(g,a+o-.18,a+o,n,n);break;case"wall":{let b=t.base??Pl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,b,b+o,Zt),d(-r/2,r/2,-s/2+.02,s/2,b+o*.15,b+o*.85,n);break}case"strip":{let b=Math.max(.02,o),m=t.base!=null?t.base+b:e-.04;if(!t.roll&&!t.upright&&!t.rise){d(-r/2,r/2,-s/2,s/2,m-b,m,n);break}let p=(t.roll??0)*se,x=Math.cos(p),y=Math.sin(p),v=t.upright?a+r/2:m-b/2,M=(t.upright?0:t.rise??0)*se,w=(E,T,C)=>{let A=E,P=T*x-C*y,D=T*y+C*x;return M&&([A,P]=[A*Math.cos(M)-P*Math.sin(M),A*Math.sin(M)+P*Math.cos(M)]),t.upright&&([A,P]=[-P,A]),[t.x+A*c-D*f,v+P,t.z+A*f+D*c]},I=[w(-r/2,-b/2,-s/2),w(r/2,-b/2,-s/2),w(r/2,-b/2,s/2),w(-r/2,-b/2,s/2),w(-r/2,b/2,-s/2),w(r/2,b/2,-s/2),w(r/2,b/2,s/2),w(-r/2,b/2,s/2)],_=new Z(n),R=[t.x,v,t.z],S=(E,T,C,A)=>{let[P,D,L]=[I[E],I[T],I[C]],U=[(D[1]-P[1])*(L[2]-P[2])-(D[2]-P[2])*(L[1]-P[1]),(D[2]-P[2])*(L[0]-P[0])-(D[0]-P[0])*(L[2]-P[2]),(D[0]-P[0])*(L[1]-P[1])-(D[1]-P[1])*(L[0]-P[0])],B=[P[0]-R[0],P[1]-R[1],P[2]-R[2]],k=U[0]*B[0]+U[1]*B[1]+U[2]*B[2]<0,[V,j,G,J]=k?[I[A],I[C],I[T],I[E]]:[I[E],I[T],I[C],I[A]];i.tri(V,j,G,_,_,_),i.tri(V,G,J,_,_,_)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{gh as FloorMap,Ch as FloorplanViewer,bh as WalkCamera,nR as createViewer,W3 as funLib,M2 as furnitureFront,_2 as furniturePreview,F2 as isLowEnd,Th as pushLampModel};
