var lf=0,kc=1,cf=2;var ks=1,uf=2,Zr=3,Yn=0,Je=1,de=2,qn=0,Li=1,Le=2,zc=3,zs=4,hf=5;var rr=100,ff=101,df=102,pf=103,mf=104,gf=200,xf=201,bf=202,vf=203,Vc=204,Gc=205,_f=206,yf=207,Mf=208,Sf=209,wf=210,Tf=211,Ef=212,Af=213,Rf=214,ta=0,ea=1,na=2,kr=3,ia=4,ra=5,sa=6,oa=7,Hc=0,Cf=1,Pf=2,Ln=0,Wc=1,Xc=2,Yc=3,qc=4,$c=5,Zc=6,Kc=7;var Jc=300,Fi=301,sr=302,Da=303,Na=304,Vs=306,Qi=1e3,xn=1001,aa=1002,Xe=1003,If=1004;var Gs=1005;var Ze=1006,Ua=1007;var Di=1008;var vn=1009,jc=1010,Qc=1011,Kr=1012,Oa=1013,Fn=1014,Dn=1015,Nn=1016,Ba=1017,ka=1018,Jr=1020,tu=35902,eu=35899,nu=1021,iu=1022,Sn=1023,Gn=1026,Ni=1027,ru=1028,za=1029,Ui=1030,Va=1031;var Ga=1033,Hs=33776,Ws=33777,Xs=33778,Ys=33779,Ha=35840,Wa=35841,Xa=35842,Ya=35843,qa=36196,$a=37492,Za=37496,Ka=37488,Ja=37489,qs=37490,ja=37491,Qa=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,ol=37815,al=37816,ll=37817,cl=37818,ul=37819,hl=37820,fl=37821,dl=36492,pl=36494,ml=36495,gl=36283,xl=36284,$s=36285,bl=36286;var vs=2300,la=2301,Jo=2302,Rc=2303,Cc=2400,Pc=2401,Ic=2402;var Lf=3200;var su=0,Ff=1,ui="",De="srgb",_s="srgb-linear",ys="linear",ge="srgb";var jo=7680;var Df=519,Nf=512,Uf=513,Of=514,vl=515,Bf=516,kf=517,_l=518,zf=519,Vf=35044,ou=35048;var au="300 es",In=2e3,Ms=2001;function u0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function h0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Gf(){let i=zr("canvas");return i.style.display="block",i}var Ph={},Vr=null;function lu(...i){let t="THREE."+i.shift();Vr?Vr("log",t,...i):console.log(t,...i)}function Hf(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Wt(...i){i=Hf(i);let t="THREE."+i.shift();if(Vr)Vr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Xt(...i){i=Hf(i);let t="THREE."+i.shift();if(Vr)Vr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ji(...i){let t=i.join(" ");t in Ph||(Ph[t]=!0,Wt(...i))}function Wf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Xf={[ta]:ea,[na]:sa,[ia]:oa,[kr]:ra,[ea]:ta,[sa]:na,[oa]:ia,[ra]:kr},Hn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var sc=Math.PI/180,ca=180/Math.PI;function Zs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function le(i,t,e){return Math.max(t,Math.min(e,i))}function f0(i,t){return(i%t+t)%t}function oc(i,t,e){return(1-e)*i+e*t}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function dn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var du=class du{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};du.prototype.isVector2=!0;var te=du,Wn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],h=n[r+2],u=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(u!==x||l!==f||c!==d||h!==g){let m=l*f+c*d+h*g+u*x;m<0&&(f=-f,d=-d,g=-g,x=-x,m=-m);let p=1-a;if(m<.9995){let v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+x*a}else{l=l*p+f*a,c=c*p+d*a,h=h*p+g*a,u=u*p+x*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],h=n[r+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(r/2),u=a(s/2),f=l(n/2),d=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:Wt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(le(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+r*c-s*l,this._y=r*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-r*a,this._w=o*h-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},pu=class pu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ih.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ih.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),h=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=r+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ac.copy(this).projectOnVector(t),this.sub(ac)}reflect(t){return this.sub(ac.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(le(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pu.prototype.isVector3=!0;var H=pu,ac=new H,Ih=new Wn,mu=class mu{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=r,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=r[0],m=r[3],p=r[6],v=r[1],y=r[4],_=r[7],M=r[2],w=r[5],R=r[8];return s[0]=o*x+a*v+l*M,s[3]=o*m+a*y+l*w,s[6]=o*p+a*_+l*R,s[1]=c*x+h*v+u*M,s[4]=c*m+h*y+u*w,s[7]=c*p+h*_+u*R,s[2]=f*x+d*v+g*M,s[5]=f*m+d*y+g*w,s[8]=f*p+d*_+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(r*c-h*n)*x,t[2]=(a*n-r*o)*x,t[3]=f*x,t[4]=(h*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return ji("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(lc.makeScale(t,e)),this}rotate(t){return ji("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(lc.makeRotation(-t)),this}translate(t,e){return ji("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};mu.prototype.isMatrix3=!0;var $t=mu,lc=new $t,Lh=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fh=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function d0(){let i={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ge&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ge&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ui?ys:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ji("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ji("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[_s]:{primaries:t,whitePoint:n,transfer:ys,toXYZ:Lh,fromXYZ:Fh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:ge,toXYZ:Lh,fromXYZ:Fh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var oe=d0();function oi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Br(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var wr,ua=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{wr===void 0&&(wr=zr("canvas")),wr.width=t.width,wr.height=t.height;let r=wr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=wr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return Wt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},p0=0,Gr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:p0++}),this.uuid=Zs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(cc(r[o].image)):s.push(cc(r[o]))}else s=cc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function cc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ua.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Wt("Texture: Unable to serialize Texture."),{})}var m0=0,uc=new H,sn=class i extends Hn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=xn,r=xn,s=Ze,o=Di,a=Sn,l=vn,c=i.DEFAULT_ANISOTROPY,h=ui){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:m0++}),this.uuid=Zs(),this.name="",this.source=new Gr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(uc).x}get height(){return this.source.getSize(uc).y}get depth(){return this.source.getSize(uc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Wt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qi:t.x=t.x-Math.floor(t.x);break;case xn:t.x=t.x<0?0:1;break;case aa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qi:t.y=t.y-Math.floor(t.y);break;case xn:t.y=t.y<0?0:1;break;case aa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Jc;sn.DEFAULT_ANISOTROPY=1;var gu=class gu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(c+1)/2,_=(d+1)/2,M=(p+1)/2,w=(h+f)/4,R=(u+x)/4,b=(g+m)/4;return y>_&&y>M?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=w/n,s=R/n):_>M?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=w/r,s=b/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=R/s,r=b/s),this.set(n,r,s,e),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(f-h)/v,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=le(this.x,t.x,e.x),this.y=le(this.y,t.y,e.y),this.z=le(this.z,t.z,e.z),this.w=le(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=le(this.x,t,e),this.y=le(this.y,t,e),this.z=le(this.z,t,e),this.w=le(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(le(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gu.prototype.isVector4=!0;var Ce=gu,ha=class extends Hn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ze,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new sn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ze,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new Gr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends ha{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ss=class extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var fa=class extends sn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Fa=class Fa{constructor(t,e,n,r,s,o,a,l,c,h,u,f,d,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,h,u,f,d,g,x,m)}set(t,e,n,r,s,o,a,l,c,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fa().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Tr.setFromMatrixColumn(t,0).length(),s=1/Tr.setFromMatrixColumn(t,1).length(),o=1/Tr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-x*c,e[9]=-a*l,e[2]=x-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,x=c*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+x,e[1]=l*u,e[5]=x*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(g0,t,x0)}lookAt(t,e,n){let r=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),vi.crossVectors(n,mn),vi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),vi.crossVectors(n,mn)),vi.normalize(),Eo.crossVectors(mn,vi),r[0]=vi.x,r[4]=Eo.x,r[8]=mn.x,r[1]=vi.y,r[5]=Eo.y,r[9]=mn.y,r[2]=vi.z,r[6]=Eo.z,r[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],v=n[3],y=n[7],_=n[11],M=n[15],w=r[0],R=r[4],b=r[8],S=r[12],A=r[1],C=r[5],T=r[9],F=r[13],E=r[2],P=r[6],D=r[10],L=r[14],O=r[3],B=r[7],k=r[11],z=r[15];return s[0]=o*w+a*A+l*E+c*O,s[4]=o*R+a*C+l*P+c*B,s[8]=o*b+a*T+l*D+c*k,s[12]=o*S+a*F+l*L+c*z,s[1]=h*w+u*A+f*E+d*O,s[5]=h*R+u*C+f*P+d*B,s[9]=h*b+u*T+f*D+d*k,s[13]=h*S+u*F+f*L+d*z,s[2]=g*w+x*A+m*E+p*O,s[6]=g*R+x*C+m*P+p*B,s[10]=g*b+x*T+m*D+p*k,s[14]=g*S+x*F+m*L+p*z,s[3]=v*w+y*A+_*E+M*O,s[7]=v*R+y*C+_*P+M*B,s[11]=v*b+y*T+_*D+M*k,s[15]=v*S+y*F+_*L+M*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15],v=l*d-c*f,y=a*d-c*u,_=a*f-l*u,M=o*d-c*h,w=o*f-l*h,R=o*u-a*h;return e*(x*v-m*y+p*_)-n*(g*v-m*M+p*w)+r*(g*y-x*M+p*R)-s*(g*_-x*w+m*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(s*h-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],v=e*a-n*o,y=e*l-r*o,_=e*c-s*o,M=n*l-r*a,w=n*c-s*a,R=r*c-s*l,b=h*x-u*g,S=h*m-f*g,A=h*p-d*g,C=u*m-f*x,T=u*p-d*x,F=f*p-d*m,E=v*F-y*T+_*C+M*A-w*S+R*b;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return t[0]=(a*F-l*T+c*C)*P,t[1]=(r*T-n*F-s*C)*P,t[2]=(x*R-m*w+p*M)*P,t[3]=(f*w-u*R-d*M)*P,t[4]=(l*A-o*F-c*S)*P,t[5]=(e*F-r*A+s*S)*P,t[6]=(m*_-g*R-p*y)*P,t[7]=(h*R-f*_+d*y)*P,t[8]=(o*T-a*A+c*b)*P,t[9]=(n*A-e*T-s*b)*P,t[10]=(g*w-x*_+p*v)*P,t[11]=(u*_-h*w-d*v)*P,t[12]=(a*S-o*C-l*b)*P,t[13]=(e*C-n*S+r*b)*P,t[14]=(x*y-g*M-m*v)*P,t[15]=(h*M-u*y+f*v)*P,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,h*a+n,h*l-r*o,0,c*l-r*a,h*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,x=o*h,m=o*u,p=a*u,v=l*c,y=l*h,_=l*u,M=n.x,w=n.y,R=n.z;return r[0]=(1-(x+p))*M,r[1]=(d+_)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(d-_)*w,r[5]=(1-(f+p))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(g+y)*R,r[9]=(m-v)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Tr.set(r[0],r[1],r[2]).length(),a=Tr.set(r[4],r[5],r[6]).length(),l=Tr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),An.copy(this);let c=1/o,h=1/a,u=1/l;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=h,An.elements[5]*=h,An.elements[6]*=h,An.elements[8]*=u,An.elements[9]*=u,An.elements[10]*=u,e.setFromRotationMatrix(An),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-r),f=(e+t)/(e-t),d=(n+r)/(n-r),g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===In)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ms)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=In,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-r),f=-(e+t)/(e-t),d=-(n+r)/(n-r),g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===In)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ms)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Fa.prototype.isMatrix4=!0;var Te=Fa,Tr=new H,An=new Te,g0=new H(0,0,0),x0=new H(1,1,1),vi=new H,Eo=new H,mn=new H,Dh=new Te,Nh=new Wn,Ti=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],h=r[9],u=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(le(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-le(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(le(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-le(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(le(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-le(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Wt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Nh.setFromEuler(this),this.setFromQuaternion(Nh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ti.DEFAULT_ORDER="XYZ";var Hr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},b0=0,Uh=new H,Er=new Wn,ei=new Te,Ao=new H,ds=new H,v0=new H,_0=new Wn,Oh=new H(1,0,0),Bh=new H(0,1,0),kh=new H(0,0,1),zh={type:"added"},y0={type:"removed"},Ar={type:"childadded",child:null},hc={type:"childremoved",child:null},pn=class i extends Hn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Zs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new H,e=new Ti,n=new Wn,r=new H(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new $t}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.multiply(Er),this}rotateOnWorldAxis(t,e){return Er.setFromAxisAngle(t,e),this.quaternion.premultiply(Er),this}rotateX(t){return this.rotateOnAxis(Oh,t)}rotateY(t){return this.rotateOnAxis(Bh,t)}rotateZ(t){return this.rotateOnAxis(kh,t)}translateOnAxis(t,e){return Uh.copy(t).applyQuaternion(this.quaternion),this.position.add(Uh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Oh,t)}translateY(t){return this.translateOnAxis(Bh,t)}translateZ(t){return this.translateOnAxis(kh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ao.copy(t):Ao.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ds,Ao,this.up):ei.lookAt(Ao,ds,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Er.setFromRotationMatrix(ei),this.quaternion.premultiply(Er.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(zh),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(y0),hc.child=t,this.dispatchEvent(hc),hc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(zh),Ar.child=t,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,t,v0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,_0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};pn.DEFAULT_UP=new H(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ke=class extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}},M0={type:"move"},Wr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ke,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ke,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ke,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(M0)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ke;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Yf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Ro={h:0,s:0,l:0};function fc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var K=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=oe.workingColorSpace){if(t=f0(t,1),e=le(e,0,1),n=le(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=fc(o,s,t+1/3),this.g=fc(o,s,t),this.b=fc(o,s,t-1/3)}return oe.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&Wt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Wt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Wt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Yf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Wt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Br(t.r),this.g=Br(t.g),this.b=Br(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return oe.workingToColorSpace(nn.copy(this),t),Math.round(le(nn.r*255,0,255))*65536+Math.round(le(nn.g*255,0,255))*256+Math.round(le(nn.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.workingToColorSpace(nn.copy(this),e);let n=nn.r,r=nn.g,s=nn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.workingToColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=De){oe.workingToColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,r=nn.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Ro);let n=oc(_i.h,Ro.h,e),r=oc(_i.s,Ro.s,e),s=oc(_i.l,Ro.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new K;K.NAMES=Yf;var ws=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Ei=class extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ti,this.environmentIntensity=1,this.environmentRotation=new Ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Rn=new H,ni=new H,dc=new H,ii=new H,Rr=new H,Cr=new H,Vh=new H,pc=new H,mc=new H,gc=new H,xc=new Ce,bc=new Ce,vc=new Ce,wi=class i{constructor(t=new H,e=new H,n=new H){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Rn.subVectors(t,e),r.cross(Rn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Rn.subVectors(r,e),ni.subVectors(n,e),dc.subVectors(t,e);let o=Rn.dot(Rn),a=Rn.dot(ni),l=Rn.dot(dc),c=ni.dot(ni),h=ni.dot(dc),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return xc.setScalar(0),bc.setScalar(0),vc.setScalar(0),xc.fromBufferAttribute(t,e),bc.fromBufferAttribute(t,n),vc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(xc,s.x),o.addScaledVector(bc,s.y),o.addScaledVector(vc,s.z),o}static isFrontFacing(t,e,n,r){return Rn.subVectors(n,e),ni.subVectors(t,e),Rn.cross(ni).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Rn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Rn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Rr.subVectors(r,n),Cr.subVectors(s,n),pc.subVectors(t,n);let l=Rr.dot(pc),c=Cr.dot(pc);if(l<=0&&c<=0)return e.copy(n);mc.subVectors(t,r);let h=Rr.dot(mc),u=Cr.dot(mc);if(h>=0&&u<=h)return e.copy(r);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Rr,o);gc.subVectors(t,s);let d=Rr.dot(gc),g=Cr.dot(gc);if(g>=0&&d<=g)return e.copy(s);let x=d*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Cr,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return Vh.subVectors(s,r),a=(u-h)/(u-h+(d-g)),e.copy(r).addScaledVector(Vh,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Rr,o).addScaledVector(Cr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},hn=class{constructor(t=new H(1/0,1/0,1/0),e=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Cn):Cn.fromBufferAttribute(s,o),Cn.applyMatrix4(t.matrixWorld),this.expandByPoint(Cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Co.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Co.copy(n.boundingBox)),Co.applyMatrix4(t.matrixWorld),this.union(Co)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Cn),Cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),Po.subVectors(this.max,ps),Pr.subVectors(t.a,ps),Ir.subVectors(t.b,ps),Lr.subVectors(t.c,ps),yi.subVectors(Ir,Pr),Mi.subVectors(Lr,Ir),$i.subVectors(Pr,Lr);let e=[0,-yi.z,yi.y,0,-Mi.z,Mi.y,0,-$i.z,$i.y,yi.z,0,-yi.x,Mi.z,0,-Mi.x,$i.z,0,-$i.x,-yi.y,yi.x,0,-Mi.y,Mi.x,0,-$i.y,$i.x,0];return!_c(e,Pr,Ir,Lr,Po)||(e=[1,0,0,0,1,0,0,0,1],!_c(e,Pr,Ir,Lr,Po))?!1:(Io.crossVectors(yi,Mi),e=[Io.x,Io.y,Io.z],_c(e,Pr,Ir,Lr,Po))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ri),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ri=[new H,new H,new H,new H,new H,new H,new H,new H],Cn=new H,Co=new hn,Pr=new H,Ir=new H,Lr=new H,yi=new H,Mi=new H,$i=new H,ps=new H,Po=new H,Io=new H,Zi=new H;function _c(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Zi.fromArray(i,s);let a=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Be=new H,Lo=new te,S0=0,Mn=class extends Hn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:S0++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Vf,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Lo.fromBufferAttribute(this,e),Lo.applyMatrix3(t),this.setXY(e,Lo.x,Lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=dn(e,this.array),n=dn(n,this.array),r=dn(r,this.array),s=dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ts=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var tr=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Gt=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},w0=new hn,ms=new H,yc=new H,Ai=class{constructor(t=new H,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):w0.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);let e=ms.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ms,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(yc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(yc)),this.expandByPoint(ms.copy(t.center).sub(yc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},T0=0,yn=new Te,Mc=new pn,Fr=new H,gn=new hn,gs=new hn,We=new H,Zt=class i extends Hn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Zs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(u0(t)?tr:Ts)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return yn.makeRotationFromQuaternion(t),this.applyMatrix4(yn),this}rotateX(t){return yn.makeRotationX(t),this.applyMatrix4(yn),this}rotateY(t){return yn.makeRotationY(t),this.applyMatrix4(yn),this}rotateZ(t){return yn.makeRotationZ(t),this.applyMatrix4(yn),this}translate(t,e,n){return yn.makeTranslation(t,e,n),this.applyMatrix4(yn),this}scale(t,e,n){return yn.makeScale(t,e,n),this.applyMatrix4(yn),this}lookAt(t){return Mc.lookAt(t),Mc.updateMatrix(),this.applyMatrix4(Mc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fr).negate(),this.translate(Fr.x,Fr.y,Fr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Gt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Wt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ai);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){let n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];gs.setFromBufferAttribute(a),this.morphTargetsRelative?(We.addVectors(gn.min,gs.min),gn.expandByPoint(We),We.addVectors(gn.max,gs.max),gn.expandByPoint(We)):(gn.expandByPoint(gs.min),gn.expandByPoint(gs.max))}gn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)We.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(We));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)We.fromBufferAttribute(a,c),l&&(Fr.fromBufferAttribute(t,c),We.add(Fr)),r=Math.max(r,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let b=0;b<n.count;b++)a[b]=new H,l[b]=new H;let c=new H,h=new H,u=new H,f=new te,d=new te,g=new te,x=new H,m=new H;function p(b,S,A){c.fromBufferAttribute(n,b),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,A),f.fromBufferAttribute(s,b),d.fromBufferAttribute(s,S),g.fromBufferAttribute(s,A),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let C=1/(d.x*g.y-g.x*d.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(C),a[b].add(x),a[S].add(x),a[A].add(x),l[b].add(m),l[S].add(m),l[A].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let b=0,S=v.length;b<S;++b){let A=v[b],C=A.start,T=A.count;for(let F=C,E=C+T;F<E;F+=3)p(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let y=new H,_=new H,M=new H,w=new H;function R(b){M.fromBufferAttribute(r,b),w.copy(M);let S=a[b];y.copy(S),y.sub(M.multiplyScalar(M.dot(S))).normalize(),_.crossVectors(w,S);let C=_.dot(l[b])<0?-1:1;o.setXYZW(b,y.x,y.y,y.z,C)}for(let b=0,S=v.length;b<S;++b){let A=v[b],C=A.start,T=A.count;for(let F=C,E=C+T;F<E;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new H,s=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(r,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new Mn(f,h,u)}if(this.index===null)return Wt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Sc=new H,E0=new H,A0=new $t,Pn=class{constructor(t=new H(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=Sc.subVectors(n,e).cross(E0.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(Sc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||A0.getNormalMatrix(t),r=this.coplanarPoint(Sc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},R0=0,ai=class extends Hn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Zs(),this.name="",this.type="Material",this.blending=Li,this.side=Yn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vc,this.blendDst=Gc,this.blendEquation=rr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=kr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Df,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=jo,this.stencilZFail=jo,this.stencilZPass=jo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Wt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Wt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new K().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Pn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var si=new H,wc=new H,Fo=new H,Do=new H,er=class{constructor(t=new H,e=new H(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,si)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=si.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(si.copy(this.origin).addScaledVector(this.direction,e),si.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){wc.copy(t).add(e).multiplyScalar(.5),Fo.copy(e).sub(t).normalize(),Do.copy(this.origin).sub(wc);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Fo),a=Do.dot(this.direction),l=-Do.dot(Fo),c=Do.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(wc).addScaledVector(Fo,f),d}intersectSphere(t,e){if(t.radius<0)return null;si.subVectors(t.center,this.origin);let n=si.dot(this.direction),r=si.dot(si)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,si)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,u=t.x-o.x,f=t.y-o.y,d=t.z-o.z,g=e.x-o.x,x=e.y-o.y,m=e.z-o.z,p=n.x-o.x,v=n.y-o.y,y=n.z-o.z,_=Math.abs(l),M=Math.abs(c),w=Math.abs(h),R,b,S,A,C,T,F,E,P,D,L,O;if(_>=M&&_>=w?(S=l,T=u,P=g,O=p,l>=0?(R=c,b=h,A=f,C=d,F=x,E=m,D=v,L=y):(R=h,b=c,A=d,C=f,F=m,E=x,D=y,L=v)):M>=w?(S=c,T=f,P=x,O=v,c>=0?(R=h,b=l,A=d,C=u,F=m,E=g,D=y,L=p):(R=l,b=h,A=u,C=d,F=g,E=m,D=p,L=y)):(S=h,T=d,P=m,O=y,h>=0?(R=l,b=c,A=u,C=f,F=g,E=x,D=p,L=v):(R=c,b=l,A=f,C=u,F=x,E=g,D=v,L=p)),S===0)return null;let B=R/S,k=b/S,z=1/S,et=A-B*T,G=C-k*T,J=F-B*P,it=E-k*P,ht=D-B*O,Y=L-k*O,$=ht*it-Y*J,at=et*Y-G*ht,ct=J*G-it*et;if(r){if($<0||at<0||ct<0)return null}else if(($<0||at<0||ct<0)&&($>0||at>0||ct>0))return null;let ut=$+at+ct;if(ut===0)return null;let pt=z*($*T+at*P+ct*O);return(ut>0?pt<0:pt>0)?null:this.at(pt/ut,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ti,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Gh=new Te,Ki=new er,No=new Ai,Hh=new H,Uo=new H,Oo=new H,Bo=new H,Tc=new H,ko=new H,Wh=new H,zo=new H,Vt=class extends pn{constructor(t=new Zt,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ko.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Tc.fromBufferAttribute(u,t),o?ko.addScaledVector(Tc,h):ko.addScaledVector(Tc.sub(e),h))}e.add(ko)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(s),Ki.copy(t.ray).recast(t.near),!(No.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(No,Hh)===null||Ki.origin.distanceToSquared(Hh)>(t.far-t.near)**2))&&(Gh.copy(s).invert(),Ki.copy(t.ray).applyMatrix4(Gh),!(n.boundingBox!==null&&Ki.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ki)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,M=y;_<M;_+=3){let w=a.getX(_),R=a.getX(_+1),b=a.getX(_+2);r=Vo(this,p,t,n,c,h,u,w,R,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=Vo(this,o,t,n,c,h,u,v,y,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),y=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let _=v,M=y;_<M;_+=3){let w=_,R=_+1,b=_+2;r=Vo(this,p,t,n,c,h,u,w,R,b),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let v=m,y=m+1,_=m+2;r=Vo(this,o,t,n,c,h,u,v,y,_),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}};function C0(i,t,e,n,r,s,o,a){let l;if(t.side===Je?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===Yn,a),l===null)return null;zo.copy(a),zo.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(zo);return c<e.near||c>e.far?null:{distance:c,point:zo.clone(),object:i}}function Vo(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Uo),i.getVertexPosition(l,Oo),i.getVertexPosition(c,Bo);let h=C0(i,t,e,n,Uo,Oo,Bo,Wh);if(h){let u=new H;wi.getBarycoord(Wh,Uo,Oo,Bo,u),r&&(h.uv=wi.getInterpolatedAttribute(r,a,l,c,u,new te)),s&&(h.uv1=wi.getInterpolatedAttribute(s,a,l,c,u,new te)),o&&(h.normal=wi.getInterpolatedAttribute(o,a,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new H,materialIndex:0};wi.getNormal(Uo,Oo,Bo,f.normal),h.face=f,h.barycoord=u}return h}var da=class extends sn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=Xe,h=Xe,u,f){super(null,o,a,l,c,h,r,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=new Ai,P0=new te(.5,.5),Go=new H,Es=class{constructor(t=new Pn,e=new Pn,n=new Pn,r=new Pn,s=new Pn,o=new Pn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=In,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],x=s[9],m=s[10],p=s[11],v=s[12],y=s[13],_=s[14],M=s[15];if(r[0].setComponents(c-o,d-h,p-g,M-v).normalize(),r[1].setComponents(c+o,d+h,p+g,M+v).normalize(),r[2].setComponents(c+a,d+u,p+x,M+y).normalize(),r[3].setComponents(c-a,d-u,p-x,M-y).normalize(),n)r[4].setComponents(l,f,m,_).normalize(),r[5].setComponents(c-l,d-f,p-m,M-_).normalize();else if(r[4].setComponents(c-l,d-f,p-m,M-_).normalize(),e===In)r[5].setComponents(c+l,d+f,p+m,M+_).normalize();else if(e===Ms)r[5].setComponents(l,f,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(t){Ji.center.set(0,0,0);let e=P0.distanceTo(t.center);return Ji.radius=.7071067811865476+e,Ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(Go.x=r.normal.x>0?t.max.x:t.min.x,Go.y=r.normal.y>0?t.max.y:t.min.y,Go.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Go)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ke=class extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},pa=new H,ma=new H,Xh=new Te,xs=new er,Ho=new Ai,Ec=new H,Yh=new H,ga=class extends pn{constructor(t=new Zt,e=new Ke){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)pa.fromBufferAttribute(e,r-1),ma.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=pa.distanceTo(ma);t.setAttribute("lineDistance",new Gt(n,1))}else Wt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ho.copy(n.boundingSphere),Ho.applyMatrix4(r),Ho.radius+=s,t.ray.intersectsSphere(Ho)===!1)return;Xh.copy(r).invert(),xs.copy(t.ray).applyMatrix4(Xh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=h.getX(x),v=h.getX(x+1),y=Wo(this,t,xs,l,p,v,x);y&&e.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),p=Wo(this,t,xs,l,x,m,g-1);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=c){let p=Wo(this,t,xs,l,x,x+1,x);p&&e.push(p)}if(this.isLineLoop){let x=Wo(this,t,xs,l,g-1,d,g-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Wo(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(pa.fromBufferAttribute(a,r),ma.fromBufferAttribute(a,s),e.distanceSqToSegment(pa,ma,Ec,Yh)>n)return;Ec.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ec);if(!(c<t.near||c>t.far))return{distance:c,point:Yh.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var qh=new H,$h=new H,Ye=class extends ga{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)qh.fromBufferAttribute(e,r),$h.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+qh.distanceTo($h);t.setAttribute("lineDistance",new Gt(n,1))}else Wt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var nr=class extends ai{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zh=new Te,Lc=new er,Xo=new Ai,Yo=new H,Xr=class extends pn{constructor(t=new Zt,e=new nr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Xo.radius+=s,t.ray.intersectsSphere(Xo)===!1)return;Zh.copy(r).invert(),Lc.copy(t.ray).applyMatrix4(Zh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,x=d;g<x;g++){let m=c.getX(g);Yo.fromBufferAttribute(u,m),Kh(Yo,m,l,r,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,x=d;g<x;g++)Yo.fromBufferAttribute(u,g),Kh(Yo,g,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Kh(i,t,e,n,r,s,o){let a=Lc.distanceSqToPoint(i);if(a<e){let l=new H;Lc.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var As=class extends sn{constructor(t=[],e=Fi,n,r,s,o,a,l,c,h){super(t,e,n,r,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},li=class extends sn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Ri=class extends sn{constructor(t,e,n=Fn,r,s,o,a=Xe,l=Xe,c,h=Gn,u=1){if(h!==Gn&&h!==Ni)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:u};super(f,r,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Gr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},xa=class extends Ri{constructor(t,e=Fn,n=Fi,r,s,o=Xe,a=Xe,l,c=Gn){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Rs=class extends sn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Yr=class i extends Zt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,r,o,2),g("x","z","y",1,-1,t,n,-e,r,o,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function g(x,m,p,v,y,_,M,w,R,b,S){let A=_/R,C=M/b,T=_/2,F=M/2,E=w/2,P=R+1,D=b+1,L=0,O=0,B=new H;for(let k=0;k<D;k++){let z=k*C-F;for(let et=0;et<P;et++){let G=et*A-T;B[x]=G*v,B[m]=z*y,B[p]=E,c.push(B.x,B.y,B.z),B[x]=0,B[m]=0,B[p]=w>0?1:-1,h.push(B.x,B.y,B.z),u.push(et/R),u.push(1-k/b),L+=1}}for(let k=0;k<b;k++)for(let z=0;z<R;z++){let et=f+z+P*k,G=f+z+P*(k+1),J=f+(z+1)+P*(k+1),it=f+(z+1)+P*k;l.push(et,G,it),l.push(G,J,it),O+=6}a.addGroup(d,O,S),d+=O,f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Cs=class i extends Zt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new H,h=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(a,3)),this.setAttribute("uv",new Gt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function I0(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=qf(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=U0(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let h=a,u=l;for(let f=e;f<r;f+=e){let d=i[f],g=i[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return Ps(s,o,e,a,l,c,0),o}function qf(i,t,e,n,r){let s;if(r===q0(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Jh(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Jh(o/n|0,i[o],i[o+1],s);return s&&qr(s,s.next)&&(Ls(s),s=s.next),s}function ir(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(qr(e,e.next)||Re(e.prev,e,e.next)===0)){if(Ls(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,r,s,o){if(!i)return;!o&&s&&V0(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?F0(i,n,r,s):L0(i)){t.push(l.i,i.i,c.i),Ls(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=D0(ir(i),t),Ps(i,t,e,n,r,s,2)):o===2&&N0(i,t,e,n,r,s):Ps(ir(i),t,e,n,r,s,1);break}}}function L0(i){let t=i.prev,e=i,n=i.next;if(Re(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=Math.min(r,s,o),u=Math.min(a,l,c),f=Math.max(r,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&bs(r,a,s,l,o,c,g.x,g.y)&&Re(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function F0(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Re(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,h=r.y,u=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),x=Math.max(a,l,c),m=Math.max(h,u,f),p=Fc(d,g,t,e,n),v=Fc(x,m,t,e,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=p&&_&&_.z<=v;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&bs(a,h,l,u,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&bs(a,h,l,u,c,f,_.x,_.y)&&Re(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=p;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&bs(a,h,l,u,c,f,y.x,y.y)&&Re(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=v;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&bs(a,h,l,u,c,f,_.x,_.y)&&Re(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function D0(i,t){let e=i;do{let n=e.prev,r=e.next.next;!qr(n,r)&&Zf(n,e,e.next,r)&&Is(n,r)&&Is(r,n)&&(t.push(n.i,e.i,r.i),Ls(e),Ls(e.next),e=i=r),e=e.next}while(e!==i);return ir(e)}function N0(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&W0(o,a)){let l=Kf(o,a);o=ir(o,o.next),l=ir(l,l.next),Ps(o,t,e,n,r,s,0),Ps(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function U0(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=qf(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(H0(c))}r.sort(O0);for(let s=0;s<r.length;s++)e=B0(r[s],e);return e}function O0(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function B0(i,t){let e=k0(i,t);if(!e)return t;let n=Kf(e,i);return ir(n,n.next),ir(e,e.next)}function k0(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(qr(i,e))return e;do{if(qr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&$f(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);Is(e,i)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&z0(o,e)))&&(o=e,h=u)}e=e.next}while(e!==a);return o}function z0(i,t){return Re(i.prev,i,t.prev)<0&&Re(t.next,i,i.next)<0}function V0(i,t,e,n){let r=i;do r.z===0&&(r.z=Fc(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,G0(r)}function G0(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Fc(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function H0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $f(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function bs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&$f(i,t,e,n,r,s,o,a)}function W0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!X0(i,t)&&(Is(i,t)&&Is(t,i)&&Y0(i,t)&&(Re(i.prev,i,t.prev)||Re(i,t.prev,t))||qr(i,t)&&Re(i.prev,i,i.next)>0&&Re(t.prev,t,t.next)>0)}function Re(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function qr(i,t){return i.x===t.x&&i.y===t.y}function Zf(i,t,e,n){let r=$o(Re(i,t,e)),s=$o(Re(i,t,n)),o=$o(Re(e,n,i)),a=$o(Re(e,n,t));return!!(r!==s&&o!==a||r===0&&qo(i,e,t)||s===0&&qo(i,n,t)||o===0&&qo(e,i,n)||a===0&&qo(e,t,n))}function qo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function $o(i){return i>0?1:i<0?-1:0}function X0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Zf(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Is(i,t){return Re(i.prev,i,i.next)<0?Re(i,t,i.next)>=0&&Re(i,i.prev,t)>=0:Re(i,t,i.prev)<0||Re(i,i.next,t)<0}function Y0(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Kf(i,t){let e=Dc(i.i,i.x,i.y),n=Dc(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Jh(i,t,e,n){let r=Dc(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Ls(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Dc(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function q0(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Nc=class{static triangulate(t,e,n=2){return I0(t,e,n)}},Fs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];jh(t),Qh(n,t);let o=t.length;e.forEach(jh);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Qh(n,e[l]);let a=Nc.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function jh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Qh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ci=class i extends Zt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*f-o;for(let y=0;y<c;y++){let _=y*u-s;g.push(_,-v,0),x.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let y=v+c*p,_=v+c*(p+1),M=v+1+c*(p+1),w=v+1+c*p;d.push(y,_,w),d.push(_,M,w)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ds=class i extends Zt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/r,d=new H,g=new te;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let p=s+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<r;x++){let m=x*(n+1);for(let p=0;p<n;p++){let v=p+m,y=v,_=v+n+1,M=v+n+2,w=v+1;a.push(y,_,w),a.push(_,M,w)}}this.setIndex(a),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(c,3)),this.setAttribute("uv",new Gt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function or(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(tf(r))r.isRenderTargetTexture?(Wt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(tf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function ln(i){let t={};for(let e=0;e<i.length;e++){let n=or(i[e]);for(let r in n)t[r]=n[r]}return t}function tf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function $0(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Jf={clone:or,merge:ln},Z0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,K0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,an=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Z0,this.fragmentShader=K0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=or(t.uniforms),this.uniformsGroups=$0(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(r.value);break;case"v2":this.uniforms[n].value=new te().fromArray(r.value);break;case"v3":this.uniforms[n].value=new H().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Ce().fromArray(r.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ba=class extends an{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var va=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Lf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_a=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Dr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Ac(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ya=class extends Ci{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cc,endingEnd:Cc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pc:s=t,a=2*e-n;break;case Ic:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pc:o=t,l=2*n-e;break;case Ic:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(r-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,v=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let M=0;M!==a;++M)s[M]=p*o[h+M]+v*o[c+M]+y*o[l+M]+_*o[u+M];return s}},Ma=class extends Ci{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(r-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Sa=class extends Ci{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},wa=class extends Ci{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(n-e)/(r-e),x=1-g;for(let m=0;m!==a;++m)s[m]=o[c+m]*x+o[l+m]*g;return s}let f=a*2,d=t-1;for(let g=0;g!==a;++g){let x=o[c+g],m=o[l+g],p=d*f+g*2,v=u[p],y=u[p+1],_=t*f+g*2,M=h[_],w=h[_+1],R=j0(n,e,v,M,r);s[g]=jf(R,x,y,w,m)}return s}};function jf(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function J0(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function j0(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=jf(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=J0(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var bn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Dr(e,this.TimeBufferType),this.values=Dr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Dr(t.times,Array),values:Dr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Ac(t.settings)&&(n.settings={inTangents:Dr(t.settings.inTangents,Array),outTangents:Dr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ma(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new wa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case vs:e=this.InterpolantFactoryMethodDiscrete;break;case la:e=this.InterpolantFactoryMethodLinear;break;case Jo:e=this.InterpolantFactoryMethodSmooth;break;case Rc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Wt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vs;case this.InterpolantFactoryMethodLinear:return la;case this.InterpolantFactoryMethodSmooth:return Jo;case this.InterpolantFactoryMethodBezier:return Rc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Ac(this.settings)&&(ef(this.settings.inTangents,t),ef(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&h0(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Jo,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Ac(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function ef(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=la;var Pi=class extends bn{constructor(t,e,n){super(t,e,n)}};Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=vs;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Ta.prototype.ValueTypeName="color";var Ea=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Ea.prototype.ValueTypeName="number";var Aa=class extends Ci{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let h=c+a;c!==h;c+=4)Wn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Ns=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Aa(this.times,this.values,this.getValueSize(),t)}};Ns.prototype.ValueTypeName="quaternion";Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Ii=class extends bn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="string";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=vs;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Ra=class extends bn{constructor(t,e,n,r){super(t,e,n,r)}};Ra.prototype.ValueTypeName="vector";var Qo={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(nf(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!nf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nf(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Ca=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qf=new Ca,$r=class{constructor(t){this.manager=t!==void 0?t:Qf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var Nr=new WeakMap,Pa=class extends $r{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Qo.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=Nr.get(o);u===void 0&&(u=[],Nr.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=zr("img");function l(){h(),e&&e(this);let u=Nr.get(this)||[];for(let f=0;f<u.length;f++){let d=u[f];d.onLoad&&d.onLoad(this)}Nr.delete(this),s.manager.itemEnd(t)}function c(u){h(),r&&r(u),Qo.remove(`image:${t}`);let f=Nr.get(this)||[];for(let d=0;d<f.length;d++){let g=f[d];g.onError&&g.onError(u)}Nr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Qo.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var Us=class extends $r{constructor(t){super(t)}load(t,e,n,r){let s=new sn,o=new Pa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Zo=new H,Ko=new Wn,Vn=new H,Os=class extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=In,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Zo,Ko,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Ko,Vn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Zo,Ko,Vn),Vn.x===1&&Vn.y===1&&Vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zo,Ko,Vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Si=new H,rf=new te,sf=new te,rn=class extends Os{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(sc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ca*2*Math.atan(Math.tan(sc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,rf,sf),e.subVectors(sf,rf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(sc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Xn=class extends Os{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ur=-90,Or=1,Ia=class extends pn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new rn(Ur,Or,t,e);r.layers=this.layers,this.add(r);let s=new rn(Ur,Or,t,e);s.layers=this.layers,this.add(s);let o=new rn(Ur,Or,t,e);o.layers=this.layers,this.add(o);let a=new rn(Ur,Or,t,e);a.layers=this.layers,this.add(a);let l=new rn(Ur,Or,t,e);l.layers=this.layers,this.add(l);let c=new rn(Ur,Or,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===In)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},La=class extends rn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var uu="\\[\\]\\.:\\/",Q0=new RegExp("["+uu+"]","g"),hu="[^"+uu+"]",tg="[^"+uu.replace("\\.","")+"]",eg=/((?:WC+[\/:])*)/.source.replace("WC",hu),ng=/(WCOD+)?/.source.replace("WCOD",tg),ig=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hu),rg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hu),sg=new RegExp("^"+eg+ng+ig+rg+"$"),og=["material","materials","bones","map"],Uc=class{constructor(t,e,n){let r=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Q0,"")}static parseTrackName(t){let e=sg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);og.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Wt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Uc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uS=new Float32Array(1);var of=new Te,Bs=class{constructor(t,e,n=0,r=1/0){this.ray=new er(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new Hr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Xt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return of.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(of),this}intersectObject(t,e=!0,n=[]){return Oc(t,this,n,e),n.sort(af),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Oc(t[r],this,n,e);return n.sort(af),n}};function af(i,t){return i.distance-t.distance}function Oc(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Oc(s[o],t,e,!0)}}var xu=class xu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};xu.prototype.isMatrix2=!0;var Bc=xu;function fu(i,t,e,n){let r=ag(n);switch(e){case nu:return i*t;case ru:return i*t/r.components*r.byteLength;case za:return i*t/r.components*r.byteLength;case Ui:return i*t*2/r.components*r.byteLength;case Va:return i*t*2/r.components*r.byteLength;case iu:return i*t*3/r.components*r.byteLength;case Sn:return i*t*4/r.components*r.byteLength;case Ga:return i*t*4/r.components*r.byteLength;case Hs:case Ws:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Xs:case Ys:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Wa:case Ya:return Math.max(i,16)*Math.max(t,8)/4;case Ha:case Xa:return Math.max(i,8)*Math.max(t,8)/2;case qa:case $a:case Ka:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:case qs:case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case nl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case dl:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gl:case xl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case $s:case bl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ag(i){switch(i){case vn:case jc:return{byteLength:1,components:1};case Kr:case Qc:case Nn:return{byteLength:2,components:1};case Ba:case ka:return{byteLength:2,components:4};case Fn:case Oa:case Dn:return{byteLength:4,components:1};case tu:case eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Wt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function yd(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function cg(i){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],x=u[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let x=u[d];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ug=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,fg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,bg=`#ifdef USE_BATCHING
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
#endif`,vg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_g=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sg=`#ifdef USE_IRIDESCENCE
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
#endif`,wg=`#ifdef USE_BUMPMAP
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
#endif`,Tg=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fg=`#define PI 3.141592653589793
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
} // validated`,Dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ng=`vec3 transformedNormal = objectNormal;
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
#endif`,Ug=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Og=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gg=`#ifdef USE_ENVMAP
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
#endif`,Hg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$g=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jg=`#ifdef USE_GRADIENTMAP
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
}`,jg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ex=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,nx=`#ifdef USE_ENVMAP
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
#endif`,ix=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ax=`PhysicalMaterial material;
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
#endif`,lx=`uniform sampler2D dfgLUT;
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
}`,cx=`
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
#endif`,ux=`#if defined( RE_IndirectDiffuse )
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
#endif`,hx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,px=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_x=`#if defined( USE_POINTS_UV )
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
#endif`,yx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Tx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ex=`#ifdef USE_MORPHTARGETS
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
#endif`,Ax=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Px=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ix=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Fx=`#ifdef USE_NORMALMAP
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
#endif`,Dx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ux=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ox=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Vx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$x=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Zx=`float getShadowMask() {
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
}`,Kx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Jx=`#ifdef USE_SKINNING
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
#endif`,jx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qx=`#ifdef USE_SKINNING
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
#endif`,tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,eb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ib=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rb=`#ifdef USE_TRANSMISSION
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
#endif`,sb=`#ifdef USE_TRANSMISSION
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hb=`uniform sampler2D t2D;
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`#include <common>
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
}`,xb=`#if DEPTH_PACKING == 3200
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
}`,bb=`#define DISTANCE
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
}`,vb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,wb=`#include <common>
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
}`,Tb=`uniform vec3 diffuse;
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
}`,Eb=`#define LAMBERT
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
}`,Ab=`#define LAMBERT
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
}`,Rb=`#define MATCAP
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
}`,Cb=`#define MATCAP
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
}`,Pb=`#define NORMAL
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
}`,Ib=`#define NORMAL
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
}`,Lb=`#define PHONG
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
}`,Fb=`#define PHONG
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
}`,Db=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,Ub=`#define TOON
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
}`,Ob=`#define TOON
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
}`,Bb=`uniform float size;
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
}`,kb=`uniform vec3 diffuse;
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
}`,zb=`#include <common>
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
}`,Vb=`uniform vec3 color;
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
}`,Gb=`uniform float rotation;
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
}`,Hb=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:ug,alphahash_pars_fragment:hg,alphamap_fragment:fg,alphamap_pars_fragment:dg,alphatest_fragment:pg,alphatest_pars_fragment:mg,aomap_fragment:gg,aomap_pars_fragment:xg,batching_pars_vertex:bg,batching_vertex:vg,begin_vertex:_g,beginnormal_vertex:yg,bsdfs:Mg,iridescence_fragment:Sg,bumpmap_pars_fragment:wg,clipping_planes_fragment:Tg,clipping_planes_pars_fragment:Eg,clipping_planes_pars_vertex:Ag,clipping_planes_vertex:Rg,color_fragment:Cg,color_pars_fragment:Pg,color_pars_vertex:Ig,color_vertex:Lg,common:Fg,cube_uv_reflection_fragment:Dg,defaultnormal_vertex:Ng,displacementmap_pars_vertex:Ug,displacementmap_vertex:Og,emissivemap_fragment:Bg,emissivemap_pars_fragment:kg,colorspace_fragment:zg,colorspace_pars_fragment:Vg,envmap_fragment:Gg,envmap_common_pars_fragment:Hg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:nx,envmap_vertex:Yg,fog_vertex:qg,fog_pars_vertex:$g,fog_fragment:Zg,fog_pars_fragment:Kg,gradientmap_pars_fragment:Jg,lightmap_pars_fragment:jg,lights_lambert_fragment:Qg,lights_lambert_pars_fragment:tx,lights_pars_begin:ex,lights_toon_fragment:ix,lights_toon_pars_fragment:rx,lights_phong_fragment:sx,lights_phong_pars_fragment:ox,lights_physical_fragment:ax,lights_physical_pars_fragment:lx,lights_fragment_begin:cx,lights_fragment_maps:ux,lights_fragment_end:hx,lightprobes_pars_fragment:fx,logdepthbuf_fragment:dx,logdepthbuf_pars_fragment:px,logdepthbuf_pars_vertex:mx,logdepthbuf_vertex:gx,map_fragment:xx,map_pars_fragment:bx,map_particle_fragment:vx,map_particle_pars_fragment:_x,metalnessmap_fragment:yx,metalnessmap_pars_fragment:Mx,morphinstance_vertex:Sx,morphcolor_vertex:wx,morphnormal_vertex:Tx,morphtarget_pars_vertex:Ex,morphtarget_vertex:Ax,normal_fragment_begin:Rx,normal_fragment_maps:Cx,normal_pars_fragment:Px,normal_pars_vertex:Ix,normal_vertex:Lx,normalmap_pars_fragment:Fx,clearcoat_normal_fragment_begin:Dx,clearcoat_normal_fragment_maps:Nx,clearcoat_pars_fragment:Ux,iridescence_pars_fragment:Ox,opaque_fragment:Bx,packing:kx,premultiplied_alpha_fragment:zx,project_vertex:Vx,dithering_fragment:Gx,dithering_pars_fragment:Hx,roughnessmap_fragment:Wx,roughnessmap_pars_fragment:Xx,shadowmap_pars_fragment:Yx,shadowmap_pars_vertex:qx,shadowmap_vertex:$x,shadowmask_pars_fragment:Zx,skinbase_vertex:Kx,skinning_pars_vertex:Jx,skinning_vertex:jx,skinnormal_vertex:Qx,specularmap_fragment:tb,specularmap_pars_fragment:eb,tonemapping_fragment:nb,tonemapping_pars_fragment:ib,transmission_fragment:rb,transmission_pars_fragment:sb,uv_pars_fragment:ob,uv_pars_vertex:ab,uv_vertex:lb,worldpos_vertex:cb,background_vert:ub,background_frag:hb,backgroundCube_vert:fb,backgroundCube_frag:db,cube_vert:pb,cube_frag:mb,depth_vert:gb,depth_frag:xb,distance_vert:bb,distance_frag:vb,equirect_vert:_b,equirect_frag:yb,linedashed_vert:Mb,linedashed_frag:Sb,meshbasic_vert:wb,meshbasic_frag:Tb,meshlambert_vert:Eb,meshlambert_frag:Ab,meshmatcap_vert:Rb,meshmatcap_frag:Cb,meshnormal_vert:Pb,meshnormal_frag:Ib,meshphong_vert:Lb,meshphong_frag:Fb,meshphysical_vert:Db,meshphysical_frag:Nb,meshtoon_vert:Ub,meshtoon_frag:Ob,points_vert:Bb,points_frag:kb,shadow_vert:zb,shadow_frag:Vb,sprite_vert:Gb,sprite_frag:Hb},wt={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},Zn={basic:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:ln([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:ln([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:ln([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new K(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:ln([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:ln([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:ln([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:ln([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:ln([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:ln([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distance:{uniforms:ln([wt.common,wt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distance_vert,fragmentShader:Qt.distance_frag},shadow:{uniforms:ln([wt.lights,wt.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Zn.physical={uniforms:ln([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var yl={r:0,b:0,g:0},Wb=new Te,Md=new $t;Md.set(-1,0,0,0,1,0,0,0,1);function Xb(i,t,e,n,r,s){let o=new K(0),a=r===!0?0:1,l,c,h=null,u=0,f=null;function d(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){let _=v.backgroundBlurriness>0;y=t.get(y,_)}return y}function g(v){let y=!1,_=d(v);_===null?m(o,a):_&&_.isColor&&(m(_,1),y=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||y)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,y){let _=d(y);_&&(_.isCubeTexture||_.mapping===Vs)?(c===void 0&&(c=new Vt(new Yr(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:or(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wb.makeRotationFromEuler(y.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Md),c.material.toneMapped=oe.getTransfer(_.colorSpace)!==ge,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Vt(new ci(2,2),new an({name:"BackgroundMaterial",uniforms:or(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(_.colorSpace)!==ge,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(yl,cu(i)),e.buffers.color.setClear(yl.r,yl.g,yl.b,y,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:x,dispose:p}}function Yb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(C,T,F,E,P){let D=!1,L=u(C,E,F,T);s!==L&&(s=L,c(s.object)),D=d(C,E,F,P),D&&g(C,E,F,P),P!==null&&t.update(P,i.ELEMENT_ARRAY_BUFFER),(D||o)&&(o=!1,_(C,T,F,E),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(P).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,T,F,E){let P=E.wireframe===!0,D=n[T.id];D===void 0&&(D={},n[T.id]=D);let L=C.isInstancedMesh===!0?C.id:0,O=D[L];O===void 0&&(O={},D[L]=O);let B=O[F.id];B===void 0&&(B={},O[F.id]=B);let k=B[P];return k===void 0&&(k=f(l()),B[P]=k),k}function f(C){let T=[],F=[],E=[];for(let P=0;P<e;P++)T[P]=0,F[P]=0,E[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:F,attributeDivisors:E,object:C,attributes:{},index:null}}function d(C,T,F,E){let P=s.attributes,D=T.attributes,L=0,O=F.getAttributes();for(let B in O)if(O[B].location>=0){let z=P[B],et=D[B];if(et===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(et=C.instanceColor)),z===void 0||z.attribute!==et||et&&z.data!==et.data)return!0;L++}return s.attributesNum!==L||s.index!==E}function g(C,T,F,E){let P={},D=T.attributes,L=0,O=F.getAttributes();for(let B in O)if(O[B].location>=0){let z=D[B];z===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(z=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(z=C.instanceColor));let et={};et.attribute=z,z&&z.data&&(et.data=z.data),P[B]=et,L++}s.attributes=P,s.attributesNum=L,s.index=E}function x(){let C=s.newAttributes;for(let T=0,F=C.length;T<F;T++)C[T]=0}function m(C){p(C,0)}function p(C,T){let F=s.newAttributes,E=s.enabledAttributes,P=s.attributeDivisors;F[C]=1,E[C]===0&&(i.enableVertexAttribArray(C),E[C]=1),P[C]!==T&&(i.vertexAttribDivisor(C,T),P[C]=T)}function v(){let C=s.newAttributes,T=s.enabledAttributes;for(let F=0,E=T.length;F<E;F++)T[F]!==C[F]&&(i.disableVertexAttribArray(F),T[F]=0)}function y(C,T,F,E,P,D,L){L===!0?i.vertexAttribIPointer(C,T,F,P,D):i.vertexAttribPointer(C,T,F,E,P,D)}function _(C,T,F,E){x();let P=E.attributes,D=F.getAttributes(),L=T.defaultAttributeValues;for(let O in D){let B=D[O];if(B.location>=0){let k=P[O];if(k===void 0&&(O==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),O==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){let z=k.normalized,et=k.itemSize,G=t.get(k);if(G===void 0)continue;let J=G.buffer,it=G.type,ht=G.bytesPerElement,Y=it===i.INT||it===i.UNSIGNED_INT||k.gpuType===Oa;if(k.isInterleavedBufferAttribute){let $=k.data,at=$.stride,ct=k.offset;if($.isInstancedInterleavedBuffer){for(let ut=0;ut<B.locationSize;ut++)p(B.location+ut,$.meshPerAttribute);C.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ut=0;ut<B.locationSize;ut++)m(B.location+ut);i.bindBuffer(i.ARRAY_BUFFER,J);for(let ut=0;ut<B.locationSize;ut++)y(B.location+ut,et/B.locationSize,it,z,at*ht,(ct+et/B.locationSize*ut)*ht,Y)}else{if(k.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)p(B.location+$,k.meshPerAttribute);C.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let $=0;$<B.locationSize;$++)m(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,J);for(let $=0;$<B.locationSize;$++)y(B.location+$,et/B.locationSize,it,z,et*ht,et/B.locationSize*$*ht,Y)}}else if(L!==void 0){let z=L[O];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(B.location,z);break;case 3:i.vertexAttrib3fv(B.location,z);break;case 4:i.vertexAttrib4fv(B.location,z);break;default:i.vertexAttrib1fv(B.location,z)}}}}v()}function M(){S();for(let C in n){let T=n[C];for(let F in T){let E=T[F];for(let P in E){let D=E[P];for(let L in D)h(D[L].object),delete D[L];delete E[P]}}delete n[C]}}function w(C){if(n[C.id]===void 0)return;let T=n[C.id];for(let F in T){let E=T[F];for(let P in E){let D=E[P];for(let L in D)h(D[L].object),delete D[L];delete E[P]}}delete n[C.id]}function R(C){for(let T in n){let F=n[T];for(let E in F){let P=F[E];if(P[C.id]===void 0)continue;let D=P[C.id];for(let L in D)h(D[L].object),delete D[L];delete P[C.id]}}}function b(C){for(let T in n){let F=n[T],E=C.isInstancedMesh===!0?C.id:0,P=F[E];if(P!==void 0){for(let D in P){let L=P[D];for(let O in L)h(L[O].object),delete L[O];delete P[D]}delete F[E],Object.keys(F).length===0&&delete n[T]}}}function S(){A(),o=!0,s!==r&&(s=r,c(s.object))}function A(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:S,resetDefaultState:A,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function qb(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let d=0;d<h;d++)f+=c[d];e.update(f,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function $b(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Sn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let b=R===Nn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==vn&&R!==Dn&&!b&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Wt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&f===!1&&Wt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:_,maxSamples:M,samples:w}}function Zb(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Pn,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||r;return r=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let v=s?0:n,y=v*4,_=p.clippingState||null;l.value=_,_=h(g,f,y,d);for(let M=0;M!==y;++M)_[M]=e[M];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let p=d+x*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(u[y]).applyMatrix4(v,a),o.normal.toArray(m,_),m[_+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}var Qr=4,Kb=6,Jb=20,jb=256,Ks=new Xn,td=new K,bu=null,vu=0,_u=0,yu=!1,Qb=new H,ar=new H,Sl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Qb}=s;bu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bu,vu,_u),this._renderer.xr.enabled=yu,t.scissorTest=!1,jr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Fi||t.mapping===sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bu=this._renderer.getRenderTarget(),vu=this._renderer.getActiveCubeFace(),_u=this._renderer.getActiveMipmapLevel(),yu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ze,minFilter:Ze,generateMipmaps:!1,type:Nn,format:Sn,colorSpace:_s,depthBuffer:!1},r=ed(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ed(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tv(s)),this._blurMaterial=nv(s,t,e),this._ggxMaterial=ev(s,t,e)}return r}_compileMaterial(t){let e=new Vt(new Zt,t);this._renderer.compile(e,Ks)}_sceneToCubeUV(t,e,n,r,s){let l=new rn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(td),u.toneMapping=Ln,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vt(new Yr,new re({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(td),p=!0);for(let y=0;y<6;y++){let _=y%3;_===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[y],s.y,s.z)):_===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[y]));let M=this._cubeSize;jr(r,_*M,y>2?M:0,M,M),u.setRenderTarget(r),p&&u.render(x,l),u.render(t,l)}u.toneMapping=d,u.autoClear=f,t.background=v}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Fi||t.mapping===sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;jr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ks)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,d=u*f,{_lodMax:g}=this,x=this._sizeLods[n],m=3*x*(n>g-Qr?n-g+Qr:0),p=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=g-e,jr(s,m,p,3*x,2*x),r.setRenderTarget(s),r.render(a,Ks),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,jr(t,m,p,3*x,2*x),r.setRenderTarget(t),r.render(a,Ks)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let h=this._sizeLods[r],u=3*h*(r>this._lodMax-Qr?r-this._lodMax+Qr:0),f=4*(this._cubeSize-h);jr(e,u,f,3*h,2*h),o.setRenderTarget(e),o.render(l,Ks)}};function tv(i){let t=[],e=[],n=i,r=i-Qr+1+Kb;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,d=3,g=new Float32Array(d*f*u),x=new Float32Array(d*f*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,y=p>2?0:-1,_=[v,y,0,v+2/3,y,0,v+2/3,y+1,0,v,y,0,v+2/3,y+1,0,v,y+1,0];g.set(_,d*f*p);for(let M=0;M<f;M++){let w=h[M*2]*2-1,R=h[M*2+1]*2-1;p===0?ar.set(1,R,w):p===1?ar.set(-w,1,-R):p===2?ar.set(-w,R,1):p===3?ar.set(-1,R,-w):p===4?ar.set(-w,-1,R):ar.set(w,R,-1),ar.toArray(x,(p*f+M)*d)}}let m=new Zt;m.setAttribute("position",new Mn(g,d)),m.setAttribute("outputDirection",new Mn(x,d)),e.push(new Vt(m,null)),n>Qr&&n--}return{lodMeshes:e,sizeLods:t}}function ed(i,t,e){let n=new on(i,t,e);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function jr(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function ev(i,t,e){return new an({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function nv(i,t,e){return new an({name:"SphericalGaussianBlur",defines:{SAMPLES:Jb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function nd(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tl(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function id(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Tl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var wl=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new As(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Yr(5,5,5),s=new an({name:"CubemapFromEquirect",uniforms:or(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Je,blending:qn});s.uniforms.tEquirect.value=e;let o=new Vt(r,s),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=Ze),new Ia(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function iv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(f,d=!1){return f==null?null:d?o(f):s(f)}function s(f){if(f&&f.isTexture){let d=f.mapping;if(d===Da||d===Na)if(t.has(f)){let g=t.get(f).texture;return a(g,f.mapping)}else{let g=f.image;if(g&&g.height>0){let x=new wl(g.height);return x.fromEquirectangularTexture(i,f),t.set(f,x),f.addEventListener("dispose",c),a(x.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){let d=f.mapping,g=d===Da||d===Na,x=d===Fi||d===sr;if(g||x){let m=e.get(f),p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return n===null&&(n=new Sl(i)),m=g?n.fromEquirectangular(f,m):n.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),m.texture;if(m!==void 0)return m.texture;{let v=f.image;return g&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Sl(i)),m=g?n.fromEquirectangular(f):n.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,e.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,d){return d===Da?f.mapping=Fi:d===Na&&(f.mapping=sr),f}function l(f){let d=0,g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function c(f){let d=f.target;d.removeEventListener("dispose",c);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(f){let d=f.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function rv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&ji("WebGLRenderer: "+n+" extension not supported."),r}}}function sv(i,t,e,n){let r={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)t.update(f[d],i.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(d!==null){let v=d.array;x=d.version;for(let y=0,_=v.length;y<_;y+=3){let M=v[y+0],w=v[y+1],R=v[y+2];f.push(M,w,w,R,R,M)}}else{let v=g.array;x=g.version;for(let y=0,_=v.length/3-1;y<_;y+=3){let M=y+0,w=y+1,R=y+2;f.push(M,w,w,R,R,M)}}let m=new(g.count>=65535?tr:Ts)(f,1);m.version=x;let p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ov(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){i.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,d){d!==0&&(i.drawElementsInstanced(n,f,s,u*o,d),e.update(f,n,d))}function h(u,f,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,d);let x=0;for(let m=0;m<d;m++)x+=f[m];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function av(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function lv(i,t,e){let n=new WeakMap,r=new Ce;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let S=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,M=1;_>t.maxTextureSize&&(M=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let w=new Float32Array(_*M*4*u),R=new Ss(w,_,M,u);R.type=Dn,R.needsUpdate=!0;let b=y*4;for(let A=0;A<u;A++){let C=m[A],T=p[A],F=v[A],E=_*M*4*A;for(let P=0;P<C.count;P++){let D=P*b;d===!0&&(r.fromBufferAttribute(C,P),w[E+D+0]=r.x,w[E+D+1]=r.y,w[E+D+2]=r.z,w[E+D+3]=0),g===!0&&(r.fromBufferAttribute(T,P),w[E+D+4]=r.x,w[E+D+5]=r.y,w[E+D+6]=r.z,w[E+D+7]=0),x===!0&&(r.fromBufferAttribute(F,P),w[E+D+8]=r.x,w[E+D+9]=r.y,w[E+D+10]=r.z,w[E+D+11]=F.itemSize===4?r.w:1)}}f={count:u,texture:R,size:new te(_,M)},n.set(a,f),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function cv(i,t,e,n,r){let s=new WeakMap;function o(c){let h=r.render.frame,u=c.geometry,f=t.get(c,u);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var uv={[Wc]:"LINEAR_TONE_MAPPING",[Xc]:"REINHARD_TONE_MAPPING",[Yc]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Zc]:"AGX_TONE_MAPPING",[Kc]:"NEUTRAL_TONE_MAPPING",[$c]:"CUSTOM_TONE_MAPPING"};function hv(i,t,e,n,r,s){let o=new on(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Zt;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));let h=new ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Vt(c,h),f=new Xn(-1,1,1,-1,0,1),d=null,g=null,x=!1,m,p=null,v=[],y=!1;this.setSize=function(_,M){o.setSize(_,M),a!==null&&a.setSize(_,M),l!==null&&l.setSize(_,M);for(let w=0;w<v.length;w++){let R=v[w];R.setSize&&R.setSize(_,M)}},this.setEffects=function(_){v=_,y=v.length>0&&v[0].isRenderPass===!0;let M=o.width,w=o.height;v.length>0&&a===null&&(a=new on(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new on(M,w,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<v.length;R++){let b=v[R];b.setSize&&b.setSize(M,w)}},this.begin=function(_,M){if(x||_.toneMapping===Ln&&v.length===0)return!1;if(p=M,M!==null){let w=M.width,R=M.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return y===!1&&_.setRenderTarget(o),m=_.toneMapping,_.toneMapping=Ln,!0},this.hasRenderPass=function(){return y},this.end=function(_,M){_.toneMapping=m,x=!0;let w=o,R=a;for(let b=0;b<v.length;b++){let S=v[b];S.enabled!==!1&&(S.render(_,R,w,M),S.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(d!==_.outputColorSpace||g!==_.toneMapping){d=_.outputColorSpace,g=_.toneMapping,h.defines={},oe.getTransfer(d)===ge&&(h.defines.SRGB_TRANSFER="");let b=uv[g];b&&(h.defines[b]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,_.setRenderTarget(p),_.render(u,f),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Sd=new sn,wu=new Ri(1,1),wd=new Ss,Td=new fa,Ed=new As,rd=[],sd=[],od=new Float32Array(16),ad=new Float32Array(9),ld=new Float32Array(4);function es(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=rd[r];if(s===void 0&&(s=new Float32Array(r),rd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function El(i,t){let e=sd[t];e===void 0&&(e=new Int32Array(t),sd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2fv(this.addr,t),Ve(e,t)}}function pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ze(e,t))return;i.uniform3fv(this.addr,t),Ve(e,t)}}function mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4fv(this.addr,t),Ve(e,t)}}function gv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;ld.set(n),i.uniformMatrix2fv(this.addr,!1,ld),Ve(e,n)}}function xv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;ad.set(n),i.uniformMatrix3fv(this.addr,!1,ad),Ve(e,n)}}function bv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ve(e,t)}else{if(ze(e,n))return;od.set(n),i.uniformMatrix4fv(this.addr,!1,od),Ve(e,n)}}function vv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2iv(this.addr,t),Ve(e,t)}}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3iv(this.addr,t),Ve(e,t)}}function Mv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4iv(this.addr,t),Ve(e,t)}}function Sv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function wv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ze(e,t))return;i.uniform2uiv(this.addr,t),Ve(e,t)}}function Tv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ze(e,t))return;i.uniform3uiv(this.addr,t),Ve(e,t)}}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ze(e,t))return;i.uniform4uiv(this.addr,t),Ve(e,t)}}function Av(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(wu.compareFunction=e.isReversedDepthBuffer()?_l:vl,s=wu):s=Sd,e.setTexture2D(t||s,r)}function Rv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Td,r)}function Cv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Ed,r)}function Pv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||wd,r)}function Iv(i){switch(i){case 5126:return fv;case 35664:return dv;case 35665:return pv;case 35666:return mv;case 35674:return gv;case 35675:return xv;case 35676:return bv;case 5124:case 35670:return vv;case 35667:case 35671:return _v;case 35668:case 35672:return yv;case 35669:case 35673:return Mv;case 5125:return Sv;case 36294:return wv;case 36295:return Tv;case 36296:return Ev;case 35678:case 36198:case 36298:case 36306:case 35682:return Av;case 35679:case 36299:case 36307:return Rv;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Pv}}function Lv(i,t){i.uniform1fv(this.addr,t)}function Fv(i,t){let e=es(t,this.size,2);i.uniform2fv(this.addr,e)}function Dv(i,t){let e=es(t,this.size,3);i.uniform3fv(this.addr,e)}function Nv(i,t){let e=es(t,this.size,4);i.uniform4fv(this.addr,e)}function Uv(i,t){let e=es(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Ov(i,t){let e=es(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Bv(i,t){let e=es(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function kv(i,t){i.uniform1iv(this.addr,t)}function zv(i,t){i.uniform2iv(this.addr,t)}function Vv(i,t){i.uniform3iv(this.addr,t)}function Gv(i,t){i.uniform4iv(this.addr,t)}function Hv(i,t){i.uniform1uiv(this.addr,t)}function Wv(i,t){i.uniform2uiv(this.addr,t)}function Xv(i,t){i.uniform3uiv(this.addr,t)}function Yv(i,t){i.uniform4uiv(this.addr,t)}function qv(i,t,e){let n=this.cache,r=t.length,s=El(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=wu:o=Sd;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function $v(i,t,e){let n=this.cache,r=t.length,s=El(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Td,s[o])}function Zv(i,t,e){let n=this.cache,r=t.length,s=El(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Ed,s[o])}function Kv(i,t,e){let n=this.cache,r=t.length,s=El(e,r);ze(n,s)||(i.uniform1iv(this.addr,s),Ve(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||wd,s[o])}function Jv(i){switch(i){case 5126:return Lv;case 35664:return Fv;case 35665:return Dv;case 35666:return Nv;case 35674:return Uv;case 35675:return Ov;case 35676:return Bv;case 5124:case 35670:return kv;case 35667:case 35671:return zv;case 35668:case 35672:return Vv;case 35669:case 35673:return Gv;case 5125:return Hv;case 36294:return Wv;case 36295:return Xv;case 36296:return Yv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return $v;case 35680:case 36300:case 36308:case 36293:return Zv;case 36289:case 36303:case 36311:case 36292:return Kv}}var Tu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Iv(e.type)}},Eu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jv(e.type)}},Au=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Mu=/(\w+)(\])?(\[|\.)?/g;function cd(i,t){i.seq.push(t),i.map[t.id]=t}function jv(i,t,e){let n=i.name,r=n.length;for(Mu.lastIndex=0;;){let s=Mu.exec(n),o=Mu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){cd(e,c===void 0?new Tu(a,i,t):new Eu(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Au(a),cd(e,u)),e=u}}}var ts=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);jv(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function ud(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Qv=37297,t_=0;function e_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var hd=new $t;function n_(i){oe._getMatrix(hd,oe.workingColorSpace,i);let t=`mat3( ${hd.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ys:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return Wt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+e_(i.getShaderSource(t),a)}else return s}function i_(i,t){let e=n_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var r_={[Wc]:"Linear",[Xc]:"Reinhard",[Yc]:"Cineon",[qc]:"ACESFilmic",[Zc]:"AgX",[Kc]:"Neutral",[$c]:"Custom"};function s_(i,t){let e=r_[t];return e===void 0?(Wt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ml=new H;function o_(){oe.getLuminanceCoefficients(Ml);let i=Ml.x.toFixed(4),t=Ml.y.toFixed(4),e=Ml.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function a_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(js).join(`
`)}function l_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function js(i){return i!==""}function dd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var u_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ru(i){return i.replace(u_,f_)}var h_=new Map;function f_(i,t){let e=Qt[t];if(e===void 0){let n=h_.get(t);if(n!==void 0)e=Qt[n],Wt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Ru(e)}var d_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function md(i){return i.replace(d_,p_)}function p_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function gd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var m_={[ks]:"SHADOWMAP_TYPE_PCF",[Zr]:"SHADOWMAP_TYPE_VSM"};function g_(i){return m_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var x_={[Fi]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE",[Vs]:"ENVMAP_TYPE_CUBE_UV"};function b_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":x_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var v_={[sr]:"ENVMAP_MODE_REFRACTION"};function __(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":v_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var y_={[Hc]:"ENVMAP_BLENDING_MULTIPLY",[Cf]:"ENVMAP_BLENDING_MIX",[Pf]:"ENVMAP_BLENDING_ADD"};function M_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":y_[i.combine]||"ENVMAP_BLENDING_NONE"}function S_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function w_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=g_(e),c=b_(e),h=__(e),u=M_(e),f=S_(e),d=a_(e),g=l_(s),x=r.createProgram(),m,p,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(js).join(`
`),p.length>0&&(p+=`
`)):(m=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(js).join(`
`),p=[gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Qt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?s_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,i_("linearToOutputTexel",e.outputColorSpace),o_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(js).join(`
`)),o=Ru(o),o=dd(o,e),o=pd(o,e),a=Ru(a),a=dd(a,e),a=pd(a,e),o=md(o),a=md(a),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=v+m+o,_=v+p+a,M=ud(r,r.VERTEX_SHADER,y),w=ud(r,r.FRAGMENT_SHADER,_);r.attachShader(x,M),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(C){if(i.debug.checkShaderErrors){let T=r.getProgramInfoLog(x)||"",F=r.getShaderInfoLog(M)||"",E=r.getShaderInfoLog(w)||"",P=T.trim(),D=F.trim(),L=E.trim(),O=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,w);else{let k=fd(r,M,"vertex"),z=fd(r,w,"fragment");Xt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+k+`
`+z)}else P!==""?Wt("WebGLProgram: Program Info Log:",P):(D===""||L==="")&&(B=!1);B&&(C.diagnostics={runnable:O,programLog:P,vertexShader:{log:D,prefix:m},fragmentShader:{log:L,prefix:p}})}r.deleteShader(M),r.deleteShader(w),b=new ts(r,x),S=c_(r,x)}let b;this.getUniforms=function(){return b===void 0&&R(this),b};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=r.getProgramParameter(x,Qv)),A},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=t_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var T_=0,Cu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Pu(t),e.set(t,n)),n}},Pu=class{constructor(t){this.id=T_++,this.code=t,this.usedTimes=0}};function E_(i){return i===Ui||i===qs||i===$s}function A_(i,t,e,n,r,s){let o=new Hr,a=new Cu,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer,f=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return l.add(b),b===0?"uv":`uv${b}`}function x(b,S,A,C,T,F){let E=C.fog,P=T.geometry,D=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?C.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,O=t.get(b.envMap||D,L),B=O&&O.mapping===Vs?O.image.height:null,k=d[b.type];b.precision!==null&&(f=n.getMaxPrecision(b.precision),f!==b.precision&&Wt("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));let z=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,et=z!==void 0?z.length:0,G=0;P.morphAttributes.position!==void 0&&(G=1),P.morphAttributes.normal!==void 0&&(G=2),P.morphAttributes.color!==void 0&&(G=3);let J,it,ht,Y;if(k){let _e=Zn[k];J=_e.vertexShader,it=_e.fragmentShader}else{J=b.vertexShader,it=b.fragmentShader;let _e=a.getVertexShaderStage(b),pe=a.getFragmentShaderStage(b);a.update(b,_e,pe),ht=_e.id,Y=pe.id}let $=i.getRenderTarget(),at=i.state.buffers.depth.getReversed(),ct=T.isInstancedMesh===!0,ut=T.isBatchedMesh===!0,pt=!!b.map,gt=!!b.matcap,Mt=!!O,Ot=!!b.aoMap,ne=!!b.lightMap,zt=!!b.bumpMap&&b.wireframe===!1,fe=!!b.normalMap,He=!!b.displacementMap,fn=!!b.emissiveMap,Ae=!!b.metalnessMap,Ue=!!b.roughnessMap,q=b.anisotropy>0,Qe=b.clearcoat>0,xe=b.dispersion>0,V=b.retroreflectivity>0,I=b.iridescence>0,Z=b.sheen>0,tt=b.transmission>0,rt=q&&!!b.anisotropyMap,mt=Qe&&!!b.clearcoatMap,xt=Qe&&!!b.clearcoatNormalMap,st=Qe&&!!b.clearcoatRoughnessMap,lt=I&&!!b.iridescenceMap,bt=I&&!!b.iridescenceThicknessMap,Dt=Z&&!!b.sheenColorMap,St=Z&&!!b.sheenRoughnessMap,vt=!!b.specularMap,Nt=!!b.specularColorMap,Ht=!!b.specularIntensityMap,Kt=tt&&!!b.transmissionMap,X=tt&&!!b.thicknessMap,_t=!!b.gradientMap,ot=!!b.alphaMap,yt=b.alphaTest>0,At=!!b.alphaHash,ft=!!b.extensions,Bt=Ln;b.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Bt=i.toneMapping);let Lt={shaderID:k,shaderType:b.type,shaderName:b.name,vertexShader:J,fragmentShader:it,defines:b.defines,customVertexShaderID:ht,customFragmentShaderID:Y,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:ut,batchingColor:ut&&T._colorsTexture!==null,instancing:ct,instancingColor:ct&&T.instanceColor!==null,instancingMorph:ct&&T.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:oe.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:pt,matcap:gt,envMap:Mt,envMapMode:Mt&&O.mapping,envMapCubeUVHeight:B,aoMap:Ot,lightMap:ne,bumpMap:zt,normalMap:fe,displacementMap:He,emissiveMap:fn,normalMapObjectSpace:fe&&b.normalMapType===Ff,normalMapTangentSpace:fe&&b.normalMapType===su,packedNormalMap:fe&&b.normalMapType===su&&E_(b.normalMap.format),metalnessMap:Ae,roughnessMap:Ue,anisotropy:q,anisotropyMap:rt,clearcoat:Qe,clearcoatMap:mt,clearcoatNormalMap:xt,clearcoatRoughnessMap:st,dispersion:xe,retroreflection:V,iridescence:I,iridescenceMap:lt,iridescenceThicknessMap:bt,sheen:Z,sheenColorMap:Dt,sheenRoughnessMap:St,specularMap:vt,specularColorMap:Nt,specularIntensityMap:Ht,transmission:tt,transmissionMap:Kt,thicknessMap:X,gradientMap:_t,opaque:b.transparent===!1&&b.blending===Li&&b.alphaToCoverage===!1,alphaMap:ot,alphaTest:yt,alphaHash:At,combine:b.combine,mapUv:pt&&g(b.map.channel),aoMapUv:Ot&&g(b.aoMap.channel),lightMapUv:ne&&g(b.lightMap.channel),bumpMapUv:zt&&g(b.bumpMap.channel),normalMapUv:fe&&g(b.normalMap.channel),displacementMapUv:He&&g(b.displacementMap.channel),emissiveMapUv:fn&&g(b.emissiveMap.channel),metalnessMapUv:Ae&&g(b.metalnessMap.channel),roughnessMapUv:Ue&&g(b.roughnessMap.channel),anisotropyMapUv:rt&&g(b.anisotropyMap.channel),clearcoatMapUv:mt&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:xt&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(b.sheenRoughnessMap.channel),specularMapUv:vt&&g(b.specularMap.channel),specularColorMapUv:Nt&&g(b.specularColorMap.channel),specularIntensityMapUv:Ht&&g(b.specularIntensityMap.channel),transmissionMapUv:Kt&&g(b.transmissionMap.channel),thicknessMapUv:X&&g(b.thicknessMap.channel),alphaMapUv:ot&&g(b.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(fe||q),vertexNormals:!!P.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!P.attributes.uv&&(pt||ot),fog:!!E,useFog:b.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||P.attributes.normal===void 0&&fe===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:at,skinning:T.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:et,morphTextureStride:G,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Bt,decodeVideoTexture:pt&&b.map.isVideoTexture===!0&&oe.getTransfer(b.map.colorSpace)===ge,decodeVideoTextureEmissive:fn&&b.emissiveMap.isVideoTexture===!0&&oe.getTransfer(b.emissiveMap.colorSpace)===ge,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===de,flipSided:b.side===Je,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ft&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&b.extensions.multiDraw===!0||ut)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Lt.vertexUv1s=l.has(1),Lt.vertexUv2s=l.has(2),Lt.vertexUv3s=l.has(3),l.clear(),Lt}function m(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)S.push(A),S.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(p(S,b),v(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function p(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function v(b,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),b.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),b.push(o.mask)}function y(b){let S=d[b.type],A;if(S){let C=Zn[S];A=Jf.clone(C.uniforms)}else A=b.uniforms;return A}function _(b,S){let A=h.get(S);return A!==void 0?++A.usedTimes:(A=new w_(i,S,b,r),c.push(A),h.set(S,A)),A}function M(b){if(--b.usedTimes===0){let S=c.indexOf(b);c[S]=c[c.length-1],c.pop(),h.delete(b.cacheKey),b.destroy()}}function w(b){a.remove(b)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:y,acquireProgram:_,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:R}}function R_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function C_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function xd(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function bd(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function a(f,d,g,x,m,p){let v=i[t];return v===void 0?(v={id:f.id,object:f,geometry:d,material:g,materialVariant:o(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},i[t]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=g,v.materialVariant=o(f),v.groupOrder=x,v.renderOrder=f.renderOrder,v.z=m,v.group=p),t++,v}function l(f,d,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let y=a(f,d,g,x,m,p);g.transmission>0?n.push(y):g.transparent===!0?r.push(y):e.push(y)}function c(f,d,g,x,m,p){let v=a(f,d,g,x,m,p);g.transmission>0?n.unshift(v):g.transparent===!0?r.unshift(v):e.unshift(v)}function h(f,d){e.length>1&&e.sort(f||C_),n.length>1&&n.sort(d||xd),r.length>1&&r.sort(d||xd)}function u(){for(let f=t,d=i.length;f<d;f++){let g=i[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:h}}function P_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new bd,i.set(n,[o])):r>=s.length?(o=new bd,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function I_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new H,color:new K};break;case"SpotLight":e={position:new H,direction:new H,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new H,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new H,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new H,halfWidth:new H,halfHeight:new H};break}return i[t.id]=e,e}}}function L_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var F_=0;function D_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function N_(i){let t=new I_,e=L_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);let r=new H,s=new Te,o=new Te;function a(c){let h=0,u=0,f=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let d=0,g=0,x=0,m=0,p=0,v=0,y=0,_=0,M=0,w=0,R=0,b=0,S=0,A=0;c.sort(D_);for(let T=0,F=c.length;T<F;T++){let E=c[T],P=E.color,D=E.intensity,L=E.distance,O=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ui?O=E.shadow.map.texture:O=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=P.r*D,u+=P.g*D,f+=P.b*D;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],D);A++}else if(E.isSunLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,z=e.get(E);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),n.sunShadow[g]=z,n.sunShadowMap[g]=O;let et=k.getViewportCount();for(let G=0;G<et;G++)n.sunShadowMatrix[x+G]=k.getMatrix(G),n.sunShadowCascade[x+G]=k._cascadeData[G];x+=et,g++}n.sun[d]=B,d++}else if(E.isDirectionalLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,z=e.get(E);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=O,n.directionalShadowMatrix[m]=E.shadow.matrix,M++}n.directional[m]=B,m++}else if(E.isSpotLight){let B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(P).multiplyScalar(D),B.distance=L,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[v]=B;let k=E.shadow;if(E.map&&(n.spotLightMap[b]=E.map,b++,k.updateMatrices(E),E.castShadow&&S++),n.spotLightMatrix[v]=k.matrix,E.castShadow){let z=e.get(E);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=O,R++}v++}else if(E.isRectAreaLight){let B=t.get(E);B.color.copy(P).multiplyScalar(D),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[y]=B,y++}else if(E.isPointLight){let B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){let k=E.shadow,z=e.get(E);z.shadowIntensity=k.intensity,z.shadowBias=k.bias,z.shadowNormalBias=k.normalBias,z.shadowRadius=k.radius,z.shadowMapSize=k.mapSize,z.shadowCameraNear=k.camera.near,z.shadowCameraFar=k.camera.far,n.pointShadow[p]=z,n.pointShadowMap[p]=O,n.pointShadowMatrix[p]=E.shadow.matrix,w++}n.point[p]=B,p++}else if(E.isHemisphereLight){let B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(D),B.groundColor.copy(E.groundColor).multiplyScalar(D),n.hemi[_]=B,_++}}y>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.sunLength!==d||C.directionalLength!==m||C.pointLength!==p||C.spotLength!==v||C.rectAreaLength!==y||C.hemiLength!==_||C.numSunShadows!==g||C.numDirectionalShadows!==M||C.numPointShadows!==w||C.numSpotShadows!==R||C.numSpotMaps!==b||C.numLightProbes!==A)&&(n.sun.length=d,n.directional.length=m,n.spot.length=v,n.rectArea.length=y,n.point.length=p,n.hemi.length=_,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,C.sunLength=d,C.directionalLength=m,C.pointLength=p,C.spotLength=v,C.rectAreaLength=y,C.hemiLength=_,C.numSunShadows=g,C.numDirectionalShadows=M,C.numPointShadows=w,C.numSpotShadows=R,C.numSpotMaps=b,C.numLightProbes=A,n.version=F_++)}function l(c,h){let u=0,f=0,d=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,y=c.length;v<y;v++){let _=c[v];if(_.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),u++}else if(_.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),f++}else if(_.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),o.identity(),s.copy(_.matrixWorld),s.premultiply(p),o.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(p),d++}else if(_.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:a,setupView:l,state:n}}function vd(i){let t=new N_(i),e=[],n=[],r=[];function s(f){u.camera=f,e.length=0,n.length=0,r.length=0}function o(f){e.push(f)}function a(f){n.push(f)}function l(f){r.push(f)}function c(){t.setup(e)}function h(f){t.setupView(e,f)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function U_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new vd(i),t.set(r,[a])):s>=o.length?(a=new vd(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var O_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
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
}`,k_=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],z_=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],_d=new Te,Js=new H,Su=new H;function V_(i,t,e){let n=new Es,r=new te,s=new te,o=new Ce,a=new va,l=new _a,c={},h=e.maxTextureSize,u={[Yn]:Je,[Je]:Yn,[de]:de},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:O_,fragmentShader:B_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Zt;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ks;let p=this.type;this.render=function(w,R,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===uf&&(Wt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ks);let S=i.getRenderTarget(),A=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),T=i.state;T.setBlending(qn),T.buffers.depth.getReversed()===!0?T.buffers.color.setClear(0,0,0,0):T.buffers.color.setClear(1,1,1,1),T.buffers.depth.setTest(!0),T.setScissorTest(!1);let F=p!==this.type;F&&R.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(P=>P.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,P=w.length;E<P;E++){let D=w[E],L=D.shadow;if(L===void 0){Wt("WebGLShadowMap:",D,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);let O=L.getFrameExtents();r.multiply(O),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/O.x),r.x=s.x*O.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/O.y),r.y=s.y*O.y,L.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=B,L.map===null||F===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===Zr){if(D.isPointLight){Wt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new on(r.x,r.y,{format:Ui,type:Nn,minFilter:Ze,magFilter:Ze,generateMipmaps:!1}),L.map.texture.name=D.name+".shadowMap",L.map.depthTexture=new Ri(r.x,r.y,Dn),L.map.depthTexture.name=D.name+".shadowMapDepth",L.map.depthTexture.format=Gn,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Xe,L.map.depthTexture.magFilter=Xe}else D.isPointLight?(L.map=new wl(r.x),L.map.depthTexture=new xa(r.x,Fn)):(L.map=new on(r.x,r.y),L.map.depthTexture=new Ri(r.x,r.y,Fn)),L.map.depthTexture.name=D.name+".shadowMap",L.map.depthTexture.format=Gn,this.type===ks?(L.map.depthTexture.compareFunction=B?_l:vl,L.map.depthTexture.minFilter=Ze,L.map.depthTexture.magFilter=Ze):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Xe,L.map.depthTexture.magFilter=Xe);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==r.x||L.map.height!==r.y)&&L.map.setSize(r.x,r.y);let k=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();D.isPointLight!==!0&&L.updateMatrices(D,b);for(let z=0;z<k;z++){let et=L.getCamera(z);if(D.isPointLight){let G=L.camera,J=L.matrix,it=D.distance||G.far;it!==G.far&&(G.far=it,G.updateProjectionMatrix()),Js.setFromMatrixPosition(D.matrixWorld),G.position.copy(Js),Su.copy(G.position),Su.add(k_[z]),G.up.copy(z_[z]),G.lookAt(Su),G.updateMatrixWorld(),J.makeTranslation(-Js.x,-Js.y,-Js.z),_d.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),L._frustum.setFromProjectionMatrix(_d,G.coordinateSystem,G.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,z),i.clear();else{z===0&&(i.setRenderTarget(L.map),i.clear());let G=L.getViewport(z);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),T.viewport(o)}n=L.getFrustum(z),_(R,b,et,D,this.type)}L.isPointLightShadow!==!0&&this.type===Zr&&v(L,b),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,A,C)};function v(w,R){let b=t.update(x);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new on(r.x,r.y,{format:Ui,type:Nn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,b,f,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,b,d,x,null)}function y(w,R,b,S){let A=null,C=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)A=C;else if(A=b.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let T=A.uuid,F=R.uuid,E=c[T];E===void 0&&(E={},c[T]=E);let P=E[F];P===void 0&&(P=A.clone(),E[F]=P,R.addEventListener("dispose",M)),A=P}if(A.visible=R.visible,A.wireframe=R.wireframe,S===Zr?A.side=R.shadowSide!==null?R.shadowSide:R.side:A.side=R.shadowSide!==null?R.shadowSide:u[R.side],A.alphaMap=R.alphaMap,A.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,A.map=R.map,A.clipShadows=R.clipShadows,A.clippingPlanes=R.clippingPlanes,A.clipIntersection=R.clipIntersection,A.displacementMap=R.displacementMap,A.displacementScale=R.displacementScale,A.displacementBias=R.displacementBias,A.wireframeLinewidth=R.wireframeLinewidth,A.linewidth=R.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let T=i.properties.get(A);T.light=b}return A}function _(w,R,b,S,A){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===Zr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let F=t.update(w),E=w.material;if(Array.isArray(E)){let P=F.groups;for(let D=0,L=P.length;D<L;D++){let O=P[D],B=E[O.materialIndex];if(B&&B.visible){let k=y(w,B,S,A);w.onBeforeShadow(i,w,R,b,F,k,O),i.renderBufferDirect(b,null,F,k,w,O),w.onAfterShadow(i,w,R,b,F,k,O)}}}else if(E.visible){let P=y(w,E,S,A);w.onBeforeShadow(i,w,R,b,F,P,null),i.renderBufferDirect(b,null,F,P,w,null),w.onAfterShadow(i,w,R,b,F,P,null)}}let T=w.children;for(let F=0,E=T.length;F<E;F++)_(T[F],R,b,S,A)}function M(w){w.target.removeEventListener("dispose",M);for(let b in c){let S=c[b],A=w.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function G_(i,t){function e(){let X=!1,_t=new Ce,ot=null,yt=new Ce(0,0,0,0);return{setMask:function(At){ot!==At&&!X&&(i.colorMask(At,At,At,At),ot=At)},setLocked:function(At){X=At},setClear:function(At,ft,Bt,Lt,_e){_e===!0&&(At*=Lt,ft*=Lt,Bt*=Lt),_t.set(At,ft,Bt,Lt),yt.equals(_t)===!1&&(i.clearColor(At,ft,Bt,Lt),yt.copy(_t))},reset:function(){X=!1,ot=null,yt.set(-1,0,0,0)}}}function n(){let X=!1,_t=!1,ot=null,yt=null,At=null;return{setReversed:function(ft){if(_t!==ft){let Bt=t.get("EXT_clip_control");ft?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),_t=ft;let Lt=At;At=null,this.setClear(Lt)}},getReversed:function(){return _t},setTest:function(ft){ft?$(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(ft){ot!==ft&&!X&&(i.depthMask(ft),ot=ft)},setFunc:function(ft){if(_t&&(ft=Xf[ft]),yt!==ft){switch(ft){case ta:i.depthFunc(i.NEVER);break;case ea:i.depthFunc(i.ALWAYS);break;case na:i.depthFunc(i.LESS);break;case kr:i.depthFunc(i.LEQUAL);break;case ia:i.depthFunc(i.EQUAL);break;case ra:i.depthFunc(i.GEQUAL);break;case sa:i.depthFunc(i.GREATER);break;case oa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ft}},setLocked:function(ft){X=ft},setClear:function(ft){At!==ft&&(At=ft,_t&&(ft=1-ft),i.clearDepth(ft))},reset:function(){X=!1,ot=null,yt=null,At=null,_t=!1}}}function r(){let X=!1,_t=null,ot=null,yt=null,At=null,ft=null,Bt=null,Lt=null,_e=null;return{setTest:function(pe){X||(pe?$(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(pe){_t!==pe&&!X&&(i.stencilMask(pe),_t=pe)},setFunc:function(pe,En,kn){(ot!==pe||yt!==En||At!==kn)&&(i.stencilFunc(pe,En,kn),ot=pe,yt=En,At=kn)},setOp:function(pe,En,kn){(ft!==pe||Bt!==En||Lt!==kn)&&(i.stencilOp(pe,En,kn),ft=pe,Bt=En,Lt=kn)},setLocked:function(pe){X=pe},setClear:function(pe){_e!==pe&&(i.clearStencil(pe),_e=pe)},reset:function(){X=!1,_t=null,ot=null,yt=null,At=null,ft=null,Bt=null,Lt=null,_e=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,h={},u={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,y=null,_=null,M=null,w=null,R=null,b=new K(0,0,0),S=0,A=!1,C=null,T=null,F=null,E=null,P=null,D=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,O=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(B)[1]),L=O>=1):B.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),L=O>=2);let k=null,z={},et=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),J=new Ce().fromArray(et),it=new Ce().fromArray(G);function ht(X,_t,ot,yt){let At=new Uint8Array(4),ft=i.createTexture();i.bindTexture(X,ft),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Bt=0;Bt<ot;Bt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(_t,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,At):i.texImage2D(_t+Bt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,At);return ft}let Y={};Y[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),Y[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Y[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(kr),zt(!1),fe(kc),$(i.CULL_FACE),Ot(qn);function $(X){h[X]!==!0&&(i.enable(X),h[X]=!0)}function at(X){h[X]!==!1&&(i.disable(X),h[X]=!1)}function ct(X,_t){return f[X]!==_t?(i.bindFramebuffer(X,_t),f[X]=_t,X===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=_t),X===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=_t),!0):!1}function ut(X,_t){let ot=g,yt=!1;if(X){ot=d.get(_t),ot===void 0&&(ot=[],d.set(_t,ot));let At=X.textures;if(ot.length!==At.length||ot[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Bt=At.length;ft<Bt;ft++)ot[ft]=i.COLOR_ATTACHMENT0+ft;ot.length=At.length,yt=!0}}else ot[0]!==i.BACK&&(ot[0]=i.BACK,yt=!0);yt&&i.drawBuffers(ot)}function pt(X){return x!==X?(i.useProgram(X),x=X,!0):!1}let gt={[rr]:i.FUNC_ADD,[ff]:i.FUNC_SUBTRACT,[df]:i.FUNC_REVERSE_SUBTRACT};gt[pf]=i.MIN,gt[mf]=i.MAX;let Mt={[gf]:i.ZERO,[xf]:i.ONE,[bf]:i.SRC_COLOR,[Vc]:i.SRC_ALPHA,[wf]:i.SRC_ALPHA_SATURATE,[Mf]:i.DST_COLOR,[_f]:i.DST_ALPHA,[vf]:i.ONE_MINUS_SRC_COLOR,[Gc]:i.ONE_MINUS_SRC_ALPHA,[Sf]:i.ONE_MINUS_DST_COLOR,[yf]:i.ONE_MINUS_DST_ALPHA,[Tf]:i.CONSTANT_COLOR,[Ef]:i.ONE_MINUS_CONSTANT_COLOR,[Af]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function Ot(X,_t,ot,yt,At,ft,Bt,Lt,_e,pe){if(X===qn){m===!0&&(at(i.BLEND),m=!1);return}if(m===!1&&($(i.BLEND),m=!0),X!==hf){if(X!==p||pe!==A){if((v!==rr||M!==rr)&&(i.blendEquation(i.FUNC_ADD),v=rr,M=rr),pe)switch(X){case Li:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFunc(i.ONE,i.ONE);break;case zc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case zs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Xt("WebGLState: Invalid blending: ",X);break}else switch(X){case Li:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Le:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case zc:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zs:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",X);break}y=null,_=null,w=null,R=null,b.set(0,0,0),S=0,p=X,A=pe}return}At=At||_t,ft=ft||ot,Bt=Bt||yt,(_t!==v||At!==M)&&(i.blendEquationSeparate(gt[_t],gt[At]),v=_t,M=At),(ot!==y||yt!==_||ft!==w||Bt!==R)&&(i.blendFuncSeparate(Mt[ot],Mt[yt],Mt[ft],Mt[Bt]),y=ot,_=yt,w=ft,R=Bt),(Lt.equals(b)===!1||_e!==S)&&(i.blendColor(Lt.r,Lt.g,Lt.b,_e),b.copy(Lt),S=_e),p=X,A=!1}function ne(X,_t){X.side===de?at(i.CULL_FACE):$(i.CULL_FACE);let ot=X.side===Je;_t&&(ot=!ot),zt(ot),X.blending===Li&&X.transparent===!1?Ot(qn):Ot(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);let yt=X.stencilWrite;a.setTest(yt),yt&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),fn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(X){C!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),C=X)}function fe(X){X!==lf?($(i.CULL_FACE),X!==T&&(X===kc?i.cullFace(i.BACK):X===cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),T=X}function He(X){X!==F&&(L&&i.lineWidth(X),F=X)}function fn(X,_t,ot){X?($(i.POLYGON_OFFSET_FILL),(E!==_t||P!==ot)&&(E=_t,P=ot,o.getReversed()&&(_t=-_t),i.polygonOffset(_t,ot))):at(i.POLYGON_OFFSET_FILL)}function Ae(X){X?$(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function Ue(X){X===void 0&&(X=i.TEXTURE0+D-1),k!==X&&(i.activeTexture(X),k=X)}function q(X,_t,ot){ot===void 0&&(k===null?ot=i.TEXTURE0+D-1:ot=k);let yt=z[ot];yt===void 0&&(yt={type:void 0,texture:void 0},z[ot]=yt),(yt.type!==X||yt.texture!==_t)&&(k!==ot&&(i.activeTexture(ot),k=ot),i.bindTexture(X,_t||Y[X]),yt.type=X,yt.texture=_t)}function Qe(){let X=z[k];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xe(){try{i.compressedTexImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function I(){try{i.texSubImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function Z(){try{i.texSubImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function tt(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function rt(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function mt(){try{i.texStorage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function xt(){try{i.texStorage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function st(){try{i.texImage2D(...arguments)}catch(X){Xt("WebGLState:",X)}}function lt(){try{i.texImage3D(...arguments)}catch(X){Xt("WebGLState:",X)}}function bt(X){return u[X]!==void 0?u[X]:i.getParameter(X)}function Dt(X,_t){u[X]!==_t&&(i.pixelStorei(X,_t),u[X]=_t)}function St(X){J.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),J.copy(X))}function vt(X){it.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),it.copy(X))}function Nt(X,_t){let ot=c.get(_t);ot===void 0&&(ot=new WeakMap,c.set(_t,ot));let yt=ot.get(X);yt===void 0&&(yt=i.getUniformBlockIndex(_t,X.name),ot.set(X,yt))}function Ht(X,_t){let yt=c.get(_t).get(X);l.get(_t)!==yt&&(i.uniformBlockBinding(_t,yt,X.__bindingPointIndex),l.set(_t,yt))}function Kt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},k=null,z={},f={},d=new WeakMap,g=[],x=null,m=!1,p=null,v=null,y=null,_=null,M=null,w=null,R=null,b=new K(0,0,0),S=0,A=!1,C=null,T=null,F=null,E=null,P=null,J.set(0,0,i.canvas.width,i.canvas.height),it.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:at,bindFramebuffer:ct,drawBuffers:ut,useProgram:pt,setBlending:Ot,setMaterial:ne,setFlipSided:zt,setCullFace:fe,setLineWidth:He,setPolygonOffset:fn,setScissorTest:Ae,activeTexture:Ue,bindTexture:q,unbindTexture:Qe,compressedTexImage2D:xe,compressedTexImage3D:V,texImage2D:st,texImage3D:lt,pixelStorei:Dt,getParameter:bt,updateUBOMapping:Nt,uniformBlockBinding:Ht,texStorage2D:mt,texStorage3D:xt,texSubImage2D:I,texSubImage3D:Z,compressedTexSubImage2D:tt,compressedTexSubImage3D:rt,scissor:St,viewport:vt,reset:Kt}}function H_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,u=new Set,f,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(V,I){return g?new OffscreenCanvas(V,I):zr("canvas")}function m(V,I,Z){let tt=1,rt=xe(V);if((rt.width>Z||rt.height>Z)&&(tt=Z/Math.max(rt.width,rt.height)),tt<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let mt=Math.floor(tt*rt.width),xt=Math.floor(tt*rt.height);f===void 0&&(f=x(mt,xt));let st=I?x(mt,xt):f;return st.width=mt,st.height=xt,st.getContext("2d").drawImage(V,0,0,mt,xt),Wt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+mt+"x"+xt+")."),st}else return"data"in V&&Wt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),V;return V}function p(V){return V.generateMipmaps}function v(V){i.generateMipmap(V)}function y(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(V,I,Z,tt,rt,mt=!1){if(V!==null){if(i[V]!==void 0)return i[V];Wt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let xt;tt&&(xt=t.get("EXT_texture_norm16"),xt||Wt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let st=I;if(I===i.RED&&(Z===i.FLOAT&&(st=i.R32F),Z===i.HALF_FLOAT&&(st=i.R16F),Z===i.UNSIGNED_BYTE&&(st=i.R8),Z===i.UNSIGNED_SHORT&&xt&&(st=xt.R16_EXT),Z===i.SHORT&&xt&&(st=xt.R16_SNORM_EXT)),I===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.R8UI),Z===i.UNSIGNED_SHORT&&(st=i.R16UI),Z===i.UNSIGNED_INT&&(st=i.R32UI),Z===i.BYTE&&(st=i.R8I),Z===i.SHORT&&(st=i.R16I),Z===i.INT&&(st=i.R32I)),I===i.RG&&(Z===i.FLOAT&&(st=i.RG32F),Z===i.HALF_FLOAT&&(st=i.RG16F),Z===i.UNSIGNED_BYTE&&(st=i.RG8),Z===i.UNSIGNED_SHORT&&xt&&(st=xt.RG16_EXT),Z===i.SHORT&&xt&&(st=xt.RG16_SNORM_EXT)),I===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RG8UI),Z===i.UNSIGNED_SHORT&&(st=i.RG16UI),Z===i.UNSIGNED_INT&&(st=i.RG32UI),Z===i.BYTE&&(st=i.RG8I),Z===i.SHORT&&(st=i.RG16I),Z===i.INT&&(st=i.RG32I)),I===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(st=i.RGB16UI),Z===i.UNSIGNED_INT&&(st=i.RGB32UI),Z===i.BYTE&&(st=i.RGB8I),Z===i.SHORT&&(st=i.RGB16I),Z===i.INT&&(st=i.RGB32I)),I===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(st=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(st=i.RGBA16UI),Z===i.UNSIGNED_INT&&(st=i.RGBA32UI),Z===i.BYTE&&(st=i.RGBA8I),Z===i.SHORT&&(st=i.RGBA16I),Z===i.INT&&(st=i.RGBA32I)),I===i.RGB&&(Z===i.UNSIGNED_SHORT&&xt&&(st=xt.RGB16_EXT),Z===i.SHORT&&xt&&(st=xt.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(st=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(st=i.R11F_G11F_B10F)),I===i.RGBA){let lt=mt?ys:oe.getTransfer(rt);Z===i.FLOAT&&(st=i.RGBA32F),Z===i.HALF_FLOAT&&(st=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(st=lt===ge?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&xt&&(st=xt.RGBA16_EXT),Z===i.SHORT&&xt&&(st=xt.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(st=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(st=i.RGB5_A1)}return(st===i.R16F||st===i.R32F||st===i.RG16F||st===i.RG32F||st===i.RGBA16F||st===i.RGBA32F)&&t.get("EXT_color_buffer_float"),st}function M(V,I){let Z;return V?I===null||I===Fn||I===Jr?Z=i.DEPTH24_STENCIL8:I===Dn?Z=i.DEPTH32F_STENCIL8:I===Kr&&(Z=i.DEPTH24_STENCIL8,Wt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):I===null||I===Fn||I===Jr?Z=i.DEPTH_COMPONENT24:I===Dn?Z=i.DEPTH_COMPONENT32F:I===Kr&&(Z=i.DEPTH_COMPONENT16),Z}function w(V,I){return p(V)===!0||V.isFramebufferTexture&&V.minFilter!==Xe&&V.minFilter!==Ze?Math.log2(Math.max(I.width,I.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?I.mipmaps.length:1}function R(V){let I=V.target;I.removeEventListener("dispose",R),S(I),I.isVideoTexture&&h.delete(I),I.isHTMLTexture&&u.delete(I)}function b(V){let I=V.target;I.removeEventListener("dispose",b),C(I)}function S(V){let I=n.get(V);if(I.__webglInit===void 0)return;let Z=V.source,tt=d.get(Z);if(tt){let rt=tt[I.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&A(V),Object.keys(tt).length===0&&d.delete(Z)}n.remove(V)}function A(V){let I=n.get(V);i.deleteTexture(I.__webglTexture);let Z=V.source,tt=d.get(Z);delete tt[I.__cacheKey],o.memory.textures--}function C(V){let I=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(I.__webglFramebuffer[tt]))for(let rt=0;rt<I.__webglFramebuffer[tt].length;rt++)i.deleteFramebuffer(I.__webglFramebuffer[tt][rt]);else i.deleteFramebuffer(I.__webglFramebuffer[tt]);I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer[tt])}else{if(Array.isArray(I.__webglFramebuffer))for(let tt=0;tt<I.__webglFramebuffer.length;tt++)i.deleteFramebuffer(I.__webglFramebuffer[tt]);else i.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&i.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&i.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let tt=0;tt<I.__webglColorRenderbuffer.length;tt++)I.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(I.__webglColorRenderbuffer[tt]);I.__webglDepthRenderbuffer&&i.deleteRenderbuffer(I.__webglDepthRenderbuffer)}let Z=V.textures;for(let tt=0,rt=Z.length;tt<rt;tt++){let mt=n.get(Z[tt]);mt.__webglTexture&&(i.deleteTexture(mt.__webglTexture),o.memory.textures--),n.remove(Z[tt])}n.remove(V)}let T=0;function F(){T=0}function E(){return T}function P(V){T=V}function D(){let V=T;return V>=r.maxTextures&&Wt("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),T+=1,V}function L(V){let I=[];return I.push(V.wrapS),I.push(V.wrapT),I.push(V.wrapR||0),I.push(V.magFilter),I.push(V.minFilter),I.push(V.anisotropy),I.push(V.internalFormat),I.push(V.format),I.push(V.type),I.push(V.generateMipmaps),I.push(V.premultiplyAlpha),I.push(V.flipY),I.push(V.unpackAlignment),I.push(V.colorSpace),I.join()}function O(V,I){let Z=n.get(V);if(V.isVideoTexture&&q(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&Z.__version!==V.version){let tt=V.image;if(tt===null)Wt("WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)Wt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(Z,V,I);return}}else V.isExternalTexture&&(Z.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+I)}function B(V,I){let Z=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Z.__version!==V.version){at(Z,V,I);return}else V.isExternalTexture&&(Z.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+I)}function k(V,I){let Z=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&Z.__version!==V.version){at(Z,V,I);return}e.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+I)}function z(V,I){let Z=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&Z.__version!==V.version){ct(Z,V,I);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+I)}let et={[Qi]:i.REPEAT,[xn]:i.CLAMP_TO_EDGE,[aa]:i.MIRRORED_REPEAT},G={[Xe]:i.NEAREST,[If]:i.NEAREST_MIPMAP_NEAREST,[Gs]:i.NEAREST_MIPMAP_LINEAR,[Ze]:i.LINEAR,[Ua]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},J={[Nf]:i.NEVER,[zf]:i.ALWAYS,[Uf]:i.LESS,[vl]:i.LEQUAL,[Of]:i.EQUAL,[_l]:i.GEQUAL,[Bf]:i.GREATER,[kf]:i.NOTEQUAL};function it(V,I){if(I.type===Dn&&t.has("OES_texture_float_linear")===!1&&(I.magFilter===Ze||I.magFilter===Ua||I.magFilter===Gs||I.magFilter===Di||I.minFilter===Ze||I.minFilter===Ua||I.minFilter===Gs||I.minFilter===Di)&&Wt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,et[I.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,et[I.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,et[I.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,G[I.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,G[I.minFilter]),I.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,J[I.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(I.magFilter===Xe||I.minFilter!==Gs&&I.minFilter!==Di||I.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(I.anisotropy>1||n.get(I).__currentAnisotropy){let Z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(I.anisotropy,r.getMaxAnisotropy())),n.get(I).__currentAnisotropy=I.anisotropy}}}function ht(V,I){let Z=!1;V.__webglInit===void 0&&(V.__webglInit=!0,I.addEventListener("dispose",R));let tt=I.source,rt=d.get(tt);rt===void 0&&(rt={},d.set(tt,rt));let mt=L(I);if(mt!==V.__cacheKey){rt[mt]===void 0&&(rt[mt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),rt[mt].usedTimes++;let xt=rt[V.__cacheKey];xt!==void 0&&(rt[V.__cacheKey].usedTimes--,xt.usedTimes===0&&A(I)),V.__cacheKey=mt,V.__webglTexture=rt[mt].texture}return Z}function Y(V,I,Z){return Math.floor(Math.floor(V/Z)/I)}function $(V,I,Z,tt){let mt=V.updateRanges;if(mt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,I.width,I.height,Z,tt,I.data);else{mt.sort((Dt,St)=>Dt.start-St.start);let xt=0;for(let Dt=1;Dt<mt.length;Dt++){let St=mt[xt],vt=mt[Dt],Nt=St.start+St.count,Ht=Y(vt.start,I.width,4),Kt=Y(St.start,I.width,4);vt.start<=Nt+1&&Ht===Kt&&Y(vt.start+vt.count-1,I.width,4)===Ht?St.count=Math.max(St.count,vt.start+vt.count-St.start):(++xt,mt[xt]=vt)}mt.length=xt+1;let st=e.getParameter(i.UNPACK_ROW_LENGTH),lt=e.getParameter(i.UNPACK_SKIP_PIXELS),bt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,I.width);for(let Dt=0,St=mt.length;Dt<St;Dt++){let vt=mt[Dt],Nt=Math.floor(vt.start/4),Ht=Math.ceil(vt.count/4),Kt=Nt%I.width,X=Math.floor(Nt/I.width),_t=Ht,ot=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Kt),e.pixelStorei(i.UNPACK_SKIP_ROWS,X),e.texSubImage2D(i.TEXTURE_2D,0,Kt,X,_t,ot,Z,tt,I.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,st),e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,bt)}}function at(V,I,Z){let tt=i.TEXTURE_2D;(I.isDataArrayTexture||I.isCompressedArrayTexture)&&(tt=i.TEXTURE_2D_ARRAY),I.isData3DTexture&&(tt=i.TEXTURE_3D);let rt=ht(V,I),mt=I.source;e.bindTexture(tt,V.__webglTexture,i.TEXTURE0+Z);let xt=n.get(mt);if(mt.version!==xt.__version||rt===!0){if(e.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&I.image instanceof ImageBitmap)===!1){let ot=oe.getPrimaries(oe.workingColorSpace),yt=I.colorSpace===ui?null:oe.getPrimaries(I.colorSpace),At=I.colorSpace===ui||ot===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment);let lt=m(I.image,!1,r.maxTextureSize);lt=Qe(I,lt);let bt=s.convert(I.format,I.colorSpace),Dt=s.convert(I.type),St=_(I.internalFormat,bt,Dt,I.normalized,I.colorSpace,I.isVideoTexture);it(tt,I);let vt,Nt=I.mipmaps,Ht=I.isVideoTexture!==!0,Kt=xt.__version===void 0||rt===!0,X=mt.dataReady,_t=w(I,lt);if(I.isDepthTexture)St=M(I.format===Ni,I.type),Kt&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,St,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,St,lt.width,lt.height,0,bt,Dt,null));else if(I.isDataTexture)if(Nt.length>0){Ht&&Kt&&e.texStorage2D(i.TEXTURE_2D,_t,St,Nt[0].width,Nt[0].height);for(let ot=0,yt=Nt.length;ot<yt;ot++)vt=Nt[ot],Ht?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,bt,Dt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,St,vt.width,vt.height,0,bt,Dt,vt.data);I.generateMipmaps=!1}else Ht?(Kt&&e.texStorage2D(i.TEXTURE_2D,_t,St,lt.width,lt.height),X&&$(I,lt,bt,Dt)):e.texImage2D(i.TEXTURE_2D,0,St,lt.width,lt.height,0,bt,Dt,lt.data);else if(I.isCompressedTexture)if(I.isCompressedArrayTexture){Ht&&Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,St,Nt[0].width,Nt[0].height,lt.depth);for(let ot=0,yt=Nt.length;ot<yt;ot++)if(vt=Nt[ot],I.format!==Sn)if(bt!==null)if(Ht){if(X)if(I.layerUpdates.size>0){let At=fu(vt.width,vt.height,I.format,I.type);for(let ft of I.layerUpdates){let Bt=vt.data.subarray(ft*At/vt.data.BYTES_PER_ELEMENT,(ft+1)*At/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,ft,vt.width,vt.height,1,bt,Bt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,lt.depth,bt,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ot,St,vt.width,vt.height,lt.depth,0,vt.data,0,0);else Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?X&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ot,0,0,0,vt.width,vt.height,lt.depth,bt,Dt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ot,St,vt.width,vt.height,lt.depth,0,bt,Dt,vt.data);I.layerUpdates.size>0&&I.clearLayerUpdates()}else{Ht&&Kt&&e.texStorage2D(i.TEXTURE_2D,_t,St,Nt[0].width,Nt[0].height);for(let ot=0,yt=Nt.length;ot<yt;ot++)vt=Nt[ot],I.format!==Sn?bt!==null?Ht?X&&e.compressedTexSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,bt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ot,St,vt.width,vt.height,0,vt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,vt.width,vt.height,bt,Dt,vt.data):e.texImage2D(i.TEXTURE_2D,ot,St,vt.width,vt.height,0,bt,Dt,vt.data)}else if(I.isDataArrayTexture)if(Ht){if(Kt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,_t,St,lt.width,lt.height,lt.depth),X)if(I.layerUpdates.size>0){let ot=fu(lt.width,lt.height,I.format,I.type);for(let yt of I.layerUpdates){let At=lt.data.subarray(yt*ot/lt.data.BYTES_PER_ELEMENT,(yt+1)*ot/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,lt.width,lt.height,1,bt,Dt,At)}I.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Dt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,St,lt.width,lt.height,lt.depth,0,bt,Dt,lt.data);else if(I.isData3DTexture)Ht?(Kt&&e.texStorage3D(i.TEXTURE_3D,_t,St,lt.width,lt.height,lt.depth),X&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Dt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,St,lt.width,lt.height,lt.depth,0,bt,Dt,lt.data);else if(I.isFramebufferTexture){if(Kt)if(Ht)e.texStorage2D(i.TEXTURE_2D,_t,St,lt.width,lt.height);else{let ot=lt.width,yt=lt.height;for(let At=0;At<_t;At++)e.texImage2D(i.TEXTURE_2D,At,St,ot,yt,0,bt,Dt,null),ot>>=1,yt>>=1}}else if(I.isHTMLTexture){if("texElementImage2D"in i){let ot=i.canvas;if(ot.hasAttribute("layoutsubtree")||ot.setAttribute("layoutsubtree","true"),lt.parentNode!==ot){ot.appendChild(lt),u.add(I),ot.onpaint=yt=>{let At=yt.changedElements;for(let ft of u)At.includes(ft.image)&&(ft.needsUpdate=!0)},ot.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,lt);else{let At=i.RGBA,ft=i.RGBA,Bt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,At,ft,Bt,lt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Nt.length>0){if(Ht&&Kt){let ot=xe(Nt[0]);e.texStorage2D(i.TEXTURE_2D,_t,St,ot.width,ot.height)}for(let ot=0,yt=Nt.length;ot<yt;ot++)vt=Nt[ot],Ht?X&&e.texSubImage2D(i.TEXTURE_2D,ot,0,0,bt,Dt,vt):e.texImage2D(i.TEXTURE_2D,ot,St,bt,Dt,vt);I.generateMipmaps=!1}else if(Ht){if(Kt){let ot=xe(lt);e.texStorage2D(i.TEXTURE_2D,_t,St,ot.width,ot.height)}X&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,Dt,lt)}else e.texImage2D(i.TEXTURE_2D,0,St,bt,Dt,lt);p(I)&&v(tt),xt.__version=mt.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function ct(V,I,Z){if(I.image.length!==6)return;let tt=ht(V,I),rt=I.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+Z);let mt=n.get(rt);if(rt.version!==mt.__version||tt===!0){e.activeTexture(i.TEXTURE0+Z);let xt=oe.getPrimaries(oe.workingColorSpace),st=I.colorSpace===ui?null:oe.getPrimaries(I.colorSpace),lt=I.colorSpace===ui||xt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,I.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,I.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let bt=I.isCompressedTexture||I.image[0].isCompressedTexture,Dt=I.image[0]&&I.image[0].isDataTexture,St=[];for(let ft=0;ft<6;ft++)!bt&&!Dt?St[ft]=m(I.image[ft],!0,r.maxCubemapSize):St[ft]=Dt?I.image[ft].image:I.image[ft],St[ft]=Qe(I,St[ft]);let vt=St[0],Nt=s.convert(I.format,I.colorSpace),Ht=s.convert(I.type),Kt=_(I.internalFormat,Nt,Ht,I.normalized,I.colorSpace),X=I.isVideoTexture!==!0,_t=mt.__version===void 0||tt===!0,ot=rt.dataReady,yt=w(I,vt);it(i.TEXTURE_CUBE_MAP,I);let At;if(bt){X&&_t&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,vt.width,vt.height);for(let ft=0;ft<6;ft++){At=St[ft].mipmaps;for(let Bt=0;Bt<At.length;Bt++){let Lt=At[Bt];I.format!==Sn?Nt!==null?X?ot&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,0,0,Lt.width,Lt.height,Nt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,Kt,Lt.width,Lt.height,0,Lt.data):Wt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,0,0,Lt.width,Lt.height,Nt,Ht,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt,Kt,Lt.width,Lt.height,0,Nt,Ht,Lt.data)}}}else{if(At=I.mipmaps,X&&_t){At.length>0&&yt++;let ft=xe(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,ft.width,ft.height)}for(let ft=0;ft<6;ft++)if(Dt){X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,St[ft].width,St[ft].height,Nt,Ht,St[ft].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Kt,St[ft].width,St[ft].height,0,Nt,Ht,St[ft].data);for(let Bt=0;Bt<At.length;Bt++){let _e=At[Bt].image[ft].image;X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,0,0,_e.width,_e.height,Nt,Ht,_e.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,Kt,_e.width,_e.height,0,Nt,Ht,_e.data)}}else{X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,0,0,Nt,Ht,St[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,Kt,Nt,Ht,St[ft]);for(let Bt=0;Bt<At.length;Bt++){let Lt=At[Bt];X?ot&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,0,0,Nt,Ht,Lt.image[ft]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Bt+1,Kt,Nt,Ht,Lt.image[ft])}}}p(I)&&v(i.TEXTURE_CUBE_MAP),mt.__version=rt.version,I.onUpdate&&I.onUpdate(I)}V.__version=I.version}function ut(V,I,Z,tt,rt,mt){let xt=s.convert(Z.format,Z.colorSpace),st=s.convert(Z.type),lt=_(Z.internalFormat,xt,st,Z.normalized,Z.colorSpace),bt=n.get(I),Dt=n.get(Z);if(Dt.__renderTarget=I,!bt.__hasExternalTextures){let St=Math.max(1,I.width>>mt),vt=Math.max(1,I.height>>mt);rt===i.TEXTURE_3D||rt===i.TEXTURE_2D_ARRAY?e.texImage3D(rt,mt,lt,St,vt,I.depth,0,xt,st,null):e.texImage2D(rt,mt,lt,St,vt,0,xt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),Ue(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,tt,rt,Dt.__webglTexture,0,Ae(I)):(rt===i.TEXTURE_2D||rt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,tt,rt,Dt.__webglTexture,mt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(V,I,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,V),I.depthBuffer){let tt=I.depthTexture,rt=tt&&tt.isDepthTexture?tt.type:null,mt=M(I.stencilBuffer,rt),xt=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ue(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(I),mt,I.width,I.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(I),mt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,mt,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,V)}else{let tt=I.textures;for(let rt=0;rt<tt.length;rt++){let mt=tt[rt],xt=s.convert(mt.format,mt.colorSpace),st=s.convert(mt.type),lt=_(mt.internalFormat,xt,st,mt.normalized,mt.colorSpace);Ue(I)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ae(I),lt,I.width,I.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ae(I),lt,I.width,I.height):i.renderbufferStorage(i.RENDERBUFFER,lt,I.width,I.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(V,I,Z){let tt=I.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(I.depthTexture&&I.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(I.depthTexture);if(rt.__renderTarget=I,(!rt.__webglTexture||I.depthTexture.image.width!==I.width||I.depthTexture.image.height!==I.height)&&(I.depthTexture.image.width=I.width,I.depthTexture.image.height=I.height,I.depthTexture.needsUpdate=!0),tt){if(rt.__webglInit===void 0&&(rt.__webglInit=!0,I.depthTexture.addEventListener("dispose",R)),rt.__webglTexture===void 0){rt.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),it(i.TEXTURE_CUBE_MAP,I.depthTexture);let bt=s.convert(I.depthTexture.format),Dt=s.convert(I.depthTexture.type),St;I.depthTexture.format===Gn?St=i.DEPTH_COMPONENT24:I.depthTexture.format===Ni&&(St=i.DEPTH24_STENCIL8);for(let vt=0;vt<6;vt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,St,I.width,I.height,0,bt,Dt,null)}}else O(I.depthTexture,0);let mt=rt.__webglTexture,xt=Ae(I),st=tt?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,lt=I.depthTexture.format===Ni?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(I.depthTexture.format===Gn)Ue(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,mt,0);else if(I.depthTexture.format===Ni)Ue(I)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,lt,st,mt,0,xt):i.framebufferTexture2D(i.FRAMEBUFFER,lt,st,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(V){let I=n.get(V),Z=V.isWebGLCubeRenderTarget===!0;if(I.__boundDepthTexture!==V.depthTexture){let tt=V.depthTexture;if(I.__depthDisposeCallback&&I.__depthDisposeCallback(),tt){let rt=()=>{delete I.__boundDepthTexture,delete I.__depthDisposeCallback,tt.removeEventListener("dispose",rt)};tt.addEventListener("dispose",rt),I.__depthDisposeCallback=rt}I.__boundDepthTexture=tt}if(V.depthTexture&&!I.__autoAllocateDepthBuffer)if(Z)for(let tt=0;tt<6;tt++)gt(I.__webglFramebuffer[tt],V,tt);else{let tt=V.texture.mipmaps;tt&&tt.length>0?gt(I.__webglFramebuffer[0],V,0):gt(I.__webglFramebuffer,V,0)}else if(Z){I.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[tt]),I.__webglDepthbuffer[tt]===void 0)I.__webglDepthbuffer[tt]=i.createRenderbuffer(),pt(I.__webglDepthbuffer[tt],V,!1);else{let rt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=I.__webglDepthbuffer[tt];i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,mt)}}else{let tt=V.texture.mipmaps;if(tt&&tt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,I.__webglFramebuffer),I.__webglDepthbuffer===void 0)I.__webglDepthbuffer=i.createRenderbuffer(),pt(I.__webglDepthbuffer,V,!1);else{let rt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=I.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,mt),i.framebufferRenderbuffer(i.FRAMEBUFFER,rt,i.RENDERBUFFER,mt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(V,I,Z){let tt=n.get(V);I!==void 0&&ut(tt.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Mt(V)}function ne(V){let I=V.texture,Z=n.get(V),tt=n.get(I);V.addEventListener("dispose",b);let rt=V.textures,mt=V.isWebGLCubeRenderTarget===!0,xt=rt.length>1;if(xt||(tt.__webglTexture===void 0&&(tt.__webglTexture=i.createTexture()),tt.__version=I.version,o.memory.textures++),mt){Z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer[st]=[];for(let lt=0;lt<I.mipmaps.length;lt++)Z.__webglFramebuffer[st][lt]=i.createFramebuffer()}else Z.__webglFramebuffer[st]=i.createFramebuffer()}else{if(I.mipmaps&&I.mipmaps.length>0){Z.__webglFramebuffer=[];for(let st=0;st<I.mipmaps.length;st++)Z.__webglFramebuffer[st]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(xt)for(let st=0,lt=rt.length;st<lt;st++){let bt=n.get(rt[st]);bt.__webglTexture===void 0&&(bt.__webglTexture=i.createTexture(),o.memory.textures++)}if(V.samples>0&&Ue(V)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let st=0;st<rt.length;st++){let lt=rt[st];Z.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[st]);let bt=s.convert(lt.format,lt.colorSpace),Dt=s.convert(lt.type),St=_(lt.internalFormat,bt,Dt,lt.normalized,lt.colorSpace,V.isXRRenderTarget===!0),vt=Ae(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,St,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,Z.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(Z.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(mt){e.bindTexture(i.TEXTURE_CUBE_MAP,tt.__webglTexture),it(i.TEXTURE_CUBE_MAP,I);for(let st=0;st<6;st++)if(I.mipmaps&&I.mipmaps.length>0)for(let lt=0;lt<I.mipmaps.length;lt++)ut(Z.__webglFramebuffer[st][lt],V,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,lt);else ut(Z.__webglFramebuffer[st],V,I,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(I)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let st=0,lt=rt.length;st<lt;st++){let bt=rt[st],Dt=n.get(bt),St=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(St=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,Dt.__webglTexture),it(St,bt),ut(Z.__webglFramebuffer,V,bt,i.COLOR_ATTACHMENT0+st,St,0),p(bt)&&v(St)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(st=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,tt.__webglTexture),it(st,I),I.mipmaps&&I.mipmaps.length>0)for(let lt=0;lt<I.mipmaps.length;lt++)ut(Z.__webglFramebuffer[lt],V,I,i.COLOR_ATTACHMENT0,st,lt);else ut(Z.__webglFramebuffer,V,I,i.COLOR_ATTACHMENT0,st,0);p(I)&&v(st),e.unbindTexture()}V.depthBuffer&&Mt(V)}function zt(V){let I=V.textures;for(let Z=0,tt=I.length;Z<tt;Z++){let rt=I[Z];if(p(rt)){let mt=y(V),xt=n.get(rt).__webglTexture;e.bindTexture(mt,xt),v(mt),e.unbindTexture()}}}let fe=[],He=[];function fn(V){if(V.samples>0){if(Ue(V)===!1){let I=V.textures,Z=V.width,tt=V.height,rt=i.COLOR_BUFFER_BIT,mt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(V),st=I.length>1;if(st)for(let bt=0;bt<I.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);let lt=V.texture.mipmaps;lt&&lt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let bt=0;bt<I.length;bt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(rt|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(rt|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(I[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Dt,0)}i.blitFramebuffer(0,0,Z,tt,0,0,Z,tt,rt,i.NEAREST),l===!0&&(fe.length=0,He.length=0,fe.push(i.COLOR_ATTACHMENT0+bt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(fe.push(mt),He.push(mt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let bt=0;bt<I.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[bt]);let Dt=n.get(I[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Dt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let I=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[I])}}}function Ae(V){return Math.min(r.maxSamples,V.samples)}function Ue(V){let I=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&I.__useRenderToTexture!==!1}function q(V){let I=o.render.frame;h.get(V)!==I&&(h.set(V,I),V.update())}function Qe(V,I){let Z=V.colorSpace,tt=V.format,rt=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||Z!==_s&&Z!==ui&&(oe.getTransfer(Z)===ge?(tt!==Sn||rt!==vn)&&Wt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",Z)),I}function xe(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=F,this.getTextureUnits=E,this.setTextureUnits=P,this.setTexture2D=O,this.setTexture2DArray=B,this.setTexture3D=k,this.setTextureCube=z,this.rebindTextures=Ot,this.setupRenderTarget=ne,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=fn,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=Ue,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function W_(i,t){function e(n,r=ui){let s,o=oe.getTransfer(r);if(n===vn)return i.UNSIGNED_BYTE;if(n===Ba)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ka)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===jc)return i.BYTE;if(n===Qc)return i.SHORT;if(n===Kr)return i.UNSIGNED_SHORT;if(n===Oa)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===Dn)return i.FLOAT;if(n===Nn)return i.HALF_FLOAT;if(n===nu)return i.ALPHA;if(n===iu)return i.RGB;if(n===Sn)return i.RGBA;if(n===Gn)return i.DEPTH_COMPONENT;if(n===Ni)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===za)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Va)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===Hs||n===Ws||n===Xs||n===Ys)if(o===ge)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Hs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Hs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ws)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xs)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ha||n===Wa||n===Xa||n===Ya)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ha)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xa)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ya)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qa||n===$a||n===Za||n===Ka||n===Ja||n===qs||n===ja)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qa||n===$a)return o===ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Za)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ka)return s.COMPRESSED_R11_EAC;if(n===Ja)return s.COMPRESSED_SIGNED_R11_EAC;if(n===qs)return s.COMPRESSED_RG11_EAC;if(n===ja)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qa||n===tl||n===el||n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===hl||n===fl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qa)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===el)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===il)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ol)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===al)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ll)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fl)return o===ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dl||n===pl||n===ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===dl)return o===ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gl||n===xl||n===$s||n===bl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===gl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var X_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y_=`
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

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Rs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new an({vertexShader:X_,fragmentShader:Y_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends Hn{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,x=typeof XRWebGLBinding<"u",m=new Iu,p={},v=e.getContextAttributes(),y=null,_=null,M=[],w=[],R=new te,b=null,S=null,A=new rn;A.viewport=new Ce;let C=new rn;C.viewport=new Ce;let T=[A,C],F=new La,E=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=M[Y];return $===void 0&&($=new Wr,M[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=M[Y];return $===void 0&&($=new Wr,M[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=M[Y];return $===void 0&&($=new Wr,M[Y]=$),$.getHandSpace()};function D(Y){let $=w.indexOf(Y.inputSource);if($===-1)return;let at=M[$];at!==void 0&&(at.update(Y.inputSource,Y.frame,c||o),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function L(){r.removeEventListener("select",D),r.removeEventListener("selectstart",D),r.removeEventListener("selectend",D),r.removeEventListener("squeeze",D),r.removeEventListener("squeezestart",D),r.removeEventListener("squeezeend",D),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",O);for(let Y=0;Y<M.length;Y++){let $=w[Y];$!==null&&(w[Y]=null,M[Y].disconnect($))}E=null,P=null,m.reset();for(let Y in p)delete p[Y];if(t.setRenderTarget(y),d=null,f=null,u=null,r=null,_=null,ht.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(R.width,R.height,!1),S!==null){let Y=S.camera;Y.fov=S.fov,Y.zoom=S.zoom,Y.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&Wt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&Wt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(y=t.getRenderTarget(),r.addEventListener("select",D),r.addEventListener("selectstart",D),r.addEventListener("selectend",D),r.addEventListener("squeeze",D),r.addEventListener("squeezestart",D),r.addEventListener("squeezeend",D),r.addEventListener("end",L),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let at=null,ct=null,ut=null;v.depth&&(ut=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=v.stencil?Ni:Gn,ct=v.stencil?Jr:Fn);let pt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(pt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),_=new on(f.textureWidth,f.textureHeight,{format:Sn,type:vn,depthTexture:new Ri(f.textureWidth,f.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let at={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,at),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),_=new on(d.framebufferWidth,d.framebufferHeight,{format:Sn,type:vn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ht.setContext(r),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(Y){for(let $=0;$<Y.removed.length;$++){let at=Y.removed[$],ct=w.indexOf(at);ct>=0&&(w[ct]=null,M[ct].disconnect(at))}for(let $=0;$<Y.added.length;$++){let at=Y.added[$],ct=w.indexOf(at);if(ct===-1){for(let pt=0;pt<M.length;pt++)if(pt>=w.length){w.push(at),ct=pt;break}else if(w[pt]===null){w[pt]=at,ct=pt;break}if(ct===-1)break}let ut=M[ct];ut&&ut.connect(at)}}let B=new H,k=new H;function z(Y,$,at){B.setFromMatrixPosition($.matrixWorld),k.setFromMatrixPosition(at.matrixWorld);let ct=B.distanceTo(k),ut=$.projectionMatrix.elements,pt=at.projectionMatrix.elements,gt=ut[14]/(ut[10]-1),Mt=ut[14]/(ut[10]+1),Ot=(ut[9]+1)/ut[5],ne=(ut[9]-1)/ut[5],zt=(ut[8]-1)/ut[0],fe=(pt[8]+1)/pt[0],He=gt*zt,fn=gt*fe,Ae=ct/(-zt+fe),Ue=Ae*-zt;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ue),Y.translateZ(Ae),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ut[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let q=gt+Ae,Qe=Mt+Ae,xe=He-Ue,V=fn+(ct-Ue),I=Ot*Mt/Qe*q,Z=ne*Mt/Qe*q;Y.projectionMatrix.makePerspective(xe,V,I,Z,q,Qe),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function et(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;let $=Y.near,at=Y.far;m.texture!==null&&(m.depthNear>0&&($=m.depthNear),m.depthFar>0&&(at=m.depthFar)),F.near=C.near=A.near=$,F.far=C.far=A.far=at,(E!==F.near||P!==F.far)&&(r.updateRenderState({depthNear:F.near,depthFar:F.far}),E=F.near,P=F.far),F.layers.mask=Y.layers.mask|6,A.layers.mask=F.layers.mask&-5,C.layers.mask=F.layers.mask&-3;let ct=Y.parent,ut=F.cameras;et(F,ct);for(let pt=0;pt<ut.length;pt++)et(ut[pt],ct);ut.length===2?z(F,A,C):F.projectionMatrix.copy(A.projectionMatrix),S===null&&Y.isPerspectiveCamera&&(S={camera:Y,fov:Y.fov,zoom:Y.zoom}),G(Y,F,ct)};function G(Y,$,at){at===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=ca*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(Y){l=Y,f!==null&&(f.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Y){return p[Y]};let J=null;function it(Y,$){if(h=$.getViewerPose(c||o),g=$,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(_,d.framebuffer),t.setRenderTarget(_));let ct=!1;at.length!==F.cameras.length&&(F.cameras.length=0,ct=!0);for(let Mt=0;Mt<at.length;Mt++){let Ot=at[Mt],ne=null;if(d!==null)ne=d.getViewport(Ot);else{let fe=u.getViewSubImage(f,Ot);ne=fe.viewport,Mt===0&&(t.setRenderTargetTextures(_,fe.colorTexture,fe.depthStencilTexture),t.setRenderTarget(_))}let zt=T[Mt];zt===void 0&&(zt=new rn,zt.layers.enable(Mt),zt.viewport=new Ce,T[Mt]=zt),zt.matrix.fromArray(Ot.transform.matrix),zt.matrix.decompose(zt.position,zt.quaternion,zt.scale),zt.projectionMatrix.fromArray(Ot.projectionMatrix),zt.projectionMatrixInverse.copy(zt.projectionMatrix).invert(),zt.viewport.set(ne.x,ne.y,ne.width,ne.height),Mt===0&&(F.matrix.copy(zt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),ct===!0&&F.cameras.push(zt)}let ut=r.enabledFeatures;if(ut&&ut.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=n.getBinding();let Mt=u.getDepthInformation(at[0]);Mt&&Mt.isValid&&Mt.texture&&m.init(Mt,r.renderState)}if(ut&&ut.includes("camera-access")&&x){t.state.unbindTexture(),u=n.getBinding();for(let Mt=0;Mt<at.length;Mt++){let Ot=at[Mt].camera;if(Ot){let ne=p[Ot];ne||(ne=new Rs,p[Ot]=ne);let zt=u.getCameraImage(Ot);ne.sourceTexture=zt}}}}for(let at=0;at<M.length;at++){let ct=w[at],ut=M[at];ct!==null&&ut!==void 0&&ut.update(ct,$,c||o)}J&&J(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let ht=new yd;ht.setAnimationLoop(it),this.setAnimationLoop=function(Y){J=Y},this.dispose=function(){}}},q_=new Te,Ad=new $t;Ad.set(-1,0,0,0,1,0,0,0,1);function $_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,v,y,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Je&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Je&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=t.get(p),y=v.envMap,_=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(q_.makeRotationFromEuler(_)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ad),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Je&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Z_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let w=M.program;n.uniformBlockBinding(_,w)}function c(_,M){let w=r[_.id];w===void 0&&(m(_),w=h(_),r[_.id]=w,_.addEventListener("dispose",v));let R=M.program;n.updateUBOMapping(_,R);let b=t.render.frame;s[_.id]!==b&&(f(_),s[_.id]=b)}function h(_){let M=u();_.__bindingPointIndex=M;let w=i.createBuffer(),R=_.__size,b=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let M=r[_.id],w=_.uniforms,R=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let b=0,S=w.length;b<S;b++){let A=w[b];if(Array.isArray(A))for(let C=0,T=A.length;C<T;C++)d(A[C],b,C,R);else d(A,b,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(_,M,w,R){if(x(_,M,w,R)===!0){let b=_.__offset,S=_.value;if(Array.isArray(S)){let A=0;for(let C=0;C<S.length;C++){let T=S[C],F=p(T);g(T,_.__data,A),typeof T!="number"&&typeof T!="boolean"&&!T.isMatrix3&&!ArrayBuffer.isView(T)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(S,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,_.__data)}}function g(_,M,w){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,w)}function x(_,M,w,R){let b=_.value,S=M+"_"+w;if(R[S]===void 0)return typeof b=="number"||typeof b=="boolean"?R[S]=b:ArrayBuffer.isView(b)?R[S]=b.slice():R[S]=b.clone(),!0;{let A=R[S];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return R[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function m(_){let M=_.uniforms,w=0,R=16;for(let S=0,A=M.length;S<A;S++){let C=Array.isArray(M[S])?M[S]:[M[S]];for(let T=0,F=C.length;T<F;T++){let E=C[T],P=Array.isArray(E.value)?E.value:[E.value];for(let D=0,L=P.length;D<L;D++){let O=P[D],B=p(O),k=w%R,z=k%B.boundary,et=k+z;w+=z,et!==0&&R-et<B.storage&&(w+=R-et),E.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=w,w+=B.storage}}}let b=w%R;return b>0&&(w+=R-b),_.__size=w,_.__cache={},this}function p(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Wt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Wt("WebGLRenderer: Unsupported uniform value type.",_),M}function v(_){let M=_.target;M.removeEventListener("dispose",v);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function y(){for(let _ in r)i.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:y}}var K_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),$n=null;function J_(){return $n===null&&($n=new da(K_,16,16,Ui,Nn),$n.name="DFG_LUT",$n.minFilter=Ze,$n.magFilter=Ze,$n.wrapS=xn,$n.wrapT=xn,$n.generateMipmaps=!1,$n.needsUpdate=!0),$n}var lr=class{constructor(t={}){let{canvas:e=Gf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=vn}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let x=d,m=new Set([Ga,Va,za]),p=new Set([vn,Fn,Kr,Jr,Ba,ka]),v=new Uint32Array(4),y=new Int32Array(4),_=new H,M=null,w=null,R=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,C=!1,T=null,F=null,E=null,P=null;this._outputColorSpace=De;let D=0,L=0,O=null,B=-1,k=null,z=new Ce,et=new Ce,G=null,J=new K(0),it=0,ht=e.width,Y=e.height,$=1,at=null,ct=null,ut=new Ce(0,0,ht,Y),pt=new Ce(0,0,ht,Y),gt=!1,Mt=new Es,Ot=!1,ne=!1,zt=new Te,fe=new H,He=new Ce,fn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ae=!1;function Ue(){return O===null?$:1}let q=n;function Qe(U,W){return e.getContext(U,W)}let xe,V,I,Z,tt,rt,mt,xt,st,lt,bt,Dt,St,vt,Nt,Ht,Kt,X,_t,ot,yt,At,ft;try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",pe,!1),e.addEventListener("webglcontextcreationerror",En,!1),q===null){let W="webgl2";if(q=Qe(W,U),q===null)throw Qe(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Bt()}catch(U){throw e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Xt("WebGLRenderer: "+U.message),U}function Bt(){xe=new rv(q),xe.init(),yt=new W_(q,xe),V=new $b(q,xe,t,yt),I=new G_(q,xe),V.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),F=q.createFramebuffer(),E=q.createFramebuffer(),P=q.createFramebuffer(),Z=new av(q),tt=new R_,rt=new H_(q,xe,I,tt,V,yt,Z),mt=new iv(A),xt=new cg(q),At=new Yb(q,xt),st=new sv(q,xt,Z,At),lt=new cv(q,st,xt,At,Z),X=new lv(q,V,rt),Nt=new Zb(tt),bt=new A_(A,mt,xe,V,At,Nt),Dt=new $_(A,tt),St=new P_,vt=new U_(xe),Kt=new Xb(A,mt,I,lt,g,l),Ht=new V_(A,lt,V),ft=new Z_(q,Z,V,I),_t=new qb(q,xe,Z),ot=new ov(q,xe,Z),Z.programs=bt.programs,A.capabilities=V,A.extensions=xe,A.properties=tt,A.renderLists=St,A.shadowMap=Ht,A.state=I,A.info=Z}x!==vn&&(S=new hv(x,e.width,e.height,a,r,s));let Lt=new Lu(A,q);this.xr=Lt,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){let U=xe.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=xe.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(ht,Y,!1))},this.getSize=function(U){return U.set(ht,Y)},this.setSize=function(U,W,nt=!0){if(Lt.isPresenting){Wt("WebGLRenderer: Can't change size while VR device is presenting.");return}ht=U,Y=W,e.width=Math.floor(U*$),e.height=Math.floor(W*$),nt===!0&&(e.style.width=U+"px",e.style.height=W+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,U,W)},this.getDrawingBufferSize=function(U){return U.set(ht*$,Y*$).floor()},this.setDrawingBufferSize=function(U,W,nt){ht=U,Y=W,$=nt,e.width=Math.floor(U*nt),e.height=Math.floor(W*nt),this.setViewport(0,0,U,W)},this.setEffects=function(U){if(x===vn){Xt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let W=0;W<U.length;W++)if(U[W].isOutputPass===!0){Wt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(z)},this.getViewport=function(U){return U.copy(ut)},this.setViewport=function(U,W,nt,j){U.isVector4?ut.set(U.x,U.y,U.z,U.w):ut.set(U,W,nt,j),I.viewport(z.copy(ut).multiplyScalar($).round())},this.getScissor=function(U){return U.copy(pt)},this.setScissor=function(U,W,nt,j){U.isVector4?pt.set(U.x,U.y,U.z,U.w):pt.set(U,W,nt,j),I.scissor(et.copy(pt).multiplyScalar($).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(U){I.setScissorTest(gt=U)},this.setOpaqueSort=function(U){at=U},this.setTransparentSort=function(U){ct=U},this.getClearColor=function(U){return U.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(U=!0,W=!0,nt=!0){let j=0;if(U){let Q=!1;if(O!==null){let Et=O.texture.format;Q=m.has(Et)}if(Q){let Et=O.texture.type,Ct=p.has(Et),Tt=Kt.getClearColor(),Pt=Kt.getClearAlpha(),Ft=Tt.r,jt=Tt.g,ie=Tt.b;Ct?(v[0]=Ft,v[1]=jt,v[2]=ie,v[3]=Pt,q.clearBufferuiv(q.COLOR,0,v)):(y[0]=Ft,y[1]=jt,y[2]=ie,y[3]=Pt,q.clearBufferiv(q.COLOR,0,y))}else j|=q.COLOR_BUFFER_BIT}W&&(j|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),nt&&(j|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&q.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),T=U},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",pe,!1),e.removeEventListener("webglcontextcreationerror",En,!1),Kt.dispose(),St.dispose(),vt.dispose(),tt.dispose(),mt.dispose(),lt.dispose(),At.dispose(),ft.dispose(),bt.dispose(),Lt.dispose(),Lt.removeEventListener("sessionstart",yh),Lt.removeEventListener("sessionend",Mh),qi.stop()};function _e(U){U.preventDefault(),lu("WebGLRenderer: Context Lost."),C=!0}function pe(){lu("WebGLRenderer: Context Restored."),C=!1;let U=Z.autoReset,W=Ht.enabled,nt=Ht.autoUpdate,j=Ht.needsUpdate,Q=Ht.type;Bt(),Z.autoReset=U,Ht.enabled=W,Ht.autoUpdate=nt,Ht.needsUpdate=j,Ht.type=Q}function En(U){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function kn(U){let W=U.target;W.removeEventListener("dispose",kn),i0(W)}function i0(U){r0(U),tt.remove(U)}function r0(U){let W=tt.get(U).programs;W!==void 0&&(W.forEach(function(nt){bt.releaseProgram(nt)}),U.isShaderMaterial&&bt.releaseShaderCache(U))}this.renderBufferDirect=function(U,W,nt,j,Q,Et){W===null&&(W=fn);let Ct=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Tt=a0(U,W,nt,j,Q);I.setMaterial(j,Ct);let Pt=nt.index,Ft=1;if(j.wireframe===!0){if(Pt=st.getWireframeAttribute(nt),Pt===void 0)return;Ft=2}let jt=nt.drawRange,ie=nt.attributes.position,It=jt.start*Ft,me=(jt.start+jt.count)*Ft;Et!==null&&(It=Math.max(It,Et.start*Ft),me=Math.min(me,(Et.start+Et.count)*Ft)),Pt!==null?(It=Math.max(It,0),me=Math.min(me,Pt.count)):ie!=null&&(It=Math.max(It,0),me=Math.min(me,ie.count));let Oe=me-It;if(Oe<0||Oe===1/0)return;At.setup(Q,j,Tt,nt,Pt);let Me,ve=_t;if(Pt!==null&&(Me=xt.get(Pt),ve=ot,ve.setIndex(Me)),Q.isMesh)j.wireframe===!0?(I.setLineWidth(j.wireframeLinewidth*Ue()),ve.setMode(q.LINES)):ve.setMode(q.TRIANGLES);else if(Q.isLine){let tn=j.linewidth;tn===void 0&&(tn=1),I.setLineWidth(tn*Ue()),Q.isLineSegments?ve.setMode(q.LINES):Q.isLineLoop?ve.setMode(q.LINE_LOOP):ve.setMode(q.LINE_STRIP)}else Q.isPoints?ve.setMode(q.POINTS):Q.isSprite&&ve.setMode(q.TRIANGLES);if(Q.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))ve.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let tn=Q._multiDrawStarts,Rt=Q._multiDrawCounts,un=Q._multiDrawCount,ce=Pt?xt.get(Pt).bytesPerElement:1,_n=tt.get(j).currentProgram.getUniforms();for(let zn=0;zn<un;zn++)_n.setValue(q,"_gl_DrawID",zn),ve.render(tn[zn]/ce,Rt[zn])}else if(Q.isInstancedMesh)ve.renderInstances(It,Oe,Q.count);else if(nt.isInstancedBufferGeometry){let tn=nt._maxInstanceCount!==void 0?nt._maxInstanceCount:1/0,Rt=Math.min(nt.instanceCount,tn);ve.renderInstances(It,Oe,Rt)}else ve.render(It,Oe)};function _h(U,W,nt,j){T!==null&&U.isNodeMaterial&&T.setObject(j,U),Ot===!0&&Nt.setState(U,nt,!1),U.transparent===!0&&U.side===de&&U.forceSinglePass===!1?(U.side=Je,U.needsUpdate=!0,To(U,W,j),U.side=Yn,U.needsUpdate=!0,To(U,W,j),U.side=de):To(U,W,j)}this.compile=function(U,W,nt=null){nt===null&&(nt=U),T!==null&&T.renderStart(U,W,nt),w=vt.get(nt),w.init(W),b.push(w),nt.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),U!==nt&&U.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(w.pushLight(Q),Q.castShadow&&w.pushShadow(Q))}),w.setupLights(),T!==null&&T.updateLights(w.state.lightsArray),ne=this.localClippingEnabled,Ot=Nt.init(this.clippingPlanes,ne),Ot===!0&&Nt.setGlobalState(this.clippingPlanes,W),T!==null&&Ht.render(w.state.shadowsArray,nt,W);let j=new Set;return U.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Et=Q.material;if(Et)if(Array.isArray(Et))for(let Ct=0;Ct<Et.length;Ct++){let Tt=Et[Ct];_h(Tt,nt,W,Q),j.add(Tt)}else _h(Et,nt,W,Q),j.add(Et)}),w=b.pop(),T!==null&&T.renderEnd(),j},this.compileAsync=function(U,W,nt=null){let j=this.compile(U,W,nt);return new Promise(Q=>{function Et(){if(j.forEach(function(Ct){let Pt=tt.get(Ct).currentProgram;(Pt===void 0||Pt.isReady())&&j.delete(Ct)}),j.size===0){Q(U);return}setTimeout(Et,10)}xe.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let ic=null;function s0(U){ic&&ic(U)}function yh(){qi.stop()}function Mh(){qi.start()}let qi=new yd;qi.setAnimationLoop(s0),typeof self<"u"&&qi.setContext(self),this.setAnimationLoop=function(U){ic=U,Lt.setAnimationLoop(U),U===null?qi.stop():qi.start()},Lt.addEventListener("sessionstart",yh),Lt.addEventListener("sessionend",Mh),this.render=function(U,W){if(W!==void 0&&W.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;T!==null&&T.renderStart(U,W);let nt=Lt.enabled===!0&&Lt.isPresenting===!0,j=S!==null&&(O===null||nt)&&S.begin(A,O);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Lt.enabled===!0&&Lt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Lt.cameraAutoUpdate===!0&&Lt.updateCamera(W),W=Lt.getCamera()),U.isScene===!0&&U.onBeforeRender(A,U,W,O),w=vt.get(U,b.length),w.init(W),w.state.textureUnits=rt.getTextureUnits(),b.push(w),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Mt.setFromProjectionMatrix(zt,In,W.reversedDepth),ne=this.localClippingEnabled,Ot=Nt.init(this.clippingPlanes,ne),M=St.get(U,R.length),M.init(),R.push(M),Lt.enabled===!0&&Lt.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&rc(Ct,W,-1/0,A.sortObjects)}rc(U,W,0,A.sortObjects),M.finish(),T!==null&&T.updateLights(w.state.lightsArray),A.sortObjects===!0&&M.sort(at,ct),Ae=Lt.enabled===!1||Lt.isPresenting===!1||Lt.hasDepthSensing()===!1,Ae&&Kt.addToRenderList(M,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ot===!0&&Nt.beginShadows();let Q=w.state.shadowsArray;if(Ht.render(Q,U,W),Ot===!0&&Nt.endShadows(),(j&&S.hasRenderPass())===!1){let Ct=M.opaque,Tt=M.transmissive;if(w.setupLights(),W.isArrayCamera){let Pt=W.cameras;if(Tt.length>0)for(let Ft=0,jt=Pt.length;Ft<jt;Ft++){let ie=Pt[Ft];wh(Ct,Tt,U,ie)}Ae&&Kt.render(U);for(let Ft=0,jt=Pt.length;Ft<jt;Ft++){let ie=Pt[Ft];Sh(M,U,ie,ie.viewport)}}else Tt.length>0&&wh(Ct,Tt,U,W),Ae&&Kt.render(U),Sh(M,U,W)}O!==null&&L===0&&(rt.updateMultisampleRenderTarget(O),rt.updateRenderTargetMipmap(O)),j&&S.end(A),U.isScene===!0&&U.onAfterRender(A,U,W),At.resetDefaultState(),B=-1,k=null,b.pop(),b.length>0?(w=b[b.length-1],rt.setTextureUnits(w.state.textureUnits),Ot===!0&&Nt.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,T!==null&&T.renderEnd()};function rc(U,W,nt,j){if(U.visible===!1)return;if(U.layers.test(W.layers)){if(U.isGroup)nt=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(W);else if(U.isLightProbeGrid)w.pushLightProbeGrid(U);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(Mt)){j&&He.setFromMatrixPosition(U.matrixWorld).applyMatrix4(zt);let Ct=lt.update(U),Tt=U.material;Tt.visible&&M.push(U,Ct,Tt,nt,He.z,null,W)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(Mt))){let Ct=lt.update(U),Tt=U.material;if(j&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),He.copy(U.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),He.copy(Ct.boundingSphere.center)),He.applyMatrix4(U.matrixWorld).applyMatrix4(zt)),Array.isArray(Tt)){let Pt=Ct.groups;for(let Ft=0,jt=Pt.length;Ft<jt;Ft++){let ie=Pt[Ft],It=Tt[ie.materialIndex];It&&It.visible&&M.push(U,Ct,It,nt,He.z,ie,W)}}else Tt.visible&&M.push(U,Ct,Tt,nt,He.z,null,W)}}let Et=U.children;for(let Ct=0,Tt=Et.length;Ct<Tt;Ct++)rc(Et[Ct],W,nt,j)}function Sh(U,W,nt,j){let{opaque:Q,transmissive:Et,transparent:Ct}=U;w.setupLightsView(nt),Ot===!0&&Nt.setGlobalState(A.clippingPlanes,nt),j&&I.viewport(z.copy(j)),Q.length>0&&wo(Q,W,nt),Et.length>0&&wo(Et,W,nt),Ct.length>0&&wo(Ct,W,nt),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function wh(U,W,nt,j){if((nt.isScene===!0?nt.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[j.id]===void 0){let It=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[j.id]=new on(1,1,{generateMipmaps:!0,type:It?Nn:vn,minFilter:Di,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:oe.workingColorSpace})}let Et=w.state.transmissionRenderTarget[j.id],Ct=j.viewport||z;Et.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let Tt=A.getRenderTarget(),Pt=A.getActiveCubeFace(),Ft=A.getActiveMipmapLevel();A.setRenderTarget(Et),A.getClearColor(J),it=A.getClearAlpha(),it<1&&A.setClearColor(16777215,.5),A.clear(),Ae&&Kt.render(nt);let jt=A.toneMapping;A.toneMapping=Ln;let ie=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),w.setupLightsView(j),Ot===!0&&Nt.setGlobalState(A.clippingPlanes,j),wo(U,nt,j),rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et),xe.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let me=0,Oe=W.length;me<Oe;me++){let Me=W[me],{object:ve,geometry:tn,material:Rt,group:un}=Me;if(Rt.side===de&&ve.layers.test(j.layers)){let ce=Rt.side;Rt.side=Je,Rt.needsUpdate=!0,Th(ve,nt,j,tn,Rt,un),Rt.side=ce,Rt.needsUpdate=!0,It=!0}}It===!0&&(rt.updateMultisampleRenderTarget(Et),rt.updateRenderTargetMipmap(Et))}A.setRenderTarget(Tt,Pt,Ft),A.setClearColor(J,it),ie!==void 0&&(j.viewport=ie),A.toneMapping=jt}function wo(U,W,nt){let j=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Et=U.length;Q<Et;Q++){let Ct=U[Q],{object:Tt,geometry:Pt,group:Ft}=Ct,jt=Ct.material;jt.allowOverride===!0&&j!==null&&(jt=j),Tt.layers.test(nt.layers)&&Th(Tt,W,nt,Pt,jt,Ft)}}function Th(U,W,nt,j,Q,Et){T!==null&&Q.isNodeMaterial&&T.setObject(U,Q),U.onBeforeRender(A,W,nt,j,Q,Et),U.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),Q.onBeforeRender(A,W,nt,j,U,Et),Q.transparent===!0&&Q.side===de&&Q.forceSinglePass===!1?(Q.side=Je,Q.needsUpdate=!0,A.renderBufferDirect(nt,W,j,Q,U,Et),Q.side=Yn,Q.needsUpdate=!0,A.renderBufferDirect(nt,W,j,Q,U,Et),Q.side=de):A.renderBufferDirect(nt,W,j,Q,U,Et),U.onAfterRender(A,W,nt,j,Q,Et)}function To(U,W,nt){W.isScene!==!0&&(W=fn);let j=tt.get(U),Q=w.state.lights,Et=w.state.shadowsArray,Ct=Q.state.version,Tt=bt.getParameters(U,Q.state,Et,W,nt,w.state.lightProbeGridArray),Pt=bt.getProgramCacheKey(Tt),Ft=j.programs;j.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?W.environment:null,j.fog=W.fog;let jt=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;j.envMap=mt.get(U.envMap||j.environment,jt),j.envMapRotation=j.environment!==null&&U.envMap===null?W.environmentRotation:U.envMapRotation,Ft===void 0&&(U.addEventListener("dispose",kn),Ft=new Map,j.programs=Ft);let ie=Ft.get(Pt);if(ie!==void 0){if(j.currentProgram===ie&&j.lightsStateVersion===Ct)return Ah(U,Tt),ie}else Tt.uniforms=bt.getUniforms(U),T!==null&&U.isNodeMaterial&&T.build(U,nt,Tt),U.onBeforeCompile(Tt,A),ie=bt.acquireProgram(Tt,Pt),Ft.set(Pt,ie),j.uniforms=Tt.uniforms;let It=j.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(It.clippingPlanes=Nt.uniform),Ah(U,Tt),j.needsLights=c0(U),j.lightsStateVersion=Ct,j.needsLights&&(It.ambientLightColor.value=Q.state.ambient,It.lightProbe.value=Q.state.probe,It.sunLights.value=Q.state.sun,It.sunLightShadows.value=Q.state.sunShadow,It.directionalLights.value=Q.state.directional,It.directionalLightShadows.value=Q.state.directionalShadow,It.spotLights.value=Q.state.spot,It.spotLightShadows.value=Q.state.spotShadow,It.rectAreaLights.value=Q.state.rectArea,It.ltc_1.value=Q.state.rectAreaLTC1,It.ltc_2.value=Q.state.rectAreaLTC2,It.pointLights.value=Q.state.point,It.pointLightShadows.value=Q.state.pointShadow,It.hemisphereLights.value=Q.state.hemi,It.sunShadowMatrix.value=Q.state.sunShadowMatrix,It.sunShadowCascade.value=Q.state.sunShadowCascade,It.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,It.spotLightMatrix.value=Q.state.spotLightMatrix,It.spotLightMap.value=Q.state.spotLightMap,It.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.lightProbeGrid=w.state.lightProbeGridArray.length>0,j.currentProgram=ie,j.uniformsList=null,ie}function Eh(U){if(U.uniformsList===null){let W=U.currentProgram.getUniforms();U.uniformsList=ts.seqWithValue(W.seq,U.uniforms)}return U.uniformsList}function Ah(U,W){let nt=tt.get(U);nt.outputColorSpace=W.outputColorSpace,nt.batching=W.batching,nt.batchingColor=W.batchingColor,nt.instancing=W.instancing,nt.instancingColor=W.instancingColor,nt.instancingMorph=W.instancingMorph,nt.skinning=W.skinning,nt.morphTargets=W.morphTargets,nt.morphNormals=W.morphNormals,nt.morphColors=W.morphColors,nt.morphTargetsCount=W.morphTargetsCount,nt.numClippingPlanes=W.numClippingPlanes,nt.numIntersection=W.numClipIntersection,nt.vertexAlphas=W.vertexAlphas,nt.vertexTangents=W.vertexTangents,nt.toneMapping=W.toneMapping}function o0(U,W){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;_.setFromMatrixPosition(W.matrixWorld);for(let nt=0,j=U.length;nt<j;nt++){let Q=U[nt];if(Q.texture!==null&&Q.boundingBox.containsPoint(_))return Q}return null}function a0(U,W,nt,j,Q){W.isScene!==!0&&(W=fn),rt.resetTextureUnits();let Et=W.fog,Ct=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?W.environment:null,Tt=O===null?A.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:oe.workingColorSpace,Pt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Ft=mt.get(j.envMap||Ct,Pt),jt=j.vertexColors===!0&&!!nt.attributes.color&&nt.attributes.color.itemSize===4,ie=!!nt.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),It=!!nt.morphAttributes.position,me=!!nt.morphAttributes.normal,Oe=!!nt.morphAttributes.color,Me=Ln;j.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Me=A.toneMapping);let ve=nt.morphAttributes.position||nt.morphAttributes.normal||nt.morphAttributes.color,tn=ve!==void 0?ve.length:0,Rt=tt.get(j),un=w.state.lights;if(Ot===!0&&(ne===!0||U!==k)){let ye=U===k&&j.id===B;Nt.setState(j,U,ye)}let ce=!1;j.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==un.state.version||Rt.outputColorSpace!==Tt||Q.isBatchedMesh&&Rt.batching===!1||!Q.isBatchedMesh&&Rt.batching===!0||Q.isBatchedMesh&&Rt.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Rt.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Rt.instancing===!1||!Q.isInstancedMesh&&Rt.instancing===!0||Q.isSkinnedMesh&&Rt.skinning===!1||!Q.isSkinnedMesh&&Rt.skinning===!0||Q.isInstancedMesh&&Rt.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Rt.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Rt.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Rt.instancingMorph===!1&&Q.morphTexture!==null||Rt.envMap!==Ft||j.fog===!0&&Rt.fog!==Et||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==Nt.numPlanes||Rt.numIntersection!==Nt.numIntersection)||Rt.vertexAlphas!==jt||Rt.vertexTangents!==ie||Rt.morphTargets!==It||Rt.morphNormals!==me||Rt.morphColors!==Oe||Rt.toneMapping!==Me||Rt.morphTargetsCount!==tn||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,Rt.__version=j.version);let _n=Rt.currentProgram;ce===!0&&(_n=To(j,W,Q),T&&j.isNodeMaterial&&T.onUpdateProgram(j,_n,Rt));let zn=!1,gi=!1,Mr=!1,be=_n.getUniforms(),Fe=Rt.uniforms;if(I.useProgram(_n.program)&&(zn=!0,gi=!0,Mr=!0),j.id!==B&&(B=j.id,gi=!0),Rt.needsLights){let ye=o0(w.state.lightProbeGridArray,Q);Rt.lightProbeGrid!==ye&&(Rt.lightProbeGrid=ye,gi=!0)}if(zn||k!==U){I.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),be.setValue(q,"projectionMatrix",U.projectionMatrix),be.setValue(q,"viewMatrix",U.matrixWorldInverse);let bi=be.map.cameraPosition;bi!==void 0&&bi.setValue(q,fe.setFromMatrixPosition(U.matrixWorld)),V.logarithmicDepthBuffer&&be.setValue(q,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&be.setValue(q,"isOrthographic",U.isOrthographicCamera===!0),k!==U&&(k=U,gi=!0,Mr=!0)}if(Rt.needsLights&&(un.state.sunShadowMap.length>0&&be.setValue(q,"sunShadowMap",un.state.sunShadowMap,rt),un.state.directionalShadowMap.length>0&&be.setValue(q,"directionalShadowMap",un.state.directionalShadowMap,rt),un.state.spotShadowMap.length>0&&be.setValue(q,"spotShadowMap",un.state.spotShadowMap,rt),un.state.pointShadowMap.length>0&&be.setValue(q,"pointShadowMap",un.state.pointShadowMap,rt)),Q.isSkinnedMesh){be.setOptional(q,Q,"bindMatrix"),be.setOptional(q,Q,"bindMatrixInverse");let ye=Q.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),be.setValue(q,"boneTexture",ye.boneTexture,rt))}Q.isBatchedMesh&&(be.setOptional(q,Q,"batchingTexture"),be.setValue(q,"batchingTexture",Q._matricesTexture,rt),be.setOptional(q,Q,"batchingIdTexture"),be.setValue(q,"batchingIdTexture",Q._indirectTexture,rt),be.setOptional(q,Q,"batchingColorTexture"),Q._colorsTexture!==null&&be.setValue(q,"batchingColorTexture",Q._colorsTexture,rt));let xi=nt.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&X.update(Q,nt,_n),(gi||Rt.receiveShadow!==Q.receiveShadow)&&(Rt.receiveShadow=Q.receiveShadow,be.setValue(q,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&W.environment!==null&&(Fe.envMapIntensity.value=W.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=J_()),gi){if(be.setValue(q,"toneMappingExposure",A.toneMappingExposure),Rt.needsLights&&l0(Fe,Mr),Et&&j.fog===!0&&Dt.refreshFogUniforms(Fe,Et),Dt.refreshMaterialUniforms(Fe,j,$,Y,w.state.transmissionRenderTarget[U.id]),Rt.needsLights&&Rt.lightProbeGrid){let ye=Rt.lightProbeGrid;Fe.probesSH.value=ye.texture,Fe.probesMin.value.copy(ye.boundingBox.min),Fe.probesMax.value.copy(ye.boundingBox.max),Fe.probesResolution.value.copy(ye.resolution)}ts.upload(q,Eh(Rt),Fe,rt)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(ts.upload(q,Eh(Rt),Fe,rt),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&be.setValue(q,"center",Q.center),be.setValue(q,"modelViewMatrix",Q.modelViewMatrix),be.setValue(q,"normalMatrix",Q.normalMatrix),be.setValue(q,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let ye=j.uniformsGroups;for(let bi=0,Sr=ye.length;bi<Sr;bi++){let Ch=ye[bi];ft.update(Ch,_n),ft.bind(Ch,_n)}}return _n}function l0(U,W){U.ambientLightColor.needsUpdate=W,U.lightProbe.needsUpdate=W,U.sunLights.needsUpdate=W,U.sunLightShadows.needsUpdate=W,U.directionalLights.needsUpdate=W,U.directionalLightShadows.needsUpdate=W,U.pointLights.needsUpdate=W,U.pointLightShadows.needsUpdate=W,U.spotLights.needsUpdate=W,U.spotLightShadows.needsUpdate=W,U.rectAreaLights.needsUpdate=W,U.hemisphereLights.needsUpdate=W}function c0(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(U,W,nt){let j=tt.get(U);j.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),tt.get(U.texture).__webglTexture=W,tt.get(U.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:nt,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,W){let nt=tt.get(U);nt.__webglFramebuffer=W,nt.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(U,W=0,nt=0){O=U,D=W,L=nt;let j=null,Q=!1,Et=!1;if(U){let Tt=tt.get(U);if(Tt.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(q.FRAMEBUFFER,Tt.__webglFramebuffer),z.copy(U.viewport),et.copy(U.scissor),G=U.scissorTest,I.viewport(z),I.scissor(et),I.setScissorTest(G),B=-1;return}else if(Tt.__webglFramebuffer===void 0)rt.setupRenderTarget(U);else if(Tt.__hasExternalTextures)rt.rebindTextures(U,tt.get(U.texture).__webglTexture,tt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let jt=U.depthTexture;if(Tt.__boundDepthTexture!==jt){if(jt!==null&&tt.has(jt)&&(U.width!==jt.image.width||U.height!==jt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(U)}}let Pt=U.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Et=!0);let Ft=tt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(Ft[W])?j=Ft[W][nt]:j=Ft[W],Q=!0):U.samples>0&&rt.useMultisampledRTT(U)===!1?j=tt.get(U).__webglMultisampledFramebuffer:Array.isArray(Ft)?j=Ft[nt]:j=Ft,z.copy(U.viewport),et.copy(U.scissor),G=U.scissorTest}else z.copy(ut).multiplyScalar($).floor(),et.copy(pt).multiplyScalar($).floor(),G=gt;if(nt!==0&&(j=F),I.bindFramebuffer(q.FRAMEBUFFER,j)&&I.drawBuffers(U,j),I.viewport(z),I.scissor(et),I.setScissorTest(G),Q){let Tt=tt.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+W,Tt.__webglTexture,nt)}else if(Et){let Tt=W;for(let Pt=0;Pt<U.textures.length;Pt++){let Ft=tt.get(U.textures[Pt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Pt,Ft.__webglTexture,nt,Tt)}}else if(U!==null&&nt!==0){let Tt=tt.get(U.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Tt.__webglTexture,nt)}B=-1};function Rh(U){let W=tt.get(U);return(W.__readFormat!==U.format||W.__readType!==U.type)&&(W.__readFormat=U.format,W.__readType=U.type,W.__formatReadable=V.textureFormatReadable(U.format),W.__typeReadable=V.textureTypeReadable(U.type)),W}this.readRenderTargetPixels=function(U,W,nt,j,Q,Et,Ct,Tt=0){if(!(U&&U.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=tt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt){I.bindFramebuffer(q.FRAMEBUFFER,Pt);try{let Ft=U.textures[Tt],jt=Ft.format,ie=Ft.type;U.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let It=Rh(Ft);if(It.__formatReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=U.width-j&&nt>=0&&nt<=U.height-Q&&q.readPixels(W,nt,j,Q,yt.convert(jt),yt.convert(ie),Et)}finally{let Ft=O!==null?tt.get(O).__webglFramebuffer:null;I.bindFramebuffer(q.FRAMEBUFFER,Ft)}}},this.readRenderTargetPixelsAsync=async function(U,W,nt,j,Q,Et,Ct,Tt=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=tt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Ct!==void 0&&(Pt=Pt[Ct]),Pt)if(W>=0&&W<=U.width-j&&nt>=0&&nt<=U.height-Q){I.bindFramebuffer(q.FRAMEBUFFER,Pt);let Ft=U.textures[Tt],jt=Ft.format,ie=Ft.type;U.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Tt);let It=Rh(Ft);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let me=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,me),q.bufferData(q.PIXEL_PACK_BUFFER,Et.byteLength,q.STREAM_READ),q.readPixels(W,nt,j,Q,yt.convert(jt),yt.convert(ie),0),q.bindBuffer(q.PIXEL_PACK_BUFFER,null);let Oe=O!==null?tt.get(O).__webglFramebuffer:null;I.bindFramebuffer(q.FRAMEBUFFER,Oe);let Me=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Wf(q,Me,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,me),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,Et),q.bindBuffer(q.PIXEL_PACK_BUFFER,null),q.deleteBuffer(me),q.deleteSync(Me),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,W=null,nt=0){let j=Math.pow(2,-nt),Q=Math.floor(U.image.width*j),Et=Math.floor(U.image.height*j),Ct=W!==null?W.x:0,Tt=W!==null?W.y:0;rt.setTexture2D(U,0),q.copyTexSubImage2D(q.TEXTURE_2D,nt,0,0,Ct,Tt,Q,Et),I.unbindTexture()},this.copyTextureToTexture=function(U,W,nt=null,j=null,Q=0,Et=0){let Ct,Tt,Pt,Ft,jt,ie,It,me,Oe,Me=U.isCompressedTexture?U.mipmaps[Et]:U.image;if(nt!==null)Ct=nt.max.x-nt.min.x,Tt=nt.max.y-nt.min.y,Pt=nt.isBox3?nt.max.z-nt.min.z:1,Ft=nt.min.x,jt=nt.min.y,ie=nt.isBox3?nt.min.z:0;else{let Fe=Math.pow(2,-Q);Ct=Math.floor(Me.width*Fe),Tt=Math.floor(Me.height*Fe),U.isDataArrayTexture?Pt=Me.depth:U.isData3DTexture?Pt=Math.floor(Me.depth*Fe):Pt=1,Ft=0,jt=0,ie=0}j!==null?(It=j.x,me=j.y,Oe=j.z):(It=0,me=0,Oe=0);let ve=yt.convert(W.format),tn=yt.convert(W.type),Rt;W.isData3DTexture?(rt.setTexture3D(W,0),Rt=q.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(rt.setTexture2DArray(W,0),Rt=q.TEXTURE_2D_ARRAY):(rt.setTexture2D(W,0),Rt=q.TEXTURE_2D),I.activeTexture(q.TEXTURE0),I.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(q.UNPACK_ALIGNMENT,W.unpackAlignment);let un=I.getParameter(q.UNPACK_ROW_LENGTH),ce=I.getParameter(q.UNPACK_IMAGE_HEIGHT),_n=I.getParameter(q.UNPACK_SKIP_PIXELS),zn=I.getParameter(q.UNPACK_SKIP_ROWS),gi=I.getParameter(q.UNPACK_SKIP_IMAGES);I.pixelStorei(q.UNPACK_ROW_LENGTH,Me.width),I.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Me.height),I.pixelStorei(q.UNPACK_SKIP_PIXELS,Ft),I.pixelStorei(q.UNPACK_SKIP_ROWS,jt),I.pixelStorei(q.UNPACK_SKIP_IMAGES,ie);let Mr=U.isDataArrayTexture||U.isData3DTexture,be=W.isDataArrayTexture||W.isData3DTexture;if(U.isDepthTexture){let Fe=tt.get(U),xi=tt.get(W),ye=tt.get(Fe.__renderTarget),bi=tt.get(xi.__renderTarget);I.bindFramebuffer(q.READ_FRAMEBUFFER,ye.__webglFramebuffer),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,bi.__webglFramebuffer);for(let Sr=0;Sr<Pt;Sr++)Mr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(U).__webglTexture,Q,ie+Sr),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,tt.get(W).__webglTexture,Et,Oe+Sr)),q.blitFramebuffer(Ft,jt,Ct,Tt,It,me,Ct,Tt,q.DEPTH_BUFFER_BIT,q.NEAREST);I.bindFramebuffer(q.READ_FRAMEBUFFER,null),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(Q!==0||U.isRenderTargetTexture||tt.has(U)){let Fe=tt.get(U),xi=tt.get(W);I.bindFramebuffer(q.READ_FRAMEBUFFER,E),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,P);for(let ye=0;ye<Pt;ye++)Mr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Fe.__webglTexture,Q,ie+ye):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Fe.__webglTexture,Q),be?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,xi.__webglTexture,Et,Oe+ye):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,xi.__webglTexture,Et),Q!==0?q.blitFramebuffer(Ft,jt,Ct,Tt,It,me,Ct,Tt,q.COLOR_BUFFER_BIT,q.NEAREST):be?q.copyTexSubImage3D(Rt,Et,It,me,Oe+ye,Ft,jt,Ct,Tt):q.copyTexSubImage2D(Rt,Et,It,me,Ft,jt,Ct,Tt);I.bindFramebuffer(q.READ_FRAMEBUFFER,null),I.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else be?U.isDataTexture||U.isData3DTexture?q.texSubImage3D(Rt,Et,It,me,Oe,Ct,Tt,Pt,ve,tn,Me.data):W.isCompressedArrayTexture?q.compressedTexSubImage3D(Rt,Et,It,me,Oe,Ct,Tt,Pt,ve,Me.data):q.texSubImage3D(Rt,Et,It,me,Oe,Ct,Tt,Pt,ve,tn,Me):U.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,Et,It,me,Ct,Tt,ve,tn,Me.data):U.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,Et,It,me,Me.width,Me.height,ve,Me.data):q.texSubImage2D(q.TEXTURE_2D,Et,It,me,Ct,Tt,ve,tn,Me);I.pixelStorei(q.UNPACK_ROW_LENGTH,un),I.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ce),I.pixelStorei(q.UNPACK_SKIP_PIXELS,_n),I.pixelStorei(q.UNPACK_SKIP_ROWS,zn),I.pixelStorei(q.UNPACK_SKIP_IMAGES,gi),Et===0&&W.generateMipmaps&&q.generateMipmap(Rt),I.unbindTexture()},this.initRenderTarget=function(U){tt.get(U).__webglFramebuffer===void 0&&rt.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?rt.setTextureCube(U,0):U.isData3DTexture?rt.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?rt.setTexture2DArray(U,0):rt.setTexture2D(U,0),I.unbindTexture()},this.resetState=function(){D=0,L=0,O=null,I.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};function Rd(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function Cd(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}function Pd(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var j_=[],Fu=new Map,Q_=0;function Qs(i){j_=i,Fu=new Map(i.flatMap(t=>t.items.map(e=>[ty(t.id,e.id),e]))),Q_++}function ty(i,t){return`pack:${i}:${t}`}function Id(i){return i.startsWith("pack:")}function Al(i){return Id(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Du(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}var ey={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function Ld(i){var t;return(t=we(i))==null?void 0:t.parts.find(e=>e.screen)}function we(i){if(!Id(i))return;let t=Fu.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=ey[e];return r?Fu.get(`pack:${r}:${n.join(":")}`):void 0}function je(i,t){let e=we(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return Rl;if(Fd.has(t.type))return Math.max(0,i.height-Dd(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return Nd(i,t.x,t.z);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:Oi(t)}}var ns={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function Kn(i){return i==="hedge"||i==="fence"||i==="pergola"}function iy(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,h)=>r==="x"?c:r==="-x"?-c:r==="z"?h:-h,o=1/0,a=-1/0;for(let[c,h]of i.points){let u=s(c,h);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function ry(i,t,e,n){return cr(i,t)+ns[t.type]-to(i,t,e,n)}var Nu=-.2,Cl={set:!1,level:Nu};function Ud(i){let t=(i==null?void 0:i.settings.terrain)??null;Cl={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??Nu}}function Pl(i,t){return Cl.level}function Od(i){return i.elevation>.3?0:Cl.set?Cl.level-i.elevation:Nu}function cr(i,t){return Od(i)+(t.offset??0)}function to(i,t,e,n){return t.type==="pool"?0:iy(t,e,n)}function Bd(i,t,e){let n=(i.outdoor??[]).filter(s=>!Kn(s.type)&&s.type!=="pool"&&Jt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?ry(i,r,t,e):Od(i)}function Il(i,t){return cr(i,t)+(t.above?zd(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function sy(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?zd(i):1.5}function Uu(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!Kn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>Jt(n,e.points)))}function kd(i,t){return!t.above&&!Uu(i,t)?Ll(i,t)-.05:Il(i,t)-sy(t)}function Ll(i,t){return Il(i,t)-.15}function zd(i){return i.height&&i.height>.3?i.height:1.2}var oy={type:"none",pitch:35,overhang:.4},YT={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...oy}};var Vd=.3;var Gd=new Set(["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Rl=1.75;var Fd=new Set(["lamp_downlight","lamp_spot"]);function Dd(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:.02}var Hd=new Set(["stairs","stairs_u"]);function Wd(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),h=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:h,rise:e/n}}function Xd(i){var t;return Gd.has(i)||!!((t=we(i))!=null&&t.light)}var ay=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var Fl=1.05;function Oi(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return Fl;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}function Nd(i,t,e){var r;let n=0;for(let s of i.furniture)!(ay.has(s.type)||(r=we(s.type))!=null&&r.surface)||!Jt([t,e],Bi(s))||(n=Math.max(n,s.h));return n}var ny=new Set([...Gd,"radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var ly=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],cy=["standard","bars","glass_wall"];function ur(i,t){return i.type==="door"?i.style&&ly.includes(i.style)?i.style:t?"front":"interior":i.style&&cy.includes(i.style)?i.style:"standard"}function Yd(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let h=s-.5;if(l+c>h){let f=Math.max(0,h)/(l+c);l*=f,c*=f}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function qd(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Un(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Jn(i){return Math.abs(Un(i))}function hr(i){let t=Un(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function $d(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Zd(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Bi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function Jt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}var qe=(i,t)=>[i[0]-t[0],i[1]-t[1]],ki=(i,t)=>[i[0]+t[0],i[1]+t[1]],hi=(i,t)=>[i[0]*t,i[1]*t],no=(i,t)=>i[0]*t[0]+i[1]*t[1],is=(i,t)=>i[0]*t[1]-i[1]*t[0],eo=i=>Math.hypot(i[0],i[1]),jn=i=>{let t=eo(i)||1;return[i[0]/t,i[1]/t]},Kd=i=>[-i[1],i[0]],Jd=i=>[i[1],-i[0]];function fi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(b=>Math.hypot(b.b[0]-b.a[0],b.b[1]-b.a[1])>.05),o=[],a=b=>{for(let S=0;S<o.length;S++)if(Math.abs(o[S][0]-b[0])<=n&&Math.abs(o[S][1]-b[1])<=n)return S;return o.push([b[0],b[1]]),o.length-1},l=[];for(let b of i){let S=b.points;if(S.length<3||Math.abs(Un(S))<1e-6)continue;let A=Un(S)>0,C=S.map(a);for(let T=0;T<S.length;T++){let F=C[T],E=C[(T+1)%S.length];F!==E&&l.push(A?{u:F,v:E,room:b.id,edge:T,forward:!0}:{u:E,v:F,room:b.id,edge:T,forward:!1})}}let c=s.map(b=>[a(b.a),a(b.b)]),h=new Set;for(let b of i){let S=b.points;S.length<3||(b.wall_splits??[]).forEach((A,C)=>{if(!A||C>=S.length)return;let T=S[C],F=qe(S[(C+1)%S.length],T),E=eo(F);for(let P of A)P>n&&P<E-n&&h.add(a(ki(T,hi(F,P/E))))})}let u=[];for(let b of l){let S=o[b.u],A=o[b.v],C=qe(A,S),T=eo(C),F=hi(C,1/T),E=[];for(let D=0;D<o.length;D++){if(D===b.u||D===b.v)continue;let L=qe(o[D],S),O=no(L,F);O<=n||O>=T-n||Math.abs(is(F,L))<=n&&E.push({t:O,id:D})}E.sort((D,L)=>D.t-L.t);let P=[{t:0,id:b.u},...E,{t:T,id:b.v}];for(let D=0;D+1<P.length;D++){let L=P[D],O=P[D+1],B=b.forward?L.t:T-O.t,k=b.forward?O.t:T-L.t;u.push({u:L.id,v:O.id,room:b.room,edge:b.edge,t0:B,t1:k})}}let f=new Map;for(let b of u){let S=b.u<b.v?`${b.u}-${b.v}`:`${b.v}-${b.u}`,A=f.get(S);A||f.set(S,A=[]),A.push(b)}let d=b=>({room_id:b.room,edge:b.edge,t0:b.t0,t1:b.t1}),g=new Map;for(let b of u){let S=`${b.room}:${b.edge}`;g.set(S,[...g.get(S)??[],b.t0].sort((A,C)=>A-C))}let x=b=>{var C,T;let S=(T=(C=i.find(F=>F.id===b.room))==null?void 0:C.wall_heights)==null?void 0:T[b.edge];if(!Array.isArray(S))return S;let A=g.get(`${b.room}:${b.edge}`)??[];return S[A.indexOf(b.t0)]??null},m=b=>{let S=b.map(x).filter(C=>typeof C=="number"&&C>0);if(S.length)return Math.min(...S);let A=b.map(C=>{var T;return(T=i.find(F=>F.id===C.room))==null?void 0:T.ceiling_height});return A.every(C=>typeof C=="number"&&C>0)?Math.max(...A):void 0},p=b=>{let S=b.map(A=>{var C,T;return(T=(C=i.find(F=>F.id===A.room))==null?void 0:C.wall_thickness)==null?void 0:T[A.edge]}).filter(A=>typeof A=="number"&&A>0);return S.length?Math.max(...S):void 0},v=b=>b.some(S=>x(S)===0),y=[],_=[];for(let b of f.values()){let S=b[0],A=b.find(C=>C!==S&&C.u===S.v&&C.v===S.u&&C.room!==S.room);for(let C of b)C!==S&&C!==A&&C.room!==S.room&&r.push(`overlap:${S.room}:${C.room}`);if(v(A?[S,A]:[S])){A&&y.push([S.room,A.room]);continue}if(A){let C=p([S,A])??t.interior;_.push({a:S.u,b:S.v,left:C/2,right:C/2,exterior:!1,roomLeft:S.room,roomRight:A.room,sources:[d(S),d(A)],height:m([S,A])})}else _.push({a:S.u,b:S.v,left:0,right:p([S])??t.exterior,exterior:!0,roomLeft:S.room,roomRight:null,sources:[d(S)],height:m([S])})}let M=b=>jn(qe(o[b.b],o[b.a]));for(let b of _){if(b.exterior||b.free)continue;let S=new Set;for(let C of[b.a,b.b])for(let T of _)!T.exterior||T.free||T.a!==C&&T.b!==C||Math.abs(is(M(b),M(T)))>1e-6||(T.roomLeft===b.roomLeft?S.add("left"):T.roomLeft===b.roomRight&&S.add("right"));if(S.size!==1)continue;let A=b.left+b.right;S.has("left")?(b.left=0,b.right=A):(b.left=A,b.right=0)}s.forEach((b,S)=>{var D;let[A,C]=c[S];if(A===C)return;let T=[(b.a[0]+b.b[0])/2,(b.a[1]+b.b[1])/2],F=((D=i.find(L=>L.points.length>=3&&Jt(T,L.points)))==null?void 0:D.id)??null,E=(b.thickness??t.interior)/2,P=typeof b.height=="number"&&b.height>0?b.height:void 0;_.push({free:b.id,a:A,b:C,left:E,right:E,exterior:!1,roomLeft:F,roomRight:F,sources:[],height:P})}),_=hy(_,o,h);let w=dy(_,o);return{walls:_.map((b,S)=>{let A=o[b.a],C=o[b.b],T=w.get(`${S}:a`),F=w.get(`${S}:b`),E=py([T.right,F.left,C,F.right,T.left,A],1e-6);return{id:uy(A,C),a:[A[0],A[1]],b:[C[0],C[1]],left:b.left,right:b.right,exterior:b.exterior,roomLeft:b.roomLeft,roomRight:b.roomRight,sources:b.sources,footprint:E,...b.free?{free:b.free}:{},...b.height!==void 0?{height:b.height}:{}}}),warnings:[...new Set(r)],open:y}}function uy(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function jd(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function hy(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=jd(l)),c.a!==o&&(c=jd(c)),l.a===c.b)continue;let h=jn(qe(t[l.b],t[l.a])),u=jn(qe(t[c.b],t[c.a]));if(Math.abs(is(h,u))>1e-6||no(h,u)<=0||l.free||c.free||l.height!==c.height||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let f={...l,b:c.b,sources:fy(l.sources,c.sources)},d=n.filter((g,x)=>x!==a[0]&&x!==a[1]);d.push(f),n.length=0,n.push(...d),r=!0;break}}return n}function fy(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function dy(i,t){let e=new Map;i.forEach((r,s)=>{let o=jn(qe(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:hi(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let h=e.get(l);h||e.set(l,h=[]),h.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,h)=>c.angle-h.angle);let a=c=>({left:ki(o,hi(Kd(c.d),c.left)),right:ki(o,hi(Jd(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let h=s[c],u=s[(c+1)%s.length],f=ki(o,hi(Kd(h.d),h.left)),d=ki(o,hi(Jd(u.d),u.right)),g=is(h.d,u.d);if(Math.abs(g)<1e-4)continue;let x=is(qe(d,f),u.d)/g,m=ki(f,hi(h.d,x));eo(qe(m,o))>l||(n.get(h.key).left=m,n.get(u.key).right=m)}}return n}function py(i,t){let e=i.filter((r,s)=>eo(qe(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=qe(o,s),c=qe(a,o);if(Math.abs(is(jn(l),jn(c)))<1e-7&&no(l,c)>0){e=e.filter((h,u)=>u!==r),n=!0;break}}}return e}function Ou(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=jn(qe(r,n));return ki(n,hi(s,e))}function io(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=jn(qe(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,ki(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function ro(i,t,e){if(!t.wall)return my(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=Ou(e.room,0,t.offset);return{wall:n,s:no(qe(r,n.a),jn(qe(n.b,n.a)))}}function my(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=Ou(t,e,n);return{wall:r,s:no(qe(o,r.a),jn(qe(r.b,r.a)))}}return null}var oo=Math.PI/180;function Qn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function wn(i){let t=Qn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*oo),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*oo);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=rp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}var gy=.14;function tp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function ep(i,t,e){let n=null,r=Math.max(0,i.settings.roof.overhang??0);for(let s of i.settings.roof.sections??[]){if(s.open)continue;let o=Math.min(s.x0,s.x1),a=Math.max(s.x0,s.x1),l=Math.min(s.z0,s.z1),c=Math.max(s.z0,s.z1);if(t<o-1e-6||t>a+1e-6||e<l-1e-6||e>c+1e-6||s.points&&s.points.length>=3&&!Jt([t,e],s.points))continue;let[h,u]=zi(s,t,e),f=s.shape==="flat"||s.shape==="parapet",d=Math.max(0,s.overhang??r),x=((f?null:ao(ss(s,{u0:d,u1:d,a:d,b:d}),h,u))??wn(s).y(u))-gy;n=n===null?x:Math.max(n,x)}return n}function Dl(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Jn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=Qd([a[0]-o[0],a[1]-o[1]]),h=Qd([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],f=[h[1]*n,-h[0]*n],d=u[0]+f[0],g=u[1]+f[1],x=Math.hypot(d,g);if(x<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let m=(d*u[0]+g*u[1])/x,p=Math.min(4,1/Math.max(.25,m));r.push([a[0]+d/x*t*p,a[1]+g/x*t*p])}return r}function Qd(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function np(i,t){if(i.points&&i.points.length>=3)return Dl(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function ip(i,t,e,n){let r=fi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let f of[u.a,u.b])o.set(s(f),[...o.get(s(f))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let f=[u.a,u.b],d=u.b;for(;;){let g=(o.get(s(d))??[]).find(x=>!l.has(x));if(!g||(l.add(g),d=s(g.a)===s(d)?g.b:g.a,s(d)===s(f[0])))break;f.push(d)}f.length>=3&&s(d)===s(f[0])&&(!c||Math.abs(Jn(f))>Math.abs(Jn(c)))&&(c=f)}if(!c)return null;let h=[];for(let u=0;u<c.length;u++){let f=c[(u+c.length-1)%c.length],d=c[u],g=c[(u+1)%c.length],x=(d[0]-f[0])*(g[1]-d[1])-(d[1]-f[1])*(g[0]-d[0]);Math.abs(x)>1e-6&&h.push(d)}return h.length>=3?Dl(h,e):null}var so=Math.tan(30*oo);function rp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+so*(i-o+s))/(2*so))),h=a+(c-s)*so;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:h,y:f=>f<=s?t+f*n:f<=c?a+(f-s)*so:f<=i-o?l+(i-o-f)*so:e+(i-f)*r}}function ss(i,t){let e=Qn(i),n=wn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(v,y)=>[v,y,n.y(y)],h=c(a,-s),u=c(l,-s),f=c(l,r+o),d=c(a,r+o),g=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*oo),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*oo);if(i.shape==="pent"){let v=[h,u,f,d];return{faces:[v],rim:v,ridges:[[f,d]],gable:[[0,n.y(0)],[r,n.y(r)]]}}if(i.shape==="hip"||i.shape==="pyramid"){let v=i.shape==="pyramid"?(e.u1-e.u0)/2:Math.min((e.u1-e.u0)/2,Math.min(n.vr,r-n.vr)||r/2),y=[e.u0+v,n.vr,n.rh],_=[e.u1-v,n.vr,n.rh],M=i.shape==="pyramid"?[[h,u,y],[u,f,y],[f,d,y],[d,h,y]]:[[h,u,_,y],[y,_,f,d],[d,h,y],[u,f,_]],w=i.shape==="pyramid"?[[h,y],[d,y],[u,y],[f,y]]:[[y,_],[h,y],[d,y],[u,_],[f,_]];return{faces:M,rim:[h,u,f,d],ridges:w,gable:null}}if(i.shape==="halfhip"){let v=Math.min(n.y(0),n.y(r)),y=v+(n.rh-v)*.55,_=g>1e-6?Math.min(n.vr,(y-i.eave_a)/g):n.vr,M=x>1e-6?Math.max(n.vr,r-(y-i.eave_b)/x):n.vr,w=Math.min((e.u1-e.u0)/2-.1,(n.rh-y)/Math.max(.2,g)),R=[e.u0+w,n.vr,n.rh],b=[e.u1-w,n.vr,n.rh],S=[a,_,y],A=[a,M,y],C=[l,_,y],T=[l,M,y];return{faces:[[h,u,C,b,R,S],[R,b,T,f,d,A],[A,S,R],[C,T,b]],rim:[h,u,C,T,f,d,A,S],ridges:[[R,b],[S,R],[A,R],[C,b],[T,b]],gable:[[0,n.y(0)],[_,y],[M,y],[r,n.y(r)]]}}if(i.shape==="mansard"){let v=rp(r,i.eave_a,i.eave_b,g,x),y=[a,v.vla,v.yla],_=[l,v.vla,v.yla],M=[a,r-v.vlb,v.ylb],w=[l,r-v.vlb,v.ylb],R=[a,v.vr,v.rh],b=[l,v.vr,v.rh];return{faces:[[h,u,_,y],[y,_,b,R],[R,b,w,M],[M,w,f,d]],rim:[h,u,_,b,w,f,d,M,R,y],ridges:[[R,b],[y,_],[M,w]],gable:[[0,n.y(0)],[v.vla,v.yla],[v.vr,v.rh],[r-v.vlb,v.ylb],[r,n.y(r)]]}}let m=[a,n.vr,n.rh],p=[l,n.vr,n.rh];return{faces:[[h,u,p,m],[m,p,f,d]],rim:[h,u,p,f,d,m],ridges:[[m,p]],gable:[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]]}}function ao(i,t,e){let n=null;for(let r of i.faces){if(!Jt([t,e],r.map(v=>[v[0],v[1]])))continue;let[s,o]=r,a=r.slice(2).find(v=>Math.abs((o[0]-s[0])*(v[1]-s[1])-(o[1]-s[1])*(v[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],h=o[1]-s[1],u=a[0]-s[0],f=a[2]-s[2],d=a[1]-s[1],g=c*d-h*f,x=h*u-l*d,m=l*f-c*u;if(Math.abs(x)<1e-9)continue;let p=s[2]-(g*(t-s[0])+m*(e-s[1]))/x;n=n===null?p:Math.min(n,p)}return n}function zi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function xy(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Nl(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=xy(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function Bu(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=Qn(t),n=wn(t).rh,r=ss(i,{u0:0,u1:0,a:0,b:0}),s=wn(i),o=g=>{let[x,m]=e.at(g,e.w/2),[p,v]=zi(i,x,m);return ao(r,p,v)??s.y(v)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,h=a?1:-1,u=Math.abs(c-l),f=c;for(let g=.5;g<u;g+=.05)if(o(l+h*g)>=n-.02){f=l+h*g;break}if(Math.abs(f-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=f:d.x0=f:c===e.u1?d.z1=f:d.z0=f,d}function sp(i,t){let e=Bu(i,t),n=Qn(e),r=wn(e),s=ss(i,{u0:0,u1:0,a:0,b:0}),o=wn(i),a=f=>{let[d,g]=n.at(f,n.w/2),[x,m]=zi(i,d,g);return ao(s,x,m)??o.y(m)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,h=[],u=Math.max(1,Math.ceil(c/.15));for(let f=0;f<u;f++){let d=c*f/u,g=c*(f+1)/u,x=l?n.u0+d:n.u1-d,m=l?n.u0+g:n.u1-g,p=a(m),v=1/0,y=-1/0;for(let b=0;b<=40;b++){let S=n.w*b/40;r.y(S)>p+.02&&(v=Math.min(v,S),y=Math.max(y,S))}if(!(y-v>.05))continue;let _=n.at(x,v),M=n.at(m,y),w=zi(i,_[0],_[1]),R=zi(i,M[0],M[1]);h.push({u0:Math.min(w[0],R[0]),u1:Math.max(w[0],R[0]),v0:Math.min(w[1],R[1]),v1:Math.max(w[1],R[1])})}return h}function rs(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),h=r(l);if(c&&s.push(a),c!==h){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function op(i,t){let e=rs(i,0,t.u0,!0),n=rs(i,0,t.u1,!1),r=rs(rs(i,0,t.u0,!1),0,t.u1,!0),s=rs(r,1,t.v0,!0),o=rs(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Jn(a.map(l=>[l[0],l[1]])))>1e-6)}function Ul(i,t,e){let n=Qn(t),r=i.floors.flatMap(c=>c.rooms.filter(h=>h.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(h=>r.some(u=>Jt(h,u.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function ap(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function by(i){return wn(i).rh}function lp(i,t,e){var l;let n=i.settings.roof.sections??[],r=n.filter(c=>e.includes(c.id)).map(c=>Nl(n,c)??c);if(!r.length)return t.id;let s=Math.max(...r.map(c=>by(c))),o=c=>c.rooms.some(h=>h.points.length>=3&&r.some(u=>{let[f,d]=h.points.reduce((g,x)=>[g[0]+x[0]/h.points.length,g[1]+x[1]/h.points.length],[0,0]);return f>=Math.min(u.x0,u.x1)&&f<=Math.max(u.x0,u.x1)&&d>=Math.min(u.z0,u.z1)&&d<=Math.max(u.z0,u.z1)}));return((l=i.floors.filter(c=>c.elevation>=t.elevation&&c.elevation<s-.3&&o(c)).sort((c,h)=>h.elevation-c.elevation)[0])==null?void 0:l.id)??t.id}function os(i,t){let e=Un(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let h=l[c],u=l[(c+1)%l.length],f=a(h),d=a(u);if(f>=0&&n.push(h),f>=0!=d>=0){let g=f/(f-d);n.push([h[0]+(u[0]-h[0])*g,h[1]+(u[1]-h[1])*g])}}}return n}function cp(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var On=1e-4;function ku(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function up(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>On&&a<1-On&&l>-On&&l<1+On?a:null}function zu(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=On||o>=1-On?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<On?o:null}function vy(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(up(n,r,o,a)!==null||zu(o,n,r)!==null||zu(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<On)return!0}}return Jt(i[0],t)||Jt(t[0],i)}function _y(i){let t=i.map(s=>ku(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],h=[0,1];t.forEach((u,f)=>{if(f!==o)for(let d=0;d<u.length;d++){let g=u[d],x=u[(d+1)%u.length],m=up(l,c,g,x)??zu(g,l,c);m!==null&&h.push(m)}}),h.sort((u,f)=>u-f);for(let u=1;u<h.length;u++){if(h[u]-h[u-1]<On)continue;let f=[l[0]+(c[0]-l[0])*h[u-1],l[1]+(c[1]-l[1])*h[u-1]],d=[l[0]+(c[0]-l[0])*h[u],l[1]+(c[1]-l[1])*h[u]],g=Math.hypot(d[0]-f[0],d[1]-f[1]),x=[(f[0]+d[0])/2+(d[1]-f[1])/g*.001,(f[1]+d[1])/2-(d[0]-f[0])/g*.001];t.some((m,p)=>p!==o&&Jt(x,m))||e.some(([m,p])=>Math.hypot(m[0]-f[0],m[1]-f[1])<On&&Math.hypot(p[0]-d[0],p[1]-d[1])<On)||e.push([f,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([h],u)=>!r.has(u)&&Math.hypot(h[0]-a[0],h[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&ku(o)>1e-6&&n.push(o)}return n}function Vu(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&vy(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:_y(s))}function yy(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function hp(i,t,e=.03){return i.every(n=>Jt(n,t)||t.some((r,s)=>yy(n,r,t[(s+1)%t.length])<=e))}function Gu(i,t){let e=ku(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function Ol(i){let t=(i.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}function fp(i,t,e){let n=Ol(i).length,r=i.rotation*Math.PI/180,s=((t-i.x)*Math.cos(r)+(e-i.z)*Math.sin(r))*(i.mirror?-1:1),o=Math.max(.05,i.w);return Math.max(0,Math.min(n-1,Math.floor((s+o/2)/o*n)))}var My=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var Sy=["wall","pole","pillar","parcel","bank"];function pp(i){return My.includes(i.variant??"")?i.variant:"bin240"}function mp(i){return Sy.includes(i.variant??"")?i.variant:"wall"}var Ne=["#3a3f47","#3a3f47"],fr=["#23262b","#23262b"],Bn=["#5a3b25","#5a3b25"],Ee=["#1f4fa8","#1f4fa8"],Vi=["#e3b616","#e3b616"],ae=["#2f7d3b","#2f7d3b"],dp={default:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae,recycling:Vi,other:Ne},DE:{rest:fr,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae,recycling:Vi},AT:{rest:Ne,bio:Bn,paper:[Ne[0],"#c0262d"],plastic:Vi,glass:ae,garden:ae},CH:{rest:["#d8d8d8","#d8d8d8"],bio:ae,paper:Ee,plastic:Ne,glass:ae,garden:ae},NL:{rest:Ne,bio:ae,paper:Ee,plastic:["#3a3f47","#e57a1f"],glass:ae,garden:ae},BE:{rest:Ne,bio:ae,paper:Ee,plastic:Ee,glass:ae,garden:ae},GB:{rest:fr,bio:["#3a3f47","#5a3b25"],paper:Ee,plastic:Ee,glass:fr,garden:Bn,recycling:Ee},US:{rest:fr,bio:ae,paper:Ee,plastic:Ee,glass:Ee,garden:ae,recycling:Ee},CA:{rest:fr,bio:ae,paper:Ee,plastic:Ee,glass:Ee,garden:ae,recycling:Ee},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ne,bio:Bn,paper:[Ne[0],"#e3b616"],plastic:[Ne[0],"#e3b616"],recycling:[Ne[0],"#e3b616"],glass:ae,garden:ae},IT:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae},ES:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae},PT:{rest:Ne,bio:Bn,paper:Ee,plastic:Vi,glass:ae,garden:ae},DK:{rest:fr,bio:ae,paper:Ee,plastic:Ne,glass:ae,garden:ae},SE:{rest:fr,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae},NO:{rest:Ne,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae},FI:{rest:Ne,bio:Bn,paper:Ee,plastic:Ne,glass:ae,garden:ae}},gp="DE";function xp(){return gp}function wy(i,t){var e;return((e=dp[t])==null?void 0:e[i])??dp.default[i]??Ne}function bp(i,t=gp){let e=wy(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var dr=kt(3662079,.95),Hu=kt(3662079,1),Gi=kt(5995775,.34),vp=kt(5995775,.22),Bl=[-.55,.83],Yt=-1,kl=16,pr=32,_p=48,Wu=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Yt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Zt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),this.uv&&t.setAttribute("uv",new Gt(this.uv,2)),this.tile&&t.setAttribute("tile",new Gt(this.tile,2)),t.computeBoundingSphere(),t}},Pe=class{p=[];c=[];f=[];seg(t,e,n=dr,r=Yt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Yt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Yt),this.seg(c,a,n,s)}geometry(){let t=new Zt;return t.setAttribute("position",new Gt(this.p,3)),t.setAttribute("color",new Gt(this.c,3)),t.setAttribute("fold",new Gt(this.f,1)),t}};function yp(i,t,e,n){let s=i.uv?2:0,o=(u,f)=>{let d=u*3+f;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,f,d)=>({p:u.p.map((g,x)=>g+(f.p[x]-g)*d),c:u.c.map((g,x)=>g+(f.c[x]-g)*d),uv:u.uv&&f.uv?u.uv.map((g,x)=>g+(f.uv[x]-g)*d):null,tile:u.tile}),l=(u,f,d)=>{for(let g=0;g<3;g++){let x=u*3+g;for(let m=0;m<3;m++)i.p[x*3+m]=f[g].p[m],i.c[x*3+m]=f[g].c[m];if(i.uv&&f[g].uv)for(let m=0;m<s;m++)i.uv[x*2+m]=f[g].uv[m];if(i.tile&&f[g].tile)for(let m=0;m<2;m++)i.tile[x*2+m]=f[g].tile[m];i.f[x]=d}},c=(u,f)=>{let d=i.p.length/9;for(let g of u)i.p.push(...g.p),i.c.push(...g.c),i.f.push(f),i.uv&&i.uv.push(...g.uv??[.5,.5]),i.tile&&i.tile.push(...g.tile??[0,1]);return d},h=i.p.length/9;for(let u=t;u<h;u++){let f=[o(u,0),o(u,1),o(u,2)],d=f.map(b=>b.p[1]>e+1e-6),g=f.map(b=>b.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!g.some(Boolean)){for(let b=0;b<3;b++)i.f[u*3+b]=n;continue}let x=i.f[u*3],m=(b,S)=>a(b,S,(e-b.p[1])/(S.p[1]-b.p[1])),p=d.filter(Boolean).length,v=p===1?d.indexOf(!0):d.indexOf(!1),y=f[v],_=f[(v+1)%3],M=f[(v+2)%3],w=m(y,_),R=m(M,y);p===1?(l(u,[y,w,R],n),c([w,_,M],x),c([w,M,R],x)):(l(u,[y,w,R],x),c([w,_,M],n),c([w,M,R],n))}}function Mp(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let h=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*h,e,l[2]+(c[2]-l[2])*h];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let f=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...f,...f),i.f.push(n,n)}}var ue=Math.PI/180;function kt(i,t){let e=new K(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function Ty(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function ti(i,t=[]){let e=i.map(([n,r])=>new te(n,r));return Fs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new te(r,s))))}function Sp(i,t,e,n,r,s,o){let a=new K(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let g=t[d],x=t[(d+1)%4],m=e[d],p=e[(d+1)%4],v=x[0]-g[0],y=x[1]-g[1],_=Math.hypot(v,y);if(_<1e-6)continue;let w=.8+.28*((y/_*Bl[0]-v/_*Bl[1]+1)/2),R=(m[0]+p[0]-g[0]-x[0])/2*(-y/_)+(m[1]+p[1]-g[1]-x[1])/2*(v/_),b=Math.max(0,Math.min(1,R/Math.max(1e-6,Math.hypot(R,r-n)))),S=kt(s,l(n)*w).lerp(a,b),A=kt(s,l(r)*w).lerp(a,b);i.tri([g[0],n,g[1]],[m[0],r,m[1]],[p[0],r,p[1]],S,A,A),i.tri([g[0],n,g[1]],[p[0],r,p[1]],[x[0],n,x[1]],S,A,S)}let[c,h,u,f]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a),i.tri([c[0],r,c[1]],[f[0],r,f[1]],[u[0],r,u[1]],a))}function wp(i,t,e,n,r,s,o,a,l,c){let h=new K(l),u=[];for(let m=0;m<c;m++){let p=m/c*Math.PI*2;u.push({y:s+Math.cos(p)*o,s:r+Math.sin(p)*o})}let f=(m,p)=>{let v=t(m,u[p%c].s);return[v[0],u[p%c].y,v[1]]},d=t(e,r),g=t(n,r),x=(m,p,v,y,_)=>{let M=(p[1]-m[1])*(v[2]-m[2])-(p[2]-m[2])*(v[1]-m[1]),w=(p[2]-m[2])*(v[0]-m[0])-(p[0]-m[0])*(v[2]-m[2]),R=(p[0]-m[0])*(v[1]-m[1])-(p[1]-m[1])*(v[0]-m[0]);M*y[0]+w*y[1]+R*y[2]<0?i.tri(m,v,p,_):i.tri(m,p,v,_)};for(let m=0;m<c;m++){let p=(m+.5)/c*Math.PI*2,v=kt(a,.62+.4*Math.max(0,Math.cos(p))),y=t((e+n)/2,r+Math.sin(p)*o),_=t((e+n)/2,r),M=[y[0]-_[0],Math.cos(p)*o,y[1]-_[1]];x(f(e,m),f(n,m+1),f(n,m),M,v),x(f(e,m),f(e,m+1),f(n,m+1),M,v)}for(let[m,p,v]of[[e,g,d],[n,d,g]]){let y=t(m,r),_=[y[0],s,y[1]],M=[v[0]-p[0],0,v[1]-p[1]];for(let w=0;w<c;w++)x(_,f(m,w),f(m,w+1),M,h)}}function Ie(i,t,e,n,r,s,o={}){var g;let a=typeof n=="number"?()=>n:x=>Math.max(e+.002,n(x[0],x[1])),l=o.aoFrom??e,c=o.fold??Yt,h=x=>.5+.5*Math.min(1,Math.max(0,(x-l)/1.6)),u=(o.holes??[]).map(x=>Ty(x)>0?[...x].reverse():x),f=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:ti(t,u);if(o.topFace!==!1){let x=new K(s);for(let[m,p,v]of d){let y=f[m],_=f[p],M=f[v];i.tri([y[0],a(y),y[1]],[M[0],a(M),M[1]],[_[0],a(_),_[1]],x,x,x,void 0,o.topFold??c)}}if(o.bottom){let x=kt(r,.55);for(let[m,p,v]of d){let y=f[m],_=f[p],M=f[v];i.tri([y[0],e,y[1]],[_[0],e,_[1]],[M[0],e,M[1]],x,x,x,void 0,c)}}for(let x of[t,...u])for(let m=0;m<x.length;m++){let p=x[m],v=x[(m+1)%x.length],y=v[0]-p[0],_=v[1]-p[1],M=Math.hypot(y,_);if(M<1e-6||(g=o.skipSide)!=null&&g.call(o,p,v))continue;let R=.8+.28*((_/M*Bl[0]-y/M*Bl[1]+1)/2),b=a(p),S=a(v),A=kt(r,h(e)*R),C=kt(r,h(b)*R),T=kt(r,h(S)*R);i.tri([p[0],e,p[1]],[p[0],b,p[1]],[v[0],S,v[1]],A,C,T,void 0,c),i.tri([p[0],e,p[1]],[v[0],S,v[1]],[v[0],e,v[1]],A,T,A,void 0,c)}}var N={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},dt=kt(5995775,.3),Ut=kt(5995775,.17),qt=kt(3662079,.45),mr=class i{buf;lines;tf;mirrored;constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Pp(n)}rotated(t,e,n){let r=n*ue,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let h=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ie(this.buf,Xu(h),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(h,n,r,c)}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Xu(l)&&(l.reverse(),c.reverse()),Sp(this.buf,l,c,n,r,s,o),a)for(let h=0;h<4;h++)this.line(c[h],c[(h+1)%4],r,r,a),this.line(l[h],c[h],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,h=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,h);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,h),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,h=12,u=null){let f=Math.min(a,s-r)/2;if(f<1e-4||o<1e-4)return;let d=(r+s)/2,g=t==="x"?e:n,x=t==="x"?n:e,m=(p,v)=>t==="x"?this.tf(p,v):this.tf(v,p);if(wp(this.buf,m,g-o/2,g+o/2,x,d,f,l,c,h),u)for(let p of[g-o/2,g+o/2])for(let v=0;v<h;v++){let y=v/h*Math.PI*2,_=(v+1)/h*Math.PI*2;this.line(m(p,x+Math.sin(y)*f),m(p,x+Math.sin(_)*f),d+Math.cos(y)*f,d+Math.cos(_)*f,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let h=[];for(let u=0;u<l;u++){let f=u/l*Math.PI*2;h.push(this.tf(t+Math.cos(f)*n,e+Math.sin(f)*n))}if(Ie(this.buf,Xu(h),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(h[u],h[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=dt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Yt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Pp(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Xu(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function gr(i,t,e,n,r,s,o=N.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let h of[-1,1])for(let u of[-1,1]){let f=h*l,d=u*c;a?i.loft([f-r*.3,f+r*.3,d-r*.3,d+r*.3],[f-r/2,f+r/2,d-r/2,d+r/2],0,n,o):i.box(f-r/2,f+r/2,0,n,d-r/2,d+r/2,o)}}function lo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let h=1;h<o;h++){let u=t+c*h;i.seg(u,n,s,u,r,s,Ut)}for(let h=0;h<o;h++){let u=t+c*(h+.5),f=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),f,s+.012,u+Math.min(.1,c/4),f,s+.012,qt);else{let d=o>1?u+(h%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,f-.08,s+.012,d,f+.08,s+.012,qt)}}}function Tp(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),h=n*.5,u=Math.min(.24,e*.28);gr(i,t,e,.07,.05,.05,N.wood,!0),i.pad(s,o,.07,h-.08,a+.02,l,N.fabric,N.fabricTop,.04,dt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],h-.08,n,N.fabric,N.fabricTop,dt),i.pad(s,s+c,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt),i.pad(o-c,o,h-.08,n*.72,a+.02,l-.02,N.fabric,N.fabricTop,.04,dt);let d=(o-c-(s+c))/r;for(let g=0;g<r;g++){let x=s+c+d*g+.02,m=x+d-.04;i.pad(x,m,h-.08,h+.05,a+u+.02,l-.06,N.cushion,N.cushion,.04),i.loft([x+.01,m-.01,a+u*.55,a+u+.14],[x+.03,m-.03,a+u*.4,a+u*.4+.06],h+.03,n*.93,N.cushion)}}function Ep(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),h=Math.min(.24,c*.28),u=Math.min(.2,c*.24),f=n*.5,d=n*.72,g=r?[-1,1]:[-1],x=(b,S)=>i.loft([b-.015,b+.015,S-.015,S+.015],[b-.025,b+.025,S-.025,S+.025],0,.07,N.wood);x(s+.06,a+.06),x(o-.06,a+.06),r||x(o-.06,a+c-.06);for(let b of g)x(b*(t/2-.06),l-.06),x(b*(t/2-c+.06),l-.06);i.pad(s,o,.07,f-.08,a+.02,a+c,N.fabric,N.fabricTop,.04,dt);for(let b of g){let[S,A]=b<0?[s+.02,s+c]:[o-c,o-.02];i.pad(S,A,.07,f-.08,a+c-.02,l,N.fabric,N.fabricTop,.04,dt)}i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,N.fabric,N.fabricTop,dt);for(let b of g)b<0?i.loft([s,s+h,a+h,l],[s,s+h*.5,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,dt):i.loft([o-h,o,a+h,l],[o-h*.5,o,a+h,l-.01],f-.08,n,N.fabric,N.fabricTop,dt);for(let b of g){let[S,A]=b<0?[s+h,s+c]:[o-c,o-h];i.pad(S,A,f-.08,d,l-u,l,N.fabric,N.fabricTop,.04,dt)}r||i.pad(o-u,o,f-.08,d,a+.02,a+c-.02,N.fabric,N.fabricTop,.04,dt);let m=s+h,p=r?o-h:o-u,v=Math.max(1,Math.round((p-m)/.62)),y=(p-m)/v;for(let b=0;b<v;b++){let S=m+y*b+.02,A=S+y-.04;i.pad(S,A,f-.08,f+.05,a+h+.02,a+c-.04,N.cushion,N.cushion,.04),i.loft([S+.01,A-.01,a+h*.55,a+h+.14],[S+.03,A-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,N.cushion)}let _=a+c,M=l-u;if(M-_<.2)return;let w=Math.max(1,Math.round((M-_)/.62)),R=(M-_)/w;for(let b of g)for(let S=0;S<w;S++){let A=_+R*S+.02,C=A+R-.04;b<0?(i.pad(s+h+.02,s+c-.04,f-.08,f+.05,A,C,N.cushion,N.cushion,.04),i.loft([s+h*.55,s+h+.14,A+.01,C-.01],[s+h*.4,s+h*.4+.06,A+.03,C-.03],f+.03,n*.93,N.cushion)):(i.pad(o-c+.04,o-h-.02,f-.08,f+.05,A,C,N.cushion,N.cushion,.04),i.loft([o-h-.14,o-h*.55,A+.01,C-.01],[o-h*.4-.06,o-h*.4,A+.03,C-.03],f+.03,n*.93,N.cushion))}}function Ey(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);gr(i,t,e,.08,.06,.03,N.wood,!0),i.box(o,a,.08,l,r+.06,s,N.wood,N.woodTop,dt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,N.white,N.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,N.wood,N.woodTop,dt),i.box(o,a,n-.05,n,r,r+.09,N.wood,N.woodTop,Ut);let c=l+.2,h=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,h,s-.01,N.cushion,N.fabricTop,.025,Ut),i.lyingCyl("x",0,h+.05,c-.02,c+.09,t-.02,.1,N.cushion,N.fabricTop,8);let u=t>1.2?2:1,f=(t-.2)/u;for(let d=0;d<u;d++){let g=o+.1+f*d,x=r+.12,m=Math.min(.42,e*.2),p=.1;i.loft([g+.03+p,g+f-.03-p,x+p*.5,x+m-p*.5],[g+.03,g+f-.03,x,x+m],c,c+.06,N.whiteTop),i.loft([g+.03,g+f-.03,x,x+m],[g+.03+p,g+f-.03-p,x+p*.5,x+m-p*.5],c+.06,c+.12,N.whiteTop,N.whiteTop,Ut)}}function Ay(i,t,e,n){let r=Math.min(.46,n*.52);gr(i,t,e,r-.04,.035,.02,N.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,N.wood,N.woodTop,dt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,N.cushion,N.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,N.wood,N.woodTop,dt)}function Ry(i,t,e,n){gr(i,t,e,n-.04,.06,.05,N.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,qt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,N.body)}function Cy(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,N.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,N.body,N.bodyTop,dt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Ut);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,qt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,N.dark,N.dark,qt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,N.metal)}function Hi(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),lo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function Py(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,N.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,N.wood,N.woodTop,Ut),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let h=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+h,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?N.fabric:N.cushion,N.fabricTop),l+=h+.006,c++}}}}function Iy(i,t,e,n){let r=Math.max(1,Math.round(t/.6));Hi(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Ly(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.white,N.whiteTop,dt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ut);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,qt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,qt)}var Yu=(i,t)=>kt(parseInt(i.slice(1),16),t).getHex();function Fy(i,t,e,n,r,s){let o=Yu(s[0],.55),a=Yu(s[1],.8),l=Yu(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,o,o,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,a,a,Ut),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,l,l,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,o,o,dt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,a,l,Ut),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,a),i.box(t*.36,t*.42,n*.95,n,-.01,.01,a),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,a);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,o,o,16,dt),i.cyl(0,0,u*1.08,n*.9,n,a,l,16,Ut),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,N.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,N.metal,N.metal,Ut);return}if(r==="bin1100"){for(let f of[-1,1])for(let d of[-1,1])i.cyl(f*(t/2-.12),d*(e/2-.12),.05,0,.14,N.dark,N.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,o,o,dt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,a,l,Ut),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,a,l,Ut);return}let c=Math.min(.2,n*.19),h=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),h+c/2+.01,0,c,.05,c,N.dark,N.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,o,o,dt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,a,l,Ut),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,a,l),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,qt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ut))}function Dy(i,t,e,n,r){let s=N.metal,o=kt(N.metal,1.25).getHex(),a=kt(N.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,N.wood,N.woodTop,Ut),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,dt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,dt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,N.dark,N.dark,Ut),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Ut),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,dt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,N.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,dt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Ut),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,N.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,dt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let h=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(h,h+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Ut),i.box(h+.04,h+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,N.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,dt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,dt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,N.dark)}function Ny(i,t,e,n){let r=e/2-Ip;i.box(-t/2,t/2,.02,n,-e/2,r,N.body,N.bodyTop,dt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,N.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Ut),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Ut))}var Ip=.06;function Lp(i,t,e,n){let r=t.rotation*ue,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(E,P,D)=>[t.x+E*s-D*o,P,t.z+E*o+D*s],c=(E,P,D,L,O)=>{i.tri(E,P,D,O),i.tri(E,D,L,O),i.tri(E,D,P,O),i.tri(E,L,D,O)},h=(E,P,D,L)=>{let O=l(E[0],E[1],E[2]),B=l(P[0],P[1],P[2]),k=B[0]-O[0],z=B[1]-O[1],et=B[2]-O[2],G=Math.hypot(k,z,et)||1,J=[k/G,z/G,et/G],it=Math.abs(J[1])>.9?[1,0,0]:[0,1,0],ht=[J[1]*it[2]-J[2]*it[1],J[2]*it[0]-J[0]*it[2],J[0]*it[1]-J[1]*it[0]],Y=Math.hypot(ht[0],ht[1],ht[2])||1,$=[ht[0]/Y*D,ht[1]/Y*D,ht[2]/Y*D],at=[J[1]*$[2]-J[2]*$[1],J[2]*$[0]-J[0]*$[2],J[0]*$[1]-J[1]*$[0]],ct=[[1,1],[-1,1],[-1,-1],[1,-1]],ut=(pt,gt)=>[pt[0]+$[0]*ct[gt][0]+at[0]*ct[gt][1],pt[1]+$[1]*ct[gt][0]+at[1]*ct[gt][1],pt[2]+$[2]*ct[gt][0]+at[2]*ct[gt][1]];for(let pt=0;pt<4;pt++){let gt=(pt+1)%4;i.tri(ut(O,pt),ut(B,pt),ut(B,gt),L),i.tri(ut(O,pt),ut(B,gt),ut(O,gt),L)}},u=(E,P,D,L,O,B,k,z)=>{c(l(E,L,O),l(P,L,O),l(P,L,B),l(E,L,B),z),c(l(E,D,B),l(P,D,B),l(P,L,B),l(E,L,B),k),c(l(E,D,O),l(P,D,O),l(P,D,B),l(E,D,B),k),c(l(E,D,O),l(E,D,B),l(E,L,B),l(E,L,O),k),c(l(P,D,O),l(P,D,B),l(P,L,B),l(P,L,O),k)},f=new K(N.body),d=new K(N.bodyTop),g=new K(N.accent),x=new K(1929098),m=new K(995141),p=(E,P,D,L,O)=>{let B=(k,z,et)=>[k[0]+(z[0]-k[0])*et,k[1]+(z[1]-k[1])*et,k[2]+(z[2]-k[2])*et];for(let k=0;k<O;k++){let z=B(E,P,k/O),et=B(E,P,(k+1)/O),G=B(D,L,(k+1)/O),J=B(D,L,k/O);c(l(z[0],z[1],z[2]),l(et[0],et[1],et[2]),l(G[0],G[1],G[2]),l(J[0],J[1],J[2]),k%2?x:m)}},v=t.w/2,y=-t.d/2,_=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,R=(E,P)=>{t.awning_valance!==!1&&p([-v+.04,E,P+.01],[v-.04,E,P+.01],[-v+.04,E-.2,P+.01],[v-.04,E-.2,P+.01],M)},b=t.variant??"arm";if(b==="side"){let E=e,P=.05,D=0,L=-v+.08+a*(t.w-.16);u(-v,-v+.1,0,E+.05,D-.05,D+.05,f,d),u(v-.06,v,0,E+.05,D-.03,D+.03,f,d),a>.01&&p([-v+.1,E,D],[-v+.1,P,D],[L,E,D],[L,P,D],Math.max(4,Math.round((E-P)/.3))),h([L,P,D],[L,E,D],.02,g);return}if(b==="vertical"){let E=y,P=Math.min(t.d/2,y+_);u(-v,v,e,e+_,E,P,f,d);let D=(E+P)/2;for(let O of[-v+.02,v-.02])h([O,.02,D],[O,e,D],.02,g);let L=e-a*Math.max(0,e-.04);a>.01&&p([-v+.04,e,D],[v-.04,e,D],[-v+.04,L,D],[v-.04,L,D],M),h([-v+.03,L,D],[v-.03,L,D],.025,g);return}if(b==="pergola"){let E=t.d/2-.05,P=e+_,D=P-(E-y)*Math.tan(w);u(-v,v,e,P,y,y+_,f,d);for(let B of[-v+.05,v-.05])h([B,P,y+_],[B,D,E],.035,g),h([B,0,E],[B,D,E],.045,f);h([-v+.05,D,E],[v-.05,D,E],.035,g);let L=y+_+a*(E-y-_),O=P-(L-y)*Math.tan(w)+.04;a>.01&&p([-v+.08,P+.04,y+_],[v-.08,P+.04,y+_],[-v+.08,O,L],[v-.08,O,L],M),h([-v+.08,O,L],[v-.08,O,L],.025,g);return}let S=y,A=y+_;u(-v,v,e,e+_,S,A,f,d);let C=[A-.02,e+_*.35];if(b==="drop"){let E=Math.max(.3,t.d-_),P=[A,C[1]-E],D=a*(Math.PI/2+w),L=[P[0]+Math.sin(D)*E,P[1]+Math.cos(D)*E];for(let O of[-v+.08,v-.08])h([O,P[1],P[0]],[O,L[1],L[0]],.018,g);a>.01&&p([-v+.04,C[1],C[0]],[v-.04,C[1],C[0]],[-v+.04,L[1],L[0]],[v-.04,L[1],L[0]],M),h([-v+.02,L[1],L[0]],[v-.02,L[1],L[0]],.03,g),a>.05&&R(L[1],L[0]);return}let T=Math.max(0,t.d-_)*a,F=[C[0]+T,C[1]-T*Math.tan(w)];if(T>.01){p([-v+.04,C[1],C[0]],[v-.04,C[1],C[0]],[-v+.04,F[1],F[0]],[v-.04,F[1],F[0]],M);let E=Math.max(.3,(t.d-_)/2+.05);for(let P of[-1,1]){let D=P*(v-.12),L=[D,e+.02,A-.04],O=[D,F[1]-.02,F[0]],B=Math.hypot(O[2]-L[2],O[1]-L[1]),k=Math.sqrt(Math.max(0,E*E-(B/2)**2)),z=[D-P*Math.min(k,v-.15),(L[1]+O[1])/2,(L[2]+O[2])/2];h(L,z,.018,g),h(z,O,.018,g)}}h([-v+.02,F[1],F[0]],[v-.02,F[1],F[0]],.03,g),T>.05&&R(F[1],F[0])}function Fp(i,t,e,n,r){let s=i.p.length;Uy(i,t,e,n,r),t.mirror&&Np(i,s)}function Uy(i,t,e,n,r){let s=t.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(_,M)=>[t.x+l*_*o-M*a,t.z+l*_*a+M*o],h=e+.05,u=e+t.h-.02,f=new K(.75,.1,.14),d=new K(N.dark),g=new K(N.accent),x=t.w/2-.006,m=(_,M,w)=>{let R=w/p,b=new K(2043212).lerp(f,R),S=new K(N.body).lerp(f,R*.8),A=Math.cos(w),C=Math.sin(w),T=(P,D)=>c(_+M*(P*A-D*C),t.d/2+P*C+D*A),F=(P,D,L,O)=>{let[B,k,z,et]=P;i.tri([B[0],D,B[1]],[k[0],D,k[1]],[z[0],L,z[1]],O),i.tri([B[0],D,B[1]],[z[0],L,z[1]],[et[0],L,et[1]],O)},E=(P,D,L,O,B,k,z,et=z)=>{let G=[T(P,k),T(D,k),T(D,B),T(P,B)];F([G[0],G[1],G[1],G[0]],L,O,et),F([G[3],G[2],G[2],G[3]],L,O,z),F([G[0],G[3],G[3],G[0]],L,O,z),F([G[1],G[2],G[2],G[1]],L,O,z),F([G[0],G[1],G[2],G[3]],O,O,z),F([G[3],G[2],G[1],G[0]],L,L,z)};return E(0,x,h,u,-Ip,0,S,b),E(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,g),E},p=1.83;m(-t.w/2,1,n*p)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),m(t.w/2,-1,r*p)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function Oy(i,t,e,n){Hi(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.dark,N.dark,dt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,N.dark,1451583,12,qt)}}function By(i,t,e,n){Hi(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,N.whiteTop,N.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,N.metal,N.metal,qt),i.cyl(0,-e/2+.05,.02,n,n+.28,N.metal,N.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,N.metal)}function ky(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,N.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,N.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,N.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,N.glass,N.glass,qt),i.cyl(-t/2+.04,0,.02,n,n+.12,N.metal,N.metal,8)}function zy(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,N.whiteTop,N.whiteTop,dt),i.cyl(0,0,.04,.05,.052,N.metal,N.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,qt),i.seg(r,n,s,o,n,a,qt),i.seg(o,.05,a,o,n,a,qt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,N.metal,N.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,N.metal,N.metal,12,qt)}function Vy(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,N.white,N.whiteTop,dt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,N.white,N.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,N.white,N.whiteTop,12,dt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,N.whiteTop)}function Gy(i,t,e,n){Hi(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,N.glass,N.glass,qt),i.cyl(0,-e/2+.06,.018,n,n+.2,N.metal,N.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,N.glass,N.glass,qt)}function Hy(i,t,e,n){Hi(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,N.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,N.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,N.dark,N.dark,qt)}function Wy(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,N.pot,N.pot,10,dt),i.cyl(0,0,r*.08,s,n*.55,N.wood,N.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),h=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,h,h+(n-s)*.16,N.plant,N.plantTop,8,a===o-1?Ut:null)}}function Xy(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,N.fabric,N.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,dt)}function Yy(i,t,e,n){let r=Math.max(3,Math.round(n/.18)),s=n/r,o=e/r;for(let h=0;h<r;h++){let u=e/2-o*h,f=u-o,d=s*(h+1);i.box(-t/2,t/2,0,d,f,u,N.wood,N.woodTop),i.seg(-t/2,d,u,t/2,d,u,dt)}i.seg(-t/2,0,e/2,-t/2,s,e/2,dt);for(let h of[-t/2,t/2])i.seg(h,s,e/2,h,n,-e/2+o,Ut);let a=.9,l=t/2-.03,c=Math.max(1,r-4);i.seg(l,s+a,e/2-o/2,l,s*c+a,e/2-o*(c-.5),qt);for(let h=0;h<c;h+=3){let u=e/2-o*(h+.5),f=s*(h+1);i.seg(l,f,u,l,f+a,u,Ut)}}function qy(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:h}=Wd(t,e,n),u=-t/2,f=-t/2+a,d=t/2-a,g=t/2,x=-e/2+l;for(let R=0;R<s;R++){let b=e/2-c*R,S=h*(R+1);i.box(u,f,0,S,b-c,b,N.wood,N.woodTop),i.seg(u,S,b,f,S,b,dt)}i.seg(u,0,e/2,u,h,e/2,dt);let m=h*r,p=.2;i.box(u,f,0,m,-e/2,x,N.wood,N.woodTop),i.box(f,g,Math.max(0,m-p),m,-e/2,x,N.wood,N.woodTop),i.seg(u,m,x,f,m,x,dt);for(let R=0;R<o;R++){let b=x+c*R,S=h*(r+1+R);i.box(d,g,Math.max(0,S-h-p),S,b,b+c,N.wood,N.woodTop),i.seg(d,S,b,g,S,b,dt)}i.seg(u,h,e/2,u,m,x,Ut),i.seg(g,m,x,g,n,x+c*(o-1),Ut);let v=.9,y=f-.03,_=d+.03,M=x-.03,w=Math.max(1,o-4);i.seg(y,h+v,e/2-c/2,y,m+v,M,qt),i.seg(y,m+v,M,_,m+v,M,qt),i.seg(_,m+v,M,_,h*(r+w)+v,x+c*(w-.5),qt);for(let R=0;R<s;R+=3){let b=e/2-c*(R+.5);i.seg(y,h*(R+1),b,y,h*(R+1)+v,b,Ut)}for(let R of[y,_])i.seg(R,m,M,R,m+v,M,Ut);for(let R=2;R<w;R+=3){let b=x+c*(R+.5);i.seg(_,h*(r+1+R),b,_,h*(r+1+R)+v,b,Ut)}}function $y(i,t,e,n){gr(i,t,e,.12,.03,.04,N.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),lo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function Zy(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,N.wood,N.woodTop,dt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,N.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Ut)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,qt)}}function Ky(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,N.wood,N.woodTop,dt),lo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,N.body,N.bodyTop,dt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.wood,N.woodTop,dt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,N.metal,N.metal)}}function Ap(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,N.wood,N.woodTop,dt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,N.wood,N.woodTop,dt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,N.cushion,N.cushion,Ut),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,N.wood,N.woodTop,dt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,N.wood,N.woodTop,dt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,N.cushion,N.cushion,Ut))}function Jy(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,N.metal,N.metal,12),i.cyl(0,0,.025,.02,n-.05,N.metal,N.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,N.metal,N.metal,12,Ut),i.cyl(0,0,r,n-.05,n,N.cushion,N.fabricTop,14,dt)}function jy(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,N.metal),i.box(-.03,.03,.04,.08,-r,r,N.metal),i.cyl(0,0,.06,.02,.1,N.dark,N.dark,8),i.cyl(0,0,.025,.1,.44,N.metal,N.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,N.fabric,N.cushion,dt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,N.fabric,N.fabricTop,dt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,N.metal)}function Qy(i,t,e,n){gr(i,t,e,.08,.04,.05,N.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,N.fabric,N.cushion,dt)}function t1(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,N.body,N.bodyTop,dt),lo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function e1(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,N.dark,N.dark,qt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,qt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Ut);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,qt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,qt)}function n1(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,N.body,N.bodyTop,dt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,N.dark),lo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function i1(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,N.body,N.bodyTop,dt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,N.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,qt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,N.whiteTop,N.whiteTop,dt)}function Rp(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,N.white,N.whiteTop,dt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Ut),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,qt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let h=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(h)*a,o+Math.sin(h)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,qt),r||i.seg(Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Ut)}}function r1(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),N.wood,N.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,N.white,N.whiteTop,Ut),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,N.whiteTop,N.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,N.wood,N.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,dt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Ut)}function s1(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,N.metal,N.metal,12),i.cyl(0,0,.05,.03,n-.04,N.wood,N.wood,8),i.cyl(0,0,r,n-.04,n,N.wood,N.woodTop,20,dt)}function o1(i,t,e,n){gr(i,t,e,n-.03,.04,.03,N.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,N.wood,N.woodTop,dt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,N.body,N.bodyTop,Ut)}function a1(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,N.dark,N.dark,qt)}function l1(i,t,e,n){let r=$u;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,N.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,N.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,N.white,N.whiteTop,dt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ut)}}function c1(i,t,e,n){let r=Zu;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,N.white,N.white,dt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,N.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ut),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,qt)}function as(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,qt)}}function u1(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,qt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,N.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),as(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,qt);for(let a of[-1,1])as(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,N.white,N.whiteTop,dt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,N.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,qt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ut)}function h1(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,N.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,N.metal,N.metal,dt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Ut);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,N.dark,N.body,14,dt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,N.glass,N.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,qt)}}function f1(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,N.dark,N.dark,16),i.cyl(0,0,s,n*.08,n*.78,N.dark,N.body,18,dt),i.cyl(0,0,s*.75,n*.78,n*.84,N.dark,N.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,N.dark,N.metal,dt),as(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,N.dark,N.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,N.dark,N.metal,16,dt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,qt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,N.dark,N.body)}function d1(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,N.white,N.whiteTop,dt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,N.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;as(i,s,o,r,e/2+.004,24),as(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Ut),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Ut),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,N.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,qt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ut)}function p1(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,N.white,N.whiteTop,dt);for(let s of[-1,1])as(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,qt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,N.white,N.glass,Ut)}function m1(i,t,e,n){let r=Vd-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,N.metal,N.metal,dt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,N.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,N.accent,N.accent)}function g1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,N.dark,N.body,dt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,N.dark,N.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,qt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ut)}function x1(i,t,e,n,r){let s=Fl,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,N.white,N.whiteTop,dt);let l=t/r;for(let c=0;c<r;c++){let h=-t/2+c*l;i.box(h+.008,h+l-.008,s+.012,s+n-.012,a,a+.006,N.whiteTop,N.whiteTop,Ut)}}function Dp(i){let t=Math.max(.05,i.w),e=Math.max(.05,i.d),n=Math.max(.005,i.h),r=Ol(i).length,s=t/r;return Array.from({length:r},(o,a)=>({x:-t/2+(a+.5)*s,y:Fl+n*.2,z:-e/2+.017}))}function b1(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,N.dark,N.body,dt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,h=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(h)*s,o+Math.sin(h)*s,e/2+.003,qt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,N.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,N.dark,N.body)}function v1(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ut),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ut),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,N.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,N.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,qt)}function _1(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,N.white,N.whiteTop,dt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,qt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ut);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,N.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,N.dark,N.body,dt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,qt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,N.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,N.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,N.white,N.whiteTop,dt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,qt)}}var $u=.12,Zu=2.05;function Ku(i,t){let e=y1(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function y1(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=Ld(i.type);if(s){let l=t?je(t,i):0,c=(s.x-s.w/2)*e,h=(s.x+s.w/2)*e,u=Math.min(.02,(h-c)*.05);return{x0:c+u,x1:h-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?je(t,i)-Oi(i):0,a=M1(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function M1(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?je(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:$u+.02,y1:$u+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Zu+.015,y1:Zu+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function S1(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new K(1-r,1-r,1-r),a=new K(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],h=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],u=d=>[d[0],l,d[1]],f=i.p.length;i.tri(u(c[0]),u(c[1]),u(c[2]),o),i.tri(u(c[0]),u(c[2]),u(c[3]),o);for(let d=0;d<4;d++){let g=(d+1)%4;i.tri(u(c[d]),u(h[d]),u(h[g]),o,a,a),i.tri(u(c[d]),u(h[g]),u(c[g]),o,a,o)}Pp(t)&&Np(i,f)}function zl(i,t,e,n,r=0){w1(i,t,e,n,r)}function Np(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function w1(i,t,e,n,r){let s=we(n.type)?0:r-Oi(n);if(we(n.type)||Math.abs(s)<.001)return Cp(i,t,e,n,r);let o=i.p.length,a=t.p.length;Cp(i,t,r<.05?e:new ee,n,0);for(let l=o+1;l<i.p.length;l+=3)i.p[l]+=s;for(let l=a+1;l<t.p.length;l+=3)t.p[l]+=s}function Cp(i,t,e,n,r){let s=n.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=n.mirror?-1:1,c=(g,x)=>[n.x+l*g*o-x*a,n.z+l*g*a+x*o],h=new mr(i,t,c),u=Math.max(.05,n.w),f=Math.max(.05,n.d),d=Math.max(.005,n.h);switch(n.type){case"sofa":Tp(h,u,f,d,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":Tp(h,u,f,d,1);break;case"sofa_l":Ep(h,u,f,d,!1);break;case"sofa_u":Ep(h,u,f,d,!0);break;case"bed":Ey(h,u,f,d);break;case"chair":Ay(h,u,f,d);break;case"table":Ry(h,u,f,d);break;case"desk":Cy(h,u,f,d);break;case"nightstand":Hi(h,u,f,d,1,d*.72,!0),h.seg(-u/2,d*.5,f/2-.02,u/2,d*.5,f/2-.02,Ut);break;case"wardrobe":Hi(h,u,f,d,Math.max(2,Math.round(u/.5)),d*.5);break;case"shelf":Py(h,u,f,d);break;case"kitchen":Iy(h,u,f,d);break;case"fridge":Ly(h,u,f,d);break;case"fridge_smart":Ny(h,u,f,d);break;case"waste_bin":Fy(h,u,f,d,pp(n),bp(n,xp()));break;case"mailbox":{let g=i.p.length,x=t.p.length;Dy(h,u,f,d,mp(n));let m=Oi(n);for(let p=g+1;p<i.p.length;p+=3)i.p[p]+=m;for(let p=x+1;p<t.p.length;p+=3)t.p[p]+=m;if(m>0)return;break}case"awning":return;case"stove":Oy(h,u,f,d);break;case"sink":By(h,u,f,d);break;case"bathtub":ky(h,u,f,d);break;case"shower":zy(h,u,f,d);break;case"wc":Vy(h,u,f,d);break;case"washbasin":Gy(h,u,f,d);break;case"tv_board":Hy(h,u,f,d);break;case"plant":Wy(h,u,f,d);break;case"rug":Xy(h,u,f);return;case"stairs":Yy(h,u,f,d);break;case"stairs_u":qy(h,u,f,d);break;case"stairwell":return;case"sideboard":$y(h,u,f,d);break;case"dresser":Zy(h,u,f,d);break;case"tall_cabinet":Hi(h,u,f,d,1,d*.5);break;case"coat_rack":Ky(h,u,f,d);break;case"bench":Ap(h,u,f,d,!1);break;case"corner_bench":Ap(h,u,f,d,!0);break;case"bar_stool":Jy(h,u,f,d);break;case"office_chair":jy(h,u,f,d);break;case"stool":Qy(h,u,f,d);break;case"kitchen_wall":t1(h,u,f,d);return;case"kitchen_tall":e1(h,u,f,d);break;case"island":n1(h,u,f,d);break;case"worktop":h.box(-u/2,u/2,Math.max(0,d-.04),d,-f/2,f/2,N.whiteTop,N.whiteTop,dt);return;case"dishwasher":i1(h,u,f,d);break;case"washer":Rp(h,u,f,d,!1);break;case"dryer":Rp(h,u,f,d,!0);break;case"bunk_bed":r1(h,u,f,d);break;case"table_round":s1(h,u,f,d);break;case"coffee_table":o1(h,u,f,d);break;case"tv_wall":a1(h,u,f,d);return;case"parking":{let x=[[-u/2,-f/2],[u/2,-f/2],[u/2,f/2],[-u/2,f/2]];for(let m=0;m<4;m++)h.seg(x[m][0],.012,x[m][1],x[(m+1)%4][0],.012,x[(m+1)%4][1],Ut);h.seg(-u*.15,.012,f/2-.45,0,.012,f/2-.2,dt),h.seg(0,.012,f/2-.2,u*.15,.012,f/2-.45,dt);return}case"robot_vacuum":h.box(-u*.45,u*.45,0,d,-f/2,-f/2+f*.3,N.white,N.whiteTop,dt),h.box(-u*.2,u*.2,d*.5,d*.62,-f/2+f*.3,-f/2+f*.31,N.accent);return;case"radiator":l1(h,u,f,d);return;case"ac_unit":c1(h,u,f,d);return;case"inverter":u1(h,u,f,d,n.variant??null);return;case"grid_point":g1(h,u,f,d);break;case"wallbox":b1(h,u,f,d);return;case"wall_switch":x1(h,u,f,d,Ol(n).length);return;case"pool_pump":h1(h,u,f,d);break;case"pool_filter":f1(h,u,f,d,n.variant??null);break;case"pool_heat_pump":d1(h,u,f,d);break;case"pool_dosing":p1(h,u,f,d);break;case"pool_valve":m1(h,u,f,d);return;case"meter":v1(h,u,f,d);return;case"home_battery":if(_1(h,u,f,d,n.variant??null),n.variant==="wall")return;break;default:{let g=we(n.type);if(g){let x=Al(n.type);if(Vl(h,g,u,f,d,r,null,null,x?m=>Du(x,m):null),r>.05)return}else h.box(-u/2,u/2,0,d,-f/2,f/2,N.body,N.bodyTop,dt)}}S1(e,c,u,f,n.type==="plant"?.35:.5)}function qu(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=N;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Vl(i,t,e,n,r,s,o,a=null,l=null){let c=!!a;for(let h of t.parts){if(l!=null&&l(h)||a&&!a(h))continue;let u=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,f=u.glow&&o!==null,d=f?o:qu(u.color,!1)??N.body,g=f?o:qu(u.top,!1)??qu(u.color,!0)??kt(d,1.25).getHex(),x=s+u.y*r,m=s+Math.min(r,(u.y+u.h)*r),p=u.edges==="glow"?dr:u.edges==="faint"?Ut:u.edges?dt:null,v=u.rot?i.rotated(u.x*e,u.z*n,u.rot):i;if(u.shape==="cyl"&&(u.axis==="x"||u.axis==="z"))v.lyingCyl(u.axis,u.x*e,u.z*n,x,m,u.axis==="x"?u.w*e:u.d*n,u.axis==="x"?u.d*n:u.w*e,d,g,14,p);else if(u.shape==="cyl")v.cyl(u.x*e,u.z*n,Math.min(u.w*e,u.d*n)/2,x,m,d,g,14,p);else if(u.shape==="loft"){let y=u.tx??u.x,_=u.tz??u.z,M=u.tw??u.w,w=u.td??u.d;v.loft([(u.x-u.w/2)*e,(u.x+u.w/2)*e,(u.z-u.d/2)*n,(u.z+u.d/2)*n],[(y-M/2)*e,(y+M/2)*e,(_-w/2)*n,(_+w/2)*n],x,m,d,g,p)}else v.box((u.x-u.w/2)*e,(u.x+u.w/2)*e,x,m,(u.z-u.d/2)*n,(u.z+u.d/2)*n,d,g,p)}}function Up(i,t,e,n,r,s){let o=s*ue,a=Math.cos(o),l=Math.sin(o),c=(g,x)=>[e+g*a-x*l,r+g*l+x*a],h=new mr(i,new Pe,c),u=1713728,f=2373216,d=725279;if(t==="camera_ceiling"){h.cyl(0,0,.07,n-.03,n,u,f,12),h.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),h.cyl(0,0,.012,n-.075,n-.06,N.accent,N.accent,6);return}h.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,f),h.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,f),h.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,f),h.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,N.accent,10),h.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function co(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ue,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,h=(u,f)=>[e.x+c*u*a-f*l,e.z+c*u*l+f*a];Vl(new mr(i,new Pe,h),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Op(i,t,e,n,r,s){let o=T1(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ue,l=Math.cos(a),c=Math.sin(a),h=n.mirror?-1:1,u=(f,d)=>[n.x+h*f*l-d*c,n.z+h*f*c+d*l];Vl(new mr(i,new Pe,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function T1(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Du(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function Gl(i,t,e,n,r){let s=e.rotation*ue,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(h,u)=>[e.x+l*h*o-u*a,e.z+l*h*a+u*o];Vl(new mr(i,new Pe,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var E1={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function A1(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let h=a.points[(c+1)%a.points.length],u=h[0]-l[0],f=h[1]-l[1],d=Math.hypot(u,f)||1;if(Math.abs((r*f-s*u)/(o*d))>.05)return!1;let g=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*f)/(d*d)));return Math.hypot(l[0]+u*g-n[0],l[1]+f*g-n[1])<.4}))}function kp(i,t){return t.type==="pool"?Ll(i,t):cr(i,t)+(Kn(t.type)?.01:ns[t.type])}function uo(i){return Un(i)>=0?i:[...i].reverse()}function R1(i,t){let e=i[t];if(Kn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>Jt(o,e.points))&&n.push(uo(s.points))}return n}function Bp(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],h=e[1]-t[1],u=Math.hypot(c,h);if(u<1e-6)return;let f=-h/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ie(i,uo([[t[0]+f,t[1]+d],[e[0]+f,e[1]+d],[e[0]-f,e[1]-d],[t[0]-f,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let g=(_,M)=>[t[0]+f*M,_,t[1]+d*M],x=(_,M)=>[e[0]+f*M,_+l,e[1]+d*M],m=(_,M)=>{i.tri(_[0],_[1],_[2],M,M,M,void 0,Yt),i.tri(_[0],_[2],_[3],M,M,M,void 0,Yt),i.tri(_[0],_[2],_[1],M,M,M,void 0,Yt),i.tri(_[0],_[3],_[2],M,M,M,void 0,Yt)},p=new K(a),v=new K(kt(o,.9)),y=new K(kt(o,.6));m([g(s,1),x(s,1),x(s,-1),g(s,-1)],p),m([g(r,1),x(r,1),x(r,-1),g(r,-1)],y),m([g(r,1),x(r,1),x(s,1),g(s,1)],v),m([g(r,-1),x(r,-1),x(s,-1),g(s,-1)],v),m([g(r,1),g(r,-1),g(s,-1),g(s,1)],v),m([x(r,1),x(r,-1),x(s,-1),x(s,1)],v)}function zp(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=cr(e,s),l=(v,y)=>a-to(e,s,v,y),c=a-(s.type==="pool"?0:s.slope??0),h=Kn(s.type)&&s.height?s.height:ns[s.type],u={...E1[s.type],top:h},f=uo(s.points),d=kt(u.edge,u.edgeAlpha),g=s.open&&(s.type==="fence"||s.type==="pergola")?f.length-1:-1,x=v=>{if(s.outline!==!1)for(let y=0;y<f.length;y++){if(y===g)continue;let _=f[y],M=f[(y+1)%f.length];t.seg([_[0],v(_[0],_[1]),_[1]],[M[0],v(M[0],M[1]),M[1]],d,Yt)}},m=n??i,p=new K(n?1734832:u.color);switch(s.type){case"pool":{let v=new K(u.side),y=new K(kt(u.side,.55)),_=new K(932440),M=Ll(e,s),w=Il(e,s),R=kd(e,s);for(let[b,S,A]of ti(f)){let C=f[b],T=f[S],F=f[A];(n?m:i).tri([C[0],M,C[1]],[F[0],M,F[1]],[T[0],M,T[1]],p,p,p,void 0,Yt),i.tri([C[0],R,C[1]],[F[0],R,F[1]],[T[0],R,T[1]],_,_,_,void 0,Yt)}for(let b=0;b<f.length;b++){let S=f[b],A=f[(b+1)%f.length];i.tri([A[0],R,A[1]],[A[0],w,A[1]],[S[0],w,S[1]],y,v,v,void 0,Yt),i.tri([A[0],R,A[1]],[S[0],w,S[1]],[S[0],R,S[1]],y,v,y,void 0,Yt)}if(!s.above&&Uu(e,s)){let b=new K(660258),S=new K(396054),A=R-.2,C=Math.min(a,w);for(let T=0;T<f.length;T++){let F=f[T],E=f[(T+1)%f.length];i.tri([F[0],A,F[1]],[F[0],C,F[1]],[E[0],C,E[1]],S,b,b,void 0,Yt),i.tri([F[0],A,F[1]],[E[0],C,E[1]],[E[0],A,E[1]],S,b,S,void 0,Yt)}for(let[T,F,E]of ti(f)){let P=f[T],D=f[F],L=f[E];i.tri([P[0],A,P[1]],[D[0],A,D[1]],[L[0],A,L[1]],S,S,S,void 0,Yt)}if(s.outline!==!1)for(let T=0;T<f.length;T++){let F=f[T],E=f[(T+1)%f.length];t.seg([F[0],A,F[1]],[E[0],A,E[1]],kt(u.edge,u.edgeAlpha*.35),Yt),t.seg([F[0],A,F[1]],[F[0],C,F[1]],kt(u.edge,u.edgeAlpha*.25),Yt)}}if(w>a+.02){let b=new K(2044240),S=new K(1187123);for(let A=0;A<f.length;A++){let C=f[A],T=f[(A+1)%f.length];i.tri([C[0],a,C[1]],[C[0],w,C[1]],[T[0],w,T[1]],S,b,b,void 0,Yt),i.tri([C[0],a,C[1]],[T[0],w,T[1]],[T[0],a,T[1]],S,b,S,void 0,Yt)}x(()=>a+.005)}if(x(()=>w),x(()=>M+.005),s.outline!==!1)for(let b=0;b<f.length;b++){let S=f[b],A=f[(b+1)%f.length];t.seg([S[0],R+.005,S[1]],[A[0],R+.005,A[1]],kt(u.edge,u.edgeAlpha*.4),Yt)}break}case"fence":{for(let v=0;v<f.length;v++){if(v===g)continue;let y=f[v],_=f[(v+1)%f.length],M=Math.hypot(_[0]-y[0],_[1]-y[1]),w=Math.max(1,Math.round(M/2)),R=g>=0&&v===g-1?w:w-1;for(let b=0;b<=R;b++){let S=b/w,A=y[0]+(_[0]-y[0])*S,C=y[1]+(_[1]-y[1])*S,T=l(A,C);Ie(i,uo([[A-.04,C-.04],[A+.04,C-.04],[A+.04,C+.04],[A-.04,C+.04]]),T,T+u.top,u.side,u.color)}for(let b of[.35,.85])t.seg([y[0],l(y[0],y[1])+b*u.top,y[1]],[_[0],l(_[0],_[1])+b*u.top,_[1]],d,Yt)}break}case"pergola":{let v=u.top;for(let[y,_]of f){let M=l(y,_);Ie(i,uo([[y-.06,_-.06],[y+.06,_-.06],[y+.06,_+.06],[y-.06,_+.06]]),M,M+v,u.side,u.color)}for(let y=0;y<f.length;y++){if(y===g)continue;let _=f[y],M=f[(y+1)%f.length],w=l(_[0],_[1])+v;if(Bp(i,_,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(_[0],_[1])),s.bracing){let R=l(_[0],_[1]),b=l(M[0],M[1]);t.seg([_[0],R+.25,_[1]],[M[0],b+v-.25,M[1]],d,Yt),t.seg([M[0],b+.25,M[1]],[_[0],R+v-.25,_[1]],d,Yt)}}if($d(f)){let y=Zd(f),_=y.x1-y.x0,M=y.z1-y.z0,w=_>=M,R=w?_:M,b=Math.max(1,Math.round(R/.6));for(let S=1;S<b;S++){let A=(w?y.x0:y.z0)+R*S/b,C=w?[A,y.z0+.06]:[y.x0+.06,A],T=w?[A,y.z1-.06]:[y.x1-.06,A],F=l(C[0],C[1])+v;Bp(i,C,T,.06,F-.04,F+.08,u.side,u.color,l(T[0],T[1])-l(C[0],C[1]))}}x((y,_)=>l(y,_)+v+.004);break}case"balcony":{Ie(i,f,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),x(()=>a+u.top+.004);let y=s.height&&s.height>.3?s.height:1,_=kt(9417983,.42),M=kt(3662079,.55);for(let w=0;w<f.length;w++){let R=f[w],b=f[(w+1)%f.length];if(A1(e,R,b))continue;let S=Math.hypot(b[0]-R[0],b[1]-R[1]),A=a+u.top;t.seg([R[0],A+y,R[1]],[b[0],A+y,b[1]],M,Yt),t.seg([R[0],A+.1,R[1]],[b[0],A+.1,b[1]],_,Yt);let C=Math.max(1,Math.round(S/.12));for(let T=0;T<=C;T++){let F=T/C,E=R[0]+(b[0]-R[0])*F,P=R[1]+(b[1]-R[1])*F;t.seg([E,A,P],[E,A+y,P],T===0||T===C?M:_,Yt)}}break}default:{let v=(_,M)=>l(_,M)+u.top,y=R1(r,o);if(Ie(i,f,c,s.slope?v:a+u.top,u.side,u.color,{aoFrom:c,holes:y}),x((_,M)=>v(_,M)+.004),s.type==="hedge"&&x((_,M)=>l(_,M)+.004),s.outline!==!1)for(let _ of y)for(let M=0;M<_.length;M++){let w=_[M],R=_[(M+1)%_.length];t.seg([w[0],v(w[0],w[1])+.004,w[1]],[R[0],v(R[0],R[1])+.004,R[1]],d,Yt)}}}})}var Wl=Math.PI/180,C1=1.13,P1=1.72,Ju=.025,xr=.07,Vp=.25;function Gp(i,t){var n;let e=[];for(let r of i.floors){if(t&&r.id!==t)continue;let{walls:s}=fi(r.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},r.walls??[]);for(let o of s){if(!o.exterior&&!o.free)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);if(c<.5)continue;let h=l/c,u=-a/c,f=Math.min(r.height,o.height??r.height),d=((n=o.sources.find(m=>m.room_id===o.roomLeft))==null?void 0:n.edge)??null,g={floorId:r.id,room:o.roomLeft,edge:d,free:!!o.free},x=(m,p,v,y)=>e.push({key:m,section:null,side:"top",flat:!1,o:p,eu:v,es:[0,1,0],n:y,lu:c,ls:f,pitch:90,span:()=>[0,c],facing:[y[0],y[2]],wall:g});x(`wall:${r.id}:${o.id}`,[o.a[0]+h*o.right,r.elevation,o.a[1]+u*o.right],[a/c,0,l/c],[h,0,u]),o.free&&x(`wall:${r.id}:${o.id}:back`,[o.b[0]-h*o.left,r.elevation,o.b[1]-u*o.left],[-a/c,0,-l/c],[-h,0,-u])}}return e}var ju="ground";function Qu(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Hp(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Qu(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:Bd(s,o,a)):t.base??0;return{key:ju,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function I1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function vr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(v=>L1(v,Ul(i,v,v.overhang??t.overhang)));let e=I1(i);if(!e)return[];let n=e.rooms.flatMap(v=>v.points.map(y=>y[0])),r=e.rooms.flatMap(v=>v.points.map(y=>y[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=e.elevation+e.height;if(t.type==="flat")return[Wp("main",null,o,l,a,c,h+Vp)];let u=a-o>=c-l,f=t.ridge==="short"?!u:u,d=(f?c-l:a-o)/2,g=d*Math.tan(t.pitch*Wl),x=(v,y,_)=>f?[v,h+_,(l+c)/2+y]:[(o+a)/2+y,h+_,v],[m,p]=f?[o,a]:[l,c];return[-1,1].map(v=>Hl(`main:${v<0?"a":"b"}`,null,v<0?"a":"b",x(m,v*d,0),x(p,v*d,0),x(m,0,g),t.pitch,()=>[0,p-m]))}function L1(i,t){let e=Qn(i),n=wn(i),r=(x,m,p)=>{let[v,y]=e.at(x,m);return[v,p,y]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let x=e.at(a,-s),m=e.at(l,e.w+o);return[Wp(i.id,i.id,Math.min(x[0],m[0]),Math.min(x[1],m[1]),Math.max(x[0],m[0]),Math.max(x[1],m[1]),i.eave_a+Vp)]}if(i.shape==="pent")return[Hl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let h=i.shape==="hip"||i.shape==="pyramid",u=i.shape==="pyramid"?(e.u1-e.u0)/2:h?Math.min((e.u1-e.u0)/2,Math.min(n.vr,e.w-n.vr)||e.w/2):0,f=h?e.u0+u-a:0,d=h?l-(e.u1-u):0,g=[];if(n.vr>.3){let x=Math.hypot(n.vr+s,n.rh-n.y(-s));g.push(Hl(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,m=>[f*(m/x),c-d*(m/x)]))}if(e.w-n.vr>.3){let x=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));g.push(Hl(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,m=>[d*(m/x),c-f*(m/x)]))}if(h){let x=n.y(-s),m=n.y(e.w+o),p=[[`${i.id}:c`,"c",r(a,e.w+o,m),r(a,-s,x),r(e.u0+u,n.vr,n.rh)],[`${i.id}:d`,"d",r(l,-s,x),r(l,e.w+o,m),r(e.u1-u,n.vr,n.rh)]];for(let[v,y,_,M,w]of p){let R=F1(v,i.id,y,_,M,w);R&&g.push(R)}}return g}function F1(i,t,e,n,r,s){let o=ho(br(r,n));if(o<.3)return null;let a=Wi(br(r,n)),l=br(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],h=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=ho(h);if(u<.3)return null;let f=Wi(h),d=Wi(qp(a,f));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let g=Wi([-f[0],0,-f[2]]),x=Math.atan2(f[1],Math.hypot(f[0],f[2]))/Wl;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:f,n:d,lu:o,ls:u,pitch:x,span:p=>{let v=Math.min(1,Math.max(0,p/u));return[c*v,o-(o-c)*v]},facing:[g[0],g[2]]}}function Hl(i,t,e,n,r,s,o,a){let l=Wi(br(r,n)),c=Wi(br(s,n)),h=Wi(qp(l,c));h[1]<0&&(h=[-h[0],-h[1],-h[2]]);let u=Wi([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:h,lu:ho(br(r,n)),ls:ho(br(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Wp(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Xp(i){let t=i.module_w||C1,e=i.module_h||P1;return i.portrait===!1?[e,t]:[t,e]}function D1(i){var t;return(t=i.layout)!=null&&t.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Yp(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Wl:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Wl:0}function N1(i,t){let[,e]=Xp(t),n=Yp(i,t);return i.wall?e*Math.cos(n)+Ju:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Ju}function fo(i,t,e=!1){let[n,r]=Xp(t),s=[],o=Yp(i,t),a=r*Math.cos(o),l=N1(i,t),c=D1(t),h=Math.max(1,...c),u=new Set(t.skip??[]),f=!!i.wall&&n>i.lu+1e-6,d=(x,m,p)=>[i.o[0]+i.eu[0]*x+i.es[0]*m+i.n[0]*p,i.o[1]+i.eu[1]*x+i.es[1]*m+i.n[1]*p,i.o[2]+i.eu[2]*x+i.es[2]*m+i.n[2]*p],g=(x,m)=>{if(i.unbounded)return!0;if(m<-1e-6||m>i.ls+1e-6)return!1;let[p,v]=i.span(m);return x>=p-1e-6&&x<=v+1e-6};return c.forEach((x,m)=>{let p=t.align==="right"?h-x:t.align==="center"?(h-x)/2:0;for(let v=0;v<x;v++){let y=`${m}:${v}`,_=u.has(y);if(_&&!e)continue;let M=t.u+(v+p)*(n+Ju),w=t.v+m*l,R=M+n,b=w+(i.flat||i.wall?a:r);if(f){if(!(g((M+R)/2,w)&&g((M+R)/2,b)))continue}else if(![[M,w],[R,w],[R,b],[M,b]].every(([E,P])=>g(E,P)))continue;if(i.wall&&o>.001){let E=xr+r*Math.sin(o),[P,D]=t.flip?[E,xr]:[xr,E],L=[d(M,w,P),d(R,w,P),d(R,b,D),d(M,b,D)],O=t.flip?w:b,B=[M+.05,R-.05].map(k=>[d(k,O,0),d(k,O,E)]);s.push({corners:L,posts:B,cell:y,skipped:_});continue}if(!i.flat){s.push({corners:[d(M,w,xr),d(R,w,xr),d(R,b,xr),d(M,b,xr)],posts:[],cell:y,skipped:_});continue}let S=.15,A=S+r*Math.sin(o),[C,T]=t.flip?[b,w]:[w,b],F=[d(M,C,S),d(R,C,S),d(R,T,A),d(M,T,A)];s.push({corners:F,posts:[M+.05,R-.05].flatMap(E=>[[d(E,C,0),d(E,C,S)],[d(E,T,0),d(E,T,A)]]),cell:y,skipped:_})}}),s}function br(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function ho(i){return Math.hypot(i[0],i[1],i[2])}function Wi(i){let t=ho(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function qp(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var U1=.78,O1=1.18;function B1(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||U1,module_h:i.h||O1}}function Xl(i,t){let e=fo(i,B1(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Yl(i,t,e){let n=t?Xl(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>Jt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var po=1712952,mo=2239816,Jp=1318193,_r=kt(3662079,.9),ls=kt(5995775,.45),Ge=.14,k1=9427199,z1=13226982,V1=14936565,G1={black:{glass:new K(329483),edge:kt(9082544,.32),cells:kt(2766160,.22)},blue:{glass:new K(1386842),edge:kt(10467583,.55),cells:kt(4025599,.35)}},H1=kt(13226982,.5),W1=kt(13226982,.85),X1=kt(16757575,.95),$p=new K(2845583),Zp=new K(3818072),Kp=new K(4871791);function Y1(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function jp(i,t=new Map){let e=i.settings.roof,n=(e==null?void 0:e.type)==="custom"?null:Z1(i),r=(e==null?void 0:e.type)==="custom"?K1(i,e.sections??[],e.overhang):n?[n]:[];return $1(i,r),q1(i,r,t),r}function q1(i,t,e){var s;let n=((s=i.settings.roof)==null?void 0:s.windows)??[];if(!n.length||!t.length)return;let r=new Map(vr(i).map(o=>[o.key,o]));for(let o of n){let a=r.get(o.face),l=a?Xl(a,o):null;if(!a||!l)continue;let c=a.section?t.find(L=>{var O;return(O=L.sections)==null?void 0:O.includes(a.section)}):t[0];if(!c)continue;let h=o.float?Yl(i,a,o):null,u=h&&h.floor.id!==c.floor.id&&h.floor.elevation<c.floor.elevation?h.floor:null,f=u?u.elevation:c.floor.elevation+c.base,d=L=>[L[0],L[1]-f,L[2]],[g,x,m,p]=l.map(d),v=e.get(o.id)??{open:0,tilt:0,cover:0},y=!!h&&(u!==null||h.floor.id===c.floor.id),_=u?(c.winBelow??=new Map).get(u.id)??c.winBelow.set(u.id,{floor:u,solid:new ee,lines:new Pe}).get(u.id):y?c.win??={solid:new ee,lines:new Pe}:c.winRoof??={solid:new ee,lines:new Pe},M=(L,O)=>[L[0]+a.n[0]*O,L[1]+a.n[1]*O,L[2]+a.n[2]*O],w=(L,O,B)=>[L[0]+(O[0]-L[0])*B,L[1]+(O[1]-L[1])*B,L[2]+(O[2]-L[2])*B],R=v.open>.02||v.tilt>.02?X1:W1,b=[g,x,m,p].map(L=>M(L,.06)),S=[g,x,m,p].map(L=>M(L,-.02));for(let L=0;L<4;L++){_.lines.seg(b[L],b[(L+1)%4],R);let O=(L+1)%4;_.solid.tri(S[L],S[O],b[O],Kp),_.solid.tri(S[L],b[O],b[L],Kp)}let A=(v.open>.02?30*Math.min(1,v.open):v.tilt>.5?12:0)*ue,C=Math.hypot(m[0]-x[0],m[1]-x[1],m[2]-x[2]),T=L=>{let O=a.es;return[L[0]-O[0]*C*Math.cos(A)+a.n[0]*C*Math.sin(A),L[1]-O[1]*C*Math.cos(A)+a.n[1]*C*Math.sin(A),L[2]-O[2]*C*Math.cos(A)+a.n[2]*C*Math.sin(A)]},F=M(p,.065),E=M(m,.065),P=T(F),D=T(E);_.solid.tri(P,D,E,$p),_.solid.tri(P,E,F,$p);for(let[L,O]of[[P,D],[D,E],[E,F],[F,P]])_.lines.seg(L,O,R);if(v.cover>.02){let L=Math.min(1,v.cover),O=M(w(F,P,L),.01),B=M(w(E,D,L),.01),k=M(F,.01),z=M(E,.01);_.solid.tri(O,B,z,Zp),_.solid.tri(O,z,k,Zp)}}}function $1(i,t){var r;let e=((r=i.settings.roof)==null?void 0:r.solar)??[];if(!e.length||!t.length)return;let n=new Map(vr(i).map(s=>[s.key,s]));for(let s of e){let o=n.get(s.face);if(!o)continue;let a=o.section?t.find(l=>{var c;return(c=l.sections)==null?void 0:c.includes(o.section)}):t[0];a&&th(a.solid,a.lines,o,s,a.floor.elevation+a.base)}}function th(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=G1[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of fo(e,n)){let[h,u,f,d]=c.corners.map(s);i.tri(h,u,f,o.glass),i.tri(h,f,d,o.glass),i.tri(h,f,u,o.glass),i.tri(h,d,f,o.glass);let g=(p,v=.004)=>[p[0]+e.n[0]*v,p[1]+e.n[1]*v,p[2]+e.n[2]*v],x=(p,v,y)=>[p[0]+(v[0]-p[0])*y,p[1]+(v[1]-p[1])*y,p[2]+(v[2]-p[2])*y],m=[h,u,f,d].map(p=>g(p));for(let p=0;p<4;p++)t.seg(m[p],m[(p+1)%4],o.edge);for(let p=1;p<a;p++)t.seg(g(x(h,u,p/a)),g(x(d,f,p/a)),o.cells);for(let p=1;p<l;p++)t.seg(g(x(h,d,p/l)),g(x(u,f,p/l)),o.cells);for(let[p,v]of c.posts)t.seg(s(p),s(v),H1)}}function Z1(i){let t=i.settings.roof,e=Y1(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(A=>A.points.map(C=>C[0])),r=e.rooms.flatMap(A=>A.points.map(C=>C[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,h=new ee,u=new Pe;if(t.type==="flat"){Ie(h,[[o,l],[a,l],[a,c],[o,c]],0,.25,po,mo,{bottom:!0});let A=.252;for(let[C,T]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([C[0],A,C[1]],[T[0],A,T[1]],_r),u.seg([C[0],0,C[1]],[T[0],0,T[1]],ls);return{floor:e,base:e.height,solid:h,lines:u,glass:new ee}}let f=a-o>=c-l,d=t.ridge==="short"?!f:f,g=(d?c-l:a-o)/2,x=g*Math.tan(t.pitch*ue),m=(A,C,T)=>d?[A,T,(l+c)/2+C]:[(o+a)/2+C,T,A],[p,v]=d?[o,a]:[l,c],y=new K(mo),_=new K(po),M=(A,C,T,F,E)=>{h.tri(A,C,T,E),h.tri(A,T,F,E)};for(let A of[-1,1]){M(m(p,A*g,0),m(v,A*g,0),m(v,0,x),m(p,0,x),y),M(m(p,A*g,-Ge),m(p,0,x-Ge),m(v,0,x-Ge),m(v,A*g,-Ge),_),M(m(p,A*g,-Ge),m(v,A*g,-Ge),m(v,A*g,0),m(p,A*g,0),_);for(let C of[p,v])M(m(C,A*g,-Ge),m(C,A*g,0),m(C,0,x),m(C,0,x-Ge),_);u.seg(m(p,A*g,0),m(v,A*g,0),ls);for(let C of[p,v])u.seg(m(C,A*g,0),m(C,0,x),ls)}let w=t.overhang,R=new K(Jp),b=g-w,S=b*Math.tan(t.pitch*ue);for(let A of[p+w,v-w])h.tri(m(A,-b,-Ge),m(A,b,-Ge),m(A,0,S-Ge),R),h.tri(m(A,b,-Ge),m(A,-b,-Ge),m(A,0,S-Ge),R);return u.seg(m(p,0,x+.004),m(v,0,x+.004),_r),{floor:e,base:e.height,solid:h,lines:u,glass:new ee}}function K1(i,t,e){let n=i.floors.filter(o=>o.rooms.length>0).sort((o,a)=>o.elevation-a.elevation);if(!n.length)return[];let r=new Map,s=new Map(vr(i).map(o=>[o.key,o]));for(let o of t){if(Math.abs(o.x1-o.x0)<.1||Math.abs(o.z1-o.z0)<.1)continue;let a=ap(i,o)??n[0],l=o.open?`${a.id}:open`:a.id,c=r.get(l);c||r.set(l,c={floor:a,base:0,solid:new ee,lines:new Pe,glass:new ee,sections:[],lift:!o.open}),c.sections.push(o.id);let h=Nl(t,o),u=a.elevation+a.height>o.base+.05&&!o.dormer&&!h,f=t.filter(x=>x!==o&&Nl(t,x)===o).flatMap(x=>sp(o,x));for(let x of i.settings.roof.windows??[]){let m=s.get(x.face),p=m&&m.section===o.id?Xl(m,x):null;if(!p)continue;let v=p.map(y=>zi(o,y[0],y[2]));f.push({u0:Math.min(...v.map(y=>y[0])),u1:Math.max(...v.map(y=>y[0])),v0:Math.min(...v.map(y=>y[1])),v1:Math.max(...v.map(y=>y[1]))})}let d=h?Bu(h,o):o,g=null;if(h){let x=Qn(d),m=ss(h,{u0:0,u1:0,a:0,b:0}),p=v=>{let[y,_]=x.at(v,x.w/2),[M,w]=zi(h,y,_);return ao(m,M,w)??wn(h).y(w)};g=p(x.u0)<=p(x.u1)?0:1}J1(c.solid,c.lines,d,Ul(i,d,d.overhang??e),a.elevation,c.glass,u,f,g)}return[...r.values()].sort((o,a)=>+(o.lift===!1)-+(a.lift===!1))}function J1(i,t,e,n,r,s=i,o=!1,a=[],l=null){let c=Qn(e),h=wn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,f=Math.max(0,u.a),d=Math.max(0,u.b),g=c.w,x=c.u0-Math.max(0,u.u0),m=c.u1+Math.max(0,u.u1),p=(F,E,P)=>{let[D,L]=c.at(F,E);return[D,P-r,L]},v=new K(mo),y=new K(po),_=new K(Jp),M=(F,E)=>{for(let P=1;P+1<F.length;P++)i.tri(F[0],F[P],F[P+1],E)},w=[],R=[],b=[],S=null;if(e.shape==="flat"||e.shape==="parapet"){let F=e.eave_a,E=e.shape==="parapet",P=e.points&&e.points.length>=3?np(e,E?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):E?[c.at(c.u0,0),c.at(c.u1,0),c.at(c.u1,g),c.at(c.u0,g)]:[c.at(x,-f),c.at(m,-f),c.at(m,g+d),c.at(x,g+d)];Ie(i,P,F-r,F-r+.25,po,mo,{bottom:!0});for(let D=0;D<P.length;D++){let L=P[D],O=P[(D+1)%P.length];t.seg([L[0],F-r+.252,L[1]],[O[0],F-r+.252,O[1]],_r),t.seg([L[0],F-r,L[1]],[O[0],F-r,O[1]],ls)}if(E){let D=k=>Jn(k)>=0?k:[...k].reverse(),L=D(P),O=Dl(L,-.2),B=L.length;for(let k=0;k<B;k++){let z=D([L[k],L[(k+1)%B],O[(k+1)%B],O[k]]);Ie(i,z,F-r+.25,F-r+.65,po,mo),t.seg([L[k][0],F-r+.652,L[k][1]],[L[(k+1)%B][0],F-r+.652,L[(k+1)%B][1]],_r),t.seg([O[k][0],F-r+.652,O[k][1]],[O[(k+1)%B][0],F-r+.652,O[(k+1)%B][1]],_r)}}}else{let F=ss(e,u);w=F.faces;for(let E of a)w=w.flatMap(P=>op(P,E));R=F.rim,b=F.ridges,S=F.gable}let A=!!e.open,C=new K(k1);for(let F of w){if(A){for(let E=1;E+1<F.length;E++)s.tri(p(F[0][0],F[0][1],F[0][2]),p(F[E][0],F[E][1],F[E][2]),p(F[E+1][0],F[E+1][1],F[E+1][2]),C);continue}M(F.map(([E,P,D])=>p(E,P,D)),v),M(F.map(([E,P,D])=>p(E,P,D-Ge)),y)}for(let F=0;F<R.length;F++){let[E,P,D]=R[F],[L,O,B]=R[(F+1)%R.length];A||M([p(E,P,D),p(L,O,B),p(L,O,B-Ge),p(E,P,D-Ge)],y),t.seg(p(E,P,D),p(L,O,B),A?_r:ls)}if(A){j1(i,t,c,h,u,p,r);return}for(let[[F,E,P],[D,L,O]]of b)t.seg(p(F,E,P+.004),p(D,L,O+.004),_r);let T=e.base;if(!o){if(S){let F=Q1(S,T-Ge),E=l===null?[c.u0,c.u1]:[l===0?c.u0:c.u1];if(F.length>=3)for(let P of E)M(F.map(([D,L])=>p(P,D,L)),_)}if(e.shape!=="flat"&&e.shape!=="parapet")for(let F of[0,g]){let E=h.y(F)-Ge;E>T+.02&&M([p(c.u0,F,T),p(c.u1,F,T),p(c.u1,F,E),p(c.u0,F,E)],_)}else if(e.eave_a>T+.02)for(let[F,E,P,D]of[[c.u0,0,c.u1,0],[c.u1,0,c.u1,g],[c.u1,g,c.u0,g],[c.u0,g,c.u0,0]])M([p(F,E,T),p(P,D,T),p(P,D,e.eave_a),p(F,E,e.eave_a)],_)}}function j1(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,h=r.a>0,u=r.b>0,f=r.u0>0,d=r.u1>0,g=(p,v,y,_,M,w)=>{let R=[e.at(p,y),e.at(v,y),e.at(v,_),e.at(p,_)],b=(R[1][0]-R[0][0])*(R[2][1]-R[0][1])-(R[2][0]-R[0][0])*(R[1][1]-R[0][1]);Ie(i,b<0?[...R].reverse():R,M-o,w-o,z1,V1,{bottom:!0})},x=o;for(let[p,v]of[[0,h],[a,u]]){if(!v)continue;let y=n.y(p)-.03,_=p===0?0:a-l;g(e.u0,e.u1,_,_+l,y-c,y),t.seg(s(e.u0,p,y-c),s(e.u1,p,y-c),ls)}for(let[p,v]of[[e.u0,f],[e.u1-l,d]])if(v)for(let y=0;y<6;y++){let _=a*y/6,M=a*(y+1)/6,w=Math.min(n.y(_),n.y(M))-.03;g(p,p+l,_,M,w-c,w)}let m=[];for(let[p,v]of[[0,h],[a-l,u]]){if(!v)continue;let y=e.u1-e.u0-l,_=Math.max(1,Math.ceil(y/3.5));for(let M=0;M<=_;M++){let w=e.u0+y*M/_;M===0&&!f||M===_&&!d||m.push([w,p])}}if(!h&&!u)for(let p of[e.u0,e.u1-l])(p===e.u0&&f||p!==e.u0&&d)&&m.push([p,a/2-l/2]);for(let[p,v]of m){let y=n.y(v+l/2)-.03-c;g(p,p+l,v,v+l,x,y)}}function Q1(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var go={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Qp={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},$e=.2,tM=.01,xo=8,ql=.42,eh=.42;function im(i,t,e,n=[],r=[],s){let{walls:o,open:a}=fi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,F,E)=>{let P=s?s(T,F):null;return P===null?E:Math.max(.05,Math.min(E,P))},c=(T,F,E,P,D)=>{if(!s)return D;let L=D,O=Math.max(2,Math.ceil((P-E)/.25)+1);for(let B=0;B<O;B++){let k=E+(P-E)*B/(O-1);L=Math.min(L,l(T[0]+F[0]*k,T[1]+F[1]*k,D))}return L},h=new ee(!0,!0),u=[],f=new Pe,d=[];for(let T of i.rooms){if(T.points.length<3)continue;let F=nh(T.points),E=Qp[T.floor_material]??Qp.wood,P=new K(E.color),D=n.flatMap(z=>{if(hp(z,F))return[Gu(z,.003)];if(!cp(z))return[];let et=os(F,z);return et.length>=3&&Math.abs(Jn(et))>.01?[Gu(nh(et),.003)]:[]});d.push(...D);let L=[...F,...D.flat()],O=h.count;for(let[z,et,G]of ti(F,D)){let J=L[z],it=L[et],ht=L[G];h.tri([J[0],0,J[1]],[ht[0],0,ht[1]],[it[0],0,it[1]],P,P,P,[J[0],J[1],ht[0],ht[1],it[0],it[1]],Yt,E.tile)}u.push({roomId:T.id,start:O,end:h.count,color:E.color});let B=new K(go.slab),k=z=>{for(let et=0;et<z.length;et++){let G=z[et],J=z[(et+1)%z.length];h.tri([G[0],-$e,G[1]],[G[0],0,G[1]],[J[0],0,J[1]],B),h.tri([G[0],-$e,G[1]],[J[0],0,J[1]],[J[0],-$e,J[1]],B)}};k(F);for(let z of D){k([...nh(z)].reverse());for(let et=0;et<z.length;et++){let G=z[et],J=z[(et+1)%z.length];f.seg([G[0],.006,G[1]],[J[0],.006,J[1]],dr),f.seg([G[0],-$e,G[1]],[J[0],-$e,J[1]],Gi)}}}let g=new Map,x=[],m=new Map;for(let T of o){let F="interior",E=null;if(T.exterior){let D=T.b[0]-T.a[0],L=T.b[1]-T.a[1],O=Math.hypot(D,L)||1,B=[L/O,-D/O],k=(Math.round(Math.atan2(B[1],B[0])/(2*Math.PI)*xo)%xo+xo)%xo;F=`s${k}`;let z=k/xo*2*Math.PI;E=[Math.cos(z),Math.sin(z)]}let P=g.get(F);P===void 0&&(P=x.length,g.set(F,P),x.push(E)),m.set(T,P)}let p=new Map,v=[];for(let T of i.openings){let F=io(T,i.rooms,i.walls??[]);if(!F)continue;let E=ro(o,T,F);if(!E)continue;let{wall:P,s:D}=E,L=Kl([P.b[0]-P.a[0],P.b[1]-P.a[1]]),O=Math.hypot(P.b[0]-P.a[0],P.b[1]-P.a[1]),B=Math.min(T.width,O),k=Math.max(0,Math.min(O-B,D-B/2)),z=F.room.points,et=P.free?L[0]*(z[1][0]-z[0][0])+L[1]*(z[1][1]-z[0][1])>0:P.exterior||P.roomLeft===T.room_id,G=[-L[1],L[0]],J=et?G:[-G[0],-G[1]],it=Math.min(c(P.a,L,k,k+B,$l(P,i.height))-.02,T.sill+T.height),ht=Math.max(0,Math.min(T.sill,it-.1)),Y=[J[1],-J[0]],$=L[0]*Y[0]+L[1]*Y[1]>0,at={opening:T,bucket:m.get(P),start:[P.a[0]+L[0]*k,P.a[1]+L[1]*k],axis:L,width:B,toRoom:J,faceRoom:et?P.left:P.right,faceOut:et?P.right:P.left,sill:ht,top:it,hingeAtStart:T.hinge==="left"===$,exterior:P.exterior};v.push(at);let ct=p.get(P);ct||p.set(P,ct=[]),ct.push({s0:k,s1:k+B,sill:ht,top:it,info:at})}let y=Math.min(i.cut_height,i.height),_=new ee;for(let T of o){let F=m.get(T),E=Kl([T.b[0]-T.a[0],T.b[1]-T.a[1]]),P=(p.get(T)??[]).sort((G,J)=>G.s0-J.s0),D=$l(T,i.height),L=[],O=[-1/0,...new Set(P.flatMap(G=>[G.s0,G.s1])).values(),1/0].sort((G,J)=>G-J);for(let G=0;G+1<O.length;G++){let J=O[G],it=O[G+1];if(it-J<1e-6)continue;let ht=Number.isFinite(J)&&Number.isFinite(it)?(J+it)/2:Number.isFinite(J)?J+1:it-1,Y=P.filter(ct=>ct.s0<ht&&ct.s1>ht).map(ct=>[ct.sill,ct.top]).sort((ct,ut)=>ct[0]-ut[0]),$=[],at=-$e;for(let[ct,ut]of Y)ct>at+1e-4&&$.push([at,ct<1e-4?-tM:ct]),at=Math.max(at,ut);D>at+1e-4&&$.push([at,D]),L.push({t0:J,t1:it,ranges:$})}let B=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),k=s&&c(T.a,E,0,B,D)<D-.001,z=k?L.flatMap(G=>{let J=Math.max(G.t0,-.5),it=Math.min(G.t1,B+.5),ht=Math.max(1,Math.ceil((it-J)/.3));return Array.from({length:ht},(Y,$)=>({t0:$===0?G.t0:J+(it-J)*$/ht,t1:$===ht-1?G.t1:J+(it-J)*($+1)/ht,ranges:G.ranges,inner0:$>0,inner1:$<ht-1}))}):L.map(G=>({...G,inner0:!1,inner1:!1})),et=G=>(G[0]-T.a[0])*E[0]+(G[1]-T.a[1])*E[1];for(let G of z){let J=nM(T.footprint,T.a,E,G.t0,G.t1);if(J.length<3)continue;let it=($,at)=>Math.abs(et($)-at)<1e-4,ht=($,at)=>G.inner0&&it($,G.t0)&&it(at,G.t0)||G.inner1&&it($,G.t1)&&it(at,G.t1),Y=k?Math.min(...J.map(([$,at])=>l($,at,D))):D;for(let[$,at]of G.ranges){let ct=Math.min(at,k?Math.max(...J.map(([Mt,Ot])=>l(Mt,Ot,D))):at);if(ct-$<1e-4||Y-$<.01)continue;let ut=$>.01,pt=k&&at>Y,gt=(Mt,Ot)=>Math.min(at,l(Mt,Ot,D));if($<y-1e-6){let Mt=ct>y+1e-6?_p+F:pr+F,Ot=pt&&Y<y?(ne,zt)=>Math.min(y,gt(ne,zt)):Math.min(ct,y);Ie(_,J,$,Ot,go.wall,go.wallTop,{aoFrom:0,bottom:ut,fold:pr+F,topFold:Mt,skipSide:ht})}ct>y+1e-6&&Y>y+1e-6&&Ie(_,J,Math.max($,y),pt?gt:ct,go.wall,go.wallTop,{aoFrom:0,fold:F,bottom:ut&&$>=y,skipSide:ht})}}}let M=o.flatMap(T=>T.footprint),w=rM(o,M),R=new Pe;R.p.push(...f.p),R.c.push(...f.c),R.f.push(...f.f);let b=(T,F)=>(p.get(T)??[]).filter(F);for(let T of w.edges){let F=m.get(T.wall);for(let[P,D]of Zl(T,b(T.wall,L=>L.sill<=.005)))R.seg([P[0],.004,P[1]],[D[0],.004,D[1]],vp);for(let[P,D]of Zl(T,b(T.wall,L=>L.sill<y&&L.top>y)))R.seg([P[0],y,P[1]],[D[0],y,D[1]],Hu,kl+F);let E=$l(T.wall,i.height);for(let[P,D]of Zl(T,b(T.wall,L=>L.top>=E-.021))){if(!s){R.seg([P[0],E,P[1]],[D[0],E,D[1]],dr,E<=y+1e-6?pr+F:F);continue}let L=Math.max(1,Math.ceil(Math.hypot(D[0]-P[0],D[1]-P[1])/.3));for(let O=0;O<L;O++){let B=[P[0]+(D[0]-P[0])*O/L,P[1]+(D[1]-P[1])*O/L],k=[P[0]+(D[0]-P[0])*(O+1)/L,P[1]+(D[1]-P[1])*(O+1)/L],z=l(B[0],B[1],E),et=l(k[0],k[1],E);R.seg([B[0],z,B[1]],[k[0],et,k[1]],dr,Math.max(z,et)<=y+1e-6?pr+F:F)}}}for(let T of w.corners){let F=l(T.p[0],T.p[1],$l(T.wall,i.height));R.segSplit([T.p[0],.004,T.p[1]],[T.p[0],F,T.p[1]],Gi,Math.min(y,F),m.get(T.wall))}for(let T of p.values())for(let F of T)eM(R,F,y);let S=sM(w.edges,i.rooms,p),A=new ee;zp(_,R,i,A);for(let T of r)th(_,R,T.face,T.field,i.elevation);let C=[];for(let T of i.furniture){if(Xd(T.type))continue;let F=_.count,E=R.p.length/6,P=je(i,T);zl(_,R,S,T,P),P+T.h>y+.05&&(yp(_,F,y,Wu),Mp(R,E,y,Wu)),C.push({id:T.id,start:F,end:_.count})}return{floor:h.geometry(),roomTris:u,holes:d,walls:_.geometry(),water:A.geometry(),lines:R.geometry(),shadow:S.geometry(),buckets:x,openings:v,walls2d:o,openRooms:a,wallBuckets:o.map(T=>m.get(T)),furnitureTris:C,roofUnder:s}}function eM(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,h)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,h,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Yt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Gi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Gi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Gi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Gi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Gi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Hu,kl+r)}function nM(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=tm(o,a=>s(a)-n)),Number.isFinite(r)&&(o=tm(o,a=>r-s(a))),o}function tm(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var em=i=>Math.round(i*1e3),bo=i=>`${em(i[0])},${em(i[1])}`,nm=(i,t)=>{let e=bo(i),n=bo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function iM(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let f=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(f<=1e-6||f>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(f)}c.sort((u,f)=>u-f);let h=r;for(let u of c){let f=[r[0]+o*u,r[1]+a*u];bo(f)!==bo(h)&&e.push([h,f]),h=f}e.push([h,s])}return e}function rM(i,t){let e=i.map(l=>({wall:l,edges:iM(l.footprint,t)})),n=new Map;for(let{edges:l}of e)for(let[c,h]of l){let u=nm(c,h);n.set(u,(n.get(u)??0)+1)}let r=[],s=new Map,o=(l,c,h)=>{let u=bo(l),f=s.get(u);f||s.set(u,f={p:l,wall:c,d:[]}),f.d.push(h)};for(let{wall:l,edges:c}of e)for(let[h,u]of c){if(n.get(nm(h,u))!==1)continue;let f=Math.hypot(u[0]-h[0],u[1]-h[1]);if(f<1e-4)continue;r.push({a:h,b:u,wall:l});let d=[(u[0]-h[0])/f,(u[1]-h[1])/f];o(h,l,d),o(u,l,d)}let a=[];for(let{p:l,wall:c,d:h}of s.values())h.some(u=>h.some(f=>Math.abs(u[0]*f[1]-u[1]*f[0])>.05))&&a.push({p:l,wall:c});return{edges:r,corners:a}}function Zl(i,t){if(!t.length)return[[i.a,i.b]];let e=Kl([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Kl([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([f,d])=>{if(u.s1<=f||u.s0>=d)return[[f,d]];let g=[];return u.s0>f&&g.push([f,u.s0]),u.s1<d&&g.push([u.s1,d]),g});let h=u=>{let f=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*f,i.a[1]+(i.b[1]-i.a[1])*f]};return c.filter(([u,f])=>f-u>1e-4).map(([u,f])=>s<=o?[h(u),h(f)]:[h(f),h(u)])}function sM(i,t,e){let n=new ee,r=new K(eh,eh,eh),s=new K(1,1,1),o=.002;for(let a of i)for(let[l,c]of Zl(a,(e.get(a.wall)??[]).filter(h=>h.sill<=.005))){let h=c[0]-l[0],u=c[1]-l[1],f=Math.hypot(h,u);if(f<.05)continue;let d=[u/f,-h/f],g=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(p=>p.points.length>=3&&Jt(g,p.points)))continue;let x=[l[0]+d[0]*ql,l[1]+d[1]*ql],m=[c[0]+d[0]*ql,c[1]+d[1]*ql];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[m[0],o,m[1]],r,s,s),n.tri([l[0],o,l[1]],[m[0],o,m[1]],[c[0],o,c[1]],r,s,r)}return n}function rm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Bi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return Vu(e);let r=n.furniture.filter(s=>{var o;return(Hd.has(s.type)||((o=we(s.type))==null?void 0:o.hole))&&n.elevation+s.h>=t.elevation-.3}).map(Bi);return Vu([...e,...r])}function $l(i,t){return Math.min(t,i.height??t)}function Kl(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function nh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var oM=new K(1516340),aM=new K(527897),ih=new K(1779256),vo=new K(1120808),lM=new K(4163256),sm=new K(5995161),cM=new K(2240842),uM=new K(1318704),hM=.35,cs=.8,fM=.2,om=.1;function dM(i,t){var n;if(((n=i.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=am(i,t);return!!e&&e.some(([r,s])=>Pl(r,s)-t.elevation>-.15)}function am(i,t){return t.rooms.some(e=>e.points.length>=3)?ip(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function pM(i,t,e,n){let r=-1/0;for(let s of i.floors)for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||Kn(o.type)||!Jt(e,o.points)||(r=Math.max(r,s.elevation+cr(s,o)+ns[o.type]-t.elevation));return r>n?r-n:0}function lm(i,t,e,n=!1){var g;if(((g=i.settings.terrain)==null?void 0:g.earth)===!1||t.elevation>.3)return null;let r=am(i,t);if(!r)return null;let s=(x,m)=>Pl(x,m)-t.elevation,o=n&&r.some(([x,m])=>s(x,m)<-$e-.03);if(!o&&!dM(i,t))return null;let a=t.height,l=-hM,c=(x,m)=>Math.min(a,Pl(x,m)-t.elevation),h=new ee,u=new ee,f=new Pe,d=(x,m,p,v,y,_,M,w)=>{let R=[m[0]-x[0],m[2]-x[2]];-R[1]*y[0]+R[0]*y[1]>0?(w.tri(x,m,p,_,_,M),w.tri(x,p,v,_,M,M)):(w.tri(x,p,m,_,M,_),w.tri(x,v,p,_,M,M))};for(let x=0;x<r.length;x++){let m=r[x],p=r[(x+1)%r.length],v=Math.hypot(p[0]-m[0],p[1]-m[1]);if(v<1e-4)continue;let y=[(p[0]-m[0])/v,(p[1]-m[1])/v],_=[y[1],-y[0]],M=[(m[0]+p[0])/2+_[0]*.05,(m[1]+p[1])/2+_[1]*.05];Jt(M,r)&&(_=[-_[0],-_[1]]);let w=(C,T=.012)=>[m[0]+y[0]*C+_[0]*T,m[1]+y[1]*C+_[1]*T],R=[];for(let C of e){if(C.opening.type!=="window"||!C.exterior||C.opening.well===!1)continue;let T=C.start[0]+C.axis[0]*(C.width/2)-C.toRoom[0]*C.faceOut,F=C.start[1]+C.axis[1]*(C.width/2)-C.toRoom[1]*C.faceOut,E=(T-m[0])*y[0]+(F-m[1])*y[1];Math.abs((T-m[0])*_[0]+(F-m[1])*_[1])>.08||E<-.05||E>v+.05||C.sill>=c(T,F)-.05||R.push({s0:Math.max(0,E-C.width/2-om),s1:Math.min(v,E+C.width/2+om),bottom:Math.max(l+.05,C.sill-fM),rim:C.opening.well_rim??0})}let b=new Set([0,v]);for(let C of R)b.add(C.s0),b.add(C.s1);let S=[...b].sort((C,T)=>C-T),A=[];for(let C=0;C<S.length-1;C++){let T=Math.max(1,Math.ceil((S[C+1]-S[C])/.5));for(let F=0;F<T;F++)A.push(S[C]+(S[C+1]-S[C])*F/T)}A.push(v);for(let C=0;C<A.length-1;C++){let T=A[C],F=A[C+1],E=R.find(G=>T>=G.s0-1e-6&&F<=G.s1+1e-6),P=w(T),D=w(F),L=c(P[0],P[1]),O=c(D[0],D[1]),B=E?Math.min(L,E.bottom):L,k=E?Math.min(O,E.bottom):O;if(B>l+.01||k>l+.01){let G=Math.min(B,l),J=Math.min(k,l);d([P[0],G,P[1]],[D[0],J,D[1]],[D[0],Math.max(k,l),D[1]],[P[0],Math.max(B,l),P[1]],_,aM,oM,h)}let z=s(P[0],P[1]),et=s(D[0],D[1]);if(o&&(z<-$e-.01||et<-$e-.01)&&d([P[0],Math.min(z,-$e),P[1]],[D[0],Math.min(et,-$e),D[1]],[D[0],-$e,D[1]],[P[0],-$e,P[1]],_,uM,cM,h),L>l||O>l||o&&(z<-$e||et<-$e)){let G=o?Math.min(z,Math.max(L,l)):Math.max(L,l),J=o?Math.min(et,Math.max(O,l)):Math.max(O,l);f.seg([P[0],G+.004,P[1]],[D[0],J+.004,D[1]],lM)}}for(let C of R){let T=w(C.s0,0),F=w(C.s1,0),E=[T[0]+_[0]*cs,T[1]+_[1]*cs],P=[F[0]+_[0]*cs,F[1]+_[1]*cs],D=[(T[0]+F[0]+E[0]+P[0])/4,(T[1]+F[1]+E[1]+P[1])/4],L=pM(i,t,D,c(D[0],D[1])),O=Math.max(C.rim,L>0?L+.02:0),B=it=>c(it[0],it[1])+O,k=C.bottom,z=(it,ht)=>[it[0],ht,it[1]];u.tri(z(T,k),z(F,k),z(P,k),vo),u.tri(z(T,k),z(P,k),z(E,k),vo);let et=(it,ht)=>{u.tri(z(it,k),z(ht,k),z(ht,B(ht)),vo,vo,ih),u.tri(z(it,k),z(ht,B(ht)),z(it,B(it)),vo,ih,ih)};et(T,E),et(F,P),et(E,P);let G=it=>[it[0],B(it)+.01,it[1]];for(let[it,ht]of[[T,F],[F,P],[P,E],[E,T]])f.seg(G(it),G(ht),sm);let J=Math.max(3,Math.round((C.s1-C.s0)/.12));for(let it=1;it<J;it++){let ht=it/J,Y=[T[0]+(F[0]-T[0])*ht,T[1]+(F[1]-T[1])*ht];f.seg(G(Y),G([Y[0]+_[0]*cs,Y[1]+_[1]*cs]),sm)}}}return h.count||u.count?{earth:h,wells:u,lines:f}:null}var cm=i=>Math.round(i*1e3)/1e3;function mM(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,h)=>{let u=l.points[(h+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function um(i,t,e,n,r,s=.05){let o=i.rooms.find(f=>f.points.length>=3&&Jt([t.x,t.z],f.points));if(!o)return[e,n];let a=o.points,l=Un(a)>=0?1:-1,c=Bi({...t}),h=e,u=n;for(let f=0;f<2;f++){let d=Bi({...t,x:h,z:u});for(let g=0;g<a.length;g++){let x=a[g],m=a[(g+1)%a.length],p=Math.hypot(m[0]-x[0],m[1]-x[1]);if(p<.05)continue;let v=[(m[0]-x[0])/p,(m[1]-x[1])/p],y=[-v[1]*l,v[0]*l],_=mM(i,o.id,x,m)?r/2:0,M=0;d.forEach((w,R)=>{let b=(w[0]-x[0])*v[0]+(w[1]-x[1])*v[1];if(b<-.01||b>p+.01)return;let S=(w[0]-x[0])*y[0]+(w[1]-x[1])*y[1]-_,A=c[R];(A[0]-x[0])*y[0]+(A[1]-x[1])*y[1]-_<-s||S<M&&(M=S)}),M<-1e-4&&(h-=y[0]*M,u-=y[1]*M)}}return[cm(h),cm(u)]}var gM=500,hm=.12,fm=1.35,xM=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Jl=class{view={target:new H,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:h}=this.flight,u=Math.min(1,(t-c)/h),f=xM(u);this.view.target.lerpVectors(a.target,l.target,f),this.view.radius=a.radius+(l.radius-a.radius)*f,this.view.theta=a.theta+(l.theta-a.theta)*f,this.view.phi=a.phi+(l.phi-a.phi)*f,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=rh(this.view.phi+this.velocity.phi,hm,fm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700){let n={...this.view,target:this.view.target.clone()},r=t.theta??n.theta;for(;r-n.theta>Math.PI;)r-=2*Math.PI;for(;r-n.theta<-Math.PI;)r+=2*Math.PI;let s={target:(t.target??n.target).clone(),radius:t.radius??n.radius,theta:r,phi:t.phi??n.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=s,this.flight=null):this.flight={from:n,to:s,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},gM)}else this.down=null,this.pinch=this.pinchState()}onMove(t){var s,o,a,l,c,h;let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){(o=(s=this.events).swipeMove)==null||o.call(s,t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let u=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&((l=(a=this.events).swipeStart)!=null&&l.call(a,this.down.x-u.left,this.down.y-u.top,t.clientX-this.down.x,t.clientY-this.down.y))){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},(h=(c=this.events).swipeMove)==null||h.call(c,t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let u=e.type==="mouse";if(u&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if((e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!u))this.pan(n,r);else{let d=this.el.clientHeight||1,g=-n/d*3.2,x=-r/d*2.4;this.view.theta+=g,this.view.phi=rh(this.view.phi+x,hm,fm),this.velocity={theta:g,phi:x}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let u=this.pinchState();this.pinch&&u&&(this.zoom(this.pinch.dist/Math.max(1,u.dist)),this.pan(u.mid[0]-this.pinch.mid[0],u.mid[1]-this.pinch.mid[1])),this.pinch=u}this.events.change()}onUp(t){var e,n,r,s;if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),(n=(e=this.events).drop)==null||n.call(e);return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,(s=(r=this.events).swipeEnd)==null||s.call(r);return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let o=this.el.getBoundingClientRect(),a=t.clientX-o.left,l=t.clientY-o.top,c=performance.now();c-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(a,l)):(this.lastTap=c,this.events.tap(a,l))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=rh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new H(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new H(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function rh(i,t,e){return Math.min(e,Math.max(t,i))}function Xi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}function dm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function pm(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=dm(s,o),c=dm(o,a),h=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],f=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(h<.005||u[0]*f[0]+u[1]*f[1]+u[2]*f[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*h,o[1]+u[1]*h,o[2]+u[2]*h],g=[o[0]+f[0]*h,o[1]+f[1]*h,o[2]+f[2]*h];for(let x=0;x<=e;x++){let m=x/e,p=(1-m)*(1-m),v=2*(1-m)*m,y=m*m;n.push([p*d[0]+v*o[0]+y*g[0],p*d[1]+v*o[1]+y*g[1],p*d[2]+v*o[2]+y*g[2]])}}return n.push(i[i.length-1]),n}var mm=new K(7568261),gm=new K(4869974),bM=new K(3116287),xm=new K(3948872),sh=yr([.35,.85,.4]),bm=10;function yr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function _o(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function vm(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=yr(_o(i,t));return[e,yr(_o(i,e))]}function di(i,t){let e=.5+.5*Math.max(0,t[0]*sh[0]+t[1]*sh[1]+t[2]*sh[2]);return i.clone().multiplyScalar(e)}function us(i,t,e,n,r,s=!1){let o=yr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=vm(o),c=(h,u)=>{let f=u/bm*Math.PI*2,d=[a[0]*Math.cos(f)+l[0]*Math.sin(f),a[1]*Math.cos(f)+l[1]*Math.sin(f),a[2]*Math.cos(f)+l[2]*Math.sin(f)];return{p:[h[0]+d[0]*n,h[1]+d[1]*n,h[2]+d[2]*n],n:d}};for(let h=0;h<bm;h++){let u=c(t,h),f=c(t,h+1),d=c(e,h),g=c(e,h+1);i.tri(u.p,g.p,d.p,di(r,u.n),di(r,g.n),di(r,d.n)),i.tri(u.p,f.p,g.p,di(r,u.n),di(r,f.n),di(r,g.n)),s&&(i.tri([...t],f.p,u.p,di(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,g.p,di(r,o)))}}function vM(i,t,e,n,r,s,o,a){let l=yr(_o(e,n)),c=(u,f,d)=>[t[0]+e[0]*u*r+n[0]*f*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*f*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*f*s+l[2]*d*o],h=[];for(let[u,f]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])h.push([u,[c(f,-.5,-.5),c(f,.5,-.5),c(f,.5,.5),c(f,-.5,.5)]]);for(let[u,f]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])h.push([u,[c(-.5,f,-.5),c(.5,f,-.5),c(.5,f,.5),c(-.5,f,.5)]]);for(let[u,f]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])h.push([u,[c(-.5,-.5,f),c(.5,-.5,f),c(.5,.5,f),c(-.5,.5,f)]]);for(let[u,f]of h){let d=di(a,u);i.tri(f[0],f[1],f[2],d),i.tri(f[0],f[2],f[3],d),i.tri(f[0],f[2],f[1],d),i.tri(f[0],f[3],f[2],d)}}function _m(i,t){if(t.points.length<2)return;let e=t.radius,n=pm(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?mm.clone().multiplyScalar(.55):mm;us(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);us(i,o,a,e*1.22,gm,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);us(i,o,a,e*1.08,t.water?new K(...t.water).multiplyScalar(.9):new K(10475240),!0);for(let l of s(.08)){let[c,h]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];us(i,c,h,e*1.3,gm,!0)}}else{let[o,a]=s(.055);us(i,o,a,e*1.4,xm,!0);let[l]=vm(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],h=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];us(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],h,e*.35,xm,!0);let u=r.open===!1?yr(_o(r.dir,c)):r.dir,f=yr(_o(u,c)),d=[h[0]+u[0]*.045,h[1]+u[1]*.045,h[2]+u[2]*.045];vM(i,d,u,f,.1,.028,.012,bM)}}}var oh=1.62,_M=.2,ah=class{solids=[];doors=[];rooms;walls;building;floor;constructor(t,e){this.building=t,this.floor=e;let n=t.settings;this.rooms=e.rooms.filter(o=>o.points.length>=3);let r=fi(this.rooms,{exterior:n.wall_exterior,interior:n.wall_interior},e.walls??[]);this.walls=r.walls;let s=new Map;for(let o of e.openings){if(!(o.type!=="window"||o.sill<.1))continue;let l=io(o,e.rooms,e.walls??[]);if(!l)continue;let c=ro(this.walls,o,l);if(!c)continue;let h=s.get(c.wall)??[];h.push([c.s-o.width/2+.05,c.s+o.width/2-.05]),s.set(c.wall,h);let u=c.wall,f=u.b[0]-u.a[0],d=u.b[1]-u.a[1],g=Math.hypot(f,d)||1,x=f/g,m=d/g,p=[u.a[0]+x*c.s,u.a[1]+m*c.s],v=u.left+.45,y=u.right+.45;this.doors.push({centre:p,p:[[p[0]-m*v,p[1]+x*v],[p[0]+m*y,p[1]-x*y]]})}for(let o of this.walls){if(o.height!==void 0&&o.height<.9)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);c<1e-6||this.solids.push({a:o.a,u:[a/c,l/c],len:c,left:o.left,right:o.right,gaps:s.get(o)??[]})}}blocked(t,e=_M){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>Jt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];let n=[t,e,...this.doors.flatMap(u=>u.p).filter(u=>!this.blocked(u))],r=n.length,s=new Array(r).fill(1/0),o=new Array(r).fill(-1),a=new Array(r).fill(!1);s[0]=0;let l=new Map,c=(u,f)=>{let d=u<f?`${u}:${f}`:`${f}:${u}`,g=l.get(d);return g===void 0&&(g=this.clear(n[u],n[f]),l.set(d,g)),g};for(;;){let u=-1;for(let f=0;f<r;f++)!a[f]&&s[f]<1/0&&(u<0||s[f]<s[u])&&(u=f);if(u<0)return null;if(u===1)break;a[u]=!0;for(let f=0;f<r;f++){if(a[f]||f===u)continue;let d=Math.hypot(n[u][0]-n[f][0],n[u][1]-n[f][1]);s[u]+d>=s[f]||c(u,f)&&(s[f]=s[u]+d,o[f]=u)}}let h=[];for(let u=1;u>0;u=o[u])h.unshift(n[u]);return h}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=io(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=ro(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=Math.hypot(l,c)||1,u=l/h,f=c/h,d=[a.a[0]+u*o.s,a.a[1]+f*o.s],g=[d[0]-f*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(g))return{p:g,yaw:this.openYaw(g,Math.atan2(u,-f))}}let e=[...this.rooms].sort((r,s)=>ym(s)-ym(r))[0],n=e?this.freeNear(hr(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function ym(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var lh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+oh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-oh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(hr(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,h=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,h),n=!0}else if(this.path.length){let[l,c]=this.path[0],h=l-r.x,u=c-r.z,f=Math.hypot(h,u),d=1.4*e;f<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=h/f*d,r.z+=u/f*d,this.turnTo=Math.atan2(u,h)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=(t==null?void 0:t.id)??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,h=this.v.camera.fov*Math.PI/180,u=Math.tan(h/2),f=n.width/n.height,d=Math.cos(a),g=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],m=[g[1]*x[2]-g[2]*x[1],g[2]*x[0]-g[0]*x[2],g[0]*x[1]-g[1]*x[0]],p=[-m[0],-m[1],-m[2]],v=[g[0]+x[0]*r*u*f+p[0]*s*u,g[1]+x[1]*r*u*f+p[1]*s*u,g[2]+x[2]*r*u*f+p[2]*s*u];if(v[1]>=-.02)return null;let y=oh/-v[1];return[l+v[0]*y,c+v[2]*y]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!(c!=null&&c.capture)])},e=null;t(this.surface,"pointerdown",o=>{var a,l;e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},(l=(a=this.surface).setPointerCapture)==null||l.call(a,o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>{var a,l;return!!((l=(a=o.composedPath()[0])==null?void 0:a.closest)!=null&&l.call(a,"input, textarea, select"))};t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function yM(i,t){let e=we(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function ch(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?yM(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function uh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let h=e.length/3,u=c.portrait===!1?10:6,f=c.portrait===!1?6:10,d=MM(c.id)%1e3/1e3;for(let x of fo(l,c)){let[m,p,v,y]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),_=[[m,0,0],[p,1,0],[v,1,1],[y,0,1]];for(let M of[0,1,2,0,2,3]){let[w,R,b]=_[M];e.push(w[0],w[1],w[2]),n.push(R,b),r.push(u,f),s.push(d)}}let g=e.length/3-h;g&&o.push({id:c.id,start:h,count:g})}if(!e.length)return null;let a=new Zt;return a.setAttribute("position",new Gt(e,3)),a.setAttribute("uv",new Gt(n,2)),a.setAttribute("aCells",new Gt(r,2)),a.setAttribute("aPhase",new Gt(s,1)),a.setAttribute("aLevel",new Gt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function yo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function hh(i){let t=new re({transparent:!0,blending:Le,depthWrite:!1,side:de});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function MM(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var Sm=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,SM=`
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
`,wM=Sm,TM=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function Mm(i,t){let e=[];for(let[r,s,o]of ti(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Zt;return n.setAttribute("position",new Gt(e,3)),n}function wm(i,t){let e=new ke;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Vt(Mm(n.points,o),new an({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:Sm,fragmentShader:SM,transparent:!0,blending:Le,depthWrite:!1,side:de}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(m=>m[0]),a=n.points.map(m=>m[1]),[l,c,h,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],f=c-l>=u-h,d=Math.min(1,n.cover),g=f?[[l-.1,h-.1],[l+(c-l)*d,h-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,h-.1],[c+.1,h-.1],[c+.1,h+(u-h)*d],[l-.1,h+(u-h)*d]],x=os(n.points,g);if(x.length>=3){let m=new Vt(Mm(x,n.y+.03),new an({uniforms:{uAxis:{value:f?[1,0]:[0,1]}},vertexShader:wM,fragmentShader:TM,transparent:!0,side:de}));m.renderOrder=6,e.add(m);let p=[];for(let y=0;y<x.length;y++){let _=x[y],M=x[(y+1)%x.length];p.push(_[0],n.y+.032,_[1],M[0],n.y+.032,M[1])}let v=new Zt;v.setAttribute("position",new Gt(p,3)),e.add(new Ye(v,new Ke({color:5995775,transparent:!0,opacity:.6})))}}}return e}function Tm(i){var t,e,n;for(let r of i.children)(t=r.geometry)==null||t.dispose(),(n=(e=r.material)==null?void 0:e.dispose)==null||n.call(e);i.clear()}var Em=["neon","blueprint","day"];function Am(i){return Em.indexOf(i)}var jl={value:new H(.22,.88,1)},Ql={value:0};function Rm(i){let t=/^#?([0-9a-f]{6})$/i.exec((i==null?void 0:i.trim())??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var EM=`
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
`;function cn(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=jl,s.uniforms.uAccentOn=Ql,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${EM}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function Mo(i){return i==="day"?Li:Le}var pi=.012,AM=.012;function Pm(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],h=[],u=(p,v,y,_,M,w,R)=>{for(let b of[p,v,y,p,y,_])a.push(b[0],b[1],b[2]),l.push(M[0],M[1],M[2]),c.push(w),h.push(R)};i.rooms.forEach((p,v)=>{if(p.points.length<3)return;let y=p.points.map(C=>C[0]),_=p.points.map(C=>C[1]),M=Math.min(...y),w=Math.min(..._),R=Math.max(...y),b=Math.max(..._),S=Math.max(1,Math.ceil((R-M)/r)),A=Math.max(1,Math.ceil((b-w)/r));for(let C=0;C<S;C++)for(let T=0;T<A;T++){let F=M+C*r,E=w+T*r,P=Math.min(F+r,R),D=Math.min(E+r,b),L=os(p.points,[[F,E],[P,E],[P,D],[F,D]]),O=L.length>=3?Math.abs(FM(L)):0;if(O<1e-4)continue;let B=DM(L);if(!s.some(k=>Jt(B,k))){if(O>(P-F)*(D-E)-1e-6){u([F,pi,E],[F,pi,D],[P,pi,D],[P,pi,E],[0,1,0],v,-1);continue}for(let[k,z,et]of ti(L)){let G=L[k],J=L[et],it=L[z];(it[1]-G[1])*(J[0]-G[0])-(it[0]-G[0])*(J[1]-G[1])<0&&([G,J]=[J,G]),u([G[0],pi,G[1]],[it[0],pi,it[1]],[J[0],pi,J[1]],[J[0],pi,J[1]],[0,1,0],v,-1)}}}});let f=i.rooms.length,d=(i.outdoor??[]).filter(p=>p.points.length>=3&&!Kn(p.type));if(d.length){let p=d.flatMap(b=>b.points.map(S=>S[0])),v=d.flatMap(b=>b.points.map(S=>S[1])),y=Math.floor(Math.min(...p)/r)*r,_=Math.floor(Math.min(...v)/r)*r,M=Math.max(1,Math.ceil((Math.max(...p)-y)/r)),w=Math.max(1,Math.ceil((Math.max(...v)-_)/r)),R=(b,S,A)=>kp(i,b)-to(i,b,S,A)+pi;for(let b=0;b<M;b++)for(let S=0;S<w;S++){let A=y+b*r,C=_+S*r,T,F=[A+r/2,C+r/2];T=d.find(P=>P.type==="pool"&&Jt(F,P.points));for(let P=d.length-1;P>=0&&!T;P--)Jt(F,d[P].points)&&(T=d[P]);if(!T)continue;let E=(P,D)=>[P,R(T,P,D),D];u(E(A,C),E(A,C+r),E(A+r,C+r),E(A+r,C),[0,1,0],f,-1)}}let g=Math.min(i.cut_height,i.height),x=[];t.forEach((p,v)=>{let y=Math.min(i.height,p.height??i.height),_=Math.min(g,y-.02),M=p.b[0]-p.a[0],w=p.b[1]-p.a[1],R=Math.hypot(M,w);if(R<.05)return;let b=[M/R,w/R],S=[-b[1],b[0]],A=e[v],C=CM(p,b,R,n),T=(D,L)=>D?i.rooms.findIndex(O=>O.id===D):L?f:-1;x.push({a:p.a,b:p.b,h:y,ra:T(p.roomLeft,!1),rb:T(p.roomRight,p.exterior),gaps:C});let F=(D,L,O)=>[L,O,...D.filter(B=>B>L+.005&&B<O-.005)].sort((B,k)=>B-k).filter((B,k,z)=>k===0||B>z[k-1]+.005),E=F([_,(_+y)/2,...C.flatMap(D=>[D.y0+.01,D.y1-.01])],.02,y-.02),P=F(C.flatMap(D=>[D.s0,D.s1]),0,R);for(let D of[1,-1]){let L=D>0?p.roomLeft:p.roomRight,O=L?i.rooms.findIndex(G=>G.id===L):p.exterior?f:-1;if(O<0)continue;let B=(D>0?p.left:p.right)+AM,k=[S[0]*D,S[1]*D],z=(G,J)=>[p.a[0]+b[0]*G+k[0]*B,J,p.a[1]+b[1]*G+k[1]*B],et=G=>{let J=z(G,0),it=o==null?void 0:o(J[0],J[2]);return it==null?1/0:it-.02};for(let G=0;G<P.length-1;G++){let J=P[G+1]-P[G],it=Math.max(1,Math.ceil(J/r));for(let ht=0;ht<it;ht++){let Y=P[G]+J/it*ht,$=P[G]+J/it*(ht+1),at=(Y+$)/2;for(let ct=0;ct<E.length-1;ct++){let ut=E[ct],pt=E[ct+1];if(pt-ut<.01)continue;let gt=(ut+pt)/2;if(C.some(zt=>at>zt.s0&&at<zt.s1&&gt>zt.y0&&gt<zt.y1))continue;let Mt=ut>=g-1e-6?A:pr+A,Ot=Math.min(pt,et(Y)),ne=Math.min(pt,et($));Ot<=ut+.005&&ne<=ut+.005||u(z(Y,ut),z($,ut),z($,Math.max(ut,ne)),z(Y,Math.max(ut,Ot)),[k[0],0,k[1]],O,Mt)}}}}});let m=[];for(let p of n){if(p.opening.type!=="door")continue;let v=t.find(M=>Im(M,p)&&RM(M,p));if(!v||!v.roomLeft||!v.roomRight)continue;let y=i.rooms.findIndex(M=>M.id===v.roomLeft),_=i.rooms.findIndex(M=>M.id===v.roomRight);y<0||_<0||m.push({id:p.opening.id,a:y,b:_,x:p.start[0]+p.axis[0]*(p.width/2),y:Math.min(1.1,p.top*.55),z:p.start[1]+p.axis[1]*(p.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(h),doors:m,blockers:x}}function Im(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function RM(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function CM(i,t,e,n){let r=[];for(let s of n){if(!Im(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function PM(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function IM(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function Cm(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,h=a*a+l*l+c*c,u=Math.sqrt(h)||1e-6,f=IM(i),d=1/(1+h/(f*f)),g=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*g*(.2+.8*x)*PM(i.kind,l/u)}function Lm(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((h,u)=>{let f=n[u]??.5;if(!(f<=.01))for(let[d,g]of[[h.a,h.b],[h.b,h.a]]){let x=[0,0,0];for(let p of t){if(p.room!==d)continue;let v=p.x-h.x,y=p.y-h.y,_=p.z-h.z,M=Math.hypot(v,y,_)||1,w=Cm(p,h.x,h.y,h.z,v/M,y/M,_/M);x[0]+=p.color[0]*w,x[1]+=p.color[1]*w,x[2]+=p.color[2]*w}let m=Math.max(x[0],x[1],x[2]);m<.01||r.push({x:h.x,y:h.y,z:h.z,color:[x[0]/m,x[1]/m,x[2]/m],level:Math.min(1,m*.9*(.35+.65*f)),kind:"wall",room:g})}});let s=new Map;for(let h of r){let u=i.blockers.filter(d=>d.ra===h.room||d.rb===h.room),f={...h,color:h.color.map(d=>Math.pow(d,1.5)),walls:u};s.set(h.room,[...s.get(h.room)??[],f])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let h=0;h<l.length;h++){let u=s.get(l[h]);if(!u)continue;let f=h*3,d=0,g=0,x=0;for(let m of u){if(m.walls.length&&LM(m,m.walls,o[f],o[f+1],o[f+2]))continue;let p=Cm(m,o[f],o[f+1],o[f+2],a[f],a[f+1],a[f+2]);d+=m.color[0]*p,g+=m.color[1]*p,x+=m.color[2]*p}c[f]=1-Math.exp(-d*e*1.6),c[f+1]=1-Math.exp(-g*e*1.6),c[f+2]=1-Math.exp(-x*e*1.6)}return c}function LM(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],h=s*c-o*l;if(Math.abs(h)<1e-9)continue;let u=a.a[0]-i.x,f=a.a[1]-i.z,d=(u*c-f*l)/h;if(d<=1e-6||d>=1-1e-6)continue;let g=(u*o-f*s)/h;if(g<0||g>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let m=g*Math.hypot(l,c);if(!a.gaps.some(p=>m>p.s0&&m<p.s1&&x>p.y0&&x<p.y1))return!0}return!1}function Fm(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&Jt([t,e],r.points));return n<0?i.rooms.length:n}function tc(i,t){return i&&t>=0&&t<i.length?i[t]:t}function FM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function DM(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var So={open:0,open2:0,tilt:0,tilt2:0,cover:null},Dm=2043986,Nm=2769520,NM=2242399,fh=1845831,UM=1450554,mi=16758087,OM=1.2,BM=1.5,kM=1846349,zM=2572395,VM=1120816,GM=1845831,Um=5995775,Om=9085695,hs=kt(3662079,.08),HM=.2;function ec(i,t,e,n,r,s,o,a,l,c,h){let u=(d,g,x)=>t(d,g,x),f=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),kt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),kt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),kt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),kt(l.getHex(),.92)]];for(let[d,g,x,m,p]of f)i.tri(d,g,x,p,p,p,void 0,h),i.tri(d,x,m,p,p,p,void 0,h)}function he(i,t,e,n,r,s,o,a,l,c,h,u){if(a<=h+1e-6)return ec(i,t,e,n,r,s,o,a,l,c,Yt);if(o>=h-1e-6)return ec(i,t,e,n,r,s,o,a,l,c,u);ec(i,t,e,n,r,s,o,h,l,c,Yt),ec(i,t,e,n,r,s,h,a,l,c,u)}function Yi(i,t,e,n,r,s,o,a,l,c,h=0){let u=(f,d,g)=>{let x=_=>h?(o-_)/h:.5,m=t(e,r,f),p=t(n,r,f),v=t(n,r,d),y=t(e,r,d);i.tri(m,p,v,a,a,a,[0,x(f),1,x(f),1,x(d)],g),i.tri(m,v,y,a,a,a,[0,x(f),1,x(d),0,x(d)],g)};o<=l+1e-6?u(s,o,Yt):s>=l-1e-6?u(s,o,c):(u(s,l,Yt),u(l,o,c))}function WM(i,t,e,n,r,s,o,a,l,c){let h=t(e,r,o),u=t(n,r,o),f=t(n,s,o),d=t(e,s,o),g=0,x=(s-r)/c;i.tri(h,u,f,a,a,a,[0,g,1,g,1,x],l),i.tri(h,f,d,a,a,a,[0,g,1,x,0,x],l)}function Bm(i,t,e){let n=new ee,r=new ee,s=new ee(!0),o=new K(Dm),a=new K(Nm),l=[],c=[],h=[];for(let u of i){let f=n.count,d=r.count,g=s.count,x=t.get(u.opening.id)??So,m=u.width,{sill:p,top:v,bucket:y}=u,_=(b,S,A)=>[u.start[0]+u.axis[0]*b+u.toRoom[0]*S,A,u.start[1]+u.axis[1]*b+u.toRoom[1]*S],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",R=u.opening.type==="door"&&ur(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!R||u.opening.type==="garage"){let b=-u.faceOut-.012,S=u.faceRoom+.012,A=u.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),C=A?kt(mi,.8):new K(Dm),T=A?kt(mi,1):new K(Nm);he(n,_,-.045,.02,b,S,0,v+.045,C,T,e,y),he(n,_,m-.02,m+.045,b,S,0,v+.045,C,T,e,y),he(n,_,.02,m-.02,b,S,v-.02,v+.045,C,T,e,y)}if(u.opening.type==="door"){let b=ur(u.opening,u.exterior),S=qd(b),A=u.opening.swing==="out"?-1:1,C=A>0?u.faceRoom:-u.faceOut,T=u.opening.leaves===2,F=.02,E=m-.02,P=Yd(m,b,u.hingeAtStart,u.opening);if(P){let B=-u.faceOut-.012,k=u.faceRoom+.012,z=C-A*(S?.06:.04)/2,et=.06;for(let[G,J]of P.panels)he(n,_,G,G+et,B,k,.02,v-.02,o,a,e,y),he(n,_,J-et,J,B,k,.02,v-.02,o,a,e,y),he(n,_,G+et,J-et,B,k,.02,.12,o,a,e,y),Yi(r,_,G+et,J-et,z,.12,v-.02,hs,e,y);F=P.x0,E=P.x1}let D=T?(E-F)/2-.004:E-F,L=S?.06:.04;S&&(he(n,_,.02,m-.02,-u.faceOut-.02,u.faceRoom,0,.02,new K(fh),a,e,y),u.exterior&&he(n,_,m/2-.08,m/2+.08,-u.faceOut-.1,-u.faceOut,v+.1,v+.17,kt(mi,.55),kt(mi,.85),e,Yt));let O=R?[]:[[u.hingeAtStart,x.open]];T&&!R&&O.push([!u.hingeAtStart,x.open2??0]);for(let[B,k]of O){let z=Math.min(1,Math.max(0,k)),et=b==="sliding"?0:z*BM,G=b==="sliding"?z*D:0,J=(gt,Mt,Ot)=>{let ne=gt*Math.cos(et)-Mt*Math.sin(et)-G,zt=C+A*(Mt*Math.cos(et)+gt*Math.sin(et)+(G?.05:0));return _(B?F+ne:E-ne,zt,Ot)},it=z>.05?Yt:y,ht=w?!!x.sensed&&z<.05:z>.9,Y=ht?kt(mi,.7):new K(S?VM:kM),$=ht?kt(mi,.9):new K(S?GM:zM);b==="glass"?(he(n,J,0,.05,-L,0,.01,v-.01,Y,$,e,it),he(n,J,D-.05,D,-L,0,.01,v-.01,Y,$,e,it),he(n,J,.05,D-.05,-L,0,.01,.12,Y,$,e,it),he(n,J,.05,D-.05,-L,0,v-.08,v-.01,Y,$,e,it),Yi(r,J,.05,D-.05,-L/2,.12,v-.08,hs,e,it)):he(n,J,0,D,-L,0,.01,v-.01,Y,$,e,it),b==="front_glass"?Yi(r,J,.12,D-.12,.001,v*.55,v-.18,hs,e,it):S&&Yi(r,J,.1,.18,.001,.3,v-.3,hs,e,it);let at=Math.min(1.05,v*.5),ct=S?.3:.012,ut=S?D-.11:D-.16,pt=S?D-.08:D-.05;he(n,J,ut,pt,.004,.05,at-ct,at+ct,new K(Um),new K(Om),e,it),he(n,J,ut,pt,-L-.05,-L-.004,at-ct,at+ct,new K(Um),new K(Om),e,it)}}else if(u.opening.type==="garage"){let b=Math.min(1,Math.max(0,x.cover??1)),S=new K(13951231),A=u.faceRoom-.03,C=v*(1-b);b>.01&&Yi(s,_,.02,m-.02,A,C,v,S,e,y,.5);let T=(1-b)*v;T>.01&&WM(s,_,.02,m-.02,A,A+T,v+.03,S,y,.5)}else if(ur(u.opening,u.exterior)==="glass_wall"){he(n,_,0,.04,M-.025,M+.025,p,v,o,a,e,y),he(n,_,m-.04,m,M-.025,M+.025,p,v,o,a,e,y),he(n,_,.04,m-.04,M-.025,M+.025,p,p+.03,o,a,e,y),he(n,_,.04,m-.04,M-.025,M+.025,v-.04,v,o,a,e,y);let A=Math.max(1,Math.round((m-2*.04)/.9)),C=(m-2*.04)/A;for(let T=1;T<A;T++){let F=.04+T*C;he(n,_,F-.02,F+.02,M-.025,M+.025,p+.03,v-.04,o,a,e,y)}for(let T=0;T<A;T++){let F=.04+T*C+(T?.02:0),E=.04+(T+1)*C-(T<A-1?.02:0);Yi(r,_,F,E,M,p+.03,v-.04,hs,e,y)}}else{he(n,_,0,.06,M-.035,M+.035,p,v,o,a,e,y),he(n,_,m-.06,m,M-.035,M+.035,p,v,o,a,e,y),he(n,_,.06,m-.06,M-.035,M+.035,p,p+(p>.05?.06:.03),o,a,e,y),he(n,_,.06,m-.06,M-.035,M+.035,v-.06,v,o,a,e,y),p>.3&&(he(n,_,-.04,m+.04,M+.035,u.faceRoom+.07,p-.03,p,new K(fh),a,e,y),u.exterior&&he(n,_,-.03,m+.03,-u.faceOut-.06,M-.035,p-.04,p-.02,new K(fh),a,e,y));let A=.055,C=p+(p>.05?.06:.03),T=v-.06,F=M+.035,E=M+.035+.06,D=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:m/2,x1:u.hingeAtStart?m/2:m-.06,open:x.open,tilt:x.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?m/2:.06,x1:u.hingeAtStart?m-.06:m/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:m-.06,open:x.open,tilt:x.tilt}];for(let L of D){let O=L.open>.02||L.tilt>.02,B=w?!!x.sensed&&!O:O,k=B?kt(mi,.75):new K(NM),z=B?kt(mi,.95):a,et=L.x0,G=L.x1,J=G-et,it=L.open*OM*(u.opening.swing==="out"?-1:1),ht=L.tilt*HM,Y=(at,ct,ut)=>{let pt=ut-C,gt=ct+pt*Math.sin(ht),Mt=C+pt*Math.cos(ht),Ot=at*Math.cos(it)-(gt-F)*Math.sin(it);gt=F+(gt-F)*Math.cos(it)+at*Math.sin(it);let ne=L.atStart?et+Ot:G-Ot;return _(ne,gt,Mt)},$=Math.abs(it)>.05?Yt:y;if(he(n,Y,0,A,F,E,C,T,k,z,e,$),he(n,Y,J-A,J,F,E,C,T,k,z,e,$),he(n,Y,A,J-A,F,E,C,C+A,k,z,e,$),he(n,Y,A,J-A,F,E,T-A,T,k,z,e,$),Yi(r,Y,A,J-A,(F+E)/2,C+A,T-A,B?kt(mi,.16):hs,e,$),ur(u.opening,u.exterior)==="bars"){let at=(C+T)/2,ct=(F+E)/2;he(n,Y,A,J-A,ct-.012,ct+.012,at-.012,at+.012,k,z,e,$),he(n,Y,J/2-.012,J/2+.012,ct-.012,ct+.012,C+A,T-A,k,z,e,$)}}}if(x.cover!==null){let b=-u.faceOut,S=v+.2;he(n,_,-.05,m+.05,b-.15,b,v,S,new K(UM),a,e,y);let A=Math.min(1,Math.max(0,x.cover));if(A>.01){let C=v-A*(v-p);Yi(s,_,0,m,b-.07,C,v,new K(16777215),e,y,.045)}}l.push({id:u.opening.id,start:f,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),h.push({id:u.opening.id,start:g,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:h}}var XM=.3,km=2.6;function zm(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),h=c-l>=a-o,u=e*.7071,f=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],R=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(b=>Jt(b,i))&&!n.some(b=>R.some(S=>Jt(S,b)))},d=(M,w)=>f(h?[M,w]:[w,M]),g=(M,w)=>{let R=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let b=1;b<R;b++)if(!f([M[0]+(w[0]-M[0])*b/R,M[1]+(w[1]-M[1])*b/R]))return!1;return!0},[x,m,p,v]=h?[o,a,l,c]:[l,c,o,a],y=[],_=!0;for(let M=x+e;M<=m-e+1e-6;M+=t){let w=null,R=null,b=.05;for(let T=p;T<=v+1e-6;T+=b)if(d(M,T)&&(R??=T),(!d(M,T)||T+b>v+1e-6)&&R!==null){let F=d(M,T)?T:T-b;(!w||F-R>w[1]-w[0])&&(w=[R,F]),R=null}if(!w||w[1]-w[0]<.2)continue;let S=T=>{let[F,E]=T?w:[w[1],w[0]];return[h?[M,F]:[F,M],h?[M,E]:[E,M]]},A=S(_),C=y[y.length-1];if(C&&n.length&&!g(C,A[0])){let T=S(!_);if(!g(C,T[0]))continue;A=T,_=!_}y.push(A[0],A[1]),_=!_}return y}function ph(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var dh=i=>Math.atan2(Math.sin(i),Math.cos(i));function Vm(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=dh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),km*e),!0)}let a=Math.atan2(r,s),l=dh(a-i.heading);if(i.heading=dh(i.heading+Math.sign(l)*Math.min(Math.abs(l),km*e)),Math.abs(l)<.35){let c=Math.min(o,XM*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}var Tn=null,Gm=new Map;function Wm(i,t=0){let e=new ee,n=new Pe,r=we(i.type);if(r!=null&&r.light)Gl(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)mh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};zl(e,n,new ee,s)}return{buf:e,lines:n}}function YM(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Gm.get(r);if(s)return s;e&&Qs(e),Tn??=new lr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Tn.setSize(t,t,!1),Tn.setClearColor(0,0);let{buf:o,lines:a}=Wm(i),l=new Ei,c=new Vt(o.geometry(),new re({vertexColors:!0,color:new K(n,n,n)})),h=new Ye(a.geometry(),new Ke({vertexColors:!0,color:new K(n*1.8,n*1.8,n*1.8)}));l.add(c,h);let u=new hn().setFromObject(c),f=u.getCenter(new H),d=new Xn(-1,1,1,-1,.01,100);d.position.copy(f).add(new H(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(f),d.updateMatrixWorld();let g=.05;for(let p of[u.min.x,u.max.x])for(let v of[u.min.y,u.max.y])for(let y of[u.min.z,u.max.z]){let _=new H(p,v,y).applyMatrix4(d.matrixWorldInverse);g=Math.max(g,Math.abs(_.x),Math.abs(_.y))}let x=g*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),Tn.render(l,d);let m=Tn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose(),Gm.set(r,m),m}function qM(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=Hm.get(s);if(o)return o;n&&Qs(n);let{buf:a,lines:l}=Wm(i,t),c=new Vt(a.geometry(),new re({vertexColors:!0,color:new K(r,r,r)})),h=new Ye(l.geometry(),new Ke({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)})),u=new hn().setFromObject(c);if(u.isEmpty())return null;let f=u.min.x,d=u.max.x,g=Math.max(0,u.min.y),x=u.max.y,m=Math.max(1,Math.min(1024,Math.round((d-f)*e))),p=Math.max(1,Math.min(1024,Math.round((x-g)*e)));Tn??=new lr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Tn.setPixelRatio(1),Tn.setSize(m,p,!1),Tn.setClearColor(0,0);let v=new Ei;v.add(c,h);let y=new Xn(f,d,x,g,.01,100);y.position.set(0,0,50),y.lookAt(0,0,0),y.updateProjectionMatrix(),Tn.render(v,y);let _=Tn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),h.geometry.dispose(),h.material.dispose();let M={url:_,x0:f,x1:d,y0:g,y1:x};return Hm.set(s,M),M}var Hm=new Map;var eR={Group:ke,Mesh:Vt,MeshBasicMaterial:re,CanvasTexture:li,Color:K,PlaneGeometry:ci,BufferGeometry:Zt,Float32BufferAttribute:Gt,DoubleSide:de},Ym={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},$M=2.4,qm=1.4,ZM=.22,$m=.94,Zm=140,xh=32,KM=500,Km=160,Jm=33,jm=.028,JM=.09,se=2767456,jM=1911110,QM=1,Qm=new Set(["ceiling","downlight","spot","panel","pendant","strip"]),nc=450,t0=125,tS=.08,bh={ceiling:[.4,.4,.08],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},eS=new K(1714765);function nS(){let t=navigator.deviceMemory??8,e=navigator.hardwareConcurrency||8;return t<=3||e<=4||/Silk|KF[A-Z]{2,4}\b/.test(navigator.userAgent)}var vh=class{host;options;renderer;scene=new Ei;camera=new rn(38,1,.1,400);controls;labels;root=new ke;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ye(new Zt,new Ke({color:10471679,transparent:!0,opacity:.4,blending:Le,depthWrite:!1}));snow=new Xr(new Zt,new nr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Vt(new Cs(1,28),new re({color:16767370,transparent:!0,opacity:0,blending:Le,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=rS(),this.blindTexture=oS(),this.haloTexture=lS(),this.ground=new Vt(new ci(1,1),new re({transparent:!1,blending:Le,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility),typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Qs(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.building=t,Ud(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setFloor(t,e=!0){this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(h=>h.floor.rooms.some(u=>u.id===t)),n=e==null?void 0:e.floor.rooms.find(h=>h.id===t);if(!e||!n)return;let r=n.start_view;if(r){let h=e.floor.elevation+e.ty,[u,f]=hr(n.points),d=r.target??{x:u,y:.3,z:f};this.controls.flyTo({target:new H(d.x,d.y+h,d.z),radius:r.radius,phi:r.phi,theta:r.theta});return}let[s,o]=hr(n.points),a=n.points.map(h=>h[0]),l=n.points.map(h=>h[1]),c=new H(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new H(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(h=>Math.round(h*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){var n;this.solarLevels=t;let e=!1;for(let r of((n=this.roof)==null?void 0:n.lives)??[])yo(r,t)&&(e=!0);for(let r of this.floors)r.solarLive&&yo(r.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>{var s;return`${r.id}:${r.floorId}:${r.points.length}:${(s=r.points[0])==null?void 0:s.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`}).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(Tm(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=wm(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){var n,r,s;let e=o=>o.map(a=>`${a.id}:${a.floorId}:${a.x},${a.z}:${a.level.toFixed(2)}:${a.playing?1:0}:${a.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(o=>o.playing);for(let o of this.floors){let a=o.soundGroup??=(()=>{let f=new ke;return f.renderOrder=6,o.group.add(f),f})();for(let f of[...a.children])a.remove(f),(n=f.geometry)==null||n.dispose(),(s=(r=f.material)==null?void 0:r.dispose)==null||s.call(r);let l=t.filter(f=>f.floorId===o.floor.id),c=.03;for(let f of l)if(f.playing)for(let d=0;d<3;d++){let g=new Vt(new Ds(.92,1,48),new re({color:3662079,transparent:!0,opacity:0,blending:Le,depthWrite:!1,side:de}));g.rotation.x=-Math.PI/2,g.position.set(f.x,c+d*.002,f.z),g.userData={sound:!0,phase:d/3,level:f.level},g.frustumCulled=!1,a.add(g)}let h=[],u=new Set;for(let f of l)for(let d of f.members){let g=l.find(m=>m.id===d);if(!g||g===f)continue;let x=[f.id,g.id].sort().join("|");u.has(x)||(u.add(x),h.push(f.x,c+.02,f.z,g.x,c+.02,g.z))}if(h.length){let f=new Zt;f.setAttribute("position",new Gt(h,3));let d=new Ye(f,new Ke({color:3662079,transparent:!0,opacity:.45,blending:Le,depthWrite:!1}));d.userData={soundLine:!0},a.add(d)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=gh(r),o=e0(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ee;for(let s of e)_m(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(r||(r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id,this.personPins.set(n.id,r),this.labels.append(r)),r.title=n.name,r.setAttribute("aria-label",n.name),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials)if(r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.replaceChildren(),n.picture){let s=document.createElement("img");s.src=n.picture,s.alt="",s.addEventListener("error",()=>s.replaceWith(document.createTextNode(n.initials))),r.append(s)}else r.textContent=n.initials}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=Rm(t),n=e?1:0;n===Ql.value&&(!e||jl.value.equals(new H(...e)))||(Ql.value=n,e&&jl.value.set(...e),this.invalidate())}setTheme(t){if(t===this.theme)return;this.theme=t,this.themeUniform.value=Am(t);let e=Mo(t),n=[...this.floors.map(r=>r.materials.lines),...this.roof?[this.roof.lines]:[]];for(let r of n)r.blending=e,r.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new K(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new ws(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){let r=t.geometry.getAttribute("position");if(((r==null?void 0:r.count)??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let h=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),f=s.z0+Math.random()*(s.z1-s.z0);o.set([h,u,f],c*3),n&&o.set([h,u-.45,f],c*3+3)}t.geometry.dispose();let l=new Zt;l.setAttribute("position",new Gt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let h=0;h<l.length;h+=6){let u=l[h+1]-c,f=l[h]+o*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u,l[h+3]=f-o*.05,l[h+4]=u-.45,l[h+5]=l[h+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let h=0;h<l.length;h+=3){let u=l[h+1]-(.9+.6*e.snow)*n,f=l[h]+(o+Math.sin(c+h)*.4)*n;u<r.y0&&(u+=s,f=r.x0+Math.random()*(r.x1-r.x0)),f>r.x1&&(f-=r.x1-r.x0),l[h]=f,l[h+1]=u}a.needsUpdate=!0}return!0}placeSky(){var d;let t=this.sun,e=this.weather,n=(e==null?void 0:e.cloud)??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(((d=this.building)==null?void 0:d.settings.north)??0)*ue,o=(r?t.azimuth+180:t.azimuth)*ue,a=Math.max(10,Math.abs(t.elevation))*ue,l=this.weatherBox,c=new H((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),h=Math.min(300,Math.max(80,this.houseRadius*5)),u=new H(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(u,h),this.skyDisc.scale.setScalar(h*(r?.03:.04)),this.skyDisc.lookAt(c);let f=this.skyDisc.material;f.color.set(r?13621486:16767370),f.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){var e,n;this.floorInfo=t;for(let r of this.floors){let s=r.label.querySelector("span"),o=t.get(r.floor.id)??((n=(e=this.options).floorInfo)==null?void 0:n.call(e,r.floor))??"";s&&s.textContent!==o&&(s.textContent=o,r.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??So,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/Km),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){var n,r;let e=new ee;for(let s of t.floor.furniture){if(s.type!=="fridge_smart")continue;let o=this.fridges.get(s.id);Fp(e,s,je(t.floor,s),(o==null?void 0:o.l)??0,(o==null?void 0:o.r)??0)}for(let s of t.floor.furniture)s.type==="awning"&&Lp(e,s,je(t.floor,s),((n=this.awnings.get(s.id))==null?void 0:n.cur)??0);for(let s of t.floor.furniture){let o=Al(s.type),a=o?we(s.type):void 0;o&&a&&Op(e,a,o,s,je(t.floor,s),((r=this.awnings.get(s.id))==null?void 0:r.cur)??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}dispose(){var t,e,n,r,s;this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let o of[this.rain,this.snow,this.skyDisc])o.geometry.dispose(),o.material.dispose();this.resizeObserver.disconnect(),(t=this.intersection)==null||t.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility),this.controls.dispose(),this.clear(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),(e=this.groundTexture)==null||e.dispose(),this.haloTexture.dispose();for(let o of this.robots.values())o.led.dispose();this.robots.clear(),(n=this.robotGeo)==null||n.dispose(),(r=this.robotLedGeo)==null||r.dispose(),(s=this.robotMat)==null||s.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&nS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new lr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=De,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Jl(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>{var e,n;return this.swipe&&((n=(e=this.options).onDeviceSwipe)==null?void 0:n.call(e,this.swipe.entity,"move",t,this.swipe.x,this.swipe.y))},swipeEnd:()=>{var t,e;this.swipe&&((e=(t=this.options).onDeviceSwipe)==null||e.call(t,this.swipe.entity,"end",0,this.swipe.x,this.swipe.y)),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{var r,s;let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):(s=(r=this.options).onBack)==null||s.call(r)}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}clear(){var t;for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let n of e.screenPics.values())n.mesh.material.dispose(),(t=n.texture)==null||t.dispose();e.group.traverse(n=>{let r=n.geometry;r==null||r.dispose()});for(let n of Object.values(e.materials))n.dispose();this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",h=>{if(this.furnish){this.pendingDevice=t;return}h.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{var d,g;l=!0;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();(g=(d=this.options).onDeviceHold)==null||g.call(d,t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)},KM)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",h=>h.preventDefault()),e.addEventListener("click",h=>{var d,g,x,m;if(h.stopPropagation(),this.furnish){this.selectDevice(t),(g=(d=this.options).onDeviceSelect)==null||g.call(d,t);return}if(l)return;let u=e.getBoundingClientRect(),f=this.host.getBoundingClientRect();(m=(x=this.options).onDeviceTap)==null||m.call(x,t,u.left+u.width/2-f.left,u.top+u.height/2-f.top)}),e.addEventListener("keydown",h=>{var u,f;if(h.key==="Enter"&&h.shiftKey||h.key==="ContextMenu"){h.preventDefault();let d=e.getBoundingClientRect(),g=this.host.getBoundingClientRect();(f=(u=this.options).onDeviceHold)==null||f.call(u,t,d.left+d.width/2-g.left,d.top+d.height/2-g.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Pm(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=n0(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=tc(r,a.ra),a.rb=tc(r,a.rb)}t.lightSurface=n;let s=new Zt;s.setAttribute("position",new Gt(n.pos,3)),s.setAttribute("color",new Gt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Gt(n.fold,1));let o=new tr(new Uint32Array(n.pos.length/3),1);o.setUsage(ou),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Fm(t.floor,n.x,n.z),a=tc(t.lightZones,o),[l,,c]=n.size??(n.lamp?bh[n.lamp]:[.3,.3,.3]),h=n.base??0,u={ceiling:[s-.12,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],floor:[h+c-.15,"omni"],uplight:[h+c,"up"],table:[h+c-.1,"omni"],wall:[h+.1,"wall"],strip:[h+Math.max(.02,c)-.01,h<QM?"up":"ceiling"],bollard:[h+c-.08,"ceiling"],garden:[h+c,"up"]},[f,d]=n.lamp?u[n.lamp]:[n.y,"omni"],g=n.lightY??f,x=r.color;if(n.lamp==="strip"){let m=(n.rotation??0)*ue,p=!!n.upright||Math.abs(n.roll??0)>45;for(let v of[-1/3,0,1/3])n.upright?e.push({x:n.x,y:h+l*(.5+v),z:n.z,color:x,level:r.level*.55,kind:"omni",room:a}):e.push({x:n.x+Math.cos(m)*l*v,y:g,z:n.z+Math.sin(m)*l*v,color:x,level:r.level*.55,kind:p?"omni":d,room:a})}else e.push({x:n.x,y:g,z:n.z,color:x,level:r.level,kind:d,room:a})}return e}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(u=>{let f=t.geo.openings.find(g=>g.opening.id===u.id);if(f&&ur(f.opening,f.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(f=>f.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Lm(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let f=0;f<e.room.length;f++)if(e.room[f]!==u)for(let d=0;d<3;d++)l[f*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,h=0;for(let u=0;u<l.length/18;u++){let f=!1;for(let d=u*18;d<u*18+18&&!f;d++)f=l[d]>.004;if(f)for(let d=0;d<6;d++)c[h++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,h),t.glowMesh.visible=h>0}makeMaterials(t){return{floor:cn(new re({vertexColors:!0}),this.themeUniform),pattern:sS(this.patternTexture),wall:cn(Xi(new re({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:Xi(new re({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new re({vertexColors:!0,blending:zs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:de,polygonOffset:!0,polygonOffsetFactor:-1}),lines:cn(Xi(new Ke({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:Xi(new re({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:cn(Xi(new re({vertexColors:!0,side:de}),t),this.themeUniform),glass:Xi(new re({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de}),t),blinds:cn(Xi(new re({map:this.blindTexture,vertexColors:!0,side:de}),t),this.themeUniform),water:cn(new re({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:de}),this.themeUniform),flow:aS(this.flowTime),solarLive:hh(this.flowTime),lamps:cn(new re({vertexColors:!0}),this.themeUniform),halos:new nr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1}),cones:new re({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de}),screens:new re({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de}),earth:cn(new re({vertexColors:!0}),this.themeUniform),earthWell:cn(new re({vertexColors:!0,side:de}),this.themeUniform),earthLines:cn(new Ke({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){var s,o,a,l;let t=new Map(this.floors.map(c=>[c.floor.id,{y:c.y,o:c.o}])),e=new Map(this.floors.map(c=>[c.floor.id,c.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((c,h)=>c.elevation-h.elevation);for(let c of n.floors){let h=((s=n.settings.roof)==null?void 0:s.solar)??[],u=((o=Qu(n))==null?void 0:o.id)===c.id?h.filter(gt=>gt.face===ju).map(gt=>({field:gt,face:Hp(n,gt)})):[],f=h.filter(gt=>gt.face.startsWith(`wall:${c.id}:`));if(f.length){let gt=new Map(Gp(n,c.id).map(Mt=>[Mt.key,Mt]));for(let Mt of f){let Ot=gt.get(Mt.face);Ot&&u.push({field:Mt,face:Ot})}}let g=(n.settings.roof.sections??[]).some(gt=>tp(gt,c.elevation+c.height))?(gt,Mt)=>{let Ot=ep(n,gt,Mt);return Ot===null?null:Ot-c.elevation}:void 0,x=im(ch(c,this.parked),n.settings.wall_exterior,n.settings.wall_interior,rm(n.floors,c),u,g),m={standing:{value:65535},glass:{value:0}},p=this.makeMaterials(m),v=new ke,y=new Vt(x.floor,p.floor),_=new Vt(x.shadow,p.shadow);_.renderOrder=1;let M=new Vt(x.floor,p.pattern);M.renderOrder=2;let w=new Vt(new Zt,p.glow);w.renderOrder=3,w.visible=!1;let R=new Vt(new Zt,p.frames),b=new Vt(new Zt,p.blinds),S=new Vt(new Zt,p.glass);S.renderOrder=4;let A=new Vt(new Zt,p.lamps);A.visible=!1;let C=new Vt(new Zt,p.cones);C.visible=!1,C.renderOrder=3;let T=new Xr(new Zt,p.halos);T.visible=!1,T.renderOrder=7;let F=new Vt(new Zt,p.cones);F.visible=!1,F.renderOrder=7;let E=new Vt(new Zt,p.cones);E.visible=!1,E.renderOrder=7;let P=new Vt(new Zt,p.lamps);P.visible=!1;let D=new Vt(new Zt,p.lamps);D.visible=!1;let L=new Vt(new Zt,p.screens);L.visible=!1,L.renderOrder=5;let O=new Vt(new Zt,p.flow);O.renderOrder=5,O.frustumCulled=!1;let B=uh(u,c.elevation),k=B?new Vt(B.geometry,p.solarLive):null;k&&(k.renderOrder=6,yo(B,this.solarLevels));for(let gt of[R,b,S])gt.frustumCulled=!1;let z=new Vt(x.walls,p.glassWall),et=new Vt(x.walls,p.wall);z.renderOrder=6;let G=new Vt(x.water,p.water);G.renderOrder=4;let J=Math.min(...n.floors.filter(gt=>gt.rooms.length).map(gt=>gt.elevation)),it=lm(n,c,x.openings,c.elevation===J),ht=it?[new Vt(it.earth.geometry(),p.earth),new Vt(it.wells.geometry(),p.earthWell),new Ye(it.lines.geometry(),p.earthLines)]:[];for(let gt of ht)gt.userData.earth=!0;v.add(y,_,M,w,et,G,new Ye(x.lines,p.lines),R,b,S,O,A,C,T,F,E,P,D,L,z,...k?[k]:[],...ht),this.root.add(v);let Y=document.createElement("button");Y.className="fp3d-pin fp3d-pin-floor",Y.dataset.floor=c.id;let $=document.createElement("b");$.textContent=c.name||"\u2013";let at=document.createElement("span");at.textContent=this.floorInfo.get(c.id)??((l=(a=this.options).floorInfo)==null?void 0:l.call(a,c))??"",Y.append($,at),Y.addEventListener("click",()=>{var gt,Mt;return(Mt=(gt=this.options).onFloorTap)==null?void 0:Mt.call(gt,c.id)}),this.labels.append(Y);let ct=t.get(c.id),ut=[],pt=null;for(let gt of c.rooms){let Mt=document.createElement("button");Mt.className="fp3d-pin",Mt.dataset.room=gt.id,Mt.dataset.floor=c.id,this.fillRoomPin(Mt,gt.name,this.roomInfo.get(gt.id)),Mt.addEventListener("click",()=>{var zt,fe;return(fe=(zt=this.options).onRoomTap)==null?void 0:fe.call(zt,c.id,gt.id)}),this.labels.append(Mt);let[Ot,ne]=hr(gt.points);ut.push({pin:Mt,room:gt,cx:Ot,cz:ne});for(let[zt,fe]of gt.points)pt??={x0:zt,x1:zt,z0:fe,z1:fe},pt.x0=Math.min(pt.x0,zt),pt.x1=Math.max(pt.x1,zt),pt.z0=Math.min(pt.z0,fe),pt.z1=Math.max(pt.z1,fe)}this.floors.push({floor:c,rank:r.indexOf(c),group:v,geo:x,floorMesh:y,shadowMesh:_,patternMesh:M,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:R,glassMesh:S,blindsMesh:b,flowMesh:O,solarMesh:k,solarLive:B,lampMesh:A,sunMesh:C,sunSig:"",haloMesh:T,coneMesh:F,trailMesh:E,fridgeMesh:P,pipeMesh:D,pipeSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:et,screenMesh:L,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:pt,roomPins:ut,labelSize:null,materials:p,mask:m,openings:new Map,y:(ct==null?void 0:ct.y)??0,o:(ct==null?void 0:ct.o)??1,ty:0,to:1,appliedO:-1,label:Y})}this.floorMap=new Map(this.floors.map(c=>[c.floor.id,c]));for(let c of this.floors)this.buildFridges(c),this.buildPipes(c);this.labelsDirty=!0,this.floorId&&!n.floors.some(c=>c.id===this.floorId)&&(this.floorId=null);for(let c of this.floors){this.buildLamps(c),this.buildScreens(c);let h=e.get(c.floor.id);for(let u of c.geo.openings)c.openings.set(u.opening.id,(h==null?void 0:h.get(u.opening.id))??this.openingTargets.get(u.opening.id)??So);this.buildOpenings(c),this.buildFlows(c),c.poolGroup=void 0,this.buildPoolWater(c),this.buildLightSurface(c),this.buildSun(c)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){var x;this.roof&&(this.roof.group.traverse(m=>{var p;return(p=m.geometry)==null?void 0:p.dispose()}),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(m=>{var p;return(p=m.geometry)==null?void 0:p.dispose()}),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?jp(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(vr(this.building).map(m=>[m.key,m])),n=((x=this.building.settings.roof)==null?void 0:x.solar)??[],r=hh(this.flowTime),s=[],o=new ke,a=cn(new re({vertexColors:!0,transparent:!0,side:de}),this.themeUniform),l=cn(new Ke({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1}),this.themeUniform,!0),c=cn(new re({vertexColors:!0,transparent:!0,side:de,depthWrite:!1}),this.themeUniform),h=new ke,u=cn(new re({vertexColors:!0,side:de}),this.themeUniform),f=cn(new Ke({vertexColors:!0,transparent:!0,blending:Mo(this.theme),depthWrite:!1}),this.themeUniform,!0),d=[],g=t.map(m=>{var M,w;let p=new ke;p.add(new Vt(m.solid.geometry(),a),new Ye(m.lines.geometry(),l)),m.glass.count&&p.add(new Vt(m.glass.geometry(),c));let v=n.flatMap(R=>{var A;let b=e.get(R.face);return b&&(b.section?(A=m.sections)==null?void 0:A.includes(b.section):m===t[0])?[{face:b,field:R}]:[]}),y=uh(v,m.floor.elevation+m.base);if(y){let R=new Vt(y.geometry,r);R.renderOrder=9,p.add(R),s.push(y),yo(y,this.solarLevels)}(M=m.winRoof)!=null&&M.solid.count&&p.add(new Vt(m.winRoof.solid.geometry(),u),new Ye(m.winRoof.lines.geometry(),f)),p.renderOrder=8,o.add(p);let _=null;(w=m.win)!=null&&w.solid.count&&(_=new ke,_.add(new Vt(m.win.solid.geometry(),u),new Ye(m.win.lines.geometry(),f)),h.add(_));for(let[R,b]of m.winBelow??[]){if(!b.solid.count)continue;let S=new ke;S.add(new Vt(b.solid.geometry(),u),new Ye(b.lines.geometry(),f)),h.add(S),d.push({floorId:R,win:S})}return{group:p,floorId:m.floor.id,rideId:lp(this.building,m.floor,m.sections??[]),base:m.base,lift:m.lift!==!1,win:_}});o.renderOrder=8,this.scene.add(o),this.scene.add(h),this.roof={group:o,parts:g,below:d,solid:a,lines:l,glass:c,live:r,lives:s,wins:h,winSolid:u,winLines:f},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/$m)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"?$m*n:0,o=1-Math.exp(-t/Zm),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let h=this.floorMap.get(l.rideId)??c,u=h.ty>0?Math.min(1,h.y/h.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+h.y+l.base+this.roofLift()+(l.lift?u*qm:0),l.win&&(l.win.position.y=c.floor.elevation+h.y+l.base+(l.lift?u*qm:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:ZM)):r=this.explode?n.rank*$M:0,n.ty=r,n.to=s;let a=e===n?Je:Yn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Zm);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/Km);for(let r of this.floors){let s=!1;for(let[o,a]of r.openings){let l=this.openingTargets.get(o)??So,c=(f,d)=>(f??null)===(d??null)||typeof f=="number"&&typeof d=="number"&&Math.abs(f-d)<.003;if(c(l.open,a.open)&&c(l.open2??0,a.open2??0)&&c(l.tilt,a.tilt)&&c(l.tilt2??0,a.tilt2??0)&&c(l.cover,a.cover)&&!!l.sensed==!!a.sensed)continue;let h={...a,open2:a.open2??0,tilt2:a.tilt2??0,sensed:l.sensed},u=!1;for(let f of["open","open2","tilt","tilt2"]){let d=l[f]??0,g=a[f]??0,x=d-g;Math.abs(x)<.003?h[f]=d:(h[f]=g+x*n,u=!0)}if(l.cover===null||a.cover===null)h.cover=l.cover;else{let f=l.cover-a.cover;Math.abs(f)<.003?h.cover=l.cover:(h.cover=a.cover+f*n,u=!0)}(h.open!==a.open||h.open2!==(a.open2??0)||h.tilt!==a.tilt||h.tilt2!==(a.tilt2??0)||h.cover!==a.cover||!!h.sensed!=!!a.sensed)&&(r.openings.set(o,h),s=!0),e||=u}s&&(this.buildOpenings(r),this.buildGlow(r),this.buildSun(r))}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new K(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*tS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let f=u-e,d=f>nc?.5+.5*Math.sin(f/140):f/nc;return Math.round(d*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>{var u;return`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${(u=h.size)==null?void 0:u.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0}`}).join(";"),o=r.map(h=>this.glowOf(h)),a=r.map((h,u)=>`${n(h.id)},${o[u]?`${o[u].level.toFixed(3)},${o[u].color.map(f=>f.toFixed(3)).join("/")}`:"off"}`).join(";");if(s!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=s,t.lampColorSig="";let h=new ee,u=[],f=[],d=new Map,g=t.floor.height;for(let x of r){let m=x.lamp==="strip"?(x.base??g)>Math.min(t.floor.cut_height,g):x.lamp?Qm.has(x.lamp)&&(x.top??g)>Math.min(t.floor.cut_height,g):x.model==="camera_ceiling";if(!x.lamp&&!x.model||m&&this.wallMode==="cut")continue;let p=h.count,v=x.pack?we(x.pack):void 0,[y,_,M]=x.size??[.3,.3,.3];x.model?Up(h,x.model,x.x,x.model==="camera_ceiling"?g:x.y,x.z,x.rotation??0):v?Gl(h,v,{x:x.x,z:x.z,rotation:x.rotation??0,w:y,d:_,h:M,mirror:x.mirror},x.base??0,65280):mh(h,{...x,lamp:x.lamp},x.top??g,65280),d.set(x.furnitureId??x.id,{start:p,end:h.count}),x.pickable!==!1&&u.push({id:x.id,start:p,end:h.count}),x.furnitureId&&f.push({id:x.furnitureId,start:p,end:h.count})}t.lampTris=u,t.lampFurnTris=f,t.lampRanges=d,t.lampShade=Rd(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(a===t.lampColorSig)return;t.lampColorSig=a;let l=t.lampMesh.geometry.getAttribute("color"),c=l.array;r.forEach((h,u)=>{let f=t.lampRanges.get(h.furnitureId??h.id);if(!f)return;let d=o[u],g=d?.55+.45*d.level:0,x=d?new K(...d.color.map(v=>Math.min(1,v*g))):new K(jM),m=n(h.id);m>0&&x.lerp(new K(1,1,1),.7*m);let p=new K(x.getHex());Cd(c,t.lampShade,f,[p.r,p.g,p.b])}),l.needsUpdate=!0,this.buildHalos(t)}buildSun(t){var l,c,h,u,f;let e=((l=this.building)==null?void 0:l.settings.sun_patches)===!1?null:this.sun,n=(((c=this.building)==null?void 0:c.settings.north)??0)*ue,r=((h=this.weather)==null?void 0:h.cloud)??0,s=n0(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(d=>(d.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(((f=(u=this.building)==null?void 0:u.settings.roof)==null?void 0:f.windows)??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&r<.97){let d=Math.min(1,e.elevation/12)*(1-.8*r),g=e.elevation*ue,x=e.azimuth*ue,m=[Math.sin(n+x),-Math.cos(n+x)],p=1/Math.tan(g);for(let v of t.geo.openings){if(v.opening.type!=="window"||!v.exterior)continue;let y=[-v.toRoom[0],-v.toRoom[1]],_=y[0]*m[0]+y[1]*m[1];if(_<.05)continue;let M=t.openings.get(v.opening.id),w=v.top-((M==null?void 0:M.cover)??0)*(v.top-v.sill);if(w-v.sill<.05)continue;let R=(D,L)=>{let O=Math.min(7,L*p);return[v.start[0]+v.axis[0]*D+v.toRoom[0]*v.faceRoom-m[0]*O,.02,v.start[1]+v.axis[1]*D+v.toRoom[1]*v.faceRoom-m[1]*O]},b=.14*d*Math.min(1,_*1.5),S=new K(1*b,.82*b,.55*b),A=S.clone().multiplyScalar(.45),C=t.floor.rooms.findIndex(D=>D.id===v.opening.room_id);if(C<0||t.floor.rooms[C].points.length<3)continue;let T=s[C],F=t.floor.rooms.filter((D,L)=>s[L]===T&&D.points.length>=3).map(D=>D.points),E=Math.max(1,Math.ceil(Math.min(7,w*p)/.25)),P=Math.max(1,Math.ceil(v.width/.3));for(let D=0;D<E;D++){let L=v.sill+(w-v.sill)*D/E,O=v.sill+(w-v.sill)*(D+1)/E,B=D/E,k=(D+1)/E,z=S.clone().lerp(A,B),et=S.clone().lerp(A,k);for(let G=0;G<P;G++){let J=v.width*G/P,it=v.width*(G+1)/P,ht=R((J+it)/2,(L+O)/2);if(!F.some(ut=>Jt([ht[0],ht[2]],ut)))continue;let Y=R(J,L),$=R(it,L),at=R(it,O),ct=R(J,O);a.tri(Y,$,at,z,z,et),a.tri(Y,at,ct,z,et,et)}}}this.pushRoofSun(t,a,s,m,g,d)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){var u,f;let a=this.building,l=((u=a==null?void 0:a.settings.roof)==null?void 0:u.windows)??[];if(!a||!l.length)return;let c=new Map(vr(a).map(d=>[d.key,d])),h=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let d of l){let g=c.get(d.face),x=Yl(a,g,d);if(!g||!x||x.floor.id!==t.floor.id)continue;let m=g.n[0]*h[0]+g.n[1]*h[1]+g.n[2]*h[2],[p,v,y,_]=x.corners,M=Math.min(1,((f=this.roofWindows.get(d.id))==null?void 0:f.cover)??0);if(M>.95)continue;let w=(D,L,O)=>[D[0]+(L[0]-D[0])*O,D[1]+(L[1]-D[1])*O,D[2]+(L[2]-D[2])*O],R=w(_,p,M),b=w(y,v,M),S=t.floor.rooms.findIndex(D=>D.id===x.roomId);if(S<0)continue;let A=t.floor.rooms.filter((D,L)=>n[L]===n[S]&&D.points.length>=3).map(D=>D.points),C=(D,L)=>{let O=(k,z)=>w(w(D[0],D[1],k),w(D[3],D[2],k),z);for(let k=0;k<6;k++)for(let z=0;z<6;z++){let et=O((k+.5)/6,(z+.5)/6);if(!A.some(Y=>Jt([et[0],et[2]],Y)))continue;let G=O(k/6,z/6),J=O((k+1)/6,z/6),it=O((k+1)/6,(z+1)/6),ht=O(k/6,(z+1)/6);e.tri(G,J,it,L,L,L),e.tri(G,it,ht,L,L,L)}},T=D=>[D[0],.019,D[2]],F=.06*o;if(C([T(p),T(v),T(b),T(R)],new K(.75*F,.85*F,1*F)),m<.05)continue;let E=D=>{let L=Math.min(7,(D[1]-t.floor.elevation)/Math.tan(s));return[D[0]-r[0]*L,.02,D[2]-r[1]*L]},P=.16*o*Math.min(1,m*1.5);C([E(p),E(v),E(b),E(R)],new K(1*P,.84*P,.6*P))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let v=(l.rotation??0)*ue,y=[-Math.sin(v),Math.cos(v)],_=l.model==="camera_ceiling",M=l.reach??(_?3:4.5),w=(l.fov??(_?360:90))*ue/2,R=l.motion?new K(.9,.12,.16):new K(.04,.22,.28),b=new K(0,0,0),S=Math.max(4,Math.round(w/.15)),A=.015,C=t.geo.walls2d,T=L=>{let O=L.b[0]-L.a[0],B=L.b[1]-L.a[1],k=O*O+B*B||1,z=Math.max(0,Math.min(1,((l.x-L.a[0])*O+(l.z-L.a[1])*B)/k));return Math.hypot(l.x-(L.a[0]+O*z),l.z-(L.a[1]+B*z))},F=null;for(let L of C)T(L)<.45&&(!F||T(L)<T(F))&&(F=L);let E=L=>{let O=y[0]*Math.cos(L)-y[1]*Math.sin(L),B=y[1]*Math.cos(L)+y[0]*Math.sin(L),k=M;for(let z of C){let et=z.b[0]-z.a[0],G=z.b[1]-z.a[1],J=O*G-B*et;if(Math.abs(J)<1e-9)continue;let it=((z.a[0]-l.x)*G-(z.a[1]-l.z)*et)/J,ht=((z.a[0]-l.x)*B-(z.a[1]-l.z)*O)/J;z===F&&it<=.45||it>.02&&it<k&&ht>=0&&ht<=1&&(k=it)}return k},P=L=>{let O=E(L);return[l.x+(y[0]*Math.cos(L)-y[1]*Math.sin(L))*O,A,l.z+(y[1]*Math.cos(L)+y[0]*Math.sin(L))*O]},D=s.count;for(let L=0;L<S;L++)s.tri([l.x,A,l.z],P(-w+2*w*(L+1)/S),P(-w+2*w*L/S),R,b,b);o.push({id:l.id,start:D,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Qm.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let h=l.top??e,[u,f,d]=l.size??bh[l.lamp],g=l.base??0,x=(l.rotation??0)*ue,m={ceiling:h-.07,downlight:h-.03,spot:h-d,panel:h-.03,pendant:Math.max(.4,h-d)+.08,floor:g+d-.15,uplight:g+d,table:g+d-.09,wall:g+d/2,strip:g+Math.max(.02,d)-.01,bollard:g+d-.08,garden:g+d-.03}[l.lamp],p=(v,y,_=1)=>{n.push(v,m,y),r.push(...c.color.map(M=>M*c.level*.7*_))};if(l.lamp==="strip")for(let v of[-.4,-.13,.13,.4])l.upright?(n.push(l.x,g+u*(.5+v),l.z),r.push(...c.color.map(y=>y*c.level*.7*.6))):p(l.x+Math.cos(x)*u*v,l.z+Math.sin(x)*u*v,.6);else l.lamp==="wall"?p(l.x-Math.sin(x)*(f/2+.05),l.z+Math.cos(x)*(f/2+.05)):p(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let v=new K(...c.color.map(R=>R*.09*c.level)),y=new K(0,0,0),_=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let R=0;R<w;R++){let b=R/w*Math.PI*2,S=(R+1)/w*Math.PI*2,A=[l.x+Math.cos(b)*_,m,l.z+Math.sin(b)*_],C=[l.x+Math.cos(S)*_,m,l.z+Math.sin(S)*_],T=[l.x+Math.cos(b)*M,.02,l.z+Math.sin(b)*M],F=[l.x+Math.cos(S)*M,.02,l.z+Math.sin(S)*M];s.tri(A,T,F,v,y,y),s.tri(A,F,C,v,y,v)}}}let a=new Zt;a.setAttribute("position",new Gt(n,3)),a.setAttribute("color",new Gt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=ch(t.floor,this.parked).furniture.filter(s=>this.screens.has(s.id)),n=e.map(s=>`${s.id}:${s.x},${s.z},${s.rotation},${s.w},${s.d},${s.h},${s.mount_y??""},${s.mirror?1:0}:${JSON.stringify(this.screens.get(s.id))}`).join(";");if(n===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=n;let r=new ee;for(let s of e){let o=this.screens.get(s.id),a=s.rotation*ue,l=Math.cos(a),c=Math.sin(a),h=(_,M,w)=>[s.x+_*l-w*c,M,s.z+_*c+w*l];if(o.keys){let _=je(t.floor,s)-Oi(s),M=s.mirror?-1:1,w=new K(0,0,0);Dp(s).forEach((R,b)=>{let S=o.keys[b];if(!S)return;let A=new K(...S),C=A.clone().multiplyScalar(.45),T=R.x*M,F=R.y+_,E=.005,P=.016,D=[h(T-E,F-E,R.z),h(T+E,F-E,R.z),h(T+E,F+E,R.z),h(T-E,F+E,R.z)],L=[h(T-P,F-P,R.z+.001),h(T+P,F-P,R.z+.001),h(T+P,F+P,R.z+.001),h(T-P,F+P,R.z+.001)];r.tri(D[0],D[1],D[2],A),r.tri(D[0],D[2],D[3],A);for(let O=0;O<4;O++){let B=(O+1)%4;r.tri(D[O],L[O],L[B],C,w,w),r.tri(D[O],L[B],D[B],C,w,C)}});continue}if(o.faces){let _=Math.max(.05,s.w)*(s.mirror?-1:1),M=Math.max(.05,s.d),w=Math.max(.005,s.h),R=je(t.floor,s);for(let b of o.faces){if(b.part==="lights"){let B=we(s.type),k=z=>["#e8f4ff","#ff3b4f"].includes(z.color.toLowerCase());if(B&&B.parts.some(k)){let z=new K(...b.color.map(et=>Math.min(1,et*(.4+.6*b.level))));co(r,B,s,R,z.getHex(),k)}continue}if(b.part==="cabin"){let B=we(s.type),k=z=>z.color.toLowerCase()==="#13283a"||z.color==="glass";if(B&&B.parts.some(k)){let z=new K(...b.color.map(et=>Math.min(1,et*(.3+.5*b.level))));co(r,B,s,R,z.getHex(),k);continue}}if(b.part==="burners"&&we(s.type)){let B=we(s.type),k=new K(...b.color.map(z=>Math.min(1,z*(.25+.6*b.level))));co(r,B,s,R,k.getHex(),Pd);continue}if(b.part==="burners"){let B=new K(...b.color.map(z=>Math.min(1,z*(.25+.6*b.level)))),k=R+w+.008;for(let[z,et,G]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let J=z*Math.abs(_)/.6,it=et*M/.62,ht=14;for(let Y=0;Y<ht;Y++){let $=Y/ht*Math.PI*2,at=(Y+1)/ht*Math.PI*2;r.tri(h(J,k,it),h(J+Math.cos($)*G,k,it+Math.sin($)*G),h(J+Math.cos(at)*G,k,it+Math.sin(at)*G),B)}}continue}if(b.part==="band"||b.part==="cabin"){let B=b.part==="cabin",k=R+w*(B?.6:.42),z=B?R+w*.86:k+.07,et=new K(...b.color.map(ht=>Math.min(1,ht*(.3+.45*b.level)))),G=Math.abs(_)/2+(B?.012:.02),J=M/2+(B?.012:.02),it=[[-G,-J],[G,-J],[G,J],[-G,J]];for(let ht=0;ht<4;ht++){let Y=it[ht],$=it[(ht+1)%4],at=h(Y[0]*Math.sign(_),k,Y[1]),ct=h($[0]*Math.sign(_),k,$[1]),ut=h($[0]*Math.sign(_),z,$[1]),pt=h(Y[0]*Math.sign(_),z,Y[1]);r.tri(at,ct,ut,et),r.tri(at,ut,pt,et)}continue}if(b.part==="beacon"){let B=new K(...b.color.map(ct=>Math.min(1,ct*(.25+.45*b.level)))),k=new K(0,0,0),z=R+w+.01,et=.6+.6*b.level,G=Math.min(Math.abs(_),M)*.38;for(let[ct,ut]of[[G,0],[0,G]]){let pt=h(-ct,z,-ut),gt=h(ct,z,ut),Mt=h(ct*.4,z+et,ut*.4),Ot=h(-ct*.4,z+et,-ut*.4);r.tri(pt,gt,Mt,B,B,k),r.tri(pt,Mt,Ot,B,k,k)}let J=je(t.floor,{...s,mount_y:0})+.012,it=Math.abs(_)/2+.03,ht=M/2+.03,Y=.22+.18*b.level,$=(ct,ut,pt)=>h(ct*(it+pt),J,ut*(ht+pt)),at=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ct=0;ct<4;ct++){let[ut,pt]=at[ct],[gt,Mt]=at[(ct+1)%4];r.tri($(ut,pt,0),$(gt,Mt,0),$(gt,Mt,Y),B,B,k),r.tri($(ut,pt,0),$(gt,Mt,Y),$(ut,pt,Y),B,k,k)}continue}let S=b.part==="right"?.03:-Math.abs(_)/2+.03,A=b.part==="left"?-.03:Math.abs(_)/2-.03,C=R+(b.part==="bottom"?w*.45:w)+.006,T=new K(...b.color.map(B=>Math.min(1,B*(.35+.65*b.level)))),F=new K(0,0,0),E=(B,k,z=C)=>h(B*Math.sign(_),z,k),P=[E(S,-M/2+.03),E(A,-M/2+.03),E(A,M/2-.03),E(S,M/2-.03)];r.tri(P[0],P[2],P[1],T),r.tri(P[0],P[3],P[2],T);let D=b.part==="lid"?.025+.02*b.level:.12+.1*b.level,L=T.clone().multiplyScalar(b.part==="lid"?.7:.5),O=[E(S-D,-M/2-D,C+.004),E(A+D,-M/2-D,C+.004),E(A+D,M/2+D,C+.004),E(S-D,M/2+D,C+.004)];for(let B=0;B<4;B++){let k=(B+1)%4;r.tri(P[B],O[k],O[B],L,F,F),r.tri(P[B],P[k],O[k],L,L,F)}}continue}let u=we(s.type);if(u&&!u.light&&o.ring&&u.parts.some(_=>_.glow)){let _=new K(...o.color.map(M=>Math.min(1,M*(.45+.55*o.level))));co(r,u,s,je(t.floor,s),_.getHex())}let f=Ku(s,t.floor);if(!f)continue;let d=new K(...o.color.map(_=>Math.min(1,_*(.35+.65*o.level)))),g=new K(0,0,0),x=f.z+.004;if(r.tri(h(f.x0,f.y0,x),h(f.x1,f.y0,x),h(f.x1,f.y1,x),d),r.tri(h(f.x0,f.y0,x),h(f.x1,f.y1,x),h(f.x0,f.y1,x),d),o.plain)continue;let m=.18+.12*o.level,p=d.clone().multiplyScalar(.5),v=[h(f.x0,f.y0,x),h(f.x1,f.y0,x),h(f.x1,f.y1,x),h(f.x0,f.y1,x)],y=[h(f.x0-m,f.y0-m,x+.01),h(f.x1+m,f.y0-m,x+.01),h(f.x1+m,f.y1+m,x+.01),h(f.x0-m,f.y1+m,x+.01)];for(let _=0;_<4;_++){let M=(_+1)%4;r.tri(v[_],y[_],y[M],p,g,g),r.tri(v[_],y[M],v[M],p,g,p)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=r.geometry(),t.screenMesh.visible=r.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){var r;let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>{var o;return!!((o=this.screens.get(s))!=null&&o.picture)}));for(let[s,o]of t.screenPics)n.has(s)&&this.screens.get(s).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),(r=o.texture)==null||r.dispose(),t.screenPics.delete(s));for(let[s,o]of n){let a=this.screens.get(s),l=Ku(o,t.floor);if(!l)continue;let c=t.screenPics.get(s);if(!c){let h=new Vt(new ci(1,1),new re({color:16777215,transparent:!0}));h.visible=!1,h.renderOrder=5,c={url:a.picture,mesh:h,texture:null},t.screenPics.set(s,c),t.group.add(h);let u=c;new Us().load(a.picture,f=>{if(t.screenPics.get(s)!==u){f.dispose();return}f.colorSpace=De,u.texture=f;let d=u.mesh.material;d.map=f,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,l,f),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}c.mesh.material.color.setScalar(.45+.55*a.level),c.texture&&this.placeScreenPicture(c.mesh,o,l,c.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s!=null&&s.width&&(s!=null&&s.height)?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),h=c/o,u=e.rotation*ue,f=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,h,1),t.rotation.set(0,-u,0),t.position.set(e.x+f*Math.cos(u)-d*Math.sin(u),(n.y0+n.y1)/2,e.z+f*Math.sin(u)+d*Math.cos(u))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){var h;let e=this.flows.filter(u=>u.floorId===t.floor.id).map(gh).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id)continue;let f=this.flowPhase.get(gh(u))??{speed:e0(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,g=u.color.map(y=>y*d),x=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(x<1e-4)continue;let m=[(u.b[0]-u.a[0])/x,(u.b[1]-u.a[1])/x,(u.b[2]-u.a[2])/x],p=[];if(Math.abs(m[1])<.5){let y=Math.hypot(m[0],m[2])||1;p.push([-m[2]/y,0,m[0]/y])}else p.push([1,0,0],[0,0,1]);let v=this.lowQuality?[[jm*1.4,1]]:[[JM,.25],[jm,1]];for(let[y,_]of v)for(let M of p){let w=y/2,R=(S,A)=>[S[0]+M[0]*w*A,S[1]+M[1]*w*A,S[2]+M[2]*w*A],b=[[R(u.a,-1),u.dist,0],[R(u.b,-1),u.dist+x,0],[R(u.b,1),u.dist+x,1],[R(u.a,1),u.dist,1]];for(let S of[0,1,2,0,2,3]){let[A,C,T]=b[S];n.push(A[0],A[1],A[2]),r.push(g[0]*_,g[1]*_,g[2]*_),s.push(C,T),o.push(f.speed),a.push(f.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&((h=l.getAttribute("position"))==null?void 0:h.count)===n.length/3){for(let[u,f]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(f),d.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Zt;c.setAttribute("position",new Gt(n,3)),c.setAttribute("color",new Gt(r,3)),c.setAttribute("uv",new Gt(s,2)),c.setAttribute("flowSpeed",new Gt(o,1)),c.setAttribute("flowOffset",new Gt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildOpenings(t){let e=Bm(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){var t;for(let e of this.floors){let n=e.geo.floor.getAttribute("color");for(let r of e.geo.roomTris){let s=new K(r.color),o=(t=this.roomTint)==null?void 0:t.get(r.roomId);o&&s.lerp(new K(...o).multiplyScalar(.6),.9),r.roomId===this.roomId&&s.lerp(eS,o?.3:.75);for(let a=r.start*3;a<r.end*3;a++)n.setXYZ(a,s.r,s.g,s.b)}n.needsUpdate=!0}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(t){var u;let e=new hn;for(let f of this.activeFloors()){let d=f.floor.elevation+f.ty;for(let g of f.floor.rooms)for(let[x,m]of g.points)e.expandByPoint(new H(x,d,m)),e.expandByPoint(new H(x,d+f.floor.height,m))}e.isEmpty()&&e.set(new H(-4,0,-4),new H(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new H),r=e.getSize(new H),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:((u=this.floorMap.get(this.floorId))==null?void 0:u.floor.start_view)??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let h=c?l.target:null;if(h&&n.set(h.x,h.y+(a?this.floorBase(this.floorId):0),h.z),this.keepNext){this.keepNext=!1;let f=this.controls.view;this.controls.flyTo({target:new H(f.target.x,n.y,f.target.z),radius:f.radius,phi:f.phi,theta:f.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t)}placeGround(){let t=new hn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new H(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=cS();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new H),r=t.getSize(new H),s=xh*Math.ceil((Math.max(r.x,r.z)+16)/xh);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-$e-.02,n.z)}distanceFor(t){let e=this.camera.fov*ue,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new Bs;return r.setFromCamera(new te(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){var a,l,c;let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(h=>[h.lampMesh,h.coneMesh,h.framesMesh,h.glassMesh,h.blindsMesh,h.wallMesh,h.floorMesh].filter(u=>u.visible)),o=(h,u)=>{var f;return(f=h.find(d=>u>=d.start&&u<d.end))==null?void 0:f.id};for(let h of n.intersectObjects(s,!1)){if(h.faceIndex==null)continue;let u=h.faceIndex,f=r.find(d=>d.group===h.object.parent);if(h.object===f.lampMesh||h.object===f.coneMesh){let d=o(h.object===f.lampMesh?f.lampTris:f.coneTris,u);if(d)return{entity:d}}else if(h.object===f.framesMesh||h.object===f.blindsMesh||h.object===f.glassMesh){if(this.wallMode==="cut"&&h.face){let x=((a=h.object.geometry.getAttribute("fold"))==null?void 0:a.getX(h.face.a))??Yt;if(x!==Yt&&Math.floor(x/16)===0)continue}let d=o(h.object===f.framesMesh?f.frameTris:h.object===f.glassMesh?f.glassTris:f.blindTris,u),g=d?this.pickOpenings.get(d):void 0;if(g)return{entity:g}}else if(h.object===f.wallMesh){let d=o(f.geo.furnitureTris,u),g=d?this.pickFurniture.get(d):void 0,x=d&&!g?f.floor.furniture.find(m=>m.id===d&&m.type==="wall_switch"):void 0;if(x&&(g=this.pickFurniture.get(`${x.id}#${fp(x,h.point.x,h.point.z)}`)),g)return{entity:g};if(h.face&&!d){let m=((l=f.wallMesh.geometry.getAttribute("fold"))==null?void 0:l.getX(h.face.a))??32,p=Math.floor(m/16),v=m%16,y=this.wallMode==="cut"&&p===0,_=(f.mask.glass.value&1<<v)!==0;if(!y){let M=n.ray.direction,w=Math.hypot(M.x,M.z)||1,R=[h.point.x-M.x/w*.3,h.point.z-M.z/w*.3],b=((c=f.floor.rooms.find(S=>S.points.length>=3&&Jt(R,S.points)))==null?void 0:c.id)??null;if(this.roomId!==null){if(b===this.roomId)return{floorId:f.floor.id,roomId:b}}else if(!_&&b)return{floorId:f.floor.id,roomId:b}}}}else if(h.object===f.floorMesh)return{floorId:f.floor.id,roomId:o(f.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),u)??null}}return null}onTap(t,e){var r,s,o,a,l,c;let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),(s=(r=this.options).onDeviceSelect)==null||s.call(r,n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+nc),this.invalidate(),(a=(o=this.options).onDeviceTap)==null||a.call(o,n.entity,t,e);return}(c=(l=this.options).onRoomTap)==null||c.call(l,(n==null?void 0:n.floorId)??this.floorId??"",(n==null?void 0:n.roomId)??null)}furnitureAt(t,e){var a;let n=this.rayAt(t,e),r=this.activeFloors(),s=l=>[l.screenMesh,l.fridgeMesh,...[...l.screenPics.values()].map(c=>c.mesh)],o=r.flatMap(l=>[l.lampMesh,l.wallMesh,...s(l)].filter(c=>c.visible));for(let l of n.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=r.find(f=>f.group===l.object.parent||s(f).includes(l.object));if(!c)continue;if(l.object!==c.lampMesh&&l.object!==c.wallMesh){let f=this.furnitureNear(c,l.point.x,l.point.z);if(f)return{fv:c,id:f,y:l.point.y};continue}let u=(a=(l.object===c.lampMesh?c.lampFurnTris:c.geo.furnitureTris).find(f=>l.faceIndex>=f.start&&l.faceIndex<f.end))==null?void 0:a.id;if(u)return{fv:c,id:u,y:l.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ue,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,h=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,h);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return(r==null?void 0:r.id)??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){var n;return((n=this.furnitureAt(t,e))==null?void 0:n.id)??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){var o,a,l,c,h,u,f,d;if((o=this.surfaceGrab)!=null&&o.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let g=n?(a=this.devices.find(y=>y.id===n))==null?void 0:a.furnitureId:void 0,x=g?null:this.furnitureAt(t,e),m=g??(x==null?void 0:x.id),p=m?this.floors.find(y=>y.floor.furniture.some(_=>_.id===m)):void 0,v=(l=p==null?void 0:p.floor.furniture.find(y=>y.id===m))==null?void 0:l.type;return!!(p&&m&&v&&r.has(v))&&this.grabItem(p,m,t,e)}if(n){let g=(c=this.devices.find(m=>m.id===n))==null?void 0:c.furnitureId,x=g?this.floors.find(m=>m.floor.furniture.some(p=>p.id===g)):void 0;return!g||!x?this.grabDevice(n,t,e):this.grabItem(x,g,t,e)}let s=this.furnitureAt(t,e);if(!s){let g=this.pick(t,e);return g&&"entity"in g?this.grabDevice(g.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),(u=(h=this.options).onFurnitureSelect)==null||u.call(h,null)),this.selectedDevice&&(this.selectDevice(null),(d=(f=this.options).onDeviceSelect)==null||d.call(f,null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){var u,f,d,g;let o=t.floor.furniture.find(x=>x.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,h=this.rayAt(n,r).ray.direction;if(s!==void 0&&-h.y<.34){let x=this.camera.position,m=this.camera.getWorldDirection(new H),p=Math.hypot(m.x,m.z)||1,v=[m.x/p,m.z/p],y=Math.hypot(l[0]-x.x,l[1]-x.z,(a??0)-x.y),_=this.renderer.domElement.getBoundingClientRect().height||1,M=2*y*Math.tan(this.camera.fov*Math.PI/360)/_;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-v[1],v[0]],fwd:v,perPx:M,gain:Math.min(2,1/Math.max(.5,-h.y))}}return o.locked?(this.selectFurniture(o.id),(f=(u=this.options).onFurnitureSelect)==null||f.call(u,o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),(g=(d=this.options).onFurnitureSelect)==null||g.call(d,o.id),!0)}grabDevice(t,e,n){var a,l,c,h;let r=this.devices.find(u=>u.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),(l=(a=this.options).onDeviceSelect)==null||l.call(a,t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),(h=(c=this.options).onDeviceSelect)==null||h.call(c,t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){var e,n;t&&this.selectedFurniture&&(this.selectFurniture(null),(n=(e=this.options).onFurnitureSelect)==null||n.call(e,null)),this.selectedDevice=t;for(let[r,s]of this.devicePins)s.el.classList.toggle("fp3d-dev-sel",r===t)}dragFurniture(t,e){var f,d,g,x;if(this.surfaceDragging){(f=this.surfaceGrab)==null||f.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let m=this.floorMap.get(n.floorId),p=this.devices.find(_=>_.id===n.id),v=m&&this.floorPoint(m,t,e);if(!m||!p||!v)return;let y=((d=this.building)==null?void 0:d.settings.grid)??.05;n.x=p.x=Math.round((v[0]+n.offset[0])/y)*y,n.z=p.z=Math.round((v[1]+n.offset[1])/y)*y,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let m=(t-o.x0)*o.perPx,p=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*m-o.fwd[0]*p-r.offset[0],o.fz+o.right[1]*m-o.fwd[1]*p-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=((g=this.building)==null?void 0:g.settings.grid)??.05,c=s.floor.furniture.find(m=>m.id===r.id),h=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?um(s.floor,c,h,u,((x=this.building)==null?void 0:x.settings.wall_interior)??0):[h,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){var n,r,s,o,a;if(this.surfaceDragging){this.surfaceDragging=!1,(n=this.surfaceGrab)==null||n.end();return}let t=this.deviceGrab;this.deviceGrab=null,t!=null&&t.moved&&((s=(r=this.options).onDeviceMove)==null||s.call(r,t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3));let e=this.grab;this.grab=null,e!=null&&e.moved&&((a=(o=this.options).onFurnitureMove)==null||a.call(o,e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3)),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Pe,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s==null?void 0:s.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new K(.25,.9,1):new K(1,.71,.28)))}n&&(this.ghost=new Ye(e.geometry(),new Ke({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){var m,p;let s=((m=this.grab)==null?void 0:m.id)===n.id?this.grab.x:n.x,o=((p=this.grab)==null?void 0:p.id)===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),h=we(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?je(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:je(e.floor,n),u=n.rotation*ue,f=Math.cos(u),d=Math.sin(u),g=(v,y,_)=>[s+v*f-y*d,_,o+v*d+y*f],x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let v=0;v<4;v++){let[y,_]=x[v],[M,w]=x[(v+1)%4];t.seg(g(y,_,h+.01),g(M,w,h+.01),r),t.seg(g(y,_,h+c),g(M,w,h+c),r),t.seg(g(y,_,h+.01),g(y,_,h+c),r)}t.seg(g(-n.w/2,n.d/2+.03,h+.02),g(n.w/2,n.d/2+.03,h+.02),new K(1,1,1))}onHold(t,e){var r,s;let n=this.pick(t,e);n&&"entity"in n&&((s=(r=this.options).onDeviceHold)==null||s.call(r,n.entity,t,e))}swipeStart(t,e,n,r){var o,a;if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||((a=(o=this.options).onDeviceSwipe)==null?void 0:a.call(o,s.entity,"start",0,t,e))!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){var p,v;let n=this.floors.filter(y=>y.floor.rooms.some(_=>_.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new on(s,o);a.texture.colorSpace=De;let l=new Xn(-1,1,1,-1,.1,400),c=this.floors.map(y=>({fv:y,visible:y.group.visible,y:y.y,o:y.o,standing:y.mask.standing.value,glass:y.mask.glass.value})),h=((p=this.roof)==null?void 0:p.group.visible)??!1,u=((v=this.ghost)==null?void 0:v.visible)??!1,f=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),g=document.createElement("canvas");g.width=s,g.height=o;let x=g.getContext("2d"),m=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let y of n){for(let P of this.floors)P.group.visible=P===y;y.y=0,y.o=1,this.applyFloor(y),y.group.visible=!0,y.mask.standing.value=0,y.mask.glass.value=0;let _=y.floor.rooms.flatMap(P=>P.points),M=y.floor.elevation,w=new hn(new H(Math.min(..._.map(P=>P[0]))-.3,M,Math.min(..._.map(P=>P[1]))-.3),new H(Math.max(..._.map(P=>P[0]))+.3,M+Math.min(y.floor.cut_height,y.floor.height),Math.max(..._.map(P=>P[1]))+.3)),R=w.getCenter(new H),b=-.6,S=.8,A=new H(Math.sin(S)*Math.sin(b),Math.cos(S),Math.sin(S)*Math.cos(b));l.position.copy(R).addScaledVector(A,100),l.lookAt(R),l.updateMatrixWorld();let C=.5,T=.5;for(let P of[w.min.x,w.max.x])for(let D of[w.min.y,w.max.y])for(let L of[w.min.z,w.max.z]){let O=new H(P,D,L).applyMatrix4(l.matrixWorldInverse);C=Math.max(C,Math.abs(O.x)),T=Math.max(T,Math.abs(O.y))}let F=s/o;C/T>F?T=C/F:C=T*F,l.left=-C*1.05,l.right=C*1.05,l.top=T*1.05,l.bottom=-T*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let E=x.createImageData(s,o);for(let P=0;P<o;P++)E.data.set(d.subarray((o-1-P)*s*4,(o-P)*s*4),P*s*4);x.putImageData(E,0,0),m.push({floorId:y.floor.id,url:g.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(f);for(let y of c)y.fv.y=y.y,y.fv.o=y.o,y.fv.mask.standing.value=y.standing,y.fv.mask.glass.value=y.glass,this.applyFloor(y.fv),y.fv.group.visible=y.visible;this.roof&&(this.roof.group.visible=h,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return m}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?zm(n.room,void 0,void 0,n.obstacles):ph(n.rest),l=a.length?a:ph(n.rest),c=0;l.forEach((h,u)=>{Math.hypot(h[0]-r.motion.pos[0],h[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!Jt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Ym[n.mode])}for(let[n,r]of this.robots)e.has(n)||(r.group.removeFromParent(),r.led.dispose(),this.robots.delete(n));this.robotLast=0,this.invalidate()}makeRobot(t){if(!this.robotGeo){let r=new ee,s=(a,l,c,h,u)=>{let f=[];for(let d=0;d<20;d++)f.push([Math.cos(d/20*Math.PI*2)*a,Math.sin(d/20*Math.PI*2)*a]);Ie(r,f,l,c,h,u,{aoFrom:0,bottom:!1})};s(.17,.012,.08,2371657,3424863),s(.055,.08,.1,3820138,5070726),this.robotGeo=r.geometry(),this.robotMat=new re({vertexColors:!0});let o=new ee;Ie(o,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=o.geometry()}let e=new ke,n=new re({color:Ym[t.mode]});return e.add(new Vt(this.robotGeo,this.robotMat),new Vt(this.robotLedGeo,n)),{info:t,motion:{pos:[...t.rest],heading:t.restHeading,path:[],next:0},group:e,led:n}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Vm(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.visible=!r.info.inModel||r.info.mode==="cleaning"||Math.hypot(r.motion.pos[0]-r.info.rest[0],r.motion.pos[1]-r.info.rest[1])>.05,r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new K(.25-.2*a,.95-.83*a,1-.7*a),r=new K(0,0,0),s=new K(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let h of e)h.floorId===a.floor.id&&h.points.forEach(([u,f],d)=>{let g=h.points[d-1];if(g){let x=Math.hypot(u-g[0],f-g[1])||1,m=-(f-g[1])/x*.1,p=(u-g[0])/x*.1;l.tri([g[0]+m,o,g[1]+p],[u+m,o,f+p],[u-m,o,f-p],s,s,s),l.tri([g[0]+m,o,g[1]+p],[u-m,o,f-p],[g[0]-m,o,g[1]-p],s,s,s)}for(let x=0;x<10;x++){let m=x/10*Math.PI*2,p=(x+1)/10*Math.PI*2;l.tri([u,o,f],[u+Math.cos(p)*.35,o,f+Math.sin(p)*.35],[u+Math.cos(m)*.35,o,f+Math.sin(m)*.35],s,r,r)}});let c=null;for(let h of t){if(h.floorId!==a.floor.id)continue;let u=n(h.age);if(c){let f=Math.hypot(h.x-c.x,h.z-c.z)||1,d=-(h.z-c.z)/f*.06,g=(h.x-c.x)/f*.06,x=n(c.age);l.tri([c.x+d,o,c.z+g],[h.x+d,o,h.z+g],[h.x-d,o,h.z-g],x,u,u),l.tri([c.x+d,o,c.z+g],[h.x-d,o,h.z-g],[c.x-d,o,c.z-g],x,u,x)}for(let f=0;f<12;f++){let d=f/12*Math.PI*2,g=(f+1)/12*Math.PI*2;l.tri([h.x,o,h.z],[h.x+Math.cos(g)*.22,o,h.z+Math.sin(g)*.22],[h.x+Math.cos(d)*.22,o,h.z+Math.sin(d)*.22],u,r,r)}c=h}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ue,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ue)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new H(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new H(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+nc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s){let o=this.floorMap.get(t);if(o){if(this.controls.flyTo({target:new H(e,o.floor.elevation+o.ty+r,n),radius:5.5,phi:.78},900),s){this.flashes.set(s,performance.now()+2400);let a=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);a==null||a.classList.add("fp3d-dev-found"),setTimeout(()=>a==null?void 0:a.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let d=new Set;for(let[g,x]of this.flashes){let m=this.deviceFloor.get(g);m&&d.add(m),x<=t&&this.flashes.delete(g)}a=this.flashes.size>0;for(let g of this.floors)d.has(g.floor.id)&&this.buildLamps(g)}let l=this.placeRoof(e),c=this.stepRobots(t),h=this.stepWeather(t),u=r||s||o||a||l,f=[];if((r||this.controls.busy)&&f.push("camera"),s&&f.push("floors"),o&&f.push("openings"),a&&f.push("flash"),l&&f.push("roof"),this.flowActive&&f.push("flow"),this.soundActive&&f.push("sound"),this.poolActive&&f.push("pool"),this.solarActive&&f.push("solar"),this.effectTick&&f.push("effect"),c&&f.push("robot"),n&&f.push("orbit"),this.tintTick&&f.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=u?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.renderer.render(this.scene,this.camera),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,f),u&&this.invalidate(),this.effectFloors.size&&!this.effectTimer&&!document.hidden){let d=this.lowQuality?2*t0:t0;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=d/1e3,this.effectTick=!0;for(let g of this.floors)g.o<.02||!this.effectFloors.has(g.floor.id)||(this.buildLamps(g),this.buildGlow(g));this.invalidate()},d)}!u&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&h&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33)),!u&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&(this.flowActive||this.solarActive||this.soundActive||this.poolActive)&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},this.lowQuality?2*Jm:Jm))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(h=>h.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((h,u)=>{let f=h?h[0]*n/s+h[1]*r/s>=.25:a;!l&&f&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new H,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,h=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let m of[a.z0,a.z1]){n.set(x,h,m).project(this.camera);let p=(n.x+1)/2*t,v=(1-n.y)/2*e;(!l||p<l.x)&&(l={x:p,y:v}),(!c||p>c.x)&&(c={x:p,y:v})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,f=8+this.labelInset,d=l.x-u-14,g=l.y;d<f&&this.labelInset&&(d=c.x+14,g=c.y),s.push({fv:o,left:Math.max(f,Math.min(t-u-8,d)),y:g,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new H(o.p[0],o.p[1]+((l==null?void 0:l.y)??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),h=this.camera.position.clone().sub(c),u=h.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let f=h.normalize().dot(new H(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,g=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,g,f)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){var s;let n=new H,r=this.houseView;for(let o of this.persons){let a=this.personPins.get(o.id),l=this.floorMap.get(o.floorId);if(!a)continue;if(!l||r||l.to<.99||l.o<.9||this.otherFloor(l)){this.place(a,null);continue}n.set(o.x,l.floor.elevation+l.y+.9,o.z).project(this.camera);let c=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(a,c?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let a=(s=this.devicePins.get(o.id))==null?void 0:s.el;if(!a)continue;let l=this.floorMap.get(o.floorId),c=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!l||r&&!c||l.to<.99||l.o<.9||o.pin===!1||this.otherFloor(l)){this.place(a,null);continue}if(n.set(o.x,l.floor.elevation+l.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(a,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(a)!==u&&(this.pinMode.set(a,u),a.classList.toggle("fp3d-dev-full",u==="full"),a.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(a,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=iS(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function iS(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function rS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,h)=>{e.strokeStyle=`rgba(55,224,255,${h})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let h=o+l*.37%1*256;n(h,c,h,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let h=a+l*.53%1*256;n(c,h,c+256/7,h,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let h=l?256/4:0;for(let u of[h,h+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new li(t);return s.flipY=!1,s.wrapS=xn,s.wrapT=xn,s.anisotropy=4,s.colorSpace=De,s}function sS(i){let t=new re({map:i,transparent:!0,blending:Le,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function oS(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new li(i);return e.wrapS=Qi,e.wrapT=Qi,e.colorSpace=De,e}function gh(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}`}function e0(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function aS(i){let t=new re({vertexColors:!0,transparent:!0,blending:Le,depthWrite:!1,side:de});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function n0(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(h=>h.id===r),a=i.rooms.findIndex(h=>h.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function lS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new li(t);return r.colorSpace=De,r}function cS(){let t=xh,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new li(e);return s.anisotropy=4,s.colorSpace=De,s}function dR(i,t){return new vh(i,t)}function mh(i,t,e,n){let[r,s,o]=t.size??bh[t.lamp],a=t.base??0,l=(t.rotation??0)*ue,c=Math.cos(l),h=Math.sin(l),u=(x,m)=>[t.x+x*c-m*h,t.z+x*h+m*c],f=(x,m,p,v,y,_=14)=>{let M=[];for(let w=0;w<_;w++){let R=w/_*Math.PI*2;M.push([t.x+Math.cos(R)*x,t.z+Math.sin(R)*x])}Ie(i,M,m,p,v,y,{aoFrom:0,bottom:!0})},d=(x,m,p,v,y,_,M,w=M)=>Ie(i,[u(x,p),u(m,p),u(m,v),u(x,v)],y,_,M,w,{aoFrom:0,bottom:!0}),g=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":f(g*.25,e-.04,e,se,se,8),f(g,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"pendant":{let x=Math.max(.4,e-o);f(.06,e-.02,e,se,se,8);let m=t.variant==="globe"?x+2*g:t.variant==="drum"?x+.24:x+.2;if(f(.008,m,e-.02,se,se,5),t.variant==="globe")for(let v=0;v<7;v++){let y=Math.PI*(v/7),_=Math.PI*((v+1)/7);f(g*Math.max(.2,Math.sin((y+_)/2)),x+g-g*Math.cos(y),x+g-g*Math.cos(_),n,n,14)}else if(t.variant==="cone")for(let v=0;v<4;v++)f(g*(.25+.75*(4-v)/4),x+.06*v,x+.06*(v+1),n,n,16);else t.variant==="drum"?f(g,x,x+.24,n,n,18):(f(g*.35,x+.14,x+.2,n,n,12),f(g,x,x+.14,n,n,16));break}case"downlight":f(g,e-.012,e,se,se,12),f(g*.7,e-.02,e-.012,n,n,12);break;case"spot":f(g*.6,e-.02,e,se,se,10),f(g,e-Math.max(.06,o),e-.02,se,se,12),f(g*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,se,se),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":f(Math.max(.1,g*.6),a,a+.03,se,se),f(.014,a+.03,a+o-.12,se,se,6),f(g,a+o-.14,a+o-.02,se,se),f(g*.92,a+o-.02,a+o,n,n);break;case"bollard":f(g,a,a+o-.14,se,se,10),f(g*.9,a+o-.14,a+o-.03,n,n,10),f(g*1.1,a+o-.03,a+o,se,se,10);break;case"garden":f(.012,a,a+o-.08,se,se,5),f(g,a+o-.08,a+o-.01,se,se,10),f(g*.8,a+o-.01,a+o,n,n,10);break;case"floor":f(Math.max(.1,g*.7),a,a+.03,se,se),f(.014,a+.03,a+o-.28,se,se,6),f(g,a+o-.3,a+o,n,n);break;case"table":f(Math.max(.05,g*.55),a,a+.03,se,se),f(.012,a+.03,a+o-.16,se,se,6),f(g,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??Rl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,se),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),m=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright){d(-r/2,r/2,-s/2,s/2,m-x,m,n);break}let p=(t.roll??0)*ue,v=Math.cos(p),y=Math.sin(p),_=t.upright?a+r/2:m-x/2,M=(A,C,T)=>{let F=A,E=C*v-T*y,P=C*y+T*v;return t.upright&&([F,E]=[-E,F]),[t.x+F*c-P*h,_+E,t.z+F*h+P*c]},w=[M(-r/2,-x/2,-s/2),M(r/2,-x/2,-s/2),M(r/2,-x/2,s/2),M(-r/2,-x/2,s/2),M(-r/2,x/2,-s/2),M(r/2,x/2,-s/2),M(r/2,x/2,s/2),M(-r/2,x/2,s/2)],R=new K(n),b=[t.x,_,t.z],S=(A,C,T,F)=>{let[E,P,D]=[w[A],w[C],w[T]],L=[(P[1]-E[1])*(D[2]-E[2])-(P[2]-E[2])*(D[1]-E[1]),(P[2]-E[2])*(D[0]-E[0])-(P[0]-E[0])*(D[2]-E[2]),(P[0]-E[0])*(D[1]-E[1])-(P[1]-E[1])*(D[0]-E[0])],O=[E[0]-b[0],E[1]-b[1],E[2]-b[2]],B=L[0]*O[0]+L[1]*O[1]+L[2]*O[2]<0,[k,z,et,G]=B?[w[F],w[T],w[C],w[A]]:[w[A],w[C],w[T],w[F]];i.tri(k,z,et,R,R,R),i.tri(k,et,G,R,R,R)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{ah as FloorMap,vh as FloorplanViewer,lh as WalkCamera,dR as createViewer,eR as funLib,qM as furnitureFront,YM as furniturePreview,nS as isLowEnd,mh as pushLampModel};
