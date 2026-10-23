var Xf=0,cu=1,Yf=2;var $s=1,qf=2,ts=3,jn=0,nn=1,se=2,Qn=0,Ui=1,Ie=2,uu=3,Zs=4,$f=5;var hr=100,Zf=101,Kf=102,Jf=103,jf=104,Qf=200,td=201,ed=202,nd=203,hu=204,fu=205,id=206,rd=207,sd=208,od=209,ad=210,ld=211,cd=212,ud=213,hd=214,ma=0,ga=1,ba=2,Wr=3,xa=4,ya=5,va=6,_a=7,du=0,fd=1,dd=2,On=0,pu=1,mu=2,gu=3,bu=4,xu=5,yu=6,vu=7;var _u=300,Bi=301,fr=302,Za=303,Ka=304,Ks=306,sr=1e3,yn=1001,Ma=1002,$e=1003,pd=1004;var Js=1005;var tn=1006,Ja=1007;var ki=1008;var _n=1009,Mu=1010,Su=1011,es=1012,ja=1013,Un=1014,Bn=1015,kn=1016,Qa=1017,tl=1018,ns=1020,wu=35902,Tu=35899,Eu=1021,Au=1022,En=1023,qn=1026,zi=1027,Ru=1028,el=1029,Vi=1030,nl=1031;var il=1033,js=33776,Qs=33777,to=33778,eo=33779,rl=35840,sl=35841,ol=35842,al=35843,ll=36196,cl=37492,ul=37496,hl=37488,fl=37489,no=37490,dl=37491,pl=37808,ml=37809,gl=37810,bl=37811,xl=37812,yl=37813,vl=37814,_l=37815,Ml=37816,Sl=37817,wl=37818,Tl=37819,El=37820,Al=37821,Rl=36492,Cl=36494,Pl=36495,Il=36283,Ll=36284,io=36285,Fl=36286;var Cs=2300,Sa=2301,fa=2302,jc=2303,Qc=2400,tu=2401,eu=2402;var md=3200;var Cu=0,gd=1,pi="",De="srgb",Ps="srgb-linear",Is="linear",xe="srgb";var da=7680;var bd=519,xd=512,yd=513,vd=514,Dl=515,_d=516,Md=517,Nl=518,Sd=519,wd=35044,Pu=35048;var Iu="300 es",Nn=2e3,Ls=2001;function gg(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function bg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Td(){let i=Xr("canvas");return i.style.display="block",i}var pf={},Yr=null;function Lu(...i){let t="THREE."+i.shift();Yr?Yr("log",t,...i):console.log(t,...i)}function Ed(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qt(...i){i=Ed(i);let t="THREE."+i.shift();if(Yr)Yr("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function $t(...i){i=Ed(i);let t="THREE."+i.shift();if(Yr)Yr("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function rr(...i){let t=i.join(" ");t in pf||(pf[t]=!0,qt(...i))}function Ad(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Rd={[ma]:ga,[ba]:va,[xa]:_a,[Wr]:ya,[ga]:ma,[va]:ba,[_a]:xa,[ya]:Wr},$n=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Cc=Math.PI/180,wa=180/Math.PI;function ro(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function fe(i,t,e){return Math.max(t,Math.min(e,i))}function xg(i,t){return(i%t+t)%t}function Pc(i,t,e){return(1-e)*i+e*t}function Ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Uu=class Uu{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uu.prototype.isVector2=!0;var ae=Uu,Zn=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],f=n[r+2],h=n[r+3],u=s[o+0],d=s[o+1],p=s[o+2],x=s[o+3];if(h!==x||l!==u||c!==d||f!==p){let g=l*u+c*d+f*p+h*x;g<0&&(u=-u,d=-d,p=-p,x=-x,g=-g);let m=1-a;if(g<.9995){let b=Math.acos(g),_=Math.sin(b);m=Math.sin(m*b)/_,a=Math.sin(a*b)/_,l=l*m+u*a,c=c*m+d*a,f=f*m+p*a,h=h*m+x*a}else{l=l*m+u*a,c=c*m+d*a,f=f*m+p*a,h=h*m+x*a;let b=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=b,c*=b,f*=b,h*=b}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],f=n[r+3],h=s[o],u=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+f*h+l*d-c*u,t[e+1]=l*p+f*u+c*h-a*d,t[e+2]=c*p+f*d+a*u-l*h,t[e+3]=f*p-a*h-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(r/2),h=a(s/2),u=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=u*f*h+c*d*p,this._y=c*d*h-u*f*p,this._z=c*f*p+u*d*h,this._w=c*f*h-u*d*p;break;case"YXZ":this._x=u*f*h+c*d*p,this._y=c*d*h-u*f*p,this._z=c*f*p-u*d*h,this._w=c*f*h+u*d*p;break;case"ZXY":this._x=u*f*h-c*d*p,this._y=c*d*h+u*f*p,this._z=c*f*p+u*d*h,this._w=c*f*h-u*d*p;break;case"ZYX":this._x=u*f*h-c*d*p,this._y=c*d*h+u*f*p,this._z=c*f*p-u*d*h,this._w=c*f*h+u*d*p;break;case"YZX":this._x=u*f*h+c*d*p,this._y=c*d*h+u*f*p,this._z=c*f*p-u*d*h,this._w=c*f*h-u*d*p;break;case"XZY":this._x=u*f*h-c*d*p,this._y=c*d*h-u*f*p,this._z=c*f*p+u*d*h,this._w=c*f*h+u*d*p;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],h=e[10],u=n+a+h;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(f-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-r*a,this._w=o*f-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Bu=class Bu{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mf.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),f=2*(a*e-s*r),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*f,this.y=n+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ic.copy(this).projectOnVector(t),this.sub(Ic)}reflect(t){return this.sub(Ic.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bu.prototype.isVector3=!0;var Y=Bu,Ic=new Y,mf=new Zn,ku=class ku{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],u=n[2],d=n[5],p=n[8],x=r[0],g=r[3],m=r[6],b=r[1],_=r[4],y=r[7],M=r[2],w=r[5],R=r[8];return s[0]=o*x+a*b+l*M,s[3]=o*g+a*_+l*w,s[6]=o*m+a*y+l*R,s[1]=c*x+f*b+h*M,s[4]=c*g+f*_+h*w,s[7]=c*m+f*y+h*R,s[2]=u*x+d*b+p*M,s[5]=u*g+d*_+p*w,s[8]=u*m+d*y+p*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*s*f+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=f*o-a*c,u=a*l-f*s,d=c*s-o*l,p=e*h+n*u+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=h*x,t[1]=(r*c-f*n)*x,t[2]=(a*n-r*o)*x,t[3]=u*x,t[4]=(f*e-r*l)*x,t[5]=(r*s-a*e)*x,t[6]=d*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*s)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return rr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lc.makeScale(t,e)),this}rotate(t){return rr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lc.makeRotation(-t)),this}translate(t,e){return rr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ku.prototype.isMatrix3=!0;var jt=ku,Lc=new jt,gf=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bf=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yg(){let i={enabled:!0,workingColorSpace:Ps,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===xe&&(r.r=ui(r.r),r.g=ui(r.g),r.b=ui(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===xe&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pi?Is:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return rr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return rr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ps]:{primaries:t,whitePoint:n,transfer:Is,toXYZ:gf,fromXYZ:bf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:t,whitePoint:n,transfer:xe,toXYZ:gf,fromXYZ:bf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:De}}}),i}var ue=yg();function ui(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Hr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Cr,Ta=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Cr===void 0&&(Cr=Xr("canvas")),Cr.width=t.width,Cr.height=t.height;let r=Cr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Cr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ui(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ui(e[n]/255)*255):e[n]=ui(e[n]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},vg=0,qr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ro(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Fc(r[o].image)):s.push(Fc(r[o]))}else s=Fc(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function Fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ta.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var _g=0,Dc=new Y,cn=class i extends $n{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=yn,r=yn,s=tn,o=ki,a=En,l=_n,c=i.DEFAULT_ANISOTROPY,f=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=ro(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Dc).x}get height(){return this.source.getSize(Dc).y}get depth(){return this.source.getSize(Dc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case sr:t.x=t.x-Math.floor(t.x);break;case yn:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case sr:t.y=t.y-Math.floor(t.y);break;case yn:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=_u;cn.DEFAULT_ANISOTROPY=1;var zu=class zu{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],f=l[4],h=l[8],u=l[1],d=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(f-u)<.01&&Math.abs(h-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(h+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,y=(d+1)/2,M=(m+1)/2,w=(f+u)/4,R=(h+x)/4,v=(p+g)/4;return _>y&&_>M?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=R/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=v/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=R/s,r=v/s),this.set(n,r,s,e),this}let b=Math.sqrt((g-p)*(g-p)+(h-x)*(h-x)+(u-f)*(u-f));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(h-x)/b,this.z=(u-f)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=fe(this.x,t.x,e.x),this.y=fe(this.y,t.y,e.y),this.z=fe(this.z,t.z,e.z),this.w=fe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=fe(this.x,t,e),this.y=fe(this.y,t,e),this.z=fe(this.z,t,e),this.w=fe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(fe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zu.prototype.isVector4=!0;var Oe=zu,Ea=class extends $n{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Oe(0,0,t,e),this.scissorTest=!1,this.viewport=new Oe(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new cn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new qr(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ze=class extends Ea{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Fs=class extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Aa=class extends cn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=$e,this.minFilter=$e,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var $a=class $a{constructor(t,e,n,r,s,o,a,l,c,f,h,u,d,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,f,h,u,d,p,x,g)}set(t,e,n,r,s,o,a,l,c,f,h,u,d,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=h,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $a().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/Pr.setFromMatrixColumn(t,0).length(),s=1/Pr.setFromMatrixColumn(t,1).length(),o=1/Pr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let u=o*f,d=o*h,p=a*f,x=a*h;e[0]=l*f,e[4]=-l*h,e[8]=c,e[1]=d+p*c,e[5]=u-x*c,e[9]=-a*l,e[2]=x-u*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*f,d=l*h,p=c*f,x=c*h;e[0]=u+x*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*f,e[9]=-a,e[2]=d*a-p,e[6]=x+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*f,d=l*h,p=c*f,x=c*h;e[0]=u-x*a,e[4]=-o*h,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*f,e[9]=x-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*f,d=o*h,p=a*f,x=a*h;e[0]=l*f,e[4]=p*c-d,e[8]=u*c+x,e[1]=l*h,e[5]=x*c+u,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*f,e[4]=x-u*h,e[8]=p*h+d,e[1]=h,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*h+p,e[10]=u-x*h}else if(t.order==="XZY"){let u=o*l,d=o*c,p=a*l,x=a*c;e[0]=l*f,e[4]=-h,e[8]=c*f,e[1]=u*h+x,e[5]=o*f,e[9]=d*h-p,e[2]=p*h-d,e[6]=a*f,e[10]=x*h+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mg,t,Sg)}lookAt(t,e,n){let r=this.elements;return bn.subVectors(t,e),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ti.crossVectors(n,bn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ti.crossVectors(n,bn)),Ti.normalize(),Vo.crossVectors(bn,Ti),r[0]=Ti.x,r[4]=Vo.x,r[8]=bn.x,r[1]=Ti.y,r[5]=Vo.y,r[9]=bn.y,r[2]=Ti.z,r[6]=Vo.z,r[10]=bn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],u=n[9],d=n[13],p=n[2],x=n[6],g=n[10],m=n[14],b=n[3],_=n[7],y=n[11],M=n[15],w=r[0],R=r[4],v=r[8],C=r[12],S=r[1],E=r[5],L=r[9],N=r[13],T=r[2],I=r[6],P=r[10],A=r[14],D=r[3],B=r[7],z=r[11],k=r[15];return s[0]=o*w+a*S+l*T+c*D,s[4]=o*R+a*E+l*I+c*B,s[8]=o*v+a*L+l*P+c*z,s[12]=o*C+a*N+l*A+c*k,s[1]=f*w+h*S+u*T+d*D,s[5]=f*R+h*E+u*I+d*B,s[9]=f*v+h*L+u*P+d*z,s[13]=f*C+h*N+u*A+d*k,s[2]=p*w+x*S+g*T+m*D,s[6]=p*R+x*E+g*I+m*B,s[10]=p*v+x*L+g*P+m*z,s[14]=p*C+x*N+g*A+m*k,s[3]=b*w+_*S+y*T+M*D,s[7]=b*R+_*E+y*I+M*B,s[11]=b*v+_*L+y*P+M*z,s[15]=b*C+_*N+y*A+M*k,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],h=t[6],u=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15],b=l*d-c*u,_=a*d-c*h,y=a*u-l*h,M=o*d-c*f,w=o*u-l*f,R=o*h-a*f;return e*(x*b-g*_+m*y)-n*(p*b-g*M+m*w)+r*(p*_-x*M+m*R)-s*(p*y-x*w+g*R)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(s*f-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],h=t[9],u=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],b=e*a-n*o,_=e*l-r*o,y=e*c-s*o,M=n*l-r*a,w=n*c-s*a,R=r*c-s*l,v=f*x-h*p,C=f*g-u*p,S=f*m-d*p,E=h*g-u*x,L=h*m-d*x,N=u*m-d*g,T=b*N-_*L+y*E+M*S-w*C+R*v;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/T;return t[0]=(a*N-l*L+c*E)*I,t[1]=(r*L-n*N-s*E)*I,t[2]=(x*R-g*w+m*M)*I,t[3]=(u*w-h*R-d*M)*I,t[4]=(l*S-o*N-c*C)*I,t[5]=(e*N-r*S+s*C)*I,t[6]=(g*y-p*R-m*_)*I,t[7]=(f*R-u*y+d*_)*I,t[8]=(o*L-a*S+c*v)*I,t[9]=(n*S-e*L-s*v)*I,t[10]=(p*w-x*y+m*b)*I,t[11]=(h*y-f*w-d*b)*I,t[12]=(a*C-o*E-l*v)*I,t[13]=(e*E-n*C+r*v)*I,t[14]=(x*_-p*M-g*b)*I,t[15]=(f*M-h*_+u*b)*I,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+n,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,f=o+o,h=a+a,u=s*c,d=s*f,p=s*h,x=o*f,g=o*h,m=a*h,b=l*c,_=l*f,y=l*h,M=n.x,w=n.y,R=n.z;return r[0]=(1-(x+m))*M,r[1]=(d+y)*M,r[2]=(p-_)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(u+m))*w,r[6]=(g+b)*w,r[7]=0,r[8]=(p+_)*R,r[9]=(g-b)*R,r[10]=(1-(u+x))*R,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=Pr.set(r[0],r[1],r[2]).length(),a=Pr.set(r[4],r[5],r[6]).length(),l=Pr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),In.copy(this);let c=1/o,f=1/a,h=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=f,In.elements[5]*=f,In.elements[6]*=f,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,e.setFromRotationMatrix(In),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Nn,l=!1){let c=this.elements,f=2*s/(e-t),h=2*s/(n-r),u=(e+t)/(e-t),d=(n+r)/(n-r),p,x;if(l)p=s/(o-s),x=o*s/(o-s);else if(a===Nn)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Ls)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Nn,l=!1){let c=this.elements,f=2/(e-t),h=2/(n-r),u=-(e+t)/(e-t),d=-(n+r)/(n-r),p,x;if(l)p=1/(o-s),x=o/(o-s);else if(a===Nn)p=-2/(o-s),x=-(o+s)/(o-s);else if(a===Ls)p=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};$a.prototype.isMatrix4=!0;var Te=$a,Pr=new Y,In=new Te,Mg=new Y(0,0,0),Sg=new Y(1,1,1),Ti=new Y,Vo=new Y,bn=new Y,xf=new Te,yf=new Zn,Ii=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],u=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return xf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(xf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yf.setFromEuler(this),this.setFromQuaternion(yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ii.DEFAULT_ORDER="XYZ";var $r=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wg=0,vf=new Y,Ir=new Zn,si=new Te,Go=new Y,Ss=new Y,Tg=new Y,Eg=new Zn,_f=new Y(1,0,0),Mf=new Y(0,1,0),Sf=new Y(0,0,1),wf={type:"added"},Ag={type:"removed"},Lr={type:"childadded",child:null},Nc={type:"childremoved",child:null},gn=class i extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=ro(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new Y,e=new Ii,n=new Zn,r=new Y(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Te},normalMatrix:{value:new jt}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $r,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(t,e){return Ir.setFromAxisAngle(t,e),this.quaternion.premultiply(Ir),this}rotateX(t){return this.rotateOnAxis(_f,t)}rotateY(t){return this.rotateOnAxis(Mf,t)}rotateZ(t){return this.rotateOnAxis(Sf,t)}translateOnAxis(t,e){return vf.copy(t).applyQuaternion(this.quaternion),this.position.add(vf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_f,t)}translateY(t){return this.translateOnAxis(Mf,t)}translateZ(t){return this.translateOnAxis(Sf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Go.copy(t):Go.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(Ss,Go,this.up):si.lookAt(Go,Ss,this.up),this.quaternion.setFromRotationMatrix(si),r&&(si.extractRotation(r.matrixWorld),Ir.setFromRotationMatrix(si),this.quaternion.premultiply(Ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?($t("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(wf),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null):$t("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ag),Nc.child=t,this.dispatchEvent(Nc),Nc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(wf),Lr.child=t,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,t,Tg),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,Eg,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),h=o(t.shapes),u=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gn.DEFAULT_UP=new Y(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rg={type:"move"},Zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],u=f.position.distanceTo(h.position),d=.02,p=.005;c.inputState.pinching&&u>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Rg)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ue;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Cd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function Oc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var K=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ue.workingColorSpace){if(t=xg(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Oc(o,s,t+1/3),this.g=Oc(o,s,t),this.b=Oc(o,s,t-1/3)}return ue.colorSpaceToWorking(this,r),this}setStyle(t,e=De){function n(s){s!==void 0&&parseFloat(s)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=Cd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ui(t.r),this.g=ui(t.g),this.b=ui(t.b),this}copyLinearToSRGB(t){return this.r=Hr(t.r),this.g=Hr(t.g),this.b=Hr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ue.workingToColorSpace(ln.copy(this),t),Math.round(fe(ln.r*255,0,255))*65536+Math.round(fe(ln.g*255,0,255))*256+Math.round(fe(ln.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.workingToColorSpace(ln.copy(this),e);let n=ln.r,r=ln.g,s=ln.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=ue.workingColorSpace){return ue.workingToColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=De){ue.workingToColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,r=ln.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Ho);let n=Pc(Ei.h,Ho.h,e),r=Pc(Ei.s,Ho.s,e),s=Pc(Ei.l,Ho.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new K;K.NAMES=Cd;var Ds=class i{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new K(t),this.density=e}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Li=class extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ii,this.environmentIntensity=1,this.environmentRotation=new Ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ln=new Y,oi=new Y,Uc=new Y,ai=new Y,Fr=new Y,Dr=new Y,Tf=new Y,Bc=new Y,kc=new Y,zc=new Y,Vc=new Oe,Gc=new Oe,Hc=new Oe,Pi=class i{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),Ln.subVectors(t,e),r.cross(Ln);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){Ln.subVectors(r,e),oi.subVectors(n,e),Uc.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(oi),l=Ln.dot(Uc),c=oi.dot(oi),f=oi.dot(Uc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let u=1/h,d=(c*l-a*f)*u,p=(o*f-a*l)*u;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,ai)===null?!1:ai.x>=0&&ai.y>=0&&ai.x+ai.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ai.x),l.addScaledVector(o,ai.y),l.addScaledVector(a,ai.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return Vc.setScalar(0),Gc.setScalar(0),Hc.setScalar(0),Vc.fromBufferAttribute(t,e),Gc.fromBufferAttribute(t,n),Hc.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Vc,s.x),o.addScaledVector(Gc,s.y),o.addScaledVector(Hc,s.z),o}static isFrontFacing(t,e,n,r){return Ln.subVectors(n,e),oi.subVectors(t,e),Ln.cross(oi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Ln.cross(oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Fr.subVectors(r,n),Dr.subVectors(s,n),Bc.subVectors(t,n);let l=Fr.dot(Bc),c=Dr.dot(Bc);if(l<=0&&c<=0)return e.copy(n);kc.subVectors(t,r);let f=Fr.dot(kc),h=Dr.dot(kc);if(f>=0&&h<=f)return e.copy(r);let u=l*h-f*c;if(u<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Fr,o);zc.subVectors(t,s);let d=Fr.dot(zc),p=Dr.dot(zc);if(p>=0&&d<=p)return e.copy(s);let x=d*c-l*p;if(x<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Dr,a);let g=f*p-d*h;if(g<=0&&h-f>=0&&d-p>=0)return Tf.subVectors(s,r),a=(h-f)/(h-f+(d-p)),e.copy(r).addScaledVector(Tf,a);let m=1/(g+x+u);return o=x*m,a=u*m,e.copy(n).addScaledVector(Fr,o).addScaledVector(Dr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},pn=class{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(t.matrixWorld),this.union(Wo)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ws),Xo.subVectors(this.max,ws),Nr.subVectors(t.a,ws),Or.subVectors(t.b,ws),Ur.subVectors(t.c,ws),Ai.subVectors(Or,Nr),Ri.subVectors(Ur,Or),tr.subVectors(Nr,Ur);let e=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-tr.z,tr.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,tr.z,0,-tr.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-tr.y,tr.x,0];return!Wc(e,Nr,Or,Ur,Xo)||(e=[1,0,0,0,1,0,0,0,1],!Wc(e,Nr,Or,Ur,Xo))?!1:(Yo.crossVectors(Ai,Ri),e=[Yo.x,Yo.y,Yo.z],Wc(e,Nr,Or,Ur,Xo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},li=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Fn=new Y,Wo=new pn,Nr=new Y,Or=new Y,Ur=new Y,Ai=new Y,Ri=new Y,tr=new Y,ws=new Y,Xo=new Y,Yo=new Y,er=new Y;function Wc(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){er.fromArray(i,s);let a=r.x*Math.abs(er.x)+r.y*Math.abs(er.y)+r.z*Math.abs(er.z),l=t.dot(er),c=e.dot(er),f=n.dot(er);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var Ve=new Y,qo=new ae,Cg=0,Tn=class extends $n{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cg++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=wd,this.updateRanges=[],this.gpuType=Bn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qo.fromBufferAttribute(this,e),qo.applyMatrix3(t),this.setXY(e,qo.x,qo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=mn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=mn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),r=mn(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=mn(e,this.array),n=mn(n,this.array),r=mn(r,this.array),s=mn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Ns=class extends Tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var or=class extends Tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Bt=class extends Tn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Pg=new pn,Ts=new Y,Xc=new Y,Fi=class{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pg.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ts.subVectors(t,this.center);let e=Ts.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Ts,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Xc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ts.copy(t.center).add(Xc)),this.expandByPoint(Ts.copy(t.center).sub(Xc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ig=0,wn=new Te,Yc=new gn,Br=new Y,xn=new pn,Es=new pn,Ye=new Y,Xt=class i extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=ro(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gg(t)?or:Ns)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return wn.makeRotationFromQuaternion(t),this.applyMatrix4(wn),this}rotateX(t){return wn.makeRotationX(t),this.applyMatrix4(wn),this}rotateY(t){return wn.makeRotationY(t),this.applyMatrix4(wn),this}rotateZ(t){return wn.makeRotationZ(t),this.applyMatrix4(wn),this}translate(t,e,n){return wn.makeTranslation(t,e,n),this.applyMatrix4(wn),this}scale(t,e,n){return wn.makeScale(t,e,n),this.applyMatrix4(wn),this}lookAt(t){return Yc.lookAt(t),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Bt(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ye.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ye),Ye.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ye)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&$t('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){$t("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){let n=this.boundingSphere.center;if(xn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Es.setFromBufferAttribute(a),this.morphTargetsRelative?(Ye.addVectors(xn.min,Es.min),xn.expandByPoint(Ye),Ye.addVectors(xn.max,Es.max),xn.expandByPoint(Ye)):(xn.expandByPoint(Es.min),xn.expandByPoint(Es.max))}xn.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)Ye.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Ye));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ye.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(t,c),Ye.add(Br)),r=Math.max(r,n.distanceToSquared(Ye))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&$t('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){$t("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Tn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let v=0;v<n.count;v++)a[v]=new Y,l[v]=new Y;let c=new Y,f=new Y,h=new Y,u=new ae,d=new ae,p=new ae,x=new Y,g=new Y;function m(v,C,S){c.fromBufferAttribute(n,v),f.fromBufferAttribute(n,C),h.fromBufferAttribute(n,S),u.fromBufferAttribute(s,v),d.fromBufferAttribute(s,C),p.fromBufferAttribute(s,S),f.sub(c),h.sub(c),d.sub(u),p.sub(u);let E=1/(d.x*p.y-p.x*d.y);isFinite(E)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(h,-d.y).multiplyScalar(E),g.copy(h).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(E),a[v].add(x),a[C].add(x),a[S].add(x),l[v].add(g),l[C].add(g),l[S].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let v=0,C=b.length;v<C;++v){let S=b[v],E=S.start,L=S.count;for(let N=E,T=E+L;N<T;N+=3)m(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new Y,y=new Y,M=new Y,w=new Y;function R(v){M.fromBufferAttribute(r,v),w.copy(M);let C=a[v];_.copy(C),_.sub(M.multiplyScalar(M.dot(C))).normalize(),y.crossVectors(w,C);let E=y.dot(l[v])<0?-1:1;o.setXYZW(v,_.x,_.y,_.z,E)}for(let v=0,C=b.length;v<C;++v){let S=b[v],E=S.start,L=S.count;for(let N=E,T=E+L;N<T;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let r=new Y,s=new Y,o=new Y,a=new Y,l=new Y,c=new Y,f=new Y,h=new Y;if(t)for(let u=0,d=t.count;u<d;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,x),o.fromBufferAttribute(e,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),a.add(f),l.add(f),c.add(f),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)r.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),n.setXYZ(u+0,f.x,f.y,f.z),n.setXYZ(u+1,f.x,f.y,f.z),n.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ye.fromBufferAttribute(t,e),Ye.normalize(),t.setXYZ(e,Ye.x,Ye.y,Ye.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,h=a.normalized,u=new c.constructor(l.length*f),d=0,p=0;for(let x=0,g=l.length;x<g;x++){a.isInterleavedBufferAttribute?d=l[x]*a.data.stride+a.offset:d=l[x]*f;for(let m=0;m<f;m++)u[p++]=c[d++]}return new Tn(u,f,h)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){let u=c[f],d=t(u,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let h=0,u=c.length;h<u;h++){let d=c[h];f.push(d.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let f=r[c];this.setAttribute(c,f.clone(e))}let s=t.morphAttributes;for(let c in s){let f=[],h=s[c];for(let u=0,d=h.length;u<d;u++)f.push(h[u].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qc=new Y,Lg=new Y,Fg=new jt,Dn=class{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=qc.subVectors(n,e).cross(Lg.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(qc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fg.getNormalMatrix(t),r=this.coplanarPoint(qc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Dg=0,hi=class extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=ro(),this.name="",this.type="Material",this.blending=Ui,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=fu,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new K(0,0,0),this.blendAlpha=0,this.depthFunc=Wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=bd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=da,this.stencilZFail=da,this.stencilZPass=da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new K().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Dn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ae().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ci=new Y,$c=new Y,$o=new Y,Zo=new Y,ar=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){$c.copy(t).add(e).multiplyScalar(.5),$o.copy(e).sub(t).normalize(),Zo.copy(this.origin).sub($c);let s=t.distanceTo(e)*.5,o=-this.direction.dot($o),a=Zo.dot(this.direction),l=-Zo.dot($o),c=Zo.lengthSq(),f=Math.abs(1-o*o),h,u,d,p;if(f>0)if(h=o*l-a,u=o*a-l,p=s*f,h>=0)if(u>=-p)if(u<=p){let x=1/f;h*=x,u*=x,d=h*(h+o*u+2*a)+u*(o*h+u+2*l)+c}else u=s,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;else u=-s,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;else u<=-p?(h=Math.max(0,-(-o*s+a)),u=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+u*(u+2*l)+c):u<=p?(h=0,u=Math.min(Math.max(-s,-l),s),d=u*(u+2*l)+c):(h=Math.max(0,-(o*s+a)),u=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+u*(u+2*l)+c);else u=o>0?-s:s,h=Math.max(0,-(o*u+a)),d=-h*h+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy($c).addScaledVector($o,u),d}intersectSphere(t,e){if(t.radius<0)return null;ci.subVectors(t.center,this.origin);let n=ci.dot(this.direction),r=ci.dot(ci)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,r=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,r=(t.min.x-u.x)*c),f>=0?(s=(t.min.y-u.y)*f,o=(t.max.y-u.y)*f):(s=(t.max.y-u.y)*f,o=(t.min.y-u.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-u.z)*h,l=(t.max.z-u.z)*h):(a=(t.max.z-u.z)*h,l=(t.min.z-u.z)*h),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,h=t.x-o.x,u=t.y-o.y,d=t.z-o.z,p=e.x-o.x,x=e.y-o.y,g=e.z-o.z,m=n.x-o.x,b=n.y-o.y,_=n.z-o.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(f),R,v,C,S,E,L,N,T,I,P,A,D;if(y>=M&&y>=w?(C=l,L=h,I=p,D=m,l>=0?(R=c,v=f,S=u,E=d,N=x,T=g,P=b,A=_):(R=f,v=c,S=d,E=u,N=g,T=x,P=_,A=b)):M>=w?(C=c,L=u,I=x,D=b,c>=0?(R=f,v=l,S=d,E=h,N=g,T=p,P=_,A=m):(R=l,v=f,S=h,E=d,N=p,T=g,P=m,A=_)):(C=f,L=d,I=g,D=_,f>=0?(R=l,v=c,S=h,E=u,N=p,T=x,P=m,A=b):(R=c,v=l,S=u,E=h,N=x,T=p,P=b,A=m)),C===0)return null;let B=R/C,z=v/C,k=1/C,W=S-B*L,G=E-z*L,Q=N-B*I,j=T-z*I,tt=P-B*D,H=A-z*D,$=tt*j-H*Q,st=W*H-G*tt,ct=Q*G-j*W;if(r){if($<0||st<0||ct<0)return null}else if(($<0||st<0||ct<0)&&($>0||st>0||ct>0))return null;let it=$+st+ct;if(it===0)return null;let ut=k*($*L+st*I+ct*D);return(it>0?ut<0:ut>0)?null:this.at(ut/it,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new K(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ii,this.combine=du,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ef=new Te,nr=new ar,Ko=new Fi,Af=new Y,Jo=new Y,jo=new Y,Qo=new Y,Zc=new Y,ta=new Y,Rf=new Y,ea=new Y,It=class extends gn{constructor(t=new Xt,e=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){ta.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],h=s[l];f!==0&&(Zc.fromBufferAttribute(h,t),o?ta.addScaledVector(Zc,f):ta.addScaledVector(Zc.sub(e),f))}e.add(ta)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(s),nr.copy(t.ray).recast(t.near),!(Ko.containsPoint(nr.origin)===!1&&(nr.intersectSphere(Ko,Af)===null||nr.origin.distanceToSquared(Af)>(t.far-t.near)**2))&&(Ef.copy(s).invert(),nr.copy(t.ray).applyMatrix4(Ef),!(n.boundingBox!==null&&nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,nr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,u=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),_=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,M=_;y<M;y+=3){let w=a.getX(y),R=a.getX(y+1),v=a.getX(y+2);r=na(this,m,t,n,c,f,h,w,R,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let b=a.getX(g),_=a.getX(g+1),y=a.getX(g+2);r=na(this,o,t,n,c,f,h,b,_,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=o[g.materialIndex],b=Math.max(g.start,d.start),_=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=b,M=_;y<M;y+=3){let w=y,R=y+1,v=y+2;r=na(this,m,t,n,c,f,h,w,R,v),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){let b=g,_=g+1,y=g+2;r=na(this,o,t,n,c,f,h,b,_,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Ng(i,t,e,n,r,s,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===jn,a),l===null)return null;ea.copy(a),ea.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ea);return c<e.near||c>e.far?null:{distance:c,point:ea.clone(),object:i}}function na(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,Jo),i.getVertexPosition(l,jo),i.getVertexPosition(c,Qo);let f=Ng(i,t,e,n,Jo,jo,Qo,Rf);if(f){let h=new Y;Pi.getBarycoord(Rf,Jo,jo,Qo,h),r&&(f.uv=Pi.getInterpolatedAttribute(r,a,l,c,h,new ae)),s&&(f.uv1=Pi.getInterpolatedAttribute(s,a,l,c,h,new ae)),o&&(f.normal=Pi.getInterpolatedAttribute(o,a,l,c,h,new Y),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new Y,materialIndex:0};Pi.getNormal(Jo,jo,Qo,u.normal),f.face=u,f.barycoord=h}return f}var Ra=class extends cn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=$e,f=$e,h,u){super(null,o,a,l,c,f,r,s,h,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ir=new Fi,Og=new ae(.5,.5),ia=new Y,Os=class{constructor(t=new Dn,e=new Dn,n=new Dn,r=new Dn,s=new Dn,o=new Dn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],u=s[6],d=s[7],p=s[8],x=s[9],g=s[10],m=s[11],b=s[12],_=s[13],y=s[14],M=s[15];if(r[0].setComponents(c-o,d-f,m-p,M-b).normalize(),r[1].setComponents(c+o,d+f,m+p,M+b).normalize(),r[2].setComponents(c+a,d+h,m+x,M+_).normalize(),r[3].setComponents(c-a,d-h,m-x,M-_).normalize(),n)r[4].setComponents(l,u,g,y).normalize(),r[5].setComponents(c-l,d-u,m-g,M-y).normalize();else if(r[4].setComponents(c-l,d-u,m-g,M-y).normalize(),e===Nn)r[5].setComponents(c+l,d+u,m+g,M+y).normalize();else if(e===Ls)r[5].setComponents(l,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ir)}intersectsSprite(t){ir.center.set(0,0,0);let e=Og.distanceTo(t.center);return ir.radius=.7071067811865476+e,ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(ir)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(ia.x=r.normal.x>0?t.max.x:t.min.x,ia.y=r.normal.y>0?t.max.y:t.min.y,ia.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ia)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var en=class extends hi{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new K(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ca=new Y,Pa=new Y,Cf=new Te,As=new ar,ra=new Fi,Kc=new Y,Pf=new Y,Ia=class extends gn{constructor(t=new Xt,e=new en){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ca.fromBufferAttribute(e,r-1),Pa.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ca.distanceTo(Pa);t.setAttribute("lineDistance",new Bt(n,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(r),ra.radius+=s,t.ray.intersectsSphere(ra)===!1)return;Cf.copy(r).invert(),As.copy(t.ray).applyMatrix4(Cf);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,u=n.attributes.position;if(f!==null){let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=f.getX(x),b=f.getX(x+1),_=sa(this,t,As,l,m,b,x);_&&e.push(_)}if(this.isLineLoop){let x=f.getX(p-1),g=f.getX(d),m=sa(this,t,As,l,x,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let x=d,g=p-1;x<g;x+=c){let m=sa(this,t,As,l,x,x+1,x);m&&e.push(m)}if(this.isLineLoop){let x=sa(this,t,As,l,p-1,d,p-1);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function sa(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Ca.fromBufferAttribute(a,r),Pa.fromBufferAttribute(a,s),e.distanceSqToSegment(Ca,Pa,Kc,Pf)>n)return;Kc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Kc);if(!(c<t.near||c>t.far))return{distance:c,point:Pf.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var If=new Y,Lf=new Y,Ke=class extends Ia{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)If.fromBufferAttribute(e,r),Lf.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+If.distanceTo(Lf);t.setAttribute("lineDistance",new Bt(n,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var lr=class extends hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new K(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ff=new Te,nu=new ar,oa=new Fi,aa=new Y,Kr=class extends gn{constructor(t=new Xt,e=new lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(r),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Ff.copy(r).invert(),nu.copy(t.ray).applyMatrix4(Ff);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=u,x=d;p<x;p++){let g=c.getX(p);aa.fromBufferAttribute(h,g),Df(aa,g,l,r,t,e,this)}}else{let u=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let p=u,x=d;p<x;p++)aa.fromBufferAttribute(h,p),Df(aa,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Df(i,t,e,n,r,s,o){let a=nu.distanceSqToPoint(i);if(a<e){let l=new Y;nu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Us=class extends cn{constructor(t=[],e=Bi,n,r,s,o,a,l,c,f){super(t,e,n,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fi=class extends cn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends cn{constructor(t,e,n=Un,r,s,o,a=$e,l=$e,c,f=qn,h=1){if(f!==qn&&f!==zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:h};super(u,r,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},La=class extends Kn{constructor(t,e=Un,n=Bi,r,s,o=$e,a=$e,l,c=qn){let f={width:t,height:t,depth:1},h=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Bs=class extends cn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Jr=class i extends Xt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],h=[],u=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(h,2));function p(x,g,m,b,_,y,M,w,R,v,C){let S=y/R,E=M/v,L=y/2,N=M/2,T=w/2,I=R+1,P=v+1,A=0,D=0,B=new Y;for(let z=0;z<P;z++){let k=z*E-N;for(let W=0;W<I;W++){let G=W*S-L;B[x]=G*b,B[g]=k*_,B[m]=T,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[m]=w>0?1:-1,f.push(B.x,B.y,B.z),h.push(W/R),h.push(1-z/v),A+=1}}for(let z=0;z<v;z++)for(let k=0;k<R;k++){let W=u+k+I*z,G=u+k+I*(z+1),Q=u+(k+1)+I*(z+1),j=u+(k+1)+I*z;l.push(W,G,j),l.push(G,Q,j),D+=6}a.addGroup(d,D,C),d+=D,u+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ks=class i extends Xt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new Y,f=new ae;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,u=3;h<=e;h++,u+=3){let d=n+h/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[u]/t+1)/2,f.y=(o[u+1]/t+1)/2,l.push(f.x,f.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(a,3)),this.setAttribute("uv",new Bt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Ug(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=Pd(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Gg(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let f=a,h=l;for(let u=e;u<r;u+=e){let d=i[u],p=i[u+1];d<a&&(a=d),p<l&&(l=p),d>f&&(f=d),p>h&&(h=p)}c=Math.max(f-a,h-l),c=c!==0?32767/c:0}return zs(s,o,e,a,l,c,0),o}function Pd(i,t,e,n,r){let s;if(r===Qg(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=Nf(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=Nf(o/n|0,i[o],i[o+1],s);return s&&jr(s,s.next)&&(Gs(s),s=s.next),s}function cr(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(jr(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Gs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,r,s,o){if(!i)return;!o&&s&&qg(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?kg(i,n,r,s):Bg(i)){t.push(l.i,i.i,c.i),Gs(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=zg(cr(i),t),zs(i,t,e,n,r,s,2)):o===2&&Vg(i,t,e,n,r,s):zs(cr(i),t,e,n,r,s,1);break}}}function Bg(i){let t=i.prev,e=i,n=i.next;if(Ne(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(r,s,o),h=Math.min(a,l,c),u=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=f&&p.x<=u&&p.y>=h&&p.y<=d&&Rs(r,a,s,l,o,c,p.x,p.y)&&Ne(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kg(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Ne(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,f=r.y,h=s.y,u=o.y,d=Math.min(a,l,c),p=Math.min(f,h,u),x=Math.max(a,l,c),g=Math.max(f,h,u),m=iu(d,p,t,e,n),b=iu(x,g,t,e,n),_=i.prevZ,y=i.nextZ;for(;_&&_.z>=m&&y&&y.z<=b;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Rs(a,f,l,h,c,u,_.x,_.y)&&Ne(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&Rs(a,f,l,h,c,u,y.x,y.y)&&Ne(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=m;){if(_.x>=d&&_.x<=x&&_.y>=p&&_.y<=g&&_!==r&&_!==o&&Rs(a,f,l,h,c,u,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=b;){if(y.x>=d&&y.x<=x&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&Rs(a,f,l,h,c,u,y.x,y.y)&&Ne(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function zg(i,t){let e=i;do{let n=e.prev,r=e.next.next;!jr(n,r)&&Ld(n,e,e.next,r)&&Vs(n,r)&&Vs(r,n)&&(t.push(n.i,e.i,r.i),Gs(e),Gs(e.next),e=i=r),e=e.next}while(e!==i);return cr(e)}function Vg(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kg(o,a)){let l=Fd(o,a);o=cr(o,o.next),l=cr(l,l.next),zs(o,t,e,n,r,s,0),zs(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Gg(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=Pd(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(Zg(c))}r.sort(Hg);for(let s=0;s<r.length;s++)e=Wg(r[s],e);return e}function Hg(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Wg(i,t){let e=Xg(i,t);if(!e)return t;let n=Fd(e,i);return cr(n,n.next),cr(e,e.next)}function Xg(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(jr(i,e))return e;do{if(jr(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let h=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(h<=n&&h>s&&(s=h,o=e.x<e.next.x?e:e.next,h===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Id(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let h=Math.abs(r-e.y)/(n-e.x);Vs(e,i)&&(h<f||h===f&&(e.x>o.x||e.x===o.x&&Yg(o,e)))&&(o=e,f=h)}e=e.next}while(e!==a);return o}function Yg(i,t){return Ne(i.prev,i,t.prev)<0&&Ne(t.next,i,i.next)<0}function qg(i,t,e,n){let r=i;do r.z===0&&(r.z=iu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,$g(r)}function $g(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function iu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Zg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Id(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Rs(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&Id(i,t,e,n,r,s,o,a)}function Kg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Jg(i,t)&&(Vs(i,t)&&Vs(t,i)&&jg(i,t)&&(Ne(i.prev,i,t.prev)||Ne(i,t.prev,t))||jr(i,t)&&Ne(i.prev,i,i.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function jr(i,t){return i.x===t.x&&i.y===t.y}function Ld(i,t,e,n){let r=ca(Ne(i,t,e)),s=ca(Ne(i,t,n)),o=ca(Ne(e,n,i)),a=ca(Ne(e,n,t));return!!(r!==s&&o!==a||r===0&&la(i,e,t)||s===0&&la(i,n,t)||o===0&&la(e,i,n)||a===0&&la(e,t,n))}function la(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ca(i){return i>0?1:i<0?-1:0}function Jg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ld(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vs(i,t){return Ne(i.prev,i,i.next)<0?Ne(i,t,i.next)>=0&&Ne(i,i.prev,t)>=0:Ne(i,t,i.prev)<0||Ne(i,i.next,t)<0}function jg(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Fd(i,t){let e=ru(i.i,i.x,i.y),n=ru(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Nf(i,t,e,n){let r=ru(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Gs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ru(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qg(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var su=class{static triangulate(t,e,n=2){return Ug(t,e,n)}},Hs=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];Of(t),Uf(n,t);let o=t.length;e.forEach(Of);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,Uf(n,e[l]);let a=su.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Of(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Uf(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var di=class i extends Xt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,f=l+1,h=t/a,u=e/l,d=[],p=[],x=[],g=[];for(let m=0;m<f;m++){let b=m*u-o;for(let _=0;_<c;_++){let y=_*h-s;p.push(y,-b,0),x.push(0,0,1),g.push(_/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<a;b++){let _=b+c*m,y=b+c*(m+1),M=b+1+c*(m+1),w=b+1+c*m;d.push(_,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Bt(p,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Ws=class i extends Xt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],f=[],h=t,u=(e-t)/r,d=new Y,p=new ae;for(let x=0;x<=r;x++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=h*Math.cos(m),d.y=h*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,f.push(p.x,p.y)}h+=u}for(let x=0;x<r;x++){let g=x*(n+1);for(let m=0;m<n;m++){let b=m+g,_=b,y=b+n+1,M=b+n+2,w=b+1;a.push(_,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new Bt(l,3)),this.setAttribute("normal",new Bt(c,3)),this.setAttribute("uv",new Bt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function dr(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(Bf(r))r.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(Bf(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function hn(i){let t={};for(let e=0;e<i.length;e++){let n=dr(i[e]);for(let r in n)t[r]=n[r]}return t}function Bf(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Fu(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var Dd={clone:dr,merge:hn},eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,un=class extends hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eb,this.fragmentShader=nb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=dr(t.uniforms),this.uniformsGroups=tb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new K().setHex(r.value);break;case"v2":this.uniforms[n].value=new ae().fromArray(r.value);break;case"v3":this.uniforms[n].value=new Y().fromArray(r.value);break;case"v4":this.uniforms[n].value=new Oe().fromArray(r.value);break;case"m3":this.uniforms[n].value=new jt().fromArray(r.value);break;case"m4":this.uniforms[n].value=new Te().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Fa=class extends un{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var Da=class extends hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=md,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Na=class extends hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function kr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Jc(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Di=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Oa=class extends Di{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qc,endingEnd:Qc}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case tu:s=t,a=2*e-n;break;case eu:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tu:o=t,l=2*n-e;break;case eu:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,h=this._offsetNext,u=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,b=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,_=(-1-d)*g+(1.5+d)*x+.5*p,y=d*g-d*x;for(let M=0;M!==a;++M)s[M]=m*o[f+M]+b*o[c+M]+_*o[l+M]+y*o[h+M];return s}},Ua=class extends Di{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(r-e),h=1-f;for(let u=0;u!==a;++u)s[u]=o[c+u]*h+o[l+u]*f;return s}},Ba=class extends Di{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},ka=class extends Di{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,h=this.outTangents;if(!f||!h){let p=(n-e)/(r-e),x=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*x+o[l+g]*p;return s}let u=a*2,d=t-1;for(let p=0;p!==a;++p){let x=o[c+p],g=o[l+p],m=d*u+p*2,b=h[m],_=h[m+1],y=t*u+p*2,M=f[y],w=f[y+1],R=rb(n,e,b,M,r);s[p]=Nd(R,x,_,w,g)}return s}};function Nd(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function ib(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function rb(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=Nd(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=ib(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var vn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=kr(e,this.TimeBufferType),this.values=kr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:kr(t.times,Array),values:kr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),Jc(t.settings)&&(n.settings={inTangents:kr(t.settings.inTangents,Array),outTangents:kr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Ba(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Oa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new ka(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Cs:e=this.InterpolantFactoryMethodDiscrete;break;case Sa:e=this.InterpolantFactoryMethodLinear;break;case fa:e=this.InterpolantFactoryMethodSmooth;break;case jc:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Cs;case this.InterpolantFactoryMethodLinear:return Sa;case this.InterpolantFactoryMethodSmooth:return fa;case this.InterpolantFactoryMethodBezier:return jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;Jc(this.settings)&&(kf(this.settings.inTangents,t),kf(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&($t("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&($t("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){$t("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){$t("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&bg(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){$t("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===fa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(r)l=!0;else{let h=a*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){let x=e[h+p];if(x!==e[u+p]||x!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,u=o*n;for(let d=0;d!==n;++d)e[u+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,Jc(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function kf(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}vn.prototype.ValueTypeName="";vn.prototype.TimeBufferType=Float32Array;vn.prototype.ValueBufferType=Float32Array;vn.prototype.DefaultInterpolation=Sa;var Ni=class extends vn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Cs;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var za=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}};za.prototype.ValueTypeName="color";var Va=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}};Va.prototype.ValueTypeName="number";var Ga=class extends Di{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let f=c+a;c!==f;c+=4)Zn.slerpFlat(s,0,o,c-a,o,c,l);return s}},Xs=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new Ga(this.times,this.values,this.getValueSize(),t)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var Oi=class extends vn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="string";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=Cs;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends vn{constructor(t,e,n,r){super(t,e,n,r)}};Ha.prototype.ValueTypeName="vector";var pa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(zf(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!zf(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function zf(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var Wa=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){let h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,u=c.length;h<u;h+=2){let d=c[h],p=c[h+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Od=new Wa,Qr=class{constructor(t){this.manager=t!==void 0?t:Od,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Qr.DEFAULT_MATERIAL_NAME="__DEFAULT";var zr=new WeakMap,Xa=class extends Qr{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=pa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let h=zr.get(o);h===void 0&&(h=[],zr.set(o,h)),h.push({onLoad:e,onError:r})}return o}let a=Xr("img");function l(){f(),e&&e(this);let h=zr.get(this)||[];for(let u=0;u<h.length;u++){let d=h[u];d.onLoad&&d.onLoad(this)}zr.delete(this),s.manager.itemEnd(t)}function c(h){f(),r&&r(h),pa.remove(`image:${t}`);let u=zr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onError&&p.onError(h)}zr.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),pa.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var ur=class extends Qr{constructor(t){super(t)}load(t,e,n,r){let s=new cn,o=new Xa(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var ua=new Y,ha=new Zn,Yn=new Y,Ys=class extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(ua,ha,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(ua,ha,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ua,ha,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new Y,Vf=new ae,Gf=new ae,qe=class extends Ys{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=wa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return wa*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-t/Ci.z)}getViewSize(t,e){return this.getViewBounds(t,Vf,Gf),e.subVectors(Gf,Vf)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Cc*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Jn=class extends Ys{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Vr=-90,Gr=1,Ya=class extends gn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qe(Vr,Gr,t,e);r.layers=this.layers,this.add(r);let s=new qe(Vr,Gr,t,e);s.layers=this.layers,this.add(s);let o=new qe(Vr,Gr,t,e);o.layers=this.layers,this.add(o);let a=new qe(Vr,Gr,t,e);a.layers=this.layers,this.add(a);let l=new qe(Vr,Gr,t,e);l.layers=this.layers,this.add(l);let c=new qe(Vr,Gr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,h=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(h,u,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},qa=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Du="\\[\\]\\.:\\/",sb=new RegExp("["+Du+"]","g"),Nu="[^"+Du+"]",ob="[^"+Du.replace("\\.","")+"]",ab=/((?:WC+[\/:])*)/.source.replace("WC",Nu),lb=/(WCOD+)?/.source.replace("WCOD",ob),cb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),ub=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),hb=new RegExp("^"+ab+lb+cb+ub+"$"),fb=["material","materials","bones","map"],ou=class{constructor(t,e,n){let r=n||Ce.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ce=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sb,"")}static parseTrackName(t){let e=hb.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);fb.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){$t("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){$t("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){$t("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){$t("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){$t("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){$t("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;$t("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){$t("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ce.Composite=ou;Ce.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ce.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ce.prototype.GetterByBindingType=[Ce.prototype._getValue_direct,Ce.prototype._getValue_array,Ce.prototype._getValue_arrayElement,Ce.prototype._getValue_toArray];Ce.prototype.SetterByBindingTypeAndVersioning=[[Ce.prototype._setValue_direct,Ce.prototype._setValue_direct_setNeedsUpdate,Ce.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_array,Ce.prototype._setValue_array_setNeedsUpdate,Ce.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_arrayElement,Ce.prototype._setValue_arrayElement_setNeedsUpdate,Ce.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ce.prototype._setValue_fromArray,Ce.prototype._setValue_fromArray_setNeedsUpdate,Ce.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var IS=new Float32Array(1);var Hf=new Te,qs=class{constructor(t,e,n=0,r=1/0){this.ray=new ar(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new $r,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):$t("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hf.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hf),this}intersectObject(t,e=!0,n=[]){return au(t,this,n,e),n.sort(Wf),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)au(t[r],this,n,e);return n.sort(Wf),n}};function Wf(i,t){return i.distance-t.distance}function au(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)au(s[o],t,e,!0)}}var Vu=class Vu{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};Vu.prototype.isMatrix2=!0;var lu=Vu;function Ou(i,t,e,n){let r=db(n);switch(e){case Eu:return i*t;case Ru:return i*t/r.components*r.byteLength;case el:return i*t/r.components*r.byteLength;case Vi:return i*t*2/r.components*r.byteLength;case nl:return i*t*2/r.components*r.byteLength;case Au:return i*t*3/r.components*r.byteLength;case En:return i*t*4/r.components*r.byteLength;case il:return i*t*4/r.components*r.byteLength;case js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sl:case al:return Math.max(i,16)*Math.max(t,8)/4;case rl:case ol:return Math.max(i,8)*Math.max(t,8)/2;case ll:case cl:case hl:case fl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ul:case no:case dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case gl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case xl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case yl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case vl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _l:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ml:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Tl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case El:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Al:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Rl:case Cl:case Pl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Il:case Ll:return Math.ceil(i/4)*Math.ceil(t/4)*8;case io:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function db(i){switch(i){case _n:case Mu:return{byteLength:1,components:1};case es:case Su:case kn:return{byteLength:2,components:1};case Qa:case tl:return{byteLength:2,components:4};case Un:case ja:case Bn:return{byteLength:4,components:1};case wu:case Tu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function rp(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function mb(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,h=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let f=l.array,h=l.updateRanges;if(i.bindBuffer(c,a),h.length===0)i.bufferSubData(c,0,f);else{h.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<h.length;d++){let p=h[u],x=h[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,h[u]=x)}h.length=u+1;for(let d=0,p=h.length;d<p;d++){let x=h[d];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bb=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mb=`#ifdef USE_AOMAP
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
#endif`,Sb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb=`#ifdef USE_BATCHING
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
#endif`,Tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Eb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ab=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cb=`#ifdef USE_IRIDESCENCE
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
#endif`,Pb=`#ifdef USE_BUMPMAP
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
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ub=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kb=`#define PI 3.141592653589793
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
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vb=`vec3 transformedNormal = objectNormal;
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
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yb="gl_FragColor = linearToOutputTexel( gl_FragColor );",qb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$b=`#ifdef USE_ENVMAP
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
#endif`,Zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
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
#endif`,Jb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ex=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ix=`#ifdef USE_GRADIENTMAP
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
}`,rx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ox=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ax=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ux=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dx=`PhysicalMaterial material;
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
#endif`,px=`uniform sampler2D dfgLUT;
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
}`,mx=`
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
#endif`,gx=`#if defined( RE_IndirectDiffuse )
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
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xx=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,vx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_x=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ex=`#if defined( USE_POINTS_UV )
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
#endif`,Ax=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Px=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ix=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lx=`#ifdef USE_MORPHTARGETS
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
#endif`,Fx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Nx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ox=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ux=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
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
#endif`,zx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Vx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ey=`float getShadowMask() {
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
}`,ny=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iy=`#ifdef USE_SKINNING
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
#endif`,ry=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sy=`#ifdef USE_SKINNING
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
#endif`,oy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ay=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ly=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uy=`#ifdef USE_TRANSMISSION
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
#endif`,hy=`#ifdef USE_TRANSMISSION
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
#endif`,fy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,my=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
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
}`,xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_y=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
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
}`,Sy=`#if DEPTH_PACKING == 3200
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
}`,wy=`#define DISTANCE
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
}`,Ty=`#define DISTANCE
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ay=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`uniform float scale;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Iy=`uniform vec3 diffuse;
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
}`,Ly=`#define LAMBERT
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
}`,Fy=`#define LAMBERT
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
}`,Dy=`#define MATCAP
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
}`,Ny=`#define MATCAP
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
}`,Oy=`#define NORMAL
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
}`,Uy=`#define NORMAL
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
}`,By=`#define PHONG
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
}`,ky=`#define PHONG
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
}`,zy=`#define STANDARD
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
}`,Vy=`#define STANDARD
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
}`,Gy=`#define TOON
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
}`,Hy=`#define TOON
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
}`,Wy=`uniform float size;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,Yy=`#include <common>
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
}`,qy=`uniform vec3 color;
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
}`,$y=`uniform float rotation;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,oe={alphahash_fragment:gb,alphahash_pars_fragment:bb,alphamap_fragment:xb,alphamap_pars_fragment:yb,alphatest_fragment:vb,alphatest_pars_fragment:_b,aomap_fragment:Mb,aomap_pars_fragment:Sb,batching_pars_vertex:wb,batching_vertex:Tb,begin_vertex:Eb,beginnormal_vertex:Ab,bsdfs:Rb,iridescence_fragment:Cb,bumpmap_pars_fragment:Pb,clipping_planes_fragment:Ib,clipping_planes_pars_fragment:Lb,clipping_planes_pars_vertex:Fb,clipping_planes_vertex:Db,color_fragment:Nb,color_pars_fragment:Ob,color_pars_vertex:Ub,color_vertex:Bb,common:kb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Vb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Hb,emissivemap_fragment:Wb,emissivemap_pars_fragment:Xb,colorspace_fragment:Yb,colorspace_pars_fragment:qb,envmap_fragment:$b,envmap_common_pars_fragment:Zb,envmap_pars_fragment:Kb,envmap_pars_vertex:Jb,envmap_physical_pars_fragment:lx,envmap_vertex:jb,fog_vertex:Qb,fog_pars_vertex:tx,fog_fragment:ex,fog_pars_fragment:nx,gradientmap_pars_fragment:ix,lightmap_pars_fragment:rx,lights_lambert_fragment:sx,lights_lambert_pars_fragment:ox,lights_pars_begin:ax,lights_toon_fragment:cx,lights_toon_pars_fragment:ux,lights_phong_fragment:hx,lights_phong_pars_fragment:fx,lights_physical_fragment:dx,lights_physical_pars_fragment:px,lights_fragment_begin:mx,lights_fragment_maps:gx,lights_fragment_end:bx,lightprobes_pars_fragment:xx,logdepthbuf_fragment:yx,logdepthbuf_pars_fragment:vx,logdepthbuf_pars_vertex:_x,logdepthbuf_vertex:Mx,map_fragment:Sx,map_pars_fragment:wx,map_particle_fragment:Tx,map_particle_pars_fragment:Ex,metalnessmap_fragment:Ax,metalnessmap_pars_fragment:Rx,morphinstance_vertex:Cx,morphcolor_vertex:Px,morphnormal_vertex:Ix,morphtarget_pars_vertex:Lx,morphtarget_vertex:Fx,normal_fragment_begin:Dx,normal_fragment_maps:Nx,normal_pars_fragment:Ox,normal_pars_vertex:Ux,normal_vertex:Bx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:zx,clearcoat_normal_fragment_maps:Vx,clearcoat_pars_fragment:Gx,iridescence_pars_fragment:Hx,opaque_fragment:Wx,packing:Xx,premultiplied_alpha_fragment:Yx,project_vertex:qx,dithering_fragment:$x,dithering_pars_fragment:Zx,roughnessmap_fragment:Kx,roughnessmap_pars_fragment:Jx,shadowmap_pars_fragment:jx,shadowmap_pars_vertex:Qx,shadowmap_vertex:ty,shadowmask_pars_fragment:ey,skinbase_vertex:ny,skinning_pars_vertex:iy,skinning_vertex:ry,skinnormal_vertex:sy,specularmap_fragment:oy,specularmap_pars_fragment:ay,tonemapping_fragment:ly,tonemapping_pars_fragment:cy,transmission_fragment:uy,transmission_pars_fragment:hy,uv_pars_fragment:fy,uv_pars_vertex:dy,uv_vertex:py,worldpos_vertex:my,background_vert:gy,background_frag:by,backgroundCube_vert:xy,backgroundCube_frag:yy,cube_vert:vy,cube_frag:_y,depth_vert:My,depth_frag:Sy,distance_vert:wy,distance_frag:Ty,equirect_vert:Ey,equirect_frag:Ay,linedashed_vert:Ry,linedashed_frag:Cy,meshbasic_vert:Py,meshbasic_frag:Iy,meshlambert_vert:Ly,meshlambert_frag:Fy,meshmatcap_vert:Dy,meshmatcap_frag:Ny,meshnormal_vert:Oy,meshnormal_frag:Uy,meshphong_vert:By,meshphong_frag:ky,meshphysical_vert:zy,meshphysical_frag:Vy,meshtoon_vert:Gy,meshtoon_frag:Hy,points_vert:Wy,points_frag:Xy,shadow_vert:Yy,shadow_frag:qy,sprite_vert:$y,sprite_frag:Zy},Tt={common:{diffuse:{value:new K(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new K(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Y},probesMax:{value:new Y},probesResolution:{value:new Y}},points:{diffuse:{value:new K(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new K(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ei={basic:{uniforms:hn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:oe.meshbasic_vert,fragmentShader:oe.meshbasic_frag},lambert:{uniforms:hn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new K(0)},envMapIntensity:{value:1}}]),vertexShader:oe.meshlambert_vert,fragmentShader:oe.meshlambert_frag},phong:{uniforms:hn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new K(0)},specular:{value:new K(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:oe.meshphong_vert,fragmentShader:oe.meshphong_frag},standard:{uniforms:hn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new K(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag},toon:{uniforms:hn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new K(0)}}]),vertexShader:oe.meshtoon_vert,fragmentShader:oe.meshtoon_frag},matcap:{uniforms:hn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:oe.meshmatcap_vert,fragmentShader:oe.meshmatcap_frag},points:{uniforms:hn([Tt.points,Tt.fog]),vertexShader:oe.points_vert,fragmentShader:oe.points_frag},dashed:{uniforms:hn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:oe.linedashed_vert,fragmentShader:oe.linedashed_frag},depth:{uniforms:hn([Tt.common,Tt.displacementmap]),vertexShader:oe.depth_vert,fragmentShader:oe.depth_frag},normal:{uniforms:hn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:oe.meshnormal_vert,fragmentShader:oe.meshnormal_frag},sprite:{uniforms:hn([Tt.sprite,Tt.fog]),vertexShader:oe.sprite_vert,fragmentShader:oe.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:oe.background_vert,fragmentShader:oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:oe.backgroundCube_vert,fragmentShader:oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:oe.cube_vert,fragmentShader:oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:oe.equirect_vert,fragmentShader:oe.equirect_frag},distance:{uniforms:hn([Tt.common,Tt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:oe.distance_vert,fragmentShader:oe.distance_frag},shadow:{uniforms:hn([Tt.lights,Tt.fog,{color:{value:new K(0)},opacity:{value:1}}]),vertexShader:oe.shadow_vert,fragmentShader:oe.shadow_frag}};ei.physical={uniforms:hn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new K(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new K(0)},specularColor:{value:new K(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:oe.meshphysical_vert,fragmentShader:oe.meshphysical_frag};var Ol={r:0,b:0,g:0},Ky=new Te,sp=new jt;sp.set(-1,0,0,0,1,0,0,0,1);function Jy(i,t,e,n,r,s){let o=new K(0),a=r===!0?0:1,l,c,f=null,h=0,u=null;function d(b){let _=b.isScene===!0?b.background:null;if(_&&_.isTexture){let y=b.backgroundBlurriness>0;_=t.get(_,y)}return _}function p(b){let _=!1,y=d(b);y===null?g(o,a):y&&y.isColor&&(g(y,1),_=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||_)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,_){let y=d(_);y&&(y.isCubeTexture||y.mapping===Ks)?(c===void 0&&(c=new It(new Jr(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:dr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Ky.makeRotationFromEuler(_.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(sp),c.material.toneMapped=ue.getTransfer(y.colorSpace)!==xe,(f!==y||h!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new It(new di(2,2),new un({name:"BackgroundMaterial",uniforms:dr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ue.getTransfer(y.colorSpace)!==xe,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,h=y.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function g(b,_){b.getRGB(Ol,Fu(i)),e.buffers.color.setClear(Ol.r,Ol.g,Ol.b,_,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),a=_,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(b){a=b,g(o,a)},render:p,addToRenderList:x,dispose:m}}function jy(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=u(null),s=r,o=!1;function a(E,L,N,T,I){let P=!1,A=h(E,T,N,L);s!==A&&(s=A,c(s.object)),P=d(E,T,N,I),P&&p(E,T,N,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,y(E,L,N,T),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function h(E,L,N,T){let I=T.wireframe===!0,P=n[L.id];P===void 0&&(P={},n[L.id]=P);let A=E.isInstancedMesh===!0?E.id:0,D=P[A];D===void 0&&(D={},P[A]=D);let B=D[N.id];B===void 0&&(B={},D[N.id]=B);let z=B[I];return z===void 0&&(z=u(l()),B[I]=z),z}function u(E){let L=[],N=[],T=[];for(let I=0;I<e;I++)L[I]=0,N[I]=0,T[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:N,attributeDivisors:T,object:E,attributes:{},index:null}}function d(E,L,N,T){let I=s.attributes,P=L.attributes,A=0,D=N.getAttributes();for(let B in D)if(D[B].location>=0){let k=I[B],W=P[B];if(W===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(W=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(W=E.instanceColor)),k===void 0||k.attribute!==W||W&&k.data!==W.data)return!0;A++}return s.attributesNum!==A||s.index!==T}function p(E,L,N,T){let I={},P=L.attributes,A=0,D=N.getAttributes();for(let B in D)if(D[B].location>=0){let k=P[B];k===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(k=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(k=E.instanceColor));let W={};W.attribute=k,k&&k.data&&(W.data=k.data),I[B]=W,A++}s.attributes=I,s.attributesNum=A,s.index=T}function x(){let E=s.newAttributes;for(let L=0,N=E.length;L<N;L++)E[L]=0}function g(E){m(E,0)}function m(E,L){let N=s.newAttributes,T=s.enabledAttributes,I=s.attributeDivisors;N[E]=1,T[E]===0&&(i.enableVertexAttribArray(E),T[E]=1),I[E]!==L&&(i.vertexAttribDivisor(E,L),I[E]=L)}function b(){let E=s.newAttributes,L=s.enabledAttributes;for(let N=0,T=L.length;N<T;N++)L[N]!==E[N]&&(i.disableVertexAttribArray(N),L[N]=0)}function _(E,L,N,T,I,P,A){A===!0?i.vertexAttribIPointer(E,L,N,I,P):i.vertexAttribPointer(E,L,N,T,I,P)}function y(E,L,N,T){x();let I=T.attributes,P=N.getAttributes(),A=L.defaultAttributeValues;for(let D in P){let B=P[D];if(B.location>=0){let z=I[D];if(z===void 0&&(D==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),D==="instanceColor"&&E.instanceColor&&(z=E.instanceColor)),z!==void 0){let k=z.normalized,W=z.itemSize,G=t.get(z);if(G===void 0)continue;let Q=G.buffer,j=G.type,tt=G.bytesPerElement,H=j===i.INT||j===i.UNSIGNED_INT||z.gpuType===ja;if(z.isInterleavedBufferAttribute){let $=z.data,st=$.stride,ct=z.offset;if($.isInstancedInterleavedBuffer){for(let it=0;it<B.locationSize;it++)m(B.location+it,$.meshPerAttribute);E.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let it=0;it<B.locationSize;it++)g(B.location+it);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let it=0;it<B.locationSize;it++)_(B.location+it,W/B.locationSize,j,k,st*tt,(ct+W/B.locationSize*it)*tt,H)}else{if(z.isInstancedBufferAttribute){for(let $=0;$<B.locationSize;$++)m(B.location+$,z.meshPerAttribute);E.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let $=0;$<B.locationSize;$++)g(B.location+$);i.bindBuffer(i.ARRAY_BUFFER,Q);for(let $=0;$<B.locationSize;$++)_(B.location+$,W/B.locationSize,j,k,W*tt,W/B.locationSize*$*tt,H)}}else if(A!==void 0){let k=A[D];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(B.location,k);break;case 3:i.vertexAttrib3fv(B.location,k);break;case 4:i.vertexAttrib4fv(B.location,k);break;default:i.vertexAttrib1fv(B.location,k)}}}}b()}function M(){C();for(let E in n){let L=n[E];for(let N in L){let T=L[N];for(let I in T){let P=T[I];for(let A in P)f(P[A].object),delete P[A];delete T[I]}}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let N in L){let T=L[N];for(let I in T){let P=T[I];for(let A in P)f(P[A].object),delete P[A];delete T[I]}}delete n[E.id]}function R(E){for(let L in n){let N=n[L];for(let T in N){let I=N[T];if(I[E.id]===void 0)continue;let P=I[E.id];for(let A in P)f(P[A].object),delete P[A];delete I[E.id]}}}function v(E){for(let L in n){let N=n[L],T=E.isInstancedMesh===!0?E.id:0,I=N[T];if(I!==void 0){for(let P in I){let A=I[P];for(let D in A)f(A[D].object),delete A[D];delete I[P]}delete N[T],Object.keys(N).length===0&&delete n[L]}}}function C(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:C,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:g,disableUnusedAttributes:b}}function Qy(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let u=0;for(let d=0;d<f;d++)u+=c[d];e.update(u,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function tv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==En&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let v=R===kn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==_n&&R!==Bn&&!v&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(qt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let h=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),_=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:y,maxSamples:M,samples:w}}function ev(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Dn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){let d=h.length!==0||u||n!==0||r;return r=u,n=h.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,u){e=f(h,u,0)},this.setState=function(h,u,d){let p=h.clippingPlanes,x=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?f(null):c();else{let b=s?0:n,_=b*4,y=m.clippingState||null;l.value=y,y=f(p,u,_,d);for(let M=0;M!==_;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,u,d,p){let x=h!==null?h.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=d+x*4,b=u.matrixWorldInverse;a.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let _=0,y=d;_!==x;++_,y+=4)o.copy(h[_]).applyMatrix4(b,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var rs=4,nv=6,iv=20,rv=256,so=new Jn,Ud=new K,Gu=null,Hu=0,Wu=0,Xu=!1,sv=new Y,pr=new Y,Bl=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=sv}=s;Gu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gu,Hu,Wu),this._renderer.xr.enabled=Xu,t.scissorTest=!1,is(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Bi||t.mapping===fr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gu=this._renderer.getRenderTarget(),Hu=this._renderer.getActiveCubeFace(),Wu=this._renderer.getActiveMipmapLevel(),Xu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:kn,format:En,colorSpace:Ps,depthBuffer:!1},r=Bd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bd(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=ov(s)),this._blurMaterial=lv(s,t,e),this._ggxMaterial=av(s,t,e)}return r}_compileMaterial(t){let e=new It(new Xt,t);this._renderer.compile(e,so)}_sceneToCubeUV(t,e,n,r,s){let l=new qe(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ud),h.toneMapping=On,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new It(new Jr,new Zt({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,g=x.material,m=!1,b=t.background;b?b.isColor&&(g.color.copy(b),t.background=null,m=!0):(g.color.copy(Ud),m=!0);for(let _=0;_<6;_++){let y=_%3;y===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):y===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));let M=this._cubeSize;is(r,y*M,_>2?M:0,M,M),h.setRenderTarget(r),m&&h.render(x,l),h.render(t,l)}h.toneMapping=d,h.autoClear=u,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Bi||t.mapping===fr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kd());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;is(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,so)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),u=c*1.25,d=h*u,{_lodMax:p}=this,x=this._sizeLods[n],g=3*x*(n>p-rs?n-p+rs:0),m=4*(this._cubeSize-x);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,is(s,g,m,3*x,2*x),r.setRenderTarget(s),r.render(a,so),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,is(t,g,m,3*x,2*x),r.setRenderTarget(t),r.render(a,so)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],h=3*f*(r>this._lodMax-rs?r-this._lodMax+rs:0),u=4*(this._cubeSize-f);is(e,h,u,3*f,2*f),o.setRenderTarget(e),o.render(l,so)}};function ov(i){let t=[],e=[],n=i,r=i-rs+1+nv;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],h=6,u=6,d=3,p=new Float32Array(d*u*h),x=new Float32Array(d*u*h);for(let m=0;m<h;m++){let b=m%3*2/3-1,_=m>2?0:-1,y=[b,_,0,b+2/3,_,0,b+2/3,_+1,0,b,_,0,b+2/3,_+1,0,b,_+1,0];p.set(y,d*u*m);for(let M=0;M<u;M++){let w=f[M*2]*2-1,R=f[M*2+1]*2-1;m===0?pr.set(1,R,w):m===1?pr.set(-w,1,-R):m===2?pr.set(-w,R,1):m===3?pr.set(-1,R,-w):m===4?pr.set(-w,-1,R):pr.set(w,R,-1),pr.toArray(x,(m*u+M)*d)}}let g=new Xt;g.setAttribute("position",new Tn(p,d)),g.setAttribute("outputDirection",new Tn(x,d)),e.push(new It(g,null)),n>rs&&n--}return{lodMeshes:e,sizeLods:t}}function Bd(i,t,e){let n=new Ze(i,t,e);return n.texture.mapping=Ks,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function is(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function av(i,t,e){return new un({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function lv(i,t,e){return new un({name:"SphericalGaussianBlur",defines:{SAMPLES:iv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function kd(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function zd(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function zl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var kl=class extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Us(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:dr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Qn});s.uniforms.tEquirect.value=e;let o=new It(r,s),a=e.minFilter;return e.minFilter===ki&&(e.minFilter=tn),new Ya(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function cv(i){let t=new WeakMap,e=new WeakMap,n=null;function r(u,d=!1){return u==null?null:d?o(u):s(u)}function s(u){if(u&&u.isTexture){let d=u.mapping;if(d===Za||d===Ka)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new kl(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),a(x.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let d=u.mapping,p=d===Za||d===Ka,x=d===Bi||d===fr;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Bl(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let b=u.image;return p&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new Bl(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",f),g.texture):null}}}return u}function a(u,d){return d===Za?u.mapping=Bi:d===Ka&&(u.mapping=fr),u}function l(u){let d=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&d++;return d===p}function c(u){let d=u.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(u){let d=u.target;d.removeEventListener("dispose",f);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:h}}function uv(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&rr("WebGLRenderer: "+n+" extension not supported."),r}}}function hv(i,t,e,n){let r={},s=new WeakMap;function o(h){let u=h.target;u.index!==null&&t.remove(u.index);for(let p in u.attributes)t.remove(u.attributes[p]);u.removeEventListener("dispose",o),delete r[u.id];let d=s.get(u);d&&(t.remove(d),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(h,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,e.memory.geometries++),u}function l(h){let u=h.attributes;for(let d in u)t.update(u[d],i.ARRAY_BUFFER)}function c(h){let u=[],d=h.index,p=h.attributes.position,x=0;if(p===void 0)return;if(d!==null){let b=d.array;x=d.version;for(let _=0,y=b.length;_<y;_+=3){let M=b[_+0],w=b[_+1],R=b[_+2];u.push(M,w,w,R,R,M)}}else{let b=p.array;x=p.version;for(let _=0,y=b.length/3-1;_<y;_+=3){let M=_+0,w=_+1,R=_+2;u.push(M,w,w,R,R,M)}}let g=new(p.count>=65535?or:Ns)(u,1);g.version=x;let m=s.get(h);m&&t.remove(m),s.set(h,g)}function f(h){let u=s.get(h);if(u){let d=h.index;d!==null&&u.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function fv(i,t,e){let n;function r(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,u){i.drawElements(n,u,s,h*o),e.update(u,n,1)}function c(h,u,d){d!==0&&(i.drawElementsInstanced(n,u,s,h*o,d),e.update(u,n,d))}function f(h,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,h,0,d);let x=0;for(let g=0;g<d;g++)x+=u[g];e.update(x,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function dv(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:$t("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function pv(i,t,e){let n=new WeakMap,r=new Oe;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0,u=n.get(a);if(u===void 0||u.count!==h){let C=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",C)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],b=a.morphAttributes.color||[],_=0;d===!0&&(_=1),p===!0&&(_=2),x===!0&&(_=3);let y=a.attributes.position.count*_,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*h),R=new Fs(w,y,M,h);R.type=Bn,R.needsUpdate=!0;let v=_*4;for(let S=0;S<h;S++){let E=g[S],L=m[S],N=b[S],T=y*M*4*S;for(let I=0;I<E.count;I++){let P=I*v;d===!0&&(r.fromBufferAttribute(E,I),w[T+P+0]=r.x,w[T+P+1]=r.y,w[T+P+2]=r.z,w[T+P+3]=0),p===!0&&(r.fromBufferAttribute(L,I),w[T+P+4]=r.x,w[T+P+5]=r.y,w[T+P+6]=r.z,w[T+P+7]=0),x===!0&&(r.fromBufferAttribute(N,I),w[T+P+8]=r.x,w[T+P+9]=r.y,w[T+P+10]=r.z,w[T+P+11]=N.itemSize===4?r.w:1)}}u={count:h,texture:R,size:new ae(y,M)},n.set(a,u),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let x=0;x<c.length;x++)d+=c[x];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:s}}function mv(i,t,e,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==f&&(t.update(u),s.set(u,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return u}function a(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var gv={[pu]:"LINEAR_TONE_MAPPING",[mu]:"REINHARD_TONE_MAPPING",[gu]:"CINEON_TONE_MAPPING",[bu]:"ACES_FILMIC_TONE_MAPPING",[yu]:"AGX_TONE_MAPPING",[vu]:"NEUTRAL_TONE_MAPPING",[xu]:"CUSTOM_TONE_MAPPING"};function bv(i,t,e,n,r,s){let o=new Ze(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Xt;c.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Bt([0,2,0,0,2,0],2));let f=new Fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new It(c,f),u=new Jn(-1,1,1,-1,0,1),d=null,p=null,x=!1,g,m=null,b=[],_=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<b.length;w++){let R=b[w];R.setSize&&R.setSize(y,M)}},this.setEffects=function(y){b=y,_=b.length>0&&b[0].isRenderPass===!0;let M=o.width,w=o.height;b.length>0&&a===null&&(a=new Ze(M,w,{type:kn,depthBuffer:!1,stencilBuffer:!1}),l=new Ze(M,w,{type:kn,depthBuffer:!1,stencilBuffer:!1}));for(let R=0;R<b.length;R++){let v=b[R];v.setSize&&v.setSize(M,w)}},this.begin=function(y,M){if(x||y.toneMapping===On&&b.length===0)return!1;if(m=M,M!==null){let w=M.width,R=M.height;(o.width!==w||o.height!==R)&&this.setSize(w,R)}return _===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=On,!0},this.hasRenderPass=function(){return _},this.end=function(y,M){y.toneMapping=g,x=!0;let w=o,R=a;for(let v=0;v<b.length;v++){let C=b[v];C.enabled!==!1&&(C.render(y,R,w,M),C.needsSwap!==!1&&(w=R,R=R===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,f.defines={},ue.getTransfer(d)===xe&&(f.defines.SRGB_TRANSFER="");let v=gv[p];v&&(f.defines[v]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(h,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var op=new cn,$u=new Kn(1,1),ap=new Fs,lp=new Aa,cp=new Us,Vd=[],Gd=[],Hd=new Float32Array(16),Wd=new Float32Array(9),Xd=new Float32Array(4);function os(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Vd[r];if(s===void 0&&(s=new Float32Array(r),Vd[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function We(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Vl(i,t){let e=Gd[t];e===void 0&&(e=new Int32Array(t),Gd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function xv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function yv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),We(e,t)}}function vv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),We(e,t)}}function _v(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),We(e,t)}}function Mv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;Xd.set(n),i.uniformMatrix2fv(this.addr,!1,Xd),We(e,n)}}function Sv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;Wd.set(n),i.uniformMatrix3fv(this.addr,!1,Wd),We(e,n)}}function wv(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(He(e,n))return;Hd.set(n),i.uniformMatrix4fv(this.addr,!1,Hd),We(e,n)}}function Tv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Ev(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),We(e,t)}}function Av(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),We(e,t)}}function Rv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),We(e,t)}}function Cv(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Pv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),We(e,t)}}function Iv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),We(e,t)}}function Lv(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),We(e,t)}}function Fv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($u.compareFunction=e.isReversedDepthBuffer()?Nl:Dl,s=$u):s=op,e.setTexture2D(t||s,r)}function Dv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||lp,r)}function Nv(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||cp,r)}function Ov(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||ap,r)}function Uv(i){switch(i){case 5126:return xv;case 35664:return yv;case 35665:return vv;case 35666:return _v;case 35674:return Mv;case 35675:return Sv;case 35676:return wv;case 5124:case 35670:return Tv;case 35667:case 35671:return Ev;case 35668:case 35672:return Av;case 35669:case 35673:return Rv;case 5125:return Cv;case 36294:return Pv;case 36295:return Iv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Fv;case 35679:case 36299:case 36307:return Dv;case 35680:case 36300:case 36308:case 36293:return Nv;case 36289:case 36303:case 36311:case 36292:return Ov}}function Bv(i,t){i.uniform1fv(this.addr,t)}function kv(i,t){let e=os(t,this.size,2);i.uniform2fv(this.addr,e)}function zv(i,t){let e=os(t,this.size,3);i.uniform3fv(this.addr,e)}function Vv(i,t){let e=os(t,this.size,4);i.uniform4fv(this.addr,e)}function Gv(i,t){let e=os(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Hv(i,t){let e=os(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wv(i,t){let e=os(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xv(i,t){i.uniform1iv(this.addr,t)}function Yv(i,t){i.uniform2iv(this.addr,t)}function qv(i,t){i.uniform3iv(this.addr,t)}function $v(i,t){i.uniform4iv(this.addr,t)}function Zv(i,t){i.uniform1uiv(this.addr,t)}function Kv(i,t){i.uniform2uiv(this.addr,t)}function Jv(i,t){i.uniform3uiv(this.addr,t)}function jv(i,t){i.uniform4uiv(this.addr,t)}function Qv(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);He(n,s)||(i.uniform1iv(this.addr,s),We(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=$u:o=op;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function t_(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);He(n,s)||(i.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||lp,s[o])}function e_(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);He(n,s)||(i.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||cp,s[o])}function n_(i,t,e){let n=this.cache,r=t.length,s=Vl(e,r);He(n,s)||(i.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||ap,s[o])}function i_(i){switch(i){case 5126:return Bv;case 35664:return kv;case 35665:return zv;case 35666:return Vv;case 35674:return Gv;case 35675:return Hv;case 35676:return Wv;case 5124:case 35670:return Xv;case 35667:case 35671:return Yv;case 35668:case 35672:return qv;case 35669:case 35673:return $v;case 5125:return Zv;case 36294:return Kv;case 36295:return Jv;case 36296:return jv;case 35678:case 36198:case 36298:case 36306:case 35682:return Qv;case 35679:case 36299:case 36307:return t_;case 35680:case 36300:case 36308:case 36293:return e_;case 36289:case 36303:case 36311:case 36292:return n_}}var Zu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Uv(e.type)}},Ku=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=i_(e.type)}},Ju=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},Yu=/(\w+)(\])?(\[|\.)?/g;function Yd(i,t){i.seq.push(t),i.map[t.id]=t}function r_(i,t,e){let n=i.name,r=n.length;for(Yu.lastIndex=0;;){let s=Yu.exec(n),o=Yu.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Yd(e,c===void 0?new Zu(a,i,t):new Ku(a,i,t));break}else{let h=e.map[a];h===void 0&&(h=new Ju(a),Yd(e,h)),e=h}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);r_(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function qd(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var s_=37297,o_=0;function a_(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $d=new jt;function l_(i){ue._getMatrix($d,ue.workingColorSpace,i);let t=`mat3( ${$d.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(i)){case Is:return[t,"LinearTransferOETF"];case xe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zd(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+a_(i.getShaderSource(t),a)}else return s}function c_(i,t){let e=l_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var u_={[pu]:"Linear",[mu]:"Reinhard",[gu]:"Cineon",[bu]:"ACESFilmic",[yu]:"AgX",[vu]:"Neutral",[xu]:"Custom"};function h_(i,t){let e=u_[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ul=new Y;function f_(){ue.getLuminanceCoefficients(Ul);let i=Ul.x.toFixed(4),t=Ul.y.toFixed(4),e=Ul.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function p_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function m_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ao(i){return i!==""}function Kd(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jd(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var g_=/^[ \t]*#include +<([\w\d./]+)>/gm;function ju(i){return i.replace(g_,x_)}var b_=new Map;function x_(i,t){let e=oe[t];if(e===void 0){let n=b_.get(t);if(n!==void 0)e=oe[n],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ju(e)}var y_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jd(i){return i.replace(y_,v_)}function v_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qd(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var __={[$s]:"SHADOWMAP_TYPE_PCF",[ts]:"SHADOWMAP_TYPE_VSM"};function M_(i){return __[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S_={[Bi]:"ENVMAP_TYPE_CUBE",[fr]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function w_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":S_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var T_={[fr]:"ENVMAP_MODE_REFRACTION"};function E_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":T_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var A_={[du]:"ENVMAP_BLENDING_MULTIPLY",[fd]:"ENVMAP_BLENDING_MIX",[dd]:"ENVMAP_BLENDING_ADD"};function R_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":A_[i.combine]||"ENVMAP_BLENDING_NONE"}function C_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function P_(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=M_(e),c=w_(e),f=E_(e),h=R_(e),u=C_(e),d=d_(e),p=p_(s),x=r.createProgram(),g,m,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ao).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(ao).join(`
`),m.length>0&&(m+=`
`)):(g=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),m=[Qd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?oe.tonemapping_pars_fragment:"",e.toneMapping!==On?h_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",oe.colorspace_pars_fragment,c_("linearToOutputTexel",e.outputColorSpace),f_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ao).join(`
`)),o=ju(o),o=Kd(o,e),o=Jd(o,e),a=ju(a),a=Kd(a,e),a=Jd(a,e),o=jd(o),a=jd(a),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=b+g+o,y=b+m+a,M=qd(r,r.VERTEX_SHADER,_),w=qd(r,r.FRAGMENT_SHADER,y);r.attachShader(x,M),r.attachShader(x,w),e.index0AttributeName!==void 0?r.bindAttribLocation(x,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(E){if(i.debug.checkShaderErrors){let L=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(M)||"",T=r.getShaderInfoLog(w)||"",I=L.trim(),P=N.trim(),A=T.trim(),D=!0,B=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(D=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,M,w);else{let z=Zd(r,M,"vertex"),k=Zd(r,w,"fragment");$t("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+z+`
`+k)}else I!==""?qt("WebGLProgram: Program Info Log:",I):(P===""||A==="")&&(B=!1);B&&(E.diagnostics={runnable:D,programLog:I,vertexShader:{log:P,prefix:g},fragmentShader:{log:A,prefix:m}})}r.deleteShader(M),r.deleteShader(w),v=new ss(r,x),C=m_(r,x)}let v;this.getUniforms=function(){return v===void 0&&R(this),v};let C;this.getAttributes=function(){return C===void 0&&R(this),C};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(x,s_)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=o_++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var I_=0,Qu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new th(t),e.set(t,n)),n}},th=class{constructor(t){this.id=I_++,this.code=t,this.usedTimes=0}};function L_(i){return i===Vi||i===no||i===io}function F_(i,t,e,n,r,s){let o=new $r,a=new Qu,l=new Set,c=[],f=new Map,h=n.logarithmicDepthBuffer,u=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,C,S,E,L,N){let T=E.fog,I=L.geometry,P=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?E.environment:null,A=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,D=t.get(v.envMap||P,A),B=D&&D.mapping===Ks?D.image.height:null,z=d[v.type];v.precision!==null&&(u=n.getMaxPrecision(v.precision),u!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,W=k!==void 0?k.length:0,G=0;I.morphAttributes.position!==void 0&&(G=1),I.morphAttributes.normal!==void 0&&(G=2),I.morphAttributes.color!==void 0&&(G=3);let Q,j,tt,H;if(z){let Ee=ei[z];Q=Ee.vertexShader,j=Ee.fragmentShader}else{Q=v.vertexShader,j=v.fragmentShader;let Ee=a.getVertexShaderStage(v),ge=a.getFragmentShaderStage(v);a.update(v,Ee,ge),tt=Ee.id,H=ge.id}let $=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),ct=L.isInstancedMesh===!0,it=L.isBatchedMesh===!0,ut=!!v.map,mt=!!v.matcap,bt=!!D,zt=!!v.aoMap,Wt=!!v.lightMap,Ct=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,ne=!!v.displacementMap,Se=!!v.emissiveMap,_e=!!v.metalnessMap,me=!!v.roughnessMap,X=v.anisotropy>0,sn=v.clearcoat>0,ye=v.dispersion>0,V=v.retroreflectivity>0,F=v.iridescence>0,J=v.sheen>0,rt=v.transmission>0,at=X&&!!v.anisotropyMap,gt=sn&&!!v.clearcoatMap,yt=sn&&!!v.clearcoatNormalMap,lt=sn&&!!v.clearcoatRoughnessMap,ft=F&&!!v.iridescenceMap,vt=F&&!!v.iridescenceThicknessMap,Vt=J&&!!v.sheenColorMap,wt=J&&!!v.sheenRoughnessMap,_t=!!v.specularMap,Gt=!!v.specularColorMap,Yt=!!v.specularIntensityMap,ie=rt&&!!v.transmissionMap,Z=rt&&!!v.thicknessMap,Mt=!!v.gradientMap,ht=!!v.alphaMap,St=v.alphaTest>0,Rt=!!v.alphaHash,dt=!!v.extensions,Ht=On;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ht=i.toneMapping);let Ut={shaderID:z,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:j,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:H,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:it,batchingColor:it&&L._colorsTexture!==null,instancing:ct,instancingColor:ct&&L.instanceColor!==null,instancingMorph:ct&&L.morphTexture!==null,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:ue.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ut,matcap:mt,envMap:bt,envMapMode:bt&&D.mapping,envMapCubeUVHeight:B,aoMap:zt,lightMap:Wt,bumpMap:Ct,normalMap:xt,displacementMap:ne,emissiveMap:Se,normalMapObjectSpace:xt&&v.normalMapType===gd,normalMapTangentSpace:xt&&v.normalMapType===Cu,packedNormalMap:xt&&v.normalMapType===Cu&&L_(v.normalMap.format),metalnessMap:_e,roughnessMap:me,anisotropy:X,anisotropyMap:at,clearcoat:sn,clearcoatMap:gt,clearcoatNormalMap:yt,clearcoatRoughnessMap:lt,dispersion:ye,retroreflection:V,iridescence:F,iridescenceMap:ft,iridescenceThicknessMap:vt,sheen:J,sheenColorMap:Vt,sheenRoughnessMap:wt,specularMap:_t,specularColorMap:Gt,specularIntensityMap:Yt,transmission:rt,transmissionMap:ie,thicknessMap:Z,gradientMap:Mt,opaque:v.transparent===!1&&v.blending===Ui&&v.alphaToCoverage===!1,alphaMap:ht,alphaTest:St,alphaHash:Rt,combine:v.combine,mapUv:ut&&p(v.map.channel),aoMapUv:zt&&p(v.aoMap.channel),lightMapUv:Wt&&p(v.lightMap.channel),bumpMapUv:Ct&&p(v.bumpMap.channel),normalMapUv:xt&&p(v.normalMap.channel),displacementMapUv:ne&&p(v.displacementMap.channel),emissiveMapUv:Se&&p(v.emissiveMap.channel),metalnessMapUv:_e&&p(v.metalnessMap.channel),roughnessMapUv:me&&p(v.roughnessMap.channel),anisotropyMapUv:at&&p(v.anisotropyMap.channel),clearcoatMapUv:gt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:yt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:wt&&p(v.sheenRoughnessMap.channel),specularMapUv:_t&&p(v.specularMap.channel),specularColorMapUv:Gt&&p(v.specularColorMap.channel),specularIntensityMapUv:Yt&&p(v.specularIntensityMap.channel),transmissionMapUv:ie&&p(v.transmissionMap.channel),thicknessMapUv:Z&&p(v.thicknessMap.channel),alphaMapUv:ht&&p(v.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(xt||X),vertexNormals:!!I.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!I.attributes.uv&&(ut||ht),fog:!!T,useFog:v.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||I.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:st,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:G,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ht,decodeVideoTexture:ut&&v.map.isVideoTexture===!0&&ue.getTransfer(v.map.colorSpace)===xe,decodeVideoTextureEmissive:Se&&v.emissiveMap.isVideoTexture===!0&&ue.getTransfer(v.emissiveMap.colorSpace)===xe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===se,flipSided:v.side===nn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:dt&&v.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(dt&&v.extensions.multiDraw===!0||it)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ut.vertexUv1s=l.has(1),Ut.vertexUv2s=l.has(2),Ut.vertexUv3s=l.has(3),l.clear(),Ut}function g(v){let C=[];if(v.shaderID?C.push(v.shaderID):(C.push(v.customVertexShaderID),C.push(v.customFragmentShaderID)),v.defines!==void 0)for(let S in v.defines)C.push(S),C.push(v.defines[S]);return v.isRawShaderMaterial===!1&&(m(C,v),b(C,v),C.push(i.outputColorSpace)),C.push(v.customProgramCacheKey),C.join()}function m(v,C){v.push(C.precision),v.push(C.outputColorSpace),v.push(C.envMapMode),v.push(C.envMapCubeUVHeight),v.push(C.mapUv),v.push(C.alphaMapUv),v.push(C.lightMapUv),v.push(C.aoMapUv),v.push(C.bumpMapUv),v.push(C.normalMapUv),v.push(C.displacementMapUv),v.push(C.emissiveMapUv),v.push(C.metalnessMapUv),v.push(C.roughnessMapUv),v.push(C.anisotropyMapUv),v.push(C.clearcoatMapUv),v.push(C.clearcoatNormalMapUv),v.push(C.clearcoatRoughnessMapUv),v.push(C.iridescenceMapUv),v.push(C.iridescenceThicknessMapUv),v.push(C.sheenColorMapUv),v.push(C.sheenRoughnessMapUv),v.push(C.specularMapUv),v.push(C.specularColorMapUv),v.push(C.specularIntensityMapUv),v.push(C.transmissionMapUv),v.push(C.thicknessMapUv),v.push(C.combine),v.push(C.fogExp2),v.push(C.sizeAttenuation),v.push(C.morphTargetsCount),v.push(C.morphAttributeCount),v.push(C.numSunLights),v.push(C.numDirLights),v.push(C.numPointLights),v.push(C.numSpotLights),v.push(C.numSpotLightMaps),v.push(C.numHemiLights),v.push(C.numRectAreaLights),v.push(C.numSunLightShadows),v.push(C.numDirLightShadows),v.push(C.numPointLightShadows),v.push(C.numSpotLightShadows),v.push(C.numSpotLightShadowsWithMaps),v.push(C.numLightProbes),v.push(C.shadowMapType),v.push(C.toneMapping),v.push(C.numClippingPlanes),v.push(C.numClipIntersection),v.push(C.depthPacking)}function b(v,C){o.disableAll(),C.instancing&&o.enable(0),C.instancingColor&&o.enable(1),C.instancingMorph&&o.enable(2),C.matcap&&o.enable(3),C.envMap&&o.enable(4),C.normalMapObjectSpace&&o.enable(5),C.normalMapTangentSpace&&o.enable(6),C.clearcoat&&o.enable(7),C.iridescence&&o.enable(8),C.alphaTest&&o.enable(9),C.vertexColors&&o.enable(10),C.vertexAlphas&&o.enable(11),C.vertexUv1s&&o.enable(12),C.vertexUv2s&&o.enable(13),C.vertexUv3s&&o.enable(14),C.vertexTangents&&o.enable(15),C.anisotropy&&o.enable(16),C.alphaHash&&o.enable(17),C.batching&&o.enable(18),C.dispersion&&o.enable(19),C.retroreflection&&o.enable(24),C.batchingColor&&o.enable(20),C.gradientMap&&o.enable(21),C.packedNormalMap&&o.enable(22),C.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.reversedDepthBuffer&&o.enable(4),C.skinning&&o.enable(5),C.morphTargets&&o.enable(6),C.morphNormals&&o.enable(7),C.morphColors&&o.enable(8),C.premultipliedAlpha&&o.enable(9),C.shadowMapEnabled&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.decodeVideoTextureEmissive&&o.enable(20),C.alphaToCoverage&&o.enable(21),C.numLightProbeGrids>0&&o.enable(22),C.hasPositionAttribute&&o.enable(23),v.push(o.mask)}function _(v){let C=d[v.type],S;if(C){let E=ei[C];S=Dd.clone(E.uniforms)}else S=v.uniforms;return S}function y(v,C){let S=f.get(C);return S!==void 0?++S.usedTimes:(S=new P_(i,C,v,r),c.push(S),f.set(C,S)),S}function M(v){if(--v.usedTimes===0){let C=c.indexOf(v);c[C]=c[c.length-1],c.pop(),f.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function R(){a.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:_,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:R}}function D_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function N_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function tp(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ep(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,p,x,g,m){let b=i[t];return b===void 0?(b={id:u.id,object:u,geometry:d,material:p,materialVariant:o(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=p,b.materialVariant=o(u),b.groupOrder=x,b.renderOrder=u.renderOrder,b.z=g,b.group=m),t++,b}function l(u,d,p,x,g,m,b){b.reversedDepth===!0&&(g=-g);let _=a(u,d,p,x,g,m);p.transmission>0?n.push(_):p.transparent===!0?r.push(_):e.push(_)}function c(u,d,p,x,g,m){let b=a(u,d,p,x,g,m);p.transmission>0?n.unshift(b):p.transparent===!0?r.unshift(b):e.unshift(b)}function f(u,d){e.length>1&&e.sort(u||N_),n.length>1&&n.sort(d||tp),r.length>1&&r.sort(d||tp)}function h(){for(let u=t,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function O_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new ep,i.set(n,[o])):r>=s.length?(o=new ep,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function U_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new Y,color:new K};break;case"SpotLight":e={position:new Y,direction:new Y,color:new K,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new K,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new K,groundColor:new K};break;case"RectAreaLight":e={color:new K,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[t.id]=e,e}}}function B_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var k_=0;function z_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function V_(i){let t=new U_,e=B_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Y);let r=new Y,s=new Te,o=new Te;function a(c){let f=0,h=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,b=0,_=0,y=0,M=0,w=0,R=0,v=0,C=0,S=0;c.sort(z_);for(let L=0,N=c.length;L<N;L++){let T=c[L],I=T.color,P=T.intensity,A=T.distance,D=null;if(T.shadow&&T.shadow.map&&(T.shadow.map.texture.format===Vi?D=T.shadow.map.texture:D=T.shadow.map.depthTexture||T.shadow.map.texture),T.isAmbientLight)f+=I.r*P,h+=I.g*P,u+=I.b*P;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],P);S++}else if(T.isSunLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let z=T.shadow,k=e.get(T);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=k,n.sunShadowMap[p]=D;let W=z.getViewportCount();for(let G=0;G<W;G++)n.sunShadowMatrix[x+G]=z.getMatrix(G),n.sunShadowCascade[x+G]=z._cascadeData[G];x+=W,p++}n.sun[d]=B,d++}else if(T.isDirectionalLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let z=T.shadow,k=e.get(T);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.directionalShadow[g]=k,n.directionalShadowMap[g]=D,n.directionalShadowMatrix[g]=T.shadow.matrix,M++}n.directional[g]=B,g++}else if(T.isSpotLight){let B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(I).multiplyScalar(P),B.distance=A,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[b]=B;let z=T.shadow;if(T.map&&(n.spotLightMap[v]=T.map,v++,z.updateMatrices(T),T.castShadow&&C++),n.spotLightMatrix[b]=z.matrix,T.castShadow){let k=e.get(T);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,n.spotShadow[b]=k,n.spotShadowMap[b]=D,R++}b++}else if(T.isRectAreaLight){let B=t.get(T);B.color.copy(I).multiplyScalar(P),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[_]=B,_++}else if(T.isPointLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let z=T.shadow,k=e.get(T);k.shadowIntensity=z.intensity,k.shadowBias=z.bias,k.shadowNormalBias=z.normalBias,k.shadowRadius=z.radius,k.shadowMapSize=z.mapSize,k.shadowCameraNear=z.camera.near,k.shadowCameraFar=z.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=D,n.pointShadowMatrix[m]=T.shadow.matrix,w++}n.point[m]=B,m++}else if(T.isHemisphereLight){let B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(P),B.groundColor.copy(T.groundColor).multiplyScalar(P),n.hemi[y]=B,y++}}_>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=u;let E=n.hash;(E.sunLength!==d||E.directionalLength!==g||E.pointLength!==m||E.spotLength!==b||E.rectAreaLength!==_||E.hemiLength!==y||E.numSunShadows!==p||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==R||E.numSpotMaps!==v||E.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=b,n.rectArea.length=_,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=R,n.spotShadowMap.length=R,n.spotLightMatrix.length=R+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=S,E.sunLength=d,E.directionalLength=g,E.pointLength=m,E.spotLength=b,E.rectAreaLength=_,E.hemiLength=y,E.numSunShadows=p,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=R,E.numSpotMaps=v,E.numLightProbes=S,n.version=k_++)}function l(c,f){let h=0,u=0,d=0,p=0,x=0,g=0,m=f.matrixWorldInverse;for(let b=0,_=c.length;b<_;b++){let y=c[b];if(y.isSunLight){let M=n.sun[h];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),h++}else if(y.isDirectionalLight){let M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),u++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[x];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),x++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function np(i){let t=new V_(i),e=[],n=[],r=[];function s(u){h.camera=u,e.length=0,n.length=0,r.length=0}function o(u){e.push(u)}function a(u){n.push(u)}function l(u){r.push(u)}function c(){t.setup(e)}function f(u){t.setupView(e,u)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function G_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new np(i),t.set(r,[a])):s>=o.length?(a=new np(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var H_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W_=`uniform sampler2D shadow_pass;
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
}`,X_=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],Y_=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],ip=new Te,oo=new Y,qu=new Y;function q_(i,t,e){let n=new Os,r=new ae,s=new ae,o=new Oe,a=new Da,l=new Na,c={},f=e.maxTextureSize,h={[jn]:nn,[nn]:jn,[se]:se},u=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:H_,fragmentShader:W_}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let p=new Xt;p.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new It(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$s;let m=this.type;this.render=function(w,R,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===qf&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=$s);let C=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Qn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let N=m!==this.type;N&&R.traverse(function(T){T.material&&(Array.isArray(T.material)?T.material.forEach(I=>I.needsUpdate=!0):T.material.needsUpdate=!0)});for(let T=0,I=w.length;T<I;T++){let P=w[T],A=P.shadow;if(A===void 0){qt("WebGLShadowMap:",P,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;r.copy(A.mapSize);let D=A.getFrameExtents();r.multiply(D),s.copy(A.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/D.x),r.x=s.x*D.x,A.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/D.y),r.y=s.y*D.y,A.mapSize.y=s.y));let B=i.state.buffers.depth.getReversed();if(A.camera._reversedDepth=B,A.map===null||N===!0){if(A.map!==null&&(A.map.depthTexture!==null&&(A.map.depthTexture.dispose(),A.map.depthTexture=null),A.map.dispose()),this.type===ts){if(P.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}A.map=new Ze(r.x,r.y,{format:Vi,type:kn,minFilter:tn,magFilter:tn,generateMipmaps:!1}),A.map.texture.name=P.name+".shadowMap",A.map.depthTexture=new Kn(r.x,r.y,Bn),A.map.depthTexture.name=P.name+".shadowMapDepth",A.map.depthTexture.format=qn,A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=$e,A.map.depthTexture.magFilter=$e}else P.isPointLight?(A.map=new kl(r.x),A.map.depthTexture=new La(r.x,Un)):(A.map=new Ze(r.x,r.y),A.map.depthTexture=new Kn(r.x,r.y,Un)),A.map.depthTexture.name=P.name+".shadowMap",A.map.depthTexture.format=qn,this.type===$s?(A.map.depthTexture.compareFunction=B?Nl:Dl,A.map.depthTexture.minFilter=tn,A.map.depthTexture.magFilter=tn):(A.map.depthTexture.compareFunction=null,A.map.depthTexture.minFilter=$e,A.map.depthTexture.magFilter=$e);A.camera.updateProjectionMatrix()}A.map.isWebGLCubeRenderTarget!==!0&&(A.map.width!==r.x||A.map.height!==r.y)&&A.map.setSize(r.x,r.y);let z=A.map.isWebGLCubeRenderTarget?6:A.getViewportCount();P.isPointLight!==!0&&A.updateMatrices(P,v);for(let k=0;k<z;k++){let W=A.getCamera(k);if(P.isPointLight){let G=A.camera,Q=A.matrix,j=P.distance||G.far;j!==G.far&&(G.far=j,G.updateProjectionMatrix()),oo.setFromMatrixPosition(P.matrixWorld),G.position.copy(oo),qu.copy(G.position),qu.add(X_[k]),G.up.copy(Y_[k]),G.lookAt(qu),G.updateMatrixWorld(),Q.makeTranslation(-oo.x,-oo.y,-oo.z),ip.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),A._frustum.setFromProjectionMatrix(ip,G.coordinateSystem,G.reversedDepth)}if(A.map.isWebGLCubeRenderTarget)i.setRenderTarget(A.map,k),i.clear();else{k===0&&(i.setRenderTarget(A.map),i.clear());let G=A.getViewport(k);o.set(s.x*G.x,s.y*G.y,s.x*G.z,s.y*G.w),L.viewport(o)}n=A.getFrustum(k),y(R,v,W,P,this.type)}A.isPointLightShadow!==!0&&this.type===ts&&b(A,v),A.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(C,S,E)};function b(w,R){let v=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ze(r.x,r.y,{format:Vi,type:kn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(R,null,v,u,x,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(R,null,v,d,x,null)}function _(w,R,v,C){let S=null,E=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=v.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let L=S.uuid,N=R.uuid,T=c[L];T===void 0&&(T={},c[L]=T);let I=T[N];I===void 0&&(I=S.clone(),T[N]=I,R.addEventListener("dispose",M)),S=I}if(S.visible=R.visible,S.wireframe=R.wireframe,C===ts?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:h[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,v.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let L=i.properties.get(S);L.light=v}return S}function y(w,R,v,C,S){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ts)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);let N=t.update(w),T=w.material;if(Array.isArray(T)){let I=N.groups;for(let P=0,A=I.length;P<A;P++){let D=I[P],B=T[D.materialIndex];if(B&&B.visible){let z=_(w,B,C,S);w.onBeforeShadow(i,w,R,v,N,z,D),i.renderBufferDirect(v,null,N,z,w,D),w.onAfterShadow(i,w,R,v,N,z,D)}}}else if(T.visible){let I=_(w,T,C,S);w.onBeforeShadow(i,w,R,v,N,I,null),i.renderBufferDirect(v,null,N,I,w,null),w.onAfterShadow(i,w,R,v,N,I,null)}}let L=w.children;for(let N=0,T=L.length;N<T;N++)y(L[N],R,v,C,S)}function M(w){w.target.removeEventListener("dispose",M);for(let v in c){let C=c[v],S=w.target.uuid;S in C&&(C[S].dispose(),delete C[S])}}}function $_(i,t){function e(){let Z=!1,Mt=new Oe,ht=null,St=new Oe(0,0,0,0);return{setMask:function(Rt){ht!==Rt&&!Z&&(i.colorMask(Rt,Rt,Rt,Rt),ht=Rt)},setLocked:function(Rt){Z=Rt},setClear:function(Rt,dt,Ht,Ut,Ee){Ee===!0&&(Rt*=Ut,dt*=Ut,Ht*=Ut),Mt.set(Rt,dt,Ht,Ut),St.equals(Mt)===!1&&(i.clearColor(Rt,dt,Ht,Ut),St.copy(Mt))},reset:function(){Z=!1,ht=null,St.set(-1,0,0,0)}}}function n(){let Z=!1,Mt=!1,ht=null,St=null,Rt=null;return{setReversed:function(dt){if(Mt!==dt){let Ht=t.get("EXT_clip_control");dt?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Mt=dt;let Ut=Rt;Rt=null,this.setClear(Ut)}},getReversed:function(){return Mt},setTest:function(dt){dt?$(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(dt){ht!==dt&&!Z&&(i.depthMask(dt),ht=dt)},setFunc:function(dt){if(Mt&&(dt=Rd[dt]),St!==dt){switch(dt){case ma:i.depthFunc(i.NEVER);break;case ga:i.depthFunc(i.ALWAYS);break;case ba:i.depthFunc(i.LESS);break;case Wr:i.depthFunc(i.LEQUAL);break;case xa:i.depthFunc(i.EQUAL);break;case ya:i.depthFunc(i.GEQUAL);break;case va:i.depthFunc(i.GREATER);break;case _a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}St=dt}},setLocked:function(dt){Z=dt},setClear:function(dt){Rt!==dt&&(Rt=dt,Mt&&(dt=1-dt),i.clearDepth(dt))},reset:function(){Z=!1,ht=null,St=null,Rt=null,Mt=!1}}}function r(){let Z=!1,Mt=null,ht=null,St=null,Rt=null,dt=null,Ht=null,Ut=null,Ee=null;return{setTest:function(ge){Z||(ge?$(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(ge){Mt!==ge&&!Z&&(i.stencilMask(ge),Mt=ge)},setFunc:function(ge,Pn,Wn){(ht!==ge||St!==Pn||Rt!==Wn)&&(i.stencilFunc(ge,Pn,Wn),ht=ge,St=Pn,Rt=Wn)},setOp:function(ge,Pn,Wn){(dt!==ge||Ht!==Pn||Ut!==Wn)&&(i.stencilOp(ge,Pn,Wn),dt=ge,Ht=Pn,Ut=Wn)},setLocked:function(ge){Z=ge},setClear:function(ge){Ee!==ge&&(i.clearStencil(ge),Ee=ge)},reset:function(){Z=!1,Mt=null,ht=null,St=null,Rt=null,dt=null,Ht=null,Ut=null,Ee=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,f={},h={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,b=null,_=null,y=null,M=null,w=null,R=null,v=new K(0,0,0),C=0,S=!1,E=null,L=null,N=null,T=null,I=null,P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),A=!1,D=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(B)[1]),A=D>=1):B.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),A=D>=2);let z=null,k={},W=i.getParameter(i.SCISSOR_BOX),G=i.getParameter(i.VIEWPORT),Q=new Oe().fromArray(W),j=new Oe().fromArray(G);function tt(Z,Mt,ht,St){let Rt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(Z,dt),i.texParameteri(Z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(Z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<ht;Ht++)Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,St,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(Mt+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return dt}let H={};H[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),H[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),H[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),$(i.DEPTH_TEST),o.setFunc(Wr),Ct(!1),xt(cu),$(i.CULL_FACE),zt(Qn);function $(Z){f[Z]!==!0&&(i.enable(Z),f[Z]=!0)}function st(Z){f[Z]!==!1&&(i.disable(Z),f[Z]=!1)}function ct(Z,Mt){return u[Z]!==Mt?(i.bindFramebuffer(Z,Mt),u[Z]=Mt,Z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Mt),Z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function it(Z,Mt){let ht=p,St=!1;if(Z){ht=d.get(Mt),ht===void 0&&(ht=[],d.set(Mt,ht));let Rt=Z.textures;if(ht.length!==Rt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Ht=Rt.length;dt<Ht;dt++)ht[dt]=i.COLOR_ATTACHMENT0+dt;ht.length=Rt.length,St=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,St=!0);St&&i.drawBuffers(ht)}function ut(Z){return x!==Z?(i.useProgram(Z),x=Z,!0):!1}let mt={[hr]:i.FUNC_ADD,[Zf]:i.FUNC_SUBTRACT,[Kf]:i.FUNC_REVERSE_SUBTRACT};mt[Jf]=i.MIN,mt[jf]=i.MAX;let bt={[Qf]:i.ZERO,[td]:i.ONE,[ed]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[ad]:i.SRC_ALPHA_SATURATE,[sd]:i.DST_COLOR,[id]:i.DST_ALPHA,[nd]:i.ONE_MINUS_SRC_COLOR,[fu]:i.ONE_MINUS_SRC_ALPHA,[od]:i.ONE_MINUS_DST_COLOR,[rd]:i.ONE_MINUS_DST_ALPHA,[ld]:i.CONSTANT_COLOR,[cd]:i.ONE_MINUS_CONSTANT_COLOR,[ud]:i.CONSTANT_ALPHA,[hd]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(Z,Mt,ht,St,Rt,dt,Ht,Ut,Ee,ge){if(Z===Qn){g===!0&&(st(i.BLEND),g=!1);return}if(g===!1&&($(i.BLEND),g=!0),Z!==$f){if(Z!==m||ge!==S){if((b!==hr||M!==hr)&&(i.blendEquation(i.FUNC_ADD),b=hr,M=hr),ge)switch(Z){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ie:i.blendFunc(i.ONE,i.ONE);break;case uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Zs:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:$t("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ie:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case uu:$t("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zs:$t("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:$t("WebGLState: Invalid blending: ",Z);break}_=null,y=null,w=null,R=null,v.set(0,0,0),C=0,m=Z,S=ge}return}Rt=Rt||Mt,dt=dt||ht,Ht=Ht||St,(Mt!==b||Rt!==M)&&(i.blendEquationSeparate(mt[Mt],mt[Rt]),b=Mt,M=Rt),(ht!==_||St!==y||dt!==w||Ht!==R)&&(i.blendFuncSeparate(bt[ht],bt[St],bt[dt],bt[Ht]),_=ht,y=St,w=dt,R=Ht),(Ut.equals(v)===!1||Ee!==C)&&(i.blendColor(Ut.r,Ut.g,Ut.b,Ee),v.copy(Ut),C=Ee),m=Z,S=!1}function Wt(Z,Mt){Z.side===se?st(i.CULL_FACE):$(i.CULL_FACE);let ht=Z.side===nn;Mt&&(ht=!ht),Ct(ht),Z.blending===Ui&&Z.transparent===!1?zt(Qn):zt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),o.setFunc(Z.depthFunc),o.setTest(Z.depthTest),o.setMask(Z.depthWrite),s.setMask(Z.colorWrite);let St=Z.stencilWrite;a.setTest(St),St&&(a.setMask(Z.stencilWriteMask),a.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),a.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Se(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?$(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ct(Z){E!==Z&&(Z?i.frontFace(i.CW):i.frontFace(i.CCW),E=Z)}function xt(Z){Z!==Xf?($(i.CULL_FACE),Z!==L&&(Z===cu?i.cullFace(i.BACK):Z===Yf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),L=Z}function ne(Z){Z!==N&&(A&&i.lineWidth(Z),N=Z)}function Se(Z,Mt,ht){Z?($(i.POLYGON_OFFSET_FILL),(T!==Mt||I!==ht)&&(T=Mt,I=ht,o.getReversed()&&(Mt=-Mt),i.polygonOffset(Mt,ht))):st(i.POLYGON_OFFSET_FILL)}function _e(Z){Z?$(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function me(Z){Z===void 0&&(Z=i.TEXTURE0+P-1),z!==Z&&(i.activeTexture(Z),z=Z)}function X(Z,Mt,ht){ht===void 0&&(z===null?ht=i.TEXTURE0+P-1:ht=z);let St=k[ht];St===void 0&&(St={type:void 0,texture:void 0},k[ht]=St),(St.type!==Z||St.texture!==Mt)&&(z!==ht&&(i.activeTexture(ht),z=ht),i.bindTexture(Z,Mt||H[Z]),St.type=Z,St.texture=Mt)}function sn(){let Z=k[z];Z!==void 0&&Z.type!==void 0&&(i.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function ye(){try{i.compressedTexImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function V(){try{i.compressedTexImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function F(){try{i.texSubImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function J(){try{i.texSubImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function rt(){try{i.compressedTexSubImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function at(){try{i.compressedTexSubImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function gt(){try{i.texStorage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function yt(){try{i.texStorage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function lt(){try{i.texImage2D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function ft(){try{i.texImage3D(...arguments)}catch(Z){$t("WebGLState:",Z)}}function vt(Z){return h[Z]!==void 0?h[Z]:i.getParameter(Z)}function Vt(Z,Mt){h[Z]!==Mt&&(i.pixelStorei(Z,Mt),h[Z]=Mt)}function wt(Z){Q.equals(Z)===!1&&(i.scissor(Z.x,Z.y,Z.z,Z.w),Q.copy(Z))}function _t(Z){j.equals(Z)===!1&&(i.viewport(Z.x,Z.y,Z.z,Z.w),j.copy(Z))}function Gt(Z,Mt){let ht=c.get(Mt);ht===void 0&&(ht=new WeakMap,c.set(Mt,ht));let St=ht.get(Z);St===void 0&&(St=i.getUniformBlockIndex(Mt,Z.name),ht.set(Z,St))}function Yt(Z,Mt){let St=c.get(Mt).get(Z);l.get(Mt)!==St&&(i.uniformBlockBinding(Mt,St,Z.__bindingPointIndex),l.set(Mt,St))}function ie(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},h={},z=null,k={},u={},d=new WeakMap,p=[],x=null,g=!1,m=null,b=null,_=null,y=null,M=null,w=null,R=null,v=new K(0,0,0),C=0,S=!1,E=null,L=null,N=null,T=null,I=null,Q.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:$,disable:st,bindFramebuffer:ct,drawBuffers:it,useProgram:ut,setBlending:zt,setMaterial:Wt,setFlipSided:Ct,setCullFace:xt,setLineWidth:ne,setPolygonOffset:Se,setScissorTest:_e,activeTexture:me,bindTexture:X,unbindTexture:sn,compressedTexImage2D:ye,compressedTexImage3D:V,texImage2D:lt,texImage3D:ft,pixelStorei:Vt,getParameter:vt,updateUBOMapping:Gt,uniformBlockBinding:Yt,texStorage2D:gt,texStorage3D:yt,texSubImage2D:F,texSubImage3D:J,compressedTexSubImage2D:rt,compressedTexSubImage3D:at,scissor:wt,viewport:_t,reset:ie}}function Z_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,f=new WeakMap,h=new Set,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(V,F){return p?new OffscreenCanvas(V,F):Xr("canvas")}function g(V,F,J){let rt=1,at=ye(V);if((at.width>J||at.height>J)&&(rt=J/Math.max(at.width,at.height)),rt<1)if(typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&V instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&V instanceof ImageBitmap||typeof VideoFrame<"u"&&V instanceof VideoFrame){let gt=Math.floor(rt*at.width),yt=Math.floor(rt*at.height);u===void 0&&(u=x(gt,yt));let lt=F?x(gt,yt):u;return lt.width=gt,lt.height=yt,lt.getContext("2d").drawImage(V,0,0,gt,yt),qt("WebGLRenderer: Texture has been resized from ("+at.width+"x"+at.height+") to ("+gt+"x"+yt+")."),lt}else return"data"in V&&qt("WebGLRenderer: Image in DataTexture is too big ("+at.width+"x"+at.height+")."),V;return V}function m(V){return V.generateMipmaps}function b(V){i.generateMipmap(V)}function _(V){return V.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:V.isWebGL3DRenderTarget?i.TEXTURE_3D:V.isWebGLArrayRenderTarget||V.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(V,F,J,rt,at,gt=!1){if(V!==null){if(i[V]!==void 0)return i[V];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+V+"'")}let yt;rt&&(yt=t.get("EXT_texture_norm16"),yt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let lt=F;if(F===i.RED&&(J===i.FLOAT&&(lt=i.R32F),J===i.HALF_FLOAT&&(lt=i.R16F),J===i.UNSIGNED_BYTE&&(lt=i.R8),J===i.UNSIGNED_SHORT&&yt&&(lt=yt.R16_EXT),J===i.SHORT&&yt&&(lt=yt.R16_SNORM_EXT)),F===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.R8UI),J===i.UNSIGNED_SHORT&&(lt=i.R16UI),J===i.UNSIGNED_INT&&(lt=i.R32UI),J===i.BYTE&&(lt=i.R8I),J===i.SHORT&&(lt=i.R16I),J===i.INT&&(lt=i.R32I)),F===i.RG&&(J===i.FLOAT&&(lt=i.RG32F),J===i.HALF_FLOAT&&(lt=i.RG16F),J===i.UNSIGNED_BYTE&&(lt=i.RG8),J===i.UNSIGNED_SHORT&&yt&&(lt=yt.RG16_EXT),J===i.SHORT&&yt&&(lt=yt.RG16_SNORM_EXT)),F===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RG8UI),J===i.UNSIGNED_SHORT&&(lt=i.RG16UI),J===i.UNSIGNED_INT&&(lt=i.RG32UI),J===i.BYTE&&(lt=i.RG8I),J===i.SHORT&&(lt=i.RG16I),J===i.INT&&(lt=i.RG32I)),F===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGB8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGB16UI),J===i.UNSIGNED_INT&&(lt=i.RGB32UI),J===i.BYTE&&(lt=i.RGB8I),J===i.SHORT&&(lt=i.RGB16I),J===i.INT&&(lt=i.RGB32I)),F===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(lt=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(lt=i.RGBA16UI),J===i.UNSIGNED_INT&&(lt=i.RGBA32UI),J===i.BYTE&&(lt=i.RGBA8I),J===i.SHORT&&(lt=i.RGBA16I),J===i.INT&&(lt=i.RGBA32I)),F===i.RGB&&(J===i.UNSIGNED_SHORT&&yt&&(lt=yt.RGB16_EXT),J===i.SHORT&&yt&&(lt=yt.RGB16_SNORM_EXT),J===i.UNSIGNED_INT_5_9_9_9_REV&&(lt=i.RGB9_E5),J===i.UNSIGNED_INT_10F_11F_11F_REV&&(lt=i.R11F_G11F_B10F)),F===i.RGBA){let ft=gt?Is:ue.getTransfer(at);J===i.FLOAT&&(lt=i.RGBA32F),J===i.HALF_FLOAT&&(lt=i.RGBA16F),J===i.UNSIGNED_BYTE&&(lt=ft===xe?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT&&yt&&(lt=yt.RGBA16_EXT),J===i.SHORT&&yt&&(lt=yt.RGBA16_SNORM_EXT),J===i.UNSIGNED_SHORT_4_4_4_4&&(lt=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(lt=i.RGB5_A1)}return(lt===i.R16F||lt===i.R32F||lt===i.RG16F||lt===i.RG32F||lt===i.RGBA16F||lt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),lt}function M(V,F){let J;return V?F===null||F===Un||F===ns?J=i.DEPTH24_STENCIL8:F===Bn?J=i.DEPTH32F_STENCIL8:F===es&&(J=i.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):F===null||F===Un||F===ns?J=i.DEPTH_COMPONENT24:F===Bn?J=i.DEPTH_COMPONENT32F:F===es&&(J=i.DEPTH_COMPONENT16),J}function w(V,F){return m(V)===!0||V.isFramebufferTexture&&V.minFilter!==$e&&V.minFilter!==tn?Math.log2(Math.max(F.width,F.height))+1:V.mipmaps!==void 0&&V.mipmaps.length>0?V.mipmaps.length:V.isCompressedTexture&&Array.isArray(V.image)?F.mipmaps.length:1}function R(V){let F=V.target;F.removeEventListener("dispose",R),C(F),F.isVideoTexture&&f.delete(F),F.isHTMLTexture&&h.delete(F)}function v(V){let F=V.target;F.removeEventListener("dispose",v),E(F)}function C(V){let F=n.get(V);if(F.__webglInit===void 0)return;let J=V.source,rt=d.get(J);if(rt){let at=rt[F.__cacheKey];at.usedTimes--,at.usedTimes===0&&S(V),Object.keys(rt).length===0&&d.delete(J)}n.remove(V)}function S(V){let F=n.get(V);i.deleteTexture(F.__webglTexture);let J=V.source,rt=d.get(J);delete rt[F.__cacheKey],o.memory.textures--}function E(V){let F=n.get(V);if(V.depthTexture&&(V.depthTexture.dispose(),n.remove(V.depthTexture)),V.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(F.__webglFramebuffer[rt]))for(let at=0;at<F.__webglFramebuffer[rt].length;at++)i.deleteFramebuffer(F.__webglFramebuffer[rt][at]);else i.deleteFramebuffer(F.__webglFramebuffer[rt]);F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer[rt])}else{if(Array.isArray(F.__webglFramebuffer))for(let rt=0;rt<F.__webglFramebuffer.length;rt++)i.deleteFramebuffer(F.__webglFramebuffer[rt]);else i.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&i.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&i.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let rt=0;rt<F.__webglColorRenderbuffer.length;rt++)F.__webglColorRenderbuffer[rt]&&i.deleteRenderbuffer(F.__webglColorRenderbuffer[rt]);F.__webglDepthRenderbuffer&&i.deleteRenderbuffer(F.__webglDepthRenderbuffer)}let J=V.textures;for(let rt=0,at=J.length;rt<at;rt++){let gt=n.get(J[rt]);gt.__webglTexture&&(i.deleteTexture(gt.__webglTexture),o.memory.textures--),n.remove(J[rt])}n.remove(V)}let L=0;function N(){L=0}function T(){return L}function I(V){L=V}function P(){let V=L;return V>=r.maxTextures&&qt("WebGLTextures: Trying to use "+(V+1)+" texture units while this GPU supports only "+r.maxTextures),L+=1,V}function A(V){let F=[];return F.push(V.wrapS),F.push(V.wrapT),F.push(V.wrapR||0),F.push(V.magFilter),F.push(V.minFilter),F.push(V.anisotropy),F.push(V.internalFormat),F.push(V.format),F.push(V.type),F.push(V.generateMipmaps),F.push(V.premultiplyAlpha),F.push(V.flipY),F.push(V.unpackAlignment),F.push(V.colorSpace),F.join()}function D(V,F){let J=n.get(V);if(V.isVideoTexture&&X(V),V.isRenderTargetTexture===!1&&V.isExternalTexture!==!0&&V.version>0&&J.__version!==V.version){let rt=V.image;if(rt===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{st(J,V,F);return}}else V.isExternalTexture&&(J.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+F)}function B(V,F){let J=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&J.__version!==V.version){st(J,V,F);return}else V.isExternalTexture&&(J.__webglTexture=V.sourceTexture?V.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+F)}function z(V,F){let J=n.get(V);if(V.isRenderTargetTexture===!1&&V.version>0&&J.__version!==V.version){st(J,V,F);return}e.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+F)}function k(V,F){let J=n.get(V);if(V.isCubeDepthTexture!==!0&&V.version>0&&J.__version!==V.version){ct(J,V,F);return}e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+F)}let W={[sr]:i.REPEAT,[yn]:i.CLAMP_TO_EDGE,[Ma]:i.MIRRORED_REPEAT},G={[$e]:i.NEAREST,[pd]:i.NEAREST_MIPMAP_NEAREST,[Js]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[Ja]:i.LINEAR_MIPMAP_NEAREST,[ki]:i.LINEAR_MIPMAP_LINEAR},Q={[xd]:i.NEVER,[Sd]:i.ALWAYS,[yd]:i.LESS,[Dl]:i.LEQUAL,[vd]:i.EQUAL,[Nl]:i.GEQUAL,[_d]:i.GREATER,[Md]:i.NOTEQUAL};function j(V,F){if(F.type===Bn&&t.has("OES_texture_float_linear")===!1&&(F.magFilter===tn||F.magFilter===Ja||F.magFilter===Js||F.magFilter===ki||F.minFilter===tn||F.minFilter===Ja||F.minFilter===Js||F.minFilter===ki)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(V,i.TEXTURE_WRAP_S,W[F.wrapS]),i.texParameteri(V,i.TEXTURE_WRAP_T,W[F.wrapT]),(V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY)&&i.texParameteri(V,i.TEXTURE_WRAP_R,W[F.wrapR]),i.texParameteri(V,i.TEXTURE_MAG_FILTER,G[F.magFilter]),i.texParameteri(V,i.TEXTURE_MIN_FILTER,G[F.minFilter]),F.compareFunction&&(i.texParameteri(V,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(V,i.TEXTURE_COMPARE_FUNC,Q[F.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(F.magFilter===$e||F.minFilter!==Js&&F.minFilter!==ki||F.type===Bn&&t.has("OES_texture_float_linear")===!1)return;if(F.anisotropy>1||n.get(F).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");i.texParameterf(V,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(F.anisotropy,r.getMaxAnisotropy())),n.get(F).__currentAnisotropy=F.anisotropy}}}function tt(V,F){let J=!1;V.__webglInit===void 0&&(V.__webglInit=!0,F.addEventListener("dispose",R));let rt=F.source,at=d.get(rt);at===void 0&&(at={},d.set(rt,at));let gt=A(F);if(gt!==V.__cacheKey){at[gt]===void 0&&(at[gt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),at[gt].usedTimes++;let yt=at[V.__cacheKey];yt!==void 0&&(at[V.__cacheKey].usedTimes--,yt.usedTimes===0&&S(F)),V.__cacheKey=gt,V.__webglTexture=at[gt].texture}return J}function H(V,F,J){return Math.floor(Math.floor(V/J)/F)}function $(V,F,J,rt){let gt=V.updateRanges;if(gt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,F.width,F.height,J,rt,F.data);else{gt.sort((Vt,wt)=>Vt.start-wt.start);let yt=0;for(let Vt=1;Vt<gt.length;Vt++){let wt=gt[yt],_t=gt[Vt],Gt=wt.start+wt.count,Yt=H(_t.start,F.width,4),ie=H(wt.start,F.width,4);_t.start<=Gt+1&&Yt===ie&&H(_t.start+_t.count-1,F.width,4)===Yt?wt.count=Math.max(wt.count,_t.start+_t.count-wt.start):(++yt,gt[yt]=_t)}gt.length=yt+1;let lt=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),vt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,F.width);for(let Vt=0,wt=gt.length;Vt<wt;Vt++){let _t=gt[Vt],Gt=Math.floor(_t.start/4),Yt=Math.ceil(_t.count/4),ie=Gt%F.width,Z=Math.floor(Gt/F.width),Mt=Yt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,ie),e.pixelStorei(i.UNPACK_SKIP_ROWS,Z),e.texSubImage2D(i.TEXTURE_2D,0,ie,Z,Mt,ht,J,rt,F.data)}V.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,lt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,vt)}}function st(V,F,J){let rt=i.TEXTURE_2D;(F.isDataArrayTexture||F.isCompressedArrayTexture)&&(rt=i.TEXTURE_2D_ARRAY),F.isData3DTexture&&(rt=i.TEXTURE_3D);let at=tt(V,F),gt=F.source;e.bindTexture(rt,V.__webglTexture,i.TEXTURE0+J);let yt=n.get(gt);if(gt.version!==yt.__version||at===!0){if(e.activeTexture(i.TEXTURE0+J),(typeof ImageBitmap<"u"&&F.image instanceof ImageBitmap)===!1){let ht=ue.getPrimaries(ue.workingColorSpace),St=F.colorSpace===pi?null:ue.getPrimaries(F.colorSpace),Rt=F.colorSpace===pi||ht===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt)}e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment);let ft=g(F.image,!1,r.maxTextureSize);ft=sn(F,ft);let vt=s.convert(F.format,F.colorSpace),Vt=s.convert(F.type),wt=y(F.internalFormat,vt,Vt,F.normalized,F.colorSpace,F.isVideoTexture);j(rt,F);let _t,Gt=F.mipmaps,Yt=F.isVideoTexture!==!0,ie=yt.__version===void 0||at===!0,Z=gt.dataReady,Mt=w(F,ft);if(F.isDepthTexture)wt=M(F.format===zi,F.type),ie&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,wt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,wt,ft.width,ft.height,0,vt,Vt,null));else if(F.isDataTexture)if(Gt.length>0){Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,Gt[0].width,Gt[0].height);for(let ht=0,St=Gt.length;ht<St;ht++)_t=Gt[ht],Yt?Z&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,_t.width,_t.height,vt,Vt,_t.data):e.texImage2D(i.TEXTURE_2D,ht,wt,_t.width,_t.height,0,vt,Vt,_t.data);F.generateMipmaps=!1}else Yt?(ie&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,ft.width,ft.height),Z&&$(F,ft,vt,Vt)):e.texImage2D(i.TEXTURE_2D,0,wt,ft.width,ft.height,0,vt,Vt,ft.data);else if(F.isCompressedTexture)if(F.isCompressedArrayTexture){Yt&&ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,wt,Gt[0].width,Gt[0].height,ft.depth);for(let ht=0,St=Gt.length;ht<St;ht++)if(_t=Gt[ht],F.format!==En)if(vt!==null)if(Yt){if(Z)if(F.layerUpdates.size>0){let Rt=Ou(_t.width,_t.height,F.format,F.type);for(let dt of F.layerUpdates){let Ht=_t.data.subarray(dt*Rt/_t.data.BYTES_PER_ELEMENT,(dt+1)*Rt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,dt,_t.width,_t.height,1,vt,Ht)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,ft.depth,vt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,wt,_t.width,_t.height,ft.depth,0,_t.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?Z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,_t.width,_t.height,ft.depth,vt,Vt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,wt,_t.width,_t.height,ft.depth,0,vt,Vt,_t.data);F.layerUpdates.size>0&&F.clearLayerUpdates()}else{Yt&&ie&&e.texStorage2D(i.TEXTURE_2D,Mt,wt,Gt[0].width,Gt[0].height);for(let ht=0,St=Gt.length;ht<St;ht++)_t=Gt[ht],F.format!==En?vt!==null?Yt?Z&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,_t.width,_t.height,vt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,wt,_t.width,_t.height,0,_t.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?Z&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,_t.width,_t.height,vt,Vt,_t.data):e.texImage2D(i.TEXTURE_2D,ht,wt,_t.width,_t.height,0,vt,Vt,_t.data)}else if(F.isDataArrayTexture)if(Yt){if(ie&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,wt,ft.width,ft.height,ft.depth),Z)if(F.layerUpdates.size>0){let ht=Ou(ft.width,ft.height,F.format,F.type);for(let St of F.layerUpdates){let Rt=ft.data.subarray(St*ht/ft.data.BYTES_PER_ELEMENT,(St+1)*ht/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,St,ft.width,ft.height,1,vt,Vt,Rt)}F.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,vt,Vt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,ft.width,ft.height,ft.depth,0,vt,Vt,ft.data);else if(F.isData3DTexture)Yt?(ie&&e.texStorage3D(i.TEXTURE_3D,Mt,wt,ft.width,ft.height,ft.depth),Z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,vt,Vt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,wt,ft.width,ft.height,ft.depth,0,vt,Vt,ft.data);else if(F.isFramebufferTexture){if(ie)if(Yt)e.texStorage2D(i.TEXTURE_2D,Mt,wt,ft.width,ft.height);else{let ht=ft.width,St=ft.height;for(let Rt=0;Rt<Mt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,wt,ht,St,0,vt,Vt,null),ht>>=1,St>>=1}}else if(F.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ft.parentNode!==ht){ht.appendChild(ft),h.add(F),ht.onpaint=St=>{let Rt=St.changedElements;for(let dt of h)Rt.includes(dt.image)&&(dt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Rt=i.RGBA,dt=i.RGBA,Ht=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Rt,dt,Ht,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Gt.length>0){if(Yt&&ie){let ht=ye(Gt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,wt,ht.width,ht.height)}for(let ht=0,St=Gt.length;ht<St;ht++)_t=Gt[ht],Yt?Z&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,vt,Vt,_t):e.texImage2D(i.TEXTURE_2D,ht,wt,vt,Vt,_t);F.generateMipmaps=!1}else if(Yt){if(ie){let ht=ye(ft);e.texStorage2D(i.TEXTURE_2D,Mt,wt,ht.width,ht.height)}Z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Vt,ft)}else e.texImage2D(i.TEXTURE_2D,0,wt,vt,Vt,ft);m(F)&&b(rt),yt.__version=gt.version,F.onUpdate&&F.onUpdate(F)}V.__version=F.version}function ct(V,F,J){if(F.image.length!==6)return;let rt=tt(V,F),at=F.source;e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+J);let gt=n.get(at);if(at.version!==gt.__version||rt===!0){e.activeTexture(i.TEXTURE0+J);let yt=ue.getPrimaries(ue.workingColorSpace),lt=F.colorSpace===pi?null:ue.getPrimaries(F.colorSpace),ft=F.colorSpace===pi||yt===lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,F.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,F.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let vt=F.isCompressedTexture||F.image[0].isCompressedTexture,Vt=F.image[0]&&F.image[0].isDataTexture,wt=[];for(let dt=0;dt<6;dt++)!vt&&!Vt?wt[dt]=g(F.image[dt],!0,r.maxCubemapSize):wt[dt]=Vt?F.image[dt].image:F.image[dt],wt[dt]=sn(F,wt[dt]);let _t=wt[0],Gt=s.convert(F.format,F.colorSpace),Yt=s.convert(F.type),ie=y(F.internalFormat,Gt,Yt,F.normalized,F.colorSpace),Z=F.isVideoTexture!==!0,Mt=gt.__version===void 0||rt===!0,ht=at.dataReady,St=w(F,_t);j(i.TEXTURE_CUBE_MAP,F);let Rt;if(vt){Z&&Mt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ie,_t.width,_t.height);for(let dt=0;dt<6;dt++){Rt=wt[dt].mipmaps;for(let Ht=0;Ht<Rt.length;Ht++){let Ut=Rt[Ht];F.format!==En?Gt!==null?Z?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,Ut.width,Ut.height,Gt,Ut.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,ie,Ut.width,Ut.height,0,Ut.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,0,0,Ut.width,Ut.height,Gt,Yt,Ut.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht,ie,Ut.width,Ut.height,0,Gt,Yt,Ut.data)}}}else{if(Rt=F.mipmaps,Z&&Mt){Rt.length>0&&St++;let dt=ye(wt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,St,ie,dt.width,dt.height)}for(let dt=0;dt<6;dt++)if(Vt){Z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,wt[dt].width,wt[dt].height,Gt,Yt,wt[dt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ie,wt[dt].width,wt[dt].height,0,Gt,Yt,wt[dt].data);for(let Ht=0;Ht<Rt.length;Ht++){let Ee=Rt[Ht].image[dt].image;Z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,Ee.width,Ee.height,Gt,Yt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,ie,Ee.width,Ee.height,0,Gt,Yt,Ee.data)}}else{Z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,0,0,Gt,Yt,wt[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0,ie,Gt,Yt,wt[dt]);for(let Ht=0;Ht<Rt.length;Ht++){let Ut=Rt[Ht];Z?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,0,0,Gt,Yt,Ut.image[dt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,Ht+1,ie,Gt,Yt,Ut.image[dt])}}}m(F)&&b(i.TEXTURE_CUBE_MAP),gt.__version=at.version,F.onUpdate&&F.onUpdate(F)}V.__version=F.version}function it(V,F,J,rt,at,gt){let yt=s.convert(J.format,J.colorSpace),lt=s.convert(J.type),ft=y(J.internalFormat,yt,lt,J.normalized,J.colorSpace),vt=n.get(F),Vt=n.get(J);if(Vt.__renderTarget=F,!vt.__hasExternalTextures){let wt=Math.max(1,F.width>>gt),_t=Math.max(1,F.height>>gt);at===i.TEXTURE_3D||at===i.TEXTURE_2D_ARRAY?e.texImage3D(at,gt,ft,wt,_t,F.depth,0,yt,lt,null):e.texImage2D(at,gt,ft,wt,_t,0,yt,lt,null)}e.bindFramebuffer(i.FRAMEBUFFER,V),me(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,at,Vt.__webglTexture,0,_e(F)):(at===i.TEXTURE_2D||at>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&at<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,rt,at,Vt.__webglTexture,gt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(V,F,J){if(i.bindRenderbuffer(i.RENDERBUFFER,V),F.depthBuffer){let rt=F.depthTexture,at=rt&&rt.isDepthTexture?rt.type:null,gt=M(F.stencilBuffer,at),yt=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;me(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(F),gt,F.width,F.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(F),gt,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,gt,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,V)}else{let rt=F.textures;for(let at=0;at<rt.length;at++){let gt=rt[at],yt=s.convert(gt.format,gt.colorSpace),lt=s.convert(gt.type),ft=y(gt.internalFormat,yt,lt,gt.normalized,gt.colorSpace);me(F)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_e(F),ft,F.width,F.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,_e(F),ft,F.width,F.height):i.renderbufferStorage(i.RENDERBUFFER,ft,F.width,F.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(V,F,J){let rt=F.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,V),!(F.depthTexture&&F.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let at=n.get(F.depthTexture);if(at.__renderTarget=F,(!at.__webglTexture||F.depthTexture.image.width!==F.width||F.depthTexture.image.height!==F.height)&&(F.depthTexture.image.width=F.width,F.depthTexture.image.height=F.height,F.depthTexture.needsUpdate=!0),rt){if(at.__webglInit===void 0&&(at.__webglInit=!0,F.depthTexture.addEventListener("dispose",R)),at.__webglTexture===void 0){at.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,at.__webglTexture),j(i.TEXTURE_CUBE_MAP,F.depthTexture);let vt=s.convert(F.depthTexture.format),Vt=s.convert(F.depthTexture.type),wt;F.depthTexture.format===qn?wt=i.DEPTH_COMPONENT24:F.depthTexture.format===zi&&(wt=i.DEPTH24_STENCIL8);for(let _t=0;_t<6;_t++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,wt,F.width,F.height,0,vt,Vt,null)}}else D(F.depthTexture,0);let gt=at.__webglTexture,yt=_e(F),lt=rt?i.TEXTURE_CUBE_MAP_POSITIVE_X+J:i.TEXTURE_2D,ft=F.depthTexture.format===zi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(F.depthTexture.format===qn)me(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,gt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,gt,0);else if(F.depthTexture.format===zi)me(F)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,lt,gt,0,yt):i.framebufferTexture2D(i.FRAMEBUFFER,ft,lt,gt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(V){let F=n.get(V),J=V.isWebGLCubeRenderTarget===!0;if(F.__boundDepthTexture!==V.depthTexture){let rt=V.depthTexture;if(F.__depthDisposeCallback&&F.__depthDisposeCallback(),rt){let at=()=>{delete F.__boundDepthTexture,delete F.__depthDisposeCallback,rt.removeEventListener("dispose",at)};rt.addEventListener("dispose",at),F.__depthDisposeCallback=at}F.__boundDepthTexture=rt}if(V.depthTexture&&!F.__autoAllocateDepthBuffer)if(J)for(let rt=0;rt<6;rt++)mt(F.__webglFramebuffer[rt],V,rt);else{let rt=V.texture.mipmaps;rt&&rt.length>0?mt(F.__webglFramebuffer[0],V,0):mt(F.__webglFramebuffer,V,0)}else if(J){F.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[rt]),F.__webglDepthbuffer[rt]===void 0)F.__webglDepthbuffer[rt]=i.createRenderbuffer(),ut(F.__webglDepthbuffer[rt],V,!1);else{let at=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=F.__webglDepthbuffer[rt];i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}}else{let rt=V.texture.mipmaps;if(rt&&rt.length>0?e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,F.__webglFramebuffer),F.__webglDepthbuffer===void 0)F.__webglDepthbuffer=i.createRenderbuffer(),ut(F.__webglDepthbuffer,V,!1);else{let at=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=F.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,gt),i.framebufferRenderbuffer(i.FRAMEBUFFER,at,i.RENDERBUFFER,gt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function zt(V,F,J){let rt=n.get(V);F!==void 0&&it(rt.__webglFramebuffer,V,V.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&bt(V)}function Wt(V){let F=V.texture,J=n.get(V),rt=n.get(F);V.addEventListener("dispose",v);let at=V.textures,gt=V.isWebGLCubeRenderTarget===!0,yt=at.length>1;if(yt||(rt.__webglTexture===void 0&&(rt.__webglTexture=i.createTexture()),rt.__version=F.version,o.memory.textures++),gt){J.__webglFramebuffer=[];for(let lt=0;lt<6;lt++)if(F.mipmaps&&F.mipmaps.length>0){J.__webglFramebuffer[lt]=[];for(let ft=0;ft<F.mipmaps.length;ft++)J.__webglFramebuffer[lt][ft]=i.createFramebuffer()}else J.__webglFramebuffer[lt]=i.createFramebuffer()}else{if(F.mipmaps&&F.mipmaps.length>0){J.__webglFramebuffer=[];for(let lt=0;lt<F.mipmaps.length;lt++)J.__webglFramebuffer[lt]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(yt)for(let lt=0,ft=at.length;lt<ft;lt++){let vt=n.get(at[lt]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(V.samples>0&&me(V)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let lt=0;lt<at.length;lt++){let ft=at[lt];J.__webglColorRenderbuffer[lt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[lt]);let vt=s.convert(ft.format,ft.colorSpace),Vt=s.convert(ft.type),wt=y(ft.internalFormat,vt,Vt,ft.normalized,ft.colorSpace,V.isXRRenderTarget===!0),_t=_e(V);i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,wt,V.width,V.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+lt,i.RENDERBUFFER,J.__webglColorRenderbuffer[lt])}i.bindRenderbuffer(i.RENDERBUFFER,null),V.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(J.__webglDepthRenderbuffer,V,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(gt){e.bindTexture(i.TEXTURE_CUBE_MAP,rt.__webglTexture),j(i.TEXTURE_CUBE_MAP,F);for(let lt=0;lt<6;lt++)if(F.mipmaps&&F.mipmaps.length>0)for(let ft=0;ft<F.mipmaps.length;ft++)it(J.__webglFramebuffer[lt][ft],V,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,ft);else it(J.__webglFramebuffer[lt],V,F,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0);m(F)&&b(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let lt=0,ft=at.length;lt<ft;lt++){let vt=at[lt],Vt=n.get(vt),wt=i.TEXTURE_2D;(V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(wt=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(wt,Vt.__webglTexture),j(wt,vt),it(J.__webglFramebuffer,V,vt,i.COLOR_ATTACHMENT0+lt,wt,0),m(vt)&&b(wt)}e.unbindTexture()}else{let lt=i.TEXTURE_2D;if((V.isWebGL3DRenderTarget||V.isWebGLArrayRenderTarget)&&(lt=V.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(lt,rt.__webglTexture),j(lt,F),F.mipmaps&&F.mipmaps.length>0)for(let ft=0;ft<F.mipmaps.length;ft++)it(J.__webglFramebuffer[ft],V,F,i.COLOR_ATTACHMENT0,lt,ft);else it(J.__webglFramebuffer,V,F,i.COLOR_ATTACHMENT0,lt,0);m(F)&&b(lt),e.unbindTexture()}V.depthBuffer&&bt(V)}function Ct(V){let F=V.textures;for(let J=0,rt=F.length;J<rt;J++){let at=F[J];if(m(at)){let gt=_(V),yt=n.get(at).__webglTexture;e.bindTexture(gt,yt),b(gt),e.unbindTexture()}}}let xt=[],ne=[];function Se(V){if(V.samples>0){if(me(V)===!1){let F=V.textures,J=V.width,rt=V.height,at=i.COLOR_BUFFER_BIT,gt=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(V),lt=F.length>1;if(lt)for(let vt=0;vt<F.length;vt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer);let ft=V.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let vt=0;vt<F.length;vt++){if(V.resolveDepthBuffer&&(V.depthBuffer&&(at|=i.DEPTH_BUFFER_BIT),V.stencilBuffer&&V.resolveStencilBuffer&&(at|=i.STENCIL_BUFFER_BIT)),lt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Vt=n.get(F[vt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Vt,0)}i.blitFramebuffer(0,0,J,rt,0,0,J,rt,at,i.NEAREST),l===!0&&(xt.length=0,ne.length=0,xt.push(i.COLOR_ATTACHMENT0+vt),V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&(xt.push(gt),ne.push(gt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,xt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),lt)for(let vt=0;vt<F.length;vt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[vt]);let Vt=n.get(F[vt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,Vt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(V.depthBuffer&&V.storeMultisampledDepthBuffer===!1&&l){let F=V.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[F])}}}function _e(V){return Math.min(r.maxSamples,V.samples)}function me(V){let F=n.get(V);return V.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&F.__useRenderToTexture!==!1}function X(V){let F=o.render.frame;f.get(V)!==F&&(f.set(V,F),V.update())}function sn(V,F){let J=V.colorSpace,rt=V.format,at=V.type;return V.isCompressedTexture===!0||V.isVideoTexture===!0||J!==Ps&&J!==pi&&(ue.getTransfer(J)===xe?(rt!==En||at!==_n)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):$t("WebGLTextures: Unsupported texture color space:",J)),F}function ye(V){return typeof HTMLImageElement<"u"&&V instanceof HTMLImageElement?(c.width=V.naturalWidth||V.width,c.height=V.naturalHeight||V.height):typeof VideoFrame<"u"&&V instanceof VideoFrame?(c.width=V.displayWidth,c.height=V.displayHeight):(c.width=V.width,c.height=V.height),c}this.allocateTextureUnit=P,this.resetTextureUnits=N,this.getTextureUnits=T,this.setTextureUnits=I,this.setTexture2D=D,this.setTexture2DArray=B,this.setTexture3D=z,this.setTextureCube=k,this.rebindTextures=zt,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=Se,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=it,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function K_(i,t){function e(n,r=pi){let s,o=ue.getTransfer(r);if(n===_n)return i.UNSIGNED_BYTE;if(n===Qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===wu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mu)return i.BYTE;if(n===Su)return i.SHORT;if(n===es)return i.UNSIGNED_SHORT;if(n===ja)return i.INT;if(n===Un)return i.UNSIGNED_INT;if(n===Bn)return i.FLOAT;if(n===kn)return i.HALF_FLOAT;if(n===Eu)return i.ALPHA;if(n===Au)return i.RGB;if(n===En)return i.RGBA;if(n===qn)return i.DEPTH_COMPONENT;if(n===zi)return i.DEPTH_STENCIL;if(n===Ru)return i.RED;if(n===el)return i.RED_INTEGER;if(n===Vi)return i.RG;if(n===nl)return i.RG_INTEGER;if(n===il)return i.RGBA_INTEGER;if(n===js||n===Qs||n===to||n===eo)if(o===xe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rl||n===sl||n===ol||n===al)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===al)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ll||n===cl||n===ul||n===hl||n===fl||n===no||n===dl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ll||n===cl)return o===xe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ul)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===hl)return s.COMPRESSED_R11_EAC;if(n===fl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===no)return s.COMPRESSED_RG11_EAC;if(n===dl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===pl||n===ml||n===gl||n===bl||n===xl||n===yl||n===vl||n===_l||n===Ml||n===Sl||n===wl||n===Tl||n===El||n===Al)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===pl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ml)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===gl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===bl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===xl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===yl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_l)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ml)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Sl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Tl)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===El)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Al)return o===xe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rl||n===Cl||n===Pl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Rl)return o===xe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Cl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Pl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Il||n===Ll||n===io||n===Fl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Il)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ll)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var J_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j_=`
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

}`,eh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Bs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new un({vertexShader:J_,fragmentShader:j_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new It(new di(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nh=class extends $n{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,u=null,d=null,p=null,x=typeof XRWebGLBinding<"u",g=new eh,m={},b=e.getContextAttributes(),_=null,y=null,M=[],w=[],R=new ae,v=null,C=null,S=new qe;S.viewport=new Oe;let E=new qe;E.viewport=new Oe;let L=[S,E],N=new qa,T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let $=M[H];return $===void 0&&($=new Zr,M[H]=$),$.getTargetRaySpace()},this.getControllerGrip=function(H){let $=M[H];return $===void 0&&($=new Zr,M[H]=$),$.getGripSpace()},this.getHand=function(H){let $=M[H];return $===void 0&&($=new Zr,M[H]=$),$.getHandSpace()};function P(H){let $=w.indexOf(H.inputSource);if($===-1)return;let st=M[$];st!==void 0&&(st.update(H.inputSource,H.frame,c||o),st.dispatchEvent({type:H.type,data:H.inputSource}))}function A(){r.removeEventListener("select",P),r.removeEventListener("selectstart",P),r.removeEventListener("selectend",P),r.removeEventListener("squeeze",P),r.removeEventListener("squeezestart",P),r.removeEventListener("squeezeend",P),r.removeEventListener("end",A),r.removeEventListener("inputsourceschange",D);for(let H=0;H<M.length;H++){let $=w[H];$!==null&&(w[H]=null,M[H].disconnect($))}T=null,I=null,g.reset();for(let H in m)delete m[H];if(t.setRenderTarget(_),d=null,u=null,h=null,r=null,y=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(v),t.setSize(R.width,R.height,!1),C!==null){let H=C.camera;H.fov=C.fov,H.zoom=C.zoom,H.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,n.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,n.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,e)),h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(_=t.getRenderTarget(),r.addEventListener("select",P),r.addEventListener("selectstart",P),r.addEventListener("selectend",P),r.addEventListener("squeeze",P),r.addEventListener("squeezestart",P),r.addEventListener("squeezeend",P),r.addEventListener("end",A),r.addEventListener("inputsourceschange",D),b.xrCompatible!==!0&&await e.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let st=null,ct=null,it=null;b.depth&&(it=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=b.stencil?zi:qn,ct=b.stencil?ns:Un);let ut={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};h=this.getBinding(),u=h.createProjectionLayer(ut),r.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Ze(u.textureWidth,u.textureHeight,{format:En,type:_n,depthTexture:new Kn(u.textureWidth,u.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let st={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,st),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ze(d.framebufferWidth,d.framebufferHeight,{format:En,type:_n,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),tt.setContext(r),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function D(H){for(let $=0;$<H.removed.length;$++){let st=H.removed[$],ct=w.indexOf(st);ct>=0&&(w[ct]=null,M[ct].disconnect(st))}for(let $=0;$<H.added.length;$++){let st=H.added[$],ct=w.indexOf(st);if(ct===-1){for(let ut=0;ut<M.length;ut++)if(ut>=w.length){w.push(st),ct=ut;break}else if(w[ut]===null){w[ut]=st,ct=ut;break}if(ct===-1)break}let it=M[ct];it&&it.connect(st)}}let B=new Y,z=new Y;function k(H,$,st){B.setFromMatrixPosition($.matrixWorld),z.setFromMatrixPosition(st.matrixWorld);let ct=B.distanceTo(z),it=$.projectionMatrix.elements,ut=st.projectionMatrix.elements,mt=it[14]/(it[10]-1),bt=it[14]/(it[10]+1),zt=(it[9]+1)/it[5],Wt=(it[9]-1)/it[5],Ct=(it[8]-1)/it[0],xt=(ut[8]+1)/ut[0],ne=mt*Ct,Se=mt*xt,_e=ct/(-Ct+xt),me=_e*-Ct;if($.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(me),H.translateZ(_e),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),it[10]===-1)H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let X=mt+_e,sn=bt+_e,ye=ne-me,V=Se+(ct-me),F=zt*bt/sn*X,J=Wt*bt/sn*X;H.projectionMatrix.makePerspective(ye,V,F,J,X,sn),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function W(H,$){$===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices($.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;let $=H.near,st=H.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(st=g.depthFar)),N.near=E.near=S.near=$,N.far=E.far=S.far=st,(T!==N.near||I!==N.far)&&(r.updateRenderState({depthNear:N.near,depthFar:N.far}),T=N.near,I=N.far),N.layers.mask=H.layers.mask|6,S.layers.mask=N.layers.mask&-5,E.layers.mask=N.layers.mask&-3;let ct=H.parent,it=N.cameras;W(N,ct);for(let ut=0;ut<it.length;ut++)W(it[ut],ct);it.length===2?k(N,S,E):N.projectionMatrix.copy(S.projectionMatrix),C===null&&H.isPerspectiveCamera&&(C={camera:H,fov:H.fov,zoom:H.zoom}),G(H,N,ct)};function G(H,$,st){st===null?H.matrix.copy($.matrixWorld):(H.matrix.copy(st.matrixWorld),H.matrix.invert(),H.matrix.multiply($.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy($.projectionMatrix),H.projectionMatrixInverse.copy($.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=wa*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(H){return m[H]};let Q=null;function j(H,$){if(f=$.getViewerPose(c||o),p=$,f!==null){let st=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ct=!1;st.length!==N.cameras.length&&(N.cameras.length=0,ct=!0);for(let bt=0;bt<st.length;bt++){let zt=st[bt],Wt=null;if(d!==null)Wt=d.getViewport(zt);else{let xt=h.getViewSubImage(u,zt);Wt=xt.viewport,bt===0&&(t.setRenderTargetTextures(y,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(y))}let Ct=L[bt];Ct===void 0&&(Ct=new qe,Ct.layers.enable(bt),Ct.viewport=new Oe,L[bt]=Ct),Ct.matrix.fromArray(zt.transform.matrix),Ct.matrix.decompose(Ct.position,Ct.quaternion,Ct.scale),Ct.projectionMatrix.fromArray(zt.projectionMatrix),Ct.projectionMatrixInverse.copy(Ct.projectionMatrix).invert(),Ct.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),bt===0&&(N.matrix.copy(Ct.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),ct===!0&&N.cameras.push(Ct)}let it=r.enabledFeatures;if(it&&it.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();let bt=h.getDepthInformation(st[0]);bt&&bt.isValid&&bt.texture&&g.init(bt,r.renderState)}if(it&&it.includes("camera-access")&&x){t.state.unbindTexture(),h=n.getBinding();for(let bt=0;bt<st.length;bt++){let zt=st[bt].camera;if(zt){let Wt=m[zt];Wt||(Wt=new Bs,m[zt]=Wt);let Ct=h.getCameraImage(zt);Wt.sourceTexture=Ct}}}}for(let st=0;st<M.length;st++){let ct=w[st],it=M[st];ct!==null&&it!==void 0&&it.update(ct,$,c||o)}Q&&Q(H,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),p=null}let tt=new rp;tt.setAnimationLoop(j),this.setAnimationLoop=function(H){Q=H},this.dispose=function(){}}},Q_=new Te,up=new jt;up.set(-1,0,0,0,1,0,0,0,1);function t1(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Fu(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,b,_,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),x(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,b,_):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===nn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===nn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=t.get(m),_=b.envMap,y=b.envMapRotation;_&&(g.envMap.value=_,g.envMapRotation.value.setFromMatrix4(Q_.makeRotationFromEuler(y)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(up),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,_){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=_*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===nn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let b=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function e1(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=r[y.id];w===void 0&&(g(y),w=f(y),r[y.id]=w,y.addEventListener("dispose",b));let R=M.program;n.updateUBOMapping(y,R);let v=t.render.frame;s[y.id]!==v&&(u(y),s[y.id]=v)}function f(y){let M=h();y.__bindingPointIndex=M;let w=i.createBuffer(),R=y.__size,v=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return $t("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let M=r[y.id],w=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,C=w.length;v<C;v++){let S=w[v];if(Array.isArray(S))for(let E=0,L=S.length;E<L;E++)d(S[E],v,E,R);else d(S,v,0,R)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,R){if(x(y,M,w,R)===!0){let v=y.__offset,C=y.value;if(Array.isArray(C)){let S=0;for(let E=0;E<C.length;E++){let L=C[E],N=m(L);p(L,y.__data,S),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(S+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(C,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function x(y,M,w,R){let v=y.value,C=M+"_"+w;if(R[C]===void 0)return typeof v=="number"||typeof v=="boolean"?R[C]=v:ArrayBuffer.isView(v)?R[C]=v.slice():R[C]=v.clone(),!0;{let S=R[C];if(typeof v=="number"||typeof v=="boolean"){if(S!==v)return R[C]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(S.equals(v)===!1)return S.copy(v),!0}}return!1}function g(y){let M=y.uniforms,w=0,R=16;for(let C=0,S=M.length;C<S;C++){let E=Array.isArray(M[C])?M[C]:[M[C]];for(let L=0,N=E.length;L<N;L++){let T=E[L],I=Array.isArray(T.value)?T.value:[T.value];for(let P=0,A=I.length;P<A;P++){let D=I[P],B=m(D),z=w%R,k=z%B.boundary,W=z+k;w+=k,W!==0&&R-W<B.storage&&(w+=R-W),T.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=w,w+=B.storage}}}let v=w%R;return v>0&&(w+=R-v),y.__size=w,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),M}function b(y){let M=y.target;M.removeEventListener("dispose",b);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function _(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:_}}var n1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ti=null;function i1(){return ti===null&&(ti=new Ra(n1,16,16,Vi,kn),ti.name="DFG_LUT",ti.minFilter=tn,ti.magFilter=tn,ti.wrapS=yn,ti.wrapT=yn,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}var mr=class{constructor(t={}){let{canvas:e=Td(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:u=!1,outputBufferType:d=_n}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let x=d,g=new Set([il,nl,el]),m=new Set([_n,Un,es,ns,Qa,tl]),b=new Uint32Array(4),_=new Int32Array(4),y=new Y,M=null,w=null,R=[],v=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=On,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,E=!1,L=null,N=null,T=null,I=null;this._outputColorSpace=De;let P=0,A=0,D=null,B=-1,z=null,k=new Oe,W=new Oe,G=null,Q=new K(0),j=0,tt=e.width,H=e.height,$=1,st=null,ct=null,it=new Oe(0,0,tt,H),ut=new Oe(0,0,tt,H),mt=!1,bt=new Os,zt=!1,Wt=!1,Ct=new Te,xt=new Y,ne=new Oe,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function me(){return D===null?$:1}let X=n;function sn(U,q){return e.getContext(U,q)}let ye,V,F,J,rt,at,gt,yt,lt,ft,vt,Vt,wt,_t,Gt,Yt,ie,Z,Mt,ht,St,Rt,dt;try{let U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Pn,!1),X===null){let q="webgl2";if(X=sn(q,U),X===null)throw sn(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ht()}catch(U){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),$t("WebGLRenderer: "+U.message),U}function Ht(){ye=new uv(X),ye.init(),St=new K_(X,ye),V=new tv(X,ye,t,St),F=new $_(X,ye),V.reversedDepthBuffer&&u&&F.buffers.depth.setReversed(!0),N=X.createFramebuffer(),T=X.createFramebuffer(),I=X.createFramebuffer(),J=new dv(X),rt=new D_,at=new Z_(X,ye,F,rt,V,St,J),gt=new cv(S),yt=new mb(X),Rt=new jy(X,yt),lt=new hv(X,yt,J,Rt),ft=new mv(X,lt,yt,Rt,J),Z=new pv(X,V,at),Gt=new ev(rt),vt=new F_(S,gt,ye,V,Rt,Gt),Vt=new t1(S,rt),wt=new O_,_t=new G_(ye),ie=new Jy(S,gt,F,ft,p,l),Yt=new q_(S,ft,V),dt=new e1(X,J,V,F),Mt=new Qy(X,ye,J),ht=new fv(X,ye,J),J.programs=vt.programs,S.capabilities=V,S.extensions=ye,S.properties=rt,S.renderLists=wt,S.shadowMap=Yt,S.state=F,S.info=J}x!==_n&&(C=new bv(x,e.width,e.height,a,r,s));let Ut=new nh(S,X);this.xr=Ut,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){let U=ye.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){let U=ye.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(U){U!==void 0&&($=U,this.setSize(tt,H,!1))},this.getSize=function(U){return U.set(tt,H)},this.setSize=function(U,q,ot=!0){if(Ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=U,H=q,e.width=Math.floor(U*$),e.height=Math.floor(q*$),ot===!0&&(e.style.width=U+"px",e.style.height=q+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,U,q)},this.getDrawingBufferSize=function(U){return U.set(tt*$,H*$).floor()},this.setDrawingBufferSize=function(U,q,ot){tt=U,H=q,$=ot,e.width=Math.floor(U*ot),e.height=Math.floor(q*ot),this.setViewport(0,0,U,q)},this.setEffects=function(U){if(x===_n){$t("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(U){for(let q=0;q<U.length;q++)if(U[q].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(U||[])},this.getCurrentViewport=function(U){return U.copy(k)},this.getViewport=function(U){return U.copy(it)},this.setViewport=function(U,q,ot,et){U.isVector4?it.set(U.x,U.y,U.z,U.w):it.set(U,q,ot,et),F.viewport(k.copy(it).multiplyScalar($).round())},this.getScissor=function(U){return U.copy(ut)},this.setScissor=function(U,q,ot,et){U.isVector4?ut.set(U.x,U.y,U.z,U.w):ut.set(U,q,ot,et),F.scissor(W.copy(ut).multiplyScalar($).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(U){F.setScissorTest(mt=U)},this.setOpaqueSort=function(U){st=U},this.setTransparentSort=function(U){ct=U},this.getClearColor=function(U){return U.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(U=!0,q=!0,ot=!0){let et=0;if(U){let nt=!1;if(D!==null){let At=D.texture.format;nt=g.has(At)}if(nt){let At=D.texture.type,Lt=m.has(At),Et=ie.getClearColor(),Nt=ie.getClearAlpha(),kt=Et.r,re=Et.g,ce=Et.b;Lt?(b[0]=kt,b[1]=re,b[2]=ce,b[3]=Nt,X.clearBufferuiv(X.COLOR,0,b)):(_[0]=kt,_[1]=re,_[2]=ce,_[3]=Nt,X.clearBufferiv(X.COLOR,0,_))}else et|=X.COLOR_BUFFER_BIT}q&&(et|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ot&&(et|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&X.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(U){U.setRenderer(this),L=U},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Pn,!1),ie.dispose(),wt.dispose(),_t.dispose(),rt.dispose(),gt.dispose(),ft.dispose(),Rt.dispose(),dt.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",sf),Ut.removeEventListener("sessionend",of),Qi.stop()};function Ee(U){U.preventDefault(),Lu("WebGLRenderer: Context Lost."),E=!0}function ge(){Lu("WebGLRenderer: Context Restored."),E=!1;let U=J.autoReset,q=Yt.enabled,ot=Yt.autoUpdate,et=Yt.needsUpdate,nt=Yt.type;Ht(),J.autoReset=U,Yt.enabled=q,Yt.autoUpdate=ot,Yt.needsUpdate=et,Yt.type=nt}function Pn(U){$t("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function Wn(U){let q=U.target;q.removeEventListener("dispose",Wn),cg(q)}function cg(U){ug(U),rt.remove(U)}function ug(U){let q=rt.get(U).programs;q!==void 0&&(q.forEach(function(ot){vt.releaseProgram(ot)}),U.isShaderMaterial&&vt.releaseShaderCache(U))}this.renderBufferDirect=function(U,q,ot,et,nt,At){q===null&&(q=Se);let Lt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,Et=dg(U,q,ot,et,nt);F.setMaterial(et,Lt);let Nt=ot.index,kt=1;if(et.wireframe===!0){if(Nt=lt.getWireframeAttribute(ot),Nt===void 0)return;kt=2}let re=ot.drawRange,ce=ot.attributes.position,Ot=re.start*kt,be=(re.start+re.count)*kt;At!==null&&(Ot=Math.max(Ot,At.start*kt),be=Math.min(be,(At.start+At.count)*kt)),Nt!==null?(Ot=Math.max(Ot,0),be=Math.min(be,Nt.count)):ce!=null&&(Ot=Math.max(Ot,0),be=Math.min(be,ce.count));let ze=be-Ot;if(ze<0||ze===1/0)return;Rt.setup(nt,et,Et,ot,Nt);let Re,we=Mt;if(Nt!==null&&(Re=yt.get(Nt),we=ht,we.setIndex(Re)),nt.isMesh)et.wireframe===!0?(F.setLineWidth(et.wireframeLinewidth*me()),we.setMode(X.LINES)):we.setMode(X.TRIANGLES);else if(nt.isLine){let on=et.linewidth;on===void 0&&(on=1),F.setLineWidth(on*me()),nt.isLineSegments?we.setMode(X.LINES):nt.isLineLoop?we.setMode(X.LINE_LOOP):we.setMode(X.LINE_STRIP)}else nt.isPoints?we.setMode(X.POINTS):nt.isSprite&&we.setMode(X.TRIANGLES);if(nt.isBatchedMesh)if(ye.get("WEBGL_multi_draw"))we.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let on=nt._multiDrawStarts,Pt=nt._multiDrawCounts,dn=nt._multiDrawCount,pe=Nt?yt.get(Nt).bytesPerElement:1,Sn=rt.get(et).currentProgram.getUniforms();for(let Xn=0;Xn<dn;Xn++)Sn.setValue(X,"_gl_DrawID",Xn),we.render(on[Xn]/pe,Pt[Xn])}else if(nt.isInstancedMesh)we.renderInstances(Ot,ze,nt.count);else if(ot.isInstancedBufferGeometry){let on=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Pt=Math.min(ot.instanceCount,on);we.renderInstances(Ot,ze,Pt)}else we.render(Ot,ze)};function rf(U,q,ot,et){L!==null&&U.isNodeMaterial&&L.setObject(et,U),zt===!0&&Gt.setState(U,ot,!1),U.transparent===!0&&U.side===se&&U.forceSinglePass===!1?(U.side=nn,U.needsUpdate=!0,zo(U,q,et),U.side=jn,U.needsUpdate=!0,zo(U,q,et),U.side=se):zo(U,q,et)}this.compile=function(U,q,ot=null){ot===null&&(ot=U),L!==null&&L.renderStart(U,q,ot),w=_t.get(ot),w.init(q),v.push(w),ot.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),U!==ot&&U.traverseVisible(function(nt){nt.isLight&&nt.layers.test(q.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),L!==null&&L.updateLights(w.state.lightsArray),Wt=this.localClippingEnabled,zt=Gt.init(this.clippingPlanes,Wt),zt===!0&&Gt.setGlobalState(this.clippingPlanes,q),L!==null&&Yt.render(w.state.shadowsArray,ot,q);let et=new Set;return U.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let At=nt.material;if(At)if(Array.isArray(At))for(let Lt=0;Lt<At.length;Lt++){let Et=At[Lt];rf(Et,ot,q,nt),et.add(Et)}else rf(At,ot,q,nt),et.add(At)}),w=v.pop(),L!==null&&L.renderEnd(),et},this.compileAsync=function(U,q,ot=null){let et=this.compile(U,q,ot);return new Promise(nt=>{function At(){if(et.forEach(function(Lt){let Nt=rt.get(Lt).currentProgram;(Nt===void 0||Nt.isReady())&&et.delete(Lt)}),et.size===0){nt(U);return}setTimeout(At,10)}ye.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ac=null;function hg(U){Ac&&Ac(U)}function sf(){Qi.stop()}function of(){Qi.start()}let Qi=new rp;Qi.setAnimationLoop(hg),typeof self<"u"&&Qi.setContext(self),this.setAnimationLoop=function(U){Ac=U,Ut.setAnimationLoop(U),U===null?Qi.stop():Qi.start()},Ut.addEventListener("sessionstart",sf),Ut.addEventListener("sessionend",of),this.render=function(U,q){if(q!==void 0&&q.isCamera!==!0){$t("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;L!==null&&L.renderStart(U,q);let ot=Ut.enabled===!0&&Ut.isPresenting===!0,et=C!==null&&(D===null||ot)&&C.begin(S,D);if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(q),q=Ut.getCamera()),U.isScene===!0&&U.onBeforeRender(S,U,q,D),w=_t.get(U,v.length),w.init(q),w.state.textureUnits=at.getTextureUnits(),v.push(w),Ct.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),bt.setFromProjectionMatrix(Ct,Nn,q.reversedDepth),Wt=this.localClippingEnabled,zt=Gt.init(this.clippingPlanes,Wt),M=wt.get(U,R.length),M.init(),R.push(M),Ut.enabled===!0&&Ut.isPresenting===!0){let Lt=S.xr.getDepthSensingMesh();Lt!==null&&Rc(Lt,q,-1/0,S.sortObjects)}Rc(U,q,0,S.sortObjects),M.finish(),L!==null&&L.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(st,ct),_e=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,_e&&ie.addToRenderList(M,U),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),zt===!0&&Gt.beginShadows();let nt=w.state.shadowsArray;if(Yt.render(nt,U,q),zt===!0&&Gt.endShadows(),(et&&C.hasRenderPass())===!1){let Lt=M.opaque,Et=M.transmissive;if(w.setupLights(),q.isArrayCamera){let Nt=q.cameras;if(Et.length>0)for(let kt=0,re=Nt.length;kt<re;kt++){let ce=Nt[kt];lf(Lt,Et,U,ce)}_e&&ie.render(U);for(let kt=0,re=Nt.length;kt<re;kt++){let ce=Nt[kt];af(M,U,ce,ce.viewport)}}else Et.length>0&&lf(Lt,Et,U,q),_e&&ie.render(U),af(M,U,q)}D!==null&&A===0&&(at.updateMultisampleRenderTarget(D),at.updateRenderTargetMipmap(D)),et&&C.end(S),U.isScene===!0&&U.onAfterRender(S,U,q),Rt.resetDefaultState(),B=-1,z=null,v.pop(),v.length>0?(w=v[v.length-1],at.setTextureUnits(w.state.textureUnits),zt===!0&&Gt.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?M=R[R.length-1]:M=null,L!==null&&L.renderEnd()};function Rc(U,q,ot,et){if(U.visible===!1)return;if(U.layers.test(q.layers)){if(U.isGroup)ot=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(q);else if(U.isLightProbeGrid)w.pushLightProbeGrid(U);else if(U.isLight)w.pushLight(U),U.castShadow&&w.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||U.intersectsFrustum(bt)){et&&ne.setFromMatrixPosition(U.matrixWorld).applyMatrix4(Ct);let Lt=ft.update(U),Et=U.material;Et.visible&&M.push(U,Lt,Et,ot,ne.z,null,q)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||U.intersectsFrustum(bt))){let Lt=ft.update(U),Et=U.material;if(et&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),ne.copy(U.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),ne.copy(Lt.boundingSphere.center)),ne.applyMatrix4(U.matrixWorld).applyMatrix4(Ct)),Array.isArray(Et)){let Nt=Lt.groups;for(let kt=0,re=Nt.length;kt<re;kt++){let ce=Nt[kt],Ot=Et[ce.materialIndex];Ot&&Ot.visible&&M.push(U,Lt,Ot,ot,ne.z,ce,q)}}else Et.visible&&M.push(U,Lt,Et,ot,ne.z,null,q)}}let At=U.children;for(let Lt=0,Et=At.length;Lt<Et;Lt++)Rc(At[Lt],q,ot,et)}function af(U,q,ot,et){let{opaque:nt,transmissive:At,transparent:Lt}=U;w.setupLightsView(ot),zt===!0&&Gt.setGlobalState(S.clippingPlanes,ot),et&&F.viewport(k.copy(et)),nt.length>0&&ko(nt,q,ot),At.length>0&&ko(At,q,ot),Lt.length>0&&ko(Lt,q,ot),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function lf(U,q,ot,et){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){let Ot=ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new Ze(1,1,{generateMipmaps:!0,type:Ot?kn:_n,minFilter:ki,samples:Math.max(4,V.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ue.workingColorSpace})}let At=w.state.transmissionRenderTarget[et.id],Lt=et.viewport||k;At.setSize(Lt.z*S.transmissionResolutionScale,Lt.w*S.transmissionResolutionScale);let Et=S.getRenderTarget(),Nt=S.getActiveCubeFace(),kt=S.getActiveMipmapLevel();S.setRenderTarget(At),S.getClearColor(Q),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),_e&&ie.render(ot);let re=S.toneMapping;S.toneMapping=On;let ce=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),zt===!0&&Gt.setGlobalState(S.clippingPlanes,et),ko(U,ot,et),at.updateMultisampleRenderTarget(At),at.updateRenderTargetMipmap(At),ye.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let be=0,ze=q.length;be<ze;be++){let Re=q[be],{object:we,geometry:on,material:Pt,group:dn}=Re;if(Pt.side===se&&we.layers.test(et.layers)){let pe=Pt.side;Pt.side=nn,Pt.needsUpdate=!0,cf(we,ot,et,on,Pt,dn),Pt.side=pe,Pt.needsUpdate=!0,Ot=!0}}Ot===!0&&(at.updateMultisampleRenderTarget(At),at.updateRenderTargetMipmap(At))}S.setRenderTarget(Et,Nt,kt),S.setClearColor(Q,j),ce!==void 0&&(et.viewport=ce),S.toneMapping=re}function ko(U,q,ot){let et=q.isScene===!0?q.overrideMaterial:null;for(let nt=0,At=U.length;nt<At;nt++){let Lt=U[nt],{object:Et,geometry:Nt,group:kt}=Lt,re=Lt.material;re.allowOverride===!0&&et!==null&&(re=et),Et.layers.test(ot.layers)&&cf(Et,q,ot,Nt,re,kt)}}function cf(U,q,ot,et,nt,At){L!==null&&nt.isNodeMaterial&&L.setObject(U,nt),U.onBeforeRender(S,q,ot,et,nt,At),U.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),nt.onBeforeRender(S,q,ot,et,U,At),nt.transparent===!0&&nt.side===se&&nt.forceSinglePass===!1?(nt.side=nn,nt.needsUpdate=!0,S.renderBufferDirect(ot,q,et,nt,U,At),nt.side=jn,nt.needsUpdate=!0,S.renderBufferDirect(ot,q,et,nt,U,At),nt.side=se):S.renderBufferDirect(ot,q,et,nt,U,At),U.onAfterRender(S,q,ot,et,nt,At)}function zo(U,q,ot){q.isScene!==!0&&(q=Se);let et=rt.get(U),nt=w.state.lights,At=w.state.shadowsArray,Lt=nt.state.version,Et=vt.getParameters(U,nt.state,At,q,ot,w.state.lightProbeGridArray),Nt=vt.getProgramCacheKey(Et),kt=et.programs;et.environment=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?q.environment:null,et.fog=q.fog;let re=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap;et.envMap=gt.get(U.envMap||et.environment,re),et.envMapRotation=et.environment!==null&&U.envMap===null?q.environmentRotation:U.envMapRotation,kt===void 0&&(U.addEventListener("dispose",Wn),kt=new Map,et.programs=kt);let ce=kt.get(Nt);if(ce!==void 0){if(et.currentProgram===ce&&et.lightsStateVersion===Lt)return hf(U,Et),ce}else Et.uniforms=vt.getUniforms(U),L!==null&&U.isNodeMaterial&&L.build(U,ot,Et),U.onBeforeCompile(Et,S),ce=vt.acquireProgram(Et,Nt),kt.set(Nt,ce),et.uniforms=Et.uniforms;let Ot=et.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Ot.clippingPlanes=Gt.uniform),hf(U,Et),et.needsLights=mg(U),et.lightsStateVersion=Lt,et.needsLights&&(Ot.ambientLightColor.value=nt.state.ambient,Ot.lightProbe.value=nt.state.probe,Ot.sunLights.value=nt.state.sun,Ot.sunLightShadows.value=nt.state.sunShadow,Ot.directionalLights.value=nt.state.directional,Ot.directionalLightShadows.value=nt.state.directionalShadow,Ot.spotLights.value=nt.state.spot,Ot.spotLightShadows.value=nt.state.spotShadow,Ot.rectAreaLights.value=nt.state.rectArea,Ot.ltc_1.value=nt.state.rectAreaLTC1,Ot.ltc_2.value=nt.state.rectAreaLTC2,Ot.pointLights.value=nt.state.point,Ot.pointLightShadows.value=nt.state.pointShadow,Ot.hemisphereLights.value=nt.state.hemi,Ot.sunShadowMatrix.value=nt.state.sunShadowMatrix,Ot.sunShadowCascade.value=nt.state.sunShadowCascade,Ot.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Ot.spotLightMatrix.value=nt.state.spotLightMatrix,Ot.spotLightMap.value=nt.state.spotLightMap,Ot.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=ce,et.uniformsList=null,ce}function uf(U){if(U.uniformsList===null){let q=U.currentProgram.getUniforms();U.uniformsList=ss.seqWithValue(q.seq,U.uniforms)}return U.uniformsList}function hf(U,q){let ot=rt.get(U);ot.outputColorSpace=q.outputColorSpace,ot.batching=q.batching,ot.batchingColor=q.batchingColor,ot.instancing=q.instancing,ot.instancingColor=q.instancingColor,ot.instancingMorph=q.instancingMorph,ot.skinning=q.skinning,ot.morphTargets=q.morphTargets,ot.morphNormals=q.morphNormals,ot.morphColors=q.morphColors,ot.morphTargetsCount=q.morphTargetsCount,ot.numClippingPlanes=q.numClippingPlanes,ot.numIntersection=q.numClipIntersection,ot.vertexAlphas=q.vertexAlphas,ot.vertexTangents=q.vertexTangents,ot.toneMapping=q.toneMapping}function fg(U,q){if(U.length===0)return null;if(U.length===1)return U[0].texture!==null?U[0]:null;y.setFromMatrixPosition(q.matrixWorld);for(let ot=0,et=U.length;ot<et;ot++){let nt=U[ot];if(nt.texture!==null&&nt.boundingBox.containsPoint(y))return nt}return null}function dg(U,q,ot,et,nt){q.isScene!==!0&&(q=Se),at.resetTextureUnits();let At=q.fog,Lt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?q.environment:null,Et=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:ue.workingColorSpace,Nt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,kt=gt.get(et.envMap||Lt,Nt),re=et.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ce=!!ot.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),Ot=!!ot.morphAttributes.position,be=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color,Re=On;et.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Re=S.toneMapping);let we=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,on=we!==void 0?we.length:0,Pt=rt.get(et),dn=w.state.lights;if(zt===!0&&(Wt===!0||U!==z)){let Ae=U===z&&et.id===B;Gt.setState(et,U,Ae)}let pe=!1;et.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==dn.state.version||Pt.outputColorSpace!==Et||nt.isBatchedMesh&&Pt.batching===!1||!nt.isBatchedMesh&&Pt.batching===!0||nt.isBatchedMesh&&Pt.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&Pt.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&Pt.instancing===!1||!nt.isInstancedMesh&&Pt.instancing===!0||nt.isSkinnedMesh&&Pt.skinning===!1||!nt.isSkinnedMesh&&Pt.skinning===!0||nt.isInstancedMesh&&Pt.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&Pt.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&Pt.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&Pt.instancingMorph===!1&&nt.morphTexture!==null||Pt.envMap!==kt||et.fog===!0&&Pt.fog!==At||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==Gt.numPlanes||Pt.numIntersection!==Gt.numIntersection)||Pt.vertexAlphas!==re||Pt.vertexTangents!==ce||Pt.morphTargets!==Ot||Pt.morphNormals!==be||Pt.morphColors!==ze||Pt.toneMapping!==Re||Pt.morphTargetsCount!==on||!!Pt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(pe=!0):(pe=!0,Pt.__version=et.version);let Sn=Pt.currentProgram;pe===!0&&(Sn=zo(et,q,nt),L&&et.isNodeMaterial&&L.onUpdateProgram(et,Sn,Pt));let Xn=!1,Mi=!1,Ar=!1,Me=Sn.getUniforms(),Be=Pt.uniforms;if(F.useProgram(Sn.program)&&(Xn=!0,Mi=!0,Ar=!0),et.id!==B&&(B=et.id,Mi=!0),Pt.needsLights){let Ae=fg(w.state.lightProbeGridArray,nt);Pt.lightProbeGrid!==Ae&&(Pt.lightProbeGrid=Ae,Mi=!0)}if(Xn||z!==U){F.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Me.setValue(X,"projectionMatrix",U.projectionMatrix),Me.setValue(X,"viewMatrix",U.matrixWorldInverse);let wi=Me.map.cameraPosition;wi!==void 0&&wi.setValue(X,xt.setFromMatrixPosition(U.matrixWorld)),V.logarithmicDepthBuffer&&Me.setValue(X,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Me.setValue(X,"isOrthographic",U.isOrthographicCamera===!0),z!==U&&(z=U,Mi=!0,Ar=!0)}if(Pt.needsLights&&(dn.state.sunShadowMap.length>0&&Me.setValue(X,"sunShadowMap",dn.state.sunShadowMap,at),dn.state.directionalShadowMap.length>0&&Me.setValue(X,"directionalShadowMap",dn.state.directionalShadowMap,at),dn.state.spotShadowMap.length>0&&Me.setValue(X,"spotShadowMap",dn.state.spotShadowMap,at),dn.state.pointShadowMap.length>0&&Me.setValue(X,"pointShadowMap",dn.state.pointShadowMap,at)),nt.isSkinnedMesh){Me.setOptional(X,nt,"bindMatrix"),Me.setOptional(X,nt,"bindMatrixInverse");let Ae=nt.skeleton;Ae&&(Ae.boneTexture===null&&Ae.computeBoneTexture(),Me.setValue(X,"boneTexture",Ae.boneTexture,at))}nt.isBatchedMesh&&(Me.setOptional(X,nt,"batchingTexture"),Me.setValue(X,"batchingTexture",nt._matricesTexture,at),Me.setOptional(X,nt,"batchingIdTexture"),Me.setValue(X,"batchingIdTexture",nt._indirectTexture,at),Me.setOptional(X,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Me.setValue(X,"batchingColorTexture",nt._colorsTexture,at));let Si=ot.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Z.update(nt,ot,Sn),(Mi||Pt.receiveShadow!==nt.receiveShadow)&&(Pt.receiveShadow=nt.receiveShadow,Me.setValue(X,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&q.environment!==null&&(Be.envMapIntensity.value=q.environmentIntensity),Be.dfgLUT!==void 0&&(Be.dfgLUT.value=i1()),Mi){if(Me.setValue(X,"toneMappingExposure",S.toneMappingExposure),Pt.needsLights&&pg(Be,Ar),At&&et.fog===!0&&Vt.refreshFogUniforms(Be,At),Vt.refreshMaterialUniforms(Be,et,$,H,w.state.transmissionRenderTarget[U.id]),Pt.needsLights&&Pt.lightProbeGrid){let Ae=Pt.lightProbeGrid;Be.probesSH.value=Ae.texture,Be.probesMin.value.copy(Ae.boundingBox.min),Be.probesMax.value.copy(Ae.boundingBox.max),Be.probesResolution.value.copy(Ae.resolution)}ss.upload(X,uf(Pt),Be,at)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(ss.upload(X,uf(Pt),Be,at),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Me.setValue(X,"center",nt.center),Me.setValue(X,"modelViewMatrix",nt.modelViewMatrix),Me.setValue(X,"normalMatrix",nt.normalMatrix),Me.setValue(X,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let Ae=et.uniformsGroups;for(let wi=0,Rr=Ae.length;wi<Rr;wi++){let df=Ae[wi];dt.update(df,Sn),dt.bind(df,Sn)}}return Sn}function pg(U,q){U.ambientLightColor.needsUpdate=q,U.lightProbe.needsUpdate=q,U.sunLights.needsUpdate=q,U.sunLightShadows.needsUpdate=q,U.directionalLights.needsUpdate=q,U.directionalLightShadows.needsUpdate=q,U.pointLights.needsUpdate=q,U.pointLightShadows.needsUpdate=q,U.spotLights.needsUpdate=q,U.spotLightShadows.needsUpdate=q,U.rectAreaLights.needsUpdate=q,U.hemisphereLights.needsUpdate=q}function mg(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(U,q,ot){let et=rt.get(U);et.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),rt.get(U.texture).__webglTexture=q,rt.get(U.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:ot,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,q){let ot=rt.get(U);ot.__webglFramebuffer=q,ot.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(U,q=0,ot=0){D=U,P=q,A=ot;let et=null,nt=!1,At=!1;if(U){let Et=rt.get(U);if(Et.__useDefaultFramebuffer!==void 0){F.bindFramebuffer(X.FRAMEBUFFER,Et.__webglFramebuffer),k.copy(U.viewport),W.copy(U.scissor),G=U.scissorTest,F.viewport(k),F.scissor(W),F.setScissorTest(G),B=-1;return}else if(Et.__webglFramebuffer===void 0)at.setupRenderTarget(U);else if(Et.__hasExternalTextures)at.rebindTextures(U,rt.get(U.texture).__webglTexture,rt.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){let re=U.depthTexture;if(Et.__boundDepthTexture!==re){if(re!==null&&rt.has(re)&&(U.width!==re.image.width||U.height!==re.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(U)}}let Nt=U.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(At=!0);let kt=rt.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(kt[q])?et=kt[q][ot]:et=kt[q],nt=!0):U.samples>0&&at.useMultisampledRTT(U)===!1?et=rt.get(U).__webglMultisampledFramebuffer:Array.isArray(kt)?et=kt[ot]:et=kt,k.copy(U.viewport),W.copy(U.scissor),G=U.scissorTest}else k.copy(it).multiplyScalar($).floor(),W.copy(ut).multiplyScalar($).floor(),G=mt;if(ot!==0&&(et=N),F.bindFramebuffer(X.FRAMEBUFFER,et)&&F.drawBuffers(U,et),F.viewport(k),F.scissor(W),F.setScissorTest(G),nt){let Et=rt.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,Et.__webglTexture,ot)}else if(At){let Et=q;for(let Nt=0;Nt<U.textures.length;Nt++){let kt=rt.get(U.textures[Nt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Nt,kt.__webglTexture,ot,Et)}}else if(U!==null&&ot!==0){let Et=rt.get(U.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Et.__webglTexture,ot)}B=-1};function ff(U){let q=rt.get(U);return(q.__readFormat!==U.format||q.__readType!==U.type)&&(q.__readFormat=U.format,q.__readType=U.type,q.__formatReadable=V.textureFormatReadable(U.format),q.__typeReadable=V.textureTypeReadable(U.type)),q}this.readRenderTargetPixels=function(U,q,ot,et,nt,At,Lt,Et=0){if(!(U&&U.isWebGLRenderTarget)){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=rt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt){F.bindFramebuffer(X.FRAMEBUFFER,Nt);try{let kt=U.textures[Et],re=kt.format,ce=kt.type;U.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Et);let Ot=ff(kt);if(Ot.__formatReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){$t("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=U.width-et&&ot>=0&&ot<=U.height-nt&&X.readPixels(q,ot,et,nt,St.convert(re),St.convert(ce),At)}finally{let kt=D!==null?rt.get(D).__webglFramebuffer:null;F.bindFramebuffer(X.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(U,q,ot,et,nt,At,Lt,Et=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=rt.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Lt!==void 0&&(Nt=Nt[Lt]),Nt)if(q>=0&&q<=U.width-et&&ot>=0&&ot<=U.height-nt){F.bindFramebuffer(X.FRAMEBUFFER,Nt);let kt=U.textures[Et],re=kt.format,ce=kt.type;U.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+Et);let Ot=ff(kt);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let be=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.bufferData(X.PIXEL_PACK_BUFFER,At.byteLength,X.STREAM_READ),X.readPixels(q,ot,et,nt,St.convert(re),St.convert(ce),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);let ze=D!==null?rt.get(D).__webglFramebuffer:null;F.bindFramebuffer(X.FRAMEBUFFER,ze);let Re=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await Ad(X,Re,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,be),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,At),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(be),X.deleteSync(Re),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,q=null,ot=0){let et=Math.pow(2,-ot),nt=Math.floor(U.image.width*et),At=Math.floor(U.image.height*et),Lt=q!==null?q.x:0,Et=q!==null?q.y:0;at.setTexture2D(U,0),X.copyTexSubImage2D(X.TEXTURE_2D,ot,0,0,Lt,Et,nt,At),F.unbindTexture()},this.copyTextureToTexture=function(U,q,ot=null,et=null,nt=0,At=0){let Lt,Et,Nt,kt,re,ce,Ot,be,ze,Re=U.isCompressedTexture?U.mipmaps[At]:U.image;if(ot!==null)Lt=ot.max.x-ot.min.x,Et=ot.max.y-ot.min.y,Nt=ot.isBox3?ot.max.z-ot.min.z:1,kt=ot.min.x,re=ot.min.y,ce=ot.isBox3?ot.min.z:0;else{let Be=Math.pow(2,-nt);Lt=Math.floor(Re.width*Be),Et=Math.floor(Re.height*Be),U.isDataArrayTexture?Nt=Re.depth:U.isData3DTexture?Nt=Math.floor(Re.depth*Be):Nt=1,kt=0,re=0,ce=0}et!==null?(Ot=et.x,be=et.y,ze=et.z):(Ot=0,be=0,ze=0);let we=St.convert(q.format),on=St.convert(q.type),Pt;q.isData3DTexture?(at.setTexture3D(q,0),Pt=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(at.setTexture2DArray(q,0),Pt=X.TEXTURE_2D_ARRAY):(at.setTexture2D(q,0),Pt=X.TEXTURE_2D),F.activeTexture(X.TEXTURE0),F.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);let dn=F.getParameter(X.UNPACK_ROW_LENGTH),pe=F.getParameter(X.UNPACK_IMAGE_HEIGHT),Sn=F.getParameter(X.UNPACK_SKIP_PIXELS),Xn=F.getParameter(X.UNPACK_SKIP_ROWS),Mi=F.getParameter(X.UNPACK_SKIP_IMAGES);F.pixelStorei(X.UNPACK_ROW_LENGTH,Re.width),F.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Re.height),F.pixelStorei(X.UNPACK_SKIP_PIXELS,kt),F.pixelStorei(X.UNPACK_SKIP_ROWS,re),F.pixelStorei(X.UNPACK_SKIP_IMAGES,ce);let Ar=U.isDataArrayTexture||U.isData3DTexture,Me=q.isDataArrayTexture||q.isData3DTexture;if(U.isDepthTexture){let Be=rt.get(U),Si=rt.get(q),Ae=rt.get(Be.__renderTarget),wi=rt.get(Si.__renderTarget);F.bindFramebuffer(X.READ_FRAMEBUFFER,Ae.__webglFramebuffer),F.bindFramebuffer(X.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Rr=0;Rr<Nt;Rr++)Ar&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(U).__webglTexture,nt,ce+Rr),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,At,ze+Rr)),X.blitFramebuffer(kt,re,Lt,Et,Ot,be,Lt,Et,X.DEPTH_BUFFER_BIT,X.NEAREST);F.bindFramebuffer(X.READ_FRAMEBUFFER,null),F.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(nt!==0||U.isRenderTargetTexture||rt.has(U)){let Be=rt.get(U),Si=rt.get(q);F.bindFramebuffer(X.READ_FRAMEBUFFER,T),F.bindFramebuffer(X.DRAW_FRAMEBUFFER,I);for(let Ae=0;Ae<Nt;Ae++)Ar?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Be.__webglTexture,nt,ce+Ae):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Be.__webglTexture,nt),Me?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Si.__webglTexture,At,ze+Ae):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Si.__webglTexture,At),nt!==0?X.blitFramebuffer(kt,re,Lt,Et,Ot,be,Lt,Et,X.COLOR_BUFFER_BIT,X.NEAREST):Me?X.copyTexSubImage3D(Pt,At,Ot,be,ze+Ae,kt,re,Lt,Et):X.copyTexSubImage2D(Pt,At,Ot,be,kt,re,Lt,Et);F.bindFramebuffer(X.READ_FRAMEBUFFER,null),F.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Me?U.isDataTexture||U.isData3DTexture?X.texSubImage3D(Pt,At,Ot,be,ze,Lt,Et,Nt,we,on,Re.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(Pt,At,Ot,be,ze,Lt,Et,Nt,we,Re.data):X.texSubImage3D(Pt,At,Ot,be,ze,Lt,Et,Nt,we,on,Re):U.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,At,Ot,be,Lt,Et,we,on,Re.data):U.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,At,Ot,be,Re.width,Re.height,we,Re.data):X.texSubImage2D(X.TEXTURE_2D,At,Ot,be,Lt,Et,we,on,Re);F.pixelStorei(X.UNPACK_ROW_LENGTH,dn),F.pixelStorei(X.UNPACK_IMAGE_HEIGHT,pe),F.pixelStorei(X.UNPACK_SKIP_PIXELS,Sn),F.pixelStorei(X.UNPACK_SKIP_ROWS,Xn),F.pixelStorei(X.UNPACK_SKIP_IMAGES,Mi),At===0&&q.generateMipmaps&&X.generateMipmap(Pt),F.unbindTexture()},this.initRenderTarget=function(U){rt.get(U).__webglFramebuffer===void 0&&at.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?at.setTextureCube(U,0):U.isData3DTexture?at.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?at.setTexture2DArray(U,0):at.setTexture2D(U,0),F.unbindTexture()},this.resetState=function(){P=0,A=0,D=null,F.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};function hp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function fp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var dp=2.1;function ih(i){return i.variant==="wall"}function pp(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var r1=[],rh=new Map,s1=0;function lo(i){r1=i,rh=new Map(i.flatMap(t=>t.items.map(e=>[o1(t.id,e.id),e]))),s1++}function o1(i,t){return`pack:${i}:${t}`}function sh(i){return i.startsWith("pack:")}function Gl(i){return sh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function oh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function mp(i){return i==="robot_vacuum"||sh(i)&&i.endsWith(":robot_vacuum")}function co(i){return i.z>.05}function gp(i){let t=((i==null?void 0:i.parts)??[]).filter(e=>e.shape==="cyl"&&co(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var a1={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function bp(i){var t;return(t=ve(i))==null?void 0:t.parts.find(e=>e.screen)}function ve(i){if(!sh(i))return;let t=rh.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=a1[e];return r?rh.get(`pack:${r}:${n.join(":")}`):void 0}function Je(i,t){let e=ve(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return Hl;if(t.type==="access_point")return t.variant==="wall"?dp:Math.max(0,i.height-Math.max(.005,t.h));if(xp.has(t.type))return Math.max(0,i.height-yp(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return vp(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?0:mi(t)}}var c1={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},pA=Object.keys(c1),uo=1;var as={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function zn(i){return i==="hedge"||i==="fence"||i==="pergola"}function ah(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!zn(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function Xl(i){return[...i.rooms,...ah(i)]}function u1(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,f)=>r==="x"?c:r==="-x"?-c:r==="z"?f:-f,o=1/0,a=-1/0;for(let[c,f]of i.points){let h=s(c,f);o=Math.min(o,h),a=Math.max(a,h)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function h1(i,t,e,n){return gr(i,t)+as[t.type]-ho(i,t,e,n)}var lh=-.2,Wl={set:!1,level:lh};function Mp(i){let t=(i==null?void 0:i.settings.terrain)??null;Wl={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??lh}}function ls(i,t){return Wl.level}function Sp(i){return i.elevation>.3?0:Wl.set?Wl.level-i.elevation:lh}function gr(i,t){return Sp(i)+(t.offset??0)}function ho(i,t,e,n){return t.type==="pool"?0:u1(t,e,n)}function wp(i,t,e){let n=(i.outdoor??[]).filter(s=>!zn(s.type)&&s.type!=="pool"&&te([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?h1(i,r,t,e):Sp(i)}function Yl(i,t){return gr(i,t)+(t.above?Ep(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function f1(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?Ep(i):1.5}function ch(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!zn(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>te(n,e.points)))}function Tp(i,t){return!t.above&&!ch(i,t)?ql(i,t)-.05:Yl(i,t)-f1(t)}function ql(i,t){return Yl(i,t)-.15}function Ep(i){return i.height&&i.height>.3?i.height:1.2}var d1={type:"none",pitch:35,overhang:.4},xA={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...d1}};var Ap=.3;var Rp=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),Hl=1.75;var xp=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function yp(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var Cp=new Set(["stairs","stairs_u"]);function Pp(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),f=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:f,rise:e/n}}function Ip(i){var t;return Rp.has(i)||!!((t=ve(i))!=null&&t.light)}var p1=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var $l=1.05,Zl=.3;function mi(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return $l;case"wall_socket":return Zl;case"water_heater":return uo;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var _p=.04,m1=1.2;function vp(i,t,e,n=0){var s;let r=0;for(let o of i.furniture)!(p1.has(o.type)||(s=ve(o.type))!=null&&s.surface)||!te([t,e],Hi(o))||o.type==="worktop"&&n>0&&o.h-_p>=m1&&n<=o.h-_p-.02||(r=Math.max(r,o.h));return r}var l1=new Set([...Rp,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var g1=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],b1=["standard","bars","glass_wall"];function br(i,t){return i.type==="door"?i.style&&g1.includes(i.style)?i.style:t?"front":"interior":i.style&&b1.includes(i.style)?i.style:"standard"}function Lp(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let f=s-.5;if(l+c>f){let u=Math.max(0,f)/(l+c);l*=u,c*=u}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function Fp(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Mn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function Vn(i){return Math.abs(Mn(i))}function Gi(i){let t=Mn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function Dp(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function Np(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function Hi(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function te(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function kp(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var Ge=(i,t)=>[i[0]-t[0],i[1]-t[1]],Wi=(i,t)=>[i[0]+t[0],i[1]+t[1]],gi=(i,t)=>[i[0]*t,i[1]*t],us=(i,t)=>i[0]*t[0]+i[1]*t[1],cs=(i,t)=>i[0]*t[1]-i[1]*t[0],fo=i=>Math.hypot(i[0],i[1]),An=i=>{let t=fo(i)||1;return[i[0]/t,i[1]/t]},Op=i=>[-i[1],i[0]],Up=i=>[i[1],-i[0]];function ni(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let E=0;E<o.length;E++)if(Math.abs(o[E][0]-S[0])<=n&&Math.abs(o[E][1]-S[1])<=n)return E;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let E=S.points;if(E.length<3||Math.abs(Mn(E))<1e-6)continue;let L=Mn(E)>0,N=E.map(a);for(let T=0;T<E.length;T++){let I=N[T],P=N[(T+1)%E.length];I!==P&&l.push(L?{u:I,v:P,room:S.id,edge:T,forward:!0}:{u:P,v:I,room:S.id,edge:T,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),f=new Set;for(let S of i){let E=S.points;E.length<3||(S.wall_splits??[]).forEach((L,N)=>{if(!L||N>=E.length)return;let T=E[N],I=Ge(E[(N+1)%E.length],T),P=fo(I);for(let A of L)A>n&&A<P-n&&f.add(a(Wi(T,gi(I,A/P))))})}let h=[];for(let S of l){let E=o[S.u],L=o[S.v],N=Ge(L,E),T=fo(N),I=gi(N,1/T),P=[];for(let D=0;D<o.length;D++){if(D===S.u||D===S.v)continue;let B=Ge(o[D],E),z=us(B,I);z<=n||z>=T-n||Math.abs(cs(I,B))<=n&&P.push({t:z,id:D})}P.sort((D,B)=>D.t-B.t);let A=[{t:0,id:S.u},...P,{t:T,id:S.v}];for(let D=0;D+1<A.length;D++){let B=A[D],z=A[D+1],k=S.forward?B.t:T-z.t,W=S.forward?z.t:T-B.t;h.push({u:B.id,v:z.id,room:S.room,edge:S.edge,t0:k,t1:W})}}let u=new Map;for(let S of h){let E=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,L=u.get(E);L||u.set(E,L=[]),L.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of h){let E=`${S.room}:${S.edge}`;p.set(E,[...p.get(E)??[],S.t0].sort((L,N)=>L-N))}let x=S=>{var N,T;let E=(T=(N=i.find(I=>I.id===S.room))==null?void 0:N.wall_heights)==null?void 0:T[S.edge];if(!Array.isArray(E))return E;let L=p.get(`${S.room}:${S.edge}`)??[];return E[L.indexOf(S.t0)]??null},g=S=>{let E=S.map(x).filter(N=>typeof N=="number"&&N>0);if(E.length)return Math.min(...E);let L=S.map(N=>{var T;return(T=i.find(I=>I.id===N.room))==null?void 0:T.ceiling_height});return L.every(N=>typeof N=="number"&&N>0)?Math.max(...L):void 0},m=S=>{let E=S.map(L=>{var N,T;return(T=(N=i.find(I=>I.id===L.room))==null?void 0:N.wall_thickness)==null?void 0:T[L.edge]}).filter(L=>typeof L=="number"&&L>0);return E.length?Math.max(...E):void 0},b=S=>{var E;for(let L of S){let N=i.find(A=>A.id===L.room),T=(E=N==null?void 0:N.wall_slopes)==null?void 0:E[L.edge];if(!N||!T)continue;let I=N.points[L.edge],P=N.points[(L.edge+1)%N.points.length];return{p:[I[0],I[1]],q:[P[0],P[1]],h0:Math.max(.05,T[0]),h1:Math.max(.05,T[1])}}},_=S=>S.some(E=>x(E)===0),y=S=>{let E=b(S);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:g(S)}},M=[],w=[];for(let S of u.values()){let E=S[0],L=S.find(N=>N!==E&&N.u===E.v&&N.v===E.u&&N.room!==E.room);for(let N of S)N!==E&&N!==L&&N.room!==E.room&&r.push(`overlap:${E.room}:${N.room}`);if(_(L?[E,L]:[E])){L&&M.push([E.room,L.room]);continue}if(L){let N=m([E,L])??t.interior;w.push({a:E.u,b:E.v,left:N/2,right:N/2,exterior:!1,roomLeft:E.room,roomRight:L.room,sources:[d(E),d(L)],...y([E,L])})}else w.push({a:E.u,b:E.v,left:0,right:m([E])??t.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[d(E)],...y([E])})}let R=S=>An(Ge(o[S.b],o[S.a]));for(let S of w){if(S.exterior||S.free)continue;let E=new Set;for(let N of[S.a,S.b])for(let T of w)!T.exterior||T.free||T.a!==N&&T.b!==N||Math.abs(cs(R(S),R(T)))>1e-6||(T.roomLeft===S.roomLeft?E.add("left"):T.roomLeft===S.roomRight&&E.add("right"));if(E.size!==1)continue;let L=S.left+S.right;E.has("left")?(S.left=0,S.right=L):(S.left=L,S.right=0)}s.forEach((S,E)=>{var D;let[L,N]=c[E];if(L===N)return;let T=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],I=((D=i.find(B=>B.points.length>=3&&te(T,B.points)))==null?void 0:D.id)??null,P=(S.thickness??t.interior)/2,A=typeof S.height=="number"&&S.height>0?S.height:void 0;w.push({free:S.id,a:L,b:N,left:P,right:P,exterior:!1,roomLeft:I,roomRight:I,sources:[],height:A})}),w=y1(w,o,f);let v=_1(w,o);return{walls:w.map((S,E)=>{let L=o[S.a],N=o[S.b],T=v.get(`${E}:a`),I=v.get(`${E}:b`),P=M1([T.right,I.left,N,I.right,T.left,L],1e-6);return{id:x1(L,N),a:[L[0],L[1]],b:[N[0],N[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:P,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function x1(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function Bp(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function y1(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=Bp(l)),c.a!==o&&(c=Bp(c)),l.a===c.b)continue;let f=An(Ge(t[l.b],t[l.a])),h=An(Ge(t[c.b],t[c.a]));if(Math.abs(cs(f,h))>1e-6||us(f,h)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let u={...l,b:c.b,sources:v1(l.sources,c.sources)},d=n.filter((p,x)=>x!==a[0]&&x!==a[1]);d.push(u),n.length=0,n.push(...d),r=!0;break}}return n}function v1(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function _1(i,t){let e=new Map;i.forEach((r,s)=>{let o=An(Ge(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:gi(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let f=e.get(l);f||e.set(l,f=[]),f.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,f)=>c.angle-f.angle);let a=c=>({left:Wi(o,gi(Op(c.d),c.left)),right:Wi(o,gi(Up(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let f=s[c],h=s[(c+1)%s.length],u=Wi(o,gi(Op(f.d),f.left)),d=Wi(o,gi(Up(h.d),h.right)),p=cs(f.d,h.d);if(Math.abs(p)<1e-4)continue;let x=cs(Ge(d,u),h.d)/p,g=Wi(u,gi(f.d,x));fo(Ge(g,o))>l||(n.get(f.key).left=g,n.get(h.key).right=g)}}return n}function M1(i,t){let e=i.filter((r,s)=>fo(Ge(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=Ge(o,s),c=Ge(a,o);if(Math.abs(cs(An(l),An(c)))<1e-7&&us(l,c)>0){e=e.filter((f,h)=>h!==r),n=!0;break}}}return e}function uh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=An(Ge(r,n));return Wi(n,gi(s,e))}function hs(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=An(Ge(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,Wi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function fs(i,t,e){if(!t.wall)return S1(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=uh(e.room,0,t.offset);return{wall:n,s:us(Ge(r,n.a),An(Ge(n.b,n.a)))}}function hh(i,t,e){if(!t.exterior||t.free)return null;let n=e?t.b:t.a,r=An(Ge(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||!a.exterior||a.free||!s(e?a.a:a.b)||us(An(Ge(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function S1(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=uh(t,e,n);return{wall:r,s:us(Ge(o,r.a),An(Ge(r.b,r.a)))}}return null}var xr=Math.PI/180;function fn(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1);return i.axis==="x"?{u0:t,u1:e,w:r-n,at:(s,o)=>[s,i.flip?r-o:n+o]}:{u0:n,u1:r,w:e-t,at:(s,o)=>[i.flip?e-o:t+o,s]}}function rn(i){let t=fn(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xr),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xr);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=Xp(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function fh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var dh=.14;function Vp(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function ph(i,t){return rn(i).rh-dh>t+.01}function Gp(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of fh(i)){if(o.open||n!==void 0&&!ph(o,n))continue;let a=Math.min(o.x0,o.x1),l=Math.max(o.x0,o.x1),c=Math.min(o.z0,o.z1),f=Math.max(o.z0,o.z1);if(t<a-1e-6||t>l+1e-6||e<c-1e-6||e>f+1e-6||o.points&&o.points.length>=3&&!te([t,e],o.points))continue;let[h,u]=bi(o,t,e),d=o.shape==="flat"||o.shape==="parapet",p=Math.max(0,o.overhang??s),g=((d?null:go(vr(o,{u0:p,u1:p,a:p,b:p}),h,u))??rn(o).y(u))-dh;r=r===null?g:Math.max(r,g)}return r}function jl(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=Vn(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=zp([a[0]-o[0],a[1]-o[1]]),f=zp([l[0]-a[0],l[1]-a[1]]),h=[c[1]*n,-c[0]*n],u=[f[1]*n,-f[0]*n],d=h[0]+u[0],p=h[1]+u[1],x=Math.hypot(d,p);if(x<1e-6){r.push([a[0]+h[0]*t,a[1]+h[1]*t]);continue}let g=(d*h[0]+p*h[1])/x,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/x*t*m,a[1]+p/x*t*m])}return r}function zp(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function Hp(i,t){if(i.points&&i.points.length>=3)return jl(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t;return[[e,r],[n,r],[n,s],[e,s]]}function Wp(i,t,e,n){let r=ni(i,{exterior:e,interior:n},t).walls.filter(h=>h.exterior&&!h.free);if(!r.length)return null;let s=h=>`${Math.round(h[0]*1e3)}:${Math.round(h[1]*1e3)}`,o=new Map,a=r.map(h=>({a:h.a,b:h.b}));for(let h of a)for(let u of[h.a,h.b])o.set(s(u),[...o.get(s(u))??[],h]);let l=new Set,c=null;for(let h of a){if(l.has(h))continue;l.add(h);let u=[h.a,h.b],d=h.b;for(;;){let p=(o.get(s(d))??[]).find(x=>!l.has(x));if(!p||(l.add(p),d=s(p.a)===s(d)?p.b:p.a,s(d)===s(u[0])))break;u.push(d)}u.length>=3&&s(d)===s(u[0])&&(!c||Math.abs(Vn(u))>Math.abs(Vn(c)))&&(c=u)}if(!c)return null;let f=[];for(let h=0;h<c.length;h++){let u=c[(h+c.length-1)%c.length],d=c[h],p=c[(h+1)%c.length],x=(d[0]-u[0])*(p[1]-d[1])-(d[1]-u[1])*(p[0]-d[0]);Math.abs(x)>1e-6&&f.push(d)}return f.length>=3?jl(f,e):null}var po=Math.tan(30*xr);function Xp(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+po*(i-o+s))/(2*po))),f=a+(c-s)*po;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:f,y:u=>u<=s?t+u*n:u<=c?a+(u-s)*po:u<=i-o?l+(i-o-u)*po:e+(i-u)*r}}function vr(i,t){let e=fn(i),n=rn(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(D,B)=>[D,B,n.y(B)],f=c(a,-s),h=c(l,-s),u=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xr),x=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xr);if(i.shape==="pent"){let D=[f,h,u,d],B=[[0,n.y(0)],[r,n.y(r)]];return{faces:[D],rim:D,ridges:[[u,d]],gable:B,gables:[B,B]}}if(i.shape==="pyramid"){let D=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[f,h,D],[h,u,D],[u,d,D],[d,f,D]],rim:[f,h,u,d],ridges:[[f,D],[d,D],[h,D],[u,D]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let D=Xp(r,i.eave_a,i.eave_b,p,x),B=[[0,n.y(0)],[D.vla,D.yla],[D.vr,D.rh],[r-D.vlb,D.ylb],[r,n.y(r)]],z=[a,D.vla,D.yla],k=[l,D.vla,D.yla],W=[a,r-D.vlb,D.ylb],G=[l,r-D.vlb,D.ylb],Q=[a,D.vr,D.rh],j=[l,D.vr,D.rh];return{faces:[[f,h,k,z],[z,k,j,Q],[Q,j,G,W],[W,G,u,d]],rim:[f,h,k,j,G,u,d,W,Q,z],ridges:[[Q,j],[z,k],[W,G]],gable:B,gables:[B,B]}}let[g,m]=Ql(i)??["gable","gable"],b=mh(i,[g,m]),_=g==="gable"?[a,n.vr,n.rh]:[e.u0+b.d0,n.vr,n.rh],y=m==="gable"?[l,n.vr,n.rh]:[e.u1-b.d1,n.vr,n.rh],M=[a,b.vah,b.yh],w=[a,b.vbh,b.yh],R=[l,b.vah,b.yh],v=[l,b.vbh,b.yh],C=g==="halfhip",S=m==="halfhip",E=[[f,h,...S?[R]:[],y,_,...C?[M]:[]],[_,y,...S?[v]:[],u,d,...C?[w]:[]]];g==="hip"&&E.push([d,f,_]),C&&E.push([w,M,_]),m==="hip"&&E.push([h,u,y]),S&&E.push([R,v,y]);let L=[f,h,...m==="gable"?[y]:S?[R,v]:[],u,d,...g==="gable"?[_]:C?[w,M]:[]],N=[[_,y]];g==="hip"&&N.push([f,_],[d,_]),C&&N.push([M,_],[w,_]),m==="hip"&&N.push([h,y],[u,y]),S&&N.push([R,y],[v,y]);let T=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],I=[[0,n.y(0)],[b.vah,b.yh],[b.vbh,b.yh],[r,n.y(r)]],P=D=>D==="gable"?T:D==="halfhip"?I:null,A=[P(g),P(m)];return{faces:E,rim:L,ridges:N,gable:A[0]??A[1],gables:A}}function Ql(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function mh(i,t){let e=fn(i),n=rn(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*xr),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*xr),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),f=c+(n.rh-c)*.55,h=s>1e-6?Math.min(n.vr,(f-i.eave_a)/s):n.vr,u=o>1e-6?Math.max(n.vr,r-(f-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-f)/Math.max(.2,s)),x=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:x(t[0]),d1:x(t[1]),yh:f,vah:h,vbh:u}}function go(i,t,e){let n=null;for(let r of i.faces){if(!te([t,e],r.map(b=>[b[0],b[1]])))continue;let[s,o]=r,a=r.slice(2).find(b=>Math.abs((o[0]-s[0])*(b[1]-s[1])-(o[1]-s[1])*(b[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],f=o[1]-s[1],h=a[0]-s[0],u=a[2]-s[2],d=a[1]-s[1],p=c*d-f*u,x=f*h-l*d,g=l*u-c*h;if(Math.abs(x)<1e-9)continue;let m=s[2]-(p*(t-s[0])+g*(e-s[1]))/x;n=n===null?m:Math.min(n,m)}return n}function bi(i,t,e){let n=Math.min(i.x0,i.x1),r=Math.max(i.x0,i.x1),s=Math.min(i.z0,i.z1),o=Math.max(i.z0,i.z1);return i.axis==="x"?[t,i.flip?o-e:e-s]:[e,i.flip?r-t:t-n]}function Jl(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function yr(i,t){let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5)continue;let a=Jl(o);e<a.x0||e>a.x1||n<a.z0||n>a.z1||(!s||r(o)<r(s))&&(s=o)}return s}function gh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=fn(t),n=rn(t).rh,r=vr(i,{u0:0,u1:0,a:0,b:0}),s=rn(i),o=p=>{let[x,g]=e.at(p,e.w/2),[m,b]=bi(i,x,g);return go(r,m,b)??s.y(b)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,f=a?1:-1,h=Math.abs(c-l),u=c;for(let p=.5;p<h;p+=.05)if(o(l+f*p)>=n-.02){u=l+f*p;break}if(Math.abs(u-c)<.05)return t;let d={...t};return t.axis==="x"?c===e.u1?d.x1=u:d.x0=u:c===e.u1?d.z1=u:d.z0=u,d}function Yp(i,t){let e=gh(i,t),n=fn(e),r=rn(e),s=vr(i,{u0:0,u1:0,a:0,b:0}),o=rn(i),a=u=>{let[d,p]=n.at(u,n.w/2),[x,g]=bi(i,d,p);return go(s,x,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,f=[],h=Math.max(1,Math.ceil(c/.15));for(let u=0;u<h;u++){let d=c*u/h,p=c*(u+1)/h,x=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),b=1/0,_=-1/0;for(let v=0;v<=40;v++){let C=n.w*v/40;r.y(C)>m+.02&&(b=Math.min(b,C),_=Math.max(_,C))}if(!(_-b>.05))continue;let y=n.at(x,b),M=n.at(g,_),w=bi(i,y[0],y[1]),R=bi(i,M[0],M[1]);f.push({u0:Math.min(w[0],R[0]),u1:Math.max(w[0],R[0]),v0:Math.min(w[1],R[1]),v1:Math.max(w[1],R[1])})}return f}function ii(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),f=r(l);if(c&&s.push(a),c!==f){let h=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function bh(i,t){let e=ii(i,0,t.u0,!0),n=ii(i,0,t.u1,!1),r=ii(ii(i,0,t.u0,!1),0,t.u1,!0),s=ii(r,1,t.v0,!0),o=ii(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs(Vn(a.map(l=>[l[0],l[1]])))>1e-6)}function tc(i,t,e){let n=fn(t),r=i.floors.flatMap(c=>c.rooms.filter(f=>f.points.length>=3&&c.elevation+c.height>t.base+.05)),s=c=>c.some(f=>r.some(h=>te(f,h.points))),o=.35,a=[.15,.5,.85].map(c=>n.u0+(n.u1-n.u0)*c),l=[.15,.5,.85].map(c=>n.w*c);return{a:s(a.map(c=>n.at(c,-o)))?0:e,b:s(a.map(c=>n.at(c,n.w+o)))?0:e,u0:s(l.map(c=>n.at(n.u0-o,c)))?0:e,u1:s(l.map(c=>n.at(n.u1+o,c)))?0:e}}function qp(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function w1(i){return rn(i).rh}function $p(i,t,e){var l;let n=i.settings.roof.sections??[],r=n.filter(c=>e.includes(c.id)).map(c=>yr(n,c)??c);if(!r.length)return t.id;let s=Math.max(...r.map(c=>w1(c))),o=c=>c.rooms.some(f=>f.points.length>=3&&r.some(h=>{let[u,d]=f.points.reduce((p,x)=>[p[0]+x[0]/f.points.length,p[1]+x[1]/f.points.length],[0,0]);return u>=Math.min(h.x0,h.x1)&&u<=Math.max(h.x0,h.x1)&&d>=Math.min(h.z0,h.z1)&&d<=Math.max(h.z0,h.z1)}));return((l=i.floors.filter(c=>c.elevation>=t.elevation&&c.elevation<s-.3&&o(c)).sort((c,f)=>f.elevation-c.elevation)[0])==null?void 0:l.id)??t.id}function Kl(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),f=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=f>=-1e-9){let h=c/(c-f);s.push([a[0]+(l[0]-a[0])*h,a[1]+(l[1]-a[1])*h,a[2]+(l[2]-a[2])*h])}}return s}function mo(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(o)&&(o=p,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],f=s[2]-t[2],h=(c*l-f*r)/o,u=(n*f-a*c)/o;return[h,u,t[2]-h*t[0]-u*t[1]]}var ds=i=>Math.abs(Vn(i.map(t=>[t[0],t[1]])));function ec(i){let t=Mn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function T1(i,t){let e=mo(i),n=mo(t.poly);if(!e||!n||ds(t.poly)<1e-6)return null;let r=[...ec(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function Zp(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=T1(s,n),a=o?s:[];for(let c of o??[])a=Kl(a,c);if(a.length<3||ds(a)<1e-6){r.push(s);continue}let l=s;for(let[c,f,h]of ec(a)){let u=Kl(l,[-c,-f,-h]);if(u.length>=3&&ds(u)>1e-6&&r.push(u),l=Kl(l,[c,f,h]),l.length<3)break}}e=r}return e}function xh(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=mo(s.poly);if(!o||ds(s.poly)<1e-6)continue;let a=ec(s.poly).map(([d,p,x])=>[d*i[0]+p*i[1]+x,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),f=l(t)-c;a.push([c-.01,f]),Number.isFinite(s.depth)&&a.push([s.depth-c,-f]);let h=0,u=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(u=-1);continue}let x=-d/p;p>0?h=Math.max(h,x):u=Math.min(u,x)}u-h<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,h)],[Math.max(d,u),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function Kp(i,t){let e=mo(i),n=mo(t);if(!e||!n||ds(t)<1e-6)return null;let r=[...i];for(let c of ec(t))r=Kl(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let f=r[c],h=r[(c+1)%r.length],u=s(f),d=s(h);if(u<0!=d<0){let p=u/(u-d);o.push([f[0]+(h[0]-f[0])*p,f[1]+(h[1]-f[1])*p,f[2]+(h[2]-f[2])*p])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function Jp(i,t){let e=fn(i),n=s=>s.map(([o,a,l])=>{let[c,f]=e.at(o,a);return[c,f,l]}),r=[];for(let s of t){let o=ii(ii(ii(ii(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&ds(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of bh(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:dh})}return r}function yh(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...bi(i,n,r),s]),depth:e.depth}))}function jp(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:yr(i,t)!==e&&yr(i,e)!==t}function Qp(i,t){if(t.dormer||t.open||!Ql(t)||yr(i,t))return null;let e=fn(t),n=rn(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=rn(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=Jl(o),[f,h]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[u,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Jl(t),[x,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(x<u-.05||g>d+.05)continue;let m=tm(t,o),b=null;e.u0<f-.05&&e.u1>=f-.05&&e.u1<=m+.05?b=1:e.u1>h+.05&&e.u0<=h+.05&&e.u0>=m-.05&&(b=0),b!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:b})}return s}function tm(i,t){let e=fn(t),n=e.at(e.u0,rn(t).vr);return i.axis==="x"?n[0]:n[1]}function em(i,t){let e=tm(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Jl(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}function vh(i,t){return t.rooms.some(e=>e.points.length>=3)?Wp(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function _h(i,t){var n;if(((n=i.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=vh(i,t);return!!e&&e.some(([r,s])=>ls(r,s)-t.elevation>-.15)}function nm(i,t,e,n,r){return!e||!_h(i,t)?!1:n<Math.min(t.height,ls(r[0],r[1])-t.elevation)-.05}function ps(i,t){let e=Mn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let f=l[c],h=l[(c+1)%l.length],u=a(f),d=a(h);if(u>=0&&n.push(f),u>=0!=d>=0){let p=u/(u-d);n.push([f[0]+(h[0]-f[0])*p,f[1]+(h[1]-f[1])*p])}}}return n}function im(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Gn=1e-4;function Mh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function rm(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Gn&&a<1-Gn&&l>-Gn&&l<1+Gn?a:null}function Sh(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Gn||o>=1-Gn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Gn?o:null}function E1(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(rm(n,r,o,a)!==null||Sh(o,n,r)!==null||Sh(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Gn)return!0}}return te(i[0],t)||te(t[0],i)}function A1(i){let t=i.map(s=>Mh(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],f=[0,1];t.forEach((h,u)=>{if(u!==o)for(let d=0;d<h.length;d++){let p=h[d],x=h[(d+1)%h.length],g=rm(l,c,p,x)??Sh(p,l,c);g!==null&&f.push(g)}}),f.sort((h,u)=>h-u);for(let h=1;h<f.length;h++){if(f[h]-f[h-1]<Gn)continue;let u=[l[0]+(c[0]-l[0])*f[h-1],l[1]+(c[1]-l[1])*f[h-1]],d=[l[0]+(c[0]-l[0])*f[h],l[1]+(c[1]-l[1])*f[h]],p=Math.hypot(d[0]-u[0],d[1]-u[1]),x=[(u[0]+d[0])/2+(d[1]-u[1])/p*.001,(u[1]+d[1])/2-(d[0]-u[0])/p*.001];t.some((g,m)=>m!==o&&te(x,g))||e.some(([g,m])=>Math.hypot(g[0]-u[0],g[1]-u[1])<Gn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Gn)||e.push([u,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([f],h)=>!r.has(h)&&Math.hypot(f[0]-a[0],f[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&Mh(o)>1e-6&&n.push(o)}return n}function sm(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&E1(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:A1(s))}function R1(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function om(i,t,e=.03){return i.every(n=>te(n,t)||t.some((r,s)=>R1(n,r,t[(s+1)%t.length])<=e))}function am(i,t){let e=Mh(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function wh(i){let t=(i.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var lm=i=>i&&i!=="none"?i:null;function C1(i){let t=(i.socket_outlets??[]).slice(0,4).map(e=>({entity:lm(e==null?void 0:e.entity),power:lm(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function nc(i){return i.type==="wall_socket"?C1(i).length:wh(i).length}function cm(i,t,e){let n=nc(i),r=i.rotation*Math.PI/180,s=((t-i.x)*Math.cos(r)+(e-i.z)*Math.sin(r))*(i.mirror?-1:1),o=Math.max(.05,i.w);return Math.max(0,Math.min(n-1,Math.floor((s+o/2)/o*n)))}function Eh(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var ms=(i,t)=>!!i.fix&&i.fix.includes(t);function hm(i,t,e,n){if(i==="h")return e>=n-.01&&t>.01?"hi":"lo";let r=(t+e)/2;return Math.abs(r-n/2)<1e-6?"mid":r<n/2?"lo":"hi"}function Th(i,t,e,n){let r=0,s=0;for(let o of i){if(!ms(o,t))continue;let[a,l]=Eh(o,t,e),c=hm(t,a,l,e);c==="lo"?r=Math.max(r,l):c==="hi"&&(s=Math.max(s,e-a))}return r+s>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0}:{s0:e,s:n,lo:r,hi:s}}function gs(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function um(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!ic(n))return[gs(t,n),gs(e,n)];let r=hm(i,t,e,n.s0),s=e-t;return r==="mid"?[n.s/2-s/2,n.s/2+s/2]:r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function ic(i){return i.lo>0||i.hi>0}function rc(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:Th(i.parts,"w",r,t),d:Th(i.parts,"d",s,e),h:Th(i.parts,"h",o,n)},l={w:!ic(a.w)&&i.parts.some(c=>ms(c,"w")),d:!ic(a.d)&&i.parts.some(c=>ms(c,"d")),h:!ic(a.h)&&i.parts.some(c=>ms(c,"h"))};return i.parts.map(c=>{let f=b=>{let _=a[b],[y,M]=Eh(c,b,_.s0);return ms(c,b)&&!l[b]?um(b,y,M,_):[gs(y,_),gs(M,_)]},[h,u]=f("w"),[d,p]=f("d"),[x,g]=f("h"),m={...c,x:(h+u)/2/t-.5,w:(u-h)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:x/n,h:(g-x)/n};if(c.shape==="loft"){let b=(R,v,C,S,E)=>{let L=a[R],N=v??S,T=C??E,I=(N-T/2+.5)*L.s0,P=(N+T/2+.5)*L.s0;if(!ms(c,R)||l[R])return[gs(I,L),gs(P,L)];let[A,D]=Eh(c,R,L.s0),[B]=um(R,A,D,L),z=B-A;return[I+z,P+z]},[_,y]=b("w",c.tx,c.tw,c.x,c.w),[M,w]=b("d",c.tz,c.td,c.z,c.d);m.tx=(_+y)/2/t-.5,m.tw=(y-_)/t,m.tz=(M+w)/2/e-.5,m.td=(w-M)/e}return m})}var P1=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var I1=["wall","pole","pillar","parcel","bank"];function dm(i){return P1.includes(i.variant??"")?i.variant:"bin240"}function pm(i){return I1.includes(i.variant??"")?i.variant:"wall"}var ke=["#3a3f47","#3a3f47"],_r=["#23262b","#23262b"],Hn=["#5a3b25","#5a3b25"],Le=["#1f4fa8","#1f4fa8"],Xi=["#e3b616","#e3b616"],he=["#2f7d3b","#2f7d3b"],fm={default:{rest:ke,bio:Hn,paper:Le,plastic:Xi,glass:he,garden:he,recycling:Xi,other:ke},DE:{rest:_r,bio:Hn,paper:Le,plastic:Xi,glass:he,garden:he,recycling:Xi},AT:{rest:ke,bio:Hn,paper:[ke[0],"#c0262d"],plastic:Xi,glass:he,garden:he},CH:{rest:["#d8d8d8","#d8d8d8"],bio:he,paper:Le,plastic:ke,glass:he,garden:he},NL:{rest:ke,bio:he,paper:Le,plastic:["#3a3f47","#e57a1f"],glass:he,garden:he},BE:{rest:ke,bio:he,paper:Le,plastic:Le,glass:he,garden:he},GB:{rest:_r,bio:["#3a3f47","#5a3b25"],paper:Le,plastic:Le,glass:_r,garden:Hn,recycling:Le},US:{rest:_r,bio:he,paper:Le,plastic:Le,glass:Le,garden:he,recycling:Le},CA:{rest:_r,bio:he,paper:Le,plastic:Le,glass:Le,garden:he,recycling:Le},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:ke,bio:Hn,paper:[ke[0],"#e3b616"],plastic:[ke[0],"#e3b616"],recycling:[ke[0],"#e3b616"],glass:he,garden:he},IT:{rest:ke,bio:Hn,paper:Le,plastic:Xi,glass:he,garden:he},ES:{rest:ke,bio:Hn,paper:Le,plastic:Xi,glass:he,garden:he},PT:{rest:ke,bio:Hn,paper:Le,plastic:Xi,glass:he,garden:he},DK:{rest:_r,bio:he,paper:Le,plastic:ke,glass:he,garden:he},SE:{rest:_r,bio:Hn,paper:Le,plastic:ke,glass:he,garden:he},NO:{rest:ke,bio:Hn,paper:Le,plastic:ke,glass:he,garden:he},FI:{rest:ke,bio:Hn,paper:Le,plastic:ke,glass:he,garden:he}},mm="DE";function gm(){return mm}function L1(i,t){var e;return((e=fm[t])==null?void 0:e[i])??fm.default[i]??ke}function bm(i,t=mm){let e=L1(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var Yi=Ft(3662079,.95),Ah=Ft(3662079,1),xi=Ft(5995775,.34),xm=Ft(5995775,.22),sc=[-.55,.83],Kt=-1,oc=16,qi=32,ym=48,Rh=64,ee=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Kt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Xt;return t.setAttribute("position",new Bt(this.p,3)),t.setAttribute("color",new Bt(this.c,3)),t.setAttribute("fold",new Bt(this.f,1)),this.uv&&t.setAttribute("uv",new Bt(this.uv,2)),this.tile&&t.setAttribute("tile",new Bt(this.tile,2)),t.computeBoundingSphere(),t}},Fe=class{p=[];c=[];f=[];seg(t,e,n=Yi,r=Kt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Kt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Kt),this.seg(c,a,n,s)}geometry(){let t=new Xt;return t.setAttribute("position",new Bt(this.p,3)),t.setAttribute("color",new Bt(this.c,3)),t.setAttribute("fold",new Bt(this.f,1)),t}};function vm(i,t,e,n){let s=i.uv?2:0,o=(h,u)=>{let d=h*3+u;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(h,u,d)=>({p:h.p.map((p,x)=>p+(u.p[x]-p)*d),c:h.c.map((p,x)=>p+(u.c[x]-p)*d),uv:h.uv&&u.uv?h.uv.map((p,x)=>p+(u.uv[x]-p)*d):null,tile:h.tile}),l=(h,u,d)=>{for(let p=0;p<3;p++){let x=h*3+p;for(let g=0;g<3;g++)i.p[x*3+g]=u[p].p[g],i.c[x*3+g]=u[p].c[g];if(i.uv&&u[p].uv)for(let g=0;g<s;g++)i.uv[x*2+g]=u[p].uv[g];if(i.tile&&u[p].tile)for(let g=0;g<2;g++)i.tile[x*2+g]=u[p].tile[g];i.f[x]=d}},c=(h,u)=>{let d=i.p.length/9;for(let p of h)i.p.push(...p.p),i.c.push(...p.c),i.f.push(u),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},f=i.p.length/9;for(let h=t;h<f;h++){let u=[o(h,0),o(h,1),o(h,2)],d=u.map(v=>v.p[1]>e+1e-6),p=u.map(v=>v.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let v=0;v<3;v++)i.f[h*3+v]=n;continue}let x=i.f[h*3],g=(v,C)=>a(v,C,(e-v.p[1])/(C.p[1]-v.p[1])),m=d.filter(Boolean).length,b=m===1?d.indexOf(!0):d.indexOf(!1),_=u[b],y=u[(b+1)%3],M=u[(b+2)%3],w=g(_,y),R=g(M,_);m===1?(l(h,[_,w,R],n),c([w,y,M],x),c([w,M,R],x)):(l(h,[_,w,R],x),c([w,y,M],n),c([w,M,R],n))}}function _m(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let f=(e-l[1])/(c[1]-l[1]),h=[l[0]+(c[0]-l[0])*f,e,l[2]+(c[2]-l[2])*f];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=h[d];let u=i.c.slice(s*6,s*6+3);i.p.push(...h,...c),i.c.push(...u,...u),i.f.push(n,n)}}var le=Math.PI/180;function Ft(i,t){let e=new K(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function F1(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function Rn(i,t=[]){let e=i.map(([n,r])=>new ae(n,r));return Hs.triangulateShape(e,t.map(n=>n.map(([r,s])=>new ae(r,s))))}function Mm(i,t,e,n,r,s,o){let a=new K(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],x=t[(d+1)%4],g=e[d],m=e[(d+1)%4],b=x[0]-p[0],_=x[1]-p[1],y=Math.hypot(b,_);if(y<1e-6)continue;let w=.8+.28*((_/y*sc[0]-b/y*sc[1]+1)/2),R=(g[0]+m[0]-p[0]-x[0])/2*(-_/y)+(g[1]+m[1]-p[1]-x[1])/2*(b/y),v=Math.max(0,Math.min(1,R/Math.max(1e-6,Math.hypot(R,r-n)))),C=Ft(s,l(n)*w).lerp(a,v),S=Ft(s,l(r)*w).lerp(a,v);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],C,S,S),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[x[0],n,x[1]],C,S,C)}let[c,f,h,u]=e;Math.hypot(h[0]-c[0],h[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[h[0],r,h[1]],[f[0],r,f[1]],a),i.tri([c[0],r,c[1]],[u[0],r,u[1]],[h[0],r,h[1]],a))}function Sm(i,t,e,n,r,s,o,a,l,c){let f=new K(l),h=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;h.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let u=(g,m)=>{let b=t(g,h[m%c].s);return[b[0],h[m%c].y,b[1]]},d=t(e,r),p=t(n,r),x=(g,m,b,_,y)=>{let M=(m[1]-g[1])*(b[2]-g[2])-(m[2]-g[2])*(b[1]-g[1]),w=(m[2]-g[2])*(b[0]-g[0])-(m[0]-g[0])*(b[2]-g[2]),R=(m[0]-g[0])*(b[1]-g[1])-(m[1]-g[1])*(b[0]-g[0]);M*_[0]+w*_[1]+R*_[2]<0?i.tri(g,b,m,y):i.tri(g,m,b,y)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,b=Ft(a,.62+.4*Math.max(0,Math.cos(m))),_=t((e+n)/2,r+Math.sin(m)*o),y=t((e+n)/2,r),M=[_[0]-y[0],Math.cos(m)*o,_[1]-y[1]];x(u(e,g),u(n,g+1),u(n,g),M,b),x(u(e,g),u(e,g+1),u(n,g+1),M,b)}for(let[g,m,b]of[[e,p,d],[n,d,p]]){let _=t(g,r),y=[_[0],s,_[1]],M=[b[0]-m[0],0,b[1]-m[1]];for(let w=0;w<c;w++)x(y,u(g,w),u(g,w+1),M,f)}}function Pe(i,t,e,n,r,s,o={}){var p;let a=typeof n=="number"?()=>n:x=>Math.max(e+.002,n(x[0],x[1])),l=o.aoFrom??e,c=o.fold??Kt,f=x=>.5+.5*Math.min(1,Math.max(0,(x-l)/1.6)),h=(o.holes??[]).map(x=>F1(x)>0?[...x].reverse():x),u=h.length?[...t,...h.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:Rn(t,h);if(o.topFace!==!1){let x=new K(s);for(let[g,m,b]of d){let _=u[g],y=u[m],M=u[b];i.tri([_[0],a(_),_[1]],[M[0],a(M),M[1]],[y[0],a(y),y[1]],x,x,x,void 0,o.topFold??c)}}if(o.bottom){let x=Ft(r,.55);for(let[g,m,b]of d){let _=u[g],y=u[m],M=u[b];i.tri([_[0],e,_[1]],[y[0],e,y[1]],[M[0],e,M[1]],x,x,x,void 0,c)}}for(let x of[t,...h])for(let g=0;g<x.length;g++){let m=x[g],b=x[(g+1)%x.length],_=b[0]-m[0],y=b[1]-m[1],M=Math.hypot(_,y);if(M<1e-6||(p=o.skipSide)!=null&&p.call(o,m,b))continue;let R=.8+.28*((y/M*sc[0]-_/M*sc[1]+1)/2),v=a(m),C=a(b),S=Ft(r,f(e)*R),E=Ft(r,f(v)*R),L=Ft(r,f(C)*R);i.tri([m[0],e,m[1]],[m[0],v,m[1]],[b[0],C,b[1]],S,E,L,void 0,c),i.tri([m[0],e,m[1]],[b[0],C,b[1]],[b[0],e,b[1]],S,L,S,void 0,c)}}var O={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},pt=Ft(5995775,.3),Dt=Ft(5995775,.17),Jt=Ft(3662079,.45),Zi=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=Cm(n)}rotated(t,e,n){let r=n*le,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let f=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Pe(this.buf,Ch(f),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(f,n,r,c)}wedge(t,e,n,r,s,o,a,l,c=l,f=l){if(e-t<1e-4||r-n<1e-4||a-Math.min(s,o)<1e-4)return;let h=(g,m,b)=>{let _=this.tf(g,m);return[_[0],b,_[1]]},u=g=>g===n?s:o,d=h((t+e)/2,(n+r)/2,(a+(s+o)/2)/2),p=(g,m)=>{let b=[0,1,2].map(S=>g.reduce((E,L)=>E+L[S],0)/g.length),_=[b[0]-d[0],b[1]-d[1],b[2]-d[2]],[y,M,w]=[g[0],g[1],g[2]],R=[(M[1]-y[1])*(w[2]-y[2])-(M[2]-y[2])*(w[1]-y[1]),(M[2]-y[2])*(w[0]-y[0])-(M[0]-y[0])*(w[2]-y[2]),(M[0]-y[0])*(w[1]-y[1])-(M[1]-y[1])*(w[0]-y[0])],C=R[0]*_[0]+R[1]*_[1]+R[2]*_[2]<0?[...g].reverse():g;this.buf.tri(C[0],C[1],C[2],m),this.buf.tri(C[0],C[2],C[3],m)},x=Ft(l,1);p([h(t,n,a),h(e,n,a),h(e,r,a),h(t,r,a)],Ft(c,1)),p([h(t,n,u(n)),h(t,r,u(r)),h(e,r,u(r)),h(e,n,u(n))],Ft(f,.72)),p([h(t,r,u(r)),h(t,r,a),h(e,r,a),h(e,r,u(r))],x),p([h(t,n,u(n)),h(e,n,u(n)),h(e,n,a),h(t,n,a)],x),p([h(t,n,u(n)),h(t,n,a),h(t,r,a),h(t,r,u(r))],Ft(l,.86)),p([h(e,n,u(n)),h(e,r,u(r)),h(e,r,a),h(e,n,a)],Ft(l,.86))}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==Ch(l)&&(l.reverse(),c.reverse()),Mm(this.buf,l,c,n,r,s,o),a)for(let f=0;f<4;f++)this.line(c[f],c[(f+1)%4],r,r,a),this.line(l[f],c[f],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,f=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,f);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,f),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,f=12,h=null){let u=Math.min(a,s-r)/2;if(u<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,x=t==="x"?n:e,g=(m,b)=>t==="x"?this.tf(m,b):this.tf(b,m);if(Sm(this.buf,g,p-o/2,p+o/2,x,d,u,l,c,f),h)for(let m of[p-o/2,p+o/2])for(let b=0;b<f;b++){let _=b/f*Math.PI*2,y=(b+1)/f*Math.PI*2;this.line(g(m,x+Math.sin(_)*u),g(m,x+Math.sin(y)*u),d+Math.cos(_)*u,d+Math.cos(y)*u,h)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let f=[];for(let h=0;h<l;h++){let u=h/l*Math.PI*2;f.push(this.tf(t+Math.cos(u)*n,e+Math.sin(u)*n))}if(Pe(this.buf,Ch(f),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let h=0;h<l;h++)this.line(f[h],f[(h+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=pt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Kt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function Cm(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function Ch(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Mr(i,t,e,n,r,s,o=O.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let f of[-1,1])for(let h of[-1,1]){let u=f*l,d=h*c;a?i.loft([u-r*.3,u+r*.3,d-r*.3,d+r*.3],[u-r/2,u+r/2,d-r/2,d+r/2],0,n,o):i.box(u-r/2,u+r/2,0,n,d-r/2,d+r/2,o)}}function xo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let f=1;f<o;f++){let h=t+c*f;i.seg(h,n,s,h,r,s,Dt)}for(let f=0;f<o;f++){let h=t+c*(f+.5),u=a??r-.08;if(l)i.seg(h-Math.min(.1,c/4),u,s+.012,h+Math.min(.1,c/4),u,s+.012,Jt);else{let d=o>1?h+(f%2?-c/2+.06:c/2-.06):h+c/2-.06;i.seg(d,u-.08,s+.012,d,u+.08,s+.012,Jt)}}}function wm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),f=n*.5,h=Math.min(.24,e*.28);Mr(i,t,e,.07,.05,.05,O.wood,!0),i.pad(s,o,.07,f-.08,a+.02,l,O.fabric,O.fabricTop,.04,pt),i.loft([s,o,a,a+h],[s+.01,o-.01,a,a+h*.5],f-.08,n,O.fabric,O.fabricTop,pt),i.pad(s,s+c,f-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,pt),i.pad(o-c,o,f-.08,n*.72,a+.02,l-.02,O.fabric,O.fabricTop,.04,pt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let x=s+c+d*p+.02,g=x+d-.04;i.pad(x,g,f-.08,f+.05,a+h+.02,l-.06,O.cushion,O.cushion,.04),i.loft([x+.01,g-.01,a+h*.55,a+h+.14],[x+.03,g-.03,a+h*.4,a+h*.4+.06],f+.03,n*.93,O.cushion)}}function Tm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),f=Math.min(.24,c*.28),h=Math.min(.2,c*.24),u=n*.5,d=n*.72,p=r?[-1,1]:[-1],x=(v,C)=>i.loft([v-.015,v+.015,C-.015,C+.015],[v-.025,v+.025,C-.025,C+.025],0,.07,O.wood);x(s+.06,a+.06),x(o-.06,a+.06),r||x(o-.06,a+c-.06);for(let v of p)x(v*(t/2-.06),l-.06),x(v*(t/2-c+.06),l-.06);i.pad(s,o,.07,u-.08,a+.02,a+c,O.fabric,O.fabricTop,.04,pt);for(let v of p){let[C,S]=v<0?[s+.02,s+c]:[o-c,o-.02];i.pad(C,S,.07,u-.08,a+c-.02,l,O.fabric,O.fabricTop,.04,pt)}i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],u-.08,n,O.fabric,O.fabricTop,pt);for(let v of p)v<0?i.loft([s,s+f,a+f,l],[s,s+f*.5,a+f,l-.01],u-.08,n,O.fabric,O.fabricTop,pt):i.loft([o-f,o,a+f,l],[o-f*.5,o,a+f,l-.01],u-.08,n,O.fabric,O.fabricTop,pt);for(let v of p){let[C,S]=v<0?[s+f,s+c]:[o-c,o-f];i.pad(C,S,u-.08,d,l-h,l,O.fabric,O.fabricTop,.04,pt)}r||i.pad(o-h,o,u-.08,d,a+.02,a+c-.02,O.fabric,O.fabricTop,.04,pt);let g=s+f,m=r?o-f:o-h,b=Math.max(1,Math.round((m-g)/.62)),_=(m-g)/b;for(let v=0;v<b;v++){let C=g+_*v+.02,S=C+_-.04;i.pad(C,S,u-.08,u+.05,a+f+.02,a+c-.04,O.cushion,O.cushion,.04),i.loft([C+.01,S-.01,a+f*.55,a+f+.14],[C+.03,S-.03,a+f*.4,a+f*.4+.06],u+.03,n*.93,O.cushion)}let y=a+c,M=l-h;if(M-y<.2)return;let w=Math.max(1,Math.round((M-y)/.62)),R=(M-y)/w;for(let v of p)for(let C=0;C<w;C++){let S=y+R*C+.02,E=S+R-.04;v<0?(i.pad(s+f+.02,s+c-.04,u-.08,u+.05,S,E,O.cushion,O.cushion,.04),i.loft([s+f*.55,s+f+.14,S+.01,E-.01],[s+f*.4,s+f*.4+.06,S+.03,E-.03],u+.03,n*.93,O.cushion)):(i.pad(o-c+.04,o-f-.02,u-.08,u+.05,S,E,O.cushion,O.cushion,.04),i.loft([o-f-.14,o-f*.55,S+.01,E-.01],[o-f*.4-.06,o-f*.4,S+.03,E-.03],u+.03,n*.93,O.cushion))}}function D1(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Mr(i,t,e,.08,.06,.03,O.wood,!0),i.box(o,a,.08,l,r+.06,s,O.wood,O.woodTop,pt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,O.white,O.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,O.wood,O.woodTop,pt),i.box(o,a,n-.05,n,r,r+.09,O.wood,O.woodTop,Dt);let c=l+.2,f=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,f,s-.01,O.cushion,O.fabricTop,.025,Dt),i.lyingCyl("x",0,f+.05,c-.02,c+.09,t-.02,.1,O.cushion,O.fabricTop,8);let h=t>1.2?2:1,u=(t-.2)/h;for(let d=0;d<h;d++){let p=o+.1+u*d,x=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+u-.03-m,x+m*.5,x+g-m*.5],[p+.03,p+u-.03,x,x+g],c,c+.06,O.whiteTop),i.loft([p+.03,p+u-.03,x,x+g],[p+.03+m,p+u-.03-m,x+m*.5,x+g-m*.5],c+.06,c+.12,O.whiteTop,O.whiteTop,Dt)}}function N1(i,t,e,n){let r=Math.min(.46,n*.52);Mr(i,t,e,r-.04,.035,.02,O.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,O.wood,O.woodTop,pt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,O.cushion,O.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,O.wood,O.woodTop,pt)}function O1(i,t,e,n){Mr(i,t,e,n-.04,.06,.05,O.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,Jt),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,O.body)}function U1(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,O.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,O.body,O.bodyTop,pt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Dt);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,Jt);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,O.dark,O.dark,Jt),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,O.metal)}function $i(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),xo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function B1(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,O.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,O.wood,O.woodTop,Dt),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let f=.03+c*7%5*.008,h=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+f,a+.025,a+.025+h,-e/2+.04,e/2-.05,c%3?O.fabric:O.cushion,O.fabricTop),l+=f+.006,c++}}}}function k1(i,t,e,n){let r=Math.max(1,Math.round(t/.6));$i(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt)}function z1(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.white,O.whiteTop,pt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Dt);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,Jt),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,Jt)}var ac=(i,t)=>Ft(parseInt(i.slice(1),16),t).getHex(),bo=!1;function Pm(i){bo=i}function Im(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function V1(i,t,e,n,r,s){let o=u=>{let d=Math.max(...new K(u).toArray());return ac(u,d>.05?Math.max(1,.62/d):1)},a=bo?o(s[0]):ac(s[0],.55),l=bo?o(s[1]):ac(s[1],.8),c=ac(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Dt),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,pt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Dt),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let u=Math.min(t,e)*.32;i.cyl(0,0,u,0,n*.9,a,a,16,pt),i.cyl(0,0,u*1.08,n*.9,n,l,c,16,Dt),i.box(-u*.5,u*.5,n*.62,n*.8,u*.7,u*1.02,O.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,O.metal,O.metal,Dt);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,O.dark,O.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,pt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Dt),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Dt);return}let f=Math.min(.2,n*.19),h=-e/2;for(let u of[-1,1])i.lyingCyl("x",u*(t/2-.05),h+f/2+.01,0,f,.05,f,O.dark,O.metal,12);i.loft([-t*.42,t*.42,h+.07,e/2-.05],[-t/2+.01,t/2-.01,h+.05,e/2-.01],.03,n-.05,a,a,pt),i.box(-t/2,t/2,n-.05,n,h+.03,e/2,l,c,Dt),i.box(-t*.42,t*.42,n-.1,n-.02,h,h+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(h+e/2)/2,t/2,n+.002,(h+e/2)/2,Jt),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Dt))}function G1(i,t,e,n,r){let s=O.metal,o=Ft(O.metal,1.25).getHex(),a=Ft(O.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,O.wood,O.woodTop,Dt),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,pt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,pt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,O.dark,O.dark,Dt),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Dt),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,pt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,O.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,pt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Dt),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,O.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,pt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let f=-t/2+t/3*l+.015,h=n/2*c+.015;i.box(f,f+t/3-.03,h,h+n/2-.03,e/2,e/2+.01,a,o,Dt),i.box(f+.04,f+t/3-.07,h+n/2-.09,h+n/2-.07,e/2+.01,e/2+.014,O.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,pt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,pt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,O.dark)}function H1(i,t,e,n){let r=e/2-Lm;i.box(-t/2,t/2,.02,n,-e/2,r,O.body,O.bodyTop,pt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,O.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Dt),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Dt))}var Lm=.06;function Fm(i,t,e,n){let r=t.rotation*le,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(T,I,P)=>[t.x+T*s-P*o,I,t.z+T*o+P*s],c=(T,I,P,A,D)=>{i.tri(T,I,P,D),i.tri(T,P,A,D),i.tri(T,P,I,D),i.tri(T,A,P,D)},f=(T,I,P,A)=>{let D=l(T[0],T[1],T[2]),B=l(I[0],I[1],I[2]),z=B[0]-D[0],k=B[1]-D[1],W=B[2]-D[2],G=Math.hypot(z,k,W)||1,Q=[z/G,k/G,W/G],j=Math.abs(Q[1])>.9?[1,0,0]:[0,1,0],tt=[Q[1]*j[2]-Q[2]*j[1],Q[2]*j[0]-Q[0]*j[2],Q[0]*j[1]-Q[1]*j[0]],H=Math.hypot(tt[0],tt[1],tt[2])||1,$=[tt[0]/H*P,tt[1]/H*P,tt[2]/H*P],st=[Q[1]*$[2]-Q[2]*$[1],Q[2]*$[0]-Q[0]*$[2],Q[0]*$[1]-Q[1]*$[0]],ct=[[1,1],[-1,1],[-1,-1],[1,-1]],it=(ut,mt)=>[ut[0]+$[0]*ct[mt][0]+st[0]*ct[mt][1],ut[1]+$[1]*ct[mt][0]+st[1]*ct[mt][1],ut[2]+$[2]*ct[mt][0]+st[2]*ct[mt][1]];for(let ut=0;ut<4;ut++){let mt=(ut+1)%4;i.tri(it(D,ut),it(B,ut),it(B,mt),A),i.tri(it(D,ut),it(B,mt),it(D,mt),A)}},h=(T,I,P,A,D,B,z,k)=>{c(l(T,A,D),l(I,A,D),l(I,A,B),l(T,A,B),k),c(l(T,P,B),l(I,P,B),l(I,A,B),l(T,A,B),z),c(l(T,P,D),l(I,P,D),l(I,P,B),l(T,P,B),z),c(l(T,P,D),l(T,P,B),l(T,A,B),l(T,A,D),z),c(l(I,P,D),l(I,P,B),l(I,A,B),l(I,A,D),z)},u=new K(O.body),d=new K(O.bodyTop),p=new K(O.accent),x=new K(1929098),g=new K(995141),m=(T,I,P,A,D)=>{let B=(z,k,W)=>[z[0]+(k[0]-z[0])*W,z[1]+(k[1]-z[1])*W,z[2]+(k[2]-z[2])*W];for(let z=0;z<D;z++){let k=B(T,I,z/D),W=B(T,I,(z+1)/D),G=B(P,A,(z+1)/D),Q=B(P,A,z/D);c(l(k[0],k[1],k[2]),l(W[0],W[1],W[2]),l(G[0],G[1],G[2]),l(Q[0],Q[1],Q[2]),z%2?x:g)}},b=t.w/2,_=-t.d/2,y=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,R=(T,I)=>{t.awning_valance!==!1&&m([-b+.04,T,I+.01],[b-.04,T,I+.01],[-b+.04,T-.2,I+.01],[b-.04,T-.2,I+.01],M)},v=t.variant??"arm";if(v==="side"){let T=e,I=.05,P=0,A=-b+.08+a*(t.w-.16);h(-b,-b+.1,0,T+.05,P-.05,P+.05,u,d),h(b-.06,b,0,T+.05,P-.03,P+.03,u,d),a>.01&&m([-b+.1,T,P],[-b+.1,I,P],[A,T,P],[A,I,P],Math.max(4,Math.round((T-I)/.3))),f([A,I,P],[A,T,P],.02,p);return}if(v==="vertical"){let T=_,I=Math.min(t.d/2,_+y);h(-b,b,e,e+y,T,I,u,d);let P=(T+I)/2;for(let D of[-b+.02,b-.02])f([D,.02,P],[D,e,P],.02,p);let A=e-a*Math.max(0,e-.04);a>.01&&m([-b+.04,e,P],[b-.04,e,P],[-b+.04,A,P],[b-.04,A,P],M),f([-b+.03,A,P],[b-.03,A,P],.025,p);return}if(v==="pergola"){let T=t.d/2-.05,I=e+y,P=I-(T-_)*Math.tan(w);h(-b,b,e,I,_,_+y,u,d);for(let B of[-b+.05,b-.05])f([B,I,_+y],[B,P,T],.035,p),f([B,0,T],[B,P,T],.045,u);f([-b+.05,P,T],[b-.05,P,T],.035,p);let A=_+y+a*(T-_-y),D=I-(A-_)*Math.tan(w)+.04;a>.01&&m([-b+.08,I+.04,_+y],[b-.08,I+.04,_+y],[-b+.08,D,A],[b-.08,D,A],M),f([-b+.08,D,A],[b-.08,D,A],.025,p);return}let C=_,S=_+y;h(-b,b,e,e+y,C,S,u,d);let E=[S-.02,e+y*.35];if(v==="drop"){let T=Math.max(.3,t.d-y),I=[S,E[1]-T],P=a*(Math.PI/2+w),A=[I[0]+Math.sin(P)*T,I[1]+Math.cos(P)*T];for(let D of[-b+.08,b-.08])f([D,I[1],I[0]],[D,A[1],A[0]],.018,p);a>.01&&m([-b+.04,E[1],E[0]],[b-.04,E[1],E[0]],[-b+.04,A[1],A[0]],[b-.04,A[1],A[0]],M),f([-b+.02,A[1],A[0]],[b-.02,A[1],A[0]],.03,p),a>.05&&R(A[1],A[0]);return}let L=Math.max(0,t.d-y)*a,N=[E[0]+L,E[1]-L*Math.tan(w)];if(L>.01){m([-b+.04,E[1],E[0]],[b-.04,E[1],E[0]],[-b+.04,N[1],N[0]],[b-.04,N[1],N[0]],M);let T=Math.max(.3,(t.d-y)/2+.05);for(let I of[-1,1]){let P=I*(b-.12),A=[P,e+.02,S-.04],D=[P,N[1]-.02,N[0]],B=Math.hypot(D[2]-A[2],D[1]-A[1]),z=Math.sqrt(Math.max(0,T*T-(B/2)**2)),k=[P-I*Math.min(z,b-.15),(A[1]+D[1])/2,(A[2]+D[2])/2];f(A,k,.018,p),f(k,D,.018,p)}}f([-b+.02,N[1],N[0]],[b-.02,N[1],N[0]],.03,p),L>.05&&R(N[1],N[0])}function Dm(i,t,e,n,r){let s=i.p.length;W1(i,t,e,n,r),t.mirror&&Bm(i,s)}function W1(i,t,e,n,r){let s=t.rotation*le,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(y,M)=>[t.x+l*y*o-M*a,t.z+l*y*a+M*o],f=e+.05,h=e+t.h-.02,u=new K(.75,.1,.14),d=new K(O.dark),p=new K(O.accent),x=t.w/2-.006,g=(y,M,w)=>{let R=w/m,v=new K(2043212).lerp(u,R),C=new K(O.body).lerp(u,R*.8),S=Math.cos(w),E=Math.sin(w),L=(I,P)=>c(y+M*(I*S-P*E),t.d/2+I*E+P*S),N=(I,P,A,D)=>{let[B,z,k,W]=I;i.tri([B[0],P,B[1]],[z[0],P,z[1]],[k[0],A,k[1]],D),i.tri([B[0],P,B[1]],[k[0],A,k[1]],[W[0],A,W[1]],D)},T=(I,P,A,D,B,z,k,W=k)=>{let G=[L(I,z),L(P,z),L(P,B),L(I,B)];N([G[0],G[1],G[1],G[0]],A,D,W),N([G[3],G[2],G[2],G[3]],A,D,k),N([G[0],G[3],G[3],G[0]],A,D,k),N([G[1],G[2],G[2],G[1]],A,D,k),N([G[0],G[1],G[2],G[3]],D,D,k),N([G[3],G[2],G[1],G[0]],A,A,k)};return T(0,x,f,h,-Lm,0,C,v),T(x-.05,x-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),T},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,x-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function X1(i,t,e,n){$i(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.dark,O.dark,pt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,O.dark,1451583,12,Jt)}}function Y1(i,t,e,n){$i(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,O.whiteTop,O.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,O.metal,O.metal,Jt),i.cyl(0,-e/2+.05,.02,n,n+.28,O.metal,O.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,O.metal)}function q1(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,O.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,O.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,O.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,O.glass,O.glass,Jt),i.cyl(-t/2+.04,0,.02,n,n+.12,O.metal,O.metal,8)}function $1(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,O.whiteTop,O.whiteTop,pt),i.cyl(0,0,.04,.05,.052,O.metal,O.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,Jt),i.seg(r,n,s,o,n,a,Jt),i.seg(o,.05,a,o,n,a,Jt);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,O.metal,O.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,O.metal,O.metal,12,Jt)}function Z1(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,O.white,O.whiteTop,pt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,O.white,O.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,O.white,O.whiteTop,12,pt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,O.whiteTop)}function K1(i,t,e,n){$i(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,O.glass,O.glass,Jt),i.cyl(0,-e/2+.06,.018,n,n+.2,O.metal,O.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,O.glass,O.glass,Jt)}function J1(i,t,e,n){$i(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,O.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,O.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,O.dark,O.dark,Jt)}function j1(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,O.pot,O.pot,10,pt),i.cyl(0,0,r*.08,s,n*.55,O.wood,O.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),f=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,f,f+(n-s)*.16,O.plant,O.plantTop,8,a===o-1?Dt:null)}}function Q1(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,O.fabric,O.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,pt)}var tM=.18;function eM(i,t,e,n,r=!1){let s=Math.max(3,Math.round(n/.18)),o=n/s,a=e/s,l=u=>Math.max(0,o*((e/2-u)/a-1)-tM);for(let u=0;u<s;u++){let d=e/2-a*u,p=d-a,x=o*(u+1);r?i.wedge(-t/2,t/2,p,d,l(p),l(d),x,O.wood,O.woodTop,O.body):i.box(-t/2,t/2,0,x,p,d,O.wood,O.woodTop),i.seg(-t/2,x,d,t/2,x,d,pt)}if(r)for(let u of[-t/2,t/2])i.seg(u,l(e/2-a),e/2-a,u,l(-e/2),-e/2,Dt);i.seg(-t/2,0,e/2,-t/2,o,e/2,pt);for(let u of[-t/2,t/2])i.seg(u,o,e/2,u,n,-e/2+a,Dt);let c=.9,f=t/2-.03,h=Math.max(1,s-4);i.seg(f,o+c,e/2-a/2,f,o*h+c,e/2-a*(h-.5),Jt);for(let u=0;u<h;u+=3){let d=e/2-a*(u+.5),p=o*(u+1);i.seg(f,p,d,f,p+c,d,Dt)}}function nM(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:f}=Pp(t,e,n),h=-t/2,u=-t/2+a,d=t/2-a,p=t/2,x=-e/2+l;for(let R=0;R<s;R++){let v=e/2-c*R,C=f*(R+1);i.box(h,u,0,C,v-c,v,O.wood,O.woodTop),i.seg(h,C,v,u,C,v,pt)}i.seg(h,0,e/2,h,f,e/2,pt);let g=f*r,m=.2;i.box(h,u,0,g,-e/2,x,O.wood,O.woodTop),i.box(u,p,Math.max(0,g-m),g,-e/2,x,O.wood,O.woodTop),i.seg(h,g,x,u,g,x,pt);for(let R=0;R<o;R++){let v=x+c*R,C=f*(r+1+R);i.box(d,p,Math.max(0,C-f-m),C,v,v+c,O.wood,O.woodTop),i.seg(d,C,v,p,C,v,pt)}i.seg(h,f,e/2,h,g,x,Dt),i.seg(p,g,x,p,n,x+c*(o-1),Dt);let b=.9,_=u-.03,y=d+.03,M=x-.03,w=Math.max(1,o-4);i.seg(_,f+b,e/2-c/2,_,g+b,M,Jt),i.seg(_,g+b,M,y,g+b,M,Jt),i.seg(y,g+b,M,y,f*(r+w)+b,x+c*(w-.5),Jt);for(let R=0;R<s;R+=3){let v=e/2-c*(R+.5);i.seg(_,f*(R+1),v,_,f*(R+1)+b,v,Dt)}for(let R of[_,y])i.seg(R,g,M,R,g+b,M,Dt);for(let R=2;R<w;R+=3){let v=x+c*(R+.5);i.seg(y,f*(r+1+R),v,y,f*(r+1+R)+b,v,Dt)}}function iM(i,t,e,n){Mr(i,t,e,.12,.03,.04,O.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,O.wood,O.woodTop,pt),xo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function rM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,O.wood,O.woodTop,pt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,O.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Dt)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,Jt)}}function sM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,O.wood,O.woodTop,pt),xo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,O.body,O.bodyTop,pt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.wood,O.woodTop,pt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,O.metal,O.metal)}}function Em(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,O.wood,O.woodTop,pt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,O.wood,O.woodTop,pt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,O.cushion,O.cushion,Dt),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,O.wood,O.woodTop,pt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,O.wood,O.woodTop,pt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,O.cushion,O.cushion,Dt))}function oM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,O.metal,O.metal,12),i.cyl(0,0,.025,.02,n-.05,O.metal,O.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,O.metal,O.metal,12,Dt),i.cyl(0,0,r,n-.05,n,O.cushion,O.fabricTop,14,pt)}function aM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,O.metal),i.box(-.03,.03,.04,.08,-r,r,O.metal),i.cyl(0,0,.06,.02,.1,O.dark,O.dark,8),i.cyl(0,0,.025,.1,.44,O.metal,O.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,O.fabric,O.cushion,pt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,O.fabric,O.fabricTop,pt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,O.metal)}function lM(i,t,e,n){Mr(i,t,e,.08,.04,.05,O.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,O.fabric,O.cushion,pt)}function cM(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,O.body,O.bodyTop,pt),xo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function uM(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,O.body,O.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,O.dark,O.dark,Jt),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,Jt);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Dt);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,Jt),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,Jt)}function hM(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,O.body,O.bodyTop,pt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,O.dark),xo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt)}function fM(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,O.body,O.bodyTop,pt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,O.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,Jt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,O.whiteTop,O.whiteTop,pt)}function Am(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,O.white,O.whiteTop,pt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Dt),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,Jt);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let f=c/l*Math.PI*2,h=(c+1)/l*Math.PI*2;i.seg(Math.cos(f)*a,o+Math.sin(f)*a,s,Math.cos(h)*a,o+Math.sin(h)*a,s,Jt),r||i.seg(Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,s,Math.cos(h)*a*.72,o+Math.sin(h)*a*.72,s,Dt)}}function dM(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),O.wood,O.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,O.wood,O.woodTop,pt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,O.white,O.whiteTop,Dt),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,O.whiteTop,O.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,O.wood,O.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,pt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Dt)}function pM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,O.metal,O.metal,12),i.cyl(0,0,.05,.03,n-.04,O.wood,O.wood,8),i.cyl(0,0,r,n-.04,n,O.wood,O.woodTop,20,pt)}function mM(i,t,e,n){Mr(i,t,e,n-.03,.04,.03,O.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,O.wood,O.woodTop,pt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,O.body,O.bodyTop,Dt)}function gM(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,O.dark,O.dark,Jt)}function bM(i,t,e,n){let r=Ih;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,O.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,O.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,O.white,O.whiteTop,pt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Dt)}}function xM(i,t,e,n){let r=Lh;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,O.white,O.white,pt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,O.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Dt),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,Jt)}function bs(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,Jt)}}function yM(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.dark,O.body,pt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,Jt),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,O.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,pt),bs(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,Jt);for(let a of[-1,1])bs(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,O.white,O.whiteTop,pt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,O.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,Jt);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Dt)}function vM(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,O.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,O.metal,O.metal,pt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Dt);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,O.dark,O.body,14,pt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,O.glass,O.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,Jt)}}function _M(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,O.dark,O.dark,16),i.cyl(0,0,s,n*.08,n*.78,O.dark,O.body,18,pt),i.cyl(0,0,s*.75,n*.78,n*.84,O.dark,O.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,O.dark,O.metal,pt),bs(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,O.dark,O.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,O.dark,O.metal,16,pt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,Jt)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,O.dark,O.body)}function MM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,O.white,O.whiteTop,pt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,O.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;bs(i,s,o,r,e/2+.004,24),bs(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Dt),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Dt),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,O.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,Jt);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Dt)}function SM(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,O.white,O.whiteTop,pt);for(let s of[-1,1])bs(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,Jt);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,O.white,O.glass,Dt)}function wM(i,t,e,n){let r=Ap-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,O.metal,O.metal,pt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,O.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,O.accent,O.accent)}function TM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,O.dark,O.body,pt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,O.dark,O.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,Jt),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Dt)}function EM(i,t,e,n,r){let s=$l,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,O.white,O.whiteTop,pt);let l=t/r;for(let c=0;c<r;c++){let f=-t/2+c*l;i.box(f+.008,f+l-.008,s+.012,s+n-.012,a,a+.006,O.whiteTop,O.whiteTop,Dt)}}function AM(i,t,e,n,r){let s=Zl,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,O.white,O.whiteTop,pt);let l=t/r,c=s+n/2,f=Math.min(l,n)*.3;for(let h=0;h<r;h++){let u=-t/2+(h+.5)*l;h>0&&i.seg(u-l/2,s+.006,a+.001,u-l/2,s+n-.006,a+.001,Dt),i.lyingCyl("z",u,a+.004,c-f,c+f,.008,f*2,O.whiteTop,O.whiteTop,16,Dt),i.lyingCyl("z",u,a+.006,c-f*.78,c+f*.78,.008,f*1.56,O.white,O.white,16);for(let d of[-f*.38,f*.38])i.lyingCyl("z",u+d,a+.0065,c-.0025,c+.0025,.008,.005,O.dark,O.dark,6)}}function Nm(i){let t=Math.max(.05,i.w),e=Math.max(.05,i.d),n=Math.max(.005,i.h),r=nc(i),s=t/r;return i.type==="wall_socket"?Array.from({length:r},(o,a)=>({x:-t/2+(a+1)*s-.012,y:Zl+n-.012,z:-e/2+.011,r:.0025})):Array.from({length:r},(o,a)=>({x:-t/2+(a+.5)*s,y:$l+n*.2,z:-e/2+.017,r:.005}))}function Om(i,t,e){let n=Math.min(.2,e*.19),r=Math.min(.075,n*.55,i*.2),s=uo+n*.3;return{band:n,display:{x0:-r*.75,x1:r*.25,y0:s,y1:s+r,z:t/2+.004}}}function RM(i,t,e,n){let r=uo,s=r+n,{band:o,display:a}=Om(t,e,n),l=Math.min(.07,t*.14,o*.8),c=-t/2,f=t/2,h=-e/2,u=e/2,d=3,p=m=>l-Math.sqrt(Math.max(0,l*l-(l-m)*(l-m))),x=O.metal;for(let m=0;m<d;m++){let b=l*m/d,_=l*(m+1)/d,y=p(b),M=p(_);i.loft([c+y,f-y,h,u],[c+M,f-M,h,u],r+b,r+_,x),i.loft([c+M,f-M,h,u],[c+y,f-y,h,u],s-_,s-b,O.white,O.whiteTop)}i.box(c,f,r+l,r+o,h,u,x,x),i.box(c,f,r+o,s-l,h,u,O.white,O.whiteTop,pt),i.seg(c,r+o,u+.001,f,r+o,u+.001,Dt),i.box(a.x0,a.x1,a.y0,a.y1,u,u+.003,O.dark,O.dark,Dt);let g=(a.y1-a.y0)*.3;for(let[m,b]of[[0,0],[1,0],[0,1],[1,1]]){let _=a.x1+.012+m*(g+.008),y=a.y0+.004+b*(g+.012);i.box(_,_+g,y,y+g,u,u+.003,O.body,O.body)}for(let m of[-.05,.05])i.cyl(m,0,.011,r-.12,r+.01,O.metal,O.metal,8)}function CM(i,t,e,n,r){if(r){let o=Math.min(t,n)/2,a=Math.min(.035,e);i.lyingCyl("z",0,-e/2+a*.4,.004,2*o-.004,a*.8,2*o-.008,O.white,O.white,28),i.lyingCyl("z",0,-e/2+a*.85,.012,2*o-.012,a*.3,2*o-.024,O.whiteTop,O.whiteTop,28,Dt);return}let s=Math.min(t,e)/2;i.cyl(0,0,s-.006,0,n*.3,O.whiteTop,O.whiteTop,28,Dt),i.cyl(0,0,s,n*.3,n,O.white,O.white,28)}function Um(i){let t=Math.max(.05,i.w),e=Math.max(.005,i.d),n=Math.max(.005,i.h);return ih(i)?{y:Math.min(t,n)/2,z:-e/2+Math.min(.035,e)+.002,r:Math.min(t,n)/2,wall:!0}:{y:-.002,z:0,r:Math.min(t,e)/2,wall:!1}}function PM(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,O.dark,O.body,pt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,f=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(f)*s,o+Math.sin(f)*s,e/2+.003,Jt)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,O.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,O.dark,O.body)}function IM(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,O.white,O.whiteTop,pt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Dt),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Dt),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,O.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,O.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,Jt)}function LM(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,O.white,O.whiteTop,pt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,Jt),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Dt);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,O.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,O.dark,O.body,pt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,Jt),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,O.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,O.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,O.white,O.whiteTop,pt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,Jt)}}var Ih=.12,Lh=2.05;function Fh(i,t){let e=FM(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function FM(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=bp(i.type);if(s){let l=t?Je(t,i):0,c=(s.x-s.w/2)*e,f=(s.x+s.w/2)*e,h=Math.min(.02,(f-c)*.05);return{x0:c+h,x1:f-h,y0:l+s.y*r+h,y1:l+(s.y+s.h)*r-h,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?Je(t,i)-mi(i):0,a=DM(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function DM(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?Je(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:Ih+.02,y1:Ih+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:Lh+.015,y1:Lh+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="water_heater"?Om(t,e,n).display:i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function NM(i,t,e,n,r){let s=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),o=new K(1-r,1-r,1-r),a=new K(1,1,1),l=.003,c=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],f=[t(-e/2-s,-n/2-s),t(e/2+s,-n/2-s),t(e/2+s,n/2+s),t(-e/2-s,n/2+s)],h=d=>[d[0],l,d[1]],u=i.p.length;i.tri(h(c[0]),h(c[1]),h(c[2]),o),i.tri(h(c[0]),h(c[2]),h(c[3]),o);for(let d=0;d<4;d++){let p=(d+1)%4;i.tri(h(c[d]),h(f[d]),h(f[p]),o,a,a),i.tri(h(c[d]),h(f[p]),h(c[p]),o,a,o)}Cm(t)&&Bm(i,u)}function lc(i,t,e,n,r=0,s=!1){OM(i,t,e,n,r,s)}function Bm(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function OM(i,t,e,n,r,s=!1){let o=ve(n.type)?0:r-mi(n);if(ve(n.type)||Math.abs(o)<.001)return Rm(i,t,e,n,r,s);let a=i.p.length,l=t.p.length;Rm(i,t,r<.05?e:new ee,n,0);for(let c=a+1;c<i.p.length;c+=3)i.p[c]+=o;for(let c=l+1;c<t.p.length;c+=3)t.p[c]+=o}function Rm(i,t,e,n,r,s=!1){let o=n.rotation*le,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,f=(x,g)=>[n.x+c*x*a-g*l,n.z+c*x*l+g*a],h=new Zi(i,t,f),u=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":wm(h,u,d,p,Math.max(1,Math.round((u-.4)/.62)));break;case"armchair":wm(h,u,d,p,1);break;case"sofa_l":Tm(h,u,d,p,!1);break;case"sofa_u":Tm(h,u,d,p,!0);break;case"bed":D1(h,u,d,p);break;case"chair":N1(h,u,d,p);break;case"table":O1(h,u,d,p);break;case"desk":U1(h,u,d,p);break;case"nightstand":$i(h,u,d,p,1,p*.72,!0),h.seg(-u/2,p*.5,d/2-.02,u/2,p*.5,d/2-.02,Dt);break;case"wardrobe":$i(h,u,d,p,Math.max(2,Math.round(u/.5)),p*.5);break;case"shelf":B1(h,u,d,p);break;case"kitchen":k1(h,u,d,p);break;case"fridge":z1(h,u,d,p);break;case"fridge_smart":H1(h,u,d,p);break;case"waste_bin":{let x=i.c.length;V1(h,u,d,p,dm(n),bm(n,gm())),bo&&Im(i.c,x);break}case"mailbox":{let x=i.p.length,g=t.p.length;G1(h,u,d,p,pm(n));let m=mi(n);for(let b=x+1;b<i.p.length;b+=3)i.p[b]+=m;for(let b=g+1;b<t.p.length;b+=3)t.p[b]+=m;if(m>0)return;break}case"awning":return;case"stove":X1(h,u,d,p);break;case"sink":Y1(h,u,d,p);break;case"bathtub":q1(h,u,d,p);break;case"shower":$1(h,u,d,p);break;case"wc":Z1(h,u,d,p);break;case"washbasin":K1(h,u,d,p);break;case"tv_board":J1(h,u,d,p);break;case"plant":j1(h,u,d,p);break;case"rug":Q1(h,u,d);return;case"stairs":eM(h,u,d,p,!!n.stair_open);break;case"stairs_u":nM(h,u,d,p);break;case"stairwell":return;case"sideboard":iM(h,u,d,p);break;case"dresser":rM(h,u,d,p);break;case"tall_cabinet":$i(h,u,d,p,1,p*.5);break;case"coat_rack":sM(h,u,d,p);break;case"bench":Em(h,u,d,p,!1);break;case"corner_bench":Em(h,u,d,p,!0);break;case"bar_stool":oM(h,u,d,p);break;case"office_chair":aM(h,u,d,p);break;case"stool":lM(h,u,d,p);break;case"kitchen_wall":cM(h,u,d,p);return;case"kitchen_tall":uM(h,u,d,p);break;case"island":hM(h,u,d,p);break;case"worktop":h.box(-u/2,u/2,Math.max(0,p-.04),p,-d/2,d/2,O.whiteTop,O.whiteTop,pt);return;case"dishwasher":fM(h,u,d,p);break;case"washer":Am(h,u,d,p,!1);break;case"dryer":Am(h,u,d,p,!0);break;case"bunk_bed":dM(h,u,d,p);break;case"table_round":pM(h,u,d,p);break;case"coffee_table":mM(h,u,d,p);break;case"tv_wall":gM(h,u,d,p);return;case"parking":{let g=[[-u/2,-d/2],[u/2,-d/2],[u/2,d/2],[-u/2,d/2]];for(let m=0;m<4;m++)h.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Dt);h.seg(-u*.15,.012,d/2-.45,0,.012,d/2-.2,pt),h.seg(0,.012,d/2-.2,u*.15,.012,d/2-.45,pt);return}case"robot_vacuum":h.box(-u*.45,u*.45,0,p,-d/2,-d/2+d*.3,O.white,O.whiteTop,pt),h.box(-u*.2,u*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,O.accent);return;case"radiator":bM(h,u,d,p);return;case"ac_unit":xM(h,u,d,p);return;case"inverter":yM(h,u,d,p,n.variant??null);return;case"grid_point":TM(h,u,d,p);break;case"wallbox":PM(h,u,d,p);return;case"wall_switch":EM(h,u,d,p,wh(n).length);return;case"wall_socket":AM(h,u,d,p,nc(n));return;case"water_heater":RM(h,u,d,p);return;case"access_point":CM(h,u,Math.max(.005,n.d),p,ih(n));return;case"pool_pump":vM(h,u,d,p);break;case"pool_filter":_M(h,u,d,p,n.variant??null);break;case"pool_heat_pump":MM(h,u,d,p);break;case"pool_dosing":SM(h,u,d,p);break;case"pool_valve":wM(h,u,d,p);return;case"meter":IM(h,u,d,p);return;case"home_battery":if(LM(h,u,d,p,n.variant??null),n.variant==="wall")return;break;default:{let x=ve(n.type);if(x){let g=Gl(n.type),m=g?b=>oh(g,b):mp(n.type)&&!s?co:null;if(yo(h,x,u,d,p,r,null,null,m),r>.05)return}else h.box(-u/2,u/2,0,p,-d/2,d/2,O.body,O.bodyTop,pt)}}NM(e,f,u,d,n.type==="plant"?.35:.5)}function km(i){var t;return!!((t=ve(i))!=null&&t.parts.some(e=>{var n,r;return((n=e.color)==null?void 0:n.startsWith("#"))||((r=e.top)==null?void 0:r.startsWith("#"))}))}function Ph(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=O;return(t?e[`${i}Top`]:void 0)??e[i]??null}function yo(i,t,e,n,r,s,o,a=null,l=null){var f,h;let c=!!a;for(let u of rc(t,e,n,r)){if(l!=null&&l(u)||a&&!a(u))continue;let d=c?{...u,glow:!0,w:u.w+.006/e,d:u.d+.006/n,y:Math.max(0,u.y-.002/r),h:u.h+.004/r}:u,p=d.glow&&o!==null,x=p?o:Ph(d.color,!1)??O.body,g=p?o:Ph(d.top,!1)??Ph(d.color,!0)??Ft(x,1.25).getHex(),m=s+d.y*r,b=s+Math.min(r,(d.y+d.h)*r),_=i.colors.length,y=d.edges==="glow"?Yi:d.edges==="faint"?Dt:d.edges?pt:null,M=d.rot?i.rotated(d.x*e,d.z*n,d.rot):i;if(d.shape==="cyl"&&(d.axis==="x"||d.axis==="z"))M.lyingCyl(d.axis,d.x*e,d.z*n,m,b,d.axis==="x"?d.w*e:d.d*n,d.axis==="x"?d.d*n:d.w*e,x,g,14,y);else if(d.shape==="cyl")M.cyl(d.x*e,d.z*n,Math.min(d.w*e,d.d*n)/2,m,b,x,g,14,y);else if(d.shape==="loft"){let w=d.tx??d.x,R=d.tz??d.z,v=d.tw??d.w,C=d.td??d.d;M.loft([(d.x-d.w/2)*e,(d.x+d.w/2)*e,(d.z-d.d/2)*n,(d.z+d.d/2)*n],[(w-v/2)*e,(w+v/2)*e,(R-C/2)*n,(R+C/2)*n],m,b,x,g,y)}else M.box((d.x-d.w/2)*e,(d.x+d.w/2)*e,m,b,(d.z-d.d/2)*n,(d.z+d.d/2)*n,x,g,y);bo&&!p&&!c&&((f=d.color)!=null&&f.startsWith("#")||(h=d.top)!=null&&h.startsWith("#"))&&Im(i.colors,_)}}function zm(i,t,e,n,r,s){let o=s*le,a=Math.cos(o),l=Math.sin(o),c=(p,x)=>[e+p*a-x*l,r+p*l+x*a],f=new Zi(i,new Fe,c),h=1713728,u=2373216,d=725279;if(t==="camera_ceiling"){f.cyl(0,0,.07,n-.03,n,h,u,12),f.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,h),f.cyl(0,0,.012,n-.075,n-.06,O.accent,O.accent,6);return}f.box(-.02,.02,n-.02,n+.02,-.06,-.03,h,u),f.box(-.01,.01,n-.01,n+.06,-.05,-.03,h,u),f.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,h,u),f.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,O.accent,10),f.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function Vm(i,t,e,n,r){let s=gp(t)*n,o=new Zi(i,new Fe,(c,f)=>[c,f-s]);yo(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,co);let a=0,l=0;for(let c of rc(t,e,n,r)){if(!co(c))continue;let f=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&f>a&&(a=f),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function vo(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*le,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,f=(h,u)=>[e.x+c*h*a-u*l,e.z+c*h*l+u*a];yo(new Zi(i,new Fe,f),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function Gm(i,t,e,n,r,s){let o=UM(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*le,l=Math.cos(a),c=Math.sin(a),f=n.mirror?-1:1,h=(u,d)=>[n.x+f*u*l-d*c,n.z+f*u*c+d*l];yo(new Zi(i,new Fe,h),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function UM(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>oh(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function Hm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of rc(i,n,r,s)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,b=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,_=g.y*s,y=Math.min(s,(g.y+g.h)*s),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,y-_));o+=M,a+=m*M,l+=(_+y)/2*M,c+=b*M}if(!o)return null;let f=a/o,h=c/o,u=t.rotation*le,d=Math.cos(u),p=Math.sin(u),x=t.mirror?-1:1;return[t.x+x*f*d-h*p,e+l/o,t.z+x*f*p+h*d]}function cc(i,t,e,n,r){let s=e.rotation*le,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(f,h)=>[e.x+l*f*o-h*a,e.z+l*f*a+h*o];yo(new Zi(i,new Fe,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var BM={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function kM(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let f=a.points[(c+1)%a.points.length],h=f[0]-l[0],u=f[1]-l[1],d=Math.hypot(h,u)||1;if(Math.abs((r*u-s*h)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*h+(n[1]-l[1])*u)/(d*d)));return Math.hypot(l[0]+h*p-n[0],l[1]+u*p-n[1])<.4}))}function Xm(i,t){return t.type==="pool"?ql(i,t):gr(i,t)+(zn(t.type)?.01:as[t.type])}function _o(i){return Mn(i)>=0?i:[...i].reverse()}function zM(i,t){let e=i[t];if(zn(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>te(o,e.points))&&n.push(_o(s.points))}return n}function Wm(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],f=e[1]-t[1],h=Math.hypot(c,f);if(h<1e-6)return;let u=-f/h*n*.5,d=c/h*n*.5;if(Math.abs(l)<1e-4){Pe(i,_o([[t[0]+u,t[1]+d],[e[0]+u,e[1]+d],[e[0]-u,e[1]-d],[t[0]-u,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(y,M)=>[t[0]+u*M,y,t[1]+d*M],x=(y,M)=>[e[0]+u*M,y+l,e[1]+d*M],g=(y,M)=>{i.tri(y[0],y[1],y[2],M,M,M,void 0,Kt),i.tri(y[0],y[2],y[3],M,M,M,void 0,Kt),i.tri(y[0],y[2],y[1],M,M,M,void 0,Kt),i.tri(y[0],y[3],y[2],M,M,M,void 0,Kt)},m=new K(a),b=new K(Ft(o,.9)),_=new K(Ft(o,.6));g([p(s,1),x(s,1),x(s,-1),p(s,-1)],m),g([p(r,1),x(r,1),x(r,-1),p(r,-1)],_),g([p(r,1),x(r,1),x(s,1),p(s,1)],b),g([p(r,-1),x(r,-1),x(s,-1),p(s,-1)],b),g([p(r,1),p(r,-1),p(s,-1),p(s,1)],b),g([x(r,1),x(r,-1),x(s,-1),x(s,1)],b)}function Ym(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=gr(e,s),l=(b,_)=>a-ho(e,s,b,_),c=a-(s.type==="pool"?0:s.slope??0),f=zn(s.type)&&s.height?s.height:as[s.type],h={...BM[s.type],top:f},u=_o(s.points),d=Ft(h.edge,h.edgeAlpha),p=s.open&&(s.type==="fence"||s.type==="pergola")?u.length-1:-1,x=b=>{if(s.outline!==!1)for(let _=0;_<u.length;_++){if(_===p)continue;let y=u[_],M=u[(_+1)%u.length];t.seg([y[0],b(y[0],y[1]),y[1]],[M[0],b(M[0],M[1]),M[1]],d,Kt)}},g=n??i,m=new K(n?1734832:h.color);switch(s.type){case"pool":{let b=new K(h.side),_=new K(Ft(h.side,.55)),y=new K(932440),M=ql(e,s),w=Yl(e,s),R=Tp(e,s);for(let[v,C,S]of Rn(u)){let E=u[v],L=u[C],N=u[S];(n?g:i).tri([E[0],M,E[1]],[N[0],M,N[1]],[L[0],M,L[1]],m,m,m,void 0,Kt),i.tri([E[0],R,E[1]],[N[0],R,N[1]],[L[0],R,L[1]],y,y,y,void 0,Kt)}for(let v=0;v<u.length;v++){let C=u[v],S=u[(v+1)%u.length];i.tri([S[0],R,S[1]],[S[0],w,S[1]],[C[0],w,C[1]],_,b,b,void 0,Kt),i.tri([S[0],R,S[1]],[C[0],w,C[1]],[C[0],R,C[1]],_,b,_,void 0,Kt)}if(!s.above&&ch(e,s)){let v=new K(660258),C=new K(396054),S=R-.2,E=Math.min(a,w);for(let L=0;L<u.length;L++){let N=u[L],T=u[(L+1)%u.length];i.tri([N[0],S,N[1]],[N[0],E,N[1]],[T[0],E,T[1]],C,v,v,void 0,Kt),i.tri([N[0],S,N[1]],[T[0],E,T[1]],[T[0],S,T[1]],C,v,C,void 0,Kt)}for(let[L,N,T]of Rn(u)){let I=u[L],P=u[N],A=u[T];i.tri([I[0],S,I[1]],[P[0],S,P[1]],[A[0],S,A[1]],C,C,C,void 0,Kt)}if(s.outline!==!1)for(let L=0;L<u.length;L++){let N=u[L],T=u[(L+1)%u.length];t.seg([N[0],S,N[1]],[T[0],S,T[1]],Ft(h.edge,h.edgeAlpha*.35),Kt),t.seg([N[0],S,N[1]],[N[0],E,N[1]],Ft(h.edge,h.edgeAlpha*.25),Kt)}}if(w>a+.02){let v=new K(2044240),C=new K(1187123);for(let S=0;S<u.length;S++){let E=u[S],L=u[(S+1)%u.length];i.tri([E[0],a,E[1]],[E[0],w,E[1]],[L[0],w,L[1]],C,v,v,void 0,Kt),i.tri([E[0],a,E[1]],[L[0],w,L[1]],[L[0],a,L[1]],C,v,C,void 0,Kt)}x(()=>a+.005)}if(x(()=>w),x(()=>M+.005),s.outline!==!1)for(let v=0;v<u.length;v++){let C=u[v],S=u[(v+1)%u.length];t.seg([C[0],R+.005,C[1]],[S[0],R+.005,S[1]],Ft(h.edge,h.edgeAlpha*.4),Kt)}break}case"fence":{for(let b=0;b<u.length;b++){if(b===p)continue;let _=u[b],y=u[(b+1)%u.length],M=Math.hypot(y[0]-_[0],y[1]-_[1]),w=Math.max(1,Math.round(M/2)),R=p>=0&&b===p-1?w:w-1;for(let v=0;v<=R;v++){let C=v/w,S=_[0]+(y[0]-_[0])*C,E=_[1]+(y[1]-_[1])*C,L=l(S,E);Pe(i,_o([[S-.04,E-.04],[S+.04,E-.04],[S+.04,E+.04],[S-.04,E+.04]]),L,L+h.top,h.side,h.color)}for(let v of[.35,.85])t.seg([_[0],l(_[0],_[1])+v*h.top,_[1]],[y[0],l(y[0],y[1])+v*h.top,y[1]],d,Kt)}break}case"pergola":{let b=h.top;for(let[_,y]of u){let M=l(_,y);Pe(i,_o([[_-.06,y-.06],[_+.06,y-.06],[_+.06,y+.06],[_-.06,y+.06]]),M,M+b,h.side,h.color)}for(let _=0;_<u.length;_++){if(_===p)continue;let y=u[_],M=u[(_+1)%u.length],w=l(y[0],y[1])+b;if(Wm(i,y,M,.12,w-.16,w,h.side,h.color,l(M[0],M[1])-l(y[0],y[1])),s.bracing){let R=l(y[0],y[1]),v=l(M[0],M[1]);t.seg([y[0],R+.25,y[1]],[M[0],v+b-.25,M[1]],d,Kt),t.seg([M[0],v+.25,M[1]],[y[0],R+b-.25,y[1]],d,Kt)}}if(Dp(u)){let _=Np(u),y=_.x1-_.x0,M=_.z1-_.z0,w=y>=M,R=w?y:M,v=Math.max(1,Math.round(R/.6));for(let C=1;C<v;C++){let S=(w?_.x0:_.z0)+R*C/v,E=w?[S,_.z0+.06]:[_.x0+.06,S],L=w?[S,_.z1-.06]:[_.x1-.06,S],N=l(E[0],E[1])+b;Wm(i,E,L,.06,N-.04,N+.08,h.side,h.color,l(L[0],L[1])-l(E[0],E[1]))}}x((_,y)=>l(_,y)+b+.004);break}case"balcony":{Pe(i,u,a-.18,a+h.top,h.side,h.color,{aoFrom:a-.18}),x(()=>a+h.top+.004);let _=s.height&&s.height>.3?s.height:1,y=Ft(9417983,.42),M=Ft(3662079,.55);for(let w=0;w<u.length;w++){let R=u[w],v=u[(w+1)%u.length];if(kM(e,R,v))continue;let C=Math.hypot(v[0]-R[0],v[1]-R[1]),S=a+h.top;t.seg([R[0],S+_,R[1]],[v[0],S+_,v[1]],M,Kt),t.seg([R[0],S+.1,R[1]],[v[0],S+.1,v[1]],y,Kt);let E=Math.max(1,Math.round(C/.12));for(let L=0;L<=E;L++){let N=L/E,T=R[0]+(v[0]-R[0])*N,I=R[1]+(v[1]-R[1])*N;t.seg([T,S,I],[T,S+_,I],L===0||L===E?M:y,Kt)}}break}default:{let b=(y,M)=>l(y,M)+h.top,_=zM(r,o);if(Pe(i,u,c,s.slope?b:a+h.top,h.side,h.color,{aoFrom:c,holes:_}),x((y,M)=>b(y,M)+.004),s.type==="hedge"&&x((y,M)=>l(y,M)+.004),s.outline!==!1)for(let y of _)for(let M=0;M<y.length;M++){let w=y[M],R=y[(M+1)%y.length];t.seg([w[0],b(w[0],w[1])+.004,w[1]],[R[0],b(R[0],R[1])+.004,R[1]],d,Kt)}}}})}var hc=Math.PI/180,VM=1.13,GM=1.72,Dh=.025,Sr=.07,qm=.25;function $m(i,t){var n;let e=[];for(let r of i.floors){if(t&&r.id!==t)continue;let{walls:s}=ni(r.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},r.walls??[]);for(let o of s){if(!o.exterior&&!o.free)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);if(c<.5)continue;let f=l/c,h=-a/c,u=Math.min(r.height,o.height??r.height),d=((n=o.sources.find(g=>g.room_id===o.roomLeft))==null?void 0:n.edge)??null,p={floorId:r.id,room:o.roomLeft,edge:d,free:!!o.free},x=(g,m,b,_)=>e.push({key:g,section:null,side:"top",flat:!1,o:m,eu:b,es:[0,1,0],n:_,lu:c,ls:u,pitch:90,span:()=>[0,c],facing:[_[0],_[2]],wall:p});x(`wall:${r.id}:${o.id}`,[o.a[0]+f*o.right,r.elevation,o.a[1]+h*o.right],[a/c,0,l/c],[f,0,h]),o.free&&x(`wall:${r.id}:${o.id}:back`,[o.b[0]-f*o.left,r.elevation,o.b[1]-h*o.left],[-a/c,0,-l/c],[-f,0,-h])}}return e}var Nh="ground";function Oh(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Zm(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Oh(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:wp(s,o,a)):t.base??0;return{key:Nh,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function HM(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Tr(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(b=>WM(b,tc(i,b,b.overhang??t.overhang)));let e=HM(i);if(!e)return[];let n=e.rooms.flatMap(b=>b.points.map(_=>_[0])),r=e.rooms.flatMap(b=>b.points.map(_=>_[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=e.elevation+e.height;if(t.type==="flat")return[Km("main",null,o,l,a,c,f+qm)];let h=a-o>=c-l,u=t.ridge==="short"?!h:h,d=(u?c-l:a-o)/2,p=d*Math.tan(t.pitch*hc),x=(b,_,y)=>u?[b,f+y,(l+c)/2+_]:[(o+a)/2+_,f+y,b],[g,m]=u?[o,a]:[l,c];return[-1,1].map(b=>uc(`main:${b<0?"a":"b"}`,null,b<0?"a":"b",x(g,b*d,0),x(m,b*d,0),x(g,0,p),t.pitch,()=>[0,m-g]))}function WM(i,t){let e=fn(i),n=rn(i),r=(_,y,M)=>{let[w,R]=e.at(_,y);return[w,M,R]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let _=e.at(a,-s),y=e.at(l,e.w+o);return[Km(i.id,i.id,Math.min(_[0],y[0]),Math.min(_[1],y[1]),Math.max(_[0],y[0]),Math.max(_[1],y[1]),i.eave_a+qm)]}if(i.shape==="pent")return[uc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let f=Ql(i),h=f?mh(i,f):null,u=i.shape==="pyramid"||(f==null?void 0:f[0])==="hip",d=i.shape==="pyramid"||(f==null?void 0:f[1])==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:u?h.d0:0,x=i.shape==="pyramid"?(e.u1-e.u0)/2:d?h.d1:0,g=u?e.u0+p-a:0,m=d?l-(e.u1-x):0,b=[];if(n.vr>.3){let _=Math.hypot(n.vr+s,n.rh-n.y(-s));b.push(uc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,y=>[g*(y/_),c-m*(y/_)]))}if(e.w-n.vr>.3){let _=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));b.push(uc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,y=>[m*(y/_),c-g*(y/_)]))}if(u||d){let _=n.y(-s),y=n.y(e.w+o),M=[];u&&M.push([`${i.id}:c`,"c",r(a,e.w+o,y),r(a,-s,_),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,_),r(l,e.w+o,y),r(e.u1-x,n.vr,n.rh)]);for(let[w,R,v,C,S]of M){let E=XM(w,i.id,R,v,C,S);E&&b.push(E)}}return b}function XM(i,t,e,n,r,s){let o=Mo(wr(r,n));if(o<.3)return null;let a=Ki(wr(r,n)),l=wr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],f=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],h=Mo(f);if(h<.3)return null;let u=Ki(f),d=Ki(Qm(a,u));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=Ki([-u[0],0,-u[2]]),x=Math.atan2(u[1],Math.hypot(u[0],u[2]))/hc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:u,n:d,lu:o,ls:h,pitch:x,span:m=>{let b=Math.min(1,Math.max(0,m/h));return[c*b,o-(o-c)*b]},facing:[p[0],p[2]]}}function uc(i,t,e,n,r,s,o,a){let l=Ki(wr(r,n)),c=Ki(wr(s,n)),f=Ki(Qm(l,c));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let h=Ki([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:f,lu:Mo(wr(r,n)),ls:Mo(wr(s,n)),pitch:o,span:a,facing:[h[0],h[2]]}}function Km(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Jm(i){let t=i.module_w||VM,e=i.module_h||GM;return i.portrait===!1?[e,t]:[t,e]}function YM(i){var t;return(t=i.layout)!=null&&t.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function jm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*hc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*hc:0}function qM(i,t){let[,e]=Jm(t),n=jm(i,t);return i.wall?e*Math.cos(n)+Dh:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+Dh}function So(i,t,e=!1){let[n,r]=Jm(t),s=[],o=jm(i,t),a=r*Math.cos(o),l=qM(i,t),c=YM(t),f=Math.max(1,...c),h=new Set(t.skip??[]),u=!!i.wall&&n>i.lu+1e-6,d=(x,g,m)=>[i.o[0]+i.eu[0]*x+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*x+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*x+i.es[2]*g+i.n[2]*m],p=(x,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,b]=i.span(g);return x>=m-1e-6&&x<=b+1e-6};return c.forEach((x,g)=>{let m=t.align==="right"?f-x:t.align==="center"?(f-x)/2:0;for(let b=0;b<x;b++){let _=`${g}:${b}`,y=h.has(_);if(y&&!e)continue;let M=t.u+(b+m)*(n+Dh),w=t.v+g*l,R=M+n,v=w+(i.flat||i.wall?a:r);if(u){if(!(p((M+R)/2,w)&&p((M+R)/2,v)))continue}else if(![[M,w],[R,w],[R,v],[M,v]].every(([T,I])=>p(T,I)))continue;if(i.wall&&o>.001){let T=Sr+r*Math.sin(o),[I,P]=t.flip?[T,Sr]:[Sr,T],A=[d(M,w,I),d(R,w,I),d(R,v,P),d(M,v,P)],D=t.flip?w:v,B=[M+.05,R-.05].map(z=>[d(z,D,0),d(z,D,T)]);s.push({corners:A,posts:B,cell:_,skipped:y});continue}if(!i.flat){s.push({corners:[d(M,w,Sr),d(R,w,Sr),d(R,v,Sr),d(M,v,Sr)],posts:[],cell:_,skipped:y});continue}let C=.15,S=C+r*Math.sin(o),[E,L]=t.flip?[v,w]:[w,v],N=[d(M,E,C),d(R,E,C),d(R,L,S),d(M,L,S)];s.push({corners:N,posts:[M+.05,R-.05].flatMap(T=>[[d(T,E,0),d(T,E,C)],[d(T,L,0),d(T,L,S)]]),cell:_,skipped:y})}}),s}function wr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function Mo(i){return Math.hypot(i[0],i[1],i[2])}function Ki(i){let t=Mo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Qm(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var $M=.78,ZM=1.18;function KM(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||$M,module_h:i.h||ZM}}function fc(i,t){let e=So(i,KM(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function dc(i,t,e){let n=t?fc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>te([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var wo=1712952,To=2239816,i0=1318193,Ji=Ft(3662079,.9),xs=Ft(5995775,.45),Xe=.14,JM=9427199,jM=13226982,QM=14936565,t2={black:{glass:new K(329483),edge:Ft(9082544,.32),cells:Ft(2766160,.22)},blue:{glass:new K(1386842),edge:Ft(10467583,.55),cells:Ft(4025599,.35)}},e2=Ft(13226982,.5),n2=Ft(13226982,.85),i2=Ft(16757575,.95),t0=new K(2845583),e0=new K(1713986),r2=new K(3662079).multiplyScalar(.35),n0=new K(4871791);function s2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function r0(i,t=new Map){let e=i.settings.roof,n=(e==null?void 0:e.type)==="custom"?null:l2(i),r=(e==null?void 0:e.type)==="custom"?c2(i,e.sections??[],e.overhang):n?[n]:[];return a2(i,r),o2(i,r,t),r}function o2(i,t,e){var s;let n=((s=i.settings.roof)==null?void 0:s.windows)??[];if(!n.length||!t.length)return;let r=new Map(Tr(i).map(o=>[o.key,o]));for(let o of n){let a=r.get(o.face),l=a?fc(a,o):null;if(!a||!l)continue;let c=a.section?t.find(A=>{var D;return(D=A.sections)==null?void 0:D.includes(a.section)}):t[0];if(!c)continue;let f=o.float?dc(i,a,o):null,h=f&&f.floor.id!==c.floor.id&&f.floor.elevation<c.floor.elevation?f.floor:null,u=h?h.elevation:c.floor.elevation+c.base,d=A=>[A[0],A[1]-u,A[2]],[p,x,g,m]=l.map(d),b=e.get(o.id)??{open:0,tilt:0,cover:0},_=!!f&&(h!==null||f.floor.id===c.floor.id),y=h?(c.winBelow??=new Map).get(h.id)??c.winBelow.set(h.id,{floor:h,solid:new ee,lines:new Fe,glass:new ee}).get(h.id):_?c.win??={solid:new ee,lines:new Fe,glass:new ee}:c.winRoof??={solid:new ee,lines:new Fe,glass:new ee},M=(A,D)=>[A[0]+a.n[0]*D,A[1]+a.n[1]*D,A[2]+a.n[2]*D],w=(A,D,B)=>[A[0]+(D[0]-A[0])*B,A[1]+(D[1]-A[1])*B,A[2]+(D[2]-A[2])*B],R=b.open>.02||b.tilt>.02?i2:n2,v=[p,x,g,m].map(A=>M(A,.06)),C=[p,x,g,m].map(A=>M(A,-.02));for(let A=0;A<4;A++){y.lines.seg(v[A],v[(A+1)%4],R);let D=(A+1)%4;y.solid.tri(C[A],C[D],v[D],n0),y.solid.tri(C[A],v[D],v[A],n0)}let S=(b.open>.02?30*Math.min(1,b.open):b.tilt>.5?12:0)*le,E=Math.hypot(g[0]-x[0],g[1]-x[1],g[2]-x[2]),L=A=>{let D=a.es;return[A[0]-D[0]*E*Math.cos(S)+a.n[0]*E*Math.sin(S),A[1]-D[1]*E*Math.cos(S)+a.n[1]*E*Math.sin(S),A[2]-D[2]*E*Math.cos(S)+a.n[2]*E*Math.sin(S)]},N=M(m,.065),T=M(g,.065),I=L(N),P=L(T);y.glass.tri(I,P,T,t0),y.glass.tri(I,T,N,t0);for(let[A,D]of[[I,P],[P,T],[T,N],[N,I]])y.lines.seg(A,D,R);if(b.cover>.02){let A=Math.min(1,b.cover),D=M(w(N,I,A),.01),B=M(w(T,P,A),.01),z=M(N,.01),k=M(T,.01);y.solid.tri(D,B,k,e0),y.solid.tri(D,k,z,e0);let W=Math.max(1,Math.round(E*A/.05));for(let G=1;G<=W;G++){let Q=G/W;y.lines.seg(M(w(z,D,Q),.004),M(w(k,B,Q),.004),r2)}}}}function a2(i,t){var r;let e=((r=i.settings.roof)==null?void 0:r.solar)??[];if(!e.length||!t.length)return;let n=new Map(Tr(i).map(s=>[s.key,s]));for(let s of e){let o=n.get(s.face);if(!o)continue;let a=o.section?t.find(l=>{var c;return(c=l.sections)==null?void 0:c.includes(o.section)}):t[0];a&&Uh(a.solid,a.lines,o,s,a.floor.elevation+a.base)}}function Uh(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=t2[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of So(e,n)){let[f,h,u,d]=c.corners.map(s);i.tri(f,h,u,o.glass),i.tri(f,u,d,o.glass),i.tri(f,u,h,o.glass),i.tri(f,d,u,o.glass);let p=(m,b=.004)=>[m[0]+e.n[0]*b,m[1]+e.n[1]*b,m[2]+e.n[2]*b],x=(m,b,_)=>[m[0]+(b[0]-m[0])*_,m[1]+(b[1]-m[1])*_,m[2]+(b[2]-m[2])*_],g=[f,h,u,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(x(f,h,m/a)),p(x(d,u,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(x(f,d,m/l)),p(x(h,u,m/l)),o.cells);for(let[m,b]of c.posts)t.seg(s(m),s(b),e2)}}function l2(i){let t=i.settings.roof,e=s2(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(E=>E[0])),r=e.rooms.flatMap(S=>S.points.map(E=>E[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=new ee,h=new Fe;if(t.type==="flat"){Pe(f,[[o,l],[a,l],[a,c],[o,c]],0,.25,wo,To,{bottom:!0});let S=.252;for(let[E,L]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])h.seg([E[0],S,E[1]],[L[0],S,L[1]],Ji),h.seg([E[0],0,E[1]],[L[0],0,L[1]],xs);return{floor:e,base:e.height,solid:f,lines:h,glass:new ee}}let u=a-o>=c-l,d=t.ridge==="short"?!u:u,p=(d?c-l:a-o)/2,x=p*Math.tan(t.pitch*le),g=(S,E,L)=>d?[S,L,(l+c)/2+E]:[(o+a)/2+E,L,S],[m,b]=d?[o,a]:[l,c],_=new K(To),y=new K(wo),M=(S,E,L,N,T)=>{f.tri(S,E,L,T),f.tri(S,L,N,T)};for(let S of[-1,1]){M(g(m,S*p,0),g(b,S*p,0),g(b,0,x),g(m,0,x),_),M(g(m,S*p,-Xe),g(m,0,x-Xe),g(b,0,x-Xe),g(b,S*p,-Xe),y),M(g(m,S*p,-Xe),g(b,S*p,-Xe),g(b,S*p,0),g(m,S*p,0),y);for(let E of[m,b])M(g(E,S*p,-Xe),g(E,S*p,0),g(E,0,x),g(E,0,x-Xe),y);h.seg(g(m,S*p,0),g(b,S*p,0),xs);for(let E of[m,b])h.seg(g(E,S*p,0),g(E,0,x),xs)}let w=t.overhang,R=new K(i0),v=p-w,C=v*Math.tan(t.pitch*le);for(let S of[m+w,b-w])f.tri(g(S,-v,-Xe),g(S,v,-Xe),g(S,0,C-Xe),R),f.tri(g(S,v,-Xe),g(S,-v,-Xe),g(S,0,C-Xe),R);return h.seg(g(m,0,x+.004),g(b,0,x+.004),Ji),{floor:e,base:e.height,solid:f,lines:h,glass:new ee}}function c2(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Tr(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=yr(t,l),f=c?null:Qp(t,l),h=c?gh(c,l):f?em(l,f):l,u=tc(i,c?h:l,h.overhang??e),d=f?{...u,[f.end===0?"u0":"u1"]:0}:u,p=!h.open&&h.shape!=="flat"&&h.shape!=="parapet";return[l,{parent:c,junction:f,drawn:h,ov:d,covers:p?Jp(h,vr(h,d).faces):[]}]}));for(let l of o){let c=a.get(l),f=qp(i,l)??n[0],h=l.open?`${f.id}:open`:f.id,u=r.get(h);u||r.set(h,u={floor:f,base:0,solid:new ee,lines:new Fe,glass:new ee,sections:[],lift:!l.open}),u.sections.push(l.id);let d=c.parent,p=f.elevation+f.height>l.base+.05&&!l.dormer&&!d,x=t.filter(y=>y!==l&&yr(t,y)===l).flatMap(y=>Yp(l,y));for(let y of i.settings.roof.windows??[]){let M=s.get(y.face),w=M&&M.section===l.id?fc(M,y):null;if(!w)continue;let R=w.map(v=>bi(l,v[0],v[2]));x.push({u0:Math.min(...R.map(v=>v[0])),u1:Math.max(...R.map(v=>v[0])),v0:Math.min(...R.map(v=>v[1])),v1:Math.max(...R.map(v=>v[1]))})}let g=c.drawn,m=c.junction?1-c.junction.end:null;if(d){let y=fn(g),M=vr(d,{u0:0,u1:0,a:0,b:0}),w=R=>{let[v,C]=y.at(R,y.w/2),[S,E]=bi(d,v,C);return go(M,S,E)??rn(d).y(E)};m=w(y.u0)<=w(y.u1)?0:1}let b=o.filter(y=>jp(t,l,y)),_=b.length?{covers:yh(g,b.flatMap(y=>a.get(y).covers)),lines:yh(g,b.filter(y=>o.indexOf(y)>o.indexOf(l)).flatMap(y=>a.get(y).covers)),wallU:c.junction?[fn(l).u0,fn(l).u1]:null}:null;u2(u.solid,u.lines,g,c.ov,f.elevation,u.glass,p,x,m,_)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function u2(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let f=fn(e),h=rn(e),u=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,u.a),p=Math.max(0,u.b),x=f.w,g=f.u0-Math.max(0,u.u0),m=f.u1+Math.max(0,u.u1),b=(P,A,D)=>{let[B,z]=f.at(P,A);return[B,D-r,z]},_=new K(To),y=new K(wo),M=new K(i0),w=(P,A)=>{for(let D=1;D+1<P.length;D++)i.tri(P[0],P[D],P[D+1],A)},R=[],v=[],C=[],S=[null,null],E=[];if(e.shape==="flat"||e.shape==="parapet"){let P=e.eave_a,A=e.shape==="parapet",D=e.points&&e.points.length>=3?Hp(e,A?0:Math.max(0,Math.min(u.a,u.b,u.u0,u.u1))):A?[f.at(f.u0,0),f.at(f.u1,0),f.at(f.u1,x),f.at(f.u0,x)]:[f.at(g,-d),f.at(m,-d),f.at(m,x+p),f.at(g,x+p)];Pe(i,D,P-r,P-r+.25,wo,To,{bottom:!0});for(let B=0;B<D.length;B++){let z=D[B],k=D[(B+1)%D.length];t.seg([z[0],P-r+.252,z[1]],[k[0],P-r+.252,k[1]],Ji),t.seg([z[0],P-r,z[1]],[k[0],P-r,k[1]],xs)}if(A){let B=G=>Vn(G)>=0?G:[...G].reverse(),z=B(D),k=jl(z,-.2),W=z.length;for(let G=0;G<W;G++){let Q=B([z[G],z[(G+1)%W],k[(G+1)%W],k[G]]);Pe(i,Q,P-r+.25,P-r+.65,wo,To),t.seg([z[G][0],P-r+.652,z[G][1]],[z[(G+1)%W][0],P-r+.652,z[(G+1)%W][1]],Ji),t.seg([k[G][0],P-r+.652,k[G][1]],[k[(G+1)%W][0],P-r+.652,k[(G+1)%W][1]],Ji)}}}else{let P=vr(e,u);R=P.faces;for(let A of a)R=R.flatMap(D=>bh(D,A));if(v=P.rim,C=P.ridges,S=P.gables,c){for(let A of R)for(let D of c.lines){let B=Kp(A,D.poly);if(B)for(let[z,k]of xh(B[0],B[1],c.covers.filter(W=>W!==D)))E.push([z,k])}R=R.flatMap(A=>Zp(A,c.covers))}}let L=!!e.open,N=new K(JM);for(let P of R){if(L){for(let A=1;A+1<P.length;A++)s.tri(b(P[0][0],P[0][1],P[0][2]),b(P[A][0],P[A][1],P[A][2]),b(P[A+1][0],P[A+1][1],P[A+1][2]),N);continue}w(P.map(([A,D,B])=>b(A,D,B)),_),w(P.map(([A,D,B])=>b(A,D,B-Xe)),y)}let T=(P,A)=>c?xh(P,A,c.covers):[[P,A]];for(let P=0;P<v.length;P++)for(let[[A,D,B],[z,k,W]]of T(v[P],v[(P+1)%v.length]))L||w([b(A,D,B),b(z,k,W),b(z,k,W-Xe),b(A,D,B-Xe)],y),t.seg(b(A,D,B),b(z,k,W),L?Ji:xs);if(L){h2(i,t,f,h,u,b,r);return}for(let[P,A]of C)for(let[[D,B,z],[k,W,G]]of T(P,A))t.seg(b(D,B,z+.004),b(k,W,G+.004),Ji);for(let[[P,A,D],[B,z,k]]of E)t.seg(b(P,A,D+.004),b(B,z,k+.004),Ji);let I=e.base;if(!o){for(let P of[0,1]){let A=S[P];if(!A||l!==null&&l!==P)continue;let D=f2(A,I-Xe),B=P===0?f.u0:f.u1;D.length>=3&&w(D.map(([z,k])=>b(B,z,k)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[P,A]=(c==null?void 0:c.wallU)??[f.u0,f.u1];for(let D of[0,x]){let B=h.y(D)-Xe;B>I+.02&&w([b(P,D,I),b(A,D,I),b(A,D,B),b(P,D,B)],M)}}else if(e.eave_a>I+.02)for(let[P,A,D,B]of[[f.u0,0,f.u1,0],[f.u1,0,f.u1,x],[f.u1,x,f.u0,x],[f.u0,x,f.u0,0]])w([b(P,A,I),b(D,B,I),b(D,B,e.eave_a),b(P,A,e.eave_a)],M)}}function h2(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,f=r.a>0,h=r.b>0,u=r.u0>0,d=r.u1>0,p=(m,b,_,y,M,w)=>{let R=[e.at(m,_),e.at(b,_),e.at(b,y),e.at(m,y)],v=(R[1][0]-R[0][0])*(R[2][1]-R[0][1])-(R[2][0]-R[0][0])*(R[1][1]-R[0][1]);Pe(i,v<0?[...R].reverse():R,M-o,w-o,jM,QM,{bottom:!0})},x=o;for(let[m,b]of[[0,f],[a,h]]){if(!b)continue;let _=n.y(m)-.03,y=m===0?0:a-l;p(e.u0,e.u1,y,y+l,_-c,_),t.seg(s(e.u0,m,_-c),s(e.u1,m,_-c),xs)}for(let[m,b]of[[e.u0,u],[e.u1-l,d]])if(b)for(let _=0;_<6;_++){let y=a*_/6,M=a*(_+1)/6,w=Math.min(n.y(y),n.y(M))-.03;p(m,m+l,y,M,w-c,w)}let g=[];for(let[m,b]of[[0,f],[a-l,h]]){if(!b)continue;let _=e.u1-e.u0-l,y=Math.max(1,Math.ceil(_/3.5));for(let M=0;M<=y;M++){let w=e.u0+_*M/y;M===0&&!u||M===y&&!d||g.push([w,m])}}if(!f&&!h)for(let m of[e.u0,e.u1-l])(m===e.u0&&u||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,b]of g){let _=n.y(b+l/2)-.03-c;p(m,m+l,b,b+l,x,_)}}function f2(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Eo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},s0={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},je=.2,d2=-.06,p2=.01,Ao=8,pc=.42,Bh=.42;function c0(i,t,e,n=[],r=[],s){let{walls:o,open:a}=ni(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,I,P,A)=>{let D=A!=null&&A.slope?Math.min(P,kp(A.slope,T,I)):P,B=s?s(T,I):null;return B===null?D:Math.max(.05,Math.min(D,B))},c=(T,I)=>{let P=s?s(T,I):null;return P!==null&&P<d2},f=(T,I,P,A,D,B)=>{if(!s&&!(B!=null&&B.slope))return D;let z=D,k=Math.max(2,Math.ceil((A-P)/.25)+1);for(let W=0;W<k;W++){let G=P+(A-P)*W/(k-1);z=Math.min(z,l(T[0]+I[0]*G,T[1]+I[1]*G,D,B))}return z},h=new ee(!0,!0),u=[],d=new Fe,p=[];for(let T of i.rooms){if(T.points.length<3)continue;let I=mc(T.points),P=s0[T.floor_material]??s0.wood,A=new K(P.color),D=n.flatMap(Q=>{if(om(Q,I))return[Q];if(!im(Q))return[];let j=ps(I,Q);return j.length>=3&&Math.abs(Vn(j))>.01?[mc(j)]:[]}),B=sm(D).map(Q=>am(mc(Q),.003));p.push(...B);let z=[...I,...B.flat()],k=h.count;for(let[Q,j,tt]of Rn(I,B)){let H=z[Q],$=z[j],st=z[tt];h.tri([H[0],0,H[1]],[st[0],0,st[1]],[$[0],0,$[1]],A,A,A,[H[0],H[1],st[0],st[1],$[0],$[1]],Kt,P.tile)}u.push({roomId:T.id,start:k,end:h.count,color:P.color});let W=new K(Eo.slab),G=Q=>{for(let j=0;j<Q.length;j++){let tt=Q[j],H=Q[(j+1)%Q.length];h.tri([tt[0],-je,tt[1]],[tt[0],0,tt[1]],[H[0],0,H[1]],W),h.tri([tt[0],-je,tt[1]],[H[0],0,H[1]],[H[0],-je,H[1]],W)}};G(I);for(let Q of B){G([...mc(Q)].reverse());for(let j=0;j<Q.length;j++){let tt=Q[j],H=Q[(j+1)%Q.length];d.seg([tt[0],.006,tt[1]],[H[0],.006,H[1]],Yi),d.seg([tt[0],-je,tt[1]],[H[0],-je,H[1]],xi)}}}let x=new Map,g=[],m=new Map;for(let T of o){let I="interior",P=null;if(T.exterior){let D=T.b[0]-T.a[0],B=T.b[1]-T.a[1],z=Math.hypot(D,B)||1,k=[B/z,-D/z],W=(Math.round(Math.atan2(k[1],k[0])/(2*Math.PI)*Ao)%Ao+Ao)%Ao;I=`s${W}`;let G=W/Ao*2*Math.PI;P=[Math.cos(G),Math.sin(G)]}let A=x.get(I);A===void 0&&(A=g.length,x.set(I,A),g.push(P)),m.set(T,A)}let b=new Map,_=[];for(let T of i.openings){let I=hs(T,i.rooms,i.walls??[]);if(!I)continue;let P=fs(o,T,I);if(!P)continue;let{wall:A,s:D}=P,B=bc([A.b[0]-A.a[0],A.b[1]-A.a[1]]),z=Math.hypot(A.b[0]-A.a[0],A.b[1]-A.a[1]),k=D-T.width/2<-1e-6?hh(o,A,!1):null,W=D+T.width/2>z+1e-6?hh(o,A,!0):null,G=xt=>xt?Math.hypot(xt.b[0]-xt.a[0],xt.b[1]-xt.a[1]):0,Q=-G(k),j=z+G(W),tt=Math.min(T.width,j-Q),H=Math.max(Q,Math.min(j-tt,D-tt/2)),$=I.room.points,st=A.free?B[0]*($[1][0]-$[0][0])+B[1]*($[1][1]-$[0][1])>0:A.exterior||A.roomLeft===T.room_id,ct=[-B[1],B[0]],it=st?ct:[-ct[0],-ct[1]],ut=Math.min(f(A.a,B,H,H+tt,Ro(A,i.height),A)-.02,T.sill+T.height),mt=Math.max(0,Math.min(T.sill,ut-.1)),bt=[it[1],-it[0]],zt=B[0]*bt[0]+B[1]*bt[1]>0,Wt={opening:T,bucket:m.get(A),start:[A.a[0]+B[0]*H,A.a[1]+B[1]*H],axis:B,width:tt,toRoom:it,faceRoom:st?A.left:A.right,faceOut:st?A.right:A.left,sill:mt,top:ut,hingeAtStart:T.hinge==="left"===zt,exterior:A.exterior};_.push(Wt);let Ct=b.get(A);Ct||b.set(A,Ct=[]),Ct.push({s0:H,s1:H+tt,sill:mt,top:ut,info:Wt});for(let xt of[k,W]){if(!xt)continue;let ne=X=>(A.a[0]+B[0]*X-xt.a[0])*B[0]+(A.a[1]+B[1]*X-xt.a[1])*B[1],Se=Math.max(0,ne(H)),_e=Math.min(G(xt),ne(H+tt));if(_e-Se<1e-4)continue;let me=b.get(xt);me||b.set(xt,me=[]),me.push({s0:Se,s1:_e,sill:mt,top:ut,info:Wt,cont:!0})}}let y=Math.min(i.cut_height,i.height),M=new ee;for(let T of o){let I=m.get(T),P=bc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),A=(b.get(T)??[]).sort((tt,H)=>tt.s0-H.s0),D=Ro(T,i.height),B=[],z=[-1/0,...new Set(A.flatMap(tt=>[tt.s0,tt.s1])).values(),1/0].sort((tt,H)=>tt-H);for(let tt=0;tt+1<z.length;tt++){let H=z[tt],$=z[tt+1];if($-H<1e-6)continue;let st=Number.isFinite(H)&&Number.isFinite($)?(H+$)/2:Number.isFinite(H)?H+1:$-1,ct=A.filter(mt=>mt.s0<st&&mt.s1>st).map(mt=>[mt.sill,mt.top]).sort((mt,bt)=>mt[0]-bt[0]),it=[],ut=-je;for(let[mt,bt]of ct)mt>ut+1e-4&&it.push([ut,mt<1e-4?-p2:mt]),ut=Math.max(ut,bt);D>ut+1e-4&&it.push([ut,D]),B.push({t0:H,t1:$,ranges:it})}let k=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),W=(s||T.slope)&&f(T.a,P,0,k,D,T)<D-.001,G=W?B.flatMap(tt=>{let H=Math.max(tt.t0,-.5),$=Math.min(tt.t1,k+.5),st=Math.max(1,Math.ceil(($-H)/.3));return Array.from({length:st},(ct,it)=>({t0:it===0?tt.t0:H+($-H)*it/st,t1:it===st-1?tt.t1:H+($-H)*(it+1)/st,ranges:tt.ranges,inner0:it>0,inner1:it<st-1}))}):B.map(tt=>({...tt,inner0:!1,inner1:!1})),Q=tt=>(tt[0]-T.a[0])*P[0]+(tt[1]-T.a[1])*P[1],j=tt=>{if(!s)return[tt];let H=kh(T.footprint,T.a,P,tt.t0,tt.t1),$=H.filter(([ut,mt])=>c(ut,mt)).length;if($===0)return[tt];if($===H.length)return[];let st=Math.max(tt.t0,-.5),ct=Math.min(tt.t1,k+.5),it=Math.max(1,Math.ceil((ct-st)/.05));return Array.from({length:it},(ut,mt)=>({t0:mt===0?tt.t0:st+(ct-st)*mt/it,t1:mt===it-1?tt.t1:st+(ct-st)*(mt+1)/it,ranges:tt.ranges,inner0:mt>0||tt.inner0,inner1:mt<it-1||tt.inner1})).filter(ut=>!kh(T.footprint,T.a,P,ut.t0,ut.t1).every(([mt,bt])=>c(mt,bt)))};for(let tt of W?G.flatMap(j):G){let H=kh(T.footprint,T.a,P,tt.t0,tt.t1);if(H.length<3)continue;let $=(it,ut)=>Math.abs(Q(it)-ut)<1e-4,st=(it,ut)=>tt.inner0&&$(it,tt.t0)&&$(ut,tt.t0)||tt.inner1&&$(it,tt.t1)&&$(ut,tt.t1),ct=W?Math.min(...H.map(([it,ut])=>l(it,ut,D,T))):D;for(let[it,ut]of tt.ranges){let mt=Math.min(ut,W?Math.max(...H.map(([Ct,xt])=>l(Ct,xt,D,T))):ut);if(mt-it<1e-4||ct-it<.01)continue;let bt=it>.01,zt=W&&ut>ct,Wt=(Ct,xt)=>Math.min(ut,l(Ct,xt,D,T));if(it<y-1e-6){let Ct=mt>y+1e-6?ym+I:qi+I,xt=zt&&ct<y?(ne,Se)=>Math.min(y,Wt(ne,Se)):Math.min(mt,y);Pe(M,H,it,xt,Eo.wall,Eo.wallTop,{aoFrom:0,bottom:bt,fold:qi+I,topFold:Ct,skipSide:st})}mt>y+1e-6&&ct>y+1e-6&&Pe(M,H,Math.max(it,y),zt?Wt:mt,Eo.wall,Eo.wallTop,{aoFrom:0,fold:I,bottom:bt&&it>=y,skipSide:st})}}}let w=o.flatMap(T=>T.footprint),R=b2(o,w),v=new Fe;v.p.push(...d.p),v.c.push(...d.c),v.f.push(...d.f);let C=(T,I)=>(b.get(T)??[]).filter(I);for(let T of R.edges){let I=m.get(T.wall);for(let[A,D]of gc(T,C(T.wall,B=>B.sill<=.005)))v.seg([A[0],.004,A[1]],[D[0],.004,D[1]],xm);for(let[A,D]of gc(T,C(T.wall,B=>B.sill<y&&B.top>y)))v.seg([A[0],y,A[1]],[D[0],y,D[1]],Ah,oc+I);let P=Ro(T.wall,i.height);for(let[A,D]of gc(T,C(T.wall,B=>B.top>=P-.021))){if(!s&&!T.wall.slope){v.seg([A[0],P,A[1]],[D[0],P,D[1]],Yi,P<=y+1e-6?qi+I:I);continue}let B=Math.max(1,Math.ceil(Math.hypot(D[0]-A[0],D[1]-A[1])/.3));for(let z=0;z<B;z++){let k=[A[0]+(D[0]-A[0])*z/B,A[1]+(D[1]-A[1])*z/B],W=[A[0]+(D[0]-A[0])*(z+1)/B,A[1]+(D[1]-A[1])*(z+1)/B];if(c(k[0],k[1])&&c(W[0],W[1]))continue;let G=l(k[0],k[1],P,T.wall),Q=l(W[0],W[1],P,T.wall);v.seg([k[0],G,k[1]],[W[0],Q,W[1]],Yi,Math.max(G,Q)<=y+1e-6?qi+I:I)}}}let S=(T,I)=>l(I[0],I[1],Ro(T,i.height),T);for(let T of R.corners){if(c(T.p[0],T.p[1]))continue;let I=T.walls.reduce((A,D)=>S(D,T.p)>S(A,T.p)+1e-6?D:A,T.wall),P=l(T.p[0],T.p[1],Ro(I,i.height),I);v.segSplit([T.p[0],.004,T.p[1]],[T.p[0],P,T.p[1]],xi,Math.min(y,P),m.get(I))}for(let T of R.joints){let[I,P]=T.walls,A=[S(I,T.a),S(P,T.a)],D=[S(I,T.b),S(P,T.b)];if(Math.abs(A[0]-A[1])<.01&&Math.abs(D[0]-D[1])<.01)continue;let B=A[1]+D[1]>=A[0]+D[0]?P:I,z=m.get(B),k=Math.max(...A),W=Math.max(...D);v.seg([T.a[0],k,T.a[1]],[T.b[0],W,T.b[1]],Yi,Math.max(k,W)<=y+1e-6?qi+z:z);for(let[G,Q]of[[T.a,A],[T.b,D]]){let j=Math.min(...Q),tt=Math.max(...Q);tt-j>.01&&v.segSplit([G[0],j,G[1]],[G[0],tt,G[1]],xi,y,z)}}for(let T of b.values())for(let I of T)I.cont||m2(v,I,y);let E=x2(R.edges,i.rooms,b),L=new ee;Ym(M,v,i,L);for(let T of r)Uh(M,v,T.face,T.field,i.elevation);let N=[];for(let T of i.furniture){if(Ip(T.type))continue;let I=M.count,P=v.p.length/6,A=T,D=Je(i,A);lc(M,v,E,A,D),D+A.h>y+.05&&(vm(M,I,y,Rh),_m(v,P,y,Rh)),N.push({id:A.id,start:I,end:M.count})}return{floor:h.geometry(),roomTris:u,holes:p,walls:M.geometry(),water:L.geometry(),lines:v.geometry(),shadow:E.geometry(),buckets:g,openings:_,walls2d:o,openRooms:a,wallBuckets:o.map(T=>m.get(T)),furnitureTris:N,roofUnder:s}}function m2(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,f)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,f,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Kt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),xi,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),xi,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),xi,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),xi,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),xi,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),Ah,oc+r)}function kh(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=o0(o,a=>s(a)-n)),Number.isFinite(r)&&(o=o0(o,a=>r-s(a))),o}function o0(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var a0=i=>Math.round(i*1e3),Co=i=>`${a0(i[0])},${a0(i[1])}`,l0=(i,t)=>{let e=Co(i),n=Co(t);return e<n?`${e}|${n}`:`${n}|${e}`};function g2(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let h of t){let u=((h[0]-r[0])*o+(h[1]-r[1])*a)/l;if(u<=1e-6||u>=1-1e-6)continue;Math.abs((h[0]-r[0])*a-(h[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(u)}c.sort((h,u)=>h-u);let f=r;for(let h of c){let u=[r[0]+o*h,r[1]+a*h];Co(u)!==Co(f)&&e.push([f,u]),f=u}e.push([f,s])}return e}function b2(i,t){let e=i.map(f=>({wall:f,edges:g2(f.footprint,t)})),n=new Map,r=new Map;for(let{wall:f,edges:h}of e)for(let[u,d]of h){let p=l0(u,d);n.set(p,(n.get(p)??0)+1);let x=r.get(p);x?x.walls.push(f):r.set(p,{a:u,b:d,walls:[f]})}let s=[];for(let f of r.values())f.walls.length===2&&f.walls[0]!==f.walls[1]&&s.push({a:f.a,b:f.b,walls:[f.walls[0],f.walls[1]]});let o=[],a=new Map,l=(f,h,u)=>{let d=Co(f),p=a.get(d);p||a.set(d,p={p:f,wall:h,walls:[],d:[]}),p.d.push(u),p.walls.includes(h)||p.walls.push(h)};for(let{wall:f,edges:h}of e)for(let[u,d]of h){if(n.get(l0(u,d))!==1)continue;let p=Math.hypot(d[0]-u[0],d[1]-u[1]);if(p<1e-4)continue;o.push({a:u,b:d,wall:f});let x=[(d[0]-u[0])/p,(d[1]-u[1])/p];l(u,f,x),l(d,f,x)}let c=[];for(let{p:f,wall:h,walls:u,d}of a.values())d.some(p=>d.some(x=>Math.abs(p[0]*x[1]-p[1]*x[0])>.05))&&c.push({p:f,wall:h,walls:u});return{edges:o,corners:c,joints:s}}function gc(i,t){if(!t.length)return[[i.a,i.b]];let e=bc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=bc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=h=>(h[0]-i.wall.a[0])*e[0]+(h[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let h of t)c=c.flatMap(([u,d])=>{if(h.s1<=u||h.s0>=d)return[[u,d]];let p=[];return h.s0>u&&p.push([u,h.s0]),h.s1<d&&p.push([h.s1,d]),p});let f=h=>{let u=(h-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*u,i.a[1]+(i.b[1]-i.a[1])*u]};return c.filter(([h,u])=>u-h>1e-4).map(([h,u])=>s<=o?[f(h),f(u)]:[f(u),f(h)])}function x2(i,t,e){let n=new ee,r=new K(Bh,Bh,Bh),s=new K(1,1,1),o=.002;for(let a of i)for(let[l,c]of gc(a,(e.get(a.wall)??[]).filter(f=>f.sill<=.005))){let f=c[0]-l[0],h=c[1]-l[1],u=Math.hypot(f,h);if(u<.05)continue;let d=[h/u,-f/u],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&te(p,m.points)))continue;let x=[l[0]+d[0]*pc,l[1]+d[1]*pc],g=[c[0]+d[0]*pc,c[1]+d[1]*pc];n.tri([l[0],o,l[1]],[x[0],o,x[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function u0(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(Hi),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>{var o;return(Cp.has(s.type)||((o=ve(s.type))==null?void 0:o.hole))&&n.elevation+s.h>=t.elevation-.3}).map(Hi);return[...e,...r]}function Ro(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function bc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function mc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var y2=new K(1516340),v2=new K(527897),zh=new K(1779256),Po=new K(1120808),_2=new K(4163256),h0=new K(5995161),M2=new K(2240842),S2=new K(1318704),w2=.35,ys=.8,T2=.2,f0=.1;function E2(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||zn(o.type)||!te(e,o.points)||(r=Math.max(r,s.elevation+gr(s,o)+as[o.type]-t.elevation));return r>n?r-n:0}function d0(i,t,e,n=!1){var p;if(((p=i.settings.terrain)==null?void 0:p.earth)===!1||t.elevation>.3)return null;let r=vh(i,t);if(!r)return null;let s=(x,g)=>ls(x,g)-t.elevation,o=n&&r.some(([x,g])=>s(x,g)<-je-.03);if(!o&&!_h(i,t))return null;let a=t.height,l=-w2,c=(x,g)=>Math.min(a,ls(x,g)-t.elevation),f=new ee,h=new ee,u=new Fe,d=(x,g,m,b,_,y,M,w)=>{let R=[g[0]-x[0],g[2]-x[2]];-R[1]*_[0]+R[0]*_[1]>0?(w.tri(x,g,m,y,y,M),w.tri(x,m,b,y,M,M)):(w.tri(x,m,g,y,M,y),w.tri(x,b,m,y,M,M))};for(let x=0;x<r.length;x++){let g=r[x],m=r[(x+1)%r.length],b=Math.hypot(m[0]-g[0],m[1]-g[1]);if(b<1e-4)continue;let _=[(m[0]-g[0])/b,(m[1]-g[1])/b],y=[_[1],-_[0]],M=[(g[0]+m[0])/2+y[0]*.05,(g[1]+m[1])/2+y[1]*.05];te(M,r)&&(y=[-y[0],-y[1]]);let w=(E,L=.012)=>[g[0]+_[0]*E+y[0]*L,g[1]+_[1]*E+y[1]*L],R=[];for(let E of e){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let L=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,N=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,T=(L-g[0])*_[0]+(N-g[1])*_[1];Math.abs((L-g[0])*y[0]+(N-g[1])*y[1])>.08||T<-.05||T>b+.05||nm(i,t,E.exterior,E.sill,[L,N])&&R.push({s0:Math.max(0,T-E.width/2-f0),s1:Math.min(b,T+E.width/2+f0),bottom:Math.max(l+.05,E.sill-T2),rim:E.opening.well_rim??0})}let v=new Set([0,b]);for(let E of R)v.add(E.s0),v.add(E.s1);let C=[...v].sort((E,L)=>E-L),S=[];for(let E=0;E<C.length-1;E++){let L=Math.max(1,Math.ceil((C[E+1]-C[E])/.5));for(let N=0;N<L;N++)S.push(C[E]+(C[E+1]-C[E])*N/L)}S.push(b);for(let E=0;E<S.length-1;E++){let L=S[E],N=S[E+1],T=R.find(G=>L>=G.s0-1e-6&&N<=G.s1+1e-6),I=w(L),P=w(N),A=c(I[0],I[1]),D=c(P[0],P[1]),B=T?Math.min(A,T.bottom):A,z=T?Math.min(D,T.bottom):D;if(B>l+.01||z>l+.01){let G=Math.min(B,l),Q=Math.min(z,l);d([I[0],G,I[1]],[P[0],Q,P[1]],[P[0],Math.max(z,l),P[1]],[I[0],Math.max(B,l),I[1]],y,v2,y2,f)}let k=s(I[0],I[1]),W=s(P[0],P[1]);if(o&&(k<-je-.01||W<-je-.01)&&d([I[0],Math.min(k,-je),I[1]],[P[0],Math.min(W,-je),P[1]],[P[0],-je,P[1]],[I[0],-je,I[1]],y,S2,M2,f),A>l||D>l||o&&(k<-je||W<-je)){let G=o?Math.min(k,Math.max(A,l)):Math.max(A,l),Q=o?Math.min(W,Math.max(D,l)):Math.max(D,l);u.seg([I[0],G+.004,I[1]],[P[0],Q+.004,P[1]],_2)}}for(let E of R){let L=w(E.s0,0),N=w(E.s1,0),T=[L[0]+y[0]*ys,L[1]+y[1]*ys],I=[N[0]+y[0]*ys,N[1]+y[1]*ys],P=[(L[0]+N[0]+T[0]+I[0])/4,(L[1]+N[1]+T[1]+I[1])/4],A=E2(i,t,P,c(P[0],P[1])),D=Math.max(E.rim,A>0?A+.02:0),B=j=>c(j[0],j[1])+D,z=E.bottom,k=(j,tt)=>[j[0],tt,j[1]];h.tri(k(L,z),k(N,z),k(I,z),Po),h.tri(k(L,z),k(I,z),k(T,z),Po);let W=(j,tt)=>{h.tri(k(j,z),k(tt,z),k(tt,B(tt)),Po,Po,zh),h.tri(k(j,z),k(tt,B(tt)),k(j,B(j)),Po,zh,zh)};W(L,T),W(N,I),W(T,I);let G=j=>[j[0],B(j)+.01,j[1]];for(let[j,tt]of[[L,N],[N,I],[I,T],[T,L]])u.seg(G(j),G(tt),h0);let Q=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let j=1;j<Q;j++){let tt=j/Q,H=[L[0]+(N[0]-L[0])*tt,L[1]+(N[1]-L[1])*tt];u.seg(G(H),G([H[0]+y[0]*ys,H[1]+y[1]*ys]),h0)}}}return f.count||h.count?{earth:f,wells:h,lines:u}:null}var p0=i=>Math.round(i*1e3)/1e3;function A2(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,f)=>{let h=l.points[(f+1)%l.points.length];return o(c)>.02||o(h)>.02?!1:Math.min(r,Math.max(a(c),a(h)))-Math.max(0,Math.min(a(c),a(h)))>.05}))}function m0(i,t,e,n,r,s=.05){let o=i.rooms.find(u=>u.points.length>=3&&te([t.x,t.z],u.points));if(!o)return[e,n];let a=o.points,l=Mn(a)>=0?1:-1,c=Hi({...t}),f=e,h=n;for(let u=0;u<2;u++){let d=Hi({...t,x:f,z:h});for(let p=0;p<a.length;p++){let x=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-x[0],g[1]-x[1]);if(m<.05)continue;let b=[(g[0]-x[0])/m,(g[1]-x[1])/m],_=[-b[1]*l,b[0]*l],y=A2(i,o.id,x,g)?r/2:0,M=0;d.forEach((w,R)=>{let v=(w[0]-x[0])*b[0]+(w[1]-x[1])*b[1];if(v<-.01||v>m+.01)return;let C=(w[0]-x[0])*_[0]+(w[1]-x[1])*_[1]-y,S=c[R];(S[0]-x[0])*_[0]+(S[1]-x[1])*_[1]-y<-s||C<M&&(M=C)}),M<-1e-4&&(f-=_[0]*M,h-=_[1]*M)}}return[p0(f),p0(h)]}var R2=500,g0=.12,b0=1.35,C2=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,xc=class{view={target:new Y,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:f}=this.flight,h=Math.min(1,(t-c)/f),u=C2(h);this.view.target.lerpVectors(a.target,l.target,u),this.view.radius=a.radius+(l.radius-a.radius)*u,this.view.theta=a.theta+(l.theta-a.theta)*u,this.view.phi=a.phi+(l.phi-a.phi)*u,h>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=Vh(this.view.phi+this.velocity.phi,g0,b0),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},R2)}else this.down=null,this.pinch=this.pinchState()}onMove(t){var s,o,a,l,c,f;let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){(o=(s=this.events).swipeMove)==null||o.call(s,t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let h=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&((l=(a=this.events).swipeStart)!=null&&l.call(a,this.down.x-h.left,this.down.y-h.top,t.clientX-this.down.x,t.clientY-this.down.y))){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},(f=(c=this.events).swipeMove)==null||f.call(c,t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let h=e.type==="mouse";if(h&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!h))this.pan(n,r);else{let d=this.el.clientHeight||1,p=-n/d*3.2,x=-r/d*2.4;this.view.theta+=p,this.view.phi=Vh(this.view.phi+x,g0,b0),this.velocity={theta:p,phi:x}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let h=this.pinchState();this.pinch&&h&&(this.zoom(this.pinch.dist/Math.max(1,h.dist)),this.pan(h.mid[0]-this.pinch.mid[0],h.mid[1]-this.pinch.mid[1])),this.pinch=h}this.events.change()}onUp(t){var e,n,r,s;if(this.pointers.has(t.pointerId)){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),(n=(e=this.events).drop)==null||n.call(e);return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,(s=(r=this.events).swipeEnd)==null||s.call(r);return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let o=this.el.getBoundingClientRect(),a=t.clientX-o.left,l=t.clientY-o.top,c=performance.now();c-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(a,l)):(this.lastTap=c,this.events.tap(a,l))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change()}zoom(t){this.view.radius=Vh(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new Y(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new Y(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function Vh(i,t,e){return Math.min(e,Math.max(t,i))}function ri(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var _c=5,yc=512,x0=.7,vc=class{projectors=new Map;loader=new ur;loggedIds="";depthMaterial=new Zt({colorWrite:!1,side:se});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Ze(yc,yc);a.depthTexture=new Kn(yc,yc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new qe(60,16/9,x0,40),target:a,matrix:new Te,uniforms:{uProjMat:{value:new Te},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(_c),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{var s;if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=De;let r=n.image;r!=null&&r.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r==null?void 0:r.width,"x",r==null?void 0:r.height),(s=t.texture)==null||s.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){var o,a;for(let l of this.projectors.values()){let c=l.texture?r(l.id):null;if(l.texture&&!c&&!l.noPoseLogged&&(l.noPoseLogged=!0,console.warn(`NeonPlan lab: ${l.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!c){for(let m of l.overlays.values())m.visible=!1;continue}let f=new Set(n.map(m=>m.key));for(let[m,b]of l.overlays)f.has(m)||((o=b.parent)==null||o.remove(b),b.material.dispose(),l.overlays.delete(m));for(let m of n){let b=l.overlays.get(m.key);(!b||b.parent!==m.parent)&&(b&&((a=b.parent)==null||a.remove(b),b.material.dispose()),b=new It(m.geometry,this.material(l,m.masks)),b.renderOrder=2.5,b.frustumCulled=!1,m.parent.add(b),l.overlays.set(m.key,b)),b.geometry!==m.geometry&&(b.geometry=m.geometry),b.visible=m.visible}let h=`${c.position.toArray().map(m=>m.toFixed(3))},${c.direction.toArray().map(m=>m.toFixed(3))},${c.fov},${c.reach},${l.aspect.toFixed(3)},${s}`;if(h===l.poseKey)continue;l.poseKey=h;let u=l.camera,d=Math.min(150,Math.max(20,c.fov))*(Math.PI/180);u.fov=2*Math.atan(Math.tan(d/2)/l.aspect)*180/Math.PI,u.aspect=l.aspect,u.far=c.reach,u.near=x0,u.position.copy(c.position),u.lookAt(c.position.clone().add(c.direction)),u.updateProjectionMatrix(),l.uniforms.uNearFar.value=[u.near,u.far],u.updateMatrixWorld(),l.uniforms.uProjMat.value.multiplyMatrices(u.projectionMatrix,u.matrixWorldInverse);let p=[];for(let m of this.projectors.values())for(let b of m.overlays.values())b.visible&&p.push(b);for(let m of p)m.visible=!1;let x=t.getRenderTarget(),g=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(l.target),t.clear(),t.render(e,u),t.setRenderTarget(x),e.overrideMaterial=g;for(let m of p)m.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){var e,n;for(let r of t.overlays.values())(e=r.parent)==null||e.remove(r),r.material.dispose();(n=t.texture)==null||n.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Zt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?ri(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r==null||r(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function y0(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function v0(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=y0(s,o),c=y0(o,a),f=Math.min(t,l*.45,c*.45),h=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],u=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(f<.005||h[0]*u[0]+h[1]*u[1]+h[2]*u[2]<-.999){n.push(o);continue}let d=[o[0]+h[0]*f,o[1]+h[1]*f,o[2]+h[2]*f],p=[o[0]+u[0]*f,o[1]+u[1]*f,o[2]+u[2]*f];for(let x=0;x<=e;x++){let g=x/e,m=(1-g)*(1-g),b=2*(1-g)*g,_=g*g;n.push([m*d[0]+b*o[0]+_*p[0],m*d[1]+b*o[1]+_*p[1],m*d[2]+b*o[2]+_*p[2]])}}return n.push(i[i.length-1]),n}var _0=new K(7568261),M0=new K(4869974),P2=new K(3116287),S0=new K(3948872),Gh=Er([.35,.85,.4]),w0=10;function Er(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Io(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function T0(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Er(Io(i,t));return[e,Er(Io(i,e))]}function yi(i,t){let e=.5+.5*Math.max(0,t[0]*Gh[0]+t[1]*Gh[1]+t[2]*Gh[2]);return i.clone().multiplyScalar(e)}function vs(i,t,e,n,r,s=!1){let o=Er([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=T0(o),c=(f,h)=>{let u=h/w0*Math.PI*2,d=[a[0]*Math.cos(u)+l[0]*Math.sin(u),a[1]*Math.cos(u)+l[1]*Math.sin(u),a[2]*Math.cos(u)+l[2]*Math.sin(u)];return{p:[f[0]+d[0]*n,f[1]+d[1]*n,f[2]+d[2]*n],n:d}};for(let f=0;f<w0;f++){let h=c(t,f),u=c(t,f+1),d=c(e,f),p=c(e,f+1);i.tri(h.p,p.p,d.p,yi(r,h.n),yi(r,p.n),yi(r,d.n)),i.tri(h.p,u.p,p.p,yi(r,h.n),yi(r,u.n),yi(r,p.n)),s&&(i.tri([...t],u.p,h.p,yi(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,yi(r,o)))}}function I2(i,t,e,n,r,s,o,a){let l=Er(Io(e,n)),c=(h,u,d)=>[t[0]+e[0]*h*r+n[0]*u*s+l[0]*d*o,t[1]+e[1]*h*r+n[1]*u*s+l[1]*d*o,t[2]+e[2]*h*r+n[2]*u*s+l[2]*d*o],f=[];for(let[h,u]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])f.push([h,[c(u,-.5,-.5),c(u,.5,-.5),c(u,.5,.5),c(u,-.5,.5)]]);for(let[h,u]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])f.push([h,[c(-.5,u,-.5),c(.5,u,-.5),c(.5,u,.5),c(-.5,u,.5)]]);for(let[h,u]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])f.push([h,[c(-.5,-.5,u),c(.5,-.5,u),c(.5,.5,u),c(-.5,.5,u)]]);for(let[h,u]of f){let d=yi(a,h);i.tri(u[0],u[1],u[2],d),i.tri(u[0],u[2],u[3],d),i.tri(u[0],u[2],u[1],d),i.tri(u[0],u[3],u[2],d)}}function E0(i,t){if(t.points.length<2)return;let e=t.radius,n=v0(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?_0.clone().multiplyScalar(.55):_0;vs(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);vs(i,o,a,e*1.22,M0,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);vs(i,o,a,e*1.08,t.water?new K(...t.water).multiplyScalar(.9):new K(10475240),!0);for(let l of s(.08)){let[c,f]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];vs(i,c,f,e*1.3,M0,!0)}}else{let[o,a]=s(.055);vs(i,o,a,e*1.4,S0,!0);let[l]=T0(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],f=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];vs(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],f,e*.35,S0,!0);let h=r.open===!1?Er(Io(r.dir,c)):r.dir,u=Er(Io(h,c)),d=[f[0]+h[0]*.045,f[1]+h[1]*.045,f[2]+h[2]*.045];I2(i,d,h,u,.1,.028,.012,P2)}}}var Hh=1.62,Mc=.2,Wh=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=ni(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=hs(a,e.rooms,e.walls??[]);if(!c)continue;let f=fs(this.walls,a,c);if(!f)continue;let h=o.get(f.wall)??[];h.push([f.s-a.width/2+.05,f.s+a.width/2-.05]),o.set(f.wall,h);let u=f.wall,d=u.b[0]-u.a[0],p=u.b[1]-u.a[1],x=Math.hypot(d,p)||1,g=d/x,m=p/x,b=[u.a[0]+g*f.s,u.a[1]+m*f.s],_=u.left+.45,y=u.right+.45;this.doors.push({centre:b,p:[[b[0]-m*_,b[1]+g*_],[b[0]+m*y,b[1]-g*y]]})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c);f<1e-6||this.solids.push({a:a.a,u:[l/f,c/f],len:f,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=Mc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Mc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Mc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>te(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>L2(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Mc+.12,x=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+x[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+x[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let f=new Map,h=(d,p)=>{let x=d<p?`${d}:${p}`:`${p}:${d}`,g=f.get(x);return g===void 0&&(g=this.clear(s[d],s[p]),f.set(x,g)),g};for(;;){let d=-1;for(let p=0;p<o;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<o;p++){if(c[p]||p===d)continue;let x=Math.hypot(s[d][0]-s[p][0],s[d][1]-s[p][1]);a[d]+x>=a[p]||h(d,p)&&(a[p]=a[d]+x,l[p]=d)}}let u=[];for(let d=1;d>0;d=l[d])u.unshift(s[d]);return u}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=hs(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=fs(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c)||1,h=l/f,u=c/f,d=[a.a[0]+h*o.s,a.a[1]+u*o.s],p=[d[0]-u*(a.left+.9),d[1]+h*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(h,-u))}}let e=[...this.rooms].sort((r,s)=>A0(s)-A0(r))[0],n=e?this.freeNear(Gi(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function L2(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function A0(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var Xh=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Hh}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-Hh,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(Gi(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,f=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,f),n=!0}else if(this.path.length){let[l,c]=this.path[0],f=l-r.x,h=c-r.z,u=Math.hypot(f,h),d=1.4*e;u<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=f/u*d,r.z+=h/u*d,this.turnTo=Math.atan2(h,f)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=(t==null?void 0:t.id)??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,f=this.v.camera.fov*Math.PI/180,h=Math.tan(f/2),u=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],x=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*x[2]-p[2]*x[1],p[2]*x[0]-p[0]*x[2],p[0]*x[1]-p[1]*x[0]],m=[-g[0],-g[1],-g[2]],b=[p[0]+x[0]*r*h*u+m[0]*s*h,p[1]+x[1]*r*h*u+m[1]*s*h,p[2]+x[2]*r*h*u+m[2]*s*h];if(b[1]>=-.02)return null;let _=Hh/-b[1];return[l+b[0]*_,c+b[2]*_]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!(c!=null&&c.capture)])},e=null;t(this.surface,"pointerdown",o=>{var a,l;e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},(l=(a=this.surface).setPointerCapture)==null||l.call(a,o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>{var a,l;return!!((l=(a=o.composedPath()[0])==null?void 0:a.closest)!=null&&l.call(a,"input, textarea, select"))};t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function F2(i,t){let e=ve(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Yh(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?F2(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}function qh(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let f=e.length/3,h=c.portrait===!1?10:6,u=c.portrait===!1?6:10,d=D2(c.id)%1e3/1e3;for(let x of So(l,c)){let[g,m,b,_]=x.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),y=[[g,0,0],[m,1,0],[b,1,1],[_,0,1]];for(let M of[0,1,2,0,2,3]){let[w,R,v]=y[M];e.push(w[0],w[1],w[2]),n.push(R,v),r.push(h,u),s.push(d)}}let p=e.length/3-f;p&&o.push({id:c.id,start:f,count:p})}if(!e.length)return null;let a=new Xt;return a.setAttribute("position",new Bt(e,3)),a.setAttribute("uv",new Bt(n,2)),a.setAttribute("aCells",new Bt(r,2)),a.setAttribute("aPhase",new Bt(s,1)),a.setAttribute("aLevel",new Bt(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Lo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function $h(i){let t=new Zt({transparent:!0,blending:Ie,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function D2(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var C0=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,N2=`
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
`,O2=C0,U2=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function R0(i,t){let e=[];for(let[r,s,o]of Rn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Xt;return n.setAttribute("position",new Bt(e,3)),n}function P0(i,t){let e=new Ue;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new It(R0(n.points,o),new un({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:C0,fragmentShader:N2,transparent:!0,blending:Ie,depthWrite:!1,side:se}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,f,h]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],u=c-l>=h-f,d=Math.min(1,n.cover),p=u?[[l-.1,f-.1],[l+(c-l)*d,f-.1],[l+(c-l)*d,h+.1],[l-.1,h+.1]]:[[l-.1,f-.1],[c+.1,f-.1],[c+.1,f+(h-f)*d],[l-.1,f+(h-f)*d]],x=ps(n.points,p);if(x.length>=3){let g=new It(R0(x,n.y+.03),new un({uniforms:{uAxis:{value:u?[1,0]:[0,1]}},vertexShader:O2,fragmentShader:U2,transparent:!0,side:se}));g.renderOrder=6,e.add(g);let m=[];for(let _=0;_<x.length;_++){let y=x[_],M=x[(_+1)%x.length];m.push(y[0],n.y+.032,y[1],M[0],n.y+.032,M[1])}let b=new Xt;b.setAttribute("position",new Bt(m,3)),e.add(new Ke(b,new en({color:5995775,transparent:!0,opacity:.6})))}}}return e}function I0(i){var t,e,n;for(let r of i.children)(t=r.geometry)==null||t.dispose(),(n=(e=r.material)==null?void 0:e.dispose)==null||n.call(e);i.clear()}var L0=["neon","blueprint","day"];function F0(i){return L0.indexOf(i)}var Fo={value:new Y(.22,.88,1)},Do={value:0};function D0(i){let t=/^#?([0-9a-f]{6})$/i.exec((i==null?void 0:i.trim())??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var B2=`
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
  // day: light surfaces that keep their shading and some of their hue, dark blue lines (#645: too bright, too flat \u2013
  // the neon surfaces' dark tones are spread wider, so walls, floors and furniture stand apart)
  if (line) return vec3(0.05, 0.11, 0.27) * clamp(mx * 1.6, 0.6, 1.0);
  vec3 g = vec3(clamp(0.28 + l * 3.6, 0.0, 0.92));
  return mix(g, g * (c / max(mx, 0.001)), 0.3);
}
`;function Qe(i,t,e=!1){let n=i.onBeforeCompile.bind(i),r=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(s,o)=>{n(s,o),s.uniforms.uTheme=t,s.uniforms.uAccent=Fo,s.uniforms.uAccentOn=Do,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${B2}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e?"true":"false"});`)},i.customProgramCacheKey=()=>`${r()}-themed-${e?"l":"s"}`,i}function No(i){return i==="day"?Ui:Ie}var vi=.012,k2=.012;function O0(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],f=[],h=(m,b,_,y,M,w,R)=>{for(let v of[m,b,_,m,_,y])a.push(v[0],v[1],v[2]),l.push(M[0],M[1],M[2]),c.push(w),f.push(R)};i.rooms.forEach((m,b)=>{if(m.points.length<3)return;let _=m.points.map(E=>E[0]),y=m.points.map(E=>E[1]),M=Math.min(..._),w=Math.min(...y),R=Math.max(..._),v=Math.max(...y),C=Math.max(1,Math.ceil((R-M)/r)),S=Math.max(1,Math.ceil((v-w)/r));for(let E=0;E<C;E++)for(let L=0;L<S;L++){let N=M+E*r,T=w+L*r,I=Math.min(N+r,R),P=Math.min(T+r,v),A=ps(m.points,[[N,T],[I,T],[I,P],[N,P]]),D=A.length>=3?Math.abs(X2(A)):0;if(D<1e-4)continue;let B=Y2(A);if(!s.some(z=>te(B,z))){if(D>(I-N)*(P-T)-1e-6){h([N,vi,T],[N,vi,P],[I,vi,P],[I,vi,T],[0,1,0],b,-1);continue}for(let[z,k,W]of Rn(A)){let G=A[z],Q=A[W],j=A[k];(j[1]-G[1])*(Q[0]-G[0])-(j[0]-G[0])*(Q[1]-G[1])<0&&([G,Q]=[Q,G]),h([G[0],vi,G[1]],[j[0],vi,j[1]],[Q[0],vi,Q[1]],[Q[0],vi,Q[1]],[0,1,0],b,-1)}}}});let u=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!zn(m.type));if(d.length){let m=d.flatMap(v=>v.points.map(C=>C[0])),b=d.flatMap(v=>v.points.map(C=>C[1])),_=Math.floor(Math.min(...m)/r)*r,y=Math.floor(Math.min(...b)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-_)/r)),w=Math.max(1,Math.ceil((Math.max(...b)-y)/r)),R=(v,C,S)=>Xm(i,v)-ho(i,v,C,S)+vi;for(let v=0;v<M;v++)for(let C=0;C<w;C++){let S=_+v*r,E=y+C*r,L,N=[S+r/2,E+r/2];L=d.find(I=>I.type==="pool"&&te(N,I.points));for(let I=d.length-1;I>=0&&!L;I--)te(N,d[I].points)&&(L=d[I]);if(!L)continue;let T=(I,P)=>[I,R(L,I,P),P];h(T(S,E),T(S,E+r),T(S+r,E+r),T(S+r,E),[0,1,0],u,-1)}}let p=Math.min(i.cut_height,i.height),x=[];t.forEach((m,b)=>{let _=Math.min(i.height,m.height??i.height),y=Math.min(p,_-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],R=Math.hypot(M,w);if(R<.05)return;let v=[M/R,w/R],C=[-v[1],v[0]],S=e[b],E=V2(m,v,R,n),L=(P,A)=>P?i.rooms.findIndex(D=>D.id===P):A?u:-1;x.push({a:m.a,b:m.b,h:_,ra:L(m.roomLeft,!1),rb:L(m.roomRight,m.exterior),gaps:E});let N=(P,A,D)=>[A,D,...P.filter(B=>B>A+.005&&B<D-.005)].sort((B,z)=>B-z).filter((B,z,k)=>z===0||B>k[z-1]+.005),T=N([y,(y+_)/2,...E.flatMap(P=>[P.y0+.01,P.y1-.01])],.02,_-.02),I=N(E.flatMap(P=>[P.s0,P.s1]),0,R);for(let P of[1,-1]){let A=P>0?m.roomLeft:m.roomRight,D=A?i.rooms.findIndex(G=>G.id===A):m.exterior?u:-1;if(D<0)continue;let B=(P>0?m.left:m.right)+k2,z=[C[0]*P,C[1]*P],k=(G,Q)=>[m.a[0]+v[0]*G+z[0]*B,Q,m.a[1]+v[1]*G+z[1]*B],W=G=>{let Q=k(G,0),j=o==null?void 0:o(Q[0],Q[2]);return j==null?1/0:j-.02};for(let G=0;G<I.length-1;G++){let Q=I[G+1]-I[G],j=Math.max(1,Math.ceil(Q/r));for(let tt=0;tt<j;tt++){let H=I[G]+Q/j*tt,$=I[G]+Q/j*(tt+1),st=(H+$)/2;for(let ct=0;ct<T.length-1;ct++){let it=T[ct],ut=T[ct+1];if(ut-it<.01)continue;let mt=(it+ut)/2;if(E.some(Ct=>st>Ct.s0&&st<Ct.s1&&mt>Ct.y0&&mt<Ct.y1))continue;let bt=it>=p-1e-6?S:qi+S,zt=Math.min(ut,W(H)),Wt=Math.min(ut,W($));zt<=it+.005&&Wt<=it+.005||h(k(H,it),k($,it),k($,Math.max(it,Wt)),k(H,Math.max(it,zt)),[z[0],0,z[1]],D,bt)}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let b=t.find(M=>U0(M,m)&&z2(M,m));if(!b||!b.roomLeft||!b.roomRight)continue;let _=i.rooms.findIndex(M=>M.id===b.roomLeft),y=i.rooms.findIndex(M=>M.id===b.roomRight);_<0||y<0||g.push({id:m.opening.id,a:_,b:y,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(f),doors:g,blockers:x}}function U0(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function z2(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function V2(i,t,e,n){let r=[];for(let s of n){if(!U0(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function G2(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function H2(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function N0(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,f=a*a+l*l+c*c,h=Math.sqrt(f)||1e-6,u=H2(i),d=1/(1+f/(u*u)),p=d*Math.sqrt(d),x=Math.max(0,-(a*r+l*s+c*o)/h);return i.level*p*(.2+.8*x)*G2(i.kind,l/h)}function B0(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((f,h)=>{let u=n[h]??.5;if(!(u<=.01))for(let[d,p]of[[f.a,f.b],[f.b,f.a]]){let x=[0,0,0];for(let m of t){if(m.room!==d)continue;let b=m.x-f.x,_=m.y-f.y,y=m.z-f.z,M=Math.hypot(b,_,y)||1,w=N0(m,f.x,f.y,f.z,b/M,_/M,y/M);x[0]+=m.color[0]*w,x[1]+=m.color[1]*w,x[2]+=m.color[2]*w}let g=Math.max(x[0],x[1],x[2]);g<.01||r.push({x:f.x,y:f.y,z:f.z,color:[x[0]/g,x[1]/g,x[2]/g],level:Math.min(1,g*.9*(.35+.65*u)),kind:"wall",room:p})}});let s=new Map;for(let f of r){let h=i.blockers.filter(d=>d.ra===f.room||d.rb===f.room),u={...f,color:f.color.map(d=>Math.pow(d,1.5)),walls:h};s.set(f.room,[...s.get(f.room)??[],u])}let{pos:o,normal:a,room:l}=i,c=new Float32Array(o.length);for(let f=0;f<l.length;f++){let h=s.get(l[f]);if(!h)continue;let u=f*3,d=0,p=0,x=0;for(let g of h){if(g.walls.length&&W2(g,g.walls,o[u],o[u+1],o[u+2]))continue;let m=N0(g,o[u],o[u+1],o[u+2],a[u],a[u+1],a[u+2]);d+=g.color[0]*m,p+=g.color[1]*m,x+=g.color[2]*m}c[u]=1-Math.exp(-d*e*1.6),c[u+1]=1-Math.exp(-p*e*1.6),c[u+2]=1-Math.exp(-x*e*1.6)}return c}function W2(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=s*c-o*l;if(Math.abs(f)<1e-9)continue;let h=a.a[0]-i.x,u=a.a[1]-i.z,d=(h*c-u*l)/f;if(d<=1e-6||d>=1-1e-6)continue;let p=(h*o-u*s)/f;if(p<0||p>1)continue;let x=i.y+(n-i.y)*d;if(x>=a.h)continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&x>m.y0&&x<m.y1))return!0}return!1}function Zh(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&te([t,e],r.points));return n<0?i.rooms.length:n}function Oo(i,t){return i&&t>=0&&t<i.length?i[t]:t}function X2(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function Y2(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var Uo={open:0,open2:0,tilt:0,tilt2:0,cover:null},k0=2043986,z0=2769520,q2=2242399,Kh=1845831,$2=1450554,_i=16758087,Sc=3662079,Z2=1.2,K2=1.5,J2=1846349,j2=2572395,Q2=1120816,tS=1845831,V0=5995775,G0=9085695,_s=Ft(3662079,.08),eS=.2;function wc(i,t,e,n,r,s,o,a,l,c,f){let h=(d,p,x)=>t(d,p,x),u=[[h(e,r,a),h(n,r,a),h(n,s,a),h(e,s,a),c],[h(e,r,o),h(n,r,o),h(n,s,o),h(e,s,o),Ft(l.getHex(),.6)],[h(e,s,o),h(n,s,o),h(n,s,a),h(e,s,a),l],[h(e,r,o),h(n,r,o),h(n,r,a),h(e,r,a),Ft(l.getHex(),.85)],[h(e,r,o),h(e,s,o),h(e,s,a),h(e,r,a),Ft(l.getHex(),.92)],[h(n,r,o),h(n,s,o),h(n,s,a),h(n,r,a),Ft(l.getHex(),.92)]];for(let[d,p,x,g,m]of u)i.tri(d,p,x,m,m,m,void 0,f),i.tri(d,x,g,m,m,m,void 0,f)}function de(i,t,e,n,r,s,o,a,l,c,f,h){if(a<=f+1e-6)return wc(i,t,e,n,r,s,o,a,l,c,Kt);if(o>=f-1e-6)return wc(i,t,e,n,r,s,o,a,l,c,h);wc(i,t,e,n,r,s,o,f,l,c,Kt),wc(i,t,e,n,r,s,f,a,l,c,h)}function ji(i,t,e,n,r,s,o,a,l,c,f=0){let h=(u,d,p)=>{let x=y=>f?(o-y)/f:.5,g=t(e,r,u),m=t(n,r,u),b=t(n,r,d),_=t(e,r,d);i.tri(g,m,b,a,a,a,[0,x(u),1,x(u),1,x(d)],p),i.tri(g,b,_,a,a,a,[0,x(u),1,x(d),0,x(d)],p)};o<=l+1e-6?h(s,o,Kt):s>=l-1e-6?h(s,o,c):(h(s,l,Kt),h(l,o,c))}function nS(i,t,e,n,r,s,o,a,l,c){let f=t(e,r,o),h=t(n,r,o),u=t(n,s,o),d=t(e,s,o),p=0,x=(s-r)/c;i.tri(f,h,u,a,a,a,[0,p,1,p,1,x],l),i.tri(f,u,d,a,a,a,[0,p,1,x,0,x],l)}function iS(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,f=c+r.width;if(Math.min(i.width,f)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let u=i.sill-r.top;if(u>=-.05&&u<=.3)return!0}return!1}function rS(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside"){let r=i.sill>.05;return{inside:r&&e==="inside",outside:r&&e==="outside"}}let n=i.sill>.3&&!iS(i,t);return{inside:n,outside:n&&i.exterior}}function H0(i,t,e){let n=new ee,r=new ee,s=new ee(!0),o=new K(k0),a=new K(z0),l=[],c=[],f=[];for(let h of i){let u=n.count,d=r.count,p=s.count,x=t.get(h.opening.id)??Uo,g=h.width,{sill:m,top:b,bucket:_}=h,y=(v,C,S)=>[h.start[0]+h.axis[0]*v+h.toRoom[0]*C,S,h.start[1]+h.axis[1]*v+h.toRoom[1]*C],M=(h.faceRoom-h.faceOut)/2,w=h.opening.mark==="closed",R=h.opening.type==="door"&&br(h.opening,h.exterior)==="passage";if(h.opening.type==="door"&&!R||h.opening.type==="garage"){let v=-h.faceOut-.012,C=h.faceRoom+.012,S=h.opening.type==="garage"&&(w?!!x.sensed&&(x.cover??1)>=.95:(x.cover??1)<.95),E=S?Ft(_i,.8):new K(k0),L=S?Ft(_i,1):new K(z0);de(n,y,-.045,.02,v,C,0,b+.045,E,L,e,_),de(n,y,g-.02,g+.045,v,C,0,b+.045,E,L,e,_),de(n,y,.02,g-.02,v,C,b-.02,b+.045,E,L,e,_)}if(h.opening.type==="door"){let v=br(h.opening,h.exterior),C=Fp(v),S=h.opening.swing==="out"?-1:1,E=S>0?h.faceRoom:-h.faceOut,L=h.opening.leaves===2,N=.02,T=g-.02,I=Lp(g,v,h.hingeAtStart,h.opening);if(I){let B=-h.faceOut-.012,z=h.faceRoom+.012,k=E-S*(C?.06:.04)/2,W=.06;for(let[G,Q]of I.panels)de(n,y,G,G+W,B,z,.02,b-.02,o,a,e,_),de(n,y,Q-W,Q,B,z,.02,b-.02,o,a,e,_),de(n,y,G+W,Q-W,B,z,.02,.12,o,a,e,_),ji(r,y,G+W,Q-W,k,.12,b-.02,_s,e,_);N=I.x0,T=I.x1}let P=L?(T-N)/2-.004:T-N,A=C?.06:.04;C&&(de(n,y,.02,g-.02,-h.faceOut-.02,h.faceRoom,0,.02,new K(Kh),a,e,_),h.exterior&&de(n,y,g/2-.08,g/2+.08,-h.faceOut-.1,-h.faceOut,b+.1,b+.17,Ft(_i,.55),Ft(_i,.85),e,Kt));let D=R?[]:[[h.hingeAtStart,x.open]];L&&!R&&D.push([!h.hingeAtStart,x.open2??0]);for(let[B,z]of D){let k=Math.min(1,Math.max(0,z)),W=v==="sliding"?0:k*K2,G=v==="sliding"?k*P:0,Q=(mt,bt,zt)=>{let Wt=mt*Math.cos(W)-bt*Math.sin(W)-G,Ct=E+S*(bt*Math.cos(W)+mt*Math.sin(W)+(G?.05:0));return y(B?N+Wt:T-Wt,Ct,zt)},j=k>.05?Kt:_,tt=w?!!x.sensed&&k<.05:k>.9,H=tt?Ft(_i,.7):new K(C?Q2:J2),$=tt?Ft(_i,.9):new K(C?tS:j2);v==="glass"?(de(n,Q,0,.05,-A,0,.01,b-.01,H,$,e,j),de(n,Q,P-.05,P,-A,0,.01,b-.01,H,$,e,j),de(n,Q,.05,P-.05,-A,0,.01,.12,H,$,e,j),de(n,Q,.05,P-.05,-A,0,b-.08,b-.01,H,$,e,j),ji(r,Q,.05,P-.05,-A/2,.12,b-.08,_s,e,j)):de(n,Q,0,P,-A,0,.01,b-.01,H,$,e,j),v==="front_glass"?ji(r,Q,.12,P-.12,.001,b*.55,b-.18,_s,e,j):C&&ji(r,Q,.1,.18,.001,.3,b-.3,_s,e,j);let st=Math.min(1.05,b*.5),ct=C?.3:.012,it=C?P-.11:P-.16,ut=C?P-.08:P-.05;de(n,Q,it,ut,.004,.05,st-ct,st+ct,new K(V0),new K(G0),e,j),de(n,Q,it,ut,-A-.05,-A-.004,st-ct,st+ct,new K(V0),new K(G0),e,j),x.unlocked&&B===h.hingeAtStart&&de(n,Q,P-.022,P+.004,-A-.006,.006,.03,b-.03,Ft(Sc,.85),Ft(Sc,1),e,j)}}else if(h.opening.type==="garage"){let v=Math.min(1,Math.max(0,x.cover??1)),C=new K(13951231),S=h.faceRoom-.03,E=b*(1-v);v>.01&&ji(s,y,.02,g-.02,S,E,b,C,e,_,.5);let L=(1-v)*b;L>.01&&nS(s,y,.02,g-.02,S,S+L,b+.03,C,_,.5)}else if(br(h.opening,h.exterior)==="glass_wall"){de(n,y,0,.04,M-.025,M+.025,m,b,o,a,e,_),de(n,y,g-.04,g,M-.025,M+.025,m,b,o,a,e,_),de(n,y,.04,g-.04,M-.025,M+.025,m,m+.03,o,a,e,_),de(n,y,.04,g-.04,M-.025,M+.025,b-.04,b,o,a,e,_);let S=Math.max(1,Math.round((g-2*.04)/.9)),E=(g-2*.04)/S;for(let L=1;L<S;L++){let N=.04+L*E;de(n,y,N-.02,N+.02,M-.025,M+.025,m+.03,b-.04,o,a,e,_)}for(let L=0;L<S;L++){let N=.04+L*E+(L?.02:0),T=.04+(L+1)*E-(L<S-1?.02:0);ji(r,y,N,T,M,m+.03,b-.04,_s,e,_)}}else{de(n,y,0,.06,M-.035,M+.035,m,b,o,a,e,_),de(n,y,g-.06,g,M-.035,M+.035,m,b,o,a,e,_),de(n,y,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),o,a,e,_),de(n,y,.06,g-.06,M-.035,M+.035,b-.06,b,o,a,e,_);let S=rS(h,i);S.inside&&de(n,y,-.04,g+.04,M+.035,h.faceRoom+.07,m-.03,m,new K(Kh),a,e,_),S.outside&&de(n,y,-.03,g+.03,-h.faceOut-.06,M-.035,m-.04,m-.02,new K(Kh),a,e,_);let E=.055,L=m+(m>.05?.06:.03),N=b-.06,T=M+.035,I=M+.035+.06,A=h.opening.leaves===2?[{atStart:h.hingeAtStart,x0:h.hingeAtStart?.06:g/2,x1:h.hingeAtStart?g/2:g-.06,open:x.open,tilt:x.tilt},{atStart:!h.hingeAtStart,x0:h.hingeAtStart?g/2:.06,x1:h.hingeAtStart?g-.06:g/2,open:x.open2??0,tilt:x.tilt2??0}]:[{atStart:h.hingeAtStart,x0:.06,x1:g-.06,open:x.open,tilt:x.tilt}];for(let D of A){let B=D.open>.02||D.tilt>.02,z=w?!!x.sensed&&!B:B,k=z?Ft(_i,.75):new K(q2),W=z?Ft(_i,.95):a,G=D.x0,Q=D.x1,j=Q-G,tt=D.open*Z2*(h.opening.swing==="out"?-1:1),H=D.tilt*eS,$=(ct,it,ut)=>{let mt=ut-L,bt=it+mt*Math.sin(H),zt=L+mt*Math.cos(H),Wt=ct*Math.cos(tt)-(bt-T)*Math.sin(tt);bt=T+(bt-T)*Math.cos(tt)+ct*Math.sin(tt);let Ct=D.atStart?G+Wt:Q-Wt;return y(Ct,bt,zt)},st=Math.abs(tt)>.05?Kt:_;if(de(n,$,0,E,T,I,L,N,k,W,e,st),de(n,$,j-E,j,T,I,L,N,k,W,e,st),de(n,$,E,j-E,T,I,L,L+E,k,W,e,st),de(n,$,E,j-E,T,I,N-E,N,k,W,e,st),ji(r,$,E,j-E,(T+I)/2,L+E,N-E,z?Ft(_i,.16):_s,e,st),x.unlocked&&D.atStart===h.hingeAtStart&&de(n,$,j-.022,j+.004,T-.006,I+.006,L+.02,N-.02,Ft(Sc,.85),Ft(Sc,1),e,st),br(h.opening,h.exterior)==="bars"){let ct=(L+N)/2,it=(T+I)/2;de(n,$,E,j-E,it-.012,it+.012,ct-.012,ct+.012,k,W,e,st),de(n,$,j/2-.012,j/2+.012,it-.012,it+.012,L+E,N-E,k,W,e,st)}}}if(x.cover!==null){let v=-h.faceOut,C=b+.2;de(n,y,-.05,g+.05,v-.15,v,b,C,new K($2),a,e,_);let S=Math.min(1,Math.max(0,x.cover));if(S>.01){let E=b-S*(b-m);ji(s,y,0,g,v-.07,E,b,new K(16777215),e,_,.045)}}l.push({id:h.opening.id,start:u,end:n.count}),c.push({id:h.opening.id,start:d,end:r.count}),f.push({id:h.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:f}}var sS=.3,W0=2.6;function X0(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),f=c-l>=a-o,h=e*.7071,u=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],R=[...w,[M[0]+h,M[1]+h],[M[0]-h,M[1]+h],[M[0]+h,M[1]-h],[M[0]-h,M[1]-h]];return w.every(v=>te(v,i))&&!n.some(v=>R.some(C=>te(C,v)))},d=(M,w)=>u(f?[M,w]:[w,M]),p=(M,w)=>{let R=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let v=1;v<R;v++)if(!u([M[0]+(w[0]-M[0])*v/R,M[1]+(w[1]-M[1])*v/R]))return!1;return!0},[x,g,m,b]=f?[o,a,l,c]:[l,c,o,a],_=[],y=!0;for(let M=x+e;M<=g-e+1e-6;M+=t){let w=null,R=null,v=.05;for(let L=m;L<=b+1e-6;L+=v)if(d(M,L)&&(R??=L),(!d(M,L)||L+v>b+1e-6)&&R!==null){let N=d(M,L)?L:L-v;(!w||N-R>w[1]-w[0])&&(w=[R,N]),R=null}if(!w||w[1]-w[0]<.2)continue;let C=L=>{let[N,T]=L?w:[w[1],w[0]];return[f?[M,N]:[N,M],f?[M,T]:[T,M]]},S=C(y),E=_[_.length-1];if(E&&n.length&&!p(E,S[0])){let L=C(!y);if(!p(E,L[0]))continue;S=L,y=!y}_.push(S[0],S[1]),y=!y}return _}function jh(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var Jh=i=>Math.atan2(Math.sin(i),Math.cos(i));function Y0(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=Jh(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),W0*e),!0)}let a=Math.atan2(r,s),l=Jh(a-i.heading);if(i.heading=Jh(i.heading+Math.sign(l)*Math.min(Math.abs(l),W0*e)),Math.abs(l)<.35){let c=Math.min(o,sS*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function q0(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}function $0(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var Cn=null,Z0=new Map;function J0(i,t=0){let e=new ee,n=new Fe,r=ve(i.type);if(r!=null&&r.light)cc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Qh(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};lc(e,n,new ee,s,0,!0)}return{buf:e,lines:n}}function oS(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=Z0.get(r);if(s)return s;e&&lo(e),Cn??=new mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Cn.setSize(t,t,!1),Cn.setClearColor(0,0);let{buf:o,lines:a}=J0(i),l=new Li,c=new It(o.geometry(),new Zt({vertexColors:!0,color:new K(n,n,n)})),f=new Ke(a.geometry(),new en({vertexColors:!0,color:new K(n*1.8,n*1.8,n*1.8)}));l.add(c,f);let h=new pn().setFromObject(c),u=h.getCenter(new Y),d=new Jn(-1,1,1,-1,.01,100);d.position.copy(u).add(new Y(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(u),d.updateMatrixWorld();let p=.05;for(let m of[h.min.x,h.max.x])for(let b of[h.min.y,h.max.y])for(let _ of[h.min.z,h.max.z]){let y=new Y(m,b,_).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(y.x),Math.abs(y.y))}let x=p*1.12;d.left=-x,d.right=x,d.top=x,d.bottom=-x,d.updateProjectionMatrix(),Cn.render(l,d);let g=Cn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose(),Z0.set(r,g),g}function aS(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=K0.get(s);if(o)return o;n&&lo(n);let{buf:a,lines:l}=J0(i,t),c=new It(a.geometry(),new Zt({vertexColors:!0,color:new K(r,r,r)})),f=new Ke(l.geometry(),new en({vertexColors:!0,color:new K(r*1.8,r*1.8,r*1.8)})),h=new pn().setFromObject(c);if(h.isEmpty())return null;let u=h.min.x,d=h.max.x,p=Math.max(0,h.min.y),x=h.max.y,g=Math.max(1,Math.min(1024,Math.round((d-u)*e))),m=Math.max(1,Math.min(1024,Math.round((x-p)*e)));Cn??=new mr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Cn.setPixelRatio(1),Cn.setSize(g,m,!1),Cn.setClearColor(0,0);let b=new Li;b.add(c,f);let _=new Jn(u,d,x,p,.01,100);_.position.set(0,0,50),_.lookAt(0,0,0),_.updateProjectionMatrix(),Cn.render(b,_);let y=Cn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose();let M={url:y,x0:u,x1:d,y0:p,y1:x};return K0.set(s,M),M}var K0=new Map;var V3={Group:Ue,Mesh:It,MeshBasicMaterial:Zt,CanvasTexture:fi,Color:K,PlaneGeometry:di,BufferGeometry:Xt,Float32BufferAttribute:Bt,DoubleSide:se},Q0={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},lS=2.4,tg=1.4,cS=.22,eg=.94,ng=140,ig=1.5;function uS(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,f=l-o,h=c*c+f*f||1,u=Math.max(0,Math.min(1,((i-s)*c+(t-o)*f)/h));n=Math.min(n,Math.hypot(i-(s+c*u),t-(o+f*u)))}return n}var ef=32,hS=500,rg=160,fS=33,sg=.028,dS=.026,pS=.012,mS=.09,Qt=2767456,gS=1911110,bS=1,og=new Set(["ceiling","ceiling_fan","downlight","spot","panel","pendant","strip"]),Tc=450,ag=125,xS=200,yS=.08,vS=2*Math.PI/1.4,Ec={ceiling:[.4,.4,.08],ceiling_fan:[1.2,1.2,.35],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},_S=new K(1714765);function MS(){let i=navigator;return $0(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var nf=class{host;options;renderer;scene=new Li;camera=new qe(38,1,.1,400);controls;labels;root=new Ue;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;fanFloors=new Set;fanAngle=0;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new Ke(new Xt,new en({color:10471679,transparent:!0,opacity:.4,blending:Ie,depthWrite:!1}));snow=new Kr(new Xt,new lr({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new It(new ks(1,28),new Zt({color:16767370,transparent:!0,opacity:0,blending:Ie,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=wS(),this.blindTexture=ES(),this.haloTexture=CS(),this.ground=new It(new di(1,1),new Zt({transparent:!1,blending:Ie,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=this.decor(0);t!==null&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t))}decor(t,e){return q0(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){lo(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,Mp(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(f=>Xl(f.floor).some(h=>h.id===t)),n=e?Xl(e.floor).find(f=>f.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let f=e.floor.elevation+e.ty,[h,u]=Gi(n.points),d=r.target??{x:h,y:.3,z:u};this.controls.flyTo({target:new Y(d.x,d.y+f,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=Gi(n.points),a=n.points.map(f=>f[0]),l=n.points.map(f=>f[1]),c=new Y(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new Y(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.fanFloors=new Set(t.filter(n=>n.fanBlades&&(n.fanSpeed??0)>0).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){var n;this.solarLevels=t;let e=!1;for(let r of((n=this.roof)==null?void 0:n.lives)??[])Lo(r,t)&&(e=!0);for(let r of this.floors)r.solarLive&&Lo(r.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>{var s;return`${r.id}:${r.floorId}:${r.points.length}:${(s=r.points[0])==null?void 0:s.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`}).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(I0(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=P0(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){var n,r,s;let e=o=>o.map(a=>`${a.id}:${a.floorId}:${a.x},${a.z}:${a.level.toFixed(2)}:${a.playing?1:0}:${a.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(o=>o.playing);for(let o of this.floors){let a=o.soundGroup??=(()=>{let u=new Ue;return u.renderOrder=6,o.group.add(u),u})();for(let u of[...a.children])a.remove(u),(n=u.geometry)==null||n.dispose(),(s=(r=u.material)==null?void 0:r.dispose)==null||s.call(r);let l=t.filter(u=>u.floorId===o.floor.id),c=.03;for(let u of l)if(u.playing)for(let d=0;d<3;d++){let p=new It(new Ws(.92,1,48),new Zt({color:3662079,transparent:!0,opacity:0,blending:Ie,depthWrite:!1,side:se}));p.rotation.x=-Math.PI/2,p.position.set(u.x,c+d*.002,u.z),p.userData={sound:!0,phase:d/3,level:u.level},p.frustumCulled=!1,a.add(p)}let f=[],h=new Set;for(let u of l)for(let d of u.members){let p=l.find(g=>g.id===d);if(!p||p===u)continue;let x=[u.id,p.id].sort().join("|");h.has(x)||(h.add(x),f.push(u.x,c+.02,u.z,p.x,c+.02,p.z))}if(f.length){let u=new Xt;u.setAttribute("position",new Bt(f,3));let d=new Ke(u,new en({color:3662079,transparent:!0,opacity:.45,blending:Ie,depthWrite:!1}));d.userData={soundLine:!0},a.add(d)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=Bo(r),o=tf(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let f=Math.min(1,c.opacity);for(let h of Rn(c.points))for(let u of h)s.push(c.points[u][0],c.y,c.points[u][1]),o.push(c.color[0],c.color[1],c.color[2],f)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Xt;l.setAttribute("position",new Bt(s,3)),l.setAttribute("color",new Bt(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ee;for(let s of e)E0(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(u,d,p,x,g)=>{let m=Math.hypot(p-u,x-d)||1,b=-(x-d)/m*(g/2+o),_=(p-u)/m*(g/2+o);a.push(u+b,d+_,0,p+b,x+_,0,p-b,x-_,0,u+b,d+_,0,p-b,x-_,0,u-b,d-_,0)},f=.14+o;for(let u=0;u<18;u++){let d=u/18*Math.PI*2,p=(u+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*f,1.47+Math.sin(d)*f,0,Math.cos(p)*f,1.47+Math.sin(p)*f,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let h=new Xt;return h.setAttribute("position",new Bt(a,3)),h},n=new It(e(0),new Zt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:se})),r=new It(e(.05),new Zt({color:t,transparent:!0,opacity:.22,blending:Ie,depthWrite:!1,side:se}));n.renderOrder=6,r.renderOrder=5;let s=new Ue;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{var u,d;l.stopPropagation();let c=this.persons.find(p=>p.id===a);if(!(c!=null&&c.entity))return;let f=l.currentTarget.getBoundingClientRect(),h=this.host.getBoundingClientRect();(d=(u=this.options).onDeviceHold)==null||d.call(u,c.entity,f.left+f.width/2-h.left,f.top+f.height/2-h.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=D0(t),n=e?1:0;n===Do.value&&(!e||Fo.value.equals(new Y(...e)))||(Do.value=n,e&&Fo.value.set(...e),this.invalidate())}setTheme(t){var s;if(t===this.theme)return;this.theme=t,this.themeUniform.value=F0(t),Pm(t!=="neon"),(s=this.building)!=null&&s.floors.some(o=>o.furniture.some(a=>a.type==="waste_bin"||km(a.type)))&&this.rebuild();let n=No(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let e of this.floors)this.buildSun(e);this.placeSky(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new K(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new Ds(n,.01+.035*t.fog):null;let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}seedParticles(t,e,n){let r=t.geometry.getAttribute("position");if(((r==null?void 0:r.count)??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let f=s.x0+Math.random()*(s.x1-s.x0),h=s.y0+Math.random()*(s.y1-s.y0),u=s.z0+Math.random()*(s.z1-s.z0);o.set([f,h,u],c*3),n&&o.set([f,h-.45,u],c*3+3)}t.geometry.dispose();let l=new Xt;l.setAttribute("position",new Bt(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let f=0;f<l.length;f+=6){let h=l[f+1]-c,u=l[f]+o*n;h<r.y0&&(h+=s,u=r.x0+Math.random()*(r.x1-r.x0)),u>r.x1&&(u-=r.x1-r.x0),l[f]=u,l[f+1]=h,l[f+3]=u-o*.05,l[f+4]=h-.45,l[f+5]=l[f+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let f=0;f<l.length;f+=3){let h=l[f+1]-(.9+.6*e.snow)*n,u=l[f]+(o+Math.sin(c+f)*.4)*n;h<r.y0&&(h+=s,u=r.x0+Math.random()*(r.x1-r.x0)),u>r.x1&&(u-=r.x1-r.x0),l[f]=u,l[f+1]=h}a.needsUpdate=!0}return!0}placeSky(){var d;let t=this.sun,e=this.weather,n=(e==null?void 0:e.cloud)??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(((d=this.building)==null?void 0:d.settings.north)??0)*le,o=(r?t.azimuth+180:t.azimuth)*le,a=Math.max(10,Math.abs(t.elevation))*le,l=this.weatherBox,c=new Y((l.x0+l.x1)/2,l.y0,(l.z0+l.z1)/2),f=Math.min(300,Math.max(80,this.houseRadius*5)),h=new Y(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(c).addScaledVector(h,f),this.skyDisc.scale.setScalar(f*(r?.03:.04)),this.skyDisc.lookAt(c);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e)for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n)}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){var e,n;this.floorInfo=t;for(let r of this.floors){let s=r.label.querySelector("span"),o=t.get(r.floor.id)??((n=(e=this.options).floorInfo)==null?void 0:n.call(e,r.floor))??"";s&&s.textContent!==o&&(s.textContent=o,r.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??Uo,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=this.awnings.get(n)??{cur:r.out??0,to:r.out??0,speed:0};r.out===null?(s.to=r.moving>0?1:0,s.speed=1/Math.max(2,r.time)):(s.to=r.out,s.speed=0),this.awnings.set(n,s)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)e.floor.furniture.some(n=>t.has(n.id))&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/rg),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)r.floor.furniture.some(s=>n.has(s.id))&&this.buildFridges(r);return!0}buildFridges(t){var n,r;let e=new ee;for(let s of t.floor.furniture){if(s.type!=="fridge_smart")continue;let o=this.fridges.get(s.id);Dm(e,s,Je(t.floor,s),(o==null?void 0:o.l)??0,(o==null?void 0:o.r)??0)}for(let s of t.floor.furniture)s.type==="awning"&&Fm(e,s,Je(t.floor,s),((n=this.awnings.get(s.id))==null?void 0:n.cur)??0);for(let s of t.floor.furniture){let o=Gl(s.type),a=o?ve(s.type):void 0;o&&a&&Gm(e,a,o,s,Je(t.floor,s),((r=this.awnings.get(s.id))==null?void 0:r.cur)??0)}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new vc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*le,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*le)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new Y(e.x,a,e.z),direction:new Y(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(_c);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(_c),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){var t,e,n,r,s;this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let o of[this.rain,this.snow,this.skyDisc])o.geometry.dispose(),o.material.dispose();this.resizeObserver.disconnect(),(t=this.intersection)==null||t.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let o of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(o,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),(e=this.groundTexture)==null||e.dispose(),this.haloTexture.dispose();for(let o of this.robots.values()){o.led.dispose();for(let a of o.own)a.dispose()}this.robots.clear(),(n=this.robotGeo)==null||n.dispose(),(r=this.robotLedGeo)==null||r.dispose(),(s=this.robotMat)==null||s.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&MS();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new mr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=De,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new xc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>{var e,n;return this.swipe&&((n=(e=this.options).onDeviceSwipe)==null?void 0:n.call(e,this.swipe.entity,"move",t,this.swipe.x,this.swipe.y))},swipeEnd:()=>{var t,e;this.swipe&&((e=(t=this.options).onDeviceSwipe)==null||e.call(t,this.swipe.entity,"end",0,this.swipe.x,this.swipe.y)),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),doubleTap:(t,e)=>{var r,s;let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):(s=(r=this.options).onBack)==null||s.call(r)}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){var t;for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let n of e.screenPics.values())n.mesh.material.dispose(),(t=n.texture)==null||t.dispose();e.group.traverse(n=>{let r=n.geometry;r==null||r.dispose()});for(let n of Object.values(e.materials))this.retired.push(n);this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",f=>{if(this.furnish){this.pendingDevice=t;return}f.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{var d,p;l=!0;let h=e.getBoundingClientRect(),u=this.host.getBoundingClientRect();(p=(d=this.options).onDeviceHold)==null||p.call(d,t,h.left+h.width/2-u.left,h.top+h.height/2-u.top)},hS)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",f=>f.preventDefault()),e.addEventListener("click",f=>{var d,p,x,g;if(f.stopPropagation(),this.furnish){this.selectDevice(t),(p=(d=this.options).onDeviceSelect)==null||p.call(d,t);return}if(l)return;let h=e.getBoundingClientRect(),u=this.host.getBoundingClientRect();(g=(x=this.options).onDeviceTap)==null||g.call(x,t,h.left+h.width/2-u.left,h.top+h.height/2-u.top)}),e.addEventListener("keydown",f=>{var h,u;if(f.key==="Enter"&&f.shiftKey||f.key==="ContextMenu"){f.preventDefault();let d=e.getBoundingClientRect(),p=this.host.getBoundingClientRect();(u=(h=this.options).onDeviceHold)==null||u.call(h,t,d.left+d.width/2-p.left,d.top+d.height/2-p.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=O0(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=lg(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Oo(r,a.ra),a.rb=Oo(r,a.rb)}t.lightSurface=n;let s=new Xt;s.setAttribute("position",new Bt(n.pos,3)),s.setAttribute("color",new Bt(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Bt(n.fold,1));let o=new or(new Uint32Array(n.pos.length/3),1);o.setUsage(Pu),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=ve(t.pack);if(!e)return null;let[n,r,s]=t.size??Ec.wall;return Hm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Zh(t.floor,n.x,n.z),a=Oo(t.lightZones,o),[l,,c]=n.size??(n.lamp?Ec[n.lamp]:[.3,.3,.3]),f=n.base??0,h={ceiling:[s-.12,"ceiling"],ceiling_fan:[s-.3,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],floor:[f+c-.15,"omni"],uplight:[f+c,"up"],table:[f+c-.1,"omni"],wall:[f+.1,"wall"],strip:[f+Math.max(.02,c)-.01,f<bS?"up":"ceiling"],bollard:[f+c-.08,"ceiling"],garden:[f+c,"up"]},[u,d]=n.lamp?h[n.lamp]:[n.y,"omni"],p=n.lightY??u,x=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*le,m=!!n.upright||Math.abs(n.roll??0)>45;for(let b of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:f+l*(.5+b),z:n.z,color:x,level:r.level*.55,kind:"omni",room:a});else{let _=(n.rise??0)*le;e.push({x:n.x+Math.cos(g)*l*b*Math.cos(_),y:p+Math.sin(_)*l*b,z:n.z+Math.sin(g)*l*b*Math.cos(_),color:x,level:r.level*.55,kind:m||_?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:x,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let f of this.devices){if(f.floorId!==n.floor.id)continue;let h=this.glowOf(f);if(!h)continue;let u=te([f.x,f.z],s)?0:uS(f.x,f.z,s);if(u>ig)continue;let d=h.level*(1-u/ig);for(let p=0;p<3;p++)a[p]+=h.color[p]*d;o+=d}if(o<.02)continue;let[l,c]=Gi(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:Oo(t.lightZones,Zh(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t),r=e.doors.map(h=>{let u=t.geo.openings.find(p=>p.opening.id===h.id);if(u&&br(u.opening,u.exterior)==="passage")return 1;let d=t.openings.get(h.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(h=>`${h.x.toFixed(2)},${h.y.toFixed(2)},${h.z.toFixed(2)},${h.kind},${h.level.toFixed(3)},${h.color.map(u=>u.toFixed(3)).join("/")}`).join(";")+"|"+r.map(h=>h.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=B0(e,n,.42,r);if(this.roomTint){let h=t.floor.rooms.length;for(let u=0;u<e.room.length;u++)if(e.room[u]!==h)for(let d=0;d<3;d++)l[u*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,f=0;for(let h=0;h<l.length/18;h++){let u=!1;for(let d=h*18;d<h*18+18&&!u;d++)u=l[d]>.004;if(u)for(let d=0;d<6;d++)c[f++]=h*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,f),t.glowMesh.visible=f>0}makeMaterials(t){return{floor:Qe(new Zt({vertexColors:!0}),this.themeUniform),pattern:TS(this.patternTexture),wall:Qe(ri(new Zt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:ri(new Zt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Zt({vertexColors:!0,blending:Zs,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-1}),lines:Qe(ri(new en({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:ri(new Zt({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:Qe(ri(new Zt({vertexColors:!0,side:se}),t),this.themeUniform),glass:ri(new Zt({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se}),t),blinds:Qe(ri(new Zt({map:this.blindTexture,vertexColors:!0,side:se}),t),this.themeUniform),water:Qe(new Zt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:se}),this.themeUniform),flow:RS(this.flowTime),pipeLine:AS(this.flowTime),patch:new Zt({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Zt({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:$h(this.flowTime),lamps:Qe(new Zt({vertexColors:!0}),this.themeUniform),halos:new lr({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1}),cones:new Zt({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se}),screens:new Zt({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se}),earth:Qe(new Zt({vertexColors:!0}),this.themeUniform),earthWell:Qe(new Zt({vertexColors:!0,side:se}),this.themeUniform),earthLines:Qe(new en({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){var s,o,a,l;let t=new Map(this.floors.map(c=>[c.floor.id,{y:c.y,o:c.o}])),e=new Map(this.floors.map(c=>[c.floor.id,c.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((c,f)=>c.elevation-f.elevation);for(let c of n.floors){let f=((s=n.settings.roof)==null?void 0:s.solar)??[],h=((o=Oh(n))==null?void 0:o.id)===c.id?f.filter(xt=>xt.face===Nh).map(xt=>({field:xt,face:Zm(n,xt)})):[],u=f.filter(xt=>xt.face.startsWith(`wall:${c.id}:`));if(u.length){let xt=new Map($m(n,c.id).map(ne=>[ne.key,ne]));for(let ne of u){let Se=xt.get(ne.face);Se&&h.push({field:ne,face:Se})}}let p=fh(n).some(xt=>Vp(xt,c.elevation+c.height)&&ph(xt,c.elevation))?(xt,ne)=>{let Se=Gp(n,xt,ne,c.elevation);return Se===null?null:Se-c.elevation}:void 0,x=c0(Yh(c,this.parked),n.settings.wall_exterior,n.settings.wall_interior,u0(n.floors,c),h,p),g={standing:{value:65535},glass:{value:0}},m=this.makeMaterials(g),b=new Ue,_=new It(x.floor,m.floor),y=new It(x.shadow,m.shadow);y.renderOrder=1;let M=new It(x.floor,m.pattern);M.renderOrder=2;let w=new It(new Xt,m.glow);w.renderOrder=3,w.visible=!1;let R=new It(new Xt,m.frames),v=new It(new Xt,m.blinds),C=new It(new Xt,m.glass);C.renderOrder=4;let S=new It(new Xt,m.lamps);S.visible=!1;let E=new It(new Xt,m.cones);E.visible=!1,E.renderOrder=3;let L=new Kr(new Xt,m.halos);L.visible=!1,L.renderOrder=7;let N=new It(new Xt,m.cones);N.visible=!1,N.renderOrder=7;let T=new It(new Xt,m.cones);T.visible=!1,T.renderOrder=7;let I=new It(new Xt,m.lamps);I.visible=!1;let P=new It(new Xt,m.lamps);P.visible=!1;let A=new It(new Xt,m.patch);A.visible=!1,A.renderOrder=3;let D=new It(new Xt,m.patchGlow);D.visible=!1,D.renderOrder=3;let B=new It(new Xt,m.screens);B.visible=!1,B.renderOrder=5;let z=new It(new Xt,m.flow);z.renderOrder=5,z.frustumCulled=!1;let k=new It(new Xt,m.pipeLine),W=new It(new Xt,m.pipeLine),G=new It(new Xt,m.pipeLine);for(let xt of[k,W,G])xt.renderOrder=4,xt.frustumCulled=!1,xt.visible=!1;let Q=qh(h,c.elevation),j=Q?new It(Q.geometry,m.solarLive):null;j&&(j.renderOrder=6,Lo(Q,this.solarLevels));for(let xt of[R,v,C])xt.frustumCulled=!1;let tt=new It(x.walls,m.glassWall),H=new It(x.walls,m.wall);tt.renderOrder=6;let $=new It(x.water,m.water);$.renderOrder=4;let st=Math.min(...n.floors.filter(xt=>xt.rooms.length).map(xt=>xt.elevation)),ct=d0(n,c,x.openings,c.elevation===st),it=ct?[new It(ct.earth.geometry(),m.earth),new It(ct.wells.geometry(),m.earthWell),new Ke(ct.lines.geometry(),m.earthLines)]:[];for(let xt of it)xt.userData.earth=!0;b.add(_,y,M,w,H,$,new Ke(x.lines,m.lines),R,v,C,z,k,W,G,S,E,L,N,T,I,P,A,D,B,tt,...j?[j]:[],...it),this.root.add(b);let ut=document.createElement("button");ut.className="fp3d-pin fp3d-pin-floor",ut.dataset.floor=c.id;let mt=document.createElement("b");mt.textContent=c.name||"\u2013";let bt=document.createElement("span");bt.textContent=this.floorInfo.get(c.id)??((l=(a=this.options).floorInfo)==null?void 0:l.call(a,c))??"",ut.append(mt,bt),ut.addEventListener("click",()=>{var xt,ne;return(ne=(xt=this.options).onFloorTap)==null?void 0:ne.call(xt,c.id)}),this.labels.append(ut);let zt=t.get(c.id),Wt=[],Ct=null;for(let xt of Xl(c)){let ne=document.createElement("button");ne.className="fp3d-pin",ne.dataset.room=xt.id,ne.dataset.floor=c.id,this.fillRoomPin(ne,xt.name,this.roomInfo.get(xt.id)),ne.addEventListener("click",()=>{var me,X;return(X=(me=this.options).onRoomTap)==null?void 0:X.call(me,c.id,xt.id)}),this.labels.append(ne);let[Se,_e]=Gi(xt.points);if(Wt.push({pin:ne,room:xt,cx:Se,cz:_e}),!xt.outdoor)for(let[me,X]of xt.points)Ct??={x0:me,x1:me,z0:X,z1:X},Ct.x0=Math.min(Ct.x0,me),Ct.x1=Math.max(Ct.x1,me),Ct.z0=Math.min(Ct.z0,X),Ct.z1=Math.max(Ct.z1,X)}this.floors.push({floor:c,rank:r.indexOf(c),group:b,geo:x,floorMesh:_,shadowMesh:y,patternMesh:M,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:R,glassMesh:C,blindsMesh:v,flowMesh:z,pipeLineMesh:k,pipeHouseMesh:W,pipeFloorMesh:G,pipeLineSig:"",solarMesh:j,solarLive:Q,lampMesh:S,sunMesh:E,sunSig:"",haloMesh:L,coneMesh:N,trailMesh:T,fridgeMesh:I,pipeMesh:P,pipeSig:"",patchMesh:A,patchGlowMesh:D,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],glassTris:[],blindTris:[],wallMesh:H,screenMesh:B,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:Ct,roomPins:Wt,labelSize:null,materials:m,mask:g,openings:new Map,y:(zt==null?void 0:zt.y)??0,o:(zt==null?void 0:zt.o)??1,ty:0,to:1,appliedO:-1,lightAt:0,label:ut})}this.floorMap=new Map(this.floors.map(c=>[c.floor.id,c]));for(let c of this.floors)this.buildFridges(c),this.buildPipes(c),this.buildPatches(c);this.labelsDirty=!0,this.floorId&&!n.floors.some(c=>c.id===this.floorId)&&(this.floorId=null);for(let c of this.floors){this.buildLamps(c),this.buildScreens(c);let f=e.get(c.floor.id);for(let h of c.geo.openings)c.openings.set(h.opening.id,(f==null?void 0:f.get(h.opening.id))??this.openingTargets.get(h.opening.id)??Uo);this.buildOpenings(c),this.buildFlows(c),c.poolGroup=void 0,this.buildPoolWater(c),this.buildLightSurface(c),this.buildSun(c)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.updateGhost()}buildRoofMesh(){var m;this.roof&&(this.roof.group.traverse(b=>{var _;return(_=b.geometry)==null?void 0:_.dispose()}),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(b=>{var _;return(_=b.geometry)==null?void 0:_.dispose()}),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?r0(this.building,this.roofWindows):[];if(!t.length)return;let e=new Map(Tr(this.building).map(b=>[b.key,b])),n=((m=this.building.settings.roof)==null?void 0:m.solar)??[],r=$h(this.flowTime),s=[],o=new Ue,a=Qe(new Zt({vertexColors:!0,transparent:!0,side:se}),this.themeUniform),l=Qe(new en({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1}),this.themeUniform,!0),c=Qe(new Zt({vertexColors:!0,transparent:!0,side:se,depthWrite:!1}),this.themeUniform),f=new Ue,h=Qe(new Zt({vertexColors:!0,side:se}),this.themeUniform),u=Qe(new Zt({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),d=Qe(new Zt({vertexColors:!0,transparent:!0,opacity:.35,side:se,depthWrite:!1}),this.themeUniform),p=Qe(new en({vertexColors:!0,transparent:!0,blending:No(this.theme),depthWrite:!1}),this.themeUniform,!0),x=[],g=t.map(b=>{var R,v,C,S;let _=new Ue;_.add(new It(b.solid.geometry(),a),new Ke(b.lines.geometry(),l)),b.glass.count&&_.add(new It(b.glass.geometry(),c));let y=n.flatMap(E=>{var T;let L=e.get(E.face);return L&&(L.section?(T=b.sections)==null?void 0:T.includes(L.section):b===t[0])?[{face:L,field:E}]:[]}),M=qh(y,b.floor.elevation+b.base);if(M){let E=new It(M.geometry,r);E.renderOrder=9,_.add(E),s.push(M),Lo(M,this.solarLevels)}(R=b.winRoof)!=null&&R.solid.count&&_.add(new It(b.winRoof.solid.geometry(),h),new Ke(b.winRoof.lines.geometry(),p)),(v=b.winRoof)!=null&&v.glass.count&&_.add(new It(b.winRoof.glass.geometry(),d)),_.renderOrder=8,o.add(_);let w=null;((C=b.win)!=null&&C.solid.count||(S=b.win)!=null&&S.glass.count)&&(w=new Ue,w.add(new It(b.win.solid.geometry(),h),new Ke(b.win.lines.geometry(),p)),b.win.glass.count&&w.add(new It(b.win.glass.geometry(),u)),f.add(w));for(let[E,L]of b.winBelow??[]){if(!L.solid.count&&!L.glass.count)continue;let N=new Ue;N.add(new It(L.solid.geometry(),h),new Ke(L.lines.geometry(),p)),L.glass.count&&N.add(new It(L.glass.geometry(),u)),f.add(N),x.push({floorId:E,win:N})}return{group:_,floorId:b.floor.id,rideId:$p(this.building,b.floor,b.sections??[]),base:b.base,lift:b.lift!==!1,win:w}});o.renderOrder=8,this.scene.add(o),this.scene.add(f),this.roof={group:o,parts:g,below:x,solid:a,lines:l,glass:c,live:r,lives:s,wins:f,winSolid:h,winLines:p,winGlass:u,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/eg)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?eg*n:0,o=1-Math.exp(-t/ng),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let f=this.floorMap.get(l.rideId)??c,h=f.ty>0?Math.min(1,f.y/f.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+f.y+l.base+this.roofLift()+(l.lift?h*tg:0),l.win&&(l.win.position.y=c.floor.elevation+f.y+l.base+(l.lift?h*tg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:cS)):r=this.explode?n.rank*lS:0,n.ty=r,n.to=s;let a=e===n?nn:jn;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/ng);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/rg);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??Uo,f=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(f(c.open,l.open)&&f(c.open2??0,l.open2??0)&&f(c.tilt,l.tilt)&&f(c.tilt2??0,l.tilt2??0)&&f(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let h={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},u=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,x=l[d]??0,g=p-x;Math.abs(g)<.003?h[d]=p:(h[d]=x+g*n,u=!0)}if(c.cover===null||l.cover===null)h.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?h.cover=c.cover:(h.cover=l.cover+d*n,u=!0)}(h.open!==l.open||h.open2!==(l.open2??0)||h.tilt!==l.tilt||h.tilt2!==(l.tilt2??0)||h.cover!==l.cover||!!h.sensed!=!!l.sensed||!!h.unlocked!=!!l.unlocked)&&(r.openings.set(a,h),s=!0),e||=u,o||=u}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=xS)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new K(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*yS+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=h=>{let u=this.flashes.get(h);if(!u||u<=e)return 0;let d=u-e,p=d>Tc?.5+.5*Math.sin(d/140):d/Tc;return Math.round(p*10)/10},r=this.devices.filter(h=>h.floorId===t.floor.id&&(h.lamp||h.model)),s=h=>h.fanBlades&&h.fanSpeed?this.fanAngle*h.fanSpeed:0,o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(h=>{var u;return`${h.id},${h.lamp??h.model},${h.variant},${h.x},${h.z},${h.y},${h.rotation??0},${h.roll??0},${h.upright?1:0},${h.rise??0},${(u=h.size)==null?void 0:u.join("/")},${h.base??0},${h.pack??""},${h.mirror?1:0},${h.fanStatic?1:0},${s(h).toFixed(3)}`}).join(";"),a=r.map(h=>this.glowOf(h)),l=r.map((h,u)=>`${n(h.id)},${a[u]?`${a[u].level.toFixed(3)},${a[u].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let h=new ee,u=[],d=[],p=new Map,x=t.floor.height;for(let g of r){let m=g.lamp==="strip"?(g.base??x)>Math.min(t.floor.cut_height,x):g.lamp?og.has(g.lamp)&&(g.top??x)>Math.min(t.floor.cut_height,x):g.model==="camera_ceiling";if(!g.lamp&&!g.model||m&&this.wallMode==="cut")continue;let b=h.count,_=g.pack?ve(g.pack):void 0,[y,M,w]=g.size??[.3,.3,.3];g.model?zm(h,g.model,g.x,g.model==="camera_ceiling"?x:g.y,g.z,g.rotation??0):_?cc(h,_,{x:g.x,z:g.z,rotation:g.rotation??0,w:y,d:M,h:w,mirror:g.mirror},g.base??0,65280):Qh(h,{...g,lamp:g.lamp,spinAngle:s(g)},g.top??x,65280),p.set(g.furnitureId??g.id,{start:b,end:h.count}),g.pickable!==!1&&u.push({id:g.id,start:b,end:h.count}),g.furnitureId&&d.push({id:g.furnitureId,start:b,end:h.count})}t.lampTris=u,t.lampFurnTris=d,t.lampRanges=p,t.lampShade=hp(h.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=h.geometry(),t.lampMesh.visible=h.count>0}if(l===t.lampColorSig)return;t.lampColorSig=l;let c=t.lampMesh.geometry.getAttribute("color"),f=c.array;r.forEach((h,u)=>{let d=t.lampRanges.get(h.furnitureId??h.id);if(!d)return;let p=a[u],x=p?.55+.45*p.level:0,g=p?new K(...p.color.map(_=>Math.min(1,_*x))):new K(gS),m=n(h.id);m>0&&g.lerp(new K(1,1,1),.7*m);let b=new K(g.getHex());fp(f,t.lampShade,d,[b.r,b.g,b.b])}),c.needsUpdate=!0,this.buildHalos(t)}buildSun(t){var l,c,f,h,u;let e=((l=this.building)==null?void 0:l.settings.sun_patches)===!1?null:this.sun,n=(((c=this.building)==null?void 0:c.settings.north)??0)*le,r=((f=this.weather)==null?void 0:f.cloud)??0,s=lg(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(d=>(d.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(((u=(h=this.building)==null?void 0:h.settings.roof)==null?void 0:u.windows)??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ee;if(e&&e.elevation>2&&r<.97){let d=Math.min(1,e.elevation/12)*(1-.8*r),p=e.elevation*le,x=e.azimuth*le,g=[Math.sin(n+x),-Math.cos(n+x)],m=1/Math.tan(p);for(let b of t.geo.openings){if(b.opening.type!=="window"||!b.exterior)continue;let _=[-b.toRoom[0],-b.toRoom[1]],y=_[0]*g[0]+_[1]*g[1];if(y<.05)continue;let M=t.openings.get(b.opening.id),w=b.top-((M==null?void 0:M.cover)??0)*(b.top-b.sill);if(w-b.sill<.05)continue;let R=(P,A)=>{let D=Math.min(7,A*m);return[b.start[0]+b.axis[0]*P+b.toRoom[0]*b.faceRoom-g[0]*D,.02,b.start[1]+b.axis[1]*P+b.toRoom[1]*b.faceRoom-g[1]*D]},v=.14*d*Math.min(1,y*1.5),C=new K(1*v,.82*v,.55*v),S=C.clone().multiplyScalar(.45),E=t.floor.rooms.findIndex(P=>P.id===b.opening.room_id);if(E<0||t.floor.rooms[E].points.length<3)continue;let L=s[E],N=t.floor.rooms.filter((P,A)=>s[A]===L&&P.points.length>=3).map(P=>P.points),T=Math.max(1,Math.ceil(Math.min(7,w*m)/.25)),I=Math.max(1,Math.ceil(b.width/.3));for(let P=0;P<T;P++){let A=b.sill+(w-b.sill)*P/T,D=b.sill+(w-b.sill)*(P+1)/T,B=P/T,z=(P+1)/T,k=C.clone().lerp(S,B),W=C.clone().lerp(S,z);for(let G=0;G<I;G++){let Q=b.width*G/I,j=b.width*(G+1)/I,tt=R((Q+j)/2,(A+D)/2);if(!N.some(it=>te([tt[0],tt[2]],it)))continue;let H=R(Q,A),$=R(j,A),st=R(j,D),ct=R(Q,D);a.tri(H,$,st,k,k,W),a.tri(H,st,ct,k,W,W)}}}this.pushRoofSun(t,a,s,g,p,d)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){var h,u;let a=this.building,l=((h=a==null?void 0:a.settings.roof)==null?void 0:h.windows)??[];if(!a||!l.length)return;let c=new Map(Tr(a).map(d=>[d.key,d])),f=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let d of l){let p=c.get(d.face),x=dc(a,p,d);if(!p||!x||x.floor.id!==t.floor.id)continue;let g=p.n[0]*f[0]+p.n[1]*f[1]+p.n[2]*f[2],[m,b,_,y]=x.corners,M=Math.min(1,((u=this.roofWindows.get(d.id))==null?void 0:u.cover)??0);if(M>.95)continue;let w=(P,A,D)=>[P[0]+(A[0]-P[0])*D,P[1]+(A[1]-P[1])*D,P[2]+(A[2]-P[2])*D],R=w(y,m,M),v=w(_,b,M),C=t.floor.rooms.findIndex(P=>P.id===x.roomId);if(C<0)continue;let S=t.floor.rooms.filter((P,A)=>n[A]===n[C]&&P.points.length>=3).map(P=>P.points),E=(P,A)=>{let D=(z,k)=>w(w(P[0],P[1],z),w(P[3],P[2],z),k);for(let z=0;z<6;z++)for(let k=0;k<6;k++){let W=D((z+.5)/6,(k+.5)/6);if(!S.some(H=>te([W[0],W[2]],H)))continue;let G=D(z/6,k/6),Q=D((z+1)/6,k/6),j=D((z+1)/6,(k+1)/6),tt=D(z/6,(k+1)/6);e.tri(G,Q,j,A,A,A),e.tri(G,j,tt,A,A,A)}},L=P=>[P[0],.019,P[2]],N=.06*o;if(E([L(m),L(b),L(v),L(R)],new K(.75*N,.85*N,1*N)),g<.05)continue;let T=P=>{let A=Math.min(7,(P[1]-t.floor.elevation)/Math.tan(s));return[P[0]-r[0]*A,.02,P[2]-r[1]*A]},I=.16*o*Math.min(1,g*1.5);E([T(m),T(b),T(v),T(R)],new K(1*I,.84*I,.6*I))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ee,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let b=(l.rotation??0)*le,_=[-Math.sin(b),Math.cos(b)],y=l.model==="camera_ceiling",M=l.reach??(y?3:4.5),w=(l.fov??(y?360:90))*le/2,R=l.motion?new K(.9,.12,.16):new K(.04,.22,.28),v=new K(0,0,0),C=Math.max(4,Math.round(w/.15)),S=.015,E=t.geo.walls2d,L=A=>{let D=A.b[0]-A.a[0],B=A.b[1]-A.a[1],z=D*D+B*B||1,k=Math.max(0,Math.min(1,((l.x-A.a[0])*D+(l.z-A.a[1])*B)/z));return Math.hypot(l.x-(A.a[0]+D*k),l.z-(A.a[1]+B*k))},N=null;for(let A of E)L(A)<.45&&(!N||L(A)<L(N))&&(N=A);let T=A=>{let D=_[0]*Math.cos(A)-_[1]*Math.sin(A),B=_[1]*Math.cos(A)+_[0]*Math.sin(A),z=M;for(let k of E){let W=k.b[0]-k.a[0],G=k.b[1]-k.a[1],Q=D*G-B*W;if(Math.abs(Q)<1e-9)continue;let j=((k.a[0]-l.x)*G-(k.a[1]-l.z)*W)/Q,tt=((k.a[0]-l.x)*B-(k.a[1]-l.z)*D)/Q;k===N&&j<=.45||j>.02&&j<z&&tt>=0&&tt<=1&&(z=j)}return z},I=A=>{let D=T(A);return[l.x+(_[0]*Math.cos(A)-_[1]*Math.sin(A))*D,S,l.z+(_[1]*Math.cos(A)+_[0]*Math.sin(A))*D]},P=s.count;for(let A=0;A<C;A++)s.tri([l.x,S,l.z],I(-w+2*w*(A+1)/C),I(-w+2*w*A/C),R,v,v);o.push({id:l.id,start:P,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||og.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let f=l.top??e,[h,u,d]=l.size??Ec[l.lamp],p=l.base??0,x=(l.rotation??0)*le,g={ceiling:f-.07,ceiling_fan:f-.2,downlight:f-.03,spot:f-d,panel:f-.03,pendant:Math.max(.4,f-d)+.08,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(b,_,y=1)=>{n.push(b,g,_),r.push(...c.color.map(M=>M*c.level*.7*y))};if(l.lamp==="strip")for(let b of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+h*(.5+b),l.z),r.push(...c.color.map(_=>_*c.level*.7*.6));else if(l.rise){let _=l.rise*le;n.push(l.x+Math.cos(x)*h*b*Math.cos(_),g+Math.sin(_)*h*b,l.z+Math.sin(x)*h*b*Math.cos(_)),r.push(...c.color.map(y=>y*c.level*.7*.6))}else m(l.x+Math.cos(x)*h*b,l.z+Math.sin(x)*h*b,.6);else if(l.lamp==="wall"){let b=this.packLightAt(l);b?(n.push(...b),r.push(...c.color.map(_=>_*c.level*.7))):m(l.x-Math.sin(x)*(u/2+.05),l.z+Math.cos(x)*(u/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let b=new K(...c.color.map(R=>R*.09*c.level)),_=new K(0,0,0),y=Math.max(.03,h/2),M=.45+.35*c.level,w=16;for(let R=0;R<w;R++){let v=R/w*Math.PI*2,C=(R+1)/w*Math.PI*2,S=[l.x+Math.cos(v)*y,g,l.z+Math.sin(v)*y],E=[l.x+Math.cos(C)*y,g,l.z+Math.sin(C)*y],L=[l.x+Math.cos(v)*M,.02,l.z+Math.sin(v)*M],N=[l.x+Math.cos(C)*M,.02,l.z+Math.sin(C)*M];s.tri(S,L,N,b,_,_),s.tri(S,N,E,b,_,b)}}}let a=new Xt;a.setAttribute("position",new Bt(n,3)),a.setAttribute("color",new Bt(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Yh(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(Do.value?Fo.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new ee;for(let o of e){let a=this.screens.get(o.id),l=o,c=l.rotation*le,f=Math.cos(c),h=Math.sin(c),u=(w,R,v)=>[l.x+w*f-v*h,R,l.z+w*h+v*f];if(a.apRing){let w=Um(l),R=Je(t.floor,l)+w.y,v=new K(...a.apRing),C=v.clone().multiplyScalar(.45),S=new K(0,0,0),E=(T,I)=>w.wall?u(Math.cos(T)*I,R+Math.sin(T)*I,w.z):u(Math.cos(T)*I,R,Math.sin(T)*I),L=[w.r*.52,w.r*.7,w.r*1.15],N=28;for(let T=0;T<N;T++){let I=T/N*Math.PI*2,P=(T+1)/N*Math.PI*2;s.tri(E(I,L[0]),E(I,L[1]),E(P,L[1]),v),s.tri(E(I,L[0]),E(P,L[1]),E(P,L[0]),v),s.tri(E(I,L[1]),E(I,L[2]),E(P,L[2]),C,S,S),s.tri(E(I,L[1]),E(P,L[2]),E(P,L[1]),C,S,C)}continue}if(a.keys){let w=Je(t.floor,l)-mi(l),R=l.mirror?-1:1,v=new K(0,0,0),C=a.switchRing;if(C){let S=Math.max(.05,l.w),E=Math.max(.05,l.d),L=Math.max(.005,l.h),N=mi(l)+w,T=-E/2+.002,I=new K(...C.color.map(z=>Math.min(1,z*(.3+.45*C.level)))),P=.02+.02*C.level,A=.004,D=[u(-S/2-A,N-A,T),u(S/2+A,N-A,T),u(S/2+A,N+L+A,T),u(-S/2-A,N+L+A,T)],B=[u(-S/2-P,N-P,T),u(S/2+P,N-P,T),u(S/2+P,N+L+P,T),u(-S/2-P,N+L+P,T)];for(let z=0;z<4;z++){let k=(z+1)%4;s.tri(D[z],B[z],B[k],I,v,v),s.tri(D[z],B[k],D[k],I,v,I)}}Nm(l).forEach((S,E)=>{let L=a.keys[E];if(!L)return;let N=new K(...L),T=N.clone().multiplyScalar(.45),I=S.x*R,P=S.y+w,A=S.r,D=A*2.6,B=[u(I-A,P-A,S.z),u(I+A,P-A,S.z),u(I+A,P+A,S.z),u(I-A,P+A,S.z)],z=[u(I-D,P-D,S.z+.001),u(I+D,P-D,S.z+.001),u(I+D,P+D,S.z+.001),u(I-D,P+D,S.z+.001)];s.tri(B[0],B[1],B[2],N),s.tri(B[0],B[2],B[3],N);for(let k=0;k<4;k++){let W=(k+1)%4;s.tri(B[k],z[k],z[W],T,v,v),s.tri(B[k],z[W],B[W],T,v,T)}});continue}if(a.faces){let w=Math.max(.05,l.w)*(l.mirror?-1:1),R=Math.max(.05,l.d),v=Math.max(.005,l.h),C=Je(t.floor,l);for(let S of a.faces){if(S.part==="lights"){let k=ve(l.type),W=G=>["#e8f4ff","#ff3b4f"].includes(G.color.toLowerCase());if(k&&k.parts.some(W)){let G=new K(...S.color.map(Q=>Math.min(1,Q*(.4+.6*S.level))));vo(s,k,l,C,G.getHex(),W)}continue}if(S.part==="cabin"){let k=ve(l.type),W=G=>G.color.toLowerCase()==="#13283a"||G.color==="glass";if(k&&k.parts.some(W)){let G=new K(...S.color.map(Q=>Math.min(1,Q*(.3+.5*S.level))));vo(s,k,l,C,G.getHex(),W);continue}}if(S.part==="burners"&&ve(l.type)){let k=ve(l.type),W=new K(...S.color.map(G=>Math.min(1,G*(.25+.6*S.level))));vo(s,k,l,C,W.getHex(),pp);continue}if(S.part==="burners"){let k=new K(...S.color.map(G=>Math.min(1,G*(.25+.6*S.level)))),W=C+v+.008;for(let[G,Q,j]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let tt=G*Math.abs(w)/.6,H=Q*R/.62,$=14;for(let st=0;st<$;st++){let ct=st/$*Math.PI*2,it=(st+1)/$*Math.PI*2;s.tri(u(tt,W,H),u(tt+Math.cos(ct)*j,W,H+Math.sin(ct)*j),u(tt+Math.cos(it)*j,W,H+Math.sin(it)*j),k)}}continue}if(S.part==="band"||S.part==="cabin"){let k=S.part==="cabin",W=C+v*(k?.6:.42),G=k?C+v*.86:W+.07,Q=new K(...S.color.map($=>Math.min(1,$*(.3+.45*S.level)))),j=Math.abs(w)/2+(k?.012:.02),tt=R/2+(k?.012:.02),H=[[-j,-tt],[j,-tt],[j,tt],[-j,tt]];for(let $=0;$<4;$++){let st=H[$],ct=H[($+1)%4],it=u(st[0]*Math.sign(w),W,st[1]),ut=u(ct[0]*Math.sign(w),W,ct[1]),mt=u(ct[0]*Math.sign(w),G,ct[1]),bt=u(st[0]*Math.sign(w),G,st[1]);s.tri(it,ut,mt,Q),s.tri(it,mt,bt,Q)}continue}if(S.part==="strata"){let k=S.top??S.color,W=.22+.4*S.level,G=new K(...S.color.map(ct=>Math.min(1,ct*W))),Q=new K(...k.map(ct=>Math.min(1,ct*W))),j=C+v*.06,tt=C+v*.94,H=Math.abs(w)/2+.012,$=R/2+.012,st=20;for(let ct=0;ct<st;ct++){let it=ct/st*Math.PI*2,ut=(ct+1)/st*Math.PI*2,mt=[Math.cos(it)*H,Math.sin(it)*$],bt=[Math.cos(ut)*H,Math.sin(ut)*$];s.tri(u(mt[0],j,mt[1]),u(bt[0],j,bt[1]),u(bt[0],tt,bt[1]),G,G,Q),s.tri(u(mt[0],j,mt[1]),u(bt[0],tt,bt[1]),u(mt[0],tt,mt[1]),G,Q,Q)}continue}if(S.part==="drum"){let k=Math.abs(w),W=Math.min(k*.36,(v-.2)*.42),G=C+(v-.14)/2+.04,Q=R/2-.006,j=new K(...S.color.map(ct=>Math.min(1,ct*(.35+.65*S.level)))),tt=j.clone().multiplyScalar(.12),H=new K(0,0,0),$=28,st=(ct,it)=>u(Math.cos(ct)*it,G+Math.sin(ct)*it,Q);for(let ct=0;ct<$;ct++){let it=ct/$*Math.PI*2,ut=(ct+1)/$*Math.PI*2;s.tri(u(0,G,Q),st(it,W*.78),st(ut,W*.78),tt),s.tri(st(it,W*.78),st(it,W),st(ut,W),j),s.tri(st(it,W*.78),st(ut,W),st(ut,W*.78),j),s.tri(st(it,W),st(it,W*1.18),st(ut,W*1.18),j,H,H),s.tri(st(it,W),st(ut,W*1.18),st(ut,W),j,H,j)}continue}if(S.part==="beacon"){let k=new K(...S.color.map(ut=>Math.min(1,ut*(.25+.45*S.level)))),W=new K(0,0,0),G=C+v+.01,Q=.6+.6*S.level,j=Math.min(Math.abs(w),R)*.38;for(let[ut,mt]of[[j,0],[0,j]]){let bt=u(-ut,G,-mt),zt=u(ut,G,mt),Wt=u(ut*.4,G+Q,mt*.4),Ct=u(-ut*.4,G+Q,-mt*.4);s.tri(bt,zt,Wt,k,k,W),s.tri(bt,Wt,Ct,k,W,W)}let tt=Je(t.floor,{...l,mount_y:0})+.012,H=Math.abs(w)/2+.03,$=R/2+.03,st=.22+.18*S.level,ct=(ut,mt,bt)=>u(ut*(H+bt),tt,mt*($+bt)),it=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let ut=0;ut<4;ut++){let[mt,bt]=it[ut],[zt,Wt]=it[(ut+1)%4];s.tri(ct(mt,bt,0),ct(zt,Wt,0),ct(zt,Wt,st),k,k,W),s.tri(ct(mt,bt,0),ct(zt,Wt,st),ct(mt,bt,st),k,W,W)}continue}let E=S.part==="right"?.03:-Math.abs(w)/2+.03,L=S.part==="left"?-.03:Math.abs(w)/2-.03,N=C+(S.part==="bottom"?v*.45:v)+.006,T=new K(...S.color.map(k=>Math.min(1,k*(.35+.65*S.level)))),I=new K(0,0,0),P=(k,W,G=N)=>u(k*Math.sign(w),G,W),A=[P(E,-R/2+.03),P(L,-R/2+.03),P(L,R/2-.03),P(E,R/2-.03)];s.tri(A[0],A[2],A[1],T),s.tri(A[0],A[3],A[2],T);let D=S.part==="lid"?.025+.02*S.level:.12+.1*S.level,B=T.clone().multiplyScalar(S.part==="lid"?.7:.5),z=[P(E-D,-R/2-D,N+.004),P(L+D,-R/2-D,N+.004),P(L+D,R/2+D,N+.004),P(E-D,R/2+D,N+.004)];for(let k=0;k<4;k++){let W=(k+1)%4;s.tri(A[k],z[W],z[k],B,I,I),s.tri(A[k],A[W],z[W],B,B,I)}}continue}let d=ve(l.type);if(d&&!d.light&&a.ring&&d.parts.some(w=>w.glow)){let w=new K(...a.color.map(R=>Math.min(1,R*(.45+.55*a.level))));vo(s,d,l,Je(t.floor,l),w.getHex())}let p=Fh(l,t.floor);if(!p)continue;let x=new K(...a.color.map(w=>Math.min(1,w*(.35+.65*a.level)))),g=new K(0,0,0),m=p.z+.004;if(s.tri(u(p.x0,p.y0,m),u(p.x1,p.y0,m),u(p.x1,p.y1,m),x),s.tri(u(p.x0,p.y0,m),u(p.x1,p.y1,m),u(p.x0,p.y1,m),x),a.dots&&a.dots.n>0){let{n:w,lit:R,color:v}=a.dots,C=new K(...v),S=new K(...v.map(N=>N*.12)),E=Math.min(.013,(p.x1-p.x0)/(w*1.5)),L=p.y1+.01;for(let N=0;N<w;N++){let T=p.x0+(N+.5)*(p.x1-p.x0)/w,I=N<R?C:S;s.tri(u(T-E/2,L,m),u(T+E/2,L,m),u(T+E/2,L+E,m),I),s.tri(u(T-E/2,L,m),u(T+E/2,L+E,m),u(T-E/2,L+E,m),I)}}if(a.plain)continue;let b=.18+.12*a.level,_=x.clone().multiplyScalar(.5),y=[u(p.x0,p.y0,m),u(p.x1,p.y0,m),u(p.x1,p.y1,m),u(p.x0,p.y1,m)],M=[u(p.x0-b,p.y0-b,m+.01),u(p.x1+b,p.y0-b,m+.01),u(p.x1+b,p.y1+b,m+.01),u(p.x0-b,p.y1+b,m+.01)];for(let w=0;w<4;w++){let R=(w+1)%4;s.tri(y[w],M[w],M[R],_,g,g),s.tri(y[w],M[R],y[R],_,g,_)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){var r;let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>{var o;return!!((o=this.screens.get(s))!=null&&o.picture)}));for(let[s,o]of t.screenPics)n.has(s)&&this.screens.get(s).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),(r=o.texture)==null||r.dispose(),t.screenPics.delete(s));for(let[s,o]of n){let a=this.screens.get(s),l=Fh(o,t.floor);if(!l)continue;let c=t.screenPics.get(s);if(!c){let f=new It(new di(1,1),new Zt({color:16777215,transparent:!0}));f.visible=!1,f.renderOrder=5,c={url:a.picture,mesh:f,texture:null},t.screenPics.set(s,c),t.group.add(f);let h=c;new ur().load(a.picture,u=>{if(t.screenPics.get(s)!==h){u.dispose();return}u.colorSpace=De,h.texture=u;let d=h.mesh.material;d.map=u,d.needsUpdate=!0,this.placeScreenPicture(h.mesh,o,l,u),h.mesh.visible=!0,this.invalidate()},void 0,()=>{})}c.mesh.material.color.setScalar(.45+.55*a.level),c.texture&&this.placeScreenPicture(c.mesh,o,l,c.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s!=null&&s.width&&(s!=null&&s.height)?s.width/s.height:16/9,a=n.x1-n.x0-.04,l=n.y1-n.y0-.04,c=Math.min(a,l*o),f=c/o,h=e.rotation*le,u=(n.x0+n.x1)/2,d=n.z+.008;t.scale.set(c,f,1),t.rotation.set(0,-h,0),t.position.set(e.x+u*Math.cos(h)-d*Math.sin(h),(n.y0+n.y1)/2,e.z+u*Math.sin(h)+d*Math.cos(h))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){var f;this.buildPipeLines(t);let e=this.flows.filter(h=>h.floorId===t.floor.id&&!h.pipe).map(Bo).join(";"),n=[],r=[],s=[],o=[],a=[];for(let h of this.flows){if(h.floorId!==t.floor.id||h.pipe)continue;let u=this.flowPhase.get(Bo(h))??{speed:tf(h.power),offset:0},d=h.power>.5?Math.min(1,.5+h.power/2500):.22,p=h.color.map(_=>_*d),x=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(x<1e-4)continue;let g=[(h.b[0]-h.a[0])/x,(h.b[1]-h.a[1])/x,(h.b[2]-h.a[2])/x],m=[];if(Math.abs(g[1])<.5){let _=Math.hypot(g[0],g[2])||1;m.push([-g[2]/_,0,g[0]/_])}else m.push([1,0,0],[0,0,1]);let b=this.lowQuality?[[sg*1.4,1]]:[[mS,.25],[sg,1]];for(let[_,y]of b)for(let M of m){let w=_*(h.width??1)/2,R=(C,S)=>[C[0]+M[0]*w*S,C[1]+M[1]*w*S,C[2]+M[2]*w*S],v=[[R(h.a,-1),h.dist,0],[R(h.b,-1),h.dist+x,0],[R(h.b,1),h.dist+x,1],[R(h.a,1),h.dist,1]];for(let C of[0,1,2,0,2,3]){let[S,E,L]=v[C];n.push(S[0],S[1],S[2]),r.push(p[0]*y,p[1]*y,p[2]*y),s.push(E,L),o.push(u.speed),a.push(u.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&((f=l.getAttribute("position"))==null?void 0:f.count)===n.length/3){for(let[h,u]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let d=l.getAttribute(h);d.array.set(u),d.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Xt;c.setAttribute("position",new Bt(n,3)),c.setAttribute("color",new Bt(r,3)),c.setAttribute("uv",new Bt(s,2)),c.setAttribute("flowSpeed",new Bt(o,1)),c.setAttribute("flowOffset",new Bt(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>{var s;return[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),((s=this.flowPhase.get(Bo(r)))==null?void 0:s.speed)??0]}));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let u of e){if((u.house?"house":u.floor?"floor":"all")!==r)continue;let d=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(Bo(u))??{speed:tf(u.power),offset:0},x=[(u.b[0]-u.a[0])/d,(u.b[1]-u.a[1])/d,(u.b[2]-u.a[2])/d],g=[];if(Math.abs(x[1])<.5){let y=Math.hypot(x[0],x[2])||1;g.push([-x[2]/y,0,x[0]/y])}else g.push([1,0,0],[0,0,1]);let m=dS*(u.width??1),b=u.power>.5?1:.62,_=[[m+pS*2,[.02,.025,.05],.78,2],[m,u.color.map(y=>y*b),1,0]];for(let[y,M,w,R]of _)for(let v of g){let C=y/2,S=R===0?.002:0,E=(N,T)=>[N[0]+v[0]*C*T,N[1]+v[1]*C*T+S,N[2]+v[2]*C*T],L=[[E(u.a,-1),u.dist,R],[E(u.b,-1),u.dist+d,R],[E(u.b,1),u.dist+d,R+1],[E(u.a,1),u.dist,R+1]];for(let N of[0,1,2,0,2,3]){let[T,I,P]=L[N];s.push(T[0],T[1],T[2]),o.push(M[0],M[1],M[2],w),a.push(I,P),l.push(p.speed),c.push(p.offset)}}}let f=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,h=new Xt;h.setAttribute("position",new Bt(s,3)),h.setAttribute("color",new Bt(o,4)),h.setAttribute("uv",new Bt(a,2)),h.setAttribute("flowSpeed",new Bt(l,1)),h.setAttribute("flowOffset",new Bt(c,1)),f.geometry.dispose(),f.geometry=h,f.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=H0(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){var t;for(let e of this.floors){let n=e.geo.floor.getAttribute("color"),r=e.geo.roomTris.map(s=>{var o,a;return`${((a=(o=this.roomTint)==null?void 0:o.get(s.roomId))==null?void 0:a.join(","))??""}${s.roomId===this.roomId?"*":""}`}).join(";");if(this.highlighted.get(n)!==r){this.highlighted.set(n,r);for(let s of e.geo.roomTris){let o=new K(s.color),a=(t=this.roomTint)==null?void 0:t.get(s.roomId);a&&o.lerp(new K(...a).multiplyScalar(.6),.9),s.roomId===this.roomId&&o.lerp(_S,a?.3:.75);for(let l=s.start*3;l<s.end*3;l++)n.setXYZ(l,o.r,o.g,o.b)}n.needsUpdate=!0}}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(t){var h;let e=new pn;for(let u of this.activeFloors()){let d=u.floor.elevation+u.ty;for(let p of u.floor.rooms)for(let[x,g]of p.points)e.expandByPoint(new Y(x,d,g)),e.expandByPoint(new Y(x,d+u.floor.height,g))}e.isEmpty()&&e.set(new Y(-4,0,-4),new Y(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new Y),r=e.getSize(new Y),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:((h=this.floorMap.get(this.floorId))==null?void 0:h.floor.start_view)??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let f=c?l.target:null;if(f&&n.set(f.x,f.y+(a?this.floorBase(this.floorId):0),f.z),this.keepNext){this.keepNext=!1;let u=this.controls.view;this.controls.flyTo({target:new Y(u.target.x,n.y,u.target.z),radius:u.radius,phi:u.phi,theta:u.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new pn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new Y(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new Y(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=PS();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new Y),r=t.getSize(new Y),s=ef*Math.ceil((Math.max(r.x,r.z)+16)/ef);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-je-.02,n.z)}distanceFor(t){let e=this.camera.fov*le,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new qs;return r.setFromCamera(new ae(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e){var a,l,c;let n=this.rayAt(t,e),r=this.activeFloors(),s=r.flatMap(f=>[f.lampMesh,f.coneMesh,f.framesMesh,f.glassMesh,f.blindsMesh,f.wallMesh,f.floorMesh].filter(h=>h.visible)),o=(f,h)=>{var u;return(u=f.find(d=>h>=d.start&&h<d.end))==null?void 0:u.id};for(let f of n.intersectObjects(s,!1)){if(f.faceIndex==null)continue;let h=f.faceIndex,u=r.find(d=>d.group===f.object.parent);if(f.object===u.lampMesh||f.object===u.coneMesh){let d=o(f.object===u.lampMesh?u.lampTris:u.coneTris,h);if(d)return{entity:d}}else if(f.object===u.framesMesh||f.object===u.blindsMesh||f.object===u.glassMesh){if(this.wallMode==="cut"&&f.face){let x=((a=f.object.geometry.getAttribute("fold"))==null?void 0:a.getX(f.face.a))??Kt;if(x!==Kt&&Math.floor(x/16)===0)continue}let d=o(f.object===u.framesMesh?u.frameTris:f.object===u.glassMesh?u.glassTris:u.blindTris,h),p=d?this.pickOpenings.get(d):void 0;if(p)return{entity:p}}else if(f.object===u.wallMesh){let d=o(u.geo.furnitureTris,h),p=d?this.pickFurniture.get(d):void 0,x=d&&!p?u.floor.furniture.find(g=>g.id===d&&(g.type==="wall_switch"||g.type==="wall_socket")):void 0;if(x&&(p=this.pickFurniture.get(`${x.id}#${cm(x,f.point.x,f.point.z)}`)),p)return{entity:p};if(!d&&f.face&&f.face.normal.y>.7){let g=ah(u.floor).find(m=>te([f.point.x,f.point.z],m.points));if(g)return{floorId:u.floor.id,roomId:g.id}}if(f.face&&!d){let g=((l=u.wallMesh.geometry.getAttribute("fold"))==null?void 0:l.getX(f.face.a))??32,m=Math.floor(g/16),b=g%16,_=this.wallMode==="cut"&&m===0,y=(u.mask.glass.value&1<<b)!==0;if(!_){let M=n.ray.direction,w=Math.hypot(M.x,M.z)||1,R=[f.point.x-M.x/w*.3,f.point.z-M.z/w*.3],v=((c=u.floor.rooms.find(C=>C.points.length>=3&&te(R,C.points)))==null?void 0:c.id)??null;if(this.roomId!==null){if(v===this.roomId)return{floorId:u.floor.id,roomId:v}}else if(!y&&v)return{floorId:u.floor.id,roomId:v}}}}else if(f.object===u.floorMesh)return{floorId:u.floor.id,roomId:o(u.geo.roomTris.map(d=>({id:d.roomId,start:d.start,end:d.end})),h)??null}}return null}onTap(t,e){var r,s,o,a,l,c;let n=this.pick(t,e);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),(s=(r=this.options).onDeviceSelect)==null||s.call(r,n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Tc),this.invalidate(),(a=(o=this.options).onDeviceTap)==null||a.call(o,n.entity,t,e);return}(c=(l=this.options).onRoomTap)==null||c.call(l,(n==null?void 0:n.floorId)??this.floorId??"",(n==null?void 0:n.roomId)??null)}furnitureAt(t,e){var a;let n=this.rayAt(t,e),r=this.activeFloors(),s=l=>[l.screenMesh,l.fridgeMesh,...[...l.screenPics.values()].map(c=>c.mesh)],o=r.flatMap(l=>[l.lampMesh,l.wallMesh,...s(l)].filter(c=>c.visible));for(let l of n.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=r.find(u=>u.group===l.object.parent||s(u).includes(l.object));if(!c)continue;if(l.object!==c.lampMesh&&l.object!==c.wallMesh){let u=this.furnitureNear(c,l.point.x,l.point.z);if(u)return{fv:c,id:u,y:l.point.y};continue}let h=(a=(l.object===c.lampMesh?c.lampFurnTris:c.geo.furnitureTris).find(u=>l.faceIndex>=u.start&&l.faceIndex<u.end))==null?void 0:a.id;if(h)return{fv:c,id:h,y:l.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*le,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,f=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,h=Math.max(c,f);h<.25&&(!r||h<r.d)&&(r={id:s.id,d:h})}return(r==null?void 0:r.id)??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){var n;return((n=this.furnitureAt(t,e))==null?void 0:n.id)??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){var o,a,l,c,f,h,u,d;if((o=this.surfaceGrab)!=null&&o.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let p=n?(a=this.devices.find(_=>_.id===n))==null?void 0:a.furnitureId:void 0,x=p?null:this.furnitureAt(t,e),g=p??(x==null?void 0:x.id),m=g?this.floors.find(_=>_.floor.furniture.some(y=>y.id===g)):void 0,b=(l=m==null?void 0:m.floor.furniture.find(_=>_.id===g))==null?void 0:l.type;return!!(m&&g&&b&&r.has(b))&&this.grabItem(m,g,t,e)}if(n){let p=(c=this.devices.find(g=>g.id===n))==null?void 0:c.furnitureId,x=p?this.floors.find(g=>g.floor.furniture.some(m=>m.id===p)):void 0;return!p||!x?this.grabDevice(n,t,e):this.grabItem(x,p,t,e)}let s=this.furnitureAt(t,e);if(!s){let p=this.pick(t,e);return p&&"entity"in p?this.grabDevice(p.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),(h=(f=this.options).onFurnitureSelect)==null||h.call(f,null)),this.selectedDevice&&(this.selectDevice(null),(d=(u=this.options).onDeviceSelect)==null||d.call(u,null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){var h,u,d,p;let o=t.floor.furniture.find(x=>x.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,f=this.rayAt(n,r).ray.direction;if(s!==void 0&&-f.y<.34){let x=this.camera.position,g=this.camera.getWorldDirection(new Y),m=Math.hypot(g.x,g.z)||1,b=[g.x/m,g.z/m],_=Math.hypot(l[0]-x.x,l[1]-x.z,(a??0)-x.y),y=this.renderer.domElement.getBoundingClientRect().height||1,M=2*_*Math.tan(this.camera.fov*Math.PI/360)/y;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-b[1],b[0]],fwd:b,perPx:M,gain:Math.min(2,1/Math.max(.5,-f.y))}}return o.locked?(this.selectFurniture(o.id),(u=(h=this.options).onFurnitureSelect)==null||u.call(h,o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),(p=(d=this.options).onFurnitureSelect)==null||p.call(d,o.id),!0)}grabDevice(t,e,n){var a,l,c,f;let r=this.devices.find(h=>h.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),(l=(a=this.options).onDeviceSelect)==null||l.call(a,t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),(f=(c=this.options).onDeviceSelect)==null||f.call(c,t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){var e,n;t&&this.selectedFurniture&&(this.selectFurniture(null),(n=(e=this.options).onFurnitureSelect)==null||n.call(e,null)),this.selectedDevice=t;for(let[r,s]of this.devicePins)s.el.classList.toggle("fp3d-dev-sel",r===t)}dragFurniture(t,e){var u,d,p,x;if(this.surfaceDragging){(u=this.surfaceGrab)==null||u.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let g=this.floorMap.get(n.floorId),m=this.devices.find(y=>y.id===n.id),b=g&&this.floorPoint(g,t,e);if(!g||!m||!b)return;let _=((d=this.building)==null?void 0:d.settings.grid)??.05;n.x=m.x=Math.round((b[0]+n.offset[0])/_)*_,n.z=m.z=Math.round((b[1]+n.offset[1])/_)*_,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let g=(t-o.x0)*o.perPx,m=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*g-o.fwd[0]*m-r.offset[0],o.fz+o.right[1]*g-o.fwd[1]*m-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=((p=this.building)==null?void 0:p.settings.grid)??.05,c=s.floor.furniture.find(g=>g.id===r.id),f=Math.round((a[0]+r.offset[0])/l)*l,h=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?m0(s.floor,c,f,h,((x=this.building)==null?void 0:x.settings.wall_interior)??0):[f,h],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){var n,r,s,o,a;if(this.surfaceDragging){this.surfaceDragging=!1,(n=this.surfaceGrab)==null||n.end();return}let t=this.deviceGrab;this.deviceGrab=null,t!=null&&t.moved&&((s=(r=this.options).onDeviceMove)==null||s.call(r,t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3));let e=this.grab;this.grab=null,e!=null&&e.moved&&((a=(o=this.options).onFurnitureMove)==null||a.call(o,e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3)),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Fe,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s==null?void 0:s.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new K(.25,.9,1):new K(1,.71,.28)))}n&&(this.ghost=new Ke(e.geometry(),new en({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){var g,m;let s=((g=this.grab)==null?void 0:g.id)===n.id?this.grab.x:n.x,o=((m=this.grab)==null?void 0:m.id)===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),f=ve(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?Je(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:Je(e.floor,n),h=n.rotation*le,u=Math.cos(h),d=Math.sin(h),p=(b,_,y)=>[s+b*u-_*d,y,o+b*d+_*u],x=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let b=0;b<4;b++){let[_,y]=x[b],[M,w]=x[(b+1)%4];t.seg(p(_,y,f+.01),p(M,w,f+.01),r),t.seg(p(_,y,f+c),p(M,w,f+c),r),t.seg(p(_,y,f+.01),p(_,y,f+c),r)}t.seg(p(-n.w/2,n.d/2+.03,f+.02),p(n.w/2,n.d/2+.03,f+.02),new K(1,1,1))}onHold(t,e){var r,s;let n=this.pick(t,e);n&&"entity"in n&&((s=(r=this.options).onDeviceHold)==null||s.call(r,n.entity,t,e))}swipeStart(t,e,n,r){var o,a;if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||((a=(o=this.options).onDeviceSwipe)==null?void 0:a.call(o,s.entity,"start",0,t,e))!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){var m,b;let n=this.floors.filter(_=>_.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ze(s,o);a.texture.colorSpace=De;let l=new Jn(-1,1,1,-1,.1,400),c=this.floors.map(_=>({fv:_,visible:_.group.visible,y:_.y,o:_.o,standing:_.mask.standing.value,glass:_.mask.glass.value})),f=((m=this.roof)==null?void 0:m.group.visible)??!1,h=((b=this.ghost)==null?void 0:b.visible)??!1,u=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let x=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let _ of n){for(let I of this.floors)I.group.visible=I===_;_.y=0,_.o=1,this.applyFloor(_),_.group.visible=!0,_.mask.standing.value=0,_.mask.glass.value=0;let y=_.floor.rooms.flatMap(I=>I.points),M=_.floor.elevation,w=new pn(new Y(Math.min(...y.map(I=>I[0]))-.3,M,Math.min(...y.map(I=>I[1]))-.3),new Y(Math.max(...y.map(I=>I[0]))+.3,M+Math.min(_.floor.cut_height,_.floor.height),Math.max(...y.map(I=>I[1]))+.3)),R=w.getCenter(new Y),v=-.6,C=.8,S=new Y(Math.sin(C)*Math.sin(v),Math.cos(C),Math.sin(C)*Math.cos(v));l.position.copy(R).addScaledVector(S,100),l.lookAt(R),l.updateMatrixWorld();let E=.5,L=.5;for(let I of[w.min.x,w.max.x])for(let P of[w.min.y,w.max.y])for(let A of[w.min.z,w.max.z]){let D=new Y(I,P,A).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(D.x)),L=Math.max(L,Math.abs(D.y))}let N=s/o;E/L>N?L=E/N:E=L*N,l.left=-E*1.05,l.right=E*1.05,l.top=L*1.05,l.bottom=-L*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let T=x.createImageData(s,o);for(let I=0;I<o;I++)T.data.set(d.subarray((o-1-I)*s*4,(o-I)*s*4),I*s*4);x.putImageData(T,0,0),g.push({floorId:_.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(u);for(let _ of c)_.fv.y=_.y,_.fv.o=_.o,_.fv.mask.standing.value=_.standing,_.fv.mask.glass.value=_.glass,this.applyFloor(_.fv),_.fv.group.visible=_.visible;this.roof&&(this.roof.group.visible=f,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=h),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?X0(n.room,void 0,void 0,n.obstacles):jh(n.rest),l=a.length?a:jh(n.rest),c=0;l.forEach((f,h)=>{Math.hypot(f[0]-r.motion.pos[0],f[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=h)}),r.motion.path=l,r.motion.next=c,n.room&&!te(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Q0[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&ve(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Zt({color:Q0[t.mode]}),r=this.robotModelKey(t),s=t.model?ve(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,f=new ee,{radius:h,top:u}=Vm(f,s,a,l,c),d=new ee,p=Math.min(.05,h*.3),x=Math.min(.1,h*.55);Pe(d,[[-p,x],[p,x],[p,x+p*.8],[-p,x+p*.8]],u,u+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Zt({vertexColors:!0});let g=[f.geometry(),d.geometry()],m=new Ue;return m.add(new It(g[0],this.robotMat),new It(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new ee,l=(f,h,u,d,p)=>{let x=[];for(let g=0;g<20;g++)x.push([Math.cos(g/20*Math.PI*2)*f,Math.sin(g/20*Math.PI*2)*f]);Pe(a,x,h,u,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Zt({vertexColors:!0});let c=new ee;Pe(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new Ue;return o.add(new It(this.robotGeo,this.robotMat),new It(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Y0(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new K(.25-.2*a,.95-.83*a,1-.7*a),r=new K(0,0,0),s=new K(.3,1,.6),o=.02;for(let a of this.floors){let l=new ee;for(let f of e)f.floorId===a.floor.id&&f.points.forEach(([h,u],d)=>{let p=f.points[d-1];if(p){let x=Math.hypot(h-p[0],u-p[1])||1,g=-(u-p[1])/x*.1,m=(h-p[0])/x*.1;l.tri([p[0]+g,o,p[1]+m],[h+g,o,u+m],[h-g,o,u-m],s,s,s),l.tri([p[0]+g,o,p[1]+m],[h-g,o,u-m],[p[0]-g,o,p[1]-m],s,s,s)}for(let x=0;x<10;x++){let g=x/10*Math.PI*2,m=(x+1)/10*Math.PI*2;l.tri([h,o,u],[h+Math.cos(m)*.35,o,u+Math.sin(m)*.35],[h+Math.cos(g)*.35,o,u+Math.sin(g)*.35],s,r,r)}});let c=null;for(let f of t){if(f.floorId!==a.floor.id)continue;let h=n(f.age);if(c){let u=Math.hypot(f.x-c.x,f.z-c.z)||1,d=-(f.z-c.z)/u*.06,p=(f.x-c.x)/u*.06,x=n(c.age);l.tri([c.x+d,o,c.z+p],[f.x+d,o,f.z+p],[f.x-d,o,f.z-p],x,h,h),l.tri([c.x+d,o,c.z+p],[f.x-d,o,f.z-p],[c.x-d,o,c.z-p],x,h,x)}for(let u=0;u<12;u++){let d=u/12*Math.PI*2,p=(u+1)/12*Math.PI*2;l.tri([f.x,o,f.z],[f.x+Math.cos(p)*.22,o,f.z+Math.sin(p)*.22],[f.x+Math.cos(d)*.22,o,f.z+Math.sin(d)*.22],h,r,r)}c=f}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*le,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*le)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new Y(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new Y(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Tc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new Y(e,a.floor.elevation+a.ty+r,n),radius:(o==null?void 0:o.radius)??5.5,phi:(o==null?void 0:o.phi)??.78,...(o==null?void 0:o.theta)!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l==null||l.classList.add("fp3d-dev-found"),setTimeout(()=>l==null?void 0:l.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[b,_]of this.flashes){let y=this.deviceFloor.get(b);y&&m.add(y),_<=t&&this.flashes.delete(b)}a=this.flashes.size>0;for(let b of this.floors)m.has(b.floor.id)&&this.buildLamps(b)}let l=this.placeRoof(e),c=this.stepRobots(t),f=this.stepWeather(t),h=r||s||o||a||l,u=[];(r||this.controls.busy)&&u.push("camera"),s&&u.push("floors"),o&&u.push("openings"),a&&u.push("flash"),l&&u.push("roof"),this.flowActive&&u.push("flow"),this.soundActive&&u.push("sound"),this.poolActive&&u.push("pool"),this.solarActive&&u.push("solar"),this.effectTick&&u.push("effect"),this.fanFloors.size&&u.push("fan"),c&&u.push("robot"),n&&u.push("orbit"),this.tintTick&&u.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=h?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,u),h&&this.invalidate();let d=this.fanFloors.size>0,p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||d||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let x=this.effectFloors.size||d?this.decor(this.lowQuality?2*ag:ag):null;if(x!==null&&!this.effectTimer&&!document.hidden){let m=x;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.fanAngle+=m/1e3*vS,this.effectTick=!0;for(let b of this.floors)b.o<.02||!(this.effectFloors.has(b.floor.id)||this.fanFloors.has(b.floor.id))||(this.buildLamps(b),this.buildGlow(b));this.decorTimer||this.invalidate()},m)}!h&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!h&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let m=c||g?this.decor(0):null;!h&&m!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},m));return}!h&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!h&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},fS))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,h)=>{let u=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&u&&(c|=1<<h)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new Y,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,f=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let x of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(x,f,g).project(this.camera);let m=(n.x+1)/2*t,b=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:b}),(!c||m>c.x)&&(c={x:m,y:b})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let h=o.labelSize.w,u=8+this.labelInset,d=l.x-h-14,p=l.y;d<u&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(u,Math.min(t-h-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new Y(o.p[0],o.p[1]+((l==null?void 0:l.y)??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),f=this.camera.position.clone().sub(c),h=f.length();if(o.near!==void 0&&h>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let u=f.normalize().dot(new Y(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,h)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,u)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,f?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){var s;let n=new Y,r=this.houseView;for(let o of this.persons){let a=this.personPins.get(o.id),l=this.floorMap.get(o.floorId),c=this.figures.get(o.id);if(!a)continue;if(!l||r||l.to<.99||l.o<.9||this.otherFloor(l)){this.place(a,null),c!=null&&c.visible&&(c.visible=!1,this.invalidate());continue}let f=this.personAt.get(o.id);if(!f||f.floorId!==o.floorId)f={floorId:o.floorId,x:o.x,z:o.z};else{let d=o.x-f.x,p=o.z-f.z;Math.hypot(d,p)>.02?(f={floorId:o.floorId,x:f.x+d*.12,z:f.z+p*.12},this.labelsDirty=!0,this.invalidate()):f={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,f);let h=l.floor.elevation+l.y;if(c){let d=Math.atan2(this.camera.position.x-f.x,this.camera.position.z-f.z);(!c.visible||c.position.x!==f.x||c.position.y!==h||c.position.z!==f.z||c.rotation.y!==d)&&(c.visible=!0,c.position.set(f.x,h,f.z),c.rotation.y=d,this.invalidate())}n.set(f.x,h+(c?1.85:.9),f.z).project(this.camera);let u=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(a,u?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let a=(s=this.devicePins.get(o.id))==null?void 0:s.el;if(!a)continue;let l=this.floorMap.get(o.floorId),c=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!l||r&&!c||l.to<.99||l.o<.9||o.pin===!1||this.otherFloor(l)){this.place(a,null);continue}if(n.set(o.x,l.floor.elevation+l.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(a,null);continue}let h=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(a)!==h&&(this.pinMode.set(a,h),a.classList.toggle("fp3d-dev-full",h==="full"),a.classList.toggle("fp3d-dev-dim",h==="dim")),this.place(a,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=SS(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function SS(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function wS(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,f)=>{e.strokeStyle=`rgba(55,224,255,${f})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let f=o+l*.37%1*256;n(f,c,f,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let f=a+l*.53%1*256;n(c,f,c+256/7,f,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let f=l?256/4:0;for(let h of[f,f+256/2])n(o+h+.75,c,o+h+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new fi(t);return s.flipY=!1,s.wrapS=yn,s.wrapT=yn,s.anisotropy=4,s.colorSpace=De,s}function TS(i){let t=new Zt({map:i,transparent:!0,blending:Ie,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function ES(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new fi(i);return e.wrapS=sr,e.wrapT=sr,e.colorSpace=De,e}function Bo(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function tf(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function AS(i){let t=new Zt({vertexColors:!0,transparent:!0,depthWrite:!1,side:se,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        float fp3dCore = step(vFlowUv.y, 1.5);
        float fp3dAcross = 1.0 - abs(fract(vFlowUv.y) * 2.0 - 1.0);
        float fp3dMoving = step(0.001, abs(vFlowSpeed));
        // one soft swell of light every 0.8 m, rising slowly and falling fast: the way the water goes
        float fp3dPhase = fract((vFlowUv.x - uFlowTime * abs(vFlowSpeed) - vFlowOffset) * 1.25);
        float fp3dSwell = pow(fp3dPhase, 3.0) * fp3dMoving * fp3dCore;
        diffuseColor.rgb *= mix(1.0, 0.72 + 0.4 * fp3dAcross, fp3dCore);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function RS(i){let t=new Zt({vertexColors:!0,transparent:!0,blending:Ie,depthWrite:!1,side:se});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function lg(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(f=>f.id===r),a=i.rooms.findIndex(f=>f.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function CS(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new fi(t);return r.colorSpace=De,r}function PS(){let t=ef,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new fi(e);return s.anisotropy=4,s.colorSpace=De,s}function tC(i,t){return new nf(i,t)}function Qh(i,t,e,n){let[r,s,o]=t.size??Ec[t.lamp],a=t.base??0,l=(t.rotation??0)*le,c=Math.cos(l),f=Math.sin(l),h=(x,g)=>[t.x+x*c-g*f,t.z+x*f+g*c],u=(x,g,m,b,_,y=14)=>{let M=[];for(let w=0;w<y;w++){let R=w/y*Math.PI*2;M.push([t.x+Math.cos(R)*x,t.z+Math.sin(R)*x])}Pe(i,M,g,m,b,_,{aoFrom:0,bottom:!0})},d=(x,g,m,b,_,y,M,w=M)=>Pe(i,[h(x,m),h(g,m),h(g,b),h(x,b)],_,y,M,w,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":u(p*.25,e-.04,e,Qt,Qt,8),u(p,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"ceiling_fan":{let x=Math.max(.09,p*.17),g=.1,m=e-.06,b=m-g;if(t.fanBlades||t.fanStatic){let _=b+g*.32,y=Math.max(x+.15,p),M=Math.max(.05,x*.85);for(let w=0;w<5;w++){let R=l+(t.spinAngle??0)+w/5*Math.PI*2,v=Math.cos(R),C=Math.sin(R),S=t.x+v*x*.9,E=t.z+C*x*.9,L=t.x+v*y,N=t.z+C*y,T=[[S+C*M,E-v*M],[L+C*M*.55,N-v*M*.55],[L-C*M*.55,N+v*M*.55],[S-C*M,E+v*M]];Pe(i,T,_,_+.014,Qt,Qt,{aoFrom:0,bottom:!0})}}if(!t.fanBlades){u(Math.max(.05,x*.7),e-.015,e,Qt,Qt,10),u(.02,m,e-.015,Qt,Qt,6),u(x,b,m,Qt,Qt,16);let _=b-.002,y=Math.max(.12,o-g-.08),M=x*.55,w=Math.max(M+.04,x*1.35);for(let R=0;R<6;R++){let v=w+(M-w)*((R+.5)/6);d(-v,v,-v,v,_-y+y*R/6,_-y+y*(R+1)/6,n,n)}}break}case"pendant":{let x=Math.max(.4,e-o);u(.06,e-.02,e,Qt,Qt,8);let g=t.variant==="globe"?x+2*p:t.variant==="drum"?x+.24:x+.2;if(u(.008,g,e-.02,Qt,Qt,5),t.variant==="globe")for(let b=0;b<7;b++){let _=Math.PI*(b/7),y=Math.PI*((b+1)/7);u(p*Math.max(.2,Math.sin((_+y)/2)),x+p-p*Math.cos(_),x+p-p*Math.cos(y),n,n,14)}else if(t.variant==="cone")for(let b=0;b<4;b++)u(p*(.25+.75*(4-b)/4),x+.06*b,x+.06*(b+1),n,n,16);else t.variant==="drum"?u(p,x,x+.24,n,n,18):(u(p*.35,x+.14,x+.2,n,n,12),u(p,x,x+.14,n,n,16));break}case"downlight":u(p,e-.012,e,Qt,Qt,12),u(p*.7,e-.02,e-.012,n,n,12);break;case"spot":u(p*.6,e-.02,e,Qt,Qt,10),u(p,e-Math.max(.06,o),e-.02,Qt,Qt,12),u(p*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,Qt,Qt),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":u(Math.max(.1,p*.6),a,a+.03,Qt,Qt),u(.014,a+.03,a+o-.12,Qt,Qt,6),u(p,a+o-.14,a+o-.02,Qt,Qt),u(p*.92,a+o-.02,a+o,n,n);break;case"bollard":u(p,a,a+o-.14,Qt,Qt,10),u(p*.9,a+o-.14,a+o-.03,n,n,10),u(p*1.1,a+o-.03,a+o,Qt,Qt,10);break;case"garden":u(.012,a,a+o-.08,Qt,Qt,5),u(p,a+o-.08,a+o-.01,Qt,Qt,10),u(p*.8,a+o-.01,a+o,n,n,10);break;case"floor":u(Math.max(.1,p*.7),a,a+.03,Qt,Qt),u(.014,a+.03,a+o-.28,Qt,Qt,6),u(p,a+o-.3,a+o,n,n);break;case"table":u(Math.max(.05,p*.55),a,a+.03,Qt,Qt),u(.012,a+.03,a+o-.16,Qt,Qt,6),u(p,a+o-.18,a+o,n,n);break;case"wall":{let x=t.base??Hl;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,x,x+o,Qt),d(-r/2,r/2,-s/2+.02,s/2,x+o*.15,x+o*.85,n);break}case"strip":{let x=Math.max(.02,o),g=t.base!=null?t.base+x:e-.04;if(!t.roll&&!t.upright&&!t.rise){d(-r/2,r/2,-s/2,s/2,g-x,g,n);break}let m=(t.roll??0)*le,b=Math.cos(m),_=Math.sin(m),y=t.upright?a+r/2:g-x/2,M=(t.upright?0:t.rise??0)*le,w=(E,L,N)=>{let T=E,I=L*b-N*_,P=L*_+N*b;return M&&([T,I]=[T*Math.cos(M)-I*Math.sin(M),T*Math.sin(M)+I*Math.cos(M)]),t.upright&&([T,I]=[-I,T]),[t.x+T*c-P*f,y+I,t.z+T*f+P*c]},R=[w(-r/2,-x/2,-s/2),w(r/2,-x/2,-s/2),w(r/2,-x/2,s/2),w(-r/2,-x/2,s/2),w(-r/2,x/2,-s/2),w(r/2,x/2,-s/2),w(r/2,x/2,s/2),w(-r/2,x/2,s/2)],v=new K(n),C=[t.x,y,t.z],S=(E,L,N,T)=>{let[I,P,A]=[R[E],R[L],R[N]],D=[(P[1]-I[1])*(A[2]-I[2])-(P[2]-I[2])*(A[1]-I[1]),(P[2]-I[2])*(A[0]-I[0])-(P[0]-I[0])*(A[2]-I[2]),(P[0]-I[0])*(A[1]-I[1])-(P[1]-I[1])*(A[0]-I[0])],B=[I[0]-C[0],I[1]-C[1],I[2]-C[2]],z=D[0]*B[0]+D[1]*B[1]+D[2]*B[2]<0,[k,W,G,Q]=z?[R[T],R[N],R[L],R[E]]:[R[E],R[L],R[N],R[T]];i.tri(k,W,G,v,v,v),i.tri(k,G,Q,v,v,v)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{Wh as FloorMap,nf as FloorplanViewer,Xh as WalkCamera,tC as createViewer,V3 as funLib,aS as furnitureFront,oS as furniturePreview,MS as isLowEnd,Qh as pushLampModel};
