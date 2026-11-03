var Ed=0,Nu=1,Ad=2;var mo=1,Rd=2,ms=3,ai=0,sn=1,oe=2,Fn=0,Tn=1,Re=2,Uu=3,go=4,Cd=5;var yr=100,Pd=101,Id=102,Ld=103,Fd=104,Dd=200,Od=201,Nd=202,Ud=203,Bu=204,ku=205,Bd=206,kd=207,zd=208,Vd=209,Gd=210,Hd=211,Wd=212,Xd=213,Yd=214,Na=0,Ua=1,Ba=2,rs=3,ka=4,za=5,Va=6,Ga=7,zu=0,qd=1,$d=2,Wn=0,Vu=1,Gu=2,Hu=3,Wu=4,Xu=5,Yu=6,qu=7;var $u=300,Yi=301,vr=302,bl=303,xl=304,bo=306,pr=1e3,Mn=1001,Ha=1002,tn=1003,Zd=1004;var xo=1005;var Xe=1006,yl=1007;var qi=1008;var En=1009,Zu=1010,Ku=1011,gs=1012,vl=1013,Xn=1014,Yn=1015,qn=1016,_l=1017,Ml=1018,bs=1020,Ju=35902,ju=35899,Qu=1021,th=1022,Dn=1023,ei=1026,$i=1027,eh=1028,Sl=1029,Zi=1030,wl=1031;var Tl=1033,yo=33776,vo=33777,_o=33778,Mo=33779,El=35840,Al=35841,Rl=35842,Cl=35843,Pl=36196,Il=37492,Ll=37496,Fl=37488,Dl=37489,So=37490,Ol=37491,Nl=37808,Ul=37809,Bl=37810,kl=37811,zl=37812,Vl=37813,Gl=37814,Hl=37815,Wl=37816,Xl=37817,Yl=37818,ql=37819,$l=37820,Zl=37821,Kl=36492,Jl=36494,jl=36495,Ql=36283,tc=36284,wo=36285,ec=36286;var qs=2300,Wa=2301,Fa=2302,Tu=2303,Eu=2400,Au=2401,Ru=2402;var Kd=3200;var nh=0,Jd=1,wi="",Ue="srgb",$s="srgb-linear",Zs="linear",ve="srgb";var Da=7680;var jd=519,Qd=512,tp=513,ep=514,nc=515,np=516,ip=517,ic=518,rp=519,ih=35044,rh=35048;var sh="300 es",Gn=2e3,Ks=2001;function ab(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lb(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ss(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sp(){let i=ss("canvas");return i.style.display="block",i}var qf={},os=null;function Js(...i){let t="THREE."+i.shift();os?os("log",t,...i):console.log(t,...i)}function op(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Kt(...i){i=op(i);let t="THREE."+i.shift();if(os)os("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function jt(...i){i=op(i);let t="THREE."+i.shift();if(os)os("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function dr(...i){let t=i.join(" ");t in qf||(qf[t]=!0,Kt(...i))}function ap(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var lp={[Na]:Ua,[Ba]:Va,[ka]:Ga,[rs]:za,[Ua]:Na,[Va]:Ba,[Ga]:ka,[za]:rs},ni=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let r=n[t];if(r!==void 0){let s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}},cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var eu=Math.PI/180,Xa=180/Math.PI;function ki(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]+"-"+cn[t&255]+cn[t>>8&255]+"-"+cn[t>>16&15|64]+cn[t>>24&255]+"-"+cn[e&63|128]+cn[e>>8&255]+"-"+cn[e>>16&255]+cn[e>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function pe(i,t,e){return Math.max(t,Math.min(e,i))}function cb(i,t){return(i%t+t)%t}function nu(i,t,e){return(1-e)*i+e*t}function ti(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var uh=class uh{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};uh.prototype.isVector2=!0;var te=uh,ii=class{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let l=n[r+0],c=n[r+1],f=n[r+2],u=n[r+3],h=s[o+0],d=s[o+1],p=s[o+2],b=s[o+3];if(u!==b||l!==h||c!==d||f!==p){let g=l*h+c*d+f*p+u*b;g<0&&(h=-h,d=-d,p=-p,b=-b,g=-g);let m=1-a;if(g<.9995){let x=Math.acos(g),v=Math.sin(x);m=Math.sin(m*x)/v,a=Math.sin(a*x)/v,l=l*m+h*a,c=c*m+d*a,f=f*m+p*a,u=u*m+b*a}else{l=l*m+h*a,c=c*m+d*a,f=f*m+p*a,u=u*m+b*a;let x=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=x,c*=x,f*=x,u*=x}}t[e]=l,t[e+1]=c,t[e+2]=f,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,r,s,o){let a=n[r],l=n[r+1],c=n[r+2],f=n[r+3],u=s[o],h=s[o+1],d=s[o+2],p=s[o+3];return t[e]=a*p+f*u+l*d-c*h,t[e+1]=l*p+f*h+c*u-a*d,t[e+2]=c*p+f*d+a*h-l*u,t[e+3]=f*p-a*u-l*h-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(r/2),u=a(s/2),h=l(n/2),d=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u-h*d*p;break;case"YXZ":this._x=h*f*u+c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u+h*d*p;break;case"ZXY":this._x=h*f*u-c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u-h*d*p;break;case"ZYX":this._x=h*f*u-c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u+h*d*p;break;case"YZX":this._x=h*f*u+c*d*p,this._y=c*d*u+h*f*p,this._z=c*f*p-h*d*u,this._w=c*f*u-h*d*p;break;case"XZY":this._x=h*f*u-c*d*p,this._y=c*d*u-h*f*p,this._z=c*f*p+h*d*u,this._w=c*f*u+h*d*p;break;default:Kt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],f=e[6],u=e[10],h=n+a+u;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(f-l)*d,this._y=(s-c)*d,this._z=(o-r)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(f-l)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(l+f)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-r)/d,this._x=(s+c)/d,this._y=(l+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(pe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,f=e._w;return this._x=n*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-r*a,this._w=o*f-n*a-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,r=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,r=-r,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,e=Math.sin(e*c)/f,this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+r*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},hh=class hh{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($f.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($f.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*r-a*n),f=2*(a*e-s*r),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*f,this.y=n+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=r*l-s*a,this.y=s*o-n*l,this.z=n*a-r*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return iu.copy(this).projectOnVector(t),this.sub(iu)}reflect(t){return this.sub(iu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};hh.prototype.isVector3=!0;var W=hh,iu=new W,$f=new ii,fh=class fh{constructor(t,e,n,r,s,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c)}set(t,e,n,r,s,o,a,l,c){let f=this.elements;return f[0]=t,f[1]=r,f[2]=a,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],d=n[5],p=n[8],b=r[0],g=r[3],m=r[6],x=r[1],v=r[4],y=r[7],M=r[2],w=r[5],A=r[8];return s[0]=o*b+a*x+l*M,s[3]=o*g+a*v+l*w,s[6]=o*m+a*y+l*A,s[1]=c*b+f*x+u*M,s[4]=c*g+f*v+u*w,s[7]=c*m+f*y+u*A,s[2]=h*b+d*x+p*M,s[5]=h*g+d*v+p*w,s[8]=h*m+d*y+p*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8];return e*o*f-e*a*c-n*s*f+n*a*l+r*s*c-r*o*l}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=f*o-a*c,h=a*l-f*s,d=c*s-o*l,p=e*u+n*h+r*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let b=1/p;return t[0]=u*b,t[1]=(r*c-f*n)*b,t[2]=(a*n-r*o)*b,t[3]=h*b,t[4]=(f*e-r*l)*b,t[5]=(r*s-a*e)*b,t[6]=d*b,t[7]=(n*l-c*e)*b,t[8]=(o*e-n*s)*b,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-r*c,r*l,-r*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ru.makeScale(t,e)),this}rotate(t){return dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ru.makeRotation(-t)),this}translate(t,e){return dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ru.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};fh.prototype.isMatrix3=!0;var ne=fh,ru=new ne,Zf=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ub(){let i={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ve&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ve&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return dr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return dr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[$s]:{primaries:t,whitePoint:n,transfer:Zs,toXYZ:Zf,fromXYZ:Kf,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:t,whitePoint:n,transfer:ve,toXYZ:Zf,fromXYZ:Kf,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}}),i}var fe=ub();function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var kr,Ya=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{kr===void 0&&(kr=ss("canvas")),kr.width=t.width,kr.height=t.height;let r=kr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=kr}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ss("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},hb=0,as=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=ki(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(su(r[o].image)):s.push(su(r[o]))}else s=su(r);n.url=s}return e||(t.images[this.uuid]=n),n}};function su(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ya.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Kt("Texture: Unable to serialize Texture."),{})}var fb=0,ou=new W,hn=class i extends ni{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Mn,r=Mn,s=Xe,o=qi,a=Dn,l=En,c=i.DEFAULT_ANISOTROPY,f=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=ki(),this.name="",this.source=new as(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ou).x}get height(){return this.source.getSize(ou).y}get depth(){return this.source.getSize(ou).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Kt(`Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pr:t.x=t.x-Math.floor(t.x);break;case Mn:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pr:t.y=t.y-Math.floor(t.y);break;case Mn:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=$u;hn.DEFAULT_ANISOTROPY=1;var dh=class dh{constructor(t=0,e=0,n=0,r=1){this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s,l=t.elements,c=l[0],f=l[4],u=l[8],h=l[1],d=l[5],p=l[9],b=l[2],g=l[6],m=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-b)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+b)<.1&&Math.abs(p+g)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(d+1)/2,M=(m+1)/2,w=(f+h)/4,A=(u+b)/4,_=(p+g)/4;return v>y&&v>M?v<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(v),r=w/n,s=A/n):y>M?y<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),n=w/r,s=_/r):M<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),n=A/s,r=_/s),this.set(n,r,s,e),this}let x=Math.sqrt((g-p)*(g-p)+(u-b)*(u-b)+(h-f)*(h-f));return Math.abs(x)<.001&&(x=1),this.x=(g-p)/x,this.y=(u-b)/x,this.z=(h-f)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=pe(this.x,t.x,e.x),this.y=pe(this.y,t.y,e.y),this.z=pe(this.z,t.z,e.z),this.w=pe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=pe(this.x,t,e),this.y=pe(this.y,t,e),this.z=pe(this.z,t,e),this.w=pe(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(pe(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};dh.prototype.isVector4=!0;var ke=dh,qa=class extends ni{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xe,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ke(0,0,t,e),this.scissorTest=!1,this.viewport=new ke(0,0,t,e),this.textures=[];let r={width:t,height:e,depth:n.depth},s=new hn(r),o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Xe,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let r=Object.assign({},t.textures[e].image);this.textures[e].source=new as(r)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends qa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},js=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends hn{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=Mn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var gl=class gl{constructor(t,e,n,r,s,o,a,l,c,f,u,h,d,p,b,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,l,c,f,u,h,d,p,b,g)}set(t,e,n,r,s,o,a,l,c,f,u,h,d,p,b,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=f,m[10]=u,m[14]=h,m[3]=d,m[7]=p,m[11]=b,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gl().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,r=1/zr.setFromMatrixColumn(t,0).length(),s=1/zr.setFromMatrixColumn(t,1).length(),o=1/zr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let h=o*f,d=o*u,p=a*f,b=a*u;e[0]=l*f,e[4]=-l*u,e[8]=c,e[1]=d+p*c,e[5]=h-b*c,e[9]=-a*l,e[2]=b-h*c,e[6]=p+d*c,e[10]=o*l}else if(t.order==="YXZ"){let h=l*f,d=l*u,p=c*f,b=c*u;e[0]=h+b*a,e[4]=p*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*f,e[9]=-a,e[2]=d*a-p,e[6]=b+h*a,e[10]=o*l}else if(t.order==="ZXY"){let h=l*f,d=l*u,p=c*f,b=c*u;e[0]=h-b*a,e[4]=-o*u,e[8]=p+d*a,e[1]=d+p*a,e[5]=o*f,e[9]=b-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let h=o*f,d=o*u,p=a*f,b=a*u;e[0]=l*f,e[4]=p*c-d,e[8]=h*c+b,e[1]=l*u,e[5]=b*c+h,e[9]=d*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let h=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*f,e[4]=b-h*u,e[8]=p*u+d,e[1]=u,e[5]=o*f,e[9]=-a*f,e[2]=-c*f,e[6]=d*u+p,e[10]=h-b*u}else if(t.order==="XZY"){let h=o*l,d=o*c,p=a*l,b=a*c;e[0]=l*f,e[4]=-u,e[8]=c*f,e[1]=h*u+b,e[5]=o*f,e[9]=d*u-p,e[2]=p*u-d,e[6]=a*f,e[10]=b*u+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(db,t,pb)}lookAt(t,e,n){let r=this.elements;return vn.subVectors(t,e),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Di.crossVectors(n,vn),Di.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Di.crossVectors(n,vn)),Di.normalize(),sa.crossVectors(vn,Di),r[0]=Di.x,r[4]=sa.x,r[8]=vn.x,r[1]=Di.y,r[5]=sa.y,r[9]=vn.y,r[2]=Di.z,r[6]=sa.z,r[10]=vn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],d=n[13],p=n[2],b=n[6],g=n[10],m=n[14],x=n[3],v=n[7],y=n[11],M=n[15],w=r[0],A=r[4],_=r[8],R=r[12],S=r[1],E=r[5],I=r[9],O=r[13],C=r[2],L=r[6],T=r[10],P=r[14],N=r[3],F=r[7],z=r[11],B=r[15];return s[0]=o*w+a*S+l*C+c*N,s[4]=o*A+a*E+l*L+c*F,s[8]=o*_+a*I+l*T+c*z,s[12]=o*R+a*O+l*P+c*B,s[1]=f*w+u*S+h*C+d*N,s[5]=f*A+u*E+h*L+d*F,s[9]=f*_+u*I+h*T+d*z,s[13]=f*R+u*O+h*P+d*B,s[2]=p*w+b*S+g*C+m*N,s[6]=p*A+b*E+g*L+m*F,s[10]=p*_+b*I+g*T+m*z,s[14]=p*R+b*O+g*P+m*B,s[3]=x*w+v*S+y*C+M*N,s[7]=x*A+v*E+y*L+M*F,s[11]=x*_+v*I+y*T+M*z,s[15]=x*R+v*O+y*P+M*B,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],f=t[2],u=t[6],h=t[10],d=t[14],p=t[3],b=t[7],g=t[11],m=t[15],x=l*d-c*h,v=a*d-c*u,y=a*h-l*u,M=o*d-c*f,w=o*h-l*f,A=o*u-a*f;return e*(b*x-g*v+m*y)-n*(p*x-g*M+m*w)+r*(p*v-b*M+m*A)-s*(p*y-b*w+g*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],r=t[8],s=t[1],o=t[5],a=t[9],l=t[2],c=t[6],f=t[10];return e*(o*f-a*c)-n*(s*f-a*l)+r*(s*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],f=t[8],u=t[9],h=t[10],d=t[11],p=t[12],b=t[13],g=t[14],m=t[15],x=e*a-n*o,v=e*l-r*o,y=e*c-s*o,M=n*l-r*a,w=n*c-s*a,A=r*c-s*l,_=f*b-u*p,R=f*g-h*p,S=f*m-d*p,E=u*g-h*b,I=u*m-d*b,O=h*m-d*g,C=x*O-v*I+y*E+M*S-w*R+A*_;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/C;return t[0]=(a*O-l*I+c*E)*L,t[1]=(r*I-n*O-s*E)*L,t[2]=(b*A-g*w+m*M)*L,t[3]=(h*w-u*A-d*M)*L,t[4]=(l*S-o*O-c*R)*L,t[5]=(e*O-r*S+s*R)*L,t[6]=(g*y-p*A-m*v)*L,t[7]=(f*A-h*y+d*v)*L,t[8]=(o*I-a*S+c*_)*L,t[9]=(n*S-e*I-s*_)*L,t[10]=(p*w-b*y+m*x)*L,t[11]=(u*y-f*w-d*x)*L,t[12]=(a*R-o*E-l*_)*L,t[13]=(e*E-n*R+r*_)*L,t[14]=(b*v-p*M-g*x)*L,t[15]=(f*M-u*v+h*x)*L,this}scale(t){let e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+n,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){let r=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,f=o+o,u=a+a,h=s*c,d=s*f,p=s*u,b=o*f,g=o*u,m=a*u,x=l*c,v=l*f,y=l*u,M=n.x,w=n.y,A=n.z;return r[0]=(1-(b+m))*M,r[1]=(d+y)*M,r[2]=(p-v)*M,r[3]=0,r[4]=(d-y)*w,r[5]=(1-(h+m))*w,r[6]=(g+x)*w,r[7]=0,r[8]=(p+v)*A,r[9]=(g-x)*A,r[10]=(1-(h+b))*A,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){let r=this.elements;t.x=r[12],t.y=r[13],t.z=r[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let o=zr.set(r[0],r[1],r[2]).length(),a=zr.set(r[4],r[5],r[6]).length(),l=zr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Bn.copy(this);let c=1/o,f=1/a,u=1/l;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=u,Bn.elements[9]*=u,Bn.elements[10]*=u,e.setFromRotationMatrix(Bn),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,r,s,o,a=Gn,l=!1){let c=this.elements,f=2*s/(e-t),u=2*s/(n-r),h=(e+t)/(e-t),d=(n+r)/(n-r),p,b;if(l)p=s/(o-s),b=o*s/(o-s);else if(a===Gn)p=-(o+s)/(o-s),b=-2*o*s/(o-s);else if(a===Ks)p=-o/(o-s),b=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=Gn,l=!1){let c=this.elements,f=2/(e-t),u=2/(n-r),h=-(e+t)/(e-t),d=-(n+r)/(n-r),p,b;if(l)p=1/(o-s),b=o/(o-s);else if(a===Gn)p=-2/(o-s),b=-(o+s)/(o-s);else if(a===Ks)p=-1/(o-s),b=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=b,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};gl.prototype.isMatrix4=!0;var we=gl,zr=new W,Bn=new we,db=new W(0,0,0),pb=new W(1,1,1),Di=new W,sa=new W,vn=new W,Jf=new we,jf=new ii,zi=class i{constructor(t=0,e=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(pe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,d),this._y=0);break;default:Kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return jf.setFromEuler(this),this.setFromQuaternion(jf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};zi.DEFAULT_ORDER="XYZ";var ls=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},mb=0,Qf=new W,Vr=new ii,gi=new we,oa=new W,Bs=new W,gb=new W,bb=new ii,td=new W(1,0,0),ed=new W(0,1,0),nd=new W(0,0,1),id={type:"added"},xb={type:"removed"},Gr={type:"childadded",child:null},au={type:"childremoved",child:null},bn=class i extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new W,e=new zi,n=new ii,r=new W(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new we},normalMatrix:{value:new ne}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ls,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.multiply(Vr),this}rotateOnWorldAxis(t,e){return Vr.setFromAxisAngle(t,e),this.quaternion.premultiply(Vr),this}rotateX(t){return this.rotateOnAxis(td,t)}rotateY(t){return this.rotateOnAxis(ed,t)}rotateZ(t){return this.rotateOnAxis(nd,t)}translateOnAxis(t,e){return Qf.copy(t).applyQuaternion(this.quaternion),this.position.add(Qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(td,t)}translateY(t){return this.translateOnAxis(ed,t)}translateZ(t){return this.translateOnAxis(nd,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oa.copy(t):oa.set(t,e,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Bs,oa,this.up):gi.lookAt(oa,Bs,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Vr.setFromRotationMatrix(gi),this.quaternion.premultiply(Vr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(jt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(id),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xb),au.child=t,this.dispatchEvent(au),au.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),gi.multiply(t.parent.matrixWorld)),t.applyMatrix4(gi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(id),Gr.child=t,this.dispatchEvent(Gr),Gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,gb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,bb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,r=t.z,s=this.matrix.elements;s[12]+=e-s[0]*e-s[4]*n-s[8]*r,s[13]+=n-s[1]*e-s[5]*n-s[9]*r,s[14]+=r-s[2]*e-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];r.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),f=o(t.images),u=o(t.shapes),h=o(t.skeletons),d=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=r,n;function o(a){let l=[];for(let c in a){let f=a[c];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let r=t.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bn.DEFAULT_UP=new W(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var De=class extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}},yb={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new De,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new De,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new De,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let b of t.hand.values()){let g=e.getJointPose(b,n),m=this._getHandJoint(c,b);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new De;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},cp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},aa={h:0,s:0,l:0};function lu(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var j=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,fe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=fe.workingColorSpace){return this.r=t,this.g=e,this.b=n,fe.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=fe.workingColorSpace){if(t=cb(t,1),e=pe(e,0,1),n=pe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=lu(o,s,t+1/3),this.g=lu(o,s,t),this.b=lu(o,s,t-1/3)}return fe.colorSpaceToWorking(this,r),this}setStyle(t,e=Ue){function n(s){s!==void 0&&parseFloat(s)<1&&Kt("Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Kt("Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){let n=cp[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return fe.workingToColorSpace(un.copy(this),t),Math.round(pe(un.r*255,0,255))*65536+Math.round(pe(un.g*255,0,255))*256+Math.round(pe(un.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=fe.workingColorSpace){fe.workingToColorSpace(un.copy(this),e);let n=un.r,r=un.g,s=un.b,o=Math.max(n,r,s),a=Math.min(n,r,s),l,c,f=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case n:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-n)/u+2;break;case s:l=(n-r)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=f,t}getRGB(t,e=fe.workingColorSpace){return fe.workingToColorSpace(un.copy(this),e),t.r=un.r,t.g=un.g,t.b=un.b,t}getStyle(t=Ue){fe.workingToColorSpace(un.copy(this),t);let e=un.r,n=un.g,r=un.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Oi),this.setHSL(Oi.h+t,Oi.s+e,Oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Oi),t.getHSL(aa);let n=nu(Oi.h,aa.h,e),r=nu(Oi.s,aa.s,e),s=nu(Oi.l,aa.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},un=new j;j.NAMES=cp;var us=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new j(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},ri=class extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},kn=new W,bi=new W,cu=new W,xi=new W,Hr=new W,Wr=new W,rd=new W,uu=new W,hu=new W,fu=new W,du=new ke,pu=new ke,mu=new ke,_i=class i{constructor(t=new W,e=new W,n=new W){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),kn.subVectors(t,e),r.cross(kn);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){kn.subVectors(r,e),bi.subVectors(n,e),cu.subVectors(t,e);let o=kn.dot(kn),a=kn.dot(bi),l=kn.dot(cu),c=bi.dot(bi),f=bi.dot(cu),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let h=1/u,d=(c*l-a*f)*h,p=(o*f-a*l)*h;return s.set(1-d-p,p,d)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(t,e,n,r,s,o,a,l){return this.getBarycoord(t,e,n,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(t,e,n,r,s,o){return du.setScalar(0),pu.setScalar(0),mu.setScalar(0),du.fromBufferAttribute(t,e),pu.fromBufferAttribute(t,n),mu.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(du,s.x),o.addScaledVector(pu,s.y),o.addScaledVector(mu,s.z),o}static isFrontFacing(t,e,n,r){return kn.subVectors(n,e),bi.subVectors(t,e),kn.cross(bi).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return kn.subVectors(this.c,this.b),bi.subVectors(this.a,this.b),kn.cross(bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return i.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,r=this.b,s=this.c,o,a;Hr.subVectors(r,n),Wr.subVectors(s,n),uu.subVectors(t,n);let l=Hr.dot(uu),c=Wr.dot(uu);if(l<=0&&c<=0)return e.copy(n);hu.subVectors(t,r);let f=Hr.dot(hu),u=Wr.dot(hu);if(f>=0&&u<=f)return e.copy(r);let h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),e.copy(n).addScaledVector(Hr,o);fu.subVectors(t,s);let d=Hr.dot(fu),p=Wr.dot(fu);if(p>=0&&d<=p)return e.copy(s);let b=d*c-l*p;if(b<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(Wr,a);let g=f*p-d*u;if(g<=0&&u-f>=0&&d-p>=0)return rd.subVectors(s,r),a=(u-f)/(u-f+(d-p)),e.copy(r).addScaledVector(rd,a);let m=1/(g+b+h);return o=b*m,a=h*m,e.copy(n).addScaledVector(Hr,o).addScaledVector(Wr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},xn=class{constructor(t=new W(1/0,1/0,1/0),e=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),la.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),la.copy(n.boundingBox)),la.applyMatrix4(t.matrixWorld),this.union(la)}let r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ks),ca.subVectors(this.max,ks),Xr.subVectors(t.a,ks),Yr.subVectors(t.b,ks),qr.subVectors(t.c,ks),Ni.subVectors(Yr,Xr),Ui.subVectors(qr,Yr),cr.subVectors(Xr,qr);let e=[0,-Ni.z,Ni.y,0,-Ui.z,Ui.y,0,-cr.z,cr.y,Ni.z,0,-Ni.x,Ui.z,0,-Ui.x,cr.z,0,-cr.x,-Ni.y,Ni.x,0,-Ui.y,Ui.x,0,-cr.y,cr.x,0];return!gu(e,Xr,Yr,qr,ca)||(e=[1,0,0,0,1,0,0,0,1],!gu(e,Xr,Yr,qr,ca))?!1:(ua.crossVectors(Ni,Ui),e=[ua.x,ua.y,ua.z],gu(e,Xr,Yr,qr,ca))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(yi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},yi=[new W,new W,new W,new W,new W,new W,new W,new W],zn=new W,la=new xn,Xr=new W,Yr=new W,qr=new W,Ni=new W,Ui=new W,cr=new W,ks=new W,ca=new W,ua=new W,ur=new W;function gu(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ur.fromArray(i,s);let a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=t.dot(ur),c=e.dot(ur),f=n.dot(ur);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}var We=new W,ha=new te,vb=0,Sn=class extends ni{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vb++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ih,this.updateRanges=[],this.gpuType=Yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ha.fromBufferAttribute(this,e),ha.applyMatrix3(t),this.setXY(e,ha.x,ha.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qs=class extends Sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var mr=class extends Sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ft=class extends Sn{constructor(t,e,n){super(new Float32Array(t),e,n)}},_b=new xn,zs=new W,bu=new W,Vi=class{constructor(t=new W,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):_b.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(zs,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(bu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(bu)),this.expandByPoint(zs.copy(t.center).sub(bu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Mb=0,In=new we,xu=new bn,$r=new W,_n=new xn,Vs=new xn,je=new W,Gt=class i extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ab(t)?mr:Qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ne().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return In.makeRotationFromQuaternion(t),this.applyMatrix4(In),this}rotateX(t){return In.makeRotationX(t),this.applyMatrix4(In),this}rotateY(t){return In.makeRotationY(t),this.applyMatrix4(In),this}rotateZ(t){return In.makeRotationZ(t),this.applyMatrix4(In),this}translate(t,e,n){return In.makeTranslation(t,e,n),this.applyMatrix4(In),this}scale(t,e,n){return In.makeScale(t,e,n),this.applyMatrix4(In),this}lookAt(t){return xu.lookAt(t),xu.updateMatrix(),this.applyMatrix4(xu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($r).negate(),this.translate($r.x,$r.y,$r.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let r=0,s=t.length;r<s;r++){let o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(n,3))}else{let n=Math.min(t.length,e.count);for(let r=0;r<n;r++){let s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&Kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){let s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Vs.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(_n.min,Vs.min),_n.expandByPoint(je),je.addVectors(_n.max,Vs.max),_n.expandByPoint(je)):(_n.expandByPoint(Vs.min),_n.expandByPoint(Vs.max))}_n.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)je.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)je.fromBufferAttribute(a,c),l&&($r.fromBufferAttribute(t,c),je.add($r)),r=Math.max(r,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,r=e.normal,s=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let _=0;_<n.count;_++)a[_]=new W,l[_]=new W;let c=new W,f=new W,u=new W,h=new te,d=new te,p=new te,b=new W,g=new W;function m(_,R,S){c.fromBufferAttribute(n,_),f.fromBufferAttribute(n,R),u.fromBufferAttribute(n,S),h.fromBufferAttribute(s,_),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),f.sub(c),u.sub(c),d.sub(h),p.sub(h);let E=1/(d.x*p.y-p.x*d.y);isFinite(E)&&(b.copy(f).multiplyScalar(p.y).addScaledVector(u,-d.y).multiplyScalar(E),g.copy(u).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(E),a[_].add(b),a[R].add(b),a[S].add(b),l[_].add(g),l[R].add(g),l[S].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let _=0,R=x.length;_<R;++_){let S=x[_],E=S.start,I=S.count;for(let O=E,C=E+I;O<C;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new W,y=new W,M=new W,w=new W;function A(_){M.fromBufferAttribute(r,_),w.copy(M);let R=a[_];v.copy(R),v.sub(M.multiplyScalar(M.dot(R))).normalize(),y.crossVectors(w,R);let E=y.dot(l[_])<0?-1:1;o.setXYZW(_,v.x,v.y,v.z,E)}for(let _=0,R=x.length;_<R;++_){let S=x[_],E=S.start,I=S.count;for(let O=E,C=E+I;O<C;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);let r=new W,s=new W,o=new W,a=new W,l=new W,c=new W,f=new W,u=new W;if(t)for(let h=0,d=t.count;h<d;h+=3){let p=t.getX(h+0),b=t.getX(h+1),g=t.getX(h+2);r.fromBufferAttribute(e,p),s.fromBufferAttribute(e,b),o.fromBufferAttribute(e,g),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,b),c.fromBufferAttribute(n,g),a.add(f),l.add(f),c.add(f),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(b,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let h=0,d=e.count;h<d;h+=3)r.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(a,l){let c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f),d=0,p=0;for(let b=0,g=l.length;b<g;b++){a.isInterleavedBufferAttribute?d=l[b]*a.data.stride+a.offset:d=l[b]*f;for(let m=0;m<f;m++)h[p++]=c[d++]}return new Sn(h,f,u)}if(this.index===null)return Kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,r=this.attributes;for(let a in r){let l=r[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){let h=c[f],d=t(h,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){let d=c[u];f.push(d.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let r=t.attributes;for(let c in r){let f=r[c];this.setAttribute(c,f.clone(e))}let s=t.morphAttributes;for(let c in s){let f=[],u=s[c];for(let h=0,d=u.length;h<d;h++)f.push(u[h].clone(e));this.morphAttributes[c]=f}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,f=o.length;c<f;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Za=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ki()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},gn=new W,to=class i{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyMatrix4(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.applyNormalMatrix(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)gn.fromBufferAttribute(this,e),gn.transformDirection(t),this.setXYZ(e,gn.x,gn.y,gn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ti(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ti(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ti(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ti(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ti(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),n=Se(n,this.array),r=Se(r,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Js("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new Sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Js("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},yu=new W,Sb=new W,wb=new ne,Vn=class{constructor(t=new W(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let r=yu.subVectors(n,e).cross(Sb.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let r=t.delta(yu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(r,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||wb.getNormalMatrix(t),r=this.coplanarPoint(yu).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Tb=0,si=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Tn,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bu,this.blendDst=ku,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Da,this.stencilZFail=Da,this.stencilZPass=Da,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Kt(`Material: parameter '${e}' has value of undefined.`);continue}let r=this[e];if(r===void 0){Kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new j().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},hs=class extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Zr,Gs=new W,Kr=new W,Jr=new W,jr=new te,Hs=new te,up=new we,fa=new W,Ws=new W,da=new W,sd=new te,vu=new te,od=new te,eo=class extends bn{constructor(t=new hs){if(super(),this.isSprite=!0,this.type="Sprite",Zr===void 0){Zr=new Gt;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Za(e,5);Zr.setIndex([0,1,2,0,2,3]),Zr.setAttribute("position",new to(n,3,0,!1)),Zr.setAttribute("uv",new to(n,2,3,!1))}this.geometry=Zr,this.material=t,this.center=new te(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&jt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Kr.setFromMatrixScale(this.matrixWorld),up.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Jr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Kr.multiplyScalar(-Jr.z);let n=this.material.rotation,r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));let o=this.center;pa(fa.set(-.5,-.5,0),Jr,o,Kr,r,s),pa(Ws.set(.5,-.5,0),Jr,o,Kr,r,s),pa(da.set(.5,.5,0),Jr,o,Kr,r,s),sd.set(0,0),vu.set(1,0),od.set(1,1);let a=t.ray.intersectTriangle(fa,Ws,da,!1,Gs);if(a===null&&(pa(Ws.set(-.5,.5,0),Jr,o,Kr,r,s),vu.set(0,1),a=t.ray.intersectTriangle(fa,da,Ws,!1,Gs),a===null))return;let l=t.ray.origin.distanceTo(Gs);l<t.near||l>t.far||e.push({distance:l,point:Gs.clone(),uv:_i.getInterpolation(Gs,fa,Ws,da,sd,vu,od,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function pa(i,t,e,n,r,s){jr.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(Hs.x=s*jr.x-r*jr.y,Hs.y=r*jr.x+s*jr.y):Hs.copy(jr),i.copy(t),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(up)}var vi=new W,_u=new W,ma=new W,ga=new W,gr=class{constructor(t=new W,e=new W(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=vi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vi.copy(this.origin).addScaledVector(this.direction,e),vi.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){_u.copy(t).add(e).multiplyScalar(.5),ma.copy(e).sub(t).normalize(),ga.copy(this.origin).sub(_u);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ma),a=ga.dot(this.direction),l=-ga.dot(ma),c=ga.lengthSq(),f=Math.abs(1-o*o),u,h,d,p;if(f>0)if(u=o*l-a,h=o*a-l,p=s*f,u>=0)if(h>=-p)if(h<=p){let b=1/f;u*=b,h*=b,d=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;else h<=-p?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c):h<=p?(u=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),d=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(_u).addScaledVector(ma,h),d}intersectSphere(t,e){if(t.radius<0)return null;vi.subVectors(t.center,this.origin);let n=vi.dot(this.direction),r=vi.dot(vi)-n*n,s=t.radius*t.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,l,c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,r=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,r=(t.min.x-h.x)*c),f>=0?(s=(t.min.y-h.y)*f,o=(t.max.y-h.y)*f):(s=(t.max.y-h.y)*f,o=(t.min.y-h.y)*f),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-h.z)*u,l=(t.max.z-h.z)*u):(a=(t.max.z-h.z)*u,l=(t.min.z-h.z)*u),n>l||a>r)||((a>n||n!==n)&&(n=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,vi)!==null}intersectTriangle(t,e,n,r,s){let o=this.origin,a=this.direction,l=a.x,c=a.y,f=a.z,u=t.x-o.x,h=t.y-o.y,d=t.z-o.z,p=e.x-o.x,b=e.y-o.y,g=e.z-o.z,m=n.x-o.x,x=n.y-o.y,v=n.z-o.z,y=Math.abs(l),M=Math.abs(c),w=Math.abs(f),A,_,R,S,E,I,O,C,L,T,P,N;if(y>=M&&y>=w?(R=l,I=u,L=p,N=m,l>=0?(A=c,_=f,S=h,E=d,O=b,C=g,T=x,P=v):(A=f,_=c,S=d,E=h,O=g,C=b,T=v,P=x)):M>=w?(R=c,I=h,L=b,N=x,c>=0?(A=f,_=l,S=d,E=u,O=g,C=p,T=v,P=m):(A=l,_=f,S=u,E=d,O=p,C=g,T=m,P=v)):(R=f,I=d,L=g,N=v,f>=0?(A=l,_=c,S=u,E=h,O=p,C=b,T=m,P=x):(A=c,_=l,S=h,E=u,O=b,C=p,T=x,P=m)),R===0)return null;let F=A/R,z=_/R,B=1/R,V=S-F*I,H=E-z*I,J=O-F*L,tt=C-z*L,ot=T-F*N,X=P-z*N,q=ot*tt-X*J,Y=V*X-H*ot,st=J*H-tt*V;if(r){if(q<0||Y<0||st<0)return null}else if((q<0||Y<0||st<0)&&(q>0||Y>0||st>0))return null;let rt=q+Y+st;if(rt===0)return null;let lt=B*(q*I+Y*L+st*N);return(rt>0?lt<0:lt>0)?null:this.at(lt/rt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Yt=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=zu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ad=new we,hr=new gr,ba=new Vi,ld=new W,xa=new W,ya=new W,va=new W,Mu=new W,_a=new W,cd=new W,Ma=new W,Ct=class extends bn{constructor(t=new Gt,e=new Yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);let a=this.morphTargetInfluences;if(s&&a){_a.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let f=a[l],u=s[l];f!==0&&(Mu.fromBufferAttribute(u,t),o?_a.addScaledVector(Mu,f):_a.addScaledVector(Mu.sub(e),f))}e.add(_a)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ba.copy(n.boundingSphere),ba.applyMatrix4(s),hr.copy(t.ray).recast(t.near),!(ba.containsPoint(hr.origin)===!1&&(hr.intersectSphere(ba,ld)===null||hr.origin.distanceToSquared(ld)>(t.far-t.near)**2))&&(ad.copy(s).invert(),hr.copy(t.ray).applyMatrix4(ad),!(n.boundingBox!==null&&hr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,hr)))}_computeIntersections(t,e,n){let r,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,b=h.length;p<b;p++){let g=h[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(a.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let w=a.getX(y),A=a.getX(y+1),_=a.getX(y+2);r=Sa(this,m,t,n,c,f,u,w,A,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(a.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Sa(this,o,t,n,c,f,u,x,v,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,b=h.length;p<b;p++){let g=h[p],m=o[g.materialIndex],x=Math.max(g.start,d.start),v=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let w=y,A=y+1,_=y+2;r=Sa(this,m,t,n,c,f,u,w,A,_),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,e.push(r))}}else{let p=Math.max(0,d.start),b=Math.min(l.count,d.start+d.count);for(let g=p,m=b;g<m;g+=3){let x=g,v=g+1,y=g+2;r=Sa(this,o,t,n,c,f,u,x,v,y),r&&(r.faceIndex=Math.floor(g/3),e.push(r))}}}};function Eb(i,t,e,n,r,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,r,!0,a):l=n.intersectTriangle(r,s,o,t.side===ai,a),l===null)return null;Ma.copy(a),Ma.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ma);return c<e.near||c>e.far?null:{distance:c,point:Ma.clone(),object:i}}function Sa(i,t,e,n,r,s,o,a,l,c){i.getVertexPosition(a,xa),i.getVertexPosition(l,ya),i.getVertexPosition(c,va);let f=Eb(i,t,e,n,xa,ya,va,cd);if(f){let u=new W;_i.getBarycoord(cd,xa,ya,va,u),r&&(f.uv=_i.getInterpolatedAttribute(r,a,l,c,u,new te)),s&&(f.uv1=_i.getInterpolatedAttribute(s,a,l,c,u,new te)),o&&(f.normal=_i.getInterpolatedAttribute(o,a,l,c,u,new W),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));let h={a,b:l,c,normal:new W,materialIndex:0};_i.getNormal(xa,ya,va,h.normal),f.face=h,f.barycoord=u}return f}var Ka=class extends hn{constructor(t=null,e=1,n=1,r,s,o,a,l,c=tn,f=tn,u,h){super(null,o,a,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fr=new Vi,Ab=new te(.5,.5),wa=new W,no=class{constructor(t=new Vn,e=new Vn,n=new Vn,r=new Vn,s=new Vn,o=new Vn){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gn,n=!1){let r=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],d=s[7],p=s[8],b=s[9],g=s[10],m=s[11],x=s[12],v=s[13],y=s[14],M=s[15];if(r[0].setComponents(c-o,d-f,m-p,M-x).normalize(),r[1].setComponents(c+o,d+f,m+p,M+x).normalize(),r[2].setComponents(c+a,d+u,m+b,M+v).normalize(),r[3].setComponents(c-a,d-u,m-b,M-v).normalize(),n)r[4].setComponents(l,h,g,y).normalize(),r[5].setComponents(c-l,d-h,m-g,M-y).normalize();else if(r[4].setComponents(c-l,d-h,m-g,M-y).normalize(),e===Gn)r[5].setComponents(c+l,d+h,m+g,M+y).normalize();else if(e===Ks)r[5].setComponents(l,h,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(t){fr.center.set(0,0,0);let e=Ab.distanceTo(t.center);return fr.radius=.7071067811865476+e,fr.applyMatrix4(t.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(t){let e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let r=e[n];if(wa.x=r.normal.x>0?t.max.x:t.min.x,wa.y=r.normal.y>0?t.max.y:t.min.y,wa.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(wa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var $e=class extends si{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Ja=new W,ja=new W,ud=new we,Xs=new gr,Ta=new Vi,Su=new W,hd=new W,Qa=class extends bn{constructor(t=new Gt,e=new $e){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Ja.fromBufferAttribute(e,r-1),ja.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Ja.distanceTo(ja);t.setAttribute("lineDistance",new Ft(n,1))}else Kt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ta.copy(n.boundingSphere),Ta.applyMatrix4(r),Ta.radius+=s,t.ray.intersectsSphere(Ta)===!1)return;ud.copy(r).invert(),Xs.copy(t.ray).applyMatrix4(ud);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){let d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=f.getX(b),x=f.getX(b+1),v=Ea(this,t,Xs,l,m,x,b);v&&e.push(v)}if(this.isLineLoop){let b=f.getX(p-1),g=f.getX(d),m=Ea(this,t,Xs,l,b,g,p-1);m&&e.push(m)}}else{let d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let b=d,g=p-1;b<g;b+=c){let m=Ea(this,t,Xs,l,b,b+1,b);m&&e.push(m)}if(this.isLineLoop){let b=Ea(this,t,Xs,l,p-1,d,p-1);b&&e.push(b)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Ea(i,t,e,n,r,s,o){let a=i.geometry.attributes.position;if(Ja.fromBufferAttribute(a,r),ja.fromBufferAttribute(a,s),e.distanceSqToSegment(Ja,ja,Su,hd)>n)return;Su.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Su);if(!(c<t.near||c>t.far))return{distance:c,point:hd.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var fd=new W,dd=new W,qe=class extends Qa{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)fd.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+fd.distanceTo(dd);t.setAttribute("lineDistance",new Ft(n,1))}else Kt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Si=class extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},pd=new we,Cu=new gr,Aa=new Vi,Ra=new W,Gi=class extends bn{constructor(t=new Gt,e=new Si){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(r),Aa.radius+=s,t.ray.intersectsSphere(Aa)===!1)return;pd.copy(r).invert(),Cu.copy(t.ray).applyMatrix4(pd);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let h=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let p=h,b=d;p<b;p++){let g=c.getX(p);Ra.fromBufferAttribute(u,g),md(Ra,g,l,r,t,e,this)}}else{let h=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let p=h,b=d;p<b;p++)Ra.fromBufferAttribute(u,p),md(Ra,p,l,r,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function md(i,t,e,n,r,s,o){let a=Cu.distanceSqToPoint(i);if(a<e){let l=new W;Cu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var io=class extends hn{constructor(t=[],e=Yi,n,r,s,o,a,l,c,f){super(t,e,n,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yn=class extends hn{constructor(t,e,n,r,s,o,a,l,c){super(t,e,n,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends hn{constructor(t,e,n=Xn,r,s,o,a=tn,l=tn,c,f=ei,u=1){if(f!==ei&&f!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:t,height:e,depth:u};super(h,r,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new as(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},tl=class extends oi{constructor(t,e=Xn,n=Yi,r,s,o=tn,a=tn,l,c=ei){let f={width:t,height:t,depth:1},u=[f,f,f,f,f,f];super(t,t,e,n,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ro=class extends hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},fs=class i extends Gt{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],f=[],u=[],h=0,d=0;p("z","y","x",-1,-1,n,e,t,o,s,0),p("z","y","x",1,-1,n,e,-t,o,s,1),p("x","z","y",1,1,t,n,e,r,o,2),p("x","z","y",1,-1,t,n,-e,r,o,3),p("x","y","z",1,-1,t,e,n,r,s,4),p("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(f,3)),this.setAttribute("uv",new Ft(u,2));function p(b,g,m,x,v,y,M,w,A,_,R){let S=y/A,E=M/_,I=y/2,O=M/2,C=w/2,L=A+1,T=_+1,P=0,N=0,F=new W;for(let z=0;z<T;z++){let B=z*E-O;for(let V=0;V<L;V++){let H=V*S-I;F[b]=H*x,F[g]=B*v,F[m]=C,c.push(F.x,F.y,F.z),F[b]=0,F[g]=0,F[m]=w>0?1:-1,f.push(F.x,F.y,F.z),u.push(V/A),u.push(1-z/_),P+=1}}for(let z=0;z<_;z++)for(let B=0;B<A;B++){let V=h+B+L*z,H=h+B+L*(z+1),J=h+(B+1)+L*(z+1),tt=h+(B+1)+L*z;l.push(V,H,tt),l.push(H,J,tt),N+=6}a.addGroup(d,N,R),d+=N,h+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var so=class i extends Gt{constructor(t=1,e=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:r},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new W,f=new te;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,h=3;u<=e;u++,h+=3){let d=n+u/e*r;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[h]/t+1)/2,f.y=(o[h+1]/t+1)/2,l.push(f.x,f.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};function Rb(i,t,e=2){let n=t&&t.length,r=n?t[0]*e:i.length,s=hp(i,0,r,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=Fb(i,t,s,e)),i.length>80*e){a=i[0],l=i[1];let f=a,u=l;for(let h=e;h<r;h+=e){let d=i[h],p=i[h+1];d<a&&(a=d),p<l&&(l=p),d>f&&(f=d),p>u&&(u=p)}c=Math.max(f-a,u-l),c=c!==0?32767/c:0}return oo(s,o,e,a,l,c,0),o}function hp(i,t,e,n,r){let s;if(r===Wb(i,t,e,n)>0)for(let o=t;o<e;o+=n)s=gd(o/n|0,i[o],i[o+1],s);else for(let o=e-n;o>=t;o-=n)s=gd(o/n|0,i[o],i[o+1],s);return s&&ds(s,s.next)&&(lo(s),s=s.next),s}function br(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ds(e,e.next)||Be(e.prev,e,e.next)===0)){if(lo(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function oo(i,t,e,n,r,s,o){if(!i)return;!o&&s&&Bb(i,n,r,s);let a=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(s?Pb(i,n,r,s):Cb(i)){t.push(l.i,i.i,c.i),lo(i),i=c.next,a=c.next;continue}if(i=c,i===a){o?o===1?(i=Ib(br(i),t),oo(i,t,e,n,r,s,2)):o===2&&Lb(i,t,e,n,r,s):oo(br(i),t,e,n,r,s,1);break}}}function Cb(i){let t=i.prev,e=i,n=i.next;if(Be(t,e,n)>=0)return!1;let r=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,f=Math.min(r,s,o),u=Math.min(a,l,c),h=Math.max(r,s,o),d=Math.max(a,l,c),p=n.next;for(;p!==t;){if(p.x>=f&&p.x<=h&&p.y>=u&&p.y<=d&&Ys(r,a,s,l,o,c,p.x,p.y)&&Be(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function Pb(i,t,e,n){let r=i.prev,s=i,o=i.next;if(Be(r,s,o)>=0)return!1;let a=r.x,l=s.x,c=o.x,f=r.y,u=s.y,h=o.y,d=Math.min(a,l,c),p=Math.min(f,u,h),b=Math.max(a,l,c),g=Math.max(f,u,h),m=Pu(d,p,t,e,n),x=Pu(b,g,t,e,n),v=i.prevZ,y=i.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ys(a,f,l,u,c,h,v.x,v.y)&&Be(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=b&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&Ys(a,f,l,u,c,h,y.x,y.y)&&Be(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=b&&v.y>=p&&v.y<=g&&v!==r&&v!==o&&Ys(a,f,l,u,c,h,v.x,v.y)&&Be(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=b&&y.y>=p&&y.y<=g&&y!==r&&y!==o&&Ys(a,f,l,u,c,h,y.x,y.y)&&Be(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Ib(i,t){let e=i;do{let n=e.prev,r=e.next.next;!ds(n,r)&&dp(n,e,e.next,r)&&ao(n,r)&&ao(r,n)&&(t.push(n.i,e.i,r.i),lo(e),lo(e.next),e=i=r),e=e.next}while(e!==i);return br(e)}function Lb(i,t,e,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Vb(o,a)){let l=pp(o,a);o=br(o,o.next),l=br(l,l.next),oo(o,t,e,n,r,s,0),oo(l,t,e,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function Fb(i,t,e,n){let r=[];for(let s=0,o=t.length;s<o;s++){let a=t[s]*n,l=s<o-1?t[s+1]*n:i.length,c=hp(i,a,l,n,!1);c===c.next&&(c.steiner=!0),r.push(zb(c))}r.sort(Db);for(let s=0;s<r.length;s++)e=Ob(r[s],e);return e}function Db(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function Ob(i,t){let e=Nb(i,t);if(!e)return t;let n=pp(e,i);return br(n,n.next),br(e,e.next)}function Nb(i,t){let e=t,n=i.x,r=i.y,s=-1/0,o;if(ds(i,e))return e;do{if(ds(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){let u=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=n&&u>s&&(s=u,o=e.x<e.next.x?e:e.next,u===n))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,c=o.y,f=1/0;e=o;do{if(n>=e.x&&e.x>=l&&n!==e.x&&fp(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){let u=Math.abs(r-e.y)/(n-e.x);ao(e,i)&&(u<f||u===f&&(e.x>o.x||e.x===o.x&&Ub(o,e)))&&(o=e,f=u)}e=e.next}while(e!==a);return o}function Ub(i,t){return Be(i.prev,i,t.prev)<0&&Be(t.next,i,i.next)<0}function Bb(i,t,e,n){let r=i;do r.z===0&&(r.z=Pu(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,kb(r)}function kb(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let o=n,a=0;for(let c=0;c<e&&(a++,o=o.nextZ,!!o);c++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(r=n,n=n.nextZ,a--):(r=o,o=o.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=o}s.nextZ=null,e*=2}while(t>1);return i}function Pu(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function zb(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function fp(i,t,e,n,r,s,o,a){return(r-o)*(t-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(r-o)*(n-a)}function Ys(i,t,e,n,r,s,o,a){return!(i===o&&t===a)&&fp(i,t,e,n,r,s,o,a)}function Vb(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Gb(i,t)&&(ao(i,t)&&ao(t,i)&&Hb(i,t)&&(Be(i.prev,i,t.prev)||Be(i,t.prev,t))||ds(i,t)&&Be(i.prev,i,i.next)>0&&Be(t.prev,t,t.next)>0)}function Be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ds(i,t){return i.x===t.x&&i.y===t.y}function dp(i,t,e,n){let r=Pa(Be(i,t,e)),s=Pa(Be(i,t,n)),o=Pa(Be(e,n,i)),a=Pa(Be(e,n,t));return!!(r!==s&&o!==a||r===0&&Ca(i,e,t)||s===0&&Ca(i,n,t)||o===0&&Ca(e,i,n)||a===0&&Ca(e,t,n))}function Ca(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Pa(i){return i>0?1:i<0?-1:0}function Gb(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&dp(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ao(i,t){return Be(i.prev,i,i.next)<0?Be(i,t,i.next)>=0&&Be(i,i.prev,t)>=0:Be(i,t,i.prev)<0||Be(i,i.next,t)<0}function Hb(i,t){let e=i,n=!1,r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function pp(i,t){let e=Iu(i.i,i.x,i.y),n=Iu(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function gd(i,t,e,n){let r=Iu(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function lo(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Iu(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wb(i,t,e,n){let r=0;for(let s=t,o=e-n;s<e;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Lu=class{static triangulate(t,e,n=2){return Rb(t,e,n)}},co=class i{static area(t){let e=t.length,n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],r=[],s=[];bd(t),xd(n,t);let o=t.length;e.forEach(bd);for(let l=0;l<e.length;l++)r.push(o),o+=e[l].length,xd(n,e[l]);let a=Lu.triangulate(n,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function bd(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function xd(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Hn=class i extends Gt{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(r),c=a+1,f=l+1,u=t/a,h=e/l,d=[],p=[],b=[],g=[];for(let m=0;m<f;m++){let x=m*h-o;for(let v=0;v<c;v++){let y=v*u-s;p.push(y,-x,0),b.push(0,0,1),g.push(v/a),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let v=x+c*m,y=x+c*(m+1),M=x+1+c*(m+1),w=x+1+c*m;d.push(v,y,w),d.push(y,M,w)}this.setIndex(d),this.setAttribute("position",new Ft(p,3)),this.setAttribute("normal",new Ft(b,3)),this.setAttribute("uv",new Ft(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},uo=class i extends Gt{constructor(t=.5,e=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],l=[],c=[],f=[],u=t,h=(e-t)/r,d=new W,p=new te;for(let b=0;b<=r;b++){for(let g=0;g<=n;g++){let m=s+g/n*o;d.x=u*Math.cos(m),d.y=u*Math.sin(m),l.push(d.x,d.y,d.z),c.push(0,0,1),p.x=(d.x/e+1)/2,p.y=(d.y/e+1)/2,f.push(p.x,p.y)}u+=h}for(let b=0;b<r;b++){let g=b*(n+1);for(let m=0;m<n;m++){let x=m+g,v=x,y=x+n+1,M=x+n+2,w=x+1;a.push(v,y,w),a.push(y,M,w)}}this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};function _r(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let r=i[e][n];if(yd(r))r.isRenderTargetTexture?(Kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone();else if(Array.isArray(r))if(yd(r[0])){let s=[];for(let o=0,a=r.length;o<a;o++)s[o]=r[o].clone();t[e][n]=s}else t[e][n]=r.slice();else t[e][n]=r}}return t}function dn(i){let t={};for(let e=0;e<i.length;e++){let n=_r(i[e]);for(let r in n)t[r]=n[r]}return t}function yd(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xb(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function oh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:fe.workingColorSpace}var mp={clone:_r,merge:dn},Yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Yb,this.fragmentShader=qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_r(t.uniforms),this.uniformsGroups=Xb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let r=t.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=e[r.value]||null;break;case"c":this.uniforms[n].value=new j().setHex(r.value);break;case"v2":this.uniforms[n].value=new te().fromArray(r.value);break;case"v3":this.uniforms[n].value=new W().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ke().fromArray(r.value);break;case"m3":this.uniforms[n].value=new ne().fromArray(r.value);break;case"m4":this.uniforms[n].value=new we().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},el=class extends fn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var nl=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Kd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},il=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function wu(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Hi=class{constructor(t,e,n,r){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,r=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<r)){for(let a=n+2;;){if(r===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=e[++n],t<r)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(r=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,t,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=t*r;for(let o=0;o!==r;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},rl=class extends Hi{constructor(t,e,n,r){super(t,e,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Eu,endingEnd:Eu}}intervalChanged_(t,e,n){let r=this.parameterPositions,s=t-2,o=t+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:s=t,a=2*e-n;break;case Ru:s=r.length-2,a=e+r[s]-r[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:o=t,l=2*n-e;break;case Ru:o=1,l=n+r[1]-r[0];break;default:o=t-1,l=e}let c=(n-e)*.5,f=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*f,this._offsetNext=o*f}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this._offsetPrev,u=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-e)/(r-e),b=p*p,g=b*p,m=-h*g+2*h*b-h*p,x=(1+h)*g+(-1.5-2*h)*b+(-.5+h)*p+1,v=(-1-d)*g+(1.5+d)*b+.5*p,y=d*g-d*b;for(let M=0;M!==a;++M)s[M]=m*o[f+M]+x*o[c+M]+v*o[l+M]+y*o[u+M];return s}},sl=class extends Hi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=(n-e)/(r-e),u=1-f;for(let h=0;h!==a;++h)s[h]=o[c+h]*u+o[l+h]*f;return s}},ol=class extends Hi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t){return this.copySampleValue_(t-1)}},al=class extends Hi{interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,f=this.inTangents,u=this.outTangents;if(!f||!u){let p=(n-e)/(r-e),b=1-p;for(let g=0;g!==a;++g)s[g]=o[c+g]*b+o[l+g]*p;return s}let h=a*2,d=t-1;for(let p=0;p!==a;++p){let b=o[c+p],g=o[l+p],m=d*h+p*2,x=u[m],v=u[m+1],y=t*h+p*2,M=f[y],w=f[y+1],A=Zb(n,e,x,M,r);s[p]=gp(A,b,v,w,g)}return s}};function gp(i,t,e,n,r){let s=1-i;return s*s*s*t+3*s*s*i*e+3*s*i*i*n+i*i*i*r}function $b(i,t,e,n,r){let s=1-i;return 3*s*s*(e-t)+6*s*i*(n-e)+3*i*i*(r-n)}function Zb(i,t,e,n,r){let s=(i-t)/(r-t);for(let o=0;o<8;o++){let a=gp(s,t,e,n,r)-i;if(Math.abs(a)<1e-10)break;let l=$b(s,t,e,n,r);if(Math.abs(l)<1e-10)break;s=Math.max(0,Math.min(1,s-a/l))}return s}var wn=class{constructor(t,e,n,r){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};let r=t.getInterpolation();r!==t.DefaultInterpolation&&(n.interpolation=r),wu(t.settings)&&(n.settings={inTangents:Qr(t.settings.inTangents,Array),outTangents:Qr(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ol(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new al(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case Wa:e=this.InterpolantFactoryMethodLinear;break;case Fa:e=this.InterpolantFactoryMethodSmooth;break;case Tu:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return Wa;case this.InterpolantFactoryMethodSmooth:return Fa;case this.InterpolantFactoryMethodBezier:return Tu}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,r=e.length;n!==r;++n)e[n]*=t;wu(this.settings)&&(vd(this.settings.inTangents,t),vd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(jt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,r=this.values,s=n.length;s===0&&(jt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){jt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){jt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(r!==void 0&&lb(r))for(let a=0,l=r.length;a!==l;++a){let c=r[a];if(isNaN(c)){jt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],f=t[a+1];if(c!==f&&(a!==1||c!==t[0]))if(r)l=!0;else{let u=a*n,h=u-n,d=u+n;for(let p=0;p!==n;++p){let b=e[u+p];if(b!==e[h+p]||b!==e[d+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,h=o*n;for(let d=0;d!==n;++d)e[h+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,r=new n(this.name,t,e);return r.createInterpolant=this.createInterpolant,wu(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function vd(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=Wa;var Wi=class extends wn{constructor(t,e,n){super(t,e,n)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=qs;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};ll.prototype.ValueTypeName="color";var cl=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};cl.prototype.ValueTypeName="number";var ul=class extends Hi{constructor(t,e,n,r){super(t,e,n,r)}interpolate_(t,e,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(r-e),c=t*a;for(let f=c+a;c!==f;c+=4)ii.slerpFlat(s,0,o,c-a,o,c,l);return s}},ho=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}};ho.prototype.ValueTypeName="quaternion";ho.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends wn{constructor(t,e,n){super(t,e,n)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=qs;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var hl=class extends wn{constructor(t,e,n,r){super(t,e,n,r)}};hl.prototype.ValueTypeName="vector";var Oa={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(_d(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!_d(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function _d(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var fl=class{constructor(t,e,n){let r=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return f=f.normalize("NFC"),l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,u){return c.push(f,u),this},this.removeHandler=function(f){let u=c.indexOf(f);return u!==-1&&c.splice(u,2),this},this.getHandler=function(f){for(let u=0,h=c.length;u<h;u+=2){let d=c[u],p=c[u+1];if(d.global&&(d.lastIndex=0),d.test(f))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},bp=new fl,ps=class{constructor(t){this.manager=t!==void 0?t:bp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ps.DEFAULT_MATERIAL_NAME="__DEFAULT";var ts=new WeakMap,dl=class extends ps{constructor(t){super(t)}load(t,e,n,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Oa.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0);else{let u=ts.get(o);u===void 0&&(u=[],ts.set(o,u)),u.push({onLoad:e,onError:r})}return o}let a=ss("img");function l(){f(),e&&e(this);let u=ts.get(this)||[];for(let h=0;h<u.length;h++){let d=u[h];d.onLoad&&d.onLoad(this)}ts.delete(this),s.manager.itemEnd(t)}function c(u){f(),r&&r(u),Oa.remove(`image:${t}`);let h=ts.get(this)||[];for(let d=0;d<h.length;d++){let p=h[d];p.onError&&p.onError(u)}ts.delete(this),s.manager.itemError(t),s.manager.itemEnd(t)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Oa.add(`image:${t}`,a),s.manager.itemStart(t),a.src=t,a}};var xr=class extends ps{constructor(t){super(t)}load(t,e,n,r){let s=new hn,o=new dl(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,r),s}};var Ia=new W,La=new ii,Qn=new W,fo=class extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ia,La,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Qn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Ia,La,Qn),Qn.x===1&&Qn.y===1&&Qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,Qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Bi=new W,Md=new te,Sd=new te,Qe=class extends fo{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(eu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(eu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-t/Bi.z)}getViewSize(t,e){return this.getViewBounds(t,Md,Sd),e.subVectors(Sd,Md)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(eu*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,e-=o.offsetY*n/c,r*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Ln=class extends fo{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-t,o=n+t,a=r+e,l=r-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var es=-90,ns=1,pl=class extends bn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Qe(es,ns,t,e);r.layers=this.layers,this.add(r);let s=new Qe(es,ns,t,e);s.layers=this.layers,this.add(s);let o=new Qe(es,ns,t,e);o.layers=this.layers,this.add(o);let a=new Qe(es,ns,t,e);a.layers=this.layers,this.add(a);let l=new Qe(es,ns,t,e);l.layers=this.layers,this.add(l);let c=new Qe(es,ns,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Gn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,f]=this.children,u=t.getRenderTarget(),h=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.generateMipmaps=b,t.setRenderTarget(n,5,r),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,f),t.setRenderTarget(u,h,d),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ml=class extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var ah="\\[\\]\\.:\\/",Kb=new RegExp("["+ah+"]","g"),lh="[^"+ah+"]",Jb="[^"+ah.replace("\\.","")+"]",jb=/((?:WC+[\/:])*)/.source.replace("WC",lh),Qb=/(WCOD+)?/.source.replace("WCOD",Jb),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lh),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lh),nx=new RegExp("^"+jb+Qb+tx+ex+"$"),ix=["material","materials","bones","map"],Fu=class{constructor(t,e,n){let r=n||Fe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,r)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Fe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Kb,"")}static parseTrackName(t){let e=nx.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);ix.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},r=n(t.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)t[e++]=n[r]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,r=e.propertyName,s=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){jt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){jt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let f=0;f<t.length;f++)if(t[f].name===c){c=f;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){jt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){jt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){jt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){jt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[r];if(o===void 0){let c=e.nodeName;jt("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!t.geometry){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){jt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fe.Composite=Fu;Fe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Fe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Fe.prototype.GetterByBindingType=[Fe.prototype._getValue_direct,Fe.prototype._getValue_array,Fe.prototype._getValue_arrayElement,Fe.prototype._getValue_toArray];Fe.prototype.SetterByBindingTypeAndVersioning=[[Fe.prototype._setValue_direct,Fe.prototype._setValue_direct_setNeedsUpdate,Fe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_array,Fe.prototype._setValue_array_setNeedsUpdate,Fe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_arrayElement,Fe.prototype._setValue_arrayElement_setNeedsUpdate,Fe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fe.prototype._setValue_fromArray,Fe.prototype._setValue_fromArray_setNeedsUpdate,Fe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zw=new Float32Array(1);var wd=new we,po=class{constructor(t,e,n=0,r=1/0){this.ray=new gr(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ls,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):jt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wd),this}intersectObject(t,e=!0,n=[]){return Du(t,this,n,e),n.sort(Td),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Du(t[r],this,n,e);return n.sort(Td),n}};function Td(i,t){return i.distance-t.distance}function Du(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)Du(s[o],t,e,!0)}}var ph=class ph{constructor(t,e,n,r){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,r){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=r,this}};ph.prototype.isMatrix2=!0;var Ou=ph;function ch(i,t,e,n){let r=rx(n);switch(e){case Qu:return i*t;case eh:return i*t/r.components*r.byteLength;case Sl:return i*t/r.components*r.byteLength;case Zi:return i*t*2/r.components*r.byteLength;case wl:return i*t*2/r.components*r.byteLength;case th:return i*t*3/r.components*r.byteLength;case Dn:return i*t*4/r.components*r.byteLength;case Tl:return i*t*4/r.components*r.byteLength;case yo:case vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case _o:case Mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Al:case Cl:return Math.max(i,16)*Math.max(t,8)/4;case El:case Rl:return Math.max(i,8)*Math.max(t,8)/2;case Pl:case Il:case Fl:case Dl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ll:case So:case Ol:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Bl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case zl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Vl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Wl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ql:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case $l:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Zl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Kl:case Jl:case jl:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ql:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wo:case ec:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rx(i){switch(i){case En:case Zu:return{byteLength:1,components:1};case gs:case Ku:case qn:return{byteLength:2,components:1};case _l:case Ml:return{byteLength:2,components:4};case Xn:case vl:case Yn:return{byteLength:4,components:1};case Ju:case ju:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function kp(){let i=null,t=!1,e=null,n=null;function r(s,o){n=i.requestAnimationFrame(r),e(s,o)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function ox(i){let t=new WeakMap;function e(a,l){let c=a.array,f=a.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),a.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let f=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,f);else{u.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<u.length;d++){let p=u[h],b=u[d];b.start<=p.start+p.count+1?p.count=Math.max(p.count,b.start+b.count-p.start):(++h,u[h]=b)}u.length=h+1;for(let d=0,p=u.length;d<p;d++){let b=u[d];i.bufferSubData(c,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let f=t.get(a);(!f||f.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ux=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vx=`#ifdef USE_IRIDESCENCE
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
#endif`,_x=`#ifdef USE_BUMPMAP
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ex=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ax=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Rx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lx=`vec3 transformedNormal = objectNormal;
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
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$x=`#ifdef USE_GRADIENTMAP
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
}`,Zx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Qx=`#ifdef USE_ENVMAP
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
#endif`,ty=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ry=`PhysicalMaterial material;
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
#endif`,sy=`uniform sampler2D dfgLUT;
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
}`,oy=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,ly=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cy=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,uy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,py=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,my=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,by=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sy=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ay=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Py=`#ifdef USE_NORMALMAP
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
#endif`,Iy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ly=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ny=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,By=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ky=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Yy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ky=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ov=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,av=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lv=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Sv=`#define LAMBERT
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
}`,wv=`#define LAMBERT
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
}`,Tv=`#define MATCAP
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
}`,Ev=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Iv=`#define STANDARD
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
}`,Lv=`#define STANDARD
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
}`,Fv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Ov=`uniform float size;
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
}`,Nv=`uniform vec3 diffuse;
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
}`,Uv=`#include <common>
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
}`,Bv=`uniform vec3 color;
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
}`,kv=`uniform float rotation;
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
}`,zv=`uniform vec3 diffuse;
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
}`,ue={alphahash_fragment:ax,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:ux,alphatest_fragment:hx,alphatest_pars_fragment:fx,aomap_fragment:dx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:bx,beginnormal_vertex:xx,bsdfs:yx,iridescence_fragment:vx,bumpmap_pars_fragment:_x,clipping_planes_fragment:Mx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:Tx,color_fragment:Ex,color_pars_fragment:Ax,color_pars_vertex:Rx,color_vertex:Cx,common:Px,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Fx,displacementmap_vertex:Dx,emissivemap_fragment:Ox,emissivemap_pars_fragment:Nx,colorspace_fragment:Ux,colorspace_pars_fragment:Bx,envmap_fragment:kx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:Qx,envmap_vertex:Hx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:Yx,fog_pars_fragment:qx,gradientmap_pars_fragment:$x,lightmap_pars_fragment:Zx,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:Jx,lights_pars_begin:jx,lights_toon_fragment:ty,lights_toon_pars_fragment:ey,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:ry,lights_physical_pars_fragment:sy,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:ly,lightprobes_pars_fragment:cy,logdepthbuf_fragment:uy,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:fy,logdepthbuf_vertex:dy,map_fragment:py,map_pars_fragment:my,map_particle_fragment:gy,map_particle_pars_fragment:by,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:My,morphtarget_pars_vertex:Sy,morphtarget_vertex:wy,normal_fragment_begin:Ty,normal_fragment_maps:Ey,normal_pars_fragment:Ay,normal_pars_vertex:Ry,normal_vertex:Cy,normalmap_pars_fragment:Py,clearcoat_normal_fragment_begin:Iy,clearcoat_normal_fragment_maps:Ly,clearcoat_pars_fragment:Fy,iridescence_pars_fragment:Dy,opaque_fragment:Oy,packing:Ny,premultiplied_alpha_fragment:Uy,project_vertex:By,dithering_fragment:ky,dithering_pars_fragment:zy,roughnessmap_fragment:Vy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Hy,shadowmap_pars_vertex:Wy,shadowmap_vertex:Xy,shadowmask_pars_fragment:Yy,skinbase_vertex:qy,skinning_pars_vertex:$y,skinning_vertex:Zy,skinnormal_vertex:Ky,specularmap_fragment:Jy,specularmap_pars_fragment:jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:tv,transmission_fragment:ev,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:ov,background_vert:av,background_frag:lv,backgroundCube_vert:cv,backgroundCube_frag:uv,cube_vert:hv,cube_frag:fv,depth_vert:dv,depth_frag:pv,distance_vert:mv,distance_frag:gv,equirect_vert:bv,equirect_frag:xv,linedashed_vert:yv,linedashed_frag:vv,meshbasic_vert:_v,meshbasic_frag:Mv,meshlambert_vert:Sv,meshlambert_frag:wv,meshmatcap_vert:Tv,meshmatcap_frag:Ev,meshnormal_vert:Av,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Iv,meshphysical_frag:Lv,meshtoon_vert:Fv,meshtoon_frag:Dv,points_vert:Ov,points_frag:Nv,shadow_vert:Uv,shadow_frag:Bv,sprite_vert:kv,sprite_frag:zv},Et={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new W},probesMax:{value:new W},probesResolution:{value:new W}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},ci={basic:{uniforms:dn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:ue.meshbasic_vert,fragmentShader:ue.meshbasic_frag},lambert:{uniforms:dn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new j(0)},envMapIntensity:{value:1}}]),vertexShader:ue.meshlambert_vert,fragmentShader:ue.meshlambert_frag},phong:{uniforms:dn([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ue.meshphong_vert,fragmentShader:ue.meshphong_frag},standard:{uniforms:dn([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag},toon:{uniforms:dn([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new j(0)}}]),vertexShader:ue.meshtoon_vert,fragmentShader:ue.meshtoon_frag},matcap:{uniforms:dn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:ue.meshmatcap_vert,fragmentShader:ue.meshmatcap_frag},points:{uniforms:dn([Et.points,Et.fog]),vertexShader:ue.points_vert,fragmentShader:ue.points_frag},dashed:{uniforms:dn([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ue.linedashed_vert,fragmentShader:ue.linedashed_frag},depth:{uniforms:dn([Et.common,Et.displacementmap]),vertexShader:ue.depth_vert,fragmentShader:ue.depth_frag},normal:{uniforms:dn([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:ue.meshnormal_vert,fragmentShader:ue.meshnormal_frag},sprite:{uniforms:dn([Et.sprite,Et.fog]),vertexShader:ue.sprite_vert,fragmentShader:ue.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ue.background_vert,fragmentShader:ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:ue.backgroundCube_vert,fragmentShader:ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ue.cube_vert,fragmentShader:ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ue.equirect_vert,fragmentShader:ue.equirect_frag},distance:{uniforms:dn([Et.common,Et.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ue.distance_vert,fragmentShader:ue.distance_frag},shadow:{uniforms:dn([Et.lights,Et.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:ue.shadow_vert,fragmentShader:ue.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:ue.meshphysical_vert,fragmentShader:ue.meshphysical_frag};var rc={r:0,b:0,g:0},Vv=new we,zp=new ne;zp.set(-1,0,0,0,1,0,0,0,1);function Gv(i,t,e,n,r,s){let o=new j(0),a=r===!0?0:1,l,c,f=null,u=0,h=null;function d(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){let y=x.backgroundBlurriness>0;v=t.get(v,y)}return v}function p(x){let v=!1,y=d(x);y===null?g(o,a):y&&y.isColor&&(g(y,1),v=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?e.buffers.color.setClear(0,0,0,1,s):M==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,s),(i.autoClear||v)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(x,v){let y=d(v);y&&(y.isCubeTexture||y.mapping===bo)?(c===void 0&&(c=new Ct(new fs(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:_r(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Vv.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(zp),c.material.toneMapped=fe.getTransfer(y.colorSpace)!==ve,(f!==y||u!==y.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,u=y.version,h=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Ct(new Hn(2,2),new fn({name:"BackgroundMaterial",uniforms:_r(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=fe.getTransfer(y.colorSpace)!==ve,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||u!==y.version||h!==i.toneMapping)&&(l.material.needsUpdate=!0,f=y,u=y.version,h=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function g(x,v){x.getRGB(rc,oh(i)),e.buffers.color.setClear(rc.r,rc.g,rc.b,v,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(o,a)},render:p,addToRenderList:b,dispose:m}}function Hv(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null),s=r,o=!1;function a(E,I,O,C,L){let T=!1,P=u(E,C,O,I);s!==P&&(s=P,c(s.object)),T=d(E,C,O,L),T&&p(E,C,O,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(T||o)&&(o=!1,y(E,I,O,C),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function l(){return i.createVertexArray()}function c(E){return i.bindVertexArray(E)}function f(E){return i.deleteVertexArray(E)}function u(E,I,O,C){let L=C.wireframe===!0,T=n[I.id];T===void 0&&(T={},n[I.id]=T);let P=E.isInstancedMesh===!0?E.id:0,N=T[P];N===void 0&&(N={},T[P]=N);let F=N[O.id];F===void 0&&(F={},N[O.id]=F);let z=F[L];return z===void 0&&(z=h(l()),F[L]=z),z}function h(E){let I=[],O=[],C=[];for(let L=0;L<e;L++)I[L]=0,O[L]=0,C[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:O,attributeDivisors:C,object:E,attributes:{},index:null}}function d(E,I,O,C){let L=s.attributes,T=I.attributes,P=0,N=O.getAttributes();for(let F in N)if(N[F].location>=0){let B=L[F],V=T[F];if(V===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(V=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(V=E.instanceColor)),B===void 0||B.attribute!==V||V&&B.data!==V.data)return!0;P++}return s.attributesNum!==P||s.index!==C}function p(E,I,O,C){let L={},T=I.attributes,P=0,N=O.getAttributes();for(let F in N)if(N[F].location>=0){let B=T[F];B===void 0&&(F==="instanceMatrix"&&E.instanceMatrix&&(B=E.instanceMatrix),F==="instanceColor"&&E.instanceColor&&(B=E.instanceColor));let V={};V.attribute=B,B&&B.data&&(V.data=B.data),L[F]=V,P++}s.attributes=L,s.attributesNum=P,s.index=C}function b(){let E=s.newAttributes;for(let I=0,O=E.length;I<O;I++)E[I]=0}function g(E){m(E,0)}function m(E,I){let O=s.newAttributes,C=s.enabledAttributes,L=s.attributeDivisors;O[E]=1,C[E]===0&&(i.enableVertexAttribArray(E),C[E]=1),L[E]!==I&&(i.vertexAttribDivisor(E,I),L[E]=I)}function x(){let E=s.newAttributes,I=s.enabledAttributes;for(let O=0,C=I.length;O<C;O++)I[O]!==E[O]&&(i.disableVertexAttribArray(O),I[O]=0)}function v(E,I,O,C,L,T,P){P===!0?i.vertexAttribIPointer(E,I,O,L,T):i.vertexAttribPointer(E,I,O,C,L,T)}function y(E,I,O,C){b();let L=C.attributes,T=O.getAttributes(),P=I.defaultAttributeValues;for(let N in T){let F=T[N];if(F.location>=0){let z=L[N];if(z===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(z=E.instanceColor)),z!==void 0){let B=z.normalized,V=z.itemSize,H=t.get(z);if(H===void 0)continue;let J=H.buffer,tt=H.type,ot=H.bytesPerElement,X=tt===i.INT||tt===i.UNSIGNED_INT||z.gpuType===vl;if(z.isInterleavedBufferAttribute){let q=z.data,Y=q.stride,st=z.offset;if(q.isInstancedInterleavedBuffer){for(let rt=0;rt<F.locationSize;rt++)m(F.location+rt,q.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let rt=0;rt<F.locationSize;rt++)g(F.location+rt);i.bindBuffer(i.ARRAY_BUFFER,J);for(let rt=0;rt<F.locationSize;rt++)v(F.location+rt,V/F.locationSize,tt,B,Y*ot,(st+V/F.locationSize*rt)*ot,X)}else{if(z.isInstancedBufferAttribute){for(let q=0;q<F.locationSize;q++)m(F.location+q,z.meshPerAttribute);E.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let q=0;q<F.locationSize;q++)g(F.location+q);i.bindBuffer(i.ARRAY_BUFFER,J);for(let q=0;q<F.locationSize;q++)v(F.location+q,V/F.locationSize,tt,B,V*ot,V/F.locationSize*q*ot,X)}}else if(P!==void 0){let B=P[N];if(B!==void 0)switch(B.length){case 2:i.vertexAttrib2fv(F.location,B);break;case 3:i.vertexAttrib3fv(F.location,B);break;case 4:i.vertexAttrib4fv(F.location,B);break;default:i.vertexAttrib1fv(F.location,B)}}}}x()}function M(){R();for(let E in n){let I=n[E];for(let O in I){let C=I[O];for(let L in C){let T=C[L];for(let P in T)f(T[P].object),delete T[P];delete C[L]}}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let I=n[E.id];for(let O in I){let C=I[O];for(let L in C){let T=C[L];for(let P in T)f(T[P].object),delete T[P];delete C[L]}}delete n[E.id]}function A(E){for(let I in n){let O=n[I];for(let C in O){let L=O[C];if(L[E.id]===void 0)continue;let T=L[E.id];for(let P in T)f(T[P].object),delete T[P];delete L[E.id]}}}function _(E){for(let I in n){let O=n[I],C=E.isInstancedMesh===!0?E.id:0,L=O[C];if(L!==void 0){for(let T in L){let P=L[T];for(let N in P)f(P[N].object),delete P[N];delete L[T]}delete O[C],Object.keys(O).length===0&&delete n[I]}}}function R(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:S,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:b,enableAttribute:g,disableUnusedAttributes:x}}function Wv(i,t,e){let n;function r(l){n=l}function s(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,f){f!==0&&(i.drawArraysInstanced(n,l,c,f),e.update(c,n,f))}function a(l,c,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,f);let h=0;for(let d=0;d<f;d++)h+=c[d];e.update(h,n,1)}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a}function Xv(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(A){return!(A!==Dn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let _=A===qn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==En&&A!==Yn&&!_&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",f=l(c);f!==c&&(Kt("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);let u=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&h===!1&&Kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:b,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,maxSamples:M,samples:w}}function Yv(i){let t=this,e=null,n=0,r=!1,s=!1,o=new Vn,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){let d=u.length!==0||h||n!==0||r;return r=h,n=u.length,d},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){e=f(u,h,0)},this.setState=function(u,h,d){let p=u.clippingPlanes,b=u.clipIntersection,g=u.clipShadows,m=i.get(u);if(!r||p===null||p.length===0||s&&!g)s?f(null):c();else{let x=s?0:n,v=x*4,y=m.clippingState||null;l.value=y,y=f(p,h,v,d);for(let M=0;M!==v;++M)y[M]=e[M];m.clippingState=y,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(u,h,d,p){let b=u!==null?u.length:0,g=null;if(b!==0){if(g=l.value,p!==!0||g===null){let m=d+b*4,x=h.matrixWorldInverse;a.getNormalMatrix(x),(g===null||g.length<m)&&(g=new Float32Array(m));for(let v=0,y=d;v!==b;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,g}}var ys=4,qv=6,$v=20,Zv=256,To=new Ln,xp=new j,mh=null,gh=0,bh=0,xh=!1,Kv=new W,Mr=new W,oc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,r=100,s={}){let{size:o=256,position:a=Kv}=s;mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(mh,gh,bh),this._renderer.xr.enabled=xh,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Yi||t.mapping===vr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),mh=this._renderer.getRenderTarget(),gh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),xh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Xe,minFilter:Xe,generateMipmaps:!1,type:qn,format:Dn,colorSpace:$s,depthBuffer:!1},r=yp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yp(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Jv(s)),this._blurMaterial=Qv(s,t,e),this._ggxMaterial=jv(s,t,e)}return r}_compileMaterial(t){let e=new Ct(new Gt,t);this._renderer.compile(e,To)}_sceneToCubeUV(t,e,n,r,s){let l=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(xp),u.toneMapping=Wn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new fs,new Yt({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1})));let b=this._backgroundBox,g=b.material,m=!1,x=t.background;x?x.isColor&&(g.color.copy(x),t.background=null,m=!0):(g.color.copy(xp),m=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));let M=this._cubeSize;xs(r,y*M,v>2?M:0,M,M),u.setRenderTarget(r),m&&u.render(b,l),u.render(t,l)}u.toneMapping=d,u.autoClear=h,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,r=t.mapping===Yi||t.mapping===vr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=_p()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,To)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),f=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=c*1.25,d=u*h,{_lodMax:p}=this,b=this._sizeLods[n],g=3*b*(n>p-ys?n-p+ys:0),m=4*(this._cubeSize-b);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=p-e,xs(s,g,m,3*b,2*b),r.setRenderTarget(s),r.render(a,To),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,xs(t,g,m,3*b,2*b),r.setRenderTarget(t),r.render(a,To)}_blur(t,e,n,r){let s=this._pingPongRenderTarget,o=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,o),this._blurPass(s,t,n,n,o)}_blurPass(t,e,n,r,s){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[r];l.material=a;let c=a.uniforms;c.envMap.value=t.texture,c.sigma.value=s,c.mipInt.value=this._lodMax-n;let f=this._sizeLods[r],u=3*f*(r>this._lodMax-ys?r-this._lodMax+ys:0),h=4*(this._cubeSize-f);xs(e,u,h,3*f,2*f),o.setRenderTarget(e),o.render(l,To)}};function Jv(i){let t=[],e=[],n=i,r=i-ys+1+qv;for(let s=0;s<r;s++){let o=Math.pow(2,n);t.push(o);let a=1/(o-2),l=-a,c=1+a,f=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,h=6,d=3,p=new Float32Array(d*h*u),b=new Float32Array(d*h*u);for(let m=0;m<u;m++){let x=m%3*2/3-1,v=m>2?0:-1,y=[x,v,0,x+2/3,v,0,x+2/3,v+1,0,x,v,0,x+2/3,v+1,0,x,v+1,0];p.set(y,d*h*m);for(let M=0;M<h;M++){let w=f[M*2]*2-1,A=f[M*2+1]*2-1;m===0?Mr.set(1,A,w):m===1?Mr.set(-w,1,-A):m===2?Mr.set(-w,A,1):m===3?Mr.set(-1,A,-w):m===4?Mr.set(-w,-1,A):Mr.set(w,A,-1),Mr.toArray(b,(m*h+M)*d)}}let g=new Gt;g.setAttribute("position",new Sn(p,d)),g.setAttribute("outputDirection",new Sn(b,d)),e.push(new Ct(g,null)),n>ys&&n--}return{lodMeshes:e,sizeLods:t}}function yp(i,t,e){let n=new Ye(i,t,e);return n.texture.mapping=bo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function jv(i,t,e){return new fn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Zv,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function Qv(i,t,e){return new fn({name:"SphericalGaussianBlur",defines:{SAMPLES:$v,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function vp(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function _p(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ac=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new io(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fs(5,5,5),s=new fn({name:"CubemapFromEquirect",uniforms:_r(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Fn});s.uniforms.tEquirect.value=e;let o=new Ct(r,s),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Xe),new pl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}};function t1(i){let t=new WeakMap,e=new WeakMap,n=null;function r(h,d=!1){return h==null?null:d?o(h):s(h)}function s(h){if(h&&h.isTexture){let d=h.mapping;if(d===bl||d===xl)if(t.has(h)){let p=t.get(h).texture;return a(p,h.mapping)}else{let p=h.image;if(p&&p.height>0){let b=new ac(p.height);return b.fromEquirectangularTexture(i,h),t.set(h,b),h.addEventListener("dispose",c),a(b.texture,h.mapping)}else return null}}return h}function o(h){if(h&&h.isTexture){let d=h.mapping,p=d===bl||d===xl,b=d===Yi||d===vr;if(p||b){let g=e.get(h),m=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==m)return n===null&&(n=new oc(i)),g=p?n.fromEquirectangular(h,g):n.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{let x=h.image;return p&&x&&x.height>0||b&&x&&l(x)?(n===null&&(n=new oc(i)),g=p?n.fromEquirectangular(h):n.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",f),g.texture):null}}}return h}function a(h,d){return d===bl?h.mapping=Yi:d===xl&&(h.mapping=vr),h}function l(h){let d=0,p=6;for(let b=0;b<p;b++)h[b]!==void 0&&d++;return d===p}function c(h){let d=h.target;d.removeEventListener("dispose",c);let p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(h){let d=h.target;d.removeEventListener("dispose",f);let p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:u}}function e1(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let r=i.getExtension(n);return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let r=e(n);return r===null&&dr("WebGLRenderer: "+n+" extension not supported."),r}}}function n1(i,t,e,n){let r={},s=new WeakMap;function o(u){let h=u.target;h.index!==null&&t.remove(h.index);for(let p in h.attributes)t.remove(h.attributes[p]);h.removeEventListener("dispose",o),delete r[h.id];let d=s.get(h);d&&(t.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,e.memory.geometries++),h}function l(u){let h=u.attributes;for(let d in h)t.update(h[d],i.ARRAY_BUFFER)}function c(u){let h=[],d=u.index,p=u.attributes.position,b=0;if(p===void 0)return;if(d!==null){let x=d.array;b=d.version;for(let v=0,y=x.length;v<y;v+=3){let M=x[v+0],w=x[v+1],A=x[v+2];h.push(M,w,w,A,A,M)}}else{let x=p.array;b=p.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let M=v+0,w=v+1,A=v+2;h.push(M,w,w,A,A,M)}}let g=new(p.count>=65535?mr:Qs)(h,1);g.version=b;let m=s.get(u);m&&t.remove(m),s.set(u,g)}function f(u){let h=s.get(u);if(h){let d=u.index;d!==null&&h.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function i1(i,t,e){let n;function r(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,h){i.drawElements(n,h,s,u*o),e.update(h,n,1)}function c(u,h,d){d!==0&&(i.drawElementsInstanced(n,h,s,u*o,d),e.update(h,n,d))}function f(u,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,u,0,d);let b=0;for(let g=0;g<d;g++)b+=h[g];e.update(b,n,1)}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f}function r1(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:jt("WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function s1(i,t,e){let n=new WeakMap,r=new ke;function s(o,a,l){let c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0,h=n.get(a);if(h===void 0||h.count!==u){let R=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",R)};h!==void 0&&h.texture.dispose();let d=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,b=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),p===!0&&(v=2),b===!0&&(v=3);let y=a.attributes.position.count*v,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*M*4*u),A=new js(w,y,M,u);A.type=Yn,A.needsUpdate=!0;let _=v*4;for(let S=0;S<u;S++){let E=g[S],I=m[S],O=x[S],C=y*M*4*S;for(let L=0;L<E.count;L++){let T=L*_;d===!0&&(r.fromBufferAttribute(E,L),w[C+T+0]=r.x,w[C+T+1]=r.y,w[C+T+2]=r.z,w[C+T+3]=0),p===!0&&(r.fromBufferAttribute(I,L),w[C+T+4]=r.x,w[C+T+5]=r.y,w[C+T+6]=r.z,w[C+T+7]=0),b===!0&&(r.fromBufferAttribute(O,L),w[C+T+8]=r.x,w[C+T+9]=r.y,w[C+T+10]=r.z,w[C+T+11]=O.itemSize===4?r.w:1)}}h={count:u,texture:A,size:new te(y,M)},n.set(a,h),a.addEventListener("dispose",R)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let d=0;for(let b=0;b<c.length;b++)d+=c[b];let p=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function o1(i,t,e,n,r){let s=new WeakMap;function o(c){let f=r.render.frame,u=c.geometry,h=t.get(c,u);if(s.get(h)!==f&&(t.update(h),s.set(h,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==f&&(d.update(),s.set(d,f))}return h}function a(){s=new WeakMap}function l(c){let f=c.target;f.removeEventListener("dispose",l),n.releaseStatesOfObject(f),e.remove(f.instanceMatrix),f.instanceColor!==null&&e.remove(f.instanceColor)}return{update:o,dispose:a}}var a1={[Vu]:"LINEAR_TONE_MAPPING",[Gu]:"REINHARD_TONE_MAPPING",[Hu]:"CINEON_TONE_MAPPING",[Wu]:"ACES_FILMIC_TONE_MAPPING",[Yu]:"AGX_TONE_MAPPING",[qu]:"NEUTRAL_TONE_MAPPING",[Xu]:"CUSTOM_TONE_MAPPING"};function l1(i,t,e,n,r,s){let o=new Ye(t,e,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=new Gt;c.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Ft([0,2,0,0,2,0],2));let f=new el({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new Ct(c,f),h=new Ln(-1,1,1,-1,0,1),d=null,p=null,b=!1,g,m=null,x=[],v=!1;this.setSize=function(y,M){o.setSize(y,M),a!==null&&a.setSize(y,M),l!==null&&l.setSize(y,M);for(let w=0;w<x.length;w++){let A=x[w];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){x=y,v=x.length>0&&x[0].isRenderPass===!0;let M=o.width,w=o.height;x.length>0&&a===null&&(a=new Ye(M,w,{type:qn,depthBuffer:!1,stencilBuffer:!1}),l=new Ye(M,w,{type:qn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<x.length;A++){let _=x[A];_.setSize&&_.setSize(M,w)}},this.begin=function(y,M){if(b||y.toneMapping===Wn&&x.length===0)return!1;if(m=M,M!==null){let w=M.width,A=M.height;(o.width!==w||o.height!==A)&&this.setSize(w,A)}return v===!1&&y.setRenderTarget(o),g=y.toneMapping,y.toneMapping=Wn,!0},this.hasRenderPass=function(){return v},this.end=function(y,M){y.toneMapping=g,b=!0;let w=o,A=a;for(let _=0;_<x.length;_++){let R=x[_];R.enabled!==!1&&(R.render(y,A,w,M),R.needsSwap!==!1&&(w=A,A=A===a?l:a))}if(d!==y.outputColorSpace||p!==y.toneMapping){d=y.outputColorSpace,p=y.toneMapping,f.defines={},fe.getTransfer(d)===ve&&(f.defines.SRGB_TRANSFER="");let _=a1[p];_&&(f.defines[_]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(m),y.render(u,h),m=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),c.dispose(),f.dispose()}}var Vp=new hn,_h=new oi(1,1),Gp=new js,Hp=new $a,Wp=new io,Mp=[],Sp=[],wp=new Float32Array(16),Tp=new Float32Array(9),Ep=new Float32Array(4);function _s(i,t,e){let n=i[0];if(n<=0||n>0)return i;let r=t*e,s=Mp[r];if(s===void 0&&(s=new Float32Array(r),Mp[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Ze(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function cc(i,t){let e=Sp[t];e===void 0&&(e=new Int32Array(t),Sp[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function c1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function u1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2fv(this.addr,t),Ke(e,t)}}function h1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ze(e,t))return;i.uniform3fv(this.addr,t),Ke(e,t)}}function f1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4fv(this.addr,t),Ke(e,t)}}function d1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Ep.set(n),i.uniformMatrix2fv(this.addr,!1,Ep),Ke(e,n)}}function p1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;Tp.set(n),i.uniformMatrix3fv(this.addr,!1,Tp),Ke(e,n)}}function m1(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ze(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Ze(e,n))return;wp.set(n),i.uniformMatrix4fv(this.addr,!1,wp),Ke(e,n)}}function g1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function b1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2iv(this.addr,t),Ke(e,t)}}function x1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3iv(this.addr,t),Ke(e,t)}}function y1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4iv(this.addr,t),Ke(e,t)}}function v1(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function _1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ze(e,t))return;i.uniform2uiv(this.addr,t),Ke(e,t)}}function M1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ze(e,t))return;i.uniform3uiv(this.addr,t),Ke(e,t)}}function S1(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ze(e,t))return;i.uniform4uiv(this.addr,t),Ke(e,t)}}function w1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=e.isReversedDepthBuffer()?ic:nc,s=_h):s=Vp,e.setTexture2D(t||s,r)}function T1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Hp,r)}function E1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Wp,r)}function A1(i,t,e){let n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Gp,r)}function R1(i){switch(i){case 5126:return c1;case 35664:return u1;case 35665:return h1;case 35666:return f1;case 35674:return d1;case 35675:return p1;case 35676:return m1;case 5124:case 35670:return g1;case 35667:case 35671:return b1;case 35668:case 35672:return x1;case 35669:case 35673:return y1;case 5125:return v1;case 36294:return _1;case 36295:return M1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return w1;case 35679:case 36299:case 36307:return T1;case 35680:case 36300:case 36308:case 36293:return E1;case 36289:case 36303:case 36311:case 36292:return A1}}function C1(i,t){i.uniform1fv(this.addr,t)}function P1(i,t){let e=_s(t,this.size,2);i.uniform2fv(this.addr,e)}function I1(i,t){let e=_s(t,this.size,3);i.uniform3fv(this.addr,e)}function L1(i,t){let e=_s(t,this.size,4);i.uniform4fv(this.addr,e)}function F1(i,t){let e=_s(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function D1(i,t){let e=_s(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function O1(i,t){let e=_s(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function N1(i,t){i.uniform1iv(this.addr,t)}function U1(i,t){i.uniform2iv(this.addr,t)}function B1(i,t){i.uniform3iv(this.addr,t)}function k1(i,t){i.uniform4iv(this.addr,t)}function z1(i,t){i.uniform1uiv(this.addr,t)}function V1(i,t){i.uniform2uiv(this.addr,t)}function G1(i,t){i.uniform3uiv(this.addr,t)}function H1(i,t){i.uniform4uiv(this.addr,t)}function W1(i,t,e){let n=this.cache,r=t.length,s=cc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));let o;this.type===i.SAMPLER_2D_SHADOW?o=_h:o=Vp;for(let a=0;a!==r;++a)e.setTexture2D(t[a]||o,s[a])}function X1(i,t,e){let n=this.cache,r=t.length,s=cc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Hp,s[o])}function Y1(i,t,e){let n=this.cache,r=t.length,s=cc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Wp,s[o])}function q1(i,t,e){let n=this.cache,r=t.length,s=cc(e,r);Ze(n,s)||(i.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||Gp,s[o])}function $1(i){switch(i){case 5126:return C1;case 35664:return P1;case 35665:return I1;case 35666:return L1;case 35674:return F1;case 35675:return D1;case 35676:return O1;case 5124:case 35670:return N1;case 35667:case 35671:return U1;case 35668:case 35672:return B1;case 35669:case 35673:return k1;case 5125:return z1;case 36294:return V1;case 36295:return G1;case 36296:return H1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return q1}}var Mh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=R1(e.type)}},Sh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$1(e.type)}},wh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(t,e[a.id],n)}}},yh=/(\w+)(\])?(\[|\.)?/g;function Ap(i,t){i.seq.push(t),i.map[t.id]=t}function Z1(i,t,e){let n=i.name,r=n.length;for(yh.lastIndex=0;;){let s=yh.exec(n),o=yh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Ap(e,c===void 0?new Mh(a,i,t):new Sh(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new wh(a),Ap(e,u)),e=u}}}var vs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Z1(a,l,this)}let r=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(t,e,n,r){let s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){let r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,e){let n=[];for(let r=0,s=t.length;r!==s;++r){let o=t[r];o.id in e&&n.push(o)}return n}};function Rp(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var K1=37297,J1=0;function j1(i,t){let e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Cp=new ne;function Q1(i){fe._getMatrix(Cp,fe.workingColorSpace,i);let t=`mat3( ${Cp.elements.map(e=>e.toFixed(4))} )`;switch(fe.getTransfer(i)){case Zs:return[t,"LinearTransferOETF"];case ve:return[t,"sRGBTransferOETF"];default:return Kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pp(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+j1(i.getShaderSource(t),a)}else return s}function t_(i,t){let e=Q1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var e_={[Vu]:"Linear",[Gu]:"Reinhard",[Hu]:"Cineon",[Wu]:"ACESFilmic",[Yu]:"AgX",[qu]:"Neutral",[Xu]:"Custom"};function n_(i,t){let e=e_[t];return e===void 0?(Kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var sc=new W;function i_(){fe.getLuminanceCoefficients(sc);let i=sc.x.toFixed(4),t=sc.y.toFixed(4),e=sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function r_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ao).join(`
`)}function s_(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function o_(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(t,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ao(i){return i!==""}function Ip(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Lp(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var a_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Th(i){return i.replace(a_,c_)}var l_=new Map;function c_(i,t){let e=ue[t];if(e===void 0){let n=l_.get(t);if(n!==void 0)e=ue[n],Kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Th(e)}var u_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(i){return i.replace(u_,h_)}function h_(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dp(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var f_={[mo]:"SHADOWMAP_TYPE_PCF",[ms]:"SHADOWMAP_TYPE_VSM"};function d_(i){return f_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var p_={[Yi]:"ENVMAP_TYPE_CUBE",[vr]:"ENVMAP_TYPE_CUBE",[bo]:"ENVMAP_TYPE_CUBE_UV"};function m_(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":p_[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var g_={[vr]:"ENVMAP_MODE_REFRACTION"};function b_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":g_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var x_={[zu]:"ENVMAP_BLENDING_MULTIPLY",[qd]:"ENVMAP_BLENDING_MIX",[$d]:"ENVMAP_BLENDING_ADD"};function y_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":x_[i.combine]||"ENVMAP_BLENDING_NONE"}function v_(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function __(i,t,e,n){let r=i.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=d_(e),c=m_(e),f=b_(e),u=y_(e),h=v_(e),d=r_(e),p=s_(s),b=r.createProgram(),g,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ao).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ao).join(`
`),m.length>0&&(m+=`
`)):(g=[Dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ao).join(`
`),m=[Dp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+f:"",e.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wn?"#define TONE_MAPPING":"",e.toneMapping!==Wn?ue.tonemapping_pars_fragment:"",e.toneMapping!==Wn?n_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ue.colorspace_pars_fragment,t_("linearToOutputTexel",e.outputColorSpace),i_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ao).join(`
`)),o=Th(o),o=Ip(o,e),o=Lp(o,e),a=Th(a),a=Ip(a,e),a=Lp(a,e),o=Fp(o),a=Fp(a),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===sh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===sh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+g+o,y=x+m+a,M=Rp(r,r.VERTEX_SHADER,v),w=Rp(r,r.FRAGMENT_SHADER,y);r.attachShader(b,M),r.attachShader(b,w),e.index0AttributeName!==void 0?r.bindAttribLocation(b,0,e.index0AttributeName):e.hasPositionAttribute===!0&&r.bindAttribLocation(b,0,"position"),r.linkProgram(b);function A(E){if(i.debug.checkShaderErrors){let I=r.getProgramInfoLog(b)||"",O=r.getShaderInfoLog(M)||"",C=r.getShaderInfoLog(w)||"",L=I.trim(),T=O.trim(),P=C.trim(),N=!0,F=!0;if(r.getProgramParameter(b,r.LINK_STATUS)===!1)if(N=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,b,M,w);else{let z=Pp(r,M,"vertex"),B=Pp(r,w,"fragment");jt("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(b,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+L+`
`+z+`
`+B)}else L!==""?Kt("WebGLProgram: Program Info Log:",L):(T===""||P==="")&&(F=!1);F&&(E.diagnostics={runnable:N,programLog:L,vertexShader:{log:T,prefix:g},fragmentShader:{log:P,prefix:m}})}r.deleteShader(M),r.deleteShader(w),_=new vs(r,b),R=o_(r,b)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let R;this.getAttributes=function(){return R===void 0&&A(this),R};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(b,K1)),S},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(b),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J1++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=M,this.fragmentShader=w,this}var M_=0,Eh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let r=this._getShaderCacheForMaterial(t);return r.has(e)===!1&&(r.add(e),e.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ah(t),e.set(t,n)),n}},Ah=class{constructor(t){this.id=M_++,this.code=t,this.usedTimes=0}};function S_(i){return i===Zi||i===So||i===wo}function w_(i,t,e,n,r,s){let o=new ls,a=new Eh,l=new Set,c=[],f=new Map,u=n.logarithmicDepthBuffer,h=n.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function b(_,R,S,E,I,O){let C=E.fog,L=I.geometry,T=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,P=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,N=t.get(_.envMap||T,P),F=N&&N.mapping===bo?N.image.height:null,z=d[_.type];_.precision!==null&&(h=n.getMaxPrecision(_.precision),h!==_.precision&&Kt("WebGLProgram.getParameters:",_.precision,"not supported, using",h,"instead."));let B=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,V=B!==void 0?B.length:0,H=0;L.morphAttributes.position!==void 0&&(H=1),L.morphAttributes.normal!==void 0&&(H=2),L.morphAttributes.color!==void 0&&(H=3);let J,tt,ot,X;if(z){let Ce=ci[z];J=Ce.vertexShader,tt=Ce.fragmentShader}else{J=_.vertexShader,tt=_.fragmentShader;let Ce=a.getVertexShaderStage(_),xe=a.getFragmentShaderStage(_);a.update(_,Ce,xe),ot=Ce.id,X=xe.id}let q=i.getRenderTarget(),Y=i.state.buffers.depth.getReversed(),st=I.isInstancedMesh===!0,rt=I.isBatchedMesh===!0,lt=!!_.map,gt=!!_.matcap,dt=!!N,xt=!!_.aoMap,bt=!!_.lightMap,Ut=!!_.bumpMap&&_.wireframe===!1,$t=!!_.normalMap,Nt=!!_.displacementMap,se=!!_.emissiveMap,Jt=!!_.metalnessMap,Te=!!_.roughnessMap,$=_.anisotropy>0,Ee=_.clearcoat>0,ge=_.dispersion>0,G=_.retroreflectivity>0,D=_.iridescence>0,Q=_.sheen>0,it=_.transmission>0,ct=$&&!!_.anisotropyMap,yt=Ee&&!!_.clearcoatMap,vt=Ee&&!!_.clearcoatNormalMap,ut=Ee&&!!_.clearcoatRoughnessMap,ft=D&&!!_.iridescenceMap,_t=D&&!!_.iridescenceThicknessMap,Ht=Q&&!!_.sheenColorMap,Tt=Q&&!!_.sheenRoughnessMap,Mt=!!_.specularMap,Wt=!!_.specularColorMap,Zt=!!_.specularIntensityMap,le=it&&!!_.transmissionMap,K=it&&!!_.thicknessMap,St=!!_.gradientMap,ht=!!_.alphaMap,wt=_.alphaTest>0,Pt=!!_.alphaHash,pt=!!_.extensions,Xt=Wn;_.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Xt=i.toneMapping);let zt={shaderID:z,shaderType:_.type,shaderName:_.name,vertexShader:J,fragmentShader:tt,defines:_.defines,customVertexShaderID:ot,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:h,batching:rt,batchingColor:rt&&I._colorsTexture!==null,instancing:st,instancingColor:st&&I.instanceColor!==null,instancingMorph:st&&I.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:fe.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:lt,matcap:gt,envMap:dt,envMapMode:dt&&N.mapping,envMapCubeUVHeight:F,aoMap:xt,lightMap:bt,bumpMap:Ut,normalMap:$t,displacementMap:Nt,emissiveMap:se,normalMapObjectSpace:$t&&_.normalMapType===Jd,normalMapTangentSpace:$t&&_.normalMapType===nh,packedNormalMap:$t&&_.normalMapType===nh&&S_(_.normalMap.format),metalnessMap:Jt,roughnessMap:Te,anisotropy:$,anisotropyMap:ct,clearcoat:Ee,clearcoatMap:yt,clearcoatNormalMap:vt,clearcoatRoughnessMap:ut,dispersion:ge,retroreflection:G,iridescence:D,iridescenceMap:ft,iridescenceThicknessMap:_t,sheen:Q,sheenColorMap:Ht,sheenRoughnessMap:Tt,specularMap:Mt,specularColorMap:Wt,specularIntensityMap:Zt,transmission:it,transmissionMap:le,thicknessMap:K,gradientMap:St,opaque:_.transparent===!1&&_.blending===Tn&&_.alphaToCoverage===!1,alphaMap:ht,alphaTest:wt,alphaHash:Pt,combine:_.combine,mapUv:lt&&p(_.map.channel),aoMapUv:xt&&p(_.aoMap.channel),lightMapUv:bt&&p(_.lightMap.channel),bumpMapUv:Ut&&p(_.bumpMap.channel),normalMapUv:$t&&p(_.normalMap.channel),displacementMapUv:Nt&&p(_.displacementMap.channel),emissiveMapUv:se&&p(_.emissiveMap.channel),metalnessMapUv:Jt&&p(_.metalnessMap.channel),roughnessMapUv:Te&&p(_.roughnessMap.channel),anisotropyMapUv:ct&&p(_.anisotropyMap.channel),clearcoatMapUv:yt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:vt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ft&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:_t&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&p(_.sheenRoughnessMap.channel),specularMapUv:Mt&&p(_.specularMap.channel),specularColorMapUv:Wt&&p(_.specularColorMap.channel),specularIntensityMapUv:Zt&&p(_.specularIntensityMap.channel),transmissionMapUv:le&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:ht&&p(_.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&($t||$),vertexNormals:!!L.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!L.attributes.uv&&(lt||ht),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||L.attributes.normal===void 0&&$t===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Y,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:H,numSunLights:R.sun.length,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numSunLightShadows:R.sunShadowMap.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numLightProbeGrids:O.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&S.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:lt&&_.map.isVideoTexture===!0&&fe.getTransfer(_.map.colorSpace)===ve,decodeVideoTextureEmissive:se&&_.emissiveMap.isVideoTexture===!0&&fe.getTransfer(_.emissiveMap.colorSpace)===ve,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===oe,flipSided:_.side===sn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pt&&_.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return zt.vertexUv1s=l.has(1),zt.vertexUv2s=l.has(2),zt.vertexUv3s=l.has(3),l.clear(),zt}function g(_){let R=[];if(_.shaderID?R.push(_.shaderID):(R.push(_.customVertexShaderID),R.push(_.customFragmentShaderID)),_.defines!==void 0)for(let S in _.defines)R.push(S),R.push(_.defines[S]);return _.isRawShaderMaterial===!1&&(m(R,_),x(R,_),R.push(i.outputColorSpace)),R.push(_.customProgramCacheKey),R.join()}function m(_,R){_.push(R.precision),_.push(R.outputColorSpace),_.push(R.envMapMode),_.push(R.envMapCubeUVHeight),_.push(R.mapUv),_.push(R.alphaMapUv),_.push(R.lightMapUv),_.push(R.aoMapUv),_.push(R.bumpMapUv),_.push(R.normalMapUv),_.push(R.displacementMapUv),_.push(R.emissiveMapUv),_.push(R.metalnessMapUv),_.push(R.roughnessMapUv),_.push(R.anisotropyMapUv),_.push(R.clearcoatMapUv),_.push(R.clearcoatNormalMapUv),_.push(R.clearcoatRoughnessMapUv),_.push(R.iridescenceMapUv),_.push(R.iridescenceThicknessMapUv),_.push(R.sheenColorMapUv),_.push(R.sheenRoughnessMapUv),_.push(R.specularMapUv),_.push(R.specularColorMapUv),_.push(R.specularIntensityMapUv),_.push(R.transmissionMapUv),_.push(R.thicknessMapUv),_.push(R.combine),_.push(R.fogExp2),_.push(R.sizeAttenuation),_.push(R.morphTargetsCount),_.push(R.morphAttributeCount),_.push(R.numSunLights),_.push(R.numDirLights),_.push(R.numPointLights),_.push(R.numSpotLights),_.push(R.numSpotLightMaps),_.push(R.numHemiLights),_.push(R.numRectAreaLights),_.push(R.numSunLightShadows),_.push(R.numDirLightShadows),_.push(R.numPointLightShadows),_.push(R.numSpotLightShadows),_.push(R.numSpotLightShadowsWithMaps),_.push(R.numLightProbes),_.push(R.shadowMapType),_.push(R.toneMapping),_.push(R.numClippingPlanes),_.push(R.numClipIntersection),_.push(R.depthPacking)}function x(_,R){o.disableAll(),R.instancing&&o.enable(0),R.instancingColor&&o.enable(1),R.instancingMorph&&o.enable(2),R.matcap&&o.enable(3),R.envMap&&o.enable(4),R.normalMapObjectSpace&&o.enable(5),R.normalMapTangentSpace&&o.enable(6),R.clearcoat&&o.enable(7),R.iridescence&&o.enable(8),R.alphaTest&&o.enable(9),R.vertexColors&&o.enable(10),R.vertexAlphas&&o.enable(11),R.vertexUv1s&&o.enable(12),R.vertexUv2s&&o.enable(13),R.vertexUv3s&&o.enable(14),R.vertexTangents&&o.enable(15),R.anisotropy&&o.enable(16),R.alphaHash&&o.enable(17),R.batching&&o.enable(18),R.dispersion&&o.enable(19),R.retroreflection&&o.enable(24),R.batchingColor&&o.enable(20),R.gradientMap&&o.enable(21),R.packedNormalMap&&o.enable(22),R.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reversedDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.decodeVideoTextureEmissive&&o.enable(20),R.alphaToCoverage&&o.enable(21),R.numLightProbeGrids>0&&o.enable(22),R.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function v(_){let R=d[_.type],S;if(R){let E=ci[R];S=mp.clone(E.uniforms)}else S=_.uniforms;return S}function y(_,R){let S=f.get(R);return S!==void 0?++S.usedTimes:(S=new __(i,R,_,r),c.push(S),f.set(R,S)),S}function M(_){if(--_.usedTimes===0){let R=c.indexOf(_);c[R]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function w(_){a.remove(_)}function A(){a.dispose()}return{getParameters:b,getProgramCacheKey:g,getUniforms:v,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function T_(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,l){i.get(o)[a]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function E_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function Op(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Np(){let i=[],t=0,e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function a(h,d,p,b,g,m){let x=i[t];return x===void 0?(x={id:h.id,object:h,geometry:d,material:p,materialVariant:o(h),groupOrder:b,renderOrder:h.renderOrder,z:g,group:m},i[t]=x):(x.id=h.id,x.object=h,x.geometry=d,x.material=p,x.materialVariant=o(h),x.groupOrder=b,x.renderOrder=h.renderOrder,x.z=g,x.group=m),t++,x}function l(h,d,p,b,g,m,x){x.reversedDepth===!0&&(g=-g);let v=a(h,d,p,b,g,m);p.transmission>0?n.push(v):p.transparent===!0?r.push(v):e.push(v)}function c(h,d,p,b,g,m){let x=a(h,d,p,b,g,m);p.transmission>0?n.unshift(x):p.transparent===!0?r.unshift(x):e.unshift(x)}function f(h,d){e.length>1&&e.sort(h||E_),n.length>1&&n.sort(d||Op),r.length>1&&r.sort(d||Op)}function u(){for(let h=t,d=i.length;h<d;h++){let p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:l,unshift:c,finish:u,sort:f}}function A_(){let i=new WeakMap;function t(n,r){let s=i.get(n),o;return s===void 0?(o=new Np,i.set(n,[o])):r>=s.length?(o=new Np,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function R_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new W,color:new j};break;case"SpotLight":e={position:new W,direction:new W,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new W,color:new j,distance:0,decay:0};break;case"HemisphereLight":e={direction:new W,skyColor:new j,groundColor:new j};break;case"RectAreaLight":e={color:new j,position:new W,halfWidth:new W,halfHeight:new W};break}return i[t.id]=e,e}}}function C_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var P_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function L_(i){let t=new R_,e=C_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let r=new W,s=new we,o=new we;function a(c){let f=0,u=0,h=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let d=0,p=0,b=0,g=0,m=0,x=0,v=0,y=0,M=0,w=0,A=0,_=0,R=0,S=0;c.sort(I_);for(let I=0,O=c.length;I<O;I++){let C=c[I],L=C.color,T=C.intensity,P=C.distance,N=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Zi?N=C.shadow.map.texture:N=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)f+=L.r*T,u+=L.g*T,h+=L.b*T;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],T);S++}else if(C.isSunLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize.copy(z.mapSize).multiply(z.getFrameExtents()),n.sunShadow[p]=B,n.sunShadowMap[p]=N;let V=z.getViewportCount();for(let H=0;H<V;H++)n.sunShadowMatrix[b+H]=z.getMatrix(H),n.sunShadowCascade[b+H]=z._cascadeData[H];b+=V,p++}n.sun[d]=F,d++}else if(C.isDirectionalLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let z=C.shadow,B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.directionalShadow[g]=B,n.directionalShadowMap[g]=N,n.directionalShadowMatrix[g]=C.shadow.matrix,M++}n.directional[g]=F,g++}else if(C.isSpotLight){let F=t.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(L).multiplyScalar(T),F.distance=P,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[x]=F;let z=C.shadow;if(C.map&&(n.spotLightMap[_]=C.map,_++,z.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[x]=z.matrix,C.castShadow){let B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,n.spotShadow[x]=B,n.spotShadowMap[x]=N,A++}x++}else if(C.isRectAreaLight){let F=t.get(C);F.color.copy(L).multiplyScalar(T),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[v]=F,v++}else if(C.isPointLight){let F=t.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let z=C.shadow,B=e.get(C);B.shadowIntensity=z.intensity,B.shadowBias=z.bias,B.shadowNormalBias=z.normalBias,B.shadowRadius=z.radius,B.shadowMapSize=z.mapSize,B.shadowCameraNear=z.camera.near,B.shadowCameraFar=z.camera.far,n.pointShadow[m]=B,n.pointShadowMap[m]=N,n.pointShadowMatrix[m]=C.shadow.matrix,w++}n.point[m]=F,m++}else if(C.isHemisphereLight){let F=t.get(C);F.skyColor.copy(C.color).multiplyScalar(T),F.groundColor.copy(C.groundColor).multiplyScalar(T),n.hemi[y]=F,y++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;let E=n.hash;(E.sunLength!==d||E.directionalLength!==g||E.pointLength!==m||E.spotLength!==x||E.rectAreaLength!==v||E.hemiLength!==y||E.numSunShadows!==p||E.numDirectionalShadows!==M||E.numPointShadows!==w||E.numSpotShadows!==A||E.numSpotMaps!==_||E.numLightProbes!==S)&&(n.sun.length=d,n.directional.length=g,n.spot.length=x,n.rectArea.length=v,n.point.length=m,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=b,n.sunShadowCascade.length=b,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+_-R,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=S,E.sunLength=d,E.directionalLength=g,E.pointLength=m,E.spotLength=x,E.rectAreaLength=v,E.hemiLength=y,E.numSunShadows=p,E.numDirectionalShadows=M,E.numPointShadows=w,E.numSpotShadows=A,E.numSpotMaps=_,E.numLightProbes=S,n.version=P_++)}function l(c,f){let u=0,h=0,d=0,p=0,b=0,g=0,m=f.matrixWorldInverse;for(let x=0,v=c.length;x<v;x++){let y=c[x];if(y.isSunLight){let M=n.sun[u];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),u++}else if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),h++}else if(y.isSpotLight){let M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){let M=n.rectArea[b];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),b++}else if(y.isPointLight){let M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Up(i){let t=new L_(i),e=[],n=[],r=[];function s(h){u.camera=h,e.length=0,n.length=0,r.length=0}function o(h){e.push(h)}function a(h){n.push(h)}function l(h){r.push(h)}function c(){t.setup(e)}function f(h){t.setupView(e,h)}let u={lightsArray:e,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:f,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function F_(i){let t=new WeakMap;function e(r,s=0){let o=t.get(r),a;return o===void 0?(a=new Up(i),t.set(r,[a])):s>=o.length?(a=new Up(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var D_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,O_=`uniform sampler2D shadow_pass;
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
}`,N_=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],U_=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Bp=new we,Eo=new W,vh=new W;function B_(i,t,e){let n=new no,r=new te,s=new te,o=new ke,a=new nl,l=new il,c={},f=e.maxTextureSize,u={[ai]:sn,[sn]:ai,[oe]:oe},h=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:D_,fragmentShader:O_}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let p=new Gt;p.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new Ct(p,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mo;let m=this.type;this.render=function(w,A,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Rd&&(Kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=mo);let R=i.getRenderTarget(),S=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Fn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);let O=m!==this.type;O&&A.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(L=>L.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,L=w.length;C<L;C++){let T=w[C],P=T.shadow;if(P===void 0){Kt("WebGLShadowMap:",T,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;r.copy(P.mapSize);let N=P.getFrameExtents();r.multiply(N),s.copy(P.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/N.x),r.x=s.x*N.x,P.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/N.y),r.y=s.y*N.y,P.mapSize.y=s.y));let F=i.state.buffers.depth.getReversed();if(P.camera._reversedDepth=F,P.map===null||O===!0){if(P.map!==null&&(P.map.depthTexture!==null&&(P.map.depthTexture.dispose(),P.map.depthTexture=null),P.map.dispose()),this.type===ms){if(T.isPointLight){Kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}P.map=new Ye(r.x,r.y,{format:Zi,type:qn,minFilter:Xe,magFilter:Xe,generateMipmaps:!1}),P.map.texture.name=T.name+".shadowMap",P.map.depthTexture=new oi(r.x,r.y,Yn),P.map.depthTexture.name=T.name+".shadowMapDepth",P.map.depthTexture.format=ei,P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=tn,P.map.depthTexture.magFilter=tn}else T.isPointLight?(P.map=new ac(r.x),P.map.depthTexture=new tl(r.x,Xn)):(P.map=new Ye(r.x,r.y),P.map.depthTexture=new oi(r.x,r.y,Xn)),P.map.depthTexture.name=T.name+".shadowMap",P.map.depthTexture.format=ei,this.type===mo?(P.map.depthTexture.compareFunction=F?ic:nc,P.map.depthTexture.minFilter=Xe,P.map.depthTexture.magFilter=Xe):(P.map.depthTexture.compareFunction=null,P.map.depthTexture.minFilter=tn,P.map.depthTexture.magFilter=tn);P.camera.updateProjectionMatrix()}P.map.isWebGLCubeRenderTarget!==!0&&(P.map.width!==r.x||P.map.height!==r.y)&&P.map.setSize(r.x,r.y);let z=P.map.isWebGLCubeRenderTarget?6:P.getViewportCount();T.isPointLight!==!0&&P.updateMatrices(T,_);for(let B=0;B<z;B++){let V=P.getCamera(B);if(T.isPointLight){let H=P.camera,J=P.matrix,tt=T.distance||H.far;tt!==H.far&&(H.far=tt,H.updateProjectionMatrix()),Eo.setFromMatrixPosition(T.matrixWorld),H.position.copy(Eo),vh.copy(H.position),vh.add(N_[B]),H.up.copy(U_[B]),H.lookAt(vh),H.updateMatrixWorld(),J.makeTranslation(-Eo.x,-Eo.y,-Eo.z),Bp.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),P._frustum.setFromProjectionMatrix(Bp,H.coordinateSystem,H.reversedDepth)}if(P.map.isWebGLCubeRenderTarget)i.setRenderTarget(P.map,B),i.clear();else{B===0&&(i.setRenderTarget(P.map),i.clear());let H=P.getViewport(B);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),I.viewport(o)}n=P.getFrustum(B),y(A,_,V,T,this.type)}P.isPointLightShadow!==!0&&this.type===ms&&x(P,_),P.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(R,S,E)};function x(w,A){let _=t.update(b);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new Ye(r.x,r.y,{format:Zi,type:qn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,_,h,b,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,_,d,b,null)}function v(w,A,_,R){let S=null,E=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)S=E;else if(S=_.isPointLight===!0?l:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let I=S.uuid,O=A.uuid,C=c[I];C===void 0&&(C={},c[I]=C);let L=C[O];L===void 0&&(L=S.clone(),C[O]=L,A.addEventListener("dispose",M)),S=L}if(S.visible=A.visible,S.wireframe=A.wireframe,R===ms?S.side=A.shadowSide!==null?A.shadowSide:A.side:S.side=A.shadowSide!==null?A.shadowSide:u[A.side],S.alphaMap=A.alphaMap,S.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,S.map=A.map,S.clipShadows=A.clipShadows,S.clippingPlanes=A.clippingPlanes,S.clipIntersection=A.clipIntersection,S.displacementMap=A.displacementMap,S.displacementScale=A.displacementScale,S.displacementBias=A.displacementBias,S.wireframeLinewidth=A.wireframeLinewidth,S.linewidth=A.linewidth,_.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let I=i.properties.get(S);I.light=_}return S}function y(w,A,_,R,S){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===ms)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let O=t.update(w),C=w.material;if(Array.isArray(C)){let L=O.groups;for(let T=0,P=L.length;T<P;T++){let N=L[T],F=C[N.materialIndex];if(F&&F.visible){let z=v(w,F,R,S);w.onBeforeShadow(i,w,A,_,O,z,N),i.renderBufferDirect(_,null,O,z,w,N),w.onAfterShadow(i,w,A,_,O,z,N)}}}else if(C.visible){let L=v(w,C,R,S);w.onBeforeShadow(i,w,A,_,O,L,null),i.renderBufferDirect(_,null,O,L,w,null),w.onAfterShadow(i,w,A,_,O,L,null)}}let I=w.children;for(let O=0,C=I.length;O<C;O++)y(I[O],A,_,R,S)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in c){let R=c[_],S=w.target.uuid;S in R&&(R[S].dispose(),delete R[S])}}}function k_(i,t){function e(){let K=!1,St=new ke,ht=null,wt=new ke(0,0,0,0);return{setMask:function(Pt){ht!==Pt&&!K&&(i.colorMask(Pt,Pt,Pt,Pt),ht=Pt)},setLocked:function(Pt){K=Pt},setClear:function(Pt,pt,Xt,zt,Ce){Ce===!0&&(Pt*=zt,pt*=zt,Xt*=zt),St.set(Pt,pt,Xt,zt),wt.equals(St)===!1&&(i.clearColor(Pt,pt,Xt,zt),wt.copy(St))},reset:function(){K=!1,ht=null,wt.set(-1,0,0,0)}}}function n(){let K=!1,St=!1,ht=null,wt=null,Pt=null;return{setReversed:function(pt){if(St!==pt){let Xt=t.get("EXT_clip_control");pt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),St=pt;let zt=Pt;Pt=null,this.setClear(zt)}},getReversed:function(){return St},setTest:function(pt){pt?q(i.DEPTH_TEST):Y(i.DEPTH_TEST)},setMask:function(pt){ht!==pt&&!K&&(i.depthMask(pt),ht=pt)},setFunc:function(pt){if(St&&(pt=lp[pt]),wt!==pt){switch(pt){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Ba:i.depthFunc(i.LESS);break;case rs:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case za:i.depthFunc(i.GEQUAL);break;case Va:i.depthFunc(i.GREATER);break;case Ga:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}wt=pt}},setLocked:function(pt){K=pt},setClear:function(pt){Pt!==pt&&(Pt=pt,St&&(pt=1-pt),i.clearDepth(pt))},reset:function(){K=!1,ht=null,wt=null,Pt=null,St=!1}}}function r(){let K=!1,St=null,ht=null,wt=null,Pt=null,pt=null,Xt=null,zt=null,Ce=null;return{setTest:function(xe){K||(xe?q(i.STENCIL_TEST):Y(i.STENCIL_TEST))},setMask:function(xe){St!==xe&&!K&&(i.stencilMask(xe),St=xe)},setFunc:function(xe,Un,Jn){(ht!==xe||wt!==Un||Pt!==Jn)&&(i.stencilFunc(xe,Un,Jn),ht=xe,wt=Un,Pt=Jn)},setOp:function(xe,Un,Jn){(pt!==xe||Xt!==Un||zt!==Jn)&&(i.stencilOp(xe,Un,Jn),pt=xe,Xt=Un,zt=Jn)},setLocked:function(xe){K=xe},setClear:function(xe){Ce!==xe&&(i.clearStencil(xe),Ce=xe)},reset:function(){K=!1,St=null,ht=null,wt=null,Pt=null,pt=null,Xt=null,zt=null,Ce=null}}}let s=new e,o=new n,a=new r,l=new WeakMap,c=new WeakMap,f={},u={},h={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,v=null,y=null,M=null,w=null,A=null,_=new j(0,0,0),R=0,S=!1,E=null,I=null,O=null,C=null,L=null,T=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),P=!1,N=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(F)[1]),P=N>=1):F.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),P=N>=2);let z=null,B={},V=i.getParameter(i.SCISSOR_BOX),H=i.getParameter(i.VIEWPORT),J=new ke().fromArray(V),tt=new ke().fromArray(H);function ot(K,St,ht,wt){let Pt=new Uint8Array(4),pt=i.createTexture();i.bindTexture(K,pt),i.texParameteri(K,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(K,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<ht;Xt++)K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?i.texImage3D(St,0,i.RGBA,1,1,wt,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(St+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return pt}let X={};X[i.TEXTURE_2D]=ot(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ot(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ot(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ot(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),q(i.DEPTH_TEST),o.setFunc(rs),Ut(!1),$t(Nu),q(i.CULL_FACE),xt(Fn);function q(K){f[K]!==!0&&(i.enable(K),f[K]=!0)}function Y(K){f[K]!==!1&&(i.disable(K),f[K]=!1)}function st(K,St){return h[K]!==St?(i.bindFramebuffer(K,St),h[K]=St,K===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=St),K===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=St),!0):!1}function rt(K,St){let ht=p,wt=!1;if(K){ht=d.get(St),ht===void 0&&(ht=[],d.set(St,ht));let Pt=K.textures;if(ht.length!==Pt.length||ht[0]!==i.COLOR_ATTACHMENT0){for(let pt=0,Xt=Pt.length;pt<Xt;pt++)ht[pt]=i.COLOR_ATTACHMENT0+pt;ht.length=Pt.length,wt=!0}}else ht[0]!==i.BACK&&(ht[0]=i.BACK,wt=!0);wt&&i.drawBuffers(ht)}function lt(K){return b!==K?(i.useProgram(K),b=K,!0):!1}let gt={[yr]:i.FUNC_ADD,[Pd]:i.FUNC_SUBTRACT,[Id]:i.FUNC_REVERSE_SUBTRACT};gt[Ld]=i.MIN,gt[Fd]=i.MAX;let dt={[Dd]:i.ZERO,[Od]:i.ONE,[Nd]:i.SRC_COLOR,[Bu]:i.SRC_ALPHA,[Gd]:i.SRC_ALPHA_SATURATE,[zd]:i.DST_COLOR,[Bd]:i.DST_ALPHA,[Ud]:i.ONE_MINUS_SRC_COLOR,[ku]:i.ONE_MINUS_SRC_ALPHA,[Vd]:i.ONE_MINUS_DST_COLOR,[kd]:i.ONE_MINUS_DST_ALPHA,[Hd]:i.CONSTANT_COLOR,[Wd]:i.ONE_MINUS_CONSTANT_COLOR,[Xd]:i.CONSTANT_ALPHA,[Yd]:i.ONE_MINUS_CONSTANT_ALPHA};function xt(K,St,ht,wt,Pt,pt,Xt,zt,Ce,xe){if(K===Fn){g===!0&&(Y(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),K!==Cd){if(K!==m||xe!==S){if((x!==yr||M!==yr)&&(i.blendEquation(i.FUNC_ADD),x=yr,M=yr),xe)switch(K){case Tn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Re:i.blendFunc(i.ONE,i.ONE);break;case Uu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case go:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:jt("WebGLState: Invalid blending: ",K);break}else switch(K){case Tn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Re:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Uu:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case go:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",K);break}v=null,y=null,w=null,A=null,_.set(0,0,0),R=0,m=K,S=xe}return}Pt=Pt||St,pt=pt||ht,Xt=Xt||wt,(St!==x||Pt!==M)&&(i.blendEquationSeparate(gt[St],gt[Pt]),x=St,M=Pt),(ht!==v||wt!==y||pt!==w||Xt!==A)&&(i.blendFuncSeparate(dt[ht],dt[wt],dt[pt],dt[Xt]),v=ht,y=wt,w=pt,A=Xt),(zt.equals(_)===!1||Ce!==R)&&(i.blendColor(zt.r,zt.g,zt.b,Ce),_.copy(zt),R=Ce),m=K,S=!1}function bt(K,St){K.side===oe?Y(i.CULL_FACE):q(i.CULL_FACE);let ht=K.side===sn;St&&(ht=!ht),Ut(ht),K.blending===Tn&&K.transparent===!1?xt(Fn):xt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),o.setFunc(K.depthFunc),o.setTest(K.depthTest),o.setMask(K.depthWrite),s.setMask(K.colorWrite);let wt=K.stencilWrite;a.setTest(wt),wt&&(a.setMask(K.stencilWriteMask),a.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),a.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),se(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):Y(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(K){E!==K&&(K?i.frontFace(i.CW):i.frontFace(i.CCW),E=K)}function $t(K){K!==Ed?(q(i.CULL_FACE),K!==I&&(K===Nu?i.cullFace(i.BACK):K===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Y(i.CULL_FACE),I=K}function Nt(K){K!==O&&(P&&i.lineWidth(K),O=K)}function se(K,St,ht){K?(q(i.POLYGON_OFFSET_FILL),(C!==St||L!==ht)&&(C=St,L=ht,o.getReversed()&&(St=-St),i.polygonOffset(St,ht))):Y(i.POLYGON_OFFSET_FILL)}function Jt(K){K?q(i.SCISSOR_TEST):Y(i.SCISSOR_TEST)}function Te(K){K===void 0&&(K=i.TEXTURE0+T-1),z!==K&&(i.activeTexture(K),z=K)}function $(K,St,ht){ht===void 0&&(z===null?ht=i.TEXTURE0+T-1:ht=z);let wt=B[ht];wt===void 0&&(wt={type:void 0,texture:void 0},B[ht]=wt),(wt.type!==K||wt.texture!==St)&&(z!==ht&&(i.activeTexture(ht),z=ht),i.bindTexture(K,St||X[K]),wt.type=K,wt.texture=St)}function Ee(){let K=B[z];K!==void 0&&K.type!==void 0&&(i.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function ge(){try{i.compressedTexImage2D(...arguments)}catch(K){jt("WebGLState:",K)}}function G(){try{i.compressedTexImage3D(...arguments)}catch(K){jt("WebGLState:",K)}}function D(){try{i.texSubImage2D(...arguments)}catch(K){jt("WebGLState:",K)}}function Q(){try{i.texSubImage3D(...arguments)}catch(K){jt("WebGLState:",K)}}function it(){try{i.compressedTexSubImage2D(...arguments)}catch(K){jt("WebGLState:",K)}}function ct(){try{i.compressedTexSubImage3D(...arguments)}catch(K){jt("WebGLState:",K)}}function yt(){try{i.texStorage2D(...arguments)}catch(K){jt("WebGLState:",K)}}function vt(){try{i.texStorage3D(...arguments)}catch(K){jt("WebGLState:",K)}}function ut(){try{i.texImage2D(...arguments)}catch(K){jt("WebGLState:",K)}}function ft(){try{i.texImage3D(...arguments)}catch(K){jt("WebGLState:",K)}}function _t(K){return u[K]!==void 0?u[K]:i.getParameter(K)}function Ht(K,St){u[K]!==St&&(i.pixelStorei(K,St),u[K]=St)}function Tt(K){J.equals(K)===!1&&(i.scissor(K.x,K.y,K.z,K.w),J.copy(K))}function Mt(K){tt.equals(K)===!1&&(i.viewport(K.x,K.y,K.z,K.w),tt.copy(K))}function Wt(K,St){let ht=c.get(St);ht===void 0&&(ht=new WeakMap,c.set(St,ht));let wt=ht.get(K);wt===void 0&&(wt=i.getUniformBlockIndex(St,K.name),ht.set(K,wt))}function Zt(K,St){let wt=c.get(St).get(K);l.get(St)!==wt&&(i.uniformBlockBinding(St,wt,K.__bindingPointIndex),l.set(St,wt))}function le(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),f={},u={},z=null,B={},h={},d=new WeakMap,p=[],b=null,g=!1,m=null,x=null,v=null,y=null,M=null,w=null,A=null,_=new j(0,0,0),R=0,S=!1,E=null,I=null,O=null,C=null,L=null,J.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:q,disable:Y,bindFramebuffer:st,drawBuffers:rt,useProgram:lt,setBlending:xt,setMaterial:bt,setFlipSided:Ut,setCullFace:$t,setLineWidth:Nt,setPolygonOffset:se,setScissorTest:Jt,activeTexture:Te,bindTexture:$,unbindTexture:Ee,compressedTexImage2D:ge,compressedTexImage3D:G,texImage2D:ut,texImage3D:ft,pixelStorei:Ht,getParameter:_t,updateUBOMapping:Wt,uniformBlockBinding:Zt,texStorage2D:yt,texStorage3D:vt,texSubImage2D:D,texSubImage3D:Q,compressedTexSubImage2D:it,compressedTexSubImage3D:ct,scissor:Tt,viewport:Mt,reset:le}}function z_(i,t,e,n,r,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,f=new WeakMap,u=new Set,h,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,D){return p?new OffscreenCanvas(G,D):ss("canvas")}function g(G,D,Q){let it=1,ct=ge(G);if((ct.width>Q||ct.height>Q)&&(it=Q/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){let yt=Math.floor(it*ct.width),vt=Math.floor(it*ct.height);h===void 0&&(h=b(yt,vt));let ut=D?b(yt,vt):h;return ut.width=yt,ut.height=vt,ut.getContext("2d").drawImage(G,0,0,yt,vt),Kt("WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+yt+"x"+vt+")."),ut}else return"data"in G&&Kt("WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),G;return G}function m(G){return G.generateMipmaps}function x(G){i.generateMipmap(G)}function v(G){return G.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?i.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(G,D,Q,it,ct,yt=!1){if(G!==null){if(i[G]!==void 0)return i[G];Kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let vt;it&&(vt=t.get("EXT_texture_norm16"),vt||Kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ut=D;if(D===i.RED&&(Q===i.FLOAT&&(ut=i.R32F),Q===i.HALF_FLOAT&&(ut=i.R16F),Q===i.UNSIGNED_BYTE&&(ut=i.R8),Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.R16_EXT),Q===i.SHORT&&vt&&(ut=vt.R16_SNORM_EXT)),D===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.R8UI),Q===i.UNSIGNED_SHORT&&(ut=i.R16UI),Q===i.UNSIGNED_INT&&(ut=i.R32UI),Q===i.BYTE&&(ut=i.R8I),Q===i.SHORT&&(ut=i.R16I),Q===i.INT&&(ut=i.R32I)),D===i.RG&&(Q===i.FLOAT&&(ut=i.RG32F),Q===i.HALF_FLOAT&&(ut=i.RG16F),Q===i.UNSIGNED_BYTE&&(ut=i.RG8),Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.RG16_EXT),Q===i.SHORT&&vt&&(ut=vt.RG16_SNORM_EXT)),D===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RG16UI),Q===i.UNSIGNED_INT&&(ut=i.RG32UI),Q===i.BYTE&&(ut=i.RG8I),Q===i.SHORT&&(ut=i.RG16I),Q===i.INT&&(ut=i.RG32I)),D===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGB16UI),Q===i.UNSIGNED_INT&&(ut=i.RGB32UI),Q===i.BYTE&&(ut=i.RGB8I),Q===i.SHORT&&(ut=i.RGB16I),Q===i.INT&&(ut=i.RGB32I)),D===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ut=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ut=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ut=i.RGBA32UI),Q===i.BYTE&&(ut=i.RGBA8I),Q===i.SHORT&&(ut=i.RGBA16I),Q===i.INT&&(ut=i.RGBA32I)),D===i.RGB&&(Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.RGB16_EXT),Q===i.SHORT&&vt&&(ut=vt.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ut=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ut=i.R11F_G11F_B10F)),D===i.RGBA){let ft=yt?Zs:fe.getTransfer(ct);Q===i.FLOAT&&(ut=i.RGBA32F),Q===i.HALF_FLOAT&&(ut=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ut=ft===ve?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&vt&&(ut=vt.RGBA16_EXT),Q===i.SHORT&&vt&&(ut=vt.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ut=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ut=i.RGB5_A1)}return(ut===i.R16F||ut===i.R32F||ut===i.RG16F||ut===i.RG32F||ut===i.RGBA16F||ut===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function M(G,D){let Q;return G?D===null||D===Xn||D===bs?Q=i.DEPTH24_STENCIL8:D===Yn?Q=i.DEPTH32F_STENCIL8:D===gs&&(Q=i.DEPTH24_STENCIL8,Kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):D===null||D===Xn||D===bs?Q=i.DEPTH_COMPONENT24:D===Yn?Q=i.DEPTH_COMPONENT32F:D===gs&&(Q=i.DEPTH_COMPONENT16),Q}function w(G,D){return m(G)===!0||G.isFramebufferTexture&&G.minFilter!==tn&&G.minFilter!==Xe?Math.log2(Math.max(D.width,D.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?D.mipmaps.length:1}function A(G){let D=G.target;D.removeEventListener("dispose",A),R(D),D.isVideoTexture&&f.delete(D),D.isHTMLTexture&&u.delete(D)}function _(G){let D=G.target;D.removeEventListener("dispose",_),E(D)}function R(G){let D=n.get(G);if(D.__webglInit===void 0)return;let Q=G.source,it=d.get(Q);if(it){let ct=it[D.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&S(G),Object.keys(it).length===0&&d.delete(Q)}n.remove(G)}function S(G){let D=n.get(G);i.deleteTexture(D.__webglTexture);let Q=G.source,it=d.get(Q);delete it[D.__cacheKey],o.memory.textures--}function E(G){let D=n.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),n.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(D.__webglFramebuffer[it]))for(let ct=0;ct<D.__webglFramebuffer[it].length;ct++)i.deleteFramebuffer(D.__webglFramebuffer[it][ct]);else i.deleteFramebuffer(D.__webglFramebuffer[it]);D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer[it])}else{if(Array.isArray(D.__webglFramebuffer))for(let it=0;it<D.__webglFramebuffer.length;it++)i.deleteFramebuffer(D.__webglFramebuffer[it]);else i.deleteFramebuffer(D.__webglFramebuffer);if(D.__webglDepthbuffer&&i.deleteRenderbuffer(D.__webglDepthbuffer),D.__webglMultisampledFramebuffer&&i.deleteFramebuffer(D.__webglMultisampledFramebuffer),D.__webglColorRenderbuffer)for(let it=0;it<D.__webglColorRenderbuffer.length;it++)D.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(D.__webglColorRenderbuffer[it]);D.__webglDepthRenderbuffer&&i.deleteRenderbuffer(D.__webglDepthRenderbuffer)}let Q=G.textures;for(let it=0,ct=Q.length;it<ct;it++){let yt=n.get(Q[it]);yt.__webglTexture&&(i.deleteTexture(yt.__webglTexture),o.memory.textures--),n.remove(Q[it])}n.remove(G)}let I=0;function O(){I=0}function C(){return I}function L(G){I=G}function T(){let G=I;return G>=r.maxTextures&&Kt("WebGLTextures: Trying to use "+(G+1)+" texture units while this GPU supports only "+r.maxTextures),I+=1,G}function P(G){let D=[];return D.push(G.wrapS),D.push(G.wrapT),D.push(G.wrapR||0),D.push(G.magFilter),D.push(G.minFilter),D.push(G.anisotropy),D.push(G.internalFormat),D.push(G.format),D.push(G.type),D.push(G.generateMipmaps),D.push(G.premultiplyAlpha),D.push(G.flipY),D.push(G.unpackAlignment),D.push(G.colorSpace),D.join()}function N(G,D){let Q=n.get(G);if(G.isVideoTexture&&$(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&Q.__version!==G.version){let it=G.image;if(it===null)Kt("WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)Kt("WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Q,G,D);return}}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+D)}function F(G,D){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){Y(Q,G,D);return}else G.isExternalTexture&&(Q.__webglTexture=G.sourceTexture?G.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+D)}function z(G,D){let Q=n.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&Q.__version!==G.version){Y(Q,G,D);return}e.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+D)}function B(G,D){let Q=n.get(G);if(G.isCubeDepthTexture!==!0&&G.version>0&&Q.__version!==G.version){st(Q,G,D);return}e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+D)}let V={[pr]:i.REPEAT,[Mn]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},H={[tn]:i.NEAREST,[Zd]:i.NEAREST_MIPMAP_NEAREST,[xo]:i.NEAREST_MIPMAP_LINEAR,[Xe]:i.LINEAR,[yl]:i.LINEAR_MIPMAP_NEAREST,[qi]:i.LINEAR_MIPMAP_LINEAR},J={[Qd]:i.NEVER,[rp]:i.ALWAYS,[tp]:i.LESS,[nc]:i.LEQUAL,[ep]:i.EQUAL,[ic]:i.GEQUAL,[np]:i.GREATER,[ip]:i.NOTEQUAL};function tt(G,D){if(D.type===Yn&&t.has("OES_texture_float_linear")===!1&&(D.magFilter===Xe||D.magFilter===yl||D.magFilter===xo||D.magFilter===qi||D.minFilter===Xe||D.minFilter===yl||D.minFilter===xo||D.minFilter===qi)&&Kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(G,i.TEXTURE_WRAP_S,V[D.wrapS]),i.texParameteri(G,i.TEXTURE_WRAP_T,V[D.wrapT]),(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)&&i.texParameteri(G,i.TEXTURE_WRAP_R,V[D.wrapR]),i.texParameteri(G,i.TEXTURE_MAG_FILTER,H[D.magFilter]),i.texParameteri(G,i.TEXTURE_MIN_FILTER,H[D.minFilter]),D.compareFunction&&(i.texParameteri(G,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(G,i.TEXTURE_COMPARE_FUNC,J[D.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(D.magFilter===tn||D.minFilter!==xo&&D.minFilter!==qi||D.type===Yn&&t.has("OES_texture_float_linear")===!1)return;if(D.anisotropy>1||n.get(D).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(G,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,r.getMaxAnisotropy())),n.get(D).__currentAnisotropy=D.anisotropy}}}function ot(G,D){let Q=!1;G.__webglInit===void 0&&(G.__webglInit=!0,D.addEventListener("dispose",A));let it=D.source,ct=d.get(it);ct===void 0&&(ct={},d.set(it,ct));let yt=P(D);if(yt!==G.__cacheKey){ct[yt]===void 0&&(ct[yt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ct[yt].usedTimes++;let vt=ct[G.__cacheKey];vt!==void 0&&(ct[G.__cacheKey].usedTimes--,vt.usedTimes===0&&S(D)),G.__cacheKey=yt,G.__webglTexture=ct[yt].texture}return Q}function X(G,D,Q){return Math.floor(Math.floor(G/Q)/D)}function q(G,D,Q,it){let yt=G.updateRanges;if(yt.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,D.width,D.height,Q,it,D.data);else{yt.sort((Ht,Tt)=>Ht.start-Tt.start);let vt=0;for(let Ht=1;Ht<yt.length;Ht++){let Tt=yt[vt],Mt=yt[Ht],Wt=Tt.start+Tt.count,Zt=X(Mt.start,D.width,4),le=X(Tt.start,D.width,4);Mt.start<=Wt+1&&Zt===le&&X(Mt.start+Mt.count-1,D.width,4)===Zt?Tt.count=Math.max(Tt.count,Mt.start+Mt.count-Tt.start):(++vt,yt[vt]=Mt)}yt.length=vt+1;let ut=e.getParameter(i.UNPACK_ROW_LENGTH),ft=e.getParameter(i.UNPACK_SKIP_PIXELS),_t=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,D.width);for(let Ht=0,Tt=yt.length;Ht<Tt;Ht++){let Mt=yt[Ht],Wt=Math.floor(Mt.start/4),Zt=Math.ceil(Mt.count/4),le=Wt%D.width,K=Math.floor(Wt/D.width),St=Zt,ht=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,le),e.pixelStorei(i.UNPACK_SKIP_ROWS,K),e.texSubImage2D(i.TEXTURE_2D,0,le,K,St,ht,Q,it,D.data)}G.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,ut),e.pixelStorei(i.UNPACK_SKIP_PIXELS,ft),e.pixelStorei(i.UNPACK_SKIP_ROWS,_t)}}function Y(G,D,Q){let it=i.TEXTURE_2D;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),D.isData3DTexture&&(it=i.TEXTURE_3D);let ct=ot(G,D),yt=D.source;e.bindTexture(it,G.__webglTexture,i.TEXTURE0+Q);let vt=n.get(yt);if(yt.version!==vt.__version||ct===!0){if(e.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&D.image instanceof ImageBitmap)===!1){let ht=fe.getPrimaries(fe.workingColorSpace),wt=D.colorSpace===wi?null:fe.getPrimaries(D.colorSpace),Pt=D.colorSpace===wi||ht===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt)}e.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment);let ft=g(D.image,!1,r.maxTextureSize);ft=Ee(D,ft);let _t=s.convert(D.format,D.colorSpace),Ht=s.convert(D.type),Tt=y(D.internalFormat,_t,Ht,D.normalized,D.colorSpace,D.isVideoTexture);tt(it,D);let Mt,Wt=D.mipmaps,Zt=D.isVideoTexture!==!0,le=vt.__version===void 0||ct===!0,K=yt.dataReady,St=w(D,ft);if(D.isDepthTexture)Tt=M(D.format===$i,D.type),le&&(Zt?e.texStorage2D(i.TEXTURE_2D,1,Tt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Tt,ft.width,ft.height,0,_t,Ht,null));else if(D.isDataTexture)if(Wt.length>0){Zt&&le&&e.texStorage2D(i.TEXTURE_2D,St,Tt,Wt[0].width,Wt[0].height);for(let ht=0,wt=Wt.length;ht<wt;ht++)Mt=Wt[ht],Zt?K&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,_t,Ht,Mt.data):e.texImage2D(i.TEXTURE_2D,ht,Tt,Mt.width,Mt.height,0,_t,Ht,Mt.data);D.generateMipmaps=!1}else Zt?(le&&e.texStorage2D(i.TEXTURE_2D,St,Tt,ft.width,ft.height),K&&q(D,ft,_t,Ht)):e.texImage2D(i.TEXTURE_2D,0,Tt,ft.width,ft.height,0,_t,Ht,ft.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){Zt&&le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Tt,Wt[0].width,Wt[0].height,ft.depth);for(let ht=0,wt=Wt.length;ht<wt;ht++)if(Mt=Wt[ht],D.format!==Dn)if(_t!==null)if(Zt){if(K)if(D.layerUpdates.size>0){let Pt=ch(Mt.width,Mt.height,D.format,D.type);for(let pt of D.layerUpdates){let Xt=Mt.data.subarray(pt*Pt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*Pt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,pt,Mt.width,Mt.height,1,_t,Xt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ft.depth,_t,Mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ht,Tt,Mt.width,Mt.height,ft.depth,0,Mt.data,0,0);else Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?K&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,ht,0,0,0,Mt.width,Mt.height,ft.depth,_t,Ht,Mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ht,Tt,Mt.width,Mt.height,ft.depth,0,_t,Ht,Mt.data);D.layerUpdates.size>0&&D.clearLayerUpdates()}else{Zt&&le&&e.texStorage2D(i.TEXTURE_2D,St,Tt,Wt[0].width,Wt[0].height);for(let ht=0,wt=Wt.length;ht<wt;ht++)Mt=Wt[ht],D.format!==Dn?_t!==null?Zt?K&&e.compressedTexSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(i.TEXTURE_2D,ht,Tt,Mt.width,Mt.height,0,Mt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?K&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,Mt.width,Mt.height,_t,Ht,Mt.data):e.texImage2D(i.TEXTURE_2D,ht,Tt,Mt.width,Mt.height,0,_t,Ht,Mt.data)}else if(D.isDataArrayTexture)if(Zt){if(le&&e.texStorage3D(i.TEXTURE_2D_ARRAY,St,Tt,ft.width,ft.height,ft.depth),K)if(D.layerUpdates.size>0){let ht=ch(ft.width,ft.height,D.format,D.type);for(let wt of D.layerUpdates){let Pt=ft.data.subarray(wt*ht/ft.data.BYTES_PER_ELEMENT,(wt+1)*ht/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,wt,ft.width,ft.height,1,_t,Ht,Pt)}D.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,_t,Ht,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Tt,ft.width,ft.height,ft.depth,0,_t,Ht,ft.data);else if(D.isData3DTexture)Zt?(le&&e.texStorage3D(i.TEXTURE_3D,St,Tt,ft.width,ft.height,ft.depth),K&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,_t,Ht,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Tt,ft.width,ft.height,ft.depth,0,_t,Ht,ft.data);else if(D.isFramebufferTexture){if(le)if(Zt)e.texStorage2D(i.TEXTURE_2D,St,Tt,ft.width,ft.height);else{let ht=ft.width,wt=ft.height;for(let Pt=0;Pt<St;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Tt,ht,wt,0,_t,Ht,null),ht>>=1,wt>>=1}}else if(D.isHTMLTexture){if("texElementImage2D"in i){let ht=i.canvas;if(ht.hasAttribute("layoutsubtree")||ht.setAttribute("layoutsubtree","true"),ft.parentNode!==ht){ht.appendChild(ft),u.add(D),ht.onpaint=wt=>{let Pt=wt.changedElements;for(let pt of u)Pt.includes(pt.image)&&(pt.needsUpdate=!0)},ht.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ft);else{let Pt=i.RGBA,pt=i.RGBA,Xt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Pt,pt,Xt,ft)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Zt&&le){let ht=ge(Wt[0]);e.texStorage2D(i.TEXTURE_2D,St,Tt,ht.width,ht.height)}for(let ht=0,wt=Wt.length;ht<wt;ht++)Mt=Wt[ht],Zt?K&&e.texSubImage2D(i.TEXTURE_2D,ht,0,0,_t,Ht,Mt):e.texImage2D(i.TEXTURE_2D,ht,Tt,_t,Ht,Mt);D.generateMipmaps=!1}else if(Zt){if(le){let ht=ge(ft);e.texStorage2D(i.TEXTURE_2D,St,Tt,ht.width,ht.height)}K&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Ht,ft)}else e.texImage2D(i.TEXTURE_2D,0,Tt,_t,Ht,ft);m(D)&&x(it),vt.__version=yt.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function st(G,D,Q){if(D.image.length!==6)return;let it=ot(G,D),ct=D.source;e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+Q);let yt=n.get(ct);if(ct.version!==yt.__version||it===!0){e.activeTexture(i.TEXTURE0+Q);let vt=fe.getPrimaries(fe.workingColorSpace),ut=D.colorSpace===wi?null:fe.getPrimaries(D.colorSpace),ft=D.colorSpace===wi||vt===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,D.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,D.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let _t=D.isCompressedTexture||D.image[0].isCompressedTexture,Ht=D.image[0]&&D.image[0].isDataTexture,Tt=[];for(let pt=0;pt<6;pt++)!_t&&!Ht?Tt[pt]=g(D.image[pt],!0,r.maxCubemapSize):Tt[pt]=Ht?D.image[pt].image:D.image[pt],Tt[pt]=Ee(D,Tt[pt]);let Mt=Tt[0],Wt=s.convert(D.format,D.colorSpace),Zt=s.convert(D.type),le=y(D.internalFormat,Wt,Zt,D.normalized,D.colorSpace),K=D.isVideoTexture!==!0,St=yt.__version===void 0||it===!0,ht=ct.dataReady,wt=w(D,Mt);tt(i.TEXTURE_CUBE_MAP,D);let Pt;if(_t){K&&St&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,le,Mt.width,Mt.height);for(let pt=0;pt<6;pt++){Pt=Tt[pt].mipmaps;for(let Xt=0;Xt<Pt.length;Xt++){let zt=Pt[Xt];D.format!==Dn?Wt!==null?K?ht&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,0,0,zt.width,zt.height,Wt,zt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,le,zt.width,zt.height,0,zt.data):Kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,0,0,zt.width,zt.height,Wt,Zt,zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt,le,zt.width,zt.height,0,Wt,Zt,zt.data)}}}else{if(Pt=D.mipmaps,K&&St){Pt.length>0&&wt++;let pt=ge(Tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,le,pt.width,pt.height)}for(let pt=0;pt<6;pt++)if(Ht){K?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Tt[pt].width,Tt[pt].height,Wt,Zt,Tt[pt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,le,Tt[pt].width,Tt[pt].height,0,Wt,Zt,Tt[pt].data);for(let Xt=0;Xt<Pt.length;Xt++){let Ce=Pt[Xt].image[pt].image;K?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,0,0,Ce.width,Ce.height,Wt,Zt,Ce.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,le,Ce.width,Ce.height,0,Wt,Zt,Ce.data)}}else{K?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,0,0,Wt,Zt,Tt[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0,le,Wt,Zt,Tt[pt]);for(let Xt=0;Xt<Pt.length;Xt++){let zt=Pt[Xt];K?ht&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,0,0,Wt,Zt,zt.image[pt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,Xt+1,le,Wt,Zt,zt.image[pt])}}}m(D)&&x(i.TEXTURE_CUBE_MAP),yt.__version=ct.version,D.onUpdate&&D.onUpdate(D)}G.__version=D.version}function rt(G,D,Q,it,ct,yt){let vt=s.convert(Q.format,Q.colorSpace),ut=s.convert(Q.type),ft=y(Q.internalFormat,vt,ut,Q.normalized,Q.colorSpace),_t=n.get(D),Ht=n.get(Q);if(Ht.__renderTarget=D,!_t.__hasExternalTextures){let Tt=Math.max(1,D.width>>yt),Mt=Math.max(1,D.height>>yt);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,yt,ft,Tt,Mt,D.depth,0,vt,ut,null):e.texImage2D(ct,yt,ft,Tt,Mt,0,vt,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,G),Te(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,ct,Ht.__webglTexture,0,Jt(D)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,ct,Ht.__webglTexture,yt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(G,D,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,G),D.depthBuffer){let it=D.depthTexture,ct=it&&it.isDepthTexture?it.type:null,yt=M(D.stencilBuffer,ct),vt=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Te(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(D),yt,D.width,D.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(D),yt,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,yt,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,G)}else{let it=D.textures;for(let ct=0;ct<it.length;ct++){let yt=it[ct],vt=s.convert(yt.format,yt.colorSpace),ut=s.convert(yt.type),ft=y(yt.internalFormat,vt,ut,yt.normalized,yt.colorSpace);Te(D)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt(D),ft,D.width,D.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt(D),ft,D.width,D.height):i.renderbufferStorage(i.RENDERBUFFER,ft,D.width,D.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(G,D,Q){let it=D.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,G),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ct=n.get(D.depthTexture);if(ct.__renderTarget=D,(!ct.__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),it){if(ct.__webglInit===void 0&&(ct.__webglInit=!0,D.depthTexture.addEventListener("dispose",A)),ct.__webglTexture===void 0){ct.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,ct.__webglTexture),tt(i.TEXTURE_CUBE_MAP,D.depthTexture);let _t=s.convert(D.depthTexture.format),Ht=s.convert(D.depthTexture.type),Tt;D.depthTexture.format===ei?Tt=i.DEPTH_COMPONENT24:D.depthTexture.format===$i&&(Tt=i.DEPTH24_STENCIL8);for(let Mt=0;Mt<6;Mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,Tt,D.width,D.height,0,_t,Ht,null)}}else N(D.depthTexture,0);let yt=ct.__webglTexture,vt=Jt(D),ut=it?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,ft=D.depthTexture.format===$i?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(D.depthTexture.format===ei)Te(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ut,yt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ut,yt,0);else if(D.depthTexture.format===$i)Te(D)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ft,ut,yt,0,vt):i.framebufferTexture2D(i.FRAMEBUFFER,ft,ut,yt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(G){let D=n.get(G),Q=G.isWebGLCubeRenderTarget===!0;if(D.__boundDepthTexture!==G.depthTexture){let it=G.depthTexture;if(D.__depthDisposeCallback&&D.__depthDisposeCallback(),it){let ct=()=>{delete D.__boundDepthTexture,delete D.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),D.__depthDisposeCallback=ct}D.__boundDepthTexture=it}if(G.depthTexture&&!D.__autoAllocateDepthBuffer)if(Q)for(let it=0;it<6;it++)gt(D.__webglFramebuffer[it],G,it);else{let it=G.texture.mipmaps;it&&it.length>0?gt(D.__webglFramebuffer[0],G,0):gt(D.__webglFramebuffer,G,0)}else if(Q){D.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[it]),D.__webglDepthbuffer[it]===void 0)D.__webglDepthbuffer[it]=i.createRenderbuffer(),lt(D.__webglDepthbuffer[it],G,!1);else{let ct=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}else{let it=G.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,D.__webglFramebuffer),D.__webglDepthbuffer===void 0)D.__webglDepthbuffer=i.createRenderbuffer(),lt(D.__webglDepthbuffer,G,!1);else{let ct=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=D.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,yt),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,yt)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(G,D,Q){let it=n.get(G);D!==void 0&&rt(it.__webglFramebuffer,G,G.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&dt(G)}function bt(G){let D=G.texture,Q=n.get(G),it=n.get(D);G.addEventListener("dispose",_);let ct=G.textures,yt=G.isWebGLCubeRenderTarget===!0,vt=ct.length>1;if(vt||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=D.version,o.memory.textures++),yt){Q.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(D.mipmaps&&D.mipmaps.length>0){Q.__webglFramebuffer[ut]=[];for(let ft=0;ft<D.mipmaps.length;ft++)Q.__webglFramebuffer[ut][ft]=i.createFramebuffer()}else Q.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(D.mipmaps&&D.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ut=0;ut<D.mipmaps.length;ut++)Q.__webglFramebuffer[ut]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(vt)for(let ut=0,ft=ct.length;ut<ft;ut++){let _t=n.get(ct[ut]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(G.samples>0&&Te(G)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ut=0;ut<ct.length;ut++){let ft=ct[ut];Q.__webglColorRenderbuffer[ut]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut]);let _t=s.convert(ft.format,ft.colorSpace),Ht=s.convert(ft.type),Tt=y(ft.internalFormat,_t,Ht,ft.normalized,ft.colorSpace,G.isXRRenderTarget===!0),Mt=Jt(G);i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,Tt,G.width,G.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ut,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ut])}i.bindRenderbuffer(i.RENDERBUFFER,null),G.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(Q.__webglDepthRenderbuffer,G,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(yt){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),tt(i.TEXTURE_CUBE_MAP,D);for(let ut=0;ut<6;ut++)if(D.mipmaps&&D.mipmaps.length>0)for(let ft=0;ft<D.mipmaps.length;ft++)rt(Q.__webglFramebuffer[ut][ft],G,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,ft);else rt(Q.__webglFramebuffer[ut],G,D,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(D)&&x(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let ut=0,ft=ct.length;ut<ft;ut++){let _t=ct[ut],Ht=n.get(_t),Tt=i.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Tt=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,Ht.__webglTexture),tt(Tt,_t),rt(Q.__webglFramebuffer,G,_t,i.COLOR_ATTACHMENT0+ut,Tt,0),m(_t)&&x(Tt)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(ut=G.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ut,it.__webglTexture),tt(ut,D),D.mipmaps&&D.mipmaps.length>0)for(let ft=0;ft<D.mipmaps.length;ft++)rt(Q.__webglFramebuffer[ft],G,D,i.COLOR_ATTACHMENT0,ut,ft);else rt(Q.__webglFramebuffer,G,D,i.COLOR_ATTACHMENT0,ut,0);m(D)&&x(ut),e.unbindTexture()}G.depthBuffer&&dt(G)}function Ut(G){let D=G.textures;for(let Q=0,it=D.length;Q<it;Q++){let ct=D[Q];if(m(ct)){let yt=v(G),vt=n.get(ct).__webglTexture;e.bindTexture(yt,vt),x(yt),e.unbindTexture()}}}let $t=[],Nt=[];function se(G){if(G.samples>0){if(Te(G)===!1){let D=G.textures,Q=G.width,it=G.height,ct=i.COLOR_BUFFER_BIT,yt=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(G),ut=D.length>1;if(ut)for(let _t=0;_t<D.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer);let ft=G.texture.mipmaps;ft&&ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let _t=0;_t<D.length;_t++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),ut){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[_t]);let Ht=n.get(D[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ht,0)}i.blitFramebuffer(0,0,Q,it,0,0,Q,it,ct,i.NEAREST),l===!0&&($t.length=0,Nt.length=0,$t.push(i.COLOR_ATTACHMENT0+_t),G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&($t.push(yt),Nt.push(yt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Nt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$t))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ut)for(let _t=0;_t<D.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,vt.__webglColorRenderbuffer[_t]);let Ht=n.get(D[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,Ht,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.storeMultisampledDepthBuffer===!1&&l){let D=G.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[D])}}}function Jt(G){return Math.min(r.maxSamples,G.samples)}function Te(G){let D=n.get(G);return G.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function $(G){let D=o.render.frame;f.get(G)!==D&&(f.set(G,D),G.update())}function Ee(G,D){let Q=G.colorSpace,it=G.format,ct=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||Q!==$s&&Q!==wi&&(fe.getTransfer(Q)===ve?(it!==Dn||ct!==En)&&Kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",Q)),D}function ge(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(c.width=G.naturalWidth||G.width,c.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(c.width=G.displayWidth,c.height=G.displayHeight):(c.width=G.width,c.height=G.height),c}this.allocateTextureUnit=T,this.resetTextureUnits=O,this.getTextureUnits=C,this.setTextureUnits=L,this.setTexture2D=N,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=B,this.rebindTextures=xt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=Ut,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Te,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function V_(i,t){function e(n,r=wi){let s,o=fe.getTransfer(r);if(n===En)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ju)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ju)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zu)return i.BYTE;if(n===Ku)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===vl)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===Yn)return i.FLOAT;if(n===qn)return i.HALF_FLOAT;if(n===Qu)return i.ALPHA;if(n===th)return i.RGB;if(n===Dn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===eh)return i.RED;if(n===Sl)return i.RED_INTEGER;if(n===Zi)return i.RG;if(n===wl)return i.RG_INTEGER;if(n===Tl)return i.RGBA_INTEGER;if(n===yo||n===vo||n===_o||n===Mo)if(o===ve)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===yo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===yo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===Al||n===Rl||n===Cl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===El)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Al)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Rl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pl||n===Il||n===Ll||n===Fl||n===Dl||n===So||n===Ol)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Pl||n===Il)return o===ve?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ll)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Fl)return s.COMPRESSED_R11_EAC;if(n===Dl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===So)return s.COMPRESSED_RG11_EAC;if(n===Ol)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Nl||n===Ul||n===Bl||n===kl||n===zl||n===Vl||n===Gl||n===Hl||n===Wl||n===Xl||n===Yl||n===ql||n===$l||n===Zl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Nl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ul)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Vl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Yl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ql)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$l)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Zl)return o===ve?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Kl||n===Jl||n===jl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Kl)return o===ve?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Jl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===jl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===tc||n===wo||n===ec)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ql)return s.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var G_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H_=`
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

}`,Rh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ro(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fn({vertexShader:G_,fragmentShader:H_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ct(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ch=class extends ni{constructor(t,e){super();let n=this,r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,d=null,p=null,b=typeof XRWebGLBinding<"u",g=new Rh,m={},x=e.getContextAttributes(),v=null,y=null,M=[],w=[],A=new te,_=null,R=null,S=new Qe;S.viewport=new ke;let E=new Qe;E.viewport=new ke;let I=[S,E],O=new ml,C=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let q=M[X];return q===void 0&&(q=new cs,M[X]=q),q.getTargetRaySpace()},this.getControllerGrip=function(X){let q=M[X];return q===void 0&&(q=new cs,M[X]=q),q.getGripSpace()},this.getHand=function(X){let q=M[X];return q===void 0&&(q=new cs,M[X]=q),q.getHandSpace()};function T(X){let q=w.indexOf(X.inputSource);if(q===-1)return;let Y=M[q];Y!==void 0&&(Y.update(X.inputSource,X.frame,c||o),Y.dispatchEvent({type:X.type,data:X.inputSource}))}function P(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let X=0;X<M.length;X++){let q=w[X];q!==null&&(w[X]=null,M[X].disconnect(q))}C=null,L=null,g.reset();for(let X in m)delete m[X];if(t.setRenderTarget(v),d=null,h=null,u=null,r=null,y=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(_),t.setSize(A.width,A.height,!1),R!==null){let X=R.camera;X.fov=R.fov,X.zoom=R.zoom,X.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&Kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&Kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return u===null&&b&&(u=new XRWebGLBinding(r,e)),u},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(v=t.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),x.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(A),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Y=null,st=null,rt=null;x.depth&&(rt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=x.stencil?$i:ei,st=x.stencil?bs:Xn);let lt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(lt),r.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Ye(h.textureWidth,h.textureHeight,{format:Dn,type:En,depthTexture:new oi(h.textureWidth,h.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let Y={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,Y),r.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Ye(d.framebufferWidth,d.framebufferHeight,{format:Dn,type:En,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ot.setContext(r),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function N(X){for(let q=0;q<X.removed.length;q++){let Y=X.removed[q],st=w.indexOf(Y);st>=0&&(w[st]=null,M[st].disconnect(Y))}for(let q=0;q<X.added.length;q++){let Y=X.added[q],st=w.indexOf(Y);if(st===-1){for(let lt=0;lt<M.length;lt++)if(lt>=w.length){w.push(Y),st=lt;break}else if(w[lt]===null){w[lt]=Y,st=lt;break}if(st===-1)break}let rt=M[st];rt&&rt.connect(Y)}}let F=new W,z=new W;function B(X,q,Y){F.setFromMatrixPosition(q.matrixWorld),z.setFromMatrixPosition(Y.matrixWorld);let st=F.distanceTo(z),rt=q.projectionMatrix.elements,lt=Y.projectionMatrix.elements,gt=rt[14]/(rt[10]-1),dt=rt[14]/(rt[10]+1),xt=(rt[9]+1)/rt[5],bt=(rt[9]-1)/rt[5],Ut=(rt[8]-1)/rt[0],$t=(lt[8]+1)/lt[0],Nt=gt*Ut,se=gt*$t,Jt=st/(-Ut+$t),Te=Jt*-Ut;if(q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Te),X.translateZ(Jt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),rt[10]===-1)X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse);else{let $=gt+Jt,Ee=dt+Jt,ge=Nt-Te,G=se+(st-Te),D=xt*dt/Ee*$,Q=bt*dt/Ee*$;X.projectionMatrix.makePerspective(ge,G,D,Q,$,Ee),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function V(X,q){q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let q=X.near,Y=X.far;g.texture!==null&&(g.depthNear>0&&(q=g.depthNear),g.depthFar>0&&(Y=g.depthFar)),O.near=E.near=S.near=q,O.far=E.far=S.far=Y,(C!==O.near||L!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),C=O.near,L=O.far),O.layers.mask=X.layers.mask|6,S.layers.mask=O.layers.mask&-5,E.layers.mask=O.layers.mask&-3;let st=X.parent,rt=O.cameras;V(O,st);for(let lt=0;lt<rt.length;lt++)V(rt[lt],st);rt.length===2?B(O,S,E):O.projectionMatrix.copy(S.projectionMatrix),R===null&&X.isPerspectiveCamera&&(R={camera:X,fov:X.fov,zoom:X.zoom}),H(X,O,st)};function H(X,q,Y){Y===null?X.matrix.copy(q.matrixWorld):(X.matrix.copy(Y.matrixWorld),X.matrix.invert(),X.matrix.multiply(q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(q.projectionMatrix),X.projectionMatrixInverse.copy(q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Xa*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(X){l=X,h!==null&&(h.fixedFoveation=X),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=X)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)},this.getCameraTexture=function(X){return m[X]};let J=null;function tt(X,q){if(f=q.getViewerPose(c||o),p=q,f!==null){let Y=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let st=!1;Y.length!==O.cameras.length&&(O.cameras.length=0,st=!0);for(let dt=0;dt<Y.length;dt++){let xt=Y[dt],bt=null;if(d!==null)bt=d.getViewport(xt);else{let $t=u.getViewSubImage(h,xt);bt=$t.viewport,dt===0&&(t.setRenderTargetTextures(y,$t.colorTexture,$t.depthStencilTexture),t.setRenderTarget(y))}let Ut=I[dt];Ut===void 0&&(Ut=new Qe,Ut.layers.enable(dt),Ut.viewport=new ke,I[dt]=Ut),Ut.matrix.fromArray(xt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(xt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(bt.x,bt.y,bt.width,bt.height),dt===0&&(O.matrix.copy(Ut.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),st===!0&&O.cameras.push(Ut)}let rt=r.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){u=n.getBinding();let dt=u.getDepthInformation(Y[0]);dt&&dt.isValid&&dt.texture&&g.init(dt,r.renderState)}if(rt&&rt.includes("camera-access")&&b){t.state.unbindTexture(),u=n.getBinding();for(let dt=0;dt<Y.length;dt++){let xt=Y[dt].camera;if(xt){let bt=m[xt];bt||(bt=new ro,m[xt]=bt);let Ut=u.getCameraImage(xt);bt.sourceTexture=Ut}}}}for(let Y=0;Y<M.length;Y++){let st=w[Y],rt=M[Y];st!==null&&rt!==void 0&&rt.update(st,q,c||o)}J&&J(X,q),q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:q}),p=null}let ot=new kp;ot.setAnimationLoop(tt),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}},W_=new we,Xp=new ne;Xp.set(-1,0,0,0,1,0,0,0,1);function X_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,oh(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,x,v,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(g,m):m.isMeshLambertMaterial?(s(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(g,m),u(g,m)):m.isMeshPhongMaterial?(s(g,m),f(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(g,m),h(g,m),m.isMeshPhysicalMaterial&&d(g,m,y)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),b(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(o(g,m),m.isLineDashedMaterial&&a(g,m)):m.isPointsMaterial?l(g,m,x,v):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===sn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===sn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let x=t.get(m),v=x.envMap,y=x.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(W_.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Xp),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function o(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function a(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,x,v){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*x,g.scale.value=v*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function u(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,x){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===sn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function b(g,m){let x=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y_(i,t,e,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function c(y,M){let w=r[y.id];w===void 0&&(g(y),w=f(y),r[y.id]=w,y.addEventListener("dispose",x));let A=M.program;n.updateUBOMapping(y,A);let _=t.render.frame;s[y.id]!==_&&(h(y),s[y.id]=_)}function f(y){let M=u();y.__bindingPointIndex=M;let w=i.createBuffer(),A=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,A,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return jt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){let M=r[y.id],w=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let _=0,R=w.length;_<R;_++){let S=w[_];if(Array.isArray(S))for(let E=0,I=S.length;E<I;E++)d(S[E],_,E,A);else d(S,_,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,M,w,A){if(b(y,M,w,A)===!0){let _=y.__offset,R=y.value;if(Array.isArray(R)){let S=0;for(let E=0;E<R.length;E++){let I=R[E],O=m(I);p(I,y.__data,S),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(S+=O.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(R,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function p(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function b(y,M,w,A){let _=y.value,R=M+"_"+w;if(A[R]===void 0)return typeof _=="number"||typeof _=="boolean"?A[R]=_:ArrayBuffer.isView(_)?A[R]=_.slice():A[R]=_.clone(),!0;{let S=A[R];if(typeof _=="number"||typeof _=="boolean"){if(S!==_)return A[R]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(S.equals(_)===!1)return S.copy(_),!0}}return!1}function g(y){let M=y.uniforms,w=0,A=16;for(let R=0,S=M.length;R<S;R++){let E=Array.isArray(M[R])?M[R]:[M[R]];for(let I=0,O=E.length;I<O;I++){let C=E[I],L=Array.isArray(C.value)?C.value:[C.value];for(let T=0,P=L.length;T<P;T++){let N=L[T],F=m(N),z=w%A,B=z%F.boundary,V=z+B;w+=B,V!==0&&A-V<F.storage&&(w+=A-V),C.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=w,w+=F.storage}}}let _=w%A;return _>0&&(w+=A-_),y.__size=w,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Kt("WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){let M=y.target;M.removeEventListener("dispose",x);let w=o.indexOf(M.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function v(){for(let y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:l,update:c,dispose:v}}var q_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),li=null;function $_(){return li===null&&(li=new Ka(q_,16,16,Zi,qn),li.name="DFG_LUT",li.minFilter=Xe,li.magFilter=Xe,li.wrapS=Mn,li.wrapT=Mn,li.generateMipmaps=!1,li.needsUpdate=!0),li}var Sr=class{constructor(t={}){let{canvas:e=sp(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:d=En}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let b=d,g=new Set([Tl,wl,Sl]),m=new Set([En,Xn,gs,bs,_l,Ml]),x=new Uint32Array(4),v=new Int32Array(4),y=new W,M=null,w=null,A=[],_=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,E=!1,I=null,O=null,C=null,L=null;this._outputColorSpace=Ue;let T=0,P=0,N=null,F=-1,z=null,B=new ke,V=new ke,H=null,J=new j(0),tt=0,ot=e.width,X=e.height,q=1,Y=null,st=null,rt=new ke(0,0,ot,X),lt=new ke(0,0,ot,X),gt=!1,dt=new no,xt=!1,bt=!1,Ut=new we,$t=new W,Nt=new ke,se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function Te(){return N===null?q:1}let $=n;function Ee(k,Z){return e.getContext(k,Z)}let ge,G,D,Q,it,ct,yt,vt,ut,ft,_t,Ht,Tt,Mt,Wt,Zt,le,K,St,ht,wt,Pt,pt;try{let k={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ce,!1),e.addEventListener("webglcontextrestored",xe,!1),e.addEventListener("webglcontextcreationerror",Un,!1),$===null){let Z="webgl2";if($=Ee(Z,k),$===null)throw Ee(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(k){throw e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),jt("WebGLRenderer: "+k.message),k}function Xt(){ge=new e1($),ge.init(),wt=new V_($,ge),G=new Xv($,ge,t,wt),D=new k_($,ge),G.reversedDepthBuffer&&h&&D.buffers.depth.setReversed(!0),O=$.createFramebuffer(),C=$.createFramebuffer(),L=$.createFramebuffer(),Q=new r1($),it=new T_,ct=new z_($,ge,D,it,G,wt,Q),yt=new t1(S),vt=new ox($),Pt=new Hv($,vt),ut=new n1($,vt,Q,Pt),ft=new o1($,ut,vt,Pt,Q),K=new s1($,G,ct),Wt=new Yv(it),_t=new w_(S,yt,ge,G,Pt,Wt),Ht=new X_(S,it),Tt=new A_,Mt=new F_(ge),le=new Gv(S,yt,D,ft,p,l),Zt=new B_(S,ft,G),pt=new Y_($,Q,G,D),St=new Wv($,ge,Q),ht=new i1($,ge,Q),Q.programs=_t.programs,S.capabilities=G,S.extensions=ge,S.properties=it,S.renderLists=Tt,S.shadowMap=Zt,S.state=D,S.info=Q}b!==En&&(R=new l1(b,e.width,e.height,a,r,s));let zt=new Ch(S,$);this.xr=zt,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){let k=ge.get("WEBGL_lose_context");k&&k.loseContext()},this.forceContextRestore=function(){let k=ge.get("WEBGL_lose_context");k&&k.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(k){k!==void 0&&(q=k,this.setSize(ot,X,!1))},this.getSize=function(k){return k.set(ot,X)},this.setSize=function(k,Z,at=!0){if(zt.isPresenting){Kt("WebGLRenderer: Can't change size while VR device is presenting.");return}ot=k,X=Z,e.width=Math.floor(k*q),e.height=Math.floor(Z*q),at===!0&&(e.style.width=k+"px",e.style.height=Z+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,k,Z)},this.getDrawingBufferSize=function(k){return k.set(ot*q,X*q).floor()},this.setDrawingBufferSize=function(k,Z,at){ot=k,X=Z,q=at,e.width=Math.floor(k*at),e.height=Math.floor(Z*at),this.setViewport(0,0,k,Z)},this.setEffects=function(k){if(b===En){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(k){for(let Z=0;Z<k.length;Z++)if(k[Z].isOutputPass===!0){Kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(k||[])},this.getCurrentViewport=function(k){return k.copy(B)},this.getViewport=function(k){return k.copy(rt)},this.setViewport=function(k,Z,at,et){k.isVector4?rt.set(k.x,k.y,k.z,k.w):rt.set(k,Z,at,et),D.viewport(B.copy(rt).multiplyScalar(q).round())},this.getScissor=function(k){return k.copy(lt)},this.setScissor=function(k,Z,at,et){k.isVector4?lt.set(k.x,k.y,k.z,k.w):lt.set(k,Z,at,et),D.scissor(V.copy(lt).multiplyScalar(q).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(k){D.setScissorTest(gt=k)},this.setOpaqueSort=function(k){Y=k},this.setTransparentSort=function(k){st=k},this.getClearColor=function(k){return k.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(k=!0,Z=!0,at=!0){let et=0;if(k){let nt=!1;if(N!==null){let Rt=N.texture.format;nt=g.has(Rt)}if(nt){let Rt=N.texture.type,Lt=m.has(Rt),At=le.getClearColor(),Bt=le.getClearAlpha(),Vt=At.r,ce=At.g,he=At.b;Lt?(x[0]=Vt,x[1]=ce,x[2]=he,x[3]=Bt,$.clearBufferuiv($.COLOR,0,x)):(v[0]=Vt,v[1]=ce,v[2]=he,v[3]=Bt,$.clearBufferiv($.COLOR,0,v))}else et|=$.COLOR_BUFFER_BIT}Z&&(et|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(et|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),et!==0&&$.clear(et)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(k){k.setRenderer(this),I=k},this.dispose=function(){e.removeEventListener("webglcontextlost",Ce,!1),e.removeEventListener("webglcontextrestored",xe,!1),e.removeEventListener("webglcontextcreationerror",Un,!1),le.dispose(),Tt.dispose(),Mt.dispose(),it.dispose(),yt.dispose(),ft.dispose(),Pt.dispose(),pt.dispose(),_t.dispose(),zt.dispose(),zt.removeEventListener("sessionstart",Bf),zt.removeEventListener("sessionend",kf),lr.stop()};function Ce(k){k.preventDefault(),Js("WebGLRenderer: Context Lost."),E=!0}function xe(){Js("WebGLRenderer: Context Restored."),E=!1;let k=Q.autoReset,Z=Zt.enabled,at=Zt.autoUpdate,et=Zt.needsUpdate,nt=Zt.type;Xt(),Q.autoReset=k,Zt.enabled=Z,Zt.autoUpdate=at,Zt.needsUpdate=et,Zt.type=nt}function Un(k){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",k.statusMessage)}function Jn(k){let Z=k.target;Z.removeEventListener("dispose",Jn),tb(Z)}function tb(k){eb(k),it.remove(k)}function eb(k){let Z=it.get(k).programs;Z!==void 0&&(Z.forEach(function(at){_t.releaseProgram(at)}),k.isShaderMaterial&&_t.releaseShaderCache(k))}this.renderBufferDirect=function(k,Z,at,et,nt,Rt){Z===null&&(Z=se);let Lt=nt.isMesh&&nt.matrixWorld.determinantAffine()<0,At=rb(k,Z,at,et,nt);D.setMaterial(et,Lt);let Bt=at.index,Vt=1;if(et.wireframe===!0){if(Bt=ut.getWireframeAttribute(at),Bt===void 0)return;Vt=2}let ce=at.drawRange,he=at.attributes.position,kt=ce.start*Vt,ye=(ce.start+ce.count)*Vt;Rt!==null&&(kt=Math.max(kt,Rt.start*Vt),ye=Math.min(ye,(Rt.start+Rt.count)*Vt)),Bt!==null?(kt=Math.max(kt,0),ye=Math.min(ye,Bt.count)):he!=null&&(kt=Math.max(kt,0),ye=Math.min(ye,he.count));let He=ye-kt;if(He<0||He===1/0)return;Pt.setup(nt,et,At,at,Bt);let Le,Ae=St;if(Bt!==null&&(Le=vt.get(Bt),Ae=ht,Ae.setIndex(Le)),nt.isMesh)et.wireframe===!0?(D.setLineWidth(et.wireframeLinewidth*Te()),Ae.setMode($.LINES)):Ae.setMode($.TRIANGLES);else if(nt.isLine){let ln=et.linewidth;ln===void 0&&(ln=1),D.setLineWidth(ln*Te()),nt.isLineSegments?Ae.setMode($.LINES):nt.isLineLoop?Ae.setMode($.LINE_LOOP):Ae.setMode($.LINE_STRIP)}else nt.isPoints?Ae.setMode($.POINTS):nt.isSprite&&Ae.setMode($.TRIANGLES);if(nt.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))Ae.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else{let ln=nt._multiDrawStarts,It=nt._multiDrawCounts,mn=nt._multiDrawCount,be=Bt?vt.get(Bt).bytesPerElement:1,Pn=it.get(et).currentProgram.getUniforms();for(let jn=0;jn<mn;jn++)Pn.setValue($,"_gl_DrawID",jn),Ae.render(ln[jn]/be,It[jn])}else if(nt.isInstancedMesh)Ae.renderInstances(kt,He,nt.count);else if(at.isInstancedBufferGeometry){let ln=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,It=Math.min(at.instanceCount,ln);Ae.renderInstances(kt,He,It)}else Ae.render(kt,He)};function Uf(k,Z,at,et){I!==null&&k.isNodeMaterial&&I.setObject(et,k),xt===!0&&Wt.setState(k,at,!1),k.transparent===!0&&k.side===oe&&k.forceSinglePass===!1?(k.side=sn,k.needsUpdate=!0,ra(k,Z,et),k.side=ai,k.needsUpdate=!0,ra(k,Z,et),k.side=oe):ra(k,Z,et)}this.compile=function(k,Z,at=null){at===null&&(at=k),I!==null&&I.renderStart(k,Z,at),w=Mt.get(at),w.init(Z),_.push(w),at.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),k!==at&&k.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Z.layers)&&(w.pushLight(nt),nt.castShadow&&w.pushShadow(nt))}),w.setupLights(),I!==null&&I.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,xt=Wt.init(this.clippingPlanes,bt),xt===!0&&Wt.setGlobalState(this.clippingPlanes,Z),I!==null&&Zt.render(w.state.shadowsArray,at,Z);let et=new Set;return k.traverse(function(nt){if(!(nt.isMesh||nt.isPoints||nt.isLine||nt.isSprite))return;let Rt=nt.material;if(Rt)if(Array.isArray(Rt))for(let Lt=0;Lt<Rt.length;Lt++){let At=Rt[Lt];Uf(At,at,Z,nt),et.add(At)}else Uf(Rt,at,Z,nt),et.add(Rt)}),w=_.pop(),I!==null&&I.renderEnd(),et},this.compileAsync=function(k,Z,at=null){let et=this.compile(k,Z,at);return new Promise(nt=>{function Rt(){if(et.forEach(function(Lt){let Bt=it.get(Lt).currentProgram;(Bt===void 0||Bt.isReady())&&et.delete(Lt)}),et.size===0){nt(k);return}setTimeout(Rt,10)}ge.get("KHR_parallel_shader_compile")!==null?Rt():setTimeout(Rt,10)})};let Qc=null;function nb(k){Qc&&Qc(k)}function Bf(){lr.stop()}function kf(){lr.start()}let lr=new kp;lr.setAnimationLoop(nb),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(k){Qc=k,zt.setAnimationLoop(k),k===null?lr.stop():lr.start()},zt.addEventListener("sessionstart",Bf),zt.addEventListener("sessionend",kf),this.render=function(k,Z){if(Z!==void 0&&Z.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;I!==null&&I.renderStart(k,Z);let at=zt.enabled===!0&&zt.isPresenting===!0,et=R!==null&&(N===null||at)&&R.begin(S,N);if(k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),zt.enabled===!0&&zt.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(zt.cameraAutoUpdate===!0&&zt.updateCamera(Z),Z=zt.getCamera()),k.isScene===!0&&k.onBeforeRender(S,k,Z,N),w=Mt.get(k,_.length),w.init(Z),w.state.textureUnits=ct.getTextureUnits(),_.push(w),Ut.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),dt.setFromProjectionMatrix(Ut,Gn,Z.reversedDepth),bt=this.localClippingEnabled,xt=Wt.init(this.clippingPlanes,bt),M=Tt.get(k,A.length),M.init(),A.push(M),zt.enabled===!0&&zt.isPresenting===!0){let Lt=S.xr.getDepthSensingMesh();Lt!==null&&tu(Lt,Z,-1/0,S.sortObjects)}tu(k,Z,0,S.sortObjects),M.finish(),I!==null&&I.updateLights(w.state.lightsArray),S.sortObjects===!0&&M.sort(Y,st),Jt=zt.enabled===!1||zt.isPresenting===!1||zt.hasDepthSensing()===!1,Jt&&le.addToRenderList(M,k),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&Wt.beginShadows();let nt=w.state.shadowsArray;if(Zt.render(nt,k,Z),xt===!0&&Wt.endShadows(),(et&&R.hasRenderPass())===!1){let Lt=M.opaque,At=M.transmissive;if(w.setupLights(),Z.isArrayCamera){let Bt=Z.cameras;if(At.length>0)for(let Vt=0,ce=Bt.length;Vt<ce;Vt++){let he=Bt[Vt];Vf(Lt,At,k,he)}Jt&&le.render(k);for(let Vt=0,ce=Bt.length;Vt<ce;Vt++){let he=Bt[Vt];zf(M,k,he,he.viewport)}}else At.length>0&&Vf(Lt,At,k,Z),Jt&&le.render(k),zf(M,k,Z)}N!==null&&P===0&&(ct.updateMultisampleRenderTarget(N),ct.updateRenderTargetMipmap(N)),et&&R.end(S),k.isScene===!0&&k.onAfterRender(S,k,Z),Pt.resetDefaultState(),F=-1,z=null,_.pop(),_.length>0?(w=_[_.length-1],ct.setTextureUnits(w.state.textureUnits),xt===!0&&Wt.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,I!==null&&I.renderEnd()};function tu(k,Z,at,et){if(k.visible===!1)return;if(k.layers.test(Z.layers)){if(k.isGroup)at=k.renderOrder;else if(k.isLOD)k.autoUpdate===!0&&k.update(Z);else if(k.isLightProbeGrid)w.pushLightProbeGrid(k);else if(k.isLight)w.pushLight(k),k.castShadow&&w.pushShadow(k);else if(k.isSprite){if(!k.frustumCulled||k.intersectsFrustum(dt)){et&&Nt.setFromMatrixPosition(k.matrixWorld).applyMatrix4(Ut);let Lt=ft.update(k),At=k.material;At.visible&&M.push(k,Lt,At,at,Nt.z,null,Z)}}else if((k.isMesh||k.isLine||k.isPoints)&&(!k.frustumCulled||k.intersectsFrustum(dt))){let Lt=ft.update(k),At=k.material;if(et&&(k.boundingSphere!==void 0?(k.boundingSphere===null&&k.computeBoundingSphere(),Nt.copy(k.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Nt.copy(Lt.boundingSphere.center)),Nt.applyMatrix4(k.matrixWorld).applyMatrix4(Ut)),Array.isArray(At)){let Bt=Lt.groups;for(let Vt=0,ce=Bt.length;Vt<ce;Vt++){let he=Bt[Vt],kt=At[he.materialIndex];kt&&kt.visible&&M.push(k,Lt,kt,at,Nt.z,he,Z)}}else At.visible&&M.push(k,Lt,At,at,Nt.z,null,Z)}}let Rt=k.children;for(let Lt=0,At=Rt.length;Lt<At;Lt++)tu(Rt[Lt],Z,at,et)}function zf(k,Z,at,et){let{opaque:nt,transmissive:Rt,transparent:Lt}=k;w.setupLightsView(at),xt===!0&&Wt.setGlobalState(S.clippingPlanes,at),et&&D.viewport(B.copy(et)),nt.length>0&&ia(nt,Z,at),Rt.length>0&&ia(Rt,Z,at),Lt.length>0&&ia(Lt,Z,at),D.buffers.depth.setTest(!0),D.buffers.depth.setMask(!0),D.buffers.color.setMask(!0),D.setPolygonOffset(!1)}function Vf(k,Z,at,et){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[et.id]===void 0){let kt=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[et.id]=new Ye(1,1,{generateMipmaps:!0,type:kt?qn:En,minFilter:qi,samples:Math.max(4,G.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:fe.workingColorSpace})}let Rt=w.state.transmissionRenderTarget[et.id],Lt=et.viewport||B;Rt.setSize(Lt.z*S.transmissionResolutionScale,Lt.w*S.transmissionResolutionScale);let At=S.getRenderTarget(),Bt=S.getActiveCubeFace(),Vt=S.getActiveMipmapLevel();S.setRenderTarget(Rt),S.getClearColor(J),tt=S.getClearAlpha(),tt<1&&S.setClearColor(16777215,.5),S.clear(),Jt&&le.render(at);let ce=S.toneMapping;S.toneMapping=Wn;let he=et.viewport;if(et.viewport!==void 0&&(et.viewport=void 0),w.setupLightsView(et),xt===!0&&Wt.setGlobalState(S.clippingPlanes,et),ia(k,at,et),ct.updateMultisampleRenderTarget(Rt),ct.updateRenderTargetMipmap(Rt),ge.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let ye=0,He=Z.length;ye<He;ye++){let Le=Z[ye],{object:Ae,geometry:ln,material:It,group:mn}=Le;if(It.side===oe&&Ae.layers.test(et.layers)){let be=It.side;It.side=sn,It.needsUpdate=!0,Gf(Ae,at,et,ln,It,mn),It.side=be,It.needsUpdate=!0,kt=!0}}kt===!0&&(ct.updateMultisampleRenderTarget(Rt),ct.updateRenderTargetMipmap(Rt))}S.setRenderTarget(At,Bt,Vt),S.setClearColor(J,tt),he!==void 0&&(et.viewport=he),S.toneMapping=ce}function ia(k,Z,at){let et=Z.isScene===!0?Z.overrideMaterial:null;for(let nt=0,Rt=k.length;nt<Rt;nt++){let Lt=k[nt],{object:At,geometry:Bt,group:Vt}=Lt,ce=Lt.material;ce.allowOverride===!0&&et!==null&&(ce=et),At.layers.test(at.layers)&&Gf(At,Z,at,Bt,ce,Vt)}}function Gf(k,Z,at,et,nt,Rt){I!==null&&nt.isNodeMaterial&&I.setObject(k,nt),k.onBeforeRender(S,Z,at,et,nt,Rt),k.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,k.matrixWorld),k.normalMatrix.getNormalMatrix(k.modelViewMatrix),nt.onBeforeRender(S,Z,at,et,k,Rt),nt.transparent===!0&&nt.side===oe&&nt.forceSinglePass===!1?(nt.side=sn,nt.needsUpdate=!0,S.renderBufferDirect(at,Z,et,nt,k,Rt),nt.side=ai,nt.needsUpdate=!0,S.renderBufferDirect(at,Z,et,nt,k,Rt),nt.side=oe):S.renderBufferDirect(at,Z,et,nt,k,Rt),k.onAfterRender(S,Z,at,et,nt,Rt)}function ra(k,Z,at){Z.isScene!==!0&&(Z=se);let et=it.get(k),nt=w.state.lights,Rt=w.state.shadowsArray,Lt=nt.state.version,At=_t.getParameters(k,nt.state,Rt,Z,at,w.state.lightProbeGridArray),Bt=_t.getProgramCacheKey(At),Vt=et.programs;et.environment=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?Z.environment:null,et.fog=Z.fog;let ce=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap;et.envMap=yt.get(k.envMap||et.environment,ce),et.envMapRotation=et.environment!==null&&k.envMap===null?Z.environmentRotation:k.envMapRotation,Vt===void 0&&(k.addEventListener("dispose",Jn),Vt=new Map,et.programs=Vt);let he=Vt.get(Bt);if(he!==void 0){if(et.currentProgram===he&&et.lightsStateVersion===Lt)return Wf(k,At),he}else At.uniforms=_t.getUniforms(k),I!==null&&k.isNodeMaterial&&I.build(k,at,At),k.onBeforeCompile(At,S),he=_t.acquireProgram(At,Bt),Vt.set(Bt,he),et.uniforms=At.uniforms;let kt=et.uniforms;return(!k.isShaderMaterial&&!k.isRawShaderMaterial||k.clipping===!0)&&(kt.clippingPlanes=Wt.uniform),Wf(k,At),et.needsLights=ob(k),et.lightsStateVersion=Lt,et.needsLights&&(kt.ambientLightColor.value=nt.state.ambient,kt.lightProbe.value=nt.state.probe,kt.sunLights.value=nt.state.sun,kt.sunLightShadows.value=nt.state.sunShadow,kt.directionalLights.value=nt.state.directional,kt.directionalLightShadows.value=nt.state.directionalShadow,kt.spotLights.value=nt.state.spot,kt.spotLightShadows.value=nt.state.spotShadow,kt.rectAreaLights.value=nt.state.rectArea,kt.ltc_1.value=nt.state.rectAreaLTC1,kt.ltc_2.value=nt.state.rectAreaLTC2,kt.pointLights.value=nt.state.point,kt.pointLightShadows.value=nt.state.pointShadow,kt.hemisphereLights.value=nt.state.hemi,kt.sunShadowMatrix.value=nt.state.sunShadowMatrix,kt.sunShadowCascade.value=nt.state.sunShadowCascade,kt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,kt.spotLightMatrix.value=nt.state.spotLightMatrix,kt.spotLightMap.value=nt.state.spotLightMap,kt.pointShadowMatrix.value=nt.state.pointShadowMatrix),et.lightProbeGrid=w.state.lightProbeGridArray.length>0,et.currentProgram=he,et.uniformsList=null,he}function Hf(k){if(k.uniformsList===null){let Z=k.currentProgram.getUniforms();k.uniformsList=vs.seqWithValue(Z.seq,k.uniforms)}return k.uniformsList}function Wf(k,Z){let at=it.get(k);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function ib(k,Z){if(k.length===0)return null;if(k.length===1)return k[0].texture!==null?k[0]:null;y.setFromMatrixPosition(Z.matrixWorld);for(let at=0,et=k.length;at<et;at++){let nt=k[at];if(nt.texture!==null&&nt.boundingBox.containsPoint(y))return nt}return null}function rb(k,Z,at,et,nt){Z.isScene!==!0&&(Z=se),ct.resetTextureUnits();let Rt=Z.fog,Lt=et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial?Z.environment:null,At=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:fe.workingColorSpace,Bt=et.isMeshStandardMaterial||et.isMeshLambertMaterial&&!et.envMap||et.isMeshPhongMaterial&&!et.envMap,Vt=yt.get(et.envMap||Lt,Bt),ce=et.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,he=!!at.attributes.tangent&&(!!et.normalMap||et.anisotropy>0),kt=!!at.morphAttributes.position,ye=!!at.morphAttributes.normal,He=!!at.morphAttributes.color,Le=Wn;et.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Le=S.toneMapping);let Ae=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ln=Ae!==void 0?Ae.length:0,It=it.get(et),mn=w.state.lights;if(xt===!0&&(bt===!0||k!==z)){let Pe=k===z&&et.id===F;Wt.setState(et,k,Pe)}let be=!1;et.version===It.__version?(It.needsLights&&It.lightsStateVersion!==mn.state.version||It.outputColorSpace!==At||nt.isBatchedMesh&&It.batching===!1||!nt.isBatchedMesh&&It.batching===!0||nt.isBatchedMesh&&It.batchingColor===!0&&nt._colorsTexture===null||nt.isBatchedMesh&&It.batchingColor===!1&&nt._colorsTexture!==null||nt.isInstancedMesh&&It.instancing===!1||!nt.isInstancedMesh&&It.instancing===!0||nt.isSkinnedMesh&&It.skinning===!1||!nt.isSkinnedMesh&&It.skinning===!0||nt.isInstancedMesh&&It.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&It.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&It.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&It.instancingMorph===!1&&nt.morphTexture!==null||It.envMap!==Vt||et.fog===!0&&It.fog!==Rt||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Wt.numPlanes||It.numIntersection!==Wt.numIntersection)||It.vertexAlphas!==ce||It.vertexTangents!==he||It.morphTargets!==kt||It.morphNormals!==ye||It.morphColors!==He||It.toneMapping!==Le||It.morphTargetsCount!==ln||!!It.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(be=!0):(be=!0,It.__version=et.version);let Pn=It.currentProgram;be===!0&&(Pn=ra(et,Z,nt),I&&et.isNodeMaterial&&I.onUpdateProgram(et,Pn,It));let jn=!1,Ii=!1,Ur=!1,Me=Pn.getUniforms(),Ve=It.uniforms;if(D.useProgram(Pn.program)&&(jn=!0,Ii=!0,Ur=!0),et.id!==F&&(F=et.id,Ii=!0),It.needsLights){let Pe=ib(w.state.lightProbeGridArray,nt);It.lightProbeGrid!==Pe&&(It.lightProbeGrid=Pe,Ii=!0)}if(jn||z!==k){D.buffers.depth.getReversed()&&k.reversedDepth!==!0&&(k._reversedDepth=!0,k.updateProjectionMatrix()),Me.setValue($,"projectionMatrix",k.projectionMatrix),Me.setValue($,"viewMatrix",k.matrixWorldInverse);let Fi=Me.map.cameraPosition;Fi!==void 0&&Fi.setValue($,$t.setFromMatrixPosition(k.matrixWorld)),G.logarithmicDepthBuffer&&Me.setValue($,"logDepthBufFC",2/(Math.log(k.far+1)/Math.LN2)),(et.isMeshPhongMaterial||et.isMeshToonMaterial||et.isMeshLambertMaterial||et.isMeshBasicMaterial||et.isMeshStandardMaterial||et.isShaderMaterial)&&Me.setValue($,"isOrthographic",k.isOrthographicCamera===!0),z!==k&&(z=k,Ii=!0,Ur=!0)}if(It.needsLights&&(mn.state.sunShadowMap.length>0&&Me.setValue($,"sunShadowMap",mn.state.sunShadowMap,ct),mn.state.directionalShadowMap.length>0&&Me.setValue($,"directionalShadowMap",mn.state.directionalShadowMap,ct),mn.state.spotShadowMap.length>0&&Me.setValue($,"spotShadowMap",mn.state.spotShadowMap,ct),mn.state.pointShadowMap.length>0&&Me.setValue($,"pointShadowMap",mn.state.pointShadowMap,ct)),nt.isSkinnedMesh){Me.setOptional($,nt,"bindMatrix"),Me.setOptional($,nt,"bindMatrixInverse");let Pe=nt.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),Me.setValue($,"boneTexture",Pe.boneTexture,ct))}nt.isBatchedMesh&&(Me.setOptional($,nt,"batchingTexture"),Me.setValue($,"batchingTexture",nt._matricesTexture,ct),Me.setOptional($,nt,"batchingIdTexture"),Me.setValue($,"batchingIdTexture",nt._indirectTexture,ct),Me.setOptional($,nt,"batchingColorTexture"),nt._colorsTexture!==null&&Me.setValue($,"batchingColorTexture",nt._colorsTexture,ct));let Li=at.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&K.update(nt,at,Pn),(Ii||It.receiveShadow!==nt.receiveShadow)&&(It.receiveShadow=nt.receiveShadow,Me.setValue($,"receiveShadow",nt.receiveShadow)),(et.isMeshStandardMaterial||et.isMeshLambertMaterial||et.isMeshPhongMaterial)&&et.envMap===null&&Z.environment!==null&&(Ve.envMapIntensity.value=Z.environmentIntensity),Ve.dfgLUT!==void 0&&(Ve.dfgLUT.value=$_()),Ii){if(Me.setValue($,"toneMappingExposure",S.toneMappingExposure),It.needsLights&&sb(Ve,Ur),Rt&&et.fog===!0&&Ht.refreshFogUniforms(Ve,Rt),Ht.refreshMaterialUniforms(Ve,et,q,X,w.state.transmissionRenderTarget[k.id]),It.needsLights&&It.lightProbeGrid){let Pe=It.lightProbeGrid;Ve.probesSH.value=Pe.texture,Ve.probesMin.value.copy(Pe.boundingBox.min),Ve.probesMax.value.copy(Pe.boundingBox.max),Ve.probesResolution.value.copy(Pe.resolution)}vs.upload($,Hf(It),Ve,ct)}if(et.isShaderMaterial&&et.uniformsNeedUpdate===!0&&(vs.upload($,Hf(It),Ve,ct),et.uniformsNeedUpdate=!1),et.isSpriteMaterial&&Me.setValue($,"center",nt.center),Me.setValue($,"modelViewMatrix",nt.modelViewMatrix),Me.setValue($,"normalMatrix",nt.normalMatrix),Me.setValue($,"modelMatrix",nt.matrixWorld),et.uniformsGroups!==void 0){let Pe=et.uniformsGroups;for(let Fi=0,Br=Pe.length;Fi<Br;Fi++){let Yf=Pe[Fi];pt.update(Yf,Pn),pt.bind(Yf,Pn)}}return Pn}function sb(k,Z){k.ambientLightColor.needsUpdate=Z,k.lightProbe.needsUpdate=Z,k.sunLights.needsUpdate=Z,k.sunLightShadows.needsUpdate=Z,k.directionalLights.needsUpdate=Z,k.directionalLightShadows.needsUpdate=Z,k.pointLights.needsUpdate=Z,k.pointLightShadows.needsUpdate=Z,k.spotLights.needsUpdate=Z,k.spotLightShadows.needsUpdate=Z,k.rectAreaLights.needsUpdate=Z,k.hemisphereLights.needsUpdate=Z}function ob(k){return k.isMeshLambertMaterial||k.isMeshToonMaterial||k.isMeshPhongMaterial||k.isMeshStandardMaterial||k.isShadowMaterial||k.isShaderMaterial&&k.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(k,Z,at){let et=it.get(k);et.__autoAllocateDepthBuffer=k.resolveDepthBuffer===!1,et.__autoAllocateDepthBuffer===!1&&(et.__useRenderToTexture=!1),it.get(k.texture).__webglTexture=Z,it.get(k.depthTexture).__webglTexture=et.__autoAllocateDepthBuffer?void 0:at,et.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(k,Z){let at=it.get(k);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(k,Z=0,at=0){N=k,T=Z,P=at;let et=null,nt=!1,Rt=!1;if(k){let At=it.get(k);if(At.__useDefaultFramebuffer!==void 0){D.bindFramebuffer($.FRAMEBUFFER,At.__webglFramebuffer),B.copy(k.viewport),V.copy(k.scissor),H=k.scissorTest,D.viewport(B),D.scissor(V),D.setScissorTest(H),F=-1;return}else if(At.__webglFramebuffer===void 0)ct.setupRenderTarget(k);else if(At.__hasExternalTextures)ct.rebindTextures(k,it.get(k.texture).__webglTexture,it.get(k.depthTexture).__webglTexture);else if(k.depthBuffer){let ce=k.depthTexture;if(At.__boundDepthTexture!==ce){if(ce!==null&&it.has(ce)&&(k.width!==ce.image.width||k.height!==ce.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ct.setupDepthRenderbuffer(k)}}let Bt=k.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Rt=!0);let Vt=it.get(k).__webglFramebuffer;k.isWebGLCubeRenderTarget?(Array.isArray(Vt[Z])?et=Vt[Z][at]:et=Vt[Z],nt=!0):k.samples>0&&ct.useMultisampledRTT(k)===!1?et=it.get(k).__webglMultisampledFramebuffer:Array.isArray(Vt)?et=Vt[at]:et=Vt,B.copy(k.viewport),V.copy(k.scissor),H=k.scissorTest}else B.copy(rt).multiplyScalar(q).floor(),V.copy(lt).multiplyScalar(q).floor(),H=gt;if(at!==0&&(et=O),D.bindFramebuffer($.FRAMEBUFFER,et)&&D.drawBuffers(k,et),D.viewport(B),D.scissor(V),D.setScissorTest(H),nt){let At=it.get(k.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+Z,At.__webglTexture,at)}else if(Rt){let At=Z;for(let Bt=0;Bt<k.textures.length;Bt++){let Vt=it.get(k.textures[Bt]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+Bt,Vt.__webglTexture,at,At)}}else if(k!==null&&at!==0){let At=it.get(k.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,At.__webglTexture,at)}F=-1};function Xf(k){let Z=it.get(k);return(Z.__readFormat!==k.format||Z.__readType!==k.type)&&(Z.__readFormat=k.format,Z.__readType=k.type,Z.__formatReadable=G.textureFormatReadable(k.format),Z.__typeReadable=G.textureTypeReadable(k.type)),Z}this.readRenderTargetPixels=function(k,Z,at,et,nt,Rt,Lt,At=0){if(!(k&&k.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=it.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt){D.bindFramebuffer($.FRAMEBUFFER,Bt);try{let Vt=k.textures[At],ce=Vt.format,he=Vt.type;k.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+At);let kt=Xf(Vt);if(kt.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=k.width-et&&at>=0&&at<=k.height-nt&&$.readPixels(Z,at,et,nt,wt.convert(ce),wt.convert(he),Rt)}finally{let Vt=N!==null?it.get(N).__webglFramebuffer:null;D.bindFramebuffer($.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(k,Z,at,et,nt,Rt,Lt,At=0){if(!(k&&k.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=it.get(k).__webglFramebuffer;if(k.isWebGLCubeRenderTarget&&Lt!==void 0&&(Bt=Bt[Lt]),Bt)if(Z>=0&&Z<=k.width-et&&at>=0&&at<=k.height-nt){D.bindFramebuffer($.FRAMEBUFFER,Bt);let Vt=k.textures[At],ce=Vt.format,he=Vt.type;k.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+At);let kt=Xf(Vt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ye=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,ye),$.bufferData($.PIXEL_PACK_BUFFER,Rt.byteLength,$.STREAM_READ),$.readPixels(Z,at,et,nt,wt.convert(ce),wt.convert(he),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);let He=N!==null?it.get(N).__webglFramebuffer:null;D.bindFramebuffer($.FRAMEBUFFER,He);let Le=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await ap($,Le,4),$.bindBuffer($.PIXEL_PACK_BUFFER,ye),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Rt),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(ye),$.deleteSync(Le),Rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(k,Z=null,at=0){let et=Math.pow(2,-at),nt=Math.floor(k.image.width*et),Rt=Math.floor(k.image.height*et),Lt=Z!==null?Z.x:0,At=Z!==null?Z.y:0;ct.setTexture2D(k,0),$.copyTexSubImage2D($.TEXTURE_2D,at,0,0,Lt,At,nt,Rt),D.unbindTexture()},this.copyTextureToTexture=function(k,Z,at=null,et=null,nt=0,Rt=0){let Lt,At,Bt,Vt,ce,he,kt,ye,He,Le=k.isCompressedTexture?k.mipmaps[Rt]:k.image;if(at!==null)Lt=at.max.x-at.min.x,At=at.max.y-at.min.y,Bt=at.isBox3?at.max.z-at.min.z:1,Vt=at.min.x,ce=at.min.y,he=at.isBox3?at.min.z:0;else{let Ve=Math.pow(2,-nt);Lt=Math.floor(Le.width*Ve),At=Math.floor(Le.height*Ve),k.isDataArrayTexture?Bt=Le.depth:k.isData3DTexture?Bt=Math.floor(Le.depth*Ve):Bt=1,Vt=0,ce=0,he=0}et!==null?(kt=et.x,ye=et.y,He=et.z):(kt=0,ye=0,He=0);let Ae=wt.convert(Z.format),ln=wt.convert(Z.type),It;Z.isData3DTexture?(ct.setTexture3D(Z,0),It=$.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ct.setTexture2DArray(Z,0),It=$.TEXTURE_2D_ARRAY):(ct.setTexture2D(Z,0),It=$.TEXTURE_2D),D.activeTexture($.TEXTURE0),D.pixelStorei($.UNPACK_FLIP_Y_WEBGL,Z.flipY),D.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),D.pixelStorei($.UNPACK_ALIGNMENT,Z.unpackAlignment);let mn=D.getParameter($.UNPACK_ROW_LENGTH),be=D.getParameter($.UNPACK_IMAGE_HEIGHT),Pn=D.getParameter($.UNPACK_SKIP_PIXELS),jn=D.getParameter($.UNPACK_SKIP_ROWS),Ii=D.getParameter($.UNPACK_SKIP_IMAGES);D.pixelStorei($.UNPACK_ROW_LENGTH,Le.width),D.pixelStorei($.UNPACK_IMAGE_HEIGHT,Le.height),D.pixelStorei($.UNPACK_SKIP_PIXELS,Vt),D.pixelStorei($.UNPACK_SKIP_ROWS,ce),D.pixelStorei($.UNPACK_SKIP_IMAGES,he);let Ur=k.isDataArrayTexture||k.isData3DTexture,Me=Z.isDataArrayTexture||Z.isData3DTexture;if(k.isDepthTexture){let Ve=it.get(k),Li=it.get(Z),Pe=it.get(Ve.__renderTarget),Fi=it.get(Li.__renderTarget);D.bindFramebuffer($.READ_FRAMEBUFFER,Pe.__webglFramebuffer),D.bindFramebuffer($.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Br=0;Br<Bt;Br++)Ur&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.get(k).__webglTexture,nt,he+Br),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,it.get(Z).__webglTexture,Rt,He+Br)),$.blitFramebuffer(Vt,ce,Lt,At,kt,ye,Lt,At,$.DEPTH_BUFFER_BIT,$.NEAREST);D.bindFramebuffer($.READ_FRAMEBUFFER,null),D.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(nt!==0||k.isRenderTargetTexture||it.has(k)){let Ve=it.get(k),Li=it.get(Z);D.bindFramebuffer($.READ_FRAMEBUFFER,C),D.bindFramebuffer($.DRAW_FRAMEBUFFER,L);for(let Pe=0;Pe<Bt;Pe++)Ur?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Ve.__webglTexture,nt,he+Pe):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Ve.__webglTexture,nt),Me?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,Li.__webglTexture,Rt,He+Pe):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Li.__webglTexture,Rt),nt!==0?$.blitFramebuffer(Vt,ce,Lt,At,kt,ye,Lt,At,$.COLOR_BUFFER_BIT,$.NEAREST):Me?$.copyTexSubImage3D(It,Rt,kt,ye,He+Pe,Vt,ce,Lt,At):$.copyTexSubImage2D(It,Rt,kt,ye,Vt,ce,Lt,At);D.bindFramebuffer($.READ_FRAMEBUFFER,null),D.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Me?k.isDataTexture||k.isData3DTexture?$.texSubImage3D(It,Rt,kt,ye,He,Lt,At,Bt,Ae,ln,Le.data):Z.isCompressedArrayTexture?$.compressedTexSubImage3D(It,Rt,kt,ye,He,Lt,At,Bt,Ae,Le.data):$.texSubImage3D(It,Rt,kt,ye,He,Lt,At,Bt,Ae,ln,Le):k.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Rt,kt,ye,Lt,At,Ae,ln,Le.data):k.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Rt,kt,ye,Le.width,Le.height,Ae,Le.data):$.texSubImage2D($.TEXTURE_2D,Rt,kt,ye,Lt,At,Ae,ln,Le);D.pixelStorei($.UNPACK_ROW_LENGTH,mn),D.pixelStorei($.UNPACK_IMAGE_HEIGHT,be),D.pixelStorei($.UNPACK_SKIP_PIXELS,Pn),D.pixelStorei($.UNPACK_SKIP_ROWS,jn),D.pixelStorei($.UNPACK_SKIP_IMAGES,Ii),Rt===0&&Z.generateMipmaps&&$.generateMipmap(It),D.unbindTexture()},this.initRenderTarget=function(k){it.get(k).__webglFramebuffer===void 0&&ct.setupRenderTarget(k)},this.initTexture=function(k){k.isCubeTexture?ct.setTextureCube(k,0):k.isData3DTexture?ct.setTexture3D(k,0):k.isDataArrayTexture||k.isCompressedArrayTexture?ct.setTexture2DArray(k,0):ct.setTexture2D(k,0),D.unbindTexture()},this.resetState=function(){T=0,P=0,N=null,D.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=fe._getDrawingBufferColorSpace(t),e.unpackColorSpace=fe._getUnpackColorSpace()}};function Yp(i){let t=i.length/3,e=new Float32Array(t);for(let n=0;n<t;n++){let r=i[n*3+1];i[n*3]===0&&i[n*3+2]===0&&r>0&&(e[n]=r)}return e}function qp(i,t,e,n){for(let r=e.start*3;r<e.end*3;r++){let s=t[r];s<=0||(i[r*3]=Math.min(1,n[0]*s),i[r*3+1]=Math.min(1,n[1]*s),i[r*3+2]=Math.min(1,n[2]*s))}}var $p=2.1;function Ph(i){return i.variant==="wall"}function Zp(i){return i.shape==="cyl"&&(i.axis??"y")==="y"&&i.y>.9&&i.h<.02}var Z_=[],Ih=new Map,K_=0;function Ro(i){Z_=i,Ih=new Map(i.flatMap(t=>t.items.map(e=>[J_(t.id,e.id),e]))),K_++}function J_(i,t){return`pack:${i}:${t}`}function Lh(i){return i.startsWith("pack:")}function uc(i){return Lh(i)?i.endsWith(":curtain_motor")?"curtain":i.endsWith(":screen_roll")?"screen":null:null}function Fh(i,t){return i==="curtain"?t.color==="fabric":t.shape!=="cyl"}function Kp(i){return i==="robot_vacuum"||Lh(i)&&i.endsWith(":robot_vacuum")}function Co(i){return i.z>.05}function Jp(i){let t=((i==null?void 0:i.parts)??[]).filter(e=>e.shape==="cyl"&&Co(e));return t.length?t.reduce((e,n)=>n.w*n.d>e.w*e.d?n:e).z:.227}var j_={"mastershort.living_basics":"mastershort.living","mastershort.kitchen_basics":"mastershort.kitchen","mastershort.bedroom_basics":"mastershort.bedroom","mastershort.bath_basics":"mastershort.bath"};function jp(i){var t;return(t=_e(i))==null?void 0:t.parts.find(e=>e.screen)}function _e(i){if(!Lh(i))return;let t=Ih.get(i);if(t)return t;let[,e,...n]=i.split(":"),r=j_[e];return r?Ih.get(`pack:${r}:${n.join(":")}`):void 0}function en(i,t){let e=_e(t.type);if(t.mount_y!=null)return t.mount_y;if(t.type==="lamp_wall")return fc;if(t.type==="access_point")return t.variant==="wall"?$p:Math.max(0,i.height-Math.max(.005,t.h));if(Qp.has(t.type))return Math.max(0,i.height-t0(t.type,t.h));if(t.type==="led_strip")return Math.max(0,i.height-.04-Math.max(.02,t.h));switch(e==null?void 0:e.mount){case"surface":return wr(i,t)+e0(i,t.x,t.z,t.h);case"wall":return e.wall_y??1;case"ceiling":return Math.max(0,i.height-t.h);default:return e?wr(i,t):Ti(t)||wr(i,t)}}function wr(i,t){let e=i.rooms.filter(n=>n.points.length>=3);return!e.length||e.some(n=>qt([t.x,t.z],n.points))?0:hc(i,t.x,t.z)}var tM={30:[.506,.275,.566],50:[.506,.275,.776],80:[.506,.275,1.066],100:[.506,.275,1.206]},y3=Object.keys(tM),Po=1;var Tr={lawn:.012,terrace:.12,path:.02,driveway:.02,pool:-.25,bed:.15,wild:.03,hedge:1.2,fence:1,pergola:2.2,balcony:.02};function An(i){return i==="hedge"||i==="fence"||i==="pergola"}function Dh(i){return(i.outdoor??[]).filter(t=>t.area_id&&t.points.length>=3&&!An(t.type)).map(t=>({id:t.id,name:(t.name??"").trim(),area_id:t.area_id??null,points:t.points,floor_material:"wood",outdoor:!0,panel:t.panel,hidden:t.hidden,no_state:t.no_state}))}function pc(i){return[...i.rooms,...Dh(i)]}function eM(i,t,e){let n=i.slope??0;if(!n||i.type==="pool")return 0;let r=i.slope_dir??"x",s=(c,f)=>r==="x"?c:r==="-x"?-c:r==="z"?f:-f,o=1/0,a=-1/0;for(let[c,f]of i.points){let u=s(c,f);o=Math.min(o,u),a=Math.max(a,u)}if(a-o<1e-6)return 0;let l=Math.min(1,Math.max(0,(s(t,e)-o)/(a-o)));return n*l}function Oh(i,t,e,n){return Ki(i,t)+Tr[t.type]-Ss(i,t,e,n)}var Nh=-.2,dc={set:!1,level:Nh};function i0(i){let t=(i==null?void 0:i.settings.terrain)??null;dc={set:(t==null?void 0:t.level)!=null,level:(t==null?void 0:t.level)??Nh}}function Ms(i,t){return dc.level}function r0(i){return i.elevation>.3?0:dc.set?dc.level-i.elevation:Nh}function Ki(i,t){return r0(i)+(t.offset??0)}function Ss(i,t,e,n){return t.type==="pool"?0:eM(t,e,n)}function hc(i,t,e){let n=(i.outdoor??[]).filter(s=>!An(s.type)&&s.type!=="pool"&&qt([t,e],s.points)),r=[...n].reverse().find(s=>s.cut)??n[0];return r?Oh(i,r,t,e):r0(i)}function mc(i){var n;if(i.type!=="fence"||!((n=i.gates)!=null&&n.length))return[];let t=i.points.length,e=[];for(let r of i.gates){if(r.edge<0||r.edge>=t||i.open&&r.edge===t-1)continue;let s=i.points[r.edge],o=i.points[(r.edge+1)%t],a=Math.hypot(o[0]-s[0],o[1]-s[1]);if(a<.4)continue;let l=Math.min(Math.max(.3,r.width),a-.1),c=Math.min(Math.max(l/2+.05,r.at),a-l/2-.05);e.push({gate:r,p:s,q:o,s0:c-l/2,s1:c+l/2})}return e}function gc(i,t){return Ki(i,t)+(t.above?o0(t):Math.min(2,Math.max(-.3,t.rim??.06)))}function nM(i){return i.depth&&i.depth>=.3?Math.min(5,i.depth):i.above?o0(i):1.5}function Uh(i,t){return t.above?!1:(i.outdoor??[]).some(e=>e!==t&&e.type!=="pool"&&!An(e.type)&&!e.cut&&e.points.length>=3&&t.points.every(n=>qt(n,e.points)))}function s0(i,t){return!t.above&&!Uh(i,t)?bc(i,t)-.05:gc(i,t)-nM(t)}function bc(i,t){return gc(i,t)-.15}function o0(i){return i.height&&i.height>.3?i.height:1.2}var iM={type:"none",pitch:35,overhang:.4},S3={wall_exterior:.24,wall_interior:.12,grid:.05,north:0,roof:{...iM}};var a0=.3;var l0=new Set(["lamp_ceiling","lamp_ceiling_fan","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant","lamp_floor","lamp_uplight","lamp_table","lamp_wall","led_strip","lamp_bollard","lamp_garden"]),fc=1.75;var Qp=new Set(["lamp_downlight","lamp_spot","lamp_ceiling","lamp_panel"]);function t0(i,t){return i==="lamp_spot"?Math.max(.06,t)+.008:i==="lamp_ceiling"||i==="lamp_panel"?Math.max(.02,t)+.005:.02}var c0=new Set(["stairs","stairs_u"]);function u0(i,t,e){let n=Math.max(4,Math.round(e/.18)),r=Math.floor(n/2)+1,s=r-1,o=n-r,a=Math.min(.12,i*.06),l=(i-a)/2,c=Math.min(l,t*.45),f=(t-c)/s;return{n,k:r,steps1:s,steps2:o,gap:a,fw:l,landing:c,run:f,rise:e/n}}function h0(i){var t;return l0.has(i)||!!((t=_e(i))!=null&&t.light)}var rM=new Set(["table","table_round","coffee_table","desk","nightstand","sideboard","dresser","kitchen","island","worktop","tv_board","dishwasher","washer","dryer"]);var xc=1.05,yc=.3;function Ti(i){switch(i.type){case"home_battery":return i.variant==="wall"?.5:0;case"kitchen_wall":return 1.45;case"tv_wall":return Math.max(0,1.3-i.h/2);case"radiator":return .12;case"ac_unit":return 2.05;case"awning":return 2.3;case"mailbox":return i.variant==="bank"?.75:i.variant==="pole"||i.variant==="pillar"||i.variant==="parcel"?0:1;case"wall_switch":return xc;case"wall_socket":return yc;case"water_heater":return Po;case"inverter":return 1.1;case"wallbox":return 1;case"meter":return .4;default:return 0}}var n0=.04,sM=1.2;function e0(i,t,e,n=0){var s;let r=0;for(let o of i.furniture)!(rM.has(o.type)||(s=_e(o.type))!=null&&s.surface)||!qt([t,e],ji(o))||o.type==="worktop"&&n>0&&o.h-n0>=sM&&n<=o.h-n0-.02||(r=Math.max(r,o.h));return r}var Q_=new Set([...l0,"water_heater","access_point","radiator","ac_unit","awning","robot_vacuum","inverter","home_battery","wallbox","meter","pool_pump","pool_heat_pump","pool_dosing","tv_board","tv_wall","desk","fridge","fridge_smart","stove","kitchen_tall","dishwasher","washer","dryer","kitchen","island","sink"]);var oM=["interior","front","front_glass","sidelight","sidelights","glass","sliding","passage"],aM=["standard","bars","glass_wall"];function Ji(i,t){return i.type==="door"?i.style&&oM.includes(i.style)?i.style:t?"front":"interior":i.style&&aM.includes(i.style)?i.style:"standard"}function f0(i,t,e,n){if(t!=="sidelight"&&t!=="sidelights")return null;let r=t==="sidelights",s=i-.04,o=Math.min(1.05,Math.max(.6,s-(r?.6:.3))),a=(s-o)/(r?2:1),l=n.sidelight_width??a,c=r?n.sidelight_width2??n.sidelight_width??a:0;l=Math.max(.1,l),c=r?Math.max(.1,c):0;let f=s-.5;if(l+c>f){let h=Math.max(0,f)/(l+c);l*=h,c*=h}return r?{panels:[[.02,.02+l],[i-.02-c,i-.02]],x0:.02+l,x1:i-.02-c}:(e?!!n.sidelight_hinge:!n.sidelight_hinge)?{panels:[[.02,.02+l]],x0:.02+l,x1:i-.02}:{panels:[[i-.02-l,i-.02]],x0:.02,x1:i-.02-l}}function d0(i){return i==="front"||i==="front_glass"||i==="sidelight"||i==="sidelights"}function Rn(i){let t=0;for(let e=0;e<i.length;e++){let[n,r]=i[e],[s,o]=i[(e+1)%i.length];t+=n*o-s*r}return t/2}function $n(i){return Math.abs(Rn(i))}function ui(i){let t=Rn(i);if(Math.abs(t)<1e-9){let r=i.length||1;return[i.reduce((s,o)=>s+o[0],0)/r,i.reduce((s,o)=>s+o[1],0)/r]}let e=0,n=0;for(let r=0;r<i.length;r++){let[s,o]=i[r],[a,l]=i[(r+1)%i.length],c=s*l-a*o;e+=(s+a)*c,n+=(o+l)*c}return[e/(6*t),n/(6*t)]}function p0(i){if(i.length!==4)return!1;for(let t=0;t<4;t++){let[e,n]=i[t],[r,s]=i[(t+1)%4];if(Math.abs(e-r)>1e-6&&Math.abs(n-s)>1e-6)return!1}return!0}function m0(i){let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let[s,o]of i)t=Math.min(t,s),e=Math.min(e,o),n=Math.max(n,s),r=Math.max(r,o);return{x0:t,z0:e,x1:n,z1:r}}function ji(i){let t=i.rotation*Math.PI/180,e=Math.cos(t),n=Math.sin(t),r=i.w/2,s=i.d/2;return[[-r,-s],[r,-s],[r,s],[-r,s]].map(([o,a])=>[i.x+o*e-a*n,i.z+o*n+a*e])}function qt(i,t){let e=!1;for(let n=0,r=t.length-1;n<t.length;r=n++){let[s,o]=t[n],[a,l]=t[r];o>i[1]!=l>i[1]&&i[0]<(a-s)*(i[1]-o)/(l-o)+s&&(e=!e)}return e}function Ts(i,t,e){let n=i.q[0]-i.p[0],r=i.q[1]-i.p[1],s=n*n+r*r,o=s>0?Math.min(1,Math.max(0,((t-i.p[0])*n+(e-i.p[1])*r)/s)):0;return i.h0+(i.h1-i.h0)*o}var ze=(i,t)=>[i[0]-t[0],i[1]-t[1]],hi=(i,t)=>[i[0]+t[0],i[1]+t[1]],On=(i,t)=>[i[0]*t,i[1]*t],Es=(i,t)=>i[0]*t[0]+i[1]*t[1],ws=(i,t)=>i[0]*t[1]-i[1]*t[0],Io=i=>Math.hypot(i[0],i[1]),Cn=i=>{let t=Io(i)||1;return[i[0]/t,i[1]/t]},Bh=i=>[-i[1],i[0]],g0=i=>[i[1],-i[0]];function fi(i,t,e=[]){let n=t.eps??.005,r=[],s=e.filter(S=>Math.hypot(S.b[0]-S.a[0],S.b[1]-S.a[1])>.05),o=[],a=S=>{for(let E=0;E<o.length;E++)if(Math.abs(o[E][0]-S[0])<=n&&Math.abs(o[E][1]-S[1])<=n)return E;return o.push([S[0],S[1]]),o.length-1},l=[];for(let S of i){let E=S.points;if(E.length<3||Math.abs(Rn(E))<1e-6)continue;let I=Rn(E)>0,O=E.map(a);for(let C=0;C<E.length;C++){let L=O[C],T=O[(C+1)%E.length];L!==T&&l.push(I?{u:L,v:T,room:S.id,edge:C,forward:!0}:{u:T,v:L,room:S.id,edge:C,forward:!1})}}let c=s.map(S=>[a(S.a),a(S.b)]),f=new Set;for(let S of i){let E=S.points;E.length<3||(S.wall_splits??[]).forEach((I,O)=>{if(!I||O>=E.length)return;let C=E[O],L=ze(E[(O+1)%E.length],C),T=Io(L);for(let P of I)P>n&&P<T-n&&f.add(a(hi(C,On(L,P/T))))})}let u=[];for(let S of l){let E=o[S.u],I=o[S.v],O=ze(I,E),C=Io(O),L=On(O,1/C),T=[];for(let N=0;N<o.length;N++){if(N===S.u||N===S.v)continue;let F=ze(o[N],E),z=Es(F,L);z<=n||z>=C-n||Math.abs(ws(L,F))<=n&&T.push({t:z,id:N})}T.sort((N,F)=>N.t-F.t);let P=[{t:0,id:S.u},...T,{t:C,id:S.v}];for(let N=0;N+1<P.length;N++){let F=P[N],z=P[N+1],B=S.forward?F.t:C-z.t,V=S.forward?z.t:C-F.t;u.push({u:F.id,v:z.id,room:S.room,edge:S.edge,t0:B,t1:V})}}let h=new Map;for(let S of u){let E=S.u<S.v?`${S.u}-${S.v}`:`${S.v}-${S.u}`,I=h.get(E);I||h.set(E,I=[]),I.push(S)}let d=S=>({room_id:S.room,edge:S.edge,t0:S.t0,t1:S.t1}),p=new Map;for(let S of u){let E=`${S.room}:${S.edge}`;p.set(E,[...p.get(E)??[],S.t0].sort((I,O)=>I-O))}let b=S=>{var O,C;let E=(C=(O=i.find(L=>L.id===S.room))==null?void 0:O.wall_heights)==null?void 0:C[S.edge];if(!Array.isArray(E))return E;let I=p.get(`${S.room}:${S.edge}`)??[];return E[I.indexOf(S.t0)]??null},g=S=>{let E=S.map(b).filter(O=>typeof O=="number"&&O>0);if(E.length)return Math.min(...E);let I=S.map(O=>{var C;return(C=i.find(L=>L.id===O.room))==null?void 0:C.ceiling_height});return I.every(O=>typeof O=="number"&&O>0)?Math.max(...I):void 0},m=S=>{let E=S.map(I=>{var O,C;return(C=(O=i.find(L=>L.id===I.room))==null?void 0:O.wall_thickness)==null?void 0:C[I.edge]}).filter(I=>typeof I=="number"&&I>0);return E.length?Math.max(...E):void 0},x=S=>{var E;for(let I of S){let O=i.find(P=>P.id===I.room),C=(E=O==null?void 0:O.wall_slopes)==null?void 0:E[I.edge];if(!O||!C)continue;let L=O.points[I.edge],T=O.points[(I.edge+1)%O.points.length];return{p:[L[0],L[1]],q:[T[0],T[1]],h0:Math.max(.05,C[0]),h1:Math.max(.05,C[1])}}},v=S=>S.some(E=>b(E)===0),y=S=>{let E=x(S);return E?{height:Math.max(E.h0,E.h1),slope:E}:{height:g(S)}},M=[],w=[];for(let S of h.values()){let E=S[0],I=S.find(O=>O!==E&&O.u===E.v&&O.v===E.u&&O.room!==E.room);for(let O of S)O!==E&&O!==I&&O.room!==E.room&&r.push(`overlap:${E.room}:${O.room}`);if(v(I?[E,I]:[E])){I&&M.push([E.room,I.room]);continue}if(I){let O=m([E,I])??t.interior;w.push({a:E.u,b:E.v,left:O/2,right:O/2,exterior:!1,roomLeft:E.room,roomRight:I.room,sources:[d(E),d(I)],...y([E,I])})}else w.push({a:E.u,b:E.v,left:0,right:m([E])??t.exterior,exterior:!0,roomLeft:E.room,roomRight:null,sources:[d(E)],...y([E])})}let A=S=>Cn(ze(o[S.b],o[S.a]));for(let S of w){if(S.exterior||S.free)continue;let E=new Set;for(let O of[S.a,S.b])for(let C of w)!C.exterior||C.free||C.a!==O&&C.b!==O||Math.abs(ws(A(S),A(C)))>1e-6||(C.roomLeft===S.roomLeft?E.add("left"):C.roomLeft===S.roomRight&&E.add("right"));if(E.size!==1)continue;let I=S.left+S.right;E.has("left")?(S.left=0,S.right=I):(S.left=I,S.right=0)}s.forEach((S,E)=>{var z;let[I,O]=c[E];if(I===O)return;let C=[(S.a[0]+S.b[0])/2,(S.a[1]+S.b[1])/2],L=((z=i.find(B=>B.points.length>=3&&qt(C,B.points)))==null?void 0:z.id)??null,T=(S.thickness??t.interior)/2,P=typeof S.height=="number"&&S.height>0?S.height:void 0,N=S.slope,F=N?{p:[S.a[0],S.a[1]],q:[S.b[0],S.b[1]],h0:Math.max(.05,N[0]),h1:Math.max(.05,N[1])}:void 0;w.push({free:S.id,a:I,b:O,left:T,right:T,exterior:!1,roomLeft:L,roomRight:L,sources:[],...F?{height:Math.max(F.h0,F.h1),slope:F}:{height:P}})}),w=cM(w,o,f);let _=hM(w,o);return{walls:w.map((S,E)=>{let I=o[S.a],O=o[S.b],C=_.get(`${E}:a`),L=_.get(`${E}:b`),T=fM([C.right,L.left,O,L.right,C.left,I],1e-6);return{id:lM(I,O),a:[I[0],I[1]],b:[O[0],O[1]],left:S.left,right:S.right,exterior:S.exterior,roomLeft:S.roomLeft,roomRight:S.roomRight,sources:S.sources,footprint:T,...S.free?{free:S.free}:{},...S.height!==void 0?{height:S.height}:{},...S.slope?{slope:S.slope}:{}}}),warnings:[...new Set(r)],open:M}}function lM(i,t){let e=s=>Math.round(s*100),[n,r]=i[0]<t[0]||i[0]===t[0]&&i[1]<=t[1]?[i,t]:[t,i];return`w_${e(n[0])}_${e(n[1])}_${e(r[0])}_${e(r[1])}`}function b0(i){return{...i,a:i.b,b:i.a,left:i.right,right:i.left,roomLeft:i.roomRight,roomRight:i.roomLeft}}function cM(i,t,e=new Set){let n=i.slice(),r=!0;for(;r;){r=!1;let s=new Map;n.forEach((o,a)=>{for(let l of[o.a,o.b]){let c=s.get(l);c||s.set(l,c=[]),c.push(a)}});for(let[o,a]of s){if(a.length!==2||e.has(o))continue;let l=n[a[0]],c=n[a[1]];if(l.b!==o&&(l=b0(l)),c.a!==o&&(c=b0(c)),l.a===c.b)continue;let f=Cn(ze(t[l.b],t[l.a])),u=Cn(ze(t[c.b],t[c.a]));if(Math.abs(ws(f,u))>1e-6||Es(f,u)<=0||l.free||c.free||l.height!==c.height||l.slope||c.slope||l.exterior!==c.exterior||l.roomLeft!==c.roomLeft||l.roomRight!==c.roomRight||Math.abs(l.left-c.left)>1e-9||Math.abs(l.right-c.right)>1e-9)continue;let h={...l,b:c.b,sources:uM(l.sources,c.sources)},d=n.filter((p,b)=>b!==a[0]&&b!==a[1]);d.push(h),n.length=0,n.push(...d),r=!0;break}}return n}function uM(i,t){let e=i.map(n=>({...n}));for(let n of t){let r=e.find(s=>s.room_id===n.room_id&&s.edge===n.edge&&(Math.abs(s.t1-n.t0)<1e-6||Math.abs(n.t1-s.t0)<1e-6));r?(r.t0=Math.min(r.t0,n.t0),r.t1=Math.max(r.t1,n.t1)):e.push({...n})}return e}function hM(i,t){let e=new Map;i.forEach((r,s)=>{let o=Cn(ze(t[r.b],t[r.a])),a=[[r.a,{key:`${s}:a`,d:o,left:r.left,right:r.right,angle:Math.atan2(o[1],o[0])}],[r.b,{key:`${s}:b`,d:On(o,-1),left:r.right,right:r.left,angle:Math.atan2(-o[1],-o[0])}]];for(let[l,c]of a){let f=e.get(l);f||e.set(l,f=[]),f.push(c)}});let n=new Map;for(let[r,s]of e){let o=t[r];s.sort((c,f)=>c.angle-f.angle);let a=c=>({left:hi(o,On(Bh(c.d),c.left)),right:hi(o,On(g0(c.d),c.right))});for(let c of s)n.set(c.key,a(c));if(s.length<2)continue;let l=4*Math.max(...s.map(c=>Math.max(c.left,c.right)))+1e-9;for(let c=0;c<s.length;c++){let f=s[c],u=s[(c+1)%s.length],h=hi(o,On(Bh(f.d),f.left)),d=hi(o,On(g0(u.d),u.right)),p=ws(f.d,u.d);if(Math.abs(p)<1e-4)continue;let b=ws(ze(d,h),u.d)/p,g=hi(h,On(f.d,b));Io(ze(g,o))>l||(n.get(f.key).left=g,n.get(u.key).right=g)}}return n}function fM(i,t){let e=i.filter((r,s)=>Io(ze(r,i[(s+1)%i.length]))>t),n=!0;for(;n&&e.length>3;){n=!1;for(let r=0;r<e.length;r++){let s=e[(r+e.length-1)%e.length],o=e[r],a=e[(r+1)%e.length],l=ze(o,s),c=ze(a,o);if(Math.abs(ws(Cn(l),Cn(c)))<1e-7&&Es(l,c)>0){e=e.filter((f,u)=>u!==r),n=!0;break}}}return e}function kh(i,t,e){let n=i.points[t],r=i.points[(t+1)%i.points.length],s=Cn(ze(r,n));return hi(n,On(s,e))}function x0(i,t){let e=ze(i.b,i.a),n=Bh(Cn(e)),r=a=>t.some(l=>l.points.length>=3&&qt(a,l.points)),s=0,o=0;for(let a of[.2,.5,.8]){let l=hi(i.a,On(e,a));r(hi(l,On(n,i.left+.2)))&&s++,r(ze(l,On(n,i.right+.2)))&&o++}return s>=2&&o===0?!0:o>=2&&s===0?!1:null}function As(i,t,e){if(i.wall){let r=e.find(a=>a.id===i.wall);if(!r||Math.hypot(r.b[0]-r.a[0],r.b[1]-r.a[1])<.05)return null;let s=Cn(ze(r.b,r.a));return{room:{id:i.room_id,name:"",area_id:null,points:[r.a,r.b,hi(r.a,[-s[1],s[0]])]},edge:0}}let n=t.find(r=>r.id===i.room_id);return n&&i.edge<n.points.length?{room:n,edge:i.edge}:null}function Rs(i,t,e){if(!t.wall)return dM(i,e.room,e.edge,t.offset);let n=i.find(s=>s.free===t.wall);if(!n)return null;let r=kh(e.room,0,t.offset);return{wall:n,s:Es(ze(r,n.a),Cn(ze(n.b,n.a)))}}function zh(i,t,e){if(t.free)return null;let n=e?t.b:t.a,r=Cn(ze(t.b,t.a)),s=a=>Math.hypot(a[0]-n[0],a[1]-n[1])<.001,o=null;for(let a of i)if(!(a===t||!(s(a.a)||s(a.b)))){if(o||a.exterior!==t.exterior||a.free||!s(e?a.a:a.b)||Es(Cn(ze(a.b,a.a)),r)<.9999||Math.abs(a.left-t.left)>.001||Math.abs(a.right-t.right)>.001)return null;o=a}return o}function dM(i,t,e,n){for(let r of i){if(!r.sources.find(a=>a.room_id===t.id&&a.edge===e&&n>=a.t0-1e-6&&n<=a.t1+1e-6))continue;let o=kh(t,e,n);return{wall:r,s:Es(ze(o,r.a),Cn(ze(r.b,r.a)))}}return null}var Qi=Math.PI/180;function Er(i){let t=i.rotation??0;if(!t||i.points&&i.points.length>=3)return null;let e=t*Qi;return{p:i.pivot??[(i.x0+i.x1)/2,(i.z0+i.z1)/2],c:Math.cos(e),s:Math.sin(e)}}function _c(i,t,e=!1){if(!i)return t;let n=t[0]-i.p[0],r=t[1]-i.p[1],s=e?-i.s:i.s;return[i.p[0]+n*i.c-r*s,i.p[1]+n*s+r*i.c]}function an(i){let t=Math.min(i.x0,i.x1),e=Math.max(i.x0,i.x1),n=Math.min(i.z0,i.z1),r=Math.max(i.z0,i.z1),s=Er(i),o=i.axis==="x"?(l,c)=>[l,i.flip?r-c:n+c]:(l,c)=>[i.flip?e-c:t+c,l],a=s?(l,c)=>_c(s,o(l,c)):o;return i.axis==="x"?{u0:t,u1:e,w:r-n,at:a}:{u0:n,u1:r,w:e-t,at:a}}function Gh(i,t,e,n=1e-6){let[r,s]=pi(i,t,e),o=an({...i,rotation:0});return r>=o.u0-n&&r<=o.u1+n&&s>=-n&&s<=o.w+n}function on(i){let t=an(i).w,e=i.eave_a,n=i.eave_b,r=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),s=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="flat"||i.shape==="parapet")return{vr:t/2,rh:e,y:()=>e};if(i.shape==="pent")return{vr:t,rh:e+t*r,y:l=>e+l*r};if(i.shape==="mansard"){let l=w0(t,e,n,r,s);return{vr:l.vr,rh:l.rh,y:l.y}}let o=r+s>1e-6?Math.min(t,Math.max(0,(n-e+t*s)/(r+s))):t/2,a=e+o*r;return{vr:o,rh:a,y:l=>l<=o?e+l*r:n+(t-l)*s}}function Hh(i){let t=i.settings.roof;return t.type===void 0||t.type==="custom"?t.sections??[]:[]}var Wh=.14;function v0(i,t){return!i.open&&Math.min(i.base,i.eave_a,i.eave_b)<t-.05}function Xh(i,t){return on(i).rh-Wh>t+.01}function _0(i,t,e,n){let r=null,s=Math.max(0,i.settings.roof.overhang??0);for(let o of Hh(i)){if(o.open||n!==void 0&&!Xh(o,n)||!Gh(o,t,e)||o.points&&o.points.length>=3&&!qt([t,e],o.points))continue;let[a,l]=pi(o,t,e),c=o.shape==="flat"||o.shape==="parapet",f=Math.max(0,o.overhang??s),h=((c?null:Oo(Rr(o,{u0:f,u1:f,a:f,b:f}),a,l))??on(o).y(l))-Wh;r=r===null?h:Math.max(r,h)}return r}function Do(i,t){let e=i.length;if(e<3||Math.abs(t)<1e-9)return i.map(s=>[s[0],s[1]]);let n=$n(i)>=0?1:-1,r=[];for(let s=0;s<e;s++){let o=i[(s+e-1)%e],a=i[s],l=i[(s+1)%e],c=y0([a[0]-o[0],a[1]-o[1]]),f=y0([l[0]-a[0],l[1]-a[1]]),u=[c[1]*n,-c[0]*n],h=[f[1]*n,-f[0]*n],d=u[0]+h[0],p=u[1]+h[1],b=Math.hypot(d,p);if(b<1e-6){r.push([a[0]+u[0]*t,a[1]+u[1]*t]);continue}let g=(d*u[0]+p*u[1])/b,m=Math.min(4,1/Math.max(.25,g));r.push([a[0]+d/b*t*m,a[1]+p/b*t*m])}return r}function y0(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function M0(i,t){if(i.points&&i.points.length>=3)return Do(i.points,t);let e=Math.min(i.x0,i.x1)-t,n=Math.max(i.x0,i.x1)+t,r=Math.min(i.z0,i.z1)-t,s=Math.max(i.z0,i.z1)+t,o=Er(i);return[[e,r],[n,r],[n,s],[e,s]].map(a=>_c(o,a))}function S0(i,t,e,n){let r=fi(i,{exterior:e,interior:n},t).walls.filter(u=>u.exterior&&!u.free);if(!r.length)return null;let s=u=>`${Math.round(u[0]*1e3)}:${Math.round(u[1]*1e3)}`,o=new Map,a=r.map(u=>({a:u.a,b:u.b}));for(let u of a)for(let h of[u.a,u.b])o.set(s(h),[...o.get(s(h))??[],u]);let l=new Set,c=null;for(let u of a){if(l.has(u))continue;l.add(u);let h=[u.a,u.b],d=u.b;for(;;){let p=(o.get(s(d))??[]).find(b=>!l.has(b));if(!p||(l.add(p),d=s(p.a)===s(d)?p.b:p.a,s(d)===s(h[0])))break;h.push(d)}h.length>=3&&s(d)===s(h[0])&&(!c||Math.abs($n(h))>Math.abs($n(c)))&&(c=h)}if(!c)return null;let f=[];for(let u=0;u<c.length;u++){let h=c[(u+c.length-1)%c.length],d=c[u],p=c[(u+1)%c.length],b=(d[0]-h[0])*(p[1]-d[1])-(d[1]-h[1])*(p[0]-d[0]);Math.abs(b)>1e-6&&f.push(d)}return f.length>=3?Do(f,e):null}var Lo=Math.tan(30*Qi);function w0(i,t,e,n,r){let s=Math.min(i*.3,n>1e-6?2.4/n:i*.3),o=Math.min(i*.3,r>1e-6?2.4/r:i*.3),a=t+s*n,l=e+o*r,c=Math.min(i-o,Math.max(s,(l-a+Lo*(i-o+s))/(2*Lo))),f=a+(c-s)*Lo;return{vla:s,vlb:o,yla:a,ylb:l,vr:c,rh:f,y:h=>h<=s?t+h*n:h<=c?a+(h-s)*Lo:h<=i-o?l+(i-o-h)*Lo:e+(i-h)*r}}function Rr(i,t){let e=an(i),n=on(i),r=e.w,s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=(N,F)=>[N,F,n.y(F)],f=c(a,-s),u=c(l,-s),h=c(l,r+o),d=c(a,r+o),p=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),b=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi);if(i.shape==="pent"){let N=[f,u,h,d],F=[[0,n.y(0)],[r,n.y(r)]];return{faces:[N],rim:N,ridges:[[h,d]],gable:F,gables:[F,F]}}if(i.shape==="pyramid"){let N=[(e.u0+e.u1)/2,n.vr,n.rh];return{faces:[[f,u,N],[u,h,N],[h,d,N],[d,f,N]],rim:[f,u,h,d],ridges:[[f,N],[d,N],[u,N],[h,N]],gable:null,gables:[null,null]}}if(i.shape==="mansard"){let N=w0(r,i.eave_a,i.eave_b,p,b),F=[[0,n.y(0)],[N.vla,N.yla],[N.vr,N.rh],[r-N.vlb,N.ylb],[r,n.y(r)]],z=[a,N.vla,N.yla],B=[l,N.vla,N.yla],V=[a,r-N.vlb,N.ylb],H=[l,r-N.vlb,N.ylb],J=[a,N.vr,N.rh],tt=[l,N.vr,N.rh];return{faces:[[f,u,B,z],[z,B,tt,J],[J,tt,H,V],[V,H,h,d]],rim:[f,u,B,tt,H,h,d,V,J,z],ridges:[[J,tt],[z,B],[V,H]],gable:F,gables:[F,F]}}let[g,m]=Mc(i)??["gable","gable"],x=Yh(i,[g,m]),v=g==="gable"?[a,n.vr,n.rh]:[e.u0+x.d0,n.vr,n.rh],y=m==="gable"?[l,n.vr,n.rh]:[e.u1-x.d1,n.vr,n.rh],M=[a,x.vah,x.yh],w=[a,x.vbh,x.yh],A=[l,x.vah,x.yh],_=[l,x.vbh,x.yh],R=g==="halfhip",S=m==="halfhip",E=[[f,u,...S?[A]:[],y,v,...R?[M]:[]],[v,y,...S?[_]:[],h,d,...R?[w]:[]]];g==="hip"&&E.push([d,f,v]),R&&E.push([w,M,v]),m==="hip"&&E.push([u,h,y]),S&&E.push([A,_,y]);let I=[f,u,...m==="gable"?[y]:S?[A,_]:[],h,d,...g==="gable"?[v]:R?[w,M]:[]],O=[[v,y]];g==="hip"&&O.push([f,v],[d,v]),R&&O.push([M,v],[w,v]),m==="hip"&&O.push([u,y],[h,y]),S&&O.push([A,y],[_,y]);let C=[[0,n.y(0)],[n.vr,n.rh],[r,n.y(r)]],L=[[0,n.y(0)],[x.vah,x.yh],[x.vbh,x.yh],[r,n.y(r)]],T=N=>N==="gable"?C:N==="halfhip"?L:null,P=[T(g),T(m)];return{faces:E,rim:I,ridges:O,gable:P[0]??P[1],gables:P}}function Mc(i){if(i.shape!=="gable"&&i.shape!=="hip"&&i.shape!=="halfhip")return null;let t=i.shape,e=n=>n==="gable"||n==="hip"||n==="halfhip"?n:t;return[e(i.end_u0),e(i.end_u1)]}function Yh(i,t){let e=an(i),n=on(i),r=e.w,s=Math.tan(Math.min(80,Math.max(0,i.pitch_a))*Qi),o=Math.tan(Math.min(80,Math.max(0,i.pitch_b))*Qi),a=e.u1-e.u0,l=t[0]!=="gable"&&t[1]!=="gable"?a/2:a,c=Math.min(n.y(0),n.y(r)),f=c+(n.rh-c)*.55,u=s>1e-6?Math.min(n.vr,(f-i.eave_a)/s):n.vr,h=o>1e-6?Math.max(n.vr,r-(f-i.eave_b)/o):n.vr,d=Math.min(l,Math.min(n.vr,r-n.vr)||r/2),p=Math.min(l-.1,(n.rh-f)/Math.max(.2,s)),b=g=>g==="hip"?d:g==="halfhip"?p:0;return{d0:b(t[0]),d1:b(t[1]),yh:f,vah:u,vbh:h}}function Oo(i,t,e){let n=null;for(let r of i.faces){if(!qt([t,e],r.map(x=>[x[0],x[1]])))continue;let[s,o]=r,a=r.slice(2).find(x=>Math.abs((o[0]-s[0])*(x[1]-s[1])-(o[1]-s[1])*(x[0]-s[0]))>1e-9);if(!a)continue;let l=o[0]-s[0],c=o[2]-s[2],f=o[1]-s[1],u=a[0]-s[0],h=a[2]-s[2],d=a[1]-s[1],p=c*d-f*h,b=f*u-l*d,g=l*h-c*u;if(Math.abs(b)<1e-9)continue;let m=s[2]-(p*(t-s[0])+g*(e-s[1]))/b;n=n===null?m:Math.min(n,m)}return n}function pi(i,t,e){let[n,r]=_c(Er(i),[t,e],!0),s=Math.min(i.x0,i.x1),o=Math.max(i.x0,i.x1),a=Math.min(i.z0,i.z1),l=Math.max(i.z0,i.z1);return i.axis==="x"?[n,i.flip?l-r:r-a]:[r,i.flip?o-n:n-s]}function Vh(i){return{x0:Math.min(i.x0,i.x1),x1:Math.max(i.x0,i.x1),z0:Math.min(i.z0,i.z1),z1:Math.max(i.z0,i.z1)}}function Ar(i,t){let[e,n]=_c(Er(t),[(t.x0+t.x1)/2,(t.z0+t.z1)/2]),r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i)o===t||o.dormer||o.open||o.shape==="flat"||o.shape==="parapet"||r(o)<r(t)*1.5||Gh(o,e,n)&&(!s||r(o)<r(s))&&(s=o);return s}function qh(i,t){if(t.shape==="flat"||t.shape==="parapet")return t;let e=an(t),n=on(t).rh,r=Rr(i,{u0:0,u1:0,a:0,b:0}),s=on(i),o=b=>{let[g,m]=e.at(b,e.w/2),[x,v]=pi(i,g,m);return Oo(r,x,v)??s.y(v)},a=o(e.u0)<=o(e.u1),l=a?e.u0:e.u1,c=a?e.u1:e.u0,f=a?1:-1,u=Math.abs(c-l),h=c;for(let b=.5;b<u;b+=.05)if(o(l+f*b)>=n-.02){h=l+f*b;break}if(Math.abs(h-c)<.05)return t;let d=Er(t),p={...t,...d?{pivot:d.p}:{}};return t.axis==="x"?c===e.u1?p.x1=h:p.x0=h:c===e.u1?p.z1=h:p.z0=h,p}function T0(i,t){let e=qh(i,t),n=an(e),r=on(e),s=Rr(i,{u0:0,u1:0,a:0,b:0}),o=on(i),a=h=>{let[d,p]=n.at(h,n.w/2),[b,g]=pi(i,d,p);return Oo(s,b,g)??o.y(g)},l=a(n.u0)<=a(n.u1),c=n.u1-n.u0,f=[],u=Math.max(1,Math.ceil(c/.15));for(let h=0;h<u;h++){let d=c*h/u,p=c*(h+1)/u,b=l?n.u0+d:n.u1-d,g=l?n.u0+p:n.u1-p,m=a(g),x=1/0,v=-1/0;for(let _=0;_<=40;_++){let R=n.w*_/40;r.y(R)>m+.02&&(x=Math.min(x,R),v=Math.max(v,R))}if(!(v-x>.05))continue;let y=n.at(b,x),M=n.at(g,v),w=pi(i,y[0],y[1]),A=pi(i,M[0],M[1]);f.push({u0:Math.min(w[0],A[0]),u1:Math.max(w[0],A[0]),v0:Math.min(w[1],A[1]),v1:Math.max(w[1],A[1])})}return f}function di(i,t,e,n){let r=o=>n?o[t]<=e+1e-9:o[t]>=e-1e-9,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),f=r(l);if(c&&s.push(a),c!==f){let u=(e-a[t])/(l[t]-a[t]);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function $h(i,t){let e=di(i,0,t.u0,!0),n=di(i,0,t.u1,!1),r=di(di(i,0,t.u0,!1),0,t.u1,!0),s=di(r,1,t.v0,!0),o=di(r,1,t.v1,!1);return[e,n,s,o].filter(a=>a.length>=3&&Math.abs($n(a.map(l=>[l[0],l[1]])))>1e-6)}function Sc(i,t,e){let n=an(t),r=i.floors.flatMap(b=>b.rooms.filter(g=>g.points.length>=3&&b.elevation+b.height>t.base+.05)),s=i.settings.wall_exterior,o=r.map(b=>Do(b.points,Math.max(s,...(b.wall_thickness??[]).map(g=>g??0))+.01)),a=.35,l=(b,g)=>{if(r.some(x=>qt(b(a),x.points)))return!0;let m=b(-Math.min(.3,g/2));return o.some(x=>!qt(m,x)&&[.05,.2,a].some(v=>qt(b(v),x)))},c=[.15,.5,.85],f=c.map(b=>n.u0+(n.u1-n.u0)*b),u=c.map(b=>n.w*b),h=b=>b==="a"?f.some(g=>l(m=>n.at(g,-m),n.w)):b==="b"?f.some(g=>l(m=>n.at(g,n.w+m),n.w)):b==="u0"?u.some(g=>l(m=>n.at(n.u0-m,g),n.u1-n.u0)):u.some(g=>l(m=>n.at(n.u1+m,g),n.u1-n.u0)),d=t.overhang_sides??null,p=(b,g)=>{let m=d==null?void 0:d[b];return typeof m=="number"?Math.max(0,m):h(g)?0:e};return{a:p(0,"a"),b:p(1,"b"),u0:p(2,"u0"),u1:p(3,"u1")}}function E0(i,t){let e=i.floors.filter(n=>n.rooms.length>0).sort((n,r)=>n.elevation-r.elevation);return[...e].reverse().find(n=>n.elevation<t.base-.05)??e[0]}function pM(i){return on(i).rh}function A0(i,t,e){var l;let n=i.settings.roof.sections??[],r=n.filter(c=>e.includes(c.id)).map(c=>Ar(n,c)??c);if(!r.length)return t.id;let s=Math.max(...r.map(c=>pM(c))),o=c=>c.rooms.some(f=>f.points.length>=3&&r.some(u=>{let[h,d]=f.points.reduce((p,b)=>[p[0]+b[0]/f.points.length,p[1]+b[1]/f.points.length],[0,0]);return Gh(u,h,d)}));return((l=i.floors.filter(c=>c.elevation>=t.elevation&&c.elevation<s-.3&&o(c)).sort((c,f)=>f.elevation-c.elevation)[0])==null?void 0:l.id)??t.id}function vc(i,[t,e,n]){let r=o=>t*o[0]+e*o[1]+n,s=[];for(let o=0;o<i.length;o++){let a=i[o],l=i[(o+1)%i.length],c=r(a),f=r(l);if(c>=-1e-9&&s.push(a),c>=-1e-9!=f>=-1e-9){let u=c/(c-f);s.push([a[0]+(l[0]-a[0])*u,a[1]+(l[1]-a[1])*u,a[2]+(l[2]-a[2])*u])}}return s}function Fo(i){let t=i[0];if(!t)return null;let e=t;for(let d of i)Math.hypot(d[0]-t[0],d[1]-t[1])>Math.hypot(e[0]-t[0],e[1]-t[1])&&(e=d);let n=e[0]-t[0],r=e[1]-t[1],s=t,o=0;for(let d of i){let p=n*(d[1]-t[1])-r*(d[0]-t[0]);Math.abs(p)>Math.abs(o)&&(o=p,s=d)}if(Math.abs(o)<1e-9)return null;let a=s[0]-t[0],l=s[1]-t[1],c=e[2]-t[2],f=s[2]-t[2],u=(c*l-f*r)/o,h=(n*f-a*c)/o;return[u,h,t[2]-u*t[0]-h*t[1]]}var Cs=i=>Math.abs($n(i.map(t=>[t[0],t[1]])));function wc(i){let t=Rn(i.map(n=>[n[0],n[1]]))>=0?1:-1,e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=Math.hypot(s[0]-r[0],s[1]-r[1]);if(o<1e-7)continue;let a=-(s[1]-r[1])*t/o,l=(s[0]-r[0])*t/o;e.push([a,l,-(a*r[0]+l*r[1])])}return e}function mM(i,t){let e=Fo(i),n=Fo(t.poly);if(!e||!n||Cs(t.poly)<1e-6)return null;let r=[...wc(t.poly),[n[0]-e[0],n[1]-e[1],n[2]-e[2]-.01]];return Number.isFinite(t.depth)&&r.push([e[0]-n[0],e[1]-n[1],e[2]-n[2]+t.depth]),r}function R0(i,t){let e=[i];for(let n of t){let r=[];for(let s of e){let o=mM(s,n),a=o?s:[];for(let c of o??[])a=vc(a,c);if(a.length<3||Cs(a)<1e-6){r.push(s);continue}let l=s;for(let[c,f,u]of wc(a)){let h=vc(l,[-c,-f,-u]);if(h.length>=3&&Cs(h)>1e-6&&r.push(h),l=vc(l,[c,f,u]),l.length<3)break}}e=r}return e}function Zh(i,t,e){let n=[[0,1]],r=s=>[i[0]+(t[0]-i[0])*s,i[1]+(t[1]-i[1])*s,i[2]+(t[2]-i[2])*s];for(let s of e){let o=Fo(s.poly);if(!o||Cs(s.poly)<1e-6)continue;let a=wc(s.poly).map(([d,p,b])=>[d*i[0]+p*i[1]+b,d*(t[0]-i[0])+p*(t[1]-i[1])]),l=d=>o[0]*d[0]+o[1]*d[1]+o[2]-d[2],c=l(i),f=l(t)-c;a.push([c-.01,f]),Number.isFinite(s.depth)&&a.push([s.depth-c,-f]);let u=0,h=1;for(let[d,p]of a){if(Math.abs(p)<1e-12){d<-1e-9&&(h=-1);continue}let b=-d/p;p>0?u=Math.max(u,b):h=Math.min(h,b)}h-u<1e-6||(n=n.flatMap(([d,p])=>[[d,Math.min(p,u)],[Math.max(d,h),p]]).filter(([d,p])=>p-d>1e-6))}return n.map(([s,o])=>[r(s),r(o)])}function C0(i,t){let e=Fo(i),n=Fo(t);if(!e||!n||Cs(t)<1e-6)return null;let r=[...i];for(let c of wc(t))r=vc(r,c);if(r.length<3)return null;let s=c=>(n[0]-e[0])*c[0]+(n[1]-e[1])*c[1]+(n[2]-e[2]),o=[];for(let c=0;c<r.length;c++){let f=r[c],u=r[(c+1)%r.length],h=s(f),d=s(u);if(h<0!=d<0){let p=h/(h-d);o.push([f[0]+(u[0]-f[0])*p,f[1]+(u[1]-f[1])*p,f[2]+(u[2]-f[2])*p])}}if(o.length<2)return null;let a=o[0],l=o[o.length-1];return Math.hypot(a[0]-l[0],a[1]-l[1])>.05?[a,l]:null}function P0(i,t){let e=an(i),n=s=>s.map(([o,a,l])=>{let[c,f]=e.at(o,a);return[c,f,l]}),r=[];for(let s of t){let o=di(di(di(di(s,0,e.u0,!1),0,e.u1,!0),1,0,!1),1,e.w,!0);o.length>=3&&Cs(o)>1e-6&&r.push({poly:n(o),depth:1/0});for(let a of $h(s,{u0:e.u0,u1:e.u1,v0:0,v1:e.w}))r.push({poly:n(a),depth:Wh})}return r}function Kh(i,t){return t.map(e=>({poly:e.poly.map(([n,r,s])=>[...pi(i,n,r),s]),depth:e.depth}))}function I0(i,t,e){let n=r=>!r.open&&r.shape!=="flat"&&r.shape!=="parapet";return t===e||!n(t)||!n(e)?!1:Ar(i,t)!==e&&Ar(i,e)!==t}function L0(i,t){if(t.dormer||t.open||!Mc(t)||Er(t)||Ar(i,t))return null;let e=an(t),n=on(t).rh,r=o=>Math.abs((o.x1-o.x0)*(o.z1-o.z0)),s=null;for(let o of i){if(o===t||o.dormer||o.open||Er(o)||o.axis===t.axis||o.shape==="flat"||o.shape==="parapet"||o.shape==="pent")continue;let a=on(o).rh;if(!(a>n+.02||Math.abs(a-n)<=.02&&(r(o)>r(t)||r(o)===r(t)&&i.indexOf(o)<i.indexOf(t))))continue;let c=Vh(o),[f,u]=t.axis==="x"?[c.x0,c.x1]:[c.z0,c.z1],[h,d]=t.axis==="x"?[c.z0,c.z1]:[c.x0,c.x1],p=Vh(t),[b,g]=t.axis==="x"?[p.z0,p.z1]:[p.x0,p.x1];if(b<h-.05||g>d+.05)continue;let m=F0(t,o),x=null;e.u0<f-.05&&e.u1>=f-.05&&e.u1<=m+.05?x=1:e.u1>u+.05&&e.u0<=u+.05&&e.u0>=m-.05&&(x=0),x!==null&&(!s||r(o)>r(s.host))&&(s={host:o,end:x})}return s}function F0(i,t){let e=an(t),n=e.at(e.u0,on(t).vr);return i.axis==="x"?n[0]:n[1]}function D0(i,t){let e=F0(i,t.host),n={...i,...t.end===0?{end_u0:"gable"}:{end_u1:"gable"}},r=Vh(i);return i.axis==="x"?(n.x0=t.end===0?Math.min(r.x0,e):r.x0,n.x1=t.end===1?Math.max(r.x1,e):r.x1):(n.z0=t.end===0?Math.min(r.z0,e):r.z0,n.z1=t.end===1?Math.max(r.z1,e):r.z1),n}var N0=.8,O0=.3;function Jh(i,t){return t.rooms.some(e=>e.points.length>=3)?S0(t.rooms,t.walls??[],i.settings.wall_exterior,i.settings.wall_interior):null}function jh(i,t){var n;if(((n=i.settings.terrain)==null?void 0:n.earth)===!1||t.elevation>.3)return!1;let e=Jh(i,t);return!!e&&e.some(([r,s])=>Ms(r,s)-t.elevation>-.15)}function gM(i,t,e){let n=null;for(let r of i.floors)if(!(r.elevation>.3))for(let s of r.outdoor??[]){if(s.points.length<3||s.type==="pool"||s.type==="balcony"||An(s.type)||!qt(e,s.points))continue;let o=r.elevation+Oh(r,s,e[0],e[1])-t.elevation;n=n===null?o:Math.max(n,o)}return n}function U0(i,t,e,n,r,s){if(!e||!jh(i,t))return!1;let o=Ms(r[0],r[1])-t.elevation;return s&&(o=Math.max(o,gM(i,t,[r[0]+s[0]*O0,r[1]+s[1]*O0])??-1/0)),n<Math.min(t.height,o)-.05}function Ps(i,t){let e=Rn(t)>0?1:-1,n=[...i];for(let r=0;r<t.length&&n.length;r++){let s=t[r],o=t[(r+1)%t.length],a=c=>e*((o[0]-s[0])*(c[1]-s[1])-(o[1]-s[1])*(c[0]-s[0])),l=n;n=[];for(let c=0;c<l.length;c++){let f=l[c],u=l[(c+1)%l.length],h=a(f),d=a(u);if(h>=0&&n.push(f),h>=0!=d>=0){let p=h/(h-d);n.push([f[0]+(u[0]-f[0])*p,f[1]+(u[1]-f[1])*p])}}}return n}function Qh(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length],s=i[(e+2)%i.length],o=(r[0]-n[0])*(s[1]-r[1])-(r[1]-n[1])*(s[0]-r[0]);if(!(Math.abs(o)<1e-9)){if(t&&Math.sign(o)!==t)return!1;t=Math.sign(o)}}return!0}var Zn=1e-4;function tf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t/2}function B0(i,t,e,n){let r=[t[0]-i[0],t[1]-i[1]],s=[n[0]-e[0],n[1]-e[1]],o=r[0]*s[1]-r[1]*s[0];if(Math.abs(o)<1e-12)return null;let a=((e[0]-i[0])*s[1]-(e[1]-i[1])*s[0])/o,l=((e[0]-i[0])*r[1]-(e[1]-i[1])*r[0])/o;return a>Zn&&a<1-Zn&&l>-Zn&&l<1+Zn?a:null}function ef(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r;if(s<1e-12)return null;let o=((i[0]-t[0])*n+(i[1]-t[1])*r)/s;return o<=Zn||o>=1-Zn?null:Math.abs((i[0]-t[0])*r-(i[1]-t[1])*n)/Math.sqrt(s)<Zn?o:null}function bM(i,t){for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];for(let s=0;s<t.length;s++){let o=t[s],a=t[(s+1)%t.length];if(B0(n,r,o,a)!==null||ef(o,n,r)!==null||ef(n,o,a)!==null||Math.hypot(n[0]-o[0],n[1]-o[1])<Zn)return!0}}return qt(i[0],t)||qt(t[0],i)}function xM(i){let t=i.map(s=>tf(s)>=0?s:[...s].reverse()),e=[];t.forEach((s,o)=>{for(let a=0;a<s.length;a++){let l=s[a],c=s[(a+1)%s.length],f=[0,1];t.forEach((u,h)=>{if(h!==o)for(let d=0;d<u.length;d++){let p=u[d],b=u[(d+1)%u.length],g=B0(l,c,p,b)??ef(p,l,c);g!==null&&f.push(g)}}),f.sort((u,h)=>u-h);for(let u=1;u<f.length;u++){if(f[u]-f[u-1]<Zn)continue;let h=[l[0]+(c[0]-l[0])*f[u-1],l[1]+(c[1]-l[1])*f[u-1]],d=[l[0]+(c[0]-l[0])*f[u],l[1]+(c[1]-l[1])*f[u]],p=Math.hypot(d[0]-h[0],d[1]-h[1]),b=[(h[0]+d[0])/2+(d[1]-h[1])/p*.001,(h[1]+d[1])/2-(d[0]-h[0])/p*.001];t.some((g,m)=>m!==o&&qt(b,g))||e.some(([g,m])=>Math.hypot(g[0]-h[0],g[1]-h[1])<Zn&&Math.hypot(m[0]-d[0],m[1]-d[1])<Zn)||e.push([h,d])}}});let n=[],r=new Set;for(let s=0;s<e.length;s++){if(r.has(s))continue;r.add(s);let o=[e[s][0]],a=e[s][1];for(let l=0;l<e.length&&!(Math.hypot(a[0]-o[0][0],a[1]-o[0][1])<.001);l++){let c=e.findIndex(([f],u)=>!r.has(u)&&Math.hypot(f[0]-a[0],f[1]-a[1])<.001);if(c<0)break;r.add(c),o.push(e[c][0]),a=e[c][1]}o.length>=3&&tf(o)>1e-6&&n.push(o)}return n}function k0(i){let t=i.filter(s=>s.length>=3),e=t.map((s,o)=>o),n=s=>e[s]===s?s:e[s]=n(e[s]);for(let s=0;s<t.length;s++)for(let o=s+1;o<t.length;o++)n(s)!==n(o)&&bM(t[s],t[o])&&(e[n(o)]=n(s));let r=new Map;return t.forEach((s,o)=>r.set(n(o),[...r.get(n(o))??[],s])),[...r.values()].flatMap(s=>s.length===1?s:xM(s))}function yM(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r,o=s?Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s)):0;return Math.hypot(i[0]-t[0]-n*o,i[1]-t[1]-r*o)}function nf(i,t,e=.03){return i.every(n=>qt(n,t)||t.some((r,s)=>yM(n,r,t[(s+1)%t.length])<=e))}function z0(i,t){let e=tf(i)>=0?i:[...i].reverse(),n=(r,s)=>{let o=Math.hypot(s[0]-r[0],s[1]-r[1])||1;return[-(s[1]-r[1])/o,(s[0]-r[0])/o]};return e.map((r,s)=>{let o=n(e[(s-1+e.length)%e.length],r),a=n(r,e[(s+1)%e.length]),l=1+o[0]*a[0]+o[1]*a[1];return l<.1?r:[r[0]+(o[0]+a[0])/l*t,r[1]+(o[1]+a[1])/l*t]})}function rf(i){let t=(i.switch_keys??[]).slice(0,4).map(e=>e&&e!=="none"?e:null);return t.length?t:[null]}var V0=i=>i&&i!=="none"?i:null;function vM(i){let t=(i.socket_outlets??[]).slice(0,4).map(e=>({entity:V0(e==null?void 0:e.entity),power:V0(e==null?void 0:e.power)}));return t.length?t:[{entity:null,power:null}]}function Tc(i){return i.type==="wall_socket"?vM(i).length:rf(i).length}function G0(i,t,e){let n=Tc(i),r=i.rotation*Math.PI/180,s=((t-i.x)*Math.cos(r)+(e-i.z)*Math.sin(r))*(i.mirror?-1:1),o=Math.max(.05,i.w);return Math.max(0,Math.min(n-1,Math.floor((s+o/2)/o*n)))}function of(i,t,e){return t==="w"?[(i.x-i.w/2+.5)*e,(i.x+i.w/2+.5)*e]:t==="d"?[(i.z-i.d/2+.5)*e,(i.z+i.d/2+.5)*e]:[i.y*e,(i.y+i.h)*e]}var Is=(i,t)=>!!i.fix&&i.fix.includes(t);function sf(i,t,e,n){let r=new Map,s=i.filter(c=>Is(c,t)).map(c=>({p:c,e:of(c,t,e)})),o=Math.min(.05,.1*e);for(let{p:c,e:f}of s)t!=="h"&&Math.abs((f[0]+f[1])/2-e/2)<1e-6&&r.set(c,"mid");let a=0;for(let c=!0;c;){c=!1;for(let{p:f,e:u}of s)r.has(f)||u[0]>a+(a===0?o:.001)||t==="h"&&u[1]>=e-.01&&u[0]>.01||(r.set(f,"lo"),a=Math.max(a,u[1]),c=!0)}let l=0;for(let c=!0;c;){c=!1;for(let{p:f,e:u}of s)r.has(f)||e-u[1]>l+(l>0?.001:t==="h"?.01:o)||(r.set(f,"hi"),l=Math.max(l,e-u[0]),c=!0)}for(let{p:c}of s)r.has(c)||r.set(c,"free");return a+l>Math.min(e,n)-.01?{s0:e,s:n,lo:0,hi:0,side:r}:{s0:e,s:n,lo:a,hi:l,side:r}}function Cr(i,t){if(t.s===t.s0||i<=t.lo)return i;if(i>=t.s0-t.hi)return i+(t.s-t.s0);let e=t.s0-t.lo-t.hi;return e<=0?i*t.s/t.s0:t.lo+(i-t.lo)*(t.s-t.lo-t.hi)/e}function H0(i,t,e,n){if(n.lo===0&&n.hi===0&&n.s!==n.s0&&!Ec(n))return[Cr(t,n),Cr(e,n)];let r=n.side.get(i)??"lo",s=e-t;if(r==="mid")return[n.s/2-s/2,n.s/2+s/2];if(r==="free"){let o=Cr((t+e)/2,n);return[o-s/2,o+s/2]}return r==="lo"?[t,e]:[t+(n.s-n.s0),e+(n.s-n.s0)]}function Ec(i){return i.lo>0||i.hi>0}function Ac(i,t,e,n){let[r,s,o]=i.size;if(!i.parts.some(c=>c.fix)||Math.abs(t-r)<.001&&Math.abs(e-s)<.001&&Math.abs(n-o)<.001)return i.parts;let a={w:sf(i.parts,"w",r,t),d:sf(i.parts,"d",s,e),h:sf(i.parts,"h",o,n)},l={w:!Ec(a.w)&&i.parts.some(c=>Is(c,"w")),d:!Ec(a.d)&&i.parts.some(c=>Is(c,"d")),h:!Ec(a.h)&&i.parts.some(c=>Is(c,"h"))};return i.parts.map(c=>{let f=x=>{let v=a[x],[y,M]=of(c,x,v.s0);return Is(c,x)&&!l[x]?H0(c,y,M,v):[Cr(y,v),Cr(M,v)]},[u,h]=f("w"),[d,p]=f("d"),[b,g]=f("h"),m={...c,x:(u+h)/2/t-.5,w:(h-u)/t,z:(d+p)/2/e-.5,d:(p-d)/e,y:b/n,h:(g-b)/n};if(c.shape==="loft"){let x=(A,_,R,S,E)=>{let I=a[A],O=_??S,C=R??E,L=(O-C/2+.5)*I.s0,T=(O+C/2+.5)*I.s0;if(!Is(c,A)||l[A])return[Cr(L,I),Cr(T,I)];let[P,N]=of(c,A,I.s0),[F]=H0(c,P,N,I),z=F-P;return[L+z,T+z]},[v,y]=x("w",c.tx,c.tw,c.x,c.w),[M,w]=x("d",c.tz,c.td,c.z,c.d);m.tx=(v+y)/2/t-.5,m.tw=(y-v)/t,m.tz=(M+w)/2/e-.5,m.td=(w-M)/e}return m})}var _M=["bin120","bin240","bin1100","multi","bag","caddy","underground"];var MM=["wall","pole","pillar","parcel","bank"];function X0(i){return _M.includes(i.variant??"")?i.variant:"bin240"}function Y0(i){return MM.includes(i.variant??"")?i.variant:"wall"}var Ge=["#3a3f47","#3a3f47"],Pr=["#23262b","#23262b"],Kn=["#5a3b25","#5a3b25"],Oe=["#1f4fa8","#1f4fa8"],tr=["#e3b616","#e3b616"],de=["#2f7d3b","#2f7d3b"],W0={default:{rest:Ge,bio:Kn,paper:Oe,plastic:tr,glass:de,garden:de,recycling:tr,other:Ge},DE:{rest:Pr,bio:Kn,paper:Oe,plastic:tr,glass:de,garden:de,recycling:tr},AT:{rest:Ge,bio:Kn,paper:[Ge[0],"#c0262d"],plastic:tr,glass:de,garden:de},CH:{rest:["#d8d8d8","#d8d8d8"],bio:de,paper:Oe,plastic:Ge,glass:de,garden:de},NL:{rest:Ge,bio:de,paper:Oe,plastic:["#3a3f47","#e57a1f"],glass:de,garden:de},BE:{rest:Ge,bio:de,paper:Oe,plastic:Oe,glass:de,garden:de},GB:{rest:Pr,bio:["#3a3f47","#5a3b25"],paper:Oe,plastic:Oe,glass:Pr,garden:Kn,recycling:Oe},US:{rest:Pr,bio:de,paper:Oe,plastic:Oe,glass:Oe,garden:de,recycling:Oe},CA:{rest:Pr,bio:de,paper:Oe,plastic:Oe,glass:Oe,garden:de,recycling:Oe},AU:{rest:["#2f7d3b","#c0262d"],bio:["#2f7d3b","#55b043"],paper:["#2f7d3b","#e3b616"],plastic:["#2f7d3b","#e3b616"],recycling:["#2f7d3b","#e3b616"],glass:["#2f7d3b","#7a3e9d"],garden:["#2f7d3b","#55b043"]},FR:{rest:Ge,bio:Kn,paper:[Ge[0],"#e3b616"],plastic:[Ge[0],"#e3b616"],recycling:[Ge[0],"#e3b616"],glass:de,garden:de},IT:{rest:Ge,bio:Kn,paper:Oe,plastic:tr,glass:de,garden:de},ES:{rest:Ge,bio:Kn,paper:Oe,plastic:tr,glass:de,garden:de},PT:{rest:Ge,bio:Kn,paper:Oe,plastic:tr,glass:de,garden:de},DK:{rest:Pr,bio:de,paper:Oe,plastic:Ge,glass:de,garden:de},SE:{rest:Pr,bio:Kn,paper:Oe,plastic:Ge,glass:de,garden:de},NO:{rest:Ge,bio:Kn,paper:Oe,plastic:Ge,glass:de,garden:de},FI:{rest:Ge,bio:Kn,paper:Oe,plastic:Ge,glass:de,garden:de}},q0="DE";function $0(){return q0}function SM(i,t){var e;return((e=W0[t])==null?void 0:e[i])??W0.default[i]??Ge}function Z0(i,t=q0){let e=SM(i.bin_kind??"rest",t),n=i.bin_color||e[0];return[n,i.bin_lid||(i.bin_color?n:e[1])]}var er=Dt(3662079,.95),af=Dt(3662079,1),Ei=Dt(5995775,.34),K0=Dt(5995775,.22),Rc=[-.55,.83],Qt=-1,Cc=16,nr=32,J0=48,lf=64,ie=class{p=[];c=[];f=[];uv;tile;constructor(t=!1,e=!1){this.uv=t?[]:null,this.tile=e?[]:null}tri(t,e,n,r,s=r,o=r,a,l=Qt,c=[0,1]){this.p.push(...t,...e,...n),this.c.push(r.r,r.g,r.b,s.r,s.g,s.b,o.r,o.g,o.b),this.f.push(l,l,l),this.uv&&this.uv.push(...a??[.5,.5,.5,.5,.5,.5]),this.tile&&this.tile.push(...c,...c,...c)}get count(){return this.p.length/9}geometry(){let t=new Gt;return t.setAttribute("position",new Ft(this.p,3)),t.setAttribute("color",new Ft(this.c,3)),t.setAttribute("fold",new Ft(this.f,1)),this.uv&&t.setAttribute("uv",new Ft(this.uv,2)),this.tile&&t.setAttribute("tile",new Ft(this.tile,2)),t.computeBoundingSphere(),t}},Ne=class{p=[];c=[];f=[];seg(t,e,n=er,r=Qt){this.p.push(...t,...e),this.c.push(n.r,n.g,n.b,n.r,n.g,n.b),this.f.push(r,r)}segSplit(t,e,n,r,s){let[o,a]=t[1]<=e[1]?[t,e]:[e,t];if(a[1]<=r+1e-6||s<0)return this.seg(o,a,n,Qt);if(o[1]>=r-1e-6)return this.seg(o,a,n,s);let l=(r-o[1])/(a[1]-o[1]),c=[o[0]+(a[0]-o[0])*l,r,o[2]+(a[2]-o[2])*l];this.seg(o,c,n,Qt),this.seg(c,a,n,s)}geometry(){let t=new Gt;return t.setAttribute("position",new Ft(this.p,3)),t.setAttribute("color",new Ft(this.c,3)),t.setAttribute("fold",new Ft(this.f,1)),t}};function j0(i,t,e,n){let s=i.uv?2:0,o=(u,h)=>{let d=u*3+h;return{p:i.p.slice(d*3,d*3+3),c:i.c.slice(d*3,d*3+3),uv:i.uv?i.uv.slice(d*2,d*2+2):null,tile:i.tile?i.tile.slice(d*2,d*2+2):null}},a=(u,h,d)=>({p:u.p.map((p,b)=>p+(h.p[b]-p)*d),c:u.c.map((p,b)=>p+(h.c[b]-p)*d),uv:u.uv&&h.uv?u.uv.map((p,b)=>p+(h.uv[b]-p)*d):null,tile:u.tile}),l=(u,h,d)=>{for(let p=0;p<3;p++){let b=u*3+p;for(let g=0;g<3;g++)i.p[b*3+g]=h[p].p[g],i.c[b*3+g]=h[p].c[g];if(i.uv&&h[p].uv)for(let g=0;g<s;g++)i.uv[b*2+g]=h[p].uv[g];if(i.tile&&h[p].tile)for(let g=0;g<2;g++)i.tile[b*2+g]=h[p].tile[g];i.f[b]=d}},c=(u,h)=>{let d=i.p.length/9;for(let p of u)i.p.push(...p.p),i.c.push(...p.c),i.f.push(h),i.uv&&i.uv.push(...p.uv??[.5,.5]),i.tile&&i.tile.push(...p.tile??[0,1]);return d},f=i.p.length/9;for(let u=t;u<f;u++){let h=[o(u,0),o(u,1),o(u,2)],d=h.map(_=>_.p[1]>e+1e-6),p=h.map(_=>_.p[1]<e-1e-6);if(!d.some(Boolean))continue;if(!p.some(Boolean)){for(let _=0;_<3;_++)i.f[u*3+_]=n;continue}let b=i.f[u*3],g=(_,R)=>a(_,R,(e-_.p[1])/(R.p[1]-_.p[1])),m=d.filter(Boolean).length,x=m===1?d.indexOf(!0):d.indexOf(!1),v=h[x],y=h[(x+1)%3],M=h[(x+2)%3],w=g(v,y),A=g(M,v);m===1?(l(u,[v,w,A],n),c([w,y,M],b),c([w,M,A],b)):(l(u,[v,w,A],b),c([w,y,M],n),c([w,M,A],n))}}function Q0(i,t,e,n){let r=i.p.length/6;for(let s=t;s<r;s++){let o=i.p.slice(s*6,s*6+3),a=i.p.slice(s*6+3,s*6+6),[l,c]=o[1]<=a[1]?[o,a]:[a,o];if(c[1]<=e+1e-6)continue;if(l[1]>=e-1e-6){i.f[s*2]=n,i.f[s*2+1]=n;continue}let f=(e-l[1])/(c[1]-l[1]),u=[l[0]+(c[0]-l[0])*f,e,l[2]+(c[2]-l[2])*f];for(let d=0;d<3;d++)i.p[s*6+d]=l[d],i.p[s*6+3+d]=u[d];let h=i.c.slice(s*6,s*6+3);i.p.push(...u,...c),i.c.push(...h,...h),i.f.push(n,n)}}var ae=Math.PI/180;function Dt(i,t){let e=new j(i).multiplyScalar(t);return e.r=Math.min(1,e.r),e.g=Math.min(1,e.g),e.b=Math.min(1,e.b),e}function wM(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t}function pn(i,t=[]){let e=i.map(([n,r])=>new te(n,r));return co.triangulateShape(e,t.map(n=>n.map(([r,s])=>new te(r,s))))}function tm(i,t,e,n,r,s,o){let a=new j(o),l=d=>.5+.5*Math.min(1,Math.max(0,d/1.6));for(let d=0;d<4;d++){let p=t[d],b=t[(d+1)%4],g=e[d],m=e[(d+1)%4],x=b[0]-p[0],v=b[1]-p[1],y=Math.hypot(x,v);if(y<1e-6)continue;let w=.8+.28*((v/y*Rc[0]-x/y*Rc[1]+1)/2),A=(g[0]+m[0]-p[0]-b[0])/2*(-v/y)+(g[1]+m[1]-p[1]-b[1])/2*(x/y),_=Math.max(0,Math.min(1,A/Math.max(1e-6,Math.hypot(A,r-n)))),R=Dt(s,l(n)*w).lerp(a,_),S=Dt(s,l(r)*w).lerp(a,_);i.tri([p[0],n,p[1]],[g[0],r,g[1]],[m[0],r,m[1]],R,S,S),i.tri([p[0],n,p[1]],[m[0],r,m[1]],[b[0],n,b[1]],R,S,R)}let[c,f,u,h]=e;Math.hypot(u[0]-c[0],u[1]-c[1])>1e-4&&(i.tri([c[0],r,c[1]],[u[0],r,u[1]],[f[0],r,f[1]],a),i.tri([c[0],r,c[1]],[h[0],r,h[1]],[u[0],r,u[1]],a))}function em(i,t,e,n,r,s,o,a,l,c){let f=new j(l),u=[];for(let g=0;g<c;g++){let m=g/c*Math.PI*2;u.push({y:s+Math.cos(m)*o,s:r+Math.sin(m)*o})}let h=(g,m)=>{let x=t(g,u[m%c].s);return[x[0],u[m%c].y,x[1]]},d=t(e,r),p=t(n,r),b=(g,m,x,v,y)=>{let M=(m[1]-g[1])*(x[2]-g[2])-(m[2]-g[2])*(x[1]-g[1]),w=(m[2]-g[2])*(x[0]-g[0])-(m[0]-g[0])*(x[2]-g[2]),A=(m[0]-g[0])*(x[1]-g[1])-(m[1]-g[1])*(x[0]-g[0]);M*v[0]+w*v[1]+A*v[2]<0?i.tri(g,x,m,y):i.tri(g,m,x,y)};for(let g=0;g<c;g++){let m=(g+.5)/c*Math.PI*2,x=Dt(a,.62+.4*Math.max(0,Math.cos(m))),v=t((e+n)/2,r+Math.sin(m)*o),y=t((e+n)/2,r),M=[v[0]-y[0],Math.cos(m)*o,v[1]-y[1]];b(h(e,g),h(n,g+1),h(n,g),M,x),b(h(e,g),h(e,g+1),h(n,g+1),M,x)}for(let[g,m,x]of[[e,p,d],[n,d,p]]){let v=t(g,r),y=[v[0],s,v[1]],M=[x[0]-m[0],0,x[1]-m[1]];for(let w=0;w<c;w++)b(y,h(g,w),h(g,w+1),M,f)}}function Ie(i,t,e,n,r,s,o={}){var p;let a=typeof n=="number"?()=>n:b=>Math.max(e+.002,n(b[0],b[1])),l=o.aoFrom??e,c=o.fold??Qt,f=b=>.5+.5*Math.min(1,Math.max(0,(b-l)/1.6)),u=(o.holes??[]).map(b=>wM(b)>0?[...b].reverse():b),h=u.length?[...t,...u.flat()]:t,d=o.topFace===!1&&!o.bottom?[]:pn(t,u);if(o.topFace!==!1){let b=new j(s);for(let[g,m,x]of d){let v=h[g],y=h[m],M=h[x];i.tri([v[0],a(v),v[1]],[M[0],a(M),M[1]],[y[0],a(y),y[1]],b,b,b,void 0,o.topFold??c)}}if(o.bottom){let b=Dt(r,.55);for(let[g,m,x]of d){let v=h[g],y=h[m],M=h[x];i.tri([v[0],e,v[1]],[y[0],e,y[1]],[M[0],e,M[1]],b,b,b,void 0,c)}}for(let b of[t,...u])for(let g=0;g<b.length;g++){let m=b[g],x=b[(g+1)%b.length],v=x[0]-m[0],y=x[1]-m[1],M=Math.hypot(v,y);if(M<1e-6||(p=o.skipSide)!=null&&p.call(o,m,x))continue;let A=.8+.28*((y/M*Rc[0]-v/M*Rc[1]+1)/2),_=a(m),R=a(x),S=Dt(r,f(e)*A),E=Dt(r,f(_)*A),I=Dt(r,f(R)*A);i.tri([m[0],e,m[1]],[m[0],_,m[1]],[x[0],R,x[1]],S,E,I,void 0,c),i.tri([m[0],e,m[1]],[x[0],R,x[1]],[x[0],e,x[1]],S,I,S,void 0,c)}}var U={body:1516088,bodyTop:1911623,fabric:1713732,fabricTop:2241114,cushion:2373217,wood:1647420,woodTop:2108747,white:1911110,whiteTop:2504542,metal:2767456,dark:725279,glass:1849938,plant:1191982,plantTop:1721664,pot:1910336,accent:2854835},mt=Dt(5995775,.3),Ot=Dt(5995775,.17),ee=Dt(3662079,.45),rr=class i{buf;lines;tf;mirrored;get colors(){return this.buf.c}constructor(t,e,n){this.buf=t,this.lines=e,this.tf=n,this.mirrored=hf(n)}rotated(t,e,n){let r=n*ae,s=Math.cos(r),o=Math.sin(r),a=this.tf;return new i(this.buf,this.lines,(l,c)=>a(t+(l-t)*s-(c-e)*o,e+(l-t)*o+(c-e)*s))}box(t,e,n,r,s,o,a,l=a,c=null){if(e-t<1e-4||o-s<1e-4||r-n<1e-4)return;let f=[this.tf(t,s),this.tf(t,o),this.tf(e,o),this.tf(e,s)];Ie(this.buf,cf(f),n,r,a,l,{aoFrom:0,bottom:n>.05}),c&&this.outline(f,n,r,c)}wedge(t,e,n,r,s,o,a,l,c=l,f=l){if(e-t<1e-4||r-n<1e-4||a-Math.min(s,o)<1e-4)return;let u=(g,m,x)=>{let v=this.tf(g,m);return[v[0],x,v[1]]},h=g=>g===n?s:o,d=u((t+e)/2,(n+r)/2,(a+(s+o)/2)/2),p=(g,m)=>{let x=[0,1,2].map(S=>g.reduce((E,I)=>E+I[S],0)/g.length),v=[x[0]-d[0],x[1]-d[1],x[2]-d[2]],[y,M,w]=[g[0],g[1],g[2]],A=[(M[1]-y[1])*(w[2]-y[2])-(M[2]-y[2])*(w[1]-y[1]),(M[2]-y[2])*(w[0]-y[0])-(M[0]-y[0])*(w[2]-y[2]),(M[0]-y[0])*(w[1]-y[1])-(M[1]-y[1])*(w[0]-y[0])],R=A[0]*v[0]+A[1]*v[1]+A[2]*v[2]<0?[...g].reverse():g;this.buf.tri(R[0],R[1],R[2],m),this.buf.tri(R[0],R[2],R[3],m)},b=Dt(l,1);p([u(t,n,a),u(e,n,a),u(e,r,a),u(t,r,a)],Dt(c,1)),p([u(t,n,h(n)),u(t,r,h(r)),u(e,r,h(r)),u(e,n,h(n))],Dt(f,.72)),p([u(t,r,h(r)),u(t,r,a),u(e,r,a),u(e,r,h(r))],b),p([u(t,n,h(n)),u(e,n,h(n)),u(e,n,a),u(t,n,a)],b),p([u(t,n,h(n)),u(t,n,a),u(t,r,a),u(t,r,h(r))],Dt(l,.86)),p([u(e,n,h(n)),u(e,r,h(r)),u(e,r,a),u(e,n,a)],Dt(l,.86))}loft(t,e,n,r,s,o=s,a=null){if(r-n<1e-4)return;let l=[this.tf(t[0],t[2]),this.tf(t[0],t[3]),this.tf(t[1],t[3]),this.tf(t[1],t[2])],c=[this.tf(e[0],e[2]),this.tf(e[0],e[3]),this.tf(e[1],e[3]),this.tf(e[1],e[2])];if(l!==cf(l)&&(l.reverse(),c.reverse()),tm(this.buf,l,c,n,r,s,o),a)for(let f=0;f<4;f++)this.line(c[f],c[(f+1)%4],r,r,a),this.line(l[f],c[f],n,r,a)}pad(t,e,n,r,s,o,a,l=a,c=.03,f=null){if(c=Math.min(c,(e-t)/2-.005,(o-s)/2-.005,(r-n)/2),c<.008)return this.box(t,e,n,r,s,o,a,l,f);this.loft([t+c,e-c,s+c,o-c],[t,e,s,o],n,n+c,a),r-n-2*c>.005&&this.box(t,e,n+c,r-c,s,o,a,a,f),this.loft([t,e,s,o],[t+c,e-c,s+c,o-c],r-c,r,a,l)}lyingCyl(t,e,n,r,s,o,a,l,c=l,f=12,u=null){let h=Math.min(a,s-r)/2;if(h<1e-4||o<1e-4)return;let d=(r+s)/2,p=t==="x"?e:n,b=t==="x"?n:e,g=(m,x)=>t==="x"?this.tf(m,x):this.tf(x,m);if(em(this.buf,g,p-o/2,p+o/2,b,d,h,l,c,f),u)for(let m of[p-o/2,p+o/2])for(let x=0;x<f;x++){let v=x/f*Math.PI*2,y=(x+1)/f*Math.PI*2;this.line(g(m,b+Math.sin(v)*h),g(m,b+Math.sin(y)*h),d+Math.cos(v)*h,d+Math.cos(y)*h,u)}}cyl(t,e,n,r,s,o,a=o,l=10,c=null){let f=[];for(let u=0;u<l;u++){let h=u/l*Math.PI*2;f.push(this.tf(t+Math.cos(h)*n,e+Math.sin(h)*n))}if(Ie(this.buf,cf(f),r,s,o,a,{aoFrom:0,bottom:r>.05}),c)for(let u=0;u<l;u++)this.line(f[u],f[(u+1)%l],s,s,c)}seg(t,e,n,r,s,o,a=mt){this.line(this.tf(t,n),this.tf(r,o),e,s,a)}line(t,e,n,r,s){this.lines.seg([t[0],n,t[1]],[e[0],r,e[1]],s,Qt)}outline(t,e,n,r){for(let s=0;s<4;s++){let o=t[s],a=t[(s+1)%4];this.line(o,a,n,n,r),this.line(o,o,e,n,r)}}};function hf(i){let t=i(0,0),e=i(1,0),n=i(0,1);return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])<0}function cf(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}function Ir(i,t,e,n,r,s,o=U.metal,a=!1){let l=t/2-s-r,c=e/2-s-r;for(let f of[-1,1])for(let u of[-1,1]){let h=f*l,d=u*c;a?i.loft([h-r*.3,h+r*.3,d-r*.3,d+r*.3],[h-r/2,h+r/2,d-r/2,d+r/2],0,n,o):i.box(h-r/2,h+r/2,0,n,d-r/2,d+r/2,o)}}function Uo(i,t,e,n,r,s,o,a=null,l=!1){let c=(e-t)/o;for(let f=1;f<o;f++){let u=t+c*f;i.seg(u,n,s,u,r,s,Ot)}for(let f=0;f<o;f++){let u=t+c*(f+.5),h=a??r-.08;if(l)i.seg(u-Math.min(.1,c/4),h,s+.012,u+Math.min(.1,c/4),h,s+.012,ee);else{let d=o>1?u+(f%2?-c/2+.06:c/2-.06):u+c/2-.06;i.seg(d,h-.08,s+.012,d,h+.08,s+.012,ee)}}}function nm(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.min(.2,t*.12),f=n*.5,u=Math.min(.24,e*.28);Ir(i,t,e,.07,.05,.05,U.wood,!0),i.pad(s,o,.07,f-.08,a+.02,l,U.fabric,U.fabricTop,.04,mt),i.loft([s,o,a,a+u],[s+.01,o-.01,a,a+u*.5],f-.08,n,U.fabric,U.fabricTop,mt),i.pad(s,s+c,f-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,mt),i.pad(o-c,o,f-.08,n*.72,a+.02,l-.02,U.fabric,U.fabricTop,.04,mt);let d=(o-c-(s+c))/r;for(let p=0;p<r;p++){let b=s+c+d*p+.02,g=b+d-.04;i.pad(b,g,f-.08,f+.05,a+u+.02,l-.06,U.cushion,U.cushion,.04),i.loft([b+.01,g-.01,a+u*.55,a+u+.14],[b+.03,g-.03,a+u*.4,a+u*.4+.06],f+.03,n*.93,U.cushion)}}function im(i,t,e,n,r){let s=-t/2,o=t/2,a=-e/2,l=e/2,c=Math.max(.3,Math.min(.95,e*.5,t*(r?.34:.45))),f=Math.min(.24,c*.28),u=Math.min(.2,c*.24),h=n*.5,d=n*.72,p=r?[-1,1]:[-1],b=(_,R)=>i.loft([_-.015,_+.015,R-.015,R+.015],[_-.025,_+.025,R-.025,R+.025],0,.07,U.wood);b(s+.06,a+.06),b(o-.06,a+.06),r||b(o-.06,a+c-.06);for(let _ of p)b(_*(t/2-.06),l-.06),b(_*(t/2-c+.06),l-.06);i.pad(s,o,.07,h-.08,a+.02,a+c,U.fabric,U.fabricTop,.04,mt);for(let _ of p){let[R,S]=_<0?[s+.02,s+c]:[o-c,o-.02];i.pad(R,S,.07,h-.08,a+c-.02,l,U.fabric,U.fabricTop,.04,mt)}i.loft([s,o,a,a+f],[s+.01,o-.01,a,a+f*.5],h-.08,n,U.fabric,U.fabricTop,mt);for(let _ of p)_<0?i.loft([s,s+f,a+f,l],[s,s+f*.5,a+f,l-.01],h-.08,n,U.fabric,U.fabricTop,mt):i.loft([o-f,o,a+f,l],[o-f*.5,o,a+f,l-.01],h-.08,n,U.fabric,U.fabricTop,mt);for(let _ of p){let[R,S]=_<0?[s+f,s+c]:[o-c,o-f];i.pad(R,S,h-.08,d,l-u,l,U.fabric,U.fabricTop,.04,mt)}r||i.pad(o-u,o,h-.08,d,a+.02,a+c-.02,U.fabric,U.fabricTop,.04,mt);let g=s+f,m=r?o-f:o-u,x=Math.max(1,Math.round((m-g)/.62)),v=(m-g)/x;for(let _=0;_<x;_++){let R=g+v*_+.02,S=R+v-.04;i.pad(R,S,h-.08,h+.05,a+f+.02,a+c-.04,U.cushion,U.cushion,.04),i.loft([R+.01,S-.01,a+f*.55,a+f+.14],[R+.03,S-.03,a+f*.4,a+f*.4+.06],h+.03,n*.93,U.cushion)}let y=a+c,M=l-u;if(M-y<.2)return;let w=Math.max(1,Math.round((M-y)/.62)),A=(M-y)/w;for(let _ of p)for(let R=0;R<w;R++){let S=y+A*R+.02,E=S+A-.04;_<0?(i.pad(s+f+.02,s+c-.04,h-.08,h+.05,S,E,U.cushion,U.cushion,.04),i.loft([s+f*.55,s+f+.14,S+.01,E-.01],[s+f*.4,s+f*.4+.06,S+.03,E-.03],h+.03,n*.93,U.cushion)):(i.pad(o-c+.04,o-f-.02,h-.08,h+.05,S,E,U.cushion,U.cushion,.04),i.loft([o-f-.14,o-f*.55,S+.01,E-.01],[o-f*.4-.06,o-f*.4,S+.03,E-.03],h+.03,n*.93,U.cushion))}}function TM(i,t,e,n){let r=-e/2,s=e/2,o=-t/2,a=t/2,l=Math.min(.32,n*.36);Ir(i,t,e,.08,.06,.03,U.wood,!0),i.box(o,a,.08,l,r+.06,s,U.wood,U.woodTop,mt),i.pad(o+.03,a-.03,l,l+.2,r+.08,s-.03,U.white,U.whiteTop,.03),i.box(o,a,.08,n-.05,r,r+.07,U.wood,U.woodTop,mt),i.box(o,a,n-.05,n,r,r+.09,U.wood,U.woodTop,Ot);let c=l+.2,f=r+(e-.1)*.36;i.pad(o+.01,a-.01,c-.1,c+.05,f,s-.01,U.cushion,U.fabricTop,.025,Ot),i.lyingCyl("x",0,f+.05,c-.02,c+.09,t-.02,.1,U.cushion,U.fabricTop,8);let u=t>1.2?2:1,h=(t-.2)/u;for(let d=0;d<u;d++){let p=o+.1+h*d,b=r+.12,g=Math.min(.42,e*.2),m=.1;i.loft([p+.03+m,p+h-.03-m,b+m*.5,b+g-m*.5],[p+.03,p+h-.03,b,b+g],c,c+.06,U.whiteTop),i.loft([p+.03,p+h-.03,b,b+g],[p+.03+m,p+h-.03-m,b+m*.5,b+g-m*.5],c+.06,c+.12,U.whiteTop,U.whiteTop,Ot)}}function EM(i,t,e,n){let r=Math.min(.46,n*.52);Ir(i,t,e,r-.04,.035,.02,U.wood,!0),i.box(-t/2,t/2,r-.04,r,-e/2,e/2,U.wood,U.woodTop,mt),i.pad(-t/2+.02,t/2-.02,r,r+.04,-e/2+.05,e/2-.03,U.cushion,U.cushion,.015),i.loft([-t/2,t/2,-e/2+.02,-e/2+.07],[-t/2+.02,t/2-.02,-e/2,-e/2+.03],r,n,U.wood,U.woodTop,mt)}function AM(i,t,e,n){Ir(i,t,e,n-.04,.06,.05,U.wood,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,ee),i.box(-t/2+.08,t/2-.08,n-.1,n-.04,-e/2+.08,e/2-.08,U.body)}function RM(i,t,e,n){let r=-t/2,s=t/2;i.box(r,s,n-.035,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(r,r+.03,0,n-.035,-e/2+.03,e/2-.03,U.metal);let o=Math.min(.42,t*.32);i.box(s-o,s,0,n-.035,-e/2+.03,e/2-.02,U.body,U.bodyTop,mt);let a=e/2-.02;for(let l of[n*.35,n*.66])i.seg(s-o,l,a,s,l,a,Ot);for(let l of[n*.2,n*.5,n*.82])i.seg(s-o/2-.07,l,a+.012,s-o/2+.07,l,a+.012,ee);i.box(-.3,.3,n+.08,n+.42,-e/2+.08,-e/2+.11,U.dark,U.dark,ee),i.box(-.03,.03,n,n+.1,-e/2+.09,-e/2+.13,U.metal)}function ir(i,t,e,n,r,s=null,o=!1){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),Uo(i,-t/2,t/2,.08,n,e/2-.02,r,s,o)}function CM(i,t,e,n){i.box(-t/2,-t/2+.025,0,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(t/2-.025,t/2,0,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.025,t/2-.025,0,n,-e/2,-e/2+.015,U.body);let s=Math.max(2,Math.round(n/.38));for(let o=0;o<=s;o++){let a=Math.min(n-.025,n/s*o);if(i.box(-t/2+.025,t/2-.025,a,a+.025,-e/2+.015,e/2,U.wood,U.woodTop,Ot),o<s){let l=-t/2+.025+.04,c=o*3;for(;l<t/2-.025-.12;){let f=.03+c*7%5*.008,u=n/s-.025-.08-c*5%4*.025;c*11%7!==0&&i.box(l,l+f,a+.025,a+.025+u,-e/2+.04,e/2-.05,c%3?U.fabric:U.cushion,U.fabricTop),l+=f+.006,c++}}}}function PM(i,t,e,n){let r=Math.max(1,Math.round(t/.6));ir(i,t,e-.02,n-.04,r,n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function IM(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.white,U.whiteTop,mt);let r=n*.62;i.seg(-t/2,r,e/2,t/2,r,e/2,Ot);let s=t/2-.06;i.seg(s,r+.08,e/2+.015,s,r+.4,e/2+.015,ee),i.seg(s,r-.4,e/2+.015,s,r-.08,e/2+.015,ee)}var Pc=(i,t)=>Dt(parseInt(i.slice(1),16),t).getHex(),No=!1;function am(i){No=i}function lm(i,t){for(let e=t;e+2<i.length;e+=3){let n=Math.max(i[e],i[e+1],i[e+2]),r=Math.min(i[e],i[e+1],i[e+2]);if(n<.1||(n-r)/n<.45||n>=.62)continue;let s=.62/n;i[e]*=s,i[e+1]*=s,i[e+2]*=s}}function LM(i,t,e,n,r,s){let o=h=>{let d=Math.max(...new j(h).toArray());return Pc(h,d>.05?Math.max(1,.62/d):1)},a=No?o(s[0]):Pc(s[0],.55),l=No?o(s[1]):Pc(s[1],.8),c=Pc(s[1],1);if(r==="bag"){i.loft([-t*.42,t*.42,-e*.4,e*.4],[-t/2,t/2,-e/2,e/2],0,n*.55,a,a,Ot),i.loft([-t/2,t/2,-e/2,e/2],[-t*.12,t*.12,-e*.12,e*.12],n*.55,n*.9,l,l,Ot),i.cyl(0,0,Math.min(t,e)*.1,n*.9,n,c,c,8);return}if(r==="caddy"){i.loft([-t*.45,t*.45,-e*.45,e*.45],[-t/2,t/2,-e/2,e/2],0,n*.85,a,a,mt),i.box(-t/2,t/2,n*.85,n*.95,-e/2,e/2,l,c,Ot),i.box(-t*.42,-t*.36,n*.95,n,-.01,.01,l),i.box(t*.36,t*.42,n*.95,n,-.01,.01,l),i.box(-t*.42,t*.42,n*.98,n,-.01,.01,l);return}if(r==="underground"){let h=Math.min(t,e)*.32;i.cyl(0,0,h,0,n*.9,a,a,16,mt),i.cyl(0,0,h*1.08,n*.9,n,l,c,16,Ot),i.box(-h*.5,h*.5,n*.62,n*.8,h*.7,h*1.02,U.dark),i.box(-t/2,t/2,0,.02,-e/2,e/2,U.metal,U.metal,Ot);return}if(r==="bin1100"){for(let d of[-1,1])for(let p of[-1,1])i.cyl(d*(t/2-.12),p*(e/2-.12),.05,0,.14,U.dark,U.dark,8);i.loft([-t/2+.06,t/2-.06,-e/2+.06,e/2-.08],[-t/2,t/2,-e/2,e/2],.14,n-.1,a,a,mt),i.loft([-t/2,t/2,-e/2,0],[-t/2,t/2,-e/2,0],n-.1,n,l,c,Ot),i.loft([-t/2,t/2,0,e/2],[-t/2,t/2,0,e/2-.05],n-.1,n-.03,l,c,Ot);return}let f=Math.min(.2,n*.19),u=-e/2;for(let h of[-1,1])i.lyingCyl("x",h*(t/2-.05),u+f/2+.01,0,f,.05,f,U.dark,U.metal,12);i.loft([-t*.42,t*.42,u+.07,e/2-.05],[-t/2+.01,t/2-.01,u+.05,e/2-.01],.03,n-.05,a,a,mt),i.box(-t/2,t/2,n-.05,n,u+.03,e/2,l,c,Ot),i.box(-t*.42,t*.42,n-.1,n-.02,u,u+.04,l,c),r==="multi"&&(i.seg(-t/2,n+.002,(u+e/2)/2,t/2,n+.002,(u+e/2)/2,ee),i.seg(0,n*.25,e/2-.01,0,n-.06,e/2-.01,Ot))}function FM(i,t,e,n,r){let s=U.metal,o=Dt(U.metal,1.25).getHex(),a=Dt(U.metal,.85).getHex();if(r==="pole"){let l=Math.min(.09,t*.4),c=Math.min(.24,n*.22);i.box(-l/2,l/2,0,n-c,-l/2,l/2,U.wood,U.woodTop,Ot),i.box(-t/2,t/2,n-c,n-c*.45,-e/2,e/2,s,o,mt),i.lyingCyl("z",0,0,n-c*.9,n,e,t,s,o,14,mt),i.box(t/2,t/2+.015,n-c*.4,n+.08,-e*.1,-e*.04,9051164),i.box(t/2,t/2+.015,n+.02,n+.08,-e*.04,e*.12,9051164);return}if(r==="pillar"){let l=Math.min(.4,n*.3);i.box(-t*.2,t*.2,0,n-l,-e*.2,e*.2,U.dark,U.dark,Ot),i.lyingCyl("z",0,0,n-l-.2,n-l-.04,e*.9,.16,s,o,12,Ot),i.loft([-t/2,t/2,-e/2,e/2],[-t/2,t/2,-e/2,e/2-.05],n-l,n,s,o,mt),i.box(-t*.32,t*.32,n-.1,n-.08,e/2-.05,e/2-.04,U.dark);return}if(r==="parcel"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt),i.box(-t/2+.04,t/2-.04,.08,n*.72,e/2,e/2+.012,a,o,Ot),i.box(-t*.3,t*.3,n*.82,n*.86,e/2,e/2+.01,U.dark);return}if(r==="bank"){i.box(-t/2,t/2,0,n,-e/2,e/2,s,o,mt);for(let l=0;l<3;l++)for(let c=0;c<2;c++){let f=-t/2+t/3*l+.015,u=n/2*c+.015;i.box(f,f+t/3-.03,u,u+n/2-.03,e/2,e/2+.01,a,o,Ot),i.box(f+.04,f+t/3-.07,u+n/2-.09,u+n/2-.07,e/2+.01,e/2+.014,U.dark)}return}i.box(-t/2,t/2,0,n*.8,-e/2,e/2,s,o,mt),i.loft([-t/2,t/2,-e/2,e/2+.02],[-t/2,t/2,-e/2,-e/2+.02],n*.8,n,s,o,mt),i.box(-t*.36,t*.36,n*.66,n*.7,e/2,e/2+.008,U.dark)}function DM(i,t,e,n){let r=e/2-cm;i.box(-t/2,t/2,.02,n,-e/2,r,U.body,U.bodyTop,mt),i.box(-t/2+.05,t/2-.05,0,.02,-e/2+.05,r-.05,U.dark);for(let s of[.35,.7,1.05,1.4])s>n-.15||(i.seg(-t/2+.03,s,r+.001,-.03,s,r+.001,Ot),i.seg(.03,s,r+.001,t/2-.03,s,r+.001,Ot))}var cm=.06;function um(i,t,e,n){let r=t.rotation*ae,s=Math.cos(r),o=Math.sin(r),a=Math.max(0,Math.min(1,n)),l=(C,L,T)=>[t.x+C*s-T*o,L,t.z+C*o+T*s],c=(C,L,T,P,N)=>{i.tri(C,L,T,N),i.tri(C,T,P,N),i.tri(C,T,L,N),i.tri(C,P,T,N)},f=(C,L,T,P)=>{let N=l(C[0],C[1],C[2]),F=l(L[0],L[1],L[2]),z=F[0]-N[0],B=F[1]-N[1],V=F[2]-N[2],H=Math.hypot(z,B,V)||1,J=[z/H,B/H,V/H],tt=Math.abs(J[1])>.9?[1,0,0]:[0,1,0],ot=[J[1]*tt[2]-J[2]*tt[1],J[2]*tt[0]-J[0]*tt[2],J[0]*tt[1]-J[1]*tt[0]],X=Math.hypot(ot[0],ot[1],ot[2])||1,q=[ot[0]/X*T,ot[1]/X*T,ot[2]/X*T],Y=[J[1]*q[2]-J[2]*q[1],J[2]*q[0]-J[0]*q[2],J[0]*q[1]-J[1]*q[0]],st=[[1,1],[-1,1],[-1,-1],[1,-1]],rt=(lt,gt)=>[lt[0]+q[0]*st[gt][0]+Y[0]*st[gt][1],lt[1]+q[1]*st[gt][0]+Y[1]*st[gt][1],lt[2]+q[2]*st[gt][0]+Y[2]*st[gt][1]];for(let lt=0;lt<4;lt++){let gt=(lt+1)%4;i.tri(rt(N,lt),rt(F,lt),rt(F,gt),P),i.tri(rt(N,lt),rt(F,gt),rt(N,gt),P)}},u=(C,L,T,P,N,F,z,B)=>{c(l(C,P,N),l(L,P,N),l(L,P,F),l(C,P,F),B),c(l(C,T,F),l(L,T,F),l(L,P,F),l(C,P,F),z),c(l(C,T,N),l(L,T,N),l(L,T,F),l(C,T,F),z),c(l(C,T,N),l(C,T,F),l(C,P,F),l(C,P,N),z),c(l(L,T,N),l(L,T,F),l(L,P,F),l(L,P,N),z)},h=new j(U.body),d=new j(U.bodyTop),p=new j(U.accent),b=new j(1929098),g=new j(995141),m=(C,L,T,P,N)=>{let F=(z,B,V)=>[z[0]+(B[0]-z[0])*V,z[1]+(B[1]-z[1])*V,z[2]+(B[2]-z[2])*V];for(let z=0;z<N;z++){let B=F(C,L,z/N),V=F(C,L,(z+1)/N),H=F(T,P,(z+1)/N),J=F(T,P,z/N);c(l(B[0],B[1],B[2]),l(V[0],V[1],V[2]),l(H[0],H[1],H[2]),l(J[0],J[1],J[2]),z%2?b:g)}},x=t.w/2,v=-t.d/2,y=Math.max(.12,Math.min(.3,t.h)),M=Math.max(4,Math.round(t.w/.3)),w=(t.awning_pitch??12)*Math.PI/180,A=(C,L)=>{t.awning_valance!==!1&&m([-x+.04,C,L+.01],[x-.04,C,L+.01],[-x+.04,C-.2,L+.01],[x-.04,C-.2,L+.01],M)},_=t.variant??"arm";if(_==="side"){let C=e,L=.05,T=0,P=-x+.08+a*(t.w-.16);u(-x,-x+.1,0,C+.05,T-.05,T+.05,h,d),u(x-.06,x,0,C+.05,T-.03,T+.03,h,d),a>.01&&m([-x+.1,C,T],[-x+.1,L,T],[P,C,T],[P,L,T],Math.max(4,Math.round((C-L)/.3))),f([P,L,T],[P,C,T],.02,p);return}if(_==="vertical"){let C=v,L=Math.min(t.d/2,v+y);u(-x,x,e,e+y,C,L,h,d);let T=(C+L)/2;for(let N of[-x+.02,x-.02])f([N,.02,T],[N,e,T],.02,p);let P=e-a*Math.max(0,e-.04);a>.01&&m([-x+.04,e,T],[x-.04,e,T],[-x+.04,P,T],[x-.04,P,T],M),f([-x+.03,P,T],[x-.03,P,T],.025,p);return}if(_==="pergola"){let C=t.d/2-.05,L=e+y,T=L-(C-v)*Math.tan(w);u(-x,x,e,L,v,v+y,h,d);for(let F of[-x+.05,x-.05])f([F,L,v+y],[F,T,C],.035,p),f([F,0,C],[F,T,C],.045,h);f([-x+.05,T,C],[x-.05,T,C],.035,p);let P=v+y+a*(C-v-y),N=L-(P-v)*Math.tan(w)+.04;a>.01&&m([-x+.08,L+.04,v+y],[x-.08,L+.04,v+y],[-x+.08,N,P],[x-.08,N,P],M),f([-x+.08,N,P],[x-.08,N,P],.025,p);return}let R=v,S=v+y;u(-x,x,e,e+y,R,S,h,d);let E=[S-.02,e+y*.35];if(_==="drop"){let C=Math.max(.3,t.d-y),L=[S,E[1]-C],T=a*(Math.PI/2+w),P=[L[0]+Math.sin(T)*C,L[1]+Math.cos(T)*C];for(let N of[-x+.08,x-.08])f([N,L[1],L[0]],[N,P[1],P[0]],.018,p);a>.01&&m([-x+.04,E[1],E[0]],[x-.04,E[1],E[0]],[-x+.04,P[1],P[0]],[x-.04,P[1],P[0]],M),f([-x+.02,P[1],P[0]],[x-.02,P[1],P[0]],.03,p),a>.05&&A(P[1],P[0]);return}let I=Math.max(0,t.d-y)*a,O=[E[0]+I,E[1]-I*Math.tan(w)];if(I>.01){m([-x+.04,E[1],E[0]],[x-.04,E[1],E[0]],[-x+.04,O[1],O[0]],[x-.04,O[1],O[0]],M);let C=Math.max(.3,(t.d-y)/2+.05);for(let L of[-1,1]){let T=L*(x-.12),P=[T,e+.02,S-.04],N=[T,O[1]-.02,O[0]],F=Math.hypot(N[2]-P[2],N[1]-P[1]),z=Math.sqrt(Math.max(0,C*C-(F/2)**2)),B=[T-L*Math.min(z,x-.15),(P[1]+N[1])/2,(P[2]+N[2])/2];f(P,B,.018,p),f(B,N,.018,p)}}f([-x+.02,O[1],O[0]],[x-.02,O[1],O[0]],.03,p),I>.05&&A(O[1],O[0])}function hm(i,t,e,n,r){let s=i.p.length;OM(i,t,e,n,r),t.mirror&&pf(i,s)}function OM(i,t,e,n,r){let s=t.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=t.mirror?-1:1,c=(y,M)=>[t.x+l*y*o-M*a,t.z+l*y*a+M*o],f=e+.05,u=e+t.h-.02,h=new j(.75,.1,.14),d=new j(U.dark),p=new j(U.accent),b=t.w/2-.006,g=(y,M,w)=>{let A=w/m,_=new j(2043212).lerp(h,A),R=new j(U.body).lerp(h,A*.8),S=Math.cos(w),E=Math.sin(w),I=(L,T)=>c(y+M*(L*S-T*E),t.d/2+L*E+T*S),O=(L,T,P,N)=>{let[F,z,B,V]=L;i.tri([F[0],T,F[1]],[z[0],T,z[1]],[B[0],P,B[1]],N),i.tri([F[0],T,F[1]],[B[0],P,B[1]],[V[0],P,V[1]],N)},C=(L,T,P,N,F,z,B,V=B)=>{let H=[I(L,z),I(T,z),I(T,F),I(L,F)];O([H[0],H[1],H[1],H[0]],P,N,V),O([H[3],H[2],H[2],H[3]],P,N,B),O([H[0],H[3],H[3],H[0]],P,N,B),O([H[1],H[2],H[2],H[1]],P,N,B),O([H[0],H[1],H[2],H[3]],N,N,B),O([H[3],H[2],H[1],H[0]],P,P,B)};return C(0,b,f,u,-cm,0,R,_),C(b-.05,b-.03,e+t.h*.45,e+t.h*.75,.005,.025,p),C},m=1.83;g(-t.w/2,1,n*m)(.12,.3,e+t.h*.5,e+t.h*.68,.001,.005,d),g(t.w/2,-1,r*m)(.06,b-.06,e+t.h*.52,e+t.h*.86,.001,.005,d)}function NM(i,t,e,n){ir(i,t,e-.02,n-.04,1,n-.24,!0),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.dark,U.dark,mt);for(let[r,s,o]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let a=r*t/.6,l=s*e/.62;i.cyl(a,l,o,n,n+.004,U.dark,1451583,12,ee)}}function UM(i,t,e,n){ir(i,t,e-.02,n-.04,Math.max(1,Math.round(t/.45)),n-.2);let r=Math.min(.5,t-.2);i.box(-t/2,-r/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.box(r/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.box(-r/2,r/2,n-.04,n,-e/2,-e/2+.1,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.04,n,e/2-.08,e/2,U.whiteTop,U.whiteTop),i.box(-r/2,r/2,n-.2,n-.17,-e/2+.1,e/2-.08,U.metal,U.metal,ee),i.cyl(0,-e/2+.05,.02,n,n+.28,U.metal,U.metal,8),i.box(-.015,.015,n+.24,n+.28,-e/2+.05,-e/2+.22,U.metal)}function BM(i,t,e,n){i.box(-t/2,t/2,0,n-.02,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2,t/2,n-.02,n,-e/2,-e/2+.07,U.whiteTop),i.box(-t/2,t/2,n-.02,n,e/2-.07,e/2,U.whiteTop),i.box(-t/2,-t/2+.07,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(t/2-.07,t/2,n-.02,n,-e/2+.07,e/2-.07,U.whiteTop),i.box(-t/2+.07,t/2-.07,n-.03,n-.02,-e/2+.07,e/2-.07,U.glass,U.glass,ee),i.cyl(-t/2+.04,0,.02,n,n+.12,U.metal,U.metal,8)}function kM(i,t,e,n){i.box(-t/2,t/2,0,.05,-e/2,e/2,U.whiteTop,U.whiteTop,mt),i.cyl(0,0,.04,.05,.052,U.metal,U.metal,8);for(let[r,s,o,a]of[[-t/2,e/2,t/2,e/2],[t/2,-e/2,t/2,e/2]])i.seg(r,.05,s,o,.05,a,ee),i.seg(r,n,s,o,n,a,ee),i.seg(o,.05,a,o,n,a,ee);i.cyl(-t/2+.06,-e/2+.06,.015,.05,n-.05,U.metal,U.metal,6),i.cyl(-t/2+.2,-e/2+.2,.1,n-.08,n-.06,U.metal,U.metal,12,ee)}function zM(i,t,e,n){let r=Math.min(.18,e*.3);i.box(-t/2,t/2,.45,n,-e/2,-e/2+r,U.white,U.whiteTop,mt),i.box(-t*.3,t*.3,0,.36,-e/2+r-.02,e/2-.12,U.white,U.whiteTop),i.cyl(0,e/2-.26,Math.min(t/2,.19),.36,.41,U.white,U.whiteTop,12,mt),i.box(-t/2+.02,t/2-.02,.41,.43,-e/2+r,-e/2+r+.05,U.whiteTop)}function VM(i,t,e,n){ir(i,t,e-.02,n-.12,t>.8?2:1,n-.3),i.box(-t/2,t/2,n-.12,n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2+.07,t/2-.07,n-.005,n,-e/2+.12,e/2-.06,U.glass,U.glass,ee),i.cyl(0,-e/2+.06,.018,n,n+.2,U.metal,U.metal,8),i.box(-t/2+.04,t/2-.04,n+.35,n+1,-e/2,-e/2+.02,U.glass,U.glass,ee)}function GM(i,t,e,n){ir(i,t,e,n,Math.max(2,Math.round(t/.6)),n*.55,!0);let r=Math.min(t*.8,1.45),s=r*.56;i.box(-.1,.1,n,n+.02,-e/2+.08,-e/2+.24,U.metal),i.box(-.02,.02,n+.02,n+.12,-e/2+.14,-e/2+.18,U.metal),i.box(-r/2,r/2,n+.1,n+.1+s,-e/2+.12,-e/2+.16,U.dark,U.dark,ee)}function HM(i,t,e,n){let r=Math.min(t,e)/2,s=Math.min(.4,n*.34);i.cyl(0,0,r*.62,0,s,U.pot,U.pot,10,mt),i.cyl(0,0,r*.08,s,n*.55,U.wood,U.wood,6);let o=4;for(let a=0;a<o;a++){let l=a/(o-1),c=r*(.95-.55*l),f=s+(n-s)*(.18+.2*a);i.cyl(Math.sin(a*2.1)*.03,Math.cos(a*1.7)*.03,c,f,f+(n-s)*.16,U.plant,U.plantTop,8,a===o-1?Ot:null)}}function WM(i,t,e){i.box(-t/2,t/2,0,.012,-e/2,e/2,U.fabric,U.fabricTop);let n=Math.min(.12,Math.min(t,e)*.08);for(let[r,s,o,a]of[[-t/2+n,-e/2+n,t/2-n,-e/2+n],[t/2-n,-e/2+n,t/2-n,e/2-n],[t/2-n,e/2-n,-t/2+n,e/2-n],[-t/2+n,e/2-n,-t/2+n,-e/2+n]])i.seg(r,.014,s,o,.014,a,mt)}var XM=.18;function YM(i,t,e,n,r=!1){let s=Math.max(3,Math.round(n/.18)),o=n/s,a=e/s,l=h=>Math.max(0,o*((e/2-h)/a-1)-XM);for(let h=0;h<s;h++){let d=e/2-a*h,p=d-a,b=o*(h+1);r?i.wedge(-t/2,t/2,p,d,l(p),l(d),b,U.wood,U.woodTop,U.body):i.box(-t/2,t/2,0,b,p,d,U.wood,U.woodTop),i.seg(-t/2,b,d,t/2,b,d,mt)}if(r)for(let h of[-t/2,t/2])i.seg(h,l(e/2-a),e/2-a,h,l(-e/2),-e/2,Ot);i.seg(-t/2,0,e/2,-t/2,o,e/2,mt);for(let h of[-t/2,t/2])i.seg(h,o,e/2,h,n,-e/2+a,Ot);let c=.9,f=t/2-.03,u=Math.max(1,s-4);i.seg(f,o+c,e/2-a/2,f,o*u+c,e/2-a*(u-.5),ee);for(let h=0;h<u;h+=3){let d=e/2-a*(h+.5),p=o*(h+1);i.seg(f,p,d,f,p+c,d,Ot)}}function qM(i,t,e,n){let{k:r,steps1:s,steps2:o,fw:a,landing:l,run:c,rise:f}=u0(t,e,n),u=-t/2,h=-t/2+a,d=t/2-a,p=t/2,b=-e/2+l;for(let A=0;A<s;A++){let _=e/2-c*A,R=f*(A+1);i.box(u,h,0,R,_-c,_,U.wood,U.woodTop),i.seg(u,R,_,h,R,_,mt)}i.seg(u,0,e/2,u,f,e/2,mt);let g=f*r,m=.2;i.box(u,h,0,g,-e/2,b,U.wood,U.woodTop),i.box(h,p,Math.max(0,g-m),g,-e/2,b,U.wood,U.woodTop),i.seg(u,g,b,h,g,b,mt);for(let A=0;A<o;A++){let _=b+c*A,R=f*(r+1+A);i.box(d,p,Math.max(0,R-f-m),R,_,_+c,U.wood,U.woodTop),i.seg(d,R,_,p,R,_,mt)}i.seg(u,f,e/2,u,g,b,Ot),i.seg(p,g,b,p,n,b+c*(o-1),Ot);let x=.9,v=h-.03,y=d+.03,M=b-.03,w=Math.max(1,o-4);i.seg(v,f+x,e/2-c/2,v,g+x,M,ee),i.seg(v,g+x,M,y,g+x,M,ee),i.seg(y,g+x,M,y,f*(r+w)+x,b+c*(w-.5),ee);for(let A=0;A<s;A+=3){let _=e/2-c*(A+.5);i.seg(v,f*(A+1),_,v,f*(A+1)+x,_,Ot)}for(let A of[v,y])i.seg(A,g,M,A,g+x,M,Ot);for(let A=2;A<w;A+=3){let _=b+c*(A+.5);i.seg(y,f*(r+1+A),_,y,f*(r+1+A)+x,_,Ot)}}function $M(i,t,e,n){Ir(i,t,e,.12,.03,.04,U.metal),i.box(-t/2,t/2,.12,n,-e/2,e/2-.02,U.wood,U.woodTop,mt),Uo(i,-t/2,t/2,.12,n,e/2-.02,Math.max(2,Math.round(t/.45)),n-.1,!0)}function ZM(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2-.02,U.wood,U.woodTop,mt),i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.06,U.dark);let r=Math.max(3,Math.round((n-.06)/.22)),s=e/2-.02;for(let o=1;o<r;o++){let a=.06+(n-.06)/r*o;i.seg(-t/2,a,s,t/2,a,s,Ot)}for(let o=0;o<r;o++){let a=.06+(n-.06)/r*(o+.5);i.seg(-.08,a,s+.012,.08,a,s+.012,ee)}}function KM(i,t,e,n){i.box(-t/2,t/2,0,.45,-e/2,e/2,U.wood,U.woodTop,mt),Uo(i,-t/2,t/2,.02,.45,e/2,Math.max(2,Math.round(t/.5)),.38,!0),i.box(-t/2,t/2,.45,n,-e/2,-e/2+.03,U.body,U.bodyTop,mt),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.wood,U.woodTop,mt);let r=Math.max(2,Math.round(t/.25));for(let s=0;s<r;s++){let o=-t/2+t/r*(s+.5);i.box(o-.015,o+.015,n-.32,n-.28,-e/2+.03,-e/2+.1,U.metal,U.metal)}}function rm(i,t,e,n,r){let o=Math.min(.5,r?e*.4:e),a=.08;i.box(-t/2,t/2,0,.45-.06,-e/2,-e/2+o,U.wood,U.woodTop,mt),i.box(-t/2,t/2,0,n,-e/2,-e/2+a,U.wood,U.woodTop,mt),i.box(-t/2+(r?o:.02),t/2-.02,.45-.06,.45+.02,-e/2+a,-e/2+o,U.cushion,U.cushion,Ot),r&&(i.box(-t/2,-t/2+o,0,.45-.06,-e/2+o,e/2,U.wood,U.woodTop,mt),i.box(-t/2,-t/2+a,0,n,-e/2+a,e/2,U.wood,U.woodTop,mt),i.box(-t/2+a,-t/2+o,.45-.06,.45+.02,-e/2+a,e/2-.02,U.cushion,U.cushion,Ot))}function JM(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.8,0,.02,U.metal,U.metal,12),i.cyl(0,0,.025,.02,n-.05,U.metal,U.metal,6),i.cyl(0,0,r*.75,n*.35,n*.35+.015,U.metal,U.metal,12,Ot),i.cyl(0,0,r,n-.05,n,U.cushion,U.fabricTop,14,mt)}function jM(i,t,e,n){let r=Math.min(t,e)/2;i.box(-r,r,.04,.08,-.03,.03,U.metal),i.box(-.03,.03,.04,.08,-r,r,U.metal),i.cyl(0,0,.06,.02,.1,U.dark,U.dark,8),i.cyl(0,0,.025,.1,.44,U.metal,U.metal,6),i.box(-r*.75,r*.75,.44,.52,-r*.7,r*.75,U.fabric,U.cushion,mt),i.box(-r*.7,r*.7,.58,n,-r*.78,-r*.62,U.fabric,U.fabricTop,mt),i.box(-.03,.03,.5,.62,-r*.72,-r*.62,U.metal)}function QM(i,t,e,n){Ir(i,t,e,.08,.04,.05,U.wood),i.box(-t/2,t/2,.08,n,-e/2,e/2,U.fabric,U.cushion,mt)}function t2(i,t,e,n){i.box(-t/2,t/2,1.45,1.45+n,-e/2,e/2-.02,U.body,U.bodyTop,mt),Uo(i,-t/2,t/2,1.45,1.45+n,e/2-.02,Math.max(1,Math.round(t/.5)),1.45+.08)}function e2(i,t,e,n){i.box(-t/2,t/2,.02,n,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark);let r=e/2-.02;i.box(-t/2+.03,t/2-.03,.85,1.45,r,r+.01,U.dark,U.dark,ee),i.seg(-t/2+.08,1.4,r+.02,t/2-.08,1.4,r+.02,ee);for(let s of[.85,1.45])i.seg(-t/2,s,r,t/2,s,r,Ot);i.seg(t/2-.06,.5,r+.012,t/2-.06,.7,r+.012,ee),i.seg(t/2-.06,1.6,r+.012,t/2-.06,1.8,r+.012,ee)}function n2(i,t,e,n){let r=e-.3;i.box(-t/2+.05,t/2-.05,.08,n-.04,-e/2+.02,-e/2+r,U.body,U.bodyTop,mt),i.box(-t/2+.07,t/2-.07,0,.08,-e/2+.04,-e/2+r-.04,U.dark),Uo(i,-t/2+.05,t/2-.05,.08,n-.04,-e/2+r,Math.max(2,Math.round(t/.6)),n-.2),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function i2(i,t,e,n){i.box(-t/2,t/2,.02,n-.04,-e/2,e/2-.02,U.body,U.bodyTop,mt),i.box(-t/2+.02,t/2-.02,0,.08,-e/2+.02,e/2-.06,U.dark),i.seg(-t/2+.08,n-.12,e/2-.008,t/2-.08,n-.12,e/2-.008,ee),i.box(-t/2,t/2,n-.04,n,-e/2,e/2,U.whiteTop,U.whiteTop,mt)}function sm(i,t,e,n,r){i.box(-t/2,t/2,0,n,-e/2,e/2-.02,U.white,U.whiteTop,mt);let s=e/2-.012;i.seg(-t/2,n-.14,s,t/2,n-.14,s,Ot),i.seg(t/2-.16,n-.07,s,t/2-.08,n-.07,s,ee);let o=(n-.14)/2+.04,a=Math.min(t*.36,(n-.2)*.42),l=20;for(let c=0;c<l;c++){let f=c/l*Math.PI*2,u=(c+1)/l*Math.PI*2;i.seg(Math.cos(f)*a,o+Math.sin(f)*a,s,Math.cos(u)*a,o+Math.sin(u)*a,s,ee),r||i.seg(Math.cos(f)*a*.72,o+Math.sin(f)*a*.72,s,Math.cos(u)*a*.72,o+Math.sin(u)*a*.72,s,Ot)}}function r2(i,t,e,n){for(let o of[-1,1])for(let a of[-1,1])i.box(o*(t/2)-(o>0?.05:0),o*(t/2)+(o<0?.05:0),0,n,a*(e/2)-(a>0?.05:0),a*(e/2)+(a<0?.05:0),U.wood,U.woodTop);for(let o of[.25,n-.55])i.box(-t/2,t/2,o,o+.08,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.04,t/2-.04,o+.08,o+.24,-e/2+.05,e/2-.05,U.white,U.whiteTop,Ot),i.box(-t/2+.05,t/2-.05,o+.24,o+.33,-e/2+.08,-e/2+.4,U.whiteTop,U.whiteTop);i.box(-t/2,t/2,n-.2,n-.15,e/2-.05,e/2,U.wood,U.woodTop);let s=t/2-.35;for(let o of[s-.18,s+.18])i.seg(o,0,e/2+.02,o,n-.15,e/2+.02,mt);for(let o=.3;o<n-.2;o+=.28)i.seg(s-.18,o,e/2+.02,s+.18,o,e/2+.02,Ot)}function s2(i,t,e,n){let r=Math.min(t,e)/2;i.cyl(0,0,r*.4,0,.03,U.metal,U.metal,12),i.cyl(0,0,.05,.03,n-.04,U.wood,U.wood,8),i.cyl(0,0,r,n-.04,n,U.wood,U.woodTop,20,mt)}function o2(i,t,e,n){Ir(i,t,e,n-.03,.04,.03,U.wood),i.box(-t/2,t/2,n-.03,n,-e/2,e/2,U.wood,U.woodTop,mt),i.box(-t/2+.05,t/2-.05,.1,.13,-e/2+.05,e/2-.05,U.body,U.bodyTop,Ot)}function a2(i,t,e,n){let r=1.3-n/2;i.box(-.12,.12,r+n*.3,r+n*.7,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.03,e/2,U.dark,U.dark,ee)}function l2(i,t,e,n){let r=ff;i.box(-t/2+.05,-t/2+.08,0,r,-e/2,-e/2+.03,U.metal),i.box(t/2-.08,t/2-.05,0,r,-e/2,-e/2+.03,U.metal),i.box(-t/2,t/2,r,r+n,-e/2+.02,e/2,U.white,U.whiteTop,mt);let s=Math.max(3,Math.round(t/.1));for(let o=1;o<s;o++){let a=-t/2+t/s*o;i.seg(a,r+.03,e/2+.002,a,r+n-.03,e/2+.002,Ot)}}function c2(i,t,e,n){let r=df;i.box(-t/2,t/2,r+.07,r+n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t/2,t/2,r,r+.07,-e/2,e/2-.05,U.white,U.white,mt),i.box(-t/2+.04,t/2-.04,r+.012,r+.06,e/2-.05,e/2-.02,U.dark),i.seg(-t/2+.03,r+n*.55,e/2+.002,t/2-.03,r+n*.55,e/2+.002,Ot),i.seg(t/2-.14,r+n*.75,e/2+.002,t/2-.07,r+n*.75,e/2+.002,ee)}function Ls(i,t,e,n,r,s=20){for(let o=0;o<s;o++){let a=o/s*Math.PI*2,l=(o+1)/s*Math.PI*2;i.seg(t+Math.cos(a)*n,e+Math.sin(a)*n,r,t+Math.cos(l)*n,e+Math.sin(l)*n,r,ee)}}function u2(i,t,e,n,r){let o=e/2;if(r==="slim"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.dark,U.body,mt),i.seg(-t*.25,1.1+n*.15,o+.004,-t*.25,1.1+n*.85,o+.004,ee),i.box(-t*.1,t*.3,1.1+n*.7,1.1+n*.85,o,o+.005,U.dark);return}if(r==="hybrid"){i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,mt),Ls(i,0,1.1+n*.66,Math.min(t,n)*.22,o+.004),i.seg(-t*.08,1.1+n*.66,o+.005,t*.08,1.1+n*.66,o+.005,ee);for(let a of[-1,1])Ls(i,a*t*.22,1.1+n*.2,Math.min(t,n)*.1,-e/2-.002,12);return}i.box(-t/2,t/2,1.1,1.1+n,-e/2,e/2,U.white,U.whiteTop,mt),i.box(-t*.28,t*.28,1.1+n*.58,1.1+n*.82,e/2,e/2+.006,U.dark),i.seg(-t*.3,1.1+n*.45,e/2+.004,t*.3,1.1+n*.45,e/2+.004,ee);for(let a of[-1,1])for(let l=1;l<6;l++)i.seg(a*t/2+a*.002,1.1+n*l/6,-e/2+.03,a*t/2+a*.002,1.1+n*l/6,e/2-.03,Ot)}function h2(i,t,e,n){let r=Math.min(e,n)*.32;i.box(-t/2,t/2,0,.03,-e/2,e/2,U.dark),i.box(-t/2,t*.1,.05,.05+r*2,-r,r,U.metal,U.metal,mt);for(let o of[-t*.4,-t*.25,-t*.1])i.seg(o,.05+r*2+.003,-r,o,.05+r*2+.003,r,Ot);i.cyl(t*.28,0,Math.min(t*.2,e*.45),.03,n*.82,U.dark,U.body,14,mt),i.cyl(t*.28,0,Math.min(t*.2,e*.45)*.9,n*.82,n,U.glass,U.glass,14);let s=Math.min(t*.2,e*.45)*.95;for(let o=0;o<16;o++){let a=o/16*Math.PI*2,l=(o+1)/16*Math.PI*2;i.seg(t*.28+Math.cos(a)*s,n*.83,Math.sin(a)*s,t*.28+Math.cos(l)*s,n*.83,Math.sin(l)*s,ee)}}function f2(i,t,e,n,r){let s=Math.min(t,e)/2;if(i.cyl(0,0,s*.95,0,n*.08,U.dark,U.dark,16),i.cyl(0,0,s,n*.08,n*.78,U.dark,U.body,18,mt),i.cyl(0,0,s*.75,n*.78,n*.84,U.dark,U.body,16),r==="side6"){let a=s*.9;i.box(a,a+.12,n*.3,n*.66,-.07,.07,U.dark,U.metal,mt),Ls(i,a+.06,n*.56,.05,.075,16),i.box(a+.04,a+.08,n*.66,n*.72,-.015,.015,U.dark,U.body);return}i.cyl(0,0,s*.45,n*.84,n*.95,U.dark,U.metal,16,mt);let o=s*.4;for(let a=0;a<16;a++){let l=a/16*Math.PI*2,c=(a+1)/16*Math.PI*2;i.seg(Math.cos(l)*o,n*.955,Math.sin(l)*o,Math.cos(c)*o,n*.955,Math.sin(c)*o,ee)}i.box(-.02,.02,n*.95,n,-s*.35,s*.35,U.dark,U.body)}function d2(i,t,e,n){i.box(-t/2,t/2,.06,n,-e/2,e/2,U.white,U.whiteTop,mt);for(let a of[-t*.4,t*.4])i.box(a-.03,a+.03,0,.06,-e/2+.02,e/2-.02,U.dark);let r=Math.min(n*.38,t*.3),s=-t*.15,o=n*.53;Ls(i,s,o,r,e/2+.004,24),Ls(i,s,o,r*.55,e/2+.004,16),i.seg(s-r,o,e/2+.005,s+r,o,e/2+.005,Ot),i.seg(s,o-r,e/2+.005,s,o+r,e/2+.005,Ot),i.box(t*.22,t*.42,n*.62,n*.8,e/2,e/2+.006,U.dark),i.seg(t*.25,n*.71,e/2+.008,t*.39,n*.71,e/2+.008,ee);for(let a=1;a<8;a++)i.seg(t/2+.002,n*(.1+a*.1),-e/2+.03,t/2+.002,n*(.1+a*.1),e/2-.03,Ot)}function p2(i,t,e,n){i.box(-t/2,t/2,.9,.9+n*.45,-e/2,e/2,U.white,U.whiteTop,mt);for(let s of[-1,1])Ls(i,s*t*.22,.9+n*.22,Math.min(t,n)*.09,e/2+.004,12);i.seg(-t*.35,.9+n*.4,e/2+.004,t*.35,.9+n*.4,e/2+.004,ee);for(let s of[-1,1])i.box(s*t*.25-t*.18,s*t*.25+t*.18,0,n*.5,-e/2,e/2,U.white,U.glass,Ot)}function m2(i,t,e,n){let r=a0-n*.4;i.box(-t/2,t/2,r+n*.25,r+n*.6,-e*.25,e*.25,U.metal,U.metal,mt),i.box(-t*.12,t*.12,r+n*.6,r+n*.8,-e*.12,e*.12,U.dark),i.box(-t*.1,t*.45,r+n*.8,r+n,-e*.15,e*.15,U.accent,U.accent)}function g2(i,t,e,n){i.box(-t/2,t/2,0,n,-e/2,e/2,U.dark,U.body,mt),i.box(-t/2-.01,t/2+.01,n,n+.03,-e/2-.01,e/2+.01,U.dark,U.body),i.seg(-t/2,n+.032,e/2+.01,t/2,n+.032,e/2+.01,ee),i.seg(-t*.3,n*.55,e/2+.003,t*.3,n*.55,e/2+.003,Ot)}function b2(i,t,e,n,r){let s=xc,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,U.white,U.whiteTop,mt);let l=t/r;for(let c=0;c<r;c++){let f=-t/2+c*l;i.box(f+.008,f+l-.008,s+.012,s+n-.012,a,a+.006,U.whiteTop,U.whiteTop,Ot)}}function x2(i,t,e,n,r){let s=yc,o=-e/2,a=o+.01;i.box(-t/2,t/2,s,s+n,o,a,U.white,U.whiteTop,mt);let l=t/r,c=s+n/2,f=Math.min(l,n)*.3;for(let u=0;u<r;u++){let h=-t/2+(u+.5)*l;u>0&&i.seg(h-l/2,s+.006,a+.001,h-l/2,s+n-.006,a+.001,Ot),i.lyingCyl("z",h,a+.004,c-f,c+f,.008,f*2,U.whiteTop,U.whiteTop,16,Ot),i.lyingCyl("z",h,a+.006,c-f*.78,c+f*.78,.008,f*1.56,U.white,U.white,16);for(let d of[-f*.38,f*.38])i.lyingCyl("z",h+d,a+.0065,c-.0025,c+.0025,.008,.005,U.dark,U.dark,6)}}function fm(i){let t=Math.max(.05,i.w),e=Math.max(.05,i.d),n=Math.max(.005,i.h),r=Tc(i),s=t/r;return i.type==="wall_socket"?Array.from({length:r},(o,a)=>({x:-t/2+(a+1)*s-.012,y:yc+n-.012,z:-e/2+.011,r:.0025})):Array.from({length:r},(o,a)=>({x:-t/2+(a+.5)*s,y:xc+n*.2,z:-e/2+.017,r:.005}))}function dm(i,t,e){let n=Math.min(.2,e*.19),r=Math.min(.075,n*.55,i*.2),s=Po+n*.3;return{band:n,display:{x0:-r*.75,x1:r*.25,y0:s,y1:s+r,z:t/2+.004}}}function y2(i,t,e,n){let r=Po,s=r+n,{band:o,display:a}=dm(t,e,n),l=Math.min(.07,t*.14,o*.8),c=-t/2,f=t/2,u=-e/2,h=e/2,d=3,p=m=>l-Math.sqrt(Math.max(0,l*l-(l-m)*(l-m))),b=U.metal;for(let m=0;m<d;m++){let x=l*m/d,v=l*(m+1)/d,y=p(x),M=p(v);i.loft([c+y,f-y,u,h],[c+M,f-M,u,h],r+x,r+v,b),i.loft([c+M,f-M,u,h],[c+y,f-y,u,h],s-v,s-x,U.white,U.whiteTop)}i.box(c,f,r+l,r+o,u,h,b,b),i.box(c,f,r+o,s-l,u,h,U.white,U.whiteTop,mt),i.seg(c,r+o,h+.001,f,r+o,h+.001,Ot),i.box(a.x0,a.x1,a.y0,a.y1,h,h+.003,U.dark,U.dark,Ot);let g=(a.y1-a.y0)*.3;for(let[m,x]of[[0,0],[1,0],[0,1],[1,1]]){let v=a.x1+.012+m*(g+.008),y=a.y0+.004+x*(g+.012);i.box(v,v+g,y,y+g,h,h+.003,U.body,U.body)}for(let m of[-.05,.05])i.cyl(m,0,.011,r-.12,r+.01,U.metal,U.metal,8)}function v2(i,t,e,n,r){if(r){let o=Math.min(t,n)/2,a=Math.min(.035,e);i.lyingCyl("z",0,-e/2+a*.4,.004,2*o-.004,a*.8,2*o-.008,U.white,U.white,28),i.lyingCyl("z",0,-e/2+a*.85,.012,2*o-.012,a*.3,2*o-.024,U.whiteTop,U.whiteTop,28,Ot);return}let s=Math.min(t,e)/2;i.cyl(0,0,s-.006,0,n*.3,U.whiteTop,U.whiteTop,28,Ot),i.cyl(0,0,s,n*.3,n,U.white,U.white,28)}function pm(i){let t=Math.max(.05,i.w),e=Math.max(.005,i.d),n=Math.max(.005,i.h);return Ph(i)?{y:Math.min(t,n)/2,z:-e/2+Math.min(.035,e)+.002,r:Math.min(t,n)/2,wall:!0}:{y:-.002,z:0,r:Math.min(t,e)/2,wall:!1}}function _2(i,t,e,n){i.box(-t/2,t/2,1,1+n,-e/2,e/2,U.dark,U.body,mt);let s=Math.min(t,n)*.28,o=1+n*.58,a=16;for(let l=0;l<a;l++){let c=l/a*Math.PI*2,f=(l+1)/a*Math.PI*2;i.seg(Math.cos(c)*s,o+Math.sin(c)*s,e/2+.003,Math.cos(f)*s,o+Math.sin(f)*s,e/2+.003,ee)}i.box(-.015,.015,1-.35,1,e/2-.03,e/2,U.dark),i.box(-.06,.06,1-.42,1-.35,e/2-.05,e/2,U.dark,U.body)}function M2(i,t,e,n){i.box(-t/2,t/2,.4,.4+n,-e/2,e/2,U.white,U.whiteTop,mt),i.seg(-t/2+.025,.4+.025,e/2+.003,-t/2+.025,.4+n-.025,e/2+.003,Ot),i.seg(-t/2+.025,.4+n-.025,e/2+.003,t/2-.025,.4+n-.025,e/2+.003,Ot),i.box(t/2-.06,t/2-.035,.4+n*.5-.05,.4+n*.5+.05,e/2,e/2+.012,U.dark),i.box(-t*.3,t*.3,.4+n*.6,.4+n*.8,e/2,e/2+.005,U.dark),i.seg(-t*.22,.4+n*.7,e/2+.008,t*.22,.4+n*.7,e/2+.008,ee)}function S2(i,t,e,n,r){if(r==="wall"){i.box(-t/2,t/2,.5,.5+n,-e/2,e/2,U.white,U.whiteTop,mt),i.seg(-t*.3,.5+n*.9,e/2+.004,t*.3,.5+n*.9,e/2+.004,ee),i.seg(-t*.3,.5+n*.08,e/2+.003,t*.3,.5+n*.08,e/2+.003,Ot);return}if(r==="cube"){i.box(-t/2+.01,t/2-.01,0,.03,-e/2+.01,e/2-.01,U.dark),i.box(-t/2,t/2,.03,n,-e/2,e/2,U.dark,U.body,mt),i.seg(-t*.35,n*.85,e/2+.004,t*.35,n*.85,e/2+.004,ee),i.box(-t*.15,t*.15,n,n+.025,-.012,.012,U.dark);return}i.box(-t/2+.02,t/2-.02,0,.06,-e/2+.02,e/2-.02,U.dark);let s=Math.max(2,Math.round((n-.06)/.3)),o=(n-.06)/s;for(let a=0;a<s;a++)i.box(-t/2,t/2,.06+a*o+.004,.06+(a+1)*o,-e/2,e/2,U.white,U.whiteTop,mt);for(let a=0;a<5;a++){let l=.06+n*.18+a*((n-.3)/5);i.seg(-t*.04,l,e/2+.003,t*.04,l,e/2+.003,ee)}}var ff=.12,df=2.05;function mm(i,t,e){let n=Math.min(.04,.08*Math.min(i,t)),r=Math.min(i-n,(t-n)*e);return{w:r,h:r/e}}function mf(i,t){let e=w2(i,t);return e&&i.mirror?{...e,x0:-e.x1,x1:-e.x0}:e}function w2(i,t){let e=Math.max(.05,i.w),n=Math.max(.05,i.d),r=Math.max(.005,i.h),s=jp(i.type);if(s){let l=t?en(t,i):0,c=(s.x-s.w/2)*e,f=(s.x+s.w/2)*e,u=Math.min(.02,(f-c)*.05);return{x0:c+u,x1:f-u,y0:l+s.y*r+u,y1:l+(s.y+s.h)*r-u,z:(s.z+s.d/2)*n}}let o=t&&i.type!=="fridge_smart"?en(t,i)-Ti(i):0,a=T2(i,e,n,r,t);return a?{...a,y0:a.y0+o,y1:a.y1+o}:null}function T2(i,t,e,n,r){if(i.type==="pool_pump"){let s=Math.min(e,n)*.32;return{x0:-t/2+.03,x1:t*.08,y0:.07,y1:.03+s*2,z:s+.004}}if(i.type==="pool_heat_pump")return{x0:-t/2+.05,x1:t*.15,y0:n*.15,y1:n*.9,z:e/2+.003};if(i.type==="pool_filter"){let s=Math.min(t,e)/2;return{x0:-s*.4,x1:s*.4,y0:n*.85,y1:n*.94,z:s*.45+.004}}if(i.type==="pool_dosing")return{x0:-t*.4,x1:t*.4,y0:.9+n*.05,y1:.9+n*.4,z:e/2+.003};if(i.type==="tv_board"){let s=Math.min(t*.8,1.45),o=s*.56;return{x0:-s/2+.02,x1:s/2-.02,y0:n+.12,y1:n+.08+o,z:-e/2+.165}}if(i.type==="tv_wall"){let s=1.3-n/2;return{x0:-t/2+.02,x1:t/2-.02,y0:s+.02,y1:s+n-.02,z:e/2+.003}}if(i.type==="desk")return{x0:-.28,x1:.28,y0:n+.1,y1:n+.4,z:-e/2+.115};if(i.type==="fridge_smart"){let s=r?en(r,i):0;return{x0:.06,x1:t/2-.06,y0:s+n*.52+.01,y1:s+n*.86-.01,z:e/2+.006}}if(i.type==="radiator")return{x0:-t/2+.02,x1:t/2-.02,y0:ff+.02,y1:ff+n-.02,z:e/2+.004};if(i.type==="ac_unit")return{x0:-t/2+.05,x1:t/2-.05,y0:df+.015,y1:df+.06,z:e/2-.015};if(i.type==="washer"||i.type==="dryer"){let s=(n-.14)/2+.04,o=Math.min(t*.36,(n-.2)*.42)*.8;return{x0:-o,x1:o,y0:s-o,y1:s+o,z:e/2-.004}}return i.type==="water_heater"?dm(t,e,n).display:i.type==="dishwasher"?{x0:-t/2+.06,x1:t/2-.06,y0:n-.16,y1:n-.08,z:e/2-.004}:null}function E2(i){if(i.type==="table_round"||i.type==="plant")return!0;let t=_e(i.type);if(!(t!=null&&t.parts.length))return!1;let e=t.parts.reduce((n,r)=>r.w*r.d>n.w*n.d?r:n,t.parts[0]);return e.shape==="cyl"&&(e.axis??"y")==="y"&&e.w>=.85&&e.d>=.85}function A2(i,t,e,n,r,s=!1,o=0){let a=Math.min(.14,Math.max(.06,Math.min(e,n)*.15)),l=new j(1-r,1-r,1-r),c=new j(1,1,1),f=o+.003;if(s){let b=y=>[y[0],f,y[1]],m=(y,M,w)=>t(Math.cos(y/24*2*Math.PI)*M,Math.sin(y/24*2*Math.PI)*w),x=i.p.length,v=b(t(0,0));for(let y=0;y<24;y++){let M=b(m(y,e/2,n/2)),w=b(m(y+1,e/2,n/2)),A=b(m(y,e/2+a,n/2+a)),_=b(m(y+1,e/2+a,n/2+a));i.tri(v,M,w,l),i.tri(M,A,_,l,c,c),i.tri(M,_,w,l,c,l)}hf(t)&&pf(i,x);return}let u=[t(-e/2,-n/2),t(e/2,-n/2),t(e/2,n/2),t(-e/2,n/2)],h=[t(-e/2-a,-n/2-a),t(e/2+a,-n/2-a),t(e/2+a,n/2+a),t(-e/2-a,n/2+a)],d=b=>[b[0],f,b[1]],p=i.p.length;i.tri(d(u[0]),d(u[1]),d(u[2]),l),i.tri(d(u[0]),d(u[2]),d(u[3]),l);for(let b=0;b<4;b++){let g=(b+1)%4;i.tri(d(u[b]),d(h[b]),d(h[g]),l,c,c),i.tri(d(u[b]),d(h[g]),d(u[g]),l,c,l)}hf(t)&&pf(i,p)}function Ic(i,t,e,n,r=0,s=!1){R2(i,t,e,n,r,s)}function pf(i,t){let e=(n,r,s)=>{if(n)for(let o=0;o<s;o++){let a=r+s+o,l=r+2*s+o,c=n[a];n[a]=n[l],n[l]=c}};for(let n=t;n<i.p.length;n+=9){let r=n/9;e(i.p,n,3),e(i.c,n,3),e(i.f,r*3,1),e(i.uv,r*6,2),e(i.tile,r*6,2)}}function R2(i,t,e,n,r,s=!1){let o=_e(n.type)?0:r-Ti(n);if(_e(n.type)||Math.abs(o)<.001)return om(i,t,e,n,r,s);let a=i.p.length,l=t.p.length,c=e.p.length;om(i,t,r<.05?e:new ie,n,0);for(let f=a+1;f<i.p.length;f+=3)i.p[f]+=o;for(let f=l+1;f<t.p.length;f+=3)t.p[f]+=o;if(r<0)for(let f=c+1;f<e.p.length;f+=3)e.p[f]+=o}function om(i,t,e,n,r,s=!1){let o=n.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=n.mirror?-1:1,f=(b,g)=>[n.x+c*b*a-g*l,n.z+c*b*l+g*a],u=new rr(i,t,f),h=Math.max(.05,n.w),d=Math.max(.05,n.d),p=Math.max(.005,n.h);switch(n.type){case"sofa":nm(u,h,d,p,Math.max(1,Math.round((h-.4)/.62)));break;case"armchair":nm(u,h,d,p,1);break;case"sofa_l":im(u,h,d,p,!1);break;case"sofa_u":im(u,h,d,p,!0);break;case"bed":TM(u,h,d,p);break;case"chair":EM(u,h,d,p);break;case"table":AM(u,h,d,p);break;case"desk":RM(u,h,d,p);break;case"nightstand":ir(u,h,d,p,1,p*.72,!0),u.seg(-h/2,p*.5,d/2-.02,h/2,p*.5,d/2-.02,Ot);break;case"wardrobe":ir(u,h,d,p,Math.max(2,Math.round(h/.5)),p*.5);break;case"shelf":CM(u,h,d,p);break;case"kitchen":PM(u,h,d,p);break;case"fridge":IM(u,h,d,p);break;case"fridge_smart":DM(u,h,d,p);break;case"waste_bin":{let b=i.c.length;LM(u,h,d,p,X0(n),Z0(n,$0())),No&&lm(i.c,b);break}case"mailbox":{let b=i.p.length,g=t.p.length;FM(u,h,d,p,Y0(n));let m=Ti(n);for(let x=b+1;x<i.p.length;x+=3)i.p[x]+=m;for(let x=g+1;x<t.p.length;x+=3)t.p[x]+=m;if(m>0)return;break}case"awning":return;case"stove":NM(u,h,d,p);break;case"sink":UM(u,h,d,p);break;case"bathtub":BM(u,h,d,p);break;case"shower":kM(u,h,d,p);break;case"wc":zM(u,h,d,p);break;case"washbasin":VM(u,h,d,p);break;case"tv_board":GM(u,h,d,p);break;case"plant":HM(u,h,d,p);break;case"rug":WM(u,h,d);return;case"stairs":YM(u,h,d,p,!!n.stair_open);break;case"stairs_u":qM(u,h,d,p);break;case"stairwell":return;case"sideboard":$M(u,h,d,p);break;case"dresser":ZM(u,h,d,p);break;case"tall_cabinet":ir(u,h,d,p,1,p*.5);break;case"coat_rack":KM(u,h,d,p);break;case"bench":rm(u,h,d,p,!1);break;case"corner_bench":rm(u,h,d,p,!0);break;case"bar_stool":JM(u,h,d,p);break;case"office_chair":jM(u,h,d,p);break;case"stool":QM(u,h,d,p);break;case"kitchen_wall":t2(u,h,d,p);return;case"kitchen_tall":e2(u,h,d,p);break;case"island":n2(u,h,d,p);break;case"worktop":u.box(-h/2,h/2,Math.max(0,p-.04),p,-d/2,d/2,U.whiteTop,U.whiteTop,mt);return;case"dishwasher":i2(u,h,d,p);break;case"washer":sm(u,h,d,p,!1);break;case"dryer":sm(u,h,d,p,!0);break;case"bunk_bed":r2(u,h,d,p);break;case"table_round":s2(u,h,d,p);break;case"coffee_table":o2(u,h,d,p);break;case"tv_wall":a2(u,h,d,p);return;case"parking":{let g=[[-h/2,-d/2],[h/2,-d/2],[h/2,d/2],[-h/2,d/2]];for(let m=0;m<4;m++)u.seg(g[m][0],.012,g[m][1],g[(m+1)%4][0],.012,g[(m+1)%4][1],Ot);u.seg(-h*.15,.012,d/2-.45,0,.012,d/2-.2,mt),u.seg(0,.012,d/2-.2,h*.15,.012,d/2-.45,mt);return}case"robot_vacuum":u.box(-h*.45,h*.45,0,p,-d/2,-d/2+d*.3,U.white,U.whiteTop,mt),u.box(-h*.2,h*.2,p*.5,p*.62,-d/2+d*.3,-d/2+d*.31,U.accent);return;case"radiator":l2(u,h,d,p);return;case"ac_unit":c2(u,h,d,p);return;case"inverter":u2(u,h,d,p,n.variant??null);return;case"grid_point":g2(u,h,d,p);break;case"wallbox":_2(u,h,d,p);return;case"wall_switch":b2(u,h,d,p,rf(n).length);return;case"wall_socket":x2(u,h,d,p,Tc(n));return;case"water_heater":y2(u,h,d,p);return;case"access_point":v2(u,h,Math.max(.005,n.d),p,Ph(n));return;case"pool_pump":h2(u,h,d,p);break;case"pool_filter":f2(u,h,d,p,n.variant??null);break;case"pool_heat_pump":d2(u,h,d,p);break;case"pool_dosing":p2(u,h,d,p);break;case"pool_valve":m2(u,h,d,p);return;case"meter":M2(u,h,d,p);return;case"home_battery":if(S2(u,h,d,p,n.variant??null),n.variant==="wall")return;break;default:{let b=_e(n.type);if(b){let g=uc(n.type),m=g?x=>Fh(g,x):Kp(n.type)&&!s?Co:null;if(Bo(u,b,h,d,p,r,null,null,m),r>.05)return}else u.box(-h/2,h/2,0,p,-d/2,d/2,U.body,U.bodyTop,mt)}}A2(e,f,h,d,n.type==="plant"?.35:.5,E2(n),Math.min(0,r))}function gm(i){var t;return!!((t=_e(i))!=null&&t.parts.some(e=>{var n,r;return((n=e.color)==null?void 0:n.startsWith("#"))||((r=e.top)==null?void 0:r.startsWith("#"))}))}function uf(i,t){if(!i)return null;if(i.startsWith("#"))return parseInt(i.slice(1),16);let e=U;return(t?e[`${i}Top`]:void 0)??e[i]??null}function Bo(i,t,e,n,r,s,o,a=null,l=null){var f,u;let c=!!a;for(let h of Ac(t,e,n,r)){if(l!=null&&l(h)||a&&!a(h))continue;let d=c?{...h,glow:!0,w:h.w+.006/e,d:h.d+.006/n,y:Math.max(0,h.y-.002/r),h:h.h+.004/r}:h,p=d.glow&&o!==null,b=p?o:uf(d.color,!1)??U.body,g=p?o:uf(d.top,!1)??uf(d.color,!0)??Dt(b,1.25).getHex(),m=s+d.y*r,x=s+Math.min(r,(d.y+d.h)*r),v=i.colors.length,y=d.edges==="glow"?er:d.edges==="faint"?Ot:d.edges?mt:null,M=d.rot?i.rotated(d.x*e,d.z*n,d.rot):i;if(d.shape==="cyl"&&(d.axis==="x"||d.axis==="z"))M.lyingCyl(d.axis,d.x*e,d.z*n,m,x,d.axis==="x"?d.w*e:d.d*n,d.axis==="x"?d.d*n:d.w*e,b,g,14,y);else if(d.shape==="cyl")M.cyl(d.x*e,d.z*n,Math.min(d.w*e,d.d*n)/2,m,x,b,g,14,y);else if(d.shape==="loft"){let w=d.tx??d.x,A=d.tz??d.z,_=d.tw??d.w,R=d.td??d.d;M.loft([(d.x-d.w/2)*e,(d.x+d.w/2)*e,(d.z-d.d/2)*n,(d.z+d.d/2)*n],[(w-_/2)*e,(w+_/2)*e,(A-R/2)*n,(A+R/2)*n],m,x,b,g,y)}else M.box((d.x-d.w/2)*e,(d.x+d.w/2)*e,m,x,(d.z-d.d/2)*n,(d.z+d.d/2)*n,b,g,y);No&&!p&&!c&&((f=d.color)!=null&&f.startsWith("#")||(u=d.top)!=null&&u.startsWith("#"))&&lm(i.colors,v)}}function bm(i,t,e,n,r,s){let o=s*ae,a=Math.cos(o),l=Math.sin(o),c=(p,b)=>[e+p*a-b*l,r+p*l+b*a],f=new rr(i,new Ne,c),u=1713728,h=2373216,d=725279;if(t==="camera_ceiling"){f.cyl(0,0,.07,n-.03,n,u,h,12),f.loft([-.05,.05,-.05,.05],[-.025,.025,-.025,.025],n-.1,n-.03,d,u),f.cyl(0,0,.012,n-.075,n-.06,U.accent,U.accent,6);return}f.box(-.02,.02,n-.02,n+.02,-.06,-.03,u,h),f.box(-.01,.01,n-.01,n+.06,-.05,-.03,u,h),f.loft([-.035,.035,-.03,.09],[-.04,.04,-.03,.09],n+.02,n+.09,u,h),f.lyingCyl("z",0,.1,n+.03,n+.08,.03,.05,d,U.accent,10),f.box(-.006,.006,n+.075,n+.085,.085,.09,16726863,16726863)}function xm(i,t,e,n,r){let s=Jp(t)*n,o=new rr(i,new Ne,(c,f)=>[c,f-s]);Bo(o,t,Math.max(.05,e),Math.max(.05,n),Math.max(.005,r),0,null,Co);let a=0,l=0;for(let c of Ac(t,e,n,r)){if(!Co(c))continue;let f=Math.min(c.w*e,c.d*n)/2;c.shape==="cyl"&&f>a&&(a=f),l=Math.max(l,Math.min(r,(c.y+c.h)*r))}return{radius:a||.17,top:l||.09}}function ko(i,t,e,n,r,s=o=>!!o.glow){let o=e.rotation*ae,a=Math.cos(o),l=Math.sin(o),c=e.mirror?-1:1,f=(u,h)=>[e.x+c*u*a-h*l,e.z+c*u*l+h*a];Bo(new rr(i,new Ne,f),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r,s)}function ym(i,t,e,n,r,s){let o=C2(t,e,s,n.variant==="left"||n.variant==="right"?n.variant:"both"),a=n.rotation*ae,l=Math.cos(a),c=Math.sin(a),f=n.mirror?-1:1,u=(h,d)=>[n.x+f*h*l-d*c,n.z+f*h*c+d*l];Bo(new rr(i,new Ne,u),{...t,parts:o},Math.max(.05,n.w),Math.max(.05,n.d),Math.max(.005,n.h),r,null)}function C2(i,t,e,n="both"){let r=Math.min(1,Math.max(0,e)),s=i.parts.filter(a=>Fh(t,a)),o;if(t==="curtain")o=s.map(a=>{let l=n==="left"?-.5:n==="right"?.5:Math.sign(a.x||1)*.5;return{...a,x:l-(l-a.x)*(1-.8*r)}});else{let a=Math.max(...s.map(c=>c.y+c.h)),l=Math.max(.02,1-r);o=s.map(c=>({...c,y:a-(a-c.y)*l,h:c.h*l}))}return o}function vm(i,t,e){let n=Math.max(.05,t.w),r=Math.max(.05,t.d),s=Math.max(.005,t.h),o=0,a=0,l=0,c=0;for(let g of Ac(i,n,r,s)){if(!g.glow)continue;let m=(g.x+(g.shape==="loft"?g.tx??g.x:g.x))/2*n,x=(g.z+(g.shape==="loft"?g.tz??g.z:g.z))/2*r,v=g.y*s,y=Math.min(s,(g.y+g.h)*s),M=Math.max(1e-6,g.w*n*g.d*r*Math.max(0,y-v));o+=M,a+=m*M,l+=(v+y)/2*M,c+=x*M}if(!o)return null;let f=a/o,u=c/o,h=t.rotation*ae,d=Math.cos(h),p=Math.sin(h),b=t.mirror?-1:1;return[t.x+b*f*d-u*p,e+l/o,t.z+b*f*p+u*d]}function Lc(i,t,e,n,r){let s=e.rotation*ae,o=Math.cos(s),a=Math.sin(s),l=e.mirror?-1:1,c=(f,u)=>[e.x+l*f*o-u*a,e.z+l*f*a+u*o];Bo(new rr(i,new Ne,c),t,Math.max(.05,e.w),Math.max(.05,e.d),Math.max(.005,e.h),n,r)}var P2={lawn:{color:861728,side:728602,edge:4055200,edgeAlpha:.16},terrace:{color:1907760,side:1381671,edge:5995775,edgeAlpha:.32},path:{color:1712435,side:1317416,edge:5995775,edgeAlpha:.22},driveway:{color:1449003,side:1119780,edge:5995775,edgeAlpha:.18},pool:{color:735834,side:861240,edge:3662079,edgeAlpha:.6},bed:{color:1709330,side:1314830,edge:4055200,edgeAlpha:.2},wild:{color:1319194,side:989716,edge:10146383,edgeAlpha:.14},hedge:{color:1458223,side:1060900,edge:4055200,edgeAlpha:.35},fence:{color:1911110,side:1911110,edge:5995775,edgeAlpha:.45},pergola:{color:2761272,side:2038316,edge:5995775,edgeAlpha:.5},balcony:{color:1909304,side:1448492,edge:5995775,edgeAlpha:.5}};function I2(i,t,e){let n=[(t[0]+e[0])/2,(t[1]+e[1])/2],r=e[0]-t[0],s=e[1]-t[1],o=Math.hypot(r,s)||1;return i.rooms.some(a=>a.points.some((l,c)=>{let f=a.points[(c+1)%a.points.length],u=f[0]-l[0],h=f[1]-l[1],d=Math.hypot(u,h)||1;if(Math.abs((r*h-s*u)/(o*d))>.05)return!1;let p=Math.max(0,Math.min(1,((n[0]-l[0])*u+(n[1]-l[1])*h)/(d*d)));return Math.hypot(l[0]+u*p-n[0],l[1]+h*p-n[1])<.4}))}var L2=3229309,F2=5995775;function D2(i,t){let{p:e,q:n}=t,r=Math.hypot(n[0]-e[0],n[1]-e[1])||1,s=[-(n[1]-e[1])/r,(n[0]-e[0])/r],o=(t.s0+t.s1)/2/r,a=[e[0]+(n[0]-e[0])*o,e[1]+(n[1]-e[1])*o],l=[a[0]+s[0]*.05,a[1]+s[1]*.05],c=ui(i.points),u=((i.open?(c[0]-a[0])*s[0]+(c[1]-a[1])*s[1]>0:qt(l,i.points))?1:-1)*(t.gate.outward?-1:1);return[s[0]*u,s[1]*u]}function Mm(i,t,e,n,r){let{gate:s,p:o,q:a,s0:l,s1:c}=n,f=Math.hypot(a[0]-o[0],a[1]-o[1])||1,u=[(a[0]-o[0])/f,(a[1]-o[1])/f],h=D2(e,n),d=_=>[o[0]+u[0]*_,o[1]+u[1]*_],p=d((l+c)/2),b=Ki(t,e)-Ss(t,e,p[0],p[1]),g=Math.max(.4,(e.height??Tr.fence)-.05),m=Math.min(1,Math.max(0,r)),x=(_,R,S,E,I,O)=>{let C=[-R[1]*(E/2),R[0]*(E/2)],L=[_[0]+R[0]*S,_[1]+R[1]*S];Ie(i,Fs([[_[0]+C[0],_[1]+C[1]],[L[0]+C[0],L[1]+C[1]],[L[0]-C[0],L[1]-C[1]],[_[0]-C[0],_[1]-C[1]]]),b+I,b+O,L2,F2)},v=(_,R,S)=>{if(S<.1)return;let E=[_[0]+R[0]*.03,_[1]+R[1]*.03],I=S-.06;x(E,R,I,.04,.08,.15),x(E,R,I,.04,g-.07,g);let O=Math.max(1,Math.round(I/.12));for(let C=0;C<=O;C++){let L=Math.min(I-.03,I*C/O);x([E[0]+R[0]*L,E[1]+R[1]*L],R,.03,C===0||C===O?.05:.025,.08,g)}},y=(_,R)=>[_[0]*Math.cos(R)+h[0]*Math.sin(R),_[1]*Math.cos(R)+h[1]*Math.sin(R)],M=m*Math.PI*.5,w=c-l,A=s.kind??"swing";if(A==="slide"){let _=s.flip?1:-1,R=d(l+_*m*w);v([R[0]+h[0]*.08,R[1]+h[1]*.08],u,w)}else A==="double"?(v(d(l),y(u,M),w/2),v(d(c),y([-u[0],-u[1]],M),w/2)):s.flip?v(d(c),y([-u[0],-u[1]],M),w):v(d(l),y(u,M),w)}function Sm(i,t){return t.type==="pool"?bc(i,t):Ki(i,t)+(An(t.type)?.01:Tr[t.type])}function Fs(i){return Rn(i)>=0?i:[...i].reverse()}function O2(i,t){let e=i[t];if(An(e.type)||e.type==="pool")return[];let n=[];for(let r=0;r<i.length;r++){let s=i[r];r===t||!(s.cut&&r>t||s.type==="pool")||s.points.length<3||s.points.every(o=>qt(o,e.points))&&n.push(Fs(s.points))}return n}function _m(i,t,e,n,r,s,o,a,l=0){let c=e[0]-t[0],f=e[1]-t[1],u=Math.hypot(c,f);if(u<1e-6)return;let h=-f/u*n*.5,d=c/u*n*.5;if(Math.abs(l)<1e-4){Ie(i,Fs([[t[0]+h,t[1]+d],[e[0]+h,e[1]+d],[e[0]-h,e[1]-d],[t[0]-h,t[1]-d]]),r,s,o,a,{aoFrom:r-1});return}let p=(y,M)=>[t[0]+h*M,y,t[1]+d*M],b=(y,M)=>[e[0]+h*M,y+l,e[1]+d*M],g=(y,M)=>{i.tri(y[0],y[1],y[2],M,M,M,void 0,Qt),i.tri(y[0],y[2],y[3],M,M,M,void 0,Qt),i.tri(y[0],y[2],y[1],M,M,M,void 0,Qt),i.tri(y[0],y[3],y[2],M,M,M,void 0,Qt)},m=new j(a),x=new j(Dt(o,.9)),v=new j(Dt(o,.6));g([p(s,1),b(s,1),b(s,-1),p(s,-1)],m),g([p(r,1),b(r,1),b(r,-1),p(r,-1)],v),g([p(r,1),b(r,1),b(s,1),p(s,1)],x),g([p(r,-1),b(r,-1),b(s,-1),p(s,-1)],x),g([p(r,1),p(r,-1),p(s,-1),p(s,1)],x),g([b(r,1),b(r,-1),b(s,-1),b(s,1)],x)}function wm(i,t,e,n){let r=e.outdoor??[];r.forEach((s,o)=>{if(s.points.length<3)return;let a=Ki(e,s),l=(x,v)=>a-Ss(e,s,x,v),c=a-(s.type==="pool"?0:s.slope??0),f=An(s.type)&&s.height?s.height:Tr[s.type],u={...P2[s.type],top:f},h=Fs(s.points),d=Dt(u.edge,u.edgeAlpha),p=s.open&&(s.type==="fence"||s.type==="pergola")?h.length-1:-1,b=x=>{if(s.outline!==!1)for(let v=0;v<h.length;v++){if(v===p)continue;let y=h[v],M=h[(v+1)%h.length];t.seg([y[0],x(y[0],y[1]),y[1]],[M[0],x(M[0],M[1]),M[1]],d,Qt)}},g=n??i,m=new j(n?1734832:u.color);switch(s.type){case"pool":{let x=new j(u.side),v=new j(Dt(u.side,.55)),y=new j(932440),M=bc(e,s),w=gc(e,s),A=s0(e,s);for(let[_,R,S]of pn(h)){let E=h[_],I=h[R],O=h[S];(n?g:i).tri([E[0],M,E[1]],[O[0],M,O[1]],[I[0],M,I[1]],m,m,m,void 0,Qt),i.tri([E[0],A,E[1]],[O[0],A,O[1]],[I[0],A,I[1]],y,y,y,void 0,Qt)}for(let _=0;_<h.length;_++){let R=h[_],S=h[(_+1)%h.length];i.tri([S[0],A,S[1]],[S[0],w,S[1]],[R[0],w,R[1]],v,x,x,void 0,Qt),i.tri([S[0],A,S[1]],[R[0],w,R[1]],[R[0],A,R[1]],v,x,v,void 0,Qt)}if(!s.above&&Uh(e,s)){let _=new j(660258),R=new j(396054),S=A-.2,E=Math.min(a,w);for(let I=0;I<h.length;I++){let O=h[I],C=h[(I+1)%h.length];i.tri([O[0],S,O[1]],[O[0],E,O[1]],[C[0],E,C[1]],R,_,_,void 0,Qt),i.tri([O[0],S,O[1]],[C[0],E,C[1]],[C[0],S,C[1]],R,_,R,void 0,Qt)}for(let[I,O,C]of pn(h)){let L=h[I],T=h[O],P=h[C];i.tri([L[0],S,L[1]],[T[0],S,T[1]],[P[0],S,P[1]],R,R,R,void 0,Qt)}if(s.outline!==!1)for(let I=0;I<h.length;I++){let O=h[I],C=h[(I+1)%h.length];t.seg([O[0],S,O[1]],[C[0],S,C[1]],Dt(u.edge,u.edgeAlpha*.35),Qt),t.seg([O[0],S,O[1]],[O[0],E,O[1]],Dt(u.edge,u.edgeAlpha*.25),Qt)}}if(w>a+.02){let _=new j(2044240),R=new j(1187123);for(let S=0;S<h.length;S++){let E=h[S],I=h[(S+1)%h.length];i.tri([E[0],a,E[1]],[E[0],w,E[1]],[I[0],w,I[1]],R,_,_,void 0,Qt),i.tri([E[0],a,E[1]],[I[0],w,I[1]],[I[0],a,I[1]],R,_,R,void 0,Qt)}b(()=>a+.005)}if(b(()=>w),b(()=>M+.005),s.outline!==!1)for(let _=0;_<h.length;_++){let R=h[_],S=h[(_+1)%h.length];t.seg([R[0],A+.005,R[1]],[S[0],A+.005,S[1]],Dt(u.edge,u.edgeAlpha*.4),Qt)}break}case"fence":{let x=s.points,v=x.length-1,y=mc(s),M=(w,A,_)=>{let R=l(w,A);Ie(i,Fs([[w-_,A-_],[w+_,A-_],[w+_,A+_],[w-_,A+_]]),R,R+u.top,u.side,u.color)};for(let w=0;w<x.length;w++){if(s.open&&w===v)continue;let A=x[w],_=x[(w+1)%x.length],R=Math.hypot(_[0]-A[0],_[1]-A[1]);if(R<1e-6)continue;let S=L=>[A[0]+(_[0]-A[0])*L/R,A[1]+(_[1]-A[1])*L/R],E=y.filter(L=>L.gate.edge===w).sort((L,T)=>L.s0-T.s0),I=[],O=0;for(let L of E)L.s0>O+.01&&I.push([O,L.s0]),O=Math.max(O,L.s1);R>O+.01&&I.push([O,R]);let C=s.open&&w===v-1;for(let[L,T]of I){let P=Math.max(1,Math.round((T-L)/2)),N=L>1e-6?1:0,F=T>=R-1e-6&&C?P:P-1;for(let V=N;V<=F;V++){let[H,J]=S(L+(T-L)*V/P);M(H,J,.04)}let z=S(L),B=S(T);for(let V of[.35,.85])t.seg([z[0],l(z[0],z[1])+V*u.top,z[1]],[B[0],l(B[0],B[1])+V*u.top,B[1]],d,Qt)}for(let L of E)for(let T of[L.s0,L.s1])M(...S(T),.055)}break}case"pergola":{let x=u.top;for(let[v,y]of h){let M=l(v,y);Ie(i,Fs([[v-.06,y-.06],[v+.06,y-.06],[v+.06,y+.06],[v-.06,y+.06]]),M,M+x,u.side,u.color)}for(let v=0;v<h.length;v++){if(v===p)continue;let y=h[v],M=h[(v+1)%h.length],w=l(y[0],y[1])+x;if(_m(i,y,M,.12,w-.16,w,u.side,u.color,l(M[0],M[1])-l(y[0],y[1])),s.bracing){let A=l(y[0],y[1]),_=l(M[0],M[1]);t.seg([y[0],A+.25,y[1]],[M[0],_+x-.25,M[1]],d,Qt),t.seg([M[0],_+.25,M[1]],[y[0],A+x-.25,y[1]],d,Qt)}}if(p0(h)){let v=m0(h),y=v.x1-v.x0,M=v.z1-v.z0,w=y>=M,A=w?y:M,_=Math.max(1,Math.round(A/.6));for(let R=1;R<_;R++){let S=(w?v.x0:v.z0)+A*R/_,E=w?[S,v.z0+.06]:[v.x0+.06,S],I=w?[S,v.z1-.06]:[v.x1-.06,S],O=l(E[0],E[1])+x;_m(i,E,I,.06,O-.04,O+.08,u.side,u.color,l(I[0],I[1])-l(E[0],E[1]))}}b((v,y)=>l(v,y)+x+.004);break}case"balcony":{Ie(i,h,a-.18,a+u.top,u.side,u.color,{aoFrom:a-.18}),b(()=>a+u.top+.004);let v=s.height&&s.height>.3?s.height:1,y=Dt(9417983,.42),M=Dt(3662079,.55);for(let w=0;w<h.length;w++){let A=h[w],_=h[(w+1)%h.length];if(I2(e,A,_))continue;let R=Math.hypot(_[0]-A[0],_[1]-A[1]),S=a+u.top;t.seg([A[0],S+v,A[1]],[_[0],S+v,_[1]],M,Qt),t.seg([A[0],S+.1,A[1]],[_[0],S+.1,_[1]],y,Qt);let E=Math.max(1,Math.round(R/.12));for(let I=0;I<=E;I++){let O=I/E,C=A[0]+(_[0]-A[0])*O,L=A[1]+(_[1]-A[1])*O;t.seg([C,S,L],[C,S+v,L],I===0||I===E?M:y,Qt)}}break}default:{let x=(y,M)=>l(y,M)+u.top,v=O2(r,o);if(Ie(i,h,c,s.slope?x:a+u.top,u.side,u.color,{aoFrom:c,holes:v}),b((y,M)=>x(y,M)+.004),s.type==="hedge"&&b((y,M)=>l(y,M)+.004),s.outline!==!1)for(let y of v)for(let M=0;M<y.length;M++){let w=y[M],A=y[(M+1)%y.length];t.seg([w[0],x(w[0],w[1])+.004,w[1]],[A[0],x(A[0],A[1])+.004,A[1]],d,Qt)}}}})}var Dc=Math.PI/180,N2=1.13,U2=1.72,gf=.025,Lr=.07,Tm=.25;function Em(i,t){var n;let e=[];for(let r of i.floors){if(t&&r.id!==t)continue;let{walls:s}=fi(r.rooms,{exterior:i.settings.wall_exterior,interior:i.settings.wall_interior},r.walls??[]);for(let o of s){if(!o.exterior&&!o.free)continue;let a=o.b[0]-o.a[0],l=o.b[1]-o.a[1],c=Math.hypot(a,l);if(c<.5)continue;let f=l/c,u=-a/c,h=Math.min(r.height,o.height??r.height),d=((n=o.sources.find(g=>g.room_id===o.roomLeft))==null?void 0:n.edge)??null,p={floorId:r.id,room:o.roomLeft,edge:d,free:!!o.free},b=(g,m,x,v)=>e.push({key:g,section:null,side:"top",flat:!1,o:m,eu:x,es:[0,1,0],n:v,lu:c,ls:h,pitch:90,span:()=>[0,c],facing:[v[0],v[2]],wall:p});b(`wall:${r.id}:${o.id}`,[o.a[0]+f*o.right,r.elevation,o.a[1]+u*o.right],[a/c,0,l/c],[f,0,u]),o.free&&b(`wall:${r.id}:${o.id}:back`,[o.b[0]-f*o.left,r.elevation,o.b[1]-u*o.left],[-a/c,0,-l/c],[-f,0,-u])}}return e}var bf="ground";function Dr(i){let t=[...i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3))].sort((e,n)=>e.elevation-n.elevation);return t.find(e=>e.elevation>-.5)??t[0]??i.floors[0]??null}function Am(i,t){let e=(t.rotation??0)*Math.PI/180,n=[Math.cos(e),0,Math.sin(e)],r=[-Math.sin(e),0,Math.cos(e)],s=Dr(i),o=n[0]*t.u+r[0]*t.v,a=n[2]*t.u+r[2]*t.v,l=s?s.elevation+(t.base!=null?t.base:hc(s,o,a)):t.base??0;return{key:bf,section:null,side:"top",flat:!0,o:[0,l,0],eu:n,es:r,n:[0,1,0],lu:1e4,ls:1e4,pitch:0,span:()=>[-1e4,1e4],facing:[r[0],r[2]],unbounded:!0}}function B2(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Or(i){let t=i.settings.roof;if(!t||t.type==="none")return[];if(t.type==="custom")return(t.sections??[]).flatMap(x=>k2(x,Sc(i,x,x.overhang??t.overhang)));let e=B2(i);if(!e)return[];let n=e.rooms.flatMap(x=>x.points.map(v=>v[0])),r=e.rooms.flatMap(x=>x.points.map(v=>v[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=e.elevation+e.height;if(t.type==="flat")return[Rm("main",null,o,l,a,c,f+Tm)];let u=a-o>=c-l,h=t.ridge==="short"?!u:u,d=(h?c-l:a-o)/2,p=d*Math.tan(t.pitch*Dc),b=(x,v,y)=>h?[x,f+y,(l+c)/2+v]:[(o+a)/2+v,f+y,x],[g,m]=h?[o,a]:[l,c];return[-1,1].map(x=>Fc(`main:${x<0?"a":"b"}`,null,x<0?"a":"b",b(g,x*d,0),b(m,x*d,0),b(g,0,p),t.pitch,()=>[0,m-g]))}function k2(i,t){let e=an(i),n=on(i),r=(v,y,M)=>{let[w,A]=e.at(v,y);return[w,M,A]},s=Math.max(0,t.a),o=Math.max(0,t.b),a=e.u0-Math.max(0,t.u0),l=e.u1+Math.max(0,t.u1),c=l-a;if(i.shape==="flat"||i.shape==="parapet"){let v=e.at(a,-s),y=e.at(l,e.w+o);return[Rm(i.id,i.id,Math.min(v[0],y[0]),Math.min(v[1],y[1]),Math.max(v[0],y[0]),Math.max(v[1],y[1]),i.eave_a+Tm)]}if(i.shape==="pent")return[Fc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,e.w+o,n.y(e.w+o)),i.pitch_a,()=>[0,c])];let f=Mc(i),u=f?Yh(i,f):null,h=i.shape==="pyramid"||(f==null?void 0:f[0])==="hip",d=i.shape==="pyramid"||(f==null?void 0:f[1])==="hip",p=i.shape==="pyramid"?(e.u1-e.u0)/2:h?u.d0:0,b=i.shape==="pyramid"?(e.u1-e.u0)/2:d?u.d1:0,g=h?e.u0+p-a:0,m=d?l-(e.u1-b):0,x=[];if(n.vr>.3){let v=Math.hypot(n.vr+s,n.rh-n.y(-s));x.push(Fc(`${i.id}:a`,i.id,"a",r(a,-s,n.y(-s)),r(l,-s,n.y(-s)),r(a,n.vr,n.rh),i.pitch_a,y=>[g*(y/v),c-m*(y/v)]))}if(e.w-n.vr>.3){let v=Math.hypot(e.w+o-n.vr,n.rh-n.y(e.w+o));x.push(Fc(`${i.id}:b`,i.id,"b",r(l,e.w+o,n.y(e.w+o)),r(a,e.w+o,n.y(e.w+o)),r(l,n.vr,n.rh),i.pitch_b,y=>[m*(y/v),c-g*(y/v)]))}if(h||d){let v=n.y(-s),y=n.y(e.w+o),M=[];h&&M.push([`${i.id}:c`,"c",r(a,e.w+o,y),r(a,-s,v),r(e.u0+p,n.vr,n.rh)]),d&&M.push([`${i.id}:d`,"d",r(l,-s,v),r(l,e.w+o,y),r(e.u1-b,n.vr,n.rh)]);for(let[w,A,_,R,S]of M){let E=z2(w,i.id,A,_,R,S);E&&x.push(E)}}return x}function z2(i,t,e,n,r,s){let o=zo(Fr(r,n));if(o<.3)return null;let a=sr(Fr(r,n)),l=Fr(s,n),c=l[0]*a[0]+l[1]*a[1]+l[2]*a[2],f=[l[0]-a[0]*c,l[1]-a[1]*c,l[2]-a[2]*c],u=zo(f);if(u<.3)return null;let h=sr(f),d=sr(Im(a,h));d[1]<0&&(d=[-d[0],-d[1],-d[2]]);let p=sr([-h[0],0,-h[2]]),b=Math.atan2(h[1],Math.hypot(h[0],h[2]))/Dc;return{key:i,section:t,side:e,flat:!1,o:n,eu:a,es:h,n:d,lu:o,ls:u,pitch:b,span:m=>{let x=Math.min(1,Math.max(0,m/u));return[c*x,o-(o-c)*x]},facing:[p[0],p[2]]}}function Fc(i,t,e,n,r,s,o,a){let l=sr(Fr(r,n)),c=sr(Fr(s,n)),f=sr(Im(l,c));f[1]<0&&(f=[-f[0],-f[1],-f[2]]);let u=sr([-c[0],0,-c[2]]);return{key:i,section:t,side:e,flat:!1,o:n,eu:l,es:c,n:f,lu:zo(Fr(r,n)),ls:zo(Fr(s,n)),pitch:o,span:a,facing:[u[0],u[2]]}}function Rm(i,t,e,n,r,s,o){let a=r-e>=s-n,l=a?r-e:s-n,c=a?s-n:r-e;return{key:`${i}:top`,section:t,side:"top",flat:!0,o:[e,o,n],eu:a?[1,0,0]:[0,0,1],es:a?[0,0,1]:[1,0,0],n:[0,1,0],lu:l,ls:c,pitch:0,span:()=>[0,l],facing:a?[0,1]:[1,0]}}function Cm(i){let t=i.module_w||N2,e=i.module_h||U2;return i.portrait===!1?[e,t]:[t,e]}function V2(i){var t;return(t=i.layout)!=null&&t.length?i.layout.map(e=>Math.max(0,Math.min(60,Math.round(e)))):Array.from({length:Math.max(1,i.rows)},()=>Math.max(1,i.cols))}function Pm(i,t){return i.flat?Math.min(45,Math.max(0,t.tilt??15))*Dc:i.wall?Math.min(90,Math.max(0,t.tilt??0))*Dc:0}function G2(i,t){let[,e]=Cm(t),n=Pm(i,t);return i.wall?e*Math.cos(n)+gf:i.flat?e*Math.cos(n)+Math.max(.3,2*e*Math.sin(n)):e+gf}function Vo(i,t,e=!1){let[n,r]=Cm(t),s=[],o=Pm(i,t),a=r*Math.cos(o),l=G2(i,t),c=V2(t),f=Math.max(1,...c),u=new Set(t.skip??[]),h=!!i.wall&&n>i.lu+1e-6,d=(b,g,m)=>[i.o[0]+i.eu[0]*b+i.es[0]*g+i.n[0]*m,i.o[1]+i.eu[1]*b+i.es[1]*g+i.n[1]*m,i.o[2]+i.eu[2]*b+i.es[2]*g+i.n[2]*m],p=(b,g)=>{if(i.unbounded)return!0;if(g<-1e-6||g>i.ls+1e-6)return!1;let[m,x]=i.span(g);return b>=m-1e-6&&b<=x+1e-6};return c.forEach((b,g)=>{let m=t.align==="right"?f-b:t.align==="center"?(f-b)/2:0;for(let x=0;x<b;x++){let v=`${g}:${x}`,y=u.has(v);if(y&&!e)continue;let M=t.u+(x+m)*(n+gf),w=t.v+g*l,A=M+n,_=w+(i.flat||i.wall?a:r);if(h){if(!(p((M+A)/2,w)&&p((M+A)/2,_)))continue}else if(![[M,w],[A,w],[A,_],[M,_]].every(([C,L])=>p(C,L)))continue;if(i.wall&&o>.001){let C=Lr+r*Math.sin(o),[L,T]=t.flip?[C,Lr]:[Lr,C],P=[d(M,w,L),d(A,w,L),d(A,_,T),d(M,_,T)],N=t.flip?w:_,F=[M+.05,A-.05].map(z=>[d(z,N,0),d(z,N,C)]);s.push({corners:P,posts:F,cell:v,skipped:y});continue}if(!i.flat){s.push({corners:[d(M,w,Lr),d(A,w,Lr),d(A,_,Lr),d(M,_,Lr)],posts:[],cell:v,skipped:y});continue}let R=.15,S=R+r*Math.sin(o),[E,I]=t.flip?[_,w]:[w,_],O=[d(M,E,R),d(A,E,R),d(A,I,S),d(M,I,S)];s.push({corners:O,posts:[M+.05,A-.05].flatMap(C=>[[d(C,E,0),d(C,E,R)],[d(C,I,0),d(C,I,S)]]),cell:v,skipped:y})}}),s}function Fr(i,t){return[i[0]-t[0],i[1]-t[1],i[2]-t[2]]}function zo(i){return Math.hypot(i[0],i[1],i[2])}function sr(i){let t=zo(i)||1;return[i[0]/t,i[1]/t,i[2]/t]}function Im(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}var H2=.78,W2=1.18;function X2(i){return{id:i.id,face:i.face,u:i.u,v:i.v,rows:1,cols:1,portrait:!0,module_w:i.w||H2,module_h:i.h||W2}}function Oc(i,t){let e=Vo(i,X2(t))[0];if(!e)return null;let n=r=>[r[0]-i.n[0]*.05,r[1]-i.n[1]*.05,r[2]-i.n[2]*.05];return[n(e.corners[0]),n(e.corners[1]),n(e.corners[2]),n(e.corners[3])]}function Nc(i,t,e){let n=t?Oc(t,e):null;if(!n)return null;let r=(n[0][0]+n[2][0])/2,s=(n[0][1]+n[2][1])/2,o=(n[0][2]+n[2][2])/2;for(let a of[...i.floors].sort((l,c)=>c.elevation-l.elevation)){if(a.elevation>s)continue;let l=a.rooms.find(c=>qt([r,o],c.points));if(l)return{floor:a,roomId:l.id,corners:n}}return null}var Go=1712952,Ho=2239816,Om=1318193,or=Dt(3662079,.9),Ds=Dt(5995775,.45),Je=.14,Y2=9427199,q2=13226982,$2=14936565,Z2={black:{glass:new j(329483),edge:Dt(9082544,.32),cells:Dt(2766160,.22)},blue:{glass:new j(1386842),edge:Dt(10467583,.55),cells:Dt(4025599,.35)}},K2=Dt(13226982,.5),J2=Dt(13226982,.85),j2=Dt(16757575,.95),Lm=new j(2845583),Fm=new j(1713986),Q2=new j(3662079).multiplyScalar(.35),Dm=new j(4871791);function tS(i){return i.floors.filter(e=>e.rooms.some(n=>n.points.length>=3)).sort((e,n)=>n.elevation-e.elevation)[0]??null}function Nm(i,t=new Map){let e=i.settings.roof,n=(e==null?void 0:e.type)==="custom"?null:iS(i),r=(e==null?void 0:e.type)==="custom"?rS(i,e.sections??[],e.overhang):n?[n]:[];return nS(i,r),eS(i,r,t),r}function eS(i,t,e){var s;let n=((s=i.settings.roof)==null?void 0:s.windows)??[];if(!n.length||!t.length)return;let r=new Map(Or(i).map(o=>[o.key,o]));for(let o of n){let a=r.get(o.face),l=a?Oc(a,o):null;if(!a||!l)continue;let c=a.section?t.find(P=>{var N;return(N=P.sections)==null?void 0:N.includes(a.section)}):t[0];if(!c)continue;let f=o.float?Nc(i,a,o):null,u=f&&f.floor.id!==c.floor.id&&f.floor.elevation<c.floor.elevation?f.floor:null,h=u?u.elevation:c.floor.elevation+c.base,d=P=>[P[0],P[1]-h,P[2]],[p,b,g,m]=l.map(d),x=e.get(o.id)??{open:0,tilt:0,cover:0},v=!!f&&(u!==null||f.floor.id===c.floor.id),y=u?(c.winBelow??=new Map).get(u.id)??c.winBelow.set(u.id,{floor:u,solid:new ie,lines:new Ne,glass:new ie}).get(u.id):v?c.win??={solid:new ie,lines:new Ne,glass:new ie}:c.winRoof??={solid:new ie,lines:new Ne,glass:new ie},M=(P,N)=>[P[0]+a.n[0]*N,P[1]+a.n[1]*N,P[2]+a.n[2]*N],w=(P,N,F)=>[P[0]+(N[0]-P[0])*F,P[1]+(N[1]-P[1])*F,P[2]+(N[2]-P[2])*F],A=x.open>.02||x.tilt>.02?j2:J2,_=[p,b,g,m].map(P=>M(P,.06)),R=[p,b,g,m].map(P=>M(P,-.02));for(let P=0;P<4;P++){y.lines.seg(_[P],_[(P+1)%4],A);let N=(P+1)%4;y.solid.tri(R[P],R[N],_[N],Dm),y.solid.tri(R[P],_[N],_[P],Dm)}let S=(x.open>.02?30*Math.min(1,x.open):x.tilt>.5?12:0)*ae,E=Math.hypot(g[0]-b[0],g[1]-b[1],g[2]-b[2]),I=P=>{let N=a.es;return[P[0]-N[0]*E*Math.cos(S)+a.n[0]*E*Math.sin(S),P[1]-N[1]*E*Math.cos(S)+a.n[1]*E*Math.sin(S),P[2]-N[2]*E*Math.cos(S)+a.n[2]*E*Math.sin(S)]},O=M(m,.065),C=M(g,.065),L=I(O),T=I(C);y.glass.tri(L,T,C,Lm),y.glass.tri(L,C,O,Lm);for(let[P,N]of[[L,T],[T,C],[C,O],[O,L]])y.lines.seg(P,N,A);if(x.cover>.02){let P=Math.min(1,x.cover),N=M(w(O,L,P),.01),F=M(w(C,T,P),.01),z=M(O,.01),B=M(C,.01);y.solid.tri(N,F,B,Fm),y.solid.tri(N,B,z,Fm);let V=Math.max(1,Math.round(E*P/.05));for(let H=1;H<=V;H++){let J=H/V;y.lines.seg(M(w(z,N,J),.004),M(w(B,F,J),.004),Q2)}}}}function nS(i,t){var r;let e=((r=i.settings.roof)==null?void 0:r.solar)??[];if(!e.length||!t.length)return;let n=new Map(Or(i).map(s=>[s.key,s]));for(let s of e){let o=n.get(s.face);if(!o)continue;let a=o.section?t.find(l=>{var c;return(c=l.sections)==null?void 0:c.includes(o.section)}):t[0];a&&xf(a.solid,a.lines,o,s,a.floor.elevation+a.base)}}function xf(i,t,e,n,r){let s=c=>[c[0],c[1]-r,c[2]],o=Z2[n.look==="blue"?"blue":"black"],a=n.portrait===!1?10:6,l=n.portrait===!1?6:10;for(let c of Vo(e,n)){let[f,u,h,d]=c.corners.map(s);i.tri(f,u,h,o.glass),i.tri(f,h,d,o.glass),i.tri(f,h,u,o.glass),i.tri(f,d,h,o.glass);let p=(m,x=.004)=>[m[0]+e.n[0]*x,m[1]+e.n[1]*x,m[2]+e.n[2]*x],b=(m,x,v)=>[m[0]+(x[0]-m[0])*v,m[1]+(x[1]-m[1])*v,m[2]+(x[2]-m[2])*v],g=[f,u,h,d].map(m=>p(m));for(let m=0;m<4;m++)t.seg(g[m],g[(m+1)%4],o.edge);for(let m=1;m<a;m++)t.seg(p(b(f,u,m/a)),p(b(d,h,m/a)),o.cells);for(let m=1;m<l;m++)t.seg(p(b(f,d,m/l)),p(b(u,h,m/l)),o.cells);for(let[m,x]of c.posts)t.seg(s(m),s(x),K2)}}function iS(i){let t=i.settings.roof,e=tS(i);if(!e||!t||t.type==="none"||t.type==="custom")return null;let n=e.rooms.flatMap(S=>S.points.map(E=>E[0])),r=e.rooms.flatMap(S=>S.points.map(E=>E[1])),s=i.settings.wall_exterior+t.overhang,o=Math.min(...n)-s,a=Math.max(...n)+s,l=Math.min(...r)-s,c=Math.max(...r)+s,f=new ie,u=new Ne;if(t.type==="flat"){Ie(f,[[o,l],[a,l],[a,c],[o,c]],0,.25,Go,Ho,{bottom:!0});let S=.252;for(let[E,I]of[[[o,l],[a,l]],[[a,l],[a,c]],[[a,c],[o,c]],[[o,c],[o,l]]])u.seg([E[0],S,E[1]],[I[0],S,I[1]],or),u.seg([E[0],0,E[1]],[I[0],0,I[1]],Ds);return{floor:e,base:e.height,solid:f,lines:u,glass:new ie}}let h=a-o>=c-l,d=t.ridge==="short"?!h:h,p=(d?c-l:a-o)/2,b=p*Math.tan(t.pitch*ae),g=(S,E,I)=>d?[S,I,(l+c)/2+E]:[(o+a)/2+E,I,S],[m,x]=d?[o,a]:[l,c],v=new j(Ho),y=new j(Go),M=(S,E,I,O,C)=>{f.tri(S,E,I,C),f.tri(S,I,O,C)};for(let S of[-1,1]){M(g(m,S*p,0),g(x,S*p,0),g(x,0,b),g(m,0,b),v),M(g(m,S*p,-Je),g(m,0,b-Je),g(x,0,b-Je),g(x,S*p,-Je),y),M(g(m,S*p,-Je),g(x,S*p,-Je),g(x,S*p,0),g(m,S*p,0),y);for(let E of[m,x])M(g(E,S*p,-Je),g(E,S*p,0),g(E,0,b),g(E,0,b-Je),y);u.seg(g(m,S*p,0),g(x,S*p,0),Ds);for(let E of[m,x])u.seg(g(E,S*p,0),g(E,0,b),Ds)}let w=t.overhang,A=new j(Om),_=p-w,R=_*Math.tan(t.pitch*ae);for(let S of[m+w,x-w])f.tri(g(S,-_,-Je),g(S,_,-Je),g(S,0,R-Je),A),f.tri(g(S,_,-Je),g(S,-_,-Je),g(S,0,R-Je),A);return u.seg(g(m,0,b+.004),g(x,0,b+.004),or),{floor:e,base:e.height,solid:f,lines:u,glass:new ie}}function rS(i,t,e){let n=i.floors.filter(l=>l.rooms.length>0).sort((l,c)=>l.elevation-c.elevation);if(!n.length)return[];let r=new Map,s=new Map(Or(i).map(l=>[l.key,l])),o=t.filter(l=>Math.abs(l.x1-l.x0)>=.1&&Math.abs(l.z1-l.z0)>=.1),a=new Map(o.map(l=>{let c=Ar(t,l),f=c?null:L0(t,l),u=c?qh(c,l):f?D0(l,f):l,h=Sc(i,c?u:l,u.overhang??e),d=f?{...h,[f.end===0?"u0":"u1"]:0}:h,p=!u.open&&u.shape!=="flat"&&u.shape!=="parapet";return[l,{parent:c,junction:f,drawn:u,ov:d,covers:p?P0(u,Rr(u,d).faces):[]}]}));for(let l of o){let c=a.get(l),f=E0(i,l)??n[0],u=l.open?`${f.id}:open`:f.id,h=r.get(u);h||r.set(u,h={floor:f,base:0,solid:new ie,lines:new Ne,glass:new ie,sections:[],lift:!l.open}),h.sections.push(l.id);let d=c.parent,p=f.elevation+f.height>l.base+.05&&!l.dormer&&!d,b=t.filter(y=>y!==l&&Ar(t,y)===l).flatMap(y=>T0(l,y));for(let y of i.settings.roof.windows??[]){let M=s.get(y.face),w=M&&M.section===l.id?Oc(M,y):null;if(!w)continue;let A=w.map(_=>pi(l,_[0],_[2]));b.push({u0:Math.min(...A.map(_=>_[0])),u1:Math.max(...A.map(_=>_[0])),v0:Math.min(...A.map(_=>_[1])),v1:Math.max(...A.map(_=>_[1]))})}let g=c.drawn,m=c.junction?1-c.junction.end:null;if(d){let y=an(g),M=Rr(d,{u0:0,u1:0,a:0,b:0}),w=A=>{let[_,R]=y.at(A,y.w/2),[S,E]=pi(d,_,R);return Oo(M,S,E)??on(d).y(E)};m=w(y.u0)<=w(y.u1)?0:1}let x=o.filter(y=>I0(t,l,y)),v=x.length?{covers:Kh(g,x.flatMap(y=>a.get(y).covers)),lines:Kh(g,x.filter(y=>o.indexOf(y)>o.indexOf(l)).flatMap(y=>a.get(y).covers)),wallU:c.junction?[an(l).u0,an(l).u1]:null}:null;sS(h.solid,h.lines,g,c.ov,f.elevation,h.glass,p,b,m,v)}return[...r.values()].sort((l,c)=>+(l.lift===!1)-+(c.lift===!1))}function sS(i,t,e,n,r,s=i,o=!1,a=[],l=null,c=null){let f=an(e),u=on(e),h=typeof n=="number"?{u0:n,u1:n,a:n,b:n}:n,d=Math.max(0,h.a),p=Math.max(0,h.b),b=f.w,g=f.u0-Math.max(0,h.u0),m=f.u1+Math.max(0,h.u1),x=(T,P,N)=>{let[F,z]=f.at(T,P);return[F,N-r,z]},v=new j(Ho),y=new j(Go),M=new j(Om),w=(T,P)=>{for(let N=1;N+1<T.length;N++)i.tri(T[0],T[N],T[N+1],P)},A=[],_=[],R=[],S=[null,null],E=[];if(e.shape==="flat"||e.shape==="parapet"){let T=e.eave_a,P=e.shape==="parapet",N=e.points&&e.points.length>=3?M0(e,P?0:Math.max(0,Math.min(h.a,h.b,h.u0,h.u1))):P?[f.at(f.u0,0),f.at(f.u1,0),f.at(f.u1,b),f.at(f.u0,b)]:[f.at(g,-d),f.at(m,-d),f.at(m,b+p),f.at(g,b+p)];Ie(i,N,T-r,T-r+.25,Go,Ho,{bottom:!0});for(let F=0;F<N.length;F++){let z=N[F],B=N[(F+1)%N.length];t.seg([z[0],T-r+.252,z[1]],[B[0],T-r+.252,B[1]],or),t.seg([z[0],T-r,z[1]],[B[0],T-r,B[1]],Ds)}if(P){let F=H=>$n(H)>=0?H:[...H].reverse(),z=F(N),B=Do(z,-.2),V=z.length;for(let H=0;H<V;H++){let J=F([z[H],z[(H+1)%V],B[(H+1)%V],B[H]]);Ie(i,J,T-r+.25,T-r+.65,Go,Ho),t.seg([z[H][0],T-r+.652,z[H][1]],[z[(H+1)%V][0],T-r+.652,z[(H+1)%V][1]],or),t.seg([B[H][0],T-r+.652,B[H][1]],[B[(H+1)%V][0],T-r+.652,B[(H+1)%V][1]],or)}}}else{let T=Rr(e,h);A=T.faces;for(let P of a)A=A.flatMap(N=>$h(N,P));if(_=T.rim,R=T.ridges,S=T.gables,c){for(let P of A)for(let N of c.lines){let F=C0(P,N.poly);if(F)for(let[z,B]of Zh(F[0],F[1],c.covers.filter(V=>V!==N)))E.push([z,B])}A=A.flatMap(P=>R0(P,c.covers))}}let I=!!e.open,O=new j(Y2);for(let T of A){if(I){for(let P=1;P+1<T.length;P++)s.tri(x(T[0][0],T[0][1],T[0][2]),x(T[P][0],T[P][1],T[P][2]),x(T[P+1][0],T[P+1][1],T[P+1][2]),O);continue}w(T.map(([P,N,F])=>x(P,N,F)),v),w(T.map(([P,N,F])=>x(P,N,F-Je)),y)}let C=(T,P)=>c?Zh(T,P,c.covers):[[T,P]];for(let T=0;T<_.length;T++)for(let[[P,N,F],[z,B,V]]of C(_[T],_[(T+1)%_.length]))I||w([x(P,N,F),x(z,B,V),x(z,B,V-Je),x(P,N,F-Je)],y),t.seg(x(P,N,F),x(z,B,V),I?or:Ds);if(I){oS(i,t,f,u,h,x,r);return}for(let[T,P]of R)for(let[[N,F,z],[B,V,H]]of C(T,P))t.seg(x(N,F,z+.004),x(B,V,H+.004),or);for(let[[T,P,N],[F,z,B]]of E)t.seg(x(T,P,N+.004),x(F,z,B+.004),or);let L=e.base;if(!o){for(let T of[0,1]){let P=S[T];if(!P||l!==null&&l!==T)continue;let N=aS(P,L-Je),F=T===0?f.u0:f.u1;N.length>=3&&w(N.map(([z,B])=>x(F,z,B)),M)}if(e.shape!=="flat"&&e.shape!=="parapet"){let[T,P]=(c==null?void 0:c.wallU)??[f.u0,f.u1];for(let N of[0,b]){let F=u.y(N)-Je;F>L+.02&&w([x(T,N,L),x(P,N,L),x(P,N,F),x(T,N,F)],M)}}else if(e.eave_a>L+.02)for(let[T,P,N,F]of[[f.u0,0,f.u1,0],[f.u1,0,f.u1,b],[f.u1,b,f.u0,b],[f.u0,b,f.u0,0]])w([x(T,P,L),x(N,F,L),x(N,F,e.eave_a),x(T,P,e.eave_a)],M)}}function oS(i,t,e,n,r,s,o){let a=e.w,l=.12,c=.16,f=r.a>0,u=r.b>0,h=r.u0>0,d=r.u1>0,p=(m,x,v,y,M,w)=>{let A=[e.at(m,v),e.at(x,v),e.at(x,y),e.at(m,y)],_=(A[1][0]-A[0][0])*(A[2][1]-A[0][1])-(A[2][0]-A[0][0])*(A[1][1]-A[0][1]);Ie(i,_<0?[...A].reverse():A,M-o,w-o,q2,$2,{bottom:!0})},b=o;for(let[m,x]of[[0,f],[a,u]]){if(!x)continue;let v=n.y(m)-.03,y=m===0?0:a-l;p(e.u0,e.u1,y,y+l,v-c,v),t.seg(s(e.u0,m,v-c),s(e.u1,m,v-c),Ds)}for(let[m,x]of[[e.u0,h],[e.u1-l,d]])if(x)for(let v=0;v<6;v++){let y=a*v/6,M=a*(v+1)/6,w=Math.min(n.y(y),n.y(M))-.03;p(m,m+l,y,M,w-c,w)}let g=[];for(let[m,x]of[[0,f],[a-l,u]]){if(!x)continue;let v=e.u1-e.u0-l,y=Math.max(1,Math.ceil(v/3.5));for(let M=0;M<=y;M++){let w=e.u0+v*M/y;M===0&&!h||M===y&&!d||g.push([w,m])}}if(!f&&!u)for(let m of[e.u0,e.u1-l])(m===e.u0&&h||m!==e.u0&&d)&&g.push([m,a/2-l/2]);for(let[m,x]of g){let v=n.y(x+l/2)-.03-c;p(m,m+l,x,x+l,b,v)}}function aS(i,t){let e=[];for(let s=0;s<i.length;s++){let[o,a]=i[s];a>=t&&e.push([o,a]);let l=i[s+1];if(l&&(a-t)*(l[1]-t)<0){let c=(t-a)/(l[1]-a);e.push([o+(l[0]-o)*c,t])}}if(e.length<2)return[];let n=e[0],r=e[e.length-1];return r[1]>t&&e.push([r[0],t]),n[1]>t&&e.unshift([n[0],t]),e}var Wo={floor:923177,slab:659744,wall:1252657,wallTop:1323071,edge:3662079,edgeSoft:5995775},Um={wood:{color:1120814,tile:[0,0]},oak:{color:1252141,tile:[1,0]},tiles:{color:923695,tile:[2,0]},carpet:{color:1053995,tile:[0,1]},stone:{color:988971,tile:[1,1]},concrete:{color:1120295,tile:[2,1]}},nn=.2,Bm=-.06,lS=.01,Xo=8,Uc=.42,yf=.42;function Gm(i,t,e,n=[],r=[],s){let{walls:o,open:a}=fi(i.rooms,{exterior:t,interior:e},i.walls??[]),l=(T,P,N,F)=>{let z=F!=null&&F.slope?Math.min(N,Ts(F.slope,T,P)):N,B=s?s(T,P):null;return B===null?z:Math.max(.05,Math.min(z,B))},c=(T,P)=>{let N=s?s(T,P):null;return N!==null&&N<Bm},f=T=>{if(!s)return T;let P=T.map(([F,z])=>{let B=s(F,z);return B===null?1/0:B-Bm});if(P.every(F=>F>=0))return T;if(P.every(F=>F<0))return[];let N=[];for(let F=0;F<T.length;F++){let z=(F+1)%T.length,[B,V]=[T[F],T[z]],[H,J]=[P[F],P[z]];if(H>=0&&N.push(B),H>=0!=J>=0&&Number.isFinite(H)&&Number.isFinite(J)){let tt=H/(H-J);N.push([B[0]+(V[0]-B[0])*tt,B[1]+(V[1]-B[1])*tt])}}return N},u=(T,P,N,F,z,B)=>{if(!s&&!(B!=null&&B.slope))return z;let V=z,H=Math.max(2,Math.ceil((F-N)/.25)+1);for(let J=0;J<H;J++){let tt=N+(F-N)*J/(H-1);V=Math.min(V,l(T[0]+P[0]*tt,T[1]+P[1]*tt,z,B))}return V},h=new ie(!0,!0),d=[],p=new Ne,b=[];for(let T of i.rooms){if(T.points.length<3)continue;let P=kc(T.points),N=Um[T.floor_material]??Um.wood,F=new j(N.color),z=n.flatMap(ot=>{if(nf(ot,P)&&(!Qh(ot)||nf(ot,P,.002)))return[ot];if(!Qh(ot))return[];let X=dS(Ps(P,ot));return X.length>=3&&Math.abs($n(X))>.01?[kc(X)]:[]}),B=k0(z).map(ot=>z0(kc(ot),.003));b.push(...B);let V=[...P,...B.flat()],H=h.count;for(let[ot,X,q]of pn(P,B)){let Y=V[ot],st=V[X],rt=V[q];h.tri([Y[0],0,Y[1]],[rt[0],0,rt[1]],[st[0],0,st[1]],F,F,F,[Y[0],Y[1],rt[0],rt[1],st[0],st[1]],Qt,N.tile)}d.push({roomId:T.id,start:H,end:h.count,color:N.color});let J=new j(Wo.slab),tt=ot=>{for(let X=0;X<ot.length;X++){let q=ot[X],Y=ot[(X+1)%ot.length];h.tri([q[0],-nn,q[1]],[q[0],0,q[1]],[Y[0],0,Y[1]],J),h.tri([q[0],-nn,q[1]],[Y[0],0,Y[1]],[Y[0],-nn,Y[1]],J)}};tt(P);for(let ot of B){tt([...kc(ot)].reverse());for(let X=0;X<ot.length;X++){let q=ot[X],Y=ot[(X+1)%ot.length];p.seg([q[0],.006,q[1]],[Y[0],.006,Y[1]],er),p.seg([q[0],-nn,q[1]],[Y[0],-nn,Y[1]],Ei)}}}let g=new Map,m=[],x=new Map,v=new Map;for(let T of o){if(!T.free)continue;let P=x0(T,i.rooms);P!==null&&v.set(T,P)}for(let T of o){let P="interior",N=null,F=v.get(T);if(T.exterior||F!==void 0){let B=T.b[0]-T.a[0],V=T.b[1]-T.a[1],H=Math.hypot(B,V)||1,J=F===!1?-1:1,tt=[J*V/H,-J*B/H],ot=(Math.round(Math.atan2(tt[1],tt[0])/(2*Math.PI)*Xo)%Xo+Xo)%Xo;P=`s${ot}`;let X=ot/Xo*2*Math.PI;N=[Math.cos(X),Math.sin(X)]}let z=g.get(P);z===void 0&&(z=m.length,g.set(P,z),m.push(N)),x.set(T,z)}let y=new Map,M=[];for(let T of i.openings){let P=As(T,i.rooms,i.walls??[]);if(!P)continue;let N=Rs(o,T,P);if(!N)continue;let{wall:F,s:z}=N,B=Vc([F.b[0]-F.a[0],F.b[1]-F.a[1]]),V=Math.hypot(F.b[0]-F.a[0],F.b[1]-F.a[1]),H=z-T.width/2<-1e-6?zh(o,F,!1):null,J=z+T.width/2>V+1e-6?zh(o,F,!0):null,tt=Jt=>Jt?Math.hypot(Jt.b[0]-Jt.a[0],Jt.b[1]-Jt.a[1]):0,ot=-tt(H),X=V+tt(J),q=Math.min(T.width,X-ot),Y=Math.max(ot,Math.min(X-q,z-q/2)),st=P.room.points,rt=v.get(F),lt=F.free?rt??B[0]*(st[1][0]-st[0][0])+B[1]*(st[1][1]-st[0][1])>0:F.exterior||F.roomLeft===T.room_id,gt=[-B[1],B[0]],dt=lt?gt:[-gt[0],-gt[1]],xt=Math.min(u(F.a,B,Y,Y+q,Yo(F,i.height),F)-.02,T.sill+T.height),bt=Math.max(0,Math.min(T.sill,xt-.1)),Ut=[dt[1],-dt[0]],$t=B[0]*Ut[0]+B[1]*Ut[1]>0,Nt={opening:T,bucket:x.get(F),start:[F.a[0]+B[0]*Y,F.a[1]+B[1]*Y],axis:B,width:q,toRoom:dt,faceRoom:lt?F.left:F.right,faceOut:lt?F.right:F.left,sill:bt,top:xt,hingeAtStart:T.hinge==="left"===$t,exterior:F.exterior||rt!==void 0};M.push(Nt);let se=y.get(F);se||y.set(F,se=[]),se.push({s0:Y,s1:Y+q,sill:bt,top:xt,info:Nt});for(let Jt of[H,J]){if(!Jt)continue;let Te=G=>(F.a[0]+B[0]*G-Jt.a[0])*B[0]+(F.a[1]+B[1]*G-Jt.a[1])*B[1],$=Math.max(0,Te(Y)),Ee=Math.min(tt(Jt),Te(Y+q));if(Ee-$<1e-4)continue;let ge=y.get(Jt);ge||y.set(Jt,ge=[]),ge.push({s0:$,s1:Ee,sill:bt,top:xt,info:Nt,cont:!0})}}let w=Math.min(i.cut_height,i.height),A=new ie;for(let T of o){let P=x.get(T),N=Vc([T.b[0]-T.a[0],T.b[1]-T.a[1]]),F=(y.get(T)??[]).sort((Y,st)=>Y.s0-st.s0),z=Yo(T,i.height),B=[],V=[-1/0,...new Set(F.flatMap(Y=>[Y.s0,Y.s1])).values(),1/0].sort((Y,st)=>Y-st);for(let Y=0;Y+1<V.length;Y++){let st=V[Y],rt=V[Y+1];if(rt-st<1e-6)continue;let lt=Number.isFinite(st)&&Number.isFinite(rt)?(st+rt)/2:Number.isFinite(st)?st+1:rt-1,gt=F.filter(bt=>bt.s0<lt&&bt.s1>lt).map(bt=>[bt.sill,bt.top]).sort((bt,Ut)=>bt[0]-Ut[0]),dt=[],xt=-nn;for(let[bt,Ut]of gt)bt>xt+1e-4&&dt.push([xt,bt<1e-4?-lS:bt]),xt=Math.max(xt,Ut);z>xt+1e-4&&dt.push([xt,z]),B.push({t0:st,t1:rt,ranges:dt})}let H=Math.hypot(T.b[0]-T.a[0],T.b[1]-T.a[1]),J=(s||T.slope)&&u(T.a,N,0,H,z,T)<z-.001,tt=J?B.flatMap(Y=>{let st=Math.max(Y.t0,-.5),rt=Math.min(Y.t1,H+.5),lt=Math.max(1,Math.ceil((rt-st)/.3));return Array.from({length:lt},(gt,dt)=>({t0:dt===0?Y.t0:st+(rt-st)*dt/lt,t1:dt===lt-1?Y.t1:st+(rt-st)*(dt+1)/lt,ranges:Y.ranges,inner0:dt>0,inner1:dt<lt-1}))}):B.map(Y=>({...Y,inner0:!1,inner1:!1})),ot=Y=>(Y[0]-T.a[0])*N[0]+(Y[1]-T.a[1])*N[1],X=Y=>{if(!s)return[Y];let st=Bc(T.footprint,T.a,N,Y.t0,Y.t1),rt=st.filter(([xt,bt])=>c(xt,bt)).length;if(rt===0)return[Y];if(rt===st.length)return[];let lt=Math.max(Y.t0,-.5),gt=Math.min(Y.t1,H+.5),dt=Math.max(1,Math.ceil((gt-lt)/.05));return Array.from({length:dt},(xt,bt)=>({t0:bt===0?Y.t0:lt+(gt-lt)*bt/dt,t1:bt===dt-1?Y.t1:lt+(gt-lt)*(bt+1)/dt,ranges:Y.ranges,inner0:bt>0||Y.inner0,inner1:bt<dt-1||Y.inner1})).filter(xt=>!Bc(T.footprint,T.a,N,xt.t0,xt.t1).every(([bt,Ut])=>c(bt,Ut)))},q=Y=>{let st=xt=>l(T.a[0]+N[0]*xt,T.a[1]+N[1]*xt,z,T),rt=Math.max(Y.t0,0),lt=Math.min(Y.t1,H);if(lt-rt<.01||(st(rt)-w)*(st(lt)-w)>=0)return[Y];let gt=st(lt)>w;for(let xt=0;xt<24;xt++){let bt=(rt+lt)/2;st(bt)>w===gt?lt=bt:rt=bt}let dt=gt?lt:rt;return[{...Y,t1:dt,inner1:!0},{...Y,t0:dt,inner0:!0}]};for(let Y of J?tt.flatMap(X).flatMap(q):tt){let st=J?f(Bc(T.footprint,T.a,N,Y.t0,Y.t1)):Bc(T.footprint,T.a,N,Y.t0,Y.t1);if(st.length<3)continue;let rt=(dt,xt)=>Math.abs(ot(dt)-xt)<1e-4,lt=(dt,xt)=>Y.inner0&&rt(dt,Y.t0)&&rt(xt,Y.t0)||Y.inner1&&rt(dt,Y.t1)&&rt(xt,Y.t1),gt=J?Math.min(...st.map(([dt,xt])=>l(dt,xt,z,T))):z;for(let[dt,xt]of Y.ranges){let bt=Math.min(xt,J?Math.max(...st.map(([se,Jt])=>l(se,Jt,z,T))):xt);if(bt-dt<1e-4||gt-dt<.01)continue;let Ut=dt>.01,$t=J&&xt>gt,Nt=(se,Jt)=>Math.min(xt,l(se,Jt,z,T));if(dt<w-1e-6){let se=bt>w+1e-6?J0+P:nr+P,Jt=$t&&gt<w?(Te,$)=>Math.min(w,Nt(Te,$)):Math.min(bt,w);Ie(A,st,dt,Jt,Wo.wall,Wo.wallTop,{aoFrom:0,bottom:Ut,fold:nr+P,topFold:se,skipSide:lt})}bt>w+1e-6&&gt>w-1e-6&&Ie(A,st,Math.max(dt,w),$t?Nt:bt,Wo.wall,Wo.wallTop,{aoFrom:0,fold:P,bottom:Ut&&dt>=w,skipSide:lt})}}}let _=o.flatMap(T=>T.footprint),R=hS(o,_),S=new Ne;S.p.push(...p.p),S.c.push(...p.c),S.f.push(...p.f);let E=(T,P)=>(y.get(T)??[]).filter(P);for(let T of R.edges){let P=x.get(T.wall);for(let[F,z]of zc(T,E(T.wall,B=>B.sill<=.005)))S.seg([F[0],.004,F[1]],[z[0],.004,z[1]],K0);for(let[F,z]of zc(T,E(T.wall,B=>B.sill<w&&B.top>w)))S.seg([F[0],w,F[1]],[z[0],w,z[1]],af,Cc+P);let N=Yo(T.wall,i.height);for(let[F,z]of zc(T,E(T.wall,B=>B.top>=N-.021))){if(!s&&!T.wall.slope){S.seg([F[0],N,F[1]],[z[0],N,z[1]],er,N<=w+1e-6?nr+P:P);continue}let B=Math.max(1,Math.ceil(Math.hypot(z[0]-F[0],z[1]-F[1])/.3));for(let V=0;V<B;V++){let H=[F[0]+(z[0]-F[0])*V/B,F[1]+(z[1]-F[1])*V/B],J=[F[0]+(z[0]-F[0])*(V+1)/B,F[1]+(z[1]-F[1])*(V+1)/B];if(c(H[0],H[1])&&c(J[0],J[1]))continue;let tt=l(H[0],H[1],N,T.wall),ot=l(J[0],J[1],N,T.wall);S.seg([H[0],tt,H[1]],[J[0],ot,J[1]],er,Math.max(tt,ot)<=w+1e-6?nr+P:P)}}}let I=(T,P)=>l(P[0],P[1],Yo(T,i.height),T);for(let T of R.corners){if(c(T.p[0],T.p[1]))continue;let P=T.walls.reduce((F,z)=>I(z,T.p)>I(F,T.p)+1e-6?z:F,T.wall),N=l(T.p[0],T.p[1],Yo(P,i.height),P);S.segSplit([T.p[0],.004,T.p[1]],[T.p[0],N,T.p[1]],Ei,Math.min(w,N),x.get(P))}for(let T of R.joints){let[P,N]=T.walls,F=[I(P,T.a),I(N,T.a)],z=[I(P,T.b),I(N,T.b)];if(Math.abs(F[0]-F[1])<.01&&Math.abs(z[0]-z[1])<.01)continue;let B=F[1]+z[1]>=F[0]+z[0]?N:P,V=x.get(B),H=Math.max(...F),J=Math.max(...z);S.seg([T.a[0],H,T.a[1]],[T.b[0],J,T.b[1]],er,Math.max(H,J)<=w+1e-6?nr+V:V);for(let[tt,ot]of[[T.a,F],[T.b,z]]){let X=Math.min(...ot),q=Math.max(...ot);q-X>.01&&S.segSplit([tt[0],X,tt[1]],[tt[0],q,tt[1]],Ei,w,V)}}for(let T of y.values())for(let P of T)P.cont||cS(S,P,w);let O=fS(R.edges,i.rooms,y),C=new ie;wm(A,S,i,C);for(let T of r)xf(A,S,T.face,T.field,i.elevation);let L=[];for(let T of i.furniture){if(h0(T.type))continue;let P=A.count,N=S.p.length/6,F=T,z=en(i,F);Ic(A,S,O,F,z),z+F.h>w+.05&&(j0(A,P,w,lf),Q0(S,N,w,lf)),L.push({id:F.id,start:P,end:A.count})}return{floor:h.geometry(),roomTris:d,holes:b,walls:A.geometry(),water:C.geometry(),lines:S.geometry(),shadow:O.geometry(),buckets:m,openings:M,walls2d:o,openRooms:a,wallBuckets:o.map(T=>x.get(T)),furnitureTris:L,roofUnder:s}}function cS(i,t,e){let{info:n}=t,r=n.bucket,s=(l,c,f)=>[n.start[0]+n.axis[0]*(l-t.s0)+n.toRoom[0]*c,f,n.start[1]+n.axis[1]*(l-t.s0)+n.toRoom[1]*c],o=l=>l>e+1e-6?r:Qt,a=Math.max(t.sill,.004);for(let l of[n.faceRoom,-n.faceOut]){for(let c of[t.s0,t.s1])i.segSplit(s(c,l,a),s(c,l,t.top),Ei,e,r);i.seg(s(t.s0,l,t.top),s(t.s1,l,t.top),Ei,o(t.top)),t.sill>.01&&i.seg(s(t.s0,l,t.sill),s(t.s1,l,t.sill),Ei,o(t.sill))}for(let l of[t.s0,t.s1])i.seg(s(l,n.faceRoom,t.top),s(l,-n.faceOut,t.top),Ei,o(t.top)),t.sill>.01&&i.seg(s(l,n.faceRoom,t.sill),s(l,-n.faceOut,t.sill),Ei,o(t.sill)),t.sill<e&&t.top>e&&i.seg(s(l,n.faceRoom,e),s(l,-n.faceOut,e),af,Cc+r)}function Bc(i,t,e,n,r){let s=a=>(a[0]-t[0])*e[0]+(a[1]-t[1])*e[1],o=i;return Number.isFinite(n)&&(o=km(o,a=>s(a)-n)),Number.isFinite(r)&&(o=km(o,a=>r-s(a))),o}function km(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=t(r),a=t(s);if(o>=0&&e.push(r),o>=0!=a>=0){let l=o/(o-a);e.push([r[0]+(s[0]-r[0])*l,r[1]+(s[1]-r[1])*l])}}return e}var zm=i=>Math.round(i*1e3),qo=i=>`${zm(i[0])},${zm(i[1])}`,Vm=(i,t)=>{let e=qo(i),n=qo(t);return e<n?`${e}|${n}`:`${n}|${e}`};function uS(i,t){let e=[];for(let n=0;n<i.length;n++){let r=i[n],s=i[(n+1)%i.length],o=s[0]-r[0],a=s[1]-r[1],l=o*o+a*a;if(l<1e-8)continue;let c=[];for(let u of t){let h=((u[0]-r[0])*o+(u[1]-r[1])*a)/l;if(h<=1e-6||h>=1-1e-6)continue;Math.abs((u[0]-r[0])*a-(u[1]-r[1])*o)/Math.sqrt(l)<1e-4&&c.push(h)}c.sort((u,h)=>u-h);let f=r;for(let u of c){let h=[r[0]+o*u,r[1]+a*u];qo(h)!==qo(f)&&e.push([f,h]),f=h}e.push([f,s])}return e}function hS(i,t){let e=i.map(f=>({wall:f,edges:uS(f.footprint,t)})),n=new Map,r=new Map;for(let{wall:f,edges:u}of e)for(let[h,d]of u){let p=Vm(h,d);n.set(p,(n.get(p)??0)+1);let b=r.get(p);b?b.walls.push(f):r.set(p,{a:h,b:d,walls:[f]})}let s=[];for(let f of r.values())f.walls.length===2&&f.walls[0]!==f.walls[1]&&s.push({a:f.a,b:f.b,walls:[f.walls[0],f.walls[1]]});let o=[],a=new Map,l=(f,u,h)=>{let d=qo(f),p=a.get(d);p||a.set(d,p={p:f,wall:u,walls:[],d:[]}),p.d.push(h),p.walls.includes(u)||p.walls.push(u)};for(let{wall:f,edges:u}of e)for(let[h,d]of u){if(n.get(Vm(h,d))!==1)continue;let p=Math.hypot(d[0]-h[0],d[1]-h[1]);if(p<1e-4)continue;o.push({a:h,b:d,wall:f});let b=[(d[0]-h[0])/p,(d[1]-h[1])/p];l(h,f,b),l(d,f,b)}let c=[];for(let{p:f,wall:u,walls:h,d}of a.values())d.some(p=>d.some(b=>Math.abs(p[0]*b[1]-p[1]*b[0])>.05))&&c.push({p:f,wall:u,walls:h});return{edges:o,corners:c,joints:s}}function zc(i,t){if(!t.length)return[[i.a,i.b]];let e=Vc([i.wall.b[0]-i.wall.a[0],i.wall.b[1]-i.wall.a[1]]),n=Vc([i.b[0]-i.a[0],i.b[1]-i.a[1]]);if(Math.abs(e[0]*n[0]+e[1]*n[1])<.99)return[[i.a,i.b]];let r=u=>(u[0]-i.wall.a[0])*e[0]+(u[1]-i.wall.a[1])*e[1],s=r(i.a),o=r(i.b),a=Math.min(s,o),l=Math.max(s,o),c=[[a,l]];for(let u of t)c=c.flatMap(([h,d])=>{if(u.s1<=h||u.s0>=d)return[[h,d]];let p=[];return u.s0>h&&p.push([h,u.s0]),u.s1<d&&p.push([u.s1,d]),p});let f=u=>{let h=(u-s)/(o-s||1);return[i.a[0]+(i.b[0]-i.a[0])*h,i.a[1]+(i.b[1]-i.a[1])*h]};return c.filter(([u,h])=>h-u>1e-4).map(([u,h])=>s<=o?[f(u),f(h)]:[f(h),f(u)])}function fS(i,t,e){let n=new ie,r=new j(yf,yf,yf),s=new j(1,1,1),o=.002;for(let a of i)for(let[l,c]of zc(a,(e.get(a.wall)??[]).filter(f=>f.sill<=.005))){let f=c[0]-l[0],u=c[1]-l[1],h=Math.hypot(f,u);if(h<.05)continue;let d=[u/h,-f/h],p=[(l[0]+c[0])/2+d[0]*.05,(l[1]+c[1])/2+d[1]*.05];if(!t.some(m=>m.points.length>=3&&qt(p,m.points)))continue;let b=[l[0]+d[0]*Uc,l[1]+d[1]*Uc],g=[c[0]+d[0]*Uc,c[1]+d[1]*Uc];n.tri([l[0],o,l[1]],[b[0],o,b[1]],[g[0],o,g[1]],r,s,s),n.tri([l[0],o,l[1]],[g[0],o,g[1]],[c[0],o,c[1]],r,s,r)}return n}function Hm(i,t){let e=t.furniture.filter(s=>s.type==="stairwell").map(ji),n=i.filter(s=>s.elevation<t.elevation).sort((s,o)=>o.elevation-s.elevation)[0];if(!n)return e;let r=n.furniture.filter(s=>{var o;return(c0.has(s.type)||((o=_e(s.type))==null?void 0:o.hole))&&n.elevation+s.h>=t.elevation-.3}).map(ji);return[...e,...r]}function Yo(i,t){return i.slope?Math.max(i.slope.h0,i.slope.h1):Math.min(t,i.height??t)}function Vc(i){let t=Math.hypot(i[0],i[1])||1;return[i[0]/t,i[1]/t]}function dS(i){return i.filter((t,e)=>{let n=i[(e+i.length-1)%i.length];return i.length<2||Math.hypot(t[0]-n[0],t[1]-n[1])>1e-6})}function kc(i){let t=0;for(let e=0;e<i.length;e++){let n=i[e],r=i[(e+1)%i.length];t+=n[0]*r[1]-r[0]*n[1]}return t>=0?i:[...i].reverse()}var pS=new j(1516340),mS=new j(527897),vf=new j(1779256),$o=new j(1120808),gS=new j(4163256),Wm=new j(5995161),bS=new j(2240842),xS=new j(1318704),yS=.35,vS=.2,Xm=.1;function _S(i,t,e,n){let r=-1/0;for(let s of i.floors)if(!(s.elevation>.3))for(let o of s.outdoor??[])o.points.length<3||o.type==="pool"||o.type==="balcony"||An(o.type)||!qt(e,o.points)||(r=Math.max(r,s.elevation+Ki(s,o)+Tr[o.type]-t.elevation));return r>n?r-n:0}function Ym(i,t,e,n=!1){var p;if(((p=i.settings.terrain)==null?void 0:p.earth)===!1||t.elevation>.3)return null;let r=Jh(i,t);if(!r)return null;let s=(b,g)=>Ms(b,g)-t.elevation,o=n&&r.some(([b,g])=>s(b,g)<-nn-.03);if(!o&&!jh(i,t))return null;let a=t.height,l=-yS,c=(b,g)=>Math.min(a,Ms(b,g)-t.elevation),f=new ie,u=new ie,h=new Ne,d=(b,g,m,x,v,y,M,w)=>{let A=[g[0]-b[0],g[2]-b[2]];-A[1]*v[0]+A[0]*v[1]>0?(w.tri(b,g,m,y,y,M),w.tri(b,m,x,y,M,M)):(w.tri(b,m,g,y,M,y),w.tri(b,x,m,y,M,M))};for(let b=0;b<r.length;b++){let g=r[b],m=r[(b+1)%r.length],x=Math.hypot(m[0]-g[0],m[1]-g[1]);if(x<1e-4)continue;let v=[(m[0]-g[0])/x,(m[1]-g[1])/x],y=[v[1],-v[0]],M=[(g[0]+m[0])/2+y[0]*.05,(g[1]+m[1])/2+y[1]*.05];qt(M,r)&&(y=[-y[0],-y[1]]);let w=(E,I=.012)=>[g[0]+v[0]*E+y[0]*I,g[1]+v[1]*E+y[1]*I],A=[];for(let E of e){if(E.opening.type!=="window"||!E.exterior||E.opening.well===!1)continue;let I=E.start[0]+E.axis[0]*(E.width/2)-E.toRoom[0]*E.faceOut,O=E.start[1]+E.axis[1]*(E.width/2)-E.toRoom[1]*E.faceOut,C=(I-g[0])*v[0]+(O-g[1])*v[1],L=(I-g[0])*y[0]+(O-g[1])*y[1];if(Math.abs(E.axis[0]*v[0]+E.axis[1]*v[1])<.99||L<-.08||L>.6||C<-.05||C>x+.05||!U0(i,t,E.exterior,E.sill,[I,O],y))continue;let T=E.opening.well_depth??N0;A.push({s0:Math.max(0,C-E.width/2-Xm),s1:Math.min(x,C+E.width/2+Xm),bottom:Math.max(l+.05,E.sill-vS),rim:E.opening.well_rim??0,off:Math.max(0,L),depth:T})}let _=new Set([0,x]);for(let E of A)_.add(E.s0),_.add(E.s1);let R=[..._].sort((E,I)=>E-I),S=[];for(let E=0;E<R.length-1;E++){let I=Math.max(1,Math.ceil((R[E+1]-R[E])/.5));for(let O=0;O<I;O++)S.push(R[E]+(R[E+1]-R[E])*O/I)}S.push(x);for(let E=0;E<S.length-1;E++){let I=S[E],O=S[E+1],C=A.find(H=>I>=H.s0-1e-6&&O<=H.s1+1e-6),L=w(I),T=w(O),P=c(L[0],L[1]),N=c(T[0],T[1]),F=C?Math.min(P,C.bottom):P,z=C?Math.min(N,C.bottom):N;if(F>l+.01||z>l+.01){let H=Math.min(F,l),J=Math.min(z,l);d([L[0],H,L[1]],[T[0],J,T[1]],[T[0],Math.max(z,l),T[1]],[L[0],Math.max(F,l),L[1]],y,mS,pS,f)}let B=s(L[0],L[1]),V=s(T[0],T[1]);if(o&&(B<-nn-.01||V<-nn-.01)&&d([L[0],Math.min(B,-nn),L[1]],[T[0],Math.min(V,-nn),T[1]],[T[0],-nn,T[1]],[L[0],-nn,L[1]],y,xS,bS,f),P>l||N>l||o&&(B<-nn||V<-nn)){let H=o?Math.min(B,Math.max(P,l)):Math.max(P,l),J=o?Math.min(V,Math.max(N,l)):Math.max(N,l);h.seg([L[0],H+.004,L[1]],[T[0],J+.004,T[1]],gS)}}for(let E of A){let I=w(E.s0,E.off),O=w(E.s1,E.off),C=[I[0]+y[0]*E.depth,I[1]+y[1]*E.depth],L=[O[0]+y[0]*E.depth,O[1]+y[1]*E.depth],T=[(I[0]+O[0]+C[0]+L[0])/4,(I[1]+O[1]+C[1]+L[1])/4],P=_S(i,t,T,c(T[0],T[1])),N=Math.max(E.rim,P>0?P+.02:0),F=tt=>c(tt[0],tt[1])+N,z=E.bottom,B=(tt,ot)=>[tt[0],ot,tt[1]];u.tri(B(I,z),B(O,z),B(L,z),$o),u.tri(B(I,z),B(L,z),B(C,z),$o);let V=(tt,ot)=>{u.tri(B(tt,z),B(ot,z),B(ot,F(ot)),$o,$o,vf),u.tri(B(tt,z),B(ot,F(ot)),B(tt,F(tt)),$o,vf,vf)};V(I,C),V(O,L),V(C,L);let H=tt=>[tt[0],F(tt)+.01,tt[1]];for(let[tt,ot]of[[I,O],[O,L],[L,C],[C,I]])h.seg(H(tt),H(ot),Wm);let J=Math.max(3,Math.round((E.s1-E.s0)/.12));for(let tt=1;tt<J;tt++){let ot=tt/J,X=[I[0]+(O[0]-I[0])*ot,I[1]+(O[1]-I[1])*ot];h.seg(H(X),H([X[0]+y[0]*E.depth,X[1]+y[1]*E.depth]),Wm)}}}return f.count||u.count?{earth:f,wells:u,lines:h}:null}var qm=i=>Math.round(i*1e3)/1e3;function MS(i,t,e,n){let r=Math.hypot(n[0]-e[0],n[1]-e[1]);if(r<.01)return!1;let s=[(n[0]-e[0])/r,(n[1]-e[1])/r],o=l=>Math.abs(-(l[0]-e[0])*s[1]+(l[1]-e[1])*s[0]),a=l=>(l[0]-e[0])*s[0]+(l[1]-e[1])*s[1];return i.rooms.some(l=>l.id!==t&&l.points.some((c,f)=>{let u=l.points[(f+1)%l.points.length];return o(c)>.02||o(u)>.02?!1:Math.min(r,Math.max(a(c),a(u)))-Math.max(0,Math.min(a(c),a(u)))>.05}))}function $m(i,t,e,n,r,s=.05){let o=i.rooms.find(h=>h.points.length>=3&&qt([t.x,t.z],h.points));if(!o)return[e,n];let a=o.points,l=Rn(a)>=0?1:-1,c=ji({...t}),f=e,u=n;for(let h=0;h<2;h++){let d=ji({...t,x:f,z:u});for(let p=0;p<a.length;p++){let b=a[p],g=a[(p+1)%a.length],m=Math.hypot(g[0]-b[0],g[1]-b[1]);if(m<.05)continue;let x=[(g[0]-b[0])/m,(g[1]-b[1])/m],v=[-x[1]*l,x[0]*l],y=MS(i,o.id,b,g)?r/2:0,M=0;d.forEach((w,A)=>{let _=(w[0]-b[0])*x[0]+(w[1]-b[1])*x[1];if(_<-.01||_>m+.01)return;let R=(w[0]-b[0])*v[0]+(w[1]-b[1])*v[1]-y,S=c[A];(S[0]-b[0])*v[0]+(S[1]-b[1])*v[1]-y<-s||R<M&&(M=R)}),M<-1e-4&&(f-=v[0]*M,u-=v[1]*M)}}return[qm(f),qm(u)]}var SS=500,wS=1e3;function Zm(i,t){let e=t-i.timeStamp;return e>wS&&e<6e4}var Km=.12,Jm=1.35,TS=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Gc=class{view={target:new W,radius:16,theta:-.6,phi:.85};minRadius=2;maxRadius=80;leftDragTurns=!0;angleLock=!1;rightClickBack=!1;pointers=new Map;velocity={theta:0,phi:0};flight=null;down=null;lastTap=0;holdTimer;held=!1;grabbing=!1;swiping=null;pinch=null;el;camera;events;listeners=[];constructor(t,e,n){this.el=t,this.camera=e,this.events=n;let r=(s,o,a)=>{t.addEventListener(s,o,a),this.listeners.push([s,o])};r("pointerdown",s=>this.onDown(s)),r("pointermove",s=>this.onMove(s)),r("pointerup",s=>this.onUp(s)),r("pointercancel",s=>this.onUp(s)),r("wheel",s=>this.onWheel(s),{passive:!1}),r("contextmenu",s=>s.preventDefault())}dispose(){clearTimeout(this.holdTimer);for(let[t,e]of this.listeners)this.el.removeEventListener(t,e)}get active(){return this.pointers.size>0||this.flight!==null}update(t){let e=!1;if(this.flight){let{from:a,to:l,start:c,duration:f}=this.flight,u=Math.min(1,(t-c)/f),h=TS(u);this.view.target.lerpVectors(a.target,l.target,h),this.view.radius=a.radius+(l.radius-a.radius)*h,this.view.theta=a.theta+(l.theta-a.theta)*h,this.view.phi=a.phi+(l.phi-a.phi)*h,u>=1&&(this.flight=null),e=!0}else this.pointers.size===0&&(Math.abs(this.velocity.theta)>1e-4||Math.abs(this.velocity.phi)>1e-4)&&(this.view.theta+=this.velocity.theta,this.view.phi=_f(this.view.phi+this.velocity.phi,Km,Jm),this.velocity.theta*=.9,this.velocity.phi*=.9,e=!0);let{target:n,radius:r,theta:s,phi:o}=this.view;return this.camera.position.set(n.x+r*Math.sin(o)*Math.sin(s),n.y+r*Math.cos(o),n.z+r*Math.sin(o)*Math.cos(s)),this.camera.lookAt(n),e}flyTo(t,e=700,n=!1){let r={...this.view,target:this.view.target.clone()},s=t.theta??r.theta;for(;s-r.theta>Math.PI;)s-=2*Math.PI;for(;s-r.theta<-Math.PI;)s+=2*Math.PI;let o=this.angleLock&&!n?{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:r.theta,phi:r.phi}:{target:(t.target??r.target).clone(),radius:t.radius??r.radius,theta:s,phi:t.phi??r.phi};this.velocity={theta:0,phi:0},e<=0||matchMedia("(prefers-reduced-motion: reduce)").matches?(this.view=o,this.flight=null):this.flight={from:r,to:o,start:performance.now(),duration:e},this.events.change()}get busy(){return this.flight!==null||this.pointers.size>0}local(t){let e=this.el.getBoundingClientRect();return[t.clientX-e.left,t.clientY-e.top]}onDown(t){if(this.el.setPointerCapture(t.pointerId),this.pointers.size===0&&t.button===0&&this.events.grab&&this.events.grab(...this.local(t))){this.grabbing=!0,this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0};return}if(this.pointers.set(t.pointerId,{x:t.clientX,y:t.clientY,button:t.button,type:t.pointerType}),this.flight=null,this.velocity={theta:0,phi:0},clearTimeout(this.holdTimer),this.held=!1,this.pointers.size===1){this.down={x:t.clientX,y:t.clientY,time:performance.now(),moved:!1};let e=this.el.getBoundingClientRect(),n=t.clientX-e.left,r=t.clientY-e.top;this.holdTimer=setTimeout(()=>{!this.down||this.down.moved||this.pointers.size!==1||(this.held=!0,this.events.hold(n,r))},SS)}else this.down=null,this.pinch=this.pinchState()}onMove(t){var s,o,a,l,c,f;let e=this.pointers.get(t.pointerId);if(!e)return;if(this.grabbing){this.events.drag&&this.events.drag(...this.local(t));return}if(Zm(t,performance.now())&&!this.swiping){e.x=t.clientX,e.y=t.clientY,this.pointers.size>1&&(this.pinch=this.pinchState());return}let n=t.clientX-e.x,r=t.clientY-e.y;if(this.swiping){(o=(s=this.events).swipeMove)==null||o.call(s,t.clientY-this.swiping.startY);return}if(this.down&&!this.down.moved&&Math.hypot(t.clientX-this.down.x,t.clientY-this.down.y)>6){this.down.moved=!0,clearTimeout(this.holdTimer);let u=this.el.getBoundingClientRect();if(this.pointers.size===1&&e.button===0&&!t.shiftKey&&((l=(a=this.events).swipeStart)!=null&&l.call(a,this.down.x-u.left,this.down.y-u.top,t.clientX-this.down.x,t.clientY-this.down.y))){this.swiping={startY:this.down.y},this.velocity={theta:0,phi:0},(f=(c=this.events).swipeMove)==null||f.call(c,t.clientY-this.down.y);return}}if(this.pointers.size===1){if(this.down&&!this.down.moved){e.x=t.clientX,e.y=t.clientY;return}let u=e.type==="mouse";if(u&&!this.leftDragTurns&&e.button===0){e.x=t.clientX,e.y=t.clientY;return}if(this.angleLock||(e.button===1||e.button===2||t.shiftKey)&&(this.leftDragTurns||!u))this.pan(n,r);else{let d=this.el.clientHeight||1,p=-n/d*3.2,b=-r/d*2.4;this.view.theta+=p,this.view.phi=_f(this.view.phi+b,Km,Jm),this.velocity={theta:p,phi:b}}e.x=t.clientX,e.y=t.clientY}else{e.x=t.clientX,e.y=t.clientY;let u=this.pinchState();this.pinch&&u&&(this.zoom(this.pinch.dist/Math.max(1,u.dist)),this.pan(u.mid[0]-this.pinch.mid[0],u.mid[1]-this.pinch.mid[1])),this.pinch=u}this.events.change()}onUp(t){var n,r,s,o,a;let e=(n=this.pointers.get(t.pointerId))==null?void 0:n.button;if(e!==void 0){if(this.grabbing){this.grabbing=!1,this.pointers.delete(t.pointerId),(s=(r=this.events).drop)==null||s.call(r);return}if(this.pointers.delete(t.pointerId),this.swiping){this.swiping=null,this.down=null,(a=(o=this.events).swipeEnd)==null||a.call(o);return}if(this.pointers.size<2&&(this.pinch=null),clearTimeout(this.holdTimer),this.held)this.held=!1,this.down=null;else if(this.down&&!this.down.moved&&t.type==="pointerup"&&performance.now()-this.down.time<400){let l=this.el.getBoundingClientRect(),c=t.clientX-l.left,f=t.clientY-l.top,u=performance.now();e===2&&this.rightClickBack&&this.events.back?(this.lastTap=0,this.events.back()):u-this.lastTap<320?(this.lastTap=0,this.events.doubleTap(c,f)):(this.lastTap=u,this.events.tap(c,f))}this.pointers.size===0&&(this.down=null),this.events.change()}}onWheel(t){t.preventDefault(),!Zm(t,performance.now())&&(this.flight=null,this.zoom(Math.exp(t.deltaY*(t.deltaMode===1?.05:.0015))),this.events.change())}zoom(t){this.view.radius=_f(this.view.radius*t,this.minRadius,this.maxRadius)}pan(t,e){let n=this.el.clientHeight||1,r=2*this.view.radius*Math.tan(this.camera.fov*Math.PI/360)/n,s=new W(Math.cos(this.view.theta),0,-Math.sin(this.view.theta)),o=new W(-Math.sin(this.view.theta),0,-Math.cos(this.view.theta));this.view.target.addScaledVector(s,-t*r),this.view.target.addScaledVector(o,e*r/Math.max(.35,Math.cos(this.view.phi)))}pinchState(){let t=[...this.pointers.values()];if(t.length<2)return null;let[e,n]=t;return{dist:Math.hypot(e.x-n.x,e.y-n.y),mid:[(e.x+n.x)/2,(e.y+n.y)/2]}}};function _f(i,t,e){return Math.min(e,Math.max(t,i))}function mi(i,t,e="plain"){return i.onBeforeCompile=n=>{n.uniforms.uStanding=t.standing,n.uniforms.uGlass=t.glass,n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.a *= 0.2;`))},i.customProgramCacheKey=()=>`fp3d-fold-${e}`,i}var Xc=5,Hc=512,jm=.7,Wc=class{projectors=new Map;loader=new xr;loggedIds="";depthMaterial=new Yt({colorWrite:!1,side:oe});onChange;constructor(t){this.onChange=t}get active(){return this.projectors.size>0}set(t){let e=new Map(t.map(r=>[r.id,r.url]));for(let[r,s]of this.projectors)e.has(r)||this.drop(s);for(let[r,s]of e){let o=this.projectors.get(r);if(!o){let a=new Ye(Hc,Hc);a.depthTexture=new oi(Hc,Hc),o={id:r,url:"",loading:!1,shown:"",texture:null,aspect:16/9,camera:new Qe(60,16/9,jm,40),target:a,matrix:new we,uniforms:{uProjMat:{value:new we},uProjTex:{value:null},uDepth:{value:a.depthTexture},uNearFar:{value:[.15,40]}},overlays:new Map,poseKey:""},o.camera.layers.set(Xc),this.projectors.set(r,o)}o.url=s,this.fetch(o)}let n=[...this.projectors.keys()].join(",");n!==this.loggedIds&&(this.loggedIds=n,console.info(`NeonPlan lab: camera projection for ${this.projectors.size} camera(s)`,n))}fetch(t){if(t.loading||t.url===t.shown||!t.url)return;let e=t.url;t.loading=!0,this.loader.load(e,n=>{var s;if(t.loading=!1,t.shown=e,this.projectors.get(t.id)!==t){n.dispose();return}n.colorSpace=Ue;let r=n.image;r!=null&&r.width&&r.height&&(t.aspect=r.width/r.height),t.texture||console.info(`NeonPlan lab: first picture of ${t.id}`,r==null?void 0:r.width,"x",r==null?void 0:r.height),(s=t.texture)==null||s.dispose(),t.texture=n,t.uniforms.uProjTex.value=n,t.poseKey="",this.onChange(),this.fetch(t)},void 0,()=>{t.loading=!1,t.shown=e,console.warn(`NeonPlan lab: the picture of ${t.id} could not be loaded`)})}update(t,e,n,r,s){var o,a;for(let l of this.projectors.values()){let c=l.texture?r(l.id):null;if(l.texture&&!c&&!l.noPoseLogged&&(l.noPoseLogged=!0,console.warn(`NeonPlan lab: ${l.id} is not drawn as a camera in 3D (no position), so its picture is not cast`)),!c){for(let m of l.overlays.values())m.visible=!1;continue}let f=new Set(n.map(m=>m.key));for(let[m,x]of l.overlays)f.has(m)||((o=x.parent)==null||o.remove(x),x.material.dispose(),l.overlays.delete(m));for(let m of n){let x=l.overlays.get(m.key);(!x||x.parent!==m.parent)&&(x&&((a=x.parent)==null||a.remove(x),x.material.dispose()),x=new Ct(m.geometry,this.material(l,m.masks)),x.renderOrder=2.5,x.frustumCulled=!1,m.parent.add(x),l.overlays.set(m.key,x)),x.geometry!==m.geometry&&(x.geometry=m.geometry),x.visible=m.visible}let u=`${c.position.toArray().map(m=>m.toFixed(3))},${c.direction.toArray().map(m=>m.toFixed(3))},${c.fov},${c.reach},${l.aspect.toFixed(3)},${s}`;if(u===l.poseKey)continue;l.poseKey=u;let h=l.camera,d=Math.min(150,Math.max(20,c.fov))*(Math.PI/180);h.fov=2*Math.atan(Math.tan(d/2)/l.aspect)*180/Math.PI,h.aspect=l.aspect,h.far=c.reach,h.near=jm,h.position.copy(c.position),h.lookAt(c.position.clone().add(c.direction)),h.updateProjectionMatrix(),l.uniforms.uNearFar.value=[h.near,h.far],h.updateMatrixWorld(),l.uniforms.uProjMat.value.multiplyMatrices(h.projectionMatrix,h.matrixWorldInverse);let p=[];for(let m of this.projectors.values())for(let x of m.overlays.values())x.visible&&p.push(x);for(let m of p)m.visible=!1;let b=t.getRenderTarget(),g=e.overrideMaterial;e.overrideMaterial=this.depthMaterial,t.setRenderTarget(l.target),t.clear(),t.render(e,h),t.setRenderTarget(b),e.overrideMaterial=g;for(let m of p)m.visible=!0}}dispose(){for(let t of[...this.projectors.values()])this.drop(t);this.depthMaterial.dispose()}drop(t){var e,n;for(let r of t.overlays.values())(e=r.parent)==null||e.remove(r),r.material.dispose();(n=t.texture)==null||n.dispose(),t.target.dispose(),this.projectors.delete(t.id),this.onChange()}material(t,e){let n=new Yt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-4}),r=e?mi(n,e,"solid").onBeforeCompile:null;return n.onBeforeCompile=(s,o)=>{r==null||r(s,o),Object.assign(s.uniforms,t.uniforms),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor = vec4(fp3dPic.rgb, 0.94 * fp3dEdge * fp3dFar);`)},n.customProgramCacheKey=()=>`fp3d-projection-${e?"fold":"plain"}`,n}};function Qm(i,t){return Math.hypot(t[0]-i[0],t[1]-i[1],t[2]-i[2])}function tg(i,t,e=4){if(i.length<3)return[...i];let n=[i[0]];for(let r=1;r<i.length-1;r++){let[s,o,a]=[i[r-1],i[r],i[r+1]],l=Qm(s,o),c=Qm(o,a),f=Math.min(t,l*.45,c*.45),u=[(s[0]-o[0])/l,(s[1]-o[1])/l,(s[2]-o[2])/l],h=[(a[0]-o[0])/c,(a[1]-o[1])/c,(a[2]-o[2])/c];if(f<.005||u[0]*h[0]+u[1]*h[1]+u[2]*h[2]<-.999){n.push(o);continue}let d=[o[0]+u[0]*f,o[1]+u[1]*f,o[2]+u[2]*f],p=[o[0]+h[0]*f,o[1]+h[1]*f,o[2]+h[2]*f];for(let b=0;b<=e;b++){let g=b/e,m=(1-g)*(1-g),x=2*(1-g)*g,v=g*g;n.push([m*d[0]+x*o[0]+v*p[0],m*d[1]+x*o[1]+v*p[1],m*d[2]+x*o[2]+v*p[2]])}}return n.push(i[i.length-1]),n}var eg=new j(7568261),ng=new j(4869974),ES=new j(3116287),ig=new j(3948872),Mf=Nr([.35,.85,.4]),rg=10;function Nr(i){let t=Math.hypot(i[0],i[1],i[2])||1;return[i[0]/t,i[1]/t,i[2]/t]}function Zo(i,t){return[i[1]*t[2]-i[2]*t[1],i[2]*t[0]-i[0]*t[2],i[0]*t[1]-i[1]*t[0]]}function sg(i){let t=Math.abs(i[1])>.9?[1,0,0]:[0,1,0],e=Nr(Zo(i,t));return[e,Nr(Zo(i,e))]}function Ai(i,t){let e=.5+.5*Math.max(0,t[0]*Mf[0]+t[1]*Mf[1]+t[2]*Mf[2]);return i.clone().multiplyScalar(e)}function Os(i,t,e,n,r,s=!1){let o=Nr([e[0]-t[0],e[1]-t[1],e[2]-t[2]]),[a,l]=sg(o),c=(f,u)=>{let h=u/rg*Math.PI*2,d=[a[0]*Math.cos(h)+l[0]*Math.sin(h),a[1]*Math.cos(h)+l[1]*Math.sin(h),a[2]*Math.cos(h)+l[2]*Math.sin(h)];return{p:[f[0]+d[0]*n,f[1]+d[1]*n,f[2]+d[2]*n],n:d}};for(let f=0;f<rg;f++){let u=c(t,f),h=c(t,f+1),d=c(e,f),p=c(e,f+1);i.tri(u.p,p.p,d.p,Ai(r,u.n),Ai(r,p.n),Ai(r,d.n)),i.tri(u.p,h.p,p.p,Ai(r,u.n),Ai(r,h.n),Ai(r,p.n)),s&&(i.tri([...t],h.p,u.p,Ai(r,[-o[0],-o[1],-o[2]])),i.tri([...e],d.p,p.p,Ai(r,o)))}}function AS(i,t,e,n,r,s,o,a){let l=Nr(Zo(e,n)),c=(u,h,d)=>[t[0]+e[0]*u*r+n[0]*h*s+l[0]*d*o,t[1]+e[1]*u*r+n[1]*h*s+l[1]*d*o,t[2]+e[2]*u*r+n[2]*h*s+l[2]*d*o],f=[];for(let[u,h]of[[e,.5],[[-e[0],-e[1],-e[2]],-.5]])f.push([u,[c(h,-.5,-.5),c(h,.5,-.5),c(h,.5,.5),c(h,-.5,.5)]]);for(let[u,h]of[[n,.5],[[-n[0],-n[1],-n[2]],-.5]])f.push([u,[c(-.5,h,-.5),c(.5,h,-.5),c(.5,h,.5),c(-.5,h,.5)]]);for(let[u,h]of[[l,.5],[[-l[0],-l[1],-l[2]],-.5]])f.push([u,[c(-.5,-.5,h),c(.5,-.5,h),c(.5,.5,h),c(-.5,.5,h)]]);for(let[u,h]of f){let d=Ai(a,u);i.tri(h[0],h[1],h[2],d),i.tri(h[0],h[2],h[3],d),i.tri(h[0],h[2],h[1],d),i.tri(h[0],h[3],h[2],d)}}function og(i,t){if(t.points.length<2)return;let e=t.radius,n=tg(t.points,e*2.2,4);for(let r=1;r<n.length;r++){let[s,o]=[n[r-1],n[r]];if(Math.hypot(o[0]-s[0],o[1]-s[1],o[2]-s[2])<1e-4)continue;let a=s[1]<-.02&&o[1]<-.02?eg.clone().multiplyScalar(.55):eg;Os(i,s,o,e,a,r===1||r===n.length-1)}for(let r of t.fittings){let s=o=>[[r.p[0]-r.dir[0]*o,r.p[1]-r.dir[1]*o,r.p[2]-r.dir[2]*o],[r.p[0]+r.dir[0]*o,r.p[1]+r.dir[1]*o,r.p[2]+r.dir[2]*o]];if(r.kind==="sleeve"){let[o,a]=s(.03);Os(i,o,a,e*1.22,ng,!0)}else if(r.kind==="sight"){let[o,a]=s(.08);Os(i,o,a,e*1.08,t.water?new j(...t.water).multiplyScalar(.9):new j(10475240),!0);for(let l of s(.08)){let[c,f]=[[l[0]-r.dir[0]*.02,l[1]-r.dir[1]*.02,l[2]-r.dir[2]*.02],[l[0]+r.dir[0]*.02,l[1]+r.dir[1]*.02,l[2]+r.dir[2]*.02]];Os(i,c,f,e*1.3,ng,!0)}}else{let[o,a]=s(.055);Os(i,o,a,e*1.4,ig,!0);let[l]=sg(r.dir),c=Math.abs(r.dir[1])>.9?l:[0,1,0],f=[r.p[0]+c[0]*e*2,r.p[1]+c[1]*e*2,r.p[2]+c[2]*e*2];Os(i,[r.p[0]+c[0]*e*1.3,r.p[1]+c[1]*e*1.3,r.p[2]+c[2]*e*1.3],f,e*.35,ig,!0);let u=r.open===!1?Nr(Zo(r.dir,c)):r.dir,h=Nr(Zo(u,c)),d=[f[0]+u[0]*.045,f[1]+u[1]*.045,f[2]+u[2]*.045];AS(i,d,u,h,.1,.028,.012,ES)}}}var Sf=1.62,Yc=.2,wf=class{solids=[];obstacles=[];doors=[];rooms;walls;building;floor;constructor(t,e,n=[]){this.building=t,this.floor=e,this.obstacles.push(...n);let r=t.settings;this.rooms=e.rooms.filter(a=>a.points.length>=3);let s=fi(this.rooms,{exterior:r.wall_exterior,interior:r.wall_interior},e.walls??[]);this.walls=s.walls;let o=new Map;for(let a of e.openings){if(!(a.type!=="window"||a.sill<.1))continue;let c=As(a,e.rooms,e.walls??[]);if(!c)continue;let f=Rs(this.walls,a,c);if(!f)continue;let u=f.wall,h=u.b[0]-u.a[0],d=u.b[1]-u.a[1],p=Math.hypot(h,d)||1,b=h/p,g=d/p,m=[u.a[0]+b*f.s,u.a[1]+g*f.s],x=u.left+.45,v=u.right+.45,y=[[m[0]-g*x,m[1]+b*x],[m[0]+g*v,m[1]-b*v]];if(u.exterior&&e.elevation>.3&&!(e.outdoor??[]).some(w=>w.points.length>=3&&qt(y[1],w.points)))continue;let M=o.get(u)??[];M.push([f.s-a.width/2+.05,f.s+a.width/2-.05]),o.set(u,M),this.doors.push({centre:m,p:y})}for(let a of this.walls){if(a.height!==void 0&&a.height<.9)continue;let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c);f<1e-6||this.solids.push({a:a.a,u:[l/f,c/f],len:f,left:a.left,right:a.right,gaps:o.get(a)??[]})}}blocked(t,e=Yc){return this.wallAt(t,e)||this.obstacleAt(t,e)!==null}obstacleAt(t,e=Yc){for(let n of this.obstacles){let r=t[0]-n.c[0],s=t[1]-n.c[1];if(Math.abs(r*n.u[0]+s*n.u[1])<n.hw+e&&Math.abs(-r*n.u[1]+s*n.u[0])<n.hd+e)return n}return null}wallAt(t,e=Yc){for(let n of this.solids){let r=t[0]-n.a[0],s=t[1]-n.a[1],o=r*n.u[0]+s*n.u[1];if(o<-e||o>n.len+e)continue;let a=-r*n.u[1]+s*n.u[0];if(!(a>n.left+e||a<-n.right-e)&&!n.gaps.some(([l,c])=>o>l+e*.6&&o<c-e*.6))return!0}return!1}clear(t,e){let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=Math.max(1,Math.ceil(n/.08));for(let s=1;s<=r;s++){let o=s/r;if(this.blocked([t[0]+(e[0]-t[0])*o,t[1]+(e[1]-t[1])*o]))return!1}return!0}roomAt(t){return this.rooms.find(e=>qt(t,e.points))??null}path(t,e){if(this.clear(t,e))return[e];if(this.obstacles.length&&!this.wallAt(t)&&this.obstacleAt(t)){let d=this.freeNear(t);if(d!==t){let p=this.path(d,e);return p?[d,...p]:null}}if(this.obstacles.length&&!this.wallAt(e)&&this.obstacleAt(e)){let d=this.freeNear(e);if(d!==e){let p=this.path(t,d);return p?[...p,e]:null}}let n=Math.hypot(e[0]-t[0],e[1]-t[1]),r=this.obstacles.filter(d=>RS(d.c,t,e)<2.5+Math.max(d.hw,d.hd)||n>12).flatMap(d=>{let p=Yc+.12,b=[-d.u[1],d.u[0]];return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([g,m])=>[d.c[0]+d.u[0]*g*(d.hw+p)+b[0]*m*(d.hd+p),d.c[1]+d.u[1]*g*(d.hw+p)+b[1]*m*(d.hd+p)])}).filter(d=>!this.blocked(d)),s=[t,e,...this.doors.flatMap(d=>d.p).filter(d=>!this.blocked(d)),...r],o=s.length,a=new Array(o).fill(1/0),l=new Array(o).fill(-1),c=new Array(o).fill(!1);a[0]=0;let f=new Map,u=(d,p)=>{let b=d<p?`${d}:${p}`:`${p}:${d}`,g=f.get(b);return g===void 0&&(g=this.clear(s[d],s[p]),f.set(b,g)),g};for(;;){let d=-1;for(let p=0;p<o;p++)!c[p]&&a[p]<1/0&&(d<0||a[p]<a[d])&&(d=p);if(d<0)return null;if(d===1)break;c[d]=!0;for(let p=0;p<o;p++){if(c[p]||p===d)continue;let b=Math.hypot(s[d][0]-s[p][0],s[d][1]-s[p][1]);a[d]+b>=a[p]||u(d,p)&&(a[p]=a[d]+b,l[p]=d)}}let h=[];for(let d=1;d>0;d=l[d])h.unshift(s[d]);return h}start(t=!1){for(let r of t?this.floor.openings:[]){if(r.type!=="door")continue;let s=As(r,this.floor.rooms,this.floor.walls??[]);if(!s)continue;let o=Rs(this.walls,r,s);if(!o||!o.wall.exterior)continue;let a=o.wall,l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=Math.hypot(l,c)||1,u=l/f,h=c/f,d=[a.a[0]+u*o.s,a.a[1]+h*o.s],p=[d[0]-h*(a.left+.9),d[1]+u*(a.left+.9)];if(!this.blocked(p))return{p,yaw:this.openYaw(p,Math.atan2(u,-h))}}let e=[...this.rooms].sort((r,s)=>ag(s)-ag(r))[0],n=e?this.freeNear(ui(e.points)):[0,0];return{p:n,yaw:this.openYaw(n)}}sight(t,e,n=9){let r=Math.cos(e),s=Math.sin(e);for(let o=.2;o<n;o+=.15)if(this.blocked([t[0]+r*o,t[1]+s*o],.05))return o;return n}openYaw(t,e=null){let n=e??0,r=-1;for(let s=0;s<24;s++){let o=s/24*Math.PI*2,a=this.sight(t,o);if(e!==null){let l=Math.abs(o-e)%(Math.PI*2);l>Math.PI&&(l=Math.PI*2-l),a*=1.25-l/Math.PI*.5}a>r&&(r=a,n=o)}return n}freeNear(t){if(!this.blocked(t))return t;for(let e=.2;e<2;e+=.2)for(let n=0;n<6.28;n+=.5){let r=[t[0]+Math.cos(n)*e,t[1]+Math.sin(n)*e];if(!this.blocked(r))return r}return t}};function RS(i,t,e){let n=e[0]-t[0],r=e[1]-t[1],s=n*n+r*r||1,o=Math.max(0,Math.min(1,((i[0]-t[0])*n+(i[1]-t[1])*r)/s));return Math.hypot(i[0]-(t[0]+n*o),i[1]-(t[1]+r*o))}function ag(i){let t=0,e=i.points;for(let n=0;n<e.length;n++){let[r,s]=e[n],[o,a]=e[(n+1)%e.length];t+=r*a-o*s}return Math.abs(t/2)}var Tf=class{state;path=[];keys=new Set;stick=null;raf=0;last=0;origUpdate;origWalls;origFov;origNear;onRoom;roomId=null;listeners=[];turnTo=null;v;map;surface;constructor(t,e,n,r){this.v=t,this.map=e,this.surface=n,this.onRoom=r.onRoom;let s=r.start??(()=>{let o=e.start();return{x:o.p[0],z:o.p[1],yaw:o.yaw,pitch:-.05}})();this.state={...s},this.origUpdate=t.controls.update,this.origWalls=t.updateWalls,this.origFov=t.camera.fov,this.origNear=t.camera.near,t.controls.update=()=>this.apply(),t.updateWalls=()=>{for(let o of t.floors)o.mask.standing.value=65535,o.mask.glass.value=0},t.camera.fov=72,t.camera.near=.05,t.camera.updateProjectionMatrix(),t.labels.style.visibility="hidden",this.bind(),this.reportRoom(),t.invalidate()}dispose(){cancelAnimationFrame(this.raf);for(let[t,e,n,r]of this.listeners)t.removeEventListener(e,n,r);this.v.controls.update=this.origUpdate,this.v.updateWalls=this.origWalls,this.v.camera.fov=this.origFov,this.v.camera.near=this.origNear,this.v.camera.updateProjectionMatrix(),this.v.labels.style.visibility="",this.v.invalidate()}setMap(t,e){this.map=t,this.path=[];let n=e??(()=>{let r=t.start();return{x:r.p[0],z:r.p[1],yaw:r.yaw,pitch:-.05}})();this.state={...n},this.reportRoom(),this.kick()}floorY(){let t=this.v.floorMap.get(this.map.floor.id);return(t?t.floor.elevation+t.y:this.map.floor.elevation)+Sf}apply(){let{x:t,z:e,yaw:n,pitch:r}=this.state,s=this.floorY(),o=Math.cos(r);return this.v.camera.position.set(t,s,e),this.v.camera.lookAt(t+Math.cos(n)*o,s+Math.sin(r),e+Math.sin(n)*o),this.v.controls.view.target.set(t,s-Sf,e),!1}goTo(t){let e=this.map.path([this.state.x,this.state.z],this.map.freeNear(t));return e?(this.path=e,this.kick(),!0):!1}goToRoom(t){return this.goTo(ui(t.points))}kick(){this.raf||(this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.tick(t))),this.v.invalidate()}tick(t){this.raf=0;let e=Math.min(.05,(t-this.last)/1e3);this.last=t;let n=!1,r=this.state,s=0,o=0,a=0;if((this.keys.has("w")||this.keys.has("arrowup"))&&(s+=1),(this.keys.has("s")||this.keys.has("arrowdown"))&&(s-=1),this.keys.has("a")&&(o-=1),this.keys.has("d")&&(o+=1),(this.keys.has("arrowleft")||this.keys.has("q"))&&(a-=1),(this.keys.has("arrowright")||this.keys.has("e"))&&(a+=1),this.stick&&(s+=-this.stick.y,a+=this.stick.x*.9),a&&(r.yaw+=a*1.6*e,n=!0),s||o){this.path=[],this.turnTo=null;let l=1.5*e,c=(Math.cos(r.yaw)*s-Math.sin(r.yaw)*o)*l,f=(Math.sin(r.yaw)*s+Math.cos(r.yaw)*o)*l;this.move(c,f),n=!0}else if(this.path.length){let[l,c]=this.path[0],f=l-r.x,u=c-r.z,h=Math.hypot(f,u),d=1.4*e;h<=d?(r.x=l,r.z=c,this.path.shift()):(r.x+=f/h*d,r.z+=u/h*d,this.turnTo=Math.atan2(u,f)),n=!0}if(this.turnTo!==null){let l=this.turnTo-r.yaw;for(;l>Math.PI;)l-=2*Math.PI;for(;l<-Math.PI;)l+=2*Math.PI;Math.abs(l)<.01?this.turnTo=null:(r.yaw+=l*Math.min(1,e*4),n=!0),!this.path.length&&Math.abs(l)<.05&&(this.turnTo=null)}this.reportRoom(),this.v.invalidate(),(n||this.keys.size||this.stick)&&(this.raf=requestAnimationFrame(l=>this.tick(l)))}move(t,e){let n=this.state,r=[n.x+t,n.z+e];if(!this.map.blocked(r)){n.x=r[0],n.z=r[1];return}this.map.blocked([n.x+t,n.z])?this.map.blocked([n.x,n.z+e])||(n.z+=e):n.x+=t}reportRoom(){let t=this.map.roomAt([this.state.x,this.state.z]),e=(t==null?void 0:t.id)??null;e!==this.roomId&&(this.roomId=e,this.onRoom(t))}setStick(t){this.stick=t,this.kick()}floorPoint(t,e){let n=this.surface.getBoundingClientRect(),r=(t-n.left)/n.width*2-1,s=1-(e-n.top)/n.height*2,{yaw:o,pitch:a,x:l,z:c}=this.state,f=this.v.camera.fov*Math.PI/180,u=Math.tan(f/2),h=n.width/n.height,d=Math.cos(a),p=[Math.cos(o)*d,Math.sin(a),Math.sin(o)*d],b=[-Math.sin(o),0,Math.cos(o)],g=[p[1]*b[2]-p[2]*b[1],p[2]*b[0]-p[0]*b[2],p[0]*b[1]-p[1]*b[0]],m=[-g[0],-g[1],-g[2]],x=[p[0]+b[0]*r*u*h+m[0]*s*u,p[1]+b[1]*r*u*h+m[1]*s*u,p[2]+b[2]*r*u*h+m[2]*s*u];if(x[1]>=-.02)return null;let v=Sf/-x[1];return[l+x[0]*v,c+x[2]*v]}bind(){let t=(o,a,l,c)=>{o.addEventListener(a,l,c),this.listeners.push([o,a,l,!!(c!=null&&c.capture)])},e=null;t(this.surface,"pointerdown",o=>{var a,l;e||(e={x:o.clientX,y:o.clientY,moved:!1,id:o.pointerId},(l=(a=this.surface).setPointerCapture)==null||l.call(a,o.pointerId))}),t(this.surface,"pointermove",o=>{if(!e||o.pointerId!==e.id)return;let a=o.clientX-e.x,l=o.clientY-e.y;if(!e.moved&&Math.hypot(a,l)<5)return;e.moved=!0,e.x=o.clientX,e.y=o.clientY;let c=this.v.camera.fov*Math.PI/180/this.surface.clientHeight;this.state.yaw-=a*c*1.1,this.state.pitch=Math.max(-1,Math.min(.8,this.state.pitch+l*c*1.1)),this.turnTo=null,this.v.invalidate()});let n=o=>{if(!e||o.pointerId!==e.id)return;let a=!e.moved;if(e=null,a){let l=this.floorPoint(o.clientX,o.clientY);l&&this.map.roomAt(l)&&this.goTo(l)}};t(this.surface,"pointerup",n),t(this.surface,"pointercancel",()=>e=null),t(this.surface,"wheel",o=>{o.preventDefault();let a=this.state,l=Math.max(-.6,Math.min(.6,-o.deltaY/300));this.path=[],this.move(Math.cos(a.yaw)*l,Math.sin(a.yaw)*l),this.reportRoom(),this.v.invalidate()},{passive:!1});let r=o=>["w","a","s","d","q","e","arrowup","arrowdown","arrowleft","arrowright"].includes(o.key.toLowerCase()),s=o=>{var a,l;return!!((l=(a=o.composedPath()[0])==null?void 0:a.closest)!=null&&l.call(a,"input, textarea, select"))};t(window,"keydown",o=>{!r(o)||s(o)||o.ctrlKey||o.metaKey||o.altKey||(o.preventDefault(),o.stopImmediatePropagation(),this.keys.add(o.key.toLowerCase()),this.kick())},{capture:!0}),t(window,"keyup",o=>{r(o)&&(this.keys.delete(o.key.toLowerCase()),o.stopImmediatePropagation())},{capture:!0}),t(window,"blur",()=>this.keys.clear())}};function CS(i,t){let e=_e(t);if(!e)return null;let n=i.scale??1;return{id:`${i.id}:vehicle`,type:t,x:i.x,z:i.z,rotation:i.rotation,w:e.size[0]*n,d:e.size[1]*n,h:e.size[2]*n,variant:null,entity:null,power:null}}function Ef(i,t){if(!i.furniture.some(n=>n.type==="parking"&&t.has(n.id)))return i;let e=i.furniture.flatMap(n=>{let r=n.type==="parking"?t.get(n.id):void 0,s=r?CS(n,r):null;return s?[n,s]:[n]});return{...i,furniture:e}}var lg=8,cg=1024,Ri=6,qc=class{group=new De;shadow;target=null;arc=new De;glow=LS();textures=[];constructor(){this.shadow=new Ct(new Hn(1,1),new Yt({color:0,transparent:!0,opacity:0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2})),this.shadow.rotation.x=-Math.PI/2,this.shadow.visible=!1,this.arc.visible=!1,this.group.add(this.shadow,this.arc)}setShadow(t,e,n,r,s,o,a=0){var w;let[l,c,f,u]=[n[0]-.5,n[1]-.5,n[2]+.5,n[3]+.5],h=Math.min(cg,Math.max(32,Math.ceil((f-l)*lg))),d=Math.min(cg,Math.max(32,Math.ceil((u-c)*lg)));if(!this.target||this.target.width!==h||this.target.height!==d){(w=this.target)==null||w.dispose(),this.target=new Ye(h,d,{minFilter:Xe,magFilter:Xe,depthBuffer:!1});let A=this.shadow.material;A.map=this.target.texture,A.needsUpdate=!0}let p=new ri,b=A=>{let _=new Float32Array(A.length/2*3);for(let S=0,E=0;S<A.length;S+=2,E+=3)_.set([A[S],-A[S+1],0],E);let R=new Gt;return R.setAttribute("position",new Ft(_,3)),R},g=new Ct(b(e),new Yt({color:16777215,side:oe})),m=[];for(let A of r)for(let _ of pn(A))for(let R of _)m.push(A[R][0],A[R][1]);let x=new Ct(b(m),new Yt({color:0,transparent:!0,opacity:0,blending:Fn,side:oe}));x.renderOrder=1,p.add(g,x);let v=new Ln(l,f,-c,-u,.1,10);v.position.z=1;let y=t.getRenderTarget();t.setRenderTarget(this.target),t.clear(),t.render(p,v),t.setRenderTarget(y);for(let A of[g,x])A.geometry.dispose(),A.material.dispose();this.shadow.scale.set(f-l,u-c,1),this.shadow.position.set((l+f)/2,s,(c+u)/2);let M=this.shadow.material;M.opacity=o,M.color.set(a),this.shadow.visible=o>.01}hideShadow(){this.shadow.visible=!1}showShadow(t){let e=this.shadow.material;this.shadow.visible=t&&!!e.map&&e.opacity>.01}setArc(t){if(this.clearArc(),t.fade<=.01||t.points.length<2)return;let e=t.light?Tn:Re,n=(s,o)=>{let a=IS(t.points.map(c=>c.at),s,t.points.map(c=>PS(c.elevation,t.light).multiplyScalar(c.t<=t.now?1:t.light?.75:.5))),l=new Ct(a,new Yt({vertexColors:!0,transparent:!0,opacity:o*t.fade,blending:e,depthWrite:!1}));return l.renderOrder=6,l};this.arc.add(n(t.size*.09,t.light?.95:1)),t.light||this.arc.add(n(t.size*.3,.22));let r=new Gi(ug(t.hours.flat()),new Si({color:t.light?13658624:16767370,map:this.glow,size:t.size*.55,transparent:!0,opacity:t.fade,blending:e,depthWrite:!1}));if(r.renderOrder=6,this.arc.add(r),t.sun){let s=this.sprite(FS(t.light),t.size*5,t.size*5,t.fade,e);s.position.set(...t.sun),this.arc.add(s)}for(let s of t.labels){let o=this.sprite(DS(`${s.rising?"\u2191":"\u2193"} ${s.text}`,t.light),t.size*5.2,t.size*1.7,t.fade,Tn,!0);o.position.set(...s.at),this.arc.add(o)}this.buildRing(t),this.arc.visible=!0}buildRing(t){let{center:e,r:n,north:r,letters:s}=t.ring,o=e[1]+.03,a=(f,u)=>{let h=r+f*Math.PI/180;return[e[0]+Math.sin(h)*u,o,e[2]-Math.cos(h)*u]},l=[];for(let f=0;f<360;f+=3)l.push(...a(f,n),...a(f+3,n));for(let f=0;f<360;f+=15)l.push(...a(f,n),...a(f,n*(f%90===0?.93:.97)));let c=new qe(ug(l),new $e({color:t.light?9071162:16761963,transparent:!0,opacity:(t.light?.45:.32)*t.fade,blending:t.light?Tn:Re,depthWrite:!1}));c.renderOrder=6,this.arc.add(c),s.forEach((f,u)=>{let h=this.sprite(OS(f,u===0,t.light),t.size*1.6,t.size*1.6,t.fade,Tn,!0);h.position.set(...a(u*90,n*1.07)),h.position.y+=t.size*.6,this.arc.add(h)})}sprite(t,e,n,r,s,o=!1){this.textures.push(t);let a=new eo(new hs({map:t,transparent:!0,opacity:r,blending:s,depthWrite:!1,depthTest:!o}));return a.scale.set(e,n,1),a.renderOrder=6,a}hideArc(){this.clearArc()}clearArc(){var t;for(let e of[...this.arc.children]){this.arc.remove(e);let n=e;(t=n.geometry)==null||t.dispose(),n.material.dispose()}for(let e of this.textures)e.dispose();this.textures=[],this.arc.visible=!1}dispose(){var t;this.clearArc(),(t=this.target)==null||t.dispose(),this.glow.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}};function ug(i){let t=new Gt;return t.setAttribute("position",new Ft(i,3)),t}function PS(i,t){let e=Math.min(1,Math.max(0,i/35)),n=new j(t?13778970:16730666),r=new j(t?14711552:16753978),s=new j(t?15769600:16773832);return e<.4?n.lerp(r,e/.4):r.lerp(s,(e-.4)/.6)}function IS(i,t,e){let n=[],r=[],s=[],o=new W(0,1,0);for(let l=0;l<i.length;l++){let c=new W(...i[l]),f=new W(...i[Math.max(0,l-1)]),h=new W(...i[Math.min(i.length-1,l+1)]).sub(f).normalize(),d=new W().crossVectors(h,o);d.lengthSq()<1e-6&&d.set(1,0,0),d.normalize();let p=new W().crossVectors(d,h).normalize();for(let b=0;b<Ri;b++){let g=b/Ri*Math.PI*2,m=c.clone().addScaledVector(d,Math.cos(g)*t).addScaledVector(p,Math.sin(g)*t);n.push(m.x,m.y,m.z),r.push(e[l].r,e[l].g,e[l].b)}if(l!==0)for(let b=0;b<Ri;b++){let g=(l-1)*Ri+b,m=(l-1)*Ri+(b+1)%Ri,x=l*Ri+b,v=l*Ri+(b+1)%Ri;s.push(g,x,v,g,v,m)}}let a=new Gt;return a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(r,3)),a.setIndex(s),a}function $c(i,t){let e=document.createElement("canvas");return e.width=i,e.height=t,[e,e.getContext("2d")]}function LS(){let[i,t]=$c(64,64),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.25,"rgba(255,255,255,0.8)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new yn(i)}function FS(i){let[t,e]=$c(256,256);e.translate(128,128);for(let r=0;r<12;r++){e.save(),e.rotate(r/12*Math.PI*2);let s=r%2===0?124:92,o=e.createLinearGradient(0,0,0,-s);o.addColorStop(0,i?"rgba(240,140,0,0.75)":"rgba(255,214,140,0.7)"),o.addColorStop(1,"rgba(255,170,60,0)"),e.fillStyle=o,e.beginPath(),e.moveTo(-7,0),e.lineTo(0,-s),e.lineTo(7,0),e.fill(),e.restore()}let n=e.createRadialGradient(0,0,0,0,0,80);return n.addColorStop(0,i?"rgba(255,190,60,0.95)":"rgba(255,236,190,1)"),n.addColorStop(.3,i?"rgba(245,150,20,0.8)":"rgba(255,190,90,0.75)"),n.addColorStop(1,"rgba(255,140,40,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,80,0,Math.PI*2),e.fill(),e.fillStyle=i?"#fff3cf":"#fffaf0",e.beginPath(),e.arc(0,0,22,0,Math.PI*2),e.fill(),new yn(t)}function DS(i,t){let[e,n]=$c(320,104);n.font="600 52px system-ui, sans-serif",n.textAlign="center",n.textBaseline="middle";let r=Math.min(304,n.measureText(i).width+56),s=(320-r)/2;return n.beginPath(),typeof n.roundRect=="function"?n.roundRect(s,10,r,84,42):n.rect(s,10,r,84),n.fillStyle=t?"rgba(255,248,236,0.92)":"rgba(20,12,4,0.72)",n.fill(),n.lineWidth=4,n.strokeStyle=t?"rgba(224,123,0,0.9)":"rgba(255,196,107,0.85)",n.stroke(),n.fillStyle=t?"#a34f00":"#ffe2a8",n.fillText(i,160,54),new yn(e)}function OS(i,t,e){let[n,r]=$c(96,96);return r.font=`${t?800:600} 64px system-ui, sans-serif`,r.textAlign="center",r.textBaseline="middle",r.shadowColor=e?"rgba(255,255,255,0.9)":t?"rgba(255,90,60,0.9)":"rgba(255,196,107,0.8)",r.shadowBlur=12,r.fillStyle=t?e?"#c0301a":"#ff6a4a":e?"#7a5a2a":"#ffd9a0",r.fillText(i,48,52),new yn(n)}var NS=40;function hg(i,t,e,n,r){let s=[];if(n<=0)return s;let o=1/Math.tan(n*Math.PI/180),a=(c,f,u)=>{let h=Math.min(NS,Math.max(0,f-r)*o);return[c-e[0]*h,u-e[1]*h]},l=(c,f,u)=>s.push(c[0],c[1],f[0],f[1],u[0],u[1]);for(let c of i.floors)for(let f of c.rooms){if(f.outdoor||f.points.length<3)continue;let u=c.elevation+(f.ceiling_height??c.height);if(u<=r)continue;let h=Math.max(r,c.elevation),d=f.points.map(([b,g])=>a(b,h,g)),p=f.points.map(([b,g])=>a(b,u,g));for(let[b,g,m]of pn(f.points))l(d[b],d[g],d[m]),l(p[b],p[g],p[m]);for(let b=0;b<f.points.length;b++){let g=(b+1)%f.points.length;l(d[b],d[g],p[g]),l(d[b],p[g],p[b])}}for(let c of t){let f=c.floor.elevation+c.base,u=c.solid.p;for(let h=0;h+8<u.length;h+=9)l(a(u[h],f+u[h+1],u[h+2]),a(u[h+3],f+u[h+4],u[h+5]),a(u[h+6],f+u[h+7],u[h+8]))}return s}function fg(i){if(!i.length)return null;let t=1/0,e=1/0,n=-1/0,r=-1/0;for(let s=0;s<i.length;s+=2)t=Math.min(t,i[s]),n=Math.max(n,i[s]),e=Math.min(e,i[s+1]),r=Math.max(r,i[s+1]);return[t,e,n,r]}function Ko(i,t,e=.3){if(!(t>0))return 0;let n=Math.min(e,t/2),r=Math.min(1,i/n,(t-i)/n);return r>0?r:0}var US=150;function dg(i){let t=i?Dr(i):null;if(!i||!t)return null;let e=i.floors.flatMap(f=>f.rooms.filter(u=>!u.outdoor).flatMap(u=>u.points));if(!e.length)return null;let n=i.settings.sun_arc==="plot",r=n?[...e,...i.floors.flatMap(f=>[...f.rooms.flatMap(u=>u.points),...(f.outdoor??[]).flatMap(u=>u.points),...(f.walls??[]).flatMap(u=>[u.a,u.b])])]:e,[s,o,a,l]=[1/0,-1/0,1/0,-1/0];for(let[f,u]of r)s=Math.min(s,f),o=Math.max(o,f),a=Math.min(a,u),l=Math.max(l,u);let c=Math.max(7,Math.hypot(o-s,l-a)*.62);return{x:(s+o)/2,z:(a+l)/2,y:t.elevation,r:n?Math.min(US,c):c}}function Af(i,t){let e=[],n=[],r=[],s=[],o=[];for(let{face:l,field:c}of i){let f=e.length/3,u=c.portrait===!1?10:6,h=c.portrait===!1?6:10,d=BS(c.id)%1e3/1e3;for(let b of Vo(l,c)){let[g,m,x,v]=b.corners.map(M=>[M[0]+l.n[0]*.006,M[1]+l.n[1]*.006-t,M[2]+l.n[2]*.006]),y=[[g,0,0],[m,1,0],[x,1,1],[v,0,1]];for(let M of[0,1,2,0,2,3]){let[w,A,_]=y[M];e.push(w[0],w[1],w[2]),n.push(A,_),r.push(u,h),s.push(d)}}let p=e.length/3-f;p&&o.push({id:c.id,start:f,count:p})}if(!e.length)return null;let a=new Gt;return a.setAttribute("position",new Ft(e,3)),a.setAttribute("uv",new Ft(n,2)),a.setAttribute("aCells",new Ft(r,2)),a.setAttribute("aPhase",new Ft(s,1)),a.setAttribute("aLevel",new Ft(new Float32Array(e.length/3),1)),{geometry:a,ranges:o}}function Jo(i,t){let e=i.geometry.getAttribute("aLevel"),n=e.array,r=!1;for(let s of i.ranges){let o=Math.min(1,Math.max(0,t.get(s.id)??0));n.fill(o,s.start,s.start+s.count),o>.02&&(r=!0)}return e.needsUpdate=!0,r}function Rf(i){let t=new Yt({transparent:!0,blending:Re,depthWrite:!1,side:oe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(fp3dAmber, vec3(0.9, 1.0, 1.0), fp3dSweep * 0.55) * fp3dGlow;`)},t.customProgramCacheKey=()=>"fp3d-solar-live",t}function BS(i){let t=2166136261;for(let e=0;e<i.length;e++)t=Math.imul(t^i.charCodeAt(e),16777619)>>>0;return t}var mg=`
  varying vec2 vXZ;
  void main() {
    vXZ = position.xz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,kS=`
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
`,zS=mg,VS=`
  uniform vec2 uAxis;
  varying vec2 vXZ;
  void main() {
    // slats across the direction the cover rolls
    float s = fract(dot(vXZ, uAxis) / 0.22);
    float edge = smoothstep(0.0, 0.08, s) * (1.0 - smoothstep(0.9, 1.0, s));
    vec3 base = vec3(0.13, 0.19, 0.3);
    gl_FragColor = vec4(base * (0.65 + 0.35 * edge), 0.96);
  }
`;function pg(i,t){let e=[];for(let[r,s,o]of pn(i))for(let a of[r,o,s])e.push(i[a][0],t,i[a][1]);let n=new Gt;return n.setAttribute("position",new Ft(e,3)),n}function gg(i,t){let e=new De;for(let n of i){if(n.points.length<3)continue;let r=n.floorY!==void 0&&n.floorY!==null&&n.floorY<n.y-.2,s=(o,a)=>{let l=new Ct(pg(n.points,o),new fn({uniforms:{uTime:t,uColor:{value:n.color},uLevel:{value:n.level},uFlow:{value:n.flow?1:0},uHeat:{value:n.heat?1:0},uSurface:{value:a}},vertexShader:mg,fragmentShader:kS,transparent:!0,blending:Re,depthWrite:!1,side:oe}));l.renderOrder=5,l.frustumCulled=!1,e.add(l)};if(r?(s(n.floorY+.01,0),s(n.y+.004,1)):s(n.y+.004,0),n.cover>.02){let o=n.points.map(g=>g[0]),a=n.points.map(g=>g[1]),[l,c,f,u]=[Math.min(...o),Math.max(...o),Math.min(...a),Math.max(...a)],h=c-l>=u-f,d=Math.min(1,n.cover),p=h?[[l-.1,f-.1],[l+(c-l)*d,f-.1],[l+(c-l)*d,u+.1],[l-.1,u+.1]]:[[l-.1,f-.1],[c+.1,f-.1],[c+.1,f+(u-f)*d],[l-.1,f+(u-f)*d]],b=Ps(n.points,p);if(b.length>=3){let g=new Ct(pg(b,n.y+.03),new fn({uniforms:{uAxis:{value:h?[1,0]:[0,1]}},vertexShader:zS,fragmentShader:VS,transparent:!0,side:oe}));g.renderOrder=6,e.add(g);let m=[];for(let v=0;v<b.length;v++){let y=b[v],M=b[(v+1)%b.length];m.push(y[0],n.y+.032,y[1],M[0],n.y+.032,M[1])}let x=new Gt;x.setAttribute("position",new Ft(m,3)),e.add(new qe(x,new $e({color:5995775,transparent:!0,opacity:.6})))}}}return e}function bg(i){var t,e,n;for(let r of i.children)(t=r.geometry)==null||t.dispose(),(n=(e=r.material)==null?void 0:e.dispose)==null||n.call(e);i.clear()}var xg=["neon","blueprint","day"];function yg(i){return xg.indexOf(i)}var jo={value:new W(.22,.88,1)},Qo={value:0};function vg(i){let t=/^#?([0-9a-f]{6})$/i.exec((i==null?void 0:i.trim())??"");if(!t)return null;let e=parseInt(t[1],16);return[(e>>16&255)/255,(e>>8&255)/255,(e&255)/255]}var GS=`
uniform int uTheme;
uniform vec3 uAccent;
uniform int uAccentOn;
vec3 fp3dThemed(vec3 c, bool line, bool accent) {
  float mx = max(c.r, max(c.g, c.b));
  float mn = min(c.r, min(c.g, c.b));
  float sat = mx > 0.0 ? (mx - mn) / mx : 0.0;
  if (uTheme == 0) {
    // an own accent: every line and every cyan surface takes it, as bright as it was
    if (accent && uAccentOn == 1 && (line || (sat > 0.35 && c.r < c.g * 0.8 && c.b > c.g * 0.85 && c.g > c.b * 0.6))) return uAccent * mx;
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
`;function rn(i,t,e=!1,n=!0){let r=i.onBeforeCompile.bind(i),s=i.customProgramCacheKey.bind(i);return i.onBeforeCompile=(o,a)=>{r(o,a),o.uniforms.uTheme=t,o.uniforms.uAccent=jo,o.uniforms.uAccentOn=Qo,o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
${GS}`).replace("#include <color_fragment>",`#include <color_fragment>
  diffuseColor.rgb = fp3dThemed(diffuseColor.rgb, ${e}, ${n});`)},i.customProgramCacheKey=()=>`${s()}-themed-${e?"l":"s"}${n?"":"-na"}`,i}function ta(i){return i==="day"?Tn:Re}var Ci=.012,HS=.012;function Mg(i,t,e,n,r,s=[],o){let a=[],l=[],c=[],f=[],u=(m,x,v,y,M,w,A)=>{for(let _ of[m,x,v,m,v,y])a.push(_[0],_[1],_[2]),l.push(M[0],M[1],M[2]),c.push(w),f.push(A)};i.rooms.forEach((m,x)=>{if(m.points.length<3)return;let v=m.points.map(E=>E[0]),y=m.points.map(E=>E[1]),M=Math.min(...v),w=Math.min(...y),A=Math.max(...v),_=Math.max(...y),R=Math.max(1,Math.ceil((A-M)/r)),S=Math.max(1,Math.ceil((_-w)/r));for(let E=0;E<R;E++)for(let I=0;I<S;I++){let O=M+E*r,C=w+I*r,L=Math.min(O+r,A),T=Math.min(C+r,_),P=Ps(m.points,[[O,C],[L,C],[L,T],[O,T]]),N=P.length>=3?Math.abs(JS(P)):0;if(N<1e-4)continue;let F=jS(P);if(!s.some(z=>qt(F,z))){if(N>(L-O)*(T-C)-1e-6){u([O,Ci,C],[O,Ci,T],[L,Ci,T],[L,Ci,C],[0,1,0],x,-1);continue}for(let[z,B,V]of pn(P)){let H=P[z],J=P[V],tt=P[B];(tt[1]-H[1])*(J[0]-H[0])-(tt[0]-H[0])*(J[1]-H[1])<0&&([H,J]=[J,H]),u([H[0],Ci,H[1]],[tt[0],Ci,tt[1]],[J[0],Ci,J[1]],[J[0],Ci,J[1]],[0,1,0],x,-1)}}}});let h=i.rooms.length,d=(i.outdoor??[]).filter(m=>m.points.length>=3&&!An(m.type));if(d.length){let m=d.flatMap(_=>_.points.map(R=>R[0])),x=d.flatMap(_=>_.points.map(R=>R[1])),v=Math.floor(Math.min(...m)/r)*r,y=Math.floor(Math.min(...x)/r)*r,M=Math.max(1,Math.ceil((Math.max(...m)-v)/r)),w=Math.max(1,Math.ceil((Math.max(...x)-y)/r)),A=(_,R,S)=>Sm(i,_)-Ss(i,_,R,S)+Ci;for(let _=0;_<M;_++)for(let R=0;R<w;R++){let S=v+_*r,E=y+R*r,I,O=[S+r/2,E+r/2];I=d.find(L=>L.type==="pool"&&qt(O,L.points));for(let L=d.length-1;L>=0&&!I;L--)qt(O,d[L].points)&&(I=d[L]);if(!I)continue;let C=(L,T)=>[L,A(I,L,T),T];u(C(S,E),C(S,E+r),C(S+r,E+r),C(S+r,E),[0,1,0],h,-1)}}let p=Math.min(i.cut_height,i.height),b=[];t.forEach((m,x)=>{let v=Math.min(i.height,m.height??i.height),y=Math.min(p,v-.02),M=m.b[0]-m.a[0],w=m.b[1]-m.a[1],A=Math.hypot(M,w);if(A<.05)return;let _=[M/A,w/A],R=[-_[1],_[0]],S=e[x],E=XS(m,_,A,n),I=(P,N)=>P?i.rooms.findIndex(F=>F.id===P):N?h:-1,O=m.slope?{h:Math.min(v,Ts(m.slope,m.a[0],m.a[1])),h1:Math.min(v,Ts(m.slope,m.b[0],m.b[1]))}:{h:v};b.push({a:m.a,b:m.b,...O,ra:I(m.roomLeft,!1),rb:I(m.roomRight,m.exterior),gaps:E});let C=(P,N,F)=>[N,F,...P.filter(z=>z>N+.005&&z<F-.005)].sort((z,B)=>z-B).filter((z,B,V)=>B===0||z>V[B-1]+.005),L=C([y,(y+v)/2,...E.flatMap(P=>[P.y0+.01,P.y1-.01])],.02,v-.02),T=C(E.flatMap(P=>[P.s0,P.s1]),0,A);for(let P of[1,-1]){let N=P>0?m.roomLeft:m.roomRight,F=N?i.rooms.findIndex(J=>J.id===N):m.exterior?h:-1;if(F<0)continue;let z=(P>0?m.left:m.right)+HS,B=[R[0]*P,R[1]*P],V=(J,tt)=>[m.a[0]+_[0]*J+B[0]*z,tt,m.a[1]+_[1]*J+B[1]*z],H=J=>{let tt=V(J,0),ot=o==null?void 0:o(tt[0],tt[2]),X=m.slope?Ts(m.slope,m.a[0]+_[0]*J,m.a[1]+_[1]*J)-.02:1/0;return Math.min(ot==null?1/0:ot-.02,X)};for(let J=0;J<T.length-1;J++){let tt=T[J+1]-T[J],ot=Math.max(1,Math.ceil(tt/r));for(let X=0;X<ot;X++){let q=T[J]+tt/ot*X,Y=T[J]+tt/ot*(X+1),st=(q+Y)/2;for(let rt=0;rt<L.length-1;rt++){let lt=L[rt],gt=L[rt+1];if(gt-lt<.01)continue;let dt=(lt+gt)/2;if(E.some($t=>st>$t.s0&&st<$t.s1&&dt>$t.y0&&dt<$t.y1))continue;let xt=lt>=p-1e-6?S:nr+S,bt=Math.min(gt,H(q)),Ut=Math.min(gt,H(Y));if(!(bt<=lt+.005&&Ut<=lt+.005)){if(bt<lt||Ut<lt){let $t=q+(Y-q)*(lt-bt)/(Ut-bt);bt<lt?u(V($t,lt),V(Y,lt),V(Y,Ut),V($t,lt),[B[0],0,B[1]],F,xt):u(V(q,lt),V($t,lt),V($t,lt),V(q,bt),[B[0],0,B[1]],F,xt);continue}u(V(q,lt),V(Y,lt),V(Y,Ut),V(q,bt),[B[0],0,B[1]],F,xt)}}}}}});let g=[];for(let m of n){if(m.opening.type!=="door")continue;let x=t.find(M=>Sg(M,m)&&WS(M,m));if(!x||!x.roomLeft||!x.roomRight)continue;let v=i.rooms.findIndex(M=>M.id===x.roomLeft),y=i.rooms.findIndex(M=>M.id===x.roomRight);v<0||y<0||g.push({id:m.opening.id,a:v,b:y,x:m.start[0]+m.axis[0]*(m.width/2),y:Math.min(1.1,m.top*.55),z:m.start[1]+m.axis[1]*(m.width/2)})}return{pos:new Float32Array(a),normal:new Float32Array(l),room:Int16Array.from(c),fold:new Float32Array(f),doors:g,blockers:b}}function Sg(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1;return Math.abs((t.start[0]-i.a[0])*n-(t.start[1]-i.a[1])*e)/r<.02&&Math.abs((t.axis[0]*e+t.axis[1]*n)/r)>.99}function WS(i,t){let e=i.b[0]-i.a[0],n=i.b[1]-i.a[1],r=Math.hypot(e,n)||1,s=t.start[0]+t.axis[0]*(t.width/2),o=t.start[1]+t.axis[1]*(t.width/2),a=((s-i.a[0])*e+(o-i.a[1])*n)/r;return a>-.05&&a<r+.05}function XS(i,t,e,n){let r=[];for(let s of n){if(!Sg(i,s))continue;let o=(s.start[0]-i.a[0])*t[0]+(s.start[1]-i.a[1])*t[1],l=s.axis[0]*t[0]+s.axis[1]*t[1]>0?o:o-s.width;l>e||l+s.width<0||r.push({s0:l,s1:l+s.width,y0:s.sill-.01,y1:s.top+.01})}return r}function YS(i,t){let e=Math.max(0,-t),n=Math.max(0,t);switch(i){case"ceiling":return .3+.7*e;case"spot":return .06+.94*e**5;case"pendant":return .25+.85*e**2+.2*n;case"up":return .25+.75*n;case"wall":return .45+.35*Math.abs(t);default:return 1}}function qS(i){return(i.kind==="spot"?2:i.kind==="wall"?1.4:2.4)*(.55+.45*i.level)}function wg(i,t,e,n,r,s,o){let a=t-i.x,l=e-i.y,c=n-i.z,f=a*a+l*l+c*c,u=Math.sqrt(f)||1e-6,h=qS(i),d=1/(1+f/(h*h)),p=d*Math.sqrt(d),b=Math.max(0,-(a*r+l*s+c*o)/u);return i.level*p*(.2+.8*b)*YS(i.kind,l/u)}function Tg(i,t,e=.7,n=[]){let r=[...t];i.doors.forEach((u,h)=>{let d=n[h]??.5;if(!(d<=.01))for(let[p,b]of[[u.a,u.b],[u.b,u.a]]){let g=[0,0,0];for(let x of t){if(x.room!==p)continue;let v=x.x-u.x,y=x.y-u.y,M=x.z-u.z,w=Math.hypot(v,y,M)||1,A=wg(x,u.x,u.y,u.z,v/w,y/w,M/w);g[0]+=x.color[0]*A,g[1]+=x.color[1]*A,g[2]+=x.color[2]*A}let m=Math.max(g[0],g[1],g[2]);m<.01||r.push({x:u.x,y:u.y,z:u.z,color:[g[0]/m,g[1]/m,g[2]/m],level:Math.round(Math.min(1,m*.9*(.35+.65*d))*50)/50,kind:"wall",room:b})}});let s=$S(i),{pos:o,room:a}=i,l=new Float32Array(o.length),c=new Set;for(let u of r){let h=ZS(i,s,u);c.add(h.key);let d=u.color.map(g=>Math.pow(g,1.5)),{verts:p,k:b}=h;for(let g=0;g<p.length;g++){let m=p[g]*3;l[m]+=d[0]*b[g],l[m+1]+=d[1]*b[g],l[m+2]+=d[2]*b[g]}}for(let u of s.weights.keys())c.has(u)||s.weights.delete(u);let f=new Float32Array(o.length);for(let u=0;u<a.length;u++){let h=u*3;(l[h]||l[h+1]||l[h+2])&&(f[h]=1-Math.exp(-l[h]*e*1.6),f[h+1]=1-Math.exp(-l[h+1]*e*1.6),f[h+2]=1-Math.exp(-l[h+2]*e*1.6))}return f}var _g=new WeakMap;function $S(i){let t=_g.get(i);if(!t){let e=new Map;i.room.forEach((n,r)=>{let s=e.get(n);s?s.push(r):e.set(n,[r])}),t={roomVerts:new Map([...e].map(([n,r])=>[n,Uint32Array.from(r)])),weights:new Map},_g.set(i,t)}return t}function ZS(i,t,e){let n=`${e.x},${e.y},${e.z},${e.kind},${e.level},${e.room}`,r=t.weights.get(n);if(r)return r;let s=t.roomVerts.get(e.room)??new Uint32Array(0),o=i.blockers.filter(u=>u.ra===e.room||u.rb===e.room),{pos:a,normal:l}=i,c=new Float32Array(s.length);for(let u=0;u<s.length;u++){let h=s[u]*3;o.length&&KS(e,o,a[h],a[h+1],a[h+2])||(c[u]=wg(e,a[h],a[h+1],a[h+2],l[h],l[h+1],l[h+2]))}let f={key:n,verts:s,k:c};return t.weights.set(n,f),f}function KS(i,t,e,n,r){let s=e-i.x,o=r-i.z;for(let a of t){let l=a.b[0]-a.a[0],c=a.b[1]-a.a[1],f=s*c-o*l;if(Math.abs(f)<1e-9)continue;let u=a.a[0]-i.x,h=a.a[1]-i.z,d=(u*c-h*l)/f;if(d<=1e-6||d>=1-1e-6)continue;let p=(u*o-h*s)/f;if(p<0||p>1)continue;let b=i.y+(n-i.y)*d;if(b>=(a.h1===void 0?a.h:a.h+(a.h1-a.h)*p))continue;let g=p*Math.hypot(l,c);if(!a.gaps.some(m=>g>m.s0&&g<m.s1&&b>m.y0&&b<m.y1))return!0}return!1}function Eg(i,t,e){for(let n=.1;n<e;n+=.1)if([.1,.5,.9].some(r=>Math.abs(i(r,n)-t)>.1))return n-.05;return e}function Cf(i,t,e){let n=i.rooms.findIndex(r=>r.points.length>=3&&qt([t,e],r.points));return n<0?i.rooms.length:n}function Ns(i,t){return i&&t>=0&&t<i.length?i[t]:t}function JS(i){let t=0;for(let e=0;e<i.length;e++){let n=i[(e+1)%i.length];t+=i[e][0]*n[1]-n[0]*i[e][1]}return t/2}function jS(i){let t=0,e=0;for(let[n,r]of i)t+=n,e+=r;return[t/i.length,e/i.length]}var ea={open:0,open2:0,tilt:0,tilt2:0,cover:null},Ag=2043986,Rg=2769520,QS=2242399,Pf=1845831,tw=1450554,Pi=16758087,Zc=3662079,ew=1.2,nw=1.5,iw=.5,rw=1846349,sw=2572395,ow=1120816,aw=1845831,Cg=5995775,Pg=9085695,Us=Dt(3662079,.08),lw=.2;function Kc(i,t,e,n,r,s,o,a,l,c,f){let u=(d,p,b)=>t(d,p,b),h=[[u(e,r,a),u(n,r,a),u(n,s,a),u(e,s,a),c],[u(e,r,o),u(n,r,o),u(n,s,o),u(e,s,o),Dt(l.getHex(),.6)],[u(e,s,o),u(n,s,o),u(n,s,a),u(e,s,a),l],[u(e,r,o),u(n,r,o),u(n,r,a),u(e,r,a),Dt(l.getHex(),.85)],[u(e,r,o),u(e,s,o),u(e,s,a),u(e,r,a),Dt(l.getHex(),.92)],[u(n,r,o),u(n,s,o),u(n,s,a),u(n,r,a),Dt(l.getHex(),.92)]];for(let[d,p,b,g,m]of h)i.tri(d,p,b,m,m,m,void 0,f),i.tri(d,b,g,m,m,m,void 0,f)}function me(i,t,e,n,r,s,o,a,l,c,f,u){if(a<=f+1e-6)return Kc(i,t,e,n,r,s,o,a,l,c,Qt);if(o>=f-1e-6)return Kc(i,t,e,n,r,s,o,a,l,c,u);Kc(i,t,e,n,r,s,o,f,l,c,Qt),Kc(i,t,e,n,r,s,f,a,l,c,u)}function ar(i,t,e,n,r,s,o,a,l,c,f=0){let u=(h,d,p)=>{let b=y=>f?(o-y)/f:.5,g=t(e,r,h),m=t(n,r,h),x=t(n,r,d),v=t(e,r,d);i.tri(g,m,x,a,a,a,[0,b(h),1,b(h),1,b(d)],p),i.tri(g,x,v,a,a,a,[0,b(h),1,b(d),0,b(d)],p)};o<=l+1e-6?u(s,o,Qt):s>=l-1e-6?u(s,o,c):(u(s,l,Qt),u(l,o,c))}function cw(i,t,e,n,r,s,o,a,l,c){let f=t(e,r,o),u=t(n,r,o),h=t(n,s,o),d=t(e,s,o),p=0,b=(s-r)/c;i.tri(f,u,h,a,a,a,[0,p,1,p,1,b],l),i.tri(f,h,d,a,a,a,[0,p,1,b,0,b],l)}function uw(i,t){let[e,n]=i.axis;for(let r of t){if(r===i||r.opening.id===i.opening.id)continue;let s=e*r.axis[0]+n*r.axis[1];if(Math.abs(s)<.999)continue;let o=r.start[0]-i.start[0],a=r.start[1]-i.start[1];if(Math.abs(o*n-a*e)>.03)continue;let l=o*e+a*n,c=s>0?l:l-r.width,f=c+r.width;if(Math.min(i.width,f)-Math.max(0,c)<Math.min(i.width,r.width)*.5)continue;let h=i.sill-r.top;if(h>=-.05&&h<=.3)return!0}return!1}function hw(i,t){let e=i.opening.sill_board??"auto";if(e==="none")return{inside:!1,outside:!1};if(e==="inside"||e==="outside")return{inside:e==="inside",outside:e==="outside"};let n=i.sill>.3&&!uw(i,t)&&Ji(i.opening,i.exterior)!=="glass_wall";return{inside:n,outside:n&&i.exterior}}function Ig(i,t,e,n,r,s,o,a,l){let c=hw(i,t),f=i.width,u=Math.max(i.sill,.03);c.inside&&me(e,n,-.04,f+.04,r+s,i.faceRoom+.07,u-.03,u,new j(Pf),o,a,l),c.outside&&me(e,n,-.03,f+.03,-i.faceOut-.06,r-s,u-.04,u-.02,new j(Pf),o,a,l)}function Lg(i,t,e){let n=new ie,r=new ie,s=new ie(!0),o=new j(Ag),a=new j(Rg),l=[],c=[],f=[];for(let u of i){let h=n.count,d=r.count,p=s.count,b=t.get(u.opening.id)??ea,g=u.width,{sill:m,top:x,bucket:v}=u,y=(_,R,S)=>[u.start[0]+u.axis[0]*_+u.toRoom[0]*R,S,u.start[1]+u.axis[1]*_+u.toRoom[1]*R],M=(u.faceRoom-u.faceOut)/2,w=u.opening.mark==="closed",A=u.opening.type==="door"&&Ji(u.opening,u.exterior)==="passage";if(u.opening.type==="door"&&!A||u.opening.type==="garage"){let _=-u.faceOut-.012,R=u.faceRoom+.012,S=u.opening.type==="garage"&&(w?!!b.sensed&&(b.cover??1)>=.95:(b.cover??1)<.95),E=S?Dt(Pi,.8):new j(Ag),I=S?Dt(Pi,1):new j(Rg);me(n,y,-.045,.02,_,R,0,x+.045,E,I,e,v),me(n,y,g-.02,g+.045,_,R,0,x+.045,E,I,e,v),me(n,y,.02,g-.02,_,R,x-.02,x+.045,E,I,e,v)}if(u.opening.type==="door"){let _=Ji(u.opening,u.exterior),R=d0(_),S=u.opening.swing==="out"?-1:1,E=S>0?u.faceRoom:-u.faceOut,I=u.opening.leaves===2,O=.02,C=g-.02,L=f0(g,_,u.hingeAtStart,u.opening);if(L){let z=-u.faceOut-.012,B=u.faceRoom+.012,V=E-S*(R?.06:.04)/2,H=.06;for(let[J,tt]of L.panels)me(n,y,J,J+H,z,B,.02,x-.02,o,a,e,v),me(n,y,tt-H,tt,z,B,.02,x-.02,o,a,e,v),me(n,y,J+H,tt-H,z,B,.02,.12,o,a,e,v),ar(r,y,J+H,tt-H,V,.12,x-.02,Us,e,v);O=L.x0,C=L.x1}let T=I?(C-O)/2-.004:C-O,P=R?.06:.04;R&&(me(n,y,.02,g-.02,-u.faceOut-.02,u.faceRoom,0,.02,new j(Pf),a,e,v),u.exterior&&me(n,y,g/2-.08,g/2+.08,-u.faceOut-.1,-u.faceOut,x+.1,x+.17,Dt(Pi,.55),Dt(Pi,.85),e,Qt));let N=A?[]:[[u.hingeAtStart,b.open]];I&&!A&&N.push([!u.hingeAtStart,b.open2??0]);let F=u.opening.open_angle;for(let[z,B]of N){let V=Math.min(1,Math.max(0,B)),H=_==="sliding"?0:F!=null&&F>0?(b.sensed?V:Math.min(1,V/iw))*Math.min(170,F)*(Math.PI/180):V*nw,J=_==="sliding"?V*T:0,tt=(dt,xt,bt)=>{let Ut=dt*Math.cos(H)-xt*Math.sin(H)-J,$t=E+S*(xt*Math.cos(H)+dt*Math.sin(H)+(J?.05:0));return y(z?O+Ut:C-Ut,$t,bt)},ot=V>.05?Qt:v,X=w?!!b.sensed&&V<.05:V>.9,q=X?Dt(Pi,.7):new j(R?ow:rw),Y=X?Dt(Pi,.9):new j(R?aw:sw);_==="glass"?(me(n,tt,0,.05,-P,0,.01,x-.01,q,Y,e,ot),me(n,tt,T-.05,T,-P,0,.01,x-.01,q,Y,e,ot),me(n,tt,.05,T-.05,-P,0,.01,.12,q,Y,e,ot),me(n,tt,.05,T-.05,-P,0,x-.08,x-.01,q,Y,e,ot),ar(r,tt,.05,T-.05,-P/2,.12,x-.08,Us,e,ot)):me(n,tt,0,T,-P,0,.01,x-.01,q,Y,e,ot);for(let dt of[.001,-P-.001])_==="front_glass"?ar(r,tt,.12,T-.12,dt,x*.55,x-.18,Us,e,ot):R&&ar(r,tt,.1,.18,dt,.3,x-.3,Us,e,ot);let st=Math.min(1.05,x*.5),rt=R?.3:.012,lt=R?T-.11:T-.16,gt=R?T-.08:T-.05;me(n,tt,lt,gt,.004,.05,st-rt,st+rt,new j(Cg),new j(Pg),e,ot),me(n,tt,lt,gt,-P-.05,-P-.004,st-rt,st+rt,new j(Cg),new j(Pg),e,ot),b.unlocked&&z===u.hingeAtStart&&me(n,tt,T-.022,T+.004,-P-.006,.006,.03,x-.03,Dt(Zc,.85),Dt(Zc,1),e,ot)}}else if(u.opening.type==="garage"){let _=Math.min(1,Math.max(0,b.cover??1)),R=new j(13951231),S=u.faceRoom-.03,E=x*(1-_);_>.01&&ar(s,y,.02,g-.02,S,E,x,R,e,v,.5);let I=(1-_)*x;I>.01&&cw(s,y,.02,g-.02,S,S+I,x+.03,R,v,.5)}else if(Ji(u.opening,u.exterior)==="glass_wall"){me(n,y,0,.04,M-.025,M+.025,m,x,o,a,e,v),me(n,y,g-.04,g,M-.025,M+.025,m,x,o,a,e,v),me(n,y,.04,g-.04,M-.025,M+.025,m,m+.03,o,a,e,v),me(n,y,.04,g-.04,M-.025,M+.025,x-.04,x,o,a,e,v),Ig(u,i,n,y,M,.025,a,e,v);let S=Math.max(1,Math.round((g-2*.04)/.9)),E=(g-2*.04)/S;for(let I=1;I<S;I++){let O=.04+I*E;me(n,y,O-.02,O+.02,M-.025,M+.025,m+.03,x-.04,o,a,e,v)}for(let I=0;I<S;I++){let O=.04+I*E+(I?.02:0),C=.04+(I+1)*E-(I<S-1?.02:0);ar(r,y,O,C,M,m+.03,x-.04,Us,e,v)}}else{me(n,y,0,.06,M-.035,M+.035,m,x,o,a,e,v),me(n,y,g-.06,g,M-.035,M+.035,m,x,o,a,e,v),me(n,y,.06,g-.06,M-.035,M+.035,m,m+(m>.05?.06:.03),o,a,e,v),me(n,y,.06,g-.06,M-.035,M+.035,x-.06,x,o,a,e,v),Ig(u,i,n,y,M,.035,a,e,v);let S=.055,E=m+(m>.05?.06:.03),I=x-.06,O=M+.035,C=M+.035+.06,T=u.opening.leaves===2?[{atStart:u.hingeAtStart,x0:u.hingeAtStart?.06:g/2,x1:u.hingeAtStart?g/2:g-.06,open:b.open,tilt:b.tilt},{atStart:!u.hingeAtStart,x0:u.hingeAtStart?g/2:.06,x1:u.hingeAtStart?g-.06:g/2,open:b.open2??0,tilt:b.tilt2??0}]:[{atStart:u.hingeAtStart,x0:.06,x1:g-.06,open:b.open,tilt:b.tilt}];for(let P of T){let N=P.open>.02||P.tilt>.02,F=w?!!b.sensed&&!N:N,z=F?Dt(Pi,.75):new j(QS),B=F?Dt(Pi,.95):a,V=P.x0,H=P.x1,J=H-V,tt=P.open*ew*(u.opening.swing==="out"?-1:1),ot=P.tilt*lw,X=(Y,st,rt)=>{let lt=rt-E,gt=st+lt*Math.sin(ot),dt=E+lt*Math.cos(ot),xt=Y*Math.cos(tt)-(gt-O)*Math.sin(tt);gt=O+(gt-O)*Math.cos(tt)+Y*Math.sin(tt);let bt=P.atStart?V+xt:H-xt;return y(bt,gt,dt)},q=Math.abs(tt)>.05?Qt:v;if(me(n,X,0,S,O,C,E,I,z,B,e,q),me(n,X,J-S,J,O,C,E,I,z,B,e,q),me(n,X,S,J-S,O,C,E,E+S,z,B,e,q),me(n,X,S,J-S,O,C,I-S,I,z,B,e,q),ar(r,X,S,J-S,(O+C)/2,E+S,I-S,F?Dt(Pi,.16):Us,e,q),b.unlocked&&P.atStart===u.hingeAtStart&&me(n,X,J-.022,J+.004,O-.006,C+.006,E+.02,I-.02,Dt(Zc,.85),Dt(Zc,1),e,q),Ji(u.opening,u.exterior)==="bars"){let Y=(E+I)/2,st=(O+C)/2;me(n,X,S,J-S,st-.012,st+.012,Y-.012,Y+.012,z,B,e,q),me(n,X,J/2-.012,J/2+.012,st-.012,st+.012,E+S,I-S,z,B,e,q)}}}if(b.cover!==null){let _=-u.faceOut,R=x+.2;me(n,y,-.05,g+.05,_-.15,_,x,R,new j(tw),a,e,v);let S=Math.min(1,Math.max(0,b.cover));if(S>.01){let E=x-S*(x-m);ar(s,y,0,g,_-.07,E,x,new j(16777215),e,v,.045)}}l.push({id:u.opening.id,start:h,end:n.count}),c.push({id:u.opening.id,start:d,end:r.count}),f.push({id:u.opening.id,start:p,end:s.count})}return{frames:n.geometry(),glass:r.geometry(),blinds:s.geometry(),frameTris:l,glassTris:c,blindTris:f}}var fw=.3,Fg=2.6;function Dg(i,t=.32,e=.22,n=[]){let r=i.map(M=>M[0]),s=i.map(M=>M[1]),o=Math.min(...r),a=Math.max(...r),l=Math.min(...s),c=Math.max(...s),f=c-l>=a-o,u=e*.7071,h=M=>{let w=[M,[M[0]+e,M[1]],[M[0]-e,M[1]],[M[0],M[1]+e],[M[0],M[1]-e]],A=[...w,[M[0]+u,M[1]+u],[M[0]-u,M[1]+u],[M[0]+u,M[1]-u],[M[0]-u,M[1]-u]];return w.every(_=>qt(_,i))&&!n.some(_=>A.some(R=>qt(R,_)))},d=(M,w)=>h(f?[M,w]:[w,M]),p=(M,w)=>{let A=Math.ceil(Math.hypot(w[0]-M[0],w[1]-M[1])/.05);for(let _=1;_<A;_++)if(!h([M[0]+(w[0]-M[0])*_/A,M[1]+(w[1]-M[1])*_/A]))return!1;return!0},[b,g,m,x]=f?[o,a,l,c]:[l,c,o,a],v=[],y=!0;for(let M=b+e;M<=g-e+1e-6;M+=t){let w=null,A=null,_=.05;for(let I=m;I<=x+1e-6;I+=_)if(d(M,I)&&(A??=I),(!d(M,I)||I+_>x+1e-6)&&A!==null){let O=d(M,I)?I:I-_;(!w||O-A>w[1]-w[0])&&(w=[A,O]),A=null}if(!w||w[1]-w[0]<.2)continue;let R=I=>{let[O,C]=I?w:[w[1],w[0]];return[f?[M,O]:[O,M],f?[M,C]:[C,M]]},S=R(y),E=v[v.length-1];if(E&&n.length&&!p(E,S[0])){let I=R(!y);if(!p(E,I[0]))continue;S=I,y=!y}v.push(S[0],S[1]),y=!y}return v}function Lf(i,t=.7,e=12){return Array.from({length:e},(n,r)=>{let s=r/e*Math.PI*2;return[i[0]+Math.cos(s)*t,i[1]+Math.sin(s)*t]})}var If=i=>Math.atan2(Math.sin(i),Math.cos(i));function Og(i,t,e){let n=null;if(t.mode==="cleaning"){if(!i.path.length)return!1;n=i.path[i.next%i.path.length]}else if(t.mode==="returning"||t.mode==="docked")n=t.rest;else return!1;let r=n[0]-i.pos[0],s=n[1]-i.pos[1],o=Math.hypot(r,s);if(o<.02){if(t.mode==="cleaning")return i.next=(i.next+1)%i.path.length,!0;let c=If(t.restHeading-i.heading);return Math.abs(c)<.02?!1:(i.heading+=Math.sign(c)*Math.min(Math.abs(c),Fg*e),!0)}let a=Math.atan2(r,s),l=If(a-i.heading);if(i.heading=If(i.heading+Math.sign(l)*Math.min(Math.abs(l),Fg*e)),Math.abs(l)<.35){let c=Math.min(o,fw*e);i.pos=[i.pos[0]+r/o*c,i.pos[1]+s/o*c]}return!0}function Ng(i,t,e,n=200){return t?e>=3e4?null:Math.max(i,n):i}var dw=66,pw=250;function Ug(i,t){return i?t>=3e4?pw:dw:0}function Bg(i,t,e){let n=t??8,r=e||8;return n<=3||r<=4||/\bSilk\b/.test(i)?!0:/Android/.test(i)&&/\bKF[A-Z]{2,5}\b/.test(i)}var Nn=null,kg=new Map;function Vg(i,t=0){let e=new ie,n=new Ne,r=_e(i.type);if(r!=null&&r.light)Lc(e,r,{x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h},0,16758087);else if(i.lamp)Ff(e,{x:0,z:0,size:[i.w,i.d,i.h],base:0,rotation:t,variant:i.variant??null,lamp:i.lamp},Math.max(i.h+.15,.6),16758087);else{let s={id:"preview",type:i.type,x:0,z:0,rotation:t,w:i.w,d:i.d,h:i.h,variant:i.variant??null,entity:null,power:null};Ic(e,n,new ie,s,0,!0)}return{buf:e,lines:n}}function mw(i,t=180,e,n=1.3){let r=`${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${t}|${n}`,s=kg.get(r);if(s)return s;e&&Ro(e),Nn??=new Sr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Nn.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),Nn.setSize(t,t,!1),Nn.setClearColor(0,0);let{buf:o,lines:a}=Vg(i),l=new ri,c=new Ct(o.geometry(),new Yt({vertexColors:!0,color:new j(n,n,n)})),f=new qe(a.geometry(),new $e({vertexColors:!0,color:new j(n*1.8,n*1.8,n*1.8)}));l.add(c,f);let u=new xn().setFromObject(c),h=u.getCenter(new W),d=new Ln(-1,1,1,-1,.01,100);d.position.copy(h).add(new W(.9,.75,1.3).normalize().multiplyScalar(20)),d.lookAt(h),d.updateMatrixWorld();let p=.05;for(let m of[u.min.x,u.max.x])for(let x of[u.min.y,u.max.y])for(let v of[u.min.z,u.max.z]){let y=new W(m,x,v).applyMatrix4(d.matrixWorldInverse);p=Math.max(p,Math.abs(y.x),Math.abs(y.y))}let b=p*1.12;d.left=-b,d.right=b,d.top=b,d.bottom=-b,d.updateProjectionMatrix(),Nn.render(l,d);let g=Nn.domElement.toDataURL("image/png");return c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose(),kg.set(r,g),g}function gw(i,t,e=160,n,r=1.25){let s=`front|${i.type}|${i.w}|${i.d}|${i.h}|${i.variant??""}|${Math.round(t)}|${e}|${r}`,o=zg.get(s);if(o)return o;n&&Ro(n);let{buf:a,lines:l}=Vg(i,t),c=new Ct(a.geometry(),new Yt({vertexColors:!0,color:new j(r,r,r)})),f=new qe(l.geometry(),new $e({vertexColors:!0,color:new j(r*1.8,r*1.8,r*1.8)})),u=new xn().setFromObject(c);if(u.isEmpty())return null;let h=u.min.x,d=u.max.x,p=Math.max(0,u.min.y),b=u.max.y,g=Math.max(1,Math.min(1024,Math.round((d-h)*e))),m=Math.max(1,Math.min(1024,Math.round((b-p)*e)));Nn??=new Sr({alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),Nn.setPixelRatio(1),Nn.setSize(g,m,!1),Nn.setClearColor(0,0);let x=new ri;x.add(c,f);let v=new Ln(h,d,b,p,.01,100);v.position.set(0,0,50),v.lookAt(0,0,0),v.updateProjectionMatrix(),Nn.render(x,v);let y=Nn.domElement.toDataURL("image/png");c.geometry.dispose(),c.material.dispose(),f.geometry.dispose(),f.material.dispose();let M={url:y,x0:h,x1:d,y0:p,y1:b};return zg.set(s,M),M}var zg=new Map;var eP={Group:De,Mesh:Ct,MeshBasicMaterial:Yt,CanvasTexture:yn,Color:j,PlaneGeometry:Hn,BufferGeometry:Gt,Float32BufferAttribute:Ft,DoubleSide:oe},Hg={cleaning:3662079,returning:16758087,docked:4310123,idle:5995775,error:16726863},bw=2.4,Wg=1.4,xw=.22,Xg=.94,Yg=140,qg=1.5;function yw(i,t,e){let n=1/0;for(let r=0;r<e.length;r++){let[s,o]=e[r],[a,l]=e[(r+1)%e.length],c=a-s,f=l-o,u=c*c+f*f||1,h=Math.max(0,Math.min(1,((i-s)*c+(t-o)*f)/u));n=Math.min(n,Math.hypot(i-(s+c*h),t-(o+f*h)))}return n}var Of=32,vw=500,$g=160;function Zg(i,t){return i.furniture.some(e=>t.has(e.id))||(i.outdoor??[]).some(e=>(e.gates??[]).some(n=>t.has(n.id)))}var _w=33,Kg=.028,Mw=.026,Sw=.012,ww=.09,re=2767456,Tw=1911110,Ew=1,Jg=new Set(["ceiling","ceiling_fan","downlight","spot","panel","pendant","strip"]),Jc=450,jg=125,Aw=200,Rw=.08,Cw=2*Math.PI/1.4,jc={ceiling:[.4,.4,.08],ceiling_fan:[1.2,1.2,.35],downlight:[.1,.1,.02],spot:[.1,.1,.14],panel:[.6,.6,.03],uplight:[.35,.35,1.8],bollard:[.16,.16,.8],garden:[.12,.12,.3],pendant:[.4,.4,.8],floor:[.42,.42,1.7],table:[.26,.26,.45],wall:[.22,.12,.2],strip:[2,.04,.03]},Pw=new j(1714765);function Iw(){let i=navigator;return Bg(navigator.userAgent,i.deviceMemory,navigator.hardwareConcurrency)}var Nf=class{host;options;renderer;scene=new ri;camera=new Qe(38,1,.1,400);controls;labels;root=new De;patternTexture;blindTexture;openingTargets=new Map;fridges=new Map;screens=new Map;pickFurniture=new Map;pickOpenings=new Map;flashes=new Map;flows=[];pipes=[];patches=[];surfaceGrab=null;surfaceDragging=!1;furnishTypes=null;roofWindows=new Map;roofWindowsKey="";roofGeos=[];sunFx=new qc;sunPath=null;shadowSig="";arcSig="";spillNight="";compassLetters=["N","E","S","W"];hourCycle={};flowPhase=new Map;flowTime={value:0};flowStart=performance.now();flowActive=!1;sound=[];pools=[];poolActive=!1;soundActive=!1;flowTimer;persons=[];personPins=new Map;personAt=new Map;personLook="figure";figures=new Map;floorInfo=new Map;roomInfo=new Map;groundTexture=null;devices=[];devicePins=new Map;ground;floors=[];building=null;floorId=null;roomId=null;wallMode="auto";explode;frame=0;lastFrame=0;disposed=!1;resizeObserver;fpsFrames=0;worstFrame=0;lastStatsFrame=0;lowQuality=!1;highQuality=!1;lastWake=performance.now();highlighted=new WeakMap;decorWas=!1;decorTimer;effectTime=0;effectTick=!1;tintTick=!1;effectTimer;haloTexture;roof=null;anchors=[];anchorCb=null;solarLevels=new Map;solarActive=!1;roofO=0;keepRoof=!1;hideRoof=!1;robots=new Map;robotGeo=null;robotMat=null;robotLedGeo=null;robotLast=0;robotTimer;floorStack="dim";floorMap=new Map;labelsDirty=!0;viewKey=new Float64Array(6);placed=new WeakMap;pinMode=new WeakMap;size={w:1,h:1};labelInset=0;effectFloors=new Set;fanFloors=new Set;fanAngle=0;deviceFloor=new Map;statsOn=!1;parked=new Map;parkedSig="";orbitSpeed=0;orbitLast=0;orbitTimer;onScreen=!0;intersection=null;swipe=null;furnish=!1;selectedFurniture=null;selectedDevice=null;pendingDevice=null;deviceGrab=null;grab=null;ghost=null;selectedSet=[];theme="neon";themeUniform={value:0};sun=null;weather=null;rain=new qe(new Gt,new $e({color:10471679,transparent:!0,opacity:.4,blending:Re,depthWrite:!1}));snow=new Gi(new Gt,new Si({color:16054527,size:.14,transparent:!0,opacity:.85,depthWrite:!1}));skyDisc=new Ct(new so(1,28),new Yt({color:16767370,transparent:!0,opacity:0,blending:Re,depthWrite:!1}));weatherBox={x0:-10,x1:10,z0:-10,z1:10,y0:0,y1:8};weatherTimer;weatherLast=0;roomTint=null;houseRadius=20;startView=null;keepView=!1;keepNext=!1;fpsStart=0;gpuName;constructor(t,e={}){this.host=t,this.options=e,this.explode=e.explode??!0,this.renderer=this.makeRenderer(e.quality??"auto"),this.renderer.domElement.addEventListener("webglcontextlost",()=>{var n,r;this.disposed||(r=(n=this.options).onContextLost)==null||r.call(n)}),this.labels=document.createElement("div"),this.labels.className="fp3d-labels",t.append(this.labels),this.patternTexture=Fw(),this.blindTexture=Ow(),this.haloTexture=Bw(),this.ground=new Ct(new Hn(1,1),new Yt({transparent:!1,blending:Re,depthWrite:!1})),this.ground.rotation.x=-Math.PI/2,this.ground.renderOrder=-1,this.scene.add(this.ground,this.root),this.rain.frustumCulled=!1,this.snow.frustumCulled=!1,this.rain.visible=!1,this.snow.visible=!1,this.skyDisc.visible=!1,this.skyDisc.renderOrder=-1,this.scene.add(this.rain,this.snow,this.skyDisc,this.sunFx.group),this.controls=this.makeControls(),this.resizeObserver=new ResizeObserver(()=>this.resize()),this.resizeObserver.observe(t),document.addEventListener("visibilitychange",this.onVisibility);for(let n of["pointerdown","pointerup","wheel","keydown"])t.addEventListener(n,this.onInput,{capture:!0,passive:!0});typeof IntersectionObserver=="function"&&(this.intersection=new IntersectionObserver(n=>{let r=n.some(s=>s.isIntersecting);r!==this.onScreen&&(this.onScreen=r,r&&this.invalidate())}),this.intersection.observe(t)),this.resize()}get low(){return this.lowQuality}get resting(){return this.decor(0)===null}wake(){let t=this.resting;this.lastWake=performance.now(),t&&this.invalidate()}animate(){if(!this.lowQuality)return this.invalidate();if(this.decorTimer||this.frame)return;let t=Ug(!0,performance.now()-this.lastWake);this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},t)}decor(t,e){return Ng(t,this.lowQuality,performance.now()-this.lastWake,e)}onInput=()=>this.wake();setParked(t){let e=[...t].map(([n,r])=>`${n}=${r}`).sort().join("|");e!==this.parkedSig&&(this.parkedSig=e,this.parked=t,this.building&&(this.rebuild(),this.invalidate()))}setStats(t){this.statsOn=t}setLabelInset(t){this.labelInset!==t&&(this.labelInset=t,this.labelsDirty=!0,this.invalidate())}setAutoOrbit(t){this.orbitSpeed=t,this.orbitLast=0,this.invalidate()}setQuality(t){let e=this.renderer.domElement,n=this.makeRenderer(t);this.rebuildTier(),this.applyTierFlags(),e.replaceWith(n.domElement),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer=n;let r=this.controls.view;this.controls.dispose(),this.controls=this.makeControls(),this.controls.view=r,this.resize()}setPacks(t){Ro(t),this.building&&(this.rebuild(),this.invalidate())}setBuilding(t){let e=this.building===null;this.lastWake=performance.now(),this.building=t,this.controls.rightClickBack=!!t.settings.right_click_back,i0(t),this.rebuild(),e&&this.fit(0),this.invalidate()}setKeepView(t){this.keepView=t}setAngleLock(t){this.controls.angleLock=t}setFloor(t,e=!0){this.lastWake=performance.now(),this.keepNext=this.keepView&&t!==null&&this.floorId!==null&&t!==this.floorId,this.floorId=t,this.roomId=null,this.labelsDirty=!0,this.applyHouseLines(),this.applyTargets(!e),this.applyHighlight(),this.fit(e?700:0)}setFloorStack(t){t!==this.floorStack&&(this.floorStack=t,this.applyTargets(!1))}setHideRoof(t){t!==this.hideRoof&&(this.hideRoof=t,this.invalidate())}setKeepRoof(t){t!==this.keepRoof&&(this.keepRoof=t,this.invalidate())}setExplode(t){t!==this.explode&&(this.explode=t,this.applyTargets(!1),this.floorId===null&&this.fit(700))}selectRoom(t){if(this.lastWake=performance.now(),this.roomId=t,this.labelsDirty=!0,this.applyHighlight(),!t){this.fit(700);return}let e=this.floors.find(f=>pc(f.floor).some(u=>u.id===t)),n=e?pc(e.floor).find(f=>f.id===t):void 0;if(!e||!n)return;let r=n.start_view;if(r){let f=e.floor.elevation+e.ty,[u,h]=ui(n.points),d=r.target??{x:u,y:.3,z:h};this.controls.flyTo({target:new W(d.x,d.y+f,d.z),radius:r.radius,phi:r.phi,theta:r.theta},700,!0);return}let[s,o]=ui(n.points),a=n.points.map(f=>f[0]),l=n.points.map(f=>f[1]),c=new W(Math.max(...a)-Math.min(...a),e.floor.cut_height,Math.max(...l)-Math.min(...l));this.controls.flyTo({target:new W(s,e.floor.elevation+e.ty+.3,o),radius:Math.max(4,this.distanceFor(c)*1.05),phi:.72})}setWallMode(t){this.wallMode=t;for(let e of this.floors)this.buildLamps(e);this.invalidate()}setDevices(t){this.devices=t,this.labelsDirty=!0,this.effectFloors=new Set(t.filter(n=>n.effect&&n.glow).map(n=>n.floorId)),this.fanFloors=new Set(t.filter(n=>n.fanBlades&&(n.fanSpeed??0)>0).map(n=>n.floorId)),this.deviceFloor=new Map(t.map(n=>[n.id,n.floorId]));let e=new Set;for(let n of t){e.add(n.id);let r=this.devicePins.get(n.id);r||(r={el:this.makeDevicePin(n.id),icon:"",text:"",watt:"",label:"",active:!1,unavailable:!1,glow:"",caption:""},this.devicePins.set(n.id,r),this.labels.append(r.el));let s=r.el;r.icon!==n.icon&&(r.icon=n.icon,s.querySelector(".fp3d-dev-icon").innerHTML=n.icon),r.text!==n.text&&(r.text=n.text,s.querySelector(".fp3d-dev-text").textContent=n.text);let o=n.caption??"";r.caption!==o&&(r.caption=o,s.querySelector(".fp3d-dev-name").textContent=o);let a=n.power!==null&&n.power!==void 0&&n.power>=1?n.powerText??`${Math.round(n.power)} W`:"";r.watt!==a&&(r.watt=a,s.querySelector(".fp3d-dev-watt").textContent=a);let l=`${n.name}: ${n.text}`;r.label!==l&&(r.label=l,s.title=n.name,s.setAttribute("aria-label",l)),r.active!==n.active&&(r.active=n.active,s.classList.toggle("fp3d-dev-on",n.active)),r.unavailable!==n.unavailable&&(r.unavailable=n.unavailable,s.classList.toggle("fp3d-dev-na",n.unavailable));let c=n.glow?`rgb(${n.glow.color.map(f=>Math.round(f*255)).join(", ")})`:"";r.glow!==c&&(r.glow=c,c?s.style.setProperty("--fp3d-glow",c):s.style.removeProperty("--fp3d-glow"))}for(let[n,r]of this.devicePins)e.has(n)||(r.el.remove(),this.devicePins.delete(n));for(let n of this.floors)this.buildGlow(n),this.buildLamps(n);this.invalidate()}setRoofWindows(t){let e=JSON.stringify([...t]);if(e!==this.roofWindowsKey){this.roofWindowsKey=e,this.roofWindows=t,this.buildRoofMesh();for(let n of this.floors)this.buildSun(n);this.invalidate()}}setAnchorCallback(t){this.anchorCb=t,this.labelsDirty=!0,this.invalidate()}setAnchors(t){this.anchors=t,this.labelsDirty=!0,this.invalidate()}setSolarLevels(t){var n;this.solarLevels=t;let e=!1;for(let r of((n=this.roof)==null?void 0:n.lives)??[])Jo(r,t)&&(e=!0);for(let r of this.floors)r.solarLive&&Jo(r.solarLive,t)&&(e=!0);this.solarActive=e,this.invalidate()}setPools(t){let e=n=>n.map(r=>{var s;return`${r.id}:${r.floorId}:${r.points.length}:${(s=r.points[0])==null?void 0:s.join(",")}:${r.y.toFixed(3)}:${r.color.map(o=>o.toFixed(2)).join("/")}:${r.level.toFixed(2)}:${r.flow?1:0}:${r.heat?1:0}:${r.cover.toFixed(2)}`}).join(";");if(e(t)!==e(this.pools)){this.pools=t,this.poolActive=t.some(n=>n.flow);for(let n of this.floors)this.buildPoolWater(n);this.invalidate()}}buildPoolWater(t){t.poolGroup&&(bg(t.poolGroup),t.group.remove(t.poolGroup),t.poolGroup=void 0);let e=this.pools.filter(n=>n.floorId===t.floor.id);e.length&&(t.poolGroup=gg(e,this.flowTime),t.group.add(t.poolGroup))}setSound(t){var n,r,s;let e=o=>o.map(a=>`${a.id}:${a.floorId}:${a.x},${a.z}:${a.level.toFixed(2)}:${a.playing?1:0}:${a.members.join("+")}`).join(";");if(e(t)!==e(this.sound)){this.sound=t,this.soundActive=t.some(o=>o.playing);for(let o of this.floors){let a=o.soundGroup??=(()=>{let h=new De;return h.renderOrder=6,o.group.add(h),h})();for(let h of[...a.children])a.remove(h),(n=h.geometry)==null||n.dispose(),(s=(r=h.material)==null?void 0:r.dispose)==null||s.call(r);let l=t.filter(h=>h.floorId===o.floor.id),c=.03;for(let h of l)if(h.playing)for(let d=0;d<3;d++){let p=new Ct(new uo(.92,1,48),new Yt({color:3662079,transparent:!0,opacity:0,blending:Re,depthWrite:!1,side:oe}));p.rotation.x=-Math.PI/2,p.position.set(h.x,c+d*.002,h.z),p.userData={sound:!0,phase:d/3,level:h.level},p.frustumCulled=!1,a.add(p)}let f=[],u=new Set;for(let h of l)for(let d of h.members){let p=l.find(g=>g.id===d);if(!p||p===h)continue;let b=[h.id,p.id].sort().join("|");u.has(b)||(u.add(b),f.push(h.x,c+.02,h.z,p.x,c+.02,p.z))}if(f.length){let h=new Gt;h.setAttribute("position",new Ft(f,3));let d=new qe(h,new $e({color:3662079,transparent:!0,opacity:.45,blending:Re,depthWrite:!1}));d.userData={soundLine:!0},a.add(d)}}this.invalidate()}}animateSound(t){let e=t/1e3;for(let n of this.floors)if(n.soundGroup)for(let r of n.soundGroup.children){if(!r.userData.sound)continue;let s=(e*.45+r.userData.phase)%1,o=r.userData.level,a=.25+s*(.9+1.6*o);r.scale.set(a,a,1),r.material.opacity=(1-s)*(.25+.45*o)}}setFlows(t){this.flows=t;let e=this.flowSeconds(),n=new Map;for(let r of t){let s=na(r),o=Df(r.power),a=this.flowPhase.get(s);n.set(s,{speed:o,offset:a?e*(a.speed-o)+a.offset:0})}this.flowPhase=n,this.flowActive=t.some(r=>r.power>.5);for(let r of this.floors)this.buildFlows(r);this.invalidate()}setPipes(t){this.pipes=t;for(let e of this.floors)this.buildPipes(e);this.invalidate()}setPatches(t){this.patches=t;for(let e of this.floors)this.buildPatches(e);this.invalidate()}buildPatches(t){let e=this.patches.filter(r=>r.floorId===t.floor.id&&r.points.length>=3&&r.opacity>0),n=JSON.stringify(e);if(n!==t.patchSig){t.patchSig=n;for(let r of[!1,!0]){let s=[],o=[];for(let c of e){if(!!c.glow!==r)continue;let f=Math.min(1,c.opacity);for(let u of pn(c.points))for(let h of u)s.push(c.points[h][0],c.y,c.points[h][1]),o.push(c.color[0],c.color[1],c.color[2],f)}let a=r?t.patchGlowMesh:t.patchMesh,l=new Gt;l.setAttribute("position",new Ft(s,3)),l.setAttribute("color",new Ft(o,4)),a.geometry.dispose(),a.geometry=l,a.visible=s.length>0}}}buildPipes(t){let e=this.pipes.filter(s=>s.floorId===t.floor.id),n=JSON.stringify(e);if(n===t.pipeSig)return;t.pipeSig=n;let r=new ie;for(let s of e)og(r,s);t.pipeMesh.geometry.dispose(),t.pipeMesh.geometry=r.geometry(),t.pipeMesh.visible=r.count>0}setPersonLook(t){t!==this.personLook&&(this.personLook=t,this.setPersons(this.persons))}makeFigure(t){let e=o=>{let a=[],l=(h,d,p,b,g)=>{let m=Math.hypot(p-h,b-d)||1,x=-(b-d)/m*(g/2+o),v=(p-h)/m*(g/2+o);a.push(h+x,d+v,0,p+x,b+v,0,p-x,b-v,0,h+x,d+v,0,p-x,b-v,0,h-x,d-v,0)},f=.14+o;for(let h=0;h<18;h++){let d=h/18*Math.PI*2,p=(h+1)/18*Math.PI*2;a.push(0,1.47,0,Math.cos(d)*f,1.47+Math.sin(d)*f,0,Math.cos(p)*f,1.47+Math.sin(p)*f,0)}l(0,1.32,0,.8,.13),l(0,1.24,-.28,.9,.07),l(0,1.24,.28,.9,.07),l(-.02,.82,-.15,.02,.08),l(.02,.82,.15,.02,.08);let u=new Gt;return u.setAttribute("position",new Ft(a,3)),u},n=new Ct(e(0),new Yt({color:t,transparent:!0,opacity:.9,depthWrite:!1,side:oe})),r=new Ct(e(.05),new Yt({color:t,transparent:!0,opacity:.22,blending:Re,depthWrite:!1,side:oe}));n.renderOrder=6,r.renderOrder=5;let s=new De;return s.add(r,n),s.visible=!1,s}dropFigure(t){let e=this.figures.get(t);if(e){this.scene.remove(e);for(let n of e.children)n.geometry.dispose(),n.material.dispose();this.figures.delete(t)}}setPersons(t){this.labelsDirty=!0,this.persons=t;let e=new Set;for(let n of t){e.add(n.id);let r=this.personPins.get(n.id);if(!r){r=document.createElement("div"),r.className="fp3d-person",r.dataset.entity=n.id;let a=n.id;r.addEventListener("pointerdown",l=>l.stopPropagation()),r.addEventListener("click",l=>{var h,d;l.stopPropagation();let c=this.persons.find(p=>p.id===a);if(!(c!=null&&c.entity))return;let f=l.currentTarget.getBoundingClientRect(),u=this.host.getBoundingClientRect();(d=(h=this.options).onDeviceHold)==null||d.call(h,c.entity,f.left+f.width/2-u.left,f.top+f.height/2-u.top)}),this.personPins.set(n.id,r),this.labels.append(r)}r.title=n.name,r.setAttribute("aria-label",n.name),r.style.setProperty("--fp3d-pc",n.color??"#ff5fd2");let s=this.personLook==="figure"&&!!n.entity&&!n.thing;r.classList.toggle("fp3d-person-figure",s);let o=this.figures.get(n.id);if(s&&(!o||o.userData.color!==(n.color??"#ff5fd2"))){this.dropFigure(n.id);let a=this.makeFigure(n.color??"#ff5fd2");a.userData.color=n.color??"#ff5fd2",this.figures.set(n.id,a),this.scene.add(a)}else!s&&o&&this.dropFigure(n.id);if(r.classList.toggle("fp3d-person-tap",!!n.entity),r.dataset.picture!==(n.picture??"")||r.dataset.initials!==n.initials||r.dataset.tag!==(n.tag??"")){r.dataset.picture=n.picture??"",r.dataset.initials=n.initials,r.dataset.tag=n.tag??"",r.replaceChildren();let a=document.createElement("span");if(a.className="fp3d-person-face",n.picture){let l=document.createElement("img");l.src=n.picture,l.alt="",l.addEventListener("error",()=>l.replaceWith(document.createTextNode(n.initials))),a.append(l)}else a.textContent=n.initials;if(r.append(a),n.tag){let l=document.createElement("span");l.className="fp3d-person-tag",l.textContent=n.tag,r.append(l)}}}for(let[n,r]of this.personPins)e.has(n)||(r.remove(),this.personPins.delete(n),this.personAt.delete(n),this.dropFigure(n));this.invalidate()}setPickTargets(t,e){this.pickFurniture=t,this.pickOpenings=e}setAccent(t){let e=vg(t),n=e?1:0;n===Qo.value&&(!e||jo.value.equals(new W(...e)))||(Qo.value=n,e&&jo.value.set(...e),this.invalidate())}setTheme(t){var s;if(t===this.theme)return;this.theme=t,this.themeUniform.value=yg(t),am(t!=="neon"),(s=this.building)!=null&&s.floors.some(o=>o.furniture.some(a=>a.type==="waste_bin"||gm(a.type)))&&this.rebuild();let n=ta(t),r=[...this.floors.map(o=>o.materials.lines),...this.roof?[this.roof.lines]:[]];for(let o of r)o.blending=n,o.needsUpdate=!0;this.placeGround(),this.buildSunFx(),this.invalidate()}setFurnishMode(t){this.furnish=t,t||this.selectFurniture(null),this.invalidate()}selectFurniture(t){t&&this.selectedDevice&&this.selectDevice(null),this.selectedFurniture=t,this.updateGhost(),this.invalidate()}selectFurnitureSet(t){this.selectedSet=[...t],this.updateGhost(),this.invalidate()}setSun(t){this.sun=t;for(let n of this.floors)this.buildSun(n);let e=this.nightFactor().toFixed(2);if(e!==this.spillNight){this.spillNight=e;for(let n of this.floors)this.buildSpill(n,this.lightSources(n))}this.placeSky(),this.buildSunFx(),this.invalidate()}setSunPath(t,e,n){this.sunPath=t,e&&(this.compassLetters=e),n&&(this.hourCycle=n),this.buildSunFx(),this.invalidate()}setWeather(t){this.weather=t;for(let e of this.floors)this.buildSun(e);this.applyWeather(),this.placeSky(),this.buildSunFx(),this.invalidate()}applyWeather(){let t=this.weather,e=!!t&&!this.lowQuality,n=t?new j(t.sky[0]/255,t.sky[1]/255,t.sky[2]/255):null;this.scene.fog=e&&t.fog>0&&n?new us(n,1,2):null,this.placeFog();let r=e?Math.round(700*t.rain):0,s=e?Math.round(450*t.snow):0;this.seedParticles(this.rain,r*2,!0),this.seedParticles(this.snow,s,!1),this.rain.visible=r>0,this.snow.visible=s>0}placeFog(){var s;let t=this.scene.fog;if(!(t instanceof us))return;let e=this.weatherBox,n=Math.hypot((e.x1-e.x0)/2-6,(e.z1-e.z0)/2-6,(e.y1-e.y0)/2),r=this.camera.position.distanceTo(new W((e.x0+e.x1)/2,(e.y0+e.y1)/2,(e.z0+e.z1)/2));t.near=r+n,t.far=t.near+8+50*(1-(((s=this.weather)==null?void 0:s.fog)??0))}seedParticles(t,e,n){let r=t.geometry.getAttribute("position");if(((r==null?void 0:r.count)??0)===e)return;let s=this.weatherBox,o=new Float32Array(e*3),a=n?2:1;for(let c=0;c<e;c+=a){let f=s.x0+Math.random()*(s.x1-s.x0),u=s.y0+Math.random()*(s.y1-s.y0),h=s.z0+Math.random()*(s.z1-s.z0);o.set([f,u,h],c*3),n&&o.set([f,u-.45,h],c*3+3)}t.geometry.dispose();let l=new Gt;l.setAttribute("position",new Ft(o,3)),t.geometry=l}stepWeather(t){let e=this.weather;if(!e||!this.rain.visible&&!this.snow.visible)return this.weatherLast=0,!1;let n=this.weatherLast?Math.min(.1,(t-this.weatherLast)/1e3):0;if(this.weatherLast=t,!n)return!0;let r=this.weatherBox,s=r.y1-r.y0,o=e.wind*2.5;if(this.rain.visible){let a=this.rain.geometry.getAttribute("position"),l=a.array,c=(8+4*e.rain)*n;for(let f=0;f<l.length;f+=6){let u=l[f+1]-c,h=l[f]+o*n;u<r.y0&&(u+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[f]=h,l[f+1]=u,l[f+3]=h-o*.05,l[f+4]=u-.45,l[f+5]=l[f+2]}a.needsUpdate=!0}if(this.snow.visible){let a=this.snow.geometry.getAttribute("position"),l=a.array,c=t/1e3;for(let f=0;f<l.length;f+=3){let u=l[f+1]-(.9+.6*e.snow)*n,h=l[f]+(o+Math.sin(c+f)*.4)*n;u<r.y0&&(u+=s,h=r.x0+Math.random()*(r.x1-r.x0)),h>r.x1&&(h-=r.x1-r.x0),l[f]=h,l[f+1]=u}a.needsUpdate=!0}return!0}placeSky(){var h;let t=this.sun,e=this.weather,n=(e==null?void 0:e.cloud)??0,r=!t||t.elevation<-3;if(!t||!e||e.disc===!1||n>.85||!r&&t.elevation<1){this.skyDisc.visible=!1;return}let s=(((h=this.building)==null?void 0:h.settings.north)??0)*ae,o=(r?t.azimuth+180:t.azimuth)*ae,a=Math.max(10,Math.abs(t.elevation))*ae,{center:l,r:c}=this.skyFrame(),f=new W(Math.sin(s+o)*Math.cos(a),Math.sin(a),-Math.cos(s+o)*Math.cos(a));this.skyDisc.position.copy(l).addScaledVector(f,c),this.skyDisc.scale.setScalar(c*(r?.03:.04)),this.skyDisc.lookAt(l);let u=this.skyDisc.material;u.color.set(r?13621486:16767370),u.opacity=(r?.55:.85)*(1-n),this.skyDisc.visible=!0}skyFrame(){let t=this.weatherBox;return{center:new W((t.x0+t.x1)/2,t.y0,(t.z0+t.z1)/2),r:Math.min(300,Math.max(80,this.houseRadius*5))}}buildSunFx(){var m;let t=this.building,e=this.sun,n=!!t&&!!e&&t.settings.sun_shadow!==!1&&!this.options.safeFx,r=((t==null?void 0:t.settings.north)??0)*ae,s=((m=this.weather)==null?void 0:m.cloud)??0,o=n&&!this.lowQuality&&e.elevation>1&&s<.9&&!this.roomTint,a=o?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${r},${s.toFixed(1)},${this.theme},${this.roofGeos.length}`:"";a!==this.shadowSig&&(this.shadowSig=a,o?this.drawShadow(t,e,r,s):this.sunFx.hideShadow());let l=this.sunPath,c=n&&!!l&&l.points.length>1&&e.elevation>-3,f=c?this.arcFrame():null,u=c&&f?`${this.theme},${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${this.compassLetters.join("")},${this.hourCycle.hourCycle??""},${l.points[0].t},${r},${f.x.toFixed(2)},${f.z.toFixed(2)},${f.y.toFixed(2)},${f.r.toFixed(2)},${s.toFixed(1)}`:"";if(u===this.arcSig)return;if(this.arcSig=u,!u||!f||!l||!e)return this.sunFx.hideArc();let h=(x,v,y=0)=>{let M=Math.max(0,v)*ae,w=r+x*ae;return[f.x+Math.sin(w)*Math.cos(M)*f.r,f.y+Math.sin(M)*f.r+y,f.z-Math.cos(w)*Math.cos(M)*f.r]},d=1-.7*s,p=Date.now(),b=x=>new Date(x).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit",...this.hourCycle}),g=f.r*.03;this.sunFx.setArc({points:l.points.map(x=>({at:h(x.azimuth,x.elevation),t:x.t,elevation:x.elevation})),now:p,hours:l.points.filter(x=>x!==l.rise&&x!==l.set&&new Date(x.t).getMinutes()===0).map(x=>h(x.azimuth,x.elevation)),labels:[l.rise,l.set].flatMap(x=>x?[{text:b(x.t),at:h(x.azimuth,x.elevation,g*2.2),rising:x===l.rise}]:[]),sun:e.elevation>0?h(e.azimuth,e.elevation):null,ring:{center:[f.x,f.y,f.z],r:f.r,north:r,letters:this.compassLetters},size:g,fade:d,light:this.theme!=="neon"})}arcFrame(){return dg(this.building)}nightFactor(){let t=this.sun;return t?Math.min(1,Math.max(0,-t.elevation/6)):0}buildSpill(t,e){let n=this.building,r=(n==null?void 0:n.settings.window_glow)===!1||this.options.safeFx?0:this.nightFactor(),s=n&&r>0?Dr(n):null,o=!!s&&Math.abs(t.floor.elevation-s.elevation)<.5,a=new Map;if(o)for(let u of e){let h=a.get(u.room)??[0,0,0,0];h[0]+=u.color[0]*u.level,h[1]+=u.color[1]*u.level,h[2]+=u.color[2]*u.level,h[3]+=u.level,a.set(u.room,h)}let l=[...t.openings.values()].map(u=>(u.cover??0).toFixed(1)).join(","),c=o&&a.size?`${r.toFixed(2)}|${[...a].map(([u,h])=>`${u}:${h.map(d=>d.toFixed(2)).join("/")}`).join(";")}|${l}`:"";if(c===t.spillSig)return;t.spillSig=c;let f=new ie;if(c)for(let u of t.geo.openings){if(u.opening.type!=="window"||!u.exterior)continue;let h=t.floor.rooms.findIndex(C=>C.id===u.opening.room_id),d=h<0?void 0:a.get(Ns(t.lightZones,h));if(!d||d[3]<.02)continue;let p=t.openings.get(u.opening.id),b=1-((p==null?void 0:p.cover)??0),g=u.top-u.sill;if(b<.05||g<.1)continue;let m=Math.max(d[0],d[1],d[2],1e-6),x=.3*r*Math.min(1,d[3])*b*Math.min(1,g/1.2),v=new j(d[0]/m*x,d[1]/m*x,d[2]/m*x),y=[-u.toRoom[0],-u.toRoom[1]],M=Math.min(3.5,.8+1.1*u.top),w=(C,L,T)=>{let P=L/M,N=-T*P+C*(u.width+2*T*P);return wr(t.floor,{x:u.start[0]+u.axis[0]*N+y[0]*(u.faceOut+L),z:u.start[1]+u.axis[1]*N+y[1]*(u.faceOut+L)})},A=w(.5,.05,0),_=Eg((C,L)=>w(C,L,.35*M),A,M);if(_<.2)continue;let R=.35*_,S=A+.014,E=(C,L)=>{let T=L/_,P=-R*T+C*(u.width+2*R*T);return[u.start[0]+u.axis[0]*P+y[0]*(u.faceOut+L),S,u.start[1]+u.axis[1]*P+y[1]*(u.faceOut+L)]},I=4,O=[[0,0],[.18,1],[.82,1],[1,0]];for(let C=0;C<I;C++){let L=_*C/I,T=_*(C+1)/I,P=(1-C/I)**2,N=(1-(C+1)/I)**2;for(let F=0;F+1<O.length;F++){let[z,B]=O[F],[V,H]=O[F+1],J=E(z,L),tt=E(V,L),ot=E(V,T),X=E(z,T),q=v.clone().multiplyScalar(P*B),Y=v.clone().multiplyScalar(P*H),st=v.clone().multiplyScalar(N*H),rt=v.clone().multiplyScalar(N*B);f.tri(J,tt,ot,q,Y,st),f.tri(J,ot,X,q,st,rt)}}}t.spillMesh.geometry.dispose(),t.spillMesh.geometry=f.geometry(),t.spillMesh.visible=f.count>0}drawShadow(t,e,n,r){let s=Dr(t),o=(s==null?void 0:s.rooms.filter(g=>!g.outdoor&&g.points.length>=3))??[];if(!s||!o.length)return this.sunFx.hideShadow();let a=o.flatMap(g=>g.points.map(m=>m[0])),l=o.flatMap(g=>g.points.map(m=>m[1])),c=s.elevation+wr(s,{x:Math.min(...a)-1,z:(Math.min(...l)+Math.max(...l))/2}),f=e.azimuth*ae,u=hg(t,this.roofGeos,[Math.sin(n+f),-Math.cos(n+f)],e.elevation,c),h=fg(u);if(!h)return this.sunFx.hideShadow();let d=s.elevation-c<=.35?s.elevation+.012:c+.012,p=t.floors.filter(g=>Math.abs(g.elevation-s.elevation)<.5).flatMap(g=>g.rooms.filter(m=>!m.outdoor&&m.points.length>=3).map(m=>m.points)),b=(this.theme==="neon"?.6:.34)*Math.min(1,e.elevation/8)*(1-.8*r);this.sunFx.setShadow(this.renderer,u,h,p,d,b,this.theme==="neon"?394264:1713203)}setRoomTint(t){let e=!!t!=!!this.roomTint;if(this.roomTint=t,this.tintTick=!0,this.applyHighlight(),e){for(let n of this.floors)n.glowSig="",this.buildGlow(n),n.sunSig="",this.buildSun(n);this.buildSunFx()}}setScreens(t){this.screens=t;for(let e of this.floors)this.buildScreens(e);this.invalidate()}fillRoomPin(t,e,n){if(t.textContent=e||"\u2013",n){let r=document.createElement("small");r.textContent=n,t.append(r),t.classList.add("fp3d-pin-info")}else t.classList.remove("fp3d-pin-info")}setRoomInfo(t){if(!(t.size===this.roomInfo.size&&[...t].every(([n,r])=>this.roomInfo.get(n)===r))){this.roomInfo=t;for(let n of this.floors)for(let r of n.roomPins)this.fillRoomPin(r.pin,r.room.name,t.get(r.room.id))}}setFloorInfo(t){var e,n;this.floorInfo=t;for(let r of this.floors){let s=r.label.querySelector("span"),o=t.get(r.floor.id)??((n=(e=this.options).floorInfo)==null?void 0:n.call(e,r.floor))??"";s&&s.textContent!==o&&(s.textContent=o,r.labelSize=null,this.labelsDirty=!0)}this.invalidate()}setOpeningStates(t,e=!1){if(this.openingTargets=t,e)for(let n of this.floors){let r=!1;for(let[s,o]of n.openings){let a=t.get(s)??ea,l={...a,open2:a.open2??0,tilt2:a.tilt2??0};l.open===o.open&&l.open2===(o.open2??0)&&l.tilt===o.tilt&&l.tilt2===(o.tilt2??0)&&l.cover===o.cover&&!!l.sensed==!!o.sensed&&!!l.unlocked==!!o.unlocked||(n.openings.set(s,l),r=!0)}r&&(this.buildOpenings(n),this.buildGlow(n),this.buildSun(n))}this.invalidate()}setFridgeDoors(t){let e=new Set;for(let[n,r]of t){this.fridges.has(n)||e.add(n);let s=this.fridges.get(n)??{l:r.left?1:0,r:r.right?1:0,tl:0,tr:0};s.tl=r.left?1:0,s.tr=r.right?1:0,this.fridges.set(n,s)}for(let n of[...this.fridges.keys()])t.has(n)||this.fridges.delete(n);this.showFresh(e),this.invalidate()}awnings=new Map;setAwnings(t){let e=new Set;for(let[n,r]of t){this.awnings.has(n)||e.add(n);let s=r.out??(r.settled&&r.moving>0?1:0),o=this.awnings.get(n)??{cur:s,to:s,speed:0};r.out===null?(o.to=r.moving>0?1:0,o.speed=1/Math.max(2,r.time)):(o.to=r.out,o.speed=0),this.awnings.set(n,o)}for(let n of[...this.awnings.keys()])t.has(n)||this.awnings.delete(n);this.showFresh(e),this.invalidate()}showFresh(t){if(t.size)for(let e of this.floors)Zg(e.floor,t)&&this.buildFridges(e)}stepAwnings(t){let e=new Set,n=1-Math.exp(-t/450);for(let[r,s]of this.awnings){let o=s.to-s.cur;if(Math.abs(o)<.002){o!==0&&(s.cur=s.to,e.add(r));continue}s.cur=s.speed>0?s.cur+Math.sign(o)*Math.min(Math.abs(o),s.speed*t/1e3):s.cur+o*n,e.add(r)}return e}stepFridges(t){let e=1-Math.exp(-t/$g),n=new Set;for(let[r,s]of this.fridges)for(let[o,a]of[["l","tl"],["r","tr"]]){let l=s[a]-s[o];if(Math.abs(l)<.004){l!==0&&(s[o]=s[a],n.add(r));continue}s[o]+=l*e,n.add(r)}for(let r of this.stepAwnings(t))n.add(r);if(!n.size)return!1;for(let r of this.floors)Zg(r.floor,n)&&this.buildFridges(r);return!0}buildFridges(t){var n,r,s;let e=new ie;for(let o of t.floor.furniture){if(o.type!=="fridge_smart")continue;let a=this.fridges.get(o.id);hm(e,o,en(t.floor,o),(a==null?void 0:a.l)??0,(a==null?void 0:a.r)??0)}for(let o of t.floor.furniture)o.type==="awning"&&um(e,o,en(t.floor,o),((n=this.awnings.get(o.id))==null?void 0:n.cur)??0);for(let o of t.floor.furniture){let a=uc(o.type),l=a?_e(o.type):void 0;a&&l&&ym(e,l,a,o,en(t.floor,o),((r=this.awnings.get(o.id))==null?void 0:r.cur)??0)}t.gateTris=[];for(let o of t.floor.outdoor??[])for(let a of mc(o)){let l=e.count;Mm(e,t.floor,o,a,((s=this.awnings.get(a.gate.id))==null?void 0:s.cur)??0);let c=a.gate.entity&&a.gate.entity!=="none"?a.gate.entity:a.gate.contact&&a.gate.contact!=="none"?a.gate.contact:null;c&&t.gateTris.push({id:c,start:l,end:e.count})}t.fridgeMesh.geometry.dispose(),t.fridgeMesh.geometry=e.geometry(),t.fridgeMesh.visible=e.count>0}resetView(){this.fit(700)}setStartView(t){this.startView=t}currentView(){let t=this.controls.view,e=this.floorBase(this.floorId);return{theta:Math.atan2(Math.sin(t.theta),Math.cos(t.theta)),phi:t.phi,radius:t.radius,target:{x:t.target.x,y:t.target.y-e,z:t.target.z}}}floorBase(t){let e=t===null?void 0:this.floorMap.get(t);return e?e.floor.elevation+e.ty:0}projections=new Wc(()=>this.invalidate());setProjections(t){this.projections.set(t),this.invalidate()}projectorPose(t){let e=this.devices.find(l=>l.id===t&&l.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n||!n.group.visible)return null;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.05,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y);return{position:new W(e.x,a,e.z),direction:new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o)),fov:Math.min(e.fov??(s?120:90),140),reach:Math.min(30,Math.max(8,(e.reach??(s?3:4.5))*2.5))}}updateProjections(){let t=[];for(let n of this.floors){let r=n.group.visible&&n.o>.5;for(let s of[n.floorMesh,n.wallMesh])s.layers.enable(Xc);t.push({key:`${n.floor.id}:floor`,geometry:n.floorMesh.geometry,parent:n.group,masks:n.mask,visible:r}),t.push({key:`${n.floor.id}:walls`,geometry:n.wallMesh.geometry,parent:n.group,masks:n.mask,visible:r})}this.ground.layers.enable(Xc),t.push({key:"ground",geometry:this.ground.geometry,parent:this.ground,masks:null,visible:this.ground.visible});let e=this.floors.map(n=>`${n.floor.id}:${n.ty.toFixed(2)}:${n.floorMesh.geometry.uuid}:${n.wallMesh.geometry.uuid}`).join(";")+`|${this.ground.position.toArray().join(",")}`;this.projections.update(this.renderer,this.scene,t,n=>this.projectorPose(n),e)}dispose(){var t,e,n,r,s;this.projections.dispose(),this.disposed=!0,cancelAnimationFrame(this.frame),clearTimeout(this.flowTimer),clearTimeout(this.effectTimer),clearTimeout(this.robotTimer),clearTimeout(this.orbitTimer),clearTimeout(this.weatherTimer);for(let o of[this.rain,this.snow,this.skyDisc])o.geometry.dispose(),o.material.dispose();this.sunFx.dispose(),this.resizeObserver.disconnect(),(t=this.intersection)==null||t.disconnect(),document.removeEventListener("visibilitychange",this.onVisibility);for(let o of["pointerdown","pointerup","wheel","keydown"])this.host.removeEventListener(o,this.onInput,{capture:!0});clearTimeout(this.decorTimer),this.controls.dispose(),this.clear(),this.disposeRetired(),this.building=null,this.buildRoofMesh(),this.ground.geometry.dispose(),this.ground.material.dispose(),this.patternTexture.dispose(),this.blindTexture.dispose(),(e=this.groundTexture)==null||e.dispose(),this.haloTexture.dispose();for(let o of this.robots.values()){o.led.dispose();for(let a of o.own)a.dispose()}this.robots.clear(),(n=this.robotGeo)==null||n.dispose(),(r=this.robotLedGeo)==null||r.dispose(),(s=this.robotMat)==null||s.dispose(),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement.remove(),this.labels.remove()}invalidate(){this.frame||this.disposed||document.hidden||!this.onScreen||(this.frame=requestAnimationFrame(t=>this.render(t)))}makeRenderer(t){let e=t==="low"||t==="auto"&&Iw();this.lowQuality=e,this.applyWeather(),this.highQuality=t==="high";let n=new Sr({antialias:!e,alpha:!0,powerPreference:e?"low-power":"default"});return n.setPixelRatio(Math.min(window.devicePixelRatio||1,e?1:t==="high"?2.5:2)),n.setClearColor(0,0),n.outputColorSpace=Ue,n.domElement.className="fp3d-canvas",this.host.prepend(n.domElement),n}makeControls(){return new Gc(this.renderer.domElement,this.camera,{change:()=>this.invalidate(),tap:(t,e)=>this.onTap(t,e),hold:(t,e)=>this.onHold(t,e),swipeStart:(t,e,n,r)=>this.swipeStart(t,e,n,r),swipeMove:t=>{var e,n;return this.swipe&&((n=(e=this.options).onDeviceSwipe)==null?void 0:n.call(e,this.swipe.entity,"move",t,this.swipe.x,this.swipe.y))},swipeEnd:()=>{var t,e;this.swipe&&((e=(t=this.options).onDeviceSwipe)==null||e.call(t,this.swipe.entity,"end",0,this.swipe.x,this.swipe.y)),this.swipe=null},grab:(t,e)=>this.grabFurniture(t,e),drag:(t,e)=>this.dragFurniture(t,e),drop:()=>this.dropFurniture(),back:()=>{var t,e;return(e=(t=this.options).onBack)==null?void 0:e.call(t)},doubleTap:(t,e)=>{var r,s;let n=this.floorId&&this.options.onRoomDoubleTap?this.pick(t,e):null;n&&!("entity"in n)&&n.roomId?this.options.onRoomDoubleTap(n.floorId,n.roomId):(s=(r=this.options).onBack)==null||s.call(r)}})}onVisibility=()=>{document.hidden||this.invalidate()};resize(){let t=this.host.clientWidth||1,e=this.host.clientHeight||1;this.size={w:t,h:e},this.labelsDirty=!0,this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix(),this.invalidate()}retired=[];disposeRetired(){if(this.retired.length){for(let t of this.retired)t.dispose();this.retired=[]}}clear(){var t;for(let e of this.robots.values())e.group.removeFromParent();for(let e of this.floors){for(let n of e.screenPics.values())n.mesh.material.dispose(),(t=n.texture)==null||t.dispose();e.group.traverse(n=>{let r=n.geometry;r==null||r.dispose()});for(let n of Object.values(e.materials))this.retired.push(n);this.root.remove(e.group)}this.floors=[],this.floorMap=new Map;for(let e of[...this.labels.children])e.dataset.entity||e.remove()}makeDevicePin(t){let e=document.createElement("button");e.className="fp3d-dev",e.dataset.entity=t;let n=document.createElement("span");n.className="fp3d-dev-icon";let r=document.createElement("span");r.className="fp3d-dev-text";let s=document.createElement("span");s.className="fp3d-dev-watt";let o=document.createElement("span");o.className="fp3d-dev-name",e.append(n,r,s,o);let a,l=!1;e.addEventListener("pointerdown",f=>{if(this.furnish){this.pendingDevice=t;return}f.stopPropagation(),l=!1,clearTimeout(a),a=setTimeout(()=>{var d,p;l=!0;let u=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();(p=(d=this.options).onDeviceHold)==null||p.call(d,t,u.left+u.width/2-h.left,u.top+u.height/2-h.top)},vw)});let c=()=>clearTimeout(a);return e.addEventListener("pointerleave",c),e.addEventListener("pointercancel",c),e.addEventListener("pointerup",c),e.addEventListener("contextmenu",f=>f.preventDefault()),e.addEventListener("click",f=>{var d,p,b,g,m,x;if(f.stopPropagation(),this.furnish){this.selectDevice(t),(p=(d=this.options).onDeviceSelect)==null||p.call(d,t);return}if(l)return;let u=e.getBoundingClientRect(),h=this.host.getBoundingClientRect();if(this.tapOpens){let v=this.devices.find(y=>y.id===t);return v?(g=(b=this.options).onRoomTap)==null?void 0:g.call(b,v.floorId,v.roomId??null):this.onTap(u.left+u.width/2-h.left,u.bottom-h.top)}(x=(m=this.options).onDeviceTap)==null||x.call(m,t,u.left+u.width/2-h.left,u.top+u.height/2-h.top)}),e.addEventListener("keydown",f=>{var u,h;if(f.key==="Enter"&&f.shiftKey||f.key==="ContextMenu"){f.preventDefault();let d=e.getBoundingClientRect(),p=this.host.getBoundingClientRect();(h=(u=this.options).onDeviceHold)==null||h.call(u,t,d.left+d.width/2-p.left,d.top+d.height/2-p.top)}}),e}buildLightSurface(t){let e=this.lowQuality?.5:.25,n=Mg(t.floor,t.geo.walls2d,t.geo.wallBuckets,t.geo.openings,e,t.geo.holes,t.geo.roofUnder),r=Qg(t.floor,t.geo.openRooms);if(t.lightZones=r.some((a,l)=>a!==l)?r:null,t.lightZones){for(let a=0;a<n.room.length;a++){let l=n.room[a];l>=0&&l<r.length&&(n.room[a]=r[l])}for(let a of n.doors)a.a>=0&&a.a<r.length&&(a.a=r[a.a]),a.b>=0&&a.b<r.length&&(a.b=r[a.b]);for(let a of n.blockers)a.ra=Ns(r,a.ra),a.rb=Ns(r,a.rb)}t.lightSurface=n;let s=new Gt;s.setAttribute("position",new Ft(n.pos,3)),s.setAttribute("color",new Ft(new Float32Array(n.pos.length),3)),s.setAttribute("fold",new Ft(n.fold,1));let o=new mr(new Uint32Array(n.pos.length/3),1);o.setUsage(rh),s.setIndex(o),s.setDrawRange(0,0),s.computeBoundingSphere(),t.glowMesh.geometry.dispose(),t.glowMesh.geometry=s,t.glowSig="",this.buildGlow(t)}packLightAt(t){if(t.lamp!=="wall"||!t.pack)return null;let e=_e(t.pack);if(!e)return null;let[n,r,s]=t.size??jc.wall;return vm(e,{x:t.x,z:t.z,rotation:t.rotation??0,w:n,d:r,h:s,mirror:t.mirror},t.base??0)}lightSources(t){let e=[];for(let n of this.devices){let r=this.glowOf(n);if(n.floorId!==t.floor.id||!r)continue;let s=n.top??t.floor.height,o=Cf(t.floor,n.x,n.z),a=Ns(t.lightZones,o),[l,,c]=n.size??(n.lamp?jc[n.lamp]:[.3,.3,.3]),f=n.base??0,u={ceiling:[s-.12,"ceiling"],ceiling_fan:[s-.3,"ceiling"],downlight:[s-.03,"spot"],spot:[s-c,"spot"],panel:[s-.05,"ceiling"],pendant:[Math.max(.5,s-c),"pendant"],floor:[f+c-.15,"omni"],uplight:[f+c,"up"],table:[f+c-.1,"omni"],wall:[f+.1,"wall"],strip:[f+Math.max(.02,c)-.01,f<Ew?"up":"ceiling"],bollard:[f+c-.08,"ceiling"],garden:[f+c,"up"]},[h,d]=n.lamp?u[n.lamp]:[n.y,"omni"],p=n.lightY??h,b=r.color;if(n.lamp==="strip"){let g=(n.rotation??0)*ae,m=!!n.upright||Math.abs(n.roll??0)>45;for(let x of[-1/3,0,1/3])if(n.upright)e.push({x:n.x,y:f+l*(.5+x),z:n.z,color:b,level:r.level*.55,kind:"omni",room:a});else{let v=(n.rise??0)*ae;e.push({x:n.x+Math.cos(g)*l*x*Math.cos(v),y:p+Math.sin(v)*l*x,z:n.z+Math.sin(g)*l*x*Math.cos(v),color:b,level:r.level*.55,kind:m||v?"omni":d,room:a})}}else{let g=this.packLightAt(n);e.push({x:g?g[0]:n.x,y:g?g[1]:p,z:g?g[2]:n.z,color:b,level:r.level,kind:d,room:a})}}return e.push(...this.lightFromAbove(t)),e}lightFromAbove(t){let e=t.floor.elevation+t.floor.height,n=this.floors.find(s=>s!==t&&Math.abs(s.floor.elevation-e)<.8&&s.geo.holes.length);if(!n)return[];let r=[];for(let s of n.geo.holes){if(s.length<3)continue;let o=0,a=[0,0,0];for(let f of this.devices){if(f.floorId!==n.floor.id)continue;let u=this.glowOf(f);if(!u)continue;let h=qt([f.x,f.z],s)?0:yw(f.x,f.z,s);if(h>qg)continue;let d=u.level*(1-h/qg);for(let p=0;p<3;p++)a[p]+=u.color[p]*d;o+=d}if(o<.02)continue;let[l,c]=ui(s);r.push({x:l,y:t.floor.height-.05,z:c,color:[a[0]/o,a[1]/o,a[2]/o],level:Math.min(1,o)*.6,kind:"ceiling",room:Ns(t.lightZones,Cf(t.floor,l,c))})}return r}buildGlow(t){let e=t.lightSurface;if(!e)return;let n=this.lightSources(t);this.buildSpill(t,n);let r=e.doors.map(u=>{let h=t.geo.openings.find(p=>p.opening.id===u.id);if(h&&Ji(h.opening,h.exterior)==="passage")return 1;let d=t.openings.get(u.id);return d?Math.max(d.open,d.open2??0):.5}),s=n.map(u=>`${u.x.toFixed(2)},${u.y.toFixed(2)},${u.z.toFixed(2)},${u.kind},${u.level.toFixed(3)},${u.color.map(h=>h.toFixed(3)).join("/")}`).join(";")+"|"+r.map(u=>u.toFixed(1)).join(",");if(s===t.glowSig)return;t.glowSig=s;let o=t.glowMesh.geometry,a=o.getAttribute("color");if(!n.length){t.glowMesh.visible=!1,o.setDrawRange(0,0);return}let l=Tg(e,n,.42,r);if(this.roomTint){let u=t.floor.rooms.length;for(let h=0;h<e.room.length;h++)if(e.room[h]!==u)for(let d=0;d<3;d++)l[h*3+d]*=.12}a.array.set(l),a.needsUpdate=!0;let c=o.index.array,f=0;for(let u=0;u<l.length/18;u++){let h=!1;for(let d=u*18;d<u*18+18&&!h;d++)h=l[d]>.004;if(h)for(let d=0;d<6;d++)c[f++]=u*6+d}o.index.needsUpdate=!0,o.setDrawRange(0,f),t.glowMesh.visible=f>0}makeMaterials(t){return{floor:rn(new Yt({vertexColors:!0}),this.themeUniform,!1,!1),pattern:Dw(this.patternTexture),wall:rn(mi(new Yt({vertexColors:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),t,"solid"),this.themeUniform),glassWall:mi(new Yt({vertexColors:!0,transparent:!0,depthWrite:!1}),t,"glass"),shadow:new Yt({vertexColors:!0,blending:go,premultipliedAlpha:!0,transparent:!0,depthWrite:!1,side:oe,polygonOffset:!0,polygonOffsetFactor:-1}),lines:rn(mi(new $e({vertexColors:!0,transparent:!0,blending:ta(this.theme),depthWrite:!1}),t),this.themeUniform,!0),glow:mi(new Yt({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:oe,polygonOffset:!0,polygonOffsetFactor:-3}),t,"solid"),frames:rn(mi(new Yt({vertexColors:!0,side:oe}),t),this.themeUniform),glass:mi(new Yt({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:oe}),t),blinds:rn(mi(new Yt({map:this.blindTexture,vertexColors:!0,side:oe}),t),this.themeUniform),water:rn(new Yt({vertexColors:!0,transparent:!0,opacity:.5,depthWrite:!1,side:oe}),this.themeUniform),flow:Uw(this.flowTime),pipeLine:Nw(this.flowTime),patch:new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:oe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),patchGlow:new Yt({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:oe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2}),solarLive:Rf(this.flowTime),lamps:rn(new Yt({vertexColors:!0}),this.themeUniform),halos:new Si({map:this.haloTexture,size:.9,sizeAttenuation:!0,vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1}),cones:new Yt({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:oe}),screens:new Yt({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:oe}),earth:rn(new Yt({vertexColors:!0}),this.themeUniform),earthWell:rn(new Yt({vertexColors:!0,side:oe}),this.themeUniform),earthLines:rn(new $e({vertexColors:!0,transparent:!0,depthWrite:!1}),this.themeUniform,!0)}}rebuild(){var s,o,a,l;let t=new Map(this.floors.map(c=>[c.floor.id,{y:c.y,o:c.o}])),e=new Map(this.floors.map(c=>[c.floor.id,c.openings]));this.clear();let n=this.building;if(!n)return;let r=[...n.floors].sort((c,f)=>c.elevation-f.elevation);for(let c of n.floors){let f=((s=n.settings.roof)==null?void 0:s.solar)??[],u=((o=Dr(n))==null?void 0:o.id)===c.id?f.filter(Nt=>Nt.face===bf).map(Nt=>({field:Nt,face:Am(n,Nt)})):[],h=f.filter(Nt=>Nt.face.startsWith(`wall:${c.id}:`));if(h.length){let Nt=new Map(Em(n,c.id).map(se=>[se.key,se]));for(let se of h){let Jt=Nt.get(se.face);Jt&&u.push({field:se,face:Jt})}}let p=Hh(n).some(Nt=>v0(Nt,c.elevation+c.height)&&Xh(Nt,c.elevation))?(Nt,se)=>{let Jt=_0(n,Nt,se,c.elevation);return Jt===null?null:Jt-c.elevation}:void 0,b=Gm(Ef(c,this.parked),n.settings.wall_exterior,n.settings.wall_interior,Hm(n.floors,c),u,p),g={standing:{value:65535},glass:{value:0}},m=this.makeMaterials(g),x=new De,v=new Ct(b.floor,m.floor),y=new Ct(b.shadow,m.shadow);y.renderOrder=1;let M=new Ct(b.floor,m.pattern);M.renderOrder=2;let w=new Ct(new Gt,m.glow);w.renderOrder=3,w.visible=!1;let A=new Ct(new Gt,m.frames),_=new Ct(new Gt,m.blinds),R=new Ct(new Gt,m.glass);R.renderOrder=4;let S=new Ct(new Gt,m.lamps);S.visible=!1;let E=new Ct(new Gt,m.cones);E.visible=!1,E.renderOrder=3;let I=new Ct(new Gt,m.cones);I.visible=!1,I.renderOrder=3;let O=new Gi(new Gt,m.halos);O.visible=!1,O.renderOrder=7;let C=new Ct(new Gt,m.cones);C.visible=!1,C.renderOrder=7;let L=new Ct(new Gt,m.cones);L.visible=!1,L.renderOrder=7;let T=new Ct(new Gt,m.lamps);T.visible=!1;let P=new Ct(new Gt,m.lamps);P.visible=!1;let N=new Ct(new Gt,m.patch);N.visible=!1,N.renderOrder=3;let F=new Ct(new Gt,m.patchGlow);F.visible=!1,F.renderOrder=3;let z=new Ct(new Gt,m.screens);z.visible=!1,z.renderOrder=5;let B=new Ct(new Gt,m.flow);B.renderOrder=5,B.frustumCulled=!1;let V=new Ct(new Gt,m.pipeLine),H=new Ct(new Gt,m.pipeLine),J=new Ct(new Gt,m.pipeLine);for(let Nt of[V,H,J])Nt.renderOrder=4,Nt.frustumCulled=!1,Nt.visible=!1;let tt=Af(u,c.elevation),ot=tt?new Ct(tt.geometry,m.solarLive):null;ot&&(ot.renderOrder=6,Jo(tt,this.solarLevels));for(let Nt of[A,_,R])Nt.frustumCulled=!1;let X=new Ct(b.walls,m.glassWall),q=new Ct(b.walls,m.wall);X.renderOrder=6;let Y=new Ct(b.water,m.water);Y.renderOrder=4;let st=Math.min(...n.floors.filter(Nt=>Nt.rooms.length).map(Nt=>Nt.elevation)),rt=Ym(n,c,b.openings,c.elevation===st),lt=rt?[new Ct(rt.earth.geometry(),m.earth),new Ct(rt.wells.geometry(),m.earthWell),new qe(rt.lines.geometry(),m.earthLines)]:[];for(let Nt of lt)Nt.userData.earth=!0;x.add(v,y,M,w,q,Y,new qe(b.lines,m.lines),A,_,R,B,V,H,J,S,E,I,O,C,L,T,P,N,F,z,X,...ot?[ot]:[],...lt),this.root.add(x);let gt=document.createElement("button");gt.className="fp3d-pin fp3d-pin-floor",gt.dataset.floor=c.id;let dt=document.createElement("b");dt.textContent=c.name||"\u2013";let xt=document.createElement("span");xt.textContent=this.floorInfo.get(c.id)??((l=(a=this.options).floorInfo)==null?void 0:l.call(a,c))??"",gt.append(dt,xt),gt.addEventListener("click",()=>{var Nt,se;return(se=(Nt=this.options).onFloorTap)==null?void 0:se.call(Nt,c.id)}),this.labels.append(gt);let bt=t.get(c.id),Ut=[],$t=null;for(let Nt of pc(c)){let se=document.createElement("button");se.className="fp3d-pin",se.dataset.room=Nt.id,se.dataset.floor=c.id,this.fillRoomPin(se,Nt.name,this.roomInfo.get(Nt.id)),se.addEventListener("click",()=>{var $,Ee;return(Ee=($=this.options).onRoomTap)==null?void 0:Ee.call($,c.id,Nt.id)}),this.labels.append(se);let[Jt,Te]=ui(Nt.points);if(Ut.push({pin:se,room:Nt,cx:Jt,cz:Te}),!Nt.outdoor)for(let[$,Ee]of Nt.points)$t??={x0:$,x1:$,z0:Ee,z1:Ee},$t.x0=Math.min($t.x0,$),$t.x1=Math.max($t.x1,$),$t.z0=Math.min($t.z0,Ee),$t.z1=Math.max($t.z1,Ee)}this.floors.push({floor:c,rank:r.indexOf(c),group:x,geo:b,floorMesh:v,shadowMesh:y,patternMesh:M,glowMesh:w,lightSurface:null,lightZones:null,framesMesh:A,glassMesh:R,blindsMesh:_,flowMesh:B,pipeLineMesh:V,pipeHouseMesh:H,pipeFloorMesh:J,pipeLineSig:"",solarMesh:ot,solarLive:tt,lampMesh:S,sunMesh:E,sunSig:"",spillMesh:I,spillSig:"",haloMesh:O,coneMesh:C,trailMesh:L,fridgeMesh:T,pipeMesh:P,pipeSig:"",patchMesh:N,patchGlowMesh:F,patchSig:"",lampTris:[],coneTris:[],lampFurnTris:[],frameTris:[],gateTris:[],glassTris:[],blindTris:[],wallMesh:q,screenMesh:z,screenSig:"",screenPics:new Map,flowLayout:"",glowSig:"",lampShapeSig:"",lampColorSig:"",lampShade:new Float32Array(0),lampRanges:new Map,bbox:$t,roomPins:Ut,labelSize:null,materials:m,mask:g,openings:new Map,y:(bt==null?void 0:bt.y)??0,o:(bt==null?void 0:bt.o)??1,ty:0,to:1,appliedO:-1,lightAt:0,label:gt})}this.floorMap=new Map(this.floors.map(c=>[c.floor.id,c]));for(let c of this.floors)this.buildFridges(c),this.buildPipes(c),this.buildPatches(c);this.labelsDirty=!0,this.floorId&&!n.floors.some(c=>c.id===this.floorId)&&(this.floorId=null);for(let c of this.floors){this.buildLamps(c),this.buildScreens(c);let f=e.get(c.floor.id);for(let u of c.geo.openings)c.openings.set(u.opening.id,(f==null?void 0:f.get(u.opening.id))??this.openingTargets.get(u.opening.id)??ea);this.buildOpenings(c),this.buildFlows(c),c.poolGroup=void 0,this.buildPoolWater(c),this.buildLightSurface(c),this.buildSun(c)}this.applyTargets(t.size===0),this.applyHighlight(),this.applyTierFlags(),this.buildRoofMesh(),this.buildSunFx(),this.updateGhost()}buildRoofMesh(){var m;this.roof&&(this.roof.group.traverse(x=>{var v;return(v=x.geometry)==null?void 0:v.dispose()}),this.roof.solid.dispose(),this.roof.lines.dispose(),this.roof.glass.dispose(),this.roof.live.dispose(),this.roof.wins.traverse(x=>{var v;return(v=x.geometry)==null?void 0:v.dispose()}),this.roof.winSolid.dispose(),this.roof.winLines.dispose(),this.roof.winGlass.dispose(),this.roof.roofWinGlass.dispose(),this.scene.remove(this.roof.wins),this.scene.remove(this.roof.group),this.roof=null);let t=this.building?Nm(this.building,this.roofWindows):[];if(this.roofGeos=t,this.shadowSig="",!t.length)return;let e=new Map(Or(this.building).map(x=>[x.key,x])),n=((m=this.building.settings.roof)==null?void 0:m.solar)??[],r=Rf(this.flowTime),s=[],o=new De,a=rn(new Yt({vertexColors:!0,transparent:!0,side:oe}),this.themeUniform),l=rn(new $e({vertexColors:!0,transparent:!0,blending:ta(this.theme),depthWrite:!1}),this.themeUniform,!0),c=rn(new Yt({vertexColors:!0,transparent:!0,side:oe,depthWrite:!1}),this.themeUniform),f=new De,u=rn(new Yt({vertexColors:!0,side:oe}),this.themeUniform),h=rn(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:oe,depthWrite:!1}),this.themeUniform),d=rn(new Yt({vertexColors:!0,transparent:!0,opacity:.35,side:oe,depthWrite:!1}),this.themeUniform),p=rn(new $e({vertexColors:!0,transparent:!0,blending:ta(this.theme),depthWrite:!1}),this.themeUniform,!0),b=[],g=t.map(x=>{var A,_,R,S;let v=new De;v.add(new Ct(x.solid.geometry(),a),new qe(x.lines.geometry(),l)),x.glass.count&&v.add(new Ct(x.glass.geometry(),c));let y=n.flatMap(E=>{var C;let I=e.get(E.face);return I&&(I.section?(C=x.sections)==null?void 0:C.includes(I.section):x===t[0])?[{face:I,field:E}]:[]}),M=Af(y,x.floor.elevation+x.base);if(M){let E=new Ct(M.geometry,r);E.renderOrder=9,v.add(E),s.push(M),Jo(M,this.solarLevels)}(A=x.winRoof)!=null&&A.solid.count&&v.add(new Ct(x.winRoof.solid.geometry(),u),new qe(x.winRoof.lines.geometry(),p)),(_=x.winRoof)!=null&&_.glass.count&&v.add(new Ct(x.winRoof.glass.geometry(),d)),v.renderOrder=8,o.add(v);let w=null;((R=x.win)!=null&&R.solid.count||(S=x.win)!=null&&S.glass.count)&&(w=new De,w.add(new Ct(x.win.solid.geometry(),u),new qe(x.win.lines.geometry(),p)),x.win.glass.count&&w.add(new Ct(x.win.glass.geometry(),h)),f.add(w));for(let[E,I]of x.winBelow??[]){if(!I.solid.count&&!I.glass.count)continue;let O=new De;O.add(new Ct(I.solid.geometry(),u),new qe(I.lines.geometry(),p)),I.glass.count&&O.add(new Ct(I.glass.geometry(),h)),f.add(O),b.push({floorId:E,win:O})}return{group:v,floorId:x.floor.id,rideId:A0(this.building,x.floor,x.sections??[]),base:x.base,lift:x.lift!==!1,win:w}});o.renderOrder=8,this.scene.add(o),this.scene.add(f),this.roof={group:o,parts:g,below:b,solid:a,lines:l,glass:c,live:r,lives:s,wins:f,winSolid:u,winLines:p,winGlass:h,roofWinGlass:d},this.placeRoof()}roofLift(){return Math.max(0,1-this.roofO/Xg)*2.2}placeRoof(t=1e3){let e=this.roof;if(!e)return!1;let n=this.keepRoof?1:Math.min(1,Math.max(0,(this.controls.view.radius/this.houseRadius-.62)/.3)),s=(this.floorId===null||this.floors.length===1)&&this.wallMode!=="cut"&&!this.hideRoof?Xg*n:0,o=1-Math.exp(-t/Yg),a=this.roofO;this.roofO+=(s-this.roofO)*o,Math.abs(s-this.roofO)<.004&&(this.roofO=s),e.group.visible=this.roofO>.02;for(let l of e.parts){let c=this.floorMap.get(l.floorId);if(!c)continue;let f=this.floorMap.get(l.rideId)??c,u=f.ty>0?Math.min(1,f.y/f.ty):this.explode&&this.floorId===null?1:0;l.group.position.y=c.floor.elevation+f.y+l.base+this.roofLift()+(l.lift?u*Wg:0),l.win&&(l.win.position.y=c.floor.elevation+f.y+l.base+(l.lift?u*Wg:0),l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}for(let l of e.below){let c=this.floorMap.get(l.floorId);c&&(l.win.position.y=c.floor.elevation+c.y,l.win.visible=c.group.visible&&c.o>.5&&this.wallMode!=="cut")}return e.solid.opacity=this.roofO,e.solid.depthWrite=this.roofO>.9,e.lines.opacity=this.roofO,e.glass.opacity=this.roofO*.28,e.roofWinGlass.opacity=this.roofO*.35,e.live.opacity=this.roofO,this.roofO!==a&&this.roofO!==s}applyTierFlags(){let t=this.lowQuality;this.ground.visible=!t&&this.theme!=="day"&&this.floors.some(e=>e.floor.rooms.length>0);for(let e of this.floors)e.patternMesh.visible=!t,e.shadowMesh.visible=!t&&e.o>.98;this.invalidate()}rebuildTier(){for(let t of this.floors)t.flowLayout="",this.buildFlows(t),this.buildLightSurface(t),t.lampShapeSig="",this.buildLamps(t)}get houseView(){return this.floorId===null&&this.floors.length>1}applyTargets(t){let e=this.floorId?this.floorMap.get(this.floorId):void 0;for(let n of this.floors){let r=0,s=1;e?n.rank>e.rank?(r=5+n.rank,s=0):n.rank<e.rank&&(this.floorStack==="stacked"?r=0:(r=-.4,s=this.floorStack==="single"?0:xw)):r=this.explode?n.rank*bw:0,n.ty=r,n.to=s;let a=e===n?sn:ai;n.materials.earth.side!==a&&(n.materials.earth.side=a,n.materials.earth.needsUpdate=!0),t&&(n.y=r,n.o=s),this.applyFloor(n)}this.invalidate()}applyFloor(t){if(t.group.position.y=t.floor.elevation+t.y,t.group.visible=t.o>.02,t.shadowMesh.visible=t.o>.98&&!this.lowQuality,Math.abs(t.appliedO-t.o)<.001)return;t.appliedO=t.o;let e=t.materials,n=t.o>.999;for(let r of[e.floor,e.wall,e.frames,e.blinds,e.lamps])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.pattern.opacity=t.o,e.glow.opacity=t.o,e.lines.opacity=t.o,e.glass.opacity=t.o,e.glassWall.opacity=t.o,e.flow.opacity=t.o,e.solarLive.opacity=t.o,e.lamps.opacity=t.o,e.halos.opacity=t.o,e.cones.opacity=t.o,e.screens.opacity=t.o;for(let r of[e.earth,e.earthWell])r.transparent===n&&(r.transparent=!n,r.depthWrite=n,r.needsUpdate=!0),r.opacity=t.o;e.earthLines.opacity=t.o;for(let r of t.screenPics.values()){let s=r.mesh.material;s.transparent=t.o<.999,s.opacity=t.o}}stepFloors(t){let e=!1,n=1-Math.exp(-t/Yg);for(let r of this.floors){let s=r.ty-r.y,o=r.to-r.o;if(Math.abs(s)<.004&&Math.abs(o)<.004){(s!==0||o!==0)&&(r.y=r.ty,r.o=r.to,this.labelsDirty=!0,this.applyFloor(r));continue}r.y+=s*n,r.o+=o*n,e=!0,this.applyFloor(r)}return e}stepOpenings(t){let e=!1,n=1-Math.exp(-t/$g);for(let r of this.floors){let s=!1,o=!1;for(let[a,l]of r.openings){let c=this.openingTargets.get(a)??ea,f=(d,p)=>(d??null)===(p??null)||typeof d=="number"&&typeof p=="number"&&Math.abs(d-p)<.003;if(f(c.open,l.open)&&f(c.open2??0,l.open2??0)&&f(c.tilt,l.tilt)&&f(c.tilt2??0,l.tilt2??0)&&f(c.cover,l.cover)&&!!c.sensed==!!l.sensed&&!!c.unlocked==!!l.unlocked)continue;let u={...l,open2:l.open2??0,tilt2:l.tilt2??0,sensed:c.sensed,unlocked:c.unlocked},h=!1;for(let d of["open","open2","tilt","tilt2"]){let p=c[d]??0,b=l[d]??0,g=p-b;Math.abs(g)<.003?u[d]=p:(u[d]=b+g*n,h=!0)}if(c.cover===null||l.cover===null)u.cover=c.cover;else{let d=c.cover-l.cover;Math.abs(d)<.003?u.cover=c.cover:(u.cover=l.cover+d*n,h=!0)}(u.open!==l.open||u.open2!==(l.open2??0)||u.tilt!==l.tilt||u.tilt2!==(l.tilt2??0)||u.cover!==l.cover||!!u.sensed!=!!l.sensed||!!u.unlocked!=!!l.unlocked)&&(r.openings.set(a,u),s=!0),e||=h,o||=h}if(s){this.buildOpenings(r);let a=performance.now();(!this.lowQuality||!o||a-r.lightAt>=Aw)&&(r.lightAt=a,this.buildGlow(r),this.buildSun(r))}}return e}glowOf(t){if(!t.glow||!t.effect)return t.glow;let e=new j(...t.glow.color),n={h:0,s:0,l:0};e.getHSL(n);let r=(t.x*.37+t.z*.61)%1;return e.setHSL((n.h+this.effectTime*Rw+r)%1,Math.max(.6,n.s),Math.min(.6,Math.max(.45,n.l))),{color:[e.r,e.g,e.b],level:t.glow.level}}buildLamps(t){let e=performance.now(),n=u=>{let h=this.flashes.get(u);if(!h||h<=e)return 0;let d=h-e,p=d>Jc?.5+.5*Math.sin(d/140):d/Jc;return Math.round(p*10)/10},r=this.devices.filter(u=>u.floorId===t.floor.id&&(u.lamp||u.model)),s=u=>u.fanBlades&&u.fanSpeed?this.fanAngle*u.fanSpeed:0,o=this.wallMode+(this.lowQuality?"L":this.highQuality?"H":"M")+r.map(u=>{var h;return`${u.id},${u.lamp??u.model},${u.variant},${u.x},${u.z},${u.y},${u.rotation??0},${u.roll??0},${u.upright?1:0},${u.rise??0},${(h=u.size)==null?void 0:h.join("/")},${u.base??0},${u.pack??""},${u.mirror?1:0},${u.fanStatic?1:0},${s(u).toFixed(3)},${u.ownLook?1:0}`}).join(";"),a=r.map(u=>this.glowOf(u)),l=r.map((u,h)=>`${n(u.id)},${a[h]?`${a[h].level.toFixed(3)},${a[h].color.map(d=>d.toFixed(3)).join("/")}`:"off"}`).join(";");if(o!==t.lampShapeSig||!t.lampMesh.geometry.getAttribute("position")){t.lampShapeSig=o,t.lampColorSig="";let u=new ie,h=[],d=[],p=new Map,b=t.floor.height;for(let g of r){let m=g.lamp==="strip"?(g.base??b)>Math.min(t.floor.cut_height,b):g.lamp?Jg.has(g.lamp)&&(g.top??b)>Math.min(t.floor.cut_height,b):g.model==="camera_ceiling";if(!g.lamp&&!g.model||m&&this.wallMode==="cut")continue;let x=u.count,v=g.pack?_e(g.pack):void 0,[y,M,w]=g.size??[.3,.3,.3];g.model?g.ownLook||bm(u,g.model,g.x,g.model==="camera_ceiling"?b:g.y,g.z,g.rotation??0):v?Lc(u,v,{x:g.x,z:g.z,rotation:g.rotation??0,w:y,d:M,h:w,mirror:g.mirror},g.base??0,65280):Ff(u,{...g,lamp:g.lamp,spinAngle:s(g)},g.top??b,65280),p.set(g.furnitureId??g.id,{start:x,end:u.count}),g.pickable!==!1&&h.push({id:g.id,start:x,end:u.count}),g.furnitureId&&d.push({id:g.furnitureId,start:x,end:u.count})}t.lampTris=h,t.lampFurnTris=d,t.lampRanges=p,t.lampShade=Yp(u.c),t.lampMesh.geometry.dispose(),t.lampMesh.geometry=u.geometry(),t.lampMesh.visible=u.count>0}if(l===t.lampColorSig)return;t.lampColorSig=l;let c=t.lampMesh.geometry.getAttribute("color"),f=c.array;r.forEach((u,h)=>{let d=t.lampRanges.get(u.furnitureId??u.id);if(!d)return;let p=a[h],b=p?.55+.45*p.level:0,g=p?new j(...p.color.map(v=>Math.min(1,v*b))):new j(Tw),m=n(u.id);m>0&&g.lerp(new j(1,1,1),.7*m);let x=new j(g.getHex());qp(f,t.lampShade,d,[x.r,x.g,x.b])}),c.needsUpdate=!0,this.buildHalos(t)}buildSun(t){var l,c,f,u,h;let e=((l=this.building)==null?void 0:l.settings.sun_patches)===!1?null:this.sun,n=(((c=this.building)==null?void 0:c.settings.north)??0)*ae,r=((f=this.weather)==null?void 0:f.cloud)??0,s=Qg(t.floor,t.geo.openRooms),o=e?`${e.elevation.toFixed(1)},${e.azimuth.toFixed(1)},${n},${r.toFixed(2)},${[...t.openings.values()].map(d=>(d.cover??0).toFixed(2)).join(",")},${s.join(".")},${this.roofWindowsKey},${JSON.stringify(((h=(u=this.building)==null?void 0:u.settings.roof)==null?void 0:h.windows)??[])}`:"";if(o===t.sunSig)return;t.sunSig=o;let a=new ie;if(e&&e.elevation>2&&r<.97){let d=Math.min(1,e.elevation/12)*(1-.8*r),p=e.elevation*ae,b=e.azimuth*ae,g=[Math.sin(n+b),-Math.cos(n+b)],m=1/Math.tan(p),x=new Set;for(let v of t.geo.openings){if(v.opening.type!=="window"||!v.exterior||!(v.width>.05))continue;let y=[-v.toRoom[0],-v.toRoom[1]],M=y[0]*g[0]+y[1]*g[1];if(M<.05)continue;let w=t.openings.get(v.opening.id),A=Math.max(0,v.sill),_=v.top-((w==null?void 0:w.cover)??0)*(v.top-A);if(_-A<.05)continue;let R=[v.start,v.axis,v.width,A,_].join();if(x.has(R))continue;x.add(R);let S=V=>Math.min(7,V*m),E=(V,H)=>{let J=S(H);return[v.start[0]+v.axis[0]*V+v.toRoom[0]*v.faceRoom-g[0]*J,.02,v.start[1]+v.axis[1]*V+v.toRoom[1]*v.faceRoom-g[1]*J]},I=.085*d*Math.min(1,M*1.5),O=new j(1*I,.72*I,.36*I),C=O.clone().multiplyScalar(.5),L=S(_)-S(A),T=(V,H)=>O.clone().lerp(C,(H-A)/(_-A)).multiplyScalar(Ko(V,v.width)*Ko(S(H)-S(A),L)),P=t.floor.rooms.findIndex(V=>V.id===v.opening.room_id);if(P<0||t.floor.rooms[P].points.length<3)continue;let N=s[P],F=t.floor.rooms.filter((V,H)=>s[H]===N&&V.points.length>=3).map(V=>V.points),z=Math.max(2,Math.ceil(Math.min(7,_*m)/.25)),B=Math.max(2,Math.ceil(v.width/.3));for(let V=0;V<z;V++){let H=A+(_-A)*V/z,J=A+(_-A)*(V+1)/z;for(let tt=0;tt<B;tt++){let ot=v.width*tt/B,X=v.width*(tt+1)/B,q=E((ot+X)/2,(H+J)/2);if(!F.some(gt=>qt([q[0],q[2]],gt)))continue;let Y=E(ot,H),st=E(X,J),rt=T(ot,H),lt=T(X,J);a.tri(Y,E(X,H),st,rt,T(X,H),lt),a.tri(Y,st,E(ot,J),rt,lt,T(ot,J))}}}this.pushRoofSun(t,a,s,g,p,d)}t.sunMesh.geometry.dispose(),t.sunMesh.geometry=a.geometry(),t.sunMesh.visible=a.count>0&&!this.roomTint}pushRoofSun(t,e,n,r,s,o){var u,h;let a=this.building,l=((u=a==null?void 0:a.settings.roof)==null?void 0:u.windows)??[];if(!a||!l.length)return;let c=new Map(Or(a).map(d=>[d.key,d])),f=[r[0]*Math.cos(s),Math.sin(s),r[1]*Math.cos(s)];for(let d of l){let p=c.get(d.face),b=Nc(a,p,d);if(!p||!b||b.floor.id!==t.floor.id)continue;let g=p.n[0]*f[0]+p.n[1]*f[1]+p.n[2]*f[2],[m,x,v,y]=b.corners,M=Math.min(1,((h=this.roofWindows.get(d.id))==null?void 0:h.cover)??0);if(M>.95)continue;let w=(T,P,N)=>[T[0]+(P[0]-T[0])*N,T[1]+(P[1]-T[1])*N,T[2]+(P[2]-T[2])*N],A=w(y,m,M),_=w(v,x,M),R=t.floor.rooms.findIndex(T=>T.id===b.roomId);if(R<0)continue;let S=t.floor.rooms.filter((T,P)=>n[P]===n[R]&&T.points.length>=3).map(T=>T.points),E=(T,P)=>{let F=(B,V)=>w(w(T[0],T[1],B/6),w(T[3],T[2],B/6),V/6),z=(B,V)=>P.clone().multiplyScalar(Ko(B,6,1)*Ko(V,6,1));for(let B=0;B<6;B++)for(let V=0;V<6;V++){let H=F(B+.5,V+.5);S.some(J=>qt([H[0],H[2]],J))&&(e.tri(F(B,V),F(B+1,V),F(B+1,V+1),z(B,V),z(B+1,V),z(B+1,V+1)),e.tri(F(B,V),F(B+1,V+1),F(B,V+1),z(B,V),z(B+1,V+1),z(B,V+1)))}},I=T=>[T[0],.019,T[2]],O=.04*o;if(E([I(m),I(x),I(_),I(A)],new j(.75*O,.85*O,1*O)),g<.05)continue;let C=T=>{let P=Math.min(7,(T[1]-t.floor.elevation)/Math.tan(s));return[T[0]-r[0]*P,.02,T[2]-r[1]*P]},L=.1*o*Math.min(1,g*1.5);E([C(m),C(x),C(_),C(A)],new j(1*L,.72*L,.36*L))}}buildHalos(t){if(this.lowQuality){t.haloMesh.visible=!1,t.coneMesh.visible=!1;return}let e=t.floor.height,n=[],r=[],s=new ie,o=[];for(let l of this.devices){if(l.model&&l.floorId===t.floor.id){if(l.model==="camera_ceiling"&&this.wallMode==="cut"||l.cone===!1)continue;let x=(l.rotation??0)*ae,v=[-Math.sin(x),Math.cos(x)],y=l.model==="camera_ceiling",M=l.reach??(y?3:4.5),w=(l.fov??(y?360:90))*ae/2,A=l.motion?new j(.9,.12,.16):new j(.04,.22,.28),_=new j(0,0,0),R=Math.max(4,Math.round(w/.15)),S=.015,E=t.geo.walls2d,I=F=>{let z=F.b[0]-F.a[0],B=F.b[1]-F.a[1],V=z*z+B*B||1,H=Math.max(0,Math.min(1,((l.x-F.a[0])*z+(l.z-F.a[1])*B)/V));return Math.hypot(l.x-(F.a[0]+z*H),l.z-(F.a[1]+B*H))},O=null;for(let F of E)I(F)<.45&&(!O||I(F)<I(O))&&(O=F);let C=F=>{let z=v[0]*Math.cos(F)-v[1]*Math.sin(F),B=v[1]*Math.cos(F)+v[0]*Math.sin(F),V=M;for(let H of E){let J=H.b[0]-H.a[0],tt=H.b[1]-H.a[1],ot=z*tt-B*J;if(Math.abs(ot)<1e-9)continue;let X=((H.a[0]-l.x)*tt-(H.a[1]-l.z)*J)/ot,q=((H.a[0]-l.x)*B-(H.a[1]-l.z)*z)/ot;H===O&&X<=.45||X>.02&&X<V&&q>=0&&q<=1&&(V=X)}return V},L=(F,z)=>S+wr(t.floor,{x:F,z}),T=F=>{let z=C(F),B=l.x+(v[0]*Math.cos(F)-v[1]*Math.sin(F))*z,V=l.z+(v[1]*Math.cos(F)+v[0]*Math.sin(F))*z;return[B,L(B,V),V]},P=[l.x,Math.max(L(l.x,l.z),y?-1/0:L(l.x+v[0]*.3,l.z+v[1]*.3)),l.z],N=s.count;for(let F=0;F<R;F++)s.tri(P,T(-w+2*w*(F+1)/R),T(-w+2*w*F/R),A,_,_);o.push({id:l.id,start:N,end:s.count});continue}let c=this.glowOf(l);if(l.floorId!==t.floor.id||!l.lamp||!c||Jg.has(l.lamp)&&this.wallMode==="cut"&&(l.top??e)>Math.min(t.floor.cut_height,e))continue;let f=l.top??e,[u,h,d]=l.size??jc[l.lamp],p=l.base??0,b=(l.rotation??0)*ae,g={ceiling:f-.07,ceiling_fan:f-.2,downlight:f-.03,spot:f-d,panel:f-.03,pendant:Math.max(.4,f-d)+.08,floor:p+d-.15,uplight:p+d,table:p+d-.09,wall:p+d/2,strip:p+Math.max(.02,d)-.01,bollard:p+d-.08,garden:p+d-.03}[l.lamp],m=(x,v,y=1)=>{n.push(x,g,v),r.push(...c.color.map(M=>M*c.level*.7*y))};if(l.lamp==="strip")for(let x of[-.4,-.13,.13,.4])if(l.upright)n.push(l.x,p+u*(.5+x),l.z),r.push(...c.color.map(v=>v*c.level*.7*.6));else if(l.rise){let v=l.rise*ae;n.push(l.x+Math.cos(b)*u*x*Math.cos(v),g+Math.sin(v)*u*x,l.z+Math.sin(b)*u*x*Math.cos(v)),r.push(...c.color.map(y=>y*c.level*.7*.6))}else m(l.x+Math.cos(b)*u*x,l.z+Math.sin(b)*u*x,.6);else if(l.lamp==="wall"){let x=this.packLightAt(l);x?(n.push(...x),r.push(...c.color.map(v=>v*c.level*.7))):m(l.x-Math.sin(b)*(h/2+.05),l.z+Math.cos(b)*(h/2+.05))}else m(l.x,l.z);if(this.highQuality&&(l.lamp==="downlight"||l.lamp==="spot")){let x=new j(...c.color.map(A=>A*.09*c.level)),v=new j(0,0,0),y=Math.max(.03,u/2),M=.45+.35*c.level,w=16;for(let A=0;A<w;A++){let _=A/w*Math.PI*2,R=(A+1)/w*Math.PI*2,S=[l.x+Math.cos(_)*y,g,l.z+Math.sin(_)*y],E=[l.x+Math.cos(R)*y,g,l.z+Math.sin(R)*y],I=[l.x+Math.cos(_)*M,.02,l.z+Math.sin(_)*M],O=[l.x+Math.cos(R)*M,.02,l.z+Math.sin(R)*M];s.tri(S,I,O,x,v,v),s.tri(S,O,E,x,v,x)}}}let a=new Gt;a.setAttribute("position",new Ft(n,3)),a.setAttribute("color",new Ft(r,3)),t.haloMesh.geometry.dispose(),t.haloMesh.geometry=a,t.haloMesh.visible=n.length>0,t.coneMesh.geometry.dispose(),t.coneMesh.geometry=s.geometry(),t.coneMesh.visible=s.count>0,t.coneTris=o}buildScreens(t){let e=Ef(t.floor,this.parked).furniture.filter(o=>this.screens.has(o.id)),r=(Qo.value?jo.value.toArray().map(o=>Math.round(o*255)).join(","):"")+"|"+e.map(o=>`${o.id}:${o.x},${o.z},${o.rotation},${o.w},${o.d},${o.h},${o.mount_y??""},${o.mirror?1:0}:${JSON.stringify(this.screens.get(o.id))}`).join(";");if(r===t.screenSig&&t.screenMesh.geometry.getAttribute("position"))return this.updateScreenPictures(t,e);t.screenSig=r;let s=new ie;for(let o of e){let a=this.screens.get(o.id),l=o,c=l.rotation*ae,f=Math.cos(c),u=Math.sin(c),h=(w,A,_)=>[l.x+w*f-_*u,A,l.z+w*u+_*f];if(a.apRing){let w=pm(l),A=en(t.floor,l)+w.y,_=new j(...a.apRing),R=_.clone().multiplyScalar(.45),S=new j(0,0,0),E=(C,L)=>w.wall?h(Math.cos(C)*L,A+Math.sin(C)*L,w.z):h(Math.cos(C)*L,A,Math.sin(C)*L),I=[w.r*.52,w.r*.7,w.r*1.15],O=28;for(let C=0;C<O;C++){let L=C/O*Math.PI*2,T=(C+1)/O*Math.PI*2;s.tri(E(L,I[0]),E(L,I[1]),E(T,I[1]),_),s.tri(E(L,I[0]),E(T,I[1]),E(T,I[0]),_),s.tri(E(L,I[1]),E(L,I[2]),E(T,I[2]),R,S,S),s.tri(E(L,I[1]),E(T,I[2]),E(T,I[1]),R,S,R)}continue}if(a.keys){let w=en(t.floor,l)-Ti(l),A=l.mirror?-1:1,_=new j(0,0,0),R=a.switchRing;if(R){let S=Math.max(.05,l.w),E=Math.max(.05,l.d),I=Math.max(.005,l.h),O=Ti(l)+w,C=-E/2+.002,L=new j(...R.color.map(z=>Math.min(1,z*(.3+.45*R.level)))),T=.02+.02*R.level,P=.004,N=[h(-S/2-P,O-P,C),h(S/2+P,O-P,C),h(S/2+P,O+I+P,C),h(-S/2-P,O+I+P,C)],F=[h(-S/2-T,O-T,C),h(S/2+T,O-T,C),h(S/2+T,O+I+T,C),h(-S/2-T,O+I+T,C)];for(let z=0;z<4;z++){let B=(z+1)%4;s.tri(N[z],F[z],F[B],L,_,_),s.tri(N[z],F[B],N[B],L,_,L)}}fm(l).forEach((S,E)=>{let I=a.keys[E];if(!I)return;let O=new j(...I),C=O.clone().multiplyScalar(.45),L=S.x*A,T=S.y+w,P=S.r,N=P*2.6,F=[h(L-P,T-P,S.z),h(L+P,T-P,S.z),h(L+P,T+P,S.z),h(L-P,T+P,S.z)],z=[h(L-N,T-N,S.z+.001),h(L+N,T-N,S.z+.001),h(L+N,T+N,S.z+.001),h(L-N,T+N,S.z+.001)];s.tri(F[0],F[1],F[2],O),s.tri(F[0],F[2],F[3],O);for(let B=0;B<4;B++){let V=(B+1)%4;s.tri(F[B],z[B],z[V],C,_,_),s.tri(F[B],z[V],F[V],C,_,C)}});continue}if(a.faces){let w=Math.max(.05,l.w)*(l.mirror?-1:1),A=Math.max(.05,l.d),_=Math.max(.005,l.h),R=en(t.floor,l);for(let S of a.faces){if(S.part==="lights"){let B=_e(l.type),V=H=>["#e8f4ff","#ff3b4f"].includes(H.color.toLowerCase());if(B&&B.parts.some(V)){let H=new j(...S.color.map(J=>Math.min(1,J*(.4+.6*S.level))));ko(s,B,l,R,H.getHex(),V)}continue}if(S.part==="cabin"){let B=_e(l.type),V=H=>H.color.toLowerCase()==="#13283a"||H.color==="glass";if(B&&B.parts.some(V)){let H=new j(...S.color.map(J=>Math.min(1,J*(.3+.5*S.level))));ko(s,B,l,R,H.getHex(),V);continue}}if(S.part==="burners"&&_e(l.type)){let B=_e(l.type),V=new j(...S.color.map(H=>Math.min(1,H*(.25+.6*S.level))));ko(s,B,l,R,V.getHex(),Zp);continue}if(S.part==="burners"){let B=new j(...S.color.map(H=>Math.min(1,H*(.25+.6*S.level)))),V=R+_+.008;for(let[H,J,tt]of[[-.14,-.13,.09],[.14,-.13,.07],[-.14,.13,.07],[.14,.13,.09]]){let ot=H*Math.abs(w)/.6,X=J*A/.62,q=14;for(let Y=0;Y<q;Y++){let st=Y/q*Math.PI*2,rt=(Y+1)/q*Math.PI*2;s.tri(h(ot,V,X),h(ot+Math.cos(st)*tt,V,X+Math.sin(st)*tt),h(ot+Math.cos(rt)*tt,V,X+Math.sin(rt)*tt),B)}}continue}if(S.part==="band"||S.part==="cabin"){let B=S.part==="cabin",V=R+_*(B?.6:.42),H=B?R+_*.86:V+.07,J=new j(...S.color.map(q=>Math.min(1,q*(.3+.45*S.level)))),tt=Math.abs(w)/2+(B?.012:.02),ot=A/2+(B?.012:.02),X=[[-tt,-ot],[tt,-ot],[tt,ot],[-tt,ot]];for(let q=0;q<4;q++){let Y=X[q],st=X[(q+1)%4],rt=h(Y[0]*Math.sign(w),V,Y[1]),lt=h(st[0]*Math.sign(w),V,st[1]),gt=h(st[0]*Math.sign(w),H,st[1]),dt=h(Y[0]*Math.sign(w),H,Y[1]);s.tri(rt,lt,gt,J),s.tri(rt,gt,dt,J)}continue}if(S.part==="strata"){let B=S.top??S.color,V=.22+.4*S.level,H=new j(...S.color.map(st=>Math.min(1,st*V))),J=new j(...B.map(st=>Math.min(1,st*V))),tt=R+_*.06,ot=R+_*.94,X=Math.abs(w)/2+.012,q=A/2+.012,Y=20;for(let st=0;st<Y;st++){let rt=st/Y*Math.PI*2,lt=(st+1)/Y*Math.PI*2,gt=[Math.cos(rt)*X,Math.sin(rt)*q],dt=[Math.cos(lt)*X,Math.sin(lt)*q];s.tri(h(gt[0],tt,gt[1]),h(dt[0],tt,dt[1]),h(dt[0],ot,dt[1]),H,H,J),s.tri(h(gt[0],tt,gt[1]),h(dt[0],ot,dt[1]),h(gt[0],ot,gt[1]),H,J,J)}continue}if(S.part==="drum"){let B=Math.abs(w),V=Math.min(B*.36,(_-.2)*.42),H=R+(_-.14)/2+.04,J=A/2-.006,tt=new j(...S.color.map(st=>Math.min(1,st*(.35+.65*S.level)))),ot=tt.clone().multiplyScalar(.12),X=new j(0,0,0),q=28,Y=(st,rt)=>h(Math.cos(st)*rt,H+Math.sin(st)*rt,J);for(let st=0;st<q;st++){let rt=st/q*Math.PI*2,lt=(st+1)/q*Math.PI*2;s.tri(h(0,H,J),Y(rt,V*.78),Y(lt,V*.78),ot),s.tri(Y(rt,V*.78),Y(rt,V),Y(lt,V),tt),s.tri(Y(rt,V*.78),Y(lt,V),Y(lt,V*.78),tt),s.tri(Y(rt,V),Y(rt,V*1.18),Y(lt,V*1.18),tt,X,X),s.tri(Y(rt,V),Y(lt,V*1.18),Y(lt,V),tt,X,tt)}continue}if(S.part==="beacon"){let B=new j(...S.color.map(lt=>Math.min(1,lt*(.25+.45*S.level)))),V=new j(0,0,0),H=R+_+.01,J=.6+.6*S.level,tt=Math.min(Math.abs(w),A)*.38;for(let[lt,gt]of[[tt,0],[0,tt]]){let dt=h(-lt,H,-gt),xt=h(lt,H,gt),bt=h(lt*.4,H+J,gt*.4),Ut=h(-lt*.4,H+J,-gt*.4);s.tri(dt,xt,bt,B,B,V),s.tri(dt,bt,Ut,B,V,V)}let ot=en(t.floor,{...l,mount_y:0})+.012,X=Math.abs(w)/2+.03,q=A/2+.03,Y=.22+.18*S.level,st=(lt,gt,dt)=>h(lt*(X+dt),ot,gt*(q+dt)),rt=[[-1,-1],[1,-1],[1,1],[-1,1]];for(let lt=0;lt<4;lt++){let[gt,dt]=rt[lt],[xt,bt]=rt[(lt+1)%4];s.tri(st(gt,dt,0),st(xt,bt,0),st(xt,bt,Y),B,B,V),s.tri(st(gt,dt,0),st(xt,bt,Y),st(gt,dt,Y),B,V,V)}continue}let E=S.part==="right"?.03:-Math.abs(w)/2+.03,I=S.part==="left"?-.03:Math.abs(w)/2-.03,O=R+(S.part==="bottom"?_*.45:_)+.006,C=new j(...S.color.map(B=>Math.min(1,B*(.35+.65*S.level)))),L=new j(0,0,0),T=(B,V,H=O)=>h(B*Math.sign(w),H,V),P=[T(E,-A/2+.03),T(I,-A/2+.03),T(I,A/2-.03),T(E,A/2-.03)];s.tri(P[0],P[2],P[1],C),s.tri(P[0],P[3],P[2],C);let N=S.part==="lid"?.025+.02*S.level:.12+.1*S.level,F=C.clone().multiplyScalar(S.part==="lid"?.7:.5),z=[T(E-N,-A/2-N,O+.004),T(I+N,-A/2-N,O+.004),T(I+N,A/2+N,O+.004),T(E-N,A/2+N,O+.004)];for(let B=0;B<4;B++){let V=(B+1)%4;s.tri(P[B],z[V],z[B],F,L,L),s.tri(P[B],P[V],z[V],F,F,L)}}continue}let d=_e(l.type);if(d&&!d.light&&a.ring&&d.parts.some(w=>w.glow)){let w=new j(...a.color.map(A=>Math.min(1,A*(.45+.55*a.level))));ko(s,d,l,en(t.floor,l),w.getHex())}let p=mf(l,t.floor);if(!p)continue;let b=new j(...a.color.map(w=>Math.min(1,w*(.35+.65*a.level)))),g=new j(0,0,0),m=p.z+.004;if(s.tri(h(p.x0,p.y0,m),h(p.x1,p.y0,m),h(p.x1,p.y1,m),b),s.tri(h(p.x0,p.y0,m),h(p.x1,p.y1,m),h(p.x0,p.y1,m),b),a.dots&&a.dots.n>0){let{n:w,lit:A,color:_}=a.dots,R=new j(..._),S=new j(..._.map(O=>O*.12)),E=Math.min(.013,(p.x1-p.x0)/(w*1.5)),I=p.y1+.01;for(let O=0;O<w;O++){let C=p.x0+(O+.5)*(p.x1-p.x0)/w,L=O<A?R:S;s.tri(h(C-E/2,I,m),h(C+E/2,I,m),h(C+E/2,I+E,m),L),s.tri(h(C-E/2,I,m),h(C+E/2,I+E,m),h(C-E/2,I+E,m),L)}}if(a.plain)continue;let x=.18+.12*a.level,v=b.clone().multiplyScalar(.5),y=[h(p.x0,p.y0,m),h(p.x1,p.y0,m),h(p.x1,p.y1,m),h(p.x0,p.y1,m)],M=[h(p.x0-x,p.y0-x,m+.01),h(p.x1+x,p.y0-x,m+.01),h(p.x1+x,p.y1+x,m+.01),h(p.x0-x,p.y1+x,m+.01)];for(let w=0;w<4;w++){let A=(w+1)%4;s.tri(y[w],M[w],M[A],v,g,g),s.tri(y[w],M[A],y[A],v,g,v)}}t.screenMesh.geometry.dispose(),t.screenMesh.geometry=s.geometry(),t.screenMesh.visible=s.count>0,this.updateScreenPictures(t,e)}updateScreenPictures(t,e){var r;let n=new Map(e.map(s=>[s.id,s]).filter(([s])=>{var o;return!!((o=this.screens.get(s))!=null&&o.picture)}));for(let[s,o]of t.screenPics)n.has(s)&&this.screens.get(s).picture===o.url||(t.group.remove(o.mesh),o.mesh.geometry.dispose(),o.mesh.material.dispose(),(r=o.texture)==null||r.dispose(),t.screenPics.delete(s));for(let[s,o]of n){let a=this.screens.get(s),l=mf(o,t.floor);if(!l)continue;let c=t.screenPics.get(s);if(!c){let f=new Ct(new Hn(1,1),new Yt({color:16777215,transparent:!0}));f.visible=!1,f.renderOrder=5,c={url:a.picture,mesh:f,texture:null},t.screenPics.set(s,c),t.group.add(f);let u=c;new xr().load(a.picture,h=>{if(t.screenPics.get(s)!==u){h.dispose();return}h.colorSpace=Ue,u.texture=h;let d=u.mesh.material;d.map=h,d.needsUpdate=!0,this.placeScreenPicture(u.mesh,o,l,h),u.mesh.visible=!0,this.invalidate()},void 0,()=>{})}c.mesh.material.color.setScalar(.45+.55*a.level),c.texture&&this.placeScreenPicture(c.mesh,o,l,c.texture)}}placeScreenPicture(t,e,n,r){let s=r.image,o=s!=null&&s.width&&(s!=null&&s.height)?s.width/s.height:16/9,{w:a,h:l}=mm(n.x1-n.x0,n.y1-n.y0,o),c=e.rotation*ae,f=(n.x0+n.x1)/2,u=n.z+.008;t.scale.set(a,l,1),t.rotation.set(0,-c,0),t.position.set(e.x+f*Math.cos(c)-u*Math.sin(c),(n.y0+n.y1)/2,e.z+f*Math.sin(c)+u*Math.cos(c))}flowSeconds(){return(performance.now()-this.flowStart)/1e3}buildFlows(t){var f;this.buildPipeLines(t);let e=this.flows.filter(u=>u.floorId===t.floor.id&&!u.pipe).map(na).join(";"),n=[],r=[],s=[],o=[],a=[];for(let u of this.flows){if(u.floorId!==t.floor.id||u.pipe)continue;let h=this.flowPhase.get(na(u))??{speed:Df(u.power),offset:0},d=u.power>.5?Math.min(1,.5+u.power/2500):.22,p=u.color.map(v=>v*d),b=Math.hypot(u.b[0]-u.a[0],u.b[1]-u.a[1],u.b[2]-u.a[2]);if(b<1e-4)continue;let g=[(u.b[0]-u.a[0])/b,(u.b[1]-u.a[1])/b,(u.b[2]-u.a[2])/b],m=[];if(Math.abs(g[1])<.5){let v=Math.hypot(g[0],g[2])||1;m.push([-g[2]/v,0,g[0]/v])}else m.push([1,0,0],[0,0,1]);let x=this.lowQuality?[[Kg*1.4,1]]:[[ww,.25],[Kg,1]];for(let[v,y]of x)for(let M of m){let w=v*(u.width??1)/2,A=(R,S)=>[R[0]+M[0]*w*S,R[1]+M[1]*w*S,R[2]+M[2]*w*S],_=[[A(u.a,-1),u.dist,0],[A(u.b,-1),u.dist+b,0],[A(u.b,1),u.dist+b,1],[A(u.a,1),u.dist,1]];for(let R of[0,1,2,0,2,3]){let[S,E,I]=_[R];n.push(S[0],S[1],S[2]),r.push(p[0]*y,p[1]*y,p[2]*y),s.push(E,I),o.push(h.speed),a.push(h.offset)}}}let l=t.flowMesh.geometry;if(e===t.flowLayout&&((f=l.getAttribute("position"))==null?void 0:f.count)===n.length/3){for(let[u,h]of[["color",r],["flowSpeed",o],["flowOffset",a]]){let d=l.getAttribute(u);d.array.set(h),d.needsUpdate=!0}t.flowMesh.visible=n.length>0;return}t.flowLayout=e;let c=new Gt;c.setAttribute("position",new Ft(n,3)),c.setAttribute("color",new Ft(r,3)),c.setAttribute("uv",new Ft(s,2)),c.setAttribute("flowSpeed",new Ft(o,1)),c.setAttribute("flowOffset",new Ft(a,1)),t.flowMesh.geometry.dispose(),t.flowMesh.geometry=c,t.flowMesh.visible=n.length>0}buildPipeLines(t){let e=this.flows.filter(r=>r.floorId===t.floor.id&&r.pipe),n=JSON.stringify(e.map(r=>{var s;return[r.a,r.b,r.dist,r.color,r.width,r.house,r.floor,Math.round(r.power/50),((s=this.flowPhase.get(na(r)))==null?void 0:s.speed)??0]}));if(n!==t.pipeLineSig){t.pipeLineSig=n;for(let r of["all","house","floor"]){let s=[],o=[],a=[],l=[],c=[];for(let h of e){if((h.house?"house":h.floor?"floor":"all")!==r)continue;let d=Math.hypot(h.b[0]-h.a[0],h.b[1]-h.a[1],h.b[2]-h.a[2]);if(d<1e-4)continue;let p=this.flowPhase.get(na(h))??{speed:Df(h.power),offset:0},b=[(h.b[0]-h.a[0])/d,(h.b[1]-h.a[1])/d,(h.b[2]-h.a[2])/d],g=[];if(Math.abs(b[1])<.5){let y=Math.hypot(b[0],b[2])||1;g.push([-b[2]/y,0,b[0]/y])}else g.push([1,0,0],[0,0,1]);let m=Mw*(h.width??1),x=h.power>.5?1:.62,v=[[m+Sw*2,[.02,.025,.05],.78,2],[m,h.color.map(y=>y*x),1,0]];for(let[y,M,w,A]of v)for(let _ of g){let R=y/2,S=A===0?.002:0,E=(O,C)=>[O[0]+_[0]*R*C,O[1]+_[1]*R*C+S,O[2]+_[2]*R*C],I=[[E(h.a,-1),h.dist,A],[E(h.b,-1),h.dist+d,A],[E(h.b,1),h.dist+d,A+1],[E(h.a,1),h.dist,A+1]];for(let O of[0,1,2,0,2,3]){let[C,L,T]=I[O];s.push(C[0],C[1],C[2]),o.push(M[0],M[1],M[2],w),a.push(L,T),l.push(p.speed),c.push(p.offset)}}}let f=r==="house"?t.pipeHouseMesh:r==="floor"?t.pipeFloorMesh:t.pipeLineMesh,u=new Gt;u.setAttribute("position",new Ft(s,3)),u.setAttribute("color",new Ft(o,4)),u.setAttribute("uv",new Ft(a,2)),u.setAttribute("flowSpeed",new Ft(l,1)),u.setAttribute("flowOffset",new Ft(c,1)),f.geometry.dispose(),f.geometry=u,f.userData.filled=s.length>0}this.applyHouseLines(t)}}applyHouseLines(t){for(let e of t?[t]:this.floors)e.pipeLineMesh.visible=!!e.pipeLineMesh.userData.filled,e.pipeHouseMesh.visible=!!e.pipeHouseMesh.userData.filled&&this.floorId===null,e.pipeFloorMesh.visible=!!e.pipeFloorMesh.userData.filled&&this.floorId!==null}buildOpenings(t){let e=Lg(t.geo.openings,t.openings,Math.min(t.floor.cut_height,t.floor.height));t.frameTris=e.frameTris,t.glassTris=e.glassTris,t.blindTris=e.blindTris;for(let[n,r]of[[t.framesMesh,e.frames],[t.glassMesh,e.glass],[t.blindsMesh,e.blinds]])n.geometry.dispose(),n.geometry=r,n.visible=r.getAttribute("position").count>0}activeFloors(){return this.floors.filter(t=>t.to>.99)}applyHighlight(){var t;for(let e of this.floors){let n=e.geo.floor.getAttribute("color"),r=e.geo.roomTris.map(s=>{var o,a;return`${((a=(o=this.roomTint)==null?void 0:o.get(s.roomId))==null?void 0:a.join(","))??""}${s.roomId===this.roomId?"*":""}`}).join(";");if(this.highlighted.get(n)!==r){this.highlighted.set(n,r);for(let s of e.geo.roomTris){let o=new j(s.color),a=(t=this.roomTint)==null?void 0:t.get(s.roomId);a&&o.lerp(new j(...a).multiplyScalar(.6),.9),s.roomId===this.roomId&&o.lerp(Pw,a?.3:.75);for(let l=s.start*3;l<s.end*3;l++)n.setXYZ(l,o.r,o.g,o.b)}n.needsUpdate=!0}}for(let e of this.labels.querySelectorAll(".fp3d-pin"))e.classList.toggle("fp3d-pin-active",!!e.dataset.room&&e.dataset.room===this.roomId);this.invalidate()}fit(t){var u;let e=new xn;for(let h of this.activeFloors()){let d=h.floor.elevation+h.ty;for(let p of h.floor.rooms)for(let[b,g]of p.points)e.expandByPoint(new W(b,d,g)),e.expandByPoint(new W(b,d+h.floor.height,g))}e.isEmpty()&&e.set(new W(-4,0,-4),new W(4,2.5,4)),this.placeGround(),this.weatherBox={x0:e.min.x-6,x1:e.max.x+6,z0:e.min.z-6,z1:e.max.z+6,y0:e.min.y,y1:e.max.y+6},this.applyWeather(),this.placeSky();let n=e.getCenter(new W),r=e.getSize(new W),s=Math.max(8,this.distanceFor(r)*(this.camera.aspect<1?1.16:1.02));this.controls.maxRadius=Math.max(40,s*3),n.y=e.min.y+r.y*(this.houseView?.45:.3),(this.floorId===null||this.floors.length===1)&&(this.houseRadius=s);let o=this.floorId===null,a=o?null:((u=this.floorMap.get(this.floorId))==null?void 0:u.floor.start_view)??null,l=a??this.startView,c=!!l&&(o||!!a);l&&c&&(this.controls.maxRadius=Math.max(this.controls.maxRadius,l.radius*1.5));let f=c?l.target:null;if(f&&n.set(f.x,f.y+(a?this.floorBase(this.floorId):0),f.z),this.keepNext){this.keepNext=!1;let h=this.controls.view;this.controls.flyTo({target:new W(h.target.x,n.y,h.target.z),radius:h.radius,phi:h.phi,theta:h.theta},t);return}this.controls.flyTo({target:n,radius:c?l.radius:s,phi:l?l.phi:.85,theta:l?l.theta:-.6},t,!!l)}placeGround(){let t=new xn,e=1/0;for(let o of this.floors){e=Math.min(e,o.floor.elevation+Math.min(0,o.ty));for(let a of o.floor.rooms)for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c));for(let a of o.floor.outdoor??[])for(let[l,c]of a.points)t.expandByPoint(new W(l,0,c))}if(this.ground.visible=!t.isEmpty()&&!this.lowQuality&&this.theme!=="day",t.isEmpty())return;if(this.ground.visible&&!this.groundTexture){this.groundTexture=kw();let o=this.ground.material;o.map=this.groundTexture,o.needsUpdate=!0}let n=t.getCenter(new W),r=t.getSize(new W),s=Of*Math.ceil((Math.max(r.x,r.z)+16)/Of);this.ground.scale.set(s,s,1),this.ground.position.set(n.x,e-nn-.02,n.z)}distanceFor(t){let e=this.camera.fov*ae,n=2*Math.atan(Math.tan(e/2)*this.camera.aspect);return t.length()/2/Math.sin(Math.min(e,n)/2)}rayAt(t,e){let n=this.renderer.domElement.getBoundingClientRect(),r=new po;return r.setFromCamera(new te(t/n.width*2-1,-(e/n.height)*2+1),this.camera),r}pick(t,e,n=!0){var l,c,f;let r=this.rayAt(t,e),s=this.activeFloors(),o=s.flatMap(u=>[u.lampMesh,u.coneMesh,u.framesMesh,u.glassMesh,u.blindsMesh,u.fridgeMesh,u.wallMesh,u.floorMesh].filter(h=>h.visible)),a=(u,h)=>{var d;return(d=u.find(p=>h>=p.start&&h<p.end))==null?void 0:d.id};for(let u of r.intersectObjects(o,!1)){if(u.faceIndex==null)continue;let h=u.faceIndex,d=s.find(p=>p.group===u.object.parent);if(u.object===d.fridgeMesh){let p=a(d.gateTris,h);if(p&&n)return{entity:p}}else if(u.object===d.lampMesh||u.object===d.coneMesh){let p=a(u.object===d.lampMesh?d.lampTris:d.coneTris,h);if(p&&n)return{entity:p}}else if(u.object===d.framesMesh||u.object===d.blindsMesh||u.object===d.glassMesh){if(this.wallMode==="cut"&&u.face){let g=((l=u.object.geometry.getAttribute("fold"))==null?void 0:l.getX(u.face.a))??Qt;if(g!==Qt&&Math.floor(g/16)===0)continue}let p=a(u.object===d.framesMesh?d.frameTris:u.object===d.glassMesh?d.glassTris:d.blindTris,h),b=p?this.pickOpenings.get(p):void 0;if(b&&n)return{entity:b}}else if(u.object===d.wallMesh){let p=a(d.geo.furnitureTris,h),b=p?this.pickFurniture.get(p):void 0,g=p&&!b?d.floor.furniture.find(m=>m.id===p&&(m.type==="wall_switch"||m.type==="wall_socket")):void 0;if(g&&(b=this.pickFurniture.get(`${g.id}#${G0(g,u.point.x,u.point.z)}`)),b&&n)return{entity:b};if(!p&&u.face&&u.face.normal.y>.7){let m=Dh(d.floor).find(x=>qt([u.point.x,u.point.z],x.points));if(m)return{floorId:d.floor.id,roomId:m.id}}if(u.face&&!p){let m=((c=d.wallMesh.geometry.getAttribute("fold"))==null?void 0:c.getX(u.face.a))??32,x=Math.floor(m/16),v=m%16,y=this.wallMode==="cut"&&x===0,M=(d.mask.glass.value&1<<v)!==0;if(!y){let w=r.ray.direction,A=Math.hypot(w.x,w.z)||1,_=[u.point.x-w.x/A*.3,u.point.z-w.z/A*.3],R=((f=d.floor.rooms.find(S=>S.points.length>=3&&qt(_,S.points)))==null?void 0:f.id)??null;if(this.roomId!==null){if(R===this.roomId)return{floorId:d.floor.id,roomId:R}}else if(!M&&R)return{floorId:d.floor.id,roomId:R}}}}else if(u.object===d.floorMesh)return{floorId:d.floor.id,roomId:a(d.geo.roomTris.map(p=>({id:p.roomId,start:p.start,end:p.end})),h)??null}}return null}get tapOpens(){var t;return!!((t=this.building)!=null&&t.settings.tap_in_room)&&this.roomId===null&&!this.furnish}onTap(t,e){var r,s,o,a,l,c;let n=this.pick(t,e,!this.tapOpens);if(n&&"entity"in n&&this.furnish){this.selectDevice(n.entity),(s=(r=this.options).onDeviceSelect)==null||s.call(r,n.entity);return}if(n&&"entity"in n){this.flashes.set(n.entity,performance.now()+Jc),this.invalidate(),(a=(o=this.options).onDeviceTap)==null||a.call(o,n.entity,t,e);return}(c=(l=this.options).onRoomTap)==null||c.call(l,(n==null?void 0:n.floorId)??this.floorId??"",(n==null?void 0:n.roomId)??null)}furnitureAt(t,e){var a;let n=this.rayAt(t,e),r=this.activeFloors(),s=l=>[l.screenMesh,l.fridgeMesh,...[...l.screenPics.values()].map(c=>c.mesh)],o=r.flatMap(l=>[l.lampMesh,l.wallMesh,...s(l)].filter(c=>c.visible));for(let l of n.intersectObjects(o,!1)){if(l.faceIndex==null)continue;let c=r.find(h=>h.group===l.object.parent||s(h).includes(l.object));if(!c)continue;if(l.object!==c.lampMesh&&l.object!==c.wallMesh){let h=this.furnitureNear(c,l.point.x,l.point.z);if(h)return{fv:c,id:h,y:l.point.y};continue}let u=(a=(l.object===c.lampMesh?c.lampFurnTris:c.geo.furnitureTris).find(h=>l.faceIndex>=h.start&&l.faceIndex<h.end))==null?void 0:a.id;if(u)return{fv:c,id:u,y:l.point.y}}return null}furnitureNear(t,e,n){let r=null;for(let s of t.floor.furniture){let o=s.rotation*ae,a=e-s.x,l=n-s.z,c=Math.abs(a*Math.cos(o)+l*Math.sin(o))-s.w/2,f=Math.abs(-a*Math.sin(o)+l*Math.cos(o))-s.d/2,u=Math.max(c,f);u<.25&&(!r||u<r.d)&&(r={id:s.id,d:u})}return(r==null?void 0:r.id)??null}floorPoint(t,e,n,r){let s=this.rayAt(e,n),o=r??t.floor.elevation+t.y,a=s.ray.direction;if(Math.abs(a.y)<1e-4)return null;let l=(o-s.ray.origin.y)/a.y;return l<=0?null:[s.ray.origin.x+a.x*l,s.ray.origin.z+a.z*l]}setFurnishTypes(t){this.furnishTypes=t?new Set(t):null}setSurfaceGrab(t){this.surfaceGrab=t}pointerRay(t,e){return this.surfaceRay(t,e)}furnitureIdAt(t,e){var n;return((n=this.furnitureAt(t,e))==null?void 0:n.id)??null}surfaceRay(t,e){let n=this.rayAt(t,e).ray;return{o:[n.origin.x,n.origin.y,n.origin.z],d:[n.direction.x,n.direction.y,n.direction.z]}}grabFurniture(t,e){var o,a,l,c,f,u,h,d;if((o=this.surfaceGrab)!=null&&o.start(this.surfaceRay(t,e)))return this.surfaceDragging=!0,!0;if(!this.furnish)return!1;let n=this.pendingDevice;this.pendingDevice=null;let r=this.furnishTypes;if(r){let p=n?(a=this.devices.find(v=>v.id===n))==null?void 0:a.furnitureId:void 0,b=p?null:this.furnitureAt(t,e),g=p??(b==null?void 0:b.id),m=g?this.floors.find(v=>v.floor.furniture.some(y=>y.id===g)):void 0,x=(l=m==null?void 0:m.floor.furniture.find(v=>v.id===g))==null?void 0:l.type;return!!(m&&g&&x&&r.has(x))&&this.grabItem(m,g,t,e)}if(n){let p=(c=this.devices.find(g=>g.id===n))==null?void 0:c.furnitureId,b=p?this.floors.find(g=>g.floor.furniture.some(m=>m.id===p)):void 0;return!p||!b?this.grabDevice(n,t,e):this.grabItem(b,p,t,e)}let s=this.furnitureAt(t,e);if(!s){let p=this.pick(t,e);return p&&"entity"in p?this.grabDevice(p.entity,t,e):(this.selectedFurniture&&(this.selectFurniture(null),(u=(f=this.options).onFurnitureSelect)==null||u.call(f,null)),this.selectedDevice&&(this.selectDevice(null),(d=(h=this.options).onDeviceSelect)==null||d.call(h,null)),!1)}return this.grabItem(s.fv,s.id,t,e,s.y)}grabItem(t,e,n,r,s){var u,h,d,p;let o=t.floor.furniture.find(b=>b.id===e),a=s===void 0?void 0:Math.min(s,this.camera.position.y-.3),l=this.floorPoint(t,n,r,a);if(!o||!l)return!1;let c,f=this.rayAt(n,r).ray.direction;if(s!==void 0&&-f.y<.34){let b=this.camera.position,g=this.camera.getWorldDirection(new W),m=Math.hypot(g.x,g.z)||1,x=[g.x/m,g.z/m],v=Math.hypot(l[0]-b.x,l[1]-b.z,(a??0)-b.y),y=this.renderer.domElement.getBoundingClientRect().height||1,M=2*v*Math.tan(this.camera.fov*Math.PI/360)/y;c={x0:n,y0:r,fx:o.x,fz:o.z,right:[-x[1],x[0]],fwd:x,perPx:M,gain:Math.min(2,1/Math.max(.5,-f.y))}}return o.locked?(this.selectFurniture(o.id),(h=(u=this.options).onFurnitureSelect)==null||h.call(u,o.id),!1):(this.grab={floorId:t.floor.id,id:o.id,offset:[o.x-l[0],o.z-l[1]],x:o.x,z:o.z,moved:!1,plane:a,screen:c},this.selectFurniture(o.id),(p=(d=this.options).onFurnitureSelect)==null||p.call(d,o.id),!0)}grabDevice(t,e,n){var a,l,c,f;let r=this.devices.find(u=>u.id===t),s=r&&this.floorMap.get(r.floorId),o=s&&this.floorPoint(s,e,n);return!r||!s||!o?!1:r.fixed?(this.selectDevice(t),(l=(a=this.options).onDeviceSelect)==null||l.call(a,t),!1):(this.deviceGrab={id:t,floorId:s.floor.id,offset:[r.x-o[0],r.z-o[1]],x:r.x,z:r.z,moved:!1},this.selectDevice(t),(f=(c=this.options).onDeviceSelect)==null||f.call(c,t),!0)}setSelectedDevice(t){t!==this.selectedDevice&&this.selectDevice(t)}selectDevice(t){var e,n;t&&this.selectedFurniture&&(this.selectFurniture(null),(n=(e=this.options).onFurnitureSelect)==null||n.call(e,null)),this.selectedDevice=t;for(let[r,s]of this.devicePins)s.el.classList.toggle("fp3d-dev-sel",r===t)}dragFurniture(t,e){var h,d,p,b;if(this.surfaceDragging){(h=this.surfaceGrab)==null||h.move(this.surfaceRay(t,e));return}let n=this.deviceGrab;if(n){let g=this.floorMap.get(n.floorId),m=this.devices.find(y=>y.id===n.id),x=g&&this.floorPoint(g,t,e);if(!g||!m||!x)return;let v=((d=this.building)==null?void 0:d.settings.grid)??.05;n.x=m.x=Math.round((x[0]+n.offset[0])/v)*v,n.z=m.z=Math.round((x[1]+n.offset[1])/v)*v,n.moved=!0,this.labelsDirty=!0,this.invalidate();return}let r=this.grab,s=r&&this.floorMap.get(r.floorId);if(!r||!s)return;let o=r.screen,a;if(o){let g=(t-o.x0)*o.perPx,m=(e-o.y0)*o.perPx*o.gain;a=[o.fx+o.right[0]*g-o.fwd[0]*m-r.offset[0],o.fz+o.right[1]*g-o.fwd[1]*m-r.offset[1]]}else a=this.floorPoint(s,t,e,r.plane);if(!a)return;let l=((p=this.building)==null?void 0:p.settings.grid)??.05,c=s.floor.furniture.find(g=>g.id===r.id),f=Math.round((a[0]+r.offset[0])/l)*l,u=Math.round((a[1]+r.offset[1])/l)*l;[r.x,r.z]=c?$m(s.floor,c,f,u,((b=this.building)==null?void 0:b.settings.wall_interior)??0):[f,u],r.moved=!0,this.updateGhost(),this.invalidate()}dropFurniture(){var n,r,s,o,a;if(this.surfaceDragging){this.surfaceDragging=!1,(n=this.surfaceGrab)==null||n.end();return}let t=this.deviceGrab;this.deviceGrab=null,t!=null&&t.moved&&((s=(r=this.options).onDeviceMove)==null||s.call(r,t.id,Math.round(t.x*1e3)/1e3,Math.round(t.z*1e3)/1e3));let e=this.grab;this.grab=null,e!=null&&e.moved&&((a=(o=this.options).onFurnitureMove)==null||a.call(o,e.id,Math.round(e.x*1e3)/1e3,Math.round(e.z*1e3)/1e3)),this.updateGhost()}updateGhost(){this.ghost&&(this.ghost.geometry.dispose(),this.ghost.material.dispose(),this.scene.remove(this.ghost),this.ghost=null);let t=[...new Set([...this.selectedFurniture?[this.selectedFurniture]:[],...this.selectedSet])],e=new Ne,n;for(let r of t){let s=this.floors.find(a=>a.floor.furniture.some(l=>l.id===r)),o=s==null?void 0:s.floor.furniture.find(a=>a.id===r);!s||!o||(n??=s,this.ghostBox(e,s,o,r===this.selectedFurniture?new j(.25,.9,1):new j(1,.71,.28)))}n&&(this.ghost=new qe(e.geometry(),new $e({vertexColors:!0,depthTest:!1,transparent:!0})),this.ghost.position.y=n.floor.elevation+n.y,this.ghost.renderOrder=20,this.scene.add(this.ghost))}ghostBox(t,e,n,r){var g,m;let s=((g=this.grab)==null?void 0:g.id)===n.id?this.grab.x:n.x,o=((m=this.grab)==null?void 0:m.id)===n.id?this.grab.z:n.z,a=e.floor.height,l=["lamp_ceiling","lamp_downlight","lamp_spot","lamp_panel","lamp_pendant"].includes(n.type)&&n.mount_y==null,c=Math.max(.1,n.type==="lamp_pendant"?.3:n.h),f=_e(n.type)||n.type==="lamp_wall"||n.type==="led_strip"?en(e.floor,n):l?n.type==="lamp_pendant"?a-n.h-.1:a-c:en(e.floor,n),u=n.rotation*ae,h=Math.cos(u),d=Math.sin(u),p=(x,v,y)=>[s+x*h-v*d,y,o+x*d+v*h],b=[[-n.w/2,-n.d/2],[n.w/2,-n.d/2],[n.w/2,n.d/2],[-n.w/2,n.d/2]];for(let x=0;x<4;x++){let[v,y]=b[x],[M,w]=b[(x+1)%4];t.seg(p(v,y,f+.01),p(M,w,f+.01),r),t.seg(p(v,y,f+c),p(M,w,f+c),r),t.seg(p(v,y,f+.01),p(v,y,f+c),r)}t.seg(p(-n.w/2,n.d/2+.03,f+.02),p(n.w/2,n.d/2+.03,f+.02),new j(1,1,1))}onHold(t,e){var r,s;let n=this.pick(t,e);n&&"entity"in n&&((s=(r=this.options).onDeviceHold)==null||s.call(r,n.entity,t,e))}swipeStart(t,e,n,r){var o,a;if(this.furnish||Math.abs(r)<Math.abs(n)*1.2)return!1;let s=this.pick(t,e);return!s||!("entity"in s)||((a=(o=this.options).onDeviceSwipe)==null?void 0:a.call(o,s.entity,"start",0,t,e))!==!0?!1:(this.swipe={entity:s.entity,x:t,y:e},!0)}floorThumbnails(t=200,e=150){var m,x;let n=this.floors.filter(v=>v.floor.rooms.some(y=>y.points.length>=3));if(!n.length)return[];let r=this.lowQuality?1:Math.min(2,window.devicePixelRatio||1),s=Math.round(t*r),o=Math.round(e*r),a=new Ye(s,o);a.texture.colorSpace=Ue;let l=new Ln(-1,1,1,-1,.1,400),c=this.floors.map(v=>({fv:v,visible:v.group.visible,y:v.y,o:v.o,standing:v.mask.standing.value,glass:v.mask.glass.value})),f=((m=this.roof)==null?void 0:m.group.visible)??!1,u=((x=this.ghost)==null?void 0:x.visible)??!1,h=this.renderer.getClearAlpha(),d=new Uint8Array(s*o*4),p=document.createElement("canvas");p.width=s,p.height=o;let b=p.getContext("2d"),g=[];try{this.roof&&(this.roof.group.visible=this.roof.wins.visible=!1),this.ghost&&(this.ghost.visible=!1),this.renderer.setClearAlpha(0);for(let v of n){for(let L of this.floors)L.group.visible=L===v;v.y=0,v.o=1,this.applyFloor(v),v.group.visible=!0,v.mask.standing.value=0,v.mask.glass.value=0;let y=v.floor.rooms.flatMap(L=>L.points),M=v.floor.elevation,w=new xn(new W(Math.min(...y.map(L=>L[0]))-.3,M,Math.min(...y.map(L=>L[1]))-.3),new W(Math.max(...y.map(L=>L[0]))+.3,M+Math.min(v.floor.cut_height,v.floor.height),Math.max(...y.map(L=>L[1]))+.3)),A=w.getCenter(new W),_=-.6,R=.8,S=new W(Math.sin(R)*Math.sin(_),Math.cos(R),Math.sin(R)*Math.cos(_));l.position.copy(A).addScaledVector(S,100),l.lookAt(A),l.updateMatrixWorld();let E=.5,I=.5;for(let L of[w.min.x,w.max.x])for(let T of[w.min.y,w.max.y])for(let P of[w.min.z,w.max.z]){let N=new W(L,T,P).applyMatrix4(l.matrixWorldInverse);E=Math.max(E,Math.abs(N.x)),I=Math.max(I,Math.abs(N.y))}let O=s/o;E/I>O?I=E/O:E=I*O,l.left=-E*1.05,l.right=E*1.05,l.top=I*1.05,l.bottom=-I*1.05,l.updateProjectionMatrix(),this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,l),this.renderer.readRenderTargetPixels(a,0,0,s,o,d);let C=b.createImageData(s,o);for(let L=0;L<o;L++)C.data.set(d.subarray((o-1-L)*s*4,(o-L)*s*4),L*s*4);b.putImageData(C,0,0),g.push({floorId:v.floor.id,url:p.toDataURL("image/png")})}}finally{this.renderer.setRenderTarget(null),this.renderer.setClearAlpha(h);for(let v of c)v.fv.y=v.y,v.fv.o=v.o,v.fv.mask.standing.value=v.standing,v.fv.mask.glass.value=v.glass,this.applyFloor(v.fv),v.fv.group.visible=v.visible;this.roof&&(this.roof.group.visible=f,this.roof.wins.visible=!0),this.ghost&&(this.ghost.visible=u),a.dispose(),this.invalidate()}return g}setRobots(t){let e=new Set;for(let n of t){e.add(n.id);let r=this.robots.get(n.id);if(r&&r.modelKey!==this.robotModelKey(n)){let a=r;a.group.removeFromParent(),a.led.dispose();for(let l of a.own)l.dispose();r={...this.makeRobot(n),motion:a.motion,info:a.info},this.robots.set(n.id,r)}r||(r=this.makeRobot(n),this.robots.set(n.id,r));let s=r.info.mode,o=n.mode==="cleaning"&&s==="cleaning"&&((r.info.roomId??null)!==(n.roomId??null)||JSON.stringify(r.info.obstacles??[])!==JSON.stringify(n.obstacles??[]));if(r.info=n,n.mode==="cleaning"&&(s!=="cleaning"||o||!r.motion.path.length)){let a=n.room?Dg(n.room,void 0,void 0,n.obstacles):Lf(n.rest),l=a.length?a:Lf(n.rest),c=0;l.forEach((f,u)=>{Math.hypot(f[0]-r.motion.pos[0],f[1]-r.motion.pos[1])<Math.hypot(l[c][0]-r.motion.pos[0],l[c][1]-r.motion.pos[1])&&(c=u)}),r.motion.path=l,r.motion.next=c,n.room&&!qt(r.motion.pos,n.room)&&(r.motion.pos=[l[c][0],l[c][1]])}r.led.color.setHex(Hg[n.mode])}for(let[n,r]of this.robots)if(!e.has(n)){r.group.removeFromParent(),r.led.dispose();for(let s of r.own)s.dispose();this.robots.delete(n)}this.robotLast=0,this.invalidate()}robotModelKey(t){let e=t.model;return e&&_e(e.type)?`${e.type}|${e.w}|${e.d}|${e.h}`:""}makeRobot(t){let e={pos:[...t.rest],heading:t.restHeading,path:[],next:0},n=new Yt({color:Hg[t.mode]}),r=this.robotModelKey(t),s=t.model?_e(t.model.type):void 0;if(t.model&&s&&r){let{w:a,d:l,h:c}=t.model,f=new ie,{radius:u,top:h}=xm(f,s,a,l,c),d=new ie,p=Math.min(.05,u*.3),b=Math.min(.1,u*.55);Ie(d,[[-p,b],[p,b],[p,b+p*.8],[-p,b+p*.8]],h,h+.005,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotMat??=new Yt({vertexColors:!0});let g=[f.geometry(),d.geometry()],m=new De;return m.add(new Ct(g[0],this.robotMat),new Ct(g[1],n)),{info:t,motion:e,group:m,led:n,own:g,modelKey:r}}if(!this.robotGeo){let a=new ie,l=(f,u,h,d,p)=>{let b=[];for(let g=0;g<20;g++)b.push([Math.cos(g/20*Math.PI*2)*f,Math.sin(g/20*Math.PI*2)*f]);Ie(a,b,u,h,d,p,{aoFrom:0,bottom:!1})};l(.17,.012,.08,2371657,3424863),l(.055,.08,.1,3820138,5070726),this.robotGeo=a.geometry(),this.robotMat??=new Yt({vertexColors:!0});let c=new ie;Ie(c,[[-.05,.1],[.05,.1],[.05,.14],[-.05,.14]],.08,.085,16777215,16777215,{aoFrom:0,bottom:!1}),this.robotLedGeo=c.geometry()}let o=new De;return o.add(new Ct(this.robotGeo,this.robotMat),new Ct(this.robotLedGeo,n)),{info:t,motion:e,group:o,led:n,own:[],modelKey:r}}stepRobots(t){if(!this.robots.size)return!1;let e=this.robotLast?Math.min(.2,(t-this.robotLast)/1e3):0;this.robotLast=t;let n=!1;for(let r of this.robots.values()){let s=this.floorMap.get(r.info.floorId);s&&(r.group.parent!==s.group&&s.group.add(r.group),e>0?n=Og(r.motion,r.info,e)||n:n||=r.info.mode==="cleaning"||r.info.mode==="returning",r.group.position.set(r.motion.pos[0],0,r.motion.pos[1]),r.group.rotation.y=r.motion.heading)}return n||(this.robotLast=0),n}setTrail(t,e=[]){let n=a=>new j(.25-.2*a,.95-.83*a,1-.7*a),r=new j(0,0,0),s=new j(.3,1,.6),o=.02;for(let a of this.floors){let l=new ie;for(let f of e)f.floorId===a.floor.id&&f.points.forEach(([u,h],d)=>{let p=f.points[d-1];if(p){let b=Math.hypot(u-p[0],h-p[1])||1,g=-(h-p[1])/b*.1,m=(u-p[0])/b*.1;l.tri([p[0]+g,o,p[1]+m],[u+g,o,h+m],[u-g,o,h-m],s,s,s),l.tri([p[0]+g,o,p[1]+m],[u-g,o,h-m],[p[0]-g,o,p[1]-m],s,s,s)}for(let b=0;b<10;b++){let g=b/10*Math.PI*2,m=(b+1)/10*Math.PI*2;l.tri([u,o,h],[u+Math.cos(m)*.35,o,h+Math.sin(m)*.35],[u+Math.cos(g)*.35,o,h+Math.sin(g)*.35],s,r,r)}});let c=null;for(let f of t){if(f.floorId!==a.floor.id)continue;let u=n(f.age);if(c){let h=Math.hypot(f.x-c.x,f.z-c.z)||1,d=-(f.z-c.z)/h*.06,p=(f.x-c.x)/h*.06,b=n(c.age);l.tri([c.x+d,o,c.z+p],[f.x+d,o,f.z+p],[f.x-d,o,f.z-p],b,u,u),l.tri([c.x+d,o,c.z+p],[f.x-d,o,f.z-p],[c.x-d,o,c.z-p],b,u,b)}for(let h=0;h<12;h++){let d=h/12*Math.PI*2,p=(h+1)/12*Math.PI*2;l.tri([f.x,o,f.z],[f.x+Math.cos(p)*.22,o,f.z+Math.sin(p)*.22],[f.x+Math.cos(d)*.22,o,f.z+Math.sin(d)*.22],u,r,r)}c=f}a.trailMesh.geometry.dispose(),a.trailMesh.geometry=l.geometry(),a.trailMesh.visible=l.count>0}this.invalidate()}getView(){return{...this.controls.view,target:this.controls.view.target.clone()}}flyTo(t,e=900){this.controls.flyTo(t,e)}lookThrough(t){let e=this.devices.find(c=>c.id===t&&c.model),n=e&&this.floorMap.get(e.floorId);if(!e||!n)return!1;let r=(e.rotation??0)*ae,s=e.model==="camera_ceiling",o=Math.min(1.45,Math.max(.22,(e.tilt??(s?65:20))*ae)),a=n.floor.elevation+n.ty+(s?n.floor.height-.1:e.y),l=new W(-Math.sin(r)*Math.cos(o),-Math.sin(o),Math.cos(r)*Math.cos(o));return this.controls.flyTo({target:new W(e.x,a,e.z).addScaledVector(l,3.15),radius:3,phi:Math.PI/2-o,theta:Math.atan2(Math.sin(r),-Math.cos(r))},900),!0}flashDevices(t){let e=performance.now()+Jc;for(let n of t)this.flashes.set(n,e);t.length&&this.invalidate()}focus(t,e,n,r,s,o){let a=this.floorMap.get(t);if(a){if(this.controls.flyTo({target:new W(e,a.floor.elevation+a.ty+r,n),radius:(o==null?void 0:o.radius)??5.5,phi:(o==null?void 0:o.phi)??.78,...(o==null?void 0:o.theta)!==void 0?{theta:o.theta}:{}},900),s){this.flashes.set(s,performance.now()+2400);let l=this.host.querySelector(`.fp3d-dev[data-entity="${CSS.escape(s)}"]`);l==null||l.classList.add("fp3d-dev-found"),setTimeout(()=>l==null?void 0:l.classList.remove("fp3d-dev-found"),2600)}this.invalidate()}}render(t){if(this.frame=0,this.disposed)return;let e=this.lastFrame?Math.min(100,t-this.lastFrame):16,n=!1;this.orbitSpeed&&!this.controls.active?(this.orbitLast&&(this.controls.view.theta+=this.orbitSpeed*Math.min(100,t-this.orbitLast)/1e3),this.orbitLast=t,n=!0):this.orbitLast=0;let r=this.controls.update(t),s=this.stepFloors(e),o=this.stepOpenings(e)||this.stepFridges(e),a=!1;if(this.flashes.size){let m=new Set;for(let[x,v]of this.flashes){let y=this.deviceFloor.get(x);y&&m.add(y),v<=t&&this.flashes.delete(x)}a=this.flashes.size>0;for(let x of this.floors)m.has(x.floor.id)&&this.buildLamps(x)}let l=this.placeRoof(e),c=this.stepRobots(t),f=this.stepWeather(t),u=r||s||o||a||l,h=[];(r||this.controls.busy)&&h.push("camera"),s&&h.push("floors"),o&&h.push("openings"),a&&h.push("flash"),l&&h.push("roof"),this.flowActive&&h.push("flow"),this.soundActive&&h.push("sound"),this.poolActive&&h.push("pool"),this.solarActive&&h.push("solar"),this.effectTick&&h.push("effect"),this.fanFloors.size&&h.push("fan"),c&&h.push("robot"),n&&h.push("orbit"),this.tintTick&&h.push("tint"),this.effectTick=this.tintTick=!1,this.lastFrame=u?t:0,this.flowTime.value=this.flowSeconds(),this.soundActive&&this.animateSound(t),this.updateWalls(),this.projections.active&&this.updateProjections(),this.sunFx.showShadow(this.floorId===null&&this.shadowSig!==""),this.placeFog(),this.renderer.render(this.scene,this.camera),this.disposeRetired(),(this.viewChanged()||s||this.labelsDirty)&&(this.labelsDirty=!1,this.updateLabels()),this.reportStats(t,h),u&&this.invalidate();let d=this.fanFloors.size>0,p=this.flowActive||this.solarActive||this.soundActive||this.poolActive||c||d||this.effectFloors.size>0;p&&!this.decorWas&&(this.lastWake=t),this.decorWas=p;let b=this.effectFloors.size||d?this.decor(this.lowQuality?2*jg:jg):null;if(b!==null&&!this.effectTimer&&!document.hidden&&!u){let m=b;this.effectTimer=setTimeout(()=>{this.effectTimer=void 0,this.effectTime+=m/1e3,this.fanAngle+=m/1e3*Cw,this.effectTick=!0;for(let x of this.floors)x.o<.02||!(this.effectFloors.has(x.floor.id)||this.fanFloors.has(x.floor.id))||(this.buildLamps(x),this.buildGlow(x));this.decorTimer||this.invalidate()},m)}!u&&n&&!this.orbitTimer&&(this.orbitTimer=setTimeout(()=>{this.orbitTimer=void 0,this.invalidate()},this.lowQuality?66:33)),!u&&f&&!this.weatherTimer&&(this.weatherTimer=setTimeout(()=>{this.weatherTimer=void 0,this.invalidate()},33));let g=this.flowActive||this.solarActive||this.soundActive||this.poolActive;if(this.lowQuality){let m=c||g?this.decor(0):null;!u&&m!==null&&!this.decorTimer&&(this.decorTimer=setTimeout(()=>{this.decorTimer=void 0,this.invalidate()},m));return}!u&&c&&!this.robotTimer&&(this.robotTimer=setTimeout(()=>{this.robotTimer=void 0,this.invalidate()},33)),!u&&g&&!this.flowTimer&&(this.flowTimer=setTimeout(()=>{this.flowTimer=void 0,this.invalidate()},_w))}updateWalls(){let t=this.camera.position,e=this.controls.view.target,n=t.x-e.x,r=t.z-e.z,s=Math.hypot(n,r)||1;for(let o of this.floors){let a=this.roomId!==null&&o.floor.rooms.some(f=>f.id===this.roomId),l=this.wallMode==="cut",c=0;o.geo.buckets.forEach((f,u)=>{let h=f?f[0]*n/s+f[1]*r/s>=.25:a;!l&&h&&(c|=1<<u)}),o.mask.standing.value=l?0:65535,o.mask.glass.value=c}}viewChanged(){let t=this.controls.view,e=this.viewKey;return e[0]===t.target.x&&e[1]===t.target.y&&e[2]===t.target.z&&e[3]===t.radius&&e[4]===t.theta&&e[5]===t.phi?!1:(e[0]=t.target.x,e[1]=t.target.y,e[2]=t.target.z,e[3]=t.radius,e[4]=t.theta,e[5]=t.phi,!0)}place(t,e){let n=e===null;t.hidden!==n&&(t.hidden=n),e!==null&&this.placed.get(t)!==e&&(this.placed.set(t,e),t.style.transform=e)}updateLabels(){let{w:t,h:e}=this.size,n=new W,r=this.houseView,s=[];for(let o of this.floors){let a=o.bbox;if(!(r&&o.o>.5&&a)){this.place(o.label,null);continue}let l=null,c=null,f=o.floor.elevation+o.y+o.floor.cut_height*.5;for(let b of[a.x0,a.x1])for(let g of[a.z0,a.z1]){n.set(b,f,g).project(this.camera);let m=(n.x+1)/2*t,x=(1-n.y)/2*e;(!l||m<l.x)&&(l={x:m,y:x}),(!c||m>c.x)&&(c={x:m,y:x})}o.label.hidden&&(o.label.hidden=!1),o.labelSize??={w:o.label.offsetWidth,h:o.label.offsetHeight};let u=o.labelSize.w,h=8+this.labelInset,d=l.x-u-14,p=l.y;d<h&&this.labelInset&&(d=c.x+14,p=c.y),s.push({fv:o,left:Math.max(h,Math.min(t-u-8,d)),y:p,h:o.labelSize.h})}s.sort((o,a)=>a.fv.rank-o.fv.rank);for(let o=1;o<s.length;o++){let a=s[o-1];s[o].y=Math.max(s[o].y,a.y+(a.h+s[o].h)/2+8)}for(let o of s)this.place(o.fv.label,`translate(${o.left}px, ${o.y}px) translate(0, -50%)`);this.anchorCb&&this.anchors.forEach((o,a)=>{let l=this.floorMap.get(o.floorId);if(this.roomId!==null&&o.room!==this.roomId||o.views==="floor"&&this.floorId===null){this.anchorCb(a,0,0,!1,1,!0);return}if(this.floorId!==null&&this.floors.length>1&&(o.views==="house"||o.floorId!==this.floorId)){this.anchorCb(a,0,0,!1,1,!0);return}let c=new W(o.p[0],o.p[1]+((l==null?void 0:l.y)??0)+(o.roof&&(this.floorId===null||this.floors.length<=1)?this.roofLift():0),o.p[2]),f=this.camera.position.clone().sub(c),u=f.length();if(o.near!==void 0&&u>o.near){this.anchorCb(a,0,0,!1,1,!0);return}let h=f.normalize().dot(new W(o.n[0],o.n[1],o.n[2]))>=0;n.copy(c).project(this.camera);let d=n.z>1||Math.abs(n.x)>1.3||Math.abs(n.y)>1.3,p=Math.min(1.6,Math.max(.25,15/Math.max(1,u)))*o.size;this.anchorCb(a,(n.x+1)/2*t,(1-n.y)/2*e,!d,p,h)}),this.updateDevicePins(t,e);for(let o of this.floors){let a=o.to<.99||o.o<.9||r||this.roomId!==null||this.otherFloor(o),l=o.floor.elevation+o.y+.05;for(let c of o.roomPins){if(a){this.place(c.pin,null);continue}n.set(c.cx,l,c.cz).project(this.camera);let f=n.z>1||Math.abs(n.x)>1.1||Math.abs(n.y)>1.1;this.place(c.pin,f?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}}otherFloor(t){return this.floorId!==null&&t.floor.id!==this.floorId}updateDevicePins(t,e){var s;let n=new W,r=this.houseView;for(let o of this.persons){let a=this.personPins.get(o.id),l=this.floorMap.get(o.floorId),c=this.figures.get(o.id);if(!a)continue;if(!l||r||l.to<.99||l.o<.9||this.otherFloor(l)){this.place(a,null),c!=null&&c.visible&&(c.visible=!1,this.invalidate());continue}let f=this.personAt.get(o.id);if(!f||f.floorId!==o.floorId)f={floorId:o.floorId,x:o.x,z:o.z};else{let d=o.x-f.x,p=o.z-f.z;Math.hypot(d,p)>.02?(f={floorId:o.floorId,x:f.x+d*.12,z:f.z+p*.12},this.labelsDirty=!0,this.invalidate()):f={floorId:o.floorId,x:o.x,z:o.z}}this.personAt.set(o.id,f);let u=l.floor.elevation+l.y;if(c){let d=Math.atan2(this.camera.position.x-f.x,this.camera.position.z-f.z);(!c.visible||c.position.x!==f.x||c.position.y!==u||c.position.z!==f.z||c.rotation.y!==d)&&(c.visible=!0,c.position.set(f.x,u,f.z),c.rotation.y=d,this.invalidate())}n.set(f.x,u+(c?1.85:.9),f.z).project(this.camera);let h=n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05;this.place(a,h?null:`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}for(let o of this.devices){let a=(s=this.devicePins.get(o.id))==null?void 0:s.el;if(!a)continue;let l=this.floorMap.get(o.floorId),c=o.id.startsWith("detect:")||o.id.startsWith("hh:")&&o.active;if(!l||r&&!c||l.to<.99||l.o<.9||o.pin===!1||this.otherFloor(l)){this.place(a,null);continue}if(n.set(o.x,l.floor.elevation+l.y+o.y,o.z).project(this.camera),n.z>1||Math.abs(n.x)>1.05||Math.abs(n.y)>1.05){this.place(a,null);continue}let u=this.roomId===null?o.full?"full":"":o.roomId===this.roomId?"full":"dim";this.pinMode.get(a)!==u&&(this.pinMode.set(a,u),a.classList.toggle("fp3d-dev-full",u==="full"),a.classList.toggle("fp3d-dev-dim",u==="dim")),this.place(a,`translate(${(n.x+1)/2*t}px, ${(1-n.y)/2*e}px) translate(-50%, -50%)`)}}reportStats(t,e){if(!this.statsOn||!this.options.onStats)return;let n=e.length>0;this.fpsStart||(this.fpsStart=t),this.lastStatsFrame&&n&&(this.worstFrame=Math.max(this.worstFrame,t-this.lastStatsFrame)),this.lastStatsFrame=n?t:0,this.fpsFrames++;let r=t-this.fpsStart;if(r>500||!n){let s=this.renderer.info.render;this.options.onStats({fps:n?Math.round(this.fpsFrames*1e3/r):0,busy:e,worstMs:Math.round(this.worstFrame),calls:s.calls,triangles:s.triangles,low:this.lowQuality,pixelRatio:this.renderer.getPixelRatio(),gpu:this.gpuName??=Lw(this.renderer)}),this.fpsFrames=0,this.fpsStart=t,this.worstFrame=0}}};function Lw(i){try{let t=i.getContext(),e=t.getExtension("WEBGL_debug_renderer_info"),n=e?t.getParameter(e.UNMASKED_RENDERER_WEBGL):t.getParameter(t.RENDERER);return typeof n=="string"?n:null}catch{return null}}function Fw(){let t=document.createElement("canvas");t.width=256*3,t.height=256*2;let e=t.getContext("2d"),n=(o,a,l,c,f)=>{e.strokeStyle=`rgba(55,224,255,${f})`,e.beginPath(),e.moveTo(o,a),e.lineTo(l,c),e.stroke()};e.lineWidth=1.5;let r=(o,a,l)=>{e.save(),e.beginPath(),e.rect(o*256,a*256,256,256),e.clip(),l(o*256,a*256),e.restore()};r(0,0,(o,a)=>{for(let l=0;l<5;l++){let c=a+l*256/5+.75;n(o,c,o+256,c,.09);let f=o+l*.37%1*256;n(f,c,f,c+256/5,.07)}}),r(1,0,(o,a)=>{for(let l=0;l<7;l++){let c=o+l*256/7+.75;n(c,a,c,a+256,.08);let f=a+l*.53%1*256;n(c,f,c+256/7,f,.06)}}),r(2,0,(o,a)=>{for(let l=0;l<4;l++){let c=l*256/4+.75;n(o+c,a,o+c,a+256,.1),n(o,a+c,o+256,a+c,.1)}}),r(1,1,(o,a)=>{for(let l=0;l<2;l++){let c=a+l*256/2+.75;n(o,c,o+256,c,.09);let f=l?256/4:0;for(let u of[f,f+256/2])n(o+u+.75,c,o+u+.75,c+256/2,.09)}}),r(2,1,(o,a)=>{n(o+.75,a,o+.75,a+256,.08),n(o,a+.75,o+256,a+.75,.08),e.fillStyle="rgba(55,224,255,0.05)";for(let l=0;l<90;l++)e.fillRect(o+l*97%256,a+(l*61+l*l%37)%256,2,2)});let s=new yn(t);return s.flipY=!1,s.wrapS=Mn,s.wrapT=Mn,s.anisotropy=4,s.colorSpace=Ue,s}function Dw(i){let t=new Yt({map:i,transparent:!0,blending:Re,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2});return t.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 tile;
varying vec2 vFp3dTile;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFp3dTile = tile;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFp3dTile;`).replace("#include <map_fragment>",`#ifdef USE_MAP
        vec2 fp3dCell = fract(vMapUv);
        vec2 fp3dUv = (vFp3dTile + 0.004 + fp3dCell * 0.992) / vec2(3.0, 2.0);
        // gradients of the unwrapped coordinates avoid mip seams at the tile borders
        vec4 sampledDiffuseColor = textureGrad(map, fp3dUv, dFdx(vMapUv) / vec2(3.0, 2.0), dFdy(vMapUv) / vec2(3.0, 2.0));
        diffuseColor *= sampledDiffuseColor;
      #endif`)},t.customProgramCacheKey=()=>"fp3d-pattern",t}function Ow(){let i=document.createElement("canvas");i.width=8,i.height=32;let t=i.getContext("2d");t.fillStyle="#1a2742",t.fillRect(0,0,8,32),t.fillStyle="#223556",t.fillRect(0,4,8,14),t.fillStyle="rgba(55,224,255,0.45)",t.fillRect(0,29,8,2);let e=new yn(i);return e.wrapS=pr,e.wrapT=pr,e.colorSpace=Ue,e}function na(i){let t=e=>Math.round(e*100);return`${i.floorId}:${i.a.map(t).join(",")}>${i.b.map(t).join(",")}${i.width?`~${i.width}`:""}`}function Df(i){return i>.5?Math.min(2.4,.3+Math.sqrt(i)/28):0}function Nw(i){let t=new Yt({vertexColors:!0,transparent:!0,depthWrite:!1,side:oe,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(1.0, 0.97, 0.9), 0.38 * fp3dSwell * fp3dAcross);`)},t.customProgramCacheKey=()=>"fp3d-pipe-line",t}function Uw(i){let t=new Yt({vertexColors:!0,transparent:!0,blending:Re,depthWrite:!1,side:oe});return t.onBeforeCompile=e=>{e.uniforms.uFlowTime=i,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb *= (0.3 + 1.7 * fp3dDot) * (0.2 + 0.8 * fp3dCore);`)},t.customProgramCacheKey=()=>"fp3d-flow",t}function Qg(i,t){let e=i.rooms.map((r,s)=>s),n=r=>e[r]===r?r:e[r]=n(e[r]);for(let[r,s]of t){let o=i.rooms.findIndex(f=>f.id===r),a=i.rooms.findIndex(f=>f.id===s);if(o<0||a<0)continue;let l=n(o),c=n(a);l!==c&&(e[Math.max(l,c)]=Math.min(l,c))}return e.map((r,s)=>n(s))}function Bw(){let t=document.createElement("canvas");t.width=64,t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.2,"rgba(255,255,255,0.45)"),n.addColorStop(.55,"rgba(255,255,255,0.1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,0,64,64);let r=new yn(t);return r.colorSpace=Ue,r}function kw(){let t=Of,e=document.createElement("canvas");e.width=1024,e.height=1024;let n=e.getContext("2d");n.strokeStyle="rgba(91,124,255,0.16)",n.lineWidth=1;for(let o=0;o<=t;o++){let a=Math.round(o/t*1024)+.5;n.beginPath(),n.moveTo(a,0),n.lineTo(a,1024),n.moveTo(0,a),n.lineTo(1024,a),n.stroke()}n.globalCompositeOperation="destination-in";let r=n.createRadialGradient(1024/2,1024/2,1024*.12,1024/2,1024/2,1024/2);r.addColorStop(0,"rgba(0,0,0,1)"),r.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=r,n.fillRect(0,0,1024,1024);let s=new yn(e);return s.anisotropy=4,s.colorSpace=Ue,s}function bP(i,t){return new Nf(i,t)}function Ff(i,t,e,n){let[r,s,o]=t.size??jc[t.lamp],a=t.base??0,l=(t.rotation??0)*ae,c=Math.cos(l),f=Math.sin(l),u=(b,g)=>[t.x+b*c-g*f,t.z+b*f+g*c],h=(b,g,m,x,v,y=14)=>{let M=[];for(let w=0;w<y;w++){let A=w/y*Math.PI*2;M.push([t.x+Math.cos(A)*b,t.z+Math.sin(A)*b])}Ie(i,M,g,m,x,v,{aoFrom:0,bottom:!0})},d=(b,g,m,x,v,y,M,w=M)=>Ie(i,[u(b,m),u(g,m),u(g,x),u(b,x)],v,y,M,w,{aoFrom:0,bottom:!0}),p=Math.max(.05,Math.min(r,s)/2);switch(t.lamp){case"ceiling":h(p*.25,e-.04,e,re,re,8),h(p,e-Math.max(.04,o)-.035,e-.04,n,n);break;case"ceiling_fan":{let b=Math.max(.09,p*.17),g=.1,m=e-.06,x=m-g;if(t.fanBlades||t.fanStatic){let v=x+g*.32,y=Math.max(b+.15,p),M=Math.max(.05,b*.85);for(let w=0;w<5;w++){let A=l+(t.spinAngle??0)+w/5*Math.PI*2,_=Math.cos(A),R=Math.sin(A),S=t.x+_*b*.9,E=t.z+R*b*.9,I=t.x+_*y,O=t.z+R*y,C=[[S+R*M,E-_*M],[I+R*M*.55,O-_*M*.55],[I-R*M*.55,O+_*M*.55],[S-R*M,E+_*M]];Ie(i,C,v,v+.014,re,re,{aoFrom:0,bottom:!0})}}if(!t.fanBlades){h(Math.max(.05,b*.7),e-.015,e,re,re,10),h(.02,m,e-.015,re,re,6),h(b,x,m,re,re,16);let v=x-.002,y=Math.max(.12,o-g-.08),M=b*.55,w=Math.max(M+.04,b*1.35);for(let A=0;A<6;A++){let _=w+(M-w)*((A+.5)/6);d(-_,_,-_,_,v-y+y*A/6,v-y+y*(A+1)/6,n,n)}}break}case"pendant":{let b=Math.max(.4,e-o);h(.06,e-.02,e,re,re,8);let g=t.variant==="globe"?b+2*p:t.variant==="drum"?b+.24:b+.2;if(h(.008,g,e-.02,re,re,5),t.variant==="globe")for(let x=0;x<7;x++){let v=Math.PI*(x/7),y=Math.PI*((x+1)/7);h(p*Math.max(.2,Math.sin((v+y)/2)),b+p-p*Math.cos(v),b+p-p*Math.cos(y),n,n,14)}else if(t.variant==="cone")for(let x=0;x<4;x++)h(p*(.25+.75*(4-x)/4),b+.06*x,b+.06*(x+1),n,n,16);else t.variant==="drum"?h(p,b,b+.24,n,n,18):(h(p*.35,b+.14,b+.2,n,n,12),h(p,b,b+.14,n,n,16));break}case"downlight":h(p,e-.012,e,re,re,12),h(p*.7,e-.02,e-.012,n,n,12);break;case"spot":h(p*.6,e-.02,e,re,re,10),h(p,e-Math.max(.06,o),e-.02,re,re,12),h(p*.8,e-Math.max(.06,o)-.008,e-Math.max(.06,o),n,n,12);break;case"panel":d(-r/2,r/2,-s/2,s/2,e-Math.max(.015,o),e,re,re),d(-r/2+.02,r/2-.02,-s/2+.02,s/2-.02,e-Math.max(.015,o)-.004,e-Math.max(.015,o),n);break;case"uplight":h(Math.max(.1,p*.6),a,a+.03,re,re),h(.014,a+.03,a+o-.12,re,re,6),h(p,a+o-.14,a+o-.02,re,re),h(p*.92,a+o-.02,a+o,n,n);break;case"bollard":h(p,a,a+o-.14,re,re,10),h(p*.9,a+o-.14,a+o-.03,n,n,10),h(p*1.1,a+o-.03,a+o,re,re,10);break;case"garden":h(.012,a,a+o-.08,re,re,5),h(p,a+o-.08,a+o-.01,re,re,10),h(p*.8,a+o-.01,a+o,n,n,10);break;case"floor":h(Math.max(.1,p*.7),a,a+.03,re,re),h(.014,a+.03,a+o-.28,re,re,6),h(p,a+o-.3,a+o,n,n);break;case"table":h(Math.max(.05,p*.55),a,a+.03,re,re),h(.012,a+.03,a+o-.16,re,re,6),h(p,a+o-.18,a+o,n,n);break;case"wall":{let b=t.base??fc;d(-r/2+.03,r/2-.03,-s/2,-s/2+.02,b,b+o,re),d(-r/2,r/2,-s/2+.02,s/2,b+o*.15,b+o*.85,n);break}case"strip":{let b=Math.max(.02,o),g=t.base!=null?t.base+b:e-.04;if(!t.roll&&!t.upright&&!t.rise){d(-r/2,r/2,-s/2,s/2,g-b,g,n);break}let m=(t.roll??0)*ae,x=Math.cos(m),v=Math.sin(m),y=t.upright?a+r/2:g-b/2,M=(t.upright?0:t.rise??0)*ae,w=(E,I,O)=>{let C=E,L=I*x-O*v,T=I*v+O*x;return M&&([C,L]=[C*Math.cos(M)-L*Math.sin(M),C*Math.sin(M)+L*Math.cos(M)]),t.upright&&([C,L]=[-L,C]),[t.x+C*c-T*f,y+L,t.z+C*f+T*c]},A=[w(-r/2,-b/2,-s/2),w(r/2,-b/2,-s/2),w(r/2,-b/2,s/2),w(-r/2,-b/2,s/2),w(-r/2,b/2,-s/2),w(r/2,b/2,-s/2),w(r/2,b/2,s/2),w(-r/2,b/2,s/2)],_=new j(n),R=[t.x,y,t.z],S=(E,I,O,C)=>{let[L,T,P]=[A[E],A[I],A[O]],N=[(T[1]-L[1])*(P[2]-L[2])-(T[2]-L[2])*(P[1]-L[1]),(T[2]-L[2])*(P[0]-L[0])-(T[0]-L[0])*(P[2]-L[2]),(T[0]-L[0])*(P[1]-L[1])-(T[1]-L[1])*(P[0]-L[0])],F=[L[0]-R[0],L[1]-R[1],L[2]-R[2]],z=N[0]*F[0]+N[1]*F[1]+N[2]*F[2]<0,[B,V,H,J]=z?[A[C],A[O],A[I],A[E]]:[A[E],A[I],A[O],A[C]];i.tri(B,V,H,_,_,_),i.tri(B,H,J,_,_,_)};S(0,1,2,3),S(4,5,6,7),S(0,1,5,4),S(1,2,6,5),S(2,3,7,6),S(3,0,4,7);break}}}export{wf as FloorMap,Nf as FloorplanViewer,Tf as WalkCamera,bP as createViewer,eP as funLib,gw as furnitureFront,mw as furniturePreview,Iw as isLowEnd,Ff as pushLampModel};
